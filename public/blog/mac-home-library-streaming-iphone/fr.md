# Diffusez Votre Bibliothèque de Comics Mac sur iPhone en Wi-Fi (Sans Copier Quoi Que Ce Soit)

Votre disque dur Mac contient 400 Go de fichiers CBZ et EPUB — des décennies de manga, de romans graphiques et de comics scannés. Votre iPhone dispose de 64 Go au total, et la plupart sont déjà occupés. Vous avez essayé iCloud, mais la synchronisation est lente et consomme du stockage. Vous avez essayé Wi-Fi Transfer pour importer des volumes ponctuellement, mais choisir les fichiers un par un n'a pas de sens quand vous avez une collection complète.

Mac Home Library dans [BiblioFuse](/fr/) résout ce problème différemment. Au lieu de copier des fichiers sur votre téléphone, l'application les diffuse. Votre Mac devient un serveur local ; votre iPhone lit à la demande. Rien n'est copié. Rien n'est envoyé dans le cloud. Vous accédez à l'intégralité de vos 400 Go sur l'iPhone, tant que vous êtes sur le même réseau Wi-Fi.

## Qu'est-ce que Mac Home Library

Mac Home Library est une fonctionnalité de diffusion locale, pas de synchronisation. La distinction est importante.

**La synchronisation** (comme iCloud) copie les fichiers sur l'appareil. Pour synchroniser 400 Go, il vous faut 400 Go libres sur l'iPhone — ce que la plupart des utilisateurs n'ont pas.

**La diffusion** ne copie rien. Le fichier reste sur le Mac ; l'iPhone récupère les pages à la demande au fil de la lecture. Lorsque vous appuyez sur un volume dans la vue Mac Library sur l'iPhone, [BiblioFuse](/fr/) demande les pages pertinentes via le réseau local. Espace utilisé sur l'iPhone : zéro (hors l'application elle-même et ses données de progression).

## Ce Dont Vous Avez Besoin

- Un iPhone sous iOS 17 ou version ultérieure
- Un Mac sur le même réseau Wi-Fi que l'iPhone
- [BiblioFuse](/fr/) installé sur les deux appareils (l'app iOS et l'application compagnon Mac)
- Votre bibliothèque de comics stockée localement sur le Mac

## Configuration de Mac Home Library

La configuration prend environ deux minutes et ne nécessite aucune configuration réseau particulière.

**Sur votre Mac :**

1. Ouvrez **BiblioFuse** (l'application compagnon Mac).
2. Allez dans **Préférences → Home Library**.
3. Cliquez sur **Activer le partage Home Library**.
4. Si macOS demande l'autorisation de communiquer sur le réseau local, cliquez sur **Autoriser**.
5. Vous verrez une URL locale comme `bibliofuse.local:8765` — c'est l'adresse qu'utilise votre iPhone.

**Sur votre iPhone :**

1. Ouvrez **BiblioFuse** sur l'iPhone.
2. Appuyez sur l'onglet **Bibliothèque**.
3. Appuyez sur le sélecteur de source en haut — vous devriez voir **Mac Home Library** à côté de votre bibliothèque locale.
4. Appuyez sur **Mac Home Library**. Si votre Mac est allumé et le partage activé, la connexion s'établit en quelques secondes et toute votre bibliothèque Mac apparaît.

Pas d'adresses IP à configurer, pas de paramètres de routeur, pas de redirection de port. BiblioFuse utilise Bonjour pour découvrir automatiquement le Mac sur le réseau local.

## Navigation et Lecture

La vue Mac Library sur l'iPhone reflète la structure de dossiers de votre Mac. Si vous organisez votre manga par séries, vous voyez ces mêmes dossiers.

Appuyez sur un dossier pour parcourir les volumes. Appuyez sur un volume pour l'ouvrir. BiblioFuse récupère les premières pages immédiatement. Le chargement des pages est rapide — sur un réseau Wi-Fi 5 GHz typique, les pages arrivent en moins d'une seconde même pour des fichiers CBZ haute résolution.

L'expérience de lecture est identique à celle d'un volume stocké localement : mode droite-à-gauche pour le manga, défilement vertical pour les webtoons, double page en paysage, zoom et déplacement.

## Comment Fonctionne la Progression de Lecture

La progression de lecture des sessions Mac Home Library se synchronise via iCloud, comme pour les volumes stockés localement. Si vous lisez jusqu'à la page 87 d'un volume diffusé depuis votre Mac, l'iPhone enregistre la page 87 et l'envoie à iCloud. Si vous ouvrez ensuite ce même volume sur votre iPad, il s'ouvre à la page 87.

## Différences avec Wi-Fi Transfer et iCloud Sync

Ces trois fonctionnalités de [BiblioFuse](/fr/) servent des objectifs différents.

**Wi-Fi Transfer** déplace des fichiers du Mac vers l'iPhone. Utilisez-le pour construire votre collection locale — les volumes que vous voulez disponibles hors ligne.

**iCloud Sync** maintient les fichiers synchronisés entre appareils via le stockage cloud d'Apple. Idéal pour les bibliothèques de taille modérée.

**Mac Home Library** diffuse sans transférer. Utilisez-le pour accéder à votre bibliothèque complète depuis chez vous avec une bonne connexion Wi-Fi. Rien n'occupe le stockage de l'iPhone ; le Mac est la seule source de vérité.

## Conseils pour de Meilleures Performances

**Utilisez le Wi-Fi 5 GHz.** Assurez-vous que le Mac et l'iPhone sont tous les deux sur la bande 5 GHz pour de meilleures performances avec les fichiers CBZ haute résolution.

**Gardez le Mac éveillé.** Si le Mac se met en veille, la connexion de diffusion s'interrompt. Configurez **Réglages Système → Batterie → Empêcher la mise en veille** lorsque branché.

**La bibliothèque sur SSD est plus rapide.** Si votre bibliothèque est sur un disque dur externe, les temps d'accès sont plus lents qu'avec un SSD, ce qui peut entraîner un léger délai au premier chargement d'un volume.

## Lecture Hors Ligne depuis la Bibliothèque Mac

Si vous savez que vous serez sans Wi-Fi, vous pouvez télécharger des volumes individuels depuis la bibliothèque Mac sur votre iPhone avant de partir.

Dans la vue Mac Library sur l'iPhone, appuyez sur l'**icône de téléchargement** à côté d'un volume. BiblioFuse le copie dans le stockage local de l'iPhone via Wi-Fi Transfer. Le volume sera ensuite disponible hors ligne dans votre bibliothèque locale.

## Pour Commencer

[BiblioFuse](/fr/) est disponible sur l'App Store pour iPhone et iPad. Mac Home Library fait partie de l'application standard, sans abonnement premium. Installez-le sur votre Mac et votre iPhone, activez le partage dans les Préférences Mac, et toute votre bibliothèque sera disponible sur l'iPhone lors de votre prochaine connexion au même réseau.
