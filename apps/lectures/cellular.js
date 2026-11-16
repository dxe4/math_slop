(function () {
  'use strict';
  const math = window.CellularMath;
  if (!math) return;
  const byId = id => document.getElementById(id);
  const form = byId('cellular-form');
  const fields = {
    preset: byId('cellular-preset'), coefficient: byId('cellular-coeff'),
    a: byId('cellular-delta-a'), b: byId('cellular-delta-b')
  };
  const noteFields = [...document.querySelectorAll('[data-cellular-note]')];
  const storageKey = 'euler-cellular-words-v1';
  let state = { preset: 'x', coefficient: 'Z', a: '3', b: '0' };
  const rings = { Z: 'ℤ', Q: 'ℚ', F2: '𝔽₂', F3: '𝔽₃' };
  const cell = name => name === 'sigma' ? 'σ' : name === 'tau' ? 'τ' : name;
  const readable = text => text.replace(/\bZ\b/g, 'ℤ').replace(/\bQ\b/g, 'ℚ').replace(/F₂/g, '𝔽₂').replace(/F₃/g, '𝔽₃');
  const chain = value => '(' + value.a + ')a + (' + value.b + ')b';
  function setText(id, value) { byId(id).textContent = value; }
  function notes() {
    return Object.fromEntries(noteFields.map(field => [field.dataset.cellularNote, field.value]));
  }
  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ version: 1, state, notes: notes() }));
      setText('cellular-storage', 'Committed case and attempts saved in this browser. Download a portable copy.');
    } catch (_error) {
      setText('cellular-storage', 'Browser storage is unavailable. Your work remains in this visit; download a copy to keep it.');
    }
  }
  function readState(candidate) {
    if (!candidate || typeof candidate !== 'object') throw new TypeError('Invalid saved case.');
    if (typeof candidate.preset !== 'string' || !math.COEFFICIENTS.includes(candidate.coefficient)) {
      throw new TypeError('Choose a declared complex and coefficient system.');
    }
    math.analyze(candidate.preset, candidate.coefficient);
    return {
      preset: candidate.preset, coefficient: candidate.coefficient,
      a: math.parseInteger(candidate.a), b: math.parseInteger(candidate.b)
    };
  }
  function restore() {
    let raw;
    try {
      raw = localStorage.getItem(storageKey);
    } catch (_error) {
      setText('cellular-storage', 'Browser storage is unavailable. Your work remains in this visit; download a copy to keep it.');
      return;
    }
    if (!raw) {
      setText('cellular-storage', 'Write an attempt or calculate a case to save your work in this browser. Download a portable copy whenever you wish.');
      return;
    }
    try {
      const saved = JSON.parse(raw);
      if (!saved || saved.version !== 1) throw new TypeError('Unsupported saved version.');
      state = readState(saved.state);
      if (saved.notes && typeof saved.notes === 'object') {
        noteFields.forEach(field => {
          const value = saved.notes[field.dataset.cellularNote];
          if (typeof value === 'string') field.value = value.slice(0, 8000);
        });
      }
      setText('cellular-storage', 'Saved committed case and attempts restored. Written reasoning is not automatically checked.');
    } catch (_error) {
      setText('cellular-storage', 'Saved work could not be restored. The default case is shown; you can download work from this visit.');
    }
  }
  function drawMatrix(matrix, ring) {
    const head = byId('cellular-matrix-head');
    const body = byId('cellular-matrix-body');
    head.replaceChildren(); body.replaceChildren();
    ['Edge', ...matrix.source.map(cell)].forEach(label => {
      const header = document.createElement('th');
      header.scope = 'col'; header.textContent = label; head.appendChild(header);
    });
    matrix.target.forEach((label, index) => {
      const row = document.createElement('tr');
      const header = document.createElement('th');
      header.scope = 'row'; header.textContent = label; row.appendChild(header);
      matrix.entries[index].forEach(value => {
        const entry = document.createElement('td'); entry.textContent = value; row.appendChild(entry);
      });
      body.appendChild(row);
    });
    setText('cellular-matrix-caption', 'd₂: C₂→C₁ over ' + ring + '; rows a,b; columns ' + matrix.source.map(cell).join(','));
  }
  function render() {
    const analysis = math.analyze(state.preset, state.coefficient);
    const result = math.fill(state.preset, state.coefficient, state.a, state.b);
    Object.keys(fields).forEach(key => { fields[key].value = state[key]; });
    const ring = rings[state.coefficient];
    setText('cellular-snapshot', 'Committed case: ' + analysis.preset.label + '; coefficients ' + ring + '; integer difference ' + chain(result.input) + '.');
    setText('cellular-words', 'Attaching words: ' + analysis.integralColumns.map(column => cell(column.cell) + ' → ' + column.word + ' (integer column ' + column.a + ',' + column.b + ')').join('; ') + '.');
    drawMatrix(analysis.matrices.d2, ring);
    ['H0', 'H1', 'H2'].forEach((name, index) => setText('cellular-h' + index,
      readable(analysis.homology[name].label) + '; generators ' + analysis.homology[name].generators.map(readable).map(value => value.replace(/sigma/g, 'σ').replace(/tau/g, 'τ')).join(', ')));
    setText('cellular-chain', chain(result.chain) + ' over ' + ring);
    const klass = result.canonicalClass;
    setText('cellular-class', klass.zero ? 'Zero class.' :
      '[' + klass.a + (klass.aModulus ? ' mod ' + klass.aModulus : '') + ']a + [' + klass.b + (klass.bModulus ? ' mod ' + klass.bModulus : '') + ']b.');
    if (result.fills) {
      const coefficients = result.certificate.coefficients;
      const filling = Object.entries(coefficients).map(([name, value]) => '(' + value + ')' + cell(name)).join(' + ');
      setText('cellular-fill', 'Yes, the difference is a cellular boundary over ' + ring + '.');
      setText('cellular-certificate', 'One filling is c=' + filling + '. Its exact boundary is d₂c=' + chain(result.certificate.boundary) + ' in ' + ring + '. Every ' + result.certificate.free2CellGenerators.map(cell).join(', ') + ' coefficient may also vary freely without changing the boundary.');
    } else {
      setText('cellular-fill', 'No cellular filling over ' + ring + ': ' + result.obstruction.explanation);
      setText('cellular-certificate', 'Obstruction: ' + result.obstruction.coordinate + '-coordinate ' + result.obstruction.value + '. ' + result.obstruction.explanation);
    }
    const witness = analysis.witness;
    setText('cellular-permutations', 'a=(12), b=(23). Relator images: ' + witness.relators.map(relator => cell(relator.cell) + ' (' + relator.word + ') → ' + relator.cycleNotation).join('; ') + '. ' + witness.conclusion + ' The rightmost permutation acts first.');
  }
  restore();
  render();
  form.hidden = false;
  byId('cellular-print').hidden = false;
  byId('cellular-download').hidden = false;
  form.addEventListener('submit', event => {
    event.preventDefault();
    try {
      const candidate = Object.fromEntries(Object.entries(fields).map(([key, field]) => [key, field.value]));
      const next = readState(candidate);
      math.fill(next.preset, next.coefficient, next.a, next.b);
      state = next;
      render();
      setText('cellular-input-error', '');
      save();
    } catch (error) {
      setText('cellular-input-error', error.message + ' The readouts still show the last committed calculation.');
    }
  });
  noteFields.forEach(field => field.addEventListener('input', save));
  byId('cellular-print').addEventListener('click', () => window.print());
  byId('cellular-download').addEventListener('click', () => {
    const text = ['A matrix forgets word order — personal attempts',
      'Committed case: ' + JSON.stringify(state), 'Writing is not automatically proof-checked.',
      ...noteFields.map(field => '\n' + field.dataset.cellularNote + '\n' + field.value)].join('\n');
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url; link.download = 'cellular-words-attempts.txt';
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setText('cellular-storage', 'Attempts downloaded. Keep this file as a portable copy.');
  });
})();
