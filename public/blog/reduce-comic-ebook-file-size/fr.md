# Pourquoi les fichiers de BD et d'ebooks sont si volumineux — et comment y remédier

Vous copiez une série manga de 50 tomes sur votre iPhone et regardez 20 gigaoctets de stockage disparaître d'un coup. Ou vous téléchargez un seul CBZ et il pèse 400 Mo pour un seul tome. D'où vient tout cet espace perdu ?

La réponse tient au format de fichier — et une fois que vous le comprenez, résoudre le problème prend moins d'une minute.

## CBZ et EPUB : deux archives ZIP déguisées

Un fichier CBZ est une archive ZIP avec une extension différente. Renommez n'importe quel `.cbz` en `.zip`, décompressez-le, et vous trouverez un dossier d'images nommées dans l'ordre de lecture — `001.png`, `002.png`, etc. Les fichiers CBR fonctionnent de la même manière mais utilisent RAR au lieu de ZIP. Pas d'encodage propriétaire, pas de mystère : juste des images dans un conteneur.

L'EPUB est structurellement similaire. Renommez un `.epub` en `.zip`, décompressez-le, et vous trouverez des fichiers HTML (le texte des chapitres), des feuilles de style CSS, des métadonnées et des images intégrées — couverture, illustrations, photos. L'EPUB est un standard ouvert du W3C pris en charge par toutes les grandes applications de lecture.

Les deux formats sont bien conçus pour leur usage. Le problème de taille ne vient pas du conteneur — c'est ce qu'on y emballe.

## Pourquoi les images PNG consomment autant de place

La plupart des groupes de scan et des éditeurs d'ebooks utilisent le PNG par défaut parce qu'il est sans perte : chaque pixel du fichier enregistré est identique au scan original. Cette fidélité a un coût.

Une planche de BD en haute résolution — typiquement 1800 × 2700 pixels en couleur 24 bits — pèse 2 Mo ou plus en PNG. La plupart des volumes manga contiennent entre 180 et 220 pages. Le stockage s'accumule vite :

| Format du volume | Pages | Taille par page | Taille totale |
|-----------------|-------|----------------|--------------|
| PNG (sans perte) | 200 | ~2 Mo | **~400 Mo** |
| WebP (compressé) | 200 | ~250 ko | **~50 Mo** |
| Espace économisé | | | **87,5 %** |

Sur une longue série, une bibliothèque manga de 50 tomes en PNG occupe environ **20 Go**. La même série compressée en WebP tient dans **2,5 Go** — soit **17,5 Go** économisés sur une seule série. Des outils comme [BiblioFuse](/fr/webapp) gèrent cette conversion entièrement sur l'appareil, sans aucun logiciel de bureau requis.

## Ce qui rend WebP plus efficace

WebP est un format d'image développé par Google qui produit des fichiers bien plus petits que le PNG, et plus petits que le JPEG à qualité comparable. À un réglage de qualité modéré (environ 80–85 %), la différence visuelle avec la source PNG est imperceptible sur un écran de téléphone ou de tablette. Les BD et les mangas se compriment particulièrement bien car la plupart des cases utilisent des couleurs uniformes et des lignes nettes plutôt que des dégradés photographiques.

Tous les iPhone, iPad et appareils Android modernes affichent le WebP nativement. Vous ne sacrifiez pas la qualité d'affichage — vous stockez simplement la même information visuelle de façon plus efficace.

## Pourquoi BiblioFuse a intégré la compression dans l'application

La solution habituelle — convertir les fichiers sur ordinateur avant de les charger sur le téléphone — fonctionne en théorie, mais crée de la friction. Il faut un outil de traitement par lot, les bons réglages, un moyen de remballer le ZIP, puis un nouvel import. En pratique, la plupart des lecteurs s'en dispensent et vivent avec des bibliothèques encombrées.

La fonction **Fusionner et compresser** de BiblioFuse supprime toute cette friction. La conversion se fait entièrement sur l'appareil — rien n'est envoyé à un serveur. Sélectionnez les livres, choisissez un niveau de qualité, et BiblioFuse s'occupe du reste : extraction de chaque image, ré-encodage en WebP, et reconstruction d'un CBZ ou EPUB compressé à la place de l'original.

**Pour compresser un livre :**
1. Appuyez longuement sur une couverture dans votre bibliothèque et touchez **Compresser**.
2. Ajustez le curseur de qualité — le réglage par défaut offre un bon équilibre taille/qualité pour la plupart des BD.
3. Touchez **Compresser**. L'original est remplacé à la fin du traitement.

**Pour fusionner une série :** appuyez longuement pour sélectionner plusieurs fichiers CBZ, puis touchez **Fusionner**. BiblioFuse les combine dans l'ordre de lecture et compresse le résultat en une seule opération.

L'[outil Web BiblioFuse](/fr/webapp) offre la même compression et fusion dans n'importe quel navigateur — sans installation. Idéal quand vous êtes sur Windows ou Linux sans l'application iOS ou Mac.

## Combien d'espace pouvez-vous vraiment récupérer ?

Le chiffre de 87,5 % peut paraître abstrait avant de le voir sur votre propre bibliothèque :

| Collection | Taille PNG | Après compression | Espace libéré |
|-----------|-----------|------------------|--------------|
| Série manga de 10 tomes | ~4 Go | ~500 Mo | **3,5 Go** |
| Série manga de 50 tomes | ~20 Go | ~2,5 Go | **17,5 Go** |
| 500 comics occidentaux | ~50 Go | ~6,25 Go | **43,75 Go** |
| Bibliothèque EPUB illustrée (100 livres) | ~5 Go | ~625 Mo | **4,4 Go** |

Sur un iPhone 128 Go où chaque gigaoctet compte, cela fait la différence entre emporter toute votre collection ou en laisser la moitié chez vous.

## Quand compresser et quand garder les originaux

La compression est irréversible : une fois que le PNG est remplacé par du WebP dans l'archive, les données originales sans perte sont perdues. Pour la lecture quotidienne, c'est un compromis valable. Mais si vous archivez des scans bruts ou travaillez avec des œuvres originales où la fidélité pixel à pixel compte, conservez les originaux sur un disque externe et ne compressez que les copies portables.

## Questions fréquentes

**La compression affecte-t-elle la qualité de lecture ?**
Au réglage par défaut, la différence est imperceptible en lecture normale sur téléphone ou tablette. Un fort zoom sur des traits fins peut révéler un léger lissage. Pour la plupart des lecteurs, le résultat est visuellement identique à l'original.

**Peut-on compresser les EPUB aussi ?**
Oui. BiblioFuse traite les EPUB de la même manière — en ré-encodant les images intégrées sans toucher au texte, aux CSS ni à la structure des chapitres.

**Et si je veux garder l'original ?**
Faites une copie dans l'application Fichiers avant de compresser — BiblioFuse remplace le fichier en place sans sauvegarde automatique. Vous pouvez aussi utiliser l'[outil Web BiblioFuse](/fr/webapp) pour télécharger une version compressée sans modifier les fichiers sources.

**La compression fonctionne-t-elle hors ligne ?**
Oui — tout le traitement se fait sur votre appareil. Aucune connexion internet n'est nécessaire et aucun fichier n'est envoyé à un serveur.
