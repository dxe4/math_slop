// Chapter 04: Limits and continuity
// Run: node examples/04.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Change these parameters, then predict the two one-sided limits.
const atPoint = 7;
const jump = 1;
const radius = 0.5;
if (![atPoint, jump, radius].every(Number.isFinite) || radius <= 0) {
  throw new Error('Use finite parameters and a positive radius.');
}
if (1 - radius / 100 >= 1 || 1 + radius / 100 <= 1 || !Number.isFinite(2 + jump)) throw new Error('Radius is below machine resolution or output overflows.');
const removableLeft = [], removableRight = [];
const jumpLeft = [], jumpRight = [];
for (let i = 1; i <= 100; i++) {
  const h = radius * i / 100;
  removableLeft.push([1-h, 2-h]);
  removableRight.push([1+h, 2+h]);
  jumpLeft.push([1-h, 2-h]);
  jumpRight.push([1+h, 2+h+jump]);
}
if (![removableLeft, removableRight, jumpLeft, jumpRight].every(points => points.every(pair => pair.every(Number.isFinite)))) throw new Error('Plotted values overflow; reduce radius or jump.');
if (new Set(jumpRight.map(p => p[1])).size === 1 || 2 + jump === jump) console.log('Machine-resolution notice: sampled right branch is constant or 2 + jump rounds to jump; mathematical right limit is 2 + jump.');
plot(removableLeft, 'removable: left of x=1; x versus f(x)');
plot(removableRight, 'removable: right of x=1; x versus f(x)');
plot(jumpLeft, 'jump: left of x=1; x versus g(x)');
plot(jumpRight, 'jump: right of x=1; x versus g(x)');
console.log('Assigned removable value f(1) =', atPoint);
console.log('h | f(1-h) | f(1+h) | g(1-h) | g(1+h)');
for (let k = 1; k <= 6; k++) {
  const h = 10 ** (-k);
  console.log(h, 2-h, 2+h, 2-h, 2+h+jump);
}
console.log('Predicted limits: f left/right = 2; g left = 2; g right =', 2+jump);
