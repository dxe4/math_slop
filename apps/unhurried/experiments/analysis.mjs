// Finite, deterministic companions to the analysis and calculus articles.
// Every table is computed from the selected mathematical model, not raster samples.
import * as visual from './visuals-analysis.mjs';

function number(state, key, min, max, fallback, integer = false) {
  const raw = state?.[key] === undefined ? fallback : state[key];
  if (raw === null || typeof raw === 'boolean' || typeof raw === 'object' || String(raw).trim() === '') {
    throw new RangeError(`${key} must be a finite number from ${min} to ${max}.`);
  }
  const value = Number(raw);
  if (!Number.isFinite(value) || value < min || value > max || (integer && !Number.isInteger(value))) {
    throw new RangeError(`${key} must be ${integer ? 'an integer' : 'a finite number'} from ${min} to ${max}.`);
  }
  return value;
}

function select(state, key, allowed, fallback) {
  const value = state?.[key] ?? fallback;
  if (!allowed.includes(value)) throw new RangeError(`${key} must be one of ${allowed.join(', ')}.`);
  return value;
}

function fmt(value, digits = 8) {
  if (typeof value === 'string') return value;
  if (!Number.isFinite(value)) return String(value);
  if (value === 0) return '0';
  return Number(value.toPrecision(digits)).toString();
}

function result(summary, formula, headers, rows, svg) {
  return { summary, formula, headers, rows: rows.map(row => row.map(cell => fmt(cell))), svg };
}

function squareNorm(x, y) { return Math.hypot(x, y); }

function complexDivide(ar, ai, br, bi) {
  const d = br * br + bi * bi;
  return [(ar * br + ai * bi) / d, (ai * br - ar * bi) / d];
}

function outwardBracket(left, right) {
  // Pad the displayed endpoints by one trillionth. Short decimal formatting
  // can otherwise move an endpoint just inside an irrational root.
  const lower = Math.floor(left * 1e12 - 1) / 1e12;
  const upper = Math.ceil(right * 1e12 + 1) / 1e12;
  return { lower, upper, label: `[${lower}, ${upper}]`, width: String(upper - lower) };
}

function circleIntegral(cx, cy, radius, direction, integrand, slices = 2048) {
  let real = 0;
  let imaginary = 0;
  for (let j = 0; j < slices; j += 1) {
    const angle = direction * 2 * Math.PI * (j + 0.5) / slices;
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    const zr = cx + radius * cosine;
    const zi = cy + radius * sine;
    const denominator = integrand === 'one-over-z'
      ? [zr, zi]
      : [1 + zr * zr - zi * zi, 2 * zr * zi];
    const [fr, fi] = complexDivide(1, 0, ...denominator);
    const dzr = -direction * radius * sine;
    const dzi = direction * radius * cosine;
    real += (fr * dzr - fi * dzi) * 2 * Math.PI / slices;
    imaginary += (fr * dzi + fi * dzr) * 2 * Math.PI / slices;
  }
  return [real, imaginary];
}

export const experiments = [
  {
    id: 'lab-calc-secant', title: 'From secant to tangent',
    question: 'What slope does a nearby secant have, and what happens at a corner?',
    prediction: 'For x² the exact slope is 2a+h. At the origin, |x| has opposite one-sided slopes.',
    explanation: 'The quotient uses nonzero signed h. Comparing either side of the base point exposes the corner.',
    limitations: 'Finite h values illustrate a limit; they do not prove one. Very small direct floating-point subtractions can lose digits.',
    controls: [
      { key: 'function', label: 'Function', type: 'select', value: 'square', options: [{ value: 'square', label: 'x²' }, { value: 'absolute', label: '|x|' }] },
      { key: 'a', label: 'Base point a', type: 'range', min: -3, max: 3, step: 0.25, value: 0 },
      { key: 'magnitude', label: 'Distance |h|', type: 'range', min: 0.001, max: 1, step: 0.001, value: 0.5 },
      { key: 'side', label: 'Approach side', type: 'select', value: 'right', options: [{ value: 'right', label: 'Right (+h)' }, { value: 'left', label: 'Left (−h)' }] }
    ],
    evaluate(state) {
      const kind = select(state, 'function', ['square', 'absolute'], 'square');
      const a = number(state, 'a', -3, 3, 0);
      const magnitude = number(state, 'magnitude', 0.001, 1, 0.5);
      const side = select(state, 'side', ['right', 'left'], 'right');
      const h = (side === 'right' ? 1 : -1) * magnitude;
      const slope = kind === 'square' ? 2 * a + h : (Math.abs(a + h) - Math.abs(a)) / h;
      const derivative = kind === 'square' ? 2 * a : a === 0 ? null : Math.sign(a);
      const error = derivative === null ? 'undefined' : fmt(Math.abs(slope - derivative));
      const oppositeH = -h;
      const opposite = kind === 'square' ? 2 * a + oppositeH : (Math.abs(a + oppositeH) - Math.abs(a)) / oppositeH;
      return result(
        derivative === null ? `At a = 0, |x| has right slope 1 and left slope −1; no derivative exists.` : `The signed secant slope is ${fmt(slope)}; the derivative at a is ${fmt(derivative)}.`,
        kind === 'square' ? '(f(a+h)−f(a))/h = 2a+h for h≠0.' : '(f(a+h)−f(a))/h = (|a+h|−|a|)/h for h≠0.',
        ['Approach', 'Signed h', 'Secant slope', 'Derivative at a', 'Absolute error'],
        [[side, h, slope, derivative === null ? 'undefined' : derivative, error], [side === 'right' ? 'left' : 'right', oppositeH, opposite, derivative === null ? 'undefined' : derivative, derivative === null ? 'undefined' : Math.abs(opposite - derivative)]],
        visual.secant({ kind, a, h, slope, derivative })
      );
    }
  },
  {
    id: 'lab-calc-sums', title: 'Area between two honest bounds',
    question: 'How tightly do endpoint rectangles trap area under an increasing curve?',
    prediction: 'For x and x² on [0,1], lower ≤ integral ≤ upper, and the gap is exactly 1/n.',
    explanation: 'On each cell an increasing function lies between its left and right endpoint heights. Adding those rectangle areas gives bounds.',
    limitations: 'These endpoint bounds rely on monotonicity. They cannot be transferred to a nonmonotone function without finding cell extrema.',
    controls: [
      { key: 'function', label: 'Function', type: 'select', value: 'square', options: [{ value: 'linear', label: 'x' }, { value: 'square', label: 'x²' }] },
      { key: 'n', label: 'Equal-width rectangles', type: 'range', min: 1, max: 200, step: 1, value: 4 },
      { key: 'view', label: 'Sums to emphasize', type: 'select', value: 'both', options: [{ value: 'both', label: 'Both' }, { value: 'lower', label: 'Lower' }, { value: 'upper', label: 'Upper' }] }
    ],
    evaluate(state) {
      const kind = select(state, 'function', ['linear', 'square'], 'square');
      const n = number(state, 'n', 1, 200, 4, true);
      const view = select(state, 'view', ['both', 'lower', 'upper'], 'both');
      const lower = kind === 'linear' ? (n - 1) / (2 * n) : (n - 1) * (2 * n - 1) / (6 * n * n);
      const upper = kind === 'linear' ? (n + 1) / (2 * n) : (n + 1) * (2 * n + 1) / (6 * n * n);
      const integral = kind === 'linear' ? 0.5 : 1 / 3;
      const exactLower = kind === 'linear' ? `(n−1)/(2n) = ${n - 1}/${2 * n}` : `(n−1)(2n−1)/(6n²) = ${(n - 1) * (2 * n - 1)}/${6 * n * n}`;
      const exactUpper = kind === 'linear' ? `(n+1)/(2n) = ${n + 1}/${2 * n}` : `(n+1)(2n+1)/(6n²) = ${(n + 1) * (2 * n + 1)}/${6 * n * n}`;
      const rows = [
        ['Lower', exactLower, lower], ['Integral', kind === 'linear' ? '1/2' : '1/3', integral],
        ['Upper', exactUpper, upper], ['Upper − lower', `1/${n}`, 1 / n]
      ];
      const shown = view === 'both' ? rows : view === 'lower' ? [rows[0], rows[1], rows[3]] : [rows[1], rows[2], rows[3]];
      return result(`${view === 'both' ? 'Both bounds' : `${view} bound`} selected. For n = ${n}, the integral lies in [${fmt(lower)}, ${fmt(upper)}].`, 'Each cell has width 1/n; Lₙ ≤ ∫₀¹f(x)dx ≤ Uₙ, with Uₙ−Lₙ = 1/n.', ['Quantity', 'Exact expression', 'Decimal'], shown, visual.sums({ kind, n, view }));
    }
  },
  {
    id: 'lab-multi-gradient', title: 'A direction finder on a landscape',
    question: 'How well does a gradient predict a finite move?',
    prediction: 'The directional derivative is ∇f·u; a quadratic finite move adds a second-order positive term.',
    explanation: 'For f(x,y)=(Ax²+By²)/2 with A,B>0, ∇f=(Ax,By). The unit vector comes from the chosen angle.',
    limitations: 'The derivative is a local prediction. A large step includes curvature and need not match it.',
    controls: [
      { key: 'x', label: 'Point x', type: 'range', min: -3, max: 3, step: 0.1, value: 1 },
      { key: 'y', label: 'Point y', type: 'range', min: -3, max: 3, step: 0.1, value: 1 },
      { key: 'angle', label: 'Direction angle (degrees)', type: 'range', min: -180, max: 180, step: 1, value: 45 },
      { key: 'a', label: 'Positive x curvature A', type: 'range', min: 0.25, max: 4, step: 0.25, value: 2 },
      { key: 'b', label: 'Positive y curvature B', type: 'range', min: 0.25, max: 4, step: 0.25, value: 1 },
      { key: 'step', label: 'Move length', type: 'range', min: 0.1, max: 2, step: 0.1, value: 0.5 }
    ],
    evaluate(state) {
      const x = number(state, 'x', -3, 3, 1), y = number(state, 'y', -3, 3, 1);
      const angle = number(state, 'angle', -180, 180, 45) * Math.PI / 180;
      const a = number(state, 'a', 0.25, 4, 2), b = number(state, 'b', 0.25, 4, 1);
      const h = number(state, 'step', 0.1, 2, 0.5);
      const ux = Math.cos(angle), uy = Math.sin(angle);
      const gx = a * x, gy = b * y;
      const directional = gx * ux + gy * uy;
      const predicted = h * directional;
      const curvature = 0.5 * h * h * (a * ux * ux + b * uy * uy);
      return result(`Gradient (${fmt(gx)}, ${fmt(gy)}) gives directional derivative ${fmt(directional)}. The actual height change is ${fmt(predicted + curvature)}.`, 'f(x+hu)−f(x) = h(∇f·u) + h²(Auₓ²+Buᵧ²)/2; |u|=1.', ['Quantity', 'Value', 'Meaning'], [['uₓ', ux, 'unit direction x'], ['uᵧ', uy, 'unit direction y'], ['∇f·u', directional, 'instantaneous rate'], ['h∇f·u', predicted, 'linear prediction'], ['Actual Δf', predicted + curvature, 'finite move'], ['Actual − prediction', curvature, 'curvature term']], visual.gradient({ x, y, a, b, ux, uy, h, gx, gy }));
    }
  },
  {
    id: 'lab-multi-circulation', title: 'A hole inside the loop',
    question: 'Can a curl-free field circulate around a hole?',
    prediction: 'The gradient field has zero circulation. The punctured-plane vortex has signed 2π around the origin and zero when the origin lies outside.',
    explanation: 'The vortex F=(-y,x)/(x²+y²) is undefined at the origin. Its circle circulation depends on winding around that missing point.',
    limitations: 'The midpoint integral is numerical. A path through the singularity has no circulation in this model; zero curl away from the hole alone gives no global potential.',
    controls: [
      { key: 'field', label: 'Vector field', type: 'select', value: 'vortex', options: [{ value: 'vortex', label: 'Punctured-plane vortex' }, { value: 'gradient', label: 'Gradient of x²+y²' }] },
      { key: 'cx', label: 'Circle center x', type: 'range', min: -2, max: 2, step: 0.1, value: 0 },
      { key: 'cy', label: 'Circle center y', type: 'range', min: -2, max: 2, step: 0.1, value: 0 },
      { key: 'radius', label: 'Radius', type: 'range', min: 0.2, max: 2, step: 0.1, value: 1 },
      { key: 'orientation', label: 'Orientation', type: 'select', value: 'ccw', options: [{ value: 'ccw', label: 'Counterclockwise' }, { value: 'cw', label: 'Clockwise' }] }
    ],
    evaluate(state) {
      const field = select(state, 'field', ['vortex', 'gradient'], 'vortex');
      const cx = number(state, 'cx', -2, 2, 0), cy = number(state, 'cy', -2, 2, 0);
      const radius = number(state, 'radius', 0.2, 2, 1);
      const direction = select(state, 'orientation', ['ccw', 'cw'], 'ccw') === 'ccw' ? 1 : -1;
      const distance = Math.hypot(cx, cy);
      const clearance = Math.abs(distance - radius);
      if (field === 'vortex' && clearance < 1e-9) throw new RangeError('The circle touches the vortex singularity at the origin. Move its center or radius.');
      const enclosed = distance < radius;
      const analytic = field === 'gradient' ? 0 : enclosed ? direction * 2 * Math.PI : 0;
      let estimate = 0;
      const slices = 2048;
      for (let j = 0; j < slices; j += 1) {
        const t = direction * 2 * Math.PI * (j + 0.5) / slices;
        const c = Math.cos(t), s = Math.sin(t);
        const x = cx + radius * c, y = cy + radius * s;
        const fx = field === 'gradient' ? 2 * x : -y / (x * x + y * y);
        const fy = field === 'gradient' ? 2 * y : x / (x * x + y * y);
        estimate += (fx * (-direction * radius * s) + fy * (direction * radius * c)) * 2 * Math.PI / slices;
      }
      const analyticLabel = field === 'gradient' || !enclosed ? '0' : direction === 1 ? '+2π' : '−2π';
      return result(`${field === 'gradient' ? 'Gradient field' : enclosed ? 'Vortex with origin inside' : 'Vortex with origin outside'}: analytic circulation ${analyticLabel}; midpoint estimate ${fmt(estimate)}.${field === 'vortex' && clearance < 0.05 ? ' The circle is near the singularity; quadrature may be inaccurate.' : ''}`, '∮ F·dr = 0 for ∇(x²+y²); for the vortex it is 2π times oriented winding number.', ['Quantity', 'Value', 'Interpretation'], [['Distance center to origin', distance, 'compare with radius'], ['Radius', radius, 'circle size'], ['Origin enclosed?', field === 'gradient' ? 'not relevant' : enclosed ? 'yes' : 'no', 'singularity check'], ['Analytic circulation', analyticLabel, 'exact'], ['Midpoint estimate', estimate, `${slices} equal angle samples`], ['Absolute discrepancy', Math.abs(estimate - analytic), 'quadrature only']], visual.circulation({ field, cx, cy, radius, direction, enclosed }));
    }
  },
  {
    id: 'lab-real-tolerance', title: 'Choose a delta that keeps the promise',
    question: 'Does a proposed δ certify the ε promise for every nearby x?',
    prediction: 'For 2x, δ≤ε/2 suffices. For x² at a, δ(2|a|+δ)≤ε suffices.',
    explanation: 'An algebraic bound covers all 0<|x−a|<δ; checking finitely many sample points would not.',
    limitations: 'The table certifies the specified global functions only. Equality in the bound is allowed because the δ-neighborhood is strict.',
    controls: [
      { key: 'function', label: 'Function', type: 'select', value: 'square', options: [{ value: 'double', label: '2x' }, { value: 'square', label: 'x²' }] },
      { key: 'epsilon', label: 'Target ε', type: 'range', min: 0.01, max: 3, step: 0.01, value: 0.5 },
      { key: 'delta', label: 'Proposed δ', type: 'range', min: 0.01, max: 2, step: 0.01, value: 0.25 },
      { key: 'a', label: 'Base point a', type: 'range', min: -3, max: 3, step: 0.1, value: 1 }
    ],
    evaluate(state) {
      const kind = select(state, 'function', ['double', 'square'], 'square');
      const epsilon = number(state, 'epsilon', 0.01, 3, 0.5);
      const delta = number(state, 'delta', 0.01, 2, 0.25);
      const a = number(state, 'a', -3, 3, 1);
      const bound = kind === 'double' ? 2 * delta : delta * (2 * Math.abs(a) + delta);
      const sufficient = kind === 'double' ? epsilon / 2 : epsilon / (Math.sqrt(a * a + epsilon) + Math.abs(a));
      const certified = bound <= epsilon;
      return result(`For ${kind === 'double' ? 'f(x)=2x' : 'f(x)=x²'} at a=${fmt(a)}, the proposed δ=${fmt(delta)} ${certified ? 'certifies' : 'does not certify'} ε=${fmt(epsilon)} by the displayed all-points bound.`, kind === 'double' ? '|f(x)−f(a)|=2|x−a|<2δ.' : '|x²−a²|=|x−a||x+a|<δ(2|a|+δ).', ['Quantity', 'Value', 'Role'], [['Target ε', epsilon, 'strict output threshold'], ['Proposed δ', delta, 'strict input radius'], ['Sufficient upper bound', bound, certified ? 'at most ε' : 'exceeds ε'], ['Threshold δ from this bound (approx.)', sufficient, 'check the inequality to certify']], visual.tolerance({ kind, a, epsilon, delta, bound, certified }));
    }
  },
  {
    id: 'lab-real-convergence', title: 'A shrinking spike with stubborn area',
    question: 'Can pointwise convergence fail to control integrals or uniform error?',
    prediction: 'The spike tends pointwise to zero but always integrates to 1. For xⁿ, the integral tends to zero, though convergence is not uniform.',
    explanation: 'The spike is n on 0<x<1/n and zero elsewhere. Its width times height is exactly one; sampling pixels could miss it. No one integrable function dominates every spike: for any δ>0, some spike fits inside (0,δ) with integral 1, contrary to absolute continuity of an integrable majorant’s integral.',
    limitations: 'Finite n and a probe point illustrate formulas. Pointwise convergence and failure of domination require arguments over all n and x.',
    controls: [
      { key: 'sequence', label: 'Sequence', type: 'select', value: 'spike', options: [{ value: 'spike', label: 'n·1_(0,1/n)' }, { value: 'power', label: 'xⁿ' }] },
      { key: 'n', label: 'Sequence index n', type: 'range', min: 1, max: 1000, step: 1, value: 10 },
      { key: 'x', label: 'Probe x', type: 'range', min: 0, max: 1, step: 0.001, value: 0.05 }
    ],
    evaluate(state) {
      const kind = select(state, 'sequence', ['spike', 'power'], 'spike');
      const n = number(state, 'n', 1, 1000, 10, true);
      const x = number(state, 'x', 0, 1, 0.05);
      const current = kind === 'spike' ? (x > 0 && x < 1 / n ? n : 0) : x ** n;
      const limit = kind === 'spike' ? 0 : x === 1 ? 1 : 0;
      const integral = kind === 'spike' ? 1 : 1 / (n + 1);
      const supremum = kind === 'spike' ? n : 1;
      return result(kind === 'spike' ? `At n=${n}, the spike has exact area 1 even though its pointwise limit is zero everywhere.` : `At n=${n}, ∫₀¹xⁿdx=${fmt(integral)}, but the supremum error from the pointwise limit is 1 for every n.`, kind === 'spike' ? 'fₙ(x)=n·1_(0,1/n)(x); ∫₀¹fₙ=1; fₙ(x)→0 for each fixed x.' : 'fₙ(x)=xⁿ; ∫₀¹fₙ=1/(n+1); limit is 0 on [0,1) and 1 at x=1.', ['Quantity', 'Exact or computed value', 'Interpretation'], [['fₙ(probe x)', current, `x=${fmt(x)}`], ['Pointwise limit at probe', limit, 'fixed x as n→∞'], ['Exact integral of fₙ', kind === 'spike' ? '1' : `1/${n + 1}`, kind === 'spike' ? 'constant area' : `≈${fmt(integral)}; tends to zero`], ['Supremum error from limit', kind === 'spike' ? `${n}` : '1', kind === 'spike' ? 'grows with n' : 'always 1']], visual.convergence({ kind, n, x }));
    }
  },
  {
    id: 'lab-complex-multiply', title: 'Turn and stretch with one number',
    question: 'What do magnitude and angle do to a complex number?',
    prediction: 'Multiplication scales length by |w| and adds arguments modulo a full turn when z and w are nonzero.',
    explanation: 'The Cartesian product is computed from w=r(cos θ+i sin θ), so the turn and stretch can be checked independently.',
    limitations: 'Arguments are undefined at zero. Reported angles and trigonometric components are floating-point approximations.',
    controls: [
      { key: 'real', label: 'Input real part', type: 'range', min: -3, max: 3, step: 0.1, value: 1 },
      { key: 'imaginary', label: 'Input imaginary part', type: 'range', min: -3, max: 3, step: 0.1, value: 1 },
      { key: 'magnitude', label: 'Multiplier magnitude', type: 'range', min: 0, max: 3, step: 0.1, value: 2 },
      { key: 'angle', label: 'Multiplier angle (degrees)', type: 'range', min: -180, max: 180, step: 1, value: 90 }
    ],
    evaluate(state) {
      const a = number(state, 'real', -3, 3, 1), b = number(state, 'imaginary', -3, 3, 1);
      const radius = number(state, 'magnitude', 0, 3, 2);
      const angle = number(state, 'angle', -180, 180, 90) * Math.PI / 180;
      const wr = radius * Math.cos(angle), wi = radius * Math.sin(angle);
      const zr = a * wr - b * wi, zi = a * wi + b * wr;
      const inputLength = squareNorm(a, b), productLength = squareNorm(zr, zi);
      const inputAngle = inputLength > 0 ? Math.atan2(b, a) * 180 / Math.PI : 'undefined';
      const productAngle = productLength > 0 ? Math.atan2(zi, zr) * 180 / Math.PI : 'undefined';
      return result(`Product = ${fmt(zr)} ${zi < 0 ? '−' : '+'} ${fmt(Math.abs(zi))}i; its length is ${fmt(productLength)}.${productLength > 0 ? ` Its principal angle is ${fmt(productAngle)}°.` : ' Its argument is undefined at zero.'}`, '(a+bi)·r(cos θ+i sin θ) = r(a cos θ−b sin θ)+ir(a sin θ+b cos θ); arg(zw)≡arg(z)+θ mod 360° when z,w≠0.', ['Quantity', 'Real or length', 'Imaginary or angle'], [['Input z', a, b], ['Multiplier w', wr, wi], ['Product zw', zr, zi], ['Input length / angle (degrees)', inputLength, inputAngle], ['Multiplier length / angle (degrees)', radius, radius > 0 ? angle * 180 / Math.PI : 'undefined'], ['Product length / angle (degrees)', productLength, productAngle], ['Expected product length', inputLength * radius, 'exact magnitude identity']], visual.multiply({ a, b, wr, wi, zr, zi, radius }));
    }
  },
  {
    id: 'lab-complex-contour', title: 'What a loop encloses',
    question: 'Which poles contribute to a circle integral?',
    prediction: 'The contour integral equals oriented 2πi times the sum of enclosed residues, provided no pole lies on the circle.',
    explanation: 'The poles are 0 for 1/z and ±i for 1/(1+z²). Midpoint quadrature separately estimates real and imaginary components.',
    limitations: 'The residue value uses the stated residue theorem; quadrature is only a numerical comparison and may lose accuracy near a pole.',
    controls: [
      { key: 'integrand', label: 'Integrand', type: 'select', value: 'one-over-z', options: [{ value: 'one-over-z', label: '1/z' }, { value: 'one-over-one-plus-z2', label: '1/(1+z²)' }] },
      { key: 'cx', label: 'Circle center real', type: 'range', min: -2, max: 2, step: 0.1, value: 0 },
      { key: 'cy', label: 'Circle center imaginary', type: 'range', min: -2, max: 2, step: 0.1, value: 0 },
      { key: 'radius', label: 'Circle radius', type: 'range', min: 0.2, max: 2.5, step: 0.1, value: 1.5 },
      { key: 'orientation', label: 'Orientation', type: 'select', value: 'ccw', options: [{ value: 'ccw', label: 'Counterclockwise' }, { value: 'cw', label: 'Clockwise' }] }
    ],
    evaluate(state) {
      const integrand = select(state, 'integrand', ['one-over-z', 'one-over-one-plus-z2'], 'one-over-z');
      const cx = number(state, 'cx', -2, 2, 0), cy = number(state, 'cy', -2, 2, 0);
      const radius = number(state, 'radius', 0.2, 2.5, 1.5);
      const direction = select(state, 'orientation', ['ccw', 'cw'], 'ccw') === 'ccw' ? 1 : -1;
      const poles = integrand === 'one-over-z' ? [{ label: '0', x: 0, y: 0, rr: 1, ri: 0 }] : [{ label: '+i', x: 0, y: 1, rr: 0, ri: -0.5 }, { label: '−i', x: 0, y: -1, rr: 0, ri: 0.5 }];
      const distances = poles.map(p => Math.hypot(cx - p.x, cy - p.y));
      if (distances.some(d => Math.abs(d - radius) < 1e-9)) throw new RangeError('A pole lies on the contour, so this integral is undefined. Change center or radius.');
      const enclosed = poles.filter((p, i) => distances[i] < radius);
      const sumR = enclosed.reduce((v, p) => v + p.rr, 0);
      const sumI = enclosed.reduce((v, p) => v + p.ri, 0);
      const analyticR = -direction * 2 * Math.PI * sumI;
      const analyticI = direction * 2 * Math.PI * sumR;
      const [numericR, numericI] = circleIntegral(cx, cy, radius, direction, integrand);
      const nearest = Math.min(...distances.map(d => Math.abs(d - radius)));
      return result(`Enclosed poles: ${enclosed.length ? enclosed.map(p => p.label).join(', ') : 'none'}. Analytic integral ${fmt(analyticR)} ${analyticI < 0 ? '−' : '+'} ${fmt(Math.abs(analyticI))}i.${nearest < 0.05 ? ' A pole is close to the path; the quadrature estimate may be unreliable.' : ''}`, '∮f(z)dz = (orientation)·2πi·Σ enclosed residues; poles on the path are excluded.', ['Quantity', 'Real component', 'Imaginary component'], [['Sum of enclosed residues', sumR, sumI], ['Analytic contour integral', analyticR, analyticI], ['Midpoint quadrature', numericR, numericI], ['Absolute component error', Math.abs(numericR - analyticR), Math.abs(numericI - analyticI)], ['Nearest pole clearance', nearest, 'distance from circle']], visual.contour({ integrand, cx, cy, radius, direction, enclosed: enclosed.map(p => p.label) }));
    }
  },
  {
    id: 'lab-ode-field', title: 'Exact curves and an approximate walk',
    question: 'How far can Euler steps drift from an exact decay curve?',
    prediction: 'For y′=−ky, exact y=y₀e^(−kt) stays positive for y₀>0. Euler multiplies by 1−kh each step.',
    explanation: 'Rows compare the exact solution and repeated Euler steps at the same times.',
    limitations: 'Euler oscillation or growth at large kh is a solver artifact of this discretization, not behavior of the continuous decay model.',
    controls: [
      { key: 'initial', label: 'Initial amount y₀', type: 'range', min: 0.1, max: 5, step: 0.1, value: 2 },
      { key: 'rate', label: 'Positive rate k (per time)', type: 'range', min: 0.1, max: 3, step: 0.1, value: 1 },
      { key: 'step', label: 'Time step h', type: 'range', min: 0.05, max: 1.2, step: 0.05, value: 0.5 },
      { key: 'focus', label: 'Comparison focus', type: 'select', value: 'both', options: [{ value: 'both', label: 'Exact and Euler' }, { value: 'exact', label: 'Exact curve' }, { value: 'euler', label: 'Euler walk' }] }
    ],
    evaluate(state) {
      const initial = number(state, 'initial', 0.1, 5, 2), rate = number(state, 'rate', 0.1, 3, 1);
      const step = number(state, 'step', 0.05, 1.2, 0.5);
      const focus = select(state, 'focus', ['both', 'exact', 'euler'], 'both');
      const count = Math.min(30, Math.floor(5 / step));
      const factor = 1 - rate * step;
      const rows = [];
      for (let j = 0; j <= count; j += 1) {
        const t = j * step;
        const exact = initial * Math.exp(-rate * t);
        const euler = initial * factor ** j;
        rows.push([j, t, exact, euler, Math.abs(exact - euler)]);
      }
      const behavior = factor < 0 ? Math.abs(factor) < 1 ? 'Euler alternates sign while its magnitude shrinks.' : 'Euler alternates sign without decay.' : factor === 0 ? 'Euler reaches zero in one step.' : 'Euler stays nonnegative and decays.';
      const headers = focus === 'exact' ? ['Step j', 'Time', 'Exact y', 'Exact change since prior step'] : focus === 'euler' ? ['Step j', 'Time', 'Euler y', 'Exact reference', 'Absolute error'] : ['Step j', 'Time', 'Exact y', 'Euler y', 'Absolute error'];
      const shown = focus === 'exact' ? rows.map((row, j) => [row[0], row[1], row[2], j === 0 ? '—' : row[2] - rows[j - 1][2]]) : focus === 'euler' ? rows.map(row => [row[0], row[1], row[3], row[2], row[4]]) : rows;
      return result(`${focus === 'both' ? 'Exact and Euler' : focus === 'exact' ? 'Exact' : 'Euler'} focus. Exact y(${fmt(count * step)})=${fmt(rows.at(-1)[2])}; Euler=${fmt(rows.at(-1)[3])}. ${behavior}`, 'Exact: y(t)=y₀e^(−kt). Euler: yⱼ=y₀(1−kh)ʲ, at tⱼ=jh.', headers, shown, visual.odeField({ initial, rate, step, focus, rows }));
    }
  },
  {
    id: 'lab-ode-bifurcation', title: 'Watch two equilibria meet',
    question: 'How do equilibria of x′=μ−x² change as μ crosses zero?',
    prediction: 'Two equilibria exist for μ>0, one nonhyperbolic equilibrium for μ=0, and none for μ<0.',
    explanation: 'Solving μ−x²=0 gives the equilibria; derivative −2x classifies simple equilibria. A bounded numerical trajectory adds context.',
    limitations: 'At μ=0 linearization is inconclusive; arrows give one-sided behavior. Trajectories that grow past the display cap are stopped before overflow, not continued through blow-up.',
    controls: [
      { key: 'mu', label: 'Parameter μ', type: 'range', min: -2, max: 2, step: 0.1, value: 1 },
      { key: 'initial', label: 'Initial x', type: 'range', min: -2, max: 2, step: 0.1, value: 0 },
      { key: 'horizon', label: 'Time horizon', type: 'range', min: 0.5, max: 5, step: 0.5, value: 2 }
    ],
    evaluate(state) {
      const mu = number(state, 'mu', -2, 2, 1);
      const initial = number(state, 'initial', -2, 2, 0);
      const horizon = number(state, 'horizon', 0.5, 5, 2);
      const equilibria = mu > 0 ? [-Math.sqrt(mu), Math.sqrt(mu)] : mu === 0 ? [0] : [];
      const rows = equilibria.map(x => [fmt(x), '0', fmt(-2 * x), mu === 0 ? 'nonhyperbolic; attracts from right, repels to left' : x < 0 ? 'unstable' : 'stable']);
      for (const x of [-2, -1, 0, 1, 2]) {
        const velocity = mu - x * x;
        rows.push([fmt(x), fmt(velocity), '—', velocity > 1e-12 ? 'arrow right' : velocity < -1e-12 ? 'arrow left' : 'equilibrium']);
      }
      const steps = Math.ceil(horizon / 0.005), dt = horizon / steps;
      let position = initial, stopTime = null;
      const trace = [[0, initial]];
      const f = x => mu - x * x;
      for (let j = 0; j < steps; j += 1) {
        const k1 = f(position), k2 = f(position + dt * k1 / 2);
        const k3 = f(position + dt * k2 / 2), k4 = f(position + dt * k3);
        const next = position + dt * (k1 + 2 * k2 + 2 * k3 + k4) / 6;
        if (!Number.isFinite(next) || Math.abs(next) > 50) { stopTime = j * dt; break; }
        position = next;
        if (j % 10 === 9 || j === steps - 1) trace.push([(j + 1) * dt, position]);
      }
      rows.push([stopTime === null ? `trajectory at t=${fmt(horizon)}` : `trajectory stopped near t=${fmt(stopTime)}`, fmt(position), '—', stopTime === null ? 'RK4 estimate' : '|x| exceeded 50 display cap']);
      return result(`${equilibria.length} ${equilibria.length === 1 ? 'equilibrium' : 'equilibria'} for μ=${fmt(mu)}. ${stopTime === null ? `The bounded numerical walk reaches x≈${fmt(position)} at t=${fmt(horizon)}.` : 'The numerical walk stopped near rapid unbounded decrease.'}`, 'x′=μ−x²; equilibrium x²=μ; derivative of the vector field is −2x.', ['Position or row', 'x′ or value', 'Derivative −2x', 'Direction or stability'], rows, visual.bifurcation({ mu, initial, horizon, equilibria, trace, stopped: stopTime !== null }));
    }
  },
  {
    id: 'lab-num-root', title: 'A fast guess and a guaranteed bracket',
    question: 'How do bisection guarantees and Newton guesses behave side by side?',
    prediction: 'A validated sign-changing bracket keeps the unique root. Newton can be faster, but its derivative can vanish.',
    explanation: 'Both presets are continuous and strictly increasing. Bisection uses opposite signs; Newton uses a tangent at each iterate.',
    limitations: 'Residual and root error are separate quantities. Newton rows explicitly stop if the derivative is too small or an iterate escapes the finite model.',
    controls: [
      { key: 'function', label: 'Function', type: 'select', value: 'cubic', options: [{ value: 'cubic', label: 'x³−2' }, { value: 'exponential', label: 'eˣ−2' }] },
      { key: 'left', label: 'Bracket left endpoint', type: 'range', min: -2, max: 3, step: 0.1, value: 0 },
      { key: 'right', label: 'Bracket right endpoint', type: 'range', min: -2, max: 3, step: 0.1, value: 2 },
      { key: 'guess', label: 'Newton initial guess', type: 'range', min: -2, max: 3, step: 0.1, value: 1 },
      { key: 'iterations', label: 'Iterations', type: 'range', min: 1, max: 20, step: 1, value: 6 }
    ],
    evaluate(state) {
      const kind = select(state, 'function', ['cubic', 'exponential'], 'cubic');
      let left = number(state, 'left', -2, 3, 0), right = number(state, 'right', -2, 3, 2);
      let newton = number(state, 'guess', -2, 3, 1);
      const iterations = number(state, 'iterations', 1, 20, 6, true);
      const f = kind === 'cubic' ? x => x ** 3 - 2 : x => Math.exp(x) - 2;
      const df = kind === 'cubic' ? x => 3 * x * x : x => Math.exp(x);
      const root = kind === 'cubic' ? Math.cbrt(2) : Math.log(2);
      if (!(left < right && f(left) < 0 && f(right) > 0)) throw new RangeError('Choose left < right with f(left) < 0 < f(right); the selected preset is strictly increasing.');
      const initialLeft = left, initialRight = right;
      const rows = [];
      let newtonFailure = '';
      for (let j = 1; j <= iterations; j += 1) {
        const middle = (left + right) / 2;
        const fm = f(middle);
        if (fm > 0) right = middle;
        else if (fm < 0) left = middle;
        // Floating-point f(middle)=0 is not a proof that an irrational root
        // equals this midpoint. Keep the certified bracket in that case.
        const bracket = outwardBracket(left, right);
        let newtonCell = 'stopped', residualCell = 'stopped', errorCell = 'stopped';
        if (!newtonFailure) {
          const derivative = df(newton);
          if (!Number.isFinite(derivative) || Math.abs(derivative) < 1e-12) newtonFailure = 'derivative too small';
          else {
            const next = newton - f(newton) / derivative;
            if (!Number.isFinite(next) || Math.abs(next) > 1e6) newtonFailure = 'iterate escaped bound';
            else { newton = next; newtonCell = newton; residualCell = Math.abs(f(newton)); errorCell = Math.abs(newton - root); }
          }
        }
        rows.push([j, bracket.label, bracket.width, newtonCell, residualCell, errorCell]);
      }
      const finalBracket = outwardBracket(left, right);
      return result(`After ${iterations} bisections, the root lies in ${finalBracket.label}, outward-rounded width ${finalBracket.width}.${newtonFailure ? ` Newton stopped: ${newtonFailure}.` : ` Newton's final reference error is ${fmt(Math.abs(newton - root))}.`}`, 'Bisection retains f(left)≤0≤f(right); Newton: xₙ₊₁=xₙ−f(xₙ)/f′(xₙ).', ['Iteration', 'Bisection bracket', 'Outward width', 'Newton x', '|f(Newton x)|', '|Newton x−root|'], rows, visual.root({ initialLeft, initialRight, bracket: finalBracket, reference: root, newton, newtonFailed: Boolean(newtonFailure) }));
    }
  },
  {
    id: 'lab-num-step-error', title: 'The step-size sweet spot',
    question: 'Why can a smaller finite-difference step give a worse derivative estimate?',
    prediction: 'The ideal forward-difference truncation shrinks with h, but subtraction in finite precision can lose significant digits.',
    explanation: 'The table separates ideal quotient, selected arithmetic result, truncation error and arithmetic error.',
    limitations: 'Native floating-point and six-significant-digit rounding are demonstrations, not rigorous universal error bounds. Zero rounded differences are shown explicitly.',
    controls: [
      { key: 'function', label: 'Function', type: 'select', value: 'square', options: [{ value: 'square', label: 'x²' }, { value: 'exponential', label: 'eˣ' }] },
      { key: 'x', label: 'Evaluation point x', type: 'range', min: 0.1, max: 2, step: 0.1, value: 1 },
      { key: 'exponent', label: 'Log step: h=10^exponent', type: 'range', min: -15, max: -1, step: 1, value: -6 },
      { key: 'precision', label: 'Arithmetic model', type: 'select', value: 'native', options: [{ value: 'native', label: 'Native JavaScript numbers' }, { value: 'toy', label: 'Six significant digits at function values' }] }
    ],
    evaluate(state) {
      const kind = select(state, 'function', ['square', 'exponential'], 'square');
      const x = number(state, 'x', 0.1, 2, 1);
      const exponent = number(state, 'exponent', -15, -1, -6, true);
      const precision = select(state, 'precision', ['native', 'toy'], 'native');
      const f = kind === 'square' ? t => t * t : t => Math.exp(t);
      const derivative = kind === 'square' ? 2 * x : Math.exp(x);
      const rounded = v => precision === 'toy' ? Number(v.toPrecision(6)) : v;
      const rows = [];
      for (const power of [...new Set([Math.max(-15, exponent - 2), exponent, Math.min(-1, exponent + 2)])].sort((a, b) => a - b)) {
        const h = 10 ** power;
        const ideal = kind === 'square' ? 2 * x + h : Math.exp(x) * Math.expm1(h) / h;
        const computed = (rounded(f(x + h)) - rounded(f(x))) / h;
        rows.push([`10^${power}`, computed, ideal, derivative, Math.abs(ideal - derivative), Math.abs(computed - ideal), Math.abs(computed - derivative)]);
      }
      const selected = rows.find(row => row[0] === `10^${exponent}`);
      return result(`At h=10^${exponent}, ${precision === 'toy' ? 'six-digit' : 'native'} difference gives ${fmt(selected[1])}, while f′(${fmt(x)})=${fmt(derivative)}.${selected[1] === 0 ? ' The rounded difference is zero.' : ''}`, kind === 'square' ? '( (x+h)²−x² )/h = 2x+h in exact arithmetic; truncation error is h.' : '(e^(x+h)−eˣ)/h = eˣ·expm1(h)/h in stable arithmetic.', ['Step h', 'Computed quotient', 'Ideal quotient', 'True derivative', 'Truncation error', 'Arithmetic error', 'Total error'], rows, visual.stepError({ kind, x, exponent, precision }));
    }
  },
  {
    id: 'lab-opt-descent', title: 'When downhill steps overshoot',
    question: 'Which fixed steps converge on a positive quadratic bowl?',
    prediction: 'For Q=diag(λ₁,λ₂)>0, every initial point converges when 0<α<2/max(λ₁,λ₂).',
    explanation: 'Each coordinate is multiplied by 1−αλ at every step, making stability transparent.',
    limitations: 'The step interval is a guarantee for this positive quadratic. An individual special starting point may converge outside it; it does not describe arbitrary nonconvex objectives.',
    controls: [
      { key: 'lambdaX', label: 'Positive curvature λ₁', type: 'range', min: 0.25, max: 5, step: 0.25, value: 1 },
      { key: 'lambdaY', label: 'Positive curvature λ₂', type: 'range', min: 0.25, max: 5, step: 0.25, value: 3 },
      { key: 'x', label: 'Initial x', type: 'range', min: -4, max: 4, step: 0.25, value: 2 },
      { key: 'y', label: 'Initial y', type: 'range', min: -4, max: 4, step: 0.25, value: 1 },
      { key: 'alpha', label: 'Step size α', type: 'range', min: 0.05, max: 2, step: 0.05, value: 0.5 },
      { key: 'iterations', label: 'Iterations', type: 'range', min: 1, max: 20, step: 1, value: 8 }
    ],
    evaluate(state) {
      const l1 = number(state, 'lambdaX', 0.25, 5, 1), l2 = number(state, 'lambdaY', 0.25, 5, 3);
      let x = number(state, 'x', -4, 4, 2), y = number(state, 'y', -4, 4, 1);
      const alpha = number(state, 'alpha', 0.05, 2, 0.5);
      const iterations = number(state, 'iterations', 1, 20, 8, true);
      const limit = 2 / Math.max(l1, l2);
      const rows = [], points = [];
      for (let j = 0; j <= iterations; j += 1) {
        points.push([x, y]);
        rows.push([j, x, y, 0.5 * (l1 * x * x + l2 * y * y), Math.hypot(l1 * x, l2 * y)]);
        x *= 1 - alpha * l1;
        y *= 1 - alpha * l2;
      }
      return result(`The all-starting-points convergence condition α<${fmt(limit)} is ${alpha < limit ? 'satisfied' : 'not satisfied'} at α=${fmt(alpha)}. At step ${iterations}, objective=${fmt(rows.at(-1)[3])}.`, 'f=(λ₁x²+λ₂y²)/2; (xₙ₊₁,yₙ₊₁)=((1−αλ₁)xₙ,(1−αλ₂)yₙ).', ['Step', 'x', 'y', 'Objective f', 'Gradient norm'], rows, visual.descent({ l1, l2, points, alpha }));
    }
  },
  {
    id: 'lab-opt-certificate', title: 'A lower bound and a feasible answer',
    question: 'When do a candidate solution and dual multipliers certify a gap?',
    prediction: 'A primal feasible objective is at least every dual feasible bound. Matching values certify an optimum.',
    explanation: 'Minimize c₁x+c₂y with x+y≥2 and 0≤x,y≤3. Dual variables cover demand and the two upper bounds.',
    limitations: 'A gap is reported only when both sides are feasible. Quarter-grid controls make the displayed inequalities exact binary-rational checks for these presets.',
    controls: [
      { key: 'preset', label: 'Objective preset', type: 'select', value: 'balanced', options: [{ value: 'balanced', label: 'Minimize x+y' }, { value: 'weighted', label: 'Minimize 2x+y' }] },
      { key: 'x', label: 'Primal candidate x', type: 'range', min: 0, max: 3, step: 0.25, value: 1 },
      { key: 'y', label: 'Primal candidate y', type: 'range', min: 0, max: 3, step: 0.25, value: 1 },
      { key: 'demand', label: 'Dual demand multiplier u', type: 'range', min: 0, max: 3, step: 0.25, value: 1 },
      { key: 'upperX', label: 'Dual x upper-bound multiplier v', type: 'range', min: 0, max: 3, step: 0.25, value: 0 },
      { key: 'upperY', label: 'Dual y upper-bound multiplier w', type: 'range', min: 0, max: 3, step: 0.25, value: 0 }
    ],
    evaluate(state) {
      const preset = select(state, 'preset', ['balanced', 'weighted'], 'balanced');
      const values = [number(state, 'x', 0, 3, 1), number(state, 'y', 0, 3, 1), number(state, 'demand', 0, 3, 1), number(state, 'upperX', 0, 3, 0), number(state, 'upperY', 0, 3, 0)];
      if (values.some(value => !Number.isInteger(value * 4))) throw new RangeError('Certificate inputs must be multiples of 1/4.');
      const [x, y, u, v, w] = values;
      const c1 = preset === 'balanced' ? 1 : 2, c2 = 1;
      const primalSlack = x + y - 2, dualXSlack = c1 - (u - v), dualYSlack = c2 - (u - w);
      const primalFeasible = primalSlack >= 0;
      const dualFeasible = dualXSlack >= 0 && dualYSlack >= 0;
      const primal = c1 * x + c2 * y, dual = 2 * u - 3 * v - 3 * w;
      const rows = [
        ['Primal', 'x+y≥2', primalSlack, primalSlack >= 0 ? 'feasible' : 'violated'],
        ['Primal', '0≤x,y≤3', Math.min(x, y, 3 - x, 3 - y), 'feasible by controls'],
        ['Dual', `u−v≤${c1}`, dualXSlack, dualXSlack >= 0 ? 'feasible' : 'violated'],
        ['Dual', `u−w≤${c2}`, dualYSlack, dualYSlack >= 0 ? 'feasible' : 'violated'],
        ['Objective', `primal ${c1}x+${c2}y`, primal, primalFeasible ? 'feasible upper bound' : 'not a bound'],
        ['Objective', 'dual 2u−3v−3w', dual, dualFeasible ? 'feasible lower bound' : 'not a bound']
      ];
      if (primalFeasible && dualFeasible) rows.push(['Certificate', 'primal−dual gap', primal - dual, primal === dual ? 'optimality certified' : 'nonnegative gap']);
      return result(primalFeasible && dualFeasible ? `Both candidates are feasible. The primal value is ${fmt(primal)}, the dual lower bound is ${fmt(dual)}, and the certificate gap is ${fmt(primal - dual)}.` : `Certificate unavailable: ${!primalFeasible ? 'primal demand is unmet' : 'primal feasible'}; ${!dualFeasible ? 'dual inequalities are violated' : 'dual feasible'}.`, `Primal: min ${c1}x+${c2}y, x+y≥2, 0≤x,y≤3. Dual: max 2u−3v−3w, u−v≤${c1}, u−w≤${c2}, u,v,w≥0.`, ['Side', 'Condition', 'Slack or value', 'Status'], rows, visual.certificate({ x, y, c1, c2, primal, dual, primalFeasible, dualFeasible }));
    }
  }
];
