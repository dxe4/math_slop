// Chapter 26: Green, Stokes, and divergence theorems
// Run: node examples/26.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjustable positive side lengths and an orientation sign (+1 or -1).
const a = 2, b = 1, orientation = 1;
if (!(a > 0 && b > 0 && Number.isFinite(a) && Number.isFinite(b))) throw new Error('Use finite positive side lengths.');
if (orientation !== 1 && orientation !== -1) throw new Error('Orientation must be +1 or -1.');
const boundaryPoints = [], interiorPoints = [], exactPoints = [];
const A = ((a*b)*a)*a, B = (((a*b)*b)*b)/3;
const exact = orientation * (A + B);
if (![A, B, exact].every(Number.isFinite) || exact === 0) throw new Error('Derived integral is outside representable range.');
console.log('n | boundary estimate | interior estimate | boundary error | interior error');
for (const n of [2, 4, 8, 16, 32, 64]) {
  let meanV2 = 0, meanU2 = 0;
  for (let j = 0; j < n; j++) meanV2 += ((j+0.5)/n)**2/n;
  for (let i = 0; i < n; i++) meanU2 += ((i+0.5)/n)**2/n;
  const boundary = orientation * (A + 3*B*meanV2);
  const interior = orientation * (3*A*meanU2 + 3*B*meanV2);
  if (![boundary, interior].every(Number.isFinite)) throw new Error('Derived midpoint estimate is outside representable range.');
  boundaryPoints.push([n, boundary]);
  interiorPoints.push([n, interior]);
  exactPoints.push([n, exact]);
  console.log(n, boundary.toFixed(9), interior.toFixed(9), Math.abs(boundary-exact).toExponential(3), Math.abs(interior-exact).toExponential(3));
}
plot(boundaryPoints, 'Boundary circulation vs subdivisions n');
plot(interiorPoints, 'Interior curl integral vs subdivisions n');
plot(exactPoints, 'Exact signed value vs subdivisions n');
console.log('Exact signed integral:', exact);
