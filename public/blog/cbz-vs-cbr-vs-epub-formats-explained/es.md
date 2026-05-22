# CBZ vs CBR vs EPUB — Formatos de Cómics y Ebooks Explicados

Estás mirando una página de descarga y ves cuatro tipos de archivo: CBZ, CBR, EPUB, PDF. Todos dicen ser "el mismo libro". ¿Cuál descargas? ¿Cuál funcionará en tu teléfono, tablet o Mac? ¿Y qué significan realmente esas extensiones de tres letras?

Esta guía aclara la confusión. Al final, sabrás exactamente qué es cada formato, de dónde viene, qué contiene y cuál es el adecuado para cada situación.

## La Respuesta Corta

| Formato | Contenido | Ideal para |
|---------|-----------|-----------|
| CBZ | Imágenes en un archivo ZIP | Cómics, manga, novelas gráficas |
| CBR | Imágenes en un archivo RAR | Lo mismo que CBZ, versiones antiguas |
| EPUB | HTML + imágenes en un ZIP | Ebooks de texto, novelas |
| PDF | Páginas en diseño fijo | Documentos, libros técnicos |

## CBZ — Comic Book ZIP

CBZ significa Comic Book ZIP. El formato tiene exactamente una regla: renombrar un archivo ZIP a `.cbz`. No hay codificación especial ni especificación. Abre cualquier `.cbz` con un descompresor y encontrarás una carpeta plana de imágenes numeradas en orden de lectura.

El formato CBZ se popularizó a principios de los 2000 porque resolvió un problema simple: los archivos de cómics necesitaban circular por internet, y ZIP era omnipresente. La extensión `.cbz` indicaba al software lector "esto es un cómic, muestra las imágenes en secuencia".

**Qué contiene:** Imágenes secuenciales, normalmente JPG o PNG, a veces WebP. Algunos archivos incluyen un `ComicInfo.xml` con metadatos. [BiblioFuse](/es/) lee estos metadatos para mostrar información correcta en la biblioteca.

**Soporte:** Universal. Todas las aplicaciones de cómics en todas las plataformas soportan CBZ. Es el formato predeterminado para colecciones digitales.

## CBR — Comic Book RAR

CBR significa Comic Book RAR. Mismo concepto que CBZ, pero el contenedor es un archivo RAR en lugar de ZIP.

RAR era popular en comunidades de intercambio de archivos cuando se realizaban la mayoría de los escaneos de cómics, por lo que los lanzamientos más antiguos suelen ser CBR. La estructura interna es idéntica. La única diferencia es el algoritmo de compresión. [BiblioFuse](/es/) soporta ambos formatos.

**¿Deberías convertir?** Si tienes una gran colección de CBR y quieres modernizarla, convertir a CBZ es razonable. La conversión no tiene pérdidas ya que simplemente se rearchivan los mismos archivos.

**Nota sobre RAR5:** Algunos archivos CBR muy antiguos usan RAR5, que el software más antiguo no puede abrir. Reempaquetar como CBZ siempre lo soluciona.

## EPUB — Electronic Publication

EPUB es un estándar W3C abierto diseñado para ebooks con mucho texto — novelas, no ficción. A diferencia de CBZ y CBR, el contenido es *texto*, no imágenes.

El EPUB es un archivo ZIP que contiene:
- **Archivos HTML o XHTML** — el texto de los capítulos
- **Hojas de estilo CSS** — tipografía, espaciado, diseño
- **Imágenes** — portada e ilustraciones
- **Manifiesto OPF** — lista todos los archivos y define el orden de lectura
- **Archivo NCX o NAV** — la tabla de contenidos

Las diferencias clave:
- **Reflujo:** El lector controla el tamaño de fuente, el espaciado y el color de fondo.
- **Accesibilidad:** Los lectores de pantalla pueden leer el texto en voz alta.
- **Búsqueda:** Puedes buscar cualquier palabra en un EPUB.

**DRM:** Muchos EPUB comerciales de librerías usan DRM de Adobe o FairPlay de Apple. Los EPUB sin DRM funcionan en cualquier lector, incluido [BiblioFuse](/es/).

## PDF — Portable Document Format

PDF es un formato de diseño fijo. A diferencia del EPUB, el autor controla exactamente dónde aparece cada elemento en cada página. PDF fue diseñado para impresión.

Para cómics, el PDF funciona pero no es ideal: los archivos suelen ser grandes y el zoom en el teléfono es incómodo. Para manuales técnicos y documentos escaneados, el PDF suele ser la mejor opción.

## ¿Qué Formato Descargar?

**Manga o cómics:** CBZ es la mejor opción. Si solo hay CBR disponible, descárgalo — son idénticos en la práctica.

**Novelas y ebooks de texto:** EPUB siempre. Es fluido, accesible y legible en cualquier tamaño de pantalla.

**Libros técnicos o escaneados:** PDF si el diseño importa; EPUB si la fuente lo ofrece.

## Compatibilidad en BiblioFuse

[BiblioFuse](/es/) lee todos estos formatos de forma nativa en iPhone, iPad y Mac: CBZ, CBR, ZIP, RAR, EPUB, PDF y TXT. La pestaña Herramientas permite conversión y compresión de formato directamente en el dispositivo.

## Nota sobre el Tamaño de Archivo

| Formato | Tamaño relativo | Motivo |
|---------|----------------|--------|
| CBZ con PNG | Mayor | Imágenes sin pérdida |
| CBZ con JPEG | Medio | Compresión con pérdida |
| CBZ con WebP | Menor | Compresión moderna |
| EPUB (texto) | Mínimo | El texto comprime muy bien |

Un volumen de manga en CBZ PNG suele pesar 300–400 MB. El mismo volumen comprimido a WebP pesa 40–80 MB — una reducción del 80% sin pérdida de calidad visible en la pantalla del teléfono.
