# Cómo sincronizar el progreso de lectura sin una cuenta en la nube

Estás en la mitad de una serie de manga en tu iPhone cuando coges el iPad y te encuentras de vuelta en la primera página. La sincronización en la nube soluciona esto, pero solo si estás dispuesto a iniciar sesión en un servicio de sincronización, confiar a un tercero los metadatos de tu biblioteca y aceptar que un corte de conexión puede dejar tu progreso desactualizado.

¿Y si no quieres eso? ¿Y si viajas sin conexión estable, no confías en los servicios en la nube con tus datos de lectura, o simplemente prefieres tenerlo todo en local?

[BiblioFuse](https://bibliofuse.com/es/) te ofrece varias formas de mantener el progreso de lectura sincronizado entre dispositivos sin depender de ninguna cuenta en la nube. Aquí te explicamos cómo funciona cada opción.

## Por qué sincronizar el progreso de lectura es más difícil de lo que parece

A primera vista, "sincronizar el progreso de lectura" suena trivial: solo hay que guardar un número. Pero una biblioteca de cómics tiene docenas o cientos de volúmenes, cada uno con su propio número de páginas y su última página leída. El progreso de lectura es un **estado por libro y por dispositivo** que puede cambiar simultáneamente en múltiples dispositivos. Sin un árbitro central (un servidor en la nube), dos dispositivos que están ambos fuera de línea pueden generar actualizaciones contradictorias.

Toda estrategia de sincronización solo local tiene que aceptar una compensación: imponer un modelo estricto de principal/réplica, aceptar que el último progreso escrito prevalece, o sincronizar solo cuando los dispositivos estén en la misma red.

La sincronización con iCloud de BiblioFuse gestiona el arbitraje automáticamente. Pero si iCloud no es una opción, los siguientes métodos te dan control a distintos niveles de automatización.

## Opción 1: Sincronización de biblioteca por Wi-Fi desde Mac (recomendada para uso en casa)

Si tienes un Mac con la función Biblioteca en Casa de BiblioFuse activa, tu iPhone puede conectarse a él por Wi-Fi. El Mac actúa como fuente de verdad tanto para los archivos como para el progreso.

**Cómo funciona:**

1. En tu Mac, abre BiblioFuse y activa el servidor de biblioteca en casa en Ajustes → Biblioteca en Casa.
2. En tu iPhone, toca el icono de red en la pestaña de biblioteca y selecciona tu Mac.
3. Tu iPhone muestra la biblioteca del Mac y lee los libros directamente desde el almacenamiento del Mac, sin copiar nada al iPhone.

El progreso se guarda en el lado del Mac. Cualquier dispositivo que lea desde la biblioteca del Mac registra el progreso allí. Cuando abres el iPhone y te vuelves a conectar al Mac, retomas la lectura exactamente donde la dejaste en la sesión del Mac.

**Limitaciones:** Requiere que ambos dispositivos estén en la misma red Wi-Fi. Funciona mejor en casa; no es adecuado para leer mientras viajas a menos que configures acceso remoto mediante VPN o Tailscale.

## Opción 2: Exportación e importación manual del progreso

BiblioFuse te permite exportar tu progreso de lectura como un archivo JSON e importarlo en otro dispositivo. Esta es la opción más portátil y apta para uso sin conexión: no se necesita ninguna red.

**Exportar desde el Dispositivo A:**

1. Ve a Ajustes → Biblioteca → Exportar progreso.
2. BiblioFuse guarda un archivo `.json` con la última página leída de cada libro en tu biblioteca.
3. Comparte este archivo por AirDrop, la app Archivos o cualquier otro mecanismo: no se necesita internet.

**Importar en el Dispositivo B:**

1. Recibe el archivo `.json` y ábrelo con BiblioFuse, o ve a Ajustes → Biblioteca → Importar progreso.
2. BiblioFuse combina el progreso importado con el progreso local existente, tomando el número de página más alto de cada libro (para que nunca retrocedas).

Este método funciona completamente sin conexión. AirDrop hace la transferencia casi instantánea cuando los dispositivos están cerca. El único paso manual es acordarse de exportar antes de cambiar de dispositivo: un hábito que se adquiere en pocos días.

## Opción 3: Sincronización basada en archivos con una unidad de red local o USB

Si gestionas tu biblioteca a través de la app Archivos, el progreso puede seguir al archivo del libro. BiblioFuse guarda el progreso por nombre de archivo en lugar de por ID en la nube. Esto significa:

- Si copias un archivo del Dispositivo A al Dispositivo B con el mismo nombre de archivo, BiblioFuse en el Dispositivo B no mostrará ningún progreso (el archivo es nuevo para ese dispositivo).
- Pero si copias tanto el archivo del libro **como** una exportación de progreso (Opción 2 anterior) al Dispositivo B y luego importas el archivo de progreso, retomará la lectura desde la página correcta.

Para los lectores que mantienen su biblioteca en un NAS o en una unidad SMB compartida, este método funciona bien: los libros permanecen en la unidad, los dispositivos se conectan cuando están en la red local, y el progreso se registra en cada dispositivo de forma independiente hasta que sincronizas manualmente el archivo de progreso.

## Opción 4: iCloud Drive sin una cuenta de sincronización en la nube

Vale la pena aclarar esto porque a menudo genera confusión: **iCloud Drive no es lo mismo que la sincronización con iCloud de BiblioFuse**.

La sincronización con iCloud de BiblioFuse usa `NSUbiquitousKeyValueStore` y CloudKit para sincronizar los metadatos del progreso de lectura. Esto requiere una cuenta de iCloud activa.

Sin embargo, puedes guardar tus **archivos de libros** en iCloud Drive (la app Archivos) sin activar la sincronización de progreso con iCloud de BiblioFuse. Con esta configuración:

- Los archivos de libros son accesibles desde cualquier dispositivo con el mismo Apple ID
- El progreso de lectura se registra localmente por dispositivo y **no** se sincroniza
- Aun así, necesitas usar las Opciones 1, 2 o 3 anteriores para sincronizar el progreso si quieres que sea coherente

Si usas iCloud Drive puramente como almacén de archivos y no quieres sincronizar el progreso, esta es una configuración limpia.

## Opción 5: Aceptar el progreso por dispositivo y usar marcadores

No todos los lectores necesitan una sincronización perfecta del progreso. Si principalmente lees un libro a la vez y no cambias de dispositivo a mitad de un volumen, el progreso por dispositivo funciona perfectamente.

BiblioFuse te permite crear marcadores en cualquier página. Un marcador es una posición guardada con nombre: puedes crear uno antes de cambiar de dispositivo y saltar a él inmediatamente en el otro dispositivo. Es un solo toque para crear y otro para saltar, lo cual para cambios de dispositivo ocasionales es más rápido que una sincronización completa.

## Cómo elegir la opción correcta

| Situación | Mejor opción |
|-----------|-------------|
| Lector en casa con Mac disponible | Biblioteca en Casa por Wi-Fi (Opción 1) |
| Viajando, sin conexión, dos dispositivos iOS | Exportación/importación manual por AirDrop (Opción 2) |
| Biblioteca en NAS o unidad compartida | Sincronización por archivos + exportación de progreso (Opción 3) |
| Cambio de dispositivo ocasional, un libro a la vez | Marcadores (Opción 5) |
| Apple ID pero sin nube de terceros | iCloud Drive para archivos + sincronización manual del progreso |

## El aspecto de la privacidad

[BiblioFuse](https://bibliofuse.com/es/) guarda el progreso de lectura localmente en tu dispositivo. Cuando la sincronización con iCloud está desactivada, ningún dato de lectura sale de tu dispositivo. Para los lectores que prefieren no tener sus hábitos de lectura almacenados en ningún servicio externo, ya sea por motivos de privacidad o simplemente por preferencia personal, el funcionamiento solo en local es un modo de primera clase, no una solución de emergencia.

Las opciones anteriores no son atajos para suplir una función que falta. Son la forma prevista de usar BiblioFuse cuando la sincronización en la nube no es adecuada para tu situación.

## Primeros pasos

1. [Descarga BiblioFuse](https://bibliofuse.com/es/) desde la App Store.
2. Importa tus archivos de cómics o ebooks a través de la app Archivos, transferencia Wi-Fi o Biblioteca en Casa del Mac.
3. Elige la estrategia de sincronización que se adapte a tus hábitos de lectura, o combínalas. Las Opciones 2 y 5 funcionan junto con cualquier otro método.

No tienes que renunciar a la comodidad cuando prescindes de cuentas en la nube. Un pequeño hábito — una exportación rápida por AirDrop antes de cambiar de dispositivo — mantiene el estado de tu biblioteca coherente sin confiar tus datos de lectura a nadie más.
