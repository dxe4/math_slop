import {evaluateStopping,STOPPING_DEFAULTS} from './stopping-model.mjs';
import {stoppingOutput,stoppingSummary} from './stopping-markup.mjs';
let nextId=0;
export function mountStoppingExplorer(host) {
  if(host.dataset.stoppingMounted==='true')return;
  const prefix=`stopping-live-${++nextId}`;
  const element=(tag,text,className)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;};
  const workshop=element('div','','stopping-workshop');
  const intro=element('p','All settings start at 1 and use fair steps. Predict what happens to survival, recorded duration and surviving position when you remove the right edge. Changing H extends the exact calculation; it does not generate sample paths.');
  const controls=element('fieldset','','stopping-controls');controls.append(element('legend','Change the stopping rule and observation horizon'));
  const inputs={},outputs={};
  const boundaryLabel=element('label');boundaryLabel.append(element('span','Absorbing boundary'));
  const select=element('select');select.dataset.stoppingControl='boundary';
  select.add(new Option('Stop at 0 or N','finite'));select.add(new Option('Stop only at 0: no right edge','halfline'));
  inputs.boundary=select;boundaryLabel.append(select);controls.append(boundaryLabel);
  for(const [key,text,min,max] of [['width','Right edge N (finite board only)',2,12],['horizon','Recorded horizon H, in chimes',1,80]]) {
    const label=element('label');label.append(element('span',text));
    const input=element('input');input.type='range';input.min=String(min);input.max=String(max);input.step='1';input.value=String(STOPPING_DEFAULTS[key]);input.dataset.stoppingControl=key;input.id=`${prefix}-${key}`;
    const output=element('output');output.htmlFor=input.id;inputs[key]=input;outputs[key]=output;label.append(input,output);controls.append(label);
  }
  const actions=element('div','','stopping-actions'),output=element('div');output.dataset.stoppingOutput='';
  const status=element('p','','sr-only');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const update=()=>{
    const m=evaluateStopping({boundary:select.value,width:Number(inputs.width.value),horizon:Number(inputs.horizon.value)});
    inputs.width.disabled=m.boundary==='halfline';
    outputs.width.value=m.boundary==='halfline'?'No right edge':String(m.width);
    outputs.horizon.value=String(m.horizon);
    for(const key of ['width','horizon'])inputs[key].setAttribute('aria-valuetext',key==='width'?`${m.width} spaces`:`${m.horizon} chimes`);
    output.innerHTML=stoppingOutput(m,prefix);status.textContent=stoppingSummary(m);
  };
  for(const [text,state] of [['No survivors after one step',{boundary:'finite',width:2,horizon:1}],['Remove the right edge',{boundary:'halfline',width:4,horizon:32}],['Restore worked setting',STOPPING_DEFAULTS]]) {
    const button=element('button',text,'button secondary');button.type='button';button.addEventListener('click',()=>{for(const[k,v]of Object.entries(state))inputs[k].value=String(v);update();});actions.append(button);
  }
  select.addEventListener('change',update);inputs.width.addEventListener('input',update);inputs.horizon.addEventListener('input',update);
  workshop.append(intro,controls,actions,output,status);update();host.append(workshop);
  const fallback=host.querySelector('[data-stopping-fallback]');if(fallback)fallback.hidden=true;
  host.dataset.stoppingMounted='true';
}
