// The hosted site uses the shared asset; standalone builds copy that same asset.
const eulerBase = () => (globalThis.document?.documentElement?.getAttribute('data-euler-base-path') ?? '/').slice(0, -1);
const eulerHref = value => eulerBase() + value;
const hosted = typeof document !== 'undefined' && document.documentElement.hasAttribute('data-euler-hosted');
const moduleURL = hosted ? eulerHref(new URL("./_euler/lab-frame.mjs", import.meta.url).href) : typeof document === 'undefined' ? '../../../app/lab-frame.mjs' : './lab-frame.mjs';
const cssURL = hosted ? eulerHref(new URL("./_euler/lab-frame.css", import.meta.url).href) : new URL('./lab-frame.css', import.meta.url).href;
if (typeof document !== 'undefined' && !document.querySelector('link[data-unhurried-lab-frame]')) {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet'; stylesheet.href = cssURL; stylesheet.dataset.unhurriedLabFrame = '';
  document.head.append(stylesheet);
}
const { mountLabFrame: mountSharedLabFrame } = await import(moduleURL);

// Dedicated lab pages keep their authored heading and question as the one
// visible lead. The model owner attaches the finished frame later in this turn.
function adoptSingleLabLead(frame, options) {
  if (!frame.isConnected) return;
  const main = frame.closest('main[data-euler-single-lab]');
  const owner = frame.closest('[data-experiment]');
  if (!main || !owner || main.dataset.eulerSingleLab !== 'explorations:lab:' + owner.dataset.experiment || frame.dataset.eulerSingleLabReady) return;
  const intro = main.querySelector('.euler-single-lab-intro');
  const title = intro?.querySelector('h1[data-euler-lab-title]');
  const question = intro?.querySelector('[data-euler-lab-question]');
  const frameTitle = frame.querySelector(':scope > .euler-lab__title');
  const frameQuestion = frame.querySelector(':scope > .euler-lab__question');
  if (!title || !question || !frameTitle || !frameQuestion
    || title.textContent.trim() !== options.title.trim() || question.textContent.trim() !== options.question.trim()) return;
  const serverTrail=document.querySelector('nav[data-euler-canonical-breadcrumb],#euler-reader-view-navigation > nav.euler-breadcrumb,[data-euler-learning-chrome] > nav.euler-breadcrumb');
  let breadcrumb=serverTrail??intro.querySelector('nav.euler-breadcrumb');
  const back=intro.querySelector(':scope > a.back-link');
  if(!breadcrumb){
    breadcrumb=document.createElement('nav');breadcrumb.className='euler-breadcrumb';breadcrumb.setAttribute('aria-label','Breadcrumb');breadcrumb.dataset.eulerDynamicBreadcrumb='';
    const list=document.createElement('ol'),parent=document.createElement('li'),anchor=document.createElement('a'),current=document.createElement('li'),label=document.createElement('span');
    anchor.textContent='Labs';anchor.href=hosted?eulerHref('/labs/'):back?.getAttribute('href')??'/play/';
    label.textContent=title.textContent;label.setAttribute('aria-current','page');parent.append(anchor);current.append(label);list.append(parent,current);breadcrumb.append(list);
  }
  intro.prepend(breadcrumb);
  if(back&&!back.id&&!back.querySelector('[id],math,svg'))back.remove();
  if (!title.id) title.id = frameTitle.id;
  title.classList.add('euler-lab__title'); question.classList.add('euler-lab__question');
  frameTitle.replaceWith(title); frameQuestion.replaceWith(question);
  frame.setAttribute('aria-labelledby', title.id);
  const notice = frame.querySelector(':scope > .euler-lab__notice');
  if (notice) notice.open = false;
  frame.dataset.eulerSingleLabReady = 'true';
  document.defaultView?.dispatchEvent(new Event('euler:lab-frame-ready'));
}

export function mountLabFrame(host, options) {
  const controller = mountSharedLabFrame(host, options), frame = controller.stage.closest('.euler-lab');
  if (typeof document !== 'undefined') queueMicrotask(() => adoptSingleLabLead(frame, options));
  return controller;
}

let nextExplorerFrame = 0;

/** Wrap a mounted workshop without replacing its controls, listeners or model. */
export function enhanceExplorer(host) {
  const workshop = [...host.children].find(node => /(?:^|\s)[\w-]+-workshop(?:\s|$)/.test(node.className || ''));
  const sourceTable = workshop?.querySelector('table');
  const section = host.closest('section');
  const heading = section?.querySelector('h2, h3');
  const authoredIntro = workshop?.querySelector(':scope > p');
  const context = host.previousElementSibling?.matches('p') ? host.previousElementSibling : section?.querySelector('p');
  if (!workshop || !sourceTable || !heading || !(authoredIntro || context)) return null;
  const title = heading.textContent.trim();
  const question = (context || authoredIntro).textContent.trim();
  const notice = (authoredIntro || context).textContent.trim();
  if (!title || !question || !notice) return null;

  const initial = [...workshop.querySelectorAll('input, select, textarea')].map(input => ({ input, value: input.value, checked: input.checked }));
  const restore = [...workshop.querySelectorAll('button')].find(button => /^restore\b/i.test(button.textContent.trim()));
  const reset = () => {
    if (restore) restore.click();
    else for (const {input, value, checked} of initial) {
      input.value = value;
      if (input.type === 'checkbox' || input.type === 'radio') input.checked = checked;
      input.dispatchEvent(new Event(input.type === 'range' ? 'input' : 'change', {bubbles:true}));
    }
    syncNumbers();
  };
  const controls = document.createElement('fieldset');
  controls.append(Object.assign(document.createElement('legend'), {textContent:'Workshop controls'}));
  for (const child of [...workshop.children]) {
    if (child.matches('fieldset, .dice-controls')) controls.append(child);
  }
  const controller = mountLabFrame(host, {
    id:`unhurried-explorer-${++nextExplorerFrame}`, title, question, notice, controls, reset,
    figureLabel:title, status:'Workshop ready.'
  });
  const frame = controller.stage.closest('.euler-lab');
  // A workshop can contain keyboard-operable controls, so it cannot be an image.
  controller.stage.removeAttribute('role');
  controller.stage.removeAttribute('aria-label');
  controller.stage.append(workshop);
  const form = frame.querySelector('form');
  form.addEventListener('submit', event => event.preventDefault());

  const pairs = [];
  for (const range of frame.querySelectorAll('input[type="range"]')) {
    const number = document.createElement('input');
    number.type = 'number';
    for (const attr of ['min','max','step']) if (range.hasAttribute(attr)) number.setAttribute(attr, range.getAttribute(attr));
    number.value = range.value;
    const label = [...range.labels || []].map(node => node.querySelector('span')?.textContent || node.textContent).join(' ').trim();
    number.setAttribute('aria-label', `${label || 'Value'} (number)`);
    range.insertAdjacentElement('afterend', number);
    const update = () => {
      if (number.value === '' || !Number.isFinite(number.valueAsNumber)) return;
      const value = Math.max(Number(range.min || -Infinity), Math.min(Number(range.max || Infinity), number.valueAsNumber));
      range.value = String(value);
      range.dispatchEvent(new Event('input', {bubbles:true}));
      number.value = range.value;
    };
    number.addEventListener('change', update);
    range.addEventListener('input', () => { number.value = range.value; });
    pairs.push([range, number]);
  }
  function syncNumbers() { for (const [range, number] of pairs) { number.value = range.value; number.disabled = range.disabled; } }
  frame.addEventListener('click', () => queueMicrotask(syncNumbers));
  frame.addEventListener('change', () => queueMicrotask(syncNumbers));

  const copyTable = () => {
    const source = workshop.querySelector('table');
    const current = frame.querySelector('.euler-lab__table');
    if (!source || !current) return;
    const table = source.cloneNode(true);
    table.classList.add('euler-lab__table');
    for (const element of [table, ...table.querySelectorAll('[id]')]) element.removeAttribute('id');
    for (const element of table.querySelectorAll('[headers], [aria-labelledby], [aria-describedby]')) {
      element.removeAttribute('headers'); element.removeAttribute('aria-labelledby'); element.removeAttribute('aria-describedby');
    }
    current.replaceWith(table);
  };
  copyTable();
  const observer = new MutationObserver(copyTable);
  observer.observe(workshop, {childList:true, subtree:true, characterData:true});
  syncNumbers();
  return {destroy() { observer.disconnect(); controller.destroy(); }};
}
