// Chapter 11: The fundamental theorem of calculus
// Run: node examples/11.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjust c, the midpoint panel count n, and derivative step h.
const c = 1;
const n = 200;
const h = 0.01;
if (!Number.isInteger(n) || n < 1 || n > 2000 || !Number.isFinite(c) || Math.abs(c) > 100 || !Number.isFinite(h) || h <= 0 || h > 0.5) throw new Error('Use 1 <= n <= 2000, |c| <= 100, and 0 < h <= 0.5.');
const f = x => x*x - c;
const exact = x => x*x*x/3 - c*x;
function accumulation(x) {
  const dx = x/n; // Negative x automatically reverses orientation.
  let sum = 0;
  for (let j = 0; j < n; j++) sum += f((j+0.5)*dx)*dx;
  return sum;
}
const area = [], rates = [], slopes = [];
let maxAreaError = 0, maxSlopeError = 0;
for (let i = 0; i <= 80; i++) {
  const x = -2 + i/20;
  const a = accumulation(x);
  const d = (accumulation(x+h)-accumulation(x-h))/(2*h);
  area.push([x,a]); rates.push([x,f(x)]); slopes.push([x,d]);
  maxAreaError = Math.max(maxAreaError,Math.abs(a-exact(x)));
  maxSlopeError = Math.max(maxSlopeError,Math.abs(d-f(x)));
}
plot(area, 'Accumulation A: x versus integral');
plot(rates, 'Rate f: x versus rate');
plot(slopes, 'Central difference of A: x versus slope');
console.log('A(2), exact A(2):', accumulation(2), exact(2));
console.log('Maximum accumulation error:', maxAreaError);
console.log('Maximum derivative error:', maxSlopeError);

