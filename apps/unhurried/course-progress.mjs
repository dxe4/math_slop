// A bookmark suggestion from explicit notebook marks; opening a lesson never
// marks it explored. Shared lessons keep the same marks across course routes.
export function courseResume(articleIds, completed) {
  const marked = new Set(completed);
  const index = articleIds.findIndex(id => !marked.has(id));
  return { articleId: index < 0 ? null : articleIds[index], index,
    explored: articleIds.filter(id => marked.has(id)).length };
}
