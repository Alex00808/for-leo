const albumTranslations = {
  de: {
    navTitle: 'Unser Fotoalbum', heroKicker: 'LEO + ALEX · PRIVATES ARCHIV', heroTitle: 'Ein Album,<br><em>das mit uns wächst.</em>',
    heroCopy: 'Heute sind es vielleicht drei Bilder. Irgendwann hoffentlich so viele, dass wir beim Scrollen vergessen, wie weit wir einmal voneinander entfernt waren.',
    addPhotos: 'Fotos hinzufügen', backToLetter: 'Zurück zum Liebesbrief', pinnedKicker: 'IMMER GANZ OBEN', pinnedTitle: 'Unsere drei<br><em>ersten Plätze.</em>',
    pinnedCopy: 'Diese drei Rahmen sind mit dem Liebesbrief verbunden. Was dort hineinkommt, bleibt auch hier ganz oben.', pinOne: 'Unser erstes echtes Foto', pinTwo: 'Ein Tag in Shenzhen', pinThree: 'Ein Tag in Heilbronn', emptyPin: 'Noch wartet dieser Rahmen.',
    galleryKicker: 'UND ALLES, WAS DANACH KOMMT', galleryTitle: 'Viele kleine Beweise,<br><em>dass wir wirklich da waren.</em>', addMore: 'Mehr hinzufügen',
    emptyTitle: 'Hier ist noch sehr viel Platz für uns.', emptyCopy: 'Füg das erste Foto hinzu. Die perfekte Reihenfolge finden wir später – Hauptsache, der Moment bleibt.',
    footer: 'Fortsetzung folgt. Sehr wahrscheinlich mit einer Katze im Bild.', backHome: 'Zurück zu uns', modalTitle: 'Was sollen wir über diesen Moment niemals vergessen?',
    modalPlaceholder: 'Schreib hier die Geschichte hinter diesem Foto ...', deletePhoto: 'Foto löschen', saveNote: 'Nachricht speichern', noNote: 'Klick, um diesem Moment eine Nachricht zu geben.',
    saved: 'Die Nachricht gehört jetzt zu diesem Foto.', photoCount: '{count} Fotos', deleteConfirm: 'Dieses Foto wirklich aus unserem Album löschen?', storageError: 'Das Foto konnte nicht gespeichert werden. Versuch bitte eine kleinere Datei.'
  },
  en: {
    navTitle: 'Our photo album', heroKicker: 'LEO + ALEX · PRIVATE ARCHIVE', heroTitle: 'An album<br><em>that grows with us.</em>',
    heroCopy: 'Today it may hold three photographs. One day, hopefully enough that scrolling makes us forget how far apart we once were.',
    addPhotos: 'Add photographs', backToLetter: 'Back to the love letter', pinnedKicker: 'ALWAYS AT THE TOP', pinnedTitle: 'Our first<br><em>three places.</em>',
    pinnedCopy: 'These three frames are connected to the love letter. Whatever goes there will always stay at the top here.', pinOne: 'Our first real photo together', pinTwo: 'One day in Shenzhen', pinThree: 'One day in Heilbronn', emptyPin: 'This frame is still waiting.',
    galleryKicker: 'AND EVERYTHING THAT COMES NEXT', galleryTitle: 'Little pieces of proof<br><em>that we were really there.</em>', addMore: 'Add more',
    emptyTitle: 'There is still so much room for us here.', emptyCopy: 'Add the first photograph. We can find the perfect order later. Keeping the moment is what matters.',
    footer: 'To be continued. Very probably with a cat somewhere in the frame.', backHome: 'Back to us', modalTitle: 'What should we never forget about this moment?',
    modalPlaceholder: 'Write the story behind this photograph ...', deletePhoto: 'Delete photo', saveNote: 'Save this note', noNote: 'Click to leave a note for this moment.',
    saved: 'This note now belongs to the photograph.', photoCount: '{count} photos', deleteConfirm: 'Really remove this photograph from our album?', storageError: 'The photograph could not be saved. Please try a smaller file.'
  },
  zh: {
    navTitle: '我们的相片册', heroKicker: 'LEO + ALEX · 私人影像档案', heroTitle: '一本会和我们一起<br><em>慢慢长大的相片册。</em>',
    heroCopy: '今天也许只有三张照片。希望以后多到我们翻着翻着，就忘记彼此曾经隔着那么远。',
    addPhotos: '添加照片', backToLetter: '回到浪漫网站', pinnedKicker: '永远置顶', pinnedTitle: '属于我们的<br><em>前三个位置。</em>',
    pinnedCopy: '这三只相框和主网站相连。主网站放进去的照片，会一直置顶保留在这里。', pinOne: '我们的第一张真正合照', pinTwo: '一起在深圳的一天', pinThree: '一起在海尔布隆的一天', emptyPin: '这只相框还在等我们。',
    galleryKicker: '以及后来发生的所有事情', galleryTitle: '很多很多个小证据，<br><em>证明我们真的一起到过。</em>', addMore: '继续添加',
    emptyTitle: '这里还为我们留着很多位置。', emptyCopy: '先放进第一张照片吧。顺序以后再慢慢整理，重要的是别让那个瞬间消失。',
    footer: '未完待续。以后的照片里，大概率还会混进一只猫。', backHome: '回到我们的故事', modalTitle: '关于这个瞬间，有什么一定不能忘记？',
    modalPlaceholder: '把这张照片背后的故事写在这里……', deletePhoto: '删除照片', saveNote: '保存这条留言', noNote: '点击照片，为这个瞬间留一句话。',
    saved: '这句话已经和照片一起保存好了。', photoCount: '共 {count} 张照片', deleteConfirm: '真的要把这张照片从我们的相片册里删除吗？', storageError: '照片没能保存下来，请试一张小一点的图片。'
  }
};

Object.assign(albumTranslations.de, {
  noComments: 'Noch hat niemand etwas zu diesem Foto geschrieben.',
  commentAs: 'Wer hinterlässt diese Nachricht?',
  saveNote: 'Nachricht hinzufügen',
  saved: 'Die neue Nachricht wurde mit diesem Foto gespeichert.',
  emptyMessage: 'Schreib erst ein paar Worte, bevor du sie speicherst.'
});
Object.assign(albumTranslations.en, {
  noComments: 'No one has written anything about this photograph yet.',
  commentAs: 'Who is leaving this note?',
  saveNote: 'Add this note',
  saved: 'The new note has been saved with this photograph.',
  emptyMessage: 'Write a few words before saving the note.'
});
Object.assign(albumTranslations.zh, {
  noComments: '这张照片下面还没有人留言。',
  commentAs: '这句话是谁留下的？',
  saveNote: '添加这条留言',
  saved: '新的留言已经和这张照片一起保存好了。',
  emptyMessage: '先写几句话，再保存这条留言吧。'
});

const languageButtons = document.querySelectorAll('[data-lang]');
const translatedElements = document.querySelectorAll('[data-i18n]');
const translatedPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
const pinnedCards = document.querySelectorAll('[data-featured-slot]');
const fileInput = document.querySelector('#galleryFileInput');
const photoWall = document.querySelector('#photoWall');
const emptyGallery = document.querySelector('#emptyGallery');
const photoCount = document.querySelector('#photoCount');
const modal = document.querySelector('#photoModal');
const modalImage = document.querySelector('#modalImage');
const modalDate = document.querySelector('#modalDate');
const modalNumber = document.querySelector('#modalNumber');
const modalMessage = document.querySelector('#modalMessage');
const modalStatus = document.querySelector('#modalStatus');
const commentFeed = document.querySelector('#commentFeed');
const commentEmpty = document.querySelector('#commentEmpty');
const authorButtons = document.querySelectorAll('[data-author]');
const cursor = document.querySelector('.album-cursor');
let currentLanguage = 'de';
let records = [];
let activeRecord = null;
let uploadTargetSlot = null;
let selectedAuthor = 'Alex';

function text(key) { return albumTranslations[currentLanguage]?.[key] || albumTranslations.en[key] || ''; }

function setLanguage(language) {
  currentLanguage = albumTranslations[language] ? language : 'de';
  translatedElements.forEach((element) => {
    const value = text(element.dataset.i18n);
    if (value) element.innerHTML = value;
  });
  translatedPlaceholders.forEach((element) => {
    const value = text(element.dataset.i18nPlaceholder);
    if (value) element.placeholder = value;
  });
  languageButtons.forEach((button) => button.classList.toggle('active', button.dataset.lang === currentLanguage));
  document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : currentLanguage;
  try { localStorage.setItem('leo-language', currentLanguage); } catch (error) { /* Storage may be unavailable in a preview. */ }
  renderAlbum();
  if (activeRecord) renderComments();
}

languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));

function dateLocale() { return currentLanguage === 'zh' ? 'zh-CN' : currentLanguage === 'en' ? 'en-GB' : 'de-DE'; }
function displayDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value || '';
  return new Intl.DateTimeFormat(dateLocale(), { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
}

function compressPhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const image = new Image();
      image.onerror = reject;
      image.onload = () => {
        const maxSide = 1500;
        const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
        canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', .82));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function renderPinned() {
  pinnedCards.forEach((card) => {
    const slot = Number(card.dataset.featuredSlot);
    const record = records.find((item) => item.featuredSlot === slot);
    card.querySelector('img')?.remove();
    card.classList.toggle('has-photo', Boolean(record));
    card.dataset.recordId = record?.id || '';
    if (record) {
      const image = new Image();
      image.src = record.src;
      image.alt = card.querySelector('strong').textContent;
      card.prepend(image);
    }
  });
}

function createPhotoCard(record, index) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'photo-card';
  card.dataset.recordId = record.id;
  const image = new Image();
  image.src = record.src;
  const latestComment = (record.comments || []).at(-1);
  image.alt = latestComment?.text || `Leo and Alex memory ${index + 1}`;
  const info = document.createElement('span');
  info.className = 'photo-card-info';
  const note = document.createElement('p');
  note.textContent = latestComment ? `${latestComment.author}: ${latestComment.text}` : text('noNote');
  note.classList.toggle('empty-note', !latestComment);
  const time = document.createElement('time');
  time.textContent = displayDate(record.date);
  info.append(note, time);
  card.append(image, info);
  card.addEventListener('click', () => openModal(record.id));
  return card;
}

function renderAlbum() {
  renderPinned();
  const galleryRecords = records.filter((record) => !Number.isInteger(record.featuredSlot));
  photoWall.replaceChildren(...galleryRecords.map(createPhotoCard));
  emptyGallery.classList.toggle('hidden', galleryRecords.length > 0);
  photoCount.textContent = text('photoCount').replace('{count}', records.length);
}

async function loadAlbum() {
  await window.LoveAlbum.migrateLegacyPhotos();
  records = await window.LoveAlbum.getAll();
  renderAlbum();
}

function choosePhotos(slot = null) {
  uploadTargetSlot = slot;
  fileInput.multiple = slot === null;
  fileInput.value = '';
  fileInput.click();
}

document.querySelector('#addPhotosHero').addEventListener('click', () => choosePhotos());
document.querySelector('#addPhotos').addEventListener('click', () => choosePhotos());
pinnedCards.forEach((card) => card.addEventListener('click', () => {
  if (card.dataset.recordId) openModal(card.dataset.recordId);
  else choosePhotos(Number(card.dataset.featuredSlot));
}));

fileInput.addEventListener('change', async () => {
  const files = [...fileInput.files];
  if (!files.length) return;
  try {
    if (uploadTargetSlot !== null) {
      const src = await compressPhoto(files[0]);
      await window.LoveAlbum.saveFeatured(uploadTargetSlot, src, { date: new Date().toISOString() });
    } else {
      for (const file of files) {
        const src = await compressPhoto(file);
        await window.LoveAlbum.add(src, { date: new Date().toISOString() });
      }
    }
    await loadAlbum();
  } catch (error) {
    window.alert(text('storageError'));
  }
});

function commentDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat(dateLocale(), {
    year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
  }).format(date);
}

function renderComments() {
  if (!activeRecord) return;
  const comments = activeRecord.comments || [];
  commentEmpty.classList.toggle('hidden', comments.length > 0);
  commentFeed.replaceChildren(...comments.map((comment) => {
    const card = document.createElement('article');
    card.className = 'comment-card';
    const header = document.createElement('header');
    const author = document.createElement('span');
    author.className = 'comment-author';
    const initial = document.createElement('i');
    initial.textContent = (comment.author || '?').slice(0, 1).toUpperCase();
    const name = document.createElement('b');
    name.textContent = comment.author || 'Alex';
    author.append(initial, name);
    const time = document.createElement('time');
    time.textContent = commentDate(comment.createdAt);
    const message = document.createElement('p');
    message.textContent = comment.text;
    header.append(author, time);
    card.append(header, message);
    return card;
  }));
}

function setAuthor(author) {
  selectedAuthor = author === 'Leo' ? 'Leo' : 'Alex';
  authorButtons.forEach((button) => button.classList.toggle('active', button.dataset.author === selectedAuthor));
  try { localStorage.setItem('leo-album-author', selectedAuthor); } catch (error) { /* Keep this session's choice. */ }
}

authorButtons.forEach((button) => button.addEventListener('click', () => setAuthor(button.dataset.author)));

function openModal(id) {
  activeRecord = records.find((record) => record.id === id);
  if (!activeRecord) return;
  modalImage.src = activeRecord.src;
  modalImage.alt = activeRecord.comments?.at(-1)?.text || 'Leo and Alex';
  modalDate.textContent = displayDate(activeRecord.date);
  modalNumber.textContent = `MEMORY ${String(records.indexOf(activeRecord) + 1).padStart(3, '0')}`;
  modalMessage.value = '';
  modalStatus.textContent = '';
  renderComments();
  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.classList.remove('visible');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  activeRecord = null;
}

document.querySelector('#modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
window.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });

document.querySelector('#savePhotoNote').addEventListener('click', async () => {
  if (!activeRecord) return;
  const message = modalMessage.value.trim();
  if (!message) {
    modalStatus.textContent = text('emptyMessage');
    return;
  }
  const recordId = activeRecord.id;
  const comments = [...(activeRecord.comments || []), {
    id: window.crypto?.randomUUID?.() || `comment-${Date.now()}`,
    author: selectedAuthor,
    text: message,
    createdAt: Date.now()
  }];
  await window.LoveAlbum.update(recordId, { comments });
  modalStatus.textContent = text('saved');
  modalMessage.value = '';
  await loadAlbum();
  activeRecord = records.find((record) => record.id === recordId);
  renderComments();
});

document.querySelector('#deletePhoto').addEventListener('click', async () => {
  if (!activeRecord || !window.confirm(text('deleteConfirm'))) return;
  await window.LoveAlbum.remove(activeRecord.id);
  closeModal();
  await loadAlbum();
});

document.addEventListener('pointermove', (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});
document.querySelectorAll('button,a').forEach((element) => {
  element.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
  element.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

let savedLanguage = 'de';
try { savedLanguage = localStorage.getItem('leo-language') || 'de'; } catch (error) { /* Use German. */ }
try { selectedAuthor = localStorage.getItem('leo-album-author') || 'Alex'; } catch (error) { /* Use Alex. */ }
setAuthor(selectedAuthor);
setLanguage(savedLanguage);
loadAlbum();
window.addEventListener('pageshow', loadAlbum);
