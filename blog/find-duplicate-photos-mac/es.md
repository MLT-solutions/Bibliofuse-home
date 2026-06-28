# Encontrar fotos duplicadas en Mac — Incluyendo HEIC, WebP y RAW

[Archive Duplicate Scanner](/es/) encuentra fotos duplicadas en Mac mediante hash perceptual, una técnica que identifica imágenes visualmente idénticas aunque tengan nombres de archivo distintos, formatos diferentes o ajustes de compresión variados. Es compatible con HEIC, WebP, JPEG, PNG, TIFF, RAW y docenas de otros formatos. La aplicación está disponible para Mac y Windows, y mueve los duplicados a la Papelera de forma segura en lugar de eliminarlos permanentemente.

## El problema de las bibliotecas de fotos que crecen sin límite

Tu biblioteca de fotos en Mac parecía manejable hace cinco años. Ahora tiene 40.000 archivos repartidos entre una carpeta de Descargas, un disco de copia de seguridad y tres exportaciones de iCloud. Tienes la misma foto de paisaje guardada como `IMG_4521.HEIC`, `IMG_4521-edited.JPG` y `landscape-final.webp`. Tienes ráfagas RAW donde sobrevivieron 11 fotogramas casi idénticos tras el descarte. Y cada migración de biblioteca —de iPhoto a Fotos de Apple y luego a un Mac nuevo— dejó otra capa de duplicados.

Las herramientas integradas no pueden ayudarte. Fotos de Apple tiene un buscador de duplicados básico para las fotos que ya están dentro de su biblioteca, pero pasa por alto los archivos dispersos por el Finder. Spotlight no compara el contenido visual de las imágenes. Los buscadores estándar de archivos duplicados comparan hashes byte a byte y fallan en cuanto dos archivos tienen una compresión JPEG diferente o uno fue reexportado.

## ¿Por qué el hash perceptual encuentra fotos duplicadas en cualquier formato?

El hash perceptual analiza el aspecto visual de una imagen, no sus bytes. Archive Duplicate Scanner calcula una huella visual compacta para cada foto. Dos imágenes que parecen idénticas al ojo humano producen la misma huella (o una muy similar), aunque una sea HEIC y la otra JPEG, aunque una haya sido reexportada al 85 % de calidad, e incluso si alguien cambió el nombre del archivo.

Esta es la diferencia clave respecto a un deduplicador genérico. Una herramienta genérica compara hashes SHA-256, es decir, solo identifica archivos idénticos byte a byte. El hash perceptual encuentra imágenes que son visualmente iguales pero técnicamente archivos distintos.

## Cómo encontrar fotos duplicadas en Mac paso a paso

1. **Descarga y abre Archive Duplicate Scanner** desde la Mac App Store o el sitio web del desarrollador.
2. **Añade tus carpetas de fotos** — arrastra la carpeta de exportación de tu biblioteca de Fotos, tu carpeta de Descargas y cualquier disco externo que quieras analizar. Puedes añadir varias carpetas en un solo análisis.
3. **Ejecuta el análisis** — la aplicación usa hash perceptual para crear una huella de cada imagen compatible. Una biblioteca de 10.000 fotos suele completarse en menos de dos minutos en un Mac con chip M.
4. **Revisa los grupos** — los duplicados aparecen agrupados. Cada grupo muestra el nombre del archivo, el formato, el tamaño, las dimensiones y una miniatura visual para que puedas confirmar la coincidencia.
5. **Elige tu estrategia de eliminación** — Archive Duplicate Scanner ofrece estrategias de selección automática: conservar el archivo más grande (mayor calidad), conservar el más antiguo (el original) o conservar el que está en una carpeta preferida. También puedes seleccionar manualmente.
6. **Mover a la Papelera** — la aplicación nunca elimina archivos de forma permanente. Los duplicados seleccionados se mueven a la Papelera del Mac para que puedas recuperar cualquier archivo eliminado por error.

## ¿Qué formatos de foto admite?

Archive Duplicate Scanner gestiona todos los formatos que encuentra un fotógrafo en Mac:

- **HEIC / HEIF** — el formato predeterminado del iPhone, incluidos archivos HDR y de modo Retrato
- **JPEG / JPG** — el formato universal, incluidas reexportaciones y versiones editadas
- **WebP** — cada vez más común en descargas de redes sociales y capturas de pantalla web
- **PNG** — capturas de pantalla y gráficos sin pérdida
- **TIFF** — escaneos de alta calidad y exportaciones en capas
- **Formatos RAW** — Canon CR2/CR3, Nikon NEF, Sony ARW, Fujifilm RAF, Adobe DNG y más
- **CBZ / CBR** — los archivos de cómics también son compatibles junto con las fotos

La función de coincidencia difusa de nombres de archivo encuentra grupos como `vacaciones-2023.jpg`, `vacaciones-2023(1).jpg` y `vacaciones-2023-copia.jpg` en segundos, incluso antes de que se ejecute la comparación de hash visual.

## Tres casos de uso prácticos

**1. Limpieza tras la migración**
Después de cada migración de Mac, el Asistente de Migración de Apple copia los archivos pero no elimina los duplicados. Si has migrado entre varios Macs, probablemente tienes dos o tres copias de tus fotos más antiguas. Ejecuta Archive Duplicate Scanner en tu carpeta de inicio para encontrarlas todas.

**2. Pares RAW + JPEG**
Muchas cámaras —y el modo ProRAW del iPhone— guardan simultáneamente un archivo RAW y un JPEG. Después de editar en Lightroom o Capture One, a menudo ya no necesitas el JPEG original. Archive Duplicate Scanner agrupa los archivos RAW con sus contrapartes JPEG para que puedas limpiar los extras sin ordenar manualmente por fecha.

**3. Acumulación de descargas de redes sociales**
Años guardando capturas de pantalla de Instagram y fotos descargadas generan decenas de copias de la misma imagen en diferentes resoluciones. El hash perceptual las detecta todas, incluso cuando los nombres de archivo son cadenas de dígitos aleatorios.

## Preguntas frecuentes

### ¿Archive Duplicate Scanner elimina las fotos de forma permanente?

No. La aplicación mueve los archivos a la Papelera del Mac. Nada se elimina permanentemente hasta que vacíes la Papelera tú mismo. Esto te proporciona una red de seguridad completa para recuperar cualquier archivo eliminado por error.

### ¿Puede encontrar duplicados entre diferentes formatos, como HEIC y JPEG?

Sí. El hash perceptual compara el contenido visual, no los bytes del archivo. Una foto guardada como HEIC y reexportada como JPEG se detectará como duplicado aunque los formatos de archivo y el contenido en bytes sean completamente distintos.

### ¿Cuánto tarda un análisis en una biblioteca grande?

En un Mac Apple con chip M, una biblioteca de 10.000 fotos suele completarse en menos de dos minutos. Las bibliotecas de más de 50.000 fotos tardan entre 5 y 10 minutos según la velocidad del disco y el formato del archivo. Los archivos HEIC con metadatos HDR tardan un poco más en decodificarse.

### ¿Encontrará ráfagas RAW casi duplicadas?

Sí, con el umbral de similitud ajustado a un nivel de sensibilidad más alto. Las ráfagas del mismo escenario parecen casi idénticas y producen hashes perceptuales muy similares. Puedes ajustar la sensibilidad para que el escáner las agrupe y luego conservar solo el fotograma más nítido.

### ¿Funciona con discos externos y almacenamiento en red?

Sí. Puedes añadir cualquier carpeta accesible en el Finder: discos internos, discos USB externos, tarjetas SD o volúmenes montados en red. El análisis se ejecuta localmente en tu Mac; no se sube ningún archivo a ningún servidor.

### ¿Está disponible Archive Duplicate Scanner para Windows?

Sí. Archive Duplicate Scanner está disponible tanto para Mac como para Windows. La versión de Windows tiene el mismo motor de hash perceptual y es compatible con los mismos formatos de archivo.

## Recupera tu almacenamiento sin riesgos

Una biblioteca de 40.000 fotos con un 30 % de duplicados desperdicia decenas de gigabytes de almacenamiento. Archive Duplicate Scanner te ofrece las herramientas para limpiarla de forma segura: hash perceptual que detecta duplicados visuales entre formatos, estrategias de selección automática que eliminan las conjeturas y eliminación solo a la Papelera que te mantiene protegido.

[Descarga Archive Duplicate Scanner](/es/) y comienza tu primer análisis hoy. Si también quieres comprimir o convertir por lotes tus colecciones de fotos, la [herramienta web de BiblioFuse](/es/webapp/) gestiona archivos EPUB, CBZ y PDF completamente en tu navegador.
