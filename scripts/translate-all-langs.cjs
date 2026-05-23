const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, '..', 'src', 'locales');

// ============ COMPLETE TRANSLATIONS FOR ALL 10 LANGUAGES ============
// Each language object contains ONLY the new keys that need translation
// The script will deep-merge these into the existing files

const T = {

es: {
  redesign: {
    productFamily: {
      eyebrow:"La familia BiblioFuse", titleA:"Un ecosistema.", titleB:"Herramientas para ser dueño de tus archivos.",
      desc:"Creado por Modern Logic Tech Solutions para lectores y coleccionistas que guardan su biblioteca en sus propios dispositivos, no detrás del inicio de sesión de otra persona.", alsoOn:"también en",
      products:{
        reader:{tag:"Insignia",desc:"Lector y gestor de biblioteca nativo para colecciones personales de e-books y cómics.",bullet1:"EPUB, PDF, CBZ, CBR, RAR, ZIP y TXT",bullet2:"Etiquetas, valoraciones, progreso y marcadores",bullet3:"Biblioteca iCloud en iPhone, iPad y Mac",cta:"Descargar en App Store",secondary:"Google Play"},
        webTool:{tag:"Gratis",desc:"Convierte, combina y comprime archivos de e-books en tu navegador, sin instalación, totalmente en el dispositivo.",bullet1:"Combinar y convertir EPUB / PDF / CBZ / ZIP",bullet2:"Impulsado por WebAssembly, 100% privado",bullet3:"Funciona en cualquier plataforma con navegador",cta:"Abrir herramienta web"},
        archive:{tag:"Mac · Windows",desc:"Encuentra y elimina archivos duplicados de cómics, fotos y archivos, incluso si han sido renombrados, recomprimidos o guardados en diferentes carpetas.",bullet1:"Hashing perceptual para CBZ/CBR/ZIP/RAR",bullet2:"Selección automática inteligente y eliminación segura a la Papelera",bullet3:"Caché de hash para escaneos rápidos repetidos",cta:"Mac App Store",secondary:"Microsoft Store"},
        smartdecrypt:{tag:"iOS · Mac · Windows",desc:"Desbloquea PDFs y archivos protegidos con contraseña usando patrones de nombres de archivo guardados.",bullet1:"Soporte para PDF, ZIP y 7z",bullet2:"Coincidencia de patrones para archivos recurrentes",bullet3:"Contraseñas guardadas en el Llavero del sistema",cta:"iOS · Mac App Store",secondary:"Microsoft Store"}
      }
    },
    readerSection:{
      eyebrow:"BiblioFuse Reader", title:"Diseñado para largas sesiones de lectura.",
      desc:"Un lector enfocado con las herramientas de biblioteca que realmente usas: formatos, carpetas, etiquetas, valoraciones, progreso y marcadores. La misma biblioteca en iPhone, iPad y Mac, sincronizada a través de iCloud.",
      features:{
        library:{eyebrow:"Biblioteca",title:"Un estante para cada formato.",desc:"EPUB, PDF, CBZ, CBR, RAR, ZIP y TXT: lee en una sola biblioteca con carpetas, búsqueda y libros recientes. Importa desde Archivos, selector de documentos o tu iCloud Drive.",bullet1Title:"Etiquetas y valoraciones",bullet1Body:"organiza sin carpetas si lo prefieres.",bullet2Title:"Progreso de lectura",bullet2Body:"cada libro recuerda dónde lo dejaste.",bullet3Title:"iCloud multidispositivo",bullet3Body:"retoma en iPhone donde paraste en iPad.",imageAlt:"Biblioteca BiblioFuse con etiquetas, valoraciones y progreso de lectura"},
        reading:{eyebrow:"Lee a tu manera",title:"TTS, auto-desplazamiento y peek zoom.",desc:"Un lector sin distracciones con los controles que importan para sesiones largas. Texto a voz para EPUB y TXT. Auto-desplazamiento para cómics y webtoons. Peek zoom para inspeccionar un panel sin perder tu lugar.",bullet1Title:"Texto a voz",bullet1Body:"narración manos libres para EPUB y TXT.",bullet2Title:"Auto-desplazamiento",bullet2Body:"paginado o continuo, ajustado para archivos de imagen.",bullet3Title:"Peek zoom",bullet3Body:"doble toque para inspeccionar paneles densos y texto pequeño.",imageAlt:"Vista de lectura BiblioFuse con TTS, auto-scroll y peek zoom"},
        streaming:{eyebrow:"Mac transmite al móvil",title:"Central de biblioteca. Transmite a tu iPhone.",badge:"Sin servidor externo · Sin suscripción",desc:"En Mac, BiblioFuse se convierte en una central de biblioteca de escritorio: gestiona carpetas locales, carpetas iCloud y recursos compartidos de red SMB en una interfaz dividida de biblioteca/lector. Luego transmite libros directamente a BiblioFuse en iPhone y iPad por Wi-Fi local en casa, o remotamente por 5G cuando estás fuera.",bullet1Title:"Streaming Wi-Fi local",bullet1Body:"navegación instantánea desde cualquier fuente Mac.",bullet2Title:"Streaming remoto 5G",bullet2Body:"abre tu biblioteca desde cualquier lugar con Tailscale.",bullet3Title:"Fuentes locales, iCloud y SMB",bullet3Body:"una biblioteca Mac, todas las carpetas que ya tienes.",bullet4Title:"PIN opcional",bullet4Body:"bloquea el acceso de streaming en redes compartidas.",imageAlt:"Biblioteca Mac BiblioFuse con lector de vista dividida",footnote:"El acceso remoto requiere iCloud iniciado y Tailscale conectado tanto en Mac como en iOS. También recomendamos usar Tailscale para conexiones Wi-Fi locales seleccionando el nombre del dispositivo con \"(iCloud)\"."}
      }
    },
    toolsHighlight:{badge:"Herramientas integradas",title:"Comprime y combina sin salir de la app.",supports:"Compatible con",onDevice:"Todo el procesamiento se ejecuta en el dispositivo. Nada se sube.",tools:{resize:{title:"Redimensionar al lado más corto",body:"Establece una dimensión mínima objetivo y repagina cada imagen de tu archivo.",kpi:"1080 px",label:"Preajuste típico"},convert:{title:"Convertir a WebP o JPG",body:"Recodifica páginas a WebP o JPG para archivos más pequeños que aún se ven nítidos.",kpi:"Hasta 50%",label:"Archivos más pequeños"},merge:{title:"Combinar capítulos y series",body:"Combina capítulos, volúmenes o descargas divididas en un solo CBZ, ZIP o PDF limpio.",kpi:"Muchos a 1",label:"Una pasada"}}},
    archiveSection:{
      badge:"App hermana · Mac y Windows",titleA:"Encuentra archivos duplicados.",titleB:"Incluso después de renombrar.",
      desc:"Archive Duplicate Scanner encuentra y elimina archivos duplicados de cómics, fotos y archivos, incluso cuando han sido renombrados, recomprimidos o guardados en diferentes carpetas.",
      features:{scanning:{title:"Escaneo de archivos de cómics",body:"CBZ, CBR, ZIP y RAR usando hash perceptual."},photo:{title:"Detección de fotos duplicadas",body:"JPG, PNG, HEIC, WEBP, BMP y GIF."},select:{title:"Selección automática inteligente",body:"Conservar el más grande, más pequeño, más nuevo, más antiguo o con más páginas."},delete:{title:"Eliminación segura",body:"Los archivos marcados solo se mueven a la Papelera del sistema."}},
      altBadge:"Descargar Archive Duplicate Scanner en la Mac App Store",altImage:"Archive Duplicate Scanner configurar e iniciar escaneo",
      pricing:"El uso gratuito está disponible para siempre para escaneos de hasta 1,000 archivos. Una prueba de 7 días desbloquea el acceso completo, y una compra única desbloquea el uso ilimitado sin suscripción.",
      stats:{threshold:"Umbral predeterminado",sampled:"Páginas muestreadas",local:"100% local",noCloud:"Sin nube, sin rastreo"}
    },
    decryptSection:{
      badge:"App hermana · iOS · Mac · Windows",titleA:"Suelta el archivo.",titleB:"Se desbloquea solo.",
      desc:"SmartDecrypt te ayuda a desbloquear PDFs y archivos protegidos con contraseña sin buscar entre notas, mensajes o correos antiguos la contraseña correcta.",
      features:{formats:{title:"PDF · ZIP · 7z",body:"Desbloquea PDFs protegidos y extrae archivos ZIP/7z."},patterns:{title:"Patrones guardados",body:"Coincide automáticamente con formatos de nombres de archivo recurrentes."},batch:{title:"Actualización por lotes",body:"Pro de pago único desbloquea carga por lotes y ciclo de contraseñas."},keychain:{title:"Seguro en el Llavero",body:"Las contraseñas permanecen en el Llavero de Apple."}},
      altBadge:"Descargar SmartDecrypt PDF ZIP en la App Store",
      pricing:"Los usuarios gratuitos pueden desbloquear un archivo a la vez con coincidencia de patrones. SmartDecrypt Pro es una compra universal única que desbloquea la carga de archivos por lotes y el ciclo automático de contraseñas en iOS y macOS.",
      steps:{drop:"Soltar archivos",match:"Coincidir patrón",unlock:"Desbloqueado"},queueTitle:"Cola (3)",queueStatus:"Coincidencia automática activa",
      states:{unlocked:"desbloqueado",matching:"coincidiendo",queued:"en cola"}
    },
    privacyStrip:{
      eyebrow:"Por qué BiblioFuse",title:"Construido sobre unos pocos principios simples.",
      items:{noAds:{title:"Sin anuncios",body:"Disfruta de lectura ininterrumpida sin publicidad."},noTracking:{title:"Sin rastreo",body:"No recopilamos ni vendemos tus datos de lectura."},cloudSync:{title:"Sincronización en la nube",body:"Sincroniza tu biblioteca entre dispositivos Apple con iCloud."},compression:{title:"Compresión inteligente",body:"Reduce el tamaño de archivo y ahorra espacio sin salir de la app."}}
    },
    finalCta:{badge:"Empieza aquí",title:"Tu biblioteca. Tu dispositivo. Tus reglas.",desc:"Empieza con el Reader. Añade las utilidades cuando las necesites. Todo permanece en el dispositivo.",button:"Probar la herramienta web"},
    stickyBar:{text:"Obtener BiblioFuse"},
    altTexts:{heroImage:"Biblioteca BiblioFuse en iPhone",logo:"Logotipo de BiblioFuse",appStore:"Descargar en la App Store",googlePlay:"Descargar en Google Play",microsoftStore:"Descargar de Microsoft"}
  }
},

fr: {
  redesign: {
    productFamily:{
      eyebrow:"La famille BiblioFuse",titleA:"Un écosystème.",titleB:"Des outils pour posséder vos fichiers.",
      desc:"Créé par Modern Logic Tech Solutions pour les lecteurs et collectionneurs qui gardent leur bibliothèque sur leurs propres appareils, pas derrière le login de quelqu'un d'autre.",alsoOn:"aussi sur",
      products:{
        reader:{tag:"Phare",desc:"Lecteur et gestionnaire de bibliothèque natif pour collections personnelles d'ebooks et de BD.",bullet1:"EPUB, PDF, CBZ, CBR, RAR, ZIP et TXT",bullet2:"Étiquettes, notes, progression et marque-pages",bullet3:"Bibliothèque iCloud sur iPhone, iPad et Mac",cta:"Télécharger sur l'App Store",secondary:"Google Play"},
        webTool:{tag:"Gratuit",desc:"Convertissez, fusionnez et compressez vos e-books dans le navigateur, sans installation, entièrement sur l'appareil.",bullet1:"Fusion et conversion EPUB / PDF / CBZ / ZIP",bullet2:"Propulsé par WebAssembly, 100% privé",bullet3:"Fonctionne sur toute plateforme avec un navigateur",cta:"Lancer l'outil web"},
        archive:{tag:"Mac · Windows",desc:"Trouve et supprime les archives de BD, photos et fichiers en double, même après renommage, recompression ou déplacement.",bullet1:"Hachage perceptuel pour CBZ/CBR/ZIP/RAR",bullet2:"Sélection automatique intelligente et suppression sécurisée vers la Corbeille",bullet3:"Cache de hachage pour analyses rapides répétées",cta:"Mac App Store",secondary:"Microsoft Store"},
        smartdecrypt:{tag:"iOS · Mac · Windows",desc:"Déverrouille les PDF et archives protégés par mot de passe grâce à des motifs de noms de fichiers enregistrés.",bullet1:"Prise en charge PDF, ZIP et 7z",bullet2:"Correspondance de motifs pour fichiers récurrents",bullet3:"Mots de passe stockés dans le Trousseau système",cta:"iOS · Mac App Store",secondary:"Microsoft Store"}
      }
    },
    readerSection:{
      eyebrow:"BiblioFuse Reader",title:"Conçu pour les longues sessions de lecture.",
      desc:"Un lecteur concentré avec les outils de bibliothèque que vous utilisez vraiment : formats, dossiers, étiquettes, notes, progression et marque-pages. La même bibliothèque sur iPhone, iPad et Mac, synchronisée via iCloud.",
      features:{
        library:{eyebrow:"Bibliothèque",title:"Une étagère pour chaque format.",desc:"EPUB, PDF, CBZ, CBR, RAR, ZIP et TXT : lisez dans une seule bibliothèque avec dossiers, recherche et livres récents. Importez depuis Fichiers, le sélecteur de documents ou votre iCloud Drive.",bullet1Title:"Étiquettes et notes",bullet1Body:"organisez sans dossiers si vous préférez.",bullet2Title:"Progression de lecture",bullet2Body:"chaque livre se souvient où vous vous êtes arrêté.",bullet3Title:"iCloud multi-appareils",bullet3Body:"reprenez sur iPhone là où vous avez arrêté sur iPad.",imageAlt:"Bibliothèque BiblioFuse avec étiquettes, notes et progression"},
        reading:{eyebrow:"Lisez à votre façon",title:"TTS, défilement auto et peek zoom.",desc:"Un lecteur sans distraction avec les commandes qui comptent pour les longues sessions. Synthèse vocale pour EPUB et TXT. Défilement automatique pour BD et webtoons. Peek zoom pour inspecter une case sans perdre votre place.",bullet1Title:"Synthèse vocale",bullet1Body:"narration mains libres pour EPUB et TXT.",bullet2Title:"Défilement automatique",bullet2Body:"paginé ou continu, optimisé pour les archives d'images.",bullet3Title:"Peek zoom",bullet3Body:"double-tap pour inspecter les cases denses et les petits textes.",imageAlt:"Vue de lecture BiblioFuse avec TTS, défilement auto et peek zoom"},
        streaming:{eyebrow:"Le Mac diffuse vers le mobile",title:"Hub de bibliothèque. Diffusez vers votre iPhone.",badge:"Aucun serveur tiers · Aucun abonnement",desc:"Sur Mac, BiblioFuse devient un hub de bibliothèque de bureau : gérez les dossiers locaux, les dossiers iCloud et les partages réseau SMB dans une interface divisée bibliothèque/lecteur. Diffusez ensuite les livres directement vers BiblioFuse sur iPhone et iPad via le Wi-Fi local à la maison, ou à distance en 5G lorsque vous êtes dehors.",bullet1Title:"Diffusion Wi-Fi locale",bullet1Body:"navigation instantanée depuis n'importe quelle source Mac.",bullet2Title:"Diffusion 5G à distance",bullet2Body:"ouvrez votre bibliothèque depuis n'importe où avec Tailscale.",bullet3Title:"Sources locales, iCloud et SMB",bullet3Body:"une bibliothèque Mac, tous les dossiers que vous avez déjà.",bullet4Title:"PIN optionnel",bullet4Body:"verrouillez l'accès en streaming sur les réseaux partagés.",imageAlt:"Bibliothèque Mac BiblioFuse avec lecteur en vue divisée",footnote:"L’accès à distance nécessite une connexion iCloud et Tailscale sur Mac et iOS. Nous recommandons aussi d’utiliser Tailscale pour les connexions Wi-Fi locales en sélectionnant le nom de l’appareil avec « (iCloud) »."}
      }
    },
    toolsHighlight:{badge:"Outils intégrés",title:"Compressez et fusionnez sans quitter l'application.",supports:"Prend en charge",onDevice:"Tout le traitement s'exécute sur l'appareil. Rien n'est téléchargé.",tools:{resize:{title:"Redimensionner au côté le plus court",body:"Définissez une dimension cible et repaginez chaque image de votre archive.",kpi:"1080 px",label:"Préréglage typique"},convert:{title:"Convertir en WebP ou JPG",body:"Réencodez les pages en WebP ou JPG pour des archives plus petites et nettes.",kpi:"Jusqu'à 50%",label:"Fichiers plus petits"},merge:{title:"Fusionner chapitres et séries",body:"Combinez chapitres, volumes ou téléchargements fractionnés en un seul CBZ, ZIP ou PDF propre.",kpi:"Plusieurs en 1",label:"En une passe"}}},
    archiveSection:{
      badge:"App sœur · Mac et Windows",titleA:"Trouvez les archives en double.",titleB:"Même après renommage.",
      desc:"Archive Duplicate Scanner trouve et supprime les archives de BD, photos et fichiers en double, même après renommage, recompression ou déplacement dans différents dossiers.",
      features:{scanning:{title:"Analyse d'archives de BD",body:"CBZ, CBR, ZIP et RAR par hachage perceptuel."},photo:{title:"Détection de photos en double",body:"JPG, PNG, HEIC, WEBP, BMP et GIF."},select:{title:"Sélection automatique intelligente",body:"Gardez le plus grand, le plus petit, le plus récent, le plus ancien ou le plus de pages."},delete:{title:"Suppression sécurisée",body:"Les fichiers marqués ne sont déplacés que vers la Corbeille système."}},
      altBadge:"Télécharger Archive Duplicate Scanner sur le Mac App Store",altImage:"Archive Duplicate Scanner configurer et lancer l'analyse",
      pricing:"L'utilisation gratuite est disponible pour toujours pour les analyses jusqu'à 1 000 fichiers. Un essai de 7 jours débloque l'accès complet, et un achat unique débloque une utilisation illimitée sans abonnement.",
      stats:{threshold:"Seuil par défaut",sampled:"Pages échantillonnées",local:"100% local",noCloud:"Sans cloud, sans pistage"}
    },
    decryptSection:{
      badge:"App sœur · iOS · Mac · Windows",titleA:"Déposez le fichier.",titleB:"Il se déverrouille tout seul.",
      desc:"SmartDecrypt vous aide à déverrouiller les PDF et archives protégés par mot de passe sans chercher dans vos notes, messages ou anciens emails le bon mot de passe.",
      features:{formats:{title:"PDF · ZIP · 7z",body:"Déverrouillez les PDF protégés et extrayez les archives ZIP/7z."},patterns:{title:"Motifs enregistrés",body:"Faites correspondre automatiquement les formats de noms de fichiers récurrents."},batch:{title:"Mise à niveau par lots",body:"La version Pro en achat unique débloque le chargement par lots et le cycle des mots de passe."},keychain:{title:"Sécurisé dans le Trousseau",body:"Les mots de passe restent dans le Trousseau Apple."}},
      altBadge:"Télécharger SmartDecrypt PDF ZIP sur l'App Store",
      pricing:"Les utilisateurs gratuits peuvent déverrouiller un fichier à la fois avec correspondance de motifs. SmartDecrypt Pro est un achat universel unique qui débloque le chargement de fichiers par lots et le cycle automatique des mots de passe sur iOS et macOS.",
      steps:{drop:"Déposer les fichiers",match:"Faire correspondre",unlock:"Déverrouillé"},queueTitle:"File d'attente (3)",queueStatus:"Correspondance automatique active",
      states:{unlocked:"déverrouillé",matching:"en correspondance",queued:"en attente"}
    },
    privacyStrip:{
      eyebrow:"Pourquoi BiblioFuse",title:"Construit sur quelques principes simples.",
      items:{noAds:{title:"Sans publicité",body:"Profitez d'une lecture ininterrompue sans publicités."},noTracking:{title:"Sans pistage",body:"Nous ne collectons ni ne vendons vos données de lecture."},cloudSync:{title:"Synchro cloud",body:"Synchronisez votre bibliothèque entre appareils Apple avec iCloud."},compression:{title:"Compression intelligente",body:"Réduisez la taille des fichiers et économisez de l'espace sans quitter l'application."}}
    },
    finalCta:{badge:"Commencez ici",title:"Votre bibliothèque. Votre appareil. Vos règles.",desc:"Commencez avec le Reader. Ajoutez les utilitaires quand vous en avez besoin. Tout reste sur l'appareil.",button:"Essayer l'outil web"},
    stickyBar:{text:"Obtenir BiblioFuse"},
    altTexts:{heroImage:"Bibliothèque BiblioFuse sur iPhone",logo:"Logo BiblioFuse",appStore:"Télécharger sur l'App Store",googlePlay:"Télécharger sur Google Play",microsoftStore:"Télécharger depuis Microsoft"}
  }
},

nl: {
  redesign: {
    productFamily:{
      eyebrow:"De BiblioFuse-familie",titleA:"Eén ecosysteem.",titleB:"Tools om je bestanden te bezitten.",
      desc:"Gebouwd door Modern Logic Tech Solutions voor lezers en verzamelaars die hun bibliotheek op hun eigen apparaten houden, niet achter andermans login.",alsoOn:"ook op",
      products:{
        reader:{tag:"Vlaggenschip",desc:"Native lezer en bibliotheekbeheerder voor persoonlijke e-book- en stripcollecties.",bullet1:"EPUB, PDF, CBZ, CBR, RAR, ZIP en TXT",bullet2:"Tags, beoordelingen, voortgang en bladwijzers",bullet3:"iCloud-bibliotheek op iPhone, iPad en Mac",cta:"Download in App Store",secondary:"Google Play"},
        webTool:{tag:"Gratis",desc:"Converteer, voeg samen en comprimeer e-bookbestanden in je browser, geen installatie, volledig op het apparaat.",bullet1:"EPUB / PDF / CBZ / ZIP samenvoegen en converteren",bullet2:"Aangedreven door WebAssembly, 100% privé",bullet3:"Werkt op elk platform met een browser",cta:"Start webtool"},
        archive:{tag:"Mac · Windows",desc:"Vindt en verwijdert dubbele striparchieven, foto's en bestanden, zelfs na hernoemen, hercomprimeren of opslaan in andere mappen.",bullet1:"Perceptuele hashing voor CBZ/CBR/ZIP/RAR",bullet2:"Slimme autoselectie en veilig verwijderen naar prullenbak",bullet3:"Hash-cache voor snelle herhaalscans",cta:"Mac App Store",secondary:"Microsoft Store"},
        smartdecrypt:{tag:"iOS · Mac · Windows",desc:"Ontgrendelt met wachtwoord beveiligde PDF's en archieven met opgeslagen bestandsnaampatronen.",bullet1:"Ondersteuning voor PDF, ZIP en 7z",bullet2:"Patroonherkenning voor terugkerende bestanden",bullet3:"Wachtwoorden opgeslagen in systeemsleutelhanger",cta:"iOS · Mac App Store",secondary:"Microsoft Store"}
      }
    },
    readerSection:{
      eyebrow:"BiblioFuse Reader",title:"Gebouwd voor lange leessessies.",
      desc:"Een gefocuste lezer met de bibliotheektools die je echt gebruikt: formaten, mappen, tags, beoordelingen, voortgang en bladwijzers. Dezelfde bibliotheek op iPhone, iPad en Mac, gesynchroniseerd via iCloud.",
      features:{
        library:{eyebrow:"Bibliotheek",title:"Eén plank voor elk formaat.",desc:"EPUB, PDF, CBZ, CBR, RAR, ZIP en TXT: lees in één bibliotheek met mappen, zoekopdracht en recente boeken. Importeer vanuit Bestanden, documentkiezer of je iCloud Drive.",bullet1Title:"Tags en beoordelingen",bullet1Body:"organiseer zonder mappen als je dat wilt.",bullet2Title:"Leesvoortgang",bullet2Body:"elk boek onthoudt waar je was gebleven.",bullet3Title:"iCloud cross-device",bullet3Body:"ga verder op iPhone waar je stopte op iPad.",imageAlt:"BiblioFuse-bibliotheek met tags, beoordelingen en leesvoortgang"},
        reading:{eyebrow:"Lees op jouw manier",title:"TTS, auto-scroll en peek zoom.",desc:"Een afleidingsvrije lezer met de bediening die telt voor lange sessies. Tekst-naar-spraak voor EPUB en TXT. Auto-scroll voor strips en webtoons. Peek zoom om een paneel te inspecteren zonder je plaats te verliezen.",bullet1Title:"Tekst-naar-spraak",bullet1Body:"handsfree vertelling voor EPUB en TXT.",bullet2Title:"Auto-scroll",bullet2Body:"gepagineerd of doorlopend, afgestemd op beeldarchieven.",bullet3Title:"Peek zoom",bullet3Body:"dubbeltik om dichte panelen en kleine tekst te inspecteren.",imageAlt:"BiblioFuse leesweergave met TTS, auto-scroll en peek zoom"},
        streaming:{eyebrow:"Mac streamt naar mobiel",title:"Bibliotheekhub. Stream naar je iPhone.",badge:"Geen server van derden · Geen abonnement",desc:"Op Mac wordt BiblioFuse een desktopbibliotheekhub: beheer lokale mappen, iCloud-mappen en SMB-netwerkshares in een split-view bibliotheek/lezer-interface. Stream boeken rechtstreeks naar BiblioFuse op iPhone en iPad via lokale Wi-Fi thuis, of op afstand via 5G als je onderweg bent.",bullet1Title:"Lokale Wi-Fi-streaming",bullet1Body:"direct bladeren vanaf elke Mac-bron.",bullet2Title:"Externe 5G-streaming",bullet2Body:"open je thuisbibliotheek overal met Tailscale.",bullet3Title:"Lokale, iCloud- en SMB-bronnen",bullet3Body:"één Mac-bibliotheek, elke map die je al hebt.",bullet4Title:"Optionele pincode",bullet4Body:"vergrendel streamingtoegang op gedeelde netwerken.",imageAlt:"BiblioFuse Mac-bibliotheek met split-view lezer",footnote:"Toegang op afstand vereist dat iCloud is aangemeld en Tailscale is verbonden op zowel Mac als iOS. We raden ook aan Tailscale te gebruiken voor lokale Wi-Fi-verbindingen door de apparaatnaam met \"(iCloud)\" te kiezen."}
      }
    },
    toolsHighlight:{badge:"Ingebouwde tools",title:"Comprimeren en samenvoegen zonder de app te verlaten.",supports:"Ondersteunt",onDevice:"Alle verwerking vindt plaats op het apparaat. Niets wordt geüpload.",tools:{resize:{title:"Formaat wijzigen naar kortste zijde",body:"Stel een doeldimensie in en herpagineer elke afbeelding in je archief.",kpi:"1080 px",label:"Standaard voorinstelling"},convert:{title:"Converteren naar WebP of JPG",body:"Hercodeer pagina's naar WebP of JPG voor kleinere archieven die er nog scherp uitzien.",kpi:"Tot 50%",label:"Kleinere bestanden"},merge:{title:"Hoofdstukken en series samenvoegen",body:"Combineer hoofdstukken, volumes of gesplitste downloads tot één schoon CBZ-, ZIP- of PDF-bestand.",kpi:"Veel naar 1",label:"In één keer"}}},
    archiveSection:{
      badge:"Zusterapp · Mac en Windows",titleA:"Vind dubbele archieven.",titleB:"Zelfs na hernoemen.",
      desc:"Archive Duplicate Scanner vindt en verwijdert dubbele striparchieven, foto's en bestanden, zelfs na hernoemen, hercomprimeren of opslaan in andere mappen.",
      features:{scanning:{title:"Striparchiefscanning",body:"CBZ, CBR, ZIP en RAR met perceptuele hashing."},photo:{title:"Fotoduplicaatdetectie",body:"JPG, PNG, HEIC, WEBP, BMP en GIF."},select:{title:"Slimme autoselectie",body:"Behoud grootste, kleinste, nieuwste, oudste of meeste pagina's."},delete:{title:"Veilig verwijderen",body:"Gemarkeerde bestanden worden alleen naar de systeemprullenbak verplaatst."}},
      altBadge:"Download Archive Duplicate Scanner in de Mac App Store",altImage:"Archive Duplicate Scanner configureren en scan starten",
      pricing:"Gratis gebruik is voor altijd beschikbaar voor scans tot 1.000 bestanden. Een proefperiode van 7 dagen ontgrendelt volledige toegang, en een eenmalige aankoop ontgrendelt onbeperkt gebruik zonder abonnement.",
      stats:{threshold:"Standaarddrempel",sampled:"Bemonsterde pagina's",local:"100% lokaal",noCloud:"Geen cloud, geen tracking"}
    },
    decryptSection:{
      badge:"Zusterapp · iOS · Mac · Windows",titleA:"Laat het bestand vallen.",titleB:"Het ontgrendelt zichzelf.",
      desc:"SmartDecrypt helpt je met wachtwoord beveiligde PDF's en archieven te ontgrendelen zonder te zoeken in notities, berichten of oude e-mails naar het juiste wachtwoord.",
      features:{formats:{title:"PDF · ZIP · 7z",body:"Ontgrendel beveiligde PDF's en pak ZIP/7z-archieven uit."},patterns:{title:"Opgeslagen patronen",body:"Kom automatisch overeen met terugkerende bestandsnaamformaten."},batch:{title:"Batch-upgrade",body:"Eenmalige Pro-aankoop ontgrendelt batch-laden en wachtwoordcyclus."},keychain:{title:"Sleutelhanger-veilig",body:"Wachtwoorden blijven in de Apple-sleutelhanger."}},
      altBadge:"Download SmartDecrypt PDF ZIP in de App Store",
      pricing:"Gratis gebruikers kunnen één bestand tegelijk ontgrendelen met patroonherkenning. SmartDecrypt Pro is een eenmalige universele aankoop die batchbestandslading en automatische wachtwoordcyclus op iOS en macOS ontgrendelt.",
      steps:{drop:"Bestanden neerzetten",match:"Patroon matchen",unlock:"Ontgrendeld"},queueTitle:"Wachtrij (3)",queueStatus:"Automatisch matchen actief",
      states:{unlocked:"ontgrendeld",matching:"matchend",queued:"in wachtrij"}
    },
    privacyStrip:{
      eyebrow:"Waarom BiblioFuse",title:"Gebouwd op een paar eenvoudige principes.",
      items:{noAds:{title:"Geen advertenties",body:"Geniet van ononderbroken lezen zonder advertenties."},noTracking:{title:"Geen tracking",body:"We verzamelen of verkopen je leesgegevens niet."},cloudSync:{title:"Cloudsync",body:"Synchroniseer je bibliotheek tussen Apple-apparaten met iCloud."},compression:{title:"Slimme compressie",body:"Verklein bestandsgrootte en bespaar ruimte zonder de app te verlaten."}}
    },
    finalCta:{badge:"Begin hier",title:"Jouw bibliotheek. Jouw apparaat. Jouw regels.",desc:"Begin met de Reader. Voeg de hulpprogramma's toe wanneer je ze nodig hebt. Alles blijft op het apparaat.",button:"Probeer de webtool"},
    stickyBar:{text:"Download BiblioFuse"},
    altTexts:{heroImage:"BiblioFuse-bibliotheek op iPhone",logo:"BiblioFuse-logo",appStore:"Download in de App Store",googlePlay:"Download op Google Play",microsoftStore:"Download bij Microsoft"}
  }
},

pt: {
  redesign: {
    productFamily:{
      eyebrow:"A família BiblioFuse",titleA:"Um ecossistema.",titleB:"Ferramentas para ser dono dos seus arquivos.",
      desc:"Criado pela Modern Logic Tech Solutions para leitores e colecionadores que mantêm a sua biblioteca nos seus próprios dispositivos, não atrás do login de outra pessoa.",alsoOn:"também em",
      products:{
        reader:{tag:"Principal",desc:"Leitor e gestor de biblioteca nativo para coleções pessoais de e-books e banda desenhada.",bullet1:"EPUB, PDF, CBZ, CBR, RAR, ZIP e TXT",bullet2:"Etiquetas, avaliações, progresso e marcadores",bullet3:"Biblioteca iCloud no iPhone, iPad e Mac",cta:"Obter na App Store",secondary:"Google Play"},
        webTool:{tag:"Grátis",desc:"Converta, junte e comprima ficheiros de e-books no seu navegador, sem instalação, totalmente no dispositivo.",bullet1:"Juntar e converter EPUB / PDF / CBZ / ZIP",bullet2:"Powered by WebAssembly, 100% privado",bullet3:"Funciona em qualquer plataforma com navegador",cta:"Abrir ferramenta web"},
        archive:{tag:"Mac · Windows",desc:"Encontra e remove arquivos duplicados de banda desenhada, fotos e ficheiros, mesmo quando renomeados, recomprimidos ou guardados em pastas diferentes.",bullet1:"Hashing percetual para CBZ/CBR/ZIP/RAR",bullet2:"Seleção automática inteligente e eliminação segura para o Lixo",bullet3:"Cache de hash para análises rápidas repetidas",cta:"Mac App Store",secondary:"Microsoft Store"},
        smartdecrypt:{tag:"iOS · Mac · Windows",desc:"Desbloqueia PDFs e arquivos protegidos por palavra-passe usando padrões de nomes de ficheiro guardados.",bullet1:"Suporte para PDF, ZIP e 7z",bullet2:"Correspondência de padrões para ficheiros recorrentes",bullet3:"Palavras-passe guardadas nas Chaves do sistema",cta:"iOS · Mac App Store",secondary:"Microsoft Store"}
      }
    },
    readerSection:{
      eyebrow:"BiblioFuse Reader",title:"Concebido para longas sessões de leitura.",
      desc:"Um leitor focado com as ferramentas de biblioteca que realmente usa: formatos, pastas, etiquetas, avaliações, progresso e marcadores. A mesma biblioteca no iPhone, iPad e Mac, sincronizada através do iCloud.",
      features:{
        library:{eyebrow:"Biblioteca",title:"Uma prateleira para cada formato.",desc:"EPUB, PDF, CBZ, CBR, RAR, ZIP e TXT: leia numa única biblioteca com pastas, pesquisa e livros recentes. Importe de Ficheiros, seletor de documentos ou do seu iCloud Drive.",bullet1Title:"Etiquetas e avaliações",bullet1Body:"organize sem pastas se preferir.",bullet2Title:"Progresso de leitura",bullet2Body:"cada livro lembra onde parou.",bullet3Title:"iCloud entre dispositivos",bullet3Body:"continue no iPhone onde parou no iPad.",imageAlt:"Biblioteca BiblioFuse com etiquetas, avaliações e progresso de leitura"},
        reading:{eyebrow:"Leia à sua maneira",title:"TTS, scroll automático e peek zoom.",desc:"Um leitor sem distrações com os controlos que importam para sessões longas. Texto para voz para EPUB e TXT. Scroll automático para banda desenhada e webtoons. Peek zoom para inspecionar um painel sem perder o lugar.",bullet1Title:"Texto para voz",bullet1Body:"narração mãos-livres para EPUB e TXT.",bullet2Title:"Scroll automático",bullet2Body:"paginado ou contínuo, afinado para arquivos de imagem.",bullet3Title:"Peek zoom",bullet3Body:"toque duplo para inspecionar painéis densos e texto pequeno.",imageAlt:"Vista de leitura BiblioFuse com TTS, scroll automático e peek zoom"},
        streaming:{eyebrow:"Mac transmite para o móvel",title:"Central de biblioteca. Transmite para o seu iPhone.",badge:"Sem servidor externo · Sem assinatura",desc:"No Mac, o BiblioFuse torna-se uma central de biblioteca de secretária: gira pastas locais, pastas iCloud e partilhas de rede SMB numa interface dividida de biblioteca/leitor. Depois transmite livros diretamente para o BiblioFuse no iPhone e iPad por Wi-Fi local em casa, ou remotamente por 5G quando está fora.",bullet1Title:"Streaming Wi-Fi local",bullet1Body:"navegação instantânea a partir de qualquer fonte Mac.",bullet2Title:"Streaming remoto 5G",bullet2Body:"abra a sua biblioteca de casa de qualquer lugar com Tailscale.",bullet3Title:"Fontes locais, iCloud e SMB",bullet3Body:"uma biblioteca Mac, todas as pastas que já tem.",bullet4Title:"PIN opcional",bullet4Body:"bloqueie o acesso de streaming em redes partilhadas.",imageAlt:"Biblioteca Mac BiblioFuse com leitor de vista dividida",footnote:"O acesso remoto requer sessão iniciada no iCloud e Tailscale ligado no Mac e no iOS. Também recomendamos usar Tailscale para ligações Wi-Fi locais selecionando o nome do dispositivo com \"(iCloud)\"."}
      }
    },
    toolsHighlight:{badge:"Ferramentas integradas",title:"Comprima e junte sem sair da aplicação.",supports:"Compatível com",onDevice:"Todo o processamento é executado no dispositivo. Nada é enviado.",tools:{resize:{title:"Redimensionar para o lado mais curto",body:"Defina uma dimensão alvo e repagine cada imagem do seu arquivo.",kpi:"1080 px",label:"Predefinição típica"},convert:{title:"Converter para WebP ou JPG",body:"Recodifique páginas para WebP ou JPG para arquivos mais pequenos e nítidos.",kpi:"Até 50%",label:"Ficheiros mais pequenos"},merge:{title:"Juntar capítulos e séries",body:"Combine capítulos, volumes ou downloads divididos num único CBZ, ZIP ou PDF limpo.",kpi:"Muitos para 1",label:"Numa só passagem"}}},
    archiveSection:{
      badge:"App irmã · Mac e Windows",titleA:"Encontre arquivos duplicados.",titleB:"Mesmo depois de renomear.",
      desc:"O Archive Duplicate Scanner encontra e remove arquivos duplicados de banda desenhada, fotos e ficheiros, mesmo quando foram renomeados, recomprimidos ou guardados em pastas diferentes.",
      features:{scanning:{title:"Análise de arquivos de BD",body:"CBZ, CBR, ZIP e RAR usando hashing percetual."},photo:{title:"Deteção de fotos duplicadas",body:"JPG, PNG, HEIC, WEBP, BMP e GIF."},select:{title:"Seleção automática inteligente",body:"Manter o maior, mais pequeno, mais recente, mais antigo ou com mais páginas."},delete:{title:"Eliminação segura",body:"Os ficheiros marcados são apenas movidos para o Lixo do sistema."}},
      altBadge:"Descarregar Archive Duplicate Scanner na Mac App Store",altImage:"Archive Duplicate Scanner configurar e iniciar análise",
      pricing:"A utilização gratuita está disponível para sempre para análises até 1.000 ficheiros. Um teste de 7 dias desbloqueia o acesso completo, e uma compra única desbloqueia o uso ilimitado sem assinatura.",
      stats:{threshold:"Limiar predefinido",sampled:"Páginas amostradas",local:"100% local",noCloud:"Sem nuvem, sem rastreio"}
    },
    decryptSection:{
      badge:"App irmã · iOS · Mac · Windows",titleA:"Solte o ficheiro.",titleB:"Ele desbloqueia-se sozinho.",
      desc:"O SmartDecrypt ajuda-o a desbloquear PDFs e arquivos protegidos por palavra-passe sem procurar em notas, mensagens ou e-mails antigos a palavra-passe certa.",
      features:{formats:{title:"PDF · ZIP · 7z",body:"Desbloqueie PDFs protegidos e extraia arquivos ZIP/7z."},patterns:{title:"Padrões guardados",body:"Corresponda automaticamente formatos de nomes de ficheiro recorrentes."},batch:{title:"Atualização em lote",body:"O Pro de compra única desbloqueia o carregamento em lote e o ciclo de palavras-passe."},keychain:{title:"Seguro nas Chaves",body:"As palavras-passe permanecem nas Chaves da Apple."}},
      altBadge:"Descarregar SmartDecrypt PDF ZIP na App Store",
      pricing:"Os utilizadores gratuitos podem desbloquear um ficheiro de cada vez com correspondência de padrões. O SmartDecrypt Pro é uma compra universal única que desbloqueia o carregamento de ficheiros em lote e o ciclo automático de palavras-passe no iOS e macOS.",
      steps:{drop:"Soltar ficheiros",match:"Corresponder padrão",unlock:"Desbloqueado"},queueTitle:"Fila (3)",queueStatus:"Correspondência automática ativa",
      states:{unlocked:"desbloqueado",matching:"a corresponder",queued:"na fila"}
    },
    privacyStrip:{
      eyebrow:"Porquê o BiblioFuse",title:"Construído com base em alguns princípios simples.",
      items:{noAds:{title:"Sem anúncios",body:"Desfrute de leitura ininterrupta sem publicidade."},noTracking:{title:"Sem rastreio",body:"Não recolhemos nem vendemos os seus dados de leitura."},cloudSync:{title:"Sincronização na nuvem",body:"Sincronize a sua biblioteca entre dispositivos Apple com iCloud."},compression:{title:"Compressão inteligente",body:"Reduza o tamanho dos ficheiros e poupe espaço sem sair da aplicação."}}
    },
    finalCta:{badge:"Comece aqui",title:"A sua biblioteca. O seu dispositivo. As suas regras.",desc:"Comece com o Reader. Adicione os utilitários quando precisar. Tudo permanece no dispositivo.",button:"Experimentar a ferramenta web"},
    stickyBar:{text:"Obter o BiblioFuse"},
    altTexts:{heroImage:"Biblioteca BiblioFuse no iPhone",logo:"Logótipo BiblioFuse",appStore:"Descarregar na App Store",googlePlay:"Descarregar no Google Play",microsoftStore:"Obter da Microsoft"}
  }
},

ru: {
  redesign: {
    productFamily:{
      eyebrow:"Семейство BiblioFuse",titleA:"Одна экосистема.",titleB:"Инструменты для владения вашими файлами.",
      desc:"Создано Modern Logic Tech Solutions для читателей и коллекционеров, которые хранят свою библиотеку на собственных устройствах, а не за чужим логином.",alsoOn:"также на",
      products:{
        reader:{tag:"Флагман",desc:"Нативный ридер и менеджер библиотеки для личных коллекций электронных книг и комиксов.",bullet1:"EPUB, PDF, CBZ, CBR, RAR, ZIP и TXT",bullet2:"Теги, рейтинг, прогресс и закладки",bullet3:"Библиотека iCloud на iPhone, iPad и Mac",cta:"Скачать в App Store",secondary:"Google Play"},
        webTool:{tag:"Бесплатно",desc:"Конвертируйте, объединяйте и сжимайте файлы электронных книг в браузере, без установки, полностью на устройстве.",bullet1:"Объединение и конвертация EPUB / PDF / CBZ / ZIP",bullet2:"На базе WebAssembly, 100% приватно",bullet3:"Работает на любой платформе с браузером",cta:"Запустить веб-инструмент"},
        archive:{tag:"Mac · Windows",desc:"Находит и удаляет дубликаты архивов комиксов, фотографий и файлов, даже если они переименованы, пережаты или сохранены в разных папках.",bullet1:"Перцептивное хеширование для CBZ/CBR/ZIP/RAR",bullet2:"Умный авто-выбор и безопасное удаление в Корзину",bullet3:"Кеш хешей для быстрых повторных сканирований",cta:"Mac App Store",secondary:"Microsoft Store"},
        smartdecrypt:{tag:"iOS · Mac · Windows",desc:"Разблокирует защищенные паролем PDF и архивы, используя сохраненные шаблоны имен файлов.",bullet1:"Поддержка PDF, ZIP и 7z",bullet2:"Сопоставление шаблонов для повторяющихся файлов",bullet3:"Пароли хранятся в системной Связке ключей",cta:"iOS · Mac App Store",secondary:"Microsoft Store"}
      }
    },
    readerSection:{
      eyebrow:"BiblioFuse Reader",title:"Создано для долгих сеансов чтения.",
      desc:"Сфокусированный ридер с инструментами библиотеки, которые вы действительно используете: форматы, папки, теги, рейтинг, прогресс и закладки. Одна библиотека на iPhone, iPad и Mac, синхронизированная через iCloud.",
      features:{
        library:{eyebrow:"Библиотека",title:"Одна полка для всех форматов.",desc:"EPUB, PDF, CBZ, CBR, RAR, ZIP и TXT: читайте в единой библиотеке с папками, поиском и недавними книгами. Импортируйте из Файлов, выбора документов или вашего iCloud Drive.",bullet1Title:"Теги и рейтинг",bullet1Body:"организуйте без папок, если хотите.",bullet2Title:"Прогресс чтения",bullet2Body:"каждая книга помнит, где вы остановились.",bullet3Title:"iCloud между устройствами",bullet3Body:"продолжите на iPhone там, где остановились на iPad.",imageAlt:"Библиотека BiblioFuse с тегами, рейтингом и прогрессом чтения"},
        reading:{eyebrow:"Читайте по-своему",title:"TTS, авто-прокрутка и peek zoom.",desc:"Ридер без отвлекающих факторов с элементами управления для долгих сессий. Озвучивание текста для EPUB и TXT. Авто-прокрутка для комиксов и вебтунов. Peek zoom для просмотра панели без потери места.",bullet1Title:"Озвучивание текста",bullet1Body:"свободные руки для EPUB и TXT.",bullet2Title:"Авто-прокрутка",bullet2Body:"постраничная или непрерывная, настроенная для архивов изображений.",bullet3Title:"Peek zoom",bullet3Body:"двойное касание для просмотра плотных панелей и мелкого текста.",imageAlt:"Просмотр чтения BiblioFuse с TTS, авто-прокруткой и peek zoom"},
        streaming:{eyebrow:"Mac транслирует на мобильный",title:"Хаб библиотеки. Транслируйте на ваш iPhone.",badge:"Без стороннего сервера · Без подписки",desc:"На Mac BiblioFuse становится настольным хабом библиотеки: управляйте локальными папками, папками iCloud и сетевыми ресурсами SMB в интерфейсе с разделенным видом библиотеки/ридера. Затем транслируйте книги прямо в BiblioFuse на iPhone и iPad по локальному Wi-Fi дома или удаленно по 5G, когда вас нет дома.",bullet1Title:"Локальный Wi-Fi стриминг",bullet1Body:"мгновенный просмотр с любого источника Mac.",bullet2Title:"Удаленный 5G стриминг",bullet2Body:"откройте домашнюю библиотеку откуда угодно с Tailscale.",bullet3Title:"Локальные, iCloud и SMB источники",bullet3Body:"одна библиотека Mac, все папки, которые у вас уже есть.",bullet4Title:"Опциональный PIN",bullet4Body:"заблокируйте доступ к стримингу в общих сетях.",imageAlt:"Библиотека Mac BiblioFuse с разделенным видом ридера",footnote:"Для удаленного доступа необходимо войти в iCloud и подключить Tailscale на Mac и iOS. Мы также рекомендуем использовать Tailscale для локального Wi-Fi, выбирая имя устройства с \"(iCloud)\"."}
      }
    },
    toolsHighlight:{badge:"Встроенные инструменты",title:"Сжимайте и объединяйте, не выходя из приложения.",supports:"Поддерживает",onDevice:"Вся обработка выполняется на устройстве. Ничего не загружается.",tools:{resize:{title:"Изменить размер по короткой стороне",body:"Установите целевой размер и переразбейте каждое изображение в архиве.",kpi:"1080 px",label:"Типичная настройка"},convert:{title:"Конвертировать в WebP или JPG",body:"Перекодируйте страницы в WebP или JPG для меньших архивов, которые выглядят четко.",kpi:"До 50%",label:"Меньше файлов"},merge:{title:"Объединить главы и серии",body:"Объединяйте главы, тома или разделенные загрузки в один чистый CBZ, ZIP или PDF.",kpi:"Много в 1",label:"За один проход"}}},
    archiveSection:{
      badge:"Родственное приложение · Mac и Windows",titleA:"Находите дубликаты архивов.",titleB:"Даже после переименования.",
      desc:"Archive Duplicate Scanner находит и удаляет дубликаты архивов комиксов, фотографий и файлов, даже если они были переименованы, пережаты или сохранены в разных папках.",
      features:{scanning:{title:"Сканирование архивов комиксов",body:"CBZ, CBR, ZIP и RAR с перцептивным хешированием."},photo:{title:"Обнаружение дубликатов фото",body:"JPG, PNG, HEIC, WEBP, BMP и GIF."},select:{title:"Умный авто-выбор",body:"Сохранить самый большой, маленький, новый, старый или с наибольшим числом страниц."},delete:{title:"Безопасное удаление",body:"Отмеченные файлы перемещаются только в системную Корзину."}},
      altBadge:"Скачать Archive Duplicate Scanner в Mac App Store",altImage:"Archive Duplicate Scanner настройка и запуск сканирования",
      pricing:"Бесплатное использование доступно навсегда для сканирования до 1 000 файлов. 7-дневная пробная версия открывает полный доступ, а одноразовая покупка открывает неограниченное использование без подписки.",
      stats:{threshold:"Порог по умолчанию",sampled:"Страниц в выборке",local:"100% локально",noCloud:"Без облака, без слежки"}
    },
    decryptSection:{
      badge:"Родственное приложение · iOS · Mac · Windows",titleA:"Бросьте файл.",titleB:"Он разблокируется сам.",
      desc:"SmartDecrypt помогает разблокировать защищенные паролем PDF и архивы без поиска в заметках, сообщениях или старых письмах нужного пароля.",
      features:{formats:{title:"PDF · ZIP · 7z",body:"Разблокируйте защищенные PDF и извлекайте архивы ZIP/7z."},patterns:{title:"Сохраненные шаблоны",body:"Автоматически сопоставляйте повторяющиеся форматы имен файлов."},batch:{title:"Пакетное обновление",body:"Pro с одноразовой покупкой открывает пакетную загрузку и циклический перебор паролей."},keychain:{title:"Безопасно в Связке ключей",body:"Пароли остаются в Связке ключей Apple."}},
      altBadge:"Скачать SmartDecrypt PDF ZIP в App Store",
      pricing:"Бесплатные пользователи могут разблокировать по одному файлу за раз с сопоставлением шаблонов. SmartDecrypt Pro — это универсальная одноразовая покупка, которая открывает пакетную загрузку файлов и автоматический циклический перебор паролей на iOS и macOS.",
      steps:{drop:"Перетащите файлы",match:"Сопоставить шаблон",unlock:"Разблокировано"},queueTitle:"Очередь (3)",queueStatus:"Авто-сопоставление активно",
      states:{unlocked:"разблокировано",matching:"сопоставление",queued:"в очереди"}
    },
    privacyStrip:{
      eyebrow:"Почему BiblioFuse",title:"Построено на нескольких простых принципах.",
      items:{noAds:{title:"Без рекламы",body:"Наслаждайтесь непрерывным чтением без рекламы."},noTracking:{title:"Без слежки",body:"Мы не собираем и не продаем ваши данные о чтении."},cloudSync:{title:"Облачная синхронизация",body:"Синхронизируйте библиотеку между устройствами Apple с iCloud."},compression:{title:"Умное сжатие",body:"Уменьшайте размер файлов и экономьте место, не выходя из приложения."}}
    },
    finalCta:{badge:"Начните здесь",title:"Ваша библиотека. Ваше устройство. Ваши правила.",desc:"Начните с Reader. Добавляйте утилиты по мере необходимости. Всё остаётся на устройстве.",button:"Попробовать веб-инструмент"},
    stickyBar:{text:"Получить BiblioFuse"},
    altTexts:{heroImage:"Библиотека BiblioFuse на iPhone",logo:"Логотип BiblioFuse",appStore:"Скачать в App Store",googlePlay:"Скачать в Google Play",microsoftStore:"Скачать из Microsoft"}
  }
},

zh: {
  redesign: {
    productFamily:{
      eyebrow:"BiblioFuse 家族",titleA:"一个生态系统。",titleB:"掌控你文件的工具。",
      desc:"由 Modern Logic Tech Solutions 为将图书馆保存在自己设备上而非他人登录后的读者和收藏者打造。",alsoOn:"也可在",
      products:{
        reader:{tag:"旗舰",desc:"个人电子书和漫画收藏的原生阅读器与图书馆管理器。",bullet1:"EPUB、PDF、CBZ、CBR、RAR、ZIP 和 TXT",bullet2:"标签、评分、进度和书签",bullet3:"iPhone、iPad 和 Mac 上的 iCloud 图书馆",cta:"在 App Store 获取",secondary:"Google Play"},
        webTool:{tag:"免费",desc:"在浏览器中转换、合并和压缩电子书文件，无需安装，完全在设备端。",bullet1:"EPUB / PDF / CBZ / ZIP 合并与转换",bullet2:"由 WebAssembly 驱动，100% 私密",bullet3:"在任何有浏览器的平台上运行",cta:"启动网页工具"},
        archive:{tag:"Mac · Windows",desc:"查找并删除重复的漫画存档、照片和文件，即使它们被重命名、重新压缩或保存在不同文件夹中。",bullet1:"CBZ/CBR/ZIP/RAR 感知哈希",bullet2:"智能自动选择和安全的废纸篓删除",bullet3:"哈希缓存实现快速重复扫描",cta:"Mac App Store",secondary:"Microsoft Store"},
        smartdecrypt:{tag:"iOS · Mac · Windows",desc:"使用已保存的文件名模式解锁受密码保护的 PDF 和存档。",bullet1:"支持 PDF、ZIP 和 7z",bullet2:"自动匹配重复出现的文件名格式",bullet3:"密码存储在系统钥匙串中",cta:"iOS · Mac App Store",secondary:"Microsoft Store"}
      }
    },
    readerSection:{
      eyebrow:"BiblioFuse Reader",title:"为长时间阅读打造。",
      desc:"一个专注的阅读器，配备你真正使用的图书馆工具：格式、文件夹、标签、评分、进度和书签。同一图书馆在 iPhone、iPad 和 Mac 上通过 iCloud 保持同步。",
      features:{
        library:{eyebrow:"图书馆",title:"每种格式一个书架。",desc:"EPUB、PDF、CBZ、CBR、RAR、ZIP 和 TXT：在一个图书馆中阅读，支持文件夹、搜索和最近书籍。从文件、文档选择器或 iCloud Drive 导入。",bullet1Title:"标签与评分",bullet1Body:"无需文件夹即可整理。",bullet2Title:"阅读进度",bullet2Body:"每本书都会记住你读到哪了。",bullet3Title:"iCloud 跨设备",bullet3Body:"在 iPhone 上从 iPad 停下的地方继续。",imageAlt:"BiblioFuse 图书馆，包含标签、评分和阅读进度"},
        reading:{eyebrow:"随心阅读",title:"TTS、自动滚动和 Peek Zoom。",desc:"一个无干扰的阅读器，具备长时间阅读所需的控件。EPUB 和 TXT 的文字转语音。漫画和 Webtoons 的自动滚动。Peek Zoom 可在不丢失位置的情况下查看面板。",bullet1Title:"文字转语音",bullet1Body:"EPUB 和 TXT 的免提朗读。",bullet2Title:"自动滚动",bullet2Body:"分页或连续，针对图像存档进行了优化。",bullet3Title:"Peek Zoom",bullet3Body:"双击查看密集面板和小号文字。",imageAlt:"BiblioFuse 阅读视图，包含 TTS、自动滚动和 Peek Zoom"},
        streaming:{eyebrow:"Mac 串流到移动端",title:"图书馆中枢。串流到你的 iPhone。",badge:"无第三方服务器 · 无订阅",desc:"在 Mac 上，BiblioFuse 变身为桌面图书馆中枢：以分屏图书馆/阅读器界面管理本地文件夹、iCloud 文件夹和 SMB 网络共享。然后通过家中本地 Wi-Fi 直接串流书籍到 iPhone 和 iPad 上的 BiblioFuse，或在外出时通过 5G 远程串流。",bullet1Title:"本地 Wi-Fi 串流",bullet1Body:"从任何 Mac 源即时浏览。",bullet2Title:"远程 5G 串流",bullet2Body:"通过 Tailscale 随时随地打开你的家庭图书馆。",bullet3Title:"本地、iCloud 和 SMB 源",bullet3Body:"一个 Mac 图书馆，所有你已有的文件夹。",bullet4Title:"可选 PIN",bullet4Body:"在共享网络上锁定串流访问。",imageAlt:"BiblioFuse Mac 图书馆，分屏阅读器",footnote:"远程访问需要在 Mac 和 iOS 上都登录 iCloud 并连接 Tailscale。我们也建议本地 Wi-Fi 连接使用 Tailscale，并选择带有“(iCloud)”的设备名称。"}
      }
    },
    toolsHighlight:{badge:"内置工具",title:"在不离开应用的情况下压缩和合并。",supports:"支持",onDevice:"所有处理均在设备上运行。不会上传任何内容。",tools:{resize:{title:"按最短边调整大小",body:"设置目标最短尺寸并重新分页存档中的每张图片。",kpi:"1080 px",label:"典型预设"},convert:{title:"转换为 WebP 或 JPG",body:"将页面重新编码为 WebP 或 JPG，以获得更小但仍清晰的存档。",kpi:"最高 50%",label:"更小的文件"},merge:{title:"合并章节与系列",body:"将章节、卷或分割下载合并为一个干净的 CBZ、ZIP 或 PDF。",kpi:"多合一",label:"一键完成"}}},
    archiveSection:{
      badge:"姊妹应用 · Mac 和 Windows",titleA:"找到重复存档。",titleB:"即使重命名后。",
      desc:"Archive Duplicate Scanner 查找并删除重复的漫画存档、照片和文件，即使它们被重命名、重新压缩或保存在不同文件夹中。",
      features:{scanning:{title:"漫画存档扫描",body:"CBZ、CBR、ZIP 和 RAR，使用感知哈希。"},photo:{title:"重复照片检测",body:"JPG、PNG、HEIC、WEBP、BMP 和 GIF。"},select:{title:"智能自动选择",body:"保留最大、最小、最新、最旧或最多页面的文件。"},delete:{title:"安全删除",body:"标记的文件仅移至系统废纸篓。"}},
      altBadge:"在 Mac App Store 下载 Archive Duplicate Scanner",altImage:"Archive Duplicate Scanner 配置并开始扫描",
      pricing:"最多 1,000 个文件的扫描永久免费使用。7 天试用解锁完整访问权限，一次性购买解锁无限使用，无需订阅。",
      stats:{threshold:"默认阈值",sampled:"已采样页面",local:"100% 本地",noCloud:"无云，无追踪"}
    },
    decryptSection:{
      badge:"姊妹应用 · iOS · Mac · Windows",titleA:"拖入文件。",titleB:"它自己解锁。",
      desc:"SmartDecrypt 帮助你解锁受密码保护的 PDF 和存档，无需在笔记、消息或旧邮件中搜索正确密码。",
      features:{formats:{title:"PDF · ZIP · 7z",body:"解锁受保护的 PDF 并提取 ZIP/7z 存档。"},patterns:{title:"已保存的模式",body:"自动匹配重复出现的文件名格式。"},batch:{title:"批量升级",body:"一次性 Pro 购买解锁批量加载和密码循环。"},keychain:{title:"钥匙串安全",body:"密码保留在 Apple 钥匙串中。"}},
      altBadge:"在 App Store 下载 SmartDecrypt PDF ZIP",
      pricing:"免费用户可以一次解锁一个文件，支持模式匹配。SmartDecrypt Pro 是一次性通用购买，解锁 iOS 和 macOS 上的批量文件加载和自动密码循环。",
      steps:{drop:"拖入文件",match:"匹配模式",unlock:"已解锁"},queueTitle:"队列 (3)",queueStatus:"自动匹配已激活",
      states:{unlocked:"已解锁",matching:"匹配中",queued:"排队中"}
    },
    privacyStrip:{
      eyebrow:"为什么选择 BiblioFuse",title:"基于几个简单的原则构建。",
      items:{noAds:{title:"无广告",body:"享受无广告打扰的阅读体验。"},noTracking:{title:"无追踪",body:"我们不会收集或出售你的阅读数据。"},cloudSync:{title:"云同步",body:"通过 iCloud 在 Apple 设备间同步你的图书馆。"},compression:{title:"智能压缩",body:"在不离开应用的情况下减小文件大小并节省空间。"}}
    },
    finalCta:{badge:"从这里开始",title:"你的图书馆。你的设备。你的规则。",desc:"从 Reader 开始。在需要时添加实用工具。一切保留在设备上。",button:"试用网页工具"},
    stickyBar:{text:"获取 BiblioFuse"},
    altTexts:{heroImage:"BiblioFuse 在 iPhone 上的图书馆",logo:"BiblioFuse 标志",appStore:"在 App Store 下载",googlePlay:"在 Google Play 获取",microsoftStore:"从 Microsoft 获取"}
  }
},

ja: {
  redesign: {
    productFamily:{
      eyebrow:"BiblioFuse ファミリー",titleA:"一つのエコシステム。",titleB:"ファイルを所有するためのツール。",
      desc:"Modern Logic Tech Solutions が、自分のデバイスにライブラリを保存する読者とコレクターのために構築。他人のログインの向こう側ではありません。",alsoOn:"こちらでも",
      products:{
        reader:{tag:"フラッグシップ",desc:"個人の電子書籍とコミックコレクションのためのネイティブリーダー兼ライブラリマネージャー。",bullet1:"EPUB、PDF、CBZ、CBR、RAR、ZIP、TXT",bullet2:"タグ、評価、進捗、ブックマーク",bullet3:"iPhone、iPad、Mac で iCloud ライブラリ",cta:"App Store で入手",secondary:"Google Play"},
        webTool:{tag:"無料",desc:"ブラウザで電子書籍ファイルを変換、結合、圧縮。インストール不要、完全にデバイス上で処理。",bullet1:"EPUB / PDF / CBZ / ZIP の結合と変換",bullet2:"WebAssembly 搭載、100% プライベート",bullet3:"ブラウザがあればどのプラットフォームでも動作",cta:"ウェブツールを起動"},
        archive:{tag:"Mac · Windows",desc:"重複するコミックアーカイブ、写真、ファイルを検出して削除。名前変更、再圧縮、別フォルダ保存後も対応。",bullet1:"CBZ/CBR/ZIP/RAR の知覚ハッシュ",bullet2:"スマート自動選択とゴミ箱への安全な削除",bullet3:"高速再スキャンのためのハッシュキャッシュ",cta:"Mac App Store",secondary:"Microsoft Store"},
        smartdecrypt:{tag:"iOS · Mac · Windows",desc:"保存したファイル名パターンを使用して、パスワード保護された PDF とアーカイブを解除。",bullet1:"PDF、ZIP、7z 対応",bullet2:"繰り返しファイルのパターンマッチ",bullet3:"パスワードはシステムキーチェーンに保存",cta:"iOS · Mac App Store",secondary:"Microsoft Store"}
      }
    },
    readerSection:{
      eyebrow:"BiblioFuse Reader",title:"長時間の読書セッションのために構築。",
      desc:"実際に使うライブラリツールを備えた集中型リーダー：フォーマット、フォルダ、タグ、評価、進捗、ブックマーク。iPhone、iPad、Mac で同じライブラリを iCloud で同期。",
      features:{
        library:{eyebrow:"ライブラリ",title:"あらゆるフォーマットに対応する一つの本棚。",desc:"EPUB、PDF、CBZ、CBR、RAR、ZIP、TXT：フォルダ、検索、最近の本を備えた単一ライブラリで読書。ファイル、ドキュメントピッカー、iCloud Drive からインポート。",bullet1Title:"タグと評価",bullet1Body:"必要に応じてフォルダなしで整理。",bullet2Title:"読書の進捗",bullet2Body:"各書籍が中断箇所を記憶。",bullet3Title:"iCloud クロスデバイス",bullet3Body:"iPad で中断した箇所を iPhone で再開。",imageAlt:"タグ、評価、読書進捗のある BiblioFuse ライブラリ"},
        reading:{eyebrow:"あなたの読み方で",title:"TTS、自動スクロール、ピークズーム。",desc:"長時間のセッションに必要な操作を備えた集中リーダー。EPUB と TXT のテキスト読み上げ。コミックとウェブトゥーンの自動スクロール。位置を失わずにパネルを拡大表示するピークズーム。",bullet1Title:"テキスト読み上げ",bullet1Body:"EPUB と TXT のハンズフリーナレーション。",bullet2Title:"自動スクロール",bullet2Body:"ページ送りまたは連続、画像アーカイブ向けに調整。",bullet3Title:"ピークズーム",bullet3Body:"ダブルタップで密集パネルと小さな文字を拡大。",imageAlt:"TTS、自動スクロール、ピークズーム付き BiblioFuse 読書ビュー"},
        streaming:{eyebrow:"Mac からモバイルへストリーミング",title:"ライブラリハブ。iPhone にストリーミング。",badge:"サードパーティサーバー不要 · サブスクリプション不要",desc:"Mac では、BiblioFuse がデスクトップライブラリハブになります：分割ビューのライブラリ/リーダーインターフェースでローカルフォルダ、iCloud フォルダ、SMB ネットワーク共有を管理。自宅ではローカル Wi-Fi 経由で、外出先では 5G でリモートから、iPhone と iPad の BiblioFuse に直接書籍をストリーミング。",bullet1Title:"ローカル Wi-Fi ストリーミング",bullet1Body:"任意の Mac ソースから即座にブラウズ。",bullet2Title:"リモート 5G ストリーミング",bullet2Body:"Tailscale でどこからでも自宅ライブラリを開く。",bullet3Title:"ローカル、iCloud、SMB ソース",bullet3Body:"一つの Mac ライブラリ、既存のすべてのフォルダ。",bullet4Title:"オプション PIN",bullet4Body:"共有ネットワークでのストリーミングアクセスをロック。",imageAlt:"分割ビューリーダー付き BiblioFuse Mac ライブラリ",footnote:"リモートアクセスには、Mac と iOS の両方で iCloud にサインインし、Tailscale に接続している必要があります。ローカル Wi-Fi 接続でも、\"(iCloud)\" が付いたデバイス名を選択して Tailscale を使うことをおすすめします。"}
      }
    },
    toolsHighlight:{badge:"内蔵ツール",title:"アプリを離れずに圧縮と結合。",supports:"対応形式",onDevice:"すべての処理はデバイス上で実行されます。アップロードは一切ありません。",tools:{resize:{title:"最短辺にリサイズ",body:"目標の最短寸法を設定し、アーカイブ内の全画像を再ページング。",kpi:"1080 px",label:"標準プリセット"},convert:{title:"WebP または JPG に変換",body:"ページを WebP または JPG に再エンコードして、より小さく鮮明なアーカイブに。",kpi:"最大 50%",label:"より小さなファイル"},merge:{title:"チャプターとシリーズを結合",body:"チャプター、巻、分割ダウンロードを一つのクリーンな CBZ、ZIP、PDF に結合。",kpi:"多数を 1 つに",label:"ワンパス"}}},
    archiveSection:{
      badge:"姉妹アプリ · Mac と Windows",titleA:"重複アーカイブを見つける。",titleB:"名前変更後も。",
      desc:"Archive Duplicate Scanner は、名前変更、再圧縮、別フォルダ保存された後でも、重複するコミックアーカイブ、写真、ファイルを検出して削除します。",
      features:{scanning:{title:"コミックアーカイブスキャン",body:"知覚ハッシュを使用した CBZ、CBR、ZIP、RAR。"},photo:{title:"重複写真検出",body:"JPG、PNG、HEIC、WEBP、BMP、GIF。"},select:{title:"スマート自動選択",body:"最大、最小、最新、最古、または最多ページ数を保持。"},delete:{title:"安全な削除",body:"マークされたファイルはシステムのゴミ箱にのみ移動。"}},
      altBadge:"Mac App Store で Archive Duplicate Scanner をダウンロード",altImage:"Archive Duplicate Scanner の設定とスキャン開始",
      pricing:"1,000 ファイルまでのスキャンは永久に無料で利用可能。7 日間のトライアルでフルアクセスが解除され、一度の購入でサブスクリプションなしの無制限利用が可能。",
      stats:{threshold:"デフォルト閾値",sampled:"サンプルページ数",local:"100% ローカル",noCloud:"クラウドなし、トラッキングなし"}
    },
    decryptSection:{
      badge:"姉妹アプリ · iOS · Mac · Windows",titleA:"ファイルをドロップ。",titleB:"自動で解除。",
      desc:"SmartDecrypt は、メモ、メッセージ、古いメールで正しいパスワードを探すことなく、パスワード保護された PDF とアーカイブのロックを解除します。",
      features:{formats:{title:"PDF · ZIP · 7z",body:"保護された PDF を解除し、ZIP/7z アーカイブを抽出。"},patterns:{title:"保存されたパターン",body:"繰り返しのファイル名形式に自動一致。"},batch:{title:"バッチアップグレード",body:"一度の Pro 購入でバッチロードとパスワードサイクルを解除。"},keychain:{title:"キーチェーン安全",body:"パスワードは Apple キーチェーンに保持。"}},
      altBadge:"App Store で SmartDecrypt PDF ZIP をダウンロード",
      pricing:"無料ユーザーはパターンマッチで一度に 1 ファイルを解除できます。SmartDecrypt Pro は一度のユニバーサル購入で、iOS と macOS でのバッチファイルロードと自動パスワードサイクルを解除します。",
      steps:{drop:"ファイルをドロップ",match:"パターンを一致",unlock:"解除済み"},queueTitle:"キュー (3)",queueStatus:"自動マッチング有効",
      states:{unlocked:"解除済み",matching:"マッチング中",queued:"待機中"}
    },
    privacyStrip:{
      eyebrow:"なぜ BiblioFuse か",title:"いくつかのシンプルな原則に基づいて構築。",
      items:{noAds:{title:"広告なし",body:"広告のない中断のない読書をお楽しみください。"},noTracking:{title:"トラッキングなし",body:"お客様の読書データを収集・販売することはありません。"},cloudSync:{title:"クラウド同期",body:"iCloud で Apple デバイス間でライブラリを同期。"},compression:{title:"スマート圧縮",body:"アプリを離れずにファイルサイズを縮小し、容量を節約。"}}
    },
    finalCta:{badge:"ここから始める",title:"あなたのライブラリ。あなたのデバイス。あなたのルール。",desc:"Reader から始めましょう。必要に応じてユーティリティを追加。すべてデバイス上に保持されます。",button:"ウェブツールを試す"},
    stickyBar:{text:"BiblioFuse を入手"},
    altTexts:{heroImage:"iPhone 上の BiblioFuse ライブラリ",logo:"BiblioFuse ロゴ",appStore:"App Store でダウンロード",googlePlay:"Google Play で入手",microsoftStore:"Microsoft から入手"}
  }
},

ko: {
  redesign: {
    productFamily:{
      eyebrow:"BiblioFuse 패밀리",titleA:"하나의 생태계.",titleB:"파일을 소유하기 위한 도구.",
      desc:"Modern Logic Tech Solutions가 자신의 기기에 라이브러리를 보관하는 독자와 수집가를 위해 제작했습니다. 타인의 로그인 뒤가 아닙니다.",alsoOn:"또한",
      products:{
        reader:{tag:"플래그십",desc:"개인 전자책과 만화 컬렉션을 위한 네이티브 리더 및 라이브러리 관리자.",bullet1:"EPUB, PDF, CBZ, CBR, RAR, ZIP, TXT",bullet2:"태그, 평점, 진행률, 북마크",bullet3:"iPhone, iPad, Mac에서 iCloud 라이브러리",cta:"App Store에서 받기",secondary:"Google Play"},
        webTool:{tag:"무료",desc:"브라우저에서 전자책 파일을 변환, 병합, 압축하세요. 설치 불필요, 완전히 기기에서 처리.",bullet1:"EPUB / PDF / CBZ / ZIP 병합 및 변환",bullet2:"WebAssembly 기반, 100% 비공개",bullet3:"브라우저만 있으면 모든 플랫폼에서 작동",cta:"웹 도구 실행"},
        archive:{tag:"Mac · Windows",desc:"중복된 만화 아카이브, 사진, 파일을 찾아 삭제합니다. 이름 변경, 재압축, 다른 폴더 저장 후에도 가능.",bullet1:"CBZ/CBR/ZIP/RAR 지각 해싱",bullet2:"스마트 자동 선택 및 휴지통으로 안전 삭제",bullet3:"빠른 재스캔을 위한 해시 캐시",cta:"Mac App Store",secondary:"Microsoft Store"},
        smartdecrypt:{tag:"iOS · Mac · Windows",desc:"저장된 파일명 패턴을 사용하여 비밀번호로 보호된 PDF와 아카이브를 잠금 해제합니다.",bullet1:"PDF, ZIP, 7z 지원",bullet2:"반복 파일에 대한 패턴 매칭",bullet3:"비밀번호는 시스템 키체인에 저장",cta:"iOS · Mac App Store",secondary:"Microsoft Store"}
      }
    },
    readerSection:{
      eyebrow:"BiblioFuse Reader",title:"긴 독서 세션을 위해 제작.",
      desc:"실제로 사용하는 라이브러리 도구를 갖춘 집중형 리더: 형식, 폴더, 태그, 평점, 진행률, 북마크. iPhone, iPad, Mac에서 iCloud로 동기화되는 동일한 라이브러리.",
      features:{
        library:{eyebrow:"라이브러리",title:"모든 형식을 위한 하나의 책장.",desc:"EPUB, PDF, CBZ, CBR, RAR, ZIP, TXT: 폴더, 검색, 최근 책이 있는 단일 라이브러리에서 읽기. 파일, 문서 선택기 또는 iCloud Drive에서 가져오기.",bullet1Title:"태그 및 평점",bullet1Body:"원하는 경우 폴더 없이 정리.",bullet2Title:"읽기 진행률",bullet2Body:"각 책이 중단 위치를 기억.",bullet3Title:"iCloud 크로스 디바이스",bullet3Body:"iPad에서 중단한 곳을 iPhone에서 이어서.",imageAlt:"태그, 평점, 읽기 진행률이 있는 BiblioFuse 라이브러리"},
        reading:{eyebrow:"당신의 방식으로 읽기",title:"TTS, 자동 스크롤, 픽 줌.",desc:"긴 세션에 필요한 컨트롤을 갖춘 방해 없는 리더. EPUB 및 TXT용 텍스트 음성 변환. 만화와 웹툰용 자동 스크롤. 위치를 잃지 않고 패널을 확대하는 픽 줌.",bullet1Title:"텍스트 음성 변환",bullet1Body:"EPUB 및 TXT용 핸즈프리 내레이션.",bullet2Title:"자동 스크롤",bullet2Body:"페이지 또는 연속, 이미지 아카이브에 맞게 조정.",bullet3Title:"픽 줌",bullet3Body:"밀집된 패널과 작은 텍스트를 더블 탭으로 확대.",imageAlt:"TTS, 자동 스크롤, 픽 줌이 있는 BiblioFuse 읽기 화면"},
        streaming:{eyebrow:"Mac에서 모바일로 스트리밍",title:"라이브러리 허브. iPhone으로 스트리밍.",badge:"타사 서버 불필요 · 구독 불필요",desc:"Mac에서 BiblioFuse는 데스크톱 라이브러리 허브가 됩니다: 분할 보기 라이브러리/리더 인터페이스에서 로컬 폴더, iCloud 폴더, SMB 네트워크 공유를 관리하세요. 그런 다음 집에서는 로컬 Wi-Fi로, 외출 시에는 5G로 원격으로 iPhone과 iPad의 BiblioFuse에 직접 책을 스트리밍하세요.",bullet1Title:"로컬 Wi-Fi 스트리밍",bullet1Body:"모든 Mac 소스에서 즉시 탐색.",bullet2Title:"원격 5G 스트리밍",bullet2Body:"Tailscale로 어디서나 홈 라이브러리 열기.",bullet3Title:"로컬, iCloud, SMB 소스",bullet3Body:"하나의 Mac 라이브러리, 이미 가지고 있는 모든 폴더.",bullet4Title:"옵션 PIN",bullet4Body:"공유 네트워크에서 스트리밍 접근 잠금.",imageAlt:"분할 보기 리더가 있는 BiblioFuse Mac 라이브러리",footnote:"원격 접근은 Mac과 iOS 모두에서 iCloud 로그인 및 Tailscale 연결이 필요합니다. 로컬 Wi-Fi 연결에도 \"(iCloud)\"가 붙은 기기 이름을 선택해 Tailscale을 사용하는 것을 권장합니다."}
      }
    },
    toolsHighlight:{badge:"내장 도구",title:"앱을 떠나지 않고 압축 및 병합.",supports:"지원",onDevice:"모든 처리는 기기에서 실행됩니다. 업로드되는 것은 없습니다.",tools:{resize:{title:"짧은 쪽으로 크기 조정",body:"목표 최단 치수를 설정하고 아카이브의 모든 이미지를 다시 페이지 매김.",kpi:"1080 px",label:"일반 프리셋"},convert:{title:"WebP 또는 JPG로 변환",body:"페이지를 WebP 또는 JPG로 다시 인코딩하여 더 작고 선명한 아카이브로.",kpi:"최대 50%",label:"더 작은 파일"},merge:{title:"챕터 및 시리즈 병합",body:"챕터, 볼륨 또는 분할 다운로드를 하나의 깨끗한 CBZ, ZIP, PDF로 결합.",kpi:"여럿을 하나로",label:"원패스"}}},
    archiveSection:{
      badge:"자매 앱 · Mac 및 Windows",titleA:"중복 아카이브 찾기.",titleB:"이름 변경 후에도.",
      desc:"Archive Duplicate Scanner는 이름 변경, 재압축, 다른 폴더 저장 후에도 중복된 만화 아카이브, 사진, 파일을 찾아 삭제합니다.",
      features:{scanning:{title:"만화 아카이브 스캔",body:"지각 해싱을 사용한 CBZ, CBR, ZIP, RAR."},photo:{title:"중복 사진 감지",body:"JPG, PNG, HEIC, WEBP, BMP, GIF."},select:{title:"스마트 자동 선택",body:"가장 큰 것, 작은 것, 최신, 가장 오래된 것 또는 가장 많은 페이지 유지."},delete:{title:"안전한 삭제",body:"표시된 파일은 시스템 휴지통으로만 이동."}},
      altBadge:"Mac App Store에서 Archive Duplicate Scanner 다운로드",altImage:"Archive Duplicate Scanner 구성 및 스캔 시작",
      pricing:"1,000개 파일까지 스캔은 영구 무료. 7일 평가판으로 전체 접근이 해제되며, 일회성 구매로 구독 없이 무제한 사용 가능.",
      stats:{threshold:"기본 임계값",sampled:"샘플링된 페이지",local:"100% 로컬",noCloud:"클라우드 없음, 추적 없음"}
    },
    decryptSection:{
      badge:"자매 앱 · iOS · Mac · Windows",titleA:"파일을 드롭하세요.",titleB:"스스로 잠금 해제됩니다.",
      desc:"SmartDecrypt는 메모, 메시지, 오래된 이메일에서 올바른 비밀번호를 찾지 않고도 비밀번호로 보호된 PDF와 아카이브를 잠금 해제합니다.",
      features:{formats:{title:"PDF · ZIP · 7z",body:"보호된 PDF 잠금 해제 및 ZIP/7z 아카이브 추출."},patterns:{title:"저장된 패턴",body:"반복되는 파일명 형식에 자동 일치."},batch:{title:"배치 업그레이드",body:"일회성 Pro 구매로 배치 로드 및 비밀번호 순환 잠금 해제."},keychain:{title:"키체인 안전",body:"비밀번호는 Apple 키체인에 보관."}},
      altBadge:"App Store에서 SmartDecrypt PDF ZIP 다운로드",
      pricing:"무료 사용자는 패턴 매칭으로 한 번에 하나의 파일을 잠금 해제할 수 있습니다. SmartDecrypt Pro는 iOS 및 macOS에서 배치 파일 로드와 자동 비밀번호 순환을 잠금 해제하는 일회성 유니버설 구매입니다.",
      steps:{drop:"파일 드롭",match:"패턴 일치",unlock:"잠금 해제됨"},queueTitle:"대기열 (3)",queueStatus:"자동 매칭 활성",
      states:{unlocked:"잠금 해제됨",matching:"매칭 중",queued:"대기 중"}
    },
    privacyStrip:{
      eyebrow:"왜 BiblioFuse인가",title:"몇 가지 간단한 원칙을 기반으로 구축.",
      items:{noAds:{title:"광고 없음",body:"광고 없는 중단 없는 독서를 즐기세요."},noTracking:{title:"추적 없음",body:"귀하의 독서 데이터를 수집하거나 판매하지 않습니다."},cloudSync:{title:"클라우드 동기화",body:"iCloud로 Apple 기기 간 라이브러리 동기화."},compression:{title:"스마트 압축",body:"앱을 떠나지 않고 파일 크기를 줄이고 공간을 절약."}}
    },
    finalCta:{badge:"여기서 시작",title:"당신의 라이브러리. 당신의 기기. 당신의 규칙.",desc:"Reader로 시작하세요. 필요할 때 유틸리티를 추가하세요. 모든 것이 기기에 유지됩니다.",button:"웹 도구 사용해 보기"},
    stickyBar:{text:"BiblioFuse 받기"},
    altTexts:{heroImage:"iPhone의 BiblioFuse 라이브러리",logo:"BiblioFuse 로고",appStore:"App Store에서 다운로드",googlePlay:"Google Play에서 받기",microsoftStore:"Microsoft에서 받기"}
  }
},

id: {
  redesign: {
    productFamily:{
      eyebrow:"Keluarga BiblioFuse",titleA:"Satu ekosistem.",titleB:"Alat untuk memiliki file Anda.",
      desc:"Dibangun oleh Modern Logic Tech Solutions untuk pembaca dan kolektor yang menyimpan perpustakaan mereka di perangkat sendiri, bukan di balik login orang lain.",alsoOn:"juga di",
      products:{
        reader:{tag:"Unggulan",desc:"Pembaca dan pengelola perpustakaan native untuk koleksi e-book dan komik pribadi.",bullet1:"EPUB, PDF, CBZ, CBR, RAR, ZIP & TXT",bullet2:"Tag, penilaian, progres & penanda buku",bullet3:"Perpustakaan iCloud di iPhone, iPad & Mac",cta:"Dapatkan di App Store",secondary:"Google Play"},
        webTool:{tag:"Gratis",desc:"Konversi, gabung, dan kompres file e-book di browser Anda, tanpa instalasi, sepenuhnya di perangkat.",bullet1:"Gabung & konversi EPUB / PDF / CBZ / ZIP",bullet2:"Didukung WebAssembly, 100% privat",bullet3:"Bekerja di platform apa pun dengan browser",cta:"Buka Web Tool"},
        archive:{tag:"Mac · Windows",desc:"Menemukan dan menghapus arsip komik, foto, dan file duplikat, bahkan setelah diganti nama, dikompres ulang, atau disimpan di folder berbeda.",bullet1:"Hashing perseptual untuk CBZ/CBR/ZIP/RAR",bullet2:"Pilih otomatis cerdas & hapus aman ke Trash",bullet3:"Cache hash untuk pemindaian ulang cepat",cta:"Mac App Store",secondary:"Microsoft Store"},
        smartdecrypt:{tag:"iOS · Mac · Windows",desc:"Membuka kunci PDF dan arsip yang dilindungi kata sandi menggunakan pola nama file yang tersimpan.",bullet1:"Dukungan PDF, ZIP & 7z",bullet2:"Cocokkan pola untuk file berulang",bullet3:"Kata sandi disimpan di Keychain sistem",cta:"iOS · Mac App Store",secondary:"Microsoft Store"}
      }
    },
    readerSection:{
      eyebrow:"BiblioFuse Reader",title:"Dibangun untuk sesi membaca panjang.",
      desc:"Pembaca yang fokus dengan alat perpustakaan yang benar-benar Anda gunakan: format, folder, tag, penilaian, progres, dan penanda buku. Perpustakaan yang sama di iPhone, iPad, dan Mac, disinkronkan melalui iCloud.",
      features:{
        library:{eyebrow:"Perpustakaan",title:"Satu rak untuk setiap format.",desc:"EPUB, PDF, CBZ, CBR, RAR, ZIP, dan TXT: baca dalam satu perpustakaan dengan folder, pencarian, dan buku terbaru. Impor dari File, pemilih dokumen, atau iCloud Drive Anda.",bullet1Title:"Tag & penilaian",bullet1Body:"atur tanpa folder jika Anda mau.",bullet2Title:"Progres membaca",bullet2Body:"setiap buku mengingat di mana Anda berhenti.",bullet3Title:"iCloud lintas perangkat",bullet3Body:"lanjutkan di iPhone dari tempat Anda berhenti di iPad.",imageAlt:"Perpustakaan BiblioFuse dengan tag, penilaian, dan progres membaca"},
        reading:{eyebrow:"Baca dengan cara Anda",title:"TTS, gulir otomatis & peek zoom.",desc:"Pembaca bebas gangguan dengan kontrol yang penting untuk sesi panjang. Teks-ke-suara untuk EPUB dan TXT. Gulir otomatis untuk komik dan webtoon. Peek zoom untuk memeriksa panel tanpa kehilangan tempat.",bullet1Title:"Teks-ke-suara",bullet1Body:"narasi hands-free untuk EPUB dan TXT.",bullet2Title:"Gulir otomatis",bullet2Body:"berhalaman atau berkelanjutan, disesuaikan untuk arsip gambar.",bullet3Title:"Peek zoom",bullet3Body:"ketuk dua kali untuk memeriksa panel padat dan teks kecil.",imageAlt:"Tampilan baca BiblioFuse dengan TTS, gulir otomatis, dan peek zoom"},
        streaming:{eyebrow:"Mac streaming ke seluler",title:"Hub perpustakaan. Streaming ke iPhone Anda.",badge:"Tanpa server pihak ketiga · Tanpa langganan",desc:"Di Mac, BiblioFuse menjadi hub perpustakaan desktop: kelola folder lokal, folder iCloud, dan berbagi jaringan SMB dalam antarmuka perpustakaan/pembaca tampilan terpisah. Lalu streaming buku langsung ke BiblioFuse di iPhone dan iPad melalui Wi-Fi lokal di rumah, atau jarak jauh melalui 5G saat Anda di luar.",bullet1Title:"Streaming Wi-Fi lokal",bullet1Body:"jelajah instan dari sumber Mac mana pun.",bullet2Title:"Streaming 5G jarak jauh",bullet2Body:"buka perpustakaan rumah Anda dari mana saja dengan Tailscale.",bullet3Title:"Sumber lokal, iCloud & SMB",bullet3Body:"satu perpustakaan Mac, semua folder yang sudah Anda miliki.",bullet4Title:"PIN opsional",bullet4Body:"kunci akses streaming di jaringan bersama.",imageAlt:"Perpustakaan Mac BiblioFuse dengan pembaca tampilan terpisah",footnote:"Akses jarak jauh memerlukan iCloud masuk dan Tailscale terhubung di Mac dan iOS. Kami juga menyarankan memakai Tailscale untuk koneksi Wi-Fi lokal dengan memilih nama perangkat yang berisi \"(iCloud)\"."}
      }
    },
    toolsHighlight:{badge:"Alat bawaan",title:"Kompres & gabung tanpa meninggalkan aplikasi.",supports:"Mendukung",onDevice:"Semua pemrosesan berjalan di perangkat. Tidak ada yang diunggah.",tools:{resize:{title:"Ubah ukuran ke sisi terpendek",body:"Tetapkan dimensi terpendek target dan halaman ulangi setiap gambar di arsip Anda.",kpi:"1080 px",label:"Preset umum"},convert:{title:"Konversi ke WebP atau JPG",body:"Enkode ulang halaman ke WebP atau JPG untuk arsip lebih kecil yang tetap tajam.",kpi:"Hingga 50%",label:"File lebih kecil"},merge:{title:"Gabung bab & seri",body:"Gabungkan bab, volume, atau unduhan terpisah menjadi satu CBZ, ZIP, atau PDF yang rapi.",kpi:"Banyak jadi 1",label:"Sekali proses"}}},
    archiveSection:{
      badge:"App saudara · Mac & Windows",titleA:"Temukan arsip duplikat.",titleB:"Bahkan setelah diganti nama.",
      desc:"Archive Duplicate Scanner menemukan dan menghapus arsip komik, foto, dan file duplikat, bahkan setelah diganti nama, dikompres ulang, atau disimpan di folder berbeda.",
      features:{scanning:{title:"Pemindaian arsip komik",body:"CBZ, CBR, ZIP, dan RAR menggunakan hashing perseptual."},photo:{title:"Deteksi foto duplikat",body:"JPG, PNG, HEIC, WEBP, BMP, dan GIF."},select:{title:"Pilih otomatis cerdas",body:"Simpan terbesar, terkecil, terbaru, terlama, atau halaman terbanyak."},delete:{title:"Penghapusan aman",body:"File yang ditandai hanya dipindahkan ke Trash sistem."}},
      altBadge:"Unduh Archive Duplicate Scanner di Mac App Store",altImage:"Archive Duplicate Scanner konfigurasi dan mulai pindai",
      pricing:"Penggunaan gratis tersedia selamanya untuk pemindaian hingga 1.000 file. Uji coba 7 hari membuka akses penuh, dan pembelian satu kali membuka penggunaan tak terbatas tanpa langganan.",
      stats:{threshold:"Ambang default",sampled:"Halaman sampel",local:"100% lokal",noCloud:"Tanpa cloud, tanpa pelacakan"}
    },
    decryptSection:{
      badge:"App saudara · iOS · Mac · Windows",titleA:"Jatuhkan file.",titleB:"Terbuka sendiri.",
      desc:"SmartDecrypt membantu Anda membuka kunci PDF dan arsip yang dilindungi kata sandi tanpa mencari di catatan, pesan, atau email lama untuk kata sandi yang tepat.",
      features:{formats:{title:"PDF · ZIP · 7z",body:"Buka kunci PDF yang dilindungi dan ekstrak arsip ZIP/7z."},patterns:{title:"Pola tersimpan",body:"Cocokkan format nama file berulang secara otomatis."},batch:{title:"Peningkatan batch",body:"Pro sekali beli membuka pemuatan batch dan siklus kata sandi."},keychain:{title:"Aman Keychain",body:"Kata sandi tetap di Apple Keychain."}},
      altBadge:"Unduh SmartDecrypt PDF ZIP di App Store",
      pricing:"Pengguna gratis dapat membuka satu file sekaligus dengan pencocokan pola. SmartDecrypt Pro adalah pembelian universal satu kali yang membuka pemuatan file batch dan siklus kata sandi otomatis di iOS dan macOS.",
      steps:{drop:"Jatuhkan file",match:"Cocokkan pola",unlock:"Terbuka"},queueTitle:"Antrian (3)",queueStatus:"Pencocokan otomatis aktif",
      states:{unlocked:"terbuka",matching:"mencocokkan",queued:"mengantri"}
    },
    privacyStrip:{
      eyebrow:"Mengapa BiblioFuse",title:"Dibangun di atas beberapa prinsip sederhana.",
      items:{noAds:{title:"Tanpa iklan",body:"Nikmati membaca tanpa gangguan iklan."},noTracking:{title:"Tanpa pelacakan",body:"Kami tidak mengumpulkan atau menjual data membaca Anda."},cloudSync:{title:"Sinkronisasi cloud",body:"Sinkronkan perpustakaan Anda di seluruh perangkat Apple dengan iCloud."},compression:{title:"Kompresi cerdas",body:"Kurangi ukuran file dan hemat ruang tanpa meninggalkan aplikasi."}}
    },
    finalCta:{badge:"Mulai di sini",title:"Perpustakaan Anda. Perangkat Anda. Aturan Anda.",desc:"Mulai dengan Reader. Tambahkan utilitas saat Anda membutuhkannya. Semuanya tetap di perangkat.",button:"Coba Web Tool"},
    stickyBar:{text:"Dapatkan BiblioFuse"},
    altTexts:{heroImage:"Perpustakaan BiblioFuse di iPhone",logo:"Logo BiblioFuse",appStore:"Unduh di App Store",googlePlay:"Dapatkan di Google Play",microsoftStore:"Dapatkan dari Microsoft"}
  }
},

ms: {
  redesign: {
    productFamily:{
      eyebrow:"Keluarga BiblioFuse",titleA:"Satu ekosistem.",titleB:"Alat untuk memiliki fail anda.",
      desc:"Dibina oleh Modern Logic Tech Solutions untuk pembaca dan pengumpul yang menyimpan perpustakaan mereka pada peranti sendiri, bukan di sebalik log masuk orang lain.",alsoOn:"juga di",
      products:{
        reader:{tag:"Unggulan",desc:"Pembaca dan pengurus perpustakaan asli untuk koleksi e-book dan komik peribadi.",bullet1:"EPUB, PDF, CBZ, CBR, RAR, ZIP & TXT",bullet2:"Tag, penilaian, kemajuan & penanda buku",bullet3:"Perpustakaan iCloud pada iPhone, iPad & Mac",cta:"Dapatkan di App Store",secondary:"Google Play"},
        webTool:{tag:"Percuma",desc:"Tukar, gabung dan mampat fail e-book dalam pelayar anda, tanpa pemasangan, sepenuhnya pada peranti.",bullet1:"Gabung & tukar EPUB / PDF / CBZ / ZIP",bullet2:"Dikuasakan WebAssembly, 100% peribadi",bullet3:"Berfungsi pada mana-mana platform dengan pelayar",cta:"Lancarkan Alat Web"},
        archive:{tag:"Mac · Windows",desc:"Mengesan dan membuang arkib komik, foto, dan fail pendua, walaupun selepas dinamakan semula, dimampatkan semula, atau disimpan dalam folder berbeza.",bullet1:"Cincangan perseptual untuk CBZ/CBR/ZIP/RAR",bullet2:"Pilih automatik pintar & padam selamat ke Tong Sampah",bullet3:"Cache cincang untuk imbasan ulang pantas",cta:"Mac App Store",secondary:"Microsoft Store"},
        smartdecrypt:{tag:"iOS · Mac · Windows",desc:"Membuka kunci PDF dan arkib yang dilindungi kata laluan menggunakan corak nama fail yang disimpan.",bullet1:"Sokongan PDF, ZIP & 7z",bullet2:"Padanan corak untuk fail berulang",bullet3:"Kata laluan disimpan dalam Rantai Kunci sistem",cta:"iOS · Mac App Store",secondary:"Microsoft Store"}
      }
    },
    readerSection:{
      eyebrow:"BiblioFuse Reader",title:"Dibina untuk sesi membaca yang panjang.",
      desc:"Pembaca fokus dengan alat perpustakaan yang benar-benar anda guna: format, folder, tag, penilaian, kemajuan, dan penanda buku. Perpustakaan yang sama pada iPhone, iPad dan Mac, diselaraskan melalui iCloud.",
      features:{
        library:{eyebrow:"Perpustakaan",title:"Satu rak untuk setiap format.",desc:"EPUB, PDF, CBZ, CBR, RAR, ZIP dan TXT: baca dalam satu perpustakaan dengan folder, carian dan buku terkini. Import dari Fail, pemilih dokumen, atau iCloud Drive anda.",bullet1Title:"Tag & penilaian",bullet1Body:"susun tanpa folder jika anda mahu.",bullet2Title:"Kemajuan membaca",bullet2Body:"setiap buku mengingati di mana anda berhenti.",bullet3Title:"iCloud merentas peranti",bullet3Body:"sambung pada iPhone dari tempat anda berhenti pada iPad.",imageAlt:"Perpustakaan BiblioFuse dengan tag, penilaian dan kemajuan membaca"},
        reading:{eyebrow:"Baca mengikut cara anda",title:"TTS, tatal auto & zum pintas.",desc:"Pembaca bebas gangguan dengan kawalan yang penting untuk sesi panjang. Teks-ke-suara untuk EPUB dan TXT. Tatal auto untuk komik dan webtoon. Zum pintas untuk memeriksa panel tanpa kehilangan tempat.",bullet1Title:"Teks-ke-suara",bullet1Body:"narasi tanpa tangan untuk EPUB dan TXT.",bullet2Title:"Tatal auto",bullet2Body:"berhalaman atau berterusan, ditala untuk arkib imej.",bullet3Title:"Zum pintas",bullet3Body:"ketuk dua kali untuk memeriksa panel padat dan teks kecil.",imageAlt:"Paparan bacaan BiblioFuse dengan TTS, tatal auto dan zum pintas"},
        streaming:{eyebrow:"Mac strim ke mudah alih",title:"Hab perpustakaan. Strim ke iPhone anda.",badge:"Tiada pelayan pihak ketiga · Tiada langganan",desc:"Pada Mac, BiblioFuse menjadi hab perpustakaan desktop: urus folder tempatan, folder iCloud dan perkongsian rangkaian SMB dalam antara muka perpustakaan/pembaca paparan berpisah. Kemudian strim buku terus ke BiblioFuse pada iPhone dan iPad melalui Wi-Fi tempatan di rumah, atau jarak jauh melalui 5G apabila anda di luar.",bullet1Title:"Strim Wi-Fi tempatan",bullet1Body:"layari segera dari mana-mana sumber Mac.",bullet2Title:"Strim 5G jarak jauh",bullet2Body:"buka perpustakaan rumah anda dari mana-mana dengan Tailscale.",bullet3Title:"Sumber tempatan, iCloud & SMB",bullet3Body:"satu perpustakaan Mac, semua folder yang anda sudah ada.",bullet4Title:"PIN pilihan",bullet4Body:"kunci akses strim pada rangkaian yang dikongsi.",imageAlt:"Perpustakaan Mac BiblioFuse dengan pembaca paparan berpisah",footnote:"Akses jarak jauh memerlukan iCloud didaftar masuk dan Tailscale disambungkan pada kedua-dua Mac dan iOS. Kami juga mengesyorkan penggunaan Tailscale untuk sambungan Wi-Fi tempatan dengan memilih nama peranti yang mengandungi \"(iCloud)\"."}
      }
    },
    toolsHighlight:{badge:"Alat terbina dalam",title:"Mampat & gabung tanpa meninggalkan aplikasi.",supports:"Menyokong",onDevice:"Semua pemprosesan berjalan pada peranti. Tiada yang dimuat naik.",tools:{resize:{title:"Ubah saiz ke sisi terpendek",body:"Tetapkan dimensi terpendek sasaran dan halaman semula setiap imej dalam arkib anda.",kpi:"1080 px",label:"Praset biasa"},convert:{title:"Tukar ke WebP atau JPG",body:"Kod semula halaman ke WebP atau JPG untuk arkib lebih kecil yang masih kelihatan tajam.",kpi:"Sehingga 50%",label:"Fail lebih kecil"},merge:{title:"Gabung bab & siri",body:"Gabungkan bab, jilid atau muat turun berpecah menjadi satu CBZ, ZIP atau PDF yang bersih.",kpi:"Banyak ke 1",label:"Satu laluan"}}},
    archiveSection:{
      badge:"Aplikasi saudara · Mac & Windows",titleA:"Cari arkib pendua.",titleB:"Walaupun selepas dinamakan semula.",
      desc:"Archive Duplicate Scanner mengesan dan membuang arkib komik, foto, dan fail pendua, walaupun selepas dinamakan semula, dimampatkan semula, atau disimpan dalam folder berbeza.",
      features:{scanning:{title:"Imbasan arkib komik",body:"CBZ, CBR, ZIP dan RAR menggunakan cincangan perseptual."},photo:{title:"Pengesanan foto pendua",body:"JPG, PNG, HEIC, WEBP, BMP dan GIF."},select:{title:"Pilih automatik pintar",body:"Simpan terbesar, terkecil, terbaharu, tertua, atau halaman terbanyak."},delete:{title:"Pemadaman selamat",body:"Fail yang ditanda hanya dipindahkan ke Tong Sampah sistem."}},
      altBadge:"Muat turun Archive Duplicate Scanner di Mac App Store",altImage:"Archive Duplicate Scanner konfigurasi dan mula imbasan",
      pricing:"Penggunaan percuma tersedia selama-lamanya untuk imbasan sehingga 1,000 fail. Percubaan 7 hari membuka akses penuh, dan pembelian sekali gus membuka penggunaan tanpa had tanpa langganan.",
      stats:{threshold:"Ambang lalai",sampled:"Halaman sampel",local:"100% tempatan",noCloud:"Tiada awan, tiada penjejakan"}
    },
    decryptSection:{
      badge:"Aplikasi saudara · iOS · Mac · Windows",titleA:"Lepaskan fail.",titleB:"Ia membuka sendiri.",
      desc:"SmartDecrypt membantu anda membuka kunci PDF dan arkib yang dilindungi kata laluan tanpa mencari melalui nota, mesej, atau e-mel lama untuk kata laluan yang betul.",
      features:{formats:{title:"PDF · ZIP · 7z",body:"Buka kunci PDF yang dilindungi dan ekstrak arkib ZIP/7z."},patterns:{title:"Corak yang disimpan",body:"Padankan format nama fail berulang secara automatik."},batch:{title:"Peningkatan kelompok",body:"Pro sekali beli membuka muatan kelompok dan kitaran kata laluan."},keychain:{title:"Selamat Rantai Kunci",body:"Kata laluan kekal dalam Rantai Kunci Apple."}},
      altBadge:"Muat turun SmartDecrypt PDF ZIP di App Store",
      pricing:"Pengguna percuma boleh membuka satu fail pada satu masa dengan padanan corak. SmartDecrypt Pro adalah pembelian universal sekali gus yang membuka muatan fail kelompok dan kitaran kata laluan automatik pada iOS dan macOS.",
      steps:{drop:"Lepaskan fail",match:"Padankan corak",unlock:"Dibuka"},queueTitle:"Giliran (3)",queueStatus:"Padanan automatik aktif",
      states:{unlocked:"dibuka",matching:"memadankan",queued:"dalam giliran"}
    },
    privacyStrip:{
      eyebrow:"Mengapa BiblioFuse",title:"Dibina di atas beberapa prinsip mudah.",
      items:{noAds:{title:"Tiada iklan",body:"Nikmati bacaan tanpa gangguan iklan."},noTracking:{title:"Tiada penjejakan",body:"Kami tidak mengumpul atau menjual data bacaan anda."},cloudSync:{title:"Segerak awan",body:"Selaraskan perpustakaan anda merentas peranti Apple dengan iCloud."},compression:{title:"Mampatan pintar",body:"Kurangkan saiz fail dan jimat ruang tanpa meninggalkan aplikasi."}}
    },
    finalCta:{badge:"Mula di sini",title:"Perpustakaan anda. Peranti anda. Peraturan anda.",desc:"Mula dengan Reader. Tambah utiliti apabila anda memerlukannya. Semuanya kekal pada peranti.",button:"Cuba Alat Web"},
    stickyBar:{text:"Dapatkan BiblioFuse"},
    altTexts:{heroImage:"Perpustakaan BiblioFuse pada iPhone",logo:"Logo BiblioFuse",appStore:"Muat turun di App Store",googlePlay:"Dapatkan di Google Play",microsoftStore:"Dapatkan dari Microsoft"}
  }
}

};

// ============ APPLY TRANSLATIONS ============
function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key] || typeof target[key] !== 'object') target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
}

const langs = Object.keys(T);
for (const lang of langs) {
  const filePath = path.join(base, lang, 'translation.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  deepMerge(data, T[lang]);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`✅ Translated: ${lang} (${Object.keys(T[lang].redesign).length} sections)`);
}
console.log('\n🎉 All 10 languages translated!');
