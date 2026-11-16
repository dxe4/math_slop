// Chapter 02: Algebra, trigonometry, and coordinates
// Run: node examples/02.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjust the maximum radian angle and sample count.
const maxAngle = 0.5;
const samples = 200;
if (!(maxAngle > 0 && maxAngle <= 3) || !Number.isInteger(samples) || samples < 2 || samples > 1000) {
  throw new Error('Use 0 < maxAngle <= 3 and an integer samples from 2 to 1000.');
}
const sine = [];
const line = [];
const error = [];
for (let i = 0; i <= samples; i++) {
  const theta = -maxAngle + 2 * maxAngle * i / samples;
  const exact = Math.sin(theta);
  sine.push([theta, exact]);
  line.push([theta, theta]);
  error.push([theta, Math.abs(theta - exact)]);
}
plot(sine, 'sin(theta): x in radians, y dimensionless');
plot(line, 'theta approximation: x in radians, y dimensionless');
plot(error, 'absolute error: x in radians, y dimensionless');
console.log('theta (rad) | sine | absolute error | relative error');
for (const theta of [maxAngle, maxAngle / 2, maxAngle / 4]) {
  const value = Math.sin(theta);
  const absolute = Math.abs(theta - value);
  console.log(theta.toPrecision(7), value.toPrecision(10), absolute.toExponential(6), value === 0 ? 'undefined (sample underflow)' : (absolute / Math.abs(value)).toExponential(6), theta === 0 ? 'selected angle underflowed to zero' : absolute === 0 && theta !== 0 ? 'computed error rounded to zero at machine precision' : '');
}
console.log('At theta = 0: absolute error is 0; relative error is undefined (0/0).');
