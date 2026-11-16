// Chapter 19: Vectors, space, and motion
// Run: node examples/19.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjust radius (m), angular rate (rad/s), rise rate (m/s), and sample count.
const R = 2, omega = 1, c = 1, duration = 2 * Math.PI, n = 120;
if (![R, omega, c, duration, n].every(Number.isFinite) || R < 0 || duration <= 0 || !Number.isInteger(n) || n < 4 || n > 1500) {
  throw new Error('Use finite parameters, R >= 0, duration > 0, and integer 4 <= n <= 1500.');
}
const exactSpeed = Math.hypot(R * omega, c);
if (R === 0 && c === 0 || omega === 0 && c === 0) throw new Error('Stationary curve: curvature needs nonzero speed.');
if (exactSpeed === 0) throw new Error('Nonzero speed underflows machine resolution.');
if (!Number.isFinite(exactSpeed)) throw new Error('Derived speed overflows; reduce parameters.');
const xy = [], speed = [];
let previous = null, polygonLength = 0;
console.log('Table columns: t (s), x (m), y (m), z (m)');
for (let i = 0; i <= n; i++) {
  const t = duration * (i / n);
  const p = [R * Math.cos(omega * t), R * Math.sin(omega * t), c * t];
  if (![t, ...p].every(Number.isFinite)) throw new Error('Derived coordinates overflow; reduce parameters.');
  xy.push([p[0], p[1]]);
  speed.push([t, Math.hypot(-R * omega * Math.sin(omega * t), R * omega * Math.cos(omega * t), c)]);
  if (previous) polygonLength += Math.hypot(...p.map((value, j) => value - previous[j]));
  if (!Number.isFinite(polygonLength) || !Number.isFinite(speed.at(-1)[1])) throw new Error('Derived length or speed overflows; reduce parameters.');
  previous = p;
  if (i === 0 || i === Math.floor(n / 2) || i === n) console.log(t, ...p);
}
const exactLength = exactSpeed * duration;
const curvature = R === 0 || omega === 0 ? 0 : Math.exp(Math.log(R) + 2*Math.log(Math.abs(omega)) - 2*Math.log(exactSpeed));
if (![exactLength, curvature, exactLength - polygonLength].every(Number.isFinite)) throw new Error('Derived length or curvature overflows; reduce parameters.');
plot(xy, 'xy projection: x (m) versus y (m), z omitted');
plot(speed, 'Speed (m/s) against time (s)');
console.log('Exact speed (m/s):', exactSpeed);
console.log('Curvature (1/m):', curvature);
console.log('Polygon length (m):', polygonLength);
console.log('Exact length (m):', exactLength);
console.log('Length shortfall (m):', exactLength - polygonLength);
