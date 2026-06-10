const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, '..', 'src', 'locales');

const T = {

es: {
  table: {
    eyebrow: "Comparar lectores",
    title: "Elige el lector para tu plataforma.",
    desc: "Todos los lectores comparten la misma filosofía: procesamiento en dispositivo, sin rastreo. Las diferencias son de plataforma y flujo de trabajo.",
    feature: "Característica",
    badges: { universal: "Compra universal", comingSoon: "Próximamente", edition: "Edición" },
    editions: { apple: "BiblioFuse Reader", pc: "PC Reader", android: "Android Reader" },
    subtitles: { apple: "iPhone · iPad · Mac", pc: "Windows", android: "Teléfono · Tablet" },
    rows: [
      ["Plataforma", "iPhone · iPad · Mac", "PC Windows", "Teléfono · tablet Android"],
      ["Comprimir / combinar", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["Formatos de lectura", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · TXT", "EPUB · PDF · CBZ · ZIP · TXT"],
      ["Funciones del lector", "TTS, peek zoom, auto-desplazamiento", "Progreso, valoraciones, etiquetas", "Progreso, valoraciones, etiquetas"],
      ["Streaming PC / Mac → iPhone", "Wi-Fi + Tailscale|Solo LAN: no totalmente probado", "Wi-Fi + Tailscale|Solo LAN: no totalmente probado", "-"],
      ["Fuentes de biblioteca", "Local + iCloud; SMB vía streaming", "Carpetas locales", "Local + carpetas externas"],
      ["Estantería iCloud", "Sincronización entre dispositivos", "-", "-"],
      ["Idiomas", "12 idiomas|EN ES FR NL PT RU ZH JA KO ID MS", "11 idiomas", "12 idiomas|EN ES FR NL PT RU ZH JA KO ID MS"]
    ],
    unique: "Único", where: "Dónde conseguirlo", iosNote: "iOS y Mac", pcNotify: "Notifícame cuando esté disponible"
  },
  toolsSection: {
    eyebrow: "Herramientas independientes",
    title: "También disponible como herramientas ligeras",
    web: { name: "BiblioFuse Web", subtitle: "Gratis · Navegador", desc: "Comprime y combina archivos EPUB, CBZ y PDF en tu navegador. Sin instalación, sin cuenta.", cta: "Abrir herramienta gratuita" },
    pcCbz: { name: "BiblioFuse CBZ", subtitle: "Windows · Microsoft Store", desc: "Comprime y combina archivos de cómics en Windows." },
    pcEpub: { name: "BiblioFuse EPUB", subtitle: "Windows · Microsoft Store", desc: "Comprime y combina archivos EPUB en Windows." }
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Preguntas comunes",
    items: [
      { q: "¿Una compra cubre todas las plataformas?", a: "No. iOS + Mac es una compra universal única — un pago cubre iPhone, iPad y Mac. El Android Reader, el PC Reader y las herramientas de PC se venden por separado." },
      { q: "¿Cómo funciona el streaming de Mac o PC al iPhone?", a: "Tu Mac o PC ejecuta un servidor local y escribe la dirección de conexión en iCloud Drive. Tu iPhone la detecta automáticamente. Ambos dispositivos deben tener el mismo estado de Tailscale: ambos activados (funciona en casa y remotamente) o ambos desactivados (solo mismo Wi-Fi, no totalmente probado). Si solo un dispositivo tiene Tailscale activado, la conexión fallará. Mantener Tailscale siempre activado en ambos da la experiencia más consistente." },
      { q: "¿Qué necesito para configurar el streaming?", a: "Tu Mac o PC y tu iPhone deben estar en la misma cuenta de iCloud, y ambos deben tener Tailscale activado o desactivado — deben coincidir. No es necesario activar el nodo de salida de Tailscale. Las cuentas de iCloud y Tailscale pueden usar correos diferentes." },
      { q: "¿Por qué Android no puede recibir libros de Mac o PC?", a: "La app de Android usa una base de código diferente sin integración de iCloud, que es como funciona el protocolo de streaming. El mejor flujo de trabajo para Android es sincronizar archivos al teléfono con Syncthing u otra herramienta similar y añadir esa carpeta como fuente de biblioteca en la app." },
      { q: "¿Cuál es la diferencia entre el PC Reader y las herramientas EPUB / CBZ para PC?", a: "El PC Reader es una app de lectura completa — abre libros, gestiona tu biblioteca, comprime archivos y transmite al iPhone. Las herramientas EPUB y CBZ para PC son apps más ligeras y baratas centradas solo en comprimir y combinar, sin lector." },
      { q: "¿Cuándo estará disponible el PC Reader?", a: "El PC Reader está esperando la aprobación de Microsoft Store. Envía un correo a support@mlogictech.com con el asunto \"Notify me: BiblioFuse PC Reader\" y te avisaremos cuando se lance." }
    ]
  }
},

fr: {
  table: {
    eyebrow: "Comparer les lecteurs",
    title: "Choisissez le lecteur pour votre plateforme.",
    desc: "Tous les lecteurs partagent la même philosophie : traitement sur l'appareil, sans suivi. Les différences concernent la plateforme et le flux de travail.",
    feature: "Fonctionnalité",
    badges: { universal: "Achat universel", comingSoon: "Bientôt disponible", edition: "Édition" },
    editions: { apple: "BiblioFuse Reader", pc: "PC Reader", android: "Android Reader" },
    subtitles: { apple: "iPhone · iPad · Mac", pc: "Windows", android: "Téléphone · Tablette" },
    rows: [
      ["Plateforme", "iPhone · iPad · Mac", "PC Windows", "Téléphone · tablette Android"],
      ["Compresser / fusionner", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["Formats de lecture", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · TXT", "EPUB · PDF · CBZ · ZIP · TXT"],
      ["Fonctions du lecteur", "TTS, peek zoom, défilement auto", "Progression, notes, étiquettes", "Progression, notes, étiquettes"],
      ["Streaming PC / Mac → iPhone", "Wi-Fi + Tailscale|LAN uniquement : non entièrement testé", "Wi-Fi + Tailscale|LAN uniquement : non entièrement testé", "-"],
      ["Sources de bibliothèque", "Local + iCloud ; SMB via streaming", "Dossiers locaux", "Local + dossiers externes"],
      ["Bibliothèque iCloud", "Synchronisation multi-appareils", "-", "-"],
      ["Langues", "12 langues|EN ES FR NL PT RU ZH JA KO ID MS", "11 langues", "12 langues|EN ES FR NL PT RU ZH JA KO ID MS"]
    ],
    unique: "Unique", where: "Où l'obtenir", iosNote: "iOS et Mac", pcNotify: "Me notifier quand disponible"
  },
  toolsSection: {
    eyebrow: "Outils autonomes",
    title: "Aussi disponible en outils légers",
    web: { name: "BiblioFuse Web", subtitle: "Gratuit · Navigateur", desc: "Compressez et fusionnez des fichiers EPUB, CBZ et PDF dans votre navigateur. Sans installation, sans compte.", cta: "Lancer l'outil gratuit" },
    pcCbz: { name: "BiblioFuse CBZ", subtitle: "Windows · Microsoft Store", desc: "Compressez et fusionnez des archives de bandes dessinées sur Windows." },
    pcEpub: { name: "BiblioFuse EPUB", subtitle: "Windows · Microsoft Store", desc: "Compressez et fusionnez des fichiers EPUB sur Windows." }
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions fréquentes",
    items: [
      { q: "Un seul achat couvre-t-il toutes les plateformes ?", a: "Non. iOS + Mac est un achat universel — un paiement couvre iPhone, iPad et Mac. Le Android Reader, le PC Reader et les outils PC sont vendus séparément." },
      { q: "Comment fonctionne le streaming de Mac ou PC vers iPhone ?", a: "Votre Mac ou PC exécute un serveur local et écrit l'adresse de connexion dans iCloud Drive. Votre iPhone la détecte automatiquement. Les deux appareils doivent être dans le même état Tailscale : les deux activés (fonctionne à domicile et à distance) ou les deux désactivés (même Wi-Fi uniquement, non entièrement testé). Si un seul appareil a Tailscale activé, la connexion échouera. Garder Tailscale toujours activé sur les deux offre l'expérience la plus cohérente." },
      { q: "De quoi ai-je besoin pour configurer le streaming ?", a: "Votre Mac ou PC et votre iPhone doivent être connectés au même compte iCloud, et les deux doivent avoir Tailscale activé ou désactivé — ils doivent correspondre. Le nœud de sortie Tailscale n'a pas besoin d'être activé. Les comptes iCloud et Tailscale peuvent utiliser des adresses e-mail différentes." },
      { q: "Pourquoi Android ne peut-il pas recevoir des livres de Mac ou PC ?", a: "L'application Android utilise une base de code différente sans intégration iCloud, qui est le mécanisme de connexion du streaming. Le meilleur flux de travail pour Android est de synchroniser les fichiers sur votre téléphone avec Syncthing ou un outil similaire, puis d'ajouter ce dossier comme source de bibliothèque dans l'application." },
      { q: "Quelle est la différence entre le PC Reader et les outils EPUB / CBZ pour PC ?", a: "Le PC Reader est une application de lecture complète — il ouvre des livres, gère votre bibliothèque, compresse des fichiers et streame vers iPhone. Les outils EPUB et CBZ pour PC sont des applications plus légères et moins chères, axées uniquement sur la compression et la fusion, sans lecteur." },
      { q: "Quand le PC Reader sera-t-il disponible ?", a: "Le PC Reader attend l'approbation du Microsoft Store. Envoyez un e-mail à support@mlogictech.com avec l'objet « Notify me: BiblioFuse PC Reader » et nous vous informerons de son lancement." }
    ]
  }
},

nl: {
  table: {
    eyebrow: "Lezers vergelijken",
    title: "Kies de lezer voor jouw platform.",
    desc: "Alle lezers delen dezelfde filosofie: verwerking op het apparaat, geen tracking. Verschillen gaan over platform en workflow.",
    feature: "Functie",
    badges: { universal: "Universele aankoop", comingSoon: "Binnenkort beschikbaar", edition: "Editie" },
    editions: { apple: "BiblioFuse Reader", pc: "PC Reader", android: "Android Reader" },
    subtitles: { apple: "iPhone · iPad · Mac", pc: "Windows", android: "Telefoon · Tablet" },
    rows: [
      ["Platform", "iPhone · iPad · Mac", "Windows-pc", "Android-telefoon · tablet"],
      ["Comprimeren / samenvoegen", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["Leesformaten", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · TXT", "EPUB · PDF · CBZ · ZIP · TXT"],
      ["Leesfuncties", "TTS, peek zoom, automatisch scrollen", "Voortgang, beoordelingen, labels", "Voortgang, beoordelingen, labels"],
      ["PC / Mac → iPhone streaming", "Wi-Fi + Tailscale|Alleen LAN: niet volledig getest", "Wi-Fi + Tailscale|Alleen LAN: niet volledig getest", "-"],
      ["Bibliotheebbronnen", "Lokaal + iCloud; SMB via streaming", "Lokale mappen", "Lokaal + externe mappen"],
      ["iCloud-boekenplank", "Synchronisatie tussen apparaten", "-", "-"],
      ["Talen", "12 talen|EN ES FR NL PT RU ZH JA KO ID MS", "11 talen", "12 talen|EN ES FR NL PT RU ZH JA KO ID MS"]
    ],
    unique: "Uniek", where: "Waar te verkrijgen", iosNote: "iOS en Mac", pcNotify: "Meld me wanneer beschikbaar"
  },
  toolsSection: {
    eyebrow: "Losse tools",
    title: "Ook beschikbaar als lichte tools",
    web: { name: "BiblioFuse Web", subtitle: "Gratis · Browser", desc: "Comprimeer en voeg EPUB-, CBZ- en PDF-bestanden samen in je browser. Geen installatie, geen account.", cta: "Gratis tool starten" },
    pcCbz: { name: "BiblioFuse CBZ", subtitle: "Windows · Microsoft Store", desc: "Comprimeer en voeg stripboekarchief samen op Windows." },
    pcEpub: { name: "BiblioFuse EPUB", subtitle: "Windows · Microsoft Store", desc: "Comprimeer en voeg EPUB-bestanden samen op Windows." }
  },
  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Veelgestelde vragen",
    items: [
      { q: "Dekt één aankoop alle platforms?", a: "Nee. iOS + Mac is één universele aankoop — één betaling dekt iPhone, iPad en Mac. De Android Reader, PC Reader en pc-tools worden elk afzonderlijk verkocht." },
      { q: "Hoe werkt streaming van Mac of pc naar iPhone?", a: "Je Mac of pc draait een lokale server en schrijft het verbindingsadres naar iCloud Drive. Je iPhone pikt dit automatisch op. Beide apparaten moeten dezelfde Tailscale-status hebben: beide aan (werkt thuis en op afstand) of beide uit (alleen hetzelfde Wi-Fi, niet volledig getest). Als slechts één apparaat Tailscale heeft ingeschakeld, mislukt de verbinding. Tailscale altijd ingeschakeld houden op beide apparaten geeft de meest consistente ervaring." },
      { q: "Wat heb ik nodig om streaming in te stellen?", a: "Je Mac of pc en iPhone moeten allebei zijn aangemeld bij hetzelfde iCloud-account, en Tailscale moet op beide aan of uit staan — ze moeten overeenkomen. De Tailscale-exitnode hoeft niet ingeschakeld te zijn. iCloud- en Tailscale-accounts kunnen verschillende e-mailadressen gebruiken." },
      { q: "Waarom kan Android geen boeken ontvangen van Mac of pc?", a: "De Android-app gebruikt een andere codebase zonder iCloud-integratie, wat de basis is van het streaming-protocol. De beste werkwijze voor Android is bestanden synchroniseren naar je telefoon met Syncthing of een vergelijkbare tool, en die map vervolgens als bibliotheekbron toevoegen in de app." },
      { q: "Wat is het verschil tussen de PC Reader en de EPUB / CBZ-tools voor pc?", a: "De PC Reader is een volledige leesapp — hij opent boeken, beheert je bibliotheek, comprimeert bestanden en streamt naar iPhone. De EPUB- en CBZ-tools voor pc zijn lichtere, goedkopere apps die zich alleen richten op comprimeren en samenvoegen, zonder lezer." },
      { q: "Wanneer is de PC Reader beschikbaar?", a: "De PC Reader wacht op goedkeuring van de Microsoft Store. Stuur een e-mail naar support@mlogictech.com met als onderwerp \"Notify me: BiblioFuse PC Reader\" en we laten je weten wanneer hij uitkomt." }
    ]
  }
},

pt: {
  table: {
    eyebrow: "Comparar leitores",
    title: "Escolha o leitor para a sua plataforma.",
    desc: "Todos os leitores partilham a mesma filosofia: processamento no dispositivo, sem rastreamento. As diferenças são de plataforma e fluxo de trabalho.",
    feature: "Funcionalidade",
    badges: { universal: "Compra universal", comingSoon: "Em breve", edition: "Edição" },
    editions: { apple: "BiblioFuse Reader", pc: "PC Reader", android: "Android Reader" },
    subtitles: { apple: "iPhone · iPad · Mac", pc: "Windows", android: "Telemóvel · Tablet" },
    rows: [
      ["Plataforma", "iPhone · iPad · Mac", "PC Windows", "Telemóvel · tablet Android"],
      ["Comprimir / combinar", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["Formatos de leitura", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · TXT", "EPUB · PDF · CBZ · ZIP · TXT"],
      ["Funcionalidades do leitor", "TTS, peek zoom, scroll automático", "Progresso, avaliações, etiquetas", "Progresso, avaliações, etiquetas"],
      ["Streaming PC / Mac → iPhone", "Wi-Fi + Tailscale|Apenas LAN: não totalmente testado", "Wi-Fi + Tailscale|Apenas LAN: não totalmente testado", "-"],
      ["Fontes da biblioteca", "Local + iCloud; SMB via streaming", "Pastas locais", "Local + pastas externas"],
      ["Estante iCloud", "Sincronização entre dispositivos", "-", "-"],
      ["Idiomas", "12 idiomas|EN ES FR NL PT RU ZH JA KO ID MS", "11 idiomas", "12 idiomas|EN ES FR NL PT RU ZH JA KO ID MS"]
    ],
    unique: "Único", where: "Onde obter", iosNote: "iOS e Mac", pcNotify: "Notifique-me quando disponível"
  },
  toolsSection: {
    eyebrow: "Ferramentas independentes",
    title: "Também disponível como ferramentas leves",
    web: { name: "BiblioFuse Web", subtitle: "Grátis · Navegador", desc: "Comprima e combine ficheiros EPUB, CBZ e PDF no seu navegador. Sem instalação, sem conta.", cta: "Abrir ferramenta gratuita" },
    pcCbz: { name: "BiblioFuse CBZ", subtitle: "Windows · Microsoft Store", desc: "Comprima e combine arquivos de banda desenhada no Windows." },
    pcEpub: { name: "BiblioFuse EPUB", subtitle: "Windows · Microsoft Store", desc: "Comprima e combine ficheiros EPUB no Windows." }
  },
  faq: {
    eyebrow: "Perguntas frequentes",
    title: "Perguntas comuns",
    items: [
      { q: "Uma compra cobre todas as plataformas?", a: "Não. iOS + Mac é uma compra universal — um pagamento cobre iPhone, iPad e Mac. O Android Reader, PC Reader e as ferramentas de PC são vendidos separadamente." },
      { q: "Como funciona o streaming de Mac ou PC para iPhone?", a: "O seu Mac ou PC executa um servidor local e escreve o endereço de ligação no iCloud Drive. O seu iPhone deteta-o automaticamente. Ambos os dispositivos devem estar no mesmo estado de Tailscale: ambos ligados (funciona em casa e remotamente) ou ambos desligados (apenas mesmo Wi-Fi, não totalmente testado). Se apenas um dispositivo tiver o Tailscale ligado, a ligação falhará. Manter o Tailscale sempre ligado em ambos oferece a experiência mais consistente." },
      { q: "O que preciso para configurar o streaming?", a: "O seu Mac ou PC e o iPhone devem estar com sessão iniciada na mesma conta iCloud, e ambos devem ter o Tailscale ligado ou desligado — devem corresponder. O nó de saída do Tailscale não precisa de estar ativado. As contas iCloud e Tailscale podem usar endereços de e-mail diferentes." },
      { q: "Por que o Android não pode receber livros do Mac ou PC?", a: "A app Android usa uma base de código diferente sem integração iCloud, que é o mecanismo do protocolo de streaming. O melhor fluxo de trabalho para Android é sincronizar ficheiros para o telemóvel com Syncthing ou ferramenta similar e adicionar essa pasta como fonte de biblioteca na app." },
      { q: "Qual é a diferença entre o PC Reader e as ferramentas EPUB / CBZ para PC?", a: "O PC Reader é uma app de leitura completa — abre livros, gere a sua biblioteca, comprime ficheiros e faz streaming para iPhone. As ferramentas EPUB e CBZ para PC são apps mais leves e baratas focadas apenas em compressão e combinação, sem leitor." },
      { q: "Quando estará disponível o PC Reader?", a: "O PC Reader aguarda aprovação da Microsoft Store. Envie um e-mail para support@mlogictech.com com o assunto \"Notify me: BiblioFuse PC Reader\" e avisaremos quando for lançado." }
    ]
  }
},

ru: {
  table: {
    eyebrow: "Сравнить читалки",
    title: "Выберите читалку для своей платформы.",
    desc: "Все читалки придерживаются одной философии: обработка на устройстве, без отслеживания. Различия касаются платформы и рабочего процесса.",
    feature: "Функция",
    badges: { universal: "Универсальная покупка", comingSoon: "Скоро", edition: "Версия" },
    editions: { apple: "BiblioFuse Reader", pc: "PC Reader", android: "Android Reader" },
    subtitles: { apple: "iPhone · iPad · Mac", pc: "Windows", android: "Телефон · Планшет" },
    rows: [
      ["Платформа", "iPhone · iPad · Mac", "Windows ПК", "Android-телефон · планшет"],
      ["Сжатие / объединение", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["Форматы чтения", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · TXT", "EPUB · PDF · CBZ · ZIP · TXT"],
      ["Функции читалки", "TTS, peek zoom, авто-прокрутка", "Прогресс, оценки, метки", "Прогресс, оценки, метки"],
      ["Стриминг ПК / Mac → iPhone", "Wi-Fi + Tailscale|Только LAN: не полностью протестировано", "Wi-Fi + Tailscale|Только LAN: не полностью протестировано", "-"],
      ["Источники библиотеки", "Локальные + iCloud; SMB через стриминг", "Локальные папки", "Локальные + внешние папки"],
      ["Полка iCloud", "Синхронизация между устройствами", "-", "-"],
      ["Языки", "12 языков|EN ES FR NL PT RU ZH JA KO ID MS", "11 языков", "12 языков|EN ES FR NL PT RU ZH JA KO ID MS"]
    ],
    unique: "Уникально", where: "Где скачать", iosNote: "iOS и Mac", pcNotify: "Уведомить о выходе"
  },
  toolsSection: {
    eyebrow: "Отдельные инструменты",
    title: "Доступно также в виде лёгких инструментов",
    web: { name: "BiblioFuse Web", subtitle: "Бесплатно · Браузер", desc: "Сжимайте и объединяйте файлы EPUB, CBZ и PDF прямо в браузере. Без установки, без аккаунта.", cta: "Открыть бесплатный инструмент" },
    pcCbz: { name: "BiblioFuse CBZ", subtitle: "Windows · Microsoft Store", desc: "Сжимайте и объединяйте архивы комиксов на Windows." },
    pcEpub: { name: "BiblioFuse EPUB", subtitle: "Windows · Microsoft Store", desc: "Сжимайте и объединяйте файлы EPUB на Windows." }
  },
  faq: {
    eyebrow: "FAQ",
    title: "Частые вопросы",
    items: [
      { q: "Одна покупка охватывает все платформы?", a: "Нет. iOS + Mac — это единая универсальная покупка: один платёж покрывает iPhone, iPad и Mac. Android Reader, PC Reader и инструменты для ПК продаются отдельно." },
      { q: "Как работает стриминг с Mac или ПК на iPhone?", a: "Ваш Mac или ПК запускает локальный сервер и записывает адрес подключения в iCloud Drive. iPhone подхватывает его автоматически. Оба устройства должны быть в одинаковом состоянии Tailscale: оба включены (работает дома и удалённо) или оба выключены (только одна Wi-Fi сеть, не полностью протестировано). Если Tailscale включён только на одном устройстве, соединение не установится. Держать Tailscale включённым на обоих устройствах — наиболее надёжный вариант." },
      { q: "Что нужно для настройки стриминга?", a: "Ваш Mac или ПК и iPhone должны быть авторизованы в одном аккаунте iCloud, а Tailscale должен быть включён или выключен на обоих — состояния должны совпадать. Включать exit node в Tailscale не нужно. Аккаунты iCloud и Tailscale могут использовать разные адреса электронной почты." },
      { q: "Почему Android не может получать книги с Mac или ПК?", a: "Приложение Android использует другую кодовую базу без интеграции iCloud, которая лежит в основе протокола стриминга. Лучший подход для Android — синхронизировать файлы на телефон через Syncthing или аналогичный инструмент, а затем добавить эту папку как источник библиотеки в приложении." },
      { q: "В чём разница между PC Reader и инструментами EPUB / CBZ для ПК?", a: "PC Reader — полноценное приложение для чтения: открывает книги, управляет библиотекой, сжимает файлы и стримит на iPhone. Инструменты EPUB и CBZ для ПК — более лёгкие и дешёвые приложения, предназначенные только для сжатия и объединения, без читалки." },
      { q: "Когда будет доступен PC Reader?", a: "PC Reader ожидает одобрения в Microsoft Store. Напишите на support@mlogictech.com с темой «Notify me: BiblioFuse PC Reader» — мы сообщим о запуске." }
    ]
  }
},

zh: {
  table: {
    eyebrow: "阅读器对比",
    title: "为您的平台选择阅读器。",
    desc: "所有阅读器均采用相同理念：本地处理，不追踪用户。差异在于平台与工作流程。",
    feature: "功能",
    badges: { universal: "通用购买", comingSoon: "即将推出", edition: "版本" },
    editions: { apple: "BiblioFuse Reader", pc: "PC Reader", android: "Android Reader" },
    subtitles: { apple: "iPhone · iPad · Mac", pc: "Windows", android: "手机 · 平板" },
    rows: [
      ["平台", "iPhone · iPad · Mac", "Windows PC", "Android 手机 · 平板"],
      ["压缩 / 合并", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["阅读格式", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · TXT", "EPUB · PDF · CBZ · ZIP · TXT"],
      ["阅读器功能", "TTS、局部放大、自动滚屏", "阅读进度、评分、标签", "阅读进度、评分、标签"],
      ["PC / Mac → iPhone 串流", "Wi-Fi + Tailscale|仅局域网：未完全测试", "Wi-Fi + Tailscale|仅局域网：未完全测试", "-"],
      ["书库来源", "本地 + iCloud；SMB 通过串流", "本地文件夹", "本地 + 外部文件夹"],
      ["iCloud 书架", "跨设备同步", "-", "-"],
      ["语言支持", "12 种语言|EN ES FR NL PT RU ZH JA KO ID MS", "11 种语言", "12 种语言|EN ES FR NL PT RU ZH JA KO ID MS"]
    ],
    unique: "独特", where: "下载途径", iosNote: "iOS 和 Mac", pcNotify: "上线时通知我"
  },
  toolsSection: {
    eyebrow: "独立工具",
    title: "也可作为轻量工具使用",
    web: { name: "BiblioFuse Web", subtitle: "免费 · 浏览器", desc: "在浏览器中压缩和合并 EPUB、CBZ 和 PDF 文件。无需安装，无需账号。", cta: "启动免费工具" },
    pcCbz: { name: "BiblioFuse CBZ", subtitle: "Windows · Microsoft Store", desc: "在 Windows 上压缩和合并漫画档案。" },
    pcEpub: { name: "BiblioFuse EPUB", subtitle: "Windows · Microsoft Store", desc: "在 Windows 上压缩和合并 EPUB 文件。" }
  },
  faq: {
    eyebrow: "常见问题",
    title: "常见问题",
    items: [
      { q: "一次购买可以覆盖所有平台吗？", a: "不可以。iOS + Mac 是一次通用购买——一次付款涵盖 iPhone、iPad 和 Mac。Android Reader、PC Reader 和 PC 工具各自单独销售。" },
      { q: "从 Mac 或 PC 向 iPhone 串流是如何工作的？", a: "您的 Mac 或 PC 运行一个本地服务器，并将连接地址写入 iCloud Drive，iPhone 会自动检测到它。两台设备必须处于相同的 Tailscale 状态：都开启（在家和远程都能使用）或都关闭（仅限同一 Wi-Fi，未完全测试）。若只有一台设备开启了 Tailscale，连接将失败。在两台设备上始终保持 Tailscale 开启可获得最稳定的体验。" },
      { q: "设置串流需要什么？", a: "您的 Mac 或 PC 与 iPhone 必须登录同一个 iCloud 账号，且两者的 Tailscale 状态必须一致（同时开启或同时关闭）。无需开启 Tailscale 出口节点。iCloud 和 Tailscale 账号可以使用不同的电子邮件地址。" },
      { q: "为什么 Android 无法从 Mac 或 PC 接收书籍？", a: "Android 应用使用不同的代码库，没有 iCloud 集成，而 iCloud 正是串流握手机制的基础。Android 的最佳方案是使用 Syncthing 或类似工具将文件同步到手机，然后在应用中添加该文件夹作为书库来源。" },
      { q: "PC Reader 和 PC EPUB / CBZ 工具有什么区别？", a: "PC Reader 是完整的阅读应用——可打开书籍、管理书库、压缩文件并向 iPhone 串流。EPUB 和 CBZ PC 工具是更轻量、更便宜的应用，仅专注于压缩和合并，没有阅读功能。" },
      { q: "PC Reader 何时上线？", a: "PC Reader 正在等待 Microsoft Store 审核。请发送邮件至 support@mlogictech.com，主题填写「Notify me: BiblioFuse PC Reader」，上线后我们会通知您。" }
    ]
  }
},

ja: {
  table: {
    eyebrow: "リーダーを比較",
    title: "プラットフォームに合ったリーダーを選んでください。",
    desc: "すべてのリーダーは同じ理念を共有しています：デバイス上での処理、トラッキングなし。違いはプラットフォームとワークフローにあります。",
    feature: "機能",
    badges: { universal: "ユニバーサル購入", comingSoon: "近日公開", edition: "エディション" },
    editions: { apple: "BiblioFuse Reader", pc: "PC Reader", android: "Android Reader" },
    subtitles: { apple: "iPhone · iPad · Mac", pc: "Windows", android: "スマートフォン · タブレット" },
    rows: [
      ["プラットフォーム", "iPhone · iPad · Mac", "Windows PC", "Android スマートフォン · タブレット"],
      ["圧縮 / 結合", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["読書フォーマット", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · TXT", "EPUB · PDF · CBZ · ZIP · TXT"],
      ["リーダー機能", "TTS、ピークズーム、自動スクロール", "進捗、評価、タグ", "進捗、評価、タグ"],
      ["PC / Mac → iPhone ストリーミング", "Wi-Fi + Tailscale|LAN のみ：未完全テスト", "Wi-Fi + Tailscale|LAN のみ：未完全テスト", "-"],
      ["ライブラリソース", "ローカル + iCloud；ストリーミング経由SMB", "ローカルフォルダ", "ローカル + 外部フォルダ"],
      ["iCloud 本棚", "デバイス間同期", "-", "-"],
      ["対応言語", "12 言語|EN ES FR NL PT RU ZH JA KO ID MS", "11 言語", "12 言語|EN ES FR NL PT RU ZH JA KO ID MS"]
    ],
    unique: "独自", where: "入手方法", iosNote: "iOS・Mac", pcNotify: "公開時に通知する"
  },
  toolsSection: {
    eyebrow: "単体ツール",
    title: "軽量ツールとしても利用可能",
    web: { name: "BiblioFuse Web", subtitle: "無料 · ブラウザ", desc: "ブラウザ上でEPUB、CBZ、PDFファイルを圧縮・結合。インストール不要、アカウント不要。", cta: "無料ツールを起動" },
    pcCbz: { name: "BiblioFuse CBZ", subtitle: "Windows · Microsoft Store", desc: "Windows でコミックアーカイブを圧縮・結合。" },
    pcEpub: { name: "BiblioFuse EPUB", subtitle: "Windows · Microsoft Store", desc: "Windows で EPUB ファイルを圧縮・結合。" }
  },
  faq: {
    eyebrow: "よくある質問",
    title: "よくある質問",
    items: [
      { q: "1回の購入ですべてのプラットフォームをカバーできますか？", a: "いいえ。iOS + Mac はユニバーサル購入で、1回の支払いでiPhone、iPad、Macをカバーします。Android Reader、PC Reader、PCツールはそれぞれ別途販売されています。" },
      { q: "MacまたはPCからiPhoneへのストリーミングはどのように機能しますか？", a: "MacまたはPCがローカルサーバーを起動し、接続アドレスをiCloud Driveに書き込みます。iPhoneが自動的に検出します。両デバイスのTailscaleの状態を一致させる必要があります：両方オン（自宅でもリモートでも使用可能）または両方オフ（同一Wi-Fiのみ、未完全テスト）。一方のデバイスだけTailscaleがオンになっていると接続に失敗します。両デバイスで常にTailscaleをオンにしておくと最も安定した体験が得られます。" },
      { q: "ストリーミングの設定に何が必要ですか？", a: "MacまたはPCとiPhoneが同じiCloudアカウントにサインインしており、両デバイスのTailscaleの状態が一致している必要があります（両方オンまたは両方オフ）。TailscaleのExitノードを有効にする必要はありません。iCloudとTailscaleのアカウントは異なるメールアドレスを使用できます。" },
      { q: "AndroidはなぜMacやPCから本を受け取れないのですか？", a: "AndroidアプリはiCloud統合のない別のコードベースを使用しており、iCloudはストリーミングのハンドシェイクの仕組みです。Androidの最善の方法は、SyncthingなどのツールでスマートフォンにファイルをRで同期し、そのフォルダをアプリのライブラリソースとして追加することです。" },
      { q: "PC ReaderとPC EPUB / CBZツールの違いは何ですか？", a: "PC Readerは完全な読書アプリで、本を開き、ライブラリを管理し、ファイルを圧縮し、iPhoneへストリーミングします。PC EPUB・CBZツールは、読書機能なしで圧縮と結合のみに特化した、より軽量で安価なアプリです。" },
      { q: "PC Readerはいつ公開されますか？", a: "PC ReaderはMicrosoft Storeの承認を待っています。support@mlogictech.comに「Notify me: BiblioFuse PC Reader」という件名でメールをお送りください。公開時にお知らせします。" }
    ]
  }
},

ko: {
  table: {
    eyebrow: "리더 비교",
    title: "플랫폼에 맞는 리더를 선택하세요.",
    desc: "모든 리더는 동일한 철학을 공유합니다: 기기 내 처리, 추적 없음. 차이는 플랫폼과 워크플로우에 있습니다.",
    feature: "기능",
    badges: { universal: "통합 구매", comingSoon: "출시 예정", edition: "에디션" },
    editions: { apple: "BiblioFuse Reader", pc: "PC Reader", android: "Android Reader" },
    subtitles: { apple: "iPhone · iPad · Mac", pc: "Windows", android: "스마트폰 · 태블릿" },
    rows: [
      ["플랫폼", "iPhone · iPad · Mac", "Windows PC", "Android 스마트폰 · 태블릿"],
      ["압축 / 합치기", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["읽기 형식", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · TXT", "EPUB · PDF · CBZ · ZIP · TXT"],
      ["리더 기능", "TTS, 피크 줌, 자동 스크롤", "진행 상황, 평점, 태그", "진행 상황, 평점, 태그"],
      ["PC / Mac → iPhone 스트리밍", "Wi-Fi + Tailscale|LAN만: 완전히 테스트되지 않음", "Wi-Fi + Tailscale|LAN만: 완전히 테스트되지 않음", "-"],
      ["라이브러리 소스", "로컬 + iCloud; 스트리밍을 통한 SMB", "로컬 폴더", "로컬 + 외부 폴더"],
      ["iCloud 책장", "기기 간 동기화", "-", "-"],
      ["지원 언어", "12개 언어|EN ES FR NL PT RU ZH JA KO ID MS", "11개 언어", "12개 언어|EN ES FR NL PT RU ZH JA KO ID MS"]
    ],
    unique: "고유", where: "다운로드 경로", iosNote: "iOS 및 Mac", pcNotify: "출시 시 알림 받기"
  },
  toolsSection: {
    eyebrow: "독립 도구",
    title: "경량 도구로도 이용 가능",
    web: { name: "BiblioFuse Web", subtitle: "무료 · 브라우저", desc: "브라우저에서 EPUB, CBZ, PDF 파일을 압축하고 합칩니다. 설치 불필요, 계정 불필요.", cta: "무료 도구 실행" },
    pcCbz: { name: "BiblioFuse CBZ", subtitle: "Windows · Microsoft Store", desc: "Windows에서 만화 아카이브를 압축하고 합칩니다." },
    pcEpub: { name: "BiblioFuse EPUB", subtitle: "Windows · Microsoft Store", desc: "Windows에서 EPUB 파일을 압축하고 합칩니다." }
  },
  faq: {
    eyebrow: "자주 묻는 질문",
    title: "자주 묻는 질문",
    items: [
      { q: "한 번의 구매로 모든 플랫폼을 이용할 수 있나요?", a: "아니요. iOS + Mac은 단일 통합 구매로, 한 번의 결제로 iPhone, iPad, Mac을 모두 이용할 수 있습니다. Android Reader, PC Reader, PC 도구는 각각 별도로 판매됩니다." },
      { q: "Mac 또는 PC에서 iPhone으로 스트리밍은 어떻게 작동하나요?", a: "Mac 또는 PC가 로컬 서버를 실행하고 연결 주소를 iCloud Drive에 기록합니다. iPhone이 자동으로 이를 감지합니다. 두 기기의 Tailscale 상태가 일치해야 합니다: 둘 다 켜짐(집과 원격 모두 사용 가능) 또는 둘 다 꺼짐(동일 Wi-Fi만, 완전히 테스트되지 않음). 한 기기만 Tailscale이 켜져 있으면 연결이 실패합니다. 두 기기 모두 항상 Tailscale을 켜두면 가장 안정적인 경험을 얻을 수 있습니다." },
      { q: "스트리밍 설정에 무엇이 필요한가요?", a: "Mac 또는 PC와 iPhone이 동일한 iCloud 계정에 로그인되어 있어야 하며, 두 기기의 Tailscale 상태가 일치해야 합니다(둘 다 켜짐 또는 둘 다 꺼짐). Tailscale 출구 노드를 활성화할 필요는 없습니다. iCloud와 Tailscale 계정은 서로 다른 이메일 주소를 사용할 수 있습니다." },
      { q: "Android는 왜 Mac 또는 PC에서 책을 받을 수 없나요?", a: "Android 앱은 iCloud 통합 없이 다른 코드베이스를 사용하며, iCloud가 스트리밍 핸드셰이크 메커니즘입니다. Android의 가장 좋은 방법은 Syncthing 또는 유사한 도구를 사용하여 스마트폰에 파일을 동기화한 후 해당 폴더를 앱의 라이브러리 소스로 추가하는 것입니다." },
      { q: "PC Reader와 PC EPUB / CBZ 도구의 차이점은 무엇인가요?", a: "PC Reader는 완전한 읽기 앱으로, 책을 열고 라이브러리를 관리하며 파일을 압축하고 iPhone으로 스트리밍합니다. PC EPUB 및 CBZ 도구는 읽기 기능 없이 압축과 합치기에만 특화된 더 가볍고 저렴한 앱입니다." },
      { q: "PC Reader는 언제 출시되나요?", a: "PC Reader는 Microsoft Store 승인을 기다리고 있습니다. 'Notify me: BiblioFuse PC Reader'라는 제목으로 support@mlogictech.com에 이메일을 보내주시면 출시 시 알려드리겠습니다." }
    ]
  }
},

id: {
  table: {
    eyebrow: "Bandingkan pembaca",
    title: "Pilih pembaca untuk platform Anda.",
    desc: "Semua pembaca berbagi filosofi yang sama: pemrosesan di perangkat, tanpa pelacakan. Perbedaannya ada pada platform dan alur kerja.",
    feature: "Fitur",
    badges: { universal: "Pembelian universal", comingSoon: "Segera hadir", edition: "Edisi" },
    editions: { apple: "BiblioFuse Reader", pc: "PC Reader", android: "Android Reader" },
    subtitles: { apple: "iPhone · iPad · Mac", pc: "Windows", android: "Ponsel · Tablet" },
    rows: [
      ["Platform", "iPhone · iPad · Mac", "PC Windows", "Ponsel · tablet Android"],
      ["Kompresi / gabung", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["Format baca", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · TXT", "EPUB · PDF · CBZ · ZIP · TXT"],
      ["Fitur pembaca", "TTS, peek zoom, gulir otomatis", "Kemajuan, peringkat, label", "Kemajuan, peringkat, label"],
      ["Streaming PC / Mac → iPhone", "Wi-Fi + Tailscale|LAN saja: belum sepenuhnya diuji", "Wi-Fi + Tailscale|LAN saja: belum sepenuhnya diuji", "-"],
      ["Sumber perpustakaan", "Lokal + iCloud; SMB via streaming", "Folder lokal", "Lokal + folder eksternal"],
      ["Rak buku iCloud", "Sinkronisasi lintas perangkat", "-", "-"],
      ["Dukungan bahasa", "12 bahasa|EN ES FR NL PT RU ZH JA KO ID MS", "11 bahasa", "12 bahasa|EN ES FR NL PT RU ZH JA KO ID MS"]
    ],
    unique: "Unik", where: "Di mana mendapatkannya", iosNote: "iOS dan Mac", pcNotify: "Beritahu saya saat tersedia"
  },
  toolsSection: {
    eyebrow: "Alat mandiri",
    title: "Tersedia juga sebagai alat ringan",
    web: { name: "BiblioFuse Web", subtitle: "Gratis · Browser", desc: "Kompres dan gabungkan file EPUB, CBZ, dan PDF di browser Anda. Tanpa instalasi, tanpa akun.", cta: "Buka alat gratis" },
    pcCbz: { name: "BiblioFuse CBZ", subtitle: "Windows · Microsoft Store", desc: "Kompres dan gabungkan arsip komik di Windows." },
    pcEpub: { name: "BiblioFuse EPUB", subtitle: "Windows · Microsoft Store", desc: "Kompres dan gabungkan file EPUB di Windows." }
  },
  faq: {
    eyebrow: "Pertanyaan Umum",
    title: "Pertanyaan yang sering ditanyakan",
    items: [
      { q: "Apakah satu pembelian mencakup semua platform?", a: "Tidak. iOS + Mac adalah pembelian universal tunggal — satu pembayaran mencakup iPhone, iPad, dan Mac. Android Reader, PC Reader, dan alat PC masing-masing dijual terpisah." },
      { q: "Bagaimana cara kerja streaming dari Mac atau PC ke iPhone?", a: "Mac atau PC Anda menjalankan server lokal dan menulis alamat koneksi ke iCloud Drive. iPhone Anda mendeteksinya secara otomatis. Kedua perangkat harus berada dalam status Tailscale yang sama: keduanya aktif (berfungsi di rumah dan jarak jauh) atau keduanya nonaktif (hanya Wi-Fi yang sama, belum sepenuhnya diuji). Jika hanya satu perangkat yang mengaktifkan Tailscale, koneksi akan gagal. Selalu mengaktifkan Tailscale di kedua perangkat memberikan pengalaman paling konsisten." },
      { q: "Apa yang diperlukan untuk menyiapkan streaming?", a: "Mac atau PC dan iPhone Anda harus masuk ke akun iCloud yang sama, dan keduanya harus memiliki Tailscale aktif atau nonaktif — harus cocok. Exit node Tailscale tidak perlu diaktifkan. Akun iCloud dan Tailscale dapat menggunakan alamat email yang berbeda." },
      { q: "Mengapa Android tidak dapat menerima buku dari Mac atau PC?", a: "Aplikasi Android menggunakan basis kode berbeda tanpa integrasi iCloud, yang merupakan mekanisme jabat tangan streaming. Alur kerja terbaik untuk Android adalah menyinkronkan file ke ponsel menggunakan Syncthing atau alat serupa, lalu menambahkan folder tersebut sebagai sumber perpustakaan di aplikasi." },
      { q: "Apa perbedaan antara PC Reader dan alat EPUB / CBZ untuk PC?", a: "PC Reader adalah aplikasi baca lengkap — membuka buku, mengelola perpustakaan, mengompres file, dan streaming ke iPhone. Alat EPUB dan CBZ untuk PC adalah aplikasi yang lebih ringan dan murah, difokuskan hanya pada kompresi dan penggabungan, tanpa pembaca." },
      { q: "Kapan PC Reader akan tersedia?", a: "PC Reader sedang menunggu persetujuan Microsoft Store. Kirim email ke support@mlogictech.com dengan subjek \"Notify me: BiblioFuse PC Reader\" dan kami akan memberi tahu Anda saat diluncurkan." }
    ]
  }
},

ms: {
  table: {
    eyebrow: "Bandingkan pembaca",
    title: "Pilih pembaca untuk platform anda.",
    desc: "Semua pembaca berkongsi falsafah yang sama: pemprosesan pada peranti, tanpa penjejakan. Perbezaannya ialah platform dan aliran kerja.",
    feature: "Ciri",
    badges: { universal: "Pembelian universal", comingSoon: "Akan datang", edition: "Edisi" },
    editions: { apple: "BiblioFuse Reader", pc: "PC Reader", android: "Android Reader" },
    subtitles: { apple: "iPhone · iPad · Mac", pc: "Windows", android: "Telefon · Tablet" },
    rows: [
      ["Platform", "iPhone · iPad · Mac", "PC Windows", "Telefon · tablet Android"],
      ["Mampat / gabung", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["Format bacaan", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · TXT", "EPUB · PDF · CBZ · ZIP · TXT"],
      ["Ciri pembaca", "TTS, peek zoom, tatal auto", "Kemajuan, penilaian, label", "Kemajuan, penilaian, label"],
      ["Penstriman PC / Mac → iPhone", "Wi-Fi + Tailscale|LAN sahaja: belum diuji sepenuhnya", "Wi-Fi + Tailscale|LAN sahaja: belum diuji sepenuhnya", "-"],
      ["Sumber perpustakaan", "Tempatan + iCloud; SMB melalui penstriman", "Folder tempatan", "Tempatan + folder luaran"],
      ["Rak buku iCloud", "Penyegerakan merentas peranti", "-", "-"],
      ["Sokongan bahasa", "12 bahasa|EN ES FR NL PT RU ZH JA KO ID MS", "11 bahasa", "12 bahasa|EN ES FR NL PT RU ZH JA KO ID MS"]
    ],
    unique: "Unik", where: "Di mana untuk mendapatkannya", iosNote: "iOS dan Mac", pcNotify: "Beritahu saya apabila tersedia"
  },
  toolsSection: {
    eyebrow: "Alat kendiri",
    title: "Juga tersedia sebagai alat ringan",
    web: { name: "BiblioFuse Web", subtitle: "Percuma · Pelayar", desc: "Mampatkan dan gabungkan fail EPUB, CBZ dan PDF dalam pelayar anda. Tanpa pemasangan, tanpa akaun.", cta: "Lancarkan alat percuma" },
    pcCbz: { name: "BiblioFuse CBZ", subtitle: "Windows · Microsoft Store", desc: "Mampatkan dan gabungkan arkib komik pada Windows." },
    pcEpub: { name: "BiblioFuse EPUB", subtitle: "Windows · Microsoft Store", desc: "Mampatkan dan gabungkan fail EPUB pada Windows." }
  },
  faq: {
    eyebrow: "Soalan Lazim",
    title: "Soalan lazim",
    items: [
      { q: "Adakah satu pembelian merangkumi semua platform?", a: "Tidak. iOS + Mac adalah pembelian universal tunggal — satu pembayaran merangkumi iPhone, iPad dan Mac. Android Reader, PC Reader dan alat PC dijual secara berasingan." },
      { q: "Bagaimana penstriman dari Mac atau PC ke iPhone berfungsi?", a: "Mac atau PC anda menjalankan pelayan tempatan dan menulis alamat sambungan ke iCloud Drive. iPhone anda mengesannya secara automatik. Kedua-dua peranti mesti berada dalam status Tailscale yang sama: kedua-duanya aktif (berfungsi di rumah dan jauh) atau kedua-duanya tidak aktif (Wi-Fi yang sama sahaja, belum diuji sepenuhnya). Jika hanya satu peranti mengaktifkan Tailscale, sambungan akan gagal. Sentiasa mengaktifkan Tailscale pada kedua-dua peranti memberikan pengalaman yang paling konsisten." },
      { q: "Apa yang diperlukan untuk menyediakan penstriman?", a: "Mac atau PC dan iPhone anda mesti log masuk ke akaun iCloud yang sama, dan kedua-duanya mesti mempunyai Tailscale aktif atau tidak aktif — mesti sepadan. Nod keluar Tailscale tidak perlu diaktifkan. Akaun iCloud dan Tailscale boleh menggunakan alamat e-mel yang berbeza." },
      { q: "Mengapa Android tidak boleh menerima buku dari Mac atau PC?", a: "Aplikasi Android menggunakan asas kod yang berbeza tanpa integrasi iCloud, yang merupakan mekanisme jabat tangan penstriman. Aliran kerja terbaik untuk Android adalah menyegerakkan fail ke telefon menggunakan Syncthing atau alat serupa, kemudian tambah folder tersebut sebagai sumber perpustakaan dalam aplikasi." },
      { q: "Apakah perbezaan antara PC Reader dan alat EPUB / CBZ untuk PC?", a: "PC Reader adalah aplikasi bacaan penuh — membuka buku, mengurus perpustakaan, memampatkan fail dan membuat penstriman ke iPhone. Alat EPUB dan CBZ untuk PC adalah aplikasi yang lebih ringan dan murah, tertumpu hanya pada pemampatan dan penggabungan, tanpa pembaca." },
      { q: "Bilakah PC Reader akan tersedia?", a: "PC Reader sedang menunggu kelulusan Microsoft Store. Hantar e-mel ke support@mlogictech.com dengan subjek \"Notify me: BiblioFuse PC Reader\" dan kami akan memberitahu anda apabila ia dilancarkan." }
    ]
  }
}

};

// Deep merge helper
function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const langs = Object.keys(T);
for (const lang of langs) {
  const filePath = path.join(base, lang, 'translation.json');
  if (!fs.existsSync(filePath)) { console.warn(`⚠️  Missing: ${lang}`); continue; }
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (!existing.redesign) existing.redesign = {};
  if (!existing.redesign.home) existing.redesign.home = {};
  deepMerge(existing.redesign.home, T[lang]);
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2) + '\n');
  console.log(`✅ ${lang}`);
}
console.log('Done.');
