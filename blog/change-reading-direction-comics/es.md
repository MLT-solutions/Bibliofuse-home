# Cómo cambiar entre lectura de izquierda a derecha y de derecha a izquierda en BiblioFuse

La mayoría de los cómics occidentales se leen de izquierda a derecha: pasas la página deslizando hacia la derecha, los paneles fluyen desde la esquina superior izquierda y la historia avanza en la misma dirección que un libro normal. El manga japonés lo invierte todo — los paneles corren de derecha a izquierda, la primera página está en el lado derecho del volumen y deslizas hacia la izquierda para avanzar. Si lees ambos formatos, necesitas un lector que los maneje sin tener que reconfigurar cada vez que cambias de serie.

[BiblioFuse](https://bibliofuse.com/es/) guarda la dirección de lectura como preferencia por libro, de modo que tu biblioteca de manga se lee de derecha a izquierda y tus cómics occidentales de izquierda a derecha, sin ningún ajuste manual entre sesiones.

## Por qué importa la dirección de lectura

Es fácil subestimar el impacto de no configurarla correctamente. Abre un manga en modo LTR y leerás la historia al revés — los paneles que deberían ir de derecha a izquierda aparecen de izquierda a derecha, arruinando el ritmo y los chistes. La confrontación al final del capítulo se convierte en el saludo del inicio.

El problema se complica con el manhwa (webcómics coreanos) y el manhua (cómics chinos). La mayoría del manhwa usa desplazamiento vertical sin ambigüedad direccional, pero el manhua varía.

## Configurar la dirección de lectura en BiblioFuse

### Predeterminado en toda la aplicación

Abre **Ajustes → Lectura → Dirección de lectura** para establecer el valor predeterminado global. Las opciones son:

- **Izquierda a derecha (LTR)** — estándar para cómics occidentales y la mayoría de los ebooks EPUB
- **Derecha a izquierda (RTL)** — estándar para manga y algunos manhua

Elige el que uses con más frecuencia.

### Ajuste por libro

El valor predeterminado global se aplica a cualquier archivo recién abierto, pero puedes sobreescribirlo por libro sin cambiar el ajuste global.

Mientras lees, toca el centro de la pantalla para mostrar los controles del lector y luego toca el **icono de engranaje** en la barra de herramientas superior. El interruptor **Dirección de lectura** aparece en la parte superior del panel de ajustes rápidos. El cambio se aplica inmediatamente, sin cerrar el libro.

[BiblioFuse](https://bibliofuse.com/es/) guarda esta preferencia por archivo. La próxima vez que abras el mismo libro, se abrirá en la dirección que estableciste la última vez.

## Qué cambia al cambiar la dirección

**Dirección del deslizamiento** — En LTR, desliza hacia la izquierda para avanzar. En RTL, desliza hacia la derecha para avanzar. El cambio puede resultar extraño al principio, pero refleja cómo se hojea físicamente un manga.

**Orden en disposición de dos páginas** — En modo horizontal LTR, la página izquierda tiene el número de página menor. En RTL, la página derecha tiene el número menor, tal como en los volúmenes de manga impresos.

**Orientación del miniaturizador** — La barra de miniaturas en la parte inferior del lector se invierte. En modo RTL, la miniatura más a la izquierda es la última página del volumen.

**Detección de páginas dobles** — BiblioFuse identifica dobles páginas por relación de aspecto. En modo RTL, la página derecha es la página N y la izquierda es N+1.

## Desplazamiento vertical y dirección de lectura

El modo de desplazamiento vertical — usado para manhwa y webtoons — no se ve afectado por el ajuste LTR/RTL. El desplazamiento continuo no tiene ordenación de páginas izquierda-derecha, así que la dirección de lectura no aplica aquí.

## Detección automática

Algunos archivos CBZ contienen un archivo `ComicInfo.xml` que especifica la dirección de lectura prevista. BiblioFuse lee estos metadatos cuando están presentes y aplica la dirección por libro automáticamente al abrirlo por primera vez.

## Preguntas frecuentes

**La dirección de deslizamiento me parece incorrecta después de cambiar a RTL. ¿Es normal?**

Sí — en modo RTL, deslizar hacia la derecha avanza a la siguiente página. Refleja el acto físico de pasar la página de un manga hacia la izquierda. En unos minutos te acostumbrarás.

**¿Se sincroniza la dirección de lectura entre iPhone y iPad?**

Las preferencias de dirección por archivo se sincronizan a través de iCloud junto con la posición de lectura. La configuración predeterminada global es local del dispositivo y no se sincroniza.

## Conclusión

Cambiar la dirección de lectura en [BiblioFuse](https://bibliofuse.com/es/) tarda tres toques y se guarda por libro automáticamente. Establece tu predeterminado global para el formato que más lees, ajusta por libro todo lo demás, y el lector gestiona la dirección del deslizamiento, el orden de las páginas dobles y la orientación de las miniaturas sin más configuración.
