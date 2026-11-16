// The Lucent scene language ("mathviz" fences): parser and numerical evaluator.
// A JavaScript port of the Rust math-core semantics. The result of `evaluate`
// is renderer independent geometry ("primitives"), drawn by board.js.
import { LucentError, TokenStream, tokenize, dependencies, validate, compile, containsCall, BUILTINS, CONSTANTS } from './expr.js';

const COLORS = ['blue', 'teal', 'amber', 'orange', 'violet', 'rose', 'white'];
const IDENT = /^[A-Za-z_][A-Za-z0-9_]{0,63}$/;
const RESERVED = new Set(['x', 'y', 'pi', 'e', ...Object.keys(BUILTINS)]);
const MAX_SOURCE = 65536;

// ---------- parsing ----------
export function parseScene(source) {
  if (source.length > MAX_SOURCE) throw new LucentError('source exceeds 65536 characters');
  const s = new TokenStream(tokenize(source));
  const scene = {
    title: 'Mathematical scene', domain: [-5, 5], range: [-3, 7], equal: false,
    params: [], lets: new Map(), fns: new Map(), scalars: new Map(), fields: new Map(), stmts: [], animations: [],
  };
  const names = new Set();
  const decl = () => {
    const pos = s.cur.pos, name = s.name();
    if (!IDENT.test(name) || RESERVED.has(name)) throw new LucentError(`'${name}' is not a valid name`, pos);
    if (names.has(name)) throw new LucentError(`duplicate name '${name}'`, pos);
    names.add(name); return name;
  };
  const alias = () => (s.isName('as') ? (s.next(), decl()) : null);
  const color = fallback => {
    if (!s.isName('color')) return fallback;
    s.next(); const pos = s.cur.pos, c = s.name();
    if (!COLORS.includes(c)) throw new LucentError('unknown color; use blue, teal, amber, orange, violet, rose, or white', pos);
    return c;
  };
  const interval = () => {
    const pos = s.cur.pos, a = s.literal(), b = s.literal();
    if (!(a < b)) throw new LucentError('bounds must be increasing', pos);
    return [a, b];
  };
  const pair = () => { s.sym('('); const a = s.expr(); s.sym(','); const b = s.expr(); s.sym(')'); return [a, b]; };
  let count = 0;
  while (s.cur.type !== 'end') {
    if (++count > 400) throw new LucentError('scene exceeds the statement limit', s.cur.pos);
    const pos = s.cur.pos, cmd = s.name();
    switch (cmd) {
      case 'scene': { if (s.cur.type !== 'str') throw new LucentError('expected a quoted title', s.cur.pos); scene.title = s.next().value; break; }
      case 'domain': scene.domain = interval(); break;
      case 'range': scene.range = interval(); break;
      case 'coordinates': { const m = s.name(); if (m !== 'equal' && m !== 'free') throw new LucentError('coordinates must be equal or free', pos); scene.equal = m === 'equal'; break; }
      case 'param': {
        const name = decl(); s.sym('='); const def = s.literal(); s.keyword('from'); const min = s.literal(); s.keyword('to'); const max = s.literal();
        if (!(min < max) || def < min || def > max) throw new LucentError('parameter needs increasing bounds and a default within them', pos);
        scene.params.push({ name, default: def, min, max }); break;
      }
      case 'let': { const name = decl(); s.sym('='); scene.lets.set(name, s.expr()); break; }
      case 'fn': { const name = decl(); s.sym('('); s.keyword('x'); s.sym(')'); s.sym('='); scene.fns.set(name, s.expr()); break; }
      case 'plot': { const fn = s.name(); const c = color('blue'); const as = alias(); scene.stmts.push({ t: 'plot', fn, color: c, as, pos }); break; }
      case 'tangent': { const fn = s.name(); s.keyword('at'); const at = s.expr(); const as = alias(); scene.stmts.push({ t: 'tangent', fn, at, as, pos }); break; }
      case 'secant': { const fn = s.name(); s.keyword('at'); const at = s.expr(); s.keyword('step'); const step = s.expr(); const as = alias(); scene.stmts.push({ t: 'secant', fn, at, step, as, pos }); break; }
      case 'riemann': {
        const fn = s.name(); s.keyword('from'); const from = s.expr(); s.keyword('to'); const to = s.expr(); s.keyword('count'); const n = s.expr(); const as = alias();
        scene.stmts.push({ t: 'riemann', fn, from, to, n, as, pos }); break;
      }
      case 'epsilon_delta': {
        const fn = s.name(); s.keyword('at'); const at = s.expr(); s.keyword('limit'); const limit = s.expr(); s.keyword('epsilon'); const eps = s.expr(); s.keyword('delta'); const delta = s.expr(); const as = alias();
        scene.stmts.push({ t: 'epsdelta', fn, at, limit, eps, delta, as, pos }); break;
      }
      case 'vector': case 'point': { const name = decl(); s.sym('='); const c2 = pair(); const c = color(cmd === 'vector' ? 'teal' : 'rose'); scene.stmts.push({ t: cmd, name, c2, color: c, pos }); break; }
      case 'segment': case 'arrow': {
        const name = decl(); s.keyword('from'); const from = pair(); s.keyword('to'); const to = pair(); const c = color(cmd === 'arrow' ? 'teal' : 'amber');
        scene.stmts.push({ t: 'segment', name, from, to, directed: cmd === 'arrow', color: c, pos }); break;
      }
      case 'polygon': {
        const name = decl(); s.sym('='); const vertices = [pair()];
        while (s.isSym(',')) { s.next(); vertices.push(pair()); }
        if (vertices.length < 3 || vertices.length > 64) throw new LucentError('polygon needs 3 to 64 vertices', pos);
        scene.stmts.push({ t: 'polygon', name, vertices, color: color('amber'), pos }); break;
      }
      case 'transform': {
        const name = decl(); s.sym('='); s.sym('('); const m = [s.expr()];
        for (let i = 0; i < 3; i++) { s.sym(','); m.push(s.expr()); }
        s.sym(')'); scene.stmts.push({ t: 'transform', name, m, pos }); break;
      }
      case 'parametric': {
        const name = decl(); s.sym('('); s.keyword('x'); s.sym(')'); s.sym('='); const c2 = pair(); s.keyword('from'); const from = s.expr(); s.keyword('to'); const to = s.expr();
        scene.stmts.push({ t: 'parametric', name, c2, from, to, color: color('teal'), pos }); break;
      }
      case 'scalar': { const name = decl(); s.sym('('); s.keyword('x'); s.sym(','); s.keyword('y'); s.sym(')'); s.sym('='); scene.scalars.set(name, s.expr()); break; }
      case 'contour': { const field = s.name(); s.keyword('level'); const level = s.expr(); const c = color('teal'); const as = alias(); scene.stmts.push({ t: 'contour', field, level, color: c, as, pos }); break; }
      case 'measure': { const name = decl(); s.sym('='); scene.stmts.push({ t: 'measure', name, value: s.expr(), pos }); break; }
      case 'field': { const name = decl(); s.sym('('); s.keyword('x'); s.sym(','); s.keyword('y'); s.sym(')'); s.sym('='); scene.fields.set(name, pair()); scene.stmts.push({ t: 'field', name, pos }); break; }
      case 'flow': {
        const field = s.name(); s.keyword('from'); const from = pair(); s.keyword('time'); const time = s.expr(); s.keyword('steps'); const steps = s.expr();
        scene.stmts.push({ t: 'flow', field, from, time, steps, color: color('rose'), pos }); break;
      }
      case 'animate': {
        const name = s.name(); s.keyword('from'); const min = s.literal(); s.keyword('to'); const max = s.literal(); s.keyword('duration'); const duration = s.literal();
        if (!(min < max) || !(duration > 0 && duration <= 120)) throw new LucentError('animation needs increasing bounds and a duration of at most 120 seconds', pos);
        scene.animations.push({ name, min, max, duration }); break;
      }
      default: throw new LucentError(`unknown statement '${cmd}'`, pos);
    }
    s.sym(';');
  }
  check(scene);
  return scene;
}

function expressionsOf(stmt) {
  const out = [];
  for (const [key, value] of Object.entries(stmt)) {
    if (key === 'pos') continue;
    if (value && typeof value === 'object' && typeof value.k === 'string') out.push(value);
    else if (Array.isArray(value)) for (const item of value.flat()) if (item && typeof item.k === 'string') out.push(item);
  }
  return out;
}

function check(scene) {
  const vars = new Set([...scene.params.map(p => p.name), ...scene.lets.keys()]);
  const base = { vars, fns: new Set(scene.fns.keys()) };
  for (const ast of scene.lets.values()) validate(ast, base);
  for (const ast of scene.fns.values()) validate(ast, { ...base, locals: new Set(['x']) });
  for (const ast of scene.scalars.values()) validate(ast, { ...base, locals: new Set(['x', 'y']) });
  for (const [, pairAst] of scene.fields) for (const ast of pairAst) validate(ast, { ...base, locals: new Set(['x', 'y']) });
  for (const st of scene.stmts) {
    if (st.fn && !scene.fns.has(st.fn)) throw new LucentError(`unknown function '${st.fn}'`, st.pos);
    if (st.t === 'contour' && !scene.scalars.has(st.field)) throw new LucentError('unknown scalar field', st.pos);
    if (st.t === 'flow' && !scene.fields.has(st.field)) throw new LucentError('unknown vector field', st.pos);
    if (st.t === 'parametric') { for (const ast of st.c2) validate(ast, { ...base, locals: new Set(['x']) }); validate(st.from, base); validate(st.to, base); continue; }
    for (const ast of expressionsOf(st)) validate(ast, base);
  }
  for (const a of scene.animations) if (!scene.params.some(p => p.name === a.name)) throw new LucentError(`animation names unknown parameter '${a.name}'`);
  // acyclic let/function dependency graph
  const state = new Map();
  const visit = (kind, name) => {
    const id = kind + ':' + name;
    if (state.get(id) === 1) throw new LucentError(`recursive definition involving '${name}'`);
    if (state.get(id) === 2) return;
    state.set(id, 1);
    const ast = kind === 'fn' ? scene.fns.get(name) : scene.lets.get(name);
    const deps = dependencies(ast);
    for (const v of deps.vars) if (scene.lets.has(v)) visit('let', v);
    for (const c of deps.calls) visit('fn', c);
    state.set(id, 2);
  };
  for (const name of scene.lets.keys()) visit('let', name);
  for (const name of scene.fns.keys()) visit('fn', name);
}

// ---------- evaluation ----------
const lerp = (a, b, t) => a * (1 - t) + b * t;
const fmt = (v, n = 4) => (Number.isFinite(v) ? v.toFixed(n) : String(v));

/** Compile a parsed scene once; returns an evaluator with `evaluate(overrides)`. */
export function prepare(scene) {
  const runs = new Map();
  const callFn = (name, arg, V) => {
    let run = runs.get(name);
    if (!run) { run = compile(scene.fns.get(name), callFn); runs.set(name, run); }
    return run(arg, undefined, V);
  };
  const c = ast => compile(ast, callFn);
  const compiled = new Map();
  const cc = ast => { let f = compiled.get(ast); if (!f) { f = c(ast); compiled.set(ast, f); } return f; };
  const fnRun = name => {
    const f = c(scene.fns.get(name));
    return (x, V) => f(x, undefined, V);
  };
  const fnCache = new Map();
  const fn = name => { let f = fnCache.get(name); if (!f) { f = fnRun(name); fnCache.set(name, f); } return f; };

  // transitive variable dependencies of the lets, for ordering
  const order = [];
  const done = new Set();
  const visitLet = name => {
    if (done.has(name)) return; done.add(name);
    const walkDeps = (ast, seen) => {
      const deps = dependencies(ast);
      for (const v of deps.vars) if (scene.lets.has(v)) visitLet(v);
      for (const f of deps.calls) if (!seen.has(f)) { seen.add(f); walkDeps(scene.fns.get(f), seen); }
    };
    walkDeps(scene.lets.get(name), new Set());
    order.push(name);
  };
  for (const name of scene.lets.keys()) visitLet(name);

  return {
    scene,
    resolve(overrides = {}) {
      const V = Object.create(null);
      for (const name of Object.keys(overrides)) if (!scene.params.some(p => p.name === name)) throw new LucentError(`unknown parameter override '${name}'`);
      for (const p of scene.params) {
        const value = overrides[p.name] ?? p.default;
        if (!Number.isFinite(value) || value < p.min || value > p.max) throw new LucentError(`parameter '${p.name}' must be between ${p.min} and ${p.max}`);
        V[p.name] = value;
      }
      for (const name of order) {
        const v = cc(scene.lets.get(name))(undefined, undefined, V);
        if (!Number.isFinite(v)) throw new LucentError(`scalar binding '${name}' is undefined or not finite`);
        V[name] = v;
      }
      return V;
    },
    evaluate(overrides = {}, samples = 400) { return evaluate(scene, this.resolve(overrides), { cc, fn, samples }); },
  };
}

function evaluate(scene, V, { cc, fn, samples }) {
  const [x0, x1] = scene.domain, [y0, y1] = scene.range;
  const prims = [], readouts = [], counts = {};
  const push = (kind, prim, key, extra = {}) => {
    counts[kind] = (counts[kind] || 0) + 1;
    prim.kind = kind; prim.id = `${kind}-${counts[kind]}`; prim.keys = [prim.id];
    if (key) prim.keys.push(`${kind}-${key}`);
    Object.assign(prim, extra); prims.push(prim); return prim;
  };
  const scalar = (ast, what = 'expression') => {
    const v = cc(ast)(undefined, undefined, V);
    if (!Number.isFinite(v)) throw new LucentError(`${what} is undefined or not finite`);
    return v;
  };
  const point = pairAst => [scalar(pairAst[0]), scalar(pairAst[1])];
  const required = (name, x) => {
    const v = fn(name)(x, V);
    if (!Number.isFinite(v)) throw new LucentError(`${name} is undefined or not finite at x = ${x}`);
    return v;
  };
  const lineAcross = (px, py, slope) => [[x0, py + slope * (x0 - px)], [x1, py + slope * (x1 - px)]];
  const jumpy = name => containsCall(scene.fns.get(name), ['floor', 'ceil'], scene.fns);

  for (const st of scene.stmts) {
    switch (st.t) {
      case 'plot': {
        const f = fn(st.fn), h = y1 - y0, hasJumps = jumpy(st.fn), segs = [];
        let cur = [], prev = null;
        for (let i = 0; i < samples; i++) {
          const x = lerp(x0, x1, i / (samples - 1)), y = f(x, V);
          if (!Number.isFinite(y)) { if (cur.length) segs.push(cur); cur = []; prev = null; continue; }
          if (prev) {
            const mid = f(lerp(prev[0], x, 0.5), V), expected = prev[1] * 0.5 + y * 0.5;
            const ok = Number.isFinite(mid) && Math.abs(y - prev[1]) <= h * 0.5 && Math.abs(mid - expected) <= h * 0.015
              && !(Math.sign(prev[1]) !== Math.sign(y) && Math.min(Math.abs(prev[1]), Math.abs(y)) > h * 2)
              && !(hasJumps && Math.abs(mid - expected) > h * 0.002);
            if (!ok && cur.length) { segs.push(cur); cur = []; }
          }
          cur.push([x, y]); prev = [x, y];
        }
        if (cur.length) segs.push(cur);
        push('curve', { color: st.color, label: `${st.fn}(x); numerical samples`, segs, legend: `${st.fn}(x)` }, st.as ?? st.fn);
        break;
      }
      case 'tangent': {
        const x = scalar(st.at), y = required(st.fn, x), hh = (1 + Math.abs(x)) * 1e-5;
        const left = required(st.fn, x - hh), right = required(st.fn, x + hh);
        const leftSlope = (y - left) / hh, rightSlope = (right - y) / hh, slope = (right - left) / (2 * hh);
        const refined = (required(st.fn, x + hh / 2) - required(st.fn, x - hh / 2)) / hh, tol = 0.005 * (1 + Math.abs(slope));
        if (!Number.isFinite(slope) || Math.abs(leftSlope - rightSlope) > tol || Math.abs(refined - slope) > tol) throw new LucentError('a stable numerical tangent could not be estimated; the function may have a corner or discontinuity', st.pos);
        push('line', { color: 'amber', label: `numerical tangent: slope ≈ ${fmt(refined, 6)}`, a: lineAcross(x, y, refined)[0], b: lineAcross(x, y, refined)[1], legend: 'tangent' }, st.as);
        push('point', { color: 'amber', label: `(${fmt(x)}, ${fmt(y)})`, p: [x, y] }, st.as && `${st.as}_point`);
        break;
      }
      case 'secant': {
        const x = scalar(st.at), step = scalar(st.step);
        if (step === 0 || x + step === x) throw new LucentError('secant step must be nonzero and distinguishable at this input', st.pos);
        const y = required(st.fn, x), y2 = required(st.fn, x + step), slope = (y2 - y) / ((x + step) - x), [a, b] = lineAcross(x, y, slope);
        push('line', { color: 'violet', label: `secant: slope ≈ ${fmt(slope, 6)}`, a, b, legend: 'secant' }, st.as);
        push('point', { color: 'violet', label: `(${fmt(x)}, ${fmt(y)})`, p: [x, y] }, st.as && `${st.as}_point_1`);
        push('point', { color: 'violet', label: `(${fmt(x + step)}, ${fmt(y2)})`, p: [x + step, y2] }, st.as && `${st.as}_point_2`);
        break;
      }
      case 'riemann': {
        const from = scalar(st.from), to = scalar(st.to), n = scalar(st.n);
        if (!(n >= 1 && n <= 512) || n !== Math.floor(n)) throw new LucentError('Riemann count must be an integer between 1 and 512', st.pos);
        if (!(from < to)) throw new LucentError('Riemann bounds must be increasing', st.pos);
        const f = fn(st.fn), cells = []; let sum = 0;
        for (let i = 0; i < n; i++) {
          const l = lerp(from, to, i / n), r = lerp(from, to, (i + 1) / n), m = lerp(from, to, (i + 0.5) / n);
          for (const frac of [0, 0.25, 0.5, 0.75, 1]) if (!Number.isFinite(f(l + frac * (r - l), V))) throw new LucentError(`${st.fn} is undefined near x=${l + frac * (r - l)}; use separate limits for an improper integral`, st.pos);
          const value = f(m, V); sum += value * (r - l); cells.push([l, r - l, value]);
        }
        push('rectangle', { color: 'teal', label: `midpoint Riemann sum ≈ ${fmt(sum, 6)} (${n} cells); sampled estimate`, cells, legend: 'midpoint Riemann sum' }, st.as);
        break;
      }
      case 'epsdelta': {
        const a = scalar(st.at), limit = scalar(st.limit), eps = scalar(st.eps), delta = scalar(st.delta);
        if (!(eps > 0) || !(delta > 0)) throw new LucentError('epsilon and delta must be strictly positive', st.pos);
        const f = fn(st.fn), viol = []; let checked = 0, bad = 0, undef = 0;
        for (let i = 0; i < samples; i++) {
          const x = lerp(a - delta, a + delta, (i + 0.5) / samples), d = Math.abs(x - a);
          if (d === 0 || d >= delta) continue;
          checked++; const y = f(x, V);
          if (!Number.isFinite(y)) undef++; else if (Math.abs(y - limit) >= eps) { bad++; if (viol.length < 64) viol.push([x, y]); }
        }
        if (!checked) throw new LucentError('no distinct interior samples fit this delta', st.pos);
        push('band', { color: 'violet', axis: 'x', min: a - delta, max: a + delta, label: `0 < |x − ${fmt(a)}| < ${fmt(delta)}; ${checked} numerical samples, ${bad} violations, ${undef} undefined; not a proof`, legend: 'input window' }, st.as && `${st.as}_input`);
        push('band', { color: 'teal', axis: 'y', min: limit - eps, max: limit + eps, label: `|f(x) − ${fmt(limit)}| < ${fmt(eps)}; epsilon band`, legend: 'output band' }, st.as && `${st.as}_output`);
        for (const p of viol) push('point', { color: 'rose', label: 'sampled epsilon violation', p }, null);
        break;
      }
      case 'vector': { const p = point(st.c2); push('arrow', { color: st.color, label: `${st.name}: (${fmt(p[0], 6)}, ${fmt(p[1], 6)})`, a: [0, 0], b: p, name: st.name }, st.name); break; }
      case 'point': { const p = point(st.c2); push('point', { color: st.color, label: `${st.name}: (${fmt(p[0], 6)}, ${fmt(p[1], 6)})`, p, name: st.name }, st.name); break; }
      case 'segment': {
        const a = point(st.from), b = point(st.to);
        if (st.directed) push('arrow', { color: st.color, label: st.name, a, b, name: st.name }, st.name);
        else push('line', { color: st.color, label: st.name, a, b }, st.name);
        break;
      }
      case 'polygon': {
        const pts = st.vertices.map(point); let area = 0;
        pts.forEach((p, i) => { const q = pts[(i + 1) % pts.length]; area += p[0] * q[1] - q[0] * p[1]; });
        if (!Number.isFinite(area) || area === 0) throw new LucentError('polygon area must be finite and nonzero', st.pos);
        push('polygon', { color: st.color, label: st.name, pts }, st.name);
        break;
      }
      case 'transform': {
        const [a, b, c2, d] = st.m.map(m => scalar(m)), det = a * d - b * c2;
        if (!Number.isFinite(det)) throw new LucentError('matrix determinant is not finite', st.pos);
        const apply = (x, y) => [a * x + b * y, c2 * x + d * y];
        const width = Math.max(x1 - x0, y1 - y0), offset = Math.max(Math.abs(x0), Math.abs(x1), Math.abs(y0), Math.abs(y1));
        const spacing = Math.max(Math.ceil(width / 20), 1, Math.ceil(offset * Number.EPSILON));
        const label = `transformed grid ${st.name}: [[${fmt(a)}, ${fmt(b)}], [${fmt(c2)}, ${fmt(d)}]], det = ${fmt(det, 6)}`;
        for (const [lo, hi, vertical] of [[x0, x1, true], [y0, y1, false]]) {
          const first = Math.ceil(lo / spacing) * spacing;
          for (let i = 0; i <= 20; i++) {
            const v = first + i * spacing;
            if (v < lo || v > hi) continue;
            push('line', { color: 'violet', label, a: vertical ? apply(v, y0) : apply(x0, v), b: vertical ? apply(v, y1) : apply(x1, v), legend: 'transformed grid', thin: true }, null);
          }
        }
        push('arrow', { color: 'teal', label: `${st.name} e1: (${fmt(a, 6)}, ${fmt(c2, 6)})`, a: [0, 0], b: [a, c2], name: 'e₁' }, null);
        push('arrow', { color: 'amber', label: `${st.name} e2: (${fmt(b, 6)}, ${fmt(d, 6)})`, a: [0, 0], b: [b, d], name: 'e₂' }, null);
        break;
      }
      case 'parametric': {
        const from = scalar(st.from), to = scalar(st.to);
        if (!(from < to)) throw new LucentError('parametric bounds must be increasing', st.pos);
        const fx = cc(st.c2[0]), fy = cc(st.c2[1]), w = x1 - x0, h = y1 - y0, segs = [];
        const at = t => { const x = fx(t, undefined, V), y = fy(t, undefined, V); return Number.isFinite(x) && Number.isFinite(y) ? [x, y] : null; };
        let cur = [], prev = null;
        for (let i = 0; i < samples; i++) {
          const t = lerp(from, to, i / (samples - 1)), p = at(t);
          if (!p) { if (cur.length) segs.push(cur); cur = []; prev = null; continue; }
          if (prev) {
            const m = at(lerp(prev.t, t, 0.5));
            const ok = m && Math.abs(p[0] - prev.p[0]) <= w * 0.5 && Math.abs(p[1] - prev.p[1]) <= h * 0.5
              && Math.abs(m[0] - lerp(prev.p[0], p[0], 0.5)) <= w * 0.015 && Math.abs(m[1] - lerp(prev.p[1], p[1], 0.5)) <= h * 0.015;
            if (!ok && cur.length) { segs.push(cur); cur = []; }
          }
          cur.push(p); prev = { t, p };
        }
        if (cur.length) segs.push(cur);
        push('curve', { color: st.color, label: `${st.name}: parametric curve; numerical samples`, segs, legend: st.name }, st.name);
        break;
      }
      case 'field': {
        const [fx, fy] = scene.fields.get(st.name).map(cc), spacing = Math.min((x1 - x0) / 12, (y1 - y0) / 12), length = spacing * 0.65;
        for (let i = 0; i <= 12; i++) for (let j = 0; j <= 12; j++) {
          const x = lerp(x0, x1, i / 12), y = lerp(y0, y1, j / 12), vx = fx(x, y, V), vy = fy(x, y, V);
          if (!Number.isFinite(vx) || !Number.isFinite(vy)) continue;
          const scale = Math.max(Math.abs(vx), Math.abs(vy));
          if (scale === 0) { push('point', { color: 'violet', label: `field ${st.name}: sampled equilibrium`, p: [x, y], small: true }, null); continue; }
          const ux = vx / scale, uy = vy / scale, norm = Math.hypot(ux, uy);
          push('arrow', { color: 'blue', label: `field ${st.name}: normalized direction arrows`, a: [x, y], b: [x + length * ux / norm, y + length * uy / norm], thin: true, legend: `field ${st.name} (direction only)` }, null);
        }
        break;
      }
      case 'flow': {
        const [fx, fy] = scene.fields.get(st.field).map(cc), from = point(st.from), time = scalar(st.time), steps = scalar(st.steps);
        if (!(time >= 0 && time <= 1000)) throw new LucentError('flow time must be between 0 and 1000', st.pos);
        if (!(steps >= 1 && steps <= 4096) || steps !== Math.floor(steps)) throw new LucentError('flow steps must be an integer between 1 and 4096', st.pos);
        const deriv = (x, y) => {
          if (!Number.isFinite(x) || !Number.isFinite(y)) throw new LucentError('geometry calculation is not finite; reduce values or simulation time', st.pos);
          const vx = fx(x, y, V), vy = fy(x, y, V);
          if (!Number.isFinite(vx) || !Number.isFinite(vy)) throw new LucentError('flow encountered an undefined vector field; reduce time or change initial state', st.pos);
          return [vx, vy];
        };
        deriv(...from);
        const pts = [from]; let [x, y] = from;
        if (time > 0) {
          const dt = time / steps;
          for (let i = 0; i < steps; i++) {
            const k1 = deriv(x, y), k2 = deriv(x + dt * 0.5 * k1[0], y + dt * 0.5 * k1[1]), k3 = deriv(x + dt * 0.5 * k2[0], y + dt * 0.5 * k2[1]), k4 = deriv(x + dt * k3[0], y + dt * k3[1]);
            x += dt * (k1[0] / 6 + k2[0] / 3 + k3[0] / 3 + k4[0] / 6); y += dt * (k1[1] / 6 + k2[1] / 3 + k3[1] / 3 + k4[1] / 6);
            if (!Number.isFinite(x) || !Number.isFinite(y)) throw new LucentError('geometry calculation is not finite; reduce values or simulation time', st.pos);
            pts.push([x, y]);
          }
        }
        push('curve', { color: st.color, label: `flow ${st.field}: from (${fmt(from[0], 6)}, ${fmt(from[1], 6)}), fixed-step RK4 approximation, t = ${fmt(time, 6)}, ${steps} steps`, segs: [pts], legend: `flow of ${st.field}` }, null);
        push('point', { color: st.color, label: `flow ${st.field} state: (${fmt(x, 6)}, ${fmt(y, 6)}) at t = ${fmt(time, 6)}`, p: [x, y] }, null);
        break;
      }
      case 'contour': {
        const f = cc(scene.scalars.get(st.field)), level = scalar(st.level);
        push('curve', { color: st.color, label: `${st.field}: contour ${fmt(level, 6)}; 64-by-64 marching-squares approximation`, segs: contour(f, V, scene.domain, scene.range, level), legend: `${st.field} = ${Number(level.toPrecision(5))}` }, st.as);
        break;
      }
      case 'measure': readouts.push({ name: st.name, value: scalar(st.value, `measure '${st.name}'`) }); break;
      default: break;
    }
  }
  return {
    title: scene.title, domain: scene.domain, range: scene.range, equal: scene.equal, animations: scene.animations,
    params: scene.params, values: Object.fromEntries(scene.params.map(p => [p.name, V[p.name]])), readouts, prims,
  };
}

/** Marching squares on a 64 x 64 grid (the Rust `sample_contour`). */
function contour(f, V, [x0, x1], [y0, y1], level) {
  const N = 64, side = N + 1, values = new Array(side * side);
  for (let r = 0; r < side; r++) for (let c = 0; c < side; c++) {
    const v = f(lerp(x0, x1, c / N), lerp(y0, y1, r / N), V);
    values[r * side + c] = Number.isFinite(v) ? v : null;
  }
  const P = (c, r) => [lerp(x0, x1, c / N), lerp(y0, y1, r / N)];
  const crossing = (p, a, q, b) => {
    if (a === level && b === level) return null;
    if ((a < level) === (b < level) && a !== level && b !== level) return null;
    const scale = Math.max(Math.abs(a), Math.abs(b), Math.abs(level), 1), ls = level / scale, as = a / scale - ls, bs = b / scale - ls, den = bs - as;
    const t = den === 0 ? 0.5 : Math.min(1, Math.max(0, -as / den));
    return [lerp(p[0], q[0], t), lerp(p[1], q[1], t)];
  };
  const segs = [];
  for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
    const idx = [r * side + c, r * side + c + 1, (r + 1) * side + c + 1, (r + 1) * side + c];
    const corners = idx.map(i => values[i]);
    if (corners.some(v => v === null)) continue;
    const pts = [P(c, r), P(c + 1, r), P(c + 1, r + 1), P(c, r + 1)], found = [];
    for (const [e, [s, t]] of [[0, 1], [1, 2], [2, 3], [3, 0]].entries()) {
      const q = crossing(pts[s], corners[s], pts[t], corners[t]);
      if (q && !found.some(([, o]) => o[0] === q[0] && o[1] === q[1])) found.push([e, q]);
    }
    if (found.length === 2) segs.push([found[0][1], found[1][1]]);
    else if (found.length === 4) {
      const center = f(lerp(pts[0][0], pts[2][0], 0.5), lerp(pts[0][1], pts[2][1], 0.5), V);
      if (Number.isFinite(center) && (center >= level) === (corners[0] >= level)) segs.push([found[0][1], found[1][1]], [found[2][1], found[3][1]]);
      else segs.push([found[0][1], found[3][1]], [found[1][1], found[2][1]]);
    }
  }
  return segs;
}

/** Slider step for a parameter, as the original reader chooses it. */
export function parameterStep(parameter, source) {
  const id = parameter.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const count = new RegExp(`\\b(?:riemann|table|integrate|iterate)\\b[^;]*\\bcount\\s+${id}\\s*(?:as\\s+[a-zA-Z_][a-zA-Z_0-9]*)?\\s*;`).test(source)
    || new RegExp(`\\bbernstein\\b[^;]*\\bdegree\\s+${id}\\s+as\\s+[a-zA-Z_][a-zA-Z_0-9]*\\s*;`).test(source)
    || new RegExp(`\\bsum\\b[^;]*\\bfrom\\s+${id}\\s+to\\b|\\bsum\\b[^;]*\\bto\\s+${id}\\s*(?:as\\s+[a-zA-Z_][a-zA-Z_0-9]*)?\\s*;`).test(source)
    || new RegExp(`\\bsteps\\s+(?:floor\\(\\s*)?${id}\\b`).test(source);
  if ((count || /^(n|count|steps|rectangles)$/i.test(parameter.name)) && Number.isInteger(parameter.min) && Number.isInteger(parameter.max)) return 1;
  const extent = parameter.max - parameter.min;
  return Number((10 ** Math.floor(Math.log10(extent / 200))).toPrecision(1)) || 0.001;
}
