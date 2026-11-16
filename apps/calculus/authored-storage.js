// A failed read never means an empty record. Browser storage can also ignore a write.
const drafts=new Map();
export function openAuthoredRecord(key,valid){
  try{
    const raw=localStorage.getItem(key);
    return {kind:raw===null?'absent':valid(key,raw)?'valid':'invalid',raw};
  }catch{return {kind:'unreadable',raw:null};}
}
function commitAuthoredRecordBody(key,opened,nextRaw,valid){
  if(nextRaw!==null&&!valid(key,nextRaw))return {kind:'limit'};
  let current;
  try{current=localStorage.getItem(key);}catch{return {kind:'unreadable'};}
  if(opened.kind==='unreadable')return {kind:'unreadable'};
  if(opened.kind==='invalid')return {kind:'invalid'};
  if(opened.kind==='changed')return {kind:'changed'};
  if(current!==opened.raw)return {kind:'changed'};
  let writeThrew=false;
  try{if(nextRaw===null)localStorage.removeItem(key);else localStorage.setItem(key,nextRaw);}catch{writeThrew=true;}
  let actual;
  try{actual=localStorage.getItem(key);}catch{return {kind:'unverified'};}
  if(actual!==nextRaw)return {kind:writeThrew?'write-failed':'unverified'};
  opened.raw=actual;opened.kind=actual===null?'absent':'valid';
  return {kind:actual===null?'cleared':'saved'};
}
export function commitAuthoredRecord(key,opened,nextRaw,valid){
  return trackNativeOperation(nativeRecordScope(key),commitAuthoredRecordBody(key,opened,nextRaw,valid),
    result=>result.kind==='saved'||result.kind==='cleared',()=>({key,nextRaw}));
}
export function authoredMessage(result,label='Work'){
  switch(result.kind){
    case 'saved':return `${label} saved in this browser.`;
    case 'cleared':return `${label} cleared from this browser.`;
    case 'limit':return 'Your current draft exceeds its record format or size limit. Earlier saved work remains untouched. Shorten the draft or download a copy before leaving.';
    case 'invalid':return 'Existing browser record cannot be read as this kind of work. It remains untouched. Open Progress to inspect and download its exact raw value. Your current edit is only on this page.';
    case 'unreadable':return 'Browser storage cannot be read. Existing work remains untouched. Copy or download your current edit before leaving.';
    case 'changed':return 'Saved work must be reviewed before this draft can replace it. It remains untouched. Copy or download your current edit, then reload to review the saved version.';
    case 'write-failed':return 'Storage unavailable for this change. Your edit was not verified in browser storage. Copy or download your current edit before leaving.';
    default:return 'Browser storage did not verify this change. Copy or download your current edit before leaving. Check Progress or reload to inspect the saved version.';
  }
}
export function authoredInitialMessage(opened,label='Work'){
  if(opened.kind==='valid')return `${label} loaded from this browser.`;
  if(opened.kind==='absent')return `${label} has not been saved yet.`;
  return authoredMessage(opened,label);
}
export function authoredDraft(key,initial,opened){
  if(!drafts.has(key))return initial;
  if(opened.kind==='valid'||opened.kind==='absent')opened.kind='changed';
  return drafts.get(key);
}
export function rememberAuthoredDraft(key,value){drafts.set(key,value);workChanged();}
export function forgetAuthoredDraft(key){if(drafts.delete(key))workChanged();}
export function authoredTools(host,key,opened,value){
  const wrap=document.createElement('div');wrap.className='toolbar authored-recovery';
  const copy=document.createElement('button'),download=document.createElement('button'),progress=document.createElement('a');
  const context=key.startsWith('project-draft-')?' (project work)':key.startsWith('project-review-')?' (self-review)':'';
  copy.type=download.type='button';copy.textContent=`Copy current draft${context}`;download.textContent=`Download current draft${context}`;progress.href='#progress';progress.textContent='Review saved records in Progress';
  copy.onclick=async()=>{const text=value();try{await navigator.clipboard.writeText(text);}catch{
    let field=wrap.querySelector('textarea'),notice=wrap.querySelector('[role="status"]');
    if(!field){field=document.createElement('textarea');field.readOnly=true;field.rows=8;field.setAttribute('aria-label',`Complete current draft${context} for ${key}; select and copy`);wrap.append(field);}
    if(!notice){notice=document.createElement('p');notice.setAttribute('role','status');wrap.append(notice);}
    field.value=text;field.focus();field.select();notice.textContent='The complete current draft is selected. Use your browser copy shortcut to keep it.';
  }};
  download.onclick=()=>{const blob=new Blob([value()],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`${key}-current-draft.txt`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
  wrap.append(copy,download,progress);host.append(wrap);
  if(opened.kind==='invalid'||opened.kind==='unreadable'||opened.kind==='changed'){
    const warning=document.createElement('p');warning.className='authored-warning';warning.setAttribute('role','status');warning.textContent=authoredMessage(opened);host.insertBefore(warning,wrap);
  }
  return wrap;
}

export function nativeRecordScope(keys){
  const ordered=[...new Set(typeof keys==='string'?[keys]:keys)].sort();
  if(ordered.some(key=>typeof key!=='string'))throw new Error('A source-owned record key is required.');
  return ordered.length===1?'record:'+ordered[0]:'records:'+JSON.stringify(ordered);
}
// Page-local work is not a stored record, a grade, or import authority.
// Importing this module installs no listeners and opens no learner store.
const nativeOperations=new Set(), nativeFailures=new Map(), nativeOperationRevisions=new Map();
const departureOwners=new WeakMap();
let nativeGuardCount=0,nativeWorkRevision=0,acknowledgedRevision=-1;
const workChanged=()=>{nativeWorkRevision++;};
function recoveryCopy(value){try{return structuredClone(typeof value==='function'?value():value);}catch{return {unavailable:true};}}
export function trackNativeOperation(key,operation,success=value=>value!==false&&value!==null&&value?.ok!==false,recovery=null){
  if(!nativeGuardCount)return operation;
  const revision=(nativeOperationRevisions.get(key)||0)+1;
  nativeOperationRevisions.set(key,revision);workChanged();
  const settled=(value,failed=false)=>{
    if(nativeOperationRevisions.get(key)!==revision)return;
    let confirmed=false;try{confirmed=!failed&&success(value);}catch{}
    if(confirmed)nativeFailures.delete(key);
    else nativeFailures.set(key,{key,reason:typeof value?.kind==='string'?value.kind:'not-confirmed',details:recoveryCopy(recovery)});
    workChanged();
  };
  if(!operation||typeof operation.then!=='function'){settled(operation);return operation;}
  const pending=Promise.resolve(operation).then(value=>{settled(value);return value;},
    error=>{settled(error,true);throw error;}).finally(()=>{nativeOperations.delete(pending);workChanged();});
  nativeOperations.add(pending);return pending;
}
export function hasPendingNativeWork(){
  return Boolean(nativeOperations.size||(nativeWorkRevision!==acknowledgedRevision&&(nativeFailures.size||drafts.size)));
}
export async function flushNativeWork(){
  for(;;){
    const revision=nativeWorkRevision;
    await Promise.allSettled([...nativeOperations]);await Promise.resolve();
    if(nativeOperations.size||revision!==nativeWorkRevision)continue;
    if(nativeWorkRevision!==acknowledgedRevision&&(nativeFailures.size||drafts.size))
      throw new Error('Some current work has not been saved. Keep this page open and retry, or copy/download the current work before explicitly allowing departure.');
    return true;
  }
}
export function acknowledgeNativeDeparture(){
  if(nativeOperations.size)return false;
  acknowledgedRevision=nativeWorkRevision;return true;
}
export function nativeWorkRecovery(){
  return {format:'calculus-current-work-recovery',version:1,
    drafts:[...drafts].map(([key,value])=>({key,value:recoveryCopy(value)})),
    failedOperations:[...nativeFailures.values()].map(row=>recoveryCopy(row)),
    pendingOperations:nativeOperations.size};
}
export function installNativeDepartureGuard({target,onBlocked=()=>{}}){
  if(!target||typeof target.addEventListener!=='function')throw new Error('A page event target is required.');
  if(departureOwners.has(target))throw new Error('A Calculus departure guard is already installed.');
  const owner={};departureOwners.set(target,owner);nativeGuardCount++;
  const leave=event=>{
    if(typeof event.detail?.waitUntil!=='function')return;
    const pending=flushNativeWork().catch(error=>{try{onBlocked(error);}catch{}throw error;});
    // Register a rejecting wait; this never marks an unconfirmed write as saved.
    event.detail.waitUntil(pending);
  };
  const unload=event=>{if(hasPendingNativeWork()){event.preventDefault();event.returnValue='';}};
  const reenter=()=>{acknowledgedRevision=-1;};
  target.addEventListener('euler:before-native-entry-navigation',leave);
  target.addEventListener('beforeunload',unload);
  target.addEventListener('pagehide',reenter);target.addEventListener('pageshow',reenter);
  return ()=>{if(departureOwners.get(target)!==owner)return;
    departureOwners.delete(target);nativeGuardCount--;
    target.removeEventListener('euler:before-native-entry-navigation',leave);
    target.removeEventListener('beforeunload',unload);
    target.removeEventListener('pagehide',reenter);target.removeEventListener('pageshow',reenter);};
}
