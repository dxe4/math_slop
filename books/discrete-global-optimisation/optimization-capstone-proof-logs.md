
# Optimization Proof-Log Capstones

The final act of optimization is not obtaining a promising vector. It is
making a defensible claim about a declared model. This chapter organizes that
act into three capstones: a convex primal--dual dossier, a cut-and-relaxation
dossier, and a global-search tree dossier. Each is substantial enough to
require mathematical design, computation, independent checking, failure
tests, and exposition, but bounded enough to audit completely.

The exact local prerequisites are `verified-optimization-software` and
`separation-branching-strategies`. We also use convex duality, interval error
bounds, rational linear algebra, and the book's chapters on integer and
nonconvex bounds. These projects concern proof objects for optimization
problems. They do not ask for operational deployment or domain-specific
logistics.

## 1. The common proof-log protocol

All three capstones use the same protocol. Keeping this common shell makes
their mathematical differences visible.

### 1.1 Freeze the claim before computing

Write one primary claim with quantifiers and tolerances. Examples are:

- `the supplied feasible point is within epsilon of the global minimum`;
- `each supplied inequality is valid for the declared relaxation and cuts off
  its named point`;
- `the incumbent is globally epsilon-optimal over the bounded mixed domain`.

Do not begin with `the solver will prove optimality`. That is an aspiration,
not a checkable claim. Also list excluded claims, such as uniqueness, stability
under perturbed data, exact feasibility of unrounded measurements, or runtime
performance on a larger problem family.

### 1.2 Canonicalize the model

Choose an unambiguous variable order, objective direction, constraint sense,
and coefficient semantics. Exact decimal input may be stored as signed integer
mantissas and powers of ten; rational input as numerator--denominator pairs.
Normalize denominators to be positive and fractions to lowest terms. Record
whether bounds are closed and which variables are integer.

A canonical model identifier can be obtained by serializing fields in a fixed
order and hashing the resulting bytes. A hash detects accidental mismatch but
does not prove that the serialization matches the prose model. The audit must
inspect that translation once.

### 1.3 Separate producer from checker

The producer may use sophisticated optimization software and heuristic
choices. The checker should be small, deterministic, and based on the proof
contract. It accepts a model and witness; it returns `valid`, `invalid`, or
`inconclusive` with reasons. `Inconclusive` is essential for interval tests or
unsupported certificate forms.

Use exact integer or rational arithmetic when practical. If intervals are
used, state outward-rounding guarantees. Ordinary nearest-rounded arithmetic
may support diagnostics but cannot silently become a rigorous bound.

### 1.4 Build a claim matrix

Every final report includes a table with columns `claim`, `witness`, `checker
test`, `arithmetic`, `result`, and `limitation`. A reader should be able to
trace each sentence containing `optimal`, `feasible`, `valid`, or `infeasible`
to one row. This is both an exposition device and an error detector.

### 1.5 Preserve accessible alternatives

Color, animation, and graphical geometry may supplement evidence but never be
the only carrier. Every plot receives a data table or structured text
alternative. Tree images receive a node table with parent, branch, bound, and
closure reason. Cut diagrams receive the exact inequality and evaluated slack.
Convergence animations, if used, must have pause controls and respect reduced
motion preferences. The proof must remain audit-ready using text and numbers
alone.

### 1.6 Make artifact dependencies explicit

Include a dependency ledger. The final claim depends on checker results; each
checker result names a witness and canonical model; each witness states the
theorem it instantiates. This directed graph must be acyclic and small enough
to inspect. Raw solver traces may point into the graph as provenance, but no
accepted claim may depend only on an unparsed trace. If one artifact changes,
invalidate and recompute every downstream result rather than editing displayed
numbers. The ledger also helps a reviewer distinguish a shared assumption—such
as coefficient semantics—from independent evidence.

### 1.7 Define failure handling

A complete run records malformed input, rejected evidence, unsupported
certificate kinds, inconclusive intervals, and internal checker errors as
different outcomes. Only `valid` supports the associated claim. Preserve the
first failing predicate and enough exact values to diagnose it, while still
running independent checks when partial results are informative. Never replace
an invalid witness automatically without assigning the replacement a new
identity; otherwise the report cannot be reproduced.

### 1.8 Use stable mathematical names

Names should describe roles rather than incidental storage positions. Use
`primal_candidate`, `dual_multiplier`, `safe_lower_bound`, and `closure_reason`
instead of unlabeled arrays or solver-specific column numbers. A separate map
connects these names to producer fields. Stable names make the checker contract
readable and keep a harmless solver-format change from altering the
mathematical artifact. Units and scaling belong beside each named quantity,
especially when residuals from unlike constraints are compared.

## 2. Mini-audits before the projects

The following short audits model the discipline expected in the larger work.

### Worked mini-audit A: primal--dual orientation

For

\[
 \min 2x_1+5x_2\quad\text{subject to }x_1+x_2=3,\quad x\ge0,
\]

take \(x=(3,0)\). With the equality dual written
\(\max 3y\) subject to \(y\le2\) and \(y\le5\), choose \(y=2\).
Exact checks give primal value \(6\), dual value \(6\), primal feasibility,
and dual feasibility. Weak duality closes the gap. The audit records a global
optimum but not uniqueness: every increase in \(x_2\) increases the objective
by \(3x_2\), so uniqueness can in fact be proved separately, but it is not a
consequence of value equality alone in arbitrary convex problems.

### Worked mini-audit B: a false certificate caused by sign convention

Suppose a minimization relaxation has true lower bound \(4\) and incumbent
value \(7\). A report labels the incumbent `lower bound` and the relaxation
`upper bound`, then computes a gap \(-3\) and declares completion. The checker
rejects the field types before using their values: for minimization, a primal
feasible incumbent gives an upper bound and a relaxation or dual certificate
gives a lower bound. Typed bound roles prevent a plausible number from carrying
the wrong theorem.

### Worked mini-audit C: cut validity and separation are independent

The relaxation has \(x_1\le1\) and \(x_2\le1\). The inequality
\(x_1+x_2\le2\) is valid by summing the two rows, but it does not separate
\(\bar x=(1,1)\): the point lies on its boundary. Conversely,
\(x_1+x_2\le1\) separates \((1,1)\) but is not implied by the relaxation.
A complete cut record needs both a validity witness and a strictly positive
violation at the named point.

### Worked mini-audit D: rounded node bounds

A node's exact dual value is represented by a computed enclosure
\([5.9999997,6.0000004]\). For minimization, the left endpoint is a safe lower
bound. If the incumbent is \(6\) and exact optimality is required, this node
cannot be pruned from the enclosure alone because \(5.9999997<6\). Rounding
the display to `6.000` and pruning would discard the directional guarantee.
For an absolute tolerance \(10^{-3}\), however, the node is closable because
\(5.9999997\ge6-10^{-3}\).

### Worked mini-audit E: missing child

A root integer variable satisfies \(x\in\{0,1,2\}\). A logged branch creates
children \(x=0\) and \(x\ge2\). Even if both children are resolved, value
\(x=1\) is uncovered. The tree checker constructs the parent's allowed set and
the union of child sets, finds the missing element, and rejects global
exhaustion. A visually plausible two-way branch is not enough.

## 3. Capstone I: convex primal--dual dossier

### 3.1 Mathematical target

Choose a rational convex quadratic program with \(4\le n\le20\):

\[
 \begin{aligned}
 \min_x\quad &\tfrac12x^TQx+c^Tx\\
 \text{subject to}\quad &Ax=b,\\
 &Gx\le h,\\
 &\ell\le x\le u.
 \end{aligned} \tag{1}
\]

Require \(Q=R^TR\) for a supplied rational matrix \(R\), which makes convexity
directly checkable. Construct the instance so that it is feasible and neither
all constraints nor all variables are active. The primary claim is that a
logged primal point is globally \(\varepsilon\)-optimal for a declared rational
\(\varepsilon\). An exact KKT witness may close the gap to zero; otherwise
rigorous primal and dual bounds must establish the stated tolerance.

### 3.2 Required artifacts

Submit:

1. `convex-model`: canonical matrices, vectors, bounds, units if any, and
   model identifier;
2. `convex-witness`: primal point, equality multipliers, nonnegative inequality
   and bound multipliers, plus a claimed lower bound;
3. `convex-checker-contract`: schemas and mathematical acceptance predicates;
4. `convex-check-results`: exact residuals, objectives, complementary products,
   and pass/fail outcomes;
5. `convex-negative-tests`: at least four corrupted witnesses;
6. `convex-report`: model derivation, claim matrix, result, and exclusions;
7. `convex-trace-table`: iteration, primal residual, dual residual, objective,
   and gap, serving as the numerical alternative to any plot.

The solver transcript is optional and does not replace these artifacts.

### 3.3 Checker obligations

The checker first validates types, dimensions, finite values, denominator
normalization, and model identity. It checks \(Q=R^TR\), hence \(Q\succeq0\).
It evaluates primal equalities and inequalities in exact rational arithmetic.
For multipliers \(y\), \(\lambda\ge0\), and lower/upper-bound multipliers, it
checks the stationarity equation using the declared Lagrangian signs. It then
checks complementary slackness exactly or verifies rigorous residual bounds
that imply the advertised primal--dual gap.

If exact KKT conditions pass, convexity makes them sufficient for global
optimality. If only a gap bound passes, the report claims objective accuracy,
not exact equality. The checker must display its Lagrangian convention; sign
errors are common enough that prose alone is inadequate.

### 3.4 Claim limits and audit questions

Acceptance does not prove uniqueness unless positive curvature on all feasible
directions is checked. It does not prove that rounded physical data represent
reality, only that the declared rational model has the certified property. It
does not establish solver speed or reliability on other instances.

The independent audit should answer: Does the prose model match the canonical
model? Is every multiplier attached to the correct constraint? Are objective
and bound directions consistent? Does changing one coefficient invalidate the
witness? Does the accessibility table contain all plotted values?

### 3.5 Completion standard

The capstone passes when an independent reader can run or manually reproduce
the acceptance predicate, identify at least one rejected mutation, and derive
the final claim from the reported inequalities without trusting the optimizer.

## 4. Capstone II: separation and relaxation dossier

### 4.1 Mathematical target

Choose a bounded rational mixed-integer linear set with \(4\le n\le16\) and at
least two integer variables. Produce a fractional point \(\bar x\) feasible for
the initial LP relaxation. Generate between three and eight cuts. At least two
must be certified by nonnegative aggregation of existing rational inequalities;
one may use a stated integrality theorem whose hypotheses are fully checked.

The primary claim is not that the cuts solve the integer problem. It is:
`every logged cut is valid for its declared set, every cut marked separating
violates its named fractional point, and the final relaxation bound is valid`.
Optionally compare bound improvement, clearly labeling it as instance-specific
evidence.

### 4.2 Required artifacts

Submit:

1. `cut-model`: original mixed-integer model and explicit initial relaxation;
2. `fractional-points`: each named point and exact relaxation-feasibility
   residuals;
3. `cut-records`: normalized \((\alpha,\beta)\), derivation kind, validity
   witness, target point, and exact violation;
4. `relaxation-sequence`: ordered row sets and rigorously valid lower bounds
   for minimization;
5. `cut-checker-contract` and deterministic results;
6. at least one valid-but-nonseparating cut and one separating-but-invalid
   mutation, both correctly classified;
7. `cut-report` with claim matrix and exact coefficient tables.

If a geometric plot is included, its alternative must list every boundary
line, feasible-side convention, point coordinate, and slack. Color cannot be
the sole distinction between valid and invalid cuts.

### 4.3 Checker obligations

For an aggregation cut valid for \(Ax\le b\), the record provides \(u\ge0\)
with

\[
 u^TA=\alpha^T,\qquad u^Tb\le\beta. \tag{2}
\]

The checker verifies (2) exactly, then evaluates
\(\alpha^T\bar x-\beta\). Positive violation proves separation. A zero or
negative value means the valid cut does not separate that point.

For an integrality-derived cut, the checker must implement the precise theorem,
not a label such as `Gomory`. It checks coefficient signs, integrality of the
named variables, row provenance, and every rounding operation. If the checker
does not support the derivation, it returns `unsupported`; it must not infer
validity from a solver's cut-family name.

Each relaxation bound needs its own primal or dual certificate. A reported LP
objective rounded upward is unsafe as a minimization lower bound. Exact dual
witnesses or downward interval endpoints are acceptable.

### 4.4 Claim limits and audit questions

A valid cut can be weak, redundant, or harmful to numerical conditioning.
Separation at one point says nothing about all fractional points. A stronger
logged lower bound on one instance is not a complexity result or a universal
algorithm comparison.

The audit asks: Is the validity set the initial relaxation, a later relaxation,
or the integer hull? Are all source rows present at the moment of derivation?
Did normalization reverse an inequality? Does each strict violation remain
strict under the checking arithmetic? Does deleting a multiplier or changing
one sign lead to rejection?

### 4.5 Completion standard

The capstone passes when every accepted cut has a replayable derivation, every
separation claim has an exact positive violation, the final lower bound has a
directionally safe certificate, and the report distinguishes validity,
separation, strength, and computational usefulness.

## 5. Capstone III: global tree proof dossier

### 5.1 Mathematical target

Choose one bounded problem with discrete branching and at least one nonlinear
or convex-relaxation component, small enough that the complete proof tree has
between 8 and 128 leaves. State a minimization objective, compact variable
domain, exact discrete domains, and a rational absolute tolerance
\(\varepsilon\ge0\). The primary claim is that a logged incumbent is globally
\(\varepsilon\)-optimal for the declared model.

This target may use a mixed-integer convex quadratic or a factorable bounded
nonconvex model. If nonconvex functions appear, interval extensions and domain
preconditions must be specified. The tree must be complete; a time-limited
partial search does not satisfy the project.

### 5.2 Required artifacts

Submit:

1. `tree-model`: canonical objective, constraints, domains, and tolerance;
2. `incumbent-record`: exact or interval-enclosed point, original feasibility
   checks, and a safe upper objective bound \(U\);
3. `tree-nodes`: stable node identifier, parent, branch predicate, region,
   lower bound \(L_N\), bound witness, and closure reason;
4. `tree-coverage`: child-union checks for every internal node;
5. `leaf-certificates`: infeasibility, bound closure, or exact enumeration;
6. `tree-checker-contract`, results, and at least six negative mutations;
7. `tree-report` and a complete text table alternative to any tree diagram.

The node table is the authoritative accessibility artifact. Indentation may
show depth, but parent identifiers must carry structure without relying on
visual spacing.

### 5.3 Global invariant and checker obligations

Let \(\mathcal A\) denote unresolved nodes and \(\mathcal R\) all resolved non-infeasible leaf regions retained in the ledger. At all times,
their regions cover every original feasible point. Every member of \(\mathcal A\cup\mathcal R\) has a
valid lower bound \(L_N\), and an original-feasible incumbent supplies a finite safe upper bound \(U\). Retain every bound in \(\mathcal R\), including tolerance-pruned bounds after \(\mathcal A\) becomes empty.
Define

\[
 L=\min\bigl(\{U\}\cup\{L_N:N\in\mathcal A\cup\mathcal R\}\bigr).
\]

Then \(L\le z^*\le U\). At completion, every leaf is resolved and every leaf
bound satisfies \(L_N\ge U-\varepsilon\), or the leaf is infeasible. This
proves \(U-z^*\le\varepsilon\).

The checker reconstructs each child region and proves coverage relative to the
parent. It checks incumbent feasibility in the original model. It verifies
every lower bound from a dual, interval, convex underestimator, or enumeration
witness. It rejects cycles, duplicate identifiers, orphan nodes, unrecognized
closure reasons, and non-finite bounds. A node cannot be closed merely because
the producer marks it closed.

### 5.4 Claim limits and audit questions

An \(\varepsilon\)-optimal objective does not imply the returned variables are
near every optimizer. A proof over a bounded box does not extend beyond that
box. Interval certificates inherit the declared elementary-function and
rounding assumptions. Hash-linked logs inherit the stated hash-identity
assumption unless the complete contents are also checked directly.

The audit asks: Do sibling predicates cover all parent-feasible states? Are
integer and real branching rules distinguished? Can every pruned node trace to
a safe lower bound? Is the incumbent checked after undoing presolve and
scaling? Does raising one lower bound artificially cause a negative test to
fail? Is the tolerance applied in the correct direction?

### 5.5 Completion standard

The capstone passes when deleting any leaf breaks coverage or is detected,
each surviving leaf has a replayable closure certificate, and exact arithmetic
or outward enclosures establish \(L\le z^*\le U\) with
\(U-L\le\varepsilon\). A second reader must be able to audit the proof without
watching an animation or having access to the producing solver.

## 6. Cross-project review and scoring

Use the same review rubric for all projects.

| Dimension | Full-credit evidence |
|---|---|
| Mathematical model | canonical data agree with prose; domains and direction explicit |
| Theorem use | every hypothesis mapped to a checked field or proved statement |
| Certificate | witness is sufficient for the claim and independently replayable |
| Arithmetic | exactness or outward enclosure documented; unsafe rounding excluded |
| Negative tests | plausible corruptions rejected for the right reasons |
| Claim discipline | conclusion and exclusions match checker acceptance exactly |
| Reproducibility | deterministic checker inputs and outcomes preserved |
| Accessibility | complete numerical/text alternatives carry all proof information |

A beautiful visualization cannot compensate for a missing bound witness. A
large solver log cannot compensate for an undefined claim. Conversely, a tiny
exact instance can earn full mathematical credit when its proof contract and
audit are complete.

Cross-review is valuable: one author produces the witness and another tries to
invalidate it. The reviewer should begin with model identity and theorem
hypotheses, not with superficial agreement of printed objectives. Any revised
witness receives a new identifier and a complete checker run; do not patch a
result table by hand.

## 7. Preparation exercises with complete solutions

### Exercise 1: write a claim matrix row

A rational LP witness contains primal and dual feasible points with objectives
\(31/7\) and \(30/7\). Write the strongest generic conclusion and one excluded
claim.

**Solution.** For minimization, weak duality gives
\(30/7\le p^*\le31/7\), so the primal point is globally within \(1/7\) in
objective value. Exact optimality is excluded because the certified gap is
nonzero. Variable proximity is also excluded without a growth condition.

### Exercise 2: check a quadratic convexity witness

Let
\(R=\begin{bmatrix}1&2\\0&1\end{bmatrix}\). Compute \(Q=R^TR\) and explain
why it certifies convexity of \(\tfrac12x^TQx+c^Tx\).

**Solution.** Direct multiplication gives
\(Q=\begin{bmatrix}1&2\\2&5\end{bmatrix}\). For every \(v\),
\(v^TQv=v^TR^TRv=\|Rv\|_2^2\ge0\), so \(Q\succeq0\). Therefore the quadratic
objective is convex. Since \(R\) is nonsingular, it is actually positive
definite, though only semidefiniteness is needed for convexity.

### Exercise 3: classify two cuts

The relaxation is \(0\le x_1,x_2\le1\), and the target is
\(\bar x=(3/4,3/4)\). Classify \(x_1+x_2\le2\) and
\(x_1+x_2\le1\).

**Solution.** The first is valid by summing the upper bounds, but its slack at
\(\bar x\) is \(2-3/2=1/2\), so it does not separate. The second is violated
by \(1/2\), but it is not valid for the relaxation because \((1,1)\) is
relaxation-feasible and violates it. Additional integrality structure might
make it valid for a different declared set, but none is given.

### Exercise 4: safe use of an interval bound

A minimization node's optimal value is enclosed in \([8.02,8.07]\), the
incumbent upper bound is \(8.05\), and \(\varepsilon=0.04\). May the node close?

**Solution.** The safe lower bound is \(8.02\). Gap closure requires
\(L_N\ge U-\varepsilon=8.01\), which holds, so the node may close for the
\(0.04\)-optimality claim. It may not close for exact optimality merely from
this enclosure because \(8.02<8.05\).

### Exercise 5: branch coverage

An integer parent has \(x\in\{-2,-1,0,1,2\}\). Its children impose
\(x\le0\) and \(x\ge0\). Do they cover the parent, and is overlap a problem?

**Solution.** Their union covers every parent value; \(x=0\) occurs in both.
Overlap does not invalidate coverage, though it may duplicate work and must not
cause the checker to count an incumbent or proof twice. Disjoint branching
with \(x\le0\) and \(x\ge1\) would also cover the integer parent.

### Exercise 6: KKT sufficiency boundary

An exact KKT witness is supplied for minimizing a differentiable function over
linear constraints. What additional structural fact is needed before KKT
conditions generically prove global optimality?

**Solution.** Convexity is needed: the objective must be convex and the
inequality constraint functions must define a convex feasible set under the
chosen formulation, with affine equalities. Under the appropriate convex KKT
setting, a feasible point and dual multipliers satisfying stationarity, dual
feasibility, and complementarity prove global optimality. Without convexity,
KKT conditions are generally only local first-order conditions.

### Exercise 7: model digest limitation

A witness's stored model digest matches the checker input. Does that prove the
checker input is the model described in a paper?

**Solution.** No. The match proves only that the witness is attached to those
serialized bytes, under the digest assumption. A human or separately verified
translation must establish that the bytes encode the paper's variables,
objective, constraints, and units correctly.

### Exercise 8: incomplete nonlinear domain

An interval tree verifies \(\log x\) on child box \([0.1,1]\), but the root
declares \(x\in[-1,1]\) and no other child exists. What fails?

**Solution.** Coverage fails: the child omits \([-1,0.1)\). Moreover,
\(\log x\) is undefined for \(x\le0\), so the original mathematical model
needs a domain constraint or a defined extended-value convention. A checker
must reject the proof rather than treating undefined evaluations as
infeasibility without a theorem.

### Exercise 9: accessibility audit

A tree plot uses green leaves for infeasible nodes and blue leaves for bound
closures, with no labels. Give a sufficient text alternative.

**Solution.** Provide a table with one row per node containing identifier,
parent, branch predicate, depth, lower bound and its direction, closure reason,
certificate identifier, and checker result. Include the incumbent and tolerance
used for bound closure. This reconstructs both tree structure and mathematical
meaning without color.

### Exercise 10: negative mutation design

Give three mutations that test logically different parts of a global tree
checker.

**Solution.** Delete one child to test coverage; increase a leaf lower bound
without changing its witness to test bound verification; and perturb the
incumbent so that one original constraint is violated to test primal
feasibility. These target topology, lower-bound arithmetic, and the global
upper-bound witness respectively.

### Exercise 11: exact integer closure

An integer-valued minimization problem has incumbent \(U=25\) and every open
node has a rigorous lower bound greater than \(24\). What exact conclusion is
available?

**Solution.** Every feasible objective in every open node is an integer greater
than \(24\), hence at least \(25\). The feasible incumbent attains \(25\), so
it is globally optimal. The proof uses both integrality of the objective and
exhaustive node coverage.

### Exercise 12: producer--checker agreement

The producer and checker both use the same floating-point library and return
identical residuals. Is that independent verification?

**Solution.** It is useful reproduction evidence, but it may repeat a shared
rounding or implementation error. Stronger verification uses a smaller code
path and exact rational or outward-rounded interval arithmetic. The [verified-computation chapter](../numerical-mathematics-error-algorithms/verified-interval-computation.md) supplies the enclosure hypotheses. Independence
is a spectrum that the report should describe honestly.

## 8. Final submission checklist

Before declaring a capstone complete, verify the following.

- The primary claim has explicit quantifiers, objective direction, and
  tolerance.
- Canonical data and prose model agree under a recorded variable order.
- Every theorem hypothesis is checked or cited to a proved artifact.
- Every accepted witness is tied to the exact model identity.
- Bounds are directionally safe; displays are not mistaken for enclosures.
- The checker rejects malformed data and returns `inconclusive` when evidence
  is insufficient.
- Negative tests target model identity, arithmetic, theorem hypotheses, and
  structural coverage.
- Every figure has a complete numerical or structured-text alternative.
- The conclusion names excluded claims and unresolved assumptions.
- A reviewer can reproduce the proof without the producing optimizer.

The three projects form a progression. The first certifies a point by convex
duality. The second certifies transformations of a relaxation. The third
certifies exhaustive global search. Together they show what trustworthy
optimization software should ultimately produce: not authority by status
message, but a finite, claim-sized argument that survives independent audit.
