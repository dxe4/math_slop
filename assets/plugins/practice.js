// `answer` fences -> an answer box that checks entirely in the browser.
// Nothing is stored: no localStorage, IndexedDB, cookies or network requests.
import { parseSpec, fieldsFor, check, preview } from './practice/engine.mjs';

const STYLE = new URL('./practice/practice.css', import.meta.url).href;
let styled = false;
function ensureStyle() {
  if (styled || document.querySelector('link[data-practice-style]')) { styled = true; return; }
  const link = document.createElement('link');
  link.rel = 'stylesheet'; link.href = STYLE; link.dataset.practiceStyle = '';
  document.head.append(link); styled = true;
}
function h(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) { if (value === false || value == null) continue; node.setAttribute(key, value === true ? '' : value); }
  for (const child of children.flat()) if (child != null) node.append(child);
  return node;
}
let counter = 0;

function build(spec) {
  const kind = spec.answer.kind, uid = 'pa' + ++counter;
  const form = h('form', { class: 'practice-answer', novalidate: true, 'data-kind': kind });
  const status = h('div', { class: 'practice-feedback', role: 'status', 'aria-live': 'polite', tabindex: '-1' });
  if (kind === 'proof') {
    const box = h('textarea', { id: uid + '-proof', rows: '8', spellcheck: 'false', placeholder: 'Write your argument here, then compare it with the model proof below.' });
    form.append(h('p', { class: 'practice-title' }, 'Your attempt'),
      h('label', { for: uid + '-proof', class: 'practice-label' }, 'Proof draft'), box,
      h('p', { class: 'practice-help' }, 'Proofs are not checked automatically. Your draft stays on this page only and disappears when you leave it. Compare it with the model proof and rubric below.'));
    return form;
  }
  const fields = fieldsFor(spec), controls = {};
  form.append(h('p', { class: 'practice-title' }, 'Your answer'));
  if (!fields.length) {
    form.append(h('p', { class: 'practice-help' }, 'This answer format cannot be checked in the browser. Work it out and compare with the worked solution.'));
    return form;
  }
  for (const field of fields) {
    const id = `${uid}-${field.key}`, helpId = id + '-help';
    let control;
    if (field.key === 'choice' && spec.options) {
      control = h('select', { id, name: field.key }, h('option', { value: '' }, 'Choose an option…'), spec.options.map((value, index) => h('option', { value }, `Option ${index + 1}`)));
    } else if (field.key === 'has_inverse') {
      control = h('select', { id, name: field.key }, h('option', { value: '' }, 'Choose yes or no…'), h('option', { value: 'yes' }, 'Yes'), h('option', { value: 'no' }, 'No'));
    } else if (field.type === 'textarea') {
      control = h('textarea', { id, name: field.key, rows: '4', spellcheck: 'false', placeholder: field.optional ? '' : field.placeholder });
    } else {
      control = h('input', { id, name: field.key, type: 'text', autocomplete: 'off', spellcheck: 'false', autocapitalize: 'off' });
    }
    control.setAttribute('aria-describedby', helpId);
    controls[field.key] = control;
    const wrap = h('div', { class: 'practice-field' }, h('label', { for: id, class: 'practice-label' }, field.label), control,
      h('small', { id: helpId, class: 'practice-help' }, field.placeholder));
    if (field.parse_kind) {
      const out = h('div', { class: 'practice-preview', 'aria-live': 'polite' });
      const update = () => {
        out.className = 'practice-preview'; out.replaceChildren();
        const value = control.value.trim();
        if (!value) return;
        const result = preview(field.parse_kind, value);
        if (!result.supported) return;
        if (result.valid) out.append('Read as ', h('code', {}, result.canonical));
        else { out.classList.add('practice-bad'); out.append(result.message); }
      };
      control.addEventListener('input', update);
      wrap.append(out);
    }
    form.append(wrap);
  }
  const submit = h('button', { type: 'submit', class: 'button primary' }, 'Check');
  const clear = h('button', { type: 'button', class: 'button' }, 'Clear');
  form.append(h('div', { class: 'practice-actions' }, submit, clear), status);
  form.addEventListener('submit', event => {
    event.preventDefault();
    const values = Object.fromEntries(Object.entries(controls).map(([key, node]) => [key, node.value]));
    const result = check(spec, values);
    status.className = 'practice-feedback practice-' + result.status;
    const labels = { correct: 'Correct', incorrect: 'Not yet', invalid: 'Check the format', indeterminate: 'Not checked' };
    status.replaceChildren(h('strong', {}, labels[result.status] ?? result.status), ' ', result.message);
    if (result.scope && result.status !== 'invalid') status.append(h('small', { class: 'practice-scope' }, result.scope));
    status.focus({ preventScroll: true });
  });
  clear.addEventListener('click', () => {
    for (const node of Object.values(controls)) node.value = '';
    form.querySelectorAll('.practice-preview').forEach(node => { node.replaceChildren(); node.className = 'practice-preview'; });
    status.className = 'practice-feedback'; status.replaceChildren();
    Object.values(controls)[0]?.focus();
  });
  return form;
}

export function enhance(root) {
  ensureStyle();
  for (const host of root.querySelectorAll('.fence-plugin[data-fence="answer"]')) {
    if (host.dataset.ready) continue;
    host.dataset.ready = '1';
    try {
      const spec = parseSpec(host.dataset.source);
      host.replaceChildren(build(spec));
      host.classList.add('practice-host');
    } catch (error) {
      console.warn('Answer block unavailable:', error.message);
    }
  }
}
