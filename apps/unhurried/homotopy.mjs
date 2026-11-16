import {evaluateHomotopy,HOMOTOPY_DEFAULTS} from './homotopy-model.mjs';
import {homotopyOutput,homotopySummary,homotopyVerdict,homotopyPosition} from './homotopy-markup.mjs';
let nextId = 0;
export function mountHomotopyExplorer(host) {
  if (host.dataset.homotopyMounted === 'true') return;
  const prefix = `homotopy-live-${++nextId}`;
  const element = (tag,text,className) => {
    const node = document.createElement(tag);
    if (text) node.textContent=text;
    if (className) node.className=className;
    return node;
  };
  const workshop=element('div','','homotopy-workshop');
  const instructions=element('p','Predict which rule fails before moving s. Changing s deforms the entire path; changing t follows its traversal. The verdict checks every s in [0,1], including values outside the current view.');
  instructions.id=`${prefix}-instructions`;
  const controls=element('fieldset','','homotopy-controls');
  controls.setAttribute('aria-describedby',instructions.id);
  controls.append(element('legend','Choose a loop and a candidate contraction'));
  const inputs={};
  const choices={space:['Ambient space',[['disk','Closed unit disk'],['punctured','Plane with 0 deleted']]],loop:['Initial loop',[['once','One counterclockwise turn'],['outback','One turn, then retrace backwards']]],method:['Candidate formula',[['linear','Straight lines toward (1,0)'],['angle','Multiply the followed angle by 1−s']]]};
  for (const [key,[labelText,options]] of Object.entries(choices)) {
    const label=element('label'); label.append(element('span',labelText));
    const select=element('select'); select.dataset.homotopyControl=key;
    for (const [value,text] of options) select.add(new Option(text,value));
    select.value=HOMOTOPY_DEFAULTS[key]; inputs[key]=select; label.append(select); controls.append(label);
  }
  const labels={progress:'Deformation s',position:'Position along the path t'};
  const counters={};
  for (const key of ['progress','position']) {
    const label=element('label'); label.append(element('span',labels[key]));
    const input=element('input'); input.type='range'; input.min='0'; input.max='100'; input.step='1'; input.value=String(HOMOTOPY_DEFAULTS[key]); input.dataset.homotopyControl=key;
    const counter=element('output'); input.id=`${prefix}-${key}`; counter.htmlFor=input.id; counters[key]=counter;
    label.append(input,counter); controls.append(label); inputs[key]=input;
  }
  const actions=element('div','','homotopy-actions');
  const presets=[['See the exact crossing',{space:'punctured',loop:'once',method:'linear',progress:50,position:50}],['Contract a retraced loop',{space:'punctured',loop:'outback',method:'angle',progress:50,position:25}],['Check the basepoint trap',{space:'punctured',loop:'once',method:'angle',progress:50,position:100}],['Restore worked setting',HOMOTOPY_DEFAULTS]];
  const output=element('div','','homotopy-output'); output.dataset.homotopyOutput='';
  const status=element('p','','sr-only'); status.setAttribute('role','status'); status.setAttribute('aria-live','polite');
  const update=(positionOnly=false)=>{
    const state=Object.fromEntries(Object.entries(inputs).map(([key,input])=>[key,input.type==='range'?Number(input.value):input.value]));
    const model=evaluateHomotopy(state);
    for (const key of ['progress','position']) { counters[key].value=`${state[key]}/100`; inputs[key].setAttribute('aria-valuetext',`${state[key]} divided by 100`); }
    output.innerHTML=homotopyOutput(model,prefix);
    status.textContent=positionOnly?homotopyPosition(model):homotopySummary(model)+' '+homotopyVerdict(model);
  };
  for (const [text,state] of presets) {
    const button=element('button',text,'button secondary'); button.type='button';
    button.addEventListener('click',()=>{for(const [key,value] of Object.entries(state)) inputs[key].value=String(value);update();}); actions.append(button);
  }
  for (const [key,input] of Object.entries(inputs)) input.addEventListener(input.type==='range'?'input':'change',()=>update(key==='position'));
  workshop.append(instructions,controls,actions,output,status); update(); host.append(workshop);
  const fallback=host.querySelector('[data-homotopy-fallback]'); if (fallback) fallback.hidden=true;
  host.dataset.homotopyMounted='true';
}
