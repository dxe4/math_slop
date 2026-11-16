var e=`---
id: visual-lab-finite-model-logic
title: "Finite-Model Quantifier Workshop"
level: undergraduate
estimated_minutes: 130
license: CC BY-SA 4.0
---

# Finite-Model Quantifier Workshop

[Open the live workshop](#/labs?lab=visual-lab-finite-model-logic)

This live SVG instrument evaluates a fixed collection of first-order sentences in an explicitly listed finite structure. You edit:

- universe $U$, with labels a through e;
- unary predicates P and Q;
- binary relation R;
- one formula preset.

The result includes exact tables, witnesses, counterexamples, and a direct comparison of

$\\forall x\\exists yR(x,y)$ with $\\exists y\\forall xR(x,y)$.

It is a finite semantic checker, not a general proof assistant. Standard first-order model theory commonly requires a nonempty domain. The lab permits size zero only as a clearly declared boundary extension: under that convention universal quantification is vacuously true and existential quantification false over the empty universe.

## 1. Read the whole structure

For a three-element state:

\`\`\`text
U = {a,b,c}
P = {a,b}
Q = {b,c}
R = {(a,a),(b,b),(c,c)}
\`\`\`

P and Q are sets of objects. R is a set of ordered pairs. $R(a,b)$ is true exactly when pair $(a,b)$ appears in R. Order matters: $(a,b)$ and $(b,a)$ are separate table cells.

The SVG gives a visual summary:

- every object is a labelled node;
- solid fill plus the text P marks P-membership;
- a dashed outer ring plus the text Q marks Q-membership;
- directed arrows mark R-pairs.

Colour is redundant with fill, dash pattern, arrow shape, membership labels, and the complete tables. The relation matrix is authoritative when arrows overlap.

## 2. Atomic formulas and environments

An atomic formula such as $P(x)$ cannot be evaluated until variable x receives a value. An environment might assign $x\\mapsto a$; then $P(x)$ is looked up as $P(a)$.

For $R(x,y)$, both variables require values. The evaluator validates arity: P and Q expect one argument, R expects two. Treating malformed $P(x,y)$ as false would be wrong; it is not a well-formed formula for this signature.

A sentence has no free variables. Every variable occurrence is bound by a quantifier, so evaluation begins with an empty environment and quantifiers extend it.

## 3. First experiment: witnesses and counterexamples

Select $\\forall xP(x)$. With P={a,b} and U={a,b,c}, the sentence is false. The evaluator returns $x=c$ as a counterexample.

Select $\\exists xP(x)$. It is true and returns the first listed witness, a. The witness is not necessarily unique; both a and b work. One is sufficient for existential truth.

Toggle c into P. The universal becomes true after all three cases have been checked.

### Negation experiment

Compare:

- “Every P is Q”: $\\forall x(P(x)\\to Q(x))$;
- “A P is not Q”: $\\exists x(P(x)\\land \\neg Q(x))$.

These are exact negations. In the initial model, a belongs to P but not Q, so the first is false and the second true. Remove a from P: then every remaining P is Q. Objects not in P cannot refute the implication because the antecedent is false.

This is vacuity inside a nonempty structure: an implication makes no assertion about non-P objects.

## 4. Second experiment: quantifier order

Choose the **Identity R** preset on at least two objects. The relation contains $(x,x)$ for each x and no cross-arrows.

### Every source may choose

$\\forall x\\exists yR(x,y)$ is true. The witness table shows:

| x | a valid y |
|---|---|
| a | a |
| b | b |
| c | c |

The existential choice occurs inside the universal scope, so y may depend on x.

### One target must serve all

$\\exists y\\forall xR(x,y)$ is false. Choose y=a: b does not point to a. Choose y=b: a does not point to b. No common target exists.

Now choose **Common target**. Every source points to a, so both sentences become true. The inner/outer order does not force different truth values in every model; it makes the second logically stronger. Any common target supplies per-source witnesses, so

$\\exists y\\forall xR(x,y) \\Longrightarrow \\forall x\\exists yR(x,y)$

for nonempty standard domains. Under the lab’s empty-domain extension, the antecedent is false and consequent true, so the implication still holds.

## 5. Third experiment: empty and singleton boundaries

Set universe size to zero.

- $\\forall xP(x)$ is true under the declared extension because no counterexample exists.
- $\\exists xP(x)$ is false because no witness exists.
- $\\forall x\\exists yR(x,y)$ is true because there is no source x requiring a y.
- $\\exists y\\forall xR(x,y)$ is false because there is no candidate y.

The difference between the nested formulas survives.

Set size to one and choose Identity R. Both nested formulas are true: the sole object can be the per-source and common witness. For a singleton, quantifier order often collapses because all variable choices name the same object.

These states are diagnostic. In ordinary model-theory theorems, check whether structures are required nonempty before importing the empty result.

## 6. Fourth experiment: symmetry and irreflexivity

Select

$\\forall x\\forall y(R(x,y)\\to R(y,x))$.

This says R is symmetric. Add $(a,b)$ without $(b,a)$; the evaluator finds a counterexample assignment. Add the reverse pair and the local failure disappears, though every other pair is still checked.

Select

$\\forall x\\neg R(x,x)$.

This says R is irreflexive. Identity R violates it at every object. A directed cycle of length at least two without loops satisfies irreflexivity; the one-object cycle is a loop and fails. Presets must be interpreted with universe size in mind.

Symmetry is not transitivity. A two-way edge a↔b and b↔c does not force a↔c unless those pairs are added. One property’s visual pattern is not proof of another.

## 7. Exact evaluation algorithm

The evaluator represents each formula as a tagged tree. Its central recursion is:

\`\`\`text
evaluate(atom, environment): look up interpreted tuple
evaluate(not A): negate evaluate(A)
evaluate(A and B): combine both truth values
evaluate(A implies B): (not evaluate(A)) or evaluate(B)
evaluate(forall x A): every u in U makes A true under x := u
evaluate(exists x A): some u in U makes A true under x := u
\`\`\`

The invariant is: at each recursive call, the environment maps precisely the variables bound on the path to that subformula. Each quantifier extends one binding without altering other variables.

### Correctness argument

Prove by structural induction on formulas. Atomic lookup matches the structure’s interpretation. Connective cases follow from truth definitions and induction hypotheses. Universal \`every\` checks exactly all reassignments; existential \`some\` checks exactly whether one reassignment works. The formula tree and universe are finite, so evaluation terminates.

This algorithmic correctness theorem is not the first-order completeness theorem. It only relates code to satisfaction in one finite structure.

## 8. Complexity and search size

For universe size n and q nested quantifiers, direct evaluation can inspect up to $n^q$ variable assignments. An atomic R lookup through m listed pairs takes order m time; bit-matrix storage gives constant-time cell lookup.

The workshop caps n at five, making exhaustive tables readable. This cap is an interface choice, not a theorem that larger models are irrelevant.

Finite-model search can refute general validity by finding one genuine countermodel. Failure to find a countermodel up to size five is only bounded evidence unless a separate small-model theorem applies to the logical fragment.

## 9. Accessibility and interaction route

Every edit uses native controls:

- universe range control;
- formula select;
- P/Q checkboxes;
- relation-table toggle buttons with \`aria-pressed\`;
- model preset and share buttons.

They work by pointer and standard keyboard navigation. The SVG is static and has a descriptive accessible name. The complete universe/predicate table, R matrix, witness table, sentence notation, truth value, and evidence explanation form the nonvisual route. No result relies on animation or timing, so reduced-motion preferences lose no capability.

Shared state stores only bounded size, membership bits, relation bits, and a known formula ID. Parsing rejects malformed bit strings and unknown IDs, and a missing size preserves the documented default rather than becoming accidentally empty.

## 10. What the lab does not prove

The workshop does not establish:

- validity in all structures;
- completeness or soundness of arbitrary proof rules;
- satisfiability of an infinite theory;
- compactness or Löwenheim–Skolem;
- consistency of ZF/ZFC;
- independence of a sentence;
- type checking or proof-term normalization.

Those are metatheoretic claims requiring separate proofs. The lab’s honest strength is exact finite semantics with inspectable evidence.

## Challenges

1. Construct the smallest model where $\\exists xP(x)$ and $\\exists xQ(x)$ are true but $\\exists x(P(x)\\land Q(x))$ is false.
2. Construct a nonempty model where $\\forall x(P(x)\\to Q(x))$ is true because P is empty.
3. Make $\\forall x\\exists yR(x,y)$ false with exactly one counterexample source.
4. Make $\\exists y\\forall xR(x,y)$ true while keeping R as small as possible on four objects.
5. Give a symmetric but non-reflexive relation.
6. Give an irreflexive relation that is not symmetric.
7. Predict all eight preset formulas for the empty universe under the declared extension.
8. Explain why toggling $(a,b)$ can refute symmetry but cannot by itself prove symmetry.

## Solutions

1. One object cannot separate witnesses, so use $\\{a,b\\}$, P={a}, Q={b}. R is irrelevant.
2. Any nonempty universe with P=∅ works, regardless of Q. No object makes the implication’s antecedent true and consequent false.
3. On $\\{a,b\\}$, let R={(a,a)}. Source a has witness a; source b has none.
4. Choose one common target, say a, and include $(a,a),(b,a),(c,a),(d,a)$. Four pairs are necessary because each of four sources must point to the chosen target.
5. On $\\{a,b\\}$, use $\\{(a,b),(b,a)\\}$. It is symmetric and has no required loops, so not reflexive.
6. Use $\\{(a,b)\\}$ on $\\{a,b\\}$. No loop occurs, but reverse $(b,a)$ is missing.
7. Universals over x are vacuously true: all-P, all-P-implies-Q, forall-exists-R, symmetry, and irreflexivity. Existentials are false: some-P, counterexample-P-Q, and exists-forall-R.
8. One directed pair missing its reverse is a complete counterexample. To prove symmetry in a finite structure, every active pair must be checked; one successful pair gives only local evidence.

## Lab report

Share four states: a quantifier-order countermodel, a vacuous implication, a symmetry failure, and the empty extension. For each list the exact structure, selected formula, result, witness/counterexample, and one sentence stating whether the conclusion is model-specific or general. Continue to the model-theory deep dive to see why compactness can require infinite models outside the lab’s horizon.
`;export{e as default};