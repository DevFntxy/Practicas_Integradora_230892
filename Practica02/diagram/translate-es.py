from pathlib import Path
import json,re,base64

root=Path(__file__).parent
p=root/'index.html'
s=p.read_text(encoding='utf-8')
translations=r'''Atlas — Architecture Explorer|||Atlas — Explorador de arquitectura
Geospatial platform|||Plataforma geoespacial
Geospatial Platform|||Plataforma geoespacial
Software architecture / Interactive system explorer|||Arquitectura de software / Explorador interactivo
ARCHITECTURE · LOCAL DEV|||ARQUITECTURA · DESARROLLO LOCAL
Archify view ↗|||Vista Archify ↗
Explore the system|||Explorar el sistema
Architecture navigation|||Navegación de arquitectura
Layers & trust boundaries|||Capas y límites de confianza
Infrastructure visible|||Infraestructura visible
Infrastructure hidden|||Infraestructura oculta
SELECT a component to inspect.|||SELECCIONA un componente.
DRAG nodes to rearrange.|||ARRASTRA los nodos para moverlos.
SCROLL to zoom · DRAG to pan.|||RUEDA para ampliar · ARRASTRA para desplazar.
Dashed enclosures mark trust boundaries. This is a design model, not live telemetry.|||Los recintos discontinuos indican límites de confianza. Es un modelo de diseño, sin telemetría en vivo.
Interactive architecture|||Arquitectura interactiva
Find a component…|||Buscar componente…
Find a component|||Buscar componente
SYSTEM TOPOLOGY / 01|||TOPOLOGÍA DEL SISTEMA / 01
One platform. Every connection.|||Una plataforma. Todas sus conexiones.
From the user’s device to persistent geospatial data. Select a flow to follow the full journey.|||Del dispositivo del usuario a los datos geoespaciales persistentes. Selecciona un flujo para seguir su recorrido.
Geospatial platform architecture|||Arquitectura de la plataforma geoespacial
Client requests|||Solicitudes del cliente
Identity & tokens|||Identidad y tokens
Persistent data|||Datos persistentes
Trust boundary|||Límite de confianza
Explore an end-to-end request|||Explora una solicitud de principio a fin
Choose a flow to begin a guided journey through the system.|||Elige un flujo para iniciar un recorrido guiado por el sistema.
Component inspector|||Inspector de componentes
DESIGN MODEL / FLUTTER + FASTAPI|||MODELO DE DISEÑO / FLUTTER + FASTAPI
ARCHIFY FOUNDATION · 12 COMPONENTS · 7 ZONES|||BASE ARCHIFY · 12 COMPONENTES · 7 ZONAS
Scroll to zoom|||Rueda para ampliar
Archify / Validated architecture|||Archify / Arquitectura validada
Back to explorer|||Volver al explorador
Archify architecture viewer|||Visor de arquitectura Archify
Archify viewer|||Visor Archify
Explore every connection|||Explora cada conexión
Select a flow, then Play or Step through its requests. Click components for responsibilities, inputs, outputs, protocols, data and security considerations.|||Selecciona un flujo y pulsa Reproducir o Paso para recorrer sus solicitudes. Haz clic en los componentes para ver responsabilidades, entradas, salidas, protocolos, datos y seguridad.
Drag nodes or the canvas. Scroll to zoom. Fit recenters the view; Reset restores positions and layers. Upstream and Downstream follow authored communication directions, including response paths.|||Arrastra los nodos o el lienzo. Usa la rueda para ampliar. Ajustar centra la vista; Restablecer recupera posiciones y capas. Origen y Destino siguen las direcciones de comunicación, incluidas las respuestas.
Archify view provides additional tracing, themes, search, presentation and image export. Escape clears selection or closes the viewer.|||La vista Archify ofrece seguimiento, temas, búsqueda, presentación y exportación de imágenes. Su interfaz nativa está en inglés; el contenido del diagrama está en español. Escape borra la selección o cierra el visor.
Got it|||Entendido
Client layer|||Capa de cliente
Authentication & security|||Autenticación y seguridad
API / backend|||API / backend
Data layer|||Capa de datos
External services|||Servicios externos
Development infrastructure|||Infraestructura de desarrollo
Source control|||Control de versiones
Device owner|||Propietario del dispositivo
Primary entry point|||Punto de entrada principal
USER DEVICE|||DISPOSITIVO DEL USUARIO
Uses the mobile application to view maps and manage devices and geofences.|||Utiliza la aplicación móvil para consultar mapas y gestionar dispositivos y geocercas.
Application views and responses.|||Vistas y respuestas de la aplicación.
User actions and consent.|||Acciones y consentimiento del usuario.
Device UI|||Interfaz del dispositivo
User intent, permissions and preferences.|||Intenciones del usuario, permisos y preferencias.
Request explicit device location permission. The device is outside the backend trust boundary.|||Solicitar permiso explícito de ubicación. El dispositivo está fuera del límite de confianza del backend.
Flutter App|||App Flutter
Mobile UI + maps|||Interfaz móvil + mapas
HTTPS CLIENT|||CLIENTE HTTPS
Primary user entry point. Authenticates users, calls protected APIs and presents geographic data.|||Punto de entrada principal. Autentica usuarios, consume APIs protegidas y muestra información geográfica.
Access tokens, JSON / GeoJSON responses and map tiles.|||Tokens de acceso, respuestas JSON / GeoJSON y teselas de mapas.
Bearer-authenticated API requests, coordinates and geofence edits.|||Solicitudes autenticadas con Bearer, coordenadas y cambios en geocercas.
Tokens, markers, locations, coordinates and geofences. Database access goes through FastAPI.|||Tokens, marcadores, ubicaciones, coordenadas y geocercas. El acceso a las bases de datos pasa por FastAPI.
Use the system browser for sign-in and platform secure storage for tokens. Never embed a client secret.|||Usar el navegador del sistema para iniciar sesión y el almacenamiento seguro del dispositivo para los tokens. Nunca incluir un secreto de cliente.
Keycloak / OIDC provider|||Keycloak / proveedor OIDC
Identity + access management|||Identidad y control de acceso
DOCKER CONTAINER · GEOJSON|||CONTENEDOR DOCKER · GEOJSON
DOCKER CONTAINER · SQL|||CONTENEDOR DOCKER · SQL
DOCKER CONTAINER|||CONTENEDOR DOCKER
Authenticates users and issues signed access tokens. Publishes OIDC discovery and signing keys.|||Autentica usuarios y emite tokens de acceso firmados. Publica metadatos OIDC y claves de firma.
Authorization requests, PKCE challenge / verifier and user authentication.|||Solicitudes de autorización, desafío / verificador PKCE y autenticación del usuario.
Authorization code, JWT access token and public JWKS.|||Código de autorización, token JWT de acceso y JWKS públicas.
Identity, issuer, audience, expiry and role / scope claims.|||Identidad, emisor, audiencia, caducidad y atributos de roles / alcances.
Configure a public mobile client with PKCE and exact redirect URIs. Keycloak persistence is deployment-specific and is not assumed in this diagram.|||Configurar un cliente móvil público con PKCE y URI de redirección exactas. La persistencia de Keycloak depende del despliegue y no se presupone en este diagrama.
JWT / Access token|||JWT / Token de acceso
Signed JWT / JWS|||JWT / JWS firmado
Identity + scoped claims|||Identidad y permisos
TOKEN · NOT A SERVICE|||TOKEN · NO ES UN SERVICIO
Carries signed identity and permission claims from Keycloak to Flutter and protected API endpoints.|||Transporta atributos firmados de identidad y permisos desde Keycloak hacia Flutter y los endpoints protegidos.
Authenticated identity and configured claims.|||Identidad autenticada y atributos configurados.
JWT / JWS transported over HTTPS|||JWT / JWS transportado por HTTPS
sub, iss, aud, exp and role / scope claims. Signed token contents are not encrypted.|||sub, iss, aud, exp y atributos de roles / alcances. El contenido de un token firmado no está cifrado.
FastAPI validates signature, allowed algorithm, issuer, audience and expiry, then authorizes roles and resource ownership.|||FastAPI valida firma, algoritmo permitido, emisor, audiencia y caducidad; después verifica roles y propiedad de los recursos.
FastAPI REST API|||API REST FastAPI
Business logic + JWT guard|||Lógica de negocio + validación JWT
Central communication and business-logic layer. Validates JWTs and authorizes access before reaching application resources.|||Capa central de comunicación y lógica de negocio. Valida los JWT y autoriza el acceso antes de consultar recursos de la aplicación.
HTTPS requests, JSON bodies and bearer access tokens.|||Solicitudes HTTPS, cuerpos JSON y tokens de acceso Bearer.
JSON / GeoJSON responses, SQL commands and MongoDB queries.|||Respuestas JSON / GeoJSON, instrucciones SQL y consultas MongoDB.
HTTPS / REST; SQL; MongoDB wire protocol|||HTTPS / REST; SQL; protocolo de MongoDB
Users, roles, devices, relationships, configuration, geofences, locations, events and history.|||Usuarios, roles, dispositivos, relaciones, configuración, geocercas, ubicaciones, eventos e historial.
Validate JWTs using cached Keycloak JWKS. Reject invalid tokens (401) and insufficient permissions (403). Validate inputs and check resource ownership.|||Validar los JWT con las JWKS de Keycloak en caché. Rechazar tokens inválidos (401) y permisos insuficientes (403). Validar entradas y propiedad de los recursos.
PostgreSQL / relational store|||PostgreSQL / almacenamiento relacional
Users · roles · devices|||Usuarios · roles · dispositivos
Stores structured entities and relational application data.|||Almacena entidades estructuradas y datos relacionales de la aplicación.
Parameterized SQL reads, inserts, updates and deletes from FastAPI.|||Lecturas, inserciones, actualizaciones y eliminaciones SQL parametrizadas desde FastAPI.
Rows, relationships and transaction results.|||Filas, relaciones y resultados de transacciones.
PostgreSQL wire protocol / SQL|||Protocolo PostgreSQL / SQL
Application users, role mappings, devices, entity relationships and application configuration. Identity credentials remain managed by Keycloak.|||Usuarios de la aplicación, asignaciones de roles, dispositivos, relaciones entre entidades y configuración. Keycloak administra las credenciales de identidad.
Restrict database access to backend services. Use least-privilege accounts, constraints, backups and persistent volumes.|||Restringir el acceso a los servicios del backend. Usar cuentas con privilegios mínimos, restricciones, respaldos y volúmenes persistentes.
MongoDB / document store|||MongoDB / almacenamiento documental
Geofences · locations · events|||Geocercas · ubicaciones · eventos
Stores flexible geospatial documents, events and application history.|||Almacena documentos geoespaciales flexibles, eventos e historial de la aplicación.
Document writes and indexed geospatial queries from FastAPI.|||Escrituras de documentos y consultas geoespaciales indexadas desde FastAPI.
GeoJSON features, geographic datasets, events and history.|||Entidades GeoJSON, conjuntos de datos geográficos, eventos e historial.
MongoDB wire protocol / BSON; GeoJSON data model|||Protocolo MongoDB / BSON; modelo de datos GeoJSON
Geofences, locations, events, history, GeoJSON and geospatial datasets. Geographic queries use appropriate 2dsphere indexes.|||Geocercas, ubicaciones, eventos, historial, GeoJSON y conjuntos geoespaciales. Las consultas geográficas utilizan índices 2dsphere adecuados.
Keep ports private, authenticate service accounts and validate geometry and coordinate ranges. Apply retention rules to sensitive location history.|||Mantener privados los puertos, autenticar las cuentas de servicio y validar geometrías y rangos de coordenadas. Aplicar reglas de retención al historial sensible de ubicación.
Leaflet / Maps|||Leaflet / Mapas
Leaflet renderer + tile provider|||Visor Leaflet + proveedor de teselas
Tiles · markers · visualization|||Teselas · marcadores · visualización
EXTERNAL MAP CONTENT|||CONTENIDO CARTOGRÁFICO EXTERNO
Combines base-map tiles with geographic overlays. Leaflet is a web library: use an embedded web map where applicable; the tile provider is external.|||Combina teselas del mapa base con capas geográficas. Leaflet es una biblioteca web: puede integrarse como mapa web embebido; el proveedor de teselas es externo.
Coordinates, zoom levels and application GeoJSON supplied through FastAPI / Flutter.|||Coordenadas, niveles de zoom y GeoJSON de la aplicación suministrados mediante FastAPI / Flutter.
Map tiles and geographic visualization with markers and geofences.|||Teselas de mapas y visualización geográfica con marcadores y geocercas.
HTTPS / map tiles / GeoJSON / coordinates|||HTTPS / teselas / GeoJSON / coordenadas
Tiles provide the base map; GeoJSON provides overlays. MongoDB data passes through FastAPI, never directly to a tile provider.|||Las teselas forman el mapa base; GeoJSON aporta las capas. Los datos de MongoDB pasan por FastAPI, nunca directamente a un proveedor de teselas.
Restrict provider keys, respect attribution and minimize location disclosure. Provider-side APIs depend on the chosen service. This node groups renderer and external content roles.|||Restringir las claves del proveedor, respetar la atribución y minimizar la divulgación de ubicaciones. Las APIs disponibles dependen del servicio elegido. Este nodo agrupa el visor y el contenido externo.
Local workstation|||Estación de trabajo local
Build + collaborate|||Desarrollo y colaboración
WORKSTATION|||ESTACIÓN DE TRABAJO
Authors application code, tests and service configuration.|||Escribe código, pruebas y configuración de los servicios.
Requirements, code reviews and repository changes.|||Requisitos, revisiones de código y cambios del repositorio.
Code, commits and local development commands.|||Código, commits y comandos de desarrollo local.
Local filesystem / Git CLI|||Sistema de archivos local / CLI de Git
Source code, configuration templates and development assets.|||Código fuente, plantillas de configuración y recursos de desarrollo.
Keep credentials and private environment files outside source control.|||Mantener credenciales y archivos privados de entorno fuera del control de versiones.
Git / local source control|||Git / control de versiones local
Commits + branches|||Commits y ramas
LOCAL REPOSITORY|||REPOSITORIO LOCAL
Tracks local history, feature branches and merges.|||Registra el historial local, las ramas de desarrollo y las fusiones.
Working tree changes and remote commits.|||Cambios del directorio de trabajo y commits remotos.
Commits, branches and push / pull operations.|||Commits, ramas y operaciones push / pull.
Git over HTTPS / SSH|||Git sobre HTTPS / SSH
Source files, commit history and branch references.|||Archivos fuente, historial de commits y referencias de ramas.
Use scoped credentials or SSH keys. Exclude secrets and database dumps.|||Usar credenciales con permisos limitados o claves SSH. Excluir secretos y volcados de bases de datos.
GitHub / remote repository|||GitHub / repositorio remoto
Pull requests + collaboration|||Pull requests y colaboración
REMOTE · OPTIONAL CI/CD|||REMOTO · CI/CD OPCIONAL
Hosts the remote repository, branches, pull requests and collaboration. May support future CI/CD workflows.|||Aloja el repositorio remoto, las ramas, las pull requests y la colaboración. Puede incorporar flujos de CI/CD en el futuro.
Pushed commits, branch updates and pull requests.|||Commits enviados, actualizaciones de ramas y pull requests.
Reviewed changes and source checkout for development / deployment.|||Cambios revisados y descarga del código para desarrollo / despliegue.
Source history, reviews, checks and workflow definitions.|||Historial del código, revisiones, comprobaciones y definiciones de flujos.
Protect important branches and scope repository permissions. CI/CD is a potential integration, not a configured deployment pipeline.|||Proteger las ramas principales y limitar los permisos del repositorio. CI/CD es una integración posible, no un proceso de despliegue configurado.
Start · network · coordinate|||Inicio · red · coordinación
LOCAL DEVELOPMENT|||DESARROLLO LOCAL
Defines and starts FastAPI, Keycloak, PostgreSQL and MongoDB containers on an internal development network.|||Define e inicia los contenedores de FastAPI, Keycloak, PostgreSQL y MongoDB en una red interna de desarrollo.
Local checkout, compose configuration and environment variables.|||Código descargado, configuración de Compose y variables de entorno.
Running containers, service discovery, internal network and mounted volumes.|||Contenedores en ejecución, descubrimiento de servicios, red interna y volúmenes montados.
Docker API / Compose YAML / internal TCP network|||API de Docker / YAML de Compose / red TCP interna
Images, services, ports, persistent volumes and injected configuration.|||Imágenes, servicios, puertos, volúmenes persistentes y configuración inyectada.
Expose only required host ports. Keep databases private; inject secrets and configure readiness checks. Compose alone does not establish production security.|||Exponer solo los puertos necesarios. Mantener privadas las bases de datos, inyectar secretos y configurar verificaciones de disponibilidad. Compose por sí solo no establece la seguridad de producción.
01 / CLIENT · USER DEVICE|||01 / CLIENTE · DISPOSITIVO
02 / AUTHENTICATION & SECURITY|||02 / AUTENTICACIÓN Y SEGURIDAD
03 / API · INTERNAL BACKEND|||03 / API · BACKEND INTERNO
04 / DATA · RESTRICTED NETWORK|||04 / DATOS · RED RESTRINGIDA
05 / EXTERNAL MAP SERVICES|||05 / SERVICIOS DE MAPAS
07 / SOURCE CONTROL|||07 / CONTROL DE VERSIONES
06 / DEVELOPMENT INFRASTRUCTURE|||06 / INFRAESTRUCTURA DE DESARROLLO
User actions|||Acciones
Signed JWT|||JWT firmado
Access token|||Token de acceso
JWKS / JWT validation|||JWKS / validación JWT
SQL read / write|||SQL lectura / escritura
Rows / transactions|||Filas / transacciones
Features / events|||Entidades / eventos
HTTPS / map tiles|||HTTPS / teselas
Coordinates / GeoJSON|||Coordenadas / GeoJSON
Commit / branch|||Commit / rama
Checkout / compose up|||Descarga / compose up
Start / network|||Inicio / red
System overview|||Vista general
Every layer, one view|||Todas las capas en una vista
Authentication Flow|||Flujo de autenticación
Identity → protected access|||Identidad → acceso protegido
User → Flutter → Keycloak → JWT → Flutter → FastAPI. Access is granted only after token validation and authorization.|||Usuario → Flutter → Keycloak → JWT → Flutter → FastAPI. El acceso requiere validar el token y autorizar la solicitud.
User opens the application|||El usuario abre la aplicación
Flutter is the primary user entry point.|||Flutter es el punto de entrada principal del usuario.
Authenticate with Keycloak|||Autenticación con Keycloak
OAuth 2.0 / OIDC authorization code flow with PKCE.|||Flujo de código de autorización OAuth 2.0 / OIDC con PKCE.
Keycloak issues a signed JWT|||Keycloak emite un JWT firmado
The access token contains identity, expiry and authorization claims.|||El token de acceso contiene identidad, caducidad y atributos de autorización.
Flutter receives the access token|||Flutter recibe el token de acceso
Store the token using platform secure storage.|||Guardar el token en el almacenamiento seguro del dispositivo.
Call a protected FastAPI endpoint|||Llamada a un endpoint protegido de FastAPI
Validate signature, issuer, audience, expiry and permissions before resource access.|||Validar firma, emisor, audiencia, caducidad y permisos antes de acceder al recurso.
API Request Flow|||Flujo de solicitudes API
REST → data → response|||REST → datos → respuesta
FastAPI mediates all database access. Relational and document paths may be used independently or together.|||FastAPI media todo acceso a las bases de datos. Las rutas relacional y documental pueden usarse por separado o juntas.
Send an authenticated request|||Envío de una solicitud autenticada
Read or write structured data|||Lectura o escritura de datos estructurados
Users, roles, devices, relationships and application configuration.|||Usuarios, roles, dispositivos, relaciones y configuración de la aplicación.
PostgreSQL returns rows|||PostgreSQL devuelve filas
Structured records and transaction results.|||Registros estructurados y resultados de transacciones.
Read or write document data|||Lectura o escritura de documentos
Alternative or additional path: locations, geofences, events and history.|||Ruta alternativa o adicional: ubicaciones, geocercas, eventos e historial.
MongoDB returns results|||MongoDB devuelve resultados
Geospatial queries return features and geographic datasets.|||Las consultas geoespaciales devuelven entidades y conjuntos de datos geográficos.
FastAPI responds to Flutter|||FastAPI responde a Flutter
Authorized JSON / GeoJSON responses drive the client UI.|||Las respuestas JSON / GeoJSON autorizadas actualizan la interfaz del cliente.
Geolocation Flow|||Flujo de geolocalización
Coordinates → geographic view|||Coordenadas → vista geográfica
MongoDB results return through FastAPI to the visualization layer. External tiles and overlays combine in the Flutter map view.|||Los resultados de MongoDB llegan al visor mediante FastAPI. Las teselas externas y las capas se combinan en el mapa de Flutter.
Request geographic information|||Solicitud de información geográfica
Flutter sends coordinates or viewport bounds with a bearer token.|||Flutter envía coordenadas o límites de la vista con un token Bearer.
Query geospatial data|||Consulta de datos geoespaciales
FastAPI searches MongoDB geofences and indexed locations.|||FastAPI consulta geocercas y ubicaciones indexadas en MongoDB.
Return GeoJSON features|||Devolución de entidades GeoJSON
MongoDB returns to FastAPI, not directly to a map provider.|||MongoDB responde a FastAPI, no directamente a un proveedor de mapas.
Prepare map overlays|||Preparación de capas del mapa
FastAPI supplies geographic data to the map visualization layer.|||FastAPI suministra datos geográficos a la capa de visualización.
Render the map in Flutter|||Visualización del mapa en Flutter
Combine map tiles, GeoJSON, markers, locations and geofences.|||Combinar teselas, GeoJSON, marcadores, ubicaciones y geocercas.
Development Flow|||Flujo de desarrollo
Source → local containers|||Código → contenedores locales
Developer → Git → GitHub → local checkout → Docker Compose → services. CI/CD is a potential extension.|||Desarrollador → Git → GitHub → descarga local → Docker Compose → servicios. CI/CD es una posible extensión.
Commit local changes|||Registro de cambios locales
Author application code and create a Git branch.|||Escribir código y crear una rama de Git.
Collaborate on GitHub|||Colaboración en GitHub
Push / pull, review pull requests and merge changes.|||Enviar / descargar commits, revisar pull requests y fusionar cambios.
Check out source and run Compose|||Descarga del código y ejecución de Compose
A developer or optional automation performs this step; GitHub does not start local containers itself.|||Un desarrollador o una automatización opcional realiza este paso; GitHub no inicia los contenedores locales por sí mismo.
Start the FastAPI container|||Inicio del contenedor FastAPI
Compose creates the internal development network and service discovery.|||Compose crea la red interna de desarrollo y el descubrimiento de servicios.
Start the Keycloak container|||Inicio del contenedor Keycloak
Configure identity settings and inject development secrets.|||Configurar la identidad e inyectar secretos de desarrollo.
Start the PostgreSQL container|||Inicio del contenedor PostgreSQL
Mount persistent storage and configure readiness checks.|||Montar almacenamiento persistente y configurar verificaciones de disponibilidad.
Start the MongoDB container|||Inicio del contenedor MongoDB
Connect document storage to the internal development network.|||Conectar el almacenamiento documental a la red interna de desarrollo.
Architecture intelligence|||Información de arquitectura
Built around<br>location.|||Diseñado para<br>la ubicación.
An authenticated mobile platform with relational and geospatial persistence.|||Plataforma móvil autenticada con persistencia relacional y geoespacial.
CONTAINERIZED SERVICES|||SERVICIOS EN CONTENEDORES
ARCHITECTURE ZONES|||ZONAS DE ARQUITECTURA
Request contract|||Contrato de solicitudes
Read · Create · Update · Remove|||Leer · Crear · Actualizar · Eliminar
Protected REST endpoints return JSON.|||Los endpoints REST protegidos devuelven JSON.
Identity before access|||Identidad antes del acceso
Keycloak issues the JWT. FastAPI validates it and authorizes every protected resource.|||Keycloak emite el JWT. FastAPI lo valida y autoriza el acceso a cada recurso protegido.
Development network|||Red de desarrollo
Docker Compose starts and connects services with internal DNS, networking and persistent database volumes.|||Docker Compose inicia y conecta servicios mediante DNS interno, redes y volúmenes persistentes de bases de datos.
Explore the model|||Explora el modelo
Select a component to inspect its responsibility and data contract. Choose a flow to trace an end-to-end journey.|||Selecciona un componente para consultar su función y contrato de datos. Elige un flujo para seguir su recorrido completo.
Close inspector|||Cerrar inspector
Responsibility|||Responsabilidad
Inputs|||Entradas
Outputs|||Salidas
Protocols|||Protocolos
Data exchanged|||Datos intercambiados
REST operations|||Operaciones REST
Dependencies|||Dependencias
No downstream services shown.|||No se muestran servicios de destino.
Security considerations|||Consideraciones de seguridad
Press Play to follow the journey, or Step to advance at your own pace.|||Pulsa Reproducir para seguir el recorrido o Paso para avanzar a tu ritmo.
 / ready to trace||| / listo para explorar
Play flow|||Reproducir flujo
Pause flow|||Pausar flujo
Step →|||Paso →
Zoom out|||Alejar
Zoom in|||Acercar
optional CI/CD workflows|||flujos CI/CD opcionales
Authentication & Security|||Autenticación y seguridad
Client / user device|||Cliente / dispositivo
API / Backend / internal|||API / backend interno
Data / restricted network|||Datos / red restringida
External Services|||Servicios externos
Source Control|||Control de versiones
Development Infrastructure|||Infraestructura de desarrollo
Mobile user|||Usuario móvil
Mobile client|||Cliente móvil
OIDC / access tokens|||OIDC / tokens de acceso
JWT validation / business logic|||Validación JWT / lógica de negocio
Users / roles / devices|||Usuarios / roles / dispositivos
Events / locations / GeoJSON|||Eventos / ubicaciones / GeoJSON
Tiles / markers / geofences|||Teselas / marcadores / geocercas
Local development|||Desarrollo local
Commits / branches|||Commits / ramas
Pull requests / collaboration|||Pull requests / colaboración
Start / network / coordinate|||Inicio / red / coordinación
Docker container|||Contenedor Docker
HTTPS map tiles|||Teselas por HTTPS
OIDC with PKCE returns a JWT; FastAPI validates signature, issuer, audience, expiry and authorization.|||OIDC con PKCE devuelve un JWT; FastAPI valida firma, emisor, audiencia, caducidad y autorización.
Protected REST requests reach persistent data only through FastAPI.|||Las solicitudes REST protegidas acceden a los datos persistentes solo mediante FastAPI.
FastAPI returns MongoDB GeoJSON to the client renderer; map tiles come from an external provider.|||FastAPI devuelve GeoJSON de MongoDB al visor del cliente; las teselas provienen de un proveedor externo.
Repository checkout and Docker Compose coordinate local containers. CI/CD is a potential extension.|||La descarga del repositorio y Docker Compose coordinan los contenedores locales. CI/CD es una extensión posible.'''
mapping=dict(line.split('|||',1) for line in translations.splitlines())
# Translate longest phrases first, leaving all identifiers, selectors and protocols intact.
for en,es in sorted(mapping.items(),key=lambda v:len(v[0]),reverse=True):s=s.replace(en,es)
for en,es in {'User':'Usuario','Developer':'Desarrollador','Direct':'Directas','Upstream':'Origen','Downstream':'Destino','Present':'Presentar','Motion':'Animación','Fit':'Ajustar','Reset':'Restablecer','Help':'Ayuda'}.items():
    s=s.replace("'"+en+"'","'"+es+"'").replace('>'+en+'<','>'+es+'<').replace('"'+en+'"','"'+es+'"')
s=s.replace('<html lang="en">','<html lang="es">').replace('aria-label="Show ','aria-label="Mostrar ').replace("+'% · ","+'% · ")
# Keep Spanish card labels legible within the existing geometry.
s=s.replace("'EXTERNAL MAP CONTENT'","'CONTENIDO CARTOGRÁFICO'")
s=s.replace('CONTENIDO CARTOGRÁFICO EXTERNO','CONTENIDO CARTOGRÁFICO')
s=s.replace('06 / INFRAESTRUCTURA DE DESARROLLO','06 / INFRAESTRUCTURA LOCAL')
s=s.replace('Lógica de negocio + validación JWT','Lógica de negocio + JWT')
p.write_text(s,encoding='utf-8')
spec=json.loads((root/'architecture.json').read_text(encoding='utf-8'))
def translate(v):
    if isinstance(v,str):return mapping.get(v,{'User':'Usuario','Developer':'Desarrollador','Interact':'Interactuar'}.get(v,v))
    if isinstance(v,list):return [translate(x) for x in v]
    if isinstance(v,dict):return {k:translate(x) if k not in ['id','from','to','focus','wraps','type','diagram_type','kind','variant','locale'] else x for k,x in v.items()}
    return v
spec=translate(spec);spec['meta'].pop('locale',None)
(root/'architecture.json').write_text(json.dumps(spec,ensure_ascii=False,indent=2),encoding='utf-8')
print('Traducción aplicada al panel y a la especificación Archify.')
