// Chapter 13: Geometric and physical applications
// Run: node examples/13.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjustable exponent p > 0 and refinement limit (at most 1024).
const p = 2;
const maxSlices = 64;
if (!Number.isFinite(p) || p <= 0 || !Number.isInteger(maxSlices) || maxSlices < 4 || maxSlices > 1024) {
  throw new Error('Use finite p > 0 and an integer maxSlices from 4 to 1024.');
}
// Both 2π∫₀¹ x^(p+1) dx and π∫₀¹(1−y^(2/p)) dy equal this value.
const exact = 2 * Math.PI / (p + 2);
const shellErrors = [];
const washerErrors = [];
console.log('Exact volume:', exact);
console.log('n | midpoint shells | midpoint washers | absolute shell error');
for (let n = 4; n <= maxSlices; n *= 2) {
  let shells = 0;
  let washers = 0;
  const h = 1 / n;
  for (let i = 0; i < n; i++) {
    const midpoint = (i + 0.5) * h;
    shells += 2 * Math.PI * midpoint ** (p + 1) * h;
    // At height y, inner radius = y^(1/p), outer radius = 1.
    washers += Math.PI * (1 - midpoint ** (2 / p)) * h;
  }
  const error = Math.abs(shells - exact);
  shellErrors.push([n, error]);
  washerErrors.push([n, Math.abs(washers - exact)]);
  console.log(n, shells.toFixed(10), washers.toFixed(10), error.toExponential(4));
}
if (shellErrors.length >= 2) {
  plot(shellErrors, 'Shell absolute volume error versus slice count n');
  plot(washerErrors, 'Washer absolute volume error versus slice count n');
} else console.log('Only one slice count: error plots need at least two points.');
