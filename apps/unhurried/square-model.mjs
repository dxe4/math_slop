// Destinations of original corners 1–4, clockwise from the top left.
// Every product applies its right-hand move first. F is a fixed vertical mirror.
const identity = [1, 2, 3, 4];
const rotation = [2, 3, 4, 1];
const reflection = [2, 1, 4, 3];
const compose = (after, before) => before.map(position => after[position - 1]);
const equal = (a, b) => a.every((position, i) => position === b[i]);
const powers = [identity];
for (let i = 1; i < 4; i++) powers.push(compose(rotation, powers[i - 1]));

export const SQUARE_NAMES = Object.freeze(['E', 'R', 'R²', 'R³', 'F', 'FR', 'FR²', 'FR³']);
const moves = Object.fromEntries(SQUARE_NAMES.map((name, i) =>
  [name, Object.freeze(i < 4 ? powers[i] : compose(reflection, powers[i - 4]))]));
export const SQUARE_OPTIONS = Object.freeze([
  ['E', 'E — do nothing'], ['R', 'R — clockwise quarter-turn'],
  ['R²', 'R² — half-turn'], ['R³', 'R³ — counterclockwise quarter-turn'],
  ['F', 'F — fixed vertical flip'], ['FR', 'FR — diagonal flip fixing corners 1 and 3'],
  ['FR²', 'FR² — horizontal flip'], ['FR³', 'FR³ — diagonal flip fixing corners 2 and 4'],
].map(([value, label]) => Object.freeze({value, label})));
export const SQUARE_DEFAULTS = Object.freeze({first:'R', second:'F', order:'first-second'});

export function squareDestinations(name) {
  if (typeof name !== 'string' || !Object.hasOwn(moves, name)) throw new RangeError('Choose one of the eight square moves.');
  return [...moves[name]];
}

export function composeSquareMoves(after, before) {
  const result = compose(squareDestinations(after), squareDestinations(before));
  const name = SQUARE_NAMES.find(name => equal(moves[name], result));
  if (!name) throw new Error('A square composition left the eight supported moves.');
  return name;
}

export function squareOrder(name) {
  const move = squareDestinations(name);
  let result = identity;
  for (let k = 1; k <= 4; k++) {
    result = compose(move, result);
    if (equal(result, identity)) return k;
  }
  throw new Error('A square move has no return within four repeats.');
}

export function squareInverse(name) {
  squareDestinations(name);
  return SQUARE_NAMES.find(candidate => composeSquareMoves(candidate, name) === 'E');
}

export function evaluateSquare(state = {}) {
  if (!state || typeof state !== 'object' || Array.isArray(state)) throw new TypeError('Square controls must be an object.');
  const {first = 'R', second = 'F', order = 'first-second'} = state;
  squareDestinations(first); squareDestinations(second);
  if (!['first-second', 'second-first'].includes(order)) throw new RangeError('Choose an application order.');
  const [a, b] = order === 'first-second' ? [first, second] : [second, first];
  const product = composeSquareMoves(b, a), reverseProduct = composeSquareMoves(a, b);
  return {first:a, second:b, product, reverseProduct,
    firstDestinations:squareDestinations(a), destinations:squareDestinations(product),
    reverseDestinations:squareDestinations(reverseProduct), same:product === reverseProduct,
    inverse:squareInverse(product), order:squareOrder(product)};
}
