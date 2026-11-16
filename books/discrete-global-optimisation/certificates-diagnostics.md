
# Certificates, Diagnostics and Proof Logs {#section-1-certificates-diagnostics-and-proof-logs}

This primary chapter integrates the original diagnostic reading, the complete verified-software development and all three proof-log capstones. Their mathematical claims, examples and solutions remain available, while the current chapter supplies two staged hints for all twenty-five exercises. The earlier software and capstone identities resolve here through native aliases; their full supporting-matter copies and original source files remain intact as source lineage.

The default convention is minimization unless a passage explicitly says otherwise. Part I classifies certificate roles, Part II develops exact and enclosed witnesses and Part III applies them in bounded capstone designs. These are teaching specifications and symbolic examples.

<a id="section-5-i-certificates-and-diagnostics"></a>
## I. Certificates and diagnostics {#section-7-i-certificates-and-diagnostics}

<a id="section-7-what-an-optimizer-should-return"></a>
### What an optimizer should return {#section-9-what-an-optimizer-should-return}

A trustworthy optimizer returns more than a vector. Depending on structure, it should provide:

- primal feasibility evidence;
- objective value in original units;
- stationarity or projected-gradient residual;
- dual feasibility and primal–dual gap;
- curvature or second-order evidence;
- integer incumbent and global bound;
- termination reason and unresolved limitations.

No single certificate applies to every problem. This chapter assembles a decision framework.

<a id="section-21-convex-primal-dual-certificates"></a>
### Convex primal–dual certificates {#section-23-convex-primal-dual-certificates}

For convex minimization, any primal-feasible x supplies an upper bound \(f(x)\), and any dual-feasible multipliers supply lower bound \(q(\lambda,\nu)\). The gap

\(f(x)-q(\lambda,\nu)\ge 0\)

bounds objective suboptimality if weak duality holds and both values are computed validly.

A small gap does not imply x is close in variables unless the objective has growth such as strong convexity. If f is \(\mu\)-strongly convex and x* is the minimizer,

\(f(x)-f(x^{\star}) \ge (\mu/2)\lVert x-x^{\star}\rVert^{2}\),

so an objective-gap upper bound epsilon gives distance at most \(\sqrt{2\varepsilon/\mu}\). Without such curvature, many distant points can have nearly equal value.

<a id="section-35-stationarity-certificates"></a>
### Stationarity certificates {#section-37-stationarity-certificates}

Unconstrained smooth problems use a scaled gradient norm. Box or general convex constraints use a projected-gradient or normal-cone residual. Composite nonsmooth problems can use a proximal-gradient mapping. Equality/inequality problems use KKT components.

For nonconvex objectives, these certify only approximate stationarity of a chosen type. Negative-curvature searches can strengthen a first-order point to approximate second-order stationarity, but still do not establish global optimality.

<a id="section-41-scaling-example"></a>
#### Scaling example {#section-43-scaling-example}

Let \(f(x,y)=(x-1)^{2}+(10^{-6} y-1)^{2}\). At \((1,0)\), raw gradient is \((0,-2\times 10^{-6})\), seemingly tiny, yet changing y by a million reaches the second term's minimum. Scaling \(z=10^{-6} y\) gives gradient \(-2\) in the meaningful coordinate. A tolerance must reference variable and objective scales.

<a id="section-45-feasibility-is-multidimensional"></a>
### Feasibility is multidimensional {#section-47-feasibility-is-multidimensional}

List equality residuals, positive inequality violations, bound violations, and integrality violations separately. For a constraint measured in meters and another in joules, raw maximum violation is dimensionally incoherent. Scale by declared tolerances with units.

A restoration phase may return a least-infeasible point. That can diagnose contradictory constraints but must not be labeled feasible. For linear equations, a Farkas-type alternative can certify infeasibility: either a primal solution exists or a dual combination proves contradiction, under the exact theorem's conventions.

<a id="section-51-integer-optimality-gap"></a>
### Integer optimality gap {#section-53-integer-optimality-gap}

For maximization, let L be incumbent and U a valid global upper bound. Then \(L\le z^{\star}\le U\). Absolute gap is \(U-L\). If objective values are integral, \(U<L+1\) can prove L optimal after U is conservatively valid, because no larger integer value fits between.

For minimization the bound directions reverse: a feasible incumbent is an upper bound and relaxations give lower bounds. State the convention on every table.

<a id="section-57-infeasible-unbounded-or-failed"></a>
### Infeasible, unbounded, or failed? {#section-59-infeasible-unbounded-or-failed}

These states must not be conflated:

- **infeasible:** no point satisfies the mathematical constraints, supported by a valid certificate;
- **unbounded:** feasible objective values improve without finite limit in the chosen direction;
- **solver failure:** the algorithm could not decide because of limits, numerical breakdown, or invalid input;
- **unknown:** no certificate was obtained.

A numerical solver reporting “infeasible or unbounded” after presolve has not distinguished the two. Disable transformations or request a certificate before making a mathematical claim.

<a id="section-68-interval-and-exact-verification"></a>
### Interval and exact verification {#section-70-interval-and-exact-verification}

Floating-point residuals are not automatically rigorous bounds. Interval arithmetic with outward rounding can enclose function values and derivatives; rational arithmetic can verify small linear and integer examples exactly. The construction and dependency assumptions are developed in [Verified and Interval Computation](../numerical-mathematics-error-algorithms/verified-interval-computation.md). This chapter uses an enclosure as a supplied certificate component.

For a claimed root of KKT equations, an interval Newton or Krawczyk argument can sometimes prove a unique solution in a box. That still certifies the equations, not global optimality unless structural hypotheses bridge the claims.

<a id="section-74-reproducibility-and-solver-settings"></a>
### Reproducibility and solver settings {#section-76-reproducibility-and-solver-settings}

Record:

- formulation after any documented transformations;
- scaling and presolve rules;
- derivative source and checks;
- algorithm and version;
- feasibility, integrality, and gap tolerances;
- random seed and parallelism;
- time/node/iteration limits;
- incumbent and bound histories;
- final status with raw residuals.

Parallel branch-and-bound can explore nodes in a different order and find different incumbents before a time limit. A certified final gap can still be reproducible within a declared tolerance even if the tree differs.

<a id="section-90-a-complete-diagnostic-table"></a>
### A complete diagnostic table {#section-92-a-complete-diagnostic-table}

For a constrained continuous run, include rows like:

| quantity | value | scale | threshold | interpretation |
|---|---:|---:|---:|---|
| objective | 12.44 | 10 | — | original objective |
| stationarity | \(3e-7\) | 1 | \(1e-6\) | passes first-order request |
| equality violation | \(8e-9\) | \(1e-2\) units | \(1e-6\) scaled | passes |
| inequality violation | 0 | individual scales | \(1e-6\) | feasible within request |
| duality gap | \(2e-5\) | 12.44 | \(1e-4\) relative | convex certificate if dual valid |

For integer search, replace stationarity with incumbent, global bound, absolute/relative gap, open nodes, and proof-log status.

<a id="section-104-failure-diagnostics-by-symptom"></a>
### Failure diagnostics by symptom {#section-106-failure-diagnostics-by-symptom}

- **Objective stalls, gradient large:** scaling, line search, or inaccurate derivatives.
- **Gradient small, negative curvature:** saddle or flat nonconvex region.
- **Feasibility improves, objective explodes:** penalty/merit imbalance or incompatible model.
- **Relaxation weak:** formulation or missing valid inequalities, not necessarily branching.
- **Huge branch tree:** weak bounds, symmetry, poor incumbent, or inherent difficulty.
- **Different results by seed:** multiple basins or search-order limits; report distribution and best bounds.

<a id="section-113-common-errors"></a>
### Common errors {#section-115-common-errors}

- Reporting “optimal” when only a local stationarity tolerance passed.
- Giving a percentage gap without denominator convention.
- Claiming infeasibility from failure to find a feasible point.
- Hiding original-unit residuals after internal scaling.
- Treating deterministic repeatability as independent correctness evidence.

<a id="section-121-practice-with-solutions"></a>
### Practice with solutions {#section-123-practice-with-solutions}

<a id="certificates-core-ex-1"></a>

**1. Distance from gap.** A function is 0.5-strongly convex and a valid objective gap is at most \(10^{-4}\). Bound distance to its minimizer.

<details>
<summary>Hint 1</summary>

Combine the objective-gap allowance with quadratic growth.
</details>
<details>
<summary>Hint 2</summary>

Use the norm and strong-convexity constant from the statement before substituting.
</details>
<details>
<summary>Full solution</summary>

**Solution.** \(\lVert x-x^{\star}\rVert\le \sqrt{2\times 10^{-4}/0.5}=\sqrt{4\times 10^{-4}}=0.02\) in the norm of the strong-convexity statement.
</details>


<a id="certificates-core-ex-2"></a>

**2. Integer proof.** A maximization problem has integer objective, incumbent 47, and rigorously valid upper bound 47.8. What follows?

<details>
<summary>Hint 1</summary>

The objective lies on the integer lattice.
</details>
<details>
<summary>Hint 2</summary>

No integer strictly above forty-seven can fit below the rigorous upper bound 47.8.
</details>
<details>
<summary>Full solution</summary>

**Solution.** No integer objective larger than 47 is at most 47.8, so incumbent 47 is optimal.
</details>


<a id="certificates-core-ex-3"></a>

**3. Status boundary.** A nonlinear solver reaches its iteration limit with small objective change but constraint violation \(0.2\). What status is justified?

<details>
<summary>Hint 1</summary>

An iteration limit is a process event; violation is a separate mathematical property.
</details>
<details>
<summary>Hint 2</summary>

Small objective change does not restore feasibility of the returned point.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Solver limit/failure with an infeasible returned point, not convergence to a feasible optimum. Preserve the point for diagnosis but do not call it a solution.
</details>

<a id="section-185-final-perspective"></a>
### Final perspective {#section-187-final-perspective}

Optimization is complete only when the claim matches the certificate. Convex gaps can certify global objective quality; KKT residuals certify local conditions under scaling and regularity; integer bounds certify unexplored search. When no such evidence exists, “unknown” is an honest mathematical result.


<a id="section-192-ii-verified-optimization-software-and-proof-logs"></a>
## II. Verified optimization software and proof logs {#section-194-ii-verified-optimization-software-and-proof-logs}

An optimizer may print `optimal`, but a mathematical conclusion does not follow
from a status word. The conclusion follows from evidence that can be checked
against a stated model and theorem. This chapter develops proof-log contracts:
small, stable records that connect a solver run to independently checkable
claims. The goal is not to verify every line of an optimizer. It is to shrink
the trusted boundary around the final claim.

The local prerequisites are the preceding certificate discussion and
[nonconvex global bounds](nonconvex-global-bounds.md), together with graduate linear algebra, convex
duality, floating-point error analysis, and elementary integer programming.
We use the minimization convention unless explicitly stated. The scope is
optimization mathematics and verification; scheduling, routing, logistics,
and operational decision policy are outside this chapter.

<a id="section-208-1-claims-witnesses-and-checkers"></a>
### 1. Claims, witnesses, and checkers {#section-210-1-claims-witnesses-and-checkers}

A **claim** is a quantified mathematical statement about a particular model.
A **witness** is finite data intended to imply that claim. A **checker** is a
specified computation that accepts or rejects a witness. These are different
objects. A feasible point is a witness; `feasible within tolerance` is a
claim; evaluating scaled residuals is part of a checker.

A proof-log contract should state six items.

1. **Model identity:** variables, objective, constraints, domains, coefficient
   representation, and a digest or canonical serialization.
2. **Claim language:** for example, exact feasibility, an
   \(\varepsilon\)-objective bound, or absence of an improving node.
3. **Witness schema:** required arrays, dimensions, signs, units, and ordering.
4. **Checking arithmetic:** rational, integer, directed-rounding interval, or
   ordinary floating-point arithmetic with an explicitly non-rigorous result.
5. **Acceptance predicate:** inequalities the checker actually tests.
6. **Claim boundary:** what acceptance proves and what it does not prove.

Version numbers, seeds, and solver settings aid reproduction but are not
mathematical premises unless the checker uses them. Conversely, a theorem
hypothesis cannot be replaced by a version string.

<a id="section-232-worked-example-1-an-exact-linear-primal-certificate"></a>
#### Worked example 1: an exact linear primal certificate {#section-234-worked-example-1-an-exact-linear-primal-certificate}

Consider

\[
 \min 3x_1+2x_2\quad\text{subject to}\quad
 x_1+x_2\ge4,\quad x_1,x_2\ge0.
\]

The witness \(x=(0,4)\) is serialized as two rational numbers. An exact
checker evaluates \(x_1+x_2-4=0\), \(x_1=0\), and \(x_2=4\), so feasibility is
proved. It also evaluates the objective as \(8\). Acceptance proves
`there exists a feasible point of value 8`; it does not prove optimality.
That last sentence is part of the contract, not an optional warning.

<a id="section-247-2-primal-and-dual-proof-objects"></a>
### 2. Primal and dual proof objects {#section-249-2-primal-and-dual-proof-objects}

For the convex problem

\[
 p^*=\inf_x\{f_0(x):f_i(x)\le0, Ax=b\},
\]

a primal witness \(\hat x\) supplies an upper bound
\(p^*\le f_0(\hat x)\) when feasibility is established. Multipliers
\(\lambda\ge0\) and \(\nu\) define

\[
 L(x,\lambda,\nu)=f_0(x)+\sum_i\lambda_i f_i(x)
                     +\nu^T(Ax-b),
 \qquad q(\lambda,\nu)=\inf_x L(x,\lambda,\nu).
\]

Dual feasibility and a certified lower estimate \(d\le q\) imply
\(d\le p^*\). Thus \(f_0(\hat x)-d\le\varepsilon\) proves that \(\hat x\) is
\(\varepsilon\)-optimal in objective value. It does not bound variable error
without a growth condition.

For a standard-form linear program

\[
 \min c^Tx\quad\text{subject to }Ax=b, x\ge0,
\]

the dual is \(\max b^Ty\) subject to \(A^Ty\le c\). A compact proof log stores
\(x,y\), exact dimensions, primal and dual residuals, and both objectives.
With rational input and rational witnesses, a checker can perform every test
exactly. With binary floating-point witnesses, the checker must either convert
their exact represented values to rationals or enclose all operations with
directed rounding.

<a id="section-283-worked-example-2-a-primal-dual-equality-certificate"></a>
#### Worked example 2: a primal--dual equality certificate {#section-285-worked-example-2-a-primal-dual-equality-certificate}

Let

\[
 A=\begin{bmatrix}1&1\end{bmatrix},\quad b=4,
 \quad c=\begin{bmatrix}3\\2\end{bmatrix}.
\]

Take \(x=(0,4)\) and \(y=2\). Then \(Ax=b\), \(x\ge0\), and
\(A^Ty=(2,2)^T\le(3,2)^T=c\). The primal and dual values are both \(8\).
Weak duality gives \(8=b^Ty\le p^*\le c^Tx=8\), so \(x\) is globally
optimal. No appeal to a solver's search history is needed.

<a id="section-297-3-interval-certificates-and-floating-point-boundaries"></a>
### 3. Interval certificates and floating-point boundaries {#section-299-3-interval-certificates-and-floating-point-boundaries}

Suppose the desired exact test is \(g(x)\le0\), but \(x\) and the coefficients
are stored as floating-point values. Computing a rounded number
\(\hat g\le 0\) is not generally a proof. If the total rounding error is unknown,
the exact value could lie on the other side of zero.

An interval checker replaces each input by an enclosure and each arithmetic
operation by an outward-rounded enclosure. If the resulting interval
\(G(X)=[\underline g,\overline g]\) contains every exact value of \(g\) over
the input box \(X\), then \(\overline g\le0\) proves the inequality throughout
\(X\). If \(0\in G(X)\), the result is **inconclusive**, not false. Subdivision,
a better expression, or higher precision may sharpen the enclosure.

The trusted computing base now includes the parser, interval primitives,
rounding-mode control, and the theorem connecting the interval extension to
the exact expression. Compiler transformations that reassociate arithmetic or
silently use fused operations must respect that contract. A log should record
the arithmetic mode and whether underflow, overflow, or undefined operations
occurred.

<a id="section-318-worked-example-3-a-boundary-that-decimal-output-cannot-"></a>
#### Worked example 3: a boundary that decimal output cannot settle {#section-320-worked-example-3-a-boundary-that-decimal-output-cannot-}

The exact constraint is \(x^2\le2\), and a file reports
\(x=1.4142135623730951\). A nearest-rounded evaluation may display
\(x^2-2=4.44\times10^{-16}\), but that display alone proves neither exact
feasibility nor a meaningful violation of a decimal value interpreted with
uncertainty. If the token denotes the exact binary64 number, rationalizing its
bits and squaring exactly settles the sign. If it denotes a measured decimal
known only within \(10^{-15}\), the checker must evaluate the entire input
interval. Model semantics therefore precede residual arithmetic.

<a id="section-329-4-separation-certificates"></a>
### 4. Separation certificates {#section-331-4-separation-certificates}

Let \(P=\{x:Ax\le b\}\) be a rational polyhedron and let \(\bar x\) be a
candidate point. A separating-cut witness \((\alpha,\beta)\) supports two
tests:

\[
 \alpha^Tx\le\beta\quad\text{for every }x\in P,
 \qquad \alpha^T\bar x>\beta. \tag{1}
\]

The second test is direct. The first needs a validity proof. One useful Farkas
witness is \(u\ge0\) satisfying

\[
 u^TA=\alpha^T,\qquad u^Tb\le\beta. \tag{2}
\]

Indeed, \(Ax\le b\) implies
\(\alpha^Tx=u^TAx\le u^Tb\le\beta\). A log containing only the cut does not
establish validity. A log containing \(u\) lets a small exact checker establish
it for the declared linear relaxation.

For an integer model, validity for the continuous relaxation is sufficient but
not necessary. A cut derived using integrality may need a different theorem and
witness. The contract must name that rule and its preconditions, including
which variables are integral. `Cut accepted by solver` is not a theorem.

<a id="section-357-worked-example-4-checking-a-cut-multiplier"></a>
#### Worked example 4: checking a cut multiplier {#section-359-worked-example-4-checking-a-cut-multiplier}

Let \(P\subset\mathbb R^2\) be defined by

\[
 x_1+x_2\le3,\quad x_1\le2,\quad x_2\le2.
\]

The proposed cut is \(2x_1+x_2\le5\). Choose multipliers \(u=(1,1,0)\).
They are nonnegative, their weighted left side is
\((x_1+x_2)+x_1=2x_1+x_2\), and their weighted right side is \(3+2=5\).
Thus (2) proves validity. At \(\bar x=(2,2)\), the left side is \(6>5\), so
the cut separates that candidate. The certificate says nothing about whether
the cut is computationally useful.

<a id="section-372-5-tree-certificates-for-global-search"></a>
### 5. Tree certificates for global search {#section-374-5-tree-certificates-for-global-search}

A branch-and-bound proof is a finite covering argument. Each node represents a
region \(D_N\). Every nonterminal node must have children whose regions cover
the parent's feasible points. Every leaf must be resolved by one of a small
number of checkable reasons:

- a verified infeasibility certificate;
- a valid lower bound \(L_N\ge U-\varepsilon\) for minimization;
- an exact exhaustive enumeration of the remaining discrete states.

Here \(U\) is the value of an originally feasible incumbent. The tree checker
may accept a verified feasible point to lower \(U\), but that update does not
resolve its leaf: the leaf still needs infeasibility, a valid bound closing the
declared gap, or exhaustive enumeration. The checker
must reconstruct coverage, not merely count nodes. A binary integer branch
\(x_j\le k\) versus \(x_j\ge k+1\) covers all integral values, but leaves a
gap for real \(x_j\). An interval split \([a,m]\cup[m,b]=[a,b]\) covers real
values, with endpoint conventions made explicit.

The proof log can be a directed acyclic structure if identical subproblems are
shared, but hashes then need canonical node content and collision-resistant
identity assumptions. For purely mathematical archival evidence, storing the
explicit finite tree avoids making cryptographic collision resistance a
premise of the optimization theorem.

<a id="section-398-worked-example-5-a-four-leaf-integer-proof"></a>
#### Worked example 5: a four-leaf integer proof {#section-400-worked-example-5-a-four-leaf-integer-proof}

Minimize \((x-1)^2+(y-2)^2\) over \(x,y\in\{0,1\}\). A root branch on \(x\)
and a second branch on \(y\) at each child gives four leaves. Exact evaluation
produces values \(5,2,4,1\) at \((0,0),(0,1),(1,0),(1,1)\). The incumbent
\((1,1)\) has value \(1\); exhaustive leaf coverage proves global optimality.
A log that contains the four values but omits the domain declaration would not
prove exhaustion.

<a id="section-407-6-proof-log-architecture"></a>
### 6. Proof-log architecture {#section-409-6-proof-log-architecture}

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
fail closed: an unknown certificate kind yields `unsupported`, never `valid`.

**Report layer.** Translate checker outcomes into claim-sized prose. Preserve
`valid`, `invalid`, and `inconclusive` as distinct states. Record the checker
version and a digest of its input, but keep diagnostic metadata out of the
mathematical kernel when possible.

An event log is useful for debugging, while a proof log is useful for
verification. The former may be gigabytes and depend on solver internals. The
latter should contain only the data needed by the acceptance theorem.

<a id="section-436-7-adversarial-validation-of-a-checker"></a>
### 7. Adversarial validation of a checker {#section-438-7-adversarial-validation-of-a-checker}

A checker deserves tests aimed at its assumptions. Useful mutations include:

- change one coefficient after witness generation;
- permute columns without permuting the witness;
- replace a finite number by `NaN` or infinity;
- delete one leaf or duplicate a branch;
- reverse an inequality or objective direction;
- perturb a dual multiplier below zero;
- provide an interval with reversed endpoints;
- exploit an integer overflow in an index or rational numerator.

Positive examples show that the format is usable. Negative tests show that the
checker rejects near-miss evidence. Neither replaces a proof of the checker,
but both expose dangerous mismatches between implementation and contract.

<a id="section-453-worked-example-6-detecting-a-model-identity-failure"></a>
#### Worked example 6: detecting a model-identity failure {#section-455-worked-example-6-detecting-a-model-identity-failure}

A valid LP certificate has \(c=(3,2)\), \(x=(0,4)\), and \(y=2\). Someone
changes the first objective coefficient to \(1\) but reuses the proof file.
Feasibility still passes and the old dual vector still satisfies
\((2,2)\le(3,2)\), but it is not dual feasible for the new vector because
\(2\nleq1\). An exact checker rejects it. More importantly, a model digest
would reject the mismatch before arithmetic. Witnesses are model-relative.

<a id="section-462-8-infeasibility-and-unboundedness-certificates"></a>
### 8. Infeasibility and unboundedness certificates {#section-464-8-infeasibility-and-unboundedness-certificates}

The absence of a returned feasible point does not prove infeasibility. A
proof-log contract needs a positive witness for the alternative claim. For a
linear system

\[
 Ax\le b,
\]

one Farkas form says exactly one of the following can hold: there exists an
\(x\) with \(Ax\le b\), or there exists \(y\ge0\) with
\(A^Ty=0\) and \(b^Ty<0\). The second witness is easy to check. If both were
true, multiplying \(Ax\le b\) by \(y\ge0\) would give
\(0=y^TAx\le y^Tb<0\), a contradiction.

Strict negativity requires care in floating-point arithmetic. A displayed
value of \(-10^{-16}\) is not rigorous evidence unless its error is bounded.
An exact rational witness or an interval for \(b^Ty\) whose upper endpoint is
strictly negative closes the proof. Scaling \(y\) by a positive constant does
not change validity, so normalizing a nonzero component can keep rational
numerators manageable. The normalization itself is not a theorem premise.

Unboundedness also needs a witness. For the standard-form linear program

\[
 \min c^Tx\quad\text{subject to }Ax=b, x\ge0,
\]

a feasible point \(x_0\) and a ray \(d\) satisfying

\[
 Ad=0,\qquad d\ge0,\qquad c^Td<0
\]

prove that \(x_0+td\) is feasible for every \(t\ge0\) and that its objective
tends to \(-\infty\). A ray without a feasible base point proves only that the
homogeneous recession conditions hold, not that the original feasible set is
nonempty. For nonlinear problems, an unboundedness certificate needs a
problem-specific theorem; borrowing the linear ray test is unsound.

<a id="section-503-worked-example-7-exact-infeasibility-and-unboundedness-"></a>
#### Worked example 7: exact infeasibility and unboundedness witnesses {#section-505-worked-example-7-exact-infeasibility-and-unboundedness-}

The inequalities \(x\le0\) and \(-x\le-1\) are inconsistent. With
\(A=(1,-1)^T\), \(b=(0,-1)^T\), and \(y=(1,1)\), we have
\(y\ge0\), \(A^Ty=1-1=0\), and \(b^Ty=-1<0\). This proves infeasibility
exactly.

For a separate program, minimize \(-x_1\) subject to
\(x_1-x_2=0\) and \(x\ge0\). The point \(x_0=(0,0)\) is feasible, and
\(d=(1,1)\) satisfies \((1,-1)d=0\), \(d\ge0\), and
\((-1,0)d=-1<0\). Hence \(x_0+td=(t,t)\) proves unboundedness. The two logs
use different witness schemas because `infeasible` and `unbounded` are
different mathematical claims.

<a id="section-517-9-transformations-presolve-and-reconstruction"></a>
### 9. Transformations, presolve, and reconstruction {#section-519-9-transformations-presolve-and-reconstruction}

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
intended to ask. A sentence saying `presolve preserves equivalence` is not an
artifact when the particular transformations are unavailable.

Reconstruction is especially important for dual multipliers. Eliminating a
row or scaling it changes the associated multiplier. A vector that satisfies
the reduced stationarity equations need not have the right dimension or signs
for the original system. Either reconstruct original multipliers and check
them from scratch or derive the final bound directly from the reduced model
plus a checked equivalence map.

<a id="section-544-worked-example-8-objective-constants-under-substitution"></a>
#### Worked example 8: objective constants under substitution {#section-546-worked-example-8-objective-constants-under-substitution}

Suppose the original model has equality \(x_2=2-x_1\) and objective
\(3x_1+x_2\). Substitution produces the reduced objective
\(2x_1+2\). If the reduced solver reports optimum \(4\), dropping the constant
during reconstruction would report \(2\), even though the optimizer itself is
unchanged. A proof record stores both the affine map
\(x=(z,2-z)\) and objective identity
\(3z+(2-z)=2z+2\). The original-model checker evaluates the reconstructed
point and objective independently.

<a id="section-555-10-streaming-archival-and-deterministic-replay"></a>
### 10. Streaming, archival, and deterministic replay {#section-557-10-streaming-archival-and-deterministic-replay}

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

<a id="section-578-11-composing-certificates-without-enlarging-claims"></a>
### 11. Composing certificates without enlarging claims {#section-580-11-composing-certificates-without-enlarging-claims}

Small certificates can be composed when their interfaces match. If a checked
transformation proves that every feasible point of model \(M\) maps to one of
model \(M'\) with the same objective, and a checked dual witness proves lower
bound \(L\) for \(M'\), then \(L\) is a lower bound for \(M\). If an
independently checked point of \(M\) has value \(U\), the combined claim is
\(L\le z_M^*\le U\). The composition record must state the direction of each
map; an implication in the reverse direction may not preserve a lower bound.

Composition does not erase limitations. An interval-based component retains
its rounding assumptions, and a tolerance-based component retains its
tolerance. The final report takes the union of these assumptions and the
intersection of justified claims. This discipline prevents a rigorous local
certificate and a heuristic global search from being summarized together as
a rigorous global proof.

<a id="section-595-12-common-failure-modes"></a>
### 12. Common failure modes {#section-597-12-common-failure-modes}

**Residual laundering.** A solver scales rows internally, reports a small
scaled residual, and the final report calls the original model feasible. The
checker must evaluate the original constraints in declared units.

**Tolerance without a theorem.** A gap of \(10^{-8}\) is called exact. Unless
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

<a id="section-621-13-bounded-project-a-checkable-convex-quadratic-dossier"></a>
### 13. Bounded project: a checkable convex quadratic dossier {#section-623-13-bounded-project-a-checkable-convex-quadratic-dossier}

Create a proof log for one rational convex quadratic program

\[
 \min \tfrac12x^TQx+c^Tx\quad\text{subject to }Ax=b, x\ge0,

\]

with \(2\le n\le8\), \(Q\succeq0\), and a nonempty feasible set. The project
is deliberately bounded: no general-purpose modeling language, network
service, or solver plugin is required.

Deliver four artifacts:

1. `model.json`: exact integer or rational entries and fixed variable order;
2. `witness.json`: primal \(x\), equality multiplier \(y\), and nonnegative
   bound multiplier \(s\);
3. a checker specification testing dimensions, \(Q=Q^T\), a supplied rational
   positive-semidefiniteness certificate, primal feasibility, dual
   stationarity \(Qx+c-A^Ty-s=0\), \(s\ge0\), and complementarity
   \(x_i s_i=0\);
4. a readable report listing accepted claims and exclusions.

Use rational arithmetic for final checks. A convenient PSD certificate is a
rational matrix \(R\) with \(Q=R^TR\). Accepted evidence proves global
optimality because the objective and feasible set are convex and the checked
KKT conditions are sufficient. It does not prove uniqueness unless positive
definiteness on feasible directions is separately certified. Include at least
one corrupted witness that the checker rejects and a text alternative for any
convergence plot: a table of iteration, primal residual, dual residual, and
gap. The complete dossier should be small enough for a second person to audit
in one sitting.

<a id="section-655-14-practice-with-complete-solutions"></a>
### 14. Practice with complete solutions {#section-657-14-practice-with-complete-solutions}

<a id="section-657-exercise-1-gap-interpretation"></a>
#### Exercise 1: gap interpretation {#section-659-exercise-1-gap-interpretation}
<a id="certificates-software-ex-1"></a>

A convex minimization log proves primal feasibility with value \(12.004\) and
dual feasibility with value \(12.000\). What follows?

<details>
<summary>Hint 1</summary>

Weak duality places the two values around the same optimum.
</details>
<details>
<summary>Hint 2</summary>

Subtract the lower value from the feasible upper value; do not infer variable distance.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Weak duality gives \(12.000\le p^*\le12.004\). The primal point
is globally \(0.004\)-optimal in objective value. No bound on distance to the
solution follows without a growth condition, and exact optimality does not
follow because the gap is nonzero.
</details>


<a id="section-683-exercise-2-strong-convexity-distance"></a>
#### Exercise 2: strong-convexity distance {#section-685-exercise-2-strong-convexity-distance}
<a id="certificates-software-ex-2"></a>

In Exercise 1, additionally suppose the objective restricted to the feasible
set is \(0.5\)-strongly convex in the Euclidean norm. Bound the distance from
the logged point to the unique optimizer.

<details>
<summary>Hint 1</summary>

Strong convexity bounds squared distance by twice the gap divided by its modulus.
</details>
<details>
<summary>Hint 2</summary>

Substitute 0.004 and 0.5 only after fixing that inequality direction.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Strong convexity gives
\(f(x)-f(x^*)\ge(0.5/2)\|x-x^*\|_2^2\). Therefore
\(\|x-x^*\|_2\le\sqrt{2(0.004)/0.5}=\sqrt{0.016}\), approximately \(0.1265\).
</details>


<a id="section-709-exercise-3-a-farkas-cut-witness"></a>
#### Exercise 3: a Farkas cut witness {#section-711-exercise-3-a-farkas-cut-witness}
<a id="certificates-software-ex-3"></a>

The rows \(x_1\le2\) and \(x_2\le3\) define part of a relaxation. Give a
multiplier witness for \(2x_1+x_2\le7\).

<details>
<summary>Hint 1</summary>

Use nonnegative aggregation of the two source rows.
</details>
<details>
<summary>Hint 2</summary>

Weights two and one give both the target coefficients and right side seven.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Multiply the first row by \(2\) and the second by \(1\). The
nonnegative multiplier vector \((2,1)\) produces left side
\(2x_1+x_2\) and right side \(2\cdot2+3=7\), proving validity for every point
satisfying the two rows.
</details>


<a id="section-735-exercise-4-an-invalid-pruning-value"></a>
#### Exercise 4: an invalid pruning value {#section-737-exercise-4-an-invalid-pruning-value}
<a id="certificates-software-ex-4"></a>

A minimization node solver returns `objective = 9.2` after stopping early, and
the incumbent is \(9.1\). May the node be pruned?

<details>
<summary>Hint 1</summary>

A stopped objective has no bound direction until its certificate role is known.
</details>
<details>
<summary>Hint 2</summary>

A feasible minimizing point would give an upper bound, which cannot prune another minimizing node.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Not from those facts. Pruning requires a valid lower bound at
least \(9.1\) (or the declared gap-adjusted threshold). An early solver
objective might be a feasible upper bound, a dual estimate, or neither. Its
mathematical direction and numerical safety must be certified.
</details>


<a id="section-761-exercise-5-interval-outcome"></a>
#### Exercise 5: interval outcome {#section-763-exercise-5-interval-outcome}
<a id="certificates-software-ex-5"></a>

An outward-rounded constraint enclosure is
\[
[-3\times10^{-12},2\times10^{-12}]
\]
for a required inequality \(g(x)\le0\). Classify it.

<details>
<summary>Hint 1</summary>

The interval contains values on both sides of the feasibility boundary.
</details>
<details>
<summary>Hint 2</summary>

Neither its upper endpoint nor its lower endpoint settles the required universal sign.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Inconclusive. The interval contains positive values, so it does
not prove feasibility; it also contains nonpositive values, so it does not
prove violation. More precision or a sharper enclosure may settle the sign.
</details>


<a id="section-789-exercise-6-incomplete-branch-coverage"></a>
#### Exercise 6: incomplete branch coverage {#section-791-exercise-6-incomplete-branch-coverage}
<a id="certificates-software-ex-6"></a>

A real variable originally lies in \([0,2]\). Children use \([0,0.9]\) and
\([1.1,2]\). All leaves are bounded above the incumbent. Is the global proof
complete?

<details>
<summary>Hint 1</summary>

Take the union of child intervals before using leaf bounds.
</details>
<details>
<summary>Hint 2</summary>

The open interval between 0.9 and 1.1 has no child.
</details>
<details>
<summary>Full solution</summary>

**Solution.** No. Feasible points with the variable in \((0.9,1.1)\) are not
covered. Leaf bounds cannot compensate for a gap in the covering argument.
</details>


<a id="section-814-exercise-7-integer-gap-closure"></a>
#### Exercise 7: integer gap closure {#section-816-exercise-7-integer-gap-closure}
<a id="certificates-software-ex-7"></a>

For an integer-valued minimization objective, a feasible incumbent has value
\(17\) and a rigorous lower bound is \(16.4\). Prove the incumbent optimal.

<details>
<summary>Hint 1</summary>

Round a valid minimizing lower bound upward only using the proved objective lattice.
</details>
<details>
<summary>Hint 2</summary>

The least integer at least 16.4 is seventeen.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Every feasible objective is an integer and at least \(16.4\), so
it is at least \(17\). The incumbent attains \(17\), hence the optimum is
exactly \(17\).
</details>


<a id="section-839-exercise-8-kkt-claim-boundary"></a>
#### Exercise 8: KKT claim boundary {#section-841-exercise-8-kkt-claim-boundary}
<a id="certificates-software-ex-8"></a>

A nonconvex differentiable problem has a logged feasible point with gradient
of the Lagrangian norm below \(10^{-9}\) and complementarity residual below
\(10^{-9}\). What is the strongest generic conclusion?

<details>
<summary>Hint 1</summary>

Separate residual conditions from sufficient local curvature or global convexity.
</details>
<details>
<summary>Hint 2</summary>

Even exact nonconvex KKT stationarity can occur at a saddle or maximum.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The log supports approximate KKT stationarity in the declared
scaling, provided the derivatives and other KKT residuals are valid. It does
not generically prove local minimality, because a stationary point can be a
saddle or maximum, and it does not prove global optimality.
</details>


<a id="section-866-exercise-9-mutation-test"></a>
#### Exercise 9: mutation test {#section-868-exercise-9-mutation-test}
<a id="certificates-software-ex-9"></a>

Why should a checker reject a witness whose vector has one more coordinate
than the model, even if the extra coordinate is zero?

<details>
<summary>Hint 1</summary>

Shape and ordering define which mathematical vector the witness represents.
</details>
<details>
<summary>Hint 2</summary>

Silently ignoring an extra zero can conceal a mismatched column map.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Dimensions are part of model identity. Silently truncating or
padding permits order mismatches and can attach a mathematically valid witness
to the wrong model. Exact shape checking makes the interpretation unique.
</details>


<a id="section-891-exercise-10-rational-reconstruction"></a>
#### Exercise 10: rational reconstruction {#section-893-exercise-10-rational-reconstruction}
<a id="certificates-software-ex-10"></a>

A solver reports \(x=(0.3333333333,0.6666666667)\) for the exact equality
\(x_1+x_2=1\). May a checker replace these numbers by \((1/3,2/3)\)?

<details>
<summary>Hint 1</summary>

Reconstruction proposes another exact candidate.
</details>
<details>
<summary>Hint 2</summary>

Verify every original condition after replacing the decimal tokens by rationals.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Only under an explicit reconstruction rule followed by exact
verification against every constraint and bound. The decimal tokens themselves
need not equal those rationals. Reconstruction proposes a new witness; exact
substitution validates or rejects it.
</details>

<a id="section-916-15-summary-and-forward-path"></a>
### 15. Summary and forward path {#section-918-15-summary-and-forward-path}

A verified optimization result is a chain: identified model, precise claim,
typed witness, specified arithmetic, acceptance predicate, and theorem. Primal
points, dual multipliers, interval enclosures, cut multipliers, and exhaustive
trees prove different things. Floating-point output becomes rigorous only when
its error and semantics are enclosed. Small independent checkers reduce the
trusted boundary, while adversarial tests expose mismatched assumptions.

The following capstone section turns these components into three substantial projects. Each
capstone requires artifacts another person can inspect, a checker with negative
tests, and a final report that says exactly where the proof stops.

<a id="section-929-source-and-verification-note"></a>
### Sources {#section-931-source-and-verification-note}

The earlier source cites IEEE 754-2019, without a clause-level locator or implementation-conformance evidence. No solver/package behavior or external run is asserted; future claims require implementation/version, compiler/hardware/mode, parameters, data digests, certificate schema, and independent replay.

<a id="section-933-iii-proof-log-capstones"></a>
## III. Proof-log capstones {#section-935-iii-proof-log-capstones}

The final act of optimization is not obtaining a promising vector. It is
making a defensible claim about a declared model. This chapter organizes that
act into three capstones: a convex primal--dual dossier, a cut-and-relaxation
dossier, and a global-search tree dossier. Each is substantial enough to
require mathematical design, computation, independent checking, failure
tests, and exposition, but bounded enough to audit completely.

The exact local prerequisites are the verified-software section above and
[separation and branching](separation-branching-strategies.md). We also use convex duality, interval error
bounds, rational linear algebra, and the book's chapters on integer and
nonconvex bounds. These projects concern proof objects for optimization
problems. They do not ask for operational deployment or domain-specific
logistics.

<a id="section-949-1-the-common-proof-log-protocol"></a>
### 1. The common proof-log protocol {#section-951-1-the-common-proof-log-protocol}

All three capstones use the same protocol. Keeping this common shell makes
their mathematical differences visible.

<a id="section-954-1-1-freeze-the-claim-before-computing"></a>
#### 1.1 Freeze the claim before computing {#section-956-1-1-freeze-the-claim-before-computing}

Write one primary claim with quantifiers and tolerances. Examples are:

- `the supplied feasible point is within epsilon of the global minimum`;
- `each supplied inequality is valid for the declared relaxation and cuts off
  its named point`;
- `the incumbent is globally epsilon-optimal over the bounded mixed domain`.

Do not begin with `the solver will prove optimality`. That is an aspiration,
not a checkable claim. Also list excluded claims, such as uniqueness, stability
under perturbed data, exact feasibility of unrounded measurements, or runtime
performance on a larger problem family.

<a id="section-968-1-2-canonicalize-the-model"></a>
#### 1.2 Canonicalize the model {#section-970-1-2-canonicalize-the-model}

Choose an unambiguous variable order, objective direction, constraint sense,
and coefficient semantics. Exact decimal input may be stored as signed integer
mantissas and powers of ten; rational input as numerator--denominator pairs.
Normalize denominators to be positive and fractions to lowest terms. Record
whether bounds are closed and which variables are integer.

A canonical model identifier can be obtained by serializing fields in a fixed
order and hashing the resulting bytes. A hash detects accidental mismatch but
does not prove that the serialization matches the prose model. The audit must
inspect that translation once.

<a id="section-981-1-3-separate-producer-from-checker"></a>
#### 1.3 Separate producer from checker {#section-983-1-3-separate-producer-from-checker}

The producer may use sophisticated optimization software and heuristic
choices. The checker should be small, deterministic, and based on the proof
contract. It accepts a model and witness; it returns `valid`, `invalid`, or
`inconclusive` with reasons. `Inconclusive` is essential for interval tests or
unsupported certificate forms.

Use exact integer or rational arithmetic when practical. If intervals are
used, state outward-rounding guarantees. Ordinary nearest-rounded arithmetic
may support diagnostics but cannot silently become a rigorous bound.

<a id="section-993-1-4-build-a-claim-matrix"></a>
#### 1.4 Build a claim matrix {#section-995-1-4-build-a-claim-matrix}

Every final report includes a table with columns `claim`, `witness`, `checker
test`, `arithmetic`, `result`, and `limitation`. A reader should be able to
trace each sentence containing `optimal`, `feasible`, `valid`, or `infeasible`
to one row. This is both an exposition device and an error detector.

<a id="section-1000-1-5-preserve-accessible-alternatives"></a>
#### 1.5 Preserve accessible alternatives {#section-1002-1-5-preserve-accessible-alternatives}

Color, animation, and graphical geometry may supplement evidence but never be
the only carrier. Every plot receives a data table or structured text
alternative. Tree images receive a node table with parent, branch, bound, and
closure reason. Cut diagrams receive the exact inequality and evaluated slack.
Convergence animations, if used, must have pause controls and respect reduced
motion preferences. The proof must remain audit-ready using text and numbers
alone.

<a id="section-1010-1-6-make-artifact-dependencies-explicit"></a>
#### 1.6 Make artifact dependencies explicit {#section-1012-1-6-make-artifact-dependencies-explicit}

Include a dependency ledger. The final claim depends on checker results; each
checker result names a witness and canonical model; each witness states the
theorem it instantiates. This directed graph must be acyclic and small enough
to inspect. Raw solver traces may point into the graph as provenance, but no
accepted claim may depend only on an unparsed trace. If one artifact changes,
invalidate and recompute every downstream result rather than editing displayed
numbers. The ledger also helps a reviewer distinguish a shared assumption—such
as coefficient semantics—from independent evidence.

<a id="section-1021-1-7-define-failure-handling"></a>
#### 1.7 Define failure handling {#section-1023-1-7-define-failure-handling}

A complete run records malformed input, rejected evidence, unsupported
certificate kinds, inconclusive intervals, and internal checker errors as
different outcomes. Only `valid` supports the associated claim. Preserve the
first failing predicate and enough exact values to diagnose it, while still
running independent checks when partial results are informative. Never replace
an invalid witness automatically without assigning the replacement a new
identity; otherwise the report cannot be reproduced.

<a id="section-1031-1-8-use-stable-mathematical-names"></a>
#### 1.8 Use stable mathematical names {#section-1033-1-8-use-stable-mathematical-names}

Names should describe roles rather than incidental storage positions. Use
`primal_candidate`, `dual_multiplier`, `safe_lower_bound`, and `closure_reason`
instead of unlabeled arrays or solver-specific column numbers. A separate map
connects these names to producer fields. Stable names make the checker contract
readable and keep a harmless solver-format change from altering the
mathematical artifact. Units and scaling belong beside each named quantity,
especially when residuals from unlike constraints are compared.

<a id="section-1041-2-mini-audits-before-the-projects"></a>
### 2. Mini-audits before the projects {#section-1043-2-mini-audits-before-the-projects}

The following short audits model the discipline expected in the larger work.

<a id="section-1045-worked-mini-audit-a-primal-dual-orientation"></a>
#### Worked mini-audit A: primal--dual orientation {#section-1047-worked-mini-audit-a-primal-dual-orientation}

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

<a id="section-1061-worked-mini-audit-b-a-false-certificate-caused-by-sign-"></a>
#### Worked mini-audit B: a false certificate caused by sign convention {#section-1063-worked-mini-audit-b-a-false-certificate-caused-by-sign-}

Suppose a minimization relaxation has true lower bound \(4\) and incumbent
value \(7\). A report labels the incumbent `lower bound` and the relaxation
`upper bound`, then computes a gap \(-3\) and declares completion. The checker
rejects the field types before using their values: for minimization, a primal
feasible incumbent gives an upper bound and a relaxation or dual certificate
gives a lower bound. Typed bound roles prevent a plausible number from carrying
the wrong theorem.

<a id="section-1071-worked-mini-audit-c-cut-validity-and-separation-are-ind"></a>
#### Worked mini-audit C: cut validity and separation are independent {#section-1073-worked-mini-audit-c-cut-validity-and-separation-are-ind}

The relaxation has \(x_1\le1\) and \(x_2\le1\). The inequality
\(x_1+x_2\le2\) is valid by summing the two rows, but it does not separate
\(\bar x=(1,1)\): the point lies on its boundary. Conversely,
\(x_1+x_2\le1\) separates \((1,1)\) but is not implied by the relaxation.
A complete cut record needs both a validity witness and a strictly positive
violation at the named point.

<a id="section-1080-worked-mini-audit-d-rounded-node-bounds"></a>
#### Worked mini-audit D: rounded node bounds {#section-1082-worked-mini-audit-d-rounded-node-bounds}

A node's exact dual value is represented by a computed enclosure
\([5.9999997,6.0000004]\). For minimization, the left endpoint is a safe lower
bound. If the incumbent is \(6\) and exact optimality is required, this node
cannot be pruned from the enclosure alone because \(5.9999997<6\). Rounding
the display to `6.000` and pruning would discard the directional guarantee.
For an absolute tolerance \(10^{-3}\), however, the node is closable because
\(5.9999997\ge6-10^{-3}\).

<a id="section-1090-worked-mini-audit-e-missing-child"></a>
#### Worked mini-audit E: missing child {#section-1092-worked-mini-audit-e-missing-child}

A root integer variable satisfies \(x\in\{0,1,2\}\). A logged branch creates
children \(x=0\) and \(x\ge2\). Even if both children are resolved, value
\(x=1\) is uncovered. The tree checker constructs the parent's allowed set and
the union of child sets, finds the missing element, and rejects global
exhaustion. A visually plausible two-way branch is not enough.

<a id="section-1098-3-capstone-i-convex-primal-dual-dossier"></a>
### 3. Capstone I: convex primal--dual dossier {#section-1100-3-capstone-i-convex-primal-dual-dossier}

<a id="section-1100-3-1-mathematical-target"></a>
#### 3.1 Mathematical target {#section-1102-3-1-mathematical-target}

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

<a id="section-1120-3-2-required-artifacts"></a>
#### 3.2 Required artifacts {#section-1122-3-2-required-artifacts}

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

<a id="section-1138-3-3-checker-obligations"></a>
#### 3.3 Checker obligations {#section-1140-3-3-checker-obligations}

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

<a id="section-1153-3-4-claim-limits-and-audit-questions"></a>
#### 3.4 Claim limits and audit questions {#section-1155-3-4-claim-limits-and-audit-questions}

Acceptance does not prove uniqueness unless positive curvature on all feasible
directions is checked. It does not prove that rounded physical data represent
reality, only that the declared rational model has the certified property. It
does not establish solver speed or reliability on other instances.

The independent audit should answer: Does the prose model match the canonical
model? Is every multiplier attached to the correct constraint? Are objective
and bound directions consistent? Does changing one coefficient invalidate the
witness? Does the accessibility table contain all plotted values?

<a id="section-1165-3-5-completion-standard"></a>
#### 3.5 Completion standard {#section-1167-3-5-completion-standard}

The capstone passes when an independent reader can run or manually reproduce
the acceptance predicate, identify at least one rejected mutation, and derive
the final claim from the reported inequalities without trusting the optimizer.

<a id="section-1171-4-capstone-ii-separation-and-relaxation-dossier"></a>
### 4. Capstone II: separation and relaxation dossier {#section-1173-4-capstone-ii-separation-and-relaxation-dossier}

<a id="section-1173-4-1-mathematical-target"></a>
#### 4.1 Mathematical target {#section-1175-4-1-mathematical-target}

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

<a id="section-1187-4-2-required-artifacts"></a>
#### 4.2 Required artifacts {#section-1189-4-2-required-artifacts}

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

<a id="section-1207-4-3-checker-obligations"></a>
#### 4.3 Checker obligations {#section-1209-4-3-checker-obligations}

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

<a id="section-1230-4-4-claim-limits-and-audit-questions"></a>
#### 4.4 Claim limits and audit questions {#section-1232-4-4-claim-limits-and-audit-questions}

A valid cut can be weak, redundant, or harmful to numerical conditioning.
Separation at one point says nothing about all fractional points. A stronger
logged lower bound on one instance is not a complexity result or a universal
algorithm comparison.

The audit asks: Is the validity set the initial relaxation, a later relaxation,
or the integer hull? Are all source rows present at the moment of derivation?
Did normalization reverse an inequality? Does each strict violation remain
strict under the checking arithmetic? Does deleting a multiplier or changing
one sign lead to rejection?

<a id="section-1243-4-5-completion-standard"></a>
#### 4.5 Completion standard {#section-1245-4-5-completion-standard}

The capstone passes when every accepted cut has a replayable derivation, every
separation claim has an exact positive violation, the final lower bound has a
directionally safe certificate, and the report distinguishes validity,
separation, strength, and computational usefulness.

<a id="section-1250-5-capstone-iii-global-tree-proof-dossier"></a>
### 5. Capstone III: global tree proof dossier {#section-1252-5-capstone-iii-global-tree-proof-dossier}

<a id="section-1252-5-1-mathematical-target"></a>
#### 5.1 Mathematical target {#section-1254-5-1-mathematical-target}

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

<a id="section-1266-5-2-required-artifacts"></a>
#### 5.2 Required artifacts {#section-1268-5-2-required-artifacts}

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

<a id="section-1284-5-3-global-invariant-and-checker-obligations"></a>
#### 5.3 Global invariant and checker obligations {#section-1286-5-3-global-invariant-and-checker-obligations}

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

<a id="section-1306-5-4-claim-limits-and-audit-questions"></a>
#### 5.4 Claim limits and audit questions {#section-1308-5-4-claim-limits-and-audit-questions}

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

<a id="section-1320-5-5-completion-standard"></a>
#### 5.5 Completion standard {#section-1322-5-5-completion-standard}

The capstone passes when deleting any leaf breaks coverage or is detected,
each surviving leaf has a replayable closure certificate, and exact arithmetic
or outward enclosures establish \(L\le z^*\le U\) with
\(U-L\le\varepsilon\). A second reader must be able to audit the proof without
watching an animation or having access to the producing solver.

<a id="section-1328-6-cross-project-review-and-scoring"></a>
### 6. Cross-project review and scoring {#section-1330-6-cross-project-review-and-scoring}

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

<a id="section-1354-7-preparation-exercises-with-complete-solutions"></a>
### 7. Preparation exercises with complete solutions {#section-1356-7-preparation-exercises-with-complete-solutions}

<a id="section-1356-exercise-1-write-a-claim-matrix-row"></a>
#### Exercise 1: write a claim matrix row {#section-1358-exercise-1-write-a-claim-matrix-row}
<a id="certificates-capstones-ex-1"></a>

A rational LP witness contains primal and dual feasible points with objectives
\(31/7\) and \(30/7\). Write the strongest generic conclusion and one excluded
claim.

<details>
<summary>Hint 1</summary>

Attach primal and dual values to their minimizing bound roles.
</details>
<details>
<summary>Hint 2</summary>

The interval width is one seventh; distance and uniqueness need further hypotheses.
</details>
<details>
<summary>Full solution</summary>

**Solution.** For minimization, weak duality gives
\(30/7\le p^*\le31/7\), so the primal point is globally within \(1/7\) in
objective value. Exact optimality is excluded because the certified gap is
nonzero. Variable proximity is also excluded without a growth condition.
</details>


<a id="section-1383-exercise-2-check-a-quadratic-convexity-witness"></a>
#### Exercise 2: check a quadratic convexity witness {#section-1385-exercise-2-check-a-quadratic-convexity-witness}
<a id="certificates-capstones-ex-2"></a>

Let
\(R=\begin{bmatrix}1&2\\0&1\end{bmatrix}\). Compute \(Q=R^TR\) and explain
why it certifies convexity of \(\tfrac12x^TQx+c^Tx\).

<details>
<summary>Hint 1</summary>

Multiply the transpose of R by R.
</details>
<details>
<summary>Hint 2</summary>

The quadratic form of the product is the squared norm of Rv.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Direct multiplication gives
\(Q=\begin{bmatrix}1&2\\2&5\end{bmatrix}\). For every \(v\),
\(v^TQv=v^TR^TRv=\|Rv\|_2^2\ge0\), so \(Q\succeq0\). Therefore the quadratic
objective is convex. Since \(R\) is nonsingular, it is actually positive
definite, though only semidefiniteness is needed for convexity.
</details>


<a id="section-1411-exercise-3-classify-two-cuts"></a>
#### Exercise 3: classify two cuts {#section-1413-exercise-3-classify-two-cuts}
<a id="certificates-capstones-ex-3"></a>

The relaxation is \(0\le x_1,x_2\le1\), and the target is
\(\bar x=(3/4,3/4)\). Classify \(x_1+x_2\le2\) and
\(x_1+x_2\le1\).

<details>
<summary>Hint 1</summary>

Check validity on the whole box separately from violation at the named point.
</details>
<details>
<summary>Hint 2</summary>

The point (1,1) refutes the second row as a box-valid inequality.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The first is valid by summing the upper bounds, but its slack at
\(\bar x\) is \(2-3/2=1/2\), so it does not separate. The second is violated
by \(1/2\), but it is not valid for the relaxation because \((1,1)\) is
relaxation-feasible and violates it. Additional integrality structure might
make it valid for a different declared set, but none is given.
</details>


<a id="section-1439-exercise-4-safe-use-of-an-interval-bound"></a>
#### Exercise 4: safe use of an interval bound {#section-1441-exercise-4-safe-use-of-an-interval-bound}
<a id="certificates-capstones-ex-4"></a>

A minimization node's optimal value is enclosed in \([8.02,8.07]\), the
incumbent upper bound is \(8.05\), and \(\varepsilon=0.04\). May the node close?

<details>
<summary>Hint 1</summary>

Use the lower endpoint and compare it with U−ε.
</details>
<details>
<summary>Hint 2</summary>

The required threshold is 8.01, below the safe lower bound 8.02.
</details>
<details>
<summary>Full solution</summary>

**Solution.** The safe lower bound is \(8.02\). Gap closure requires
\(L_N\ge U-\varepsilon=8.01\), which holds, so the node may close for the
\(0.04\)-optimality claim. It may not close for exact optimality merely from
this enclosure because \(8.02<8.05\).
</details>


<a id="section-1465-exercise-5-branch-coverage"></a>
#### Exercise 5: branch coverage {#section-1467-exercise-5-branch-coverage}
<a id="certificates-capstones-ex-5"></a>

An integer parent has \(x\in\{-2,-1,0,1,2\}\). Its children impose
\(x\le0\) and \(x\ge0\). Do they cover the parent, and is overlap a problem?

<details>
<summary>Hint 1</summary>

Coverage permits overlap if it is represented consistently.
</details>
<details>
<summary>Hint 2</summary>

Zero belongs to both children, and no parent integer is omitted.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Their union covers every parent value; \(x=0\) occurs in both.
Overlap does not invalidate coverage, though it may duplicate work and must not
cause the checker to count an incumbent or proof twice. Disjoint branching
with \(x\le0\) and \(x\ge1\) would also cover the integer parent.
</details>


<a id="section-1491-exercise-6-kkt-sufficiency-boundary"></a>
#### Exercise 6: KKT sufficiency boundary {#section-1493-exercise-6-kkt-sufficiency-boundary}
<a id="certificates-capstones-ex-6"></a>

An exact KKT witness is supplied for minimizing a differentiable function over
linear constraints. What additional structural fact is needed before KKT
conditions generically prove global optimality?

<details>
<summary>Hint 1</summary>

KKT sufficiency uses a convex Lagrangian in the variable.
</details>
<details>
<summary>Hint 2</summary>

Require the convex objective/inequality and affine equality setting, not only stationarity.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Convexity is needed: the objective must be convex and the
inequality constraint functions must define a convex feasible set under the
chosen formulation, with affine equalities. Under the appropriate convex KKT
setting, a feasible point and dual multipliers satisfying stationarity, dual
feasibility, and complementarity prove global optimality. Without convexity,
KKT conditions are generally only local first-order conditions.
</details>


<a id="section-1520-exercise-7-model-digest-limitation"></a>
#### Exercise 7: model digest limitation {#section-1522-exercise-7-model-digest-limitation}
<a id="certificates-capstones-ex-7"></a>

A witness's stored model digest matches the checker input. Does that prove the
checker input is the model described in a paper?

<details>
<summary>Hint 1</summary>

A digest connects a witness with serialized bytes.
</details>
<details>
<summary>Hint 2</summary>

The separate prose-to-data translation can still be wrong.
</details>
<details>
<summary>Full solution</summary>

**Solution.** No. The match proves only that the witness is attached to those
serialized bytes, under the digest assumption. A human or separately verified
translation must establish that the bytes encode the paper's variables,
objective, constraints, and units correctly.
</details>


<a id="section-1546-exercise-8-incomplete-nonlinear-domain"></a>
#### Exercise 8: incomplete nonlinear domain {#section-1548-exercise-8-incomplete-nonlinear-domain}
<a id="certificates-capstones-ex-8"></a>

An interval tree verifies \(\log x\) on child box \([0.1,1]\), but the root
declares \(x\in[-1,1]\) and no other child exists. What fails?

<details>
<summary>Hint 1</summary>

Inspect both domain coverage and the definition domain of the logarithm.
</details>
<details>
<summary>Hint 2</summary>

One positive child leaves most of the stated root uncovered.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Coverage fails: the child omits \([-1,0.1)\). Moreover,
\(\log x\) is undefined for \(x\le0\), so the original mathematical model
needs a domain constraint or a defined extended-value convention. A checker
must reject the proof rather than treating undefined evaluations as
infeasibility without a theorem.
</details>


<a id="section-1573-exercise-9-accessibility-audit"></a>
#### Exercise 9: accessibility audit {#section-1575-exercise-9-accessibility-audit}
<a id="certificates-capstones-ex-9"></a>

A tree plot uses green leaves for infeasible nodes and blue leaves for bound
closures, with no labels. Give a sufficient text alternative.

<details>
<summary>Hint 1</summary>

Use stable parent and certificate identifiers in a text table.
</details>
<details>
<summary>Hint 2</summary>

Include bound direction, closure reason, incumbent and tolerance without relying on color.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Provide a table with one row per node containing identifier,
parent, branch predicate, depth, lower bound and its direction, closure reason,
certificate identifier, and checker result. Include the incumbent and tolerance
used for bound closure. This reconstructs both tree structure and mathematical
meaning without color.
</details>


<a id="section-1600-exercise-10-negative-mutation-design"></a>
#### Exercise 10: negative mutation design {#section-1602-exercise-10-negative-mutation-design}
<a id="certificates-capstones-ex-10"></a>

Give three mutations that test logically different parts of a global tree
checker.

<details>
<summary>Hint 1</summary>

Choose corruptions targeting different logical obligations.
</details>
<details>
<summary>Hint 2</summary>

Coverage, regional lower bounds and original incumbent feasibility are independent places to challenge.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Delete one child to test coverage; increase a leaf lower bound
without changing its witness to test bound verification; and perturb the
incumbent so that one original constraint is violated to test primal
feasibility. These target topology, lower-bound arithmetic, and the global
upper-bound witness respectively.
</details>


<a id="section-1627-exercise-11-exact-integer-closure"></a>
#### Exercise 11: exact integer closure {#section-1629-exercise-11-exact-integer-closure}
<a id="certificates-capstones-ex-11"></a>

An integer-valued minimization problem has incumbent \(U=25\) and every open
node has a rigorous lower bound greater than \(24\). What exact conclusion is
available?

<details>
<summary>Hint 1</summary>

Every remaining objective is an integer strictly above twenty-four.
</details>
<details>
<summary>Hint 2</summary>

Combine the resulting lower value twenty-five with its feasible incumbent.
</details>
<details>
<summary>Full solution</summary>

**Solution.** Every feasible objective in every open node is an integer greater
than \(24\), hence at least \(25\). The feasible incumbent attains \(25\), so
it is globally optimal. The proof uses both integrality of the objective and
exhaustive node coverage.
</details>


<a id="section-1654-exercise-12-producer-checker-agreement"></a>
#### Exercise 12: producer--checker agreement {#section-1656-exercise-12-producer-checker-agreement}
<a id="certificates-capstones-ex-12"></a>

The producer and checker both use the same floating-point library and return
identical residuals. Is that independent verification?

<details>
<summary>Hint 1</summary>

Identical output may reproduce a shared arithmetic or model error.
</details>
<details>
<summary>Hint 2</summary>

Distinguish repetition from an independently formulated exact or outward-rounded witness check.
</details>
<details>
<summary>Full solution</summary>

**Solution.** It is useful reproduction evidence, but it may repeat a shared
rounding or implementation error. Stronger verification uses a smaller code
path and exact rational or outward-rounded interval arithmetic. The [verified-computation chapter](../numerical-mathematics-error-algorithms/verified-interval-computation.md) supplies the enclosure hypotheses. Independence
is a spectrum that the report should describe honestly.
</details>

<a id="section-1679-8-final-submission-checklist"></a>
### 8. Final submission checklist {#section-1681-8-final-submission-checklist}

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

<a id="section-1703-source-lineage-and-retained-readings"></a>
## Source lineage and retained readings {#section-1705-source-lineage-and-retained-readings}

The earlier source note distinguishes the linear Farkas alternative route in Schrijver (1986) from interval-operator routes in Moore–Kearfott–Cloud (2009) and Neumaier (copyright 1990; print 1991). It supplies no exact theorem/page locators, so enclosure, nonsingularity, and interior hypotheses remain explicit.

The full earlier [verified-software reading](verified-optimization-software.md) and [proof-log capstones](optimization-capstone-proof-logs.md) are retained as supporting source lineage. Their content is integrated above rather than replaced by links. Original files in the earlier broad optimization book remain unchanged, and the native aliases preserve those chapter identities.
