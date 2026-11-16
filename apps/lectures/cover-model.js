/* Finite covers of the two-loop rose. Positive generator edges are distinct
 * geometric edges, even when their endpoints coincide. Words are traversed
 * LEFT TO RIGHT: s·(uv)=(s·u)·v. This right action must not be confused with
 * evaluating a permutation product by rightmost-first function composition.
 * General cover input is bounded to six sheets; the learner has two presets.
 * The workshop supplies the lifting and spanning-tree theorems. Everything
 * here is exact finite combinatorics, with immutable JSON-safe public data.
 */
(function (root, factory) {
  const model = factory();
  if (typeof module === 'object' && module.exports) module.exports = model;
  else root.CoverModel = model;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  function freeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  }
  const BOUNDS = freeze({ MAX_SHEETS: 6, MAX_RAW_WORD_LENGTH: 512, MAX_WORD_LETTERS: 160 });
  const CONVENTION = 'Words traverse edges left to right: s·(uv)=(s·u)·v. Uppercase letters traverse inverse edges.';
  const PRESETS = freeze([
    { id: 'nonregular', label: 'Three sheets, no nonidentity deck map', a: [2, 1, 3], b: [1, 3, 2] },
    { id: 'cyclic', label: 'Three sheets, cyclic deck symmetry', a: [2, 3, 1], b: [1, 2, 3] }
  ]);
  const lookup = new Map(PRESETS.map(preset => [preset.id, preset]));
  const POSITIVE = ['a', 'b'];
  function getPreset(id) {
    if (typeof id !== 'string' || !lookup.has(id)) throw new RangeError('Choose the nonregular or cyclic declared cover.');
    return lookup.get(id);
  }
  function listPresets() { return PRESETS; }
  function parseWord(raw) {
    if (typeof raw !== 'string') throw new TypeError('A path word must be a string.');
    if (raw.length > BOUNDS.MAX_RAW_WORD_LENGTH) throw new RangeError('A raw word may contain at most 512 characters.');
    if (!/^[abAB\s]*$/.test(raw)) throw new TypeError('Use only a, b, A, B and whitespace; uppercase letters mean inverses.');
    const word = raw.replace(/\s/g, '');
    if (word.length > BOUNDS.MAX_WORD_LETTERS) throw new RangeError('A word may contain at most 160 edge letters.');
    return word;
  }
  function inverseLetter(letter) { return letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase(); }
  function inverseUnchecked(word) { return [...word].reverse().map(inverseLetter).join(''); }
  function reduceUnchecked(word) {
    const stack = [];
    for (const letter of word) {
      if (stack.length && inverseLetter(letter) === stack[stack.length - 1]) stack.pop();
      else stack.push(letter);
    }
    return stack.join('');
  }
  function inverseWord(raw) { return inverseUnchecked(parseWord(raw)); }
  function reduceWord(raw) { return reduceUnchecked(parseWord(raw)); }
  function permutation(images, n, name) {
    if (!Array.isArray(images) || images.length !== n) throw new TypeError(name + ' must be an array of ' + n + ' images.');
    const copy = [];
    for (let i = 0; i < n; i++) {
      if (!Object.prototype.hasOwnProperty.call(images, i) || !Number.isInteger(images[i]) || images[i] < 1 || images[i] > n) {
        throw new RangeError(name + ' must list every sheet from 1 to ' + n + ' once.');
      }
      copy.push(images[i]);
    }
    if (new Set(copy).size !== n) throw new RangeError(name + ' must be a bijection of the sheet labels.');
    return copy;
  }
  function checkedCover(cover) {
    if (!cover || typeof cover !== 'object' || Array.isArray(cover)) throw new TypeError('A cover must supply permutations a and b.');
    if (!Array.isArray(cover.a) || cover.a.length < 1 || cover.a.length > BOUNDS.MAX_SHEETS) {
      throw new RangeError('A cover must have from 1 to 6 sheets.');
    }
    const n = cover.a.length;
    return { a: permutation(cover.a, n, 'a'), b: permutation(cover.b, n, 'b') };
  }
  function inversePermutation(images) {
    const inverse = [];
    images.forEach((image, index) => { inverse[image - 1] = index + 1; });
    return inverse;
  }
  function cycleNotation(images) {
    const seen = new Set(), cycles = [];
    for (let start = 1; start <= images.length; start++) {
      if (seen.has(start)) continue;
      const cycle = [];
      let sheet = start;
      do { cycle.push(sheet); seen.add(sheet); sheet = images[sheet - 1]; } while (sheet !== start);
      if (cycle.length > 1) cycles.push('(' + cycle.join(' ') + ')');
    }
    return cycles.join('') || 'identity';
  }
  function allPermutations(n) {
    const found = [];
    function visit(prefix, remaining) {
      if (!remaining.length) { found.push(prefix); return; }
      remaining.forEach((value, index) => visit([...prefix, value], remaining.filter((_, j) => j !== index)));
    }
    visit([], Array.from({ length: n }, (_, index) => index + 1));
    return found;
  }
  function deckTest(cover, images) {
    const n = cover.a.length, checked = permutation(images, n, 'Deck images'), violations = [];
    for (const label of POSITIVE) for (let sheet = 1; sheet <= n; sheet++) {
      const deckAfterLift = checked[cover[label][sheet - 1] - 1];
      const liftAfterDeck = cover[label][checked[sheet - 1] - 1];
      if (deckAfterLift !== liftAfterDeck) violations.push({ label, sheet, deckAfterLift, liftAfterDeck });
    }
    return { images: checked, valid: violations.length === 0, violations,
      cycleNotation: cycleNotation(checked), identity: checked.every((image, index) => image === index + 1) };
  }
  function testDeck(id, images) { return freeze(deckTest(getPreset(id), images)); }
  function optionsFor(options, n) {
    if (!options || typeof options !== 'object' || Array.isArray(options)) throw new TypeError('Analysis options must be an object.');
    const start = options.start === undefined ? 1 : options.start;
    if (!Number.isInteger(start) || start < 1 || start > n) throw new RangeError('The starting sheet must be an integer from 1 to ' + n + '.');
    const rawWord = options.word === undefined ? 'abAB' : options.word;
    return { start, rawWord, word: parseWord(rawWord) };
  }
  function orbitPartitions(n, transitions) {
    const seen = new Set(), parts = [];
    for (let start = 1; start <= n; start++) {
      if (seen.has(start)) continue;
      const queue = [start], part = [];
      seen.add(start);
      for (let i = 0; i < queue.length; i++) {
        const sheet = queue[i]; part.push(sheet);
        transitions.forEach(images => {
          const image = images[sheet - 1];
          if (!seen.has(image)) { seen.add(image); queue.push(image); }
        });
      }
      parts.push(part.sort((a, b) => a - b));
    }
    return parts;
  }
  function buildAnalysis(input, options, presetId, label) {
    const cover = checkedCover(input), n = cover.a.length;
    const { start, rawWord, word } = optionsFor(options, n);
    const permutations = { ...cover, A: inversePermutation(cover.a), B: inversePermutation(cover.b) };
    const positiveEdges = [];
    for (let sheet = 1; sheet <= n; sheet++) for (const generator of POSITIVE) {
      positiveEdges.push({ id: generator + sheet, label: generator, from: sheet, to: cover[generator][sheet - 1] });
    }
    const parts = orbitPartitions(n, [cover.a, cover.b]);
    const components = parts.map((vertices, index) => {
      const edges = positiveEdges.filter(edge => vertices.includes(edge.from));
      return { id: index + 1, vertices, edgeIds: edges.map(edge => edge.id), degree: vertices.length,
        vertexCount: vertices.length, edgeCount: edges.length, rank: edges.length - vertices.length + 1 };
    });
    const rootComponentId = components.find(component => component.vertices.includes(start)).id;
    const paths = new Map([[start, '']]), treeEdges = new Set(), queue = [start];
    // For finite permutations, positive powers also reach every inverse move.
    // Therefore positive a,b BFS spans exactly the root's graph component.
    for (let i = 0; i < queue.length; i++) {
      const sheet = queue[i];
      for (const generator of POSITIVE) {
        const next = cover[generator][sheet - 1];
        if (!paths.has(next)) {
          paths.set(next, paths.get(sheet) + generator);
          treeEdges.add(generator + sheet); queue.push(next);
        }
      }
    }
    const tree = { start, vertices: queue, edgeIds: [...treeEdges],
      paths: [...paths].map(([sheet, pathWord]) => ({ sheet, word: pathWord })) };
    const basis = [], basisByEdge = new Map();
    positiveEdges.forEach(edge => {
      if (!paths.has(edge.from) || treeEdges.has(edge.id)) return;
      const entry = { id: 'g' + (basis.length + 1), edgeId: edge.id, from: edge.from, to: edge.to,
        word: reduceUnchecked(paths.get(edge.from) + edge.label + inverseUnchecked(paths.get(edge.to))) };
      basis.push(entry); basisByEdge.set(edge.id, entry);
    });
    let endpoint = start;
    const steps = [];
    for (let i = 0; i < word.length; i++) {
      const letter = word[i], from = endpoint;
      endpoint = permutations[letter][from - 1];
      const positive = letter === letter.toLowerCase();
      steps.push({ index: i + 1, letter, from, to: endpoint,
        edgeId: letter.toLowerCase() + (positive ? from : endpoint), orientation: positive ? 1 : -1 });
    }
    const closed = endpoint === start, reducedWord = reduceUnchecked(word);
    let rewriting;
    if (!closed) {
      rewriting = { applicable: false, reason: 'The lift is open, so this word is not in the subgroup at the chosen starting sheet.',
        factors: [], reducedFactors: [], expandedWord: null, expansionReduced: null, inputReduced: reducedWord, verified: null };
    } else {
      const factors = [], reducedFactors = [];
      steps.forEach(step => {
        const generator = basisByEdge.get(step.edgeId);
        if (!generator) return;
        const factor = { step: step.index, generatorId: generator.id, exponent: step.orientation };
        factors.push(factor);
        const last = reducedFactors[reducedFactors.length - 1];
        if (last && last.generatorId === factor.generatorId && last.exponent === -factor.exponent) reducedFactors.pop();
        else reducedFactors.push(factor);
      });
      const byId = new Map(basis.map(generator => [generator.id, generator.word]));
      const expandedWord = factors.map(factor => factor.exponent === 1 ? byId.get(factor.generatorId)
        : inverseUnchecked(byId.get(factor.generatorId))).join('');
      const expansionReduced = reduceUnchecked(expandedWord);
      rewriting = { applicable: true, reason: null, factors, reducedFactors, expandedWord,
        expansionReduced, inputReduced: reducedWord, verified: expansionReduced === reducedWord };
      if (!rewriting.verified) throw new Error('Internal Schreier reexpansion invariant failed.');
    }
    const candidates = allPermutations(n);
    const transformations = candidates.map(images => deckTest(cover, images)).filter(candidate => candidate.valid)
      .map(({ images, cycleNotation: notation, identity }) => ({ images, cycleNotation: notation, identity }));
    const deckOrbits = orbitPartitions(n, transformations.map(transformation => transformation.images));
    const connected = components.length === 1;
    const deck = { candidateCount: candidates.length, transformations, orbits: deckOrbits,
      transitive: deckOrbits.length === 1,
      free: transformations.every(transformation => transformation.identity || transformation.images.every((image, index) => image !== index + 1)),
      regular: connected ? deckOrbits.length === 1 : null };
    return freeze({ presetId, label, degree: n, permutations, convention: CONVENTION, start, rawWord, word, reducedWord,
      endpoint, closed, positiveEdges, lift: { start, endpoint, closed, steps }, components, connected,
      totalRank: positiveEdges.length - n + components.length, rootComponentId, tree, basis, rewriting, deck });
  }
  function analyze(id, options = {}) {
    const preset = getPreset(id);
    return buildAnalysis(preset, options, preset.id, preset.label);
  }
  function analyzeCover(cover, options = {}) { return buildAnalysis(cover, options, null, 'Validated finite rose cover'); }
  return freeze({ BOUNDS, CONVENTION, getPreset, listPresets, parseWord, inverseWord, reduceWord, analyze, analyzeCover, testDeck });
});
