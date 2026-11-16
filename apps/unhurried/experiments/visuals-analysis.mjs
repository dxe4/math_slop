// Authored, model-specific SVGs. Text and tables remain the primary accessible readout.
const ink = '#17324d';
const blue = '#185a9d';
const orange = '#ad520a';
const green = '#176b45';
const red = '#ad3038';
const gray = '#64748b';

const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const f = value => Number.isFinite(value) ? Number(value.toFixed(3)) : value;
const S = (title, desc, body, width = 500, height = 320) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(title)}"><title>${esc(title)}</title><desc>${esc(desc)}</desc><rect x="0" y="0" width="${width}" height="${height}" fill="#fff"/>${body}</svg>`;
const L = (x1, y1, x2, y2, color = ink, width = 1.5, extra = '') => `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
const R = (x, y, width, height, fill, extra = '') => `<rect x="${f(x)}" y="${f(y)}" width="${f(Math.max(0, width))}" height="${f(Math.max(0, height))}" fill="${fill}" ${extra}/>`;
const C = (x, y, radius, fill, extra = '') => `<circle cx="${f(x)}" cy="${f(y)}" r="${radius}" fill="${fill}" ${extra}/>`;
const T = (x, y, label, color = ink, anchor = 'start', size = 12) => `<text x="${f(x)}" y="${f(y)}" fill="${color}" text-anchor="${anchor}" font-size="${size}">${esc(label)}</text>`;
const P = (points, color = blue, width = 2, extra = '') => `<polyline points="${points.map(([x, y]) => `${f(x)},${f(y)}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linejoin="round" stroke-linecap="round" ${extra}/>`;
function A(x1, y1, x2, y2, color = blue, width = 2) {
  const dx = x2 - x1, dy = y2 - y1, length = Math.hypot(dx, dy);
  if (length < 1e-6) return '';
  const ux = dx / length, uy = dy / length, head = Math.min(9, 0.4 * length), wing = Math.min(4, 0.18 * length);
  const hx = x2 - head * ux, hy = y2 - head * uy;
  return L(x1, y1, x2, y2, color, width) + P([[hx - wing * uy, hy + wing * ux], [x2, y2], [hx + wing * uy, hy - wing * ux]], color, width);
}

function equal(x0, x1, y0, y1, box = { x: 55, y: 30, w: 380, h: 205 }) {
  const scale = Math.min(box.w / (x1 - x0), box.h / (y1 - y0));
  const left = box.x + (box.w - (x1 - x0) * scale) / 2;
  const top = box.y + (box.h - (y1 - y0) * scale) / 2;
  return { x: value => left + (value - x0) * scale, y: value => top + (y1 - value) * scale, scale, left, top, right: left + (x1 - x0) * scale, bottom: top + (y1 - y0) * scale };
}

function frame(m, x0, x1, y0, y1, xLabel = 'x', yLabel = 'y') {
  let body = R(m.left, m.top, m.right - m.left, m.bottom - m.top, 'none', `stroke="${gray}" stroke-width="1"`);
  if (x0 <= 0 && x1 >= 0) body += L(m.x(0), m.top, m.x(0), m.bottom, '#aebdca', 1);
  if (y0 <= 0 && y1 >= 0) body += L(m.left, m.y(0), m.right, m.y(0), '#aebdca', 1);
  return body + T(m.left - 5, m.bottom + 18, `${x0}`, gray, 'end') + T(m.right + 5, m.bottom + 18, `${x1}`, gray, 'start') + T(m.right + 12, m.bottom - 4, xLabel, ink) + T(m.left - 8, m.top + 2, `${y1}`, gray, 'end') + T(m.left - 8, m.bottom, `${y0}`, gray, 'end') + T(m.left - 8, m.top - 8, yLabel, ink, 'end');
}

function curvePoints(x0, x1, count, fn, m) {
  const points = [];
  for (let j = 0; j <= count; j += 1) {
    const x = x0 + (x1 - x0) * j / count;
    const y = fn(x);
    if (Number.isFinite(y)) points.push([m.x(x), m.y(y)]);
  }
  return points;
}

export function secant({ kind, a, h, slope, derivative }) {
  const fn = kind === 'square' ? x => x * x : Math.abs;
  const x0 = Math.min(a, a + h) - 0.9, x1 = Math.max(a, a + h) + 0.9;
  const samples = Array.from({ length: 81 }, (_, j) => fn(x0 + (x1 - x0) * j / 80));
  const y0 = Math.min(...samples) - 0.6, y1 = Math.max(...samples) + 0.6;
  const m = equal(x0, x1, y0, y1);
  const fa = fn(a), fb = fn(a + h);
  let body = frame(m, f(x0), f(x1), f(y0), f(y1), 'x', 'f(x)');
  body += P(curvePoints(x0, x1, 80, fn, m), blue, 2.5);
  body += L(m.x(a), m.y(fa), m.x(a + h), m.y(fb), orange, 3);
  if (derivative !== null) body += L(m.x(a - 0.4), m.y(fa - 0.4 * derivative), m.x(a + 0.4), m.y(fa + 0.4 * derivative), green, 1.8, 'stroke-dasharray="5 3"');
  body += C(m.x(a), m.y(fa), 4, blue) + C(m.x(a + h), m.y(fb), 4, orange);
  body += T(60, 290, `h=${f(h)}, secant slope=${f(slope)}`, orange) + T(340, 290, derivative === null ? 'corner: no tangent' : 'dashed: tangent', green);
  return S('Secant and tangent on the selected curve', `Equal horizontal and vertical units. The blue curve is ${kind === 'square' ? 'x squared' : 'absolute x'}. Orange joins the base point to a point h away; ${derivative === null ? 'there is no tangent at the corner' : 'the dashed green line is the tangent'}.`, body);
}

export function sums({ kind, n, view }) {
  const fn = kind === 'linear' ? x => x : x => x * x;
  const m = equal(0, 1, 0, 1, { x: 105, y: 35, w: 240, h: 200 });
  let body = frame(m, 0, 1, 0, 1, 'x', 'f(x)');
  for (let j = 0; j < n; j += 1) {
    const x = j / n, width = m.scale / n;
    if (view !== 'lower') {
      const height = fn((j + 1) / n);
      body += R(m.x(x), m.y(height), width, m.y(0) - m.y(height), '#edbd87', 'opacity="0.45"');
    }
    if (view !== 'upper') {
      const height = fn(x);
      body += R(m.x(x), m.y(height), width, m.y(0) - m.y(height), '#82b9e4', 'opacity="0.65"');
    }
  }
  body += P(curvePoints(0, 1, 90, fn, m), ink, 2.5);
  body += T(55, 290, `n=${n}; each width=1/${n}`, ink) + T(300, 290, view === 'both' ? 'blue lower; orange upper' : view === 'lower' ? 'blue lower' : 'orange upper', view === 'upper' ? orange : blue);
  return S('Endpoint rectangles bounding area', `The graph is ${kind === 'linear' ? 'x' : 'x squared'} on zero to one. ${view === 'both' ? 'Blue left endpoint rectangles give a lower sum; orange right endpoint rectangles give an upper sum.' : `${view} endpoint rectangles are shown.`} Each rectangle has actual width one over ${n}; the table gives exact sums and gap.`, body);
}

export function gradient({ x, y, a, b, ux, uy, h, gx, gy }) {
  const m = equal(-5, 5, -5, 5, { x: 115, y: 25, w: 240, h: 220 });
  let body = frame(m, -5, 5, -5, 5, 'x', 'y');
  for (const level of [0.5, 2, 4, 8]) {
    const rx = Math.sqrt(2 * level / a), ry = Math.sqrt(2 * level / b);
    if (rx <= 5 && ry <= 5) body += `<ellipse cx="${f(m.x(0))}" cy="${f(m.y(0))}" rx="${f(rx * m.scale)}" ry="${f(ry * m.scale)}" fill="none" stroke="#bdc9d2" stroke-width="1.3"/>`;
  }
  body += C(m.x(x), m.y(y), 4.5, blue) + T(m.x(x) + 7, m.y(y) - 7, 'start', blue);
  body += A(m.x(x), m.y(y), m.x(x + h * ux), m.y(y + h * uy), orange, 2.5);
  const norm = Math.hypot(gx, gy);
  if (norm > 1e-12) body += A(m.x(x), m.y(y), m.x(x + gx / norm), m.y(y + gy / norm), green, 2);
  body += T(65, 290, `orange: selected move h=${f(h)}`, orange) + T(315, 290, 'green: gradient direction', green);
  return S('Quadratic contours and directional move', 'Equal x and y units. Ellipses are equal-height contours of the selected positive quadratic. Orange is the chosen unit direction times move length; green shows only the gradient direction, with normalized arrow length.', body);
}

export function circulation({ field, cx, cy, radius, direction, enclosed }) {
  const m = equal(-4.5, 4.5, -4.5, 4.5, { x: 105, y: 25, w: 240, h: 220 });
  let body = frame(m, -4.5, 4.5, -4.5, 4.5, 'x', 'y');
  for (const x of [-2, -1, 1, 2]) for (const y of [-2, -1, 1, 2]) {
    const vx = field === 'gradient' ? x : -y, vy = field === 'gradient' ? y : x;
    const length = Math.hypot(vx, vy);
    body += A(m.x(x), m.y(y), m.x(x + 0.34 * vx / length), m.y(y + 0.34 * vy / length), '#92a7b7', 1.2);
  }
  body += `<circle cx="${f(m.x(cx))}" cy="${f(m.y(cy))}" r="${f(radius * m.scale)}" fill="none" stroke="${blue}" stroke-width="2.7"/>`;
  const t = Math.PI / 4, px = cx + radius * Math.cos(t), py = cy + radius * Math.sin(t);
  body += A(m.x(px), m.y(py), m.x(px - direction * 0.5 * Math.sin(t)), m.y(py + direction * 0.5 * Math.cos(t)), orange, 2.7);
  body += field === 'vortex' ? C(m.x(0), m.y(0), 5, red) + T(m.x(0) + 8, m.y(0) - 8, 'excluded origin', red) : C(m.x(0), m.y(0), 3, green);
  body += T(55, 290, `${direction === 1 ? 'counterclockwise' : 'clockwise'} loop; origin ${field === 'gradient' ? 'allowed' : enclosed ? 'inside' : 'outside'}`, ink);
  return S('Circular path and vector-field directions', `Equal x and y units. Blue circle is the selected path and orange arrow its orientation. Small gray arrows show field direction only. ${field === 'vortex' ? `Red dot is the excluded singular origin, ${enclosed ? 'inside' : 'outside'} the loop.` : 'The gradient field is defined at the origin.'}`, body);
}

export function tolerance({ kind, a, epsilon, delta, bound, certified }) {
  const fn = kind === 'double' ? x => 2 * x : x => x * x;
  const fa = fn(a), radiusX = Math.max(0.6, 1.3 * delta);
  const x0 = a - radiusX, x1 = a + radiusX;
  const values = Array.from({ length: 81 }, (_, j) => fn(x0 + (x1 - x0) * j / 80));
  const spread = Math.max(epsilon * 1.4, bound * 1.15, Math.max(...values.map(v => Math.abs(v - fa))) * 1.1, 0.5);
  const y0 = fa - spread, y1 = fa + spread;
  const m = equal(x0, x1, y0, y1);
  let body = frame(m, f(x0), f(x1), f(y0), f(y1), 'x', 'f(x)');
  body += R(m.x(a - delta), m.top, m.x(a + delta) - m.x(a - delta), m.bottom - m.top, '#d9eafb', 'opacity="0.65"');
  body += R(m.left, m.y(fa + epsilon), m.right - m.left, m.y(fa - epsilon) - m.y(fa + epsilon), '#dff3e8', 'opacity="0.6"');
  body += P(curvePoints(x0, x1, 80, fn, m), blue, 2.5) + C(m.x(a), m.y(fa), 4, ink);
  for (const x of [a - delta, a + delta]) body += L(m.x(x), m.top, m.x(x), m.bottom, orange, 1.3, 'stroke-dasharray="4 3"');
  for (const y of [fa - epsilon, fa + epsilon]) body += L(m.left, m.y(y), m.right, m.y(y), green, 1.3, 'stroke-dasharray="4 3"');
  body += T(45, 290, `blue input band: |x−a|<${f(delta)}`, orange) + T(295, 290, `green output band: ε=${f(epsilon)}`, green);
  body += T(45, 307, certified ? 'algebraic bound certifies every point' : 'algebraic bound exceeds ε', certified ? green : red);
  return S('Epsilon-delta input and output bands', `Equal x and y units. The chosen function is ${kind === 'double' ? 'two x' : 'x squared'}. Blue vertical region is the delta-neighborhood and green horizontal region is the epsilon band. The ${certified ? 'all-points algebraic bound certifies the choice' : 'displayed bound does not certify the choice'}; the graph alone is not a proof.`, body);
}

export function convergence({ kind, n, x }) {
  if (kind === 'power') {
    const m = equal(0, 1, 0, 1, { x: 110, y: 35, w: 230, h: 205 });
    let body = frame(m, 0, 1, 0, 1, 'x', 'xⁿ');
    const points = Array.from({ length: 801 }, (_, j) => {
      const t = 1 - (1 - j / 800) ** 2;
      return [m.x(t), m.y(t ** n)];
    });
    body += P(points, blue, 2.5);
    body += C(m.x(x), m.y(x ** n), 4, orange) + T(100, 290, `n=${n}; probe x=${f(x)}`, ink) + T(300, 290, 'sampled curve xⁿ', blue);
    return S('Power sequence on the unit square', 'Equal horizontal and vertical units. Blue is a densely sampled curve x to the selected power on zero to one, with extra samples near one; orange is the probe point. The pointwise limit jumps at x equals one, and the supremum error is reported in the table.', body);
  }
  const x0 = 95, x1 = 405, supportEnd = x0 + (x1 - x0) / n;
  let body = T(45, 45, `Support interval (0, 1/${n}) on x∈[0,1]`, ink);
  body += L(x0, 95, x1, 95, gray, 2) + L(x0, 88, x0, 103, ink) + L(x1, 88, x1, 103, ink);
  body += L(x0, 95, supportEnd, 95, blue, 1.5) + L(supportEnd, 80, supportEnd, 108, orange, 2);
  body += C(x0 + (x1 - x0) * x, 95, 4, red) + T(45, 165, `red probe x=${f(x)}; fₙ(x)=${x > 0 && x < 1 / n ? n : 0}`, red);
  body += T(x0, 120, '0') + T(x1, 120, '1', ink, 'end') + T(45, 148, `actual support width = 1/${n}${supportEnd - x0 < 1 ? ' (<1 screen pixel)' : ''}`, blue);
  body += T(45, 185, `Separate height scale: 0 to n=${n}`, ink);
  body += L(x0, 250, x1, 250, gray, 2);
  body += L(x0, 250, x0, 205, orange, 4) + C(x0, 205, 3, orange) + T(x0 + 9, 210, `height n=${n}`, orange);
  body += T(45, 292, 'Scales are separate; no area is inferred from this drawing.', red);
  return S('Spike support and height on separate scales', `The top number line shows the actual support interval from zero to one over ${n} within zero to one. The lower height marker uses a separate vertical scale reaching ${n}. These are separate one-dimensional scales, not a rectangle; the exact integral is one in the table.`, body);
}

export function multiply({ a, b, wr, wi, zr, zi, radius }) {
  const extent = Math.max(2, Math.abs(a), Math.abs(b), Math.abs(wr), Math.abs(wi), Math.abs(zr), Math.abs(zi)) + 0.5;
  const m = equal(-extent, extent, -extent, extent, { x: 120, y: 25, w: 240, h: 220 });
  let body = frame(m, f(-extent), f(extent), f(-extent), f(extent), 'Re', 'Im');
  body += A(m.x(0), m.y(0), m.x(a), m.y(b), blue, 2.7);
  body += A(m.x(0), m.y(0), m.x(wr), m.y(wi), green, 2);
  body += A(m.x(0), m.y(0), m.x(zr), m.y(zi), orange, 2.7);
  body += T(55, 288, 'blue z', blue) + T(155, 288, 'green w', green) + T(275, 288, 'orange zw', orange);
  if (radius === 0 || Math.hypot(a, b) === 0) body += T(55, 307, 'argument undefined for each zero vector', red);
  return S('Complex multiplication as vectors in the plane', 'Equal real and imaginary units. Arrows from zero show input z, multiplier w and product zw with their actual relative lengths and directions. A zero arrow has undefined argument; component and angle values are in the table.', body);
}

export function contour({ integrand, cx, cy, radius, direction, enclosed }) {
  const m = equal(-4.6, 4.6, -4.6, 4.6, { x: 105, y: 25, w: 240, h: 220 });
  let body = frame(m, -4.6, 4.6, -4.6, 4.6, 'Re', 'Im');
  body += `<circle cx="${f(m.x(cx))}" cy="${f(m.y(cy))}" r="${f(radius * m.scale)}" fill="none" stroke="${blue}" stroke-width="2.7"/>`;
  const t = Math.PI / 4, px = cx + radius * Math.cos(t), py = cy + radius * Math.sin(t);
  body += A(m.x(px), m.y(py), m.x(px - direction * 0.65 * Math.sin(t)), m.y(py + direction * 0.65 * Math.cos(t)), orange, 2.5);
  const poles = integrand === 'one-over-z' ? [{ x: 0, y: 0, label: '0' }] : [{ x: 0, y: 1, label: '+i' }, { x: 0, y: -1, label: '−i' }];
  for (const pole of poles) {
    const inside = Math.hypot(cx - pole.x, cy - pole.y) < radius;
    body += C(m.x(pole.x), m.y(pole.y), 5, inside ? red : '#fff', `stroke="${red}" stroke-width="2"`);
    body += T(m.x(pole.x) + 8, m.y(pole.y) - 8, pole.label, red);
  }
  body += T(50, 290, `${direction === 1 ? 'counterclockwise' : 'clockwise'}; filled poles enclosed: ${enclosed.length ? enclosed.join(', ') : 'none'}`, ink);
  return S('Complex circular contour and poles', `Equal real and imaginary units. Blue circle is the selected contour and orange arrow shows orientation. Red pole markers are filled when enclosed and hollow when outside. The integrand is ${integrand === 'one-over-z' ? 'one over z' : 'one over one plus z squared'}.`, body);
}

function series(points, m, cap, color, width = 2) {
  let body = '', current = [];
  const flush = () => { if (current.length >= 2) body += P(current, color, width); else if (current.length === 1) body += C(current[0][0], current[0][1], 2.5, color); current = []; };
  for (const [x, y] of points) {
    if (Number.isFinite(y) && Math.abs(y) <= cap) current.push([m.x(x), m.y(y)]);
    else flush();
  }
  flush();
  return body;
}

export function odeField({ initial, rate, step, focus, rows }) {
  const horizon = rows.at(-1)[1], cap = Math.max(5, 2 * initial);
  const m = { x: t => 65 + 365 * t / horizon, y: y => 155 - y * 105 / cap };
  let body = R(65, 50, 365, 210, 'none', `stroke="${gray}"`) + L(65, 155, 430, 155, '#aebdca', 1);
  body += T(65, 278, '0') + T(430, 278, `${f(horizon)} time`, ink, 'end') + T(55, 55, `${cap}`, gray, 'end') + T(55, 158, '0', gray, 'end') + T(55, 259, `${-cap}`, gray, 'end');
  if (focus !== 'euler') {
    const exactPoints = Array.from({ length: 151 }, (_, j) => { const t = horizon * j / 150; return [t, initial * Math.exp(-rate * t)]; });
    body += series(exactPoints, m, cap, blue, 2.7);
  }
  if (focus !== 'exact') {
    body += series(rows.map(row => [row[1], row[3]]), m, cap, orange, 2.2);
    for (const row of rows) if (Math.abs(row[3]) <= cap) body += C(m.x(row[1]), m.y(row[3]), 2.2, orange);
  }
  const clipped = rows.filter(row => Math.abs(row[3]) > cap).length;
  body += T(65, 303, `${focus !== 'euler' ? 'blue exact' : ''}${focus === 'both' ? '; ' : ''}${focus !== 'exact' ? 'orange Euler points' : ''}`, ink);
  if (clipped) body += T(265, 303, `${clipped} Euler points outside ±${f(cap)} view`, red);
  return S('Exact decay and Euler trajectory', `Time runs horizontally and amount vertically; vertical and horizontal units differ and are labeled. ${focus === 'exact' ? 'Only the exact curve is shown.' : focus === 'euler' ? 'Only the Euler points are shown.' : 'The exact curve and Euler points are overlaid.'} ${clipped} Euler points are outside the labeled vertical display cap; their values remain in the table.`, body);
}

export function bifurcation({ mu, initial, horizon, equilibria, trace, stopped }) {
  const phaseX = x => 60 + (x + 3) * 63;
  let body = T(55, 30, `Phase line for μ=${f(mu)}`, ink) + L(phaseX(-3), 90, phaseX(3), 90, gray, 2);
  for (const x of [-2.5, -1.5, -0.5, 0.5, 1.5, 2.5]) {
    const velocity = mu - x * x;
    if (Math.abs(velocity) > 1e-9) body += A(phaseX(x) - (velocity > 0 ? 9 : -9), 90, phaseX(x) + (velocity > 0 ? 9 : -9), 90, velocity > 0 ? green : red, 1.6);
  }
  for (const equilibrium of equilibria) {
    const stable = equilibrium > 0, nonhyperbolic = mu === 0;
    body += C(phaseX(equilibrium), 90, 5, nonhyperbolic ? '#fff' : stable ? green : red, `stroke="${nonhyperbolic ? orange : stable ? green : red}" stroke-width="2"`);
    body += T(phaseX(equilibrium), nonhyperbolic || equilibrium < 0 ? 62 : 76, nonhyperbolic ? '0 (nonhyperbolic)' : `${f(equilibrium)} ${stable ? 'stable' : 'unstable'}`, ink, 'middle', 10);
  }
  body += C(phaseX(initial), 90, 3.5, blue) + T(phaseX(initial), 117, 'initial', blue, 'middle', 10);
  body += T(55, 145, `Numerical x(t), view −2 to 2${stopped ? '; stopped before overflow' : ''}`, ink);
  const m = { x: t => 60 + 378 * t / horizon, y: x => 218 - x * 28 };
  body += R(60, 162, 378, 112, 'none', `stroke="${gray}"`) + L(60, m.y(0), 438, m.y(0), '#aebdca', 1);
  body += series(trace, m, 2, blue, 2.3);
  body += T(60, 294, 't=0') + T(438, 294, `t=${f(horizon)}`, ink, 'end') + T(50, 169, 'x=2', gray, 'end') + T(50, 273, 'x=−2', gray, 'end');
  body += T(60, 311, 'Trajectories outside x∈[−2,2] are omitted from this view.', red);
  return S('Fold phase line and bounded numerical trajectory', `Top number line shows phase arrows, equilibria and initial position for x prime equals mu minus x squared. Lower chart shows numerical x versus time on the labeled x interval minus two to two. ${stopped ? 'The numerical solver stopped before overflow.' : ''} Values outside the displayed x range are omitted, not wrapped.`, body);
}

export function root({ initialLeft, initialRight, bracket, reference, newton, newtonFailed }) {
  const lower = bracket.lower, upper = bracket.upper;
  const extent = Math.max(upper - lower, 1e-10);
  const center = (lower + upper) / 2;
  const zoomL = center - 1.4 * extent, zoomR = center + 1.4 * extent;
  const initialX = x => 70 + 360 * (x - initialLeft) / (initialRight - initialLeft);
  const zoomX = x => 70 + 360 * (x - zoomL) / (zoomR - zoomL);
  let body = T(55, 38, 'Original sign-changing bracket', ink) + L(70, 85, 430, 85, gray, 2);
  body += C(70, 85, 4, blue) + C(430, 85, 4, blue) + C(initialX(reference), 85, 4, green);
  body += T(70, 108, `${f(initialLeft)}`) + T(430, 108, `${f(initialRight)}`, ink, 'end') + T(initialX(reference), 69, 'reference root', green, 'middle', 10);
  body += T(55, 145, 'Final bracket, magnified with outward-rounded endpoints', ink);
  body += L(70, 195, 430, 195, gray, 2) + L(zoomX(lower), 195, zoomX(upper), 195, blue, 5);
  body += C(zoomX(lower), 195, 4, blue) + C(zoomX(upper), 195, 4, blue) + C(zoomX(reference), 195, 4, green);
  body += T(zoomX(lower), 180, `${lower}`, blue, 'middle', 10) + T(zoomX(upper), 222, `${upper}`, blue, 'middle', 10);
  if (!newtonFailed && newton >= zoomL && newton <= zoomR) body += C(zoomX(newton), 195, 3, orange) + T(zoomX(newton), 245, 'Newton', orange, 'middle', 10);
  else body += T(70, 252, newtonFailed ? 'Newton stopped; see table.' : 'Newton iterate outside zoomed interval.', orange);
  body += T(70, 288, `displayed width=${bracket.width}`, blue) + T(70, 307, 'Reference dot is approximate; bisection guarantee uses signs.', green);
  return S('Bisection bracket with a magnified final interval', `The top number line shows the original bracket. The lower number line magnifies the final, outward-rounded interval ${bracket.label}, width ${bracket.width}. Blue endpoints enclose the root; the green reference marker is approximate. Newton is ${newtonFailed ? 'stopped' : 'marked when it lies in the zoom'}.`, body);
}

export function stepError({ kind, x, exponent, precision }) {
  const fn = kind === 'square' ? t => t * t : t => Math.exp(t);
  const derivative = kind === 'square' ? 2 * x : Math.exp(x);
  const rounded = value => precision === 'toy' ? Number(value.toPrecision(6)) : value;
  const sx = power => 75 + (power + 15) * 25;
  const sy = logError => 251 - (Math.max(-17, Math.min(5, logError)) + 17) * 9.4;
  const errorLog = value => value === 0 ? -17 : Math.log10(value);
  const truncation = [], arithmetic = [], total = [];
  for (let power = -15; power <= -1; power += 1) {
    const h = 10 ** power;
    const ideal = kind === 'square' ? 2 * x + h : Math.exp(x) * Math.expm1(h) / h;
    const computed = (rounded(fn(x + h)) - rounded(fn(x))) / h;
    truncation.push([sx(power), sy(errorLog(Math.abs(ideal - derivative)))]);
    arithmetic.push([sx(power), sy(errorLog(Math.abs(computed - ideal)))]);
    total.push([sx(power), sy(errorLog(Math.abs(computed - derivative)))]);
  }
  let body = R(75, 44, 350, 207, 'none', `stroke="${gray}"`) + L(sx(exponent), 44, sx(exponent), 251, '#aebdca', 1, 'stroke-dasharray="4 3"');
  body += P(truncation, blue, 2) + P(arithmetic, orange, 2) + P(total, red, 2.7);
  body += C(sx(exponent), total[exponent + 15][1], 4, red);
  body += T(75, 270, '10⁻¹⁵') + T(425, 270, '10⁻¹ step h', ink, 'end') + T(68, 50, '10⁵', gray, 'end') + T(68, 249, '≤10⁻¹⁷', gray, 'end');
  body += T(45, 295, 'blue truncation', blue) + T(178, 295, 'orange arithmetic', orange) + T(338, 295, 'red total', red);
  body += T(45, 313, `selected h=10^${exponent}; zero errors sit at graph floor`, ink, 'start', 11);
  return S('Logarithmic finite-difference error comparison', `Horizontal axis is log base ten of step h from ten to the minus fifteen to ten to the minus one. Vertical axis is log base ten of error, with zero values placed at the labeled graph floor. Curves separate ideal truncation, ${precision === 'toy' ? 'six-significant-digit' : 'native'} arithmetic and total error. The selected step is a dashed vertical line.`, body);
}

export function descent({ l1, l2, points, alpha }) {
  const m = equal(-5, 5, -5, 5, { x: 115, y: 25, w: 240, h: 220 });
  let body = frame(m, -5, 5, -5, 5, 'x', 'y');
  for (const level of [0.5, 2, 5, 10, 20]) {
    const rx = Math.sqrt(2 * level / l1), ry = Math.sqrt(2 * level / l2);
    if (rx <= 5 && ry <= 5) body += `<ellipse cx="${f(m.x(0))}" cy="${f(m.y(0))}" rx="${f(rx * m.scale)}" ry="${f(ry * m.scale)}" fill="none" stroke="#bdc9d2" stroke-width="1.2"/>`;
  }
  const inside = ([x, y]) => Math.abs(x) <= 5 && Math.abs(y) <= 5;
  for (let j = 1; j < points.length; j += 1) if (inside(points[j - 1]) && inside(points[j])) body += A(m.x(points[j - 1][0]), m.y(points[j - 1][1]), m.x(points[j][0]), m.y(points[j][1]), orange, 1.8);
  for (let j = 0; j < points.length; j += 1) if (inside(points[j])) body += C(m.x(points[j][0]), m.y(points[j][1]), j === 0 ? 5 : 2.5, j === 0 ? blue : orange);
  body += C(m.x(0), m.y(0), 4, green);
  const omitted = points.filter(point => !inside(point)).length;
  body += T(52, 290, `α=${f(alpha)}; blue start, orange iterates, green minimum`, ink);
  if (omitted) body += T(52, 309, `${omitted} iterates outside x,y∈[−5,5]; see table`, red);
  return S('Quadratic contours and gradient-descent iterates', `Equal x and y units. Gray ellipses are objective contours for the selected positive quadratic. Blue marks the initial point, orange marks visible iterates and green marks the minimum. ${omitted} iterates lie outside the labeled display range and remain in the table.`, body);
}

function isoLine(value, c1, c2, m, color) {
  const intersections = [[0, value / c2], [3, (value - 3 * c1) / c2], [value / c1, 0], [(value - 3 * c2) / c1, 3]];
  const points = intersections.filter(([x, y]) => x >= -1e-10 && x <= 3 + 1e-10 && y >= -1e-10 && y <= 3 + 1e-10);
  const unique = points.filter(([x, y], index) => !points.slice(0, index).some(([u, v]) => Math.hypot(x - u, y - v) < 1e-9));
  if (unique.length < 2) return '';
  return P(unique.slice(0, 2).map(([x, y]) => [m.x(Math.max(0, Math.min(3, x))), m.y(Math.max(0, Math.min(3, y)))]), color, 2, 'stroke-dasharray="5 3"');
}

export function certificate({ x, y, c1, c2, primal, dual, primalFeasible, dualFeasible }) {
  const m = equal(0, 3, 0, 3, { x: 95, y: 30, w: 225, h: 190 });
  let body = frame(m, 0, 3, 0, 3, 'x', 'y');
  const feasible = [[2, 0], [3, 0], [3, 3], [0, 3], [0, 2]].map(([px, py]) => `${f(m.x(px))},${f(m.y(py))}`).join(' ');
  body += `<polygon points="${feasible}" fill="#d9f2e4" stroke="${green}" stroke-width="1.5" opacity="0.8"/>`;
  body += L(m.x(0), m.y(2), m.x(2), m.y(0), green, 2);
  body += isoLine(primal, c1, c2, m, orange);
  if (dualFeasible) body += isoLine(dual, c1, c2, m, blue);
  body += C(m.x(x), m.y(y), 5, primalFeasible ? green : red);
  body += T(m.x(x) + 7, m.y(y) - 7, 'candidate', primalFeasible ? green : red);
  body += T(70, 282, 'green region: x+y≥2, 0≤x,y≤3', green);
  body += T(70, 301, `orange objective ${f(primal)}; ${dualFeasible ? `blue dual bound ${f(dual)}` : 'dual infeasible'}`, dualFeasible ? blue : red);
  return S('LP feasible set, candidate and objective levels', `Equal x and y units. Green polygon is the feasible set for x plus y at least two within the box zero to three. The candidate dot is ${primalFeasible ? 'feasible' : 'infeasible'}. Orange dashed line is its objective level. ${dualFeasible ? `The blue dashed line represents the dual bound ${f(dual)} if it intersects the displayed box.` : 'The chosen dual multipliers are infeasible, so no certified lower bound is shown.'} The table gives the exact gap only when both sides are feasible.`, body);
}
