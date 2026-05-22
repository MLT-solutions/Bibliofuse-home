# Cómo leer cómics CBZ y CBR en el iPhone

Encontraste un archivo CBZ o CBR —un capítulo de manga, una novela gráfica, un cómic escaneado— y lo abriste en tu iPhone. No pasó nada. Ninguna aplicación se ofreció a abrirlo. No eres el único.

iOS no tiene soporte nativo para archivos CBZ o CBR. La aplicación Libros de Apple gestiona EPUB y PDF, pero ignora completamente los formatos de cómics basados en archivos comprimidos. Para leer esos archivos correctamente en tu iPhone, necesitas una aplicación especializada. [BiblioFuse](/es/) está diseñado exactamente para esto — lee CBZ, CBR, ZIP, RAR, EPUB, PDF y TXT, con un lector pensado para sesiones largas y colecciones grandes.

Esta guía explica todo: qué son estos formatos, cómo transferir archivos al iPhone y cómo conseguir la mejor experiencia de lectura.

## Qué son realmente CBZ y CBR

CBZ y CBR son formatos de archivo para cómics. No son una codificación especial — son archivos ZIP y RAR comunes con extensiones renombradas. Descomprime cualquier archivo `.cbz` y encontrarás una carpeta con imágenes secuenciales: `001.jpg`, `002.jpg`, en orden de lectura.

| Extensión | Contenedor | Uso habitual |
|-----------|-----------|-------------|
| CBZ | ZIP | Cómics occidentales, manga, escaneos de fans |
| CBR | RAR | Publicaciones antiguas de cómics, escaneos japoneses |
| ZIP | ZIP | Igual que CBZ sin la extensión renombrada |
| RAR | RAR | Igual que CBR sin la extensión renombrada |

El formato es intencionalmente simple. No tiene DRM, sin cifrado (a menos que lo añadas) y sin estructura propietaria. Por eso es el formato preferido en las comunidades de manga y cómics.

El problema en iPhone es que iOS solo abre archivos zip como un archivo genérico — no muestra las imágenes dentro como un cómic. Necesitas un lector que entienda la estructura de páginas secuenciales.

## Paso 1 — Instala BiblioFuse

[BiblioFuse](/es/) está disponible en el App Store. Es gratuito y no requiere cuenta.

Una vez instalado, crea dos carpetas en la app Archivos:
- **iCloud Drive → BiblioFuse** — para almacenamiento sincronizado entre todos tus dispositivos
- **En mi iPhone → BiblioFuse** — para almacenamiento solo local

No necesitas configurar nada antes de importar archivos.

## Paso 2 — Lleva tus cómics al iPhone

Hay tres formas principales de mover archivos CBZ o CBR a tu iPhone.

### Compartir desde la app Archivos

Si tu cómic ya está en iCloud Drive o en un Mac/PC accesible desde la app Archivos:

1. Abre la app **Archivos**
2. Navega hasta el archivo
3. Mantén pulsado el archivo y toca **Compartir**
4. Elige **BiblioFuse** en el menú de compartir

El archivo se importa de inmediato.

### Transferencia Wi-Fi — Ideal para colecciones grandes

La Transferencia Wi-Fi te permite arrastrar una carpeta entera de cómics desde tu Mac o PC a BiblioFuse sin cables ni iTunes.

1. En BiblioFuse, ve a **Ajustes → Importar por Wi-Fi** y actívalo
2. Aparece una URL local — algo como `http://192.168.1.x:8080`
3. Abre esa URL en el navegador de tu ordenador
4. Arrastra tus archivos CBZ o CBR a la ventana del navegador
5. Los archivos se transfieren directamente a la biblioteca de tu iPhone

Una vez completada la transferencia, desactiva Importar por Wi-Fi. Tus archivos aparecen automáticamente en la biblioteca.

### iCloud Drive — Para acceso entre dispositivos

Si lees en iPhone, iPad y Mac, guarda tus cómics en iCloud Drive.

1. En tu Mac, copia la carpeta de cómics a **iCloud Drive → BiblioFuse**
2. En tu iPhone, abre la app Archivos y espera a que se descarguen los archivos
3. Abre BiblioFuse — la carpeta aparece automáticamente en tu biblioteca

Los libros guardados aquí sincronizan el progreso de lectura entre todos tus dispositivos vía iCloud.

## Paso 3 — Abre un volumen y empieza a leer

Una vez que tus cómics están en la biblioteca, toca cualquier portada para abrirlo. BiblioFuse carga el archivo, extrae las páginas y muestra la primera página de inmediato.

### Navegación por páginas

- **Desliza a izquierda/derecha** — avanza o retrocede una página
- **Toca el borde derecho** — página siguiente
- **Toca el borde izquierdo** — página anterior
- **Toca el centro** — mostrar u ocultar controles de navegación

### Dirección de lectura

Para manga — que se lee de derecha a izquierda — puedes invertir la dirección de lectura. Toca el centro de la pantalla para abrir los controles, luego cambia la dirección a **De derecha a izquierda**.

### Páginas dobles

Muchos cómics occidentales tienen ilustraciones que ocupan dos páginas. Rota el iPhone a modo horizontal y [BiblioFuse](/es/) cambia automáticamente a la vista de página doble.

### Zoom

Pellizca para hacer zoom en cualquier página. BiblioFuse mantiene una renderización en alta resolución.

## Organizar una serie

Cuando importas varios volúmenes de la misma serie, BiblioFuse los agrupa por carpeta. Mantén pulsada cualquier portada para añadir una puntuación o etiqueta personalizada.

## Solución de problemas

**El archivo se transfirió pero no aparece en la biblioteca.** Desliza hacia abajo para actualizar la vista. Comprueba que el archivo esté en **En mi iPhone → BiblioFuse** en la app Archivos.

**Las páginas están en orden incorrecto.** Algunos archivos numeran páginas sin ceros iniciales. BiblioFuse lee los archivos en orden alfanumérico. Si el orden es incorrecto, es un problema de nombres en el propio archivo.

**Los archivos CBR no se abren.** Algunos CBR muy antiguos usan RAR5. Intenta reempaquetar el archivo como CBZ.

## Qué sigue

Una vez que tu primera serie esté importada, explora lo que más puede hacer [BiblioFuse](/es/). La pestaña Herramientas gestiona la compresión y conversión directamente en el dispositivo.
