var e=`---
parent_id: book-numerical-mathematics-error-algorithms
matter_id: notation-error-and-claim-conventions
title: Notation, Error Ledgers, and Claim Conventions
license: CC BY-SA 4.0
---

# Notation, Error Ledgers, and Claim Conventions

## Purpose and scope

Numerical notation compresses assumptions easily. This guide states the default meanings used across all seventeen chapters and identifies the information that must still be supplied locally. A chapter’s explicit declaration overrides a default. No convention silently repairs a missing theorem hypothesis.

## Scalars, vectors, matrices, and fields

- Lowercase italic letters such as \\(x\\), \\(t\\), \\(h\\), and \\(\\lambda\\) denote scalars when context is unambiguous.
- Lowercase letters such as \\(x\\), \\(b\\), \\(r\\), and \\(v\\) may denote vectors in matrix chapters; dimensions are stated at first use.
- Uppercase letters such as \\(A\\), \\(J\\), \\(M\\), and \\(K\\) denote matrices or linear operators. \\(J\\) commonly denotes a Jacobian.
- \\(u\\), \\(v\\), and \\(w\\) often denote functions or finite-element trial and test functions. In floating-point discussions, \\(u\\) also denotes unit roundoff; nearby prose must disambiguate it.
- A hat, as in \\(\\widehat{x}\\), marks an approximation or computed value. It does not imply a statistical estimator unless a statistical model is stated.
- A star, as in \\(x_{star}\\), marks a target solution, stationary point, exact manufactured state, or reference value as locally declared. It does not by itself imply uniqueness or global optimality.
- Subscripts \\(n\\), \\(k\\), and \\(h\\) usually indicate time level, iteration, and mesh scale. A superscript in parentheses may indicate an iteration or derivative; the local chapter declares which.

Vectors are columns by default. \\(A^{\\mathsf T}\\) is the transpose. In complex settings \\(A^\\cdot\\) is the conjugate transpose. An inner product is written \\(\\langle x,y\\rangle\\) or \\(x^{\\mathsf T} y\\) in the real Euclidean case. Dimensions and real or complex scalar fields are part of a theorem’s hypotheses.

## Norms and scales

\\(\\lVert x\\rVert_p\\) is a vector \\(p\\)-norm. An unqualified \\(\\lVert x\\rVert\\) is Euclidean only when the surrounding result clearly uses that norm. Matrix norms are induced by the declared vector norm unless Frobenius norm \\(\\lVert A\\rVert_F\\) is written. Function norms name their domain and measure when those affect the result.

Norms are not interchangeable without constants. In finite dimension one may bound one norm by another, but dimension-dependent factors can dominate a complexity or high-dimensional accuracy claim. A weighted norm must identify its weights and whether they are exact, computed, or data-derived.

A scale is the denominator or reference magnitude used to interpret an error or residual. A scale may combine absolute and relative parts, for example

\\(scale_i = atol_i + rtol_i \\lvert x_i\\rvert\\).

The choices of \\(\\mathrm{atol}_i\\) and \\(\\mathrm{rtol}_i\\) require units and a problem interpretation. They are not universal machine constants.

## Exact, stored, and displayed values

An unmarked mathematical expression is exact unless its context explicitly describes stored arithmetic. \\(\\operatorname{fl}(expression)\\) denotes the stored result under a stated arithmetic model. The common one-operation model

\\(\\operatorname{fl}(x \\mathrm{op} y)=(x \\mathrm{op} y)(1+\\delta)\\), with \\(\\lvert \\delta\\rvert\\le u\\),

is invoked only when its representability, rounding, and operation hypotheses hold. \\(u\\) is unit roundoff for the named format and rounding mode. It is not the smallest positive number and it need not model subnormal relative error.

Printed decimals normally represent rounded displays. Equality of two printed decimals means equality at the displayed precision unless the text labels them exact. Decimal literals used as exact problem data are declared exact or encoded through rational, hexadecimal, or otherwise unambiguous artifacts.

Machine epsilon, unit roundoff, spacing, underflow threshold, and smallest positive subnormal are different quantities. A chapter or experiment names the one it uses.

## Error ledger

The book separates the following accounts.

**Data error.** Difference between intended exact data and the supplied or measured data. It includes measurement, sampling, parsing, unit conversion, and representation choices.

**Model error.** Difference between the phenomenon or broader question and the mathematical model. It cannot generally be estimated by refining the numerical mesh for a fixed model.

**Approximation or discretization error.** Difference between the exact mathematical target and the exact solution of the finite approximation, such as a truncated series, quadrature rule, time step, or mesh equation.

**Algebraic or iteration error.** Difference between the exact finite-problem solution and an iterate stopped before exact finite convergence.

**Arithmetic error.** Difference caused by finite representation and rounded operations in implementing the finite algorithm.

**Statistical error.** Sampling variability under a declared probability model. It is probability-qualified, not a deterministic remainder.

**Implementation error.** Departure of code from the specified method. A convergence theorem for the intended algorithm does not bound a programming defect.

When useful, total error is decomposed by adding and subtracting intermediate targets and then applying a compatible norm bound. The decomposition does not assert independence or equal importance among its terms.

## Forward error, backward error, residual, and defect

**Forward error** compares a computed output with the intended exact output. It must name absolute, relative, componentwise, normwise, angular, subspace, or functional scale.

**Backward error** asks for the smallest admissible change in input or problem data for which the computed output is exact. “Admissible” may require structure: symmetry, sparsity, positivity, conservation, probability normalization, or boundary compatibility.

**Residual** inserts an approximation into the defining equation. For \\(Ax=b\\), \\(r=b-Ax_{hat}\\); for a root, \\(r=f(\\widehat{x})\\); for a weak field equation, it is a functional on test functions. Residual and error have different units and are connected only through stability, inverse, inf-sup, derivative, or conditioning information.

**Defect** often means the residual of a continuous or time-dependent equation evaluated along an approximate function. **Local truncation error** is the defect made by one exact-data method step after applying its normalization convention. Authors must say which normalization they use.

## Conditioning and stability

Conditioning belongs to a problem map and a perturbation model. A condition number is absolute or relative, local or global, normwise or componentwise, and possibly structured. \\(\\kappa(A)\\) without qualification normally means a norm condition number \\(\\lVert A\\rVert \\lVert A^{-1}\\rVert\\) for nonsingular \\(A\\), but the norm must be recoverable from context.

Stability has multiple meanings:

- backward stability of an algorithm;
- forward stability relative to an exact method and scale;
- absolute stability of a time integrator on a test equation;
- zero-stability of a multistep recurrence;
- stability of a differential model or equilibrium;
- numerical stability under perturbations or rounding.

The unqualified word “stable” is avoided where those meanings could conflict. A stable algorithm applied to an ill-conditioned problem may produce a large forward error. A time integrator’s absolute-stability region does not by itself prove accuracy.

## Asymptotic notation and rates

\\(f(h)=\\mathcal O(g(h))\\) as \\(h\\) tends to a named limit means there exist constants \\(C\\) and a neighborhood in which \\(\\lvert f(h)\\rvert\\le C\\lvert g(h)\\rvert\\). It is not a numerical bound at one chosen \\(h\\) unless \\(C\\) and the regime are known. \\(o(g(h))\\) means the ratio tends to zero. \\(f(h) \\approx g(h)\\) is an informal local comparison unless an error statement follows.

An observed order from a finite refinement table is **suggested** or **consistent with** order \\(p\\). It is not called a proof of asymptotic order. The report should state the error or proxy, reference value, levels used, solver tolerances, and signs of pre-asymptotic or arithmetic saturation.

Convergence is always convergence of specified objects in a specified limit and topology or norm. Iteration convergence, mesh convergence, sampling convergence, distributional convergence, and convergence of displayed digits are not synonyms.

## Tolerances and stopping

\\(tol\\) is a requested threshold, not an achieved error. A stopping record gives:

- the quantity tested and its norm or componentwise scale;
- absolute and relative threshold construction;
- the iteration, work, or time budget;
- whether termination was success, infeasibility, stagnation, breakdown, exceptional arithmetic, or exhausted budget;
- the theorem or estimate, if any, that converts the tested quantity to target error.

In adaptive work, spatial, temporal, algebraic, nonlinear, and arithmetic tolerances are distinct. A coupled budget should avoid solving one layer far more accurately than an uncontrolled layer.

## Differential equations and field discretizations

\\(h\\) is a step or representative mesh scale; \\(\\Delta t\\) is a time step. Variable-step and anisotropic meshes require local quantities. \\(u_h\\) is a discrete field, but the subscript does not imply a particular finite-element, finite-volume, or finite-difference space.

\\(\\Omega\\) denotes a domain, \\(\\partial\\Omega\\) its boundary, and \\(n\\) the outward normal. Boundary conditions are part of the operator. Dirichlet, Neumann, Robin, periodic, inflow, and algebraic constraints are named rather than inferred.

A **strong residual** is formed where the needed derivatives exist. A **weak residual** acts on test functions. Element residuals, internal face jumps, boundary residuals, and data oscillation have different scaling in an estimator. An estimator is not called an error unless reliability or equivalence has been proved under stated assumptions.

For a differential-algebraic equation, consistent initialization means both algebraic constraints and any required differentiated constraints are satisfied to the declared scale. Treating it as an unconstrained ODE can change the problem.

## Approximation and transforms

Nodes are sample locations; coefficients depend on the chosen basis. Interpolation, least squares, orthogonal projection, regularized fitting, and minimax approximation solve different objectives. Polynomial degree alone does not identify any of them.

Transform normalization, node ordering, and endpoint conventions are stated. Aliasing is the indistinguishability of represented modes after sampling, not merely a plotting artifact. Spectral or exponential convergence requires regularity or analyticity hypotheses and a named region; nonsmooth data can reduce the rate.

## Randomized methods

Probability statements name the random object, distribution, independence assumptions, event, and failure probability. “With high probability” is replaced by an explicit bound when used in a conclusion. Expected error does not imply that every run satisfies that error.

A seed records a pseudorandom stream under a named generator and implementation. It supports reproduction, not accuracy. Repeated trials report the aggregation rule and whether verification data are independent of construction data.

## Interval and verified computation

An interval \\([a,b]\\) is a mathematical set. A machine interval is a pair of represented endpoints plus an arithmetic contract intended to enclose that set. Outward rounding means the lower endpoint is rounded downward and the upper endpoint upward for the operation being enclosed.

An **inclusion** states that every exact value under the theorem’s data assumptions belongs to an enclosure. An **existence certificate** proves at least one solution in a region; a **uniqueness certificate** needs stronger hypotheses; an **exclusion certificate** proves none exists in the tested region. Failure of an inclusion test is generally inconclusive, not proof of nonexistence.

Dependency inflation, where repeated occurrences of one variable are treated independently by elementary interval operations, can widen an enclosure without invalidating it. Empty, unbounded, NaN, or exceptional intervals follow an explicit policy.

“Verified” is reserved for a named check whose implementation and hypotheses support its stated conclusion. It is not a synonym for tested, reproduced, compared, or plausible.

## Claim labels

**Definition.** Fixes a term for the stated scope.

**Theorem/proposition/lemma.** A mathematical implication from explicit hypotheses. Its proof may be local or referenced, but omitted hypotheses are not supplied by the label.

**Derivation.** Follows algebraically or formally from declared modeling and regularity assumptions. It need not prove that the model represents observed reality.

**Algorithm.** A finite procedure with inputs, outputs, termination behavior, and exceptional cases. Pseudocode is a specification, not evidence that an implementation matches it.

**Bound/certificate.** Gives a one-sided or set-valued conclusion under stated assumptions. Conservative bounds can be valid without being sharp.

**Numerical observation.** Describes a finite run with its artifact and parameters. It supports only the range tested.

**Heuristic.** Motivates a choice without asserting a theorem.

**Counterexample.** Refutes a precisely stated overclaim; it need not classify every failure.

## Reproducibility levels

**Re-executable** means the recorded workflow runs again in a sufficiently specified environment. **Repeatable** means the same team and setup recover the declared output. **Reproducible** means an independently reconstructed workflow recovers a declared numerical or statistical claim. **Bitwise reproducible** means exact stored outputs match and therefore requires a much stricter arithmetic and scheduling specification.

These labels are used descriptively, not as a claim that one vocabulary is universal across every field. A chapter or project defines its acceptance comparison.

## Accessible mathematical evidence

Tables have headers, units, and meaningful row and column order. Figures have text alternatives that convey the mathematical conclusion, not merely their appearance. Curves use labels or patterns in addition to color. Interactive controls have names, ranges, current values, and keyboard operation. Motion respects reduced-motion settings.

A numerical alternative should be sufficient to audit the claim: provide nodes or time levels, output values, residuals or errors, and any reference slope or bound. “The blue curve is better” is neither accessible nor mathematically defined.

## Draft and release language

Edition, component, and review state is recorded in current, hash-bound production evidence rather than inferred from source presence or an author’s rereading. Page counts belong to a reproducible artifact; exercise and project counts belong to the corresponding source edition.

The strongest honest sentence is preferred over an impressive but unsupported one. “The residual decreased on the recorded cases” is valid evidence. “The method is accurate” requires a target, scale, regime, and justification.
`;export{e as default};