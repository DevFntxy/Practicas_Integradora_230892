import fs from 'node:fs';
import crypto from 'node:crypto';
const p='Practica06/';
const ss=JSON.parse(fs.readFileSync(p+'pantallas.json','utf8'));
const rows=ss.map(s=>`| ${s.id} | ${s.title} | ${s.role} | ${s.goal} | [PNG](imagenes/${s.id}.png) · [SVG](imagenes/${s.id}.svg) |`).join('\n');
const hash=f=>crypto.createHash('sha256').update(fs.readFileSync(p+f)).digest('hex');
const receipts=['acceso','jugador','creador'].map(k=>({diagram_type:'workflow',output:k+'.html',specification_sha256:hash(k+'.workflow.json'),artifact_sha256:hash(k+'.html'),validation:'9/9 showcase, 0 errors, 0 warnings',browser_evidence:JSON.parse(fs.readFileSync(p+k+'.visual-check.json','utf8')).status==='pass'?'passed':'failed',visual_review:'failed',visual_review_note:'Lectura y conexiones visibles; la composición independiente deja una banda inferior vacía en pantallas grandes. No se declara aprobación perceptual completa.',correction_rounds:k==='acceso'?2:0}));
fs.writeFileSync(p+'entrega.json',JSON.stringify(receipts,null,2));
fs.writeFileSync(p+'README.md',`# Práctica 06 — Secuencia de pantallas móviles de Epic Games

## Objetivo

Transformar el modelo CANVAS de la [Práctica 03](../Practica03/README.md) en una experiencia móvil con dos roles y al menos 15 pantallas. Se entregan **18 pantallas únicas: 6 compartidas, 6 de jugador y 6 de desarrollador/creador**, cada una con imagen SVG editable y PNG de 360 × 720 píxeles.

## Abrir la entrega

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
${rows}

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

\`\`\`powershell
node C:/Users/derek/.agents/skills/archify/bin/archify.mjs validate workflow Practica06/acceso.workflow.json --quality showcase --json
node C:/Users/derek/.agents/skills/archify/bin/archify.mjs deliver workflow Practica06/acceso.workflow.json Practica06/acceso.html --quality showcase --json
node C:/Users/derek/.agents/skills/archify/bin/archify.mjs visual-check Practica06/acceso.html --json
\`\`\`

## Verificación y límites

Los tres HTML de Archify pasaron **9/9 comprobaciones showcase, sin errores ni advertencias**. Sus recibos *.visual-check.json registran aprobación automatizada en Chrome, incluyendo contención a 1440 × 900, 1600 × 1000, 1920 × 1080 y 2048 × 1320, con capturas claras y oscuras.

La inspección visual confirma pantallas legibles y recorridos visibles. Los visores independientes conservan espacio inferior excesivo en monitores grandes: por ello el recibo no declara aprobación perceptual completa. Esta observación se distingue del resultado positivo de las pruebas automáticas. Los controles propios de Archify y su atributo HTML lang usan inglés; el contenido de la práctica está en español.

La [verificación del prototipo](verificacion-prototipo.json) comprobó 18 IDs únicos, 18 pantallas alcanzables, destinos existentes, recorridos completos de compra y envío, y ausencia de desbordamiento horizontal en escritorio y móvil. Las capturas catalogo-desktop.png, prototipo-desktop.png y prototipo-movil.png documentan la presentación.

Los campos son sketches y las acciones simulan navegación. No se realizan pagos, registros, cargas de archivos, instalaciones ni verificaciones de permisos reales.

## Conclusión

La experiencia transforma los segmentos de clientes y la propuesta de valor del CANVAS en tareas concretas: adquirir entretenimiento y administrar contenido para distribución. Las seis pantallas compartidas resuelven el acceso; cada rol dispone de seis pantallas específicas. Los sketches y el recorrido interactivo permiten explicar y revisar la navegación antes de desarrollar la aplicación.
`);
