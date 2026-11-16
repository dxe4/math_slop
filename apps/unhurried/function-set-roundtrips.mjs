import{SET_ROUNDTRIP_PRESETS,evaluateSetRoundTrip,getRoundTripDefault}from'./function-set-roundtrips-model.mjs';
import{roundTripOutput,roundTripSummary,roundTripSet}from'./function-set-roundtrips-markup.mjs';
export function mountFunctionSetRoundTrips(host){
  if(host.dataset.functionSetMounted==='true')return;
  const el=(tag,text,className)=>{const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;};
  const workshop=el('div','','roundtrip-workshop'),controls=el('fieldset','','roundtrip-controls');controls.append(el('legend','Choose a complete map and a direction'));
  workshop.append(el('p','Predict before changing a selection: will all original members return, will any new ones appear, or will some disappear? The full function stays visible; no input witness is chosen on your behalf.'));
  const selects={};
  for(const[key,title,options]of[['preset','Fixed map',Object.entries(SET_ROUNDTRIP_PRESETS).map(([k,v])=>[k,v.title])],['direction','Round-trip direction',[['input','Input S → image → preimage'],['output','Target T → preimage → image']]]]){
    const label=el('label');label.append(el('span',title));const select=el('select');select.dataset.functionSetControl=key;for(const[value,text]of options)select.add(new Option(text,value));label.append(select);controls.append(label);selects[key]=select;
  }
  selects.preset.value='O';const selectionBox=el('fieldset','','roundtrip-selection'),output=el('div'),status=el('p','','sr-only');output.dataset.functionSetOutput='';status.setAttribute('role','status');status.setAttribute('aria-live','polite');let selected=getRoundTripDefault(),checkboxes=[];
  const update=(reset=false)=>{const m=evaluateSetRoundTrip({preset:selects.preset.value,direction:selects.direction.value,selection:selected});output.innerHTML=roundTripOutput(m);status.textContent=(reset?`Selection reset to ${roundTripSet(m.start)} for the current map and direction. `:'')+roundTripSummary(m);};
  const renderSelection=()=>{
    const map=SET_ROUNDTRIP_PRESETS[selects.preset.value],input=selects.direction.value==='input',side=input?map.domain:map.codomain;
    selectionBox.replaceChildren(el('legend',input?'Select the input set S':'Select the target set T'));checkboxes=[];
    for(const value of side){const label=el('label'),checkbox=el('input');checkbox.type='checkbox';checkbox.dataset.functionSetMember=String(value);checkbox.checked=selected.includes(value);label.append(checkbox,el('span',String(value)));selectionBox.append(label);checkboxes.push({value,checkbox});checkbox.addEventListener('change',()=>{selected=checkboxes.filter(x=>x.checkbox.checked).map(x=>x.value);update();});}
  };
  for(const select of Object.values(selects))select.addEventListener('change',()=>{selected=getRoundTripDefault(selects.preset.value,selects.direction.value);renderSelection();update(true);});
  const restore=el('button','Restore map O and input set {a,c}','button secondary');restore.type='button';restore.addEventListener('click',()=>{selects.preset.value='O';selects.direction.value='input';selected=getRoundTripDefault();renderSelection();update(true);});
  workshop.append(controls,selectionBox,restore,output,status);renderSelection();update();host.append(workshop);const fallback=host.querySelector('[data-function-set-fallback]');if(fallback)fallback.hidden=true;host.dataset.functionSetMounted='true';
}
