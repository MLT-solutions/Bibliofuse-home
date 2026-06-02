# Comment synchroniser sa progression de lecture sans compte cloud

Vous êtes en plein milieu d'une série manga sur votre iPhone quand vous prenez votre iPad et vous retrouvez à la première page. La synchronisation cloud résout ce problème — mais seulement si vous êtes prêt à vous connecter à un service de synchronisation, à confier vos métadonnées de bibliothèque à un tiers, et à accepter qu'une coupure de connexion puisse laisser votre progression en retard.

Et si vous ne le souhaitez pas ? Si vous voyagez sans connexion stable, si vous ne faites pas confiance aux services cloud pour vos données de lecture, ou si vous préférez simplement tout garder en local ?

[BiblioFuse](https://bibliofuse.com/fr/) vous offre plusieurs façons de maintenir une progression de lecture cohérente entre vos appareils sans dépendre d'un quelconque compte cloud. Voici comment fonctionne chaque option.

## Pourquoi la synchronisation de la progression est plus complexe qu'il n'y paraît

À première vue, « synchroniser la progression de lecture » semble trivial — il suffit de sauvegarder un chiffre. Mais une bibliothèque de comics peut comporter des dizaines ou des centaines de volumes, chacun avec son propre nombre de pages et sa dernière page lue. La progression de lecture est un **état par livre et par appareil** qui peut changer simultanément sur plusieurs appareils. Sans arbitre central (un serveur cloud), deux appareils hors connexion peuvent générer des mises à jour contradictoires.

Toute stratégie de synchronisation purement locale doit accepter un compromis : imposer un modèle strict principal/réplique, accepter que la dernière progression écrite l'emporte, ou ne synchroniser que lorsque les appareils sont sur le même réseau.

La synchronisation iCloud de BiblioFuse gère cet arbitrage automatiquement. Mais si iCloud n'est pas envisageable, les approches suivantes vous donnent le contrôle à différents niveaux d'automatisation.

## Option 1 : Synchronisation de bibliothèque en Wi-Fi depuis le Mac (recommandée pour la maison)

Si vous avez un Mac avec la fonctionnalité Bibliothèque Maison de BiblioFuse activée, votre iPhone peut s'y connecter en Wi-Fi. Le Mac fait office de référence unique pour les fichiers comme pour la progression.

**Comment ça fonctionne :**

1. Sur votre Mac, ouvrez BiblioFuse et activez le serveur de bibliothèque maison dans Réglages → Bibliothèque Maison.
2. Sur votre iPhone, appuyez sur l'icône réseau dans l'onglet bibliothèque et sélectionnez votre Mac.
3. Votre iPhone affiche la bibliothèque du Mac et lit les livres directement depuis le stockage du Mac — sans copier les fichiers sur l'iPhone.

La progression est enregistrée côté Mac. Quel que soit l'appareil qui lit depuis la bibliothèque du Mac, il y enregistre la progression. Quand vous rouvrez l'iPhone et vous reconnectez au Mac, vous reprenez exactement là où la session Mac s'était arrêtée.

**Limites :** Nécessite que les deux appareils soient sur le même réseau Wi-Fi. Idéal pour la maison ; pas adapté à la lecture en déplacement sauf si vous configurez un accès distant via VPN ou Tailscale.

## Option 2 : Export et import manuel de la progression

BiblioFuse vous permet d'exporter votre progression de lecture sous forme de fichier JSON et de l'importer sur un autre appareil. C'est l'option la plus portable et la plus adaptée au hors connexion — aucun réseau requis.

**Exporter depuis l'Appareil A :**

1. Allez dans Réglages → Bibliothèque → Exporter la progression.
2. BiblioFuse enregistre un fichier `.json` contenant la dernière page lue pour chaque livre de votre bibliothèque.
3. Partagez ce fichier via AirDrop, Fichiers ou tout autre moyen — sans connexion internet.

**Importer sur l'Appareil B :**

1. Recevez le fichier `.json` et ouvrez-le avec BiblioFuse, ou allez dans Réglages → Bibliothèque → Importer la progression.
2. BiblioFuse fusionne la progression importée avec la progression locale existante, en retenant le numéro de page le plus élevé pour chaque livre (pour ne jamais reculer).

Cette approche fonctionne entièrement hors connexion. AirDrop rend le transfert quasi instantané quand les appareils sont proches. La seule étape manuelle est de penser à exporter avant de changer d'appareil — une habitude qui se forme en quelques jours.

## Option 3 : Synchronisation par fichiers avec un disque réseau local ou USB

Si vous gérez votre bibliothèque via l'app Fichiers, la progression peut suivre le fichier du livre. BiblioFuse enregistre la progression par nom de fichier plutôt que par identifiant cloud. Cela signifie :

- Si vous copiez un fichier de l'Appareil A vers l'Appareil B avec le même nom de fichier, BiblioFuse sur l'Appareil B ne montrera aucune progression (le fichier est nouveau pour cet appareil).
- Mais si vous copiez à la fois le fichier du livre **et** un export de progression (Option 2 ci-dessus) vers l'Appareil B, puis importez le fichier de progression, vous reprendrez à la bonne page.

Pour les lecteurs qui gèrent leur bibliothèque sur un NAS ou un partage SMB, cette approche est propre : les livres restent sur le disque, les appareils se connectent quand ils sont sur le réseau local, et la progression est suivie indépendamment sur chaque appareil jusqu'à ce que vous synchronisiez manuellement le fichier de progression.

## Option 4 : iCloud Drive sans compte de synchronisation cloud

Cela mérite une clarification car cela prête souvent à confusion : **iCloud Drive n'est pas la même chose que la synchronisation iCloud de BiblioFuse**.

La synchronisation iCloud de BiblioFuse utilise `NSUbiquitousKeyValueStore` et CloudKit pour synchroniser les métadonnées de progression de lecture. Cela nécessite un compte iCloud actif.

En revanche, vous pouvez stocker vos **fichiers de livres** dans iCloud Drive (l'app Fichiers) sans activer la synchronisation de progression iCloud de BiblioFuse. Dans cette configuration :

- Les fichiers de livres sont accessibles depuis tout appareil connecté au même identifiant Apple
- La progression de lecture est suivie localement par appareil et n'est **pas** synchronisée
- Vous devez quand même utiliser les Options 1, 2 ou 3 ci-dessus pour synchroniser la progression si vous la voulez cohérente

Si vous utilisez iCloud Drive uniquement comme stockage de fichiers et ne souhaitez pas synchroniser la progression, c'est une configuration claire et simple.

## Option 5 : Accepter la progression par appareil et utiliser les signets

Tous les lecteurs n'ont pas besoin d'une synchronisation parfaite. Si vous lisez principalement un livre à la fois et ne changez pas d'appareil en cours de volume, une progression par appareil convient très bien.

BiblioFuse vous permet de placer des signets à n'importe quelle page. Un signet est une position sauvegardée avec un nom — vous pouvez en créer un avant de changer d'appareil et y accéder immédiatement sur l'autre appareil. Un seul geste pour le créer, un seul pour y sauter : pour les changements d'appareils occasionnels, c'est plus rapide qu'une synchronisation complète.

## Choisir la bonne option

| Situation | Meilleure option |
|-----------|-----------------|
| Lecteur à la maison avec un Mac | Bibliothèque Maison en Wi-Fi (Option 1) |
| En déplacement, hors connexion, deux appareils iOS | Export/import manuel via AirDrop (Option 2) |
| Bibliothèque sur NAS ou disque partagé | Sync par fichiers + export de progression (Option 3) |
| Changement d'appareil occasionnel, un livre à la fois | Signets (Option 5) |
| Apple ID mais pas de cloud tiers | iCloud Drive pour les fichiers + sync manuelle de la progression |

## L'aspect vie privée

[BiblioFuse](https://bibliofuse.com/fr/) stocke la progression de lecture localement sur votre appareil. Lorsque la synchronisation iCloud est désactivée, aucune donnée de lecture ne quitte votre appareil. Pour les lecteurs qui préfèrent ne pas voir leurs habitudes de lecture stockées dans un service externe — que ce soit pour des raisons de confidentialité ou simplement par choix — le fonctionnement en local uniquement est un mode à part entière, pas un pis-aller.

Les options ci-dessus ne sont pas des contournements pour pallier une fonctionnalité manquante. C'est la manière prévue d'utiliser BiblioFuse quand la synchronisation cloud n'est pas adaptée à votre situation.

## Pour commencer

1. [Téléchargez BiblioFuse](https://bibliofuse.com/fr/) depuis l'App Store.
2. Importez vos fichiers de comics ou d'ebooks via l'app Fichiers, le transfert Wi-Fi ou la Bibliothèque Maison du Mac.
3. Choisissez la stratégie de synchronisation qui correspond à vos habitudes de lecture — ou combinez-les. Les Options 2 et 5 fonctionnent avec n'importe quelle autre approche.

Vous n'avez pas à sacrifier la commodité en renonçant aux comptes cloud. Une petite habitude — un rapide export AirDrop avant de changer d'appareil — suffit à garder votre bibliothèque à jour sans confier vos données de lecture à quiconque.
