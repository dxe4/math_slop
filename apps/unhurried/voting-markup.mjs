import { votingSummary } from './voting-model.mjs';

const tally = pair => pair.winner
  ? `${pair.winner} wins ${Math.max(pair.forA.length, pair.forB.length)}–${Math.min(pair.forA.length, pair.forB.length)}`
  : `Tie ${pair.forA.length}–${pair.forB.length}`;

export function votingTable(result) {
  return `<table class="voting-table"><caption>Every friend votes once in each head-to-head comparison.</caption><thead><tr><th scope="col">Films</th><th scope="col">Who prefers each?</th><th scope="col">Result</th></tr></thead><tbody>${result.pairs.map(pair => `<tr><th scope="row">${pair.a} against ${pair.b}</th><td><p><strong>${pair.a}: ${pair.forA.length}</strong><br>${pair.forA.join(', ') || 'Nobody'}</p><p><strong>${pair.b}: ${pair.forB.length}</strong><br>${pair.forB.join(', ') || 'Nobody'}</p></td><td>${tally(pair)}</td></tr>`).join('')}</tbody></table>`;
}

export function votingAgenda(result) {
  const { first, final, winner } = result.agenda;
  return `<div class="voting-agenda"><h4>Follow the knockout order</h4><ol><li>${first.a} against ${first.b}: ${tally(first)}.</li>${final ? `<li>${final.a} against ${final.b}: ${tally(final)}.</li>` : ''}</ol><p>${winner ? `This order chooses ${winner}.` : 'Stop here: a tied comparison has no winner to advance. This activity does not supply a tie-breaking rule.'}</p></div>`;
}

export function votingWorkedExample(result) {
  return `<div data-voting-fallback><h3>The original three friends</h3><p>This worked setting uses the original rankings and compares A against B first.</p><table><caption>Original rankings, from favourite to least favourite</caption><thead><tr><th scope="col">Friend</th><th scope="col">Ranking</th></tr></thead><tbody>${result.voters.map(({ name, ranking }) => `<tr><th scope="row">${name}</th><td>${[...ranking].join(', then ')}</td></tr>`).join('')}</tbody></table><p>${votingSummary(result)}</p>${votingTable(result)}${votingAgenda(result)}</div>`;
}
