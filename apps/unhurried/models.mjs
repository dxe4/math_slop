// Pure, finite models for the pilot laboratories. Domains match the controls.
function integer(name, value, min, max) {
  if (!Number.isInteger(value) || value < min || value > max) {
    throw new RangeError(`${name} must be an integer from ${min} to ${max}`);
  }
  return value;
}

function finite(name, value, min, max) {
  if (!Number.isFinite(value) || value < min || value > max) {
    throw new RangeError(`${name} must be a number from ${min} to ${max}`);
  }
  return value;
}

export function derivative(a, h) {
  finite('a', a, -2, 2);
  finite('h', h, 0.01, 1);
  const secant = 2 * a + h;
  const tangent = 2 * a;
  return { a, h, x2: a + h, y1: a * a, y2: (a + h) ** 2,
    secant, tangent, error: Math.abs(h) };
}

export function integral(n) {
  integer('n', n, 1, 100);
  // Sum of squares, computed with exact integer arithmetic at this scale.
  const leftNumerator = (n - 1) * n * (2 * n - 1);
  const rightNumerator = n * (n + 1) * (2 * n + 1);
  const denominator = 6 * n ** 3;
  const left = leftNumerator / denominator;
  const right = rightNumerator / denominator;
  return { n, width: 1 / n, left, right, area: 1 / 3,
    gap: right - left, leftError: 1 / 3 - left, rightError: right - 1 / 3 };
}

export function limit(epsilon, offset = 0) {
  finite('epsilon', epsilon, 0.01, 1);
  integer('offset', offset, 0, 30);
  const N = Math.floor(1 / epsilon) + 1;
  const n = N + offset;
  return { epsilon, N, n, value: 1 / n, below: 1 / n < epsilon };
}

export function complexMultiply(a, b, c, d) {
  for (const [name, value] of Object.entries({ a, b, c, d })) integer(name, value, -3, 3);
  const real = a * c - b * d;
  const imaginary = a * d + b * c;
  return { a, b, c, d, real, imaginary,
    firstMagnitudeSquared: a * a + b * b,
    multiplierMagnitudeSquared: c * c + d * d,
    productMagnitudeSquared: real * real + imaginary * imaginary };
}

export function determinant(a, b, c, d) {
  for (const [name, value] of Object.entries({ a, b, c, d })) integer(name, value, -3, 3);
  const signedArea = a * d - b * c;
  // The arguments are rows [[a,b],[c,d]], hence column images (a,c),(b,d).
  return { a, b, c, d, firstColumn: [a, c], secondColumn: [b, d],
    signedArea, area: Math.abs(signedArea),
    collapsed: signedArea === 0,
    orientation: signedArea > 0 ? 'preserved' : signedArea < 0 ? 'reversed' : 'collapsed' };
}

export function gcd(a, b) {
  if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b) || a < 0 || b < 0) {
    throw new RangeError('gcd needs nonnegative safe integers');
  }
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}

export function modular(n, step) {
  integer('n', n, 2, 24);
  integer('step', step, 1, 24);
  const divisor = gcd(n, step);
  const period = n / divisor;
  const orbit = Array.from({ length: period }, (_, i) => (i * step) % n);
  return { n, step, divisor, period, orbit, next: (period * step) % n };
}

export function combinations(n, k) {
  integer('n', n, 1, 20);
  integer('k', k, 0, n);
  const mirror = Math.min(k, n - k);
  let count = 1;
  for (let i = 1; i <= mirror; i += 1) count = count * (n - mirror + i) / i;
  if (!Number.isSafeInteger(count)) throw new RangeError('result exceeds safe integer range');
  return { n, k, count, symmetricK: n - k };
}

export function bayes(priorA, redA, redB) {
  integer('priorA', priorA, 1, 99);
  integer('redA', redA, 0, 100);
  integer('redB', redB, 0, 100);
  // Counts in 10,000 equally weighted cases are integers for percentage inputs.
  const groupA = priorA * 100;
  const groupB = (100 - priorA) * 100;
  const redFromA = priorA * redA;
  const redFromB = (100 - priorA) * redB;
  const redTotal = redFromA + redFromB;
  return { priorA, redA, redB, groupA, groupB, redFromA, redFromB,
    redTotal, posteriorA: redTotal === 0 ? null : redFromA / redTotal };
}
