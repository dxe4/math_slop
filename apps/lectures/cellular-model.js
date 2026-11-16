/* Exact cellular-chain calculations for four declared finite CW complexes.
 * This is not a classifier for arbitrary attaching words or spaces. Each space
 * has one vertex, oriented 1-cells a,b, a 2-cell sigma, and optionally tau.
 * Integer strings are interpreted in the selected coefficient ring. BigInt
 * is internal only: every public result is frozen and JSON serializable.
 * The accompanying workshop supplies the cellular and presentation theorems.
 */
(function (root, factory) {
  const model = factory();
  if (typeof module === 'object' && module.exports) module.exports = model;
  else root.CellularMath = model;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  function freeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  }
  const BOUNDS = freeze({ MAX_INTEGER_LENGTH: 80, MAX_WORD_LENGTH: 128 });
  const COEFFICIENTS = freeze(['Z', 'Q', 'F2', 'F3']);
  const rings = freeze({
    Z: { id: 'Z', label: 'Z', characteristic: 0, isField: false },
    Q: { id: 'Q', label: 'Q', characteristic: 0, isField: true },
    F2: { id: 'F2', label: 'F₂', characteristic: 2, isField: true },
    F3: { id: 'F3', label: 'F₃', characteristic: 3, isField: true }
  });
  const PRESETS = freeze([
    { id: 'torus', label: 'Torus presentation complex', sigmaWord: 'abAB', hasTau: false },
    { id: 'x', label: 'X: the commutator of a² and b', sigmaWord: 'aabAAB', hasTau: false },
    { id: 'torus-tau', label: 'Torus complex with the aaa cell', sigmaWord: 'abAB', hasTau: true },
    { id: 'x-tau', label: 'X with the aaa cell', sigmaWord: 'aabAAB', hasTau: true }
  ].map(preset => ({ ...preset, cells: {
    C0: ['v'], C1: ['a', 'b'], C2: preset.hasTau ? ['sigma', 'tau'] : ['sigma'], C3: []
  } })));
  const presets = new Map(PRESETS.map(preset => [preset.id, preset]));

  function checkedPreset(id) {
    if (typeof id !== 'string' || !presets.has(id)) {
      throw new RangeError('Choose one of the four declared CW presets.');
    }
    return presets.get(id);
  }
  function checkedRing(id) {
    if (typeof id !== 'string' || !COEFFICIENTS.includes(id)) {
      throw new RangeError('The coefficient ring must be Z, Q, F2, or F3.');
    }
    return rings[id];
  }
  function parseInteger(value) {
    // Check the length before either the regular expression or BigInt parsing.
    if (typeof value !== 'string') throw new TypeError('Enter an integer as a string.');
    if (value.length === 0 || value.length > BOUNDS.MAX_INTEGER_LENGTH) {
      throw new RangeError('An integer input must contain from 1 to 80 characters.');
    }
    if (!/^[+-]?[0-9]+$/.test(value)) {
      throw new TypeError('Use decimal whole-number digits with an optional leading + or - sign.');
    }
    return String(BigInt(value));
  }
  function checkedWord(word) {
    if (typeof word !== 'string') throw new TypeError('A word must be a string.');
    if (word.length > BOUNDS.MAX_WORD_LENGTH) throw new RangeError('A word may contain at most 128 letters.');
    if (!/^[abAB]*$/.test(word)) throw new TypeError('A word may contain only a, b, A, and B.');
    return word;
  }
  function exponentSums(word) {
    checkedWord(word);
    let a = 0, b = 0;
    for (const letter of word) {
      if (letter === 'a') a++;
      else if (letter === 'A') a--;
      else if (letter === 'b') b++;
      else b--;
    }
    return freeze({ a: String(a), b: String(b) });
  }
  const IDENTITY = freeze([1, 2, 3]);
  const A = freeze([2, 1, 3]), B = freeze([1, 3, 2]);
  function compose(left, right) { return right.map(image => left[image - 1]); }
  function cycleNotation(images) {
    const seen = new Set(), cycles = [];
    for (let start = 1; start <= 3; start++) {
      if (seen.has(start)) continue;
      const cycle = [];
      let point = start;
      do { cycle.push(point); seen.add(point); point = images[point - 1]; } while (point !== start);
      if (cycle.length > 1) cycles.push('(' + cycle.join(' ') + ')');
    }
    return cycles.join('') || 'identity';
  }
  function evaluateWord(word) {
    checkedWord(word);
    let images = [...IDENTITY];
    for (const letter of word) images = compose(images, letter.toLowerCase() === 'a' ? A : B);
    // Both fixed generators are involutions, so A and B have the same images
    // as their lower-case counterparts. This is an evaluation, not a relation
    // imposed on the fundamental group of a selected complex.
    return freeze({ word, images, cycleNotation: cycleNotation(images),
      identity: images.every((image, index) => image === index + 1) });
  }
  function witness(preset) {
    const relators = [{ cell: 'sigma', ...evaluateWord(preset.sigmaWord) }];
    if (preset.hasTau) relators.push({ cell: 'tau', ...evaluateWord('aaa') });
    const descends = relators.every(relator => relator.identity);
    const ab = evaluateWord('ab'), ba = evaluateWord('ba');
    const noncommuting = ab.images.some((image, index) => image !== ba.images[index]);
    return freeze({
      convention: 'p ∘ q: the rightmost permutation acts first',
      generators: { a: { images: A, cycleNotation: '(1 2)' }, b: { images: B, cycleNotation: '(2 3)' } },
      relators, ab, ba, noncommuting, descends,
      provesNonabelianQuotient: descends && noncommuting,
      conclusion: descends
        ? 'This assignment gives a surjection onto the nonabelian group S3. It does not identify π1 with S3 or impose a² = 1 in π1.'
        : 'At least one attaching relator has a nonidentity image, so this assignment does not descend for this preset.'
    });
  }
  function residue(integer, modulus) {
    const remainder = integer % modulus;
    return remainder < 0n ? remainder + modulus : remainder;
  }
  function ringInteger(integer, ring) {
    return ring.characteristic ? residue(integer, BigInt(ring.characteristic)) : integer;
  }
  function rationalThird(integer) {
    return integer % 3n === 0n ? String(integer / 3n) : String(integer) + '/3';
  }
  function matrix(name, source, target, entries) {
    return { name, source, target, entries };
  }
  function group(ring, freeRank, generators, torsion = []) {
    const free = freeRank === 0 ? null : ring.label + (freeRank === 1 ? '' : '²');
    const torsionLabel = torsion.map(part => 'Z/' + part.order);
    return { label: [...torsionLabel, ...(free ? [free] : [])].join(' ⊕ ') || '0',
      freeRank, dimension: ring.isField ? freeRank : null, torsion, generators };
  }
  function analyze(presetId, coefficient = 'Z') {
    const preset = checkedPreset(presetId), ring = checkedRing(coefficient);
    const integralColumns = [{ cell: 'sigma', word: preset.sigmaWord, ...exponentSums(preset.sigmaWord) }];
    if (preset.hasTau) integralColumns.push({ cell: 'tau', word: 'aaa', ...exponentSums('aaa') });
    const integralEntries = ['a', 'b'].map(generator => integralColumns.map(column => column[generator]));
    const entries = integralEntries.map(row => row.map(value => String(ringInteger(BigInt(value), ring))));
    const hasNonzeroTau = preset.hasTau && coefficient !== 'F3';
    const h1Rank = hasNonzeroTau ? 1 : 2;
    const h1 = coefficient === 'Z' && preset.hasTau
      ? group(ring, 1, ['[a] (order 3)', '[b]'], [{ order: '3', generator: '[a]' }])
      : group(ring, h1Rank, h1Rank === 1 ? ['[b]'] : ['[a]', '[b]']);
    const h2Generators = preset.hasTau && coefficient === 'F3' ? ['[sigma]', '[tau]'] : ['[sigma]'];
    return freeze({ preset, coefficient: ring,
      scope: 'Cellular homology and cellular 1-boundaries for this declared finite CW complex.',
      integralColumns,
      matrices: {
        d1: matrix('∂₁', preset.cells.C1, preset.cells.C0, [['0', '0']]),
        d2: matrix('∂₂', preset.cells.C2, preset.cells.C1, entries),
        d3: matrix('∂₃', preset.cells.C3, preset.cells.C2, preset.cells.C2.map(() => [])),
        integralD2: matrix('∂₂ over Z', preset.cells.C2, preset.cells.C1, integralEntries)
      },
      homology: { H0: group(ring, 1, ['[v]']), H1: h1, H2: group(ring, h2Generators.length, h2Generators) },
      witness: witness(preset)
    });
  }
  function fill(presetId, coefficient, deltaA, deltaB) {
    const preset = checkedPreset(presetId), ring = checkedRing(coefficient);
    const input = { a: parseInteger(deltaA), b: parseInteger(deltaB) };
    const a = ringInteger(BigInt(input.a), ring), b = ringInteger(BigInt(input.b), ring);
    let classA = a, aModulus = ring.characteristic ? String(ring.characteristic) : null;
    const bModulus = ring.characteristic ? String(ring.characteristic) : null;
    const canMoveA = preset.hasTau && coefficient !== 'F3';
    if (preset.hasTau && coefficient === 'Z') { classA = residue(a, 3n); aModulus = '3'; }
    else if (canMoveA) { classA = 0n; aModulus = null; }
    const fills = classA === 0n && b === 0n;
    let obstruction = null, certificate = null;
    if (fills) {
      const coefficients = { sigma: '0' };
      if (preset.hasTau) coefficients.tau = coefficient === 'Q' ? rationalThird(a)
        : coefficient === 'Z' ? String(a / 3n) : coefficient === 'F2' ? String(a) : '0';
      certificate = { kind: 'cellular-boundary', coefficients,
        boundary: { a: String(a), b: String(b) },
        free2CellGenerators: preset.hasTau && coefficient === 'F3' ? ['sigma', 'tau'] : ['sigma'],
        equalityRing: coefficient };
    } else if (b !== 0n) {
      obstruction = { kind: 'b-coordinate', coordinate: 'b', value: String(b),
        explanation: 'Every 2-cell boundary has b-coordinate zero in the selected coefficient ring.' };
    } else if (preset.hasTau && coefficient === 'Z') {
      obstruction = { kind: 'a-mod-3', coordinate: 'a', value: String(classA),
        explanation: 'An integral tau boundary changes the a-coordinate only by a multiple of 3.' };
    } else {
      obstruction = { kind: 'zero-boundary', coordinate: 'a', value: String(classA),
        explanation: 'The cellular boundary ∂₂ is zero over the selected coefficient ring, so a nonzero 1-chain cannot be a boundary.' };
    }
    return freeze({ presetId, coefficient, input, chain: { a: String(a), b: String(b) },
      canonicalClass: { a: String(classA), b: String(b), aModulus, bModulus, zero: fills },
      fills, certificate, obstruction });
  }
  return freeze({ BOUNDS, PRESETS, COEFFICIENTS, analyze, fill, parseInteger, exponentSums, evaluateWord });
});
