/* Exact models for Conditions Matter. No expression evaluation or dependencies.
 * parse accepts strings of at most 120 characters: signed integers, fractions
 * of signed integers, or finite decimals. Outer whitespace is ignored; internal
 * whitespace and exponent syntax are rejected. Every rational is a frozen,
 * reduced { n: BigInt, d: BigInt } with d > 0. Arithmetic accepts these values
 * or the same input strings. format/toString produces an exact integer/fraction.
 * toApprox returns { value, representable, exact, reason }. "representable"
 * means a finite approximation is available, including exact zero; it does NOT
 * mean exact binary representation. A nonzero value which rounds to zero, or
 * an overflowing value, returns value:null and an explicit reason. Rounding is
 * IEEE 754 round-to-nearest, ties-to-even, performed on integers.
 * quotient(a,b,x): original f_a(x) = (x²-a²)/(x-a), equation f_a(x)=b.
 * squareEquation(a,b): original sqrt((x-a)²)=b and its squared equation.
 * logIdentity(a,x): domains of log((x-a)²), 2log(x-a), 2log|x-a|.
 * All activity inputs are strings. All activity results are deeply frozen.
 */
(function (root, factory) {
  "use strict";
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.MathConditions = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const MAX_INPUT_LENGTH = 120;
  const rationals = new WeakSet();
  function absolute(value) { return value < 0n ? -value : value; }
  function gcd(a, b) {
    a = absolute(a); b = absolute(b);
    while (b !== 0n) { const remainder = a % b; a = b; b = remainder; }
    return a;
  }
  function rational(n, d) {
    if (d === 0n) throw new RangeError("A denominator cannot be zero.");
    if (d < 0n) { n = -n; d = -d; }
    const divisor = gcd(n, d);
    const result = Object.freeze({ n: n / divisor, d: d / divisor });
    rationals.add(result);
    return result;
  }
  function parse(input) {
    if (typeof input !== "string") throw new TypeError("Enter a rational number as text.");
    if (input.length > MAX_INPUT_LENGTH) throw new RangeError("Use at most " + MAX_INPUT_LENGTH + " characters.");
    const text = input.trim();
    if (/^[+-]?\d+(?:\/[+-]?\d+)?$/.test(text)) {
      const parts = text.split("/");
      return rational(BigInt(parts[0]), parts.length === 2 ? BigInt(parts[1]) : 1n);
    }
    if (/^[+-]?(?:\d+\.\d*|\.\d+)$/.test(text)) {
      const negative = text[0] === "-";
      const parts = text.replace(/^[+-]/, "").split(".");
      const digits = (parts[0] || "0") + parts[1];
      return rational((negative ? -1n : 1n) * BigInt(digits), 10n ** BigInt(parts[1].length));
    }
    throw new TypeError("Use an integer, fraction, or finite decimal; for example -3/2 or 0.75.");
  }
  function value(input) {
    if (typeof input === "string") return parse(input);
    if (input !== null && typeof input === "object" && rationals.has(input)) return input;
    throw new TypeError("Use rational text or a value returned by this model.");
  }
  function add(left, right) {
    const a = value(left), b = value(right);
    return rational(a.n * b.d + b.n * a.d, a.d * b.d);
  }
  function subtract(left, right) {
    const a = value(left), b = value(right);
    return rational(a.n * b.d - b.n * a.d, a.d * b.d);
  }
  function multiply(left, right) {
    const a = value(left), b = value(right);
    return rational(a.n * b.n, a.d * b.d);
  }
  function divide(left, right) {
    const a = value(left), b = value(right);
    if (b.n === 0n) throw new RangeError("Cannot divide by zero.");
    return rational(a.n * b.d, a.d * b.n);
  }
  function compare(left, right) {
    const a = value(left), b = value(right);
    const difference = a.n * b.d - b.n * a.d;
    return difference < 0n ? -1 : difference > 0n ? 1 : 0;
  }
  function format(input) {
    const q = value(input);
    return q.d === 1n ? String(q.n) : String(q.n) + "/" + String(q.d);
  }
  function roundedInteger(n, d) {
    let integer = n / d;
    const remainder = n % d;
    if (2n * remainder > d || (2n * remainder === d && integer % 2n !== 0n)) integer += 1n;
    return { integer: integer, exact: remainder === 0n };
  }
  function unavailable(reason) {
    return Object.freeze({ value: null, representable: false, exact: false, reason: reason });
  }
  function toApprox(input) {
    const q = value(input);
    if (q.n === 0n) return Object.freeze({ value: 0, representable: true, exact: true, reason: null });
    const numerator = absolute(q.n), denominator = q.d;
    let exponent = numerator.toString(2).length - denominator.toString(2).length;
    const belowPower = exponent >= 0
      ? numerator < (denominator << BigInt(exponent))
      : (numerator << BigInt(-exponent)) < denominator;
    if (belowPower) exponent -= 1;
    if (exponent > 1023) return unavailable("overflow");
    if (exponent < -1075) return unavailable("underflow");
    const shift = exponent < -1022 ? 1074 : 52 - exponent;
    const rounded = shift >= 0
      ? roundedInteger(numerator << BigInt(shift), denominator)
      : roundedInteger(numerator, denominator << BigInt(-shift));
    if (rounded.integer === 0n) return unavailable("underflow");
    const magnitude = Number(rounded.integer) * Math.pow(2, -shift);
    if (!Number.isFinite(magnitude)) return unavailable("overflow");
    return Object.freeze({ value: q.n < 0n ? -magnitude : magnitude,
      representable: true, exact: rounded.exact, reason: null });
  }
  function quotient(aInput, bInput, xInput) {
    const a = parse(aInput), b = parse(bInput), x = parse(xInput);
    const denominator = subtract(x, a);
    const originalDefined = denominator.n !== 0n;
    // The original denominator is checked before attempting its division.
    const originalValue = originalDefined
      ? divide(subtract(multiply(x, x), multiply(a, a)), denominator) : null;
    const candidate = subtract(b, a);
    return Object.freeze({ a: a, b: b, x: x, exclusion: a,
      originalDefined: originalDefined, originalValue: originalValue,
      simplifiedValue: add(x, a), candidate: candidate,
      candidateAdmissible: compare(candidate, a) !== 0 });
  }
  function sortedUnique(left, right) {
    const order = compare(left, right);
    return Object.freeze(order === 0 ? [left] : order < 0 ? [left, right] : [right, left]);
  }
  function squareEquation(aInput, bInput) {
    const a = parse(aInput), b = parse(bInput);
    const magnitude = b.n < 0n ? rational(-b.n, b.d) : b;
    const squaredCandidates = sortedUnique(subtract(a, magnitude), add(a, magnitude));
    const negative = b.n < 0n;
    return Object.freeze({ a: a, b: b,
      roots: negative ? Object.freeze([]) : squaredCandidates,
      squaredCandidates: squaredCandidates,
      spuriousRoots: negative ? squaredCandidates : Object.freeze([]),
      hasSpurious: negative });
  }
  function logIdentity(aInput, xInput) {
    const a = parse(aInput), x = parse(xInput);
    const distance = subtract(x, a), nonzero = distance.n !== 0n;
    return Object.freeze({ a: a, x: x, distance: distance,
      absoluteDistance: distance.n < 0n ? rational(-distance.n, distance.d) : distance,
      originalDefined: nonzero, naiveDefined: distance.n > 0n, repairedDefined: nonzero });
  }
  return Object.freeze({ MAX_INPUT_LENGTH: MAX_INPUT_LENGTH, parse: parse,
    add: add, subtract: subtract, multiply: multiply, divide: divide,
    compare: compare, format: format, toString: format, toApprox: toApprox,
    quotient: quotient, squareEquation: squareEquation, logIdentity: logIdentity });
});
