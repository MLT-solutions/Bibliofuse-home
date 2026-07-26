# Komga vs Kavita vs BiblioFuse : les meilleures alternatives de lecteur CBZ, CBR et EPUB en 2026

Si vous comparez des serveurs de BD et de livres auto-hébergés, les deux noms qui reviennent le plus souvent sont [Komga](https://komga.org/) et [Kavita](https://kavitareader.com/) — tous deux gratuits, open source, et vraiment bons pour lire des fichiers CBZ, CBR et (pour Kavita) EPUB depuis votre propre stockage. [Calibre-Web](https://github.com/janeczku/calibre-web) et [Ubooquity](https://vaemendis.net/ubooquity/) sont deux autres options anciennes qui méritent d'être connues. [BiblioFuse](/fr/) adopte une approche différente : au lieu d'un serveur que vous assemblez vous-même plus une application cliente tierce, il propose une famille d'applications connectées — téléphone, tablette, Mac, PC, Apple Vision Pro, Apple TV et Android TV — développée par une seule équipe, avec un serveur auto-hébergé gratuit pour qui le souhaite aussi.

Aucune de ces solutions n'est objectivement « la meilleure » pour tout le monde. Ce guide compare ce que chacune fait bien, où elle montre ses limites, et laquelle correspond à votre configuration.

## Pourquoi ce comparatif compte maintenant

Les collections numériques de BD et de livres ont dépassé les jardins clos façon Kindle. Les lecteurs numérisent leurs propres collections physiques, téléchargent depuis des communautés de scanlation et de traduction amateur, ou préfèrent simplement posséder leurs fichiers plutôt que louer un accès. Cette collection vit généralement sur un NAS, un vieux PC ou un dossier sur un Mac — et la question devient : qu'est-ce qui la lit réellement, sur chaque appareil que vous possédez, sans que vous deveniez administrateur système à temps partiel ?

Cette question est devenue plus difficile à résoudre, pas plus facile. Komga et Kavita sont devenus des serveurs vraiment performants. Mais côté client — l'application réelle sur votre téléphone, votre tablette ou votre télé — il s'agit généralement d'un projet séparé, d'un développeur différent et indépendant, avec son propre rythme de mises à jour, ses propres bugs, et aucune garantie qu'il sera encore maintenu l'année prochaine.

## Ce qu'il faut vraiment regarder

Avant de comparer les produits, il est utile de séparer les deux fonctions qu'assure un système de BD/ebooks :

1. **L'hébergement** — où vivent vos fichiers et comment un serveur les organise et les diffuse.
2. **La lecture** — l'application ou la page web que vous utilisez réellement chaque jour, sur chaque appareil.

Certains outils ne font bien que l'une des deux. Gardez cela en tête en lisant les comparatifs ci-dessous.

## Les alternatives comparées

| | [Komga](https://komga.org/) | [Kavita](https://kavitareader.com/) | [Calibre-Web](https://github.com/janeczku/calibre-web) | [Ubooquity](https://vaemendis.net/ubooquity/) | [BiblioFuse](/fr/) |
|---|---|---|---|---|---|
| Formats | CBZ, CBR, PDF | CBZ, CBR, CB7, CBT, ZIP, RAR, 7zip, PDF, EPUB | EPUB (via Calibre) | EPUB, CBZ, CBR, PDF | EPUB, PDF, CBZ, CBR, RAR, ZIP, TXT |
| Application mobile officielle | Non — tiers uniquement | Non — tiers uniquement | Non — navigateur uniquement | Non — navigateur/OPDS uniquement | Oui — iPhone, iPad, Mac, Vision Pro, Apple TV, Android, Android TV, Windows |
| Gestion des dossiers | Un dossier par série, strict | Flexible, assisté par métadonnées | Import de bibliothèque Calibre | Analyse à plat des dossiers | Lit vos dossiers existants tels quels, sans réorganisation |
| Outil de compression intégré | Non | Non | Non | Non | Oui — redimensionnement, réencodage WebP/JPG, fusion |
| Diffusion au lieu du stockage local | Via clients OPDS uniquement | Via clients OPDS uniquement | Non | Via clients OPDS uniquement | Oui, natif (Wi-Fi local, Tailscale, iCloud) |
| Installation sur Synology | Container Manager / Docker | Container Manager / Docker | Docker | Docker ou Java | Application native Package Center avec sélecteur de dossier |
| Langues de l'interface | Contributions communautaires | 13+ via Weblate communautaire | Contributions communautaires | Limité | 11, natif |
| Coût | Gratuit, open source | Gratuit, open source | Gratuit, open source | Gratuit | Auto-hébergement gratuit ; l'achat de l'app débloque les fonctions Pro |

## Komga : la meilleure option pour une bibliothèque pure BD et manga

Komga est un spécialiste de la BD et du manga. Il ne cherche pas à être un lecteur d'ebooks — pas de support EPUB — et cette spécialisation se voit dans sa finition : une API REST solide, le support OPDS v2, et une intégration étroite avec Tachiyomi et d'autres apps de suivi de manga. Son extraction de métadonnées est vraiment bonne si vous gérez une grande collection manga bien organisée.

La contrepartie, c'est la structure. Komga attend un dossier par série. Si votre bibliothèque ne suit pas déjà cette convention, vous passerez du temps à réorganiser vos fichiers avant que Komga ne soit satisfait.

**Idéal pour :** les bibliothèques centrées sur le manga, les utilisateurs de Tachiyomi, quiconque est à l'aise avec Docker et prêt à réorganiser ses fichiers selon la convention de dossiers de Komga.

**Attention à :** pas de support des ebooks (EPUB), pas d'application officielle — vous devrez la coupler à un client tiers comme Komic, KMReader ou Panels, chacun maintenu indépendamment de Komga.

## Kavita : la meilleure option polyvalente pour BD et ebooks ensemble

Kavita est le serveur le plus complet de cette liste — BD, manga et ebooks (EPUB, PDF) dans une seule bibliothèque, avec une analyse de dossiers plus tolérante que Komga et des extras utiles comme les métadonnées AniList et les couleurs d'accentuation par couverture. C'est un choix vraiment solide si vous voulez un seul serveur pour tout et que Docker ne vous fait pas peur.

Ses 13+ langues traduites par la communauté semblent impressionnantes, mais la couverture dépend de traducteurs bénévoles via Weblate — certaines langues sont plus complètes que d'autres, et il n'y a aucun engagement propre à maintenir chaque langue à jour.

**Idéal pour :** les bibliothèques mixtes BD + ebooks, ceux qui veulent le serveur auto-hébergé le plus complet, les utilisateurs qui ne sont pas gênés par une interface partiellement traduite par la communauté.

**Attention à :** même histoire que Komga côté client — pas d'application officielle propre, donc vous la coupler à un lecteur tiers comme Panels ou Komic.

## Calibre-Web : la meilleure option si vous utilisez déjà Calibre

Calibre-Web est une interface web fine et propre pour une bibliothèque Calibre existante. Si vous avez passé des années à organiser vos livres dans Calibre et voulez simplement un accès via navigateur, il remplit bien ce rôle.

Il n'est pas conçu pour la BD comme le sont Komga et Kavita, et il n'a aucune application mobile ou TV dédiée — c'est une expérience navigateur, point final.

**Idéal pour :** les utilisateurs existants de Calibre qui veulent surtout un accès distant/mobile via navigateur à une bibliothèque d'ebooks.

**Attention à :** la BD est un cas d'usage secondaire au mieux ; aucune application native sur aucune plateforme.

## Ubooquity : la meilleure option légère et sans fioritures

Ubooquity existe depuis longtemps et reste fidèle à sa promesse : un serveur petit et simple, basé sur Java, avec un flux OPDS intégré. Il tourne sur presque n'importe quoi, y compris du matériel NAS ancien ou peu puissant qui pourrait peiner avec Komga ou Kavita.

C'est aussi la plus basique des quatre alternatives présentées ici — moins de fonctionnalités, une interface datée, et, comme les autres, pas d'application propre.

**Idéal pour :** le matériel peu puissant, quiconque veut l'empreinte la plus légère possible et n'a pas besoin d'extras modernes.

**Attention à :** le moins activement développé du groupe ; toujours navigateur/OPDS uniquement.

## BiblioFuse : le meilleur choix pour un écosystème mono-éditeur sans configuration

BiblioFuse part d'un postulat différent : la plupart des gens ne veulent pas gérer un serveur *et* chercher séparément un client tiers susceptible d'être abandonné. L'application et l'hébergeur sont donc développés par la même équipe, et tous deux sont conçus pour qu'une personne non technique puisse les configurer.

Concrètement, cela donne :

- **Gestion par dossier ou étiquette, pas par métadonnées imposées.** BiblioFuse n'exige pas d'extraction de métadonnées pour être utile, et n'impose pas la règle stricte d'un dossier par série de Komga.
- **Ne réorganise jamais vos fichiers.** Il lit votre bibliothèque exactement comme vous l'avez déjà organisée — pas d'étape d'import, pas de convention de dossiers à respecter.
- **Conçu pour économiser le stockage de l'appareil, pas seulement pour servir des fichiers.** Un outil intégré de compression/redimensionnement/fusion (EPUB, PDF, CBZ, CBR, RAR, ZIP — redimensionnement à une résolution cible, réencodage en WebP ou JPG) et la possibilité de diffuser une bibliothèque depuis un hôte au lieu de la télécharger localement. Aucune des quatre alternatives ci-dessus n'a d'outil de compression intégré.
- **Une configuration qui ne demande pas de taper une adresse IP.** Sur Synology, l'application native Package Center vous donne un sélecteur de dossier au lieu d'un chemin de conteneur à saisir. Côté client, les applications découvrent automatiquement un hôte via le Wi-Fi local, ou se connectent automatiquement via iCloud + Tailscale sur les appareils Apple — sans saisir manuellement une URL de serveur ou un point d'accès OPDS.
- **Un écosystème, un seul éditeur.** iPhone, iPad, Mac, Apple Vision Pro, Apple TV, téléphone Android, tablette Android, Android TV et PC Windows font tous tourner des applications développées et maintenues par la même équipe — pas un serveur auto-hébergé bricolé avec le client tiers encore maintenu au moment T.
- **11 langues d'interface natives** (anglais, espagnol, français, néerlandais, portugais, russe, chinois, japonais, coréen, indonésien et malais), pas une couverture dépendante de la communauté.
- **La progression de lecture vous suit partout** — téléphone, tablette, Mac, PC, TV ou casque — parce que c'est un seul produit, pas des applications indépendantes qui se synchronisent via OPDS.

Pour être honnête sur ce où BiblioFuse n'est *pas* en tête : Komga et Kavita ont des écosystèmes d'extraction de métadonnées plus matures pour les grandes bibliothèques manga bien organisées, et Kavita lit quelques formats d'archive de niche (7zip, CBT) que BiblioFuse ne prend pas en charge. Le lecteur navigateur gratuit de BiblioFuse pour Docker/Synology est aussi plus basique que ses applications natives — pas encore de support PDF, pas de synthèse vocale ni de peek zoom.

**Idéal pour :** quiconque veut une configuration fonctionnelle en quelques minutes plutôt qu'en un après-midi, les foyers avec un mélange d'appareils Apple, Android et Windows, quiconque veut que sa structure de dossiers existante fonctionne telle quelle, et quiconque lit spécifiquement sur Apple TV, Android TV ou Vision Pro.

**Attention à :** une extraction de métadonnées moins mature que Komga/Kavita pour les grandes bibliothèques manga organisées ; le lecteur navigateur gratuit sur Docker/Synology ne lit pas encore le PDF.

## Que choisir ?

- **Collection manga pure, vous voulez l'intégration Tachiyomi :** Komga.
- **Vous voulez un seul serveur pour BD et ebooks ensemble, Docker ne vous dérange pas :** Kavita.
- **Vous avez déjà investi dans une bibliothèque Calibre :** Calibre-Web.
- **Matériel ancien ou peu puissant, vous voulez l'option la plus légère :** Ubooquity.
- **Vous voulez que ça fonctionne simplement sur des appareils Apple, Android et Windows — y compris Vision Pro, Apple TV ou Android TV — sans devenir administrateur système :** [BiblioFuse](/fr/comicreader/).

## Questions fréquentes

**Komga a-t-il une application iPhone officielle ?**
Non. Komga n'a aucune application mobile propre. Les utilisateurs d'iPhone se connectent via un client tiers comme Komic, KMReader ou Panels, chacun développé et maintenu indépendamment du projet Komga.

**Kavita est-il gratuit ?**
Oui, Kavita est gratuit et open source. Comme Komga, vous aurez toujours besoin d'une application tierce séparée (ou d'un client navigateur/OPDS) pour lire sur mobile ou TV, car Kavita lui-même n'en propose pas.

**Quelle est la meilleure alternative gratuite et auto-hébergée à Komga ?**
Kavita est l'alternative gratuite la plus proche si vous voulez aussi le support EPUB/ebook dans le même serveur. L'hébergement Docker et Synology de BiblioFuse est également gratuit, la différence étant une application propre assortie sur chaque appareil au lieu d'un client tiers séparé.

**L'une de ces solutions peut-elle lire directement un partage SMB ou NAS sans réorganiser les fichiers ?**
L'analyse de Kavita est la plus tolérante des options open source, mais Komga attend toujours un dossier par série. BiblioFuse lit votre structure de dossiers existante telle quelle sur n'importe laquelle de ces solutions, sans étape d'import ni de réorganisation, et la configuration Synology utilise un sélecteur de dossier graphique plutôt qu'un chemin à saisir.

**Ai-je besoin de Docker pour auto-héberger l'une de ces solutions ?**
Komga, Kavita, Calibre-Web et Ubooquity se déploient généralement via Docker (Ubooquity peut aussi tourner sur toute machine avec Java). L'hébergement Docker et Package Center Synology de BiblioFuse couvre le même usage d'auto-hébergement, le paquet Synology étant spécifiquement conçu pour éviter Docker ou la configuration en ligne de commande.

**BiblioFuse fonctionne-t-il sur Apple TV ou Android TV ?**
Oui — BiblioFuse a des applications natives pour les deux, diffusant depuis un hôte Mac, PC, Docker ou Synology. Aucun de Komga, Kavita, Calibre-Web ou Ubooquity n'a d'application TV officielle sur l'une ou l'autre plateforme.

## En résumé

Komga et Kavita sont d'excellents serveurs matures — choisissez-en un si vous êtes à l'aise avec Docker et prêt à le coupler à un client mobile séparé. Si vous préférez une seule famille d'applications qui fonctionne simplement sur tous vos appareils, d'un iPhone à un Vision Pro en passant par une Android TV, avec votre structure de dossiers existante conservée exactement telle quelle, [essayez BiblioFuse](/fr/comicreader/) — c'est gratuit à auto-héberger, et les [applications de lecture](/fr/) sont gratuites à utiliser.
