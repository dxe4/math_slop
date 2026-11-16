
# Reproducible Numerical Inference

Numerical error is a fourth uncertainty layer alongside sampling, model, and measurement error. This chapter discusses how to control, diagnose, and report numerical uncertainty in statistical computation.

## Sources of numerical error

### Rounding and cancellation

Floating-point arithmetic has finite precision. Catastrophic cancellation occurs when subtracting nearly equal numbers: $(1+\varepsilon)-1$ loses precision when $\varepsilon$ is near machine epsilon ($\approx 2\times 10^{-16}$ for double precision).

For log-likelihoods, use log-sum-exp identities:

$$\log(e^{a}+e^{b})=a+\log(1+e^{b-a})\quad\text{for }a\ge b.$$

This avoids overflow when $a$ and $b$ are large.

### Matrix operations

For positive-definite systems, solve factorizations rather than form matrix inverses. If $\Sigma=LL^{T}$ is the Cholesky factorization, solve $\Sigma x=b$ by forward and backward substitution. Computing $\Sigma^{-1}$ explicitly is slower and less stable.

A covariance matrix with a tiny negative eigenvalue can reflect roundoff or an invalid model. Diagnose scale before silently clipping. Report condition numbers and regularization.

### Optimization

Record parameterization, convergence criterion, initialization, scaling, and random seed. A status code saying "converged" usually means a local numerical criterion, not global identifiability or a valid standard error.

Common pitfalls:
- **Poor scaling:** Variables with ranges $[0,1]$ and $[0,10^{6}]$ in the same model cause ill-conditioning.
- **Bad initialization:** Starting far from the solution can lead to false convergence or divergence.
- **Overly strict convergence criteria:** Demanding $10^{-12}$ precision when the data support only $10^{-4}$ wastes computation.

## Simulation-based uncertainty

### Monte Carlo standard error

If a Monte Carlo estimate is an average of $M$ independent draws with variance $v$, its computational standard error is $\sqrt{v/M}$. To reduce this by a factor of $2$, quadruple $M$.

### Markov chain Monte Carlo

MCMC draws require autocorrelation adjustment and convergence diagnostics:

- **Effective sample size:** Under a stationary CLT with a positive finite asymptotic variance, a scalar functional has variance-equivalent $\mathrm{ESS}=M/[1+2\sum_{k\ge1}\rho(k)]$ when that covariance sum is justified. It is functional-specific; it is not a count of independent draws or an automatic finite-sample guarantee.
- **Between-chain diagnostics:** Rank-normalized split $\widehat R$ and related summaries compare aspects of within-chain and between-chain behaviour. Agreement near one is a diagnostic, not a proof that the stationary target has been reached; shared unexplored modes can escape it.
- **Multiple chains:** Dispersed starting points can reveal disagreement hidden by one trajectory, but no fixed number of chains guarantees exploration or convergence.

A bootstrap quantile with only a few hundred replicates cannot support many decimal places in a tail.

## Reproducibility checklist

Reproduce the entire claimed procedure:

1. **Survey design:** Replicate weights, stratification, clustering.
2. **Selection:** Variable selection, model selection, tuning parameter choice.
3. **Imputation:** Missing data handling, number of imputations.
4. **Smoothing:** Bandwidth, kernel, basis functions.
5. **Validation:** Cross-validation folds, stratification of folds.
6. **Censoring:** Adjustment method, truncation rules.

Analytic reference cases distinguish numerical behaviour from statistical validity: an exactly soluble score equation, a zero-variance boundary, an invariant reparameterization and an invalid covariance model pose different mathematical questions. The bounds below address several of them without equating a numerical stopping flag with a statistical theorem.

## Worked example: log-sum-exp stability

Compute $\log(e^{1000}+e^{1001})$.

**Naive approach:** $e^{1000}$ overflows to infinity in double precision.

**Stable approach:** Let $a=1001$, $b=1000$. Then

$$\log(e^{1000}+e^{1001})=1001+\log(1+e^{-1})\approx 1001+\log(1.368)\approx 1001+0.313=1001.313.$$

No overflow occurs because $e^{-1}$ is well within the representable range.

## Common errors and misconceptions

- **Trusting convergence codes blindly.** "Converged" means the optimizer stopped according to its criterion, not that the global optimum was found or that the model is identified.

- **Reporting excessive precision.** A standard error of $0.1234567$ from $n=100$ is spurious precision. Report uncertainty commensurate with the information.

- **Ignoring numerical error in simulation.** If a Monte Carlo estimate has standard error $0.01$, reporting $0.001$ precision is misleading.

- **Failing to record seeds and versions.** Reproducibility requires recording random seeds, software versions, and hardware details. A result that cannot be reproduced is not scientific.

## Numerical root error on the statistical scale

Suppose a normalised estimating equation U has a unique root theta star on a convex region, and its negative or positive derivative, with the sign fixed consistently, is uniformly bounded below by a positive curvature m. More generally, assume strong monotonicity:
$$(U(a)-U(b))^\top(a-b)\ge m\|a-b\|^2.$$
For an approximate root theta tilde, Cauchy–Schwarz then gives the deterministic bound
$$\|\widetilde\theta-\theta_*\|\le \|U(\widetilde\theta)\|/m.$$
Apply the monotonicity inequality with the exact root, cancel one distance factor when it is nonzero, and use the zero-root identity. This proves the bound, including the trivial zero-distance case. A small residual only bounds parameter error relative to a curvature scale. Near singular information, the same residual can permit a large parameter displacement.

For an estimator whose statistical fluctuation is of order inverse square root n, numerical error is asymptotically negligible if its norm multiplied by square root n tends to zero. The bound therefore supplies a sufficient requirement: residual divided by curvature must be little-o of inverse square root n. A full, unnormalized score has curvature proportional to n in regular models, whereas an average score typically has curvature of constant order. Reporting a tolerance without stating which normalisation was used is incomplete.

For a strongly concave differentiable log objective with curvature m, the objective gap to its maximizer is at most the squared gradient norm divided by twice m. Indeed, the strong-concavity upper bound at the approximate point is its current value plus the gradient dotted with a displacement minus m times the squared displacement divided by two. Maximizing this quadratic upper bound over all displacements gives the stated result. A small objective gap can coexist with substantial displacement in a nearly flat direction, again because the curvature determines the conversion.

### Worked example: an exactly soluble normal mean

With independent observations of known variance sigma squared, use the normalised score U of mu equal to mu minus the sample mean. Its curvature is one and its exact root is the sample mean. A solver residual at most epsilon therefore means parameter error at most epsilon exactly. The statistical standard error is sigma divided by square root n. To make solver error at most one hundredth of that scale, epsilon must be no larger than sigma divided by one hundred square root n. If instead the total score is used, its residual is n times larger for the same parameter error. This calculation derives a tolerance from a stated statistical objective; a fixed display precision alone supplies no such derivation.

## Residuals, conditioning and regularization

For an invertible linear system A x equals b, define the computed residual r as b minus A times x tilde. Exact algebra gives the forward error x tilde minus x equal to minus inverse A times r. In any compatible operator norm,
$$\frac{\|\widetilde x-x\|}{\|x\|}
\le\kappa(A)\frac{\|r\|}{\|b\|},\qquad
\kappa(A)=\|A\|\,\|A^{-1}\|.$$
The inequality follows from the absolute error bound and the relation between b and x. A small relative residual controls the forward error only when the condition number is controlled. Backward stability of a factorization means it solves a nearby system accurately; it does not claim that every ill-conditioned original system has an accurate forward solution.

### Worked example: a small residual with a visible parameter error

Take a diagonal matrix with entries one and one hundred millionth, and right-hand side with the same two entries. The exact solution is the vector with both coordinates one. Perturb only the second solution coordinate by one hundredth. The second residual coordinate then has magnitude one ten-billionth, while the parameter error has magnitude one hundredth. The relative right-hand-side residual appears tiny because its first coordinate sets the overall scale. The condition number is one hundred million, so the general bound correctly warns about this amplification.

For symmetric positive definite A, adding lambda I makes a different system. In an orthonormal eigenbasis, each original solution coordinate is multiplied by its eigenvalue divided by that eigenvalue plus lambda. Hence the displacement has norm at most lambda divided by the smallest eigenvalue plus lambda times the original solution norm. The new condition number is the ratio of largest eigenvalue plus lambda to smallest eigenvalue plus lambda. These formulas prove both the stabilization and the change in solution. Calling ridge addition a harmless roundoff fix would hide the latter. Statistical regularization may be desirable, but its bias belongs to the model or estimator definition.

## Logarithmic sums and omitted numerical mass

For real inputs a indexed by j, let their largest value be c. Then log-sum-exp equals c plus the logarithm of the sum of exp of a minus c. Every exponent is nonpositive, which prevents overflow in the exponentiation step. For a single very small exponential, underflow can still occur. A shifted formula is an algebraic stabilization, not a certificate of every floating-point rounding error.

The exact function is one-Lipschitz in the maximum norm. If every input changes by at most delta, each exponential sum is bounded between exp of minus delta and exp of delta times the original sum. Taking logarithms proves the claim. Its gradient consists of normalised exponential weights and its Hessian is the covariance matrix of a categorical indicator, proving convexity and another route to the Lipschitz bound.

If computation retains a positive partial sum S and omits nonnegative terms with total R, the log error is log of one plus R divided by S, at most R divided by S. A normalised retained event sum is not automatically the full event probability. If retained total probability is m and retained event probability is a, the full event lies between a and a plus one minus m. Separate distributions require separate omitted-mass accounting; a truncation selected from a concentrated posterior need not cover a diffuse prior. These are exact real-arithmetic bounds. Special-function evaluation and rounding error need additional numerical estimates if a certified interval is required.

## Independent Monte Carlo with a finite-budget bound

Fix the observed data and the mathematical target before discussing computational randomness. Suppose the simulation outputs are independent, each lying between known bounds a and b, with a positive range. For a fixed budget M, the average estimates their common mean. The bound
$$P(|\bar H_M-EH|\ge\varepsilon)
\le2\exp\{-2M\varepsilon^2/(b-a)^2\}$$
has no asymptotic approximation.

Here is a short proof. For a bounded variable, the logarithm of its moment-generating function has second derivative equal to variance under an exponential tilt. Every distribution supported in the same interval has variance at most one quarter of the range squared: subtract the interval midpoint and bound its second moment. The centred log moment-generating function and its first derivative vanish at zero, so integrating this second-derivative bound twice gives at most the range squared times the squared tilt divided by eight. Independence multiplies moment-generating functions. Exponential Markov inequality and minimization over a positive tilt yield the upper-tail bound; apply the same argument to the negative variable and add the two tails. This proves the displayed inequality.

For outputs between zero and one, an absolute error budget epsilon with failure probability eta is ensured by taking M at least log of two over eta divided by twice epsilon squared. This is a conservative computational statement conditional on the data. It does not establish the statistical coverage of a bootstrap interval, the adequacy of a scientific model, or validity after an arbitrary data-dependent stopping rule.

### Worked example: budget for a simulated event probability

For absolute Monte Carlo error one hundredth and failure probability at most one twentieth, the formula requires at least log forty divided by two ten-thousandths independent draws, rounded up. This is about eighteen thousand four hundred forty-five draws. A normal approximation using an estimated Bernoulli variance can be much shorter for a rare event, but it is a different justification. Correlated chain outputs do not meet this independence proof, and replacing the draw count by an estimated effective size does not turn the bound into a theorem.

## Quantile computation has its own uncertainty

For an iid simulation sample of size B from a continuous conditional distribution with p quantile q, the number K of draws at or below q is exactly binomial with parameters B and p. Select integer ranks L and U so that the binomial probability of L at most K at most U minus one reaches the desired confidence level. Then the interval from the Lth to the Uth order statistic covers q with exactly that probability, using minus and plus infinity for ranks zero and B plus one. Continuity avoids ties at q. This construction uses no density estimate; its possible infinite endpoints honestly express insufficient tail resolution.

When the density at q is positive and smooth, the familiar quantile CLT instead gives approximate variance p times one minus p divided by B times the density squared. The density factor explains why two simulation distributions with the same overall variance can have different quantile errors. These computational statements concern how accurately a fixed conditional quantile is approximated. Whether that quantile yields a valid interval for a population parameter is a separate statistical question addressed by bootstrap theory.

## Practice exercises

<a id="reproducible-numerical-inference-legacy-19-1"></a>

**Exercise 19.1.** Compute $\log(e^{-1000}+e^{-1001})$ stably.

<details><summary>Hint 1</summary>

Subtract the largest log argument before exponentiating.

</details>

<details><summary>Hint 2</summary>

The remaining exponent is minus one.

</details>

<details><summary>Full solution</summary>

Let $a=-1000$, $b=-1001$. Then $a\ge b$, so

$$\log(e^{-1000}+e^{-1001})=-1000+\log(1+e^{-1})\approx -1000+0.313=-999.687.$$

In ordinary IEEE-754 binary64 arithmetic, both $e^{-1000}$ and $e^{-1001}$ underflow to zero, so the fully naive computation returns $\log 0=-\infty$. Even in a format where only the smaller term underflowed, dropping it would give $-1000$, off by $0.313$. The shifted calculation avoids both failures. ∎

</details>

<a id="reproducible-numerical-inference-legacy-19-2"></a>

**Exercise 19.2.** Compare the leading operation counts and numerical properties of solving one symmetric positive-definite system $Ax=b$ by Cholesky factorization with explicitly computing $A^{-1}$ and multiplying by $b$.

<details><summary>Hint 1</summary>

Compare solving one right-hand side with solving all coordinate right-hand sides.

</details>

<details><summary>Hint 2</summary>

Factorization work is shared, but inversion does more work than the requested solve.

</details>

<details><summary>Full solution</summary>

Under the usual floating-point flop convention, Cholesky factorization costs about $n^3/3$ flops and the two triangular solves cost about $2n^2$ more. Explicit inversion also requires a factorization followed by solves against all $n$ coordinate vectors, so it performs additional order-$n^3$ work before the final matrix-vector product. The exact constant ratio depends on the inversion algorithm and counting convention, so there is no universal “half” or “six times” factor. Direct solves use less work and storage and avoid magnifying error by forming entries of an inverse that the problem does not request. ∎

</details>

<a id="reproducible-numerical-inference-legacy-19-3"></a>

**Exercise 19.3.** A bootstrap with $B=1000$ replicates estimates a $95\%$ confidence interval for a median. The bootstrap standard deviation is $0.5$. What is the Monte Carlo standard error of the upper bootstrap quantile?

<details><summary>Hint 1</summary>

A distribution standard deviation does not determine its density at one quantile.

</details>

<details><summary>Hint 2</summary>

Any numerical answer needs an additional distributional approximation.

</details>

<details><summary>Full solution</summary>

The bootstrap standard deviation alone does not determine the density at its upper quantile, so the requested Monte Carlo standard error is not identified by the stated information. If the conditional bootstrap law has a continuous positive density f at its 0.975 quantile, the large-B quantile variance is approximately $0.975(1-0.975)/(B f(q)^2)$. As an explicitly additional normal approximation with standard deviation one half, the density there is about $0.0584/0.5$, giving a Monte Carlo standard error about $0.042$. Other distributions with the same standard deviation can have very different tail densities and quantile errors. The finite-binomial rank interval below avoids substituting a normal density without justification. ∎

</details>

<a id="reproducible-numerical-inference-ex-4"></a>

**Exercise 4.** Prove the strong-monotonicity residual bound and identify a circumstance where it is unavailable.

<details><summary>Hint 1</summary>

Take the inner product with the error direction.

</details>

<details><summary>Hint 2</summary>

Use Cauchy–Schwarz and cancel one nonzero distance.

</details>

<details><summary>Full solution</summary>

Strong monotonicity gives $m\|\widetilde\theta-\theta_*\|^2\le U(\widetilde\theta)^\top(\widetilde\theta-\theta_*)\le\|U(\widetilde\theta)\|\|\widetilde\theta-\theta_*\|$. Cancellation proves the bound. A singular derivative or a nonconvex problem with multiple roots can violate the uniform positive-curvature premise, so a residual alone then does not identify closeness to the intended solution.

</details>

<a id="reproducible-numerical-inference-ex-5"></a>

**Exercise 5.** A normalised score has curvature at least one half. Choose a residual tolerance sufficient for numerical error at most one thousandth of an n to the minus one-half statistical scale.

<details><summary>Hint 1</summary>

Divide the residual by the curvature bound.

</details>

<details><summary>Hint 2</summary>

The resulting parameter bound must be at most the prescribed scale.

</details>

<details><summary>Full solution</summary>

The parameter error is at most twice the residual. It suffices to make the residual no larger than $1/(2000\sqrt n)$. For asymptotic negligibility rather than a fixed small fraction, use a tolerance that is little-o of $n^{-1/2}$. These are sufficient bounds under the stated curvature, not universal optimizer defaults.

</details>

<a id="reproducible-numerical-inference-ex-6"></a>

**Exercise 6.** Derive the eigenvalue formula for ridge displacement of a positive-definite linear solve.

<details><summary>Hint 1</summary>

Diagonalize the symmetric matrix.

</details>

<details><summary>Hint 2</summary>

Compare each reciprocal eigenvalue before and after ridge addition.

</details>

<details><summary>Full solution</summary>

If $x_j=b_j/d_j$, the ridged coordinate is $b_j/(d_j+\lambda)=d_jx_j/(d_j+\lambda)$. Their difference is $-\lambda x_j/(d_j+\lambda)$. Squaring and summing gives norm at most $\lambda/(d_{\min}+\lambda)$ times the original norm. Ridge improves the spectral condition number but changes the target, including in exact arithmetic.

</details>

<a id="reproducible-numerical-inference-ex-7"></a>

**Exercise 7.** An event calculation retains total mass 0.97 and event mass 0.12. Give a valid full-event range and explain why renormalizing 0.12 by 0.97 answers a different question.

<details><summary>Hint 1</summary>

The omitted event mass is between zero and omitted total mass.

</details>

<details><summary>Hint 2</summary>

Renormalization conditions on the retained region.

</details>

<details><summary>Full solution</summary>

The full event probability lies between 0.12 and 0.15. The ratio 0.12 divided by 0.97 is the event probability conditional on the retained region, assuming these are exact masses. It need not equal the unconditional event probability. Floating-point mass uncertainty would require expanding these bounds appropriately.

</details>

<a id="reproducible-numerical-inference-ex-8"></a>

**Exercise 8.** For independent bounded Monte Carlo outputs, explain why quadrupling the budget halves standard error but does not prove that a realized error halves.

<details><summary>Hint 1</summary>

Variance of an independent mean scales inversely with sample size.

</details>

<details><summary>Hint 2</summary>

A standard deviation describes a distribution, not a deterministic error.

</details>

<details><summary>Full solution</summary>

With finite output variance v, the mean variance is v divided by M, so its standard deviation is proportional to the reciprocal square root of M. A fourfold budget halves that standard deviation. The new random error can still be larger on a particular realization. A probability guarantee requires a bound or justified distributional approximation, and a stopping rule requires its own analysis.

</details>

<a id="reproducible-numerical-inference-ex-9"></a>

**Exercise 9.** Derive the exact order-statistic quantile coverage event.

<details><summary>Hint 1</summary>

Count simulated draws no greater than the target quantile.

</details>

<details><summary>Hint 2</summary>

Relate the two rank inequalities to that count.

</details>

<details><summary>Full solution</summary>

With a continuous simulation law, the event $X_{(L)}\le q\le X_{(U)}$ agrees almost surely with $L\le K\le U-1$, where $K\sim\mathrm{Binomial}(B,p)$. Lower or upper infinite rank conventions handle the endpoints. Its probability is the corresponding finite binomial sum, giving an exact conditional computational interval for the fixed quantile. This does not give population-parameter coverage automatically.

</details>

<a id="reproducible-numerical-inference-ex-10"></a>

**Exercise 10.** Can identical seeded outputs establish that an inference is correct? State the mathematical distinctions.

<details><summary>Hint 1</summary>

A seed specifies computational randomness, not the target law.

</details>

<details><summary>Hint 2</summary>

Separate reproducibility, numerical approximation and statistical validity.

</details>

<details><summary>Full solution</summary>

A recorded seed and environment can reproduce the same numerical path. Both runs can share an implementation error, a poorly explored chain or an invalid model assumption. A numerical error bound concerns approximation to a declared mathematical calculation; a statistical theorem concerns that calculation under an explicit data-generating experiment. Reproducing outputs does not imply either theorem, though it makes the procedure inspectable.

</details>

## Forward and backward connections

This chapter concluded the book's technical content by addressing the numerical foundations of statistical inference. It connects backward to every preceding chapter: the Horvitz–Thompson estimators of *Design Randomization as a Probability Space*, the GLM computations of *Generalized Linear Likelihood*, the kriging linear systems of *Spatial Covariance and Kriging*, and the bootstrap of *Functional Delta Method and Bootstrap Boundaries* all require careful numerical practice. For the dependence conditions behind simulation variances, continue to the primary Monte Carlo and Markov Chain Computation volume; for statistical bootstrap validity, return to the functional delta-method chapter.
