// Chapter 25: Vector fields and line integrals
// Run: node examples/25.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Change alpha to 0 for a conservative field; use baseN >= 2.
const alpha = 1;
const baseN = 10;
if (!Number.isFinite(alpha) || !Number.isInteger(baseN) || baseN < 2 || baseN > 1000) {
  throw new Error('Use finite alpha and integer baseN from 2 to 1000.');
}
function work(n, curved) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n;
    const x = t, y = curved ? t*t : t;
    const dx = 1, dy = curved ? 2*t : 1;
    const P = 2*x*y, Q = x*x + alpha*x;
    total += P/n + (Q/n)*dy;
  }
  return total;
}
const straight = [], curved = [];
const exactStraight = 1 + alpha/2;
const exactCurved = 1 + (2/3)*alpha;
console.log('n | straight work | curved work | curved minus straight');
for (let k = 0; k < 6; k++) {
  const n = baseN * 2**k;
  const a = work(n, false), b = work(n, true);
  straight.push([n, a]); curved.push([n, b]);
  console.log(n, a.toFixed(9), b.toFixed(9), (b-a).toFixed(9));
}
plot(straight, 'Straight path: panels n versus work');
plot(curved, 'Curved path: panels n versus work');
console.log('Exact straight, curved, difference:', exactStraight, exactCurved, alpha/6);

