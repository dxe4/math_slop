// Finite, deterministic companions to the discrete-mathematics lessons.
// The shared shell renders these range/select controls and the returned tables.

import {
  renderCounterexample, renderInduction, renderQuantifiers, renderDiagonal,
  renderEuclid, renderResidues, renderChoices, renderInclusion,
  renderAutomaton, renderGrowth,
} from './visuals-discrete.mjs';

const visualRenderers = {
  'counterexample-hunt': renderCounterexample,
  'induction-builder': renderInduction,
  'quantifier-scope-grid': renderQuantifiers,
  'diagonal-sequence': renderDiagonal,
  'euclidean-tiles': renderEuclid,
  'residue-orbits': renderResidues,
  'counting-choice-tree': renderChoices,
  'inclusion-exclusion-sets': renderInclusion,
  'automaton-builder': renderAutomaton,
  'growth-comparator': renderGrowth,
};

const range = (key, label, min, max, value, step = 1) => ({ key, label, type: 'range', min, max, step, value });
const select = (key, label, values, value) => ({
  key, label, type: 'select', value,
  options: values.map(([option, name]) => ({ value: String(option), label: name })),
});
const yesNo = (key, label, value = 'no') => select(key, label, [['no', 'No'], ['yes', 'Yes']], value);

function define(spec, run) {
  return {
    ...spec,
    evaluate(state = {}) {
      if (state === null || typeof state !== 'object' || Array.isArray(state)) throw new TypeError('Controls must be an object.');
      const input = {};
      for (const control of spec.controls) {
        const raw = Object.hasOwn(state, control.key) ? state[control.key] : control.value;
        if (control.type === 'range') {
          const number = typeof raw === 'number' ? raw : typeof raw === 'string' && /^-?\d+$/.test(raw) ? Number(raw) : NaN;
          if (!Number.isSafeInteger(number) || number < control.min || number > control.max || (number - control.min) % control.step !== 0) {
            throw new RangeError(`${control.label} must be an integer from ${control.min} to ${control.max}.`);
          }
          input[control.key] = number;
        } else {
          const value = String(raw);
          if (!control.options.some(option => option.value === value)) throw new RangeError(`${control.label} has an invalid choice.`);
          input[control.key] = value;
        }
      }
      const result = run(input);
      const visual = visualRenderers[spec.id];
      return visual ? { ...result, svg: visual({ input, result }) } : result;
    },
  };
}

const gcd = (a, b) => {
  while (b) [a, b] = [b, a % b];
  return a;
};
const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
};
const edges = [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]];
const graphControls = () => [range('vertices', 'Vertices', 3, 5, 4), ...edges.map(([a, b], i) => select(`edge${i}`, `Edge ${a + 1}–${b + 1}`, [['0', 'Absent'], ['1', 'Present']], ['0-1', '1-2', '2-3'].includes(`${a}-${b}`) ? '1' : '0'))];
function graph(input) {
  const n = input.vertices;
  const adjacency = Array.from({ length: n }, () => []);
  const list = [];
  edges.forEach(([a, b], i) => {
    if (a < n && b < n && input[`edge${i}`] === '1') {
      adjacency[a].push(b); adjacency[b].push(a); list.push([a, b]);
    }
  });
  adjacency.forEach(row => row.sort((a, b) => a - b));
  return { n, adjacency, edges: list };
}
function graphSvg(g, options = {}) {
  const points = Array.from({ length: g.n }, (_, i) => {
    const theta = 2 * Math.PI * i / g.n - Math.PI / 2;
    return [115 + 77 * Math.cos(theta), 125 + 77 * Math.sin(theta)];
  });
  const isBfs = options.mode === 'bfs';
  const lines = g.edges.map(([a, b]) => {
    const inTree = isBfs && (options.previous[a] === b || options.previous[b] === a);
    const stroke = isBfs ? inTree ? '#16705b' : '#a8b8ae' : '#2e654b';
    return `<line x1="${points[a][0].toFixed(2)}" y1="${points[a][1].toFixed(2)}" x2="${points[b][0].toFixed(2)}" y2="${points[b][1].toFixed(2)}" class="experiment-edge" stroke="${stroke}" stroke-width="${inTree ? 4 : 2}"/>`;
  }).join('');
  const layerFill = ['#d5e9dd', '#a5d5c3', '#70b69f', '#3f977d', '#26745f', '#185948'];
  const circles = points.map(([x, y], i) => {
    const distance = isBfs ? options.distance[i] : null;
    const fill = isBfs ? distance === null ? '#eef1eb' : layerFill[Math.min(distance, layerFill.length - 1)] : options.odd.includes(i) ? '#f3c18c' : '#dcebdd';
    const stroke = isBfs ? i === options.source ? '#a34a19' : i === options.target ? '#b33e32' : '#2e654b' : '#2e654b';
    const labelFill = isBfs && distance !== null && distance >= 3 ? '#ffffff' : '#183b2b';
    const distanceLabel = isBfs && distance !== null ? `<text x="${x.toFixed(2)}" y="${(y + 27).toFixed(2)}" text-anchor="middle" fill="#183b2b" font-size="10">d=${distance}</text>` : '';
    return `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="16" class="experiment-vertex" fill="${fill}" stroke="${stroke}" stroke-width="${isBfs && (i === options.source || i === options.target) ? 3 : 2}"/><text x="${x.toFixed(2)}" y="${(y + 4).toFixed(2)}" text-anchor="middle" fill="${labelFill}" font-size="12">${i + 1}</text>${distanceLabel}`;
  }).join('');
  const edgeText = g.edges.map(([a, b]) => `${a + 1}–${b + 1}`).join(', ') || 'none';
  const routeLines = options.route?.length ? [options.route.slice(0, 6).join('→'), options.route.length > 6 ? options.route.slice(5).join('→') : ''].filter(Boolean) : [options.attempt ? 'No route to show' : 'Route not requested'];
  const sidebar = isBfs
    ? `<text x="225" y="43" fill="#183b2b" font-size="13">BFS after ${options.step} removals</text><text x="225" y="65" fill="#183b2b" font-size="11">Source ${options.source + 1}; target ${options.target + 1}</text>${options.distance.map((distance, i) => `<text x="225" y="${90 + 22 * i}" fill="#183b2b" font-size="11">${i + 1}: ${distance === null ? 'undiscovered' : `layer ${distance}`}</text>`).join('')}<text x="225" y="220" fill="#183b2b" font-size="11">Queue: ${options.pending.join(', ') || 'empty'}</text><text x="225" y="241" fill="#183b2b" font-size="9">Orange=source; red=target</text>`
    : `<text x="225" y="43" fill="#183b2b" font-size="13">Degree and route</text>${g.adjacency.map((neighbors, i) => `<text x="225" y="${69 + 22 * i}" fill="#183b2b" font-size="11">${i + 1}: degree ${neighbors.length}${neighbors.length % 2 ? ' odd' : ' even'}</text>`).join('')}<text x="225" y="186" fill="#183b2b" font-size="11">${options.possible ? 'Euler route possible' : 'No Euler route'}</text>${routeLines.map((line, i) => `<text x="225" y="${207 + 19 * i}" fill="#183b2b" font-size="10">${i === 0 && options.route.length ? 'Route: ' : ''}${line}</text>`).join('')}`;
  const desc = isBfs ? `Unweighted graph with ${g.n} vertices; edges: ${edgeText}. After ${options.step} queue removals, distance labels are ${options.distance.map((d, i) => `${i + 1}: ${d === null ? 'undiscovered' : d}`).join(', ')}.` : `Simple graph with ${g.n} vertices; edges: ${edgeText}. Degrees: ${g.adjacency.map((row, i) => `${i + 1}: ${row.length}`).join(', ')}. ${options.route.length ? `Euler route ${options.route.join(' to ')}.` : ''}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 250" role="img" aria-label="${isBfs ? 'Breadth first search layers' : 'Degree and Euler route graph'}"><title>${isBfs ? 'Breadth first search layers' : 'Degree and Euler route graph'}</title><desc>${desc}</desc>${lines}${circles}${sidebar}</svg>`;
}

const claims = {
  even: { label: 'n²+n is even', expression: n => `${n}²+${n}=${n * n + n}`, holds: n => (n * n + n) % 2 === 0 },
  square: { label: 'n²≥n', expression: n => `${n}²=${n * n} ≥ ${n}`, holds: n => n * n >= n },
  bound: { label: 'n²≤2n', expression: n => `${n}²=${n * n} ≤ ${2 * n}`, holds: n => n * n <= 2 * n },
  prime: { label: 'n²+n+41 is prime', expression: n => `${n}²+${n}+41=${n * n + n + 41}`, holds: n => {
    const v = n * n + n + 41;
    for (let d = 2; d * d <= v; d++) if (v % d === 0) return false;
    return v > 1;
  } },
};

const counterexample = define({
  id: 'counterexample-hunt', title: 'Conjecture stress test',
  question: 'What does a tested case tell us about a claim over every nonnegative integer?',
  prediction: 'One false case refutes a universal claim; any finite run of true cases leaves it open.',
  explanation: 'Substitute each tested n into the selected proposition. The first false row, if present, is a counterexample within the searched prefix.',
  limitations: 'The domain is all nonnegative integers, while the search stops at 50. A successful finite search is never a proof.',
  controls: [select('claim', 'Claim for all n≥0', Object.entries(claims).map(([key, value]) => [key, value.label]), 'bound'), range('n', 'Test through n', 0, 50, 5), yesNo('smallest', 'Show smallest failure in 0…50', 'yes')],
}, ({ claim, n, smallest }) => {
  const c = claims[claim];
  const first = Array.from({ length: 51 }, (_, i) => i).find(i => !c.holds(i));
  const rows = Array.from({ length: n + 1 }, (_, i) => [String(i), c.expression(i), c.holds(i) ? 'True' : 'False']);
  return { summary: `At n=${n}: ${c.holds(n) ? 'true' : 'false'}. ${smallest === 'yes' ? first === undefined ? 'No failure in 0…50; the claim remains unproved.' : `Smallest failure in 0…50: n=${first}.` : 'Search result hidden.'}`,
    formula: `Claim: for every n∈ℕ₀, ${c.label}.`, headers: ['n', 'Substitution', 'Truth'], rows };
});

const identities = {
  sum: { name: '1+⋯+n=n(n+1)/2', left: n => Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a + b, 0), right: n => n * (n + 1) / 2,
    base: '1=1(1+1)/2=1', step: 'Assume S(k)=k(k+1)/2. Then S(k+1)=S(k)+(k+1)=(k+1)(k+2)/2.' },
  odd: { name: '1+3+⋯+(2n−1)=n²', left: n => Array.from({ length: n }, (_, i) => 2 * i + 1).reduce((a, b) => a + b, 0), right: n => n * n,
    base: '1=1²', step: 'Assume O(k)=k². Then O(k+1)=O(k)+(2k+1)=k²+2k+1=(k+1)².' },
  powers: { name: '1+2+⋯+2^(n−1)=2^n−1', left: n => Array.from({ length: n }, (_, i) => 2 ** i).reduce((a, b) => a + b, 0), right: n => 2 ** n - 1,
    base: '1=2¹−1', step: 'Assume G(k)=2^k−1. Then G(k+1)=G(k)+2^k=2^(k+1)−1.' },
};
const induction = define({
  id: 'induction-builder', title: 'Base and step builder', question: 'Which two obligations establish an identity for every positive integer?',
  prediction: 'The base checks n=1; the step derives the case k+1 using only the case k.',
  explanation: 'A finite table is a check. The displayed symbolic step, with its stated hypothesis, supplies the universal reasoning.',
  limitations: 'The proof sketches apply to these three identities for n≥1. The table of examples alone proves no infinite statement.',
  controls: [select('identity', 'Target identity', Object.entries(identities).map(([key, value]) => [key, value.name]), 'sum'), range('n', 'Inspect n', 1, 20, 5), select('reveal', 'Proof obligation', [['base', 'Base'], ['step', 'Step'], ['both', 'Both']], 'both')],
}, ({ identity, n, reveal }) => {
  const item = identities[identity];
  const rows = [];
  if (reveal !== 'step') rows.push(['Base n=1', item.base, 'Verified']);
  if (reveal !== 'base') rows.push(['Step k→k+1', item.step, 'Uses only P(k)']);
  rows.push([`Check n=${n}`, `${item.left(n)} = ${item.right(n)}`, 'Numerical check']);
  return { summary: `For n=${n}, both sides are ${item.left(n)}. The base and symbolic step address every n≥1.`, formula: item.name, headers: ['Obligation', 'Calculation or reasoning', 'Role'], rows };
});

const quantifierControls = [range('people', 'People', 1, 4, 3), range('books', 'Books', 1, 4, 3), ...Array.from({ length: 4 }, (_, i) => range(`person${i}`, `Books read by person ${i + 1} (bit mask)`, 0, 15, [1, 3, 2, 0][i])), select('order', 'Focus', [['each', 'Every person has some book'], ['common', 'Some book is read by everyone']], 'each')];
const quantifiers = define({
  id: 'quantifier-scope-grid', title: 'Quantifier order grid', question: 'Does every person reading a book mean one book is read by everyone?',
  prediction: 'The first sentence can be true while the second is false.',
  explanation: 'Each row mask selects books by binary place: 1 means book 1, 2 means book 2, 4 means book 3, and 8 means book 4. Change a mask to toggle its relation cells.',
  limitations: 'This finite model can give counterexamples to equivalence. It does not establish statements about every possible relation.', controls: quantifierControls,
}, ({ people, books, order, ...input }) => {
  const masks = Array.from({ length: people }, (_, i) => input[`person${i}`] & ((1 << books) - 1));
  const witnesses = masks.map(mask => Array.from({ length: books }, (_, j) => j).filter(j => mask & (1 << j)).map(j => `B${j + 1}`));
  const each = witnesses.every(row => row.length > 0);
  const common = Array.from({ length: books }, (_, j) => j).filter(j => masks.every(mask => mask & (1 << j)));
  const rows = masks.map((mask, i) => [`P${i + 1}`, ...Array.from({ length: books }, (_, j) => mask & (1 << j) ? 'Reads' : '—'), witnesses[i].join(', ') || 'none']);
  const eachReason = each ? masks.map((_, i) => `P${i + 1}→${witnesses[i][0]}`).join('; ') : `P${witnesses.findIndex(row => row.length === 0) + 1} has no book`;
  const commonReason = common.length ? `${common.map(j => `B${j + 1}`).join(', ')} read by all` : Array.from({ length: books }, (_, j) => `B${j + 1} misses P${masks.findIndex(mask => !(mask & (1 << j))) + 1}`).join('; ');
  return { summary: `${order === 'each' ? '∀person∃book' : '∃book∀person'}: ${order === 'each' ? each : common.length > 0}. Other order: ${order === 'each' ? common.length > 0 : each}.`,
    formula: `∀p∃b R(p,b): ${each} (${eachReason}). ∃b∀p R(p,b): ${common.length > 0} (${commonReason}).`,
    headers: ['Person', ...Array.from({ length: books }, (_, j) => `B${j + 1}`), 'Witness books'], rows };
});

const diagonal = define({
  id: 'diagonal-sequence', title: 'The missed binary sequence', question: 'How does flipping diagonal bits produce a different prefix from each listed row?',
  prediction: 'The constructed prefix differs from row i at position i.',
  explanation: 'Each row mask encodes six bits, least significant bit first. The new bit at position i is one minus row i’s bit there.',
  limitations: 'The finite grid proves only differences among its displayed prefixes. The infinite diagonal argument needs an infinite list and a rule for every index.',
  controls: [range('size', 'Visible prefix and row count', 2, 6, 4), ...Array.from({ length: 6 }, (_, i) => range(`row${i}`, `Row ${i + 1} six-bit mask`, 0, 63, [0, 63, 42, 21, 51, 12][i])), yesNo('reveal', 'Reveal diagonal rule', 'yes')],
}, input => {
  const n = input.size;
  const bit = (row, j) => (input[`row${row}`] >> j) & 1;
  const result = Array.from({ length: n }, (_, i) => 1 - bit(i, i));
  const rows = Array.from({ length: n }, (_, i) => {
    const first = result.findIndex((value, j) => value !== bit(i, j));
    return [`Row ${i + 1}`, Array.from({ length: n }, (_, j) => bit(i, j)).join(''), String(bit(i, i)), `${first + 1} (diagonal guarantee: ${i + 1})`];
  });
  return { summary: `Constructed ${n}-bit prefix ${result.join('')} differs from each of the ${n} displayed rows at its numbered position.`,
    formula: input.reveal === 'yes' ? 'dᵢ = 1 − rᵢ,ᵢ for each displayed i.' : 'Reveal the rule to see the construction.', headers: ['Sequence', 'Visible bits', 'Diagonal bit', 'First difference (guaranteed position)'], rows };
});

const euclid = define({
  id: 'euclidean-tiles', title: 'Euclid in rectangles', question: 'Why does each remainder step preserve the gcd?',
  prediction: 'The last nonzero remainder is gcd(a,b), and back-substitution gives its integer linear combination.',
  explanation: 'If a=qb+r, a divisor divides both a and b exactly when it divides b and r. The ledger records this invariant at every division.',
  limitations: 'Inputs are nonnegative and at most 144; (0,0) has no chosen gcd here. Rectangle tiles are an analogy, while the numeric ledger is exact.',
  controls: [range('a', 'First integer a', 0, 144, 84), range('b', 'Second integer b', 0, 144, 30), range('step', 'Division steps shown', 0, 12, 12), yesNo('bezout', 'Show Bézout coefficients', 'yes')],
}, ({ a, b, step, bezout }) => {
  if (a === 0 && b === 0) throw new RangeError('At least one input must be positive.');
  let oldR = a, r = b, oldS = 1, s = 0, oldT = 0, t = 1;
  const ledger = [], backSteps = [];
  while (r !== 0) {
    const q = Math.floor(oldR / r);
    const next = oldR - q * r;
    ledger.push([`${oldR} = ${q}×${r} + ${next}`, String(q), String(next), `gcd(${oldR},${r})=gcd(${r},${next})`]);
    if (next !== 0) backSteps.push([oldR, q, r, next]);
    [oldR, r] = [r, next]; [oldS, s] = [s, oldS - q * s]; [oldT, t] = [t, oldT - q * t];
  }
  const rows = ledger.slice(0, step);
  if (ledger.length > 0 && rows.length === 0 && bezout === 'no') rows.push(['Initial pair', '—', '—', `gcd(${a},${b}) is the target; no division step shown`]);
  if (ledger.length === 0) rows.push(['No division: second input is zero', '—', '—', `gcd(${a},0)=${a}`]);
  if (bezout === 'yes') {
    rows.push(...backSteps.reverse().map(([left, q, divisor, remainder]) => ['Back substitution', String(q), String(remainder), `${remainder}=${left}−${q}×${divisor}`]));
    rows.push(['Bézout certificate', '—', String(oldR), `${oldS}×${a} + ${oldT}×${b} = ${oldR}`]);
  }
  return { summary: `gcd(${a},${b})=${oldR}; ${ledger.length} division step${ledger.length === 1 ? '' : 's'}. ${step < ledger.length ? `Showing ${step}.` : 'Showing all.'}`,
    formula: `${b ? 'a=qb+r, 0≤r<b; gcd(a,b)=gcd(b,r).' : 'gcd(a,0)=a for a>0.'} ${bezout === 'yes' ? `${oldR}=${oldS}a+${oldT}b.` : ''}`,
    headers: ['Division', 'Quotient', 'Remainder', 'Reason or certificate'], rows };
});

const residues = define({
  id: 'residue-orbits', title: 'Clock orbits and inverses', question: 'When does multiplication rearrange every residue without collision?',
  prediction: 'The map x↦ax mod m is a permutation exactly when gcd(a,m)=1.',
  explanation: 'The full table shows the image of each residue; the orbit starts at 1 and repeatedly multiplies by a.',
  limitations: 'The table checks this one finite modulus. It illustrates, but does not prove, the criterion for all moduli.',
  controls: [range('m', 'Modulus m', 2, 18, 7), range('a', 'Multiplier a', 0, 18, 3), range('step', 'Orbit steps from 1', 0, 18, 6)],
}, ({ m, a, step }) => {
  const images = Array.from({ length: m }, (_, x) => (a * x) % m);
  const counts = images.map(value => images.filter(other => other === value).length);
  const d = gcd(a, m);
  let inverse = 'none';
  for (let x = 0; x < m; x++) if ((a * x) % m === 1) inverse = String(x);
  const rows = images.map((value, x) => [String(x), `${a}×${x} mod ${m}`, String(value), counts[x] > 1 ? 'Collision' : 'Unique image']);
  const orbit = [1 % m];
  for (let i = 0; i < step; i++) orbit.push((orbit.at(-1) * a) % m);
  return { summary: `gcd(${a},${m})=${d}; ${d === 1 ? 'permutation' : 'collisions occur'}; inverse of ${a} mod ${m}: ${inverse}. Orbit: ${orbit.join('→')}.`,
    formula: `x↦${a}x (mod ${m}); inverse exists iff gcd(${a},${m})=1.`, headers: ['x', 'Calculation', 'Image', 'Image status'], rows };
});

function orderedPicks(n, k) {
  const out = [];
  const visit = (prefix, remaining) => {
    if (prefix.length === k) { out.push(prefix); return; }
    for (const next of remaining) visit([...prefix, next], remaining.filter(v => v !== next));
  };
  visit([], Array.from({ length: n }, (_, i) => i + 1));
  return out;
}
const choices = define({
  id: 'counting-choice-tree', title: 'Choice tree and overcount', question: 'How does deciding whether order matters change a count of distinct picks?',
  prediction: 'Ordered paths number n!/(n−k)!; each unordered k-set has exactly k! such paths.',
  explanation: 'Pick k distinct labels without replacement from n labels. The explicit outcomes come from the branching choice tree.',
  limitations: 'The division by k! needs distinct selections with no replacement. It does not apply unchanged to repeated picks or unequal symmetries.',
  controls: [range('n', 'Distinct available labels', 2, 6, 4), range('k', 'Labels to pick', 1, 3, 2), yesNo('order', 'Order matters', 'yes'), yesNo('list', 'List every outcome', 'no')],
}, ({ n, k, order, list }) => {
  if (k > n) throw new RangeError('The number picked cannot exceed the available labels.');
  const ordered = orderedPicks(n, k);
  const unordered = ordered.filter(pick => pick.every((value, i) => i === 0 || pick[i - 1] < value));
  const shown = order === 'yes' ? ordered : unordered;
  const rows = (list === 'yes' ? shown : shown.slice(0, 12)).map((pick, i) => [String(i + 1), pick.join('→'), order === 'yes' ? 'Ordered path' : 'Distinct set']);
  if (list !== 'yes' && shown.length > 12) rows.push(['…', `${shown.length - 12} further outcomes`, 'Switch on full list']);
  return { summary: `${n} labels, ${k} distinct picks: ${ordered.length} ordered paths and ${unordered.length} unordered groups. Current mode: ${shown.length} outcomes.`,
    formula: `P(${n},${k})=${factorial(n)}/${factorial(n - k)}=${ordered.length}; C(${n},${k})=P/${factorial(k)}=${unordered.length}.`, headers: ['#', 'Outcome', 'Interpretation'], rows };
});

const membershipNames = ['none', 'A', 'B', 'A∩B', 'C', 'A∩C', 'B∩C', 'A∩B∩C'];
const inclusion = define({
  id: 'inclusion-exclusion-sets', title: 'Overlap ledger', question: 'How do signed intersection terms count each member of a union once?',
  prediction: 'Every element in at least one set contributes exactly one to the signed sum.',
  explanation: 'Choose a membership pattern for each of twelve labeled elements. A bit marks membership in A, B or C. In two-set mode the C bit is ignored.',
  limitations: 'These are finite labeled sets; the table represents counts, not area-proportional Venn geometry.',
  controls: [select('sets', 'Number of sets', [['2', 'A and B'], ['3', 'A, B and C']], '3'), ...Array.from({ length: 12 }, (_, i) => select(`element${i}`, `Element ${i + 1} membership`, membershipNames.map((name, mask) => [mask, name]), String([1, 2, 3, 4, 5, 6, 7, 0, 1, 3, 0, 4][i])))],
}, input => {
  const number = Number(input.sets), allowed = (1 << number) - 1;
  const masks = Array.from({ length: 12 }, (_, i) => Number(input[`element${i}`]) & allowed);
  const counts = Array.from({ length: 1 << number }, (_, mask) => masks.filter(value => value === mask).length);
  const size = subset => masks.filter(mask => (mask & subset) === subset).length;
  const terms = number === 2 ? [[1, 1], [2, 1], [3, -1]] : [[1, 1], [2, 1], [4, 1], [3, -1], [5, -1], [6, -1], [7, 1]];
  const signed = terms.reduce((total, [mask, sign]) => total + sign * size(mask), 0);
  const direct = masks.filter(mask => mask !== 0).length;
  const rows = masks.map((mask, i) => [`e${i + 1}`, membershipNames[mask], mask === 0 ? '0' : '1']);
  rows.push(...terms.map(([mask, sign]) => [membershipNames[mask], String(size(mask)), `${sign > 0 ? '+' : '−'}${size(mask)}`]));
  rows.push(['Union', `direct ${direct}; signed ${signed}`, String(direct)]);
  return { summary: `Union size ${direct}; signed total ${signed}. Region counts: ${counts.map((count, mask) => `${membershipNames[mask]}=${count}`).join(', ')}.${number === 2 && Array.from({ length: 12 }, (_, i) => Number(input[`element${i}`])).some(mask => mask & 4) ? ' C memberships are ignored in this two-set view.' : ''}`,
    formula: number === 2 ? '|A∪B|=|A|+|B|−|A∩B|' : '|A∪B∪C|=|A|+|B|+|C|−|A∩B|−|A∩C|−|B∩C|+|A∩B∩C|',
    headers: ['Element or term', 'Membership or count', 'Union contribution or signed term'], rows };
});

function connectedNonisolated(g) {
  const start = g.adjacency.findIndex(row => row.length);
  if (start < 0) return true;
  const visited = new Set([start]), queue = [start];
  for (let i = 0; i < queue.length; i++) for (const neighbor of g.adjacency[queue[i]]) if (!visited.has(neighbor)) { visited.add(neighbor); queue.push(neighbor); }
  return g.adjacency.every((row, i) => row.length === 0 || visited.has(i));
}
function eulerRoute(g, start) {
  const adjacency = g.adjacency.map(row => [...row]);
  const stack = [start], path = [];
  while (stack.length) {
    const v = stack.at(-1);
    if (!adjacency[v].length) { path.push(stack.pop()); continue; }
    const w = adjacency[v].shift();
    adjacency[w].splice(adjacency[w].indexOf(v), 1);
    stack.push(w);
  }
  return path.reverse().map(v => v + 1);
}
const degreeRoute = define({
  id: 'degree-route-lab', title: 'Edge degrees and routes', question: 'When can one trail use every edge exactly once?',
  prediction: 'A nonempty connected edge-bearing graph has an Euler trail exactly when it has zero or two odd-degree vertices.',
  explanation: 'Toggle any of the ten possible edges on up to five labeled vertices. The route uses each selected edge once.',
  limitations: 'The graph is simple and undirected; loops and parallel edges are excluded. Isolated vertices do not affect the edge trail.',
  controls: [...graphControls(), yesNo('attempt', 'Construct an Euler trail', 'yes')],
}, input => {
  const g = graph(input), degrees = g.adjacency.map(row => row.length), odd = degrees.map((degree, i) => degree % 2 ? i : -1).filter(i => i >= 0);
  const connected = connectedNonisolated(g), possible = connected && (odd.length === 0 || odd.length === 2);
  const start = odd.length === 2 ? odd[0] : Math.max(0, degrees.findIndex(d => d > 0));
  const route = possible && input.attempt === 'yes' ? eulerRoute(g, start) : [];
  const rows = g.adjacency.map((neighbors, i) => [String(i + 1), neighbors.map(v => v + 1).join(', ') || 'none', String(neighbors.length), neighbors.length % 2 ? 'Odd' : 'Even']);
  rows.push(['All vertices', `${degrees.reduce((a, b) => a + b, 0)}=2×${g.edges.length}`, String(degrees.reduce((a, b) => a + b, 0)), 'Handshake']);
  return { summary: `${g.edges.length} edges; ${odd.length} odd vertices; edge-bearing part ${connected ? 'connected' : 'disconnected'}. ${possible ? g.edges.length ? 'Euler trail exists.' : 'Empty circuit exists.' : 'No Euler trail.'} ${route.length ? `Trail: ${route.join('→')}.` : ''}`,
    formula: `Σ degree(v)=${2 * g.edges.length}=2|E|. Euler trail iff connected edge-bearing part and 0 or 2 odd vertices.`, headers: ['Vertex', 'Neighbors', 'Degree', 'Parity'], rows, svg: graphSvg(g, { mode: 'euler', odd, possible, route, attempt: input.attempt === 'yes' }) };
});

const bfs = define({
  id: 'bfs-layer-explorer', title: 'Shortest path layers', question: 'How does a queue discover shortest edge-count distances?',
  prediction: 'In an unweighted graph, the first discovery of a vertex gives a shortest number of edges from the source.',
  explanation: 'Choose edges, source, target, and how many queue removals to show. Distances are assigned when a neighbor is first enqueued.',
  limitations: 'All selected edges have unit cost. These labels do not minimize weighted travel time.',
  controls: [...graphControls(), range('source', 'Source vertex (1-based)', 1, 5, 1), range('target', 'Target vertex (1-based)', 1, 5, 4), range('step', 'Queue removals shown', 0, 5, 5)],
}, input => {
  const g = graph(input);
  if (input.source > g.n || input.target > g.n) throw new RangeError('Source and target must be among the chosen vertices.');
  const source = input.source - 1, target = input.target - 1;
  const distance = Array(g.n).fill(null), previous = Array(g.n).fill(null), queue = [source], log = [];
  distance[source] = 0;
  for (let head = 0; head < queue.length; head++) {
    const v = queue[head], discovered = [];
    for (const w of g.adjacency[v]) if (distance[w] === null) { distance[w] = distance[v] + 1; previous[w] = v; queue.push(w); discovered.push(w + 1); }
    log.push({ vertex: v + 1, discovered, pending: queue.slice(head + 1).map(w => w + 1), distance: [...distance], previous: [...previous] });
  }
  const done = Math.min(input.step, log.length), snapshot = done ? log[done - 1] : { distance: Array(g.n).fill(null), previous: Array(g.n).fill(null), pending: [source + 1] };
  if (!done) snapshot.distance[source] = 0;
  const path = [];
  if (snapshot.distance[target] !== null) for (let v = target; v !== null; v = snapshot.previous[v]) path.unshift(v + 1);
  const rows = g.adjacency.map((neighbors, i) => [String(i + 1), neighbors.map(v => v + 1).join(', ') || 'none', snapshot.distance[i] === null ? 'undiscovered' : String(snapshot.distance[i]), snapshot.previous[i] === null ? '—' : String(snapshot.previous[i] + 1)]);
  rows.push(...log.slice(0, done).map((entry, i) => [`Remove ${i + 1}: ${entry.vertex}`, `new ${entry.discovered.join(', ') || 'none'}`, `queue ${entry.pending.join(', ') || 'empty'}`, '']));
  return { summary: `${done} of ${log.length} queue removals. Pending queue: ${snapshot.pending.join(', ') || 'empty'}. Target ${input.target}: ${path.length ? `distance ${snapshot.distance[target]}, path ${path.join('→')}` : done === log.length ? 'unreachable' : 'not yet discovered'}.`,
    formula: 'On first discovery: d(neighbor)=d(current)+1; each BFS queue layer is one edge farther.', headers: ['Vertex or queue event', 'Neighbors or discoveries', 'Distance or queue', 'Predecessor'], rows, svg: graphSvg(g, { mode: 'bfs', distance: snapshot.distance, previous: snapshot.previous, source, target, pending: snapshot.pending, step: done }) };
});

const stateOptions = [['0', 'q0'], ['1', 'q1'], ['2', 'q2'], ['missing', 'Missing']];
const words = [''].concat(Array.from({ length: 5 }, (_, k) => Array.from({ length: 2 ** (k + 1) }, (_, i) => i.toString(2).padStart(k + 1, '0'))).flat());
const automaton = define({
  id: 'automaton-builder', title: 'Finite state machine workshop', question: 'What state does a binary word lead to, and is it accepting?',
  prediction: 'A complete deterministic table picks exactly one next state for each symbol.',
  explanation: 'Start at q0. Each word symbol selects the indicated transition; the final state decides acceptance. In the accepting mask, 1 marks q0, 2 marks q1 and 4 marks q2.',
  limitations: 'The editor has two or three states, a binary alphabet, and words of at most five symbols. A missing or out-of-range transition makes the machine invalid.',
  controls: [range('states', 'Number of states', 2, 3, 2), ...Array.from({ length: 3 }, (_, i) => [0, 1].map(symbol => select(`t${i}${symbol}`, `From q${i} on ${symbol}`, stateOptions, i === 2 ? '2' : String(symbol)))).flat(), range('accept', 'Accepting-state bit mask', 0, 7, 2), select('word', 'Binary input word', words.map(word => [word || 'ε', word || 'ε (empty)']), '101')],
}, input => {
  const n = input.states, transitions = [];
  for (let state = 0; state < n; state++) {
    transitions[state] = [];
    for (const symbol of [0, 1]) {
      const next = input[`t${state}${symbol}`];
      if (next === 'missing' || Number(next) >= n) throw new RangeError(`Transition from q${state} on ${symbol} is missing or outside this machine; choose a state or add an explicit sink.`);
      transitions[state][symbol] = Number(next);
    }
  }
  if (input.accept >= 2 ** n) throw new RangeError('Accepting-state mask includes a state outside this machine.');
  const word = input.word === 'ε' ? '' : input.word;
  let current = 0;
  const rows = [['Start', '—', 'q0', input.accept & 1 ? 'accepting' : 'nonaccepting']];
  for (let i = 0; i < word.length; i++) {
    const before = current;
    current = transitions[current][Number(word[i])];
    rows.push([`Symbol ${i + 1}: q${before}`, word[i], `q${current}`, input.accept & (1 << current) ? 'accepting' : 'nonaccepting']);
  }
  rows.push(...transitions.flatMap((row, i) => row.map((next, symbol) => [`δ(q${i},${symbol})`, String(symbol), `q${next}`, 'table entry'])));
  const accepted = Boolean(input.accept & (1 << current));
  return { summary: `${word || 'ε'} ends in q${current}: ${accepted ? 'accepted' : 'rejected'}.`, formula: `δ*(q0, ${word || 'ε'})=q${current}; accepting states: ${Array.from({ length: n }, (_, i) => i).filter(i => input.accept & (1 << i)).map(i => `q${i}`).join(', ') || 'none'}.`, headers: ['Step or transition', 'Symbol', 'Next state', 'Status'], rows };
});

const functions = {
  log: { name: '⌊log₂ n⌋+1', value: n => Math.floor(Math.log2(n)) + 1 },
  linear: { name: 'n', value: n => n },
  square: { name: 'n²', value: n => n * n },
  cube: { name: 'n³', value: n => n * n * n },
  exponential: { name: '2ⁿ', value: n => 2 ** n },
};
const growth = define({
  id: 'growth-comparator', title: 'Growth and thresholds', question: 'Does a proposed constant bound hold on the displayed integer range?',
  prediction: 'A finite table can refute a proposed bound at one n, but cannot prove a Big O claim.',
  explanation: 'Compare exact integer operation-count models f(n) and Cg(n) at each shown n at or above n₀.',
  limitations: 'These are mathematical functions, not measured runtimes. The display is capped at n=40; a finite pass is not an asymptotic proof.',
  controls: [select('f', 'Function f', Object.entries(functions).map(([key, value]) => [key, value.name]), 'square'), select('g', 'Comparison g', Object.entries(functions).map(([key, value]) => [key, value.name]), 'linear'), range('start', 'First n shown', 1, 40, 1), range('span', 'Number of n values', 1, 20, 12), range('C', 'Constant C', 1, 20, 4), range('n0', 'Threshold n₀', 1, 40, 3)],
}, ({ f, g, start, span, C, n0 }) => {
  const end = Math.min(40, start + span - 1);
  const rows = Array.from({ length: end - start + 1 }, (_, i) => {
    const n = start + i, left = functions[f].value(n), right = C * functions[g].value(n);
    return [String(n), String(left), String(right), n < n0 ? 'Below n₀' : left <= right ? 'Holds here' : 'Fails here'];
  });
  const failures = rows.filter(row => row[3] === 'Fails here').map(row => row[0]);
  const tested = rows.filter(row => row[3] !== 'Below n₀').length;
  return { summary: `${tested} displayed values at or above n₀=${n0}; ${failures.length ? `counterexamples at n=${failures.join(', ')}` : 'no displayed counterexample'}. ${tested === 0 ? 'No values tested above threshold.' : ''}`,
    formula: `Proposed: ${functions[f].name} ≤ ${C}(${functions[g].name}) for every integer n≥${n0}.`, headers: ['n', 'f(n)', 'C·g(n)', 'Result'], rows };
});

export const experiments = [counterexample, induction, quantifiers, diagonal, euclid, residues, choices, inclusion, degreeRoute, bfs, automaton, growth];
