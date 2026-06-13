# For Leo, with love

This is a static site. Open `index.html` locally or publish the whole folder with GitHub Pages.

## Enable shared accounts and comments

GitHub Pages cannot store accounts, photographs, or messages by itself. The album includes a Supabase adapter for the free plan.

1. Create a project at `https://supabase.com`.
2. Open **SQL Editor**, paste all of `supabase-setup.sql`, and run it once.
3. Open **Project Settings > API**.
4. Copy the project URL and anon/public key into `supabase-config.js`:

```js
window.LEO_SUPABASE_CONFIG = {
  url: 'https://YOUR-PROJECT.supabase.co',
  anonKey: 'YOUR-ANON-KEY',
  photoBucket: 'album-photos',
  avatarBucket: 'avatars'
};
```

5. In **Authentication > URL Configuration**, add the final GitHub Pages URL to the allowed redirect URLs.
6. Upload the complete `leo-love` folder contents to GitHub Pages.

## Roles and deleted-message archive

- New accounts start with the `guest` role.
- In Supabase open **Table Editor > profiles** and change `role` to `friend`, `family`, or `owner` when appropriate. Visitors cannot change this field themselves.
- Set only Alex and Leo to `owner`. Only these two accounts can add, replace, and delete photographs. Both owners can manage every photograph, regardless of which one uploaded it.
- If the original database setup was already installed, run `supabase-upgrade-2026-06-13.sql` once in **SQL Editor**.
- Users can remove only their own comments. Removed comments disappear from the album but their original text, author, photograph ID, and deletion time remain visible to you in **Table Editor > album_comment_archive**.

Until those two configuration values are filled in, the account interface runs in local preview mode and data is visible only on the current device.
