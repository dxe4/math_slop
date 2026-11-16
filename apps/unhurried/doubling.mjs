import {doublingAtCap,DOUBLING_DEFAULT_CAP} from './doubling-model.mjs';
import {doublingOutput,doublingSummary} from './doubling-markup.mjs';
let nextId=0;
export function mountDoubling(host) {
  if(host.dataset.doublingMounted==='true')return;
  const prefix=`doubling-live-${++nextId}`;
  const element=(tag,text,className)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;};
  const workshop=element('div','','doubling-workshop');
  workshop.append(element('p','Before changing K, predict the no-head probability, its score and its contribution to the mean. Does a short mean stopping time control all three? This is an exact finite-law calculation with imaginary paper points.'));
  const fieldset=element('fieldset','','doubling-controls');fieldset.append(element('legend','Choose a deterministic cap'));
  const label=element('label');label.append(element('span','Maximum number of tosses K'));
  const cap=element('input');cap.type='range';cap.min='0';cap.max='24';cap.step='1';cap.value=String(DOUBLING_DEFAULT_CAP);cap.id=`${prefix}-cap`;cap.dataset.doublingControl='cap';
  const capValue=element('output');capValue.htmlFor=cap.id;label.append(cap,capValue);fieldset.append(label);
  const actions=element('div','','doubling-actions'),output=element('div');output.dataset.doublingOutput='';
  const status=element('p','','sr-only');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const update=()=>{const m=doublingAtCap(Number(cap.value));output.innerHTML=doublingOutput(m,prefix);capValue.value=`${m.cap} tosses maximum`;cap.setAttribute('aria-valuetext',`${m.cap} tosses maximum`);status.textContent=doublingSummary(m);};
  for(const[text,value]of [['No tosses',0],['A rarer tail',20],['Restore worked cap',DOUBLING_DEFAULT_CAP]]) {const button=element('button',text,'button secondary');button.type='button';button.addEventListener('click',()=>{cap.value=String(value);update();});actions.append(button);}
  cap.addEventListener('input',update);workshop.append(fieldset,actions,output,status);update();host.append(workshop);
  const fallback=host.querySelector('[data-doubling-fallback]');if(fallback)fallback.hidden=true;host.dataset.doublingMounted='true';
}
