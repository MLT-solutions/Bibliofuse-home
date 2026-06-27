/**
 * One-off: update SEO/AEO strings and inject 2 new offline/search FAQ entries
 * into all 10 non-English locales for the GrepTag Reader page.
 * Usage: node scripts/inject-grepreader-seo-aeo.cjs
 */
const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, '..', 'src', 'locales');

const UPDATES = {
  es: {
    seoTitle: 'GrepTag Reader — Busca Dentro de Todos tus EPUB y eBooks | iPhone, iPad, Mac, Windows',
    seoDesc: 'Busca dentro de cada archivo EPUB y TXT en iPhone, iPad, Mac y Windows — encuentra cualquier palabra en toda tu biblioteca de ebooks. Etiqueta por género, sincroniza por Wi-Fi. Sin nube. Gratis.',
    heroDesc: 'BiblioFuse GrepTag Reader te permite buscar dentro de cualquier archivo EPUB o TXT — escribe una palabra y encuentra todos los libros que la contienen. Etiqueta por género, sincroniza por Wi-Fi y mantén todos tus archivos privados en tu propio dispositivo.',
    heroTrust1: 'Busca todos tus ebooks gratis, sin límite',
    grepEyebrow: 'Busca Dentro de los Libros',
    faqNew: [
      {
        q: '¿Cómo busco una palabra o frase específica dentro de mis archivos de ebook?',
        a: 'Abre GrepTag Reader, ve a la pestaña Buscar y escribe cualquier palabra o frase. La app abre cada archivo EPUB y TXT de tu biblioteca y devuelve todos los libros que contienen tu término de búsqueda — sin índice previo, sin subidas. Combina términos con AND, OR y NOT para resultados más precisos (por ejemplo: "magia AND dragones NOT romance"). Guarda búsquedas frecuentes como perfiles con nombre que se ejecutan automáticamente cuando se importan nuevos libros. La búsqueda es siempre gratuita e ilimitada.'
      },
      {
        q: '¿GrepTag Reader necesita conexión a internet para funcionar?',
        a: 'No. GrepTag Reader funciona completamente sin conexión. Todo el proceso de búsqueda, etiquetado y organización ocurre directamente en tu dispositivo — la app lee tus archivos EPUB y TXT de forma local, sin necesidad de servidor ni conexión a internet. La única vez que se usa la red es con la función opcional Wi-Fi Sync, que transfiere libros entre tus propios dispositivos a través de tu red local.'
      }
    ]
  },
  fr: {
    seoTitle: 'GrepTag Reader — Rechercher Dans Tous vos EPUB et eBooks | iPhone, iPad, Mac, Windows',
    seoDesc: 'Recherchez dans chaque fichier EPUB et TXT sur iPhone, iPad, Mac et Windows — trouvez n\'importe quel mot dans toute votre bibliothèque d\'ebooks. Classez par genre, synchronisez en Wi-Fi. Sans cloud. Gratuit.',
    heroDesc: 'BiblioFuse GrepTag Reader vous permet de rechercher dans n\'importe quel fichier EPUB ou TXT — tapez un mot et trouvez chaque livre qui le contient. Classez par genre, synchronisez en Wi-Fi et gardez tous vos fichiers privés sur votre propre appareil.',
    heroTrust1: 'Recherche gratuite dans tous vos ebooks, sans limite',
    grepEyebrow: 'Rechercher Dans les Livres',
    faqNew: [
      {
        q: 'Comment rechercher un mot ou une phrase spécifique dans mes fichiers ebook ?',
        a: 'Ouvrez GrepTag Reader, allez dans l\'onglet Recherche et tapez n\'importe quel mot ou phrase. L\'app ouvre chaque fichier EPUB et TXT de votre bibliothèque et renvoie chaque livre qui contient votre terme de recherche — sans index préalable, sans téléversement. Combinez les termes avec AND, OR et NOT pour des résultats plus précis (par exemple : "magie AND dragons NOT romance"). Enregistrez vos recherches fréquentes comme profils nommés qui se relancent automatiquement à l\'importation de nouveaux livres. La recherche est toujours gratuite et illimitée.'
      },
      {
        q: 'GrepTag Reader a-t-il besoin d\'une connexion internet pour fonctionner ?',
        a: 'Non. GrepTag Reader fonctionne entièrement hors ligne. La recherche, l\'étiquetage et l\'organisation se font directement sur votre appareil — l\'app lit vos fichiers EPUB et TXT localement, sans serveur ni connexion internet. Le réseau n\'est utilisé que pour la fonctionnalité optionnelle Wi-Fi Sync, qui transfère des livres entre vos propres appareils via votre réseau local.'
      }
    ]
  },
  nl: {
    seoTitle: 'GrepTag Reader — Zoek Binnen Al je EPUB\'s en eBooks | iPhone, iPad, Mac, Windows',
    seoDesc: 'Zoek in elk EPUB- en TXT-bestand op iPhone, iPad, Mac en Windows — vind elk woord in je volledige eBook-bibliotheek. Tag op genre, sync via Wi-Fi. Geen cloud. Gratis te proberen.',
    heroDesc: 'BiblioFuse GrepTag Reader laat je zoeken binnen elk EPUB- of TXT-bestand — typ een woord en vind elk boek dat het bevat. Tag op genre, synchroniseer via Wi-Fi en bewaar al je bestanden privé op je eigen apparaat.',
    heroTrust1: 'Zoek al je ebooks gratis, zonder limiet',
    grepEyebrow: 'Zoeken in Boeken',
    faqNew: [
      {
        q: 'Hoe zoek ik naar een specifiek woord of zin in mijn ebook-bestanden?',
        a: 'Open GrepTag Reader, ga naar het tabblad Zoeken en typ een woord of zin. De app opent elk EPUB- en TXT-bestand in je bibliotheek en geeft elk boek terug dat je zoekterm bevat — geen vooraf gebouwde index, geen upload nodig. Combineer termen met AND, OR en NOT voor nauwkeurigere resultaten (bijvoorbeeld: "magie AND draken NOT romance"). Sla veelgebruikte zoekopdrachten op als benoemde profielen die automatisch opnieuw worden uitgevoerd wanneer nieuwe boeken worden geïmporteerd. Zoeken is altijd gratis en onbeperkt.'
      },
      {
        q: 'Heeft GrepTag Reader een internetverbinding nodig?',
        a: 'Nee. GrepTag Reader werkt volledig offline. Alle zoekacties, taggen en organiseren gebeurt direct op je apparaat — de app leest je EPUB- en TXT-bestanden lokaal, zonder server of internetverbinding. Het netwerk wordt alleen gebruikt voor de optionele Wi-Fi Sync-functie, die boeken overdraagt tussen je eigen apparaten via je lokale netwerk.'
      }
    ]
  },
  pt: {
    seoTitle: 'GrepTag Reader — Pesquise Dentro de Todos os EPUB e eBooks | iPhone, iPad, Mac, Windows',
    seoDesc: 'Pesquise dentro de cada arquivo EPUB e TXT no iPhone, iPad, Mac e Windows — encontre qualquer palavra em toda a sua biblioteca de ebooks. Marque por gênero, sincronize por Wi-Fi. Sem nuvem. Grátis.',
    heroDesc: 'O BiblioFuse GrepTag Reader permite que você pesquise dentro de qualquer arquivo EPUB ou TXT — digite uma palavra e encontre cada livro que a contém. Marque por gênero, sincronize por Wi-Fi e mantenha todos os seus arquivos privados no seu próprio dispositivo.',
    heroTrust1: 'Pesquise todos os ebooks grátis, sem limite',
    grepEyebrow: 'Pesquisar Dentro dos Livros',
    faqNew: [
      {
        q: 'Como pesquiso uma palavra ou frase específica dentro dos meus arquivos de ebook?',
        a: 'Abra o GrepTag Reader, vá para a aba Pesquisa e digite qualquer palavra ou frase. O app abre cada arquivo EPUB e TXT da sua biblioteca e retorna todos os livros que contêm o seu termo de pesquisa — sem índice prévio, sem uploads. Combine termos com AND, OR e NOT para resultados mais precisos (por exemplo: "magia AND dragões NOT romance"). Salve pesquisas frequentes como perfis nomeados que são executados automaticamente quando novos livros são importados. A pesquisa é sempre gratuita e ilimitada.'
      },
      {
        q: 'O GrepTag Reader precisa de conexão com a internet para funcionar?',
        a: 'Não. O GrepTag Reader funciona completamente offline. Toda a pesquisa, marcação e organização acontece diretamente no seu dispositivo — o app lê seus arquivos EPUB e TXT localmente, sem servidor ou conexão com a internet. A rede só é usada para o recurso opcional Wi-Fi Sync, que transfere livros entre seus próprios dispositivos pela sua rede local.'
      }
    ]
  },
  ru: {
    seoTitle: 'GrepTag Reader — Поиск Внутри Каждого EPUB и eBook | iPhone, iPad, Mac, Windows',
    seoDesc: 'Ищите внутри каждого файла EPUB и TXT на iPhone, iPad, Mac и Windows — найдите любое слово во всей вашей библиотеке электронных книг. Теги по жанру, синхронизация по Wi-Fi. Без облака. Бесплатно.',
    heroDesc: 'BiblioFuse GrepTag Reader позволяет искать внутри любого файла EPUB или TXT — введите слово и найдите каждую книгу, в которой оно встречается. Отмечайте по жанру, синхронизируйте по Wi-Fi и храните все файлы в приватности на своём устройстве.',
    heroTrust1: 'Поиск всех ваших книг, бесплатно и без ограничений',
    grepEyebrow: 'Поиск Внутри Книг',
    faqNew: [
      {
        q: 'Как найти конкретное слово или фразу внутри моих файлов электронных книг?',
        a: 'Откройте GrepTag Reader, перейдите на вкладку «Поиск» и введите любое слово или фразу. Приложение открывает каждый файл EPUB и TXT в вашей библиотеке и возвращает каждую книгу, содержащую ваш поисковый запрос — без предварительного индекса, без загрузок. Комбинируйте слова с AND, OR и NOT для более точных результатов (например: «магия AND драконы NOT романтика»). Сохраняйте частые запросы как именованные профили, которые автоматически запускаются при добавлении новых книг. Поиск всегда бесплатен и неограничен.'
      },
      {
        q: 'Требует ли GrepTag Reader подключения к интернету?',
        a: 'Нет. GrepTag Reader работает полностью в офлайн-режиме. Весь поиск, теги и организация происходят непосредственно на вашем устройстве — приложение читает ваши файлы EPUB и TXT локально, без сервера и интернет-соединения. Сеть используется только для необязательной функции Wi-Fi Sync, которая передаёт книги между вашими устройствами через локальную сеть.'
      }
    ]
  },
  zh: {
    seoTitle: 'GrepTag Reader — 在所有 EPUB 和电子书中搜索文本 | iPhone、iPad、Mac、Windows',
    seoDesc: '在 iPhone、iPad、Mac 和 Windows 上搜索每个 EPUB 和 TXT 文件内的内容——在整个电子书库中查找任意词语。按流派标记，通过 Wi-Fi 同步。无需云端，免费开始。',
    heroDesc: 'BiblioFuse GrepTag Reader 让您在任何 EPUB 或 TXT 文件中搜索——输入一个词，即可找到包含它的每一本书。按流派标记，通过 Wi-Fi 同步，所有文件都私密保存在您自己的设备上。',
    heroTrust1: '免费搜索所有电子书，无限制',
    grepEyebrow: '在书籍内部搜索',
    faqNew: [
      {
        q: '如何在我的电子书文件中搜索特定的词语或短语？',
        a: '打开 GrepTag Reader，进入"搜索"标签页，输入任意词语或短语。应用将打开书库中的每个 EPUB 和 TXT 文件，并返回包含您搜索词的每一本书——无需预先建立索引，无需上传。使用 AND、OR 和 NOT 组合词语以获得更精确的结果（例如："魔法 AND 龙 NOT 爱情"）。将常用搜索保存为命名配置文件，新书导入时自动运行。搜索功能永久免费且无限制。'
      },
      {
        q: 'GrepTag Reader 需要联网才能使用吗？',
        a: '不需要。GrepTag Reader 完全离线运行。所有搜索、标记和整理都直接在您的设备上进行——应用在本地读取您的 EPUB 和 TXT 文件，无需服务器或网络连接。只有在使用可选的 Wi-Fi Sync 功能时才会用到网络，该功能通过本地网络在您自己的设备之间传输书籍。'
      }
    ]
  },
  ja: {
    seoTitle: 'GrepTag Reader — 全 EPUB・電子書籍内を検索 | iPhone・iPad・Mac・Windows',
    seoDesc: 'iPhone、iPad、Mac、Windows 上のすべての EPUB・TXT ファイル内を検索。電子書籍ライブラリ全体から任意の単語を検索。ジャンルでタグ付け、Wi-Fi 同期。クラウド不要。無料で試せます。',
    heroDesc: 'BiblioFuse GrepTag Reader は、あらゆる EPUB や TXT ファイルの中を検索できます — 単語を入力すれば、それを含むすべての本が見つかります。ジャンルでタグ付けし、Wi-Fi で同期。すべてのファイルはプライベートにご自身のデバイスに保存されます。',
    heroTrust1: 'すべての電子書籍を無料で検索、制限なし',
    grepEyebrow: '書籍内テキスト検索',
    faqNew: [
      {
        q: 'ebook ファイル内の特定の単語やフレーズを検索するにはどうすればいいですか？',
        a: 'GrepTag Reader を開き、「検索」タブに移動して任意の単語やフレーズを入力します。アプリはライブラリ内のすべての EPUB・TXT ファイルを開き、検索語を含むすべての本を返します — 事前インデックス不要、アップロード不要。AND、OR、NOT で語句を組み合わせるとより精確な結果が得られます（例：「魔法 AND ドラゴン NOT ロマンス」）。よく使う検索を名前付きプロファイルとして保存すれば、新しい本をインポートしたときに自動で再実行されます。検索は常に無料・無制限です。'
      },
      {
        q: 'GrepTag Reader はインターネット接続なしで動作しますか？',
        a: 'はい。GrepTag Reader は完全にオフラインで動作します。検索・タグ付け・整理のすべてがデバイス上で直接行われます — アプリはローカルの EPUB・TXT ファイルを読み込むため、サーバーやインターネット接続は不要です。ネットワークが使われるのは、オプションの Wi-Fi Sync 機能でご自身のデバイス間でローカルネットワーク経由に本を転送するときだけです。'
      }
    ]
  },
  ko: {
    seoTitle: 'GrepTag Reader — 모든 EPUB 및 전자책 내부 텍스트 검색 | iPhone, iPad, Mac, Windows',
    seoDesc: 'iPhone, iPad, Mac, Windows에서 모든 EPUB 및 TXT 파일 내부를 검색하세요 — 전체 전자책 라이브러리에서 어떤 단어도 찾을 수 있습니다. 장르별 태그, Wi-Fi 동기화. 클라우드 없음. 무료 시작.',
    heroDesc: 'BiblioFuse GrepTag Reader를 사용하면 모든 EPUB 또는 TXT 파일 내부를 검색할 수 있습니다. 단어를 입력하면 해당 단어가 포함된 모든 책을 찾아드립니다. 장르별로 태그를 붙이고, Wi-Fi로 동기화하며, 모든 파일은 내 기기에 안전하게 보관됩니다.',
    heroTrust1: '모든 전자책 무료 검색, 제한 없음',
    grepEyebrow: '책 내부 검색',
    faqNew: [
      {
        q: '내 전자책 파일에서 특정 단어나 구절을 어떻게 검색하나요?',
        a: 'GrepTag Reader를 열고 검색 탭으로 이동해 원하는 단어나 구절을 입력하세요. 앱이 라이브러리의 모든 EPUB 및 TXT 파일을 열어 검색어가 포함된 모든 책을 반환합니다 — 사전 인덱스 없이, 업로드 없이. AND, OR, NOT으로 검색어를 조합하면 더 정밀한 결과를 얻을 수 있습니다 (예: "마법 AND 용 NOT 로맨스"). 자주 쓰는 검색어를 이름 있는 프로필로 저장하면 새 책을 불러올 때 자동으로 재실행됩니다. 검색은 항상 무료이며 무제한입니다.'
      },
      {
        q: 'GrepTag Reader를 사용하려면 인터넷이 필요한가요?',
        a: '아니요. GrepTag Reader는 완전히 오프라인으로 작동합니다. 검색, 태그 지정, 정리 등 모든 작업이 기기에서 직접 이루어집니다 — 앱은 EPUB 및 TXT 파일을 로컬에서 읽으며 서버나 인터넷 연결이 필요하지 않습니다. 네트워크는 로컬 네트워크를 통해 내 기기 간에 책을 전송하는 선택적 Wi-Fi Sync 기능에서만 사용됩니다.'
      }
    ]
  },
  id: {
    seoTitle: 'GrepTag Reader — Cari di Dalam Semua EPUB dan eBook | iPhone, iPad, Mac, Windows',
    seoDesc: 'Cari di dalam setiap file EPUB dan TXT di iPhone, iPad, Mac, dan Windows — temukan kata apapun di seluruh perpustakaan ebook Anda. Tandai berdasarkan genre, sinkronkan via Wi-Fi. Tanpa cloud. Gratis.',
    heroDesc: 'BiblioFuse GrepTag Reader memungkinkan Anda mencari di dalam file EPUB atau TXT mana pun — ketik kata dan temukan setiap buku yang mengandungnya. Tandai berdasarkan genre, sinkronkan melalui Wi-Fi, dan simpan semua file secara pribadi di perangkat Anda sendiri.',
    heroTrust1: 'Cari semua ebook Anda, gratis tanpa batas',
    grepEyebrow: 'Cari di Dalam Buku',
    faqNew: [
      {
        q: 'Bagaimana cara mencari kata atau frasa tertentu di dalam file ebook saya?',
        a: 'Buka GrepTag Reader, pergi ke tab Cari, dan ketik kata atau frasa apa pun. Aplikasi membuka setiap file EPUB dan TXT di perpustakaan Anda dan mengembalikan setiap buku yang mengandung istilah pencarian Anda — tanpa indeks yang dibangun sebelumnya, tanpa unggahan. Gabungkan istilah dengan AND, OR, dan NOT untuk hasil yang lebih tepat (misalnya: "sihir AND naga NOT romansa"). Simpan pencarian yang sering digunakan sebagai profil bernama yang dijalankan ulang secara otomatis saat buku baru diimpor. Semua pencarian selalu gratis dan tidak terbatas.'
      },
      {
        q: 'Apakah GrepTag Reader memerlukan koneksi internet untuk bekerja?',
        a: 'Tidak. GrepTag Reader bekerja sepenuhnya secara offline. Semua pencarian, penandaan, dan pengorganisasian terjadi langsung di perangkat Anda — aplikasi membaca file EPUB dan TXT Anda secara lokal tanpa memerlukan server atau koneksi internet. Jaringan hanya digunakan untuk fitur Wi-Fi Sync opsional yang mentransfer buku antara perangkat Anda sendiri melalui jaringan lokal.'
      }
    ]
  },
  ms: {
    seoTitle: 'GrepTag Reader — Cari di Dalam Semua EPUB dan eBook | iPhone, iPad, Mac, Windows',
    seoDesc: 'Cari di dalam setiap fail EPUB dan TXT di iPhone, iPad, Mac dan Windows — temui mana-mana perkataan dalam seluruh perpustakaan ebook anda. Tag mengikut genre, selaraskan melalui Wi-Fi. Tanpa awan. Percuma.',
    heroDesc: 'BiblioFuse GrepTag Reader membolehkan anda mencari di dalam mana-mana fail EPUB atau TXT — taip perkataan dan cari setiap buku yang mengandunginya. Tag mengikut genre, selaraskan melalui Wi-Fi dan simpan semua fail anda secara peribadi di peranti anda sendiri.',
    heroTrust1: 'Cari semua ebook anda, percuma tanpa had',
    grepEyebrow: 'Cari di Dalam Buku',
    faqNew: [
      {
        q: 'Bagaimana saya mencari perkataan atau frasa tertentu di dalam fail ebook saya?',
        a: 'Buka GrepTag Reader, pergi ke tab Cari dan taip mana-mana perkataan atau frasa. Aplikasi membuka setiap fail EPUB dan TXT dalam perpustakaan anda dan mengembalikan setiap buku yang mengandungi istilah carian anda — tanpa indeks pra-bina, tanpa muat naik. Gabungkan istilah dengan AND, OR dan NOT untuk keputusan yang lebih tepat (contohnya: "sihir AND naga NOT romantik"). Simpan carian yang kerap sebagai profil bernama yang dijalankan semula secara automatik apabila buku baru diimport. Semua carian sentiasa percuma dan tanpa had.'
      },
      {
        q: 'Adakah GrepTag Reader memerlukan sambungan internet untuk berfungsi?',
        a: 'Tidak. GrepTag Reader berfungsi sepenuhnya secara luar talian. Semua carian, penandaan dan penganjuran berlaku terus di peranti anda — aplikasi membaca fail EPUB dan TXT anda secara setempat tanpa memerlukan pelayan atau sambungan internet. Rangkaian hanya digunakan untuk ciri Wi-Fi Sync pilihan yang memindahkan buku antara peranti anda sendiri melalui rangkaian setempat.'
      }
    ]
  }
};

const LANGS = Object.keys(UPDATES);

for (const lang of LANGS) {
  const filePath = path.join(base, lang, 'translation.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const u = UPDATES[lang];
  const p = data.redesign.grepTagPage;

  // Update SEO
  p.seo.title = u.seoTitle;
  p.seo.desc = u.seoDesc;

  // Update hero
  p.hero.desc = u.heroDesc;
  p.hero.trust1 = u.heroTrust1;

  // Update grep eyebrow
  p.grep.eyebrow = u.grepEyebrow;

  // Append 2 new FAQ items
  p.faq = [...p.faq, ...u.faqNew];

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log(`✅ ${lang}: FAQ now ${p.faq.length} entries`);
}

console.log('\n🎉 Done!');
