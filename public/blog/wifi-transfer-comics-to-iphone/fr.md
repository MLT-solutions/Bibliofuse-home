# Comment transférer des comics sur iPhone sans iTunes ni câble

Votre bibliothèque de manga se trouve sur votre Mac. Deux cents fichiers CBZ, classés par série, chaque tome pesant entre 80 et 200 Mo. L'iPhone, c'est là où vous lisez vraiment — au lit, dans le train, pendant la pause déjeuner. Le problème, c'est de faire passer ces fichiers d'un appareil à l'autre.

L'e-mail est limité à 25 Mo. AirDrop fonctionne, mais vous devez envoyer les fichiers un par un et valider chaque transfert. iCloud Drive peut les synchroniser, mais charger 20 Go de comics puis attendre qu'ils redescendent n'est pas vraiment pratique. Le partage de fichiers via iTunes existe encore, mais il faut un câble et une patience que la plupart des gens ont abandonnée depuis longtemps.

[BiblioFuse](/fr/) résout ce problème avec le Transfert Wi-Fi — un serveur web local intégré qui vous permet de glisser une bibliothèque entière depuis n'importe quel navigateur sur votre Mac ou PC directement dans votre iPhone, sans câble, sans rien installer sur l'ordinateur et sans passer par le cloud. Ce guide vous accompagne à travers tout le processus.

## Ce que fait réellement le Transfert Wi-Fi

Le Transfert Wi-Fi exécute un petit serveur HTTP sur votre iPhone, visible uniquement sur votre réseau local. Quand vous visitez l'adresse fournie (quelque chose comme `http://192.168.1.x:8080`) dans n'importe quel navigateur, vous accédez à une interface de téléchargement par glisser-déposer. Vous faites glisser des fichiers ou des dossiers depuis votre bureau vers la fenêtre du navigateur, et [BiblioFuse](/fr/) les reçoit directement via Wi-Fi.

Le mot clé, c'est *directement*. Les fichiers passent de votre ordinateur à votre iPhone sans transiter par aucun service cloud. Rien n'est envoyé à un serveur tiers. Pas besoin d'être connecté à un quelconque compte. La seule condition : les deux appareils doivent être sur le même réseau Wi-Fi.

La vitesse de transfert dépend de votre réseau local, pas de votre connexion internet. Sur un routeur domestique classique, attendez-vous à 15–40 Mo/s. Un tome de manga de 150 Mo arrive en environ cinq secondes.

## Étape 1 — Installer BiblioFuse

Si ce n'est pas encore fait, installez [BiblioFuse](/fr/) depuis l'App Store. L'application est gratuite, sans compte ni connexion requise.

Une fois installée, elle crée deux dossiers dans l'application Fichiers d'iOS :
- **iCloud Drive → BiblioFuse** — stockage synchronisé, accessible sur tous vos appareils Apple
- **Sur mon iPhone → BiblioFuse** — stockage local uniquement, plus rapide et sans délai de synchronisation

Les fichiers transférés via le Transfert Wi-Fi arrivent par défaut dans le dossier de stockage local.

## Étape 2 — Activer le Transfert Wi-Fi sur l'iPhone

1. Ouvrez BiblioFuse
2. Appuyez sur **Réglages** (en bas à droite de l'écran de bibliothèque)
3. Sous **Import Wi-Fi**, activez l'option
4. Une URL locale apparaît : `http://192.168.x.x:8080`

Gardez BiblioFuse ouvert et l'écran allumé pendant le transfert — iOS suspend le serveur si l'application passe en arrière-plan.

## Étape 3 — Ouvrir l'URL sur l'ordinateur

Sur votre Mac ou PC, ouvrez n'importe quel navigateur — Safari, Chrome, Firefox, Edge — et saisissez l'URL affichée dans BiblioFuse. Vous verrez une page simple avec une zone de dépôt.

Rien à installer. Pas d'extension, pas d'application, pas de compte. La page est servie directement depuis votre iPhone.

## Étape 4 — Glisser vos comics

Faites glisser vos fichiers CBZ, CBR, ZIP, RAR ou EPUB depuis le Finder (ou l'Explorateur Windows) vers la zone de dépôt du navigateur. Vous pouvez glisser :

- Un seul fichier
- Plusieurs fichiers à la fois
- Un dossier entier de volumes

Lorsque vous glissez un dossier, BiblioFuse reçoit tous les fichiers qu'il contient en conservant la structure des dossiers. Si vous glissez un dossier `Berserk` contenant 40 tomes, ils arrivent tous organisés sous ce nom dans votre bibliothèque.

Un indicateur de progression affiche l'avancement de chaque fichier. Les gros lots — 10 Go de comics — peuvent tourner sans surveillance. Inutile de cliquer ou d'approuver les fichiers un par un.

## Étape 5 — Désactiver le Transfert Wi-Fi

Une fois le transfert terminé, retournez dans BiblioFuse et désactivez le Transfert Wi-Fi. C'est une mesure de sécurité — le serveur n'est accessible que sur votre réseau local, mais le désactiver une fois la session terminée évite que quelqu'un d'autre sur le réseau puisse y accéder.

Vos fichiers transférés apparaissent automatiquement dans la bibliothèque. Appuyez sur une couverture pour commencer à lire.

## Référence de vitesse de transfert

Ces chiffres sont approximatifs, basés sur un réseau domestique 802.11ac (Wi-Fi 5) moderne :

| Taille du fichier | Temps de transfert |
|-------------------|--------------------|
| 50 Mo (petit tome de manga) | ~2 secondes |
| 150 Mo (tome de manga typique) | ~5 secondes |
| 500 Mo (grand CBZ) | ~15 secondes |
| 10 Go (série complète) | ~5 minutes |

Les réseaux 802.11n plus anciens ou les systèmes mesh encombrés seront plus lents. Rapprochez l'iPhone du routeur si vous transférez un gros lot.

## Autres façons de mettre des comics sur l'iPhone

Le Transfert Wi-Fi est la méthode la plus rapide pour les grandes collections, mais ce n'est pas la seule.

**Partage depuis l'app Fichiers** — Si le comic est déjà dans iCloud Drive ou sur une clé USB connectée au Mac, appuyez longuement dessus dans l'app Fichiers et choisissez Partager → BiblioFuse. Idéal pour un ou deux fichiers.

**Synchronisation iCloud Drive** — Copiez les fichiers dans `iCloud Drive → BiblioFuse` sur votre Mac. Ils se synchroniseront automatiquement sur votre iPhone. La progression de lecture se synchronise aussi de cette façon — pratique si vous lisez sur plusieurs appareils. Inconvénient : il faut d'abord charger sur iCloud, ce qui peut être long pour de grandes collections.

**AirDrop** — Fonctionne pour les fichiers individuels. Appuyez sur l'icône AirDrop, choisissez votre iPhone, et BiblioFuse proposera d'ouvrir le fichier. Pas pratique pour des séries avec de nombreux tomes.

**Tailscale / accès à distance** — Si vous n'êtes pas sur le même réseau que votre Mac, vous pouvez utiliser Tailscale pour créer un réseau virtuel privé entre vos appareils et utiliser quand même le Transfert Wi-Fi ou la synchronisation iCloud à distance. C'est une configuration avancée, mais elle permet d'accéder à votre bibliothèque depuis n'importe où.

## Dépannage

**Impossible d'accéder à l'URL depuis le navigateur.**
Assurez-vous que les deux appareils sont sur le même réseau Wi-Fi. Certains routeurs isolent les appareils entre eux (« isolement client » ou « isolement AP ») — vérifiez les paramètres de votre routeur si les appareils ne se voient pas.

**Les fichiers ont été transférés mais n'apparaissent pas dans la bibliothèque.**
Faites glisser vers le bas dans la bibliothèque pour actualiser. Vérifiez le dossier **Sur mon iPhone → BiblioFuse** dans l'app Fichiers pour confirmer que les fichiers sont bien arrivés. Les fichiers qui se retrouvent en dehors du dossier BiblioFuse ne seront pas indexés.

**Le transfert s'est arrêté en cours de route.**
L'écran s'est probablement verrouillé et iOS a suspendu l'application. Retournez dans BiblioFuse, vérifiez que le Transfert Wi-Fi est toujours actif, et relancez l'envoi depuis le navigateur. Les fichiers déjà téléchargés sont en sécurité.

**Les fichiers CBR indiquent « format non supporté ».**
Certaines très anciennes archives CBR utilisent RAR5, qui n'est pas universellement pris en charge. Repackagez-les en CBZ : extrayez le RAR, sélectionnez toutes les images, compressez en ZIP et renommez `.zip` en `.cbz`. L'onglet Outils de BiblioFuse peut également aider à convertir les formats directement sur l'appareil.

## Que faire ensuite

Une fois la bibliothèque sur l'iPhone, [BiblioFuse](/fr/) propose plusieurs outils pour la gérer plus facilement. L'onglet Outils permet de compresser des fichiers CBZ directement sur l'appareil — utile si un tome de 200 Mo peut être réduit à 40 Mo sans perte de qualité visible. La fonctionnalité Bibliothèque Mac va encore plus loin : au lieu de transférer les fichiers sur l'iPhone, elle permet de diffuser en temps réel toute votre bibliothèque Mac par Wi-Fi, sans rien copier.

Voilà le tableau complet — un transfert Wi-Fi qui prend quelques minutes au lieu de l'heure que nécessitait autrefois une synchronisation iTunes.
