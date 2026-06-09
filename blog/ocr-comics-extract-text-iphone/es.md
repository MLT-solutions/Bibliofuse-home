# Extrae Texto de Comics y Manga en iPhone con OCR

BiblioFuse incluye OCR en el dispositivo para extraer texto de páginas de cómics y manga en iPhone, con soporte para japonés (incluido texto vertical), chino, coreano y caracteres occidentales en archivos CBZ, CBR, EPUB y PDF. Todo el proceso se ejecuta localmente en el Motor Neuronal sin conexión a internet ni subida a servidores, produciendo resultados en menos de dos segundos en iPhone 14 o más reciente.

Estás tres volúmenes adentro de una serie de manga cuando un personaje menciona un clan, una técnica o un lugar cuyo nombre en japonés quieres buscar. O encuentras una escena memorable que quieres copiar y guardar. El problema: las páginas de comics son imágenes, no texto. No puedes tocar el globo de diálogo para seleccionar lo que dice.

El OCR en [BiblioFuse](/es/) cambia eso. La app puede escanear cualquier página —o una región seleccionada— extraer el texto que encuentre y entregarlo como una cadena que puedes copiar. Funciona con archivos CBZ, CBR, EPUB y PDF. Maneja japonés, chino, coreano y escrituras occidentales. Y funciona completamente en el dispositivo, sin conexión a internet.

## Por Qué el OCR en Comics es Difícil

El OCR en documentos normales —recibos, PDFs con fuentes incrustadas— es un problema resuelto. Las páginas de comics son más difíciles por tres razones:

**El texto está en globos con bordes curvos y fondos variables.** El texto aparece sobre imágenes dibujadas, a menudo con trazados complejos justo detrás de las letras, lo que confunde los sistemas de OCR.

**Las fuentes suelen ser estilizadas o dibujadas a mano.** Los comics occidentales usan fuentes personalizadas que imitan la escritura manual o tienen formas distorsionadas para énfasis.

**El manga tiene convenciones específicas de diseño.** El texto japonés en manga suele ser vertical, de derecha a izquierda, y muy comprimido dentro de globos estrechos.

[BiblioFuse](/es/) entrena su OCR específicamente para maquetaciones de comics y manga, con modelos separados para texto occidental horizontal y texto CJK (chino, japonés, coreano) vertical.

## Qué Puedes Hacer con el Texto Extraído

- **Buscar vocabulario en idiomas extranjeros.** Si lees manga en japonés, extrae el diálogo de un panel y pégalo en un diccionario o traductor.
- **Copiar citas.** Un diálogo memorable, una leyenda, un título de capítulo.
- **Buscar dentro de una serie.** Extrae el nombre de un personaje o término técnico y búscalo en otros volúmenes.
- **Accesibilidad.** Extrae texto de comics escaneados para alimentar un lector de pantalla o una app de texto a voz.
- **Traducción de contenido no traducido.** Si tienes manga que nunca se tradujo oficialmente, OCR + traducción automática te da una experiencia de lectura aproximada.

## Cómo Usar el OCR en BiblioFuse

El OCR está integrado en la vista del lector. No necesitas cambiar de modo.

**Para escanear la página completa:**

1. Mientras lees, toca el centro de la página para mostrar los controles.
2. Toca el botón **OCR** en la barra de herramientas (icono de cursor de texto sobre una página).
3. BiblioFuse escanea la página actual y muestra el texto extraído en un panel inferior.
4. Toca cualquier bloque de texto para copiarlo, o usa **Copiar todo** para copiarlo todo.

**Para escanear una región específica:**

1. Mantén presionada cualquier parte de la página.
2. Arrastra para dibujar un rectángulo alrededor de lo que quieres —un globo, un cuadro de texto, un título.
3. Levanta el dedo. BiblioFuse escanea la región y muestra el resultado.
4. Toca para copiar o compartir.

La selección por región es más precisa para páginas densas o cuando quieres texto de un único panel.

## Detección de Idioma y Soporte CJK

BiblioFuse detecta el tipo de escritura automáticamente en la mayoría de los casos. El **texto japonés vertical** se maneja correctamente —BiblioFuse reconstruye el orden de lectura de arriba hacia abajo en columnas de derecha a izquierda y presenta el texto extraído en la secuencia correcta.

Para **chino tradicional y simplificado**, BiblioFuse distingue los conjuntos de caracteres en la salida del OCR. El **manhwa coreano** (texto horizontal) es procesado por el mismo pipeline que otros textos CJK.

## Precisión: Qué Esperar

- **Escaneos de alta resolución (600+ DPI):** Muy preciso.
- **Versiones estándar (300 DPI):** Preciso en texto limpio; algunos errores en fuentes estilizadas.
- **Escaneos de baja resolución o comprimidos:** La precisión disminuye con artefactos JPEG. El escalado en [BiblioFuse](/es/) puede ayudar antes de ejecutar OCR.
- **Comics dibujados a mano:** Más variación. Las fuentes impresas en máquina se leen mejor que las letras dibujadas a mano.

## Qué Puedes Hacer con el Texto

El panel de texto extraído en [BiblioFuse](/es/) admite acciones estándar del menú compartir de iOS:

- **Copiar al portapapeles** y pegar en cualquier otra app
- **Compartir** directamente a una app de traducción, Notas o mensajería
- **Abrir en Safari** para buscar

Para texto en japonés, el diccionario del sistema iOS incluye búsqueda japonés-inglés. Copia cualquier kanji extraído al portapapeles y abre la app Traducir o un diccionario.

## Consejos para Mejores Resultados

**Usa el selector de región para globos individuales.** El escaneo de página completa da todo el texto, pero la selección de un globo individual da resultados más limpios cuando los globos están muy juntos.

**Activa el escalado para escaneos de baja calidad.** En los ajustes del lector de BiblioFuse, el escalado de imagen aplica un filtro de nitidez que mejora la calidad de entrada para el OCR.

**Para manga, mantén el teléfono recto.** El OCR en texto vertical es sensible a la rotación.

## El OCR Funciona en el Dispositivo

Todo el procesamiento de OCR en [BiblioFuse](/es/) se ejecuta localmente en tu iPhone. Las páginas no se envían a ningún servidor. No hay llamadas a servicios externos ni imágenes cargadas para procesar.

## Primeros Pasos

El OCR está disponible en [BiblioFuse](/es/) para iOS sin ninguna compra adicional. Descarga la app desde el App Store, importa un comic o manga, y prueba el botón OCR mientras lees. Para los lectores de manga en particular, es una función difícil de prescindir una vez que la has usado.


## Preguntas frecuentes

**¿Qué idiomas admite el OCR de BiblioFuse?**
BiblioFuse admite japonés (incluido texto vertical de arriba a abajo), chino simplificado y tradicional, coreano, y escrituras occidentales (latín, cirílico, griego). La selección de idioma es automática, pero puedes forzar un idioma en los ajustes de OCR si la detección automática no funciona bien con páginas mixtas.

**¿Cómo funciona el OCR en BiblioFuse?**
Mientras lees un comic o manga, toca el botón OCR en los controles del lector. Aparece un cuadro de selección — arrástralo sobre cualquier panel o globo de diálogo. BiblioFuse procesa la región seleccionada localmente en el Neural Engine y devuelve el texto extraído. Toca el texto para copiarlo o compartirlo.

**¿El OCR requiere conexión a internet?**
No. El OCR de BiblioFuse corre completamente en el dispositivo usando el Neural Engine de Apple. No se sube nada a servidores externos. Funciona en modo avión, sin datos y sin Wi-Fi.

**¿Por qué el OCR de BiblioFuse es mejor para el japonés que la cámara del iPhone?**
BiblioFuse está optimizado para texto en paginas de comics: texto pequeño en globos, texto vertical en manga, fuentes estilizadas y texto en ángulo. La app del sistema Vision no está ajustada para este contexto. BiblioFuse también mantiene el texto en su posición de lectura, por lo que copiar y pegar en un diccionario es una operación con un solo toque.

**¿Con qué formatos de archivo funciona el OCR de BiblioFuse?**
El OCR funciona con CBZ, CBR, EPUB y PDF — todos los principales formatos de comics y ebooks compatibles con BiblioFuse. El texto puede extraerse de cualquier página renderizada como imagen, incluidas las páginas escaneadas en archivos PDF e EPUB.
