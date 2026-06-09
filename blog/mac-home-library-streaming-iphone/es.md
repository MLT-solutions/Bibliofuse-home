# Transmite Tu Biblioteca de Comics del Mac al iPhone por Wi-Fi (Sin Copiar Nada)

BiblioFuse Mac Home Library te permite transmitir toda tu colección de cómics y libros del Mac al iPhone o iPad por Wi-Fi sin copiar ningún archivo al dispositivo y sin usar almacenamiento del iPhone. Funciona con bibliotecas CBZ, CBR, EPUB, PDF y TXT en un Mac junto a un iPhone o iPad con iOS 17 o posterior — sin configuración de red especial más allá de que ambos dispositivos estén en la misma red Wi-Fi.

Tu disco duro del Mac tiene 400 GB de archivos CBZ y EPUB — décadas de manga, novelas gráficas y comics escaneados. Tu iPhone tiene 64 GB en total, y la mayoría ya están ocupados. Probaste iCloud, pero va lento y consume almacenamiento. Probaste Wi-Fi Transfer para importar volúmenes sueltos, pero elegir archivos uno a uno no tiene sentido cuando tienes una colección completa.

Mac Home Library en [BiblioFuse](/es/) resuelve esto de forma diferente. En lugar de mover archivos al teléfono, los transmite en tiempo real. Tu Mac se convierte en un servidor local; tu iPhone los lee bajo demanda. No se copia nada. No se sube nada. Tienes tu biblioteca completa de 400 GB en el iPhone mientras estés en la misma red Wi-Fi.

## Qué es Mac Home Library

Mac Home Library es una función de transmisión local, no de sincronización. La diferencia es importante.

**Sincronización** (como iCloud) copia archivos al dispositivo. Para sincronizar 400 GB necesitas 400 GB libres en el iPhone — algo que la mayoría no tiene.

**Transmisión** no copia nada. El archivo permanece en el Mac; el iPhone obtiene las páginas conforme las lees. Cuando tocas un volumen en la vista Mac Library de tu iPhone, [BiblioFuse](/es/) solicita las páginas relevantes a través de la red local. Almacenamiento usado en iPhone: cero (salvo la propia app y los datos de progreso).

## Qué Necesitas

- Un iPhone con iOS 17 o posterior
- Un Mac en la misma red Wi-Fi que el iPhone
- [BiblioFuse](/es/) instalado en ambos dispositivos (la app iOS y el companion de Mac)
- Tu biblioteca de comics almacenada localmente en el Mac

## Configuración de Mac Home Library

La configuración tarda unos dos minutos y no requiere ninguna configuración especial de red.

**En tu Mac:**

1. Abre **BiblioFuse** (la app companion para Mac).
2. Ve a **Preferencias → Home Library**.
3. Haz clic en **Activar uso compartido de Home Library**.
4. Si macOS pide permiso para comunicarse en la red local, haz clic en **Permitir**.
5. Verás una URL local como `bibliofuse.local:8765` — esa es la dirección que usa tu iPhone.

**En tu iPhone:**

1. Abre **BiblioFuse** en el iPhone.
2. Toca la pestaña **Biblioteca**.
3. Toca el selector de fuente arriba — verás **Mac Home Library** junto a tu biblioteca local.
4. Toca **Mac Home Library**. Si tu Mac está encendido y el uso compartido activado, la conexión se completa en segundos y aparece toda tu biblioteca del Mac.

No hay que configurar direcciones IP, ajustes del router ni reenvío de puertos. BiblioFuse usa Bonjour para descubrir el Mac automáticamente en la red local.

## Navegación y Lectura

La vista Mac Library en el iPhone refleja la estructura de carpetas de tu Mac. Si organizas el manga por series, verás esas mismas carpetas.

Toca cualquier carpeta para ver los volúmenes. Toca un volumen para abrirlo. BiblioFuse obtiene las primeras páginas de inmediato. La carga de páginas es rápida — en una red Wi-Fi de 5 GHz, las páginas individuales llegan en menos de un segundo incluso con archivos CBZ de alta resolución.

La experiencia de lectura es idéntica a la de un volumen almacenado localmente: modo de derecha a izquierda para manga, desplazamiento vertical para webtoons, doble página en horizontal, zoom y desplazamiento.

## Cómo Funciona el Progreso de Lectura

El progreso de lectura de las sesiones de Mac Home Library se sincroniza a través de iCloud, igual que el progreso de los volúmenes almacenados localmente. Si lees hasta la página 87 de un volumen transmitido desde tu Mac, el iPhone registra la página 87 y la sube a iCloud. Si después abres el mismo volumen en tu iPad, se abre en la página 87.

## Diferencias con Wi-Fi Transfer e iCloud Sync

Estas tres funciones de [BiblioFuse](/es/) sirven para propósitos diferentes.

**Wi-Fi Transfer** mueve archivos del Mac al iPhone. Úsalo para construir tu colección local en el iPhone — volúmenes que quieres tener disponibles sin conexión.

**iCloud Sync** mantiene los archivos sincronizados entre dispositivos mediante el almacenamiento en la nube de Apple. Ideal para bibliotecas de tamaño moderado.

**Mac Home Library** transmite sin transferir. Úsalo para tu biblioteca completa en casa con buena Wi-Fi. Nada ocupa almacenamiento del iPhone; el Mac es la única fuente.

## Consejos para el Mejor Rendimiento

**Usa Wi-Fi de 5 GHz.** Asegúrate de que tanto el Mac como el iPhone estén en la banda de 5 GHz para el mejor rendimiento con archivos CBZ de alta resolución.

**Mantén el Mac despierto.** Si el Mac se duerme, la conexión de transmisión se interrumpe. Configura **Ajustes del Sistema → Batería → Impedir que el Mac se duerma** cuando está enchufado.

**La biblioteca en SSD es más rápida.** Si tu biblioteca está en un disco duro externo, los tiempos de acceso son más lentos que con SSD. Mover la biblioteca a un SSD elimina este retraso.

## Lectura sin conexión desde la Biblioteca del Mac

Si sabes que estarás sin Wi-Fi, puedes descargar volúmenes individuales de la biblioteca del Mac a tu iPhone antes de salir.

En la vista Mac Library del iPhone, toca el **icono de descarga** junto a cualquier volumen. BiblioFuse lo copia al almacenamiento local del iPhone por Wi-Fi Transfer. Después, el volumen está disponible sin conexión.

## Primeros Pasos

[BiblioFuse](/es/) está disponible en el App Store para iPhone y iPad. Mac Home Library es parte de la app estándar, sin nivel premium. Instálalo en tu Mac y en tu iPhone, activa el uso compartido en las Preferencias del Mac, y toda tu biblioteca estará disponible en el iPhone la próxima vez que estés en la misma red.


## Preguntas frecuentes

**¿Qué es Mac Home Library en BiblioFuse?**
Mac Home Library es una función de BiblioFuse que transmite tu biblioteca de comics y libros del Mac directamente al iPhone o iPad por Wi-Fi. No se copian archivos al dispositivo, así que no usa almacenamiento del iPhone. Requiere BiblioFuse instalado en Mac e iPhone, y ambos en la misma red Wi-Fi (o Tailscale para acceso remoto).

**¿Cuánto almacenamiento del iPhone usa Mac Home Library?**
Cero almacenamiento para archivos CBZ y CBR, que se transmiten página a página bajo demanda. Los archivos EPUB y TXT se descargan temporalmente al dispositivo para lectura, pero se pueden eliminar después. Puedes navegar y leer colecciones de cientos de GB sin usar nada del almacenamiento del iPhone.

**¿Puedo acceder a Mac Home Library fuera de casa?**
Sí, con Tailscale. Tailscale crea una red privada cifrada entre tus dispositivos, permitiendo al iPhone alcanzar tu Mac desde datos móviles o Wi-Fi público. Sin Tailscale, la conexión solo funciona en la misma red Wi-Fi local.

**¿El progreso de lectura se sincroniza al usar Mac Home Library?**
Sí. El progreso de lectura de las sesiones de streaming se guarda en la base de datos local del Mac. Si activas iCloud para BiblioFuse, el progreso se sincroniza a otros dispositivos como de costumbre.

**¿Mac Home Library funciona con todos los formatos de archivo?**
CBZ y CBR se transmiten página a página — se abren al instante sin descargar el archivo completo. Los archivos EPUB y TXT se descargan primero al dispositivo y luego se abren. Todos los formatos admitidos por BiblioFuse están disponibles a través de Mac Home Library.
