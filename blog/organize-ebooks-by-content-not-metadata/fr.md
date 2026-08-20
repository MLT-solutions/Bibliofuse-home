# Comment Organiser votre Bibliothèque d'Ebooks sans Saisir de Métadonnées ni de Numéros ISBN

La plupart des liseuses vous demandent de saisir le titre, l'auteur, le genre et l'ISBN quand vous ajoutez un livre. Si le fichier a déjà des métadonnées intégrées, la liseuse les remplit automatiquement. Sinon — ce qui est le cas de nombreux fichiers EPUB et TXT que vous possédez — vous avez devant vous une longue session de saisie.

[GrepTag Reader](/fr/grepreader/) prend le chemin inverse. Il lit le texte réel à l'intérieur de chaque livre et extrait automatiquement des tags du contenu. Vous ne saisissez rien. La bibliothèque s'organise d'elle-même.

## Comment GrepTag Reader Extrait les Tags du Contenu

Quand vous importez un fichier EPUB ou TXT dans [GrepTag Reader](/fr/grepreader/), il lit l'intégralité du texte du livre et recherche des mots-clés récurrents qui indiquent de quoi parle le livre.

Les tags générés reflètent le contenu réel :
- Un roman se déroulant à Tokyo avec des personnages samouraïs : `japon`, `samouraï`, `historique`, `action`
- Un manuel technique sur les outils Linux en ligne de commande : `linux`, `terminal`, `programmation`
- Un journal de voyage en Asie du Sud-Est : `voyage`, `asie`, `mémoires`

Le balisage automatique s'exécute lors de l'importation du livre. Pas besoin de déclencher une analyse manuellement.

## Filtrage Multi-Tags — Logique ET

Le filtrage des tags dans GrepTag Reader utilise la logique ET : quand vous sélectionnez plusieurs tags, vous voyez les livres qui correspondent à *tous*.

- Livres `science-fiction` ET `nouvelles` — sélectionnez les deux tags pour voir uniquement les recueils de ce genre
- Livres `japon` ET `polar` — les résultats montrent la fiction policière japonaise
- Livres `philosophie` ET `ancien` — se réduit aux œuvres grecques et romaines antiques

## Formats Pris en Charge

GrepTag Reader analyse le contenu texte des fichiers **EPUB** et **TXT**.

Votre bibliothèque — incluant les tags générés automatiquement et votre progression de lecture — se synchronise via iCloud.

Importez vos fichiers EPUB et TXT existants dans [GrepTag Reader](/fr/grepreader/). Le balisage automatique s'exécute immédiatement à l'importation. Disponible pour iPhone, iPad et Mac.
