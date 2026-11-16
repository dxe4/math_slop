export const VOTING_RANKINGS = Object.freeze(['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']);
export const VOTING_NAMES = Object.freeze(['Alex', 'Blair', 'Casey', 'Drew']);
export const VOTING_PAIRS = Object.freeze(['AB', 'BC', 'AC']);
export const VOTING_DEFAULTS = Object.freeze({ ballots: Object.freeze(['ABC', 'BCA', 'CAB']), firstPair: 'AB' });

export function evaluateVoting(state = {}) {
  if (!state || typeof state !== 'object' || Array.isArray(state)) throw new TypeError('Expected voting settings.');
  const ballots = state.ballots === undefined ? VOTING_DEFAULTS.ballots : state.ballots;
  const firstPair = state.firstPair === undefined ? VOTING_DEFAULTS.firstPair : state.firstPair;
  if (!Array.isArray(ballots) || ![3, 4].includes(ballots.length)
    || Array.from(ballots).some(ranking => !VOTING_RANKINGS.includes(ranking)))
    throw new RangeError('Each of three or four friends must rank A, B and C exactly once.');
  if (!VOTING_PAIRS.includes(firstPair)) throw new RangeError('Choose AB, BC or AC for the first comparison.');
  const voters = ballots.map((ranking, i) => ({ name: VOTING_NAMES[i], ranking }));
  const compare = (a, b) => {
    const forA = [], forB = [];
    for (const { name, ranking } of voters) (ranking.indexOf(a) < ranking.indexOf(b) ? forA : forB).push(name);
    return { a, b, forA, forB, winner: forA.length === forB.length ? null : forA.length > forB.length ? a : b };
  };
  const pairs = VOTING_PAIRS.map(([a, b]) => compare(a, b));
  const wins = [...'ABC'].map(film => pairs.filter(pair => pair.winner === film).length);
  const strictWinner = [...'ABC'].find((_, i) => wins[i] === 2) || null;
  const cycle = wins.every(count => count === 1);
  const first = compare(...firstPair);
  const remaining = [...'ABC'].find(film => !firstPair.includes(film));
  const final = first.winner ? compare(first.winner, remaining) : null;
  const agenda = { first, final, winner: final?.winner || null,
    tiedAt: !first.winner ? 'first' : !final.winner ? 'final' : null };
  return { voters, pairs, cycle, strictWinner, firstPair, agenda };
}

export function votingSummary(result) {
  return `${result.voters.length} friends. ${result.cycle ? 'A strict majority cycle is present.' : 'No strict majority cycle.'} `
    + (result.strictWinner ? `${result.strictWinner} beats both other films.` : 'No film beats both others.') + ' '
    + (result.agenda.tiedAt ? 'The knockout stops at a tie; no film is chosen.' : `This knockout order chooses ${result.agenda.winner}.`);
}
