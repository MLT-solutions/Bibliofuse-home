# Cómo convertir ZIP a CBZ online: renombra archivos de cómics en segundos

Tienes un archivo ZIP lleno de imágenes de cómics y tu lector no lo reconoce. La solución toma unos tres segundos: los archivos CBZ son archivos ZIP con una extensión diferente. Renombra el archivo y el lector lo reconoce como un cómic. La [herramienta web de BiblioFuse](https://bibliofuse.com/es/webapp/) puede hacer esto en el navegador: sin subir nada, sin software, sin cuenta.

## Por qué tu lector de cómics ignora los archivos ZIP

La mayoría de los lectores de cómics identifican tipos de archivo por extensión, no por contenido. Un archivo llamado `capítulo-01.zip` parece un archivo genérico. El mismo archivo renombrado a `capítulo-01.cbz` se reconoce inmediatamente como un contenedor de cómic. No hay diferencia en los bytes, solo cambia el nombre.

CBZ significa Comic Book ZIP. El formato CBZ fue creado para darle a los lectores de cómics una extensión reconocible. Siempre contiene un ZIP con imágenes nombradas de forma que se ordenen en el orden de lectura correcto. CBR usa el mismo concepto con un archivo RAR.

## Opción 1 — Renombrar el archivo directamente

El método más rápido es simplemente renombrarlo. En Mac o Windows, cambia la extensión de `.zip` a `.cbz` en Finder o Explorador de archivos. En iOS es ligeramente más complicado:

1. Abre la app **Archivos** y navega hasta el archivo ZIP.
2. Mantén presionado el archivo → **Renombrar**.
3. Cambia `.zip` por `.cbz` y toca **Listo**.

iOS puede advertirte sobre cambiar la extensión. Confirma el cambio. El archivo es ahora un CBZ que cualquier lector de cómics — incluido [BiblioFuse para iPhone](https://bibliofuse.com/es/) — abrirá sin problemas.

## Opción 2 — Usar la herramienta web de BiblioFuse

La [herramienta web de BiblioFuse](https://bibliofuse.com/es/webapp/) se ejecuta completamente en tu navegador usando WebAssembly. Tus archivos nunca salen de tu dispositivo — nada se sube a un servidor.

Para convertir ZIP a CBZ:
1. Ve a **[bibliofuse.com/es/webapp](https://bibliofuse.com/es/webapp/)** en cualquier navegador moderno.
2. Selecciona la herramienta **Convertir**.
3. Arrastra tu archivo ZIP o haz clic para seleccionarlo.
4. Elige **ZIP → CBZ** como formato de salida.
5. Haz clic en **Convertir** y descarga el resultado.

El CBZ resultante contiene exactamente las mismas imágenes que el ZIP de entrada, en el mismo orden, sin recodificación ni pérdida de calidad.

## Conversión por lotes

Si tienes docenas de archivos ZIP, la herramienta web admite entrada múltiple: arrastra varios ZIPs a la vez y produce un CBZ para cada uno.

## Qué hay dentro de un CBZ

Un CBZ es un ZIP con imágenes ordenadas alfabéticamente por nombre de archivo. El lector las muestra en ese orden. Convención recomendada: `0001.jpg`, `0002.jpg`... (con ceros al inicio). Si tus archivos se llaman `1.jpg`, `2.jpg`... `10.jpg`, se ordenarán como `1, 10, 2, 3...` sin relleno de ceros.

## ¿Qué pasa con los archivos CBR?

CBR usa RAR en lugar de ZIP. Convertir CBR a CBZ requiere extraer el RAR y reempaquetarlo como ZIP. La herramienta web de BiblioFuse también maneja esto: selecciona **CBR → CBZ** y reempaqueta las imágenes en un ZIP con extensión CBZ.

## Conclusión

CBZ es ZIP disfrazado. Renombrar la extensión es todo lo que se necesita en la mayoría de los casos. Cuando quieras una solución en el navegador que maneje conversión por lotes sin subir archivos, la [herramienta web de BiblioFuse](https://bibliofuse.com/es/webapp/) convierte ZIP a CBZ en segundos — completamente privado, sin necesidad de software.
