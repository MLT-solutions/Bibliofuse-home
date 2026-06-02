# CBZ, CBR, RAR, ZIP: ¿Qué formato de archivo de cómics deberías usar?

Acabas de descargar un lote de cómics y la mitad son `.cbz`, unos pocos son `.cbr`, y uno raro es un simple `.rar`. Abres tu lector de cómics y todo funciona, pero ahora te preguntas: ¿importa realmente el formato que usa tu colección? ¿Deberías convertir todo a un mismo formato? ¿Y cuál es la diferencia real?

Aquí tienes una explicación clara de todos los formatos de archivo de cómics, cuándo usar cada uno y por qué [BiblioFuse](https://bibliofuse.com/es/) los lee todos sin problema.

## Qué son en realidad los formatos de archivo de cómics

Ninguno de estos formatos es un formato especial para cómics. CBZ, CBR, ZIP y RAR son todos contenedores de archivo de propósito general. Lo único que hay dentro es una carpeta de imágenes, normalmente JPEG o PNG, cada vez más WebP. Un lector de cómics simplemente extrae el archivo en memoria y muestra las imágenes en orden.

Eso significa que la elección del formato tiene que ver casi exclusivamente con el **algoritmo de compresión** y la **compatibilidad con el ecosistema**, no con ninguna función diseñada específicamente para cómics.

## CBZ — La mejor opción para la mayoría de las colecciones

CBZ es un archivo ZIP renombrado con la extensión `.cbz`. Eso es todo. Descomprime un archivo CBZ y obtienes una carpeta de imágenes.

**Por qué CBZ es el mejor formato por defecto:**

- ZIP es abierto, libre de regalías y compatible de forma nativa con todos los sistemas operativos y herramientas de archivo
- macOS, Windows y Linux pueden abrir archivos ZIP sin software adicional
- La implementación de lectura y escritura es trivialmente sencilla, por lo que prácticamente todos los lectores de cómics admiten CBZ
- Sin problemas de patentes ni licencias, a diferencia de RAR
- Es fácil de modificar: añade, elimina o reordena páginas sin recomprimir todo el archivo

**La compensación en compresión:** ZIP usa compresión Deflate, que es rápida pero no la más eficiente. Para archivos de cómics que ya contienen imágenes JPEG comprimidas, la diferencia en tamaño frente a RAR suele ser inferior al 5 %. Para archivos de imágenes PNG, RAR puede ahorrar entre un 10 y un 20 %, aunque el propio PNG suele ser el mayor responsable del tamaño del archivo.

**Conclusión:** Si vas a crear o digitalizar una colección desde cero, usa CBZ.

## CBR — Ampliamente compatible pero técnicamente inferior

CBR es un archivo RAR renombrado con la extensión `.cbr`. RAR es un formato propietario creado por Eugene Roshal, el "RAR" de WinRAR. Consigue una compresión ligeramente mejor que ZIP, especialmente para formatos de imagen sin comprimir como PNG.

**El problema con CBR:**

- RAR es propietario. Para crear archivos RAR se necesita una copia con licencia de WinRAR o RAR para Unix
- La biblioteca de código abierto UnRAR puede leer archivos RAR, pero no crearlos
- RAR 5 introdujo un nuevo formato de cabecera que algunos lectores más antiguos aún no pueden gestionar
- Reempaquetar o editar archivos CBR requiere herramientas adicionales

**Cuándo te encontrarás con CBR:** La mayoría de los archivos CBR que circulan por internet provienen de principios y mediados de los años 2000, cuando WinRAR era el compresor dominante en Windows. Las nuevas versiones rara vez usan CBR porque no ofrece ninguna ventaja significativa frente a CBZ.

**¿Deberías convertir CBR a CBZ?** Si el espacio escasea y tienes muchos archivos CBR con muchas imágenes PNG, la conversión puede ahorrar espacio. Para la mayoría de las colecciones basadas en JPEG, la diferencia de tamaño es insignificante y la conversión no merece el esfuerzo. [BiblioFuse](https://bibliofuse.com/es/) lee CBR de forma nativa, así que no necesitas convertir para poder leer.

## RAR y ZIP — Los formatos base

Los archivos `.rar` y `.zip` simples funcionan de forma idéntica a CBR y CBZ cuando se abren en un lector de cómics. La única diferencia es la extensión del archivo: los lectores de cómics miran la extensión para decidir cómo tratar el archivo, no el formato interno.

Algunos escáneres y programas de captura más antiguos guardan los archivos con la extensión de archivo original en lugar de renombrarlos a `.cbz` o `.cbr`. Puede que necesites cambiar el nombre, o usar un lector que admita ZIP o RAR sin renombrar. BiblioFuse en iOS admite archivos `.zip` y `.rar` directamente, sin necesidad de cambiar el nombre.

## CB7 y CBT — Los formatos minoritarios

**CB7** es un archivo 7-Zip (`.7z`) renombrado a `.cb7`. La compresión LZMA2 de 7-Zip es significativamente mejor que la de ZIP y RAR para datos comprimibles como archivos de texto, pero los cómics son mayormente imágenes JPEG ya comprimidas, por lo que el ahorro real de espacio es pequeño. La compatibilidad es menos universal.

**CBT** es un archivo TAR renombrado a `.cbt`. TAR no comprime en absoluto: solo agrupa archivos. CBT se ve ocasionalmente en archivos provenientes de Linux. Es rápido de desempaquetar, pero genera archivos más grandes.

Ninguno de estos formatos tiene una adopción significativa. Quédate con CBZ a menos que tengas un motivo concreto para no hacerlo.

## PDF — No es un archivo de cómics, pero es habitual

El PDF es un formato de documento, no un archivo de imágenes. Los cómics guardados como PDF usan imágenes incrustadas (o, en el caso de libros escaneados, páginas rasterizadas), pero el formato añade una sobrecarga de diseño y normalmente no se puede editar página a página sin herramientas especializadas.

Los PDF son habituales en cómics digitales vendidos por editores y en volúmenes de manga escaneados. BiblioFuse lee PDFs, pero la experiencia de lectura de PDFs basados en imágenes es generalmente peor que el CBZ equivalente: más lenta para navegar, sin metadatos por página y con mayor tamaño de archivo por imagen.

Si tienes cómics en PDF y quieres convertirlos a CBZ, la [herramienta web de BiblioFuse](https://bibliofuse.com/es/webapp/) funciona completamente en tu navegador sin necesidad de subir nada.

## Tabla comparativa de formatos

| Formato | Contenedor | Compresión | Creación libre | Soporte universal | Ideal para |
|---------|-----------|------------|----------------|-------------------|------------|
| CBZ | ZIP | Deflate | ✅ Sí | ✅ Sí | Colecciones nuevas, captura |
| CBR | RAR | RAR/RAR5 | ⚠️ Requiere WinRAR | ✅ La mayoría | Archivos heredados |
| ZIP | ZIP | Deflate | ✅ Sí | ✅ Sí | Lectores con soporte ZIP simple |
| RAR | RAR | RAR/RAR5 | ⚠️ Requiere WinRAR | ✅ La mayoría | Archivos heredados |
| CB7 | 7-Zip | LZMA2 | ✅ Sí | ⚠️ Parcial | Experimentos de alta compresión |
| CBT | TAR | Ninguna | ✅ Sí | ⚠️ Parcial | Archivos provenientes de Linux |
| PDF | PDF | Varios | ✅ Sí | ✅ Sí | Cómics sin DRM de editores |

## Cómo BiblioFuse gestiona todos estos formatos

[BiblioFuse para iPhone y iPad](https://bibliofuse.com/es/) lee CBZ, CBR, ZIP, RAR, CB7, CBT, EPUB y PDF de forma nativa. No necesitas convertir tu colección antes de importarla.

Todo el procesamiento ocurre en el dispositivo. Ningún archivo se sube a un servidor. Para bibliotecas grandes con múltiples formatos, BiblioFuse organiza los archivos por serie y registra el progreso de lectura por libro mediante sincronización con iCloud, independientemente de si el formato subyacente es CBZ o CBR.

La pestaña Herramientas de BiblioFuse te permite convertir entre formatos directamente en el iPhone. Selecciona un archivo CBR, toca Convertir, elige CBZ, y la aplicación reempaqueta el archivo sin salir de la app.

## Recomendaciones prácticas

**Si empiezas una colección nueva desde cero:** Usa CBZ. Es abierto, compatible de forma universal y fácil de manejar.

**Si ya tienes una colección en CBR:** No conviertas a menos que tengas un motivo concreto (espacio en disco, una herramienta que no admite CBR). CBR funciona perfectamente en BiblioFuse y en cualquier lector moderno.

**Si tienes una biblioteca con varios formatos:** No te molestes en estandarizar solo por estética. Un lector de cómics que admite múltiples formatos, como BiblioFuse, elimina la necesidad de mantener una colección en un único formato.

**Cómics en PDF de editores:** Mantenlos en PDF a menos que quieras editar o fusionar volúmenes; en ese caso, convertirlos a CBZ con la herramienta web de BiblioFuse tiene sentido.

El debate sobre el formato importa mucho menos que tener un lector que los gestione todos. Una vez que lo tienes, el contenedor se vuelve invisible.
