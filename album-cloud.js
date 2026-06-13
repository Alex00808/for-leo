(function () {
  const config = window.LEO_SUPABASE_CONFIG || {};
  const enabled = Boolean(config.url && config.anonKey && window.supabase?.createClient);
  const client = enabled ? window.supabase.createClient(config.url, config.anonKey) : null;
  const localAccountsKey = 'leo-album-preview-accounts';
  const localSessionKey = 'leo-album-preview-session';
  const listeners = new Set();

  function createId(prefix = 'item') {
    return window.crypto?.randomUUID?.() || `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function readJson(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
    catch (error) { return fallback; }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function fileToDataUrl(file) {
    if (!file) return Promise.resolve('');
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  }

  function initials(name) {
    return (name || '?').trim().slice(0, 1).toUpperCase();
  }

  function mapProfile(profile, user) {
    const metadata = user?.user_metadata || {};
    const displayName = profile?.display_name || metadata.display_name || user?.email?.split('@')[0] || 'Guest';
    return {
      id: profile?.id || user?.id,
      email: user?.email || '',
      displayName,
      avatarUrl: profile?.avatar_url || metadata.avatar_url || '',
      role: profile?.role || 'guest',
      initial: initials(displayName)
    };
  }

  async function getCloudProfile(user) {
    if (!user) return null;
    let result = await client.from('profiles').select('id, display_name, avatar_url, role').eq('id', user.id).maybeSingle();
    if (result.error) result = await client.from('profiles').select('id, display_name, avatar_url').eq('id', user.id).maybeSingle();
    return mapProfile(result.data, user);
  }

  async function getCurrentProfile() {
    if (!enabled) {
      const sessionId = localStorage.getItem(localSessionKey);
      return readJson(localAccountsKey, []).find((item) => item.id === sessionId) || null;
    }
    const { data: { session } } = await client.auth.getSession();
    return getCloudProfile(session?.user);
  }

  async function requireAlbumOwner(action) {
    const profile = await getCurrentProfile();
    if (!profile) throw new Error(`Please sign in before ${action}.`);
    if (profile.role !== 'owner') throw new Error('Only Alex and Leo can manage album photographs.');
    return profile;
  }

  async function uploadAvatar(file, userId) {
    if (!file) return '';
    if (!enabled) return fileToDataUrl(file);
    const extension = (file.name.split('.').pop() || 'jpg').toLowerCase();
    const path = `${userId}/avatar-${Date.now()}.${extension}`;
    const { error } = await client.storage.from(config.avatarBucket || 'avatars').upload(path, file, { upsert: true, contentType: file.type || 'image/jpeg' });
    if (error) throw error;
    return client.storage.from(config.avatarBucket || 'avatars').getPublicUrl(path).data.publicUrl;
  }

  async function signUp({ email, password, displayName, avatarFile }) {
    if (!enabled) {
      const accounts = readJson(localAccountsKey, []);
      if (accounts.some((item) => item.email.toLowerCase() === email.toLowerCase())) throw new Error('This email already exists in the local preview.');
      const profile = { id: createId('user'), email, password, displayName, avatarUrl: await fileToDataUrl(avatarFile), role:'guest', initial: initials(displayName) };
      accounts.push(profile);
      writeJson(localAccountsKey, accounts);
      localStorage.setItem(localSessionKey, profile.id);
      listeners.forEach((listener) => listener(profile));
      return { profile, needsEmailConfirmation: false };
    }
    const { data, error } = await client.auth.signUp({ email, password, options: { data: { display_name: displayName } } });
    if (error) throw error;
    if (!data.session) return { profile: null, needsEmailConfirmation: true };
    let avatarUrl = '';
    if (avatarFile) avatarUrl = await uploadAvatar(avatarFile, data.user.id);
    const { error: profileError } = await client.from('profiles').update({ display_name: displayName, avatar_url: avatarUrl }).eq('id', data.user.id);
    if (profileError) throw profileError;
    return { profile: await getCloudProfile(data.user), needsEmailConfirmation: false };
  }

  async function signIn({ email, password }) {
    if (!enabled) {
      const profile = readJson(localAccountsKey, []).find((item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password);
      if (!profile) throw new Error('Email or password is incorrect.');
      localStorage.setItem(localSessionKey, profile.id);
      listeners.forEach((listener) => listener(profile));
      return profile;
    }
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return getCloudProfile(data.user);
  }

  async function updateProfile({ displayName, avatarFile }) {
    const current = await getCurrentProfile();
    if (!current) throw new Error('Please sign in first.');
    if (!enabled) {
      const accounts = readJson(localAccountsKey, []);
      const index = accounts.findIndex((item) => item.id === current.id);
      const avatarUrl = avatarFile ? await fileToDataUrl(avatarFile) : current.avatarUrl;
      accounts[index] = { ...accounts[index], displayName: displayName || current.displayName, avatarUrl, initial: initials(displayName || current.displayName) };
      writeJson(localAccountsKey, accounts);
      listeners.forEach((listener) => listener(accounts[index]));
      return accounts[index];
    }
    const avatarUrl = avatarFile ? await uploadAvatar(avatarFile, current.id) : current.avatarUrl;
    const { error } = await client.from('profiles').update({ display_name: displayName || current.displayName, avatar_url: avatarUrl }).eq('id', current.id);
    if (error) throw error;
    await client.auth.updateUser({ data: { display_name: displayName || current.displayName, avatar_url: avatarUrl } });
    return getCurrentProfile();
  }

  async function signOut() {
    if (!enabled) {
      localStorage.removeItem(localSessionKey);
      listeners.forEach((listener) => listener(null));
      return;
    }
    await client.auth.signOut();
  }

  function onAuthChange(listener) {
    listeners.add(listener);
    if (enabled) {
      const { data } = client.auth.onAuthStateChange((_event, session) => {
        window.setTimeout(async () => listener(await getCloudProfile(session?.user)), 0);
      });
      return () => { listeners.delete(listener); data.subscription.unsubscribe(); };
    }
    return () => listeners.delete(listener);
  }

  function dataUrlToBlob(src) {
    return fetch(src).then((response) => response.blob());
  }

  async function uploadPhoto(src, userId) {
    const blob = await dataUrlToBlob(src);
    const path = `${userId}/${createId('photo')}.jpg`;
    const { error } = await client.storage.from(config.photoBucket || 'album-photos').upload(path, blob, { contentType: 'image/jpeg' });
    if (error) throw error;
    const publicUrl = client.storage.from(config.photoBucket || 'album-photos').getPublicUrl(path).data.publicUrl;
    return { publicUrl, path };
  }

  async function getAllPhotos() {
    const { data: photos, error } = await client.from('album_photos').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    if (!photos?.length) return [];
    const photoIds = photos.map((photo) => photo.id);
    const { data: comments, error: commentError } = await client.from('album_comments').select('*').in('photo_id', photoIds).order('created_at', { ascending: true });
    if (commentError) throw commentError;
    const userIds = [...new Set((comments || []).map((comment) => comment.user_id))];
    let profiles = [];
    if (userIds.length) {
      let result = await client.from('profiles').select('id, display_name, avatar_url, role').in('id', userIds);
      if (result.error) result = await client.from('profiles').select('id, display_name, avatar_url').in('id', userIds);
      if (result.error) throw result.error;
      profiles = result.data || [];
    }
    const profileMap = new Map(profiles.map((profile) => [profile.id, profile]));
    return photos.map((photo) => ({
      id: photo.id,
      src: photo.src,
      storagePath: photo.storage_path,
      place: photo.place || '',
      date: photo.taken_at || photo.created_at,
      createdAt: new Date(photo.created_at).getTime(),
      updatedAt: new Date(photo.updated_at || photo.created_at).getTime(),
      featuredSlot: Number.isInteger(photo.featured_slot) ? photo.featured_slot : null,
      comments: (comments || []).filter((comment) => comment.photo_id === photo.id).map((comment) => {
        const profile = profileMap.get(comment.user_id);
        return {
          id: comment.id,
          authorId: comment.user_id,
          author: profile?.display_name || 'Guest',
          avatarUrl: profile?.avatar_url || '',
          authorRole: profile?.role || 'guest',
          text: comment.body,
          createdAt: new Date(comment.created_at).getTime()
        };
      })
    }));
  }

  async function addPhoto(src, details = {}) {
    const profile = await requireAlbumOwner('uploading photographs');
    const upload = await uploadPhoto(src, profile.id);
    const { data, error } = await client.from('album_photos').insert({
      src: upload.publicUrl,
      storage_path: upload.path,
      place: details.place || '',
      taken_at: details.date || new Date().toISOString(),
      featured_slot: Number.isInteger(details.featuredSlot) ? details.featuredSlot : null,
      created_by: profile.id
    }).select().single();
    if (error) throw error;
    return data;
  }

  async function saveFeatured(slot, src, details = {}) {
    const profile = await requireAlbumOwner('changing photographs');
    const { data: existing } = await client.from('album_photos').select('id, storage_path').eq('featured_slot', slot).maybeSingle();
    if (!existing) return addPhoto(src, { ...details, featuredSlot: slot });
    const upload = await uploadPhoto(src, profile.id);
    const { error } = await client.from('album_photos').update({ src: upload.publicUrl, storage_path: upload.path, taken_at: details.date || new Date().toISOString() }).eq('id', existing.id);
    if (error) throw error;
    if (existing.storage_path) await client.storage.from(config.photoBucket || 'album-photos').remove([existing.storage_path]);
  }

  async function addComment(photoId, text) {
    const profile = await getCurrentProfile();
    if (!profile) throw new Error('Please sign in before leaving a message.');
    const { error } = await client.from('album_comments').insert({ photo_id: photoId, user_id: profile.id, body: text });
    if (error) throw error;
  }

  async function removeComment(commentId) {
    const profile = await getCurrentProfile();
    if (!profile) throw new Error('Please sign in before deleting a message.');
    const { error } = await client.rpc('soft_delete_album_comment', { target_comment_id: commentId });
    if (error) throw error;
  }

  async function removePhoto(id) {
    await requireAlbumOwner('deleting photographs');
    const { data: photo } = await client.from('album_photos').select('storage_path').eq('id', id).maybeSingle();
    const { error } = await client.from('album_photos').delete().eq('id', id);
    if (error) throw error;
    if (photo?.storage_path) await client.storage.from(config.photoBucket || 'album-photos').remove([photo.storage_path]);
  }

  window.LoveCloud = {
    enabled,
    mode: enabled ? 'cloud' : 'preview',
    getCurrentProfile,
    signUp,
    signIn,
    updateProfile,
    signOut,
    onAuthChange,
    getAllPhotos,
    addPhoto,
    saveFeatured,
    addComment,
    removeComment,
    removePhoto
  };
})();
