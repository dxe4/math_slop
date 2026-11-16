// Chapter 10: Accumulation and the definite integral
// Run: node examples/10.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjust maxN (1 to 1024) and sampleFraction (0 to 1).
const maxN = 64;
const sampleFraction = 0.25;
const f = x => x * x;
const a = 0, b = 1, exact = 1 / 3;
function integrate(fn, start, end, n, fraction) {
  if (!Number.isInteger(n) || n < 1 || n > 1024) throw new Error('n must be an integer from 1 to 1024');
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) throw new Error('Require finite start < end');
  if (!Number.isFinite(fraction) || fraction < 0 || fraction > 1) throw new Error('Sample fraction must lie in [0,1]');
  const width = (end - start) / n;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const value = fn(start + (i + fraction) * width);
    if (!Number.isFinite(value)) throw new Error('Nonfinite function sample');
    sum += value * width;
  }
  return sum;
}
if (!Number.isInteger(maxN) || maxN < 1 || maxN > 1024) throw new Error('maxN must be an integer from 1 to 1024');
const left = [], mid = [], right = [], reference = [];
console.log('n | left | midpoint | right | midpoint absolute error');
const counts = [];
for (let n = 1; n <= maxN; n *= 2) counts.push(n);
if (counts.at(-1) !== maxN) counts.push(maxN);
for (const n of counts) {
  const l = integrate(f, a, b, n, 0);
  const m = integrate(f, a, b, n, 0.5);
  const r = integrate(f, a, b, n, 1);
  left.push([n, l]); mid.push([n, m]); right.push([n, r]); reference.push([n, exact]);
  console.log(n, l.toFixed(9), m.toFixed(9), r.toFixed(9), Math.abs(m - exact).toFixed(9));
}
console.log('Custom fraction', sampleFraction, 'at n =', maxN, 'gives', integrate(f, a, b, maxN, sampleFraction));
if (counts.length >= 2) {
  plot(left, 'Left sum: x = interval count n, y = integral estimate');
  plot(mid, 'Midpoint sum: x = interval count n, y = integral estimate');
  plot(right, 'Right sum: x = interval count n, y = integral estimate');
  plot(reference, 'Exact integral 1/3: x = interval count n');
} else console.log('Only one interval count: reader plots need at least two points.');
