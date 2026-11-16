/* Exact, bounded model for f = a*u^2 + u + b and g = a*u + 1.
 * Load ../model.js first in a browser. This companion reuses its frozen exact
 * rational arithmetic without changing it. Inputs are rational text, at most
 * 256 raw characters each, whose reduced numerator and denominator have at
 * most 120 digits each (excluding the numerator sign). Thus canonical inputs
 * have at most 242 characters, and every nonzero reciprocal remains admissible.
 * No expressions, approximate decisions or general CAS.
 * Results contain only JSON-safe strings, booleans, numbers, arrays and null.
 * "resultant" is the generic degree-(2,1) expression a^2*b. "determinant"
 * independently expands its Sylvester matrix. "specializedResultant" uses
 * the actual specialized degrees, and equals 1 when a = 0; specializing the
 * generic expression instead gives 0 there. Neither test creates a witness.
 */
(function (root, factory) {
  "use strict";
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("../model.js"));
  } else {
    root.WitnessModel = factory(root.MathConditions);
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function (Q) {
  "use strict";
  if (!Q || !["parse", "add", "subtract", "multiply", "divide", "format"].every(function (name) {
    return typeof Q[name] === "function";
  })) {
    throw new Error("Load the Conditions exact rational model before the witness model.");
  }

  const MAX_INPUT_LENGTH = 256, MAX_COMPONENT_DIGITS = 120;
  const zero = Q.parse("0"), one = Q.parse("1");

  function absolute(n) { return n < 0n ? -n : n; }
  function gcd(n, d) {
    n = absolute(n);
    while (d !== 0n) { const remainder = n % d; n = d; d = remainder; }
    return n;
  }

  function boundedRational(n, d) {
    if (d === 0n) throw new RangeError("A denominator cannot be zero.");
    if (d < 0n) { n = -n; d = -d; }
    const divisor = gcd(n, d);
    n /= divisor;
    d /= divisor;
    const numerator = absolute(n).toString(), denominator = d.toString();
    if (numerator.length > MAX_COMPONENT_DIGITS || denominator.length > MAX_COMPONENT_DIGITS) {
      throw new RangeError("After reduction, use at most " + MAX_COMPONENT_DIGITS +
        " digits in each numerator and denominator, excluding the sign.");
    }
    // Each positive component fits the frozen dependency's 120-character
    // parser. Rebuild its branded rational without passing longer fractions.
    const positive = Q.divide(Q.parse(numerator), Q.parse(denominator));
    return n < 0n ? Q.multiply("-1", positive) : positive;
  }

  function parse(input) {
    if (typeof input !== "string") throw new TypeError("Enter a rational number as text.");
    if (input.length > MAX_INPUT_LENGTH) {
      throw new RangeError("Use at most " + MAX_INPUT_LENGTH + " characters.");
    }
    const text = input.trim();
    if (/^[+-]?\d+(?:\/[+-]?\d+)?$/.test(text)) {
      const parts = text.split("/");
      return boundedRational(BigInt(parts[0]), parts.length === 2 ? BigInt(parts[1]) : 1n);
    }
    if (/^[+-]?(?:\d+\.\d*|\.\d+)$/.test(text)) {
      const negative = text[0] === "-";
      const parts = text.replace(/^[+-]/, "").split(".");
      const digits = (parts[0] || "0") + parts[1];
      return boundedRational((negative ? -1n : 1n) * BigInt(digits),
        10n ** BigInt(parts[1].length));
    }
    throw new TypeError("Use an integer, fraction, or finite decimal; for example -3/2 or 0.75.");
  }

  function freezeTree(value) {
    if (value !== null && typeof value === "object") {
      Object.keys(value).forEach(function (key) { freezeTree(value[key]); });
      Object.freeze(value);
    }
    return value;
  }

  function canonicalize(text) { return Q.format(parse(text)); }

  // Six terms of the determinant, rather than the simplified a^2*b formula.
  function determinant3(matrix) {
    function term(i, j, k) {
      return Q.multiply(Q.multiply(matrix[0][i], matrix[1][j]), matrix[2][k]);
    }
    const positive = Q.add(Q.add(term(0, 1, 2), term(1, 2, 0)), term(2, 0, 1));
    const negative = Q.add(Q.add(term(2, 1, 0), term(1, 0, 2)), term(0, 2, 1));
    return Q.subtract(positive, negative);
  }

  function analyze(aText, bText, uText) {
    // Parse all independently supplied inputs before attempting any division.
    const a = parse(aText), b = parse(bText), u = parse(uText);
    const aZero = a.n === 0n, bZero = b.n === 0n;
    const f = Q.add(Q.add(Q.multiply(a, Q.multiply(u, u)), u), b);
    const g = Q.add(Q.multiply(a, u), one);
    const resultant = Q.multiply(Q.multiply(a, a), b);
    const matrix = [[a, one, b], [a, one, zero], [zero, a, one]];
    const determinant = determinant3(matrix);
    const identityRemainder = Q.subtract(f, Q.multiply(u, g));
    const witnessExists = !aZero && bZero;
    return freezeTree({
      a: Q.format(a), b: Q.format(b), u: Q.format(u),
      resultant: Q.format(resultant),
      determinant: Q.format(determinant),
      sylvesterMatrix: matrix.map(function (row) { return row.map(Q.format); }),
      identityRemainder: Q.format(identityRemainder),
      f: Q.format(f), g: Q.format(g),
      resultantZero: resultant.n === 0n,
      eliminationEquation: bZero,
      witnessExists: witnessExists,
      uniqueWitness: witnessExists ? Q.format(Q.divide("-1", a)) : null,
      witnessValid: f.n === 0n && g.n === 0n,
      actualDegree: { f: aZero ? 1 : 2, g: aZero ? 0 : 1 },
      specializedResultant: aZero ? "1" : Q.format(resultant),
      degreeDrop: aZero
    });
  }

  return Object.freeze({
    MAX_INPUT_LENGTH: MAX_INPUT_LENGTH,
    MAX_COMPONENT_DIGITS: MAX_COMPONENT_DIGITS,
    canonicalize: canonicalize,
    analyze: analyze
  });
});
