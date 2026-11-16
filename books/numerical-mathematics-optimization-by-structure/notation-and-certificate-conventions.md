
# Notation, Optimization, and Certificate Conventions

## Status words

The book uses status words narrowly.

- A **definition** fixes meaning.
- A **theorem** is asserted under all displayed hypotheses and accompanied by proof or a clearly identified prior result.
- A **diagnostic** is computable evidence whose interpretation depends on scale and assumptions.
- A **heuristic** motivates a choice but carries no theorem-level guarantee.
- An **observation** reports a finite computation.
- A **certificate** is independently checkable evidence for a precisely bounded claim.
- **Verified** means the arithmetic and logical enclosure needed by the claim has been checked; it does not mean merely tested often.

## Problems, domains, and values

The default problem is

\(\operatorname{minimize} f(x) \quad\text{subject to}\quad x \in C\).

The variable \(x\) belongs to a declared ambient space, usually \(\mathbb{R}^{n}\), \(\mathbb{Z}^{n}\), \(\{0,1\}^n\), or a Cartesian product. The feasible set \(C\) includes every exact constraint. A finite penalty or barrier normally defines a different objective and is not silently identified with the constrained problem.

For a minimization problem, \(p_{\inf}=\inf_{x \in C} f(x)\) denotes the infimum without asserting attainment. The notation \(p^{\star}=f(x^{\star})\) is used only after a feasible optimizer \(x^{\star}\) is known to exist. The feasible set may be empty; in that case the declared extended-value convention must be used rather than inventing an optimizer.

Inequalities default to \(g_i(x)\le 0\); equalities are \(h_j(x)=0\). With Lagrangian

\(L(x,\lambda,\nu)=f(x)+\sum_i \lambda_i g_i(x)+\sum_j \nu_j h_j(x)\),

inequality multipliers satisfy \(\lambda_i\ge 0\). A source using the opposite inequality or Lagrangian sign must translate the multiplier sign before comparison.

## Vectors, derivatives, and set-valued objects

Vectors are columns unless explicitly transposed. \(a^{\mathsf T} x\) is the Euclidean pairing, \(\lVert x\rVert\) is a named norm when ambiguity matters, and \(B(x,r)\) is a ball in that norm. The gradient \(\nabla f(x)\) represents the derivative under the declared inner product; \(Df(x)[d]\) is the derivative applied to direction \(d\). The Hessian is \(\nabla^{2} f(x)\) when a twice differentiable coordinate representation exists.

For a convex function, \(\partial f(x)\) is the convex subdifferential. For a closed convex set, \(N_C(x)\) is the normal cone with convention

\(N_C(x)=\{v: v^{\mathsf T}(y-x)\le 0 \quad\text{for every}\quad y \in C\}\)

when \(x \in C\), and empty otherwise. A projection \(\Pi_C(v)\) minimizes distance in the named metric and may be set-valued unless existence and uniqueness are secured.

The conjugate is \(f^{\star}(y)=\sup_x \{y^{\mathsf T} x-f(x)\}\). Star notation for conjugacy is kept typographically distinct from optimizer notation in prose. Domain, properness, lower-semicontinuity, and closure assumptions are stated whenever biconjugacy or attainment depends on them.

## Continuous optimality boundaries

\(\nabla f(x)=0\) is stationarity, not global optimality in general. For a differentiable convex objective on a convex feasible set, the relevant first-order inequality can certify globality. Strong convexity may add uniqueness, but neither existence nor uniqueness is inferred without the corresponding hypotheses.

KKT data comprise primal feasibility, dual feasibility, complementarity, and stationarity. KKT conditions are necessary only under appropriate regularity or constraint qualification; they are sufficient for global optimality in the stated convex setting. A small KKT residual is an approximate diagnostic. Its interpretation requires scaling, the chosen norms, and a theorem connecting approximate residuals to the requested error measure.

“Local minimum,” “stationary point,” “second-order candidate,” and “global minimum” are not synonyms. Chapters label which one an algorithm targets.

## Bounds for minimization

Throughout the book:

- \(L\) is a valid lower bound on the optimal value;
- \(U\) is the objective value of a verified feasible incumbent and hence an upper bound;
- \(U-L\) is the absolute global gap when both bounds refer to the same problem;
- a relative gap always states its denominator and its behavior near zero.

For maximization, directions reverse and are restated locally. The book never relies on a reader mentally reversing a pruning inequality.

Weak duality supplies a lower bound for a minimization primal only when the dual point is feasible under the exact convention. A relaxation supplies a lower bound because it enlarges the feasible set while retaining the minimization direction. Neither a solver status string nor a rounded printed value establishes bound validity by itself.

## Discrete and mixed-integer conventions

Binary variables lie in \(\{0,1\}\) and general integer variables in \(\mathbb{Z}\). A **relaxation** removes or weakens conditions so every original feasible point remains feasible. A **restriction** removes possible points. An **exact reformulation** preserves the declared feasible solutions and objective values after a stated mapping; an extended formulation may add variables and requires projection equivalence.

The integer hull of \(P\) is \(\operatorname{conv}(P \cap \mathbb{Z}^{n})\) in the declared integer coordinates. An integrality gap states whether it is additive or multiplicative and identifies the class of instances or the particular instance. A valid inequality holds for every intended integer-feasible point. Facet, cutting-plane, and total-unimodularity claims state their dimension, integrality, and right-hand-side hypotheses.

A branch-and-bound node record contains its domain, relaxation, lower bound, branching disjunction, incumbent at processing time, and closure reason. Valid closure reasons include verified infeasibility, a valid bound no better than the incumbent, or complete enumeration/verified integrality. Finding a new incumbent updates \(U\); it does not by itself close the node that produced it.

## Nonconvex global conventions

A local solver provides candidates and upper bounds after feasibility checks. It does not provide a global lower bound merely because it converged. Global lower bounds may come from convex underestimators, interval extensions, relaxations, or exhaustive finite arguments. Each bound names its domain.

Spatial branching partitions a bounded domain. A global certificate must account for every region: closed by infeasibility, closed by bound, resolved exactly, or retained as unresolved. Tolerance termination establishes a stated gap bound, not exact equality, unless separate exact reasoning supplies it.

## Arithmetic and enclosure

The arithmetic labels are:

- **exact:** integers, rationals, symbolic identities, or another precisely specified exact representation;
- **floating:** ordinary finite-precision operations, normally rounded to nearest;
- **outward-rounded:** lower endpoints rounded downward and upper endpoints upward under a controlled environment;
- **mixed:** exact structure with floating or interval numerical subcomputations, whose interfaces are recorded.

An interval \([a,b]\) denotes every real value between its endpoints. Interval equality is avoided when the mathematical statement is enclosure. If \(F(X)\) is an interval extension, the required property is usually \(\{f(x):x \in X\} \subseteq F(X)\). Dependency and overestimation may make the enclosure wide without making it invalid.

Printed decimals are not exact unless declared as exact decimal rationals. Machine values should be serialized unambiguously when replay depends on their bit patterns. Underflow, overflow, NaNs, signed zeros, directed-rounding mode, and library behavior belong to an implementation’s audit boundary.

## Residuals and tolerances

Every residual states its formula, units, norm, and scale. Absolute and relative tolerances are named separately. A stopping rule has the form “if diagnostic \(r\) is at most tolerance \(\tau\), report status \(S\),” followed by the theorem—or lack of theorem—connecting \(S\) to the requested claim.

Tolerance pruning in a global search must retain enough ledger information to reconstruct the promised \(\varepsilon\)-optimal statement. Exact pruning uses exact order or a verified enclosure. Equality at a tolerance boundary is resolved explicitly rather than left to language defaults.

## Software and replay

Pseudocode assumes deterministic ordering unless stated otherwise. A proof log records input identity, versioned algorithm specification, arithmetic policy, tolerances, preprocessing, tie breaking, random seed if any, and all externally supplied witnesses. A replay checker is smaller in authority than the producer: it validates the certificate format and mathematics rather than trusting the producer’s status.

Passing tests supports the tested cases. Derivative checks support derivative implementation near tested points. Solver agreement supports an observation. None alone proves a theorem, global optimality, or correctness on all representable inputs.

## Accessible representations

Matrices and trees must be expressible as ordered tables; plots must have numerical summaries; colors must have text or symbol labels. Equations are followed by prose identifying variable roles when the role is not evident. Algorithms specify meaningful control labels and keyboard behavior when made interactive. Nonessential motion has a static and reduced-motion alternative.

## Chapter identifiers

Stable chapter references use the source identifiers, not page numbers: `formulations-and-claim-boundaries`, `convexity-optimality-duality`, `separation-and-conjugacy`, `duality-sensitivity-perturbation`, `gradient-newton-quasi-newton`, `accelerated-proximal-methods`, `automatic-differentiation-systems`, `constraints-kkt-globalization`, `nonsmooth-constrained-methods`, `integer-formulations-relaxations`, `polyhedral-integrality`, `branch-and-bound-cuts`, `separation-branching-strategies`, `mixed-integer-convex-methods`, `certificates-diagnostics`, `nonconvex-global-bounds`, `verified-optimization-software`, and `optimization-capstone-proof-logs`.

These identifiers remain stable when pagination changes. Page locators belong only to a specific reproducible print build.
