/* Exact-budget lesson adapter. Only bounded inputs and writing are persisted;
 * all restored verdicts are recomputed. No HTML injection or external traffic. */
(function () {
  'use strict';
  const M = window.DampingModel;
  if (!M) return;
  const $ = id => document.getElementById(id);
  const STORAGE_KEY = 'math-conditions:damping:v1';
  const MAX_SNAPSHOT = 300000;
  const INPUT_KEYS = ['a', 's', 'R', 'epsilon', 'h', 't'];
  const INPUT_IDS = { a: 'parameter-a', s: 'damping-s', R: 'cutoff-R', epsilon: 'target-epsilon', h: 'step-h', t: 'path-t' };
  const NOTE_KEYS = ['prediction', 'task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6'];
  const defaults = { a: '1/2', s: '1/10000', R: '200', epsilon: '1/10', h: '1/10000000000', t: '1/10' };
  const noteFields = Array.from(document.querySelectorAll('[data-note]'));
  let state = { version: 1, draft: { ...defaults }, committed: { ...defaults }, showApproximation: false, notes: Object.fromEntries(NOTE_KEYS.map(key => [key, ''])) };
  let saveAvailable = true;
  let printState = null;
  let workRevision = 0;
  let importRequest = 0;
  const INPUT_LABELS = { a: 'Frequency a', s: 'Damping s', R: 'Cutoff R', epsilon: 'Target ε', h: 'Step h', t: 'Path parameter t' };
  const inputErrors = new Map();
  const inputErrorNodes = new Map();
  const inputDescriptions = new Map();
  function exactKeys(value, keys) {
    return value !== null && typeof value === 'object' && !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype && Object.keys(value).length === keys.length && keys.every(key => Object.hasOwn(value, key));
  }
  function validateSnapshot(value) {
    if (!exactKeys(value, ['version', 'draft', 'committed', 'showApproximation', 'notes']) || value.version !== 1 || typeof value.showApproximation !== 'boolean') throw new TypeError('Use a version 1 damping snapshot with exactly the documented fields.');
    for (const kind of ['draft', 'committed']) {
      if (!exactKeys(value[kind], INPUT_KEYS)) throw new TypeError('Each snapshot input group needs exactly a, s, R, epsilon, h and t.');
      if (INPUT_KEYS.some(key => typeof value[kind][key] !== 'string' || value[kind][key].length > M.MAX_INPUT_LENGTH)) throw new TypeError('Snapshot inputs must be text of at most ' + M.MAX_INPUT_LENGTH + ' characters.');
    }
    if (!exactKeys(value.notes, NOTE_KEYS) || NOTE_KEYS.some(key => typeof value.notes[key] !== 'string' || value.notes[key].length > 6000)) throw new TypeError('Use the seven known note fields, each with at most 6000 characters.');
    M.analyze(value.committed);
    return { version: 1, draft: { ...value.draft }, committed: { ...value.committed }, showApproximation: value.showApproximation, notes: Object.fromEntries(NOTE_KEYS.map(key => [key, value.notes[key]])) };
  }
  function readSnapshot(text) {
    if (typeof text !== 'string' || text.length > MAX_SNAPSHOT) throw new RangeError('Use a snapshot of at most ' + MAX_SNAPSHOT + ' characters.');
    return validateSnapshot(JSON.parse(text));
  }
  function currentDraft() { return Object.fromEntries(INPUT_KEYS.map(key => [key, $(INPUT_IDS[key]).value])); }
  function collect() {
    state.draft = currentDraft();
    state.showApproximation = $('show-approximation').checked;
    for (const field of noteFields) state.notes[field.dataset.note] = field.value;
  }
  function save() {
    // Even an uncommitted or unsaved edit supersedes a pending file read.
    workRevision++;
    collect();
    try {
      const text = JSON.stringify(validateSnapshot(state));
      if (text.length > MAX_SNAPSHOT) throw new RangeError('Snapshot too large.');
      window.localStorage.setItem(STORAGE_KEY, text);
      saveAvailable = true;
      $('storage-status').textContent = 'Saved in this browser. Export a snapshot for a portable copy; browser storage is not a backup.';
    } catch (_) {
      saveAvailable = false;
      $('storage-status').textContent = 'Local saving is unavailable. Your current writing remains on this page; download notes or export a snapshot before leaving.';
    }
  }
  function draftStatus() {
    const draft = currentDraft();
    $('draft-status').textContent = INPUT_KEYS.every(key => draft[key] === state.committed[key])
      ? 'The fields match the committed case below. Editing or filling a field does not recompute it.'
      : 'Uncommitted draft: the fields have changed. Results below still describe the last committed case. Select Compute to check the draft.';
  }
  function estimate(descriptor) {
    return state.showApproximation && descriptor.approximation !== null && Number.isFinite(descriptor.approximation) ? ' (floating estimate ≈ ' + descriptor.approximation + ')' : '';
  }
  function targetVerdict(bound, strict, atMost, target) {
    if (strict) return 'Certified: ' + bound + ' < ' + target + '.';
    if (atMost) return 'Equality: bound ' + bound + ' equals target ' + target + '. This gives a non-strict bound, not a strict error < ε certificate.';
    return 'Insufficient certificate: upper bound ' + bound + ' exceeds target ' + target + '. This does not show the actual error is large or disprove convergence.';
  }
  function fieldError(key, value) {
    try {
      M.analyze({ ...defaults, [key]: value });
      return '';
    } catch (error) {
      return (value.trim() ? '' : 'Enter a value. ') + error.message;
    }
  }
  function setFieldError(key, message) {
    const field = $(INPUT_IDS[key]);
    const error = inputErrorNodes.get(key);
    error.textContent = message ? INPUT_LABELS[key] + ': ' + message : '';
    error.hidden = !message;
    if (message) {
      inputErrors.set(key, message);
      field.setAttribute('aria-invalid', 'true');
      field.setAttribute('aria-describedby', inputDescriptions.get(key) + ' ' + error.id);
    } else {
      inputErrors.delete(key);
      field.removeAttribute('aria-invalid');
      field.setAttribute('aria-describedby', inputDescriptions.get(key));
    }
  }
  function inputErrorSummary() {
    const invalid = Object.keys(INPUT_IDS).filter(key => inputErrors.has(key));
    const message = invalid.length
      ? 'No result committed. Check ' + invalid.map(key => INPUT_LABELS[key]).join(', ') + '. The previous committed result remains below.'
      : '';
    if ($('input-error').textContent !== message) $('input-error').textContent = message;
  }
  function clearInputErrors() {
    for (const key of Object.keys(INPUT_IDS)) setFieldError(key, '');
    inputErrorSummary();
  }
  function validateDraft(draft) {
    for (const key of Object.keys(INPUT_IDS)) setFieldError(key, fieldError(key, draft[key]));
    inputErrorSummary();
    const first = Object.keys(INPUT_IDS).find(key => inputErrors.has(key));
    if (first) $(INPUT_IDS[first]).focus();
    return !first;
  }
  for (const [key, id] of Object.entries(INPUT_IDS)) {
    const field = $(id);
    inputDescriptions.set(key, field.getAttribute('aria-describedby') || 'input-help');
    const error = document.createElement('p');
    error.id = id + '-error';
    error.className = 'error';
    error.hidden = true;
    // Separate paragraphs keep error text out of the input's accessible name.
    $('input-error').insertAdjacentElement('beforebegin', error);
    inputErrorNodes.set(key, error);
  }
  function render(result) {
    $('committed-status').textContent = 'Committed case: a=' + result.a + ', s=' + result.s + ', R=' + result.R + ', ε=' + result.epsilon + ', h=' + result.h + ', t=' + result.t + '.';
    $('integral-kind').textContent = result.s === '0' ? 'Undamped display: J(a)' : 'Positive damping: F(a,s)';
    $('integral-value').textContent = result.F.exact;
    $('boundary-value').textContent = result.J.exact;
    $('approximation-status').textContent = state.showApproximation ? 'Floating estimates are decorations, not rigorous enclosures. Rounding may resemble a boundary value; exact inputs decide the case.' : 'Floating estimates are off. They never decide a certificate or a boundary case.';
    $('approximation-value').textContent = state.showApproximation ? (result.F.approximation === null ? 'No finite floating estimate is available; the symbolic value remains exact.' : 'Floating estimate ≈ ' + result.F.approximation + '. This is not an error enclosure.') : 'Exact symbolic value; no floating estimate shown.';
    $('single-tail').textContent = result.tail.available ? result.tail.eachBound : 'Not needed: a=0';
    $('two-tails').textContent = result.tail.available ? result.tail.twoTailBound : 'Not needed: a=0';
    $('window-bound').textContent = result.comparison.windowBound;
    $('total-bound').textContent = result.comparison.totalBound;
    $('comparison-verdict').textContent = result.comparison.method === 'direct-a-zero'
      ? 'Exact zero error: a=0 makes both sine integrals zero. No tail estimate or division by a is needed.'
      : result.comparison.method === 'already-undamped'
        ? 'Exact zero comparison: s=0 displays J(a), compared with itself. The separate generic tail bounds are not being added to this exact comparison.'
        : targetVerdict(result.comparison.totalBound, result.comparison.withinEpsilon, result.comparison.atMostEpsilon, result.epsilon) + (result.comparison.withinEpsilon ? ' Therefore |F(a,s)−J(a)| < ε. This is a finite-case upper-bound certificate.' : '');
    $('derivative-value').textContent = result.derivative.available ? result.derivative.value : 'Unavailable: this certificate requires s>0';
    $('quotient-bound').textContent = result.derivative.available ? result.derivative.quotientErrorBound : 'Unavailable at s=0';
    $('derivative-verdict').textContent = result.derivative.available
      ? targetVerdict(result.derivative.quotientErrorBound, result.derivative.withinEpsilon, result.derivative.atMostEpsilon, result.epsilon) + (result.derivative.withinEpsilon ? ' The difference quotient is within ε of the fixed-s derivative.' : '')
      : 'The authored positive-damping differentiation certificate is unavailable at s=0. Separately, J has derivative 0 at every a≠0 and is discontinuous at a=0; the ordinary cosine integral diverges.';
    for (const path of result.paths) {
      const row = $('path-' + path.id);
      row.querySelector('[data-path-parameters]').textContent = 'a=' + path.a + ', s=' + path.s;
      row.querySelector('[data-path-f]').textContent = path.F.exact + estimate(path.F);
      row.querySelector('[data-path-j]').textContent = path.J.exact + estimate(path.J);
    }
  }
  function recomputeCommitted() { return M.analyze(state.committed, { approximate: state.showApproximation }); }
  function restore() {
    for (const key of INPUT_KEYS) $(INPUT_IDS[key]).value = state.draft[key];
    $('show-approximation').checked = state.showApproximation;
    for (const field of noteFields) field.value = state.notes[field.dataset.note];
    render(recomputeCommitted());
    draftStatus();
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== null) { state = readSnapshot(stored); $('storage-status').textContent = 'Restored notes, drafts and committed inputs. The exact certificates have been recomputed.'; }
    else $('storage-status').textContent = 'No saved record yet. Writing and input drafts save locally when edited.';
  } catch (_) { saveAvailable = false; $('storage-status').textContent = 'The saved record was unavailable or malformed; the default case is shown. Existing stored data has not been replaced.'; }
  for (const id of Object.values(INPUT_IDS)) $(id).maxLength = M.MAX_INPUT_LENGTH;
  restore();
  $('damping-form').addEventListener('submit', event => {
    event.preventDefault();
    const draft = currentDraft();
    if (!validateDraft(draft)) { draftStatus(); save(); return; }
    try { const result = M.analyze(draft, { approximate: state.showApproximation }); state.committed = { ...draft }; render(result); clearInputErrors(); draftStatus(); save(); }
    catch (error) { $('input-error').textContent = 'No result committed. ' + error.message + ' The previous committed results remain below.'; draftStatus(); save(); }
  });
  for (const [key, id] of Object.entries(INPUT_IDS)) $(id).addEventListener('input', () => {
    if (inputErrors.has(key)) {
      setFieldError(key, fieldError(key, $(id).value));
      inputErrorSummary();
    }
    draftStatus();
    save();
  });
  for (const button of document.querySelectorAll('[data-preset]')) button.addEventListener('click', () => {
    const values = button.dataset.preset.split('|'); INPUT_KEYS.forEach((key, index) => { $(INPUT_IDS[key]).value = values[index]; }); clearInputErrors(); draftStatus(); save();
  });
  $('show-approximation').addEventListener('change', () => { state.showApproximation = $('show-approximation').checked; render(recomputeCommitted()); save(); });
  for (const field of noteFields) field.addEventListener('input', save);
  function download(name, text, type) {
    const url = URL.createObjectURL(new Blob([text], { type })); const link = document.createElement('a'); link.href = url; link.download = name; document.body.appendChild(link); link.click(); link.remove(); window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  $('export-snapshot').addEventListener('click', () => {
    collect(); try { const text = JSON.stringify(validateSnapshot(state), null, 2); if (text.length > MAX_SNAPSHOT) throw new RangeError('Snapshot too large.'); download('damping-snapshot-v1.json', text, 'application/json;charset=utf-8'); $('import-status').textContent = 'Exported notes, uncommitted draft, approximation preference and last committed inputs in a version 1 snapshot.'; }
    catch (error) { $('import-status').textContent = 'Snapshot export failed: ' + error.message; }
  });
  $('export-notes').addEventListener('click', () => {
    collect(); const lines = ['What survives when the damping disappears? — study notes', '', $('committed-status').textContent, 'Uncommitted draft: ' + INPUT_KEYS.map(key => key + '=' + state.draft[key]).join(', '), 'Written notes are not proof-checked.', '']; for (const key of NOTE_KEYS) lines.push(key, state.notes[key] || '(No writing yet.)', ''); download('damping-study-notes.txt', lines.join('\n'), 'text/plain;charset=utf-8');
  });
  $('import-snapshot').addEventListener('change', async event => {
    const request = ++importRequest;
    const revision = workRevision;
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    try {
      if (file.size > MAX_SNAPSHOT * 4) throw new RangeError('The snapshot file is too large.');
      const text = await file.text();
      if (request !== importRequest) return;
      if (revision !== workRevision) {
        $('import-status').textContent = 'Snapshot not imported: your work changed while the file was being read. Your current writing, draft and committed results are unchanged. Choose the file again if you want to replace them.';
        return;
      }
      const candidate = readSnapshot(text);
      state = candidate;
      restore();
      clearInputErrors();
      save();
      $('import-status').textContent = 'Imported notes and input text; exact committed certificates were recomputed. Any different draft remains uncommitted.' + (saveAvailable ? '' : ' Local saving is unavailable; retain the exported file.');
    } catch (error) {
      // A superseded failure must not replace a later import's status either.
      if (request !== importRequest) return;
      $('import-status').textContent = 'Snapshot not imported: ' + error.message + ' Your current notes and committed results are unchanged.';
    } finally {
      if (request === importRequest) event.target.value = '';
    }
  });
  function restorePrintState() { if (!printState) return; for (const entry of printState) entry.node.open = entry.open; printState = null; }
  function printCopy(withAnswers) { restorePrintState(); const nodes = Array.from(document.querySelectorAll('details.solution')); printState = nodes.map(node => ({ node, open: node.open })); for (const node of nodes) node.open = withAnswers; try { window.print(); } catch (error) { restorePrintState(); $('import-status').textContent = 'The print dialog could not open: ' + error.message; } }
  $('print-learner').addEventListener('click', () => printCopy(false)); $('print-instructor').addEventListener('click', () => printCopy(true)); window.addEventListener('afterprint', restorePrintState);
})();
