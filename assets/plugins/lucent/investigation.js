// "investigation" fences: nine named, linked investigations (a JavaScript port
// of the Rust math-core investigations). Each one computes a main view, optional
// second views and labelled numerical readouts from the same controls.
import { Board, el, sliderRow, schedule, loadJSXGraph, errorBox } from './board.js';
import { markdown, store } from './rich.js';
import { pretty } from './expr.js';

const PI = Math.PI;
const p = (x, y) => [x, y];
const mk = (kind, label, color, extra) => ({ kind, label, color, keys: [], ...extra });
const line = (label, color, a, b) => mk('line', label, color, { a, b });
const arrow = (label, color, a, b) => mk('arrow', label, color, { a, b });
const dot = (label, color, point) => mk('point', label, color, { p: point });
const curve = (label, color, pts) => mk('curve', label, color, { segs: [pts] });
const sampled = (label, color, count, make) => curve(label, color, Array.from({ length: count + 1 }, (_, i) => make(i / count)));
const polygon = (label, color, pts) => mk('polygon', label, color, { pts });
const band = (label, color, axis, min, max) => mk('band', label, color, { axis, min, max });
const datum = (name, label, value, unit, meaning) => ({ name, label, value, unit, meaning });
const scene = (title, domain, range, equal, prims) => ({ title, domain, range, equal, params: [], values: {}, readouts: [], prims });
const view = (title, sc, xLabel = 'x', yLabel = 'y') => ({ title, scene: sc, xLabel, yLabel });
const ctl = (name, label, def, min, max, step) => ({ name, label, default: def, min, max, step });

export const INVESTIGATIONS = {
  'uniform-powers': {
    prompt: 'Predict whether xⁿ tends to zero uniformly on [0, 1]. Which point would test your claim as n changes?',
    controls: [ctl('n', 'Sequence index n', 10, 1, 80, 1), ctl('r', 'Restricted right endpoint r', 0.85, 0.2, 1, 0.01)],
    run({ n, r }) {
      const wx = 2 ** (-1 / n), range = [-0.05, 1.05];
      const main = scene('Every fixed x behaves; the witness moves', [0, 1], range, false, [band('Chosen domain [0,r]', 'green', 'x', 0, r), sampled('sampled x^n', 'blue', 240, t => p(t, t ** n)), line('pointwise limit on [0,1)', 'teal', p(0, 0), p(0.994, 0)), dot('limit at x=1: value 1', 'teal', p(1, 1)), dot('moving witness x_n: x_n^n=1/2', 'red', p(wx, 0.5))]);
      const restricted = scene('On [0,r], the largest x^n is r^n', [0, 1], range, false, [sampled('sampled x^n on selected domain', 'blue', 240, t => p(r * t, (r * t) ** n)), dot('right endpoint: r^n', 'amber', p(r, r ** n)), line('pointwise limit is zero when r<1', 'teal', p(0, 0), p(Math.min(r, 0.994), 0))]);
      return { main, views: [view('Restricted domain', restricted)], data: [
        datum('witnessX', 'Moving witness x_n', wx, 'x', 'The plotted value is the rounded value of the exact expression 2^(-1/n).'),
        datum('witnessValue', 'Value at witness', 0.5, '', 'Exactly (2^(-1/n))^n=1/2 for positive integer n.'),
        datum('restrictedBound', 'Supremum of x^n on [0,r]', r ** n, '', 'For r<1 this tends to zero uniformly; at r=1 the discrepancy from the pointwise limit has supremum one.'),
        datum('fixedHalf', 'Value at fixed x=1/2', 0.5 ** n, '', 'This tends to zero for the same fixed input.')],
      notes: ['The pointwise limit is 0 at every fixed x<1 and 1 at x=1. Its two pieces are deliberately not joined at the endpoint.', 'The witness identity x_n^n=1/2 is exact; finite curves and decimals are illustrations, not the proof.', 'When r=1, the supremum error from the pointwise limit is one although that value is not attained for x<1.'] };
    },
  },
  'uniform-transfer': {
    prompt: 'Predict what happens to the largest value of n x(1−x)ⁿ. Does pointwise convergence settle the question?',
    controls: [ctl('n', 'Sequence index n', 10, 1, 80, 1)],
    run({ n }) {
      const px = 1 / (n + 1), peak = (n / (n + 1)) ** (n + 1);
      const main = scene('Transfer: n x (1-x)^n', [0, 1], [-0.02, 0.52], false, [sampled('sampled n x (1-x)^n', 'blue', 320, t => p(t, n * t * (1 - t) ** n)), dot('true maximiser x=1/(n+1)', 'red', p(px, peak)), line('pointwise limit zero', 'teal', p(0, 0), p(1, 0))]);
      return { main, views: [], data: [datum('peakX', 'Maximising x', px, 'x', 'Exact formula 1/(n+1), displayed as a decimal.'), datum('peakValue', 'Maximum value', peak, '', 'Exact expression (n/(n+1))^(n+1); it tends to e^-1, so convergence is not uniform.'), datum('asymptoticPeak', 'Limiting maximum', Math.exp(-1), '', 'Approximate value of e^-1.')],
        notes: ['Differentiate for each positive integer n to find the interior maximum; the plotted samples alone cannot certify it.', 'The maximiser moves toward zero while every fixed input tends to zero.'] };
    },
  },
  recurrence: {
    prompt: 'Predict whether every rule with a fixed point has a convergent orbit. What other condition matters?',
    controls: [ctl('count', 'Number of terms', 10, 2, 24, 1), ctl('rule', 'Rule: 0 converges, 1 oscillates', 0, 0, 1, 1)],
    run({ count, rule }) {
      let actual = rule === 0 ? 1 : 0; const q = 1 / (2 + Math.sqrt(3)), prims = [], errors = [];
      for (let i = 0; i < count; i++) {
        const x = i + 1;
        prims.push(dot('series actual recurrence terms (discrete dots)', 'blue', p(x, actual)));
        if (rule === 0) {
          const bound = q ** i;
          prims.push(dot('series proved lower envelope 2-q^(n-1)', 'amber', p(x, 2 - bound)));
          errors.push(dot('series actual error 2-a_n', 'blue', p(x, 2 - actual)), dot('series proved error bound q^(n-1)', 'amber', p(x, bound)));
          actual = Math.sqrt(2 + actual);
        } else actual = 1 - actual;
      }
      const limit = rule === 0 ? 2 : 0.5;
      prims.push(line(rule === 0 ? 'limit 2 after convergence proof' : 'fixed point 1/2; orbit oscillates', 'teal', p(1, limit), p(count, limit)));
      const main = scene('Actual iterates and fixed-point claim', [0.5, count + 0.5], rule === 0 ? [0.85, 2.1] : [-0.1, 1.1], false, prims);
      const views = rule === 0 ? [view('Actual error and proved envelope', scene('Error for a_(n+1)=sqrt(2+a_n)', [0.5, count + 0.5], [-0.03, 1.06], false, errors), 'n', 'error')] : [];
      let last; if (rule === 0) { last = 1; for (let i = 1; i < count; i++) last = Math.sqrt(2 + last); } else last = count % 2 === 0 ? 1 : 0;
      const data = [datum('lastTerm', 'Last displayed actual term', last, '', 'The plotted dots are iterates, not a continuous trajectory.'), datum('fixedPoint', 'Fixed point of the rule', limit, '', rule === 0 ? 'Convergence follows from monotonicity and boundedness before solving the fixed-point equation.' : 'A fixed point exists but the orbit from zero alternates between zero and one.')];
      if (rule === 0) data.push(datum('errorBound', 'Proved upper bound at last term', q ** (count - 1), '', '2-a_n <= (1/(2+sqrt(3)))^(n-1) for a_1=1.'), datum('actualError', 'Actual error at last term', 2 - last, '', 'Computed from the displayed iteration.'));
      return { main, views, data, notes: [rule === 0 ? 'For a_1=1, induction gives 1<=a_n<=2 and monotonic increase; only then may the limit equation identify 2. The envelope comes from rationalising 2-sqrt(2+a_n).' : 'With a_1=0 and a_(n+1)=1-a_n, the equation L=1-L has L=1/2 but the actual terms alternate 0,1 and do not converge.', 'Dots are discrete terms. Any connecting line would be an invented interpolation.'] };
    },
  },
  'polar-patch': {
    prompt: 'Predict how the area of this patch changes when its radius or angle changes. Which two edge directions explain the factor?',
    controls: [ctl('r', 'Base radius r', 1.5, 0, 3, 0.1), ctl('theta', 'Base angle theta (radians)', 0.7, 0, 6.2, 0.1), ctl('dr', 'Radial increment dr', 0.4, 0.05, 0.8, 0.05), ctl('dtheta', 'Angular increment dtheta (radians)', 0.4, 0.05, 1, 0.05), ctl('a', 'Horizontal ellipse scale a', 1, 0.5, 2, 0.1), ctl('b', 'Vertical ellipse scale b', 1, 0.5, 2, 0.1)],
    run({ r, theta, dr, dtheta: dt, a, b }) {
      const map = (rad, ang) => p(a * rad * Math.cos(ang), b * rad * Math.sin(ang)), origin = map(r, theta);
      const radial = p(a * Math.cos(theta), b * Math.sin(theta)), angular = p(-a * r * Math.sin(theta), b * r * Math.cos(theta));
      const lr = p(origin[0] + dr * radial[0], origin[1] + dr * radial[1]), lt = p(origin[0] + dt * angular[0], origin[1] + dt * angular[1]), lrt = p(lr[0] + dt * angular[0], lr[1] + dt * angular[1]);
      const patch = [];
      for (let j = 0; j <= 48; j++) patch.push(map(r, theta + j / 48 * dt));
      for (let j = 1; j <= 48; j++) patch.push(map(r + j / 48 * dr, theta + dt));
      for (let j = 1; j <= 48; j++) patch.push(map(r + dr, theta + (1 - j / 48) * dt));
      for (let j = 1; j <= 48; j++) patch.push(map(r + (1 - j / 48) * dr, theta));
      const all = [...patch, lr, lt, lrt, origin], xs = all.map(q => q[0]), ys = all.map(q => q[1]);
      const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys), span = Math.max(maxX - minX, maxY - minY, 0.45), margin = span * 0.45;
      const main = scene('Curved polar patch and local linear edges', [minX - margin, maxX + margin], [minY - margin, maxY + margin], true, [curve('exact image of finite polar rectangle', 'blue', patch), arrow('radial derivative times dr', 'teal', origin, lr), arrow('angular derivative times dtheta', 'amber', origin, lt), line('linear tangent parallelogram edge', 'violet', lr, lrt), line('linear tangent parallelogram edge', 'violet', lt, lrt), dot('base point: (a r cos theta, b r sin theta)', 'red', origin)]);
      const exact = a * b * (r * dr + dr * dr / 2) * dt, linear = a * b * r * dr * dt;
      const param = scene('Parameter rectangle before the map', [-0.15, 3.9], [-0.3, 7.4], false, [polygon('finite parameter rectangle dr by dtheta', 'blue', [p(r, theta), p(r + dr, theta), p(r + dr, theta + dt), p(r, theta + dt)]), arrow('radial parameter increment dr', 'teal', p(r, theta), p(r + dr, theta)), arrow('angular parameter increment dtheta', 'amber', p(r, theta), p(r, theta + dt)), dot('base pair: (r,theta)', 'red', p(r, theta))]);
      return { main, views: [view('Parameter rectangle', param, 'r', 'θ')], data: [
        datum('jacobian', 'Signed Jacobian a b r', a * b * r, 'area scale', 'Determinant of the two derivative columns; zero at r=0.'),
        datum('linearArea', 'Linearised patch area', linear, 'square units', 'a b r dr dtheta; this is first-order in dr and dtheta.'),
        datum('exactArea', 'Exact curved sector area', exact, 'square units', 'a b ((r+dr)^2-r^2) dtheta / 2 for positive a,b.'),
        datum('remainder', 'Exact minus linear area', exact - linear, 'square units', 'Exactly a b (dr)^2 dtheta/2; do not conflate the finite patch and derivative.'),
        datum('radialDx', 'Radial edge x component', radial[0] * dr, 'x', 'First derivative column times dr.'), datum('radialDy', 'Radial edge y component', radial[1] * dr, 'y', 'First derivative column times dr.'),
        datum('angularDx', 'Angular edge x component', angular[0] * dt, 'x', 'Second derivative column times dtheta.'), datum('angularDy', 'Angular edge y component', angular[1] * dt, 'y', 'Second derivative column times dtheta.')],
      notes: ['Blue boundary is the nonlinear image of a finite parameter rectangle. Straight arrows and violet edges form only its derivative approximation at the selected point.', 'At r=0 the angular derivative vanishes and polar coordinates are singular; the finite curved sector still has positive area when dr and dtheta are positive.', 'Theta and dtheta are in radians. The ellipse scales a,b are positive, so the signed determinant a b r is nonnegative.'] };
    },
  },
  'circulation-hole': {
    prompt: 'Predict the circulation and ask whether Green’s theorem applies on the shown domain. Check orientation and any hole.',
    controls: [ctl('radius', 'Loop radius', 1, 0.4, 2.5, 0.05), ctl('orientation', 'Orientation: +1 CCW, -1 CW', 1, -1, 1, 2), ctl('field', 'Field: 0 smooth F, 1 punctured G', 0, 0, 1, 1)],
    run({ radius: r, orientation, field }) {
      const prims = [];
      for (let ix = -5; ix <= 5; ix++) for (let iy = -5; iy <= 5; iy++) {
        const x = ix * 0.5, y = iy * 0.5, rho = Math.hypot(x, y);
        if (rho < 0.24 || rho > 2.65) continue;
        const s = 0.16 / rho; prims.push(Object.assign(arrow('field arrow: direction only, normalized', 'gray', p(x, y), p(x - y * s, y + x * s)), { thin: true }));
      }
      prims.push(sampled(orientation > 0 ? 'counterclockwise integration loop' : 'clockwise integration loop', 'blue', 160, t => { const a = orientation * 2 * PI * t; return p(r * Math.cos(a), r * Math.sin(a)); }));
      prims.push(arrow('direction of traversal', 'amber', p(r, 0), p(r * 0.98, orientation * r * 0.2)));
      prims.push(dot(field === 1 ? 'origin: field G undefined here' : 'origin: smooth field F defined here', 'red', p(0, 0)));
      const main = scene(field === 0 ? 'Smooth rotational field F=(-y/2,x/2)' : 'Punctured rotational field G=(-y/rho^2,x/rho^2)', [-2.85, 2.85], [-2.85, 2.85], true, prims);
      return { main, views: [], data: [
        datum('circulation', 'Analytic circulation', field === 0 ? orientation * PI * r * r : orientation * 2 * PI, 'work units', field === 0 ? 'Integral of r^2/2 over t in [0,2pi], with orientation sign.' : 'Integral of 1 over t in [0,2pi], with orientation sign; the field is undefined at the origin.'),
        datum('loopIntegrand', 'Parametrised work integrand', field === 0 ? orientation * r * r / 2 : orientation, 'per radian', 'Constant along this circle when parameterised with angle increasing in the chosen orientation.'),
        datum('fieldSpeed', 'Actual field magnitude on loop', field === 0 ? r / 2 : 1 / r, 'field units', 'Arrows are normalized and do not encode this magnitude.'),
        datum('curlOffOrigin', 'Curl away from origin', field === 0 ? 1 : 0, 'per area', field === 0 ? 'F has curl one everywhere.' : 'G has curl zero wherever it is defined; no curl is asserted at the origin.')],
      notes: ['F=(-y/2,x/2) is smooth on the disk and has curl one. Its circulation is orientation × pi r².', 'G=(-y/(x²+y²),x/(x²+y²)) has curl zero off the origin, yet its circulation is orientation × 2 pi because it is undefined at the enclosed origin. Green\'s disk hypothesis fails.', 'On an annulus the inner boundary has clockwise induced orientation and its G contribution cancels the outer boundary. Grey arrows show direction only; the magnitude readout gives speed.', 'The loop is sampled for display. The circulation values use the exact parametrised integrands, not a line integral estimated from those samples.'] };
    },
  },
  'surface-contour': {
    prompt: 'Predict the directional rate at the selected point. Compare the surface, contour, tangent directions, and local plane.',
    controls: [ctl('cx', 'Coefficient of x²', 1, 1, 4, 0.5), ctl('cy', 'Coefficient of y²', 2, 1, 4, 0.5), ctl('a', 'Inspect x coordinate a', 1, -1.5, 1.5, 0.05), ctl('b', 'Inspect y coordinate b', 0.5, -1.5, 1.5, 0.05)],
    run({ cx, cy, a, b }) {
      const xt = cx === 1 ? 'x²' : `${cx}x²`, yt = cy === 1 ? 'y²' : `${cy}y²`, height = (x, y) => cx * x * x + cy * y * y;
      const z = height(a, b), gx = 2 * cx * a, gy = 2 * cy * b, contours = [];
      [0.5, 1.5, 3].forEach((level, i) => contours.push(sampled('reference level sets', i === 1 ? 'gray' : 'violet', 160, t => p(Math.sqrt(level / cx) * Math.cos(2 * PI * t), Math.sqrt(level / cy) * Math.sin(2 * PI * t)))));
      if (z > 1e-12) contours.push(sampled('selected level f(x,y)=f(a,b)', 'blue', 240, t => p(Math.sqrt(z / cx) * Math.cos(2 * PI * t), Math.sqrt(z / cy) * Math.sin(2 * PI * t))));
      else contours.push(dot('selected zero level is a point', 'blue', p(0, 0)));
      const norm = Math.hypot(gx, gy);
      if (norm > 1e-12) { const dx = 0.45 * gx / norm, dy = 0.45 * gy / norm; contours.push(arrow('gradient direction; normalized arrow length', 'amber', p(a, b), p(a + dx, b + dy)), line('tangent to selected contour; direction normalized', 'teal', p(a - dy, b + dx), p(a + dy, b - dx))); }
      contours.push(dot(`P: selected point (${a}, ${b})`, 'red', p(a, b)));
      const ext = Math.max(2.8, Math.sqrt(z / Math.min(cx, cy)) + 0.35);
      const main = scene(`Contours: z = ${xt} + ${yt}`, [-ext, ext], [-ext, ext], true, contours);
      const proj = (x, y, h) => p(x + 0.35 * y, 0.5 * y + 0.4 * h), plane = (x, y) => z + gx * (x - a) + gy * (y - b), mesh = [];
      for (let i = -4; i <= 4; i++) { const f = i * 0.4; mesh.push(sampled('sampled projected surface grid', 'gray', 40, t => { const y = -1.6 + 3.2 * t; return proj(f, y, height(f, y)); }), sampled('sampled projected surface grid', 'gray', 40, t => { const x = -1.6 + 3.2 * t; return proj(x, f, height(x, f)); })); }
      let pmin = -0.8, pmax = 0.8 + 0.4 * height(1.6, 1.6);
      for (const dx of [-0.5, 0.5]) for (const dy of [-0.5, 0.5]) { const y = proj(a + dx, b + dy, plane(a + dx, b + dy))[1]; pmin = Math.min(pmin, y); pmax = Math.max(pmax, y); }
      for (let i = -2; i <= 2; i++) { const o = i * 0.2; mesh.push(line('local tangent plane grid', 'teal', proj(a - 0.5, b + o, plane(a - 0.5, b + o)), proj(a + 0.5, b + o, plane(a + 0.5, b + o))), line('local tangent plane grid', 'teal', proj(a + o, b - 0.5, plane(a + o, b - 0.5)), proj(a + o, b + 0.5, plane(a + o, b + 0.5)))); }
      mesh.push(dot(`P: selected point (${a}, ${b}, ${z})`, 'red', proj(a, b, z)));
      const surface = scene(`Surface: z = ${xt} + ${yt} and tangent plane`, [-3, 3], [Math.min(-1.8, pmin - 0.4), Math.max(4.8, pmax + 0.4)], false, mesh);
      return { main, views: [view('Surface and local plane (same red point P)', surface, 'X', 'Y')], data: [
        datum('height', 'Surface value f(a,b)', z, 'z', 'Exact polynomial value evaluated in binary floating point.'), datum('partialX', 'Partial derivative f_x(a,b)', gx, 'z per x', 'The x slope of the tangent plane.'), datum('partialY', 'Partial derivative f_y(a,b)', gy, 'z per y', 'The y slope of the tangent plane.'),
        datum('gradientNorm', 'Gradient magnitude', norm, 'z per horizontal unit', 'Zero at the origin, where a unique contour tangent direction is unavailable.'), datum('tangentX', 'Contour tangent x component', -gy, 'x', 'A perpendicular to (f_x,f_y); zero vector at the origin.'), datum('tangentY', 'Contour tangent y component', gx, 'y', 'A perpendicular to (f_x,f_y); zero vector at the origin.')],
      notes: [`This is the positive quadratic family f(x,y)=${xt}+${yt}. The same red point P=(a,b) appears on the blue selected contour and on the surface. At P, the gradient (${gx},${gy}) is normal to a noncritical contour, while (${-gy},${gx}) is tangent. The arrow and tangent markers are normalized for visibility; readouts give the actual components.`, `The surface is an oblique 3D projection: X=x+0.35y and Y=0.5y+0.4z. Its sampled gray grid follows the chosen coefficients. The teal tangent plane is z=f(a,b)+(${gx})(x-a)+(${gy})(y-b).`, 'At (0,0) the selected level is a point, the gradient is zero, and the regular-level-set tangent claim does not apply.'] };
    },
  },
  'ftc-accumulation': {
    prompt: 'Predict whether the accumulated total can stay negative after the current rate becomes positive. Compare the finite secant slope with the tangent as h shrinks.',
    controls: [ctl('offset', 'Rate offset c', 1, 0, 2, 0.05), ctl('endpoint', 'Accumulation endpoint x', 1.4, 0, 2.2, 0.02), ctl('step', 'Finite increment h', 0.25, 0.02, 0.3, 0.01)],
    run({ offset, endpoint: x, step: h }) {
      const zero = Math.sqrt(offset), rate = t => t * t - offset, total = t => t ** 3 / 3 - offset * t, A = total(x), next = total(x + h);
      const quotient = x * x + x * h + h * h / 3 - offset, negEnd = Math.min(x, zero), negPart = total(negEnd), posPart = A - negPart;
      const piece = (l, r, color, label) => { if (r <= l) return null; const pts = [p(l, 0)]; for (let i = 0; i <= 40; i++) { const t = l + (r - l) * i / 40; pts.push(p(t, t * t - offset)); } pts.push(p(r, 0)); return polygon(label, color, pts); };
      const rp = [band('finite increment from x to x+h', 'amber', 'x', x, x + h), piece(0, negEnd, 'rose', 'negative signed accumulation'), piece(zero, x, 'teal', 'positive signed accumulation'),
        sampled('rate f(t)=t²−c', 'blue', 160, t => p(2.5 * t, rate(2.5 * t))), line('current rate height f(x)', 'amber', p(x, 0), p(x, rate(x))), dot(`selected point: f(x)=${rate(x).toFixed(6)}`, 'red', p(x, rate(x))), dot(`rate zero: t=${zero.toFixed(6)}`, 'violet', p(zero, 0))].filter(Boolean);
      const main = scene('Signed area up to x; the amber band is the next increment', [-0.08, 2.58], [-2.35, 6.65], false, rp), hw = 0.42;
      const acc = scene('The accumulation A(x) has tangent slope f(x)', [-0.08, 2.58], [-2.25, 5.7], false, [sampled('A(x)=x³/3−cx', 'teal', 160, t => p(2.5 * t, total(2.5 * t))), line('tangent slope f(x)', 'violet', p(x - hw, A - hw * rate(x)), p(x + hw, A + hw * rate(x))), line('finite secant slope [A(x+h)−A(x)]/h', 'amber', p(x, A), p(x + h, next)), dot(`selected point: A(x)=${A.toFixed(6)}`, 'red', p(x, A)), dot(`next point: A(x+h)=${next.toFixed(6)}`, 'amber', p(x + h, next))]);
      return { main, xLabel: 't', yLabel: 'f(t)', views: [view('The accumulated total and its local slope', acc, 'x', 'A(x)')], data: [
        datum('rate', 'Current rate f(x)', rate(x), 'output/input', 'The exact derivative A′(x) from the FTC for this continuous rate.'), datum('total', 'Signed accumulation A(x)', A, 'output', 'Exact integral from 0 to x: x³/3−cx.'),
        datum('negativeArea', 'Negative contribution', negPart, 'output', 'Signed integral from 0 to min(x,√c).'), datum('positiveArea', 'Positive contribution', posPart, 'output', 'Signed integral from √c to x when x exceeds √c.'),
        datum('increment', 'Finite change A(x+h)−A(x)', h * quotient, 'output', 'Exact polynomial difference over the amber band.'), datum('quotient', 'Finite secant quotient', quotient, 'output/input', 'Equals x²+xh+h²/3−c; it approaches f(x) as h→0.'), datum('quotientError', 'Secant minus tangent slope', x * h + h * h / 3, 'output/input', 'Exact finite error xh+h²/3; decreasing h reduces it here.')],
      notes: ['The rate is f(t)=t²−c and A(x)=∫₀ˣf(t)dt=x³/3−cx. Rose fill contributes negatively; teal fill contributes positively. The amber band marks [x,x+h], not an exact rectangle.', 'The red point in each view uses the same x. The second view compares the exact tangent slope f(x) with the finite secant quotient x²+xh+h²/3−c. Their difference tends to zero as h tends to zero.', 'A positive current rate does not imply a positive accumulated total: earlier negative area may still dominate. These polynomial formulas are exact identities evaluated in binary64; sampled curves and filled shapes are visual evidence, not a proof of the general FTC.'] };
    },
  },
  'rearrangement-target': {
    prompt: 'Predict whether a changed target moves the original-order sum or only the rearranged one. What should happen to overshoot errors after many crossings?',
    controls: [ctl('target', 'Target sum T', 0.3, -1, 1, 0.05), ctl('count', 'Number of displayed terms', 160, 20, 600, 1)],
    run({ target, count }) {
      let pu = 0, nu = 0, rs = 0, os = 0, takePositive = target >= 0, lastTerm = 0, lastPoint = p(0, 0);
      const reordered = [p(0, 0)], original = [p(0, 0)], errs = [];
      for (let i = 1; i <= count; i++) {
        let term; if (takePositive) { term = 1 / (2 * pu + 1); pu++; } else { term = -1 / (2 * nu + 2); nu++; }
        rs += term;
        if (takePositive ? rs > target : rs < target) { takePositive = !takePositive; lastTerm = Math.abs(term); lastPoint = p(i, rs); errs.push(p(errs.length + 1, Math.abs(rs - target))); }
        os += (i % 2 === 1 ? 1 : -1) / i; reordered.push(p(i, rs)); original.push(p(i, os));
      }
      const first = errs.length ? errs[0][1] : 0, last = errs.length ? errs.at(-1)[1] : 0;
      const main = scene('Reorder positive and negative terms to cross a chosen target', [0, count], [Math.min(target - first - 0.25, -0.25), Math.max(target + first + 0.25, 1.25)], false, [line('chosen target T', 'amber', p(0, target), p(count, target)), curve('finite rearranged partial sums', 'red', reordered), curve('original alternating harmonic partial sums', 'teal', original), dot(`latest crossing: absolute error ${last.toFixed(6)}`, 'rose', lastPoint)]);
      const ev = scene('At a crossing, the error is no larger than the last term', [0, errs.length + 1], [0, Math.max(first, 0.1) * 1.15], false, [curve('finite crossing overshoot magnitudes', 'violet', errs.length ? errs : [p(0, 0)]), line('target error zero', 'teal', p(0, 0), p(errs.length + 1, 0))]);
      return { main, views: [view('Errors at completed crossings', ev, 'crossing', '|partial sum − T|')], data: [
        datum('target', 'Chosen target T', target, '', 'The rearranged series is constructed to cross this target repeatedly.'), datum('reordered', 'Displayed rearranged sum', rs, '', 'Finite partial sum after the selected number of terms.'), datum('original', 'Original-order partial sum', os, '', 'The alternating harmonic series in its original order tends to ln 2.'),
        datum('positiveUsed', 'Positive terms used', pu, 'terms', 'First unused positive term is 1/(2p+1) with p equal to this count.'), datum('negativeUsed', 'Negative terms used', nu, 'terms', 'First unused negative term is −1/(2q+2) with q equal to this count.'),
        datum('crossings', 'Completed target crossings', errs.length, '', 'A finite crossing count does not establish infinitely many crossings.'), datum('lastError', 'Error at latest crossing', last, '', 'Bounded by the magnitude of the term that caused that crossing.'), datum('lastTerm', 'Latest crossing term magnitude', lastTerm, '', 'The exact finite overshoot bound for the last completed crossing.')],
      notes: ['The red path first moves toward T using unused terms of the needed sign, then alternates positive odd reciprocals above T and negative even reciprocals below T. Straight connectors only guide the eye between integer partial sums.', 'The teal path keeps the original alternating order and approaches ln 2. Changing T changes the red ordering, not the original series or its terms.', 'At each completed crossing, the error cannot exceed the absolute size of the last term added. Proving convergence still requires that both sign blocks continue forever and use every term; a finite plot cannot establish either claim.'] };
    },
  },
  'paraboloid-solid': {
    prompt: 'Before moving the slice, predict which column is tallest, which radial cell contributes most, and how raising the top plane changes the disk and total volume.',
    controls: [ctl('height', 'Top plane height H', 4, 1, 6, 0.25), ctl('curvature', 'Bowl curvature c', 1, 0.5, 2, 0.05), ctl('slice', 'Selected radius as fraction of R', 0.5, 0, 1, 0.01)],
    run({ height: h, curvature: c, slice }) {
      const radius = Math.sqrt(h / c), sel = slice * radius, lower = c * sel * sel, colH = h - lower, az = 0.75, sx = sel * Math.cos(az), sy = sel * Math.sin(az);
      const proj = (x, y, z) => p(x + 0.48 * y, 0.34 * y + 0.72 * z), sb = proj(sx, sy, lower), st = proj(sx, sy, h);
      const solid = [polygon('top disk of the solid', 'teal', Array.from({ length: 64 }, (_, i) => { const a = i * 2 * PI / 64; return proj(radius * Math.cos(a), radius * Math.sin(a), h); }))];
      for (let i = 0; i < 8; i++) { const a = i * PI / 4; solid.push(sampled('sampled lower paraboloid meridian', 'gray', 32, t => { const r = radius * t; return proj(r * Math.cos(a), r * Math.sin(a), c * r * r); })); }
      for (let i = 1; i <= 4; i++) { const r = radius * i / 4; solid.push(sampled('sampled lower paraboloid ring', 'blue', 64, t => { const a = 2 * PI * t; return proj(r * Math.cos(a), r * Math.sin(a), c * r * r); })); }
      solid.push(sampled('top disk rim, where the surfaces meet', 'teal', 64, t => { const a = 2 * PI * t; return proj(radius * Math.cos(a), radius * Math.sin(a), h); }), line('selected vertical column', 'amber', sb, st), dot('lower selected point: column begins', 'red', sb), dot('upper selected point: column ends', 'red', st), arrow('top outward normal', 'teal', st, proj(sx, sy, h + 0.45)));
      const ns = 0.42 / (1 + 2 * c * sel);
      solid.push(arrow('bowl outward normal', 'rose', sb, proj(sx + ns * 2 * c * sx, sy + ns * 2 * c * sy, lower - ns)));
      const ext = 1.55 * radius + 0.7;
      const main = scene('A solid, its top disk, and one moving vertical column', [-ext, ext], [-0.42 * radius - 0.7, 0.72 * (h + 0.65) + 0.42 * radius + 0.7], false, solid);
      const hw = 0.065 * radius, inner = Math.max(sel - hw, 0), outer = Math.min(sel + hw, radius), aw = PI / 8, start = az - aw / 2, sector = [];
      for (let i = 0; i <= 16; i++) { const a = start + aw * i / 16; sector.push(p(outer * Math.cos(a), outer * Math.sin(a))); }
      for (let i = 16; i >= 0; i--) { const a = start + aw * i / 16; sector.push(p(inner * Math.cos(a), inner * Math.sin(a))); }
      const projection = scene('The projection is a disk; a radial sector supplies r dr dθ', [-1.17 * radius, 1.17 * radius], [-1.17 * radius, 1.17 * radius], true, [polygon('finite sector approximating a polar area element', 'amber', sector), sampled('disk boundary r=R', 'teal', 80, t => p(radius * Math.cos(2 * PI * t), radius * Math.sin(2 * PI * t))), line('selected radius r', 'red', p(0, 0), p(sx, sy)), dot('projected selected point: column base', 'red', p(sx, sy))]);
      const region = [p(0, h), p(radius, h)]; for (let i = 80; i >= 0; i--) { const r = radius * i / 80; region.push(p(r, c * r * r)); }
      const radial = scene('At radius r, the column runs from cr² to H', [-0.08 * radius, 1.08 * radius], [-0.08 * h, 1.1 * h], false, [polygon('radial cross-section of the solid', 'blue', region), line('upper plane z=H', 'teal', p(0, h), p(radius, h)), sampled('lower bowl z=cr²', 'blue', 80, t => p(radius * t, c * (radius * t) ** 2)), line('selected column height H−cr²', 'amber', p(sel, lower), p(sel, h)), dot('lower selected point: bound cr²', 'red', p(sel, lower))]);
      const volume = PI * h * h / (2 * c), top = PI * h * h / c, low = volume;
      return { main, xLabel: 'projected X', yLabel: 'projected Y', views: [view('Projection onto the xy-plane', projection, 'x', 'y'), view('Radial cross-section and integral bounds', radial, 'r', 'z')], data: [
        datum('radius', 'Disk radius R = √(H/c)', radius, 'length', 'Exact boundary equation cr²=H, evaluated in binary64.'), datum('columnHeight', 'Column height H−cr²', colH, 'length', 'Upper z bound minus lower z bound at this radius.'), datum('areaFactor', 'Polar area factor r', sel, 'length', 'A polar cell has area approximately r Δr Δθ.'),
        datum('radialWeight', 'Height × radial factor', sel * colH, 'length²', 'The radial integrand r(H−cr²), before multiplying by 2π dr.'), datum('volume', 'Exact volume', volume, 'length³', 'πH²/(2c), from 2π∫₀ᴿ(H−cr²)r dr; not inferred from the drawing.'),
        datum('topFlux', 'Top flux for F=(x,y,z)', top, 'field·area', 'HπR², outward through the top disk.'), datum('lowerFlux', 'Bowl flux for F=(x,y,z)', low, 'field·area', 'cπR⁴/2; outward on the bowl points down and radially out.'), datum('totalFlux', 'Closed outward flux', top + low, 'field·area', 'Equals 3V because div F=3 on the entire solid.')],
      notes: [`The solid is E={(x,y,z): cr²≤z≤H, 0≤r≤R}, with c=${c}, H=${h}, and R=√(H/c). Move the selected radius: all three views show the same column and projected point.`, 'The disk sector is finite and schematic. Its limiting area factor is r dr dθ, so dV=r dz dr dθ. At r=0 the factor is zero, even though the central column has positive height.', 'The oblique solid drawing uses X=x+0.48y and Y=0.34y+0.72z. It is not metrically accurate 3D. Curves are sampled; radius, height, volume, and flux readouts come from the stated formulas, not pixel measurements.', 'For F=(x,y,z), the top disk has upward outward normal. The lower bowl\'s outward area vector is (2cx,2cy,−1) dxdy. Both pieces are required before applying Gauss to the closed boundary.'] };
    },
  },
};

export function runInvestigation(id, overrides = {}) {
  const spec = INVESTIGATIONS[id];
  if (!spec) throw new Error('unknown investigation id');
  const values = {};
  for (const name of Object.keys(overrides)) if (!spec.controls.some(c => c.name === name)) throw new Error(`unknown investigation control '${name}'`);
  for (const c of spec.controls) {
    const v = overrides[c.name] ?? c.default;
    if (!Number.isFinite(v) || v < c.min || v > c.max || (c.step === 1 && v !== Math.floor(v)) || (c.name === 'orientation' && v !== -1 && v !== 1)) throw new Error(`control '${c.name}' must be within [${c.min}, ${c.max}]`);
    values[c.name] = v;
  }
  const out = spec.run(values);
  if (out.data.some(d => !Number.isFinite(d.value))) throw new Error('investigation produced a nonfinite readout');
  out.main.params = spec.controls; out.main.values = values;
  return { ...out, xLabel: out.xLabel ?? 'x', yLabel: out.yLabel ?? 'y', values, controls: spec.controls };
}

let serial = 0;
export function createInvestigation(id) {
  const spec = INVESTIGATIONS[id];
  if (!spec) throw new Error(`unknown investigation "${id}"`);
  const saved = store.get('investigation:' + id) ?? { prediction: '', explanation: '', values: {} };
  const block = el('figure', 'lucent-block lucent-investigation'); block.dataset.investigation = id;
  const caption = el('figcaption', 'lucent-caption'), title = el('span', 'lucent-title', 'Explore a mathematical question');
  caption.append(el('span', 'lucent-badge', 'Linked investigation'), title);
  const uid = 'lucent-inv-' + (++serial);
  const before = el('div'), pl = el('label', '', 'Before moving the controls, write a prediction'), prediction = el('textarea'); pl.htmlFor = prediction.id = uid + '-p'; prediction.value = saved.prediction;
  before.append(markdown(spec.prompt), pl, prediction);
  const after = el('div'), el2 = el('label', '', 'After exploring, explain the pattern and its limits'), explanation = el('textarea'); el2.htmlFor = explanation.id = uid + '-e'; explanation.value = saved.explanation; after.append(el2, explanation);
  const save = () => store.set('investigation:' + id, { prediction: prediction.value, explanation: explanation.value, values });
  prediction.addEventListener('input', save); explanation.addEventListener('input', save);
  const controls = el('div', 'lucent-controls'); controls.setAttribute('role', 'group'); controls.setAttribute('aria-label', 'Investigation parameters');
  const viewsHost = el('div', 'lucent-views'), data = el('dl', 'lucent-data'), notes = el('div', 'lucent-md'), status = el('p', 'lucent-status'); status.setAttribute('role', 'status');
  const values = {}; for (const c of spec.controls) values[c.name] = saved.values?.[c.name] >= c.min && saved.values?.[c.name] <= c.max ? saved.values[c.name] : c.default;
  let boards = [], viewSignature = '';
  const render = () => {
    let result;
    try { result = runInvestigation(id, values); status.textContent = ''; } catch (error) { status.textContent = 'Could not update investigation: ' + error.message; return; }
    const all = [{ title: result.main.title, scene: result.main, xLabel: result.xLabel, yLabel: result.yLabel }, ...result.views];
    const sig = all.map(v => v.title).join('|');
    if (sig !== viewSignature) {
      for (const b of boards) b.destroy(); boards = []; viewSignature = sig; viewsHost.replaceChildren();
      for (const v of all) { const card = el('div'), host = el('div'); card.append(el('h4', '', v.title), host); viewsHost.append(card); boards.push(new Board(host, { equal: v.scene.equal, label: v.title, xLabel: v.xLabel, yLabel: v.yLabel })); }
    }
    title.textContent = result.main.title;
    all.forEach((v, i) => { boards[i].xLabel = v.xLabel; boards[i].yLabel = v.yLabel; boards[i].draw(v.scene); });
    data.replaceChildren(...result.data.map(d => { const card = el('div', 'lucent-datum'), dt = el('dt', '', d.label), dd = el('dd'); dd.append(el('output', '', pretty(d.value) + (d.unit ? ' ' + d.unit : '')), el('small', '', d.meaning)); card.append(dt, dd); return card; }));
    notes.replaceChildren(...result.notes.map(n => el('p', '', n)));
  };
  const update = schedule(() => { render(); });
  for (const c of spec.controls) { const row = sliderRow({ name: c.name, label: c.label, min: c.min, max: c.max }, c.step, values[c.name], v => { values[c.name] = v; save(); update(); }, uid); controls.append(row.row); }
  block.append(caption, before, el('p', 'lucent-note', 'Move the mathematics'), viewsHost, controls, data, notes, status, after);
  loadJSXGraph().then(render).catch(error => block.prepend(errorBox(error.message)));
  return block;
}
