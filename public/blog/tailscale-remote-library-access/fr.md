# Accédez à votre bibliothèque de BD depuis n'importe où avec BiblioFuse et Tailscale

BiblioFuse lit les fichiers CBZ, CBR, EPUB, PDF, ZIP, RAR et TXT sur iPhone et iPad sous iOS 17 ou version ultérieure. Sa fonction Mac Home Library vous permet de diffuser toute votre collection de BD depuis votre Mac vers votre iPhone via le réseau Wi-Fi local, sans copier de fichiers. Combinée à Tailscale, vous pouvez étendre cette même connexion sur internet et accéder à votre bibliothèque depuis n'importe où dans le monde.

Vous quittez votre domicile avec 2 To de manga sur votre Mac. Votre iPhone dispose de 128 Go de stockage — loin d'être suffisant pour tout contenir. Vous souhaitez lire cette bibliothèque en voyage, sans déplacer de fichiers vers le cloud ni payer un service de synchronisation séparé. Ce guide vous montre comment y parvenir avec [BiblioFuse](/fr/) et le plan gratuit de Tailscale.

## Qu'est-ce que l'accès distant à une bibliothèque de BD avec BiblioFuse et Tailscale ?

La fonction Mac Home Library de BiblioFuse transforme votre Mac en serveur de diffusion pour votre collection de BD. Lorsque votre iPhone et votre Mac sont sur le même réseau Wi-Fi, vous parcourez et ouvrez des fichiers depuis votre Mac dans BiblioFuse sur votre iPhone — sans copier, sans synchroniser, sans utiliser le stockage du téléphone.

La limitation est « même réseau ». Dès que vous quittez votre domicile, la connexion est coupée — votre Mac est derrière votre routeur domestique et votre iPhone ne peut plus l'atteindre directement.

Tailscale résout ce problème en créant un réseau maillé chiffré de pair à pair entre vos appareils. Votre iPhone et votre Mac apparaissent sur le même réseau virtuel, peu importe où ils se trouvent physiquement. Pour BiblioFuse, cela signifie que la connexion Mac Home Library fonctionne exactement de la même façon sur internet que sur votre Wi-Fi domestique.

## Pourquoi BiblioFuse avec Tailscale est-il meilleur que le stockage cloud ?

Le stockage cloud est l'alternative évidente — synchronisez tout sur iCloud Drive ou Google Drive et accédez depuis n'importe où. Mais pour les grandes bibliothèques de BD, la synchronisation cloud a de vraies limites :

- **Coût du stockage.** 2 To d'iCloud coûtent 9,99 €/mois. Le plan gratuit de Tailscale prend en charge 100 appareils sans frais de stockage.
- **Temps de téléversement.** Envoyer 2 To vers un service cloud prend des jours sur une connexion domestique. Avec Tailscale et BiblioFuse, vous diffusez directement depuis votre Mac — aucun téléversement requis.
- **Confidentialité.** Les fichiers ne quittent jamais votre réseau. Tailscale achemine le trafic de pair à pair ; ses serveurs relais ne gèrent que la négociation de connexion, pas vos fichiers.
- **Expérience de lecture.** La diffusion via [BiblioFuse](/fr/) et Mac Home Library est rapide — les pages se chargent au toucher, comme avec le stockage local. Les fichiers synchronisés dans le cloud nécessitent un téléchargement complet avant ouverture.

## Étape 1 — Configurer Mac Home Library dans BiblioFuse

Mac Home Library de BiblioFuse est une fonction qui sert les dossiers de BD de votre Mac à l'application iPhone via le réseau local.

1. Installez **BiblioFuse** sur votre iPhone et votre Mac (depuis l'App Store sur chaque plateforme)
2. Sur votre Mac, ouvrez BiblioFuse et allez dans **Réglages → Mac Home Library**
3. Cliquez sur **Activer** — le Mac commence à servir votre bibliothèque sur un port local
4. Sur votre iPhone, ouvrez BiblioFuse et allez dans **Bibliothèque → Ajouter une source → Mac Home Library**
5. Votre Mac devrait apparaître automatiquement sur le réseau local. Appuyez dessus pour vous connecter.

Vérifiez que cela fonctionne : parcourez un dossier de votre Mac depuis votre iPhone et ouvrez un CBZ. Les pages doivent se charger en une ou deux secondes. Une fois que cela fonctionne sur le Wi-Fi local, vous êtes prêt à ajouter Tailscale.

## Étape 2 — Installer et configurer Tailscale

Tailscale est un VPN construit sur WireGuard. Le plan gratuit prend en charge jusqu'à 100 appareils et couvre tout ce dont vous avez besoin ici.

1. Rendez-vous sur **tailscale.com** et créez un compte gratuit
2. Installez l'**application Tailscale** sur votre Mac (disponible via l'App Store ou tailscale.com/download)
3. Installez l'**application Tailscale** sur votre iPhone (depuis l'App Store)
4. Connectez-vous à Tailscale sur les deux appareils avec le même compte
5. Dans l'application Tailscale sur votre Mac, vérifiez qu'elle affiche une adresse IP Tailscale (généralement `100.x.x.x`)
6. Sur votre iPhone, ouvrez Tailscale et vérifiez que votre Mac apparaît dans la liste des appareils avec un statut vert

Les deux appareils sont maintenant sur votre réseau Tailscale privé. Ils peuvent communiquer quelle que soit leur localisation physique.

## Étape 3 — Connecter BiblioFuse à votre Mac via Tailscale

Avec Tailscale en cours d'exécution, BiblioFuse peut atteindre la Mac Home Library de votre Mac en utilisant l'adresse IP Tailscale.

1. Sur votre Mac, notez l'adresse IP Tailscale (affichée dans l'application de la barre de menus — quelque chose comme `100.64.0.2`)
2. Sur votre iPhone, ouvrez BiblioFuse et allez dans **Bibliothèque → Ajouter une source → Mac Home Library**
3. Si votre Mac n'apparaît pas automatiquement (ce ne sera pas le cas sur un autre réseau), appuyez sur **Saisir l'adresse manuellement**
4. Tapez l'adresse IP Tailscale et le port utilisé par BiblioFuse (par défaut : `8080`)
5. Appuyez sur **Connecter**

Votre bibliothèque Mac apparaît maintenant dans BiblioFuse sur votre iPhone. Ouvrez n'importe quel dossier, appuyez sur n'importe quel volume et il est diffusé via Tailscale exactement comme sur le Wi-Fi local.

## Étape 4 — Maintenir la connexion quand vous partez

Pour que l'accès distant fonctionne, votre Mac doit être :

- **Éveillé** — désactivez la mise en veille pour l'accès réseau dans **Réglages système → Batterie → Options → Empêcher la mise en veille automatique quand l'écran est éteint** (pour Mac fixe) ou configurez une plage horaire
- **Connecté à internet** — votre routeur domestique reste connecté pendant que vous voyagez
- **Avec Tailscale en cours d'exécution** — configurez Tailscale pour qu'il se lance au démarrage de session dans ses préférences

Sur un MacBook, l'option « Empêcher la mise en veille » nécessite l'adaptateur secteur. Si votre Mac est un MacBook débranché, configurez un horaire spécifique : réveil à 06:00 et mise en veille à 23:00, par exemple.

## Cas d'utilisation pratiques

**Lire une longue série en voyage.** Votre collection complète de One Piece (107 volumes, ~15 Go en CBZ compressés) se trouve sur votre Mac à la maison. Dans un avion sans Wi-Fi vous n'aurez pas accès, mais pendant le voyage avec n'importe quelle connexion internet (Wi-Fi d'hôtel, données mobiles), [BiblioFuse](/fr/) diffuse chaque page à la demande. Vous ne téléchargez pas 15 Go ; vous téléchargez des pages individuelles au fur et à mesure que vous lisez.

**Lire sur une connexion lente.** Tailscale utilise WireGuard, qui est efficace sur les données mobiles. Les pages CBZ compressées (encodées en WebP via l'onglet Outils de BiblioFuse) font généralement entre 200 et 500 Ko chacune. À des vitesses 4G de 10–20 Mbps, chaque page se charge en moins de 0,1 seconde. Même sur un Wi-Fi d'hôtel congestionné à 2 Mbps, les pages se chargent en moins d'une seconde.

**Gérer une bibliothèque familiale.** Ajoutez l'iPhone de votre conjoint ou une tablette au même compte Tailscale (jusqu'à 100 appareils sur le plan gratuit). Toute la famille peut diffuser depuis la même bibliothèque Mac sans abonnements cloud séparés.

## Dépannage

**Le Mac n'apparaît pas dans BiblioFuse après l'activation de Tailscale.** Utilisez la méthode de saisie manuelle de l'IP avec l'adresse IP Tailscale de votre Mac. La découverte automatique repose sur la diffusion mDNS, qui ne franchit pas les frontières réseau.

**Les pages se chargent lentement sur les données mobiles.** Compressez vos archives CBZ à l'aide de l'onglet Outils de BiblioFuse ou de l'[Outil Web BiblioFuse](/fr/webapp/) pour réduire la taille des pages. Les fichiers CBZ encodés en WebP à la qualité 82 sont généralement 75 à 88 % plus petits que les archives basées sur PNG.

**Le Mac s'est mis en veille.** Activez « Empêcher la mise en veille automatique » dans les Réglages système, ou utilisez la commande `caffeinate -i &` dans le Terminal pour le maintenir éveillé.

**La connexion Tailscale se coupe.** Tailscale se reconnecte automatiquement lorsque les conditions réseau changent. Si la connexion échoue, fermez et rouvrez BiblioFuse sur votre iPhone pour relancer la connexion.

## Foire aux questions

**Puis-je accéder à ma bibliothèque de BD à distance sans Tailscale ?**
Oui, mais les alternatives sont plus complexes ou moins privées. La redirection de ports sur votre routeur expose votre Mac directement à internet — un risque de sécurité. La synchronisation cloud (iCloud, Google Drive) nécessite d'abord de téléverser toute votre bibliothèque. Tailscale offre un accès distant chiffré sans configuration et sans exposer de ports.

**Tailscale est-il payant pour cet usage ?**
Le plan gratuit de Tailscale prend en charge jusqu'à 100 appareils sur un seul compte personnel, sans frais de stockage ni limites de bande passante. Pour une bibliothèque personnelle de BD partagée entre vos propres appareils, le plan gratuit est amplement suffisant.

**Quelle est la vitesse de diffusion des BD sur les données mobiles ?**
Avec des fichiers CBZ compressés (pages WebP), les pages individuelles font généralement entre 200 et 500 Ko. Sur une connexion 4G à 10 Mbps, chaque page se charge en moins d'une demi-seconde. Même sur un Wi-Fi d'hôtel plus lent à 2 Mbps, l'expérience de lecture reste fluide.

**BiblioFuse fonctionne-t-il aussi avec Tailscale sur iPad ?**
Oui. BiblioFuse prend en charge l'iPhone et l'iPad, et Tailscale est également disponible sur iPad. La configuration est identique — installez les deux applications, connectez-vous à Tailscale et connectez-vous à la Mac Home Library en utilisant l'adresse IP Tailscale.

**Ma collection de BD est-elle privée quand j'utilise Tailscale ?**
Oui. Tailscale utilise le chiffrement WireGuard pour tout le trafic entre les appareils. Vos fichiers sont transmis directement entre votre iPhone et votre Mac dans un tunnel chiffré. Les serveurs de Tailscale gèrent la coordination de connexion mais ne voient jamais le contenu de vos fichiers.

**Que se passe-t-il si mon Mac redémarre pendant mon absence ?**
Si Tailscale est configuré pour se lancer à l'ouverture de session et que Mac Home Library est configurée pour démarrer automatiquement dans BiblioFuse pour Mac, la connexion se rétablit automatiquement après le redémarrage. Configurez les deux applications pour qu'elles se lancent à l'ouverture de session afin d'assurer la continuité.
