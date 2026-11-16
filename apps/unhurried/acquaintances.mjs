import { guestPairs, evaluateAcquaintances } from './acquaintance-model.mjs';

let nextId = 0;
const initialConnections = ['A-B', 'B-C', 'C-D'];
const namesList = new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' });

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function diagram(result, prefix) {
  const node = (tag, attributes = {}, text) => {
    const value = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [key, attr] of Object.entries(attributes)) value.setAttribute(key, String(attr));
    if (text !== undefined) value.textContent = text;
    return value;
  };
  const svg = node('svg', { viewBox: '0 0 340 340', role: 'img',
    'aria-labelledby': `${prefix}-title ${prefix}-description` });
  svg.append(node('title', { id: `${prefix}-title` }, 'Your dinner-party network'),
    node('desc', { id: `${prefix}-description` },
      `A line means two guests know each other. Letters name guests; numbers count their acquaintances. ${result.edges.length} connections. `
      + result.guests.map(({ name, degree }) => `${name} knows ${degree}`).join('; ') + '.'));
  const positions = new Map(result.guests.map(({ name }, i) => {
    const angle = i * 2 * Math.PI / result.guests.length - Math.PI / 2;
    return [name, { x: 170 + 110 * Math.cos(angle), y: 170 + 110 * Math.sin(angle) }];
  }));
  for (const { a, b } of result.edges) {
    const from = positions.get(a), to = positions.get(b);
    svg.append(node('line', { x1: from.x, y1: from.y, x2: to.x, y2: to.y,
      class: 'acquaintance-edge' }));
  }
  for (const { name, degree } of result.guests) {
    const { x, y } = positions.get(name);
    svg.append(node('circle', { cx: x, cy: y, r: 24, class: 'acquaintance-guest' }),
      node('text', { x, y: y - 3, 'text-anchor': 'middle', class: 'acquaintance-name' }, name),
      node('text', { x, y: y + 15, 'text-anchor': 'middle', class: 'acquaintance-degree' }, String(degree)));
  }
  return svg;
}

export function mountAcquaintanceBuilder(host) {
  if (host.dataset.acquaintanceMounted === 'true') return;
  const prefix = `acquaintance-${++nextId}`;
  let count = 5, connections = new Set(initialConnections);
  const workshop = element('div', 'acquaintance-workshop');
  const label = element('label', 'acquaintance-count-label', 'Guests at the table');
  const select = element('select');
  select.id = `${prefix}-count`;
  select.dataset.guestCount = '';
  label.htmlFor = select.id;
  for (let n = 2; n <= 6; n++) {
    const option = element('option', '', `${n} guests`);
    option.value = String(n);
    select.append(option);
  }
  select.value = String(count);
  const choices = element('fieldset');
  choices.append(element('legend', '', 'Who knows whom?'));
  const pairs = element('div', 'acquaintance-pairs');
  choices.append(pairs);
  const actions = element('div', 'acquaintance-actions');
  const clear = element('button', 'button secondary', 'Clear connections');
  const all = element('button', 'button secondary', 'Connect everyone');
  const reset = element('button', 'text-button', 'Start over');
  for (const button of [clear, all, reset]) button.type = 'button';
  clear.dataset.acquaintanceClear = '';
  all.dataset.acquaintanceAll = '';
  reset.dataset.acquaintanceReset = '';
  actions.append(clear, all, reset);
  const status = element('p', 'acquaintance-status');
  status.dataset.acquaintanceStatus = '';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.setAttribute('aria-atomic', 'true');
  const output = element('div', 'acquaintance-output');
  const figure = element('div', 'acquaintance-figure');
  const table = element('table', 'acquaintance-table');
  table.append(element('caption', '', 'Acquaintances within this group'));
  const head = element('thead'), headings = element('tr');
  for (const text of ['Guest', 'Acquaintances']) {
    const th = element('th', '', text); th.scope = 'col'; headings.append(th);
  }
  head.append(headings);
  const body = element('tbody');
  table.append(head, body);
  output.append(figure, table);
  workshop.append(label, select, choices, actions, status, output);

  function renderChoices() {
    pairs.replaceChildren();
    for (const { id, a, b } of guestPairs(count)) {
      const pairLabel = element('label', 'acquaintance-pair');
      const input = element('input');
      input.type = 'checkbox';
      input.value = id;
      input.checked = connections.has(id);
      input.addEventListener('change', () => {
        if (input.checked) connections.add(id); else connections.delete(id);
        renderResult();
      });
      pairLabel.append(input, element('span', '', `${a} and ${b}`));
      pairs.append(pairLabel);
    }
  }
  function renderResult() {
    const result = evaluateAcquaintances(count, [...connections]);
    figure.replaceChildren(diagram(result, prefix), element('p', 'acquaintance-key',
      'Letters name guests; numbers count their acquaintances. A line means two guests know each other.'));
    body.replaceChildren();
    for (const { name, degree } of result.guests) {
      const row = element('tr'); row.dataset.guest = name;
      const th = element('th', '', name); th.scope = 'row';
      row.append(th, element('td', '', String(degree))); body.append(row);
    }
    status.textContent = result.repeated.map(({ degree, names }) =>
      `${namesList.format(names)} each know ${degree} ${degree === 1 ? 'guest' : 'guests'}.`).join(' ');
    for (const input of pairs.querySelectorAll('input')) input.checked = connections.has(input.value);
  }
  select.addEventListener('change', () => {
    count = Number(select.value);
    const allowed = new Set(guestPairs(count).map(pair => pair.id));
    connections = new Set([...connections].filter(id => allowed.has(id)));
    renderChoices(); renderResult();
  });
  clear.addEventListener('click', () => { connections.clear(); renderResult(); });
  all.addEventListener('click', () => {
    connections = new Set(guestPairs(count).map(pair => pair.id)); renderResult();
  });
  reset.addEventListener('click', () => {
    count = 5; select.value = '5'; connections = new Set(initialConnections);
    renderChoices(); renderResult();
  });
  // Only hide the static example once the complete interactive result exists.
  renderChoices(); renderResult();
  host.append(workshop);
  host.querySelector('[data-acquaintance-fallback]').hidden = true;
  host.dataset.acquaintanceMounted = 'true';
}
