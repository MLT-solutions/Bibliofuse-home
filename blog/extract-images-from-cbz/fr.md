# Comment extraire des images de fichiers CBZ en ligne (gratuit, sans logiciel)

L'outil web BiblioFuse vous permet d'extraire des images individuelles de fichiers CBZ directement dans votre navigateur — sans logiciel à installer, sans fichiers envoyés sur un serveur, sans compte requis. Le traitement s'effectue entièrement en WebAssembly dans votre onglet, ce qui garantit la confidentialité de vos comics.

## Quand avez-vous besoin des images d'un CBZ ?

Un fichier CBZ est une archive ZIP contenant des images numérotées séquentiellement — généralement des pages JPEG ou PNG d'un comics ou manga scanné. Il existe de nombreuses situations où vous avez besoin des images brutes :

- **Imprimer une page spécifique :** votre imprimante nécessite un fichier image, pas une archive de comics
- **Conversion dans un autre format :** certains convertisseurs acceptent des images en entrée
- **Créer des références ou du fan art :** vous voulez les fichiers originaux en pleine résolution
- **Archiver des scans de qualité :** l'extraction permet d'inspecter la qualité et les métadonnées
- **Repackager :** diviser un grand CBZ en plusieurs fichiers plus petits par arc narratif

## Comment fonctionne l'outil web BiblioFuse

[BiblioFuse Web](https://bibliofuse.com/fr/webapp/) utilise WebAssembly (WASM) pour exécuter la logique de traitement directement dans votre onglet. Lorsque vous chargez l'extracteur CBZ, le code de traitement s'exécute sur votre appareil : vos fichiers ne sont jamais envoyés à un serveur.

C'est la même approche utilisée pour tous les outils web BiblioFuse. L'architecture est délibérément axée sur la confidentialité car les collections de comics contiennent souvent du contenu personnel.

## Étape par étape : extraire des images d'un fichier CBZ en ligne

### Étape 1 : Ouvrez l'outil web BiblioFuse

Naviguez vers l'[application web BiblioFuse](https://bibliofuse.com/fr/webapp/) dans n'importe quel navigateur moderne. Pas de connexion, pas d'extension, pas d'inscription.

### Étape 2 : Sélectionnez l'extracteur CBZ

Localisez l'outil **Extraire les images d'un CBZ** et cliquez dessus pour ouvrir l'interface.

### Étape 3 : Chargez votre fichier CBZ

Cliquez sur **Choisir un fichier** ou déposez votre fichier CBZ dans la zone de dépôt. Le fichier est lu directement depuis votre disque, sans requête réseau.

### Étape 4 : Choisissez les options d'extraction

L'extracteur propose plusieurs options :
- **Toutes les images :** extrait tous les fichiers image de l'archive
- **Plage de pages :** extrait uniquement les pages que vous spécifiez
- **Filtre de format :** extrait uniquement les JPEG ou uniquement les PNG

### Étape 5 : Extrayez et téléchargez

Cliquez sur **Extraire**. Le moteur WASM décompresse le CBZ et conditionne les images dans une archive ZIP. Votre navigateur déclenche automatiquement le téléchargement.

### Étape 6 : Décompressez et utilisez vos images

Ouvrez le fichier ZIP téléchargé avec n'importe quel gestionnaire d'archives. Vous trouverez vos images numérotées dans l'ordre de lecture.

## Détails sur le format de fichier

Les fichiers CBZ sont des archives ZIP standard. L'extracteur BiblioFuse préserve les fichiers image exactement tels qu'ils apparaissent dans l'archive, sans recomprimer, redimensionner ni altérer les données. Ce que vous extrayez est identique octet par octet à ce qui se trouvait dans le CBZ.

## CBZ vs. CBR

Les fichiers CBR utilisent le format RAR. Si vous avez un CBR, convertissez-le d'abord en CBZ (disponible aussi dans l'application web BiblioFuse), puis extrayez les images du CBZ résultant.

## Confidentialité et sécurité

Comme l'extracteur s'exécute entièrement dans votre navigateur, aucun serveur ne reçoit ni ne stocke vos fichiers :
- Vos collections personnelles ne quittent jamais votre appareil
- Aucun compte requis
- Pas de limites de taille imposées par des coûts serveur

## Questions fréquentes

**L'outil est-il vraiment gratuit ?**
Oui. Tous les outils web BiblioFuse sont gratuits, sans limites.

**Quels formats d'image prend-il en charge ?**
JPEG, PNG, WebP, GIF, BMP et TIFF.

**Puis-je extraire des images de fichiers CBZ protégés par mot de passe ?**
Supprimez d'abord la protection par mot de passe avec SmartDecrypt, puis extrayez les images.

**Quelle taille maximale de fichier CBZ puis-je traiter ?**
Aucune limite imposée — la contrainte est la mémoire disponible de votre navigateur.

**Les images extraites seront-elles dans l'ordre de lecture ?**
Oui. L'extracteur préserve les noms de fichiers originaux qui déterminent l'ordre de lecture.

## Extrayez des images sans risque pour votre vie privée

[Ouvrez l'application web BiblioFuse](https://bibliofuse.com/fr/webapp/) et extrayez les images de vos CBZ en quelques secondes, en toute confidentialité.
