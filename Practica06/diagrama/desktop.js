// The two layouts share screen IDs and navigation history.
let deviceMode='mobile';
const modeBar=document.createElement('div');
modeBar.className='device-toolbar';
modeBar.innerHTML='<div><span class="kicker">Formato de pantalla</span><p>18 pantallas · 2 versiones · 36 sketches</p></div><div role="group" aria-label="Formato de pantalla"><button data-device="mobile" class="active" aria-pressed="true">Móvil</button> <button data-device="desktop" aria-pressed="false">Desktop</button></div>';
document.querySelector('main > nav').after(modeBar);
const style=document.createElement('style');
style.textContent=`.device-toolbar{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 22px;border:1px solid var(--line);border-radius:12px;margin:0 0 24px}.device-toolbar p{margin:6px 0 0;color:var(--muted);font-size:13px}body[data-device=desktop] .grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}body[data-device=desktop] .screen:after{display:none}body[data-device=desktop] .workspace{grid-template-columns:minmax(0,1fr);max-width:1280px;gap:18px}body[data-device=desktop] .phone{max-height:none;aspect-ratio:1280/860}body[data-device=desktop] .detail{padding:0;display:grid;grid-template-columns:1fr 1fr;gap:8px 36px}body[data-device=desktop] .detail h2{margin:0}body[data-device=desktop] .detail .actions{grid-column:2;grid-row:1 / span 6;margin:0}body[data-device=desktop] .detail .kicker{grid-column:1}body[data-device=desktop] .detail p{margin:8px 0}.download-png{margin-left:20px}@media(max-width:700px){.device-toolbar{align-items:flex-start;flex-direction:column}body[data-device=desktop] .grid{grid-template-columns:1fr}body[data-device=desktop] .detail{display:block}.device-toolbar button{padding:10px 22px}}@media print{.device-toolbar{display:none}body[data-device=desktop] .grid{grid-template-columns:repeat(2,minmax(0,1fr))}}`;
document.head.append(style);
const pngLink=document.createElement('a');pngLink.id='download-png';pngLink.className='download-png';pngLink.download='';pngLink.textContent='Descargar PNG ↓';$('download').after(pngLink);
const originalShow=show;
function refreshDevice(){
 const folder=deviceMode==='desktop'?'./diagrama/imagenes/desktop/':'./diagrama/imagenes/';
 document.body.dataset.device=deviceMode;
 document.querySelectorAll('#lanes .screen').forEach(card=>{const img=card.querySelector('img');const id=img.getAttribute('src').split('/').pop().replace('.svg','');img.src=folder+id+'.svg';img.alt=`${deviceMode==='desktop'?'Desktop':'Móvil'} ${id}: ${SCREENS.find(s=>s.id===id).title}`;});
 $('phone').src=folder+current+'.svg';$('phone').alt=`${deviceMode==='desktop'?'Desktop':'Móvil'} ${current}: ${SCREENS.find(s=>s.id===current).title}`;
 $('download').href=folder+current+'.svg';pngLink.href=folder+current+'.png';
 document.querySelectorAll('[data-device]').forEach(b=>{if(b.tagName!=='BUTTON')return;const active=b.dataset.device===deviceMode;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
}
show=function(id,record=false){originalShow(id,record);refreshDevice();};
function setDevice(mode){deviceMode=mode;refreshDevice();}
modeBar.querySelectorAll('button').forEach(b=>b.onclick=()=>setDevice(b.dataset.device));
document.title='Práctica 06 · Epic móvil y desktop';
document.querySelector('.brand').textContent='EPIC / EXPERIENCIAS';
document.querySelector('.hero .kicker').textContent='Del modelo CANVAS a móvil y desktop';
document.querySelector('.hero p').textContent+=' Explora la misma secuencia en móvil o escritorio, con diseños adaptados a cada formato.';
document.querySelector('footer').textContent='Epic Games · propuesta académica · 18 pantallas en móvil y desktop · 36 sketches en SVG y PNG · Sin dependencias de red';
refreshDevice();
