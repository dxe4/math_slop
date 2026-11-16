// Chapter 09: Optimization and root finding
// Run: node examples/09.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjustable inputs: retain a positive target and a sign-changing bracket.
const target = 2;
const lower = 1, upper = 2;
const start = 1.5;
const iterations = 10;
if (!(Number.isFinite(target) && target > 0 && Number.isFinite(lower) && Number.isFinite(upper) && lower < upper && Number.isFinite(start) && Number.isInteger(iterations) && iterations >= 1 && iterations <= 30)) throw new Error('Check inputs; iterations must be 1 to 30.');
const f = x => x*x - target;
const reference = Math.sqrt(target);
let a = lower, b = upper;
if (![f(a), f(b)].every(Number.isFinite)) throw new Error('Bracket values overflow.');
if (f(a) !== 0 && f(b) !== 0 && Math.sign(f(a)) === Math.sign(f(b))) throw new Error('Endpoints must bracket a root.');
if (f(a) === 0) b = a;
else if (f(b) === 0) a = b;
// Select the root enclosed by the validated bracket, including endpoint roots.
const bisectRoot = a < 0 && f(a) >= 0 ? -reference : reference;
const bisectErrors = [], newtonErrors = [];
console.log('Bisection: n, midpoint, residual, absolute error, certified half-width');
for (let n = 0; n <= iterations; n++) {
  const m = a + (b-a)/2;
  const error = Math.abs(m-bisectRoot);
  console.log(n, m, f(m), error, (b-a)/2);
  bisectErrors.push([n,error]);
  if (f(m) === 0 || m === a || m === b) break;
  if (Math.sign(f(m)) === Math.sign(f(a))) a = m;
  else b = m;
}
console.log('Newton: n, estimate, residual, absolute error');
let x = start;
for (let n = 0; n <= iterations; n++) {
  if (!Number.isFinite(x) || !Number.isFinite(f(x))) { console.log('Stopped: nonfinite value'); break; }
  const root = x < 0 ? -reference : reference;
  const error = Math.abs(x-root);
  console.log(n, x, f(x), error);
  newtonErrors.push([n,error]);
  if (f(x) === 0) break;
  if (2*x === 0) { console.log('Stopped: slope too small'); break; }
  const next = x-f(x)/(2*x);
  if (next === x) { console.log('Stopped: floating-point stagnation'); break; }
  x = next;
}
if (bisectErrors.length >= 2) plot(bisectErrors, 'Bisection: iteration vs absolute root error');
else console.log('Bisection has only one finite point; no error curve.');
if (newtonErrors.length >= 2) plot(newtonErrors, 'Newton: iteration vs absolute root error');
else console.log('Newton has only one finite point; no error curve.');
