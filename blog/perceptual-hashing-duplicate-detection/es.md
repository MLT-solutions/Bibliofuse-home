# Cómo el Hash Perceptual Encuentra Cómics Duplicados Incluso Después de Renombrarlos

Renombraste un archivo. Recomprimiste un archivo comprimido. Descargaste el mismo volumen de una fuente diferente. Por cualquier medida normal, ahora son archivos "diferentes" — tienen diferentes nombres, diferentes checksums, diferentes tamaños.

Sin embargo, el cómic dentro es el mismo. Cada página es la misma. Y si estás intentando limpiar tu biblioteca digital, estos duplicados casi idénticos son exactamente los que se escapan de los buscadores de duplicados estándar.

Este es el problema que resuelve el hash perceptual, y es la técnica en el núcleo de [Archive Duplicate Scanner](/es/archive/).

---

## Por qué la Comparación de Archivos Estándar se Queda Corta

La mayoría de las herramientas de "búsqueda de archivos duplicados" funcionan calculando un **checksum** para cada archivo y marcando los archivos que comparten el mismo checksum. Esto funciona perfectamente para copias exactas.

Pero para archivos de cómics, este enfoque pasa por alto los duplicados más comunes del mundo real:

| Escenario | ¿Mismo checksum? | ¿Realmente duplicado? |
|-----------|-----------------|----------------------|
| Copia con nombre diferente | No | Sí |
| Recomprimido con diferente calidad | No | Sí |
| Reempaquetado con diferente estructura | No | Probablemente sí |
| Descargado de dos fuentes diferentes | No | A menudo sí |
| Copia exacta byte a byte | Sí | Sí |

---

## Qué Hace el Hash Perceptual en su Lugar

Un **hash perceptual** es una huella digital corta calculada a partir del *contenido visual* de una imagen — no de sus bytes de archivo. El algoritmo analiza la estructura de la imagen: patrones de brillo, información de bordes y distribución de color. Dos imágenes que se ven visualmente idénticas producirán el mismo hash perceptual o uno muy similar, incluso si difieren a nivel de bytes.

El algoritmo más utilizado, **pHash**, funciona aproximadamente así:

1. Redimensiona la imagen a un tamaño fijo pequeño (por ejemplo, 32×32 píxeles)
2. Convierte a escala de grises
3. Aplica una transformada de coseno discreta (DCT) para extraer componentes de frecuencia
4. Mantiene la porción de baja frecuencia — esto captura la estructura general
5. Compara cada valor con la mediana, produciendo una cadena de bits

El hash resultante es típicamente de 64–256 bits. Dos imágenes con contenido visual similar producen hashes con una **distancia de Hamming** baja.

---

## Cómo Archive Duplicate Scanner Aplica Esto

[Archive Duplicate Scanner](/es/archive/) aplica el hash perceptual a nivel de archivo:

1. **Extracción** — abre cada archivo CBZ o CBR y lee las imágenes internas
2. **Hash de cada página** — cada página recibe un hash perceptual
3. **Comparación** — construye un índice de similitud y encuentra archivos que comparten un alto porcentaje de páginas coincidentes
4. **Puntuación** — asigna una confianza de coincidencia basada en cuántas páginas coinciden y con qué precisión

Esta coincidencia de múltiples páginas es lo que lo hace preciso para cómics específicamente. Una sola página podría producir ocasionalmente un falso positivo. Pero cuando el 90% de las páginas de dos archivos coinciden, la probabilidad de un falso positivo cae casi a cero.

---

## Casos Prácticos

**Caso 1: Fuentes diferentes, nombres de archivo diferentes**
Descargaste `HxH_v12_en.cbz` de un sitio y `Hunter_X_Hunter_Volume_12.cbz` de otro. Comparación de checksum: sin coincidencia. Hash perceptual: páginas casi idénticas en todos los capítulos → marcado como duplicado.

**Caso 2: Archivo recomprimido**
Alguien ejecutó un CBZ a través de una herramienta de compresión, reduciendo cada JPEG al 80% de calidad. El tamaño del archivo cambió. Los checksums cambiaron. Hash perceptual: las imágenes son visualmente idénticas a 32×32 → mismos hashes → detectado.

**Caso 3: Páginas reordenadas o renombradas internamente**
Un archivo tiene páginas llamadas `001.jpg, 002.jpg...` mientras otro tiene `page_001.jpg, page_002.jpg...`. Hash perceptual: no mira los nombres de archivo dentro del archivo → aún detectado.

---

## Los Límites del Hash Perceptual

**Las ediciones visuales significativas romperán la coincidencia.** Las marcas de agua leves o los recortes menores generalmente no afectan la detección.

**Las imágenes de muy baja resolución son poco confiables.** Si las imágenes fuente son extremadamente pequeñas, hay menos estructura para comparar.

**Manga con arte similar en varios volúmenes.** Algunas series reutilizan elementos visuales extensamente. Las coincidencias falsas ocasionales son posibles — la interfaz de revisión te permite verificar miniaturas antes de eliminar.

---

## Usando Archive Duplicate Scanner

[Archive Duplicate Scanner](/es/archive/) es una aplicación Mac nativa:

- Escanea árboles de carpetas completos de forma recursiva
- Maneja CBZ, CBR y archivos de imagen sueltos
- Muestra pares coincidentes lado a lado con miniaturas
- Muestra confianza de coincidencia y tamaño de archivo para cada par
- Mueve los duplicados seleccionados a la Papelera (no eliminación permanente)

Una vez limpia tu biblioteca, combinarla con [BiblioFuse](/es/) en iPhone te da una fuente única y curada para leer.
