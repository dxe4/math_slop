// Chapter 06: Differentiation techniques
// Run: node examples/06.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Change family to 'mixed', 'log', or 'corner'; adjust x0 and curveStep.
const family = 'mixed';
const x0 = 0;
const curveStep = 0.001;
const definitions = {
  mixed: {f: x => Math.exp(2*x)*Math.sin(x)/(1+x*x),
    d: x => Math.exp(2*x)*((2*Math.sin(x)+Math.cos(x))/(1+x*x)-2*x*Math.sin(x)/(1+x*x)**2)},
  log: {f: x => Math.log(x), d: x => 1/x},
  corner: {f: x => Math.abs(x), d: x => x === 0 ? NaN : Math.sign(x)}
};
if (!definitions[family]) throw new Error('Unknown family');
if (!Number.isFinite(x0) || !(curveStep > 0) || !Number.isFinite(curveStep)) throw new Error('Use a finite x0 and positive finite step');
if (family === 'log' && x0 <= 0) throw new Error('Log family requires x0 > 0 for a real derivative.');
const {f, d} = definitions[family];
const central = (x, h) => (f(x+h)-f(x-h))/(2*h);
const exact = d(x0);
if (family === 'mixed' && !Number.isFinite(exact)) throw new Error('Mixed derivative exceeds representable range at x0.');
if (family === 'mixed' && exact === 0 && x0 !== 0 && Math.exp(2*x0) === 0) throw new Error('Mixed derivative underflows at x0; choose a less negative x0.');
console.log('family, x0, symbolic derivative:', family, x0, exact);
console.log('h | central difference | absolute error');
for (let k = 1; k <= 14; k++) {
  const h = 10**(-k);
  if (!Number.isFinite(f(x0+h)) || !Number.isFinite(f(x0-h))) {
    console.log(h, 'sample outside domain');
    continue;
  }
  const estimate = central(x0, h);
  console.log(h, estimate, Number.isFinite(exact) ? Math.abs(estimate-exact) : 'derivative undefined');
}
const symbolic = [];
const numeric = [];
for (let i = 0; i <= 200; i++) {
  const x = x0 - 0.5 + i/200;
  const a = d(x);
  const b = central(x, curveStep);
  if (Number.isFinite(f(x)) && Number.isFinite(a)) symbolic.push([x, a]);
  if (Number.isFinite(b)) numeric.push([x, b]);
}
if (symbolic.length < 2 || new Set(symbolic.map(p => p[0])).size < 2) throw new Error('Symbolic curve has fewer than two distinct x samples.');
if (numeric.length < 2 || new Set(numeric.map(p => p[0])).size < 2) throw new Error('curveStep leaves fewer than two distinct x samples on the numerical curve.');
plot(symbolic, 'Symbolic derivative: horizontal x, vertical slope');
plot(numeric, 'Central difference: horizontal x, vertical approximate slope');
console.log('Plots join samples; a line across a missing point does not establish continuity.');
