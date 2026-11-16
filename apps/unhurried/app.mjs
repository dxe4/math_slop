import { nativeAssetURL, nativePageURL, nativeIndexURL } from './native-paths.mjs';
import {STORAGE_KEY, emptyNotebook, validateNotebook, mergeNotebooks, initializeSharedNotebook} from './state.mjs';
import {normalizeSearch, rankArticles} from './search.mjs';
import {courseResume} from './course-progress.mjs';
document.documentElement.classList.add('js');
const $ = (s,root=document) => root.querySelector(s);
const $$ = (s,root=document) => [...root.querySelectorAll(s)];

const EXPLORERS = [
  { selector: "[data-function-set-explorer]", module: "./function-set-roundtrips.mjs", exportName: "mountFunctionSetRoundTrips", mounted: "functionSetMounted", warning: "The set round-trip controls could not load. The complete exact worked maps, proof and changed interval task remain available below." },
  { selector: "[data-interpolation-noise-explorer]", module: "./interpolation-noise.mjs", exportName: "mountInterpolationNoise", mounted: "interpolationNoiseMounted", warning: "The interpolation controls could not load. The exact worked record, sharp bound and complete proof remain available below." },
  { selector: "[data-kl-coarsening-explorer]", module: "./kl-coarsening.mjs", exportName: "mountCoarsening", mounted: "klCoarseningMounted", warning: "The coarsening controls could not load. The complete exact source, coarse laws and conditional-divergence worked setting remain available below." },
  { selector: "[data-pairwise-independence-explorer]", module: "./pairwise-independence.mjs", exportName: "mountPairwise", mounted: "pairwiseIndependenceMounted", warning: "The pairwise controls could not load. The complete exact joint law, three pair tables and count comparison remain available below." },
  { selector: "[data-stationary-reversal-explorer]", module: "./stationary-reversal.mjs", exportName: "mountReversal", mounted: "stationaryReversalMounted", warning: "The reversal controls could not load. The complete exact stationary flows and worked path comparison remain available below." },
  { selector: "[data-markov-block-explorer]", module: "./markov-block.mjs", exportName: "mountMarkovBlock", mounted: "markovBlockMounted", warning: "The grouping controls could not load. The complete exact matrix, block sums and worked initial mixture remain available below." },
  { selector: "[data-inclusion-explorer]", module: "./inclusion-weighting.mjs", exportName: "mountInclusion", mounted: "inclusionMounted", warning: "The inclusion controls could not load. The complete exact sampling law and worked weighting inspection remain available below." },
  { selector: "[data-inversion-explorer]", module: "./binomial-inversion.mjs", exportName: "mountBinomialInversion", mounted: "inversionMounted", warning: "The inversion controls could not load. The complete continuous interval family and exact worked coverage remain available below." },
  { selector: "[data-empirical-mi-explorer]", module: "./empirical-mi.mjs", exportName: "mountEmpiricalMI", mounted: "empiricalMiMounted", warning: "The empirical-information controls could not load. The exact worked source, sample law and joint table remain available below." },
  { selector: "[data-reporting-explorer]", module: "./reporting.mjs", exportName: "mountReporting", mounted: "reportingMounted", warning: "The reporting controls could not load. The exact worked protocol and pair weights remain available below." },
  { selector: "[data-bag-variance-explorer]", module: "./bag-variance.mjs", exportName: "mountBagVariance", mounted: "bagVarianceMounted", warning: "The bag controls could not load. The exact worked count laws and explanations remain available below." },
  { selector: "[data-block-code-explorer]", module: "./block-code.mjs", exportName: "mountBlockCode", mounted: "blockCodeMounted", warning: "The block controls could not load. The exact pair dictionary and exhaustive proof remain below." },
  { selector: "[data-branching-explorer]", module: "./branching.mjs", exportName: "mountBranching", mounted: "branchingMounted", warning: "The deadline controls could not load. The exact worked selection and extinction proofs remain below." },
  { selector: "[data-sequential-explorer]", module: "./sequential.mjs", exportName: "mountSequential", mounted: "sequentialMounted", warning: "The procedure controls could not load. The exact joint counts and corrected worked rule remain below." },
  { selector: "[data-doubling-explorer]", module: "./doubling.mjs", exportName: "mountDoubling", mounted: "doublingMounted", warning: "The cap controls could not load. The exact worked law and stopping proof remain below." },
  { selector: "[data-queue-clock-explorer]", module: "./queue-clock.mjs", exportName: "mountQueueClock", mounted: "queueClockMounted", warning: "The observation controls could not load. The worked clock/event comparison and exact proof remain below." },
  { selector: "[data-stopping-explorer]", module: "./stopping.mjs", exportName: "mountStoppingExplorer", mounted: "stoppingMounted", warning: "The horizon controls could not load. The exact worked counts, duration identity and infinite-time proof remain below." },
  { selector: "[data-simpson-explorer]", module: "./simpson.mjs", exportName: "mountSimpsonExplorer", mounted: "simpsonMounted", warning: "The allocation controls could not load. The worked counts and exact tie check below remain available." },
  { selector: "[data-homotopy-explorer]", module: "./homotopy.mjs", exportName: "mountHomotopyExplorer", mounted: "homotopyMounted", warning: "The loop controls could not load. The worked contraction below is still available, including the exact origin-crossing check." },
  { selector: "[data-square-explorer]", module: "./square.mjs", exportName: "mountSquareExplorer", mounted: "squareMounted", warning: "The editable square could not load. The original worked setting and explanation remain below; you can also trace the moves on paper." },
  { selector: "[data-voting-explorer]", module: "./voting.mjs", exportName: "mountVotingExplorer", mounted: "votingMounted", warning: "The editable ballots could not load. The original rankings, vote counts and explanation are still available below." },
  { selector: "[data-dice-explorer]", module: "./dice.mjs", exportName: "mountDiceExplorer", mounted: "diceMounted", warning: "The editable dice grid could not load. The worked grid and the explanation are still available below." },
];
for (const explorer of EXPLORERS) {
  const hosts = $$(explorer.selector);
  if (!hosts.length) continue;
  for (const host of hosts) { host.dataset.state = 'loading'; host.setAttribute('aria-busy', 'true'); }
  const fail = host => {
    if (host.dataset[explorer.mounted] === 'true') { host.dataset.state = 'ready'; host.setAttribute('aria-busy', 'false'); return; }
    host.dataset.state = 'error'; host.setAttribute('aria-busy', 'false');
    const notice = document.createElement('p'); notice.setAttribute('role', 'status');
    if (explorer.mounted === 'squareMounted') notice.dataset.squareError = '';
    if (explorer.mounted === 'votingMounted') notice.dataset.votingError = '';
    notice.textContent = explorer.warning; host.prepend(notice);
  };
  import(explorer.module).then(async module => {
    if (typeof module[explorer.exportName] !== 'function') throw new Error('Explorer is unavailable.');
    for (const host of hosts) {
      try {
        await module[explorer.exportName](host);
        const { enhanceExplorer } = await import('./lab-frame-adapter.mjs');
        enhanceExplorer(host);
        host.dataset.state = 'ready'; host.setAttribute('aria-busy', 'false');
      } catch { fail(host); }
    }
  }).catch(() => { for (const host of hosts) fail(host); });
}

const feedbackForm = $('#feedback-form');
if (feedbackForm) import('./feedback.mjs').then(({mountFeedback}) => {
  mountFeedback(feedbackForm);
}).catch(() => {
  $('#feedback-loading').textContent = 'The guided form could not load. Use the plain-text template below to record what you noticed.';
});

const tilingExplorer = $('[data-tiling-explorer]');
if (tilingExplorer) import('./tiling.mjs').then(({mountTilingExplorer}) => {
  mountTilingExplorer(tilingExplorer);
}).catch(() => {
  const notice = document.createElement('p');
  notice.textContent = 'The editable board could not load. The worked board and the argument below are still available; you can also try the changes on paper.';
  tilingExplorer.prepend(notice);
});

const acquaintanceBuilder = $('[data-acquaintance-builder]');
if (acquaintanceBuilder) {
  import('./acquaintances.mjs').then(({ mountAcquaintanceBuilder }) => {
    mountAcquaintanceBuilder(acquaintanceBuilder);
  }).catch(() => {
    const notice = document.createElement('p');
    notice.textContent = 'The interactive network could not load. You can use the worked example below or draw a network on paper.';
    acquaintanceBuilder.prepend(notice);
  });
}

// Discovery progressively enhances the full static list.
const filterForm = $('#filters');
if(filterForm) {
  const cards=$$('[data-card]');
  const cardById=new Map(cards.map(card=>[card.dataset.id,card]));
  let records=cards.map(card=>({id:card.dataset.id,title:$('h3',card)?.textContent||'',summary:card.dataset.search,topic:card.dataset.topic,topicId:card.dataset.topic,level:card.dataset.level,minutes:card.dataset.minutes ? Number(card.dataset.minutes) : null}));
  let fullTextReady=false,loading=null,searchError=false,limit=24,matching=[];
  const more=document.createElement('button');more.type='button';more.className='button secondary load-more';more.id='load-more';more.textContent='Show 24 more explorations';$('#article-grid').after(more);
  const searchNote=document.createElement('p');searchNote.id='search-note';searchNote.className='small muted';searchNote.setAttribute('role','status');filterForm.after(searchNote);
  const fields=['search','topic','level','time'];
  const params=new URLSearchParams(location.search);
  for(const id of fields) { const v=params.get(id==='search'?'q':id); if(v!==null) $('#'+id).value=v; }
  const filter=(keepLimit=false)=>{
    if(!keepLimit)limit=24;
    const query=$('#search').value.trim();
    const topic=$('#topic').value,level=$('#level').value,time=Number($('#time').value)||Infinity;
    matching=rankArticles(records,query,{topic,level,time});
    const count=matching.length,visibleIds=new Set(matching.slice(0,limit).map(a=>a.id));
    for(const card of cards)card.hidden=!visibleIds.has(card.dataset.id);
    for(const record of matching)$('#article-grid').append(cardById.get(record.id));
    $('#result-count').textContent=`${count} exploration${count===1?'':'s'}${count>limit?` · showing ${limit}`:''}`;
    $('#empty-results').hidden=count>0;
    $('#surprise').disabled=count===0;
    more.hidden=count<=limit;more.textContent=`Show ${Math.min(24,Math.max(0,count-limit))} more explorations`;
    const next=new URLSearchParams();
    if(query)next.set('q',query);if(topic)next.set('topic',topic);if(level)next.set('level',level);if(Number.isFinite(time))next.set('time',String(time));
    history.replaceState(null,'',location.pathname+(next.size?'?'+next.toString():''));
    if(query&&!fullTextReady&&!loading&&!searchError) {
      searchNote.textContent='Searching the full article text…';
      loading=fetch(nativeAssetURL('search-index.json')).then(response=>{if(!response.ok)throw new Error('Search unavailable');return response.json();}).then(index=>{
        records=index.filter(record=>cardById.has(record.id));fullTextReady=true;searchNote.textContent='Search includes the complete article text.';filter();
      }).catch(()=>{searchError=true;searchNote.textContent='Full-text search is unavailable. Titles and summaries are still searchable.';}).finally(()=>{loading=null;});
    } else if(!query) searchNote.textContent='';
  };
  filterForm.addEventListener('submit',e=>{e.preventDefault();filter()});
  filterForm.addEventListener('input',()=>filter());
  filterForm.addEventListener('change',()=>filter());
  filterForm.addEventListener('reset',()=>setTimeout(filter,0));
  more.addEventListener('click',()=>{limit+=24;filter(true);});
  $('#surprise').addEventListener('click',()=>{if(matching.length)location.href=nativePageURL('article',matching[Math.floor(Math.random()*matching.length)].id);});
  filter();
}

// Filters on other collections preserve the complete, readable static fallback.
function collectionFilter({form,cardSelector,fields,countId,emptyId}) {
  const container=$(form);if(!container)return;
  const cards=$$(cardSelector),params=new URLSearchParams(location.search);
  for(const {id,param} of fields){const control=$('#'+id);if(control&&params.has(param))control.value=params.get(param);}
  const run=()=>{
    const values=fields.map(field=>({...field,value:$('#'+field.id)?.value||''}));let count=0;
    for(const card of cards){card.hidden=!values.every(({value,dataset,search})=>!value||(search?normalizeSearch(card.dataset[dataset]||card.textContent).includes(normalizeSearch(value)):card.dataset[dataset]===value));if(!card.hidden)count++;}
    const output=$('#'+countId);if(output)output.textContent=`${count} ${cardSelector.includes('course')?'series':cardSelector.includes('experiment')?'experiments':'terms'}`;
    const empty=$('#'+emptyId);if(empty)empty.hidden=count!==0;
    const next=new URLSearchParams();for(const {value,param} of values)if(value)next.set(param,value);
    history.replaceState(null,'',location.pathname+(next.size?'?'+next:'')+location.hash);
  };
  container.addEventListener('input',run);container.addEventListener('change',run);container.addEventListener('submit',e=>{e.preventDefault();run();});container.addEventListener('reset',()=>setTimeout(run,0));run();
}
collectionFilter({form:'#course-filters',cardSelector:'[data-course-card]',fields:[{id:'course-topic',param:'topic',dataset:'topic'}],countId:'course-count',emptyId:'empty-courses'});
collectionFilter({form:'#lab-filters',cardSelector:'[data-experiment-card]',fields:[{id:'lab-search',param:'q',dataset:'search',search:true},{id:'lab-topic',param:'topic',dataset:'topic'}],countId:'lab-count',emptyId:'empty-labs'});
collectionFilter({form:'#glossary-filters',cardSelector:'[data-glossary-entry]',fields:[{id:'glossary-search',param:'q',dataset:'search',search:true}],countId:'glossary-count',emptyId:'empty-glossary'});

const courseContext=new URLSearchParams(location.search).get('course');
const currentArticle=$('[data-article-id]')?.dataset.articleId;
if(courseContext&&currentArticle&&!$('#euler-learning-entry'))showCourseContext().catch(()=>{});
async function showCourseContext(){
  const response=await fetch(nativeAssetURL('courses-index.json'));if(!response.ok)return;
  const courses=await response.json(),course=courses.find(c=>c.id===courseContext&&c.articleIds.includes(currentArticle));if(!course)return;
  const index=course.articleIds.indexOf(currentArticle);
  const nav=document.createElement('nav');nav.className='course-context reading-width';nav.id='course-context';nav.setAttribute('aria-label','Your place in this course');
  const info=document.createElement('p');info.textContent=`Exploration ${index+1} of ${course.articleIds.length} · ${course.title}`;nav.append(info);
  const links=document.createElement('div');links.className='course-context-links';
  const add=(label,href)=>{const a=document.createElement('a');a.textContent=label;a.href=href;links.append(a);};
  if(index>0)add('← Previous exploration',nativePageURL('article',course.articleIds[index-1],{course:course.id}));
  add('Back to the path',nativePageURL('course',course.id));
  if(index<course.articleIds.length-1)add('Next exploration →',nativePageURL('article',course.articleIds[index+1],{course:course.id}));
  add('Read on its own',location.pathname);nav.append(links);$('.article-header').before(nav);
  const ending=nav.cloneNode(true);ending.removeAttribute('id');ending.classList.remove('reading-width');$('#takeaway')?.after(ending);
}

const needsNotebook = $('[data-save], [data-complete], [data-note-save], [data-progress-for], [data-course-resume], #notebook-items');
if(needsNotebook) initializeNotebook().catch(()=>{
  const message='The notebook could not load. Your articles are still available; reload to try saving again.';
  for(const control of $$('[data-save], [data-complete], [data-note-save], #article-note, #export-notebook, #import-notebook, #clear-notebook')) {
    control.disabled=true;
    control.title=message;
  }
  const target=$('#storage-status')||$('#note-status'); if(target)target.textContent=message;
  for (const status of $$('[data-resume-status]')) status.textContent = 'Saved progress could not load. Reload to show your place in this path.';
});

async function initializeNotebook(){
  const response=await fetch(nativeAssetURL('library.json'));
  if(!response.ok)throw new Error('Library unavailable');
  const library=await response.json();
  if (await initializeSharedNotebook({ library, courseResume, nativePageURL, nativeIndexURL })) return;
  const knownIds=new Set(library.map(a=>a.id));
  const byId=new Map(library.map(a=>[a.id,a]));
  let notebook=emptyNotebook(),storageWarning='',blockedCorrupt=false,notebookRevision=0,importRequest=0,storedNotebookRaw;
  let unpersistedNotebook=false,noteDraftChanged=false;
  try{
    const raw=localStorage.getItem(STORAGE_KEY);storedNotebookRaw=raw;
    if(raw) { try{notebook=validateNotebook(JSON.parse(raw),knownIds)}catch{blockedCorrupt=true;storageWarning='The stored notebook could not be read. It has been left untouched. Export the raw backup or clear it in your notebook before saving new entries.';} }
  }catch{storageWarning='Browser storage is unavailable. Changes work for this visit; export a copy before leaving.';}
  const announce=message=>{const el=$('#note-status')||$('#import-status');if(el)el.textContent=message;};
  const save=()=>{
    notebookRevision++;unpersistedNotebook=true;
    if(blockedCorrupt){announce(storageWarning);return false;}
    try{
      const currentRaw=localStorage.getItem(STORAGE_KEY);
      if(currentRaw!==storedNotebookRaw && !(storedNotebookRaw===undefined && currentRaw===null)){
        storageWarning='The saved notebook changed since this page loaded. Current changes are kept on this page; export them and reload before saving.';
        announce(storageWarning);return false;
      }
      const nextRaw=JSON.stringify(notebook);localStorage.setItem(STORAGE_KEY,nextRaw);storedNotebookRaw=nextRaw;unpersistedNotebook=false;storageWarning='';return true;
    }
    catch{storageWarning='Browser storage is unavailable. Changes are kept for this page only; export a copy before leaving.';const el=$('#storage-status')||$('#note-status');if(el)el.textContent=storageWarning;return false;}
  };
  const toggle=(key,id)=>{
    if(blockedCorrupt){announce(storageWarning);return;}
    if(notebook[key].includes(id))notebook[key]=notebook[key].filter(v=>v!==id);else notebook[key].push(id);
    const persisted=save();update();announce(persisted?'Notebook updated in this browser.':storageWarning||'Updated for this page only. Browser storage is unavailable.');
  };
  for(const el of $$('[data-save]'))el.addEventListener('click',()=>toggle('bookmarks',el.dataset.save));
  for(const el of $$('[data-complete]'))el.addEventListener('click',()=>toggle('completed',el.dataset.complete));
  $('#article-note')?.addEventListener('input',()=>{notebookRevision++;noteDraftChanged=true;});
  const noteButton=$('[data-note-save]');
  if(noteButton) {
    const id=noteButton.dataset.noteSave;
    $('#article-note').value=notebook.notes[id]||'';
    noteButton.addEventListener('click',()=>{
      if(blockedCorrupt){announce(storageWarning);return;}
      const text=$('#article-note').value.trim();
      if(text)notebook.notes[id]=text;else delete notebook.notes[id];
      noteDraftChanged=false;
      const persisted=save();update();announce(persisted?(text?'Your thought is saved in this browser.':'Your note has been removed.'):storageWarning||'Your thought is kept for this page only. Browser storage is unavailable.');
    });
  }
  function update(){
    for(const el of $$('[data-save]')){const active=notebook.bookmarks.includes(el.dataset.save);el.setAttribute('aria-pressed',String(active));el.textContent=active?'♥ Saved for later':'♡ Save for later';}
    for(const el of $$('[data-complete]')){const active=notebook.completed.includes(el.dataset.complete);el.setAttribute('aria-pressed',String(active));el.textContent=active?'Explored ✓ · undo':'Mark as explored ✓';}
    for(const el of $$('[data-progress-for]'))el.textContent=notebook.completed.includes(el.dataset.progressFor)?'Explored ✓':'Not marked yet';
    for (const panel of $$('[data-course-resume]')) {
      const status = $('[data-resume-status]', panel);
      status.textContent = storageWarning;
      if (blockedCorrupt) continue;
      const ids = panel.dataset.articles.split(' ');
      const next = courseResume(ids, notebook.completed);
      const link = $('[data-resume-link]', panel), text = $('[data-resume-text]', panel);
      if (next.articleId) {
        const title = byId.get(next.articleId)?.title || 'this exploration';
        text.textContent = next.explored ? `The next article you haven’t marked explored is exploration ${next.index + 1} of ${ids.length}.` : 'Begin with the first exploration, or choose any module below.';
        link.textContent = `${next.explored ? 'Continue with' : 'Start with'} ${title} →`;
        link.href = nativePageURL('article',next.articleId,{course:panel.dataset.course});
      } else {
        text.textContent = 'Every article in this path is marked explored. You can return to the course practice or revisit any lesson.';
        link.textContent = `${panel.dataset.finishLabel} →`;
        link.href = panel.dataset.finish;
      }
    }
    if($('#storage-status'))$('#storage-status').textContent=storageWarning;
    if($('#notebook-items'))renderNotebook();
  }
  function renderNotebook(){
    const entries=[...new Set([...notebook.bookmarks,...notebook.completed,...Object.keys(notebook.notes)])];
    const container=$('#notebook-items');
    if(!entries.length){container.replaceChildren();const empty=document.createElement('div');empty.className='empty-notebook';const heading=document.createElement('h2');heading.textContent='A fresh page for a good idea.';const p=document.createElement('p');p.textContent='Save an exploration or write a thought at the end of an article. You’ll find it here when you return.';const link=document.createElement('a');link.className='button primary';link.href=nativeIndexURL('explore');link.textContent='Find your first idea ↗';empty.append(heading,p,link);container.append(empty);return;}
    container.replaceChildren();
    for(const id of entries){
      const a=byId.get(id);if(!a)continue;
      const entry=document.createElement('article');entry.className='notebook-entry';entry.dataset.notebookId=id;
      const heading=document.createElement('h2'),link=document.createElement('a');link.href=nativePageURL('article',id);link.textContent=a.title;heading.append(link);
      const tags=document.createElement('p');tags.className='note-tags';tags.textContent=[a.topic,notebook.bookmarks.includes(id)?'Saved for later':null,notebook.completed.includes(id)?'Explored ✓':null].filter(Boolean).join(' · ');entry.append(heading,tags);
      if(notebook.notes[id]){const note=document.createElement('p');note.className='note-text';note.textContent=notebook.notes[id];entry.append(note);}
      const remove=document.createElement('button');remove.className='text-button';remove.textContent='Remove from notebook';remove.addEventListener('click',()=>{if(!confirm(`Remove saved status and any note for “${a.title}”?`))return;notebook.bookmarks=notebook.bookmarks.filter(x=>x!==id);notebook.completed=notebook.completed.filter(x=>x!==id);delete notebook.notes[id];const persisted=save();update();announce(persisted?'Entry removed.':storageWarning||'Entry removed for this page only. Export before leaving.');});entry.append(remove);container.append(entry);
    }
  }
  const download=(data,name)=>{const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);};
  if(noteButton&&!$('#export-notebook')){
    const button=document.createElement('button');button.type='button';button.id='export-notebook';button.className='button secondary';
    button.textContent='Download notebook and current note';noteButton.parentElement.append(button);
  }
  $('#export-notebook')?.addEventListener('click',()=>{
    if(blockedCorrupt&&!noteButton){let raw;try{raw=localStorage.getItem(STORAGE_KEY)}catch{announce('Stored data is unavailable for export.');return;}download({warning:'Unreadable notebook backup',raw},'maths-unhurried-raw-backup.json');announce('Raw backup exported without changing stored data.');return;}
    // Recovery keeps the exact visible text, even though an explicit save trims it.
    const notes={...notebook.notes};
    if(noteButton){const id=noteButton.dataset.noteSave,text=$('#article-note').value;if(text!==''||noteDraftChanged||Object.hasOwn(notes,id))notes[id]=text;}
    const snapshot={...notebook,notes,exportedAt:new Date().toISOString()};
    try{
      validateNotebook(snapshot,knownIds); // Validate bounds without normalizing away draft whitespace.
      download(snapshot,'maths-unhurried-notebook.json');
      announce(blockedCorrupt?'Current-page notebook and note exported. Unreadable saved data is unchanged; open My notebook in another tab for its raw backup.':noteButton?'Notebook and current note exported. Keep this file as your backup.':'Notebook exported. Keep this file as your backup.');
    }catch(error){announce(`Could not export: ${error.message} Your writing is still on this page.`);}
  });
  $('#import-notebook')?.addEventListener('change',async event=>{
    const request=++importRequest,revision=notebookRevision;
    const input=event.target,file=input.files?.[0];if(!file)return;
    try{
      if(blockedCorrupt)throw new Error('Export the unreadable raw backup and clear the local notebook before importing.');
      if(file.size>16000000)throw new Error('Please choose a notebook file no larger than 16 MB (16,000,000 bytes).');
      const source=await file.text();
      if(request!==importRequest)return;
      if(revision!==notebookRevision)throw new Error('Your notebook changed while the file was loading. Choose the file again to merge with your current work.');
      const incoming=validateNotebook(JSON.parse(source),knownIds);
      const conflicts=Object.keys(incoming.notes).filter(id=>notebook.notes[id]&&incoming.notes[id]!==notebook.notes[id]);
      const message=`Merge ${incoming.bookmarks.length} saved articles, ${incoming.completed.length} explored articles, and ${Object.keys(incoming.notes).length} notes?${conflicts.length?` ${conflicts.length} existing note(s) differ and will be kept.`:''}`;
      if(!confirm(message)){announce('Import cancelled. Your notebook is unchanged.');return;}
      if(request!==importRequest)return;
      if(revision!==notebookRevision)throw new Error('Your notebook changed while the import was being confirmed. Choose the file again.');
      // A different tab may write while the native confirmation dialog is open,
      // before this tab has received its queued storage event.
      let observedRaw,readable=false;
      try{observedRaw=localStorage.getItem(STORAGE_KEY);readable=true;}catch{}
      if(readable && observedRaw!==storedNotebookRaw && !(storedNotebookRaw===undefined && observedRaw===null))throw new Error('The saved notebook changed while this page was open. Reload before importing; current work has not been replaced.');
      notebook=mergeNotebooks(notebook,incoming);if(noteButton&&!noteDraftChanged)$('#article-note').value=notebook.notes[noteButton.dataset.noteSave]||'';
      const persisted=save();update();announce(persisted?'Notebook imported. Existing notes were kept where they differed.':storageWarning||'Imported for this page only; export before leaving because storage is unavailable.');
    }catch(error){if(request===importRequest)announce(`Could not import: ${error.message}`);}finally{if(request===importRequest)input.value='';}
  });
  $('#clear-notebook')?.addEventListener('click',()=>{
    if(!confirm('Clear all saved articles, explored marks, and notes in this browser? Export a backup first if you want to keep them.'))return;
    importRequest++;notebookRevision++;
    try{localStorage.removeItem(STORAGE_KEY);storedNotebookRaw=null;blockedCorrupt=false;storageWarning='';unpersistedNotebook=false;}catch{unpersistedNotebook=true;storageWarning='Browser storage is unavailable. This page has been cleared, but stored data could not be accessed.';}
    notebook=emptyNotebook();noteDraftChanged=false;if($('#article-note'))$('#article-note').value='';
    update();announce(storageWarning||'Local notebook cleared.');
  });
  window.addEventListener('storage',event=>{
    if(event.key!==STORAGE_KEY && event.key!==null)return;
    importRequest++;notebookRevision++;
    if(unpersistedNotebook||noteDraftChanged){
      // Keep the original storage baseline: adopting a remote baseline here would
      // allow a later save to overwrite the other tab's work with this local copy.
      storageWarning='The saved notebook changed in another tab. This page has local work that has not been saved. Export it before reloading to see the other tab’s work.';
      update();announce(storageWarning);return;
    }
    try{
      const raw=localStorage.getItem(STORAGE_KEY);storedNotebookRaw=raw;
      notebook=raw?validateNotebook(JSON.parse(raw),knownIds):emptyNotebook();
      if(noteButton)$('#article-note').value=notebook.notes[noteButton.dataset.noteSave]||'';
      blockedCorrupt=false;storageWarning='';update();
    }catch{
      blockedCorrupt=true;
      storageWarning='Notebook changed in another tab but could not be read. Saving is paused to protect that data. Export a raw backup or clear it in your notebook before saving.';
      update();announce(storageWarning);
    }
  });
  update();
  document.documentElement.dataset.notebookReady = 'true';
}
