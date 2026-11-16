// Chapter 16: Convergence tests and approximation
// Run: node examples/16.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjust p > 0, tolerance > 0, and integer maxTerms (up to 20000).
const p = 1;
const tolerance = 0.001;
const maxTerms = 1200;
if (!(p > 0 && Number.isFinite(p))) throw new Error('p must be positive and finite.');
if (!(tolerance > 0 && Number.isFinite(tolerance))) throw new Error('Use a positive finite tolerance.');
if (!Number.isInteger(maxTerms) || maxTerms < 1 || maxTerms > 20000) throw new Error('Use 1 to 20000 terms.');
let signed = 0, absolute = 0, used = 0, bound = Infinity;
const signedPoints = [], absolutePoints = [];
const stride = Math.max(1, Math.ceil(maxTerms / 1000));
for (let n = 1; n <= maxTerms; n++) {
  const magnitude = 1 / Math.pow(n, p);
  signed += (n % 2 === 1 ? 1 : -1) * magnitude;
  absolute += magnitude;
  used = n;
  bound = 1 / Math.pow(n + 1, p);
  if (n === 1 || n % stride === 0 || bound <= tolerance || n === maxTerms) {
    signedPoints.push([n, signed]);
    absolutePoints.push([n, absolute]);
  }
  if (bound <= tolerance) break;
}
if (signedPoints.length >= 2) {
  plot(signedPoints, 'Alternating partial sum; x = term count n');
  plot(absolutePoints, 'Absolute-value partial sum; x = term count n');
} else console.log('Only one term count: reader plots need at least two points.');
console.log('p, terms, signed sum, absolute sum:', p, used, signed, absolute);
console.log('Next-term truncation bound:', bound);
console.log(bound <= tolerance ? 'Truncation target met (roundoff not certified).' : 'Budget reached; requested truncation tolerance not certified.');
console.log(p > 1 ? 'Absolute convergence by p-series test.' : 'Conditional convergence by alternating and p-series tests.');
if (p === 1) console.log('Absolute discrepancy from Math.log(2):', Math.abs(signed - Math.log(2)));
