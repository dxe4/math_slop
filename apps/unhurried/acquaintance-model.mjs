const NAMES = ['A', 'B', 'C', 'D', 'E', 'F'];

export function guestPairs(count) {
  if (!Number.isInteger(count) || count < 2 || count > NAMES.length) {
    throw new RangeError('Choose between two and six guests.');
  }
  const pairs = [];
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      pairs.push({ id: `${NAMES[i]}-${NAMES[j]}`, a: NAMES[i], b: NAMES[j] });
    }
  }
  return pairs;
}

// Each checked pair is one mutual acquaintance, with no self-connections.
export function evaluateAcquaintances(count, connections = []) {
  const pairs = new Map(guestPairs(count).map(pair => [pair.id, pair]));
  if (!Array.isArray(connections) || connections.length > 15
      || connections.some(id => !pairs.has(id))) {
    throw new TypeError('Connections must be pairs of different guests in this group.');
  }
  const edges = [...new Set(connections)].map(id => pairs.get(id));
  const guests = NAMES.slice(0, count).map(name => ({ name, degree: 0 }));
  const byName = new Map(guests.map(guest => [guest.name, guest]));
  for (const { a, b } of edges) {
    byName.get(a).degree++;
    byName.get(b).degree++;
  }
  const groups = new Map();
  for (const { name, degree } of guests) {
    if (!groups.has(degree)) groups.set(degree, []);
    groups.get(degree).push(name);
  }
  return {
    guests,
    edges,
    repeated: [...groups].filter(([, names]) => names.length > 1)
      .map(([degree, names]) => ({ degree, names })),
  };
}
