var e=`---
parent_id: book-discrete-global-optimisation
matter_id: verified-optimization-software
title: "Verified Optimization Software and Proof Logs"
level: graduate
estimated_minutes: 235
license: CC BY-SA 4.0
---

# Verified Optimization Software and Proof Logs {#section-1-verified-optimization-software-and-proof-logs}

An optimizer may print \`optimal\`, but a mathematical conclusion does not follow
from a status word. The conclusion follows from evidence that can be checked
against a stated model and theorem. This chapter develops proof-log contracts:
small, stable records that connect a solver run to independently checkable
claims. The goal is not to verify every line of an optimizer. It is to shrink
the trusted boundary around the final claim.

The local prerequisites are the chapters \`certificates-diagnostics\` and
\`nonconvex-global-bounds\`, together with graduate linear algebra, convex
duality, floating-point error analysis, and elementary integer programming.
We use the minimization convention unless explicitly stated. The scope is
optimization mathematics and verification; scheduling, routing, logistics,
and operational decision policy are outside this chapter.

<a id="section-15-1-claims-witnesses-and-checkers"></a>
## 1. Claims, witnesses, and checkers {#section-17-1-claims-witnesses-and-checkers}

A **claim** is a quantified mathematical statement about a particular model.
A **witness** is finite data intended to imply that claim. A **checker** is a
specified computation that accepts or rejects a witness. These are different
objects. A feasible point is a witness; \`feasible within tolerance\` is a
claim; evaluating scaled residuals is part of a checker.

A proof-log contract should state six items.

1. **Model identity:** variables, objective, constraints, domains, coefficient
   representation, and a digest or canonical serialization.
2. **Claim language:** for example, exact feasibility, an
   \\(\\varepsilon\\)-objective bound, or absence of an improving node.
3. **Witness schema:** required arrays, dimensions, signs, units, and ordering.
4. **Checking arithmetic:** rational, integer, directed-rounding interval, or
   ordinary floating-point arithmetic with an explicitly non-rigorous result.
5. **Acceptance predicate:** inequalities the checker actually tests.
6. **Claim boundary:** what acceptance proves and what it does not prove.

Version numbers, seeds, and solver settings aid reproduction but are not
mathematical premises unless the checker uses them. Conversely, a theorem
hypothesis cannot be replaced by a version string.

<a id="section-39-worked-example-1-an-exact-linear-primal-certificate"></a>
### Worked example 1: an exact linear primal certificate {#section-41-worked-example-1-an-exact-linear-primal-certificate}

Consider

\\[
 \\min 3x_1+2x_2\\quad\\text{subject to}\\quad
 x_1+x_2\\ge4,\\quad x_1,x_2\\ge0.
\\]

The witness \\(x=(0,4)\\) is serialized as two rational numbers. An exact
checker evaluates \\(x_1+x_2-4=0\\), \\(x_1=0\\), and \\(x_2=4\\), so feasibility is
proved. It also evaluates the objective as \\(8\\). Acceptance proves
\`there exists a feasible point of value 8\`; it does not prove optimality.
That last sentence is part of the contract, not an optional warning.

<a id="section-54-2-primal-and-dual-proof-objects"></a>
## 2. Primal and dual proof objects {#section-56-2-primal-and-dual-proof-objects}

For the convex problem

\\[
 p^*=\\inf_x\\{f_0(x):f_i(x)\\le0, Ax=b\\},
\\]

a primal witness \\(\\hat x\\) supplies an upper bound
\\(p^*\\le f_0(\\hat x)\\) when feasibility is established. Multipliers
\\(\\lambda\\ge0\\) and \\(\\nu\\) define

\\[
 L(x,\\lambda,\\nu)=f_0(x)+\\sum_i\\lambda_i f_i(x)
                     +\\nu^T(Ax-b),
 \\qquad q(\\lambda,\\nu)=\\inf_x L(x,\\lambda,\\nu).
\\]

Dual feasibility and a certified lower estimate \\(d\\le q\\) imply
\\(d\\le p^*\\). Thus \\(f_0(\\hat x)-d\\le\\varepsilon\\) proves that \\(\\hat x\\) is
\\(\\varepsilon\\)-optimal in objective value. It does not bound variable error
without a growth condition.

For a standard-form linear program

\\[
 \\min c^Tx\\quad\\text{subject to }Ax=b, x\\ge0,
\\]

the dual is \\(\\max b^Ty\\) subject to \\(A^Ty\\le c\\). A compact proof log stores
\\(x,y\\), exact dimensions, primal and dual residuals, and both objectives.
With rational input and rational witnesses, a checker can perform every test
exactly. With binary floating-point witnesses, the checker must either convert
their exact represented values to rationals or enclose all operations with
directed rounding.

<a id="section-90-worked-example-2-a-primal-dual-equality-certificate"></a>
### Worked example 2: a primal--dual equality certificate {#section-92-worked-example-2-a-primal-dual-equality-certificate}

Let

\\[
 A=\\begin{bmatrix}1&1\\end{bmatrix},\\quad b=4,
 \\quad c=\\begin{bmatrix}3\\\\2\\end{bmatrix}.
\\]

Take \\(x=(0,4)\\) and \\(y=2\\). Then \\(Ax=b\\), \\(x\\ge0\\), and
\\(A^Ty=(2,2)^T\\le(3,2)^T=c\\). The primal and dual values are both \\(8\\).
Weak duality gives \\(8=b^Ty\\le p^*\\le c^Tx=8\\), so \\(x\\) is globally
optimal. No appeal to a solver's search history is needed.

<a id="section-104-3-interval-certificates-and-floating-point-boundaries"></a>
## 3. Interval certificates and floating-point boundaries {#section-106-3-interval-certificates-and-floating-point-boundaries}

Suppose the desired exact test is \\(g(x)\\le0\\), but \\(x\\) and the coefficients
are stored as floating-point values. Computing a rounded number
\\(\\hat g\\le 0\\) is not generally a proof. If the total rounding error is unknown,
the exact value could lie on the other side of zero.

An interval checker replaces each input by an enclosure and each arithmetic
operation by an outward-rounded enclosure. If the resulting interval
\\(G(X)=[\\underline g,\\overline g]\\) contains every exact value of \\(g\\) over
the input box \\(X\\), then \\(\\overline g\\le0\\) proves the inequality throughout
\\(X\\). If \\(0\\in G(X)\\), the result is **inconclusive**, not false. Subdivision,
a better expression, or higher precision may sharpen the enclosure.

The trusted computing base now includes the parser, interval primitives,
rounding-mode control, and the theorem connecting the interval extension to
the exact expression. Compiler transformations that reassociate arithmetic or
silently use fused operations must respect that contract. A log should record
the arithmetic mode and whether underflow, overflow, or undefined operations
occurred.

<a id="section-125-worked-example-3-a-boundary-that-decimal-output-cannot-"></a>
### Worked example 3: a boundary that decimal output cannot settle {#section-127-worked-example-3-a-boundary-that-decimal-output-cannot-}

The exact constraint is \\(x^2\\le2\\), and a file reports
\\(x=1.4142135623730951\\). A nearest-rounded evaluation may display
\\(x^2-2=4.44\\times10^{-16}\\), but that display alone proves neither exact
feasibility nor a meaningful violation of a decimal value interpreted with
uncertainty. If the token denotes the exact binary64 number, rationalizing its
bits and squaring exactly settles the sign. If it denotes a measured decimal
known only within \\(10^{-15}\\), the checker must evaluate the entire input
interval. Model semantics therefore precede residual arithmetic.

<a id="section-136-4-separation-certificates"></a>
## 4. Separation certificates {#section-138-4-separation-certificates}

Let \\(P=\\{x:Ax\\le b\\}\\) be a rational polyhedron and let \\(\\bar x\\) be a
candidate point. A separating-cut witness \\((\\alpha,\\beta)\\) supports two
tests:

\\[
 \\alpha^Tx\\le\\beta\\quad\\text{for every }x\\in P,
 \\qquad \\alpha^T\\bar x>\\beta. \\tag{1}
\\]

The second test is direct. The first needs a validity proof. One useful Farkas
witness is \\(u\\ge0\\) satisfying

\\[
 u^TA=\\alpha^T,\\qquad u^Tb\\le\\beta. \\tag{2}
\\]

Indeed, \\(Ax\\le b\\) implies
\\(\\alpha^Tx=u^TAx\\le u^Tb\\le\\beta\\). A log containing only the cut does not
establish validity. A log containing \\(u\\) lets a small exact checker establish
it for the declared linear relaxation.

For an integer model, validity for the continuous relaxation is sufficient but
not necessary. A cut derived using integrality may need a different theorem and
witness. The contract must name that rule and its preconditions, including
which variables are integral. \`Cut accepted by solver\` is not a theorem.

<a id="section-164-worked-example-4-checking-a-cut-multiplier"></a>
### Worked example 4: checking a cut multiplier {#section-166-worked-example-4-checking-a-cut-multiplier}

Let \\(P\\subset\\mathbb R^2\\) be defined by

\\[
 x_1+x_2\\le3,\\quad x_1\\le2,\\quad x_2\\le2.
\\]

The proposed cut is \\(2x_1+x_2\\le5\\). Choose multipliers \\(u=(1,1,0)\\).
They are nonnegative, their weighted left side is
\\((x_1+x_2)+x_1=2x_1+x_2\\), and their weighted right side is \\(3+2=5\\).
Thus (2) proves validity. At \\(\\bar x=(2,2)\\), the left side is \\(6>5\\), so
the cut separates that candidate. The certificate says nothing about whether
the cut is computationally useful.

<a id="section-179-5-tree-certificates-for-global-search"></a>
## 5. Tree certificates for global search {#section-181-5-tree-certificates-for-global-search}

A branch-and-bound proof is a finite covering argument. Each node represents a
region \\(D_N\\). Every nonterminal node must have children whose regions cover
the parent's feasible points. Every leaf must be resolved by one of a small
number of checkable reasons:

- a verified infeasibility certificate;
- a valid lower bound \\(L_N\\ge U-\\varepsilon\\) for minimization;
- an exact exhaustive enumeration of the remaining discrete states.

Here \\(U\\) is the value of an originally feasible incumbent. The tree checker
may accept a verified feasible point to lower \\(U\\), but that update does not
resolve its leaf: the leaf still needs infeasibility, a valid bound closing the
declared gap, or exhaustive enumeration. The checker
must reconstruct coverage, not merely count nodes. A binary integer branch
\\(x_j\\le k\\) versus \\(x_j\\ge k+1\\) covers all integral values, but leaves a
gap for real \\(x_j\\). An interval split \\([a,m]\\cup[m,b]=[a,b]\\) covers real
values, with endpoint conventions made explicit.

The proof log can be a directed acyclic structure if identical subproblems are
shared, but hashes then need canonical node content and collision-resistant
identity assumptions. For purely mathematical archival evidence, storing the
explicit finite tree avoids making cryptographic collision resistance a
premise of the optimization theorem.

<a id="section-205-worked-example-5-a-four-leaf-integer-proof"></a>
### Worked example 5: a four-leaf integer proof {#section-207-worked-example-5-a-four-leaf-integer-proof}

Minimize \\((x-1)^2+(y-2)^2\\) over \\(x,y\\in\\{0,1\\}\\). A root branch on \\(x\\)
and a second branch on \\(y\\) at each child gives four leaves. Exact evaluation
produces values \\(5,2,4,1\\) at \\((0,0),(0,1),(1,0),(1,1)\\). The incumbent
\\((1,1)\\) has value \\(1\\); exhaustive leaf coverage proves global optimality.
A log that contains the four values but omits the domain declaration would not
prove exhaustion.

<a id="section-214-6-proof-log-architecture"></a>
## 6. Proof-log architecture {#section-216-6-proof-log-architecture}

A robust log is layered rather than a transcript of internal events.

**Problem layer.** Store a canonical mathematical model. Preserve exact
decimal or rational coefficient tokens where that is their intended meaning.
Record objective direction, domains, and transformations. If presolve replaces
the model, provide a reconstruction map or make the claim only about the
presolved model.

**Witness layer.** Store primal vectors, multipliers, interval boxes, cut
multipliers, bound derivations, and tree edges. Every array carries dimensions
and a stable ordering. Sparse matrices specify index base and duplicate-entry
semantics.

**Checker layer.** Publish the acceptance predicate and arithmetic. A checker
must reject missing fields, non-finite values, shape mismatches, invalid signs,
and unsupported expression nodes before mathematical evaluation. It should
fail closed: an unknown certificate kind yields \`unsupported\`, never \`valid\`.

**Report layer.** Translate checker outcomes into claim-sized prose. Preserve
\`valid\`, \`invalid\`, and \`inconclusive\` as distinct states. Record the checker
version and a digest of its input, but keep diagnostic metadata out of the
mathematical kernel when possible.

An event log is useful for debugging, while a proof log is useful for
verification. The former may be gigabytes and depend on solver internals. The
latter should contain only the data needed by the acceptance theorem.

<a id="section-243-7-adversarial-validation-of-a-checker"></a>
## 7. Adversarial validation of a checker {#section-245-7-adversarial-validation-of-a-checker}

A checker deserves tests aimed at its assumptions. Useful mutations include:

- change one coefficient after witness generation;
- permute columns without permuting the witness;
- replace a finite number by \`NaN\` or infinity;
- delete one leaf or duplicate a branch;
- reverse an inequality or objective direction;
- perturb a dual multiplier below zero;
- provide an interval with reversed endpoints;
- exploit an integer overflow in an index or rational numerator.

Positive examples show that the format is usable. Negative tests show that the
checker rejects near-miss evidence. Neither replaces a proof of the checker,
but both expose dangerous mismatches between implementation and contract.

<a id="section-260-worked-example-6-detecting-a-model-identity-failure"></a>
### Worked example 6: detecting a model-identity failure {#section-262-worked-example-6-detecting-a-model-identity-failure}

A valid LP certificate has \\(c=(3,2)\\), \\(x=(0,4)\\), and \\(y=2\\). Someone
changes the first objective coefficient to \\(1\\) but reuses the proof file.
Feasibility still passes and the old dual vector still satisfies
\\((2,2)\\le(3,2)\\), but it is not dual feasible for the new vector because
\\(2\\nleq1\\). An exact checker rejects it. More importantly, a model digest
would reject the mismatch before arithmetic. Witnesses are model-relative.

<a id="section-269-8-infeasibility-and-unboundedness-certificates"></a>
## 8. Infeasibility and unboundedness certificates {#section-271-8-infeasibility-and-unboundedness-certificates}

The absence of a returned feasible point does not prove infeasibility. A
proof-log contract needs a positive witness for the alternative claim. For a
linear system

\\[
 Ax\\le b,
\\]

one Farkas form says exactly one of the following can hold: there exists an
\\(x\\) with \\(Ax\\le b\\), or there exists \\(y\\ge0\\) with
\\(A^Ty=0\\) and \\(b^Ty<0\\). The second witness is easy to check. If both were
true, multiplying \\(Ax\\le b\\) by \\(y\\ge0\\) would give
\\(0=y^TAx\\le y^Tb<0\\), a contradiction.

Strict negativity requires care in floating-point arithmetic. A displayed
value of \\(-10^{-16}\\) is not rigorous evidence unless its error is bounded.
An exact rational witness or an interval for \\(b^Ty\\) whose upper endpoint is
strictly negative closes the proof. Scaling \\(y\\) by a positive constant does
not change validity, so normalizing a nonzero component can keep rational
numerators manageable. The normalization itself is not a theorem premise.

Unboundedness also needs a witness. For the standard-form linear program

\\[
 \\min c^Tx\\quad\\text{subject to }Ax=b, x\\ge0,
\\]

a feasible point \\(x_0\\) and a ray \\(d\\) satisfying

\\[
 Ad=0,\\qquad d\\ge0,\\qquad c^Td<0
\\]

prove that \\(x_0+td\\) is feasible for every \\(t\\ge0\\) and that its objective
tends to \\(-\\infty\\). A ray without a feasible base point proves only that the
homogeneous recession conditions hold, not that the original feasible set is
nonempty. For nonlinear problems, an unboundedness certificate needs a
problem-specific theorem; borrowing the linear ray test is unsound.

<a id="section-310-worked-example-7-exact-infeasibility-and-unboundedness-"></a>
### Worked example 7: exact infeasibility and unboundedness witnesses {#section-312-worked-example-7-exact-infeasibility-and-unboundedness-}

The inequalities \\(x\\le0\\) and \\(-x\\le-1\\) are inconsistent. With
\\(A=(1,-1)^T\\), \\(b=(0,-1)^T\\), and \\(y=(1,1)\\), we have
\\(y\\ge0\\), \\(A^Ty=1-1=0\\), and \\(b^Ty=-1<0\\). This proves infeasibility
exactly.

For a separate program, minimize \\(-x_1\\) subject to
\\(x_1-x_2=0\\) and \\(x\\ge0\\). The point \\(x_0=(0,0)\\) is feasible, and
\\(d=(1,1)\\) satisfies \\((1,-1)d=0\\), \\(d\\ge0\\), and
\\((-1,0)d=-1<0\\). Hence \\(x_0+td=(t,t)\\) proves unboundedness. The two logs
use different witness schemas because \`infeasible\` and \`unbounded\` are
different mathematical claims.

<a id="section-324-9-transformations-presolve-and-reconstruction"></a>
## 9. Transformations, presolve, and reconstruction {#section-326-9-transformations-presolve-and-reconstruction}

Optimization software commonly fixes variables, removes redundant equations,
scales rows, substitutes expressions, and changes objective constants. These
operations can improve the solve while obscuring the model to which a
certificate applies. A rigorous pipeline handles each transformation in one
of two ways.

The first option is **proof-producing transformation**. Each step emits a
small equivalence or implication witness. Substitution records the defining
equation; row deletion records a nonnegative linear combination or rank
argument; bound tightening records its derivation. The checker composes these
witnesses and maps a certificate back to the original model.

The second option is **restricted claim scope**. The report explicitly claims
a result only for the transformed model and supplies that complete model. This
may be mathematically valid, but it is usually weaker than the question a user
intended to ask. A sentence saying \`presolve preserves equivalence\` is not an
artifact when the particular transformations are unavailable.

Reconstruction is especially important for dual multipliers. Eliminating a
row or scaling it changes the associated multiplier. A vector that satisfies
the reduced stationarity equations need not have the right dimension or signs
for the original system. Either reconstruct original multipliers and check
them from scratch or derive the final bound directly from the reduced model
plus a checked equivalence map.

<a id="section-351-worked-example-8-objective-constants-under-substitution"></a>
### Worked example 8: objective constants under substitution {#section-353-worked-example-8-objective-constants-under-substitution}

Suppose the original model has equality \\(x_2=2-x_1\\) and objective
\\(3x_1+x_2\\). Substitution produces the reduced objective
\\(2x_1+2\\). If the reduced solver reports optimum \\(4\\), dropping the constant
during reconstruction would report \\(2\\), even though the optimizer itself is
unchanged. A proof record stores both the affine map
\\(x=(z,2-z)\\) and objective identity
\\(3z+(2-z)=2z+2\\). The original-model checker evaluates the reconstructed
point and objective independently.

<a id="section-362-10-streaming-archival-and-deterministic-replay"></a>
## 10. Streaming, archival, and deterministic replay {#section-364-10-streaming-archival-and-deterministic-replay}

Large searches may generate more evidence than memory can hold. A streaming
producer can write completed node certificates incrementally, but archival
correctness requires explicit framing, checksums for corruption detection,
and a final index. A truncated stream must never parse as a complete proof.
Include a required end record containing the root identifier, record count,
and accumulated content identity; absence of that record means incomplete.

Deterministic replay means identical proof input yields identical checker
outcome. It does not require the producing solver to revisit nodes in the same
order. Sort sparse indices canonically, define rational normalization, and
avoid dependence on locale or unordered-map iteration. If parallel checking is
allowed, the final logical result should be order independent and diagnostics
should retain stable record identifiers.

Archival logs also need evolution rules. A schema version identifies syntax;
a certificate kind identifies semantics. New checkers may support old kinds,
but they must not reinterpret them. If a theorem or arithmetic implementation
changes, preserve the old checker or translate with an independently checked
conversion. Reproducibility over years depends more on explicit mathematics
and plain data than on preserving a particular solver environment.

<a id="section-385-11-composing-certificates-without-enlarging-claims"></a>
## 11. Composing certificates without enlarging claims {#section-387-11-composing-certificates-without-enlarging-claims}

Small certificates can be composed when their interfaces match. If a checked
transformation proves that every feasible point of model \\(M\\) maps to one of
model \\(M'\\) with the same objective, and a checked dual witness proves lower
bound \\(L\\) for \\(M'\\), then \\(L\\) is a lower bound for \\(M\\). If an
independently checked point of \\(M\\) has value \\(U\\), the combined claim is
\\(L\\le z_M^*\\le U\\). The composition record must state the direction of each
map; an implication in the reverse direction may not preserve a lower bound.

Composition does not erase limitations. An interval-based component retains
its rounding assumptions, and a tolerance-based component retains its
tolerance. The final report takes the union of these assumptions and the
intersection of justified claims. This discipline prevents a rigorous local
certificate and a heuristic global search from being summarized together as
a rigorous global proof.

<a id="section-402-12-common-failure-modes"></a>
## 12. Common failure modes {#section-404-12-common-failure-modes}

**Residual laundering.** A solver scales rows internally, reports a small
scaled residual, and the final report calls the original model feasible. The
checker must evaluate the original constraints in declared units.

**Tolerance without a theorem.** A gap of \\(10^{-8}\\) is called exact. Unless
discreteness or a rounding argument closes the remaining interval, the correct
claim is approximate.

**Untrusted lower bounds.** A floating-point relaxation objective is inserted
into a global tree as a lower bound. Numerical error can move it upward and
invalidate pruning. Use a safe downward correction, interval enclosure, or an
exact dual witness.

**Partial tree presented as exhaustive.** Reaching a time limit is not a leaf
certificate. Unresolved nodes remain part of the global uncertainty.

**Checker equivalence assumed.** Reimplementing a solver's formulas may repeat
the same bug. Prefer a smaller checker, different arithmetic, and independent
parsing paths, while acknowledging shared theorem assumptions.

**Overclaiming from KKT data.** A small KKT residual can support approximate
stationarity under a specified norm. It proves global optimality only when
additional convexity and duality hypotheses are checked.

<a id="section-428-13-bounded-project-a-checkable-convex-quadratic-dossier"></a>
## 13. Bounded project: a checkable convex quadratic dossier {#section-430-13-bounded-project-a-checkable-convex-quadratic-dossier}

Create a proof log for one rational convex quadratic program

\\[
 \\min \\tfrac12x^TQx+c^Tx\\quad\\text{subject to }Ax=b, x\\ge0,

\\]

with \\(2\\le n\\le8\\), \\(Q\\succeq0\\), and a nonempty feasible set. The project
is deliberately bounded: no general-purpose modeling language, network
service, or solver plugin is required.

Deliver four artifacts:

1. \`model.json\`: exact integer or rational entries and fixed variable order;
2. \`witness.json\`: primal \\(x\\), equality multiplier \\(y\\), and nonnegative
   bound multiplier \\(s\\);
3. a checker specification testing dimensions, \\(Q=Q^T\\), a supplied rational
   positive-semidefiniteness certificate, primal feasibility, dual
   stationarity \\(Qx+c-A^Ty-s=0\\), \\(s\\ge0\\), and complementarity
   \\(x_i s_i=0\\);
4. a readable report listing accepted claims and exclusions.

Use rational arithmetic for final checks. A convenient PSD certificate is a
rational matrix \\(R\\) with \\(Q=R^TR\\). Accepted evidence proves global
optimality because the objective and feasible set are convex and the checked
KKT conditions are sufficient. It does not prove uniqueness unless positive
definiteness on feasible directions is separately certified. Include at least
one corrupted witness that the checker rejects and a text alternative for any
convergence plot: a table of iteration, primal residual, dual residual, and
gap. The complete dossier should be small enough for a second person to audit
in one sitting.

<a id="section-462-14-practice-with-complete-solutions"></a>
## 14. Practice with complete solutions {#section-464-14-practice-with-complete-solutions}

<a id="section-464-exercise-1-gap-interpretation"></a>
### Exercise 1: gap interpretation {#section-466-exercise-1-gap-interpretation}

A convex minimization log proves primal feasibility with value \\(12.004\\) and
dual feasibility with value \\(12.000\\). What follows?

**Solution.** Weak duality gives \\(12.000\\le p^*\\le12.004\\). The primal point
is globally \\(0.004\\)-optimal in objective value. No bound on distance to the
solution follows without a growth condition, and exact optimality does not
follow because the gap is nonzero.

<a id="section-474-exercise-2-strong-convexity-distance"></a>
### Exercise 2: strong-convexity distance {#section-476-exercise-2-strong-convexity-distance}

In Exercise 1, additionally suppose the objective restricted to the feasible
set is \\(0.5\\)-strongly convex in the Euclidean norm. Bound the distance from
the logged point to the unique optimizer.

**Solution.** Strong convexity gives
\\(f(x)-f(x^*)\\ge(0.5/2)\\|x-x^*\\|_2^2\\). Therefore
\\(\\|x-x^*\\|_2\\le\\sqrt{2(0.004)/0.5}=\\sqrt{0.016}\\), approximately \\(0.1265\\).

<a id="section-484-exercise-3-a-farkas-cut-witness"></a>
### Exercise 3: a Farkas cut witness {#section-486-exercise-3-a-farkas-cut-witness}

The rows \\(x_1\\le2\\) and \\(x_2\\le3\\) define part of a relaxation. Give a
multiplier witness for \\(2x_1+x_2\\le7\\).

**Solution.** Multiply the first row by \\(2\\) and the second by \\(1\\). The
nonnegative multiplier vector \\((2,1)\\) produces left side
\\(2x_1+x_2\\) and right side \\(2\\cdot2+3=7\\), proving validity for every point
satisfying the two rows.

<a id="section-494-exercise-4-an-invalid-pruning-value"></a>
### Exercise 4: an invalid pruning value {#section-496-exercise-4-an-invalid-pruning-value}

A minimization node solver returns \`objective = 9.2\` after stopping early, and
the incumbent is \\(9.1\\). May the node be pruned?

**Solution.** Not from those facts. Pruning requires a valid lower bound at
least \\(9.1\\) (or the declared gap-adjusted threshold). An early solver
objective might be a feasible upper bound, a dual estimate, or neither. Its
mathematical direction and numerical safety must be certified.

<a id="section-504-exercise-5-interval-outcome"></a>
### Exercise 5: interval outcome {#section-506-exercise-5-interval-outcome}

An outward-rounded constraint enclosure is
\\[
[-3\\times10^{-12},2\\times10^{-12}]
\\]
for a required inequality \\(g(x)\\le0\\). Classify it.

**Solution.** Inconclusive. The interval contains positive values, so it does
not prove feasibility; it also contains nonpositive values, so it does not
prove violation. More precision or a sharper enclosure may settle the sign.

<a id="section-516-exercise-6-incomplete-branch-coverage"></a>
### Exercise 6: incomplete branch coverage {#section-518-exercise-6-incomplete-branch-coverage}

A real variable originally lies in \\([0,2]\\). Children use \\([0,0.9]\\) and
\\([1.1,2]\\). All leaves are bounded above the incumbent. Is the global proof
complete?

**Solution.** No. Feasible points with the variable in \\((0.9,1.1)\\) are not
covered. Leaf bounds cannot compensate for a gap in the covering argument.

<a id="section-525-exercise-7-integer-gap-closure"></a>
### Exercise 7: integer gap closure {#section-527-exercise-7-integer-gap-closure}

For an integer-valued minimization objective, a feasible incumbent has value
\\(17\\) and a rigorous lower bound is \\(16.4\\). Prove the incumbent optimal.

**Solution.** Every feasible objective is an integer and at least \\(16.4\\), so
it is at least \\(17\\). The incumbent attains \\(17\\), hence the optimum is
exactly \\(17\\).

<a id="section-534-exercise-8-kkt-claim-boundary"></a>
### Exercise 8: KKT claim boundary {#section-536-exercise-8-kkt-claim-boundary}

A nonconvex differentiable problem has a logged feasible point with gradient
of the Lagrangian norm below \\(10^{-9}\\) and complementarity residual below
\\(10^{-9}\\). What is the strongest generic conclusion?

**Solution.** The log supports approximate KKT stationarity in the declared
scaling, provided the derivatives and other KKT residuals are valid. It does
not generically prove local minimality, because a stationary point can be a
saddle or maximum, and it does not prove global optimality.

<a id="section-545-exercise-9-mutation-test"></a>
### Exercise 9: mutation test {#section-547-exercise-9-mutation-test}

Why should a checker reject a witness whose vector has one more coordinate
than the model, even if the extra coordinate is zero?

**Solution.** Dimensions are part of model identity. Silently truncating or
padding permits order mismatches and can attach a mathematically valid witness
to the wrong model. Exact shape checking makes the interpretation unique.

<a id="section-554-exercise-10-rational-reconstruction"></a>
### Exercise 10: rational reconstruction {#section-556-exercise-10-rational-reconstruction}

A solver reports \\(x=(0.3333333333,0.6666666667)\\) for the exact equality
\\(x_1+x_2=1\\). May a checker replace these numbers by \\((1/3,2/3)\\)?

**Solution.** Only under an explicit reconstruction rule followed by exact
verification against every constraint and bound. The decimal tokens themselves
need not equal those rationals. Reconstruction proposes a new witness; exact
substitution validates or rejects it.

<a id="section-564-15-summary-and-forward-path"></a>
## 15. Summary and forward path {#section-566-15-summary-and-forward-path}

A verified optimization result is a chain: identified model, precise claim,
typed witness, specified arithmetic, acceptance predicate, and theorem. Primal
points, dual multipliers, interval enclosures, cut multipliers, and exhaustive
trees prove different things. Floating-point output becomes rigorous only when
its error and semantics are enclosed. Small independent checkers reduce the
trusted boundary, while adversarial tests expose mismatched assumptions.

The next chapter turns these components into three substantial capstones. Each
capstone requires artifacts another person can inspect, a checker with negative
tests, and a final report that says exactly where the proof stops.

<a id="section-577-source-and-verification-note"></a>
## Sources {#section-579-source-and-verification-note}

IEEE 754-2019 is the verified standard identity, but the earlier source note supplies no clause-level locator or implementation-conformance evidence. No solver/package behavior or external run is asserted; future claims require implementation/version, compiler/hardware/mode, parameters, data digests, certificate schema, and independent replay.
`;export{e as default};