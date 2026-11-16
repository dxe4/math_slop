// Chapter 17: Power series and Taylor models
// Run: node examples/17.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjustable center, degree, and interval; keep these modest.
const center = 0;
const degree = 4;
const left = -0.5;
const right = 0.5;
if (![center, left, right].every(Number.isFinite) || left >= right || center < left || center > right || Math.max(Math.abs(left), Math.abs(right)) > 10) throw new Error('Choose a finite increasing interval within [-10, 10] containing the center.');
if (!Number.isInteger(degree) || degree < 0 || degree > 30) throw new Error('Degree must be an integer from 0 to 30.');
function taylor(x) {
  let term = Math.exp(center);
  let sum = term;
  for (let k = 1; k <= degree; k++) {
    term *= (x - center) / k;
    sum += term;
  }
  return sum;
}
let factorial = 1;
for (let k = 2; k <= degree + 1; k++) factorial *= k;
const distance = Math.max(center - left, right - center);
const bound = Math.exp(right) * distance ** (degree + 1) / factorial;
const exactPoints = [];
const modelPoints = [];
let sampledMax = 0;
for (let j = 0; j <= 200; j++) {
  const x = left + (right - left) * j / 200;
  const exact = Math.exp(x);
  const approx = taylor(x);
  exactPoints.push([x, exact]);
  modelPoints.push([x, approx]);
  sampledMax = Math.max(sampledMax, Math.abs(exact - approx));
}
plot(exactPoints, 'e^x (x dimensionless)');
plot(modelPoints, 'Taylor polynomial (x dimensionless)');
console.log('center, degree:', center, degree);
console.log('sampled maximum absolute error:', sampledMax);
console.log('whole-interval truncation bound:', bound);
console.log('right endpoint polynomial:', taylor(right));
