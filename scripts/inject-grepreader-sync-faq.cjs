/**
 * One-off: inject the 4 new Wi-Fi Sync FAQ entries into all 10 non-English locales.
 * Usage: node scripts/inject-grepreader-sync-faq.cjs
 */
const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, '..', 'src', 'locales');

const TRANSLATIONS = {
  es: [
    {
      q: "¿Puedo sincronizar mi biblioteca entre iPhone, iPad, Mac y PC?",
      a: "Sí. Wi-Fi Sync transfiere libros, etiquetas, valoraciones, perfiles de palabras clave y la estructura de carpetas entre cualquier combinación de iPhone, iPad, Mac y Windows PC. Todos los dispositivos Apple en la sincronización deben tener iniciada sesión con la misma cuenta de iCloud — iCloud solo se usa para el descubrimiento de dispositivos, no para almacenar tus libros. Los archivos viajan por tu red Wi-Fi local y nunca se suben a ningún servidor de desarrollador. Wi-Fi Sync es una función Pro."
    },
    {
      q: "¿Puedo usar más de un iPhone o iPad con Wi-Fi Sync?",
      a: "Sí. Varios iPhones e iPads pueden participar en la misma sincronización de biblioteca. La versión iOS de GrepTag almacena rutas relativas a la carpeta raíz de la app, por lo que la misma estructura de rutas funciona en todos los dispositivos iOS con la misma cuenta de iCloud."
    },
    {
      q: "¿Debo usar Mac o PC como fuente principal de mi biblioteca?",
      a: "Recomendamos usar un Mac o un PC como dispositivo de biblioteca principal. Los metadatos de GrepTag registran tres tipos de rutas distintos: rutas de PC, rutas de iOS y rutas de Mac. iOS funciona en varios iPhones e iPads porque usa rutas relativas. Mac y PC almacenan rutas absolutas de su propio dispositivo, por lo que la sincronización es más fiable cuando solo hay un Mac y un PC en tu configuración."
    },
    {
      q: "¿Puede mi iPhone sincronizar nuevos libros de vuelta a mi Mac o PC?",
      a: "Sí. Si añades un libro en iPhone dentro de una carpeta que todavía no existe en tu Mac o PC, GrepTag te pedirá que crees la carpeta y la añadas a tu lista de biblioteca en el dispositivo receptor antes de completar la sincronización."
    }
  ],
  fr: [
    {
      q: "Puis-je synchroniser ma bibliothèque entre iPhone, iPad, Mac et PC ?",
      a: "Oui. Wi-Fi Sync transfère des livres, des étiquettes, des évaluations, des profils de mots-clés et la structure des dossiers entre toute combinaison d'iPhone, iPad, Mac et Windows PC. Tous les appareils Apple participant à la synchronisation doivent être connectés au même compte iCloud — iCloud n'est utilisé que pour la découverte des appareils, pas pour stocker vos livres. Les fichiers transitent par votre réseau Wi-Fi local et ne sont jamais téléversés vers un serveur de développeur. Wi-Fi Sync est une fonctionnalité Pro."
    },
    {
      q: "Puis-je utiliser plusieurs iPhone ou iPad avec Wi-Fi Sync ?",
      a: "Oui. Plusieurs iPhones et iPads peuvent tous participer à la même synchronisation de bibliothèque. La version iOS de GrepTag stocke les chemins d'accès relatifs au dossier racine de l'app, de sorte que la même structure de chemins fonctionne sur tous les appareils iOS connectés au même compte iCloud."
    },
    {
      q: "Dois-je utiliser un Mac ou un PC comme source de référence pour ma bibliothèque ?",
      a: "Nous recommandons de conserver un Mac ou un PC comme appareil de bibliothèque principal. Les métadonnées de GrepTag suivent trois types de chemins distincts : chemins PC, chemins iOS et chemins Mac. iOS fonctionne sur plusieurs iPhones et iPads car il utilise des chemins relatifs. Mac et PC stockent chacun des chemins absolus pour leur propre appareil, donc la synchronisation est la plus fiable lorsqu'il n'y a qu'un seul Mac et un seul PC dans votre configuration."
    },
    {
      q: "Mon iPhone peut-il synchroniser de nouveaux livres vers mon Mac ou PC ?",
      a: "Oui. Si vous ajoutez un livre sur iPhone dans un dossier qui n'existe pas encore sur votre Mac ou PC, GrepTag vous demandera de créer le dossier et de l'ajouter à votre liste de bibliothèque sur l'appareil récepteur avant de terminer la synchronisation."
    }
  ],
  nl: [
    {
      q: "Kan ik mijn bibliotheek synchroniseren tussen iPhone, iPad, Mac en PC?",
      a: "Ja. Wi-Fi Sync draagt boeken, tags, beoordelingen, trefwoordprofielen en mappenstructuur over tussen elke combinatie van iPhone, iPad, Mac en Windows PC. Alle Apple-apparaten die deelnemen aan de synchronisatie moeten zijn aangemeld bij hetzelfde iCloud-account — iCloud wordt alleen gebruikt voor apparaatdetectie, niet voor het opslaan van je boeken. Bestanden worden overgebracht via je lokale Wi-Fi-netwerk en worden nooit geüpload naar een ontwikkelaarsserver. Wi-Fi Sync is een Pro-functie."
    },
    {
      q: "Kan ik meer dan één iPhone of iPad gebruiken met Wi-Fi Sync?",
      a: "Ja. Meerdere iPhones en iPads kunnen allemaal deelnemen aan dezelfde bibliotheekhsynchronisatie. De iOS-versie van GrepTag slaat paden op relatief aan de hoofdmap van de app, zodat dezelfde padstructuur werkt op alle iOS-apparaten die zijn aangemeld bij hetzelfde iCloud-account."
    },
    {
      q: "Moet ik Mac of PC gebruiken als de primaire bron voor mijn bibliotheek?",
      a: "We raden aan om één Mac of één PC te gebruiken als primair bibliotheekstation. De metadata van GrepTag bijhoudt drie afzonderlijke padtypen: PC-paden, iOS-paden en Mac-paden. iOS werkt op meerdere iPhones en iPads omdat het relatieve paden gebruikt. Mac en PC slaan elk absolute paden op voor hun eigen apparaat, zodat synchronisatie het betrouwbaarst is wanneer er slechts één Mac en één PC in uw configuratie zijn."
    },
    {
      q: "Kan mijn iPhone nieuwe boeken terug synchroniseren naar mijn Mac of PC?",
      a: "Ja. Als je een boek toevoegt op iPhone in een map die nog niet bestaat op je Mac of PC, zal GrepTag je vragen de map aan te maken en deze toe te voegen aan je bibliotheeklijst op het ontvangende apparaat voordat de synchronisatie wordt voltooid."
    }
  ],
  pt: [
    {
      q: "Posso sincronizar minha biblioteca entre iPhone, iPad, Mac e PC?",
      a: "Sim. O Wi-Fi Sync transfere livros, etiquetas, avaliações, perfis de palavras-chave e a estrutura de pastas entre qualquer combinação de iPhone, iPad, Mac e Windows PC. Todos os dispositivos Apple na sincronização devem estar conectados à mesma conta iCloud — o iCloud é usado apenas para descoberta de dispositivos, não para armazenar seus livros. Os arquivos viajam pela sua rede Wi-Fi local e nunca são enviados a nenhum servidor de desenvolvedor. O Wi-Fi Sync é um recurso Pro."
    },
    {
      q: "Posso usar mais de um iPhone ou iPad com o Wi-Fi Sync?",
      a: "Sim. Vários iPhones e iPads podem participar da mesma sincronização de biblioteca. A versão iOS do GrepTag armazena caminhos relativos à pasta raiz do app, portanto, a mesma estrutura de caminhos funciona em todos os dispositivos iOS conectados à mesma conta iCloud."
    },
    {
      q: "Devo usar Mac ou PC como fonte principal da minha biblioteca?",
      a: "Recomendamos manter um Mac ou um PC como dispositivo de biblioteca principal. Os metadados do GrepTag rastreiam três tipos de caminhos distintos: caminhos de PC, caminhos de iOS e caminhos de Mac. O iOS funciona em vários iPhones e iPads porque usa caminhos relativos. Mac e PC armazenam cada um caminhos absolutos para seu próprio dispositivo, então a sincronização é mais confiável quando há apenas um Mac e um PC na sua configuração."
    },
    {
      q: "Meu iPhone pode sincronizar novos livros de volta para o meu Mac ou PC?",
      a: "Sim. Se você adicionar um livro no iPhone dentro de uma pasta que ainda não existe no seu Mac ou PC, o GrepTag pedirá que você crie a pasta e a adicione à sua lista de biblioteca no dispositivo receptor antes de concluir a sincronização."
    }
  ],
  ru: [
    {
      q: "Могу ли я синхронизировать библиотеку между iPhone, iPad, Mac и PC?",
      a: "Да. Wi-Fi Sync передаёт книги, теги, оценки, профили ключевых слов и структуру папок между любой комбинацией iPhone, iPad, Mac и Windows PC. Все устройства Apple, участвующие в синхронизации, должны быть авторизованы в одном аккаунте iCloud — iCloud используется только для обнаружения устройств, а не для хранения ваших книг. Файлы передаются по локальной сети Wi-Fi и никогда не загружаются на серверы разработчика. Wi-Fi Sync — функция Pro."
    },
    {
      q: "Можно ли использовать несколько iPhone или iPad с Wi-Fi Sync?",
      a: "Да. Несколько iPhone и iPad могут участвовать в одной синхронизации библиотеки. Версия GrepTag для iOS хранит пути относительно корневой папки приложения, поэтому одна и та же структура путей работает на всех iOS-устройствах, авторизованных в одном аккаунте iCloud."
    },
    {
      q: "Какое устройство лучше использовать как основной источник библиотеки — Mac или PC?",
      a: "Рекомендуем использовать один Mac или один PC в качестве основного устройства для библиотеки. Метаданные GrepTag отслеживают три отдельных типа путей: пути PC, пути iOS и пути Mac. iOS работает на нескольких iPhone и iPad, потому что использует относительные пути. Mac и PC хранят абсолютные пути для своего устройства, поэтому синхронизация наиболее надёжна, когда в вашей конфигурации есть только один Mac и один PC."
    },
    {
      q: "Может ли iPhone синхронизировать новые книги обратно на Mac или PC?",
      a: "Да. Если вы добавите книгу на iPhone в папку, которой ещё нет на вашем Mac или PC, GrepTag попросит создать папку и добавить её в список библиотеки на принимающем устройстве перед завершением синхронизации."
    }
  ],
  zh: [
    {
      q: "我可以在 iPhone、iPad、Mac 和 PC 之间同步我的书库吗？",
      a: "可以。Wi-Fi Sync 可在 iPhone、iPad、Mac 和 Windows PC 的任意组合之间传输书籍、标签、评分、关键词配置文件和文件夹结构。参与同步的所有 Apple 设备必须登录同一 iCloud 账户——iCloud 仅用于设备发现，不用于存储您的书籍。文件通过本地 Wi-Fi 网络传输，永远不会上传到任何开发者服务器。Wi-Fi Sync 是 Pro 功能。"
    },
    {
      q: "我可以将多部 iPhone 或 iPad 与 Wi-Fi Sync 一起使用吗？",
      a: "可以。多部 iPhone 和 iPad 都可以参与同一书库的同步。GrepTag 的 iOS 版本以相对于应用根文件夹的路径存储文件，因此相同的路径结构适用于登录同一 iCloud 账户的每台 iOS 设备。"
    },
    {
      q: "我应该用 Mac 还是 PC 作为书库的主要数据源？",
      a: "我们建议将一台 Mac 或一台 PC 作为主要书库设备。GrepTag 的元数据追踪三种不同的路径类型——PC 路径、iOS 路径和 Mac 路径。iOS 可在多部 iPhone 和 iPad 上使用，因为它使用相对路径。Mac 和 PC 各自存储本设备的绝对路径，因此当您的配置中只有一台 Mac 和一台 PC 时，同步最为可靠。"
    },
    {
      q: "我的 iPhone 可以将新书同步回 Mac 或 PC 吗？",
      a: "可以。如果您在 iPhone 上将书籍添加到 Mac 或 PC 上尚不存在的文件夹中，GrepTag 会在完成同步之前提示您在接收设备上创建该文件夹并将其添加到书库列表中。"
    }
  ],
  ja: [
    {
      q: "iPhone、iPad、Mac、PC の間でライブラリを同期できますか？",
      a: "はい。Wi-Fi Sync は iPhone、iPad、Mac、Windows PC のあらゆる組み合わせ間で、書籍、タグ、評価、キーワードプロファイル、フォルダ構造を転送します。同期に参加するすべての Apple デバイスは同じ iCloud アカウントでサインインしている必要があります。iCloud はデバイスの検出にのみ使用され、書籍の保存には使用されません。ファイルはローカル Wi-Fi ネットワーク経由で転送され、開発者サーバーにアップロードされることはありません。Wi-Fi Sync は Pro 機能です。"
    },
    {
      q: "Wi-Fi Sync で複数の iPhone や iPad を使用できますか？",
      a: "はい。複数の iPhone と iPad が同じライブラリの同期に参加できます。GrepTag の iOS 版はアプリのルートフォルダからの相対パスでパスを保存するため、同じ iCloud アカウントにサインインしているすべての iOS デバイスで同じパス構造が機能します。"
    },
    {
      q: "ライブラリの信頼できる情報源として Mac と PC のどちらを使うべきですか？",
      a: "1台の Mac または 1台の PC をメインのライブラリデバイスとして使用することをお勧めします。GrepTag のメタデータは、PC パス、iOS パス、Mac パスの3種類の異なるパスタイプを追跡します。iOS は相対パスを使用するため、複数の iPhone と iPad で機能します。Mac と PC はそれぞれ自分のデバイスの絶対パスを保存するため、Mac が1台、PC が1台だけの構成の場合、同期が最も安定します。"
    },
    {
      q: "iPhone の新しい書籍を Mac や PC に同期して戻すことはできますか？",
      a: "はい。iPhone で Mac または PC にまだ存在しないフォルダ内に書籍を追加した場合、GrepTag は同期を完了する前に受信側デバイスでフォルダを作成してライブラリリストに追加するよう促します。"
    }
  ],
  ko: [
    {
      q: "iPhone, iPad, Mac, PC 간에 라이브러리를 동기화할 수 있나요?",
      a: "네. Wi-Fi Sync는 iPhone, iPad, Mac, Windows PC의 모든 조합 간에 책, 태그, 평점, 키워드 프로필 및 폴더 구조를 전송합니다. 동기화에 참여하는 모든 Apple 기기는 동일한 iCloud 계정으로 로그인되어 있어야 합니다. iCloud는 기기 검색에만 사용되며 책을 저장하는 데는 사용되지 않습니다. 파일은 로컬 Wi-Fi 네트워크를 통해 전송되며 개발자 서버에 업로드되지 않습니다. Wi-Fi Sync는 Pro 기능입니다."
    },
    {
      q: "Wi-Fi Sync와 함께 여러 대의 iPhone 또는 iPad를 사용할 수 있나요?",
      a: "네. 여러 iPhone과 iPad가 모두 동일한 라이브러리 동기화에 참여할 수 있습니다. GrepTag의 iOS 버전은 앱의 루트 폴더를 기준으로 한 상대 경로로 경로를 저장하므로, 동일한 iCloud 계정으로 로그인된 모든 iOS 기기에서 동일한 경로 구조가 작동합니다."
    },
    {
      q: "라이브러리의 주요 데이터 소스로 Mac과 PC 중 어느 것을 사용해야 하나요?",
      a: "Mac 또는 PC 한 대를 기본 라이브러리 기기로 사용하는 것을 권장합니다. GrepTag의 메타데이터는 PC 경로, iOS 경로, Mac 경로의 세 가지 경로 유형을 추적합니다. iOS는 상대 경로를 사용하기 때문에 여러 iPhone과 iPad에서 작동합니다. Mac과 PC는 각각 자신의 기기에 대한 절대 경로를 저장하므로, 설정에 Mac 한 대와 PC 한 대만 있을 때 동기화가 가장 안정적입니다."
    },
    {
      q: "iPhone에서 새 책을 Mac이나 PC로 다시 동기화할 수 있나요?",
      a: "네. iPhone에서 Mac이나 PC에 아직 없는 폴더 안에 책을 추가하면, GrepTag가 동기화를 완료하기 전에 수신 기기에서 폴더를 만들고 라이브러리 목록에 추가하도록 안내합니다."
    }
  ],
  id: [
    {
      q: "Bisakah saya menyinkronkan perpustakaan antara iPhone, iPad, Mac, dan PC?",
      a: "Ya. Wi-Fi Sync mentransfer buku, tag, penilaian, profil kata kunci, dan struktur folder antara kombinasi apa pun dari iPhone, iPad, Mac, dan Windows PC. Semua perangkat Apple dalam sinkronisasi harus masuk ke akun iCloud yang sama — iCloud hanya digunakan untuk penemuan perangkat, bukan untuk menyimpan buku Anda. File berpindah melalui jaringan Wi-Fi lokal Anda dan tidak pernah diunggah ke server pengembang mana pun. Wi-Fi Sync adalah fitur Pro."
    },
    {
      q: "Bisakah saya menggunakan lebih dari satu iPhone atau iPad dengan Wi-Fi Sync?",
      a: "Ya. Beberapa iPhone dan iPad semuanya dapat berpartisipasi dalam sinkronisasi perpustakaan yang sama. Versi iOS GrepTag menyimpan jalur relatif terhadap folder root aplikasi, sehingga struktur jalur yang sama berfungsi di setiap perangkat iOS yang masuk ke akun iCloud yang sama."
    },
    {
      q: "Haruskah saya menggunakan Mac atau PC sebagai sumber utama perpustakaan saya?",
      a: "Kami menyarankan untuk menjaga satu Mac atau satu PC sebagai perangkat perpustakaan utama. Metadata GrepTag melacak tiga jenis jalur terpisah — jalur PC, jalur iOS, dan jalur Mac. iOS bekerja di beberapa iPhone dan iPad karena menggunakan jalur relatif. Mac dan PC masing-masing menyimpan jalur absolut untuk perangkat mereka sendiri, sehingga sinkronisasi paling andal ketika hanya ada satu Mac dan satu PC dalam pengaturan Anda."
    },
    {
      q: "Bisakah iPhone saya menyinkronkan buku baru kembali ke Mac atau PC saya?",
      a: "Ya. Jika Anda menambahkan buku di iPhone ke dalam folder yang belum ada di Mac atau PC Anda, GrepTag akan meminta Anda membuat folder tersebut dan menambahkannya ke daftar perpustakaan di perangkat penerima sebelum menyelesaikan sinkronisasi."
    }
  ],
  ms: [
    {
      q: "Bolehkah saya menyegerakkan perpustakaan antara iPhone, iPad, Mac dan PC?",
      a: "Ya. Wi-Fi Sync memindahkan buku, tag, penilaian, profil kata kunci dan struktur folder antara mana-mana kombinasi iPhone, iPad, Mac dan Windows PC. Semua peranti Apple dalam penyegerakan mesti log masuk ke akaun iCloud yang sama — iCloud hanya digunakan untuk penemuan peranti, bukan untuk menyimpan buku anda. Fail berpindah melalui rangkaian Wi-Fi tempatan anda dan tidak pernah dimuat naik ke mana-mana pelayan pembangun. Wi-Fi Sync adalah ciri Pro."
    },
    {
      q: "Bolehkah saya menggunakan lebih daripada satu iPhone atau iPad dengan Wi-Fi Sync?",
      a: "Ya. Beberapa iPhone dan iPad semuanya boleh menyertai penyegerakan perpustakaan yang sama. Versi iOS GrepTag menyimpan laluan relatif kepada folder akar aplikasi, jadi struktur laluan yang sama berfungsi di setiap peranti iOS yang log masuk ke akaun iCloud yang sama."
    },
    {
      q: "Haruskah saya menggunakan Mac atau PC sebagai sumber utama perpustakaan saya?",
      a: "Kami mengesyorkan mengekalkan satu Mac atau satu PC sebagai peranti perpustakaan utama. Metadata GrepTag menjejaki tiga jenis laluan yang berbeza — laluan PC, laluan iOS dan laluan Mac. iOS berfungsi di beberapa iPhone dan iPad kerana ia menggunakan laluan relatif. Mac dan PC masing-masing menyimpan laluan mutlak untuk peranti mereka sendiri, jadi penyegerakan paling boleh dipercayai apabila hanya ada satu Mac dan satu PC dalam persediaan anda."
    },
    {
      q: "Bolehkah iPhone saya menyegerakkan buku baharu semula ke Mac atau PC saya?",
      a: "Ya. Jika anda menambah buku pada iPhone dalam folder yang belum wujud pada Mac atau PC anda, GrepTag akan meminta anda membuat folder dan menambahkannya ke senarai perpustakaan pada peranti penerima sebelum melengkapkan penyegerakan."
    }
  ]
};

const LANGS = Object.keys(TRANSLATIONS);

for (const lang of LANGS) {
  const filePath = path.join(base, lang, 'translation.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const faq = data.redesign.grepTagPage.faq;
  // Keep indices 0–5 (existing translated entries), replace index 6 (old single sync Q) with 4 new
  data.redesign.grepTagPage.faq = [...faq.slice(0, 6), ...TRANSLATIONS[lang]];
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log(`✅ ${lang}: ${data.redesign.grepTagPage.faq.length} FAQ entries`);
}
console.log('\n🎉 Done!');
