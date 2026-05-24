# Cómo BiblioFuse sincroniza el progreso de lectura entre iPhone, iPad y Mac mediante iCloud

Estás leyendo un volumen de manga en el iPhone durante el trayecto — llegas a la página 80, luego cambias al iPad en casa y tienes que buscar entre las miniaturas de páginas para encontrar dónde lo dejaste. O lees un capítulo en el Mac y al día siguiente coges el iPhone, y resulta que sigue mostrando la página uno.

La sincronización del progreso de lectura suena sencilla pero falla sutilmente en la mayoría de los lectores. [BiblioFuse](/es/) usa iCloud para sincronizar tu posición de lectura exacta — incluidos número de página, dirección de lectura y ajustes de visualización — entre iPhone, iPad y Mac, sin pasos manuales.

## Por qué la sincronización del progreso es difícil de hacer bien

El enfoque básico — guardar un número de página en un documento en la nube — falla de varias maneras: no tiene en cuenta volúmenes con distintos recuentos de páginas en diferentes codificaciones, no sincroniza la dirección de lectura y no tiene mecanismo para marcar un volumen como terminado de forma que persista entre dispositivos.

[BiblioFuse](/es/) almacena los datos de progreso como metadatos vinculados al hash de contenido del archivo, no a su nombre. Esto significa que incluso si renombras un CBZ o lo mueves entre carpetas, los datos de progreso siguen coincidiendo correctamente en cualquier dispositivo.

## Configurar la sincronización con iCloud

En iPhone o iPad:
1. Ve a **Ajustes** del sistema
2. Toca tu Apple ID → **iCloud** → **iCloud Drive**
3. Busca **BiblioFuse** y confirma que el interruptor está activado

En Mac:
1. Abre **Ajustes del Sistema → Apple ID → iCloud**
2. Activa iCloud Drive y asegúrate de que BiblioFuse aparece en la lista

Una vez activados, BiblioFuse gestiona todo automáticamente. No hay botón «Sincronizar ahora»; los cambios se propagan en segundo plano cuando los dispositivos están en línea.

## Qué se sincroniza

**Posición de lectura.** El número exacto de página. Si cierras un volumen en la página 87, todos los demás dispositivos lo abrirán en la página 87.

**Dirección de lectura.** Si has configurado un volumen de manga como de derecha a izquierda, ese ajuste sigue al volumen en todos los dispositivos.

**Estado de finalización.** Marcar un volumen como leído en un dispositivo lo marca en todos.

**Etiquetas y valoraciones.** Las etiquetas y valoraciones de estrellas se sincronizan en todos los dispositivos.

## Cómo funciona la sincronización de archivos de iCloud Drive

[BiblioFuse](/es/) también usa iCloud Drive para los archivos de la biblioteca.

**Mac a iPhone**: Abre Finder y navega a **iCloud Drive → BiblioFuse**. Coloca cualquier archivo CBZ, CBR, EPUB o PDF en esa carpeta. Aparece en BiblioFuse en tu iPhone en minutos, listo para leer.

**iPhone a otros dispositivos**: Los archivos añadidos a BiblioFuse mediante Wi-Fi Transfer se almacenan en la carpeta iCloud de BiblioFuse y quedan disponibles en otros dispositivos.

## Wi-Fi Transfer para cargas masivas

Para la configuración inicial o transferencias masivas, Wi-Fi Transfer es más rápido que la sincronización de iCloud.

1. Abre **Ajustes → Importar por Wi-Fi** en la app
2. Actívalo
3. Visita la URL indicada en un navegador de la misma red Wi-Fi
4. Arrastra tu colección a la ventana del navegador

[BiblioFuse](/es/) recibe a velocidad de red local: 50–100 MB/s en una red doméstica típica.

## Mac Home Library: lee sin copiar archivos

Si tu colección principal está en un Mac y no quieres llenar el almacenamiento del iPhone, Mac Home Library es un enfoque diferente: hace streaming de los volúmenes directamente desde el Mac al iPhone por Wi-Fi local. No se copian archivos al dispositivo ni a iCloud.

Para activarlo:
1. Asegúrate de que BiblioFuse está instalado en tu Mac
2. En la app de Mac, ve a **Preferencias → Biblioteca Home** y activa el uso compartido
3. En el iPhone, abre BiblioFuse y cambia a la pestaña Biblioteca Mac

El progreso de lectura de las sesiones de Mac Home Library se sigue sincronizando mediante iCloud.

## Lectura sin conexión

Si lees sin conexión, BiblioFuse guarda el progreso localmente y lo sincroniza la próxima vez que el dispositivo se conecte. Si dos dispositivos entran en conflicto, gana el que tiene el número de página más alto.

## Comenzar

[BiblioFuse](/es/) es gratuito en la App Store para iPhone y iPad. La sincronización de iCloud está incluida sin nivel premium. Activa iCloud Drive para BiblioFuse en los ajustes del dispositivo y tu progreso empieza a sincronizarse de inmediato.
