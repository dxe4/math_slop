// Reading routes to existing written problems. These references do not change
// the authored records, their lesson tags, displayed numbers, or saved work.
export const relatedPractice = Object.freeze({
  '04': Object.freeze({
    3: Object.freeze([{number:38, purpose:'Prove one reciprocal radius for every nearby input'}, {number:39, purpose:'Reject vacuous choices and disprove a false limit'}]),
    6: Object.freeze([{number:36, purpose:'Prove the greatest symmetric radius'}, {number:37, purpose:'Test equality and an interior counterexample'}]),
  }),
  '08': Object.freeze({
    2: Object.freeze([{number:36, purpose:'Prove both matching points despite a corner'}, {number:37, purpose:'Compare a corner, a jump, and change bounds'}]),
  }),
  '11': Object.freeze({
    2: Object.freeze([{number:35, purpose:'Compare continuity, accumulation derivatives, and assigned rates'}]),
    4: Object.freeze([{number:36, purpose:'Prove a flat endpoint composition directly'}]),
  }),
  '16': Object.freeze({
    5: Object.freeze([{number:34, purpose:'Choose and justify three convergence tests'}]),
  }),
  '17': Object.freeze({
    4: Object.freeze([{number:36, purpose:'Compare two uniform logarithm certificates'}, {number:37, purpose:'Separate a Taylor bound from actual error'}]),
  }),
  '21': Object.freeze({
    6: Object.freeze([{number:37, purpose:'Test tangent planes from actual zero-set geometry'}]),
  }),
  '26': Object.freeze({
    5: Object.freeze([{number:34, purpose:'Choose a boundary theorem, then calculate with each one'}, {number:36, purpose:'Audit open and complete flux boundaries'}, {number:37, purpose:'Check a vortex field on candidate surfaces'}, {number:38, purpose:'Use a valid replacement surface for a radial field'}]),
  }),
  '28': Object.freeze({
    5: Object.freeze([{number:37, purpose:'Find a smooth forcing missed by three grids'}, {number:38, purpose:'Prove the endpoint test and an interior error witness'}, {number:39, purpose:'Audit mixed refinement evidence'}]),
  }),
});

export const relatedPracticeFor = (chapterId, lesson) => relatedPractice[chapterId]?.[lesson] || [];

export function relatedLessonForProblem(chapterId, number) {
  for (const [lesson, entries] of Object.entries(relatedPractice[chapterId] || {})) {
    if (entries.some(entry => entry.number === number)) return Number(lesson);
  }
  return null;
}
