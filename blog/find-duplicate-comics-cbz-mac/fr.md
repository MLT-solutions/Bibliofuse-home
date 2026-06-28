# Comment Trouver et Supprimer les Fichiers de BD CBZ en Double sur Mac

Archive Duplicate Scanner détecte les fichiers CBZ, CBR et autres archives de bandes dessinées en double sur Mac grâce au hachage perceptuel, en repérant les correspondances même après un renommage, une recompression ou un reconditionnement. Analysez toute votre bibliothèque, comparez les paires détectées côte à côte et déplacez les doublons vers la Corbeille en toute sécurité, sans risquer de perdre les originaux.

## Pourquoi les BD en Double Sont Plus Difficiles à Détecter qu'on ne le Croit

Une bibliothèque numérique de bandes dessinées accumule des doublons de façons qui déjouent les comparaisons classiques par nom de fichier ou par taille. Vous téléchargez un CBZ depuis une source, puis plus tard vous en téléchargez ce qui semble être une édition différente — mais qui contient les mêmes pages numérisées, reconditionnées sous un nom différent. Une traduction de fans ressort avec un encodage d'image légèrement différent. Un disque de sauvegarde vieux de trois ans est fusionné avec votre bibliothèque principale, ramenant les mêmes fichiers avec des horodatages différents.

Les outils de détection de doublons classiques comparent les hachages de fichiers : le moindre changement, même un simple renommage ou l'ajout d'une balise de commentaire, génère un hachage différent et le doublon passe inaperçu. Le hachage perceptuel fonctionne autrement : il analyse le contenu visuel des images contenues dans l'archive et crée une empreinte basée sur ce que vous voyez, et non sur les octets exacts.

Archive Duplicate Scanner utilise le hachage perceptuel pour trouver les doublons de BD qu'aucun autre outil ne détecte.

## Comment le Hachage Perceptuel Fonctionne-t-il pour les BD ?

Quand Archive Duplicate Scanner analyse un CBZ ou un CBR, il ouvre l'archive, échantillonne les images à l'intérieur et calcule un hachage perceptuel pour chacune. Ces hachages capturent la structure visuelle — les formes, les motifs de contraste et la composition — sans dépendre des valeurs exactes des pixels.

Deux fichiers CBZ contenant les mêmes pages produisent des hachages correspondants même si :
- Les noms de fichiers sont complètement différents
- Les archives ont été recompressées avec des paramètres de qualité différents
- Un fichier possède des balises de métadonnées que l'autre n'a pas
- L'ordre des pages diffère entre les éditions

Cela fait d'Archive Duplicate Scanner l'outil idéal pour détecter les doublons qu'une bibliothèque de BD accumule au fil des années de téléchargements depuis de multiples sources.

## Comment Trouver les Fichiers CBZ en Double sur Mac

### Étape 1 : Télécharger et Lancer Archive Duplicate Scanner

[Archive Duplicate Scanner](/fr/archive/) est disponible sur le Mac App Store. Installez-le et lancez-le depuis le dossier Applications.

### Étape 2 : Ajouter votre Dossier de Bibliothèque de BD

Faites glisser votre dossier de BD dans la fenêtre d'Archive Duplicate Scanner, ou utilisez le bouton Ajouter un dossier pour naviguer. Vous pouvez analyser plusieurs emplacements simultanément : votre bibliothèque principale, un disque externe et un emplacement de sauvegarde, tout à la fois.

### Étape 3 : Lancer l'Analyse

Cliquez sur Analyser. Archive Duplicate Scanner ouvre chaque CBZ et CBR, échantillonne les images et calcule les hachages perceptuels. Une bibliothèque de 1 000 BD se traite généralement en quelques minutes sur un Mac récent.

### Étape 4 : Examiner les Paires Détectées

Après l'analyse, Archive Duplicate Scanner affiche les groupes de doublons détectés. Chaque groupe montre les archives correspondantes côte à côte avec les noms de fichiers, les tailles, les dates de modification et les chemins de dossiers. Vous pouvez prévisualiser l'image de couverture ou ouvrir l'une ou l'autre archive pour confirmer.

### Étape 5 : Sélection Automatique du Fichier à Conserver

La stratégie de sélection automatique d'Archive Duplicate Scanner choisit quel fichier conserver selon vos règles configurées : garder le fichier le plus grand (probablement de meilleure qualité), garder le fichier dans un dossier préféré (votre bibliothèque principale) ou garder la copie modifiée le plus récemment. Vous pouvez aussi sélectionner manuellement le fichier à conserver dans chaque groupe.

### Étape 6 : Déplacer les Doublons vers la Corbeille

Cliquez sur Supprimer les doublons (ou Déplacer vers la Corbeille). Archive Duplicate Scanner ne supprime jamais définitivement les fichiers — il les déplace uniquement vers la Corbeille. Vérifiez-les avant de vider la Corbeille si nécessaire.

## Stratégies de Sélection Automatique pour les Grandes Bibliothèques

Quand vous gérez 200 groupes de doublons, les examiner manuellement un par un n'est pas envisageable. Les stratégies de sélection automatique d'Archive Duplicate Scanner automatisent la décision :

**Conserver le fichier le plus grand :** Les archives CBZ plus volumineuses contiennent généralement des images de meilleure qualité. Cette stratégie conserve automatiquement la meilleure version.

**Conserver le fichier dans un dossier préféré :** Si votre bibliothèque principale se trouve dans `~/Comics` mais que des doublons sont sur un disque de sauvegarde, indiquez à Archive Duplicate Scanner de toujours préférer la copie dans `~/Comics`. La copie de sauvegarde sera marquée pour suppression.

**Conserver le plus récemment modifié :** Utile quand un fichier plus récent est une version corrigée ou mise à jour du même groupe de numérisation.

Après l'exécution de la sélection automatique, vérifiez une fois les sélections marquées avant de valider. Archive Duplicate Scanner ne supprime jamais sans votre confirmation explicite.

## En Quoi la Correspondance Approximative des Noms de Fichiers Est-elle Utile ?

Au-delà du hachage perceptuel, Archive Duplicate Scanner utilise également la correspondance approximative des noms de fichiers pour repérer les doublons probables avant même l'analyse des images. Des fichiers comme `One-Punch-Man-v01.cbz` et `One_Punch_Man_Vol_1.cbz` sont signalés comme correspondances potentielles.

Cette approche à deux niveaux — correspondance approximative des noms plus confirmation par hachage perceptuel — détecte les doublons évidents pour un humain mais invisibles pour les outils qui s'appuient sur des comparaisons exactes de chaînes ou d'octets.

## Foire Aux Questions

**Comment trouver des fichiers CBZ en double sur Mac ?**
Utilisez Archive Duplicate Scanner. Ajoutez votre dossier de BD, cliquez sur Analyser, et l'application identifie les fichiers CBZ et CBR en double grâce au hachage perceptuel. Elle détecte les correspondances même après un renommage ou une recompression, puis vous permet de déplacer les doublons vers la Corbeille en toute sécurité.

**Archive Duplicate Scanner peut-il trouver des doublons si les noms de fichiers sont différents ?**
Oui. Archive Duplicate Scanner utilise le hachage perceptuel sur les images contenues dans les archives CBZ. Si deux archives contiennent les mêmes pages numérisées, elles sont signalées comme doublons quel que soit le nom de fichier, la taille ou les métadonnées.

**Archive Duplicate Scanner supprime-t-il définitivement les fichiers ?**
Non. Archive Duplicate Scanner déplace uniquement les fichiers vers la Corbeille. Vous pouvez les vérifier et les restaurer avant de vider la Corbeille — il est sans danger de l'utiliser sur des bibliothèques de toute taille.

**Quels formats de BD Archive Duplicate Scanner prend-il en charge ?**
Archive Duplicate Scanner prend en charge les archives de BD CBZ et CBR. Il analyse également les fichiers photo (JPEG, PNG, HEIC, WebP, RAW) et les archives standard ZIP/RAR.

**Combien de temps prend l'analyse d'une grande bibliothèque de BD ?**
La vitesse d'analyse dépend de la taille de la bibliothèque et de votre Mac. Une bibliothèque de 1 000 fichiers CBZ se traite généralement en quelques minutes. Les Mac avec Apple Silicon analysent nettement plus vite que les Mac Intel sur de grandes collections.

**Archive Duplicate Scanner fonctionne-t-il sur plusieurs disques ?**
Oui. Ajoutez n'importe quel disque monté ou dossier comme emplacement d'analyse. Archive Duplicate Scanner compare les fichiers sur plusieurs disques simultanément — idéal pour trouver les doublons entre votre bibliothèque principale et un disque de sauvegarde.

## Organisez votre Bibliothèque en une Après-midi

Les BD en double gaspillent de l'espace de stockage, encombrent l'affichage de votre bibliothèque et compliquent l'organisation au fil du temps. Archive Duplicate Scanner prend en charge la partie difficile — détecter les archives visuellement identiques quel que soit leur nom de fichier — et vous offre un chemin sûr vers le nettoyage, uniquement via la Corbeille. Trouvez **Archive Duplicate Scanner** sur le Mac App Store pour effectuer votre première analyse dès aujourd'hui. Une fois votre bibliothèque nettoyée, utilisez [BiblioFuse](/fr/) pour lire et organiser votre collection de BD sur iPhone et Mac.
