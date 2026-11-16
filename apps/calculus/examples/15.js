// Chapter 15: Sequences and infinite series
// Run: node examples/15.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjustable exponent and number of terms.
const p = 2;
const Nmax = 100;
if (!Number.isFinite(p) || p < 0 || p > 8) throw new Error('Use 0 <= p <= 8.');
if (!Number.isInteger(Nmax) || Nmax < 1 || Nmax > 1000) throw new Error('Use integer Nmax from 1 to 1000.');
const sums = [], telescoping = [], lower = [], upper = [], exactTail = [];
let sum = 0, telescope = 0;
for (let n = 1; n <= Nmax; n++) {
  sum += 1 / Math.pow(n, p);
  telescope += 1 / (n * (n + 1));
  sums.push([n, sum]);
  telescoping.push([n, telescope]);
  exactTail.push([n, 1 / (n + 1)]);
  if (p > 1) {
    lower.push([n, Math.pow(n + 1, 1 - p) / (p - 1)]);
    upper.push([n, Math.pow(n, 1 - p) / (p - 1)]);
  }
}
console.log('N, p-series partial sum, telescoping partial sum:', Nmax, sum, telescope);
console.log('Telescoping exact total and tail:', 1, 1/(Nmax+1));
if (p > 1) console.log('p-series tail interval:', lower[Nmax-1][1], upper[Nmax-1][1]);
else console.log('This p-series diverges; a finite infinite-tail value does not exist.');
if (sums.length >= 2) {
  plot(sums, 'p-series partial sum versus N');
  plot(telescoping, 'telescoping partial sum versus N');
  plot(exactTail, 'exact telescoping tail versus N');
  if (p > 1) {
    plot(lower, 'p-series tail lower bound versus N');
    plot(upper, 'p-series tail upper bound versus N');
  }
} else console.log('Only one term count: reader plots need at least two points.');
