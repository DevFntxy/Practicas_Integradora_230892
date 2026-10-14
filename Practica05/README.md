# Práctica 05 — Dashboard interactivo de gestión de proyecto LUMEN

## Objetivo

Desarrollar una vista de control visual para la gestión de un proyecto de videojuego, integrando organización de roles, backlog de sprint, activos del proyecto, feedback de comunidad y cronograma de entregas. La práctica se presenta como un panel tipo GameOps Central con estilo cyberpunk y una navegación interactiva por secciones.

## Enlace del diagrama hosteado

- [Dashboard de LUMEN en GitHub Pages](https://devfntxy.github.io/Practica05/)

## Descripción general

La práctica consiste en una página web estática construida con HTML, CSS y JavaScript, donde se muestra un dashboard de operación del proyecto llamado "LUMEN". La interfaz está diseñada para simular una consola de control de producción para un estudio de videojuegos.

El proyecto incluye:

- Mapa de roles del equipo con nodos interactivos
- Board Kanban con tareas por estado
- Inventario de assets y pipeline de build
- Feedback de comunidad y playtests
- Cronograma tipo Gantt de 8 semanas
- Controles adicionales como audio, efecto CRT y exportación de reporte

## Proyecto principal

- [index.html](./index.html): vista principal del dashboard

## Estructura de carpetas

```text
Practica05/
├── index.html
├── assets/
│   ├── Captura de pantalla 2026-10-07 175855.png
│   └── ...
├── diagram/
│   ├── diagrama-roles-lumen.svg
│   ├── diagrama-roles-lumen.png
│   ├── lumen-archify.html
│   └── ...
└── README.md
```

## Funcionalidades principales

### 1. Mapa de roles de gestión y desarrollo

La vista inicial presenta un diagrama central con roles clave del proyecto, tales como:

- Product Lead
- Producer
- Lead Developer
- Lead Artist
- Junior Developer
- Community Manager
- Player Tester

Cada nodo puede abrir una ficha de detalle con responsabilidades, KPI y tareas asociadas. La conexión visual entre nodos se dibuja dinámicamente con SVG.

### 2. Board Kanban

La sección de backlog permite organizar tareas en cuatro columnas:

- Por hacer
- En progreso
- En revisión
- Completado

La interfaz incluye opciones para añadir nuevas tareas, cambiar prioridades y actualizar estados entre columnas.

### 3. Assets y pipeline de builds

Se incluye una galería de recursos del proyecto, como:

- Modelos 3D
- Shaders neon
- SFX de audio
- Archivos de entorno y objetos

También se muestra una sección con builds recientes, versiones de prueba, estado de aprobación y métricas de almacenamiento del repositorio de activos.

### 4. Comunidad y playtests

La vista de comunidad presenta comentarios y reportes generados por jugadores testers, con clasificación por severidad y estado de resolución.

### 5. Cronograma Gantt

Se presenta un plan de trabajo en 8 semanas con fases de arquitectura, arte, prototipado, pruebas, optimización y lanzamiento. El diseño permite visualizar avances parciales por fase y por equipo responsable.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Tailwind CSS (CDN)
- SVG para diagramas y conexiones
- Diseño responsivo y visual tipo HUD / cyberpunk

## Cómo ejecutar la práctica

### Opción 1: abrir directamente

Solo tienes que abrir el archivo `index.html` en cualquier navegador moderno.

### Opción 2: servidor local

Desde la carpeta `Practica05`, ejecuta:

```bash
python -m http.server 8000
```

Luego abre en el navegador:

```text
http://localhost:8000
```

## Documentación adicional

En la carpeta `diagram/` se encuentran archivos generados para apoyar la documentación visual del proyecto, incluyendo versiones SVG y PNG del diagrama de roles y una vista Archify. Esto permite complementar la estructura del dashboard con materiales de presentación y referencia visual.

## Conclusión

La práctica 05 representa una aplicación de gestión visual para un proyecto de videojuego con enfoque de operación y producción. El resultado combina diseño de interfaz, interactividad y organización de tareas en un entorno temático de ciencia ficción, reforzando la capacidad de documentar y comunicar proyectos de software de forma visual y profesional.
