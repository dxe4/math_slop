// Chapter 23: Double and triple integrals
// Run: node examples/23.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Density is 2 + slope*x; nonnegative slopes model heavier material to the right.
const slope = 1;
const sizes = [4, 8, 16, 32, 64, 128];
if (!Number.isFinite(slope) || slope < 0) throw new Error('Use a finite nonnegative slope.');
if (!Array.isArray(sizes) || sizes.length < 1 || sizes.length > 2000) throw new Error('sizes must contain 1 to 2000 grids.');
const exact = 1 + slope / 6;
const errors = [];
console.log('n | approximate mass (kg) | exact mass (kg) | absolute error (kg)');
for (const n of sizes) {
  if (!Number.isInteger(n) || n < 1 || n > 256) throw new Error('n must be an integer from 1 to 256.');
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const x = (i + 0.5) / n;
    for (let j = 0; j < n; j++) {
      // i+j+1 compares the midpoint with x+y=1 without roundoff ambiguity.
      const diagonal = i + j + 1;
      const weight = diagonal < n ? 1 : diagonal === n ? 0.5 : 0;
      sum += weight * (2 + slope*x) / (n*n);
    }
  }
  const mass = sum;
  const error = Math.abs(mass-exact);
  console.log(n, mass.toFixed(10), exact.toFixed(10), error.toExponential(4));
  errors.push([n, error]);
}
if (errors.length >= 2) plot(errors, 'x: subdivisions n; y: absolute mass error (kg)');
else console.log('Only one grid: refinement plot needs at least two points.');
