/** Attach common behaviour to either a DOM-built frame or an adapter-owned frame. */
export function attachLabFrame(section,{reset=()=>{}}={}) {
  if(!(section instanceof HTMLElement)||typeof reset!=='function') throw new TypeError('Invalid lab frame');
  const form=section.querySelector('form'),stage=section.querySelector('.euler-lab__stage');
  const status=section.querySelector('.euler-lab__status');
  const currentTable=()=>section.querySelector('.euler-lab__table');
  if(!form||!stage||!status||!currentTable())throw new Error('Lab frame is missing a required slot');
  let statusTimer;
  const setStatus=value=>{
    clearTimeout(statusTimer);
    statusTimer=setTimeout(()=>{status.textContent=String(value??'');},300);
  };
  const setState=(state,message)=>{
    if(!['loading','ready','error'].includes(state))throw new RangeError('Invalid lab state');
    section.dataset.state=state;
    section.setAttribute('aria-busy',state==='loading'?'true':'false');
    if(message!==undefined)setStatus(message);
  };
  const setTable=({caption,headers,rows})=>{
    const table=currentTable();
    if(!table)throw new Error('Lab frame is missing a required table');
    const validCell=value=>typeof value==='string'||value===null||typeof value==='number'&&Number.isFinite(value);
    if(typeof caption!=='string'||!caption.trim()||!Array.isArray(headers)||!headers.length||headers.length>128||headers.some(value=>typeof value!=='string')||!Array.isArray(rows)||rows.length>100000||rows.some(row=>!Array.isArray(row)||row.length!==headers.length||row.some(value=>!validCell(value))))throw new TypeError('Invalid lab table');
    const captionNode=document.createElement('caption');captionNode.textContent=caption;
    const head=document.createElement('thead'),heading=document.createElement('tr');
    for(const value of headers){const cell=document.createElement('th');cell.scope='col';cell.textContent=String(value);heading.append(cell);}
    head.append(heading);
    const body=document.createElement('tbody');
    for(const row of rows){const tr=document.createElement('tr');for(const value of row){const td=document.createElement('td');td.textContent=String(value??'');tr.append(td);}body.append(tr);}
    table.replaceChildren(captionNode,head,body);
  };
  const onReset=event=>{
    event.preventDefault();
    try {
      reset();
      form.querySelector('input:not([type=hidden]):not(:disabled), select:not(:disabled), textarea:not(:disabled), button:not([type=reset]):not(:disabled)')?.focus();
    } catch {
      setState('error','The lab could not reset. Review the current controls before continuing.');
    }
  };
  const onSubmit=event=>event.preventDefault();
  const onExport=()=>{
    const table=currentTable();
    if(!table)throw new Error('Lab frame is missing a required table');
    const csv=[...table.rows].map(row=>[...row.cells].map(cell=>'"'+cell.textContent.replaceAll('"','""')+'"').join(',')).join('\r\n')+'\r\n';
    const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
    const link=document.createElement('a');link.href=url;link.download=(section.dataset.eulerLab||'lab')+'-data.csv';link.click();
    setTimeout(()=>URL.revokeObjectURL(url),0);
  };
  const exportButton=section.querySelector('[data-lab-export]');
  form.addEventListener('reset',onReset);form.addEventListener('submit',onSubmit);exportButton?.addEventListener('click',onExport);
  // Hosts can dock their existing note controls after the instrument exists.
  // The event carries no learner data and does not change the experiment.
  const FrameEvent=section.ownerDocument.defaultView?.CustomEvent??globalThis.CustomEvent;
  if(FrameEvent)section.dispatchEvent(new FrameEvent('euler:lab-frame-ready',{bubbles:true,detail:{id:section.dataset.eulerLab??''}}));
  return {stage,setStatus,setTable,setState,destroy(){clearTimeout(statusTimer);form.removeEventListener('reset',onReset);form.removeEventListener('submit',onSubmit);exportButton?.removeEventListener('click',onExport);}};
}

/** Build the same slots for non-React lab families. Text is never treated as HTML. */
export function mountLabFrame(host,{id,title,question,notice,controls,reset,table,status='',figureLabel='Lab visualization',seed}={}) {
  if(!(host instanceof HTMLElement)||typeof id!=='string'||!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)||![title,question,notice,figureLabel].every(value=>typeof value==='string'&&value.trim()))throw new TypeError('Invalid lab metadata');
  const el=(tag,className,text)=>{const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node;};
  const section=el('section','euler-lab');section.dataset.eulerLab=id;section.dataset.state='loading';
  const heading=el('h2','euler-lab__title',title);heading.id=id+'-title';section.setAttribute('aria-labelledby',heading.id);
  const description=el('p','euler-lab__question',question);
  const noticeBlock=el('details','euler-lab__notice');noticeBlock.open=true;noticeBlock.append(el('summary',null,'What to notice'),el('p',null,notice));
  const form=el('form','euler-lab__controls');form.setAttribute('aria-label',title+' controls');
  for(const control of (Array.isArray(controls)?controls:controls?[controls]:[])){
    if(!(control instanceof Node))throw new TypeError('Lab controls must be DOM nodes');form.append(control);
  }
  const resetButton=el('button','euler-lab__reset','Reset');resetButton.type='reset';form.append(resetButton);
  // The owner may include links, explanatory text or native SVG alternatives.
  // A role=img on their common parent would flatten those accessible descendants.
  const stage=el('figure','euler-lab__stage');stage.setAttribute('aria-label',figureLabel);
  const live=el('p','euler-lab__status');live.setAttribute('role','status');live.setAttribute('aria-live','polite');
  const details=el('details','euler-lab__data');details.append(el('summary',null,'Data table'));
  const tableNode=el('table','euler-lab__table');details.append(tableNode);
  const exportButton=el('button','euler-lab__export','Download data (CSV)');exportButton.type='button';exportButton.dataset.labExport='';details.append(exportButton);
  section.append(heading,description,noticeBlock,form,stage,live,details);
  if(seed!==undefined)section.append(el('p','euler-lab__seed',String(seed)));
  host.append(section);
  const controller=attachLabFrame(section,{reset});
  if(table)controller.setTable(table);
  controller.setState('ready',status);
  return {...controller,destroy(){controller.destroy();section.remove();}};
}
