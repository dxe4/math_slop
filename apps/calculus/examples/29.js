// Chapter 29: Differential forms and the general Stokes theorem
// Run: node examples/29.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

const a = 1, b = 2, orientation = 1;
if (!(Number.isFinite(a) && Number.isFinite(b) && 0 < a && a < b && b <= 1e6)) throw new Error('Use finite radii 0 < a < b <= 1000000.');
if (orientation !== 1 && orientation !== -1) throw new Error('Use orientation +1 or -1.');
const areaDifference = (b-a)*(b+a);
if (!(Number.isFinite(areaDifference) && areaDifference > 0)) throw new Error('The derived area difference must be positive and representable.');
function polygonIntegral(radius, sides, direction) {
  let total = 0;
  for (let j = 0; j < sides; j++) {
    const t0 = direction*2*Math.PI*j/sides, t1 = direction*2*Math.PI*(j+1)/sides;
    const x0 = radius*Math.cos(t0), y0 = radius*Math.sin(t0);
    const x1 = radius*Math.cos(t1), y1 = radius*Math.sin(t1);
    const xm = (x0+x1)/2, ym = (y0+y1)/2;
    total += (xm*(y1-y0)-ym*(x1-x0))/2;
  }
  return total;
}
const estimates = [], references = [];
const exact = orientation*Math.PI*areaDifference;
console.log('sides | polygon circulation | circle value | absolute error | ideal geometric bound');
for (const sides of [4,8,16,32,64,128]) {
  const estimate = polygonIntegral(b,sides,orientation)+polygonIntegral(a,sides,-orientation);
  const bound = 2*Math.PI**3*areaDifference/(3*sides**2);
  if (![estimate,exact,bound].every(Number.isFinite)) throw new Error('A derived value is outside the finite range.');
  estimates.push([sides,estimate]);
  references.push([sides,exact]);
  console.log(sides,estimate.toFixed(9),exact.toFixed(9),Math.abs(estimate-exact).toExponential(3),bound.toExponential(3));
}
plot(estimates,'Polygon boundary integral vs side count');
plot(references,'Exact circle integral vs side count');
console.log('The bound concerns ideal geometric arithmetic; displayed floats are not rounding certificates.');
