import {COARSENING_GROUPINGS,evaluateCoarsening} from './kl-coarsening-model.mjs';
import {coarseningOutput,coarseningSummary} from './kl-coarsening-markup.mjs';
let nextId=0;
export function mountCoarsening(host){
  if(host.dataset.klCoarseningMounted==='true')return;
  const el=(tag,text,className)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;},workshop=el('div','','coarsening-workshop'),prefix=`coarsening-live-${++nextId}`;
  workshop.append(el('p','Predict: must merging symbols strictly reduce KL? Choose one grouping applied to both laws, then inspect both blocks before making a global conclusion.'));
  const controls=el('fieldset','','coarsening-controls');controls.append(el('legend','Keep the two laws fixed and choose what the observation retains'));const inputs={};
  for(const[id,title,options]of [['grouping','Common grouping rule',Object.entries(COARSENING_GROUPINGS)],['block','Inspect hidden detail within block',[['0','A={1,2}'],['1','B={3,4}']]]]){const label=el('label');label.append(el('span',title));const select=el('select');select.dataset.klCoarseningControl=id;for(const[value,text]of options)select.add(new Option(text,value));label.append(select);controls.append(label);inputs[id]=select;}
  const output=el('div');output.dataset.klCoarseningOutput='';const status=el('p','','sr-only');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const update=()=>{const m=evaluateCoarsening({grouping:inputs.grouping.value,block:Number(inputs.block.value)});m.blocks.forEach((b,i)=>inputs.block.options[i].textContent=`${'AB'[i]}={${b.indices.map(x=>x+1).join(',')}}`);output.innerHTML=coarseningOutput(m,prefix);status.textContent=coarseningSummary(m);};
  const restore=el('button','Restore grouping 12 | 34 and block A','button secondary');restore.type='button';restore.addEventListener('click',()=>{inputs.grouping.value='aligned';inputs.block.value='0';update();});for(const select of Object.values(inputs))select.addEventListener('change',update);
  workshop.append(controls,restore,output,status);update();host.append(workshop);const fallback=host.querySelector('[data-kl-coarsening-fallback]');if(fallback)fallback.hidden=true;host.dataset.klCoarseningMounted='true';
}
