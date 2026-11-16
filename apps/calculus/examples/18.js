// Chapter 18: Parametric curves and polar calculus
// Run: node examples/18.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjust a, turns, and n; turns is a positive integer.
const a = 2;
const turns = 1;
const n = 400;
if (!(Number.isFinite(a) && a > 0 && Number.isInteger(turns) && turns >= 1 && turns <= 4 && Number.isInteger(n) && n >= 20 && n <= 1900)) {
  throw new Error('Use a > 0, integer turns from 1 to 4, and integer n from 20 to 1900.');
}
const parametric = [];
const polar = [];
let chordLength = 0;
let normalizedArea = 0;
const h = turns * Math.PI / n;
for (let i = 0; i <= n; i++) {
  const t = 2 * Math.PI * turns * i / n;
  parametric.push([a * (1 + Math.cos(t)), a * Math.sin(t)]);
  const theta = -Math.PI / 2 + i * h;
  const r = 2 * a * Math.cos(theta);
  const point = [r * Math.cos(theta), r * Math.sin(theta)];
  if (i > 0) {
    const previous = polar[i - 1];
    chordLength += Math.hypot(point[0] - previous[0], point[1] - previous[1]);
  }
  polar.push(point);
  const weight = (i === 0 || i === n) ? 0.5 : 1;
  normalizedArea += weight * 2 * Math.cos(theta) ** 2 * h;
}
const area = (a * normalizedArea) * a;
const disk = (a * Math.PI) * a;
const swept = turns * disk;
if (![parametric, polar].every(points => points.every(pair => pair.every(Number.isFinite))) || ![chordLength, area, turns * 2 * Math.PI * a, swept, disk].every(Number.isFinite)) throw new Error('Derived geometry overflows; reduce a.');
plot(parametric, 'Parametric circle: x and y (length units)');
plot(polar, 'Polar circle: x and y (length units)');
console.log('turns; polygon length; exact traveled length', turns, chordLength, turns * 2 * Math.PI * a);
if (area === 0 || disk === 0) console.log('Swept and disk areas are below machine resolution; no representable area reference.');
else {
  console.log('swept area approximation; exact area counted with turns', area, swept);
  console.log('Area of geometric disk once', disk);
}
console.log('Polygon length absolute error', Math.abs(chordLength - turns * 2 * Math.PI * a));
