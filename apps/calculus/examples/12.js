// Chapter 12: Techniques of integration
// Run: node examples/12.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjustable candidate and central-difference step.
const coefficient = 1;
const constant = 0;
const h = 0.0001;
if (!Number.isFinite(coefficient) || !Number.isFinite(constant) || !Number.isFinite(h) || h <= 0) throw new Error('Use finite parameters and a positive h.');
const f = x => x * Math.exp(x);
const F = x => (x - coefficient) * Math.exp(x) + constant;
const target = [], derivative = [], residual = [];
let maxError = 0;
console.log('x | f(x) | central derivative | residual');
for (let i = 0; i <= 100; i++) {
  const x = -1 + 2 * i / 100;
  const estimate = (F(x + h) - F(x - h)) / (2 * h);
  const error = estimate - f(x);
  if (!Number.isFinite(estimate)) throw new Error('Nonfinite estimate; reduce parameter magnitudes.');
  target.push([x, f(x)]);
  derivative.push([x, estimate]);
  residual.push([x, error]);
  maxError = Math.max(maxError, Math.abs(error));
  if (i % 25 === 0) console.log(x.toFixed(2), f(x).toFixed(8), estimate.toFixed(8), error.toExponential(3));
}
plot(target, 'f(x) = x exp(x); horizontal axis x');
plot(derivative, 'Central-difference estimate of F derivative');
plot(residual, 'Estimated F derivative minus f; horizontal axis x');
console.log('Maximum absolute sampled residual:', maxError);
