# Convertir ZIP en CBZ en ligne : renommez vos archives BD en quelques secondes

Vous avez un fichier ZIP plein d'images de BD et votre lecteur ne le reconnaît pas. La solution prend trois secondes : les fichiers CBZ sont des archives ZIP avec une extension différente. Renommez le fichier et le lecteur le reconnaît comme une BD. L'[outil web BiblioFuse](https://bibliofuse.com/fr/webapp/) peut le faire directement dans le navigateur — sans upload, sans logiciel, sans compte.

## Pourquoi votre lecteur ignore les fichiers ZIP

La plupart des lecteurs de BD identifient les types de fichiers par leur extension, pas par leur contenu. Un fichier nommé `chapitre-01.zip` ressemble à une archive générique. Le même fichier renommé en `chapitre-01.cbz` est immédiatement reconnu comme un conteneur BD. Aucune différence dans les octets — seul le nom change.

CBZ signifie Comic Book ZIP. Le format CBZ existe uniquement pour donner aux lecteurs de BD une extension reconnaissable. À l'intérieur se trouve toujours un ZIP contenant des images nommées de façon à s'afficher dans le bon ordre de lecture. CBR utilise le même concept avec une archive RAR.

## Option 1 — Renommer le fichier directement

La méthode la plus rapide est de simplement renommer le fichier. Sur Mac ou Windows, changez l'extension de `.zip` en `.cbz` dans le Finder ou l'Explorateur Windows. Sur iOS :

1. Ouvrez l'app **Fichiers** et naviguez jusqu'au fichier ZIP.
2. Appuyez longuement → **Renommer**.
3. Remplacez `.zip` par `.cbz` et confirmez.

iOS peut vous avertir du changement d'extension. Confirmez. Le fichier est maintenant un CBZ que n'importe quel lecteur de BD — y compris [BiblioFuse pour iPhone](https://bibliofuse.com/fr/) — ouvrira sans problème.

## Option 2 — Utiliser l'outil web BiblioFuse

L'[outil web BiblioFuse](https://bibliofuse.com/fr/webapp/) fonctionne entièrement dans votre navigateur via WebAssembly. Vos fichiers ne quittent jamais votre appareil — rien n'est envoyé vers un serveur.

Pour convertir ZIP en CBZ :
1. Allez sur **[bibliofuse.com/fr/webapp](https://bibliofuse.com/fr/webapp/)** dans n'importe quel navigateur moderne.
2. Sélectionnez l'outil **Convertir**.
3. Faites glisser votre fichier ZIP ou cliquez pour le sélectionner.
4. Choisissez **ZIP → CBZ** comme format de sortie.
5. Cliquez sur **Convertir** et téléchargez le résultat.

Le CBZ produit contient exactement les mêmes images que le ZIP d'entrée, dans le même ordre, sans réencodage ni perte de qualité.

## Conversion par lots

Si vous avez des dizaines de fichiers ZIP, l'outil web accepte plusieurs fichiers à la fois : faites glisser plusieurs ZIPs ensemble et il produit un CBZ pour chacun.

## Ce qu'il y a dans un CBZ

Un CBZ est un ZIP contenant des images triées alphabétiquement. Le lecteur les affiche dans cet ordre. Convention recommandée : `0001.jpg`, `0002.jpg`... (avec zéros de remplissage). Sans remplissage, `10.jpg` viendrait avant `2.jpg` dans l'ordre alphabétique.

## Et les fichiers CBR ?

CBR utilise RAR au lieu de ZIP. Convertir CBR en CBZ nécessite d'extraire le RAR et de le repackager en ZIP. L'outil web BiblioFuse gère également cela : sélectionnez **CBR → CBZ** et il repackage les images en ZIP avec l'extension CBZ.

## À retenir

CBZ, c'est ZIP déguisé. Renommer l'extension suffit dans la plupart des cas. Quand vous avez besoin d'une solution navigateur pour la conversion par lots sans upload, l'[outil web BiblioFuse](https://bibliofuse.com/fr/webapp/) convertit ZIP en CBZ en quelques secondes — totalement privé, sans logiciel.
