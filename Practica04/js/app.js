'use strict';

// All page references are physical PDF pages, rather than its inconsistent printed numbers.
const ASSETS = 'canvas-dimatrek/';
const PDF = `${ASSETS}LUMEN%20-%20Equipo%20Mati.pdf`;
const icons = {
  partners: '<path d="m8 12 3 3a2 2 0 0 0 3 0l6-6-5-5-4 2-4-1-5 5 6 7 3-3"/><path d="m11 6-4 4 2 2 4-3M2 10l-1 2 5 5 2-1m11-8 3 3-6 6-2-2"/>',
  activities: '<path d="m13 2-9 12h7l-1 8 10-13h-7z"/>',
  resources: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M17 14v7m-3-3.5h7"/>',
  value: '<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3z"/>',
  relationships: '<path d="M20 11a8 8 0 0 1-8 8H5l-4 3V11a9 9 0 0 1 18-4"/><path d="M6 11h8m-8 4h5m7-14v6m-3-3h6"/>',
  channels: '<circle cx="5" cy="12" r="3"/><circle cx="19" cy="5" r="3"/><circle cx="19" cy="19" r="3"/><path d="m8 11 8-5m-8 7 8 5"/>',
  segments: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 4 5v2"/>',
  costs: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 7h8M8 12h2m4 0h2m-8 5h2m4 0h2"/>',
  revenue: '<path d="M3 21h18M5 17v-4m6 4V9m6 8V5M3 8l6-4 5 2 7-4m-5 0h5v5"/>'
};
const roleImage = { src: 'Diagrama de Roles.png', alt: 'Organigrama de Dimatrek Services con Derek Sesni, Matias Granillo, Arturo Gonzales y Diego Miguel y sus responsabilidades.', caption: 'Equipo Dimatrek · distribución de responsabilidades. Archivo local: Diagrama de Roles.png.' };
const sections = [
  {
    id: 'partners', title: 'Socios Clave', color: '#628078', tint: '#e9efea', category: 'Infraestructura y colaboración',
    summary: ['Itch.io y Steam: plataformas previstas de distribución.', 'Vercel: alojamiento de la PWA.', 'Comunidades de desarrolladores indie.'], tags: ['Distribución', 'Ecosistema indie'],
    lead: 'Una red de plataformas y comunidades que facilita la publicación y la visibilidad del proyecto.',
    points: [
      ['Distribución digital', 'El Canvas del GDD contempla Itch.io y Steam. La demo académica se propone en Itch.io y la versión comercial completa en Steam.'],
      ['Alojamiento de la PWA', 'Vercel figura como servicio de hosting para la aplicación web progresiva del ecosistema satélite.'],
      ['Comunidades indie', 'El documento incluye comunidades de desarrolladores independientes dentro de su bloque de socios y canales.']
    ],
    note: 'Son plataformas y comunidades previstas en el plan. El PDF no acredita acuerdos comerciales, patrocinios ni alianzas formalizadas.', pages: [27]
  },
  {
    id: 'activities', title: 'Actividades Clave', color: '#72896a', tint: '#ecf0e5', category: 'Diseño y producción',
    summary: ['Diseño narrativo, puzzles y arte 3D.', 'Desarrollo de juego, API, PWA y app.', 'Pruebas, publicación y mantenimiento.'],
    lead: 'Un ciclo de producción de ocho semanas con Scrum adaptado, sprints semanales y un backlog documentado en Jira.',
    points: [
      ['Concepción y diseño', 'Definir el mundo de Lumen, el guion, las mecánicas de exploración, los puzzles eléctricos y las transiciones de cámara. Elaborar el GDD y los storyboards.'],
      ['Producción del ecosistema', 'Programar el juego en Unity/C#, crear modelos low-poly, materiales y shaders; desarrollar la API REST, el Codex de Lumen y la aplicación móvil.'],
      ['Pruebas y calidad', 'Verificar guardado local y reintentos al perder conexión, transición de cámara al combate 2.5D y respuesta de los puzzles cuando faltan fusibles.'],
      ['Lanzamiento y continuidad', 'Preparar el ejecutable de PC y la demo WebGL, el press kit y los devlogs. El plan incluye un parche de lanzamiento, telemetría anónima de fallas y una hoja de ruta de DLCs.']
    ], images: [roleImage], pages: [3, 25, 26, 27]
  },
  {
    id: 'resources', title: 'Recursos Clave', color: '#798a69', tint: '#edf0e6', category: 'Equipo y tecnología',
    summary: ['Equipo multidisciplinario y universo de Lumen.', 'Unity / C#, Blender y arte low-poly.', 'API REST, base de datos, PWA y app móvil.'],
    lead: 'La combinación de talento, herramientas de desarrollo y contenido narrativo sostiene la experiencia y sus aplicaciones conectadas.',
    points: [
      ['Equipo de producción', 'El GDD define dirección y diseño de juego, diseño narrativo, desarrollo de gameplay, arte 3D y un rol de backend/cloud. El organigrama local complementa estas funciones con el equipo de Dimatrek.'],
      ['Motor y herramientas visuales', 'Unity 2022.3 LTS, C#, URP, Cinemachine, Shader Graph y Blender; modelos low-poly, texturas de 128 × 128 y filtros de contorno y CRT.'],
      ['Infraestructura de software', 'API REST en Node.js/Express, base de datos descrita como Supabase/Firebase, PWA «Codex de Lumen» y companion app en React Native.'],
      ['Contenido y organización', 'Lore de Lumen, personajes, diálogos, storyboards, modelos 3D, prefabs y shaders. Jira organiza los entregables y el trabajo de los sprints.']
    ], images: [roleImage], pages: [1, 3, 25, 26],
    note: 'El diagrama local se presenta como información complementaria del equipo; no se asignan automáticamente sus nombres a los cinco roles específicos del GDD.'
  },
  {
    id: 'value', title: 'Propuesta de Valor', color: '#416b54', tint: '#dae7d5', category: 'El corazón de AFTERLIGHT',
    quote: 'Explorar la memoria.<br>Elegir un propósito.',
    summary: ['Narrativa emotiva sobre identidad y libre albedrío.', 'Exploración y puzzles en un mundo retrofuturista.', 'Juego + Codex + aplicación móvil conectados.'], tags: ['Narrativa', 'Estética CRT', 'Multiplataforma'],
    lead: 'Una aventura narrativa en 3D sobre la identidad sintética, con estética retro CRT y un ecosistema satélite que amplía la exploración del mundo de Lumen.',
    points: [
      ['Una historia con carga emocional', 'M-4, un autómata de mantenimiento, investiga la aparición de conciencia y empatía en una ciudad sin humanos. El conflicto con CORE y su protocolo RESTORE gira alrededor de la memoria y el propósito propio.'],
      ['Exploración y puzzles', 'El ciclo de juego combina exploración isométrica, reconexión de circuitos, evasión o combate táctico, diálogos y descubrimiento de lore. Prioriza la historia sobre el combate frenético.'],
      ['Identidad artística', 'Modelos low-poly, texturas pixeladas, contornos y filtro CRT crean una atmósfera de nostalgia industrial. La cámara combina vista isométrica, lateral 2.5D y proximidad.'],
      ['Una experiencia conectada', 'PC y WebGL se complementan con la PWA «Codex de Lumen», una companion app móvil y una API unificada. El documento propone una experiencia profunda dentro de un alcance académico acotado.']
    ], images: [
      { src: 'assets/pdf/page-10-1.png', alt: 'Diseño conceptual del autómata protagonista desde tres perspectivas.', caption: 'Protagonista · diseño conceptual original extraído de la página 10 del PDF.' },
      { src: 'assets/pdf/page-18-1.png', alt: 'Diseño conceptual de PIP, el robot mensajero de una rueda.', caption: 'PIP · acompañante y contrapunto emocional. Imagen original de la página 18 del PDF.' }
    ], pages: [1, 4, 7, 10, 18, 27]
  },
  {
    id: 'relationships', title: 'Relaciones con Clientes', color: '#9a8472', tint: '#f0eae4', category: 'Comunidad y continuidad',
    summary: ['Devlogs en Reddit y Discord.', 'Demo académica de acceso gratuito.', 'Parche de lanzamiento y seguimiento de fallas.'],
    lead: 'El GDD describe comunicación con la comunidad y mantenimiento posterior al lanzamiento. Estos elementos se organizan aquí como mecanismos de relación con los jugadores.',
    points: [
      ['Comunicación del desarrollo', 'Los devlogs en Reddit y Discord permiten mostrar el proceso y los avances del proyecto a sus comunidades.'],
      ['Primer contacto mediante la demo', 'La primera fase de monetización prevé acceso gratuito a los Actos I y II en Itch.io como demo académica.'],
      ['Continuidad técnica', 'El plan de mantenimiento contempla un parche Day-1 y telemetría anónima de fallas, además de una hoja de ruta de contenido descargable.']
    ], note: 'Clasificación de acciones descritas en el GDD. No se especifican un canal de soporte al cliente, tiempos de atención ni un programa de fidelización.', pages: [26, 27]
  },
  {
    id: 'channels', title: 'Canales', color: '#68868d', tint: '#e8eff0', category: 'Acceso y descubrimiento',
    summary: ['Demo WebGL en Itch.io; juego completo en Steam.', 'PWA Codex y companion app móvil.', 'Press kit, teaser, Reddit y Discord.'],
    lead: 'Un recorrido desde el descubrimiento del proyecto hasta la demo y la versión completa, acompañado por interfaces web y móviles.',
    points: [
      ['Entrega del videojuego', 'Demo WebGL gratuita en Itch.io y comercialización prevista del juego completo en Steam. Las plataformas base son PC Windows y Unity WebGL.'],
      ['Aplicaciones complementarias', 'La PWA «Codex de Lumen» y la companion app móvil en React Native forman parte del ecosistema conectado mediante API REST. Vercel se contempla para alojar la PWA.'],
      ['Comunicación y promoción', 'Press kit con teaser y key art CRT, junto con devlogs en Reddit y Discord. El PDF no proporciona enlaces públicos a cuentas, tiendas o aplicaciones ya publicadas.']
    ], pages: [1, 26, 27]
  },
  {
    id: 'segments', title: 'Segmentos de Clientes', color: '#8c7b9a', tint: '#eee9f2', category: 'A quién se dirige',
    summary: ['Jugadores de aventuras indie narrativas y puzzles.', 'Personas que valoran atmósferas y temas filosóficos.', 'Comunidad académica y desarrolladores.'], tags: ['Jugadores indie', 'Academia', 'Desarrolladores'],
    lead: 'Una audiencia que busca exploración contemplativa, una atmósfera envolvente y preguntas sobre la identidad, además de interés técnico por un ecosistema multiplataforma.',
    points: [
      ['Aficionados a la aventura indie', 'El documento menciona a fans de Machinarium, Stray, Tunic y Nier: Automata como referencias del público de aventuras narrativas y puzzles.'],
      ['Interés en estética y narrativa', 'Jugadores que valoran entornos inmersivos, trasfondo filosófico, estética retro-tecnológica y descubrimiento de historia mediante escenografía y diálogos.'],
      ['Audiencia académica y técnica', 'Comunidad académica y desarrolladores interesados en proyectos que integran un videojuego, aplicaciones web y móviles y una API unificada.']
    ], note: 'No se establecen edades, países, tamaño de mercado ni proyecciones de adquisición de usuarios.', pages: [4]
  },
  {
    id: 'costs', title: 'Estructura de Costos', color: '#a08a60', tint: '#f2ecdf', category: 'Viabilidad y recursos', pending: true,
    summary: ['Desarrollo y producción audiovisual.', 'Infraestructura, pruebas y mantenimiento.', 'Distribución y comunicación.'],
    lead: 'El PDF no incluye un presupuesto ni importes de costos. Las siguientes áreas se identifican a partir de su plan de trabajo; son rubros por evaluar, no gastos confirmados.',
    points: [
      ['Producción del proyecto', 'Tiempo del equipo para diseño narrativo, gameplay, arte 3D, programación del backend, PWA y aplicación móvil durante el plan de ocho semanas.'],
      ['Infraestructura y operación', 'Necesidades de alojamiento de la PWA, API y base de datos; QA, correcciones y mantenimiento. No se detallan planes contratados ni costos de servicios.'],
      ['Preparación de la distribución', 'Trabajo de generación de builds, press kit, teaser, key art y devlogs. No se especifican comisiones de tiendas ni inversión publicitaria.']
    ], note: 'Rubros derivados del alcance técnico, pendientes de cuantificar y validar. El GDD no establece salarios, licencias pagadas, comisiones, presupuesto total ni punto de equilibrio.', pages: [3, 25, 26, 27]
  },
  {
    id: 'revenue', title: 'Fuentes de Ingresos', color: '#548978', tint: '#e5efe7', category: 'Monetización por fases',
    prices: true,
    summary: ['Demo académica gratuita → comercialización en Steam.'],
    lead: 'El plan distingue una demo gratuita inicial y una fase posterior de comercialización del juego completo y un Supporter Pack.',
    points: [
      ['Fase 1 · Demo gratuita', 'Demo académica de los Actos I y II en Itch.io. Es una etapa de acceso gratuito, sin ingresos por venta de la demo definidos.'],
      ['Fase 2 · Juego completo', 'Comercialización prevista en Steam a $4.99 USD para el juego completo, que abarca los Actos I a IV.'],
      ['Supporter Pack', 'El documento fija un precio previsto de $7.99 USD para el Supporter Pack, pero no especifica su contenido ni si incluye el juego base.']
    ], note: 'Precios del plan del GDD, no precios de una tienda publicada. No se estiman ventas, ingresos totales ni márgenes. Los DLCs aparecen en la hoja de ruta, sin precio o modalidad de venta definidos.', pages: [26, 27]
  }
];

const canvas = document.querySelector('#canvas');
const detailDialog = document.querySelector('#detail-dialog');
const imageDialog = document.querySelector('#image-dialog');
const detailContent = document.querySelector('#detail-content');
const visited = new Set();
let currentSection = 0;
let currentImages = [];
let currentImage = 0;
let returnFocus = null;

const icon = id => `<span class="section-icon" aria-hidden="true"><svg viewBox="0 0 24 24">${icons[id]}</svg></span>`;
const pad = number => String(number).padStart(2, '0');

canvas.innerHTML = sections.map((s, i) => `
  <button class="canvas-block ${s.id}" data-section="${i}" style="--accent:${s.color};--tint:${s.tint}" aria-haspopup="dialog" aria-label="Explorar ${s.title}" aria-describedby="summary-${s.id}">
    <span class="block-top">${icon(s.id)}<span class="block-number">${pad(i + 1)}</span></span>
    <h3>${s.title}</h3>
    ${sectionScene(s.id)}
    ${s.pending ? '<span class="pending-label">Presupuesto por definir</span>' : ''}
    ${s.quote ? `<p class="value-quote">${s.quote}</p>` : ''}
    ${s.prices ? '<span class="price-row"><span class="price-item"><strong>$4.99 <span>USD</span></strong><small>Juego completo</small></span><span class="price-item"><strong>$7.99 <span>USD</span></strong><small>Supporter Pack</small></span></span>' : ''}
    <ul id="summary-${s.id}" class="block-list">${s.summary.map(p => `<li>${p}</li>`).join('')}</ul>
    ${s.tags ? `<span class="card-tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</span>` : ''}
    <span class="block-footer"><span>${s.pending ? 'Rubros derivados del plan' : s.prices ? 'Precios previstos en el GDD' : 'Explorar bloque'}</span><span class="arrow" aria-hidden="true">↗</span></span>
  </button>`).join('');

function syncScrollLock() {
  document.body.classList.toggle('modal-open', detailDialog.open || imageDialog.open);
}

function showDialog(dialog) {
  if (!dialog.open) dialog.showModal();
  dialog.classList.remove('closing');
  syncScrollLock();
}

function closeDialog(dialog) {
  if (!dialog.open || dialog.classList.contains('closing')) return;
  dialog.classList.add('closing');
  const finish = () => {
    dialog.close();
    dialog.classList.remove('closing');
    syncScrollLock();
    if (dialog === detailDialog && returnFocus) returnFocus.focus({ preventScroll: true });
  };
  window.setTimeout(finish, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 160);
}

function showSection(index, trigger) {
  if (trigger) returnFocus = trigger;
  currentSection = (index + sections.length) % sections.length;
  const s = sections[currentSection];
  currentImages = s.images || [];
  visited.add(s.id);
  document.querySelector('#exploration-status').textContent = `${visited.size} de 9 bloques explorados`;
  document.querySelector('#detail-category').textContent = `AFTERLIGHT / ${s.category}`;
  detailDialog.style.setProperty('--accent', s.color);
  detailDialog.style.setProperty('--tint', s.tint);
  detailContent.innerHTML = `
    <div class="detail-heading">${icon(s.id)}<h2 id="detail-title" tabindex="-1">${s.title}</h2></div>
    ${sectionScene(s.id, 'detail-scene')}
    <p class="detail-lead">${s.lead}</p>
    <ul class="detail-points">${s.points.map(([title, text]) => `<li><strong>${title}</strong>${text}</li>`).join('')}</ul>
    ${s.note ? `<p class="detail-note">${s.note}</p>` : ''}
    ${currentImages.length ? `<h3 class="gallery-title">Imágenes del proyecto <span aria-hidden="true">↗</span></h3><div class="gallery ${currentImages.length === 1 ? 'single' : ''}">${currentImages.map((im, i) => `<figure><button data-image="${i}" aria-label="Ampliar imagen: ${im.alt}"><img src="${ASSETS}${im.src}" alt="${im.alt}" loading="lazy"><span class="image-zoom" aria-hidden="true">Ampliar ↗</span></button><figcaption>${im.caption}</figcaption></figure>`).join('')}</div>` : ''}
    <p class="source-reference">Fuente: GDD de AFTERLIGHT · páginas del archivo PDF ${s.pages.map(p => `<a href="${PDF}#page=${p}" target="_blank" rel="noopener">${p}</a>`).join(', ')}${s.images?.includes(roleImage) ? ' · Organigrama local de Dimatrek Services.' : '.'}</p>`;
  document.querySelector('.detail-nav').hidden = false;
  document.querySelector('#detail-position').textContent = `${pad(currentSection + 1)} / 09`;
  showDialog(detailDialog);
  detailDialog.scrollTop = 0;
  document.querySelector('#detail-title').focus({ preventScroll: true });
}

function showImage(index) {
  currentImage = (index + currentImages.length) % currentImages.length;
  const item = currentImages[currentImage];
  const fullImage = document.querySelector('#full-image');
  fullImage.src = ASSETS + item.src;
  fullImage.alt = item.alt;
  document.querySelector('#image-caption').textContent = item.caption;
  document.querySelector('#image-count').textContent = `IMÁGENES DEL PROYECTO · ${currentImage + 1} / ${currentImages.length}`;
  document.querySelector('#previous-image').disabled = currentImages.length < 2;
  document.querySelector('#next-image').disabled = currentImages.length < 2;
  showDialog(imageDialog);
}

canvas.addEventListener('click', event => {
  const button = event.target.closest('[data-section]');
  if (button) showSection(Number(button.dataset.section), button);
});
detailContent.addEventListener('click', event => {
  const button = event.target.closest('[data-image]');
  if (button) showImage(Number(button.dataset.image));
});
document.querySelector('.close-dialog').addEventListener('click', () => closeDialog(detailDialog));
document.querySelector('#close-image').addEventListener('click', () => closeDialog(imageDialog));
document.querySelector('#previous-section').addEventListener('click', () => showSection(currentSection - 1));
document.querySelector('#next-section').addEventListener('click', () => showSection(currentSection + 1));
document.querySelector('#previous-image').addEventListener('click', () => showImage(currentImage - 1));
document.querySelector('#next-image').addEventListener('click', () => showImage(currentImage + 1));
imageDialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    showImage(currentImage + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
for (const dialog of [detailDialog, imageDialog]) {
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeDialog(dialog); });
  // Require both press and release outside to avoid closing after an image/text drag.
  let startedOutside = false;
  const outside = event => {
    const r = dialog.getBoundingClientRect();
    return event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom;
  };
  dialog.addEventListener('pointerdown', event => { startedOutside = outside(event); });
  dialog.addEventListener('click', event => { if (event.target === dialog && startedOutside && outside(event)) closeDialog(dialog); });
  dialog.addEventListener('close', syncScrollLock);
}

document.querySelector('#source-notes').addEventListener('click', event => {
  returnFocus = event.currentTarget;
  document.querySelector('#detail-category').textContent = 'AFTERLIGHT / CRITERIOS EDITORIALES';
  detailContent.innerHTML = `
    <div class="detail-heading"><h2 id="detail-title" tabindex="-1">Criterios y fuentes</h2></div>
    <div class="notes-copy">
      <p>Este Canvas organiza la información de <a href="${PDF}" target="_blank" rel="noopener">LUMEN - Equipo Mati.pdf</a>, cuyo título interno es <strong>AFTERLIGHT — Documento de Diseño de Juego e Historia</strong>. Dimatrek Services se identifica mediante el logotipo y el organigrama locales.</p>
      <h3>Una diferencia importante dentro del PDF</h3>
      <p>La página 28 contiene una imagen de un Canvas para «Galactic Odyssey: Dimatrek Chronicles», un MMO espacial con monetización free-to-play. Su título, género, tecnologías y monetización difieren del cuerpo del GDD. Por ello se usa el contenido de AFTERLIGHT, en particular su Canvas y plan de monetización de la página 27, y se excluye esa imagen como fuente del modelo de negocio.</p>
      <h3>Cómo se organizó la información</h3>
      <ul><li>Propuesta de valor, socios, canales e ingresos: principalmente página 27.</li><li>Audiencia: página 4. Equipo y recursos: páginas 1, 3 y 25.</li><li>Actividades y mecanismos de relación: plan de desarrollo y mantenimiento, páginas 25–27.</li><li>Costos: áreas derivadas del trabajo descrito; el PDF no incluye presupuesto ni importes.</li></ul>
      <h3>Imágenes originales, sin sustituciones</h3>
      <p>El encabezado utiliza <strong>dimatrek_logo.png</strong>. El archivo <strong>Diagrama de Roles.png</strong> acompaña Recursos Clave y Actividades Clave. Los diseños del protagonista y PIP se extrajeron sin modificar de las páginas 10 y 18 del PDF y acompañan Propuesta de Valor. Cada bloque incluye además una ilustración vectorial animada de carácter decorativo, creada para este sitio; estas ilustraciones no son arte conceptual ni evidencia del GDD.</p>
      <p>Las referencias indican la posición real de cada página en el archivo (28 páginas), ya que la numeración impresa presenta duplicados. Los precios y plataformas representan el plan documentado, no una confirmación de lanzamiento. El documento alterna M-4 y M-5; se usa M-4, como en el resumen ejecutivo.</p>
    </div>`;
  document.querySelector('.detail-nav').hidden = true;
  showDialog(detailDialog);
  detailDialog.scrollTop = 0;
  document.querySelector('#detail-title').focus({ preventScroll: true });
});

const motionToggle = document.querySelector('#motion-toggle');
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
function setMotionPaused(paused) {
  document.body.classList.toggle('motion-paused', paused);
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.textContent = paused ? 'Activar animaciones' : 'Pausar animaciones';
}
setMotionPaused(motionPreference.matches);
motionToggle.addEventListener('click', () => setMotionPaused(!document.body.classList.contains('motion-paused')));
motionPreference.addEventListener('change', event => setMotionPaused(event.matches));
