import {evaluateInclusion} from './inclusion-weighting-model.mjs';
import {inclusionOutput,inclusionSummary} from './inclusion-weighting-markup.mjs';
let nextId=0;
export function mountInclusion(host){
  if(host.dataset.inclusionMounted==='true')return;
  const el=(tag,text,className)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;},workshop=el('div','','inclusion-workshop'),prefix=`inclusion-live-${++nextId}`;
  workshop.append(el('p','Predict first: do inverse weights remain unbiased if we divide by their random sum? Inspect each possible sample, keeping the population and its sampling design fixed.'));
  const controls=el('fieldset','','inclusion-controls');controls.append(el('legend','Inspect one possible unique subset'));const label=el('label');label.append(el('span','Subset to inspect'));const select=el('select');select.dataset.inclusionControl='sample';for(const[value,text]of [['0','Subset 12 · probability 1/2'],['1','Subset 13 · probability 1/4'],['2','Subset 24 · probability 1/4']])select.add(new Option(text,value));label.append(select);controls.append(label);
  const output=el('div');output.dataset.inclusionOutput='';const status=el('p','','sr-only');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const update=()=>{const m=evaluateInclusion({sample:Number(select.value)});output.innerHTML=inclusionOutput(m,prefix);status.textContent=inclusionSummary(m);};
  select.addEventListener('change',update);workshop.append(controls,output,status);update();host.append(workshop);const fallback=host.querySelector('[data-inclusion-fallback]');if(fallback)fallback.hidden=true;host.dataset.inclusionMounted='true';
}
