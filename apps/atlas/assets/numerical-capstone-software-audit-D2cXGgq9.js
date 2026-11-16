var e=`---
parent_id: book-numerical-mathematics-error-algorithms
chapter_id: numerical-capstone-software-audit
status: draft
title: "Numerical Software Audit Capstones"
level: advanced-undergraduate
estimated_minutes: 260
license: CC BY-SA 4.0
---

# Numerical Software Audit Capstones

## Purpose, prerequisites, and deliverables

The prerequisite chapters are **Verified and Interval Computation**
(\`verified-interval-computation\`) and **Nonlinear and Adaptive Field Methods**
(\`nonlinear-adaptive-field-methods\`). This capstone also draws on the entire
book: conditioning, linear algebra, approximation, quadrature, time stepping,
nonlinear solution, mixed precision, and reproducibility.

A numerical software audit is an argument supported by executable evidence. It
asks whether code computes the stated mathematical target, whether its stopping
and failure behavior match its specification, and how far the final claim is
licensed by the evidence. Four substantial projects follow. Each may use a
different language or library, but all submit the same artifact classes:

1. \`problem.md\`: equations, domain, data, units, norms, and assumptions;
2. \`environment.txt\`: runtime, packages, arithmetic, platform, and commands;
3. immutable inputs or their cryptographic hashes and generation code;
4. raw machine-readable output, plus a human-readable text table;
5. \`proof-log.json\`: named checks, inputs, measured values, thresholds, pass or
   fail state, and the theorem or invariant each passing check supports;
6. a failure dossier containing at least one seeded defect or adverse case;
7. \`claims.md\`: claims allowed, claims not allowed, and unresolved risks;
8. an accessibility record for every visual or interactive output.

Screenshots alone are not data. A notebook whose result depends on hidden cell
order is not a reproducible artifact. A green check mark without the measured
quantity and threshold is not a proof log.

## A common audit protocol

### Freeze the target before inspecting output

Write the mathematical problem and acceptance rules first. This prevents
tolerances from being relaxed after seeing an inconvenient result. A useful
rule names an absolute and relative scale:

\\[
\\|r\\|\\le \\tau_{abs}+\\tau_{rel}s,
\\]

where \\(s\\) is defined from inputs, not chosen after the run. The norm, scaling,
and treatment of zero components belong in the specification.

### Build an evidence ladder

Use evidence that fails by different mechanisms:

- exact small cases catch algebra and indexing errors;
- manufactured solutions catch assembly and boundary-condition errors;
- residuals test satisfaction of discrete equations;
- refinement tables test an asymptotic prediction;
- conservation or monotonicity checks test structure;
- a second formulation or implementation reduces common-mode failure;
- interval or analytic bounds can turn selected inequalities into certificates.

Agreement between two runs is useful only after their independence is argued.
Two implementations copied from the same incorrect stencil may agree perfectly.

### Make failure a first-class output

Every command exits nonzero when a mandatory check fails. NaN, infinity,
maximum iterations, interval division by zero, an exhausted refinement budget,
or a missing log field is a failure—not an accepted answer with a warning.
Expected-failure tests demonstrate this policy. Preserve the first failing
iterate or cell and enough state to reproduce it.

### Keep the proof log semantic

Each log entry has fields like

\`\`\`text
check_id, quantity, norm, measured, threshold, relation,
status, input_hash, arithmetic, rationale
\`\`\`

For vector quantities, store the full vector or its artifact path as well as a
norm. For interval checks, store outward-rounded endpoints and inclusion
margins. For stochastic checks, store generator, seed, sample count, and the
probability statement; never label a confidence interval a deterministic
bound.

## Capstone 1: mixed-precision linear solver audit

### Question

When does a low-precision factorization plus high-precision iterative
refinement deliver a trustworthy solution, and how does the implementation
fail as conditioning increases?

### Exact inputs

Use the exact rational rotation
\\(R=\\begin{pmatrix}3/5&-4/5\\\\4/5&3/5\\end{pmatrix}\\) and freeze
\\(Q=\\operatorname{diag}(R,R^{\\mathsf T},-R,R^{\\mathsf T},R)\\). For \\(s \\in \\{1,2,3,4\\}\\), define the exact rational
design matrix

\\(A_s=Q \\operatorname{diag}(2^{-s j})_{j=0}^{9} Q^{\\mathsf T}\\).

Its designed singular values are exactly \\(2^{-s j}\\), but those values must not
be attributed unchanged to a rounded matrix. Round each entry once to binary64,
ties-to-even with fused operations disabled, and store the resulting
\\(\\bar{A}_s\\) as hexadecimal text. Set
\\(x_{\\star}=(1,-2,3,-4,\\ldots,-10)^{\\mathsf T}\\); form \\(\\bar{b}_s\\) by a left-to-right binary64 dot
product of each stored row of \\(\\bar{A}_s\\) with \\(x_{\\star}\\), again without fused
operations, and store \\(\\bar{b}_s\\) in hexadecimal. The pair \\((\\bar A_s,\\bar b_s)\\), not
the rational design, is the authoritative tested system.

Compute its exact reference solution \\(x_{\\mathrm{ref},s}\\) by treating every hexadecimal
entry as a dyadic rational and applying fraction-free Gaussian elimination with
the first nonzero pivot in row order. Store every reference component as an
integer ratio. Forward error is measured against \\(x_{\\mathrm{ref},s}\\). The vector \\(x_{\\star}\\)
is only a manufacturing reference unless exact rational substitution into the
stored pair gives zero; report \\(\\lVert x_{\\mathrm{ref},s}-x_{\\star}\\rVert\\) separately. Report the
singular values of \\(\\bar{A}_s\\) as computed estimates or certified enclosures, and
compare them with the designed spectrum as a perturbation experiment rather
than asserting equality.

Add exactly three integer fixtures: the \\(10\\)-dimensional identity; the unit
lower-bidiagonal matrix with subdiagonal \\(-1\\); and that same matrix with its
last row replaced by its ninth row. For the first two, set the right-hand side
to the exact integer product with \\(x_{\\star}\\). For the singular fixture use that
same product but add one to its last entry, making rows nine and ten
inconsistent. There are therefore
seven matrix cases. Use no row or column scaling. Factor once per case by
binary32 Gaussian elimination with partial pivoting and lowest-index tie
breaking; form residuals and correction updates in binary64; and take at most
eight refinement corrections. The comparison solve is binary64 Householder QR
with column pivoting and lowest-index norm-tie breaking on the *same stored
system*. It is an algorithmically different comparison, not statistically or
data independent. The hard ceiling is seven low-precision factorizations,
\\(56\\) refinement corrections, seven QR solves, and \\(2000\\) total stored residual
evaluations; crossing a ceiling is \`budget_exhausted\`.

### Required outputs and tolerances

For every matrix record:

- singular values or a documented condition estimate;
- factorization pivots and status;
- every residual infinity norm and correction norm;
- normwise backward error
  \\(\\eta=\\lVert b-A\\widehat{x}\\rVert_\\infty/(\\lVert A\\rVert_\\infty\\lVert \\widehat{x}\\rVert_\\infty+\\lVert b\\rVert_\\infty)\\);
- for the four rounded design matrices, forward error against the exact stored-system solution \\(x_{\\mathrm{ref},s}\\), with the already required \\(x_{\\mathrm{ref},s}-x_{\\star}\\) manufacturing comparison reported separately; for the identity and nonsingular bidiagonal fixtures, forward error against their exact solution \\(x_{\\star}\\); for the inconsistent singular fixture, forward error is undefined because no solution exists;
- QR comparison difference;
- total work, formats used at every stage, and final exit status.

For a rejected case, mark quantities that the solver cannot produce as unavailable and state the rejection reason. Acceptance of a nonsingular case requires \\(\\eta\\le 5\\times 10^{-14}\\) and a monotonically decreasing residual until
the threshold or a documented stagnation event. The identity and triangular
cases must achieve forward error at most \\(5\\times 10^{-14}\\). The singular case must be
rejected. No forward-error threshold is imposed on the ill-conditioned cases
without a conditioning factor; instead the report compares observed forward
error with \\(\\kappa(A) \\eta\\) and labels the latter an estimate unless \\(\\kappa\\) is
rigorously bounded.

### Seeded defect and proof log

Replace the binary64 residual by a binary32 residual in one variant. The test
must demonstrate stagnation or loss of accuracy on at least one stored case,
or explain from measured results why this particular suite did not expose it
and add a deterministic adverse matrix that does. Proof-log checks include
input hash, residual recomputation by a separately written routine, singular
rejection, threshold comparison, and arithmetic of each operation.

### Accessibility

A residual-history plot is accompanied by CSV and a text table with iteration,
residual, correction, backward error, and status. Line styles and point symbols,
not color alone, identify formats. The same summary is available without hover.

<a id="worked-mini-audit-1"></a>

### Worked example 1: mini-audit

For \\(A=\\operatorname{diag}(1,10^{-4})\\), \\(x_{\\star}=(1,1)\\), and a computed
\\(\\widehat{x}=(1,1+10^{-8})\\), the residual is \\((0,-10^{-12})\\). With the infinity norm,
\\(\\lVert A\\rVert=1\\), \\(\\lVert \\widehat{x}\\rVert\\approx 1\\), and \\(\\lVert b\\rVert=1\\), so \\(\\eta\\approx 5\\times 10^{-13}\\). The forward error is
\\(10^{-8}\\), about \\(\\kappa(A)\\) times the residual scale. A report that promises
eight correct digits from the residual alone fails the audit; the measured
conditioning explains the amplification.

## Capstone 2: singular and high-dimensional quadrature audit

### Question

Can one integration interface distinguish proved deterministic error,
empirical adaptive estimates, and statistical uncertainty without conflating
their meanings?

### Exact inputs

Use four one-dimensional integrals:

1. \\(\\int_0^{1} \\exp(x) dx=e-1\\);
2. \\(\\int_0^{1} \\sqrt{x} dx=2/3\\);
3. \\(\\int_0^{1} \\log(x) dx=-1\\) as an improper integral;
4. \\(\\int_0^{1} 1/(1+10^{4}(x-0.37)^{2}) dx\\), with its arctangent value.

Use one ten-dimensional integral of \\(\\prod_i (1+x_i)\\) over \\([0,1]^{10}\\), whose
value is \\((3/2)^{10}\\). Store formulas as source text, endpoint conventions, and
reference values as at least 50-digit decimal strings generated independently.
Use composite Simpson with panel counts \\(2^r\\), \\(r=2,\\ldots,14\\), on \\(\\exp(x)\\) and
the peaked rational integrand. For the endpoint cases make the frozen changes
\\(x=t^{2}\\): the transformed integrands are \\(2t^{2}\\) for \\(\\sqrt{x}\\) and
\\(2t \\log(t^{2})\\) for \\(\\log(x)\\), with the continuous limiting value zero assigned at
\\(t=0\\). Apply deterministic adaptive Simpson to all four one-dimensional
integrands: bisect the leftmost interval first, split its absolute budget
equally, reuse endpoint/midpoint values, stop at depth \\(30\\), and fail after
\\(1,000,001\\) distinct function evaluations per integral.

For the ten-dimensional case use plain Monte Carlo only. Generate uniforms
from SplitMix64 with the published integer recurrence implemented modulo
\\(2^{64}\\), map the upper 53 bits to \\([0,1)\\), and use each seed as the complete
initial state. The samples for \\(2^r\\) are the prefix of the stream used at
\\(2^{20}\\), so one run per seed supplies all requested sizes. The hard whole-
capstone ceiling is \\(4,000,004\\) one-dimensional evaluations plus \\(4\\cdot 2^{20}\\)
ten-dimensional samples; no run may replace a failed method silently.

### Required outputs and tolerances

For deterministic runs, store every accepted subinterval, local estimates,
local budgets, total evaluation count, and termination reason. Request
\\(\\tau_{abs}=1\\times 10^{-10}\\), \\(\\tau_{rel}=1\\times 10^{-8}\\). A run passes the empirical accuracy check when
its reference error is below \\(\\tau_{abs}+\\tau_{rel}\\lvert I_{ref}\\rvert\\); it may call that result
verified only when a proved remainder or interval enclosure is also logged.

For randomized runs, use seeds \\({11,29,47,83}\\), prefix sample sizes
\\(2^{10},\\ldots,2^{20}\\), and report estimate, sample variance, standard error, and a
clearly labeled 95% confidence interval under the named assumptions. The audit
checks convergence trends across all seeds but does not require every
confidence interval to contain the truth. It must distinguish probabilistic
coverage from a deterministic enclosure.

### Seeded defect and proof log

Introduce a transformation that omits its Jacobian. At least the \\(\\sqrt{x}\\) or
\\(\\log(x)\\) exact case must fail the reference comparison. Also cap adaptive depth
at two for the peaked integrand. If the named estimator still exceeds tolerance
at the cap, require an explicit \`budget_exhausted\` failure rather than a
tolerance success. If that fixture converges within budget for the chosen fixed
method and order, record the valid success and add a deterministic adverse
fixture whose estimator trace has been preverified to exceed the same cap.
Proof-log entries connect each pass to exactness, a remainder theorem, reference
comparison, or statistical evidence.

### Accessibility

The interval refinement tree has a depth-ordered text representation listing
endpoints, estimate, local indicator, budget, and disposition. Convergence
plots have downloadable tables. A density or heat map for samples has binned
numeric counts and summaries; animation is optional, off by default, and
respects reduced-motion settings.

<a id="worked-mini-audit-2"></a>

### Worked example 2: mini-audit

Composite Simpson with four equal panels on \\(\\exp(x)\\) has the classical bound
\\(e/(180\\cdot 4^{4})\\approx 5.90\\times 10^{-5}\\), assuming exact evaluations and the standard fourth-
derivative theorem. If the observed error is \\(2.3\\times 10^{-6}\\), the audit records both:
the first is a proved discretization bound under hypotheses, while the second
is an exact-reference observation for this case. Substituting the observation
for the bound would weaken the evidence on a new integrand.

## Capstone 3: stiff time-integration and DAE audit

### Question

Do step control, nonlinear solves, and algebraic constraints behave correctly
across stiffness, inconsistent data, and event-like transients?

### Exact inputs

Audit these problems on \\(t \\in [0,1]\\):

- scalar stiff decay \\(y'=-1000(y-\\cos t)-\\sin t\\), \\(y(0)=1\\), exact \\(y=\\cos t\\);
- two-scale system \\(u'=-u\\), \\(v'=-1000(v-u)\\), with \\(u(0)=v(0)=1\\) and exact
  solution \\(u=\\exp(-t)\\), \\(v=(1000 \\exp(-t)-\\exp(-1000t))/999\\);
- index-one DAE \\(y'=-y+z\\), \\(0=y+z-\\exp(-t)\\), with analytically consistent
  initial values \\(y(0)=1,z(0)=0\\), exact solution \\(y=\\exp(-t),z=0\\), and a second
  input \\(y(0)=1,z(0)=10^{-3}\\) perturbing the constraint by \\(10^{-3}\\);
- nonstiff oscillator \\(q'=p\\), \\(p'=-q\\), with \\(q(0)=1,p(0)=0\\) and exact
  solution \\(q=\\cos(t),p=-\\sin(t)\\), used to detect excessive damping.

Compare exactly two frozen adaptive schemes. The explicit scheme is the
Heun--Euler pair: \\(k1=f(t,y)\\), \\(k2=f(t+h,y+h k1)\\), accepted candidate
\\(y+h(k1+k2)/2\\), estimator the componentwise difference from \\(y+h k1\\), and
controller exponent \\(1/2\\). The implicit scheme is backward Euler with one full
step versus two half steps; accept the two-half-step value and use their
difference as the first-order estimator. Solve every implicit stage by damped
Newton with analytic Jacobian, Armijo constant \\(10^{-4}\\), backtracking factor
\\(1/2\\), at most \\(12\\) Newton iterations and \\(20\\) backtracks per iteration.

Run Heun--Euler directly on the ODE cases. For the index-one DAE, run backward
Euler on the coupled differential and algebraic residual. The explicit
comparison first eliminates \\(z=\\exp(-t)-y\\), integrates that resulting ODE, and
reconstructs \\(z\\) from the constraint at every accepted step. Start every run
with \\(h=10^{-3}\\), use safety \\(0.8\\), cap each step factor to \\([0.2,5]\\), clip the
last step to the endpoint, and reject a nonfinite trial. The hard ceiling per
problem/tolerance/method is \\(200000\\) attempted steps, \\(3000000\\) right-hand-side
evaluations, and the Newton ceilings above; crossing one is
\`budget_exhausted\`. Log the reduction so it is not confused with a direct
explicit DAE method.
Use relative tolerances \\({1\\times 10^{-4},1\\times 10^{-6},1\\times 10^{-8}}\\) and absolute tolerance one hundredth
as large. Record the exact nonlinear-solver tolerance rule. Fixed output times
are \\(j/100\\), independent of internal steps.

### Required outputs and tolerances

Store every accepted and rejected step: start time, step size, method order,
error indicator, acceptance threshold, Newton iterations, nonlinear residual,
and failure state. At output times store state error when exact, the DAE
constraint residual, and a componentwise scale. Acceptance requires every
final component error to be no more than five times
\\(\\tau_{abs}+\\tau_{rel} \\max(\\lvert y_{exact}\\rvert,\\lvert y_{computed}\\rvert)\\) on the exact solutions and no
unclassified NaN or infinity. Underflow of the decaying \\(\\exp(-1000t)\\) reference
component to zero is permitted only when logged with its format threshold and
when the resulting absolute error remains below the declared scale. The DAE
constraint infinity norm must be below
\\(10(\\tau_{abs}+\\tau_{rel} \\max(1,\\lVert y\\rVert_\\infty,\\lVert z\\rVert_\\infty))\\). The inconsistent DAE input must be rejected or
projected by an explicitly selected and logged policy.

Run a tolerance refinement study. A decreasing error trend supports controller
behavior but is not a theorem for arbitrary stiff systems. For the oscillator,
report amplitude and phase errors separately. For the stiff problems, report
rejected-step clusters and compare work; “method A is faster” is not allowed
without environment and cost definitions.

### Seeded defect and proof log

The defect variant accepts a step after its Newton iteration hits the maximum
without meeting the nonlinear residual threshold. An expected-failure test
requires the run to exit nonzero and preserve the offending step record. A
second check recomputes DAE constraints from saved states instead of trusting
solver diagnostics.

### Accessibility

Step-size and residual plots have synchronized text tables at fixed output
times plus a separate accepted/rejected-step log. Spikes are described by time
and value. Dash patterns and markers encode methods. No conclusion depends on
perceiving color or motion.

<a id="worked-mini-audit-3"></a>

### Worked example 3: mini-audit

Suppose an implicit step reports nonlinear residual \\(8\\times 10^{-7}\\) while its specified
threshold is \\(1\\times 10^{-9}\\); the time-step indicator is \\(2\\times 10^{-8}\\) against \\(1\\times 10^{-6}\\). The step
fails. A small truncation indicator for an unsolved stage equation does not
repair the algebraic error. The proof log contains two separate comparisons,
so an implementation cannot overwrite the failed nonlinear check with the
passing time-error check.

## Capstone 4: nonlinear adaptive field-solver audit

### Question

Does an adaptive finite-element or finite-volume solver correctly assemble,
solve, refine, conserve, and report a nonlinear boundary-value problem?

### Exact inputs

On the unit square solve

\\[
-\\nabla\\cdot((1+u^{2})\\nabla u)=f,
\\qquad u=g\\text{ on the boundary},
\\]

using \\(s=\\sin(\\pi x)\\sin(\\pi y)\\) and manufactured solution \\(u_{\\star}=s+x\\). Freeze
\\(g=x\\) on the entire boundary and
\\(f=2\\pi^{2}(1+u_{\\star}^{2})s-2u_{\\star}[(\\pi \\cos(\\pi x)\\sin(\\pi y)+1)^{2}+(\\pi \\sin(\\pi x)\\cos(\\pi y))^{2}]\\).
Store those formulas as immutable source text and check them at the sixteen points
\\((i/5,j/5)\\), \\(i,j \\in {1,2,3,4}\\). Use continuous affine triangles on the square
grid obtained by splitting every cell along its southwest-to-northeast
diagonal. The uniform cases have \\(h \\in {1/4,1/8,1/16}\\). The adaptive case starts
at \\(h=1/4\\), marks the shortest lexicographic prefix whose squared residual
indicators reach fraction \\(0.4\\), red-refines marked triangles, and performs
deterministic conformity closure in increasing cell-ID order, for at most six
refinements.

Use the three-point degree-two triangle rule, symmetric row-and-column
elimination of boundary nodes, damped Newton from the interpolated boundary
lifting and zero interior correction, analytic Jacobian, Armijo constant
\\(10^{-4}\\), and halving backtracks. Stop Newton at scaled residual \\(10^{-10}\\) or
after \\(20\\) iterations and \\(20\\) backtracks per iteration. Solve each Newton
system by fixed-order sparse Gaussian elimination with partial pivoting and
relative residual target \\(10^{-12}\\); cap it at one factorization per Newton step.
The whole capstone permits at most \\(250000\\) degrees of freedom, seven adaptive
meshes including the initial mesh, \\(200\\) nonlinear iterations, and \\(4000\\)
residual/Jacobian assemblies. Crossing any ceiling is \`budget_exhausted\`.

### Required outputs and tolerances

For every mesh record cells, degrees of freedom, minimum quality measure,
nonlinear iterations, assembly residual, algebraic residual, estimator, marked
cell identifiers, and errors in \\(L^{2}\\) and the energy seminorm computed against
the manufactured solution. Also record boundary error and a global flux balance
when the discretization supplies meaningful numerical fluxes.

The three uniform meshes must show positive observed convergence order in both
norms; expected theoretical order is stated only under the exact method and
regularity theorem used. Every converged nonlinear solve must satisfy its
specified scaled residual. Adaptive runs pass the workflow check if marked
identifiers match the deterministic rule, meshes remain valid, and the final
error is below the initial error. These tests verify behavior on the named
problem; they do not prove the estimator reliable for every nonlinear PDE.

### Seeded defect and proof log

Reverse one boundary-edge normal or omit the nonlinear coefficient derivative
from the Jacobian. The audit must expose the defect through a manufactured-
solution error, flux imbalance, directional derivative check, or degraded
Newton convergence. The Jacobian check compares \\(J(u)v\\) with a centered
directional difference over a predeclared range of step sizes and stores the
full discrepancy table.

### Accessibility

Mesh images have companion files listing node coordinates, connectivity,
boundary labels, cell indicators, and marked status. A text summary gives
minimum, median, and maximum indicator with their cell identifiers. Keyboard
selection exposes the same cell data as pointer selection, and refinement
animation has a static sequence and reduced-motion mode.

<a id="worked-mini-audit-4"></a>

### Worked example 4: mini-audit

On three meshes with \\(h=1/4,1/8,1/16\\), suppose \\(L^{2}\\) errors are
\\(0.031,0.0081,0.0020\\). The observed orders are
\\(\\log_2(0.031/0.0081)\\approx 1.94\\) and \\(\\log_2(0.0081/0.0020)\\approx 2.02\\). This supports
second-order behavior for the chosen case. It does not prove an asymptotic
theorem, and it is not enough by itself: the audit still checks residuals,
boundary data, mesh validity, and the manufactured forcing.

## Cross-project review rubric

Each project is reviewed independently under six headings.

1. **Specification:** exact target, inputs, norms, tolerances, and claim are
   frozen and internally consistent.
2. **Reproduction:** a clean command recreates every table from immutable
   inputs, with no network dependency or hidden interactive state.
3. **Numerical reasoning:** conditioning, approximation, roundoff, solver, and
   model terms are separated at the scale relevant to the project.
4. **Adversarial evidence:** the seeded defect fails for the intended reason,
   and unexpected failure cannot be silently converted to success.
5. **Proof discipline:** logs distinguish theorem, verified bound, exact-case
   comparison, empirical convergence, and statistical evidence.
6. **Communication and access:** claims have plain-language scope; all figures
   have meaningful numerical alternatives and controls are keyboard usable.

A polished report cannot compensate for a missing raw log. Passing all named
cases does not prove universal correctness. Conversely, finding a defect is not
a failed capstone: a precise reproduction, diagnosis, and repaired regression
test is excellent audit work.

## Artifact schemas and deterministic reproduction

Every project provides a single noninteractive audit command. It starts from a
clean output directory, validates inputs, runs the declared cases, and writes a
manifest mapping every derived artifact to its hash and generating command.
The command never downloads data. It fails if an input hash differs, a case is
skipped, an expected-failure case unexpectedly succeeds, or an output contains
NaN or infinity outside an explicitly permitted field.

Tables use stable column names and lossless numeric text. Floating-point values
needed for exact replay use hexadecimal representation alongside a readable
decimal rendering. Intervals have separate lower and upper fields rather than a
locale-dependent string. Units, norm names, and arithmetic formats are columns
or schema fields, not assumptions buried in captions.

The proof-log schema distinguishes at least these statuses:

- \`pass\`: the stored comparison was evaluated and true;
- \`fail\`: the comparison was evaluated and false;
- \`not_applicable\`: the check has a documented reason not to apply;
- \`not_run\`: evidence is missing and the enclosing audit cannot pass;
- \`inconclusive\`: a sufficient test failed without disproving the property.

This vocabulary prevents a failed interval-contraction test from being called a
counterexample, and prevents a resource limit from becoming \`not_applicable\`.
The checker recomputes every simple comparison. It also verifies relational
direction: a residual uses \\(\\le\\), an inclusion margin uses \\(>0\\), and a maximum-
iteration event is not interchangeable with convergence.

Reproduction has levels. A fixed scalar implementation may promise bitwise
identical output. A parallel reduction may promise values within a named bound
and the same pass/fail decisions. A stochastic experiment may promise the same
pseudorandom stream under a pinned generator. Each project declares its level
and supplies a comparison tool; vague “results may vary” wording is not an
acceptance rule.

## Triage, repair, and regression

When a check fails, first preserve the evidence. Do not overwrite the output by
immediately rerunning with a looser tolerance. Record the first failing case,
environment, input hash, seed, iteration or cell identifier, and relevant
internal state. Reduce the failure to the smallest deterministic fixture while
retaining the original artifact.

Classify the failure before repairing it:

1. **specification failure:** equations, units, tolerance, or expected result
   are wrong or ambiguous;
2. **implementation failure:** indexing, formulas, state updates, parsing, or
   exceptional paths violate the specification;
3. **numerical-design failure:** the implementation matches an unstable or
   unsuitable algorithm;
4. **evidence failure:** the answer may be correct, but the claimed bound or
   independent check is absent;
5. **environment failure:** unsupported arithmetic or nondeterministic runtime
   behavior violates the declared reproduction contract.

A repair changes the smallest responsible layer and adds a regression test that
fails on the old behavior. Then rerun the full suite, because a locally correct
patch may alter other conditioning, stopping, or performance behavior. The
audit report shows before-and-after proof-log rows and explains why the repair
addresses the cause rather than merely the observed symptom.

<a id="worked-mini-audit-5"></a>
<a id="worked-mini-audit-5-a-tolerance-is-not-a-diagnosis"></a>

### Worked example 5: mini-audit: a tolerance is not a diagnosis

A nonlinear PDE run stops at residual \\(1.4\\times 10^{-9}\\) against threshold \\(1\\times 10^{-10}\\) after
the maximum 20 iterations. Raising the threshold to \\(1\\times 10^{-8}\\) would make the row
green but provides no diagnosis. The correct triage preserves the iterate,
checks Jacobian directional differences, scaling, linear-solve residuals, and
line-search decisions, then classifies the failure. If the Jacobian omits a
boundary derivative, repair that term and add a boundary-sensitive regression
fixture; retain the original threshold unless the mathematical specification
itself was shown inappropriate.

## Team roles without diluted responsibility

Substantial audits benefit from rotating roles: specification author,
implementation owner, adversarial tester, and evidence reviewer. The reviewer
must be able to reject a claim even when every command exits successfully. Each
student signs the parts personally inspected, and the final dossier maps files
to authors and reviewers. Shared work does not permit an unowned proof log.

Before submission, exchange one project with another team for a clean-room
reproduction. The receiving team gets only the documented inputs and commands.
Questions and deviations become audit findings. A successful reproduction
means the declared artifact was recreated under the allowed environment; it
does not independently validate the scientific model or prove universal
software correctness.

The four projects are all mandatory. A project with an honest failing audit may
pass when it supplies a minimal reproducer, justified diagnosis, repair, and
regression test. A project with unexplained skipped cases cannot pass. Reviewers
grade the trace from specification to evidence and claim, not the attractiveness
of plots or the raw number of successful solver runs.
The final assessment also samples raw records against prose summaries, so a
correct aggregate cannot conceal one failed case, discarded outlier, or changed
threshold.

## Verification and reproducibility in one argument

The following foundations make the audit's evidence labels precise. They retain the verification route's distinction between a mathematical approximation, its implementation, uncertain data and the chosen physical model.

## Four sources of disagreement

A numerical result can disagree with reality or another implementation because of:

1. **mathematical approximation error:** replacing an exact target by a finite rule;
2. **implementation error:** code does not implement the intended rule;
3. **input or statistical uncertainty:** data and estimated parameters vary;
4. **model discrepancy:** the mathematical problem omits or idealizes relevant mechanisms.

Roundoff and algebraic-solver error are subparts of computation, while discretization error comes from the finite approximation. These categories interact, but merging them into one “uncertainty” number hides the remedy.

## Verification versus validation

**Verification** asks whether equations and algorithms were solved as intended. **Validation** asks whether the model adequately represents its intended setting. A manufactured solution verifies assembly but cannot validate a heat-transfer law. Agreement with one dataset may support validation but can also reflect calibration, confounding, or compensating errors.

The claim ladder is:

- exact identity or theorem;
- proved bound under hypotheses;
- deterministic computation with residual/error evidence;
- convergence observation across refinements;
- empirical comparison;
- application claim under model and data assumptions.

Every report should state where it stops.

## A reproducible experiment contract

A rerunnable numerical experiment records:

- exact mathematical target and parameter units;
- input data, preprocessing, and hashes or embedded small cases;
- algorithm, numeric format, tolerances, and stop rules;
- software/runtime versions and relevant hardware behavior;
- random generator and seed when sampling is used;
- raw diagnostic table, not only a plot;
- expected invariant, bound, or convergence pattern;
- failure states and how they are surfaced.

Bitwise equality across hardware may be unnecessary or impossible for parallel reductions. If so, specify the reproducibility level: same mathematical conclusion, bounded numerical difference, or bitwise output under a fixed environment.

## Independent checks

An effective check fails differently from the primary method. Examples include:

- bisection bracket alongside Newton iteration;
- QR result alongside normal-equation code;
- exact rational small case alongside floating-point general code;
- conservation balance alongside pointwise error;
- primal feasible value and dual bound;
- manufactured solution and mesh refinement;
- automatic derivative and centered directional difference.

Two programs copied from the same formula may share a sign or indexing error. Independence concerns reasoning pathways, not filenames.

## Refinement studies

Suppose \\(Q_h=Q+C h^p+o(h^p)\\). Three resolutions permit an order diagnostic. If the differences shrink by about \\(2^p\\) when \\(h\\) halves, Richardson extrapolation estimates

\\(Q \\approx Q_{h/2}+(Q_{h/2}-Q_h)/(2^p-1)\\).

The method assumes the leading error expansion is active. It can fail before the asymptotic regime, after roundoff dominates, at nonsmooth points, or when a refinement changes another parameter such as solver tolerance or geometry.

### Worked order audit

Endpoint approximations are \\(0.8120,0.8030,0.80075\\) at steps \\(h,h/2,h/4\\). Differences are \\(0.009\\) and \\(0.00225\\), ratio four, consistent with order two. Extrapolating from the finer pair gives

\\(0.80075+(0.80075-0.8030)/3=0.80000\\).

This neat result should invite a test at \\(h/8\\), not end the audit.

## Property-based mathematical tests

Example tests confirm selected outputs. Property tests check invariants across bounded families:

- interpolation returns every node value within a declared tolerance;
- quadrature weights sum to interval length;
- a branch-and-bound lower bound never exceeds the best feasible value in minimization;
- a residual-merit line search decreases its merit;
- changing scale consistently transforms a computed result;
- seeded deterministic routines repeat exactly.

Random testing remains finite evidence. Use deterministic seeds and preserve the smallest counterexample when a property fails.

## Statistical uncertainty is different

Repeated simulation can estimate Monte Carlo variability. It does not measure discretization bias unless the design varies the discretization. A bootstrap quantifies variation under a resampling model; it does not detect a systematically wrong numerical solver or an unrepresentative dataset.

Report separate rows for sampling variation, parameter uncertainty, numerical tolerance, discretization, and structural model discrepancy. Some rows may be unknown rather than forced into a false combined standard error.

## Reproducibility hazards

- Parallel reduction changes addition order.
- Unspecified random seeds or generator versions change paths.
- Adaptive algorithms branch on rounded comparisons.
- Compiler optimizations can contract operations or reassociate expressions.
- Data cleaning and unit conversion may be outside the recorded script.
- A cached intermediate can survive changed inputs.

The response is not to ban optimization or parallelism. Define invariants and tolerances appropriate to the claim, and record enough state to investigate deviations.

## A numerical incident template

When results disagree:

1. preserve both outputs and environments;
2. reduce to the smallest failing input;
3. classify whether the target, approximation, implementation, or input differs;
4. check dimensions, units, signs, and boundary indices;
5. compare exact or higher-precision small cases;
6. inspect residual and invariant histories;
7. vary one scale at a time;
8. document root cause and add a regression test.

Do not “fix” a discrepancy by loosening a tolerance until the reason is known.

## Common errors

- Equating deterministic reruns with correctness.
- Calling two rounded displays equal without retaining full diagnostic values.
- Changing mesh, timestep, tolerance, and model simultaneously in a refinement study.
- Treating a statistical confidence interval as containing discretization or model error automatically.
- Omitting failed parameter cases from a report.

## Two quantitative audit arguments

**Definition 1 (An error budget).** For a scalar target $Q$ and reported approximation $\\widehat Q$, an error budget identifies a sequence of intermediate mathematical quantities and bounds each difference. A proved triangle-inequality bound is valid only when every term refers to the same units and target conventions. Unknown terms remain unknown rather than being silently set to zero.

**Proposition 2 (A deterministic budget).** Suppose $Q$ is the specified continuum output, $Q_h$ the exact output of a stated discrete problem, $Q_h^*$ its exactly evaluated value at a computed state, and $\\widehat Q$ its machine evaluation. If
$$|Q-Q_h|\\le D,\\qquad |Q_h-Q_h^*|\\le A,\\qquad
|Q_h^*-\\widehat Q|\\le R,$$
then $|Q-\\widehat Q|\\le D+A+R$.

*Proof.* Add and subtract $Q_h$ and $Q_h^*$, then apply the scalar triangle inequality to the resulting three differences. ∎

The simple proof is useful because it exposes missing links. A verified coefficient enclosure can supply an algebraic term only after the output's sensitivity to coefficients is bounded. A discretization estimator supplies $D$ only if a reliability theorem with the required constants applies. Statistical confidence limits do not become deterministic $D,A,R$ merely by being printed in the same table.

**Proposition 3 (Richardson cancellation under an explicit remainder).** Suppose
$Q_h=Q+Ch^p+r_h$, $p>0$, and $|r_h|\\le Kh^{p+\\alpha}$ for some $\\alpha>0$, on both meshes. Define
$$Q_{\\mathrm{ext}}=\\frac{2^pQ_{h/2}-Q_h}{2^p-1}.$$
Then
$$|Q_{\\mathrm{ext}}-Q|
\\le\\frac{K(1+2^{-\\alpha})}{2^p-1}h^{p+\\alpha}.$$

*Proof.* Substitution cancels the $C$ terms because $2^p(h/2)^p=h^p$. The remaining numerator is $2^p r_{h/2}-r_h$. Its absolute value is at most
$K h^{p+\\alpha}(2^{-\\alpha}+1)$. Dividing by the positive denominator gives the result. ∎

Observed ratios alone do not establish the remainder inequality. An accidental cancellation of the leading coefficient can create an apparent order above the design value, and a common bias can survive every refinement. Keep raw approximations and differences, not only a fitted exponent.

**Worked example 6 (A deterministic versus probabilistic margin).** Suppose a computed design output is $1.03$, and a proved deterministic numerical bound is $0.01$. Then the mathematical model output lies in $[1.02,1.04]$, hence exceeds a threshold of one with margin at least $0.02$. If a statistical analysis instead gives a nominal 95% interval $[1.02,1.04]$, the interpretation depends on its sampling model and coverage construction. It is not a guaranteed interval for each data realization. A physical-model discrepancy with unknown size still prevents an unconditional application claim in either case.

A useful final claim table therefore includes the mathematical object, its quantifiers, the strongest supporting theorem or observation, the numeric margin, the arithmetic contract and the unresolved terms. “Pass” names a particular comparison, not universal correctness of the program or relevance of the physical model. This makes it possible to retain a reproducible failed run as meaningful evidence rather than discarding it from an attractive aggregate.

## Solved preparation exercises

### Exercise 1: Design a scaled residual rule
<a id="numerical-capstone-software-audit-ex-1"></a>

A system has residual \\(r\\), right-hand
side \\(b\\), matrix \\(A\\), and approximation \\(\\widehat{x}\\). Give a scale-aware backward-
error test and handle a zero denominator.

<details>
<summary>Hint 1</summary>

**Hint.** Specify numerator and denominator.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Handle a zero scale explicitly.

</details>

<details>
<summary>Solution</summary>

**Solution.** Use
\\(\\eta=\\lVert r\\rVert/(\\lVert A\\rVert\\lVert \\widehat{x}\\rVert+\\lVert b\\rVert)\\) in a subordinate norm. Accept when
\\(\\eta\\le \\tau\\), while also storing numerator and denominator. If the denominator is
zero, then \\(A \\widehat{x}=0\\) and \\(b=0\\) in the computed scale; define \\(\\eta=0\\) only when
the verified residual is also zero, otherwise report infinity. An absolute
residual floor may be specified separately before the run.

</details>

### Exercise 2: Explain an expected-failure test
<a id="numerical-capstone-software-audit-ex-2"></a>

Why must a singular matrix fixture
make the linear-solver command fail rather than merely print a warning?

<details>
<summary>Hint 1</summary>

**Hint.** Consider downstream use of an exit status.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A warning need not block an invalid vector.

</details>

<details>
<summary>Solution</summary>

**Solution.** Downstream automation otherwise sees a successful exit and may
consume an invalid vector. The fixture establishes that rank or pivot failure
propagates through the public interface. The test asserts nonzero exit status,
a stable failure code, no success certificate, and a diagnostic identifying the
failed condition without treating a partial vector as an answer.

</details>

### Exercise 3: Label quadrature evidence
<a id="numerical-capstone-software-audit-ex-3"></a>

An adaptive rule reports \\(1.00000003\\) with an
internal estimate \\(4\\times 10^{-8}\\); an exact reference is \\(1\\). What may be claimed?

<details>
<summary>Hint 1</summary>

**Hint.** Compute reference error separately.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A single estimator comparison is not a universal bound.

</details>

<details>
<summary>Solution</summary>

**Solution.** The observed reference error is \\(3\\times 10^{-8}\\), and the internal
estimator exceeds it on this case. This supports correct behavior for the
fixture. It is not a general rigorous \\(4\\times 10^{-8}\\) error bound unless a theorem with
verified hypotheses supports the estimator. Record the estimator and observed
error in separate fields.

</details>

### Exercise 4: Check statistical wording
<a id="numerical-capstone-software-audit-ex-4"></a>

Across 100 independent nominal 95%
confidence intervals, 94 contain the exact integral. Does this verify every
future interval?

<details>
<summary>Hint 1</summary>

**Hint.** Read coverage as a sampling probability.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** It does not promise containment on every run.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. The count is compatible with nominal coverage and is a useful
calibration diagnostic. Coverage is a repeated-sampling probability under the
sampling and model assumptions; it does not guarantee containment for any one
interval or future run. Seeds, independence, interval construction, and the
binomial variability of the count must be recorded.

</details>

### Exercise 5: Separate solver tolerances
<a id="numerical-capstone-software-audit-ex-5"></a>

A time step passes its local-error test but
fails its Newton residual tolerance. Can it be accepted?

<details>
<summary>Hint 1</summary>

**Hint.** List the time estimator's assumptions.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Unsolved stages introduce uncontrolled errors.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. The local-error estimate assumes the stage or implicit step
equations were solved adequately. A failed nonlinear solve adds uncontrolled
algebraic error. The log retains both results, rejects the step, and either
retries under the declared policy or terminates with failure.

</details>

### Exercise 6: Audit observed order
<a id="numerical-capstone-software-audit-ex-6"></a>

Errors on successively halved meshes are
\\(0.08,0.021,0.0055\\). Compute two observed orders and state the limit of the
claim.

<details>
<summary>Hint 1</summary>

**Hint.** Compute error ratios.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Limit the claim to these grids and this output.

</details>

<details>
<summary>Solution</summary>

**Solution.** The orders are \\(\\log_2(0.08/0.021)\\approx 1.93\\) and
\\(\\log_2(0.021/0.0055)\\approx 1.93\\). They support approximately second-order convergence
for these meshes and this measured quantity. They neither prove the asymptotic
theorem nor establish correctness on different geometries, regularities, or
boundary conditions.

</details>

### Exercise 7: Find common-mode dependence
<a id="numerical-capstone-software-audit-ex-7"></a>

Two PDE codes agree to twelve digits, but
both import the same routine that generates manufactured forcing. What
independent check should be added?

<details>
<summary>Hint 1</summary>

**Hint.** Trace the shared generator.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Check forcing through another derivation.

</details>

<details>
<summary>Solution</summary>

**Solution.** Derive or evaluate the forcing through a separate path: symbolic
differentiation with a checked expanded expression, high-precision automatic
differentiation, or exact point values derived by hand. Test the shared routine
at fixed points before using solver agreement. Otherwise one sign error in the
shared generator can make both codes agree on the wrong problem.

</details>

### Exercise 8: Specify an accessible residual plot alternative
<a id="numerical-capstone-software-audit-ex-8"></a>

What minimum table
supports the same audit conclusion as a residual-history plot?

<details>
<summary>Hint 1</summary>

**Hint.** List numeric information in the plot.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Include thresholds and failure markers.

</details>

<details>
<summary>Solution</summary>

**Solution.** Include iteration or step identifier, residual value and norm,
acceptance threshold, correction norm when relevant, pass/fail status, and any
restart or rejection marker. Give exact numeric text rather than color names.
Identify the minimum, maximum, first threshold crossing, and stagnation region.
Provide it in keyboard-reachable HTML or a downloadable structured file.

</details>

### Exercise 9: Validate a proof-log threshold
<a id="numerical-capstone-software-audit-ex-9"></a>

A log stores measured \\(9\\times 10^{-9}\\), threshold
\\(1\\times 10^{-8}\\), relation \\(<\\), and status \`fail\`. Is the record internally consistent?

<details>
<summary>Hint 1</summary>

**Hint.** Recompute the relation.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Stored status must match its inequality.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. Since \\(9\\times 10^{-9} < 1\\times 10^{-8}\\), that comparison passes. A schema-level
checker should recompute Boolean status from measured value, threshold, and
relation rather than trust the stored word. It should also reject NaN and
missing units or norms.

</details>

### Exercise 10: Bound the claim after a verified algebraic solve
<a id="numerical-capstone-software-audit-ex-10"></a>

An interval method
encloses the exact coefficient vector of a discrete PDE system. List two major
errors still outside that certificate.

<details>
<summary>Hint 1</summary>

**Hint.** Identify what the coefficient certificate encloses.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Separate discretization and physical discrepancy.

</details>

<details>
<summary>Solution</summary>

**Solution.** Discretization error remains between the exact discrete solution
and the continuous PDE solution. Model or data discrepancy remains between the
PDE and the intended physical setting. Assembly or geometry error may also be
outside unless the interval formulation encloses them. The capstone report
therefore says “verified algebraic solution of the specified assembled system,”
not “verified physical field.”

</details>

## Final dossier

The four projects end with one indexed dossier. Its opening page lists each
claim beside its strongest evidence and links to the raw record. A second table
lists every non-claim: unverified library behavior, model validity, uncovered
domains, statistical assumptions, or unresolved platform variation. A clean
reproduction command regenerates all derived tables, then a separate checker
validates schemas, hashes, thresholds, interval inclusions, and expected
failures.

The lasting habit is not suspicion of all computation. It is precision about
what a run means. Fast methods propose answers; residuals, exact cases,
refinement, structure, independent formulations, and interval bounds test
different parts of them. A defensible numerical result preserves those layers
and stops its claim exactly where the evidence stops.


## Further preparation exercises

### Exercise 11: Classify errors
<a id="numerical-capstone-software-audit-ex-11"></a>

A finite-element code passes a manufactured solution, but field observations disagree. What has been learned?

<details>
<summary>Hint 1</summary>

**Hint.** Identify which equations were selected by the manufactured solution.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Then list assumptions outside that construction.

</details>

<details>
<summary>Solution</summary>

**Solution.** The comparison supports implementation verification for the chosen constructed case. It does not validate constitutive laws, parameters, boundary observations or data processing. Those remain explanations to investigate; one successful case does not eliminate other implementation errors.

</details>

### Exercise 12: Independent derivative check
<a id="numerical-capstone-software-audit-ex-12"></a>

Why compare $g^{\\mathsf T}v$ with a centered finite difference in several directions $v$?

<details>
<summary>Hint 1</summary>

**Hint.** The scalar difference estimates one directional derivative.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Vary the finite-difference step to distinguish truncation from rounding.

</details>

<details>
<summary>Solution</summary>

**Solution.** It checks the implemented gradient through a different evaluation path. Several directions can reveal transpose and indexing errors. A decreasing-then-leveling discrepancy over a range of steps helps distinguish derivative mistakes from finite-difference and arithmetic errors; one step and one direction can miss a defect.

</details>

### Exercise 13: Reproducibility level
<a id="numerical-capstone-software-audit-ex-13"></a>

Two parallel runs differ in the last few bits but satisfy the same residual bound and decision threshold. Is the experiment necessarily irreproducible?

<details>
<summary>Hint 1</summary>

**Hint.** Read the declared equality contract.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Bitwise and conclusion-level reproduction are different requirements.

</details>

<details>
<summary>Solution</summary>

**Solution.** It can satisfy a declared bounded-numerical or conclusion-level contract while failing a bitwise contract. The required level must be specified in advance, along with the residual bound and decision margin. Last-bit differences alone do not decide the question.

</details>

## Sources

The triangle-inequality budget and Richardson cancellation are proved here. Rump's [Verification methods](https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf) is further reading for turning selected inequalities into rigorous certificates. Roache, *Verification and Validation in Computational Science and Engineering* (1998), is a retained terminology reference; no exact consulted locator for its definitions is asserted, and this chapter states its adopted meanings explicitly. No named current package behavior or observed external run is asserted. Execution evidence must identify actual package, compiler, arithmetic, input and output versions; algorithm papers alone cannot certify an execution.

## Summary

A numerical software audit links a specified mathematical target to an approximation, an implementation, raw diagnostics and a bounded conclusion. The four capstones retain separate ledgers for conditioning, discretization, roundoff, solve error and statistical uncertainty. Exact cases, manufactured solutions, refinement, invariants and certificates support different claims. Reproduction makes the recorded argument replayable; independent inspection and explicit unresolved terms determine how far it can be trusted.
`;export{e as default};