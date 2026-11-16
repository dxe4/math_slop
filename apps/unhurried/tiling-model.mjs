export const TILING_PRESETS = {
  corners: [0,15],
  top: [0,3],
  isolated: [1,4,10,15],
  full: [],
};

export const squareName = index => `${'ABCD'[index % 4]}${Math.floor(index / 4) + 1}`;
export const squareColour = index => (Math.floor(index / 4) + index % 4) % 2 ? 'dark' : 'light';

export function evaluateBoard(removed) {
  if (!Array.isArray(removed) || removed.some(index => !Number.isInteger(index) || index < 0 || index > 15)
      || new Set(removed).size !== removed.length) throw new Error('Choose distinct squares from this four-by-four board');
  const missing = new Set(removed);
  const remaining = Array.from({length:16}, (_,index) => index).filter(index => !missing.has(index));
  const light = remaining.filter(index => squareColour(index) === 'light').length;
  const dark = remaining.length - light;
  const isolated = remaining.filter(index => {
    const row = Math.floor(index / 4), column = index % 4;
    const neighbours = [];
    if (column) neighbours.push(index - 1);
    if (column < 3) neighbours.push(index + 1);
    if (row) neighbours.push(index - 4);
    if (row < 3) neighbours.push(index + 4);
    return neighbours.every(neighbour => missing.has(neighbour));
  });
  return {light,dark,remaining:remaining.length,difference:light-dark,isolated};
}

export function boardExplanation(state) {
  if (!state.remaining) return 'All squares are removed; there is nothing left to cover.';
  if (state.difference) return `A tiling is impossible: ${state.light} light and ${state.dark} dark squares remain. Every domino needs one of each.`;
  if (state.isolated.length) return `The colours agree, but a tiling is impossible: ${state.isolated.map(squareName).join(', ')} ${state.isolated.length === 1 ? 'is isolated' : 'are isolated'}. No domino can cover an isolated square.`;
  return `The counts agree: ${state.light} light and ${state.dark} dark squares. This colour test alone does not decide whether the shape can be tiled.`;
}
