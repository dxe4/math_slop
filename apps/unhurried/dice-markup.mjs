import {diceSummary} from './dice-model.mjs';

export function diceTable(result) {
  return `<table class="dice-table"><caption>All 36 ordered outcomes. Blue die: rows. Yellow die: columns. Each cell shows the total. ✓ matches the event; · does not match; × excluded by the clue.</caption><thead><tr><th scope="col" class="dice-axes">Blue ↓<br>Yellow →</th>${[1,2,3,4,5,6].map(face=>`<th scope="col">${face}</th>`).join('')}</tr></thead><tbody>${[1,2,3,4,5,6].map(blue=>`<tr><th scope="row">${blue}</th>${result.outcomes.filter(outcome=>outcome.blue===blue).map(outcome=>{
    const state=!outcome.allowed ? 'excluded' : outcome.matches ? 'match' : 'other';
    const mark=state==='excluded'?'×':state==='match'?'✓':'·';
    const label=`Blue ${outcome.blue}, yellow ${outcome.yellow}, total ${outcome.sum}: ${state==='excluded'?'excluded by the clue':state==='match'?'kept, matches the event':'kept, does not match the event'}`;
    return `<td class="dice-cell ${state}" data-blue="${outcome.blue}" data-yellow="${outcome.yellow}" aria-label="${label}"><span>${outcome.sum}</span><span aria-hidden="true" class="dice-mark">${mark}</span></td>`;
  }).join('')}</tr>`).join('')}</tbody></table>`;
}

export function diceWorkedExample(result) {
  return `<div data-dice-fallback><p><strong>A worked setting.</strong> ${diceSummary(result)}</p>${diceTable(result)}</div>`;
}
