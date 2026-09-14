# Practicas_Integradora_230892

## Link web

https://devfntxy.github.io/Practicas_Integradora_230892/

## Descripción del proyecto

Este proyecto contiene una página web interactiva que representa la arquitectura de una plataforma basada en Flutter, con elementos de autenticación, backend, almacenamiento de datos y servicios externos. La visualización se implementó en HTML, CSS y JavaScript, y presenta un diagrama técnico con nodos, flujos y límites de confianza.

## ¿Qué incluye la página?

La interfaz desarrollada en [index.html](index.html) muestra una arquitectura de sistema con los siguientes componentes:

- Flutter Mobile App: cliente móvil para iOS y Android.
- Keycloak: servicio de autenticación y autorización con OIDC / OAuth 2.0.
- FastAPI REST API: capa de lógica de negocio y conexión con bases de datos.
- PostgreSQL: base de datos relacional.
- MongoDB: base de datos documental.
- Leaflet / Maps: servicio externo de mapas y geolocalización.
- Docker + Docker Compose: infraestructura local de desarrollo.
- Git + GitHub: control de versiones y colaboración.

## Funcionalidades visuales

El diagrama incluye varias funciones interactivas para facilitar la exploración:

- Selección de cada componente para mostrar información detallada.
- Mostrar u ocultar flujos de datos y límites de confianza.
- Zoom in / zoom out.
- Reinicio de la vista.
- Arrastre del diagrama para desplazarse por la pantalla.
- Diseño responsive para distintas resoluciones.

## Estructura del diagrama

La página divide la arquitectura en varias zonas:

- Límite público / móvil
- Límite del backend
- Límite de terceros
- Infraestructura de desarrollo

Esto ayuda a identificar claramente qué servicios son internos, qué elementos dependen de proveedores externos y cómo se comunican entre sí.

## Tecnologías usadas

- HTML5
- CSS3
- JavaScript
- SVG para la representación del diagrama

## Cómo visualizarlo

1. Abre el archivo [index.html](index.html) en tu navegador.
2. Explora los elementos del diagrama haciendo clic sobre cada nodo.
3. Utiliza los botones de zoom y el arrastre para navegar por la arquitectura.

## Objetivo

El objetivo de esta práctica es documentar visualmente una arquitectura de software, mostrando la relación entre front-end, autenticación, API, bases de datos y servicios externos en un formato claro y didáctico.
