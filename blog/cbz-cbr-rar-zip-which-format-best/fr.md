# CBZ, CBR, RAR, ZIP : quel format d'archive de comics utiliser ?

Vous venez de télécharger un lot de comics : la moitié sont en `.cbz`, quelques-uns en `.cbr`, et l'un d'eux est un simple `.rar`. Vous ouvrez votre lecteur de comics, tout fonctionne — mais vous vous demandez maintenant : est-ce que ça change quelque chose d'utiliser tel ou tel format dans sa collection ? Faut-il tout convertir vers un format unique ? Et quelle est la vraie différence ?

Voici une explication claire de tous les principaux formats d'archives de comics, quand les utiliser, et pourquoi [BiblioFuse](https://bibliofuse.com/fr/) les lit tous sans problème.

## Ce que sont vraiment les formats d'archives de comics

Aucun de ces formats n'est un format spécifique aux comics. CBZ, CBR, ZIP et RAR sont tous des conteneurs d'archives polyvalents. À l'intérieur, il n'y a qu'un dossier d'images, généralement en JPEG ou PNG, et de plus en plus en WebP. Un lecteur de comics extrait simplement l'archive en mémoire et affiche les images dans l'ordre.

Cela signifie que le choix du format concerne presque exclusivement l'**algorithme de compression** et la **compatibilité avec les outils existants**, et non une quelconque fonctionnalité pensée pour les comics.

## CBZ — Le meilleur choix pour la plupart des collections

CBZ est une archive ZIP renommée avec l'extension `.cbz`. C'est tout. Décompressez un fichier CBZ et vous obtenez un dossier d'images.

**Pourquoi CBZ est le meilleur choix par défaut :**

- ZIP est ouvert, libre de droits et pris en charge nativement par tous les systèmes d'exploitation et outils d'archivage
- macOS, Windows et Linux peuvent ouvrir des fichiers ZIP sans aucun logiciel supplémentaire
- La prise en charge en lecture et écriture est triviale à implémenter, si bien que pratiquement tous les lecteurs de comics gèrent CBZ
- Aucun problème de brevet ni de licence, contrairement à RAR
- Facile à modifier : ajoutez, supprimez ou réorganisez des pages sans recompresser toute l'archive

**Le compromis sur la compression :** ZIP utilise la compression Deflate, rapide mais pas la plus efficace. Pour les archives de comics qui contiennent déjà des images JPEG compressées, la différence de taille par rapport à RAR est généralement inférieure à 5 %. Pour les archives d'images PNG, RAR peut économiser 10 à 20 %, mais c'est PNG lui-même qui est généralement le principal responsable du poids des fichiers.

**En résumé :** Si vous constituez ou numérisez une collection depuis zéro, utilisez CBZ.

## CBR — Très compatible, mais techniquement inférieur

CBR est une archive RAR renommée avec l'extension `.cbr`. RAR est un format propriétaire créé par Eugene Roshal — le « RAR » dans WinRAR. Il offre une compression légèrement meilleure que ZIP, en particulier pour les formats d'image non compressés comme PNG.

**Le problème avec CBR :**

- RAR est propriétaire. Créer des fichiers RAR nécessite une copie sous licence de WinRAR ou RAR pour Unix
- La bibliothèque open-source UnRAR peut lire les fichiers RAR, mais pas en créer
- RAR 5 a introduit un nouveau format d'en-tête que certains lecteurs plus anciens ne savent toujours pas gérer
- Remballer ou modifier des archives CBR demande des outils supplémentaires

**Quand vous rencontrerez du CBR :** La plupart des fichiers CBR qui circulent datent du début ou du milieu des années 2000, quand WinRAR était l'archiveur dominant sous Windows. Les nouvelles sorties utilisent rarement CBR, car il n'offre aucun avantage notable par rapport à CBZ.

**Faut-il convertir CBR en CBZ ?** Si vous manquez d'espace et possédez de nombreuses archives CBR riches en images PNG, la conversion peut faire gagner de la place. Pour la plupart des collections basées sur JPEG, la différence de taille est négligeable et la conversion ne vaut pas l'effort. [BiblioFuse](https://bibliofuse.com/fr/) lit le CBR nativement, vous n'avez donc pas besoin de convertir simplement pour lire.

## RAR et ZIP — Les formats de base

Les fichiers `.rar` et `.zip` simples fonctionnent de manière identique à CBR et CBZ lorsqu'ils sont ouverts dans un lecteur de comics. La seule différence est l'extension du fichier — les lecteurs de comics se basent sur l'extension pour décider comment traiter le fichier, pas sur le format interne.

Certains scanners et anciens logiciels de capture enregistrent les fichiers avec l'extension d'archive d'origine plutôt que de les renommer en `.cbz` ou `.cbr`. Il peut être nécessaire de les renommer, ou d'utiliser un lecteur qui prend en charge ZIP/RAR tels quels. BiblioFuse sur iOS prend en charge les fichiers `.zip` et `.rar` directement, sans renommage nécessaire.

## CB7 et CBT — Les formats minoritaires

**CB7** est une archive 7-Zip (`.7z`) renommée `.cb7`. La compression LZMA2 de 7-Zip est nettement meilleure que ZIP et RAR pour les données compressibles comme les fichiers texte, mais les comics sont principalement des images JPEG déjà compressées, donc les gains réels en taille restent faibles. La compatibilité est moins universelle.

**CBT** est une archive TAR renommée `.cbt`. TAR ne compresse pas du tout — il ne fait que regrouper des fichiers. CBT se voit occasionnellement dans des archives d'origine Linux. Il est rapide à décompresser, mais produit des fichiers plus volumineux.

Ni l'un ni l'autre n'a d'adoption significative. Restez sur CBZ sauf si vous avez une raison précise de faire autrement.

## PDF — Pas une archive de comics, mais courant

Le PDF est un format de document, pas une archive d'images. Les comics enregistrés en PDF utilisent des images intégrées (ou, dans les livres scannés, des pages rastérisées), mais le format ajoute une surcharge de mise en page et ne peut généralement pas être édité page par page sans outils spécialisés.

Les PDF sont courants pour les comics numériques vendus par les éditeurs et pour les volumes de manga scannés. BiblioFuse lit les PDF, mais l'expérience de lecture des PDF basés sur des images est généralement moins bonne qu'un CBZ équivalent — navigation plus lente, pas de métadonnées par page, et fichier plus lourd par image.

Si vous avez des comics en PDF et souhaitez les convertir en CBZ, [l'outil web BiblioFuse](https://bibliofuse.com/fr/webapp/) fonctionne entièrement dans votre navigateur, sans aucun téléchargement requis.

## Tableau comparatif des formats

| Format | Conteneur | Compression | Création libre | Support universel | Idéal pour |
|--------|-----------|-------------|----------------|-------------------|------------|
| CBZ | ZIP | Deflate | ✅ Oui | ✅ Oui | Nouvelles collections, numérisation |
| CBR | RAR | RAR/RAR5 | ⚠️ Nécessite WinRAR | ✅ La plupart | Archives anciennes |
| ZIP | ZIP | Deflate | ✅ Oui | ✅ Oui | Lecteurs supportant ZIP simple |
| RAR | RAR | RAR/RAR5 | ⚠️ Nécessite WinRAR | ✅ La plupart | Archives anciennes |
| CB7 | 7-Zip | LZMA2 | ✅ Oui | ⚠️ Partiel | Expériences haute compression |
| CBT | TAR | Aucune | ✅ Oui | ⚠️ Partiel | Archives d'origine Linux |
| PDF | PDF | Variable | ✅ Oui | ✅ Oui | Comics sans DRM d'éditeurs |

## Comment BiblioFuse gère tous ces formats

[BiblioFuse pour iPhone et iPad](https://bibliofuse.com/fr/) lit CBZ, CBR, ZIP, RAR, CB7, CBT, EPUB et PDF nativement. Vous n'avez pas besoin de convertir votre collection avant de l'importer.

Tout le traitement se fait sur l'appareil. Aucun fichier n'est envoyé à un serveur. Pour les grandes bibliothèques multi-formats, BiblioFuse organise les fichiers par série et suit la progression de lecture par livre via la synchronisation iCloud, que le format sous-jacent soit CBZ ou CBR.

L'onglet Outils de BiblioFuse vous permet de convertir entre formats directement sur iPhone. Sélectionnez une archive CBR, appuyez sur Convertir, choisissez CBZ — l'application remballe l'archive sans quitter l'application.

## Recommandations pratiques

**Vous démarrez une nouvelle collection de zéro :** Utilisez CBZ. C'est ouvert, universellement compatible et facile à manipuler.

**Vous avez déjà une collection en CBR :** Ne convertissez pas sauf si vous avez une raison précise (espace disque, un outil qui ne gère pas CBR). CBR fonctionne parfaitement dans BiblioFuse et dans tous les lecteurs modernes.

**Bibliothèque avec plusieurs formats :** Ne perdez pas de temps à tout uniformiser juste pour l'esthétique. Un lecteur qui gère plusieurs formats — comme BiblioFuse — supprime le besoin de maintenir une collection dans un format unique.

**Comics en PDF issus d'éditeurs :** Gardez-les en PDF sauf si vous souhaitez les modifier ou fusionner des volumes, auquel cas les convertir en CBZ via l'outil web BiblioFuse a du sens.

Le débat sur le format a bien moins d'importance que d'avoir un lecteur capable de tous les gérer. Une fois que vous l'avez, le format devient invisible.
