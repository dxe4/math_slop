/* Exact arithmetic for the authored damping family
 * F(a,s) = integral_0^infinity exp(-s*x)*sin(a*x)/x dx, s >= 0.
 * The analytical formulas and estimates are proved in the companion lesson;
 * this model checks rational substitutions and budgets, not improper integrals.
 * Load ../model.js first in a browser. That frozen dependency is not changed.
 * Inputs: at most 256 raw characters, with reduced absolute numerator and
 * denominator each at most 120 digits. Canonical inputs have at most 242
 * characters and round-trip. Derived display values may have larger components.
 * Only explicitly requested value approximations use Number/Math.atan/Math.PI;
 * all domains, symbolic cases and certificate comparisons use exact rationals.
 */
(function (root, factory) {
  "use strict";
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("../model.js"));
  } else {
    root.DampingModel = factory(root.MathConditions);
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function (Q) {
  "use strict";
  if (!Q || !["parse", "add", "multiply", "divide", "compare", "format", "toApprox"].every(function (name) {
    return typeof Q[name] === "function";
  })) {
    throw new Error("Load the Conditions exact rational model before the damping model.");
  }

  const MAX_INPUT_LENGTH = 256, MAX_COMPONENT_DIGITS = 120;
  const INPUT_KEYS = Object.freeze(["a", "s", "R", "epsilon", "h", "t"]);
  const zero = Q.parse("0");

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
    // Reconstruct a branded value using positive components that each fit the
    // frozen dependency's shorter parser; never reparse a derived display value.
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
  function magnitude(value) { return value.n < 0n ? Q.multiply("-1", value) : value; }
  function square(value) { return Q.multiply(value, value); }

  function zeroValue(approximate) {
    return { kind: "zero", argument: null, coefficient: null, exact: "0",
      approximation: approximate ? 0 : null };
  }

  function piValue(coefficientText, approximate) {
    const coefficient = Q.parse(coefficientText);
    const sign = coefficient.n < 0n ? "-" : "";
    return { kind: "piMultiple", argument: null, coefficient: Q.format(coefficient),
      exact: sign + "Pi/" + coefficient.d.toString(),
      approximation: approximate ? Math.PI * Q.toApprox(coefficient).value : null };
  }

  function arctangentValue(argument, approximate) {
    if (argument.n === 0n) return zeroValue(approximate);
    if (Q.compare(argument, "1") === 0) return piValue("1/4", approximate);
    if (Q.compare(argument, "-1") === 0) return piValue("-1/4", approximate);
    const text = Q.format(argument);
    // Admitted a/s has numerator and denominator at most 240 digits, so its
    // finite binary64 approximation is available. It never decides a certificate.
    const display = approximate ? Q.toApprox(argument) : null;
    return { kind: "arctan", argument: text, coefficient: null,
      exact: "ArcTan(" + text + ")",
      approximation: display && display.representable ? Math.atan(display.value) : null };
  }

  function ordinaryValue(a, approximate) {
    return a.n === 0n ? zeroValue(approximate)
      : piValue(a.n < 0n ? "-1/2" : "1/2", approximate);
  }

  function familyValue(a, s, approximate) {
    // At the boundary use J directly: no division by s, including (a,s)=(0,0).
    return s.n === 0n ? ordinaryValue(a, approximate)
      : arctangentValue(Q.divide(a, s), approximate);
  }

  function targetFlags(bound, epsilon) {
    const comparison = Q.compare(bound, epsilon);
    return { withinEpsilon: comparison < 0, atMostEpsilon: comparison <= 0 };
  }

  function validateInput(input) {
    if (input === null || typeof input !== "object" || Array.isArray(input) ||
        Object.keys(input).length !== INPUT_KEYS.length ||
        !INPUT_KEYS.every(function (key) { return Object.prototype.hasOwnProperty.call(input, key); })) {
      throw new TypeError("Provide exactly a, s, R, epsilon, h and t as rational text.");
    }
    const values = {};
    INPUT_KEYS.forEach(function (key) { values[key] = parse(input[key]); });
    if (values.s.n < 0n) throw new RangeError("s must be nonnegative.");
    if (values.R.n <= 0n) throw new RangeError("R must be positive.");
    if (values.epsilon.n <= 0n) throw new RangeError("epsilon must be positive.");
    if (values.h.n === 0n) throw new RangeError("h must be nonzero.");
    if (values.t.n <= 0n) throw new RangeError("t must be positive.");
    return values;
  }

  function approximationOption(options) {
    if (typeof options === "undefined") return false;
    if (options === null || typeof options !== "object" || Array.isArray(options) ||
        Object.keys(options).some(function (key) { return key !== "approximate"; }) ||
        (Object.prototype.hasOwnProperty.call(options, "approximate") && typeof options.approximate !== "boolean")) {
      throw new TypeError("The optional approximate setting must be a boolean.");
    }
    return Object.prototype.hasOwnProperty.call(options, "approximate") && options.approximate === true;
  }

  function analyze(input, options) {
    const values = validateInput(input), approximate = approximationOption(options);
    const a = values.a, s = values.s, R = values.R, epsilon = values.epsilon;
    const h = values.h, t = values.t;
    const aZero = a.n === 0n, sZero = s.n === 0n;
    const tailDenominator = aZero ? null : Q.multiply(magnitude(a), R);
    const eachTail = aZero ? null : Q.divide("2", tailDenominator);
    const twoTails = aZero ? null : Q.divide("4", tailDenominator);
    const window = aZero || sZero ? zero : Q.multiply(s, R);
    const total = aZero || sZero ? zero : Q.add(window, twoTails);
    const comparison = Object.assign({
      method: aZero ? "direct-a-zero" : sZero ? "already-undamped" : "finite-window-and-two-tails",
      windowBound: Q.format(window), totalBound: Q.format(total)
    }, targetFlags(total, epsilon));
    let derivative;
    if (sZero) {
      derivative = { available: false, value: null, quotientErrorBound: null,
        withinEpsilon: null, atMostEpsilon: null };
    } else {
      const sSquared = square(s);
      const derivativeValue = Q.divide(s, Q.add(sSquared, square(a)));
      const error = Q.divide(magnitude(h), Q.multiply("2", sSquared));
      derivative = Object.assign({ available: true, value: Q.format(derivativeValue),
        quotientErrorBound: Q.format(error) }, targetFlags(error, epsilon));
    }
    const paths = [
      { id: "axis", a: zero },
      { id: "diagonal", a: t },
      { id: "parabolic", a: square(t) }
    ].map(function (path) {
      return { id: path.id, a: Q.format(path.a), s: Q.format(t),
        F: familyValue(path.a, t, approximate), J: ordinaryValue(path.a, approximate) };
    });
    const result = {};
    INPUT_KEYS.forEach(function (key) { result[key] = Q.format(values[key]); });
    return freezeTree(Object.assign(result, {
      F: familyValue(a, s, approximate), J: ordinaryValue(a, approximate),
      tail: { available: !aZero, eachBound: aZero ? null : Q.format(eachTail),
        twoTailBound: aZero ? null : Q.format(twoTails) },
      comparison: comparison, derivative: derivative, paths: paths
    }));
  }

  return Object.freeze({ MAX_INPUT_LENGTH: MAX_INPUT_LENGTH,
    MAX_COMPONENT_DIGITS: MAX_COMPONENT_DIGITS, canonicalize: canonicalize, analyze: analyze });
});
