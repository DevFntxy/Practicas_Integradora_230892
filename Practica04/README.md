# AFTERLIGHT · Business Model Canvas

Abre `../index.html` directamente en un navegador moderno. No se necesita servidor, instalación, conexión a Internet ni compilación. Mantén la estructura de carpetas para conservar las referencias a las imágenes y al PDF.

El Canvas tiene nueve bloques interactivos, navegación entre detalles, una galería ampliable, cierre con Escape o clic en el fondo, control de foco y adaptación a escritorio, tableta y móvil. Las animaciones respetan la preferencia de movimiento reducido.

## Contenido y fuentes

- Fuente principal: `LUMEN - Equipo Mati.pdf`, 28 páginas físicas. El proyecto descrito es AFTERLIGHT.
- Identidad de empresa: `dimatrek_logo.png` y `Diagrama de Roles.png`.
- El organigrama complementa Actividades Clave y Recursos Clave.
- `assets/pdf/page-10-1.png` y `assets/pdf/page-18-1.png`: imágenes originales del protagonista y PIP extraídas del PDF, usadas en Propuesta de Valor.
- Las demás imágenes extraídas son material de referencia del PDF. No se asignan imágenes ficticias a bloques sin material pertinente.
- La imagen de la página 28 corresponde a **Galactic Odyssey: Dimatrek Chronicles**, no a AFTERLIGHT. Se excluye del contenido comercial para no mezclar géneros ni modelos de ingresos.
- La estructura de costos identifica rubros derivados del plan técnico; no inventa importes. Se explicitan los vacíos de documentación en los detalles correspondientes.
- Las referencias de página son físicas, no la numeración impresa inconsistente del documento.

## Archivos

- `../index.html`: página de entrada.
- `css/styles.css`: diseño, distribución responsive y transiciones.
- `js/app.js`: contenido trazable, interacciones, diálogos y galería.
- `source-text.txt`: extracción textual del PDF para auditoría.
- `extract_source.py`: herramienta de desarrollo para reproducir las extracciones con pypdf y Pillow; no interviene en la ejecución del Canvas.

No se incorporan recursos de Internet, fuentes remotas ni dependencias de ejecución.
