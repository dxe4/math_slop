// Selected native work. This pure metadata does not read or write learner records.
// Existing handbook calendars, canonical banks and sampled-paper scopes are unchanged.
const freeze = value => {
  if (value && typeof value === 'object') {
    Object.values(value).forEach(freeze);
    Object.freeze(value);
  }
  return value;
};
const problems = (chapterId, ...numbers) => numbers.map(number => ({chapterId, number}));
const lesson = (chapterId, number, note = '') => ({kind: 'lesson', chapterId, number, note});
const visual = (chapterId, number = 1) => ({kind: 'visual', chapterId, number});
const problem = (chapterId, number) => ({kind: 'problem', chapterId, number});
const reporting = () => ({kind: 'reporting'});
const week = (number, label, assigned, preparation = [], note = '') => ({
  id: `week-${String(number).padStart(2, '0')}`, label, problems: assigned, preparation, note,
});
const disclosures = () => ({
  planning: routeAssignmentPolicy.calendar,
  publicFinal: routeAssignmentPolicy.exposure,
  manualFiles: 'Keep dated first, comparison and corrected work in your own files or notebook sections. Native drafts and self-review remain available; this companion adds no new store or grade.',
  records: routeAssignmentPolicy.milestones,
});

export const routeAssignmentOrder = freeze(['calculus-1', 'calculus-2', 'calculus-3']);

export const routeAssignmentPolicy = freeze({
  title: 'Required work for this selected route',
  calendar: 'The older fourteen-row calendars remain planning templates. This companion specifies the required written selection, public final comparison and project for each route. Their full workload is unknown; no weekly hours or fourteen-week completion guarantee has been established. Spread a row over more than one week when needed, especially the prerequisite work in Week 1 and synthesis in Week 14.',
  milestones: 'Existing route milestone marks retain their original calendar-row scope and remain self-reports. They do not record completion of these newly specified problems, final papers or projects. No new completion mark, grade or learner-record format is introduced here.',
  reading: 'Follow the calendar chapters in order, using the exact preparation and written assignments below. Every named problem retains its original prompt, hint, complete solution and native draft/review tools. The other problems, projects and advanced investigations remain available as further work.',
  exposure: 'The fixed final papers repeat public assigned problems. Their hints, full solutions and comparison criteria are available in the native reader. Record earlier prompt or model views and all help; these are assisted reconstructions when appropriate, not unseen papers or independently verified unaided work.',
  sampled: 'The existing seeded concept checkpoints and written mock-exam builders remain additional cumulative practice with their original scopes and saved-paper meanings. Their samples do not substitute for completing the fixed route selection.',
  editions: 'This selected-work companion is in the interactive reader. The retained printable and static reading editions contain the earlier calendars and project presentation.',
  workTrail: [
    'Before opening support, keep a dated first attempt in your own file or notebook section, labelled with the route, week and full problem or project-stage identifier. This is a voluntary self-study convention; the public reader permits immediate model access.',
    'Keep a separate dated comparison record. List hints, models and outside help used, compare setup, reasoning and conclusion with the native complete solution and type-specific criteria, and identify the first missing or unjustified step.',
    'Keep a dated corrected version without replacing the first attempt. Write the complete repaired argument, units, hypotheses and boundary checks; name the source lesson or linked worked example that repairs the error.',
    'After a later break, attempt the failed problem again from a blank page and record its earlier exposure. Dates and help declarations are your records; neither this page nor the old milestone checkboxes verify delay, independence, proof correctness or mastery.',
    'For the project, retain the first model, comparison tables, source/output and corrected report under its existing named stages. Use its own criterion-specific self-review and limitations; open reporting choices are assessed by those criteria rather than a single prescribed memo.',
  ],
  reportingPreparation: {
    chapterId: '28', lesson: 5,
    scope: 'For these three projects, select only the two generic reporting excerpts reproduced here from Lesson 28.5. Its ODE, Taylor, Richardson, gradient-flow and Heun material is outside this reporting bridge; do not treat the whole lesson or Chapter 28 as a prerequisite.',
    excerpts: [
      'A publishable investigation should include the question, equations and assumptions, parameter values and units, initial data, interval, exact update formulas, editable code, step-size table, checks and a conclusion limited by the evidence. Save the actual source and output together; a screenshot alone cannot reproduce a computation.',
      'A capstone conclusion should separate established facts from observed behavior. An exact benchmark proves a numerical error at sampled times; a theorem may establish a stability interval for a test equation; a grid refinement only suggests an error rate under assumptions. If a physical model\'s parameters came from data, uncertainty in those parameters can dominate numerical error. Report both sources when possible. A graph with smooth curves and many points is not a substitute for model validation, error analysis, and explicit acceptance criteria.',
    ],
    application: 'Apply only the items relevant to the selected project: the tray uses a candidate and finite-difference table, the shuttle uses a two-grid quadrature table, and the channel uses interior and directed-edge calculations. None of these three projects requires implementing an ODE update formula or claiming an observed solver order.',
  },
});

export const routeAssignments = freeze({
  'calculus-1': {
    id: 'calculus-1', title: 'Calculus I: selected written route', calendarRouteId: 'calculus-1',
    summary: 'Limits, derivatives, accumulation and selected integration methods, with exact written assignments, a public final comparison and the folded-tray project.',
    prerequisites: ['Arithmetic, algebra, functions, domains and radians; use the native diagnostic and its exact repair lessons before the selected work.', 'Basic JavaScript is needed for editable code; numerical experiments do not replace the written arguments.'],
    disclosures: disclosures(),
    chapterIds: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    assessmentScopeId: 'calculus-1',
    assessmentScopeNote: 'The existing Calculus I sampled builders retain Chapters 01–11. The fixed public final below also uses the assigned Chapter 12 problem; it has its own displayed identity and is not a saved sampled-paper form.',
    weeks: [
      week(1, 'Prerequisites and computing', [...problems('01', 36, 10, 15, 37, 35), ...problems('02', 1, 6, 12, 22, 38), ...problems('03', 36, 37, 13, 11)], [{kind: 'diagnostic'}, lesson('01', 1), lesson('01', 2), lesson('01', 3), lesson('01', 4), lesson('01', 5), lesson('02', 1), lesson('02', 2), lesson('02', 3), lesson('02', 4), lesson('02', 5), lesson('02', 7), lesson('03', 1), lesson('03', 2), lesson('03', 3)], 'Use the diagnostic repair lessons first. This foundation-heavy selection can require several sittings; the calendar row is not a time allowance.'),
      week(2, 'Limits and quantified control', problems('04', 1, 10, 11, 36, 38), [lesson('04', 1), lesson('04', 2), lesson('04', 3), lesson('04', 6), visual('04', 4)]),
      week(3, 'Continuity, existence and failed limits', problems('04', 2, 35, 16, 23, 39), [lesson('04', 4), lesson('04', 5), lesson('04', 3)]),
      week(4, 'Derivatives from first principles', problems('05', 1, 34, 31, 22), [lesson('05', 1), lesson('05', 2), lesson('05', 3), lesson('05', 4), lesson('05', 5), visual('05')]),
      week(5, 'Differentiation rules and domains', problems('06', 1, 16, 25, 35, 37), [lesson('06', 1), lesson('06', 2), lesson('06', 3), lesson('06', 4), lesson('06', 5), lesson('06', 6), visual('06')]),
      week(6, 'Rates, linearization and sensitivity', problems('07', 4, 6, 12, 33), [lesson('07', 1), lesson('07', 2), lesson('07', 3), lesson('07', 4), visual('07')]),
      week(7, 'Theorems and function shape', problems('08', 34, 13, 15, 20, 35, 36, 37), [lesson('08', 1), lesson('08', 2), lesson('08', 3), lesson('08', 4), lesson('08', 5), lesson('08', 6), visual('08', 4)]),
      week(8, 'Optimization models', problems('09', 2, 3), [lesson('09', 1), lesson('09', 2), lesson('09', 6), visual('09')]),
      week(9, 'Root finding and project preparation', problems('09', 33, 23, 28, 29, 30), [lesson('09', 3), lesson('09', 4), lesson('09', 5), lesson('09', 6), lesson('03', 3)], 'The tray preparation uses the already assigned optimization lessons and Problems 09.28–30. The optional safeguarded-root investigation remains further work.'),
      week(10, 'Accumulation and integrability', problems('10', 35, 33, 36), [lesson('10', 1), lesson('10', 2), lesson('10', 3), lesson('10', 6), visual('10')]),
      week(11, 'Integral properties, averages and motion', problems('10', 16, 21, 34), [lesson('10', 4), lesson('10', 5)]),
      week(12, 'The fundamental theorem', problems('11', 1, 33, 5, 35), [lesson('11', 1), lesson('11', 2), lesson('11', 3), visual('11', 4)]),
      week(13, 'Moving boundaries and selected integration methods', [...problems('11', 18, 25, 36), ...problems('12', 24, 2, 1, 37)], [lesson('11', 4), lesson('11', 5), lesson('11', 6), lesson('12', 1), lesson('12', 2), lesson('12', 3), lesson('12', 4), lesson('12', 5), lesson('12', 6), lesson('12', 7)], 'Review the real hyperbolic branches from 02.7 and inverse derivatives from 06.6 before 12.7. Selected Chapter 12 work is required here even though the older Calculus I sampled builder ends at Chapter 11.'),
      week(14, 'Public final comparison and folded-tray report', [], [reporting()], 'Complete the fixed public final and the project below after their preparation. Allow several sittings for first attempts, comparison and correction; this row has no measured duration.'),
    ],
    final: {id: 'calculus-1-public-final', title: 'Calculus I public final comparison', problems: [...problems('04', 38), ...problems('05', 34), ...problems('08', 37), ...problems('09', 33), ...problems('10', 33), ...problems('11', 36), ...problems('12', 37)]},
    project: {id: 'folded-tray', preparation: [lesson('03', 3), problem('03', 13), lesson('09', 1), lesson('09', 2), lesson('09', 6), visual('09'), problem('09', 28), problem('09', 29), problem('09', 30), reporting()]},
    extensions: [{projectId: 'sampled-shuttle', note: 'Optional after Lessons 10.5, 11.3 and 14.1–2, Problems 10.21, 10.26, 11.13, 14.1, 14.5, 14.10–11, the quadrature investigation 14.2, and the reporting-only bridge. This is not a second required Calculus I project.'}],
  },
  'calculus-2': {
    id: 'calculus-2', title: 'Calculus II: selected written route', calendarRouteId: 'calculus-2',
    summary: 'Integration methods, numerical and improper integration, series and curves, with exact written assignments, a public final comparison and the shuttle project.',
    prerequisites: ['Single-variable limits, derivatives, integral properties, both fundamental-theorem directions and definite substitution.', 'Complete the named Chapters 10–11 retrieval first; review 02.7 and 06.6 before the branch-safe method in 12.7.'],
    disclosures: disclosures(),
    chapterIds: ['10', '11', '12', '13', '14', '15', '16', '17', '18'],
    assessmentScopeId: 'calculus-2',
    assessmentScopeNote: 'The existing Calculus II sampled builders retain Chapters 10–18. Chapters 10–11 are prerequisite retrieval before the calendar\'s Chapter 12 start; the fixed public final is a separate displayed selection, not a saved sampled-paper form.',
    weeks: [
      week(1, 'Prerequisite retrieval and integration methods', [...problems('10', 21), ...problems('11', 25), ...problems('12', 24, 34, 35)], [lesson('10', 5), lesson('11', 3), lesson('11', 5), lesson('02', 7), lesson('06', 6), lesson('12', 1), lesson('12', 2), lesson('12', 3), lesson('12', 4), lesson('12', 5), lesson('12', 6), lesson('12', 7)], 'Repair accumulation and definite substitution first. For 12.7, review real branches in 02.7 and inverse derivatives in 06.6 before the radical method; these are preparation, not extra assessment-scope IDs.'),
      week(2, 'Domains, rational methods and hyperbolic branches', problems('12', 2, 1, 33, 37, 39, 40), [lesson('12', 3), lesson('12', 4), lesson('12', 5), lesson('12', 6), lesson('12', 7)]),
      week(3, 'Areas and volumes', problems('13', 33, 11, 15), [lesson('13', 1), lesson('13', 2), lesson('13', 3), visual('13')]),
      week(4, 'Work, mass and length', problems('13', 17, 23), [lesson('13', 4), lesson('13', 5), lesson('13', 6)]),
      week(5, 'Numerical quadrature and refinement', problems('14', 33, 34, 11), [lesson('14', 1), lesson('14', 2), visual('14', 2)]),
      week(6, 'Improper integrals and comparison', problems('14', 35, 14, 13, 23, 36), [lesson('14', 3), lesson('14', 4), lesson('14', 5)]),
      week(7, 'Sequences and accumulated tails', problems('15', 15, 9, 28, 11), [lesson('15', 1), lesson('15', 2), lesson('15', 3), lesson('15', 6), visual('15')]),
      week(8, 'Positive terms and test selection', [...problems('15', 34, 21, 35), ...problems('16', 1, 2, 4)], [lesson('15', 4), lesson('15', 5), lesson('16', 1), lesson('16', 2)]),
      week(9, 'Alternation, absolute convergence and stopping', problems('16', 34, 33, 30, 35), [lesson('16', 1), lesson('16', 2), lesson('16', 3), lesson('16', 4), lesson('16', 5), lesson('16', 6), visual('16')], 'The optional summation-by-parts investigation is not added to the required selection.'),
      week(10, 'Power-series intervals', problems('17', 1, 7, 8), [lesson('17', 1), lesson('17', 2)]),
      week(11, 'Taylor models and certified error', problems('17', 15, 36, 37, 23, 34, 35), [lesson('17', 3), lesson('17', 4), lesson('17', 5), lesson('17', 6), lesson('17', 7), visual('17'), visual('17', 5)]),
      week(12, 'Parametric curves and conics', problems('18', 6, 36, 37, 40), [lesson('18', 1), lesson('18', 2), lesson('18', 3), lesson('18', 7), lesson('18', 8), visual('18')]),
      week(13, 'Polar calculus and complete branches', problems('18', 33, 35, 22, 41, 45), [lesson('18', 3), lesson('18', 4), lesson('18', 5), lesson('18', 9)]),
      week(14, 'Public final comparison and shuttle report', [], [reporting()], 'Complete the fixed public final and the project below after their preparation. This synthesis row can require several sittings; its full workload is unknown.'),
    ],
    final: {id: 'calculus-2-public-final', title: 'Calculus II public final comparison', problems: [...problems('12', 39), ...problems('13', 33), ...problems('14', 35), ...problems('15', 35), ...problems('16', 34), ...problems('17', 36), ...problems('18', 33)]},
    project: {id: 'sampled-shuttle', preparation: [lesson('03', 3), problem('03', 13), lesson('10', 5), problem('10', 21), problem('10', 26), lesson('11', 3), problem('11', 13), lesson('14', 1), lesson('14', 2), problem('14', 1), problem('14', 5), problem('14', 10), problem('14', 11), visual('14', 2), reporting()]},
    extensions: [],
  },
  'calculus-3': {
    id: 'calculus-3', title: 'Calculus III: selected written route', calendarRouteId: 'calculus-3',
    summary: 'Multivariable geometry, differentiation, integration and vector theorems, with exact written assignments, a public final comparison and the channel-circulation project.',
    prerequisites: ['Single-variable derivatives, integrals and parametric motion, together with algebra and trigonometry.', 'Use each native chapter\'s stated prerequisite lessons; vector geometry is introduced in Chapter 19 before multivariable work.'],
    disclosures: disclosures(),
    chapterIds: ['19', '20', '21', '22', '23', '24', '25', '26'],
    assessmentScopeId: 'calculus-3',
    assessmentScopeNote: 'The existing Calculus III sampled builders retain Chapters 19–26. The fixed public final below is a separate repeated-work selection, not a saved sampled-paper form.',
    weeks: [
      week(1, 'Vectors and space geometry', problems('19', 2, 5, 6, 11, 12, 13), [lesson('19', 1), lesson('19', 2), lesson('19', 3), visual('19')], 'Use the named chapter prerequisites and earlier single-variable derivative/integral repairs before beginning; the calendar supplies no readiness grade or weekly time allowance.'),
      week(2, 'Motion, curvature and projection', problems('19', 20, 34, 35, 36, 38), [lesson('19', 4), lesson('19', 5), lesson('19', 6), lesson('19', 7)]),
      week(3, 'Surfaces, level sets and quadrics', problems('20', 1, 6, 10, 35, 37, 38), [lesson('20', 1), lesson('20', 2), lesson('20', 7), lesson('20', 8), lesson('20', 9)]),
      week(4, 'Multivariable limits and partial information', problems('20', 12, 30, 34, 27, 39, 40, 42), [lesson('20', 3), lesson('20', 4), lesson('20', 5), lesson('20', 6), visual('20')]),
      week(5, 'Differentiability, gradients and tangent planes', problems('21', 24, 11, 12, 33), [lesson('21', 1), lesson('21', 2), lesson('21', 3), lesson('21', 4), lesson('21', 5), visual('21')]),
      week(6, 'Chain rules, Jacobians and regular level sets', problems('21', 7, 8, 10, 34, 35, 36, 37), [lesson('21', 4), lesson('21', 5), lesson('21', 6)]),
      week(7, 'Interior and compact-boundary optimization', problems('22', 5, 33), [lesson('22', 1), lesson('22', 2), lesson('22', 3)]),
      week(8, 'Constraints and descent', problems('22', 19, 17, 22, 34), [lesson('22', 4), lesson('22', 5), lesson('22', 6), visual('22')], 'The inverse-calibration and constrained-second-variation investigations remain optional extensions.'),
      week(9, 'Double integrals and region setup', problems('23', 11, 7), [lesson('23', 1), lesson('23', 2), lesson('23', 3), visual('23')]),
      week(10, 'Triple integrals, mass and moments', problems('23', 2, 17, 34, 21, 33), [lesson('23', 4), lesson('23', 5), lesson('23', 6)]),
      week(11, 'Coordinate changes and Jacobians', problems('24', 34, 35), [lesson('24', 1), lesson('24', 2), lesson('24', 3), visual('24')]),
      week(12, 'Joint densities and expectation', problems('24', 19, 18, 36), [lesson('24', 4), lesson('24', 5)]),
      week(13, 'Fields, line integrals and domain conditions', problems('25', 5, 9, 11, 23, 3, 33), [lesson('25', 1), lesson('25', 2), lesson('25', 3), lesson('25', 4), lesson('25', 5), visual('25')]),
      week(14, 'Boundary theorems, public final and channel report', problems('26', 34, 7, 35, 17), [lesson('26', 1), lesson('26', 2), lesson('26', 3), lesson('26', 4), lesson('26', 5), lesson('26', 6), visual('26'), visual('26', 2), reporting()], 'Study the boundary-theorem lessons and complete the written work before the fixed final and project. This is a substantial synthesis selection, not a one-week or fixed-hour promise.'),
    ],
    final: {id: 'calculus-3-public-final', title: 'Calculus III public final comparison', problems: [...problems('19', 34), ...problems('20', 34), ...problems('21', 37), ...problems('22', 33), ...problems('23', 34), ...problems('24', 34), ...problems('25', 33), ...problems('26', 34)]},
    project: {id: 'channel-circulation', preparation: [lesson('25', 2), problem('25', 9), lesson('26', 1), lesson('26', 5, 'Select Green circulation, orientation and regularity; other boundary theorems remain in the route lessons.'), problem('26', 2), problem('26', 4), problem('26', 6), visual('26'), visual('26', 2), reporting()]},
    extensions: [],
  },
});
