# Comment Convertir un Fichier CBR en CBZ en Ligne : Gratuit, Sans Logiciel

Vous avez un dossier rempli de fichiers CBR — des bandes dessinées au format d'archive RAR — et un lecteur qui n'ouvre que le CBZ. Ou vous archivez votre collection et souhaitez un format ouvert et cohérent. La solution semble simple : renommer l'extension de `.cbr` en `.cbz`. Mais ça ne fonctionne pas.

Les fichiers CBR sont des archives RAR. Les fichiers CBZ sont des archives ZIP. Ils utilisent des formats de compression différents sous le capot — vous ne pouvez pas simplement renommer l'extension. Vous devez extraire les images du RAR et les recompresser au format ZIP. [Le convertisseur en ligne BiblioFuse](https://bibliofuse.com/fr/webapp/) fait tout cela dans votre navigateur, sans qu'aucun fichier ne soit envoyé sur un serveur.

## CBR vs CBZ : Quelle Est la Vraie Différence ?

CBR et CBZ sont tous deux des formats d'archives de bandes dessinées. Tous deux contiennent une séquence de fichiers image (généralement JPG ou PNG), que le lecteur affiche dans l'ordre pour simuler la lecture d'une BD.

La différence réside dans la compression sous-jacente :

| Format | Type d'archive | Standard ouvert ? |
|--------|---------------|-----------------|
| CBZ | ZIP | Oui |
| CBR | RAR | Non (propriétaire) |

RAR est un format propriétaire développé par Eugene Roshal. L'ouverture de fichiers RAR nécessite soit le logiciel officiel WinRAR, soit une bibliothèque qui implémente la spécification RAR — et cette bibliothèque doit être explicitement incluse dans chaque lecteur. De nombreux lecteurs modernes, y compris les outils basés sur navigateur, ne supportent que le CBZ basé sur ZIP car la spécification ZIP est ouverte et largement implémentée.

Le CBZ est devenu le standard de facto pour les BD numériques en partie parce que ZIP est libre de droits et multiplateforme. Chaque système d'exploitation peut ouvrir un fichier ZIP sans logiciel tiers. Si vous archivez une collection sur le long terme, CBZ est le choix le plus sûr.

## Comment Fonctionne la Conversion

Convertir CBR en CBZ implique trois étapes :

1. Extraire les images du CBR (archive RAR)
2. Mettre ces mêmes images dans une nouvelle archive ZIP
3. Renommer l'extension `.zip` en `.cbz`

L'outil en ligne BiblioFuse effectue ces trois étapes dans votre navigateur grâce à WebAssembly. Vos fichiers ne sont jamais envoyés — l'extraction, la recompression et le téléchargement se produisent localement sur votre appareil.

## Étape par Étape : Convertir CBR en CBZ en Ligne

1. Allez sur [bibliofuse.com/fr/webapp/](https://bibliofuse.com/fr/webapp/)
2. Ouvrez l'outil **Convertir** dans la barre d'outils.
3. Cliquez sur **Sélectionner des fichiers** ou faites glisser vos fichiers `.cbr` dans la zone de dépôt.
4. L'outil extrait les images, crée une nouvelle archive ZIP et télécharge le fichier `.cbz` automatiquement.

Pour la conversion par lots — plusieurs fichiers CBR à la fois — sélectionnez tous vos fichiers dans le sélecteur de fichiers. Chaque fichier est traité et téléchargé séparément. Il n'y a pas de limite de file imposée par l'outil, bien que les très grands fichiers (400+ Mo) puissent prendre plus de temps selon la puissance de traitement de votre appareil.

## Pourquoi la Conversion dans le Navigateur Est Privée

La conversion s'exécute entièrement dans votre navigateur via WebAssembly (WASM). C'est la même technologie qui permet aux jeux et aux éditeurs vidéo de fonctionner dans un navigateur sans plugin — un travail gourmand en calcul exécuté nativement dans le sandbox du navigateur.

Lorsque vous utilisez l'[outil web BiblioFuse](https://bibliofuse.com/fr/webapp/) :

- Votre fichier CBR est lu dans la mémoire du navigateur
- Les images sont extraites en mémoire
- Un nouveau fichier ZIP est construit en mémoire
- Le ZIP est téléchargé sur votre appareil

À aucun moment des données ne quittent votre machine. Il n'y a pas d'appels au serveur pendant la conversion. Vous pouvez le vérifier en ouvrant l'inspecteur réseau de votre navigateur (F12 → Réseau) : les seules requêtes sont le chargement initial de la page. Aucun envoi n'apparaît.

C'est important si votre collection de BD comprend du contenu sous licence, des scans personnels, ou tout ce que vous préférez ne pas envoyer sur un serveur tiers.

## Convertir des Fichiers CBR sur iPhone ou iPad

L'outil web BiblioFuse fonctionne aussi sur les navigateurs mobiles. Allez sur [bibliofuse.com/fr/webapp/](https://bibliofuse.com/fr/webapp/) dans Safari ou Chrome sur iPhone ou iPad.

Sur iOS, appuyez sur **Sélectionner des fichiers** et naviguez jusqu'à vos fichiers CBR dans l'application Fichiers, iCloud Drive, ou un fournisseur de stockage cloud connecté. Les fichiers CBZ téléchargés vont dans votre dossier Téléchargements, depuis lequel vous pouvez les partager directement dans [BiblioFuse](https://bibliofuse.com/fr/) pour la lecture.

## Après la Conversion : Lire les Fichiers CBZ dans BiblioFuse

BiblioFuse sur iPhone lit les fichiers CBZ nativement — aucune conversion supplémentaire n'est nécessaire. Pour lire vos fichiers convertis :

1. Convertissez CBR en CBZ avec l'outil web sur votre Mac ou iPhone.
2. Transférez les fichiers CBZ sur votre iPhone via Transfert Wi-Fi ou AirDrop.
3. Importez dans BiblioFuse en sélectionnant les fichiers dans l'application Fichiers et en les partageant vers l'application.

Remarque : BiblioFuse lit aussi les fichiers CBR directement sur iPhone — il gère l'extraction RAR nativement. La raison principale de convertir est si vous archivez des fichiers, les partagez avec d'autres, ou utilisez un autre outil dans votre flux de travail qui nécessite spécifiquement du CBZ.

## Questions Fréquentes

**Puis-je convertir plusieurs fichiers CBR à la fois ?**

Oui. Sélectionnez tous vos fichiers CBR dans le sélecteur de fichiers et l'outil traite chacun d'eux. Les fichiers sont téléchargés individuellement — vous obtenez un `.cbz` par `.cbr`. Si vous voulez ensuite les fusionner en un seul volume, utilisez l'outil de fusion CBZ.

**La qualité d'image change-t-elle pendant la conversion ?**

Non. Les images à l'intérieur de l'archive ne sont pas ré-encodées. La conversion extrait les fichiers JPG ou PNG originaux et les place dans un nouveau ZIP sans toucher aux données image. Le CBZ converti est identique au CBR original au niveau du pixel.

**Que faire si le fichier CBR est protégé par un mot de passe ?**

Les fichiers CBR protégés par mot de passe ne peuvent pas être ouverts sans le mot de passe. L'outil web ne peut pas contourner la protection par mot de passe. Si votre CBR est chiffré, déverrouillez-le d'abord — SmartDecrypt peut déverrouiller par lots des fichiers CBZ, PDF et ZIP protégés par mot de passe sur iPhone et Mac.

**Mon fichier CBR s'est converti mais le CBZ ne s'ouvre pas — que s'est-il passé ?**

Certains fichiers étiquetés `.cbr` sont en réalité des archives ZIP (renommées depuis `.cbz` ou créées par un logiciel qui utilise ZIP par défaut). Si la conversion produit un fichier que votre lecteur ne peut pas ouvrir, essayez de renommer le `.cbr` original en `.zip` et vérifiez si c'est déjà une archive ZIP. Il vous suffit peut-être de le renommer directement en `.cbz` sans conversion.

**Y a-t-il une limite de taille de fichier ?**

Aucune limite imposée par le serveur n'existe car aucun fichier n'est jamais envoyé. La limite pratique est la RAM disponible de votre appareil — les très grands fichiers CBR (1 Go+) peuvent ralentir le navigateur sur les appareils à mémoire limitée. Pour la plupart des fichiers de BD de moins de 200 Mo, la conversion se termine en quelques secondes.

## L'essentiel à Retenir

CBR et CBZ se ressemblent mais utilisent des formats d'archive différents sous le capot. Convertir CBR en CBZ signifie réarchiver les images de la BD du format RAR au format ZIP — l'[outil en ligne BiblioFuse](https://bibliofuse.com/fr/webapp/) fait tout cela dans votre navigateur sans envoi de fichier requis. La qualité d'image est préservée, le processus est privé, et le fichier CBZ résultant fonctionne dans tout lecteur supportant le format ouvert basé sur ZIP.
