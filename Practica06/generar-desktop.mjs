import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
const base=fileURLToPath(new URL('.',import.meta.url));
const screens=JSON.parse(fs.readFileSync(base+'pantallas.json','utf8'));
fs.mkdirSync(base+'imagenes/desktop',{recursive:true});
const e=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;');
const rect=(x,y,w,h,fill='#fffdf6',r=10)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="#55585c"/>`;
const text=(x,y,s,size=18,fill='#25282c',weight=400)=>`<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-weight="${weight}">${e(s)}</text>`;
const art=(x,y,w,h)=>`${rect(x,y,w,h,'#e9e6df')}<path d="M${x+20} ${y+h-20}L${x+w-20} ${y+20}M${x+20} ${y+20}L${x+w-20} ${y+h-20}" stroke="#c0bdb6"/><circle cx="${x+w/2}" cy="${y+h/2}" r="${Math.min(w,h)/4}" fill="none" stroke="#7c827f" stroke-width="2"/>`;
for(const s of screens){
 const shared=s.role==='compartida',creator=s.role==='creador';
 const color=creator?'#cfbdff':shared?'#acd8ee':'#bce99d';
 const lines=s.lines.map(t=>t.replace('EPIC / MÓVIL','EPIC / DESKTOP').replace('Filtros: móvil','Filtros: PC').replace('del móvil','del equipo').replace('objetivo: móvil','objetivo: PC'));
 let body='';
 if(shared){
  body=rect(52,154,560,642,color)+text(92,222,'JUEGA. CREA. CONECTA.',28,'#25282c',700)+text(92,265,'Tu cuenta conecta ambas experiencias.',20)+art(92,302,480,350)+text(92,702,'Jugadores / Desarrolladores y creadores',19)+text(92,748,'Propuesta académica del ecosistema Epic Games',15);
  body+=text(688,199,s.title,34,'#25282c',700)+text(688,238,'CUENTA EPIC / '+s.id,14);
  lines.forEach((t,i)=>{body+=rect(688,276+i*77,524,60,i===0?color:'#f4f2ec')+text(710,313+i*77,t,18)});
  s.actions.forEach(([label],i)=>{body+=rect(688,610+i*57,524,43,i===0?'#25282c':'#fffdf6')+text(710,638+i*57,label,17,i===0?'#fffdf6':'#25282c')});
 }else{
  body=rect(24,128,218,682,'#f0eee8')+text(49,174,creator?'ESTUDIO / DEMO':'TU ESPACIO',16,'#25282c',700);
  (creator?['Resumen','Mis proyectos','Crear proyecto','Estado y métricas']:['Descubrir','Buscar juegos','Biblioteca','Mi cuenta']).forEach((t,i)=>{body+=rect(40,200+i*58,186,42,i===0?color:'#f0eee8')+text(54,227+i*58,t,17)});
  body+=text(49,759,'Cambiar rol',17)+text(280,173,s.title,32,'#25282c',700)+text(280,208,s.goal,17);
  const gallery=['J01','J02','J03','J06'].includes(s.id);
  if(gallery){
   body+=art(280,245,565,275)+text(304,290,'ÓRBITA',29,'#25282c',700)+text(304,490,'Aventura espacial / juego de ejemplo',19);
   lines.forEach((t,i)=>{body+=rect(873,245+i*72,365,60,i===0?color:'#f4f2ec')+text(888,280+i*72,t,14)});
   body+=rect(280,544,958,83,'#f4f2ec')+text(304,576,'Información del juego',18,'#25282c',700)+text(304,605,'Compatibilidad PC · Clasificación · Descripción · Condiciones de compra',17);
  }else if(['D01','D02','D06'].includes(s.id)){
   ['PROYECTOS','ESTADO','RESULTADOS'].forEach((t,i)=>{const x=280+i*323;body+=rect(x,245,304,113,i===0?color:'#f4f2ec')+text(x+20,279,t,14)+text(x+20,323,['1 proyecto',s.id==='D06'?'En revisión':'Borrador','Sin publicar'][i],25,'#25282c',700)});
   body+=rect(280,386,950,235)+text(301,424,'PROYECTO / Órbita',20,'#25282c',700);
   lines.forEach((t,i)=>{body+=text(301,469+i*39,t,18)});
  }else{
   lines.forEach((t,i)=>{body+=rect(280,245+i*84,612,68,i===0?color:'#f4f2ec')+text(300,286+i*84,t,18)});
   body+=rect(922,245,310,370,'#f0eee8')+text(947,286,creator?'PUBLICACIÓN':'RESUMEN',19,'#25282c',700)+art(947,308,260,153)+text(947,496,'Órbita / demostración',17)+text(947,534,creator?'Revisión antes de publicar':'Compra digital simulada',16)+text(947,577,creator?'Guarda tus cambios.':'Consulta las condiciones.',16);
  }
  s.actions.forEach(([label],i)=>{const x=280+(i%2)*483,y=665+Math.floor(i/2)*59;body+=rect(x,y,465,45,i===0?'#25282c':'#fffdf6')+text(x+20,y+29,label,17,i===0?'#fffdf6':'#25282c')});
 }
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="860" viewBox="0 0 1280 860"><title>${s.id} · ${e(s.title)} · Desktop</title><rect width="1280" height="860" fill="#e6e3db"/><g font-family="Segoe UI,Arial,sans-serif">${rect(10,10,1260,840)}${rect(10,10,1260,40,'#e6e3db')}<circle cx="34" cy="30" r="5" fill="#92958e"/><circle cx="54" cy="30" r="5" fill="#92958e"/><circle cx="74" cy="30" r="5" fill="#92958e"/>${text(110,36,'epic.example / propuesta de escritorio',13)}${text(36,96,'EPIC / DESKTOP',23,'#25282c',800)}${text(880,94,s.id+' / '+s.role.toUpperCase(),16)}<path d="M24 116H1256" stroke="#55585c"/>${body}${text(36,838,'SKETCH DESKTOP · 1280 × 860 · PROPUESTA ACADÉMICA · '+s.id,12)}</g></svg>`;
 fs.writeFileSync(base+'imagenes/desktop/'+s.id+'.svg',svg);
}
console.log('18 sketches desktop SVG generados.');
