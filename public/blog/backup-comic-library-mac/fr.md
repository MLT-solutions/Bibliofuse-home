# Comment sauvegarder votre bibliothèque de bandes dessinées sur Mac : disque externe, NAS et options cloud

BiblioFuse stocke vos bandes dessinées et livres numériques — EPUB, CBZ, CBR, PDF, ZIP, RAR et TXT — sur iPhone, iPad et Mac, et diffuse votre bibliothèque Mac directement sur iPhone via Wi-Fi sans copier de fichiers. Pour sauvegarder votre bibliothèque de BD sur Mac, vous pouvez utiliser Time Machine avec un disque externe ou un NAS, copier des fichiers vers un stockage cloud comme iCloud Drive ou Dropbox, ou utiliser tout outil de sauvegarde qui réplique un dossier standard. La progression de lecture BiblioFuse se synchronise automatiquement via iCloud, so votre position dans chaque livre est toujours conservée.

## Pourquoi sauvegarder votre bibliothèque de bandes dessinées est essentiel

Imaginez la scène : vous avez passé cinq ans à télécharger des achats légaux, numériser votre collection physique et organiser des centaines de volumes en CBZ, CBR, EPUB et PDF. Un mardi matin, le disque interne de votre Mac tombe en panne. Sans avertissement. Sans deuxième chance. Tout a disparu.

Ou peut-être êtes-vous en train de passer à un nouveau Mac et vous n'êtes pas sûr que l'Assistant Migration transférera correctement votre bibliothèque, ni si vous devrez rechercher des fichiers éparpillés dans des dossiers dont vous vous souvenez vaguement avoir créés en 2021.

Dans les deux cas, une stratégie de sauvegarde appropriée n'est pas optionnelle quand votre bibliothèque mérite d'être protégée.

## Pourquoi les bibliothèques de BD sont plus difficiles à remplacer que vous ne le pensez

La musique et les photos ont des services de streaming et de synchronisation cloud comme filets de sécurité. Les bandes dessinées et les mangas sont différents. Les fichiers sans DRM — les rips CBZ achetés, les romans graphiques EPUB de Humble Bundle, les doujinshi que vous avez trouvés — sont irremplaçables une fois perdus. Les éditeurs ne maintiennent pas indéfiniment les bibliothèques de téléchargement. Les archives de traductions amateur disparaissent. Les scans physiques que vous avez réalisés vous-même ne peuvent pas être rescannés.

Une collection numérique sérieuse de BD peut facilement atteindre 50 Go, 200 Go ou plus. C'est plus grand que la plupart des bibliothèques de photos et bien plus grand que les bibliothèques musicales typiques. La taille des fichiers rend la suppression accidentelle plus grave : vous ne remarquerez pas un CBZ manquant dans un dossier de 800 volumes avant de le chercher trois mois plus tard.

## Comment sauvegarder votre bibliothèque de bandes dessinées sur Mac

Les méthodes suivantes fonctionnent indépendamment ou ensemble. Utiliser deux méthodes — locale et cloud — vous offre une redondance.

### Méthode 1 : Time Machine (recommandée pour la plupart des utilisateurs)

Time Machine est le moyen le plus simple de sauvegarder l'intégralité de votre Mac, y compris votre bibliothèque de BD.

1. Connectez un HDD externe, un SSD ou un NAS à votre Mac.
2. Ouvrez **Réglages Système → Général → Time Machine**.
3. Cliquez sur **Ajouter un disque de sauvegarde** et sélectionnez votre disque externe ou NAS.
4. Time Machine sauvegarde automatiquement toutes les heures et conserve des instantanés horaires pendant 24 heures, quotidiens pendant un mois, et hebdomadaires jusqu'à ce que le disque soit plein.

Time Machine est versionné, donc si vous supprimez accidentellement un volume ou écrasez un dossier, vous pouvez restaurer la version exacte de la date à laquelle tout allait bien. Aucune configuration n'est requise au-delà de la configuration initiale.

### Méthode 2 : Copie manuelle sur disque externe

Pour les lecteurs qui souhaitent une copie portable et autonome de leur bibliothèque, une copie manuelle sur un disque externe est rapide et ne nécessite aucun logiciel.

1. Ouvrez le **Finder** et accédez à votre dossier de bibliothèque BiblioFuse. L'emplacement par défaut est `~/Library/Containers/com.modernlogic.bibliofuse/Data/Documents/`, mais vous avez peut-être défini un dossier personnalisé.
2. Sélectionnez le dossier et faites-le glisser vers votre disque externe.
3. Répétez cette opération chaque fois que vous ajoutez un nombre important de nouveaux volumes.

Cette méthode est mieux combinée avec Time Machine plutôt qu'utilisée seule. Une copie manuelle vous donne un disque portable que vous pouvez emporter hors site ; Time Machine vous donne un historique versionné.

### Méthode 3 : Stockage cloud (iCloud Drive, Dropbox, Google Drive)

Le stockage cloud est idéal si vous souhaitez que votre bibliothèque soit accessible sur plusieurs Mac ou comme sauvegarde hors site.

**iCloud Drive :**
1. Déplacez votre dossier de bibliothèque de BD vers `~/Library/Mobile Documents/com~apple~CloudDocs/` (votre dossier iCloud Drive dans le Finder).
2. Les fichiers se synchronisent automatiquement avec les serveurs Apple et avec tout autre Mac connecté au même identifiant Apple.
3. Activez **Optimiser le stockage du Mac** dans les réglages iCloud uniquement si votre Mac dispose d'un espace disque limité — sinon, conservez des copies locales complètes.

**Dropbox ou Google Drive :**
1. Déplacez votre dossier de bibliothèque dans le dossier Dropbox ou Google Drive sur votre Mac.
2. Le client de bureau synchronise les modifications automatiquement.
3. Sachez que les grandes bibliothèques (100 Go+) consommeront une part importante de votre quota de stockage cloud.

La synchronisation cloud ne remplace pas la sauvegarde locale. Si vous supprimez accidentellement des fichiers, la corbeille cloud ne les conserve généralement que 30 jours.

### Méthode 4 : NAS (stockage en réseau)

Un NAS est la meilleure solution pour les grandes collections. Les appareils de Synology, QNAP ou fabricants similaires se connectent à votre réseau domestique et offrent des téraoctets de stockage redondant.

1. Montez le partage NAS dans le Finder : **Aller → Se connecter au serveur** et entrez `smb://[IP-NAS]/[nom-partage]`.
2. Utilisez **rsync** pour la synchronisation automatisée. Ouvrez Terminal et exécutez :

```
rsync -av --delete ~/chemin/vers/bibliotheque-bd/ /Volumes/NAS-Share/bibliotheque-bd/
```

3. Planifiez cette commande comme une tâche cron quotidienne ou utilisez un outil comme **Hazel** ou **Automator** pour la déclencher automatiquement.

Un NAS avec redondance RAID signifie que même si un disque du groupe tombe en panne, vos données survivent. Combinez-le avec Time Machine pointant vers un partage NAS pour le meilleur des deux mondes : redondance et gestion des versions.

### Comprendre la bibliothèque Mac Home de BiblioFuse

[BiblioFuse](/fr/) inclut une fonctionnalité Mac Home Library qui diffuse des bandes dessinées depuis un dossier de votre Mac directement sur votre iPhone ou iPad via Wi-Fi — sans copier de fichiers, sans synchronisation, sans utilisation de stockage sur l'appareil.

Il s'agit d'une fonctionnalité de streaming, pas de sauvegarde. Les fichiers se trouvent sur votre Mac. Si le disque de votre Mac tombe en panne, l'iPhone n'a rien à diffuser. **Vous devez quand même sauvegarder le dossier source sur votre Mac** en utilisant une ou plusieurs des méthodes ci-dessus.

Pour trouver le dossier que BiblioFuse diffuse, ouvrez BiblioFuse sur votre Mac et vérifiez **Réglages → Bibliothèque Home**. Ce chemin est celui que vous devez inclure dans votre stratégie de sauvegarde.

## Conseils pratiques pour maintenir votre bibliothèque organisée

**Utilisez le Finder pour localiser le dossier de la bibliothèque.** Sur Mac, appuyez sur **⌘ + Espace** et tapez `~/Library/Containers/com.modernlogic.bibliofuse` pour accéder directement au conteneur de l'application. Vos fichiers se trouvent dans le sous-dossier `Data/Documents/`.

**Utilisez rsync pour des sauvegardes NAS incrémentielles.** L'option `--delete` garantit que votre copie NAS reflète exactement votre Mac, en supprimant les volumes que vous avez supprimés localement. Exécutez-le hebdomadairement ou après des importations en masse.

**Utilisez iCloud Drive pour une sauvegarde hors site automatique.** Si votre bibliothèque fait moins de 50 Go et que vous disposez d'un abonnement iCloud+, stocker votre bibliothèque dans iCloud Drive est la sauvegarde hors site la moins contraignante disponible sur Mac.

**Séparez votre progression de lecture de vos fichiers.** [BiblioFuse](/fr/) synchronise la progression de lecture via iCloud automatiquement — vous n'avez pas besoin de la sauvegarder séparément. Concentrez votre stratégie de sauvegarde sur les fichiers sources eux-mêmes.

## Foire aux questions

**Où BiblioFuse stocke-t-il mes bandes dessinées sur Mac ?**
Par défaut, les fichiers gérés par BiblioFuse sur Mac sont stockés dans `~/Library/Containers/com.modernlogic.bibliofuse/Data/Documents/`. Si vous avez dirigé l'application vers un dossier personnalisé, ce dossier est la racine de votre bibliothèque. Dans tous les cas, le chemin est visible dans les réglages de BiblioFuse sur Mac.

**Time Machine sauvegarde-t-il automatiquement la bibliothèque BiblioFuse ?**
Oui. Time Machine sauvegarde l'intégralité de votre Mac par défaut, y compris le conteneur d'application où BiblioFuse stocke les fichiers. Si vous utilisez un dossier de bibliothèque personnalisé en dehors du conteneur, assurez-vous qu'il ne figure pas dans la liste d'exclusions de Time Machine.

**Puis-je déplacer ma bibliothèque de BD vers un nouveau Mac sans perdre ma progression de lecture ?**
Oui. Copiez votre dossier de bibliothèque de BD sur le nouveau Mac et connectez-vous avec le même identifiant Apple. BiblioFuse restaure votre progression de lecture depuis iCloud. Pointez l'application vers le même chemin de dossier relatif sur le nouveau Mac et votre bibliothèque apparaîtra exactement comme elle était.

**iCloud Drive est-il une sauvegarde fiable pour les grandes bibliothèques de BD ?**
iCloud Drive est une sauvegarde hors site fiable, mais ne remplace pas une sauvegarde locale. Si vous supprimez un fichier, iCloud le conserve dans le dossier Supprimés récemment pendant 30 jours. Pour les grandes collections, un disque externe ou un NAS reste indispensable.

**Comment automatiser les sauvegardes rsync vers un NAS ?**
Ouvrez **Terminal** et exécutez `crontab -e`. Ajoutez une ligne comme `0 2 * * * rsync -av --delete ~/BD/ /Volumes/NAS/BD/` pour exécuter une synchronisation chaque nuit à 2 h. Remplacez les chemins par les chemins réels de votre bibliothèque et de montage NAS.

**Que se passe-t-il avec mes BD si le disque de mon Mac tombe en panne ?**
Si vous disposez d'une sauvegarde Time Machine récente, vous pouvez restaurer l'intégralité de votre bibliothèque sur un nouveau disque ou un nouveau Mac. Si vous avez une copie manuelle sur un disque externe ou un NAS, ces fichiers sont intacts et peuvent être copiés directement. Sans sauvegarde, les fichiers sont irrécupérables — c'est pourquoi il est essentiel de configurer une sauvegarde avant toute panne.

## Commencez à protéger votre bibliothèque dès aujourd'hui

Une bibliothèque de BD construite sur des années mérite les mêmes soins que n'importe quelle autre collection numérique irremplaçable. L'étape la plus rapide que vous puissiez franchir maintenant est de brancher un disque externe et d'activer Time Machine — cela seul vous protège contre les pannes matérielles. Ajoutez une sauvegarde cloud pour une protection hors site, et un NAS pour les grandes collections.

[BiblioFuse](/fr/) rend la lecture de votre bibliothèque facile sur iPhone, iPad et Mac. Associez-le à une solide stratégie de sauvegarde et votre collection sera protégée quoi qu'il arrive avec votre matériel.
