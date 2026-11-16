// Finite, deterministic models for the probability and applied-mathematics catalog.
// All stochastic readouts use a local seeded generator; evaluate has no side effects.
const R = (key, label, min, max, step, value) => ({ key, label, type: 'range', min, max, step, value });
const S = (key, label, value, options) => ({ key, label, type: 'select', value, options: options.map(([v, l]) => ({ value: v, label: l })) });
const f = x => Number.isFinite(x) ? (x === 0 ? '0' : Number(x.toPrecision(6)).toString()) : 'undefined';
function n(state, key, fallback, min, max) {
  const x = state?.[key] === undefined ? fallback : Number(state[key]);
  if (!Number.isFinite(x) || x < min || x > max) throw new RangeError(`${key} must be between ${min} and ${max}.`);
  return x;
}
function integer(state, key, fallback, min, max) {
  const x = n(state, key, fallback, min, max);
  if (!Number.isInteger(x)) throw new RangeError(`${key} must be a whole number.`);
  return x;
}
function choice(state, key, fallback, allowed) {
  const x = state?.[key] ?? fallback;
  if (!allowed.includes(x)) throw new RangeError(`${key} has an unknown choice.`);
  return x;
}
function weights(state, keys, defaults, max = 20) {
  const w = keys.map((key, i) => n(state, key, defaults[i], 0, max));
  const total = w.reduce((a, b) => a + b, 0);
  if (total === 0) throw new RangeError('At least one weight must be positive.');
  return w.map(x => x / total);
}
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a += 0x6D2B79F5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function seedOf(state) { return integer(state, 'seed', 17, 0, 999999); }
function binomial(size, p) {
  if (p === 0) return Array.from({ length: size + 1 }, (_, k) => k === 0 ? 1 : 0);
  if (p === 1) return Array.from({ length: size + 1 }, (_, k) => k === size ? 1 : 0);
  const mode = Math.min(size, Math.floor((size + 1) * p));
  let logChoose = 0;
  for (let j = 1; j <= mode; j++) logChoose += Math.log(size - j + 1) - Math.log(j);
  const out = Array(size + 1).fill(0);
  out[mode] = Math.exp(logChoose + mode * Math.log(p) + (size - mode) * Math.log1p(-p));
  for (let k = mode; k > 0; k--) out[k - 1] = out[k] * k / (size - k + 1) * (1 - p) / p;
  for (let k = mode; k < size; k++) out[k + 1] = out[k] * (size - k) / (k + 1) * p / (1 - p);
  const total = out.reduce((a, b) => a + b, 0);
  return out.map(x => x / total);
}
function sampleIndex(probs, random) {
  const u = random(); let sum = 0;
  for (let i = 0; i < probs.length - 1; i++) { sum += probs[i]; if (u < sum) return i; }
  return probs.length - 1;
}
const seedControl = R('seed', 'Random seed', 0, 999999, 1, 17);
const entropy = ps => -ps.reduce((sum, p) => sum + (p ? p * Math.log2(p) : 0), 0);
const ink = '#17324d', blue = '#205a95', rust = '#b44b36', teal = '#287b72', grey = '#aab7c4';
const escapeXml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char]);
const coord = x => Number(x.toFixed(2));
const label = (x, y, value, size = 12, anchor = 'start', color = ink) => `<text x="${coord(x)}" y="${coord(y)}" font-size="${size}" text-anchor="${anchor}" fill="${color}">${escapeXml(value)}</text>`;
const line = (x1, y1, x2, y2, color = grey, width = 1, dash = '') => `<line x1="${coord(x1)}" y1="${coord(y1)}" x2="${coord(x2)}" y2="${coord(y2)}" stroke="${color}" stroke-width="${width}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const rect = (x, y, width, height, fill, stroke = 'none') => `<rect x="${coord(x)}" y="${coord(y)}" width="${coord(Math.max(0, width))}" height="${coord(Math.max(0, height))}" fill="${fill}" stroke="${stroke}"/>`;
const dot = (x, y, radius, fill) => `<circle cx="${coord(x)}" cy="${coord(y)}" r="${radius}" fill="${fill}"/>`;
const trace = (points, color, width = 2, dash = '') => `<polyline points="${points.map(([x, y]) => `${coord(x)},${coord(y)}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${width}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const frame = (title, desc, body, height = 280) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 ${height}" role="img"><title>${escapeXml(title)}</title><desc>${escapeXml(desc)}</desc>${rect(0, 0, 600, height, '#ffffff')}${body}</svg>`;

function conditionChart(pa, joint, exact, blueCount, seen) {
  const x = 155, w = 310, segments = [
    ['Prior bags', pa, 1 - pa, 'exact'],
    ['Blue and bag', joint[0], joint[1], 'joint'],
    ['Bag given blue', exact[0], exact[1], 'posterior'],
    ['Sample given blue', seen ? blueCount[0] / seen : NaN, seen ? blueCount[1] / seen : NaN, 'sample']
  ];
  let body = line(x, 255, x + w, 255, ink) + label(x, 272, '0') + label(x + w / 2, 272, '0.5', 12, 'middle') + label(x + w, 272, '1', 12, 'end');
  for (let i = 0; i < segments.length; i++) {
    const [name, a, b, kind] = segments[i], y = 38 + i * 53;
    body += label(12, y + 17, name, 13) + rect(x, y, w, 25, '#eef2f6');
    if (Number.isFinite(a)) body += rect(x, y, w * a, 25, blue) + rect(x + w * a, y, w * b, 25, kind === 'sample' ? '#d98b72' : rust);
    body += label(x + w + 8, y + 17, Number.isFinite(a) ? `${f(a)} / ${f(b)}` : 'undefined', 11);
  }
  body += rect(155, 234, 12, 12, blue) + label(172, 245, 'A', 11) + rect(215, 234, 12, 12, rust) + label(232, 245, 'B', 11);
  return frame('How a blue marble changes the denominator', `Horizontal scales run from probability zero to one. Prior, joint blue chances, exact posterior, and seeded posterior among ${seen} blue observations are shown; the table gives the branch counts.`, body, 285);
}

function distributionChart(scores, ps, counts, trials, mean) {
  const bottom = 218, top = 45, scale = bottom - top;
  let body = line(70, top, 70, bottom, ink) + line(70, bottom, 540, bottom, ink);
  for (const v of [0, .5, 1]) body += line(65, bottom - scale * v, 540, bottom - scale * v, '#d6dee7') + label(58, bottom - scale * v + 4, f(v), 11, 'end');
  scores.forEach((score, i) => {
    const x = 132 + i * 150, sample = counts[i] / trials;
    body += rect(x, bottom - scale * ps[i], 34, scale * ps[i], blue) + rect(x + 38, bottom - scale * sample, 34, scale * sample, rust);
    body += label(x + 35, 241, `${'ABC'[i]}: score ${f(score)}`, 12, 'middle');
  });
  body += rect(99, 263, 12, 12, blue) + label(117, 274, 'Exact probability', 12) + rect(276, 263, 12, 12, rust) + label(294, 274, `Sample fraction (${trials} trials)`, 12);
  return frame('Exact outcome chances and seeded frequencies', `Paired bars compare exact probabilities with frequencies over ${trials} seeded trials. Scores are ${scores.map(f).join(', ')} and the exact mean is ${f(mean)}. Vertical axis is probability from zero to one.`, body, 290);
}

function coverageChart(p, intervals, exact, nominal, covered, repeats) {
  const left = 80, width = 465, x = v => left + width * v;
  let body = line(left, 30, left + width, 30, ink) + label(left, 23, '0') + label(left + width, 23, '1', 12, 'end');
  body += line(x(p), 30, x(p), 295, rust, 2, '5 4');
  intervals.forEach(({ lo, hi, hit, k }, i) => {
    const y = 52 + i * 19, color = hit ? teal : rust;
    body += label(10, y + 4, `#${i + 1} k=${k}`, 11) + line(x(lo), y, x(hi), y, color, 3) + line(x(lo), y - 4, x(lo), y + 4, color, 2) + line(x(hi), y - 4, x(hi), y + 4, color, 2);
  });
  body += dot(86, 313, 5, teal) + label(99, 317, 'covers', 11) + dot(177, 313, 5, rust) + label(190, 317, 'misses', 11);
  body += label(265, 317, `p=${f(p)}; ${covered}/${repeats} observed; exact ${f(exact)}; nominal ${nominal}%`, 10);
  return frame('Repeated Wilson intervals against a fixed proportion', `First ${intervals.length} actual seeded intervals; teal intervals contain fixed p=${f(p)}, rust intervals miss it. Across ${repeats} samples, ${covered} cover. Exact finite-model coverage is ${f(exact)} and the nominal label is ${nominal} percent.`, body, 335);
}

function nullChart(pmf, observed, tail, pvalue, p0) {
  const max = Math.max(...pmf), bottom = 225, span = 160, start = 55, step = 500 / pmf.length;
  let body = line(start, bottom, 555, bottom, ink) + line(start, bottom - span, start, bottom, ink) + label(start - 7, bottom + 3, '0', 11, 'end') + label(start - 7, bottom - span + 3, f(max), 11, 'end');
  pmf.forEach((prob, k) => { const selected = tail === 'upper' ? k >= observed : k <= observed; body += rect(start + k * step + 1, bottom - span * prob / max, Math.max(1, step - 2), span * prob / max, selected ? rust : blue); });
  const mark = start + (observed + .5) * step;
  body += line(mark, 45, mark, 230, ink, 1, '4 4') + label(mark, 39, `observed k=${observed}`, 12, 'middle');
  for (const k of [0, pmf.length - 1]) body += label(start + (k + .5) * step, 245, String(k), 11, 'middle');
  body += label(300, 268, `Null: n=${pmf.length - 1}, p₀=${f(p0)}; shaded ${tail} tail=${f(pvalue)}`, 12, 'middle');
  return frame('Exact binomial null distribution and prespecified tail', `Each bar is an exact binomial probability. Rust bars are the prespecified ${tail} tail at observed count ${observed}, whose exact probability is ${f(pvalue)}. Bar heights are scaled to the largest mass, not to one.`, body, 285);
}

function walkChart(path, width, rightChance, censored) {
  const left = 75, top = 48, w = 470, h = 182, last = path.length - 1, x = i => left + w * i / Math.max(1, last), y = pos => top + h * (width - pos) / width;
  let body = line(left, top, left, top + h, ink) + line(left, top + h, left + w, top + h, ink);
  body += line(left, y(width), left + w, y(width), rust, 1, '5 4') + line(left, y(0), left + w, y(0), rust, 1, '5 4');
  body += label(65, y(width) + 4, `right ${width}`, 11, 'end') + label(65, y(0) + 4, 'left 0', 11, 'end');
  const stride = Math.max(1, Math.ceil(last / 220));
  const points = [];
  for (let i = 0; i <= last; i += stride) points.push([x(i), y(path[i])]);
  if (last % stride) points.push([x(last), y(path[last])]);
  body += trace(points, blue, 2) + dot(x(0), y(path[0]), 4, teal) + dot(x(last), y(path[last]), 5, censored ? grey : rust);
  body += label(left, 247, '0', 11) + label(left + w, 247, String(last), 11, 'end') + label(left + w / 2, 247, 'Step number', 12, 'middle');
  body += label(300, 273, `First seeded path: ${last} steps; exact right-edge chance ${f(rightChance)}`, 12, 'middle');
  return frame('First sampled path on the absorbing board', `Horizontal axis is step number zero through ${last}; vertical axis is board position zero through ${width}. First path ${censored ? 'was censored after 2000 steps' : `ended at ${path[last] === width ? 'right' : 'left'} edge`}. At most 221 plotted points are used if the path is longer. Exact right-edge chance is ${f(rightChance)}.`, body, 287);
}

function moodChart(history, pi) {
  const left = 65, top = 52, w = 480, h = 165, steps = history.length - 1, colors = [blue, rust, teal];
  let body = line(left, top, left, top + h, ink) + line(left, top + h, left + w, top + h, ink);
  for (const q of [0, .5, 1]) body += line(left, top + h * (1 - q), left + w, top + h * (1 - q), '#d6dee7') + label(left - 8, top + h * (1 - q) + 4, f(q), 11, 'end');
  for (let j = 0; j < 3; j++) {
    const points = history.map((v, t) => [left + w * t / steps, top + h * (1 - v[j])]);
    body += line(left, top + h * (1 - pi[j]), left + w, top + h * (1 - pi[j]), colors[j], 1, '4 4');
    body += trace(points, colors[j], 2);
  }
  body += label(left, 238, '0', 11) + label(left + w, 238, String(steps), 11, 'end') + label(left + w / 2, 238, 'Transition step', 12, 'middle');
  ['A', 'B', 'C'].forEach((s, i) => { body += line(155 + i * 100, 257, 175 + i * 100, 257, colors[i], 3) + label(181 + i * 100, 261, s, 11); });
  body += label(300, 277, 'Solid: step distribution    Dashed: stationary candidate', 11, 'middle');
  return frame('Three mood probabilities through repeated transitions', `Solid lines show actual distributions at steps zero through ${steps}; dashed horizontal lines mark the stationary candidate. The vertical axis is probability from zero to one. Stationary values are ${pi.map(f).join(', ')} for A, B, C, and solid lines need not converge to them.`, body, 283);
}

function entropyChart(letters, ps, h, hyx, second) {
  const surprises = ps.map(p => p ? -Math.log2(p) : NaN), max = Math.max(1, ...surprises.filter(Number.isFinite));
  const baseline = 210, barHeight = 135;
  let body = label(160, 36, 'Symbol probability P(X)', 13, 'middle') + label(440, 36, 'Surprise −log₂P(X) (bits)', 13, 'middle');
  body += line(45, baseline, 280, baseline, ink) + line(320, baseline, 570, baseline, ink);
  body += label(38, baseline - barHeight + 4, '1', 11, 'end') + label(313, baseline - barHeight + 4, f(max), 11, 'end');
  letters.forEach((s, i) => {
    const xp = 70 + i * 53, xs = 345 + i * 54;
    body += rect(xp, baseline - barHeight * ps[i], 31, barHeight * ps[i], blue);
    if (Number.isFinite(surprises[i])) body += rect(xs, baseline - barHeight * surprises[i] / max, 31, barHeight * surprises[i] / max, rust);
    body += label(xp + 15, 229, s, 12, 'middle') + label(xs + 15, 229, s, 12, 'middle');
    if (!ps[i]) body += label(xs + 15, 96, 'undefined', 10, 'middle', rust);
  });
  body += label(300, 262, second === 'parity' ? `H(X)=${f(h)} bits; H(Y|X)=${f(hyx)} bits` : `H(X)=${f(h)} bits; Y disabled`, 12, 'middle');
  return frame('Symbol probabilities and their surprise', `Blue bars show stipulated source probabilities on a zero-to-one scale. Rust bars show the corresponding surprise in bits on a separate zero-to-${f(max)} scale. Entropy is ${f(h)} bits. ${second === 'parity' ? `The noisy parity variable is enabled with conditional entropy ${f(hyx)} bits.` : 'The optional second variable Y is disabled.'}`, body, 280);
}

function huffmanChart(symbols, ps, codes, message, encoded) {
  const leaves = symbols.map((s, i) => ({ symbol: s, code: codes[s], p: ps[i] })).sort((a, b) => a.code.localeCompare(b.code));
  const positions = new Map();
  leaves.forEach((leaf, i) => positions.set(leaf.code, 58 + 53 * i));
  function yOf(prefix) {
    if (positions.has(prefix)) return positions.get(prefix);
    const matching = leaves.filter(leaf => leaf.code.startsWith(prefix));
    return (positions.get(matching[0].code) + positions.get(matching.at(-1).code)) / 2;
  }
  let body = '';
  const seen = new Set(['']);
  for (const leaf of leaves) for (let d = 1; d <= leaf.code.length; d++) seen.add(leaf.code.slice(0, d));
  for (const prefix of [...seen].sort((a, b) => a.length - b.length || a.localeCompare(b))) {
    if (!prefix) continue;
    const parent = prefix.slice(0, -1), x1 = 70 + parent.length * 110, x2 = 70 + prefix.length * 110, y1 = yOf(parent), y2 = yOf(prefix);
    body += line(x1, y1, x2, y2, grey, 2) + label((x1 + x2) / 2, (y1 + y2) / 2 - 4, prefix.at(-1), 11, 'middle');
  }
  for (const prefix of seen) {
    const x = 70 + prefix.length * 110, y = yOf(prefix), leaf = leaves.find(item => item.code === prefix);
    body += dot(x, y, leaf ? 7 : 5, leaf ? teal : blue);
    if (leaf) body += label(x + 13, y + 4, `${leaf.symbol}  p=${f(leaf.p)}  code=${leaf.code}`, 11);
  }
  body += label(300, 285, `${message} → ${encoded}`, 12, 'middle');
  return frame('Binary Huffman prefix tree', `Branches labeled zero and one form the code paths listed beside leaves. The selected message ${message} encodes as ${encoded}. Each leaf is one symbol; no code path is a prefix of another.`, body, 300);
}

function arrow(x1, y1, x2, y2, color) {
  const angle = Math.atan2(y2 - y1, x2 - x1), length = 6, wing = 3.5;
  const leftX = x2 - length * Math.cos(angle) + wing * Math.sin(angle), leftY = y2 - length * Math.sin(angle) - wing * Math.cos(angle);
  const rightX = x2 - length * Math.cos(angle) - wing * Math.sin(angle), rightY = y2 - length * Math.sin(angle) + wing * Math.cos(angle);
  return line(x1, y1, x2, y2, color, 2) + `<polygon points="${coord(x2)},${coord(y2)} ${coord(leftX)},${coord(leftY)} ${coord(rightX)},${coord(rightY)}" fill="${color}"/>`;
}

function payoffChart(u, rows, deviator, qr, qc) {
  const xs = [110, 310], ys = [55, 155];
  let body = label(300, 28, `Column strategy A / B; selected deviation: ${deviator}`, 13, 'middle') + label(75, 48, 'Row', 11);
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
    const k = 2 * i + j, x = xs[j], y = ys[i], nash = rows[k][4] === 'yes';
    body += rect(x, y, 175, 82, nash ? '#dcefe8' : '#eef2f6', nash ? teal : grey);
    body += label(x + 12, y + 21, `${'AB'[i]} / ${'AB'[j]}: (${u[k][0]}, ${u[k][1]})`, 13);
    body += label(x + 12, y + 42, `row best ${rows[k][2]}; col best ${rows[k][3]}`, 11);
    if (nash) body += label(x + 12, y + 65, 'PURE NASH', 11, 'start', teal);
  }
  for (let j = 0; j < 2; j++) {
    const x = xs[j] + 165, top = u[j][0], bottom = u[2 + j][0];
    if (bottom > top) body += arrow(x, 136, x, 153, rust);
    else if (top > bottom) body += arrow(x, 153, x, 136, rust);
  }
  for (let i = 0; i < 2; i++) {
    const y = ys[i] + 72, left = u[2 * i][1], right = u[2 * i + 1][1];
    if (right > left) body += arrow(286, y, 309, y, blue);
    else if (left > right) body += arrow(309, y, 286, y, blue);
  }
  body += label(300, 267, `Rust vertical: row improves; blue horizontal: column improves`, 11, 'middle');
  body += label(300, 287, `Mix: row A ${f(qr)}, column A ${f(qc)}`, 11, 'middle');
  return frame('Best-response arrows in a two-by-two payoff game', `Each cell gives row and column payoffs and best-response checks. Rust vertical arrows point to a strictly better row deviation; blue horizontal arrows point to a strictly better column deviation. Green cells pass both checks. Chosen mix chances are ${f(qr)} and ${f(qc)}.`, body, 300);
}

function ballotChart(first, borda, pair, voters, cycle, rule) {
  const left = 125, span = 335, y = [55, 118, 181];
  let body = label(left, 27, 'Blue: first-place votes / voters', 12) + label(360, 27, 'Rust: Borda points / (2×voters)', 12);
  for (let i = 0; i < 3; i++) {
    body += label(58, y[i] + 20, 'ABC'[i], 16) + rect(left, y[i], span, 15, '#eef2f6') + rect(left, y[i], span * first[i] / voters, 15, blue);
    body += rect(left, y[i] + 20, span, 15, '#eef2f6') + rect(left, y[i] + 20, span * borda[i] / (2 * voters), 15, rust);
    body += label(475, y[i] + 12, String(first[i]), 12) + label(475, y[i] + 32, String(borda[i]), 12);
  }
  const pairs = [[0, 1], [1, 2], [2, 0]];
  pairs.forEach(([a, b], i) => { body += label(20 + i * 195, 262, `${'ABC'[a]}>${'ABC'[b]}: ${pair[a][b]} vs ${pair[b][a]}`, 12); });
  body += label(300, 287, `${voters} ballots; ${cycle ? 'strict majority cycle' : 'no strict three-way cycle'}; selected rule: ${rule}`, 12, 'middle');
  return frame('Plurality, Borda and pairwise counts from the same ballots', `Each blue bar is first-place votes on a zero-to-${voters} scale; each rust bar is Borda points on a separate zero-to-${2 * voters} scale. Pairwise vote counts are listed below and each pair totals ${voters}. ${cycle ? 'A strict three-way cycle exists.' : 'There is no strict three-way cycle.'}`, body, 300);
}

function beatsChart(f1, f2, a1, a2, duration) {
  const left = 65, top = 43, w = 490, h = 180, extent = Math.max(1, a1 + a2), center = top + h / 2;
  const segments = Math.min(1000, Math.max(400, Math.ceil(Math.max(f1, f2) * duration * 12)));
  let body = line(left, center, left + w, center, grey) + line(left, top, left, top + h, ink) + line(left, top + h, left + w, top + h, ink);
  body += label(left - 7, top + 4, f(extent), 11, 'end') + label(left - 7, center + 4, '0', 11, 'end') + label(left - 7, top + h + 4, f(-extent), 11, 'end');
  const sum = [], positive = [], negative = [];
  for (let i = 0; i <= segments; i++) {
    const t = duration * i / segments, x = left + w * i / segments;
    const y1 = a1 * Math.sin(2 * Math.PI * f1 * t), y2 = a2 * Math.sin(2 * Math.PI * f2 * t);
    const envelope = Math.sqrt(a1 * a1 + a2 * a2 + 2 * a1 * a2 * Math.cos(2 * Math.PI * (f1 - f2) * t));
    sum.push([x, center - (h / 2) * (y1 + y2) / extent]);
    positive.push([x, center - (h / 2) * envelope / extent]);
    negative.push([x, center + (h / 2) * envelope / extent]);
  }
  body += trace(positive, rust, 1.5, '5 3') + trace(negative, rust, 1.5, '5 3') + trace(sum, blue, 2);
  body += label(left, 242, '0', 11) + label(left + w, 242, `${f(duration)} s`, 11, 'end') + label(left + w / 2, 242, 'Time (seconds)', 12, 'middle');
  body += line(130, 270, 154, 270, blue, 2) + label(160, 274, 'Tone sum', 11) + line(302, 270, 326, 270, rust, 2, '5 3') + label(332, 274, 'Envelope ±E(t)', 11);
  return frame('Two sinusoidal tones and their beat envelope', `Blue trace is the exact sum of ${f(a1)} sin(2π${f(f1)}t) and ${f(a2)} sin(2π${f(f2)}t), sampled densely only for drawing. Rust dashed curves are plus and minus the analytic envelope. Axes show time zero to ${f(duration)} seconds and amplitude minus to plus ${f(extent)}. Table gives 17 separate numeric samples.`, body, 290);
}

const graphPositions = {
  chain: [[35, 120], [80, 120], [125, 120], [170, 120], [215, 120]],
  star: [[125, 120], [35, 60], [215, 60], [35, 180], [215, 180]],
  ring: [[125, 48], [205, 100], [175, 190], [75, 190], [45, 100]],
  bridge: [[30, 65], [105, 65], [67, 135], [155, 135], [200, 65], [215, 195]]
};
function modelChart(name, graph, p, dist, sampledMean, runs) {
  const coords = graphPositions[name], exactMean = dist.reduce((s, chance, k) => s + k * chance, 0);
  let body = label(130, 28, `Candidate edges, each open with p=${f(p)}`, 12, 'middle');
  for (const [u, v] of graph.edges) body += line(coords[u][0], coords[u][1], coords[v][0], coords[v][1], grey, 3);
  coords.forEach(([x, y], i) => { body += dot(x, y, 12, i === 0 ? rust : teal) + label(x, y + 4, graph.names[i], 12, 'middle', '#ffffff'); });
  const left = 315, top = 53, w = 235, h = 165, count = graph.names.length;
  body += line(left, top, left, top + h, ink) + line(left, top + h, left + w, top + h, ink);
  const yy = spread => top + h * (count - spread) / (count - 1), xx = chance => left + w * chance;
  const points = Array.from({ length: 41 }, (_, i) => { const q = i / 40, expected = exactSpread(graph, q).reduce((s, chance, k) => s + k * chance, 0); return [xx(q), yy(expected)]; });
  body += trace(points, blue, 2.5) + dot(xx(p), yy(exactMean), 5, blue) + dot(xx(p), yy(sampledMean), 5, rust);
  body += label(left - 7, top + 4, String(count), 11, 'end') + label(left - 7, top + h + 4, '1', 11, 'end') + label(left, 235, '0', 11) + label(left + w, 235, '1', 11, 'end');
  body += label(left + w / 2, 251, 'Edge-open chance p', 11, 'middle') + label(left + w / 2, 270, 'Mean reached nodes', 11, 'middle');
  body += label(300, 292, `At p=${f(p)}: exact ${f(exactMean)}; sample ${f(sampledMean)} (${runs} runs)`, 11, 'middle');
  return frame('Toy network and exact spread sensitivity', `Left: ${graph.names.length} nodes and ${graph.edges.length} candidate undirected edges; A is the seed. Right: blue exact expected spread versus edge-open probability zero to one, with blue exact and rust seeded sample mean at chosen p=${f(p)}. Vertical axis is reached nodes one through ${count}; sample mean over ${runs} runs is ${f(sampledMean)}.`, body, 305);
}

const condition = {
  id: 'probability-condition-reveal', title: 'Reveal the denominator',
  question: 'After seeing a blue marble, which bag is likely?',
  prediction: 'A blue marble favors the bag that produces blue more often, but the prior choice still matters.',
  explanation: 'Multiply each prior bag chance by its blue-marble likelihood, then divide by the total blue chance. The counts are independent bag choices with replacement.',
  limitations: 'Bag contents and prior choice are stipulated. A zero-probability clue has no conditional posterior; finite samples fluctuate.',
  controls: [R('priorA', 'Chance of choosing bag A', 0, 1, .05, .5), R('blueA', 'Blue fraction in A', 0, 1, .05, .8), R('blueB', 'Blue fraction in B', 0, 1, .05, .2), R('draws', 'Independent draws', 10, 5000, 10, 500), seedControl],
  evaluate(state) {
    const pa = n(state, 'priorA', .5, 0, 1), ba = n(state, 'blueA', .8, 0, 1), bb = n(state, 'blueB', .2, 0, 1);
    const draws = integer(state, 'draws', 500, 10, 5000), random = rng(seedOf(state));
    const joint = [pa * ba, (1 - pa) * bb], evidence = joint[0] + joint[1];
    const selected = [0, 0], blue = [0, 0];
    for (let i = 0; i < draws; i++) { const bag = random() < pa ? 0 : 1; selected[bag]++; if (random() < (bag ? bb : ba)) blue[bag]++; }
    const exact = evidence ? joint.map(v => v / evidence) : [NaN, NaN];
    const seen = blue[0] + blue[1];
    return {
      summary: evidence ? `P(A | blue) = ${f(exact[0])}. Seeded sample: ${blue[0]} of ${seen} blue observations came from A${seen ? ` (${f(blue[0] / seen)})` : '; sample estimate undefined'}.` : 'Blue has total probability zero under the chosen prior and bag compositions; P(A | blue) is undefined.',
      formula: 'P(A | blue) = P(A)P(blue | A) / [P(A)P(blue | A) + P(B)P(blue | B)]',
      headers: ['Bag', 'Prior', 'Blue likelihood', 'Joint blue chance', 'Exact posterior', 'Chosen / blue in sample'],
      rows: [['A', f(pa), f(ba), f(joint[0]), f(exact[0]), `${selected[0]} / ${blue[0]}`], ['B', f(1 - pa), f(bb), f(joint[1]), f(exact[1]), `${selected[1]} / ${blue[1]}`], ['Total', '1', '', f(evidence), evidence ? '1' : 'undefined', `${draws} / ${seen}`]],
      svg: conditionChart(pa, joint, exact, blue, seen)
    };
  }
};

const distribution = {
  id: 'probability-distribution-builder', title: 'Build a fair or lopsided game',
  question: 'Can two games have a similar average but different surprises?',
  prediction: 'The exact mean and variance come from the outcome weights; a short running average can miss the exact mean.',
  explanation: 'Weights are normalized into probabilities. Each seeded trial independently samples one of the three scores.',
  limitations: 'A mean is a long-run model average, not a promised score; these three outcomes are chosen by the learner.',
  controls: [R('scoreA', 'Score A', -10, 10, 1, -2), R('scoreB', 'Score B', -10, 10, 1, 1), R('scoreC', 'Score C', -10, 10, 1, 6), R('weightA', 'Weight A', 0, 10, 1, 3), R('weightB', 'Weight B', 0, 10, 1, 4), R('weightC', 'Weight C', 0, 10, 1, 3), R('trials', 'Trials', 10, 5000, 10, 500), seedControl],
  evaluate(state) {
    const scores = ['A', 'B', 'C'].map((v, i) => n(state, `score${v}`, [-2, 1, 6][i], -10, 10));
    const ps = weights(state, ['weightA', 'weightB', 'weightC'], [3, 4, 3], 10);
    const trials = integer(state, 'trials', 500, 10, 5000), random = rng(seedOf(state));
    const mean = scores.reduce((s, x, i) => s + x * ps[i], 0);
    const variance = scores.reduce((s, x, i) => s + ps[i] * (x - mean) ** 2, 0);
    const counts = [0, 0, 0], checkpoints = [], marks = new Set([10, 50, 100, 500, trials]); let total = 0;
    for (let i = 1; i <= trials; i++) { const j = sampleIndex(ps, random); counts[j]++; total += scores[j]; if (marks.has(i)) checkpoints.push(`${i}: ${f(total / i)}`); }
    return {
      summary: `Exact mean ${f(mean)}, variance ${f(variance)}, standard deviation ${f(Math.sqrt(variance))}. Sample mean after ${trials} trials: ${f(total / trials)}. Running means: ${checkpoints.join('; ')}.`,
      formula: 'P(i) = weight(i) / total weight; E[X] = Σ pᵢxᵢ; Var(X) = Σ pᵢ(xᵢ − E[X])²',
      headers: ['Outcome', 'Score', 'Exact probability', 'Mean contribution', 'Sample count'],
      rows: scores.map((score, i) => [String.fromCharCode(65 + i), f(score), f(ps[i]), f(ps[i] * score), String(counts[i])]).concat([['Total', '', '1', f(mean), String(trials)]]),
      svg: distributionChart(scores, ps, counts, trials, mean)
    };
  }
};

const Z = { '80': 1.2815515655446004, '90': 1.6448536269514722, '95': 1.959963984540054 };
function wilson(k, size, z) {
  const ph = k / size, d = 1 + z * z / size;
  const center = (ph + z * z / (2 * size)) / d;
  const margin = z * Math.sqrt(ph * (1 - ph) / size + z * z / (4 * size * size)) / d;
  return [center - margin, center + margin];
}
const coverage = {
  id: 'statistics-inference-coverage-factory', title: 'Watch interval coverage',
  question: 'How often does a repeated interval procedure cover one fixed proportion?',
  prediction: 'Observed coverage moves around the procedure’s exact finite-model coverage, which can differ from its nominal label.',
  explanation: 'Each repetition draws independent Bernoulli tiles with one fixed hidden blue proportion. Wilson score intervals are then checked against that fixed value.',
  limitations: 'Wilson intervals have approximate nominal coverage; exact finite-model coverage is enumerated here. The realized interval has no assigned posterior probability.',
  controls: [R('p', 'Fixed blue proportion', 0, 1, .01, .35), R('size', 'Tiles per sample', 5, 100, 1, 30), S('nominal', 'Nominal coverage', '95', [['80', '80%'], ['90', '90%'], ['95', '95%']]), R('repeats', 'Repeated samples', 10, 1000, 10, 100), seedControl],
  evaluate(state) {
    const p = n(state, 'p', .35, 0, 1), size = integer(state, 'size', 30, 5, 100);
    const nominal = choice(state, 'nominal', '95', Object.keys(Z)), z = Z[nominal];
    const repeats = integer(state, 'repeats', 100, 10, 1000), random = rng(seedOf(state));
    const pmf = binomial(size, p);
    const exact = pmf.reduce((s, pk, k) => { const [lo, hi] = wilson(k, size, z); return s + (lo <= p + 1e-12 && p <= hi + 1e-12 ? pk : 0); }, 0);
    let covered = 0; const rows = [], intervals = [];
    for (let j = 1; j <= repeats; j++) {
      let k = 0; for (let t = 0; t < size; t++) if (random() < p) k++;
      const [lo, hi] = wilson(k, size, z), hit = lo <= p + 1e-12 && p <= hi + 1e-12;
      if (hit) covered++;
      if (j <= 12) { rows.push([String(j), String(k), `[${f(lo)}, ${f(hi)}]`, hit ? 'covers' : 'misses']); intervals.push({ lo, hi, hit, k }); }
    }
    rows.push(['All repetitions', `${repeats} × ${size}`, `${covered}/${repeats}`, f(covered / repeats)]);
    return { summary: `${covered} of ${repeats} intervals cover p = ${f(p)} (observed ${f(covered / repeats)}). Nominal ${nominal}%; exact coverage under this Bernoulli model is ${f(exact)}. First ${intervals.length} intervals are listed.`, formula: 'Wilson interval: [c − m, c + m], c = (p̂ + z²/(2n))/(1 + z²/n), m = z√[p̂(1−p̂)/n + z²/(4n²)]/(1 + z²/n)', headers: ['Sample', 'Blue count', 'Interval or count', 'Covers fixed p?'], rows, svg: coverageChart(p, intervals, exact, nominal, covered, repeats) };
  }
};

const nullTail = {
  id: 'statistics-inference-null-tail', title: 'Explore null tails and selection',
  question: 'How surprising is this count under a stated fair-spinner model, and what if many tests are tried?',
  prediction: 'Choosing the smallest p-value among more independent tests makes a small value more likely even when all null models hold.',
  explanation: 'Each prespecified test counts blue outcomes from independent spins. Its exact one-sided binomial tail is computed before independent null tests are simulated.',
  limitations: 'The p-value is conditional on the null, never P(null true). Direction must be chosen in advance. Continuous-uniform minimum-p formulas are not exact for discrete binomial tests.',
  controls: [R('p0', 'Null blue chance', .05, .95, .05, .5), R('size', 'Spins per test', 5, 40, 1, 12), R('observed', 'Observed blue count', 0, 40, 1, 9), S('tail', 'Prespecified tail', 'upper', [['upper', 'Upper: at least this many'], ['lower', 'Lower: at most this many']]), R('tests', 'Independent tests tried', 1, 20, 1, 5), R('repeats', 'Simulated batches', 50, 1000, 50, 300), seedControl],
  evaluate(state) {
    const p0 = n(state, 'p0', .5, .05, .95), size = integer(state, 'size', 12, 5, 40), observed = integer(state, 'observed', 9, 0, 40);
    if (observed > size) throw new RangeError('Observed blue count cannot exceed spins per test.');
    const tail = choice(state, 'tail', 'upper', ['upper', 'lower']);
    const tests = integer(state, 'tests', 5, 1, 20), repeats = integer(state, 'repeats', 300, 50, 1000), random = rng(seedOf(state));
    const pmf = binomial(size, p0);
    const pvals = pmf.map((_, k) => tail === 'upper' ? pmf.slice(k).reduce((a, b) => a + b, 0) : pmf.slice(0, k + 1).reduce((a, b) => a + b, 0));
    const alpha = .05, one = pmf.reduce((s, x, k) => s + (pvals[k] <= alpha + 1e-12 ? x : 0), 0), family = 1 - Math.pow(1 - one, tests);
    let alarms = 0; const buckets = [0, 0, 0, 0];
    for (let r = 0; r < repeats; r++) {
      let min = 1;
      for (let j = 0; j < tests; j++) { let k = 0; for (let t = 0; t < size; t++) if (random() < p0) k++; min = Math.min(min, pvals[k]); }
      if (min <= alpha + 1e-12) alarms++;
      buckets[min <= .01 + 1e-12 ? 0 : min <= .05 + 1e-12 ? 1 : min <= .2 + 1e-12 ? 2 : 3]++;
    }
    return { summary: `Observed ${observed}/${size}: exact ${tail}-tail p-value ${f(pvals[observed])}. In ${repeats} seeded batches of ${tests} independent true-null tests, ${alarms} had minimum p ≤ 0.05; exact probability under this discrete model is ${f(family)} (one test: ${f(one)}). Minimum-p bins ≤.01 / (.01,.05] / (.05,.2] / >.2: ${buckets.join(' / ')}.`, formula: `P₀(X=k) = C(n,k)p₀ᵏ(1−p₀)ⁿ⁻ᵏ; ${tail === 'upper' ? 'p(k)=P₀(X≥k)' : 'p(k)=P₀(X≤k)'}; family probability = 1−(1−q)^m, q=P₀(p(X)≤.05)`, headers: ['Blue count k', 'Exact null mass', `${tail} tail p(k)`, 'In observed tail?'], rows: pmf.map((mass, k) => [String(k), f(mass), f(pvals[k]), tail === 'upper' ? (k >= observed ? 'yes' : 'no') : (k <= observed ? 'yes' : 'no')]), svg: nullChart(pmf, observed, tail, pvals[observed], p0) };
  }
};

function ruinChance(start, width, p) {
  if (start === 0) return 0;
  if (start === width) return 1;
  if (p === 0) return 0;
  if (p === 1) return 1;
  if (p === .5) return start / width;
  if (p < .5) {
    const logRatio = Math.log(p / (1 - p));
    return Math.exp((width - start) * logRatio) * Math.expm1(start * logRatio) / Math.expm1(width * logRatio);
  }
  const logRatio = Math.log((1 - p) / p);
  return Math.expm1(start * logRatio) / Math.expm1(width * logRatio);
}
const walk = {
  id: 'stochastic-processes-walk-edges', title: 'Walk until an edge',
  question: 'What is the chance a token hits the right edge before the left?',
  prediction: 'A small drift toward the right can change the right-edge chance substantially.',
  explanation: 'A token on 0…N moves right with fixed chance p and left otherwise. Edges absorb. The finite recurrence is solved exactly; seeded paths merely check it.',
  limitations: 'Paths are capped at 2000 steps for responsiveness. The displayed sample mean averages min(T,2000), not T. Censored paths are reported; the exact eventual hitting chance is independent of this cap.',
  controls: [R('width', 'Right edge position N', 2, 12, 1, 6), R('start', 'Starting position', 0, 12, 1, 3), R('right', 'Chance of right step', 0, 1, .05, .5), R('runs', 'Sample paths', 10, 500, 10, 100), seedControl],
  evaluate(state) {
    const width = integer(state, 'width', 6, 2, 12), start = integer(state, 'start', 3, 0, 12);
    if (start > width) throw new RangeError('Start must lie between the board edges.');
    const p = n(state, 'right', .5, 0, 1), runs = integer(state, 'runs', 100, 10, 500), random = rng(seedOf(state));
    const right = ruinChance(start, width, p), rows = []; let hitRight = 0, hitLeft = 0, censored = 0, totalSteps = 0, firstPath = [];
    for (let r = 0; r < runs; r++) {
      let pos = start, steps = 0;
      const trace = [pos];
      if (r === 0) firstPath.push(pos);
      while (pos > 0 && pos < width && steps < 2000) { pos += random() < p ? 1 : -1; steps++; if (r < 8 && trace.length < 20) trace.push(pos); if (r === 0) firstPath.push(pos); }
      if (pos === width) hitRight++; else if (pos === 0) hitLeft++; else censored++;
      totalSteps += steps;
      if (r < 8) rows.push([String(r + 1), trace.join(' → ') + (steps >= 20 ? ' …' : ''), String(steps), pos === width ? 'right' : pos === 0 ? 'left' : 'censored']);
    }
    rows.push(['All paths', `${hitLeft} left; ${hitRight} right`, `Mean capped: ${f(totalSteps / runs)}`, `${censored} censored`]);
    return { summary: `Exact eventual chance of hitting right first: ${f(right)}; left first: ${f(1 - right)}.${p===.5?` For fair steps, the exact full mean absorption time is i(N−i) = ${start*(width-start)} steps.`:''} In ${runs} seeded paths, ${hitRight} reached right, ${hitLeft} left, and ${censored} were censored at 2000 steps. Sample mean of min(T,2000) ≈ ${f(totalSteps/runs)} steps; this estimates the capped expectation, not necessarily E[T]. First 8 paths shown.`, formula: p === .5 ? 'h₀=0, h_N=1, hᵢ=(hᵢ₋₁+hᵢ₊₁)/2; for p=1/2, hᵢ=i/N and Eᵢ[T]=i(N−i)' : 'h₀=0, h_N=1, hᵢ=(1−p)hᵢ₋₁+phᵢ₊₁; hᵢ=[1−((1−p)/p)ⁱ]/[1−((1−p)/p)ᴺ] for 0<p<1, p≠1/2', headers: ['Path', 'Positions', 'Recorded steps (cap 2000)', 'Outcome'], rows, svg: walkChart(firstPath, width, right, firstPath.at(-1) !== 0 && firstPath.at(-1) !== width) };
  }
};

function stationary(P) {
  // Solve πP=π and Σπ=1. Singular systems have multiple stationary vectors.
  const a = [
    [P[0][0] - 1, P[1][0], P[2][0], 0],
    [P[0][1], P[1][1] - 1, P[2][1], 0],
    [1, 1, 1, 1]
  ];
  for (let col = 0; col < 3; col++) {
    let pivot = col;
    for (let row = col + 1; row < 3; row++) if (Math.abs(a[row][col]) > Math.abs(a[pivot][col])) pivot = row;
    if (Math.abs(a[pivot][col]) < 1e-10) return null;
    [a[col], a[pivot]] = [a[pivot], a[col]];
    const d = a[col][col]; for (let j = col; j < 4; j++) a[col][j] /= d;
    for (let row = 0; row < 3; row++) if (row !== col) { const m = a[row][col]; for (let j = col; j < 4; j++) a[row][j] -= m * a[col][j]; }
  }
  return a.map(row => Math.max(0, row[3]));
}
const matmul = (v, P) => P[0].map((_, j) => v.reduce((s, x, i) => s + x * P[i][j], 0));
const mood = {
  id: 'stochastic-processes-mood-chain', title: 'Playlist mood chain',
  question: 'How do three playlist moods change under one-step transition rules?',
  prediction: 'Row normalization keeps each step a distribution; a stationary distribution can exist even when the sequence cycles.',
  explanation: 'Each row gives relative weights for the next mood and is normalized to sum to one. The start weights are normalized likewise.',
  limitations: 'Stationarity means πP=π. It alone does not ensure convergence from a given start; zero weights can make the stationary distribution non-unique.',
  controls: [
    ...['A', 'B', 'C'].flatMap((from, i) => ['A', 'B', 'C'].map((to, j) => R(`w${from}${to}`, `${from} → ${to} weight`, 0, 10, 1, i === j ? 6 : 2))),
    R('startA', 'Initial A weight', 0, 10, 1, 10), R('startB', 'Initial B weight', 0, 10, 1, 0), R('startC', 'Initial C weight', 0, 10, 1, 0), R('steps', 'Steps', 1, 20, 1, 8)
  ],
  evaluate(state) {
    const P = ['A', 'B', 'C'].map(from => weights(state, ['A', 'B', 'C'].map(to => `w${from}${to}`), ['A', 'B', 'C'].map(to => from === to ? 6 : 2), 10));
    const start = weights(state, ['startA', 'startB', 'startC'], [10, 0, 0], 10), steps = integer(state, 'steps', 8, 1, 20);
    const rows = P.map((row, i) => [`Transition from ${'ABC'[i]}`, ...row.map(f)]);
    let v = start; const history = [v]; rows.push(['Start', ...v.map(f)]);
    for (let t = 1; t <= steps; t++) { v = matmul(v, P); history.push(v); rows.push([`Step ${t}`, ...v.map(f)]); }
    let pi = stationary(P), note = 'Unique stationary vector from πP=π.';
    if (!pi) {
      let sum = [0, 0, 0], iter = start;
      for (let t = 0; t < 10000; t++) { sum = sum.map((x, i) => x + iter[i]); iter = matmul(iter, P); }
      pi = sum.map(x => x / 10000);
      note = 'Stationary vector is not unique; the listed start-dependent Cesàro average is approximate.';
    }
    const residual = Math.max(...matmul(pi, P).map((x, i) => Math.abs(x - pi[i])));
    rows.push(['Stationary candidate', ...pi.map(f)]);
    return { summary: `${note} Maximum balance residual ${f(residual)}. Step ${steps} distribution: ${v.map(f).join(', ')} for A, B, C. A stationary vector may not be the limit of these steps.`, formula: 'vₜ₊₁ = vₜP; ΣⱼPᵢⱼ = 1; stationary π satisfies πP=π and Σᵢπᵢ=1', headers: ['Row / step', 'A', 'B', 'C'], rows, svg: moodChart(history, pi) };
  }
};

const mixer = {
  id: 'information-theory-entropy-mixer', title: 'Mix an alphabet',
  question: 'How much surprise does a chosen alphabet carry, and what does a second clue add?',
  prediction: 'A more balanced distribution has higher entropy; a noisy parity clue adds conditional uncertainty.',
  explanation: 'Weights become stipulated source probabilities. Optional Y is the parity of the symbol index, independently flipped with the chosen chance.',
  limitations: 'These are model probabilities, not frequencies estimated from observed messages. Zero-probability symbols have undefined self-information and contribute zero to entropy.',
  controls: [R('size', 'Alphabet size', 2, 4, 1, 3), ...'ABCD'.split('').map((s, i) => R(`weight${s}`, `${s} weight`, 0, 10, 1, [5, 3, 2, 0][i])), S('second', 'Second variable Y', 'none', [['none', 'None'], ['parity', 'Noisy index parity']]), R('flip', 'Parity-flip chance', 0, .5, .05, .1)],
  evaluate(state) {
    const size = integer(state, 'size', 3, 2, 4), letters = 'ABCD'.slice(0, size).split('');
    const ps = weights(state, letters.map(s => `weight${s}`), [5, 3, 2, 0].slice(0, size), 10);
    const second = choice(state, 'second', 'none', ['none', 'parity']), flip = n(state, 'flip', .1, 0, .5);
    const h = entropy(ps), hyx = second === 'parity' ? entropy([flip, 1 - flip]) : 0;
    const joint = second === 'parity' ? ps.flatMap((p, i) => i % 2 ? [p * flip, p * (1 - flip)] : [p * (1 - flip), p * flip]) : ps;
    const hJoint = entropy(joint), rows = ps.map((p, i) => [letters[i], f(p), p ? f(-Math.log2(p)) : 'undefined', f(p ? -p * Math.log2(p) : 0), second === 'parity' ? `${f(joint[2 * i])}, ${f(joint[2 * i + 1])}` : '—']);
    return { summary: `H(X) = ${f(h)} bits. ${second === 'parity' ? `H(Y|X) = ${f(hyx)} bits; H(X,Y) = ${f(hJoint)} bits, matching their sum within rounding.` : 'Enable Y to inspect the chain rule.'}`, formula: 'I(x)=−log₂P(x); H(X)=ΣₓP(x)I(x); H(X,Y)=H(X)+H(Y|X)', headers: ['Symbol', 'P(X)', 'Surprise (bits)', 'Entropy contribution', 'Joint P(X,Y=0), P(X,Y=1)'], rows, svg: entropyChart(letters, ps, h, hyx, second) };
  }
};

function huffman(symbols, probs, tie) {
  let serial = 0;
  const nodes = symbols.map((symbol, i) => ({ weight: probs[i], order: serial++, symbol }));
  const rank = s => tie === 'reverse' ? -s.charCodeAt(0) : s.charCodeAt(0);
  while (nodes.length > 1) {
    nodes.sort((a, b) => a.weight - b.weight || rank(a.symbol) - rank(b.symbol) || a.order - b.order);
    const left = nodes.shift(), right = nodes.shift();
    nodes.push({ weight: left.weight + right.weight, order: serial++, symbol: left.symbol < right.symbol ? left.symbol : right.symbol, left, right });
  }
  const codes = {};
  function visit(node, code) { if (!node.left) codes[node.symbol] = code || '0'; else { visit(node.left, code + '0'); visit(node.right, code + '1'); } }
  visit(nodes[0], '');
  return codes;
}
const codeTree = {
  id: 'information-theory-code-tree', title: 'Code a tiny alphabet',
  question: 'Can a frequently used symbol get a shorter prefix code?',
  prediction: 'Huffman merging gives a prefix-free tree whose weighted mean length is at least the entropy.',
  explanation: 'The two lowest current weights merge repeatedly. Left edges are 0 and right edges 1; ties follow the selected order.',
  limitations: 'Huffman is optimal among binary prefix codes for these stipulated weights. Entropy is a bound, not generally an achievable integer-bit mean for a finite source.',
  controls: [...'ABCD'.split('').map((s, i) => R(`weight${s}`, `${s} weight`, 1, 10, 1, [5, 3, 1, 1][i])), S('tie', 'Tie order', 'alphabetic', [['alphabetic', 'Alphabetic'], ['reverse', 'Reverse alphabetic']]), S('message', 'Message', 'ABCD', [['ABCD', 'ABCD'], ['AABBCCDD', 'AABBCCDD'], ['DAD', 'DAD']])],
  evaluate(state) {
    const symbols = 'ABCD'.split('');
    const w = symbols.map((s, i) => n(state, `weight${s}`, [5, 3, 1, 1][i], 1, 10));
    const total = w.reduce((a, b) => a + b, 0), ps = w.map(x => x / total);
    const tie = choice(state, 'tie', 'alphabetic', ['alphabetic', 'reverse']), message = choice(state, 'message', 'ABCD', ['ABCD', 'AABBCCDD', 'DAD']);
    const codes = huffman(symbols, ps, tie), encoded = [...message].map(s => codes[s]).join('');
    const decoded = []; let buffer = '';
    for (const bit of encoded) { buffer += bit; const symbol = symbols.find(s => codes[s] === buffer); if (symbol) { decoded.push(symbol); buffer = ''; } }
    const expected = ps.reduce((s, p, i) => s + p * codes[symbols[i]].length, 0), kraft = symbols.reduce((s, c) => s + 2 ** -codes[c].length, 0), h = entropy(ps);
    const prefixFree = symbols.every((a, i) => symbols.every((b, j) => i === j || !codes[b].startsWith(codes[a])));
    return { summary: `Expected code length ${f(expected)} bits/symbol; entropy ${f(h)} bits/symbol; Kraft sum ${f(kraft)}; prefix-free: ${prefixFree ? 'yes' : 'no'}. ${message} → ${encoded} → ${decoded.join('')}.`, formula: 'L = Σₓ P(x)ℓ(x); H(X) ≤ L < H(X)+1 for a binary Huffman code; Kraft sum = Σₓ2⁻ℓ⁽ˣ⁾ ≤ 1', headers: ['Symbol', 'Probability', 'Code path', 'Length', 'Expected-length contribution'], rows: symbols.map((s, i) => [s, f(ps[i]), codes[s], String(codes[s].length), f(ps[i] * codes[s].length)]), svg: huffmanChart(symbols, ps, codes, message, encoded) };
  }
};

const payoffs = {
  id: 'game-social-choice-best-response', title: 'Follow the best-response arrows',
  question: 'Which payoff cells resist either player changing strategy alone?',
  prediction: 'A pure Nash cell passes both unilateral deviation checks; it need not maximize the sum of payoffs.',
  explanation: 'Each cell lists (row-player payoff, column-player payoff). A row best response compares cells in the same column; a column best response compares cells in the same row.',
  limitations: 'Payoffs are stipulated preferences for a two-player toy game. Equilibrium is a stability condition, not a behavioral forecast.',
  controls: [...['AA', 'AB', 'BA', 'BB'].flatMap((cell, i) => [R(`${cell}row`, `${cell}: row payoff`, -5, 10, 1, [3, 0, 5, 1][i]), R(`${cell}col`, `${cell}: column payoff`, -5, 10, 1, [3, 5, 0, 1][i])]), S('deviator', 'Inspect deviation by', 'row', [['row', 'Row player'], ['column', 'Column player']]), R('mixRow', 'Chance row plays A (%)', 0, 100, 5, 50), R('mixCol', 'Chance column plays A (%)', 0, 100, 5, 50)],
  evaluate(state) {
    const cells = ['AA', 'AB', 'BA', 'BB'];
    const u = cells.map((c, i) => [n(state, `${c}row`, [3, 0, 5, 1][i], -5, 10), n(state, `${c}col`, [3, 5, 0, 1][i], -5, 10)]);
    const deviator = choice(state, 'deviator', 'row', ['row', 'column']);
    const qr = n(state, 'mixRow', 50, 0, 100) / 100, qc = n(state, 'mixCol', 50, 0, 100) / 100;
    const rows = cells.map((cell, k) => {
      const i = Math.floor(k / 2), j = k % 2;
      const rowBest = u[k][0] >= u[(1 - i) * 2 + j][0];
      const colBest = u[k][1] >= u[i * 2 + (1 - j)][1];
      return [`${i ? 'B' : 'A'} / ${j ? 'B' : 'A'}`, `(${u[k][0]}, ${u[k][1]})`, rowBest ? 'yes' : 'no', colBest ? 'yes' : 'no', rowBest && colBest ? 'yes' : 'no'];
    });
    const rowA = qc * u[0][0] + (1 - qc) * u[1][0], rowB = qc * u[2][0] + (1 - qc) * u[3][0];
    const colA = qr * u[0][1] + (1 - qr) * u[2][1], colB = qr * u[1][1] + (1 - qr) * u[3][1];
    const mixedRow = qr * rowA + (1 - qr) * rowB, mixedCol = qc * colA + (1 - qc) * colB;
    const equilibria = cells.filter((_, i) => rows[i][4] === 'yes');
    return { summary: `Pure equilibrium cells: ${equilibria.join(', ') || 'none'}. Inspecting the ${deviator} player's deviation: compare ${deviator === 'row' ? 'payoffs within each column' : 'payoffs within each row'}. Against the other player's mix, row A/B earn ${f(rowA)}/${f(rowB)} and column A/B earn ${f(colA)}/${f(colB)}. At the selected mixes, expected payoffs are (${f(mixedRow)}, ${f(mixedCol)}).`, formula: 'Pure Nash: uᵢ(sᵢ,s₋ᵢ) ≥ uᵢ(s′ᵢ,s₋ᵢ) for each player i and each unilateral alternative s′ᵢ', headers: ['Row / column', 'Payoff pair', 'Row best?', 'Column best?', 'Pure Nash?'], rows, svg: payoffChart(u, rows, deviator, qr, qc) };
  }
};

const orders = ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA'];
const ballots = {
  id: 'game-social-choice-ballot-rules', title: 'Count the same ballots three ways',
  question: 'Can the same ranked ballots pick different winners under different rules?',
  prediction: 'Plurality, Borda, and pairwise majority use distinct information; pairwise rankings can cycle.',
  explanation: 'Each weighted ballot ranks A, B, C exactly once. Plurality counts first choices, Borda scores 2–1–0, and pairwise comparisons count every voter once per pair.',
  limitations: 'These finite ballots illustrate rule differences. Arrow’s theorem concerns a specific set of ranking axioms; it does not declare voting pointless.',
  controls: [...orders.map((s, i) => R(`votes${s}`, `${s} ballots`, 0, 20, 1, [3, 0, 0, 3, 3, 0][i])), S('rule', 'Announced rule', 'plurality', [['plurality', 'Plurality'], ['borda', 'Borda'], ['pairwise', 'Pairwise majority']])],
  evaluate(state) {
    const counts = orders.map((s, i) => integer(state, `votes${s}`, [3, 0, 0, 3, 3, 0][i], 0, 20));
    const voters = counts.reduce((a, b) => a + b, 0);
    if (!voters) throw new RangeError('Enter at least one ballot.');
    const rule = choice(state, 'rule', 'plurality', ['plurality', 'borda', 'pairwise']);
    const first = [0, 0, 0], borda = [0, 0, 0], pair = Array.from({ length: 3 }, () => [0, 0, 0]);
    orders.forEach((ranking, r) => {
      const w = counts[r]; first[ranking.charCodeAt(0) - 65] += w;
      [...ranking].forEach((s, place) => { const i = s.charCodeAt(0) - 65; borda[i] += (2 - place) * w; for (const other of ranking.slice(place + 1)) pair[i][other.charCodeAt(0) - 65] += w; });
    });
    const wins = [0, 0, 0];
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) if (i !== j && pair[i][j] > pair[j][i]) wins[i]++;
    const condorcet = wins.findIndex(w => w === 2);
    const cycle = pair[0][1] > pair[1][0] && pair[1][2] > pair[2][1] && pair[2][0] > pair[0][2] || pair[1][0] > pair[0][1] && pair[2][1] > pair[1][2] && pair[0][2] > pair[2][0];
    const top = xs => 'ABC'.split('').filter((_, i) => xs[i] === Math.max(...xs)).join(', ');
    const selected = rule === 'plurality' ? top(first) : rule === 'borda' ? top(borda) : condorcet < 0 ? 'no Condorcet winner' : 'ABC'[condorcet];
    const rows = 'ABC'.split('').map((s, i) => [s, String(first[i]), String(borda[i]), String(wins[i]), pair[i].map((x, j) => i === j ? '—' : `${s}>${'ABC'[j]}: ${x}`).filter(x => x !== '—').join('; ')]);
    rows.push(['All ballots', String(voters), String(3 * voters), '', `Each pair totals ${voters}`]);
    return { summary: `${voters} ranked ballots. Plurality leader(s): ${top(first)}; Borda leader(s): ${top(borda)}; ${condorcet < 0 ? 'no Condorcet winner' : `Condorcet winner: ${'ABC'[condorcet]}`}. Strict majority cycle: ${cycle ? 'yes' : 'no'}. Under announced ${rule} rule: ${selected}.`, formula: 'Plurality = first-place votes; Borda = 2×first + 1×second; pairwise A over B = voters ranking A above B', headers: ['Candidate', 'First-place votes', 'Borda points', 'Pairwise wins', 'Pairwise vote counts'], rows, svg: ballotChart(first, borda, pair, voters, cycle, rule) };
  }
};

const beats = {
  id: 'mathematical-modelling-beats-lab', title: 'Two tones and a beat envelope',
  question: 'What slow pattern appears when two pure tones have nearby frequencies?',
  prediction: 'With two nonzero amplitudes and different frequencies, the envelope repeats at the absolute frequency difference.',
  explanation: 'Values are algebraic sums of two ideal sinusoids sampled at displayed times. For equal amplitudes, the product-to-sum identity gives a carrier and beat envelope.',
  limitations: 'This ideal sound-pressure model omits timbre, hearing context, phase differences and the behavior of real instruments. No audio is played.',
  controls: [R('f1', 'First frequency (Hz)', 1, 20, .5, 4), R('f2', 'Second frequency (Hz)', 1, 20, .5, 5), R('a1', 'First amplitude', 0, 2, .1, 1), R('a2', 'Second amplitude', 0, 2, .1, 1), R('duration', 'Displayed time (s)', .5, 4, .5, 2)],
  evaluate(state) {
    const f1 = n(state, 'f1', 4, 1, 20), f2 = n(state, 'f2', 5, 1, 20), a1 = n(state, 'a1', 1, 0, 2), a2 = n(state, 'a2', 1, 0, 2), duration = n(state, 'duration', 2, .5, 4);
    const difference = Math.abs(f1 - f2), equalAmplitude = Math.abs(a1 - a2) < 1e-12, modulation = difference > 0 && a1 > 0 && a2 > 0;
    const rows = Array.from({ length: 17 }, (_, i) => {
      const t = duration * i / 16, y1 = a1 * Math.sin(2 * Math.PI * f1 * t), y2 = a2 * Math.sin(2 * Math.PI * f2 * t);
      const envelope = Math.sqrt(a1 * a1 + a2 * a2 + 2 * a1 * a2 * Math.cos(2 * Math.PI * (f1 - f2) * t));
      return [f(t), f(y1), f(y2), f(y1 + y2), f(envelope)];
    });
    return { summary: `Frequency difference ${f(difference)} Hz; ${modulation ? `envelope repetition period ${f(1 / difference)} s` : `no beat modulation (${difference ? 'one amplitude is zero' : 'equal frequencies'})`}. ${equalAmplitude ? 'Equal-amplitude product identity applies exactly.' : 'Unequal amplitudes use the general envelope magnitude.'} The table samples ${duration} seconds.`, formula: equalAmplitude ? 'A sin(2πf₁t)+A sin(2πf₂t)=2A cos(π(f₁−f₂)t) sin(π(f₁+f₂)t)' : 'Envelope magnitude E(t)=√[A₁²+A₂²+2A₁A₂ cos(2π(f₁−f₂)t)]', headers: ['Time (s)', 'Tone 1', 'Tone 2', 'Sum', 'Envelope magnitude'], rows, svg: beatsChart(f1, f2, a1, a2, duration) };
  }
};

const graphs = {
  chain: { names: 'ABCDE', edges: [[0, 1], [1, 2], [2, 3], [3, 4]] },
  star: { names: 'ABCDE', edges: [[0, 1], [0, 2], [0, 3], [0, 4]] },
  ring: { names: 'ABCDE', edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]] },
  bridge: { names: 'ABCDEF', edges: [[0, 1], [0, 2], [1, 2], [2, 3], [3, 4], [3, 5]] }
};
function reach(graph, open) {
  const levels = [['A']], visited = new Set([0]), frontier = [0];
  while (frontier.length) {
    const next = [];
    graph.edges.forEach(([u, v], i) => { if (!open[i]) return; if (frontier.includes(u) && !visited.has(v)) { visited.add(v); next.push(v); } if (frontier.includes(v) && !visited.has(u)) { visited.add(u); next.push(u); } });
    if (!next.length) break;
    levels.push(next.map(i => graph.names[i])); frontier.splice(0, frontier.length, ...next);
  }
  return { size: visited.size, levels };
}
function exactSpread(graph, p) {
  const dist = Array(graph.names.length + 1).fill(0), e = graph.edges.length;
  for (let mask = 0; mask < 2 ** e; mask++) {
    let opened = 0; const open = graph.edges.map((_, i) => { const yes = Boolean(mask & (1 << i)); if (yes) opened++; return yes; });
    dist[reach(graph, open).size] += p ** opened * (1 - p) ** (e - opened);
  }
  return dist;
}
const model = {
  id: 'mathematical-modelling-model-stress', title: 'Stress-test a toy network model',
  question: 'How does a one-time transmission rule change spread on a tiny network?',
  prediction: 'Increasing the edge-open chance cannot reduce spread when the same random edge draws are reused.',
  explanation: 'Start at A. Each undirected edge independently opens with probability p; all nodes connected to A through open edges are reached. This is a finite bond-percolation model.',
  limitations: 'The rule omits timing, repeated contacts and behavior. It is an illustrative network model, not a forecast or causal estimate. Exact distribution enumerates at most 64 edge patterns.',
  controls: [S('graph', 'Graph edges', 'bridge', [['chain', 'Chain A–B–C–D–E'], ['star', 'Star A to B,C,D,E'], ['ring', 'Five-node ring'], ['bridge', 'ABC triangle with C–D, D–E, D–F']]), R('p', 'Edge-open chance', 0, 1, .05, .4), R('runs', 'Repeated networks', 10, 1000, 10, 300), seedControl],
  evaluate(state) {
    const name = choice(state, 'graph', 'bridge', Object.keys(graphs)), graph = graphs[name];
    const p = n(state, 'p', .4, 0, 1), runs = integer(state, 'runs', 300, 10, 1000), random = rng(seedOf(state));
    const low = Math.max(0, p - .1), high = Math.min(1, p + .1), counts = Array(graph.names.length + 1).fill(0), means = [0, 0, 0]; let first;
    for (let r = 0; r < runs; r++) {
      const edgeDraws = graph.edges.map(() => random());
      const outcomes = [low, p, high].map(q => reach(graph, edgeDraws.map(u => u < q)));
      if (r === 0) first = outcomes[1];
      outcomes.forEach((out, i) => { means[i] += out.size; }); counts[outcomes[1].size]++;
    }
    const dist = exactSpread(graph, p), exactMean = dist.reduce((s, q, i) => s + i * q, 0);
    const reference = [low, p, high].map(q => exactSpread(graph, q).reduce((s, chance, i) => s + i * chance, 0));
    const rows = dist.slice(1).map((chance, i) => [String(i + 1), f(chance), String(counts[i + 1]), f(counts[i + 1] / runs)]);
    rows.push([`Mean at p=${f(low)} / ${f(p)} / ${f(high)}`, reference.map(f).join(' / '), means.map(x => f(x / runs)).join(' / '), '']);
    return { summary: `Edges: ${graph.edges.map(([u, v]) => `${graph.names[u]}–${graph.names[v]}`).join(', ')}. Exact mean spread ${f(exactMean)} of ${graph.names.length} nodes; sampled mean ${f(means[1] / runs)} over ${runs} networks. First run layers: ${first.levels.map((layer, i) => `${i}: ${layer.join(',')}`).join('; ')}. Matched seeded edge draws make the sampled low/central/high means monotone.`, formula: 'P(edge open)=p independently; reached nodes = component of A in open-edge graph; exact E[spread]=ΣₖkP(spread=k)', headers: ['Reached nodes', 'Exact probability / means', 'Sample count / means', 'Sample frequency'], rows, svg: modelChart(name, graph, p, dist, means[1] / runs, runs) };
  }
};

export const experiments = [condition, distribution, coverage, nullTail, walk, mood, mixer, codeTree, payoffs, ballots, beats, model];
