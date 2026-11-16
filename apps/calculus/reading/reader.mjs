const eulerBase = () => (globalThis.document?.documentElement?.getAttribute('data-euler-base-path') ?? '/').slice(0, -1);
const eulerHref = value => typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && !value.startsWith(eulerBase() + '/') ? eulerBase() + value : value;
const eulerPath = value => eulerBase() && value.startsWith(eulerBase() + '/') ? value.slice(eulerBase().length) : value;
import {installMathFlow} from '../math-flow-controller.js';

// Hashes on the former app home reach the server without their fragment. Keep
// old links working when that home is served as the reading contents instead.
if (eulerPath(location.pathname) === '/calculus/' && location.hash.startsWith('#')) {
  const match = /^#chapter\/(0[1-9]|1\d|2[0-9]|30)(?:\/(lesson\/([1-9]\d*)|lab))?$/.exec(location.hash);
  if (match) {
    const [, id, part, lesson] = match;
    const anchor = part === 'lab' ? '#interactive-lab' : lesson ? `#chapter-${id}-lesson-${lesson}` : '';
    location.replace(new URL(`chapter-${id}.html${anchor}`, import.meta.url));
  } else if (/^#(?:chapter\/|progress(?:\/|$)|labs$|lab\/|projects$|project\/|review$|practice(?:\/|$)|assessment(?:\/|$)|written-exam$|guide(?:\/|$)|appendix\/)/.test(location.hash)) {
    location.replace(new URL('../index.html' + location.hash, import.meta.url));
  }
}

const main=document.querySelector('.reading-page');
// Enhance only native written problems; the complete printable edition stays intact.
void import(eulerHref(new URL("../_euler/exercise-disclosures.mjs", import.meta.url).href)).then(({mountExerciseDisclosures}) => {
  const groups = [...main.querySelectorAll('li[id][data-authored-digest]')]
    .filter(node => /^problem-\d{2}-[1-9]\d*$/.test(node.id));
  mountExerciseDisclosures(groups);
}).catch(() => { /* Authored help remains visible if the enhancement is unavailable. */ });
const controllers=[];
const observer=new IntersectionObserver(entries=>{
  for(const entry of entries){
    if(entry.isIntersecting&&!entry.target.dataset.mathFlowInstalled){
      entry.target.dataset.mathFlowInstalled='true';
      controllers.push(installMathFlow(entry.target,'math-scroll-instructions',false));
      observer.unobserve(entry.target);
    }
  }
},{rootMargin:'800px'});
for(const section of main.querySelectorAll('.chapter,.supplementary-laboratory,.project,#study-routes,.appendix'))observer.observe(section);
window.addEventListener('pagehide',()=>{observer.disconnect();controllers.forEach(c=>c.disconnect());},{once:true});

let cancelled=false;
for(const event of ['pointerdown','keydown','wheel','touchstart'])window.addEventListener(event,()=>{cancelled=true;},{capture:true,passive:true,once:true});
function align(){
  if(cancelled||!location.hash)return;
  let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}
  const target=document.getElementById(id);
  if(target&&Math.abs(target.getBoundingClientRect().top)>12)target.scrollIntoView();
}
document.fonts.ready.then(()=>requestAnimationFrame(()=>requestAnimationFrame(align)));

// The editable laboratory keeps its native model and saved drafts inside the
// relevant chapter. The static explanation remains available without scripts.
const chapter = main.querySelector('.chapter');
const laboratory = chapter?.querySelector('.laboratory');
const chapterId = chapter?.id.match(/^chapter-(0[1-9]|1\d|2[0-9]|30)$/)?.[1] ?? (/^(?:0[1-9]|1\d|2[0-9]|30)$/.test(chapter?.dataset.calculusChapter ?? '') ? chapter.dataset.calculusChapter : null);
if (laboratory && chapterId) {
  const details = document.createElement('details');
  details.id = 'interactive-lab';
  details.className = 'interactive-lab';
  const summary = document.createElement('summary');
  summary.textContent = 'Open editable laboratory';
  details.append(summary);
  details.addEventListener('toggle', () => {
    if (!details.open || details.querySelector('iframe')) return;
    const frame = document.createElement('iframe');
    frame.title = `Chapter ${chapterId} editable laboratory`;
    frame.src = eulerHref(new URL(`../index.html?island=lab#chapter/${chapterId}/lab`, import.meta.url).href);
    details.append(frame);
  });
  laboratory.insertBefore(details, laboratory.children[1] ?? null);
  const openLinkedLab = () => { if (location.hash === '#interactive-lab') details.open = true; };
  window.addEventListener('hashchange', openLinkedLab);
  openLinkedLab();
}

// Old chapter URLs may name an anchor now owned by a continuation. The map
// comes only from this installed edition, and a destination must be one of the
// fixed same-chapter filenames before it can become a navigation target.
let editionMapPromise;
async function followChapterAnchor() {
  if (!chapterId || !location.hash) return;
  const requestedHash = location.hash;
  let id; try { id = decodeURIComponent(requestedHash.slice(1)); } catch { return; }
  if (document.getElementById(id)) return;
  const lookupId = id === 'interactive-lab' ? `chapter-${chapterId}-lab` : id;
  if (!/^[A-Za-z0-9][A-Za-z0-9:_-]{0,255}$/.test(lookupId)) return;
  try {
    editionMapPromise ??= fetch(new URL('edition-map.json', import.meta.url)).then(async response => {
      if (!response.ok) return null;
      const text = await response.text();
      return text.length <= 512 * 1024 ? JSON.parse(text) : null;
    });
    const map = await editionMapPromise;
    if (location.hash !== requestedHash) return;
    const file = map?.schema === 1 && map.source === 'book.html' ? map.ids?.[lookupId] : null;
    const allowed = new RegExp(`^chapter-${chapterId}(?:-part-(?:[2-9]|[1-9]\\d+))?\\.html$`);
    if (typeof file !== 'string' || !allowed.test(file) || file === document.body.dataset.calculusPage
      || !Array.isArray(map.pages) || !map.pages.some(page => page.file === file)) return;
    const destination = new URL(file, import.meta.url);
    destination.search = location.search; destination.searchParams.delete('eulerPage'); destination.hash = requestedHash;
    location.replace(destination);
  } catch { /* The current reading stays available if its edition map cannot load. */ }
}
window.addEventListener('hashchange', followChapterAnchor);
void followChapterAnchor();
