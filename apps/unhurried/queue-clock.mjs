import {QUEUE_DEFAULTS,QUEUE_FIXTURES,QUEUE_PROTOCOLS,evaluateQueueClock} from './queue-clock-model.mjs';
import {queueClockOutput,queueClockSummary,queueJumpOutput} from './queue-clock-markup.mjs';
let nextId=0;
export function mountQueueClock(host) {
  if(host.dataset.queueClockMounted==='true')return;
  const prefix=`queue-clock-live-${++nextId}`;
  const element=(tag,text,className)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;};
  const workshop=element('div','','queue-clock-workshop');
  const intro=element('p','Predict which record overrepresents busy states before choosing a protocol. These are exact equilibrium model proportions, not a simulation. A separate optional control below asks about the kth actual change from an empty start.');
  const controls=element('fieldset','','queue-clock-controls');controls.append(element('legend','Specify what the recorder observes'));
  const inputs={};
  for(const [key,labelText,options]of [['fixture','Queue rates',Object.entries(QUEUE_FIXTURES).map(([id,f])=>[id,f.label])],['protocol','Observation protocol',Object.entries(QUEUE_PROTOCOLS)]]) {
    const label=element('label');label.append(element('span',labelText));const select=element('select');select.dataset.queueClockControl=key;
    for(const[value,text]of options)select.add(new Option(text,value));select.value=QUEUE_DEFAULTS[key];inputs[key]=select;label.append(select);controls.append(label);
  }
  const scaleLabel=element('label');scaleLabel.append(element('span','Multiply both rates by the same factor'));
  const scale=element('input');scale.type='range';scale.min='1';scale.max='3';scale.step='1';scale.value='1';scale.dataset.queueClockControl='scale';scale.id=`${prefix}-scale`;
  const scaleOutput=element('output');scaleOutput.htmlFor=scale.id;inputs.scale=scale;scaleLabel.append(scale,scaleOutput);controls.append(scaleLabel);
  const actions=element('div','','queue-clock-actions'),output=element('div');output.dataset.queueClockOutput='';
  const extra=element('details','','queue-clock-periodicity');extra.append(element('summary','A different question: the kth actual change from empty'));
  extra.append(element('p','A clock-time equilibrium record, an event-frequency record, and a fixed jump index from an empty queue use different observation protocols. This control propagates the last one exactly; it does not simulate elapsed hours.'));
  const jumpLabel=element('label');jumpLabel.append(element('span','Actual jump index k'));
  const jump=element('input');jump.type='range';jump.min='0';jump.max='24';jump.step='1';jump.value='2';jump.dataset.queueClockControl='jump';jump.id=`${prefix}-jump`;inputs.jump=jump;
  const jumpValue=element('output');jumpValue.htmlFor=jump.id;const jumpOutput=element('div');jumpOutput.dataset.queueJumpOutput='';jumpLabel.append(jump,jumpValue);extra.append(jumpLabel,jumpOutput);
  const status=element('p','','sr-only');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const state=()=>Object.fromEntries(Object.entries(inputs).map(([key,input])=>[key,input.type==='range'?Number(input.value):input.value]));
  const update=(jumpOnly=false)=>{
    const m=evaluateQueueClock(state());if(!jumpOnly)output.innerHTML=queueClockOutput(m,prefix);
    jumpOutput.innerHTML=queueJumpOutput(m);scaleOutput.value=`×${m.scale}`;jumpValue.value=String(m.jump);
    scale.setAttribute('aria-valuetext',`${m.scale} times both rates`);jump.setAttribute('aria-valuetext',`${m.jump} actual changes`);
    status.textContent=jumpOnly?`From empty at jump ${m.jump}, reachable states are ${m.fixedJump.parity}; empty probability approximately ${Number(m.fixedJump.empty.n)/Number(m.fixedJump.empty.d)}.`:queueClockSummary(m);
  };
  for(const[text,preset]of [['Compare clock time',{...QUEUE_DEFAULTS,protocol:'clock'}],['Change the load',{...QUEUE_DEFAULTS,fixture:'changed'}],['Recover clock time',{...QUEUE_DEFAULTS,protocol:'recovered'}],['Restore worked setting',QUEUE_DEFAULTS]]) {
    const button=element('button',text,'button secondary');button.type='button';button.addEventListener('click',()=>{for(const[k,v]of Object.entries(preset))inputs[k].value=String(v);update();});actions.append(button);
  }
  for(const[key,input]of Object.entries(inputs))input.addEventListener(input.type==='range'?'input':'change',()=>update(key==='jump'));
  workshop.append(intro,controls,actions,output,extra,status);update();host.append(workshop);
  const fallback=host.querySelector('[data-queue-clock-fallback]');if(fallback)fallback.hidden=true;host.dataset.queueClockMounted='true';
}
