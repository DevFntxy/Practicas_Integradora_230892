import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {ChromeVisualBrowser} from 'file:///C:/Users/derek/.agents/skills/archify/bin/visual-check.mjs';
const dir=path.dirname(fileURLToPath(import.meta.url));
const browser=new ChromeVisualBrowser('C:/Program Files/Google/Chrome/Application/chrome.exe');
try{
 const session=await browser.sessionPromise;
 const send=(m,p)=>browser.cdp.send(m,p,session);
 const loaded=browser.cdp.waitFor('Page.loadEventFired',session);
 await send('Page.navigate',{url:pathToFileURL(path.join(dir,'index.html')).href});await loaded;
 const measurements=[];
 for(const [width,height] of [[1440,900],[1600,1000],[1920,1080],[2048,1320]]){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
  await send('Runtime.evaluate',{expression:'new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))',awaitPromise:true});
  const m=await send('Runtime.evaluate',{expression:'({width:innerWidth,height:innerHeight,scrollWidth:document.documentElement.scrollWidth,scrollHeight:document.documentElement.scrollHeight,roles:[...document.querySelectorAll(".role")].map(t=>({text:t.textContent,x:t.getBBox().x,width:t.getBBox().width}))})',returnByValue:true});measurements.push(m.result.value);
 }
 const shot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(path.join(dir,'diagrama-vista-previa.png'),Buffer.from(shot.data,'base64'));
 const png=await send('Runtime.evaluate',{expression:`new Promise(resolve=>{const s=new XMLSerializer().serializeToString(document.querySelector('svg'));const im=new Image();im.onload=()=>{const c=document.createElement('canvas');c.width=2560;c.height=1920;c.getContext('2d').drawImage(im,0,0,2560,1920);resolve(c.toDataURL('image/png').split(',')[1])};im.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(s)})`,awaitPromise:true,returnByValue:true});
 fs.writeFileSync(path.join(dir,'diagrama-roles-lumen.png'),Buffer.from(png.result.value,'base64'));
 fs.writeFileSync(path.join(dir,'verificacion-diseno.json'),JSON.stringify(measurements,null,2));console.log(JSON.stringify(measurements));
}finally{await browser.close()}
