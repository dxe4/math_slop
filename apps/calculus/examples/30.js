// Chapter 30: Implicit functions and constrained systems
// Run: node examples/30.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

const baseP = 1, deltaP = 0.04, parameterWindow = 0.2, branch = 1;
if (![baseP, deltaP, parameterWindow].every(Number.isFinite) ||
    !(baseP >= 1e-12 && baseP <= 1e12 && parameterWindow > 0 && parameterWindow < baseP) ||
    Math.abs(deltaP) > parameterWindow || (branch !== 1 && branch !== -1)) {
  throw new Error('Choose 1e-12 <= baseP <= 1e12, 0 < parameterWindow < baseP, abs(deltaP) <= parameterWindow, and branch 1 or -1.');
}
const baseY = branch * Math.sqrt(baseP);
const slope = branch / (2 * Math.sqrt(baseP));
const exactPoints = [], tangentPoints = [];
for (let i = 0; i <= 40; i++) {
  const p = baseP - parameterWindow + 2 * parameterWindow * i / 40;
  exactPoints.push([p, branch * Math.sqrt(p)]);
  tangentPoints.push([p, baseY + slope * (p - baseP)]);
}
const targetP = baseP + deltaP;
const exactY = branch * Math.sqrt(targetP);
const predictedY = baseY + slope * deltaP;
const signedError = predictedY - exactY;
const residual = predictedY * predictedY - targetP;
if (![baseY, slope, exactY, predictedY, signedError, residual].every(Number.isFinite)) {
  throw new Error('These inputs exceed the finite numerical range.');
}
plot(exactPoints, 'Exact selected branch: y versus parameter p');
plot(tangentPoints, 'Local tangent prediction: y versus parameter p');
console.log('branch | base p | target p | derivative | exact y | prediction | signed state error | residual');
console.log(branch, baseP, targetP, slope, exactY, predictedY, signedError, residual);
console.log('Floating-point values illustrate this finite experiment; the written theorem supplies local existence.');
