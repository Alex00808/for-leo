-- Run this once in Supabase > SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null check (char_length(display_name) between 1 and 40),
  avatar_url text not null default '',
  role text not null default 'guest' check (role in ('guest', 'friend', 'family', 'owner')),
  created_at timestamptz not null default now()
);

alter table public.profiles
  add column if not exists role text not null default 'guest'
  check (role in ('guest', 'friend', 'family', 'owner'));

create table if not exists public.album_photos (
  id uuid primary key default gen_random_uuid(),
  src text not null,
  storage_path text not null default '',
  place text not null default '',
  taken_at timestamptz not null default now(),
  featured_slot smallint check (featured_slot between 0 and 2),
  created_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists album_photos_featured_slot_unique
  on public.album_photos(featured_slot) where featured_slot is not null;

create table if not exists public.album_comments (
  id uuid primary key default gen_random_uuid(),
  photo_id uuid not null references public.album_photos(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 4000),
  created_at timestamptz not null default now()
);

create table if not exists public.album_comment_archive (
  archive_id uuid primary key default gen_random_uuid(),
  original_comment_id uuid not null,
  photo_id uuid not null,
  user_id uuid not null,
  body text not null,
  original_created_at timestamptz not null,
  deleted_at timestamptz not null default now(),
  deleted_by uuid not null
);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'display_name', split_part(new.email, '@', 1)))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.album_photos enable row level security;
alter table public.album_comments enable row level security;
alter table public.album_comment_archive enable row level security;

create policy "profiles are public" on public.profiles for select using (true);
create policy "users update own profile" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "photos are public" on public.album_photos for select using (true);
create policy "album owners add photos" on public.album_photos for insert to authenticated
with check (
  auth.uid() = created_by and
  exists (select 1 from public.profiles where id = auth.uid() and role = 'owner')
);
create policy "album owners update all photos" on public.album_photos for update to authenticated
using (exists (select 1 from public.profiles where id = auth.uid() and role = 'owner'))
with check (exists (select 1 from public.profiles where id = auth.uid() and role = 'owner'));
create policy "album owners delete all photos" on public.album_photos for delete to authenticated
using (exists (select 1 from public.profiles where id = auth.uid() and role = 'owner'));
create policy "comments are public" on public.album_comments for select using (true);
create policy "signed users add comments" on public.album_comments for insert to authenticated with check (auth.uid() = user_id);

revoke update on public.profiles from authenticated;
grant update (display_name, avatar_url) on public.profiles to authenticated;

create or replace function public.soft_delete_album_comment(target_comment_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  target public.album_comments%rowtype;
begin
  select * into target from public.album_comments where id = target_comment_id;
  if target.id is null then
    raise exception 'Comment not found';
  end if;
  if auth.uid() is null or auth.uid() <> target.user_id then
    raise exception 'You can only delete your own comment';
  end if;
  insert into public.album_comment_archive
    (original_comment_id, photo_id, user_id, body, original_created_at, deleted_by)
  values
    (target.id, target.photo_id, target.user_id, target.body, target.created_at, auth.uid());
  delete from public.album_comments where id = target.id;
end;
$$;

revoke all on function public.soft_delete_album_comment(uuid) from public;
grant execute on function public.soft_delete_album_comment(uuid) to authenticated;

insert into storage.buckets (id, name, public) values ('album-photos', 'album-photos', true) on conflict (id) do update set public = true;
insert into storage.buckets (id, name, public) values ('avatars', 'avatars', true) on conflict (id) do update set public = true;

create policy "public album images" on storage.objects for select using (bucket_id = 'album-photos');
create policy "album owners upload images" on storage.objects for insert to authenticated
with check (
  bucket_id = 'album-photos' and
  (storage.foldername(name))[1] = auth.uid()::text and
  exists (select 1 from public.profiles where id = auth.uid() and role = 'owner')
);
create policy "album owners delete images" on storage.objects for delete to authenticated
using (
  bucket_id = 'album-photos' and
  exists (select 1 from public.profiles where id = auth.uid() and role = 'owner')
);
create policy "public avatars" on storage.objects for select using (bucket_id = 'avatars');
create policy "users upload own avatars" on storage.objects for insert to authenticated
with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "users replace own avatars" on storage.objects for update to authenticated
using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
