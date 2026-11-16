import {squareDestinations} from './square-model.mjs';

const positions = ['top left', 'top right', 'bottom right', 'bottom left'];
const labels = {E:'Do nothing', R:'Quarter-turn', 'R²':'Half-turn', F:'Vertical flip'};
export const squareMoveLabel = name => labels[name] || name;

export function squareSummary(result) {
  const comparison = result.same ? 'The two orders give the same result for all four corners.'
    : 'The two orders give different labelled squares.';
  return `${comparison} Corner 1 goes to ${positions[result.firstDestinations[0] - 1]} after the first move, then ${positions[result.destinations[0] - 1]}. In the reverse order it ends at ${positions[result.reverseDestinations[0] - 1]}.`;
}

function diagram(destinations, title, id) {
  // Invert a destination list to say which original label occupies each slot.
  const occupants = [1,2,3,4].map(position => destinations.indexOf(position) + 1);
  const slots = [[30,35],[150,35],[150,155],[30,155]];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 190" width="180" height="190" role="img" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">${title}</title><desc id="${id}-desc">Clockwise from top left, the labels are ${occupants.join(', ')}. Original corner 1 has a double outline.</desc><path d="M30 35h120v120H30z" fill="#edf1e6" stroke="#236b5a" stroke-width="2"/><path d="M90 13v165" stroke="#7b786c" stroke-width="1" stroke-dasharray="4 4"/>${slots.map(([x,y],i) => `<circle cx="${x}" cy="${y}" r="18" fill="#f8f6ef" stroke="#236b5a" stroke-width="${occupants[i] === 1 ? 2 : 1}"/>${occupants[i] === 1 ? `<circle cx="${x}" cy="${y}" r="22" fill="none" stroke="#236b5a" stroke-width="2"/>` : ''}<text x="${x}" y="${y+7}" text-anchor="middle" font-size="22" fill="#25362e">${occupants[i]}</text>`).join('')}</svg>`;
}

export function squareComparison(result, prefix) {
  if (!/^[a-z][a-z0-9-]*$/.test(prefix)) throw new Error('Invalid square diagram identifier.');
  const captions = ['Before either move', `${squareMoveLabel(result.first)}, then ${squareMoveLabel(result.second).toLowerCase()}`,
    `${squareMoveLabel(result.second)}, then ${squareMoveLabel(result.first).toLowerCase()}`];
  const lists = [squareDestinations('E'), result.destinations, result.reverseDestinations];
  return `<div class="square-comparison">${captions.map((caption,i) => `<figure>${diagram(lists[i],caption,`${prefix}-${i}`)}<figcaption>${caption}</figcaption></figure>`).join('')}</div><p class="square-key">The dashed line stays vertical. The double outline follows original corner 1. A diagram shows the labels occupying the final positions.</p>`;
}

export function squareTraceTable(result) {
  return `<table class="square-trace"><caption>Destinations of each original corner. Positions 1–4 run clockwise from top left. “After both” uses the selected order; “Reverse” starts again and swaps it.</caption><thead><tr><th scope="col">Corner</th><th scope="col">After first</th><th scope="col">After both</th><th scope="col">Reverse</th></tr></thead><tbody>${[1,2,3,4].map((corner,i) => `<tr><th scope="row">${corner}</th><td>${result.firstDestinations[i]}</td><td>${result.destinations[i]}</td><td>${result.reverseDestinations[i]}</td></tr>`).join('')}</tbody></table>`;
}

export function squareWorkedExample(result) {
  return `<div data-square-fallback><p><strong>The original worked setting: quarter-turn, then vertical flip.</strong> ${squareSummary(result)}</p>${squareComparison(result,'square-worked')}${squareTraceTable(result)}</div>`;
}
