import {PAIRWISE_PRESETS,TRIPLE_WORDS,evaluatePairwise} from './pairwise-independence-model.mjs';
import {pairwiseOutput,pairwiseSummary} from './pairwise-independence-markup.mjs';
let nextId=0;
export function mountPairwise(host){
  if(host.dataset.pairwiseIndependenceMounted==='true')return;
  const el=(tag,text,className)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;},workshop=el('div','','pairwise-workshop'),prefix=`pairwise-live-${++nextId}`;
  workshop.append(el('p','Predict: will all three pair tables settle the complete three-bit law? Inspect a word, then switch the known source while keeping that word.'));
  const controls=el('fieldset','','pairwise-controls');controls.append(el('legend','Choose a known fair-bit source and one hypothetical word'));const inputs={};
  for(const[id,title,options,value]of [['preset','Source model',Object.entries(PAIRWISE_PRESETS),'xor'],['word','Inspected word XYZ',TRIPLE_WORDS.map(word=>[word,word]),'111']]){const label=el('label');label.append(el('span',title));const select=el('select');select.dataset.pairwiseIndependenceControl=id;for(const[v,text]of options)select.add(new Option(text,v));select.value=value;label.append(select);controls.append(label);inputs[id]=select;}
  const output=el('div');output.dataset.pairwiseIndependenceOutput='';const status=el('p','','sr-only');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const update=()=>{const m=evaluatePairwise({preset:inputs.preset.value,word:inputs.word.value});output.innerHTML=pairwiseOutput(m,prefix);status.textContent=pairwiseSummary(m);};
  const restore=el('button','Restore XOR and word 111','button secondary');restore.type='button';restore.addEventListener('click',()=>{inputs.preset.value='xor';inputs.word.value='111';update();});for(const select of Object.values(inputs))select.addEventListener('change',update);
  workshop.append(controls,restore,output,status);update();host.append(workshop);const fallback=host.querySelector('[data-pairwise-independence-fallback]');if(fallback)fallback.hidden=true;host.dataset.pairwiseIndependenceMounted='true';
}
