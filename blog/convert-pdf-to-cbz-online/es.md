# Cómo convertir PDF a CBZ online (sin software, sin subir archivos)

Descargaste una novela gráfica escaneada en PDF. Se abre sin problemas en Preview o Acrobat, pero en tu lector de cómics la experiencia deja mucho que desear: las páginas cargan despacio, el zoom pierde nitidez y pasar páginas no responde como debería. Sabes que CBZ es el formato adecuado para cómics. El problema es convertir sin instalar otra aplicación de escritorio ni enviar tus archivos a algún sitio desconocido.

La [BiblioFuse Web Tool](/es/webapp/) resuelve esto directamente en tu navegador. Sin cuenta. Sin subir archivos. Sin instalar nada. Tus archivos nunca salen de tu dispositivo.

## Por qué el PDF no es ideal para cómics

El PDF fue diseñado para documentos: maquetaciones con mucho texto pensadas para imprimir. Gestiona fuentes, gráficos vectoriales y reajuste de contenido de manera excelente. Para eso sirve.

Los cómics son otra historia. Un cómic escaneado es una secuencia de imágenes a página completa, una por página. El PDF envuelve esas imágenes con una estructura que añade peso al archivo sin añadir valor, usa un motor de renderizado más lento que un visor de imágenes dedicado e impide que los lectores de cómics almacenen en caché las páginas siguientes.

CBZ es un archivo ZIP con una secuencia numerada de imágenes. Casi sin carga adicional. Los lectores de cómics descomprimen las imágenes por adelantado, las guardan en memoria y el paso de página es instantáneo. La calidad del zoom depende únicamente de la imagen, no de un motor que intenta interpretar un formato documental.

Cuando conviertes un cómic en PDF a CBZ, extraes las imágenes de página en bruto del PDF y las reempaquetas como un ZIP. El resultado es un archivo para el que tu lector de cómics fue diseñado específicamente.

## Qué hace la BiblioFuse Web Tool

La [BiblioFuse Web Tool](/es/webapp/) funciona completamente en WebAssembly dentro de tu navegador. WebAssembly ejecuta código compilado en un entorno aislado, lo que permite al sistema procesar archivos de forma intensiva —algo que normalmente está reservado al software de escritorio nativo— sin enviar nada a un servidor.

Tus archivos se leen desde tu disco local directamente en la memoria del navegador. La conversión se ejecuta en la pestaña del navegador. El archivo de salida se escribe de vuelta en tu disco. Nada pasa por ningún servidor en ningún momento.

Esto importa si tus cómics incluyen contenido con licencia, archivos privados o simplemente archivos que no quieres que acaben en la nube de otra persona.

## Cómo convertir PDF a CBZ

**Paso 1: Abre la herramienta**

Ve a la [BiblioFuse Web Tool](/es/webapp/) en cualquier navegador de escritorio: Chrome, Firefox, Safari o Edge. No se requiere inicio de sesión ni cuenta. El nivel gratuito admite lotes de hasta tres archivos a la vez.

**Paso 2: Añade tus archivos PDF**

Haz clic en la zona de carga o arrastra tus PDFs directamente sobre ella. Puedes añadir varios archivos a la vez. La herramienta muestra cada archivo con su nombre y tamaño detectado. Si algún archivo es demasiado grande para la memoria disponible de tu navegador, verás un aviso antes de que empiece el procesamiento.

**Paso 3: Selecciona CBZ como formato de salida y convierte**

Elige CBZ como formato de salida entre las opciones de conversión. Haz clic en Convertir. La herramienta procesa cada archivo en orden, extrayendo las imágenes de página del PDF y empaquetándolas en un archivo CBZ. Un indicador de progreso te muestra en qué punto está el proceso. Cuando termina la conversión, los archivos de salida aparecen listos para descargar.

Los archivos descargados conservan el mismo nombre que los originales, con `.cbz` en lugar de `.pdf`.

## Calidad de imagen durante la conversión

Esta es la pregunta más habitual, y la respuesta depende de cómo se creó el PDF original.

**PDFs escaneados:** El caso más común para cómics y volúmenes de manga antiguos. El PDF contiene imágenes escaneadas almacenadas directamente en su interior. La conversión las extrae sin volver a codificarlas. Las imágenes dentro del CBZ son idénticas a las del PDF: sin ninguna pérdida de calidad, sin compresión adicional.

**PDFs renderizados:** Algunos PDFs se generan a partir de arte vectorial o maquetaciones basadas en texto. Convertirlos a CBZ rasteriza cada página a una resolución determinada. La [BiblioFuse Web Tool](/es/webapp/) usa una resolución alta por defecto, por lo que los resultados se ven nítidos a los niveles de zoom habituales de lectura.

**PDFs con compresión previa:** Si se aplicó compresión JPEG intensa al crear el PDF original, las imágenes extraídas reflejan esa compresión existente. La herramienta no añade más compresión, pero tampoco puede deshacer la que ya está integrada.

Para cómics escaneados —el escenario de conversión más habitual— se obtiene una extracción sin pérdidas. El CBZ suele tener un tamaño similar al PDF o ligeramente menor, sin cambios de calidad.

## Conversión por lotes de una serie

Si tienes una serie distribuida en varios volúmenes PDF, la [BiblioFuse Web Tool](/es/webapp/) te permite convertir el lote completo en una sola sesión. Añade todos tus PDFs a la vez, establece el destino en CBZ y comienza. Cada archivo se procesa y queda disponible para descargar individualmente a medida que se completa.

El nivel gratuito gestiona hasta tres archivos por lote. Para series más largas, ejecuta varios lotes en la misma sesión del navegador: no es necesario recargar la página entre lotes.

## Transferir archivos CBZ al móvil tras la conversión

Una vez completada la conversión y descargados tus archivos CBZ, tienes varias opciones cómodas para pasarlos al móvil:

**Transferencia Wi-Fi (la opción más rápida):** Si usas BiblioFuse en tu iPhone, la función integrada de [transferencia Wi-Fi](/es/) de la app te permite arrastrar archivos desde una ventana del navegador en cualquier ordenador de la misma red. Abre BiblioFuse, activa la transferencia Wi-Fi y arrastra tus archivos CBZ desde el navegador de tu Mac o PC directamente a la biblioteca. Sin cable USB, sin iTunes, sin almacenamiento en la nube.

**iCloud Drive:** Coloca los archivos en una carpeta de iCloud Drive vinculada a BiblioFuse y se sincronizarán automáticamente cuando tu teléfono esté en Wi-Fi.

**AirDrop:** En un Mac, selecciona tus archivos CBZ en el Finder, haz clic derecho y envíalos por AirDrop a tu iPhone. Pulsa "Abrir en BiblioFuse" cuando finalice la transferencia.

## Preguntas frecuentes

**¿La herramienta maneja PDFs con capas de imagen y texto?**

Sí. Los PDFs con una capa de imagen escaneada más una capa de texto OCR se gestionan correctamente: la herramienta extrae las imágenes visuales de cada página. La capa de texto no se traslada al CBZ (CBZ es un formato de archivo de imágenes por diseño), pero el PDF original permanece intacto.

**¿Cuál es el límite de tamaño de archivo?**

No hay un límite de tamaño estricto en la herramienta. Los límites prácticos dependen de la memoria disponible de tu navegador. La mayoría de los navegadores de escritorio manejan archivos de varios gigabytes sin problemas. Los archivos muy grandes en hardware antiguo pueden ser lentos, pero normalmente se completarán.

**¿Funciona en navegadores de móvil?**

Sí, aunque el rendimiento es notablemente más lento que en escritorio. Para PDFs grandes se recomienda usar un navegador de escritorio.

**¿Hay un límite de páginas?**

No. La herramienta procesa todas las páginas que contenga el PDF.

**¿Qué formato de imagen usa el CBZ?**

El CBZ contiene el formato de imagen que estuviera almacenado en el PDF de origen. En cómics escaneados suele ser JPEG. La herramienta no transcodifica las imágenes durante la conversión a menos que hayas activado la compresión como paso separado.

## Un flujo de trabajo completo: del PDF al móvil

La [BiblioFuse Web Tool](/es/webapp/) gestiona la conversión de PDF a CBZ sin necesidad de instalar software, crear una cuenta en la nube ni subir ningún archivo. Tus archivos permanecen en tu máquina durante todo el proceso.

Combinado con BiblioFuse en iPhone o iPad, obtienes un flujo de trabajo de principio a fin sin complicaciones: convierte en el navegador, transfiérelo al móvil por Wi-Fi y léelo en la app. No necesitas un gestor de cómics de escritorio, un servicio de sincronización ni ningún paso intermedio.

Si tienes una carpeta de cómics en PDF que llevas tiempo queriendo convertir, abre la [BiblioFuse Web Tool](/es/webapp/) ahora y arrastra el primer lote.
