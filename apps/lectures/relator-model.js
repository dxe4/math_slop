/* Two declared relators over finite rose covers, using immutable CoverModel.
 * Travel is a RIGHT action: s·(uv)=(s·u)·v, so L_uv=L_v∘L_u.
 * With ordinary rightmost-first function composition the homomorphism is
 * rho(w)=L_(w^-1), not w -> L_w. Extension requires every sheet to be fixed.
 * Failed lifted paths have path-chain counts, never cellular 2-boundaries.
 * This module does not classify arbitrary groups or compute general SNF.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('./cover-model.js'));
  else root.RelatorModel = factory(root.CoverModel);
})(typeof globalThis !== 'undefined' ? globalThis : this, function (coverMath) {
  'use strict';
  if (!coverMath || typeof coverMath.analyzeCover !== 'function') {
    throw new Error('RelatorModel requires CoverModel to be loaded first.');
  }
  function freeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze); Object.freeze(value);
    }
    return value;
  }
  const BOUNDS = freeze({ MAX_SHEETS: coverMath.BOUNDS.MAX_SHEETS, MAX_RELATOR_LETTERS: 6 });
  const CONVENTION = 'Forward right action: s·(uv)=(s·u)·v and L_uv=L_v∘L_u. The ordinary permutation homomorphism is ρ(w)=L_(w⁻¹).';
  const RELATORS = freeze([
    { id: 'T', label: 'Torus relation [a,b]', word: 'abAB', length: 4, baseExponentSums: { a: 0, b: 0 } },
    { id: 'X', label: 'Relation [a²,b]', word: 'aabAAB', length: 6, baseExponentSums: { a: 0, b: 0 } }
  ]);
  const lookup = new Map(RELATORS.map(relator => [relator.id, relator]));
  function getRelator(id) {
    if (typeof id !== 'string' || !lookup.has(id)) throw new RangeError('Choose the declared relator T or X.');
    return lookup.get(id);
  }
  function listRelators() { return RELATORS; }
  function checkedOptions(options) {
    if (!options || typeof options !== 'object' || Array.isArray(options)) throw new TypeError('Options must specify only a starting sheet.');
    if (Object.keys(options).some(key => key !== 'start')) throw new TypeError('Only the starting sheet can be selected; the attaching word is fixed.');
    return options.start === undefined ? 1 : options.start;
  }
  function zeros(rows, columns) { return Array.from({ length: rows }, () => Array(columns).fill(0)); }
  function product(left, right) {
    return left.map(row => right[0].map((_, column) => row.reduce((sum, value, index) => sum + value * right[index][column], 0)));
  }
  function same(left, right) { return JSON.stringify(left) === JSON.stringify(right); }
  function isZero(matrix) { return matrix.every(row => row.every(value => value === 0)); }
  function identity(n) { return Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => i === j ? 1 : 0)); }
  function matrix(name, source, target, entries) { return { name, source, target, entries }; }
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
  function build(cover, relatorId, options, presetId, presetLabel) {
    const relator = getRelator(relatorId), start = checkedOptions(options);
    // Validation and all geometric edge identities remain owned by CoverModel.
    const selected = coverMath.analyzeCover(cover, { start, word: relator.word });
    const validatedCover = { a: selected.permutations.a, b: selected.permutations.b };
    const degree = selected.degree, positiveEdges = selected.positiveEdges;
    const edgeIds = positiveEdges.map(edge => edge.id);
    const edgeIndices = new Map(edgeIds.map((id, index) => [id, index]));
    const vertices = Array.from({ length: degree }, (_, i) => 'v' + (i + 1));
    const liftIds = Array.from({ length: degree }, (_, i) => 'lift' + (i + 1));
    const sigmaIds = Array.from({ length: degree }, (_, i) => 'sigma' + (i + 1));
    const d1Entries = zeros(degree, positiveEdges.length);
    positiveEdges.forEach((edge, index) => {
      d1Entries[edge.from - 1][index] -= 1;
      d1Entries[edge.to - 1][index] += 1;
    });
    const lifts = [];
    for (let sheet = 1; sheet <= degree; sheet++) {
      const analysis = sheet === start ? selected : coverMath.analyzeCover(validatedCover, { start: sheet, word: relator.word });
      const counts = Array(positiveEdges.length).fill(0);
      analysis.lift.steps.forEach(step => { counts[edgeIndices.get(step.edgeId)] += step.orientation; });
      const incidence = d1Entries.map(row => row.reduce((sum, value, index) => sum + value * counts[index], 0));
      const expectedIncidence = Array(degree).fill(0);
      expectedIncidence[sheet - 1] -= 1;
      expectedIncidence[analysis.endpoint - 1] += 1;
      const incidenceMatches = same(incidence, expectedIncidence);
      if (!incidenceMatches) throw new Error('Internal lifted-path incidence invariant failed.');
      lifts.push({ start: sheet, endpoint: analysis.endpoint, closed: analysis.closed,
        steps: analysis.lift.steps, counts, incidence, expectedIncidence, incidenceMatches });
    }
    const countEntries = edgeIds.map((_, index) => lifts.map(lift => lift.counts[index]));
    const endpointEntries = vertices.map((_, index) => lifts.map(lift => lift.expectedIncidence[index]));
    const incidenceProduct = product(d1Entries, countEntries);
    const pathIncidenceVerified = same(incidenceProduct, endpointEntries);
    if (!pathIncidenceVerified) throw new Error('Internal all-sheet path incidence invariant failed.');
    const closedStarts = lifts.filter(lift => lift.closed).map(lift => lift.start);
    const openStarts = lifts.filter(lift => !lift.closed).map(lift => lift.start);
    const valid = openStarts.length === 0;
    const images = lifts.map(lift => lift.endpoint), ordinaryRhoImages = Array(degree);
    images.forEach((image, index) => { ordinaryRhoImages[image - 1] = index + 1; });
    const d2 = valid ? matrix('∂₂ upstairs', sigmaIds, edgeIds, countEntries) : null;
    const d1d2 = valid ? matrix('∂₁∂₂', sigmaIds, vertices, incidenceProduct) : null;
    if (valid && !isZero(incidenceProduct)) throw new Error('Internal cellular boundary product is not zero.');
    return freeze({ presetId, presetLabel, relator, degree, start, convention: CONVENTION,
      scope: 'Two fixed attaching relators over validated finite rose covers; no general group or homology classifier.',
      permutations: selected.permutations, positiveEdges, components: selected.components, connected: selected.connected,
      transport: { images, ordinaryRhoImages, cycleNotation: cycleNotation(images), identity: valid },
      extension: { valid, allClosed: valid, closedStarts, openStarts,
        reason: valid
          ? 'Every lifted attaching path closes. The fiber action respects this relation at every sheet and extends over the attached disk.'
          : 'At least one lifted attaching path is open. Closure at one starting sheet does not suffice to extend a cover over the disk.' },
      lifts, selectedLift: lifts[start - 1],
      matrices: {
        d1: matrix('∂₁ of the covering graph', edgeIds, vertices, d1Entries),
        pathCounts: matrix('Signed lifted path counts', liftIds, edgeIds, countEntries),
        endpointIncidence: matrix('Endpoint − start', liftIds, vertices, endpointEntries),
        baseD2: matrix('∂₂ in the base complex', ['sigma'], ['a', 'b'], [[0], [0]]), d2, d1d2
      },
      certificates: {
        pathIncidence: { verified: pathIncidenceVerified, productEntries: incidenceProduct, expectedEntries: endpointEntries },
        cellularBoundary: valid ? { verified: true, productEntries: incidenceProduct,
          conclusion: 'Every lift closes; these are cellular 2-boundary columns and ∂₁∂₂=0.' } : null
      },
      homologyCertificate: presetId === 'nonregular' && relatorId === 'X' ? mainCertificate : null
    });
  }
  function analyze(presetId, relatorId, options = {}) {
    const preset = coverMath.getPreset(presetId);
    return build(preset, relatorId, options, preset.id, preset.label);
  }
  function analyzeCover(cover, relatorId, options = {}) {
    return build(cover, relatorId, options, null, 'Validated finite rose cover');
  }
  function determinant(entries) {
    if (entries.length === 1) return entries[0][0];
    return entries[0].reduce((sum, value, index) => sum + (index % 2 ? -value : value) *
      determinant(entries.slice(1).map(row => row.filter((_, j) => j !== index))), 0);
  }
  function createMainCertificate() {
    const analysis = build(coverMath.getPreset('nonregular'), 'X', { start: 1 }, null, 'Authored main X certificate');
    const edgeOrder = analysis.matrices.d1.source;
    const cycleBasis = [
      { id: 'c1', label: 'b1', word: 'b', chain: [0, 1, 0, 0, 0, 0] },
      { id: 'c2', label: 'a1+a2', word: 'aa', chain: [1, 0, 1, 0, 0, 0] },
      { id: 'c3', label: 'a3', word: 'abaBA', chain: [0, 0, 0, 0, 1, 0] },
      { id: 'c4', label: 'b2+b3', word: 'abbA', chain: [0, 0, 0, 1, 0, 1] }
    ];
    const cycleEntries = edgeOrder.map((_, i) => cycleBasis.map(cycle => cycle.chain[i]));
    const coordinateEntries = [[0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0], [0, 0, 0, 1, 0, 0]];
    const cycleBoundaryEntries = product(coordinateEntries, analysis.matrices.d2.entries);
    const expectedCycleBoundary = [[0, 0, 0], [0, 1, -1], [0, -2, 2], [0, 0, 0]];
    const adaptedEntries = [[1, 0, 0, 0], [0, 1, 0, 0], [0, -2, 1, 0], [0, 0, 0, 1]];
    const adaptedInverse = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 2, 1, 0], [0, 0, 0, 1]];
    const adaptedBoundary = product(adaptedInverse, cycleBoundaryEntries);
    const h2Basis = [{ label: '[sigma1]', coefficients: [1, 0, 0] },
      { label: '[sigma2+sigma3]', coefficients: [0, 1, 1] }];
    const checks = {
      declaredIncidence: same(analysis.matrices.d1.entries, [[-1, 0, 1, 0, 0, 0], [1, 0, -1, -1, 0, 1], [0, 0, 0, 1, 0, -1]]),
      cycleBasisInKernel: isZero(product(analysis.matrices.d1.entries, cycleEntries)),
      coordinateLeftInverse: same(product(coordinateEntries, cycleEntries), identity(4)),
      boundaryCoordinates: same(cycleBoundaryEntries, expectedCycleBoundary) &&
        same(product(cycleEntries, cycleBoundaryEntries), analysis.matrices.d2.entries),
      adaptedBasisUnimodular: determinant(adaptedEntries) === 1 && same(product(adaptedEntries, adaptedInverse), identity(4)),
      adaptedBoundary: same(adaptedBoundary, [[0, 0, 0], [0, 1, -1], [0, 0, 0], [0, 0, 0]]),
      kernel2Generators: h2Basis.every(generator => isZero(product(analysis.matrices.d2.entries, generator.coefficients.map(c => [c]))))
    };
    if (!Object.values(checks).every(Boolean)) throw new Error('Internal authored main X certificate failed.');
    return freeze({ scope: { presetId: 'nonregular', relatorId: 'X', degree: 3, cycleBasisRoot: 1 }, edgeOrder, cycleBasis,
      cycleEntries, coordinateEntries, cycleBoundaryEntries,
      imageGenerator: { id: 'u', coordinates: [0, 1, -2, 0], edgeChain: [1, 0, 1, 0, -2, 0], primitive: true },
      adaptedBasis: { ids: ['c1', 'u', 'c3', 'c4'], entries: adaptedEntries, inverseEntries: adaptedInverse,
        determinant: 1, boundaryEntries: adaptedBoundary },
      H1: { label: 'Z³', rank: 3, torsion: [], basis: ['[c1]', '[c3]', '[c4]'] },
      H2: { label: 'Z²', rank: 2, basis: h2Basis }, checks,
      reasons: {
        cycleKernel: 'The incidence equations are a1=a2 and b2=b3. The four displayed cycles therefore give unique integer coordinates for every graph cycle.',
        imagePrimitive: 'Replacing c2 by u=c2−2c3 is an integer basis change of determinant 1. The image is exactly Zu; the remaining three classes form a free integral quotient.',
        kernel2Complete: 'The columns are 0,c,−c with c having a1-coordinate 1. A two-chain is a cycle exactly when its sigma2 and sigma3 coefficients agree; no three-cells occur.'
      }
    });
  }
  const mainCertificate = createMainCertificate();
  function mainXCertificate() { return mainCertificate; }
  return freeze({ BOUNDS, CONVENTION, getRelator, listRelators, analyze, analyzeCover, mainXCertificate });
});
