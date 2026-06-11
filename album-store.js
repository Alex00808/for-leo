(function () {
  const DB_NAME = 'leo-alex-album';
  const STORE_NAME = 'photos';
  const FALLBACK_KEY = 'leo-alex-album-fallback';
  let databasePromise;

  function openDatabase() {
    if (!('indexedDB' in window)) return Promise.reject(new Error('IndexedDB unavailable'));
    if (databasePromise) return databasePromise;
    databasePromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);
      request.onerror = () => reject(request.error);
      request.onupgradeneeded = () => {
        const store = request.result.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('createdAt', 'createdAt');
        store.createIndex('featuredSlot', 'featuredSlot', { unique: false });
      };
      request.onsuccess = () => resolve(request.result);
    });
    return databasePromise;
  }

  async function run(mode, action) {
    const database = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = database.transaction(STORE_NAME, mode);
      const store = transaction.objectStore(STORE_NAME);
      const request = action(store);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  function fallbackRead() {
    try { return JSON.parse(localStorage.getItem(FALLBACK_KEY) || '[]'); } catch (error) { return []; }
  }

  function fallbackWrite(records) {
    localStorage.setItem(FALLBACK_KEY, JSON.stringify(records));
  }

  function normalizeRecord(record) {
    if (Array.isArray(record.comments)) return record;
    const comments = record.note ? [{
      id: `legacy-${record.id}`,
      author: 'Alex',
      text: record.note,
      createdAt: record.updatedAt || record.createdAt || Date.now()
    }] : [];
    return { ...record, comments };
  }

  async function getAll() {
    let records;
    try { records = await run('readonly', (store) => store.getAll()); }
    catch (error) { records = fallbackRead(); }
    return records.map(normalizeRecord).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  }

  async function save(record) {
    try { await run('readwrite', (store) => store.put(record)); }
    catch (error) {
      const records = fallbackRead().filter((item) => item.id !== record.id);
      records.push(record);
      fallbackWrite(records);
    }
    return record;
  }

  async function remove(id) {
    try { await run('readwrite', (store) => store.delete(id)); }
    catch (error) { fallbackWrite(fallbackRead().filter((item) => item.id !== id)); }
  }

  function createId() {
    if (window.crypto?.randomUUID) return window.crypto.randomUUID();
    return `photo-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  async function add(src, details = {}) {
    return save({
      id: createId(),
      src,
      note: details.note || '',
      comments: details.comments || [],
      place: details.place || '',
      date: details.date || new Date().toISOString(),
      createdAt: Date.now(),
      featuredSlot: null
    });
  }

  async function saveFeatured(slot, src, details = {}) {
    const current = (await getAll()).find((item) => item.featuredSlot === slot);
    return save({
      id: current?.id || `featured-${slot}`,
      src,
      note: current?.note || details.note || '',
      comments: current?.comments || details.comments || [],
      place: details.place || current?.place || '',
      date: details.date || current?.date || new Date().toISOString(),
      createdAt: current?.createdAt || Date.now(),
      updatedAt: Date.now(),
      featuredSlot: slot
    });
  }

  async function update(id, patch) {
    const current = (await getAll()).find((item) => item.id === id);
    if (!current) return null;
    return save({ ...current, ...patch, id, updatedAt: Date.now() });
  }

  async function migrateLegacyPhotos() {
    let migrated = false;
    const existing = await getAll();
    for (let slot = 0; slot < 3; slot += 1) {
      if (existing.some((item) => item.featuredSlot === slot)) continue;
      try {
        const src = localStorage.getItem(`leo-album-photo-${slot}`);
        if (!src) continue;
        const legacyDate = localStorage.getItem(`leo-album-date-${slot}`) || '';
        await saveFeatured(slot, src, { date: legacyDate || new Date().toISOString() });
        migrated = true;
      } catch (error) { /* Ignore unavailable legacy storage. */ }
    }
    return migrated;
  }

  window.LoveAlbum = { getAll, add, saveFeatured, update, remove, migrateLegacyPhotos };
})();
