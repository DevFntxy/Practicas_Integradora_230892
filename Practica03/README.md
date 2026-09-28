# Práctica 03 — Modelo de negocio Canvas de Epic Games

## Objetivo

Representar el modelo de negocio de Epic Games mediante los nueve bloques del Business Model Canvas y utilizar prompts para desarrollar una primera versión sencilla y después mejorar su presentación e interactividad con un mapa del ecosistema elaborado con Archify.

## Descripción

La práctica analiza el ecosistema de Epic Games, incluyendo Fortnite, Unreal Engine, Epic Games Store y sus servicios para desarrolladores y creadores. El contenido se presenta en español y permite identificar cómo se crea, entrega y obtiene valor dentro del negocio.

El proyecto cuenta con dos versiones:

| Versión | Descripción | Archivo |
| --- | --- | --- |
| Diagrama sencillo | Canvas estático con los nueve bloques, fondo claro, listas resumidas y formato adaptable a móviles e impresión horizontal. | [diagram-simple/index.html](diagram-simple/index.html) |
| Diagrama mejorado | Canvas interactivo con fondo oscuro, información ampliada al seleccionar elementos, animaciones y una vista del ecosistema de plataformas. | [diagram-canvas/index.html](diagram-canvas/index.html) |

## Contenido del modelo Canvas

Los siguientes ejemplos resumen el contenido del diagrama de la práctica:

| Bloque | Contenido representado |
| --- | --- |
| Socios clave | Desarrolladores, fabricantes de consolas, proveedores de nube y socios de contenido. |
| Actividades clave | Desarrollo de videojuegos, operación de la tienda y mantenimiento de herramientas y servicios. |
| Recursos clave | Unreal Engine, Fortnite, Epic Games Store, Epic Online Services y equipos de desarrollo. |
| Propuestas de valor | Entretenimiento, tecnología 3D, distribución digital y experiencias entre plataformas. |
| Relaciones con clientes | Comunidades, soporte técnico, formación y programas para creadores. |
| Canales | Tienda, launcher, portales, redes sociales y dispositivos compatibles. |
| Segmentos de clientes | Jugadores, desarrolladores, creadores y organizaciones que utilizan tecnología 3D. |
| Estructura de costos | Desarrollo, infraestructura, personal, mercadotecnia y licencias de contenido. |
| Fuentes de ingresos | Compras dentro de juegos, suscripciones, licencias, regalías y comisiones. |

## Desarrollo mediante prompts

Los siguientes prompts recrean la secuencia de solicitud inicial y mejora del mismo diagrama para documentar la práctica.

### 1. Prompt inicial: diagrama sencillo

> Crea un diagrama sencillo del modelo Business Model Canvas de Epic Games en español. Incluye sus nueve bloques: socios clave, actividades clave, recursos clave, propuestas de valor, relaciones con clientes, canales, segmentos de clientes, estructura de costos y fuentes de ingresos. Considera Fortnite, Unreal Engine y Epic Games Store. Organiza la información en tarjetas con títulos claros y listas breves, destacando la propuesta de valor en el centro. Usa HTML y CSS, un fondo claro y un diseño que se adapte a computadora y celular. Quiero abrirlo directamente en el navegador y poder imprimirlo en horizontal. Guarda esta primera versión en `diagram-simple/index.html`.

### 2. Prompt de seguimiento: mejorar el mismo diagrama

> Mejora el mismo modelo Canvas de Epic Games que acabas de crear. Conserva los nueve bloques y el tema, pero utiliza un fondo oscuro, mejor jerarquía visual, tarjetas ordenadas y acentos de color para facilitar la lectura. Agrega interactividad con JavaScript para que, al seleccionar un elemento, se abra una explicación de su función dentro del modelo de negocio. Incluye animaciones con un botón para activarlas o desactivarlas y una segunda vista con un mapa del ecosistema creado con Archify que muestre las relaciones entre las plataformas de Epic Games. Mantén el contenido en español y el diseño adaptable a diferentes tamaños de pantalla. Guarda la versión mejorada en `diagram-canvas/index.html` y conserva la versión sencilla para comparar ambos resultados.

## Evidencias

### Captura 1 — Diagrama sencillo

Captura de la primera versión con la distribución de los nueve bloques del Canvas.

> **Espacio reservado para insertar la primera captura.**

<!-- Sustituye el espacio anterior por: ![Diagrama sencillo de Epic Games](capturas/diagrama-simple.png) -->

<br>
<br>

### Captura 2 — Diagrama mejorado

Captura de la versión interactiva donde se aprecien las mejoras visuales y el detalle de un elemento seleccionado.

> **Espacio reservado para insertar la segunda captura.**

<!-- Sustituye el espacio anterior por: ![Diagrama mejorado de Epic Games](capturas/diagrama-mejorado.png) -->

<br>
<br>

## Tecnologías utilizadas

- **HTML5 y CSS3:** estructura, estilos y adaptación a distintos tamaños de pantalla.
- **JavaScript:** selección de elementos, explicaciones, cambio de vistas y animaciones en la versión mejorada.
- **JSON:** contenido estructurado del modelo en [content.es.json](diagram-canvas/content.es.json).
- **Archify y SVG:** representación del [mapa del ecosistema](diagram-canvas/ecosystem.html).

## Cómo visualizar la práctica

1. Descarga o clona el repositorio.
2. Abre `Practica03/diagram-simple/index.html` en un navegador para consultar la versión sencilla.
3. Abre `Practica03/diagram-canvas/index.html` para explorar la versión mejorada.
4. Selecciona un elemento del Canvas para consultar su explicación y cambia a la pestaña del ecosistema para ver las plataformas relacionadas.

Conserva los archivos de `diagram-canvas` en su carpeta para que la vista del ecosistema cargue correctamente. No se necesita instalar dependencias para consultar las páginas existentes.

## Conclusión

La práctica permite organizar el modelo de negocio de Epic Games en nueve bloques y comparar dos formas de presentar la misma información. El prompt de seguimiento concreta las mejoras de diseño e interacción, mientras que las explicaciones y el mapa del ecosistema facilitan la exploración del contenido.
