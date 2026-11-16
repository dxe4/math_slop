import {evaluateSimpson,SIMPSON_DEFAULTS} from './simpson-model.mjs';
import {simpsonOutput,simpsonSummary} from './simpson-markup.mjs';
let nextId=0;
export function mountSimpsonExplorer(host) {
  if(host.dataset.simpsonMounted==='true') return;
  const prefix=`simpson-live-${++nextId}`;
  const element=(tag,text,className)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;};
  const workshop=element('div','','simpson-workshop');
  const intro=element('p','Predict a tie or reversal before changing the allocations. Each route has 1,000 hypothetical attempts; only its easy/hard mix changes. The common mix changes the standardized comparison, not either observed-mix total.');
  const controls=element('fieldset','','simpson-controls'); controls.append(element('legend','Change the weights, keeping the four rates fixed'));
  const inputs={},outputs={};
  for(const [key,text] of [['easyA','A: easy-board share'],['easyB','B: easy-board share'],['target','Common comparison: easy-board share']]) {
    const label=element('label'); label.append(element('span',text));
    const input=element('input'); input.type='range';input.min='0';input.max='100';input.step='1';input.value=String(SIMPSON_DEFAULTS[key]);input.dataset.simpsonControl=key;input.id=`${prefix}-${key}`;
    const output=element('output');output.htmlFor=input.id;inputs[key]=input;outputs[key]=output;label.append(input,output);controls.append(label);
  }
  const actions=element('div','','simpson-actions');
  const output=element('div');output.dataset.simpsonOutput='';
  const status=element('p','','sr-only');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const update=(targetOnly=false)=>{
    const model=evaluateSimpson(Object.fromEntries(Object.entries(inputs).map(([k,v])=>[k,Number(v.value)])));
    for(const key of Object.keys(inputs)){outputs[key].value=`${model[key]}%`;inputs[key].setAttribute('aria-valuetext',`${model[key]} percent easy boards`);}
    output.innerHTML=simpsonOutput(model,prefix);
    status.textContent=targetOnly?`Common mix: ${model.target}% easy. Standardized A ${model.standardized.a/10}%, B ${model.standardized.b/10}%; difference 10 percentage points.`:simpsonSummary(model);
  };
  for(const [text,state] of [['Show the exact tie',{easyA:10,easyB:30,target:50}],['Use equal observed mixes',{easyA:50,easyB:50,target:50}],['Show an empty subgroup',{easyA:0,easyB:100,target:50}],['Restore worked setting',SIMPSON_DEFAULTS]]) {
    const button=element('button',text,'button secondary');button.type='button';button.addEventListener('click',()=>{for(const [k,v] of Object.entries(state))inputs[k].value=String(v);update();});actions.append(button);
  }
  for(const [key,input] of Object.entries(inputs)) input.addEventListener('input',()=>update(key==='target'));
  workshop.append(intro,controls,actions,output,status);update();host.append(workshop);
  const fallback=host.querySelector('[data-simpson-fallback]');if(fallback)fallback.hidden=true;
  host.dataset.simpsonMounted='true';
}
