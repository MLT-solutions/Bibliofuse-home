# Accede a tu biblioteca de cómics desde cualquier lugar con BiblioFuse y Tailscale

Estás de viaje de trabajo, en la habitación de un hotel a las 10 de la noche sin nada que leer. Toda tu colección de cómics — 800 volúmenes perfectamente organizados — está en un disco externo conectado a tu Mac en casa. Normalmente tendrías que esperar a volver. Ya no.

La función de transmisión de biblioteca doméstica de BiblioFuse permite que tu iPhone se conecte a tu Mac como si estuvieran en la misma red Wi-Fi, aunque estés al otro lado del mundo. El puente que lo hace posible es Tailscale — una VPN en malla de configuración cero que funciona silenciosamente en segundo plano y no requiere reenvío de puertos, IP estática ni configuración del router.

## Por qué "súbelo a la nube" no es la respuesta

La alternativa obvia es sincronizar tu biblioteca con iCloud, Dropbox o Google Drive. Funciona para colecciones pequeñas. A escala, falla:

- Una biblioteca de cómics de 1 TB tarda semanas en subirse con una conexión residencial.
- El almacenamiento en la nube a esa escala cuesta 10–30 € al mes indefinidamente.
- Pierdes el control: cada página de cada cómic está en los servidores de otra persona.

El enfoque con Tailscale no sube nada. Tu biblioteca se queda en tu Mac. Tu iPhone obtiene las páginas bajo demanda a través de un túnel cifrado. No pagas nada por almacenamiento y tus archivos nunca salen de tu control.

## Cómo funciona la transmisión doméstica de BiblioFuse

BiblioFuse para macOS incluye un servidor HTTP integrado al que puede conectarse la app de iPhone. Cuando ambos dispositivos están en la misma red Wi-Fi, tu iPhone puede navegar por tu biblioteca Mac, transmitir páginas mientras lees y sincronizar el progreso de lectura, todo sin copiar archivos.

Tailscale extiende esa red local adonde quiera que estés, haciendo que la IP privada de tu Mac sea accesible desde cualquier dispositivo con Tailscale bajo tu cuenta, de forma segura y con cifrado extremo a extremo.

## Qué hace Tailscale

Tailscale está construido sobre WireGuard, un protocolo VPN moderno conocido por ser rápido y criptográficamente robusto. Crea una malla entre pares: cada dispositivo se conecta directamente a otros dispositivos de tu cuenta, sin enrutar el tráfico a través de un servidor central.

El resultado es una red privada — llamada tailnet — que abarca tu Mac en casa, tu iPhone donde estés y cualquier otro dispositivo que añadas. La configuración lleva unos 5 minutos.

## Configuración paso a paso

### En tu Mac

1. Descarga Tailscale desde [tailscale.com](https://tailscale.com) o la Mac App Store.
2. Inicia sesión con Google, GitHub, Microsoft o crea una cuenta gratuita de Tailscale.
3. Anota la dirección IP de Tailscale de tu Mac (por ejemplo, `100.x.x.x`).
4. Abre BiblioFuse en tu Mac y ve a **Preferencias → Servidor de biblioteca doméstica**.
5. Activa el servidor. El puerto predeterminado es `8686`.

### En tu iPhone

1. Instala Tailscale desde la App Store.
2. Inicia sesión en la misma cuenta de Tailscale que usaste en tu Mac.
3. Activa el interruptor de VPN de Tailscale.
4. Abre [BiblioFuse](https://bibliofuse.com/es/) en tu iPhone y ve a **Biblioteca → Conectar a Mac**.
5. Introduce la dirección IP de Tailscale de tu Mac y el puerto `8686`.
6. Toca Conectar. Tu biblioteca Mac aparece de inmediato.

## Rendimiento y ancho de banda

Tailscale establece conexiones directas entre pares cuando es posible. En una conexión Wi-Fi de hotel típica o en datos móviles (20–50 Mbps), la transmisión de páginas de cómics funciona cómodamente. Las páginas se cargan rápidamente porque BiblioFuse solo envía la página actual y precarga las siguientes.

## Privacidad y seguridad

La conexión de Tailscale está cifrada de extremo a extremo con WireGuard. Nadie más puede acceder a tu servidor de BiblioFuse. Tus archivos nunca pasan por ningún servidor de terceros.

## Preguntas frecuentes

**¿Mi Mac necesita estar despierto para que esto funcione?**
Sí. BiblioFuse funciona mientras tu Mac está activo. Desactiva el modo de reposo en Ajustes del Sistema → Batería.

**¿Funciona con datos móviles?**
Sí. Tailscale funciona sobre cualquier conexión a Internet. Transmitir cómics consume aproximadamente 1–3 MB por página según la configuración de compresión.

**¿Puedo usarlo con varios Macs?**
Sí. Añade cada Mac a tu cuenta de Tailscale y guarda cada uno como una conexión en BiblioFuse.

**¿Tailscale cuesta dinero?**
Tiene un nivel gratuito que admite hasta 3 usuarios y 100 dispositivos — más que suficiente para uso personal.

## Para empezar

Si aún no tienes [BiblioFuse](https://bibliofuse.com/es/), descárgalo desde la App Store para iPhone e iPad, y desde la Mac App Store para macOS. Tailscale es gratuito en [tailscale.com](https://tailscale.com).

La combinación de ambos hace que tu biblioteca doméstica se sienta siempre contigo, sin subir ni un solo archivo a la nube.
