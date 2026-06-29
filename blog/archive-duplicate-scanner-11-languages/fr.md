# Comic Duplicate Scanner Disponible en 11 Langues — Trouvez les Comics dont Vous Ignoriez Qu'ils Étaient des Doublons

Quand vous gérez une grande collection de comics, les doublons ne ressemblent pas toujours à des doublons. Un fichier s'appelle `comic_E1-5.cbz`. Un autre, `ComiX_E1-10.cbz`. Noms différents, plages apparentes différentes — mais les pages internes se chevauchent. [Comic Duplicate Scanner](/fr/archive/) a été conçu exactement pour ça : il ouvre les archives et compare les images de pages directement, pas seulement les noms de fichiers.

Cette fonctionnalité est maintenant disponible en 11 langues. Comic Duplicate Scanner a étendu sa localisation complète à l'anglais, l'espagnol, le français, le néerlandais, le portugais, le russe, le chinois simplifié, le japonais, le coréen, le bahasa indonesia et le malais.

## Le Problème de la Détection par Nom de Fichier

Les outils de recherche de doublons standard comparent des noms, des tailles ou des hachages. Cette approche échoue avec les archives de comics car :

- **Même contenu, nom différent** : `Spider-Man_001.cbz` et `spiderman_issue01.cbz` sont le même comic, mais aucune comparaison de noms ne le détecte
- **Plages d'épisodes qui se chevauchent** : `manga_vol1_ch1-5.cbz` et `manga_vol1_ch3-8.cbz` contiennent des chapitres identiques dans des archives différentes
- **Fichiers ré-encodés** : un CBZ ré-exporté a un hachage différent mais un contenu de pages identique

[Comic Duplicate Scanner](/fr/archive/) contourne ce problème en extrayant un échantillon d'images de chaque archive et en les comparant visuellement par hachage perceptuel.

## Nouveautés : Support Complet de 11 Langues

| Langue | Nouveauté |
|--------|-----------|
| Anglais | — |
| Espagnol | — |
| Portugais | — |
| Bahasa Indonesia | — |
| Chinois simplifié | — |
| **Français** | ✓ |
| **Néerlandais** | ✓ |
| **Russe** | ✓ |
| **Japonais** | ✓ |
| **Coréen** | ✓ |
| **Malais** | ✓ |

L'interface complète est traduite — contrôles de scan, liste des résultats, étiquettes de confiance, boutons d'action et panneaux de préférences.

## Comment Fonctionne la Comparaison Visuelle

Comic Duplicate Scanner ouvre chaque archive CBZ, CBR, ZIP ou RAR, extrait des pages de début et génère un hachage perceptuel de chacune. Si suffisamment de hachages correspondent, la paire est signalée comme doublon potentiel — peu importe ce que disent les noms de fichiers.

Vous contrôlez la sensibilité de correspondance. Un seuil plus strict exige une correspondance visuelle plus proche ; un seuil plus laxe capture plus de cas limites.

Comic Duplicate Scanner est gratuit pour scanner et prévisualiser les correspondances. Comic Duplicate Scanner Pro est un achat unique qui permet des actions de déplacement/suppression en masse. Sans abonnement.

Téléchargez [Comic Duplicate Scanner](/fr/archive/) sur l'App Store ou le Microsoft Store.
