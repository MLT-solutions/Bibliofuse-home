# Por qué los archivos de cómics y ebooks son tan grandes — y cómo solucionarlo

BiblioFuse incluye una herramienta de compresión integrada que reduce archivos CBZ y EPUB recodificando imágenes a WebP — disminuyendo el tamaño hasta un 87 % sin pérdida visible de calidad en iPhone o iPad con iOS 17 o superior. Todo el proceso se ejecuta localmente; ningún archivo se sube a ningún servidor. Una biblioteca manga de 50 volúmenes que ocupa 20 GB en formato PNG se comprime hasta aproximadamente 2,5 GB.

Copias una serie manga de 50 volúmenes a tu iPhone y ves cómo 20 gigabytes de almacenamiento desaparecen de golpe. O descargas un solo CBZ y pesa 400 MB para un único volumen. ¿A dónde va todo ese espacio?

La respuesta está en el formato del archivo — y una vez que lo entiendes, solucionar el problema lleva menos de un minuto.

## CBZ y EPUB: ambos son archivos ZIP disfrazados

Un archivo CBZ es un archivo ZIP con una extensión diferente. Renombra cualquier `.cbz` a `.zip`, descomprímelo, y encontrarás una carpeta de imágenes nombradas en orden de lectura — `001.png`, `002.png`, etc. Los archivos CBR funcionan igual pero usan RAR en lugar de ZIP. Sin codificación propietaria, sin misterio: solo imágenes dentro de un contenedor.

El EPUB es estructuralmente similar. Renombra un `.epub` a `.zip`, descomprímelo, y encontrarás archivos HTML (el texto de los capítulos), hojas de estilo CSS, metadatos e imágenes incrustadas — portada, ilustraciones y fotos. EPUB es un estándar abierto W3C compatible con todas las aplicaciones de lectura importantes.

Ambos formatos están bien diseñados para su propósito. El problema de tamaño no está en el contenedor — está en lo que hay dentro.

## Por qué las imágenes PNG consumen tanto almacenamiento

La mayoría de los grupos de escaneo y editores de ebooks usan PNG por defecto porque es sin pérdida: cada píxel del archivo guardado es idéntico al escaneo original. Esa fidelidad tiene un precio.

Una página de cómic en alta resolución — típicamente 1800 × 2700 píxeles a 24 bits de color — pesa 2 MB o más en PNG. La mayoría de los volúmenes manga tienen entre 180 y 220 páginas. El coste en almacenamiento se acumula rápido:

| Formato del volumen | Páginas | Tamaño por página | Tamaño total |
|--------------------|---------|------------------|-------------|
| PNG (sin pérdida) | 200 | ~2 MB | **~400 MB** |
| WebP (comprimido) | 200 | ~250 kB | **~50 MB** |
| Espacio ahorrado | | | **87,5 %** |

Multiplica eso por una serie larga. Una biblioteca manga de 50 volúmenes en PNG ocupa unos **20 GB**. La misma serie comprimida a WebP cabe en unos **2,5 GB** — un ahorro de **17,5 GB** de una sola serie. Herramientas como [BiblioFuse](https://bibliofuse.com) realizan esta conversión completamente en el dispositivo, sin necesitar ningún software de escritorio.

## Qué hace mejor al WebP

WebP es un formato de imagen desarrollado por Google que consigue archivos mucho más pequeños que el PNG, y más pequeños que JPEG con calidad comparable. Con un ajuste de calidad moderado (alrededor de 80–85 %), la diferencia visual con el PNG original es imperceptible en la pantalla de un teléfono o tableta. Los cómics y el manga se comprimen especialmente bien porque la mayoría de las viñetas usan colores planos y líneas limpias.

Todos los iPhone, iPad y dispositivos Android modernos muestran WebP de forma nativa. No estás sacrificando calidad de visualización — estás almacenando la misma información visual de forma más eficiente.

## Por qué BiblioFuse integró la compresión en la app

La solución habitual — convertir archivos en el escritorio antes de cargarlos en el teléfono — funciona en teoría, pero crea fricción. Necesitas una herramienta de procesamiento por lotes, la configuración correcta, una forma de reempaquetar el ZIP y luego otra importación. En la práctica, la mayoría de los lectores lo omiten y viven con bibliotecas infladas.

La función **Fusionar y comprimir** de BiblioFuse elimina toda esa fricción. La conversión ocurre completamente en el dispositivo — nada se sube a ningún servidor. Selecciona los libros, elige un nivel de calidad y BiblioFuse se encarga de todo: extraer cada imagen, recodificarla como WebP y reensamblar un CBZ o EPUB comprimido en su lugar.

**Para comprimir un libro:**
1. Mantén pulsada cualquier portada en tu biblioteca y toca **Comprimir**.
2. Ajusta el control deslizante de calidad — el ajuste predeterminado ofrece un buen equilibrio para la mayoría de los cómics.
3. Toca **Comprimir**. El original se reemplaza al terminar.

**Para fusionar una serie:** mantén pulsado para seleccionar varios archivos CBZ, luego toca **Fusionar**. BiblioFuse los combina en orden de lectura y comprime el resultado en un solo paso.

La [Herramienta Web de BiblioFuse](/es/webapp) ofrece la misma compresión y fusión en cualquier navegador — sin instalación. Es la opción ideal en Windows o Linux sin la app de iOS o Mac.

## ¿Cuánto espacio puedes recuperar realmente?

El 87,5 % puede parecer abstracto hasta que lo ves en tu propia biblioteca:

| Colección | Tamaño PNG | Tras la compresión | Espacio liberado |
|-----------|-----------|-------------------|-----------------|
| Serie manga de 10 volúmenes | ~4 GB | ~500 MB | **3,5 GB** |
| Serie manga de 50 volúmenes | ~20 GB | ~2,5 GB | **17,5 GB** |
| 500 cómics occidentales | ~50 GB | ~6,25 GB | **43,75 GB** |
| Biblioteca EPUB ilustrada (100 libros) | ~5 GB | ~625 MB | **4,4 GB** |

En un iPhone de 128 GB donde cada gigabyte cuenta, esa diferencia permite llevar toda tu colección en lugar de la mitad.

## Cuándo comprimir y cuándo conservar los originales

La compresión es un proceso irreversible: una vez que el PNG es reemplazado por WebP dentro del archivo, los datos originales sin pérdida desaparecen. Para la lectura diaria, es un intercambio que vale la pena. Pero si estás archivando escaneos para preservación o trabajas con arte original donde la precisión de píxeles importa, conserva los originales en un disco externo y comprime solo las copias que llevas en el teléfono.

## Preguntas frecuentes

**¿Afecta la compresión a la calidad de lectura?**
Con el ajuste predeterminado, la diferencia es imperceptible en lectura normal. Un zoom muy potente sobre líneas finas puede revelar un ligero suavizado, pero para la mayoría de los lectores el resultado es visualmente idéntico al original.

**¿Puedo comprimir EPUB también?**
Sí. BiblioFuse procesa los EPUB de la misma manera — recodificando las imágenes incrustadas sin tocar el texto, el CSS ni la estructura de capítulos.

**¿Qué pasa si quiero conservar el original?**
Haz una copia en la app Archivos antes de comprimir — BiblioFuse reemplaza el archivo sin copia de seguridad automática. También puedes usar la [Herramienta Web de BiblioFuse](/es/webapp) para descargar una versión comprimida sin tocar los archivos originales.

**¿Funciona la compresión sin conexión?**
Sí — todo el proceso se ejecuta en tu dispositivo. No se necesita conexión a internet y ningún archivo se envía a un servidor.

**¿Puedo comprimir varios archivos a la vez?**
Sí. Mantén pulsado para seleccionar varios archivos CBZ o EPUB en la cuadrícula de la biblioteca y toca Comprimir en la barra de acciones. BiblioFuse los procesa secuencialmente en segundo plano mientras sigues leyendo.
