# Cómo limpiar una colección de manga duplicada de forma inteligente

Abres tu carpeta de manga y notas algo raro: el volumen 47 de *One Piece* aparece tres veces — uno llamado `one_piece_v47.cbz`, otro `OP_47_HQ.cbz` y un tercero enterrado en una subcarpeta llamada "backup_old". Conoces el problema. Todavía no sabes hasta qué punto es grave.

Para la mayoría de lectores de manga, los duplicados se acumulan en silencio durante años de descargas de diferentes fuentes, traslados de archivos entre discos y copias de seguridad que nunca se limpiaron. El resultado es almacenamiento desperdiciado, confusión al leer y sin manera fácil de saber qué versión tiene mayor calidad.

Esta guía explica un flujo de trabajo práctico para encontrar, revisar y eliminar manga duplicado usando [Archive Duplicate Scanner](/es/) — una utilidad para Mac diseñada específicamente para este problema.

---

## Por qué las bibliotecas de manga se desorganizan tanto

Los duplicados de manga no son aleatorios. Siguen patrones predecibles:

**Múltiples fuentes, nombres de archivo diferentes.** Descargaste el volumen 10 de un grupo hace años y luego lo volviste a descargar de otro sitio con mejor calidad de imagen. Mismo contenido, nombres de archivo completamente diferentes.

**Archivos reempaquetados.** Alguien renombró los archivos dentro de un CBZ, los recomprimió con diferente calidad y redistribuyó el resultado. Las imágenes son píxel a píxel idénticas, pero los checksums del archivo difieren por completo.

**Copias de seguridad que sobrevivieron.** Moviste tu biblioteca a un disco nuevo y conservaste la carpeta antigua "por si acaso". Seis meses después, ya no recuerdas que existe. Ahora tienes una segunda copia completa de 500 volúmenes.

**Reorganización de series.** Ordenaste tu biblioteca por nombre de serie, luego por año de publicación, luego por orden de lectura. Durante cada reorganización, se duplicaron archivos en el proceso.

Un buscador de archivos duplicados estándar no detectará la mayoría de estos casos porque compara checksums de archivos — y un archivo recomprimido tiene un checksum completamente diferente aunque contenga las mismas páginas. Necesitas una herramienta que entienda lo que hay *dentro* del archivo.

---

## Lo que hace Archive Duplicate Scanner de forma diferente

[Archive Duplicate Scanner](/es/) usa **hash perceptual** para comparar las imágenes reales dentro de tus archivos CBZ y CBR. En lugar de preguntar "¿son estos dos archivos idénticos byte a byte?", pregunta "¿contienen estos dos archivos las mismas páginas de cómic?"

Esto significa que detecta duplicados que han sido:

- Renombrados (nombre diferente, mismo contenido)
- Recomprimidos con diferente nivel de calidad
- Reempaquetados con estructura interna diferente
- Copiados a una carpeta o disco diferente

También funciona con imágenes directamente, no solo archivos comprimidos, así que si tienes una mezcla de páginas sueltas y volúmenes empaquetados, maneja ambos.

---

## Paso a paso: Limpiando tu biblioteca de manga

### Paso 1: Escanea tu carpeta de biblioteca

Abre Archive Duplicate Scanner y añade tu carpeta de manga — o varias carpetas si tu colección abarca varios discos. Puedes arrastrar y soltar carpetas directamente sobre la aplicación.

El escáner lee cada archivo CBZ y CBR que encuentra, extrae imágenes y genera hashes perceptuales para cada página. Esto ocurre completamente en tu Mac sin necesidad de conexión a internet.

Para una biblioteca grande (varios miles de archivos), el escaneo inicial puede tardar unos minutos. Los escaneos posteriores son más rápidos porque los hashes se guardan en caché.

### Paso 2: Revisa los pares coincidentes

Una vez completado el escaneo, Archive Duplicate Scanner presenta los pares coincidentes lado a lado. Para cada par puedes ver:

- La ruta de archivo de ambas copias
- Miniaturas para confirmar visualmente que son el mismo contenido
- Tamaño de archivo de ambos — útil para elegir la versión de mayor calidad
- Porcentaje de similitud si la coincidencia no es perfecta

Este paso de revisión es importante. El escáner señala coincidencias basadas en similitud perceptual, por lo que ocasionalmente puedes ver falsos positivos. Siempre revisa las miniaturas antes de eliminar.

### Paso 3: Selecciona qué eliminar

Usa la interfaz de revisión para marcar qué archivo quieres conservar y cuál eliminar. Una estrategia común:

- **Conserva el archivo más grande** — generalmente mayor resolución o menos comprimido
- **Conserva la versión de la carpeta de fuente confiable**
- **Conserva el archivo con el nombre más limpio** — más fácil de gestionar a largo plazo

### Paso 4: Mueve duplicados a la Papelera

Una vez revisado y seleccionado, envía los duplicados a la Papelera. Archive Duplicate Scanner mueve los archivos — no los elimina permanentemente. Esto significa que puedes recuperar un archivo si cometes un error.

Solo vacía la Papelera una vez que estés seguro de que se eliminaron los archivos correctos.

---

## Consejos para mantener tu biblioteca limpia

**Establece una sola carpeta "autorizada".** Mantén tu biblioteca curada en un lugar. Cuando descargues un nuevo volumen, muévelo a esa carpeta y elimina el original de tu directorio de descargas.

**Escanea después de cada sesión de descarga importante.** Ejecuta Archive Duplicate Scanner después de descargar un lote de nuevos volúmenes para detectar duplicados antes de que se multipliquen.

**Usa [BiblioFuse](/es/) para leer desde tu carpeta curada.** Cuando transmites tu biblioteca Mac a iPhone o iPad usando la función de streaming doméstico de BiblioFuse, lees desde la única fuente de verdad.

---

## Preguntas frecuentes

**¿Archive Duplicate Scanner eliminará mis archivos automáticamente?**
No. Mueve archivos a la Papelera, no los elimina permanentemente. Revisas cada coincidencia antes de que se elimine algo, y puedes restaurar desde la Papelera si es necesario.

**¿Qué formatos admite?**
CBZ, CBR y archivos de imagen. También admite archivos de imagen sueltos.

**Mis dos archivos tienen checksums completamente diferentes — ¿aun así encontrará la coincidencia?**
Sí. Archive Duplicate Scanner usa hash perceptual en las imágenes dentro de cada archivo, no el checksum del archivo. Los archivos recomprimidos, renombrados y con diferente estructura interna se emparejan basándose en contenido visual.
