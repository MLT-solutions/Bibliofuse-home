# Extrayez du Texte de Comics et de Manga sur iPhone avec l'OCR

Vous êtes trois tomes dans une série manga quand un personnage mentionne un clan, une technique ou un lieu dont vous voulez retrouver le nom en japonais. Ou vous tombez sur un dialogue mémorable que vous souhaitez copier. Le problème : les pages de comics sont des images, pas du texte. Vous ne pouvez pas appuyer sur une bulle pour sélectionner ce qu'elle contient.

L'OCR dans [BiblioFuse](/fr/) change la donne. L'application peut scanner n'importe quelle page — ou une zone sélectionnée — extraire le texte trouvé et vous le remettre sous forme de chaîne copiable. Cela fonctionne avec les fichiers CBZ, CBR, EPUB et PDF. L'application gère le japonais, le chinois, le coréen et les écritures occidentales. Le tout tourne entièrement sur l'appareil, sans connexion internet.

## Pourquoi l'OCR sur les Comics est Difficile

L'OCR sur des documents ordinaires est un problème résolu. Les pages de comics sont plus complexes pour trois raisons :

**Le texte est dans des bulles aux bords courbes.** Il se superpose à des illustrations aux tracés complexes, ce qui perturbe les systèmes OCR entraînés sur des documents propres.

**Les polices sont souvent stylisées ou manuscrites.** Les comics occidentaux utilisent des polices personnalisées imitant l'écriture à la main ou déformées pour l'emphase.

**Le manga a des conventions de mise en page spécifiques.** Le texte japonais dans le manga est généralement vertical, de droite à gauche, et serré dans des bulles étroites.

[BiblioFuse](/fr/) entraîne son OCR spécifiquement pour les mises en page de comics et manga, avec des modèles séparés pour le texte occidental horizontal et le texte CJK (chinois, japonais, coréen) vertical.

## Ce Que Vous Pouvez Faire avec le Texte Extrait

- **Chercher du vocabulaire en langue étrangère.** Si vous lisez un manga en japonais, extrayez un dialogue et collez-le dans un dictionnaire ou traducteur.
- **Copier des citations.** Un dialogue mémorable, une légende, un titre de chapitre.
- **Rechercher dans une série.** Extrayez le nom d'un personnage ou d'un terme technique pour le rechercher dans d'autres volumes.
- **Accessibilité.** Extrayez du texte de comics scannés pour l'alimenter dans un lecteur d'écran ou une application de synthèse vocale.
- **Traduction de contenu non traduit.** Pour des mangas jamais traduits officiellement, OCR + traduction automatique vous offre une expérience de lecture approximative.

## Comment Utiliser l'OCR dans BiblioFuse

L'OCR est intégré dans la vue de lecture. Aucun changement de mode nécessaire.

**Pour scanner la page entière :**

1. En cours de lecture, appuyez sur le centre de la page pour afficher les contrôles.
2. Appuyez sur le bouton **OCR** dans la barre d'outils.
3. BiblioFuse scanne la page et affiche le texte extrait dans un panneau en bas.
4. Appuyez sur un bloc de texte pour le copier, ou utilisez **Tout copier**.

**Pour scanner une zone spécifique :**

1. Appuyez longuement sur n'importe quelle partie de la page.
2. Faites glisser pour dessiner un rectangle autour de la zone souhaitée.
3. Levez le doigt. BiblioFuse scanne la région et affiche le résultat.
4. Appuyez pour copier ou partager.

La sélection de région est plus précise pour les pages denses ou quand vous voulez du texte d'une seule bulle.

## Détection de Langue et Support CJK

BiblioFuse détecte automatiquement le type d'écriture dans la plupart des cas. Le **texte japonais vertical** est traité correctement — BiblioFuse reconstruit l'ordre de lecture de haut en bas dans un ordre de colonnes de droite à gauche.

Pour le **chinois traditionnel et simplifié**, BiblioFuse distingue les jeux de caractères dans la sortie OCR. Le **manhwa coréen** (texte horizontal) est traité par le même pipeline que les autres textes CJK.

## Précision : À Quoi s'Attendre

- **Scans haute résolution (600+ DPI) :** Très précis.
- **Versions standard (300 DPI) :** Précis sur le texte propre ; quelques erreurs sur les polices stylisées.
- **Scans basse résolution ou compressés :** La précision diminue avec les artefacts JPEG. La mise à l'échelle dans [BiblioFuse](/fr/) peut aider avant de lancer l'OCR.
- **Comics à lettrage manuel :** Plus de variation. Les polices imprimées se lisent mieux que le lettrage fait main.

## Que Faire avec le Texte

Le panneau de texte extrait dans [BiblioFuse](/fr/) prend en charge les actions standard de la feuille de partage iOS :

- **Copier dans le presse-papiers** et coller dans n'importe quelle autre application
- **Partager** directement avec une app de traduction, Notes ou messagerie
- **Ouvrir dans Safari** pour rechercher

Pour le texte japonais, le dictionnaire système iOS inclut une recherche japonais-anglais. Copiez n'importe quel kanji extrait et ouvrez l'app Traduire ou un dictionnaire.

## Conseils pour de Meilleurs Résultats

**Utilisez le sélecteur de zone pour les bulles individuelles.** Le scan de page complète donne tout le texte, mais la sélection d'une seule bulle donne des résultats plus propres quand les bulles sont proches les unes des autres.

**Activez la mise à l'échelle pour les scans de faible qualité.** Dans les paramètres de lecture de BiblioFuse, la mise à l'échelle d'image applique un filtre de netteté qui améliore la qualité d'entrée pour l'OCR.

**Pour le manga, tenez le téléphone droit.** L'OCR sur le texte vertical est sensible à la rotation.

## L'OCR Fonctionne sur l'Appareil

Tout le traitement OCR dans [BiblioFuse](/fr/) s'exécute localement sur votre iPhone. Les pages ne sont pas envoyées à un serveur. Aucune image n'est téléchargée pour traitement, aucun appel à un service externe.

## Pour Commencer

L'OCR est disponible dans [BiblioFuse](/fr/) pour iOS sans achat supplémentaire. Téléchargez l'application sur l'App Store, importez un comic ou manga, et essayez le bouton OCR en lisant. Pour les lecteurs de manga en particulier, c'est une fonctionnalité dont il est difficile de se passer une fois utilisée.
