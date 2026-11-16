var e=`---
parent_id: book-computational-bayesian-modeling
chapter_id: monte-carlo-estimates-and-error
title: "Monte Carlo Estimates and Their Error"
level: graduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Monte Carlo Estimates and Their Error {#section-1-monte-carlo-estimates-and-their-error}

When the posterior has no closed form, we approximate expectations by drawing samples and averaging. This chapter makes the approximation precise: we define Monte Carlo estimators, quantify their error, and distinguish uncertainty about parameters from error due to finite computation.

<a id="section-3-monte-carlo-integration"></a>
## Monte Carlo integration {#section-5-monte-carlo-integration}

Suppose we want $\\mathbb{E}[h(\\theta) \\mid y]$ for some function $h$. If $\\theta^{(1)}, \\dots, \\theta^{(S)}$ are draws from the posterior, the Monte Carlo estimator is

$$\\hat{h}_{S} = \\frac{1}{S} \\sum_{s=1}^{S} h(\\theta^{(s)}).$$

If the draws are independent, the variance of $\\hat{h}_{S}$ is $\\operatorname{Var}(h \\mid y)/S$, and the standard error is $\\operatorname{sd}(h \\mid y)/\\sqrt{S}$. Doubling $S$ halves the variance but reduces the standard error by only $\\sqrt{2}$. The square-root scaling is fundamental: achieving one extra decimal place of precision requires one hundred times as many samples.

This slow convergence is the price of broad applicability. Monte Carlo integration can be used in any finite dimension when we can sample and the target expectation $\\mathbb E[|h(\\theta)|\\mid y]$ exists. The displayed independent-draw variance and square-root error law additionally require finite variance; MCMC versions require a suitable chain CLT and long-run variance. Exact sampling cannot create a nonexistent expectation, as for a Cauchy target with $h(\\theta)=\\theta$. Deterministic quadrature rules can converge faster in low dimensions but often deteriorate rapidly with dimension.

<a id="section-13-effective-sample-size-for-dependent-draws"></a>
## Effective sample size for dependent draws {#section-15-effective-sample-size-for-dependent-draws}

MCMC produces dependent draws. Serial dependence changes the variance of $\\hat{h}_{S}$; positive correlation can inflate it, while negative correlation can reduce it. Under suitable conditions, a central limit theorem still holds, but with an effective sample size $S_{\\mathrm{eff}}$ that replaces $S$:

$$S_{\\mathrm{eff}} = \\frac{S}{1 + 2\\sum_{t=1}^{\\infty} \\rho_{t}(h)},$$

where $\\rho_{t}(h)$ is the autocorrelation of $h(\\theta^{(s)})$ at lag $t$. The Monte Carlo standard error is then approximately

$$\\mathrm{MCSE} \\approx \\frac{\\operatorname{sd}(h \\mid y)}{\\sqrt{S_{\\mathrm{eff}}}}.$$

An ESS estimate can itself be unreliable for a nonstationary or poorly mixing chain. Reporting posterior standard deviation without Monte Carlo error confuses uncertainty about the unknown parameter with error from finite computation.

**Numerical example.** A chain has $20{,}000$ iterations but effective sample size $800$ for a quantity with posterior standard deviation $3$. The Monte Carlo standard error is $3/\\sqrt{800} \\approx 0.106$. Using $\\sqrt{20{,}000}$ in the denominator would give $0.021$, ignoring autocorrelation and overstating computational precision by a factor of five.

<a id="section-27-estimating-effective-sample-size"></a>
## Estimating effective sample size {#section-29-estimating-effective-sample-size}

In practice, $S_{\\mathrm{eff}}$ is estimated from the sample autocorrelations. One common estimator computes the sample autocorrelation function and truncates the sum when autocorrelations become negative. Another approach uses batch means: divide the chain into $K$ batches, compute the variance of batch means, and compare it to the overall variance. If the batches are large enough to be approximately independent, the ratio of variances yields an ESS estimate.

For multimodal or strongly autocorrelated chains, no single ESS number captures all aspects of mixing. ESS should be reported per estimand, because different functions $h$ can have very different autocorrelation structures on the same chain. A chain with excellent ESS for the posterior mean may have poor ESS for tail quantiles.

<a id="section-33-when-more-samples-help-and-when-they-do-not"></a>
## When more samples help and when they do not {#section-35-when-more-samples-help-and-when-they-do-not}

If the chain is mixing well but $S_{\\mathrm{eff}}$ is too small for the desired precision, running longer is the right response. If the chain is trapped in one mode, has high autocorrelation due to poor parameterization, or shows divergences, more iterations can be inefficient and do not by themselves establish adequate exploration. In such cases, better parameterization, reparameterization, or a different algorithm is more valuable than a longer run.

**Example.** A random-walk Metropolis sampler for a highly correlated bivariate normal can accept proposals while still producing low ESS because it moves slowly along the target's narrow direction. Running it longer then increases ESS only at the chain's existing rate. A Gibbs sampler or a suitably tuned Hamiltonian method can improve ESS by using more of the correlation structure, but no target-only number such as “ESS near $1{,}000$” follows. A fair claim must name the estimand, implementation, tuning, and cost unit, then compare ESS per unit of that declared cost.


<a id="section-40-the-monte-carlo-central-limit-theorem"></a>
## The Monte Carlo central limit theorem {#section-42-the-monte-carlo-central-limit-theorem}

Under regularity conditions, the Monte Carlo estimator satisfies

$$\\sqrt{S_{\\mathrm{eff}}}\\left(\\hat{h}_{S} - \\mathbb{E}[h(\\theta) \\mid y]\\right) \\xrightarrow{d} \\mathcal{N}\\left(0, \\operatorname{Var}(h \\mid y)\\right).$$

This justifies the standard error formula $\\mathrm{MCSE} = \\operatorname{sd}(h)/\\sqrt{S_{\\mathrm{eff}}}$ and enables confidence intervals for Monte Carlo estimates. One standard sufficient condition is geometric ergodicity together with $E_\\pi|h|^{2+\\delta}<\\infty$ for some $\\delta>0$; finite variance alone is not sufficient for a general nonreversible geometrically ergodic chain. Such hypotheses are difficult to verify in practice, which is why diagnostics supplement rather than prove the CLT.

<a id="section-48-batch-means-estimation"></a>
## Batch means estimation {#section-50-batch-means-estimation}

The batch means estimator divides the chain into $K$ batches of size $B=S/K$.
First compute the ordinary sample variance of the batch means:

$$s_{\\mathrm{batch}}^{2}=\\frac{1}{K-1}\\sum_{k=1}^{K}
\\left(\\bar h_k-\\hat h_S\\right)^2,$$

where $\\bar h_k$ is the mean of $h$ in batch $k$. When batches are long enough
for their means to behave approximately independently, the long-run variance
per iteration is estimated by

$$\\hat\\sigma_{\\mathrm{LR}}^2=B\\,s_{\\mathrm{batch}}^2.$$

Therefore the Monte Carlo variance of the overall mean and the corresponding
ESS estimate are

$$\\widehat{\\operatorname{Var}}_{\\mathrm{MC}}(\\hat h_S)
=\\frac{s_{\\mathrm{batch}}^2}{K}
=\\frac{B\\,s_{\\mathrm{batch}}^2}{S},$$

$$\\hat S_{\\mathrm{eff}}
=\\frac{S\\,\\hat\\sigma_h^2}{B\\,s_{\\mathrm{batch}}^2},$$

where $\\hat\\sigma_h^2$ is the marginal sample variance across iterations. The
batch size must grow enough to capture serial dependence while leaving enough
batches to estimate their variance; $B=\\lfloor\\sqrt S\\rfloor$ is a heuristic,
not a universal optimum.

<a id="section-77-variance-estimation-for-quantiles"></a>
## Variance estimation for quantiles {#section-79-variance-estimation-for-quantiles}

For iid scalar posterior draws, $0<q<1$, a unique $q$-quantile and a continuous positive finite density there, the sample-quantile asymptotic variance is

$$\\frac{q(1-q)}{S \\, \\pi(\\theta_{q} \\mid y)^{2}},$$

Here $\\theta_q$ is the unique posterior quantile. Under a suitable MCMC quantile CLT, replace $q(1-q)$ by the long-run variance of $\\mathbf1\\{\\theta^{(s)}\\le\\theta_q\\}$ and retain the density factor. Tail quantiles are not universally less precise, and tail ESS alone does not determine their MCSE.


<a id="section-86-rao-blackwellization"></a>
## Rao-Blackwellization {#section-88-rao-blackwellization}

The Rao-Blackwell theorem states that conditioning an estimator on sufficient statistics reduces variance. In Monte Carlo, this means that if we can analytically compute $\\mathbb{E}[h(\\theta) \\mid z]$ for some auxiliary variable $z$, the estimator

$$\\hat{h}_{\\mathrm{RB}} = \\frac{1}{S} \\sum_{s=1}^{S} \\mathbb{E}[h(\\theta) \\mid z^{(s)}]$$

has no greater variance for iid joint draws when $h$ is square-integrable. For MCMC, its mean variance depends on transition-law covariances; a one-draw conditional-variance inequality does not establish the same ordering. Conditional expectations are often available in Gibbs sampling.

**Example.** In a normal model with unknown mean and variance, the posterior mean of $\\mu$ can be estimated by averaging the conditional posterior means $\\mathbb{E}[\\mu \\mid \\sigma^{2(s)}, y]$ instead of averaging the raw $\\mu^{(s)}$. For iid posterior draws this averaging has no greater variance; a Gibbs-chain mean-variance comparison requires its actual transition law.

<a id="section-96-control-variates"></a>
## Control variates {#section-98-control-variates}

A control variate is a function $g(\\theta)$ with known expectation $\\mathbb{E}[g(\\theta)]$ under the posterior. The estimator

$$\\hat{h}_{\\mathrm{CV}} = \\hat{h}_{S} - c\\left(\\hat{g}_{S} - \\mathbb{E}[g(\\theta)]\\right)$$

For $S$ independent posterior draws it has variance

$$\\operatorname{Var}(\\hat h_{\\mathrm{CV}})=\\frac{\\operatorname{Var}(h)+c^2\\operatorname{Var}(g)-2c\\operatorname{Cov}(h,g)}{S},$$

and the minimizing coefficient is $c^*=\\operatorname{Cov}(h,g)/\\operatorname{Var}(g)$ when $\\operatorname{Var}(g)>0$. For MCMC, apply the same construction to $Y_s=h(\\theta^{(s)})-c(g(\\theta^{(s)})-E[g])$: the sample-mean variance is the long-run variance $[\\gamma_Y(0)+2\\sum_{k\\ge1}\\gamma_Y(k)]/S$. Its optimal coefficient depends on long-run cross-covariances, not only the one-draw marginal covariance.

Estimating $c^*$ from the same sample can introduce bias or instability and need not preserve the theoretical variance reduction. A fixed coefficient or independent pilot permits a clearer conditional analysis; effectiveness for normalizing constants or tails still depends on the target, control and cost.


<a id="section-111-antithetic-variates"></a>
## Antithetic variates {#section-113-antithetic-variates}

Antithetic variates reduce variance by inducing negative correlation between samples. For a target distribution symmetric about zero, if $\\theta^{(s)}$ is a draw, then $-\\theta^{(s)}$ is also a draw. The antithetic estimator

$$\\hat{h}_{\\mathrm{AV}} = \\frac{1}{2S} \\sum_{s=1}^{S} \\left(h(\\theta^{(s)}) + h(-\\theta^{(s)})\\right)$$

has variance $\\frac{1}{2S}\\left(\\operatorname{Var}(h) + \\operatorname{Cov}(h(\\theta), h(-\\theta))\\right)$ for independent base pairs with finite second moments. Negative within-pair covariance reduces variance at the same evaluation count; dependent base pairs need additional long-run covariance terms.

The displayed $\\theta,-\\theta$ construction requires a symmetric target.
Antithetic couplings are broader: for example, $U$ and $1-U$ can be passed
through an inverse transform for a nonsymmetric target. Their effectiveness is
determined by whether the induced covariance is negative for the chosen
estimand; it may be weak or even harmful for a nonlinear $h$.

<a id="section-125-quasi-monte-carlo"></a>
## Quasi-Monte Carlo {#section-127-quasi-monte-carlo}

Quasi-Monte Carlo (QMC) uses deterministic point sets. For fixed dimension, a star-discrepancy bound $O((\\log S)^d/S)$ gives an integration-error bound of that order for integrands with finite Hardy-Krause variation; the constants and hypotheses matter. This is not a universal posterior-sampling rate, and the transformed integrand's variation must be justified.

In Bayesian computation, QMC is rarely used for posterior sampling because the posterior is typically complex and high-dimensional. It is more commonly applied to marginal likelihood estimation and other integration problems where the integrand is smooth.


<a id="section-132-convergence-rates-and-the-curse-of-dimensionality"></a>
## Convergence rates and the curse of dimensionality {#section-134-convergence-rates-and-the-curse-of-dimensionality}

For iid square-integrable integrands the root-$S$ standard-error exponent is dimension independent, but its variance constant and the cost of generating a draw can depend strongly on dimension. A tensor grid with $m$ points per coordinate costs $m^d$ evaluations; that cost growth is not a universal theorem that deterministic-quadrature error grows exponentially with dimension.

In high-dimensional posteriors, the effective sample size per unit computation can become very small. Strong correlations between parameters reduce ESS, and complex geometry requires smaller step sizes or longer trajectories. The "curse of dimensionality" is not avoided by Monte Carlo; it is merely transformed into a problem of mixing and exploration.

<a id="section-138-multilevel-monte-carlo"></a>
## Multilevel Monte Carlo {#section-140-multilevel-monte-carlo}

Multilevel Monte Carlo (MLMC) reduces variance by combining simulations at multiple resolutions. For a quantity of interest $Q$ computed from a fine-resolution simulation, MLMC writes

$$\\mathbb{E}[Q_{L}] = \\mathbb{E}[Q_{0}] + \\sum_{\\ell=1}^{L} \\mathbb{E}[Q_{\\ell} - Q_{\\ell-1}],$$

where $Q_{\\ell}$ is the approximation at resolution level $\\ell$. The telescoping expectation identity is algebraic. Its computational advantage needs more: adjacent levels must be coupled so that $Q_{\\ell}-Q_{\\ell-1}$ has suitably decaying variance, and bias, variance, and cost must satisfy the conditions of the chosen MLMC theorem. Without coupling, the difference can have larger variance than either level. Under a well-coupled hierarchy with the required decay rates, MLMC can achieve a target mean-square error at lower expected cost than sampling only the finest level; neither fewer samples nor a fixed saving is automatic.

In Bayesian computation, MLMC is used for expensive forward models, such as partial differential equations or agent-based simulations. The coarse levels use cheaper approximations, while the fine levels use the full model.


<a id="section-149-stopping-rules-for-monte-carlo-simulation"></a>
## Stopping rules for Monte Carlo simulation {#section-151-stopping-rules-for-monte-carlo-simulation}

For planning, the relation

$$S_{\\mathrm{eff}} > \\left(\\frac{\\operatorname{sd}(h)}{\\epsilon}\\right)^{2},$$

connects a desired standard-error scale $\\epsilon$ to an effective sample-size target, provided the standard deviation and ESS approximation are appropriate for the estimand.

Monitoring an *estimated* MCSE and stopping when it crosses a threshold is itself data-dependent and does not automatically avoid finite-sample stopping bias. A valid sequential fixed-width procedure must declare its checking schedule and satisfy the conditions of its coverage or consistency result. Otherwise, use the inequality as a planning target, document the stopping rule, and assess repeated-run behavior rather than claiming that MCSE-only stopping is unbiased.

<a id="section-159-comparing-monte-carlo-error-to-posterior-uncertainty"></a>
## Comparing Monte Carlo error to posterior uncertainty {#section-161-comparing-monte-carlo-error-to-posterior-uncertainty}

A useful rule of thumb is to run the sampler until the MCSE is less than $5\\%$ of the posterior standard deviation. At this point, Monte Carlo error contributes negligibly to total uncertainty. For precise tail quantiles, a stricter threshold of $1\\%$ may be needed.

**Example.** If the posterior SD is $2.0$ and the desired MCSE is $0.1$ ($5\\%$ of SD), the required ESS is $(2.0/0.1)^{2} = 400$. For a quantity with ESS $200$ per $1{,}000$ iterations, this requires $2{,}000$ post-warmup iterations.

<a id="section-165-common-errors"></a>
## Common errors {#section-167-common-errors}

- **Reporting MCSE as posterior uncertainty.** The posterior standard deviation describes uncertainty about $\\theta$ given the data and model. The MCSE describes uncertainty about the Monte Carlo estimate of a posterior expectation. They are not interchangeable.
- **Using raw sample size instead of ESS.** A chain of length $10^{6}$ with ESS $500$ is not $10^{6}$ independent samples. Always report ESS alongside raw iterations.
- **Ignoring ESS for tail quantities.** Bulk ESS may be adequate while tail ESS is dangerously low. Tail quantiles or extreme probabilities may require more computation for a declared tolerance, depending on their density, long-run variance and error scale.
- **Running longer without diagnosing the root cause.** More iterations are not a substitute for better algorithms or parameterizations.

<a id="section-172-practice-exercises"></a>
## Practice exercises {#section-174-practice-exercises}

<a id="section-174-exercise-1"></a>
### Exercise 1 {#section-176-exercise-1}

A chain of length $50{,}000$ has bulk ESS $2{,}400$ and tail ESS $800$ for a parameter with posterior standard deviation $1.5$. Compute the MCSE for the posterior mean. Is the supplied information enough to compute the MCSE of the 95th percentile?

**Solution.** If $2400$ is also a reliable ESS for the raw posterior mean and the relevant CLT applies, the proxy is $1.5/\\sqrt{2400}\\approx0.031$; rank-normalized bulk ESS alone does not generally determine mean MCSE.
The quantile MCSE cannot be computed from posterior SD and tail ESS alone. It
also depends on the posterior density at the 95th percentile (or on a direct
quantile-MCSE estimator). Tail ESS diagnoses tail sampling but is not a
drop-in denominator for the mean's standard-error formula.

<a id="section-184-exercise-2"></a>
### Exercise 2 {#section-186-exercise-2}

Explain why doubling the chain length from $10{,}000$ to $20{,}000$ iterations might not halve the MCSE if the sampler has poor mixing.

**Solution.** Even for independent draws, doubling the effective sample size
reduces MCSE by only $1/\\sqrt2$, not by one half. With severe autocorrelation,
nonstationarity, or mode trapping, the estimated ESS may grow by less than a
factor of two and the gain can be smaller still. A longer run does not repair
an unvisited mode.

<a id="section-194-exercise-3"></a>
### Exercise 3 {#section-196-exercise-3}

A researcher reports a posterior mean of $3.42$ with MCSE $0.003$ and posterior SD $0.45$. Report the posterior uncertainty and the Monte Carlo uncertainty without combining their variances.

**Solution.** If a normal approximation to the posterior is appropriate, its
central 95% interval is approximately $3.42\\pm1.96(0.45)=[2.54,4.30]$.
Separately, a Monte Carlo confidence interval for the computed posterior mean
is $3.42\\pm1.96(0.003)=[3.414,3.426]$. The first describes posterior
uncertainty about the parameter; the second describes numerical uncertainty
in estimating the posterior mean. Endpoint MCSE should be reported when the
posterior interval itself is estimated from draws.

<a id="section-206-looking-backward-and-forward"></a>
## Looking backward and forward {#section-208-looking-backward-and-forward}

This chapter quantified the error in Monte Carlo approximations, distinguishing true posterior uncertainty from computational error. The next chapter, *Metropolis–Hastings from an Invariant Kernel*, introduces the most general MCMC algorithm and explains why it produces samples from the correct target distribution.
<a id="section-209-finite-sample-variance-and-bias-come-before-an-asymptot"></a>
## Finite-sample variance and bias come before an asymptotic approximation {#section-211-finite-sample-variance-and-bias-come-before-an-asymptot}

Let $H_s=h(\\Theta_s)$ and let the target expectation be $\\mu_h=E_\\pi h$. For independent draws from $\\pi$ with finite variance $\\sigma_h^2$, linearity gives $E\\bar H_S=\\mu_h$ and independence gives $\\operatorname{Var}(\\bar H_S)=\\sigma_h^2/S$. These are exact finite-sample statements. A normal approximation is not needed to establish them. Chebyshev's inequality already yields $\\Pr(|\\bar H_S-\\mu_h|\\ge\\epsilon)\\le\\sigma_h^2/(S\\epsilon^2)$.

A central limit theorem adds a distributional approximation for standardized error. Under iid sampling and finite variance, $\\sqrt S(\\bar H_S-\\mu_h)$ converges to $N(0,\\sigma_h^2)$. Replacing the unknown variance by an appropriate consistent estimate supports an approximate numerical confidence interval. Neither the exact variance identity nor the limiting theorem says a particular finite run will lie inside a multiple of its estimated standard error.

Existence of an expectation is weaker than finite variance. A Student distribution with degrees of freedom $3/2$ has density of order $|x|^{-5/2}$ in its tails. The integral for $E|X|$ has tail of order $\\int^\\infty x^{-3/2}\\,dx$ and is finite, while that for $EX^2$ has tail of order $\\int^\\infty x^{-1/2}\\,dx$ and diverges. Its sample average can obey a law of large numbers without the usual finite-variance root-$S$ normal approximation. A Cauchy mean fails at the earlier existence step.

For a general dependent sequence, the exact variance is
\\[
\\operatorname{Var}(\\bar H_S)=S^{-2}\\sum_{s=1}^S\\sum_{t=1}^S
\\operatorname{Cov}(H_s,H_t),
\\]
provided the relevant second moments exist. The covariance terms are not removed by calling the output “posterior draws.” A stationary valid chain can have correct one-draw marginals and still produce an inefficient estimate.

Initialization introduces a different issue. If $E H_s$ is not yet $\\mu_h$, the average has bias $b_S=S^{-1}\\sum_s(EH_s-\\mu_h)$, and mean-square error is variance plus $b_S^2$. An autocorrelation estimate describes dependence in the observed output; it does not by itself estimate an unvisited mode's contribution or bound initialization bias. Discarding a chosen warmup portion may help, but does not prove that the remaining sequence starts in stationarity.

The unit of error also matters. Posterior variance describes variation of the unknown quantity under the posterior. Monte Carlo variance describes variation of a numerical estimator over repeated computational runs at fixed data and model. Adding them as if they were interchangeable independent errors changes the inferential question. Report the estimand, its posterior summary and its computational uncertainty separately before using either in a decision.

<a id="section-228-stationary-covariance-gives-the-exact-finite-length-cor"></a>
## Stationary covariance gives the exact finite-length correction {#section-230-stationary-covariance-gives-the-exact-finite-length-cor}

Assume the sequence is stationary and let $\\gamma_k=\\operatorname{Cov}(H_0,H_k)$. Group the double sum by lag. There are $S$ diagonal terms and $S-k$ pairs in each direction at lag $k$, so
\\[
\\operatorname{Var}(\\bar H_S)
=\\frac1S\\left[\\gamma_0+2\\sum_{k=1}^{S-1}(1-k/S)\\gamma_k\\right].
\\]
The factor $1-k/S$ is a finite-length correction. It cannot generally be dropped in a short chain. Positive and negative covariances contribute with their actual signs.

If $\\sum_{k\\ge1}|\\gamma_k|<\\infty$, dominated convergence gives
\\[
S\\operatorname{Var}(\\bar H_S)\\longrightarrow
\\sigma_{\\mathrm{LR},h}^2=\\gamma_0+2\\sum_{k\\ge1}\\gamma_k.
\\]
This limit is nonnegative because it is a limit of variances, although individual covariance terms may be negative. Existence of this variance limit alone is not a proof of a normal limit for the estimator. A central limit theorem needs additional conditions.

A stationary normal autoregression makes the signs concrete. Let $X_s=\\rho X_{s-1}+\\sqrt{1-\\rho^2}\\,Z_s$, with $|\\rho|<1$, independent standard normal innovations and a stationary standard normal initial draw. Recursion gives $\\gamma_k=\\rho^k$ for estimating $EX$. Summing the geometric series yields
\\[
\\sigma_{\\mathrm{LR}}^2=\\frac{1+\\rho}{1-\\rho}.
\\]
For $\\rho=4/5$, this is nine, so a long chain's mean has variance approximately $9/S$. For $\\rho=-1/2$, it is $1/3$, giving approximately $1/(3S)$. Dependence can reduce variance relative to independent draws.

At finite length one can substitute the same powers into the exact weighted sum, rather than assuming the limiting factor is already accurate. The negative-correlation example also explains why truncating an empirical autocorrelation sum at the first negative lag is not a universal rule. It would discard a real variance-reducing mechanism. Practical spectral or batch estimators impose their own assumptions and smoothing choices.

If $\\gamma_0>0$ and $\\sigma_{\\mathrm{LR},h}^2>0$, define the asymptotic efficiency ratio through $S_{\\mathrm{eff},h}=S\\gamma_0/\\sigma_{\\mathrm{LR},h}^2$. It compares variance of this particular mean with iid sampling of the same marginal function. It may exceed $S$ under antithetic dependence. If the long-run variance is zero, an infinite formal ESS should not be treated as an ordinary finite-sample precision certificate; the exact finite variance and possibly a different error scale must be examined.

None of these formulas identifies how much processor time generated the sequence. A larger effective sample size per iteration can still cost more per effective sample if each iteration is expensive. The algebra supplies a common variance language, while cost accounting belongs to the declared computational comparison.

<a id="section-256-a-chain-central-limit-theorem-is-an-imported-result-wit"></a>
## A chain central limit theorem is an imported result with hypotheses {#section-258-a-chain-central-limit-theorem-is-an-imported-result-wit}

A useful nondegenerate chain CLT has the form
\\[
\\sqrt S(\\bar H_S-\\mu_h)\\ \\xrightarrow{d}\\
N(0,\\sigma_{\\mathrm{LR},h}^2),\\qquad
0<\\sigma_{\\mathrm{LR},h}^2<\\infty.
\\]
It concerns one transition kernel, invariant distribution and estimand. Changing $h$, adding adaptation, or using importance weights can change the required assumptions. A collection of plausible trace plots does not establish this theorem.

One sufficient imported condition is a Harris ergodic, geometrically ergodic Markov chain together with $E_\\pi|h|^{2+\\delta}<\\infty$ for some $\\delta>0$. Jones's Theorem 9 collects this condition and other sufficient alternatives. The moment requirement is not replaced by merely observing a finite sample variance. Uniform ergodicity permits a finite-second-moment sufficient condition; reversible chains have further specialized results. These distinctions matter when general claims are transferred between algorithms.

Geometric ergodicity is a quantitative property of convergence to the invariant law. It is not the statement that a finite run looks well mixed. Establishing it may require drift and minorization arguments about the target and proposal, not just a large acceptance rate. The sampler chapter's detailed balance or invariance calculation is also a different step: invariance alone does not imply irreducibility, ergodicity or a CLT for every function.

When the CLT holds and a long-run variance estimator is consistent, the ratio $\\sqrt S(\\bar H_S-\\mu_h)/\\widehat\\sigma_{\\mathrm{LR},h}$ has the standard normal limiting law. Consistency of the variance estimator is an additional requirement. Replacing it by a short-run number obtained from a trapped chain does not inherit the theorem automatically.

There is a useful hierarchy of claims. A kernel can preserve $\\pi$ without converging from a chosen start. An ergodic average can converge without a root-$S$ normal limit. A CLT can hold while a poor finite variance estimator gives unreliable interval widths. Each assertion needs its own conditions, and numerical evidence should say which one it addresses.

The distinction becomes especially clear with independent reference sampling. Accepted draws from a correctly implemented rejection construction are iid under the ideal random-input model, so the iid finite-moment CLT applies directly to their averages. A practical pseudorandom implementation gives a reproducible numerical experiment rather than a proof of random-input independence. The proper hierarchy reference in the preceding chapter uses this separation deliberately: analytic posterior identities check its target, while repeated-run and numerical comparisons assess its finite implementation.

A numerical interval is therefore best stated conditionally: under the specified target, algorithm, moment and asymptotic assumptions, this estimated standard error describes the computation. It supplies neither a proof of those assumptions nor a confidence statement about whether the scientific model itself is correct.

<a id="section-278-effective-sample-size-belongs-to-a-function-and-a-scale"></a>
## Effective sample size belongs to a function and a scale {#section-280-effective-sample-size-belongs-to-a-function-and-a-scale}

The same state sequence can estimate different posterior expectations at very different rates. Consider a stationary state $(A_s,B_s)$ with independent coordinates. Each coordinate takes values $-1$ and $1$ with equal marginal probabilities. Let $A$ remain unchanged with probability $19/20$ and flip with probability $1/20$, while each new $B$ is an independent fair sign. The lag-one correlation of $A$ is $9/10$, and its lag-$k$ correlation is $(9/10)^k$.

For $h(A,B)=A$, the long-run variance is nineteen and the marginal variance is one, giving asymptotic ESS $S/19$. For $g(A,B)=B$, both variances are one and ESS is $S$. These functions use the identical iterations. A single state-level ESS cannot summarize their two numerical errors.

For $r(A,B)=A+10B$, the marginal variance is $101$. At each positive lag only the $A$ component contributes, so the long-run variance is $101+2\\sum_{k\\ge1}(9/10)^k=119$. Its ESS is $101S/119$. A high-variance rapidly refreshed component can dominate the raw mean while a small slowly moving component remains important for another estimand.

Rank normalization changes the function before estimating its autocorrelation. It is valuable because ranks remain defined for heavy-tailed quantities whose ordinary moments may not exist. But a nonlinear monotone rank transform generally changes how these dependence directions are weighted. Rank-normalized bulk ESS is therefore a diagnostic for the transformed quantity, not automatically the ESS needed for the raw posterior mean. Vehtari and colleagues explicitly identify this distinction in their rank-normalization paper.

This matters for the original exercise giving bulk ESS $2400$ and posterior standard deviation $1.5$. The calculation $1.5/\\sqrt{2400}$ is a conditional proxy if $2400$ is also an appropriate, reliable raw-mean ESS and a relevant CLT applies. It is not a generally determined raw-mean MCSE from rank-normalized bulk ESS alone. The posterior standard deviation does not supply the missing raw-function autocovariances.

Quantiles require another function again: an indicator at the quantile, together with a density factor. A diagnostic called tail ESS may summarize selected tail indicators, but its definition and probability level must be stated before it is used in a numerical uncertainty calculation. Replacing every denominator by the smallest available reported ESS is a cautionary heuristic, not a derivation of a particular functional's MCSE.

For comparisons, report the actual functional, whether a transform was used, the chain portion, the long-run variance estimator and its uncertainty. These details make an efficiency statement reproducible without turning a single scalar diagnostic into a universal convergence score.

There is a direct rank-based witness too. For a stationary standard normal AR process $Z_s$ with positive lag correlation $\\rho^k$, set $X_s=\\exp(aZ_s)$, $a>0$. Normal exponential moments give
\\[
\\operatorname{Corr}(X_0,X_k)
=\\frac{\\exp(a^2\\rho^k)-1}{\\exp(a^2)-1},
\\]
which generally differs from $\\rho^k$. Yet the strictly increasing transformation preserves every finite sample rank. Centering and positive rescaling can give each transformed marginal the same posterior SD $1.5$ without changing its ranks or autocorrelations. Thus the reported rank-based ESS and posterior SD can agree while raw-mean long-run variances differ. The missing raw-function dependence cannot be recovered from those two summaries alone.

<a id="section-301-batch-means-estimate-a-long-run-variance-through-two-gr"></a>
## Batch means estimate a long-run variance through two growing scales {#section-303-batch-means-estimate-a-long-run-variance-through-two-gr}

Suppose $S=KB$ retained iterations are divided into $K$ consecutive nonoverlapping batches of length $B$. The batch averages $\\bar H_k$ have variance
\\[
\\operatorname{Var}(\\bar H_k)=
B^{-1}\\left[\\gamma_0+2\\sum_{t=1}^{B-1}(1-t/B)\\gamma_t\\right]
\\]
under stationarity. For sufficiently long batches, $B\\operatorname{Var}(\\bar H_k)$ approaches the long-run variance. This motivates multiplying the sample variance of batch means by $B$.

There are two competing requirements. Batches should be long enough to represent serial dependence, but there must also be enough batches to estimate their variance. Taking $B=1$ leaves the dependence largely untreated. Taking one batch makes a between-batch variance impossible. Keeping a fixed small number of batches as $S$ grows does not generally make the variance estimate consistent, even though each batch becomes long.

The iid normal case gives an exact check. If individual draws have variance nine, independent batch means have variance $9/B$. Their ordinary sample variance $s_{\\mathrm{batch}}^2$ is unbiased for $9/B$, so $B s_{\\mathrm{batch}}^2$ is unbiased for nine. Moreover $(K-1)B s_{\\mathrm{batch}}^2/9$ has a chi-square distribution with $K-1$ degrees of freedom. Its relative variance is $2/(K-1)$, which does not vanish if $K$ is fixed. Increasing only batch length cannot eliminate that uncertainty.

In a dependent chain, neighboring batch means need not be independent at finite $B$. Strong consistency results for batch estimators use additional mixing, moment and batch-growth conditions; the preceding expectation calculation is motivation, not their proof. The common square-root batch-size choice is a practical convention requiring assessment, not a universal optimum.

A numerical example should also keep the scales straight. If $K=4$, $B=25$, and the observed batch-mean sample variance is a hypothetical $0.36$, the estimated long-run variance is $25(0.36)=9$ and the estimated variance of the overall mean is $0.36/4=0.09$. Dividing by all one hundred iterations again would count the averaging twice. With only four batches the variance estimate itself is uncertain; reporting extra decimal places does not add batches.

For very slow dependence, a useful check is to compare estimates across several larger batch lengths while keeping enough batches to see their variability. Agreement is supporting evidence on the observed series, not proof that an omitted mode is irrelevant. Independent runs, when available, can reveal between-run disagreements invisible to one chain's autocovariance estimate.

Finally, batches must preserve the actual ordering and declared estimand. Shuffling iterations would erase the dependence being estimated. Combining chains without documenting their different starts and stationarity status can introduce a different problem. A reproducible batch report records its partition, discarded remainder if any, functional and retained-run selection.

<a id="section-322-a-finite-memory-example-shows-when-batch-consistency-ca"></a>
## A finite-memory example shows when batch consistency can be proved {#section-324-a-finite-memory-example-shows-when-batch-consistency-ca}

The shift-refresh example also permits a complete batch-means calculation. Take $H_s=2Z_s-Z_{s-1}$ with iid standard normal $Z_s$. Its long-run variance is one. For a batch of length $B$, the sum is minus its initial innovation, plus its interior innovations, plus twice its final innovation. Thus a batch mean has variance $(B+4)/B^2$. Adjacent batches share exactly one innovation with coefficients two and minus one, giving covariance $-2/B^2$; nonadjacent batches are independent.

Set $M_k=\\sqrt B\\,\\bar H_k$. These centered jointly normal batch variables have variance $v_B=1+4/B$ and adjacent covariance $c_B=-2/B$. Let $T_K=K^{-1}\\sum_{k=1}^KM_k^2$. The normal fourth-moment identity gives $\\operatorname{Cov}(M_i^2,M_j^2)=2\\operatorname{Cov}(M_i,M_j)^2$. It follows that
\\[
ET_K=v_B,\\qquad
\\operatorname{Var}(T_K)=\\frac{2v_B^2}{K}
+\\frac{4(K-1)c_B^2}{K^2}.
\\]
One may verify the fourth-moment identity by expressing one of two correlated normal variables as a linear function of the other plus an independent normal and using $EZ^4=3$.

When $K$ and $B$ both tend to infinity, the expectation tends to one and the variance tends to zero. Thus $T_K$ converges in mean square to the true long-run variance. The usual batch estimator subtracts the squared mean and applies a degrees-of-freedom correction:
\\[
B s_{\\mathrm{batch}}^2
=\\frac{K}{K-1}\\{T_K-\\bar M^2\\}.
\\]
Here $E\\bar M^2=1/K+4/(BK^2)$, and normality gives $E\\bar M^4=3(E\\bar M^2)^2$. Consequently $\\bar M^2$ tends to zero in mean square and the degrees-of-freedom factor tends to one. This proves consistency for this specified Gaussian finite-memory example, without promoting it to a theorem for arbitrary MCMC output.

Its exact expectation makes the two scales visible:
\\[
E[B s_{\\mathrm{batch}}^2]
=1+\\frac{4(K+1)}{KB}.
\\]
If $B$ stays fixed while $K$ grows, this tends to $1+4/B$, not one. If $K$ stays fixed while $B$ grows, the mean approaches one but the variance of a sample variance based on only $K$ normal batch means does not vanish. Both failures have explicit causes.

The example explains why “long batches” and “many batches” are separate requirements. For general chains, controlling the between-batch dependence and approximation error needs further assumptions such as those in a strong-invariance or mixing theorem. The finite-memory proof supplies an actual reference where every covariance and limit can be checked; it does not infer a generic consistency result from a square-root batch heuristic.

<a id="section-350-quantile-error-uses-indicator-dependence-and-local-dens"></a>
## Quantile error uses indicator dependence and local density {#section-352-quantile-error-uses-indicator-dependence-and-local-dens}

Let $F$ be the scalar posterior CDF and let $\\xi_q$ be its unique $q$-quantile, $0<q<1$. Suppose $F$ has a continuous positive finite density $f$ there. The empirical CDF at that fixed point is an average of indicators $I_s=\\mathbf1\\{\\Theta_s\\le\\xi_q\\}$. Under a suitable quantile limit theorem, local inversion gives
\\[
\\widehat\\xi_q-\\xi_q
\\approx-\\frac{F_S(\\xi_q)-q}{f(\\xi_q)}.
\\]
The derivative of the inverse CDF is $1/f(\\xi_q)$, which explains why estimating a probability and locating its corresponding quantile have different numerical scales.

For iid draws, the indicators have variance $q(1-q)$, giving asymptotic quantile variance $q(1-q)/(S f(\\xi_q)^2)$. For dependent draws the numerator becomes their long-run variance
\\[
\\sigma_{I,q}^2=q(1-q)+
2\\sum_{k\\ge1}\\operatorname{Cov}(I_0,I_k),
\\]
when the series and the quantile theorem's hypotheses are valid. The corresponding asymptotic variance is $\\sigma_{I,q}^2/(S f(\\xi_q)^2)$. The marginal variance of $\\Theta$ does not replace either ingredient.

An indicator CLT at one point does not by itself prove that empirical quantiles admit this local linearization. A precise imported sufficient result is Doss, Flegal, Jones and Neath's Theorem 4: under their Harris-ergodic setup, polynomial ergodicity of order greater than one, the stated local density conditions and positive indicator long-run variance yield the quantile CLT. The empirical-process and inversion step is part of that theorem, rather than an unproved consequence of one indicator calculation.

A simple kernel exposes dependence explicitly. At each step retain the current value with probability $\\rho$, $0\\le\\rho<1$, and otherwise draw afresh from $F$. At stationarity, centered functions have lag-$k$ covariance $\\rho^k$ times their marginal variance. Thus the indicator long-run variance is $q(1-q)(1+\\rho)/(1-\\rho)$. At $\\rho=9/10$, quantile variance is nineteen times its iid counterpart. This kernel has an explicit refresh mechanism; a general MCMC output need not share its common dependence factor for every function.

Tail ordering is also not universal. For iid Uniform$(0,1)$ draws the density is one, so the median's asymptotic variance is $1/(4S)$ while the $95$th percentile's is $19/(400S)$. The latter is smaller, not larger. At the same absolute-error scale it is also smaller than the uniform mean's variance $1/(12S)$. Low tail density often makes tail estimation difficult, but the probability numerator, density, dependence and requested tolerance all matter.

Estimating $f(\\xi_q)$ adds numerical uncertainty, and extreme quantiles may have too few relevant draws for an asymptotic approximation to be reliable. A quantile-MCSE method should state how it estimates local density or inverts probability bounds, rather than silently substituting posterior SD divided by a generic tail ESS.

<a id="section-374-a-delta-method-needs-the-joint-long-run-covariance"></a>
## A delta method needs the joint long-run covariance {#section-376-a-delta-method-needs-the-joint-long-run-covariance}

Many posterior reports are nonlinear functions of several expectations. Suppose the vector average of functions $H=(h_1,\\ldots,h_d)$ satisfies a joint CLT with mean $m$ and long-run covariance matrix $\\Sigma_{\\mathrm{LR}}$. For a function $G$ differentiable at $m$, the delta method gives asymptotic variance
\\[
S^{-1}\\nabla G(m)^\\top\\Sigma_{\\mathrm{LR}}\\nabla G(m).
\\]
The matrix contains cross-covariances as well as marginal long-run variances. Separate ESS values do not generally determine it.

For a ratio $G(u,v)=u/v$ with $v\\ne0$, the gradient is $(1/v,-u/v^2)$. Its variance expression is
\\[
\\frac1S\\left[
 \\frac{\\Sigma_{11}}{v^2}
 +\\frac{u^2\\Sigma_{22}}{v^4}
 -\\frac{2u\\Sigma_{12}}{v^3}\\right].
\\]
Ignoring the covariance term can overestimate or underestimate error. A denominator close to zero can also make a local linear approximation poor at practical sample sizes, even though differentiability holds at a nonzero limit.

Self-normalized importance sampling is one application. With proposal draws and nonnegative weights $W$, the ratio $\\sum W_sh_s/\\sum W_s$ targets $E(Wh)/E(W)$ when the expectations exist and the denominator is positive. A joint CLT for $(Wh,W)$ requires its own moment and sampling conditions. Properness of the posterior does not imply finite second moments of importance weights under an arbitrary proposal. A finite observed weight maximum is not a proof of a variance condition.

The dependence is helpful rather than merely a nuisance in some ratios. If $h$ is a constant $c$, then $Wh=cW$ for every draw and the ratio is exactly $c$ whenever the denominator is nonzero. The covariance formula gives zero because all three terms cancel. Treating numerator and denominator as independent would report positive error for an algebraically exact quantity.

Posterior variances provide another example. If $v=E\\Theta^2-(E\\Theta)^2$, its estimator uses the vector $(\\Theta,\\Theta^2)$ and gradient $(-2E\\Theta,1)$. The covariance calculation needs moments sufficient for the joint CLT, usually more than a finite posterior variance. In an iid setting a finite fourth moment supports a basic covariance calculation for $\\Theta^2$; dependent sampling needs the associated chain conditions too.

The delta method also has boundaries. At a zero derivative the first-order expression can be degenerate and a second-order analysis may be needed. At a nondifferentiable functional, such as a quantile without positive density, the ordinary derivative argument is unavailable. A general “propagate standard errors” instruction should therefore be replaced by the actual functional, joint limiting result and derivative used.

<a id="section-399-conditioning-one-draw-does-not-order-two-dependent-samp"></a>
## Conditioning one draw does not order two dependent sample means {#section-401-conditioning-one-draw-does-not-order-two-dependent-samp}

For a square-integrable random variable $H$ and an auxiliary variable $Z$, the conditional-variance identity gives
\\[
\\operatorname{Var}(H)=E[\\operatorname{Var}(H\\mid Z)]
+\\operatorname{Var}(E[H\\mid Z]).
\\]
Thus replacing one draw by its conditional expectation cannot increase its marginal variance. With iid joint draws, averaging preserves this inequality because both sample-mean variances divide their one-draw variances by $S$. The inequality is non-strict when the conditional variance is zero.

For instance, take independent standard normals $X,Z$ and $H=X+Z$. Its mean is zero and variance two, while $E(H\\mid Z)=Z$ has variance one. With $S$ independent joint draws the two sample-mean variances are $2/S$ and $1/S$. The joint law, conditioning variable and estimand are all specified; no generic algorithm-efficiency claim is needed.

Now let $Z_0,Z_1,\\ldots$ be iid standard normals and define a stationary Markov state $X_s=(Z_{s-1},Z_s)$, advanced by shifting and drawing one fresh normal. Its stationary law is the product of two standard normals. After two transitions both coordinates have been refreshed, so the example is not relying on a slowly mixing hidden mode. Use $H_s=Z_s-Z_{s-1}$. The average telescopes to $(Z_S-Z_0)/S$, giving exact variance $2/S^2$.

Conditioning one stationary draw on its current coordinate gives $G_s=E_\\pi(H_s\\mid Z_s)=Z_s$, whose marginal variance one is smaller than the direct draw's variance two. Yet its average has variance $1/S$, larger than $2/S^2$ whenever $S>2$. The negative lag-one covariance of the direct sequence creates cancellation that the pointwise conditional average removes.

The phenomenon persists with positive long-run variances. Change the function to $H_s=2Z_s-Z_{s-1}$. Its marginal variance is five, lag-one covariance is $-2$, and all further covariances vanish, so its long-run variance is one. The conditional replacement $G_s=2Z_s$ has marginal and long-run variance four. Directly summing gives
\\[
\\operatorname{Var}(\\bar H_S)=\\frac{S+4}{S^2},
\\qquad
\\operatorname{Var}(\\bar G_S)=\\frac4S.
\\]
For $S\\ge2$, the supposedly variance-reduced dependent average is worse, despite its smaller one-draw variance.

This does not contradict conditioning the entire estimator on one common sigma-field, which always satisfies the conditional-variance inequality. Applying a separate stationary conditional expectation to each overlapping state is not generally that whole-path operation. In a Gibbs calculation, therefore, identify the actual transition law and compare long-run covariances before asserting an MCMC gain. The public hierarchy reference uses independent accepted draws, so its conditional-mean averaging can invoke the iid result; it does not establish the same ordering for every Gibbs or HMC implementation.

<a id="section-424-a-control-variate-needs-a-known-expectation-and-a-justi"></a>
## A control variate needs a known expectation and a justified coefficient {#section-426-a-control-variate-needs-a-known-expectation-and-a-justi}

For iid draws, let $H$ be the target function and let $G$ have a known finite expectation $g_0$. Replacing $H$ by $H-c(G-g_0)$ preserves its expectation for a fixed coefficient $c$. Expanding the square gives variance $\\operatorname{Var}(H)+c^2\\operatorname{Var}(G)-2c\\operatorname{Cov}(H,G)$. When $\\operatorname{Var}(G)>0$, completing the quadratic shows that $c^*=\\operatorname{Cov}(H,G)/\\operatorname{Var}(G)$ minimizes it.

Take $U\\sim\\operatorname{Uniform}(0,1)$, $H=U^2$ and $G=U$, with known $g_0=1/2$. The moments are $EH=1/3$, $\\operatorname{Var}(H)=1/5-1/9=4/45$, $\\operatorname{Var}(G)=1/12$, and $\\operatorname{Cov}(H,G)=1/4-1/6=1/12$. Thus $c^*=1$, and the adjusted function $U^2-U+1/2$ has variance $1/180$. Its iid sample mean has sixteen times smaller variance than the unadjusted mean at the same number of base draws. The additional arithmetic or control evaluation still belongs in the cost accounting.

For a stationary chain, apply the same construction to the whole time series. If the required covariance sums converge, its long-run variance is
\\[
\\sigma_H^2+c^2\\sigma_G^2-2c\\sigma_{HG},
\\]
where $\\sigma_{HG}$ is the long-run cross-covariance entering the symmetric joint covariance matrix. The optimal coefficient is $\\sigma_{HG}/\\sigma_G^2$ when that denominator is positive. Marginal one-draw covariance is not generally a substitute. A coefficient optimal for iid draws can be inefficient for a particular transition kernel.

Estimating a coefficient from the same output introduces another layer. The random coefficient can be correlated with the sample control mean, so unbiasedness of the fixed-coefficient construction need not survive. A nearly zero empirical control variance can make the estimated coefficient unstable. There is no universal theorem saying its performance is only slightly below the theoretical optimum.

An independent pilot offers a clean finite-sample distinction. Conditional on a pilot-chosen coefficient, an independent iid evaluation sample still has expected adjusted value $EH$, because its control mean remains $g_0$. Its conditional variance is the fixed-coefficient variance at that chosen value. Averaging over the pilot need not achieve the optimal variance, but the expectation argument is explicit. Cross-fitting can use data more efficiently with its own dependence analysis; merely naming it does not remove the need for a proof.

Finally, a control expectation must belong to the actual target or proposal formulation. Substituting an approximately known control mean introduces a bias term $c(\\widehat g_0-g_0)$. Treating that approximation as exact can exchange visible Monte Carlo variability for hidden deterministic or stochastic error. State how the control expectation is established, and include its uncertainty if it is computed.

<a id="section-442-antithetic-pairs-can-help-one-functional-and-hurt-anoth"></a>
## Antithetic pairs can help one functional and hurt another {#section-444-antithetic-pairs-can-help-one-functional-and-hurt-anoth}

Let $X$ have a distribution symmetric about zero, and form a pair $(X,-X)$. Both marginals have the target law. If independent base draws generate $S$ independent pairs and $H=h(X)$ has finite variance $\\sigma_h^2$, the paired estimator has variance
\\[
\\frac{1}{2S}\\{\\sigma_h^2+
\\operatorname{Cov}(h(X),h(-X))\\}.
\\]
The independence here is between base pairs, not between their two members. For dependent MCMC base draws, covariance terms across pairs must also be included. Symmetry about a nonzero center requires reflection about that center instead.

For $U\\sim\\operatorname{Uniform}(0,1)$, the pair $(U,1-U)$ has the same two uniform marginals. If $h(u)=u$, every pair average equals $1/2$ exactly. If $h(u)=u^2$, the pair average is $U^2-U+1/2$, the same function obtained by the previous control variate. Its variance is $1/180$, so averaging $S$ independent pairs gives $1/(180S)$.

Compare costs fairly. The paired construction uses $2S$ evaluations of the square function, while $2S$ independent evaluations have mean variance $(4/45)/(2S)=2/(45S)$. At that evaluation count the antithetic construction gives an eightfold reduction, not the sixteenfold reduction quoted for the control construction at $S$ base draws. If an implementation exploits algebraic shortcuts, its actual cost comparison should say so.

Reflection is not guaranteed to help a nonlinear function. For a symmetric $X$ and $h(X)=X^2$, the two pair values are identical. Their covariance equals the marginal variance, giving no reduction per base draw and twice the variance of $2S$ independent values at the same literal number of evaluations. A symmetry of the sampling distribution is not a negative-covariance theorem for every estimand.

For a nonsymmetric target with a continuous inverse CDF $F^{-1}$, one can instead set $X=F^{-1}(U)$ and $X'=F^{-1}(1-U)$. Both have the target law, although $X'$ need not equal $-X$. A monotone integrand of $U$ has nonpositive covariance with its reflected version. One proof takes an independent copy $V$ and uses
\\[
2\\operatorname{Cov}(f(U),g(U))
=E[(f(U)-f(V))(g(U)-g(V))],
\\]
which is nonpositive when one function increases and the other decreases. Square integrability justifies the covariance.

This construction still requires a usable transport and a declared functional. An unavailable posterior inverse CDF is not made available by writing its symbol. Antithetic dependence, control expectations and conditional averaging are different mechanisms; each needs its own actual joint construction and variance comparison.

<a id="section-466-deterministic-point-sets-need-discrepancy-and-regularit"></a>
## Deterministic point sets need discrepancy and regularity conditions {#section-468-deterministic-point-sets-need-discrepancy-and-regularit}

To integrate a function $f$ on $[0,1]^d$, QMC averages it at a chosen deterministic point set. An imported Koksma-Hlawka bound compares integration error with the star discrepancy of that point set times the Hardy-Krause variation of $f$. Its assumptions concern the transformed integrand and the specified variation convention. Ordinary smooth-looking plots or finite variance under a probability distribution do not establish bounded Hardy-Krause variation.

A one-dimensional proof shows the mechanism without importing the full theorem. Let $f$ be continuously differentiable on $[0,1]$ and let $F_S$ be the empirical CDF of the chosen points. Integration by parts gives
\\[
S^{-1}\\sum_sf(u_s)-\\int_0^1f(u)\\,du
=-\\int_0^1(F_S(u)-u)f'(u)\\,du.
\\]
The endpoint terms cancel because both measures have total mass one. Consequently the error magnitude is bounded by $D_S^*\\int_0^1|f'(u)|\\,du$, where $D_S^*=\\sup_u|F_S(u)-u|$. This is a deterministic inequality, not a confidence interval.

For midpoint points $u_k=(k-1/2)/S$ and $f(u)=u^2$, sum the squares exactly:
\\[
\\frac1S\\sum_{k=1}^S u_k^2
=\\frac13-\\frac{1}{12S^2}.
\\]
Indeed $\\sum_{k=1}^S(k-1/2)^2=S(4S^2-1)/12$. The exact error is therefore $1/(12S^2)$, while the generic discrepancy bound using $D_S^*=1/(2S)$ and total derivative variation one is looser. A general worst-case bound need not describe the exact rate for a special polynomial.

For fixed dimension and appropriate low-discrepancy constructions, a discrepancy bound of order $(\\log S)^d/S$ gives an error bound of that order when the variation constant is finite. It is not a universal posterior-sampling rate. Mapping a Gaussian or heavy-tailed target through an inverse CDF can introduce boundary singularities, and the effective variation and constants can depend badly on dimension. Tensor-grid computational cost and quadrature error are also distinct: a grid with $m$ points per coordinate uses $m^d$ evaluations, but its error depends on the integrand and rule.

Randomized QMC adds a different uncertainty framework. If a randomization gives each point the uniform marginal law, the point-set average is unbiased for the integral even though its points are dependent. Independent randomizations produce independent replicate averages whose between-replicate variance can estimate the error of their average. Within-set sample variance divided by the number of points is not justified as though those points were iid.

The midpoint example is a complete bounded integration reference, not a replacement for an undeclared high-dimensional posterior algorithm. To apply QMC to a posterior expectation one must supply an actual transport or weighted integral, verify its regularity or state the boundary of the imported bound, and name the point-set construction. The original numerical method does not become reproducible merely from the acronym.

<a id="section-490-multilevel-gains-depend-on-coupling-allocation-and-bias"></a>
## Multilevel gains depend on coupling, allocation and bias {#section-492-multilevel-gains-depend-on-coupling-allocation-and-bias}

A complete finite example makes the multilevel requirements inspectable. Let $U,V$ be independent standard normals and consider the random integral
\\[
Q=\\int_0^1\\{U+(V+1)t\\}\\,dt=U+(V+1)/2.
\\]
Its exact mean is $1/2$. Define $Q_\\ell$ by the left Riemann rule with $2^\\ell$ function evaluations. Algebra gives $Q_\\ell=U+(1/2-2^{-\\ell-1})(V+1)$, so its mean bias relative to $Q$ is $-2^{-\\ell-1}$. The analytic formula is an oracle for checking the numerical rule; using the oracle directly would avoid this numerical problem.

Couple adjacent levels with the same $U,V$. Then
\\[
\\Delta_\\ell=Q_\\ell-Q_{\\ell-1}
=2^{-\\ell-1}(V+1),\\quad
\\operatorname{Var}(\\Delta_\\ell)=4^{-\\ell-1}\\quad(\\ell\\ge1).
\\]
The common $U$ cancels. Independent fine and coarse random inputs would instead retain roughly two units of $U$ variance, losing the decaying-variance mechanism. Use independent pairs across different replicate samples and across levels when adding their variance contributions.

With $N_0$ samples of $Q_0$ and $N_\\ell$ coupled samples of each difference, the estimator targets $EQ_L$ and has variance $1/N_0+\\sum_{\\ell=1}^L4^{-\\ell-1}/N_\\ell$. If coarse-grid evaluations are reused from the fine grid, the declared function-evaluation cost per level difference is $2^\\ell$, with cost one at level zero. This accounting describes the Riemann algorithm, not the cheapest possible solver for a linear integrand.

For $L=2$, take $N_0=32$, $N_1=6$ and $N_2=2$. The cost is $32+12+8=52$ evaluations and the variance is $1/32+1/96+1/128=19/384$. Thirteen independent finest-level samples have the same cost and variance $(1+(3/8)^2)/13=73/832$, which is larger. Both estimators target $EQ_2=3/8$ and retain the same bias $-1/8$ relative to the continuous integral. Reporting variance reduction without that bias would overstate accuracy.

Allocation matters. For positive per-sample variances $V_\\ell$ and costs $C_\\ell$, Cauchy-Schwarz gives
\\[
\\left(\\sum_\\ell N_\\ell C_\\ell\\right)
\\left(\\sum_\\ell V_\\ell/N_\\ell\\right)
\\ge\\left(\\sum_\\ell\\sqrt{V_\\ell C_\\ell}\\right)^2.
\\]
At a fixed variance budget, the continuous optimum has $N_\\ell$ proportional to $\\sqrt{V_\\ell/C_\\ell}$. Integer rounding and the bias-controlled finest level must then be included. Equal sample counts at every level are not generally optimal.

This is a declared target, forward rule, coupling, allocation and exact reference. General MLMC complexity theorems require explicit weak-bias, variance-decay and cost assumptions, as in Giles's work. The example proves a bounded contrast and illustrates those hypotheses; it does not claim an executed PDE solver, a posterior sampler, or a universal speedup for arbitrary discretizations.

<a id="section-520-cost-and-stopping-rules-must-match-the-numerical-questi"></a>
## Cost and stopping rules must match the numerical question {#section-522-cost-and-stopping-rules-must-match-the-numerical-questi}

A requested MCSE is meaningful only with its estimand and units. For a posterior mean with standard deviation $\\sigma_h$, a target MCSE $\\epsilon$ suggests $S_{\\mathrm{eff},h}\\approx\\sigma_h^2/\\epsilon^2$ under the relevant long-run variance approximation. If the goal is a tail probability, use its indicator variance and dependence instead. If it is a quantile, include the local density. A percentage of posterior SD is a possible reporting convention, not a universal adequacy threshold.

Iteration count also omits computational work. Compare estimators using a declared cost such as target log-density evaluations, gradient evaluations, forward-solver calls or measured elapsed time in a stated environment. A conditional expectation can cost more than one direct draw, and a long HMC trajectory costs more gradients than a short one. A lower variance per iteration need not be a lower variance per unit cost.

In the ideal stationary regime with stable long-run variance and cost rate, doubling retained computation roughly halves the variance of a sample mean and reduces its standard error by $1/\\sqrt2$. It does not halve standard error. Outside that regime, estimated ESS may fluctuate, fail to grow proportionally or miss a mode. Longer output is useful evidence only together with the assumptions and diagnostics relevant to the target.

Stopping based on an estimated error is itself part of the algorithm. To see why a data-dependent sample size can matter, let iid observations be fair signs and stop after one draw if the first is $+1$, otherwise take a second draw and report the average. The reported mean has expectation $(1/2)(1)+(1/2)(-1+0)/2=1/4$, although the target mean is zero. No dependence in the base draws was needed to create stopping bias.

This example does not say every random stopping rule is biased. In rejection sampling, waiting for a fixed number of accepted proposals has a special factorization: under ideal iid proposals, acceptance waiting times are independent of accepted values, which have the target law. A finite proposal cap can fail without returning a partial estimate. That is different from inspecting the numerical values and stopping when their estimated error looks favorable.

Valid sequential fixed-width methods require the hypotheses and schedule of their own coverage or consistency results. Otherwise a planned MCSE target should be reported as a planning rule, with the actual stopping condition and any finite-run evidence stated. It should not be described as an exact guarantee.

The method comparisons in this chapter fill their named input and reference gaps with explicit finite constructions. They are mathematical contrasts, not claimed observations from the shared hierarchy or production HMC fit. The hierarchy, NUTS, predictive checks and model-comparison obligations retain their own data, algorithms and evidence boundaries in their owning chapters.

<a id="section-536-exercises-dependent-conditioning-and-quantile-uncertain"></a>
## Exercises: dependent conditioning and quantile uncertainty {#section-538-exercises-dependent-conditioning-and-quantile-uncertain}

<a id="section-538-cbm-04-e4-reduce-one-draw-variance-and-increase-mean-va"></a>
### CBM-04-E4 — Reduce one-draw variance and increase mean variance {#section-540-cbm-04-e4-reduce-one-draw-variance-and-increase-mean-va}

Let $Z_0,Z_1,\\ldots$ be iid standard normals and $H_s=2Z_s-Z_{s-1}$. Compute its marginal variance, lag covariances and exact variance of the first $S$ values' mean. Compare with the sequence $G_s=E(H_s\\mid Z_s)$. Explain why a one-draw variance reduction does not prove an MCMC mean improvement.

<a id="section-542-cbm-04-e5-a-tail-quantile-can-be-more-precise-than-the-"></a>
### CBM-04-E5 — A tail quantile can be more precise than the median {#section-544-cbm-04-e5-a-tail-quantile-can-be-more-precise-than-the-}

A stationary chain on Uniform$(0,1)$ retains its current state with probability $3/4$ and otherwise refreshes independently. Derive the indicator long-run variance and the asymptotic variances of its median and $95$th-percentile estimates. State the quantile theorem conditions used and compare the two at a common absolute-error scale.

<a id="section-546-solutions-dependent-conditioning-and-quantile-uncertain"></a>
## Solutions: dependent conditioning and quantile uncertainty {#section-548-solutions-dependent-conditioning-and-quantile-uncertain}

<a id="section-548-cbm-04-e4-reduce-one-draw-variance-and-increase-mean-va"></a>
### CBM-04-E4 — Reduce one-draw variance and increase mean variance — solution {#section-550-cbm-04-e4-reduce-one-draw-variance-and-increase-mean-va}

The marginal variance is five. Only lag one is nonzero, with covariance $-2$, so the long-run variance is one. The finite sum is $2Z_S+\\sum_{s=1}^{S-1}Z_s-Z_0$, giving variance $(S+4)/S^2$ for its mean. Conditional expectation gives $G_s=2Z_s$, with one-draw variance four and sample-mean variance $4/S$. For $S\\ge2$ this is larger. The pointwise projection removes negative lag covariance; it is not conditioning the entire estimator on a common sigma-field.

<a id="section-552-cbm-04-e5-a-tail-quantile-can-be-more-precise-than-the-"></a>
### CBM-04-E5 — A tail quantile can be more precise than the median — solution {#section-554-cbm-04-e5-a-tail-quantile-can-be-more-precise-than-the-}

The refresh kernel has dependence factor $(1+\\rho)/(1-\\rho)=7$. At level $q$, indicator long-run variance is $7q(1-q)$. The uniform density is one at each interior quantile, so the median variance is $7/(4S)$ and the $95$th-percentile variance is $133/(400S)$. Their ratio is $19/100$, favoring the latter at the same absolute scale. A refresh probability $1/4$ gives uniform ergodicity, hence the imported polynomial-ergodic quantile condition; each quantile is unique with continuous positive density and positive indicator long-run variance. The calculation does not establish a universal ordering for other targets or tolerances.

<a id="section-556-references-limit-theorems-and-numerical-method-boundari"></a>
## References: limit theorems and numerical method boundaries {#section-558-references-limit-theorems-and-numerical-method-boundari}

Galin L. Jones, “On the Markov Chain Central Limit Theorem,” [author preprint](https://arxiv.org/pdf/math/0409112), Theorem 9, supplies the stated Harris/geometric-ergodic sufficient CLT conditions. The theorem is imported; the finite covariance and worked variance calculations are derived here.

Charles Doss, James Flegal, Galin Jones and Ronald Neath, “Markov Chain Monte Carlo Estimation of Quantiles,” [author preprint](https://arxiv.org/pdf/1207.6432), Section 3.2, equation (9) and Theorem 4 on printed page 7, supplies the indicator long-run variance and precise quantile-CLT boundary. Aki Vehtari and colleagues, “Rank-normalization, folding, and localization,” [author paper](https://arxiv.org/pdf/1903.08008), printed page 4, explicitly distinguishes rank-normalized ESS from raw-mean ESS.

Art B. Owen, [Quasi-Monte Carlo chapters](https://artowen.su.domains/mc/qmcstuff.pdf), Chapter 15, states the discrepancy/Hardy-Krause setting used as an import. The differentiable one-dimensional bound and midpoint example are proved here. Michael B. Giles, “Multilevel Monte Carlo Path Simulation,” Operations Research 56 (2008), 607–617, [author paper](https://people.maths.ox.ac.uk/gilesm/files/OPRE_2008.pdf), gives the broader bias/variance/cost framework. This chapter's finite coupled Riemann reference does not claim that every forward model has those rates.

Batch-means consistency requires conditions beyond growing two integer scales; no general consistency theorem or observed sampler performance is inferred from a hypothetical batch table. All supplied variance contrasts are mathematical references, not unreported program runs.

`;export{e as default};