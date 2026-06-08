#!/usr/bin/env node
// One-off script to add translation keys for two new articles.
// Run: node scripts/add-new-article-keys.cjs

const fs = require('fs');
const path = require('path');

const LOCALES_DIR = path.join(__dirname, '..', 'src', 'locales');

const newKeys = {
  'double-page-spreads-comics': {
    en: {
      title: 'Reading Double-Page Spreads in Comics: How BiblioFuse Handles Wide Images',
      excerpt: 'BiblioFuse reads CBZ, CBR, EPUB, PDF, ZIP, RAR, and TXT files on iPhone and iPad running iOS 17 or later. When you reach a double-page spread, BiblioFuse automatically detects paired pages and can display them side-by-side, preserving the intended artwork. You can switch between single-page, side-by-side, and full-zoom modes at any time.',
      seoDescription: 'Learn how BiblioFuse handles double-page spreads in comics on iPhone and iPad. Automatic spread detection, landscape mode, and pinch-to-zoom for the best reading experience.',
    },
    es: {
      title: 'Leer Páginas Dobles en Cómics: Cómo BiblioFuse Maneja Imágenes Anchas',
      excerpt: 'BiblioFuse lee archivos CBZ, CBR, EPUB, PDF, ZIP, RAR y TXT en iPhone y iPad con iOS 17 o posterior. Cuando llegas a una página doble, BiblioFuse detecta automáticamente las páginas emparejadas y puede mostrarlas lado a lado, preservando el arte original. Puedes cambiar entre modo de una página, lado a lado y zoom completo en cualquier momento.',
      seoDescription: 'Aprende cómo BiblioFuse maneja las páginas dobles en cómics en iPhone y iPad. Detección automática, modo horizontal y zoom para la mejor experiencia de lectura.',
    },
    fr: {
      title: 'Lire les Planches Double Page dans les Comics : Comment BiblioFuse Gère les Images Larges',
      excerpt: 'BiblioFuse lit les fichiers CBZ, CBR, EPUB, PDF, ZIP, RAR et TXT sur iPhone et iPad sous iOS 17 ou ultérieur. Lorsque vous atteignez une planche double page, BiblioFuse détecte automatiquement les pages appariées et peut les afficher côte à côte, préservant l\'œuvre telle qu\'elle a été conçue. Vous pouvez basculer entre le mode page unique, côte à côte et zoom complet à tout moment.',
      seoDescription: 'Découvrez comment BiblioFuse gère les planches double page dans les comics sur iPhone et iPad. Détection automatique, mode paysage et zoom pour la meilleure expérience de lecture.',
    },
    nl: {
      title: 'Dubbele Pagina\'s Lezen in Comics: Hoe BiblioFuse Brede Afbeeldingen Beheert',
      excerpt: 'BiblioFuse leest CBZ-, CBR-, EPUB-, PDF-, ZIP-, RAR- en TXT-bestanden op iPhone en iPad met iOS 17 of later. Wanneer je een dubbele pagina bereikt, detecteert BiblioFuse automatisch de gekoppelde pagina\'s en kan ze naast elkaar weergeven, zodat het kunstwerk er uitziet zoals bedoeld. Je kunt op elk moment schakelen tussen enkelvoudige pagina, naast elkaar en volledig zoom.',
      seoDescription: 'Leer hoe BiblioFuse dubbele pagina\'s in comics beheert op iPhone en iPad. Automatische detectie, liggende modus en zoom voor de beste leeservaring.',
    },
    pt: {
      title: 'Ler Páginas Duplas em Quadrinhos: Como o BiblioFuse Trata Imagens Largas',
      excerpt: 'O BiblioFuse lê arquivos CBZ, CBR, EPUB, PDF, ZIP, RAR e TXT no iPhone e iPad com iOS 17 ou posterior. Quando você chega a uma página dupla, o BiblioFuse detecta automaticamente as páginas emparelhadas e pode exibi-las lado a lado, preservando a obra como foi concebida. Você pode alternar entre modo de página única, lado a lado e zoom completo a qualquer momento.',
      seoDescription: 'Aprenda como o BiblioFuse trata páginas duplas em quadrinhos no iPhone e iPad. Detecção automática, modo paisagem e zoom para a melhor experiência de leitura.',
    },
    ru: {
      title: 'Чтение Разворотов в Комиксах: Как BiblioFuse Отображает Широкие Изображения',
      excerpt: 'BiblioFuse читает файлы CBZ, CBR, EPUB, PDF, ZIP, RAR и TXT на iPhone и iPad с iOS 17 или новее. Когда вы достигаете двойного разворота, BiblioFuse автоматически определяет сопряжённые страницы и может отображать их рядом, сохраняя художественный замысел. Вы можете переключаться между режимом одной страницы, режимом рядом и полным масштабом в любое время.',
      seoDescription: 'Узнайте, как BiblioFuse отображает развороты в комиксах на iPhone и iPad. Автоматическое определение, альбомный режим и масштабирование для лучшего чтения.',
    },
    zh: {
      title: '阅读漫画双页展开：BiblioFuse 如何处理宽幅图像',
      excerpt: 'BiblioFuse 可在运行 iOS 17 或更高版本的 iPhone 和 iPad 上读取 CBZ、CBR、EPUB、PDF、ZIP、RAR 和 TXT 文件。当您翻到双页展开时，BiblioFuse 会自动检测配对页面并可以并排显示，完整呈现艺术家的创作意图。您可以随时在单页模式、并排模式和全屏缩放模式之间切换。',
      seoDescription: '了解 BiblioFuse 如何在 iPhone 和 iPad 上处理漫画双页展开。自动检测、横屏模式和缩放功能，带来最佳阅读体验。',
    },
    ja: {
      title: 'コミックの見開きページを読む：BiblioFuse が横長画像を処理する方法',
      excerpt: 'BiblioFuse は、iOS 17 以降を搭載した iPhone および iPad で CBZ、CBR、EPUB、PDF、ZIP、RAR、TXT ファイルを読み取ります。見開きページに到達すると、BiblioFuse は自動的にペアとなるページを検出し、並べて表示することができます。これにより、アーティストが意図した通りのアートワークが再現されます。単ページ、並べて表示、フルズームモードにいつでも切り替えられます。',
      seoDescription: 'BiblioFuse が iPhone と iPad でコミックの見開きページをどのように処理するかを学びましょう。自動検出、横向きモード、ピンチズームで最高の読書体験を。',
    },
    ko: {
      title: '만화의 양면 펼침 읽기: BiblioFuse가 와이드 이미지를 처리하는 방법',
      excerpt: 'BiblioFuse는 iOS 17 이상이 설치된 iPhone 및 iPad에서 CBZ, CBR, EPUB, PDF, ZIP, RAR, TXT 파일을 읽습니다. 양면 펼침 페이지에 도달하면 BiblioFuse가 자동으로 페어링된 페이지를 감지하여 나란히 표시할 수 있으며, 예술가가 의도한 대로 작품을 보여줍니다. 단일 페이지, 나란히 보기, 전체 확대 모드 사이를 언제든지 전환할 수 있습니다.',
      seoDescription: 'BiblioFuse가 iPhone과 iPad에서 만화의 양면 펼침을 처리하는 방법을 알아보세요. 자동 감지, 가로 모드, 핀치 줌으로 최고의 독서 경험을 제공합니다.',
    },
    id: {
      title: 'Membaca Halaman Ganda dalam Komik: Cara BiblioFuse Menangani Gambar Lebar',
      excerpt: 'BiblioFuse membaca file CBZ, CBR, EPUB, PDF, ZIP, RAR, dan TXT di iPhone dan iPad yang menjalankan iOS 17 atau lebih baru. Saat Anda mencapai halaman ganda, BiblioFuse secara otomatis mendeteksi halaman yang berpasangan dan dapat menampilkannya berdampingan, menjaga karya seni sesuai yang dimaksudkan. Anda dapat beralih antara mode halaman tunggal, berdampingan, dan zoom penuh kapan saja.',
      seoDescription: 'Pelajari cara BiblioFuse menangani halaman ganda dalam komik di iPhone dan iPad. Deteksi otomatis, mode lanskap, dan zoom untuk pengalaman membaca terbaik.',
    },
    ms: {
      title: 'Membaca Halaman Berganda dalam Komik: Cara BiblioFuse Mengendalikan Imej Lebar',
      excerpt: 'BiblioFuse membaca fail CBZ, CBR, EPUB, PDF, ZIP, RAR dan TXT pada iPhone dan iPad yang menjalankan iOS 17 atau lebih baru. Apabila anda mencapai helaian berganda, BiblioFuse secara automatik mengesan halaman yang dipasangkan dan boleh memaparkannya bersebelahan, mengekalkan karya seni seperti yang dimaksudkan. Anda boleh beralih antara mod halaman tunggal, bersebelahan dan zum penuh pada bila-bila masa.',
      seoDescription: 'Ketahui cara BiblioFuse mengendalikan helaian berganda dalam komik pada iPhone dan iPad. Pengesanan automatik, mod landskap dan zum untuk pengalaman membaca terbaik.',
    },
  },
  'backup-comic-library-mac': {
    en: {
      title: 'How to Back Up Your Comic Library on Mac: External Drive, NAS, and Cloud Options',
      excerpt: 'BiblioFuse stores your comics and ebooks — EPUB, CBZ, CBR, PDF, ZIP, RAR, and TXT — on iPhone, iPad, and Mac, and streams your Mac library directly to iPhone over Wi-Fi without copying files. To back up your Mac comic library, you can use Time Machine with an external drive or NAS, copy files to cloud storage like iCloud Drive or Dropbox, or use any backup tool that mirrors a standard folder. BiblioFuse reading progress syncs automatically via iCloud so your place in every book is always preserved.',
      seoDescription: 'Learn how to back up your Mac comic library using Time Machine, external drives, NAS, and cloud storage. Protect your EPUB, CBZ, and PDF collection from data loss.',
    },
    es: {
      title: 'Cómo hacer copia de seguridad de tu biblioteca de cómics en Mac: disco externo, NAS y opciones en la nube',
      excerpt: 'BiblioFuse almacena tus cómics y ebooks — EPUB, CBZ, CBR, PDF, ZIP, RAR y TXT — en iPhone, iPad y Mac, y transmite tu biblioteca de Mac directamente al iPhone por Wi-Fi sin copiar archivos. Para hacer copia de seguridad de tu biblioteca de cómics en Mac, puedes usar Time Machine con un disco externo o NAS, copiar archivos a almacenamiento en la nube como iCloud Drive o Dropbox, o usar cualquier herramienta de copia de seguridad que refleje una carpeta estándar. El progreso de lectura de BiblioFuse se sincroniza automáticamente a través de iCloud.',
      seoDescription: 'Aprende cómo hacer copia de seguridad de tu biblioteca de cómics en Mac usando Time Machine, discos externos, NAS y almacenamiento en la nube. Protege tu colección de EPUB, CBZ y PDF.',
    },
    fr: {
      title: 'Comment sauvegarder votre bibliothèque de comics sur Mac : disque externe, NAS et options cloud',
      excerpt: 'BiblioFuse stocke vos comics et ebooks — EPUB, CBZ, CBR, PDF, ZIP, RAR et TXT — sur iPhone, iPad et Mac, et diffuse votre bibliothèque Mac directement sur iPhone via Wi-Fi sans copier de fichiers. Pour sauvegarder votre bibliothèque de comics sur Mac, vous pouvez utiliser Time Machine avec un disque externe ou un NAS, copier des fichiers dans un stockage cloud comme iCloud Drive ou Dropbox, ou utiliser tout outil de sauvegarde qui reflète un dossier standard. La progression de lecture de BiblioFuse se synchronise automatiquement via iCloud.',
      seoDescription: 'Apprenez à sauvegarder votre bibliothèque de comics sur Mac avec Time Machine, disques externes, NAS et stockage cloud. Protégez votre collection EPUB, CBZ et PDF.',
    },
    nl: {
      title: 'Hoe maak je een back-up van je comicbibliotheek op Mac: externe schijf, NAS en cloudopties',
      excerpt: 'BiblioFuse slaat je comics en ebooks op — EPUB, CBZ, CBR, PDF, ZIP, RAR en TXT — op iPhone, iPad en Mac, en streamt je Mac-bibliotheek direct naar iPhone via Wi-Fi zonder bestanden te kopiëren. Voor een back-up van je comicbibliotheek op Mac kun je Time Machine gebruiken met een externe schijf of NAS, bestanden kopiëren naar cloudopslag zoals iCloud Drive of Dropbox, of een back-uptool gebruiken die een standaardmap spiegelt. De leesvoortgang van BiblioFuse synchroniseert automatisch via iCloud.',
      seoDescription: 'Leer hoe je een back-up maakt van je comicbibliotheek op Mac met Time Machine, externe schijven, NAS en cloudopslag. Bescherm je EPUB-, CBZ- en PDF-collectie.',
    },
    pt: {
      title: 'Como fazer backup da sua biblioteca de quadrinhos no Mac: disco externo, NAS e opções de nuvem',
      excerpt: 'O BiblioFuse armazena seus quadrinhos e ebooks — EPUB, CBZ, CBR, PDF, ZIP, RAR e TXT — no iPhone, iPad e Mac, e transmite sua biblioteca do Mac diretamente para o iPhone por Wi-Fi sem copiar arquivos. Para fazer backup da sua biblioteca de quadrinhos no Mac, você pode usar o Time Machine com um disco externo ou NAS, copiar arquivos para armazenamento em nuvem como iCloud Drive ou Dropbox, ou usar qualquer ferramenta de backup que espelhe uma pasta padrão. O progresso de leitura do BiblioFuse sincroniza automaticamente via iCloud.',
      seoDescription: 'Aprenda como fazer backup da sua biblioteca de quadrinhos no Mac usando Time Machine, discos externos, NAS e armazenamento em nuvem. Proteja sua coleção de EPUB, CBZ e PDF.',
    },
    ru: {
      title: 'Как сделать резервную копию библиотеки комиксов на Mac: внешний диск, NAS и облачные варианты',
      excerpt: 'BiblioFuse хранит ваши комиксы и электронные книги — EPUB, CBZ, CBR, PDF, ZIP, RAR и TXT — на iPhone, iPad и Mac, а также транслирует вашу библиотеку Mac прямо на iPhone по Wi-Fi без копирования файлов. Для резервного копирования библиотеки комиксов на Mac вы можете использовать Time Machine с внешним диском или NAS, копировать файлы в облачное хранилище, например iCloud Drive или Dropbox, или использовать любой инструмент резервного копирования, зеркалирующий стандартную папку. Прогресс чтения BiblioFuse синхронизируется автоматически через iCloud.',
      seoDescription: 'Узнайте, как сделать резервную копию библиотеки комиксов на Mac с помощью Time Machine, внешних дисков, NAS и облачного хранилища. Защитите свою коллекцию EPUB, CBZ и PDF.',
    },
    zh: {
      title: '如何在 Mac 上备份漫画库：外置硬盘、NAS 和云端选项',
      excerpt: 'BiblioFuse 在 iPhone、iPad 和 Mac 上存储您的漫画和电子书——包括 EPUB、CBZ、CBR、PDF、ZIP、RAR 和 TXT，并可通过 Wi-Fi 将 Mac 图书馆直接串流到 iPhone，无需复制文件。要备份 Mac 上的漫画库，您可以使用 Time Machine 配合外置硬盘或 NAS，将文件复制到 iCloud Drive 或 Dropbox 等云存储，或使用任何镜像标准文件夹的备份工具。BiblioFuse 阅读进度通过 iCloud 自动同步，您在每本书中的位置始终保留。',
      seoDescription: '了解如何使用 Time Machine、外置硬盘、NAS 和云存储在 Mac 上备份您的漫画库。保护您的 EPUB、CBZ 和 PDF 收藏免遭数据丢失。',
    },
    ja: {
      title: 'Mac でコミックライブラリをバックアップする方法：外付けドライブ、NAS、クラウドオプション',
      excerpt: 'BiblioFuse は iPhone、iPad、Mac に EPUB、CBZ、CBR、PDF、ZIP、RAR、TXT などのコミックや電子書籍を保存し、Mac ライブラリを Wi-Fi 経由でファイルをコピーせずに直接 iPhone にストリーミングします。Mac でコミックライブラリをバックアップするには、外付けドライブや NAS を使用した Time Machine、iCloud Drive や Dropbox などのクラウドストレージへのファイルコピー、または標準フォルダをミラーリングする任意のバックアップツールを使用できます。BiblioFuse の読書進捗は iCloud を通じて自動的に同期されます。',
      seoDescription: 'Time Machine、外付けドライブ、NAS、クラウドストレージを使って Mac でコミックライブラリをバックアップする方法を学びましょう。EPUB、CBZ、PDF コレクションをデータ損失から守りましょう。',
    },
    ko: {
      title: 'Mac에서 만화 라이브러리 백업하는 방법: 외장 드라이브, NAS 및 클라우드 옵션',
      excerpt: 'BiblioFuse는 iPhone, iPad 및 Mac에 EPUB, CBZ, CBR, PDF, ZIP, RAR, TXT 등의 만화와 전자책을 저장하며, 파일을 복사하지 않고 Wi-Fi를 통해 Mac 라이브러리를 iPhone으로 직접 스트리밍합니다. Mac의 만화 라이브러리를 백업하려면 외장 드라이브나 NAS가 있는 Time Machine을 사용하거나, iCloud Drive 또는 Dropbox와 같은 클라우드 스토리지에 파일을 복사하거나, 표준 폴더를 미러링하는 백업 도구를 사용할 수 있습니다. BiblioFuse 읽기 진행 상황은 iCloud를 통해 자동으로 동기화됩니다.',
      seoDescription: 'Time Machine, 외장 드라이브, NAS 및 클라우드 스토리지를 사용하여 Mac에서 만화 라이브러리를 백업하는 방법을 알아보세요. EPUB, CBZ, PDF 컬렉션을 데이터 손실로부터 보호하세요.',
    },
    id: {
      title: 'Cara Membuat Cadangan Perpustakaan Komik di Mac: Drive Eksternal, NAS, dan Opsi Cloud',
      excerpt: 'BiblioFuse menyimpan komik dan ebook Anda — EPUB, CBZ, CBR, PDF, ZIP, RAR, dan TXT — di iPhone, iPad, dan Mac, serta mengalirkan perpustakaan Mac Anda langsung ke iPhone melalui Wi-Fi tanpa menyalin file. Untuk mencadangkan perpustakaan komik di Mac, Anda dapat menggunakan Time Machine dengan drive eksternal atau NAS, menyalin file ke penyimpanan cloud seperti iCloud Drive atau Dropbox, atau menggunakan alat cadangan apa pun yang mencerminkan folder standar. Kemajuan membaca BiblioFuse disinkronkan secara otomatis melalui iCloud.',
      seoDescription: 'Pelajari cara mencadangkan perpustakaan komik di Mac menggunakan Time Machine, drive eksternal, NAS, dan penyimpanan cloud. Lindungi koleksi EPUB, CBZ, dan PDF Anda dari kehilangan data.',
    },
    ms: {
      title: 'Cara Membuat Sandaran Perpustakaan Komik di Mac: Pemacu Luaran, NAS dan Pilihan Awan',
      excerpt: 'BiblioFuse menyimpan komik dan ebook anda — EPUB, CBZ, CBR, PDF, ZIP, RAR dan TXT — pada iPhone, iPad dan Mac, serta menstrim perpustakaan Mac anda terus ke iPhone melalui Wi-Fi tanpa menyalin fail. Untuk membuat sandaran perpustakaan komik di Mac, anda boleh menggunakan Time Machine dengan pemacu luaran atau NAS, menyalin fail ke storan awan seperti iCloud Drive atau Dropbox, atau menggunakan mana-mana alat sandaran yang mencerminkan folder standard. Kemajuan membaca BiblioFuse disegerakkan secara automatik melalui iCloud.',
      seoDescription: 'Ketahui cara membuat sandaran perpustakaan komik di Mac menggunakan Time Machine, pemacu luaran, NAS dan storan awan. Lindungi koleksi EPUB, CBZ dan PDF anda daripada kehilangan data.',
    },
  },
};

const locales = ['en', 'es', 'fr', 'nl', 'pt', 'ru', 'zh', 'ja', 'ko', 'id', 'ms'];

for (const locale of locales) {
  const filePath = path.join(LOCALES_DIR, locale, 'translation.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(raw);

  // Navigate to the posts object
  const posts = json.redesign.blog.posts;

  // Prepend new keys (newest-first order)
  const newPosts = {};
  for (const slug of ['double-page-spreads-comics', 'backup-comic-library-mac']) {
    const localeKey = newKeys[slug][locale];
    newPosts[slug] = localeKey;
  }

  // Merge: new keys first, then existing keys
  json.redesign.blog.posts = { ...newPosts, ...posts };

  fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n', 'utf8');
  console.log(`Updated ${locale}`);
}

console.log('Done. All 11 locale files updated.');
