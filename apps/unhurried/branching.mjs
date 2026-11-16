import {evaluateBranching,BRANCHING_DEFAULT_HORIZON} from './branching-model.mjs';
import {branchingOutput,branchingExact,branchingSummary} from './branching-markup.mjs';
let nextId=0;
export function mountBranching(host) {
  if(host.dataset.branchingMounted==='true')return;
  const prefix=`branching-live-${++nextId}`,el=(tag,text,className)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;};
  const workshop=el('div','','branching-workshop');workshop.append(el('p','Predict whether trees extinct by generation 2 have the same ancestor offspring distribution as all trees that eventually die out. The original rule stays (1/4,1/4,1/2); changing the deadline changes the selected set, not the reproduction mechanism.'));
  const controls=el('fieldset','','branching-controls');controls.append(el('legend','Select a deadline, keeping the original model fixed'));
  const label=el('label');label.append(el('span','Extinction deadline generation h'));const input=el('input');input.type='range';input.min='1';input.max='6';input.step='1';input.value=String(BRANCHING_DEFAULT_HORIZON);input.id=`${prefix}-horizon`;input.dataset.branchingControl='horizon';const readout=el('output');readout.htmlFor=input.id;label.append(input,readout);controls.append(label);
  const actions=el('div','','branching-actions'),output=el('div');output.dataset.branchingOutput='';
  const exact=el('details','','branching-exact');exact.append(el('summary','Exact fractions for this deadline'));const exactBody=el('div');exactBody.dataset.branchingExact='';exact.append(exactBody);
  const status=el('p','','sr-only');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const update=()=>{const m=evaluateBranching({horizon:Number(input.value)});output.innerHTML=branchingOutput(m,prefix);exactBody.innerHTML=branchingExact(m);readout.value=`generation ${m.horizon}`;input.setAttribute('aria-valuetext',`generation ${m.horizon}`);status.textContent=branchingSummary(m);};
  for(const[text,value]of [['One generation',1],['A later deadline',6],['Restore worked deadline',2]]){const b=el('button',text,'button secondary');b.type='button';b.addEventListener('click',()=>{input.value=String(value);update();});actions.append(b);}
  input.addEventListener('input',update);workshop.append(controls,actions,output,exact,status);update();host.append(workshop);const fallback=host.querySelector('[data-branching-fallback]');if(fallback)fallback.hidden=true;host.dataset.branchingMounted='true';
}
