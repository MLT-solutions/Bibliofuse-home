# Cómo extraer imágenes de archivos CBZ online (gratis, sin software)

La herramienta web de BiblioFuse te permite extraer imágenes individuales de archivos CBZ directamente en tu navegador: sin software que instalar, sin archivos que se suban a un servidor y sin cuenta necesaria. El proceso se ejecuta completamente en WebAssembly dentro de tu pestaña, por lo que tus cómics permanecen privados.

## Cuándo necesitas las imágenes de un CBZ

Un archivo CBZ es un archivo ZIP que contiene imágenes numeradas secuencialmente, típicamente páginas en JPEG o PNG de un cómic o manga escaneado. Hay muchas situaciones en las que necesitas las imágenes sueltas:

- **Imprimir una página específica:** tu impresora necesita un archivo de imagen, no un archivo cómico
- **Convertir a otro formato:** algunos conversores aceptan imágenes como entrada
- **Crear referencias o fan art:** quieres los archivos de página originales a resolución completa
- **Archivar scans de calidad:** extraer las imágenes permite inspeccionar la calidad y los metadatos
- **Reempaquetar:** dividir un CBZ grande en varios más pequeños por arco argumental

## Cómo funciona la herramienta web de BiblioFuse

[BiblioFuse Web](https://bibliofuse.com/es/webapp/) usa WebAssembly (WASM) para ejecutar la lógica de procesamiento directamente en tu pestaña del navegador. Cuando cargas el extractor de CBZ, el código de procesamiento se ejecuta en tu dispositivo: tus archivos nunca se envían a ningún servidor.

Este es el mismo enfoque que utilizan todas las herramientas web de BiblioFuse: conversión de PDF a CBZ, fusión de CBZ, compresión de EPUB y ahora extracción de imágenes. La arquitectura es deliberadamente privada porque las colecciones de cómics suelen contener contenido personal que los usuarios esperan que permanezca local.

## Paso a paso: extrae imágenes de un CBZ online

### Paso 1: Abre la herramienta web de BiblioFuse

Navega a la [aplicación web de BiblioFuse](https://bibliofuse.com/es/webapp/) en cualquier navegador moderno: Chrome, Firefox, Safari o Edge. Sin inicio de sesión, sin extensiones, sin registro.

### Paso 2: Selecciona el extractor de CBZ

En la página de la aplicación web, localiza la herramienta **Extraer imágenes de CBZ**. Haz clic para abrir la interfaz del extractor.

### Paso 3: Carga tu archivo CBZ

Haz clic en **Elegir archivo** o arrastra tu archivo CBZ a la zona de carga. El archivo se lee directamente desde tu disco sin ninguna solicitud de red.

### Paso 4: Elige las opciones de extracción

El extractor ofrece varias opciones:
- **Todas las imágenes:** extrae todos los archivos de imagen del archivo CBZ
- **Rango de páginas:** extrae solo las páginas que especifiques
- **Filtro de formato:** extrae solo archivos JPEG o solo PNG

### Paso 5: Extrae y descarga

Haz clic en **Extraer**. El motor WASM descomprime el CBZ, lee los archivos de imagen y los empaqueta en un archivo ZIP con las imágenes extraídas. El navegador inicia automáticamente la descarga.

### Paso 6: Descomprime y usa tus imágenes

Abre el archivo ZIP descargado con cualquier gestor de archivos. Encontrarás las imágenes numeradas en orden de lectura.

## Detalles del formato de archivo

Los archivos CBZ son archivos ZIP estándar. El extractor de BiblioFuse preserva los archivos de imagen exactamente como aparecen en el archivo, sin recomprimir, redimensionar ni alterar los datos de imagen. Lo que extraes es idéntico byte a byte a lo que estaba en el CBZ.

## CBZ vs. CBR: ¿qué pasa si mi archivo es CBR?

Los archivos CBR usan el formato de archivo RAR en lugar de ZIP. La herramienta web de BiblioFuse maneja archivos CBZ. Si tienes un CBR, primero conviértelo a CBZ (también disponible en la aplicación web de BiblioFuse) y luego extrae las imágenes del CBZ resultante.

## Privacidad y seguridad

Como el extractor se ejecuta completamente en tu navegador usando WebAssembly, no hay ningún servidor que reciba o almacene tus archivos:
- Tus colecciones personales nunca salen de tu dispositivo
- No se requiere cuenta
- Sin límites de tamaño de archivo impuestos por costes de servidor

## Preguntas frecuentes

**¿Es realmente gratuita la herramienta?**
Sí. Todas las herramientas web de BiblioFuse son gratuitas sin límites ni pago requerido.

**¿Qué formatos de imagen admite?**
El extractor maneja cualquier formato de imagen en un CBZ: JPEG, PNG, WebP, GIF, BMP y TIFF.

**¿Puedo extraer imágenes de archivos CBZ protegidos con contraseña?**
Primero necesitas eliminar la protección con contraseña usando SmartDecrypt, y luego extraer las imágenes del CBZ desprotegido.

**¿Qué tan grande puede ser un archivo CBZ?**
No hay un límite impuesto. El procesamiento está limitado por la memoria disponible de tu navegador.

**¿Las imágenes extraídas estarán en orden de lectura?**
Sí. El extractor preserva los nombres de archivo originales que determinan el orden de lectura.

## Extrae imágenes sin riesgo para tu privacidad

[Abre la aplicación web de BiblioFuse](https://bibliofuse.com/es/webapp/) y extrae las imágenes de tu CBZ en segundos, de forma completamente privada.
