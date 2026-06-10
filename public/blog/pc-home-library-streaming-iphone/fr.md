# Diffusez votre bibliothèque de BD depuis votre PC Windows sur iPhone — Wi-Fi à la maison et 5G en déplacement

Votre collection de BD vit sur un PC Windows. Des centaines de gigaoctets de fichiers CBZ, EPUB et PDF organisés exactement comme vous le souhaitez. Votre iPhone dispose de 64 Go de stockage, dont la majorité est déjà utilisée. La solution évidente — copier les fichiers — signifie gérer deux copies de tout, manquer constamment de place et transférer des fichiers chaque fois que vous ajoutez quelque chose de nouveau.

[BiblioFuse](https://bibliofuse.com/fr/) résout ce problème différemment. L'application BiblioFuse PC Reader pour Windows inclut un serveur de streaming intégré. Votre iPhone se connecte au PC et diffuse les pages à la demande — rien n'est copié, rien n'est téléversé et le stockage de votre iPhone reste libre. La même fonctionnalité dont bénéficient les utilisateurs Mac est désormais disponible nativement sur Windows, téléchargeable depuis le Microsoft Store.

## Comment fonctionne le streaming de la bibliothèque PC

BiblioFuse PC Reader exécute un serveur HTTP local sur votre machine Windows. Lorsque votre iPhone et votre PC sont sur le même réseau Wi-Fi, l'application iOS découvre le PC automatiquement grâce à Bonjour (le même protocole réseau à configuration zéro qui alimente AirPrint et AirDrop). Votre bibliothèque apparaît sur votre iPhone sans saisir d'adresse IP ni configurer votre routeur.

Lorsque vous ouvrez un volume, BiblioFuse récupère immédiatement les premières pages et précharge les suivantes pendant votre lecture. Les fichiers CBZ et CBR sont diffusés page par page ; les fichiers EPUB et PDF utilisent des requêtes HTTP Range afin que les gros fichiers s'ouvrent rapidement sans tout télécharger. L'expérience de lecture — mode droite à gauche, défilement vertical pour les webtoons, double page en paysage — est identique à celle d'un fichier stocké localement. La seule différence réside dans l'origine des données.

Le serveur continue de fonctionner même après la fermeture de la fenêtre de l'application. Il se déplace dans la barre d'état système au lieu de se fermer. Votre bibliothèque reste ainsi accessible depuis l'iPhone même lorsque vous utilisez le PC pour autre chose. Pour restaurer la fenêtre, double-cliquez sur l'icône dans la barre d'état système. Pour arrêter complètement le serveur, faites un clic droit sur l'icône et choisissez Quitter.

## Partie 1 : Streaming sur votre Wi-Fi domestique

Il s'agit de la configuration la plus simple. Votre PC et votre iPhone sont sur le même réseau, et BiblioFuse gère la découverte automatiquement.

### Sur votre PC

1. Téléchargez et installez **BiblioFuse PC Reader** depuis le Microsoft Store.
2. Ouvrez l'application et rendez-vous dans **Paramètres → Bibliothèque personnelle**.
3. Cliquez sur **Ajouter un dossier** et sélectionnez le ou les dossiers où sont stockés vos BD et ebooks. Vous pouvez ajouter plusieurs dossiers — un pour le manga, un pour les romans graphiques, un pour les PDF.
4. Activez **Partage de bibliothèque**. Le serveur démarre immédiatement sur le port 7341 et commence à analyser votre bibliothèque en arrière-plan.
5. Optionnellement, définissez un **mot de passe** dans Paramètres → Sécurité pour protéger l'accès. Si vous l'ignorez, n'importe qui sur votre réseau local peut se connecter — convenable pour un usage domestique, recommandé de verrouiller sur un réseau partagé ou public.
6. Vous pouvez fermer la fenêtre. Le serveur fonctionne dans la barre d'état système.

### Sur votre iPhone

1. Ouvrez **[BiblioFuse](https://bibliofuse.com/fr/)** sur iPhone.
2. Appuyez sur l'onglet **Bibliothèque**.
3. Appuyez sur le sélecteur de source en haut — si votre PC est en cours d'exécution et le partage est activé, **Bibliothèque PC** apparaît en quelques secondes.
4. Appuyez dessus. La structure de dossiers de votre PC apparaît immédiatement.

C'est tout. Votre bibliothèque complète est désormais accessible et lisible sur iPhone, sans aucun fichier transféré vers l'appareil. Lorsque vous ajoutez de nouveaux volumes à votre PC, ils apparaissent dans la vue iPhone lors de la prochaine actualisation — aucune étape de resynchronisation requise.

### Formats pris en charge

BiblioFuse PC Reader diffuse tous les formats qu'il peut lire localement : **CBZ, CBR, EPUB, PDF et TXT**. Manga en CBZ, romans graphiques en CBR, ebooks en EPUB, livres numérisés en PDF — tous pris en charge via la même connexion de streaming.

### Conseils de performance

**Utilisez le Wi-Fi 5 GHz.** Si votre routeur diffuse les bandes 2,4 GHz et 5 GHz, assurez-vous que votre PC et votre iPhone sont tous deux connectés à la bande 5 GHz. La bande passante plus élevée fait une différence notable avec les gros fichiers CBZ haute résolution.

**La bibliothèque sur SSD est plus rapide.** Si votre collection de BD est sur un disque dur mécanique, le premier chargement de pages de chaque nouveau volume subira un léger délai. Déplacer la bibliothèque sur un SSD (interne ou externe) élimine ce problème.

**Si l'iPhone ne trouve pas le PC :** L'application PC affiche une adresse réseau dans Paramètres → Bibliothèque personnelle lorsque le partage est actif. Vérifiez que le Pare-feu Windows ne bloque pas le port 7341. Vous pouvez également saisir l'adresse IP locale du PC manuellement dans l'application iOS sous Bibliothèque → Ajouter un serveur → Manuel.

## Partie 2 : Streaming hors de chez vous en 5G

Le streaming Wi-Fi domestique ne fonctionne que lorsque les deux appareils sont sur le même réseau. Pour accéder à votre bibliothèque depuis un café, un hôtel ou n'importe où en 5G, vous devez relier les deux réseaux. La solution est [Tailscale](https://tailscale.com) — la même configuration que celle décrite dans le [guide BiblioFuse Tailscale](/fr/blog/tailscale-remote-library-access/).

Tailscale crée un réseau maillé privé et chiffré entre vos appareils. Une fois configuré, votre iPhone peut atteindre le serveur de streaming de votre PC exactement comme s'ils étaient sur le même réseau local — via n'importe quelle connexion Internet, sans redirection de port ni IP statique.

### Configuration de Tailscale pour le streaming à distance

**Sur votre PC Windows :**

1. Téléchargez Tailscale depuis [tailscale.com](https://tailscale.com) ou le Microsoft Store.
2. Connectez-vous avec Google, GitHub, Microsoft ou un compte Tailscale gratuit.
3. Tailscale s'exécute dans la barre d'état système aux côtés de BiblioFuse. Notez l'adresse IP Tailscale de votre PC (elle commence par `100.`).
4. Assurez-vous que BiblioFuse PC Reader est en cours d'exécution avec le partage de bibliothèque activé.

**Sur votre iPhone :**

1. Installez Tailscale depuis l'App Store.
2. Connectez-vous avec le même compte Tailscale.
3. Activez le bouton VPN Tailscale.
4. Ouvrez BiblioFuse sur iPhone. Dans Bibliothèque → Ajouter un serveur, saisissez l'adresse IP Tailscale de votre PC et le port `7341`.
5. Appuyez sur Connecter.

BiblioFuse préfère automatiquement l'adresse IP Tailscale lorsqu'elle est disponible, de sorte que la même connexion enregistrée fonctionne à la fois à la maison (via LAN) et en déplacement (via Tailscale). Vous n'avez pas besoin de deux entrées de connexion séparées.

### Ce à quoi s'attendre sur réseau mobile

Tailscale établit des connexions pair à pair lorsque possible, en contournant les serveurs relais pour de meilleures performances. Avec une connexion 5G typique, le streaming de pages de BD fonctionne bien. BiblioFuse envoie uniquement la page actuelle et précharge les suivantes — il ne diffuse pas l'intégralité du fichier CBZ en une fois, donc une archive de 200 Mo ne signifie pas 200 Mo de consommation de données. Comptez environ **1 à 3 Mo par page** selon la résolution des images et les paramètres de compression du serveur.

Pour lire avec un forfait données limité, utilisez [BiblioFuse](https://bibliofuse.com/fr/) pour télécharger des volumes individuels en Wi-Fi avant de partir. Dans la vue Bibliothèque PC sur iPhone, appuyez sur l'icône de téléchargement à côté d'un volume pour le mettre en cache localement. Ce volume est ensuite disponible hors ligne, sans Tailscale ni connexion de données.

## PC vs Mac : Quelles différences ?

Si vous avez utilisé l'application compagnon Mac, l'expérience PC est presque identique du côté iOS. Quelques différences spécifiques à Windows :

- **Port :** Le serveur PC utilise le port **7341** (l'application Mac utilise par défaut le port 8686).
- **Découverte :** Les deux utilisent Bonjour/mDNS avec le type de service `_bibliofuse._tcp`, donc iOS les découvre de manière identique.
- **Barre d'état système :** L'application PC reste dans la barre d'état système lorsque la fenêtre est fermée ; le serveur ne s'arrête jamais jusqu'à ce que vous choisissiez Quitter.
- **Fichier de paramètres :** Les paramètres PC sont stockés dans `%APPDATA%\BiblioFuse\settings.json` si vous avez besoin de les inspecter ou de les réinitialiser manuellement.
- **Un seul serveur actif à la fois :** Dans la version actuelle, BiblioFuse iOS se connecte à un serveur Mac ou PC — pas aux deux simultanément. La machine en cours d'exécution et active est celle que iOS découvre en premier.

Pour les détails spécifiques au streaming Mac, consultez [Diffusez votre bibliothèque de BD Mac sur iPhone en Wi-Fi](/fr/blog/mac-home-library-streaming-iphone/).

## Questions fréquentes

**BiblioFuse dispose-t-il d'une application Windows ?**
Oui. BiblioFuse PC Reader est une application Windows native disponible sur le Microsoft Store. Elle lit les fichiers CBZ, CBR, EPUB, PDF et TXT localement et diffuse votre bibliothèque complète vers l'application iOS via votre réseau.

**Comment diffuser des BD depuis mon PC Windows vers iPhone ?**
Installez BiblioFuse PC Reader sur Windows et activez le partage de bibliothèque dans les paramètres. Installez BiblioFuse sur iPhone. Sur le même réseau Wi-Fi, ouvrez BiblioFuse sur iPhone et appuyez sur Bibliothèque — votre bibliothèque PC apparaît automatiquement via la découverte Bonjour. Aucune adresse IP ni configuration du routeur n'est requise.

**Puis-je accéder à ma bibliothèque PC en 5G lorsque je suis loin de chez moi ?**
Oui, en utilisant Tailscale. Installez Tailscale sur votre PC Windows et votre iPhone, connectez-vous avec le même compte et activez-le sur les deux appareils. BiblioFuse détecte automatiquement la connexion Tailscale et l'utilise pour accéder à votre PC de n'importe où — Wi-Fi d'hôtel, 5G, toute connexion Internet.

**Le streaming depuis le PC utilise-t-il le stockage iPhone ?**
Non. Les pages sont récupérées du PC à la demande ; rien n'est stocké sur l'iPhone au-delà de l'application elle-même et de vos données de progression de lecture. Vous pouvez parcourir et lire une bibliothèque de 500 Go sans utiliser de stockage iPhone pour les fichiers.

**Le PC doit-il rester éveillé pour que le streaming fonctionne ?**
Oui. Le serveur de streaming tourne sur le PC ; si le PC se met en veille ou si le serveur est arrêté, la connexion iOS est coupée. Pour éviter la mise en veille pendant le streaming, allez dans Paramètres Windows → Alimentation et mise en veille et réglez la mise en veille sur Jamais, ou utilisez un outil comme PowerToys pour maintenir la machine éveillée.

**Quel port utilise le serveur de streaming PC ?**
Le port 7341. Si vous avez un pare-feu qui bloque le trafic sur ce port, vous devrez ajouter une exception pour BiblioFuse PC Reader.

## Pour commencer

[BiblioFuse PC Reader](https://bibliofuse.com/fr/) est disponible dès maintenant sur le Microsoft Store. BiblioFuse pour iPhone est sur l'App Store. Installez les deux, dirigez l'application PC vers votre dossier de bibliothèque et toute votre collection sera sur votre iPhone la prochaine fois que vous ouvrirez l'application — sans câbles, sans cloud, sans copie.
