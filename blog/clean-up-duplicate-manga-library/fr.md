# Comment nettoyer une collection de manga en double de façon intelligente

Vous ouvrez votre dossier manga et remarquez quelque chose d'étrange : le volume 47 de *One Piece* est là trois fois — un fichier appelé `one_piece_v47.cbz`, un autre `OP_47_HQ.cbz` et un troisième enfoui dans un sous-dossier nommé "backup_old". Vous connaissez le problème. Vous ne savez pas encore à quel point il est grave.

Pour la plupart des lecteurs de manga, les doublons s'accumulent silencieusement au fil des années — téléchargements depuis diverses sources, déplacements d'archives entre disques, sauvegardes jamais nettoyées. Résultat : espace gaspillé, confusion lors de la lecture, et aucun moyen simple d'identifier la meilleure version.

Ce guide présente un flux de travail pratique pour trouver, examiner et supprimer les doublons manga avec [Archive Duplicate Scanner](/fr/) — un utilitaire Mac conçu spécifiquement pour ce problème.

---

## Pourquoi les bibliothèques manga deviennent si désordonnées

Les doublons de manga ne sont pas aléatoires. Ils suivent des schémas prévisibles :

**Plusieurs sources, noms de fichiers différents.** Vous avez téléchargé le volume 10 d'un groupe il y a des années, puis l'avez retéléchargé d'un autre site avec une meilleure qualité d'image. Même contenu, noms de fichiers totalement différents.

**Archives recompressées.** Quelqu'un a renommé les fichiers dans un CBZ, les a recompressés à un niveau de qualité différent et a redistribué le résultat. Les images sont identiques pixel par pixel, mais les checksums de l'archive diffèrent entièrement.

**Copies de sauvegarde oubliées.** Vous avez déplacé votre bibliothèque sur un nouveau disque en conservant l'ancien dossier "au cas où". Six mois plus tard, vous avez oublié qu'il existe. Vous avez maintenant une deuxième copie complète de 500 volumes.

Un outil de recherche de doublons standard ne détecte pas la plupart de ces cas car il compare des checksums de fichiers. Vous avez besoin d'un outil qui comprend ce qu'il y a *à l'intérieur* des archives.

---

## Ce que fait Archive Duplicate Scanner différemment

[Archive Duplicate Scanner](/fr/) utilise le **hachage perceptuel** pour comparer les images réelles à l'intérieur de vos archives CBZ et CBR. Au lieu de demander "ces deux fichiers sont-ils identiques octet par octet ?", il demande "ces deux archives contiennent-elles les mêmes pages de bande dessinée ?"

Cela lui permet de détecter des doublons qui ont été :

- Renommés (nom différent, même contenu)
- Recompressés à un niveau de qualité différent
- Recompilés avec une structure interne différente
- Copiés dans un dossier ou sur un disque différent

---

## Étape par étape : Nettoyer votre bibliothèque manga

### Étape 1 : Analysez votre dossier bibliothèque

Ouvrez Archive Duplicate Scanner et ajoutez votre dossier manga. Vous pouvez glisser-déposer des dossiers directement sur l'application.

Le scanner lit chaque fichier CBZ et CBR, extrait les images et génère des hachages perceptuels pour chaque page. Tout se passe entièrement sur votre Mac sans connexion réseau requise.

### Étape 2 : Examinez les paires correspondantes

Une fois l'analyse terminée, Archive Duplicate Scanner présente les paires côte à côte avec des aperçus miniatures, la taille de chaque fichier et un pourcentage de similarité.

### Étape 3 : Sélectionnez ce à supprimer

Stratégie recommandée : conservez le fichier le plus volumineux (généralement meilleure résolution) ou la version provenant d'une source fiable.

### Étape 4 : Déplacez les doublons dans la Corbeille

Archive Duplicate Scanner déplace les fichiers — il ne les supprime pas définitivement. Vous pouvez restaurer depuis la Corbeille si nécessaire.

---

## Conseils pour garder votre bibliothèque propre

**Établissez un seul dossier "de référence".** Conservez votre bibliothèque soignée au même endroit. Lorsque vous téléchargez un nouveau volume, déplacez-le dans ce dossier.

**Analysez après chaque grosse session de téléchargement.** Lancez Archive Duplicate Scanner après avoir téléchargé un lot de nouveaux volumes pour détecter les chevauchements avant qu'ils ne se multiplient.

**Utilisez [BiblioFuse](/fr/) pour lire depuis votre dossier organisé.** Quand vous diffusez votre bibliothèque Mac vers iPhone ou iPad via BiblioFuse, vous lisez depuis une source unique.

---

## FAQ

**Archive Duplicate Scanner supprimera-t-il mes fichiers automatiquement ?**
Non. Il déplace les fichiers vers la Corbeille, pas de suppression définitive. Vous examinez chaque correspondance avant que quoi que ce soit ne soit supprimé.

**Quels formats sont pris en charge ?**
CBZ, CBR et fichiers image en archive.

**Mes deux fichiers ont des checksums complètement différents — les trouvera-t-il quand même ?**
Oui. Archive Duplicate Scanner utilise le hachage perceptuel sur les images à l'intérieur de chaque archive, pas le checksum du fichier.
