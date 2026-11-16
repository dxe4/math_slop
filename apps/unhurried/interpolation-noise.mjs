import{NOISE_RECORDS,evaluateInterpolationNoise,noiseFraction}from'./interpolation-noise-model.mjs';
import{noiseOutput,noiseRatio,noiseSummary}from'./interpolation-noise-markup.mjs';
let nextId=0;
export function mountInterpolationNoise(host){
  if(host.dataset.interpolationNoiseMounted==='true')return;
  const el=(tag,text,className)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;},workshop=el('div','','noise-workshop'),prefix=`noise-live-${++nextId}`;
  workshop.append(el('p','Predict: can errors of at most 1/100 at every node become larger between nodes? Compare one fixed record with the sharp bound while moving the probe.'));
  const controls=el('fieldset','','noise-controls');controls.append(el('legend','Keep the three nodes and the error budget fixed'));const inputs={};
  for(const[id,title,options]of[['record','Recorded node errors',Object.entries(NOISE_RECORDS)],['probe','Exact probe x',Array.from({length:17},(_,i)=>[String(i-8),noiseRatio(noiseFraction(i-8,8))])]]){const label=el('label');label.append(el('span',title));const select=el('select');select.dataset.interpolationNoiseControl=id;for(const[v,t]of options)select.add(new Option(t,v));label.append(select);controls.append(label);inputs[id]=select;}
  inputs.probe.value='4';const output=el('div');output.dataset.interpolationNoiseOutput='';const status=el('p','','sr-only');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const update=()=>{const m=evaluateInterpolationNoise({record:inputs.record.value,probe:Number(inputs.probe.value)});output.innerHTML=noiseOutput(m,prefix);status.textContent=noiseSummary(m);};
  const restore=el('button','Restore right-target record and x=1/2','button secondary');restore.type='button';restore.addEventListener('click',()=>{inputs.record.value='right';inputs.probe.value='4';update();});for(const s of Object.values(inputs))s.addEventListener('change',update);
  workshop.append(controls,restore,output,status);update();host.append(workshop);const fallback=host.querySelector('[data-interpolation-noise-fallback]');if(fallback)fallback.hidden=true;host.dataset.interpolationNoiseMounted='true';
}
