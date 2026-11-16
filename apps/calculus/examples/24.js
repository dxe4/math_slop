// Chapter 24: Change of variables and probability
// Run: node examples/24.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjust radius and grid sizes; keep each grid at most 400 by 400.
const radius = 1;
const sizes = [10, 20, 40, 80, 160];
if (!(radius > 0 && radius <= 10)) throw new Error('Use radius in (0, 10].');
if (!Array.isArray(sizes) || sizes.length < 1 || sizes.length > 2000) throw new Error('sizes must contain 1 to 2000 grids.');
// Scale coordinates by radius before summing; the radius cancels analytically.
const cartesian = [];
const polar = [];
for (const n of sizes) {
  if (!Number.isInteger(n) || n < 2 || n > 400) throw new Error('Grid sizes must be integers from 2 to 400.');
  const h = 2 / n;
  let squareSum = 0;
  for (let i = 0; i < n; i++) {
    const x = -1 + (i + 0.5) * h;
    for (let j = 0; j < n; j++) {
      const y = -1 + (j + 0.5) * h;
      const r2 = x*x + y*y;
      if (r2 <= 1) squareSum += 8 * r2 / (Math.PI * n*n);
    }
  }
  const dr = 1 / n;
  let polarSum = 0;
  for (let i = 0; i < n; i++) {
    const r = (i + 0.5) * dr;
    for (let j = 0; j < n; j++) {
      // Density times Jacobian times parameter-cell area.
      polarSum += 4 * r ** 3 / (n*n);
    }
  }
  cartesian.push([n, squareSum]);
  polar.push([n, polarSum]);
  console.log('n', n, 'Cartesian', squareSum.toFixed(8), 'polar', polarSum.toFixed(8), 'absolute errors', Math.abs(squareSum-1).toFixed(8), Math.abs(polarSum-1).toFixed(8));
}
if (sizes.length >= 2) {
  plot(cartesian, 'Cartesian estimate; x = cells per side, y = total probability');
  plot(polar, 'Polar estimate; x = cells per coordinate, y = total probability');
  plot(sizes.map(n => [n, 1]), 'Exact normalization = 1');
} else console.log('Only one grid: refinement plots need at least two points.');
