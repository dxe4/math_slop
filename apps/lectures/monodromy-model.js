/* Finite-sheet circle covers p_n(w)=w^n and authored maps f_k(z)=z^k.
 * The lecture proves the topological claims; this model performs bounded exact
 * integer arithmetic. Forward transport sends starting sheet j to j+k mod n.
 * A repeated path returning to its starting sheet does not imply that f_k has
 * a root on the original parameter circle, and does not imply null-homotopy.
 * Turn fractions are exact {n,d} pairs. Only drawing may convert them to floats.
 */
(function (root, factory) {
  const model = factory();
  if (typeof module === 'object' && module.exports) module.exports = model;
  else root.MonodromyMath = model;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const BOUNDS = Object.freeze({ MIN_N: 2, MAX_N: 12, MIN_K: -24, MAX_K: 24,
    MAX_TRAVERSALS: 24, MAX_DENOMINATOR: 1000 });

  function integer(value, minimum, maximum, name) {
    if (!Number.isSafeInteger(value) || value < minimum || value > maximum) {
      throw new RangeError(name + ' must be an integer from ' + minimum + ' to ' + maximum);
    }
  }
  function parameters(n, k) {
    integer(n, BOUNDS.MIN_N, BOUNDS.MAX_N, 'n');
    integer(k, BOUNDS.MIN_K, BOUNDS.MAX_K, 'k');
  }
  function gcd(a, b) {
    a = Math.abs(a); b = Math.abs(b);
    while (b !== 0) { const remainder = a % b; a = b; b = remainder; }
    return a;
  }
  function mod(value, n) {
    const remainder = value % n;
    return remainder === 0 ? 0 : remainder < 0 ? remainder + n : remainder;
  }
  function fraction(n, d) {
    const divisor = gcd(n, d);
    return Object.freeze({ n: n === 0 ? 0 : n / divisor, d: d / divisor });
  }
  function wrapped(turn) { return fraction(mod(turn.n, turn.d), turn.d); }

  function analyze(n, k) {
    parameters(n, k);
    const permutation = Object.freeze(Array.from({ length: n }, (_, j) => mod(j + k, n)));
    const visited = new Set(), cycles = [];
    for (let j = 0; j < n; j++) if (!visited.has(j)) {
      const cycle = [];
      let current = j;
      do { cycle.push(current); visited.add(current); current = permutation[current]; } while (current !== j);
      cycles.push(Object.freeze(cycle));
    }
    const rootExists = k % n === 0;
    return Object.freeze({ n, k, permutation, cycles: Object.freeze(cycles),
      firstReturn: n / gcd(n, k), cycleCount: cycles.length,
      rootExists, rootCount: rootExists ? n : 0,
      rootExponent: rootExists ? (k === 0 ? 0 : k / n) : null,
      logarithmExists: k === 0 });
  }

  function pathParameters(n, k, j, traversals) {
    parameters(n, k);
    integer(j, 0, n - 1, 'j');
    integer(traversals, 1, BOUNDS.MAX_TRAVERSALS, 'traversals');
  }
  function traverse(n, k, j, traversals) {
    pathParameters(n, k, j, traversals);
    const sheetTrace = Object.freeze(Array.from({ length: traversals + 1 }, (_, r) => mod(j + k * r, n)));
    const endpointSheet = sheetTrace[traversals];
    return Object.freeze({ n, k, j, traversals, endpointSheet,
      closed: endpointSheet === j,
      endpointTurn: fraction(j + k * traversals, n),
      liftTurns: fraction(k * traversals, n), baseTurns: k * traversals,
      sheetTrace });
  }

  function lift(n, k, j, traversals, p, q = 1000) {
    pathParameters(n, k, j, traversals);
    integer(q, 1, BOUNDS.MAX_DENOMINATOR, 'q');
    integer(p, 0, q, 'p');
    const baseTurn = fraction(k * traversals * p, q);
    const liftTurn = fraction(j * q + k * traversals * p, n * q);
    return Object.freeze({ baseTurn, liftTurn,
      baseWrappedTurn: wrapped(baseTurn), liftWrappedTurn: wrapped(liftTurn) });
  }

  function formatTurn(turn) {
    if (!turn || typeof turn !== 'object' || !Number.isSafeInteger(turn.n) ||
        !Number.isSafeInteger(turn.d) || turn.d <= 0) {
      throw new TypeError('A turn must contain a safe-integer numerator and a positive safe-integer denominator.');
    }
    const normalized = fraction(turn.n, turn.d);
    return normalized.d === 1 ? String(normalized.n) : normalized.n + '/' + normalized.d;
  }

  return Object.freeze({ BOUNDS, analyze, traverse, lift, formatTurn });
});
