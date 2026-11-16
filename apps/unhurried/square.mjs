import {evaluateSquare, SQUARE_DEFAULTS} from './square-model.mjs';
import {squareComparison, squareTraceTable, squareSummary} from './square-markup.mjs';

let nextId = 0;
export function mountSquareExplorer(host) {
  if (host.dataset.squareMounted === 'true') return;
  const prefix = `square-live-${++nextId}`;
  const element = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  const workshop = element('div', '', 'square-workshop');
  const instructions = element('p', 'Choose two moves and predict where corner 1 will finish. Compare both orders, or swap them. Try a half-turn with the vertical flip for the question below.');
  instructions.id = `${prefix}-instructions`;
  const controls = element('fieldset', '', 'square-controls');
  controls.append(element('legend', 'Try the two orders'));
  controls.setAttribute('aria-describedby', instructions.id);
  const selects = ['first','second'].map((name,i) => {
    const label = element('label');
    label.append(element('span', i === 0 ? 'First move' : 'Then do'));
    const select = element('select'); select.dataset.squareControl = name;
    for (const [value,text] of [['R','Quarter-turn clockwise (R)'],['F','Vertical flip (F)'],['R²','Half-turn (R²)'],['E','Do nothing (E)']]) select.add(new Option(text,value));
    select.value = SQUARE_DEFAULTS[name]; label.append(select); controls.append(label);
    return select;
  });
  const swap = element('button', 'Swap the moves', 'button secondary');
  swap.type = 'button'; swap.dataset.squareSwap = '';
  const reset = element('button', 'Restore turn, then flip', 'button secondary');
  reset.type = 'button'; reset.dataset.squareReset = '';
  const actions = element('div', '', 'square-actions'); actions.append(swap,reset);
  const status = element('p', '', 'square-summary'); status.setAttribute('role','status');
  const output = element('div', '', 'square-output');
  workshop.append(instructions,controls,actions,status,output);
  const update = () => {
    const result = evaluateSquare({first:selects[0].value,second:selects[1].value});
    status.textContent = squareSummary(result);
    output.innerHTML = squareComparison(result,prefix) + squareTraceTable(result);
  };
  selects.forEach(select => select.addEventListener('change',update));
  swap.addEventListener('click', () => {
    [selects[0].value,selects[1].value] = [selects[1].value,selects[0].value]; update();
  });
  reset.addEventListener('click', () => {
    selects.forEach((select,i) => { select.value = i === 0 ? 'R' : 'F'; }); update();
  });
  update();
  host.append(workshop);
  host.querySelector('[data-square-fallback]').hidden = true;
  host.dataset.squareMounted = 'true';
}
