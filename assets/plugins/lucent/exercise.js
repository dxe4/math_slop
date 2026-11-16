// "exercise" fences: one practice item as strict JSON.
//   {"id","type":"choice"|"numeric"|"written","prompt", options|answer+tolerance|rubric,
//    "hints":[...], "solution", "transfer", "transferSolution", "feedback*"}
// Answers are checked in the browser (choice, numeric); written work is self-assessed.
import { el } from './board.js';
import { markdown, store } from './rich.js';
import { parseExpression, validate, compile } from './expr.js';

export function parseExercise(source) {
  let value;
  try { value = JSON.parse(source); } catch { throw new Error('Exercise JSON could not be read.'); }
  if (!value || typeof value !== 'object' || Array.isArray(value) || !/^[A-Za-z][A-Za-z0-9_-]{0,79}$/.test(value.id || '') || !['numeric', 'choice', 'written'].includes(value.type) || typeof value.prompt !== 'string' || !value.prompt.trim()) throw new Error('Exercise needs a unique id, a supported type, and a question.');
  const strings = list => Array.isArray(list) && list.length <= 8 && list.every(item => typeof item === 'string');
  if (value.hints !== undefined && !strings(value.hints)) throw new Error('Hints must be a short list of text.');
  if (value.type === 'numeric' && (typeof value.answer !== 'number' || !Number.isFinite(value.answer) || (value.tolerance !== undefined && (typeof value.tolerance !== 'number' || value.tolerance < 0)))) throw new Error('Numeric exercises need a finite answer and nonnegative tolerance.');
  if (value.type === 'choice' && (!Array.isArray(value.options) || value.options.length < 2 || value.options.length > 8 || value.options.filter(o => o?.correct === true).length !== 1 || value.options.some(o => typeof o?.label !== 'string' || !o.label.trim()))) throw new Error('Choice exercises need 2–8 labelled options and one correct option.');
  if (value.type === 'written' && (!strings(value.rubric) || !value.rubric?.length)) throw new Error('Written exercises need a marking rubric.');
  for (const key of ['feedback', 'feedbackCorrect', 'feedbackIncorrect', 'solution', 'transfer', 'transferSolution']) if (value[key] !== undefined && typeof value[key] !== 'string') throw new Error(`${key} must be text.`);
  if (value.transferSolution && !value.transfer) throw new Error('A transfer solution needs a changed problem.');
  return value;
}

/** Evaluate a constant expression such as "1/3" or "sqrt(2)-1". */
export function parseConstant(text) {
  if (!text.trim() || text.length > 256) throw new Error('answer must contain 1..256 characters');
  const ast = parseExpression(text.replace(/−/g, '-').replace(/×/g, '*').replace(/√/g, 'sqrt').replace(/,/g, ''));
  validate(ast, { vars: new Set(), fns: new Set() });
  const value = compile(ast, () => NaN)(undefined, undefined, {});
  if (!Number.isFinite(value)) throw new Error('the expression is undefined');
  return value;
}

let serial = 0;
export function createExercise(source) {
  const ex = parseExercise(source), id = 'lucent-ex-' + (++serial);
  const saved = store.get('exercise:' + ex.id) ?? {};
  const state = { response: saved.response ?? '', rubric: saved.rubric ?? [], hints: Math.min(saved.hints ?? 0, ex.hints?.length ?? 0), attempts: saved.attempts ?? 0, transfer: saved.transfer ?? '' };
  const save = () => store.set('exercise:' + ex.id, state);
  const block = el('section', 'lucent-block lucent-exercise'); block.dataset.exercise = ex.id;
  block.append(el('h4', '', 'Try it before revealing the answer'), markdown(ex.prompt, 'lucent-prompt'));
  const form = el('form'); form.addEventListener('submit', event => { event.preventDefault(); check.click(); });
  const feedback = el('div', 'lucent-feedback'); feedback.setAttribute('role', 'status');
  const say = (text, kind = '') => { feedback.replaceChildren(markdown(text)); feedback.dataset.state = kind; };
  let input;
  if (ex.type === 'choice') {
    const set = el('fieldset'); set.style.border = '0'; set.style.padding = '0'; set.style.margin = '0';
    set.append(Object.assign(el('legend', '', 'Choose one answer'), { className: 'lucent-note' }));
    ex.options.forEach((option, index) => {
      const label = el('label', 'lucent-choice'), radio = el('input'); radio.type = 'radio'; radio.name = id; radio.value = String(index);
      radio.checked = state.response === String(index);
      radio.addEventListener('change', () => { state.response = radio.value; save(); });
      label.append(radio, markdown(option.label)); set.append(label);
    });
    form.append(set);
  } else if (ex.type === 'numeric') {
    const label = el('label', '', 'Your numerical answer'); input = el('input'); input.type = 'text'; input.inputMode = 'decimal'; input.id = id; label.htmlFor = id; input.value = state.response;
    input.addEventListener('input', () => { state.response = input.value; save(); });
    form.append(label, input, el('p', 'lucent-note', ex.tolerance ? `Enter a number or constant expression such as 20/1. Accepted absolute error: at most ${ex.tolerance}.` : 'Enter a number or constant expression such as 20/1. Answers are compared numerically with a small rounding allowance.'));
  } else {
    const label = el('label', '', 'Your reasoning or proof'); input = el('textarea'); input.id = id; label.htmlFor = id; input.value = state.response; input.placeholder = 'State the hypotheses, make each step explicit, and check your conclusion.';
    input.addEventListener('input', () => { state.response = input.value; save(); });
    const rubric = el('fieldset', 'lucent-rubric'); rubric.append(el('legend', '', 'Self-check rubric — you decide whether your argument meets each criterion'));
    ex.rubric.forEach((criterion, index) => {
      const row = el('label', 'lucent-choice'), box = el('input'); box.type = 'checkbox'; box.checked = state.rubric[index] === true;
      box.addEventListener('change', () => { state.rubric[index] = box.checked; save(); });
      row.append(box, markdown(criterion)); rubric.append(row);
    });
    form.append(label, input, rubric);
  }
  let transfer = null;
  const check = el('button', 'lucent-button primary', ex.type === 'written' ? 'Record self-check' : 'Check answer'); check.type = 'submit';
  check.addEventListener('click', event => {
    event.preventDefault();
    if (!String(state.response).trim()) return say('Write or select an answer before checking.', 'error');
    if (ex.type === 'choice') {
      const option = ex.options[Number(state.response)]; if (!option) return say('Choose an answer before checking.', 'error');
      say(`${option.correct ? '**That choice works.**' : '**Try another choice.**'} ${option.feedback || (option.correct ? ex.feedbackCorrect : ex.feedbackIncorrect) || ''}`, option.correct ? 'success' : 'error');
    } else if (ex.type === 'numeric') {
      let answer; try { answer = parseConstant(state.response); } catch (error) { return say(`Could not read that constant expression: ${error.message}`, 'error'); }
      const allowed = ex.tolerance || 1e-10 * Math.max(1, Math.abs(ex.answer)), correct = Math.abs(answer - ex.answer) <= allowed;
      say(correct ? `**Numerical check passed.** ${ex.feedbackCorrect || ex.feedback || 'Explain why your method applies.'}` : `**Numerical check did not pass.** ${ex.feedbackIncorrect || 'Recheck the calculation and its assumptions, then try again.'}`, correct ? 'success' : 'error');
    } else say(`**Self-review recorded.** Compare the argument with each criterion and revise it; this check does not certify a proof. ${ex.feedback || ''}`, 'success');
    state.attempts++; save();
    if (transfer) transfer.hidden = false;
  });
  const actions = el('div', 'lucent-actions'); actions.append(check);
  form.append(actions);
  block.append(form, feedback);
  // hints
  if (ex.hints?.length) {
    const hints = el('ol', 'lucent-hints'), more = el('button', 'lucent-button', 'Next hint'); more.type = 'button';
    const show = () => { hints.replaceChildren(...ex.hints.slice(0, state.hints).map(h => { const li = el('li'); li.append(markdown(h)); return li; })); hints.hidden = !state.hints; more.hidden = state.hints >= ex.hints.length; };
    more.addEventListener('click', () => { state.hints++; save(); show(); });
    show(); block.append(hints, more);
  }
  if (ex.solution) {
    const details = el('details', 'lucent-details'); details.append(el('summary', '', 'Compare with a worked solution'), markdown(ex.solution)); block.append(details);
  }
  if (ex.transfer) {
    transfer = el('div', 'lucent-details'); transfer.hidden = state.attempts === 0;
    transfer.append(el('h4', '', 'Try a changed problem'), markdown(ex.transfer));
    const area = el('textarea'); area.value = state.transfer; area.setAttribute('aria-label', 'Your transfer argument');
    area.addEventListener('input', () => { state.transfer = area.value; save(); });
    transfer.append(area);
    if (ex.transferSolution) {
      const details = el('details', 'lucent-details'); details.append(el('summary', '', 'Compare the changed problem with a model'), markdown(ex.transferSolution)); transfer.append(details);
    }
    block.append(transfer);
  }
  return block;
}
