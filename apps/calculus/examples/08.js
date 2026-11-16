// Chapter 08: Theorems and the shape of functions
// Run: node examples/08.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Change a to 0, -1, or a small positive number.
const a = 1;
const left = -2;
const right = 2;
const n = 160; // Number of sampling intervals, not a proof resolution.
if (!Number.isFinite(a) || Math.abs(a) > 10) throw new Error('Choose finite a between -10 and 10.');
if (!Number.isInteger(n) || n < 2 || n > 1000) throw new Error('Choose integer n between 2 and 1000.');
const f = x => x*x*x - 3*a*x;
const df = x => 3*x*x - 3*a;
const ddf = x => 6*x;
const values = [], slopes = [], bending = [];
for (let i = 0; i <= n; i++) {
  const x = left + (right-left)*i/n;
  values.push([x, f(x)]);
  slopes.push([x, df(x)]);
  bending.push([x, ddf(x)]);
}
plot(values, 'f(x) = x^3 - 3ax; x and y dimensionless');
plot(slopes, 'First derivative f prime versus x');
plot(bending, 'Second derivative f double prime versus x');
const sign = y => y > 0 ? '+' : y < 0 ? '-' : '0';
console.log('x | f(x) | sign f prime | sign f double prime');
for (const x of [-2, -1, -0.5, 0, 0.5, 1, 2]) {
  console.log(x, f(x), sign(df(x)), sign(ddf(x)));
}
const candidates = [left, right];
if (a >= 0) {
  const r = Math.sqrt(a);
  for (const x of (r === 0 ? [0] : [-r, r])) {
    if (x > left && x < right) candidates.push(x);
  }
}
console.log('Endpoint and stationary candidates:');
for (const x of candidates) console.log('x =', x, 'f =', f(x));
console.log('Minimum candidate value:', Math.min(...candidates.map(f)));
console.log('Maximum candidate value:', Math.max(...candidates.map(f)));
