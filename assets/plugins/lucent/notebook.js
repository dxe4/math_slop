// The Lucent calculus notebook ("notebook" fences): a bounded, sequential
// language run top to bottom from a fresh environment on every run.
//   param, let, fn, show, diff, table, sum, integrate, iterate, scatter, plot,
//   overlay, bernstein, weights, product, exact, approx
import { LucentError, BUILTINS, parseExpression, validate, compile, display, dependencies, containsCall, pretty, CONSTANTS } from './expr.js';
import { Board, el, errorBox, sliderRow, schedule, loadJSXGraph, describe } from './board.js';
import { parameterStep } from './scene.js';

const RESERVED = new Set(['x', 'y', 'pi', 'e', 'let', 'exact', 'approx', 'param', 'fn', 'show', 'diff', 'as', 'table', 'sum', 'integrate', 'iterate', 'scatter', 'plot', 'overlay', 'bernstein', 'weights', 'product', 'step', 'radius', 'degree', 'from', 'to', 'count', ...Object.keys(BUILTINS)]);
const IDENT = /^[A-Za-z_][A-Za-z0-9_]{0,63}$/;
const MAX_SYMBOLIC = 16384;
const DERIVATIVE_DOMAIN = 'Valid only at interior points where the original function and displayed derivative are real-defined; simplification never fills holes in the original domain.';
const lerp = (a, b, t) => a + (b - a) * t;

function stripComments(source) { return source.replace(/#[^\n]*/g, m => ' '.repeat(m.length)); }
/** Find ` keyword ` as a whole word; returns [before, after, index] or null. */
function clause(text, keyword) {
  const re = new RegExp(`(^|\\s)${keyword}(?=\\s)`, 'g');
  const m = re.exec(text);
  if (!m) return null;
  const index = m.index + m[1].length;
  return [text.slice(0, index), text.slice(index + keyword.length), index];
}
const command = (statement, keyword) => (statement.startsWith(keyword) && /\s/.test(statement[keyword.length] ?? '') ? statement.slice(keyword.length) : null);
const integer = value => {
  if (!Number.isFinite(value) || value !== Math.floor(value) || Math.abs(value) > 1e6) throw new LucentError('expected an integer with absolute value at most 1000000');
  return value;
};

// ----- exact rationals (BigInt) -----
class Rational {
  constructor(n, d = 1n) {
    if (d === 0n) throw new LucentError('division by zero in exact arithmetic');
    if (d < 0n) { n = -n; d = -d; }
    const g = gcd(n < 0n ? -n : n, d); this.n = n / g; this.d = d / g;
    const limit = 2n ** 63n;
    if (this.n >= limit || this.n < -limit || this.d >= limit) throw new LucentError('exact arithmetic overflowed signed 64-bit integers');
  }
  toString() { return this.d === 1n ? String(this.n) : `${this.n}/${this.d}`; }
}
function gcd(a, b) { while (b) [a, b] = [b, a % b]; return a || 1n; }
function exactValue(text, exact) {
  // integers, earlier exact names, + - * /, integer powers -16..16, parentheses
  const tokens = text.match(/\d+|[A-Za-z_][A-Za-z0-9_]*|[-+*/^()]/g) ?? [];
  if (tokens.join('') !== text.replace(/\s+/g, '')) throw new LucentError('exact expressions use integers, exact names, + - * / ^ and parentheses only');
  let i = 0;
  const peek = () => tokens[i], eat = () => tokens[i++];
  const atom = () => {
    const t = eat();
    if (t === undefined) throw new LucentError('unexpected end of exact expression');
    if (/^\d+$/.test(t)) return new Rational(BigInt(t));
    if (t === '(') { const v = sum(); if (eat() !== ')') throw new LucentError("expected ')'"); return v; }
    if (exact.has(t)) return exact.get(t);
    throw new LucentError(`unknown exact name '${t}'`);
  };
  const unary = () => { if (peek() === '-') { eat(); const v = unary(); return new Rational(-v.n, v.d); } if (peek() === '+') { eat(); return unary(); } return power(); };
  const power = () => {
    const base = atom();
    if (peek() !== '^') return base;
    eat(); let sign = 1n; if (peek() === '-') { eat(); sign = -1n; }
    const t = eat(); if (!/^\d+$/.test(t ?? '')) throw new LucentError('exact powers need integer exponents');
    const k = BigInt(t) * sign; if (k > 16n || k < -16n) throw new LucentError('exact powers must be between -16 and 16');
    let r = new Rational(1n); const m = k < 0n ? -k : k;
    for (let j = 0n; j < m; j++) r = new Rational(r.n * base.n, r.d * base.d);
    return k < 0n ? new Rational(r.d, r.n) : r;
  };
  const term = () => { let v = unary(); while (peek() === '*' || peek() === '/') { const op = eat(), r = unary(); v = op === '*' ? new Rational(v.n * r.n, v.d * r.d) : new Rational(v.n * r.d, v.d * r.n); } return v; };
  const sum = () => { let v = term(); while (peek() === '+' || peek() === '-') { const op = eat(), r = term(); v = op === '+' ? new Rational(v.n * r.d + r.n * v.d, v.d * r.d) : new Rational(v.n * r.d - r.n * v.d, v.d * r.d); } return v; };
  const v = sum(); if (i !== tokens.length) throw new LucentError('unexpected token in exact expression');
  return v;
}

// ----- symbolic differentiation (string based, as in the Rust engine) -----
function expand(ast, x, fns, depth = 0) {
  if (depth > 32) throw new LucentError('symbolic expansion exceeds depth 32');
  let out;
  switch (ast.k) {
    case 'num': out = String(ast.v); break;
    case 'var': out = ast.name === 'x' ? (x ?? 'x') : ast.name; break;
    case 'neg': out = `(-${expand(ast.a, x, fns, depth + 1)})`; break;
    case 'bin': out = `(${expand(ast.a, x, fns, depth + 1)}${ast.op}${expand(ast.b, x, fns, depth + 1)})`; break;
    default: {
      const arg = expand(ast.a, x, fns, depth + 1);
      out = ast.name in BUILTINS ? `${ast.name}(${arg})` : expand(fns.get(ast.name), arg, fns, depth + 1);
    }
  }
  if (out.length > MAX_SYMBOLIC) throw new LucentError('expanded expression exceeds size limit');
  return out;
}
const add = (l, r) => (l === '0' ? r : r === '0' ? l : `(${l}+${r})`);
const sub = (l, r) => (r === '0' ? l : l === '0' ? neg(r) : `(${l}-${r})`);
const mul = (l, r) => (l === '0' || r === '0' ? '0' : l === '1' ? r : r === '1' ? l : `(${l}*${r})`);
const div = (n, d) => (n === '0' ? '0' : d === '1' ? n : `(${n}/(${d}))`);
const neg = v => (v === '0' ? v : `(-${v})`);
function signedLiteral(ast) { if (ast.k === 'num') return ast.v; if (ast.k === 'neg' && ast.a.k === 'num') return -ast.a.v; return null; }
function derivative(ast) {
  let out;
  switch (ast.k) {
    case 'num': out = '0'; break;
    case 'var': out = ast.name === 'x' ? '1' : '0'; break;
    case 'neg': out = neg(derivative(ast.a)); break;
    case 'bin':
      if (ast.op === '+') out = add(derivative(ast.a), derivative(ast.b));
      else if (ast.op === '-') out = sub(derivative(ast.a), derivative(ast.b));
      else if (ast.op === '*') out = add(mul(derivative(ast.a), display(ast.b)), mul(display(ast.a), derivative(ast.b)));
      else if (ast.op === '/') out = div(sub(mul(derivative(ast.a), display(ast.b)), mul(display(ast.a), derivative(ast.b))), `(${display(ast.b)})^2`);
      else {
        const power = signedLiteral(ast.b);
        if (power === null) throw new LucentError('symbolic power rule needs a literal integer exponent');
        if (power !== Math.floor(power) || Math.abs(power) > 16) throw new LucentError('symbolic power rule supports integer exponents from -16 to 16');
        if (power === 0) out = '0';
        else if (power === 1) out = derivative(ast.a);
        else out = mul(mul(String(power), power === 2 ? display(ast.a) : `(${display(ast.a)})^${power - 1}`), derivative(ast.a));
      }
      break;
    default: {
      const u = display(ast.a), du = derivative(ast.a);
      switch (ast.name) {
        case 'sin': out = mul(`cos(${u})`, du); break;
        case 'cos': out = mul(neg(`sin(${u})`), du); break;
        case 'tan': out = div(du, `cos(${u})^2`); break;
        case 'exp': out = mul(`exp(${u})`, du); break;
        case 'ln': out = div(du, u); break;
        case 'sqrt': out = div(du, `2*sqrt(${u})`); break;
        default: throw new LucentError(`symbolic differentiation of '${ast.name}' is not supported`);
      }
    }
  }
  if (out.length > MAX_SYMBOLIC) throw new LucentError('symbolic derivative exceeds size limit');
  return out;
}

// ----- the interpreter -----
export function runNotebook(source, overrides = {}) {
  if (source.length > 65536) throw new LucentError('source exceeds 65536 characters');
  const env = { values: Object.create(null), exact: new Map(), fns: new Map(), sequences: new Map(), origins: new Map(), bernstein: new Map(), params: new Set() };
  const outputs = [];
  const runs = new Map();
  const callFn = (name, arg, V) => { let r = runs.get(name); if (!r || r.ast !== env.fns.get(name)) { r = { ast: env.fns.get(name), f: compile(env.fns.get(name), callFn) }; runs.set(name, r); } return r.f(arg, undefined, V); };
  const evalAst = (ast, x) => compile(ast, callFn)(x, undefined, env.values);
  const names = () => new Set(Object.keys(env.values));
  const checkName = name => {
    if (!IDENT.test(name)) throw new LucentError('name must be an ASCII identifier of at most 64 characters');
    if (RESERVED.has(name)) throw new LucentError(`'${name}' is reserved`);
    if (name in env.values || env.exact.has(name) || env.fns.has(name) || env.sequences.has(name)) throw new LucentError(`duplicate name '${name}'`);
  };
  const parse = (text, allowX) => {
    const ast = parseExpression(text.trim());
    validate(ast, { vars: names(), fns: env.fns, locals: allowX ? new Set(['x']) : undefined });
    return ast;
  };
  const staleDerivative = (ast, value) => {
    // explain a generated derivative that is undefined where its source is defined
    if (Number.isFinite(value)) return;
    let found = null;
    const visit = node => { if (node.k === 'call' && env.origins.has(node.name) && !found) found = node; if (node.a) visit(node.a); if (node.b) visit(node.b); };
    visit(ast);
    if (!found) return;
    const x = evalAst(found.a);
    if (Number.isFinite(x) && Number.isFinite(compile(env.origins.get(found.name), callFn)(x, undefined, env.values))) throw new LucentError(`the generated derivative expression for ${found.name} is undefined at x=${x}; the original function is defined here, so this does not decide whether its derivative exists`);
  };
  const scalar = ast => {
    const v = evalAst(ast);
    if (!Number.isFinite(v)) { staleDerivative(ast, v); throw new LucentError('expression is undefined or not finite'); }
    return v;
  };
  const at = (name, x) => {
    const v = callFn(name, x, env.values);
    if (!Number.isFinite(v)) {
      if (env.origins.has(name) && Number.isFinite(compile(env.origins.get(name), callFn)(x, undefined, env.values))) throw new LucentError(`the generated derivative expression for ${name} is undefined at x=${x}; the original function is defined here, so this does not decide whether its derivative exists`);
      throw new LucentError(`${name} is undefined or not finite at x=${x}`);
    }
    return v;
  };
  const sampleSpec = (raw, needsCount) => {
    const a = clause(raw, 'from'); if (!a) throw new LucentError("expected 'function from lower to upper'");
    const name = a[0].trim(); if (!env.fns.has(name)) throw new LucentError(`unknown function '${name}'`);
    const b = clause(a[1], 'to'); if (!b) throw new LucentError("expected 'to upper'");
    const c = clause(b[1], 'count');
    if (needsCount !== !!c) throw new LucentError(needsCount ? 'count is required' : 'count is not used here');
    const from = scalar(parse(b[0])), to = scalar(parse(c ? c[0] : b[1]));
    return { name, from, to, count: c ? integer(scalar(parse(c[1]))) : null };
  };
  const optionalBinding = raw => { const a = clause(raw, 'as'); if (!a) return [raw, null]; const name = a[1].trim(); checkName(name); return [a[0], name]; };
  const validateCells = (name, from, to, count) => {
    const width = (to - from) / count;
    for (let i = 0; i < count; i++) {
      const left = from + i * width, right = i + 1 === count ? to : from + (i + 1) * width;
      if (left >= right) throw new LucentError('midpoint cells are indistinguishable at floating-point precision');
      for (const f of [0, 0.25, 0.5, 0.75, 1]) { const x = left + f * (right - left); if (!Number.isFinite(callFn(name, x, env.values))) throw new LucentError(`${name} is undefined at sampled x=${x}; use separate limits for an improper integral`); }
    }
  };

  const plotScene = (fnNames, from, to, witness) => {
    const count = 321, prims = []; let min = Infinity, max = -Infinity;
    fnNames.forEach((name, ci) => {
      const jumpy = containsCall(env.fns.get(name), ['floor', 'ceil'], env.fns);
      const color = ['teal', 'violet', 'amber', 'blue'][ci], segs = [], samples = [];
      let cur = [], prev = null;
      for (let i = 0; i < count; i++) {
        const x = from + (to - from) * i / (count - 1), y = callFn(name, x, env.values);
        if (!Number.isFinite(y)) { if (cur.length >= 2) segs.push(cur); cur = []; prev = null; continue; }
        samples.push([x, y]);
        if (prev) {
          const mid = callFn(name, prev[0] + (x - prev[0]) / 2, env.values), expected = prev[1] * 0.5 + y * 0.5, scale = Math.max(Math.abs(prev[1]), Math.abs(y), 1);
          if (!Number.isFinite(mid) || Math.abs(mid - expected) > 0.5 * scale || (jumpy && Math.abs(mid - expected) > 1e-3 * scale)) { if (cur.length >= 2) segs.push(cur); cur = []; }
        }
        min = Math.min(min, y); max = Math.max(max, y); cur.push([x, y]); prev = [x, y];
      }
      if (cur.length >= 2) segs.push(cur);
      if (!segs.length) for (let i = 0; i < samples.length; i += 10) prims.push({ kind: 'point', color, p: samples[i], label: `${name}(${samples[i][0]})`, keys: [], small: true });
      prims.push({ kind: 'curve', color, segs, label: name, legend: name + '(x)', keys: [] });
      if (witness !== null) { const y = at(name, witness); min = Math.min(min, y); max = Math.max(max, y); prims.push({ kind: 'point', color, p: [witness, y], label: `${name}(${witness})`, keys: [] }); }
    });
    if (!Number.isFinite(min) || !Number.isFinite(max)) throw new LucentError('plot has no finite samples');
    const spread = max - min, mag = Math.max(Math.abs(min), Math.abs(max));
    const pad = spread > 0 ? Math.max(spread * 0.12, mag * Number.EPSILON * 8) : mag < 1e-12 ? 0.5 : Math.max(mag * 0.2, 1e-12);
    return { title: 'Sampled graph of ' + fnNames.join(' and '), domain: [from, to], range: [min - pad, max + pad], equal: false, params: [], values: {}, readouts: [], prims };
  };

  const statements = stripComments(source).split(';');
  const tail = statements.pop();
  if (tail.trim()) throw new LucentError("expected ';' after notebook statement");
  let ordinal = 0;
  for (const raw of statements) {
    const st = raw.trim(); if (!st) continue;
    if (++ordinal > 256) throw new LucentError('notebook exceeds 256 statements');
    let rest;
    try {
      if ((rest = command(st, 'exact')) !== null) {
        const eq = rest.indexOf('='); if (eq < 0) throw new LucentError("expected 'exact name = rational expression'");
        const name = rest.slice(0, eq).trim(); checkName(name);
        const v = exactValue(rest.slice(eq + 1), env.exact); env.exact.set(name, v);
        outputs.push({ type: 'exact', label: name, numerator: String(v.n), denominator: String(v.d) });
      } else if ((rest = command(st, 'approx')) !== null) {
        const eq = rest.indexOf('='); if (eq < 0) throw new LucentError("expected 'approx name = rational expression'");
        const name = rest.slice(0, eq).trim(); checkName(name);
        const v = exactValue(rest.slice(eq + 1), env.exact), value = Number(v.n) / Number(v.d); env.values[name] = value;
        outputs.push({ type: 'definition', label: name, expression: `≈ ${value} (converted from exact ${v})` });
      } else if ((rest = command(st, 'param')) !== null) {
        const eq = rest.indexOf('='); if (eq < 0) throw new LucentError("expected 'param name = default from lower to upper'");
        const name = rest.slice(0, eq).trim(); checkName(name);
        if (env.params.size >= 32) throw new LucentError('notebook permits at most 32 parameters');
        const a = clause(rest.slice(eq + 1), 'from'); if (!a) throw new LucentError("parameter needs 'from lower to upper'");
        const b = clause(a[1], 'to'); if (!b) throw new LucentError('parameter needs upper bound');
        const def = scalar(parse(a[0])), min = scalar(parse(b[0])), max = scalar(parse(b[1]));
        if (!(min < max) || def < min || def > max) throw new LucentError('parameter needs finite increasing bounds containing its default');
        const value = overrides[name] ?? def;
        if (value < min || value > max) throw new LucentError(`parameter '${name}' must be between ${min} and ${max}`);
        env.values[name] = value; env.params.add(name);
        outputs.push({ type: 'parameter', name, min, max, value, default: def });
      } else if ((rest = command(st, 'let')) !== null) {
        const eq = rest.indexOf('='); if (eq < 0) throw new LucentError("expected 'let name = expression'");
        const name = rest.slice(0, eq).trim(); checkName(name);
        const value = scalar(parse(rest.slice(eq + 1))); env.values[name] = value;
        outputs.push({ type: 'definition', label: name, expression: `≈ ${value}` });
      } else if ((rest = command(st, 'fn')) !== null) {
        const eq = rest.indexOf('='); if (eq < 0) throw new LucentError("expected 'fn name(x) = expression'");
        const sig = rest.slice(0, eq).trim(); if (!sig.endsWith('(x)')) throw new LucentError('functions must have one argument named x');
        const name = sig.slice(0, -3).trim(); checkName(name);
        const ast = parse(rest.slice(eq + 1), true); env.fns.set(name, ast);
        outputs.push({ type: 'definition', label: `${name}(x)`, expression: rest.slice(eq + 1).trim() });
      } else if ((rest = command(st, 'bernstein')) !== null) {
        const a = clause(rest, 'degree'); if (!a) throw new LucentError("expected 'bernstein function degree n as name'");
        const b = clause(a[1], 'as'); if (!b) throw new LucentError("expected 'bernstein function degree n as name'");
        const src = a[0].trim(), name = b[1].trim(); checkName(name);
        if (!env.fns.has(src)) throw new LucentError(`unknown function '${src}'`);
        const n = integer(scalar(parse(b[0])));
        if (n < 1 || n > 24) throw new LucentError('Bernstein degree must be an integer from 1 to 24; use the theorem for larger degrees');
        const samples = []; let binom = 1; const terms = [];
        for (let k = 0; k <= n; k++) {
          const s = at(src, k / n); samples.push(s);
          const coefficient = s * binom; if (!Number.isFinite(coefficient)) throw new LucentError('Bernstein coefficient is not finite');
          let term = `(${coefficient.toExponential(16)})`;
          if (k > 0) term += `*x^${k}`; if (k < n) term += `*(1-x)^${n - k}`;
          terms.push(term); if (k < n) binom *= (n - k) / (k + 1);
        }
        env.fns.set(name, parseExpression(`(0*sqrt(x)+0*sqrt(1-x))+(${terms.join('+')})`));
        env.bernstein.set(name, { source: src, degree: n, samples });
        outputs.push({ type: 'definition', label: `${name}(x)`, expression: `floating-point Bernstein approximation B_${n}(${src}) on [0,1]; node samples and evaluations are approximate` });
      } else if ((rest = command(st, 'weights')) !== null) {
        const a = clause(rest, 'at'), b = a && clause(a[1], 'radius');
        if (!b) throw new LucentError("expected 'weights approximation at witness radius distance'");
        const name = a[0].trim(), spec = env.bernstein.get(name);
        if (!spec) throw new LucentError(`'${name}' is not a named Bernstein approximation`);
        const witness = scalar(parse(b[0])), radius = scalar(parse(b[1]));
        if (!(witness >= 0 && witness <= 1) || !(radius > 0 && radius <= 1)) throw new LucentError('Bernstein weights need a witness in [0,1] and radius in (0,1]');
        const target = at(spec.source, witness), n = spec.degree, variance = witness * (1 - witness) / n;
        const rows = []; let binom = 1, weighted = 0, wsum = 0, near = 0, far = 0, farMass = 0, observed = 0;
        spec.samples.forEach((sample, k) => {
          const node = k / n, weight = binom * witness ** k * (1 - witness) ** (n - k), dist = Math.abs(node - witness), gap = weight * Math.abs(sample - target), isNear = dist <= radius;
          weighted += weight * sample; wsum += weight; observed += weight * dist * dist;
          if (isNear) near += gap; else { far += gap; farMass += weight; }
          rows.push({ index: k, node, weight, sample, weightedGap: gap, near: isNear }); if (k < n) binom *= (n - k) / (k + 1);
        });
        outputs.push({ type: 'weights', label: `B_${n}(${spec.source}) weights at x=${witness}, radius ${radius}`, degree: n, witness, radius, target, weightedValue: weighted, nearGap: near, farGap: far, farMass, weightSum: wsum, observedVariance: observed, varianceIdentity: variance, farMassBound: variance / (radius * radius), uniformFarMassBound: 1 / (4 * n * radius * radius), rows });
      } else if ((rest = command(st, 'product')) !== null) {
        const a = clause(rest, 'at'), b = a && clause(a[1], 'step');
        if (!b) throw new LucentError("expected 'product f g at a step h'");
        const fs = a[0].trim().split(/\s+/); if (fs.length !== 2) throw new LucentError("expected two named functions in 'product f g'");
        for (const f of fs) if (!env.fns.has(f)) throw new LucentError(`unknown function '${f}'`);
        const at0 = scalar(parse(b[0])), step = scalar(parse(b[1]));
        if (step === 0 || at0 + step === at0) throw new LucentError('product step must be nonzero with a finite changed input');
        const [f, g] = fs, fb = at(f, at0), gb = at(g, at0), fa = at(f, at0 + step), ga = at(g, at0 + step), fc = fa - fb, gc = ga - gb;
        const fStrip = fb * gc, gStrip = gb * fc, corner = fc * gc, total = fStrip + gStrip + corner;
        outputs.push({ type: 'productChange', label: `Finite product change for ${f}(x)·${g}(x) at ${at0}, step ${step}`, first: f, second: g, at: at0, step, firstBefore: fb, secondBefore: gb, firstAfter: fa, secondAfter: ga, firstChange: fc, secondChange: gc, firstStrip: fStrip, secondStrip: gStrip, corner, firstQuotient: fStrip / step, secondQuotient: gStrip / step, cornerQuotient: corner / step, totalChange: total, quotient: total / step, positiveRectangle: fb > 0 && gb > 0 && fc > 0 && gc > 0 && fa > 0 && ga > 0 });
      } else if ((rest = command(st, 'show')) !== null) {
        outputs.push({ type: 'scalar', label: rest.trim(), value: scalar(parse(rest)), method: 'floating-point evaluation' });
      } else if ((rest = command(st, 'diff')) !== null) {
        const a = clause(rest, 'as'); if (!a) throw new LucentError("expected 'diff function as new_name'");
        const name = a[0].trim(), target = a[1].trim(); checkName(target);
        const body = env.fns.get(name); if (!body) throw new LucentError(`unknown function '${name}'`);
        const usesBernstein = (ast, seen = new Set()) => [...dependencies(ast).calls].some(c => env.bernstein.has(c) || (!seen.has(c) && seen.add(c) && env.fns.has(c) && usesBernstein(env.fns.get(c), seen)));
        if (env.bernstein.has(name) || usesBernstein(body)) throw new LucentError('symbolic differentiation of a sampled Bernstein approximation or a function using one is unsupported; use its defining polynomial or a mathematical argument');
        const expanded = expand(body, null, env.fns), expandedAst = parseExpression(expanded), d = derivative(expandedAst);
        const guarded = `(0*(${expanded}))+(${d})`;
        if (guarded.length > MAX_SYMBOLIC) throw new LucentError('symbolic derivative exceeds the size limit');
        env.fns.set(target, parseExpression(guarded)); env.origins.set(target, expandedAst);
        outputs.push({ type: 'symbolic', label: `${target}(x) = d${name}/dx`, expression: d, domain: DERIVATIVE_DOMAIN });
      } else if ((rest = command(st, 'table')) !== null) {
        if (env.sequences.has(rest.trim())) { outputs.push({ type: 'table', label: `${rest.trim()}: discrete iteration terms (index, value)`, columns: ['n', 'a_n'], rows: env.sequences.get(rest.trim()) }); }
        else {
          const spec = sampleSpec(rest, true);
          if (spec.count < 2 || spec.count > 256) throw new LucentError('table count must be 2..256');
          if (!(spec.from < spec.to)) throw new LucentError('table bounds must increase with finite width');
          const rows = []; for (let i = 0; i < spec.count; i++) { const x = spec.from + (spec.to - spec.from) * i / (spec.count - 1); rows.push([x, at(spec.name, x)]); }
          outputs.push({ type: 'table', label: `${spec.name} on [${spec.from}, ${spec.to}]`, columns: ['x', 'f(x)'], rows });
        }
      } else if ((rest = command(st, 'sum')) !== null) {
        const [spec0, binding] = optionalBinding(rest), spec = sampleSpec(spec0, false), from = integer(spec.from), to = integer(spec.to);
        if (to < from || to - from > 4095) throw new LucentError('sum needs increasing integer bounds and at most 4096 terms');
        let total = 0, comp = 0; for (let x = from; x <= to; x++) { const term = at(spec.name, x) - comp, next = total + term; comp = (next - total) - term; total = next; }
        if (!Number.isFinite(total)) throw new LucentError('finite sum overflowed floating-point range');
        if (binding) env.values[binding] = total;
        outputs.push({ type: 'scalar', label: `${binding ? binding + ' = ' : ''}Σ ${spec.name}(k), k=${from}..${to}`, value: total, method: 'finite approximate floating-point sum' });
      } else if ((rest = command(st, 'integrate')) !== null) {
        const [spec0, binding] = optionalBinding(rest), spec = sampleSpec(spec0, true);
        if (spec.count < 1 || spec.count > 4096) throw new LucentError('integration count must be 1..4096');
        if (!(spec.from < spec.to)) throw new LucentError('integration bounds must increase');
        const width = (spec.to - spec.from) / spec.count; validateCells(spec.name, spec.from, spec.to, spec.count);
        let total = 0, comp = 0;
        for (let i = 0; i < spec.count; i++) { const l = spec.from + i * width, r = spec.from + (i + 1) * width, x = l + (r - l) / 2, term = at(spec.name, x) * width - comp, next = total + term; comp = (next - total) - term; total = next; }
        if (binding) env.values[binding] = total;
        outputs.push({ type: 'scalar', label: `${binding ? binding + ' = ' : ''}finite midpoint sum for ${spec.name} on [${spec.from}, ${spec.to}]`, value: total, method: `${spec.count} midpoint rectangles; this finite estimate does not establish integrability or a certified error bound` });
      } else if ((rest = command(st, 'iterate')) !== null) {
        const a = clause(rest, 'as'); if (!a) throw new LucentError("expected 'iterate function from initial count n as name'");
        const name = a[1].trim(); checkName(name);
        const b = clause(a[0], 'from'); if (!b) throw new LucentError('iteration needs an initial value');
        const fnName = b[0].trim(); if (!env.fns.has(fnName)) throw new LucentError(`unknown function '${fnName}'`);
        const c = clause(b[1], 'count'); if (!c) throw new LucentError('iteration needs a term count');
        let term = scalar(parse(c[0])); const n = integer(scalar(parse(c[1])));
        if (n < 2 || n > 256) throw new LucentError('iteration count must be 2..256');
        const rows = []; for (let i = 0; i < n; i++) { rows.push([i, term]); if (i + 1 < n) term = at(fnName, term); }
        env.sequences.set(name, rows);
        outputs.push({ type: 'table', label: `${name}: actual discrete terms of ${fnName}, starting at index 0`, columns: ['n', 'a_n'], rows });
      } else if ((rest = command(st, 'scatter')) !== null) {
        const name = rest.trim(), rows = env.sequences.get(name); if (!rows) throw new LucentError(`unknown sequence '${name}'`);
        const vals = rows.map(r => r[1]), lo = Math.min(...vals), hi = Math.max(...vals), pad = Math.max(Math.abs(hi - lo) * 0.12, 0.5);
        outputs.push({ type: 'plot', label: `${name}: discrete iteration terms; points are not joined`, scene: { title: `Actual discrete terms of ${name}`, domain: [-0.5, rows.length - 0.5], range: [lo - pad, hi + pad], equal: false, params: [], values: {}, readouts: [], prims: rows.map(([i, v]) => ({ kind: 'point', color: 'teal', p: [i, v], label: `term ${i}: ${v}`, keys: [] })) }, xLabel: 'n', yLabel: 'aₙ' });
      } else if ((rest = command(st, 'plot')) !== null) {
        const spec = sampleSpec(rest, false);
        if (!(spec.from < spec.to)) throw new LucentError('plot bounds must increase with finite width');
        outputs.push({ type: 'plot', label: `${spec.name} on [${spec.from}, ${spec.to}]`, scene: plotScene([spec.name], spec.from, spec.to, null) });
      } else if ((rest = command(st, 'overlay')) !== null) {
        const a = clause(rest, 'from'), b = a && clause(a[1], 'to'), c = b && clause(b[1], 'at');
        if (!c) throw new LucentError("expected 'overlay f, g from lower to upper at witness'");
        const fnNames = a[0].split(',').map(s => s.trim());
        if (fnNames.length < 2 || fnNames.length > 4 || fnNames.some(s => !s)) throw new LucentError('overlay needs two to four comma-separated functions');
        for (const f of fnNames) if (!env.fns.has(f)) throw new LucentError(`unknown function '${f}'`);
        const from = scalar(parse(b[0])), to = scalar(parse(c[0])), w = scalar(parse(c[1]));
        if (!(from < to) || w < from || w > to) throw new LucentError('overlay needs finite increasing bounds containing the witness');
        outputs.push({ type: 'plot', label: `${fnNames.join(' and ')} on [${from}, ${to}], marked at x=${w}`, scene: plotScene(fnNames, from, to, w) });
      } else throw new LucentError('unknown notebook statement');
    } catch (error) {
      if (error instanceof LucentError) error.statement = st; else if (error instanceof RangeError) throw new LucentError('expression is too deeply nested');
      throw error;
    }
  }
  for (const name of Object.keys(overrides)) if (!env.params.has(name)) throw new LucentError(`unknown parameter override '${name}'`);
  return { outputs };
}

// ----- rendering -----
function renderOutput(output, boards) {
  const item = el('section', 'lucent-result');
  item.append(el('span', 'lucent-result-kind', output.type === 'productChange' ? 'product change' : output.type));
  if (output.label) item.append(el('strong', 'lucent-result-label', output.label));
  const katexHtml = tex => { const span = el('span', 'value'); try { span.innerHTML = katex.renderToString(tex, { throwOnError: false }); } catch { span.textContent = tex; } return span; };
  switch (output.type) {
    case 'definition': case 'symbolic':
      item.append(el('div', 'expression', output.expression ?? '')); if (output.domain) item.append(el('small', '', output.domain)); break;
    case 'scalar':
      item.append(el('output', 'value', pretty(output.value)), el('small', '', 'Method: ' + output.method)); break;
    case 'exact':
      item.append(output.denominator === '1' ? katexHtml(output.numerator) : katexHtml(`\\frac{${output.numerator}}{${output.denominator}}`), el('small', '', 'Exact rational value. Use approx to convert it explicitly.')); break;
    case 'parameter':
      item.append(el('output', 'value', pretty(output.value)), el('small', '', `Adjust ${output.name} in the controls above; every change reruns this whole program.`)); break;
    case 'table': {
      const scroll = el('div', 'lucent-table-scroll'), table = el('table', 'lucent-table'), head = el('tr');
      for (const c of output.columns) head.append(el('th', '', c));
      table.append(el('thead')); table.firstChild.append(head);
      const body = el('tbody'); for (const row of output.rows.slice(0, 500)) { const tr = el('tr'); for (const v of row) tr.append(el('td', '', pretty(v))); body.append(tr); }
      table.append(body); scroll.append(table); item.append(scroll, el('small', '', 'Numerical samples; they do not establish a theorem.')); break;
    }
    case 'plot': {
      const host = el('div'), board = new Board(host, { equal: false, label: output.label, xLabel: output.xLabel ?? 'x', yLabel: output.yLabel ?? 'y' });
      item.append(host, el('small', '', 'Sampled numerical plot; inspect the function and its domain separately.'));
      boards.push(board); loadJSXGraph().then(() => board.draw(output.scene));
      break;
    }
    case 'weights': item.append(renderWeights(output)); break;
    case 'productChange': item.append(renderProduct(output)); break;
    default: break;
  }
  return item;
}
function renderWeights(o) {
  const box = el('div');
  box.append(el('p', '', `At x = ${pretty(o.witness)}, the ${o.degree + 1} sample weights form one average. Samples within ${pretty(o.radius)} of x are near (solid blue); the rest are far (striped).`));
  const chart = el('div', 'lucent-weights'); chart.setAttribute('role', 'img'); chart.setAttribute('aria-label', `Degree ${o.degree} Bernstein weights; far mass ${pretty(o.farMass)}. A data table follows.`);
  const max = Math.max(...o.rows.map(r => r.weight));
  for (const r of o.rows) { const bar = el('span', r.near ? '' : 'far'); bar.style.height = `${Math.max(1, 100 * r.weight / max)}%`; bar.title = `k=${r.index}: ${pretty(r.weight)}`; chart.append(bar); }
  box.append(chart);
  const list = el('dl', 'lucent-readouts');
  for (const [k, v] of [['Weighted value', o.weightedValue], ['Source at x', o.target], ['Absolute error', Math.abs(o.weightedValue - o.target)], ['Near weighted gap', o.nearGap], ['Far weighted gap', o.farGap], ['Far weight', o.farMass], ['Sum of weights', o.weightSum], ['Second moment', o.observedVariance], ['Moment identity', o.varianceIdentity], ['Far weight bound at x', o.farMassBound], ['Far weight bound for all x', o.uniformFarMassBound]]) { const row = el('div'); row.append(el('dt', '', k), el('dd', '', pretty(v))); list.append(row); }
  box.append(list);
  const details = el('details', 'lucent-details'); details.append(el('summary', '', `Inspect all ${o.rows.length} sampled nodes`));
  const table = el('table', 'lucent-table'); const head = el('tr'); for (const c of ['k', 'k/n', 'Weight', 'f(k/n)', 'Weighted gap', 'Group']) head.append(el('th', '', c));
  table.append(head); for (const r of o.rows) { const tr = el('tr'); for (const v of [r.index, pretty(r.node), pretty(r.weight), pretty(r.sample), pretty(r.weightedGap), r.near ? 'Near' : 'Far']) tr.append(el('td', '', String(v))); table.append(tr); }
  const scroll = el('div', 'lucent-table-scroll'); scroll.append(table); details.append(scroll); box.append(details);
  box.append(el('small', '', 'The near and far weighted gaps add to an upper bound on this point’s error. A finite witness does not prove a uniform claim.'));
  return box;
}
function renderProduct(o) {
  const box = el('div');
  box.append(el('p', '', `From x = ${pretty(o.at)} to x = ${pretty(o.at + o.step)}, both named functions are evaluated at the same two inputs. The diagram and table show the terms of an exact finite identity; displayed numbers are approximate.`));
  if (o.positiveRectangle) {
    const rect = el('div', 'lucent-product'); rect.setAttribute('role', 'img'); rect.setAttribute('aria-label', 'Rectangle split into base, two strips and a corner; the table follows.');
    rect.style.gridTemplateColumns = `${100 * o.firstBefore / o.firstAfter}fr ${100 * o.firstChange / o.firstAfter}fr`; rect.style.gridTemplateRows = `${100 * o.secondChange / o.secondAfter}fr ${100 * o.secondBefore / o.secondAfter}fr`;
    for (const role of ['first', 'corner', 'base', 'second']) rect.append(el('div', role));
    box.append(rect, el('small', '', `Orange: ${o.first}(a)·Δ${o.second}; teal: ${o.second}(a)·Δ${o.first}; pink: Δ${o.first}·Δ${o.second}; blue: original product.`));
  } else {
    box.append(el('small', '', 'A positive four-region rectangle needs positive starting sides and positive changes in both sides. The signed algebra below still applies.'));
    const bars = el('div', 'lucent-bars'), max = Math.max(Math.abs(o.firstQuotient), Math.abs(o.secondQuotient), Math.abs(o.cornerQuotient), 1e-12);
    for (const [label, v] of [['First strip', o.firstQuotient], ['Second strip', o.secondQuotient], ['Corner', o.cornerQuotient]]) {
      const track = el('span', 'track'), bar = el('span', 'bar'), w = 45 * Math.abs(v) / max; bar.style.left = v < 0 ? `${50 - w}%` : '50%'; bar.style.width = w + '%'; track.append(bar);
      bars.append(el('span', '', label), track, el('span', '', pretty(v)));
    }
    box.append(bars);
  }
  const table = el('table', 'lucent-table'); const head = el('tr'); for (const c of ['Region', 'Area change', 'Divided by step']) head.append(el('th', '', c)); table.append(head);
  for (const [l, a, q] of [['First strip', o.firstStrip, o.firstQuotient], ['Second strip', o.secondStrip, o.secondQuotient], ['Corner', o.corner, o.cornerQuotient], ['Whole change', o.totalChange, o.quotient]]) { const tr = el('tr'); for (const v of [l, pretty(a), pretty(q)]) tr.append(el('td', '', v)); table.append(tr); }
  box.append(table, el('small', '', 'The first strip, second strip, and corner sum to the whole finite change. Divide each by the same nonzero step.'));
  return box;
}

/** The notebook block: program, parameter sliders, results; the program can be edited and rerun. */
export function createNotebook(source) {
  const block = el('section', 'lucent-block lucent-notebook');
  const head = el('div', 'lucent-caption'); head.append(el('span', 'lucent-badge', 'Notebook'), el('span', 'lucent-title', 'Run and change the calculation'));
  const view = el('pre', 'lucent-source'), code = el('code'); code.textContent = source.trim(); view.append(code);
  const editor = el('details', 'lucent-details'); editor.append(el('summary', '', 'Edit the program'));
  const area = el('textarea'); area.value = source.trim(); area.spellcheck = false; area.setAttribute('aria-label', 'Notebook program');
  const run = el('button', 'lucent-button primary', 'Run'); run.type = 'button';
  const restore = el('button', 'lucent-button', 'Restore original'); restore.type = 'button';
  const actions = el('div', 'lucent-actions'); actions.append(run, restore); editor.append(area, actions);
  const controls = el('div', 'lucent-controls'); controls.setAttribute('role', 'group'); controls.setAttribute('aria-label', 'Notebook parameters'); controls.hidden = true;
  const status = el('div', 'lucent-feedback'); status.setAttribute('role', 'status');
  const results = el('div', 'lucent-results');
  block.append(head, view, editor, controls, status, results);
  let program = source.trim(), overrides = {}, boards = [], signature = '';
  const render = () => {
    for (const b of boards) b.destroy(); boards = [];
    try {
      const { outputs } = runNotebook(program, overrides);
      status.textContent = ''; status.dataset.state = '';
      const params = outputs.filter(o => o.type === 'parameter'), sig = JSON.stringify(params.map(p => [p.name, p.min, p.max]));
      if (sig !== signature) {
        signature = sig; controls.replaceChildren();
        for (const p of params) { const row = sliderRow({ name: p.name, min: p.min, max: p.max }, parameterStep(p, program), p.value, v => { overrides[p.name] = v; update(); }, 'lucent-nb'); controls.append(row.row); }
        controls.hidden = !params.length;
      }
      results.replaceChildren(...outputs.map(o => renderOutput(o, boards)));
    } catch (error) {
      status.dataset.state = 'error';
      status.textContent = (error.statement ? `In “${error.statement.slice(0, 80)}”: ` : '') + describe(error);
      results.replaceChildren();
    }
  };
  const update = schedule(render);
  run.addEventListener('click', () => { program = area.value; overrides = {}; signature = ''; render(); });
  restore.addEventListener('click', () => { area.value = source.trim(); program = area.value; overrides = {}; signature = ''; code.textContent = program; render(); });
  render();
  return block;
}
