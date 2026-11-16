// JSXGraph boards for Lucent scenes: lazy library loading, drawing of the
// renderer-independent primitives produced by scene.js / investigation.js, and
// the interactive "figure" (sliders, readouts, animation) built around them.
import { prepare, parseScene, parameterStep } from './scene.js';
import { pretty, LucentError } from './expr.js';

const BASE = new URL('../../vendor/jsxgraph/', import.meta.url);
let loading = null;
function addOnce(tag, attrs) {
  return new Promise((resolve, reject) => {
    const el = document.createElement(tag);
    Object.assign(el, attrs);
    el.addEventListener('load', resolve, { once: true });
    el.addEventListener('error', () => reject(new Error('could not load ' + (attrs.src || attrs.href))), { once: true });
    document.head.append(el);
  });
}
/** Inject the stylesheets (JSXGraph's and ours) once. */
export function ensureStyles() {
  if (document.querySelector('link[data-lucent-css]')) return;
  for (const href of [new URL('jsxgraph.css', BASE).href, new URL('lucent.css', import.meta.url).href]) {
    const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = href; link.dataset.lucentCss = '1'; document.head.append(link);
  }
}
/** Load JSXGraph (script + stylesheet) once; resolves to the global JXG. */
export function loadJSXGraph() {
  loading ??= (async () => {
    ensureStyles();
    if (!window.JXG) await addOnce('script', { src: new URL('jsxgraphcore.js', BASE).href, async: true });
    return window.JXG;
  })();
  loading.catch(() => { loading = null; });
  return loading;
}

// ---------- colours (follow the site's theme tokens) ----------
const TOKENS = { blue: '--blue', teal: '--teal', amber: '--orange', orange: '--orange', violet: '--purple', purple: '--purple', rose: '--pink', red: '--red', green: '--green', white: '--muted', gray: '--muted', grey: '--muted', yellow: '--gold' };
const FALLBACK = { '--blue': '#245ea6', '--teal': '#197178', '--orange': '#a55318', '--purple': '#7453a2', '--pink': '#a33e75', '--red': '#b23e42', '--green': '#2d7047', '--muted': '#55635c', '--gold': '#896513', '--rule': '#dcdcd2', '--surface': '#ffffff', '--ink': '#17261f' };
export function themeColors() {
  const style = getComputedStyle(document.documentElement);
  const get = name => style.getPropertyValue(name).trim() || FALLBACK[name];
  const palette = {};
  for (const [name, token] of Object.entries(TOKENS)) palette[name] = get(token);
  return { palette, rule: get('--rule'), surface: get('--surface'), ink: get('--ink'), muted: get('--muted') };
}

// ---------- tick helpers ----------
export function niceTicks(lo, hi, target = 7) {
  const span = hi - lo;
  if (!(span > 0)) return [];
  const raw = span / target, mag = 10 ** Math.floor(Math.log10(raw)), norm = raw / mag;
  const step = (norm < 1.5 ? 1 : norm < 3.5 ? 2 : norm < 7.5 ? 5 : 10) * mag;
  const out = [];
  for (let v = Math.ceil(lo / step - 1e-9) * step; v <= hi + step * 1e-9; v += step) out.push(Math.abs(v) < step * 1e-9 ? 0 : Number(v.toPrecision(12)));
  return out;
}
const tickText = v => (Math.abs(v) >= 1e5 || (v !== 0 && Math.abs(v) < 1e-3) ? v.toExponential(0) : String(Number(v.toPrecision(6))));

// ---------- a drawing surface ----------
let boardSerial = 0;
const live = new Set();
let themeWatch = false;
function watchTheme() {
  if (themeWatch) return; themeWatch = true;
  const again = () => { for (const b of [...live]) { if (!b.host.isConnected) { live.delete(b); continue; } b.rebuild(); } };
  new MutationObserver(again).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', again);
}

export class Board {
  /** `host` is an empty element; `equal` keeps one unit the same length on both axes. */
  constructor(host, { equal = false, label = 'Mathematical diagram', xLabel = 'x', yLabel = 'y' } = {}) {
    this.host = host; this.equal = equal; this.label = label; this.xLabel = xLabel; this.yLabel = yLabel;
    this.scene = null; this.options = {}; this.board = null; this.dynamic = []; this.stat = []; this.key = '';
    host.classList.add('lucent-board'); host.setAttribute('role', 'img'); host.setAttribute('aria-label', label);
    this.id = 'lucent-board-' + (++boardSerial); host.id = this.id;
    live.add(this); watchTheme();
    this.observer = new ResizeObserver(() => { if (host.clientWidth > 0 && this.scene && !this.board) this.rebuild(); });
    this.observer.observe(host);
  }
  setAspect(scene) {
    const w = scene.domain[1] - scene.domain[0], h = scene.range[1] - scene.range[0];
    const ratio = this.equal ? Math.min(2.4, Math.max(0.55, w / h)) : 760 / 440;
    this.host.style.aspectRatio = String(ratio);
  }
  /** Draw (or redraw) a scene. `options.focus` mutes primitives that carry none of the focus keys. */
  draw(scene, options = {}) {
    this.scene = scene; this.options = options;
    this.equal = scene.equal;
    this.setAspect(scene);
    if (this.host.clientWidth === 0) return;
    const key = JSON.stringify([scene.domain, scene.range, scene.equal, this.xLabel, this.yLabel]);
    if (!this.board || key !== this.key) { this.key = key; this.rebuild(); return; }
    this.paint();
  }
  rebuild() {
    const JXG = window.JXG;
    if (!JXG || !this.scene || this.host.clientWidth === 0) return;
    if (this.board) { try { JXG.JSXGraph.freeBoard(this.board); } catch { /* already gone */ } this.board = null; }
    this.host.replaceChildren();
    this.theme = themeColors();
    const { domain: [x0, x1], range: [y0, y1] } = this.scene;
    this.board = JXG.JSXGraph.initBoard(this.id, {
      boundingbox: [x0, y1, x1, y0], axis: false, grid: false, showCopyright: false, showNavigation: false,
      keepAspectRatio: !!this.scene.equal, pan: { enabled: false }, zoom: { enabled: false, wheel: false }, drag: { enabled: false },
      showInfobox: false, registerEvents: false,
    });
    this.dynamic = []; this.stat = [];
    this.key = JSON.stringify([this.scene.domain, this.scene.range, this.scene.equal, this.xLabel, this.yLabel]);
    this.frame();
    this.paint();
  }
  /** Gridlines, axes and tick labels for the actual visible box. */
  frame() {
    const board = this.board, [bx0, by1, bx1, by0] = board.getBoundingBox(), t = this.theme;
    const base = { fixed: true, highlight: false, withLabel: false, showInfobox: false, visible: true };
    const seg = (a, b, attrs) => this.stat.push(board.create('segment', [a, b], { ...base, ...attrs, point1: { visible: false, withLabel: false }, point2: { visible: false, withLabel: false } }));
    const xs = niceTicks(bx0, bx1, Math.max(3, Math.round(this.host.clientWidth / 90))), ys = niceTicks(by0, by1, Math.max(3, Math.round(this.host.clientHeight / 60)));
    for (const x of xs) seg([x, by0], [x, by1], { strokeColor: t.rule, strokeWidth: 1, strokeOpacity: 0.8 });
    for (const y of ys) seg([bx0, y], [bx1, y], { strokeColor: t.rule, strokeWidth: 1, strokeOpacity: 0.8 });
    if (bx0 < 0 && bx1 > 0) seg([0, by0], [0, by1], { strokeColor: t.muted, strokeWidth: 1.4 });
    if (by0 < 0 && by1 > 0) seg([bx0, 0], [bx1, 0], { strokeColor: t.muted, strokeWidth: 1.4 });
    const text = (x, y, s, attrs) => this.stat.push(board.create('text', [x, y, s], { ...base, display: 'internal', fontSize: 11, strokeColor: t.muted, cssClass: 'lucent-tick', highlightCssClass: 'lucent-tick', ...attrs }));
    for (const x of xs) text(x, by0, tickText(x), { anchorX: 'middle', anchorY: 'top', offset: [0, -3] });
    for (const y of ys) text(bx0, y, tickText(y), { anchorX: 'left', anchorY: 'middle', offset: [4, 0] });
    text(bx1, by0, this.xLabel, { anchorX: 'right', anchorY: 'bottom', offset: [-5, 17], fontSize: 13, cssClass: 'lucent-axis-name', highlightCssClass: 'lucent-axis-name' });
    text(bx0, by1, this.yLabel, { anchorX: 'left', anchorY: 'top', offset: [21, -3], fontSize: 13, cssClass: 'lucent-axis-name', highlightCssClass: 'lucent-axis-name' });
  }
  clearDynamic() {
    for (const el of this.dynamic) { try { this.board.removeObject(el); } catch { /* ignore */ } }
    this.dynamic = [];
  }
  paint() {
    const board = this.board;
    if (!board) return;
    board.suspendUpdate();
    this.clearDynamic();
    const t = this.theme, focus = this.options.focus, [bx0, by1, bx1, by0] = board.getBoundingBox();
    const hidden = { visible: false, withLabel: false };
    const make = (type, parents, attrs) => { const el = board.create(type, parents, { fixed: true, highlight: false, withLabel: false, showInfobox: false, ...attrs }); this.dynamic.push(el); return el; };
    const order = { band: 0, rectangle: 1, polygon: 1, curve: 2, line: 3, arrow: 4, point: 5 };
    const prims = [...this.scene.prims].sort((a, b) => (order[a.kind] ?? 3) - (order[b.kind] ?? 3));
    for (const p of prims) {
      const color = t.palette[p.color] ?? t.palette.blue;
      const dim = focus && focus.length && !p.keys.some(k => focus.includes(k)) ? 0.22 : 1;
      const stroke = { strokeColor: color, strokeOpacity: dim };
      switch (p.kind) {
        case 'curve':
          for (const seg of p.segs) {
            if (seg.length >= 2) make('curve', [seg.map(q => q[0]), seg.map(q => q[1])], { ...stroke, strokeWidth: p.thin ? 1.4 : 2.6, lineCap: 'round' });
            else if (seg.length === 1) make('point', [seg[0][0], seg[0][1]], { ...stroke, fillColor: color, fillOpacity: dim, size: 2, strokeWidth: 0 });
          }
          break;
        case 'line': make('segment', [p.a, p.b], { ...stroke, strokeWidth: p.thin ? 1.2 : 2.2, point1: hidden, point2: hidden }); break;
        case 'arrow': {
          make('arrow', [p.a, p.b], { ...stroke, strokeWidth: p.thin ? 1.3 : 2.4, lastArrow: { type: 2, size: p.thin ? 5 : 7 }, point1: hidden, point2: hidden });
          if (p.name) make('text', [p.b[0], p.b[1], p.name], { display: 'internal', fontSize: 12, strokeColor: color, strokeOpacity: dim, anchorX: 'left', anchorY: 'bottom', offset: [6, 4], cssClass: 'lucent-name', highlightCssClass: 'lucent-name' });
          break;
        }
        case 'point':
          make('point', p.p, { fillColor: color, fillOpacity: dim, strokeColor: t.surface, strokeOpacity: dim, strokeWidth: 1.2, size: p.small ? 2 : 4.5, face: 'o', highlight: false });
          if (p.name) make('text', [p.p[0], p.p[1], p.name], { display: 'internal', fontSize: 12, strokeColor: color, strokeOpacity: dim, anchorX: 'left', anchorY: 'bottom', offset: [7, 5], cssClass: 'lucent-name', highlightCssClass: 'lucent-name' });
          break;
        case 'rectangle': {
          const xs = [], ys = [];
          for (const [l, w, v] of p.cells) { xs.push(l, l, l + w, l + w); ys.push(0, v, v, 0); }
          make('curve', [xs, ys], { ...stroke, strokeWidth: 1, fillColor: color, fillOpacity: 0.2 * dim });
          break;
        }
        case 'polygon': {
          const pts = [...p.pts, p.pts[0]];
          make('curve', [pts.map(q => q[0]), pts.map(q => q[1])], { ...stroke, strokeWidth: 2, fillColor: color, fillOpacity: 0.2 * dim });
          break;
        }
        case 'band': {
          const x = p.axis === 'x';
          const lo = Math.max(p.min, x ? bx0 : by0), hi = Math.min(p.max, x ? bx1 : by1);
          if (lo >= hi) break;
          const xs = x ? [lo, hi, hi, lo, lo] : [bx0, bx1, bx1, bx0, bx0], ys = x ? [by0, by0, by1, by1, by0] : [lo, lo, hi, hi, lo];
          make('curve', [xs, ys], { ...stroke, strokeOpacity: 0.5 * dim, strokeWidth: 1, fillColor: color, fillOpacity: 0.12 * dim });
          break;
        }
        default: break;
      }
    }
    board.unsuspendUpdate();
  }
  destroy() {
    live.delete(this); this.observer.disconnect();
    if (this.board) { try { window.JXG.JSXGraph.freeBoard(this.board); } catch { /* ignore */ } this.board = null; }
  }
}

// ---------- DOM helpers shared by the plugin ----------
export function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
export function errorBox(message, source) {
  const box = el('div', 'lucent-error'); box.setAttribute('role', 'alert');
  box.append(el('strong', '', 'This interactive block could not be drawn. '), document.createTextNode(message));
  if (source) { const pre = el('pre'); pre.append(el('code', '', source)); box.append(pre); }
  return box;
}

/** A slider row. `onInput(value)` is called on every change. */
export function sliderRow(parameter, step, value, onInput, idPrefix = 'lucent-p') {
  const row = el('div', 'lucent-param');
  const id = idPrefix + '-' + parameter.name + '-' + (++boardSerial);
  const label = el('label'); label.htmlFor = id; label.textContent = parameter.label ?? parameter.name;
  if (!parameter.label) label.classList.add('lucent-var');
  const output = el('output', 'lucent-value', pretty(value)); output.htmlFor = id;
  const input = el('input'); input.type = 'range'; input.id = id;
  input.min = String(parameter.min); input.max = String(parameter.max); input.step = String(step); input.value = String(value);
  input.addEventListener('input', () => { const v = input.valueAsNumber; output.textContent = pretty(v); onInput(v); });
  row.append(label, input, output);
  return { row, input, output, set(v) { input.value = String(v); output.textContent = pretty(Number(input.value)); } };
}

/** Controls + live updating for a scene factory: `evaluate(overrides)` returns a scene. */
export function schedule(fn) {
  let pending = 0;
  return () => { if (!pending) pending = requestAnimationFrame(() => { pending = 0; fn(); }); };
}

/** The interactive figure for one `mathviz` scene source. */
export function createSceneFigure(source, { titleOverride, focus, onChange } = {}) {
  const figure = el('figure', 'lucent-figure');
  let prepared;
  try { prepared = prepare(parseScene(source)); } catch (error) {
    figure.append(errorBox(describe(error, source), source));
    return { element: figure, error };
  }
  const scene = prepared.scene;
  const caption = el('figcaption', 'lucent-caption');
  const title = el('span', 'lucent-title', titleOverride ?? scene.title);
  caption.append(el('span', 'lucent-badge', 'Interactive figure'), title);
  const host = el('div');
  const legend = el('ul', 'lucent-legend');
  const readouts = el('dl', 'lucent-readouts'); readouts.hidden = true;
  const controls = el('div', 'lucent-controls'); controls.setAttribute('role', 'group'); controls.setAttribute('aria-label', 'Diagram parameters');
  const status = el('p', 'lucent-status'); status.setAttribute('role', 'status');
  const board = new Board(host, { equal: scene.equal, label: scene.title + '. Interactive diagram; use the parameter sliders below.' });
  const overrides = {};
  let current = null, focusKeys = focus;
  const sliders = new Map();

  const render = () => {
    try {
      current = prepared.evaluate(overrides);
      status.textContent = '';
      board.draw(current, { focus: focusKeys });
      // legend
      const seen = new Set(), items = [];
      for (const p of current.prims) if (p.legend && !seen.has(p.legend + p.color)) { seen.add(p.legend + p.color); items.push(p); }
      legend.replaceChildren(...items.slice(0, 8).map(p => { const li = el('li'); const sw = el('span', 'lucent-swatch'); sw.dataset.color = p.color; sw.style.background = `var(${TOKENS[p.color] ?? '--blue'})`; li.append(sw, document.createTextNode(p.legend)); return li; }));
      legend.hidden = !items.length;
      // readouts
      readouts.replaceChildren(...current.readouts.map(r => { const row = el('div'); row.append(el('dt', 'lucent-var', r.name.replace(/_/g, ' ')), el('dd', '', pretty(r.value))); return row; }));
      readouts.hidden = !current.readouts.length;
      onChange?.(current);
    } catch (error) { status.textContent = 'Could not update the diagram: ' + describe(error); }
  };
  const update = schedule(render);
  for (const parameter of scene.params) {
    const row = sliderRow(parameter, parameterStep(parameter, source), parameter.default, v => { overrides[parameter.name] = v; if (timeline?.playing) { /* slider scrubs the animation */ } update(); });
    sliders.set(parameter.name, row); controls.append(row.row);
  }
  controls.hidden = !scene.params.length;

  // animation: each `animate` statement drives its parameter linearly over `duration` seconds
  let timeline = null;
  const animation = el('div', 'lucent-animation');
  if (scene.animations.length) {
    const total = Math.max(...scene.animations.map(a => a.duration));
    const play = el('button', 'lucent-button', 'Play animation'); play.type = 'button'; play.setAttribute('aria-pressed', 'false');
    const reset = el('button', 'lucent-button', 'Reset'); reset.type = 'button';
    const clock = el('output', 'lucent-clock', '0.00 / ' + total.toFixed(2) + ' s');
    const scrub = el('input', 'lucent-scrub'); scrub.type = 'range'; scrub.min = '0'; scrub.max = String(total); scrub.step = '0.01'; scrub.value = '0'; scrub.setAttribute('aria-label', 'Animation time');
    timeline = { time: 0, playing: false, raf: 0, last: 0 };
    const apply = time => {
      timeline.time = time; scrub.value = String(time); clock.textContent = time.toFixed(2) + ' / ' + total.toFixed(2) + ' s';
      for (const a of scene.animations) {
        const value = a.min + (a.max - a.min) * Math.min(1, time / a.duration), row = sliders.get(a.name);
        overrides[a.name] = value; row?.set(value);
      }
      render();
    };
    const stop = () => { timeline.playing = false; cancelAnimationFrame(timeline.raf); play.textContent = 'Play animation'; play.setAttribute('aria-pressed', 'false'); };
    const tick = now => {
      if (!timeline.playing) return;
      if (!figure.isConnected) return stop();
      const dt = (now - timeline.last) / 1000; timeline.last = now;
      const time = Math.min(total, timeline.time + dt); apply(time);
      if (time >= total) stop(); else timeline.raf = requestAnimationFrame(tick);
    };
    play.addEventListener('click', () => {
      if (timeline.playing) return stop();
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) { apply(Math.min(total, timeline.time + 0.1)); return; }
      if (timeline.time >= total) apply(0);
      timeline.playing = true; timeline.last = performance.now(); play.textContent = 'Pause animation'; play.setAttribute('aria-pressed', 'true'); timeline.raf = requestAnimationFrame(tick);
    });
    reset.addEventListener('click', () => { stop(); apply(0); });
    scrub.addEventListener('input', () => { stop(); apply(scrub.valueAsNumber); });
    // moving the animated slider by hand moves the timeline too
    for (const a of scene.animations) sliders.get(a.name)?.input.addEventListener('input', () => { timeline.time = (overrides[a.name] - a.min) / (a.max - a.min) * a.duration; scrub.value = String(timeline.time); clock.textContent = timeline.time.toFixed(2) + ' / ' + total.toFixed(2) + ' s'; });
    animation.append(play, reset, clock, scrub);
    // start at the parameter's default along the timeline
    const first = scene.animations[0], p0 = scene.params.find(p => p.name === first.name);
    timeline.time = Math.min(total, Math.max(0, (p0.default - first.min) / (first.max - first.min) * first.duration)); scrub.value = String(timeline.time); clock.textContent = timeline.time.toFixed(2) + ' / ' + total.toFixed(2) + ' s';
  } else animation.hidden = true;

  const note = el('p', 'lucent-note', 'A numerical picture helps you explore; definitions and proofs establish the claim.');
  const wrap = el('div', 'lucent-board-wrap'); wrap.append(host);
  figure.append(caption, wrap, legend, readouts, controls, animation, status, note);
  loadJSXGraph().then(() => render()).catch(error => { figure.prepend(errorBox(error.message)); });
  return {
    element: figure, board, prepared,
    setFocus(keys) { focusKeys = keys; if (current) board.draw(current, { focus: focusKeys }); },
    get overrides() { return { ...overrides }; },
    destroy() { board.destroy(); },
  };
}

export function describe(error, source) {
  if (!(error instanceof LucentError)) return error?.message ?? String(error);
  if (error.pos == null || !source) return error.message;
  const line = source.slice(0, error.pos).split('\n').length;
  return `${error.message} (line ${line})`;
}
