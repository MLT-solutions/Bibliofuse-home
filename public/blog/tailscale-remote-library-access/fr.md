# Accédez à votre bibliothèque de comics à distance avec BiblioFuse et Tailscale

Vous êtes en déplacement professionnel, dans une chambre d'hôtel à 22h sans rien à lire. Toute votre collection de comics — 800 volumes parfaitement organisés — est sur un disque externe connecté à votre Mac à la maison. Normalement, vous devriez attendre votre retour. Plus maintenant.

La fonction de streaming de bibliothèque domestique de BiblioFuse permet à votre iPhone de se connecter à votre Mac comme s'ils étaient sur le même réseau Wi-Fi, même si vous êtes à l'autre bout du monde. Le pont qui rend cela possible est Tailscale — un réseau VPN maillé sans configuration, qui fonctionne silencieusement en arrière-plan et ne nécessite ni redirection de port, ni IP statique, ni configuration du routeur.

## Pourquoi "uploadez sur le cloud" n'est pas la réponse

La solution évidente est de synchroniser votre bibliothèque avec iCloud, Dropbox ou Google Drive. Cela fonctionne pour les petites collections. À grande échelle, ça s'effondre :

- Une bibliothèque de comics d'1 To prend des semaines à uploader sur une connexion résidentielle.
- Le stockage cloud à cette échelle coûte 10–30 € par mois indéfiniment.
- Vous perdez le contrôle : chaque page de chaque comic est sur les serveurs de quelqu'un d'autre.

L'approche Tailscale ne uploade rien. Votre bibliothèque reste sur votre Mac. Votre iPhone récupère les pages à la demande via un tunnel chiffré. Vous ne payez rien pour le stockage et vos fichiers ne quittent jamais votre contrôle.

## Comment fonctionne le streaming domestique de BiblioFuse

BiblioFuse pour macOS inclut un serveur HTTP intégré auquel l'app iPhone peut se connecter. Lorsque les deux appareils sont sur le même réseau Wi-Fi, votre iPhone peut parcourir votre bibliothèque Mac, diffuser des pages pendant la lecture et synchroniser la progression — sans copier aucun fichier.

Tailscale étend ce réseau local où que vous soyez, rendant l'IP privée de votre Mac accessible depuis n'importe quel appareil exécutant Tailscale sous votre compte, de façon sécurisée avec chiffrement bout en bout.

## Ce que fait Tailscale

Tailscale est construit sur WireGuard, un protocole VPN moderne reconnu pour sa rapidité et sa robustesse cryptographique. Il crée un maillage pair-à-pair : chaque appareil se connecte directement aux autres appareils de votre compte, sans router le trafic via un serveur central.

La configuration prend environ 5 minutes et ne nécessite aucun accès au routeur.

## Configuration étape par étape

### Sur votre Mac

1. Téléchargez Tailscale depuis [tailscale.com](https://tailscale.com) ou le Mac App Store.
2. Connectez-vous avec Google, GitHub, Microsoft ou créez un compte Tailscale gratuit.
3. Notez l'adresse IP Tailscale de votre Mac (ex. `100.x.x.x`).
4. Ouvrez BiblioFuse sur votre Mac et allez dans **Préférences → Serveur de bibliothèque domestique**.
5. Activez le serveur. Le port par défaut est `8686`.

### Sur votre iPhone

1. Installez Tailscale depuis l'App Store.
2. Connectez-vous au même compte Tailscale que sur votre Mac.
3. Activez le basculement VPN Tailscale.
4. Ouvrez [BiblioFuse](https://bibliofuse.com/fr/) sur votre iPhone et allez dans **Bibliothèque → Se connecter au Mac**.
5. Entrez l'adresse IP Tailscale de votre Mac et le port `8686`.
6. Appuyez sur Connecter. Votre bibliothèque Mac apparaît immédiatement.

## Performance et bande passante

Tailscale établit des connexions directes pair-à-pair lorsque c'est possible. Sur une connexion Wi-Fi d'hôtel typique ou sur données mobiles, le streaming de pages de comics fonctionne confortablement. BiblioFuse n'envoie que la page courante et précharge les suivantes.

## Confidentialité et sécurité

La connexion Tailscale est chiffrée bout en bout avec WireGuard. Personne d'autre ne peut accéder à votre serveur BiblioFuse. Vos fichiers ne passent jamais par un serveur tiers.

## Questions fréquentes

**Mon Mac doit-il rester allumé ?**
Oui. BiblioFuse fonctionne tant que votre Mac est actif. Désactivez la mise en veille dans Réglages Système → Batterie.

**Cela fonctionne-t-il avec les données mobiles ?**
Oui. Tailscale fonctionne sur toute connexion Internet. Le streaming de comics consomme environ 1–3 Mo par page.

**Puis-je l'utiliser avec plusieurs Macs ?**
Oui. Ajoutez chaque Mac à votre compte Tailscale et sauvegardez chacun comme connexion dans BiblioFuse.

**Tailscale est-il payant ?**
Il dispose d'un niveau gratuit supportant jusqu'à 3 utilisateurs et 100 appareils — largement suffisant pour un usage personnel.

## Pour commencer

Si vous n'avez pas encore [BiblioFuse](https://bibliofuse.com/fr/), téléchargez-le depuis l'App Store pour iPhone et iPad, et depuis le Mac App Store pour macOS. Tailscale est gratuit sur [tailscale.com](https://tailscale.com).

La combinaison des deux fait que votre bibliothèque domestique vous accompagne partout — sans uploader un seul fichier dans le cloud.
