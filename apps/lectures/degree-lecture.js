(function () {
  'use strict';
  const M = window.CircleDegreeMath, $ = id => document.getElementById(id);
  const KEY = 'euler-circle-degree-v1';
  const notes = Array.from(document.querySelectorAll('[data-degree-note]'));
  const defaults = { map:'fold', position:125, time:0, target:'quarter', inner:'reverseTriple', outer:'double', operation:'compose', operationPosition:250 };
  let state = {...defaults}, writing = {}, storage = true;
  const turn = M.formatTurn, number = q => q.n/q.d;
  let savedRaw = null, recoveryPaused = false, recoveryControls = null;
  const recoveryMessage = 'Saved work could not be read safely. The original record is unchanged and saving is paused. Download its raw backup before explicitly replacing it; current writing can still be downloaded.';
  function pauseStorageRecovery() {
    recoveryPaused = true;
    $('degree-save-status').textContent = recoveryMessage;
    if (recoveryControls) return;
    recoveryControls = document.createElement('div');
    recoveryControls.setAttribute('role', 'region');
    recoveryControls.setAttribute('aria-label', 'Saved-work recovery');
    const backup = document.createElement('button');
    backup.type = 'button'; backup.id = 'degree-raw-backup';
    backup.textContent = 'Download unreadable saved-work backup';
    backup.disabled = savedRaw === null;
    backup.addEventListener('click', () => {
      let url, link;
      try {
        // A JSON wrapper retains every stored UTF-16 code unit, even a lone surrogate.
        const data = JSON.stringify({ schemaVersion: 1, storageKey: KEY, raw: savedRaw }, null, 2);
        url = URL.createObjectURL(new Blob([data], { type: 'application/json;charset=utf-8' }));
        link = document.createElement('a'); link.href = url; link.download = 'degree-unreadable-saved-work.json';
        document.body.appendChild(link); link.click();
        $('degree-save-status').textContent = 'Raw backup requested. The original record is unchanged and saving remains paused.';
      } catch (_) { $('degree-save-status').textContent = 'The raw backup could not be prepared. The original record is unchanged and saving remains paused.'; }
      finally { link?.remove(); if (url) setTimeout(() => URL.revokeObjectURL(url), 1000); }
    });
    const replace = document.createElement('button');
    replace.type = 'button'; replace.id = 'degree-replace-saved-work';
    replace.textContent = 'Replace saved record with this page';
    replace.addEventListener('click', () => {
      if (!window.confirm('Replace the unreadable saved record with the current page? Download the raw backup first to retain the original.')) return;
      try {
        if (localStorage.getItem(KEY) !== savedRaw) {
          $('degree-save-status').textContent = 'The stored record changed after this page opened. Reload to recover the latest record; nothing has been replaced.';
          return;
        }
        recoveryPaused = false;
        storage = true;
        persist();
        if (!storage) {
          recoveryPaused = true;
          $('degree-save-status').textContent = 'Replacement could not be saved. The original record is unchanged and saving remains paused; download current writing before leaving.';
          return;
        }
        recoveryControls.hidden = true;
      } catch (_) {
        recoveryPaused = true;
        $('degree-save-status').textContent = 'Stored work is still unavailable. Nothing has been replaced and saving remains paused; download current writing before leaving.';
      }
    });
    recoveryControls.append(backup, replace);
    $('degree-save-status').after(recoveryControls);
  }
  function validate(candidate) {
    M.homotopy(candidate.map,candidate.position,1000,candidate.time,1000);
    if (!['quarter','zero'].includes(candidate.target)) throw new Error('Unknown target.');
    if (!M.analyze(candidate.inner).based || !M.analyze(candidate.outer).based) throw new Error('Operations need authored maps based at 1.');
    if (!['compose','concatenate'].includes(candidate.operation)) throw new Error('Unknown operation.');
    M.compose(candidate.outer,candidate.inner,candidate.operationPosition);
  }
  let saved = {};
  try {
    savedRaw = localStorage.getItem(KEY);
    if (savedRaw !== null) {
      saved = JSON.parse(savedRaw);
      if (!saved || typeof saved !== 'object' || Array.isArray(saved)) { saved = {}; throw new TypeError('Invalid stored work.'); }
      if (saved.version !== 1) throw new TypeError('Unsupported stored version.');
      if (saved.writing !== undefined && (!saved.writing || typeof saved.writing !== 'object' || Array.isArray(saved.writing))) throw new TypeError('Invalid stored writing.');
      if (saved.state !== undefined) { validate(saved.state); state={...defaults,...saved.state}; }
    }
  } catch (_) { pauseStorageRecovery(); }
  for (const node of notes) {
    if (saved.version===1 && saved.writing && typeof saved.writing[node.dataset.degreeNote]==='string') {
      node.value=saved.writing[node.dataset.degreeNote].slice(0,8000);
    }
  }
  function persist() {
    if (recoveryPaused) { $('degree-save-status').textContent = recoveryMessage; return; }
    writing=Object.fromEntries(notes.map(node=>[node.dataset.degreeNote,node.value.slice(0,8000)]));
    try { localStorage.setItem(KEY,JSON.stringify({version:1,state,writing})); }
    catch (_) { storage=false; }
    $('degree-save-status').textContent=storage
      ? 'Notes and computed control settings are saved in this browser. Download a portable copy.'
      : 'Browser storage is unavailable. Notes work for this visit; download a copy to keep them.';
  }
  function point(id,cx,cy,r,q) {
    const angle=2*Math.PI*number(q);
    $(id).setAttribute('cx',cx+r*Math.cos(angle));
    $(id).setAttribute('cy',cy-r*Math.sin(angle));
  }
  const graphRanges={identity:[[-1,4],[5,4]],fold:[[-1,4],[5,4]],triangle:[[-1,4],[5,4]],reflection:[[-5,4],[1,4]],
    double:[[-1,4],[9,4]],reverseTriple:[[-13,4],[1,4]],constant:[[-1,2],[1,2]],quarterRotation:[[-1,4],[3,2]]};
  function graphScale(id) {
    const [low,high]=graphRanges[id].map(([n,d])=>({n,d}));
    return {low,high,y:q=>30+180*(number(high)-number(q))/(number(high)-number(low))};
  }
  function path(points,scale) {
    return points.map((item,i)=>(i?'L':'M')+(50+500*number(item.parameter)).toFixed(3)+' '+scale.y(item.lift).toFixed(3)).join('');
  }
  function renderMap() {
    const map=M.analyze(state.map), current=M.homotopy(state.map,state.position,1000,state.time,1000);
    const basepoint=M.homotopy(state.map,0,1,state.time,1000);
    const preimages=M.preimages(state.map,state.target==='quarter'?1:0,4);
    $('degree-time-value').textContent=turn({n:state.time,d:1000});
    $('degree-position-value').textContent=turn({n:state.position,d:1000});
    point('degree-input-point',155,145,75,current.parameter);
    point('degree-output-point',465,145,75,current.wrapped);
    point('degree-image-one',465,145,75,basepoint.wrapped);
    const scale=graphScale(state.map),zeroY=scale.y({n:0,d:1});
    $('degree-graph-axis').setAttribute('d','M50 30V210M50 '+zeroY+'H550');
    $('degree-y-max').textContent=turn(scale.high);$('degree-y-min').textContent=turn(scale.low);$('degree-y-zero').setAttribute('y',zeroY+5);
    $('degree-range-caption').textContent='The graph’s vertical range is '+turn(scale.low)+' to '+turn(scale.high)+' turns and stays fixed during this map’s deformation.';
    $('degree-source-graph').setAttribute('d',path(map.vertices,scale));
    $('degree-standard-graph').setAttribute('d',path([{parameter:{n:0,d:1},lift:{n:0,d:1}},{parameter:{n:1,d:1},lift:{n:map.degree,d:1}}],scale));
    $('degree-current-graph').setAttribute('d',path(map.vertices.map(vertex=>M.homotopy(state.map,vertex.parameter.n,vertex.parameter.d,state.time,1000)),scale));
    $('degree-graph-point').setAttribute('cx',50+500*number(current.parameter));
    $('degree-graph-point').setAttribute('cy',scale.y(current.lift));
    $('degree-number').textContent=String(map.degree);
    $('degree-angle').textContent=turn(current.lift)+' turn'+(current.lift.n===current.lift.d?'':'s');
    $('degree-preimages').textContent=preimages.all?'Every point of S¹':preimages.parameters.length
      ? 's∈{'+preimages.parameters.map(turn).join(', ')+'}' : '∅';
    $('degree-equivalent').textContent=map.homotopyEquivalence
      ? 'Yes; '+(map.homotopyInverseId==='reflection'?'conjugation':'id')+' is a homotopy inverse.'+(!map.homeomorphism?' This map is not a homeomorphism.':'')
      : 'No; its degree is neither 1 nor −1.';
    $('degree-relative').textContent=map.based
      ? 'This homotopy fixes the image of domain point 1 throughout.'
      : 'This ordinary homotopy moves the image of domain point 1. Its current angle is '+turn(basepoint.lift)+' turns. The family is not relative to {1}.';
    $('degree-preimage-scope').textContent='The preimage list concerns the original authored map at t=0. Parameters 0 and 1 represent one circle input.'+
      (state.time?' The solid curve shows the deformed map at the selected time.':'');
    $('degree-snapshot').textContent='Shown: map='+state.map+'; s='+state.position+'/1000, t='+state.time+'/1000; original target turn='+turn(preimages.target)+'.';
    $('degree-circles-desc').textContent=map.label+'. At s='+turn(current.parameter)+' and t='+turn(current.time)+', the output lift is '+turn(current.lift)+' turns.'+
      ' The hollow marker is the current image of domain point 1. Circle outlines show the domain and target spaces, not the full image of the map.';
    $('degree-graph-desc').textContent='Original angle vertices: '+map.vertices.map(v=>'('+turn(v.parameter)+','+turn(v.lift)+')').join(', ')+
      '. Net endpoint change '+map.degree+'. The solid curve interpolates to the standard angle '+map.degree+'s. The vertical range is '+turn(scale.low)+' to '+turn(scale.high)+' turns.';
  }
  function renderOperation() {
    const first=M.analyze(state.inner), second=M.analyze(state.outer), compose=state.operation==='compose';
    const result=compose?M.compose(state.outer,state.inner,state.operationPosition):M.concatenate(state.inner,state.outer,state.operationPosition);
    $('degree-operation-position-value').textContent=turn(result.parameter);
    point('degree-operation-input',155,145,75,result.parameter);
    point('degree-operation-output',465,145,75,result.wrapped);
    $('degree-operation-label').textContent=compose?'Result of g∘f':'Result of following f, then g';
    $('degree-operation-degree').textContent=String(result.degree);
    $('degree-operation-angle').textContent=turn(result.lift)+' turns';
    $('degree-operation-reason').textContent=compose
      ? 'Composition multiplies: ('+second.degree+')·('+first.degree+')='+result.degree+'. Concatenation would give '+(first.degree+second.degree)+'.'
      : 'Concatenation adds: ('+first.degree+')+('+second.degree+')='+result.degree+'. Composition would give '+(first.degree*second.degree)+'.';
    $('degree-operation-snapshot').textContent='Shown: first f='+state.inner+', second g='+state.outer+', operation='+state.operation+', s='+state.operationPosition+'/1000.';
    $('degree-operation-desc').textContent=$('degree-operation-snapshot').textContent+' The selected result has degree or winding '+result.degree+
      ' and lifted angle '+turn(result.lift)+' turns at this input. A wrapped output point alone does not record its accumulated turns.';
  }
  const bindings=[['degree-map','map',false],['degree-time','time',true],['degree-position','position',true],['degree-target','target',false],
    ['degree-inner','inner',false],['degree-outer','outer',false],['degree-operation','operation',false],['degree-operation-position','operationPosition',true]];
  for (const [id,key,numeric] of bindings) {
    $(id).value=String(state[key]);
    $(id).addEventListener(numeric?'input':'change',()=>{
      const candidate={...state,[key]:numeric?Number($(id).value):$(id).value};
      validate(candidate);state=candidate;renderMap();renderOperation();persist();
    });
  }
  for (const node of notes) node.addEventListener('input',persist);
  $('degree-print').addEventListener('click',()=>window.print());
  $('degree-download').addEventListener('click',()=>{
    const lines=['Degree belongs to a map — study notes','Computed control settings:',JSON.stringify(state,null,2),
      'Written arguments below are not automatically proof-checked.'];
    for (const node of notes) if (node.value.trim()) lines.push('\n'+node.dataset.degreeNote+'\n'+node.value);
    const url=URL.createObjectURL(new Blob([lines.join('\n')],{type:'text/plain;charset=utf-8'}));
    const link=document.createElement('a');link.href=url;link.download='circle-degree-notes.txt';link.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  renderMap();renderOperation();persist();
})();
