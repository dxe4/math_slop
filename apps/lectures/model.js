/* Original elementary models. All claims about entire curves below are analytic,
   rather than conclusions drawn from the points used to draw SVG paths. */
(function (root, factory) {
  const model = factory();
  if (typeof module === 'object' && module.exports) module.exports = model;
  else root.HomotopyMath = model;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const TAU = 2 * Math.PI;
  function unit(value, name) {
    if (!Number.isFinite(value) || value < 0 || value > 1) {
      throw new RangeError(name + ' must be a finite number in [0, 1]');
    }
  }
  function integer(value) {
    if (!Number.isSafeInteger(value)) throw new RangeError('winding must be a safe integer');
  }
  function plane(s, t) {
    unit(s, 's'); unit(t, 't');
    // Set endpoints explicitly to avoid representing sin(pi) as a tiny nonzero y.
    if (s === 0) return [-2, 0];
    if (s === 1) return [2, 0];
    return [4 * s - 2, (1 - t) * Math.sin(Math.PI * s) - 0.7 * t * Math.sin(TAU * s)];
  }
  function contraction(s, t) {
    unit(s, 's'); unit(t, 't');
    if (s === 0 || s === 1 || t === 1) return [1, 0];
    // This exact witness is essential: the proposed family leaves R² \ {0}.
    if (s === 0.5) return [2 * t - 1, 0];
    return [(1 - t) * Math.cos(TAU * s) + t, (1 - t) * Math.sin(TAU * s)];
  }
  function contractionInfo(t) {
    unit(t, 't');
    return { clearance: Math.abs(1 - 2 * t), winding: t === 0.5 ? null : t < 0.5 ? 1 : 0 };
  }
  function retract(point, t) {
    unit(t, 't');
    if (!Array.isArray(point) || point.length !== 2 || !point.every(Number.isFinite)) {
      throw new TypeError('point must contain two finite coordinates');
    }
    const scale = Math.max(Math.abs(point[0]), Math.abs(point[1]));
    if (scale === 0) throw new RangeError('point must be nonzero');
    // Scaling avoids norm overflow and loss of direction at subnormal inputs.
    const scaled = point.map(value => value / scale);
    const scaledNorm = Math.hypot(...scaled);
    return point.map((value, i) => (1 - t) * value + t * (scaled[i] / scaledNorm));
  }
  function loop(s, t, winding) {
    unit(s, 's'); unit(t, 't'); integer(winding);
    if (s === 0 || s === 1) return [1, 0];
    const radius = 1 + 0.45 * (1 - t) * Math.sin(Math.PI * s) ** 2;
    return [radius * Math.cos(TAU * winding * s), radius * Math.sin(TAU * winding * s)];
  }
  function loopRadius(s, t) {
    unit(s, 's'); unit(t, 't');
    return 1 + 0.45 * (1 - t) * Math.sin(Math.PI * s) ** 2;
  }
  function separateCandidate(s, t) {
    unit(s, 's'); unit(t, 't');
    if (s === 0 || t === 0 || s === 1) return 0;
    // Equivalent to (1-s)st/(s²+t²). Scale before multiplying so a tiny
    // diagonal input still returns its nonzero mathematical witness.
    const ratio = Math.min(s, t) / Math.max(s, t);
    return (1 - s) * ratio / (1 + ratio * ratio);
  }
  function continuousRepair(s, t) {
    unit(s, 's'); unit(t, 't');
    return t * separateCandidate(s, 1);
  }
  function continuityInfo(t, repaired = false, samples = 10) {
    unit(t, 't');
    if (typeof repaired !== 'boolean') throw new TypeError('repaired must be boolean');
    if (!Number.isSafeInteger(samples) || samples < 2 || samples > 1000) throw new RangeError('invalid sample count');
    const fn = repaired ? continuousRepair : separateCandidate;
    // The zero slice is flat, so there is no unique maximizer to mark.
    const peakS = t === 0 ? null : repaired ? 1 / (Math.SQRT2 + 1) : t / (Math.hypot(1, t) + t);
    const maximum = t === 0 ? 0 : repaired ? t / (2 * (Math.SQRT2 + 1)) : 1 / (2 * (Math.hypot(1, t) + t));
    const grid = Array.from({ length: samples + 1 }, (_, i) => [i / samples, fn(i / samples, t)]);
    return { peakS, maximum, grid, sampledMaximum: Math.max(...grid.map(p => p[1])), witness: fn(t, t), inputDistance: Math.SQRT2 * t };
  }
  function continuityCurve(t, extent = 1, repaired = false) {
    unit(t, 't'); unit(extent, 'extent');
    if (extent === 0) throw new RangeError('extent must be positive');
    const info = continuityInfo(t, repaired);
    const fn = repaired ? continuousRepair : separateCandidate;
    const positions = new Set(Array.from({ length: 121 }, (_, i) => extent * i / 120));
    if (info.peakS !== null && info.peakS <= extent) positions.add(info.peakS);
    // Extra points near the moving feature are for legibility. The written
    // proof and the analytic maximum, not this finite drawing, give guarantees.
    if (t > 0 && !repaired) for (let i = -60; i <= 60; i++) {
      const s = t * 10 ** (i / 10);
      if (s <= extent) positions.add(s);
    }
    return [...positions].sort((a, b) => a - b).map(s => [s, fn(s, t)]);
  }
  function pathData(fn, { x = 280, y = 180, scale = 90, samples = 240 } = {}) {
    if (!Number.isSafeInteger(samples) || samples < 2 || samples > 10000) throw new RangeError('invalid drawing sample count');
    return Array.from({ length: samples + 1 }, (_, i) => {
      const p = fn(i / samples);
      if (!Array.isArray(p) || p.length !== 2 || !p.every(Number.isFinite)) throw new TypeError('curve produced invalid coordinates');
      return (i ? 'L' : 'M') + (x + p[0] * scale).toFixed(3) + ',' + (y - p[1] * scale).toFixed(3);
    }).join(' ');
  }
  return Object.freeze({ plane, contraction, contractionInfo, retract, loop, loopRadius, separateCandidate, continuousRepair, continuityInfo, continuityCurve, pathData });
});
