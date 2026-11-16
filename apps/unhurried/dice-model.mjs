export const DICE_EVENTS = Object.freeze({sum:'The total equals the target',greater:'Blue is greater than yellow',doubles:'Both dice show the same face'});
export const DICE_CLUES = Object.freeze({none:'No clue: keep all pairs',even:'The blue die is even',six:'At least one die shows six'});

export function evaluateDice(state={}) {
  if (!state || typeof state!=='object' || Array.isArray(state)) throw new TypeError('Choose dice controls as an object.');
  const {event='sum',total=7,clue='none'}=state;
  if (!Object.hasOwn(DICE_EVENTS,event) || !Object.hasOwn(DICE_CLUES,clue)) throw new RangeError('Choose a known dice event and clue.');
  if (!Number.isInteger(total) || total<2 || total>12) throw new RangeError('Choose an integer target total from 2 to 12.');
  const outcomes=[];
  for(let blue=1;blue<=6;blue++) for(let yellow=1;yellow<=6;yellow++) {
    const allowed=clue==='none' || clue==='even' && blue%2===0 || clue==='six' && (blue===6 || yellow===6);
    const matches=event==='sum' ? blue+yellow===total : event==='greater' ? blue>yellow : blue===yellow;
    outcomes.push({blue,yellow,sum:blue+yellow,allowed,matches});
  }
  const denominator=outcomes.filter(outcome=>outcome.allowed).length;
  const numerator=outcomes.filter(outcome=>outcome.allowed && outcome.matches).length;
  let a=numerator,b=denominator;
  while(b) [a,b]=[b,a%b];
  return {event,total,clue,outcomes,numerator,denominator,fraction:`${numerator/a}/${denominator/a}`};
}

export function diceSummary(result) {
  const event=result.event==='sum' ? `total ${result.total}` : result.event==='greater' ? 'blue greater than yellow' : 'matching faces';
  const clue=result.clue==='none' ? 'With no clue' : result.clue==='even' ? 'Given that blue is even' : 'Given that at least one die shows six';
  const count=result.numerator===1 ? '1 pair matches' : `${result.numerator} pairs match`;
  const ratio=`${result.numerator}/${result.denominator}`;
  const probability=ratio===result.fraction ? ratio : `${ratio} = ${result.fraction}`;
  return `${clue}, ${result.denominator} ordered pairs remain. ${count} “${event}”. Probability: ${probability}.`;
}
