import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {ChromeVisualBrowser} from 'file:///C:/Users/derek/.agents/skills/archify/bin/visual-check.mjs';
const base=path.resolve('Practica06');
const b=new ChromeVisualBrowser('C:/Program Files/Google/Chrome/Application/chrome.exe');
const session=await b.sessionPromise;
const send=(method,params)=>b.cdp.send(method,params,session);
const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
const nav=async file=>{const loaded=b.cdp.waitFor('Page.loadEventFired',session);await send('Page.navigate',{url:pathToFileURL(path.join(base,file)).href});await loaded;};
const shot=async file=>{const r=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});fs.writeFileSync(path.join(base,file),Buffer.from(r.data,'base64'));};
try{
 await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
 await nav('index.html');
 const report=await evaluate(`(()=>{const ids=new Set(SCREENS.map(s=>s.id));if(ids.size!==18)throw Error('Pantallas duplicadas');for(const s of SCREENS)for(const [label,to] of s.actions)if(!ids.has(to))throw Error(to);const reached=new Set();function visit(id){if(reached.has(id))return;reached.add(id);SCREENS.find(s=>s.id===id).actions.forEach(a=>visit(a[1]));}visit('C01');if(reached.size!==18)throw Error('Pantallas inaccesibles');tab('prototype');show('C01');for(const target of ['C02','C06','J01','J02','J03','J04','J05','J06']){const btn=[...document.querySelectorAll('#actions button')].find(b=>b.textContent.endsWith(target));if(!btn)throw Error('Ruta '+target);btn.click();}if(current!=='J06')throw Error('Compra incompleta');history=[];show('C06');for(const target of ['D01','D02','D03','D04','D05','D06']){const btn=[...document.querySelectorAll('#actions button')].find(b=>b.textContent.endsWith(target));if(!btn)throw Error('Ruta '+target);btn.click();}document.getElementById('restart').click();tab('map');return {screens:ids.size,reachable:reached.size,playerJourney:'pass',creatorJourney:'pass',horizontalOverflow:document.documentElement.scrollWidth>innerWidth};})()`);
 await shot('catalogo-desktop.png');
 await evaluate("show('J03');tab('prototype')");await shot('prototipo-desktop.png');
 await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:false});
 report.mobile=await evaluate("({horizontalOverflow:document.documentElement.scrollWidth>innerWidth})");await shot('prototipo-movil.png');
 await send('Emulation.setDeviceMetricsOverride',{width:360,height:720,deviceScaleFactor:1,mobile:false});
 const screens=JSON.parse(fs.readFileSync(path.join(base,'pantallas.json'),'utf8'));
 for(const s of screens){await nav('imagenes/'+s.id+'.svg');await shot('imagenes/'+s.id+'.png');}
 fs.writeFileSync(path.join(base,'verificacion-prototipo.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));
 await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
 await nav('index.html');
 await evaluate("setDevice('desktop');tab('map')");await shot('catalogo-pantallas-desktop.png');
 const desktopReport=await evaluate(`(()=>{show('C01');tab('prototype');for(const to of ['C02','C06','J01','J02','J03','J04','J05','J06','C06','D01','D02','D03','D04','D05','D06']){const b=[...document.querySelectorAll('#actions button')].find(b=>b.textContent.endsWith(to));if(!b)throw Error('Desktop ruta '+to);b.click();if(!document.getElementById('phone').src.includes('/desktop/'+to+'.svg'))throw Error('Imagen desktop incorrecta');}const before=history.join();setDevice('mobile');setDevice('desktop');if(current!=='D06'||history.join()!==before)throw Error('Historial perdido');return {playerJourney:'pass',creatorJourney:'pass',deviceSwitchPreservesHistory:true,horizontalOverflow:document.documentElement.scrollWidth>innerWidth};})()`);
 await evaluate("show('J03');scrollTo(0,document.getElementById('prototype').offsetTop)");await shot('prototipo-pantalla-desktop.png');
 await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:false});
 desktopReport.mobileViewport=await evaluate("({horizontalOverflow:document.documentElement.scrollWidth>innerWidth})");
 await send('Emulation.setDeviceMetricsOverride',{width:1280,height:860,deviceScaleFactor:1,mobile:false});
 for(const s of screens){await nav('imagenes/desktop/'+s.id+'.svg');await shot('imagenes/desktop/'+s.id+'.png');}
 fs.writeFileSync(path.join(base,'verificacion-desktop.json'),JSON.stringify(desktopReport,null,2));console.log(JSON.stringify(desktopReport));
}finally{await b.close()}
