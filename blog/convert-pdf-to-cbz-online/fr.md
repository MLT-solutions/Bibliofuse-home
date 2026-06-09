# Comment convertir un PDF en CBZ en ligne (sans logiciel, sans téléchargement)

Vous avez téléchargé un roman graphique scanné au format PDF. Il s'ouvre sans problème dans Preview ou Acrobat, mais dans votre lecteur de BD, l'expérience laisse à désirer : les pages chargent lentement, le zoom devient flou, et tourner les pages n'a pas la fluidité attendue. Vous savez que le CBZ est fait pour les comics. Le problème, c'est de convertir sans installer encore un logiciel de bureau, ni envoyer vos fichiers vers un site inconnu.

La [BiblioFuse Web Tool](/fr/webapp/) règle ça directement dans votre navigateur. Sans compte. Sans téléchargement. Sans installation. Vos fichiers ne quittent jamais votre appareil.

## Pourquoi le PDF ne convient pas aux comics

Le PDF a été conçu pour les documents — des mises en page textuelles destinées à l'impression. Il gère les polices, les graphiques vectoriels et le renvoi à la ligne à merveille. C'est son terrain de prédilection.

Les comics, c'est différent. Un comic scanné est une suite d'images pleine page, une par page. Le PDF les enveloppe dans une structure qui alourdit le fichier sans apporter de valeur, utilise un moteur de rendu plus lent qu'un visionneur d'images dédié, et empêche les lecteurs de comics de mettre les pages suivantes en cache.

CBZ est une archive ZIP contenant une séquence numérotée d'images. Presque pas de surcharge. Les lecteurs de comics décompressent les images à l'avance, les mettent en mémoire cache et tournent les pages instantanément. La qualité du zoom dépend entièrement du fichier image, pas d'un moteur qui tente d'interpréter un format documentaire.

Convertir un comic PDF en CBZ, c'est extraire les images brutes des pages du PDF et les reconditionner dans un ZIP. Le résultat est un fichier que votre lecteur de comics a été spécialement conçu pour gérer.

## Ce que fait la BiblioFuse Web Tool

La [BiblioFuse Web Tool](/fr/webapp/) fonctionne entièrement en WebAssembly dans votre navigateur. WebAssembly exécute du code compilé dans un environnement cloisonné, ce qui permet à l'application de traiter des fichiers de façon intensive — comme le ferait normalement un logiciel natif de bureau — sans rien envoyer à un serveur.

Vos fichiers sont lus depuis votre disque local directement dans la mémoire du navigateur. La conversion s'exécute dans l'onglet du navigateur. Le fichier résultant est écrit directement sur votre disque. Rien ne transite par un serveur, à aucun moment.

C'est important si vos comics contiennent des œuvres sous licence, des archives privées, ou des fichiers que vous ne souhaitez tout simplement pas stocker sur le cloud d'un tiers.

## Comment convertir un PDF en CBZ

**Étape 1 : Ouvrez l'outil**

Accédez à la [BiblioFuse Web Tool](/fr/webapp/) dans n'importe quel navigateur de bureau — Chrome, Firefox, Safari, Edge. Aucune connexion ni compte requis. La version gratuite prend en charge des lots de trois fichiers à la fois.

**Étape 2 : Ajoutez vos fichiers PDF**

Cliquez sur la zone de dépôt ou faites-y glisser vos fichiers PDF. Vous pouvez en ajouter plusieurs en même temps. L'outil affiche chaque fichier avec son nom et sa taille détectée. Si un fichier est trop volumineux pour la mémoire disponible de votre navigateur, un avertissement s'affiche avant le lancement du traitement.

**Étape 3 : Choisissez CBZ comme format de sortie et lancez la conversion**

Sélectionnez CBZ comme format de sortie dans les options de conversion. Cliquez sur Convertir. L'outil traite chaque fichier dans l'ordre, extrait les images des pages du PDF et les conditionne dans une archive CBZ. Une barre de progression indique l'avancement. Une fois la conversion terminée, vos fichiers de sortie apparaissent prêts à être téléchargés.

Les fichiers téléchargés conservent le même nom que vos originaux, avec `.cbz` à la place de `.pdf`.

## Qualité d'image lors de la conversion

C'est la question qui revient le plus souvent, et la réponse dépend de la façon dont le PDF source a été créé.

**PDFs scannés :** C'est le cas le plus courant pour les vieux comics et les volumes manga. Le PDF contient des images scannées stockées directement en son sein. La conversion les extrait sans les réencoder. Les images dans votre CBZ sont identiques à celles du PDF — aucune perte de qualité, aucune compression supplémentaire.

**PDFs vectoriels :** Certains PDFs sont générés à partir d'illustrations vectorielles ou de mises en page textuelles. Les convertir en CBZ rastérise chaque page à une résolution définie. La [BiblioFuse Web Tool](/fr/webapp/) utilise une résolution élevée par défaut, ce qui donne des résultats nets aux niveaux de zoom de lecture habituels.

**PDFs avec compression préexistante :** Si une compression JPEG importante a été appliquée lors de la création du PDF original, les images extraites reflètent cette compression existante. L'outil n'ajoute pas de compression supplémentaire, mais il ne peut pas non plus annuler une compression déjà intégrée.

Pour les comics scannés — le scénario de conversion le plus courant — vous obtenez une extraction sans perte. Le CBZ est généralement de la même taille que le PDF, voire légèrement plus petit, sans aucune dégradation de qualité.

## Conversion par lots d'une série

Si vous avez une série répartie sur plusieurs volumes PDF, la [BiblioFuse Web Tool](/fr/webapp/) vous permet de convertir l'ensemble en une seule session. Ajoutez tous vos fichiers PDF en une fois, définissez la cible sur CBZ et lancez. Chaque fichier est traité et disponible au téléchargement individuellement dès qu'il est terminé.

La version gratuite traite jusqu'à trois fichiers par lot. Pour une série plus longue, lancez plusieurs lots dans la même session de navigateur — aucun rechargement de page n'est nécessaire entre les lots.

## Transférer des fichiers CBZ sur votre téléphone après la conversion

Une fois la conversion terminée et vos fichiers CBZ téléchargés, plusieurs options simples s'offrent à vous pour les transférer sur votre téléphone :

**Transfert Wi-Fi (l'option la plus rapide) :** Si vous utilisez BiblioFuse sur votre iPhone, la fonction intégrée de [transfert Wi-Fi](/fr/) de l'application vous permet de faire glisser des fichiers depuis une fenêtre de navigateur sur n'importe quel ordinateur du même réseau. Ouvrez BiblioFuse, activez le transfert Wi-Fi, et faites glisser vos fichiers CBZ depuis votre navigateur Mac ou PC directement dans la bibliothèque. Pas de câble USB, pas d'iTunes, pas de stockage cloud.

**iCloud Drive :** Déposez les fichiers dans un dossier iCloud Drive lié à BiblioFuse et ils se synchroniseront automatiquement lorsque votre téléphone sera en Wi-Fi.

**AirDrop :** Sur Mac, sélectionnez vos fichiers CBZ dans le Finder, faites un clic droit et envoyez-les par AirDrop à votre iPhone. Appuyez sur « Ouvrir dans BiblioFuse » lorsque le transfert est terminé.

## Questions fréquentes

**L'outil gère-t-il les PDFs contenant à la fois des images et des couches de texte ?**

Oui. Les PDFs avec une couche d'image scannée et une couche de texte OCR sont traités correctement — l'outil extrait les images visuelles des pages. La couche de texte n'est pas reportée dans le CBZ (CBZ est par nature un format d'archive d'images), mais votre PDF original reste intact.

**Quelle est la limite de taille de fichier ?**

Il n'y a pas de limite stricte imposée par l'outil. Les limites pratiques dépendent de la mémoire disponible dans votre navigateur — la plupart des navigateurs de bureau gèrent sans problème des fichiers de plusieurs gigaoctets. Les fichiers très volumineux sur du matériel ancien peuvent être lents, mais se terminent généralement sans erreur.

**Fonctionne-t-il sur les navigateurs mobiles ?**

Oui, mais les performances sont nettement plus lentes que sur ordinateur. Pour les gros PDF, un navigateur de bureau est recommandé.

**Y a-t-il une limite du nombre de pages ?**

Non. L'outil traite toutes les pages contenues dans le PDF.

**Quel format d'image utilise le CBZ ?**

Le CBZ contient le format d'image stocké dans le PDF source. Pour les comics scannés, c'est généralement du JPEG. L'outil ne transode pas les images lors de la conversion, sauf si vous avez activé la compression comme étape distincte.

## Un workflow complet : du PDF au téléphone

La [BiblioFuse Web Tool](/fr/webapp/) gère la conversion PDF vers CBZ sans nécessiter d'installation de logiciel, de compte cloud ni de téléchargement de fichier. Vos fichiers restent sur votre machine tout au long du processus.

Combiné à BiblioFuse sur iPhone ou iPad, vous disposez d'un workflow de bout en bout sans friction : conversion dans le navigateur, transfert Wi-Fi vers votre téléphone, lecture dans l'application. Aucun gestionnaire de comics dédié, aucun service de synchronisation, aucune étape intermédiaire.

Si vous avez un dossier de comics en PDF que vous attendez de convertir, ouvrez la [BiblioFuse Web Tool](/fr/webapp/) maintenant et déposez le premier lot.
