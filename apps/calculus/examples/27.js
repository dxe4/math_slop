// Chapter 27: Differential equations and dynamical models
// Run: node examples/27.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjustable physical parameters; P0 and K must be positive.
const r = 0.5;
const K = 1000;
const P0 = 100;
const T = 10;
const samples = 200;
if (![r, K, P0, T].every(Number.isFinite) || r < 0 || K <= 0 || P0 <= 0 || T <= 0 || !Number.isInteger(samples) || samples < 1 || samples > 1999) {
  throw new Error('Use finite nonnegative r, positive K, P0 and T; integer samples 1..1999.');
}
const exponential = t => t === 0 || r === 0 ? P0 : Math.exp(Math.log(P0) + r*t);
const logistic = t => {
  if (t === 0 || r === 0 || P0 === K) return P0;
  if (P0 > K) {
    // Add denominator contributions on a log scale so tiny growth is not lost.
    const logInitial = Math.log(K) - Math.log(P0);
    const gained = -Math.expm1(-r*t);
    const logGained = Math.log1p(-K/P0) + (gained > 0 ? Math.log(gained) : Math.log(r) + Math.log(t));
    const high = Math.max(logInitial, logGained);
    const logDenominator = high + Math.log(Math.exp(logInitial-high) + Math.exp(logGained-high));
    return Math.exp(Math.log(K) - logDenominator);
  }
  const logOdds = Math.log(K - P0) - Math.log(P0) - r*t;
  const logDenominator = logOdds > 0 ? logOdds + Math.log1p(Math.exp(-logOdds)) : Math.log1p(Math.exp(logOdds));
  return Math.exp(Math.log(K) - logDenominator);
};
const expPoints = [];
const logPoints = [];
const capacity = [];
for (let i = 0; i <= samples; i++) {
  const t = T * (i / samples);
  const e = exponential(t);
  const p = logistic(t);
  if (!Number.isFinite(e) || !Number.isFinite(p)) throw new Error('Population overflow: reduce parameter magnitudes.');
  expPoints.push([t,e]);
  logPoints.push([t,p]);
  capacity.push([t,K]);
}
const expRate = r === 0 ? 0 : Math.exp(Math.log(r) + Math.log(P0));
const logRate = r === 0 || P0 === K ? 0 : Math.sign(K-P0) * Math.exp(Math.log(r) + Math.log(P0) + Math.log(Math.abs(K-P0)) - Math.log(K));
if (![expRate, logRate].every(Number.isFinite)) throw new Error('Initial rate overflows; reduce parameters.');
plot(expPoints, 'Exponential population; time in days');
plot(logPoints, 'Logistic population; time in days');
plot(capacity, 'Carrying capacity (individuals)');
console.log('time (days) | exponential | logistic | logistic/exponential');
for (let i = 0; i <= 5; i++) {
  const t = T * (i / 5);
  console.log(t.toFixed(2), exponential(t).toFixed(6), logistic(t).toFixed(6), (logistic(t)/exponential(t)).toFixed(6));
}
console.log('Initial rates (individuals/day):', expRate, logRate);

