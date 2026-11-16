// Pure answer-checking logic for the `answer` fence (no DOM, no storage).
// Shared by ../practice.js (the viewer plugin) and tools/migrate/practice-check.mjs.
//
// A fence holds JSON: { "answer": { kind, expected | expected_constraints, checker_scope, ... },
//                       "options": ["value", ...] }   (options: multiple choice only)
import { grade, answerFields, parseAnswer } from './checkers.mjs';

export function parseSpec(source) {
  const spec = JSON.parse(source);
  if (!spec?.answer?.kind) throw new TypeError('The answer block has no answer kind.');
  return spec;
}
const exerciseOf = spec => ({
  answer: spec.answer,
  ...(spec.options ? { visual_state: { type: 'choices', choices: spec.options.map(value => ({ value })) } } : {}),
});

/** Input fields for the answer box: [{ key, label, placeholder, type, parse_kind?, optional? }]. */
export function fieldsFor(spec) {
  return answerFields(exerciseOf(spec)).map(field => ({ ...field, optional: field.type === 'textarea' && field.key === 'explanation' }));
}

/** Check `values` (an object of field strings). Result: { status, message, scope }.
 *  status: correct | incorrect | invalid | indeterminate. */
export function check(spec, values) {
  const missing = spec.answer.kind !== 'proof' && fieldsFor(spec).find(field => !field.optional && !String(values?.[field.key] ?? '').trim());
  if (missing) return { status: 'invalid', message: `Complete the ${missing.label.toLowerCase()} field.`, scope: spec.answer.checker_scope };
  return { ...grade(exerciseOf(spec), values), scope: spec.answer.checker_scope };
}

/** Live "read as" preview for a field with a parse_kind. */
export function preview(kind, value) {
  try { return parseAnswer(kind, value); } catch { return { supported: false }; }
}

/** Every browser-supported way to enter an answer (used by the check script). */
export const KINDS_WITH_PREVIEW = ['integer', 'rational', 'numeric_tolerance', 'vector', 'matrix', 'complex', 'interval', 'set', 'rational_function', 'expression'];
