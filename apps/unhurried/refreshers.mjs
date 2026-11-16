export const normalizePrerequisite = value => String(value).trim().toLowerCase().replace(/\s+/g, ' ');

// Match editorially named prerequisites exactly. A graph of a function and a
// network graph, for example, must never be confused by substring matching.
export function matchedRefreshers(prerequisites, refreshers, limit = 3) {
  const result = [];
  const seen = new Set();
  for (const prerequisite of prerequisites) {
    const key = normalizePrerequisite(prerequisite);
    for (const refresher of refreshers) {
      if (seen.has(refresher.id) || !refresher.matches.some(match => normalizePrerequisite(match) === key)) continue;
      seen.add(refresher.id);
      result.push(refresher);
    }
  }
  return result.slice(0, limit);
}
