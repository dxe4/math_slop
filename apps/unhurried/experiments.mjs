import { nativeAssetURL, nativeIndexURL } from './native-paths.mjs';
import { createFailedLoad } from './failed-load-adapter.mjs';
import { mountLabFrame } from './lab-frame-adapter.mjs';
// Shared progressive enhancement for the catalog experiments. The static
// worked example stays in place until the first model result is ready.
const MODULES = new Set(['analysis', 'discrete', 'geometry', 'probability']);
const mounted = new WeakMap();
const modulePromises = new Map();
const moduleRetries = new Map();
let indexPromise;
let nextId = 0;
let nextSvgId = 0;

export function moduleFor(index, id) {
  if (!index || typeof index !== 'object' || Array.isArray(index)
      || !/^[a-z0-9-]+$/.test(id)
      || !Object.prototype.hasOwnProperty.call(index, id)
      || !MODULES.has(index[id])) {
    throw new Error('Experiment module is unavailable');
  }
  return index[id];
}

export function normalizeDefinition(definition) {
  if (!definition || typeof definition !== 'object'
      || !/^[a-z0-9-]+$/.test(definition.id || '')) {
    throw new Error('Invalid experiment definition');
  }
  for (const key of ['title', 'question', 'prediction', 'explanation', 'limitations']) {
    if (typeof definition[key] !== 'string' || !definition[key].trim()) {
      throw new Error(`Missing experiment ${key}`);
    }
  }
  if (!Array.isArray(definition.controls) || definition.controls.length > 20
      || typeof definition.evaluate !== 'function') {
    throw new Error('Invalid experiment controls or model');
  }
  const keys = new Set();
  const controls = definition.controls.map(control => {
    if (!control || !/^[a-z][a-z0-9_]*$/i.test(control.key || '')
        || keys.has(control.key) || typeof control.label !== 'string'
        || !control.label.trim()) {
      throw new Error('Invalid experiment control');
    }
    keys.add(control.key);
    if (control.type === 'select') {
      if (!Array.isArray(control.options) || !control.options.length
          || control.options.length > 100) throw new Error('Invalid select options');
      const values = new Set();
      const options = control.options.map(option => {
        if (!option || typeof option.value !== 'string' || typeof option.label !== 'string'
            || !option.label.trim() || values.has(option.value)) {
          throw new Error('Invalid select option');
        }
        values.add(option.value);
        return { value: option.value, label: option.label };
      });
      if (!values.has(control.value)) throw new Error('Invalid select default');
      return { key: control.key, label: control.label, type: 'select',
        value: control.value, options };
    }
    if (control.type !== 'range'
        || ![control.min, control.max, control.step, control.value].every(Number.isFinite)
        || control.min >= control.max || control.step <= 0
        || !Number.isFinite((control.max - control.min) / control.step)
        || (control.max - control.min) / control.step > 1000000
        || control.value < control.min || control.value > control.max) {
      throw new Error('Invalid numeric control');
    }
    return { key: control.key, label: control.label, type: 'range',
      min: control.min, max: control.max, step: control.step, value: control.value };
  });
  return { ...definition, controls };
}

export function coerceNumber(raw, control) {
  const value = typeof raw === 'number' ? String(raw) : raw;
  if (typeof value !== 'string' || value.length > 64
      || !/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(value.trim())) {
    return null;
  }
  const number = Number(value);
  if (!Number.isFinite(number)) return null;
  const clipped = Math.max(control.min, Math.min(control.max, number));
  const steps = Math.round((clipped - control.min) / control.step);
  const rounded = control.min + steps * control.step;
  if (!Number.isFinite(steps) || !Number.isFinite(rounded)) return null;
  // Multiplication by a decimal step can leave binary floating-point noise.
  const precise = Number(Math.max(control.min, Math.min(control.max, rounded)).toPrecision(12));
  return Math.max(control.min, Math.min(control.max, precise));
}

export function validateResult(result) {
  if (!result || typeof result !== 'object'
      || typeof result.summary !== 'string' || !result.summary.trim()
      || typeof result.formula !== 'string' || !result.formula.trim()
      || !Array.isArray(result.headers) || !result.headers.length
      || result.headers.length > 20 || !result.headers.every(cell => typeof cell === 'string')
      || !Array.isArray(result.rows) || !result.rows.length || result.rows.length > 250
      || !result.rows.every(row => Array.isArray(row)
        && row.length === result.headers.length
        && row.every(cell => typeof cell === 'string' || typeof cell === 'number' && Number.isFinite(cell)))
      || result.svg !== undefined && (typeof result.svg !== 'string' || result.svg.length > 100000)) {
    throw new Error('Invalid experiment result');
  }
  return result;
}

export function createExperimentSession(rawDefinition) {
  const definition = normalizeDefinition(rawDefinition);
  const defaults = Object.fromEntries(definition.controls.map(control => [control.key, control.value]));
  let state = { ...defaults };
  return {
    definition,
    getState: () => ({ ...state }),
    evaluate: () => validateResult(definition.evaluate({ ...state })),
    update(key, raw) {
      const control = definition.controls.find(item => item.key === key);
      if (!control) return { ok: false, error: 'Unknown control' };
      let value;
      if (control.type === 'range') value = coerceNumber(raw, control);
      else value = control.options.some(option => option.value === raw) ? raw : null;
      if (value === null) return { ok: false, error: `Enter a valid value for ${control.label}. The previous value remains in use.` };
      const changed = value !== state[key];
      state = { ...state, [key]: value };
      return { ok: true, changed, value };
    },
    reset() { state = { ...defaults }; return { ...state }; }
  };
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

export function safeSvgAttribute(name, value) {
  // The SVG namespace is metadata needed to parse a standalone SVG. It is
  // the only permitted HTTP URL; drawing attributes may refer to local IDs.
  if (name === 'xmlns') return value === 'http://www.w3.org/2000/svg';
  return !/^on/i.test(name)
    && !/^(?:style|href|xlink:href|xmlns:xlink)$/i.test(name)
    && !/(?:javascript:|data:|https?:|\/\/|@import)/i.test(value)
    && !/url\((?!\s*#[a-zA-Z0-9_-]+\s*\))/i.test(value);
}

export function namespaceSvgIds(svg, prefix) {
  if (!/^[a-z][a-z0-9-]*$/i.test(prefix)) throw new Error('Invalid SVG namespace prefix');
  const nodes = [svg, ...svg.querySelectorAll('*')];
  const ids = new Map();
  for (const node of nodes) {
    const id = node.getAttribute('id');
    if (id === null) continue;
    if (!/^[a-z][a-z0-9_-]*$/i.test(id) || ids.has(id)) throw new Error('Invalid SVG identifier');
    ids.set(id, `${prefix}${id}`);
  }
  const local = id => {
    const renamed = ids.get(id);
    if (!renamed) throw new Error('SVG reference has no local target');
    return renamed;
  };
  for (const node of nodes) {
    for (const attribute of [...node.attributes]) {
      const { name, value } = attribute;
      if (name === 'id') node.setAttribute(name, local(value));
      else if (name === 'aria-labelledby' || name === 'aria-describedby') {
        node.setAttribute(name, value.trim().split(/\s+/).map(local).join(' '));
      } else if (/url\(\s*#/i.test(value)) {
        node.setAttribute(name, value.replace(/url\(\s*#([a-z][a-z0-9_-]*)\s*\)/gi,
          (_, id) => `url(#${local(id)})`));
      }
    }
  }
  return svg;
}

function safeSvg(source) {
  const parsed = new DOMParser().parseFromString(source, 'image/svg+xml');
  const svg = parsed.documentElement;
  const allowed = new Set(['svg', 'g', 'path', 'line', 'rect', 'circle', 'ellipse',
    'polygon', 'polyline', 'text', 'tspan', 'title', 'desc', 'defs', 'marker',
    'linearGradient', 'radialGradient', 'stop', 'clipPath']);
  const viewBox = svg.getAttribute('viewBox')?.trim().split(/[\s,]+/).map(Number);
  if (svg.localName !== 'svg' || svg.namespaceURI !== 'http://www.w3.org/2000/svg'
      || viewBox?.length !== 4 || !viewBox.every(Number.isFinite)
      || viewBox[2] <= 0 || viewBox[3] <= 0 || !svg.querySelector('title')
      || !svg.querySelector('desc')) throw new Error('Invalid SVG');
  for (const node of [svg, ...svg.querySelectorAll('*')]) {
    if (node.namespaceURI !== 'http://www.w3.org/2000/svg' || !allowed.has(node.localName)) {
      throw new Error('Unsupported SVG element');
    }
    for (const attribute of node.attributes) {
      if (!safeSvgAttribute(attribute.name, attribute.value)) {
        throw new Error('Unsafe SVG attribute');
      }
    }
  }
  namespaceSvgIds(svg, `experiment-svg-${++nextSvgId}-`);
  const width = Math.min(1000, Math.ceil(viewBox[2]));
  const height = width * viewBox[3] / viewBox[2];
  if (!Number.isFinite(height) || height <= 0) throw new Error('Invalid SVG size');
  svg.setAttribute('width', String(width));
  svg.setAttribute('height', String(Number(height.toPrecision(12))));
  return document.importNode(svg, true);
}

export function resultNodes(result) {
  const readout = element('div', 'lab-readout');
  const summary = element('output', '', result.summary);
  summary.setAttribute('aria-label', 'Current result');
  readout.append(summary, element('p', 'lab-formula', result.formula));
  const figure = element('div', 'lab-figure');
  if (result.svg) {
    const svg = safeSvg(result.svg);
    const viewport = element('div', 'lab-diagram-viewport');
    viewport.setAttribute('role', 'region');
    viewport.setAttribute('aria-label', `${svg.querySelector('title').textContent}; use arrow keys to scroll horizontally`);
    viewport.append(svg);
    const note = element('p', 'lab-diagram-hint', 'Scroll sideways to see the full diagram.');
    note.hidden = true;
    figure.append(viewport, note);
  }
  const table = element('table', 'lab-table');
  table.append(element('caption', '', 'Results for the current controls'));
  const thead = element('thead');
  const headRow = element('tr');
  for (const header of result.headers) {
    const th = element('th', '', header);
    th.scope = 'col';
    headRow.append(th);
  }
  thead.append(headRow);
  const tbody = element('tbody');
  for (const row of result.rows) {
    const tr = element('tr');
    row.forEach((cell, index) => {
      const node = element(index === 0 ? 'th' : 'td', '', String(cell));
      if (index === 0) node.scope = 'row';
      tr.append(node);
    });
    tbody.append(tr);
  }
  table.append(thead, tbody);
  const tableWrap = element('div', 'lab-table-wrap');
  tableWrap.tabIndex = 0;
  tableWrap.setAttribute('aria-label', 'Scrollable numerical values');
  tableWrap.append(table);
  const details = element('details');
  details.append(element('summary', '', 'See numerical values'), tableWrap);
  figure.append(details);
  return { readout, figure };
}

export function evaluationErrorMessage(problem) {
  const guidance = 'The previous valid result is still shown. Choose valid values or reset the controls.';
  if (problem instanceof RangeError && typeof problem.message === 'string'
      && problem.message.length <= 200) return `${problem.message} ${guidance}`;
  return `This setting could not be calculated. ${guidance}`;
}

function buildControl(spec, prefix) {
  const wrapper = element('div', 'lab-control');
  const label = element('label', '', spec.label);
  const id = `${prefix}-${spec.key}`;
  label.htmlFor = id;
  wrapper.append(label);
  if (spec.type === 'select') {
    const select = element('select');
    select.id = id;
    select.dataset.key = spec.key;
    for (const option of spec.options) {
      const item = element('option', '', option.label);
      item.value = option.value;
      select.append(item);
    }
    select.value = spec.value;
    wrapper.append(select);
  } else {
    const pair = element('div', 'lab-control-pair');
    const range = element('input');
    range.type = 'range';
    range.id = id;
    range.dataset.key = spec.key;
    range.min = spec.min;
    range.max = spec.max;
    range.step = spec.step;
    range.value = spec.value;
    const number = element('input');
    number.type = 'number';
    number.inputMode = 'decimal';
    number.dataset.key = spec.key;
    number.min = spec.min;
    number.max = spec.max;
    number.step = spec.step;
    number.value = spec.value;
    number.setAttribute('aria-label', `${spec.label} (number)`);
    pair.append(range, number);
    wrapper.append(pair);
  }
  return wrapper;
}

function buildExperiment(host, rawDefinition) {
  const session = createExperimentSession(rawDefinition);
  const initial = session.evaluate(), first = resultNodes(initial);
  const { definition } = session;
  const box = element('div', 'math-lab');
  const controls = element('fieldset', 'lab-controls');
  controls.append(element('legend', '', 'Change the values'));
  const prefix = `experiment-${++nextId}`;
  for (const spec of definition.controls) controls.append(buildControl(spec, prefix));
  const controller = mountLabFrame(box, { id: prefix, title: definition.title, question: definition.question,
    notice: [definition.prediction, definition.explanation, definition.limitations].join(' '), controls,
    figureLabel: definition.title, table: { caption: 'Results for the current controls', headers: initial.headers, rows: initial.rows },
    reset: () => {
      session.reset(); sync();
      if (draw()) controller.setStatus(`Controls reset. ${readout.querySelector('output').textContent}`);
    } });
  controller.stage.closest('.euler-lab').querySelector('form').addEventListener('submit', event => event.preventDefault());
  const error = element('p', 'lab-error'); error.hidden = true;
  controller.stage.append(first.figure);
  controller.stage.after(error, first.readout);
  const status = box.querySelector('.euler-lab__status');
  let readout = first.readout;
  let figure = first.figure;
  let timer;
  let lastCalculationFailed = false;
  const announce = message => {
    clearTimeout(timer);
    timer = setTimeout(() => { status.textContent = message; }, 300);
  };
  const updateDiagramAccessibility = () => {
    const viewport = figure.querySelector('.lab-diagram-viewport');
    if (!viewport) return;
    const overflow = viewport.scrollWidth > viewport.clientWidth + 1;
    viewport.tabIndex = overflow ? 0 : -1;
    figure.querySelector('.lab-diagram-hint').hidden = !overflow;
  };
  const sync = () => {
    const state = session.getState();
    for (const input of controls.querySelectorAll('[data-key]')) input.value = state[input.dataset.key];
  };
  const draw = () => {
    try {
      const result = session.evaluate(), next = resultNodes(result);
      next.figure.querySelector('details').open = figure.querySelector('details').open;
      controller.setTable({ caption: 'Results for the current controls', headers: result.headers, rows: result.rows });
      figure.replaceWith(next.figure);
      readout.replaceWith(next.readout);
      figure = next.figure;
      readout = next.readout;
      updateDiagramAccessibility();
      lastCalculationFailed = false;
      error.hidden = true;
      error.textContent = '';
      controller.setState('ready');
      return true;
    } catch (problem) {
      lastCalculationFailed = true;
      error.hidden = false;
      error.textContent = evaluationErrorMessage(problem);
      controller.setState('error');
      announce(error.textContent);
      return false;
    }
  };
  const update = (event, committed) => {
    const target = event.target;
    if (!target?.dataset?.key || target.type === 'number' && !committed) return;
    const outcome = session.update(target.dataset.key, target.value);
    if (!outcome.ok) {
      if (committed) { sync(); error.hidden = false; error.textContent = outcome.error; announce(outcome.error); }
      return;
    }
    sync();
    if (!outcome.changed && !lastCalculationFailed) {
      error.hidden = true;
      error.textContent = '';
    }
    const rendered = outcome.changed ? draw() : error.hidden;
    if (committed && rendered) announce(readout.querySelector('output').textContent);
  };
  controls.addEventListener('input', event => update(event, false));
  controls.addEventListener('change', event => update(event, true));
  host.replaceChildren(box);
  host.dataset.experimentMounted = 'true';
  updateDiagramAccessibility();
  window.addEventListener('resize', updateDiagramAccessibility);
}

async function loadIndex() {
  if (!indexPromise) indexPromise = fetch(nativeAssetURL('experiments-index.json'))
    .then(response => {
      if (!response.ok) throw new Error('Experiment index unavailable');
      return response.json();
    }).catch(error => { indexPromise = undefined; throw error; });
  return indexPromise;
}

async function loadDefinition(id) {
  const domain = moduleFor(await loadIndex(), id);
  if (!modulePromises.has(domain)) {
    const retry = moduleRetries.get(domain) || 0;
    const location = new URL(`./experiments/${domain}.mjs`, import.meta.url);
    if (retry) location.searchParams.set('retry', String(retry));
    const url = location.href;
    modulePromises.set(domain, import(url).catch(error => {
      modulePromises.delete(domain);
      moduleRetries.set(domain, retry + 1);
      throw error;
    }));
  }
  const module = await modulePromises.get(domain);
  const matches = module.experiments?.filter(definition => definition.id === id) || [];
  if (matches.length !== 1) throw new Error('Experiment definition unavailable');
  return matches[0];
}

function loadError(host) {
  if (host.querySelector('.experiment-load-error')) return;
  const target = new URL(nativeIndexURL('play'));
  const notice = createFailedLoad({ title: 'This experiment could not be loaded',
    detail: 'The worked example on this page is still available.',
    nearestHref: target.pathname + target.search + target.hash, nearestLabel: 'Browse experiments',
    onRetry: async () => { if (!await mountExperiment(host)) throw new Error('Experiment remains unavailable.'); },
  });
  notice.classList.add('experiment-load-error'); host.append(notice);
}

export function mountExperiment(host) {
  if (host.dataset.experimentMounted === 'true') return Promise.resolve(true);
  if (mounted.has(host)) return mounted.get(host);
  const task = loadDefinition(host.dataset.experiment)
    .then(definition => {
      if (definition.id !== host.dataset.experiment) throw new Error('Wrong experiment definition');
      buildExperiment(host, definition);
      return true;
    }).catch(() => { loadError(host); return false; })
    .finally(() => mounted.delete(host));
  mounted.set(host, task);
  return task;
}

export function mountExperiments(root = document) {
  return Promise.all([...root.querySelectorAll('[data-experiment]')].map(mountExperiment));
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => mountExperiments(), { once: true });
  } else mountExperiments();
}
