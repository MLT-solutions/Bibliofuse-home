# Comment le hachage perceptuel trouve les doublons de bandes dessinées même après renommage

Vous avez renommé un fichier. Vous avez recompressé une archive. Vous avez téléchargé le même volume depuis une source différente. Par toute mesure habituelle, ce sont maintenant des fichiers "différents" — noms différents, checksums différents, tailles différentes.

Pourtant, la bande dessinée à l'intérieur est la même. Chaque page est la même. Et si vous essayez de nettoyer votre bibliothèque numérique, ces quasi-doublons sont exactement ceux qui échappent aux outils de détection de doublons standard.

C'est le problème que résout le hachage perceptuel, et c'est la technique au cœur d'[Archive Duplicate Scanner](/fr/archive/).

---

## Pourquoi la comparaison de fichiers standard est insuffisante

La plupart des outils de "recherche de doublons" calculent un **checksum** pour chaque fichier et signalent les fichiers qui partagent le même checksum. Cela fonctionne parfaitement pour les copies exactes.

Mais pour les archives de bandes dessinées, cette approche manque les doublons les plus courants dans le monde réel :

| Scénario | Même checksum ? | Vraiment un doublon ? |
|----------|----------------|----------------------|
| Copie avec nom différent | Non | Oui |
| Recompressé à qualité différente | Non | Oui |
| Recompilé avec structure différente | Non | Probablement oui |
| Téléchargé de deux sources différentes | Non | Souvent oui |
| Copie exacte octet par octet | Oui | Oui |

---

## Ce que fait le hachage perceptuel à la place

Un **hachage perceptuel** est une empreinte digitale courte calculée à partir du *contenu visuel* d'une image — pas de ses octets. L'algorithme le plus utilisé, **pHash**, fonctionne approximativement ainsi :

1. Redimensionne l'image à une petite taille fixe (ex. 32×32 pixels)
2. Convertit en niveaux de gris
3. Applique une transformée en cosinus discrète (DCT) pour extraire les composantes fréquentielles
4. Conserve la partie basse fréquence — cela capture la structure globale
5. Compare chaque valeur à la médiane, produisant une chaîne de bits

Deux images au contenu visuel similaire produisent des hachages avec une **distance de Hamming** faible.

---

## Comment Archive Duplicate Scanner applique cela

[Archive Duplicate Scanner](/fr/archive/) applique le hachage perceptuel au niveau de l'archive :

1. **Extraction** — ouvre chaque CBZ ou CBR et lit les images internes
2. **Hachage de chaque page** — chaque page reçoit un hachage perceptuel
3. **Comparaison** — construit un index de similarité et trouve les archives qui partagent un fort taux de pages correspondantes
4. **Score** — attribue une confiance de correspondance

Cette correspondance multi-pages est ce qui rend l'outil précis pour les bandes dessinées spécifiquement. Quand 90% des pages de deux archives correspondent, la probabilité de faux positif tombe à quasi zéro.

---

## Cas pratiques

**Cas 1 : Sources différentes, noms différents**
Vous avez téléchargé `HxH_v12_en.cbz` d'un site et `Hunter_X_Hunter_Volume_12.cbz` d'un autre. Comparaison de checksum : aucune correspondance. Hachage perceptuel : pages quasi identiques → signalé comme doublon.

**Cas 2 : Archive recompressée**
Quelqu'un a compressé un CBZ, réduisant chaque JPEG à 80% de qualité. Checksums changés. Hachage perceptuel : visuellement identiques → détecté.

**Cas 3 : Pages réordonnées ou renommées**
Une archive a des pages `001.jpg` alors qu'une autre a `page_001.jpg`. Le hachage perceptuel ne regarde pas les noms internes → toujours détecté.

---

## Les limites du hachage perceptuel

**Les modifications visuelles importantes brisent la correspondance.** Les légères filigranes ou les recadrages mineurs n'affectent généralement pas la détection.

**Les images à très basse résolution sont peu fiables.**

**Le manga avec des styles artistiques similaires entre volumes.** Des faux positifs occasionnels sont possibles — l'interface de révision permet de vérifier les miniatures avant de supprimer.

---

## Utiliser Archive Duplicate Scanner

[Archive Duplicate Scanner](/fr/archive/) est une application Mac native qui apporte le hachage perceptuel à toute votre bibliothèque. Il déplace les doublons sélectionnés dans la Corbeille (pas de suppression définitive).

Une fois votre bibliothèque nettoyée, associez-la à [BiblioFuse](/fr/) sur iPhone pour une source unique et organisée pour la lecture.
