# Gérer votre bibliothèque BiblioFuse : dossiers, transferts et streaming depuis Mac

[BiblioFuse](https://bibliofuse.com) repose sur une règle simple : vos fichiers restent là où vous les placez. L'application ne déplace, ne renomme et n'enferme jamais les fichiers dans un format propriétaire. Comprendre où vivent vos livres — et comment les y amener — fait toute la différence entre une bibliothèque qui travaille pour vous et une contre laquelle vous luttez constamment.

## Comment ajouter des livres : quatre chemins

### Mac et Android — Ajouter un dossier

Sur Mac et Android, BiblioFuse surveille les dossiers plutôt que de posséder des fichiers. Dans la barre latérale, appuyez sur **Ajouter un dossier** et indiquez n'importe quel emplacement — votre dossier Téléchargements, un disque externe, un NAS. BiblioFuse indexe le contenu et détecte les changements sans toucher aux fichiers.

### iOS — Copier dans le dossier BiblioFuse

iPhone et iPad utilisent un modèle de fichiers en bac à sable, donc vous copiez les livres vers un emplacement que l'application peut voir. Deux emplacements fonctionnent :

**iCloud Drive → BiblioFuse** — Ouvrez l'application Fichiers et naviguez vers iCloud Drive → BiblioFuse. Copiez ou déplacez vos dossiers d'ebooks ici. Chaque dossier que vous déposez apparaît comme un dossier séparé dans la liste BiblioFuse. Les livres ou fichiers placés directement à la racine d'iCloud Drive → BiblioFuse (pas dans un sous-dossier) apparaissent sous un dossier appelé **iCloud** dans l'application. Les livres stockés ici bénéficient d'un suivi automatique de la progression : votre position de lecture se synchronise entre iPhone, iPad et Mac. Reprenez exactement là où vous en étiez sur n'importe quel appareil.

**Sur mon iPhone → BiblioFuse** — Pour un stockage uniquement local, copiez les dossiers d'ebooks ici. Les dossiers apparaissent de la même façon dans la liste, mais la progression reste sur cet appareil uniquement.

Dans les deux cas, déposez des dossiers — pas des fichiers individuels. Un dossier contenant les volumes d'une série manga devient une seule entrée avec tous les volumes à l'intérieur.

### Transfert Wi-Fi

Le serveur d'importation intégré vous permet de glisser des fichiers depuis n'importe quel ordinateur sans câble ni logiciel de synchronisation.

- **iOS** : Allez dans **Réglages → Importation Wi-Fi** et activez-le. Une URL locale apparaît — ouvrez-la dans n'importe quel navigateur de bureau et faites glisser les fichiers. Les fichiers arrivent dans **Sur mon iPhone → BiblioFuse → import** et apparaissent automatiquement dans votre bibliothèque.
- **Android** : Vous choisissez le dossier de destination lors de la configuration du transfert Wi-Fi.

### Livres traités par l'onglet Outils

Quand vous utilisez l'[onglet Outils](/fr/webapp) pour compresser ou fusionner des fichiers, le résultat va dans :

- **iOS** : **Sur mon iPhone → BiblioFuse → export** — les fichiers traités apparaissent ici automatiquement.
- **Android** : Vous choisissez le dossier de sortie lors de l'exécution des outils.

L'[outil Web BiblioFuse](/fr/webapp) effectue les mêmes opérations dans n'importe quel navigateur — pratique sur Windows ou Linux. Pour plus de détails sur les économies d'espace réalisées par la compression, consultez notre [guide sur la taille des fichiers de BD et d'ebooks](/fr/blog/reduce-comic-ebook-file-size).

### Mac : Envoyer vers iCloud en un clic droit

Si vous lisez sur Mac et souhaitez avoir un livre sur votre iPhone, faites un clic droit sur la couverture et choisissez **Envoyer vers iCloud**. BiblioFuse copie le fichier directement dans **iCloud Drive / BiblioFuse** — le même conteneur que votre iPhone surveille. Il apparaît sur votre téléphone en quelques minutes, sans aucune étape manuelle.

Pour envoyer plusieurs livres à la fois, activez le mode de sélection (l'icône de coche, en haut à droite), choisissez les livres voulus et appuyez sur **Envoyer vers iCloud** dans la barre d'action.

## La grille de bibliothèque : options en appui long

Appuyer longuement sur une couverture de livre sur iOS ouvre un menu contextuel :

- **Ouvrir** — passer directement à la lecture
- **Partager** — transmettre le fichier à une autre application
- **Renommer** — changer le nom affiché (ne renomme pas le fichier sur le disque)
- **Modifier les métadonnées** — ajouter des étiquettes et une note de 1 à 5 étoiles
- **Supprimer** — une confirmation apparaît avec deux options distinctes :
  - *Retirer de la bibliothèque* — supprime l'entrée, le fichier reste intact sur le disque
  - *Supprimer du stockage* — supprime à la fois l'entrée et le fichier physique

Pour envoyer des livres à l'onglet Outils, activez le mode de sélection (appuyez longuement sur le premier livre, puis touchez les autres). Une barre apparaît en bas avec un bouton **Outils** (icône de baguette magique). Appuyez dessus pour mettre les livres sélectionnés en file d'attente pour compression ou fusion.

## Streaming de votre bibliothèque Mac vers iPhone

Si votre collection principale se trouve sur un Mac, vous n'avez pas besoin de tout copier. [BiblioFuse](/fr/) peut diffuser directement depuis Mac vers iPhone — mais utilisez Tailscale plutôt que la méthode Wi-Fi de base, qui peut être instable lorsque le téléphone change de réseau.

Tailscale crée un réseau privé chiffré entre vos appareils. Une fois configuré, votre iPhone peut atteindre votre Mac que vous soyez en données mobiles, sur un Wi-Fi public ou chez vous.

### Étape 1 : Installer Tailscale sur les deux appareils

1. Mac : téléchargez depuis [tailscale.com/download](https://tailscale.com/download) ou le Mac App Store.
2. iPhone : cherchez "Tailscale" dans l'App Store.
3. Connectez-vous avec le **même compte Tailscale** sur les deux.

Une fois connectés, les deux appareils peuvent communiquer en privé.

### Étape 2 : Activer le streaming sur Mac

Dans BiblioFuse pour Mac, faites défiler la barre latérale gauche jusqu'à la section **Streaming** et activez-la. Deux points de terminaison apparaissent : un pour LAN/Wi-Fi et un pour **Distant / Tailscale**. Le Tailscale est le chemin fiable.

### Étape 3 : Vérifier les autorisations sur iPhone

Deux autorisations iOS sont nécessaires :

1. **Réseau local** — allez dans **Réglages → Confidentialité et sécurité → Réseau local** et activez BiblioFuse.
2. **iCloud** — allez dans **Réglages → [Votre nom] → iCloud** et activez BiblioFuse.

Vérification rapide : ouvrez BiblioFuse sur iPhone, allez dans **Réglages → Autorisations**. Les coches vertes indiquent que tout est bon ; une marque rouge renvoie directement au réglage système à corriger.

### Étape 4 : Se connecter depuis iPhone

1. Ouvrez l'onglet **Bibliothèque** dans BiblioFuse.
2. Dans la barre latérale (panneau gauche sur iPad, appuyez sur l'icône de barre latérale sur iPhone), faites défiler jusqu'en bas — la section **Mac** liste les points de terminaison de streaming détectés.
3. Cherchez l'entrée avec **(iCloud)** dans le nom, par exemple *MacBook Pro de Martin (iCloud)*.
4. Appuyez dessus. Attendez 10 à 30 secondes pour que la connexion sécurisée s'établisse.

Les dossiers de votre bibliothèque Mac apparaissent maintenant dans la barre latérale comme du stockage local. Naviguez et lisez normalement.

### Ce qui est diffusé vs. ce qui est téléchargé

| Format | Comportement |
|--------|-------------|
| CBZ / CBR | Diffusé page par page — aucun téléchargement requis, s'ouvre instantanément |
| EPUB / TXT | Téléchargé sur l'appareil d'abord, puis s'ouvre |

**Note sur la progression de lecture :** la progression des sessions en streaming est sauvegardée dans la base de données locale de votre Mac, pas dans iCloud. Elle ne se synchronisera pas avec d'autres appareils — elle reste sur le Mac.

## Conseils rapides

- **iCloud est le chemin de synchronisation le plus simple** : les livres dans iCloud Drive → BiblioFuse apparaissent sur tous vos appareils Apple avec le suivi de progression dès le départ.
- **Le dossier export est une zone de transit** : après compression sur iOS, retrouvez les résultats dans Sur mon iPhone → BiblioFuse → export, puis déplacez-les où vous souhaitez les conserver.
- **Vérifiez les autorisations en premier si le streaming ne fonctionne pas** : la plupart des problèmes de connexion viennent d'un Réseau local ou d'un iCloud désactivé.
