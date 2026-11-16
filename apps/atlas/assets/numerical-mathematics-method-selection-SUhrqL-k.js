var e=`---
id: recipe-numerical-mathematics-method-selection
title: "Choose, Run, and Audit a Numerical Method"
license: CC BY-SA 4.0
---

# Recipe: Choose, Run, and Audit a Numerical Method

**Before reading.** Read [Models and Direction Fields](/resources/library:book-ode-first-course:models-direction-fields/), [Matrices, Equivalence, and Change of Basis](/resources/library:book-linear-algebra-structure-proofs:matrices-and-change-of-basis/).

Use this recipe when a numerical method must support a mathematical, scientific, or software conclusion. The deliverable is not only an answer; it is an answer plus an error contract and evidence.

## Step 1 — Name the exact target

Write one sentence in mathematical notation and one in ordinary language. Examples:

- locate a zero of continuous f inside $[a,b]$;
- approximate $integral_a^b f$ within an absolute tolerance;
- solve $Ax=b$ to a backward-error threshold;
- approximate a specified initial/boundary problem on a declared interval/domain;
- minimize f over C, returning a stationarity or global bound;
- maximize a bounded integer formulation with a certified gap.

**Stop** if units, domain, boundary data, feasible set, or output meaning are unknown.

## Step 2 — Classify sensitivity before choosing an algorithm

Perturb inputs within their credible scale. Derive or estimate a condition number, singular direction, derivative lower bound, or relaxation gap. Ask whether the requested accuracy is compatible with data uncertainty.

For roots, relate residual to location through a derivative bound. For linear systems, pair residual with conditioning. For interpolation, inspect node geometry. For optimization, distinguish local conditioning from global nonconvexity.

**Stop** if the requested output lies in an unresolved direction. Report nonidentifiability or widen the claim.

## Step 3 — Choose a representation

- scaled variables rather than mixed magnitudes;
- sparse or matrix-free operator rather than dense storage when structure permits;
- barycentric or orthogonal basis rather than unstable monomial expansion;
- exact integers/rationals for small certificate logic;
- bounded binary formulation with derived constants rather than arbitrary big M.

Record how results transform back to original units.

## Step 4 — Match method to structure

| Target and verified structure | Initial candidate | Essential caveat |
|---|---|---|
| continuous scalar root with sign bracket | safeguarded bisection/Newton | continuity and bracket validity |
| smooth interpolation on interval | barycentric Chebyshev nodes | not a noisy-data model |
| smooth integral with localized variation | bounded adaptive quadrature | estimator needs regularity |
| dense square solve | pivoted LU | growth and conditioning |
| tall least squares | QR or SVD | rank and units |
| sparse SPD solve | preconditioned CG | structure and original residual |
| nonstiff smooth initial-value problem | embedded Runge–Kutta | local estimate is not global proof |
| convex smooth minimization | scaled gradient/Newton method | step and dual/feasibility evidence |
| bounded integer model | relaxation plus branch-and-bound | bound validity and finite domains |

No table replaces a theorem or benchmark for the actual structure.

## Step 5 — Predeclare tolerances and work bounds

Use absolute plus relative scales. Set maximum iterations, evaluations, recursion depth, nodes, or memory. For coupled algorithms, relate inner tolerance to outer/discretization error.

A tolerance is a request. Define what happens when it is not met: return a bounded-stop status and best evidence, never silently relabel failure as convergence.

## Step 6 — Build an exact or analytic small case

Before the difficult input, test:

- a polynomial a rule should reproduce;
- a matrix with known solution and spectrum;
- a manufactured field solution;
- a convex quadratic with exact minimizer;
- a tiny integer instance enumerated exhaustively.

Then add a boundary case that should fail: repeated root, singular matrix, nonsmooth integrand, unstable step, violated constraint qualification, or weak relaxation.

## Step 7 — Run with a diagnostic table

### Worked example: a Newton proposal inside a certified bracket

For $f(x)=x^3-x-2$, start with $[1,2]$. Its endpoint values are $-2$ and
4. At the midpoint $3/2$, the value is $-1/8$ and the derivative is $23/4$.
Newton proposes $3/2-(-1/8)/(23/4)=35/23$, which lies inside the bracket.
Direct exact arithmetic gives $f(35/23)=26/12167>0$. Thus the narrowed
interval $[3/2,35/23]$ still contains a root by continuity, and has width
$1/46$. Reporting its midpoint $139/92$ gives location error at most $1/92$.
The derivative is at least 2 on the whole original interval, so the root is
unique there. This is an exact hand calculation showing what a numerical
diagnostic table should preserve: evaluated signs, accepted point and a
location bound. It does not infer a number of correct digits merely from a
small step or residual.

Capture inputs, scales, iterates or refinements, residuals, estimator values, accepted/rejected steps, feasibility, bounds, and stop reason. Preserve unrounded internal diagnostic data even when display is concise.

For visual output, provide the same information in a text summary and table. Color and position may reinforce but never carry the only meaning.

## Step 8 — Verify independently

Choose two checks with different failure pathways:

- bracket plus Newton;
- QR plus SVD on a small case;
- uniform refinement plus manufactured solution;
- analytic integral plus adaptive estimate;
- directional finite difference plus automatic derivative;
- primal feasible point plus dual/relaxation bound;
- branch-and-bound result plus exhaustive enumeration for a tiny instance.

Agreement is evidence, not automatic proof, if inputs or code paths remain shared.

## Step 9 — Stress one scale at a time

Vary step, mesh, degree, tolerance, precision, initial point, node family, or formulation strength separately. Look for predicted orders, plateaus, instability, basin changes, or bound improvement.

Do not change model, mesh, solver, and tolerance simultaneously and call the result a convergence study.

## Step 10 — Report the error budget

Use separate rows:

| Source | Evidence or bound | Effect on claim |
|---|---|---|
| input/data | measurement or parameter range | sensitivity amplification |
| approximation/discretization | theorem or refinement | finite-model bias |
| algebraic iteration | residual and conditioning | incomplete solve |
| floating arithmetic | stability analysis or comparison | rounding pathway |
| implementation | tests and independent cases | remaining defect risk |
| model/statistical | external validation design | application boundary |

Unknown is an acceptable entry. Do not hide it inside a fabricated combined number.

## Step 11 — State the strongest licensed conclusion

Examples:

- “A root exists in this interval, whose width is ...”
- “The computed solve has backward error ..., while forward digits are limited by condition estimate ...”
- “Observed refinement is consistent with order two over these meshes.”
- “This point satisfies scaled first-order conditions; global optimality is not established.”
- “The incumbent is within 0.4 of optimum by a valid relaxation bound.”

## Failure modes and recovery

- **Nonfinite values:** check domains, scaling, and overflow before continuing.
- **Stagnation:** distinguish precision floor, bad conditioning, and broken step logic.
- **Estimator disagreement:** split the domain or use a method with different assumptions.
- **Constraint violation:** return infeasible point status and inspect scaling/qualification.
- **Huge integer tree:** strengthen formulation or bound; do not misstate an incumbent as optimal.
- **Irreproducible paths:** record seeds, ordering, parallel behavior, and conclusion-level tolerance.

## Transfer practice with audit criteria

### Exercise 1: a bracketed root
<a id="numerical-mathematics-method-selection-ex-1"></a>

For $f(x)=x^3-x-2$, begin with $[1,2]$. Design a
bisection-plus-Newton computation that returns an interval certificate, not
only a decimal. State how continuity and the endpoint signs prove existence,
how the final interval bounds location error, and when a Newton proposal must
be rejected in favor of bisection. Compare the residual and interval width;
neither should be silently substituted for the other.

<details><summary>Hint 1</summary>

Compute both endpoint signs and retain a sign-changing bracket after every update.

</details>
<details><summary>Hint 2</summary>

Use the midpoint when a Newton proposal leaves the bracket or fails your
declared progress rule. A final interval is meaningful even without decimal convergence.

</details>
<details><summary>Solution</summary>

The polynomial is continuous, with $f(1)=-2$ and $f(2)=4$, so a root lies
inside. Its derivative $3x^2-1\\ge2$ on this interval proves uniqueness.
From a point in the bracket, form the Newton proposal; accept it only if it
is inside and satisfies a progress rule that prevents indefinite stalling.
Otherwise bisect. Replace the endpoint whose sign agrees with the new point's
sign, keeping the other endpoint. Bisection alone after $m$ steps has width
$2^{-m}$, so a fixed bisection fallback budget guarantees the desired width.
If the returned estimate is the final midpoint, location error is at most
half that width. For any estimate still in the original interval, the mean
value theorem also gives error at most $|f(x)|/2$. These are different
certificates: the bracket certifies existence and location, while the residual
needs a derivative lower bound to control location error.

</details>

### Exercise 2: a sensitive linear solve
<a id="numerical-mathematics-method-selection-ex-2"></a>

Compare

$$
A_\\varepsilon=
\\begin{pmatrix}1&1\\\\1&1+\\varepsilon\\end{pmatrix}
$$

for $\\varepsilon=10^{-2}$ and $10^{-8}$. Choose a right-hand side generated
from a known exact vector, perturb it at a declared scale, and report residual,
forward error, and a condition estimate. Explain why a tiny residual can
coexist with a large change in the recovered vector.

<details><summary>Hint 1</summary>

Choose exact vector $(1,1)$ and compute its right-hand side.

</details>
<details><summary>Hint 2</summary>

Perturb only the second right-hand-side entry by $\\delta$ and subtract the
first equation from the second.

</details>
<details><summary>Solution</summary>

The original right-hand side is $(2,2+\\varepsilon)$. With perturbation
$(0,\\delta)$, the exact solution becomes
$(1-\\delta/\\varepsilon,1+\\delta/\\varepsilon)$, as direct substitution
shows. Its infinity-norm forward error relative to $(1,1)$ is
$|\\delta|/\\varepsilon$. Its residual against the perturbed data is zero;
against the original data the residual norm is only $|\\delta|$.
For $\\delta=10^{-10}$, the forward errors are $10^{-8}$ at
$\\varepsilon=10^{-2}$ and $10^{-2}$ at $\\varepsilon=10^{-8}$.
The infinity-norm condition number is
$(2+\\varepsilon)^2/\\varepsilon$, obtained from the explicit two-by-two
inverse. Thus a small residual is compatible with a much larger forward
error, exactly as the conditioning argument predicts. These symbolic values
are a benchmark, not a claim that a particular floating-point solve was run.

</details>

For either task, a complete submission includes an analytic small case, a
failure case, bounded work, a diagnostic table, one independent check, and a
conclusion whose strength matches the evidence. Repeating the same algorithm
at a second tolerance is a refinement check, but it is not fully independent
verification.

## Final deliverables

Ship target, prerequisites, representation, method rationale, tolerances, bounded work, exact case, adversarial case, diagnostic tables, independent checks, error budget, reproducibility record, and bounded conclusion. If any one is missing, say so explicitly rather than filling the gap with confidence.

Practice the complete audit in [Reliable Numerical Computation](#/item/course-numerical-mathematics-reliable-computation), inspect interpolation and quadrature behavior in the [live laboratory](#/labs?lab=visual-lab-numerical-error-approximation), and use the [solved exercise studio](#/item/exercise-numerical-mathematics-certified-methods) to check certificate directions and stopping arguments.
`;export{e as default};