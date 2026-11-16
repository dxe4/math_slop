// Markdown (with maths) for short authored strings, plus an in-memory answer store.
// Both degrade quietly: no markdown renderer -> plain text; no storage -> memory only.
let renderer = null;
export async function markdownHtml(text) {
  try {
    renderer ??= (await import('../../md.js')).createRenderer();
    return renderer.render(String(text));
  } catch {
    return '<p>' + String(text).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c])) + '</p>';
  }
}
/** A div whose content is the rendered Markdown (filled asynchronously). */
export function markdown(text, className = '') {
  const node = document.createElement('div');
  node.className = ('lucent-md ' + className).trim();
  const plain = String(text).replace(/[\\$]/g, '');
  node.textContent = plain;
  markdownHtml(text).then(html => { node.innerHTML = html; });
  return node;
}
// No personal data is saved: answers and notes last only while the page is open.
const memory = new Map();
export const store = {
  get(key) { return memory.has(key) ? structuredClone(memory.get(key)) : null; },
  set(key, value) { memory.set(key, structuredClone(value)); },
};
