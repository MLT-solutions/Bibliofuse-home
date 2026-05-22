# Cómo transferir cómics al iPhone sin iTunes ni cables

Tu biblioteca de manga está en el Mac. Doscientos archivos CBZ, organizados por serie, cada volumen entre 80 y 200 MB. El iPhone es donde realmente lees: en la cama, en el tren, durante el almuerzo. Pasar esos archivos al móvil es el problema del que nadie habla.

El correo electrónico tiene un límite de 25 MB. AirDrop funciona, pero hay que enviar los archivos de uno en uno y aprobar cada transferencia. iCloud Drive puede sincronizarlos, pero subir 20 GB de cómics y esperar a que se descarguen no es práctico. La opción de compartir archivos en iTunes sigue existiendo, pero requiere un cable y una paciencia que la mayoría abandonó hace años.

[BiblioFuse](/es/) resuelve esto con la Transferencia Wi-Fi: un servidor web local integrado que te permite arrastrar toda una biblioteca de cómics desde cualquier navegador en tu Mac o PC directamente a tu iPhone, sin cables, sin instalar nada en el ordenador y sin subir nada a la nube. Esta guía explica el proceso completo.

## Qué hace realmente la Transferencia Wi-Fi

La Transferencia Wi-Fi ejecuta un pequeño servidor HTTP en tu iPhone, visible únicamente en tu red local. Cuando visitas la dirección que te proporciona (algo como `http://192.168.1.x:8080`) en cualquier navegador, accedes a una interfaz de carga con arrastrar y soltar. Arrastras archivos o carpetas desde el escritorio al navegador, y [BiblioFuse](/es/) los recibe directamente por Wi-Fi.

La palabra clave es *directamente*. Los archivos pasan de tu ordenador al iPhone sin tocar ningún servicio en la nube. Nada se sube a servidores de terceros. No necesitas tener sesión iniciada en nada. El único requisito es que ambos dispositivos estén en la misma red Wi-Fi.

La velocidad de transferencia la determina tu red local, no tu conexión a Internet. En un router doméstico típico, puedes esperar entre 15 y 40 MB/s. Un volumen de manga de 150 MB tarda unos cinco segundos.

## Paso 1 — Instala BiblioFuse

Si aún no lo has hecho, instala [BiblioFuse](/es/) desde el App Store. Es gratis y no necesita cuenta ni inicio de sesión.

Una vez instalada, crea dos carpetas en la app Archivos de iOS:
- **iCloud Drive → BiblioFuse** — almacenamiento sincronizado, accesible desde todos tus dispositivos Apple
- **En mi iPhone → BiblioFuse** — almacenamiento solo local, más rápido y sin retraso de sincronización

Los archivos transferidos por Wi-Fi llegan por defecto a la carpeta de almacenamiento local.

## Paso 2 — Activa la Transferencia Wi-Fi en el iPhone

1. Abre BiblioFuse
2. Toca **Ajustes** (parte inferior derecha de la pantalla de la biblioteca)
3. En **Importación Wi-Fi**, actívalo
4. Aparecerá una URL local: `http://192.168.x.x:8080`

Mantén BiblioFuse abierta y la pantalla encendida mientras se transfieren los archivos: iOS suspenderá el servidor si la app pasa a segundo plano.

## Paso 3 — Abre la URL en el ordenador

En tu Mac o PC, abre cualquier navegador (Safari, Chrome, Firefox, Edge) y escribe la URL que aparece en BiblioFuse. Verás una página sencilla con una zona de carga.

No necesitas instalar nada. Sin extensiones, sin apps, sin cuentas. La página se sirve directamente desde tu iPhone.

## Paso 4 — Arrastra los cómics

Arrastra tus archivos CBZ, CBR, ZIP, RAR o EPUB desde el Finder (o el Explorador de Windows) hasta la zona de carga del navegador. Puedes arrastrar:

- Un solo archivo
- Varios archivos a la vez
- Una carpeta entera con volúmenes

Cuando arrastras una carpeta, BiblioFuse recibe todos los archivos que contiene y conserva la estructura de carpetas. Si arrastras una carpeta llamada `Berserk` con 40 volúmenes, todos llegarán organizados bajo ese nombre en tu biblioteca.

Un indicador de progreso muestra el avance de cada archivo. Los lotes grandes, de 10 GB de cómics, pueden ejecutarse sin atención. No necesitas hacer clic en nada ni aprobar archivos individualmente.

## Paso 5 — Desactiva la Transferencia Wi-Fi

Cuando termine la transferencia, vuelve a BiblioFuse y apaga la Transferencia Wi-Fi. Es una medida de seguridad: el servidor solo es accesible en tu red local, pero apagarlo al terminar evita que otros usuarios de la red puedan acceder a él.

Los archivos transferidos aparecen automáticamente en la biblioteca. Toca cualquier portada para empezar a leer.

## Velocidades de transferencia de referencia

Estas cifras son aproximadas, basadas en una red doméstica moderna 802.11ac (Wi-Fi 5):

| Tamaño del archivo | Tiempo de transferencia |
|--------------------|-------------------------|
| 50 MB (volumen de manga pequeño) | ~2 segundos |
| 150 MB (volumen de manga típico) | ~5 segundos |
| 500 MB (CBZ grande) | ~15 segundos |
| 10 GB (serie completa) | ~5 minutos |

Las redes 802.11n más antiguas o los sistemas mesh con congestión serán más lentos. Acerca el iPhone al router si vas a transferir un lote grande.

## Otras formas de pasar cómics al iPhone

La Transferencia Wi-Fi es el método más rápido para colecciones grandes, pero no el único.

**Compartir desde la app Archivos** — Si el cómic ya está en iCloud Drive o en un USB conectado al Mac, mantenlo pulsado en la app Archivos y toca Compartir → BiblioFuse. Ideal para uno o dos archivos.

**Sincronización con iCloud Drive** — Copia los archivos en `iCloud Drive → BiblioFuse` en el Mac. Se sincronizarán automáticamente en el iPhone. El progreso de lectura también se sincroniza de esta manera, lo que es útil si lees en varios dispositivos. Inconveniente: hay que subir a iCloud primero, lo que puede ser lento con colecciones grandes.

**AirDrop** — Funciona para archivos individuales. Toca el icono de AirDrop, elige el iPhone y BiblioFuse ofrecerá abrir el archivo. No es práctico para series con muchos volúmenes.

**Tailscale / acceso remoto** — Si no estás en la misma red que el Mac, puedes usar Tailscale para crear una red virtual privada entre tus dispositivos y seguir usando la Transferencia Wi-Fi o la sincronización de iCloud de forma remota. Es una configuración avanzada, pero permite acceder a tu biblioteca desde cualquier lugar.

## Solución de problemas

**No puedo acceder a la URL desde el navegador.**
Asegúrate de que ambos dispositivos están en la misma red Wi-Fi. Algunos routers aíslan los dispositivos entre sí (llamado "aislamiento de clientes" o "aislamiento de AP"): revisa la configuración del router si los dispositivos no se ven entre sí.

**Los archivos se han transferido pero no aparecen en la biblioteca.**
Desliza hacia abajo en la biblioteca para actualizar. Comprueba la carpeta **En mi iPhone → BiblioFuse** en la app Archivos para confirmar que han llegado. Los archivos que queden fuera de la carpeta de BiblioFuse no se indexarán.

**La transferencia se ha interrumpido a mitad.**
Probablemente la pantalla se bloqueó y iOS suspendió la app. Vuelve a BiblioFuse, confirma que la Transferencia Wi-Fi sigue activa y reinicia la carga en el navegador. Los archivos ya subidos están a salvo.

**Los archivos CBR dicen "formato no compatible".**
Algunos archivos CBR muy antiguos usan RAR5, que no es compatible de forma universal. Vuelve a empaquetarlos como CBZ: extrae el RAR, selecciona todas las imágenes, comprime como ZIP y renombra `.zip` como `.cbz`. La pestaña Herramientas de BiblioFuse también puede ayudar con la conversión de formato directamente en el dispositivo.

## Qué hacer a continuación

Una vez que la biblioteca está en el iPhone, [BiblioFuse](/es/) ofrece varias herramientas para gestionarla mejor. La pestaña Herramientas permite comprimir archivos CBZ en el propio dispositivo, algo útil si un volumen de 200 MB puede reducirse a 40 MB sin pérdida visible de calidad. La función Biblioteca Mac en Casa va un paso más allá: en lugar de transferir archivos al iPhone, permite transmitir en tiempo real toda la biblioteca de cómics del Mac por Wi-Fi, sin necesidad de copiar nada.

Eso es todo el panorama: una transferencia por Wi-Fi que tarda minutos en lugar de la hora que solía requerir una sincronización con iTunes.
