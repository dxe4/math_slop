// Chapter 03: Computing with numbers and functions
// Run: node examples/03.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjustable: largest exponent k; keep it an integer from 1 to 20.
const maxPower = 18;
function sample(f, a, b, n) {
  if (!Number.isFinite(a) || !Number.isFinite(b) || !(a < b) ||
      !Number.isInteger(n) || n < 1 || n > 1999) {
    throw new Error('Use finite a < b and integer n from 1 to 1999.');
  }
  const points = [];
  for (let i = 0; i <= n; i += 1) {
    const t = i / n;
    const x = i === 0 ? a : i === n ? b : a * (1 - t) + b * t;
    const y = f(x);
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error('Nonfinite sample at index ' + i);
    }
    points.push([x, y]);
  }
  return points;
}
if (!Number.isInteger(maxPower) || maxPower < 1 || maxPower > 20) {
  throw new Error('maxPower must be an integer from 1 to 20.');
}
console.log('Sampler check [x, x*x+1]:', sample(x => x*x + 1, -1, 1, 4));
console.log('0.1 + 0.2:', 0.1 + 0.2, 'spacing above 1:', Number.EPSILON);
console.log('Columns: k, h, direct, rearranged, |direct-rearranged|, |direct-0.5|, |rearranged-0.5|');
const directErrors = [];
const rearrangedErrors = [];
for (let k = 1; k <= maxPower; k += 1) {
  const h = 10**(-k);
  const direct = (Math.sqrt(1 + h) - 1)/h;
  const rearranged = 1/(Math.sqrt(1 + h) + 1);
  const directError = Math.abs(direct - 0.5);
  const rearrangedError = Math.abs(rearranged - 0.5);
  console.log(k, h, direct, rearranged, Math.abs(direct-rearranged), directError, rearrangedError);
  directErrors.push([k, directError]);
  rearrangedErrors.push([k, rearrangedError]);
}
if (directErrors.length >= 2) {
  plot(directErrors, 'Direct: x = exponent k, y = absolute distance from 0.5');
  plot(rearrangedErrors, 'Rearranged: x = exponent k, y = absolute distance from 0.5');
} else console.log('Only one exponent: error plots need at least two points.');
