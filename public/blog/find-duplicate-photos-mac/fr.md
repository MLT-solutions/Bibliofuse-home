# Trouver des photos en double sur Mac — Y compris HEIC, WebP et RAW

Archive Duplicate Scanner trouve les photos en double sur Mac grâce au hachage perceptuel, une technique qui identifie les images visuellement identiques même si elles ont des noms de fichiers différents, des formats distincts ou des paramètres de compression variés. Il prend en charge HEIC, WebP, JPEG, PNG, TIFF, RAW et des dizaines d'autres formats. L'application est disponible pour Mac et Windows, et déplace les doublons vers la Corbeille en toute sécurité plutôt que de les supprimer définitivement.

## Le problème des bibliothèques de photos qui grandissent sans limite

Votre bibliothèque de photos Mac semblait gérable il y a cinq ans. Elle contient maintenant 40 000 fichiers répartis entre un dossier Téléchargements, un disque de sauvegarde et trois exports iCloud. Vous avez le même paysage enregistré sous `IMG_4521.HEIC`, `IMG_4521-edited.JPG` et `landscape-final.webp`. Vous avez des rafales RAW où 11 images presque identiques ont survécu à la sélection. Et chaque migration de bibliothèque — d'iPhoto à Photos d'Apple puis vers un nouveau Mac — a laissé une nouvelle couche de doublons.

Les outils intégrés ne peuvent pas vous aider. Photos d'Apple dispose d'un outil basique de recherche de doublons pour les photos déjà dans sa bibliothèque, mais il ne détecte pas les fichiers dispersés dans le Finder. Spotlight ne compare pas le contenu visuel des images. Les outils classiques de recherche de doublons comparent des hachages octet par octet et échouent dès que deux fichiers ont une compression JPEG différente ou qu'un fichier a été réexporté.

## Pourquoi le hachage perceptuel trouve-t-il des photos en double dans tous les formats ?

Le hachage perceptuel analyse ce à quoi une image *ressemble visuellement*, pas ce que disent ses octets. Archive Duplicate Scanner calcule une empreinte visuelle compacte pour chaque photo. Deux images qui paraissent identiques à l'œil humain produisent la même empreinte (ou une très similaire) — même si l'une est en HEIC et l'autre en JPEG, même si l'une a été réexportée à 85 % de qualité, et même si quelqu'un a renommé le fichier.

C'est la différence essentielle par rapport à un outil de déduplication générique. Un outil générique compare des hachages SHA-256 — identiques octet par octet uniquement. Le hachage perceptuel trouve des images qui sont visuellement identiques mais techniquement des fichiers différents.

## Comment trouver des photos en double sur Mac étape par étape

1. **Téléchargez et ouvrez Archive Duplicate Scanner** depuis le Mac App Store ou le site web du développeur.
2. **Ajoutez vos dossiers de photos** — faites glisser votre dossier d'export de bibliothèque Photos, votre dossier Téléchargements et tous les disques externes que vous souhaitez analyser. Vous pouvez ajouter plusieurs dossiers en une seule analyse.
3. **Lancez l'analyse** — l'application utilise le hachage perceptuel pour créer une empreinte de chaque image compatible. Une bibliothèque de 10 000 photos se termine généralement en moins de deux minutes sur un Mac à puce M.
4. **Examinez les groupes** — les doublons apparaissent en groupes. Chaque groupe affiche le nom du fichier, le format, la taille, les dimensions et une miniature visuelle pour confirmer la correspondance.
5. **Choisissez votre stratégie de suppression** — Archive Duplicate Scanner propose des stratégies de sélection automatique : conserver le fichier le plus volumineux (meilleure qualité), conserver le plus ancien (l'original) ou conserver celui qui se trouve dans un dossier préféré. Vous pouvez également sélectionner manuellement.
6. **Déplacer vers la Corbeille** — l'application ne supprime jamais les fichiers définitivement. Les doublons sélectionnés sont déplacés vers la Corbeille du Mac afin que vous puissiez récupérer tout fichier supprimé par erreur.

## Quels formats de photos sont pris en charge ?

Archive Duplicate Scanner gère tous les formats qu'un photographe Mac peut rencontrer :

- **HEIC / HEIF** — le format par défaut de l'iPhone, y compris les fichiers HDR et Portrait
- **JPEG / JPG** — le format universel, y compris les réexportations et versions éditées
- **WebP** — de plus en plus courant dans les téléchargements de réseaux sociaux et les captures d'écran web
- **PNG** — captures d'écran et graphiques sans perte
- **TIFF** — numérisations haute qualité et exports en couches
- **Formats RAW** — Canon CR2/CR3, Nikon NEF, Sony ARW, Fujifilm RAF, Adobe DNG, et plus encore
- **CBZ / CBR** — les archives de bandes dessinées sont également prises en charge aux côtés des photos

La fonction de correspondance approximative de noms de fichiers trouve des groupes comme `vacances-2023.jpg`, `vacances-2023(1).jpg` et `vacances-2023-copie.jpg` en quelques secondes, avant même que la comparaison de hachage visuel ne soit lancée.

## Trois cas d'utilisation pratiques

**1. Nettoyage après migration**
Après chaque migration de Mac, l'Assistant Migration d'Apple copie les fichiers mais ne supprime pas les doublons. Si vous avez migré plusieurs fois entre des Macs, vous avez probablement deux ou trois copies de vos photos les plus anciennes. Exécutez Archive Duplicate Scanner sur votre dossier personnel pour les retrouver toutes.

**2. Paires RAW + JPEG**
De nombreux appareils photo — ainsi que le mode ProRAW de l'iPhone — enregistrent simultanément un fichier RAW et un JPEG. Après retouche dans Lightroom ou Capture One, vous n'avez souvent plus besoin du JPEG d'origine. Archive Duplicate Scanner regroupe les fichiers RAW avec leurs équivalents JPEG pour vous permettre de supprimer les fichiers inutiles sans trier manuellement par date.

**3. Accumulation de téléchargements de réseaux sociaux**
Des années à enregistrer des captures Instagram et des photos téléchargées aboutissent à des dizaines de copies de la même image à des résolutions différentes. Le hachage perceptuel les détecte toutes, même quand les noms de fichiers sont des chaînes de chiffres aléatoires.

## Questions fréquentes

### Archive Duplicate Scanner supprime-t-il les photos définitivement ?

Non. L'application déplace les fichiers vers la Corbeille du Mac. Rien n'est supprimé définitivement tant que vous ne videz pas la Corbeille vous-même. Cela vous offre un filet de sécurité complet pour récupérer tout fichier supprimé par erreur.

### Peut-il trouver des doublons entre différents formats, comme HEIC et JPEG ?

Oui. Le hachage perceptuel compare le contenu visuel, pas les octets des fichiers. Une photo enregistrée en HEIC et réexportée en JPEG sera détectée comme doublon même si les formats et le contenu en octets sont totalement différents.

### Combien de temps dure une analyse sur une grande bibliothèque ?

Sur un Mac Apple à puce M, une bibliothèque de 10 000 photos se termine généralement en moins de deux minutes. Les bibliothèques de plus de 50 000 photos prennent 5 à 10 minutes selon la vitesse du disque et le format des fichiers. Les fichiers HEIC avec métadonnées HDR prennent légèrement plus de temps à décoder.

### Trouvera-t-il les rafales RAW quasi-identiques ?

Oui, avec le seuil de similarité réglé à un niveau de sensibilité plus élevé. Les images de rafales prises dans la même scène se ressemblent presque et produisent des hachages perceptuels très similaires. Vous pouvez ajuster la sensibilité pour que le scanner les regroupe, puis conserver uniquement le cliché le plus net.

### Fonctionne-t-il avec des disques externes et du stockage réseau ?

Oui. Vous pouvez ajouter n'importe quel dossier accessible dans le Finder — disques internes, disques USB externes, cartes SD ou volumes montés en réseau. L'analyse s'exécute localement sur votre Mac ; aucun fichier n'est envoyé vers un serveur.

### Archive Duplicate Scanner est-il disponible pour Windows ?

Oui. Archive Duplicate Scanner est disponible pour Mac et Windows. La version Windows dispose du même moteur de hachage perceptuel et prend en charge les mêmes formats de fichiers.

## Récupérez votre espace de stockage — sans risque

Une bibliothèque de 40 000 photos avec 30 % de doublons gaspille des dizaines de gigaoctets d'espace disque. Archive Duplicate Scanner vous donne les outils pour la nettoyer en toute sécurité — hachage perceptuel qui détecte les doublons visuels entre formats, stratégies de sélection automatique qui éliminent les approximations, et suppression vers la Corbeille uniquement qui vous protège.

[Téléchargez Archive Duplicate Scanner](/fr/) et lancez votre première analyse dès aujourd'hui. Si vous souhaitez également compresser ou convertir par lots vos collections de photos, l'[outil web BiblioFuse](/fr/webapp/) gère les fichiers EPUB, CBZ et PDF entièrement dans votre navigateur.
