import { VOTING_RANKINGS, VOTING_PAIRS, VOTING_NAMES, VOTING_DEFAULTS, evaluateVoting, votingSummary } from './voting-model.mjs';
import { votingTable, votingAgenda } from './voting-markup.mjs';

let nextId = 0;
export function mountVotingExplorer(host) {
  if (host.dataset.votingMounted === 'true') return;
  const prefix = `voting-${++nextId}`;
  const element = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  const workshop = element('div', '', 'voting-workshop');
  const heading = element('h3', 'Try a different set of rankings');
  const instructions = element('p', 'Each ranking goes from favourite to least favourite. Change one friend, predict a comparison, then check the counts. Every friend votes once per pair.');
  instructions.id = `${prefix}-instructions`;
  const controls = element('fieldset', '', 'voting-controls');
  controls.append(element('legend', 'The friends’ rankings'));
  controls.setAttribute('aria-describedby', instructions.id);
  const rankingLabels = [];
  const selects = VOTING_NAMES.map((name, i) => {
    const label = element('label');
    label.append(element('span', `${name}'s ranking`));
    const select = element('select');
    select.dataset.votingRank = String(i);
    for (const ranking of VOTING_RANKINGS) select.add(new Option([...ranking].join(', then '), ranking));
    select.value = VOTING_DEFAULTS.ballots[i] || 'ABC';
    label.append(select);
    rankingLabels.push(label);
    if (i < 3) controls.append(label);
    return select;
  });
  const includeLabel = element('label', '', 'voting-include');
  const include = element('input'); include.type = 'checkbox'; include.dataset.votingInclude = '';
  includeLabel.append(include, element('span', "Include Drew's vote"));
  const orderLabel = element('label', '', 'voting-order');
  orderLabel.append(element('span', 'First knockout comparison'));
  const order = element('select'); order.dataset.votingOrder = '';
  for (const pair of VOTING_PAIRS) order.add(new Option(`${pair[0]} against ${pair[1]}`, pair));
  order.value = VOTING_DEFAULTS.firstPair;
  orderLabel.append(order);
  const rule = element('p', 'The winner faces the remaining film. A tie stops this knockout; no tie-break is assumed.', 'voting-rule');
  const options = element('details', '', 'voting-options');
  options.append(element('summary', 'Add a friend or change the knockout'), includeLabel, rankingLabels[3], orderLabel, rule);
  const reset = element('button', 'Restore original friends', 'button secondary');
  reset.type = 'button'; reset.dataset.votingReset = '';
  const status = element('p', '', 'voting-summary'); status.setAttribute('role', 'status');
  const output = element('div', '', 'voting-output');
  workshop.append(heading, instructions, controls, options, reset, status, output);
  const update = () => {
    selects[3].disabled = !include.checked;
    const result = evaluateVoting({ ballots: selects.slice(0, include.checked ? 4 : 3).map(select => select.value), firstPair: order.value });
    status.textContent = votingSummary(result);
    output.innerHTML = votingTable(result) + votingAgenda(result);
  };
  for (const control of [...selects, include, order]) control.addEventListener('change', update);
  reset.addEventListener('click', () => {
    selects.forEach((select, i) => { select.value = VOTING_DEFAULTS.ballots[i] || 'ABC'; });
    include.checked = false; order.value = VOTING_DEFAULTS.firstPair; update();
  });
  update();
  host.append(workshop);
  host.querySelector('[data-voting-fallback]').hidden = true;
  host.dataset.votingMounted = 'true';
}
