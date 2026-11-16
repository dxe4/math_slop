var e=`---
parent_id: book-numerical-mathematics-optimization-by-structure
chapter_id: certificates-diagnostics
title: "Certificates, Diagnostics, and Honest Stopping"
level: graduate
estimated_minutes: 115
license: CC BY-SA 4.0
---


## Sources {#section-2-source-and-verification-note}

Distinguish the linear Farkas alternative route in Schrijver (1986) from interval-operator routes in Moore–Kearfott–Cloud (2009) and Neumaier (copyright 1990; print 1991). No exact theorem/page locators are specified here, so enclosure, nonsingularity, and interior hypotheses remain explicit.
# Certificates, Diagnostics, and Honest Stopping {#section-5-certificates-diagnostics-and-honest-stopping}

## What an optimizer should return {#section-7-what-an-optimizer-should-return}

A trustworthy optimizer returns more than a vector. Depending on structure, it should provide:

- primal feasibility evidence;
- objective value in original units;
- stationarity or projected-gradient residual;
- dual feasibility and primal–dual gap;
- curvature or second-order evidence;
- integer incumbent and global bound;
- termination reason and unresolved limitations.

No single certificate applies to every problem. This chapter assembles a decision framework.

## Convex primal–dual certificates {#section-21-convex-primal-dual-certificates}

For convex minimization, any primal-feasible x supplies an upper bound \\(f(x)\\), and any dual-feasible multipliers supply lower bound \\(q(\\lambda,\\nu)\\). The gap

\\(f(x)-q(\\lambda,\\nu)\\ge 0\\)

bounds objective suboptimality if weak duality holds and both values are computed validly.

A small gap does not imply x is close in variables unless the objective has growth such as strong convexity. If f is \\(\\mu\\)-strongly convex and x* is the minimizer,

\\(f(x)-f(x^{\\star}) \\ge (\\mu/2)\\lVert x-x^{\\star}\\rVert^{2}\\),

so an objective-gap upper bound epsilon gives distance at most \\(\\sqrt{2\\varepsilon/\\mu}\\). Without such curvature, many distant points can have nearly equal value.

## Stationarity certificates {#section-35-stationarity-certificates}

Unconstrained smooth problems use a scaled gradient norm. Box or general convex constraints use a projected-gradient or normal-cone residual. Composite nonsmooth problems can use a proximal-gradient mapping. Equality/inequality problems use KKT components.

For nonconvex objectives, these certify only approximate stationarity of a chosen type. Negative-curvature searches can strengthen a first-order point to approximate second-order stationarity, but still do not establish global optimality.

### Scaling example {#section-41-scaling-example}

Let \\(f(x,y)=(x-1)^{2}+(10^{-6} y-1)^{2}\\). At \\((1,0)\\), raw gradient is \\((0,-2\\times 10^{-6})\\), seemingly tiny, yet changing y by a million reaches the second term's minimum. Scaling \\(z=10^{-6} y\\) gives gradient \\(-2\\) in the meaningful coordinate. A tolerance must reference variable and objective scales.

## Feasibility is multidimensional {#section-45-feasibility-is-multidimensional}

List equality residuals, positive inequality violations, bound violations, and integrality violations separately. For a constraint measured in meters and another in joules, raw maximum violation is dimensionally incoherent. Scale by declared tolerances with units.

A restoration phase may return a least-infeasible point. That can diagnose contradictory constraints but must not be labeled feasible. For linear equations, a Farkas-type alternative can certify infeasibility: either a primal solution exists or a dual combination proves contradiction, under the exact theorem's conventions.

## Integer optimality gap {#section-51-integer-optimality-gap}

For maximization, let L be incumbent and U a valid global upper bound. Then \\(L\\le z^{\\star}\\le U\\). Absolute gap is \\(U-L\\). If objective values are integral, \\(U<L+1\\) can prove L optimal after U is conservatively valid, because no larger integer value fits between.

For minimization the bound directions reverse: a feasible incumbent is an upper bound and relaxations give lower bounds. State the convention on every table.

## Infeasible, unbounded, or failed? {#section-57-infeasible-unbounded-or-failed}

These states must not be conflated:

- **infeasible:** no point satisfies the mathematical constraints, supported by a valid certificate;
- **unbounded:** feasible objective values improve without finite limit in the chosen direction;
- **solver failure:** the algorithm could not decide because of limits, numerical breakdown, or invalid input;
- **unknown:** no certificate was obtained.

A numerical solver reporting “infeasible or unbounded” after presolve has not distinguished the two. Disable transformations or request a certificate before making a mathematical claim.

## Interval and exact verification {#section-68-interval-and-exact-verification}

Floating-point residuals are not automatically rigorous bounds. Interval arithmetic with outward rounding can enclose function values and derivatives; rational arithmetic can verify small linear and integer examples exactly. The construction and dependency assumptions are developed in [Verified and Interval Computation](../numerical-mathematics-error-algorithms/verified-interval-computation.md). This chapter uses an enclosure as a supplied certificate component.

For a claimed root of KKT equations, an interval Newton or Krawczyk argument can sometimes prove a unique solution in a box. That still certifies the equations, not global optimality unless structural hypotheses bridge the claims.

## Reproducibility and solver settings {#section-74-reproducibility-and-solver-settings}

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

## A complete diagnostic table {#section-90-a-complete-diagnostic-table}

For a constrained continuous run, include rows like:

| quantity | value | scale | threshold | interpretation |
|---|---:|---:|---:|---|
| objective | 12.44 | 10 | — | original objective |
| stationarity | \\(3e-7\\) | 1 | \\(1e-6\\) | passes first-order request |
| equality violation | \\(8e-9\\) | \\(1e-2\\) units | \\(1e-6\\) scaled | passes |
| inequality violation | 0 | individual scales | \\(1e-6\\) | feasible within request |
| duality gap | \\(2e-5\\) | 12.44 | \\(1e-4\\) relative | convex certificate if dual valid |

For integer search, replace stationarity with incumbent, global bound, absolute/relative gap, open nodes, and proof-log status.

## Failure diagnostics by symptom {#section-104-failure-diagnostics-by-symptom}

- **Objective stalls, gradient large:** scaling, line search, or inaccurate derivatives.
- **Gradient small, negative curvature:** saddle or flat nonconvex region.
- **Feasibility improves, objective explodes:** penalty/merit imbalance or incompatible model.
- **Relaxation weak:** formulation or missing valid inequalities, not necessarily branching.
- **Huge branch tree:** weak bounds, symmetry, poor incumbent, or inherent difficulty.
- **Different results by seed:** multiple basins or search-order limits; report distribution and best bounds.

## Common errors {#section-113-common-errors}

- Reporting “optimal” when only a local stationarity tolerance passed.
- Giving a percentage gap without denominator convention.
- Claiming infeasibility from failure to find a feasible point.
- Hiding original-unit residuals after internal scaling.
- Treating deterministic repeatability as independent correctness evidence.

## Practice with solutions {#section-121-practice-with-solutions}

**1. Distance from gap.** A function is 0.5-strongly convex and a valid objective gap is at most \\(10^{-4}\\). Bound distance to its minimizer.

**Solution.** \\(\\lVert x-x^{\\star}\\rVert\\le \\sqrt{2\\times 10^{-4}/0.5}=\\sqrt{4\\times 10^{-4}}=0.02\\) in the norm of the strong-convexity statement.

**2. Integer proof.** A maximization problem has integer objective, incumbent 47, and rigorously valid upper bound 47.8. What follows?

**Solution.** No integer objective larger than 47 is at most 47.8, so incumbent 47 is optimal.

**3. Status boundary.** A nonlinear solver reaches its iteration limit with small objective change but constraint violation \\(0.2\\). What status is justified?

**Solution.** Solver limit/failure with an infeasible returned point, not convergence to a feasible optimum. Preserve the point for diagnosis but do not call it a solution.

## Final perspective {#section-135-final-perspective}

Optimization is complete only when the claim matches the certificate. Convex gaps can certify global objective quality; KKT residuals certify local conditions under scaling and regularity; integer bounds certify unexplored search. When no such evidence exists, “unknown” is an honest mathematical result.
`;export{e as default};