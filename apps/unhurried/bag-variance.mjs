import {BAG_VARIANCE_DEFAULT_N,evaluateBagVariance} from './bag-variance-model.mjs';
import {bagVarianceOutput,bagVarianceSummary} from './bag-variance-markup.mjs';
let nextId=0;
export function mountBagVariance(host){
  if(host.dataset.bagVarianceMounted==='true')return;
  const prefix=`bag-variance-live-${++nextId}`,el=(tag,text,className)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;};
  const workshop=el('div','','bag-variance-workshop');workshop.append(el('p','Predict first: will 16 draws from one bag give a variance below 1/16? Will redrawing the bag do so? Change the draw count while keeping the two protocols and bag population fixed.'));
  const controls=el('fieldset','','bag-variance-controls');controls.append(el('legend','Choose the number of replacement draws per run'));const label=el('label');label.append(el('span','Draws per run, n'));const n=el('input');n.type='range';n.min='1';n.max='32';n.step='1';n.value=String(BAG_VARIANCE_DEFAULT_N);n.id=`${prefix}-n`;n.dataset.bagVarianceControl='n';const count=el('output');count.htmlFor=n.id;label.append(n,count);controls.append(label);
  const actions=el('div','','bag-variance-actions'),output=el('div');output.dataset.bagVarianceOutput='';const status=el('p','','sr-only');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const update=()=>{const tableOpen=output.querySelector('.bag-variance-law')?.open??false,m=evaluateBagVariance(Number(n.value));output.innerHTML=bagVarianceOutput(m,prefix,{tableOpen});count.value=`${m.n} ${m.n===1?'draw':'draws'} per run`;n.setAttribute('aria-valuetext',count.value);status.textContent=bagVarianceSummary(m);};
  for(const[text,value]of [['Compare one draw',1],['Compare 16 draws',16],['Restore four draws',4]]){const b=el('button',text,'button secondary');b.type='button';b.addEventListener('click',()=>{n.value=String(value);update();});actions.append(b);}
  n.addEventListener('input',update);workshop.append(controls,actions,output,status);update();host.append(workshop);const fallback=host.querySelector('[data-bag-variance-fallback]');if(fallback)fallback.hidden=true;host.dataset.bagVarianceMounted='true';
}
