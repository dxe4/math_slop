/* VISUAL01 exact, bounded teaching models. No DOM, random draws, I/O or storage. */
(function (root) {
  'use strict';
  function number(name, x, lo, hi, integer = false) {
    if (typeof x !== 'number' || !Number.isFinite(x) || x < lo || x > hi ||
        (integer && !Number.isSafeInteger(x))) {
      throw new RangeError(`${name} must be ${integer ? 'an integer' : 'a finite number'} from ${lo} to ${hi}.`);
    }
  }
  function conditioning({baseRate, sensitivity, falsePositiveRate, population}) {
    for (const [name, x] of Object.entries({baseRate, sensitivity, falsePositiveRate})) number(name, x, 0, 1);
    number('population', population, 1, 1e9, true);
    const alertProbability = baseRate * sensitivity + (1 - baseRate) * falsePositiveRate;
    return {status: alertProbability === 0 ? 'undefined' : 'defined',
      expectedCells: {defectAlert: population * baseRate * sensitivity,
        defectClear: population * baseRate * (1 - sensitivity),
        soundAlert: population * (1 - baseRate) * falsePositiveRate,
        soundClear: population * (1 - baseRate) * (1 - falsePositiveRate)},
      alertProbability, posterior: alertProbability === 0 ? null : baseRate * sensitivity / alertProbability};
  }
  function normalized(logs) {
    const max = Math.max(...logs), weights = logs.map(x => Math.exp(x - max));
    const sum = weights.reduce((a, b) => a + b, 0);
    return weights.map(x => x / sum);
  }
  function predictive({alpha, beta, trials, tailAt}) {
    number('alpha', alpha, 1e-6, 1e6); number('beta', beta, 1e-6, 1e6);
    number('future trials', trials, 0, 100, true); number('tail threshold', tailAt, -1e6, 1e6, true);
    const s = alpha + beta, p = alpha / s;
    // Relative log masses avoid underflow at either end of the support.
    const full = [0], plugin = [0];
    for (let k = 0; k < trials; k++) {
      const choose = Math.log(trials - k) - Math.log(k + 1);
      full.push(full[k] + choose + Math.log(alpha + k) - Math.log(beta + (trials - k - 1)));
      plugin.push(plugin[k] + choose + Math.log(alpha) - Math.log(beta));
    }
    const fullMass = normalized(full), pluginMass = normalized(plugin);
    const tail = mass => tailAt <= 0 ? 1 : tailAt > trials ? 0 : mass.slice(tailAt).reduce((a, b) => a + b, 0);
    const pluginVariance = trials * p * (1 - p);
    return {fullMass, pluginMass, mean: trials * p, fullVariance: pluginVariance * (s + trials) / (s + 1),
      pluginVariance, fullTail: tail(fullMass), pluginTail: tail(pluginMass)};
  }
  function pooling({mu, tau, sigma, groups}) {
    number('population mean', mu, -1e6, 1e6); number('population SD', tau, 0, 1e6);
    number('residual SD', sigma, 1e-6, 1e6);
    if (!Array.isArray(groups) || groups.length === 0 || groups.length > 100) throw new RangeError('Provide 1 to 100 groups.');
    const ids = new Set();
    return groups.map(({id, n, sampleMean}) => {
      if (typeof id !== 'string' || !id || ids.has(id)) throw new RangeError('Group IDs must be unique nonempty strings.');
      ids.add(id); number('group sample size', n, 0, 1e6, true);
      if (n > 0 || sampleMean != null) number('sample mean', sampleMean, -1e6, 1e6);
      const weight = n * tau * tau / (sigma * sigma + n * tau * tau);
      const variance = tau * tau * sigma * sigma / (sigma * sigma + n * tau * tau);
      const mean = n === 0 ? mu : (1 - weight) * mu + weight * sampleMean;
      const half = 1.6448536269514722 * Math.sqrt(variance);
      return {id, rawMean: n === 0 ? null : sampleMean, weight, mean, variance, lower90: mean - half, upper90: mean + half};
    });
  }
  function predictiveCheck({spread, sigma}) {
    number('spread', spread, 0, 3); number('known observation SD', sigma, .5, 4);
    const observations = [-3, -2, -1, 0, 1, 2, 3].map(x => 10 + spread * x);
    const observedVariance = 14 * spread * spread / 3;
    const posteriorVariance = 1 / (1 / 9 + 7 / (sigma * sigma));
    const q = 6 * observedVariance / (sigma * sigma), t = q / 2;
    return {observations, observedMean: 10, observedVariance,
      posteriorMean: posteriorVariance * (8 / 9 + 70 / (sigma * sigma)), posteriorVariance,
      replicateMeanVariance: posteriorVariance + sigma * sigma / 7,
      expectedReplicateVariance: sigma * sigma, standardizedDiscrepancy: q,
      upperTailProbability: Math.exp(-t) * (1 + t + t * t / 2)};
  }
  function decision({eventProbability, reserveCost, disruptionLoss}) {
    number('event probability', eventProbability, 0, 1);
    number('reserve cost', reserveCost, 0, 1e9); number('disruption loss', disruptionLoss, 0, 1e9);
    const noReserveLoss = eventProbability * disruptionLoss;
    // Only roundoff-scale differences are ties; no substantive preferred action.
    const tie = Math.abs(reserveCost - noReserveLoss) <= 8 * Number.EPSILON * Math.max(reserveCost, noReserveLoss);
    return {reserveLoss: reserveCost, noReserveLoss,
      minimizers: tie ? ['reserve', 'no reserve'] : reserveCost < noReserveLoss ? ['reserve'] : ['no reserve'],
      threshold: disruptionLoss === 0 ? null : reserveCost / disruptionLoss};
  }
  const api = Object.freeze({conditioning, predictive, pooling, predictiveCheck, decision});
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.BayesVisualMath = api;
})(typeof window === 'undefined' ? globalThis : window);
