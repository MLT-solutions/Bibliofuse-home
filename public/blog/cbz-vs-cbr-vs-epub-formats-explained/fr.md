# CBZ vs CBR vs EPUB — Les Formats de BD et d'Ebooks Expliqués

Vous regardez une page de téléchargement et voyez quatre types de fichiers : CBZ, CBR, EPUB, PDF. Ils prétendent tous être « le même livre ». Lequel télécharger ? Lequel fonctionnera sur votre téléphone, votre tablette ou votre Mac ?

Ce guide clarifie tout. À la fin, vous saurez exactement ce qu'est chaque format, ce qu'il contient et lequel convient à votre situation.

## La Réponse Courte

| Format | Contenu | Idéal pour |
|--------|---------|-----------|
| CBZ | Images dans une archive ZIP | BD, manga, romans graphiques |
| CBR | Images dans une archive RAR | Idem, versions plus anciennes |
| EPUB | HTML + images dans un ZIP | Ebooks de texte, romans |
| PDF | Pages en mise en page fixe | Documents, livres techniques |

## CBZ — Comic Book ZIP

CBZ signifie Comic Book ZIP. Le format a exactement une règle : renommer un fichier ZIP en `.cbz`. Pas d'encodage spécial. Ouvrez un `.cbz` avec n'importe quel utilitaire d'archivage et vous trouverez un dossier d'images numérotées dans l'ordre de lecture.

Le format CBZ s'est répandu au début des années 2000 car il résolvait un problème simple : les fichiers de BD devaient circuler sur internet, et ZIP était omniprésent. L'extension `.cbz` indiquait au logiciel de lecture « c'est une BD, affiche les images en séquence ».

**Ce qu'il contient :** Images séquentielles, généralement JPG, PNG ou WebP. Certains fichiers incluent un `ComicInfo.xml` avec des métadonnées. [BiblioFuse](/fr/) lit ces métadonnées pour afficher les bonnes informations dans la bibliothèque.

**Compatibilité :** Universelle. Toutes les applications de BD sur toutes les plateformes gèrent le CBZ. C'est le format par défaut pour les collections numériques.

## CBR — Comic Book RAR

CBR signifie Comic Book RAR. Même concept que CBZ, mais le conteneur est une archive RAR au lieu de ZIP.

RAR était populaire dans les communautés de partage de fichiers à l'époque où la plupart des scans de BD se faisaient, donc les anciennes sorties sont souvent en CBR. La structure interne est identique. [BiblioFuse](/fr/) supporte les deux.

**Faut-il convertir ?** Si vous avez une grande collection de CBR, la conversion en CBZ est raisonnable. La conversion est sans perte car on réarchive simplement les mêmes fichiers.

**Note sur RAR5 :** Certains très vieux CBR utilisent RAR5, que les vieux logiciels ne peuvent pas ouvrir. Repackager en CBZ règle toujours le problème.

## EPUB — Electronic Publication

EPUB est un standard W3C ouvert conçu pour les ebooks à fort contenu textuel — romans, non-fiction. Contrairement aux CBZ et CBR, le contenu est du *texte*, pas des images.

L'EPUB est une archive ZIP contenant :
- **Fichiers HTML ou XHTML** — le texte des chapitres
- **Feuilles de style CSS** — polices, espacement, mise en page
- **Images** — couverture et illustrations
- **Manifeste OPF** — liste tous les fichiers et définit l'ordre de lecture
- **Fichier NCX ou NAV** — la table des matières

Différences clés :
- **Réajustement :** Le lecteur contrôle la taille de la police, l'interligne et la couleur de fond.
- **Accessibilité :** Les lecteurs d'écran peuvent lire le texte à voix haute.
- **Recherche :** Vous pouvez chercher n'importe quel mot dans un EPUB.

**DRM :** Beaucoup d'EPUB commerciaux utilisent le DRM d'Adobe ou FairPlay d'Apple. Les EPUB sans DRM fonctionnent dans n'importe quel lecteur, y compris [BiblioFuse](/fr/).

## PDF — Portable Document Format

PDF est un format à mise en page fixe. Contrairement à l'EPUB, l'auteur contrôle exactement où chaque élément apparaît. PDF a été conçu pour l'impression.

Pour les BD, le PDF fonctionne mais n'est pas idéal : les fichiers sont souvent grands et le zoom sur téléphone est gênant. Pour les manuels techniques et documents scannés, le PDF est souvent le meilleur choix.

## Quel Format Télécharger ?

**Manga ou BD :** CBZ est le meilleur choix. Si seulement CBR est disponible, téléchargez-le — ils sont identiques en pratique.

**Romans et ebooks de texte :** EPUB à chaque fois. Il est dynamique, accessible et lisible sur toute taille d'écran.

**Livres techniques ou scannés :** PDF si la mise en page compte ; EPUB si la source le propose.

## Compatibilité dans BiblioFuse

[BiblioFuse](/fr/) lit tous ces formats nativement sur iPhone, iPad et Mac : CBZ, CBR, ZIP, RAR, EPUB, PDF et TXT. L'onglet Outils permet la conversion et la compression directement sur l'appareil.

## Note sur la Taille des Fichiers

| Format | Taille relative | Raison |
|--------|----------------|--------|
| CBZ avec PNG | La plus grande | Images sans perte |
| CBZ avec JPEG | Moyenne | Compression avec perte |
| CBZ avec WebP | La plus petite | Compression moderne |
| EPUB (texte) | Minuscule | Le texte se comprime très bien |

Un volume de manga en CBZ PNG pèse généralement 300–400 Mo. Le même volume compressé en WebP pèse 40–80 Mo — une réduction de 80% sans perte de qualité visible sur écran de téléphone.
