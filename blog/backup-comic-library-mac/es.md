# Cómo hacer una copia de seguridad de tu biblioteca de cómics en Mac: disco externo, NAS y opciones en la nube

BiblioFuse almacena tus cómics y libros electrónicos —EPUB, CBZ, CBR, PDF, ZIP, RAR y TXT— en iPhone, iPad y Mac, y transmite tu biblioteca del Mac directamente al iPhone por Wi-Fi sin copiar archivos. Para hacer una copia de seguridad de tu biblioteca de cómics en Mac, puedes usar Time Machine con un disco externo o NAS, copiar archivos a almacenamiento en la nube como iCloud Drive o Dropbox, o usar cualquier herramienta que replique una carpeta estándar. El progreso de lectura de BiblioFuse se sincroniza automáticamente mediante iCloud, así que tu posición en cada libro siempre queda guardada.

## Por qué es importante hacer copias de seguridad de tu biblioteca de cómics

Imagina esto: llevas cinco años descargando compras legales, escaneando tu colección física y curado cientos de volúmenes en CBZ, CBR, EPUB y PDF. Un martes por la mañana, el disco interno de tu Mac falla. Sin aviso. Sin segunda oportunidad. Todo desaparece.

O quizás estás actualizando a un Mac nuevo y no estás seguro de si el Asistente de Migración llevará tu biblioteca correctamente, o si tendrás que buscar archivos dispersos en carpetas que recuerdas vagamente haber creado en 2021.

En cualquier caso, una estrategia de copia de seguridad adecuada no es opcional cuando tu biblioteca merece protección.

## Por qué las bibliotecas de cómics son más difíciles de recuperar de lo que crees

La música y las fotos tienen servicios de streaming y sincronización en la nube como redes de seguridad. Los cómics y el manga son diferentes. Los archivos sin DRM —los rips CBZ que compraste, las novelas gráficas EPUB de Humble Bundle, los doujinshi que encontraste— son insustituibles una vez perdidos. Los editores no mantienen bibliotecas de descarga para siempre. Los archivos de traducciones amateur desaparecen. Los escaneos físicos que hiciste tú mismo no se pueden volver a escanear.

Una colección digital de cómics seria puede alcanzar fácilmente los 50 GB, 200 GB o más. Eso es mayor que la mayoría de las bibliotecas de fotos y mucho mayor que las bibliotecas de música típicas. Los tamaños de archivo hacen que la eliminación accidental sea más grave: no notarás un CBZ que falta en una carpeta con 800 volúmenes hasta que lo busques tres meses después.

## Cómo hacer una copia de seguridad de tu biblioteca de cómics en Mac

Los siguientes métodos funcionan de forma independiente o combinados. Usar dos métodos —local y en la nube— te da redundancia.

### Método 1: Time Machine (Recomendado para la mayoría de usuarios)

Time Machine es la forma más sencilla de hacer una copia de seguridad de tu Mac completo, incluida tu biblioteca de cómics.

1. Conecta un HDD externo, SSD o NAS a tu Mac.
2. Abre **Configuración del Sistema → General → Time Machine**.
3. Haz clic en **Añadir disco de copia de seguridad** y selecciona tu disco externo o NAS.
4. Time Machine hace copias automáticamente cada hora y guarda instantáneas horarias durante 24 horas, diarias durante un mes y semanales hasta que el disco se llene.

Time Machine es con versiones, por lo que si eliminas accidentalmente un volumen o sobrescribes una carpeta, puedes restaurar la versión exacta de la fecha en que estaba bien. No requiere configuración más allá de la configuración inicial.

### Método 2: Copia manual a disco externo

Para los lectores que quieren una copia portátil e independiente de su biblioteca, una copia manual a un disco externo es rápida y no requiere software.

1. Abre el **Finder** y navega hasta tu carpeta de biblioteca de BiblioFuse. La ubicación predeterminada es `~/Library/Containers/com.modernlogic.bibliofuse/Data/Documents/`, pero es posible que la hayas apuntado a una carpeta personalizada.
2. Selecciona la carpeta y arrástrala a tu disco externo.
3. Repite esto cuando añadas un número significativo de volúmenes nuevos.

Este método se combina mejor con Time Machine en lugar de usarse solo. Una copia manual te da un disco portátil que puedes llevar fuera de casa; Time Machine te da historial con versiones.

### Método 3: Almacenamiento en la nube (iCloud Drive, Dropbox, Google Drive)

El almacenamiento en la nube es ideal si quieres que tu biblioteca sea accesible en varios Mac o como copia de seguridad fuera del sitio.

**iCloud Drive:**
1. Mueve tu carpeta de biblioteca de cómics a `~/Library/Mobile Documents/com~apple~CloudDocs/` (tu carpeta de iCloud Drive en Finder).
2. Los archivos se sincronizan automáticamente con los servidores de Apple y con cualquier otro Mac que haya iniciado sesión con el mismo Apple ID.
3. Activa **Optimizar almacenamiento del Mac** en la configuración de iCloud solo si tu Mac tiene espacio en disco limitado; de lo contrario, mantén copias locales completas.

**Dropbox o Google Drive:**
1. Mueve tu carpeta de biblioteca a la carpeta de Dropbox o Google Drive en tu Mac.
2. El cliente de escritorio sincroniza los cambios automáticamente.
3. Ten en cuenta que las bibliotecas grandes (100 GB+) consumirán una parte significativa de tu cuota de almacenamiento en la nube.

La sincronización en la nube no es un sustituto de la copia de seguridad local. Si eliminas archivos accidentalmente, la papelera de la nube puede conservarlos solo durante 30 días.

### Método 4: NAS (Almacenamiento en Red)

Un NAS es la mejor solución para colecciones grandes. Los dispositivos de Synology, QNAP u otros fabricantes similares se conectan a tu red doméstica y proporcionan terabytes de almacenamiento redundante.

1. Monta el recurso compartido del NAS en Finder: **Ir → Conectarse al servidor** e introduce `smb://[IP-NAS]/[nombre-compartido]`.
2. Usa **rsync** para la sincronización automatizada. Abre Terminal y ejecuta:

```
rsync -av --delete ~/ruta/a/biblioteca-comics/ /Volumes/NAS-Share/biblioteca-comics/
```

3. Programa este comando como una tarea cron diaria o usa una herramienta como **Hazel** o **Automator** para activarlo automáticamente.

Un NAS con redundancia RAID significa que incluso si falla una unidad del conjunto, tus datos sobreviven. Combínalo con Time Machine apuntando a un recurso compartido del NAS para obtener lo mejor de ambos mundos: redundancia y versiones.

### Entendiendo la Biblioteca de Inicio de Mac de BiblioFuse

[BiblioFuse](/es/) incluye una función de Mac Home Library que transmite cómics desde una carpeta de tu Mac directamente a tu iPhone o iPad por Wi-Fi — sin copiar archivos, sin sincronizar, sin usar almacenamiento en el dispositivo.

Esta es una función de streaming, no de copia de seguridad. Los archivos viven en tu Mac. Si el disco de tu Mac falla, el iPhone no tiene nada que transmitir. **Aún necesitas hacer una copia de seguridad de la carpeta de origen en tu Mac** usando uno o más de los métodos anteriores.

Para encontrar la carpeta que BiblioFuse está transmitiendo, abre BiblioFuse en tu Mac y comprueba **Ajustes → Biblioteca de Inicio**. Esa ruta es la que debes incluir en tu estrategia de copia de seguridad.

## Consejos prácticos para mantener tu biblioteca organizada

**Usa Finder para localizar la carpeta de la biblioteca.** En Mac, pulsa **⌘ + Espacio** y escribe `~/Library/Containers/com.modernlogic.bibliofuse` para ir directamente al contenedor de la aplicación. Tus archivos están en la subcarpeta `Data/Documents/`.

**Usa rsync para copias de seguridad incrementales en NAS.** El indicador `--delete` garantiza que tu copia en el NAS refleje tu Mac exactamente, eliminando los volúmenes que hayas eliminado localmente. Ejecútalo semanalmente o después de importaciones masivas.

**Usa iCloud Drive para una copia de seguridad automática fuera del sitio.** Si tu biblioteca tiene menos de 50 GB y tienes un plan iCloud+, almacenar tu biblioteca en iCloud Drive es la copia de seguridad fuera del sitio con menos fricción disponible en un Mac.

**Separa tu progreso de lectura de tus archivos.** [BiblioFuse](/es/) sincroniza el progreso de lectura mediante iCloud automáticamente — no necesitas hacer una copia de seguridad de esto por separado. Centra tu estrategia de copia de seguridad en los archivos fuente.

## Preguntas frecuentes

**¿Dónde almacena BiblioFuse mis cómics en Mac?**
Por defecto, los archivos gestionados por BiblioFuse en Mac se almacenan en `~/Library/Containers/com.modernlogic.bibliofuse/Data/Documents/`. Si apuntaste la aplicación a una carpeta personalizada, esa carpeta es la raíz de tu biblioteca. En cualquier caso, la ruta es visible en los ajustes de BiblioFuse en Mac.

**¿Time Machine hace una copia de seguridad de la biblioteca de BiblioFuse automáticamente?**
Sí. Time Machine hace una copia de seguridad de todo tu Mac por defecto, incluido el contenedor de la aplicación donde BiblioFuse almacena los archivos. Si usas una carpeta de biblioteca personalizada fuera del contenedor, asegúrate de que no esté en la lista de exclusiones de Time Machine.

**¿Puedo mover mi biblioteca de cómics a un Mac nuevo sin perder mi progreso de lectura?**
Sí. Copia tu carpeta de biblioteca de cómics al nuevo Mac e inicia sesión con el mismo Apple ID. BiblioFuse restaura tu progreso de lectura desde iCloud. Apunta la aplicación a la misma ruta relativa de carpeta en el nuevo Mac y tu biblioteca aparecerá exactamente como estaba.

**¿Es iCloud Drive una copia de seguridad segura para bibliotecas de cómics grandes?**
iCloud Drive es una copia de seguridad fuera del sitio fiable, pero no es un sustituto de una copia de seguridad local. Si eliminas un archivo, iCloud lo guarda en la carpeta Eliminados recientemente durante 30 días. Para colecciones grandes, un disco externo o NAS sigue siendo esencial.

**¿Cómo automatizo las copias de seguridad rsync a un NAS?**
Abre **Terminal** y ejecuta `crontab -e`. Añade una línea como `0 2 * * * rsync -av --delete ~/Comics/ /Volumes/NAS/Comics/` para ejecutar una sincronización cada noche a las 2 a.m. Reemplaza las rutas con las rutas reales de tu biblioteca y montaje del NAS.

## Empieza a proteger tu biblioteca hoy

Una biblioteca de cómics construida durante años merece el mismo cuidado que cualquier otra colección digital irremplazable. El paso más rápido que puedes dar ahora mismo es conectar un disco externo y activar Time Machine — eso solo te protege contra fallos de hardware. Añade una copia de seguridad en la nube para protección fuera del sitio, y un NAS para colecciones grandes.

[BiblioFuse](/es/) hace que leer tu biblioteca sea fácil en iPhone, iPad y Mac. Combínalo con una sólida estrategia de copia de seguridad y tu colección estará protegida sin importar el hardware que venga y vaya.
