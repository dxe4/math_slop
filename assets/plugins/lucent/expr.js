// Lucent expressions: a small, safe lexer, parser and closure compiler.
// No source text is ever passed to eval/Function: expressions become ASTs
// that are compiled into JavaScript closures over a fixed set of operations.
//
// Grammar:  expr   := term (('+'|'-') term)*
//           term   := unary (('*'|'/') unary)*
//           unary  := ('-'|'+') unary | power
//           power  := atom ('^' unary)?          (right associative)
//           atom   := number | name | name '(' expr ')' | '(' expr ')'
// Undefined values (division by zero, ln of a non-positive number, 0^0 ...)
// propagate as NaN, as `None` does in the Rust engine.

export class LucentError extends Error {
  constructor(message, pos = null) { super(message); this.name = 'LucentError'; this.pos = pos; }
}

export const BUILTINS = {
  sin: Math.sin, cos: Math.cos, tan: Math.tan, exp: Math.exp, ln: Math.log, sqrt: Math.sqrt, abs: Math.abs,
  asin: Math.asin, acos: Math.acos, atan: Math.atan, floor: Math.floor, ceil: Math.ceil,
};
export const CONSTANTS = { pi: Math.PI, e: Math.E };
const finite = value => (Number.isFinite(value) ? value : NaN);

// ---------- lexer ----------
const NUMBER = /^(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/;
export function tokenize(source) {
  const tokens = [];
  let i = 0;
  while (i < source.length) {
    const c = source[i];
    if (/\s/.test(c)) { i++; continue; }
    if (c === '#') { while (i < source.length && source[i] !== '\n') i++; continue; }
    if (/[0-9.]/.test(c)) {
      const m = NUMBER.exec(source.slice(i));
      if (!m) throw new LucentError('invalid number', i);
      tokens.push({ type: 'num', value: Number(m[0]), pos: i }); i += m[0].length; continue;
    }
    if (/[A-Za-z_]/.test(c)) {
      let j = i + 1;
      while (j < source.length && /[A-Za-z0-9_]/.test(source[j])) j++;
      tokens.push({ type: 'name', value: source.slice(i, j), pos: i }); i = j; continue;
    }
    if (c === '"') {
      let j = i + 1, text = '';
      while (j < source.length && source[j] !== '"') {
        if (source[j] === '\\') { j++; text += source[j] === 'n' ? '\n' : source[j] ?? ''; } else text += source[j];
        j++;
      }
      if (j >= source.length) throw new LucentError('unterminated text', i);
      tokens.push({ type: 'str', value: text, pos: i }); i = j + 1; continue;
    }
    if ('+-*/^(),;='.includes(c)) { tokens.push({ type: 'sym', value: c, pos: i }); i++; continue; }
    throw new LucentError(`unexpected character '${c}'`, i);
  }
  tokens.push({ type: 'end', value: '', pos: source.length });
  return tokens;
}

// ---------- parser ----------
export class TokenStream {
  constructor(tokens) { this.tokens = tokens; this.i = 0; }
  get cur() { return this.tokens[this.i]; }
  next() { const t = this.tokens[this.i]; if (this.i < this.tokens.length - 1) this.i++; return t; }
  isSym(s) { return this.cur.type === 'sym' && this.cur.value === s; }
  isName(s) { return this.cur.type === 'name' && this.cur.value === s; }
  sym(s) { if (!this.isSym(s)) throw new LucentError(`expected '${s}'`, this.cur.pos); return this.next(); }
  keyword(s) { if (!this.isName(s)) throw new LucentError(`expected '${s}'`, this.cur.pos); return this.next(); }
  name() { if (this.cur.type !== 'name') throw new LucentError('expected a name', this.cur.pos); return this.next().value; }
  /** A signed numeric literal. */
  literal() {
    let sign = 1;
    if (this.isSym('-')) { this.next(); sign = -1; } else if (this.isSym('+')) this.next();
    if (this.cur.type !== 'num') throw new LucentError('expected a numeric literal', this.cur.pos);
    return sign * this.next().value;
  }
  expr(depth = 0) {
    if (depth > 64) throw new LucentError('expression nesting exceeds the limit', this.cur.pos);
    let left = this.term(depth);
    while (this.isSym('+') || this.isSym('-')) {
      const op = this.next().value;
      left = { k: 'bin', op, a: left, b: this.term(depth) };
    }
    return left;
  }
  term(depth) {
    let left = this.unary(depth);
    while (this.isSym('*') || this.isSym('/')) {
      const op = this.next().value;
      left = { k: 'bin', op, a: left, b: this.unary(depth) };
    }
    return left;
  }
  unary(depth) {
    if (this.isSym('-')) { this.next(); return { k: 'neg', a: this.unary(depth + 1) }; }
    if (this.isSym('+')) { this.next(); return this.unary(depth + 1); }
    return this.power(depth);
  }
  power(depth) {
    const base = this.atom(depth);
    if (this.isSym('^')) { this.next(); return { k: 'bin', op: '^', a: base, b: this.unary(depth + 1) }; }
    return base;
  }
  atom(depth) {
    const t = this.cur;
    if (t.type === 'num') { this.next(); return { k: 'num', v: t.value }; }
    if (t.type === 'name') {
      this.next();
      if (this.isSym('(')) { this.next(); const a = this.expr(depth + 1); this.sym(')'); return { k: 'call', name: t.value, a, pos: t.pos }; }
      return { k: 'var', name: t.value, pos: t.pos };
    }
    if (t.type === 'sym' && t.value === '(') { this.next(); const a = this.expr(depth + 1); this.sym(')'); return a; }
    throw new LucentError('expected an expression', t.pos);
  }
}

/** Parse a complete expression string. */
export function parseExpression(text) {
  const stream = new TokenStream(tokenize(text));
  const ast = stream.expr();
  if (stream.cur.type !== 'end') throw new LucentError('unexpected token after expression', stream.cur.pos);
  return ast;
}

// ---------- analysis ----------
export function walk(ast, visit) {
  visit(ast);
  if (ast.k === 'neg' || ast.k === 'call') walk(ast.a, visit);
  else if (ast.k === 'bin') { walk(ast.a, visit); walk(ast.b, visit); }
}
/** Names used: variables (excluding constants) and called user functions. */
export function dependencies(ast) {
  const vars = new Set(), calls = new Set();
  walk(ast, node => {
    if (node.k === 'var' && !(node.name in CONSTANTS)) vars.add(node.name);
    else if (node.k === 'call' && !(node.name in BUILTINS)) calls.add(node.name);
  });
  return { vars, calls };
}
export function containsCall(ast, names, fns, seen = new Set()) {
  let found = false;
  walk(ast, node => {
    if (found || node.k !== 'call') return;
    if (names.includes(node.name)) found = true;
    else if (fns.has(node.name) && !seen.has(node.name)) { seen.add(node.name); found = containsCall(fns.get(node.name), names, fns, seen); }
  });
  return found;
}
/** Check that every name resolves. `scope` = {vars:Set, fns:Map|Set, locals:Set}. */
export function validate(ast, scope) {
  walk(ast, node => {
    if (node.k === 'var' && !(node.name in CONSTANTS) && !scope.locals?.has(node.name) && !scope.vars.has(node.name)) throw new LucentError(`unknown variable '${node.name}'`, node.pos);
    if (node.k === 'call' && !(node.name in BUILTINS) && !scope.fns.has(node.name)) throw new LucentError(`unknown function '${node.name}'`, node.pos);
  });
}

// ---------- compiler ----------
/**
 * Compile to a closure `(x, y, V) => number` (NaN = undefined). `V` is the
 * object of named values; `callFn(name, argument, V)` evaluates a user function.
 */
export function compile(ast, callFn) {
  switch (ast.k) {
    case 'num': { const v = ast.v; return () => v; }
    case 'var': {
      const name = ast.name;
      if (name === 'x') return x => (x === undefined ? NaN : x);
      if (name === 'y') return (x, y) => (y === undefined ? NaN : y);
      if (name in CONSTANTS) { const v = CONSTANTS[name]; return () => v; }
      return (x, y, V) => { const v = V[name]; return v === undefined ? NaN : v; };
    }
    case 'neg': { const a = compile(ast.a, callFn); return (x, y, V) => -a(x, y, V); }
    case 'bin': {
      const a = compile(ast.a, callFn), b = compile(ast.b, callFn);
      switch (ast.op) {
        case '+': return (x, y, V) => finite(a(x, y, V) + b(x, y, V));
        case '-': return (x, y, V) => finite(a(x, y, V) - b(x, y, V));
        case '*': return (x, y, V) => finite(a(x, y, V) * b(x, y, V));
        case '/': return (x, y, V) => { const d = b(x, y, V); return d === 0 ? NaN : finite(a(x, y, V) / d); };
        default: return (x, y, V) => { const l = a(x, y, V), r = b(x, y, V); return l === 0 && r <= 0 ? NaN : finite(Math.pow(l, r)); };
      }
    }
    default: {
      const arg = compile(ast.a, callFn);
      const builtin = BUILTINS[ast.name];
      if (builtin) return (x, y, V) => finite(builtin(arg(x, y, V)));
      const name = ast.name;
      return (x, y, V) => { const v = arg(x, y, V); return v === v ? callFn(name, v, V) : NaN; };
    }
  }
}

/** Render an AST back to text (fully parenthesised), as the Rust engine does. */
export function display(ast) {
  switch (ast.k) {
    case 'num': return String(ast.v);
    case 'var': return ast.name;
    case 'neg': return `(-${display(ast.a)})`;
    case 'bin': return `(${display(ast.a)}${ast.op}${display(ast.b)})`;
    default: return `${ast.name}(${display(ast.a)})`;
  }
}

/** Number as shown to learners (up to 8 significant digits). */
export function pretty(value) {
  if (!Number.isFinite(value)) return String(value);
  return String(Number(Number(value).toPrecision(8)));
}
