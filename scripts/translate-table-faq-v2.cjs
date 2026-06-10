/**
 * translate-table-faq-v2.cjs
 * Updates redesign.home.table and redesign.home.faq for all 10 non-English locales.
 * Run: node scripts/translate-table-faq-v2.cjs
 */
const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, '..', 'src', 'locales');

const T = {

// ─── SPANISH ───────────────────────────────────────────────────────────────
es: {
  table: {
    editions: { apple: "BiblioFuse Reader iOS / macOS", pc: "BiblioFuse Reader PC", android: "BiblioFuse Reader Android" },
    rows: [
      ["Comprimir / combinar", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["Formatos de lectura", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · ZIP"],
      ["Funciones del lector", "TTS, peek zoom, auto-desplazamiento, progreso, valoraciones, etiquetas", "TTS, auto-desplazamiento, progreso, valoraciones, etiquetas", "Peek zoom, auto-desplazamiento, progreso, valoraciones, etiquetas"],
      ["Streaming PC / Mac → iPhone", "Tailscale activado — casa y 5G remoto||Sin Tailscale — solo Wi-Fi doméstico (no totalmente probado)", "Tailscale activado — casa y 5G remoto||Sin Tailscale — solo Wi-Fi doméstico (no totalmente probado)", "-"],
      ["Fuentes de biblioteca", "Local + iCloud + SMB|Mac: nativo · iOS: vía streaming", "Local + iCloud + SMB", "Local + carpetas externas"],
      ["Estantería iCloud", "Sincronización entre dispositivos", "Sincronización entre dispositivos", "-"],
      ["Idiomas", "12 idiomas|EN ES FR NL PT RU ZH JA KO ID MS", "11 idiomas", "12 idiomas|EN ES FR NL PT RU ZH JA KO ID MS"]
    ]
  },
  faq: {
    items: [
      { q: "¿Una compra cubre todas las plataformas?", a: "No. iOS + Mac es una compra universal única: un pago cubre iPhone, iPad y Mac. El Android Reader, el PC Reader y las herramientas de PC se venden por separado." },
      {
        q: "¿Cómo añado libros y carpetas a BiblioFuse en iPhone?",
        a: "BiblioFuse almacena archivos en su propia carpeta sincronizada con iCloud. Puedes añadir libros a través de la app Archivos (copia archivos en la carpeta de BiblioFuse), por AirDrop, o mediante la Transferencia Wi-Fi integrada: abre una sesión de biblioteca desde Mac o PC y arrastra archivos desde cualquier navegador.",
        link: { label: "Guía paso a paso para cargar contenido", href: "/blog/sideload-comics-iphone-without-itunes" }
      },
      { q: "¿Cómo funciona el streaming de Mac o PC al iPhone?", a: "Tu Mac o PC ejecuta un servidor local y escribe la dirección de conexión en iCloud Drive. Tu iPhone la detecta automáticamente. Ambos dispositivos deben tener el mismo estado de Tailscale: ambos activados (funciona en casa y remotamente) o ambos desactivados (solo mismo Wi-Fi, no totalmente probado). Si solo un dispositivo tiene Tailscale activado, la conexión fallará. Mantener ambos siempre activados da la experiencia más consistente." },
      {
        q: "¿Qué necesito para configurar el streaming?",
        a: "Tu Mac o PC y tu iPhone deben tener lo siguiente configurado:",
        bullets: [
          { text: "La misma cuenta de iCloud en ambos dispositivos", sub: ["En iOS y Mac: ve a Ajustes → [tu nombre] → iCloud y asegúrate de que BiblioFuse está activado", "En PC: iCloud no viene instalado — <a href=\"https://apps.microsoft.com/detail/9pktq5699m62\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 hover:underline\">descarga iCloud para Windows</a> desde Microsoft Store"] },
          { text: "El estado de Tailscale debe coincidir en ambos dispositivos: ambos ACTIVADOS o ambos DESACTIVADOS", sub: ["Ambos activados — funciona en casa y remotamente por 5G", "Ambos desactivados — solo Wi-Fi doméstico (no totalmente probado)", "Mixto (uno activado, otro no) — la conexión fallará", "No es necesario activar el nodo de salida de Tailscale", "Las cuentas de iCloud y Tailscale pueden usar correos diferentes"] },
          { text: "Permite el acceso a la red cuando la app se inicia por primera vez" }
        ]
      },
      { q: "¿Por qué Android no puede recibir libros de Mac o PC?", a: "La app de Android usa una base de código diferente sin integración de iCloud, que es la base del protocolo de streaming. El mejor flujo de trabajo para Android es sincronizar archivos al teléfono con Syncthing u otra herramienta similar y añadir esa carpeta como fuente de biblioteca en la app." },
      {
        q: "¿Dónde se guardan el progreso de lectura, marcadores, valoraciones y etiquetas?",
        a: "Depende de dónde esté el archivo del libro:",
        bullets: [
          { text: "Almacenamiento local — guardado solo en ese dispositivo, sin sincronización entre dispositivos" },
          { text: "Almacenamiento iCloud — guardado en iCloud, se sincroniza automáticamente entre todos los dispositivos iOS, Mac y PC" },
          { text: "SMB / recurso compartido de red (streaming Mac o PC) — guardado en el dispositivo anfitrión", sub: ["iOS leyendo un stream de Mac: el progreso se guarda en el Mac", "iOS leyendo un stream de PC: el progreso se guarda en el PC", "PC ↔ Mac: almacenados de forma independiente, no comparten datos", "Si usas tanto Mac como PC como anfitriones de streaming, tus datos de lectura estarán divididos. Usa solo un anfitrión para mayor consistencia."] }
        ]
      },
      { q: "¿Cuál es la diferencia entre el PC Reader y las herramientas EPUB / CBZ para PC?", a: "El PC Reader es una app de lectura completa: abre libros, gestiona tu biblioteca, comprime archivos y transmite al iPhone. Las herramientas EPUB y CBZ para PC son apps más ligeras y baratas centradas solo en comprimir y combinar, sin lector." },
      { q: "¿Cuándo estará disponible el PC Reader?", a: "El PC Reader está esperando la aprobación de Microsoft Store. Envía un correo a support@mlogictech.com con el asunto \"Notify me: BiblioFuse PC Reader\" y te avisaremos cuando se lance." }
    ]
  }
},

// ─── FRENCH ────────────────────────────────────────────────────────────────
fr: {
  table: {
    editions: { apple: "BiblioFuse Reader iOS / macOS", pc: "BiblioFuse Reader PC", android: "BiblioFuse Reader Android" },
    rows: [
      ["Compresser / fusionner", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["Formats de lecture", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · ZIP"],
      ["Fonctions du lecteur", "TTS, peek zoom, défilement auto, progression, notes, étiquettes", "TTS, défilement auto, progression, notes, étiquettes", "Peek zoom, défilement auto, progression, notes, étiquettes"],
      ["Streaming PC / Mac → iPhone", "Tailscale activé — maison et 5G à distance||Sans Tailscale — Wi-Fi domestique uniquement (non entièrement testé)", "Tailscale activé — maison et 5G à distance||Sans Tailscale — Wi-Fi domestique uniquement (non entièrement testé)", "-"],
      ["Sources de bibliothèque", "Local + iCloud + SMB|Mac: natif · iOS: via streaming", "Local + iCloud + SMB", "Local + dossiers externes"],
      ["Bibliothèque iCloud", "Synchronisation multi-appareils", "Synchronisation multi-appareils", "-"],
      ["Langues", "12 langues|EN ES FR NL PT RU ZH JA KO ID MS", "11 langues", "12 langues|EN ES FR NL PT RU ZH JA KO ID MS"]
    ]
  },
  faq: {
    items: [
      { q: "Un seul achat couvre-t-il toutes les plateformes ?", a: "Non. iOS + Mac est un achat universel unique — un paiement couvre iPhone, iPad et Mac. L'Android Reader, le PC Reader et les outils PC sont vendus séparément." },
      {
        q: "Comment ajouter des livres et des dossiers à BiblioFuse sur iPhone ?",
        a: "BiblioFuse stocke les fichiers dans son propre dossier synchronisé avec iCloud. Vous pouvez ajouter des livres via l'app Fichiers (copiez les fichiers dans le dossier BiblioFuse), par AirDrop, ou via le Transfert Wi-Fi intégré — ouvrez une session de bibliothèque depuis Mac ou PC et faites glisser des fichiers depuis n'importe quel navigateur.",
        link: { label: "Guide pas à pas pour charger du contenu", href: "/blog/sideload-comics-iphone-without-itunes" }
      },
      { q: "Comment fonctionne le streaming de Mac ou PC vers iPhone ?", a: "Votre Mac ou PC exécute un serveur local et écrit l'adresse de connexion dans iCloud Drive. Votre iPhone la détecte automatiquement. Les deux appareils doivent avoir le même état Tailscale : les deux activés (fonctionne à la maison et à distance) ou les deux désactivés (même Wi-Fi uniquement, non entièrement testé). Si seulement un appareil a Tailscale activé, la connexion échouera. Garder les deux appareils toujours activés donne l'expérience la plus cohérente." },
      {
        q: "Que faut-il pour configurer le streaming ?",
        a: "Votre Mac ou PC et votre iPhone doivent avoir les éléments suivants configurés :",
        bullets: [
          { text: "Même compte iCloud sur les deux appareils", sub: ["Sur iOS et Mac : allez dans Réglages → [votre nom] → iCloud et assurez-vous que BiblioFuse est activé", "Sur PC : iCloud n'est pas préinstallé — <a href=\"https://apps.microsoft.com/detail/9pktq5699m62\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 hover:underline\">téléchargez iCloud pour Windows</a> depuis le Microsoft Store"] },
          { text: "L'état de Tailscale doit correspondre sur les deux appareils — les deux ACTIVÉS ou les deux DÉSACTIVÉS", sub: ["Les deux activés — fonctionne à la maison et à distance via 5G", "Les deux désactivés — même Wi-Fi domestique uniquement (non entièrement testé)", "Mixte (l'un activé, l'autre non) — la connexion échouera", "Le nœud de sortie Tailscale n'a pas besoin d'être activé", "Les comptes iCloud et Tailscale peuvent utiliser des adresses e-mail différentes"] },
          { text: "Autoriser l'accès réseau lors du premier lancement de l'app" }
        ]
      },
      { q: "Pourquoi Android ne peut-il pas recevoir de livres de Mac ou PC ?", a: "L'app Android utilise une base de code différente sans intégration iCloud, qui est le mécanisme de la poignée de main de streaming. Le meilleur flux de travail pour Android est de synchroniser les fichiers sur votre téléphone avec Syncthing ou un outil similaire, puis d'ajouter ce dossier comme source de bibliothèque dans l'app." },
      {
        q: "Où sont sauvegardés la progression de lecture, les signets, les notes et les étiquettes ?",
        a: "Cela dépend de l'emplacement du fichier du livre :",
        bullets: [
          { text: "Stockage local — sauvegardé sur cet appareil uniquement, pas de synchronisation multi-appareils" },
          { text: "Stockage iCloud — sauvegardé sur iCloud, se synchronise automatiquement sur tous les appareils iOS, Mac et PC" },
          { text: "SMB / partage réseau (streaming Mac ou PC) — sauvegardé sur l'appareil hôte", sub: ["iOS lisant un flux Mac : la progression est sauvegardée sur le Mac", "iOS lisant un flux PC : la progression est sauvegardée sur le PC", "PC ↔ Mac : stockés indépendamment, ils ne partagent pas les données", "Si vous utilisez Mac et PC comme hôtes de streaming, vos données de lecture seront divisées. Utilisez un seul hôte pour plus de cohérence."] }
        ]
      },
      { q: "Quelle est la différence entre le PC Reader et les outils PC EPUB / CBZ ?", a: "Le PC Reader est une application de lecture complète — il ouvre des livres, gère votre bibliothèque, compresse des fichiers et diffuse vers iPhone. Les outils PC EPUB et CBZ sont des apps plus légères et moins chères axées uniquement sur la compression et la fusion, sans lecteur." },
      { q: "Quand le PC Reader sera-t-il disponible ?", a: "Le PC Reader attend l'approbation du Microsoft Store. Envoyez un e-mail à support@mlogictech.com avec l'objet \"Notify me: BiblioFuse PC Reader\" et nous vous avertirons lors du lancement." }
    ]
  }
},

// ─── DUTCH ─────────────────────────────────────────────────────────────────
nl: {
  table: {
    editions: { apple: "BiblioFuse Reader iOS / macOS", pc: "BiblioFuse Reader PC", android: "BiblioFuse Reader Android" },
    rows: [
      ["Comprimeren / samenvoegen", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["Leesformaten", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · ZIP"],
      ["Lezerfuncties", "TTS, peek zoom, auto-scroll, voortgang, beoordelingen, labels", "TTS, auto-scroll, voortgang, beoordelingen, labels", "Peek zoom, auto-scroll, voortgang, beoordelingen, labels"],
      ["PC / Mac → iPhone streaming", "Tailscale AAN — thuis en 5G op afstand||Zonder Tailscale — alleen thuis-wifi (niet volledig getest)", "Tailscale AAN — thuis en 5G op afstand||Zonder Tailscale — alleen thuis-wifi (niet volledig getest)", "-"],
      ["Bibliotheekapparaten", "Lokaal + iCloud + SMB|Mac: native · iOS: via streaming", "Lokaal + iCloud + SMB", "Lokaal + externe mappen"],
      ["iCloud-boekenplank", "Synchronisatie tussen apparaten", "Synchronisatie tussen apparaten", "-"],
      ["Taalondersteuning", "12 talen|EN ES FR NL PT RU ZH JA KO ID MS", "11 talen", "12 talen|EN ES FR NL PT RU ZH JA KO ID MS"]
    ]
  },
  faq: {
    items: [
      { q: "Dekt één aankoop alle platforms?", a: "Nee. iOS + Mac is één universele aankoop — één betaling dekt iPhone, iPad en Mac. De Android Reader, PC Reader en pc-tools worden elk afzonderlijk verkocht." },
      {
        q: "Hoe voeg ik boeken en mappen toe aan BiblioFuse op iPhone?",
        a: "BiblioFuse slaat bestanden op in zijn eigen iCloud-gesynchroniseerde map. Je kunt boeken toevoegen via de Bestanden-app (kopieer bestanden naar de BiblioFuse-map), via AirDrop, of via de ingebouwde Wi-Fi-overdracht — open een bibliotheeksessie vanuit Mac of pc en sleep bestanden vanuit een browser.",
        link: { label: "Stapsgewijze handleiding voor sideloaden", href: "/blog/sideload-comics-iphone-without-itunes" }
      },
      { q: "Hoe werkt streaming van Mac of pc naar iPhone?", a: "Je Mac of pc draait een lokale server en schrijft het verbindingsadres naar iCloud Drive. Je iPhone pikt dit automatisch op. Beide apparaten moeten dezelfde Tailscale-status hebben: beide aan (werkt thuis en op afstand) of beide uit (alleen hetzelfde wifi, niet volledig getest). Als slechts één apparaat Tailscale aan heeft, mislukt de verbinding. Beide apparaten altijd aan houden geeft de meest consistente ervaring." },
      {
        q: "Wat heb ik nodig om streaming in te stellen?",
        a: "Zowel je Mac of pc als je iPhone moeten het volgende geconfigureerd hebben:",
        bullets: [
          { text: "Hetzelfde iCloud-account op beide apparaten", sub: ["Op iOS en Mac: ga naar Instellingen → [jouw naam] → iCloud en zorg dat BiblioFuse is ingeschakeld", "Op pc: iCloud is niet ingebouwd — <a href=\"https://apps.microsoft.com/detail/9pktq5699m62\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 hover:underline\">download iCloud voor Windows</a> via de Microsoft Store"] },
          { text: "Tailscale-status moet overeenkomen op beide apparaten — beide AAN of beide UIT", sub: ["Beide aan — werkt thuis en op afstand via 5G", "Beide uit — alleen thuis-wifi (niet volledig getest)", "Gemengd (één aan, één uit) — verbinding mislukt", "Tailscale exit-node hoeft niet ingeschakeld te zijn", "iCloud- en Tailscale-accounts kunnen verschillende e-mailadressen gebruiken"] },
          { text: "Sta netwerktoegang toe bij de eerste keer opstarten van de app" }
        ]
      },
      { q: "Waarom kan Android geen boeken ontvangen van Mac of pc?", a: "De Android-app gebruikt een andere codebase zonder iCloud-integratie, wat de basis is van het streaming-handshake-mechanisme. De beste workflow voor Android is bestanden synchroniseren naar je telefoon met Syncthing of een vergelijkbare tool en die map vervolgens als bibliotheekbron toevoegen in de app." },
      {
        q: "Waar worden leesvoortgang, bladwijzers, beoordelingen en labels opgeslagen?",
        a: "Dit hangt af van waar het boekbestand zich bevindt:",
        bullets: [
          { text: "Lokale opslag — alleen opgeslagen op dat apparaat, geen synchronisatie tussen apparaten" },
          { text: "iCloud-opslag — opgeslagen in iCloud, synchroniseert automatisch op alle iOS-, Mac- en pc-apparaten" },
          { text: "SMB / netwerkshare (Mac- of pc-streaming) — opgeslagen op het hostapparaat", sub: ["iOS leest een Mac-stream: voortgang wordt opgeslagen op de Mac", "iOS leest een pc-stream: voortgang wordt opgeslagen op de pc", "PC ↔ Mac: onafhankelijk opgeslagen, gegevens worden niet gedeeld", "Als je zowel Mac als pc als streaming-host gebruikt, worden je leesgegevens gesplitst. Gebruik één host voor consistentie."] }
        ]
      },
      { q: "Wat is het verschil tussen de PC Reader en de pc EPUB / CBZ-tools?", a: "De PC Reader is een volledige leesapp — hij opent boeken, beheert je bibliotheek, comprimeert bestanden en streamt naar iPhone. De pc EPUB- en CBZ-tools zijn lichtere, goedkopere apps die zich uitsluitend richten op comprimeren en samenvoegen, zonder lezer." },
      { q: "Wanneer is de PC Reader beschikbaar?", a: "De PC Reader wacht op goedkeuring van de Microsoft Store. Stuur een e-mail naar support@mlogictech.com met als onderwerp \"Notify me: BiblioFuse PC Reader\" en we laten je weten wanneer hij wordt gelanceerd." }
    ]
  }
},

// ─── PORTUGUESE ────────────────────────────────────────────────────────────
pt: {
  table: {
    editions: { apple: "BiblioFuse Reader iOS / macOS", pc: "BiblioFuse Reader PC", android: "BiblioFuse Reader Android" },
    rows: [
      ["Comprimir / mesclar", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["Formatos de leitura", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · ZIP"],
      ["Recursos do leitor", "TTS, peek zoom, rolagem automática, progresso, avaliações, etiquetas", "TTS, rolagem automática, progresso, avaliações, etiquetas", "Peek zoom, rolagem automática, progresso, avaliações, etiquetas"],
      ["Streaming PC / Mac → iPhone", "Tailscale ATIVO — casa e 5G remoto||Sem Tailscale — apenas Wi-Fi doméstico (não totalmente testado)", "Tailscale ATIVO — casa e 5G remoto||Sem Tailscale — apenas Wi-Fi doméstico (não totalmente testado)", "-"],
      ["Fontes da biblioteca", "Local + iCloud + SMB|Mac: nativo · iOS: via streaming", "Local + iCloud + SMB", "Local + pastas externas"],
      ["Estante iCloud", "Sincronização entre dispositivos", "Sincronização entre dispositivos", "-"],
      ["Idiomas", "12 idiomas|EN ES FR NL PT RU ZH JA KO ID MS", "11 idiomas", "12 idiomas|EN ES FR NL PT RU ZH JA KO ID MS"]
    ]
  },
  faq: {
    items: [
      { q: "Uma compra cobre todas as plataformas?", a: "Não. iOS + Mac é uma compra universal única — um pagamento cobre iPhone, iPad e Mac. O Android Reader, o PC Reader e as ferramentas de PC são vendidos separadamente." },
      {
        q: "Como adiciono livros e pastas ao BiblioFuse no iPhone?",
        a: "O BiblioFuse armazena arquivos em sua própria pasta sincronizada com o iCloud. Você pode adicionar livros pelo app Arquivos (copie arquivos para a pasta BiblioFuse), via AirDrop, ou pela Transferência Wi-Fi integrada — abra uma sessão de biblioteca no Mac ou PC e arraste arquivos de qualquer navegador.",
        link: { label: "Guia passo a passo para sideloading", href: "/blog/sideload-comics-iphone-without-itunes" }
      },
      { q: "Como funciona o streaming do Mac ou PC para o iPhone?", a: "Seu Mac ou PC executa um servidor local e escreve o endereço de conexão no iCloud Drive. Seu iPhone detecta automaticamente. Ambos os dispositivos devem ter o mesmo estado do Tailscale: ambos ativados (funciona em casa e remotamente) ou ambos desativados (apenas mesmo Wi-Fi, não totalmente testado). Se apenas um dispositivo tiver o Tailscale ativado, a conexão falhará. Manter ambos sempre ativados oferece a experiência mais consistente." },
      {
        q: "O que preciso para configurar o streaming?",
        a: "Seu Mac ou PC e seu iPhone precisam ter o seguinte configurado:",
        bullets: [
          { text: "Mesma conta iCloud em ambos os dispositivos", sub: ["No iOS e Mac: vá em Ajustes → [seu nome] → iCloud e certifique-se de que o BiblioFuse está ativado", "No PC: o iCloud não vem instalado — <a href=\"https://apps.microsoft.com/detail/9pktq5699m62\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 hover:underline\">baixe o iCloud para Windows</a> na Microsoft Store"] },
          { text: "O estado do Tailscale deve corresponder em ambos os dispositivos — ambos ATIVADOS ou ambos DESATIVADOS", sub: ["Ambos ativados — funciona em casa e remotamente via 5G", "Ambos desativados — apenas Wi-Fi doméstico (não totalmente testado)", "Misto (um ativado, outro não) — a conexão falhará", "O nó de saída do Tailscale não precisa ser ativado", "As contas do iCloud e Tailscale podem usar endereços de e-mail diferentes"] },
          { text: "Permita o acesso à rede quando o app for iniciado pela primeira vez" }
        ]
      },
      { q: "Por que o Android não consegue receber livros do Mac ou PC?", a: "O app Android usa uma base de código diferente sem integração com iCloud, que é como o mecanismo de handshake do streaming funciona. O melhor fluxo de trabalho para Android é sincronizar arquivos para o telefone usando Syncthing ou ferramenta similar, depois adicionar essa pasta como fonte de biblioteca no app." },
      {
        q: "Onde são salvos o progresso de leitura, marcadores, avaliações e etiquetas?",
        a: "Depende de onde o arquivo do livro está armazenado:",
        bullets: [
          { text: "Armazenamento local — salvo apenas naquele dispositivo, sem sincronização entre dispositivos" },
          { text: "Armazenamento iCloud — salvo no iCloud, sincroniza automaticamente em todos os dispositivos iOS, Mac e PC" },
          { text: "SMB / compartilhamento de rede (streaming Mac ou PC) — salvo no dispositivo host", sub: ["iOS lendo um stream do Mac: o progresso é salvo no Mac", "iOS lendo um stream do PC: o progresso é salvo no PC", "PC ↔ Mac: armazenados independentemente, não compartilham dados", "Se você usar Mac e PC como hosts de streaming, seus dados de leitura ficarão divididos. Use apenas um host para consistência."] }
        ]
      },
      { q: "Qual é a diferença entre o PC Reader e as ferramentas PC EPUB / CBZ?", a: "O PC Reader é um app de leitura completo — ele abre livros, gerencia sua biblioteca, comprime arquivos e transmite para o iPhone. As ferramentas PC EPUB e CBZ são apps mais leves e baratas focadas apenas em compressão e mesclagem, sem leitor." },
      { q: "Quando o PC Reader estará disponível?", a: "O PC Reader aguarda aprovação da Microsoft Store. Envie um e-mail para support@mlogictech.com com o assunto \"Notify me: BiblioFuse PC Reader\" e avisaremos quando for lançado." }
    ]
  }
},

// ─── RUSSIAN ───────────────────────────────────────────────────────────────
ru: {
  table: {
    editions: { apple: "BiblioFuse Reader iOS / macOS", pc: "BiblioFuse Reader PC", android: "BiblioFuse Reader Android" },
    rows: [
      ["Сжатие / объединение", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["Форматы для чтения", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · ZIP"],
      ["Функции читалки", "TTS, peek zoom, авто-прокрутка, прогресс, оценки, метки", "TTS, авто-прокрутка, прогресс, оценки, метки", "Peek zoom, авто-прокрутка, прогресс, оценки, метки"],
      ["Стриминг PC / Mac → iPhone", "Tailscale ВКЛ — дом и 5G удалённо||Без Tailscale — только домашний Wi-Fi (не полностью протестировано)", "Tailscale ВКЛ — дом и 5G удалённо||Без Tailscale — только домашний Wi-Fi (не полностью протестировано)", "-"],
      ["Источники библиотеки", "Локально + iCloud + SMB|Mac: нативно · iOS: через стриминг", "Локально + iCloud + SMB", "Локально + внешние папки"],
      ["Полка iCloud", "Синхронизация между устройствами", "Синхронизация между устройствами", "-"],
      ["Языковая поддержка", "12 языков|EN ES FR NL PT RU ZH JA KO ID MS", "11 языков", "12 языков|EN ES FR NL PT RU ZH JA KO ID MS"]
    ]
  },
  faq: {
    items: [
      { q: "Одна покупка покрывает все платформы?", a: "Нет. iOS + Mac — это единая универсальная покупка: один платёж покрывает iPhone, iPad и Mac. Android Reader, PC Reader и инструменты для ПК продаются отдельно." },
      {
        q: "Как добавить книги и папки в BiblioFuse на iPhone?",
        a: "BiblioFuse хранит файлы в собственной папке, синхронизированной через iCloud. Вы можете добавлять книги через приложение Файлы (скопируйте файлы в папку BiblioFuse), через AirDrop или через встроенную передачу по Wi-Fi — откройте сеанс библиотеки с Mac или ПК и перетащите файлы из любого браузера.",
        link: { label: "Пошаговое руководство по загрузке контента", href: "/blog/sideload-comics-iphone-without-itunes" }
      },
      { q: "Как работает стриминг с Mac или ПК на iPhone?", a: "Ваш Mac или ПК запускает локальный сервер и записывает адрес подключения в iCloud Drive. iPhone подхватывает его автоматически. Оба устройства должны иметь одинаковый статус Tailscale: оба включены (работает дома и удалённо) или оба выключены (только одна сеть Wi-Fi, не полностью протестировано). Если только одно устройство имеет Tailscale включённым, соединение не установится. Держать оба устройства всегда включёнными — наиболее стабильный вариант." },
      {
        q: "Что нужно для настройки стриминга?",
        a: "На вашем Mac или ПК и iPhone должно быть настроено следующее:",
        bullets: [
          { text: "Одна и та же учётная запись iCloud на обоих устройствах", sub: ["На iOS и Mac: перейдите в Настройки → [ваше имя] → iCloud и убедитесь, что BiblioFuse включён", "На ПК: iCloud не встроен — <a href=\"https://apps.microsoft.com/detail/9pktq5699m62\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 hover:underline\">скачайте iCloud для Windows</a> в Microsoft Store"] },
          { text: "Статус Tailscale должен совпадать на обоих устройствах — оба ВКЛЮЧЕНЫ или оба ВЫКЛЮЧЕНЫ", sub: ["Оба включены — работает дома и удалённо по 5G", "Оба выключены — только домашний Wi-Fi (не полностью протестировано)", "Смешанный режим (один включён, другой нет) — соединение не установится", "Выходной узел Tailscale включать не нужно", "Аккаунты iCloud и Tailscale могут использовать разные адреса электронной почты"] },
          { text: "Разрешите доступ к сети при первом запуске приложения" }
        ]
      },
      { q: "Почему Android не может получать книги с Mac или ПК?", a: "Приложение Android использует другую кодовую базу без интеграции iCloud, которая является основой механизма рукопожатия стриминга. Лучший рабочий процесс для Android — синхронизировать файлы на телефон с помощью Syncthing или аналогичного инструмента, а затем добавить эту папку как источник библиотеки в приложении." },
      {
        q: "Где сохраняются прогресс чтения, закладки, оценки и метки?",
        a: "Это зависит от того, где хранится файл книги:",
        bullets: [
          { text: "Локальное хранилище — сохраняется только на этом устройстве, без синхронизации между устройствами" },
          { text: "Хранилище iCloud — сохраняется в iCloud, автоматически синхронизируется на всех устройствах iOS, Mac и ПК" },
          { text: "SMB / сетевой ресурс (стриминг Mac или ПК) — сохраняется на хост-устройстве", sub: ["iOS читает стрим с Mac: прогресс сохраняется на Mac", "iOS читает стрим с ПК: прогресс сохраняется на ПК", "ПК ↔ Mac: хранятся независимо, данные не общие", "Если вы используете и Mac, и ПК как хосты стриминга, ваши данные о чтении будут разделены. Используйте один хост для единообразия."] }
        ]
      },
      { q: "В чём разница между PC Reader и инструментами PC EPUB / CBZ?", a: "PC Reader — это полноценное приложение для чтения: открывает книги, управляет библиотекой, сжимает файлы и передаёт стрим на iPhone. Инструменты PC EPUB и CBZ — более лёгкие и дешёвые приложения, ориентированные только на сжатие и объединение, без ридера." },
      { q: "Когда будет доступен PC Reader?", a: "PC Reader ожидает одобрения Microsoft Store. Напишите на support@mlogictech.com с темой «Notify me: BiblioFuse PC Reader», и мы сообщим о запуске." }
    ]
  }
},

// ─── SIMPLIFIED CHINESE ────────────────────────────────────────────────────
zh: {
  table: {
    editions: { apple: "BiblioFuse Reader iOS / macOS", pc: "BiblioFuse Reader PC", android: "BiblioFuse Reader Android" },
    rows: [
      ["压缩 / 合并", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["支持格式", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · ZIP"],
      ["阅读器功能", "TTS、peek zoom、自动滚动、进度、评分、标签", "TTS、自动滚动、进度、评分、标签", "Peek zoom、自动滚动、进度、评分、标签"],
      ["PC / Mac → iPhone 串流", "Tailscale 开启 — 家中及5G远程||不使用 Tailscale — 仅家中 Wi-Fi（未完全测试）", "Tailscale 开启 — 家中及5G远程||不使用 Tailscale — 仅家中 Wi-Fi（未完全测试）", "-"],
      ["书库来源", "本地 + iCloud + SMB|Mac：原生 · iOS：通过串流", "本地 + iCloud + SMB", "本地 + 外部文件夹"],
      ["iCloud 书架", "跨设备同步", "跨设备同步", "-"],
      ["语言支持", "12种语言|EN ES FR NL PT RU ZH JA KO ID MS", "11种语言", "12种语言|EN ES FR NL PT RU ZH JA KO ID MS"]
    ]
  },
  faq: {
    items: [
      { q: "一次购买是否覆盖所有平台？", a: "不。iOS + Mac 是一次通用购买 — 一次付款涵盖 iPhone、iPad 和 Mac。Android Reader、PC Reader 及 PC 工具各自单独销售。" },
      {
        q: "如何在 iPhone 上向 BiblioFuse 添加书籍和文件夹？",
        a: "BiblioFuse 将文件存储在自己的 iCloud 同步文件夹中。您可以通过「文件」应用（将文件复制到 BiblioFuse 文件夹）、AirDrop，或通过内置 Wi-Fi 传输功能添加书籍 — 从 Mac 或 PC 开启库会话，然后从任意浏览器拖入文件。",
        link: { label: "逐步侧载指南", href: "/blog/sideload-comics-iphone-without-itunes" }
      },
      { q: "Mac 或 PC 向 iPhone 的串流是如何工作的？", a: "您的 Mac 或 PC 运行本地服务器，并将连接地址写入 iCloud Drive。iPhone 会自动识别。两台设备必须具有相同的 Tailscale 状态：同时开启（在家和远程均可使用）或同时关闭（仅限同一 Wi-Fi，未完全测试）。如果只有一台设备开启了 Tailscale，连接将失败。保持两台设备始终开启 Tailscale 可获得最稳定的体验。" },
      {
        q: "设置串流需要什么？",
        a: "您的 Mac 或 PC 与 iPhone 必须完成以下配置：",
        bullets: [
          { text: "两台设备使用相同的 iCloud 账户", sub: ["在 iOS 和 Mac 上：进入设置 → [您的姓名] → iCloud，确保 BiblioFuse 已启用", "在 PC 上：iCloud 未内置 — 请从 Microsoft Store <a href=\"https://apps.microsoft.com/detail/9pktq5699m62\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 hover:underline\">下载 iCloud for Windows</a>"] },
          { text: "两台设备的 Tailscale 状态必须一致 — 同时开启或同时关闭", sub: ["同时开启 — 在家和通过5G远程均可使用", "同时关闭 — 仅限家中同一 Wi-Fi（未完全测试）", "混合状态（一台开启，另一台关闭）— 连接将失败", "无需启用 Tailscale 出口节点", "iCloud 和 Tailscale 账户可使用不同的电子邮件地址"] },
          { text: "首次启动应用时允许网络访问" }
        ]
      },
      { q: "为什么 Android 无法从 Mac 或 PC 接收书籍？", a: "Android 应用使用不同的代码库，没有 iCloud 集成，而 iCloud 正是串流握手机制的基础。Android 的最佳工作流程是使用 Syncthing 或类似工具将文件同步到手机，然后在应用中将该文件夹添加为书库来源。" },
      {
        q: "阅读进度、书签、评分和标签保存在哪里？",
        a: "这取决于书籍文件的存储位置：",
        bullets: [
          { text: "本地存储 — 仅保存在该设备上，不跨设备同步" },
          { text: "iCloud 存储 — 保存至 iCloud，自动同步到所有 iOS、Mac 和 PC 设备" },
          { text: "SMB / 网络共享（Mac 或 PC 串流）— 保存在主机设备上", sub: ["iOS 读取 Mac 串流：进度保存在 Mac 上", "iOS 读取 PC 串流：进度保存在 PC 上", "PC ↔ Mac：各自独立存储，数据不共享", "如果您同时使用 Mac 和 PC 作为串流主机，您的阅读数据将被分割。建议只使用一台主机以保持一致性。"] }
        ]
      },
      { q: "PC Reader 与 PC EPUB / CBZ 工具有什么区别？", a: "PC Reader 是一款完整的阅读应用 — 它可以打开书籍、管理书库、压缩文件并向 iPhone 串流。PC EPUB 和 CBZ 工具是更轻量、更便宜的应用，仅专注于压缩和合并，没有阅读功能。" },
      { q: "PC Reader 何时上线？", a: "PC Reader 正在等待 Microsoft Store 审核。请发送电子邮件至 support@mlogictech.com，主题为\"Notify me: BiblioFuse PC Reader\"，我们将在发布时通知您。" }
    ]
  }
},

// ─── JAPANESE ──────────────────────────────────────────────────────────────
ja: {
  table: {
    editions: { apple: "BiblioFuse Reader iOS / macOS", pc: "BiblioFuse Reader PC", android: "BiblioFuse Reader Android" },
    rows: [
      ["圧縮 / 結合", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["対応フォーマット", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · ZIP"],
      ["リーダー機能", "TTS、ピークズーム、自動スクロール、進捗、評価、タグ", "TTS、自動スクロール、進捗、評価、タグ", "ピークズーム、自動スクロール、進捗、評価、タグ"],
      ["PC / Mac → iPhone ストリーミング", "Tailscale ON — 自宅 & 5Gリモート||Tailscaleなし — 自宅Wi-Fiのみ（未完全テスト）", "Tailscale ON — 自宅 & 5Gリモート||Tailscaleなし — 自宅Wi-Fiのみ（未完全テスト）", "-"],
      ["ライブラリソース", "ローカル + iCloud + SMB|Mac：ネイティブ · iOS：ストリーミング経由", "ローカル + iCloud + SMB", "ローカル + 外部フォルダ"],
      ["iCloud 本棚", "デバイス間同期", "デバイス間同期", "-"],
      ["言語サポート", "12言語|EN ES FR NL PT RU ZH JA KO ID MS", "11言語", "12言語|EN ES FR NL PT RU ZH JA KO ID MS"]
    ]
  },
  faq: {
    items: [
      { q: "1回の購入ですべてのプラットフォームをカバーしますか？", a: "いいえ。iOS + Mac は1回のユニバーサル購入で、iPhone、iPad、Mac をカバーします。Android Reader、PC Reader、PC ツールはそれぞれ別売りです。" },
      {
        q: "iPhoneのBiblioFuseに本やフォルダを追加するには？",
        a: "BiblioFuse はファイルをiCloud同期フォルダに保存します。ファイルアプリ（BiblioFuseフォルダにファイルをコピー）、AirDrop、または内蔵Wi-Fi転送で本を追加できます。MacまたはPCからライブラリセッションを開き、任意のブラウザからファイルをドラッグしてください。",
        link: { label: "ステップバイステップのサイドロードガイド", href: "/blog/sideload-comics-iphone-without-itunes" }
      },
      { q: "MacまたはPCからiPhoneへのストリーミングの仕組みは？", a: "MacまたはPCがローカルサーバーを起動し、接続アドレスをiCloud Driveに書き込みます。iPhoneが自動的に検出します。両デバイスは同じTailscale状態である必要があります：両方オン（自宅とリモートで使用可能）または両方オフ（同じWi-Fiのみ、未完全テスト）。一方のデバイスだけTailscaleがオンの場合、接続は失敗します。両方を常にオンにすると最も安定した体験が得られます。" },
      {
        q: "ストリーミングの設定に必要なものは？",
        a: "MacまたはPCとiPhoneの両方で以下を設定してください：",
        bullets: [
          { text: "両デバイスで同じiCloudアカウントにサインイン", sub: ["iOSとMacでは：設定 → [あなたの名前] → iCloudを開き、BiblioFuseが有効になっていることを確認", "PCでは：iCloudは内蔵されていません — Microsoft Storeから<a href=\"https://apps.microsoft.com/detail/9pktq5699m62\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 hover:underline\">iCloud for Windowsをダウンロード</a>"] },
          { text: "両デバイスのTailscale状態が一致している必要があります — 両方ONまたは両方OFF", sub: ["両方ON — 自宅と5Gリモートで使用可能", "両方OFF — 自宅Wi-Fiのみ（未完全テスト）", "混在（一方がON、もう一方がOFF）— 接続が失敗", "Tailscaleの出口ノードを有効にする必要はありません", "iCloudとTailscaleのアカウントは異なるメールアドレスを使用できます"] },
          { text: "アプリの初回起動時にネットワークアクセスを許可する" }
        ]
      },
      { q: "AndroidがMacやPCから本を受信できないのはなぜですか？", a: "Androidアプリはストリーミングのハンドシェイクメカニズムの基盤となるiCloud統合のない別のコードベースを使用しています。Androidの最善のワークフローは、SyncthingまたはHJようなツールを使ってファイルをスマートフォンに同期し、そのフォルダをアプリのライブラリソースとして追加することです。" },
      {
        q: "読書の進捗、ブックマーク、評価、タグはどこに保存されますか？",
        a: "本のファイルがどこに保存されているかによって異なります：",
        bullets: [
          { text: "ローカルストレージ — そのデバイスにのみ保存、デバイス間の同期なし" },
          { text: "iCloudストレージ — iCloudに保存、すべてのiOS、Mac、PCデバイスで自動同期" },
          { text: "SMB / ネットワーク共有（MacまたはPCストリーミング）— ホストデバイスに保存", sub: ["iOSがMacストリームを読む：進捗はMacに保存", "iOSがPCストリームを読む：進捗はPCに保存", "PC ↔ Mac：独立して保存され、データは共有されない", "MacとPCの両方をストリーミングホストとして使用すると、読書データが分割されます。一貫性のために1つのホストを使用することをお勧めします。"] }
        ]
      },
      { q: "PC ReaderとPC EPUB / CBZツールの違いは何ですか？", a: "PC Readerは完全な読書アプリです — 本を開き、ライブラリを管理し、ファイルを圧縮し、iPhoneにストリーミングします。PC EPUBとCBZツールは、リーダーなしで圧縮と結合のみに特化した、より軽量で安価なアプリです。" },
      { q: "PC Readerはいつ利用可能になりますか？", a: "PC ReaderはMicrosoft Storeの承認待ちです。件名「Notify me: BiblioFuse PC Reader」でsupport@mlogictech.comにメールを送ってください。リリース時にお知らせします。" }
    ]
  }
},

// ─── KOREAN ────────────────────────────────────────────────────────────────
ko: {
  table: {
    editions: { apple: "BiblioFuse Reader iOS / macOS", pc: "BiblioFuse Reader PC", android: "BiblioFuse Reader Android" },
    rows: [
      ["압축 / 병합", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["읽기 형식", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · ZIP"],
      ["리더 기능", "TTS, 피크 줌, 자동 스크롤, 진행도, 평점, 태그", "TTS, 자동 스크롤, 진행도, 평점, 태그", "피크 줌, 자동 스크롤, 진행도, 평점, 태그"],
      ["PC / Mac → iPhone 스트리밍", "Tailscale 켜짐 — 집 & 5G 원격||Tailscale 없음 — 집 Wi-Fi만 (완전히 테스트되지 않음)", "Tailscale 켜짐 — 집 & 5G 원격||Tailscale 없음 — 집 Wi-Fi만 (완전히 테스트되지 않음)", "-"],
      ["라이브러리 소스", "로컬 + iCloud + SMB|Mac: 기본 지원 · iOS: 스트리밍으로", "로컬 + iCloud + SMB", "로컬 + 외부 폴더"],
      ["iCloud 책장", "기기 간 동기화", "기기 간 동기화", "-"],
      ["언어 지원", "12개 언어|EN ES FR NL PT RU ZH JA KO ID MS", "11개 언어", "12개 언어|EN ES FR NL PT RU ZH JA KO ID MS"]
    ]
  },
  faq: {
    items: [
      { q: "한 번 구매로 모든 플랫폼을 사용할 수 있나요?", a: "아니요. iOS + Mac은 단일 범용 구매입니다 — 한 번의 결제로 iPhone, iPad, Mac을 모두 사용할 수 있습니다. Android Reader, PC Reader 및 PC 도구는 각각 별도로 판매됩니다." },
      {
        q: "iPhone의 BiblioFuse에 책과 폴더를 어떻게 추가하나요?",
        a: "BiblioFuse는 파일을 iCloud 동기화 폴더에 저장합니다. 파일 앱(BiblioFuse 폴더에 파일 복사), AirDrop, 또는 내장 Wi-Fi 전송을 통해 책을 추가할 수 있습니다. Mac 또는 PC에서 라이브러리 세션을 열고 모든 브라우저에서 파일을 드래그하면 됩니다.",
        link: { label: "단계별 사이드로드 가이드", href: "/blog/sideload-comics-iphone-without-itunes" }
      },
      { q: "Mac 또는 PC에서 iPhone으로의 스트리밍은 어떻게 작동하나요?", a: "Mac 또는 PC가 로컬 서버를 실행하고 연결 주소를 iCloud Drive에 기록합니다. iPhone이 자동으로 감지합니다. 두 기기의 Tailscale 상태가 동일해야 합니다: 둘 다 켜짐(집과 원격으로 작동) 또는 둘 다 꺼짐(동일한 Wi-Fi만, 완전히 테스트되지 않음). 한 기기만 Tailscale이 켜져 있으면 연결이 실패합니다. 두 기기를 항상 켜두면 가장 일관된 환경을 얻을 수 있습니다." },
      {
        q: "스트리밍 설정에 필요한 것은 무엇인가요?",
        a: "Mac 또는 PC와 iPhone 모두 다음이 설정되어 있어야 합니다:",
        bullets: [
          { text: "두 기기에서 동일한 iCloud 계정 사용", sub: ["iOS와 Mac에서: 설정 → [이름] → iCloud로 이동하여 BiblioFuse가 활성화되어 있는지 확인", "PC에서: iCloud가 내장되어 있지 않습니다 — Microsoft Store에서 <a href=\"https://apps.microsoft.com/detail/9pktq5699m62\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 hover:underline\">iCloud for Windows 다운로드</a>"] },
          { text: "두 기기의 Tailscale 상태가 일치해야 합니다 — 둘 다 켜짐 또는 둘 다 꺼짐", sub: ["둘 다 켜짐 — 집과 5G 원격에서 작동", "둘 다 꺼짐 — 집 Wi-Fi만 (완전히 테스트되지 않음)", "혼합 (하나는 켜짐, 다른 하나는 꺼짐) — 연결 실패", "Tailscale 출구 노드를 활성화할 필요 없음", "iCloud와 Tailscale 계정은 다른 이메일 주소를 사용할 수 있음"] },
          { text: "앱을 처음 실행할 때 네트워크 액세스 허용" }
        ]
      },
      { q: "Android가 Mac이나 PC에서 책을 받을 수 없는 이유는 무엇인가요?", a: "Android 앱은 스트리밍 핸드셰이크 메커니즘의 기반인 iCloud 통합이 없는 다른 코드베이스를 사용합니다. Android의 최선의 워크플로우는 Syncthing 또는 유사한 도구를 사용하여 파일을 휴대폰에 동기화한 다음 앱에서 해당 폴더를 라이브러리 소스로 추가하는 것입니다." },
      {
        q: "읽기 진행도, 북마크, 평점, 태그는 어디에 저장되나요?",
        a: "책 파일이 저장된 위치에 따라 다릅니다:",
        bullets: [
          { text: "로컬 저장소 — 해당 기기에만 저장, 기기 간 동기화 없음" },
          { text: "iCloud 저장소 — iCloud에 저장, 모든 iOS, Mac, PC 기기에서 자동 동기화" },
          { text: "SMB / 네트워크 공유 (Mac 또는 PC 스트리밍) — 호스트 기기에 저장", sub: ["iOS가 Mac 스트림 읽기: 진행도는 Mac에 저장", "iOS가 PC 스트림 읽기: 진행도는 PC에 저장", "PC ↔ Mac: 독립적으로 저장, 데이터 공유 없음", "Mac과 PC를 모두 스트리밍 호스트로 사용하면 읽기 데이터가 분리됩니다. 일관성을 위해 하나의 호스트만 사용하세요."] }
        ]
      },
      { q: "PC Reader와 PC EPUB / CBZ 도구의 차이점은 무엇인가요?", a: "PC Reader는 완전한 독서 앱입니다 — 책을 열고 라이브러리를 관리하고 파일을 압축하고 iPhone으로 스트리밍합니다. PC EPUB 및 CBZ 도구는 리더 없이 압축 및 병합에만 집중하는 더 가볍고 저렴한 앱입니다." },
      { q: "PC Reader는 언제 출시되나요?", a: "PC Reader는 Microsoft Store 승인을 기다리고 있습니다. 제목 \"Notify me: BiblioFuse PC Reader\"로 support@mlogictech.com에 이메일을 보내주시면 출시 시 알려드리겠습니다." }
    ]
  }
},

// ─── BAHASA INDONESIA ──────────────────────────────────────────────────────
id: {
  table: {
    editions: { apple: "BiblioFuse Reader iOS / macOS", pc: "BiblioFuse Reader PC", android: "BiblioFuse Reader Android" },
    rows: [
      ["Kompres / gabung", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["Format baca", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · ZIP"],
      ["Fitur pembaca", "TTS, peek zoom, gulir otomatis, kemajuan, penilaian, tag", "TTS, gulir otomatis, kemajuan, penilaian, tag", "Peek zoom, gulir otomatis, kemajuan, penilaian, tag"],
      ["Streaming PC / Mac → iPhone", "Tailscale AKTIF — rumah & 5G jarak jauh||Tanpa Tailscale — hanya Wi-Fi rumah (belum sepenuhnya diuji)", "Tailscale AKTIF — rumah & 5G jarak jauh||Tanpa Tailscale — hanya Wi-Fi rumah (belum sepenuhnya diuji)", "-"],
      ["Sumber perpustakaan", "Lokal + iCloud + SMB|Mac: bawaan · iOS: via streaming", "Lokal + iCloud + SMB", "Lokal + folder eksternal"],
      ["Rak buku iCloud", "Sinkronisasi lintas perangkat", "Sinkronisasi lintas perangkat", "-"],
      ["Dukungan bahasa", "12 bahasa|EN ES FR NL PT RU ZH JA KO ID MS", "11 bahasa", "12 bahasa|EN ES FR NL PT RU ZH JA KO ID MS"]
    ]
  },
  faq: {
    items: [
      { q: "Apakah satu pembelian mencakup semua platform?", a: "Tidak. iOS + Mac adalah pembelian universal tunggal — satu pembayaran mencakup iPhone, iPad, dan Mac. Android Reader, PC Reader, dan alat PC dijual secara terpisah." },
      {
        q: "Bagaimana cara menambahkan buku dan folder ke BiblioFuse di iPhone?",
        a: "BiblioFuse menyimpan file di folder tersinkronisasi iCloud-nya sendiri. Anda dapat menambahkan buku melalui aplikasi File (salin file ke folder BiblioFuse), melalui AirDrop, atau melalui fitur Transfer Wi-Fi bawaan — buka sesi pustaka dari Mac atau PC dan seret file dari browser mana pun.",
        link: { label: "Panduan sideloading langkah demi langkah", href: "/blog/sideload-comics-iphone-without-itunes" }
      },
      { q: "Bagaimana cara kerja streaming dari Mac atau PC ke iPhone?", a: "Mac atau PC Anda menjalankan server lokal dan menulis alamat koneksi ke iCloud Drive. iPhone Anda mendeteksinya secara otomatis. Kedua perangkat harus memiliki status Tailscale yang sama: keduanya aktif (bekerja di rumah dan jarak jauh) atau keduanya tidak aktif (hanya Wi-Fi yang sama, belum sepenuhnya diuji). Jika hanya satu perangkat yang mengaktifkan Tailscale, koneksi akan gagal. Menjaga keduanya selalu aktif memberikan pengalaman paling konsisten." },
      {
        q: "Apa yang dibutuhkan untuk mengatur streaming?",
        a: "Mac atau PC dan iPhone Anda harus memiliki konfigurasi berikut:",
        bullets: [
          { text: "Akun iCloud yang sama di kedua perangkat", sub: ["Di iOS dan Mac: buka Pengaturan → [nama Anda] → iCloud dan pastikan BiblioFuse diaktifkan", "Di PC: iCloud tidak bawaan — <a href=\"https://apps.microsoft.com/detail/9pktq5699m62\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 hover:underline\">unduh iCloud untuk Windows</a> dari Microsoft Store"] },
          { text: "Status Tailscale harus sama di kedua perangkat — keduanya AKTIF atau keduanya TIDAK AKTIF", sub: ["Keduanya aktif — bekerja di rumah dan jarak jauh melalui 5G", "Keduanya tidak aktif — hanya Wi-Fi rumah (belum sepenuhnya diuji)", "Campuran (satu aktif, satu tidak) — koneksi akan gagal", "Exit node Tailscale tidak perlu diaktifkan", "Akun iCloud dan Tailscale dapat menggunakan alamat email yang berbeda"] },
          { text: "Izinkan akses jaringan saat aplikasi pertama kali diluncurkan" }
        ]
      },
      { q: "Mengapa Android tidak dapat menerima buku dari Mac atau PC?", a: "Aplikasi Android menggunakan basis kode yang berbeda tanpa integrasi iCloud, yang merupakan dasar dari mekanisme jabat tangan streaming. Alur kerja terbaik untuk Android adalah menyinkronkan file ke ponsel menggunakan Syncthing atau alat serupa, lalu menambahkan folder tersebut sebagai sumber pustaka di aplikasi." },
      {
        q: "Di mana kemajuan membaca, bookmark, penilaian, dan tag disimpan?",
        a: "Tergantung di mana file buku disimpan:",
        bullets: [
          { text: "Penyimpanan lokal — disimpan hanya di perangkat itu, tidak ada sinkronisasi lintas perangkat" },
          { text: "Penyimpanan iCloud — disimpan ke iCloud, disinkronkan secara otomatis di semua perangkat iOS, Mac, dan PC" },
          { text: "SMB / berbagi jaringan (streaming Mac atau PC) — disimpan di perangkat host", sub: ["iOS membaca stream Mac: kemajuan disimpan di Mac", "iOS membaca stream PC: kemajuan disimpan di PC", "PC ↔ Mac: disimpan secara independen, data tidak dibagikan", "Jika Anda menggunakan Mac dan PC sebagai host streaming, data membaca Anda akan terbagi. Gunakan satu host untuk konsistensi."] }
        ]
      },
      { q: "Apa perbedaan antara PC Reader dan alat PC EPUB / CBZ?", a: "PC Reader adalah aplikasi membaca lengkap — membuka buku, mengelola perpustakaan, mengompres file, dan melakukan streaming ke iPhone. Alat PC EPUB dan CBZ adalah aplikasi yang lebih ringan dan murah yang hanya berfokus pada kompresi dan penggabungan, tanpa pembaca." },
      { q: "Kapan PC Reader akan tersedia?", a: "PC Reader sedang menunggu persetujuan Microsoft Store. Kirim email ke support@mlogictech.com dengan subjek \"Notify me: BiblioFuse PC Reader\" dan kami akan memberi tahu Anda saat diluncurkan." }
    ]
  }
},

// ─── BAHASA MELAYU ─────────────────────────────────────────────────────────
ms: {
  table: {
    editions: { apple: "BiblioFuse Reader iOS / macOS", pc: "BiblioFuse Reader PC", android: "BiblioFuse Reader Android" },
    rows: [
      ["Mampat / gabung", "EPUB / CBZ / CBR", "EPUB / CBZ / CBR", "EPUB / CBZ"],
      ["Format bacaan", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT", "EPUB · PDF · CBZ · ZIP"],
      ["Ciri pembaca", "TTS, peek zoom, tatal auto, kemajuan, penilaian, tag", "TTS, tatal auto, kemajuan, penilaian, tag", "Peek zoom, tatal auto, kemajuan, penilaian, tag"],
      ["Penstriman PC / Mac → iPhone", "Tailscale HIDUP — rumah & 5G jauh||Tanpa Tailscale — Wi-Fi rumah sahaja (belum diuji sepenuhnya)", "Tailscale HIDUP — rumah & 5G jauh||Tanpa Tailscale — Wi-Fi rumah sahaja (belum diuji sepenuhnya)", "-"],
      ["Sumber perpustakaan", "Tempatan + iCloud + SMB|Mac: asli · iOS: melalui penstriman", "Tempatan + iCloud + SMB", "Tempatan + folder luaran"],
      ["Rak buku iCloud", "Penyegerakan merentas peranti", "Penyegerakan merentas peranti", "-"],
      ["Sokongan bahasa", "12 bahasa|EN ES FR NL PT RU ZH JA KO ID MS", "11 bahasa", "12 bahasa|EN ES FR NL PT RU ZH JA KO ID MS"]
    ]
  },
  faq: {
    items: [
      { q: "Adakah satu pembelian meliputi semua platform?", a: "Tidak. iOS + Mac adalah pembelian universal tunggal — satu bayaran meliputi iPhone, iPad, dan Mac. Android Reader, PC Reader, dan alat PC dijual secara berasingan." },
      {
        q: "Bagaimana cara menambah buku dan folder ke BiblioFuse di iPhone?",
        a: "BiblioFuse menyimpan fail dalam foldernya sendiri yang disegerakkan dengan iCloud. Anda boleh menambah buku melalui apl Fail (salin fail ke folder BiblioFuse), melalui AirDrop, atau melalui ciri Pemindahan Wi-Fi terbina dalam — buka sesi perpustakaan dari Mac atau PC dan seret fail dari mana-mana pelayar.",
        link: { label: "Panduan sideloading langkah demi langkah", href: "/blog/sideload-comics-iphone-without-itunes" }
      },
      { q: "Bagaimana penstriman dari Mac atau PC ke iPhone berfungsi?", a: "Mac atau PC anda menjalankan pelayan tempatan dan menulis alamat sambungan ke iCloud Drive. iPhone anda mengesannya secara automatik. Kedua-dua peranti mesti mempunyai status Tailscale yang sama: kedua-duanya dihidupkan (berfungsi di rumah dan dari jauh) atau kedua-duanya dimatikan (hanya Wi-Fi yang sama, belum diuji sepenuhnya). Jika hanya satu peranti mempunyai Tailscale dihidupkan, sambungan akan gagal. Memastikan kedua-duanya sentiasa dihidupkan memberikan pengalaman yang paling konsisten." },
      {
        q: "Apa yang diperlukan untuk menyediakan penstriman?",
        a: "Mac atau PC dan iPhone anda mesti mempunyai perkara berikut dikonfigurasikan:",
        bullets: [
          { text: "Akaun iCloud yang sama pada kedua-dua peranti", sub: ["Pada iOS dan Mac: pergi ke Tetapan → [nama anda] → iCloud dan pastikan BiblioFuse didayakan", "Pada PC: iCloud tidak terbina dalam — <a href=\"https://apps.microsoft.com/detail/9pktq5699m62\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 hover:underline\">muat turun iCloud untuk Windows</a> dari Microsoft Store"] },
          { text: "Status Tailscale mesti sepadan pada kedua-dua peranti — kedua-duanya HIDUP atau kedua-duanya MATI", sub: ["Kedua-duanya hidup — berfungsi di rumah dan dari jauh melalui 5G", "Kedua-duanya mati — hanya Wi-Fi rumah (belum diuji sepenuhnya)", "Campuran (satu hidup, satu mati) — sambungan akan gagal", "Nod keluar Tailscale tidak perlu didayakan", "Akaun iCloud dan Tailscale boleh menggunakan alamat e-mel yang berbeza"] },
          { text: "Benarkan akses rangkaian apabila apl dilancarkan buat kali pertama" }
        ]
      },
      { q: "Mengapa Android tidak dapat menerima buku dari Mac atau PC?", a: "Apl Android menggunakan asas kod yang berbeza tanpa integrasi iCloud, yang merupakan asas mekanisme jabat tangan penstriman. Aliran kerja terbaik untuk Android ialah menyegerakkan fail ke telefon menggunakan Syncthing atau alat yang serupa, kemudian menambah folder tersebut sebagai sumber perpustakaan dalam apl." },
      {
        q: "Di mana kemajuan membaca, penanda buku, penilaian, dan tag disimpan?",
        a: "Bergantung pada di mana fail buku disimpan:",
        bullets: [
          { text: "Storan tempatan — disimpan pada peranti itu sahaja, tiada penyegerakan merentas peranti" },
          { text: "Storan iCloud — disimpan ke iCloud, disegerakkan secara automatik merentas semua peranti iOS, Mac, dan PC" },
          { text: "SMB / perkongsian rangkaian (penstriman Mac atau PC) — disimpan pada peranti hos", sub: ["iOS membaca strim Mac: kemajuan disimpan pada Mac", "iOS membaca strim PC: kemajuan disimpan pada PC", "PC ↔ Mac: disimpan secara bebas, data tidak dikongsi", "Jika anda menggunakan Mac dan PC sebagai hos penstriman, data bacaan anda akan terpisah. Gunakan satu hos sahaja untuk konsistensi."] }
        ]
      },
      { q: "Apakah perbezaan antara PC Reader dan alat PC EPUB / CBZ?", a: "PC Reader ialah apl membaca penuh — ia membuka buku, mengurus perpustakaan anda, memampatkan fail, dan membuat penstriman ke iPhone. Alat PC EPUB dan CBZ ialah apl yang lebih ringan dan murah yang hanya berfokus pada pemampatan dan penggabungan, tanpa pembaca." },
      { q: "Bilakah PC Reader akan tersedia?", a: "PC Reader sedang menunggu kelulusan Microsoft Store. Hantar e-mel ke support@mlogictech.com dengan subjek \"Notify me: BiblioFuse PC Reader\" dan kami akan memberitahu anda apabila ia dilancarkan." }
    ]
  }
}

}; // end T

// ─── APPLY ─────────────────────────────────────────────────────────────────
function deepMerge(target, source) {
  const out = Object.assign({}, target);
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      out[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      out[key] = source[key];
    }
  }
  return out;
}

for (const lang of Object.keys(T)) {
  const file = path.join(base, lang, 'translation.json');
  const existing = JSON.parse(fs.readFileSync(file, 'utf8'));
  existing.redesign.home = deepMerge(existing.redesign.home, T[lang]);
  fs.writeFileSync(file, JSON.stringify(existing, null, 2) + '\n');
  console.log(`✅ ${lang} updated`);
}
console.log('Done.');
