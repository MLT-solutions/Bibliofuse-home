const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'locales');

// Translations for redesign.home section - keyed by language code
const translations = {
  es: {
    seoTitle: "BiblioFuse - Lector de eBooks, Gestor de Biblioteca y Herramientas de Compresión",
    seoDesc: "BiblioFuse es un ecosistema privado de libros electrónicos para leer, organizar, transmitir, comprimir y fusionar tu biblioteca personal en iPhone, iPad, Mac, Android y la web.",
    version: "Versión 2.0.1 — nativa en iPhone, iPad y Mac",
    titleA: "Tu biblioteca,",
    titleB: "lee a tu manera.",
    desc: "BiblioFuse es un lector y gestor de biblioteca nativo para colecciones personales de ebooks, cómics y documentos en iPhone, iPad y Mac.",
    warningTitle: "Descarga solo de fuentes oficiales.",
    warningBody: "BiblioFuse se distribuye exclusivamente a través de Apple App Store, Google Play Store y Microsoft Store. Nunca descargues de sitios web no oficiales.",
    chipA: "Universal · iCloud",
    chipB: "iPhone · iPad · Mac",
    chipC: "TTS · auto-desplazamiento",
    chipD: "Lectura manos libres",
    reads: "Lee"
  },
  fr: {
    seoTitle: "BiblioFuse — Lecteur d'eBooks, Gestionnaire de Bibliothèque et Outils de Compression",
    seoDesc: "BiblioFuse est un écosystème privé de livres électroniques pour lire, organiser, diffuser, compresser et fusionner votre bibliothèque personnelle sur iPhone, iPad, Mac, Android et le web.",
    version: "Version 2.0.1 — native sur iPhone, iPad et Mac",
    titleA: "Votre bibliothèque,",
    titleB: "lisez à votre façon.",
    desc: "BiblioFuse est un lecteur et gestionnaire de bibliothèque natif pour vos collections personnelles d'ebooks, de BD et de documents sur iPhone, iPad et Mac.",
    warningTitle: "Téléchargez uniquement depuis les sources officielles.",
    warningBody: "BiblioFuse est distribué exclusivement via l'Apple App Store, le Google Play Store et le Microsoft Store. Ne téléchargez jamais depuis des sites non officiels.",
    chipA: "Universel · iCloud",
    chipB: "iPhone · iPad · Mac",
    chipC: "TTS · défilement automatique",
    chipD: "Lecture mains libres",
    reads: "Lit"
  },
  nl: {
    seoTitle: "BiblioFuse — E-book Lezer, Bibliotheekbeheer & Compressietools",
    seoDesc: "BiblioFuse is een privé e-book ecosysteem voor het lezen, organiseren, streamen, comprimeren en samenvoegen van je persoonlijke bibliotheek op iPhone, iPad, Mac, Android en het web.",
    version: "Versie 2.0.1 — native op iPhone, iPad en Mac",
    titleA: "Jouw bibliotheek,",
    titleB: "lees op jouw manier.",
    desc: "BiblioFuse is een native lezer en bibliotheekbeheerder voor persoonlijke ebook-, strip- en documentcollecties op iPhone, iPad en Mac.",
    warningTitle: "Download alleen van officiële bronnen.",
    warningBody: "BiblioFuse wordt uitsluitend gedistribueerd via de Apple App Store, Google Play Store en Microsoft Store. Download nooit van onofficiële websites.",
    chipA: "Universeel · iCloud",
    chipB: "iPhone · iPad · Mac",
    chipC: "TTS · auto-scroll",
    chipD: "Handsfree lezen",
    reads: "Leest"
  },
  pt: {
    seoTitle: "BiblioFuse — Leitor de E-books, Gerenciador de Biblioteca e Ferramentas de Compressão",
    seoDesc: "BiblioFuse é um ecossistema privado de e-books para ler, organizar, transmitir, comprimir e mesclar sua biblioteca pessoal no iPhone, iPad, Mac, Android e na web.",
    version: "Versão 2.0.1 — nativa no iPhone, iPad e Mac",
    titleA: "Sua biblioteca,",
    titleB: "leia do seu jeito.",
    desc: "BiblioFuse é um leitor e gerenciador de biblioteca nativo para coleções pessoais de ebooks, quadrinhos e documentos no iPhone, iPad e Mac.",
    warningTitle: "Baixe apenas de fontes oficiais.",
    warningBody: "O BiblioFuse é distribuído exclusivamente pela Apple App Store, Google Play Store e Microsoft Store. Nunca baixe de sites não oficiais.",
    chipA: "Universal · iCloud",
    chipB: "iPhone · iPad · Mac",
    chipC: "TTS · rolagem automática",
    chipD: "Leitura mãos livres",
    reads: "Lê"
  },
  ru: {
    seoTitle: "BiblioFuse — Читалка электронных книг, Менеджер Библиотеки и Инструменты Сжатия",
    seoDesc: "BiblioFuse — это приватная экосистема электронных книг для чтения, организации, потоковой передачи, сжатия и объединения вашей личной библиотеки на iPhone, iPad, Mac, Android и в вебе.",
    version: "Версия 2.0.1 — нативно на iPhone, iPad и Mac",
    titleA: "Ваша библиотека,",
    titleB: "читайте по-своему.",
    desc: "BiblioFuse — это нативный ридер и менеджер библиотеки для личных коллекций электронных книг, комиксов и документов на iPhone, iPad и Mac.",
    warningTitle: "Скачивайте только из официальных источников.",
    warningBody: "BiblioFuse распространяется исключительно через Apple App Store, Google Play Store и Microsoft Store. Никогда не скачивайте с неофициальных сайтов.",
    chipA: "Универсальный · iCloud",
    chipB: "iPhone · iPad · Mac",
    chipC: "TTS · автопрокрутка",
    chipD: "Чтение без рук",
    reads: "Читает"
  },
  zh: {
    seoTitle: "BiblioFuse — 电子书阅读器、图书馆管理器与压缩工具",
    seoDesc: "BiblioFuse 是一个私密的电子书生态系统，可在 iPhone、iPad、Mac、Android 和网页上阅读、整理、串流、压缩和合并您的个人图书馆。",
    version: "版本 2.0.1 — iPhone、iPad、Mac 原生应用",
    titleA: "你的图书馆，",
    titleB: "随心阅读。",
    desc: "BiblioFuse 是一款原生阅读器和图书馆管理器，用于管理 iPhone、iPad 和 Mac 上的个人电子书、漫画和文档收藏。",
    warningTitle: "请仅从官方渠道下载。",
    warningBody: "BiblioFuse 仅通过 Apple App Store、Google Play Store 和 Microsoft Store 分发。切勿从非官方网站下载。",
    chipA: "通用 · iCloud",
    chipB: "iPhone · iPad · Mac",
    chipC: "TTS · 自动滚动",
    chipD: "免提阅读",
    reads: "阅读"
  },
  ja: {
    seoTitle: "BiblioFuse — 電子書籍リーダー、ライブラリ管理、圧縮ツール",
    seoDesc: "BiblioFuseは、iPhone、iPad、Mac、Android、Web上で個人のライブラリを読書、整理、ストリーミング、圧縮、結合するためのプライベートな電子書籍エコシステムです。",
    version: "バージョン 2.0.1 — iPhone、iPad、Macネイティブ対応",
    titleA: "あなたのライブラリ、",
    titleB: "あなたの読み方で。",
    desc: "BiblioFuseは、iPhone、iPad、Mac上の個人の電子書籍、コミック、ドキュメントコレクションのためのネイティブリーダー兼ライブラリマネージャーです。",
    warningTitle: "公式ソースからのみダウンロードしてください。",
    warningBody: "BiblioFuseはApple App Store、Google Play Store、Microsoft Storeを通じてのみ配布されています。非公式ウェブサイトからは絶対にダウンロードしないでください。",
    chipA: "ユニバーサル · iCloud",
    chipB: "iPhone · iPad · Mac",
    chipC: "TTS · 自動スクロール",
    chipD: "ハンズフリー読書",
    reads: "読む"
  },
  ko: {
    seoTitle: "BiblioFuse — 전자책 리더, 라이브러리 관리자 및 압축 도구",
    seoDesc: "BiblioFuse는 iPhone, iPad, Mac, Android 및 웹에서 개인 라이브러리를 읽고, 정리하고, 스트리밍하고, 압축하고, 병합하기 위한 비공개 전자책 생태계입니다.",
    version: "버전 2.0.1 — iPhone, iPad, Mac 네이티브",
    titleA: "당신의 라이브러리,",
    titleB: "당신의 방식으로 읽으세요.",
    desc: "BiblioFuse는 iPhone, iPad, Mac에서 개인 전자책, 만화, 문서 컬렉션을 위한 네이티브 리더 및 라이브러리 관리자입니다.",
    warningTitle: "공식 출처에서만 다운로드하세요.",
    warningBody: "BiblioFuse는 Apple App Store, Google Play Store, Microsoft Store를 통해서만 배포됩니다. 비공식 웹사이트에서 절대 다운로드하지 마세요.",
    chipA: "유니버설 · iCloud",
    chipB: "iPhone · iPad · Mac",
    chipC: "TTS · 자동 스크롤",
    chipD: "핸즈프리 읽기",
    reads: "읽기"
  },
  id: {
    seoTitle: "BiblioFuse — Pembaca E-book, Pengelola Perpustakaan & Alat Kompresi",
    seoDesc: "BiblioFuse adalah ekosistem e-book pribadi untuk membaca, mengatur, streaming, mengompresi, dan menggabungkan perpustakaan pribadi Anda di iPhone, iPad, Mac, Android, dan web.",
    version: "Versi 2.0.1 — native di iPhone, iPad & Mac",
    titleA: "Perpustakaan Anda,",
    titleB: "baca dengan cara Anda.",
    desc: "BiblioFuse adalah pembaca dan pengelola perpustakaan native untuk koleksi ebook, komik, dan dokumen pribadi di iPhone, iPad, dan Mac.",
    warningTitle: "Unduh hanya dari sumber resmi.",
    warningBody: "BiblioFuse secara eksklusif didistribusikan melalui Apple App Store, Google Play Store, dan Microsoft Store. Jangan pernah mengunduh dari situs web tidak resmi.",
    chipA: "Universal · iCloud",
    chipB: "iPhone · iPad · Mac",
    chipC: "TTS · gulir otomatis",
    chipD: "Membaca tanpa tangan",
    reads: "Membaca"
  },
  ms: {
    seoTitle: "BiblioFuse — Pembaca E-book, Pengurus Perpustakaan & Alat Mampatan",
    seoDesc: "BiblioFuse ialah ekosistem e-book peribadi untuk membaca, menyusun, menstrim, memampat dan menggabungkan perpustakaan peribadi anda pada iPhone, iPad, Mac, Android dan web.",
    version: "Versi 2.0.1 — asli pada iPhone, iPad & Mac",
    titleA: "Perpustakaan anda,",
    titleB: "baca mengikut cara anda.",
    desc: "BiblioFuse ialah pembaca dan pengurus perpustakaan asli untuk koleksi ebook, komik dan dokumen peribadi pada iPhone, iPad dan Mac.",
    warningTitle: "Muat turun hanya dari sumber rasmi.",
    warningBody: "BiblioFuse diedarkan secara eksklusif melalui Apple App Store, Google Play Store dan Microsoft Store. Jangan sesekali memuat turun dari laman web tidak rasmi.",
    chipA: "Universal · iCloud",
    chipB: "iPhone · iPad · Mac",
    chipC: "TTS · tatal auto",
    chipD: "Bacaan tanpa tangan",
    reads: "Membaca"
  }
};

const langs = Object.keys(translations);

for (const lang of langs) {
  const filePath = path.join(baseDir, lang, 'translation.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const t = translations[lang];

  // Update redesign.home section
  const home = data.redesign.home;

  home.seoTitle = t.seoTitle;
  home.seoDesc = t.seoDesc;
  home.hero.version = t.version;
  home.hero.titleA = t.titleA;
  home.hero.titleB = t.titleB;
  home.hero.desc = t.desc;
  home.hero.warningTitle = t.warningTitle;
  home.hero.warningBody = t.warningBody;
  home.hero.chipA = t.chipA;
  home.hero.chipB = t.chipB;
  home.hero.chipC = t.chipC;
  home.hero.chipD = t.chipD;
  home.hero.reads = t.reads;

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`✅ Updated: ${lang}`);
}

console.log('\n🎉 All translations completed!');
