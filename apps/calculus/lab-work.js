// Learner-authored experiment notes are local evidence, not automatically graded answers.
export const labWorkKey = chapterId => `lab-work-${chapterId}`;
export const emptyLabWork = () => ({version:1,prediction:'',observation:'',explanation:''});

export function validLabWork(key, raw) {
  if (!/^lab-work-(?:0[1-9]|1[0-9]|2[0-9]|30)$/.test(key) || typeof raw !== 'string' || raw.length > 6200) return false;
  let value;
  try { value=JSON.parse(raw); } catch { return false; }
  if (!value || Array.isArray(value) || typeof value !== 'object') return false;
  if (Object.keys(value).sort().join(',') !== 'explanation,observation,prediction,version' || value.version !== 1) return false;
  return ['prediction','observation','explanation'].every(field => typeof value[field] === 'string' && value[field].length <= 2000);
}

export function readLabWork(key, raw) {
  return validLabWork(key,raw) ? JSON.parse(raw) : emptyLabWork();
}
