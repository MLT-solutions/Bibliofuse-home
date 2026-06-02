# Accede a tu biblioteca de cómics desde cualquier lugar con BiblioFuse y Tailscale

BiblioFuse lee archivos CBZ, CBR, EPUB, PDF, ZIP, RAR y TXT en iPhone y iPad con iOS 17 o posterior. Su función Mac Home Library te permite transmitir toda tu colección de cómics desde el Mac al iPhone a través de la red Wi-Fi local, sin copiar archivos. Combinada con Tailscale, puedes extender esa misma conexión a través de internet y acceder a tu biblioteca desde cualquier parte del mundo.

Tienes 2 TB de manga en tu Mac en casa. Tu iPhone tiene 128 GB de almacenamiento — ni de lejos suficiente para guardarlos todos. Quieres leer esa biblioteca mientras viajas, sin mover archivos a la nube ni pagar por un servicio de sincronización aparte. Esta guía te muestra cómo lograrlo con [BiblioFuse](/es/) y el plan gratuito de Tailscale.

## ¿Qué significa acceder remotamente a tu biblioteca de cómics con BiblioFuse y Tailscale?

La función Mac Home Library de BiblioFuse convierte tu Mac en un servidor de transmisión para tu colección de cómics. Cuando tu iPhone y tu Mac están en la misma red Wi-Fi, puedes explorar y abrir archivos desde tu Mac directamente en BiblioFuse en tu iPhone — sin copiar, sin sincronizar, sin usar almacenamiento en el teléfono.

La limitación es "misma red." En el momento en que salgas de casa, la conexión se corta — tu Mac está detrás del router doméstico y tu iPhone ya no puede alcanzarlo directamente.

Tailscale resuelve esto creando una red cifrada de malla punto a punto entre tus dispositivos. Tu iPhone y tu Mac aparecen en la misma red virtual sin importar dónde se encuentren físicamente. Para BiblioFuse, eso significa que la conexión de Mac Home Library funciona exactamente igual a través de internet que en tu Wi-Fi doméstica.

## ¿Por qué BiblioFuse con Tailscale funciona mejor que el almacenamiento en la nube?

El almacenamiento en la nube es la alternativa obvia — sincroniza todo con iCloud Drive o Google Drive y accede desde cualquier lugar. Pero para grandes bibliotecas de cómics, la sincronización en la nube tiene límites reales:

- **Coste de almacenamiento.** 2 TB de iCloud cuestan 9,99 €/mes. El plan gratuito de Tailscale admite 100 dispositivos sin coste de almacenamiento.
- **Tiempo de carga.** Subir 2 TB a cualquier servicio en la nube lleva días con una conexión doméstica. Con Tailscale y BiblioFuse, transmites directamente desde tu Mac — no se requiere carga previa.
- **Privacidad.** Los archivos nunca salen de tu red. Tailscale enruta el tráfico de punto a punto; sus servidores de retransmisión solo gestionan la negociación de conexión, no tus archivos.
- **Experiencia de lectura.** La transmisión a través de [BiblioFuse](/es/) y Mac Home Library es rápida — las páginas se cargan al tocar, igual que con el almacenamiento local. Los archivos sincronizados en la nube requieren descarga completa antes de abrirse.

## Paso 1 — Configura Mac Home Library en BiblioFuse

Mac Home Library de BiblioFuse es una función que sirve las carpetas de cómics de tu Mac a la app del iPhone a través de la red local.

1. Instala **BiblioFuse** tanto en tu iPhone como en tu Mac (desde el App Store en cada plataforma)
2. En tu Mac, abre BiblioFuse y ve a **Ajustes → Mac Home Library**
3. Pulsa **Activar** — el Mac comienza a servir tu biblioteca en un puerto local
4. En tu iPhone, abre BiblioFuse y ve a **Biblioteca → Agregar fuente → Mac Home Library**
5. Tu Mac debería aparecer automáticamente en la red local. Tócalo para conectarte.

Verifica que funciona: explora una carpeta de tu Mac desde tu iPhone y abre un CBZ. Las páginas deben cargarse en uno o dos segundos. Una vez que funcione en Wi-Fi local, estás listo para añadir Tailscale.

## Paso 2 — Instala y configura Tailscale

Tailscale es una VPN construida sobre WireGuard. El plan gratuito admite hasta 100 dispositivos y cubre todo lo que necesitas aquí.

1. Ve a **tailscale.com** y crea una cuenta gratuita
2. Instala la **app de Tailscale** en tu Mac (disponible en el App Store o en tailscale.com/download)
3. Instala la **app de Tailscale** en tu iPhone (desde el App Store)
4. Inicia sesión en Tailscale en ambos dispositivos con la misma cuenta
5. En la app de Tailscale de tu Mac, confirma que muestra una dirección IP de Tailscale (normalmente `100.x.x.x`)
6. En tu iPhone, abre Tailscale y confirma que tu Mac aparece en la lista de dispositivos con estado verde

Ambos dispositivos están ahora en tu red privada de Tailscale. Pueden comunicarse independientemente de su ubicación física.

## Paso 3 — Conecta BiblioFuse a tu Mac a través de Tailscale

Con Tailscale en funcionamiento, BiblioFuse puede acceder a Mac Home Library usando la dirección IP de Tailscale.

1. En tu Mac, anota la dirección IP de Tailscale (mostrada en la app de la barra de menús — algo como `100.64.0.2`)
2. En tu iPhone, abre BiblioFuse y ve a **Biblioteca → Agregar fuente → Mac Home Library**
3. Si tu Mac no aparece automáticamente (no lo hará cuando estés en una red diferente), toca **Introducir dirección manualmente**
4. Escribe la dirección IP de Tailscale y el puerto que usa BiblioFuse (por defecto: `8080`)
5. Toca **Conectar**

Tu biblioteca del Mac ahora aparece en BiblioFuse en tu iPhone. Abre cualquier carpeta, toca cualquier volumen y se transmite a través de Tailscale exactamente igual que en la Wi-Fi local.

## Paso 4 — Mantenlo activo cuando te vayas de casa

Para que el acceso remoto funcione, tu Mac debe estar:

- **Despierto** — desactiva el modo de reposo para acceso a la red en **Ajustes del sistema → Batería → Opciones → Evitar que el ordenador se duerma automáticamente cuando la pantalla está apagada** (para Mac de escritorio) o configura un horario
- **Conectado a internet** — tu router doméstico permanece conectado mientras viajas
- **Con Tailscale en ejecución** — configura Tailscale para que se inicie al iniciar sesión en sus preferencias

En un MacBook, la opción "Evitar el reposo" requiere el adaptador de corriente. Si tu Mac es un MacBook desconectado, configura un horario específico: despertar a las 06:00 y dormir a las 23:00, por ejemplo.

## Casos de uso prácticos

**Leer una serie larga mientras viajas.** Tu colección completa de One Piece (107 volúmenes, ~15 GB como CBZ comprimidos) vive en tu Mac en casa. En un avión sin Wi-Fi no tendrás acceso, pero durante el viaje con cualquier conexión a internet (Wi-Fi del hotel, datos móviles), [BiblioFuse](/es/) transmite cada página bajo demanda. No estás descargando 15 GB; estás descargando páginas individuales a medida que lees.

**Leer con una conexión lenta.** Tailscale usa WireGuard, que es eficiente con datos móviles. Las páginas CBZ comprimidas (codificadas en WebP desde la pestaña Herramientas de BiblioFuse) suelen tener entre 200 y 500 KB cada una. A velocidades 4G de 10–20 Mbps, cada página se carga en menos de 0,1 segundos. Incluso en una Wi-Fi de hotel congestionada a 2 Mbps, las páginas se cargan en menos de un segundo.

**Gestionar una biblioteca familiar.** Añade el iPhone de tu pareja o una tableta a la misma cuenta de Tailscale (hasta 100 dispositivos en el plan gratuito). Toda la familia puede transmitir desde la misma biblioteca del Mac sin suscripciones separadas a la nube.

## Solución de problemas

**El Mac no aparece en BiblioFuse tras activar Tailscale.** Usa el método de entrada de IP manual con la IP de Tailscale de tu Mac. El descubrimiento automático depende de la difusión mDNS, que no cruza límites de red.

**Las páginas se cargan lentamente con datos móviles.** Comprime tus archivos CBZ usando la pestaña Herramientas de BiblioFuse o la [Herramienta Web de BiblioFuse](/es/webapp/) para reducir el tamaño de las páginas. Los archivos CBZ codificados en WebP a calidad 82 suelen ser entre un 75 y un 88 % más pequeños que los archivos basados en PNG.

**El Mac entró en modo de reposo.** Activa "Evitar que el ordenador se duerma automáticamente cuando la pantalla está apagada" en Ajustes del sistema, o usa el comando `caffeinate -i &` en Terminal para mantenerlo activo.

**La conexión de Tailscale se interrumpe.** Tailscale se reconecta automáticamente cuando cambian las condiciones de red. Si la conexión falla, cierra y vuelve a abrir BiblioFuse en tu iPhone para reintentar la conexión.

## Preguntas frecuentes

**¿Puedo acceder a mi biblioteca de cómics en casa de forma remota sin Tailscale?**
Sí, pero las alternativas son más complejas o menos privadas. El reenvío de puertos en el router expone tu Mac directamente a internet, lo cual supone un riesgo de seguridad. La sincronización en la nube requiere subir toda tu biblioteca primero. Tailscale proporciona acceso remoto cifrado y sin configuración sin exponer ningún puerto.

**¿Tailscale tiene algún coste para este caso de uso?**
El plan gratuito de Tailscale admite hasta 100 dispositivos en una sola cuenta personal sin tarifas de almacenamiento ni límites de ancho de banda. Para una biblioteca personal de cómics compartida entre tus propios dispositivos, el plan gratuito es suficiente de forma indefinida.

**¿Qué velocidad tiene la transmisión de cómics con datos móviles?**
Con archivos CBZ comprimidos (páginas WebP), las páginas individuales suelen pesar entre 200 y 500 KB. Con una conexión 4G a 10 Mbps, cada página se carga en menos de medio segundo. Incluso con una Wi-Fi de hotel más lenta a 2 Mbps, la experiencia de lectura es fluida.

**¿BiblioFuse funciona también con Tailscale en iPad?**
Sí. BiblioFuse es compatible con iPhone y iPad, y Tailscale también está disponible en iPad. La configuración es idéntica — instala ambas apps, inicia sesión en Tailscale y conéctate a la Mac Home Library usando la dirección IP de Tailscale.

**¿Mi colección de cómics es privada cuando uso Tailscale?**
Sí. Tailscale usa cifrado WireGuard para todo el tráfico entre dispositivos. Tus archivos se transmiten directamente entre tu iPhone y tu Mac en un túnel cifrado. Los servidores de Tailscale gestionan la coordinación de la conexión, pero nunca ven el contenido de tus archivos.

**¿Qué ocurre si mi Mac se reinicia mientras estoy fuera?**
Si Tailscale está configurado para iniciarse al iniciar sesión y Mac Home Library está configurada para ejecutarse al inicio en BiblioFuse para Mac, la conexión se restaura automáticamente tras el reinicio. Configura ambas apps para que se inicien al iniciar sesión para garantizar la continuidad.
