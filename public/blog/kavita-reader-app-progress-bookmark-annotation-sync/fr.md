# Application de lecture Kavita pour iPhone, iPad et Android : synchronisation de la progression, des signets et des annotations

**Réponse courte :** [BiblioFuse Reader](https://bibliofuse.com/fr/comicreader/) se connecte à un serveur Kavita via l’API de Kavita, et pas seulement via son flux OPDS. Il peut ainsi synchroniser la progression de lecture dans les deux sens, synchroniser les signets, et synchroniser les surlignages et notes EPUB — y compris leur ajout, leur modification et leur suppression — avec les mêmes annotations que celles du lecteur web de Kavita. La configuration se fait en un seul scan de QR code.

Ce guide explique ce qui est synchronisé, ce qui ne l’est pas, quels formats de fichiers sont pris en charge et comment se connecter en moins d’une minute.

## Pourquoi la progression Kavita ne se synchronise souvent pas dans les applications de lecture

La plupart des lecteurs tiers communiquent avec Kavita via OPDS. OPDS est un protocole de catalogue : il sait lister des séries et transmettre des fichiers, mais il n’a jamais été conçu pour renvoyer au serveur votre position de lecture, vos signets ou vos notes. La documentation de Kavita indique elle-même que la manière la plus riche d’utiliser un serveur Kavita passe par son API.

Si vous avez déjà terminé un tome sur votre téléphone pour le retrouver marqué comme non lu dans Kavita, l’application utilisait presque certainement OPDS seul.

BiblioFuse utilise directement l’API de Kavita. Vos séries, volumes, chapitres, hors-séries, listes de lecture et collections apparaissent comme dans Kavita, et ce que vous faites dans le lecteur est réécrit sur le serveur.

## Ce qui est synchronisé entre BiblioFuse et Kavita

| Fonction | Ce que fait BiblioFuse sur un serveur Kavita |
|---|---|
| Progression de lecture | Synchronisée dans les deux sens. Ouvrez un livre : il reprend là où Kavita indique que vous vous êtes arrêté ; continuez à lire et Kavita est mis à jour. |
| Position exacte dans l’EPUB | Reprise à l’endroit précis dans le chapitre, pas seulement au chapitre. |
| Signets | Signets de page pour les BD et les PDF, signets dans le texte pour les EPUB, enregistrés dans Kavita. |
| Surlignages | Les surlignages EPUB sont synchronisés via l’API d’annotations de Kavita, avec les couleurs de surlignage de votre serveur. |
| Notes | Les notes EPUB sont synchronisées, y compris les notes mises en forme rédigées dans le lecteur web de Kavita. |
| Gestion des annotations | Ajoutez, modifiez et supprimez surlignages et notes depuis le lecteur ou la liste Annotations. Les changements sont envoyés au serveur. |
| Modifications hors ligne | Enregistrées d’abord sur l’appareil, puis envoyées dès que le serveur est de nouveau joignable. |

Les surlignages et notes créés dans BiblioFuse apparaissent dans le panneau d’annotations du lecteur web de Kavita, et les annotations créées sur le web apparaissent dans BiblioFuse à la prochaine ouverture du livre.

## Formats de fichiers pris en charge sur un serveur Kavita

Tous les formats ne prennent pas en charge tous les types de synchronisation. C’est une limite de ce que Kavita stocke pour chaque format, pas un réglage modifiable.

| Format | Lecture | Progression | Signets | Surlignages / notes |
|---|---|---|---|---|
| CBZ / CBR | En streaming, sans téléchargement complet | Synchronisée | Signets de page | Non pris en charge |
| EPUB | En streaming | Synchronisée (par position dans le chapitre) | Synchronisés | Synchronisés (API d’annotations de Kavita) |
| PDF | Oui | Synchronisée (par page) | Signets de page | Non pris en charge (les annotations Kavita sont réservées aux EPUB) |

En pratique :

- **Les BD et mangas (CBZ, CBR)** s’ouvrent page par page. Rien n’est téléchargé en entier, sauf si vous choisissez d’enregistrer le livre pour le lire hors ligne.
- **Les EPUB** bénéficient de l’ensemble : progression, signets, surlignages et notes.
- **Les PDF** gardent leur page et leurs signets de page synchronisés. Kavita ne stocke pas d’annotations pour les PDF : les surlignages PDF restent donc sur votre appareil.

## Ajouter votre serveur Kavita en moins d’une minute

Il vous faut BiblioFuse Pro pour les connexions aux serveurs, l’adresse de votre serveur Kavita et votre clé d’authentification Kavita (dans Kavita, ouvrez vos réglages utilisateur et cherchez la section clé API ou clients tiers).

### Option 1 : scanner un QR code (le plus rapide)

1. Sur un ordinateur, ouvrez le [générateur de QR code BiblioFuse pour Kavita et Komga](https://bibliofuse.com/fr/tools/qr-generator/).
2. Choisissez **Kavita**, saisissez l’adresse de votre serveur et collez votre clé d’authentification. Le QR code est généré dans votre navigateur ; rien n’est envoyé nulle part.
3. Sur votre téléphone ou votre tablette, ouvrez **BiblioFuse > Réglages > OPDS** et touchez l’**icône de scan QR**.
4. Scannez le code. Le serveur est ajouté avec l’adresse et la clé déjà renseignées.

Traitez le QR code comme un mot de passe. Il contient votre clé d’authentification : n’en publiez pas de capture d’écran.

### Option 2 : saisir les informations

Ouvrez **BiblioFuse > Réglages > OPDS > Ajouter un serveur**, choisissez Kavita, puis saisissez à la main l’adresse (par exemple `http://192.168.1.20:5000`) et la clé d’authentification.

Une fois le serveur ajouté, ouvrez le panneau Emplacement en haut de la Bibliothèque et choisissez votre serveur Kavita. Le [guide de configuration](https://bibliofuse.com/fr/guide/) complet propose des captures d’écran pour chaque étape.

## Gérer les surlignages et les notes

Sélectionnez du texte dans un EPUB Kavita pour le surligner ou ajouter une note. Sur un livre Kavita, le sélecteur de couleur affiche les cinq couleurs de surlignage de votre serveur : un surlignage a donc le même aspect dans BiblioFuse et dans le lecteur web de Kavita.

- **Ajouter :** sélectionnez du texte, puis choisissez Surligner ou Note.
- **Modifier :** sélectionnez à l’intérieur d’un surlignage existant et choisissez Modifier l’annotation, ou modifiez-le depuis la liste Annotations. Vous pouvez changer la couleur et la note.
- **Supprimer :** retirez-le depuis le lecteur ou la liste Annotations. La suppression est envoyée à Kavita.

La liste Annotations affiche tous les surlignages et notes du livre en cours, avec une recherche, et vous amène directement au passage lorsque vous en touchez un.

## Appareils pris en charge

- **iPhone, iPad et iPhone Duo :** synchronisation de la progression, des signets et des annotations, dans BiblioFuse 2.1.15.
- **Apple Vision Pro :** bibliothèques Kavita, progression, signets et annotations dans l’application visionOS native, dans BiblioFuse 2.1.15.
- **Téléphones et tablettes Android :** synchronisation de la progression, des signets et des annotations, dans BiblioFuse 2.0.16.
- **Apple TV et Android TV :** ils lisent depuis un hôte BiblioFuse sur votre propre réseau et ne se connectent pas à Kavita.

Le [tableau des fonctionnalités](https://bibliofuse.com/fr/features/) indique ce que chaque plateforme prend en charge et depuis quelle version.

## Pas de serveur Kavita ? BiblioFuse a son propre hôte

Kavita est un excellent serveur, mais vous n’en avez pas besoin. BiblioFuse inclut son propre hôte gratuit pour Mac, PC Windows, Docker et NAS Synology. Indiquez-lui les dossiers que vous avez déjà et diffusez vers BiblioFuse sur vos autres appareils, en Wi-Fi à la maison ou à distance avec Tailscale.

La différence à retenir : sur un hôte BiblioFuse, la progression de lecture, les signets, les surlignages et les notes sont synchronisés pour **tous** les formats pris en charge — CBZ, CBR, PDF, EPUB et TXT — car l’hôte stocke lui-même les annotations au lieu de dépendre d’une fonction du serveur propre à chaque format.

| | Serveur Kavita | Hôte BiblioFuse |
|---|---|---|
| Fonctionne sur | Docker, Windows, Linux, macOS | Mac, PC Windows, Docker, Synology |
| Synchronisation de la progression | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| Synchronisation des signets | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| Synchronisation des surlignages / notes | EPUB | CBZ, CBR, PDF, EPUB, TXT |
| Lecteur web | Oui | Oui (hôte NAS et Docker) |
| Serveur de bibliothèque multi-utilisateur | Oui | Non — un hôte de bibliothèque personnelle |

Vous pouvez utiliser les deux. Beaucoup de lecteurs gardent leurs mangas sur Kavita et ajoutent un hôte BiblioFuse pour un dossier de PDF ou de fichiers texte. Consultez [BiblioFuse Reader](https://bibliofuse.com/fr/comicreader/) pour les téléchargements de l’hôte et l’assistant de configuration.

## Komga et les autres serveurs OPDS

BiblioFuse se connecte aussi nativement à Komga, avec la progression de lecture synchronisée dans les deux sens et la position exacte dans les EPUB. La synchronisation des signets et des annotations est réservée à Kavita, car Komga ne propose pas d’API pour cela. Tout autre serveur OPDS 1.x fonctionne comme catalogue, avec un streaming page par page lorsque le serveur prend en charge OPDS-PSE.

Si vous réfléchissez encore à l’organisation d’une collection avant de la placer sur un serveur, le [guide de gestion d’une bibliothèque de BD numériques](https://bibliofuse.com/fr/blog/digital-comic-library-management-guide/) et le [comparatif CBZ, CBR et EPUB](https://bibliofuse.com/fr/blog/cbz-vs-cbr-vs-epub-formats-explained/) sont de bons points de départ.

## FAQ

**BiblioFuse synchronise-t-il la progression de lecture avec Kavita ?**
Oui, dans les deux sens. BiblioFuse utilise l’API de Kavita : un livre reprend là où Kavita indique que vous vous êtes arrêté, et votre progression est réécrite au fil de la lecture. Cela fonctionne pour les CBZ, CBR, EPUB et PDF.

**Puis-je synchroniser surlignages et notes avec Kavita sur iPhone ou iPad ?**
Oui, pour les livres EPUB. Les surlignages et notes créés dans BiblioFuse sont enregistrés via l’API d’annotations de Kavita et apparaissent dans le lecteur web de Kavita. Vous pouvez les ajouter, les modifier et les supprimer des deux côtés.

**Pourquoi les surlignages ne sont-ils pas pris en charge pour les CBZ, CBR ou PDF sur Kavita ?**
Kavita ne stocke des annotations que pour les EPUB. Les BD et les PDF synchronisent tout de même la progression de lecture et les signets de page. Si vous avez besoin de synchroniser surlignages et notes sur des PDF ou des BD, un hôte BiblioFuse les prend en charge pour tous les formats.

**Dois-je télécharger une BD entière pour la lire depuis Kavita ?**
Non. Les CBZ et CBR sont diffusés page par page. Vous pouvez, si vous le souhaitez, enregistrer un livre pour le lire hors ligne.

**Quel est le moyen le plus rapide d’ajouter un serveur Kavita à BiblioFuse ?**
Créez un QR code avec le générateur de QR code BiblioFuse dans votre navigateur, puis ouvrez Réglages > OPDS dans l’application et touchez l’icône de scan QR. L’adresse du serveur et la clé d’authentification sont renseignées pour vous.

**La prise en charge de Kavita est-elle gratuite dans BiblioFuse ?**
La lecture de fichiers locaux est gratuite. La connexion aux serveurs Kavita, Komga et OPDS fait partie de BiblioFuse Pro, proposé en abonnement mensuel ou annuel, ou en achat unique à vie.

**BiblioFuse fonctionne-t-il avec Kavita via Internet ?**
Oui. Si votre serveur Kavita est accessible depuis l’extérieur de chez vous — via un proxy inverse, un VPN ou Tailscale —, saisissez cette adresse et BiblioFuse se connecte de la même manière.

**Puis-je utiliser Kavita et un hôte BiblioFuse en même temps ?**
Oui. Les deux apparaissent dans le panneau Emplacement, et chacun conserve sa propre progression, ses signets et ses annotations.
