// Chapter 07: Rates, linearization, and sensitivity
// Run: node examples/07.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjustable measurements, in cm; keep 0 < maxChange < radius.
const radius = 10;
const maxChange = 0.05;
const radialSpeed = 0.02; // cm/s, for the instantaneous rate
if (!Number.isFinite(radius) || !Number.isFinite(maxChange) || !Number.isFinite(radialSpeed) || radius <= 0 || maxChange <= 0 || maxChange >= radius) {
  throw new Error('Use finite inputs with 0 < maxChange < radius.');
}
const baseVolume = ((4 * Math.PI / 3) * radius * radius) * radius;
const sensitivity = 4 * Math.PI * radius ** 2;
const relativeTolerance = 3 * (maxChange / radius);
if (![baseVolume, sensitivity, sensitivity * radialSpeed, relativeTolerance].every(Number.isFinite)) throw new Error('Derived volume or rate overflows; reduce measurements.');
if (baseVolume === 0 || sensitivity === 0 || relativeTolerance === 0) throw new Error('Positive volume, change, or tolerance is unrepresentable at machine precision.');
const peakRemainder = (4 * Math.PI * (radius * maxChange)) * maxChange + ((4 * Math.PI / 3) * maxChange * maxChange) * maxChange;
if (peakRemainder === 0) throw new Error('Positive volume remainder is below machine resolution.');
const exact = [];
const linear = [];
const residual = [];
for (let i = 0; i <= 100; i++) {
  const h = maxChange * (2 * i / 100 - 1);
  const prediction = sensitivity * h;
  // Expanded difference avoids subtracting nearly equal large volumes.
  const remainder = (4 * Math.PI * (radius * h)) * h + ((4 * Math.PI / 3) * h * h) * h;
  const change = prediction + remainder;
  if (remainder !== 0 && change === prediction && (i === 0 || i === 100)) console.log('Remainder is nonzero separately but rounds away when added to the linear change at h =', h);
  exact.push([h, change]);
  linear.push([h, prediction]);
  residual.push([h, remainder]);
  if (i === 0 || i === 50 || i === 100) {
    console.log('h (cm), exact change, linear change, remainder (cm³):', h, change, prediction, remainder);
  }
}
if (![exact, linear, residual].every(points => points.every(pair => pair.every(Number.isFinite)))) throw new Error('Volume change overflows; reduce measurements.');
plot(exact, 'Exact ΔV: x = Δr (cm), y = ΔV (cm³)');
plot(linear, 'Differential dV: x = Δr (cm), y = dV (cm³)');
plot(residual, 'Remainder: x = Δr (cm), y = ΔV − dV (cm³)');
console.log('Nominal volume (cm³):', baseVolume);
console.log('Instantaneous volume rate (cm³/s):', sensitivity * radialSpeed);
console.log('First-order relative volume tolerance:', relativeTolerance);
