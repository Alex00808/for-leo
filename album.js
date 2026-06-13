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

Object.assign(albumTranslations.de, {
  accountLabel: 'GÄSTEBUCH', signIn: 'Anmelden', signUp: 'Registrieren', signOut: 'Abmelden',
  accountKicker: 'EIN NAME FÜR DIE ERINNERUNG', accountTitle: 'Komm herein,<br><em>wir merken uns dich.</em>',
  accountIntro: 'Nach dem Anmelden erscheinen dein Name und dein Bild automatisch bei jeder Nachricht.',
  chooseAvatar: 'Profilbild wählen', avatarHint: 'Ein echtes Foto oder etwas, das nach dir aussieht.', displayName: 'Dein Name', password: 'Passwort',
  guestName: 'Noch nicht angemeldet', changeAccount: 'Konto öffnen', readerHint: 'Eine Nachricht, die bei diesem Bild bleibt.',
  localMode: 'Lokale Vorschau: Konten und Nachrichten sind nur auf diesem Gerät sichtbar.', cloudMode: 'Online: Dieses Konto und seine Nachrichten werden sicher geteilt.',
  confirmEmail: 'Fast geschafft. Bitte bestätige zuerst die E-Mail und melde dich danach an.', saveProfile: 'Profil speichern', profileSaved: 'Dein Profil wurde aktualisiert.',
  signInToComment: 'Melde dich an, damit dein Name und dein Bild bei der Nachricht stehen.',
  roleGuest: 'GAST', roleFriend: 'FREUND', roleFamily: 'FAMILIE', roleOwner: 'ALBUM-INHABER',
  deleteOwnComment: 'Meine Nachricht löschen', deleteCommentConfirm: 'Diese Nachricht löschen? Im Album verschwindet sie, im privaten Verwaltungsarchiv bleibt sie erhalten.', commentDeleted: 'Deine Nachricht wurde aus dem Album entfernt.',
  ownerOnlyPhotos: 'Nur Alex und Leo können Fotos hinzufügen, ersetzen oder löschen.'
});
Object.assign(albumTranslations.en, {
  accountLabel: 'GUESTBOOK', signIn: 'Sign in', signUp: 'Create account', signOut: 'Sign out',
  accountKicker: 'A NAME FOR THE MEMORY', accountTitle: 'Come in,<br><em>we will remember you.</em>',
  accountIntro: 'Once signed in, your name and photograph appear automatically beside every message.',
  chooseAvatar: 'Choose a profile picture', avatarHint: 'A real photo, or simply something that feels like you.', displayName: 'Your name', password: 'Password',
  guestName: 'Not signed in yet', changeAccount: 'Open account', readerHint: 'A message that stays with this photograph.',
  localMode: 'Local preview: accounts and messages are visible on this device only.', cloudMode: 'Online: this account and its messages are shared securely.',
  confirmEmail: 'Almost there. Confirm the email first, then sign in.', saveProfile: 'Save profile', profileSaved: 'Your profile has been updated.',
  signInToComment: 'Sign in so your name and picture can stay beside this message.',
  roleGuest: 'GUEST', roleFriend: 'FRIEND', roleFamily: 'FAMILY', roleOwner: 'ALBUM OWNER',
  deleteOwnComment: 'Delete my message', deleteCommentConfirm: 'Delete this message? It will disappear from the album but remain in the private administration archive.', commentDeleted: 'Your message has been removed from the album.',
  ownerOnlyPhotos: 'Only Alex and Leo can add, replace, or delete photographs.'
});
Object.assign(albumTranslations.zh, {
  accountLabel: '亲友留言簿', signIn: '登录', signUp: '注册账号', signOut: '退出登录',
  accountKicker: '给这段回忆留下一个名字', accountTitle: '进来坐坐，<br><em>我们会记住你。</em>',
  accountIntro: '登录后，每一条留言都会自动显示你的名字和头像，Leo 和 Alex 一眼就知道是谁来过。',
  chooseAvatar: '选择头像', avatarHint: '可以是真人照片，也可以是很像你的那张图。', displayName: '你的名字', password: '密码',
  guestName: '还没有登录', changeAccount: '打开账号', readerHint: '这句话，会一直留在这张照片旁边。',
  localMode: '当前是本地预览：账号与留言只保存在这台设备。接入 Supabase 后才会与亲友共享。', cloudMode: '已连接云端：账号与留言会在亲友之间同步。',
  confirmEmail: '就差一步：请先去邮箱确认注册，然后回来登录。', saveProfile: '保存名字和头像', profileSaved: '头像和名字已经更新好了。',
  signInToComment: '先登录一下，留言旁边才会自动留下你的名字和头像。',
  commentAs: '你将以这个身份留言', saveNote: '发布这条留言', noComments: '这张照片下面还没有留言。第一句话留给你。',
  roleGuest: '访客', roleFriend: '亲友', roleFamily: '家人', roleOwner: '相册主人',
  deleteOwnComment: '删除我的留言', deleteCommentConfirm: '确定删除这条留言吗？它会从相册中消失，但原文和删除时间仍会保留在你的后台归档中。', commentDeleted: '这条留言已从相册中删除。',
  ownerOnlyPhotos: '只有 Alex 和 Leo 可以添加、更换或删除照片。'
});

const languageButtons = document.querySelectorAll('[data-lang]');
const translatedElements = document.querySelectorAll('[data-i18n]');
const translatedPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
const pinnedCards = document.querySelectorAll('[data-featured-slot]');
const fileInput = document.querySelector('#galleryFileInput');
const photoWall = document.querySelector('#photoWall');
const emptyGallery = document.querySelector('#emptyGallery');
const photoCount = document.querySelector('#photoCount');
const addPhotosHero = document.querySelector('#addPhotosHero');
const addPhotos = document.querySelector('#addPhotos');
const deletePhoto = document.querySelector('#deletePhoto');
const modal = document.querySelector('#photoModal');
const modalImage = document.querySelector('#modalImage');
const modalDate = document.querySelector('#modalDate');
const modalNumber = document.querySelector('#modalNumber');
const modalMessage = document.querySelector('#modalMessage');
const modalStatus = document.querySelector('#modalStatus');
const commentFeed = document.querySelector('#commentFeed');
const commentEmpty = document.querySelector('#commentEmpty');
const cursor = document.querySelector('.album-cursor');
const accountChip = document.querySelector('#accountChip');
const accountAvatar = document.querySelector('#accountAvatar');
const accountName = document.querySelector('#accountName');
const accountRole = document.querySelector('#accountRole');
const accountModal = document.querySelector('#accountModal');
const accountForm = document.querySelector('#accountForm');
const accountStatus = document.querySelector('#accountStatus');
const accountDisplayName = document.querySelector('#accountDisplayName');
const accountEmail = document.querySelector('#accountEmail');
const accountPassword = document.querySelector('#accountPassword');
const accountPhoto = document.querySelector('#accountPhoto');
const accountPhotoPreview = document.querySelector('#profilePhotoPreview');
const accountNameField = document.querySelector('#accountNameField');
const profilePhotoField = document.querySelector('#profilePhotoField');
const accountSubmit = document.querySelector('#accountSubmit');
const accountSignOut = document.querySelector('#accountSignOut');
const composerIdentity = document.querySelector('#composerIdentity');
const composerAvatar = document.querySelector('#composerAvatar');
const composerName = document.querySelector('#composerName');
const commentReader = document.querySelector('#commentReader');
const readerAvatar = document.querySelector('#readerAvatar');
const readerAuthor = document.querySelector('#readerAuthor');
const readerTime = document.querySelector('#readerTime');
const readerMessage = document.querySelector('#readerMessage');
const readerRole = document.querySelector('#readerRole');
const readerMemory = document.querySelector('#readerMemory');
const readerPhotoGhost = document.querySelector('#readerPhotoGhost');
const readerDelete = document.querySelector('#readerDelete');
let currentLanguage = 'de';
let records = [];
let activeRecord = null;
let uploadTargetSlot = null;
let currentProfile = null;
let authMode = 'signin';
let commentObserver = null;
let activeReaderComment = null;

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
  if (activeReaderComment) readerRole.textContent = roleLabel(activeReaderComment.authorRole);
  renderAccount();
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
  renderPhotoPermissions();
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
  if (!currentProfile) {
    openAccount('signin');
    return;
  }
  if (!isAlbumOwner()) {
    window.alert(text('ownerOnlyPhotos'));
    return;
  }
  uploadTargetSlot = slot;
  fileInput.multiple = slot === null;
  fileInput.value = '';
  fileInput.click();
}

addPhotosHero.addEventListener('click', () => choosePhotos());
addPhotos.addEventListener('click', () => choosePhotos());
pinnedCards.forEach((card) => card.addEventListener('click', () => {
  if (card.dataset.recordId) openModal(card.dataset.recordId);
  else if (isAlbumOwner()) choosePhotos(Number(card.dataset.featuredSlot));
}));

fileInput.addEventListener('change', async () => {
  if (!isAlbumOwner()) {
    fileInput.value = '';
    window.alert(text('ownerOnlyPhotos'));
    return;
  }
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

function createAvatar(src, name, className = '') {
  const avatar = document.createElement('i');
  avatar.className = className;
  if (src) {
    const image = new Image();
    image.src = src;
    image.alt = name || '';
    avatar.append(image);
  } else {
    avatar.textContent = (name || '?').trim().slice(0, 1).toUpperCase();
  }
  return avatar;
}

function setAvatarElement(element, profile) {
  element.replaceChildren();
  if (profile?.avatarUrl) {
    const image = new Image();
    image.src = profile.avatarUrl;
    image.alt = profile.displayName;
    element.append(image);
  } else {
    element.textContent = profile?.initial || profile?.displayName?.slice(0, 1).toUpperCase() || '?';
  }
}

function roleTranslationKey(role) {
  if (role === 'owner') return 'roleOwner';
  if (role === 'family') return 'roleFamily';
  if (role === 'friend') return 'roleFriend';
  return 'roleGuest';
}

function roleLabel(role) {
  return text(roleTranslationKey(role));
}

function isAlbumOwner() {
  return currentProfile?.role === 'owner';
}

function renderPhotoPermissions() {
  const owner = isAlbumOwner();
  addPhotosHero.hidden = !owner;
  addPhotos.hidden = !owner;
  deletePhoto.hidden = !owner;
  pinnedCards.forEach((card) => {
    const locked = !card.dataset.recordId && !owner;
    card.classList.toggle('owner-locked', locked);
    card.setAttribute('aria-disabled', String(locked));
  });
}

function renderAccount() {
  if (!accountName) return;
  accountName.textContent = currentProfile?.displayName || text('signIn');
  accountRole.textContent = currentProfile ? roleLabel(currentProfile.role) : text('roleGuest');
  composerName.textContent = currentProfile?.displayName || text('guestName');
  setAvatarElement(accountAvatar, currentProfile);
  setAvatarElement(composerAvatar, currentProfile);
  accountChip.classList.toggle('signed-in', Boolean(currentProfile));
  composerIdentity.classList.toggle('signed-in', Boolean(currentProfile));
  accountSignOut.hidden = !currentProfile;
  renderPhotoPermissions();
}

function setAuthMode(mode) {
  authMode = currentProfile ? 'profile' : (mode === 'signup' ? 'signup' : 'signin');
  document.querySelectorAll('[data-auth-mode]').forEach((button) => button.classList.toggle('active', button.dataset.authMode === authMode));
  document.querySelector('#authTabs').hidden = Boolean(currentProfile);
  accountNameField.hidden = authMode === 'signin';
  profilePhotoField.hidden = authMode === 'signin';
  accountEmail.closest('label').hidden = authMode === 'profile';
  accountPassword.closest('label').hidden = authMode === 'profile';
  accountEmail.required = authMode !== 'profile';
  accountPassword.required = authMode !== 'profile';
  accountDisplayName.required = authMode !== 'signin';
  accountSubmit.querySelector('span').textContent = authMode === 'profile' ? text('saveProfile') : text(authMode === 'signup' ? 'signUp' : 'signIn');
  if (currentProfile) {
    accountDisplayName.value = currentProfile.displayName || '';
    setAvatarElement(accountPhotoPreview, currentProfile);
  }
  accountStatus.textContent = '';
}

function openAccount(mode = 'signin') {
  setAuthMode(mode);
  accountModal.classList.add('visible');
  accountModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('account-open');
}

function closeAccount() {
  accountModal.classList.remove('visible');
  accountModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('account-open');
  accountForm.reset();
  accountPhotoPreview.textContent = '+';
}

function openCommentReader(comment) {
  activeReaderComment = comment;
  readerAuthor.textContent = comment.author || 'Guest';
  readerTime.textContent = commentDate(comment.createdAt);
  readerMessage.textContent = comment.text || '';
  readerRole.textContent = roleLabel(comment.authorRole);
  readerMemory.textContent = `MEMORY ${String(records.indexOf(activeRecord) + 1).padStart(3, '0')}`;
  readerPhotoGhost.style.backgroundImage = activeRecord?.src ? `url("${activeRecord.src.replace(/"/g, '%22')}")` : '';
  readerDelete.hidden = !currentProfile || currentProfile.id !== comment.authorId;
  setAvatarElement(readerAvatar, { displayName: comment.author, avatarUrl: comment.avatarUrl, initial: (comment.author || '?').slice(0, 1) });
  commentReader.classList.add('visible');
  commentReader.setAttribute('aria-hidden', 'false');
  document.body.classList.add('reader-open');
}

function closeCommentReader() {
  commentReader.classList.remove('visible');
  commentReader.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('reader-open');
  activeReaderComment = null;
}

async function deleteOwnComment(comment) {
  if (!activeRecord || !comment || !currentProfile || currentProfile.id !== comment.authorId) return;
  if (!window.confirm(text('deleteCommentConfirm'))) return;
  const recordId = activeRecord.id;
  await window.LoveAlbum.removeComment(recordId, comment.id);
  closeCommentReader();
  await loadAlbum();
  activeRecord = records.find((record) => record.id === recordId);
  if (activeRecord) {
    renderComments();
    modalStatus.textContent = text('commentDeleted');
  }
}

function renderComments() {
  if (!activeRecord) return;
  const comments = activeRecord.comments || [];
  commentEmpty.classList.toggle('hidden', comments.length > 0);
  commentFeed.classList.toggle('is-scrollable', comments.length >= 4);
  if (commentObserver) commentObserver.disconnect();
  const cards = comments.map((comment, index) => {
    const card = document.createElement('article');
    card.className = 'comment-card';
    card.tabIndex = 0;
    card.style.setProperty('--comment-index', index);
    const header = document.createElement('header');
    const author = document.createElement('span');
    author.className = 'comment-author';
    const initial = createAvatar(comment.avatarUrl, comment.author);
    const name = document.createElement('b');
    name.textContent = comment.author || 'Guest';
    const role = document.createElement('small');
    role.textContent = roleLabel(comment.authorRole);
    author.append(initial, name, role);
    const time = document.createElement('time');
    time.textContent = commentDate(comment.createdAt);
    const message = document.createElement('p');
    message.textContent = comment.text;
    const tools = document.createElement('span');
    tools.className = 'comment-tools';
    tools.append(time);
    if (currentProfile?.id === comment.authorId) {
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'comment-delete';
      remove.textContent = '×';
      remove.setAttribute('aria-label', text('deleteOwnComment'));
      remove.title = text('deleteOwnComment');
      remove.addEventListener('click', (event) => {
        event.stopPropagation();
        deleteOwnComment(comment);
      });
      tools.append(remove);
    }
    header.append(author, tools);
    card.append(header, message);
    card.addEventListener('click', () => openCommentReader(comment));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openCommentReader(comment);
      }
    });
    return card;
  });
  commentFeed.replaceChildren(...cards);
  if (comments.length >= 4) {
    commentObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('revealed', entry.isIntersecting));
    }, { root: commentFeed, threshold: .18 });
    cards.forEach((card) => commentObserver.observe(card));
  } else {
    requestAnimationFrame(() => cards.forEach((card) => card.classList.add('revealed')));
  }
}

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
  commentFeed.scrollTop = 0;
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
window.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (commentReader.classList.contains('visible')) closeCommentReader();
  else if (accountModal.classList.contains('visible')) closeAccount();
  else closeModal();
});

document.querySelector('#savePhotoNote').addEventListener('click', async () => {
  if (!activeRecord) return;
  if (!currentProfile) {
    modalStatus.textContent = text('signInToComment');
    openAccount('signin');
    return;
  }
  const message = modalMessage.value.trim();
  if (!message) {
    modalStatus.textContent = text('emptyMessage');
    return;
  }
  const recordId = activeRecord.id;
  const comment = {
    id: window.crypto?.randomUUID?.() || `comment-${Date.now()}`,
    authorId: currentProfile.id,
    author: currentProfile.displayName,
    avatarUrl: currentProfile.avatarUrl || '',
    authorRole: currentProfile.role || 'guest',
    text: message,
    createdAt: Date.now()
  };
  await window.LoveAlbum.addComment(recordId, comment);
  modalStatus.textContent = text('saved');
  modalMessage.value = '';
  await loadAlbum();
  activeRecord = records.find((record) => record.id === recordId);
  renderComments();
});

deletePhoto.addEventListener('click', async () => {
  if (!activeRecord) return;
  if (!isAlbumOwner()) {
    modalStatus.textContent = text('ownerOnlyPhotos');
    return;
  }
  if (!window.confirm(text('deleteConfirm'))) return;
  await window.LoveAlbum.remove(activeRecord.id);
  closeModal();
  await loadAlbum();
});

accountChip.addEventListener('click', () => openAccount());
composerIdentity.addEventListener('click', () => openAccount());
document.querySelector('#accountClose').addEventListener('click', closeAccount);
document.querySelector('#accountBackdrop').addEventListener('click', closeAccount);
document.querySelectorAll('[data-auth-mode]').forEach((button) => button.addEventListener('click', () => setAuthMode(button.dataset.authMode)));
document.querySelector('#readerClose').addEventListener('click', closeCommentReader);
readerDelete.addEventListener('click', () => deleteOwnComment(activeReaderComment));
commentReader.addEventListener('click', (event) => { if (event.target === commentReader) closeCommentReader(); });

accountPhoto.addEventListener('change', () => {
  const file = accountPhoto.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => setAvatarElement(accountPhotoPreview, { displayName: accountDisplayName.value, avatarUrl: reader.result });
  reader.readAsDataURL(file);
});

accountForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  accountStatus.textContent = '';
  accountSubmit.disabled = true;
  try {
    if (authMode === 'profile') {
      currentProfile = await window.LoveCloud.updateProfile({ displayName: accountDisplayName.value.trim(), avatarFile: accountPhoto.files?.[0] });
      accountStatus.textContent = text('profileSaved');
      renderAccount();
      return;
    }
    if (authMode === 'signup') {
      const result = await window.LoveCloud.signUp({
        email: accountEmail.value.trim(),
        password: accountPassword.value,
        displayName: accountDisplayName.value.trim(),
        avatarFile: accountPhoto.files?.[0]
      });
      if (result.needsEmailConfirmation) {
        setAuthMode('signin');
        accountStatus.textContent = text('confirmEmail');
        return;
      }
      currentProfile = result.profile;
    } else {
      currentProfile = await window.LoveCloud.signIn({ email: accountEmail.value.trim(), password: accountPassword.value });
    }
    renderAccount();
    closeAccount();
  } catch (error) {
    accountStatus.textContent = error.message || String(error);
  } finally {
    accountSubmit.disabled = false;
  }
});

accountSignOut.addEventListener('click', async () => {
  await window.LoveCloud.signOut();
  currentProfile = null;
  renderAccount();
  closeAccount();
});

document.addEventListener('pointermove', (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});
document.querySelectorAll('button,a').forEach((element) => {
  element.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
  element.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

const albumClickCanvas = document.querySelector('#albumClickEffects');
const albumClickContext = albumClickCanvas.getContext('2d');
const albumClickParticles = [];
let albumClickAnimationFrame = 0;

function resizeAlbumClickCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  albumClickCanvas.width = window.innerWidth * ratio;
  albumClickCanvas.height = window.innerHeight * ratio;
  albumClickContext.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function animateAlbumClickParticles() {
  albumClickContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let index = albumClickParticles.length - 1; index >= 0; index -= 1) {
    const particle = albumClickParticles[index];
    particle.age += 1;
    const progress = particle.age / particle.life;
    if (progress >= 1) {
      albumClickParticles.splice(index, 1);
      continue;
    }
    const forming = Math.min(1, progress / .28);
    const scatter = Math.max(0, (progress - .32) / .68);
    const ease = 1 - Math.pow(1 - forming, 3);
    const x = particle.originX + particle.targetX * ease + particle.velocityX * scatter * 22;
    const y = particle.originY + particle.targetY * ease + particle.velocityY * scatter * 22 - scatter * 8;
    const alpha = progress < .55 ? .85 : (1 - progress) / .45 * .85;
    albumClickContext.beginPath();
    albumClickContext.arc(x, y, particle.radius * (1 - scatter * .35), 0, Math.PI * 2);
    albumClickContext.fillStyle = particle.color.replace('ALPHA', alpha.toFixed(3));
    albumClickContext.shadowColor = 'rgba(189,167,125,.55)';
    albumClickContext.shadowBlur = 7;
    albumClickContext.fill();
  }
  albumClickContext.shadowBlur = 0;
  if (albumClickParticles.length) albumClickAnimationFrame = requestAnimationFrame(animateAlbumClickParticles);
  else albumClickAnimationFrame = 0;
}

function createAlbumClickHeart(x, y) {
  const points = 24;
  for (let index = 0; index < points; index += 1) {
    const angle = Math.PI * 2 * index / points;
    const heartX = 16 * Math.pow(Math.sin(angle), 3);
    const heartY = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
    const length = Math.hypot(heartX, heartY) || 1;
    albumClickParticles.push({
      originX:x, originY:y,
      targetX:heartX * .72, targetY:heartY * .72,
      velocityX:heartX / length + (Math.random() - .5) * .25,
      velocityY:heartY / length + (Math.random() - .5) * .25,
      radius:index % 4 === 0 ? 1.7 : 1.05,
      color:index % 5 === 0 ? 'rgba(112,42,58,ALPHA)' : 'rgba(213,190,143,ALPHA)',
      age:0, life:54 + Math.random() * 12
    });
  }
  if (!albumClickAnimationFrame) albumClickAnimationFrame = requestAnimationFrame(animateAlbumClickParticles);
}

resizeAlbumClickCanvas();
window.addEventListener('resize', resizeAlbumClickCanvas);
window.addEventListener('pointerdown', (event) => {
  if (event.button !== undefined && event.button !== 0) return;
  createAlbumClickHeart(event.clientX, event.clientY);
}, { passive:true });

let savedLanguage = 'de';
try { savedLanguage = localStorage.getItem('leo-language') || 'de'; } catch (error) { /* Use German. */ }
setLanguage(savedLanguage);
window.LoveCloud.getCurrentProfile().then((profile) => {
  currentProfile = profile;
  renderAccount();
});
window.LoveCloud.onAuthChange((profile) => {
  currentProfile = profile;
  renderAccount();
});
loadAlbum();
window.addEventListener('pageshow', loadAlbum);
