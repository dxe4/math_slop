# Appendix A — Just-in-time mathematics {#sec-pp-readiness}

Use this appendix only when a chapter points here.

## Calculus in one page

A derivative is a local linear sensitivity. A gradient collects partial
derivatives. An integral accumulates density over a region. Change of variables
multiplies density by an absolute Jacobian determinant so probability mass is
preserved.

## Linear algebra in one page

A vector is an ordered collection; a matrix is a linear map. Transpose reverses
rows and columns. For positive-definite covariance $\Sigma$, the quadratic form

$$
(x-\mu)^T\Sigma^{-1}(x-\mu)
$$

measures squared distance in covariance-scaled geometry. Solve linear systems
by factorization rather than forming an inverse.

## Probability statements

Expectation averages under a declared distribution. Variance measures squared
spread. Independence is a factorization assumption. Conditioning changes the
distribution after information is known; intervention changes a data-generating
mechanism.

## Computational audit

Before trusting a result, name:

1. the joint model and support;
2. the posterior or predictive estimand;
3. the approximation algorithm;
4. the finite diagnostic and its threshold;
5. model criticism and sensitivity; and
6. the action or claim the result is meant to support.

## Small-model derivation protocol

Before using a general inference engine, reduce the model to the smallest case
that retains its structure. Enumerate a binary latent state, integrate a
one-parameter conjugate model, or calculate a two-step filter by hand. Compare
joint log density, normalizing constant, posterior moments, and predictive
probabilities against the program. Then simulate from fixed interior and
boundary parameters and confirm that inference behaves as expected.

This protocol catches reversed conditions, omitted combinatorial constants,
wrong supports, and missing Jacobians. A constant may be safely omitted from an
MCMC target only when it is constant in every sampled variable; the same term
may be essential for comparing models or discrete branches.

## Reading computational output

Keep four uncertainty layers separate: variation of future outcomes, posterior
uncertainty under the model, Monte Carlo or optimization error, and discrepancy
between model and process. More sampling addresses only the computational
layer. More observed data may reduce parameter uncertainty while leaving
structural discrepancy unchanged or more visible.

Report estimands in scientific units, together with interval type and
conditioning statement. A posterior interval, predictive interval,
cross-validation error bar, and Monte Carlo error bar answer different
questions even when all are expressed as two endpoints.

## Minimal software habits

Fix random seeds only when reproducibility is required, and record the random
number generator, package versions, parameterization, and data transformation.
Use log probabilities for products of densities, test boundary inputs, and
compare at least one computation with an independent analytic or enumerated
answer. A reproducible wrong model is still wrong, so preserve both the code
and the assumptions that give its output meaning.

## Advanced-chapter readiness routes

The final six chapters do not require every earlier model family.

| Destination | Minimum preparation | Repair supplied there |
|---|---|---|
| exact messages, Chapter 23 | Chapters 2, 4, and 7 | factors, elimination scopes, and treewidth |
| deterministic approximation, Chapter 24 | Chapters 3, 7, and 19 | Hessians, local covariance, and invertible maps |
| modern diagnostics, Chapter 25 | Chapters 10–13 | splitting, ranks, ESS, MCSE, and HMC warnings |
| PSIS-LOO, Chapter 26 | Chapters 9 and 20 | pointwise likelihoods, Pareto tails, and stacking |
| PPL implementation, Chapter 27 | Chapters 6–7 and 22 | kernels, addresses, transforms, and handlers |
| simulation-based inference, Chapter 28 | Chapters 1, 5, 9, and 13 | ABC targets, proposals, coverage, and simulation gaps |

For each displayed formula, first name the object and its domain, then translate
subscripts into array axes and descriptive variable names. Code is appropriate
for an evaluable density, transform, finite sum, recurrence, estimator, or
diagnostic. Code is not a proof of an asymptotic theorem, universal calibration,
or nonconstructive existence claim.
