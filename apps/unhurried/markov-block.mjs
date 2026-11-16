import {BLOCK_PRESETS,evaluateMarkovBlock} from './markov-block-model.mjs';
import {blockOutput,blockSummary} from './markov-block-markup.mjs';
let nextId=0;
export function mountMarkovBlock(host){
  if(host.dataset.markovBlockMounted==='true')return;
  const el=(tag,text,className)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;},workshop=el('div','','markov-block-workshop'),prefix=`markov-block-live-${++nextId}`;
  workshop.append(el('p','Predict: when can the visible label U replace either hidden state A or B, regardless of how the chain started? Compare the block totals, then change a hypothetical initial mixture.'));
  const controls=el('fieldset','','markov-block-controls');controls.append(el('legend','Choose a known matrix and inspect an initial mixture'));const inputs={};
  for(const [id,text]of [['preset','Hidden transition rule'],['wNumerator','Initial chance of A inside U']]){const label=el('label');label.append(el('span',text));const select=el('select');select.dataset.markovBlockControl=id;if(id==='preset')for(const[value,label]of Object.entries(BLOCK_PRESETS))select.add(new Option(label,value));else for(const[value,label]of [['0','0 · start at B'],['1','1/4'],['2','1/2'],['3','3/4'],['4','1 · start at A']])select.add(new Option(label,value));select.value=id==='preset'?'equal':'2';label.append(select);controls.append(label);inputs[id]=select;}
  const output=el('div');output.dataset.markovBlockOutput='';const status=el('p','','sr-only');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const update=()=>{const m=evaluateMarkovBlock({preset:inputs.preset.value,wNumerator:Number(inputs.wNumerator.value)});output.innerHTML=blockOutput(m,prefix);status.textContent=blockSummary(m);};for(const select of Object.values(inputs))select.addEventListener('change',update);
  workshop.append(controls,output,status);update();host.append(workshop);const fallback=host.querySelector('[data-markov-block-fallback]');if(fallback)fallback.hidden=true;host.dataset.markovBlockMounted='true';
}
