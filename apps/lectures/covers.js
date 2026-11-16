(function () {
  'use strict';
  const math = window.CoverModel;
  if (!math) return;
  const byId = id => document.getElementById(id);
  const text = (id, value) => { byId(id).textContent = value; };
  const wordLabel = word => word || 'empty word';
  const noteFields = [...document.querySelectorAll('[data-covers-note]')];
  const storageKey = 'euler-covering-graphs-v1';
  const fields = { preset: byId('covers-preset'), start: byId('covers-start'), word: byId('covers-word') };
  let state = { preset: 'nonregular', start: 1, word: 'abba', deck: [2, 1, 3], step: 4 };
  let current;
  const svgNS = 'http://www.w3.org/2000/svg';

  function notes() {
    return Object.fromEntries(noteFields.map(field => [field.dataset.coversNote, field.value]));
  }
  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ version: 1, state, notes: notes() }));
      text('covers-storage', 'Committed case and attempts saved in this browser. Written explanations are not automatically checked.');
    } catch (_error) {
      text('covers-storage', 'Browser storage is unavailable. Your work remains in this visit; download a copy to keep it.');
    }
  }
  function checkedState(candidate) {
    if (!candidate || typeof candidate !== 'object' || Array.isArray(candidate)) throw new TypeError('Invalid saved case.');
    const result = math.analyze(candidate.preset, { start: candidate.start, word: candidate.word });
    // The model permits omitted options for its public API; persisted cases must
    // contain all fields explicitly, so corruption cannot silently change them.
    if (typeof candidate.word !== 'string' || !Number.isInteger(candidate.start)) throw new TypeError('A saved case needs an explicit word and starting sheet.');
    math.testDeck(candidate.preset, candidate.deck);
    if (!Number.isInteger(candidate.step) || candidate.step < 0 || candidate.step > result.word.length) throw new RangeError('The selected step must belong to the word.');
    return { preset: candidate.preset, start: candidate.start, word: candidate.word, deck: candidate.deck.slice(), step: candidate.step };
  }
  function restore() {
    let raw;
    try { raw = localStorage.getItem(storageKey); }
    catch (_error) {
      text('covers-storage', 'Browser storage is unavailable. Your work remains in this visit; download a copy to keep it.');
      return;
    }
    if (!raw) {
      text('covers-storage', 'Write an attempt or calculate a case to save work in this browser. A download gives you a portable copy.');
      return;
    }
    let restoredNotes = false;
    try {
      const saved = JSON.parse(raw);
      if (!saved || saved.version !== 1) throw new TypeError('Unsupported saved version.');
      // Recover valid written attempts even when the saved calculation is bad.
      if (saved.notes && typeof saved.notes === 'object' && !Array.isArray(saved.notes)) {
        noteFields.forEach(field => {
          const value = saved.notes[field.dataset.coversNote];
          if (typeof value === 'string') { field.value = value.slice(0, 8000); restoredNotes = true; }
        });
      }
      state = checkedState(saved.state);
      text('covers-storage', 'Saved committed case and attempts restored. Written explanations are not automatically checked.');
    } catch (_error) {
      text('covers-storage', restoredNotes
        ? 'Written attempts restored, but the saved calculation was invalid. The default case is shown; download a copy of your attempts.'
        : 'Saved work could not be restored. The default case is shown; work from this visit can be downloaded.');
    }
  }
  function appendRow(body, values, attributes) {
    const row = document.createElement('tr');
    if (attributes) Object.entries(attributes).forEach(([name, value]) => row.setAttribute(name, value));
    values.forEach(value => {
      const cell = document.createElement('td'); cell.textContent = value; row.appendChild(cell);
    });
    body.appendChild(row);
    return row;
  }
  function svgElement(name, attributes, value) {
    const element = document.createElementNS(svgNS, name);
    Object.entries(attributes).forEach(([key, val]) => element.setAttribute(key, String(val)));
    if (value !== undefined) element.textContent = value;
    return element;
  }
  function drawGraph() {
    const paths = current.presetId === 'nonregular' ? {
      a1: ['M112 133Q200 40 288 133', 195, 84],
      a2: ['M288 155Q200 245 112 155', 195, 222],
      b2: ['M332 133Q420 40 508 133', 415, 84],
      b3: ['M508 155Q420 245 332 155', 415, 222],
      b1: ['M78 126C-5 40 -5 248 78 162', 20, 145],
      a3: ['M542 126C625 40 625 248 542 162', 600, 145]
    } : {
      a1: ['M112 144L288 144', 200, 132],
      a2: ['M332 144L508 144', 420, 132],
      a3: ['M521 164C430 277 190 277 99 164', 310, 256],
      b1: ['M78 126C-5 40 -5 248 78 162', 20, 145],
      b2: ['M298 126C230 15 390 15 322 126', 310, 48],
      b3: ['M542 126C625 40 625 248 542 162', 600, 145]
    };
    const edgeGroup = byId('covers-graph-edges');
    const labelGroup = byId('covers-graph-labels');
    edgeGroup.replaceChildren(); labelGroup.replaceChildren();
    current.positiveEdges.forEach(edge => {
      const [path, x, y] = paths[edge.id];
      edgeGroup.appendChild(svgElement('path', {
        d: path, class: 'covers-' + edge.label + (current.tree.edgeIds.includes(edge.id) ? ' covers-tree-edge' : ''),
        'data-cover-edge': edge.id, 'marker-end': 'url(#covers-arrow)'
      }));
      labelGroup.appendChild(svgElement('text', { x, y }, edge.id));
    });
    const vertices = byId('covers-graph-vertices'); vertices.replaceChildren();
    [90, 310, 530].forEach((x, index) => {
      vertices.appendChild(svgElement('circle', { cx: x, cy: 144, r: 21, 'data-cover-sheet': index + 1 }));
      vertices.appendChild(svgElement('text', { x, y: 151 }, index + 1));
    });
    text('covers-graph-title', current.presetId === 'nonregular'
      ? 'First three-sheet cover: six distinct edges, including parallel pairs'
      : 'Cyclic three-sheet cover: an a-cycle with a b-loop at each vertex');
    text('covers-graph-description', current.positiveEdges.map(edge => edge.id + ': ' + edge.from + ' to ' + edge.to).join('; ') + '. Dashed edges form the selected rooted tree. The exact path table names the direction of each traversal.');
  }
  function inspectStep() {
    const move = state.step ? current.lift.steps[state.step - 1] : null;
    const sheet = move ? move.to : current.start;
    const range = byId('covers-step');
    range.max = current.word.length; range.value = state.step;
    range.disabled = current.word.length === 0;
    byId('covers-previous').disabled = state.step === 0;
    byId('covers-next').disabled = state.step === current.word.length;
    text('covers-step-status', move
      ? 'After ' + state.step + ' letters: at sheet ' + sheet + '; the last move uses positive edge ' + move.edgeId + ' ' + (move.orientation === 1 ? 'forwards' : 'backwards') + ', from ' + move.from + ' to ' + move.to + '.'
      : 'Before the first letter: at starting sheet ' + current.start + '. No edge has been traversed.');
    byId('covers-trace').querySelectorAll('tr').forEach(row => {
      if (row.dataset.step === String(state.step)) row.setAttribute('aria-current', 'step');
      else row.removeAttribute('aria-current');
    });
    byId('covers-graph-edges').querySelectorAll('[data-cover-edge]').forEach(path => {
      path.classList.toggle('covers-selected-edge', Boolean(move && move.edgeId === path.dataset.coverEdge));
    });
    byId('covers-graph-vertices').querySelectorAll('[data-cover-sheet]').forEach(circle => {
      circle.classList.toggle('covers-current', Number(circle.dataset.coverSheet) === sheet);
      circle.classList.toggle('covers-root', Number(circle.dataset.coverSheet) === current.start);
    });
  }
  function renderDeck() {
    const result = math.testDeck(state.preset, state.deck);
    byId('covers-deck-candidate').value = state.deck.join(',');
    if (result.valid) {
      text('covers-deck-result', 'D=' + result.cycleNotation + ' commutes with both edge transports at all three sheets. It extends to a deck transformation of the committed cover.');
    } else {
      const failure = result.violations[0];
      const letter = failure.label === 'a' ? 'Pₐ' : 'Pᵦ';
      text('covers-deck-result', 'D=' + result.cycleNotation + ' fails: for ' + failure.label + ' at sheet ' + failure.sheet + ', D(' + letter + '(' + failure.sheet + '))=' + failure.deckAfterLift + ' while ' + letter + '(D(' + failure.sheet + '))=' + failure.liftAfterDeck + '. It does not define a deck map of the committed cover.');
    }
    const count = current.deck.transformations.length;
    text('covers-deck-all', 'All deck maps (' + count + ' of the ' + current.deck.candidateCount + ' sheet permutations): ' + current.deck.transformations.map(item => item.cycleNotation).join(', ') + '. Sheet orbits: ' + current.deck.orbits.map(orbit => '{' + orbit.join(',') + '}').join(', ') + '. This connected cover is ' + (current.deck.regular ? 'regular.' : 'not regular.'));
  }
  function render() {
    current = math.analyze(state.preset, { start: state.start, word: state.word });
    fields.preset.value = state.preset; fields.start.value = state.start; fields.word.value = state.word;
    const cover = state.preset === 'nonregular' ? 'Pₐ=(12), Pᵦ=(23)' : 'Pₐ=(123), Pᵦ=identity';
    text('covers-snapshot', 'Committed case: ' + cover + '; starting sheet ' + state.start + '; word ' + wordLabel(current.word) + '.');
    const trace = byId('covers-trace'); trace.replaceChildren();
    current.lift.steps.forEach(move => appendRow(trace,
      [move.index, move.letter, move.from + ' → ' + move.to, move.edgeId + (move.orientation === 1 ? ' forwards' : ' backwards')],
      { 'data-step': move.index, 'data-edge': move.edgeId, 'data-orientation': move.orientation }));
    if (!current.word.length) appendRow(trace, ['0', 'empty', state.start + ' → ' + state.start, 'No edge traversed']);
    text('covers-endpoint', 'Sheet ' + current.endpoint + ' · ' + (current.closed ? 'closed' : 'open'));
    text('covers-reduced', wordLabel(current.reducedWord) + (current.reducedWord ? ' · nonempty' : ' · identity'));
    const component = current.components.find(item => item.id === current.rootComponentId);
    text('covers-rank', component.vertexCount + ' vertices, ' + component.edgeCount + ' edges; rank ' + component.rank);
    text('covers-closure', !current.closed
      ? 'The lift is open. This word does not belong to the subgroup for starting sheet ' + state.start + '. A subgroup-basis rewrite is therefore unavailable.'
      : current.reducedWord
        ? 'The word belongs to the subgroup for sheet ' + state.start + '. Its closed lift is not null-homotopic: its projection is the nonempty reduced word ' + current.reducedWord + '.'
        : 'The lift closes and the word freely reduces to the identity. Cancelling each inverse edge pair contracts this lifted edge loop.');
    text('covers-tree-caption', 'Rooted tree: ' + current.tree.edgeIds.join(',') + '; paths: ' + current.tree.paths.slice().sort((a, b) => a.sheet - b.sheet).map(item => item.sheet + ': ' + wordLabel(item.word)).join('; '));
    const basis = byId('covers-basis-rows'); basis.replaceChildren();
    current.basis.forEach(item => appendRow(basis, [item.id, item.edgeId, wordLabel(item.word)], { 'data-generator': item.id }));
    const rewrite = current.rewriting;
    if (rewrite.applicable) {
      const factors = rewrite.reducedFactors.map(item => item.generatorId + (item.exponent === -1 ? '⁻¹' : '')).join(' ');
      text('covers-rewrite', wordLabel(current.word) + ' = ' + (factors || 'identity in the subgroup basis') + '.');
      text('covers-rewrite-check', 'The original non-tree traversal factors expand to ' + wordLabel(rewrite.expandedWord) + '; inverse basis factors may cancel to give the displayed basis word. Free reduction gives ' + wordLabel(rewrite.expansionReduced) + ', matching the input reduction exactly. This verifies the selected word; the tree-collapse and telescoping arguments prove the general basis statement.');
    } else {
      text('covers-rewrite', rewrite.reason);
      text('covers-rewrite-check', 'The displayed basis belongs to the chosen root subgroup, but the committed input is outside it. The workbench does not assign a subgroup word to an open lift.');
    }
    drawGraph(); inspectStep(); renderDeck();
  }

  restore(); render();
  ['covers-form', 'covers-deck-form', 'covers-step-controls', 'covers-print', 'covers-download'].forEach(id => { byId(id).hidden = false; });
  byId('covers-form').addEventListener('submit', event => {
    event.preventDefault();
    try {
      const next = checkedState({ preset: fields.preset.value, start: Number(fields.start.value), word: fields.word.value,
        deck: state.deck, step: math.parseWord(fields.word.value).length });
      state = next; render(); text('covers-input-error', ''); text('covers-deck-error', ''); save();
    } catch (error) {
      text('covers-input-error', error.message + ' Readouts still show the last committed calculation.');
    }
  });
  byId('covers-deck-form').addEventListener('submit', event => {
    event.preventDefault();
    try {
      const images = byId('covers-deck-candidate').value.split(',').map(Number);
      math.testDeck(state.preset, images); state = { ...state, deck: images };
      renderDeck(); text('covers-deck-error', ''); save();
    } catch (error) {
      text('covers-deck-error', error.message + ' The preceding committed candidate remains displayed.');
    }
  });
  function setStep(value) {
    state = { ...state, step: Math.max(0, Math.min(current.word.length, value)) };
    inspectStep(); save();
  }
  byId('covers-step').addEventListener('input', event => setStep(Number(event.target.value)));
  byId('covers-previous').addEventListener('click', () => setStep(state.step - 1));
  byId('covers-next').addEventListener('click', () => setStep(state.step + 1));
  noteFields.forEach(field => field.addEventListener('input', save));
  byId('covers-print').addEventListener('click', () => window.print());
  byId('covers-download').addEventListener('click', () => {
    let url;
    let link;
    try {
      const content = ['Three sheets, how many symmetries? — personal attempts',
        'Committed case (draft form changes are excluded): ' + JSON.stringify(state),
        'Written explanations are not automatically proof-checked.',
        ...noteFields.map(field => '\n' + field.dataset.coversNote + '\n' + field.value)].join('\n');
      url = URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' }));
      link = document.createElement('a'); link.href = url; link.download = 'covering-graphs-attempts.txt';
      document.body.appendChild(link); link.click();
      text('covers-storage', 'Download requested. Keep the text file once your browser saves it.');
    } catch (_error) {
      text('covers-storage', 'The download could not be prepared. Your attempts remain on this page; copy them or try again.');
    } finally {
      if (link) link.remove();
      if (url) setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
  });
})();
