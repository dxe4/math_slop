// Chapter 20: Functions of several variables
// Run: node examples/20.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Change slope and bend to select approach paths. Keep them finite.
const slope = 1;
const bend = 1;
if (!Number.isFinite(slope) || !Number.isFinite(bend)) throw new Error('Use finite path parameters.');
const line = [], parabola = [], bounded = [];
for (let n = 1; n <= 8; n++) {
  const t = 10 ** (-n);
  // Algebraically simplified values avoid unnecessarily tiny powers.
  const lineValue = slope === 0 ? 0 : Math.abs(slope) <= t ? (slope / t) / (1 + (slope / t) ** 2) : (t / slope) / (1 + (t / slope) ** 2);
  const curveValue = Math.abs(bend) > 1 ? (1 / bend) / (1 + (1 / bend) ** 2) : bend / (1 + bend*bend);
  const z = Math.abs(bend) * t;
  const ratio = z > 1 ? (1 / z) ** 2 / (1 + (1 / z) ** 2) ** 1.5 : z / (1 + z*z) ** 1.5;
  if (![lineValue, curveValue, ratio].every(Number.isFinite)) throw new Error('Path value overflows; reduce parameters.');
  line.push([n,lineValue]);
  parabola.push([n,curveValue]);
  bounded.push([n,ratio]);
  console.log('n, t, q(line), q(parabola), |p|/radius:', n,t,lineValue,curveValue,ratio);
}
plot(line,'q(t, slope*t); horizontal coordinate n = -log10(t)');
plot(parabola,'q(t, bend*t*t); horizontal coordinate n');
plot(bounded,'|p(t, bend*t*t)| / distance; horizontal coordinate n');
