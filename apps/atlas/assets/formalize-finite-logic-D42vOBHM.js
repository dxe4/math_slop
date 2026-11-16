var e=`---
id: recipe-formalize-finite-logic
title: "Formalize and Check a Finite Logical Claim"
license: CC BY-SA 4.0
---

# Formalize and Check a Finite Logical Claim

**Before reading.** Read [Statements and Truth Tables](/resources/library:book-introduction-to-proof:statements-truth-tables/), [Quantifiers](/resources/library:book-introduction-to-proof:quantifiers/).

Use this recipe when a claim concerns a small explicitly listed universe and you want an auditable semantic answer. The output is a truth value in **that model**, plus witnesses or counterexamples. It is not a proof of general validity and not a general proof assistant.

## Step 1 — state the jurisdiction

Write five lines before code:

1. universe, including whether empty domains are permitted;
2. signature and arities;
3. interpretation of each predicate/relation;
4. exact formula with scopes;
5. desired result: truth in one model, not universal consequence unless all models are handled separately.

Example:

\`\`\`text
Universe U = {a,b}
Unary predicates: P, Q
Binary relation: R
P = {a}; Q = {a,b}; R = {(a,a),(b,b)}
Formula: for every x, there exists y such that R(x,y)
\`\`\`

Standard first-order model theory usually requires nonempty domains. The implementation below accepts a supplied dense array of distinct universe elements, including empty, and then uses the declared extension: universal quantification is vacuously true and existential quantification false over empty U. If you need the standard convention, reject \`U.length===0\` during validation.

## Step 2 — use an abstract syntax tree

### Worked example: witnesses do not exchange quantifier order

In the displayed identity model, each $x$ has the witness $y=x$, so
$\\forall x\\exists yR(x,y)$ is true. Its witness record is
$a\\mapsto a$, $b\\mapsto b$. But $\\exists y\\forall xR(x,y)$ is false:
candidate $y=a$ fails for $x=b$, and candidate $y=b$ fails for $x=a$.
These two candidates exhaust the universe. A different witness for each
universal input does not supply one common witness for them all. The domain,
relation table, quantifier order and witness rows together establish these
finite-model conclusions without running an evaluator.

Do not evaluate formula strings with JavaScript \`eval\`. Represent syntax as tagged data:

\`\`\`js
const P = (x) => ({ kind: "atom", symbol: "P", terms: [x] });
const Q = (x) => ({ kind: "atom", symbol: "Q", terms: [x] });
const R = (x, y) => ({ kind: "atom", symbol: "R", terms: [x, y] });
const not = (formula) => ({ kind: "not", formula });
const and = (left, right) => ({ kind: "and", left, right });
const implies = (left, right) => ({ kind: "implies", left, right });
const forall = (variable, formula) => ({ kind: "forall", variable, formula });
const exists = (variable, formula) => ({ kind: "exists", variable, formula });
\`\`\`

Now $\\forall x\\exists yR(x,y)$ is

\`\`\`js
const eachHasTarget = forall("x", exists("y", R("x", "y")));
\`\`\`

The tree exposes scope. A parser can be added later, but parser correctness is a separate problem from semantic evaluation.

## Step 3 — validate signature and model

The signature maps each symbol to an arity. The universe and each relation tuple must be dense arrays, with an own entry at every index. Validation must reject wrong tuple lengths, free/unbound variables for sentences, duplicate universe elements, and interpretation tuples outside the universe.

\`\`\`js
const signature = { P: 1, Q: 1, R: 2 };
function isDenseArray(values) { for (let i = 0; i < values.length; i += 1) if (!Object.hasOwn(values, i)) return false; return true; }
function validateModel(model) {
  if (!Array.isArray(model.universe) || !isDenseArray(model.universe)) throw new Error("universe must be a dense array");
  const domain = new Set(model.universe);
  if (domain.size !== model.universe.length) throw new Error("universe elements must be distinct");
  if (!model.interpretation || typeof model.interpretation !== "object") {
    throw new Error("interpretation must be an object");
  }

  for (const symbol of Object.keys(model.interpretation)) {
    if (!Object.hasOwn(signature, symbol)) throw new Error(\`unknown symbol \${symbol}\`);
  }
  for (const [symbol, arity] of Object.entries(signature)) {
    if (!Object.hasOwn(model.interpretation, symbol)) {
      throw new Error(\`missing interpretation for \${symbol}\`);
    }
    const rows = model.interpretation[symbol];
    if (!Array.isArray(rows)) throw new Error(\`\${symbol} must be a list of tuples\`);
    for (const tuple of rows) {
      if (!Array.isArray(tuple) || tuple.length !== arity || !isDenseArray(tuple)) {
        throw new Error(\`\${symbol} must be a dense tuple of arity \${arity}\`);
      }
      if (tuple.some((value) => !domain.has(value))) {
        throw new Error(\`\${symbol} contains an element outside the universe\`);
      }
    }
  }
}

function validateFormula(formula, bound = new Set()) {
  if (formula.kind === "atom") {
    if (formula.terms.length !== signature[formula.symbol]) {
      throw new Error(\`\${formula.symbol} has the wrong arity\`);
    }
    for (const variable of formula.terms) {
      if (!bound.has(variable)) throw new Error(\`unbound variable \${variable}\`);
    }
    return;
  }
  if (formula.kind === "not") return validateFormula(formula.formula, bound);
  if (["and", "or", "implies"].includes(formula.kind)) {
    validateFormula(formula.left, bound);
    validateFormula(formula.right, bound);
    return;
  }
  if (formula.kind === "forall" || formula.kind === "exists") {
    validateFormula(formula.formula, new Set([...bound, formula.variable]));
    return;
  }
  throw new Error(\`unknown formula kind \${formula.kind}\`);
}
\`\`\`

This validator treats every term as a variable name. Constants and function terms require additional syntax and evaluation rules; do not silently squeeze them into the same representation.

## Step 4 — evaluate under an environment

An environment maps each currently bound variable to a universe element. Validation and tuple lookup both use SameValueZero: \`NaN\` matches \`NaN\`, signed zeros match, and objects match only by reference. The recursive invariant is:

> At a call evaluating a subformula, the environment supplies exactly the variables bound outside that subformula (plus any declared free-variable assignment).

\`\`\`js
function hasTuple(rows, tuple) {
  return rows.some((row) => row.length === tuple.length && row.every((value, i) => value === tuple[i] || (Number.isNaN(value) && Number.isNaN(tuple[i]))));
}

function evaluate(formula, model, environment = {}) {
  switch (formula.kind) {
    case "atom": {
      const tuple = formula.terms.map((name) => {
        if (!Object.hasOwn(environment, name)) throw new Error(\`missing value for \${name}\`);
        return environment[name];
      });
      return hasTuple(model.interpretation[formula.symbol], tuple);
    }
    case "not":
      return !evaluate(formula.formula, model, environment);
    case "and":
      return evaluate(formula.left, model, environment) && evaluate(formula.right, model, environment);
    case "or":
      return evaluate(formula.left, model, environment) || evaluate(formula.right, model, environment);
    case "implies":
      return !evaluate(formula.left, model, environment) || evaluate(formula.right, model, environment);
    case "forall":
      return model.universe.every((value) =>
        evaluate(formula.formula, model, { ...environment, [formula.variable]: value })
      );
    case "exists":
      return model.universe.some((value) =>
        evaluate(formula.formula, model, { ...environment, [formula.variable]: value })
      );
    default:
      throw new Error(\`unknown formula kind \${formula.kind}\`);
  }
}

const identityModel = {
  universe: ["a", "b"],
  interpretation: {
    P: [["a"]],
    Q: [["a"], ["b"]],
    R: [["a", "a"], ["b", "b"]],
  },
};

validateModel(identityModel);
validateFormula(eachHasTarget);
console.assert(evaluate(eachHasTarget, identityModel) === true);
console.assert(evaluate(exists("y", forall("x", R("x", "y"))), identityModel) === false);
console.assert(evaluate(forall("x", implies(P("x"), Q("x"))), identityModel) === true);
console.assert(evaluate(exists("x", and(P("x"), not(Q("x")))), identityModel) === false);
\`\`\`

## Step 5 — return evidence, not only a Boolean

For an existential, retain the first successful value as a witness. For a failing universal, retain the first failing value as a counterexample. Nested quantifiers benefit from a table of all choices rather than one flattened environment.

For $\\forall x\\exists yR(x,y)$, return rows:

| x | valid y values |
|---|---|
| a | a |
| b | b |

For $\\exists y\\forall xR(x,y)$, compute candidate y columns and report that none works. This directly exposes dependency: the first sentence permits y to vary with x.

Evidence does not replace a truth proof for the evaluator itself. Correctness is established by structural induction on formulas.

## Step 6 — prove evaluator correctness

**Claim.** For every well-formed formula φ, validated finite model M, and adequate environment s, $evaluate(\\varphi ,M,s)$ returns true exactly when $M,s\\models \\varphi$ under the declared semantics.

**Proof.** Induct on φ.

- Atomic case: the function looks up exactly the interpreted tuple, matching atomic satisfaction.
- Negation/connectives: use induction hypotheses for immediate subformulas and the connective truth definitions.
- Universal: JavaScript \`every\` returns true exactly when every domain value makes the recursive call true; by induction this matches satisfaction under every reassignment.
- Existential: \`some\` returns true exactly when at least one domain value makes the recursive call true; by induction this matches a semantic witness.

The syntax tree is finite and the universe finite, so recursion terminates. ∎

This is correctness of one algorithm, not Gödel’s completeness theorem.

## Step 7 — state complexity

Let n be universe size and q the maximum number of simultaneously nested quantifiers. A direct evaluator may inspect $n^q$ assignments. If an atomic relation is stored as a list of m tuples, lookup costs order m; a hash set reduces expected lookup to constant time with additional storage.

For fixed formula and signature, finite model checking is polynomial in structure size; when the formula is also input, combined complexity can be much larger. Avoid collapsing distinct complexity regimes into “exponential logic.”

The recursive call stack depth is bounded by formula depth. Copying an environment at every quantifier adds overhead; a mutable stack with disciplined push/pop can reduce allocation, but then the invariant and exception cleanup require more care.

## Step 8 — falsification experiments

Test at least:

1. empty universe under your declared convention;
2. singleton universe;
3. identity relation on two elements for quantifier-order separation;
4. universal and empty relations;
5. predicate implication with no antecedent cases (vacuity);
6. wrong arity, an unknown symbol, a duplicate universe element, and a tuple outside the universe;
7. one free variable with and without an environment;
8. a hostile variable name such as \`toString\`, which must not be accepted merely because it is inherited from \`Object.prototype\`;
9. negated existential versus universal negation;
10. serialization containing invalid sizes or bit strings.

Property check: for every generated finite model in a small exhaustive family,

$\\neg \\forall xP(x)$ and $\\exists x\\neg P(x)$

must agree under the same domain convention. Exhaustive testing over small models can validate implementation properties; it still is not a proof for unbounded inputs unless paired with the structural argument.

## Step 9 — report claim strength

Use one of these endings:

- “Formula φ is true in listed model M; witness x=a.”
- “Formula φ is false in M; counterexample x=b.”
- “An exhaustive enumeration of all structures of size at most k found no countermodel.”
- “A separate mathematical proof shows φ valid in every structure.”

The third is not the fourth. Small-model bounds exist for some logical fragments, but they must be proved for that fragment before finite search becomes a decision procedure.

## Exercises with hints and complete solutions

### Exercise 1
<a id="formalize-finite-logic-ex-1"></a>

Encode $\\forall x(P(x)\\lor Q(x))$ and its negation.

<details><summary>Hint 1</summary>

Preserve the quantifier's scope when encoding the disjunction.

</details>
<details><summary>Hint 2</summary>

Negating a universal produces an existential and negates the whole matrix.

</details>
<details><summary>Solution</summary>

$forall("x", \\{kind:"\\text{ or }",left\\colon P("x"),right\\colon Q("x")\\})$; its negation is equivalent to \`exists("x", and(not(P("x")),not(Q("x"))))\`.

</details>

### Exercise 2
<a id="formalize-finite-logic-ex-2"></a>

Extend validation to reject environment values outside the universe.

<details><summary>Hint 1</summary>

Check the resolved values before relation-table lookup.

</details>
<details><summary>Hint 2</summary>

An assignment to a value outside the universe is malformed, even if that tuple is absent.

</details>
<details><summary>Solution</summary>

Before atomic lookup, test every resolved value with \`model.universe.includes(value)\` and throw a descriptive error if not.

</details>

### Exercise 3
<a id="formalize-finite-logic-ex-3"></a>

Explain why evaluating an atom with an unbound variable should error rather than return false.

<details><summary>Hint 1</summary>

Separate a formula's truth from whether its inputs are defined.

</details>
<details><summary>Hint 2</summary>

A free variable requires an explicitly supplied assignment.

</details>
<details><summary>Solution</summary>

False is a semantic result under an assignment. Missing assignment makes evaluation undefined/malformed; returning false could turn a programming omission into a fake counterexample.

</details>

### Exercise 4
<a id="formalize-finite-logic-ex-4"></a>

On identity R over $\\{a,b,c\\}$, give all witness rows for $\\forall x\\exists yR(x,y)$.

<details><summary>Hint 1</summary>

Identity relates each element only to itself.

</details>
<details><summary>Hint 2</summary>

Use a separate existential witness for each universal choice.

</details>
<details><summary>Solution</summary>

a→{a}, b→{b}, c→{c}.

</details>

### Exercise 5
<a id="formalize-finite-logic-ex-5"></a>

Under the declared empty-domain extension, evaluate $\\forall xP(x)$, $\\exists xP(x)$, and $\\exists x(P(x)\\lor \\neg P(x))$.

<details><summary>Hint 1</summary>

Universal and existential quantifiers use different empty-domain conventions.

</details>
<details><summary>Hint 2</summary>

The truth of the matrix does not create an element to witness an existential.

</details>
<details><summary>Solution</summary>

True, false, false. The inner classical disjunction would be true for a supplied object, but the existential has no candidate.

</details>

### Exercise 6
<a id="formalize-finite-logic-ex-6"></a>

If q=4 and n=5, what maximum number of assignments can naïve nested search inspect before matrix cost?

<details><summary>Hint 1</summary>

Count choices at each of four quantifier levels.

</details>
<details><summary>Hint 2</summary>

Multiply the five choices at each level; leave atomic evaluation cost separate.

</details>
<details><summary>Solution</summary>

$5^4=625$ assignments.

</details>

### Exercise 7
<a id="formalize-finite-logic-ex-7"></a>

Why does passing 10,000 random models not prove a formula valid?

<details><summary>Hint 1</summary>

Validity quantifies over every structure.

</details>
<details><summary>Hint 2</summary>

A sample need not include a countermodel, and finite models omit infinite ones.

</details>
<details><summary>Solution</summary>

Validity quantifies over all structures. Random sampling has no coverage guarantee and may miss a rare countermodel or all infinite countermodels.

</details>

### Exercise 8
<a id="formalize-finite-logic-ex-8"></a>

State the induction invariant needed for a mutable push/pop environment implementation.

<details><summary>Hint 1</summary>

Track which binding shadows each previous variable value.

</details>
<details><summary>Hint 2</summary>

Returning from recursion must restore the previous environment, including on failure.

</details>
<details><summary>Solution</summary>

Immediately before evaluating a subformula at depth j, the environment maps precisely the variables bound on the path from the root to that subformula to their current choices; after returning, the previous mapping is restored even on errors.

</details>

## Boundaries of the result

This workflow decides truth only for a supplied finite structure under the
declared semantics. Truth in one model is not logical validity, and failure to
find a countermodel up to a chosen size is not validity unless a proved
small-model theorem applies. Open formulas require an environment; treating a
missing assignment as false changes malformed input into a semantic claim.

The empty-domain convention, equality interpretation, available symbols, and
arity table are part of the model contract. Changing any of them can change an
answer. The structural-induction proof licenses the evaluator design assuming
the implementation matches the cases; tests provide evidence about that
implementation but do not replace the proof. None of these checks establish
consistency or completeness of an unrelated formal theory.

## Continue

The live finite-model workshop implements this architecture with arity validation, exact relation tables, evidence, empty-domain labelling, pure tests, and shareable state. Move next to the model-theory deep dive before generalizing finite observations into compactness or consistency claims.
`;export{e as default};