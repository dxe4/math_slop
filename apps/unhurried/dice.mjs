import {DICE_EVENTS,DICE_CLUES,evaluateDice,diceSummary} from './dice-model.mjs';
import {diceTable} from './dice-markup.mjs';

export function mountDiceExplorer(host) {
  const defaults={event:'sum',total:Number(host.dataset.total),clue:host.dataset.clue};
  const initial=evaluateDice(defaults);
  const workshop=document.createElement('div');workshop.className='dice-workshop';
  const controls=document.createElement('div');controls.className='dice-controls';
  const makeSelect=(name,label,options,value)=>{
    const wrapper=document.createElement('label');
    const text=document.createElement('span');text.textContent=label;
    const select=document.createElement('select');select.dataset.diceControl=name;
    for(const [key,title] of Object.entries(options))select.add(new Option(title,key));
    select.value=String(value);wrapper.append(text,select);controls.append(wrapper);
    return select;
  };
  const event=makeSelect('event','Event to count',DICE_EVENTS,defaults.event);
  const total=makeSelect('total','Target total',Object.fromEntries(Array.from({length:11},(_,i)=>[i+2,String(i+2)])),defaults.total);
  const clue=host.dataset.allowClues==='yes' ? makeSelect('clue','Information we are given',DICE_CLUES,defaults.clue) : null;
  const reset=document.createElement('button');reset.type='button';reset.className='button secondary';reset.textContent='Restore worked setting';
  const status=document.createElement('p');status.className='dice-summary';status.setAttribute('role','status');
  const table=document.createElement('div');table.className='dice-table-wrap';table.innerHTML=diceTable(initial);
  const assumption=document.createElement('p');assumption.className='dice-assumptions';
  assumption.textContent='Model: two fair, independent six-sided dice before any clue. This grid counts every ordered pair exactly; it is not a series of simulated rolls.';
  workshop.append(controls,reset,status,table,assumption);
  const update=()=>{
    const result=evaluateDice({event:event.value,total:Number(total.value),clue:clue?.value || 'none'});
    total.disabled=event.value!=='sum';
    status.textContent=diceSummary(result);
    // Controls stay in place: changing an event must retain keyboard focus.
    table.innerHTML=diceTable(result);
  };
  for(const control of [event,total,clue].filter(Boolean))control.addEventListener('change',update);
  reset.addEventListener('click',()=>{
    event.value=defaults.event;total.value=String(defaults.total);if(clue)clue.value=defaults.clue;update();
  });
  update();
  host.append(workshop);
  host.querySelector('[data-dice-fallback]').hidden=true;
  host.dataset.diceMounted='true';
}
