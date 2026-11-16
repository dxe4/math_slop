// Chapter 01: Functions and mathematical language
// Run: node examples/01.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjustable dimensionless parameters; b must be nonzero.
const a = -2, b = 3, h = 1, k = 4;
const samples = 120; // Integer from 2 to 1000.
if (![a, b, h, k].every(Number.isFinite) || b === 0) throw new Error('Use finite parameters and nonzero b.');
if (!Number.isInteger(samples) || samples < 2 || samples > 1000) throw new Error('samples must be an integer from 2 to 1000.');
const original = [], transformed = [];
for (let i = 0; i <= samples; i++) {
  const u = 9 * i / samples;
  original.push([u, Math.sqrt(u)]);
  transformed.push([h + u / b, k + a * Math.sqrt(u)]);
}
if (!transformed.every(p => p.every(Number.isFinite))) throw new Error('Parameters overflowed the number system.');
transformed.sort((p, q) => p[0] - q[0]);
if (transformed.some((p, i) => i && p[0] === transformed[i-1][0])) throw new Error('Transformed x samples collapse at machine resolution; reduce |h| or change b.');
plot(original, 'Original: horizontal u, vertical sqrt(u)');
plot(transformed, 'Transformed: horizontal x, vertical G(x)');
console.log('Reference table: u, x = h + u/b, G(x)');
for (const u of [0, 1, 4, 9]) console.log(u, h + u / b, k + a * Math.sqrt(u));
console.log('Domain:', b > 0 ? 'x >= ' + h : 'x <= ' + h);
console.log('Only original inputs 0 through 9 are sampled; this is not the full domain.');
