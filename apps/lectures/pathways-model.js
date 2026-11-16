/* Exact finite probes for the proof-routes reader.
 * The prose proves the real-domain theorem and the sampled-loop error bound.
 * A failed sufficient clearance test is inconclusive, not a winding verdict.
 * Public rationals use reduced safe-integer {numerator, denominator} pairs;
 * the strict algebraic clearance comparison uses BigInt internally.
 */
(function (root, factory) {
  const model = factory();
  if (typeof module === 'object' && module.exports) module.exports = model;
  else root.ProofRoutesMath = model;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const BOUNDS = Object.freeze({ MIN_B: 1, MAX_B: 8, MIN_L: 13, MAX_L: 40,
    MIN_E: 0, MAX_E: 50, SAMPLE_COUNT: 16 });
  const ORIGINAL_DOMAIN_EXCLUSIONS = Object.freeze([-2, 2]);
  const CERTIFIED_CONSEQUENCES = Object.freeze({ winding: 2, squareRootCount: 2,
    fourthRootCount: 0, logarithmCount: 0 });

  function integer(value, minimum, maximum, name) {
    if (!Number.isSafeInteger(value) || value < minimum || value > maximum) {
      throw new RangeError(name + ' must be an integer from ' + minimum + ' to ' + maximum);
    }
  }
  function gcd(a, b) {
    a = Math.abs(a);
    while (b !== 0) { const remainder = a % b; a = b; b = remainder; }
    return a;
  }
  function rational(numerator, denominator) {
    const divisor = gcd(numerator, denominator);
    return Object.freeze({ numerator: numerator === 0 ? 0 : numerator / divisor,
      denominator: denominator / divisor });
  }

  function domainProbe(b) {
    integer(b, BOUNDS.MIN_B, BOUNDS.MAX_B, 'b');
    const candidates = Object.freeze([-2 - b, -2 + b]);
    const admissible = Object.freeze(candidates.filter(x => x !== -2 && x !== 2));
    const excluded = Object.freeze(candidates.filter(x => x === -2 || x === 2));
    return Object.freeze({ b, candidates, admissible, excluded,
      originalDomainExclusions: ORIGINAL_DOMAIN_EXCLUSIONS });
  }

  function belowOctagonClearance(bound) {
    const a = BigInt(bound.numerator), d = BigInt(bound.denominator);
    const d2 = d * d;
    // cos(pi/8)^2=(2+sqrt(2))/4. Since B>=0, first square safely;
    // square 4B^2-2 only after its sign is known to be nonnegative.
    const u = 4n * a * a - 2n * d2;
    return u < 0n || u * u < 2n * d2 * d2;
  }
  function samplingCertificate(L, E) {
    integer(L, BOUNDS.MIN_L, BOUNDS.MAX_L, 'L');
    integer(E, BOUNDS.MIN_E, BOUNDS.MAX_E, 'E');
    const bound = rational(25 * L + 8 * E, 800);
    const certified = belowOctagonClearance(bound);
    return Object.freeze({ L, E: E === 0 ? 0 : E, bound, certified,
      status: certified ? 'certified' : 'inconclusive',
      consequences: certified ? CERTIFIED_CONSEQUENCES : null });
  }

  function formatRational(value) {
    if (!value || typeof value !== 'object' || !Number.isSafeInteger(value.numerator) ||
        !Number.isSafeInteger(value.denominator) || value.denominator <= 0) {
      throw new TypeError('A rational must have a safe-integer numerator and a positive safe-integer denominator.');
    }
    const normalized = rational(value.numerator, value.denominator);
    return normalized.denominator === 1 ? String(normalized.numerator)
      : normalized.numerator + '/' + normalized.denominator;
  }
  return Object.freeze({ BOUNDS, domainProbe, samplingCertificate, formatRational });
});
