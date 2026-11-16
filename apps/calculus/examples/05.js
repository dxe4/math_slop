// Chapter 05: Derivatives from first principles
// Run: node examples/05.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Change a and h, then run again; h must be nonzero.
const a = 2;
const h = 0.5;
if (!Number.isFinite(a) || Math.abs(a) > 100 || !Number.isFinite(h) || h === 0 || Math.abs(h) > 1) {
  throw new Error('Use finite |a| <= 100 and 0 < |h| <= 1.');
}
const f = x => x * x;
const slope = (f(a + h) - f(a)) / h;
const curve = [], tangent = [], secant = [];
for (let i = 0; i <= 200; i++) {
  const x = a - 1 + i / 100;
  curve.push([x, f(x)]);
  tangent.push([x, f(a) + 2 * a * (x - a)]);
  secant.push([x, f(a) + slope * (x - a)]);
}
plot(curve, 'y = x²; horizontal coordinate x');
plot(tangent, 'tangent y; slope 2a');
plot(secant, 'secant y; selected increment h');
console.log('Selected h, computed secant slope, exact tangent slope:', h, slope, 2 * a);
console.log('h | computed slope | algebraic slope 2a+h | absolute error from tangent');
for (const step of [0.5, -0.5, 0.1, -0.1, 0.01, -0.01, 1e-8, 1e-16]) {
  const estimate = (f(a + step) - f(a)) / step;
  console.log(step, estimate, 2 * a + step, Math.abs(estimate - 2 * a));
}

