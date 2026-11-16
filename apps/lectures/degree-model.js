/* Exact arithmetic for the lecture's finite collection of circle maps.
 * A lift F represents f(exp(2πis))=exp(2πiF(s)). Its extension satisfies
 * F(s+k)=F(s)+k degree(f). Fractions contain safe Number integers; BigInt
 * intermediates prevent loss before reduction. Only a renderer uses decimals.
 * The topological classification is proved in the accompanying lecture.
 */
(function (root, factory) {
  const model = factory();
  if (typeof module === 'object' && module.exports) module.exports = model;
  else root.CircleDegreeMath = model;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const BOUNDS = Object.freeze({ MAX_PARAMETER_DENOMINATOR: 1000,
    MAX_EXTENDED_ABS_NUMERATOR: 1000000, MAX_EXTENDED_DENOMINATOR: 1000,
    MAX_FRACTION_INTEGER: Number.MAX_SAFE_INTEGER });
  const MAX = BigInt(BOUNDS.MAX_FRACTION_INTEGER);

  function integer(value, minimum, maximum, name) {
    if (!Number.isSafeInteger(value) || value < minimum || value > maximum) {
      throw new RangeError(name + ' must be an integer from ' + minimum + ' to ' + maximum);
    }
  }
  function gcd(a, b) {
    a = a < 0n ? -a : a;
    while (b !== 0n) { const next = a % b; a = b; b = next; }
    return a;
  }
  function reduced(n, d) {
    if (d === 0n) throw new RangeError('A fraction denominator cannot be zero.');
    if (d < 0n) { n = -n; d = -d; }
    const divisor = gcd(n, d);
    n /= divisor; d /= divisor;
    if (n < -MAX || n > MAX || d > MAX) throw new RangeError('Reduced fraction exceeds the safe-integer bound.');
    return Object.freeze({ n: Number(n), d: Number(d) });
  }
  function fraction(n, d = 1) {
    integer(n, -BOUNDS.MAX_FRACTION_INTEGER, BOUNDS.MAX_FRACTION_INTEGER, 'numerator');
    integer(d, 1, BOUNDS.MAX_FRACTION_INTEGER, 'denominator');
    return reduced(BigInt(n), BigInt(d));
  }
  function checkedFraction(value) {
    if (!value || typeof value !== 'object' || !Number.isSafeInteger(value.n) ||
        !Number.isSafeInteger(value.d) || value.d <= 0) {
      throw new TypeError('A turn must contain a safe-integer numerator and a positive safe-integer denominator.');
    }
    return fraction(value.n, value.d);
  }
  const ONE = fraction(1), TWO = fraction(2), HALF = fraction(1, 2);
  function add(a, b) { return reduced(BigInt(a.n) * BigInt(b.d) + BigInt(b.n) * BigInt(a.d), BigInt(a.d) * BigInt(b.d)); }
  function subtract(a, b) { return reduced(BigInt(a.n) * BigInt(b.d) - BigInt(b.n) * BigInt(a.d), BigInt(a.d) * BigInt(b.d)); }
  function multiply(a, b) { return reduced(BigInt(a.n) * BigInt(b.n), BigInt(a.d) * BigInt(b.d)); }
  function divide(a, b) { return reduced(BigInt(a.n) * BigInt(b.d), BigInt(a.d) * BigInt(b.n)); }
  function compare(a, b) {
    const difference = BigInt(a.n) * BigInt(b.d) - BigInt(b.n) * BigInt(a.d);
    return difference < 0n ? -1 : difference > 0n ? 1 : 0;
  }
  function floor(a) {
    const n = BigInt(a.n), d = BigInt(a.d);
    return Number(n >= 0n ? n / d : -((-n + d - 1n) / d));
  }
  function ceil(a) { return -floor(reduced(-BigInt(a.n), BigInt(a.d))); }
  function wrap(value) {
    const a = checkedFraction(value);
    const remainder = BigInt(a.n) % BigInt(a.d);
    return reduced(remainder < 0n ? remainder + BigInt(a.d) : remainder, BigInt(a.d));
  }
  function formatTurn(value) {
    const a = checkedFraction(value);
    return a.d === 1 ? String(a.n) : a.n + '/' + a.d;
  }
  function parameter(p, q, name = 'parameter') {
    integer(q, 1, BOUNDS.MAX_PARAMETER_DENOMINATOR, name + ' denominator');
    integer(p, 0, q, name + ' numerator');
    return fraction(p, q);
  }
  function vertex(p, q, n, d = 1) {
    return Object.freeze({ parameter: fraction(p, q), lift: fraction(n, d) });
  }
  const definitions = [
    ['identity', 'One counterclockwise turn', [vertex(0, 1, 0), vertex(1, 1, 1)], true],
    ['fold', 'Fold, return, then go around', [vertex(0, 1, 0), vertex(1, 4, 1, 2), vertex(1, 2, 0), vertex(1, 1, 1)], false],
    ['triangle', 'One turn out and back', [vertex(0, 1, 0), vertex(1, 2, 1), vertex(1, 1, 0)], false],
    ['reflection', 'One clockwise turn', [vertex(0, 1, 0), vertex(1, 1, -1)], true],
    ['double', 'Two counterclockwise turns', [vertex(0, 1, 0), vertex(1, 1, 2)], false],
    ['reverseTriple', 'Three clockwise turns', [vertex(0, 1, 0), vertex(1, 1, -3)], false],
    ['constant', 'Constant at 1', [vertex(0, 1, 0), vertex(1, 1, 0)], false],
    ['quarterRotation', 'Quarter-turn rotation', [vertex(0, 1, 1, 4), vertex(1, 1, 5, 4)], true]
  ];
  const MAPS = Object.freeze(definitions.map(([id, label, vertices, homeomorphism]) => {
    vertices = Object.freeze(vertices);
    const start = vertices[0].lift, end = vertices[vertices.length - 1].lift;
    const increment = subtract(end, start);
    if (increment.d !== 1) throw new Error('An authored lift must have integer endpoint increment.');
    const degree = increment.n;
    return Object.freeze({ id, label, vertices, degree, start, end, based: wrap(start).n === 0,
      homeomorphism, homotopyEquivalence: Math.abs(degree) === 1,
      homotopyInverseId: degree === 1 ? 'identity' : degree === -1 ? 'reflection' : null,
      diskExtendable: degree === 0 });
  }));
  const lookup = new Map(MAPS.map(map => [map.id, map]));
  function analyze(id) {
    if (typeof id !== 'string' || !lookup.has(id)) throw new RangeError('Unknown authored circle map.');
    return lookup.get(id);
  }
  function liftOnUnit(map, s) {
    for (let i = 1; i < map.vertices.length; i++) {
      const left = map.vertices[i - 1], right = map.vertices[i];
      if (compare(s, right.parameter) <= 0) {
        const proportion = divide(subtract(s, left.parameter), subtract(right.parameter, left.parameter));
        return add(left.lift, multiply(proportion, subtract(right.lift, left.lift)));
      }
    }
    throw new RangeError('The lift parameter must lie in [0,1].');
  }
  function extendedLift(map, s) {
    const turns = floor(s);
    return add(liftOnUnit(map, subtract(s, fraction(turns))), fraction(turns * map.degree));
  }
  function pointResult(s, lift, extra = {}) {
    return Object.freeze({ parameter: s, lift, wrapped: wrap(lift), ...extra });
  }
  function point(id, p, q = 1000) {
    const map = analyze(id), s = parameter(p, q);
    return pointResult(s, liftOnUnit(map, s));
  }
  function extend(id, n, d) {
    const map = analyze(id);
    integer(n, -BOUNDS.MAX_EXTENDED_ABS_NUMERATOR, BOUNDS.MAX_EXTENDED_ABS_NUMERATOR, 'extended numerator');
    integer(d, 1, BOUNDS.MAX_EXTENDED_DENOMINATOR, 'extended denominator');
    const s = fraction(n, d);
    return pointResult(s, extendedLift(map, s));
  }
  function homotopy(id, p, q, u, v) {
    const map = analyze(id), s = parameter(p, q), time = parameter(u, v, 'time');
    const authoredLift = liftOnUnit(map, s), standardLift = multiply(fraction(map.degree), s);
    const lift = add(multiply(subtract(ONE, time), authoredLift), multiply(time, standardLift));
    return pointResult(s, lift, { time, degree: map.degree });
  }
  function compose(outerId, innerId, p, q = 1000) {
    const outer = analyze(outerId), inner = analyze(innerId), s = parameter(p, q);
    const intermediate = liftOnUnit(inner, s);
    return pointResult(s, extendedLift(outer, intermediate), {
      intermediate, degree: outer.degree * inner.degree });
  }
  function concatenate(firstId, secondId, p, q = 1000) {
    const first = analyze(firstId), second = analyze(secondId), s = parameter(p, q);
    if (!first.based || !second.based) throw new RangeError('Concatenation requires both authored loops to be based at 1.');
    const lift = compare(s, HALF) <= 0
      ? liftOnUnit(first, multiply(TWO, s))
      : add(fraction(first.degree), liftOnUnit(second, subtract(multiply(TWO, s), ONE)));
    return pointResult(s, lift, { degree: first.degree + second.degree });
  }
  function preimages(id, p, q = 1000) {
    const map = analyze(id), target = wrap(parameter(p, q, 'target'));
    if (id === 'constant') return Object.freeze({ target, all: target.n === 0, parameters: Object.freeze([]) });
    const found = new Map();
    for (let i = 1; i < map.vertices.length; i++) {
      const left = map.vertices[i - 1], right = map.vertices[i];
      const increasing = compare(left.lift, right.lift) < 0;
      const minimum = increasing ? left.lift : right.lift, maximum = increasing ? right.lift : left.lift;
      const firstInteger = ceil(subtract(minimum, target)), lastInteger = floor(subtract(maximum, target));
      for (let k = firstInteger; k <= lastInteger; k++) {
        const proportion = divide(subtract(add(target, fraction(k)), left.lift), subtract(right.lift, left.lift));
        const s = wrap(add(left.parameter, multiply(proportion, subtract(right.parameter, left.parameter))));
        found.set(formatTurn(s), s);
      }
    }
    return Object.freeze({ target, all: false,
      parameters: Object.freeze([...found.values()].sort(compare)) });
  }
  return Object.freeze({ BOUNDS, MAPS, analyze, fraction, wrap, formatTurn,
    point, extend, homotopy, compose, concatenate, preimages });
});
