# Práctica 06 — Secuencia de pantallas móviles de Epic Games

## Objetivo

Transformar el modelo CANVAS de la [Práctica 03](../Practica03/README.md) en una experiencia móvil con dos roles y al menos 15 pantallas. Se entregan **18 pantallas únicas: 6 compartidas, 6 de jugador y 6 de desarrollador/creador**, cada una con imagen SVG editable y PNG de 360 × 720 píxeles.

## Abrir la entrega

### Versiones móvil y desktop

El selector **Móvil / Desktop** cambia las imágenes del catálogo y del prototipo sin perder la pantalla ni el historial de navegación. Se conservan 18 pantallas funcionales, con **36 diseños: 18 móviles y 18 de escritorio**, disponibles en SVG y PNG. Los mismos IDs y flujos de Archify sirven para ambos formatos.

Las imágenes de escritorio están en [imagenes/desktop](imagenes/desktop), a **1280 × 860 píxeles**. Incluyen acceso en dos columnas, navegación lateral, catálogo con área visual y panel del creador con tarjetas de resumen. La propuesta desktop utiliza PC como plataforma de ejemplo. En el prototipo puedes descargar el SVG o PNG del formato seleccionado.

Para regenerar los SVG desktop, ejecuta `node Practica06/generar-desktop.mjs`. El script `verificar.mjs` exporta también los PNG desktop y verifica sus recorridos, destinos, cambio de formato y conservación del historial. Sus resultados se guardan en `verificacion-desktop.json`.

Abre [index.html](index.html) directamente en Chrome o Edge. No requiere instalación ni conexión a internet. Conserva la carpeta completa para cargar sus imágenes y diagramas.

1. **Secuencia visual:** catálogo de los 18 sketches con códigos estables.
2. **Probar recorrido:** selecciona una pantalla y utiliza sus acciones para avanzar, cancelar, regresar o cambiar de rol.
3. **Diagramas Archify:** tres capítulos interactivos del mismo flujo, con zoom, exploración y exportación del visor.
4. **Relación con CANVAS:** trazabilidad entre decisiones de negocio y pantallas.

## Roles y alcance

- **Jugador:** descubre juegos, consulta compatibilidad, simula una compra y accede a su biblioteca.
- **Desarrollador/creador autorizado:** administra proyectos, prepara su ficha, envía a revisión y consulta estado y métricas.
- **Compartidas:** bienvenida, acceso, registro, verificación, recuperación y selección de rol.

La propuesta integra conceptos del ecosistema Epic Games estudiado en el CANVAS. Es un diseño académico, no una reproducción de una aplicación oficial. Órbita, el precio y los datos son ejemplos. La selección de creador representa una cuenta previamente autorizada; no concede permisos reales. El trabajo móvil prepara y administra proyectos, sin pretender ejecutar Unreal Engine dentro del teléfono.

## Inventario de pantallas

| ID | Pantalla | Alcance | Propósito | Imágenes |
| --- | --- | --- | --- | --- |
| C01 | Bienvenida | compartida | Entretenimiento y herramientas en un lugar. | [PNG](imagenes/C01.png) · [SVG](imagenes/C01.svg) |
| C02 | Iniciar sesión | compartida | Acceder con una cuenta existente. | [PNG](imagenes/C02.png) · [SVG](imagenes/C02.svg) |
| C03 | Crear cuenta | compartida | Registrar una identidad para ambos roles. | [PNG](imagenes/C03.png) · [SVG](imagenes/C03.svg) |
| C04 | Verificar cuenta | compartida | Confirmar el correo antes de continuar. | [PNG](imagenes/C04.png) · [SVG](imagenes/C04.svg) |
| C05 | Recuperar acceso | compartida | Solicitar un enlace de recuperación. | [PNG](imagenes/C05.png) · [SVG](imagenes/C05.svg) |
| C06 | Elegir rol | compartida | Entrar al espacio correspondiente. | [PNG](imagenes/C06.png) · [SVG](imagenes/C06.svg) |
| J01 | Descubrir juegos | jugador | Explorar la oferta de entretenimiento. | [PNG](imagenes/J01.png) · [SVG](imagenes/J01.svg) |
| J02 | Buscar y filtrar | jugador | Encontrar juegos compatibles con el dispositivo. | [PNG](imagenes/J02.png) · [SVG](imagenes/J02.svg) |
| J03 | Detalle del juego | jugador | Consultar requisitos y precio antes de comprar. | [PNG](imagenes/J03.png) · [SVG](imagenes/J03.svg) |
| J04 | Confirmar compra | jugador | Revisar el pedido y autorizar el pago. | [PNG](imagenes/J04.png) · [SVG](imagenes/J04.svg) |
| J05 | Compra completada | jugador | Confirmar la adquisición y ofrecer acceso. | [PNG](imagenes/J05.png) · [SVG](imagenes/J05.svg) |
| J06 | Mi biblioteca | jugador | Consultar los juegos adquiridos. | [PNG](imagenes/J06.png) · [SVG](imagenes/J06.svg) |
| D01 | Panel del creador | creador | Consultar un resumen de la actividad. | [PNG](imagenes/D01.png) · [SVG](imagenes/D01.svg) |
| D02 | Mis proyectos | creador | Administrar borradores y publicaciones. | [PNG](imagenes/D02.png) · [SVG](imagenes/D02.svg) |
| D03 | Crear proyecto | creador | Definir el producto que se distribuirá. | [PNG](imagenes/D03.png) · [SVG](imagenes/D03.svg) |
| D04 | Ficha y recursos | creador | Preparar los datos comerciales y visuales. | [PNG](imagenes/D04.png) · [SVG](imagenes/D04.svg) |
| D05 | Enviar a revisión | creador | Revisar requisitos antes de solicitar publicación. | [PNG](imagenes/D05.png) · [SVG](imagenes/D05.svg) |
| D06 | Estado y métricas | creador | Dar seguimiento a revisión y resultados. | [PNG](imagenes/D06.png) · [SVG](imagenes/D06.svg) |

## Secuencia y decisiones

**Acceso existente:** C01 → C02 → C06. **Registro:** C01 → C03 → C04 → C06. **Recuperación:** C02 → C05 → C02, después de utilizar el enlace recibido. El prototipo muestra el aviso de envío simulado.

**Bifurcación de rol:** C06 → J01 para jugador; C06 → D01 para creador autorizado. El panel de cada rol permite volver a C06. C06 permite cerrar sesión y regresar a C01.

**Jugador:** J01 → J02 → J03 → J04 → J05 → J06. Es posible abrir directamente el destacado o la biblioteca desde J01; cancelar la compra en J04 regresa a J03. La compra exitosa conduce a la biblioteca.

**Creador:** D01 → D02 → D03 → D04 → D05 → D06. Cancelar la creación regresa a D02; guardar un borrador vuelve a D02; corregir el envío vuelve a D04. Enviar un proyecto produce el estado «en revisión», no una publicación automática. Las métricas permanecen sin datos antes de publicar.

Los diagramas Archify muestran las rutas principales y el acceso compartido; el prototipo y [pantallas.json](pantallas.json) contienen todas las acciones alternativas. Los capítulos se conectan mediante C06 → J01 / D01, documentados en sus tarjetas. La fila compartida del catálogo es un inventario, no una cadena lineal.

## Prompt para Archify

> Basándote en el CANVAS de Epic Games de la Práctica 03, crea una propuesta de aplicación móvil con dos roles: jugador y desarrollador/creador autorizado. Incluye 18 pantallas: C01 Bienvenida, C02 Iniciar sesión, C03 Crear cuenta, C04 Verificar cuenta, C05 Recuperar acceso, C06 Elegir rol; J01 Descubrir juegos, J02 Buscar y filtrar, J03 Detalle del juego, J04 Confirmar compra, J05 Compra completada, J06 Mi biblioteca; D01 Panel del creador, D02 Mis proyectos, D03 Crear proyecto, D04 Ficha y recursos, D05 Enviar a revisión y D06 Estado y métricas. Genera sketches móviles para todas las pantallas y un prototipo navegable. Usa Archify workflow porque se trata de navegación entre pantallas, no de mensajes entre servidores. Divide el flujo en tres capítulos legibles conectados por C06: acceso, jugador y creador. Incluye registro, recuperación, selección de rol, compra y envío a revisión; documenta cancelaciones y regresos en el prototipo. Mantén IDs consistentes, contenido en español, imágenes descargables y relación explícita con los bloques del CANVAS. Marca datos y compras como simulados. Valida las especificaciones y genera HTML interactivo sin dependencias de red.

## Archivos y reproducción

- [acceso.html](acceso.html), [jugador.html](jugador.html), [creador.html](creador.html): artefactos generados con Archify, tipo workflow.
- Archivos *.workflow.json: especificaciones editables del agente Archify.
- [pantallas.json](pantallas.json): contenidos, roles, acciones y destinos.
- imagenes/: 18 PNG y 18 SVG originales.
- [generar.mjs](generar.mjs): genera fuentes y SVG mediante Node. Al regenerar, volver a validar y entregar cada especificación con Archify.
- [verificar.mjs](verificar.mjs): comprobación local con Chrome y exportación PNG; utiliza la instalación local de Archify indicada en el script.
- [entrega.json](entrega.json): hashes SHA-256 de fuentes y HTML, validación y estados de revisión.

Ejemplo desde la raíz del repositorio:

```powershell
node C:/Users/derek/.agents/skills/archify/bin/archify.mjs validate workflow Practica06/acceso.workflow.json --quality showcase --json
node C:/Users/derek/.agents/skills/archify/bin/archify.mjs deliver workflow Practica06/acceso.workflow.json Practica06/acceso.html --quality showcase --json
node C:/Users/derek/.agents/skills/archify/bin/archify.mjs visual-check Practica06/acceso.html --json
```

## Verificación y límites

Los tres HTML de Archify pasaron **9/9 comprobaciones showcase, sin errores ni advertencias**. Sus recibos *.visual-check.json registran aprobación automatizada en Chrome, incluyendo contención a 1440 × 900, 1600 × 1000, 1920 × 1080 y 2048 × 1320, con capturas claras y oscuras.

La inspección visual confirma pantallas legibles y recorridos visibles. Los visores independientes conservan espacio inferior excesivo en monitores grandes: por ello el recibo no declara aprobación perceptual completa. Esta observación se distingue del resultado positivo de las pruebas automáticas. Los controles propios de Archify y su atributo HTML lang usan inglés; el contenido de la práctica está en español.

La [verificación del prototipo](verificacion-prototipo.json) comprobó 18 IDs únicos, 18 pantallas alcanzables, destinos existentes, recorridos completos de compra y envío, y ausencia de desbordamiento horizontal en escritorio y móvil. Las capturas catalogo-desktop.png, prototipo-desktop.png y prototipo-movil.png documentan la presentación.

Los campos son sketches y las acciones simulan navegación. No se realizan pagos, registros, cargas de archivos, instalaciones ni verificaciones de permisos reales.

## Conclusión

La experiencia transforma los segmentos de clientes y la propuesta de valor del CANVAS en tareas concretas: adquirir entretenimiento y administrar contenido para distribución. Las seis pantallas compartidas resuelven el acceso; cada rol dispone de seis pantallas específicas. Los sketches y el recorrido interactivo permiten explicar y revisar la navegación antes de desarrollar la aplicación.
