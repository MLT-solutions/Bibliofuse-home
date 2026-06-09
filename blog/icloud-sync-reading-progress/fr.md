# Comment BiblioFuse synchronise la progression de lecture entre iPhone, iPad et Mac via iCloud

BiblioFuse synchronise automatiquement la progression de lecture, les étiquettes, les évaluations et le sens de lecture entre iPhone, iPad et Mac via iCloud — sans aucune manipulation manuelle. Il fonctionne avec les fichiers EPUB, CBZ, CBR et PDF stockés dans iCloud Drive sur iOS 17 ou ultérieur, associant la progression au hash de contenu de chaque fichier pour qu'elle survive aux renommages et déplacements de dossiers. La synchronisation iCloud est incluse sans abonnement premium.

Vous lisez un volume de manga sur votre iPhone pendant votre trajet — vous atteignez la page 80, puis vous passez sur iPad à la maison et devez chercher dans les miniatures pour retrouver où vous en étiez. Ou vous lisez un chapitre sur Mac et le lendemain matin, votre iPhone affiche toujours la page un.

La synchronisation de la progression de lecture semble simple mais échoue subtilement dans la plupart des lecteurs. [BiblioFuse](/fr/) utilise iCloud pour synchroniser votre position de lecture exacte — numéro de page, direction de lecture et paramètres d'affichage — entre iPhone, iPad et Mac, sans aucune manipulation manuelle.

## Pourquoi la synchronisation de la progression est difficile à bien faire

L'approche basique — sauvegarder un numéro de page dans un document cloud — échoue de plusieurs façons : elle ne tient pas compte des volumes avec des nombres de pages différents selon les encodages, ne synchronise pas la direction de lecture, et n'a aucun mécanisme pour marquer un volume comme terminé de façon persistante.

[BiblioFuse](/fr/) stocke les données de progression sous forme de métadonnées liées au hash du contenu du fichier plutôt qu'à son nom. Même si vous renommez un CBZ ou le déplacez entre dossiers, les données de progression correspondent toujours correctement sur tous les appareils.

## Configurer la synchronisation iCloud

Sur iPhone ou iPad :
1. Allez dans **Réglages** (réglages système)
2. Appuyez sur votre Apple ID → **iCloud** → **iCloud Drive**
3. Trouvez **BiblioFuse** et confirmez que le bouton est activé

Sur Mac :
1. Ouvrez **Réglages Système → Apple ID → iCloud**
2. Activez iCloud Drive et assurez-vous que BiblioFuse apparaît dans la liste

Une fois ces réglages activés, BiblioFuse gère tout automatiquement. Il n'y a pas de bouton « Synchroniser maintenant » — les changements se propagent en arrière-plan quand les appareils sont en ligne.

## Ce qui est synchronisé

**Position de lecture.** Le numéro de page exact. Si vous fermez un volume page 87, tous les autres appareils l'ouvriront page 87.

**Direction de lecture.** Si vous avez configuré un volume manga en droite-à-gauche, ce réglage suit le volume sur tous les appareils.

**Statut de complétion.** Marquer un volume comme lu sur un appareil le marque partout.

**Étiquettes et notes.** Les étiquettes et les notes en étoiles se synchronisent sur tous les appareils.

## Comment la synchronisation de fichiers iCloud Drive fonctionne

[BiblioFuse](/fr/) utilise aussi iCloud Drive pour les fichiers de la bibliothèque.

**Mac vers iPhone** : Ouvrez le Finder et naviguez vers **iCloud Drive → BiblioFuse**. Déposez n'importe quel CBZ, CBR, EPUB ou PDF dans ce dossier. Il apparaît dans BiblioFuse sur votre iPhone en quelques minutes.

**iPhone vers autres appareils** : Les fichiers ajoutés via Wi-Fi Transfer sont stockés dans le dossier iCloud de BiblioFuse et deviennent disponibles sur vos autres appareils.

## Wi-Fi Transfer pour les chargements en masse

Pour la configuration initiale ou les transferts importants, Wi-Fi Transfer est plus rapide que la synchronisation iCloud.

1. Ouvrez **Réglages → Import Wi-Fi** dans l'app
2. Activez-le
3. Visitez l'URL indiquée dans un navigateur sur le même réseau Wi-Fi
4. Faites glisser votre collection dans la fenêtre du navigateur

[BiblioFuse](/fr/) reçoit à la vitesse du réseau local : 50–100 Mo/s sur un réseau domestique typique.

## Mac Home Library : lire sans copier de fichiers

Si votre collection principale est sur un Mac et que vous ne voulez pas remplir l'espace de stockage de l'iPhone, Mac Home Library est une approche différente : il diffuse les volumes directement depuis votre Mac vers iPhone via Wi-Fi local. Aucun fichier n'est copié sur l'appareil ni dans iCloud.

Pour l'activer :
1. Assurez-vous que BiblioFuse est installé sur votre Mac
2. Dans l'app Mac, allez dans **Préférences → Bibliothèque Home** et activez le partage
3. Sur iPhone, ouvrez BiblioFuse et basculez vers l'onglet Bibliothèque Mac

La progression depuis les sessions Mac Home Library reste synchronisée via iCloud.

## Lecture hors ligne

Si vous lisez hors ligne, BiblioFuse stocke la progression localement et la synchronise à la prochaine connexion. En cas de conflit entre deux appareils, l'appareil avec le numéro de page le plus élevé gagne.

## Pour commencer

[BiblioFuse](/fr/) est gratuit sur l'App Store pour iPhone et iPad. La synchronisation iCloud est incluse sans niveau premium. Activez iCloud Drive pour BiblioFuse dans les réglages de votre appareil et votre progression commence à se synchroniser immédiatement.


## Foire aux questions

**Comment BiblioFuse synchronise-t-il la progression de lecture entre iPhone et iPad ?**
BiblioFuse stocke les métadonnées de progression dans iCloud et les associe au hash de contenu de chaque fichier, pas au nom. La progression se synchronise correctement même si vous renommez ou déplacez un fichier. Activez iCloud Drive pour BiblioFuse dans Réglages → Identifiant Apple → iCloud pour activer la synchronisation.

**BiblioFuse synchronise-t-il la progression pour les fichiers CBZ et manga ?**
Oui. La synchronisation de progression fonctionne pour CBZ, CBR, EPUB et PDF. Pour CBZ et CBR, le numéro de page exact est synchronisé. Pour EPUB, la position précise dans le chapitre. Le sens de lecture (gauche à droite ou droite à gauche) est également synchronisé par volume.

**Que dois-je activer pour que la synchronisation iCloud fonctionne dans BiblioFuse ?**
Deux choses : iCloud Drive doit être activé dans Réglages → Identifiant Apple → iCloud, et BiblioFuse doit être activé dans cette liste. Une fois les deux activés, la synchronisation démarre automatiquement sans bouton « Synchroniser maintenant ».

**La synchronisation iCloud fonctionne-t-elle si je lis hors ligne ?**
Oui. Si vous lisez sans connexion internet, BiblioFuse stocke la progression localement. La prochaine fois que l'appareil se connecte à iCloud, il envoie la mise à jour. En cas de conflit entre deux appareils, BiblioFuse privilégie celui qui a le numéro de page le plus élevé.

**Quelle est la différence entre la synchronisation iCloud et Mac Home Library dans BiblioFuse ?**
La synchronisation iCloud copie les fichiers et les données de progression dans le cloud pour qu'ils soient disponibles sur n'importe quel appareil. Mac Home Library diffuse les fichiers à la demande depuis votre Mac via Wi-Fi local — rien n'est copié sur l'appareil ni dans iCloud. Utilisez iCloud pour un accès hors ligne partout ; utilisez Mac Home Library pour parcourir votre collection complète à la maison sans dupliquer le stockage.
