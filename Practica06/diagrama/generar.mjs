import fs from 'node:fs';
import path from 'node:path';
const base=path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/,'$1'));
const screens=[
['C01','Bienvenida','compartida','Entretenimiento y herramientas en un lugar.',['EPIC / MÓVIL','Descubre tu próxima aventura','Juegos • comunidad • creación'],[['Entrar','C02'],['Crear cuenta','C03']]],
['C02','Iniciar sesión','compartida','Acceder con una cuenta existente.',['Correo electrónico','Contraseña ••••••••','Conexión segura'],[['Iniciar sesión','C06'],['Crear cuenta','C03'],['Olvidé mi contraseña','C05']]],
['C03','Crear cuenta','compartida','Registrar una identidad para ambos roles.',['Nombre de usuario','Correo electrónico','Contraseña','Aceptar términos y privacidad'],[['Crear cuenta','C04'],['Ya tengo cuenta','C02']]],
['C04','Verificar cuenta','compartida','Confirmar el correo antes de continuar.',['Enviamos un código a tu correo','Código: _ _ _ _ _ _','Reenviar código disponible'],[['Verificar código','C06'],['Cambiar correo','C03']]],
['C05','Recuperar acceso','compartida','Solicitar un enlace de recuperación.',['Correo de la cuenta','Recibirás un enlace de recuperación','Después vuelve a iniciar sesión'],[['Enviar enlace','C02']]],
['C06','Elegir rol','compartida','Entrar al espacio correspondiente.',['JUGADOR / descubre y juega','CREADOR / gestiona tus proyectos','El rol creador requiere autorización'],[['Soy jugador','J01'],['Soy creador autorizado','D01'],['Cerrar sesión','C01']]],
['J01','Descubrir juegos','jugador','Explorar la oferta de entretenimiento.',['DESTACADO / Órbita','Aventura espacial • juego de ejemplo','Novedades y recomendaciones'],[['Buscar juegos','J02'],['Ver destacado','J03'],['Mi biblioteca','J06'],['Cambiar rol','C06']]],
['J02','Buscar y filtrar','jugador','Encontrar juegos compatibles con el dispositivo.',['Buscar: aventura','Filtros: móvil • categoría • precio','Órbita / aventura / $99 MXN'],[['Ver resultado','J03'],['Volver a descubrir','J01']]],
['J03','Detalle del juego','jugador','Consultar requisitos y precio antes de comprar.',['ÓRBITA / aventura espacial','Compatible con este dispositivo','Precio de ejemplo: $99 MXN','Clasificación, descripción y reseñas'],[['Comprar','J04'],['Seguir buscando','J02']]],
['J04','Confirmar compra','jugador','Revisar el pedido y autorizar el pago.',['Órbita / licencia digital','Método: tarjeta de demostración','Total de ejemplo: $99 MXN','Revisar condiciones de compra'],[['Confirmar pago simulado','J05'],['Cancelar compra','J03']]],
['J05','Compra completada','jugador','Confirmar la adquisición y ofrecer acceso.',['✓ Compra de demostración exitosa','Órbita agregado a tu biblioteca','Recibo disponible en tu cuenta'],[['Abrir biblioteca','J06'],['Volver a la tienda','J01']]],
['J06','Mi biblioteca','jugador','Consultar los juegos adquiridos.',['MIS JUEGOS','Órbita / listo para instalar','Gestionar almacenamiento del móvil','Instalación según compatibilidad'],[['Ver juego','J03'],['Explorar tienda','J01'],['Cambiar rol','C06']]],
['D01','Panel del creador','creador','Consultar un resumen de la actividad.',['ESTUDIO / demo','1 proyecto en preparación','Accesos y avisos del programa'],[['Mis proyectos','D02'],['Consultar métricas','D06'],['Cambiar rol','C06']]],
['D02','Mis proyectos','creador','Administrar borradores y publicaciones.',['Órbita / borrador','Última edición: hoy','Estado: información pendiente'],[['Crear proyecto','D03'],['Editar borrador','D04'],['Volver al panel','D01']]],
['D03','Crear proyecto','creador','Definir el producto que se distribuirá.',['Nombre del proyecto','Categoría: aventura','Plataforma objetivo: móvil','Guardar como borrador'],[['Guardar y continuar','D04'],['Cancelar','D02']]],
['D04','Ficha y recursos','creador','Preparar los datos comerciales y visuales.',['Descripción del juego','Portada y capturas / adjuntar','Precio y regiones','Clasificación y compatibilidad'],[['Revisar envío','D05'],['Guardar borrador','D02']]],
['D05','Enviar a revisión','creador','Revisar requisitos antes de solicitar publicación.',['✓ Ficha completa','✓ Recursos y derechos declarados','✓ Compatibilidad informada','El envío no publica automáticamente'],[['Enviar solicitud','D06'],['Corregir información','D04']]],
['D06','Estado y métricas','creador','Dar seguimiento a revisión y resultados.',['Estado: en revisión','Observaciones: ninguna por ahora','Tras aprobación: publicación disponible','Métricas: sin datos publicados'],[['Consultar proyectos','D02'],['Volver al panel','D01']]]
].map(([id,title,role,goal,lines,actions])=>({id,title,role,goal,lines,actions}));
fs.mkdirSync(path.join(base,'imagenes'),{recursive:true});
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
for(const s of screens){
 const color=s.role==='jugador'?'#bce99d':s.role==='creador'?'#cfbdff':'#acd8ee';
 const lines=s.lines.map((t,i)=>`<rect x="38" y="${190+i*67}" width="284" height="53" rx="8" fill="${i===0?color:'#f4f2ec'}" stroke="#4b4b4b"/><text x="50" y="${220+i*67}" font-size="12">${esc(t)}</text>`).join('');
 const buttons=s.actions.slice(0,3).map(([t],i)=>`<rect x="38" y="${490+i*48}" width="284" height="38" rx="9" fill="${i===0?'#24252a':'#fffdf6'}" stroke="#24252a"/><text x="180" y="${514+i*48}" fill="${i===0?'white':'#24252a'}" text-anchor="middle" font-size="12">${esc(t)}</text>`).join('');
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="360" height="720" viewBox="0 0 360 720"><title>${s.id} ${esc(s.title)}</title><rect width="360" height="720" fill="#ece9e1"/><g font-family="Segoe UI,Arial,sans-serif" fill="#24252a"><rect x="16" y="10" width="328" height="700" rx="38" fill="#fffdf6" stroke="#24252a" stroke-width="3"/><path d="M130 26h100" stroke="#24252a" stroke-width="7" stroke-linecap="round"/><text x="38" y="58" font-size="12">9:41</text><text x="280" y="58" font-size="12">▰ ▰</text><text x="38" y="105" font-size="11" letter-spacing="2">EPIC / ${s.id} / ${s.role.toUpperCase()}</text><text x="38" y="148" font-size="23" font-weight="700">${esc(s.title)}</text><path d="M38 166L321 168" stroke="#24252a"/>${lines}${buttons}<path d="M140 684h80" stroke="#24252a" stroke-width="4" stroke-linecap="round"/><text x="180" y="658" text-anchor="middle" font-size="10">SKETCH · PROPUESTA ACADÉMICA</text></g></svg>`;
 fs.writeFileSync(path.join(base,'imagenes',s.id+'.svg'),svg);
}
fs.writeFileSync(path.join(base,'pantallas.json'),JSON.stringify(screens,null,2));
const groupSpecs=[['acceso','Acceso compartido',screens.slice(0,6)],['jugador','Experiencia del jugador',screens.slice(6,12)],['creador','Experiencia del creador',screens.slice(12)]];
for(const [key,title,ss] of groupSpecs){
 const edges=key==='acceso'?[['C01','C02','Entrar'],['C02','C03','Registrarse'],['C03','C04','Crear cuenta'],['C02','C05','Recuperar'],['C04','C06','Verificado'],['C05','C02','Restablecido'],['C02','C06','Acceso válido']]:ss.slice(0,-1).map((s,i)=>[s.id,ss[i+1].id,['Explorar','Seleccionar','Continuar','Confirmar','Consultar'][i]]);
 const d={schema_version:2,diagram_type:'workflow',meta:{title:'Epic móvil · '+title,quality_profile:'showcase'},lanes:[{id:'ruta',label:title}],nodes:ss.map((s,i)=>({id:s.id,lane:'ruta',col:i,type:'frontend',label:s.title,width:Math.max(120,s.title.length*7.3+12)})),edges:edges.map(([from,to,label])=>({from,to,label})),mainPath:key==='acceso'?['C01','C02','C03','C04','C06']:ss.map(s=>s.id),cards:[{dot:'cyan',title:key==='acceso'?'Continuación por rol': 'Origen y regreso',items:[key==='acceso'?'C06 → J01: jugador · C06 → D01: creador autorizado':'C06 → '+ss[0].id+' · El menú permite volver a C06.', 'Los IDs enlazan este flujo con las imágenes del catálogo.']}]};
 d.nodes.forEach(n=>n.width=Math.ceil(n.width));
 fs.writeFileSync(path.join(base,key+'.workflow.json'),JSON.stringify(d,null,2));
}
fs.writeFileSync(path.join(base,'datos.js'),'window.SCREENS='+JSON.stringify(screens)+';');
