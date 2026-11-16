(function () {
  'use strict';
  const M = window.LoopWordMath;
  const $ = id => document.getElementById(id);
  const svgNS = 'http://www.w3.org/2000/svg';
  const shown = word => word || '∅';
  let trace, rightWord = '';
  function edge(letter) {
    const x = letter.toLowerCase() === 'a' ? 100 : 460;
    const sweep = letter === letter.toUpperCase() ? 1 : 0;
    return 'M280 180 A90 90 0 1 ' + sweep + ' ' + x + ' 180 A90 90 0 1 ' + sweep + ' 280 180';
  }
  function step() {
    if (!trace) return;
    const count = Number($('word-step').value);
    const current = trace.steps[count - 1];
    $('word-step-value').textContent = String(count);
    $('word-print-settings').textContent = 'Input first word: ' + shown(trace.word) + '. Input second word: ' + shown(rightWord) + '. Letters processed: ' + count + '.';
    $('word-before').textContent = shown(current ? current.before : '');
    $('word-after').textContent = shown(current ? current.after : '');
    $('word-active-edge').style.display = current ? '' : 'none';
    if (current) $('word-active-edge').setAttribute('d', edge(current.letter));
    $('word-active-label').textContent = current ? 'Selected input letter: ' + current.letter : 'No letters processed';
    $('word-step-explanation').textContent = !current ? 'Start with the empty stack.' : current.cancelled
      ? current.letter + ' cancels the final ' + current.before.slice(-1) + '; they traverse and retrace one edge.'
      : current.letter + ' is appended; it does not invert the current final letter.';
    $('word-desc').textContent = 'Figure-eight graph with fixed basepoint v. ' + $('word-active-label').textContent + '. ' + $('word-step-explanation').textContent + ' This is an algorithm step, not a deformation of the entire loop.';
  }
  function compare() {
    try {
      const left = $('word-left').value, right = $('word-right').value;
      const result = M.compareWords(left, right);
      trace = M.reductionSteps(left);
      rightWord = M.parseWord(right).join('');
      $('word-error').textContent = '';
      $('word-result').hidden = false;
      $('word-left-reduced').textContent = shown(result.leftReduced);
      $('word-right-reduced').textContent = shown(result.rightReduced);
      $('word-free-verdict').textContent = 'In W: ' + (result.freeEqual ? 'the same' : 'different') + ' based homotopy ' + (result.freeEqual ? 'class.' : 'classes.');
      $('word-torus-verdict').textContent = 'On T²: ' + (result.torusEqual ? 'the same' : 'different') + ' based homotopy ' + (result.torusEqual ? 'class' : 'classes') + ', with exponent difference (' + result.exponents.a + ', ' + result.exponents.b + ').';
      $('word-difference').textContent = 'First followed by inverse second reduces to ' + shown(result.differenceReduced) + '.';
      $('word-step').max = String(trace.steps.length);
      $('word-step').value = String(trace.steps.length);
      $('word-step').disabled = trace.steps.length === 0;
      step();
    } catch (error) {
      trace = null;
      $('word-result').hidden = true;
      $('word-error').textContent = error.message;
    }
  }
  $('word-form').addEventListener('submit', event => { event.preventDefault(); compare(); });
  for (const button of document.querySelectorAll('[data-words]')) {
    button.addEventListener('click', () => {
      const [left, right] = button.dataset.words.split('|');
      $('word-left').value = left; $('word-right').value = right; compare();
    });
  }
  $('word-step').addEventListener('input', step);

  // A finite orthographic illustration of the quotient. The mathematical
  // definition is S¹ × S¹; screen intersections are not target identifications.
  const TAU = 2 * Math.PI;
  function torusPoint(x, y) {
    const radius = 2 + 0.72 * Math.cos(TAU * y);
    const X = radius * Math.cos(TAU * x), Y = radius * Math.sin(TAU * x), Z = 0.72 * Math.sin(TAU * y);
    const yaw = 0.58, pitch = 0.68;
    return [280 + 83 * (Math.cos(yaw) * X - Math.sin(yaw) * Y),
      180 - 83 * (Math.sin(pitch) * (Math.sin(yaw) * X + Math.cos(yaw) * Y) + Math.cos(pitch) * Z)];
  }
  function data(points) { return points.map(([x, y], i) => (i ? 'L' : 'M') + x.toFixed(3) + ',' + y.toFixed(3)).join(' '); }
  function samples(fn, count = 240) { return Array.from({ length: count + 1 }, (_, i) => fn(i / count)); }
  const wire = $('torus-wire');
  wire.replaceChildren();
  for (let j = 0; j < 12; j++) {
    for (const fn of [s => torusPoint(s, j / 12), s => torusPoint(j / 12, s)]) {
      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', data(samples(fn, 72))); wire.appendChild(path);
    }
  }
  function torus() {
    const t = Number($('torus-time').value), correct = $('torus-family').value === 'commutator';
    const lift = correct ? s => M.squareContraction(s, t) : s => M.generatorScaling(s, t);
    $('torus-time-value').textContent = t.toFixed(2);
    $('lift-curve').setAttribute('d', data(samples(s => { const [x, y] = lift(s); return [100 + 250 * x, 305 - 250 * y]; }, 4)));
    $('torus-curve').setAttribute('d', data(samples(s => torusPoint(...lift(s)))));
    const end = lift(1), endScreen = torusPoint(...end), baseScreen = torusPoint(0, 0);
    for (const [id, point] of [['lift-end', [100 + 250 * end[0], 305 - 250 * end[1]]], ['torus-end', endScreen], ['torus-basepoint', baseScreen]]) {
      $(id).setAttribute('cx', point[0]); $(id).setAttribute('cy', point[1]);
    }
    const selectedCloses = correct || t === 0 || t === 1;
    $('torus-boundary').textContent = selectedCloses
      ? 'Selected slice: both loop endpoints project to the basepoint.'
      : 'Selected slice fails: lift endpoint (1−t,0) = (' + (1 - t).toFixed(2) + ',0) is not an integer pair; the projected path does not close.';
    $('torus-verdict').textContent = correct
      ? 'Whole family: valid based contraction of abAB on T². Continuity and fixed endpoints follow from the displayed formula.'
      : 'Whole family: invalid as a based contraction of a. Every interior time fails the endpoint condition, even when the selected endpoint slice closes.';
    $('torus-print-settings').textContent = 'Shown: ' + (correct ? 'commutator' : 'attempted generator') + ' family, t = ' + t.toFixed(2) + '; lift start (0,0), lift end (' + end[0].toFixed(2) + ',' + end[1].toFixed(2) + ').';
    $('lift-desc').textContent = 'A path in the filled covering plane. ' + $('torus-print-settings').textContent + ' ' + $('torus-boundary').textContent;
    $('torus-desc').textContent = 'Wireframe screen illustration of the same path projected to T². ' + $('torus-boundary').textContent + ' ' + $('torus-verdict').textContent + ' Screen overlaps do not identify target points.';
  }
  $('torus-time').addEventListener('input', torus);
  $('torus-family').addEventListener('change', torus);
  compare(); torus();

  const key = 'euler-loops-and-words-notes-v1';
  const fields = [...document.querySelectorAll('[data-word-note]')];
  const notes = Object.create(null), status = $('words-notes-status');
  for (const field of fields) field.maxLength = 8000;
  let storage = true;
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '{}');
    if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
      for (const field of fields) if (typeof saved[field.dataset.wordNote] === 'string') {
        notes[field.dataset.wordNote] = saved[field.dataset.wordNote].slice(0, 8000);
        field.value = notes[field.dataset.wordNote];
      }
    }
  } catch (_) { storage = false; status.textContent = 'Storage unavailable. Download notes to keep them.'; }
  for (const field of fields) field.addEventListener('input', () => {
    notes[field.dataset.wordNote] = field.value.slice(0, 8000);
    if (storage) {
      try { localStorage.setItem(key, JSON.stringify(notes)); status.textContent = 'Notes saved in this browser.'; }
      catch (_) { storage = false; }
    }
    if (!storage) status.textContent = 'Notes kept for this visit. Download to retain them.';
  });
  $('words-export').addEventListener('click', () => {
    const lines = ['Loops, words, and the torus — study notes', ''];
    for (const field of fields) if (field.value.trim()) lines.push(field.dataset.wordNote, field.value, '');
    const url = URL.createObjectURL(new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' }));
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'loops-and-words-notes.txt'; anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  });
  $('words-print').addEventListener('click', () => window.print());
})();
