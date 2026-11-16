(function () {
  'use strict';
  const model = window.RelatorModel;
  if (!model) return;
  const byId = id => document.getElementById(id);
  const form = byId('relations-form');
  const fields = { preset: byId('relations-preset'), relator: byId('relations-relator'), start: byId('relations-start') };
  const noteFields = [...document.querySelectorAll('[data-relations-note]')];
  const noteKeys = noteFields.map(field => field.dataset.relationsNote);
  const storageKey = 'euler-relations-and-covers-v1';
  let state = { preset: 'nonregular', relator: 'X', start: 1 };
  let printRestore = null;
  const setText = (id, text) => { byId(id).textContent = text; };
  const numberText = number => String(number).replace('-', '−');
  const cellName = name => name.replace(/^sigma/, 'σ');
  function signedChain(values, basis) {
    const terms = [];
    values.forEach((coefficient, index) => {
      if (coefficient === 0) return;
      const magnitude = Math.abs(coefficient);
      const term = (magnitude === 1 ? '' : magnitude) + basis[index];
      terms.push((coefficient < 0 ? '−' : terms.length ? '+' : '') + term);
    });
    return terms.length ? terms.join(' ').replace(/([+−])(?=\S)/g, '$1 ') : '0';
  }
  function notes() {
    return Object.fromEntries(noteFields.map(field => [field.dataset.relationsNote, field.value]));
  }
  function readState(candidate) {
    if (!candidate || typeof candidate !== 'object' || Array.isArray(candidate) ||
        Object.keys(candidate).sort().join(',') !== 'preset,relator,start' ||
        !['nonregular', 'cyclic'].includes(candidate.preset) || !['T', 'X'].includes(candidate.relator) ||
        !Number.isInteger(candidate.start) || candidate.start < 1 || candidate.start > 3) {
      throw new TypeError('Choose one of the two declared covers, one of the two relations, and a starting sheet from 1 to 3.');
    }
    model.analyze(candidate.preset, candidate.relator, { start: candidate.start });
    return { preset: candidate.preset, relator: candidate.relator, start: candidate.start };
  }
  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ version: 1, state, notes: notes() }));
      setText('relations-storage', 'Committed case and attempts saved in this browser. Download a portable copy to keep elsewhere.');
    } catch (_error) {
      setText('relations-storage', 'Browser storage is unavailable. Your work remains in this visit; download a copy to keep it.');
    }
  }
  function restore() {
    let raw;
    try { raw = localStorage.getItem(storageKey); }
    catch (_error) {
      setText('relations-storage', 'Browser storage is unavailable. Your work remains in this visit; download a copy to keep it.');
      return;
    }
    if (raw === null) {
      setText('relations-storage', 'Write an attempt or calculate a case to save it in this browser. A portable download is available.');
      return;
    }
    try {
      const saved = JSON.parse(raw);
      if (!saved || typeof saved !== 'object' || Array.isArray(saved) || saved.version !== 1) throw new TypeError('Unsupported saved work.');
      const next = readState(saved.state);
      const savedNotes = saved.notes;
      if (!savedNotes || typeof savedNotes !== 'object' || Array.isArray(savedNotes) ||
          Object.keys(savedNotes).sort().join(',') !== [...noteKeys].sort().join(',') ||
          noteKeys.some(key => typeof savedNotes[key] !== 'string' || savedNotes[key].length > 8000)) {
        throw new TypeError('Invalid saved attempts.');
      }
      state = next;
      noteFields.forEach(field => { field.value = savedNotes[field.dataset.relationsNote]; });
      setText('relations-storage', 'Saved committed case and attempts restored. Written reasoning is not automatically proof-checked.');
    } catch (_error) {
      setText('relations-storage', 'Saved work could not be restored. The default case is shown; work from this visit can still be downloaded.');
    }
  }
  function element(name, text, attributes) {
    const node = document.createElement(name);
    if (text !== undefined) node.textContent = text;
    Object.entries(attributes || {}).forEach(([key, value]) => node.setAttribute(key, value));
    return node;
  }
  function matrix(matrixData, firstHeading, headId, bodyId) {
    const head = byId(headId), body = byId(bodyId);
    head.replaceChildren(); body.replaceChildren();
    [firstHeading, ...matrixData.source.map(cellName)].forEach(label => {
      head.appendChild(element('th', label, { scope: 'col' }));
    });
    matrixData.target.forEach((label, index) => {
      const row = element('tr');
      row.appendChild(element('th', cellName(label), { scope: 'row' }));
      matrixData.entries[index].forEach(value => row.appendChild(element('td', numberText(value))));
      body.appendChild(row);
    });
  }
  function drawPath(analysis) {
    const lift = analysis.selectedLift;
    const svg = byId('relations-path-svg');
    const ns = 'http://www.w3.org/2000/svg';
    function svgElement(name, attributes, text) {
      const node = document.createElementNS(ns, name);
      Object.entries(attributes || {}).forEach(([key, value]) => node.setAttribute(key, value));
      if (text !== undefined) node.textContent = text;
      svg.appendChild(node);
      return node;
    }
    svg.replaceChildren();
    svgElement('title', { id: 'relations-path-title' }, analysis.relator.id + ' boundary word lifted from sheet ' + lift.start);
    svgElement('desc', { id: 'relations-path-desc' }, 'Read left to right. ' + lift.steps.map(step => step.letter + ': ' + step.edgeId + (step.orientation > 0 ? ' forwards' : ' backwards')).join('; ') + '. Endpoint ' + lift.endpoint + '. Repeated sheet labels are repeated visits to the same vertex.');
    const positions = Array.from({ length: lift.steps.length + 1 }, (_, index) => 36 + 732 * index / lift.steps.length);
    lift.steps.forEach((step, index) => {
      const x1 = positions[index] + 18, x2 = positions[index + 1] - 18;
      svgElement('path', { d: 'M' + x1 + ' 92H' + x2 + 'M' + (x2 - 8) + ' 87L' + x2 + ' 92L' + (x2 - 8) + ' 97', class: 'relations-arrow' });
      svgElement('text', { x: (x1 + x2) / 2, y: 48, 'text-anchor': 'middle', 'font-size': 18 }, step.letter);
      svgElement('text', { x: (x1 + x2) / 2, y: 138, 'text-anchor': 'middle', 'font-size': 17 }, (step.orientation > 0 ? '+' : '−') + step.edgeId);
    });
    [lift.start, ...lift.steps.map(step => step.to)].forEach((sheet, index) => {
      svgElement('circle', { cx: positions[index], cy: 92, r: 16, class: 'relations-node' + (index === lift.steps.length ? ' relations-end' : '') });
      svgElement('text', { x: positions[index], y: 98, 'text-anchor': 'middle', 'font-size': 17 }, sheet);
    });
  }
  function render(analysis) {
    fields.preset.value = state.preset; fields.relator.value = state.relator; fields.start.value = String(state.start);
    const coverLabel = state.preset === 'nonregular' ? 'a=(12), b=(23)' : 'a=(123), b=identity';
    setText('relations-snapshot', 'Committed case: ' + coverLabel + '; ' + analysis.relator.id + ', word ' + analysis.relator.word + '; selected starting sheet ' + state.start + '.');
    const extendsCover = analysis.extension.valid;
    setText('relations-verdict', extendsCover ?
      'Every lift closes. This graph cover extends to a three-sheet cover of ' + analysis.relator.id + '.' :
      'Some lifts do not close. This graph cover does not extend over the attached disk of ' + analysis.relator.id + '.');
    byId('relations-verdict').dataset.valid = String(extendsCover);
    setText('relations-scope', 'The extension criterion uses the covering-space theorem in the next section. The finite table checks every sheet; the highlighted row is only a selected path.');
    const edgeIds = analysis.matrices.pathCounts.target;
    const vertexIds = analysis.matrices.d1.target;
    setText('relations-lifts-caption', 'All lifts of ' + analysis.relator.word + '; positive edges ' + edgeIds.join(',') + '.');
    const body = byId('relations-lifts');
    body.replaceChildren();
    analysis.lifts.forEach(lift => {
      const row = element('tr');
      if (lift.start === state.start) row.setAttribute('aria-current', 'true');
      row.appendChild(element('th', lift.start, { scope: 'row' }));
      [lift.endpoint, lift.closed ? 'Yes' : 'No', signedChain(lift.counts, edgeIds), signedChain(lift.incidence, vertexIds)].forEach(value => row.appendChild(element('td', value)));
      body.appendChild(row);
    });
    const lift = analysis.selectedLift;
    setText('relations-trace', 'From sheet ' + lift.start + ': ' + [lift.start, ...lift.steps.map(step => step.to)].join(' → ') + '. Traversals: ' + lift.steps.map(step => (step.orientation > 0 ? '+' : '−') + step.edgeId).join(', ') + '.');
    drawPath(analysis);
    matrix(analysis.matrices.d1, 'Vertex', 'relations-d1-head', 'relations-d1-body');
    setText('relations-incidence', 'Exact check for every row: d₁(signed path chain)=v(endpoint)−v(start). ' +
      (extendsCover ? 'All three endpoint differences are zero.' : 'Open starts: ' + analysis.extension.openStarts.join(', ') + '. Their nonzero endpoint differences remain path incidences, not cellular face boundaries.'));
    byId('relations-cellular').hidden = !extendsCover;
    byId('relations-no-cellular').hidden = extendsCover;
    if (extendsCover) {
      matrix(analysis.matrices.d2, 'Edge', 'relations-d2-head', 'relations-d2-body');
      setText('relations-d2-caption', 'd₂ upstairs: faces ' + analysis.matrices.d2.source.map(cellName).join(',') + ' → positive edges.');
      setText('relations-cellular-explanation', 'All three lifts close, so attach faces σ1, σ2, σ3 along them, one for each sheet. The cellular boundary formula gives this integer matrix.');
      setText('relations-chain-check', 'Exact check: d₁d₂ is the zero 3×3 matrix. There are no cells in dimensions three or higher.');
    } else {
      byId('relations-d2-head').replaceChildren(); byId('relations-d2-body').replaceChildren();
    }
    byId('relations-homology').hidden = analysis.homologyCertificate === null;
    if (analysis.homologyCertificate) {
      setText('relations-homology-summary', 'For a=(12), b=(23) over X: H₀=ℤ, H₁=ℤ³, H₂=ℤ². The proof below uses the fixed root-1 graph cycle basis, independently of the selected row. It exhibits a primitive integer boundary; no torsion conclusion is inferred from real rank.');
    }
  }
  function draftValues() { return { preset: fields.preset.value, relator: fields.relator.value, start: fields.start.value }; }
  function hasDraft() {
    const draft = draftValues();
    return draft.preset !== state.preset || draft.relator !== state.relator || draft.start !== String(state.start);
  }
  function restorePrintView() {
    if (!printRestore) return;
    printRestore.forEach(([node, open]) => { node.open = open; });
    printRestore = null;
    delete document.body.dataset.relationsPrint;
    setText('relations-edition', 'Workshop view · Written attempts are excluded from print.');
  }
  function printEdition(edition) {
    restorePrintView();
    printRestore = [...document.querySelectorAll('details')].map(node => [node, node.open]);
    document.body.dataset.relationsPrint = edition;
    if (edition === 'instructor') document.querySelectorAll('details').forEach(node => { node.open = true; });
    if (edition === 'learner') document.querySelectorAll('.relations-gate,.exercise details').forEach(node => { node.open = false; });
    setText('relations-edition', (edition === 'instructor' ? 'Instructor' : 'Learner') + ' edition · Written attempts are excluded from print.');
    window.print();
  }
  restore();
  render(model.analyze(state.preset, state.relator, { start: state.start }));
  ['relations-form', 'relations-print', 'relations-download', 'relations-print-options'].forEach(id => { byId(id).hidden = false; });
  form.addEventListener('submit', event => {
    event.preventDefault();
    try {
      const raw = draftValues();
      if (!/^[123]$/.test(raw.start)) throw new TypeError('Choose a starting sheet from 1 to 3.');
      const next = readState({ preset: raw.preset, relator: raw.relator, start: Number(raw.start) });
      const analysis = model.analyze(next.preset, next.relator, { start: next.start });
      state = next;
      render(analysis);
      setText('relations-input-error', ''); setText('relations-draft', '');
      save();
    } catch (error) {
      setText('relations-input-error', error.message + ' The readouts still show the last committed case.');
    }
  });
  Object.values(fields).forEach(field => field.addEventListener('change', () => {
    setText('relations-draft', hasDraft() ? 'Selectors have changed. Calculate this case to update the committed table; the present readouts are unchanged.' : 'Selectors match the committed case.');
  }));
  noteFields.forEach(field => field.addEventListener('input', save));
  byId('relations-print').addEventListener('click', () => { restorePrintView(); window.print(); });
  byId('relations-print-learner').addEventListener('click', () => printEdition('learner'));
  byId('relations-print-instructor').addEventListener('click', () => printEdition('instructor'));
  window.addEventListener('afterprint', restorePrintView);
  byId('relations-download').addEventListener('click', () => {
    let url = null, link = null;
    try {
      const lines = ['A disk must lift from every sheet — personal attempts', 'Committed case: ' + JSON.stringify(state),
        'Written reasoning is not automatically proof-checked.'];
      if (hasDraft()) lines.push('Uncommitted selector values (not calculated): ' + JSON.stringify(draftValues()));
      noteFields.forEach(field => { lines.push('\n' + field.dataset.relationsNote + '\n' + field.value); });
      url = URL.createObjectURL(new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' }));
      link = element('a', undefined, { href: url, download: 'relations-and-covers-attempts.txt' });
      document.body.appendChild(link); link.click();
      setText('relations-storage', 'Download requested. Save the text file to keep a portable copy of this visit.');
    } catch (_error) {
      setText('relations-storage', 'The download could not be prepared. Your attempts remain in this visit; copy the text or try again.');
    } finally {
      if (link) link.remove();
      if (url) setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
  });
})();
