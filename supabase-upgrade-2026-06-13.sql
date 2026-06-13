-- Run this once if you already ran the original supabase-setup.sql.
alter table public.profiles
  add column if not exists role text not null default 'guest'
  check (role in ('guest', 'friend', 'family', 'owner'));

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

alter table public.album_comment_archive enable row level security;

drop policy if exists "users delete own comments" on public.album_comments;

drop policy if exists "signed users add photos" on public.album_photos;
drop policy if exists "owners update photos" on public.album_photos;
drop policy if exists "owners delete photos" on public.album_photos;
drop policy if exists "album owners add photos" on public.album_photos;
drop policy if exists "album owners update all photos" on public.album_photos;
drop policy if exists "album owners delete all photos" on public.album_photos;

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

drop policy if exists "users upload album images" on storage.objects;
drop policy if exists "users delete own album images" on storage.objects;
drop policy if exists "album owners upload images" on storage.objects;
drop policy if exists "album owners delete images" on storage.objects;

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
