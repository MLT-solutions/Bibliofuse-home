# Gestiona tu biblioteca BiblioFuse: carpetas, transferencias y streaming desde Mac

[BiblioFuse](https://bibliofuse.com) está construido alrededor de una regla simple: tus archivos se quedan donde los pones. La app nunca mueve, renombra ni encierra los archivos en un formato propietario. Entender dónde viven los libros —y cómo llevarlos allí— marca la diferencia entre una biblioteca que trabaja para ti y una con la que estás peleando constantemente.

## Cómo añadir libros: cuatro caminos

### Mac y Android — Añadir carpeta

En Mac y Android, BiblioFuse vigila carpetas en lugar de poseer archivos. En la barra lateral, toca **Añadir carpeta** y señala cualquier ubicación: la carpeta de Descargas, un disco externo, un NAS. BiblioFuse indexa el contenido y detecta los cambios sin tocar los archivos.

### iOS — Copiar en la carpeta de BiblioFuse

iPhone e iPad usan un modelo de archivos con sandbox, así que copias los libros a una ubicación que la app puede ver. Hay dos opciones:

**iCloud Drive → BiblioFuse** — Abre la app Archivos y navega a iCloud Drive → BiblioFuse. Copia o mueve aquí tus carpetas de ebooks. Cada carpeta que agregues aparece como una carpeta separada en la lista de BiblioFuse. Los libros o archivos colocados directamente en la raíz de iCloud Drive → BiblioFuse (sin estar dentro de una subcarpeta) aparecen bajo una carpeta llamada **iCloud** en la app. Los libros almacenados aquí tienen seguimiento automático del progreso: tu posición de lectura se sincroniza entre iPhone, iPad y Mac. Retomas exactamente donde lo dejaste en cualquier dispositivo.

**En mi iPhone → BiblioFuse** — Para almacenamiento solo local, copia las carpetas aquí. Las carpetas aparecen igual en la lista, pero el progreso solo se guarda en ese dispositivo.

En ambos casos, copia carpetas —no archivos sueltos. Una carpeta con los volúmenes de una serie manga se convierte en una sola entrada con todos los volúmenes dentro.

### Transferencia por Wi-Fi

El servidor de importación incorporado te permite arrastrar archivos desde cualquier ordenador sin cables ni software de sincronización.

- **iOS**: Ve a **Ajustes → Importar por Wi-Fi** y actívalo. Aparece una URL local — ábrela en cualquier navegador de escritorio y arrastra los archivos. Los archivos van a **En mi iPhone → BiblioFuse → import** y aparecen en tu biblioteca automáticamente.
- **Android**: Tú eliges la carpeta de destino al configurar la Transferencia Wi-Fi.

### Libros procesados por la pestaña Herramientas

Cuando usas la [pestaña Herramientas](/es/webapp) para comprimir o combinar archivos, la salida va a:

- **iOS**: **En mi iPhone → BiblioFuse → export** — los archivos procesados aparecen aquí automáticamente.
- **Android**: Tú eliges la carpeta de salida al ejecutar las herramientas.

La [Herramienta Web de BiblioFuse](/es/webapp) realiza las mismas operaciones en cualquier navegador, útil en Windows o Linux. Para más detalles sobre el ahorro de espacio con la compresión, consulta nuestra [guía sobre tamaño de archivos de cómics y ebooks](/es/blog/reduce-comic-ebook-file-size).

### Mac: Enviar a iCloud con un solo clic derecho

Si estás leyendo en Mac y quieres tener un libro en tu iPhone, haz clic derecho en la portada del libro y elige **Enviar a iCloud**. BiblioFuse copia el archivo directamente a **iCloud Drive / BiblioFuse** — el mismo contenedor que tu iPhone está vigilando. Aparece en tu teléfono en minutos, sin ningún paso manual.

Para enviar varios libros a la vez, activa el modo de selección (el ícono de marca de verificación, arriba a la derecha), elige los libros que quieres y toca **Enviar a iCloud** en la barra de acción.

## La cuadrícula de la biblioteca: opciones al mantener pulsado

Mantener pulsada cualquier portada en iOS abre un menú contextual:

- **Abrir** — salta directamente a la lectura
- **Compartir** — pasa el archivo a otra app o envíalo a otro lugar
- **Renombrar** — cambia el nombre mostrado (no renombra el archivo en disco)
- **Editar metadatos** — añade etiquetas y una valoración de 1 a 5 estrellas
- **Eliminar** — aparece una confirmación con dos opciones:
  - *Quitar de la biblioteca* — elimina la entrada, deja el archivo intacto en disco
  - *Eliminar del almacenamiento* — elimina tanto la entrada como el archivo físico

Para enviar libros a la pestaña Herramientas, activa el modo de selección (mantén pulsado el primer libro y luego toca los demás). Aparece una barra en la parte inferior con un botón **Herramientas** (ícono de varita). Tócalo para poner en cola los libros seleccionados para comprimir o combinar.

## Streaming de tu biblioteca Mac al iPhone

Si tu colección principal está en un Mac, no necesitas copiar nada. [BiblioFuse](/es/) puede hacer streaming directamente desde Mac a iPhone — pero usa Tailscale en lugar del método Wi-Fi básico, que puede ser poco fiable cuando el teléfono cambia de red.

Tailscale crea una red privada encriptada entre tus dispositivos. Una vez configurado, tu iPhone puede llegar a tu Mac tanto si estás usando datos móviles como una Wi-Fi pública o la de casa.

### Paso 1: Instalar Tailscale en ambos dispositivos

1. Mac: descarga desde [tailscale.com/download](https://tailscale.com/download) o la Mac App Store.
2. iPhone: busca "Tailscale" en el App Store.
3. Inicia sesión con la **misma cuenta de Tailscale** en ambos.

Una vez conectados, ambos dispositivos pueden comunicarse de forma privada.

### Paso 2: Activar el streaming en Mac

En BiblioFuse para Mac, desplázate hacia abajo en la barra lateral izquierda hasta la sección **Streaming** y actívalo. Aparecen dos endpoints: uno para LAN/Wi-Fi y otro para **Remoto / Tailscale**. El de Tailscale es el camino fiable.

### Paso 3: Comprobar permisos en iPhone

Se necesitan dos permisos en iOS:

1. **Red local** — ve a **Ajustes → Privacidad y seguridad → Red local** y activa BiblioFuse.
2. **iCloud** — ve a **Ajustes → [Tu nombre] → iCloud** y activa BiblioFuse.

Verificación rápida: abre BiblioFuse en iPhone, ve a **Ajustes → Permisos**. Las marcas verdes indican que todo está bien; una marca roja lleva directamente al ajuste del sistema que hay que corregir.

### Paso 4: Conectar desde iPhone

1. Abre la pestaña **Biblioteca** en BiblioFuse.
2. En la barra lateral (panel izquierdo en iPad, toca el ícono de barra lateral en iPhone), desplázate hasta el final — la sección **Mac** lista los endpoints de streaming detectados.
3. Busca la entrada que tenga **(iCloud)** en el nombre, por ejemplo *MacBook Pro de Matt (iCloud)*.
4. Tócala. Espera entre 10 y 30 segundos para que se establezca la conexión segura.

Las carpetas de tu biblioteca Mac aparecen ahora en la barra lateral igual que el almacenamiento local. Navega y lee con normalidad.

### Qué se transmite y qué se descarga

| Formato | Comportamiento |
|---------|---------------|
| CBZ / CBR | Transmitido página a página — no requiere descarga, se abre al instante |
| EPUB / TXT | Se descarga primero al dispositivo y luego se abre |

**Nota sobre el progreso de lectura:** el progreso de las sesiones en streaming se guarda en la base de datos local de tu Mac, no en iCloud. No se sincronizará con otros dispositivos — permanece en el Mac.

## Consejos rápidos

- **iCloud es el método de sincronización más sencillo**: los libros en iCloud Drive → BiblioFuse aparecen en todos tus dispositivos Apple con seguimiento del progreso desde el primer momento.
- **La carpeta export es una zona de preparación**: tras comprimir en iOS, encuentra los resultados en En mi iPhone → BiblioFuse → export y muévelos donde los quieras guardar a largo plazo.
- **Comprueba los permisos si el streaming no funciona**: la mayoría de los problemas de conexión se deben a que la Red local o iCloud están desactivados.
