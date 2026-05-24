# Transmite Tu Biblioteca de Comics del Mac al iPhone por Wi-Fi (Sin Copiar Nada)

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
