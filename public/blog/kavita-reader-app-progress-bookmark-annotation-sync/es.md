# App lectora para Kavita en iPhone, iPad y Android: sincroniza progreso, marcadores y anotaciones

**Respuesta corta:** [BiblioFuse Reader](https://bibliofuse.com/es/comicreader/) se conecta a un servidor Kavita mediante la propia API de Kavita, no solo a través de su feed OPDS. Eso le permite sincronizar el progreso de lectura en ambos sentidos, sincronizar los marcadores y sincronizar los subrayados y notas de EPUB —incluido añadirlos, editarlos y eliminarlos— con las mismas anotaciones que ves en el lector web de Kavita. La configuración se hace con un solo escaneo de QR.

Esta guía explica qué se sincroniza, qué no, qué formatos de archivo son compatibles y cómo conectarte en menos de un minuto.

## Por qué el progreso de Kavita no suele sincronizarse en las apps de lectura

La mayoría de los lectores de terceros se comunican con Kavita por OPDS. OPDS es un protocolo de catálogo: sirve para listar series y entregar archivos, pero nunca se diseñó para devolver al servidor tu posición de lectura, tus marcadores o tus notas. La propia documentación de Kavita indica que la forma más completa de usar un servidor Kavita es a través de su API.

Así que, si alguna vez terminaste un tomo en el móvil y seguía apareciendo como no leído en Kavita, es casi seguro que la app usaba solo OPDS.

BiblioFuse utiliza directamente la API de Kavita. Tus series, volúmenes, capítulos, especiales, listas de lectura y colecciones aparecen igual que en Kavita, y lo que haces en el lector se escribe de vuelta en el servidor.

## Qué se sincroniza entre BiblioFuse y Kavita

| Función | Qué hace BiblioFuse en un servidor Kavita |
|---|---|
| Progreso de lectura | Se sincroniza en ambos sentidos. Abre un libro y se reanuda donde Kavita dice que lo dejaste; sigue leyendo y Kavita se actualiza. |
| Posición exacta en EPUB | Reanuda en el punto concreto dentro del capítulo, no solo en el capítulo. |
| Marcadores | Marcadores de página para cómics y PDF, y marcadores dentro del libro para EPUB, guardados en Kavita. |
| Subrayados | Los subrayados de EPUB se sincronizan mediante la API de anotaciones de Kavita, con los colores de subrayado de tu servidor. |
| Notas | Las notas de EPUB se sincronizan, incluidas las notas con formato escritas en el lector web de Kavita. |
| Gestión de anotaciones | Añade, edita y elimina subrayados y notas desde el lector o desde la lista de Anotaciones. Los cambios llegan al servidor. |
| Cambios sin conexión | Se guardan primero en el dispositivo y se envían cuando el servidor vuelve a estar accesible. |

Los subrayados y las notas que haces en BiblioFuse aparecen en el panel de anotaciones del lector web de Kavita, y las anotaciones creadas en la web aparecen en BiblioFuse la próxima vez que abres el libro.

## Formatos de archivo compatibles en un servidor Kavita

No todos los formatos admiten todos los tipos de sincronización. Es un límite de lo que Kavita almacena para cada formato, no un ajuste que puedas cambiar.

| Formato | Lectura | Progreso | Marcadores | Subrayados / notas |
|---|---|---|---|---|
| CBZ / CBR | En streaming, sin descarga completa | Se sincroniza | Marcadores de página | No compatible |
| EPUB | En streaming | Se sincroniza (por posición en el capítulo) | Se sincronizan | Se sincronizan (API de anotaciones de Kavita) |
| PDF | Sí | Se sincroniza (por página) | Marcadores de página | No compatible (las anotaciones de Kavita son solo para EPUB) |

En la práctica:

- **Cómics y manga (CBZ, CBR)** se abren página a página. No se descarga nada por completo salvo que decidas guardar el libro para leerlo sin conexión.
- **EPUB** lo tiene todo: progreso, marcadores, subrayados y notas.
- **PDF** mantiene sincronizados su página y sus marcadores de página. Kavita no almacena anotaciones para PDF, así que los subrayados de PDF se quedan en tu dispositivo.

## Cómo añadir tu servidor Kavita en menos de un minuto

Necesitas BiblioFuse Pro para las conexiones a servidores, la dirección de tu servidor Kavita y tu clave de autenticación de Kavita (en Kavita, abre tus ajustes de usuario y busca la sección de clave API o de clientes de terceros).

### Opción 1: escanear un código QR (la más rápida)

1. En un ordenador, abre el [generador de QR de BiblioFuse para Kavita y Komga](https://bibliofuse.com/es/tools/qr-generator/).
2. Elige **Kavita**, introduce la dirección de tu servidor y pega tu clave de autenticación. El código QR se genera en tu navegador; no se envía nada a ningún sitio.
3. En tu teléfono o tableta, abre **BiblioFuse > Ajustes > OPDS** y toca el **icono de escaneo de QR**.
4. Escanea el código. El servidor se añade con la dirección y la clave ya rellenadas.

Trata el código QR como una contraseña. Contiene tu clave de autenticación, así que no publiques una captura de pantalla.

### Opción 2: escribirlo a mano

Abre **BiblioFuse > Ajustes > OPDS > Añadir servidor**, elige Kavita e introduce a mano la dirección (por ejemplo `http://192.168.1.20:5000`) y la clave de autenticación.

Una vez añadido el servidor, abre el panel de Ubicación en la parte superior de la Biblioteca y elige tu servidor Kavita. La [guía de configuración](https://bibliofuse.com/es/guide/) completa incluye capturas de cada paso.

## Gestionar subrayados y notas

Selecciona texto en un EPUB de Kavita para subrayarlo o añadir una nota. En un libro de Kavita, el selector de color muestra los cinco colores de subrayado de tu servidor, así que un subrayado se ve igual en BiblioFuse y en el lector web de Kavita.

- **Añadir:** selecciona texto y elige Subrayar o Nota.
- **Editar:** selecciona dentro de un subrayado existente y elige Editar anotación, o edítalo desde la lista de Anotaciones. Puedes cambiar el color y la nota.
- **Eliminar:** quítalo desde el lector o desde la lista de Anotaciones. La eliminación se envía a Kavita.

La lista de Anotaciones muestra todos los subrayados y notas del libro actual, con búsqueda, y salta directamente al pasaje cuando tocas uno.

## Dispositivos compatibles

- **iPhone, iPad y iPhone Duo:** sincronización de progreso, marcadores y anotaciones, en BiblioFuse 2.1.15.
- **Apple Vision Pro:** bibliotecas de Kavita, progreso, marcadores y anotaciones en la app nativa de visionOS, en BiblioFuse 2.1.15.
- **Teléfonos y tabletas Android:** sincronización de progreso, marcadores y anotaciones, en BiblioFuse 2.0.16.
- **Apple TV y Android TV:** leen desde un host de BiblioFuse en tu propia red y no se conectan a Kavita.

La [matriz de funciones](https://bibliofuse.com/es/features/) indica qué admite cada plataforma y desde qué versión.

## ¿No tienes servidor Kavita? BiblioFuse tiene su propio host

Kavita es un servidor excelente, pero no lo necesitas. BiblioFuse incluye su propio host gratuito para Mac, PC con Windows, Docker y NAS Synology. Apúntalo a las carpetas que ya tienes y transmite a BiblioFuse en tus otros dispositivos por la Wi-Fi de casa o de forma remota con Tailscale.

La diferencia que conviene conocer: en un host de BiblioFuse, el progreso de lectura, los marcadores, los subrayados y las notas se sincronizan para **todos** los formatos compatibles —CBZ, CBR, PDF, EPUB y TXT— porque el host almacena las anotaciones él mismo en lugar de depender de una función del servidor para cada formato.

| | Servidor Kavita | Host de BiblioFuse |
|---|---|---|
| Funciona en | Docker, Windows, Linux, macOS | Mac, PC con Windows, Docker, Synology |
| Sincronización de progreso | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| Sincronización de marcadores | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| Sincronización de subrayados / notas | EPUB | CBZ, CBR, PDF, EPUB, TXT |
| Lector web | Sí | Sí (host NAS y Docker) |
| Servidor de biblioteca multiusuario | Sí | No: es un host de biblioteca personal |

Puedes usar ambos. Muchos lectores mantienen el manga en Kavita y añaden un host de BiblioFuse para una carpeta de PDF o archivos de texto. Consulta [BiblioFuse Reader](https://bibliofuse.com/es/comicreader/) para las descargas del host y el asistente de configuración.

## Komga y otros servidores OPDS

BiblioFuse también se conecta de forma nativa a Komga, con el progreso de lectura sincronizado en ambos sentidos y posición exacta en EPUB. La sincronización de marcadores y anotaciones es exclusiva de Kavita, porque Komga no tiene API para ello. Cualquier otro servidor OPDS 1.x funciona como catálogo, con streaming página a página cuando el servidor admite OPDS-PSE.

Si aún estás decidiendo cómo organizar una colección antes de ponerla en un servidor, la [guía de gestión de bibliotecas de cómics digitales](https://bibliofuse.com/es/blog/digital-comic-library-management-guide/) y la [comparativa CBZ vs CBR vs EPUB](https://bibliofuse.com/es/blog/cbz-vs-cbr-vs-epub-formats-explained/) son buenos puntos de partida.

## FAQ

**¿BiblioFuse sincroniza el progreso de lectura con Kavita?**
Sí, en ambos sentidos. BiblioFuse usa la API de Kavita, así que un libro se reanuda donde Kavita dice que lo dejaste y tu progreso se escribe de vuelta mientras lees. Funciona con CBZ, CBR, EPUB y PDF.

**¿Puedo sincronizar subrayados y notas con Kavita en iPhone o iPad?**
Sí, en libros EPUB. Los subrayados y las notas hechos en BiblioFuse se guardan mediante la API de anotaciones de Kavita y aparecen en el lector web de Kavita. Puedes añadirlos, editarlos y eliminarlos desde cualquiera de los dos lados.

**¿Por qué no se admiten subrayados en CBZ, CBR o PDF en Kavita?**
Kavita almacena anotaciones solo para EPUB. Los cómics y los PDF siguen sincronizando el progreso de lectura y los marcadores de página. Si necesitas que los subrayados y las notas de PDF o cómics se sincronicen, un host de BiblioFuse los admite en todos los formatos.

**¿Tengo que descargar un cómic entero para leerlo desde Kavita?**
No. Los CBZ y CBR se transmiten página a página. Si quieres, puedes guardar un libro para leerlo sin conexión.

**¿Cuál es la forma más rápida de añadir un servidor Kavita a BiblioFuse?**
Crea un código QR con el generador de QR de BiblioFuse en tu navegador, luego abre Ajustes > OPDS en la app y toca el icono de escaneo de QR. La dirección del servidor y la clave de autenticación se rellenan automáticamente.

**¿La compatibilidad con Kavita es gratuita en BiblioFuse?**
Leer archivos locales es gratis. Conectarse a servidores Kavita, Komga y OPDS forma parte de BiblioFuse Pro, disponible como suscripción mensual o anual o como compra única de por vida.

**¿BiblioFuse funciona con Kavita a través de internet?**
Sí. Si tu servidor Kavita es accesible desde fuera de casa —mediante un proxy inverso, una VPN o Tailscale—, introduce esa dirección y BiblioFuse se conecta del mismo modo.

**¿Puedo usar Kavita y un host de BiblioFuse al mismo tiempo?**
Sí. Ambos aparecen en el panel de Ubicación y cada uno conserva su propio progreso, marcadores y anotaciones.
