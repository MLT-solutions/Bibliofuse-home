# Comment lire des bandes dessinées CBZ et CBR sur iPhone

Vous avez trouvé un fichier CBZ ou CBR — un chapitre de manga, une bande dessinée, un scan — et vous l'avez ouvert sur votre iPhone. Rien ne s'est lancé. Aucune application ne s'est proposée. Vous n'êtes pas le seul.

iOS ne prend pas en charge nativement les fichiers CBZ ou CBR. L'application Livres d'Apple gère l'EPUB et le PDF, mais ignore complètement les formats de bandes dessinées basés sur des archives. Pour lire ces fichiers correctement sur iPhone, vous avez besoin d'une application dédiée. [BiblioFuse](/fr/) est conçu exactement pour ça — il lit CBZ, CBR, ZIP, RAR, EPUB, PDF et TXT, avec un lecteur pensé pour les longues sessions et les grandes collections.

Ce guide couvre tout : ce que sont ces formats, comment transférer des fichiers sur votre iPhone, et comment obtenir la meilleure expérience de lecture.

## Ce que sont réellement CBZ et CBR

CBZ et CBR sont des formats d'archives pour bandes dessinées. Ce ne sont pas des encodages spéciaux — ce sont des fichiers ZIP et RAR ordinaires avec des extensions renommées. Décompressez un fichier `.cbz` et vous trouverez un dossier d'images séquentielles : `001.jpg`, `002.jpg`, dans l'ordre de lecture.

| Extension | Conteneur | Usage courant |
|-----------|-----------|---------------|
| CBZ | ZIP | BD occidentales, manga, scans de fans |
| CBR | RAR | Anciennes sorties de comics, scans japonais |
| ZIP | ZIP | Identique à CBZ sans l'extension renommée |
| RAR | RAR | Identique à CBR sans l'extension renommée |

Le format est intentionnellement simple — pas de DRM, pas de chiffrement, pas de structure propriétaire. C'est pourquoi il est le format préféré dans les communautés manga et comics.

Le problème sur iPhone est qu'iOS ouvre les fichiers zip comme des archives génériques — il n'affiche pas les images à l'intérieur comme une BD. Vous avez besoin d'un lecteur qui comprend la structure de pages séquentielles.

## Étape 1 — Installer BiblioFuse

[BiblioFuse](/fr/) est disponible sur l'App Store. Gratuit, sans compte requis.

Une fois installé, il crée deux dossiers dans l'application Fichiers :
- **iCloud Drive → BiblioFuse** — pour le stockage synchronisé entre tous vos appareils
- **Sur mon iPhone → BiblioFuse** — pour le stockage local uniquement

Pas de configuration avant d'importer des fichiers.

## Étape 2 — Transférer vos bandes dessinées sur iPhone

Trois méthodes principales pour déplacer des fichiers CBZ ou CBR sur votre iPhone.

### Partager depuis l'application Fichiers

Si votre BD est déjà dans iCloud Drive ou sur un Mac/PC accessible via Fichiers :

1. Ouvrez l'application **Fichiers**
2. Naviguez jusqu'au fichier
3. Appuyez longuement sur le fichier puis touchez **Partager**
4. Choisissez **BiblioFuse** dans le menu de partage

Le fichier est importé immédiatement.

### Transfert Wi-Fi — Idéal pour les grandes collections

Le Transfert Wi-Fi permet de glisser-déposer un dossier entier de BD depuis votre Mac ou PC vers BiblioFuse, sans câble ni iTunes.

1. Dans BiblioFuse, allez dans **Réglages → Importation Wi-Fi** et activez-le
2. Une URL locale apparaît — quelque chose comme `http://192.168.1.x:8080`
3. Ouvrez cette URL dans le navigateur de votre ordinateur
4. Glissez vos fichiers CBZ ou CBR dans la fenêtre du navigateur
5. Les fichiers sont transférés directement dans votre bibliothèque iPhone

Une fois le transfert terminé, désactivez l'importation Wi-Fi. Vos fichiers apparaissent automatiquement dans la bibliothèque.

### iCloud Drive — Pour l'accès multi-appareils

Si vous lisez sur iPhone, iPad et Mac, stockez vos BD dans iCloud Drive.

1. Sur votre Mac, copiez votre dossier de BD dans **iCloud Drive → BiblioFuse**
2. Sur votre iPhone, ouvrez Fichiers et attendez le téléchargement
3. Ouvrez BiblioFuse — le dossier apparaît automatiquement dans votre bibliothèque

Les livres stockés ici synchronisent la progression de lecture entre tous vos appareils via iCloud.

## Étape 3 — Ouvrir un volume et commencer à lire

Une fois vos BD dans la bibliothèque, touchez une couverture pour l'ouvrir. BiblioFuse charge l'archive, extrait les pages et affiche la première page immédiatement.

### Navigation dans les pages

- **Glisser à gauche/droite** — avancer ou reculer d'une page
- **Toucher le bord droit** — page suivante
- **Toucher le bord gauche** — page précédente
- **Toucher le centre** — afficher ou masquer les contrôles

### Direction de lecture

Pour le manga — qui se lit de droite à gauche — vous pouvez inverser la direction. Touchez le centre de l'écran pour ouvrir les contrôles, puis changez la direction en **De droite à gauche**.

### Doubles pages

Beaucoup de BD occidentales ont des illustrations sur deux pages. Faites pivoter l'iPhone en mode paysage et [BiblioFuse](/fr/) passe automatiquement en vue double page.

### Zoom

Pincez pour zoomer sur n'importe quelle page. BiblioFuse maintient un rendu haute résolution.

## Organiser une série

Lorsque vous importez plusieurs volumes de la même série, BiblioFuse les regroupe par dossier. Appuyez longuement sur une couverture pour ajouter une note ou une étiquette personnalisée.

## Résolution de problèmes

**Le fichier a été transféré mais n'apparaît pas dans la bibliothèque.** Tirez vers le bas pour actualiser. Vérifiez que le fichier se trouve dans **Sur mon iPhone → BiblioFuse** dans l'application Fichiers.

**Les pages sont dans le mauvais ordre.** Certains fichiers numérotent les pages sans zéros de tête. BiblioFuse lit les fichiers en ordre alphanumérique. Si l'ordre est incorrect, c'est un problème de nommage dans l'archive.

**Les fichiers CBR ne s'ouvrent pas.** Certains anciens CBR utilisent RAR5. Essayez de repackager le fichier en CBZ.

## La suite

Une fois votre première série importée, explorez ce que [BiblioFuse](/fr/) peut faire d'autre. L'onglet Outils gère la compression et la conversion directement sur l'appareil.
