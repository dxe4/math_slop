import { derivative, integral, limit, complexMultiply, determinant, modular, combinations, bayes } from './models.mjs';
import { mountLabFrame } from './lab-frame-adapter.mjs';

const C = { teal: '#236b5a', orange: '#bd603b', violet: '#655589', ink: '#444', grid: '#d7d6d1' };
const esc = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const num = value => Number(value.toFixed(5)).toString();
const svg = (body, title, description, id) => `<svg class="lab-svg" viewBox="0 0 640 320" width="640" height="320" style="max-width:100%;height:auto" role="img" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">${esc(title)}</title><desc id="${id}-desc">${esc(description)}</desc>${body}</svg>`;

function chart(xMin, xMax, yMin, yMax, xTicks, yTicks, xLabel, yLabel) {
  const x = value => 64 + (value - xMin) * 536 / (xMax - xMin);
  const y = value => 264 - (value - yMin) * 224 / (yMax - yMin);
  let marks = '';
  for (const value of xTicks) {
    const px = x(value);
    marks += `<line x1="${px}" y1="40" x2="${px}" y2="264" stroke="${C.grid}"/><text x="${px}" y="283" text-anchor="middle" fill="${C.ink}" font-size="13">${esc(num(value))}</text>`;
  }
  for (const value of yTicks) {
    const py = y(value);
    marks += `<line x1="64" y1="${py}" x2="600" y2="${py}" stroke="${C.grid}"/><text x="53" y="${py + 4}" text-anchor="end" fill="${C.ink}" font-size="13">${esc(num(value))}</text>`;
  }
  marks += `<path d="M64 40 V264 H600" fill="none" stroke="${C.ink}" stroke-width="1.5"/><text x="600" y="306" text-anchor="end" fill="${C.ink}" font-size="14">${esc(xLabel)}</text><text x="15" y="29" fill="${C.ink}" font-size="14">${esc(yLabel)}</text>`;
  return { x, y, marks };
}

function plane(radius, xLabel = 'x', yLabel = 'y') {
  // Equal pixels per unit keep right angles, lengths, and squares honest.
  const pixelsPerUnit = 128 / radius;
  const x = value => 320 + value * pixelsPerUnit;
  const y = value => 160 - value * pixelsPerUnit;
  const tick = radius <= 7 ? 1 : radius <= 12 ? 2 : 5;
  let marks = '';
  for (let value = -Math.floor((radius - 1) / tick) * tick; value < radius; value += tick) {
    if (value === 0) continue;
    marks += `<line x1="${x(value)}" y1="32" x2="${x(value)}" y2="288" stroke="${C.grid}"/><line x1="192" y1="${y(value)}" x2="448" y2="${y(value)}" stroke="${C.grid}"/><text x="${x(value)}" y="177" text-anchor="middle" fill="${C.ink}" font-size="11">${value}</text><text x="311" y="${y(value) + 4}" text-anchor="end" fill="${C.ink}" font-size="11">${value}</text>`;
  }
  marks += `<line x1="192" y1="160" x2="448" y2="160" stroke="${C.ink}"/><line x1="320" y1="288" x2="320" y2="32" stroke="${C.ink}"/><text x="455" y="177" fill="${C.ink}" font-size="14">${esc(xLabel)}</text><text x="329" y="25" fill="${C.ink}" font-size="14">${esc(yLabel)}</text><text x="325" y="178" fill="${C.ink}" font-size="12">0</text>`;
  return { x, y, marks };
}

function pathFor(fn, x0, x1, samples, x, y) {
  return Array.from({ length: samples + 1 }, (_, i) => `${i ? 'L' : 'M'}${x(x0 + (x1 - x0) * i / samples).toFixed(2)} ${y(fn(x0 + (x1 - x0) * i / samples)).toFixed(2)}`).join(' ');
}

function arrow(id, x1, y1, x2, y2, color, dash = '') {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="3" ${dash ? `stroke-dasharray="${dash}"` : ''} marker-end="url(#${id}-arrow-${color.slice(1)})"/>`;
}

function arrowDefs(id) {
  return `<defs>${[C.teal, C.orange, C.violet].map(color => `<marker id="${id}-arrow-${color.slice(1)}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth"><path d="M0 0 L8 4 L0 8 Z" fill="${color}"/></marker>`).join('')}</defs>`;
}

const labs = {
  derivative: {
    title: 'Secant approaching a tangent',
    question: 'How does the secant slope compare with the instantaneous slope of x² at a?',
    prediction: 'Before moving h, predict which number the dashed secant slope approaches as h gets smaller.',
    note: 'The secant uses two distinct points because h stays positive. Its slope differs from the tangent slope by exactly h; the picture alone does not prove the limit.',
    controls: [{ key: 'a', label: 'Starting x, a', min: -2, max: 2, step: 0.1, value: 1 }, { key: 'h', label: 'Positive step, h', min: 0.01, max: 1, step: 0.01, value: 0.5 }],
    render(s, id) {
      const m = derivative(s.a, s.h);
      const p = chart(-2.5, 3.5, -0.5, 9.5, [-2, -1, 0, 1, 2, 3], [0, 2, 4, 6, 8], 'x', 'y = x²');
      const curve = `<path d="${pathFor(x => x * x, -2.5, 3.1, 100, p.x, p.y)}" fill="none" stroke="${C.ink}" stroke-width="2.5"/>`;
      const secant = `<line x1="${p.x(m.a - 0.7)}" y1="${p.y(m.y1 - 0.7 * m.secant)}" x2="${p.x(m.x2 + 0.7)}" y2="${p.y(m.y2 + 0.7 * m.secant)}" stroke="${C.teal}" stroke-width="2.5" stroke-dasharray="8 4"/>`;
      const tangent = `<line x1="${p.x(m.a - 0.7)}" y1="${p.y(m.y1 - 0.7 * m.tangent)}" x2="${p.x(m.a + 0.7)}" y2="${p.y(m.y1 + 0.7 * m.tangent)}" stroke="${C.violet}" stroke-width="2.5"/>`;
      const dots = `<circle cx="${p.x(m.a)}" cy="${p.y(m.y1)}" r="5" fill="${C.orange}"/><circle cx="${p.x(m.x2)}" cy="${p.y(m.y2)}" r="5" fill="${C.orange}"/><text x="${p.x(m.a) + 8}" y="${p.y(m.y1) - 9}" fill="${C.ink}" font-size="13">a</text><text x="${p.x(m.x2) + 8}" y="${p.y(m.y2) - 9}" fill="${C.ink}" font-size="13">a+h</text>`;
      const legend = `<text x="80" y="24" fill="${C.teal}" font-size="14">- - secant</text><text x="220" y="24" fill="${C.violet}" font-size="14">— tangent</text>`;
      const readout = `At a = ${num(m.a)}, h = ${num(m.h)}: ((a+h)²−a²)/h = 2a+h = ${num(m.secant)}. Tangent slope 2a = ${num(m.tangent)}; difference = ${num(m.error)}.`;
      return { figure: svg(p.marks + curve + secant + tangent + dots + legend, 'Parabola with secant and tangent', readout, id), readout };
    }
  },
  integral: {
    title: 'Rectangles under x²',
    question: 'How do left and right rectangle sums trap the area under x² from 0 to 1?',
    prediction: 'Predict which endpoint rule lies above the true area, then switch rules to check.',
    note: 'Because x² increases on [0,1], left rectangles underestimate and right rectangles overestimate. Their gap is exactly 1/n; the area is exactly 1/3. Displayed decimals are rounded to at most five decimal places.',
    controls: [{ key: 'n', label: 'Number of rectangles, n', min: 1, max: 100, step: 1, value: 8 }],
    extra: '<label class="lab-control">Rectangle rule <select data-choice="method"><option value="left">Left endpoints</option><option value="right">Right endpoints</option></select></label>',
    render(s, id) {
      const m = integral(s.n);
      const p = chart(-0.06, 1.07, -0.08, 1.15, [0, 0.25, 0.5, 0.75, 1], [0, 0.25, 0.5, 0.75, 1], 'x', 'y = x²');
      let rects = '';
      for (let i = 0; i < s.n; i += 1) {
        const sample = (i + (s.method === 'right' ? 1 : 0)) / s.n;
        const height = sample * sample;
        rects += `<rect x="${p.x(i / s.n)}" y="${p.y(height)}" width="${p.x((i + 1) / s.n) - p.x(i / s.n)}" height="${p.y(0) - p.y(height)}" fill="${C.teal}" fill-opacity="0.28" stroke="${C.teal}" stroke-width="1"/>`;
      }
      const curve = `<path d="${pathFor(x => x * x, 0, 1, 100, p.x, p.y)}" fill="none" stroke="${C.orange}" stroke-width="3"/><text x="375" y="26" fill="${C.teal}" font-size="14">outlined rectangles: ${s.method}</text><text x="80" y="26" fill="${C.orange}" font-size="14">curve: x²</text>`;
      const readout = `n = ${m.n}, width = 1/${m.n}. Exact bound: left sum ≤ area 1/3 ≤ right sum. Left sum ≈ ${num(m.left)}; right sum ≈ ${num(m.right)}; exact gap = 1/n ≈ ${num(m.gap)}. Showing ${s.method} rectangles.`;
      return { figure: svg(p.marks + rects + curve, 'Rectangle approximation to area under x squared', readout, id), readout };
    }
  },
  limit: {
    title: 'Choose a tail of 1/n',
    question: 'How far along the sequence must we go before every later term is below ε?',
    prediction: 'Predict whether a smaller ε will require a larger or smaller N.',
    note: 'For every positive ε, N = floor(1/ε)+1 makes 1/n < ε for all integers n ≥ N. The strict inequality matters when 1/ε is an integer. Displayed decimals are rounded to at most five decimal places.',
    controls: [{ key: 'epsilon', label: 'Tolerance, ε', min: 0.01, max: 1, step: 0.01, value: 0.2 }, { key: 'offset', label: 'Steps beyond N', min: 0, max: 30, step: 1, value: 3 }],
    render(s, id) {
      const m = limit(s.epsilon, s.offset);
      const lo = Math.max(1, m.N - 2), hi = Math.max(m.N + 8, m.n + 2);
      const yMax = Math.max(1 / lo, m.epsilon) * 1.14;
      const ticks = [...new Set([lo, m.N, m.n, hi])].sort((a, b) => a - b);
      const p = chart(lo - 0.4, hi + 0.4, 0, yMax, ticks, [0, m.epsilon], 'integer n', '1/n');
      let points = '';
      for (let i = lo; i <= hi; i += 1) points += `<circle cx="${p.x(i)}" cy="${p.y(1 / i)}" r="${i === m.n ? 6 : 3}" fill="${i === m.n ? C.orange : C.teal}"/>`;
      const guides = `<line x1="64" y1="${p.y(m.epsilon)}" x2="600" y2="${p.y(m.epsilon)}" stroke="${C.violet}" stroke-width="2" stroke-dasharray="7 5"/><line x1="${p.x(m.N)}" y1="40" x2="${p.x(m.N)}" y2="264" stroke="${C.ink}" stroke-dasharray="3 5"/><text x="${p.x(m.N) + 5}" y="57" fill="${C.ink}" font-size="14">N</text><text x="440" y="25" fill="${C.violet}" font-size="14">- - ε threshold</text>`;
      const readout = `ε = ${num(m.epsilon)}. Choose N = floor(1/ε)+1 = ${m.N}. Selected n = ${m.n} ≥ N gives 1/${m.n} < ε (decimal ≈ ${num(m.value)}); every later integer has an even smaller term.`;
      return { figure: svg(p.marks + guides + points, 'Sequence one over n below an epsilon threshold', readout, id), readout };
    }
  },
  complex: {
    title: 'Multiply two complex numbers',
    question: 'Where does (a+bi)(c+di) land in the complex plane?',
    prediction: 'Predict the product coordinates before changing one part of the multiplier.',
    note: 'The product coordinates are (ac−bd, ad+bc). A zero multiplier sends every input to zero, so it has no direction or rotation angle.',
    controls: ['a', 'b', 'c', 'd'].map((key, i) => ({ key, label: ['First real part, a', 'First imaginary part, b', 'Multiplier real part, c', 'Multiplier imaginary part, d'][i], min: -3, max: 3, step: 1, value: [1, 1, 1, 1][i] })),
    render(s, id) {
      const m = complexMultiply(s.a, s.b, s.c, s.d);
      const r = Math.max(5, Math.abs(m.real), Math.abs(m.imaginary)) + 2;
      const p = plane(r, 'real', 'imaginary');
      const vectors = arrowDefs(id) + arrow(id, p.x(0), p.y(0), p.x(m.a), p.y(m.b), C.teal) + arrow(id, p.x(0), p.y(0), p.x(m.real), p.y(m.imaginary), C.orange, '9 3');
      const labels = `<text x="${p.x(m.a) + 7}" y="${p.y(m.b) - 8}" fill="${C.teal}" font-size="14">first</text><text x="${p.x(m.real) + 7}" y="${p.y(m.imaginary) - 8}" fill="${C.orange}" font-size="14">product</text><text x="90" y="306" fill="${C.teal}" font-size="14">— first a+bi</text><text x="266" y="306" fill="${C.orange}" font-size="14">- - product</text>`;
      const readout = `(${m.a}${m.b < 0 ? '−' : '+'}${Math.abs(m.b)}i) × (${m.c}${m.d < 0 ? '−' : '+'}${Math.abs(m.d)}i) = (${m.a}×${m.c}−${m.b}×${m.d}) + (${m.a}×${m.d}+${m.b}×${m.c})i = ${m.real}${m.imaginary < 0 ? '−' : '+'}${Math.abs(m.imaginary)}i. Squared magnitudes: ${m.firstMagnitudeSquared} × ${m.multiplierMagnitudeSquared} = ${m.productMagnitudeSquared}.`;
      return { figure: svg(p.marks + vectors + labels, 'First complex number and its product as arrows', readout, id), readout };
    }
  },
  determinant: {
    title: 'A matrix changes area',
    question: 'What signed area do the two column vectors enclose?',
    prediction: 'Predict what happens to the sign if you swap the two columns.',
    note: 'For matrix [[a,b],[c,d]], columns (a,c) and (b,d) span a parallelogram. The determinant ad−bc gives signed area: positive preserves orientation, negative reverses it, and zero collapses the square.',
    controls: ['a', 'b', 'c', 'd'].map((key, i) => ({ key, label: ['Top-left a (column 1 x)', 'Top-right b (column 2 x)', 'Bottom-left c (column 1 y)', 'Bottom-right d (column 2 y)'][i], min: -3, max: 3, step: 1, value: [2, 1, 0, 1][i] })),
    render(s, id) {
      const m = determinant(s.a, s.b, s.c, s.d);
      const p = plane(7);
      const [ux, uy] = m.firstColumn, [vx, vy] = m.secondColumn;
      const corners = [[0, 0], [ux, uy], [ux + vx, uy + vy], [vx, vy]];
      const polygon = `<polygon points="${corners.map(([x, y]) => `${p.x(x)},${p.y(y)}`).join(' ')}" fill="${C.violet}" fill-opacity="0.25" stroke="${C.violet}" stroke-width="2"/>`;
      const vectors = arrowDefs(id) + arrow(id, p.x(0), p.y(0), p.x(ux), p.y(uy), C.teal) + arrow(id, p.x(0), p.y(0), p.x(vx), p.y(vy), C.orange, '8 3');
      const labels = `<text x="${p.x(ux) + 6}" y="${p.y(uy) - 8}" fill="${C.teal}" font-size="14">column 1</text><text x="${p.x(vx) + 6}" y="${p.y(vy) - 8}" fill="${C.orange}" font-size="14">column 2</text><text x="90" y="306" fill="${C.violet}" font-size="14">shaded: image of the unit square</text>`;
      const readout = `det [[${m.a}, ${m.b}], [${m.c}, ${m.d}]] = ${m.a}×${m.d}−${m.b}×${m.c} = ${m.signedArea}. Columns are (${ux},${uy}) and (${vx},${vy}); area = ${m.area}; orientation ${m.orientation}${m.collapsed ? ' to a line or point' : ''}.`;
      return { figure: svg(p.marks + polygon + vectors + labels, 'Column vectors and their parallelogram', readout, id), readout };
    }
  },
  modular: {
    title: 'Walking around a modular clock',
    question: 'Which residues appear when you repeatedly add the same step?',
    prediction: 'Predict whether a step sharing a factor with n visits every position.',
    note: 'Start at 0 and add the step modulo n. The first return to 0 occurs after n/gcd(n, step) moves; then the orbit repeats.',
    controls: [{ key: 'n', label: 'Modulus, n', min: 2, max: 24, step: 1, value: 12 }, { key: 'step', label: 'Step size', min: 1, max: 24, step: 1, value: 5 }],
    render(s, id) {
      const m = modular(s.n, s.step);
      const x = i => 320 + 105 * Math.sin(2 * Math.PI * i / m.n);
      const y = i => 160 - 105 * Math.cos(2 * Math.PI * i / m.n);
      const links = [...m.orbit, 0].map((value, i, all) => i === 0 ? '' : `<line x1="${x(all[i - 1])}" y1="${y(all[i - 1])}" x2="${x(value)}" y2="${y(value)}" stroke="${C.violet}" stroke-width="2" stroke-opacity="0.7"/>`).join('');
      let nodes = '';
      for (let i = 0; i < m.n; i += 1) {
        const visited = m.orbit.includes(i);
        nodes += `<circle cx="${x(i)}" cy="${y(i)}" r="${m.n > 16 ? 10 : 13}" fill="${visited ? C.teal : '#fff'}" stroke="${C.ink}"/><text x="${x(i)}" y="${y(i) + 4}" text-anchor="middle" fill="${visited ? '#fff' : C.ink}" font-size="${m.n > 16 ? 10 : 12}">${i}</text>`;
      }
      const legend = `<text x="75" y="32" fill="${C.ink}" font-size="14">Filled = visited; outlined = skipped</text><text x="75" y="300" fill="${C.violet}" font-size="14">Lines join successive visited residues, then return to 0</text>`;
      const readout = `Modulo ${m.n}, adding ${m.step} gives ${m.orbit.join(' → ')} → 0. gcd(${m.n}, ${m.step}) = ${m.divisor}; period = n/gcd = ${m.period}. ${m.n - m.period} residues are skipped.`;
      return { figure: svg(links + nodes + legend, 'Modular clock and orbit', readout, id), readout };
    }
  },
  combinations: {
    title: 'Count groups without order',
    question: 'How many k-element groups can you choose from n labelled objects?',
    prediction: 'Predict whether choosing k or choosing the n−k left out objects gives the same count.',
    note: 'The objects shown are one example group. The coefficient counts all groups; selecting them in a different order does not make a new group. At k = 0 or k = n, there is one group.',
    controls: [{ key: 'n', label: 'Number of objects, n', min: 1, max: 20, step: 1, value: 6 }, { key: 'k', label: 'Group size, k', min: 0, max: 20, step: 1, value: 2 }],
    render(s, id) {
      const m = combinations(s.n, s.k);
      let objects = '';
      for (let i = 0; i < m.n; i += 1) {
        const col = i % 10, row = Math.floor(i / 10), cx = 58 + col * 57, cy = 105 + row * 90;
        objects += `<rect x="${cx - 20}" y="${cy - 24}" width="40" height="40" rx="5" fill="${i < m.k ? C.teal : '#fff'}" stroke="${C.ink}" stroke-width="2"/><text x="${cx}" y="${cy + 2}" text-anchor="middle" fill="${i < m.k ? '#fff' : C.ink}" font-size="15">${i + 1}</text>`;
      }
      const captions = `<text x="38" y="36" fill="${C.ink}" font-size="15">One example choice of ${m.k} from ${m.n} labelled objects</text><text x="38" y="285" fill="${C.teal}" font-size="14">Filled boxes: chosen</text><text x="270" y="285" fill="${C.ink}" font-size="14">Outlined boxes: remaining</text>`;
      const readout = `C(${m.n}, ${m.k}) = ${m.n}! / (${m.k}! × ${m.n - m.k}!) = ${m.count}. Symmetry: C(${m.n}, ${m.symmetricK}) = ${m.count}. The drawing shows one of these groups.`;
      return { figure: svg(objects + captions, 'One selected group of labelled objects', readout, id), readout };
    }
  },
  bayes: {
    title: 'Update from a red observation',
    question: 'If a red result appears, which of two models is more plausible?',
    prediction: 'Predict how a red result changes the chance of A when red is more likely under A.',
    note: 'Frequencies use 10,000 equally weighted cases so every count is whole. When neither model can produce red, the conditional probability given red is undefined. Displayed percentage decimals are rounded to at most five decimal places.',
    controls: [{ key: 'priorA', label: 'Prior chance of model A, %', min: 1, max: 99, step: 1, value: 40 }, { key: 'redA', label: 'Red chance under A, %', min: 0, max: 100, step: 1, value: 75 }, { key: 'redB', label: 'Red chance under B, %', min: 0, max: 100, step: 1, value: 25 }],
    render(s) {
      const m = bayes(s.priorA, s.redA, s.redB);
      const table = `<table class="lab-table"><caption>Expected frequencies among 10,000 cases</caption><thead><tr><th scope="col">Model</th><th scope="col">Red</th><th scope="col">Not red</th><th scope="col">All</th></tr></thead><tbody><tr><th scope="row">A</th><td>${m.redFromA}</td><td>${m.groupA - m.redFromA}</td><td>${m.groupA}</td></tr><tr><th scope="row">B</th><td>${m.redFromB}</td><td>${m.groupB - m.redFromB}</td><td>${m.groupB}</td></tr><tr><th scope="row">Total</th><td>${m.redTotal}</td><td>${10000 - m.redTotal}</td><td>10000</td></tr></tbody></table>`;
      const readout = m.posteriorA === null ? `Red occurs in 0 of 10,000 cases. P(A | red) is undefined because the condition has zero probability.` : `P(A | red) = red from A / all red = ${m.redFromA}/${m.redTotal} ≈ ${num(m.posteriorA * 100)}%. Prior P(A) = ${m.priorA}%.`;
      return { figure: table, readout };
    }
  }
};

let nextId = 0;
function controlMarkup(spec, id) {
  return `<div class="lab-control"><label for="${id}-${spec.key}-range">${esc(spec.label)}</label><div class="lab-control-pair"><input id="${id}-${spec.key}-range" type="range" data-key="${spec.key}" min="${spec.min}" max="${spec.max}" step="${spec.step}" value="${spec.value}"><input aria-label="${esc(spec.label)} (number)" type="number" inputmode="decimal" data-key="${spec.key}" min="${spec.min}" max="${spec.max}" step="${spec.step}" value="${spec.value}"></div></div>`;
}

function modelValues(kind, state) {
  switch (kind) {
    case 'derivative': return derivative(state.a, state.h);
    case 'integral': return { ...integral(state.n), method: state.method };
    case 'limit': return limit(state.epsilon, state.offset);
    case 'complex': return complexMultiply(state.a, state.b, state.c, state.d);
    case 'determinant': return determinant(state.a, state.b, state.c, state.d);
    case 'modular': return modular(state.n, state.step);
    case 'combinations': return combinations(state.n, state.k);
    case 'bayes': return bayes(state.priorA, state.redA, state.redB);
    default: throw new Error('Unknown laboratory model.');
  }
}
function modelTable(kind, state) {
  const rows = Object.entries(modelValues(kind, state)).map(([key, value]) => [
    key.replace(/([a-z])([A-Z])/g, '$1 $2'),
    value === null ? 'undefined' : Array.isArray(value) ? value.join(', ') : typeof value === 'number' ? num(value) : String(value),
  ]);
  return { caption: 'Values for the current controls', headers: ['Quantity', 'Value'], rows };
}

export function mountLab(host) {
  if (host.dataset.labMounted === 'true') return;
  const definition = labs[host.dataset.lab];
  if (!definition) return;
  const id = `math-lab-${++nextId}`;
  const state = Object.fromEntries(definition.controls.map(spec => [spec.key, spec.value]));
  if (definition.extra) state.method = 'left';
  host.classList.add('math-lab');
  const controls = document.createElement('fieldset');
  controls.className = 'lab-controls';
  controls.innerHTML = `<legend>Change the values</legend>${definition.controls.map(spec => controlMarkup(spec, id)).join('')}${definition.extra || ''}`;
  const controller = mountLabFrame(host, { id, title: definition.title, question: definition.question,
    notice: definition.prediction + ' ' + definition.note, controls,
    figureLabel: definition.title, reset: () => {
      for (const spec of definition.controls) state[spec.key] = spec.value;
      if (definition.extra) state.method = 'left';
      sync(); draw(); controller.setStatus(`Controls reset. ${readout.textContent}`);
    } });
  controller.stage.closest('.euler-lab').querySelector('form').addEventListener('submit', event => event.preventDefault());
  const figure = document.createElement('div'); figure.className = 'lab-figure'; controller.stage.append(figure);
  const readout = document.createElement('output'); readout.className = 'lab-readout'; controller.stage.after(readout);
  const status = host.querySelector('.euler-lab__status');
  host.dataset.labMounted = 'true';
  let announcementTimer;
  const announce = () => {
    clearTimeout(announcementTimer);
    announcementTimer = setTimeout(() => { status.textContent = readout.textContent; }, 300);
  };
  const sync = () => {
    if (host.dataset.lab === 'combinations') {
      state.k = Math.min(state.k, state.n);
      for (const input of host.querySelectorAll('[data-key="k"]')) input.max = state.n;
    }
    for (const spec of definition.controls) for (const input of host.querySelectorAll(`[data-key="${spec.key}"]`)) input.value = state[spec.key];
    if (definition.extra) host.querySelector('[data-choice="method"]').value = state.method;
  };
  const draw = () => {
    const result = definition.render(state, id);
    figure.innerHTML = result.figure;
    readout.textContent = result.readout;
    controller.setTable(modelTable(host.dataset.lab, state));
  };
  const update = (event, commit) => {
    if (!commit && event.target.type === 'number') return;
    const key = event.target.dataset.key;
    if (key) {
      const spec = definition.controls.find(item => item.key === key);
      const candidate = Number(event.target.value);
      if (!Number.isFinite(candidate) || event.target.value.trim() === '') {
        if (commit) {
          sync();
          status.textContent = `Enter a number for ${spec.label}. The previous value remains in use.`;
        }
        return;
      }
      const clipped = Math.min(spec.max, Math.max(spec.min, candidate));
      const decimals = String(spec.step).split('.')[1]?.length || 0;
      state[key] = Number((Math.round((clipped - spec.min) / spec.step) * spec.step + spec.min).toFixed(decimals));
      sync();
      draw();
    } else if (event.target.dataset.choice === 'method') {
      state.method = event.target.value === 'right' ? 'right' : 'left';
      draw();
    }
    if (commit) announce();
  };
  host.addEventListener('input', event => update(event, false));
  host.addEventListener('change', event => update(event, true));
  sync();
  draw();
}

export function mountLabs(root = document) {
  root.querySelectorAll('[data-lab]').forEach(mountLab);
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => mountLabs(), { once: true });
  else mountLabs();
}
