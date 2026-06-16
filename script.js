const body = document.body;
const prologue = document.querySelector('#prologue');
const enterButton = document.querySelector('#enterButton');
const theaterTransition = document.querySelector('#theaterTransition');
const yesButton = document.querySelector('#yesButton');
const loveReveal = document.querySelector('#loveReveal');
const closeReveal = document.querySelector('#closeReveal');
const progressBar = document.querySelector('.progress span');
const cursor = document.querySelector('.cursor');
const languageButtons = document.querySelectorAll('[data-lang]');
const translatableElements = document.querySelectorAll('[data-i18n]');
const translatablePlaceholders = document.querySelectorAll('[data-i18n-placeholder]');
const relationshipClocks = document.querySelectorAll('[data-clock]');
const clickCanvas = document.querySelector('#clickEffects');
const cityClocks = document.querySelectorAll('[data-city-clock]');
const ambientWorld = document.querySelector('#ambientWorld');
const ambientCanvas = document.querySelector('#ambientCanvas');
const loveCat = document.querySelector('#loveCat');
const catBubble = document.querySelector('#catBubble');
const albumFrames = document.querySelectorAll('[data-photo-slot]');
const albumFileInput = document.querySelector('#albumFileInput');
const albumCounter = document.querySelector('#albumCounter');

const translations = {
  de: {
    prologueEyebrow: 'Eine kleine Welt, nur für uns',
    prologueLine: 'Manche Menschen fühlen sich<br>nicht wie ein Ort, sondern wie <i>Zuhause.</i>',
    enter: 'Unsere Geschichte', headphones: 'Kopfhörer empfohlen · Für den schönsten Moment',
    dearLeo: 'Liebe Leo', openingTitle: 'Seit es dich gibt,<br>ist die Welt <em>leiser</em><br>und mein Herz <em>lauter.</em>',
    openingSub: 'Seit dem 22. März 2026 fühlt sich selbst die Entfernung ein wenig mehr wie Zuhause an.',
    metLabel: 'Der Tag, an dem wir uns fanden', togetherLabel: 'Der Tag, an dem aus uns ein Wir wurde', unitDays: 'Tage', unitHours: 'Std.', unitMinutes: 'Min.', unitSeconds: 'Sek.',
    storyEyebrow: 'Unsere Geschichte', storyTitle: 'Momente, die ich<br><em>für immer</em> behalte.',
    memoryOneLabel: '22. MÄRZ 2026 · UNSER ERSTES HALLO', memoryOneTitle: 'Zwei Länder.<br>Ein Gespräch, das blieb.', memoryOneBody: 'Zwischen uns lagen Länder und Zeitzonen. Trotzdem wurdest du ganz selbstverständlich zu dem Menschen, mit dem ich jeden Gedanken teilen möchte.',
    memoryTwoLabel: '7. MAI 2026 · OFFIZIELL WIR', memoryTwoTitle: 'Ein Ja, das selbst die<br>Entfernung kleiner machte.', memoryTwoBody: 'An diesem Tag bekam unsere Geschichte einen Namen. Seitdem ist jedes Gute-Nacht durch einen Bildschirm auch ein kleines Versprechen auf ein echtes Morgen.',
    memoryThreeLabel: 'UNSER INSIDE JOKE', memoryThreeTitle: 'Nicht jede Liebeserklärung<br>muss vernünftig sein.', memoryThreeBody: 'Manchmal sagen wir einfach “I will touch your butt” und müssen beide lachen. Kein großes Versprechen – nur einer dieser albernen kleinen Sätze, die ganz nach uns klingen.',
    traitWarm: 'wundervoll', traitBrave: 'humorvoll', traitWonderful: 'warm',
    portraitEyebrow: 'Wie ich dich sehe', portraitTitle: 'Du bist kein Kapitel<br>in meinem Leben.', portraitBody: 'Du bist die Sprache, in der ich meine schönsten Kapitel schreiben möchte.',
    qualityOne: 'Die Ruhe, die du mir gibst', qualityTwo: 'Dein Lachen, das alles heller macht', qualityThree: 'Die Welt, die ich in deinen Augen sehe', qualityFour: 'Die Zukunft, die ich mit dir will',
    futureEyebrow: 'Unser Plan gegen die Entfernung', futureTitle: 'Heute noch Pixel.<br><em>Eines Tages ganz nah.</em>', futureBody: 'Das hier sind keine vagen Vielleicht-Pläne. Es sind Verabredungen mit unserer Zukunft – mit Reisen, einer Katze, gutem Essen und ganz viel gemeinsamem Alltag.',
    wishOneTitle: 'Zwei Wege, ein Ziel: die Welt.', wishOneBody: 'Du kommst nach China, ich komme nach Deutschland – und danach machen wir aus der Weltkarte unsere gemeinsame Erinnerungsliste.', wishTwoTitle: 'Eine Katze adoptieren.', wishTwoBody: 'Wir geben ihr ein Zuhause. Sie übernimmt dann unser Bett, unser Sofa und vermutlich die gesamte Beziehung. Über den Namen streiten wir liebevoll.', wishThreeTitle: 'Ganz viele süße Dinge zusammen machen.', wishThreeBody: 'Kuchen, Kekse, deutsche Desserts, chinesisches Essen – wir probieren alles. Ein Teil wird wunderschön, ein Teil wahrscheinlich seltsam, aber alles wird nach einem gemeinsamen Zuhause schmecken.', wishFourTitle: 'Ein ganz normales Leben, nur gemeinsam.', wishFourBody: 'Zusammen einkaufen, kochen, spazieren gehen und über völlig unwichtige Dinge diskutieren. Ich will mit dir nicht nur die großen Abenteuer – ich will auch jeden kleinen Dienstag.',
    finalEyebrow: 'Eine letzte Frage', finalTitle: 'Leo, darf ich dich<br>in all meinen kommenden<br><em>Kapiteln lieben?</em>', finalSub: 'Mit dir möchte ich jeden nächsten Morgen beginnen.', yes: 'Ja, für immer', signature: 'Dein, heute und an jedem Morgen danach.',
    revealEyebrow: 'Dann ist dies erst der Anfang', revealTitle: 'Ich liebe dich,<br><em>Leo.</em>', revealBody: 'In jeder Sprache. In jeder Entfernung.<br>Heute, morgen und in all den Tagen danach.'
  },
  en: {
    prologueEyebrow: 'A little world, made only for us',
    prologueLine: 'Some people do not feel like a place.<br>They simply feel like <i>home.</i>',
    enter: 'Enter our story', headphones: 'Headphones recommended · For the loveliest moment',
    dearLeo: 'My dearest Leo', openingTitle: 'Since you arrived,<br>the world feels <em>quieter</em><br>and my heart <em>louder.</em>',
    openingSub: 'Since March 22, 2026, even the distance has begun to feel a little more like home.',
    metLabel: 'The day we found each other', togetherLabel: 'The day you and I became us', unitDays: 'days', unitHours: 'hrs', unitMinutes: 'min', unitSeconds: 'sec',
    storyEyebrow: 'Our story', storyTitle: 'Moments I will keep<br><em>forever.</em>',
    memoryOneLabel: 'MARCH 22, 2026 · OUR FIRST HELLO', memoryOneTitle: 'Two countries.<br>One conversation that stayed.', memoryOneBody: 'Countries and time zones stood between us. Somehow, you still became the person I most naturally want to share every thought with.',
    memoryTwoLabel: 'MAY 7, 2026 · OFFICIALLY US', memoryTwoTitle: 'One yes that made even<br>the distance feel smaller.', memoryTwoBody: 'That day, our story finally got a name. Since then, every goodnight through a screen has also been a small promise of a real tomorrow.',
    memoryThreeLabel: 'OUR INSIDE JOKE', memoryThreeTitle: 'Not every declaration of love<br>has to be sensible.', memoryThreeBody: 'Sometimes we simply say “I will touch your butt” and both start laughing. Not a grand promise – just one of those silly little sentences that sounds unmistakably like us.',
    traitWarm: 'wonderful', traitBrave: 'funny', traitWonderful: 'warm',
    portraitEyebrow: 'The way I see you', portraitTitle: 'You are not a chapter<br>in my life.', portraitBody: 'You are the language in which I want to write all my most beautiful chapters.',
    qualityOne: 'The calm you bring me', qualityTwo: 'Your laugh that makes everything brighter', qualityThree: 'The world I see in your eyes', qualityFour: 'The future I want with you',
    futureEyebrow: 'Our plan against the distance', futureTitle: 'Pixels for now.<br><em>One day, close enough.</em>', futureBody: 'These are not vague someday-maybes. They are appointments with our future – with journeys, one cat, good food, and plenty of ordinary days together.',
    wishOneTitle: 'Two journeys, one destination: the world.', wishOneBody: 'You come to China, I come to Germany – and then we turn the world map into our shared list of memories.', wishTwoTitle: 'Adopt one small cat.', wishTwoBody: 'We give it a home. It takes over our bed, our sofa, and probably the entire relationship. We can lovingly argue about the name.', wishThreeTitle: 'Make far too many sweet things together.', wishThreeBody: 'Cakes, cookies, German desserts, Chinese food – we try everything. Some will be beautiful, some probably strange, but all of it will taste a little like a home we made together.', wishFourTitle: 'A completely ordinary life, only together.', wishFourBody: 'Shopping, cooking, taking walks, and debating things that do not matter at all. I do not only want the grand adventures with you – I want every little Tuesday too.',
    finalEyebrow: 'One last question', finalTitle: 'Leo, may I love you<br>through every chapter<br><em>still to come?</em>', finalSub: 'I want to begin every tomorrow with you.', yes: 'Yes, forever', signature: 'Yours, today and every morning after.',
    revealEyebrow: 'Then this is only the beginning', revealTitle: 'I love you,<br><em>Leo.</em>', revealBody: 'In every language. Across every distance.<br>Today, tomorrow, and all the days after.'
  },
  zh: {
    prologueEyebrow: '一个只属于我们的世界',
    prologueLine: '有些人并不像某个地方，<br>而是让人觉得，终于<em>回到了家。</em>',
    enter: '进入我们的故事', headphones: '建议佩戴耳机 · 献给最动人的这一刻',
    dearLeo: '亲爱的 Leo', openingTitle: '自从遇见你，<br>世界变得更<em>安静</em>，<br>而我的心跳更<em>响亮。</em>',
    openingSub: '从2026年3月22日起，就连距离，也开始有了一点家的感觉。',
    metLabel: '我们找到彼此的那一天', togetherLabel: '“你和我”变成“我们”的那一天', unitDays: '天', unitHours: '时', unitMinutes: '分', unitSeconds: '秒',
    storyEyebrow: '我们的故事', storyTitle: '这些瞬间，<br>我想珍藏到<em>永远。</em>',
    memoryOneLabel: '2026年3月22日 · 第一次说你好', memoryOneTitle: '两个国家，<br>一场没有结束的对话。', memoryOneBody: '我们隔着国家和时区，你却还是那么自然地，成了我最想分享每一个念头的人。',
    memoryTwoLabel: '2026年5月7日 · 正式成为我们', memoryTwoTitle: '一句“好”，让距离<br>也变得小了一点。', memoryTwoBody: '从那一天起，我们的故事终于有了名字。此后每一句隔着屏幕的晚安，也都成了对真实明天的一点承诺。',
    memoryThreeLabel: '只有我们懂的玩笑', memoryThreeTitle: '不是每一句情话，<br>都必须正经。', memoryThreeBody: '有时候我们会互相说一句“I will touch your butt”，然后一起笑出来。它不是什么郑重承诺，只是一句很傻、却一听就很像我们的玩笑。',
    traitWarm: '美好', traitBrave: '幽默', traitWonderful: '温暖',
    portraitEyebrow: '我眼中的你', portraitTitle: '你不是我生命里的<br>某一个章节。', portraitBody: '你是我想用来写完所有美好章节的那一种语言。',
    qualityOne: '你带给我的安定', qualityTwo: '让一切都明亮起来的笑容', qualityThree: '我在你眼睛里看见的世界', qualityFour: '我想与你一起抵达的未来',
    futureEyebrow: '我们对抗距离的计划', futureTitle: '现在还是像素，<br><em>以后一定触手可及。</em>', futureBody: '这些不是“有机会再说”的幻想，而是我们和未来定好的约会——里面有旅行、一只猫、好多美食，还有许许多多一起度过的普通日子。',
    wishOneTitle: '两条路，一个目的地：全世界。', wishOneBody: '你来中国，我去德国。然后我们把世界地图，一点点变成只属于我们的回忆清单。', wishTwoTitle: '一起养一只小猫。', wishTwoBody: '我们给它一个家，它接管我们的床、沙发，大概还有整段感情。至于名字，我们可以很有爱地争论。', wishThreeTitle: '一起做好多好多甜品和好吃的。', wishThreeBody: '蛋糕、饼干、德国甜点、中国菜，我们全部都试一遍。有些会很好看，有些可能很奇怪，但每一口都会有一点属于我们共同生活的味道。', wishFourTitle: '一起过很普通、很真实的日子。', wishFourBody: '一起买菜、做饭、散步，再为完全不重要的小事认真争论。我不只想和你经历盛大的冒险，也想拥有每一个平凡的星期二。',
    finalEyebrow: '最后一个问题', finalTitle: 'Leo，我可以在未来的<br>每一个章节里，<br><em>继续爱你吗？</em>', finalSub: '我想与你一起，开始今后的每一个清晨。', yes: '好，直到永远', signature: '属于你的，从今天，到未来的每一个清晨。',
    revealEyebrow: '那么，这一切才刚刚开始', revealTitle: '我爱你，<br><em>Leo。</em>', revealBody: '用每一种语言，跨越每一段距离。<br>今天、明天，以及往后的每一天。'
  }
};

const polishedCopy = {
  de: {
    prologueEyebrow: 'Eine kleine Welt für Leo und Alex',
    prologueLine: 'Du bist über achttausend Kilometer entfernt<br>und trotzdem mein liebster Teil des Tages.',
    enter: 'Zu Leo & Alex',
    headphones: 'Mit Kopfhörern ist es noch ein bisschen schöner',
    dearLeo: 'Liebe · Leo',
    openingTitle: 'Seit ich dich kenne,<br>gibt es jeden Tag<br><em>etwas, worauf ich mich freue.</em>',
    openingSub: 'Zwischen Shenzhen und Heilbronn liegt fast die ganze Welt. Und trotzdem bist du der Mensch, mit dem ich jeden Tag am liebsten rede.',
    metLabel: 'Unser erstes Hallo',
    togetherLabel: 'Der Tag, an dem wir offiziell wir wurden',
    storyEyebrow: 'Das sind wir',
    storyTitle: 'Noch gar nicht so lange.<br>Und trotzdem schon so viel,<br><em>das ich nicht vergessen will.</em>',
    memoryOneLabel: '22. MÄRZ 2026 · UNSER ERSTES HALLO',
    memoryOneTitle: 'Aus einem Hallo<br>wurde mein liebster Chat.',
    memoryOneBody: 'Du in Heilbronn, ich in Shenzhen – und am Ende hatten wir trotzdem nie genug Zeit für alles, was wir noch sagen wollten. Die Zeitverschiebung nervt. Du bist es wert.',
    memoryTwoLabel: '7. MAI 2026 · OFFIZIELL WIR',
    memoryTwoTitle: 'Seit diesem Tag hat<br>Vermissen einen Namen.',
    memoryTwoBody: 'Die Entfernung wurde keinen Kilometer kürzer. Aber plötzlich gab es da jemanden, den ich ganz offiziell vermissen, mögen und sehr ernst nehmen durfte.',
    memoryThreeLabel: 'NUR WIR VERSTEHEN DAS',
    memoryThreeTitle: 'Romantisch können wir.<br>Unsinn noch besser.',
    memoryThreeBody: 'Zum Beispiel: “I will touch your butt.” Keine große Botschaft, kein Versprechen – nur ein Satz, bei dem wir beide sofort lachen. Zärtlich ist echt. Albern sein auch.',
    portraitEyebrow: 'So sehe ich dich',
    portraitTitle: 'Ich mag dich genau so,<br>wie du wirklich bist.',
    portraitBody: 'Du beruhigst mich, bringst mich zum Lachen und lässt mich selbst durch einen Bildschirm denken: Ich würde dich jetzt gern umarmen.',
    qualityOne: 'Wie ruhig sich Reden mit dir anfühlt',
    qualityTwo: 'Wie schnell du mich zum Lachen bringst',
    qualityThree: 'Wie liebevoll und ehrlich du bist',
    qualityFour: 'Wie sehr ich mich auf unser Treffen freue',
    futureEyebrow: 'Unser Plan gegen die Entfernung',
    futureTitle: 'Heute trennt uns noch die Karte.<br><em>Später reisen wir zusammen darüber.</em>',
    futureBody: 'China und Deutschland, eine Katze und sehr viele Gerichte, die entweder großartig werden oder komplett schiefgehen. Wir müssen nicht alles sofort wissen. Diese Dinge machen wir aber wirklich.',
    wishOneTitle: 'Erst China und Deutschland. Dann die Welt.',
    wishOneBody: 'Du kommst zu mir nach China, ich komme zu dir nach Deutschland. Danach sammeln wir Orte, Fotos und Geschichten, bis die Weltkarte nach uns aussieht.',
    wishTwoTitle: 'Eine Katze mit sehr viel Mitspracherecht.',
    wishTwoBody: 'Wir geben ihr ein Zuhause. Sie übernimmt dafür Bett, Sofa und wahrscheinlich unsere gesamte Tagesplanung. Beim Namen einigen wir uns nach nur ungefähr 47 Diskussionen.',
    wishThreeTitle: 'Zusammen viel zu viel Leckeres machen.',
    wishThreeBody: 'Kuchen, Kekse, deutsche Desserts und chinesisches Essen. Manche Versuche werden hübsch, manche verdächtig. Gegessen wird trotzdem zusammen.',
    wishFourTitle: 'Auch die ganz normalen Tage zusammen.',
    wishFourBody: 'Einkaufen, kochen, spazieren, herumliegen und über Kleinigkeiten diskutieren. Ich will mit dir nicht nur große Reisen, sondern auch einen ziemlich gewöhnlichen Dienstag.',
    archiveEyebrow: 'Unser Platz für später',
    archiveTitle: 'Noch sind die Rahmen leer.<br><em>Zum Glück nicht für immer.</em>',
    archiveIntro: 'Hier warten schon Plätze auf die Fotos, die wir noch nicht machen konnten – und auf die kleinen Nachrichten, die wir uns später hinterlassen.',
    albumHint: 'Klick auf einen Rahmen und such unser zukünftiges Foto aus.',
    albumCounter: '{count} / 3 Erinnerungen gespeichert',
    albumOneTitle: 'Unser erstes echtes Foto',
    albumOneNote: 'Reserviert für den Tag, an dem Pixel endlich zu Nähe werden.',
    albumOnePlace: 'IRGENDWO ZWISCHEN UNS',
    albumTwoTitle: 'Ein Tag in Shenzhen',
    albumTwoNote: 'Leo in Alex’ Stadt. Essen wahrscheinlich wichtiger als der Zeitplan.',
    albumThreeTitle: 'Ein Tag in Heilbronn',
    albumThreeNote: 'Alex in Leos Welt. Vermutlich mit kalten Händen und sehr guter Laune.',
    openAlbum: 'Unser Fotoalbum',
    openFullAlbum: 'Das ganze Album öffnen',
    archiveEntryNote: 'Diese drei Bilder bleiben oben. Alle weiteren Erinnerungen bekommen im großen Album ihren eigenen Platz und ihre eigene Nachricht.',
    letterTitle: 'Eine Nachricht an unser zukünftiges Wir.',
    letterIntro: 'Schreib hier etwas, das wir lesen sollen, wenn mindestens einer dieser Rahmen nicht mehr leer ist.',
    letterPlaceholder: 'Liebe zukünftige Leo und lieber zukünftiger Alex ...',
    letterReady: 'Noch nicht gespeichert',
    letterChanged: 'Neue Worte warten aufs Speichern',
    letterSaved: 'Für unser zukünftiges Wir gespeichert',
    letterSave: 'Nachricht bewahren',
    albumStorageError: 'Das Foto ist zu groß zum Speichern – bitte versuch ein kleineres.',
    albumOwnerOnly: 'Nur Alex und Leo können diese Albumrahmen verändern.',
    finalEyebrow: 'Eine wichtige kleine Frage',
    finalTitle: 'Leo, darf ich dich<br>auch an all den Tagen,<br><em>die noch kommen, lieben?</em>',
    finalSub: 'Irgendwann möchte ich dir nicht mehr durch einen Bildschirm gute Nacht sagen, sondern direkt neben dir.',
    yes: 'Ja, sehr gern',
    signature: 'Alex – heute sehr verliebt, morgen vermutlich noch ein bisschen mehr.',
    revealEyebrow: 'Gut, dann ist es abgemacht',
    revealTitle: 'Ich liebe dich,<br><em>Leo.</em>',
    revealBody: 'Wir mögen uns weiter jeden Tag ein bisschen mehr.<br>Und den Rest des Weges gehen Leo und Alex langsam zusammen.'
  },
  en: {
    prologueEyebrow: 'A little world for Leo and Alex',
    prologueLine: 'You are more than eight thousand kilometres away<br>and still my favourite part of every day.',
    enter: 'Meet Leo & Alex',
    headphones: 'Headphones make this a little sweeter',
    dearLeo: 'Dear · Leo',
    openingTitle: 'Since I met you,<br>every day has<br><em>something worth waiting for.</em>',
    openingSub: 'Almost the whole world sits between Shenzhen and Heilbronn, yet you are still the person I most want to talk to every day.',
    metLabel: 'Our first hello',
    togetherLabel: 'The day we officially became us',
    storyEyebrow: 'This is us',
    storyTitle: 'It has not been that long.<br>Yet there is already so much<br><em>I never want to forget.</em>',
    memoryOneLabel: 'MARCH 22, 2026 · OUR FIRST HELLO',
    memoryOneTitle: 'One hello became<br>my favourite conversation.',
    memoryOneBody: 'You in Heilbronn, me in Shenzhen, and somehow we still never have enough time for everything left to say. The time difference is annoying. You are worth it.',
    memoryTwoLabel: 'MAY 7, 2026 · OFFICIALLY US',
    memoryTwoTitle: 'After that day,<br>missing you had a name.',
    memoryTwoBody: 'The distance did not shrink by a single kilometre. I simply gained someone I could officially miss, adore, and take very seriously.',
    memoryThreeLabel: 'ONLY WE GET THIS',
    memoryThreeTitle: 'We can be romantic.<br>We are even better at nonsense.',
    memoryThreeBody: 'For example: “I will touch your butt.” No deep meaning and definitely not a promise – just one sentence that makes both of us laugh. The tenderness is real. So is the silliness.',
    portraitEyebrow: 'The Leo I know',
    portraitTitle: 'I like you exactly<br>as you really are.',
    portraitBody: 'You make me feel calm, make me laugh, and make me want to hug you even when there is a screen in the way.',
    qualityOne: 'How safe talking to you feels',
    qualityTwo: 'How easily you make me laugh',
    qualityThree: 'How warm and honest you are',
    qualityFour: 'How excited I am to finally meet you',
    futureEyebrow: 'Our plan against the distance',
    futureTitle: 'A map separates us today.<br><em>One day, we will travel across it together.</em>',
    futureBody: 'China and Germany, one cat, and a great many dishes that may be brilliant or completely disastrous. We do not need every answer yet. These parts, though, are happening.',
    wishOneTitle: 'First China and Germany. Then the world.',
    wishOneBody: 'You come to China, I go to Germany. After that we collect places, photos, and stories until the map starts to look like us.',
    wishTwoTitle: 'One cat with a lot of authority.',
    wishTwoBody: 'We give it a home. It takes the bed, the sofa, and probably control of our entire schedule. We agree on a name after only about 47 discussions.',
    wishThreeTitle: 'Make far too much delicious food together.',
    wishThreeBody: 'Cakes, cookies, German desserts, and Chinese food. Some attempts will be beautiful, some suspicious. We eat them together anyway.',
    wishFourTitle: 'Share the wonderfully ordinary days too.',
    wishFourBody: 'Shopping, cooking, walking, doing nothing, and debating tiny things. I do not only want the big trips with you. I want a very ordinary Tuesday too.',
    archiveEyebrow: 'A place for later',
    archiveTitle: 'The frames are empty for now.<br><em>Luckily, not forever.</em>',
    archiveIntro: 'This page is already waiting for the photos we have not been able to take yet, and for the little notes we will leave each other along the way.',
    albumHint: 'Click a frame and choose one of our future photographs.',
    albumCounter: '{count} / 3 memories saved',
    albumOneTitle: 'Our first real photo together',
    albumOneNote: 'Reserved for the day pixels finally turn into closeness.',
    albumOnePlace: 'SOMEWHERE BETWEEN US',
    albumTwoTitle: 'One day in Shenzhen',
    albumTwoNote: 'Leo in Alex’s city. Food will probably matter more than the schedule.',
    albumThreeTitle: 'One day in Heilbronn',
    albumThreeNote: 'Alex in Leo’s world. Probably with cold hands and an excellent mood.',
    openAlbum: 'Our photo album',
    openFullAlbum: 'Open the full album',
    archiveEntryNote: 'These three photographs stay at the top. Every new memory gets its own place and its own note inside the full album.',
    letterTitle: 'A note to our future selves.',
    letterIntro: 'Write something for us to read when at least one of these frames is no longer empty.',
    letterPlaceholder: 'Dear future Leo and future Alex ...',
    letterReady: 'Not saved yet',
    letterChanged: 'New words are waiting to be saved',
    letterSaved: 'Saved for our future selves',
    letterSave: 'Keep this message',
    albumStorageError: 'This photo is too large to save. Please try a smaller one.',
    albumOwnerOnly: 'Only Alex and Leo can change these album frames.',
    finalEyebrow: 'One important little question',
    finalTitle: 'Leo, may I keep<br>loving you through all<br><em>the days still to come?</em>',
    finalSub: 'One day I want to say goodnight beside you, instead of through a screen.',
    yes: 'Yes, absolutely',
    signature: 'Alex – very much in love today, probably a little more tomorrow.',
    revealEyebrow: 'Good. Then it is a deal',
    revealTitle: 'I love you,<br><em>Leo.</em>',
    revealBody: 'Let us keep choosing each other, one day at a time.<br>Leo and Alex can take the rest of the road slowly, together.'
  },
  zh: {
    prologueEyebrow: '一个只属于 Leo 和 Alex 的小世界',
    prologueLine: '你在八千多公里以外，<br>却成了我每天最期待的那一部分。',
    enter: '走进 Leo 和 Alex',
    headphones: '戴上耳机，会再浪漫一点',
    dearLeo: '亲爱的 · Leo',
    openingTitle: '认识你以后，<br>每天都多了一件<br><em>值得期待的事。</em>',
    openingSub: '深圳和海尔布隆之间隔着大半个世界，你却还是成了我每天最想说话的人。',
    metLabel: '我们第一次说你好的那天',
    togetherLabel: '我们正式变成“我们”的那天',
    storyEyebrow: '关于我们',
    storyTitle: '不算很久，<br>但已经有很多<br><em>舍不得忘记。</em>',
    memoryOneLabel: '2026年3月22日 · 第一次说你好',
    memoryOneTitle: '从一句你好，<br>聊成了每天都想见的人。',
    memoryOneBody: '明明一个在深圳，一个在德国，最后却总有说不完的话。时差有点烦，你很好，这笔账怎么算都值得。',
    memoryTwoLabel: '2026年5月7日 · 正式成为我们',
    memoryTwoTitle: '5月7日以后，<br>想你有了正式身份。',
    memoryTwoBody: '那天开始，我们不再只是聊天列表里的两个人。距离没少一公里，但我多了一个可以认真喜欢的人。',
    memoryThreeLabel: '只有我们懂的玩笑',
    memoryThreeTitle: '正经情话会说，<br>不正经的也没少说。',
    memoryThreeBody: '比如“I will touch your butt”。没什么深刻含义，更不是什么承诺，就是我们一说就想笑。恋爱嘛，温柔是真的，犯傻也是真的。',
    portraitEyebrow: '我认识的 Leo',
    portraitTitle: '我喜欢的，<br>就是这样真实的你。',
    portraitBody: '会让我安心，会把我逗笑，也会让我隔着屏幕忍不住想抱抱你。',
    qualityOne: '和你聊天时的安心',
    qualityTwo: '突然把我逗笑的幽默',
    qualityThree: '认真又温柔的样子',
    qualityFour: '让我开始期待见面的你',
    futureEyebrow: '我们对抗距离的计划',
    futureTitle: '现在还隔着地图，<br><em>以后要一起走遍地图。</em>',
    futureBody: '想去中国和德国，想养猫，想一起做一桌可能成功也可能翻车的好吃的。远一点的未来先不吹牛，这几件我们一定认真实现。',
    wishOneTitle: '先去中国和德国，再一起看世界。',
    wishOneBody: '你来中国，我去德国。然后一点点收集城市、照片和故事，直到这张世界地图越来越像我们。',
    wishTwoTitle: '养一只很有话语权的小猫。',
    wishTwoBody: '我们给它一个家，它负责接管床、沙发和我们的作息。名字嘛，大概认真讨论47次以后就能定下来。',
    wishThreeTitle: '一起做好多好多甜品和好吃的。',
    wishThreeBody: '蛋糕、饼干、德国甜点、中国菜，全部试一遍。有些会很好看，有些可能看起来不太安全，但我们还是一起吃掉。',
    wishFourTitle: '也要一起过很普通、很真实的日子。',
    wishFourBody: '买菜、做饭、散步、发呆，再为一点小事认真争论。我不只想和你去很远的地方，也想和你过一个普普通通的星期二。',
    archiveEyebrow: '留给以后的房间',
    archiveTitle: '相框现在还是空的，<br><em>但不会一直空下去。</em>',
    archiveIntro: '这里先替我们保留一些位置，等以后放进真正见面后的照片，也放进一路上想留给彼此的话。',
    albumHint: '点击相框，就可以放入一张属于我们的照片。',
    albumCounter: '已经收藏 {count} / 3 个瞬间',
    albumOneTitle: '我们的第一张真正合照',
    albumOneNote: '留给像素终于变成拥抱的那一天。',
    albumOnePlace: '在我们之间的某个地方',
    albumTwoTitle: '一起在深圳的一天',
    albumTwoNote: 'Leo 来到 Alex 的城市。行程不一定准时，好吃的一定不能错过。',
    albumThreeTitle: '一起在海尔布隆的一天',
    albumThreeNote: 'Alex 来到 Leo 的世界。手可能有点冷，心情一定很好。',
    openAlbum: '进入我们的相片册',
    openFullAlbum: '打开完整相片册',
    archiveEntryNote: '这三张会一直作为置顶精选。以后新增的每一个瞬间，都会在完整相片册里拥有自己的位置和留言。',
    letterTitle: '写给未来的 Leo 和 Alex。',
    letterIntro: '写一句想让未来的我们看见的话，等至少有一只相框不再空着的时候，再回来一起读。',
    letterPlaceholder: '亲爱的未来 Leo 和未来 Alex……',
    letterReady: '还没有保存留言',
    letterChanged: '有新的话还没保存',
    letterSaved: '已经替未来的我们保管好了',
    letterSave: '保存这封留言',
    albumStorageError: '照片太大，浏览器装不下啦，请换一张小一点的。',
    albumOwnerOnly: '只有 Alex 和 Leo 可以更换这些相框里的照片。',
    finalEyebrow: '一个很重要的小问题',
    finalTitle: 'Leo，以后的日子，<br>可以继续让我<br><em>喜欢你吗？</em>',
    finalSub: '想从隔着屏幕说晚安，慢慢走到在你身边说晚安。',
    yes: '好，当然可以',
    signature: 'Alex，今天很喜欢你，明天大概会更喜欢一点。',
    revealEyebrow: '好，那就说定了',
    revealTitle: '我爱你，<br><em>Leo。</em>',
    revealBody: '先继续每天认真喜欢对方。<br>剩下的路，Leo 和 Alex 慢慢一起走。'
  }
};

Object.entries(polishedCopy).forEach(([language, copy]) => Object.assign(translations[language], copy));

let currentLanguage = 'de';

function setLanguage(language, animate = true) {
  if (!translations[language]) return;
  if (animate) body.classList.add('language-changing');

  window.setTimeout(() => {
    currentLanguage = language;
    translatableElements.forEach((element) => {
      const value = translations[language][element.dataset.i18n];
      if (value) element.innerHTML = value;
    });
    translatablePlaceholders.forEach((element) => {
      const value = translations[language][element.dataset.i18nPlaceholder];
      if (value) element.placeholder = value;
    });
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
    languageButtons.forEach((button) => {
      const isActive = button.dataset.lang === language;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    try { localStorage.setItem('leo-language', language); } catch (error) { /* File previews may disable storage. */ }
    body.classList.toggle('is-chinese', language === 'zh');
    updateArchiveLabels();
    requestAnimationFrame(() => body.classList.remove('language-changing'));
  }, animate ? 260 : 0);
}

languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
let savedLanguage = 'de';
try { savedLanguage = localStorage.getItem('leo-language') || 'de'; } catch (error) { /* Keep the default language. */ }
setLanguage(savedLanguage, false);

// Replace these two midnight values if you later remember the exact times.
const relationshipMoments = {
  known: new Date('2026-03-22T00:00:00+08:00').getTime(),
  together: new Date('2026-05-07T00:00:00+08:00').getTime()
};

function updateRelationshipClocks() {
  const now = Date.now();
  relationshipClocks.forEach((clock) => {
    const elapsed = Math.max(0, now - relationshipMoments[clock.dataset.clock]);
    const totalSeconds = Math.floor(elapsed / 1000);
    const values = {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60
    };

    Object.entries(values).forEach(([unit, value]) => {
      const field = clock.querySelector(`[data-unit="${unit}"]`);
      const nextValue = unit === 'days' ? String(value) : String(value).padStart(2, '0');
      if (field.textContent !== nextValue) {
        field.textContent = nextValue;
        field.classList.remove('digit-change');
        void field.offsetWidth;
        field.classList.add('digit-change');
      }
    });
  });
}

updateRelationshipClocks();
window.setInterval(updateRelationshipClocks, 1000);

const cityTimeZones = { heilbronn: 'Europe/Berlin', shenzhen: 'Asia/Shanghai' };
const cityTimeFormatters = Object.fromEntries(Object.entries(cityTimeZones).map(([city, timeZone]) => [city, new Intl.DateTimeFormat('en-GB', {
  timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
})]));

function updateCityClocks() {
  const now = new Date();
  cityClocks.forEach((clock) => {
    const value = cityTimeFormatters[clock.dataset.cityClock].format(now);
    if (clock.textContent !== value) {
      clock.textContent = value;
      clock.classList.remove('time-tick');
      void clock.offsetWidth;
      clock.classList.add('time-tick');
    }
  });
}

updateCityClocks();
window.setInterval(updateCityClocks, 1000);

let selectedPhotoSlot = 0;
let archiveProfile = null;

function archiveText(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || '';
}

function canManageArchivePhotos() {
  return archiveProfile?.role === 'owner';
}

function renderArchivePermissions() {
  albumFrames.forEach((frame) => {
    frame.classList.toggle('owner-locked', !canManageArchivePhotos());
    frame.setAttribute('aria-disabled', String(!canManageArchivePhotos()));
  });
}

async function refreshArchiveProfile() {
  archiveProfile = await window.LoveCloud?.getCurrentProfile?.() || null;
  renderArchivePermissions();
}

function updateArchiveLabels() {
  if (!albumCounter) return;
  const savedCount = [...albumFrames].filter((frame) => frame.classList.contains('has-photo')).length;
  albumCounter.textContent = archiveText('albumCounter').replace('{count}', savedCount);
}

function formatArchiveDate(date) {
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join(' · ');
}

function showArchivePhoto(slot, record) {
  const frame = document.querySelector(`[data-photo-slot="${slot}"]`);
  if (!frame || !record?.src) return;
  const image = frame.querySelector('img');
  image.src = record.src;
  image.hidden = false;
  image.alt = frame.querySelector('.album-placeholder strong')?.textContent || 'Leo and Alex';
  frame.classList.add('has-photo');
  const recordDate = new Date(record.date);
  frame.querySelector('time').textContent = Number.isNaN(recordDate.getTime()) ? record.date : formatArchiveDate(recordDate);
  updateArchiveLabels();
}

function compressArchivePhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const image = new Image();
      image.onerror = reject;
      image.onload = () => {
        const maxSide = 960;
        const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
        canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', .78));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

albumFrames.forEach((frame) => {
  frame.addEventListener('click', async () => {
    await refreshArchiveProfile();
    if (!canManageArchivePhotos()) {
      albumCounter.textContent = archiveText('albumOwnerOnly');
      window.setTimeout(updateArchiveLabels, 3600);
      return;
    }
    selectedPhotoSlot = Number(frame.dataset.photoSlot);
    albumFileInput.value = '';
    albumFileInput.click();
  });
});

albumFileInput?.addEventListener('change', async () => {
  await refreshArchiveProfile();
  if (!canManageArchivePhotos()) {
    albumFileInput.value = '';
    albumCounter.textContent = archiveText('albumOwnerOnly');
    window.setTimeout(updateArchiveLabels, 3600);
    return;
  }
  const file = albumFileInput.files?.[0];
  if (!file) return;
  try {
    const dataUrl = await compressArchivePhoto(file);
    try {
      const record = await window.LoveAlbum.saveFeatured(selectedPhotoSlot, dataUrl, { date: new Date().toISOString() });
      showArchivePhoto(selectedPhotoSlot, record);
    } catch (error) {
      albumCounter.textContent = archiveText('albumStorageError');
      window.setTimeout(updateArchiveLabels, 3600);
    }
  } catch (error) {
    albumCounter.textContent = archiveText('albumStorageError');
    window.setTimeout(updateArchiveLabels, 3600);
  }
});

async function loadFeaturedPhotos() {
  if (!window.LoveAlbum) return;
  await window.LoveAlbum.migrateLegacyPhotos();
  const records = await window.LoveAlbum.getAll();
  albumFrames.forEach((frame) => {
    frame.classList.remove('has-photo');
    const image = frame.querySelector('img');
    image.removeAttribute('src');
    image.hidden = true;
    frame.querySelector('time').textContent = frame.dataset.photoSlot === '0' ? 'SOON' : 'FUTURE';
  });
  records.filter((record) => Number.isInteger(record.featuredSlot)).forEach((record) => showArchivePhoto(record.featuredSlot, record));
  updateArchiveLabels();
}

loadFeaturedPhotos();
refreshArchiveProfile();
window.LoveCloud?.onAuthChange?.((profile) => {
  archiveProfile = profile;
  renderArchivePermissions();
});
window.addEventListener('pageshow', loadFeaturedPhotos);

let curtainTransitionRunning = false;

function clearCurtainArrivalMarker() {
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.get('curtain') !== '1') return;
    url.searchParams.delete('curtain');
    history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
  } catch (error) { /* Keep the current URL if it cannot be normalized. */ }
}

function finishCurtainOpening() {
  document.documentElement.classList.remove('curtain-preload');
  body.classList.remove('curtain-active', 'curtain-opening', 'curtain-closing', 'curtain-arrival');
  prologue.classList.remove('curtain-exit');
  curtainTransitionRunning = false;
}

function waitForCurtainTexture() {
  const texture = new Image();
  texture.src = 'assets/red-curtains-texture.jpg';
  const decoded = typeof texture.decode === 'function'
    ? texture.decode().catch(() => undefined)
    : new Promise((resolve) => {
      texture.onload = resolve;
      texture.onerror = resolve;
    });
  return Promise.race([
    decoded,
    new Promise((resolve) => window.setTimeout(resolve, 1200))
  ]);
}

function waitForCurtainPaint() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  });
}

async function openCurtainAfterArrival() {
  if (!body.classList.contains('curtain-arrival')) return;
  curtainTransitionRunning = true;
  body.classList.add('started');
  body.classList.remove('locked');
  prologue.classList.add('opened');
  await waitForCurtainTexture();
  await waitForCurtainPaint();
  await new Promise((resolve) => window.setTimeout(resolve, 140));
  clearCurtainArrivalMarker();
  document.documentElement.classList.remove('curtain-preload');
  body.classList.remove('curtain-closing');
  body.classList.add('curtain-opening');
  window.setTimeout(finishCurtainOpening, 2480);
}

function runCurtainTransition(onCovered, { exitPrologue = false, reopen = true } = {}) {
  if (curtainTransitionRunning) return;
  curtainTransitionRunning = true;
  if (exitPrologue) prologue.classList.add('curtain-exit');
  body.classList.add('curtain-active');

  requestAnimationFrame(() => {
    requestAnimationFrame(() => body.classList.add('curtain-closing'));
  });

  window.setTimeout(() => {
    onCovered?.();
  }, 1450);

  if (!reopen) return;

  window.setTimeout(() => {
    body.classList.remove('curtain-closing');
    body.classList.add('curtain-opening');
  }, 1780);

  window.setTimeout(() => {
    body.classList.remove('locked');
    finishCurtainOpening();
  }, 4200);
}

function curtainNavigationUrl(href) {
  const url = new URL(href, window.location.href);
  url.searchParams.set('curtain', '1');
  return url.href;
}

openCurtainAfterArrival();

enterButton.addEventListener('click', () => {
  runCurtainTransition(() => {
    body.classList.add('started');
    prologue.classList.add('opened');
    document.querySelector('#beginning').scrollIntoView({ behavior: 'auto' });
  }, { exitPrologue: true });
});

document.querySelectorAll('a[href]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.target && link.target !== '_self') return;
    const rawHref = link.getAttribute('href');
    if (!rawHref || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:') || rawHref.startsWith('javascript:')) return;

    const destination = new URL(link.href, window.location.href);
    const sameDocument = destination.pathname === window.location.pathname && destination.search === window.location.search;
    if (sameDocument && destination.hash === window.location.hash) return;
    event.preventDefault();

    if (sameDocument && destination.hash) {
      runCurtainTransition(() => {
        history.pushState(null, '', destination.hash);
        document.querySelector(destination.hash)?.scrollIntoView({ behavior: 'auto' });
      });
      return;
    }

    runCurtainTransition(() => {
      window.location.assign(curtainNavigationUrl(destination.href));
    }, { exitPrologue: !body.classList.contains('started'), reopen: false });
  });
});

document.addEventListener('mousemove', (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

document.querySelectorAll('button, a').forEach((element) => {
  element.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
  element.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

document.querySelectorAll('.magnetic').forEach((element) => {
  element.addEventListener('mousemove', (event) => {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
  });
  element.addEventListener('mouseleave', () => { element.style.transform = ''; });
});

const revealElements = document.querySelectorAll('[data-reveal]');

const cinematicTextElements = document.querySelectorAll([
  'main h2',
  'main h3',
  'main .eyebrow:not(.opening-salutation)',
  'main .chapter-number',
  'main .translation',
  'main .our-dates',
  'main .memory-date',
  'main .memory-copy > p:last-child',
  'main .memory-signal .signal-city',
  'main .memory-signal .signal-caption',
  'main .union-date',
  'main .portrait-main',
  'main .trait-list > div',
  'main .future-intro',
  'main .wish > span',
  'main .wish-route',
  'main .wish > p',
  'main .archive-heading > p:last-child',
  'main .album-toolbar',
  'main .album-caption',
  'main .archive-entry',
  'main .finale-translation',
  'main .signature'
].join(','));

cinematicTextElements.forEach((element, index) => {
  const isTitle = element.matches('h2, h3, .portrait-main');
  const isMeta = element.matches('.eyebrow, .chapter-number, .memory-date, .wish-route, .signal-city, .signal-caption, .wish > span, .album-caption');
  const direction = index % 2 === 0 ? 'left' : 'right';

  element.classList.add('cinematic-text', `cinematic-from-${direction}`);
  if (isTitle) element.classList.add('cinematic-title');
  else if (isMeta) element.classList.add('cinematic-meta');
  else element.classList.add('cinematic-body');
});

function clamp(value, minimum = 0, maximum = 1) {
  return Math.max(minimum, Math.min(maximum, value));
}

function easeOutQuart(value) {
  const progress = clamp(value);
  return 1 - Math.pow(1 - progress, 4);
}

function getRevealMetric(element, options = {}) {
  const viewportHeight = window.innerHeight || 1;
  const rect = element.getBoundingClientRect();
  const {
    start = 1.02,
    finish = 0.66,
    anchorRatio = 0.2,
    anchorCap = 0.18,
    forceTop = 0.5,
    forceBottom = 0.92
  } = options;
  const anchorOffset = Math.min(Math.max(rect.height, 1) * anchorRatio, viewportHeight * anchorCap);
  const anchor = rect.top + anchorOffset;
  let rawProgress = clamp(((viewportHeight * start) - anchor) / (viewportHeight * (start - finish)));

  // Large headings and panels should finish inside their own chapter, not halfway through the next one.
  if (rect.top < viewportHeight * forceTop || rect.bottom < viewportHeight * forceBottom) {
    rawProgress = 1;
  }
  if (rect.bottom < viewportHeight * 0.08) {
    rawProgress = 1;
  }
  if (rect.top > viewportHeight * 1.14) {
    rawProgress = 0;
  }

  return {
    raw: rawProgress,
    eased: easeOutQuart(rawProgress)
  };
}

function updateRevealProgress() {
  revealElements.forEach((element) => {
    const metric = getRevealMetric(element, {
      start: 1,
      finish: 0.68,
      anchorRatio: 0.18,
      anchorCap: 0.16,
      forceTop: 0.78,
      forceBottom: 0.98
    });
    const pop = Math.sin(metric.raw * Math.PI);

    element.style.setProperty('--reveal-progress', metric.eased.toFixed(3));
    element.style.setProperty('--reveal-pop', pop.toFixed(3));
    element.classList.toggle('is-revealed', metric.raw >= 0.985);
  });
}

function updateCinematicText() {
  cinematicTextElements.forEach((element) => {
    const isTitle = element.classList.contains('cinematic-title');
    const metric = getRevealMetric(element, {
      start: isTitle ? 1.08 : 1.02,
      finish: isTitle ? 0.72 : 0.68,
      anchorRatio: isTitle ? 0.14 : 0.2,
      anchorCap: isTitle ? 0.14 : 0.18,
      forceTop: isTitle ? 0.66 : 0.78,
      forceBottom: isTitle ? 0.98 : 0.98
    });
    const velocity = Math.sin(metric.raw * Math.PI);
    const flare = metric.raw > 0.04 && metric.raw < 0.96 ? velocity : 0;

    element.style.setProperty('--text-progress', metric.eased.toFixed(3));
    element.style.setProperty('--text-velocity', velocity.toFixed(3));
    element.style.setProperty('--text-pop', velocity.toFixed(3));
    element.style.setProperty('--text-flare', flare.toFixed(3));
    element.classList.toggle('is-revealed', metric.raw >= 0.985);
  });
}

function handleScroll() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${(window.scrollY / scrollable) * 100}%`;

  document.querySelectorAll('[data-parallax]').forEach((element) => {
    const speed = Number(element.dataset.parallax);
    const rect = element.getBoundingClientRect();
    const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
    element.style.translate = `0 ${offset}px`;
  });

  updateRevealProgress();
  updateCinematicText();
}

let scrollFrame = 0;
function requestScrollUpdate() {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = 0;
    handleScroll();
  });
}

window.addEventListener('scroll', requestScrollUpdate, { passive: true });
window.addEventListener('resize', requestScrollUpdate);
window.addEventListener('hashchange', () => requestAnimationFrame(handleScroll));
document.fonts?.ready?.then(() => requestAnimationFrame(handleScroll));
handleScroll();

function setupAmbientWorld() {
  if (!ambientWorld || !ambientCanvas) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const chapters = Array.from(document.querySelectorAll('[data-ambient]'));
  const gl = ambientCanvas.getContext('webgl', {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'high-performance'
  });

  const setFallback = () => ambientWorld.classList.add('ambient-fallback');
  if (!gl) {
    setFallback();
    return;
  }

  const vertexSource = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const fragmentSource = `
    precision highp float;

    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_time;
    uniform float u_theme;
    uniform float u_scroll;

    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
        u.y
      );
    }

    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.52;
      mat2 rotate = mat2(0.82, -0.57, 0.57, 0.82);
      for (int i = 0; i < 5; i++) {
        value += amplitude * noise(p);
        p = rotate * p * 2.02 + 9.17;
        amplitude *= 0.48;
      }
      return value;
    }

    float ribbon(vec2 p, float angle, float offset, float width, float phase) {
      vec2 direction = vec2(cos(angle), sin(angle));
      vec2 normal = vec2(-direction.y, direction.x);
      float axis = dot(p, direction);
      float wave = sin(axis * 1.55 + phase) * 0.12 + sin(axis * 3.1 - phase * 0.62) * 0.035;
      float distanceToRibbon = abs(dot(p, normal) - offset - wave);
      return exp(-distanceToRibbon * distanceToRibbon / width);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      vec2 p = uv - 0.5;
      p.x *= u_resolution.x / u_resolution.y;

      vec2 mouse = (u_mouse - 0.5) * vec2(0.12, -0.09);
      float time = u_time * 0.045;
      float theme = smoothstep(0.0, 1.0, u_theme);
      float scrollBreath = sin(u_scroll * 6.28318);

      vec2 fieldP = p + mouse;
      float cloud = fbm(fieldP * 1.12 + vec2(time, -time * 0.62));
      float cloudFine = fbm(fieldP * 2.35 + vec2(-time * 0.48, time * 0.72) + cloud * 0.36);

      float silkA = ribbon(fieldP, 0.42, -0.08 + scrollBreath * 0.018, 0.11, time * 1.8 + cloud * 0.55);
      float silkB = ribbon(fieldP, -0.72, 0.18, 0.16, -time * 1.35 + cloudFine * 0.35);
      float silkC = ribbon(fieldP, 1.22, -0.34, 0.24, time * 0.85);
      float silk = silkA * 0.52 + silkB * 0.32 + silkC * 0.2;

      float leftWarm = exp(-dot(p - vec2(-0.55, 0.34), p - vec2(-0.55, 0.34)) * 1.55);
      float rightWine = exp(-dot(p - vec2(0.55, -0.38), p - vec2(0.55, -0.38)) * 1.15);
      float centerGlow = exp(-dot(p + mouse * 0.6, p + mouse * 0.6) * 1.8);

      vec3 paperBase = vec3(0.925, 0.902, 0.855);
      vec3 paperShadow = vec3(0.79, 0.74, 0.67);
      vec3 paperGold = vec3(0.92, 0.72, 0.43);
      vec3 paperWine = vec3(0.34, 0.10, 0.15);
      vec3 lightScene = paperBase;
      lightScene -= paperShadow * (0.04 + 0.055 * cloudFine);
      lightScene += paperGold * (0.078 * leftWarm + 0.068 * silk);
      lightScene += paperWine * (0.046 * rightWine);
      lightScene += vec3(1.0, 0.94, 0.84) * centerGlow * 0.024;

      vec3 nightBase = vec3(0.024, 0.022, 0.024);
      vec3 nightWine = vec3(0.21, 0.045, 0.075);
      vec3 nightGold = vec3(0.75, 0.55, 0.28);
      vec3 nightBlue = vec3(0.045, 0.075, 0.082);
      vec3 darkScene = nightBase;
      darkScene += nightWine * (0.23 * rightWine + 0.14 * cloud);
      darkScene += nightGold * (0.105 * silk + 0.07 * leftWarm);
      darkScene += nightBlue * (0.115 * cloudFine);
      darkScene -= vec3(0.015, 0.012, 0.014) * length(p);

      vec3 color = mix(lightScene, darkScene, theme);

      vec2 dustGrid = uv * vec2(95.0, 58.0);
      vec2 dustId = floor(dustGrid);
      vec2 dustUv = fract(dustGrid) - 0.5;
      float dustRandom = hash(dustId);
      float dustShape = smoothstep(0.055, 0.0, length(dustUv));
      float dustGate = step(0.986, dustRandom);
      float dustTwinkle = 0.35 + 0.65 * smoothstep(-0.3, 1.0, sin(u_time * (0.22 + dustRandom * 0.42) + dustRandom * 41.0));
      vec3 dustColor = mix(vec3(0.52, 0.22, 0.26), vec3(1.0, 0.82, 0.46), dustRandom);
      color += dustColor * dustShape * dustGate * dustTwinkle * mix(0.018, 0.06, theme);

      float vignette = smoothstep(0.96, 0.22, length(p * vec2(0.9, 1.05)));
      color *= mix(0.88, 1.05, vignette);
      color += (hash(gl_FragCoord.xy + u_time) - 0.5) / 255.0;

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  function compileShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertexShader || !fragmentShader) {
    setFallback();
    return;
  }

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn(gl.getProgramInfoLog(program));
    setFallback();
    return;
  }

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

  const positionLocation = gl.getAttribLocation(program, 'a_position');
  const uniforms = {
    resolution: gl.getUniformLocation(program, 'u_resolution'),
    mouse: gl.getUniformLocation(program, 'u_mouse'),
    time: gl.getUniformLocation(program, 'u_time'),
    theme: gl.getUniformLocation(program, 'u_theme'),
    scroll: gl.getUniformLocation(program, 'u_scroll')
  };

  let width = 0;
  let height = 0;
  let targetTheme = 0;
  let currentTheme = 0;
  let targetMouseX = 0.5;
  let targetMouseY = 0.5;
  let mouseX = 0.5;
  let mouseY = 0.5;
  let scrollProgress = 0;
  let lastTime = performance.now();
  let frameId = 0;

  function resize() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.55);
    const nextWidth = Math.max(1, Math.floor(window.innerWidth * pixelRatio));
    const nextHeight = Math.max(1, Math.floor(window.innerHeight * pixelRatio));
    if (nextWidth === width && nextHeight === height) return;
    width = nextWidth;
    height = nextHeight;
    ambientCanvas.width = width;
    ambientCanvas.height = height;
    gl.viewport(0, 0, width, height);
  }

  function updateAmbientState() {
    const center = window.innerHeight * 0.5;
    let closestDistance = Infinity;
    let closestChapter = chapters[0];

    chapters.forEach((chapter) => {
      const rect = chapter.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const distance = Math.abs(rect.top + rect.height * 0.5 - center);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestChapter = chapter;
      }
    });

    targetTheme = closestChapter?.dataset.ambient === 'dark' ? 1 : 0;
    body.dataset.ambient = targetTheme ? 'dark' : 'light';

    const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    scrollProgress = clamp(window.scrollY / scrollable);

    ambientWorld.style.setProperty('--ambient-x', `${(targetMouseX * 100).toFixed(1)}%`);
    ambientWorld.style.setProperty('--ambient-y', `${(targetMouseY * 100).toFixed(1)}%`);
    ambientWorld.style.setProperty('--ambient-shift-x', `${((targetMouseX - 0.5) * -10).toFixed(2)}px`);
    ambientWorld.style.setProperty('--ambient-shift-y', `${((targetMouseY - 0.5) * -7).toFixed(2)}px`);
  }

  function render(now) {
    const delta = Math.min(0.08, (now - lastTime) / 1000 || 0.016);
    lastTime = now;
    resize();

    const easing = reduceMotion.matches ? 1 : 1 - Math.exp(-delta * 1.35);
    currentTheme += (targetTheme - currentTheme) * easing;
    mouseX += (targetMouseX - mouseX) * (reduceMotion.matches ? 1 : 1 - Math.exp(-delta * 3.2));
    mouseY += (targetMouseY - mouseY) * (reduceMotion.matches ? 1 : 1 - Math.exp(-delta * 3.2));

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.uniform2f(uniforms.resolution, width, height);
    gl.uniform2f(uniforms.mouse, mouseX, mouseY);
    gl.uniform1f(uniforms.time, reduceMotion.matches ? 24 : now / 1000);
    gl.uniform1f(uniforms.theme, currentTheme);
    gl.uniform1f(uniforms.scroll, scrollProgress);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    if (!reduceMotion.matches && !document.hidden) {
      frameId = requestAnimationFrame(render);
    } else {
      frameId = 0;
    }
  }

  function start() {
    if (!frameId) {
      lastTime = performance.now();
      frameId = requestAnimationFrame(render);
    }
  }

  window.addEventListener('pointermove', (event) => {
    targetMouseX = clamp(event.clientX / Math.max(1, window.innerWidth));
    targetMouseY = clamp(event.clientY / Math.max(1, window.innerHeight));
    updateAmbientState();
    start();
  }, { passive: true });

  window.addEventListener('scroll', () => {
    updateAmbientState();
    start();
  }, { passive: true });
  window.addEventListener('resize', () => {
    resize();
    updateAmbientState();
    start();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && frameId) {
      cancelAnimationFrame(frameId);
      frameId = 0;
    } else {
      updateAmbientState();
      start();
    }
  });
  reduceMotion.addEventListener?.('change', () => {
    updateAmbientState();
    start();
  });

  updateAmbientState();
  resize();
  start();
}

setupAmbientWorld();

function setupSectionAtmospheres() {
  const sections = Array.from(document.querySelectorAll('.chapter'));
  if (!sections.length) return;

  let pointerX = 0.72;
  let pointerY = 0.28;
  let frameId = 0;

  const update = () => {
    frameId = 0;
    const viewportHeight = Math.max(1, window.innerHeight);
    const viewportWidth = Math.max(1, window.innerWidth);
    const screenX = pointerX * viewportWidth;
    const screenY = pointerY * viewportHeight;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.bottom < -240 || rect.top > viewportHeight + 240) return;

      const localX = clamp((screenX - rect.left) / Math.max(1, rect.width));
      const localY = clamp((screenY - rect.top) / Math.max(1, rect.height));
      const centerDistance = Math.abs((rect.top + rect.height / 2) - viewportHeight / 2);
      const focus = clamp(1 - centerDistance / (viewportHeight * 0.9));
      const scroll = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height));

      section.style.setProperty('--section-mx', `${(localX * 100).toFixed(2)}%`);
      section.style.setProperty('--section-my', `${(localY * 100).toFixed(2)}%`);
      section.style.setProperty('--section-focus', focus.toFixed(3));
      section.style.setProperty('--section-scroll', scroll.toFixed(3));
    });
  };

  const requestUpdate = () => {
    if (!frameId) frameId = requestAnimationFrame(update);
  };

  window.addEventListener('pointermove', (event) => {
    pointerX = clamp(event.clientX / Math.max(1, window.innerWidth));
    pointerY = clamp(event.clientY / Math.max(1, window.innerHeight));
    requestUpdate();
  }, { passive: true });
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  update();
}

setupSectionAtmospheres();

const clickContext = clickCanvas.getContext('2d');
const clickParticles = [];
let clickAnimationFrame = 0;

function resizeClickCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  clickCanvas.width = window.innerWidth * ratio;
  clickCanvas.height = window.innerHeight * ratio;
  clickContext.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function animateClickParticles() {
  clickContext.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let index = clickParticles.length - 1; index >= 0; index -= 1) {
    const particle = clickParticles[index];
    particle.age += 1;
    const progress = particle.age / particle.life;

    if (progress >= 1) {
      clickParticles.splice(index, 1);
      continue;
    }

    const forming = Math.min(1, progress / 0.28);
    const scatter = Math.max(0, (progress - 0.32) / 0.68);
    const ease = 1 - Math.pow(1 - forming, 3);
    const x = particle.originX + particle.targetX * ease + particle.velocityX * scatter * 22;
    const y = particle.originY + particle.targetY * ease + particle.velocityY * scatter * 22 - scatter * 8;
    const alpha = progress < 0.55 ? 0.85 : (1 - progress) / 0.45 * 0.85;

    clickContext.beginPath();
    clickContext.arc(x, y, particle.radius * (1 - scatter * 0.35), 0, Math.PI * 2);
    clickContext.fillStyle = particle.color.replace('ALPHA', alpha.toFixed(3));
    clickContext.shadowColor = 'rgba(189,167,125,.55)';
    clickContext.shadowBlur = 7;
    clickContext.fill();
  }

  clickContext.shadowBlur = 0;
  if (clickParticles.length) clickAnimationFrame = requestAnimationFrame(animateClickParticles);
  else clickAnimationFrame = 0;
}

function createClickHeart(x, y) {
  const points = 24;
  for (let index = 0; index < points; index += 1) {
    const angle = (Math.PI * 2 * index) / points;
    const heartX = 16 * Math.pow(Math.sin(angle), 3);
    const heartY = -(13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
    const length = Math.hypot(heartX, heartY) || 1;
    clickParticles.push({
      originX: x,
      originY: y,
      targetX: heartX * 0.72,
      targetY: heartY * 0.72,
      velocityX: heartX / length + (Math.random() - 0.5) * 0.25,
      velocityY: heartY / length + (Math.random() - 0.5) * 0.25,
      radius: index % 4 === 0 ? 1.7 : 1.05,
      color: index % 5 === 0 ? 'rgba(112,42,58,ALPHA)' : 'rgba(213,190,143,ALPHA)',
      age: 0,
      life: 54 + Math.random() * 12
    });
  }

  if (!clickAnimationFrame) clickAnimationFrame = requestAnimationFrame(animateClickParticles);
}

resizeClickCanvas();
window.addEventListener('resize', resizeClickCanvas);
window.addEventListener('pointerdown', (event) => {
  if (event.button !== undefined && event.button !== 0) return;
  createClickHeart(event.clientX, event.clientY);
}, { passive: true });

if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const svgNamespace = 'http://www.w3.org/2000/svg';
  let liquidBorderId = 0;
  let lastLiquidPointerMove = 0;
  window.addEventListener('pointermove', () => { lastLiquidPointerMove = performance.now(); }, { passive: true, capture: true });

  function installLiquidBorder(element, options = {}) {
    const svg = document.createElementNS(svgNamespace, 'svg');
    const definitions = document.createElementNS(svgNamespace, 'defs');
    const goldGradient = document.createElementNS(svgNamespace, 'radialGradient');
    const fillPath = document.createElementNS(svgNamespace, 'path');
    const glowPath = document.createElementNS(svgNamespace, 'path');
    const wavePath = document.createElementNS(svgNamespace, 'path');
    const highlightPath = document.createElementNS(svgNamespace, 'path');
    const sparkGroup = document.createElementNS(svgNamespace, 'g');
    const sparks = Array.from({ length: 10 }, (_, index) => {
      const spark = document.createElementNS(svgNamespace, 'circle');
      spark.classList.add('liquid-border-spark');
      spark.setAttribute('r', String(.75 + (index % 3) * .28));
      sparkGroup.append(spark);
      return spark;
    });

    svg.classList.add('liquid-border');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('preserveAspectRatio', 'none');
    const gradientId = `liquid-gold-${liquidBorderId += 1}`;
    goldGradient.id = gradientId;
    goldGradient.setAttribute('gradientUnits', 'userSpaceOnUse');
    [['0%', '#fff8dc', '.72'], ['28%', '#f0c96d', '.58'], ['66%', '#bd7a28', '.24'], ['100%', '#6b350d', '0']].forEach(([offset, color, opacity]) => {
      const stop = document.createElementNS(svgNamespace, 'stop');
      stop.setAttribute('offset', offset);
      stop.setAttribute('stop-color', color);
      stop.setAttribute('stop-opacity', opacity);
      goldGradient.append(stop);
    });
    definitions.append(goldGradient);
    fillPath.classList.add('liquid-border-fill');
    fillPath.style.fill = `url(#${gradientId})`;
    glowPath.classList.add('liquid-border-glow');
    wavePath.classList.add('liquid-border-wave');
    highlightPath.classList.add('liquid-border-highlight');
    svg.append(definitions, fillPath, glowPath, wavePath, highlightPath, sparkGroup);
    element.append(svg);

    const state = {
      width: 1,
      height: 1,
      x: .5,
      y: .5,
      targetX: .5,
      targetY: .5,
      strength: 0,
      targetStrength: 0,
      phase: 0,
      perimeter: 4,
      center: 0,
      targetCenter: 0,
      active: false,
      frame: 0
    };

    const updateSize = () => {
      state.width = Math.max(1, element.clientWidth);
      state.height = Math.max(1, element.clientHeight);
      svg.setAttribute('viewBox', `0 0 ${state.width} ${state.height}`);
      svg.setAttribute('width', String(state.width));
      svg.setAttribute('height', String(state.height));
      state.perimeter = 2 * (state.width + state.height);
      state.center = normalizePerimeter(state.center);
      state.targetCenter = normalizePerimeter(state.targetCenter);
    };

    function normalizePerimeter(value) {
      const perimeter = Math.max(1, state.perimeter);
      return ((value % perimeter) + perimeter) % perimeter;
    }

    const perimeterPoint = (value) => {
      const position = normalizePerimeter(value);
      if (position <= state.width) return { x: position, y: 0, nx: 0, ny: 1 };
      if (position <= state.width + state.height) return { x: state.width, y: position - state.width, nx: -1, ny: 0 };
      if (position <= state.width * 2 + state.height) return { x: state.width - (position - state.width - state.height), y: state.height, nx: 0, ny: -1 };
      return { x: 0, y: state.height - (position - state.width * 2 - state.height), nx: 1, ny: 0 };
    };

    const smoothPerimeterPoint = (value) => {
      const point = perimeterPoint(value);
      const radius = Math.min(
        Math.min(state.width, state.height) * .2,
        Math.max(52, (options.depth || 58) * 1.38)
      );
      const corners = [
        { position: 0, cx: radius, cy: radius, startAngle: Math.PI },
        { position: state.width, cx: state.width - radius, cy: radius, startAngle: Math.PI * 1.5 },
        { position: state.width + state.height, cx: state.width - radius, cy: state.height - radius, startAngle: 0 },
        { position: state.width * 2 + state.height, cx: radius, cy: state.height - radius, startAngle: Math.PI * .5 }
      ];

      for (const corner of corners) {
        const distance = ((normalizePerimeter(value) - corner.position + state.perimeter * 1.5) % state.perimeter) - state.perimeter / 2;
        if (Math.abs(distance) > radius) continue;
        const progress = (distance + radius) / (radius * 2);
        const angle = corner.startAngle + progress * Math.PI * .5;
        const x = corner.cx + Math.cos(angle) * radius;
        const y = corner.cy + Math.sin(angle) * radius;
        return {
          x,
          y,
          rawX: point.x,
          rawY: point.y,
          nx: (corner.cx - x) / radius,
          ny: (corner.cy - y) / radius
        };
      }

      return { ...point, rawX: point.x, rawY: point.y };
    };

    const smoothPath = (points) => {
      if (points.length < 2) return '';
      let path = `M${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;
      for (let index = 1; index < points.length - 1; index += 1) {
        const point = points[index];
        const next = points[index + 1];
        const middleX = (point.x + next.x) / 2;
        const middleY = (point.y + next.y) / 2;
        path += ` Q${point.x.toFixed(2)} ${point.y.toFixed(2)} ${middleX.toFixed(2)} ${middleY.toFixed(2)}`;
      }
      const last = points[points.length - 1];
      path += ` L${last.x.toFixed(2)} ${last.y.toFixed(2)}`;
      return path;
    };

    const buildLiquidPatch = () => {
      const halfSpan = Math.min(options.span || 150, state.perimeter * .19);
      const maximumDepth = Math.min(options.depth || 58, state.width * .15, state.height * .15, 78);
      const steps = 84;
      const wavePoints = [];
      const borderPoints = [];
      const samples = [];

      for (let index = 0; index <= steps; index += 1) {
        const progress = index / steps;
        const signed = progress * 2 - 1;
        const perimeterPosition = state.center + signed * halfSpan;
        const border = smoothPerimeterPoint(perimeterPosition);
        const envelope = Math.pow(Math.cos(signed * Math.PI / 2), 2);
        const broadWave = Math.sin(signed * 5.6 - state.phase * .72) * .045;
        const fineWave = Math.sin(signed * 12.5 + state.phase) * .016;
        const depth = maximumDepth * state.strength * envelope * (.84 + broadWave + fineWave);
        const wave = { x: border.x + border.nx * depth, y: border.y + border.ny * depth };
        wavePoints.push(wave);
        borderPoints.push({ x: border.x, y: border.y });
        samples.push({ border, wave, depth, signed });
      }

      const wave = smoothPath(wavePoints);
      let fill = wave;
      for (let index = borderPoints.length - 1; index >= 0; index -= 1) {
        fill += ` L${borderPoints[index].x.toFixed(2)} ${borderPoints[index].y.toFixed(2)}`;
      }
      fill += ' Z';
      return { wave, fill, samples, halfSpan };
    };

    const placeSparks = (samples) => {
      sparks.forEach((spark, index) => {
        const progress = (index + .7) / (sparks.length + .4);
        const sampleIndex = Math.round(progress * (samples.length - 1));
        const sample = samples[sampleIndex];
        const inwardRatio = .18 + ((index * 37) % 58) / 100;
        const tangentX = -sample.border.ny;
        const tangentY = sample.border.nx;
        const drift = Math.sin(state.phase * .52 + index * 1.8) * 3.5;
        const x = sample.border.x + sample.border.nx * sample.depth * inwardRatio + tangentX * drift;
        const y = sample.border.y + sample.border.ny * sample.depth * inwardRatio + tangentY * drift;
        const flicker = .18 + .82 * Math.pow((Math.sin(state.phase * 1.45 + index * 2.08) + 1) / 2, 2);
        spark.setAttribute('cx', x.toFixed(2));
        spark.setAttribute('cy', y.toFixed(2));
        spark.style.opacity = String(state.strength * flicker * .72);
      });
    };

    const render = () => {
      state.x += (state.targetX - state.x) * .14;
      state.y += (state.targetY - state.y) * .14;
      const perimeterDelta = ((state.targetCenter - state.center + state.perimeter * 1.5) % state.perimeter) - state.perimeter / 2;
      state.center = normalizePerimeter(state.center + perimeterDelta * .14);
      state.strength += (state.targetStrength - state.strength) * .105;
      state.phase += .075;

      element.style.setProperty('--mx', `${(state.x * 100).toFixed(2)}%`);
      element.style.setProperty('--my', `${(state.y * 100).toFixed(2)}%`);
      element.style.setProperty('--signal-x', `${((state.x - .5) * 12).toFixed(2)}px`);
      element.style.setProperty('--signal-y', `${((state.y - .5) * 9).toFixed(2)}px`);
      element.style.setProperty('--liquid-strength', state.strength.toFixed(3));

      const patch = buildLiquidPatch();
      goldGradient.setAttribute('cx', String(state.x * state.width));
      goldGradient.setAttribute('cy', String(state.y * state.height));
      goldGradient.setAttribute('r', String(Math.max(90, patch.halfSpan * 1.15)));
      fillPath.setAttribute('d', patch.fill);
      glowPath.setAttribute('d', patch.wave);
      wavePath.setAttribute('d', patch.wave);
      highlightPath.setAttribute('d', patch.wave);
      placeSparks(patch.samples);

      if (options.tilt) {
        const amount = (options.tilt || .7) * state.strength;
        const rotateY = (state.x - .5) * amount;
        const rotateX = (.5 - state.y) * amount;
        element.style.transform = `perspective(1400px) rotateX(${rotateX.toFixed(3)}deg) rotateY(${rotateY.toFixed(3)}deg) translateZ(1px)`;
      }

      if (state.active || state.strength > .002 || Math.abs(state.targetStrength - state.strength) > .002) {
        state.frame = requestAnimationFrame(render);
      } else {
        state.frame = 0;
        element.style.setProperty('--liquid-strength', '0');
        sparks.forEach((spark) => { spark.style.opacity = '0'; });
        if (options.tilt) element.style.transform = '';
      }
    };

    const updatePointer = (event) => {
      const rect = element.getBoundingClientRect();
      state.targetX = clamp((event.clientX - rect.left) / rect.width);
      state.targetY = clamp((event.clientY - rect.top) / rect.height);
      const pixelX = state.targetX * rect.width;
      const pixelY = state.targetY * rect.height;
      const distances = {
        top: pixelY,
        right: rect.width - pixelX,
        bottom: rect.height - pixelY,
        left: pixelX
      };
      const edge = Object.keys(distances).reduce((closest, candidate) => distances[candidate] < distances[closest] ? candidate : closest, 'top');
      if (edge === 'top') state.targetCenter = pixelX;
      else if (edge === 'right') state.targetCenter = state.width + pixelY;
      else if (edge === 'bottom') state.targetCenter = state.width + state.height + (state.width - pixelX);
      else state.targetCenter = state.width * 2 + state.height + (state.height - pixelY);
      state.targetCenter = normalizePerimeter(state.targetCenter);
      state.targetStrength = clamp(1 - distances[edge] / (options.proximity || 150));
    };

    element.addEventListener('pointerenter', (event) => {
      updateSize();
      if (performance.now() - lastLiquidPointerMove > 140) return;
      state.active = true;
      element.classList.add('light-active');
      updatePointer(event);
      if (!state.frame) state.frame = requestAnimationFrame(render);
    });
    element.addEventListener('pointermove', (event) => {
      state.active = true;
      element.classList.add('light-active');
      updatePointer(event);
      if (!state.frame) state.frame = requestAnimationFrame(render);
    });
    element.addEventListener('pointerleave', () => {
      state.active = false;
      state.targetStrength = 0;
      element.classList.remove('light-active');
      if (!state.frame) state.frame = requestAnimationFrame(render);
    });

    updateSize();
    fillPath.setAttribute('d', 'M0 0 Z');
    glowPath.setAttribute('d', 'M0 0');
    wavePath.setAttribute('d', 'M0 0');
    highlightPath.setAttribute('d', 'M0 0');
    requestAnimationFrame(() => requestAnimationFrame(updateSize));
    window.addEventListener('load', updateSize, { once: true });
    if ('ResizeObserver' in window) new ResizeObserver(updateSize).observe(element);
  }

  document.querySelectorAll('.memory-visual').forEach((card) => installLiquidBorder(card, { depth: 38, proximity: 170, span: 150, tilt: .65 }));
  document.querySelectorAll('.wish').forEach((card) => installLiquidBorder(card, { depth: 22, proximity: 105, span: 90 }));
  document.querySelectorAll('.album-photo').forEach((card) => installLiquidBorder(card, { depth: 28, proximity: 118, span: 102 }));
}

let catTimer;
let catAudioContext;
const catWords = ['Miau!', 'Meow!', '喵~', 'Mrrp!'];

function playCatMeow() {
  catAudioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  const now = catAudioContext.currentTime;
  const output = catAudioContext.createGain();
  const oscillator = catAudioContext.createOscillator();
  const vibrato = catAudioContext.createOscillator();
  const vibratoGain = catAudioContext.createGain();
  oscillator.type = 'triangle';
  oscillator.frequency.setValueAtTime(720, now);
  oscillator.frequency.exponentialRampToValueAtTime(440, now + .16);
  oscillator.frequency.exponentialRampToValueAtTime(610, now + .3);
  oscillator.frequency.exponentialRampToValueAtTime(260, now + .62);
  vibrato.frequency.value = 18;
  vibratoGain.gain.value = 22;
  vibrato.connect(vibratoGain);
  vibratoGain.connect(oscillator.frequency);
  output.gain.setValueAtTime(.0001, now);
  output.gain.exponentialRampToValueAtTime(.13, now + .04);
  output.gain.exponentialRampToValueAtTime(.0001, now + .68);
  oscillator.connect(output);
  output.connect(catAudioContext.destination);
  oscillator.start(now); vibrato.start(now);
  oscillator.stop(now + .7); vibrato.stop(now + .7);
}

function showCatMeow() {
  catBubble.textContent = catWords[Math.floor(Math.random() * catWords.length)];
  loveCat.classList.remove('meowing');
  void loveCat.offsetWidth;
  loveCat.classList.add('meowing');
  playCatMeow();
}

function scheduleCatMove() {
  window.clearTimeout(catTimer);
  catTimer = window.setTimeout(() => {
    if (!body.classList.contains('started')) return scheduleCatMove();
    const current = Number.parseFloat(getComputedStyle(loveCat).getPropertyValue('--cat-x')) || 28;
    const target = 22 + Math.random() * Math.max(30, window.innerWidth - 120);
    const distance = Math.abs(target - current);
    loveCat.classList.toggle('facing-left', target < current);
    loveCat.classList.remove('stretching');
    loveCat.classList.add('walking');
    loveCat.style.setProperty('--cat-duration', `${Math.max(2.2, Math.min(6.5, distance / 95))}s`);
    loveCat.style.setProperty('--cat-x', `${target}px`);
    window.setTimeout(() => {
      loveCat.classList.remove('walking');
      if (Math.random() > .55) loveCat.classList.add('stretching');
    }, Math.max(2200, Math.min(6500, distance / 95 * 1000)));
    scheduleCatMove();
  }, 3500 + Math.random() * 4500);
}

loveCat.addEventListener('click', showCatMeow);
scheduleCatMove();

function setupStarCanvas(canvas, count, colored = false) {
  const context = canvas.getContext('2d');
  let particles = [];

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.2 + 0.2,
      speed: Math.random() * 0.12 + 0.03,
      alpha: Math.random() * 0.6 + 0.15,
      color: colored && Math.random() > 0.6 ? '#bda77d' : '#eee9df'
    }));
  }

  function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((particle) => {
      particle.y -= particle.speed;
      if (particle.y < -4) particle.y = window.innerHeight + 4;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = colored ? particle.color : `rgba(238,233,223,${particle.alpha})`;
      context.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
}

setupStarCanvas(document.querySelector('#stars'), 95);
setupStarCanvas(document.querySelector('#celebration'), 180, true);

yesButton.addEventListener('click', () => {
  loveReveal.classList.add('visible');
  loveReveal.setAttribute('aria-hidden', 'false');
  body.classList.add('locked');
});

closeReveal.addEventListener('click', () => {
  loveReveal.classList.remove('visible');
  loveReveal.setAttribute('aria-hidden', 'true');
  body.classList.remove('locked');
});
