/* Local adapter for the fixed-family WitnessModel. No expression evaluation,
 * HTML injection, analytics, or external requests. Imported computed results
 * are never trusted: snapshots carry only bounded text and input strings.
 */
(function () {
  'use strict';
  const M = window.WitnessModel;
  if (!M) return;
  const $ = id => document.getElementById(id);
  const STORAGE_KEY = 'math-conditions:witnesses:v1';
  // Seven 6000-character notes remain exportable even when JSON must escape
  // every character with six ASCII characters (for example lone surrogates).
  const MAX_SNAPSHOT = 300000;
  const INPUT_LIMIT = M.MAX_INPUT_LENGTH;
  const NOTE_KEYS = ['prediction', 'task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6'];
  const INPUT_IDS = { a: 'parameter-a', b: 'parameter-b', u: 'candidate-u' };
  const noteFields = Array.from(document.querySelectorAll('[data-note]'));
  let state = { version: 1, draft: { a: '0', b: '0', u: '0' }, committed: { a: '0', b: '0', u: '0' }, notes: Object.fromEntries(NOTE_KEYS.map(key => [key, ''])) };
  let saveAvailable = true;
  let printState = null;
  let workRevision = 0;
  let importRequest = 0;
  const INPUT_LABELS = { a: 'Parameter a', b: 'Parameter b', u: 'Proposed witness u' };
  const inputErrors = new Map();
  const inputErrorNodes = new Map();
  const inputDescriptions = new Map();

  function plainObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype;
  }
  function exactKeys(value, keys) {
    return plainObject(value) && Object.keys(value).length === keys.length && keys.every(key => Object.hasOwn(value, key));
  }
  function validateSnapshot(value) {
    if (!exactKeys(value, ['version', 'draft', 'committed', 'notes']) || value.version !== 1) throw new TypeError('Use a version 1 witness snapshot with the documented input and note fields.');
    for (const kind of ['draft', 'committed']) {
      if (!exactKeys(value[kind], ['a', 'b', 'u'])) throw new TypeError('The snapshot needs exactly a, b and u in each input triple.');
      for (const key of ['a', 'b', 'u']) if (typeof value[kind][key] !== 'string' || value[kind][key].length > INPUT_LIMIT) throw new TypeError('Each snapshot input must be text of at most ' + INPUT_LIMIT + ' characters.');
    }
    if (!exactKeys(value.notes, NOTE_KEYS) || NOTE_KEYS.some(key => typeof value.notes[key] !== 'string' || value.notes[key].length > 6000)) throw new TypeError('The snapshot needs the seven known note fields, each at most 6000 characters.');
    M.analyze(value.committed.a, value.committed.b, value.committed.u);
    // Preserve the learner's entered text; verdicts are always recomputed.
    return { version: 1, draft: { ...value.draft }, committed: { ...value.committed }, notes: Object.fromEntries(NOTE_KEYS.map(key => [key, value.notes[key]])) };
  }
  function readSnapshot(text) {
    if (typeof text !== 'string' || text.length > MAX_SNAPSHOT) throw new RangeError('The snapshot is too large; use at most ' + MAX_SNAPSHOT + ' characters.');
    return validateSnapshot(JSON.parse(text));
  }
  function currentDraft() {
    return Object.fromEntries(Object.entries(INPUT_IDS).map(([key, id]) => [key, $(id).value]));
  }
  function collect() {
    state.draft = currentDraft();
    for (const field of noteFields) state.notes[field.dataset.note] = field.value;
  }
  function save() {
    // Even an uncommitted or unsaved edit supersedes a pending file read.
    workRevision++;
    collect();
    try {
      const text = JSON.stringify(validateSnapshot(state));
      if (text.length > MAX_SNAPSHOT) throw new RangeError('The local snapshot is too large.');
      window.localStorage.setItem(STORAGE_KEY, text);
      saveAvailable = true;
      $('storage-status').textContent = 'Saved in this browser. Export a snapshot to keep a portable copy; browser storage is not a backup.';
    } catch (_) {
      saveAvailable = false;
      $('storage-status').textContent = 'Local saving is unavailable. Your current writing remains on this page; download notes or export a snapshot before leaving.';
    }
  }
  function draftStatus() {
    const draft = currentDraft();
    const same = ['a', 'b', 'u'].every(key => draft[key] === state.committed[key]);
    $('draft-status').textContent = same
      ? 'The fields match the committed case below. Filling or editing a field does not recompute it.'
      : 'Uncommitted draft: the fields have changed. The results below still describe the last committed case. Select Compute to check this draft.';
  }
  function fieldError(key, value) {
    try {
      M.canonicalize(value);
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
    $('committed-status').textContent = 'Committed case: a=' + result.a + ', b=' + result.b + ', proposed u=' + result.u + '.';
    $('resultant-value').textContent = result.resultant;
    $('resultant-verdict').textContent = result.resultantZero ? 'Passes: the generic resultant vanishes.' : 'Fails: the generic resultant is nonzero.';
    $('elimination-value').textContent = result.b;
    $('elimination-verdict').textContent = result.eliminationEquation ? 'Passes: b=0.' : 'Fails: b is nonzero.';
    $('existence-verdict').textContent = result.witnessExists
      ? 'Passes: b=0 and a≠0. A unique common root exists.'
      : result.degreeDrop ? 'Fails: a=0 makes g=1 for every u. There is no common root.' : 'Fails: b≠0 contradicts f−ug=b at any common root.';
    $('f-value').textContent = result.f;
    $('g-value').textContent = result.g;
    $('witness-verdict').textContent = result.witnessValid
      ? 'This proposed u is an actual witness: f=0 and g=0.'
      : 'This proposed u is not a witness: f=' + result.f + ' and g=' + result.g + '. Both must be zero.' + (result.witnessExists ? ' A different u does solve this parameter pair.' : ' No u solves this parameter pair.');
    $('unique-witness').textContent = result.uniqueWitness === null ? 'No common root exists for this parameter pair.' : 'The unique common root is u=' + result.uniqueWitness + ', forced by au+1=0. With b=0, the identity f=ug+b then gives f=0.';
    $('actual-degrees').textContent = result.degreeDrop
      ? 'At these parameters, f=u+b has degree 1 in u and g=1 has degree 0.'
      : 'At these parameters, the actual degrees in u remain 2 for f and 1 for g.';
    $('specialized-resultant').textContent = result.specializedResultant;
    $('degree-verdict').textContent = result.degreeDrop
      ? 'The generic degree-(2,1) Sylvester determinant specializes to 0. Its degrees have dropped; that zero is not a common-root certificate for the specialized pair.'
      : 'The leading coefficient a is nonzero, so these degrees have not dropped. The actual specialized resultant agrees with the generic determinant at this parameter pair: ' + result.resultant + '.';
  }
  function restore() {
    for (const [key, id] of Object.entries(INPUT_IDS)) $(id).value = state.draft[key];
    for (const field of noteFields) field.value = state.notes[field.dataset.note];
    render(M.analyze(state.committed.a, state.committed.b, state.committed.u));
    draftStatus();
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      state = readSnapshot(stored);
      $('storage-status').textContent = 'Restored the saved notes, draft, and committed inputs. The displayed exact result has been recomputed.';
    } else $('storage-status').textContent = 'No saved record yet. Notes and input drafts will save locally when you edit them.';
  } catch (_) {
    saveAvailable = false;
    $('storage-status').textContent = 'The saved record was unavailable or malformed; the default case is shown. Existing stored data has not been replaced. Export your current notes before leaving if storage remains unavailable.';
  }
  for (const id of Object.values(INPUT_IDS)) $(id).maxLength = INPUT_LIMIT;
  restore();
  $('witness-form').addEventListener('submit', event => {
    event.preventDefault();
    const draft = currentDraft();
    if (!validateDraft(draft)) { draftStatus(); save(); return; }
    try {
      const result = M.analyze(draft.a, draft.b, draft.u);
      state.committed = { ...draft };
      render(result);
      clearInputErrors();
      $('unique-witness-details').open = false;
      draftStatus();
      save();
    } catch (error) {
      $('input-error').textContent = 'No result committed. ' + error.message + ' The previous committed result remains below.';
      draftStatus();
      save();
    }
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
    const values = button.dataset.preset.split('|');
    Object.values(INPUT_IDS).forEach((id, index) => { $(id).value = values[index]; });
    clearInputErrors();
    draftStatus();
    save();
  });
  for (const field of noteFields) field.addEventListener('input', save);
  function download(name, text, type) {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  $('export-snapshot').addEventListener('click', () => {
    collect();
    try {
      const text = JSON.stringify(validateSnapshot(state), null, 2);
      if (text.length > MAX_SNAPSHOT) throw new RangeError('The snapshot is too large.');
      download('witnesses-snapshot-v1.json', text, 'application/json;charset=utf-8');
      $('import-status').textContent = 'Exported a version 1 snapshot containing your notes, uncommitted draft, and last committed inputs.';
    } catch (error) { $('import-status').textContent = 'Snapshot export failed: ' + error.message; }
  });
  $('export-notes').addEventListener('click', () => {
    collect();
    const lines = ['Does this answer have a witness? — study notes', '', $('committed-status').textContent, 'Uncommitted input fields: a=' + state.draft.a + ', b=' + state.draft.b + ', u=' + state.draft.u, 'Written notes are not proof-checked.', ''];
    for (const key of NOTE_KEYS) lines.push(key, state.notes[key] || '(No writing yet.)', '');
    download('witnesses-study-notes.txt', lines.join('\n'), 'text/plain;charset=utf-8');
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
      $('unique-witness-details').open = false;
      save();
      $('import-status').textContent = 'Imported the notes and input text; the committed exact result was recomputed. Any different draft remains uncommitted.' + (saveAvailable ? '' : ' Local saving remains unavailable; keep the exported file.');
    } catch (error) {
      // A superseded failure must not replace a later import's status either.
      if (request !== importRequest) return;
      $('import-status').textContent = 'Snapshot not imported: ' + error.message + ' Your current notes and committed result are unchanged.';
    } finally {
      if (request === importRequest) event.target.value = '';
    }
  });
  function restorePrintState() {
    if (!printState) return;
    for (const entry of printState) entry.node.open = entry.open;
    printState = null;
  }
  function printCopy(withAnswers) {
    restorePrintState();
    const nodes = Array.from(document.querySelectorAll('details.solution'));
    printState = nodes.map(node => ({ node, open: node.open }));
    for (const node of nodes) node.open = withAnswers;
    try { window.print(); } catch (error) {
      restorePrintState();
      $('import-status').textContent = 'The print dialog could not open: ' + error.message;
    }
  }
  $('print-learner').addEventListener('click', () => printCopy(false));
  $('print-instructor').addEventListener('click', () => printCopy(true));
  window.addEventListener('afterprint', restorePrintState);
})();
