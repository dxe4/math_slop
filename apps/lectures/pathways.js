(function () {
  'use strict';
  const M=window.ProofRoutesMath, $=id=>document.getElementById(id);
  const KEY='euler-proof-pathways-v1';
  const notes=Array.from(document.querySelectorAll('[data-path-note]'));
  let state={b:4,L:16,E:1}, saved={}, storageAvailable=true;
  const setText=(id,value)=>{$(id).textContent=value;};
  const setString=values=>values.length?'{'+values.map(x=>String(x).replace('-','−')).join(', ')+'}':'∅';
  let savedRaw = null, recoveryPaused = false, recoveryControls = null;
  const recoveryMessage = 'Saved work could not be read safely. The original record is unchanged and saving is paused. Download its raw backup before explicitly replacing it; current writing can still be downloaded.';
  function pauseStorageRecovery() {
    recoveryPaused = true;
    $('pathways-status').textContent = recoveryMessage;
    if (recoveryControls) return;
    recoveryControls = document.createElement('div');
    recoveryControls.setAttribute('role', 'region');
    recoveryControls.setAttribute('aria-label', 'Saved-work recovery');
    const backup = document.createElement('button');
    backup.type = 'button'; backup.id = 'pathways-raw-backup';
    backup.textContent = 'Download unreadable saved-work backup';
    backup.disabled = savedRaw === null;
    backup.addEventListener('click', () => {
      let url, link;
      try {
        // A JSON wrapper retains every stored UTF-16 code unit, even a lone surrogate.
        const data = JSON.stringify({ schemaVersion: 1, storageKey: KEY, raw: savedRaw }, null, 2);
        url = URL.createObjectURL(new Blob([data], { type: 'application/json;charset=utf-8' }));
        link = document.createElement('a'); link.href = url; link.download = 'pathways-unreadable-saved-work.json';
        document.body.appendChild(link); link.click();
        $('pathways-status').textContent = 'Raw backup requested. The original record is unchanged and saving remains paused.';
      } catch (_) { $('pathways-status').textContent = 'The raw backup could not be prepared. The original record is unchanged and saving remains paused.'; }
      finally { link?.remove(); if (url) setTimeout(() => URL.revokeObjectURL(url), 1000); }
    });
    const replace = document.createElement('button');
    replace.type = 'button'; replace.id = 'pathways-replace-saved-work';
    replace.textContent = 'Replace saved record with this page';
    replace.addEventListener('click', () => {
      if (!window.confirm('Replace the unreadable saved record with the current page? Download the raw backup first to retain the original.')) return;
      try {
        if (localStorage.getItem(KEY) !== savedRaw) {
          $('pathways-status').textContent = 'The stored record changed after this page opened. Reload to recover the latest record; nothing has been replaced.';
          return;
        }
        recoveryPaused = false;
        storageAvailable = true;
        persist();
        if (!storageAvailable) {
          recoveryPaused = true;
          $('pathways-status').textContent = 'Replacement could not be saved. The original record is unchanged and saving remains paused; download current writing before leaving.';
          return;
        }
        recoveryControls.hidden = true;
      } catch (_) {
        recoveryPaused = true;
        $('pathways-status').textContent = 'Stored work is still unavailable. Nothing has been replaced and saving remains paused; download current writing before leaving.';
      }
    });
    recoveryControls.append(backup, replace);
    $('pathways-status').after(recoveryControls);
  }
  function persist() {
    if (recoveryPaused) { $('pathways-status').textContent = recoveryMessage; return; }
    const writing=Object.fromEntries(notes.map(node=>[node.dataset.pathNote,node.value.slice(0,12000)]));
    try {localStorage.setItem(KEY,JSON.stringify({state,writing}));} catch (_) {storageAvailable=false;}
    setText('pathways-status',storageAvailable?'Attempts and displayed cases are saved in this browser. Download a portable copy.':'Browser storage is unavailable. Your attempts work for this visit; download a copy to keep them.');
  }
  function renderDomain() {
    const result=M.domainProbe(state.b);
    setText('domain-candidates',setString(result.candidates));
    setText('domain-admissible',setString(result.admissible));
    setText('domain-excluded',setString(result.excluded));
    setText('domain-snapshot','Shown: b='+state.b+', so c=log '+state.b+'. The original function still excludes −2 and 2.');
  }
  function renderCertificate() {
    const result=M.samplingCertificate(state.L,state.E), bound=M.formatRational(result.bound);
    setText('sampling-L-value',state.L);setText('sampling-E-value',state.E+'/100');
    setText('sampling-bound',bound);
    setText('sampling-comparison',bound+(result.certified?' < ':' ≥ ')+'cos(π/8)');
    setText('sampling-verdict',result.certified?'Certified: every path satisfying these hypotheses avoids zero and has winding 2.':'Inconclusive: this error bound does not certify avoidance of zero or winding. It does not show that either conclusion is false.');
    $('sampling-verdict').classList.toggle('inconclusive',!result.certified);
    setText('sampling-consequences',result.certified?'On its parameter circle: exactly 2 continuous square roots, no continuous fourth root, and no continuous logarithm.':'No root or logarithm classification follows from this certificate at the displayed bounds.');
    setText('sampling-snapshot','Shown: L='+state.L+', E='+state.E+'; 16 intervals and 17 sample entries with endpoint closure.');
    // The exact model decides the inequality; this conversion draws its tube.
    const radius=result.bound.numerator/result.bound.denominator;
    $('certificate-tube').setAttribute('stroke-width',2*90*radius);
    $('certificate-tube').setAttribute('stroke',result.certified?'#b8d4c6':'#e2b8a8');
    setText('certificate-desc','Reference polygon P, not the unknown path gamma. Its proved error tube has radius '+bound+'. '+
      (result.certified?'The tube misses zero and certifies winding two.':'The tube reaches zero; this particular certificate is inconclusive.'));
  }
  try {
    savedRaw = localStorage.getItem(KEY);
    if (savedRaw !== null) {
      saved = JSON.parse(savedRaw);
      if (!saved || typeof saved !== 'object' || Array.isArray(saved)) { saved = {}; throw new TypeError('Invalid stored work.'); }
      if (saved.writing !== undefined && (!saved.writing || typeof saved.writing !== 'object' || Array.isArray(saved.writing))) throw new TypeError('Invalid stored writing.');
      if(saved.state !== undefined){const s=saved.state;M.domainProbe(s.b);M.samplingCertificate(s.L,s.E);state={b:s.b,L:s.L,E:s.E};}
    }
  }catch(_){pauseStorageRecovery();}
  $('domain-b').value=state.b;$('sampling-L').value=state.L;$('sampling-E').value=state.E;
  notes.forEach(node=>{
    node.maxLength=12000;
    if(saved.writing&&typeof saved.writing[node.dataset.pathNote]==='string')node.value=saved.writing[node.dataset.pathNote].slice(0,12000);
    node.addEventListener('input',persist);
  });
  $('domain-probe-form').addEventListener('submit',event=>{event.preventDefault();state={...state,b:Number($('domain-b').value)};renderDomain();persist();});
  ['L','E'].forEach(key=>$('sampling-'+key).addEventListener('input',()=>{state={...state,[key]:Number($('sampling-'+key).value)};renderCertificate();persist();}));
  $('pathways-print').addEventListener('click',()=>window.print());
  $('pathways-export').addEventListener('click',()=>{
    const text=['Two proof pathways — ungraded study notes','Displayed exact cases: '+JSON.stringify(state),
      'Unsubmitted selection changes are not included. Written arguments are not automatically checked.',
      ...notes.map(node=>'\n'+node.dataset.pathNote+'\n'+node.value)].join('\n');
    const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
    const a=document.createElement('a');a.href=url;a.download='proof-pathways-notes.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  renderDomain();renderCertificate();persist();
})();
