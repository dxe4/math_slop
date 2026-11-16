(function () {
  'use strict';
  const M = window.MathConditions;
  const $ = id => document.getElementById(id);
  const ns = 'http://www.w3.org/2000/svg';
  const key = 'euler-conditions-study-v1';
  const fields = [...document.querySelectorAll('[data-note]')];
  const state = { version: 1, notes: Object.create(null), cases: Object.create(null) };
  let storage = true;
  function save() {
    if (storage) {
      try { localStorage.setItem(key, JSON.stringify(state)); $('notes-status').textContent = 'Notes and computed cases saved in this browser.'; }
      catch (_) { storage = false; }
    }
    if (!storage) $('notes-status').textContent = 'Notes and computed cases are kept for this visit. Download your notes to retain them.';
  }
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '{}');
    if (saved && saved.version === 1 && saved.notes && typeof saved.notes === 'object') {
      for (const field of fields) if (typeof saved.notes[field.dataset.note] === 'string') {
        field.value = saved.notes[field.dataset.note].slice(0, 8000);
        state.notes[field.dataset.note] = field.value;
      }
    }
    for (const [name, names, operation] of [['q', ['a', 'b', 'x'], M.quotient], ['s', ['a', 'b'], M.squareEquation], ['l', ['a', 'x'], M.logIdentity]]) {
      const values = saved && saved.version === 1 && saved.cases && saved.cases[name];
      if (!values || !names.every(n => typeof values[n] === 'string')) continue;
      try {
        operation(...names.map(n => values[n]));
        for (const n of names) $(name + '-' + n).value = values[n];
      } catch (_) { /* Keep the authored default if a saved case is invalid. */ }
    }
  } catch (_) { storage = false; }
  for (const field of fields) field.addEventListener('input', () => {
    state.notes[field.dataset.note] = field.value; save();
  });
  const fmt = M.format;
  const set = values => values.length ? '{' + values.map(fmt).join(', ') + '}' : '∅';
  function svg(tag, attributes) {
    const node = document.createElementNS(ns, tag);
    for (const [name, value] of Object.entries(attributes)) node.setAttribute(name, value);
    return node;
  }
  function probe(id, distance, rows) {
    const group = $(id);
    const inside = M.compare(distance, '-2') >= 0 && M.compare(distance, '2') <= 0;
    group.style.display = inside ? '' : 'none';
    if (!inside) return 'The probe is outside the shown window.';
    const approximation = M.toApprox(distance);
    const x = 320 + 125 * (approximation.value === null ? 0 : approximation.value);
    group.replaceChildren(...rows.flatMap(y => [
      svg('path', { d: 'M' + x + ' ' + (y - 27) + 'V' + (y - 12), class: 'probe' }),
      svg('circle', { cx: x, cy: y - 30, r: 4, class: 'probe-dot' })
    ]));
    return 'The probe position is rounded for drawing; domain and equality decisions are exact.';
  }
  function run(prefix, names, operation, render) {
    try {
      const values = Object.fromEntries(names.map(n => [n, $(prefix + '-' + n).value]));
      const result = operation(...names.map(n => values[n]));
      render(result);
      $(prefix + '-error').textContent = '';
      $(prefix + '-results').hidden = false;
      state.cases[prefix] = values; save();
    } catch (error) {
      $(prefix + '-error').textContent = error.message;
      $(prefix + '-results').hidden = true;
    }
  }
  function quotient() {
    run('q', ['a', 'b', 'x'], M.quotient, result => {
      $('q-original').textContent = result.originalDefined ? fmt(result.originalValue) : 'Undefined: x=a';
      $('q-simplified').textContent = fmt(result.simplifiedValue);
      $('q-candidate').textContent = fmt(result.candidate);
      $('q-solution').textContent = result.candidateAdmissible ? set([result.candidate]) : '∅';
      $('q-verdict').textContent = result.candidateAdmissible
        ? 'The candidate x=' + fmt(result.candidate) + ' lies in the original domain and is its unique solution.'
        : 'The cancelled equation suggests x=' + fmt(result.candidate) + ', but the original domain excludes it. The original equation has no solution.';
      const note = probe('q-probe', M.subtract(result.x, result.a), [80, 202]);
      $('q-window').textContent = 'Shown input window [a−2,a+2], centered at a=' + fmt(result.a) + '. A hollow point is excluded; a filled point is included. The probe marks an input, not an output. ' + note;
      $('q-snapshot').textContent = 'Shown: a=' + fmt(result.a) + ', b=' + fmt(result.b) + ', probe x=' + fmt(result.x) + '.';
      $('q-desc').textContent = 'Original domain is all reals except a; extension domain is all reals. ' + $('q-snapshot').textContent + ' Original probe value: ' + $('q-original').textContent + '. Original equation solution set: ' + $('q-solution').textContent + '. This is a domain diagram, not an output graph.';
    });
  }
  function roots(id, values, a, scale, y, className) {
    $(id).replaceChildren(...values.map(root => {
      const offset = M.toApprox(M.divide(M.subtract(root, a), scale)).value;
      return svg('circle', { cx: 320 + 200 * offset, cy: y, r: 6, class: className });
    }));
  }
  function square() {
    run('s', ['a', 'b'], M.squareEquation, result => {
      const absoluteB = M.compare(result.b, '0') < 0 ? M.subtract('0', result.b) : result.b;
      const zero = M.compare(absoluteB, '0') === 0;
      const scale = zero ? M.parse('1') : absoluteB;
      roots('s-original-points', result.roots, result.a, scale, 86, 'included');
      roots('s-candidate-points', result.squaredCandidates, result.a, scale, 205, 'candidate');
      $('s-empty').style.display = result.roots.length ? 'none' : '';
      $('s-roots').textContent = set(result.roots);
      $('s-candidates').textContent = set(result.squaredCandidates);
      $('s-spurious').textContent = set(result.spuriousRoots);
      $('s-scale').textContent = 'Horizontal coordinate (x−a)/L, with L=' + fmt(scale) + (zero ? ' because b=0.' : '=|b|.') + ' This is a solution-marker diagram; exact x values are listed below.';
      $('s-verdict').textContent = result.hasSpurious
        ? 'Both squared candidates fail the original equation because a principal square root cannot equal ' + fmt(result.b) + '.'
        : 'The right side is nonnegative. Every squared candidate satisfies the original equation; there ' + (zero ? 'is one solution.' : 'are two solutions.');
      $('s-snapshot').textContent = 'Shown: a=' + fmt(result.a) + ', b=' + fmt(result.b) + '.';
      $('s-desc').textContent = $('s-snapshot').textContent + ' Original solutions: ' + set(result.roots) + '. Squared candidates: ' + set(result.squaredCandidates) + '. Extraneous: ' + set(result.spuriousRoots) + '.';
    });
  }
  function logarithm() {
    run('l', ['a', 'x'], M.logIdentity, result => {
      const value = M.compare(result.absoluteDistance, '1') === 0 ? '0' : '2 log(' + fmt(result.absoluteDistance) + ')';
      $('l-original').textContent = result.originalDefined ? 'Defined; exact value ' + value : 'Not defined: logarithm of zero';
      $('l-naive').textContent = result.naiveDefined ? 'Defined; exact value ' + value : 'Not defined as a real logarithm';
      $('l-repaired').textContent = result.repairedDefined ? 'Defined; exact value ' + value : 'Not defined: logarithm of zero';
      $('l-verdict').textContent = !result.originalDefined
        ? 'At x=a, all three real logarithms are undefined. The absolute value does not make log(0) defined.'
        : result.naiveDefined ? 'All three expressions are defined at this input and have the same value. The naive formula still has a smaller full domain.'
          : 'The naive rewrite loses this input. The absolute-value formula agrees with the original on its entire real domain.';
      const note = probe('l-probe', result.distance, [68, 163, 262]);
      $('l-window').textContent = 'Shown input window [a−2,a+2], centered at a=' + fmt(result.a) + '. Colored segments indicate the real domain. ' + note;
      $('l-snapshot').textContent = 'Shown: a=' + fmt(result.a) + ', probe x=' + fmt(result.x) + '.';
      $('l-desc').textContent = 'Original and repaired domains omit only a; naive domain is x greater than a. ' + $('l-snapshot').textContent + ' ' + $('l-verdict').textContent;
    });
  }
  const operations = { q: quotient, s: square, l: logarithm };
  for (const [form, operation] of [['quotient-form', quotient], ['square-form', square], ['log-form', logarithm]]) {
    $(form).addEventListener('submit', event => { event.preventDefault(); operation(); });
  }
  for (const [name, names] of [['q', ['a', 'b', 'x']], ['s', ['a', 'b']], ['l', ['a', 'x']]]) {
    for (const button of document.querySelectorAll('[data-' + name + ']')) button.addEventListener('click', () => {
      const values = button.dataset[name].split('|');
      names.forEach((n, i) => { $(name + '-' + n).value = values[i]; }); operations[name]();
    });
  }
  quotient(); square(); logarithm();
  $('print').addEventListener('click', () => window.print());
  $('export').addEventListener('click', () => {
    const lines = ['Conditions — study notes', '', 'Last computed cases'];
    for (const id of ['q-snapshot', 's-snapshot', 'l-snapshot']) lines.push($(id).textContent);
    lines.push('');
    for (const field of fields) if (field.value.trim()) lines.push(field.dataset.note, field.value, '');
    const url = URL.createObjectURL(new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = 'conditions-study-notes.txt'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  });
})();
