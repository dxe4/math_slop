/**
 * Exact, bounded checkers for the original preview exercise contracts.
 *
 * Public input schema: answerFields(exercise) describes an object whose keys
 * are the returned field keys. Text is the normal browser representation;
 * numbers, null and arrays are also accepted where the source contracts use
 * them. Scalar answers use `value`; a route uses `route`; a selection uses
 * `choice`. Record answers retain their authored keys. Open explanations are
 * optional drafts and are never assessed as proofs. This module is server-only:
 * answerFields deliberately contains no expected answers, hints or solutions.
 *
 * No learner text is executed. Arithmetic uses normalized BigInt fractions;
 * polynomial parsing has explicit token, degree, size and exponent bounds.
 */

const MAX_INPUT = 2048;
const MAX_DIGITS = 80;
const MAX_BITS = 4096;
const MAX_SET_SIZE = 100;
const MAX_POLY_DEGREE = 8;
const MAX_TOKENS = 128;
const MAX_PARTITION_CUTS = 32;
const MAX_PARTITION_DIGITS = 512;
const MAX_POLYLINE_VERTICES = 17;
const MAX_POLYLINE_DIGITS = 512;
const MAX_PROFILE_CELLS = 16;
const MAX_PROFILE_DIGITS = 512;
const FRACTION_PERMISSION_MODELS = new Set(['thirds_halves_distinct_pair', 'thirds_halves_permission_rows', 'fifths_budget_six_distinct_pair']);
const ARGUMENT_WITNESS_MODELS = new Set(['shared_even_witness_gap', 'even_sum_both_even_counterexample', 'even_product_both_even_counterexample']);
const FRACTION_PERMISSION_ROWS = [
  { key: 'grid_5', rule: 'grid', limit: 5 },
  { key: 'grid_6', rule: 'grid', limit: 6 },
  { key: 'grid_12', rule: 'grid', limit: 12 },
  { key: 'budget_4', rule: 'budget', limit: 4 },
  { key: 'budget_6', rule: 'budget', limit: 6 },
];

class InvalidAnswer extends Error {}

function invalid(message) {
  throw new InvalidAnswer(message);
}

function own(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

function text(value, label = 'answer') {
  if (typeof value === 'number') {
    if (!Number.isFinite(value) || Math.abs(value) > Number.MAX_SAFE_INTEGER) {
      invalid(`Enter ${label} as exact text rather than an unsafe number.`);
    }
    value = String(value);
  }
  if (typeof value !== 'string') invalid(`Enter ${label} as text.`);
  if (value.length > MAX_INPUT) invalid(`The ${label} is too long.`);
  return value.trim().replaceAll('−', '-').replaceAll('⁄', '/');
}

function required(input, key) {
  if (!own(input, key)) invalid(`Complete the ${key.replaceAll('_', ' ')} field.`);
  return input[key];
}

function bounded(value) {
  if (value.toString(2).length > MAX_BITS) invalid('The arithmetic is too large for this exercise.');
  return value;
}

function gcd(a, b) {
  a = a < 0n ? -a : a;
  b = b < 0n ? -b : b;
  while (b !== 0n) [a, b] = [b, a % b];
  return a;
}

function rational(n, d = 1n) {
  bounded(n);
  bounded(d);
  if (d === 0n) invalid('A denominator cannot be zero.');
  if (d < 0n) [n, d] = [-n, -d];
  const common = gcd(n, d);
  return { n: n / common, d: d / common };
}

function parseRational(value, label = 'answer') {
  const source = text(value, label);
  if (!source) invalid(`Complete the ${label} field.`);
  if ((source.match(/\d/g) || []).length > MAX_DIGITS) invalid(`The ${label} has too many digits.`);
  const fraction = /^([+-]?\d+)\s*\/\s*([+-]?\d+)$/.exec(source);
  if (fraction) return rational(BigInt(fraction[1]), BigInt(fraction[2]));
  const decimal = /^([+-]?)(?:(\d+)(?:\.(\d*))?|\.(\d+))$/.exec(source);
  if (!decimal) invalid(`Enter ${label} as an integer, finite decimal, or exact fraction a/b.`);
  const fractionDigits = decimal[3] ?? decimal[4] ?? '';
  const whole = decimal[2] ?? '0';
  const sign = decimal[1] === '-' ? -1n : 1n;
  return rational(sign * BigInt(whole + fractionDigits), 10n ** BigInt(fractionDigits.length));
}

function parseInteger(value, label = 'answer') {
  const parsed = parseRational(value, label);
  if (parsed.d !== 1n) invalid(`Enter a whole integer for ${label}.`);
  return parsed.n;
}

function parseBound(value, key) {
  if (value === null) return null;
  const source = text(value, key).toLowerCase();
  if (['null', 'none', 'does not exist'].includes(source)) return null;
  if (source === 'no minimum' || source === 'no maximum') {
    const field = source === 'no minimum' ? 'min' : 'max';
    if (key !== field) invalid(`Use “${source}” only in the ${field === 'min' ? 'minimum' : 'maximum'} field.`);
    return null;
  }
  return parseRational(source, key);
}

function same(a, b) { return a.n === b.n && a.d === b.d; }
function compare(a, b) {
  const difference = bounded(a.n * b.d) - bounded(b.n * a.d);
  return difference < 0n ? -1 : difference > 0n ? 1 : 0;
}
function add(a, b) { return rational(a.n * b.d + b.n * a.d, a.d * b.d); }
function multiply(a, b) { return rational(a.n * b.n, a.d * b.d); }
function divide(a, b) { return rational(a.n * b.d, a.d * b.n); }
function negative(a) { return { n: -a.n, d: a.d }; }
function rationalKey(value) { return `${value.n}/${value.d}`; }

function setItems(value, label) {
  if (Array.isArray(value)) {
    if (value.length > MAX_SET_SIZE) invalid(`The ${label} contains too many entries.`);
    return value;
  }
  let source = text(value, label);
  if (source === '') invalid(`Enter ${label} explicitly; use {} for an empty set.`);
  if (source === '∅' || source === '[]') return [];
  if (source.startsWith('{') || source.endsWith('}')) {
    if (!source.startsWith('{') || !source.endsWith('}')) invalid(`Use matching braces in ${label}.`);
    source = source.slice(1, -1).trim();
  }
  if (source === '') return [];
  // Recognize a complete singleton fraction before splitting a whitespace list.
  // Commas separate multiple members containing spaces around their slashes;
  // otherwise whitespace still separates ordinary lists such as "4 9".
  const singletonFraction = /^[+-]?\d+\s*\/\s*[+-]?\d+$/.test(source);
  const items = source.includes(',') ? source.split(',') : singletonFraction ? [source] : source.split(/\s+/);
  if (items.some(item => item.trim() === '')) invalid(`Remove empty entries from ${label}.`);
  if (items.length > MAX_SET_SIZE) invalid(`The ${label} contains too many entries.`);
  return items;
}

function parseSet(value, label, itemParser = parseInteger) {
  return new Set(setItems(value, label).map(item => {
    const parsed = itemParser(item, label);
    return typeof parsed === 'object' ? rationalKey(parsed) : String(parsed);
  }));
}

function sameSet(actual, expected) {
  return actual.size === expected.size && [...actual].every(item => expected.has(item));
}

function parseSymbol(value, label) {
  const source = text(value, label);
  if (!/^[A-Za-z][A-Za-z0-9_]{0,19}$/.test(source)) invalid(`Use named elements such as v and w in ${label}.`);
  return source;
}

function parseBoolean(value, label) {
  if (typeof value === 'boolean') return value;
  const source = text(value, label).toLowerCase();
  if (['true', 'yes'].includes(source)) return true;
  if (['false', 'no'].includes(source)) return false;
  invalid(`Enter yes or no for ${label}.`);
}

function normalizePolynomial(coefficients) {
  while (coefficients.length > 1 && coefficients.at(-1).n === 0n) coefficients.pop();
  if (coefficients.length > MAX_POLY_DEGREE + 1) invalid(`Use a polynomial of degree at most ${MAX_POLY_DEGREE}.`);
  return coefficients;
}

function polynomialAdd(a, b) {
  return normalizePolynomial(Array.from({ length: Math.max(a.length, b.length) }, (_, index) =>
    add(a[index] || rational(0n), b[index] || rational(0n))));
}

function polynomialMultiply(a, b) {
  if (a.length + b.length - 2 > MAX_POLY_DEGREE) invalid(`Use a polynomial of degree at most ${MAX_POLY_DEGREE}.`);
  const result = Array.from({ length: a.length + b.length - 1 }, () => rational(0n));
  for (let left = 0; left < a.length; left += 1) {
    for (let right = 0; right < b.length; right += 1) {
      result[left + right] = add(result[left + right], multiply(a[left], b[right]));
    }
  }
  return normalizePolynomial(result);
}

/** Restricted grammar: x, finite decimal constants, + - * /, (), powers 0..8.
 * Division is allowed only by a nonzero constant polynomial. Implicit products
 * such as 2x and 2(x+1) are accepted; functions and rational functions are not.
 */
function parsePolynomial(value) {
  const source = text(value, 'simplified expression').replaceAll('²', '^2').replaceAll('³', '^3');
  if (!source) invalid('Complete the simplified expression field.');
  if (source.length > 512) invalid('The expression is too long.');
  const tokens = [];
  const tokenPattern = /\s*(\d+(?:\.\d*)?|\.\d+|x|[+\-*/^()])/gy;
  let offset = 0;
  while (offset < source.length) {
    tokenPattern.lastIndex = offset;
    const match = tokenPattern.exec(source);
    if (!match) invalid('Use only x, numbers, parentheses, +, −, *, / and small integer powers.');
    tokens.push(match[1]);
    offset = tokenPattern.lastIndex;
    if (tokens.length > MAX_TOKENS) invalid('The expression has too many terms.');
  }
  let position = 0;
  const peek = () => tokens[position];
  const take = () => tokens[position++];
  const isNumber = token => token !== undefined && /^(?:\d|\.)/.test(token);

  function primary() {
    const token = take();
    if (token === 'x') return [rational(0n), rational(1n)];
    if (isNumber(token)) return [parseRational(token, 'coefficient')];
    if (token === '(') {
      const value = sum();
      if (take() !== ')') invalid('Use matching parentheses in the expression.');
      return value;
    }
    invalid('An expression term is missing or malformed.');
  }

  function power() {
    let value = primary();
    if (peek() === '^') {
      take();
      const exponentToken = take();
      if (!/^\d+$/.test(exponentToken ?? '') || exponentToken.length > 2) invalid('Use a nonnegative integer power from 0 to 8.');
      const exponent = Number(exponentToken);
      if (exponent > MAX_POLY_DEGREE) invalid('Use a nonnegative integer power from 0 to 8.');
      let result = [rational(1n)];
      for (let count = 0; count < exponent; count += 1) result = polynomialMultiply(result, value);
      value = result;
    }
    return value;
  }

  function unary() {
    if (peek() === '+') { take(); return unary(); }
    if (peek() === '-') { take(); return unary().map(negative); }
    return power();
  }

  function product() {
    let value = unary();
    while (peek() === '*' || peek() === '/' || peek() === 'x' || peek() === '(') {
      const operator = (peek() === '*' || peek() === '/') ? take() : '*';
      const right = unary();
      if (operator === '/') {
        if (right.length !== 1) invalid('For this checker, divide only by a nonzero constant; enter the simplified polynomial.');
        value = value.map(coefficient => divide(coefficient, right[0]));
      } else value = polynomialMultiply(value, right);
    }
    return value;
  }

  function sum() {
    let value = product();
    while (peek() === '+' || peek() === '-') {
      const operator = take();
      const right = product();
      value = polynomialAdd(value, operator === '-' ? right.map(negative) : right);
    }
    return value;
  }

  const result = sum();
  if (position !== tokens.length) invalid('The expression contains an unexpected symbol or unmatched parenthesis.');
  return normalizePolynomial(result);
}

function samePolynomial(a, b) {
  return a.length === b.length && a.every((coefficient, index) => same(coefficient, b[index]));
}

// Opt-in rational functions use exact polynomial identities and explicit real
// domains. Existing polynomial/legacy answer contracts keep their semantics.
const MAX_FUNCTION_EXCLUSIONS = 32;
function rationalFunctionUnion(...sets) {
  if (sets.some(set => set === null)) return null;
  const result = new Set(sets.flatMap(set => [...set]));
  if (result.size > MAX_FUNCTION_EXCLUSIONS) invalid('Use at most 32 excluded rational inputs.');
  return result;
}
function rationalFunctionIntegerSqrt(value) {
  if (value < 2n) return value;
  let current = 1n << BigInt(Math.ceil(value.toString(2).length / 2));
  for (;;) {
    const next = (current + value / current) / 2n;
    if (next >= current) return current;
    current = next;
  }
}
function certifiedPolynomialZeros(poly) {
  if (poly.length === 1) return poly[0].n === 0n ? null : new Set();
  if (poly.length === 2) return new Set([rationalKey(divide(negative(poly[0]), poly[1]))]);
  if (poly.length !== 3) return null;
  const [c,b,a] = poly;
  const discriminant = add(multiply(b,b), negative(multiply(rational(4n),multiply(a,c))));
  if (discriminant.n < 0n) return new Set();
  const numerator = rationalFunctionIntegerSqrt(discriminant.n), denominator = rationalFunctionIntegerSqrt(discriminant.d);
  if (numerator*numerator !== discriminant.n || denominator*denominator !== discriminant.d) return null;
  const root = rational(numerator,denominator), divisor = multiply(rational(2n),a);
  return new Set([rationalKey(divide(add(negative(b),root),divisor)),rationalKey(divide(add(negative(b),negative(root)),divisor))]);
}
function rationalFunctionNode(numerator, denominator, excluded = new Set(), numeratorRoots = null, denominatorRoots = null) {
  numerator = normalizePolynomial(numerator); denominator = normalizePolynomial(denominator);
  if (denominator.length === 1 && denominator[0].n === 0n) invalid('A divisor cannot be identically zero.');
  denominatorRoots ??= certifiedPolynomialZeros(denominator);
  if (denominatorRoots === null) invalid('Use denominators factored into rational linear factors or quadratics with certified rational or non-real roots.');
  return {numerator,denominator,excluded:rationalFunctionUnion(excluded,denominatorRoots),numeratorRoots:numeratorRoots??certifiedPolynomialZeros(numerator),denominatorRoots};
}
function rationalFunctionProduct(left,right,divideBy = false) {
  if (divideBy) {
    if (right.numerator.length === 1 && right.numerator[0].n === 0n) invalid('A divisor cannot be identically zero.');
    if (right.numeratorRoots === null) invalid('This divisor needs roots outside the bounded rational-domain format. Factor it into supported factors or use another answer format.');
    return rationalFunctionNode(polynomialMultiply(left.numerator,right.denominator),polynomialMultiply(left.denominator,right.numerator),
      rationalFunctionUnion(left.excluded,right.excluded,right.numeratorRoots),
      rationalFunctionUnion(left.numeratorRoots,right.denominatorRoots),rationalFunctionUnion(left.denominatorRoots,right.numeratorRoots));
  }
  return rationalFunctionNode(polynomialMultiply(left.numerator,right.numerator),polynomialMultiply(left.denominator,right.denominator),
    rationalFunctionUnion(left.excluded,right.excluded),rationalFunctionUnion(left.numeratorRoots,right.numeratorRoots),rationalFunctionUnion(left.denominatorRoots,right.denominatorRoots));
}
function parseRationalFunction(value) {
  const source = text(value,'rational expression').replaceAll('²','^2').replaceAll('³','^3');
  if (!source || source.length > 512) invalid('Enter a rational expression with at most 512 characters.');
  const tokens = [], pattern = /\s*(\d+(?:\.\d*)?|\.\d+|x|[+\-*/^()])/gy;
  let offset = 0;
  while (offset < source.length) {
    pattern.lastIndex = offset;
    const match = pattern.exec(source);
    if (!match) invalid('Use x, rational numbers, +, -, *, /, parentheses and integer powers from -8 to 8.');
    tokens.push(match[1]);offset = pattern.lastIndex;
    if (tokens.length > MAX_TOKENS) invalid('The rational expression has too many terms.');
  }
  let position = 0, depth = 0;
  const peek = () => tokens[position],take = () => tokens[position++];
  const number = token => typeof token === 'string' && /^(?:\d|\.)/.test(token);
  const one = () => rationalFunctionNode([rational(1n)],[rational(1n)]);
  function primary() {
    const token = take();
    if (token === 'x') return rationalFunctionNode([rational(0n),rational(1n)],[rational(1n)]);
    if (number(token)) return rationalFunctionNode([parseRational(token,'coefficient')],[rational(1n)]);
    if (token === '(') {
      if (++depth > 24) invalid('Use at most 24 nested parentheses.');
      const result = sum();
      if (take() !== ')') invalid('Use matching parentheses in the rational expression.');
      depth--;return result;
    }
    invalid('A rational-expression term is missing or malformed.');
  }
  function power() {
    let value = primary();
    if (peek() !== '^') return value;
    take();let sign = 1;
    if (peek() === '-' || peek() === '+') sign = take() === '-' ? -1 : 1;
    const token = take();
    if (!/^\d{1,2}$/.test(token??'') || Number(token)>8) invalid('Use an integer power from -8 to 8.');
    const exponent = sign*Number(token);
    if (exponent < 0) value = rationalFunctionProduct(one(),value,true);
    let result = one();
    // A zero power is the constant polynomial on the base's existing domain.
    result.excluded = new Set(value.excluded);
    for (let count=0;count<Math.abs(exponent);count++) result = rationalFunctionProduct(result,value);
    return result;
  }
  function unary() {
    if (peek() === '+') {take();return unary();}
    if (peek() === '-') {take();const value=unary();return {...value,numerator:value.numerator.map(negative)};}
    return power();
  }
  function product() {
    let value = unary();
    while (peek()==='*'||peek()==='/'||peek()==='x'||peek()==='(') {
      const operator = peek()==='*'||peek()==='/' ? take() : '*';
      value = rationalFunctionProduct(value,unary(),operator==='/');
    }
    return value;
  }
  function sum() {
    let value = product();
    while (peek()==='+'||peek()==='-') {
      const operator = take(),right = product();
      const second = polynomialMultiply(right.numerator,value.denominator);
      value = rationalFunctionNode(polynomialAdd(polynomialMultiply(value.numerator,right.denominator),operator==='-'?second.map(negative):second),
        polynomialMultiply(value.denominator,right.denominator),rationalFunctionUnion(value.excluded,right.excluded),null,rationalFunctionUnion(value.denominatorRoots,right.denominatorRoots));
    }
    return value;
  }
  const result = sum();
  if (position !== tokens.length) invalid('The rational expression has an unexpected token or unmatched parenthesis.');
  return result;
}
function rationalFunctionText(value) {
  const poly = values => values.flatMap((coefficient,index)=>coefficient.n===0n?[]:[rationalText(coefficient)+(index?'*x^'+index:'')]).join(' + ') || '0';
  const canonical = '('+poly(value.numerator)+')/('+poly(value.denominator)+')';
  if (canonical.length>4096) invalid('The expanded rational expression exceeds the display budget.');
  return canonical;
}
function rationalFunctionIdentityProduct(left,right) {
  // Final cross-products may have degree16; input/intermediate polynomials
  // remain bounded by degree8, with the existing exact coefficient budget.
  const result=Array.from({length:left.length+right.length-1},()=>rational(0n));
  for(let i=0;i<left.length;i++)for(let j=0;j<right.length;j++)result[i+j]=add(result[i+j],multiply(left[i],right[j]));
  while(result.length>1&&result.at(-1).n===0n)result.pop();
  return result;
}
function rationalFunctionContract(answer) {
  try {
    if(!answer||Object.keys(answer).filter(key=>key!=='checker_scope').sort().join(',')!=='domain,expected,kind'||answer.kind!=='rational_function'
      ||answer.checker_scope!==undefined&&(typeof answer.checker_scope!=='string'||!answer.checker_scope.trim()||answer.checker_scope.length>1000)
      ||!answer.domain||typeof answer.domain!=='object'||Array.isArray(answer.domain)||Object.keys(answer.domain).sort().join(',')!=='excluded,variable'
      ||answer.domain.variable!=='x'||typeof answer.expected!=='string'||!Array.isArray(answer.domain.excluded)||answer.domain.excluded.length>MAX_FUNCTION_EXCLUSIONS)return null;
    const excluded=parseSet(answer.domain.excluded,'authored excluded inputs',parseRational);
    if(excluded.size!==answer.domain.excluded.length)return null;
    const expected=parseRationalFunction(answer.expected);rationalFunctionText(expected);
    if([...expected.excluded].some(value=>!excluded.has(value)))return null;
    return {expected,excluded};
  } catch(error) {if(error instanceof InvalidAnswer)return null;throw error;}
}

const UNIT_FACTORS = new Map([
  ['m/s', rational(1n)], ['metre/second', rational(1n)], ['metres/second', rational(1n)],
  ['meter/second', rational(1n)], ['meters/second', rational(1n)],
  ['metrepersecond', rational(1n)], ['metrespersecond', rational(1n)],
  ['meterpersecond', rational(1n)], ['meterspersecond', rational(1n)],
  ['cm/s', rational(1n, 100n)], ['mm/s', rational(1n, 1000n)],
  ['km/s', rational(1000n)], ['km/h', rational(5n, 18n)], ['m/min', rational(1n, 60n)],
]);

function checkVelocity(answer, input) {
  const value = parseRational(required(input, 'value'), 'velocity');
  const unit = text(required(input, 'unit'), 'unit').toLowerCase().replaceAll(/\s+/g, '');
  const factor = UNIT_FACTORS.get(unit);
  if (!factor) {
    if (['m', 'metre', 'meter', 'metres', 'meters', 's', 'seconds', 'm/s^2', 'm/s²'].includes(unit)) return false;
    invalid('Use a supported velocity unit: m/s, cm/s, mm/s, km/s, km/h, or m/min.');
  }
  return same(multiply(value, factor), rational(BigInt(answer.expected.numerator), BigInt(answer.expected.denominator)));
}

function routeItems(value) {
  if (Array.isArray(value)) {
    if (value.length > MAX_SET_SIZE) invalid('The route is too long.');
    return value.map(item => text(item, 'vertex'));
  }
  const source = text(value, 'route');
  if (!source) invalid('Enter a route using the named vertices.');
  if (/^[A-Z]+$/.test(source)) return [...source];

  const route = [];
  let token = '';
  let explicitStart = true;
  const flush = () => {
    if (token) {
      route.push(token);
      token = '';
      explicitStart = false;
    }
  };
  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    if (character === ',' || character === '→') {
      flush();
      explicitStart = true;
    } else if (character === '-' && source[index + 1] === '>') {
      flush();
      explicitStart = true;
      index += 1;
    } else if (/\s/.test(character)) {
      flush();
    } else if (character === '-') {
      // Preserve a leading name sign in an explicit comma/arrow field.
      // An adjacent numeric sign after whitespace is also part of its name.
      if (!token && (explicitStart || /^[0-9]$/.test(source[index + 1] ?? ''))) token = '-';
      else flush();
    } else {
      token += character;
    }
  }
  flush();
  return route;
}

function checkRoute(answer, input) {
  const route = routeItems(required(input, 'route'));
  const constraints = answer.expected_constraints;
  const vertices = new Set(constraints.edges.flat());
  if (route.some(vertex => !vertices.has(vertex))) invalid('Use only the named graph vertices.');
  if (route.length !== constraints.edges.length + 1 || route[0] !== constraints.start || route.at(-1) !== constraints.end) return false;
  const key = (left, right) => constraints.directed ? `${left}:${right}` : [left, right].sort().join(':');
  const remaining = new Map();
  for (const [left, right] of constraints.edges) {
    const edge = key(left, right);
    remaining.set(edge, (remaining.get(edge) || 0) + 1);
  }
  for (let index = 1; index < route.length; index += 1) {
    const edge = key(route[index - 1], route[index]);
    if (!remaining.get(edge)) return false;
    remaining.set(edge, remaining.get(edge) - 1);
  }
  return [...remaining.values()].every(count => count === 0);
}

function optionalExplanation(input) {
  if (!own(input, 'explanation')) return;
  if (typeof input.explanation !== 'string' || input.explanation.length > 5000) invalid('Keep the explanation draft to at most 5,000 characters.');
}

function integerWitnessRole(answer) {
  if (answer.public_role === undefined) return { key: 'N', label: 'Whole-tail witness N', placeholder: 'A positive integer', explanation: 'Explain why your witness controls every later term; this text is not automatically proof-checked.' };
  if (answer.public_role === 'cover_index') return { key: 'm', label: 'Cover index m', placeholder: 'An exact integer index from the stated cover family', explanation: 'Explain why this one open set contains every point of K; this text is not automatically proof-checked.' };
  return null;
}

export function hasIntegerWitnessContract(answer) {
  return answer?.kind === 'integer_witness_with_open_reasoning' && integerWitnessRole(answer) !== null
    && answer.expected_constraints?.integer === true
    && Number.isSafeInteger(answer.expected_constraints.minimum_inclusive)
    && answer.expected_constraints.minimum_inclusive >= 1;
}

export function hasReciprocalAffineCoverContract(answer) {
  return answer?.kind === 'reciprocal_affine_cover_witness_with_open_reasoning'
    && Number.isSafeInteger(answer.expected_constraints?.minimum_index)
    && answer.expected_constraints.minimum_index >= 2;
}

function darbouxPartitionContract(answer) {
  if (answer?.kind !== 'darboux_partition_with_open_reasoning') return null;
  const constraints = answer.expected_constraints;
  if (!['identity', 'point_spike'].includes(constraints?.model)) return null;
  const privateRational = value => {
    if (typeof value !== 'string' || (value.match(/\d/g) || []).length > 16) return null;
    try { return parseRational(value); } catch { return null; }
  };
  const tolerance = privateRational(constraints.maximum_gap_exclusive);
  if (!tolerance || compare(tolerance, rational(0n)) <= 0 || compare(tolerance, rational(1n)) > 0) return null;
  // At most 31 cells have identity gap at least 1/31. A strict task at or
  // below that tolerance would have no passing partition in this format.
  if (constraints.model === 'identity') return constraints.spike_at === undefined && compare(tolerance, rational(1n, 31n)) > 0 ? { model: 'identity', tolerance } : null;
  const spike = privateRational(constraints.spike_at);
  return spike && compare(spike, rational(0n)) > 0 && compare(spike, rational(1n)) < 0
    ? { model: 'point_spike', tolerance, spike } : null;
}

export function hasDarbouxPartitionContract(answer) { return darbouxPartitionContract(answer) !== null; }

export function hasMvtConstructionContract(answer) {
  return (answer?.kind === 'mvt_polyline_with_open_reasoning' && answer.expected_constraints?.model === 'unit_secant_avoidance')
    || (answer?.kind === 'mvt_interval_with_open_reasoning' && answer.expected_constraints?.model === 'tilted_absolute_value');
}

export function hasSignedStepConstructionContract(answer) {
  return (answer?.kind === 'signed_step_profile_with_open_reasoning' && answer.expected_constraints?.model === 'unit_signed_area')
    || (answer?.kind === 'moving_input_integral_tail_with_open_reasoning' && answer.expected_constraints?.model === 'signed_thirds');
}

export function hasFiniteImageConstructionContract(answer) {
  return (answer?.kind === 'finite_image_counterexample_with_open_reasoning' && answer.expected_constraints?.model === 'six_to_three_strict_intersection')
    || (answer?.kind === 'finite_image_domain_with_open_reasoning' && answer.expected_constraints?.model === 'paired_fibers_full_image');
}

export function hasFractionPermissionsContract(answer) {
  const constraints = answer?.expected_constraints;
  return answer?.kind === 'fraction_permissions_with_open_reasoning'
    && constraints !== null && typeof constraints === 'object' && !Array.isArray(constraints)
    && Object.keys(constraints).length === 1 && own(constraints, 'model')
    && FRACTION_PERMISSION_MODELS.has(constraints.model);
}

export function hasArgumentWitnessPairContract(answer) {
  const constraints = answer?.expected_constraints;
  return answer?.kind === 'argument_witness_pair_with_open_reasoning'
    && constraints !== null && typeof constraints === 'object' && !Array.isArray(constraints)
    && Object.keys(constraints).length === 1 && own(constraints, 'model')
    && ARGUMENT_WITNESS_MODELS.has(constraints.model);
}

function parseFractionPermission(value, label, allowNone = false) {
  if (typeof value !== 'string') invalid(`Enter ${label} as exact rational text.`);
  // text checks the raw field limit before trimming, including a padded none.
  const source = text(value, label);
  if (allowNone && source.toLowerCase() === 'none') return null;
  return parseRational(value, label);
}

function strictlyInside(value, lower, upper) {
  return compare(value, lower) > 0 && compare(value, upper) < 0;
}

function finiteFractionPermissions(rule, limit, lower, upper) {
  const permitted = new Set();
  const denominators = rule === 'grid' ? [limit] : Array.from({ length: limit }, (_, i) => i + 1);
  // The fixed tasks lie inside (0,1), so this enumerates every permitted
  // grid point or reduced-denominator-budget value. Reduction deduplicates
  // writings such as 2/6 and 1/3. A none verdict uses the complete finite set.
  for (const denominator of denominators) for (let numerator = 0; numerator <= denominator; numerator++) {
    const value = rational(BigInt(numerator), BigInt(denominator));
    if (strictlyInside(value, lower, upper)) permitted.add(rationalKey(value));
  }
  return permitted;
}

function parseSixOutputMap(value) {
  const entries = text(value, 'ordered function outputs').split(',');
  if (entries.length !== 6) invalid('Give exactly six comma-separated outputs, in f(1) through f(6) order, without braces.');
  return entries.map((entry, index) => {
    const output = parseInteger(entry, `output f(${index + 1})`);
    if (output < 0n || output > 2n) invalid('Every output must belong to the declared codomain {0,1,2}.');
    return String(output); // Preserve order and repeated outputs; this is a map.
  });
}

function parseSixInputSubset(value, label) {
  const members = parseSet(value, label);
  // Guard before converting an input label to a bounded array index. Sets may
  // be empty and equivalent repeated/reordered integer members are allowed.
  const domain = new Set(['1', '2', '3', '4', '5', '6']);
  if ([...members].some(member => !domain.has(member))) invalid(`Every member of ${label} must belong to the domain {1,2,3,4,5,6}.`);
  return members;
}

function finiteImage(outputs, subset) {
  return new Set([...subset].map(member => outputs[Number(member) - 1]));
}

function strictImageIntersection(outputs, A, B) {
  const imageA = finiteImage(outputs, A), imageB = finiteImage(outputs, B);
  const commonInputs = new Set([...A].filter(member => B.has(member)));
  const imageCommon = finiteImage(outputs, commonInputs);
  // The image of an intersection is always contained in the intersection of
  // the images. Strictness needs a shared output missing from imageCommon.
  return [...imageA].some(output => imageB.has(output) && !imageCommon.has(output));
}

function parseSignedStepProfile(value) {
  const source = text(value, 'signed step profile');
  const lines = source.split(/\r\n?|\n/);
  if (lines.length < 1 || lines.length > MAX_PROFILE_CELLS) invalid('Use from 1 to 16 cells, one right endpoint,height pair per line.');
  if ((source.match(/\d/g) || []).length > MAX_PROFILE_DIGITS) invalid('Use at most 512 digits in the complete profile.');
  const cells = lines.map((line, index) => {
    const pair = line.split(',');
    if (pair.length !== 2) invalid('Write one right endpoint,height pair per line, without parentheses.');
    return pair.map((coordinate, axis) => parseRational(coordinate, `cell ${index + 1} ${axis === 0 ? 'right endpoint' : 'height'}`));
  });
  let left = rational(0n);
  const one = rational(1n);
  for (const [right] of cells) {
    if (compare(left, right) >= 0 || compare(right, one) > 0) invalid('Keep right endpoints strictly increasing from the implicit left endpoint 0, within (0,1].');
    left = right;
  }
  if (!same(left, one)) invalid('End the profile at right endpoint 1.');
  return cells; // Equal-height neighbors retain their separate zero-valued cut.
}

function signedProfileArea(cells) {
  let left = rational(0n), area = rational(0n);
  for (const [right, height] of cells) {
    area = add(area, multiply(height, add(right, negative(left))));
    left = right;
  }
  // Reduced partial denominators divide the product of processed endpoint
  // and height denominators. The next raw add repeats only the shared left
  // endpoint denominator: at most 512+80 decimal digits in the denominator.
  // Positive widths total <=1, so |partial signed area|<=max|height|<=10^80,
  // even with cancellation. Raw numerators are <=10^672: at most 2234 binary
  // characters including a minus sign, safely below the 4096 limit. Finite
  // decimal denominators can equal 10^80; all bounds are inclusive.
  return area;
}

function signedThirdsValue(value) {
  const zero = rational(0n), one = rational(1n), first = rational(1n, 3n), second = rational(2n, 3n);
  if ((compare(value, zero) > 0 && compare(value, first) < 0) || (compare(value, second) > 0 && compare(value, one) < 0)) return rational(2n);
  if (compare(value, first) > 0 && compare(value, second) < 0) return rational(-1n);
  return zero; // Every cut and every point outside [0,1] has value 0.
}

function parseOrderedPolyline(value) {
  const source = text(value, 'ordered polyline');
  const lines = source.split(/\r\n?|\n/);
  if (lines.length < 2 || lines.length > MAX_POLYLINE_VERTICES) invalid('Use from 2 to 17 vertices, one x,y pair per line.');
  if ((source.match(/\d/g) || []).length > MAX_POLYLINE_DIGITS) invalid('Use at most 512 digits in the complete polyline.');
  const vertices = lines.map((line, index) => {
    const pair = line.split(',');
    if (pair.length !== 2) invalid('Write exactly one x,y pair per line, without parentheses.');
    return pair.map((coordinate, axis) => parseRational(coordinate, `vertex ${index + 1} ${axis === 0 ? 'x' : 'y'} coordinate`));
  });
  const zero = rational(0n), one = rational(1n);
  if (!vertices[0].every(coordinate => same(coordinate, zero)) || !vertices.at(-1).every(coordinate => same(coordinate, one))) {
    invalid('Start the polyline at 0,0 and end it at 1,1.');
  }
  for (let index = 1; index < vertices.length; index++) {
    if (compare(vertices[index - 1][0], vertices[index][0]) >= 0) invalid('Keep x coordinates strictly increasing in their submitted order; do not repeat an x coordinate.');
  }
  return vertices;
}

function polylineAvoidsUnitSecant(vertices) {
  for (let index = 1; index < vertices.length; index++) {
    const [leftX, leftY] = vertices[index - 1], [rightX, rightY] = vertices[index];
    // The endpoint secant is 1. No division or derivative sampling is needed:
    // a segment has slope 1 iff its exact rise equals its exact run. At a
    // collinear interior node, an existing derivative adds no new slope.
    const rise = add(rightY, negative(leftY)), run = add(rightX, negative(leftX));
    if (same(rise, run)) return false;
  }
  // Each coordinate has |numerator|, denominator <=10^80, including finite
  // decimals whose denominator equals 10^80. Local differences use at most
  // 2*10^160; even comparison cross-products and subtraction fit within
  // 1067 binary characters including a minus sign, far below 4096. Nothing
  // accumulates between segments, and negative heights are allowed.
  return true;
}

function parseOrderedPartition(value) {
  let source = text(value, 'ordered partition');
  if (source.startsWith('[') || source.endsWith(']')) {
    if (!source.startsWith('[') || !source.endsWith(']')) invalid('Use matching brackets around an ordered partition.');
    source = source.slice(1, -1);
  }
  const items = source.split(',').map(item => item.trim());
  if (items.length < 2 || items.length > MAX_PARTITION_CUTS) invalid('Use from 2 to 32 partition cuts, including both endpoints.');
  if (items.reduce((total, item) => total + (item.match(/\d/g) || []).length, 0) > MAX_PARTITION_DIGITS) {
    invalid('Use at most 512 digits in the complete partition.');
  }
  const cuts = items.map((item, index) => parseRational(item, `partition cut ${index + 1}`));
  const zero = rational(0n), one = rational(1n);
  if (cuts.some(cut => compare(cut, zero) < 0 || compare(cut, one) > 0)) invalid('Every partition cut must lie in [0,1].');
  if (!same(cuts[0], zero) || !same(cuts.at(-1), one)) invalid('Start the partition at 0 and end it at 1.');
  for (let index = 1; index < cuts.length; index++) {
    if (compare(cuts[index - 1], cuts[index]) >= 0) invalid('Keep cuts strictly increasing in their submitted order; repeated or equivalent cuts do not create cells.');
  }
  return cuts;
}

function darbouxGap(cuts, contract) {
  let gap = rational(0n);
  for (let index = 1; index < cuts.length; index++) {
    const left = cuts[index - 1], right = cuts[index];
    const width = add(right, negative(left));
    if (contract.model === 'identity') gap = add(gap, multiply(width, width));
    else if (compare(left, contract.spike) <= 0 && compare(contract.spike, right) <= 0) gap = add(gap, width);
  }
  // Sum the nonnegative gap contributions directly. With at most 512 input
  // digits, a reduced partial denominator divides the product of processed
  // cut denominators squared. The next unreduced sum repeats only one shared
  // denominator squared, keeping this below the existing 4096-bit bound.
  // Independently summing U and L then subtracting would lose that invariant.
  return gap;
}

function witnessInterval(answer) {
  const constraints = answer?.expected_constraints;
  if (!constraints || typeof constraints.minimum_exclusive !== 'string' || typeof constraints.maximum_inclusive !== 'string') return null;
  try {
    const lower = parseRational(constraints.minimum_exclusive);
    const upper = parseRational(constraints.maximum_inclusive);
    return compare(lower, upper) < 0 ? { lower, upper } : null;
  } catch { return null; }
}

// Used by the learning ledger to recognize only this bounded numerical
// component. It never upgrades the associated explanation to checked evidence.
export function hasRationalWitnessInterval(answer) {
  return answer?.kind === 'rational_interval_witness_with_open_reasoning' && witnessInterval(answer) !== null;
}

function residuePairConstraints(constraints) {
  return Number.isSafeInteger(constraints?.modulus) && constraints.modulus >= 2 && constraints.modulus <= 1000
    && ['first_residue', 'second_residue'].every(key => Number.isSafeInteger(constraints[key]) && constraints[key] >= 0 && constraints[key] < constraints.modulus);
}

export function hasAffineSubsequencePairContract(answer) {
  return answer?.kind === 'affine_subsequence_pair_with_open_reasoning' && residuePairConstraints(answer.expected_constraints);
}

export function hasIntegerResiduePairContract(answer) {
  return answer?.kind === 'integer_residue_pair_with_open_reasoning' && residuePairConstraints(answer.expected_constraints)
    && Number.isSafeInteger(answer.expected_constraints.minimum_inclusive) && answer.expected_constraints.minimum_inclusive >= 1;
}

function residue(value, modulus) { return ((value % modulus) + modulus) % modulus; }

function affineIndexMap(step, offset, modulus, residue) {
  // For j>=1, pj+q has positive, strictly increasing integer indices iff
  // p>0 and p+q>=1. It stays in one residue class iff p=0 mod m and q=r mod m.
  // Offsets may be negative; normalize their remainder rather than rejecting
  // negative odd values such as -3.
  return step > 0n && step + offset >= 1n && step % modulus === 0n
    && ((offset % modulus) + modulus) % modulus === residue;
}

// New contracts are opt-in. Existing answer kinds and their canonical values
// keep their original parsers and semantics, including historical submissions.
function rationalText(value) { return value.d === 1n ? String(value.n) : `${value.n}/${value.d}`; }
function parseNumeric(value) {
  const source=text(value,'numerical answer');
  const scientific=/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))[eE]([+-]?\d{1,2})$/.exec(source);
  if(!scientific)return parseRational(source,'numerical answer');
  const exponent=Number(scientific[2]);
  if(Math.abs(exponent)>40)invalid('Use a scientific-notation exponent between -40 and 40.');
  const scale=10n**BigInt(Math.abs(exponent));
  return multiply(parseRational(scientific[1],'numerical coefficient'),exponent<0?rational(1n,scale):rational(scale));
}
function parseVector(value, label = 'vector') {
  let entries = value;
  if (!Array.isArray(entries)) {
    const source = text(value, label);
    if (!source.startsWith('[') || !source.endsWith(']')) invalid(`Write ${label} in square brackets, for example [1, 2/3].`);
    entries = source.slice(1, -1).split(',');
  }
  if (!entries.length || entries.length > 16) invalid(`Use between 1 and 16 entries in ${label}.`);
  return entries.map(entry => parseRational(entry, `${label} entry`));
}
function parseMatrix(value) {
  let rows = value;
  if (!Array.isArray(rows)) {
    const source = text(value, 'matrix');
    if (!/^\[\s*\[[\s\S]*\]\s*\]$/.test(source)) invalid('Write a matrix as [[1, 2], [3, 4]].');
    rows = source.slice(1, -1).split(/\]\s*,\s*\[/).map(row => row.replace(/^\s*\[/, '').replace(/\]\s*$/, '').split(','));
  }
  if (!rows.length || rows.length > 12) invalid('Use between 1 and 12 matrix rows.');
  const matrix = rows.map(row => parseVector(row, 'matrix row'));
  if (matrix[0].length > 12 || matrix.some(row => row.length !== matrix[0].length)) invalid('Use a rectangular matrix with at most 12 columns.');
  return matrix;
}
function parseComplex(value) {
  let source = text(value, 'complex number').replace(/\s/g, '').replace(/\*i$/, 'i');
  // These are alternative spellings of one rational coefficient, not an
  // arithmetic evaluator: -i/2 and -1/2i denote the same imaginary term.
  source = source.replace(/(^|[+-])i\/([+-]?\d+)$/, (_match, sign, denominator) => `${sign}1/${denominator}i`);
  if (!source.endsWith('i')) return [parseRational(source, 'real part'), rational(0n)];
  const body = source.slice(0, -1);
  // A sign after a slash belongs to that rational denominator, not a new term.
  const split = [...body].findIndex((character, index) => index > 0 && '+-'.includes(character) && body[index - 1] !== '/');
  const real = split < 0 ? rational(0n) : parseRational(body.slice(0, split), 'real part');
  const imaginary = split < 0 ? body : body.slice(split);
  return [real, ['','+','-'].includes(imaginary) ? rational(imaginary === '-' ? -1n : 1n) : parseRational(imaginary, 'imaginary coefficient')];
}
function parseSymbolicSet(value) {
  return new Set(setItems(value, 'set').map(item => {
    const source = text(item, 'set element');
    return /^[A-Za-z]/.test(source) ? `symbol:${parseSymbol(source, 'set element')}` : `rational:${rationalKey(parseRational(source, 'set element'))}`;
  }));
}
function parseInterval(value) {
  const source = text(value, 'interval union').replaceAll('∞', 'infinity');
  if (['{}','∅','empty'].includes(source)) return [];
  const pieces = source.split(/\s*(?:\bU\b|∪)\s*/);
  if (pieces.length > 16) invalid('Use at most 16 intervals.');
  const intervals = pieces.map(piece => {
    const match = /^\s*([[(])\s*([^,]+),\s*([^,]+)\s*([\])])\s*$/.exec(piece);
    if (!match) invalid('Use intervals such as [1, 2), joined with U; use {} for the empty set.');
    const endpoint = (raw, left) => {
      const token = raw.trim().toLowerCase();
      if (token === (left ? '-infinity' : 'infinity') || !left && token === '+infinity') return null;
      return parseRational(token, 'interval endpoint');
    };
    const left = endpoint(match[2], true), right = endpoint(match[3], false), closedLeft = match[1] === '[', closedRight = match[4] === ']';
    if (!left && closedLeft || !right && closedRight) invalid('Infinity always has an open endpoint.');
    const order = left && right ? compare(left, right) : -1;
    if (order > 0) invalid('The left endpoint must not exceed the right endpoint.');
    return order === 0 && !(closedLeft && closedRight) ? null : {left, right, closedLeft, closedRight};
  }).filter(Boolean).sort((a,b) => a.left === null ? b.left === null ? Number(b.closedLeft)-Number(a.closedLeft) : -1 : b.left === null ? 1 : compare(a.left,b.left) || Number(b.closedLeft)-Number(a.closedLeft));
  const merged = [];
  for (const interval of intervals) {
    const last = merged.at(-1), overlap = last && (last.right === null || interval.left === null || compare(last.right, interval.left) > 0 || compare(last.right, interval.left) === 0 && (last.closedRight || interval.closedLeft));
    if (!overlap) { merged.push({...interval}); continue; }
    if (last.right !== null && (interval.right === null || compare(interval.right,last.right) > 0)) { last.right = interval.right; last.closedRight = interval.closedRight; }
    else if (last.right !== null && interval.right !== null && compare(interval.right,last.right) === 0) last.closedRight ||= interval.closedRight;
  }
  return merged.map(item => `${item.closedLeft?'[':'('}${item.left===null?'-infinity':rationalText(item.left)}, ${item.right===null?'infinity':rationalText(item.right)}${item.closedRight?']':')'}`);
}

/** Parse-only operation: no exercise identity, expected value or grading input. */
export function parseAnswer(kind, value) {
  try {
    let canonical;
    switch (kind) {
      case 'integer': canonical = String(parseInteger(value)); break;
      case 'rational': canonical = rationalText(parseRational(value)); break;
      case 'numeric_tolerance': canonical = rationalText(parseNumeric(value)); break;
      case 'vector': canonical = `[${parseVector(value).map(rationalText).join(', ')}]`; break;
      case 'matrix': canonical = `[${parseMatrix(value).map(row => `[${row.map(rationalText).join(', ')}]`).join(', ')}]`; break;
      case 'complex': { const [real,imaginary] = parseComplex(value); canonical = `${rationalText(real)}${imaginary.n<0n?'':'+'}${rationalText(imaginary)}i`; break; }
      case 'interval': canonical = parseInterval(value).join(' U ') || '{}'; break;
      case 'set': canonical = `{${[...parseSymbolicSet(value)].sort().map(item => item.replace(/^(?:symbol|rational):/, '').replace(/\/1$/, '')).join(', ')}}`; break;
      case 'rational_function': canonical = rationalFunctionText(parseRationalFunction(value)); break;
      case 'expression': { const polynomial = parsePolynomial(value); canonical = polynomial.map((coefficient,index)=>`${rationalText(coefficient)}${index?`*x^${index}`:''}`).join(' + '); break; }
      default: return {supported:false};
    }
    return {supported:true, valid:true, canonical};
  } catch (error) {
    if (error instanceof InvalidAnswer) return {supported:true, valid:false, message:error.message};
    throw error;
  }
}

function checkAnswer(exercise, input) {
  const answer = exercise.answer;
  switch (answer.kind) {
    case 'vector': case 'complex': {
      const parser = answer.kind === 'vector' ? parseVector : parseComplex;
      const actual = parser(required(input, 'value')), expected = parser(answer.expected);
      return actual.length === expected.length && actual.every((entry,index)=>same(entry,expected[index]));
    }
    case 'matrix': {
      const actual = parseMatrix(required(input, 'value')), expected = parseMatrix(answer.expected);
      return actual.length === expected.length && actual[0].length === expected[0].length && actual.every((row,index)=>row.every((entry,column)=>same(entry,expected[index][column])));
    }
    case 'set': return sameSet(parseSymbolicSet(required(input,'value')), parseSymbolicSet(answer.expected));
    case 'interval': return sameSet(new Set(parseInterval(required(input,'value'))),new Set(parseInterval(answer.expected)));
    case 'numeric_tolerance': {
      const actual = parseNumeric(required(input,'value')), expected = parseNumeric(answer.expected), tolerance = parseRational(answer.absolute_tolerance);
      if (tolerance.n < 0n) throw new Error('Negative authored tolerance.');
      const difference = add(actual,negative(expected));
      return compare(difference.n<0n?negative(difference):difference,tolerance)<=0;
    }
    case 'expression': {
      if (answer.domain?.variable !== 'x' || !Array.isArray(answer.domain.excluded)) return null;
      const actual = parsePolynomial(required(input,'value')), expected = parsePolynomial(answer.expected);
      const excluded = parseSet(required(input,'excluded'),'excluded inputs',parseRational);
      return samePolynomial(actual,expected) && sameSet(excluded,new Set(answer.domain.excluded.map(value=>rationalKey(parseRational(value)))));
    }
    case 'rational_function': {
      const contract=rationalFunctionContract(answer);
      if(!contract)return null;
      const actual=parseRationalFunction(required(input,'value'));
      const entries=setItems(required(input,'excluded'),'excluded inputs');
      if(entries.length>MAX_FUNCTION_EXCLUSIONS)invalid('Use at most 32 excluded rational inputs.');
      const excluded=new Set(entries.map(value=>rationalKey(parseRational(value,'excluded input'))));
      if(!sameSet(excluded,contract.excluded)||[...actual.excluded].some(value=>!excluded.has(value)))return false;
      return samePolynomial(rationalFunctionIdentityProduct(actual.numerator,contract.expected.denominator),rationalFunctionIdentityProduct(contract.expected.numerator,actual.denominator));
    }
    case 'multiple_choice': {
      const choice = text(required(input, 'choice'), 'choice');
      if (!/^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/.test(choice)) invalid('Use the option identifier shown in the question.');
      return choice === answer.expected;
    }
    case 'rational':
      return same(parseRational(required(input, 'value')), rational(BigInt(answer.expected.numerator), BigInt(answer.expected.denominator)));
    case 'rational_with_unit':
      return checkVelocity(answer, input);
    case 'integer':
      return parseInteger(required(input, 'value')) === BigInt(answer.expected);
    case 'integer_pair':
      return Object.entries(answer.expected).map(([key, expected]) =>
        parseInteger(required(input, key), key) === BigInt(expected)).every(Boolean);
    case 'record_of_rationals':
      return Object.entries(answer.expected).map(([key, expected]) =>
        same(parseRational(required(input, key), key.replaceAll('_', ' ')), parseRational(expected))).every(Boolean);
    case 'finite_integer_set':
      return sameSet(parseSet(required(input, 'value'), 'set'), new Set(answer.expected.map(String)));
    case 'record_of_finite_sets':
      return Object.entries(answer.expected).map(([key, expected]) =>
        sameSet(parseSet(required(input, key), key), new Set(expected.map(String)))).every(Boolean);
    case 'expression_with_domain': {
      const expression = parsePolynomial(required(input, 'expression'));
      const excluded = parseSet(required(input, 'excluded'), 'excluded inputs', parseRational);
      return samePolynomial(expression, parsePolynomial(answer.expected.expression)) &&
        sameSet(excluded, new Set(answer.expected.excluded.map(value => rationalKey(parseRational(value)))));
    }
    case 'preimage_and_boolean': {
      const preimage = parseSet(required(input, 'preimage'), 'preimage', parseSymbol);
      const inverse = parseBoolean(required(input, 'has_inverse'), 'inverse function');
      return sameSet(preimage, new Set(answer.expected.preimage)) && inverse === answer.expected.has_inverse;
    }
    case 'euler_trail':
      return checkRoute(answer, input);
    case 'single_choice': {
      const raw = text(required(input, 'choice'), 'choice');
      const values = exercise.visual_state?.type === 'choices'
        ? exercise.visual_state.choices.map(choice => choice.value) : ['A', 'B', 'C'];
      const choice = values.includes(raw) ? raw : raw.toUpperCase();
      if (!values.includes(choice)) invalid('Choose one of the options supplied in this question.');
      return choice === answer.expected;
    }
    case 'bounds_record_with_open_reasoning': {
      optionalExplanation(input);
      return Object.entries(answer.expected).map(([key, expected]) => {
        const actual = parseBound(required(input, key), key);
        if (expected === null || actual === null) return expected === actual;
        return same(actual, parseRational(expected));
      }).every(Boolean);
    }
    case 'integer_witness_with_open_reasoning': {
      if (!hasIntegerWitnessContract(answer)) return null;
      optionalExplanation(input);
      const descriptor = integerWitnessRole(answer);
      return parseInteger(required(input, descriptor.key), descriptor.key) >= BigInt(answer.expected_constraints.minimum_inclusive);
    }
    case 'reciprocal_affine_cover_witness_with_open_reasoning': {
      if (!hasReciprocalAffineCoverContract(answer)) return null;
      optionalExplanation(input);
      const p = parseInteger(required(input, 'p'), 'denominator slope p');
      const q = parseInteger(required(input, 'q'), 'denominator offset q');
      const first = BigInt(answer.expected_constraints.minimum_index);
      // For every integer M>=first, 1/(pM+q) belongs to (0,1) outside
      // (1/M,1) iff pM+q>=M. The minimum of this affine difference
      // occurs at first iff its slope p-1 is nonnegative. This checks
      // the whole declared family, including arbitrarily late failures.
      return p >= 1n && p * first + q >= first;
    }
    case 'darboux_partition_with_open_reasoning': {
      const contract = darbouxPartitionContract(answer);
      if (!contract) return null;
      optionalExplanation(input);
      const cuts = parseOrderedPartition(required(input, 'partition'));
      return compare(darbouxGap(cuts, contract), contract.tolerance) < 0;
    }
    case 'mvt_polyline_with_open_reasoning': {
      if (!hasMvtConstructionContract(answer)) return null;
      optionalExplanation(input);
      return polylineAvoidsUnitSecant(parseOrderedPolyline(required(input, 'vertices')));
    }
    case 'mvt_interval_with_open_reasoning': {
      if (!hasMvtConstructionContract(answer)) return null;
      optionalExplanation(input);
      const [a, b, c] = ['a', 'b', 'c'].map(key => parseRational(required(input, key), key));
      const half = rational(1n, 2n);
      return compare(a, rational(0n)) >= 0 && compare(a, c) < 0 && compare(c, b) < 0 && compare(b, rational(1n)) <= 0
        && (compare(b, half) <= 0 || compare(a, half) >= 0);
    }
    case 'signed_step_profile_with_open_reasoning': {
      if (!hasSignedStepConstructionContract(answer)) return null;
      optionalExplanation(input);
      // This area is necessary at n=1 and sufficient for every positive n:
      // n*height times width/n leaves each signed cell integral unchanged.
      return same(signedProfileArea(parseSignedStepProfile(required(input, 'profile'))), rational(1n));
    }
    case 'moving_input_integral_tail_with_open_reasoning': {
      if (!hasSignedStepConstructionContract(answer)) return null;
      optionalExplanation(input);
      const r = parseRational(required(input, 'r'), 'moving-input scale r');
      const N = parseInteger(required(input, 'N'), 'integral-tail threshold N');
      const value = signedThirdsValue(r), magnitude = value.n < 0n ? negative(value) : value;
      // g_n(r/n)=q0(r) for every n, while integral(g_n)=1/n. The negative
      // middle value -1 qualifies at |g_n|>=1; N=10 fails the strict <1/10.
      return compare(magnitude, rational(1n)) >= 0 && N >= 11n;
    }
    case 'finite_image_counterexample_with_open_reasoning': {
      if (!hasFiniteImageConstructionContract(answer)) return null;
      optionalExplanation(input);
      const outputs = parseSixOutputMap(required(input, 'outputs'));
      const A = parseSixInputSubset(required(input, 'A'), 'input subset A');
      const B = parseSixInputSubset(required(input, 'B'), 'input subset B');
      return strictImageIntersection(outputs, A, B);
    }
    case 'finite_image_domain_with_open_reasoning': {
      if (!hasFiniteImageConstructionContract(answer)) return null;
      optionalExplanation(input);
      const D = parseSixInputSubset(required(input, 'D'), 'restricted domain D');
      const image = finiteImage(['0', '0', '1', '1', '2', '2'], D);
      // Intersection equality for EVERY pair of subsets of D is equivalent
      // to injectivity on D: colliding singleton sets prove necessity, and
      // uniqueness of an equal-output input proves sufficiency. Full image
      // retention is a separate goal, requiring all three codomain values.
      return image.size === 3 && image.size === D.size;
    }
    case 'fraction_permissions_with_open_reasoning': {
      if (!hasFractionPermissionsContract(answer)) return null;
      optionalExplanation(input);
      const model = answer.expected_constraints.model;
      if (model === 'thirds_halves_permission_rows') {
        // Parse every required cell before any mathematical short-circuit.
        const values = FRACTION_PERMISSION_ROWS.map(({ key }) => parseFractionPermission(required(input, key), key.replaceAll('_', ' '), true));
        const lower = rational(1n, 3n), upper = rational(1n, 2n);
        const permitted = FRACTION_PERMISSION_ROWS.map(({ rule, limit }) => finiteFractionPermissions(rule, limit, lower, upper));
        return values.every((value, i) => value === null ? permitted[i].size === 0 : permitted[i].has(rationalKey(value)));
      }
      const values = ['first', 'second'].map(key => parseFractionPermission(required(input, key), `${key} rational value`));
      if (same(values[0], values[1])) return false;
      if (model === 'thirds_halves_distinct_pair') return values.every(value => strictlyInside(value, rational(1n, 3n), rational(1n, 2n)));
      const permitted = finiteFractionPermissions('budget', 6, rational(1n, 5n), rational(2n, 5n));
      return values.every(value => permitted.has(rationalKey(value)));
    }
    case 'argument_witness_pair_with_open_reasoning': {
      if (!hasArgumentWitnessPairContract(answer)) return null;
      optionalExplanation(input);
      // Parse both coordinates before testing any mathematical condition.
      // This family's exact text contract does not inherit numeric transport
      // accepted by some older fields through the unchanged shared parser.
      const [m, n] = ['m', 'n'].map(key => {
        const value = required(input, key);
        if (typeof value !== 'string') invalid(`Enter ${key} as exact integer text.`);
        return parseInteger(value, key);
      });
      const evenM = m % 2n === 0n, evenN = n % 2n === 0n;
      const model = answer.expected_constraints.model;
      // Separate existential halves need not be the same integer. An even
      // sum with a false both-even conclusion means odd/odd; an even product
      // with that false conclusion means mixed parity, including zero/odd.
      if (model === 'shared_even_witness_gap') return evenM && evenN && m !== n;
      if (model === 'even_sum_both_even_counterexample') return !evenM && !evenN;
      return evenM !== evenN;
    }
    case 'rational_interval_witness_with_open_reasoning': {
      // The author proves that the original conditions are equivalent to this
      // bounded interval. Comparing exact fractions checks membership only;
      // the learner's written explanation remains outside the checked scope.
      const interval = witnessInterval(answer);
      if (!interval) return null;
      optionalExplanation(input);
      const value = parseRational(required(input, 'value'), 'rational witness');
      return compare(value, interval.lower) > 0 && compare(value, interval.upper) <= 0;
    }
    case 'affine_subsequence_pair_with_open_reasoning': {
      if (!hasAffineSubsequencePairContract(answer)) return null;
      optionalExplanation(input);
      const [p, q, r, s] = ['p', 'q', 'r', 's'].map(key => parseInteger(required(input, key), key));
      const constraints = answer.expected_constraints;
      const modulus = BigInt(constraints.modulus);
      return affineIndexMap(p, q, modulus, BigInt(constraints.first_residue))
        && affineIndexMap(r, s, modulus, BigInt(constraints.second_residue));
    }
    case 'integer_residue_pair_with_open_reasoning': {
      if (!hasIntegerResiduePairContract(answer)) return null;
      optionalExplanation(input);
      const near = parseInteger(required(input, 'near_index'), 'index of a close term');
      const far = parseInteger(required(input, 'far_index'), 'index of a far term');
      const constraints = answer.expected_constraints;
      const minimum = BigInt(constraints.minimum_inclusive), modulus = BigInt(constraints.modulus);
      // Each witness belongs to the same proposed tail. There is deliberately
      // no ordering requirement between these independently chosen indices.
      return near >= minimum && far >= minimum
        && residue(near, modulus) === BigInt(constraints.first_residue)
        && residue(far, modulus) === BigInt(constraints.second_residue);
    }
    default:
      return null;
  }
}

/** Mathematical correctness applies only to the authored checker scope. */
export function grade(exercise, input) {
  if (!exercise?.answer?.kind) return { status: 'indeterminate', message: 'No checker is available for this exercise.' };
  if (exercise.answer.kind === 'proof') return {status:'indeterminate',message:'Proofs are self-assessed against the model and rubric; no automatic correctness verdict is available.'};
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return { status: 'invalid', message: 'Submit an object containing the answer fields.' };
  }
  try {
    const correct = checkAnswer(exercise, input);
    if (correct === null) return { status: 'indeterminate', message: 'This answer needs a different checker or human review.' };
    if (!correct) return { status: 'incorrect', message: 'The submitted answer does not yet satisfy every requirement. Check the statement, or use a hint.' };
    const openReasoning = exercise.answer.kind.endsWith('_with_open_reasoning');
    return {
      status: 'correct',
      message: openReasoning
        ? 'The structured answer is correct. Your explanation remains an unassessed draft; this result does not certify a proof.'
        : 'Correct for this exercise’s stated check. You can compare your reasoning with the worked solution.',
    };
  } catch (error) {
    if (error instanceof InvalidAnswer) return { status: 'invalid', message: error.message };
    // A checker defect must never become an incorrect mathematical attempt.
    return { status: 'indeterminate', message: 'The checker could not determine a result. Your mathematical progress is unchanged.' };
  }
}

const LABELS = {
  A: 'Coefficient A', limit: 'Limit', mean_before: 'Original mean', median_before: 'Original median',
  mean_after: 'New mean', median_after: 'New median', q: 'Quotient q', r: 'Remainder r',
  union: 'Union A ∪ B', intersection: 'Intersection A ∩ B', complement: 'Complement U ∖ A',
  inf: 'Infimum', sup: 'Supremum', min: 'Minimum', max: 'Maximum (or null)',
  even_limit: 'Limit along even indices', odd_limit: 'Limit along odd indices',
};

function field(key, label, placeholder = '', type = 'text') { return { key, label, placeholder, type }; }

/** Labels and format examples only; deliberately excludes expected values. */
export function answerFields(exercise) {
  switch (exercise?.answer?.kind) {
    case 'proof': return [field('proof','Your proof','Write an argument, then compare it with the model proof.','proof')];
    case 'vector': return [{...field('value','Vector','Square brackets with ordered exact entries, such as [1, 2/3]'),parse_kind:'vector'}];
    case 'matrix': return [{...field('value','Matrix','Rectangular rows, such as [[1, 2], [3, 4]]'),parse_kind:'matrix',...(Number.isSafeInteger(exercise.answer.rows)&&Number.isSafeInteger(exercise.answer.columns)?{rows:exercise.answer.rows,columns:exercise.answer.columns}:{})}];
    case 'complex': return [{...field('value','Complex number','a+bi with rational coefficients, such as 1/2-3i'),parse_kind:'complex'}];
    case 'set': return [{...field('value','Finite set','Rational values or named elements, such as {1/2, a, b}'),parse_kind:'set'}];
    case 'interval': return [{...field('value','Interval or union','For example [1, 2) U (3, infinity); {} for empty'),parse_kind:'interval'}];
    case 'numeric_tolerance': return [{...field('value','Numerical answer','A finite decimal, scientific notation with exponent -40 to 40, or an exact fraction'),parse_kind:'numeric_tolerance'}];
    case 'expression': return [{...field('value','Polynomial expression','Use x, rational coefficients, +, -, *, parentheses and powers 0–8'),parse_kind:'expression'},field('excluded','Excluded real inputs','Comma-separated rational values; {} if none')];
    case 'rational_function': return rationalFunctionContract(exercise.answer) ? [{...field('value','Rational expression','Use x, rational coefficients, +, -, *, / and powers -8 to 8; factor nonconstant divisors into supported linear or quadratic factors'),parse_kind:'rational_function'},field('excluded','Excluded real inputs','All poles and removable holes; at most 32 rational values, comma-separated, or {} for none')] : [];
    case 'multiple_choice': return [field('choice','Selected option','Choose one of the numbered options above')];
    case 'rational': return [{...field('value', 'Exact answer', 'An integer or fraction, such as 3/7'),parse_kind:'rational'}];
    case 'rational_with_unit': return [field('value', 'Velocity', 'An integer or exact fraction'), field('unit', 'Velocity unit', 'For example, m/s')];
    case 'integer': return [{...field('value', 'Exact integer answer', 'A whole integer'),parse_kind:'integer'}];
    case 'finite_integer_set': return [field('value', 'Solution set', 'Use comma-separated integers, optionally in braces')];
    case 'record_of_rationals':
    case 'integer_pair':
      return Object.keys(exercise.answer.expected).map(key => field(key, ({ union: 'Union size', exactly_one: 'Exactly one set' })[key] || LABELS[key] || key, 'An integer or exact fraction'));
    case 'record_of_finite_sets':
      return Object.keys(exercise.answer.expected).map(key => field(key, LABELS[key] || key, 'Comma-separated integers; {} for an empty set'));
    case 'expression_with_domain':
      return [field('expression', 'Simplified polynomial', 'Use x, numbers, +, −, *, /, ^ and parentheses'), field('excluded', 'Excluded real inputs', 'Comma-separated exact values; {} if none')];
    case 'preimage_and_boolean':
      return [field('preimage', 'Preimage', 'Comma-separated named domain elements'), field('has_inverse', 'Does an inverse function exist?', 'yes or no')];
    case 'euler_trail': return [field('route', 'Vertex sequence', 'Separate vertex names with commas or arrows')];
    case 'single_choice': return [field('choice', 'Selected option', 'Choose one of the numbered options above')];
    case 'bounds_record_with_open_reasoning':
      return [...['inf', 'sup', 'min', 'max'].map(key => field(key, LABELS[key], 'Exact value, or null if absent')), field('explanation', 'Explanation draft (optional)', 'Explain your reasoning; this text is not automatically proof-checked.', 'textarea')];
    case 'integer_witness_with_open_reasoning': {
      const descriptor = integerWitnessRole(exercise.answer);
      return descriptor ? [field(descriptor.key, descriptor.label, descriptor.placeholder), field('explanation', 'Explanation draft (optional)', descriptor.explanation, 'textarea')] : [];
    }
    case 'reciprocal_affine_cover_witness_with_open_reasoning':
      return [field('p', 'Denominator slope p', 'An exact integer coefficient in pM+q'), field('q', 'Denominator offset q', 'An exact integer coefficient; negative offsets are allowed'), field('explanation', 'Explanation draft (optional)', 'Justify the rule for every finite maximum M, not only one selection; this text is not automatically proof-checked.', 'textarea')];
    case 'darboux_partition_with_open_reasoning':
      return hasDarbouxPartitionContract(exercise.answer) ? [field('partition', 'Ordered rational partition', 'Comma-separated cuts starting at 0 and ending at 1, strictly increasing. Use 2–32 cuts, at most 80 digits per cut and 512 digits total; 2,048 characters maximum.', 'textarea'), field('explanation', 'Explanation draft (optional)', 'Justify whole-cell extrema and the strict gap. A partition at one tolerance is separate from an all-tolerances proof; this text is not automatically proof-checked.', 'textarea')] : [];
    case 'mvt_polyline_with_open_reasoning':
      return hasMvtConstructionContract(exercise.answer) ? [field('vertices', 'Ordered rational vertices', 'One x,y pair per line, without parentheses, starting at 0,0 and ending at 1,1. Use 2–17 vertices, at most 80 digits per coordinate, 512 digits total and 2,048 characters. Preserve increasing x order; negative heights are allowed.', 'textarea'), field('explanation', 'Explanation draft (optional)', 'Check every segment and any interior vertex where the derivative exists. Distinguish a failed hypothesis from a failed conclusion; this text is not automatically proof-checked.', 'textarea')] : [];
    case 'mvt_interval_with_open_reasoning':
      return hasMvtConstructionContract(exercise.answer) ? [field('a', 'Chosen left endpoint a', 'An exact rational; at most 80 digits and 2,048 characters'), field('b', 'Chosen right endpoint b', 'An exact rational; at most 80 digits and 2,048 characters'), field('c', 'Interior witness c', 'An exact rational; at most 80 digits and 2,048 characters'), field('explanation', 'Explanation draft (optional)', 'Check the hypotheses on your chosen interval and match that interval’s secant, not the original global slope; this text is not automatically proof-checked.', 'textarea')] : [];
    case 'signed_step_profile_with_open_reasoning':
      return hasSignedStepConstructionContract(exercise.answer) ? [field('profile', 'Signed step profile', 'One right endpoint,height pair per line, without parentheses. The first left endpoint is 0; keep right endpoints increasing and end at 1. Use 1–16 cells, 80 digits per scalar, 512 digits total and 2,048 characters. Signed heights and separate equal-height cells are allowed.', 'textarea'), field('explanation', 'Explanation draft (optional)', 'Check the signed area and the whole scaled sequence, including the zero values at cuts. This writing is not automatically proof-checked.', 'textarea')] : [];
    case 'moving_input_integral_tail_with_open_reasoning':
      return hasSignedStepConstructionContract(exercise.answer) ? [field('r', 'Moving-input scale r', 'An exact rational for the declared rule x_n=r/n; at most 80 digits and 2,048 characters'), field('N', 'Integral-tail threshold N', 'An exact positive integer; at most 80 digits and 2,048 characters'), field('explanation', 'Explanation draft (optional)', 'Distinguish function error at the moving input for every n from integral error for every n≥N. This writing is not automatically proof-checked.', 'textarea')] : [];
    case 'finite_image_counterexample_with_open_reasoning':
      return hasFiniteImageConstructionContract(exercise.answer) ? [field('outputs', 'Ordered outputs f(1) through f(6)', 'Exactly six comma-separated integer outputs in {0,1,2}, without braces. Preserve their order and repetitions; equivalent exact integers are allowed. At most 80 digits per entry and 2,048 characters.'), field('A', 'Input subset A', 'Integer inputs from 1 to 6, comma- or whitespace-separated, optionally in braces; {} for empty. Order and repeated members do not change a set. At most 100 entries, 80 digits per entry and 2,048 text characters.'), field('B', 'Input subset B', 'Integer inputs from 1 to 6, comma- or whitespace-separated, optionally in braces; {} for empty. Order and repeated members do not change a set. At most 100 entries, 80 digits per entry and 2,048 text characters.'), field('explanation', 'Explanation draft (optional)', 'Compare the actual image of the shared inputs with the outputs shared by both images. This writing is not automatically proof-checked.', 'textarea')] : [];
    case 'finite_image_domain_with_open_reasoning':
      return hasFiniteImageConstructionContract(exercise.answer) ? [field('D', 'Restricted domain D', 'Integer inputs from 1 to 6, comma- or whitespace-separated, optionally in braces; {} for empty. Order and repeated members do not change a set. At most 100 entries, 80 digits per entry and 2,048 text characters.'), field('explanation', 'Explanation draft (optional)', 'Separate retention of every codomain value from intersection equality for every pair of subsets of your domain. This writing is not automatically proof-checked.', 'textarea')] : [];
    case 'fraction_permissions_with_open_reasoning': {
      if (!hasFractionPermissionsContract(exercise.answer)) return [];
      const format = 'An integer, finite decimal or exact fraction a/b; no expressions. At most 80 digits and 2,048 characters.';
      const writing = field('explanation', 'Explanation draft (optional)', 'Explain distinctness, strict endpoints and the given permission rules. Up to 5,000 characters; this writing is not automatically proof-checked.', 'textarea');
      if (exercise.answer.expected_constraints.model === 'thirds_halves_permission_rows') {
        return [...FRACTION_PERMISSION_ROWS.map(({ key, rule, limit }) => field(key,
          rule === 'grid' ? `Grid with ${limit} intervals: witness or none` : `Reduced denominator at most ${limit}: witness or none`,
          `An exact rational value or the word none. ${format}`)), writing];
      }
      return [field('first', 'First rational value', format + ' Either pair order is allowed.'), field('second', 'Second rational value', format + ' Choose a different value, not only a different writing.'), writing];
    }
    case 'argument_witness_pair_with_open_reasoning': {
      if (!hasArgumentWitnessPairContract(exercise.answer)) return [];
      const format = 'An exact integer, including an integer-valued finite decimal or fraction a/b; no expressions. At most 80 written digits and 2,048 characters. Negative values and zero are allowed.';
      return [field('m', 'Integer m', format + ' Either pair order is allowed.'), field('n', 'Integer n', format), field('explanation', 'Explanation draft (optional)', 'Check the precise assertion and its assumptions. Up to 5,000 characters; this writing is not automatically proof-checked.', 'textarea')];
    }
    case 'rational_interval_witness_with_open_reasoning':
      return [field('value', 'Exact rational witness', 'An integer, finite decimal, or fraction a/b for the quantity requested'), field('explanation', 'Explanation draft (optional)', 'Explain why your witness meets the original conditions; this text is not automatically proof-checked.', 'textarea')];
    case 'affine_subsequence_pair_with_open_reasoning':
      return [field('p', 'First step p', 'An exact integer'), field('q', 'First offset q', 'An exact integer; negative offsets are allowed'), field('r', 'Second step r', 'An exact integer'), field('s', 'Second offset s', 'An exact integer; negative offsets are allowed'), field('explanation', 'Explanation draft (optional)', 'Justify positive indices, strict increase, and every selected value; this text is not automatically proof-checked.', 'textarea')];
    case 'integer_residue_pair_with_open_reasoning':
      return [field('near_index', 'Index of a close term', 'An exact integer in the proposed tail'), field('far_index', 'Index of a far term', 'An exact integer in the proposed tail; either index may come first'), field('explanation', 'Explanation draft (optional)', 'Check each index and its error. Distinguish this proposed tail from a claim about every tail; this text is not automatically proof-checked.', 'textarea')];
    default: return [];
  }
}
