// Chapter 22: Multivariable optimization
// Run: node examples/22.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Nondimensional coordinates; edit curvature and step sizes together.
const kappa = 10;
const start = [2, 1];
const steps = [0.05, 0.15, 0.21];
const iterations = 40;
if (!(kappa >= 1 && kappa <= 100) || !Number.isInteger(iterations) || iterations < 1 || iterations > 200) throw new Error('Use 1 <= kappa <= 100 and 1..200 iterations.');
if (steps.length < 1 || steps.length > 8 || !steps.every(a => Number.isFinite(a) && a > 0 && a <= 3 / kappa)) throw new Error('Use 1..8 step sizes in (0, 3/kappa].');
if (!start.every(v => Number.isFinite(v) && Math.abs(v) <= 10) || start.length !== 2) throw new Error('Use two finite starting coordinates with magnitude <= 10.');
const f = (x, y) => (x*x + kappa*y*y)/2;
console.log('Axes: horizontal x, vertical y. Initial f =', f(...start));
console.log('Convergence from every start requires 0 < alpha <', 2/kappa);
for (const alpha of steps) {
  let [x, y] = start;
  const path = [[x, y]];
  for (let k = 0; k < iterations; k++) {
    x -= alpha * x;
    y -= alpha * kappa * y;
    path.push([x, y]);
  }
  plot(path, 'Descent path: x versus y; alpha=' + alpha);
  const exactX = start[0] * (1-alpha)**iterations;
  const exactY = start[1] * (1-alpha*kappa)**iterations;
  console.log('alpha, final x, final y, final f, formula discrepancy:', alpha, x, y, f(x,y), Math.hypot(x-exactX,y-exactY));
}
