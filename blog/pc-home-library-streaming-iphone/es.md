# Transmite tu biblioteca de cómics desde el PC con Windows al iPhone — Wi-Fi en casa y 5G fuera

Tu colección de cómics vive en un PC con Windows. Cientos de gigabytes de archivos CBZ, EPUB y PDF organizados exactamente como te gusta. Tu iPhone tiene 64 GB de almacenamiento, la mayor parte ya ocupada. La solución obvia —copiar archivos— significa gestionar dos copias de todo, quedarse sin espacio constantemente y transferir archivos cada vez que añades algo nuevo.

[BiblioFuse](https://bibliofuse.com/es/) lo resuelve de otra manera. La app BiblioFuse PC Reader para Windows incluye un servidor de streaming integrado. Tu iPhone se conecta al PC y transmite páginas bajo demanda — no se copia nada, no se sube nada y el almacenamiento de tu iPhone queda libre. La misma función que los usuarios de Mac han tenido ya está disponible de forma nativa en Windows, descargable desde la Microsoft Store.

## Cómo funciona el streaming de la biblioteca del PC

BiblioFuse PC Reader ejecuta un servidor HTTP local en tu máquina Windows. Cuando tu iPhone y tu PC están en la misma red Wi-Fi, la app de iOS descubre el PC automáticamente usando Bonjour (el mismo protocolo de red de configuración cero que impulsa AirPrint y AirDrop). Tu biblioteca aparece en tu iPhone sin necesidad de introducir una dirección IP ni configurar el router.

Cuando abres un volumen, BiblioFuse obtiene las primeras páginas de inmediato y precarga las siguientes mientras lees. Los archivos CBZ y CBR se transmiten página a página; los archivos EPUB y PDF usan solicitudes HTTP Range para que los archivos grandes se abran rápidamente sin descargar todo el contenido. La experiencia de lectura —modo derecha a izquierda, scroll vertical para webtoons, vista de doble página en horizontal— es idéntica a la de un archivo almacenado localmente. La única diferencia es de dónde provienen los datos.

El servidor sigue funcionando incluso después de cerrar la ventana de la app. En lugar de cerrarse, pasa a la bandeja del sistema. Eso significa que tu biblioteca sigue siendo accesible desde el iPhone aunque estés usando el PC para otra cosa. Para restaurar la ventana, haz doble clic en el icono de la bandeja. Para detener el servidor por completo, haz clic derecho en el icono de la bandeja y elige Salir.

## Parte 1: Streaming en tu Wi-Fi doméstica

Esta es la configuración más sencilla. Tanto tu PC como tu iPhone están en la misma red, y BiblioFuse gestiona el descubrimiento automáticamente.

### En tu PC

1. Descarga e instala **BiblioFuse PC Reader** desde la Microsoft Store.
2. Abre la app y ve a **Ajustes → Biblioteca personal**.
3. Haz clic en **Añadir carpeta** y selecciona la carpeta (o carpetas) donde están tus cómics y ebooks. Puedes añadir varias carpetas: una para manga, otra para novelas gráficas, otra para PDFs.
4. Activa **Compartir biblioteca**. El servidor se inicia de inmediato en el puerto 7341 y comienza a escanear tu biblioteca en segundo plano.
5. Opcionalmente, establece una **contraseña** en Ajustes → Seguridad para proteger el acceso. Si no lo haces, cualquiera en tu red local puede conectarse — correcto para uso doméstico, recomendado bloquearlo si estás en una red compartida o pública.
6. Puedes cerrar la ventana. El servidor sigue funcionando en la bandeja del sistema.

### En tu iPhone

1. Abre **[BiblioFuse](https://bibliofuse.com/es/)** en el iPhone.
2. Toca la pestaña **Biblioteca**.
3. Toca el selector de fuente en la parte superior — si tu PC está en marcha y el uso compartido está activado, **PC Biblioteca personal** aparece en pocos segundos.
4. Tócalo. La estructura de carpetas de tu PC aparece de inmediato.

Eso es todo. Tu biblioteca completa ahora se puede explorar y leer en el iPhone sin transferir ningún archivo al dispositivo. Cuando añades nuevos volúmenes a tu PC, aparecen en la vista del iPhone en la siguiente actualización de la biblioteca — no se requiere ningún paso de resincronización.

### Formatos compatibles

BiblioFuse PC Reader transmite cualquier formato que pueda leer localmente: **CBZ, CBR, EPUB, PDF y TXT**. Manga en CBZ, novelas gráficas en CBR, ebooks en EPUB, libros escaneados en PDF — todos compatibles con la misma conexión de streaming.

### Consejos de rendimiento

**Usa Wi-Fi de 5 GHz.** Si tu router emite bandas de 2,4 GHz y 5 GHz, asegúrate de que tanto tu PC como tu iPhone estén conectados a la de 5 GHz. El mayor ancho de banda marca una diferencia notable con archivos CBZ grandes de alta resolución.

**La biblioteca en SSD es más rápida.** Si tu colección de cómics está en un disco duro mecánico, la primera carga de páginas de cada nuevo volumen tendrá un pequeño retraso. Mover la biblioteca a un SSD (interno o externo) elimina este problema.

**Si el iPhone no encuentra el PC:** La app del PC muestra una dirección de red en Ajustes → Biblioteca personal cuando el uso compartido está activo. Comprueba que el Firewall de Windows no esté bloqueando el puerto 7341. También puedes introducir la IP local del PC manualmente en la app de iOS en Biblioteca → Añadir servidor → Manual.

## Parte 2: Streaming fuera de casa con 5G

El streaming por Wi-Fi doméstica solo funciona cuando ambos dispositivos están en la misma red. Para acceder a tu biblioteca desde una cafetería, hotel o cualquier lugar con 5G, necesitas conectar las dos redes. La solución es [Tailscale](https://tailscale.com) — la misma configuración que se describe en la [guía de BiblioFuse con Tailscale](/es/blog/tailscale-remote-library-access/).

Tailscale crea una red de malla cifrada y privada entre tus dispositivos. Una vez configurado, tu iPhone puede acceder al servidor de streaming de tu PC exactamente como si ambos estuvieran en la misma red local — a través de cualquier conexión a Internet, sin necesidad de reenvío de puertos ni IP estática.

### Configuración de Tailscale para streaming remoto

**En tu PC con Windows:**

1. Descarga Tailscale desde [tailscale.com](https://tailscale.com) o la Microsoft Store.
2. Inicia sesión con Google, GitHub, Microsoft o una cuenta gratuita de Tailscale.
3. Tailscale se ejecuta en la bandeja del sistema junto a BiblioFuse. Anota la dirección IP de Tailscale de tu PC (comienza con `100.`).
4. Asegúrate de que BiblioFuse PC Reader esté en marcha con Compartir biblioteca activado.

**En tu iPhone:**

1. Instala Tailscale desde la App Store.
2. Inicia sesión con la misma cuenta de Tailscale.
3. Activa el conmutador VPN de Tailscale.
4. Abre BiblioFuse en el iPhone. En Biblioteca → Añadir servidor, introduce la dirección IP de Tailscale de tu PC y el puerto `7341`.
5. Toca Conectar.

BiblioFuse prefiere automáticamente la IP de Tailscale cuando está disponible, por lo que la misma conexión guardada funciona tanto en casa (a través de LAN) como fuera (a través de Tailscale). No necesitas dos entradas de conexión separadas.

### Qué esperar con datos móviles

Tailscale establece conexiones entre pares cuando es posible, evitando servidores de retransmisión para un mejor rendimiento. Con una conexión 5G típica, el streaming de páginas de cómics funciona bien. BiblioFuse envía solo la página actual y precarga las siguientes — no transmite el archivo CBZ completo de una vez, así que un archivo de 200 MB no equivale a 200 MB de consumo de datos. Espera aproximadamente **1–3 MB por página** según la resolución de la imagen y la configuración de compresión del servidor.

Para leer con un plan de datos limitado, usa [BiblioFuse](https://bibliofuse.com/es/) para descargar volúmenes individuales por Wi-Fi antes de salir de casa. En la vista Biblioteca del PC en el iPhone, toca el icono de descarga junto a cualquier volumen para almacenarlo en caché localmente. Ese volumen queda disponible sin conexión, sin necesidad de Tailscale ni datos.

## PC vs Mac: ¿Qué es diferente?

Si has usado la app complementaria para Mac, la experiencia en PC es casi idéntica desde el lado de iOS. Algunas diferencias específicas de Windows:

- **Puerto:** El servidor del PC usa el puerto **7341** (la app de Mac usa por defecto el 8686).
- **Descubrimiento:** Ambos usan Bonjour/mDNS con el tipo de servicio `_bibliofuse._tcp`, por lo que iOS los descubre de forma idéntica.
- **Bandeja del sistema:** La app del PC permanece en la bandeja cuando se cierra la ventana; el servidor nunca se detiene hasta que eliges Salir.
- **Archivo de configuración:** Los ajustes del PC se guardan en `%APPDATA%\BiblioFuse\settings.json` si alguna vez necesitas inspeccionarlos o restablecerlos manualmente.
- **Un servidor activo a la vez:** En la versión actual, BiblioFuse iOS se conecta a un servidor Mac o PC, no a ambos simultáneamente. El equipo que esté en marcha y activo es el que iOS descubre primero.

Para más detalles sobre el streaming en Mac, consulta [Transmite tu biblioteca de cómics del Mac al iPhone por Wi-Fi](/es/blog/mac-home-library-streaming-iphone/).

## Preguntas frecuentes

**¿Tiene BiblioFuse una app para Windows?**
Sí. BiblioFuse PC Reader es una aplicación nativa de Windows disponible en la Microsoft Store. Lee archivos CBZ, CBR, EPUB, PDF y TXT localmente y transmite tu biblioteca completa a la app de iOS a través de tu red.

**¿Cómo transmito cómics desde mi PC con Windows al iPhone?**
Instala BiblioFuse PC Reader en Windows y activa Compartir biblioteca en Ajustes. Instala BiblioFuse en iPhone. En la misma red Wi-Fi, abre BiblioFuse en iPhone y toca Biblioteca — tu biblioteca del PC aparece automáticamente mediante descubrimiento Bonjour. No se necesita dirección IP ni configuración del router.

**¿Puedo acceder a mi biblioteca del PC con 5G cuando estoy fuera de casa?**
Sí, usando Tailscale. Instala Tailscale en tu PC con Windows y en tu iPhone, inicia sesión con la misma cuenta y actívalo en ambos dispositivos. BiblioFuse detecta la conexión Tailscale automáticamente y la usa para acceder a tu PC desde cualquier lugar — Wi-Fi de hotel, 5G, cualquier conexión a Internet.

**¿El streaming desde el PC usa el almacenamiento del iPhone?**
No. Las páginas se obtienen del PC bajo demanda; no se almacena nada en el iPhone más allá de la propia app y los datos de progreso de lectura. Puedes explorar y leer una biblioteca de 500 GB sin usar almacenamiento del iPhone para los archivos.

**¿Es necesario que el PC permanezca activo para que el streaming funcione?**
Sí. El servidor de streaming se ejecuta en el PC; si el PC entra en suspensión o el servidor se detiene, la conexión de iOS se interrumpe. Para evitar la suspensión durante el streaming, ve a Configuración de Windows → Energía y suspensión y establece la suspensión en Nunca, o usa una herramienta como PowerToys para mantener el equipo activo.

**¿Qué puerto usa el servidor de streaming del PC?**
El puerto 7341. Si tienes un firewall que bloquea el tráfico en este puerto, necesitarás añadir una excepción para BiblioFuse PC Reader.

## Cómo empezar

[BiblioFuse PC Reader](https://bibliofuse.com/es/) está disponible ahora en la Microsoft Store. BiblioFuse para iPhone está en la App Store. Instala ambos, apunta la app del PC a tu carpeta de biblioteca y toda tu colección estará en tu iPhone la próxima vez que abras la app — sin cables, sin nube, sin copias.
