const eulerBase = () => (globalThis.document?.documentElement?.getAttribute('data-euler-base-path') ?? '/').slice(0, -1);
const eulerHref = value => typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && !value.startsWith(eulerBase() + '/') ? eulerBase() + value : value;
const eulerPath = value => eulerBase() && value.startsWith(eulerBase() + '/') ? value.slice(eulerBase().length) : value;
import { archiveLimit, archiveRawLimit, archiveStoreLimit, chapterNumberPattern, assessmentScopes, problemReasons, createSessionValidators } from './session-state.js';
import { execute } from './runner.js';
import { chapterReferences } from './reference-links.js';
import { proseTokens } from './prose-tokens.js';
import { exerciseTypeGuide, exerciseTypeNote } from './exercise-type-guide.js';
import { visualView, visualCount, explorations, additionalExplorations } from './explorations.js';
import { depth } from './depth.js';
import { misconceptionPractice } from './repair-map.js';
import { conceptRepair } from './concept-repairs.js';
import {buildAssessmentReport,assessmentReportValid,prioritizedAssessmentItems} from './assessment-report.js';
import { objectivePractice } from './objective-practice.js';
import { relatedPracticeFor, relatedLessonForProblem } from './related-practice.js';
import { mastery } from './mastery.js';
import { appendices, routes, diagnostic } from './handbook.js';
import { routeAssignments, routeAssignmentPolicy } from './route-assignments.js';
import { numericChecks } from './answer-checks.js';
import { numericGuidance } from './numeric-guidance.js';
import { numericRetryText } from './numeric-retry.js';
import { projects } from './projects.js';
import { projectById, draftKey, reviewKey, reviewChoices, readProjectValue, validProjectValue } from './project-state.js';
import { visualWorkKey, readVisualWork, validVisualWork } from './visual-work.js';
import { labWorkKey, readLabWork, validLabWork } from './lab-work.js';
import { supplementaryLabs } from './supplementary-labs.js';
import { presentationForLab } from './supplementary-notation.js';
import { supplementaryLabById, suppCodeKey, suppWorkKey, suppKeyAllowed, readSuppWork, validSuppValue } from './supplementary-lab-state.js';
import {nativeRecordScope,trackNativeOperation,installNativeDepartureGuard,nativeWorkRecovery,acknowledgeNativeDeparture,openAuthoredRecord,commitAuthoredRecord,authoredMessage,authoredInitialMessage,authoredDraft,rememberAuthoredDraft,forgetAuthoredDraft,authoredTools} from './authored-storage.js';
import { buildAssessmentQueue, buildProblemQueue, buildReviewQueue, buildWrittenExamQueue, daysUntilReview, evaluateNumericAnswer, masterySummary, nextMasteryState, nextWrittenPracticeState, normalizeMasteryState, normalizeWrittenPracticeState, orderAnswerOptions, reviewDay } from './training.js';
import {authoredFields, validAuthored, editionIdentity, fingerprint, sameAuthored, exactObjectKeys} from './paper-edition.js';
import {isNewWrittenTask,newWrittenIdentity,newWrittenIdentityFromRecord,newWrittenKey,parseNewWrittenKey} from './new-written-identity.js';
const { default: katex } = await import(typeof document === 'undefined' ? '../../app/vendor/katex/katex.mjs' : eulerHref(new URL("./_euler/vendor/katex/katex.mjs", import.meta.url).href));
import { attachVisualPunctuation, hasMathRenderError } from './math-punctuation.js';
import { installMathFlow, mathFlowCSS } from './math-flow-controller.js';
const eulerHostedEntry = document.documentElement.hasAttribute('data-euler-hosted');
const sharedReaderDrawer = eulerHostedEntry ? await import(eulerHref('/__euler/reader-sidebar.mjs')) : null;
const eulerHasReaderView = eulerHostedEntry && document.getElementById('euler-reader-view');
const eulerNativeEntry = eulerHostedEntry ? await import(eulerHref('/__euler/native-learning-entry.mjs')) : null;
const eulerReaderView = eulerHasReaderView ? await import(eulerHref('/__euler/reader-view.mjs')) : null;
const eulerReaderViewData = eulerNativeEntry?.currentReaderViewContext() ?? null;
let eulerNativeInstalled = false, eulerReaderViewInstalled = false, eulerReaderViewMapper = null;
const nativeReaderHash = () => eulerReaderViewInstalled ? eulerReaderViewData.nativeLocation.hash
  : eulerNativeEntry?.currentNativeLocation().hash ?? location.hash;
function nativeReaderLink(href) {
  if (eulerReaderViewInstalled) return eulerReaderViewMapper.mapHref(href)
    ?? eulerReaderViewMapper.mapAttribute('a','href',href) ?? href;
  if (!eulerNativeInstalled) return href;
  return eulerNativeEntry.nativeEntryHref(href) ?? new URL(href, new URL('./', import.meta.url)).href;
}
function mapNativeReaderLinks(container) {
  if (!eulerNativeInstalled && !eulerReaderViewInstalled) return;
  for (const anchor of container.querySelectorAll('a[href]')) {
    const href = anchor.getAttribute('href');
    if (href?.startsWith('#') && validateNativeReaderLocation({ pathname: '/calculus/', search: '', hash: href })) anchor.href = eulerHref(nativeReaderLink(href));
  }
}
function validateNativeReaderLocation(location) {
  if (!['/calculus/', '/calculus/index.html'].includes(eulerPath(location.pathname)) || location.search !== '' || typeof location.hash !== 'string') return null;
  const hash = location.hash, result = { pathname: '/calculus/', search: '', hash };
  if (['', '#', '#progress', '#labs', '#projects', '#review', '#practice', '#assessment', '#written-exam', '#guide'].includes(hash)) return result;
  if (/^#progress\/archive\/[a-z0-9-]{1,80}$/.test(hash)
    || /^#practice\/(concept|setup|algebra|calculation|interpretation)$/.test(hash)
    || /^#assessment\/report\/checkpoint-[1-9]\d{0,15}-\d{1,10}(?:\/question\/[1-9]\d{0,5})?$/.test(hash)) return result;
  let match = hash.match(/^#lab\/([a-z0-9-]+)$/);
  if (match && supplementaryLabs.some(lab => lab.id === match[1])) return result;
  match = hash.match(/^#project\/([a-z0-9-]+)$/);
  if (match && projects.some(project => project.id === match[1])) return result;
  match = hash.match(/^#guide\/([a-z0-9-]+)$/);
  if (match && Object.hasOwn(routes, match[1])) return result;
  match = hash.match(/^#appendix\/([a-z]+)$/);
  if (match && Object.hasOwn(appendices, match[1])) return result;
  match = hash.match(/^#chapter\/(\d{2})(?:\/(.+))?$/);
  const chapter = match && chapterCache.get(match[1]);
  if (!chapter) return null;
  const slug = match[2] || '', problem = slug.match(/^practice\/([1-9]\d*)\/problem\/([1-9]\d*)$/);
  const page = chapterPages(chapter).find(row => row.slug === (problem ? 'practice/' + problem[1] : slug));
  if (!page || problem && (Number(problem[2]) < page.start + 1
    || Number(problem[2]) > Math.min(page.start + 4, chapter.exercises.length + (depth[chapter.id]?.questions.length || 0)))) return null;
  return result;
}
function calculusReaderViewLocation(view) {
  const match = /^chapter-(\d{2})-lab$/.exec(view?.viewId ?? '');
  const id = match?.[1], chapter = id && chapterCache.get(id);
  if (!chapter || view.moduleId !== 'calculus' || view.readerKind !== 'calculus'
    || view.resourceId !== 'calculus:' + id || view.sourceChildId !== 'chapter-' + id || view.facet !== 'laboratory'
    || view.title !== chapter.lab?.title || typeof chapter.lab?.code !== 'string'
    || view.nativeLocation?.pathname !== '/calculus/' || view.nativeLocation.search !== ''
    || view.nativeLocation.hash !== '#chapter/' + id + '/lab') return null;
  return validateNativeReaderLocation(view.nativeLocation);
}

async function navigateReader(hash) {
  if (eulerReaderViewInstalled) return eulerNativeEntry.navigateReaderView(hash===''||hash==='#'?'/calculus/':hash,{validateLocation:validateNativeReaderLocation});
  if (eulerNativeInstalled) return eulerNativeEntry.navigateNativeEntry(hash);
  if(eulerHostedEntry){
    const href=location.href,version=routeVersion;
        if(!await eulerNativeEntry.flushNativeEntryNavigation(true)||location.href!==href||routeVersion!==version)return false;
    // A changed hash must render only after the shared traversal guard releases its event.
    if(location.hash===hash)await routeBody();else location.hash=hash;
    return true;
  }
  location.hash = hash; routeBody(); return true;
}

const eulerHostedOutline = document.documentElement.hasAttribute('data-euler-hosted');
let hostedChapterOutline = null, hostedChapterOutlineOpen = false;
if (eulerHostedOutline) {
  const style = document.createElement('style');
  style.textContent = `
    :root[data-euler-hosted] .reader-shell { display:block; max-width:100%; }
    :root[data-euler-hosted] .reader-article > :is(p,ul,ol,blockquote) { max-width:var(--euler-reading-width,70ch); }
    :root[data-euler-hosted] #contents .chapter-outline { display:block; position:static; max-height:none; overflow:visible; border:0; padding:8px 0; }
    :root[data-euler-hosted] .hosted-chapter-contents { margin:16px 0; }
    :root[data-euler-hosted] .hosted-chapter-contents > summary { cursor:pointer; font-weight:700; }
  `;
  document.head.append(style);
}
function appendHostedChapterContents() {
  if (!eulerHostedOutline || !hostedChapterOutline) return;
  const details = el('details', undefined, 'hosted-chapter-contents');
  details.open = hostedChapterOutlineOpen;
  details.dataset.eulerLocalContents = 'chapter';
  details.append(el('summary', hostedChapterOutline.getAttribute('aria-label')));
  details.append(hostedChapterOutline);
  details.addEventListener('toggle', () => { hostedChapterOutlineOpen = details.open; });
  contents.append(details);
}
const main = document.querySelector('main');

function showNativeDepartureRecovery(error){
  let panel=document.getElementById('calculus-unsaved-work');
  if(!panel){
    panel=el('section',undefined,'card authored-recovery');panel.id='calculus-unsaved-work';
    panel.setAttribute('aria-label','Current work needs recovery');
    const message=el('p'),copy=el('button','Download current page work'),leave=el('button','Allow leaving with this unsaved work'),status=el('p');
    message.dataset.departureMessage='';status.setAttribute('role','status');copy.type=leave.type='button';
    copy.onclick=()=>{
      const recovery=nativeWorkRecovery();
      if(recovery.pendingOperations){status.textContent='A save is still running. Wait for its verified result before downloading the current page recovery copy.';return;}
      download(JSON.stringify(recovery,null,2),'calculus-current-page-work.json','application/json');
    };
    leave.onclick=()=>{
      if(acknowledgeNativeDeparture())status.textContent='You have allowed departure with this current work unsaved. No record was deleted or marked saved. A new edit or write requires another save or decision. Choose your destination again.';
      else status.textContent='A save is still running. Wait for its verified result before deciding whether to leave.';
    };
    panel.append(message,copy,leave,status);main.prepend(panel);
  }
  panel.querySelector('[data-departure-message]').textContent=error.message;
  panel.querySelector('button')?.focus({preventScroll:true});
}
if(eulerHostedEntry){
  const disposeDeparture=installNativeDepartureGuard({target:window,onBlocked:showNativeDepartureRecovery});
  window.addEventListener('pagehide',event=>{if(!event.persisted)disposeDeparture();});
}

const contents = document.querySelector('#contents');
const search = document.querySelector('#search');
const searchStatus = document.querySelector('#search-status');
let manifest = [], stopRun = () => {}, routeVersion = 0, activeSpatialView = null;
const chapterCache = new Map();
let searchIndex = [];
const numericCheckCount=Object.values(numericChecks).reduce((total,chapter)=>total+Object.keys(chapter).length,0);
const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
const save = (key,value) => {
  let result=false;try{localStorage.setItem(key,value);result=!eulerHostedEntry||localStorage.getItem(key)===value;}catch{}
  return trackNativeOperation(nativeRecordScope(key),result,value=>value===true,()=>({key,nextRaw:value}));
};
const erase = key => {
  let result=false;try{localStorage.removeItem(key);result=!eulerHostedEntry||localStorage.getItem(key)===null;}catch{}
  return trackNativeOperation(nativeRecordScope(key),result,value=>value===true,()=>({key,nextRaw:null}));
};
const readerSizes=[90,100,110,120,130];
let readerSize=Number(read('reader-size'));
if(!readerSizes.includes(readerSize))readerSize=100;
let readerWidth=read('reader-width');
if(!['narrow','comfortable','wide'].includes(readerWidth))readerWidth='comfortable';
const hostedReaderTheme=document.documentElement.hasAttribute('data-euler-hosted');
function sharedReaderTheme(){
  const choice=window.EulerTheme?.get?.()?.choice;
  return choice==='system'?'auto':['light','dark'].includes(choice)?choice:'auto';
}
let readerTheme=hostedReaderTheme?sharedReaderTheme():read('reader-theme');
if(!['auto','light','dark'].includes(readerTheme))readerTheme='auto';
const mathInstructions=document.createElement('p');
const mathFlowStyle=document.createElement('style');
mathFlowStyle.textContent=mathFlowCSS;
document.head.append(mathFlowStyle);
mathInstructions.id='math-scroll-instructions';
mathInstructions.className='visually-hidden';
mathInstructions.textContent='Use the left and right arrow keys, or swipe horizontally, to read the full formula.';
document.body.append(mathInstructions);
for (const [suffix,text] of [
  ['vertical','Use the up and down arrow keys, or swipe vertically, to read the full equation.'],
  ['both','Use the left and right arrow keys to read across the equation, and the up and down arrow keys to read its full height.'],
  ['formula-vertical','Use the up and down arrow keys, or swipe vertically, to read the full formula.'],
  ['formula-both','Use the left and right arrow keys to read across the formula, and the up and down arrow keys to read its full height.']
]) {
  const instructions=document.createElement('p');
  instructions.id=mathInstructions.id+'-'+suffix;
  instructions.className='visually-hidden';
  instructions.textContent=text;
  document.body.append(instructions);
}
const mathFlow=installMathFlow(main,mathInstructions.id);
function applyReaderSettings(){
  if(!hostedReaderTheme){
    document.documentElement.style.setProperty('--reading-scale',String(readerSize/100));
    document.body.dataset.readerWidth=readerWidth;
    document.documentElement.dataset.theme=readerTheme;
  }
  mathFlow.refresh();
  window.dispatchEvent(new Event('reader-settings-change'));
}
applyReaderSettings();
if(hostedReaderTheme)window.addEventListener('euler-reader-appearance-change',()=>mathFlow.refresh());
if(hostedReaderTheme)window.addEventListener('euler-theme-change',()=>{
  readerTheme=sharedReaderTheme();
  const control=document.getElementById('reader-theme');
  if(control)control.value=readerTheme;
  applyReaderSettings();
});
function el(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}
const mathOptions={throwOnError:false,trust:false,output:'htmlAndMathml',strict:'ignore'};
function prose(tag, value, className) {
  const node=el(tag,undefined,className);
  // Imported paper text may be large or hostile TeX. Preserve its exact visible
  // text when it exceeds the bounded typesetting budget.
  if(typeof value!=='string'||value.length>2000){node.textContent=String(value);return node;}
  // Stop tokenization before typesetting. The tokenizer is a generator.
  const tokens=[];
  for(const token of proseTokens(value)){
    tokens.push(token);
    if(tokens.length>120){node.textContent=value;return node;}
  }
  for(const token of tokens) {
    if(token.type==='math') {
      const math=el('span',undefined,'inline-math');
      if(token.value.length>600){math.textContent=`$${token.value}$${token.punctuation||''}`;node.append(math);continue;}
      katex.render(token.value,math,{...mathOptions,maxExpand:100,maxSize:20});
      const phrase=el('span',undefined,'math-phrase');
      if(token.punctuation){
        const renderError=hasMathRenderError(math.innerHTML);
        if(renderError)math.classList.add('math-flow-error-fallback');
        const decorated=attachVisualPunctuation(math.innerHTML,token.punctuation,renderError);
        if(decorated.attached)math.innerHTML=decorated.markup;
        const punctuation=el('span',token.punctuation,'math-punctuation');
        if(decorated.attached)punctuation.classList.add('math-flow-original-punctuation');
        phrase.append(math,punctuation);
      } else phrase.append(math);
      node.append(phrase);
    } else if(token.type==='code') {
      node.append(el('code',token.value,'inline-code'));
    } else node.append(document.createTextNode(token.value));
  }
  return node;
}
function solutionContent(item) {
  const fragment=document.createDocumentFragment();
  if(item.solution.length>2000)fragment.append(prose('p',item.solution));
  else for(const paragraph of item.solution.split(/\n\s*\n/))fragment.append(prose('p',paragraph));
  if(item.solutionCode){
    const pre=el('pre',undefined,'solution-code');
    pre.tabIndex=0;
    pre.setAttribute('aria-label','JavaScript solution code');
    pre.append(el('code',item.solutionCode));
    fragment.append(pre);
  }
  return fragment;
}
function optionAccessibleName(value) {
  const words={'π':'pi','θ':'theta','α':'alpha','β':'beta','∞':'infinity','≤':'less than or equal to','≥':'greater than or equal to','≠':'not equal to','→':'approaches','∫':'integral','′':'prime','⁡':''};
  const power=(base,exponent)=>{
    const raw=exponent.textContent.trim();
    if(/^[′″‴⁗]+$/.test(raw)){
      const counts={'′':1,'″':2,'‴':3,'⁗':4};
      const count=[...raw].reduce((total,char)=>total+counts[char],0);
      return `${base} ${count===1?'prime':count===2?'double prime':count===3?'triple prime':`${count} primes`}`;
    }
    return `${base} to the power ${spoken(exponent)} end power`;
  };
  const spoken=node=>{
    const children=()=>Array.from(node.children).map(spoken).filter(Boolean).join(' ');
    switch(node.localName){
      case 'annotation':return '';
      case 'semantics':return spoken(node.firstElementChild);
      case 'mfrac':return `fraction ${spoken(node.children[0])} over ${spoken(node.children[1])} end fraction`;
      case 'msqrt':return `square root of ${children()} end square root`;
      case 'mroot':return `${spoken(node.children[1])} root of ${spoken(node.children[0])}`;
      case 'msup':return power(spoken(node.children[0]),node.children[1]);
      case 'msub':return spoken(node.children[0])==='lim'?`limit as ${spoken(node.children[1])}`:`${spoken(node.children[0])} sub ${spoken(node.children[1])}`;
      case 'msubsup':return power(`${spoken(node.children[0])} sub ${spoken(node.children[1])}`,node.children[2]);
      case 'mover':return node.getAttribute('accent')==='true'&&node.children[1]?.textContent.includes('⃗')?`vector ${spoken(node.children[0])}`:children();
      case 'mi':case 'mn':case 'mo':case 'mtext':return (node.localName==='mi'&&node.getAttribute('mathvariant')==='bold'?'vector ':'')+[...node.textContent].map(char=>words[char]??char).join('');
      default:return children();
    }
  };
  return String(value).split(/(\$[^$]+\$)/g).map(part=>{
    if(!part.startsWith('$')||!part.endsWith('$'))return part;
    const holder=document.createElement('span');
    katex.render(part.slice(1,-1),holder,{...mathOptions,output:'mathml'});
    const math=holder.querySelector('math');
    return math?spoken(math):part.slice(1,-1);
  }).join(' ').replace(/\s+/g,' ').trim();
}
function equation(tex) {
  const box=el('div',undefined,'typeset-equation');
  box.tabIndex=0;
  katex.render(tex,box,{...mathOptions,displayMode:true});
  return box;
}
function list(items, ordered = false) {
  const ul = el(ordered ? 'ol' : 'ul');
  items.forEach(item => ul.append(prose('li', item)));
  return ul;
}
function renderProse(node, value) { node.replaceChildren(prose('span', value)); }
function link(text, href, className) { const a = el('a', text, className); a.href = eulerHref(nativeReaderLink(href)); return a; }
function readerBreadcrumb(rows) {
  // A canonical server trail already owns its course/book/lab context.
  if(eulerHostedEntry&&document.querySelector('nav.euler-breadcrumb:not([data-euler-dynamic-breadcrumb])'))return document.createDocumentFragment();
  const nav=el('nav',undefined,'euler-breadcrumb');nav.setAttribute('aria-label','Breadcrumb');nav.dataset.eulerDynamicBreadcrumb='';
  const list=el('ol');
  rows.forEach((row,index)=>{const item=el('li');if(index===rows.length-1){const current=el('span',row.title);current.setAttribute('aria-current','page');item.append(current);}else item.append(link(row.title,row.href));list.append(item);});
  nav.append(list);return nav;
}
function printEditionDownload(className) { const a = el('a', 'Download print edition (HTML)', className); a.href = eulerHref(new URL('book.html', import.meta.url).href); a.download = ''; return a; }
function bookmarks(){
  try {
    const value=JSON.parse(read('bookmarks')||'[]');
    return Array.isArray(value)?value.filter(item=>item&&typeof item.href==='string'&&typeof item.title==='string'):[];
  } catch { return []; }
}
function writeBookmarks(items){
return trackNativeOperation(nativeRecordScope("bookmarks"), (()=>{return save('bookmarks',JSON.stringify(items));
})(),value=>value!==false&&value!==null&&value?.ok!==false,()=>({arguments:Array.from(arguments)}));
}
const trainingHistoryKey='training-sessions-v1';
const assessmentActiveKey='assessment-active-v1';
const assessmentReportKey='assessment-report-v1';
const assessmentPendingKey='assessment-report-pending-v1';
const writtenExamActiveKey='written-exam-active-v1';
const writtenExamArchivesKey='written-exam-archives-v1';
const conceptReviewActiveKey='concept-review-active-v1';
const activeRouteKey='active-route';
const learningRecordFormat='calculus-explored-learning-record';
const chapterRecallKey=id=>`chapter-recall-${id}`;
const chapterLocationPattern=new RegExp(`^#chapter/${chapterNumberPattern}(?:/(?:lesson/[1-9][0-9]*|explore(?:/[1-9][0-9]*)?|deep|examples|workshop|lab|practice/[1-9][0-9]*(?:/problem/[1-9][0-9]*)?|check|review))?$`);
function validChapterLocation(href){
  if(!chapterLocationPattern.test(href))return false;
  const match=href.match(/^#chapter\/(\d{2})(?:\/(.*))?$/),chapter=chapterCache.get(match?.[1]);
  if(!chapter)return false;
  const slug=match[2]||'',problem=slug.match(/^practice\/([1-9]\d*)\/problem\/([1-9]\d*)$/),page=chapterPages(chapter).find(item=>item.slug===(problem?`practice/${problem[1]}`:slug));
  if(!page)return false;
  const number=Number(problem?.[2]);return !problem||number>=page.start+1&&number<=Math.min(page.start+4,chapter.exercises.length+(depth[chapter.id]?.questions.length||0));
}
const validBookmarkHref=href=>validChapterLocation(href)||Boolean(/^#lab\/([a-z0-9-]+)$/.exec(href)&&supplementaryLabById(href.slice(5)))||['#progress','#review','#practice','#assessment','#written-exam','#guide'].includes(href)||/^#progress\/archive\/[a-z0-9-]{1,80}$/.test(href)||/^#practice\/(?:concept|setup|algebra|calculation|interpretation)$/.test(href)||Boolean(href.startsWith('#guide/')&&Object.hasOwn(routes,href.slice(7)))||Boolean(href.startsWith('#appendix/')&&Object.hasOwn(appendices,href.slice(10)));
const chapterRange=(start,end)=>Array.from({length:end-start+1},(_,index)=>String(start+index).padStart(2,'0'));
const assessmentStrands=[
  {id:'foundations',label:'Foundations and computation',ids:chapterRange(1,3)},
  {id:'derivatives',label:'Limits and derivatives',ids:chapterRange(4,9)},
  {id:'integrals',label:'Integration and applications',ids:chapterRange(10,14)},
  {id:'series',label:'Series, approximation, and curves',ids:chapterRange(15,18)},
  {id:'multivariable',label:'Multivariable and vector calculus',ids:chapterRange(19,26)},
  {id:'dynamics',label:'Differential equations and dynamics',ids:chapterRange(27,28)}
];
function visualWorkKeyAllowed(key){const match=key.match(/^visual-work-(\d{2})-([1-5])$/);return Boolean(match&&explorations[match[1]]&&Number(match[2])<=1+(additionalExplorations[match[1]]?.length||0));}
function learningRecordKeyAllowed(key){return ['problem-draft-28-transient-growth-1','problem-draft-28-transient-growth-2','problem-draft-22-inverse-calibration-1','problem-draft-22-inverse-calibration-2','problem-draft-14-measurement-quadrature-1','problem-draft-14-measurement-quadrature-2','problem-draft-17-numerical-differentiation-1','problem-draft-17-numerical-differentiation-2','problem-draft-03-finite-summation-1','problem-draft-03-finite-summation-2','problem-draft-17-horner-certificate-1','problem-draft-17-horner-certificate-2','problem-draft-24-transformed-probability-1','problem-draft-24-transformed-probability-2','problem-draft-16-bounded-partial-sums-1','problem-draft-16-bounded-partial-sums-2','problem-draft-22-constrained-second-variation-1','problem-draft-22-constrained-second-variation-2','problem-draft-09-safeguarded-root-progress-1','problem-draft-09-safeguarded-root-progress-2'].includes(key)||Boolean(parseNewWrittenKey(key))||['bookmarks','reader-size','reader-width','reader-theme','last-location','diagnostic-first','diagnostic-selections','diagnostic-history',trainingHistoryKey,assessmentActiveKey,assessmentReportKey,assessmentPendingKey,writtenExamActiveKey,writtenExamArchivesKey,conceptReviewActiveKey,activeRouteKey].includes(key)||suppKeyAllowed(key)||projects.some(project=>key===draftKey(project.id)||key===reviewKey(project.id))||visualWorkKeyAllowed(key)||/^lab-work-(?:0[1-9]|1[0-9]|2[0-9]|30)$/.test(key)||Object.keys(routes).some(id=>key===`route-progress-${id}`)||new RegExp(`^(?:read-|last-page-|code-|chapter-recall-)${chapterNumberPattern}$`).test(key)||(()=>{const match=new RegExp(`^concept-(${chapterNumberPattern})-(0|[1-9][0-9]*)$`).exec(key);return Boolean(match&&Number(match[2])<(mastery[match[1]]?.quiz.length??0));})()||new RegExp(`^problem-${chapterNumberPattern}-[1-9][0-9]?$`).test(key)||new RegExp(`^problem-(?:draft|reason|review)-${chapterNumberPattern}-[1-9][0-9]?$`).test(key);}
function jsonValue(value){try{return JSON.parse(value);}catch{return null;}}
const {trainingSessionValid,writtenExamActiveValid,writtenExamArchivesValid,writtenPracticeStateValid}=createSessionValidators({chapterCache,depth});
function assessmentActiveValid(item){
  const scope=item&&assessmentScopes[item.scope];
  if(!scope||![1,2,3].includes(item.version)||![10,20].includes(item.length)||!Number.isInteger(item.seed)||item.seed<0||item.seed>0xffffffff||!Number.isFinite(item.startedAt)||item.startedAt<=0||item.startedAt>Date.now()+86400000||!Number.isInteger(item.position)||!Array.isArray(item.items)||!Array.isArray(item.selections)||!Array.isArray(item.revealed)||item.version>=2&&!Array.isArray(item.confidences))return false;
  const expected=Math.min(item.length,item.version===3?scope.ids.reduce((n,id)=>n+(mastery[id]?.quiz.length??0),0):scope.ids.length*5);
  if(item.items.length!==expected||item.selections.length!==expected||item.revealed.length!==expected||item.version>=2&&item.confidences.length!==expected||item.position<0||item.position>=expected)return false;
  const keys=new Set();
  for(const [position,entry] of item.items.entries()){
    if(!entry||!scope.ids.includes(entry.chapterId)||!Number.isInteger(entry.index)||entry.index<0||entry.index>=(item.version===3?(mastery[entry.chapterId]?.quiz.length??0):5)||keys.has(`${entry.chapterId}.${entry.index}`))return false;
    keys.add(`${entry.chapterId}.${entry.index}`);const optionCount=mastery[entry.chapterId]?.quiz[entry.index]?.options.length||0,selection=item.selections[position];
    if(selection!==null&&(!Number.isInteger(selection)||selection<0||selection>=optionCount)||typeof item.revealed[position]!=='boolean'||selection!==null&&!item.revealed[position]||item.version>=2&&item.confidences[position]!==null&&!confidenceOptions.some(([value])=>value===item.confidences[position]))return false;
  }
  return true;
}
const assessmentRepairHref=href=>typeof href==='string'&&/^#chapter\/(0[1-9]|1[0-9]|2[0-8])\/(?:lesson\/[1-9]\d*|practice\/[1-9]\d*\/problem\/[1-9]\d*)$/.test(href)&&manifest.some(chapter=>chapter.id===href.slice(9,11));
function assessmentPendingValid(item){
  if(!exactObjectKeys(item,['version','report','row','activeRaw','priorReportRaw','historyRaw'])||item.version!==1||!assessmentReportValid(item.report,{validHref:assessmentRepairHref})||!trainingSessionValid(item.row)||item.row.kind!=='assessment'||item.row.assessmentId!==item.report.id||item.row.completedAt!==item.report.completedAt||item.row.total!==item.report.items.length||item.row.correct!==item.report.items.filter(entry=>entry.selected===entry.correct).length||typeof item.activeRaw!=='string'||!assessmentActiveValid(jsonValue(item.activeRaw))||![null,'string'].includes(item.priorReportRaw===null?null:typeof item.priorReportRaw)||item.priorReportRaw!==null&&!assessmentReportValid(jsonValue(item.priorReportRaw),{validHref:assessmentRepairHref})||![null,'string'].includes(item.historyRaw===null?null:typeof item.historyRaw)||item.historyRaw!==null&&!learningRecordValueValid(trainingHistoryKey,item.historyRaw))return false;
  const active=jsonValue(item.activeRaw);return `checkpoint-${active.startedAt}-${active.seed}`===item.report.id&&active.scope===item.report.scope&&active.length===item.report.length&&active.items.length===item.report.items.length&&active.items.every((source,index)=>source.chapterId===item.report.items[index].chapterId&&source.index===item.report.items[index].bankIndex&&active.selections[index]===item.report.items[index].selected&&(active.confidences?.[index]??null)===item.report.items[index].confidence);
}
function writtenExamArchives(){let raw;try{raw=localStorage.getItem(writtenExamArchivesKey);}catch{return null;}return raw===null?{version:1,entries:[]}:writtenExamArchivesValid(raw)?jsonValue(raw):null;}
function exactStoredValue(key){try{return {ok:true,value:localStorage.getItem(key)};}catch{return {ok:false,value:null};}}
function verifiedArchiveWrite(previous,encoded){
return trackNativeOperation(nativeRecordScope(writtenExamArchivesKey), (()=>{
  let wrote=false;try{localStorage.setItem(writtenExamArchivesKey,encoded);wrote=true;}catch{}
  const checked=exactStoredValue(writtenExamArchivesKey);
  if(checked.ok&&checked.value===encoded)return true;
  // A readback failure cannot certify the new envelope. Restore the bytes read before writing.
  if(wrote||!checked.ok||checked.value!==previous){try{if(previous===null)localStorage.removeItem(writtenExamArchivesKey);else localStorage.setItem(writtenExamArchivesKey,previous);}catch{}}
  return false;

})(),value=>value!==false&&value!==null&&value?.ok!==false,()=>({arguments:Array.from(arguments)}));
}
function verifiedArchiveRemoval(previous){
return trackNativeOperation(nativeRecordScope(writtenExamArchivesKey), (()=>{
  try{localStorage.removeItem(writtenExamArchivesKey);}catch{}
  const checked=exactStoredValue(writtenExamArchivesKey);
  if(checked.ok&&checked.value===null)return true;
  try{localStorage.setItem(writtenExamArchivesKey,previous);}catch{}
  return false;

})(),value=>value!==false&&value!==null&&value?.ok!==false,()=>({arguments:Array.from(arguments)}));
}
function archiveWrittenPaper(raw,reason){
return trackNativeOperation(nativeRecordScope([writtenExamActiveKey,writtenExamArchivesKey]), (()=>{
  const active=exactStoredValue(writtenExamActiveKey),stored=exactStoredValue(writtenExamArchivesKey);
  if(!active.ok||active.value!==raw)return {ok:false,message:'The active paper changed or could not be read. Reload before retrying archival.'};
  if(!stored.ok)return {ok:false,message:'The existing paper archive could not be read. No archive was changed. Retry when browser storage can be read.'};
  const archive=stored.value===null?{version:1,entries:[]}:writtenExamArchivesValid(stored.value)?jsonValue(stored.value):null;
  if(!archive)return {ok:false,message:'The existing paper archive is invalid. No archive was changed. Inspect or download its exact raw record from Progress.'};
  if(raw.length>archiveRawLimit)return {ok:false,message:'This paper exceeds the local archive limit. Download its exact raw record before choosing an explicit removal.'};
  if(archive.entries.some(entry=>entry.raw===raw&&entry.reason!==reason))return {ok:false,message:'This exact paper is archived under a different status. Inspect its raw record in Progress before retrying.'};
  if(!archive.entries.some(entry=>entry.raw===raw)){
    if(archive.entries.length>=archiveLimit)return {ok:false,message:'The local archive is full. Download its records from Progress before choosing an explicit removal. No archive was evicted.'};
    archive.entries.push({id:`archive-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,raw,archivedAt:Date.now(),reason});
    const encoded=JSON.stringify(archive);
    if(!writtenExamArchivesValid(encoded))return {ok:false,message:'The local archive has reached its size or identifier limit. Download the exact raw paper before choosing an explicit removal. No archive was evicted.'};
    if(!verifiedArchiveWrite(stored.value,encoded))return {ok:false,message:'The archive write or readback failed. The active paper remains untouched.'};
  }
  // verifiedArchiveWrite checked the new bytes; a duplicate was checked in the strict initial read.
  const owner=exactStoredValue(writtenExamActiveKey);if(!owner.ok||owner.value!==raw)return {ok:false,message:'The active paper changed or could not be read. Reload before retrying archival.'};
  try{localStorage.removeItem(writtenExamActiveKey);}catch{}
  const removed=exactStoredValue(writtenExamActiveKey);
  if(!removed.ok||removed.value!==null)return {ok:false,message:'The paper was archived, but its active record could not be removed or verified as removed. Retry; the archive will not be duplicated.'};
  return {ok:true,id:archive.entries.find(entry=>entry.raw===raw).id};

})(),value=>value!==false&&value!==null&&value?.ok!==false,()=>({arguments:Array.from(arguments)}));
}
function conceptReviewActiveValid(item){return Boolean(item)&&item.version===1&&Number.isFinite(item.startedAt)&&item.startedAt>0&&item.startedAt<=Date.now()+86400000&&Object.keys(item).every(key=>['version','startedAt'].includes(key));}
function learningRecordValueValid(key,value){
  if(typeof value!=='string'||value.length>(key===writtenExamArchivesKey?archiveStoreLimit:key===assessmentPendingKey?550000:250000))return false;
  const newKey=parseNewWrittenKey(key);
  if(newKey)return newKey.kind==='draft'?value.length>0&&value.length<=12000:newKey.kind==='outcome'?['solved','retry'].includes(value):newKey.kind==='reason'?problemReasons.some(([reason])=>reason===value):writtenPracticeStateValid(jsonValue(value));
  if(key===writtenExamArchivesKey)return writtenExamArchivesValid(value);
  if(key.startsWith('project-draft-')||key.startsWith('project-review-'))return validProjectValue(key,value);
  if(key.startsWith('visual-work-'))return validVisualWork(key,value);
  if(key.startsWith('lab-work-'))return validLabWork(key,value);
  if(key.startsWith('supp-code-')||key.startsWith('supp-work-'))return validSuppValue(key,value);
  if(/^read-/.test(key))return value==='yes';
  if(/^last-page-/.test(key)||key==='last-location')return validChapterLocation(value)&&(!key.startsWith('last-page-')||value.startsWith('#chapter/'+key.slice(10)+'/')||value==='#chapter/'+key.slice(10));
  if(/^code-/.test(key))return true;
  if(/^chapter-recall-/.test(key))return value.length>0&&value.length<=4000;
  if(/^problem-review-/.test(key))return writtenPracticeStateValid(jsonValue(value));
  if(/^problem-reason-/.test(key))return problemReasons.some(([reason])=>reason===value);
  if(/^problem-draft-/.test(key))return value.length>0&&value.length<=12000;
  if(/^problem-/.test(key))return value==='solved'||value==='retry';
  if(/^concept-/.test(key)){const item=jsonValue(value);return item&&typeof item==='object'&&!Array.isArray(item);}
  if(key==='reader-size')return ['90','100','110','120','130'].includes(value);
  if(key==='reader-width')return ['narrow','comfortable','wide'].includes(value);
  if(key==='reader-theme')return ['auto','light','dark'].includes(value);
  if(key===activeRouteKey)return Object.hasOwn(routes,value);
  if(key.startsWith('route-progress-')){const id=key.slice('route-progress-'.length),route=routes[id],items=jsonValue(value),length=(route?.weeks||route?.stages||[]).length;return Boolean(route)&&Array.isArray(items)&&items.length===length&&items.every(item=>typeof item==='boolean');}
  if(key==='bookmarks'){const items=jsonValue(value);return Array.isArray(items)&&items.length<=200&&items.every(item=>item&&typeof item.title==='string'&&item.title.length<=300&&typeof item.href==='string'&&validBookmarkHref(item.href));}
  if(key==='diagnostic-first'){const items=jsonValue(value);return Array.isArray(items)&&items.length===diagnostic.length&&items.every(item=>item===null||typeof item==='boolean');}
  if(key==='diagnostic-selections'){const items=jsonValue(value);return Array.isArray(items)&&items.length===diagnostic.length&&items.every((item,index)=>item===null||Number.isInteger(item)&&item>=0&&item<diagnostic[index].options.length);}
  if(key==='diagnostic-history'){const items=jsonValue(value);return Array.isArray(items)&&items.length<=5&&items.every(item=>Number.isInteger(item?.score)&&item.score>=0&&item.score<=diagnostic.length);}
  if(key===trainingHistoryKey){const items=jsonValue(value);return Array.isArray(items)&&items.length<=30&&items.every(trainingSessionValid);}
  if(key===assessmentActiveKey)return assessmentActiveValid(jsonValue(value));
  if(key===assessmentReportKey)return assessmentReportValid(jsonValue(value),{validHref:assessmentRepairHref});
  if(key===assessmentPendingKey)return assessmentPendingValid(jsonValue(value));
  if(key===writtenExamActiveKey)return writtenExamActiveValid(jsonValue(value));
  if(key===conceptReviewActiveKey)return conceptReviewActiveValid(jsonValue(value));
  return false;
}
function futureRawKey(key){
  if(key==='visual-work-28-4')return true;
  const newKey=parseNewWrittenKey(key);
  if(newKey)return key!==newWrittenKey(newKey.kind,newKey.id,newKey.number);
  const ordinary=/^problem-(?:(draft|reason|review)-)?(\d{2})-([1-9][0-9]?)$/.exec(key);
  return Boolean(ordinary&&isNewWrittenTask(ordinary[2],Number(ordinary[3])));
}
function learningRecordSnapshot(){
  const entries={},omitted=[],omittedRaw={},rawRecovery={};
  for(const key of Object.keys(localStorage))if(learningRecordKeyAllowed(key)||futureRawKey(key)){
    const value=localStorage.getItem(key);
    if(value===null)throw new Error('Browser storage changed during backup.');
    if(futureRawKey(key)){rawRecovery[key]=value;continue;}
    if(learningRecordValueValid(key,value))entries[key]=value;
    else {omitted.push(key);omittedRaw[key]=value;}
  }
  return {entries,omitted,omittedRaw,rawRecovery};
}
function learningRecordConsistency(entries){
  const issues=[],paper=jsonValue(entries[writtenExamActiveKey]);
  if([2,3,4].includes(paper?.version))for(const [index,intent] of paper.intents.entries())if(intent){
    if(paper.version<4&&isNewWrittenTask(paper.items[index].chapterId,paper.items[index].number))continue;
    if(intent.status==='skipped'&&intent.priorOutcome===undefined)continue;
    const item=paper.items[index],label=`Chapter ${item.chapterId}, Problem ${item.number}`,outcomeKey=problemKey(item.chapterId,item.number),reviewKey=problemReviewKey(item.chapterId,item.number),outcome=entries[outcomeKey]??null,review=entries[reviewKey]??null,intended=jsonValue(intent.intendedReview),current=jsonValue(review);
    const later=writtenPracticeStateValid(current)&&current.lastAttempt>intended.lastAttempt&&current.attempts>intended.attempts&&['solved','retry'].includes(outcome)&&current.lastResult===(outcome==='solved');
    if(outcome!==intent.priorOutcome&&outcome!==intent.intendedOutcome&&!later)issues.push(`${label}: outcome differs from both recovery values without a verified later practice review.`);
    if(review!==intent.priorReview&&review!==intent.intendedReview&&!later)issues.push(`${label}: schedule differs from both recovery values without verified later practice.`);
    if(intent.status==='applied'&&(outcome===null||review===null||outcome!==intent.intendedOutcome||review!==intent.intendedReview)&&!later)issues.push(`${label}: applied marker disagrees with saved outcome or schedule.`);
    if(intent.status==='skipped'&&intent.priorOutcome!==undefined&&((outcome!==intent.priorOutcome||review!==intent.priorReview)&&!later))issues.push(`${label}: skipped marker disagrees with its reconciled prior schedule.`);
  }
  for(const [key,value] of Object.entries(entries))if(/^problem-(?:0[1-9]|1[0-9]|2[0-9]|30)-[1-9][0-9]?$/.test(key)){
    const review=entries[key.replace('problem-','problem-review-')];if(review===undefined)continue;
    const state=jsonValue(review),match=[2,3,4].includes(paper?.version)&&paper.intents.some((intent,index)=>intent&&key===problemKey(paper.items[index].chapterId,paper.items[index].number)&&intent.status==='pending'&&[intent.priorOutcome,intent.intendedOutcome].includes(value)&&[intent.priorReview,intent.intendedReview].includes(review));
    if(!match&&state.lastResult!==(value==='solved'))issues.push(`${key}: outcome and review last result disagree.`);
  }
  for(const [key,value] of Object.entries(entries)){
    const task=parseNewWrittenKey(key);
    if(task?.kind!=='outcome')continue;
    const review=entries[newWrittenKey('review',task.id,task.number)];
    if(review===undefined||key!==newWrittenKey('outcome',task.id,task.number))continue;
    const state=jsonValue(review),pending=paper?.version===4&&paper.intents.some((intent,index)=>intent?.status==='pending'&&paper.items[index].taskIdentity===newWrittenIdentity(task.id,task.number)&&[intent.priorOutcome,intent.intendedOutcome].includes(value)&&[intent.priorReview,intent.intendedReview].includes(review));
    if(!pending&&state.lastResult!==(value==='solved'))issues.push(`${key}: outcome and review last result disagree.`);
  }
  return issues;
}
function parseLearningRecord(text){
  if(typeof text!=='string'||text.length>5000000)throw new Error('The file is too large.');
  let data;try{data=JSON.parse(text);}catch{throw new Error('The file is not valid JSON.');}
  if(!data||data.format!==learningRecordFormat||![1,2].includes(data.version)||!data.entries||typeof data.entries!=='object'||Array.isArray(data.entries))throw new Error('This is not a supported Calculus, explored learning record.');
  const entries=Object.entries(data.entries);if(entries.length>3000)throw new Error('The record contains too many entries.');
  const rawRecovery=data.version===2?{...data.rawRecovery}:{};
  if(data.version===2&&(!data.rawRecovery||typeof data.rawRecovery!=='object'||Array.isArray(data.rawRecovery)))throw new Error('The raw recovery section is invalid.');
  if(Object.keys(rawRecovery).length>3000||Object.entries(rawRecovery).some(([key,value])=>!futureRawKey(key)||typeof value!=='string'||value.length>250000))throw new Error('The raw recovery section is invalid.');
  const recognized={};
  for(const [key,value] of entries){
    if(futureRawKey(key)){
      if(typeof value!=='string'||value.length>250000||Object.hasOwn(rawRecovery,key)&&rawRecovery[key]!==value)throw new Error(`The raw future-slot entry conflicts: ${key}.`);
      rawRecovery[key]=value;continue;
    }
    if(!learningRecordKeyAllowed(key)||!learningRecordValueValid(key,value))throw new Error(`The record contains an invalid entry: ${key}.`);
    recognized[key]=value;
  }
  const issues=learningRecordConsistency(recognized);if(issues.length)throw new Error(`The record has conflicting learning data: ${issues.join(' ')}`);
  return {entries:recognized,rawRecovery};
}
function mergedArchiveEntries(current,incoming){
  const first=current[writtenExamArchivesKey],second=incoming[writtenExamArchivesKey];
  if(first!==undefined&&!writtenExamArchivesValid(first))throw new Error('The current paper archive is invalid. Download its exact raw record before restoring.');
  if(second===undefined)return {...incoming,...(first===undefined?{}:{[writtenExamArchivesKey]:first})};
  const merged={version:1,entries:[...jsonValue(first)?.entries||[]]};
  for(const entry of jsonValue(second).entries)if(!merged.entries.some(existing=>existing.raw===entry.raw))merged.entries.push(entry);
  const value=JSON.stringify(merged);
  if(!writtenExamArchivesValid(value))throw new Error('Combined paper archives exceed the local count or size limit. Download archive records before restoring; none were evicted.');
  return {...incoming,[writtenExamArchivesKey]:value};
}
function restorePreflight(bundle){
  const current=learningRecordSnapshot();
  for(const key of [assessmentReportKey,assessmentPendingKey])if(current.entries[key]!==undefined&&bundle.entries[key]!==undefined&&current.entries[key]!==bundle.entries[key])throw new Error(`Saved checkpoint conflict for ${key}. Download both exact records before replacing either.`);
  if(current.omitted.includes(writtenExamActiveKey))throw new Error('The current written paper is invalid. Download or archive its exact raw record before restoring.');
  if(current.omitted.includes(writtenExamArchivesKey))throw new Error('The current paper archive is invalid. Download its exact raw record before restoring.');
  if(current.omitted.length)throw new Error(`Current allowed records failed validation: ${current.omitted.join(', ')}. Download their exact raw values from this Progress page and resolve them before restoring.`);
  const incoming=bundle.entries,rawRecovery={...current.rawRecovery};
  for(const [key,value] of Object.entries(bundle.rawRecovery)){
    if(Object.hasOwn(rawRecovery,key)&&rawRecovery[key]!==value)throw new Error(`Raw recovery conflict for ${key}. Both exact copies remain in the browser and selected backup file; download them before choosing a replacement.`);
    rawRecovery[key]=value;
  }
  for(const [key,value] of Object.entries(current.entries))if(futureRawKey(key)){
    if(Object.hasOwn(incoming,key)&&incoming[key]!==value)throw new Error(`Future-slot conflict for ${key}. Both exact copies remain in the browser and selected backup file.`);
    if(!Object.hasOwn(incoming,key))incoming[key]=value;
  }
  const merged=mergedArchiveEntries(current.entries,incoming);for(const key of [assessmentReportKey,assessmentPendingKey])if(current.entries[key]!==undefined&&merged[key]===undefined)merged[key]=current.entries[key];
  if(merged[assessmentPendingKey]){const pending=jsonValue(merged[assessmentPendingKey]);if(merged[assessmentActiveKey]!==pending.activeRaw&&merged[assessmentReportKey]!==JSON.stringify(pending.report))throw new Error('The pending checkpoint has neither its exact active answers nor its committed report in this restore. Preserve and inspect its raw record before continuing.');}
  const issues=learningRecordConsistency(merged);
  if(issues.length)throw new Error(`The restored record conflicts with preserved local data: ${issues.join(' ')}`);
  return {entries:merged,rawRecovery};
}
function restoreLearningRecord(bundle){
return trackNativeOperation(nativeRecordScope([...Object.keys(bundle.entries),...Object.keys(bundle.rawRecovery??{})]), (()=>{
  const previous={};let next;
  try{next=restorePreflight(bundle);for(const key of Object.keys(localStorage))if(learningRecordKeyAllowed(key)||futureRawKey(key))previous[key]=localStorage.getItem(key);}catch(error){return {ok:false,preflight:error.message};}
  try{
    for(const key of Object.keys(previous))if(learningRecordKeyAllowed(key)){localStorage.removeItem(key);if(localStorage.getItem(key)!==null)throw new Error('remove failed');}
    for(const [key,value] of Object.entries({...next.rawRecovery,...next.entries})){localStorage.setItem(key,value);if(localStorage.getItem(key)!==value)throw new Error('write failed');}
    return {ok:true};
  }catch{
    try{
      for(const key of Object.keys(localStorage))if(learningRecordKeyAllowed(key)||futureRawKey(key))localStorage.removeItem(key);
      for(const [key,value] of Object.entries(previous))localStorage.setItem(key,value);
      return {ok:false,rollback:Object.entries(previous).every(([key,value])=>localStorage.getItem(key)===value)&&Object.keys(localStorage).filter(key=>learningRecordKeyAllowed(key)||futureRawKey(key)).every(key=>Object.hasOwn(previous,key))};
    }catch{return {ok:false,rollback:false};}
  }

})(),value=>value!==false&&value!==null&&value?.ok!==false,()=>({arguments:Array.from(arguments)}));
}
function trainingHistory(){
  try{
    const value=JSON.parse(read(trainingHistoryKey)||'[]');
    if(!Array.isArray(value))return [];
    return value.filter(trainingSessionValid).slice(0,30);
  }catch{return [];}
}
// Display can tolerate a damaged history; mutation must preserve its exact owner.
function authoritativeTrainingHistory(){
  const stored=exactStoredValue(trainingHistoryKey);
  if(!stored.ok)return {ok:false};
  if(stored.value===null)return {ok:true,raw:null,entries:[]};
  if(!learningRecordValueValid(trainingHistoryKey,stored.value))return {ok:false};
  return {ok:true,raw:stored.value,entries:JSON.parse(stored.value)};
}
function recordTrainingSession(entry,{examId}={}){
return trackNativeOperation("training-session:"+JSON.stringify([entry,examId??null]), (()=>{
  const opened=authoritativeTrainingHistory();
  if(!opened.ok)return false;
  if(examId&&opened.entries.some(row=>row.kind==='written-exam'&&row.examId===examId))return true;
  const next={...entry,completedAt:entry.completedAt??Date.now()};
  if(!trainingSessionValid(next))return false;
  const raw=JSON.stringify([next,...opened.entries].slice(0,30));
  if(!learningRecordValueValid(trainingHistoryKey,raw))return false;
  const owner=exactStoredValue(trainingHistoryKey);
  if(!owner.ok||owner.value!==opened.raw)return false;
  try{localStorage.setItem(trainingHistoryKey,raw);}catch{}
  const verified=exactStoredValue(trainingHistoryKey);
  return verified.ok&&verified.value===raw;

})(),value=>value!==false&&value!==null&&value?.ok!==false,()=>({arguments:Array.from(arguments)}));
}
const assessmentValid=(key,raw)=>learningRecordValueValid(key,raw);
function assessmentStored(key){return openAuthoredRecord(key,assessmentValid);}
function assessmentStatus(message,records=[]){
  const box=el('section',undefined,'practice-summary assessment-storage-status');box.setAttribute('role','status');box.append(el('p',message));
  for(const [key,opened] of records)if(opened.raw!==null)box.append(el('p',key),rawRecordControls(opened.raw,`${key}-exact-raw.txt`).box);
  return box;
}
function latestAssessmentReport(){const opened=assessmentStored(assessmentReportKey);return opened.kind==='valid'?JSON.parse(opened.raw):null;}
function assessmentCommit(intent){
return trackNativeOperation("checkpoint-submission:"+(intent?.report?.id??jsonValue(read(assessmentPendingKey))?.report?.id??"pending"), (()=>{
  const active=assessmentStored(assessmentActiveKey),previous=assessmentStored(assessmentReportKey),pending=assessmentStored(assessmentPendingKey),history=authoritativeTrainingHistory();
  if(!history.ok||[active,previous,pending].some(item=>!['valid','absent'].includes(item.kind)))return {ok:false,message:'A checkpoint or history record cannot be verified. No records were replaced. Download the exact raw values below.',records:[[assessmentActiveKey,active],[assessmentReportKey,previous],[assessmentPendingKey,pending]]};
  let saved=intent;
  if(pending.kind==='valid'){
    saved=JSON.parse(pending.raw);
    if(intent&&JSON.stringify(intent)!==pending.raw)return {ok:false,message:'Another checkpoint submission is pending. Recover it before submitting this form.',records:[[assessmentPendingKey,pending],[assessmentActiveKey,active]]};
  }else{
    if(!intent||active.raw!==intent.activeRaw||previous.raw!==intent.priorReportRaw||history.raw!==intent.historyRaw)return {ok:false,message:'The active form, report, or history changed. Reload and inspect the saved work before retrying.',records:[[assessmentActiveKey,active],[assessmentReportKey,previous]]};
    const written=commitAuthoredRecord(assessmentPendingKey,pending,JSON.stringify(intent),assessmentValid);
    if(written.kind!=='saved')return {ok:false,message:`Pending checkpoint could not be verified (${written.kind}). Active answers and the previous report remain saved.`,records:[[assessmentActiveKey,active],[assessmentReportKey,previous]]};
  }
  const historyOwner=assessmentStored(trainingHistoryKey);
  if(!['valid','absent'].includes(historyOwner.kind)||historyOwner.raw!==history.raw)return {ok:false,message:'Training history changed or could not be read while saving this checkpoint. Submission stopped. Download the exact current history and pending intent below; resolve the changed owner before retrying.',records:[[trainingHistoryKey,historyOwner],[assessmentPendingKey,assessmentStored(assessmentPendingKey)],[assessmentActiveKey,active],[assessmentReportKey,previous]]};
  const reportRaw=JSON.stringify(saved.report),rowRaw=JSON.stringify(saved.row),matching=history.entries.find(row=>row.assessmentId===saved.report.id);
  if(matching&&JSON.stringify(matching)!==rowRaw)return {ok:false,message:'A history row has this checkpoint ID but different content. The pending and active records remain available.',records:[[assessmentPendingKey,assessmentStored(assessmentPendingKey)],[assessmentActiveKey,active]]};
  if(!matching){
    if(history.raw!==saved.historyRaw||active.raw!==saved.activeRaw||previous.raw!==saved.priorReportRaw)return {ok:false,message:'History or checkpoint ownership changed before recording. No duplicate history row was written. Download the exact current history and pending intent below; resolve the changed owner before retrying.',records:[[trainingHistoryKey,assessmentStored(trainingHistoryKey)],[assessmentPendingKey,assessmentStored(assessmentPendingKey)],[assessmentActiveKey,active],[assessmentReportKey,previous]]};
    const next=JSON.stringify([saved.row,...history.entries].slice(0,30)),result=commitAuthoredRecord(trainingHistoryKey,historyOwner,next,assessmentValid);
    if(result.kind!=='saved')return {ok:false,message:`Recent training could not be verified (${result.kind}). Retry this pending submission; active answers and the previous report remain saved.`,records:[[assessmentPendingKey,assessmentStored(assessmentPendingKey)],[assessmentActiveKey,active]]};
  }
  const reportOwner=assessmentStored(assessmentReportKey);
  if(reportOwner.raw!==reportRaw){
    if(reportOwner.raw!==saved.priorReportRaw)return {ok:false,message:'The latest report changed in another tab. The pending and active records remain for recovery.',records:[[assessmentPendingKey,assessmentStored(assessmentPendingKey)],[assessmentReportKey,reportOwner]]};
    const result=commitAuthoredRecord(assessmentReportKey,reportOwner,reportRaw,assessmentValid);
    if(result.kind!=='saved')return {ok:false,message:`The frozen report could not be verified (${result.kind}). Retry; active answers and the previous report remain saved.`,records:[[assessmentPendingKey,assessmentStored(assessmentPendingKey)],[assessmentActiveKey,active]]};
  }
  const activeOwner=assessmentStored(assessmentActiveKey);
  if(!['valid','absent'].includes(activeOwner.kind))return {ok:true,cleanup:false,report:saved.report,message:'Report saved, but the active form could not be read for cleanup. Its pending submission is retained. Retry from Checkpoint when browser storage is readable.'};
  if(activeOwner.raw===saved.activeRaw){const result=commitAuthoredRecord(assessmentActiveKey,activeOwner,null,assessmentValid);if(result.kind!=='cleared')return {ok:true,cleanup:false,report:saved.report,message:'Report saved. The old active form could not be cleared; retry cleanup from Checkpoint.'};}
  const pendingOwner=assessmentStored(assessmentPendingKey);
  if(pendingOwner.raw!==JSON.stringify(saved)||commitAuthoredRecord(assessmentPendingKey,pendingOwner,null,assessmentValid).kind!=='cleared')return {ok:true,cleanup:false,report:saved.report,message:'Report saved. Pending cleanup could not be verified; retry from Checkpoint.'};
  return {ok:true,cleanup:true,report:saved.report,message:activeOwner.raw!==saved.activeRaw&&activeOwner.raw!==null?'Report saved. A newer active checkpoint remains untouched.':'Report saved in this browser.'};

})(),value=>value!==false&&value!==null&&value?.ok!==false,()=>({arguments:Array.from(arguments)}));
}
const conceptKey=(id,index)=>`concept-${id}-${index}`;
function conceptState(id,index){
  try{return normalizeMasteryState(JSON.parse(read(conceptKey(id,index))||'{}'));}catch{return normalizeMasteryState({});}
}
function recordConcept(id,index,correct){
return trackNativeOperation(nativeRecordScope(conceptKey(id,index)), (()=>{
  const key=conceptKey(id,index),state=nextMasteryState(conceptState(id,index),correct),raw=JSON.stringify(state);return save(key,raw)||read(key)===raw?state:null;

})(),value=>value!==false&&value!==null&&value?.ok!==false,()=>({arguments:Array.from(arguments)}));
}
function studiedChapterIds(){
  return manifest.filter(chapter=>{
    const last=read('last-page-'+chapter.id)||'';
    return read('read-'+chapter.id)==='yes'||/\/(?:check|review)$/.test(last)||(mastery[chapter.id]?.quiz??[]).some((_,index)=>conceptState(chapter.id,index).attempts>0);
  }).map(chapter=>chapter.id);
}
function conceptReadyForCurrentRoute(chapterId,index){
  // Keep the authored identity and older attempts. The sine derivative is taught in Chapter 06.
  return chapterId!=='02'||index!==3||read('read-06')==='yes'||conceptState(chapterId,index).attempts>0;
}
function writtenReadyForCurrentRoute(item){
  if(item.chapterId!=='02'||item.number!==33||read('read-06')==='yes')return true;
  // Keep an existing draft or outcome in its original queue; do not rewrite its record.
  return Boolean(read(problemDraftKey('02',33))||problemOutcome('02',33)!==null);
}
function conceptItems(ids=studiedChapterIds()){
  return ids.flatMap(chapterId=>(mastery[chapterId]?.quiz??[]).flatMap((question,index)=>conceptReadyForCurrentRoute(chapterId,index)?[{chapterId,index,question,state:conceptState(chapterId,index)}]:[]));
}
function reviewTiming(state){
  if(!state.lastResult)return 'Review again today.';
  const days=Math.max(0,daysUntilReview(state.due));
  return days===0?'Review again today.':days===1?'Next review: tomorrow.':`Next review: in ${days} days.`;
}
const ordinaryProblemKey=(kind,id,number)=>kind==='outcome'?`problem-${id}-${number}`:`problem-${kind}-${id}-${number}`;
const taskKey=(kind,id,number)=>newWrittenKey(kind,id,number)||ordinaryProblemKey(kind,id,number);
const problemKey=(id,number)=>taskKey('outcome',id,number);
const problemDraftKey=(id,number)=>taskKey('draft',id,number);
const problemHref=(id,number)=>`#chapter/${id}/practice/${Math.floor((number-1)/4)+1}/problem/${number}`;
function objectiveList(chapter){
  const items=el('ul',undefined,'objective-list');
  chapter.objectives.forEach((objective,index)=>{
    const item=prose('li',objective),practice=el('span',undefined,'objective-practice');
    const problems=objectivePractice[chapter.id]?.[index]??[];
    if(problems.length)practice.append(document.createTextNode('Practice: '));
    problems.forEach((number,linkIndex)=>{
      if(linkIndex)practice.append(document.createTextNode(' · '));
      const target=link(`problem ${number}`,problemHref(chapter.id,number),'objective-practice-link');
      target.setAttribute('aria-label',`Practice: problem ${number}, chapter ${chapter.id}, learning objective ${index+1}`);
      practice.append(target);
    });
    item.append(practice);
    items.append(item);
  });
  return items;
}
const problemOutcome=(id,number)=>{const value=read(problemKey(id,number));return value==='solved'||value==='retry'?value:null;};
const problemReviewKey=(id,number)=>taskKey('review',id,number);
function writtenPracticeState(id,number){try{return normalizeWrittenPracticeState(JSON.parse(read(problemReviewKey(id,number))||'{}'));}catch{return normalizeWrittenPracticeState({});}}
function recordNewWrittenProblem(id,number,solved){
return trackNativeOperation(nativeRecordScope([problemKey(id,number),problemReviewKey(id,number)]), (()=>{
  const outcomeKey=problemKey(id,number),reviewKey=problemReviewKey(id,number),priorOutcome=exactStoredValue(outcomeKey),priorReview=exactStoredValue(reviewKey);
  if(!priorOutcome.ok||!priorReview.ok||priorOutcome.value!==null&&!['solved','retry'].includes(priorOutcome.value)||priorReview.value!==null&&!writtenPracticeStateValid(jsonValue(priorReview.value)))return null;
  const next=nextWrittenPracticeState(normalizeWrittenPracticeState(jsonValue(priorReview.value)||{}),solved),intendedOutcome=solved?'solved':'retry',intendedReview=JSON.stringify(next);
  const change=(key,value)=>{try{if(value===null)localStorage.removeItem(key);else localStorage.setItem(key,value);}catch{}const checked=exactStoredValue(key);return checked.ok&&checked.value===value;};
  if(!change(outcomeKey,intendedOutcome)){change(outcomeKey,priorOutcome.value);return null;}
  if(change(reviewKey,intendedReview))return next;
  change(outcomeKey,priorOutcome.value);change(reviewKey,priorReview.value);
  return null;

})(),value=>value!==false&&value!==null&&value?.ok!==false,()=>({arguments:Array.from(arguments)}));
}
function recordWrittenProblem(id,number,solved){
return trackNativeOperation(nativeRecordScope([problemKey(id,number),problemReviewKey(id,number)]), (()=>{
  if(isNewWrittenTask(id,number))return recordNewWrittenProblem(id,number,solved);
  const outcomeKey=problemKey(id,number),reviewKey=problemReviewKey(id,number),previousOutcome=read(outcomeKey),previousReview=read(reviewKey),next=nextWrittenPracticeState(writtenPracticeState(id,number),solved);
  const intendedOutcome=solved?'solved':'retry',intendedReview=JSON.stringify(next);
  if(!save(outcomeKey,intendedOutcome)&&read(outcomeKey)!==intendedOutcome)return null;
  if(save(reviewKey,intendedReview)||read(reviewKey)===intendedReview)return next;
  if(previousOutcome===null)erase(outcomeKey);else save(outcomeKey,previousOutcome);if(previousReview===null)erase(reviewKey);else save(reviewKey,previousReview);return null;

})(),value=>value!==false&&value!==null&&value?.ok!==false,()=>({arguments:Array.from(arguments)}));
}
function writtenReviewTiming(state){const days=daysUntilReview(state.due);return days<=0?'Written review is due now.':days===1?'Next written review: tomorrow.':`Next written review: in ${days} days.`;}
const problemReasonKey=(id,number)=>taskKey('reason',id,number);
const paperReasonGuidance=key=>problemReasons.find(([value])=>value===key);
const problemRubrics={
  Fluency:['I chose and correctly applied the relevant rule or setup.','My algebra and calculation support the stated result.','I checked the domain, sign, size, or another useful sanity check.'],
  Interpretation:['I identified the mathematical quantity the question asks about.','My calculation or argument is correct and supported.','My conclusion explains the meaning, units, domain, and limitations that matter.'],
  Proof:['I stated the claim and used every necessary condition.','Each logical step follows from a definition, theorem, or justified calculation.','The conclusion answers the exact claim, including boundary or exceptional cases.'],
  Modeling:['I defined the quantities and stated the assumptions that matter.','I built, adapted, or validated a model consistent with those assumptions.','I interpreted the result with units, domain, plausibility, and model limitations.'],
  Challenge:['I found a coherent strategy before calculating.','The important transitions and calculations are justified.','I checked that the final conclusion answers the whole problem and handles restrictions.']
};
const problemPlans={
  Fluency:'Name the rule or standard form you expect to use. Write that rule with symbols before substituting or simplifying.',
  Interpretation:'Name the quantity being represented, its units or domain, and what evidence would make the final statement plausible.',
  Proof:'Rewrite the claim as hypotheses and a conclusion. Identify the definition or theorem that could connect them before writing algebra.',
  Modeling:'Define the variables and units. State the assumptions, then build, adapt, or validate the relationship before interpreting its result.',
  Challenge:'Separate what is given from what must be shown. Try a small case, diagram, or boundary case, then name a strategy that could generalize.'
};
const problemReason=(id,number)=>{const value=read(problemReasonKey(id,number));return problemReasons.some(([key])=>key===value)?value:null;};
function saveProblemReason(id,number,value){
return trackNativeOperation(nativeRecordScope(problemReasonKey(id,number)), (()=>{
  const key=problemReasonKey(id,number);
  if(!isNewWrittenTask(id,number))return save(key,value);
  const opened=openAuthoredRecord(key,(_,raw)=>problemReasons.some(([reason])=>reason===raw));
  return commitAuthoredRecord(key,opened,value,(_,raw)=>problemReasons.some(([reason])=>reason===raw)).kind==='saved';

})(),value=>value!==false&&value!==null&&value?.ok!==false,()=>({arguments:Array.from(arguments)}));
}
function clearProblemReason(id,number){
return trackNativeOperation(nativeRecordScope(problemReasonKey(id,number)), (()=>{
  const key=problemReasonKey(id,number);
  if(!isNewWrittenTask(id,number))return erase(key);
  const opened=openAuthoredRecord(key,(_,raw)=>problemReasons.some(([reason])=>reason===raw));
  return opened.kind==='absent'||commitAuthoredRecord(key,opened,null,()=>true).kind==='cleared';

})(),value=>value!==false&&value!==null&&value?.ok!==false,()=>({arguments:Array.from(arguments)}));
}
function practiceSummary(ids){
  let total=0,solved=0,retry=0,due=0,drafts=0;const today=reviewDay();
  for(const id of ids){const chapter=chapterCache.get(id);if(!chapter)continue;const count=chapter.exercises.length+(depth[id]?.questions.length||0);total+=count;for(let number=1;number<=count;number++){const outcome=problemOutcome(id,number);if(outcome==='solved'){solved++;const state=writtenPracticeState(id,number);if(state.attempts===0||state.due<=today)due++;}if(outcome==='retry')retry++;if(read(problemDraftKey(id,number)))drafts++;}}
  return {total,solved,retry,due,drafts};
}
function writtenProblemItems(ids=studiedChapterIds()){
  return ids.flatMap(chapterId=>{
    const chapter=chapterCache.get(chapterId);if(!chapter)return [];
    return [...chapter.exercises,...(depth[chapterId]?.questions||[])].map((problem,index)=>({chapterId,number:index+1,type:problem.type||'Challenge',problem,outcome:problemOutcome(chapterId,index+1),reason:problemReason(chapterId,index+1),state:writtenPracticeState(chapterId,index+1)}));
  });
}
const paperAuthored=item=>authoredFields(item.problem,problemRubrics[item.type]||problemRubrics.Challenge);
function presentedPaperItem(paper,entry,current){
  if(paper.version>=3)return {chapterId:entry.chapterId,number:entry.number,type:entry.authored.type,problem:entry.authored,rubric:entry.authored.rubric,legacy:false,current};
  return {chapterId:entry.chapterId,number:entry.number,type:current?.type||'Unavailable',problem:current?.problem||null,rubric:current?problemRubrics[current.type]||problemRubrics.Challenge:null,legacy:true,current};
}
const legacyWordingNotice='Original paper wording and authored identity are unavailable. Current edition wording and comparison standard are shown for reference.';
const unboundPaperSlot=(paper,entry)=>isNewWrittenTask(entry.chapterId,entry.number)&&(paper.version<4||entry.taskIdentity!==newWrittenIdentity(entry.chapterId,entry.number));
const unboundPaperNotice='This saved paper refers to an earlier ordinal slot. Its original authored task cannot be identified as the current task at this number. The saved text and draft remain in this paper; no current-task practice credit is given.';
const paperRevisionLink=item=>link('Open current chapter version for revision',problemHref(item.chapterId,item.number),'secondary-link');
function exerciseTypeGuideView(){
  const guide=el('details',undefined,'exercise-type-guide'),summary=el('summary','What do the five problem types mean?'),body=el('div',undefined,'exercise-type-guide-body'),list=el('dl');
  body.append(el('p',exerciseTypeNote));
  for(const {name,description} of exerciseTypeGuide)list.append(el('dt',name),el('dd',description));
  body.append(list);guide.append(summary,body);return guide;
}
function writtenDraftItems(ids=manifest.map(chapter=>chapter.id)){
  return writtenProblemItems(ids).map(item=>({...item,draft:read(problemDraftKey(item.chapterId,item.number))})).filter(item=>typeof item.draft==='string'&&item.draft.length>0&&item.draft.length<=12000);
}
function searchScore(entry,query,tokens){
  const title=entry.title.toLowerCase(),text=entry.text.toLowerCase();
  if(!tokens.every(token=>text.includes(token)))return -1;
  let score=tokens.reduce((total,token)=>total+(title.includes(token)?8:0)+(title.startsWith(token)?5:0),0);
  if(title.includes(query))score+=20;
  if(entry.question){const question=entry.question.toLowerCase();score+=tokens.reduce((total,token)=>total+(question.includes(token)?2:0),0);if(question.includes(query))score+=12;}
  return score;
}
function toc() {
  contents.replaceChildren();
  const query = search.value.toLowerCase().trim();
  let resultCount=0,indexedTotal=0;
  if(query){
    const tokens=query.split(/\s+/).filter(Boolean);
    const ranked=searchIndex.map(entry=>({entry,score:searchScore(entry,query,tokens)})).filter(result=>result.score>=0).sort((a,b)=>b.score-a.score||a.entry.order-b.entry.order),matches=ranked.slice(0,40);
    indexedTotal=ranked.length;
    resultCount=matches.length;
    if(matches.length){
      contents.append(el('h2','Search results'));
      for(const {entry} of matches){
        const a=link(entry.title,entry.href,'search-result');
        a.append(el('small',entry.context));
        if(entry.preview)a.append(el('span',entry.preview,'search-snippet'));
        if(nativeReaderHash()===entry.href)a.setAttribute('aria-current','page');
        contents.append(a);
      }
    }
  } else {
    let part='';
    manifest.forEach(c=>{
      if(part!==c.part){contents.append(el('h2',c.part));part=c.part;}
      const a=link(`${read('read-'+c.id)==='yes'?'✓ ':''}${c.id}  ${c.title}`,'#chapter/'+c.id);
      if(nativeReaderHash().startsWith('#chapter/'+c.id))a.setAttribute('aria-current','page');
      contents.append(a);
    });
    const saved=bookmarks();
    if(saved.length){contents.append(el('h2','Saved pages'));saved.forEach(item=>contents.append(link(item.title,item.href,'saved-page')));}
  }
  const toolsList=[['Your progress','#progress'],['Advanced computational experiments','#labs'],['Project studio','#projects'],['Mixed review & mastery','#review'],['Mixed written practice','#practice'],['Cumulative checkpoint','#assessment'],['Written mock exam','#written-exam'],['Study routes & diagnostic','#guide'],...Object.entries(appendices).map(([key,value])=>[value.title,`#appendix/${key}`])];
  const visibleTools=toolsList.filter(([title])=>!query||title.toLowerCase().includes(query));
  resultCount+=visibleTools.length;
  if(!resultCount&&query)contents.append(el('p','No matching pages or references. Try fewer or different words.','muted'));
  if(visibleTools.length){contents.append(el('h2','Study tools'));visibleTools.forEach(([title,href])=>contents.append(link(title,href)));}
  document.querySelector('#progress').textContent = `${manifest.filter(c => read('read-'+c.id) === 'yes').length} of ${manifest.length} chapters marked read`;
  const totalResults=indexedTotal+visibleTools.length;
  searchStatus.textContent=query?totalResults>resultCount?`Showing ${resultCount} of ${totalResults} search results. Add a topic or problem number to narrow them.`:`${resultCount} search ${resultCount===1?'result':'results'}`:'Showing the complete book library';
  appendHostedChapterContents();
}
function download(text, name, type = 'text/javascript') {
  const url = URL.createObjectURL(new Blob([text],{type}));
  const a = link('',url); a.download = name; a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function portable(code) {
  return '// Calculus, explored — run with Node.js or in a browser console.\n// Outside the book, plot data is printed as JSON.\nconst plot = (points, label) => console.log(JSON.stringify({label, points}));\n\n'+code+'\n';
}
function readableOutput(text) {
  if(text.length>8000)return text;
  try {
    const value=JSON.parse(text);
    const finite=(v,depth=0)=>depth<=8&&(typeof v==='number'?Number.isFinite(v):v&&typeof v==='object'?Object.values(v).every(item=>finite(item,depth+1)):true);
    if(value&&typeof value==='object'&&finite(value)){
      const formatted=JSON.stringify(value,null,2);
      if(formatted.length<=20000)return formatted;
    }
  } catch {}
  return text;
}
function plotView({points,label},equalUnits=false) {
  const fig = el('figure');
  fig.append(el('figcaption',label));
  if(equalUnits)fig.append(el('p','One numerical coordinate unit uses the same distance on both axes.','plot-scale-note'));
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns,'svg');
  svg.classList.add('plot');svg.setAttribute('role','img');
  const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);
  const xmin=Math.min(...xs),xmax=Math.max(...xs),ymin=Math.min(...ys),ymax=Math.max(...ys);
  const xconstant=xmin===xmax,yconstant=ymin===ymax;
  svg.setAttribute('aria-label',`${label}. Horizontal axis: first coordinate; vertical axis: second coordinate. Exact sampled values follow in a table.${xconstant&&yconstant?' All sampled coordinate pairs coincide at one point.':''}`);
  const position=(v,lo,hi)=>lo===hi?0.5:Number.isFinite(hi-lo)?(v-lo)/(hi-lo):(v/2-lo/2)/(hi/2-lo/2);
  const interpolate=(lo,hi,t)=>t===0?lo:t===1?hi:lo*(1-t)+hi*t;
  const format=v=>{
    const rounded=v.toPrecision(4),number=Number(rounded);
    return (Number.isFinite(number)?String(number):rounded).replace('e+','e');
  };
  let lastWidth=0,lastHeight=0,lastScale=0;
  const draw=(width,height)=>{
    width=Math.max(140,width);height=Math.max(160,height);
    const scale=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--reading-scale'))||1;
    if(width===lastWidth&&height===lastHeight&&scale===lastScale)return;
    lastWidth=width;lastHeight=height;lastScale=scale;svg.replaceChildren();
    svg.setAttribute('viewBox',`0 0 ${width} ${height}`);
    let left=Math.min(85*scale,width*.46),right=width-25*scale,top=25*scale,bottom=height-50*scale;
    if(equalUnits&&!xconstant&&!yconstant){
      const dx=xmax-xmin,dy=ymax-ymin;
      const spanScale=Math.max(Number.isFinite(dx)?dx:Math.max(Math.abs(xmin),Math.abs(xmax)),Number.isFinite(dy)?dy:Math.max(Math.abs(ymin),Math.abs(ymax)));
      const xSpan=Number.isFinite(dx)?dx/spanScale:xmax/spanScale-xmin/spanScale;
      const ySpan=Number.isFinite(dy)?dy/spanScale:ymax/spanScale-ymin/spanScale;
      const pixelsPerUnit=Math.min((right-left)/xSpan,(bottom-top)/ySpan);
      const plottedWidth=xSpan*pixelsPerUnit,plottedHeight=ySpan*pixelsPerUnit;
      left+=(right-left-plottedWidth)/2;right=left+plottedWidth;
      top+=(bottom-top-plottedHeight)/2;bottom=top+plottedHeight;
    }
    const x=v=>left+position(v,xmin,xmax)*(right-left),y=v=>bottom-position(v,ymin,ymax)*(bottom-top);
    const shape=(tag,attrs,text)=>{const node=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([key,value])=>node.setAttribute(key,String(value)));if(text!==undefined)node.textContent=text;svg.append(node);return node;};
    shape('path',{d:`M${left} ${top}V${bottom}H${right}`,fill:'none',stroke:'#86998e'});
    if(xmin<=0&&xmax>=0)shape('line',{x1:x(0),x2:x(0),y1:top,y2:bottom,stroke:'#dde3d9'});
    if(ymin<=0&&ymax>=0)shape('line',{x1:left,x2:right,y1:y(0),y2:y(0),stroke:'#dde3d9'});
    const xTick=(value,anchor='middle')=>shape('text',{x:x(value),y:height-28*scale,'text-anchor':anchor,'font-size':12*scale,fill:'#40584d',class:'plot-x-tick'},format(value));
    const yTick=value=>shape('text',{x:left-7*scale,y:y(value)+4*scale,'text-anchor':'end','font-size':12*scale,fill:'#40584d',class:'plot-y-tick'},format(value));
    if(xconstant)xTick(xmin);
    else{
      const divisions=width<340?1:width<500?2:4;
      const values=[...new Set(Array.from({length:divisions+1},(_,i)=>interpolate(xmin,xmax,i/divisions)))];
      values.forEach((value,i)=>xTick(value,i===0?'start':i===values.length-1?'end':'middle'));
    }
    if(yconstant)yTick(ymin);
    else for(const value of new Set(Array.from({length:5},(_,i)=>interpolate(ymin,ymax,i/4))))yTick(value);
    shape('polyline',{points:points.map(p=>`${x(p[0])},${y(p[1])}`).join(' '),fill:'none',stroke:'#b44e2d','stroke-width':2});
    if(xconstant&&yconstant)shape('circle',{cx:x(xmin),cy:y(ymin),r:4,fill:'#b44e2d'});
  };
  draw(620,320);fig.append(svg);
  // Fixed CSS dimensions let the viewBox follow the available space without shrinking tick text.
  let pendingFrame=0,pendingSize=null;
  const observer=new ResizeObserver(entries=>{
    if(!svg.isConnected){observer.disconnect();if(pendingFrame)cancelAnimationFrame(pendingFrame);pendingFrame=0;return;}
    pendingSize=entries[0].contentRect;
    // Drawing in the next animation frame avoids resizing the observed SVG
    // during ResizeObserver delivery, which can trigger a WebKit loop error.
    if(pendingSize.width>0&&pendingSize.height>0&&!pendingFrame)pendingFrame=requestAnimationFrame(()=>{
      pendingFrame=0;
      if(!svg.isConnected){observer.disconnect();return;}
      draw(pendingSize.width,pendingSize.height);
    });
  });
  observer.observe(svg);
  const details=el('details');details.append(el('summary',`View ${points.length} sampled coordinate pairs`));
  const scroll=el('div',undefined,'table-scroll'),table=el('table');scroll.tabIndex=0;table.setAttribute('aria-label',`${label} sampled coordinates`);
  const head=el('thead'),hr=el('tr');for(const text of ['First coordinate (horizontal)','Second coordinate (vertical)']){const th=el('th',text);th.scope='col';hr.append(th);}head.append(hr);table.append(head);
  const body=el('tbody');points.forEach(p=>{const tr=el('tr');tr.append(el('td',String(p[0])),el('td',String(p[1])));body.append(tr);});
  table.append(body);scroll.append(table);details.append(scroll);fig.append(details);return fig;
}
function labView(c,{singleLab=false,heading=null}={}) {
  const lab=el('section',undefined,'lab');lab.id='code-lab';lab.tabIndex=-1;
  lab.append(el('p','Computational laboratory','eyebrow'),heading??el('h2',c.lab.title),prose('p',c.lab.description));
  const taskHeading=el('h3','Before you run'),tasks=list(c.lab.tasks);
  lab.append(taskHeading,tasks);
  const workKey=labWorkKey(c.id),workOpened=openAuthoredRecord(workKey,validLabWork),work=authoredDraft(workKey,readLabWork(workKey,workOpened.raw),workOpened),notebook=el('details',undefined,'lab-notebook visual-notebook'),notebookBody=el('div',undefined,'visual-notebook-body'),notebookStatus=el('p',authoredInitialMessage(workOpened,'Experiment notes'),'muted');
  notebook.open=!singleLab;notebookStatus.setAttribute('role','status');notebook.append(el('summary','Experiment notebook · predict, observe, explain'),notebookBody);
  notebookBody.append(el('p','Before running, predict one output or plot feature and name the input you will vary. After running, record what happened and explain any difference from your prediction. Try a second input to test your explanation.','muted'));
  for(const [field,labelText,placeholder] of [['prediction','1. My prediction','I predict… because…'],['observation','2. What the run showed','With input …, the output or plot showed…'],['explanation','3. My explanation and next test','This agrees or differs because… Next I would test…']]){
    const row=el('div',undefined,'visual-notebook-field'),fieldLabel=el('label',labelText),input=el('textarea');
    input.id=`lab-${c.id}-${field}`;input.rows=3;input.maxLength=2000;input.placeholder=placeholder;input.value=work[field];fieldLabel.htmlFor=input.id;
    input.addEventListener('input',()=>{
      work[field]=input.value;rememberAuthoredDraft(workKey,work);const raw=[work.prediction,work.observation,work.explanation].some(value=>value.length)?JSON.stringify(work):null;const result=commitAuthoredRecord(workKey,workOpened,raw,validLabWork);notebookStatus.textContent=authoredMessage(result,'Experiment notes');if(result.kind==='saved'||result.kind==='cleared')forgetAuthoredDraft(workKey);
    });
    row.append(fieldLabel,input);notebookBody.append(row);
  }
  notebookBody.append(notebookStatus);authoredTools(notebookBody,workKey,workOpened,()=>JSON.stringify(work,null,2));lab.append(notebook);
  const label=el('label','Editable JavaScript','code-label');label.htmlFor='code';
  const codeKey='code-'+c.id,codeOpened=openAuthoredRecord(codeKey,(key,raw)=>raw.length<=250000);const editor=el('textarea');editor.id='code';editor.spellcheck=false;editor.value=authoredDraft(codeKey,codeOpened.kind==='valid'?codeOpened.raw:c.lab.code,codeOpened);
  const codeHelp=el('p','Edit the code, then choose Run. Changes stay in this browser; download a copy to keep a backup. Each run starts fresh and has a 3-second limit.','muted');
  lab.append(label,editor,codeHelp);
  const toolbar=el('div',undefined,'toolbar');
  const run=el('button','Run code','primary'),stop=el('button','Stop'),reset=el('button','Reset'),copy=el('button','Copy'),dl=el('button','Download .js');
  stop.disabled=true;toolbar.append(run,stop,reset,copy,dl);
  const status=el('p','Ready. Code runs only when you choose Run.','status');status.setAttribute('role','status');
  const output=el('pre',undefined,'output');output.hidden=true;output.setAttribute('aria-label','Code output');output.setAttribute('role','region');output.tabIndex=0;
  const plots=el('div');
  const finish=()=>{run.disabled=false;stop.disabled=true;};
  const halt=()=>{stopRun();finish();};
  const codeStatus=el('p',authoredInitialMessage(codeOpened,'Code'),'authored-code-status');codeStatus.setAttribute('role','status');const persistCode=()=>{rememberAuthoredDraft(codeKey,editor.value);const result=commitAuthoredRecord(codeKey,codeOpened,editor.value,(key,raw)=>raw.length<=250000);codeStatus.textContent=authoredMessage(result,'Code');if(result.kind==='saved')forgetAuthoredDraft(codeKey);};editor.addEventListener('input',persistCode);const codeRecovery=authoredTools(lab,codeKey,codeOpened,()=>editor.value);lab.append(codeStatus);
  run.onclick=()=>{
    halt();output.textContent='';output.hidden=true;plots.replaceChildren();run.disabled=true;stop.disabled=false;status.textContent='Running…';
    stopRun=execute(editor.value,data=>{
      if(data.type==='log'){output.hidden=false;output.textContent+=data.text+'\n';}
      if(data.type==='plot')plots.append(plotView(data));
      if(data.type==='error'){status.textContent='Error: '+data.text;finish();}
      if(data.type==='done'){status.textContent='Finished. Compare the result with the expected behavior below.';finish();}
    });
  };
  stop.onclick=()=>{halt();status.textContent='Stopped.';};
  reset.onclick=()=>{halt();editor.value=c.lab.code;output.hidden=true;plots.replaceChildren();persistCode();status.textContent='Original example loaded in this editor. See code storage status below.';};
  copy.onclick=async()=>{try{await navigator.clipboard.writeText(editor.value);status.textContent='Code copied.';}catch{editor.focus();editor.select();status.textContent='Code selected. Use your browser’s copy shortcut.';}};
  dl.onclick=()=>download(portable(editor.value),`calculus-${c.id}.js`);
  const expected=el('details',undefined,'lab-expected');expected.append(el('summary','Compare with expected behavior'),prose('p',c.lab.expected));
  const printExpected=el('section',undefined,'lab-expected-print');printExpected.append(el('h3','Expected behavior'),prose('p',c.lab.expected));
  lab.append(toolbar,status,output,plots,expected,printExpected);
  if(singleLab){
    lab.dataset.eulerSingleLab='chapter-'+c.id+'-lab';
    const instrument=el('div',undefined,'calculus-code-instrument'),editing=el('div',undefined,'calculus-code-editor'),result=el('div',undefined,'calculus-code-result');
    result.setAttribute('role','group');result.setAttribute('aria-label','Code output and plots');
    editing.append(label,editor,toolbar,codeHelp,codeStatus);
    result.append(status,output,plots);instrument.append(editing,result);
    const preparation=el('details',undefined,'calculus-code-preparation');preparation.append(el('summary','Before you run'),taskHeading,tasks);
    const recovery=el('details',undefined,'calculus-code-recovery');recovery.append(el('summary','Code draft storage and backup'));
    for(const warning of lab.querySelectorAll(':scope > .authored-warning'))editing.append(warning);
    recovery.append(codeRecovery);
    // Move the same controls and notebook fields; their handlers and keys stay bound.
    lab.append(instrument,preparation,notebook,recovery,expected,printExpected);
    const noteSlot=el('div');noteSlot.dataset.eulerReaderNoteSlot='';noteSlot.hidden=true;lab.append(noteSlot);
  }
  return lab;
}
function depthView(extra) {
  if (!extra) return null;
  const section=el('section',undefined,'deep-dive');section.id='deep-dive';section.tabIndex=-1;
  section.append(el('p','Go deeper','eyebrow'),el('h2',extra.title));
  extra.paragraphs.forEach(p=>section.append(prose('p',p)));
  const worked=el('div',undefined,'deep-worked');
  worked.append(el('h3','Work it through'),prose('p',extra.worked.problem),workedSolution(extra.worked,'Reveal the derivation step by step'));
  section.append(worked);
  return section;
}
function masteryWorkedView(entry) {
  const section=el('section',undefined,'mastery-worked');
  section.append(el('p','Mastery workshop','eyebrow'),el('h2','More worked examples'));
  entry.worked.forEach((example,i)=>{
    const card=el('div',undefined,'example');
    card.append(el('p',`Workshop example ${i+1}`,'eyebrow'),prose('h3',example.title),prose('p',example.problem),workedSolution(example));
    section.append(card);
  });
  return section;
}
const confidenceOptions=[['low','Not sure'],['medium','Somewhat sure'],['high','Very sure']];
function confidencePicker(name){
  const field=el('fieldset',undefined,'confidence-picker');field.append(el('legend','How confident are you in the answer you formed?'));
  const inputs=[];for(const [value,labelText] of confidenceOptions){const label=el('label'),input=el('input');input.type='radio';input.name=name;input.value=value;input.dataset.confidence=value;label.append(input,el('span',labelText));field.append(label);inputs.push(input);}
  return {field,inputs,value:()=>field.querySelector('input:checked')?.value||null};
}
function confidenceFeedback(confidence,correct){
  if(confidence==='high'&&!correct)return 'Confidence check: this was a confident miss. Identify the assumption or distinction that made the chosen answer seem right.';
  if(confidence==='low'&&correct)return 'Confidence check: correct while unsure. Explain why the answer works before moving on so the success becomes repeatable.';
  return '';
}
function appendConceptRepair(feedback,chapterId,index,question){
  const repair=conceptRepair(chapterId,index,question);
  if(!repair)return;
  if(repair.authored){feedback.append(' ',link(repair.authored.label,repair.authored.href));return;}
  const bridges={
    '06.4':'At y=0 on this circle, implicit division fails; the radius is horizontal, so the tangent is vertical. The linked problem uses a point where y is nonzero.',
    '09.3':'For the linked function, [-2,0] brackets a root by continuity, but the first Newton step from 0 is 1, outside that bracket.',
    '22.4':'Here f=x²+4y² gives a y multiplier of 1−8h, which grows when h>1/4. The linked problem uses F=f/2, so its step α=2h has the same multiplier and a bound α<1/2.',
    '23.0':'Each unit-square tile has side lengths 1/n and area 1/n². In the linked grid problem, this area weights the value at each sample point.',
    '23.4':'Areal density in kg/m² times area in m² gives mass in kg; use that unit check in the linked lamina problem.'
  };
  const bridge=bridges[`${chapterId}.${index}`];if(bridge)feedback.append(' ',el('span',bridge,'repair-bridge'));
  feedback.append(' ',link(`Review Lesson ${repair.lesson} →`,repair.lessonHref),' ',link(`Work ${repair.problemChapter===chapterId?'':`Chapter ${repair.problemChapter} `}Problem ${repair.problem} →`,repair.problemHref));
}
function masteryQuizView(entry,id) {
  const section=el('section',undefined,'mastery-quiz');
  section.append(el('p','Check your understanding','eyebrow'),el('h2','Concept checks'),el('p','Form an answer and rate confidence before revealing choices. Your first attempt and review schedule stay in this browser.'));
  if(id==='02')section.append(el('p','The sine-derivative question is an optional return after studying Chapter 06 Lesson 3 and marking Chapter 06 read. The other Chapter 02 checks use ideas already taught here. Your earlier attempts at the derivative question remain available.','page-intro'));
  const score=el('p',undefined,'mastery-score');score.setAttribute('role','status');
  const updateScore=()=>{const states=entry.quiz.flatMap((_,index)=>conceptReadyForCurrentRoute(id,index)?[conceptState(id,index)]:[]),attempted=states.filter(state=>state.attempts>0);score.textContent=`${attempted.length} of ${states.length} currently available attempted · ${attempted.filter(state=>state.firstCorrect).length} correct first try · ${attempted.filter(state=>state.due<=reviewDay()).length} due now`;};
  updateScore();
  section.append(score);
  section.append(link('Open mixed retrieval practice →','#review','secondary-link'));
  const recorded=new Set();
  entry.quiz.forEach((question,i)=>{
    const field=el('fieldset',undefined,'quiz-question');
    field.append(prose('legend',`${i+1}. ${question.prompt}`));
    const name=`mastery-${id}-${i}`;
    const choices=el('div',undefined,'chapter-choices');choices.hidden=true;
    const optionSeed=Number(id)*7+i+conceptState(id,i).attempts;
    orderAnswerOptions(question.options,question.correct,optionSeed).forEach(option=>{
      const label=el('label',undefined,'quiz-option'),input=el('input');input.type='radio';input.name=name;input.value=String(option.index);
      input.setAttribute('aria-label',optionAccessibleName(option.text));label.append(input,prose('span',option.text));choices.append(label);
    });
    const confidence=confidencePicker(`${name}-confidence`),reveal=el('button','I have formed an answer — show choices');reveal.type='button';reveal.disabled=true;confidence.inputs.forEach(input=>input.onchange=()=>{reveal.disabled=false;});reveal.onclick=()=>{choices.hidden=false;reveal.hidden=true;choices.querySelector('input')?.focus();};field.append(el('p','Work the question before looking at choices.'),confidence.field,reveal,choices);
    const button=el('button','Check answer');button.type='button';
    const feedback=el('p',undefined,'quiz-feedback');feedback.setAttribute('role','status');
    button.onclick=()=>{
      const chosen=field.querySelector('.quiz-option input:checked');
      if(!chosen){feedback.textContent='Choose an answer first.';return;}
      const confidenceValue=confidence.value();if(!confidenceValue){feedback.textContent='Rate how confident you were before checking the answer.';return;}
      const correct=Number(chosen.value)===question.correct;
      let state=conceptState(id,i);if(!recorded.has(i)){state=recordConcept(id,i,correct);if(!state){feedback.textContent='This concept answer could not be saved. It has not been counted; retry when browser storage is available.';return;}recorded.add(i);updateScore();}
      renderProse(feedback,[(correct?'Correct. ':'Not quite. ')+(correct?'':(question.misconceptions?.[chosen.value]||'')+' ')+question.explanation,confidenceFeedback(confidenceValue,correct),reviewTiming(state)].filter(Boolean).join(' '));if(!correct)appendConceptRepair(feedback,id,i,question);
      feedback.classList.toggle('correct',correct);
    };
    field.append(button,feedback);
    if(id==='02'&&i===3&&!conceptReadyForCurrentRoute(id,i)){
      const later=el('details',undefined,'optional-later-check');
      later.append(el('summary','Optional return: study Chapter 06 Lesson 3, then mark Chapter 06 read'),link('Study the derivative rules →','#chapter/06/lesson/3'),field);
      section.append(later);
    }else section.append(field);
  });
  return section;
}
const routeProgressKey=id=>`route-progress-${id}`;
const routeRows=route=>route?.weeks||route?.stages||[];
function activeRouteId(){const id=read(activeRouteKey);return Object.hasOwn(routes,id)?id:null;}
function routeProgress(id){const rows=routeRows(routes[id]);try{const stored=JSON.parse(read(routeProgressKey(id))||'[]');return Array.from({length:rows.length},(_,index)=>typeof stored[index]==='boolean'?stored[index]:false);}catch{return Array(rows.length).fill(false);}}
function firstRouteChapter(row){return String(row?.[2]||'').match(/\b(?:0[1-9]|1[0-9]|2[0-9]|30)\b/)?.[0]||null;}
function routeMilestoneLabel(route,row){return route.weeks?`Week ${row[0]} · ${row[1]}`:`${row[0]} stage · ${row[1]}`;}
function routeTrainingCard(){
  const id=activeRouteId();if(!id)return null;const route=routes[id],rows=routeRows(route),progress=routeProgress(id),complete=progress.filter(Boolean).length,current=progress.findIndex(value=>!value),card=link('',`#guide/${id}`,'training-plan-card');
  card.append(el('strong',`${complete}/${rows.length}`),el('span','route milestones marked'),el('small',current<0?'All milestones marked. Revisit one or choose another route.':`Next: ${routeMilestoneLabel(route,rows[current])}`));return card;
}
function draftTrainingCard(drafts=writtenDraftItems()){
  if(!drafts.length)return null;const first=drafts[0],card=link('',problemHref(first.chapterId,first.number),'training-plan-card');
  card.append(el('strong',String(drafts.length)),el('span',drafts.length===1?'saved attempt draft':'saved attempt drafts'),el('small',`Resume Chapter ${first.chapterId}, Problem ${first.number} and compare or complete the reasoning.`));return card;
}
function trainingPlanView(){
  const chapterIds=studiedChapterIds(),lastLocation=read('last-location'),routeCard=routeTrainingCard(),draftCard=draftTrainingCard();
  if(!chapterIds.length&&!lastLocation&&!routeCard&&!draftCard)return null;
  const section=el('section',undefined,'training-plan');
  section.append(el('p','Saved progress','eyebrow'),el('h2','Your next study session'));
  if(!chapterIds.length){
    section.append(el('p',routeCard?'Start with the next milestone in your active route. Mixed concept and written practice unlock after you reach a chapter’s check or review page.':'Continue the lesson where you stopped. Mixed concept and written practice unlock after you reach that chapter’s check or review page.'));
    const cards=el('div',undefined,'training-plan-grid');if(draftCard)cards.append(draftCard);if(routeCard)cards.append(routeCard);if(lastLocation){const resume=link('',lastLocation,'training-plan-card');resume.append(el('strong','→'),el('span','Continue reading'),el('small','Return to the exact lesson where you stopped.'));cards.append(resume);}section.append(cards);
    return section;
  }
  const concepts=masterySummary(conceptItems(chapterIds)),practice=practiceSummary(chapterIds),cards=el('div',undefined,'training-plan-grid');
  const review=link('','#review','training-plan-card');
  const reviewCount=concepts.due||concepts.unseen;
  review.append(el('strong',String(reviewCount)),el('span',concepts.due?'concept questions due':concepts.unseen?'new concept questions available':'concept reviews scheduled later'),el('small',concepts.due?'Start with the ideas scheduled for today.':concepts.unseen?'Retrieve a new idea from studied chapters.':'The scheduled concept queue is caught up.'));
  const retryItems=writtenProblemItems(chapterIds).filter(item=>item.outcome==='retry'),reasonCounts=new Map(problemReasons.map(([key])=>[key,retryItems.filter(item=>item.reason===key).length])),topReason=[...reasonCounts].sort((a,b)=>b[1]-a[1])[0],written=link('',topReason?.[1]?`#practice/${topReason[0]}`:'#practice','training-plan-card');
  const writtenCount=practice.retry||practice.due||Math.max(0,practice.total-practice.solved);
  written.append(el('strong',String(writtenCount)),el('span',practice.retry?'written problems to retry':practice.due?'written reviews due':'written problems still open'),el('small',practice.retry&&topReason?.[1]?`Open the ${problemReasons.find(([key])=>key===topReason[0])[1].toLowerCase()} retry clinic first.`:practice.retry?'Retry work appears first in the mixed session.':practice.due?'Re-solve scheduled problems before support appears.':'Mix unseen work from the chapters you studied.'));
  const lastAssessment=trainingHistory().find(item=>item.kind==='assessment'),assessment=link('','#assessment','training-plan-card');
  assessment.append(el('strong',lastAssessment?`${Math.round(100*lastAssessment.correct/lastAssessment.total)}%`:'20'),el('span',lastAssessment?'latest cumulative checkpoint':'question cumulative checkpoint'),el('small',lastAssessment?'Use a fresh form after repairing the missed strands.':'Sample a course before choosing what to repair.'));
  cards.append(review,written);if(draftCard)cards.append(draftCard);cards.append(assessment);if(routeCard)cards.append(routeCard);
  if(lastLocation){
    const match=lastLocation.match(/^#chapter\/(\d{2})/),chapter=match&&manifest.find(item=>item.id===match[1]),resume=link('',lastLocation,'training-plan-card');
    resume.append(el('strong','→'),el('span','Continue reading'),el('small',chapter?`Chapter ${chapter.id}: ${chapter.title}`:'Return to your saved page.'));cards.append(resume);
  }
  section.append(el('p',`${chapterIds.length} of ${manifest.length} chapters have entered your training pool · ${concepts.strong} concepts currently strong · ${practice.solved} written problems marked solved`,'meta'),cards,link('View all chapter progress →','#progress','secondary-link'));
  return section;
}
function home() {
  document.title='Calculus, explored';
  if(eulerHostedEntry) main.append(el('p','Calculus laboratories and practice','eyebrow'),el('h1','Explore the mathematics. Keep your work.'),el('p','Read the calculus books, then use these laboratories, written practice and retained records to work through the ideas.','lead'));
  else main.append(el('p','A book you can experiment with','eyebrow'),el('h1','Understand change.\nExplore what follows.'),el('p','From your first limit to the geometry of vector fields: read the mathematics, change the code, and see what happens.','lead'));
  const actions=el('div',undefined,'toolbar');actions.append(eulerHostedEntry?link('Read the calculus books →',new URL('reading/index.html',import.meta.url).href,'card'):link('Start with chapter 1 →','#chapter/01','card'),link('Choose a study route →','#guide','card'));main.append(actions);
  main.append(el('p',`${manifest.length} chapters · ${visualCount} visual investigations · ${manifest.length} canonical laboratories · ${supplementaryLabs.length} advanced experiments · ${projects.length} projects · ${Object.values(mastery).reduce((n,c)=>n+c.quiz.length,0)} concept checks · ${numericCheckCount} numerical checkpoints · complete printable edition`,'meta'));
  const resources=el('div',undefined,'toolbar');resources.append(link('Practice what you studied →','#review','card'),printEditionDownload('card'));main.append(resources);
  main.append(el('p','This is a working edition. Chapters still need independent mathematical review before publication.','edition-note'));
  const trainingPlan=trainingPlanView();if(trainingPlan)main.append(trainingPlan);
  main.append(visualView('05'));
  main.append(el('h2',eulerHostedEntry?'Choose a laboratory':'Choose your starting point'));
  const cards=el('div',undefined,'cards');
  for(const part of [...new Set(manifest.map(c=>c.part))]){
    const chapters=manifest.filter(c=>c.part===part), card=link('','#chapter/'+chapters[0].id+(eulerHostedEntry?'/lab':''),'card');
    card.append(el('span',`Chapters ${chapters[0].id}–${chapters.at(-1).id}`,'eyebrow'),el('h2',part),el('p',chapters.map(c=>c.title).join(' · ')));cards.append(card);
  }main.append(cards);
  main.append(el('h2','Your code belongs in your hands'),el('p','Every chapter includes an editable example. Run it here, download a JavaScript file, or inspect the chapter source. Numerical experiments build intuition; the text explains when a result can be proved.'));
  const tools=el('div',undefined,'cards');tools.append(link('Your progress and next steps','#progress','card'),link('Advanced computational experiments','#labs','card'),link('Project studio','#projects','card'),link('Mixed review and mastery','#review','card'),link('Mixed written practice','#practice','card'),link('Cumulative course checkpoint','#assessment','card'),link('Written mock exam','#written-exam','card'),link('Study routes and prerequisite check','#guide','card'),link('Reference appendices','#appendix/algebra','card'));
  main.append(el('h2','Study with a route'),el('p','Choose a 14-week course plan or a self-paced path, check your prerequisites, and consult the mathematical references while you work.'),tools);
  main.append(link('Public calculus transfer work',new URL('extensions/uni12-transfer/index.html',import.meta.url).href,'secondary-link'),el('p','Eighteen self-study forms ask you to apply calculus in a new setting. Each includes a model response and comparison criteria; write your own attempt before opening them. Keep your work on paper or in your own editor, as the forms do not save or score responses.','muted'));
}
function tableView(headers,rows,className='reference-table',label='Reference data',rowHeader=false){
  const wrapper=el('div',undefined,'table-scroll'),table=el('table',undefined,className),head=el('thead'),tr=el('tr');wrapper.tabIndex=0;wrapper.setAttribute('role','region');wrapper.setAttribute('aria-label',`${label} table`);table.setAttribute('aria-label',label);
  headers.forEach(h=>{const th=prose('th',h);th.scope='col';tr.append(th);});head.append(tr);table.append(head);
  const body=el('tbody');rows.forEach(row=>{const line=el('tr');row.forEach((cell,i)=>{const item=prose(rowHeader&&i===0?'th':'td',String(cell));if(rowHeader&&i===0)item.scope='row';item.dataset.label=optionAccessibleName(headers[i]);line.append(item);});body.append(line);});table.append(body);wrapper.append(table);return wrapper;
}
function appendixView(key){
  const appendix=appendices[key];if(!appendix)return false;
  document.title=appendix.title+' · Calculus, explored';main.append(el('p','Reference appendix','eyebrow'),el('h1',appendix.title),prose('p',appendix.intro,'lead'),link('← Study routes','#guide'));
  appendix.sections.forEach(section=>{const box=el('section',undefined,'reference-section');box.append(el('h2',section.title));section.paragraphs.forEach(p=>box.append(prose('p',p)));if(section.table)box.append(tableView(section.table.headers,section.table.rows,'reference-table',section.title));if(section.links){const refs=el('p',undefined,'reference-links');for(const item of section.links)refs.append(link(item.label,item.href),' ');box.append(refs);}main.append(box);});
  main.append(el('h2','Other references'));
  const cards=el('div',undefined,'cards');Object.entries(appendices).filter(([id])=>id!==key).forEach(([id,value])=>cards.append(link(value.title,`#appendix/${id}`,'card')));main.append(cards);return true;
}
function diagnosticView(){
  const section=el('section',undefined,'mastery-quiz diagnostic'),heading=el('h2','Prerequisite check');section.id='prerequisite-check';heading.tabIndex=-1;section.append(heading,el('p','Choose one answer for each question. Your first attempts build a skill-by-skill repair plan and stay in this browser; you can retry any question afterward.'));
  let first;try{const stored=JSON.parse(read('diagnostic-first')||'[]');first=Array.from({length:diagnostic.length},(_,index)=>typeof stored[index]==='boolean'?stored[index]:null);}catch{first=Array(diagnostic.length).fill(null);}
  let selections;try{const stored=JSON.parse(read('diagnostic-selections')||'[]');selections=Array.from({length:diagnostic.length},(_,index)=>Number.isInteger(stored[index])&&stored[index]>=0&&stored[index]<diagnostic[index].options.length?stored[index]:null);}catch{selections=Array(diagnostic.length).fill(null);}
  let history;try{const stored=JSON.parse(read('diagnostic-history')||'[]');history=Array.isArray(stored)?stored.filter(item=>Number.isInteger(item?.score)&&item.score>=0&&item.score<=diagnostic.length).slice(0,5):[];}catch{history=[];}
  const status=el('p',undefined,'mastery-score');status.setAttribute('role','status');section.append(status);
  const recommendation=el('section',undefined,'diagnostic-result');recommendation.setAttribute('aria-live','polite');section.append(recommendation);
  const refresh=()=>{
    const done=first.filter(value=>value!==null).length;status.textContent=`${done} of ${diagnostic.length} first attempts recorded`;recommendation.replaceChildren();
    if(done!==diagnostic.length){if(history.length)recommendation.append(el('p',`Previous completed scores: ${history.map(item=>`${item.score}/${diagnostic.length}`).join(' · ')}. Finish this new record to compare.`,'diagnostic-history'));return;}
    const score=first.filter(Boolean).length,summary=score<8?'Build the foundations before limits. Use the repair links below, practise without notes, and then start a new diagnostic record.':score<11?'Repair the missed skills below before chapter 4, then take a fresh first-attempt record.':'You are ready to begin chapter 4. Use any repair links below to remove the remaining weak spots.';
    recommendation.append(el('h3','Your starting plan'),el('p',`${score}/${diagnostic.length} correct on first attempts. ${summary}`));
    const profile=el('div',undefined,'diagnostic-profile');profile.setAttribute('aria-label','Prerequisite skill profile');
    for(const skill of [...new Set(diagnostic.map(question=>question.skill))]){
      const items=diagnostic.map((question,index)=>({question,index})).filter(item=>item.question.skill===skill),passed=items.filter(item=>first[item.index]).length,missed=items.filter(item=>!first[item.index]),card=el('section',undefined,'diagnostic-skill');if(missed.length)card.classList.add('needs-repair');
      card.append(el('h4',skill),el('strong',`${passed}/${items.length} secure`));
      if(!missed.length)card.append(el('p','Ready for calculus use.'));
      else {card.append(el('p',`${missed.length} first-attempt ${missed.length===1?'gap':'gaps'} to repair.`));const repairs=el('div',undefined,'diagnostic-repairs');for(const item of missed){if(!repairs.querySelector(`a[href="${item.question.repair.href}"]`))repairs.append(link(item.question.repair.label,item.question.repair.href));}card.append(repairs);}
      profile.append(card);
    }
    const actions=el('div',undefined,'toolbar'),reset=el('button','Start a new diagnostic record');reset.type='button';reset.onclick=()=>{history=[{score},...history].slice(0,5);save('diagnostic-history',JSON.stringify(history));first=Array(diagnostic.length).fill(null);selections=Array(diagnostic.length).fill(null);erase('diagnostic-first');erase('diagnostic-selections');section.querySelectorAll('input[type=radio]').forEach(input=>input.checked=false);section.querySelectorAll('.quiz-feedback').forEach(feedback=>{feedback.textContent='';feedback.classList.remove('correct');});refresh();section.querySelector('.quiz-question input')?.focus();};actions.append(link('Open the Calculus I route →','#guide/calculus-1','secondary-link'),reset);recommendation.append(profile,actions);
  };refresh();
  diagnostic.forEach((question,i)=>{
    const field=el('fieldset',undefined,'quiz-question');field.append(prose('legend',`${i+1}. ${question.prompt}`));
    question.options.forEach((option,j)=>{const label=el('label',undefined,'quiz-option'),input=el('input');input.type='radio';input.name=`diagnostic-${i}`;input.value=String(j);input.checked=selections[i]===j;input.setAttribute('aria-label',optionAccessibleName(option));label.append(input,prose('span',option));field.append(label);});
    const check=el('button','Check answer');check.type='button';const feedback=el('p',undefined,'quiz-feedback');feedback.setAttribute('role','status');
    check.onclick=()=>{const chosen=field.querySelector('input:checked');if(!chosen){feedback.textContent='Choose an answer first.';return;}const selected=Number(chosen.value),correct=selected===question.correct,repeat=first[i]!==null;if(!repeat){first[i]=correct;selections[i]=selected;save('diagnostic-first',JSON.stringify(first));save('diagnostic-selections',JSON.stringify(selections));}const lead=repeat?(correct?'Correct on this try. ':'Not yet. '):(correct?'Correct. ':'Not quite. '),specific=correct?'':question.misconceptions[selected]+' ';renderProse(feedback,lead+specific+question.explanation+(repeat?' Your first-attempt diagnostic score is unchanged.':''));feedback.classList.toggle('correct',correct);refresh();};
    if(first[i]!==null){const specific=!first[i]&&Number.isInteger(selections[i])?question.misconceptions[selections[i]]+' ':'';renderProse(feedback,(first[i]?'First attempt was correct. ':'First attempt needed repair. ')+specific+question.explanation);feedback.classList.toggle('correct',first[i]);}
    field.append(check,feedback);section.append(field);
  });return section;
}
function reviewView(){
  document.title='Mixed review · Calculus, explored';
  main.append(el('p','Training','eyebrow'),el('h1','Practice what you want to remember'),el('p','Retrieve ideas from studied chapters in a short mixed session. Due questions come first; new questions are interleaved across chapters so the method is not announced by a block heading.','lead'));
  const previousMarker=jsonValue(read(conceptReviewActiveKey));
  if(read(conceptReviewActiveKey)!==null){
    if(conceptReviewActiveValid(previousMarker))main.append(el('p','An earlier concept review was interrupted. Its individually saved answers remain in your schedule; no completed-session score was recorded. This is a new session.','practice-summary'));
    else main.append(el('p','An unrecognized concept-review marker was left unchanged. Check your learning-record backup before removing it.','practice-summary'));
    if(conceptReviewActiveValid(previousMarker)&&!erase(conceptReviewActiveKey)&&read(conceptReviewActiveKey)!==null){main.append(el('p','The interrupted marker could not be cleared. A new review was not started. Retry after browser storage is available.','practice-summary'));return;}
    if(!conceptReviewActiveValid(previousMarker))return;
  }
  const chapterIds=studiedChapterIds();
  if(!chapterIds.length){
    const empty=el('section',undefined,'review-empty');empty.append(el('h2','Complete one chapter check first'),el('p','The review queue uses chapters whose concept-check or review page you have reached, chapters you have marked as read, and chapters with saved attempts. This keeps advanced questions out of the queue until you reach their material.'));
    const actions=el('div',undefined,'toolbar');actions.append(link('Begin chapter 1 →','#chapter/01','primary-link'),link('Choose a study route →','#guide','secondary-link'));empty.append(actions);main.append(empty);return;
  }
  const allItems=conceptItems(chapterIds),metrics=el('section',undefined,'mastery-metrics'),practiceStatus=el('p',undefined,'practice-summary');metrics.setAttribute('aria-label','Mastery summary');practiceStatus.setAttribute('role','status');
  const updateMetrics=()=>{
    const summary=masterySummary(conceptItems(chapterIds));metrics.replaceChildren();
    for(const [value,label,detail] of [[summary.due,'Due now','Previously attempted'],[summary.unseen,'New','Not attempted yet'],[summary.developing,'Developing','Fewer than two correct reviews'],[summary.strong,'Strong','At least two correct reviews']]){
      const card=el('div',undefined,'mastery-metric');card.append(el('strong',String(value)),el('span',label),el('small',detail));metrics.append(card);
    }
    const practice=practiceSummary(chapterIds);practiceStatus.textContent=`Written practice: ${practice.solved} marked solved · ${practice.due} spaced reviews due · ${practice.retry} flagged for another attempt · ${practice.total-practice.solved-practice.retry} unrecorded`;
  };
  updateMetrics();main.append(metrics,practiceStatus,link('Open mixed written practice →','#practice','secondary-link'));
  const queue=buildReviewQueue(allItems);
  const note=el('p',`${chapterIds.length} studied ${chapterIds.length===1?'chapter':'chapters'} · ${allItems.length} available concept checks · session limit 10`,'meta');main.append(note);
  if(!queue.length){
    const future=allItems.filter(item=>item.state.attempts>0).sort((a,b)=>a.state.due-b.state.due)[0];
    const caught=el('section',undefined,'review-empty');caught.append(el('h2','You are caught up'),el('p',future?`The next scheduled review is ${new Date(future.state.due).toLocaleDateString()}. You can keep reading or return then for retrieval practice.`:'No review is due yet.'));
    caught.append(link('Continue reading →',read('last-location')||'#chapter/01','primary-link'));main.append(caught);return;
  }
  const marker={version:1,startedAt:Date.now()};
  if(!save(conceptReviewActiveKey,JSON.stringify(marker)))main.append(el('p','This session could not save an interruption marker. Individually saved answers still update their schedules, but a reload cannot identify this incomplete session.','practice-summary'));
  const session=el('section',undefined,'review-session'),progress=el('p',undefined,'review-progress');progress.setAttribute('role','status');session.append(progress);main.append(session);
  let position=0,correctCount=0,confidentMisses=0,unsureCorrect=0;const missed=new Set();
  const finish=()=>{
    const markerCleared=erase(conceptReviewActiveKey)||read(conceptReviewActiveKey)===null,recorded=markerCleared&&recordTrainingSession({kind:'concept',total:queue.length,correct:correctCount,confidentMisses,unsureCorrect,chapters:[...new Set(queue.map(item=>item.chapterId))]});
    session.replaceChildren(el('p','Session complete','eyebrow'),el('h2',`${correctCount} of ${queue.length} correct`),el('p',correctCount===queue.length?'Every answer was correct. The scheduler will bring these ideas back after a longer interval.':'Missed ideas remain due today. Rework the linked chapter checks before repeating them.'));
    const calibration=el('section',undefined,'calibration-summary');calibration.append(el('h3','Confidence check'),el('p',confidentMisses?`${confidentMisses} ${confidentMisses===1?'answer was a confident miss':'answers were confident misses'}. Reconstruct why each distractor looked plausible before retrying.`:'No very-sure answer was missed.'),el('p',unsureCorrect?`${unsureCorrect} correct ${unsureCorrect===1?'answer was':'answers were'} marked “Not sure.” Explain those answers without choices to make the knowledge more stable.`:'No correct answer was marked “Not sure.”'));session.append(calibration);
    session.append(el('p',recorded?'Added to Recent training on your progress page.':markerCleared?'Session complete, but recent history could not be saved in this browser.':'The concept answers were saved individually, but the interruption marker could not be removed. No completed-session score was recorded.','muted'));
    if(missed.size){const links=el('div',undefined,'review-links');for(const id of missed)links.append(link(`Review chapter ${id}: ${manifest.find(chapter=>chapter.id===id).title} →`,`#chapter/${id}/check`));session.append(links);}
    const actions=el('div',undefined,'toolbar'),again=el('button','Start another session','primary');again.type='button';again.onclick=()=>{main.replaceChildren();reviewView();window.scrollTo(0,0);};actions.append(again,link('Continue reading',read('last-location')||'#chapter/01','secondary-link'));session.append(actions);updateMetrics();
  };
  const show=(focusNext=false)=>{
    if(position>=queue.length){finish();return;}
    const item=queue[position],chapter=manifest.find(entry=>entry.id===item.chapterId),field=el('fieldset',undefined,'quiz-question review-question');field.dataset.chapter=item.chapterId;field.dataset.question=String(item.index);
    progress.textContent=`Question ${position+1} of ${queue.length}`;
    const context=el('p',`Chapter ${item.chapterId} · ${chapter.title}`,'eyebrow');
    field.append(prose('legend',item.question.prompt),context);
    const recall=el('div',undefined,'recall-stage'),reveal=el('button','I have formed an answer — show choices'),choices=el('div',undefined,'review-choices'),confidence=confidencePicker(`review-confidence-${position}`);reveal.type='button';reveal.disabled=true;choices.hidden=true;
    confidence.inputs.forEach(input=>input.onchange=()=>{reveal.disabled=false;});recall.append(el('p','Work it out or say the answer before revealing the choices. Then rate the answer you formed so the result can distinguish uncertainty from a confident misconception.'),confidence.field,reveal);field.append(recall,choices);
    const optionSeed=Number(item.chapterId)*7+item.index+item.state.attempts;
    orderAnswerOptions(item.question.options,item.question.correct,optionSeed).forEach(option=>{const label=el('label',undefined,'quiz-option'),input=el('input');input.type='radio';input.name=`review-${position}`;input.value=String(option.index);input.setAttribute('aria-label',optionAccessibleName(option.text));label.append(input,prose('span',option.text));choices.append(label);});
    const controls=el('div',undefined,'review-controls'),check=el('button','Check answer','primary'),next=el('button',position===queue.length-1?'Finish session':'Next question');check.type='button';next.type='button';next.hidden=true;
    controls.hidden=true;reveal.onclick=()=>{choices.hidden=false;controls.hidden=false;reveal.hidden=true;choices.querySelector('input')?.focus();};
    const feedback=el('p',undefined,'quiz-feedback');feedback.setAttribute('role','status');
    check.onclick=()=>{
      const chosen=field.querySelector('.quiz-option input:checked');if(!chosen){feedback.textContent='Choose an answer first.';return;}
      const confidenceValue=confidence.value(),correct=Number(chosen.value)===item.question.correct,state=recordConcept(item.chapterId,item.index,correct);if(!state){feedback.textContent='This concept answer could not be saved. It has not been counted; retry when browser storage is available.';return;}if(correct){correctCount++;if(confidenceValue==='low')unsureCorrect++;}else{missed.add(item.chapterId);if(confidenceValue==='high')confidentMisses++;}
      renderProse(feedback,[(correct?'Correct. ':'Not quite. ')+(correct?'':(item.question.misconceptions?.[chosen.value]||'')+' ')+item.question.explanation,confidenceFeedback(confidenceValue,correct),reviewTiming(state)].filter(Boolean).join(' '));if(!correct)appendConceptRepair(feedback,item.chapterId,item.index,item.question);
      feedback.classList.toggle('correct',correct);field.querySelectorAll('input').forEach(input=>input.disabled=true);check.disabled=true;next.hidden=false;updateMetrics();next.focus();
    };
    next.onclick=()=>{position++;show(true);};controls.append(check,next);field.append(controls,feedback);session.replaceChildren(progress,field);
    if(focusNext){progress.id='review-stage-progress';field.tabIndex=-1;field.setAttribute('aria-describedby',progress.id);field.focus({preventScroll:true});field.scrollIntoView({block:'start'});}
  };
  show();
  const explanation=el('details',undefined,'review-method');explanation.append(el('summary','How the review queue works'),el('p','A missed question stays due today. Correct reviews return after 1, 3, 7, 14, 30, and then 60 days as the correct streak grows. Choice order changes between attempts so position memory cannot stand in for recall. The schedule and first-attempt record are stored only in this browser. Reading progress determines which chapters may enter the queue.'));main.append(explanation);
}
function assessmentReportView(id,questionNumber=null){
  document.title='Saved checkpoint report · Calculus, explored';
  const owner=assessmentStored(assessmentReportKey);
  if(owner.kind!=='valid'){main.append(assessmentStatus('The latest checkpoint report cannot be read or validated. Its raw record remains untouched; inspect it in Progress.',[[assessmentReportKey,owner]]),link('Checkpoint setup','#assessment'));return;}
  const report=JSON.parse(owner.raw);
  if(report.id!==id){main.append(el('h1','This checkpoint report is no longer saved'),el('p','Only the most recent completed checkpoint has a detailed local report. Older scores remain in Recent training.'),link('Open latest report',`#assessment/report/${report.id}`));return;}
  const correct=report.items.filter(item=>item.selected===item.correct).length,priority=prioritizedAssessmentItems(report),result=el('section',undefined,'assessment-result'),heading=el('h2',`${correct} of ${report.items.length} correct on this sample`);
  main.append(el('p','Most recent completed checkpoint · saved report','eyebrow'),el('h1','Saved checkpoint report'),el('p',`${report.scopeLabel} · ${new Date(report.completedAt).toLocaleString()} · Seed ${report.seed}`,'meta'));
  result.append(heading,el('p','This score counts correct answers in the sampled questions. Confidence and later study do not change it; this report does not establish mastery.'));
  const profile=el('div',undefined,'assessment-profile');profile.setAttribute('aria-label','Checkpoint results by mathematical strand');
  for(const strand of assessmentStrands){
    const sampled=report.items.filter(item=>strand.ids.includes(item.chapterId));if(!sampled.length)continue;
    const strandCorrect=sampled.filter(item=>item.selected===item.correct).length,card=el('section',undefined,'assessment-strand'),meter=el('meter');
    card.append(el('h3',strand.label),el('strong',`${strandCorrect}/${sampled.length}`));meter.min=0;meter.max=sampled.length;meter.value=strandCorrect;meter.setAttribute('aria-label',`${strand.label}: ${strandCorrect} of ${sampled.length} correct`);
    card.append(meter,el('p',`${sampled.length} sampled ${sampled.length===1?'question':'questions'} in this strand.`));profile.append(card);
  }
  result.append(el('h3','Strand profile'),profile);
  const confidentMisses=report.items.filter(item=>item.selected!==item.correct&&item.confidence==='high').length,unsureCorrect=report.items.filter(item=>item.selected===item.correct&&item.confidence==='low').length,calibration=el('section',undefined,'calibration-summary');
  calibration.append(el('h3','Confidence check'),el('p',`${confidentMisses} ${confidentMisses===1?'answer was a confident miss':'answers were confident misses'}. Revisit the reasoning behind any confident miss.`),el('p',`${unsureCorrect} correct ${unsureCorrect===1?'answer was':'answers were'} marked “Not sure.” Explain those answers from memory before a fresh form.`));
  result.append(calibration);main.append(result);
  const actions=el('div',undefined,'toolbar');actions.append(link('Return to checkpoint setup','#assessment','secondary-link'),link('Your progress','#progress','secondary-link'));main.append(actions);
  const pendingOwner=assessmentStored(assessmentPendingKey);
  if(pendingOwner.kind==='valid'){
    const notice=assessmentStatus('This report is saved, but submission cleanup is unfinished. Retry to verify the old active form and clear the pending record without adding another history row.',[[assessmentPendingKey,pendingOwner]]),retry=el('button','Retry saved submission','primary');
    retry.type='button';retry.onclick=()=>{const outcome=assessmentCommit();if(outcome.ok)routeBody();else notice.replaceWith(assessmentStatus(outcome.message,outcome.records));};notice.append(retry);main.append(notice);
  }else if(pendingOwner.kind!=='absent')main.append(assessmentStatus('A pending submission cannot be read or validated. Its exact raw record remains untouched; inspect it in Progress.',[[assessmentPendingKey,pendingOwner]]));
  const plan=el('section',undefined,'assessment-repairs');plan.append(el('h2','Next study priorities'),el('p','For each priority, name the assumption behind your answer, explain the condition that makes the correct answer work and why the alternatives fail, then attempt the linked written problem without support.'));
  if(!priority.length)plan.append(el('p',report.items.some(item=>item.confidence===null)?'This older form has no recorded confidence judgments. Re-explain two answers from memory and try related written work before another form.':'Every sampled answer was correct and none was marked Not sure. Explain a few from memory, solve written work without support, then use a fresh sample.'));
  else {const list=el('ol');for(const {item,index} of priority){const row=el('li'),kind=item.selected!==item.correct?(item.confidence==='high'?'Confident miss':'Missed answer'):'Correct while unsure';row.append(el('strong',`Question ${index+1} · ${kind} · Chapter ${item.chapterId}`),' ',link('Saved explanation →',`#assessment/report/${report.id}/question/${index+1}`));for(const [target,href] of item.repairHrefs.entries())if(assessmentRepairHref(href))row.append(' ',link(target===0?'Repair lesson or task →':'Written problem →',href));list.append(row);}plan.append(list);}
  main.append(plan);
  const review=el('section',undefined,'assessment-report-review');review.append(el('h2','Saved questions and explanations'),el('p','Open one question at a time. The selected answer and original choices are frozen at submission.','muted'));
  for(const [index,item] of report.items.entries()){
    const details=el('details',undefined,'assessment-report-item'),summary=el('summary',`Question ${index+1} · Chapter ${item.chapterId} · ${item.selected===item.correct?'Correct':'Needs repair'} · ${item.confidence===null?'Confidence not recorded':confidenceOptions.find(([value])=>value===item.confidence)?.[1]}`),body=el('div',undefined,'assessment-report-body'),questionHeading=prose('h3',item.prompt);
    questionHeading.id=`assessment-report-question-${index+1}`;questionHeading.tabIndex=-1;body.append(questionHeading);
    const choices=el('ol');for(const optionIndex of item.optionOrder){const choice=el('li');choice.append(prose('span',item.options[optionIndex]));if(optionIndex===item.selected)choice.append(' · Your selection');if(optionIndex===item.correct)choice.append(' · Correct answer');choices.append(choice);}body.append(choices);
    body.append(el('p',`Confidence before choices: ${item.confidence===null?'Not recorded':confidenceOptions.find(([value])=>value===item.confidence)?.[1]}.`),el('h4','Explanation'),prose('p',item.explanation));
    if(item.selected!==item.correct&&item.misconception)body.append(el('h4','Why your choice can seem plausible'),prose('p',item.misconception));
    for(const href of item.repairHrefs)if(assessmentRepairHref(href))body.append(link(href.includes('/lesson/')?'Open repair lesson →':'Attempt linked written problem →',href,'secondary-link'));
    body.append(link('Back to study priorities',`#assessment/report/${report.id}`,'secondary-link'));details.append(summary,body);review.append(details);
    if(questionNumber===index+1){details.open=true;queueMicrotask(()=>{questionHeading.focus({preventScroll:true});questionHeading.scrollIntoView({block:'start'});});}
  }
  main.append(review);
}
function assessmentView(){
  document.title='Cumulative checkpoint · Calculus, explored';
  main.append(el('p','Assessment','eyebrow'),el('h1','Test what you can retrieve across a course'),el('p','Take an untimed, closed-support checkpoint before deciding what to study next. Each question begins with free recall and a confidence judgment, choices appear only after you commit, and explanations stay hidden until the whole checkpoint is submitted.','lead'));
  const activeOwner=assessmentStored(assessmentActiveKey),reportOwner=assessmentStored(assessmentReportKey),pendingOwner=assessmentStored(assessmentPendingKey);
  if([activeOwner,reportOwner,pendingOwner].some(item=>!['absent','valid'].includes(item.kind))){main.append(assessmentStatus('A checkpoint record is invalid or unreadable. It remains untouched. Download exact raw values from Progress before making another checkpoint.',[[assessmentActiveKey,activeOwner],[assessmentReportKey,reportOwner],[assessmentPendingKey,pendingOwner]]));return;}
  let active=activeOwner.kind==='valid'?JSON.parse(activeOwner.raw):null;
  if(active?.version===1){const migrated={...active,version:2,confidences:Array(active.items.length).fill(null)},result=commitAuthoredRecord(assessmentActiveKey,activeOwner,JSON.stringify(migrated),assessmentValid);if(result.kind!=='saved'){main.append(assessmentStatus('Legacy checkpoint confidence migration could not be verified. Original answers remain saved; retry after storage is available.',[[assessmentActiveKey,assessmentStored(assessmentActiveKey)]]));return;}active=migrated;}
  if(pendingOwner.kind==='valid'){const pending=JSON.parse(pendingOwner.raw),notice=assessmentStatus('A checkpoint submission was interrupted. Retry it to complete the same report without another history row.',[[assessmentPendingKey,pendingOwner]]),retry=el('button','Retry saved submission','primary');retry.type='button';retry.onclick=()=>{const outcome=assessmentCommit();if(outcome.ok){void navigateReader(`#assessment/report/${outcome.report.id}`);}else notice.replaceWith(assessmentStatus(outcome.message,outcome.records));};notice.append(retry);main.append(notice);}
  if(reportOwner.kind==='valid'){const report=JSON.parse(reportOwner.raw);main.append(el('p',undefined,'practice-summary'));main.lastChild.append('Most recent completed checkpoint: ',link(`${report.items.filter(item=>item.selected===item.correct).length}/${report.items.length} correct · ${new Date(report.completedAt).toLocaleDateString()} · Open saved report →`,`#assessment/report/${report.id}`));}
  const resetView=()=>{main.replaceChildren();assessmentView();window.scrollTo(0,0);};
  const finish=(state,items,section)=>{
    const activeOwner=assessmentStored(assessmentActiveKey),reportOwner=assessmentStored(assessmentReportKey),pendingOwner=assessmentStored(assessmentPendingKey),history=authoritativeTrainingHistory();
    if(!history.ok||activeOwner.kind!=='valid'||!['absent','valid'].includes(reportOwner.kind)||pendingOwner.kind!=='absent'||activeOwner.raw!==JSON.stringify(state)){
      section.prepend(assessmentStatus('Submission stopped: saved checkpoint data changed or cannot be verified. Your active answers and previous report were not replaced. Reload and inspect the exact raw records in Progress.',[[assessmentActiveKey,activeOwner],[assessmentReportKey,reportOwner],[assessmentPendingKey,pendingOwner]]));return;
    }
    const report=buildAssessmentReport(state,items.map(item=>item.question),Date.now(),conceptRepair,orderAnswerOptions);
    if(!assessmentReportValid(report,{validHref:assessmentRepairHref})){section.prepend(assessmentStatus('This result did not pass report validation. The active answers remain saved for recovery.'));return;}
    const correct=report.items.filter(item=>item.selected===item.correct).length,row={kind:'assessment',total:report.items.length,correct,confidentMisses:report.items.filter(item=>item.selected!==item.correct&&item.confidence==='high').length,unsureCorrect:report.items.filter(item=>item.selected===item.correct&&item.confidence==='low').length,chapters:[...new Set(report.items.map(item=>item.chapterId))],scope:report.scope,completedAt:report.completedAt,assessmentId:report.id};
    const outcome=assessmentCommit({version:1,report,row,activeRaw:activeOwner.raw,priorReportRaw:reportOwner.raw,historyRaw:history.raw});
    if(outcome.ok){void navigateReader(`#assessment/report/${report.id}`);}
    else section.prepend(assessmentStatus(outcome.message,outcome.records));
  };
  const renderSession=state=>{
    const updateState=change=>{const prior=JSON.stringify(state),owner=assessmentStored(assessmentActiveKey);if(owner.kind!=='valid'||owner.raw!==prior){main.prepend(assessmentStatus('Saved checkpoint changed or cannot be read. Reload before editing; the current page changes are not saved.',[[assessmentActiveKey,owner]]));return false;}change();const result=commitAuthoredRecord(assessmentActiveKey,owner,JSON.stringify(state),assessmentValid);if(result.kind==='saved')return true;Object.assign(state,JSON.parse(prior));main.prepend(assessmentStatus(`Checkpoint edit could not be verified (${result.kind}). The previous saved answers remain intact.`,[[assessmentActiveKey,assessmentStored(assessmentActiveKey)]]));return false;};
    const items=state.items.map(entry=>({...entry,question:mastery[entry.chapterId].quiz[entry.index]})),section=el('section',undefined,'assessment-session');main.append(section);
    const render=focusQuestion=>{
      const answered=state.selections.filter(value=>value!==null).length,item=items[state.position],chapter=manifest.find(entry=>entry.id===item.chapterId);section.replaceChildren();
      const sessionHeading=el('h2',assessmentScopes[state.scope].label),meta=el('p',`${items.length} questions · untimed · feedback after submission`,'meta'),status=el('p',`Question ${state.position+1} of ${items.length} · ${answered} answered`,'assessment-status');status.setAttribute('role','status');section.append(sessionHeading,meta,status);
      const navigator=el('nav',undefined,'assessment-navigator');navigator.setAttribute('aria-label','Checkpoint questions');items.forEach((_,index)=>{const button=el('button',String(index+1),state.selections[index]===null?'':'answered');button.type='button';button.setAttribute('aria-label',`Question ${index+1}, ${state.selections[index]===null?'unanswered':'answered'}`);if(index===state.position)button.setAttribute('aria-current','step');button.onclick=()=>{if(updateState(()=>{state.position=index;}))render(true);};navigator.append(button);});section.append(navigator);
      const field=el('fieldset',undefined,'quiz-question assessment-question');field.dataset.chapter=item.chapterId;field.dataset.question=String(item.index);field.tabIndex=-1;field.append(prose('legend',item.question.prompt),el('p',`Chapter ${item.chapterId} · ${chapter.title}`,'eyebrow'));
      if(!state.revealed[state.position]){const recall=el('div',undefined,'recall-stage'),reveal=el('button','I have formed an answer — show choices','primary'),confidence=confidencePicker(`assessment-confidence-${state.position}`);reveal.type='button';reveal.disabled=!state.confidences[state.position];for(const input of confidence.inputs){input.checked=state.confidences[state.position]===input.value;input.onchange=()=>{if(updateState(()=>{state.confidences[state.position]=input.value;}))reveal.disabled=false;else input.checked=false;};}recall.append(el('p','Work the question mentally or on paper, then rate that answer before seeing the alternatives. No correctness is shown until you submit the complete checkpoint.'),confidence.field,reveal);reveal.onclick=()=>{if(!state.confidences[state.position])return;if(!updateState(()=>{state.revealed[state.position]=true;}))return;render(false);section.querySelector('.assessment-question input')?.focus();};field.append(recall);}
      else {const confidenceLabel=confidenceOptions.find(([value])=>value===state.confidences[state.position])?.[1]||'Not recorded for this restored question';field.append(el('p',`Confidence before choices: ${confidenceLabel}.`,'assessment-confidence'));for(const option of orderAnswerOptions(item.question.options,item.question.correct,state.seed+Number(item.chapterId)*101+item.index*17)){const label=el('label',undefined,'quiz-option'),input=el('input');input.type='radio';input.name=`assessment-${state.position}`;input.value=String(option.index);input.checked=state.selections[state.position]===option.index;input.onchange=()=>{if(!updateState(()=>{state.selections[state.position]=Number(input.value);}))return;status.textContent=`Question ${state.position+1} of ${items.length} · ${state.selections.filter(value=>value!==null).length} answered`;const navButton=navigator.children[state.position];navButton.classList.add('answered');navButton.setAttribute('aria-label',`Question ${state.position+1}, answered`);submit.disabled=state.selections.some(value=>value===null);submitHelp.textContent=submit.disabled?'Answer every question before submitting.':'All questions answered. Submit when you are ready for scoring and explanations.';};input.setAttribute('aria-label',optionAccessibleName(option.text));label.append(input,prose('span',option.text));field.append(label);}}
      section.append(field);
      const controls=el('div',undefined,'assessment-controls'),previous=el('button','Previous question'),next=el('button','Next question'),submit=el('button','Submit checkpoint','primary'),submitHelp=el('p',undefined,'muted'),abandon=el('button','End without scoring');previous.type=next.type=submit.type=abandon.type='button';previous.disabled=state.position===0;next.disabled=state.position===items.length-1;submit.disabled=state.selections.some(value=>value===null);submitHelp.textContent=submit.disabled?'Answer every question before submitting.':'All questions answered. Submit when you are ready for scoring and explanations.';previous.onclick=()=>{if(updateState(()=>{state.position--;}))render(true);};next.onclick=()=>{if(updateState(()=>{state.position++;}))render(true);};submit.onclick=()=>finish(state,items,section);abandon.onclick=()=>{const owner=assessmentStored(assessmentActiveKey);if(owner.kind==='valid'&&owner.raw===JSON.stringify(state)&&commitAuthoredRecord(assessmentActiveKey,owner,null,assessmentValid).kind==='cleared')resetView();else main.prepend(assessmentStatus('The active checkpoint could not be cleared. Its saved answers remain available.',[[assessmentActiveKey,owner]]));};controls.append(previous,next,submit,abandon);section.append(controls,submitHelp);if(focusQuestion){field.focus({preventScroll:true});const heading=field.querySelector('legend'),toolbarHeight=document.querySelector('.topbar')?.getBoundingClientRect().height||0;window.scrollTo(0,Math.max(0,window.scrollY+heading.getBoundingClientRect().top-toolbarHeight-16));}
    };render(false);
  };
  if(active){main.append(el('p','Your interrupted checkpoint was restored from this browser. Answers remain unscored until submission.','practice-summary assessment-resume-notice'));renderSession(active);return;}
  const builder=el('section',undefined,'practice-builder assessment-builder'),scopeControl=el('div',undefined,'practice-control'),scopeLabel=el('label','Course scope'),scopeSelect=el('select'),lengthControl=el('div',undefined,'practice-control'),lengthLabel=el('label','Checkpoint length'),lengthSelect=el('select'),start=el('button','Start checkpoint','primary'),status=el('p',undefined,'assessment-builder-status');scopeSelect.id='assessment-scope';scopeLabel.htmlFor=scopeSelect.id;lengthSelect.id='assessment-length';lengthLabel.htmlFor=lengthSelect.id;for(const [value,scope] of Object.entries(assessmentScopes)){const option=el('option',scope.label);option.value=value;scopeSelect.append(option);}for(const count of [10,20]){const option=el('option',`${count} questions`);option.value=String(count);lengthSelect.append(option);}start.type='button';status.setAttribute('role','status');status.setAttribute('aria-live','polite');const syncLength=()=>{const long=lengthSelect.querySelector('option[value="20"]'),shortScope=scopeSelect.value==='differential-equations';long.disabled=false;status.textContent=shortScope?'This scope contains 14 concept questions; a request for 20 uses all 14.':'Forms balance questions across the chapters in the selected scope.';};scopeSelect.onchange=syncLength;syncLength();scopeControl.append(scopeLabel,scopeSelect);lengthControl.append(lengthLabel,lengthSelect);builder.append(scopeControl,lengthControl,start,status);main.append(builder);
  const previous=trainingHistory().find(item=>item.kind==='assessment');if(previous){const scope=assessmentScopes[previous.scope];main.append(el('p',`Most recent checkpoint: ${previous.correct}/${previous.total} correct · ${scope?.label||'Saved course scope'} · ${new Date(previous.completedAt).toLocaleDateString()}.`,'practice-summary'));}
  const method=el('details',undefined,'review-method');method.append(el('summary','How checkpoint forms and scores work'),el('p',`A form draws without replacement from the ${Object.values(mastery).reduce((n,chapter)=>n+chapter.quiz.length,0)} concept checks and spreads its sample across the selected chapters before repeating a chapter. The saved seed preserves the same questions, confidence judgments, and option order after a reload. Confidence does not change the score; it separates secure misconceptions from fragile correct answers in the report. A score describes only that form: it is not a grade, proof of mastery, or substitute for written work. Checkpoint answers do not alter the spaced-review schedule.`));main.append(method);
  start.onclick=()=>{if(assessmentStored(assessmentPendingKey).kind!=='absent'){status.textContent='Finish the pending submission before starting another checkpoint.';return;}const scope=assessmentScopes[scopeSelect.value],length=Number(lengthSelect.value),seed=globalThis.crypto?.getRandomValues?crypto.getRandomValues(new Uint32Array(1))[0]:Date.now()>>>0,source=scope.ids.flatMap(chapterId=>(mastery[chapterId]?.quiz??[]).flatMap((question,index)=>conceptReadyForCurrentRoute(chapterId,index)?[{chapterId,index,question}]:[])),queue=buildAssessmentQueue(source,{limit:length,seed}),state={version:3,scope:scopeSelect.value,length,seed,startedAt:Date.now(),position:0,items:queue.map(({chapterId,index})=>({chapterId,index})),selections:Array(queue.length).fill(null),revealed:Array(queue.length).fill(false),confidences:Array(queue.length).fill(null)};const owner=assessmentStored(assessmentActiveKey),result=commitAuthoredRecord(assessmentActiveKey,owner,JSON.stringify(state),assessmentValid);if(result.kind!=='saved'){status.textContent=`Checkpoint could not be verified (${result.kind}). Inspect existing browser data before retrying.`;return;}main.replaceChildren();assessmentView();window.scrollTo(0,0);};
}
function rawRecordControls(raw,name){
  const box=el('details',undefined,'raw-record'),summary=el('summary','Inspect exact raw browser record'),field=el('textarea'),actions=el('div',undefined,'toolbar'),exportButton=el('button','Download exact raw record');
  field.readOnly=true;field.value=raw;field.rows=8;field.setAttribute('aria-label','Exact raw browser record');exportButton.type='button';
  exportButton.onclick=()=>download(raw,name,'text/plain;charset=utf-8');actions.append(exportButton);box.append(summary,field,actions);
  return {box,exportButton};
}
function paperRecoveryPanel(raw,reason,onSuccess){
  const panel=el('section',undefined,'written-paper-recovery'),heading=el('h2',reason==='invalid'?'Recover the unrecognized written paper':'Resolve this written paper conflict'),status=el('p',undefined,'practice-summary'),archive=el('button','Keep current chapter work and archive this incomplete paper','primary'),rawControls=rawRecordControls(raw,'written-paper-exact-raw.txt'),fallback=el('div');
  heading.tabIndex=-1;status.setAttribute('role','status');archive.type='button';
  if(reason==='conflict')status.textContent='Current chapter work conflicts with this paper. No further schedules were changed.';
  const offerRemoval=()=>{
    fallback.replaceChildren();
    const label=el('label'),check=el('input'),remove=el('button','Remove active paper after saving raw copy');check.type='checkbox';remove.type='button';remove.disabled=true;
    label.append(check,' I saved and inspected the exact raw download. I understand this paper will not be in the local archive.');check.onchange=()=>{remove.disabled=!check.checked;};
    remove.onclick=()=>{if(read(writtenExamActiveKey)!==raw){status.textContent='The active paper changed. Reload before removing it.';return;}if(!erase(writtenExamActiveKey)&&read(writtenExamActiveKey)!==null){status.textContent='The active paper could not be removed. Its exact raw data is still here.';return;}if(read(writtenExamActiveKey)!==null){status.textContent='Removal could not be verified. Retry after checking browser storage.';return;}onSuccess();};
    fallback.append(el('p','Local archival is unavailable. Download and inspect the exact raw paper, then use this explicit choice only if you have kept your copy.','muted'),label,remove);
  };
  archive.onclick=()=>{const result=archiveWrittenPaper(raw,reason);if(result.ok){onSuccess();return;}status.textContent=result.message;if(/full|exceeds|size|invalid/.test(result.message))offerRemoval();};
  panel.append(heading,el('p','The exact saved text is available below. Archiving keeps every paper draft and review field together, leaves chapter practice unchanged, and does not mark the paper complete.'),rawControls.box,archive,status,fallback);
  return panel;
}
function writtenExamView(){
  document.title='Written mock exam · Calculus, explored';
  main.append(el('p','Written assessment','eyebrow'),el('h1','Written mock exam'),el('p','Work an untimed paper without hints or solutions. Then compare your reasoning and schedule the next practice.','lead'));
  let raw;try{raw=localStorage.getItem(writtenExamActiveKey);}catch{main.append(el('p','Browser storage could not be read. Any existing written paper remains untouched. Retry after storage becomes available.','practice-summary'));return;}
  let state=jsonValue(raw);
  if(raw!==null&&!writtenExamActiveValid(state)){
    main.querySelector('.lead')?.remove();
    main.append(el('p','The saved written paper could not be validated. Its exact raw browser record and chapter drafts remain untouched.','practice-summary'),paperRecoveryPanel(raw,'invalid',()=>{main.replaceChildren();writtenExamView();}));
    return;
  }
  const resetView=()=>{main.replaceChildren();writtenExamView();window.scrollTo(0,0);};
  const paperOpened={kind:raw===null?'absent':'valid',raw};
  const commitState=change=>{let next=structuredClone(state);next=change(next)||next;if(!writtenExamActiveValid(next))return {kind:'limit'};const nextRaw=JSON.stringify(next),result=commitAuthoredRecord(writtenExamActiveKey,paperOpened,nextRaw,(key,value)=>writtenExamActiveValid(jsonValue(value)));if(result.kind==='saved')state=next;return result;};
  const saveState=change=>commitState(change).kind==='saved';
  // Version 1 used chapter drafts. An unfinished paper starts empty and offers an explicit copy;
  // an already open review snapshots the available text without claiming when it was written.
  if(state?.version===1){
    const legacy=state;
    const migrated={...legacy,version:2,id:`legacy-${legacy.startedAt}-${legacy.seed}`,drafts:legacy.items.map(entry=>{if(legacy.phase!=='review')return '';const prior=openAuthoredRecord(ordinaryProblemKey('draft',entry.chapterId,entry.number),(key,value)=>value.length>0&&value.length<=12000);return prior.kind==='valid'?prior.raw:'';}),origins:Array(legacy.length).fill(legacy.phase==='review'?'legacy-review-unknown':'new'),intents:Array(legacy.length).fill(null),historySaved:false};
    if(commitState(()=>migrated).kind!=='saved'){main.append(el('p','The older paper could not be migrated. Its saved record and all chapter drafts remain in this browser. Try again when storage is available.','practice-summary'));return;}
  }
  const examItems=()=>{const source=new Map(writtenProblemItems(assessmentScopes[state.scope].ids).map(item=>[`${item.chapterId}.${item.number}`,item]));return state.items.map(entry=>presentedPaperItem(state,entry,source.get(`${entry.chapterId}.${entry.number}`)));};
  const items=state?examItems():null;
  const draftAdapter=(index,readonly=false)=>{
    const opened={kind:state.drafts[index]?'valid':'absent',raw:state.drafts[index]||null};
    return {key:`${writtenExamActiveKey}:${state.id}:${index}`,opened,readonly,commit:value=>{
      if(readonly)return {kind:'unverified'};
      if(opened.kind==='changed'||state.drafts[index]!== (opened.raw||''))return {kind:'changed'};
      const result=commitState(next=>{next.drafts[index]=value||'';});
      if(result.kind==='saved'){opened.raw=value;opened.kind=value===null?'absent':'valid';return {kind:value===null?'cleared':'saved'};}
      return result;
    }};
  };
  const endPaper=status=>{const result=commitAuthoredRecord(writtenExamActiveKey,paperOpened,null,(key,value)=>writtenExamActiveValid(jsonValue(value)));if(result.kind==='cleared'){resetView();return;}status.textContent='The saved paper could not be removed or verified. Your drafts and review remain available; retry after checking Progress.';};
  let conflict=null;
  const finish=()=>{
return trackNativeOperation("paper-completion:"+state.id, (()=>{
    conflict=null;
    if(state.results.some(value=>value===null))return 'Review every problem before completing the paper.';
    // A terminal journal has already scheduled every item. An archive retry must
    // never revisit current chapter keys, which may now contain newer practice.
    if(!state.historySaved)for(const [index,item] of items.entries()){
      let intent=state.intents[index];
      const outcomeKey=problemKey(item.chapterId,item.number),reviewKey=problemReviewKey(item.chapterId,item.number);
      const outcomeRead=exactStoredValue(outcomeKey),reviewRead=exactStoredValue(reviewKey);
      if(!outcomeRead.ok||!reviewRead.ok)return `Problem ${index+1}: current chapter outcome or schedule could not be read. No new write was started for this item.`;
      const current=item.current,changed=(state.version>=3&&(!current||!sameAuthored(state.items[index].authored,paperAuthored(current))))||(isNewWrittenTask(item.chapterId,item.number)&&(state.version<4||state.items[index].taskIdentity!==newWrittenIdentity(item.chapterId,item.number)));
      if(changed){
        if(intent?.status==='skipped')continue;
        if(intent){
          const owned=[outcomeRead.value,reviewRead.value].every((value,i)=>value===[intent.priorOutcome,intent.priorReview][i]||value===[intent.intendedOutcome,intent.intendedReview][i]);
          const currentReview=jsonValue(reviewRead.value),intendedReview=jsonValue(intent.intendedReview);
          const later=writtenPracticeStateValid(currentReview)&&currentReview.lastAttempt>intendedReview.lastAttempt&&currentReview.attempts>intendedReview.attempts&&['solved','retry'].includes(outcomeRead.value)&&currentReview.lastResult===(outcomeRead.value==='solved');
          if(!owned&&!later){conflict={index,item,intent,key:outcomeKey,current:outcomeRead.value};return `Problem ${index+1}: newer or unrecognized chapter work needs recovery before this saved comparison can be archived.`;}
          if(owned){
            for(const [key,prior,intended] of [[outcomeKey,intent.priorOutcome,intent.intendedOutcome],[reviewKey,intent.priorReview,intent.intendedReview]]){
              const check=exactStoredValue(key);if(!check.ok)return `Problem ${index+1}: chapter storage could not be read during changed-content recovery.`;
              if(check.value!==prior&&check.value!==intended){conflict={index,item,intent,key,current:check.value};return `Problem ${index+1}: chapter work changed during recovery.`;}
              if(check.value===intended&&check.value!==prior){
                let writeFailed=false;try{if(prior===null)localStorage.removeItem(key);else localStorage.setItem(key,prior);}catch{writeFailed=true;}
                const verified=exactStoredValue(key);if(!verified.ok||verified.value!==prior)return `Problem ${index+1}: changed-content recovery could not be verified. Retry while preserving this paper.`;
                if(writeFailed)return `Problem ${index+1}: changed-content recovery write reported a failure. Its exact saved value will be checked on retry.`;
              }
            }
          }
          if(!saveState(next=>{next.intents[index]={...next.intents[index],status:'skipped',reason:'changed'};}))return `Problem ${index+1}: changed-content recovery was not saved. Retry before archiving.`;
        }else if(!saveState(next=>{next.intents[index]={index,status:'skipped',reason:'changed'};}))return `Problem ${index+1}: skipped comparison could not be saved. No current chapter schedule was changed.`;
        continue;
      }
      if(intent?.status==='skipped')continue;
      if(intent?.status==='applied'){
        const currentReview=jsonValue(reviewRead.value),intendedReview=jsonValue(intent.intendedReview);
        if(writtenPracticeStateValid(currentReview)&&currentReview.lastAttempt>intendedReview.lastAttempt&&currentReview.attempts>intendedReview.attempts&&['solved','retry'].includes(outcomeRead.value)&&currentReview.lastResult===(outcomeRead.value==='solved'))continue;
      }
      if(!intent){
        const priorOutcome=outcomeRead.value,priorReview=reviewRead.value;
        if(priorOutcome!==null&&!['solved','retry'].includes(priorOutcome)||priorReview!==null&&(!writtenPracticeStateValid(jsonValue(priorReview))||priorReview.length>4000))return `Problem ${index+1}: an existing chapter record cannot be safely reconciled.`;
        const intendedReview=JSON.stringify(nextWrittenPracticeState(normalizeWrittenPracticeState(jsonValue(priorReview)||{}),state.results[index]==='solved'));
        if(!saveState(next=>{next.intents[index]={index,status:'pending',priorOutcome,priorReview,intendedOutcome:state.results[index],intendedReview};}))return `Problem ${index+1}: recovery intent could not be saved; no schedule write was started for this item.`;
        intent=state.intents[index];
      }
      for(const [key,prior,intended] of [[outcomeKey,intent.priorOutcome,intent.intendedOutcome],[reviewKey,intent.priorReview,intent.intendedReview]]){
        const checked=exactStoredValue(key);
        if(!checked.ok)return `Problem ${index+1}: chapter storage could not be read. No further schedule write was started.`;
        if(checked.value!==prior&&checked.value!==intended){conflict={index,item,intent,key,current:checked.value};return `Problem ${index+1}: newer chapter work conflicts with this paper. No further schedules were changed.`;}
        let writeFailed=false;
        if(checked.value===prior&&checked.value!==intended){try{localStorage.setItem(key,intended);}catch{writeFailed=true;}}
        const verified=exactStoredValue(key);
        if(!verified.ok||verified.value!==intended)return `Problem ${index+1}: a schedule write failed or could not be verified. Retry when browser storage is available.`;
        if(writeFailed)return `Problem ${index+1}: a schedule write failed. The exact saved value will be checked on retry.`;
      }
      if(intent.status!=='applied'&&!saveState(next=>{next.intents[index].status='applied';}))return `Problem ${index+1}: schedules were written, but the applied marker could not be saved. Retry to verify them.`;
    }
    const solved=state.results.filter(value=>value==='solved').length,retry=state.length-solved,skipped=state.version>=3?state.intents.filter(intent=>intent?.status==='skipped').length:0;
    const entry={kind:'written-exam',examId:state.id,total:state.length,solved,retry,chapters:[...new Set(items.map(item=>item.chapterId))],scope:state.scope};
    if(!recordTrainingSession(entry,{examId:state.id}))return 'Problem schedules were saved, but Recent training could not be verified. The paper remains open; retry when history storage is readable.';
    if(!state.historySaved&&!saveState(next=>{next.historySaved=true;}))return 'Recent training was saved, but the paper cleanup marker could not be saved. Retry completion; history will not be duplicated.';
    const archived=archiveWrittenPaper(JSON.stringify(state),'completed');
    if(!archived.ok)return `Review and Recent training were saved, but the completed paper remains open: ${archived.message} Retry completion after managing the archive in Progress.`;
    main.replaceChildren();document.title='Written mock exam result · Calculus, explored';
    const result=el('section',undefined,'written-exam-result'),heading=el('h1',`${solved} of ${items.length} marked as meeting the written standard after your comparison`),meter=el('meter');heading.tabIndex=-1;meter.min=0;meter.max=items.length;meter.value=solved;meter.setAttribute('aria-label',`${solved} of ${items.length} written problems marked as meeting the comparison standard`);result.append(el('p','Review complete','eyebrow'),heading,meter,el('p',skipped?`${skipped} saved ${skipped===1?'comparison was':'comparisons were'} kept in this paper but not applied to current chapter practice because the task changed or disappeared. Other unchanged tasks were scheduled. This history is your self-report against the saved paper standard.`:retry?'Return to the flagged problems with the repair strategies in your saved paper review. Matching tasks are due in written practice now.':'You marked every problem as meeting its type-specific setup, reasoning, and conclusion criteria. The problems now enter spaced written review.'),el('p','Your recorded comparisons were added to Recent training on your progress page.','muted'));
    const retryItems=items.filter((_,index)=>state.results[index]==='retry');
    if(retryItems.length){const repairs=el('div',undefined,'assessment-repairs');repairs.append(el('h2','Repair before another paper'));for(const item of retryItems){const chapter=manifest.find(entry=>entry.id===item.chapterId);if(item.current)repairs.append(link(`Chapter ${item.chapterId}, Problem ${item.number}: ${chapter.title} →`,problemHref(item.chapterId,item.number)));}result.append(repairs);}
    const actions=el('div',undefined,'toolbar'),again=el('button','Build another written paper','primary');again.type='button';again.onclick=resetView;actions.append(again,link('Open due written practice','#practice','secondary-link'),link('Revisit archived paper',`#progress/archive/${archived.id}`,'secondary-link'));result.append(actions);main.append(result);heading.focus();window.scrollTo(0,0);return null;

})(),value=>value===null,()=>({state}));
};
  if(state?.phase==='review'){
    const section=el('section',undefined,'written-exam-review'),heading=el('h2','Compare every solution with the work you actually produced'),summary=el('p',undefined,'practice-summary'),cards=el('div',undefined,'written-exam-review-list'),finishButton=el('button','Complete review and schedule the results','primary'),finishStatus=el('p',undefined,'muted'),abandon=el('button','End review without recording results');heading.tabIndex=-1;summary.setAttribute('role','status');finishStatus.setAttribute('role','status');
    const refreshSummary=()=>{const reviewed=state.results.filter(Boolean).length;summary.textContent=`${reviewed} of ${items.length} problems reviewed · ${state.results.filter(value=>value==='solved').length} met standard · ${state.results.filter(value=>value==='retry').length} need repair`;finishButton.disabled=reviewed!==items.length;};
    items.forEach((item,index)=>{
      const card=el('article',undefined,'written-exam-review-card'),rubric=el('fieldset',undefined,'attempt-rubric'),checks=[],outcomes=el('div',undefined,'problem-outcome'),status=el('p',undefined,'problem-outcome-status'),solved=el('button','Met the written standard'),retry=el('button','Needs repair'),reflection=el('div',undefined,'problem-reflection'),reasonStatus=el('p');card.dataset.problem=String(index+1);
      card.append(el('p',`Problem ${index+1} · Chapter ${item.chapterId} · ${item.type}`,'eyebrow'),prose('h3',item.problem.question));
      card.append(el('p',item.legacy?legacyWordingNotice:'Saved paper wording and comparison standard.','muted'));if(unboundPaperSlot(state,state.items[index]))card.append(el('p',unboundPaperNotice,'muted'));card.append(attemptWorkspace(item.chapterId,item.number,draftAdapter(index,true)));
      if(state.origins[index]==='legacy-review-unknown')card.append(el('p','This text was copied from a shared chapter draft when an older review was restored. Its origin as exam work cannot be established.','muted'));
      const solution=el('section',undefined,'written-exam-solution');solution.append(el('h4','Authored solution'));if(item.legacy)solution.append(el('p',legacyWordingNotice,'muted'));solution.append(solutionContent(item.problem));card.append(solution);
      rubric.append(el('legend','Compare setup, reasoning, and conclusion'),el('p','Check a criterion only when your exam attempt met it before you saw this solution.','muted'));
      if(item.legacy)rubric.append(el('p','Original comparison criteria are unavailable. These are the current chapter criteria; any scheduling is against current wording.','muted'));
      for(const criterion of item.rubric){const label=el('label',undefined,'attempt-rubric-item'),input=el('input');input.type='checkbox';input.checked=state.results[index]==='solved';label.append(input,el('span',criterion));rubric.append(label);checks.push(input);}
      const rubricStatus=el('p',undefined,'attempt-rubric-status');rubricStatus.setAttribute('role','status');rubric.append(rubricStatus);status.setAttribute('role','status');solved.type=retry.type='button';
      const reflectionSaveStatus=el('p');reflectionSaveStatus.setAttribute('role','status');
      const refresh=()=>{const result=state.results[index],changed=((state.version>=3&&(!item.current||!sameAuthored(state.items[index].authored,paperAuthored(item.current))))||(isNewWrittenTask(item.chapterId,item.number)&&(state.version<4||state.items[index].taskIdentity!==newWrittenIdentity(item.chapterId,item.number)))),locked=Boolean(state.intents[index])||state.historySaved,reason=paperReasonGuidance(state.reflections?.[index]);solved.setAttribute('aria-pressed',String(result==='solved'));retry.setAttribute('aria-pressed',String(result==='retry'));status.textContent=locked?'This outcome is locked because completion has begun.':result==='solved'?'This saved exam attempt met every comparison criterion.':result==='retry'?(changed?'This saved attempt is marked for repair. Its result will stay in this paper because the current task changed or disappeared.':'This saved attempt is marked for repair. Completion will schedule the current task if it still matches.'):'Choose an outcome after comparing the complete reasoning.';solved.disabled=locked||checks.some(input=>!input.checked);retry.disabled=locked;checks.forEach(input=>input.disabled=locked);reflection.hidden=result!=='retry';reasonStatus.textContent=state.version>=3?(reason?`Paper obstacle: ${reason[1]}. Next attempt: ${reason[2]}`:'Name the main obstacle in this saved paper to make the retry specific. This will not change current chapter obstacle tags.'): 'Original paper obstacle notes are unavailable. Use these strategies for your next attempt; this older paper cannot save a separate obstacle note.';reflection.querySelectorAll('button').forEach(button=>{button.disabled=locked;button.setAttribute('aria-pressed',String(button.dataset.reason===state.reflections?.[index]));});};
      const updateRubric=()=>{if(checks.some(input=>!input.checked)&&state.results[index]==='solved'&&!state.intents[index]){if(!saveState(next=>{next.results[index]=null;})){rubricStatus.textContent='The rubric change could not be saved; retry before completing the paper.';refresh();return;}}rubricStatus.textContent=checks.every(input=>input.checked)?'All criteria are met.':'Choose “Needs repair” if any criterion remains unmet.';refresh();refreshSummary();};checks.forEach(input=>input.onchange=updateRubric);
      const choose=value=>{if(state.intents[index]||state.historySaved)return;if(!saveState(next=>{next.results[index]=value;if(value==='solved'&&next.reflections)next.reflections[index]=null;})){status.textContent='This review outcome could not be saved; retry when storage is available.';return;}reflectionSaveStatus.textContent=value==='solved'?'The saved paper outcome was updated.':'The saved paper outcome was updated. Choose the main obstacle below.';refresh();refreshSummary();};solved.onclick=()=>choose('solved');retry.onclick=()=>choose('retry');outcomes.append(status,solved,retry);reasonStatus.setAttribute('role','status');reflection.append(reasonStatus);if(state.version>=3){for(const [key,label] of problemReasons){const button=el('button',label);button.type='button';button.dataset.reason=key;button.onclick=()=>{if(state.results[index]!=='retry'||state.intents[index]||state.historySaved)return;const saved=saveState(next=>{if(!next.reflections)next.reflections=Array(next.length).fill(null);next.reflections[index]=key;});reflectionSaveStatus.textContent=saved?'Paper obstacle saved. Current chapter obstacle tags were not changed.':'The paper obstacle could not be saved. Retry when browser storage is available.';if(saved)refresh();};reflection.append(button);}}else for(const [,label,guidance] of problemReasons)reflection.append(el('p',`${label}: ${guidance}`));reflection.append(reflectionSaveStatus);card.append(rubric,outcomes,reflection,item.current?paperRevisionLink(item):el('p','The current chapter reference is unavailable. The saved paper remains available here.','muted'));cards.append(card);refresh();
    });
    const reviewDescription=raw=>{if(raw===null)return 'No saved schedule';const review=jsonValue(raw);if(!writtenPracticeStateValid(review))return 'Unrecognized saved schedule';return `${review.attempts} ${review.attempts===1?'attempt':'attempts'}; last marked ${review.lastResult?'solved':'needs repair'}; next review ${new Date(review.due).toLocaleDateString()}`;};
    const outcomeDescription=value=>value===null?'No saved outcome':value==='solved'?'Marked solved':value==='retry'?'Needs repair':'Unrecognized outcome';
    const showConflict=()=>{
      section.querySelector('.written-exam-conflict')?.remove();if(!conflict)return;
      const {item,intent,index}=conflict,title=manifest.find(chapter=>chapter.id===item.chapterId)?.title||`Chapter ${item.chapterId}`,panel=el('section',undefined,'written-exam-conflict'),list=el('dl');
      panel.append(el('h3',`Chapter ${item.chapterId}: ${title} · Problem ${item.number}`),el('p','This paper began to apply its results, then chapter practice changed. The current chapter outcome and schedule will be kept. This incomplete paper can be archived with its frozen drafts.'));
      for(const [label,outcome,review] of [['Before this paper',intent.priorOutcome,intent.priorReview],['Current chapter work',read(problemKey(item.chapterId,item.number)),read(problemReviewKey(item.chapterId,item.number))],['This paper intended',intent.intendedOutcome,intent.intendedReview]]){
        list.append(el('dt',label),el('dd',`${outcomeDescription(outcome)}; ${reviewDescription(review)}.`));
      }
      const applied=state.intents.map((entry,i)=>entry?.status==='applied'?state.items[i]:null).filter(Boolean);
      panel.append(list,link(`Open Chapter ${item.chapterId}, Problem ${item.number}`,problemHref(item.chapterId,item.number)),el('p',applied.length?`Earlier applied work remains on ${applied.map(entry=>`Chapter ${entry.chapterId}, Problem ${entry.number}`).join('; ')}. Archiving will not undo those outcomes or schedules.`:'No earlier problem from this paper was marked applied.','muted'),paperRecoveryPanel(read(writtenExamActiveKey),'conflict',resetView));
      section.insertBefore(panel,abandon);panel.querySelector('h3').tabIndex=-1;panel.querySelector('h3').focus();
    };
    finishButton.type=abandon.type='button';abandon.disabled=state.intents.some(Boolean)||state.historySaved;finishButton.onclick=()=>{const error=finish();if(error){finishStatus.textContent=error;abandon.disabled=state.intents.some(Boolean)||state.historySaved;cards.querySelectorAll('.written-exam-review-card').forEach((card,index)=>{if(state.intents[index]||state.historySaved){card.querySelectorAll('.attempt-rubric input,.problem-outcome button,.problem-reflection button').forEach(control=>control.disabled=true);card.querySelector('.problem-outcome-status').textContent='This outcome is locked because completion has begun.';}});showConflict();}};abandon.onclick=()=>endPaper(finishStatus);section.append(heading,el('p','Use the authored solution as evidence. A correct final value does not meet the standard when the setup, reasoning, or interpretation is missing.','lead'),summary,cards,finishButton,finishStatus,abandon);main.append(el('p','Your written review was restored from this browser. Exam attempts are frozen.','practice-summary'),section);refreshSummary();
    if(!state.historySaved)for(const [index,intent] of state.intents.entries())if(intent){const item=state.items[index];for(const [key,prior,intended] of [[problemKey(item.chapterId,item.number),intent.priorOutcome,intent.intendedOutcome],[problemReviewKey(item.chapterId,item.number),intent.priorReview,intent.intendedReview]]){const current=read(key);if(current!==prior&&current!==intended){conflict={index,item,intent,key,current};break;}}if(conflict)break;}
    if(conflict)showConflict();else heading.focus();return;
  }
  if(state?.phase==='attempt'){
    const section=el('section',undefined,'written-exam-paper'),heading=el('h2',assessmentScopes[state.scope].label),problems=el('div',undefined,'written-exam-problems'),draftAdapters=[],checkbox=el('input'),finishButton=el('button','Finish attempt and open solution review','primary'),status=el('p','Solutions remain hidden until you confirm that the attempt is finished.','muted'),abandon=el('button','End this paper without review');heading.tabIndex=-1;
    section.append(heading,el('p',`${items.length} written problems · untimed in the reader`,'meta'),el('p','Work without hints or solutions. Show setup, reasoning, result, and checks here or on paper.','exam-instructions'));
    items.forEach((item,index)=>{const card=el('article',undefined,'written-exam-problem'),adapter=draftAdapter(index);draftAdapters.push(adapter);card.dataset.problem=String(index+1);card.append(el('p',`Problem ${index+1} of ${items.length} · Chapter ${item.chapterId} · ${item.type}`,'eyebrow'),prose('h3',item.problem.question),el('p',item.legacy?legacyWordingNotice:'Saved paper wording.','muted'));if(unboundPaperSlot(state,state.items[index]))card.append(el('p',unboundPaperNotice,'muted'));card.append(attemptWorkspace(item.chapterId,item.number,adapter));if(state.id.startsWith('legacy-')){const copy=el('button','Copy earlier chapter draft into this paper'),copyStatus=el('p',undefined,'muted');copy.type='button';copy.onclick=()=>{const prior=openAuthoredRecord(problemDraftKey(item.chapterId,item.number),(key,value)=>value.length>0&&value.length<=12000);if(prior.kind!=='valid'){copyStatus.textContent=prior.kind==='absent'?'No earlier chapter draft is saved for this problem.':'The earlier chapter draft cannot be read or exceeds its limit. It remains untouched; inspect its exact raw record in Progress.';return;}if(!saveState(next=>{next.drafts[index]=prior.raw;next.origins[index]='copied-chapter';})){copyStatus.textContent='The chapter draft could not be copied. Your earlier draft remains unchanged.';return;}resetView();};card.append(copy,copyStatus);}problems.append(card);});
    checkbox.type='checkbox';const commit=el('label',undefined,'exam-commit');commit.append(checkbox,el('span','I have finished every problem I intend to attempt and am ready to see the solutions.'));checkbox.onchange=()=>{finishButton.disabled=!checkbox.checked;};finishButton.type=abandon.type='button';finishButton.disabled=true;
    finishButton.onclick=()=>{if(!checkbox.checked)return;const visible=[...problems.querySelectorAll('.attempt-workspace > textarea')].map(input=>input.value);if(visible.length!==items.length||visible.some(value=>value.length>12000)){status.textContent='A visible draft could not be checked. Solutions remain hidden; download your current work before retrying.';return;}if(draftAdapters.some(adapter=>adapter.opened.kind==='changed')){status.textContent='A retained draft needs review before this paper can be frozen. Download the current work and reload to inspect the saved paper.';return;}if(visible.some((value,index)=>value!==state.drafts[index])&&!saveState(next=>{next.drafts=visible;})){status.textContent='Some visible draft text could not be saved. Solutions remain hidden; download this work before retrying.';return;}if(!saveState(next=>{next.phase='review';})){status.textContent='The paper could not be frozen in browser storage. Solutions remain hidden; download any unsaved work before retrying.';return;}draftAdapters.forEach(adapter=>forgetAuthoredDraft(adapter.key));resetView();};abandon.onclick=()=>endPaper(status);section.append(problems,commit,finishButton,status,abandon);main.append(el('p','This paper keeps its drafts separate from chapter practice. Check each draft’s storage status; download any unsaved work before leaving.','practice-summary'),section);heading.focus();return;
  }
  const builder=el('section',undefined,'practice-builder written-exam-builder'),scopeLabel=el('label','Course scope'),scopeSelect=el('select'),lengthLabel=el('label','Paper length'),lengthSelect=el('select'),start=el('button','Build written paper','primary'),status=el('p','Choose a course scope and paper length.','assessment-builder-status');scopeSelect.id='written-exam-scope';scopeLabel.htmlFor=scopeSelect.id;lengthSelect.id='written-exam-length';lengthLabel.htmlFor=lengthSelect.id;for(const [value,scope] of Object.entries(assessmentScopes)){const option=el('option',scope.label);option.value=value;scopeSelect.append(option);}for(const count of [6,10]){const option=el('option',`${count} written problems`);option.value=String(count);lengthSelect.append(option);}start.type='button';builder.append(scopeLabel,scopeSelect,lengthLabel,lengthSelect,start,status);main.append(builder);
  start.onclick=()=>{const scope=assessmentScopes[scopeSelect.value],length=Number(lengthSelect.value),seed=globalThis.crypto?.getRandomValues?crypto.getRandomValues(new Uint32Array(1))[0]:Date.now()>>>0,bank=writtenProblemItems(manifest.map(chapter=>chapter.id)),queue=buildWrittenExamQueue(bank.filter(item=>scope.ids.includes(item.chapterId)&&writtenReadyForCurrentRoute(item)),{limit:length,seed}),startedAt=Date.now(),editionId=editionIdentity(bank.map(item=>({...item,authored:paperAuthored(item)}))),paperItems=queue.map(item=>{const authored=paperAuthored(item),ref={chapterId:item.chapterId,number:item.number};return {...ref,authored,authoredSha256:fingerprint(editionId,ref,authored),taskIdentity:newWrittenIdentity(item.chapterId,item.number),taskLesson:isNewWrittenTask(item.chapterId,item.number)?item.problem.lesson:null};});const next={version:4,id:`exam-${startedAt}-${seed}`,scope:scopeSelect.value,length:queue.length,seed,startedAt,phase:'attempt',items:paperItems,results:Array(queue.length).fill(null),drafts:Array(queue.length).fill(''),origins:Array(queue.length).fill('new'),intents:Array(queue.length).fill(null),historySaved:false,editionId};if(!writtenExamActiveValid(next)){status.textContent='The paper could not be prepared within the local record limit. Your existing work was not changed.';return;}if(commitState(()=>next).kind==='saved')resetView();else status.textContent='The paper could not be verified in browser storage.';};
}
function mixedPracticeView(initialObstacle='all'){
  const clinic=problemReasons.find(([key])=>key===initialObstacle);document.title=(clinic?`${clinic[1]} retry clinic`:'Mixed written practice')+' · Calculus, explored';
  main.append(el('p',clinic?'Error clinic':'Deliberate practice','eyebrow'),el('h1',clinic?`Repair ${clinic[1].toLowerCase()} errors`:'Mix written problems across chapters'),el('p',clinic?`${clinic[2]} This clinic contains only problems previously tagged “${clinic[1]}”; support remains behind a fresh attempt in retrieval-first mode.`:'Work on paper, use a hint only after a real attempt, and compare complete reasoning afterward. Problems flagged for another attempt come first, followed by scheduled written reviews, unseen work, and later-review problems.','lead'));
  const chapterIds=studiedChapterIds();
  if(!chapterIds.length){
    const empty=el('section',undefined,'review-empty');empty.append(el('h2','Complete one chapter check first'),el('p','Mixed written practice draws only from chapters whose check or review stage you have reached.'));
    empty.append(link('Begin chapter 1 →','#chapter/01','primary-link'));main.append(empty);return;
  }
  main.append(exerciseTypeGuideView());
  const summary=el('p',undefined,'practice-summary');summary.setAttribute('role','status');
  const refreshSummary=()=>{const value=practiceSummary(chapterIds);summary.textContent=`${value.solved} marked solved · ${value.due} spaced reviews due · ${value.retry} need another attempt · ${value.total-value.solved-value.retry} unrecorded across ${chapterIds.length} studied ${chapterIds.length===1?'chapter':'chapters'}`;};refreshSummary();main.append(summary);
  const controls=el('section',undefined,'practice-builder'),chapterLabel=el('label','Chapter focus'),chapterSelect=el('select'),typeLabel=el('label','Problem type'),typeSelect=el('select'),reasonLabel=el('label','Obstacle focus'),reasonSelect=el('select'),modeLabel=el('label','Practice mode'),modeSelect=el('select'),countLabel=el('label','Session length'),countSelect=el('select'),build=el('button','Build practice session','primary');
  chapterSelect.id='practice-chapter';chapterLabel.htmlFor=chapterSelect.id;const allChaptersOption=el('option','All studied chapters');allChaptersOption.value='all';chapterSelect.append(allChaptersOption);for(const id of chapterIds){const chapter=manifest.find(entry=>entry.id===id),option=el('option',`${id} · ${chapter.title}`);option.value=id;chapterSelect.append(option);}
  typeSelect.id='practice-type';typeLabel.htmlFor=typeSelect.id;for(const type of ['All types','Fluency','Interpretation','Proof','Modeling','Challenge']){const option=el('option',type);option.value=type;typeSelect.append(option);}
  reasonSelect.id='practice-obstacle';reasonLabel.htmlFor=reasonSelect.id;const anyReason=el('option','Any problem');anyReason.value='all';reasonSelect.append(anyReason);for(const [key,label] of problemReasons){const option=el('option',`${label} retries`);option.value=key;reasonSelect.append(option);}
  reasonSelect.value=clinic?clinic[0]:'all';
  modeSelect.id='practice-mode';modeLabel.htmlFor=modeSelect.id;for(const [value,label] of [['retrieval','Retrieval first'],['guided','Guided with support']]){const option=el('option',label);option.value=value;modeSelect.append(option);}
  countSelect.id='practice-count';countLabel.htmlFor=countSelect.id;for(const count of [5,10]){const option=el('option',`${count} problems`);option.value=String(count);countSelect.append(option);}build.type='button';
  const chapterControl=el('div',undefined,'practice-control'),typeControl=el('div',undefined,'practice-control'),reasonControl=el('div',undefined,'practice-control'),modeControl=el('div',undefined,'practice-control'),countControl=el('div',undefined,'practice-control');chapterControl.append(chapterLabel,chapterSelect);typeControl.append(typeLabel,typeSelect);reasonControl.append(reasonLabel,reasonSelect);modeControl.append(modeLabel,modeSelect);countControl.append(countLabel,countSelect);controls.append(chapterControl,typeControl,reasonControl,modeControl,countControl,build);main.append(controls);
  const session=el('section',undefined,'mixed-practice');main.append(session);let sessionNumber=0;
  const start=()=>{
    const limit=Number(countSelect.value),selectedIds=chapterSelect.value==='all'?chapterIds:[chapterSelect.value],sessionType=typeSelect.value,sessionObstacle=reasonSelect.value,sessionMode=modeSelect.value;let items=writtenProblemItems(selectedIds).filter(writtenReadyForCurrentRoute);if(sessionObstacle!=='all')items=items.filter(item=>item.outcome==='retry'&&item.reason===sessionObstacle);const queue=buildProblemQueue(items,{type:sessionType,limit,offset:sessionNumber*limit});sessionNumber++;
    if(!queue.length){const reason=problemReasons.find(([key])=>key===reasonSelect.value);session.replaceChildren(el('h2',reason?`No ${reason[1].toLowerCase()} retries`:'No matching problems'),el('p',reason?`Only retry problems tagged “${reason[1]}” appear in this clinic. Choose Any problem or tag an attempt with this obstacle first.`:'Choose another chapter or problem type, or finish more chapters to expand the pool.'));return;}
    let position=0;const sessionOutcomes=new Map(),progress=el('p',undefined,'review-progress');progress.setAttribute('role','status');
    const finish=()=>{
      const outcomes=queue.map((_,index)=>sessionOutcomes.get(index)||null),solved=outcomes.filter(value=>value==='solved').length,retry=outcomes.filter(value=>value==='retry').length;
      const recorded=recordTrainingSession({kind:'written',total:queue.length,solved,retry,unrecorded:queue.length-solved-retry,chapters:[...new Set(queue.map(item=>item.chapterId))],problemType:sessionType,obstacle:sessionObstacle,mode:sessionMode});
      session.replaceChildren(el('p','Session complete','eyebrow'),el('h2',`${queue.length} written ${queue.length===1?'problem':'problems'} in this session`),el('p',`${solved} marked solved · ${retry} flagged for another attempt · ${queue.length-solved-retry} left unrecorded.`));
      session.append(el('p',recorded?'Added to Recent training on your progress page.':'Session complete, but recent history could not be saved in this browser.','muted'));
      const actions=el('div',undefined,'toolbar'),again=el('button','Build another session','primary');again.type='button';again.onclick=start;actions.append(again,link('Open concept review','#review','secondary-link'));session.append(actions);refreshSummary();
    };
    const show=(focusNext=false)=>{
      if(position>=queue.length){finish();return;}
      const item=queue[position],currentPosition=position,chapter=manifest.find(entry=>entry.id===item.chapterId),reason=problemReasons.find(([key])=>key===item.reason),isDue=item.outcome==='solved'&&(item.state.attempts===0||item.state.due<=reviewDay()),context=el('p',`Chapter ${item.chapterId} · ${chapter.title} · ${item.type}${sessionObstacle!=='all'&&reason?` · Retry focus: ${reason[1]}`:isDue?' · Spaced review due':''} · ${sessionMode==='retrieval'?'Retrieval first':'Guided support'}`,'eyebrow'),card=exerciseCard(item.problem,item.number,item.chapterId,outcome=>{sessionOutcomes.set(currentPosition,outcome);refreshSummary();},{deferSupport:sessionMode==='retrieval'}),next=el('button',position===queue.length-1?'Finish session':'Next problem');
      progress.textContent=`Problem ${position+1} of ${queue.length}`;next.type='button';next.onclick=()=>{position++;show(true);};
      session.replaceChildren(progress,context,card,next);
      if(focusNext){const heading=card.querySelector('h2');heading.focus({preventScroll:true});heading.scrollIntoView({block:'start'});}
    };show();
  };
  build.onclick=start;start();
}
function retryNotebookView(ids){
  const retries=writtenProblemItems(ids).filter(item=>item.outcome==='retry');if(!retries.length)return null;
  const section=el('section',undefined,'retry-notebook');section.id='retry-notebook';section.append(el('p','Error notebook','eyebrow'),el('h2','Turn repeated obstacles into a plan'),el('p',`${retries.length} written ${retries.length===1?'problem is':'problems are'} waiting for another attempt. Each group names the correction to practise; direct problem links preserve context, while a clinic mixes only retries with the same obstacle.`));
  const cards=el('div',undefined,'retry-notebook-grid'),sorted=items=>[...items].sort((a,b)=>(b.state?.lastAttempt||0)-(a.state?.lastAttempt||0)||a.chapterId.localeCompare(b.chapterId)||a.number-b.number);
  for(const [key,label,strategy] of problemReasons){
    const items=sorted(retries.filter(item=>item.reason===key));if(!items.length)continue;const card=el('section',undefined,'retry-notebook-card'),heading=el('div',undefined,'retry-notebook-heading'),listNode=el('ol');heading.append(el('h3',label),el('strong',String(items.length)));card.append(heading,el('p',strategy));
    for(const item of items.slice(0,6)){const chapter=manifest.find(entry=>entry.id===item.chapterId),entry=el('li');entry.append(link(`Chapter ${item.chapterId} · Problem ${item.number}`,problemHref(item.chapterId,item.number)),el('small',`${chapter.title} · ${item.type}`));listNode.append(entry);}card.append(listNode);if(items.length>6)card.append(el('p',`${items.length-6} more ${label.toLowerCase()} retries are available in the clinic.`,'muted'));card.append(link(`Open ${label.toLowerCase()} retry clinic →`,`#practice/${key}`,'secondary-link'));cards.append(card);
  }
  const untagged=sorted(retries.filter(item=>!item.reason));if(untagged.length){const card=el('section',undefined,'retry-notebook-card'),heading=el('div',undefined,'retry-notebook-heading'),listNode=el('ol');heading.append(el('h3','Not yet diagnosed'),el('strong',String(untagged.length)));card.append(heading,el('p','Open the problem, identify the main obstacle, and tag it so the next attempt receives a specific correction strategy.'));for(const item of untagged.slice(0,6)){const entry=el('li');entry.append(link(`Chapter ${item.chapterId} · Problem ${item.number}`,problemHref(item.chapterId,item.number)),el('small',item.type));listNode.append(entry);}card.append(listNode);cards.append(card);}
  section.append(cards);return section;
}
function draftNotebookView(){
  const drafts=writtenDraftItems();if(!drafts.length)return null;const section=el('section',undefined,'draft-notebook'),cards=el('div',undefined,'retry-notebook-grid'),card=el('section',undefined,'retry-notebook-card'),heading=el('div',undefined,'retry-notebook-heading'),listNode=el('ol');section.id='draft-notebook';
  section.append(el('p','Work in progress','eyebrow'),el('h2','Resume unfinished reasoning'),el('p',`${drafts.length} saved ${drafts.length===1?'attempt is':'attempts are'} waiting in this browser. Open the exact problem to finish the draft or compare it with support; clearing a draft removes it from this list.`));heading.append(el('h3','Saved attempts'),el('strong',String(drafts.length)));card.append(heading,el('p','Draft text is private to this browser unless you include it in a learning-record backup.'));
  for(const item of drafts.slice(0,12)){const chapter=manifest.find(entry=>entry.id===item.chapterId),entry=el('li');entry.append(link(`Chapter ${item.chapterId} · Problem ${item.number}`,problemHref(item.chapterId,item.number)),el('small',`${chapter.title} · ${item.type} · ${item.draft.length.toLocaleString()} characters`));listNode.append(entry);}card.append(listNode);if(drafts.length>12)card.append(el('p',`${drafts.length-12} more saved attempts remain available from their chapter practice pages.`,'muted'));cards.append(card);section.append(cards);return section;
}
function progressView(archiveId=null){
  document.title='Your progress · Calculus, explored';
  main.append(el('p','Learning record','eyebrow'),el('h1','See what to study next'),el('p','Use the chapter map to continue reading, retrieve due ideas, resume saved drafts, and return to written problems that need another attempt. Progress stays only in this browser.','lead'));
  const activeProjects=projects.filter(project=>Object.values(readProjectValue(draftKey(project.id),read(draftKey(project.id))).stages).some(stage=>stage.text||stage.complete));
  if(activeProjects.length){const section=el('section',undefined,'project-progress');section.append(el('h2','Continue a project'),el('p','Your project notes and self-review stay in this browser.'));const links=el('div',undefined,'cards');activeProjects.forEach(project=>links.append(link(project.title,`#project/${project.id}`,'card')));section.append(links);main.append(section);}
  const studied=studiedChapterIds(),concepts=masterySummary(conceptItems(studied)),practice=practiceSummary(studied),drafts=writtenDraftItems(),readCount=manifest.filter(chapter=>read('read-'+chapter.id)==='yes').length,metrics=el('section',undefined,'mastery-metrics progress-metrics');metrics.setAttribute('aria-label','Whole-book progress summary');
  for(const [value,label,detail] of [[readCount,'Chapters read',`of ${manifest.length}`],[studied.length,'Training pool',`of ${manifest.length} chapters`],[concepts.due,'Concepts due',`${concepts.strong} currently strong`],[practice.retry+practice.due,'Written work due',`${practice.retry} retry · ${practice.due} spaced review · ${drafts.length} saved ${drafts.length===1?'draft':'drafts'}`]]){const card=el('div',undefined,'mastery-metric');card.append(el('strong',String(value)),el('span',label),el('small',detail));metrics.append(card);}
  main.append(metrics);
  const latestReport=latestAssessmentReport();if(latestReport){const saved=el('section',undefined,'saved-checkpoint-shortcut');saved.append(el('h2','Most recent completed checkpoint'),el('p',`${latestReport.items.filter(item=>item.selected===item.correct).length}/${latestReport.items.length} correct on this sample · ${new Date(latestReport.completedAt).toLocaleDateString()}.`),link('Open saved questions, explanations, and study priorities →',`#assessment/report/${latestReport.id}`));main.append(saved);}
  const archives=writtenExamArchives(),completedArchives=archives?.entries.filter(entry=>entry.reason==='completed')||[];
  if(completedArchives.length){const savedPapers=el('section',undefined,'saved-paper-shortcuts'),links=el('ul');savedPapers.append(el('h2','Revisit completed written papers'),el('p','Open a frozen paper to review your recorded attempts. Revision does not change practice schedules.'));for(const [index,entry] of completedArchives.entries()){const item=el('li');item.append(link(`Completed paper ${index+1} · ${new Date(entry.archivedAt).toLocaleDateString()}`,`#progress/archive/${entry.id}`));links.append(item);}savedPapers.append(links);main.append(savedPapers);}
  const explanation=el('details',undefined,'progress-method');explanation.append(el('summary','How chapter progress is calculated'),el('p','A chapter enters the training pool when you reach its concept check or review, mark it read, or save a concept attempt. “Strong” means at least two consecutive correct concept reviews. Written problems marked solved after self-comparison return after 3, 7, 14, 30, and then 60 days; an unsuccessful attempt remains due today. These indicators guide practice; they are not grades.'));main.append(explanation);
  const draftNotebook=draftNotebookView();if(draftNotebook)main.append(draftNotebook);const retryNotebook=retryNotebookView(studied);if(retryNotebook)main.append(retryNotebook);
  const history=trainingHistory();let historySection=null;
  if(history.length){
    historySection=el('section',undefined,'training-history');historySection.append(el('h2','Recent training'),el('p','Completed sessions stay in this browser. Written results record your comparison of your own work with the authored solution and rubric; they are not independently verified. Use them to notice patterns across attempts; item difficulty varies, so these records are not course grades.','muted'));
    const historyList=el('ol',undefined,'training-history-list');
    for(const item of history.slice(0,6)){
      const row=el('li',undefined,'training-history-item'),heading=el('div',undefined,'training-history-heading'),writtenKind=item.kind==='written'||item.kind==='written-exam',title=item.kind==='concept'?'Concept review':item.kind==='assessment'?'Cumulative checkpoint':item.kind==='written-exam'?'Written mock exam':'Written practice',completed=new Date(item.completedAt),date=completed.toLocaleString([], {dateStyle:'medium',timeStyle:'short'}),meter=el('meter'),time=el('time',date);time.dateTime=completed.toISOString();meter.min=0;meter.max=item.total;meter.value=writtenKind?Math.max(0,Math.min(item.total,Number(item.solved)||0)):Math.max(0,Math.min(item.total,Number(item.correct)||0));meter.setAttribute('aria-label',writtenKind?'Written problems recorded by the learner as meeting the comparison standard':'Correct answers in this session');heading.append(el('strong',title),time);
      const result=item.kind==='written'?`${Number(item.solved)||0} marked solved · ${Number(item.retry)||0} retry · ${Number(item.unrecorded)||0} unrecorded`:item.kind==='written-exam'?`${Number(item.solved)||0}/${item.total} self-marked as meeting standard · ${Number(item.retry)||0} need repair`:`${Number(item.correct)||0}/${item.total} correct`,chapterText=item.chapters.length===1?`Chapter ${item.chapters[0]}`:`${item.chapters.length} chapters`;
      let focus=chapterText;if(item.kind==='written'){const reason=problemReasons.find(([key])=>key===item.obstacle);focus+=` · ${item.problemType||'All types'}${reason?` · ${reason[1]} retry clinic`:''}${item.mode?` · ${item.mode==='retrieval'?'Retrieval first':'Guided support'}`:''}`;}else if(item.kind==='written-exam')focus=assessmentScopes[item.scope]?.label||chapterText;else if(item.kind==='assessment'){focus=assessmentScopes[item.scope]?.label||chapterText;if(item.confidentMisses||item.unsureCorrect)focus+=` · ${Number(item.confidentMisses)||0} confident ${Number(item.confidentMisses)===1?'miss':'misses'} · ${Number(item.unsureCorrect)||0} unsure correct`;}else if(item.kind==='concept'&&(item.confidentMisses||item.unsureCorrect))focus+=` · ${Number(item.confidentMisses)||0} confident ${Number(item.confidentMisses)===1?'miss':'misses'} · ${Number(item.unsureCorrect)||0} unsure correct`;
      row.append(heading,meter,el('span',result),el('small',focus));if(item.kind==='assessment'&&item.assessmentId===latestReport?.id)row.append(link('Open saved report →',`#assessment/report/${latestReport.id}`));historyList.append(row);
    }
    historySection.append(historyList);
  }
  const controls=el('section',undefined,'progress-controls'),filterLabel=el('label','Show chapters'),filter=el('select'),filterHelp=el('p','Focus now shows every chapter with due review, retry work, or a saved draft, plus the earliest unfinished chapter.','muted'),filterStatus=el('p',undefined,'progress-filter-status');filter.id='progress-filter';filterLabel.htmlFor=filter.id;filterHelp.id='progress-filter-help';filter.setAttribute('aria-describedby',filterHelp.id);filterStatus.setAttribute('role','status');filterStatus.setAttribute('aria-live','polite');
  for(const [value,label] of [['focus','Focus now'],['review','Due, retry, or draft work'],['started','Started chapters'],['all','All chapters']]){const option=el('option',label);option.value=value;filter.append(option);}controls.append(filterLabel,filter,filterHelp,filterStatus);main.append(controls);
  const wrapper=el('div',undefined,'table-scroll progress-table-wrap'),table=el('table',undefined,'progress-table');wrapper.tabIndex=0;table.setAttribute('aria-label','Progress and next action for all chapters');
  const headers=['Chapter','Reading','Concepts','Written practice','Next action'],head=el('thead'),headerRow=el('tr');for(const text of headers){const th=el('th',text);th.scope='col';headerRow.append(th);}head.append(headerRow);table.append(head);
  const body=el('tbody'),rows=[];
  for(const chapterEntry of manifest){
    const id=chapterEntry.id,chapter=chapterCache.get(id),chapterConcepts=masterySummary(conceptItems([id])),totalProblems=chapter.exercises.length+(depth[id]?.questions.length||0),last=read('last-page-'+id),marked=read('read-'+id)==='yes';let solved=0,retry=0,due=0,draftCount=0,firstRetry=0,firstDue=0,firstDraft=0,firstOpen=0;
    for(let number=1;number<=totalProblems;number++){const outcome=problemOutcome(id,number);if(outcome==='solved'){solved++;const state=writtenPracticeState(id,number);if(state.attempts===0||state.due<=reviewDay()){due++;if(!firstDue)firstDue=number;}}else if(outcome==='retry'){retry++;if(!firstRetry)firstRetry=number;}else if(!firstOpen)firstOpen=number;if(read(problemDraftKey(id,number))){draftCount++;if(!firstDraft)firstDraft=number;}}
    const reached=studied.includes(id),reading=marked?'Marked read':last?'In progress':'Not started';let nextLabel,nextHref;
    if(firstRetry){nextLabel=`Retry problem ${firstRetry}`;nextHref=problemHref(id,firstRetry);}
    else if(chapterConcepts.due){nextLabel='Review due concepts';nextHref='#review';}
    else if(firstDue){nextLabel=`Review problem ${firstDue}`;nextHref=problemHref(id,firstDue);}
    else if(firstDraft){nextLabel=`Resume draft for problem ${firstDraft}`;nextHref=problemHref(id,firstDraft);}
    else if(!last&&!reached&&!marked){nextLabel='Begin chapter';nextHref=`#chapter/${id}`;}
    else if(reached&&chapterConcepts.unseen){nextLabel='Continue concept checks';nextHref=`#chapter/${id}/check`;}
    else if(last&&!marked){nextLabel='Continue reading';nextHref=last;}
    else if(firstOpen){nextLabel=`Practice problem ${firstOpen}`;nextHref=problemHref(id,firstOpen);}
    else if(!marked){nextLabel='Finish chapter review';nextHref=`#chapter/${id}/review`;}
    else {nextLabel='Revisit chapter';nextHref=`#chapter/${id}`;}
    const row=el('tr'),chapterCell=el('th');row.dataset.chapter=id;chapterCell.scope='row';chapterCell.dataset.label=headers[0];chapterCell.append(link(`${id} · ${chapterEntry.title}`,`#chapter/${id}`));
    const values=[reading,reached?`${chapterConcepts.attempted}/${chapterConcepts.total} attempted · ${chapterConcepts.strong} strong · ${chapterConcepts.due} due`:'Not in review yet',`${solved}/${totalProblems} marked solved · ${due} review due · ${retry} to retry · ${draftCount} ${draftCount===1?'draft':'drafts'}`];row.append(chapterCell);
    values.forEach((value,index)=>{const cell=el('td',value);cell.dataset.label=headers[index+1];row.append(cell);});const action=el('td');action.dataset.label=headers[4];action.append(link(nextLabel,nextHref,'progress-action'));row.append(action);body.append(row);rows.push({row,id,urgent:Boolean(firstRetry||firstDue||firstDraft||chapterConcepts.due),started:Boolean(last||reached||marked||firstDraft),complete:marked});
  }
  const focusIds=new Set(rows.filter(item=>item.urgent).map(item=>item.id)),next=rows.find(item=>item.started&&!item.complete&&!focusIds.has(item.id))||rows.find(item=>!item.started)||rows.find(item=>!item.complete)||rows[0];if(next)focusIds.add(next.id);
  const noMatches=el('p','No chapters match this view. Choose “Focus now” or “All chapters” to continue.','review-empty');noMatches.hidden=true;
  const applyFilter=()=>{let visible=0;for(const item of rows){const show=filter.value==='all'||filter.value==='review'&&item.urgent||filter.value==='started'&&item.started||filter.value==='focus'&&focusIds.has(item.id);item.row.hidden=!show;if(show)visible++;}filterStatus.textContent=`Showing ${visible} of ${rows.length} chapters.`;noMatches.hidden=visible!==0;wrapper.hidden=visible===0;};filter.onchange=applyFilter;
  table.append(body);wrapper.append(table);main.append(wrapper,noMatches);if(historySection)main.append(historySection);
  const visualNotes=[];
  for(const entry of manifest)for(let number=1;number<=1+(additionalExplorations[entry.id]?.length||0);number++){
    const key=visualWorkKey(entry.id,number),raw=read(key);if(!validVisualWork(key,raw))continue;
    const work=readVisualWork(key,raw);if(![work.prediction,work.observation,work.explanation].some(text=>text.trim()))continue;
    const config=number===1?explorations[entry.id]:additionalExplorations[entry.id][number-2];
    visualNotes.push({id:entry.id,number,title:config.title,complete:[work.prediction,work.observation,work.explanation].filter(text=>text.trim()).length});
  }
  if(visualNotes.length){
    const section=el('section',undefined,'visual-notebook-index'),list=el('ul');
    section.append(el('h2','Visual investigation notebook'),el('p',`${visualNotes.length} ${visualNotes.length===1?'investigation has':'investigations have'} saved reasoning. Return to a visual to compare your prediction, observation, and explanation.`));
    for(const item of visualNotes){const row=el('li'),href=`#chapter/${item.id}/explore${item.number===1?'':`/${item.number}`}`;row.append(link(`Chapter ${item.id} · ${item.title}`,href),el('span',` · ${item.complete} of 3 notes`));list.append(row);}
    section.append(list);main.append(section);
  }
  const labNotes=[];
  for(const entry of manifest){
    const key=labWorkKey(entry.id),raw=read(key);if(!validLabWork(key,raw))continue;
    const work=readLabWork(key,raw),complete=[work.prediction,work.observation,work.explanation].filter(value=>value.trim()).length;
    if(complete)labNotes.push({id:entry.id,title:entry.title,complete});
  }
  if(labNotes.length){
    const section=el('section',undefined,'lab-notebook-index'),list=el('ul');
    section.append(el('h2','Code laboratory notebook'),el('p',`${labNotes.length} ${labNotes.length===1?'laboratory has':'laboratories have'} saved experiment reasoning. Return to compare predictions with runs and explain what changed.`));
    for(const item of labNotes){const row=el('li');row.append(link(`Chapter ${item.id} · ${item.title}`,`#chapter/${item.id}/lab`),el('span',` · ${item.complete} of 3 notes`));list.append(row);}
    section.append(list);main.append(section);
  }
  const suppNotes=supplementaryLabs.map(lab=>{const key=suppWorkKey(lab.id),raw=read(key);if(!validSuppValue(key,raw))return null;const work=readSuppWork(key,raw),complete=[work.prediction,work.observation,work.explanation].filter(value=>value.trim()).length;return complete?{lab,complete}:null;}).filter(Boolean);
  if(suppNotes.length){const section=el('section',undefined,'lab-notebook-index'),items=el('ul');section.append(el('h2','Advanced experiment notebook'));for(const {lab,complete} of suppNotes){const item=el('li');item.append(link(lab.title,`#lab/${lab.id}`),el('span',` · ${complete} of 3 notes`));items.append(item);}section.append(items);main.append(section);}
  const dataTools=el('details',undefined,'learning-record-tools'),dataSummary=el('summary','Back up or move this learning record'),dataBody=el('div'),dataStatus=el('p','No file selected.','muted'),dataActions=el('div',undefined,'toolbar'),downloadRecord=el('button','Download learning record'),chooseRecord=el('button','Choose backup file'),restoreRecord=el('button','Restore selected record','primary'),fileInput=el('input');downloadRecord.type='button';chooseRecord.type='button';restoreRecord.type='button';restoreRecord.hidden=true;fileInput.type='file';fileInput.accept='application/json,.json';fileInput.className='visually-hidden';fileInput.setAttribute('aria-label','Choose a Calculus, explored learning-record JSON file');dataStatus.setAttribute('role','status');let pendingRecord=null;
  const omittedRecords=el('div',undefined,'omitted-records'),recoveryRecords=el('div',undefined,'raw-recovery-records');
  downloadRecord.onclick=()=>{try{
    const {entries,omitted,omittedRaw,rawRecovery}=learningRecordSnapshot(),record={format:learningRecordFormat,version:2,exportedAt:new Date().toISOString(),entries,rawRecovery};
    download(JSON.stringify(record,null,2),'calculus-learning-record.json','application/json');omittedRecords.replaceChildren();
    recoveryRecords.replaceChildren();
    if(Object.keys(rawRecovery).length){recoveryRecords.append(el('h3','Additional saved records'),el('p','These saved values are included exactly in your backup. Current visual notes reopen in their investigation; other values may belong to earlier book versions. Download an exact copy below if you need to inspect it.'));
      for(const [key,value] of Object.entries(rawRecovery)){const row=el('div');row.append(el('p',key),rawRecordControls(value,`${key}-exact-raw.txt`).box);recoveryRecords.append(row);}
    }
    if(omitted.length){omittedRecords.append(el('h3','Allowed records omitted from this backup'),el('p','These records failed validation. Download each exact raw value before restoring or changing browser storage.'));
      for(const key of omitted){const row=el('div'),raw=omittedRaw[key];row.append(el('p',key),rawRecordControls(raw,`${key}-exact-raw.txt`).box);
        if(key!==writtenExamActiveKey&&key!==writtenExamArchivesKey){
          const label=el('label'),check=el('input'),remove=el('button',`Remove unrecognized ${key} after saving raw copy`),removalStatus=el('p',undefined,'muted');
          check.type='checkbox';remove.type='button';remove.disabled=true;removalStatus.setAttribute('role','status');label.append(check,' I saved and inspected this exact raw value outside this browser.');check.onchange=()=>{remove.disabled=!check.checked;};
          remove.onclick=()=>{if(read(key)!==raw){removalStatus.textContent='This record changed. Make a new backup before resolving it.';return;}if(!erase(key)&&read(key)!==null){removalStatus.textContent='The record could not be removed; its raw value remains here.';return;}if(read(key)!==null){removalStatus.textContent='Removal could not be verified. The raw copy remains above.';return;}row.replaceChildren(el('p',`${key} removed after your raw-copy acknowledgement. Choose the backup file again to recheck restore.`));};
          row.append(label,remove,removalStatus);
        }
        omittedRecords.append(row);
      }
    }
    dataStatus.textContent=`Prepared ${Object.keys(entries).length} learning-record entries and ${Object.keys(rawRecovery).length} exact raw recovery values for download. ${omitted.length?`${omitted.length} allowed ${omitted.length===1?'key was':'keys were'} omitted: ${omitted.join(', ')}. Exact raw exports are below.`:'No allowed keys were omitted.'}`;
  }catch{dataStatus.textContent='Browser storage could not be read. No learning-record backup was prepared.';}};
  chooseRecord.onclick=()=>fileInput.click();
  const applyPendingRecord=()=>{if(!pendingRecord)return;const result=restoreLearningRecord(pendingRecord);if(!result.ok){dataStatus.textContent=result.preflight?`Restore stopped before replacement: ${result.preflight}`:result.rollback?'The record could not be restored. Existing browser data was restored.':'The record could not be restored, and browser storage prevented a verified rollback. Check your saved work before continuing.';return;}pendingRecord=null;restoreRecord.textContent='Reload to apply restored record';restoreRecord.onclick=()=>location.reload();dataStatus.textContent='Learning record restored. Reload to apply its progress, drafts, settings, bookmarks, lab notes, and saved code. Existing paper archives were merged without eviction.';};restoreRecord.onclick=applyPendingRecord;
  fileInput.onchange=async()=>{pendingRecord=null;restoreRecord.hidden=true;restoreRecord.onclick=applyPendingRecord;const file=fileInput.files?.[0];if(!file){dataStatus.textContent='No file selected.';return;}try{const parsed=parseLearningRecord(await file.text());try{restorePreflight(parsed);}catch(error){dataStatus.textContent=`Restore stopped before replacement for ${file.name}: ${error.message}`;return;}pendingRecord=parsed;restoreRecord.textContent=`Restore ${Object.keys(pendingRecord.entries).length} entries`;restoreRecord.hidden=false;dataStatus.textContent=`Ready to restore ${file.name}. Current paper archives and raw future-slot values will be retained. Other current learning-record entries will be replaced.`;}catch(error){dataStatus.textContent=`Unable to import ${file.name}: ${error.message}`;}};
  const archiveView=el('section',undefined,'paper-archives');let targetArchiveRow=null;
  archiveView.append(el('h3','Archived written papers'));
  const removalChoice=(row,label,remove)=>{const checkLabel=el('label'),check=el('input'),button=el('button',label),status=el('p',undefined,'muted');check.type='checkbox';button.type='button';button.disabled=true;status.setAttribute('aria-live','polite');checkLabel.append(check,' I saved and inspected this exact raw download outside this browser.');check.onchange=()=>{button.disabled=!check.checked;};button.onclick=()=>{const result=remove();if(result===true)row.replaceChildren(el('p','Archived record removed after your raw-copy acknowledgement. Reopen Progress to review remaining archives.'));else status.textContent=result;};row.append(checkLabel,button,status);};
  if(archives===null){const stored=exactStoredValue(writtenExamArchivesKey),archiveRaw=stored.value;archiveView.append(el('p',!stored.ok?'The paper archive could not be read. No archive was changed; retry when browser storage is available.':'The paper archive cannot be validated. Download and inspect its exact raw record before choosing removal.'));if(stored.ok&&archiveRaw!==null){archiveView.append(rawRecordControls(archiveRaw,'paper-archives-exact-raw.txt').box);removalChoice(archiveView,'Remove damaged archive after saving raw copy',()=>{const current=exactStoredValue(writtenExamArchivesKey);if(!current.ok||current.value!==archiveRaw)return 'The archive changed or could not be read. Reload before removing it.';return verifiedArchiveRemoval(archiveRaw)||'Removal could not be verified. The original archive bytes were restored when possible.';});}}
  else if(!archives.entries.length)archiveView.append(el('p','No written papers have been archived in this browser.'));
  else for(const [index,entry] of archives.entries.entries()){
    const row=el('details'),label=entry.reason==='completed'?'completed review':entry.reason==='conflict'?'completion conflict':'unrecognized record',summary=el('summary',`Paper ${index+1} · ${label} · ${new Date(entry.archivedAt).toLocaleString()}`);row.append(summary);
    if(entry.reason==='completed'){
      const paper=jsonValue(entry.raw),source=new Map(writtenProblemItems(assessmentScopes[paper.scope].ids).map(item=>[`${item.chapterId}.${item.number}`,item])),review=el('div',undefined,'archived-paper-review');
      review.append(el('p',`${paper.results.filter(value=>value==='solved').length} of ${paper.length} outcomes recorded as meeting the written standard. These are frozen self-reports for revision; opening this archive does not schedule or grade practice.`));
      for(const [position,item] of paper.items.entries()){
        const authored=presentedPaperItem(paper,item,source.get(`${item.chapterId}.${item.number}`)),card=el('section',undefined,'archived-paper-problem');
        card.append(el('h4',`Problem ${position+1} · Chapter ${item.chapterId}, Problem ${item.number}${paper.version>=3?` · ${authored.type}`:''}`));
        if(authored.problem)card.append(prose('p',authored.problem.question));
        card.append(el('p',authored.legacy?(authored.problem?legacyWordingNotice:'Original paper wording is unavailable. The current chapter reference is also unavailable.'): 'Saved paper wording and comparison standard.','muted'));
        card.append(el('p',paper.results[position]==='solved'?'Recorded outcome: met the written standard.':'Recorded outcome: needs repair.'));
        if(paper.results[position]==='retry'){
          const reason=paperReasonGuidance(paper.reflections?.[position]);
          card.append(el('p',reason?`Saved paper obstacle: ${reason[1]}. Next attempt: ${reason[2]}`:'No paper obstacle was saved. Compare the saved solution and criteria to choose a repair strategy.','muted'));
        }
        if(unboundPaperSlot(paper,item))card.append(el('p',unboundPaperNotice,'muted'));
        if(paper.version>=3&&paper.intents[position]?.status==='skipped')card.append(el('p','This saved comparison was not applied to current chapter practice because the problem changed or disappeared.','muted'));
        const attempt=el('pre',paper.drafts[position]||'(No attempt text was saved.)');attempt.style.whiteSpace='pre-wrap';attempt.style.overflowWrap='anywhere';card.append(el('h5','Frozen attempt'),attempt);
        if(paper.version>=3){const support=el('details'),summary=el('summary','Review saved paper hint, solution, and comparison criteria');support.append(summary,el('h5','Saved hint'),prose('p',authored.problem.hint),el('h5','Saved solution'),solutionContent(authored.problem),el('h5','Saved comparison criteria'),list(authored.rubric,true));card.append(support);}
        if(paper.origins[position]==='legacy-review-unknown')card.append(el('p','Copied from a chapter draft during an older review; its exam origin is unknown.','muted'));
        if(source.has(`${item.chapterId}.${item.number}`))card.append(unboundPaperSlot(paper,item)?link('Open current task at this number as a separate reference',problemHref(item.chapterId,item.number),'secondary-link'):paperRevisionLink(item));else card.append(el('p','The current chapter reference is unavailable. Use the saved paper wording and solution above.','muted'));review.append(card);
      }
      row.append(review);
    }
    row.append(rawRecordControls(entry.raw,`${entry.id}-exact-raw.txt`).box);
    removalChoice(row,'Remove this archived paper after saving raw copy',()=>{const current=exactStoredValue(writtenExamArchivesKey);if(!current.ok||!writtenExamArchivesValid(current.value))return 'The archive changed or could not be read. Reload before removing an entry.';const next=jsonValue(current.value),found=next.entries.find(item=>item.id===entry.id);if(!found||found.raw!==entry.raw)return 'This archived paper changed. Reload before removing it.';next.entries=next.entries.filter(item=>item.id!==entry.id);const encoded=JSON.stringify(next);return verifiedArchiveWrite(current.value,encoded)||'Removal could not be verified. The original archive was restored when possible.';});
    if(entry.id===archiveId)targetArchiveRow=row;
    archiveView.append(row);
  }
  dataActions.append(downloadRecord,chooseRecord,restoreRecord,fileInput);dataBody.append(el('p','The JSON backup includes this book’s active route and milestones, reading progress, bookmarks, diagnostic, checkpoint, written-exam and practice records, archived written papers, project drafts and self-reviews, visual and laboratory notes, chapter recall notes, saved attempt drafts, reader settings, recent sessions, and saved laboratory code. Exact raw future-slot values are included for recovery without giving new-task credit. Invalid allowed entries are disclosed when exporting. Restoring checks the backup and current paper records before replacement.'),dataActions,dataStatus,recoveryRecords,omittedRecords);dataTools.append(dataSummary,dataBody);main.append(dataTools,archiveView);applyFilter();
  if(archiveId){const focusTarget=targetArchiveRow?.querySelector('summary')||archiveView.querySelector('h3');if(!targetArchiveRow)archiveView.append(el('p','This saved paper is no longer available in this browser.','practice-summary'));else targetArchiveRow.open=true;if(!targetArchiveRow)focusTarget.tabIndex=-1;focusTarget.focus({preventScroll:true});focusTarget.scrollIntoView({block:'start'});}
}
function routeTrackerView(id,route){
  const section=el('section',undefined,'route-tracker'),rows=routeRows(route);
  const render=(focusIndex=null,keepOpen=false)=>{section.replaceChildren();const active=activeRouteId(),progress=routeProgress(id),complete=progress.filter(Boolean).length;
    if(active!==id){const saved=complete?` ${complete} saved ${complete===1?'milestone':'milestones'} will be restored.`:'';section.append(el('h2',active?'Switch your active route':'Follow this route'),el('p',`Keep this route on the home page and record each weekly or self-paced milestone.${saved}`));const use=el('button',active?'Make this my active route':'Use this as my active route','primary');use.type='button';const status=el('p',undefined,'muted');status.setAttribute('role','status');use.onclick=()=>{if(read(routeProgressKey(id))===null)save(routeProgressKey(id),JSON.stringify(Array(rows.length).fill(false)));if(save(activeRouteKey,id))render();else status.textContent='Route progress could not be saved in this browser.';};section.append(use,status);return;}
    const current=progress.findIndex(value=>!value),heading=el('div',undefined,'route-progress-heading'),meter=el('meter'),status=el('p',`${complete} of ${rows.length} milestones marked.`,'route-progress-status');meter.min=0;meter.max=rows.length;meter.value=complete;meter.setAttribute('aria-label',`${route.title}: ${complete} of ${rows.length} milestones marked`);status.setAttribute('role','status');heading.append(el('h2','Your active route'),el('strong',`${complete}/${rows.length}`));section.append(heading,meter,status);
    const currentCard=el('section',undefined,'route-current');if(current<0)currentCard.append(el('p','All milestones marked','eyebrow'),el('h3','Every milestone is checked'),el('p','Use the course checkpoint and due-review queues to maintain the material, or choose another route.'));
    else {const row=rows[current],chapter=firstRouteChapter(row);currentCard.append(el('p','Next milestone','eyebrow'),el('h3',routeMilestoneLabel(route,row)),el('p',row[3]));if(chapter)currentCard.append(link(`Open chapter ${chapter} →`,`#chapter/${chapter}`,'primary-link'));}section.append(currentCard);
    const details=el('details',undefined,'route-milestone-tools'),summary=el('summary','Review and mark all milestones'),listNode=el('ol',undefined,'route-milestones');details.open=keepOpen;details.append(summary);rows.forEach((row,index)=>{const item=el('li',undefined,progress[index]?'complete':index===current?'current':''),label=el('label'),input=el('input'),text=el('span',routeMilestoneLabel(route,row)),chapter=firstRouteChapter(row);input.type='checkbox';input.checked=progress[index];input.onchange=()=>{const next=routeProgress(id);next[index]=input.checked;if(save(routeProgressKey(id),JSON.stringify(next)))render(index,true);else status.textContent='Route progress could not be saved in this browser.';};label.append(input,text);item.append(label,el('small',`Chapters ${row[2]}`));if(chapter)item.append(link(`Open ${chapter}`,`#chapter/${chapter}`));if(index===current)item.setAttribute('aria-current','step');listNode.append(item);});details.append(listNode);section.append(details);
    const stop=el('button','Stop showing this route on home');stop.type='button';stop.onclick=()=>{if(erase(activeRouteKey))render();else status.textContent='The active route could not be changed in this browser.';};section.append(stop);if(focusIndex!==null)section.querySelectorAll('.route-milestones input')[focusIndex]?.focus();
  };render();return section;
}
function guideView(key){
  if(!key){document.title='Study routes · Calculus, explored';main.append(el('p','Find your route','eyebrow'),el('h1','A path through the book'),el('p','The book spans three calculus courses. Use a weekly route or advance when you can explain the definitions, solve a representative problem on paper, and state what each experiment does and does not establish.','lead'));
    main.append(link('Explore the advanced computational laboratories','#labs','secondary-link'));
    const diagnostic=diagnosticView(),jump=el('button','Check my prerequisites · 12 questions','primary');jump.type='button';jump.setAttribute('aria-controls',diagnostic.id);jump.onclick=()=>{diagnostic.scrollIntoView({block:'start'});diagnostic.querySelector('h2')?.focus({preventScroll:true});};main.append(jump);
    const cards=el('div',undefined,'cards');Object.entries(routes).forEach(([id,route])=>cards.append(link(route.title,`#guide/${id}`,'card')));main.append(cards,diagnostic,el('h2','Reference appendices'));
    const references=el('div',undefined,'cards');Object.entries(appendices).forEach(([id,appendix])=>references.append(link(appendix.title,`#appendix/${id}`,'card')));main.append(references);return true;}
  const route=routes[key];if(!route)return false;document.title=route.title+' · Calculus, explored';main.append(el('p','Study route','eyebrow'),el('h1',route.title),el('p',route.description,'lead'),link('← All routes and prerequisite check','#guide'));if(Object.hasOwn(routeAssignments,key))main.append(routeAssignmentsView(routeAssignments[key]));main.append(routeTrackerView(key,route));
  const schedule=el('details',undefined,'route-schedule-details');schedule.append(el('summary',route.weeks?'View the complete 14-week schedule':'View every self-paced stage'));
  if(route.weeks)schedule.append(tableView(['Week','Focus','Chapters','Goal'],route.weeks,'route-table',`${route.title} weekly schedule`));
  if(route.stages)schedule.append(tableView(['Stage','Chapters','Mastery goal'],route.stages,'route-table',`${route.title} stages`));main.append(schedule);
  const routeProjects=key==='self-paced'?projects:[];
  if(key==='self-paced')main.append(el('h2','Advanced computational experiments'),link('Open all eleven experiments','#labs'));
  if(routeProjects.length){const studio=el('section',undefined,'project-links');studio.append(el('h2','Apply this route in a project'));const links=el('ul');routeProjects.forEach(project=>{const item=el('li');item.append(link(project.title,`#project/${project.id}`));links.append(item);});studio.append(links);main.append(studio);}
  main.append(el('p','The chapter links in the sidebar open a chapter overview. From there, follow the lessons, investigations, examples, and practice one page at a time.','muted'));return true;
}
function chapterPages(c) {
  const pages = [{slug:'', label:'Chapter overview', group:'Start', kind:'overview'}];
  const primaryVisualAfterSection={ '01':4, '02':2, '14':2, '17':3, '20':2, '21':3 };
  const visualAfter=primaryVisualAfterSection[c.id]??0;
  c.sections.forEach((section, index) => {
    pages.push({slug:`lesson/${index + 1}`, label:`${index + 1}. ${section.title.replace(/^\d+\.\s*/, '')}`, group:'Lessons', kind:'lesson', sectionIndex:index});
    if (index === visualAfter && explorations[c.id]) pages.push({slug:'explore', label:'Visual investigation', group:'Explore', kind:'explore',visualIndex:0});
    (additionalExplorations[c.id]||[]).forEach((visual,visualIndex)=>{
      if(visual.afterSection===index)pages.push({slug:`explore/${visualIndex+2}`,label:visual.title,group:'Explore',kind:'explore',visualIndex:visualIndex+1});
    });
  });
  if(depth[c.id]) pages.push({slug:'deep', label:'Further derivation', group:'Go deeper', kind:'deep'});
  pages.push({slug:'examples', label:'Worked examples', group:'Apply', kind:'examples'});
  if(mastery[c.id]?.worked?.length) pages.push({slug:'workshop', label:'More worked examples', group:'Apply', kind:'workshop'});
  pages.push({slug:'lab', label:'Computational laboratory', group:'Apply', kind:'lab'});
  const practice = [...c.exercises, ...(depth[c.id]?.questions || [])];
  for (let start = 0; start < practice.length; start += 4) {
    const number = Math.floor(start / 4) + 1;
    pages.push({slug:`practice/${number}`, label:`Practice set ${number}`, group:'Practice', kind:'practice', start});
  }
  if(mastery[c.id]?.quiz?.length) pages.push({slug:'check', label:'Concept checks', group:'Practice', kind:'check'});
  pages.push({slug:'review', label:'Review and continue', group:'Finish', kind:'review'});
  return pages.map((page, index) => ({...page, index, href:`#chapter/${c.id}${page.slug ? '/' + page.slug : ''}`}));
}
function pageSearchText(c,page){
  if(page.kind==='overview')return [c.title,c.subtitle,c.prerequisites,c.objectives,manifest.find(item=>item.id===c.id)?.topics].flat(Infinity).join(' ');
  if(page.kind==='lesson')return JSON.stringify(c.sections[page.sectionIndex]);
  if(page.kind==='explore')return JSON.stringify(page.visualIndex===0?explorations[c.id]:additionalExplorations[c.id]?.[page.visualIndex-1]);
  if(page.kind==='deep')return JSON.stringify(depth[c.id]);
  if(page.kind==='examples')return JSON.stringify(c.examples);
  if(page.kind==='workshop')return JSON.stringify(mastery[c.id].worked);
  if(page.kind==='lab')return JSON.stringify(c.lab);
  if(page.kind==='practice')return 'Written practice set';
  if(page.kind==='check')return JSON.stringify(mastery[c.id].quiz);
  return JSON.stringify({summary:c.summary,misconceptions:c.misconceptions,next:c.next});
}
async function buildSearchIndex(){
  const chapters=await Promise.all(manifest.map(async entry=>{
    const response=await fetch(new URL(`chapters/${entry.id}.json`, import.meta.url));
    if(!response.ok)throw new Error(`Unable to index chapter ${entry.id}.`);
    const chapter=await response.json();chapterCache.set(entry.id,chapter);return chapter;
  }));
  const entries=[];
  chapters.forEach((chapter,chapterIndex)=>{
    chapterPages(chapter).forEach(page=>entries.push({
      title:`${chapter.id} · ${page.label}`,
      context:chapter.title,
      href:page.href,
      text:`${chapter.title} ${page.label} ${pageSearchText(chapter,page)}`,
      order:chapterIndex*1000+page.index
    }));
    [...chapter.exercises,...(depth[chapter.id]?.questions||[])].forEach((problem,index)=>{
      const number=index+1,question=problem.question,preview=question.length>110?`${question.slice(0,110).replace(/\s+\S*$/,'')}…`:question;
      entries.push({title:`${chapter.id} · Problem ${number}`,context:`${chapter.title} · ${problem.type||'Written practice'}`,href:problemHref(chapter.id,number),text:`${chapter.title} Problem ${number} ${question}`,question,preview,order:chapterIndex*1000+100+number});
    });
  });
  Object.entries(appendices).forEach(([key,appendix],index)=>entries.push({title:appendix.title,context:'Reference appendix',href:`#appendix/${key}`,text:JSON.stringify(appendix),order:30000+index}));
  Object.entries(routes).forEach(([key,route],index)=>entries.push({title:route.title,context:'Study route',href:`#guide/${key}`,text:JSON.stringify(route),order:31000+index}));
  projects.forEach((project,index)=>entries.push({title:project.title,context:'Project studio',href:`#project/${project.id}`,text:[project.title,project.summary,...project.concepts,...project.stages.flatMap(stage=>[stage.title,stage.prompt])].join(' '),order:32000+index}));
  supplementaryLabs.forEach((lab,index)=>entries.push({title:lab.title,context:`Advanced experiment · chapter ${lab.chapterId}`,href:`#lab/${lab.id}`,text:[lab.title,lab.description,lab.expected,...lab.tasks].join(' '),order:33000+index}));
  searchIndex=entries;
}
function workedSolution(example,summaryText='Work through the solution step by step'){
  const solution=el('details',undefined,'worked-solution'),summary=el('summary',summaryText),body=el('div',undefined,'worked-solution-body'),prompt=el('p','Predict the next line before revealing it. Name the rule or decision that justifies the step.','worked-solution-prompt'),steps=el('ol',undefined,'worked-steps'),answer=prose('p',example.answer,'example-answer'),controls=el('div',undefined,'worked-solution-controls'),next=el('button','Reveal step 1','primary'),all=el('button','Show complete solution'),status=el('p',`${example.steps.length} solution ${example.steps.length===1?'step':'steps'} hidden.`,'worked-solution-status');
  steps.hidden=true;answer.hidden=true;next.type=all.type='button';status.setAttribute('role','status');status.setAttribute('aria-live','polite');const stepNodes=example.steps.map(step=>{const item=prose('li',step,'worked-step');item.hidden=true;steps.append(item);return item;});let revealed=0;
  const finish=message=>{controls.hidden=true;status.textContent=message;status.tabIndex=-1;status.focus();};
  const revealAll=()=>{steps.hidden=false;stepNodes.forEach(item=>item.hidden=false);answer.hidden=false;revealed=stepNodes.length;finish('Complete solution revealed. Explain why each step follows before moving on.');};
  next.onclick=()=>{if(revealed<stepNodes.length){steps.hidden=false;stepNodes[revealed].hidden=false;revealed++;if(revealed<stepNodes.length){next.textContent=`Reveal step ${revealed+1}`;status.textContent=`Step ${revealed} of ${stepNodes.length} revealed.`;}else{next.textContent='Reveal final answer';status.textContent=`All ${stepNodes.length} steps revealed. State the result before revealing the final answer.`;}return;}answer.hidden=false;finish('Final answer revealed. Compare the setup, transitions, and conclusion with your attempt.');};
  all.onclick=revealAll;controls.append(next,all);body.append(prompt,steps,controls,status,answer);solution.append(summary,body);return solution;
}
function exampleCard(example, number) {
  const section=el('section',undefined,'example');
  section.append(el('p',`Worked example ${number}`,'eyebrow'),prose('h2',example.title),prose('p',example.problem));
  section.append(workedSolution(example));
  return section;
}
function numericCheckView(check,chapterId,number){
  const form=el('form',undefined,'numeric-check'),id=`numeric-${chapterId}-${number}`,label=el('label',check.label),input=el('input'),button=el('button','Check numerical answer'),help=el('p','Enter a decimal or a simple exact form such as 1/4, pi, 4.8*pi, or sqrt(17). This checks only the labeled number; compare your reasoning, units, and any other requested parts yourself.','muted'),feedback=el('p',undefined,'numeric-feedback');
  label.htmlFor=id;input.id=id;input.type='text';input.inputMode='text';input.autocomplete='off';input.spellcheck=false;input.setAttribute('aria-describedby',`${id}-help ${id}-feedback`);help.id=`${id}-help`;feedback.id=`${id}-feedback`;feedback.setAttribute('role','status');button.type='submit';
  form.onsubmit=event=>{event.preventDefault();const result=evaluateNumericAnswer(input.value,check);feedback.classList.toggle('correct',result.status==='correct');if(result.status==='incorrect')renderProse(feedback,`That number does not match the labeled result. ${numericRetryText(result,numericGuidance[`${chapterId}.${number}`])}`);else feedback.textContent=result.status==='empty'?'Enter a numerical answer first.':result.status==='invalid'?'Use a decimal or one of the supported exact numeric forms.':'The labeled number matches. Check your reasoning, units, and the rest of the prompt before recording the problem as solved.';};
  form.append(label,input,button,help,feedback);return form;
}
function exerciseHintLadder(item,chapterId,number){
  const ladder=el('section',undefined,'hint-ladder'),heading=el('div',undefined,'hint-ladder-heading'),controls=el('div',undefined,'hint-ladder-controls'),status=el('p','No hints revealed. Use the least help that lets you restart.','hint-ladder-status'),next=el('button','Reveal planning cue','primary'),all=el('button','Show full solution now'),listNode=el('ol',undefined,'hint-ladder-steps');
  const reason=problemReasons.find(([key])=>key===problemReason(chapterId,number)),plan=reason?`Earlier you tagged ${reason[1].toLowerCase()} as the obstacle. ${reason[2]}`:(problemPlans[item.type]||problemPlans.Challenge),steps=[['Planning cue',plan],['Problem-specific hint',item.hint],['Complete solution',item.solution]],stepNodes=[];
  heading.append(el('h3','Hint ladder'),el('p','Reveal one level at a time and return to your own work after each useful cue.','muted'));
  for(const [label,value] of steps){const row=el('li',undefined,'hint-ladder-step');row.hidden=true;row.append(el('strong',label),label==='Complete solution'?solutionContent(item):prose('p',value));listNode.append(row);stepNodes.push(row);}
  let revealed=0;next.type=all.type='button';status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const finish=message=>{controls.hidden=true;status.textContent=message;status.tabIndex=-1;status.focus({preventScroll:true});};
  next.onclick=()=>{if(revealed>=stepNodes.length)return;stepNodes[revealed].hidden=false;revealed++;if(revealed===1){next.textContent='Reveal problem-specific hint';status.textContent='Planning cue revealed. Try the problem again before asking for the specific hint.';}else if(revealed===2){next.textContent='Reveal complete solution';status.textContent='Problem-specific hint revealed. Resume your work before comparing the complete solution.';}else finish('Complete solution revealed. Compare its setup, reasoning, and conclusion with your unaided attempt.');};
  all.onclick=()=>{stepNodes.forEach(node=>node.hidden=false);revealed=stepNodes.length;finish('All support revealed. Explain each transition, then compare it with your unaided attempt.');};
  controls.append(next,all);ladder.append(heading,listNode,controls,status);return ladder;
}
function attemptWorkspace(chapterId,number,adapter=null){
  const section=el('details',undefined,'attempt-workspace'),id=`attempt-${chapterId}-${number}`,label=el('label','Your attempt'),textarea=el('textarea'),tools=el('div',undefined,'attempt-workspace-tools'),status=el('p',undefined,'attempt-workspace-status'),clear=el('button','Clear draft'),preview=el('details',undefined,'attempt-preview'),previewBody=el('div',undefined,'attempt-preview-body');
  const key=adapter?.key||problemDraftKey(chapterId,number),validDraft=(key,value)=>value.length>0&&value.length<=12000,opened=adapter?.opened||openAuthoredRecord(key,validDraft),stored=adapter?opened.raw:opened.kind==='valid'?opened.raw:'';
  textarea.value=adapter?.readonly?stored||'':authoredDraft(key,stored||'',opened);label.htmlFor=id;textarea.id=id;textarea.rows=6;textarea.maxLength=12000;textarea.placeholder='Write the setup, reasoning, result, units, and a check. Plain-text mathematical notation is fine.';textarea.dataset.draftKey=key;if(adapter?.readonly)textarea.readOnly=true;status.setAttribute('role','status');status.setAttribute('aria-live','polite');textarea.setAttribute('aria-describedby',`${id}-help ${id}-status`);
  const help=el('p','Optional: work here or on paper. Wrap $...$ around notation to preview it. Check the status below; unsaved edits can be copied or downloaded.','muted');help.id=`${id}-help`;status.id=`${id}-status`;
  const updatePreview=()=>{const value=textarea.value;let rendered;if(!value)rendered=el('p','Nothing written yet.','muted');else if(/\$[^$]{1000,}\$/s.test(value))rendered=el('div',value,'attempt-preview-rendered');else try{rendered=prose('div',value,'attempt-preview-rendered');}catch{rendered=el('div',value,'attempt-preview-rendered');}previewBody.replaceChildren(rendered);};
  let previewTimer;preview.ontoggle=()=>{if(preview.open)updatePreview();else clearTimeout(previewTimer);};
  const commit=value=>adapter?adapter.commit(value):commitAuthoredRecord(key,opened,value,validDraft);
  const refresh=message=>{status.textContent=message;};
  textarea.oninput=()=>{rememberAuthoredDraft(key,textarea.value);const result=commit(textarea.value||null);refresh(authoredMessage(result,'Draft'));if(result.kind==='saved'||result.kind==='cleared')forgetAuthoredDraft(key);if(preview.open){clearTimeout(previewTimer);previewTimer=setTimeout(updatePreview,180);}};
  clear.type='button';clear.onclick=()=>{const result=commit(null);refresh(authoredMessage(result,'Draft'));if(result.kind==='cleared'){textarea.value='';forgetAuthoredDraft(key);if(preview.open)updatePreview();}else rememberAuthoredDraft(key,textarea.value);textarea.focus();};
  preview.append(el('summary','Preview your notation'),previewBody);
  if(adapter?.readonly)clear.hidden=true;
  if(textarea.value)section.open=true;tools.append(status,clear);section.append(el('summary',adapter?.readonly?'Your frozen exam attempt':'Write or paste your attempt · local draft'),label,textarea,help,preview,tools);
  if(adapter?.readonly)status.textContent='Frozen exam attempt. This text cannot be changed during solution review.';else refresh(authoredInitialMessage(opened,'Draft'));
  authoredTools(section,key,opened,()=>textarea.value);return section;
}
function exerciseCard(item, number, chapterId, onOutcome=()=>{}, {deferSupport=false}={}) {
  const section=el('section',undefined,'exercise');
  section.dataset.problem=String(number);
  if(item.lesson||item.type)section.append(el('p',[item.lesson&&`Lesson ${item.lesson}`,item.type].filter(Boolean).join(' · '),'eyebrow'));
  const heading=el('h2',`Problem ${number}`);heading.id=`problem-${chapterId}-${number}`;heading.tabIndex=-1;
  section.append(heading,prose('p',item.question),attemptWorkspace(chapterId,number));
  const support=el('div',undefined,'exercise-support');support.id=`exercise-support-${chapterId}-${number}`;
  const numericCheck=numericChecks[chapterId]?.[number];if(numericCheck)support.append(numericCheckView(numericCheck,chapterId,number));
  support.append(exerciseHintLadder(item,chapterId,number));
  const outcome=el('div',undefined,'problem-outcome'),status=el('p',undefined,'problem-outcome-status');status.setAttribute('role','status');
  const solved=el('button','Mark solved'),retry=el('button','Needs another attempt');solved.type='button';retry.type='button';
  const rubric=el('fieldset',undefined,'attempt-rubric'),rubricLegend=el('legend','Compare your unaided attempt'),rubricIntro=el('p','After reading the solution, check each statement that is true of the work you produced before support was revealed.','muted'),rubricStatus=el('p',undefined,'attempt-rubric-status'),rubricChecks=[];rubricStatus.setAttribute('role','status');
  for(const criterion of problemRubrics[item.type]||problemRubrics.Challenge){const label=el('label',undefined,'attempt-rubric-item'),input=el('input');input.type='checkbox';label.append(input,el('span',criterion));rubric.append(label);rubricChecks.push(input);}
  const updateRubric=()=>{const met=rubricChecks.filter(input=>input.checked).length;solved.disabled=met!==rubricChecks.length;rubricStatus.textContent=met===rubricChecks.length?'All comparison criteria met. You can mark this attempt solved.':`${met} of ${rubricChecks.length} comparison criteria met. Record “Needs another attempt” if any criterion remains unmet.`;};rubricChecks.forEach(input=>input.onchange=updateRubric);rubric.prepend(rubricLegend,rubricIntro);rubric.append(rubricStatus);updateRubric();
  const reflection=el('div',undefined,'problem-reflection'),reasonStatus=el('p');reasonStatus.setAttribute('role','status');
  let recordedThisView=null;
  const reasonButtons=new Map();
  for(const [key,label] of problemReasons){const button=el('button',label);button.type='button';button.onclick=()=>{if(saveProblemReason(chapterId,number,key))refresh();else reasonStatus.textContent='Progress storage unavailable.';};reasonButtons.set(key,button);reflection.append(button);}
  const refresh=()=>{const value=problemOutcome(chapterId,number),reason=problemReason(chapterId,number),reasonEntry=problemReasons.find(([key])=>key===reason),state=writtenPracticeState(chapterId,number);solved.setAttribute('aria-pressed',String(value==='solved'));retry.setAttribute('aria-pressed',String(value==='retry'));status.textContent=value==='solved'?`Marked solved after your comparison. ${state.attempts?writtenReviewTiming(state):'Written review is due now to start its spaced schedule.'}`:value==='retry'?'Flagged for another attempt. Review it again today.':'Record the result after working without the solution.';reflection.hidden=value!=='retry';reasonStatus.textContent=reasonEntry?`Previous obstacle: ${reasonEntry[1]}. Next attempt: ${reasonEntry[2]} Change the tag if another issue mattered more.`:'What blocked this attempt? Tag the main obstacle so the next attempt has a target.';for(const [key,button] of reasonButtons)button.setAttribute('aria-pressed',String(key===reason));};
  solved.onclick=()=>{if(recordedThisView==='solved')return;const state=recordWrittenProblem(chapterId,number,true);if(state){recordedThisView='solved';clearProblemReason(chapterId,number);refresh();onOutcome('solved');}else status.textContent='Progress storage unavailable.';};
  retry.onclick=()=>{if(recordedThisView==='retry')return;const state=recordWrittenProblem(chapterId,number,false);if(state){recordedThisView='retry';refresh();onOutcome('retry');}else status.textContent='Progress storage unavailable.';};
  outcome.append(status,solved,retry);reflection.prepend(reasonStatus);support.append(rubric,outcome,reflection);refresh();
  if(deferSupport){const commitment=el('div',undefined,'retrieval-commit'),reveal=el('button','I have completed an attempt — reveal support','primary');support.hidden=true;reveal.type='button';reveal.setAttribute('aria-controls',support.id);reveal.setAttribute('aria-expanded','false');reveal.onclick=()=>{support.hidden=false;commitment.hidden=true;reveal.setAttribute('aria-expanded','true');support.querySelector('input,summary,button')?.focus();};commitment.append(el('p','Complete the setup and result in the workspace above or on paper before revealing numerical feedback, the hint, the solution, or self-assessment.'),reveal);section.append(commitment);}
  section.append(support);
  return section;
}
function lessonInvestigationView(chapterId,investigation){
  const section=el('section',undefined,'lesson-investigation');section.dataset.lessonInvestigation=investigation.id;
  section.append(el('p','Optional transfer investigation','eyebrow'),el('h2',investigation.title),prose('p',investigation.introduction));
  investigation.tasks.forEach((task,index)=>{
    const card=el('section',undefined,'lesson-investigation-task'),hint=el('details',undefined,'lesson-investigation-hint'),solution=el('details',undefined,'lesson-investigation-solution');
    card.dataset.investigationTask=String(index+1);
    card.append(el('h3',`Task ${index+1} · ${task.title}`),prose('p',task.question),attemptWorkspace(chapterId,`${investigation.id}-${index+1}`));
    hint.append(el('summary',`Reveal hint for task ${index+1}`),prose('p',task.hint));
    solution.append(el('summary',`Reveal solution for task ${index+1}`),prose('p',task.solution));
    card.append(hint,solution);section.append(card);
  });
  section.append(el('p','These tasks are for written reasoning. Compare your attempt with the solutions; no score is assigned.','muted'));
  return section;
}
function chapterOutline(c,pages,current) {
  const nav=el('nav',undefined,'chapter-outline');nav.setAttribute('aria-label',`Chapter ${c.id} contents`);
  nav.append(el('p',`Chapter ${c.id}`,'outline-kicker'),el('h2',c.title));
  let group='';
  for (const page of pages) {
    if (page.group !== group) { group=page.group; nav.append(el('h3',group)); }
    const a=link(page.label,page.href);
    if (page.index===current.index) a.setAttribute('aria-current','page');
    nav.append(a);
  }
  return nav;
}
function compactOutline(pages,current) {
  const details=el('details',undefined,'compact-outline');
  const summary=el('summary');
  summary.append(el('span',`Chapter contents · ${current.index + 1} of ${pages.length}`,'outline-position'),el('span',current.label,'outline-current'));
  details.append(summary);
  const nav=el('nav');nav.setAttribute('aria-label','Chapter pages');
  pages.forEach(page=>{const a=link(page.label,page.href);if(page.index===current.index)a.setAttribute('aria-current','page');nav.append(a);});
  details.append(nav);
  return details;
}
function readingSettings() {
  const details=el('details',undefined,'reader-settings');
  details.append(el('summary','Aa · Reading settings'));
  const controls=el('div',undefined,'reading-settings-controls');
  const status=el('p','Reading settings apply as you change them.','reader-settings-status muted');status.setAttribute('role','status');
  const persistSetting=(key,value,label)=>{status.textContent=save(key,value)||read(key)===value?`${label} applied and saved in this browser.`:`${label} applied for this session only. Browser storage could not save it; choose again after reloading if needed.`;};
  const sizeGroup=el('div',undefined,'reading-size-controls');
  const sizeLabel=el('span','Text size');
  const smaller=el('button','A−'),larger=el('button','A+'),sizeOutput=el('output');
  smaller.type=larger.type='button';
  smaller.setAttribute('aria-label','Decrease reading text size');
  larger.setAttribute('aria-label','Increase reading text size');
  sizeOutput.setAttribute('aria-live','polite');
  function updateSize(){sizeOutput.value=`${readerSize}%`;sizeOutput.textContent=`${readerSize}%`;smaller.disabled=readerSize===readerSizes[0];larger.disabled=readerSize===readerSizes.at(-1);}
  smaller.onclick=()=>{readerSize=readerSizes[Math.max(0,readerSizes.indexOf(readerSize)-1)];applyReaderSettings();persistSetting('reader-size',String(readerSize),'Text size');updateSize();};
  larger.onclick=()=>{readerSize=readerSizes[Math.min(readerSizes.length-1,readerSizes.indexOf(readerSize)+1)];applyReaderSettings();persistSetting('reader-size',String(readerSize),'Text size');updateSize();};
  updateSize();sizeGroup.append(sizeLabel,smaller,sizeOutput,larger);
  const widthGroup=el('div',undefined,'reading-width-controls');
  const widthLabel=el('label','Line width');widthLabel.htmlFor='reader-width';
  const widthSelect=el('select');widthSelect.id='reader-width';
  for(const [value,label] of [['narrow','Narrow'],['comfortable','Comfortable'],['wide','Wide']]){
    const option=el('option',label);option.value=value;widthSelect.append(option);
  }
  widthSelect.value=readerWidth;
  widthSelect.onchange=()=>{readerWidth=widthSelect.value;applyReaderSettings();persistSetting('reader-width',readerWidth,'Line width');};
  widthGroup.append(widthLabel,widthSelect);
  const themeGroup=el('div',undefined,'reading-theme-controls');
  const themeLabel=el('label','Theme');themeLabel.htmlFor='reader-theme';
  const themeSelect=el('select');themeSelect.id='reader-theme';
  for(const [value,label] of [['auto','Device'],['light','Light'],['dark','Dark']]){
    const option=el('option',label);option.value=value;themeSelect.append(option);
  }
  themeSelect.value=hostedReaderTheme?sharedReaderTheme():readerTheme;
  if(hostedReaderTheme){
    const available=typeof window.EulerTheme?.get==='function'&&typeof window.EulerTheme?.set==='function';
    themeSelect.disabled=!available;
    if(!available)status.textContent='Theme controls could not load. Reload the page to choose an Euler theme.';
    themeSelect.onchange=()=>{
      const controller=window.EulerTheme;
      try{
        if(typeof controller?.get!=='function'||typeof controller?.set!=='function')throw new Error('Theme controls unavailable');
        controller.set(themeSelect.value==='auto'?'system':themeSelect.value);
        readerTheme=sharedReaderTheme();themeSelect.value=readerTheme;
        status.textContent='Euler theme applied.';
      }catch{
        themeSelect.value=sharedReaderTheme();
        status.textContent='The theme could not be applied. Use the Euler header or reload this page.';
      }
    };
  }else{
    themeSelect.onchange=()=>{readerTheme=themeSelect.value;applyReaderSettings();persistSetting('reader-theme',readerTheme,'Theme');};
  }
  themeGroup.append(themeLabel,themeSelect);
  controls.append(sizeGroup,widthGroup,themeGroup);details.append(controls,status);
  return details;
}
function bookmarkButton(c,page,title,focusedProblem=null){
  const button=el('button',undefined,'bookmark-page');button.type='button';
  const href=focusedProblem?problemHref(c.id,focusedProblem):page.href,bookmarkTitle=`${c.id} · ${c.title} — ${focusedProblem?`Problem ${focusedProblem}`:title}`;
  const update=()=>{const active=bookmarks().some(item=>item.href===href);button.textContent=active?'★ Saved':'☆ Save this page';button.setAttribute('aria-pressed',String(active));};
  button.onclick=()=>{
    const items=bookmarks(),index=items.findIndex(item=>item.href===href);
    if(index>=0)items.splice(index,1);else items.push({href,title:bookmarkTitle});
    if(writeBookmarks(items)){update();toc();}else button.textContent='Saving unavailable';
  };
  update();return button;
}
function pageTurn(c,pages,current,chapterIndex) {
  const nav=el('nav',undefined,'page-turn');nav.setAttribute('aria-label','Reading navigation');
  const previous=pages[current.index-1];
  const next=pages[current.index+1];
  if(previous) nav.append(link(`← ${previous.label}`,previous.href,'page-turn-link'));
  else if(chapterIndex>0) nav.append(link(`← Chapter ${manifest[chapterIndex-1].id}`,`#chapter/${manifest[chapterIndex-1].id}`,'page-turn-link'));
  if(next) nav.append(link(`${next.label} →`,next.href,'page-turn-link next'));
  else if(chapterIndex<manifest.length-1) nav.append(link(`Chapter ${manifest[chapterIndex+1].id} →`,`#chapter/${manifest[chapterIndex+1].id}`,'page-turn-link next'));
  return nav;
}
function supplementaryIndex(){
  document.title='Advanced computational experiments · Calculus, explored';
  const heading=el('h1','Advanced computational experiments');heading.tabIndex=-1;
  main.append(el('p','Eleven supplementary laboratories','eyebrow'),heading,el('p','Predict, change the source, run it in the isolated laboratory, and explain how the finite evidence relates to the exact mathematics. Each experiment has its own notebook and download.','lead'));
  const cards=el('div',undefined,'cards');
  for(const lab of supplementaryLabs){const card=link('',`#lab/${lab.id}`,'card');card.append(el('span',`Chapter ${lab.chapterId}`,'eyebrow'),el('h2',lab.title),el('p',lab.description));cards.append(card);}
  main.append(cards,link('Back to the book','#'));heading.focus({preventScroll:true});
}
function supplementaryView(id){
  const lab=supplementaryLabById(id);if(!lab){main.append(el('h1','Laboratory not found'),link('All advanced experiments','#labs'));return;}
  const presentation=presentationForLab(lab);
  document.title=lab.title+' · Calculus, explored';
  const article=el('article',undefined,'reader-article supplementary-laboratory');article.id='supp-code-lab';
  const heading=el('h1',lab.title);heading.tabIndex=-1;
  const breadcrumb=readerBreadcrumb([{title:'Labs',href:eulerHostedEntry?'/labs/':'#labs'},{title:lab.title}]);
  article.append(breadcrumb,el('p',`Chapter ${lab.chapterId} · supplementary laboratory`,'eyebrow'),heading,prose('p',presentation.description,'lead'),link('Read the related lesson',lab.lessonHref));
  for(const href of lab.relatedLessonHrefs)article.append(link('Read another related lesson',href));
  article.append(el('h2','Inputs and domains'),tableView(['Input','Unit','Default','Domain'],presentation.inputs,'reference-table',`${lab.title} inputs and domains`),el('h2','Experiment tasks'),list(presentation.tasks,true));
  const key=suppWorkKey(id),workOpened=openAuthoredRecord(key,validSuppValue),work=authoredDraft(key,readSuppWork(key,workOpened.raw),workOpened),notebook=el('details',undefined,'lab-notebook visual-notebook'),body=el('div',undefined,'visual-notebook-body'),noteStatus=el('p',authoredInitialMessage(workOpened,'Experiment notes'),'muted');notebook.open=true;noteStatus.setAttribute('role','status');notebook.append(el('summary','Experiment notebook · predict, observe, explain'),body);
  for(const [field,labelText] of [['prediction','1. My prediction'],['observation','2. What the run showed'],['explanation','3. My explanation and transfer test']]){const row=el('div',undefined,'visual-notebook-field'),label=el('label',labelText),input=el('textarea');input.id=`supp-${id}-${field}`;input.rows=3;input.maxLength=2000;input.value=work[field];label.htmlFor=input.id;input.addEventListener('input',()=>{work[field]=input.value;rememberAuthoredDraft(key,work);const raw=[work.prediction,work.observation,work.explanation].some(value=>value.length)?JSON.stringify(work):null;const result=commitAuthoredRecord(key,workOpened,raw,validSuppValue);noteStatus.textContent=authoredMessage(result,'Experiment notes');if(result.kind==='saved'||result.kind==='cleared')forgetAuthoredDraft(key);});row.append(label,input);body.append(row);}
  body.append(noteStatus);authoredTools(body,key,workOpened,()=>JSON.stringify(work,null,2));article.append(notebook);
  const bookmark=el('button','☆ Save this experiment','bookmark-page');bookmark.type='button';const href=`#lab/${id}`,updateBookmark=()=>{const active=bookmarks().some(item=>item.href===href);bookmark.textContent=active?'★ Saved':'☆ Save this experiment';bookmark.setAttribute('aria-pressed',String(active));};updateBookmark();bookmark.onclick=()=>{const items=bookmarks(),index=items.findIndex(item=>item.href===href);if(index>=0)items.splice(index,1);else items.push({href,title:`${lab.chapterId} · ${lab.title}`});if(writeBookmarks(items))updateBookmark();};article.append(bookmark);
  const codeKey=suppCodeKey(id),label=el('label','Editable JavaScript','code-label'),editor=el('textarea');editor.id='supp-code-editor';editor.spellcheck=false;editor.maxLength=20000;const codeOpened=openAuthoredRecord(codeKey,validSuppValue);editor.value=authoredDraft(codeKey,codeOpened.kind==='valid'?codeOpened.raw:lab.code,codeOpened);label.htmlFor=editor.id;article.append(el('h2','Run and compare'),label,editor,el('p','Code runs only when you choose Run. Each run starts fresh in the isolated runner and has a three-second limit.','muted'));
  const toolbar=el('div',undefined,'toolbar'),run=el('button','Run code','primary'),stop=el('button','Stop'),reset=el('button','Reset'),copy=el('button','Copy'),dl=el('button','Download .js');stop.disabled=true;toolbar.append(run,stop,reset,copy,dl);
  const status=el('p','Ready. Saved source is displayed without execution.','status'),output=el('pre',undefined,'output'),plots=el('div');status.setAttribute('role','status');output.hidden=true;output.setAttribute('aria-label','Code output');output.setAttribute('role','region');output.tabIndex=0;
  const finish=()=>{run.disabled=false;stop.disabled=true;},halt=()=>{stopRun();finish();};
  const codeStatus=el('p',authoredInitialMessage(codeOpened,'Code'),'authored-code-status');codeStatus.setAttribute('role','status');const persistCode=()=>{rememberAuthoredDraft(codeKey,editor.value);const result=commitAuthoredRecord(codeKey,codeOpened,editor.value,validSuppValue);codeStatus.textContent=authoredMessage(result,'Code');if(result.kind==='saved')forgetAuthoredDraft(codeKey);};editor.addEventListener('input',persistCode);authoredTools(article,codeKey,codeOpened,()=>editor.value);article.append(codeStatus);
  run.onclick=()=>{halt();output.textContent='';output.hidden=true;plots.replaceChildren();run.disabled=true;stop.disabled=false;status.textContent='Running…';stopRun=execute(editor.value,data=>{if(data.type==='log'){output.hidden=false;output.textContent+=readableOutput(data.text)+'\n';}if(data.type==='plot')plots.append(plotView(data,true));if(data.type==='error'){status.textContent='Error: '+data.text;finish();}if(data.type==='done'){status.textContent='Finished. Compare the finite result with the analytic statement below.';finish();}});};
  stop.onclick=()=>{halt();status.textContent='Stopped.';};
  reset.onclick=()=>{halt();editor.value=lab.code;output.hidden=true;plots.replaceChildren();persistCode();status.textContent='Original source loaded in this editor. See code storage status below.';};
  copy.onclick=async()=>{try{await navigator.clipboard.writeText(editor.value);status.textContent='Code copied.';}catch{editor.focus();editor.select();status.textContent='Code selected. Use your browser copy shortcut.';}};
  dl.onclick=()=>download(portable(editor.value),`calculus-supp-${id}.js`);
  const comparison=el('details',undefined,'lab-expected');comparison.append(el('summary','Compare with analytic behavior'),...presentation.expectedParagraphs.map(value=>prose('p',value)));
  article.append(toolbar,status,output,plots,comparison,el('h2','Reproducible comparison cases'),list(presentation.caseExplanations),el('h2','Boundary and failure behavior'),prose('p',presentation.boundary),el('p','A matching finite run checks this source and these inputs; it does not certify a proof.','muted'),link('All advanced experiments','#labs'));main.append(article);heading.focus({preventScroll:true});
}
function projectsView(){
  document.title='Project studio · Calculus, explored';
  const heading=el('h1','Project studio');heading.tabIndex=-1;
  main.append(el('p','Apply across chapters','eyebrow'),heading,el('p','Develop a model, derive a result, test it, and explain its limits. Work through the stages in a notebook here or on paper. Comparison anchors and self-review criteria are available inside each project.','lead'));
  const cards=el('div',undefined,'cards');
  for(const project of projects){
    const card=link('',`#project/${project.id}`,'card project-card');
    const draft=readProjectValue(draftKey(project.id),read(draftKey(project.id)));
    const completed=Object.values(draft.stages).filter(stage=>stage.complete).length;
    card.append(el('span',`Chapters ${project.chapterIds.join(', ')} · ${completed}/${project.stages.length} stages marked complete`,'eyebrow'),el('h2',project.title),el('p',project.summary));cards.append(card);
  }
  main.append(cards,el('p','Project judgments are your own evidence review, not externally graded scores. Drafts and judgments save in this browser when storage is available and can be included in the learning-record backup.','muted'));
  heading.focus({preventScroll:true});
}

function projectView(id){
  const project=projectById(id);
  if(!project){main.append(el('h1','Project not found'),link('All projects','#projects'));return;}
  document.title=project.title+' · Calculus, explored';
  const root=el('article',undefined,'project-studio');
  const breadcrumb=readerBreadcrumb([{title:'Books',href:eulerHostedEntry?'/books/':'#'},{title:'Calculus, explored',href:'#'},{title:'Project studio',href:'#projects'},{title:project.title}]);
  const heading=el('h1',project.title);heading.tabIndex=-1;
  root.append(breadcrumb,el('p','Cross-chapter project','eyebrow'),heading,el('p',project.summary,'lead'),prose('p',project.scenario));
  const chapterLinks=el('div',undefined,'project-chapters');chapterLinks.append(el('h2','Prepare with these lessons'));
  const prerequisites=el('ul');project.prerequisites.forEach(item=>{const row=el('li');row.append(link(item.label,item.href));prerequisites.append(row);});chapterLinks.append(prerequisites);root.append(chapterLinks);
  const inputs=el('section',undefined,'project-inputs');inputs.append(el('h2','Supplied data'),tableView(['Quantity','Value'],project.data.inputs,'project-data',`${project.title} supplied data`),el('h3','Working assumptions'),list(project.data.assumptions));root.append(inputs);
  const draftStoreKey=draftKey(id),reviewStoreKey=reviewKey(id),draftOpened=openAuthoredRecord(draftStoreKey,validProjectValue),reviewOpened=openAuthoredRecord(reviewStoreKey,validProjectValue);
  let draft=authoredDraft(draftStoreKey,readProjectValue(draftStoreKey,draftOpened.raw),draftOpened);
  let review=authoredDraft(reviewStoreKey,readProjectValue(reviewStoreKey,reviewOpened.raw),reviewOpened);
  let draftStatus=authoredInitialMessage(draftOpened,'Project work'),reviewStatus=authoredInitialMessage(reviewOpened,'Self-review');const status=el('p',`${draftStatus} ${reviewStatus}`,'project-status');status.setAttribute('role','status');
  const persistDraft=()=>{rememberAuthoredDraft(draftStoreKey,draft);const result=commitAuthoredRecord(draftStoreKey,draftOpened,JSON.stringify(draft),validProjectValue);draftStatus=authoredMessage(result,'Project work');status.textContent=`${draftStatus} ${reviewStatus}`;if(result.kind==='saved')forgetAuthoredDraft(draftStoreKey);};
  const persistReview=()=>{rememberAuthoredDraft(reviewStoreKey,review);const result=commitAuthoredRecord(reviewStoreKey,reviewOpened,JSON.stringify(review),validProjectValue);reviewStatus=authoredMessage(result,'Self-review');status.textContent=`${draftStatus} ${reviewStatus}`;if(result.kind==='saved')forgetAuthoredDraft(reviewStoreKey);};
  authoredTools(root,draftStoreKey,draftOpened,()=>JSON.stringify(draft,null,2));authoredTools(root,reviewStoreKey,reviewOpened,()=>JSON.stringify(review,null,2));
  root.append(status,el('h2','Project stages'),el('p','Try each stage before opening its guidance or the worked comparison anchors. Each workspace accepts up to 8,000 characters. Mark a stage complete when your evidence is ready.'));
  for(const stage of project.stages){
    const section=el('section',undefined,'project-stage');section.id=`stage-${id}-${stage.id}`;
    const label=el('label',`Your work: ${stage.title}`),area=el('textarea');area.rows=8;area.maxLength=8000;area.id=`work-${id}-${stage.id}`;label.htmlFor=area.id;
    const state=draft.stages[stage.id]||{text:'',complete:false};area.value=state.text;
    const count=el('small',`${area.value.length}/8000 characters`,'project-character-count');
    const completeLabel=el('label',undefined,'project-complete'),complete=el('input');complete.type='checkbox';complete.checked=state.complete;completeLabel.append(complete,document.createTextNode(' I have produced the requested evidence'));
    const update=()=>{draft.stages[stage.id]={text:area.value,complete:complete.checked};count.textContent=`${area.value.length}/8000 characters`;persistDraft();};
    area.addEventListener('input',update);complete.addEventListener('change',update);
    const help=el('details',undefined,'project-help');help.append(el('summary','Stage guidance'),prose('p',stage.support));
    section.append(el('h3',stage.title),prose('p',stage.prompt),prose('p',`Evidence to produce: ${stage.evidence}`,'project-evidence'),help,label,area,count,completeLabel);root.append(section);
  }
  const comparison=el('details',undefined,'project-comparison');comparison.append(el('summary','Worked anchors for comparison'),el('p','Open these after attempting the calculations. They check the stated mathematical model only; compare your reasoning and units too.'));
  comparison.append(list(project.data.anchors),prose('p',project.data.anchorNote));root.append(comparison);
  if(project.referenceCode){const source=el('details',undefined,'project-reference-code'),pre=el('pre'),code=el('code',project.referenceCode);pre.tabIndex=0;pre.append(code);source.append(el('summary','Reproducible reference source'),el('p','This source is displayed as text and runs only if you choose to execute a copy outside this page.'),pre);root.append(source);}
  const deliverables=el('section',undefined,'project-deliverables');deliverables.append(el('h2','Final deliverables'),list(project.deliverables));root.append(deliverables);
  const rubric=el('section',undefined,'project-rubric');rubric.append(el('h2','Review your evidence'),el('p','Choose a judgment for each criterion. These are your self-assessments, not a score or external grade.'));
  for(const criterion of project.assessment){
    const row=el('div',undefined,'project-criterion'),label=el('label',criterion.label),select=el('select');select.id=`review-${id}-${criterion.id}`;label.htmlFor=select.id;
    for(const [value,wording] of [['not-yet','Not yet evidenced'],['developing','Developing'],['supported','Supported by my work']]){const option=el('option',wording);option.value=value;select.append(option);}
    select.value=review.criteria[criterion.id]||reviewChoices[0];select.addEventListener('change',()=>{review.criteria[criterion.id]=select.value;persistReview();});
    row.append(label,prose('p',criterion.criterion),select);rubric.append(row);
  }
  root.append(rubric,el('h2','Limitations to address'),list(project.limitations),link('Back to all projects','#projects','secondary-link'),link('Back up learning record','#progress','secondary-link'));
  main.append(root);heading.focus({preventScroll:true});
}

function chapterRecallView(chapter){
  const section=el('section',undefined,'chapter-recall');
  const label=el('label','Your recall notes (optional)');
  const notes=el('textarea');
  const status=el('p',undefined,'chapter-recall-status');
  const clear=el('button','Clear notes');
  const key=chapterRecallKey(chapter.id);
  notes.id=`chapter-recall-${chapter.id}-notes`;
  notes.rows=4;
  notes.maxLength=4000;
  notes.placeholder='Name the main ideas, their conditions, and one example or counterexample.';
  const opened=openAuthoredRecord(key,(key,raw)=>raw.length>0&&raw.length<=4000);notes.value=authoredDraft(key,opened.kind==='valid'?opened.raw:'',opened);
  notes.setAttribute('aria-describedby',`chapter-recall-${chapter.id}-status`);
  label.htmlFor=notes.id;
  status.id=`chapter-recall-${chapter.id}-status`;
  status.setAttribute('role','status');
  const refresh=message=>{
    clear.hidden=!notes.value;
    status.textContent=message||(notes.value?'Notes saved locally and included in your learning-record backup.':'You can also recall aloud or on paper.');
  };
  notes.addEventListener('input',()=>{
    rememberAuthoredDraft(key,notes.value);const result=commitAuthoredRecord(key,opened,notes.value||null,(key,raw)=>raw.length>0&&raw.length<=4000);refresh(authoredMessage(result,'Recall notes'));if(result.kind==='saved'||result.kind==='cleared')forgetAuthoredDraft(key);
  });
  clear.addEventListener('click',()=>{notes.value='';rememberAuthoredDraft(key,'');const result=commitAuthoredRecord(key,opened,null,(key,raw)=>raw.length>0&&raw.length<=4000);refresh(authoredMessage(result,'Recall notes'));if(result.kind==='cleared')forgetAuthoredDraft(key);notes.focus();});
  const comparison=el('details',undefined,'chapter-recall-comparison');
  comparison.append(el('summary','Compare with the key ideas'),list(chapter.summary));
  section.append(el('h2','Recall before looking'),el('p','From memory, explain the chapter’s central claims and when they apply. Then compare your account with the key ideas.'),label,notes,status,clear,comparison);authoredTools(section,key,opened,()=>notes.value);
  refresh(authoredInitialMessage(opened,'Recall notes'));
  return section;
}

function renderChapterPage(c,page,pages,chapterIndex,focusedProblem=null) {
  const singleLab=page.kind==='lab'&&eulerReaderViewInstalled&&eulerReaderViewData?.viewId==='chapter-'+c.id+'-lab'&&Boolean(calculusReaderViewLocation(eulerReaderViewData));
  const shell=el('div',undefined,'reader-shell');
  const article=el('article',undefined,'reader-article');
  if(singleLab)article.dataset.eulerCalculusLab='';
  if(!eulerHostedEntry)article.append(readingSettings());
  if(!eulerHostedEntry)article.append(compactOutline(pages,page));
  const eyebrow=page.kind==='overview' ? `${manifest[chapterIndex].part} · Chapter ${c.id}` : `Chapter ${c.id} · ${page.group} · ${page.index + 1} of ${pages.length}`;
  article.append(el('p',eyebrow,'eyebrow'));
  const title=singleLab ? c.lab.title : page.kind==='overview' ? c.title : page.kind==='lesson' ? c.sections[page.sectionIndex].title.replace(/^\d+\.\s*/, '') : page.label;
  const breadcrumb=singleLab?readerBreadcrumb([{title:'Labs',href:'/labs/'},{title}])
    :readerBreadcrumb([{title:'Books',href:eulerHostedEntry?'/books/':'#'},{title:'Calculus, explored',href:'#'},
      ...(page.kind==='overview'?[{title:c.title}]:[{title:c.title,href:`#chapter/${c.id}`},{title:page.kind==='explore'?'Visual investigation':title}])]);
  article.prepend(breadcrumb);
  const heading=el('h1',page.kind==='explore'?'Visual investigation':title);heading.tabIndex=-1;if(page.kind==='explore')heading.classList.add('explore-page-heading');if(!singleLab)article.append(heading);
  const pageTools=el('div',undefined,'reader-page-tools');pageTools.append(bookmarkButton(c,page,singleLab?page.label:title,focusedProblem),link('Notation & glossary','#appendix/notation','glossary-link'),printEditionDownload('complete-book-link'));if(!singleLab)article.append(pageTools);
  if(page.kind==='overview') {
    article.append(el('p',c.subtitle,'lead'));
    const saved=read('last-page-'+c.id);
    const actions=el('div',undefined,'reader-actions');
    actions.append(link('Start chapter →',pages[1].href,'primary-link'));
    if(saved && pages.some(p=>p.href===saved && p.kind!=='overview')) actions.append(link('Continue where you stopped →',saved,'secondary-link'));
    article.append(actions);
    const preparation=el('section',undefined,'overview-prep');
    preparation.append(el('h2','Before you begin'),el('p','Prerequisites: '+c.prerequisites.join(' · ')));
    article.append(preparation,el('h2','What you will be able to do'),objectiveList(c));
    const references=chapterReferences(c);
    for(const [title,items] of [['Further reading',references.reading],['Sources',references.primary]])if(items.length){const section=el('section'),list=el('ul');section.append(el('h2',title));for(const item of items){const row=el('li');row.append(link(item.label,item.href));list.append(row);}section.append(list);article.append(section);}
    const map=el('section',undefined,'lesson-map');map.append(el('h2','Chapter route'),el('p','Read one lesson at a time. The visual gives a concrete experiment; the derivation, examples, laboratory, and practice make the ideas precise.'));
    const routeList=el('ol');pages.slice(1).forEach(p=>{const item=el('li');item.append(link(p.label,p.href));routeList.append(item);});map.append(routeList);article.append(map);
    const related=projects.filter(project=>project.chapterIds.includes(c.id));
    if(related.length){const studio=el('section',undefined,'project-links');studio.append(el('h2','Use this chapter in a project'),el('p','Apply these ideas across chapters in the project studio.'));const links=el('ul');related.forEach(project=>{const item=el('li');item.append(link(project.title,`#project/${project.id}`));links.append(item);});studio.append(links);article.append(studio);}
    const relatedLabs=supplementaryLabs.filter(lab=>lab.chapterId===c.id);if(relatedLabs.length){const section=el('section',undefined,'project-links'),items=el('ul');section.append(el('h2','Advanced experiments for this chapter'));for(const lab of relatedLabs){const item=el('li');item.append(link(lab.title,`#lab/${lab.id}`));items.append(item);}section.append(items);article.append(section);}
  } else if(page.kind==='lesson') {
    const section=c.sections[page.sectionIndex];
    const body=el('section',undefined,'reading-prose');
    section.paragraphs.forEach(paragraph=>body.append(prose('p',paragraph)));
    if(section.comparisonTable){
      const {caption,headers,rows}=section.comparisonTable;
      const comparison=el('section',undefined,'lesson-comparison');
      comparison.append(el('h2',caption),tableView(headers,rows,'reference-table',caption,true),el('p','Swipe sideways or focus the table and use the arrow keys to read every column.','table-scroll-cue'));
      body.append(comparison);
    }
    for(const theorem of section.theorems||[]) {
      const box=el('section',undefined,'theorem-card');
      box.append(el('p','Theorem and proof','eyebrow'),el('h2',theorem.title),prose('p',theorem.statement,'theorem-statement'));
      if(theorem.equationTex) box.append(equation(theorem.equationTex));
      box.append(el('h3','Why it is true'));
      theorem.proof.forEach(paragraph=>box.append(prose('p',paragraph)));
      body.append(box);
    }
    if(section.investigation)body.append(lessonInvestigationView(c.id,section.investigation));
    if(section.formula){const key=el('aside',undefined,'key-result');key.id=`equation-${c.id}-${page.sectionIndex+1}`;key.append(el('p',`Key result · Equation ${Number(c.id)}.${page.sectionIndex+1}`,'eyebrow'),section.formulaTex?equation(section.formulaTex):el('div',section.formula,'formula'));body.append(key);}
    article.append(body);
    if(c.id==='21'&&(page.sectionIndex===0||page.sectionIndex===3))article.append(link('Investigate fixed rays and the moving curve →','#chapter/21/explore/4','secondary-link'));
    const lessonProblems=[...c.exercises,...(depth[c.id]?.questions||[])].map((item,index)=>({item,index})).filter(({item})=>item.lesson===page.sectionIndex+1);
    if(lessonProblems.length){
      const {item,index}=lessonProblems[0],number=index+1,set=Math.floor(index/4)+1;
      const checkpoint=el('section',undefined,'lesson-checkpoint');
      checkpoint.append(el('p',`Lesson check · Problem ${number} · ${item.type||'Written practice'}`,'eyebrow'),el('h2','Try one before moving on'),prose('p',item.question,'lesson-checkpoint-question'),el('p','Make an unaided attempt here or on paper. Your saved draft appears on the practice page, where you can compare your reasoning with a hint and the solution.','muted'));
      const workspace=attemptWorkspace(c.id,number);workspace.open=true;
      checkpoint.append(workspace,link(`Open problem ${number} for feedback →`,problemHref(c.id,number),'secondary-link'));
      article.append(checkpoint);
      const practice=el('aside',undefined,'lesson-practice');
      practice.append(el('h2','Practice this lesson'),el('p',`${lessonProblems.length} solved problems are linked to this lesson. Try each before opening its hint.`));
      const groups=new Map();
      for(const {index} of lessonProblems){const set=Math.floor(index/4)+1;if(!groups.has(set))groups.set(set,[]);groups.get(set).push(index+1);}
      for(const [set,numbers] of groups)practice.append(link(`Practice set ${set} · problems ${numbers.join(', ')} →`,`#chapter/${c.id}/practice/${set}`));
      article.append(practice);
    }
    const relatedProblems=relatedPracticeFor(c.id,page.sectionIndex+1);
    if(relatedProblems.length){
      const related=el('aside',undefined,'lesson-practice related-practice');
      related.append(el('h2','Extend this lesson'),el('p','These existing chapter problems connect several ideas. They follow the lesson checks and keep their original place in chapter practice.'));
      for(const {number,purpose} of relatedProblems)related.append(link(`Problem ${number} · ${purpose} →`,problemHref(c.id,number),'secondary-link'));
      article.append(related);
    }
    if(pages[page.index+1]?.kind==='explore') article.append(el('p','Next, change the visual controls and compare the result with the definition you have just read.','lesson-prompt'));
    const lessonProjects=projects.filter(project=>project.prerequisites.some(item=>item.href===page.href));
    if(lessonProjects.length){const studio=el('aside',undefined,'project-links');studio.append(el('h2','Apply this lesson in a project'));const links=el('ul');lessonProjects.forEach(project=>{const item=el('li');item.append(link(project.title,`#project/${project.id}`));links.append(item);});studio.append(links);article.append(studio);}
    const lessonLabs=supplementaryLabs.filter(lab=>lab.lessonHref===page.href||lab.relatedLessonHrefs.includes(page.href));if(lessonLabs.length){const section=el('aside',undefined,'project-links'),items=el('ul');section.append(el('h2','Advanced computational experiment'));for(const lab of lessonLabs){const item=el('li');item.append(link(lab.title,`#lab/${lab.id}`));items.append(item);}section.append(items);article.append(section);}
  } else if(page.kind==='explore') {
    const investigation=visualView(c.id,page.visualIndex);
    const routeIntro=el('p','Make a prediction, move the controls, and explain what remains true. The readout describes the current state; the answer below the diagram explains the mathematical reason.','page-intro');
    investigation.querySelector('.exploration-data')?.before(routeIntro);
    if(c.id==='02'&&page.visualIndex===3)article.append(el('p','The hyperbola coordinates and inverse branches belong to Lesson 7. Its tangent interpretation uses derivatives from Chapter 06; treat that part as an optional later return.','page-intro'),link('Return after Chapter 06 Lesson 6 →','#chapter/06/lesson/6','secondary-link'));
    if(c.id==='27'&&page.visualIndex===0){
      const preview=el('aside',undefined,'project-links euler-preparation');
      preview.append(el('h2','Preview: Euler updates'),prose('p','For $y^{\\prime}=-4y$, one Euler step replaces the derivative with its current slope: $y_{n+1}=y_n+h(-4y_n)=(1-4h)y_n$. Here you can see how the step size changes that multiplier before studying the method in detail.'),link('Prepare with Chapter 28 Lesson 1', '#chapter/28/lesson/1'),' · ',link('Study stability in Chapter 28 Lesson 3', '#chapter/28/lesson/3'));
      article.append(preview);
    }
    article.append(investigation);
    if(c.id==='04'&&page.visualIndex===3){const related=el('p',undefined,'reference-links');related.append(link('Review the epsilon–delta proof in Lesson 4.6','#chapter/04/lesson/6'),' · ',link('Prove the greatest radius in Problem 04.36','#chapter/04/practice/9/problem/36'),' · ',link('Test equality in Problem 04.37','#chapter/04/practice/10/problem/37'));article.append(related);}
    if(c.id==='21'&&page.visualIndex===3){const related=el('p',undefined,'reference-links');related.append(link('Read the worked proof in Lesson 21.1','#chapter/21/lesson/1'),' · ',link('Return to directional rates in Lesson 21.4','#chapter/21/lesson/4'));article.append(related);}
  } else if(page.kind==='deep') {
    article.append(el('p','Work through the derivation slowly. Identify the assumptions and try the worked problem before reading its steps.','page-intro'));
    if(c.id==='02')article.append(el('p','The sine-derivative argument and velocity example are optional until Chapter 06 Lesson 3 develops the needed limit and chain rule. Return here afterward; the radian geometry in Lesson 3 can be studied now.','page-intro'),link('Return after Chapter 06 Lesson 3 →','#chapter/06/lesson/3','secondary-link'));
    article.append(depthView(depth[c.id]));
  } else if(page.kind==='examples') {
    article.append(el('p','Try each problem on paper first. Then compare your setup and reasoning with the complete solution.','page-intro'));
    c.examples.forEach((example,i)=>{if(c.id==='05'&&i===5)article.append(el('p','Optional return after Chapter 06 Lessons 1–3: this example uses the product and chain rules away from zero. The derivative at zero was proved directly in Lesson 4.','page-intro'));article.append(exampleCard(example,i+1));});
  } else if(page.kind==='workshop') {
    article.append(el('p','These examples extend the core lesson to different conditions and common failure cases.','page-intro'));
    mastery[c.id].worked.forEach((example,i)=>article.append(exampleCard(example,i+c.examples.length+1)));
  } else if(page.kind==='lab') {
    const introduction=el('p','Use the program as an experiment. Predict what it will show, then change a parameter and explain why the result moves.','page-intro');
    if(singleLab){
      article.append(labView(c,{singleLab,heading}));
      const context=el('details',undefined,'calculus-code-context');context.append(el('summary','Chapter context, contents and editions'),introduction,pageTools,breadcrumb);
      const navigation=document.getElementById('euler-reader-view-navigation');
      if(navigation?.dataset.resourceId===eulerReaderViewData.resourceId&&navigation.dataset.viewId===eulerReaderViewData.viewId){
        const sharedBreadcrumb=navigation.querySelector(':scope > .euler-breadcrumb');
        if(sharedBreadcrumb)article.prepend(sharedBreadcrumb);
        context.append(navigation);
      }
      article.append(context);
    }else article.append(introduction,labView(c));
  } else if(page.kind==='practice') {
    const problems=[...c.exercises,...(depth[c.id]?.questions||[])];
    const slice=problems.slice(page.start,page.start+4);
    const focusedItem=focusedProblem===null?null:problems[focusedProblem-1];
    const lesson=focusedItem?.lesson||relatedLessonForProblem(c.id,focusedProblem);
    const lessonPage=Number.isInteger(lesson)&&lesson>=1&&lesson<=c.sections.length?pages.find(item=>item.kind==='lesson'&&item.sectionIndex===lesson-1):null;
    const practiceProgress=el('p',undefined,'practice-summary');practiceProgress.setAttribute('role','status');
    const updatePractice=()=>{let solved=0,retry=0;for(let number=1;number<=problems.length;number++){const outcome=problemOutcome(c.id,number);if(outcome==='solved')solved++;if(outcome==='retry')retry++;}practiceProgress.textContent=`Chapter practice: ${solved} marked solved · ${retry} flagged · ${problems.length-solved-retry} unrecorded`;};
    article.append(el('p',`Problems ${page.start+1}–${page.start+slice.length} of ${problems.length}. Work each one before opening its hint or solution.`,'page-intro'),exerciseTypeGuideView(),practiceProgress);updatePractice();
    slice.forEach((item,i)=>{
      const number=page.start+i+1,card=exerciseCard(item,number,c.id,updatePractice);
      if(c.id==='02'&&number===31)article.append(el('p','You can prove this bound now by the unit-sector comparison in Lesson 6. The authored hint and solution use Chapter 11 integration and are optional later-return guidance.','page-intro'));
      if(c.id==='02'&&number===33)article.append(el('p','Optional return after Chapter 06 Lesson 3: this question uses the chain rule for a degree-based sine. Mark Chapter 06 read to include it in fresh mixed practice; its number and earlier saved work stay here.','page-intro'));
      if(c.id==='05'&&number===1)article.append(el('p','Complete the average-rate part now; return to the instantaneous-rate part after Lesson 2 defines the derivative.','page-intro'));
      if(number===focusedProblem){
        const context=lessonPage||pages.find(part=>part.kind==='deep');
        const continuation=context&&pages[context.index+1];
        if(context){
          const routeLinks=el('nav',undefined,'focused-problem-route');routeLinks.setAttribute('aria-label',lessonPage?'Lesson route':'Further derivation route');
          routeLinks.append(link(lessonPage?`Return to Lesson ${lesson}`:'Review Further derivation',context.href,'secondary-link'));
          if(continuation)routeLinks.append(link('Continue chapter route',continuation.href,'secondary-link'));
          card.querySelector('.attempt-workspace').before(routeLinks);
        }
      }
      article.append(card);
    });
  } else if(page.kind==='check') {
    article.append(masteryQuizView(mastery[c.id],c.id));
  } else if(page.kind==='review') {
    const mistakes=el('ul');
    c.misconceptions.forEach((mistake,index)=>{
      const number=misconceptionPractice[c.id]?.[index],item=prose('li',mistake);
      if(number) item.append(document.createTextNode(' '),link(`Test with problem ${number} →`,problemHref(c.id,number),'misconception-practice-link'));
      mistakes.append(item);
    });
    article.append(chapterRecallView(c),el('h2','Common mistakes'),mistakes);
    article.append(el('p',misconceptionPractice[c.id]?'Choose one mistake that tempted you. Give a counterexample or identify the missing condition, then solve the exact problem linked beside that mistake again without a hint.':'Choose one mistake that tempted you. Give a counterexample or identify the missing condition.','review-repair-prompt'),link('Return to chapter practice →',`#chapter/${c.id}/practice/1`,'secondary-link'));
    article.append(el('p',c.next,'next-chapter-note'));
    const mark=el('button',read('read-'+c.id)==='yes'?'Mark as unread':'Mark as read');mark.id='mark-read';
    mark.onclick=()=>{const value=read('read-'+c.id)==='yes'?'no':'yes';if(save('read-'+c.id,value)){mark.textContent=value==='yes'?'Mark as unread':'Mark as read';toc();}else mark.textContent='Progress storage unavailable';};
    article.append(mark);
    article.append(el('p',''),link('View chapter source JSON',`chapters/${c.id}.json`,'source-link'));
  }
  article.append(pageTurn(c,pages,page,chapterIndex));
  const outline=chapterOutline(c,pages,page);
  if (eulerHostedOutline) { hostedChapterOutline = outline; shell.append(article); }
  else shell.append(article,outline);
  main.append(shell);
  if(singleLab)window.dispatchEvent(new Event('euler:lab-frame-ready'));
  document.title=`${title} · Calculus, explored`;
  if(page.kind!=='overview') {const currentHref=focusedProblem?problemHref(c.id,focusedProblem):page.href;save('last-page-'+c.id,currentHref);save('last-location',currentHref);}
  const problemHeading=focusedProblem?article.querySelector(`#problem-${c.id}-${focusedProblem}`):null;
  const focusHeading=page.kind==='explore'?article.querySelector('#visual-exploration h2'):heading;
  if(focusHeading)focusHeading.tabIndex=-1;
  (problemHeading||focusHeading||heading).focus({preventScroll:true});
  if(problemHeading)problemHeading.scrollIntoView({block:'start'});
}
// Native chapter hashes are retained as entry points to the reading pages. The
// interactive practice, investigations and drafts remain at their existing routes.
function readingDestination(hash) {
  if (!hash || hash === '#') return 'reading/index.html';
  const match = /^#chapter\/(0[1-9]|1\d|2[0-9]|30)(?:\/(lesson\/(\d+)|lab))?$/.exec(hash);
  if (!match) return null;
  const [, id, part, lesson] = match;
  return `reading/chapter-${id}.html${part === 'lab' ? '#interactive-lab' : lesson ? `#chapter-${id}-lesson-${lesson}` : ''}`;
}
const calculusIsland = new URLSearchParams(location.search).get('island') === 'lab';
if (calculusIsland) {
  const style = document.createElement('style');
  style.textContent = 'header.topbar, .packet-navigation, body > footer, .layout > aside, #euler-header, [data-euler-module-bar], .page-turn, .hosted-chapter-contents, .chapter-outline, .skip { display:none !important } .layout { display:block !important } main { max-width:none !important; padding:1rem !important }';
  document.head.append(style);
}
async function routeBody() {
  if (!calculusIsland && !eulerNativeInstalled && !eulerReaderViewInstalled && !eulerNativeEntry?.currentNativeResourceEntry()) {
    const destination = readingDestination(nativeReaderHash());
    if (destination) { location.replace(new URL(destination, import.meta.url)); return; }
  }
  activeSpatialView?.dispose?.();activeSpatialView=null;
  hostedChapterOutline = null;
  const version=++routeVersion;stopRun();closeLibrary();toc();main.replaceChildren();main.classList.remove('reading-mode');window.scrollTo(0,0);
  if(!nativeReaderHash()||nativeReaderHash()==='#'){home();return;}
  if(nativeReaderHash()==='#progress'){progressView();return;}
  const archivedPaper=nativeReaderHash().match(/^#progress\/archive\/([a-z0-9-]{1,80})$/);if(archivedPaper){progressView(archivedPaper[1]);return;}
  if(nativeReaderHash()==='#labs'){supplementaryIndex();return;}
  const labRoute=nativeReaderHash().match(/^#lab\/([a-z0-9-]+)$/);if(labRoute){supplementaryView(labRoute[1]);return;}
  if(nativeReaderHash()==='#projects'){projectsView();return;}
  const projectRoute=nativeReaderHash().match(/^#project\/([a-z0-9-]+)$/);
  if(projectRoute){projectView(projectRoute[1]);return;}
  if(nativeReaderHash()==='#review'){reviewView();return;}
  const practiceRoute=nativeReaderHash().match(/^#practice(?:\/(concept|setup|algebra|calculation|interpretation))?$/);
  if(practiceRoute){mixedPracticeView(practiceRoute[1]||'all');return;}
  if(nativeReaderHash()==='#assessment'){assessmentView();return;}
  const savedCheckpoint=nativeReaderHash().match(/^#assessment\/report\/(checkpoint-[1-9]\d{0,15}-\d{1,10})(?:\/question\/([1-9]\d*))?$/);
  if(savedCheckpoint){assessmentReportView(savedCheckpoint[1],savedCheckpoint[2]?Number(savedCheckpoint[2]):null);return;}
  if(nativeReaderHash()==='#written-exam'){writtenExamView();return;}
  const guide=nativeReaderHash().match(/^#guide(?:\/([a-z0-9-]+))?$/);
  if(guide){if(!guideView(guide[1]))main.append(el('h1','Route not found'),link('All study routes','#guide'));return;}
  const appendix=nativeReaderHash().match(/^#appendix\/([a-z]+)$/);
  if(appendix){if(!appendixView(appendix[1]))main.append(el('h1','Appendix not found'),link('Study routes','#guide'));return;}
  const match=nativeReaderHash().match(/^#chapter\/(\d{2})(?:\/(.+))?$/);
  const chapterIndex=match?manifest.findIndex(c=>c.id===match[1]):-1;
  if(chapterIndex<0){main.append(el('h1','Page not found'),link('Return to the book','#'));return;}
  main.append(el('h1',manifest[chapterIndex].title),el('p','Loading chapter…'));
  try {
    let chapter=chapterCache.get(manifest[chapterIndex].id);
    if(!chapter){
      const response=await fetch(new URL(`chapters/${manifest[chapterIndex].id}.json`, import.meta.url));
      if(!response.ok)throw new Error('The chapter file could not be loaded.');
      chapter=await response.json();chapterCache.set(chapter.id,chapter);
    }
    if(version!==routeVersion)return;
    const pages=chapterPages(chapter),requestedSlug=match[2]||'',problemMatch=requestedSlug.match(/^practice\/([1-9][0-9]*)\/problem\/([1-9][0-9]*)$/),pageSlug=problemMatch?`practice/${problemMatch[1]}`:requestedSlug;
    const page=pages.find(p=>p.slug===pageSlug),focusedProblem=problemMatch?Number(problemMatch[2]):null;
    main.replaceChildren();
    if(!page||(focusedProblem!==null&&(focusedProblem<page.start+1||focusedProblem>Math.min(page.start+4,chapter.exercises.length+(depth[chapter.id]?.questions.length||0))))){main.append(el('h1','Page not found'),link('Open chapter overview',`#chapter/${chapter.id}`));return;}
    main.classList.add('reading-mode');
    renderChapterPage(chapter,page,pages,chapterIndex,focusedProblem);
    activeSpatialView=main.querySelector('.spatial-exploration');
    toc();if(!focusedProblem)window.scrollTo(0,0);
  } catch(error) {
    if(version===routeVersion)main.replaceChildren(el('h1','Unable to load chapter'),el('p',error.message),link('Return to contents','#'));
  }
}
async function route(){
  const expectedVersion=routeVersion+1;
  await routeBody();
  mapNativeReaderLinks(main);
  if(routeVersion!==expectedVersion||main.contains(document.activeElement)&&document.activeElement!==main)return;
  const heading=main.querySelector('h1, h2');
  if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}
}
const contentsToggle=document.querySelector('#toggle-contents');
function closeLibrary(returnFocus=false){
  const wasOpen=document.body.classList.contains('library-open');
  document.body.classList.remove('library-open');
  contentsToggle.setAttribute('aria-expanded','false');
  if(returnFocus&&wasOpen)contentsToggle.focus();
}
if(sharedReaderDrawer){
  contentsToggle.textContent='Contents';
  sharedReaderDrawer.mountReaderDrawer({toggle:contentsToggle,container:contents.closest('aside'),isOpen:()=>document.body.classList.contains('library-open'),setOpen:open=>document.body.classList.toggle('library-open',open)});
}else{
  contentsToggle.addEventListener('click',()=>{const open=document.body.classList.toggle('library-open');contentsToggle.setAttribute('aria-expanded',String(open));});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.body.classList.contains('library-open')&&window.matchMedia('(max-width: 52rem)').matches){closeLibrary(true);event.preventDefault();}});
}
contents.addEventListener('click',event=>{if(event.target.closest('a'))closeLibrary();});
window.addEventListener('resize',()=>{if(!window.matchMedia('(max-width: 52rem)').matches&&document.body.classList.contains('library-open'))closeLibrary();});
search.addEventListener('input',()=>{toc();if(search.value && window.matchMedia('(max-width: 52rem)').matches){document.body.classList.add('library-open');contentsToggle.setAttribute('aria-expanded','true');}});
document.querySelector('.skip').addEventListener('click',event=>{event.preventDefault();main.focus();main.scrollIntoView({block:'start'});});
if (!(eulerNativeEntry?.currentLearningEntry() ?? eulerNativeEntry?.currentNativeResourceEntry()) && !eulerHasReaderView) window.addEventListener('hashchange',route);
try{
  const r=await fetch(new URL('chapters/manifest.json', import.meta.url));if(!r.ok)throw new Error('Missing chapter inventory.');
  manifest=await r.json();
  await buildSearchIndex();
  if (eulerHasReaderView) {
    if (!eulerReaderViewData || !calculusReaderViewLocation(eulerReaderViewData)) throw new Error('This reader view does not match the current native laboratory.');
    eulerReaderViewMapper=eulerReaderView.createReaderViewMapper(eulerReaderViewData,{origin:window.location.origin});
    eulerNativeEntry.installReaderViewNavigation({moduleId:'calculus',readerKind:'calculus',validateLocation:validateNativeReaderLocation});
    eulerReaderViewInstalled=true;
    document.querySelector('.skip')?.setAttribute('href','#main');
  } else if ((eulerNativeEntry?.currentLearningEntry() ?? eulerNativeEntry?.currentNativeResourceEntry())?.moduleId === 'calculus') {
    eulerNativeEntry.installNativeNavigator({ moduleId: 'calculus', readerKind: 'calculus',
      validateLocation: validateNativeReaderLocation, navigate: () => route() });
    eulerNativeInstalled = true;
  }
  await route();
}catch(error){main.replaceChildren(el('h1','The book could not load'),el('p',error.message+' Start the local HTTP server using npm start.'));}

// Selected-route presentation adds no storage, grading or imported destinations.
function routeAssignmentReference(ref) {
  if (ref.kind === 'diagnostic') return link('Native prerequisite diagnostic and repair lessons', '#guide');
  if (ref.kind === 'reporting') return link('Lesson 28.5: reporting-only source excerpts selected below', '#chapter/28/lesson/5');
  if (!manifest.some(chapter => chapter.id === ref.chapterId) || !Number.isInteger(ref.number) || ref.number < 1) throw new Error('Unknown selected-route source reference.');
  if (ref.kind === 'problem') return link(`Problem ${ref.chapterId}.${ref.number}`, problemHref(ref.chapterId, ref.number));
  if (ref.kind === 'lesson') return link(`Lesson ${ref.chapterId}.${ref.number}`, `#chapter/${ref.chapterId}/lesson/${ref.number}`);
  if (ref.kind === 'visual') return link(`Investigation ${ref.chapterId}.${ref.number}`, `#chapter/${ref.chapterId}/explore${ref.number === 1 ? '' : '/' + ref.number}`);
  throw new Error('Unsupported selected-route preparation.');
}
function routeAssignmentPreparation(refs) {
  const items = el('ol');
  for (const ref of refs) {
    const item = el('li'); item.append(routeAssignmentReference(ref));
    if (ref.note) item.append(el('span', ' — ' + ref.note));
    items.append(item);
  }
  return items;
}
function routeAssignmentProblems(refs) {
  const items = el('ol');
  for (const ref of refs) {
    const item = el('li');
    item.append(routeAssignmentReference({...ref, kind: 'problem'}));
    items.append(item);
  }
  return items;
}
function routeAssignmentsView(selection) {
  const policy = routeAssignmentPolicy, section = el('section', undefined, 'route-assignments');
  section.id = 'selected-' + selection.id;
  const heading = el('h2', policy.title); heading.id = section.id + '-heading';
  section.setAttribute('aria-labelledby', heading.id);
  section.append(heading, el('p', selection.summary), el('p', policy.calendar), el('p', policy.milestones), el('h3', 'Preparation'), list(selection.prerequisites), el('p', policy.reading));
  const trail = el('details'); trail.append(el('summary', 'Keep first, comparison and corrected work'), list(policy.workTrail, true)); section.append(trail);
  const assigned = el('details', undefined, 'route-assignment-roster');
  assigned.append(el('summary', `Show the ${selection.weeks.length} required assignment rows`));
  const rows = el('ol');
  for (const [index, week] of selection.weeks.entries()) {
    const row = el('li'); row.id = section.id + '-' + week.id;
    row.append(el('h3', `Week ${index + 1}: ${week.label}`));
    if (week.preparation.length) row.append(el('p', 'Prepare in this order:'), routeAssignmentPreparation(week.preparation));
    if (week.problems.length) row.append(el('p', 'Required written work, in order:'), routeAssignmentProblems(week.problems));
    else row.append(el('p', 'Complete the fixed public final and required project below after their preparation.'));
    if (week.note) row.append(el('p', week.note));
    rows.append(row);
  }
  assigned.append(rows); section.append(assigned);
  const paper = el('section', undefined, 'route-public-final'); paper.id = selection.final.id;
  paper.append(el('h3', selection.final.title), el('p', `Reference: ${selection.final.id}. These problems are required in the displayed order after the preceding assignments.`), el('p', policy.exposure), routeAssignmentProblems(selection.final.problems), el('p', 'Use each native full solution and its setup, reasoning and conclusion criteria for the dated comparison. Keep the first and corrected attempts separately; no mark or sampled-paper record is created here.'));
  section.append(paper, el('p', selection.assessmentScopeNote), el('p', policy.sampled));
  const reporting = policy.reportingPreparation, report = el('details', undefined, 'route-reporting-preparation');
  report.append(el('summary', 'Required reporting-only bridge for the project'), el('p', reporting.scope));
  reporting.excerpts.forEach(excerpt => report.append(prose('blockquote', excerpt)));
  report.append(el('p', reporting.application), link('Open Lesson 28.5 as the source of these excerpts', '#chapter/28/lesson/5'));
  section.append(report);
  const project = projectById(selection.project.id);
  if (!project) throw new Error('Unknown selected-route project.');
  const studio = el('section', undefined, 'route-required-project');
  studio.append(el('h3', 'Required project: ' + project.title), el('p', 'Complete these named preparation items in order before the project. Use only the reporting excerpts selected above from Lesson 28.5.'), routeAssignmentPreparation(selection.project.preparation), link('Open the required project and its worked comparison anchors', '#project/' + project.id, 'primary-link'), el('p', 'Keep the project’s existing named stages, data, comparison anchors, criterion-specific self-review and limitations. A polished report or a milestone mark does not verify the model or establish a grade.'));
  if (selection.extensions.length) {
    studio.append(el('h4', 'Optional project extension'));
    for (const extension of selection.extensions) {
      const extra = projectById(extension.projectId);
      if (!extra) throw new Error('Unknown optional route project.');
      studio.append(link(extra.title, '#project/' + extra.id), el('p', extension.note));
    }
  }
  section.append(studio, el('p', policy.editions, 'muted'));
  return section;
}
