var e=`---
parent_id: book-computational-bayesian-modeling
matter_id: solutions
title: "Exercise and Project Solutions"
license: CC BY-SA 4.0
---

# Exercise and Project Solutions

These solutions show decisive reasoning for exercises across the chapters. They are organized by chapter and preserve the claim-status conventions used throughout the book. Where chapters contain inline solutions, these entries restate them compactly.

---

## Begin with the Generative Story

### Exercise 1

**For integer $n\\ge1$, take $y_1,\\dots,y_n$ to be conditionally independent $\\operatorname{Bernoulli}(p)$ observations given $p$, with proper prior $p\\sim\\operatorname{Beta}(a,b)$ for $a,b>0$. Derive the posterior given $s=\\sum_{i=1}^n y_i$.**

The likelihood is $p^{s}(1-p)^{n-s}$. The prior is proportional to $p^{a-1}(1-p)^{b-1}$. Their product is proportional to $p^{a+s-1}(1-p)^{b+n-s-1}$, which is the kernel of $\\operatorname{Beta}(a+s, b+n-s)$.

### Exercise 2

**Find the induced prior on $\\eta = \\log \\sigma$ when $\\pi(\\sigma) \\propto \\sigma^{-1}$ and verify uniformity.**

By the change-of-variables formula, $\\pi_{\\eta}(\\eta) = \\pi_{\\sigma}(\\exp(\\eta)) \\cdot \\exp(\\eta) \\propto \\exp(-\\eta) \\cdot \\exp(\\eta) = 1$. Thus $\\eta$ has an improper uniform prior on the real line.

### Exercise 3

**State the generative story for log-normal reaction times with normal prior on $\\mu$ and inverse-gamma prior on $\\sigma^{2}$, and identify Jacobians.**

The generative story is: (1) draw $\\mu \\sim \\mathcal{N}(\\mu_{0}, \\tau_{0}^{2})$; (2) draw $\\sigma^{2} \\sim \\operatorname{Inv\\text{-}Gamma}(\\alpha, \\beta)$; (3) for each $i$, draw $\\log t_{i} \\sim \\mathcal{N}(\\mu, \\sigma^{2})$ and set $t_{i} = \\exp(\\log t_{i})$. The model is defined on $(\\mu, \\sigma^{2}, \\log t_{i})$. Because the prior on $\\sigma^{2}$ is specified directly on that scale, no Jacobian is needed for the variance. The transformation from $\\log t_{i}$ to $t_{i}$ is part of the likelihood specification; the likelihood density is with respect to $dt_{i}$, so the Jacobian $|d\\log t_{i} / dt_{i}| = 1/t_{i}$ is already implicit in the log-normal density formula.

### Exercise 4 (Discussion)

**A researcher observes $n = 50$ Bernoulli trials with $s = 12$ successes, uses $\\operatorname{Beta}(1, 1)$, and reports a $95\\%$ equal-tail credible interval of $[0.12, 0.42]$. A critic argues the prior is too influential because this differs from a frequentist interval. Audit both claims.**

The posterior is $\\operatorname{Beta}(13,39)$, with equal-tail $95\\%$ interval approximately $[0.1433,0.3749]$, so the reported interval is incorrect. Its mean $13/52=0.25$ is close to the sample proportion $12/50=0.24$, which quantifies the prior's small effect on this center. Width differences cannot be attributed only to Bayesian-versus-frequentist interpretation: they also depend on the prior, posterior summary, and frequentist interval construction. Correct the computation, name both procedures, and report sensitivity to plausible priors.

---

## Conjugacy as an Exact Computational Benchmark

### Exercise 1

**Derive the posterior predictive distribution for a new observation $y_{n+1}$ in the Beta-Binomial model.**

The posterior predictive is
$$p(y_{n+1} = 1 \\mid y) = \\int_{0}^{1} p \\cdot \\pi(p \\mid y) \\, dp = \\mathbb{E}[p \\mid y] = \\frac{a+s}{a+b+n}.$$
For a general Beta posterior, the predictive probability of success is exactly the posterior mean of $p$.

### Exercise 2

**In the Normal-Normal model with $\\sigma^{2} = 4$, $\\tau_{0}^{2} = 9$, $\\mu_{0} = 0$, and observations $y = (5, 7, 6)$, compute the exact posterior mean and $95\\%$ credible interval for $\\mu$.**

Here $n = 3$ and $\\bar{y} = 6$. The posterior precision is $1/v = 1/9 + 3/4 = 31/36$, so $v = 36/31 \\approx 1.161$. The posterior mean is $m = v(0/9 + 18/4) = 162/31 \\approx 5.226$. The posterior is $\\mathcal{N}(5.226, 1.161)$, so the $95\\%$ credible interval is $5.226 \\pm 1.96\\sqrt{1.161} \\approx [3.11, 7.34]$.

### Exercise 3

**Explain why a sampler that passes a Beta-Binomial validation test might still fail on a hierarchical model with the same Bernoulli likelihood at the bottom level.**

For a proper $\\operatorname{Beta}(A,B)$ posterior with $A,B>0$, the density after the logit transformation is strictly log-concave and unimodal, but need not be nearly symmetric. A hierarchy introduces additional parameters and can add correlations, funnels or multiple modes, so a sampler that explores the univariate target may fail there. Passing a finite benchmark supplies evidence about that particular target and transition implementation; it does not prove correctness or adequate exploration for every posterior geometry.

---

## Hierarchical Models and Partial Pooling

### Exercise 1

**In the Gaussian hierarchy with known hyperparameters, suppose $x_{j} = 20$, $s_{j} = 10$, $\\mu = 10$, and $\\tau = 5$. Compute the posterior mean and variance of $\\theta_{j}$.**

$v_{j} = (1/100 + 1/25)^{-1} = (0.01 + 0.04)^{-1} = 20$. $w_{j} = 25/(25+100) = 0.2$. $m_{j} = 0.2(20) + 0.8(10) = 12$. The posterior is $\\mathcal{N}(12, 20)$.

### Exercise 2

**Explain why a noncentered parameterization $u_{j} = \\tau z_{j}$ with $z_{j} \\sim \\mathcal{N}(0,1)$ can improve sampling for hierarchical models when group data are weak.**

In the centered parameterization, $u_j\\mid\\tau$ has scale $\\tau$, creating a narrow prior neck near $\\tau=0$ and a wider region at larger $\\tau$. With a fixed leapfrog count, a step size small enough for stability in the neck can give a short trajectory in the wide region. A large step is not required there: smaller steps with a longer trajectory can travel farther at greater cost. Writing $u_j=\\tau z_j$ makes $z_j$ independent of $\\tau$ in the prior and often helps with weak group data, but the likelihood can still couple them and strongly informed groups can favor the centered form.

### Exercise 3

**A researcher fits a hierarchical model to $J = 3$ groups and reports that the posterior for $\\tau$ is nearly identical under $\\operatorname{Half\\text{-}Cauchy}(0, 5)$ and $\\operatorname{Half\\text{-}Normal}(0, 10)$ priors. Is this evidence that the prior on $\\tau$ is unimportant?**

The agreement is limited evidence of robustness to those two tested priors, subject to adequate computation. It does not establish that the prior is generally unimportant with only three groups: other scientifically defensible priors can change the posterior for $\\tau$ and the resulting pooling. Choose alternatives on the model's declared group-effect scale, examine their prior predictive implications, and report which conclusions change. A tighter prior is not justified merely because it produces a different answer.

### Exercise 4 (Discussion)

**A researcher fits a hierarchical model with $J = 50$ groups and reports that the posterior for $\\tau$ is concentrated near $0.5$ with a tight credible interval. They conclude that partial pooling is unnecessary and fit a separate model to each group. Is this justified?**

No. A posterior for $\\tau$ concentrated away from zero establishes between-group variation; it does not make the hierarchical sharing disappear. Fitting separate models discards that model-based sharing and can increase uncertainty, especially for noisy groups. The researcher should report the hierarchical posterior and its sensitivity to the exchangeability and population-distribution assumptions. If a reported estimate is the posterior mean, it minimizes posterior expected squared-error loss under the stated hierarchical model; “optimal” without that model and loss is too broad.

---

## Monte Carlo Estimates and Their Error

### Exercise 1

**A chain of length $50{,}000$ has bulk ESS $2{,}400$ and tail ESS $800$ for a parameter with posterior standard deviation $1.5$. Compute the MCSE for the posterior mean. Is the supplied information enough to compute the MCSE of the $95$th percentile?**

If $2400$ were a reliable ESS specific to the raw parameter mean under an appropriate chain CLT, the proxy would be $\\mathrm{MCSE}\\approx1.5/\\sqrt{2400}\\approx0.031$. Rank-normalized bulk ESS alone does not supply that mean-specific ESS, so the given summaries do not determine the mean's MCSE. The quantile
MCSE cannot be computed from posterior SD and tail ESS alone; it also depends
on the posterior density at that quantile or a direct quantile-MCSE estimate.
Tail ESS is a diagnostic, not a substitute in the mean-MCSE formula.

### Exercise 2

**Explain why doubling the chain length from $10{,}000$ to $20{,}000$ iterations might not halve the MCSE if the sampler has poor mixing.**

If the sampler is stuck in one mode or has very high autocorrelation, ESS may grow sublinearly with chain length. Doubling iterations might increase ESS by only $10\\%$ or $20\\%$, not $100\\%$. The MCSE decreases as $1/\\sqrt{S_{\\mathrm{eff}}}$, so sublinear ESS growth produces sublinear precision improvement.

### Exercise 3

**A researcher reports a posterior mean of $3.42$ with MCSE $0.003$ and posterior SD $0.45$. Report posterior and Monte Carlo uncertainty separately.**

Under a normal posterior approximation, the central interval is
$3.42\\pm1.96(0.45)=[2.54,4.30]$. Separately, a Monte Carlo confidence interval
for the computed posterior mean is
$3.42\\pm1.96(0.003)=[3.414,3.426]$. These describe different targets and
their variances should not be added.

---

## Metropolis--Hastings from an Invariant Kernel

### Exercise 1

**Show that if $q(\\theta' \\mid \\theta)=g(\\theta'-\\theta)$ and $g$ is symmetric
about zero, then $q(\\theta'\\mid\\theta)=q(\\theta\\mid\\theta')$. Give a
counterexample without symmetry.**

$q(\\theta\\mid\\theta')=g(-(\\theta'-\\theta))=g(\\theta'-\\theta)$ by symmetry.
For a counterexample, $g(z)=e^{-z}\\mathbf1_{\\{z\\ge0\\}}$ proposes only upward
increments, so the reverse proposal density is zero for every strict upward
move.

### Exercise 2

**Implement random-walk Metropolis for $\\operatorname{Beta}(3, 7)$ on the raw $p$ scale using a truncated normal proposal on $[0,1]$. Derive the proposal correction and make a declared empirical comparison with a logit-scale random walk.**

A truncated normal proposal on $[0,1]$ is not symmetric in the required sense: its state-dependent normalizing constant makes $q(p'\\mid p)\\ne q(p\\mid p')$, so the acceptance probability must include $q(p\\mid p')/q(p'\\mid p)$. The logit proposal instead uses the transformed target with its Jacobian. Neither parameterization is universally more efficient. Declare both proposal scales, starts, warmup, retained draws, and a common estimand/cost unit, then compare acceptance and ESS per target-density evaluation.

### Exercise 3

**A chain has acceptance rate $0.05$ but $\\hat{R}$ near $1.00$ across four chains. Should the output be trusted?**

No. The low acceptance rate suggests the proposal scale is too large, causing the chain to remain at the same state for long periods. If all chains start near the same mode, they can agree (low $\\hat{R}$) while failing to explore the full posterior. Increase the number of iterations, reduce the proposal scale, and inspect trace plots for stuck periods before trusting the output.

---

## Gradient-Based Sampling

### Exercise 1

**Explain why the leapfrog integrator preserves volume exactly, and why this matters for the Metropolis acceptance probability.**

Each leapfrog kick or drift substep is a shear with Jacobian determinant one, so their composition preserves volume. Volume preservation removes a Jacobian factor but does not alone make a deterministic proposal reversible. For a fixed-length leapfrog trajectory followed by momentum flip in the standard HMC construction, the proposal is a volume-preserving involution. Its Metropolis ratio is $\\exp(-H_{\\rm new}+H_{\\rm old})$, with no Jacobian correction; the acceptance probability is the minimum of one and this ratio.

### Exercise 2

**A hierarchical model shows $15$ divergent transitions in $4{,}000$ post-warmup iterations, concentrated at small values of $\\tau$. The researcher increases the target acceptance rate from $0.8$ to $0.95$ and the divergences disappear. Is the problem solved?**

The disappearance of flags alone does not establish that the problem is solved. A smaller step size may genuinely resolve integration error, but it proves neither adequate exploration nor persistent pathological geometry. Check the formerly flagged region, estimand-specific ESS and MCSE, and stability across runs. If problems persist, compare scientifically justified centered and noncentered parameterizations and assess their exploration and diagnostics.

### Exercise 3

**For a standard normal target $\\pi(\\theta) \\propto \\exp(-\\theta^{2}/2)$, write the Hamiltonian and derive one leapfrog step with mass $M = 1$ and step size $\\epsilon$.**

The potential energy is $U(\\theta) = \\theta^{2}/2$ and the kinetic energy is $K(r) = r^{2}/2$. The gradient is $\\nabla U = \\theta$. One leapfrog step is:

$$r' = r - \\frac{\\epsilon}{2} \\theta,$$

$$\\theta' = \\theta + \\epsilon r',$$

$$r'' = r' - \\frac{\\epsilon}{2} \\theta'.$$

The total energy change is $H(\\theta', r'') - H(\\theta, r) = \\frac{1}{2}(\\theta'^{2} + r''^{2}) - \\frac{1}{2}(\\theta^{2} + r^{2})$, which is $O(\\epsilon^{3})$ for the leapfrog integrator.

---

## Diagnostics Are Necessary, Never Sufficient

### Exercise 1

**Four chains have $\\hat{R} = 1.00$, bulk ESS $= 3000$, but $12$ divergences concentrated at small values of a scale parameter. What should be concluded?**

Convergence is not established. The divergences warn of possible numerical integration or exploration problems in the small-scale region. Investigate geometry, priors and scales; consider a noncentered parameterization when appropriate, then rerun and assess the affected estimands, exploration and Monte Carlo precision before using the summaries. A near-one $\\hat{R}$ and high bulk ESS do not resolve these warnings.

### Exercise 2

**A researcher reports $\\hat{R} = 1.00$ for all parameters based on two chains started from the prior mean. Why might this be misleading?**

Two chains started from the same region may fail to reveal multimodality or initialization bias. If the posterior has multiple modes and both chains fall into the same one, $\\hat{R}$ can be near one while a large part of the posterior mass remains unexplored. Use at least four chains from overdispersed starts, such as the prior or widely separated points.

### Exercise 3

**Explain why no finite diagnostic can prove that an MCMC chain has converged to the target distribution.**

Convergence is a statement about infinite-time behavior. Any finite sample could, in principle, come from a chain that is still transient or from a chain that has converged but by chance has not yet visited a remote mode. Diagnostics can detect failures that are visible in the observed sample---poor mixing, divergences, disagreement between chains---but they cannot rule out failures that have not yet manifested.

### Exercise 4 (Discussion)

**A researcher runs HMC for $1{,}000$ iterations with $500$ warmup iterations and reports $\\hat{R} = 1.00$ and no divergences. However, the effective sample size for the worst-mixing parameter is $120$. Is this sufficient?**

With only $500$ post-warmup iterations, an ESS of $120$ may be inadequate for a precise tail estimate. There is no context-free ESS cutoff: the required precision depends on the estimand and tolerable Monte Carlo error. The researcher should estimate MCSE for the reported central and tail quantities, then run longer chains or improve the parameterization if that error is too large. Reporting only $\\hat{R}$ and the absence of divergences does not quantify estimator precision.

---

## Predictive Criticism

### Exercise 1

**A linear regression model with normal errors shows a posterior predictive p-value of $0.02$ for the maximum absolute residual. What does this imply, and what is the appropriate response?**

The observed maximum residual lies unusually far in the upper tail of this fitted posterior predictive distribution. That suggests possible tail underestimation or omitted structure, but one finite tail event does not establish that the model is false, and a posterior predictive tail area is a diagnostic rather than a calibrated hypothesis-test p-value. Inspect the replications and high-residual observations, check data quality, and compare declared alternatives such as heavy-tailed errors or relevant omitted predictors. Do not simply remove observations without investigation.

### Exercise 2

**Explain why a model with a posterior predictive p-value of $0.5$ for every test statistic is not necessarily a good model.**

A p-value of $0.5$ means the observed statistic is near the median of the predictive distribution. This could happen because the model is well-specified, but it could also happen because the model is so flexible that it overfits, reproducing every feature of the data including noise. Predictive checks must be supplemented with held-out evaluation and sensitivity analysis.

### Exercise 3

**A researcher standardizes all predictors using the full dataset mean and variance, then performs $10$-fold cross-validation on the standardized data. What is wrong with this procedure?**

The standardization used information from the holdout folds, contaminating the validation. The correct procedure is to compute means and variances within each training fold and apply them to the corresponding validation fold. For nested cross-validation, standardization parameters must be re-estimated within each inner loop.

### Exercise 4 (Discussion)

**A researcher fits a normal linear model and observes that the posterior predictive p-value for the maximum observation is $0.99$. They conclude that the model is excellent because it predicts extreme values well. What is wrong with this reasoning?**

Under the chapter's upper-tail convention, a value of $0.99$ means $99\\%$ of replicated maxima are at least as large as the observed maximum. The observed maximum is unusually small relative to the replications, suggesting that the predictive distribution may be too heavy-tailed or too dispersed for this statistic. A value near $0.01$ would point in the opposite direction, toward an unusually large observed maximum. Inspect the replicated distribution before choosing a repair.

---

## Model Comparison and Decision Boundaries

### Exercise 1

**Two models have $\\mathrm{elpd}_{\\mathrm{loo}}$ estimates of $-120$ and $-115$ with marginal standard errors $5$ and $6$. What additional quantity is needed to assess the estimated difference?**

The second estimate is larger by $5$, but the two marginal standard errors do not determine the uncertainty of that paired difference because both models are evaluated on the same observations. Obtain the pointwise log-score differences $d_i$ and, for the usual observation-level approximation, estimate the standard error as $\\sqrt{n\\,s_d^2}$. The comparison must also match the validation unit; dependent observations or grouped prediction require a corresponding grouped calculation.

### Exercise 2

**A drug trial replaces squared-error loss for an effect estimate by tilted absolute loss with underestimation cost $c_{\\mathrm{under}}$ and overestimation cost $c_{\\mathrm{over}}$. Which posterior summary minimizes this loss, and why is proceed/abandon a separate decision?**

For $L(\\theta,\\delta)=c_{\\mathrm{under}}(\\theta-\\delta)_++c_{\\mathrm{over}}(\\delta-\\theta)_+$, posterior risk is minimized by a posterior quantile at level $c_{\\mathrm{under}}/(c_{\\mathrm{under}}+c_{\\mathrm{over}})$, subject to the usual interval of minimizers at a flat or atomic quantile. A larger underestimation cost therefore selects a higher quantile. Proceed/abandon has a different action space and requires its own declared loss table; minimize those two posterior expected losses directly.

### Exercise 3

**A researcher computes Bayes factors for $20$ candidate models and reports the one with the highest value. What is the risk?**

Declare the common reference model, observed-data measure, normalized within-model priors and candidate/search protocol, and check that the Bayes factors are defined. Posterior model probabilities also depend on declared prior model probabilities. Selecting the largest factor can exaggerate apparent support, but twenty candidates alone do not force inflation: if all candidate predictive laws equal the reference law, every factor is one. Represent model uncertainty under the declared model space, and evaluate data-driven predictive selection with an appropriate nested or held-out protocol. Model averaging or regularization does not automatically repair an unspecified reference, prior or search procedure.

### Exercise 4 (Discussion)

**A pharmaceutical company must decide whether to proceed to Phase III trials. The posterior for the drug effect is $\\mathcal{N}(0.3, 0.1^{2})$. The cost of Phase III is $\\$100$ million. If the drug is effective (effect $> 0.2$), the expected revenue is $\\$500$ million. If ineffective, revenue is $\\$0$. What is the optimal decision under squared-error loss? Under the true utility?**

Under squared-error loss, the optimal estimate is the posterior mean $0.3$, which exceeds the threshold $0.2$. However, the true decision should maximize expected utility:

$$\\mathbb{E}[U(\\text{proceed})] = 500\\Pr(\\theta > 0.2)-100.$$

With $\\theta \\sim \\mathcal{N}(0.3, 0.1^{2})$, $\\Pr(\\theta > 0.2)=\\Phi(1)\\approx 0.8413$, so expected net value is about $500(0.8413)-100=320.7$ million. Proceeding is optimal for this stated utility. If the posterior were $\\mathcal{N}(0.25,0.15^2)$, the probability would be $\\Phi(1/3)\\approx0.6306$ and expected net value about $215.3$ million. The break-even probability is $100/500=0.2$. This is a binary action under a threshold utility; squared-error estimation of the effect is a different decision problem.
## Solutions: implementation bridge for the original Metropolis task

### Truncated-normal comparison for the original Metropolis task

The original task in "Metropolis--Hastings from an Invariant Kernel" requires an actual raw-scale $\\operatorname{Beta}(3,7)$ implementation and a declared empirical comparison with the logit random walk. Its matched reference belongs in that chapter; this compact bridge supplies the decisive normalization and comparison contract without duplicating the implementation or claiming a run.

For proposal scale $\\sigma>0$ and current $0<p<1$, define $Z(p)=\\Phi((1-p)/\\sigma)-\\Phi(-p/\\sigma)$. On $0<p'<1$ the truncated-normal proposal is $q(p'\\mid p)=\\phi((p'-p)/\\sigma)/[\\sigma Z(p)]$. Symmetry of the untruncated normal factor therefore gives $q(p\\mid p')/q(p'\\mid p)=Z(p)/Z(p')$. That ratio belongs in the raw-scale Metropolis acceptance rule. On $\\eta=\\operatorname{logit}(p)$, the target includes the Jacobian $p(1-p)$, giving density proportional to $p^3(1-p)^7$ for this benchmark.

The analytic mean is $3/10$ and variance $21/1100$. Retain one state for every transition, including rejection. Declare both proposal scales, starts, random-number method and seed, warmup, retained draws, common estimands and target-evaluation cost before comparing acceptance, estimand-specific Monte Carlo error and efficiency. Use the actual supplied chapter profile and its exact execution status; unexecuted expected values or historical receipts are not an observed empirical comparison.
`;export{e as default};