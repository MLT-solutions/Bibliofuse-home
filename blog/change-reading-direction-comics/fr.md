# Comment changer entre la lecture de gauche à droite et de droite à gauche dans BiblioFuse

La plupart des comics occidentaux se lisent de gauche à droite : vous tournez la page en glissant vers la droite, les cases se succèdent depuis le coin supérieur gauche et l'histoire avance dans le sens normal de la lecture. Le manga japonais inverse tout — les cases vont de droite à gauche, la première page se trouve à droite du volume et vous glissez vers la gauche pour avancer. Si vous lisez les deux formats, vous avez besoin d'un lecteur capable de gérer les deux sans reconfiguration à chaque changement de série.

[BiblioFuse](https://bibliofuse.com/fr/) enregistre la direction de lecture en tant que réglage par livre, de sorte que votre bibliothèque de mangas se lit de droite à gauche et vos comics occidentaux de gauche à droite, sans aucune manipulation entre les sessions.

## Pourquoi la direction de lecture est importante

Ouvrir un manga en mode LTR revient à le lire à l'envers — les cases qui devraient aller de droite à gauche apparaissent de gauche à droite, ruinant le rythme et les gags. La confrontation en fin de chapitre devient le dialogue d'ouverture.

La question se complique avec le manhwa (webcomics coréens) et le manhua (comics chinois). La plupart des manhwa utilisent un défilement vertical sans ambiguïté directionnelle, mais le manhua varie.

## Régler la direction de lecture dans BiblioFuse

### Valeur par défaut globale

Ouvrez **Réglages → Lecture → Direction de lecture** pour définir la valeur par défaut globale. Les options sont :

- **Gauche à droite (LTR)** — standard pour les comics occidentaux et la plupart des EPUB
- **Droite à gauche (RTL)** — standard pour le manga et certains manhua

Choisissez le format que vous lisez le plus souvent.

### Réglage par livre

La valeur par défaut s'applique à tout nouveau fichier ouvert, mais vous pouvez la remplacer pour chaque livre sans modifier le réglage global.

Pendant la lecture, appuyez au centre de l'écran pour afficher les commandes, puis appuyez sur l'**icône d'engrenage** dans la barre d'outils. Le sélecteur **Direction de lecture** apparaît en haut du panneau. Le changement prend effet immédiatement, sans fermer le livre.

[BiblioFuse](https://bibliofuse.com/fr/) enregistre cette préférence par fichier. La prochaine fois que vous ouvrez le même livre, il s'ouvre dans la direction que vous avez définie.

## Ce qui change lors du basculement

**Direction du glissement** — En LTR, glissez vers la gauche pour avancer. En RTL, glissez vers la droite pour avancer. Le changement peut dérouter au début, mais il reflète l'acte physique de tourner les pages d'un manga.

**Ordre en affichage deux pages** — En mode paysage LTR, la page gauche a le numéro inférieur. En RTL, la page droite a le numéro inférieur, comme dans les volumes imprimés.

**Orientation de la barre de miniatures** — La barre s'inverse. En mode RTL, la miniature la plus à gauche est la dernière page du volume.

**Détection des planches doubles** — BiblioFuse identifie les doubles pages. En RTL, la page droite est la page N et la gauche la page N+1.

## Défilement vertical et direction de lecture

Le mode de défilement vertical — utilisé pour le manhwa et les webtoons — n'est pas affecté par le réglage LTR/RTL. Le défilement continu n'a pas d'ordre de pages gauche-droite.

## Détection automatique

Certains fichiers CBZ contiennent un fichier `ComicInfo.xml` précisant la direction de lecture. BiblioFuse lit ces métadonnées et applique automatiquement la direction correcte à la première ouverture.

## Questions fréquentes

**La direction de glissement me semble inversée après avoir activé RTL. Est-ce normal ?**

Oui — en mode RTL, glisser vers la droite avance à la page suivante. Cela reflète le geste physique de feuilleter un manga. Vous vous y habituerez en quelques minutes.

**La direction de lecture se synchronise-t-elle entre iPhone et iPad ?**

Les préférences de direction par fichier se synchronisent via iCloud. Le réglage par défaut global est local à l'appareil et ne se synchronise pas.

## En résumé

Changer la direction de lecture dans [BiblioFuse](https://bibliofuse.com/fr/) prend trois appuis et se mémorise automatiquement par livre. Définissez votre valeur par défaut pour le format que vous lisez le plus, ajustez par livre le reste, et le lecteur gère direction de glissement, ordre des doubles pages et orientation des miniatures sans autre configuration.
