// A visual's three short notes are learner-authored evidence, not graded answers.
export const visualWorkKey = (chapterId, number) => `visual-work-${chapterId}-${number}`;
export const emptyVisualWork = () => ({version:1,prediction:'',observation:'',explanation:''});

export function validVisualWork(key, raw) {
  if (!(/^(?:visual-work-(?:0[1-9]|1[0-9]|2[0-8])-[1-3]|visual-work-(?:02|04|08|11|17|18|19|20|21|26|27|28)-4|visual-work-(?:17|27)-5)$/.test(key)) || typeof raw !== 'string' || raw.length > 6200) return false;
  let value;
  try { value=JSON.parse(raw); } catch { return false; }
  if (!value || Array.isArray(value) || typeof value !== 'object') return false;
  if (Object.keys(value).sort().join(',') !== 'explanation,observation,prediction,version' || value.version !== 1) return false;
  return ['prediction','observation','explanation'].every(field => typeof value[field] === 'string' && value[field].length <= 2000);
}

export function readVisualWork(key, raw) {
  return validVisualWork(key,raw) ? JSON.parse(raw) : emptyVisualWork();
}
