# Cómo Organizar tu Biblioteca de Ebooks sin Introducir Metadatos ni Números ISBN

La mayoría de los lectores de ebooks te piden que introduzcas título, autor, género e ISBN cuando añades un libro. Si el archivo ya tiene metadatos integrados, el lector los rellena automáticamente. Si no — lo que ocurre con muchos archivos EPUB y TXT que realmente posees — tienes por delante una larga sesión de introducción de datos.

[GrepTag Reader](/es/grepreader/) adopta el enfoque opuesto. Lee el texto real dentro de cada libro y extrae automáticamente etiquetas del contenido. No introduces nada. La biblioteca se organiza sola.

## Cómo GrepTag Reader Extrae Etiquetas del Contenido

Cuando importas un archivo EPUB o TXT a [GrepTag Reader](/es/grepreader/), lee el texto completo del libro y busca palabras clave recurrentes que indiquen de qué trata el libro.

Las etiquetas generadas reflejan el contenido real:
- Una novela ambientada en Tokio con personajes samurái podría generar: `japón`, `samurái`, `histórico`, `acción`
- Un manual técnico sobre herramientas de línea de comandos de Linux: `linux`, `terminal`, `programación`
- Un diario de viajes por el Sudeste Asiático: `viaje`, `asia`, `memorias`

El etiquetado automático se ejecuta cuando importas un libro. No tienes que activar un análisis manualmente.

## Filtrado de Etiquetas Multi-Selección — Lógica AND

El filtrado de etiquetas en GrepTag Reader usa lógica AND: cuando seleccionas varias etiquetas, ves los libros que coinciden con *todas* ellas.

- Libros `ciencia-ficción` Y `relatos-cortos` — selecciona ambas etiquetas y ves solo colecciones de ese género
- Libros `japón` Y `detective` — los resultados muestran ficción de misterio japonesa
- Libros `filosofía` Y `antiguo` — se reducen a obras griegas y romanas antiguas

## Formatos Compatibles

GrepTag Reader analiza el contenido de texto de **EPUB** y **TXT**.

Tu biblioteca — incluidas las etiquetas generadas automáticamente y tu progreso de lectura — se sincroniza mediante iCloud.

Importa tus archivos EPUB y TXT existentes a [GrepTag Reader](/es/grepreader/). El etiquetado automático se ejecuta inmediatamente en la importación. Disponible para iPhone, iPad y Mac.
