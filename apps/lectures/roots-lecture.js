(function () {
  'use strict';
  const M = window.MonodromyMath;
  const $ = id => document.getElementById(id);
  const KEY = 'euler-lift-return-roots-v1';
  const NS = 'http://www.w3.org/2000/svg';
  let cover = {n:6,k:4,j:1,r:1,p:0};
  let family = {n:2,k:2};
  let selector = 250;
  let storageAvailable = true;
  let saved = {};
  const notes = Array.from(document.querySelectorAll('[data-root-note]'));

  let savedRaw = null, recoveryPaused = false, recoveryControls = null;
  const recoveryMessage = 'Saved work could not be read safely. The original record is unchanged and saving is paused. Download its raw backup before explicitly replacing it; current writing can still be downloaded.';
  function pauseStorageRecovery() {
    recoveryPaused = true;
    $('roots-save-status').textContent = recoveryMessage;
    if (recoveryControls) return;
    recoveryControls = document.createElement('div');
    recoveryControls.setAttribute('role', 'region');
    recoveryControls.setAttribute('aria-label', 'Saved-work recovery');
    const backup = document.createElement('button');
    backup.type = 'button'; backup.id = 'roots-raw-backup';
    backup.textContent = 'Download unreadable saved-work backup';
    backup.disabled = savedRaw === null;
    backup.addEventListener('click', () => {
      let url, link;
      try {
        // A JSON wrapper retains every stored UTF-16 code unit, even a lone surrogate.
        const data = JSON.stringify({ schemaVersion: 1, storageKey: KEY, raw: savedRaw }, null, 2);
        url = URL.createObjectURL(new Blob([data], { type: 'application/json;charset=utf-8' }));
        link = document.createElement('a'); link.href = url; link.download = 'roots-unreadable-saved-work.json';
        document.body.appendChild(link); link.click();
        $('roots-save-status').textContent = 'Raw backup requested. The original record is unchanged and saving remains paused.';
      } catch (_) { $('roots-save-status').textContent = 'The raw backup could not be prepared. The original record is unchanged and saving remains paused.'; }
      finally { link?.remove(); if (url) setTimeout(() => URL.revokeObjectURL(url), 1000); }
    });
    const replace = document.createElement('button');
    replace.type = 'button'; replace.id = 'roots-replace-saved-work';
    replace.textContent = 'Replace saved record with this page';
    replace.addEventListener('click', () => {
      if (!window.confirm('Replace the unreadable saved record with the current page? Download the raw backup first to retain the original.')) return;
      try {
        if (localStorage.getItem(KEY) !== savedRaw) {
          $('roots-save-status').textContent = 'The stored record changed after this page opened. Reload to recover the latest record; nothing has been replaced.';
          return;
        }
        recoveryPaused = false;
        storageAvailable = true;
        persist();
        if (!storageAvailable) {
          recoveryPaused = true;
          $('roots-save-status').textContent = 'Replacement could not be saved. The original record is unchanged and saving remains paused; download current writing before leaving.';
          return;
        }
        recoveryControls.hidden = true;
      } catch (_) {
        recoveryPaused = true;
        $('roots-save-status').textContent = 'Stored work is still unavailable. Nothing has been replaced and saving remains paused; download current writing before leaving.';
      }
    });
    recoveryControls.append(backup, replace);
    $('roots-save-status').after(recoveryControls);
  }
  function integerText(value) {
    if (!/^-?\d{1,6}$/.test(value.trim())) throw new Error('Enter an integer in every field, using - for a negative sign.');
    const result = Number(value.trim());
    if (!Number.isSafeInteger(result)) throw new Error('Enter bounded integers only.');
    return result;
  }
  const turn = q => M.formatTurn(q);
  const asNumber = q => q.n/q.d;
  function point(element, cx, cy, radius, q) {
    const angle = 2*Math.PI*asNumber(q);
    element.setAttribute('cx', cx+radius*Math.cos(angle));
    element.setAttribute('cy', cy-radius*Math.sin(angle));
  }
  function status() {
    $('roots-save-status').textContent = storageAvailable
      ? 'Notes and successfully computed cases are saved in this browser. Download a portable copy.'
      : 'Browser storage is unavailable. Notes work for this visit; download a copy to keep them.';
  }
  function persist() {
    if (recoveryPaused) { $('roots-save-status').textContent = recoveryMessage; return; }
    const writing = Object.fromEntries(notes.map(node => [node.dataset.rootNote,node.value.slice(0,8000)]));
    try { localStorage.setItem(KEY,JSON.stringify({cover,family,selector,writing})); }
    catch (_) { storageAvailable = false; }
    status();
  }
  function renderCover() {
    const {n,k,j,r,p} = cover;
    const a = M.analyze(n,k), t = M.traverse(n,k,j,r), at = M.lift(n,k,j,r,p);
    $('cover-progress').value = p;
    $('cover-progress-value').textContent = turn({n:p,d:1000});
    point($('cover-base-point'),155,165,100,at.baseWrappedTurn);
    point($('cover-lift-point'),465,165,100,at.liftWrappedTurn);
    point($('cover-start-point'),465,165,100,{n:j,d:n});
    const candidates = $('cover-candidates'); candidates.replaceChildren();
    for (let label=0;label<n;label++) {
      const q = M.lift(n,k,label,r,p).liftWrappedTurn;
      const dot = document.createElementNS(NS,'circle');
      dot.setAttribute('r','4'); dot.setAttribute('class','root-candidate'); point(dot,465,165,100,q);
      const text = document.createElementNS(NS,'text');
      // Fixed labels name the fiber above 1; candidate dots move between them.
      const angle = 2*Math.PI*label/n;
      text.setAttribute('x',465+118*Math.cos(angle)); text.setAttribute('y',170-118*Math.sin(angle));
      text.setAttribute('text-anchor','middle'); text.textContent=label;
      candidates.append(dot,text);
    }
    $('cover-turns').textContent = turn(at.baseTurn)+' / '+turn(at.liftTurn);
    $('cover-trace').textContent = t.sheetTrace.join(' → ');
    $('cover-cycles').textContent = a.cycles.map(c => '('+c.join(' ')+')').join(' ');
    $('cover-first-return').textContent = a.firstReturn+' traversal'+(a.firstReturn===1?'':'s');
    $('cover-closure').textContent = 'After '+r+' traversal'+(r===1?'':'s')+', the lift ends at label '+t.endpointSheet+
      (t.closed?' and is closed. Its signed turns upstairs: '+turn(t.liftTurns)+'.':' and is not closed.');
    $('cover-original-root').textContent = 'The original map f_'+k+'(z)=z^'+k+
      (a.rootExists?' has exactly '+n+' continuous '+n+'th roots on S¹.':' has no continuous '+n+'th root on S¹.')+
      ' Repeated-traversal closure answers a different question.';
    $('cover-snapshot').textContent = 'Shown: n='+n+', k='+k+', j='+j+', r='+r+', progress='+p+'/1000.';
    $('cover-desc').textContent = 'Power cover of order '+n+', winding '+k+', starting label '+j+'. At progress '+p+
      '/1000 through '+r+' traversals, the input has accumulated '+turn(at.baseTurn)+' turns and the root angle is '+turn(at.liftTurn)+
      ' turns. The endpoint label is '+t.endpointSheet+'. Numbered labels stay fixed at the fiber above input 1; candidate dots move.';
  }
  function commitCover() {
    try {
      const next = {n:integerText($('cover-n').value),k:integerText($('cover-k').value),
        j:integerText($('cover-j').value),r:integerText($('cover-r').value),p:cover.p};
      M.traverse(next.n,next.k,next.j,next.r); cover=next;
      $('transport-error').textContent=''; $('transport-result').hidden=false;
      renderCover(); persist();
    } catch (error) { $('transport-error').textContent=error.message; $('transport-result').hidden=true; }
  }
  function renderFamily() {
    const a = M.analyze(family.n,family.k), n=family.n, k=family.k;
    const power = a.rootExponent===0?'':a.rootExponent===1?' z':' z^'+a.rootExponent;
    $('family-roots').textContent = a.rootExists ? 'Exactly '+n+': h_j(z)=ζ_'+n+'^j'+power+', j=0,…,'+(n-1)+'.'
      : 'None: '+n+' does not divide '+k+'.';
    $('family-logs').textContent = a.logarithmExists ? 'All constants L(z)=2πiℓ, ℓ∈ℤ.' : 'None: winding '+k+' is not zero.';
    $('family-reason').textContent = a.logarithmExists ? 'The map is constant 1. Both kinds of continuous choices exist.'
      : a.rootExists ? 'Divisibility by '+n+' permits a root. A logarithm would require zero winding.'
      : 'Every point has '+n+' roots, but none can be selected continuously on the entire circle. A logarithm also fails.';
    $('family-snapshot').textContent = 'Shown: n='+n+', k='+k+'. This classification concerns a single traversal of the original parameter circle.';
  }
  function commitFamily() {
    try {
      const next = {n:integerText($('family-n').value),k:integerText($('family-k').value)};
      M.analyze(next.n,next.k); family=next;
      $('root-family-error').textContent=''; $('root-family-result').hidden=false;
      renderFamily(); persist();
    } catch (error) { $('root-family-error').textContent=error.message; $('root-family-result').hidden=true; }
  }
  function renderSelector() {
    // Exact integer seam convention: output turns 2p/1000, Arg in (-1/2,1/2].
    const p=selector, residue=(2*p)%1000, principalNumerator=2*residue>1000?residue-1000:residue;
    const continuous={n:p,d:1000}, principal={n:principalNumerator,d:2000};
    const same=((principalNumerator-2*p)/1000)%2===0;
    $('selector-progress').value=p; $('selector-progress-value').textContent=turn(continuous);
    point($('selector-continuous'),155,150,90,continuous); point($('selector-principal'),465,150,90,principal);
    $('selector-values').textContent='s='+turn(continuous)+'. Continuous root turn: '+turn(continuous)+
      '. Principal root turn: '+turn(principal)+'. The selector '+(same?'agrees with h':'equals −h')+' here.'+
      (residue===500?' This is a branch-cut input; the selected seam value is +i.':'');
    $('selector-desc').textContent=$('selector-values').textContent+
      ' At either cut crossing, one-sided limits of the principal selector differ even though the continuous root remains continuous.';
  }
  try {
    savedRaw = localStorage.getItem(KEY);
    if (savedRaw !== null) {
      saved = JSON.parse(savedRaw);
      if (!saved || typeof saved !== 'object' || Array.isArray(saved)) { saved = {}; throw new TypeError('Invalid stored work.'); }
      if (saved.writing !== undefined && (!saved.writing || typeof saved.writing !== 'object' || Array.isArray(saved.writing))) throw new TypeError('Invalid stored writing.');
      if (saved.cover !== undefined) { const c=saved.cover; M.lift(c.n,c.k,c.j,c.r,c.p); }
      if (saved.family !== undefined) M.analyze(saved.family.n,saved.family.k);
      if (saved.selector !== undefined && (!Number.isInteger(saved.selector) || saved.selector < 0 || saved.selector > 1000)) throw new TypeError('Invalid stored selector.');
      if (saved.cover !== undefined) { const c=saved.cover; cover={n:c.n,k:c.k,j:c.j,r:c.r,p:c.p}; }
      if (saved.family !== undefined) family={n:saved.family.n,k:saved.family.k};
      if (saved.selector !== undefined) selector=saved.selector;
    }
  } catch (_) { pauseStorageRecovery(); }
  for (const field of ['n','k','j','r']) $('cover-'+field).value=cover[field];
  $('family-n').value=family.n; $('family-k').value=family.k;
  for (const node of notes) {
    if (saved.writing&&typeof saved.writing[node.dataset.rootNote]==='string') node.value=saved.writing[node.dataset.rootNote].slice(0,8000);
    node.maxLength=8000; node.addEventListener('input',persist);
  }
  $('transport-form').addEventListener('submit',event=>{event.preventDefault();commitCover();});
  $('root-family-form').addEventListener('submit',event=>{event.preventDefault();commitFamily();});
  document.querySelectorAll('[data-cover]').forEach(button=>button.addEventListener('click',()=>{
    const values=button.dataset.cover.split(','); ['n','k','j','r'].forEach((key,i)=>{$('cover-'+key).value=values[i];}); commitCover();
  }));
  document.querySelectorAll('[data-family]').forEach(button=>button.addEventListener('click',()=>{
    const [n,k]=button.dataset.family.split(','); $('family-n').value=n; $('family-k').value=k; commitFamily();
  }));
  $('cover-progress').addEventListener('input',()=>{cover={...cover,p:Number($('cover-progress').value)};renderCover();persist();});
  $('selector-progress').addEventListener('input',()=>{selector=Number($('selector-progress').value);renderSelector();persist();});
  $('roots-print').addEventListener('click',()=>window.print());
  $('roots-download').addEventListener('click',()=>{
    const sections=['Lift, return, choose a root — study notes','Last successfully computed cases:',JSON.stringify({cover,family,selector},null,2),
      'Unsubmitted form edits are not included. Written arguments are not automatically checked.'];
    notes.forEach(node=>sections.push('\n'+node.dataset.rootNote+'\n'+node.value));
    const url=URL.createObjectURL(new Blob([sections.join('\n')],{type:'text/plain;charset=utf-8'}));
    const link=document.createElement('a');link.href=url;link.download='lift-return-roots-notes.txt';link.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  renderCover();renderFamily();renderSelector();persist();
})();
