// Chapter 21: Gradients and multivariable differentiation
// Run: node examples/21.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjust the base point and positive step size; coordinates are dimensionless.
const a = 1, b = 1, step = 0.1;
if (![a, b].every(Number.isFinite)) throw new Error('Use finite base coordinates.');
if (!(step > 0 && Number.isFinite(step))) throw new Error('Use a finite positive step.');
const f = (x, y) => x*x + x*y + 2*y*y;
const gx = 2*a + b, gy = a + 4*b;
if (![gx, gy, f(a,b)].every(Number.isFinite)) throw new Error('Derived base value overflows; reduce coordinates.');
const exact = [], forward = [], central = [];
let maxForwardError = 0, maxCentralError = 0;
for (let i = 0; i <= 180; i++) {
  const angle = 2*Math.PI*i/180;
  const ux = Math.cos(angle), uy = Math.sin(angle);
  const predicted = gx*ux + gy*uy;
  const plus = f(a+step*ux, b+step*uy);
  const minus = f(a-step*ux, b-step*uy);
  const fd = (plus-f(a,b))/step;
  const cd = (plus-minus)/(2*step);
  if (![angle, predicted, plus, minus, fd, cd].every(Number.isFinite)) throw new Error('Derived directional sample overflows; reduce inputs.');
  exact.push([angle, predicted]);
  forward.push([angle, fd]);
  central.push([angle, cd]);
  maxForwardError = Math.max(maxForwardError, Math.abs(fd-predicted));
  maxCentralError = Math.max(maxCentralError, Math.abs(cd-predicted));
}
if (![1, 0.5, 0.25].every(scale => { const dx = 0.02 * scale, dy = -0.01 * scale; return [f(a,b) + gx*dx + gy*dy, f(a+dx,b+dy)].every(Number.isFinite); })) throw new Error('Tangent-plane sample overflows; reduce coordinates.');
plot(exact, 'Gradient rate: angle (rad), output/input');
plot(forward, 'Forward difference: angle (rad), output/input');
plot(central, 'Central difference: angle (rad), output/input');
console.log('Gradient:', gx, gy, 'maximum rate:', Math.hypot(gx,gy));
console.log('Maximum sampled errors: forward, central', maxForwardError, maxCentralError);
for (const scale of [1, 0.5, 0.25]) {
  const dx = 0.02*scale, dy = -0.01*scale;
  const predicted = f(a,b) + gx*dx + gy*dy;
  console.log('scale, plane, actual, absolute error:', scale, predicted, f(a+dx,b+dy), Math.abs(f(a+dx,b+dy)-predicted));
}
