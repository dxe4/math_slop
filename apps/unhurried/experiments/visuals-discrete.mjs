// State-responsive, finite SVG diagrams for the ten non-graph discrete labs.
// Each renderer accepts { input, result }: validated controls and the lab result
// before its svg property is attached. Values placed in SVG text are escaped.

const INK = '#183b2b';
const GREEN = '#2e654b';
const PALE = '#e6eee4';
const BLUE = '#315f91';
const BLUE_PALE = '#e4ecf5';
const ORANGE = '#a34929';
const ORANGE_PALE = '#f5e7df';
const GRID = '#b8c7b8';
const MUTED = '#5b6c62';

const esc = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const integer = (value, min, max, name) => {
  if (!Number.isSafeInteger(value) || value < min || value > max) throw new RangeError(`${name} is outside the visual's range.`);
  return value;
};
const choice = (value, allowed, name) => {
  if (!allowed.includes(value)) throw new RangeError(`${name} is invalid for this visual.`);
  return value;
};
const controls = data => {
  if (!data || typeof data !== 'object' || !data.input || typeof data.input !== 'object') throw new TypeError('A visual requires validated input.');
  return data.input;
};
const tx = (x, y, content, size = 13, anchor = 'start', fill = INK, weight = 'normal') =>
  `<text x="${x}" y="${y}" fill="${fill}" font-family="system-ui,sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}">${esc(content)}</text>`;
const rect = (x, y, width, height, fill, stroke = 'none', rx = 0, sw = 1) =>
  `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const line = (x1, y1, x2, y2, stroke = GRID, sw = 1, dash = '') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${sw}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const svg = (width, height, title, description, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(title)}"><title>${esc(title)}</title><desc>${esc(description)}</desc>${body}</svg>`;
const gcd = (a, b) => { while (b) [a, b] = [b, a % b]; return a; };
const factorial = n => { let value = 1; for (let i = 2; i <= n; i++) value *= i; return value; };

export function renderCounterexample(data) {
  const input = controls(data);
  const n = integer(input.n, 0, 50, 'Search limit');
  const claim = choice(input.claim, ['even', 'square', 'bound', 'prime'], 'Claim');
  const rows = data.result?.rows;
  if (!Array.isArray(rows) || rows.length !== n + 1) throw new TypeError('The truth grid requires the computed rows.');
  const columns = 10, cellW = 54, cellH = 39, left = 44, top = 76;
  const height = top + Math.ceil((n + 1) / columns) * cellH + 66;
  let body = tx(44, 29, `Tested prefix: n = 0…${n}`, 16, 'start', INK, 'bold');
  body += rect(44, 42, 13, 13, PALE, GREEN, 2) + tx(63, 53, 'true', 11);
  body += rect(126, 42, 13, 13, ORANGE_PALE, ORANGE, 2) + tx(145, 53, 'false', 11);
  for (let i = 0; i <= n; i++) {
    const truth = rows[i]?.[2];
    if (truth !== 'True' && truth !== 'False') throw new TypeError('Truth rows must contain True or False.');
    const x = left + (i % columns) * cellW, y = top + Math.floor(i / columns) * cellH;
    body += rect(x, y, 47, 32, truth === 'True' ? PALE : ORANGE_PALE, truth === 'True' ? GREEN : ORANGE, 3, 1.5);
    body += tx(x + 23.5, y + 21, i, 13, 'middle', truth === 'True' ? GREEN : ORANGE, 'bold');
  }
  body += tx(44, height - 22, 'A false cell refutes the claim; green cells cover only this prefix.', 12, 'start', MUTED);
  return svg(620, height, 'Truth grid for a universal claim', `Each numbered cell records the truth of the selected ${claim} claim for n from zero through ${n}. Green means true and rust means false.`, body);
}

export function renderInduction(data) {
  const input = controls(data);
  const n = integer(input.n, 1, 20, 'Inspected n');
  const identity = choice(input.identity, ['sum', 'odd', 'powers'], 'Identity');
  const reveal = choice(input.reveal, ['base', 'step', 'both'], 'Proof obligation');
  const previous = identity === 'sum' ? n * (n + 1) / 2 : identity === 'odd' ? n * n : 2 ** n - 1;
  const nextTerm = identity === 'sum' ? n + 1 : identity === 'odd' ? 2 * n + 1 : 2 ** n;
  const total = previous + nextTerm, width = 510, firstWidth = width * previous / total;
  const symbol = identity === 'sum' ? `n+1 = ${nextTerm}` : identity === 'odd' ? `2n+1 = ${nextTerm}` : `2^n = ${nextTerm}`;
  let body = tx(38, 32, `Build the case n+1 from the case n (${n}→${n + 1})`, 16, 'start', INK, 'bold');
  body += tx(38, 72, `Known sum at n=${n}: ${previous}`, 13, 'start', BLUE);
  body += tx(38, 93, `Next term ${symbol}`, 13, 'start', ORANGE);
  body += rect(38, 116, firstWidth, 34, BLUE, 'none', 0) + rect(38 + firstWidth, 116, width - firstWidth, 34, ORANGE, 'none', 0);
  body += line(38 + firstWidth, 111, 38 + firstWidth, 156, '#ffffff', 2);
  body += tx(38, 179, '0', 11, 'start', MUTED) + tx(548, 179, `${total}`, 11, 'end', MUTED);
  body += tx(38, 208, `${previous} + ${nextTerm} = ${total}`, 15, 'start', INK, 'bold');
  if (reveal !== 'step') body += tx(38, 229, 'Base: n=1 gives equal sides.', 12, 'start', GREEN, 'bold');
  if (reveal !== 'base') body += tx(38, reveal === 'both' ? 250 : 229, 'Step: use the known sum, then add exactly the next term.', 12, 'start', BLUE, 'bold');
  const height = reveal === 'both' ? 273 : 252;
  return svg(590, height, 'Induction step as a partitioned sum', `At n=${n}, the first blue segment has exact length ${previous} units and the added rust segment has exact length ${nextTerm} units, for a total of ${total}. The selected proof obligation is ${reveal}.`, body);
}

export function renderQuantifiers(data) {
  const input = controls(data);
  const people = integer(input.people, 1, 4, 'People');
  const books = integer(input.books, 1, 4, 'Books');
  const order = choice(input.order, ['each', 'common'], 'Quantifier focus');
  const masks = Array.from({ length: people }, (_, i) => integer(input[`person${i}`], 0, 15, `Person ${i + 1} mask`) & ((1 << books) - 1));
  const each = masks.every(mask => mask !== 0);
  const common = Array.from({ length: books }, (_, j) => masks.every(mask => Boolean(mask & (1 << j))));
  const cell = 58, x0 = 90, y0 = 76;
  let body = tx(32, 29, 'Relation R(person, book): filled means “reads”', 16, 'start', INK, 'bold');
  for (let j = 0; j < books; j++) body += tx(x0 + j * cell + 23, 66, `B${j + 1}`, 13, 'middle', common[j] ? GREEN : INK, 'bold');
  for (let i = 0; i < people; i++) {
    const y = y0 + i * cell;
    body += tx(69, y + 29, `P${i + 1}`, 13, 'end', INK, 'bold');
    for (let j = 0; j < books; j++) {
      const read = Boolean(masks[i] & (1 << j)), x = x0 + j * cell;
      body += rect(x, y, 46, 46, read ? PALE : '#f6f5f0', read ? GREEN : GRID, 3, read ? 2 : 1);
      body += tx(x + 23, y + 29, read ? '✓' : '·', 18, 'middle', read ? GREEN : MUTED, 'bold');
    }
  }
  const bottom = y0 + people * cell + 19;
  body += tx(32, bottom, `∀p∃b: ${each ? 'true' : 'false'} — every row needs a filled cell`, 13, 'start', order === 'each' ? GREEN : INK, order === 'each' ? 'bold' : 'normal');
  body += tx(32, bottom + 25, `∃b∀p: ${common.some(Boolean) ? 'true' : 'false'} — one whole column must be filled`, 13, 'start', order === 'common' ? GREEN : INK, order === 'common' ? 'bold' : 'normal');
  return svg(590, bottom + 50, 'Person and book relation matrix', `${people} people are rows and ${books} books are columns. A green book heading marks a column read by everyone. The first quantifier order is ${each}; the second is ${common.some(Boolean)}.`, body);
}

export function renderDiagonal(data) {
  const input = controls(data);
  const n = integer(input.size, 2, 6, 'Visible size');
  const reveal = choice(input.reveal, ['yes', 'no'], 'Diagonal reveal');
  const masks = Array.from({ length: n }, (_, i) => integer(input[`row${i}`], 0, 63, `Row ${i + 1} mask`));
  const bit = (i, j) => (masks[i] >> j) & 1;
  const diagonal = Array.from({ length: n }, (_, i) => 1 - bit(i, i));
  const cell = 54, x0 = 124, y0 = 75;
  const resultY = y0 + n * cell + 18;
  let body = tx(35, 29, reveal === 'yes' ? 'Flip each row’s numbered diagonal bit' : 'Predict the new row from the highlighted diagonal', 16, 'start', INK, 'bold');
  for (let j = 0; j < n; j++) body += tx(x0 + j * cell + 23, 64, `bit ${j + 1}`, 11, 'middle', MUTED);
  if (reveal === 'yes') for (let j = 0; j < n; j++) {
    const x = x0 + j * cell;
    body += line(x + 22.5, y0 + j * cell + 45, x + 22.5, resultY, GREEN, 1, '3 4');
  }
  for (let i = 0; i < n; i++) {
    body += tx(104, y0 + i * cell + 30, `row ${i + 1}`, 13, 'end', INK);
    for (let j = 0; j < n; j++) {
      const x = x0 + j * cell, y = y0 + i * cell, isDiagonal = i === j;
      body += rect(x, y, 45, 45, isDiagonal ? ORANGE_PALE : '#f6f7f2', isDiagonal ? ORANGE : GRID, 3, isDiagonal ? 2 : 1);
      body += tx(x + 22.5, y + 29, bit(i, j), 18, 'middle', isDiagonal ? ORANGE : INK, 'bold');
    }
  }
  body += tx(104, resultY + 30, 'new', 13, 'end', GREEN, 'bold');
  for (let j = 0; j < n; j++) {
    const x = x0 + j * cell;
    body += rect(x, resultY, 45, 45, reveal === 'yes' ? PALE : '#f6f7f2', GREEN, 3, 2);
    body += tx(x + 22.5, resultY + 29, reveal === 'yes' ? diagonal[j] : '?', 18, 'middle', GREEN, 'bold');
  }
  body += tx(35, resultY + 76, reveal === 'yes' ? 'New row differs from row i at bit i (within this finite grid).' : 'Reveal the rule to show each flipped bit.', 12, 'start', MUTED);
  return svg(590, resultY + 98, 'Finite diagonal construction', reveal === 'yes' ? `The ${n}-bit constructed sequence is ${diagonal.join('')}; it differs from each displayed row at that row's numbered diagonal position.` : `The ${n} highlighted bits define a new row; its values are hidden until the diagonal rule is revealed.`, body);
}

export function renderEuclid(data) {
  const input = controls(data);
  const a = integer(input.a, 0, 144, 'First integer'), b = integer(input.b, 0, 144, 'Second integer');
  const shown = integer(input.step, 0, 12, 'Shown divisions');
  const bezout = choice(input.bezout, ['yes', 'no'], 'Bézout reveal');
  if (a === 0 && b === 0) throw new RangeError('Euclid needs a nonzero input.');
  let left = a, right = b;
  const divisions = [];
  while (right !== 0) {
    const q = Math.floor(left / right), remainder = left - q * right;
    divisions.push({ left, right, q, remainder });
    [left, right] = [right, remainder];
  }
  const visible = divisions.slice(0, shown), scale = 420 / Math.max(a, b, 1);
  const height = (visible.length ? 151 + visible.length * 49 : 182) + (bezout === 'yes' ? 24 : 0);
  let body = tx(33, 28, `Euclid’s division ledger: gcd(${a}, ${b}) = ${gcd(a, b)}`, 16, 'start', INK, 'bold');
  body += tx(33, 53, 'All bars use the same length per unit.', 12, 'start', MUTED);
  body += rect(34, 72, a * scale, 13, BLUE) + tx(468, 84, `a = ${a}`, 12, 'start', BLUE);
  body += rect(34, 93, b * scale, 13, ORANGE) + tx(468, 105, `b = ${b}`, 12, 'start', ORANGE);
  if (!visible.length) body += tx(34, 137, divisions.length ? 'No division step displayed.' : 'Second input is zero; the first input is the gcd.', 12, 'start', MUTED);
  visible.forEach((entry, i) => {
    const y = 130 + i * 49;
    body += tx(34, y, `${entry.left} = ${entry.q}×${entry.right} + ${entry.remainder}`, 12, 'start', INK);
    body += rect(34, y + 8, (entry.q * entry.right) * scale, 16, BLUE);
    body += rect(34 + (entry.q * entry.right) * scale, y + 8, entry.remainder * scale, 16, ORANGE);
    body += line(34 + entry.left * scale, y + 6, 34 + entry.left * scale, y + 27, INK, 1);
    body += tx(468, y + 22, `r = ${entry.remainder}`, 11, 'start', ORANGE);
  });
  if (bezout === 'yes') {
    let oldR = a, r = b, oldS = 1, s = 0, oldT = 0, t = 1;
    while (r !== 0) {
      const q = Math.floor(oldR / r);
      [oldR, r] = [r, oldR - q * r];
      [oldS, s] = [s, oldS - q * s];
      [oldT, t] = [t, oldT - q * t];
    }
    body += tx(34, height - 37, `Bézout: ${oldS}×${a} + ${oldT}×${b} = ${oldR}`, 12, 'start', GREEN, 'bold');
  }
  body += tx(34, height - 17, `${visible.length} of ${divisions.length} division steps displayed; blue is q×divisor, rust is remainder.`, 11, 'start', MUTED);
  return svg(620, height, 'Euclidean division lengths', `Inputs are ${a} and ${b}. Every bar uses ${scale.toFixed(4)} pixels per unit. ${visible.length} of ${divisions.length} exact division steps are shown; the gcd is ${gcd(a, b)}.${bezout === 'yes' ? ' A Bézout certificate is displayed.' : ''}`, body);
}

export function renderAutomaton(data) {
  const input = controls(data);
  const states = integer(input.states, 2, 3, 'State count');
  const accept = integer(input.accept, 0, 7, 'Accepting mask');
  if (accept >= 2 ** states) throw new RangeError('Accepting mask includes an absent state.');
  const transitions = Array.from({ length: states }, (_, i) => [0, 1].map(symbol => {
    const value = choice(input[`t${i}${symbol}`], ['0', '1', '2'], 'Transition');
    const next = Number(value);
    if (next >= states) throw new RangeError('Transition points outside this machine.');
    return next;
  }));
  const word = input.word === 'ε' ? '' : input.word;
  if (typeof word !== 'string' || !/^[01]{0,5}$/.test(word)) throw new RangeError('Word is outside this machine.');
  const rowTop = 92, rowH = 59, traceY = rowTop + states * rowH + 52;
  let body = tx(31, 28, 'Complete DFA transition lanes', 16, 'start', INK, 'bold');
  body += tx(264, 65, 'input 0', 12, 'middle', BLUE, 'bold');
  body += tx(452, 65, 'input 1', 12, 'middle', GREEN, 'bold');
  for (let state = 0; state < states; state++) {
    const y = rowTop + state * rowH, accepting = Boolean(accept & (1 << state));
    body += `<circle cx="73" cy="${y}" r="19" fill="${accepting ? PALE : '#ffffff'}" stroke="${accepting ? GREEN : INK}" stroke-width="2"/>`;
    if (accepting) body += `<circle cx="73" cy="${y}" r="15" fill="none" stroke="${GREEN}" stroke-width="1"/>`;
    body += tx(73, y + 5, `q${state}`, 13, 'middle', INK, 'bold');
    body += line(93, y, 190, y, BLUE, 1.5);
    body += rect(190, y - 19, 148, 38, BLUE_PALE, BLUE, 4);
    body += tx(264, y + 5, `0 → q${transitions[state][0]}`, 13, 'middle', BLUE, 'bold');
    body += line(340, y, 378, y, GREEN, 1.5);
    body += rect(378, y - 19, 148, 38, PALE, GREEN, 4);
    body += tx(452, y + 5, `1 → q${transitions[state][1]}`, 13, 'middle', GREEN, 'bold');
  }
  body += tx(31, traceY - 37, `Trace ${word || 'ε'} from q0`, 13, 'start', INK, 'bold');
  let current = 0;
  const trace = [current];
  for (const symbol of word) { current = transitions[current][Number(symbol)]; trace.push(current); }
  const nodeW = word.length ? 490 / word.length : 0;
  trace.forEach((state, i) => {
    const x = 62 + i * nodeW, final = i === trace.length - 1, accepting = Boolean(accept & (1 << state));
    body += `<circle cx="${x}" cy="${traceY}" r="18" fill="${final ? accepting ? PALE : ORANGE_PALE : '#ffffff'}" stroke="${final ? accepting ? GREEN : ORANGE : GRID}" stroke-width="2"/>`;
    body += tx(x, traceY + 5, `q${state}`, 12, 'middle', INK, 'bold');
    if (i < word.length) {
      const nextX = 62 + (i + 1) * nodeW;
      body += line(x + 20, traceY, nextX - 20, traceY, INK, 1.5);
      body += tx((x + nextX) / 2, traceY - 10, word[i], 12, 'middle', INK, 'bold');
    }
  });
  body += tx(31, traceY + 45, `Final q${current}: ${accept & (1 << current) ? 'accepted' : 'rejected'}. Double rings mark accepting states.`, 12, 'start', accept & (1 << current) ? GREEN : ORANGE);
  return svg(610, traceY + 69, 'Deterministic automaton transitions and trace', `The machine has ${states} states. Double rings mark accepting states. The word ${word || 'empty word'} follows states ${trace.map(state => `q${state}`).join(' to ')} and is ${accept & (1 << current) ? 'accepted' : 'rejected'}.`, body);
}

export function renderGrowth(data) {
  const input = controls(data);
  const names = { log: '⌊log₂ n⌋+1', linear: 'n', square: 'n²', cube: 'n³', exponential: '2ⁿ' };
  const f = choice(input.f, Object.keys(names), 'Function f');
  const g = choice(input.g, Object.keys(names), 'Function g');
  const start = integer(input.start, 1, 40, 'Start');
  const span = integer(input.span, 1, 20, 'Span');
  const C = integer(input.C, 1, 20, 'Constant');
  const n0 = integer(input.n0, 1, 40, 'Threshold');
  const end = Math.min(40, start + span - 1);
  const rows = data.result?.rows;
  if (!Array.isArray(rows) || rows.length !== end - start + 1) throw new TypeError('The growth plot requires computed rows.');
  const points = rows.map((row, i) => {
    if (!Array.isArray(row) || Number(row[0]) !== start + i) throw new TypeError('Growth rows must follow the displayed integer range.');
    const left = Number(row[1]), right = Number(row[2]);
    if (!Number.isSafeInteger(left) || !Number.isSafeInteger(right) || left < 0 || right < 0) throw new RangeError('Growth values must be finite nonnegative integers.');
    return { n: start + i, left, right };
  });
  const max = Math.max(1, ...points.map(point => Math.max(point.left, point.right)));
  const xLeft = 87, xRight = 565, yTop = 74, yBottom = 293;
  const x = index => points.length === 1 ? (xLeft + xRight) / 2 : xLeft + (xRight - xLeft) * index / (points.length - 1);
  const y = value => yBottom - (yBottom - yTop) * value / max;
  const path = key => points.map((point, i) => `${i ? 'L' : 'M'} ${x(i).toFixed(2)} ${y(point[key]).toFixed(2)}`).join(' ');
  const tick = value => value >= 1e6 ? value.toExponential(2) : String(Number(value.toFixed(2)));
  let body = tx(31, 27, `${names[f]} versus ${C}×(${names[g]})`, 16, 'start', INK, 'bold');
  body += line(31, 48, 62, 48, BLUE, 3) + tx(69, 52, 'f(n)', 11, 'start', BLUE);
  body += line(133, 48, 164, 48, GREEN, 3, '5 3') + tx(171, 52, 'C·g(n)', 11, 'start', GREEN);
  body += `<circle cx="258" cy="48" r="4" fill="${ORANGE}"/>` + tx(270, 52, 'failure at or above n₀', 11, 'start', ORANGE);
  for (const value of [0, max / 2, max]) {
    const yy = Number(y(value).toFixed(2));
    body += line(xLeft, yy, xRight, yy, GRID, 1, value ? '3 4' : '');
    body += tx(78, yy + 4, tick(value), 10, 'end', MUTED);
  }
  body += line(xLeft, yTop, xLeft, yBottom, INK, 1.2);
  if (n0 >= start && n0 <= end) {
    const thresholdX = x(n0 - start);
    body += line(Number(thresholdX.toFixed(2)), yTop, Number(thresholdX.toFixed(2)), yBottom, ORANGE, 1.5, '5 4');
    body += tx(thresholdX, 67, `n₀=${n0}`, 11, 'middle', ORANGE, 'bold');
  }
  if (points.length > 1) {
    body += `<path d="${path('left')}" fill="none" stroke="${BLUE}" stroke-width="2.5"/>`;
    body += `<path d="${path('right')}" fill="none" stroke="${GREEN}" stroke-width="2.5" stroke-dasharray="5 3"/>`;
  }
  points.forEach((point, i) => {
    body += `<circle cx="${x(i).toFixed(2)}" cy="${y(point.left).toFixed(2)}" r="3" fill="${BLUE}"/>`;
    body += `<circle cx="${x(i).toFixed(2)}" cy="${y(point.right).toFixed(2)}" r="3" fill="${GREEN}"/>`;
    if (point.n >= n0 && point.left > point.right) body += `<circle cx="${x(i).toFixed(2)}" cy="${y(point.left).toFixed(2)}" r="6" fill="none" stroke="${ORANGE}" stroke-width="2"/>`;
  });
  if (points.length === 1) body += tx((xLeft + xRight) / 2, 315, start, 11, 'middle', MUTED);
  else {
    body += tx(xLeft, 315, start, 11, 'middle', MUTED);
    body += tx(xRight, 315, end, 11, 'middle', MUTED);
  }
  body += tx((xLeft + xRight) / 2, 336, 'integer n', 12, 'middle', INK);
  if (n0 < start || n0 > end) body += tx(31, 357, `Threshold n₀=${n0} lies ${n0 < start ? 'before' : 'after'} the displayed range.`, 11, 'start', ORANGE);
  const failures = points.filter(point => point.n >= n0 && point.left > point.right).length;
  return svg(625, 377, 'Finite growth comparison plot', `A linear vertical scale from zero to ${max} shows ${names[f]} in blue and ${C} times ${names[g]} in dashed green for integer n from ${start} through ${end}. The threshold is n zero equals ${n0}. There are ${failures} displayed failures at or above the threshold. A finite plot cannot prove an asymptotic bound.`, body);
}

export function renderResidues(data) {
  const input = controls(data);
  const m = integer(input.m, 2, 18, 'Modulus');
  const a = integer(input.a, 0, 18, 'Multiplier');
  const step = integer(input.step, 0, 18, 'Orbit steps');
  const orbit = [1 % m];
  for (let i = 0; i < step; i++) orbit.push(a * orbit.at(-1) % m);
  const cx = 208, cy = 208, radius = 133;
  const point = residue => {
    const angle = 2 * Math.PI * residue / m - Math.PI / 2;
    return [Number((cx + radius * Math.cos(angle)).toFixed(2)), Number((cy + radius * Math.sin(angle)).toFixed(2))];
  };
  let body = tx(33, 28, `Multiply by ${a} modulo ${m}`, 16, 'start', INK, 'bold');
  body += `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="${GRID}" stroke-width="2"/>`;
  for (let i = 1; i < orbit.length; i++) {
    const [x1, y1] = point(orbit[i - 1]), [x2, y2] = point(orbit[i]);
    if (orbit[i] === orbit[i - 1]) {
      body += `<circle cx="${x2 + 13}" cy="${y2 - 13}" r="8" fill="none" stroke="${ORANGE}" stroke-width="1.5"/>`;
    } else {
      const dx = x2 - x1, dy = y2 - y1, length = Math.hypot(dx, dy);
      const ux = dx / length, uy = dy / length;
      body += line(Number((x1 + ux * 16).toFixed(2)), Number((y1 + uy * 16).toFixed(2)), Number((x2 - ux * 16).toFixed(2)), Number((y2 - uy * 16).toFixed(2)), ORANGE, 1.5);
    }
  }
  for (let residue = 0; residue < m; residue++) {
    const [x, y] = point(residue), active = orbit.includes(residue);
    body += `<circle cx="${x}" cy="${y}" r="15" fill="${active ? ORANGE_PALE : PALE}" stroke="${active ? ORANGE : GREEN}" stroke-width="${active ? 2 : 1}"/>`;
    body += tx(x, y + 4, residue, 11, 'middle', active ? ORANGE : INK, 'bold');
  }
  body += tx(394, 82, `gcd(${a},${m}) = ${gcd(a, m)}`, 13, 'start', INK, 'bold');
  body += tx(394, 105, gcd(a, m) === 1 ? 'All residues have unique images.' : 'Images collide.', 11, 'start', gcd(a, m) === 1 ? GREEN : ORANGE);
  body += tx(394, 145, `${step} multiplication step${step === 1 ? '' : 's'}`, 12, 'start', MUTED);
  const chipW = 37, chipX = 392, chipY = 165;
  orbit.forEach((residue, i) => {
    const x = chipX + (i % 5) * chipW, y = chipY + Math.floor(i / 5) * 48;
    body += rect(x, y, 31, 25, i === orbit.length - 1 ? ORANGE_PALE : PALE, i === orbit.length - 1 ? ORANGE : GREEN, 3);
    body += tx(x + 15.5, y + 17, residue, 12, 'middle', INK, 'bold');
    body += tx(x + 15.5, y + 39, i, 10, 'middle', MUTED);
  });
  body += tx(394, 389, 'Top number: residue; lower number: step.', 10, 'start', MUTED);
  return svg(620, 410, 'Residue multiplication orbit', `Residues zero through ${m - 1} are equally spaced on a modular clock. The displayed orbit after ${step} steps is ${orbit.join(' to ')}. The line segments show successive different residues, and a small loop marks a repeated residue.`, body);
}

export function renderChoices(data) {
  const input = controls(data);
  const n = integer(input.n, 2, 6, 'Available labels');
  const k = integer(input.k, 1, 3, 'Picks');
  const order = choice(input.order, ['yes', 'no'], 'Order mode');
  const list = choice(input.list, ['yes', 'no'], 'Outcome list mode');
  if (k > n) throw new RangeError('Picks exceed available labels.');
  const counts = [1];
  for (let level = 1; level <= k; level++) counts.push(counts.at(-1) * (n - level + 1));
  let body = tx(35, 29, 'Compressed choice tree: one level per pick', 16, 'start', INK, 'bold');
  const centers = Array.from({ length: k + 1 }, (_, i) => 72 + i * (500 / k));
  for (let level = 0; level <= k; level++) {
    const x = centers[level], y = 103;
    body += rect(x - 43, y - 29, 86, 58, level === k ? PALE : BLUE_PALE, level === k ? GREEN : BLUE, 5, 1.5);
    body += tx(x, y - 3, counts[level], 18, 'middle', level === k ? GREEN : BLUE, 'bold');
    body += tx(x, y + 17, level === 0 ? 'start' : `${level} pick${level === 1 ? '' : 's'}`, 10, 'middle', MUTED);
    if (level < k) {
      const mid = (x + centers[level + 1]) / 2;
      body += line(x + 44, y, centers[level + 1] - 45, y, GREEN, 2);
      body += tx(mid, 60, `×${n - level}`, 13, 'middle', GREEN, 'bold');
      body += tx(mid, 148, `${n - level} choices`, 10, 'middle', MUTED);
    }
  }
  const ordered = counts[k], unordered = ordered / factorial(k), selected = order === 'yes' ? ordered : unordered;
  body += rect(35, 177, 540, 64, order === 'yes' ? BLUE_PALE : PALE, order === 'yes' ? BLUE : GREEN, 4);
  body += tx(49, 203, order === 'yes' ? `${ordered} ordered paths` : `${ordered} paths ÷ ${factorial(k)} orders per group = ${unordered} groups`, 14, 'start', order === 'yes' ? BLUE : GREEN, 'bold');
  body += tx(49, 225, list === 'yes' ? `All ${selected} selected outcomes are listed in the table.` : `${Math.min(12, selected)} of ${selected} selected outcomes are listed in the table.`, 11, 'start', MUTED);
  return svg(630, 261, 'Compressed tree of distinct choices', `At successive levels, the exact branching factors are ${Array.from({ length: k }, (_, i) => n - i).join(', ')}. There are ${ordered} ordered paths. Order ${order === 'yes' ? 'matters' : 'does not matter'}, selecting ${selected} outcomes. ${list === 'yes' ? 'The complete list is shown.' : 'The table shows a preview.'}`, body);
}

export function renderInclusion(data) {
  const input = controls(data);
  const sets = choice(input.sets, ['2', '3'], 'Set count');
  const count = Number(sets), allowed = (1 << count) - 1;
  const masks = Array.from({ length: 12 }, (_, i) => Number(choice(input[`element${i}`], ['0', '1', '2', '3', '4', '5', '6', '7'], `Element ${i + 1}`)) & allowed);
  const regions = Array.from({ length: 1 << count }, (_, mask) => masks.filter(value => value === mask).length);
  const regionName = mask => mask === 0 ? 'outside' : Array.from({ length: count }, (_, i) => mask & (1 << i) ? 'ABC'[i] : null).filter(Boolean).join('∩') + (mask === allowed ? '' : ' only');
  const union = 12 - regions[0], barX = 180, barW = 340, top = 75, rowH = 34;
  let body = tx(30, 29, `Exact membership regions for 12 elements`, 16, 'start', INK, 'bold');
  body += tx(barX, 53, 'Bar length = count ÷ 12', 11, 'start', MUTED);
  for (let mask = 0; mask < regions.length; mask++) {
    const y = top + mask * rowH, value = regions[mask];
    body += tx(164, y + 17, regionName(mask), 12, 'end', INK);
    body += rect(barX, y, barW, 22, '#f3f5f0', GRID, 2);
    if (value) body += rect(barX, y, barW * value / 12, 22, mask === 0 ? '#a9b5ab' : GREEN, 'none', 2);
    body += tx(534, y + 17, value, 12, 'start', INK, 'bold');
  }
  const bottom = top + regions.length * rowH + 14;
  body += tx(30, bottom, `Union: ${union} elements in any set; ${regions[0]} outside.`, 13, 'start', GREEN, 'bold');
  body += tx(30, bottom + 22, 'Every element appears in exactly one bar.', 11, 'start', MUTED);
  return svg(610, bottom + 42, 'Exact membership region counts', `The chart has ${regions.length} disjoint membership regions for ${count} sets and twelve elements. Every bar uses the same linear scale, from zero to twelve elements. The union has ${union} elements.`, body);
}
