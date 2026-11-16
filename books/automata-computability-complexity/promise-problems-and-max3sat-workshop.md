
# Promise Problems and the MAX-3SAT Workshop

This credited continuation preserves the full promise-problem section, MAX-3SAT project, evidence boundaries, worked formulas, exact tables, task IDs, full changed-case solution, feedback and inert reference listing from the original randomized chapter. Original section numbers and case labels below are retained. The original file, IDs and release history remain unchanged. This is back matter, not a seventeenth main chapter. Read it with [Randomized Computation and Approximation](randomized-and-approximation-classes.md).

## 8. Promise problems

A promise problem is pair $(Y,N)$ of disjoint input sets. Correctness is required on $Y \cup N$; behavior outside the promise is unrestricted. A reduction must map promised yes inputs to $Y$, promised no inputs to $N$, and respect the target promise.

Promising a matrix is well conditioned, a graph has one of two separated optima, or a quantum state comes from a specified preparation can change complexity. A validator may not be able to decide the promise efficiently, so “reject malformed” and “outside promise” are different situations.

## 9. Project: MAX-3SAT expectation laboratory

**Brief.** Build a dependency-free exact evaluator for validated 3CNF, a seeded random-assignment sampler, and conditional-expectation derandomizer. For small formulas exhaust all assignments to compute $\operatorname{OPT}$. Compare randomized distributions, the deterministic $7/8$ guarantee, and optimum. Include tautologies/repeated variables only in a separately labeled generalized mode.

**Reference design.** Maintain clauses as signed integers. Given a partial assignment, compute each clause's conditional satisfaction probability exactly as a dyadic rational: already true gives one; impossible gives zero; otherwise $1-2^{-u}$ for $u$ distinct unassigned noncomplementary literals. Sum rationals with a common power-of-two denominator. At each variable choose the Boolean value with larger conditional expectation, breaking ties deterministically.

**Acceptance criteria.** Validate literal ranges, use a documented seeded generator only for reproducibility—not cryptography—and report seed, trials, empirical failures, exact expected bound, derandomized value, and optimum for bounded cases. Prove that one branch has conditional expectation at least their average, and induction that the final score meets the initial expectation.

## 10. Evidence boundaries

- A pseudorandom generator is not automatically independent or cryptographically secure.
- Expected approximation quality differs from a high-probability guarantee.
- Approximation ratio includes feasibility and objective direction.
- An FPTAS claim includes dependence on $1/\varepsilon$ and encoding lengths.
- A promise must appear in theorem, interface, and reduction.
- Random empirical trials do not prove a tail bound.

<!-- max3sat-worked-cases:start -->

### MAX3SAT-A — Worked conditional expectations

**Task ID:** `max3sat-conditional-expectation-worked`. This is the concrete
finite continuation of the Section 9 laboratory. Preserve these task labels
when citing this project; the book's existing sections keep their original
positions.

Use Boolean values 0 (false) and 1 (true), and interpret a positive integer
`i` as $x_i$ and a negative integer `-i` as $\neg x_i$. A clause is the
disjunction of its three literals; the score is the number of satisfied
clauses. Every clause below uses **three distinct variables**. There are no
tautologies or repeated-variable clauses.

Here is the complete main input, with variables ordered $x_1,x_2,x_3,x_4$:

```json
{
  "variables": 4,
  "clauses": [
    [1, 2, 3],
    [1, 2, -3],
    [1, -2, 3],
    [1, -2, -3],
    [-1, 2, 4],
    [-1, -2, 4],
    [-1, 3, 4],
    [-1, -3, 4]
  ]
}
```

Call this formula $A$. Independent fair initial bits give
$E[\operatorname{score}(A)]=7(8)/8=7$.

**Derive the score before choosing bits.** If $x_1=0$, exactly one of the
first four clauses is false, whatever $(x_2,x_3)$ is, and the last four are
true because they contain $\neg x_1$. The score is therefore always 7.
If $x_1=1$, the first four are true. When $x_4=0$, exactly two of the last
four are true; when $x_4=1$, all four are true. Thus the score in this branch
is 6 or 8 according to $x_4$, independently of $(x_2,x_3)$.

Fix bits in order $x_1,x_2,x_3,x_4$. At every step compare the conditional
expected **total score** over all remaining independent fair bits, choose
the larger expectation, and **choose 0 on an exact tie**. Do not change this
tie rule after seeing the optimum.

| Fixed prefix before the choice | Next bit | Expectation if 0 | Expectation if 1 | Chosen bit | Retained expectation |
|---|---|---:|---:|---:|---:|
| empty | $x_1$ | $7$ | $7$ | 0 | $7$ |
| 0 | $x_2$ | $7$ | $7$ | 0 | $7$ |
| 00 | $x_3$ | $7$ | $7$ | 0 | $7$ |
| 000 | $x_4$ | $7$ | $7$ | 0 | $7$ |

At the last row no random bits remain. The output is `0000` and its actual
score is 7; the first clause is false. A tie preserves the expectation but
does not promise that the selected branch contains an optimal assignment.

Here is a complete optimum certificate: the score for every one of the
$2^4=16$ assignments, in lexicographic bit order.

| Assignment | Score for $A$ |
|---|---:|
| 0000 | 7 |
| 0001 | 7 |
| 0010 | 7 |
| 0011 | 7 |
| 0100 | 7 |
| 0101 | 7 |
| 0110 | 7 |
| 0111 | 7 |
| 1000 | 6 |
| 1001 | 8 |
| 1010 | 6 |
| 1011 | 8 |
| 1100 | 6 |
| 1101 | 8 |
| 1110 | 6 |
| 1111 | 8 |

The scores sum to 112, so their uniform average is $112/16=7$, matching
the clause-indicator calculation. For an even shorter optimality argument,
`1001` satisfies every clause: $x_1=1$ satisfies the first four, and $x_4=1$
satisfies the last four. Hence $\operatorname{OPT}(A)\ge8$, while the eight
clauses give $\operatorname{OPT}(A)\le8$.

This instance attains the guaranteed fraction $7/8$ of optimum for the
specified algorithm and tie rule. In general the guarantee is
$\operatorname{score}\ge7m/8\ge(7/8)\operatorname{OPT}$, or approximation
factor $8/7$ under Section 5's maximization convention. **MAX-3SAT is not
the satisfiability decision problem.** Formula $A$ is satisfiable, even
though this derandomized output fails one clause. Failing to satisfy all
clauses does not certify that the formula is unsatisfiable.

### MAX3SAT-B — A changed formula to solve first

**Task ID:** `max3sat-changed-formula-task`. Attempt this before opening the
key or running the reference. Use the same four variables, bit order and
tie-to-0 convention, but the following **complete nine-clause** input $B$:

```json
{
  "variables": 4,
  "clauses": [
    [1, 2, 3],
    [1, 2, -3],
    [1, -2, 3],
    [1, -2, -3],
    [-1, 2, 4],
    [-1, -2, 4],
    [-1, 3, 4],
    [-1, -3, 4],
    [1, 2, 4]
  ]
}
```

The added clause is $x_1\lor x_2\lor x_4$; it also has three distinct
variables.

1. Compute the initial expectation and both branches for each selected
   prefix, as exact rational numbers. Explain whether the old first tie
   survives; write the final assignment and verify its score clause by clause.
2. Give all 16 scores and a feasible witness plus a matching upper bound
   proving the optimum. Identify which assignments achieve it.
3. State the integer score guaranteed solely by $7m/8$ for this input.
   Separate that guarantee from the stronger score actually obtained.
4. A learner reuses the main input's first-row expectations, counts only
   clauses still undecided, or chooses 1 on a tie without recording the new
   convention. Diagnose each error and repair the trace. Does the main
   formula's failed clause prove unsatisfiability?

Both formulas, the code and the key are public practice material. Record
whether you used the worked case, a branch hint, the key or the code; a
reconstruction after help is not an unseen independent attempt.

### MAX3SAT-B key — Complete branch and optimum evidence

**Task ID:** `max3sat-changed-formula-key`.

There are nine clauses, each false with probability $1/8$ under the initial
independent fair bits, so the expectation is $63/8$. Alternatively, add the
new clause's expectation $7/8$ to the main mean of 7.

Given $x_1=0$, the old total is always 7. The new clause is then
$x_2\lor x_4$, which is true on three of the four equally likely pairs,
giving $7+3/4=31/4$. Given $x_1=1$, the new clause is already true and the
old conditional mean is 7, giving 8. Therefore the first choice is now 1,
not a tie. In that branch the score is 7 when $x_4=0$ and 9 when $x_4=1$;
it does not depend on $x_2,x_3$.

| Fixed prefix before the choice | Next bit | Expectation if 0 | Expectation if 1 | Chosen bit | Retained expectation |
|---|---|---:|---:|---:|---:|
| empty | $x_1$ | $31/4$ | $8$ | 1 | $8$ |
| 1 | $x_2$ | $8$ | $8$ | 0 | $8$ |
| 10 | $x_3$ | $8$ | $8$ | 0 | $8$ |
| 100 | $x_4$ | $7$ | $9$ | 1 | $9$ |

The output `1001` satisfies all nine clauses. The first four are true through
$x_1$, the next four through $x_4$, and the new clause through both $x_1$
and $x_4$. Thus $\operatorname{OPT}(B)=9$: feasibility gives the lower bound
9 and the number of clauses gives the upper bound 9.

| Assignment | Score for $B$ |
|---|---:|
| 0000 | 7 |
| 0001 | 8 |
| 0010 | 7 |
| 0011 | 8 |
| 0100 | 8 |
| 0101 | 8 |
| 0110 | 8 |
| 0111 | 8 |
| 1000 | 7 |
| 1001 | 9 |
| 1010 | 7 |
| 1011 | 9 |
| 1100 | 7 |
| 1101 | 9 |
| 1110 | 7 |
| 1111 | 9 |

These scores sum to 126, whose uniform average is $126/16=63/8$.
The four optimizing assignments are `1001`, `1011`, `1101` and `1111`.
The general expectation bound and integrality guarantee only
$\lceil63/8\rceil=8$ satisfied clauses. The output 9 is better on this
particular input; it is not a new general guarantee of satisfiability.

For either formula, every selected-prefix expectation is the average of
the two next expectations, since the next unresolved bit remains fair.
Choosing the larger one preserves or increases that expectation. Induction
over the four choices ends with a deterministic score at least the
initial expectation. This is a finite proof about exact averages, not a
claim inferred from successful random trials.

### MAX3SAT feedback — Criteria, repairs, and exact reference

**Task ID:** `max3sat-project-feedback`.

Use these descriptive criteria to revise an attempt; they are not a
qualified human grade and do not write a learner assessment record.

| Criterion | Complete evidence | If it fails, repair this |
|---|---|---|
| Input contract | All signed literals in range; exactly three distinct variables per clause; full list and variable order stated | Return to Section 7 and reject repeated or complementary occurrences in this restricted mode |
| Conditional calculation | Both exact expected total scores at each chosen prefix; decided-true clauses still contribute 1 | Recompute a branch from its equally likely remaining completions; a decided-false clause contributes 0 |
| Deterministic construction | Bit order and tie-to-0 convention fixed; final assignment checked against every clause | Rebuild the trace from the first changed decision rather than copying a previous trace |
| Optimum and interpretation | Full 16-row audit or a witness and matching upper bound; approximation distinguished from SAT | Compare `0000` and `1001` on $A$ before treating a failed clause as an impossibility certificate |
| Changed transfer | $63/8$, $31/4$ versus 8, the changed output and integer guarantee explained independently | Add the ninth indicator before conditioning; separate the guaranteed 8 from the observed 9 |

For the three errors in the task: the ninth clause changes the first branch
values to $31/4$ and 8, so the old tie must be replaced. Already true
clauses contribute 1 each to the expected total. If the same known contribution
is omitted from both branch values, their comparison is unchanged, but the
reported total and successive-prefix invariant are wrong. Dropping clauses
newly satisfied by each candidate can also change the decision: at prefix
`100` of $B$, both complete alternatives have no undecided clauses, yet their
total scores are 7 and 9, not a tie at zero. Restore all satisfied clauses.
Choosing 1 on a tie is another valid derandomization policy but does not
reproduce this specified trace. For example, on $A$ that different first
choice leaves the later choice $x_4=1$ available and can reach optimum. The main output's missed clause cannot prove
unsatisfiability because `1001` is an explicit satisfying assignment.

The following single dependency-free JavaScript listing is an exact
reference for these **bounded** cases. It accepts 3 or 4 variables, 1–16
clauses, and exactly three distinct variables in each clause. Those size
limits are a resource policy, not a complexity theorem. It has no
generalized mode for repeated variables or tautologies.

The conditional evaluator sums clause probabilities directly. It uses a
common scale $2^n$: an already true clause contributes $2^n$; otherwise, with
$u$ unassigned distinct literals, its contribution is $2^n(1-2^{-u})$.
For a completely false clause $u=0$, that contribution is zero. The
exhaustive table is a separate check of all assignments, and costs
exponential time in the number of variables if that bound is removed.

```javascript
const cases = [
  {
    id: "max3sat-conditional-expectation-worked",
    variables: 4,
    clauses: [
      [1, 2, 3], [1, 2, -3], [1, -2, 3], [1, -2, -3],
      [-1, 2, 4], [-1, -2, 4], [-1, 3, 4], [-1, -3, 4]
    ]
  },
  {
    id: "max3sat-changed-formula-task",
    variables: 4,
    clauses: [
      [1, 2, 3], [1, 2, -3], [1, -2, 3], [1, -2, -3],
      [-1, 2, 4], [-1, -2, 4], [-1, 3, 4], [-1, -3, 4],
      [1, 2, 4]
    ]
  }
];

function validate(variables, clauses) {
  if (!Number.isInteger(variables) || variables < 3 || variables > 4
      || !Array.isArray(clauses) || clauses.length < 1 || clauses.length > 16) {
    throw new Error("Use 3 or 4 variables and 1..16 clauses.");
  }
  for (const clause of clauses) {
    if (!Array.isArray(clause) || clause.length !== 3
        || [...clause].some(literal => !Number.isInteger(literal)
          || literal === 0 || Math.abs(literal) > variables)
        || new Set(clause.map(Math.abs)).size !== 3) {
      throw new Error("Each clause needs three distinct in-range variables.");
    }
  }
}

function score(clauses, assignment) {
  return clauses.filter(clause => clause.some(literal =>
    assignment[Math.abs(literal) - 1] === (literal > 0 ? 1 : 0))).length;
}

function expected(variables, clauses, prefix) {
  if (!Array.isArray(prefix) || prefix.length > variables
      || [...prefix].some(bit => bit !== 0 && bit !== 1)) {
    throw new Error("Use a Boolean prefix in variable order.");
  }
  const scale = 1n << BigInt(variables);
  let total = 0n;
  for (const clause of clauses) {
    let satisfied = false, unassigned = 0;
    for (const literal of clause) {
      const index = Math.abs(literal) - 1;
      if (index >= prefix.length) unassigned++;
      else if (prefix[index] === (literal > 0 ? 1 : 0)) satisfied = true;
    }
    total += satisfied ? scale : scale - (scale >> BigInt(unassigned));
  }
  return total;
}

function rational(numerator, denominator) {
  function gcd(a, b) { return b === 0n ? a : gcd(b, a % b); }
  const divisor = gcd(numerator, denominator);
  const a = numerator / divisor, b = denominator / divisor;
  return b === 1n ? String(a) : String(a) + "/" + String(b);
}

function analyze(variables, clauses) {
  validate(variables, clauses);
  const scale = 1n << BigInt(variables), assignment = [], trace = [];
  const initial = expected(variables, clauses, []);
  for (let variable = 1; variable <= variables; variable++) {
    const before = expected(variables, clauses, assignment);
    const zero = expected(variables, clauses, [...assignment, 0]);
    const one = expected(variables, clauses, [...assignment, 1]);
    if (zero + one !== 2n * before) throw new Error("Branch average failed.");
    const chosen = one > zero ? 1 : 0;
    trace.push({ prefix: assignment.join(""), variable,
      if0: rational(zero, scale), if1: rational(one, scale), chosen,
      retained: rational(chosen ? one : zero, scale) });
    assignment.push(chosen);
  }
  const rows = Array.from({ length: 2 ** variables }, (_, value) => {
    const bits = Array.from({ length: variables },
      (_, index) => (value >> (variables - 1 - index)) & 1);
    return { assignment: bits.join(""), score: score(clauses, bits) };
  });
  const value = score(clauses, assignment);
  if (BigInt(value) * scale < initial || 8 * value < 7 * clauses.length) {
    throw new Error("Derandomization guarantee failed.");
  }
  const optimum = Math.max(...rows.map(row => row.score));
  return { initial: rational(initial, scale), trace,
    assignment: assignment.join(""), score: value, rows, optimum,
    optimizingAssignments: rows.filter(row => row.score === optimum)
      .map(row => row.assignment) };
}

const reports = cases.map(item => ({ id: item.id,
  variables: item.variables, clauses: item.clauses,
  ...analyze(item.variables, item.clauses) }));
for (const report of reports) console.log(JSON.stringify(report));
```

Running the listing prints the two complete records; agreement is a
reproducibility check on these finite inputs. It does not prove that the
program is correct on unbounded inputs or turn exposed worked answers into
independent proof evidence. The seeded sampling experiment in the original
Section 9 brief is a further implementation exercise; this reference
implements exact expectation, deterministic construction and exhaustive
finite comparison, and makes no empirical sampling claim.

<!-- max3sat-worked-cases:end -->
