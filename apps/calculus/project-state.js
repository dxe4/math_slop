import { projects } from './projects.js';

export const projectById = id => projects.find(project => project.id === id);
export const draftKey = id => `project-draft-${id}`;
export const reviewKey = id => `project-review-${id}`;
export const reviewChoices = ['not-yet', 'developing', 'supported'];
export const emptyDraft = () => ({version:1, stages:{}});
export const emptyReview = () => ({version:1, criteria:{}});

const plainObject = value => value !== null && typeof value === 'object' && !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype;
const onlyKeys = (value, allowed) => Object.keys(value).every(key => allowed.includes(key));

export function validProjectValue(key, raw) {
  if(typeof raw !== 'string') return false;
  const draft = key.startsWith('project-draft-');
  const review = key.startsWith('project-review-');
  if(!draft && !review || raw.length > (draft ? 32000 : 4000)) return false;
  const project = projectById(key.slice((draft ? 'project-draft-' : 'project-review-').length));
  if(!project) return false;
  let value;
  try { value = JSON.parse(raw); } catch { return false; }
  if(!plainObject(value) || value.version !== 1 || !onlyKeys(value,['version',draft ? 'stages' : 'criteria'])) return false;
  const entries = value[draft ? 'stages' : 'criteria'];
  if(!plainObject(entries)) return false;
  const known = new Set((draft ? project.stages : project.assessment).map(item => item.id));
  return Object.entries(entries).every(([id,item]) => {
    if(!known.has(id)) return false;
    return draft
      ? plainObject(item) && onlyKeys(item,['text','complete']) && typeof item.text === 'string' && item.text.length <= 8000 && typeof item.complete === 'boolean'
      : reviewChoices.includes(item);
  });
}

export function readProjectValue(key, raw) {
  return validProjectValue(key,raw) ? JSON.parse(raw) : key.startsWith('project-draft-') ? emptyDraft() : emptyReview();
}
