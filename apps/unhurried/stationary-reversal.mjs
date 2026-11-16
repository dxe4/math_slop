import {REVERSAL_PRESETS,evaluateReversal} from './stationary-reversal-model.mjs';
import {reversalOutput,reversalSummary} from './stationary-reversal-markup.mjs';
let nextId=0;
export function mountReversal(host){
  if(host.dataset.stationaryReversalMounted==='true')return;
  const el=(tag,text,className)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;},workshop=el('div','','reversal-workshop'),prefix=`reversal-live-${++nextId}`;
  workshop.append(el('p','Predict: can identical occupancies conceal a preferred direction around a loop? Compare the two kernels, then inspect a four-observation record and its reversal. Every record starts from the stated stationary law.'));
  const controls=el('fieldset','','reversal-controls');controls.append(el('legend','Choose a known source and a hypothetical three-transition path'));const inputs={};
  for(const[id,text]of [['preset','Transition rule'],['x0','Initial state X₀'],['x1','After one step X₁'],['x2','After two steps X₂'],['x3','After three steps X₃']]){const label=el('label');label.append(el('span',text));const select=el('select');select.dataset.stationaryReversalControl=id;if(id==='preset')for(const[value,label]of Object.entries(REVERSAL_PRESETS))select.add(new Option(label,value));else for(let i=0;i<3;i++)select.add(new Option('ABC'[i],String(i)));select.value=id==='preset'?'circulating':String([0,1,2,0][Number(id.slice(1))]);label.append(select);controls.append(label);inputs[id]=select;}
  const actions=el('div','','reversal-actions'),output=el('div');output.dataset.stationaryReversalOutput='';const status=el('p','','sr-only');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const update=()=>{const m=evaluateReversal({preset:inputs.preset.value,path:[0,1,2,3].map(i=>Number(inputs['x'+i].value))});output.innerHTML=reversalOutput(m,prefix);status.textContent=reversalSummary(m);};
  for(const[text,restore]of [['Reverse inspected word',false],['Restore worked setting',true]]){const button=el('button',text,'button secondary');button.type='button';button.addEventListener('click',()=>{const path=restore?[0,1,2,0]:[0,1,2,3].map(i=>Number(inputs['x'+i].value)).reverse();if(restore)inputs.preset.value='circulating';path.forEach((x,i)=>inputs['x'+i].value=String(x));update();});actions.append(button);}
  for(const select of Object.values(inputs))select.addEventListener('change',update);workshop.append(controls,actions,output,status);update();host.append(workshop);const fallback=host.querySelector('[data-stationary-reversal-fallback]');if(fallback)fallback.hidden=true;host.dataset.stationaryReversalMounted='true';
}
