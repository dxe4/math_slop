
# Conjugate Posterior Benchmarks

Preparation is the primary [Bayesian Inference course](#/books/bayesian/course-syllabus), probability with conditional expectation, and the preceding modeling chapter when one is listed. Computational algorithms continue in [MCMC Volume 1](#/books/mcmc/01-probability-computation).


Conjugate models are not merely convenient curiosities. They provide exact posterior distributions against which approximate algorithms---Markov chain Monte Carlo, variational inference, and others---can be validated. Before trusting a sampler on a model with no closed form, test it on a conjugate case where every posterior quantity is known analytically. This chapter develops the standard conjugate families and shows how to use them as computational benchmarks.

## Definition and motivation

A prior distribution $\pi(\theta)$ is conjugate for a likelihood $p(y \mid \theta)$ if the posterior $\pi(\theta \mid y)$ belongs to the same parametric family as the prior. Conjugacy is a property of a likelihood-prior pair, not of either distribution in isolation.

The practical value of conjugacy includes enabling exact verification. When an MCMC sampler is applied to a conjugate model, its output can be compared against analytic posterior means, variances, quantiles, and predictive distributions. Persistent discrepancies that are large relative to a reliable Monte Carlo standard error warrant investigation of the target density, initialization, mixing, and implementation. A finite-run discrepancy alone does not prove a software bug.

Conjugate models also build intuition. The closed-form posterior shows exactly how prior information and data combine. This intuition guides the interpretation of more complex models where no closed form exists.

## Beta-Binomial conjugacy

Suppose $y_{i} \mid p \sim \operatorname{Bernoulli}(p)$ independently for $i = 1, \dots, n$, and $p \sim \operatorname{Beta}(a, b)$. Let $s = \sum_{i=1}^{n} y_{i}$. The posterior density satisfies

$$\pi(p \mid y) \propto p^{s}(1-p)^{n-s} \cdot p^{a-1}(1-p)^{b-1} = p^{a+s-1}(1-p)^{b+n-s-1},$$

so $p \mid y \sim \operatorname{Beta}(a+s, b+n-s)$.

The posterior mean is

$$\mathbb{E}[p \mid y] = \frac{a+s}{a+b+n}.$$

This can be rewritten as a weighted compromise:

$$\mathbb{E}[p \mid y] = w \cdot \frac{s}{n} + (1-w) \cdot \frac{a}{a+b}, \qquad w = \frac{n}{a+b+n}.$$

The prior contributes effective weight $a+b$ and the data contribute weight $n$. For large $n$, the sample proportion dominates; for small $n$, the prior mean exerts stronger pull.

**Important caution.** The interpretation of $a+b$ as a "prior sample size" is specific to the Beta-Binomial model. Do not transfer this interpretation automatically to arbitrary priors. A half-Cauchy prior on a standard deviation, for example, has no natural equivalent sample size.

## Normal-Normal conjugacy

Suppose $y_{i} \mid \mu \sim \mathcal{N}(\mu, \sigma^{2})$ with known variance $\sigma^{2}$, and $\mu \sim \mathcal{N}(\mu_{0}, \tau_{0}^{2})$. The posterior is

$$\mu \mid y \sim \mathcal{N}(m, v),$$

where

$$v = \left(\frac{1}{\tau_{0}^{2}} + \frac{n}{\sigma^{2}}\right)^{-1}, \qquad m = v \left(\frac{\mu_{0}}{\tau_{0}^{2}} + \frac{n\bar{y}}{\sigma^{2}}\right).$$

The posterior precision $1/v$ is the sum of the prior precision and the data precision. The posterior mean is a precision-weighted average of the prior mean and the sample mean.

**Numerical example.** With $\sigma^{2} = 4$, $\tau_{0}^{2} = 9$, $\mu_{0} = 0$, and observations $y = (5, 7, 6)$, we have $n = 3$ and $\bar{y} = 6$. The posterior precision is $1/v = 1/9 + 3/4 = 31/36$, so $v = 36/31 \approx 1.161$. The posterior mean is $m = v(0/9 + 18/4) = 162/31 \approx 5.226$. The 95% credible interval is $5.226 \pm 1.96\sqrt{1.161} \approx [3.11, 7.34]$.

## Gamma-Poisson conjugacy

As derived in the previous chapter, if $y_{i} \mid \lambda \sim \operatorname{Poisson}(\lambda)$ and $\lambda \sim \operatorname{Gamma}(a, b)$ with rate $b$, then

$$\lambda \mid y \sim \operatorname{Gamma}\left(a + \sum_{i=1}^{n} y_{i}, \; b + n\right).$$

The posterior mean $(a + \sum y_{i})/(b + n)$ is again a weighted compromise between prior mean $a/b$ and sample mean $\bar{y}$.

## Using conjugacy for sampler validation

Consider validating a random-walk Metropolis sampler on the Beta-Binomial posterior. The exact posterior mean, variance, and 95% credible interval are known. After running the sampler, we compute:

1. The empirical mean of the Monte Carlo sample.
2. The Monte Carlo standard error (MCSE) using effective sample size.
3. The standardized discrepancy: $\lvert \text{empirical mean} - \text{exact mean} \rvert / \text{MCSE}$.

Under a suitable Markov-chain central limit theorem, an accurate reference and a reliable MCSE, a standardized discrepancy of several units is a useful diagnostic. Persistent large discrepancies warrant investigating target evaluation, initialization, exploration, acceptance logic and the error estimate; a finite discrepancy, including one above 10 MCSE, does not by itself prove a software bug.

**Worked numerical example.** With prior $\operatorname{Beta}(2, 5)$ and data $s = 7$, $n = 20$, the exact posterior is $\operatorname{Beta}(9, 18)$ with mean $1/3$ and variance $(9 \cdot 18)/(27^{2} \cdot 28) = 1/126 \approx 0.00794$. These are exact targets for a simulation check. For a random-walk Metropolis sampler on the logit scale, record the proposal scale, random seed, warmup, retained draws, acceptance rate, and estimated MCSE; none of these settings guarantees a particular realized error. The transformed log density must include the logit transformation's Jacobian.

## Posterior predictive distributions

Conjugate models also yield exact posterior predictive distributions. For the Beta-Binomial model, the probability that a new observation is a success is

$$p(y_{n+1} = 1 \mid y) = \int_{0}^{1} p \cdot \pi(p \mid y) \, dp = \mathbb{E}[p \mid y] = \frac{a+s}{a+b+n}.$$

For the Normal-Normal model, the posterior predictive distribution for a new observation is normal with mean $m$ and variance $v + \sigma^{2}$.


## Dirichlet-Multinomial conjugacy

The Beta-Binomial model extends naturally to categorical data. Suppose $y_{i} \mid \mathbf{p} \sim \operatorname{Categorical}(\mathbf{p})$ for $i = 1, \dots, n$, where $\mathbf{p} = (p_{1}, \dots, p_{K})$ lies on the $K$-simplex. With prior $\mathbf{p} \sim \operatorname{Dirichlet}(\alpha_{1}, \dots, \alpha_{K})$, the posterior is

$$\mathbf{p} \mid y \sim \operatorname{Dirichlet}\left(\alpha_{1} + c_{1}, \dots, \alpha_{K} + c_{K}\right),$$

where $c_{k} = \sum_{i=1}^{n} \mathbf{1}(y_{i} = k)$. The posterior mean of $p_{k}$ is

$$\mathbb{E}[p_{k} \mid y] = \frac{\alpha_{k} + c_{k}}{\alpha_{0} + n},$$

where $\alpha_{0} = \sum_{k=1}^{K} \alpha_{k}$. This generalizes the Beta-Binomial weighted compromise to multiple categories.

## Normal-Inverse-Gamma conjugacy

For normal data with unknown mean and variance, the conjugate prior is the normal-inverse-gamma distribution. If $y_{i} \mid \mu, \sigma^{2} \sim \mathcal{N}(\mu, \sigma^{2})$ and $(\mu, \sigma^{2}) \sim \operatorname{NIG}(\mu_{0}, \lambda, \alpha, \beta)$, then the posterior is also NIG with updated parameters. The posterior for $\sigma^{2}$ is inverse-gamma, and the conditional posterior for $\mu$ given $\sigma^{2}$ is normal.

This conjugate pair is useful for validating Gibbs samplers, where we alternate sampling from the conditional posteriors of $\mu$ and $\sigma^{2}$.

## Validation protocols

A systematic validation protocol for MCMC software includes:

1. **Unit tests** for log-density evaluations against known formulas.
2. **Conjugate benchmarks** where exact posteriors are available.
3. **Moment matching** against analytic means and variances.
4. **Predictive checks** against known posterior predictive distributions.
5. **Sensitivity tests** under prior variation.

Each test should report discrepancies in units of Monte Carlo standard error. A
single discrepancy of $2$ MCSE is unsurprising. A persistent discrepancy near
$10$ MCSE across independent runs is strong evidence for investigation, but it
does not by itself identify a software bug: first verify the analytic reference,
target parameterization, stationarity and exploration, and the MCSE estimator.


## Posterior predictive distributions in detail

The posterior predictive distribution for a new observation $\tilde{y}$ is

$$p(\tilde{y} \mid y) = \int p(\tilde{y} \mid \theta) \, \pi(\theta \mid y) \, d\theta.$$

For conjugate models, this integral is available in closed form. For the Poisson-Gamma model, the posterior predictive is negative binomial:

$$\tilde{y} \mid y \sim \operatorname{NegBin}\left(a + \sum y_{i}, \frac{b+n}{b+n+1}\right),$$

where the positive real shape is $r=a+\sum y_i>0$ and the probability parameter is $p=(b+n)/(b+n+1)$. On counts $k\ge0$, the PMF is $\Gamma(r+k)p^r(1-p)^k/(\Gamma(r)k!)$; the literal waiting-time interpretation as failures before $r$ successes applies only when $r$ is an integer. The predictive variance exceeds the predictive mean, reflecting posterior uncertainty in $\lambda$.

## Conjugate mixtures

Marginalizing unknown mixture labels generally destroys a single-product conjugate posterior, although finite mixtures of conjugate components can retain an exact finite expansion. For example, a mixture of two Poisson distributions with rates $\lambda_{1}$ and $\lambda_{2}$ and mixing proportion $\pi$ has likelihood

$$p(y_{i} \mid \lambda_{1}, \lambda_{2}, \pi) = \pi \frac{\lambda_{1}^{y_{i}} e^{-\lambda_{1}}}{y_{i}!} + (1-\pi) \frac{\lambda_{2}^{y_{i}} e^{-\lambda_{2}}}{y_{i}!}.$$

With proper gamma priors on $\lambda_{1},\lambda_{2}$ and a proper beta prior on $\pi$, summing over the $2^n$ label allocations gives an exact finite mixture posterior, although its size is usually prohibitive for large $n$. However, the complete-data posterior (conditioning on component labels) is conjugate. This observation underlies the expectation-maximization (EM) algorithm and Gibbs sampling for mixture models.

## Computational verification with conjugate benchmarks

A rigorous verification protocol for new MCMC software should include:

1. **Analytic moment matching:** Compare sample mean, variance, and quantiles to exact values.
2. **Empirical-CDF discrepancy:** Compare the empirical CDF to the exact CDF descriptively. Correlated MCMC draws do not justify ordinary iid Kolmogorov–Smirnov critical values; an inferential test requires a separately justified dependence calibration.
3. **Predictive calibration:** Generate data from the prior predictive, fit the model, and check that posterior intervals have correct coverage.
4. **Stress tests:** Apply the sampler to deliberately difficult conjugate cases (e.g., extreme parameter values, near-improper priors).

Each test should be automated and run as part of the software's continuous integration pipeline.


## A catalog of conjugate families

The following table summarizes common conjugate pairs:

| Likelihood | Prior | Posterior |
|------------|-------|-----------|
| Bernoulli | Beta | Beta |
| Binomial | Beta | Beta |
| Poisson | Gamma | Gamma |
| Normal (known variance) | Normal | Normal |
| Normal (known mean) | Inverse-Gamma | Inverse-Gamma |
| Normal (both unknown) | Normal-Inverse-Gamma | Normal-Inverse-Gamma |
| Multinomial | Dirichlet | Dirichlet |
| Exponential | Gamma | Gamma |
| Geometric | Beta | Beta |

Each pair has the property that the posterior hyperparameters are simple functions of the prior hyperparameters and sufficient statistics. This makes conjugate models computationally trivial and analytically transparent.

## Limitations of conjugacy

Conjugate priors are convenient but restrictive. They may not capture genuine prior beliefs, and they often have limited flexibility. For example, a single Beta density can have an interior mode, a boundary mode, a U shape, or be uniform depending on its two shape parameters, but it cannot encode two separated finite peaks. A bimodal prior belief---for example, that a coin is either fair or heavily biased---therefore requires a richer family such as a mixture.

Conjugacy depends on the complete likelihood-prior pair. Standard logistic-regression and neural-network models generally lack a simple conjugate posterior. A Gaussian process with fixed covariance and Gaussian observation noise instead has an exact Gaussian posterior, as derived below; non-Gaussian observations or unknown covariance hyperparameters require a separate analysis and may need numerical inference.


## Computational verification with conjugate benchmarks

When implementing a new sampler, the first test should always be a conjugate benchmark. The protocol is:

1. Choose a likelihood-prior pair with known posterior.
2. Implement the log-posterior evaluation.
3. Run the sampler for many iterations.
4. Compare sample moments to exact moments.
5. Check that discrepancies are within Monte Carlo error.

For the Beta-Binomial model with $\operatorname{Beta}(2, 5)$ prior and $s = 7$, $n = 20$, the exact posterior mean is $1/3 \approx 0.3333$. For independent posterior draws, the standard error of their mean would be $\sqrt{(1/126)/N}$. For MCMC output, autocorrelation changes that error; estimate an effective sample size for the mean and use an appropriate MCSE estimator. Under a suitable Markov chain central limit theorem, a discrepancy of several MCSE units is a useful diagnostic, not a deterministic failure threshold. Investigate persistent discrepancies across independently initialized runs and check mixing before concluding that the implementation is wrong. The [Stan reference manual on posterior analysis](https://mc-stan.org/docs/reference-manual/analysis.html) explains the distinction between posterior uncertainty and Monte Carlo error.

## Normalizing constants and their computation

The marginal likelihood $p(y \mid M) = \int p(y \mid \theta) \pi(\theta) d\theta$ is the normalizing constant of the posterior under the declared observation measure. For conjugate models, it is available in closed form. For the recorded Binomial count $S=s$ from $n$ trials in the Beta-Binomial model,

$$p(S=s \mid M) = \binom{n}{s} \frac{B(a+s, b+n-s)}{B(a, b)},$$

where $B(\cdot, \cdot)$ is the beta function. This formula is useful for Bayes factors and model averaging.

For non-conjugate models, the marginal likelihood is generally unavailable in closed form and is computed with numerical estimators. Common methods include:
- **Harmonic mean estimator:** Unstable and often biased.
- **Bridge sampling:** More stable but requires a good proposal.
- **Thermodynamic integration:** Based on an exact path identity under its regularity conditions, but a numerical implementation has temperature-grid quadrature error and Monte Carlo error.
- **Nested sampling:** Efficient for low-dimensional models.

Each method has strengths and weaknesses, and none is universally reliable. For model comparison, cross-validation is often preferred.

## Common errors

- **Treating conjugacy as a modeling goal.** Conjugacy should not drive model choice. If the data are overdispersed, a Beta-Binomial likelihood is more appropriate than forcing a Binomial likelihood with a Beta prior.
- **Using conjugate results from mismatched parameterizations.** A $\operatorname{Gamma}(a, b)$ prior using rate $b$ produces a different posterior hyperparameter than a $\operatorname{Gamma}(a, b)$ prior using scale $b$. Verify the convention in your software.
- **Validating on too easy a target.** Agreement on a univariate Beta posterior does not guarantee that a sampler handles multivariate posteriors, strong correlations, or funnels correctly. Conjugacy is a necessary but not sufficient validation step.
- **Ignoring predictive checks.** Even when the posterior is exact, the model may fail to predict future data well. Posterior predictive checks are essential regardless of whether the posterior is available in closed form.

## Earlier worked questions

The original question identities, statements and complete answers remain in [the original complete exercise companion](retained-source-conjugacy-as-benchmark.md). The further exercises below supply the present chapter’s staged practice.

## Connections

This chapter used conjugate models to establish exact benchmarks for computational validation. Continue to [Conjugate Prediction and Calibration](conjugate-predictive-calibration.md) for joint prediction, conditional laws and exact reference calculations.
## The observation space determines the evidence constant

Fix $n\ge1$, a proper Beta$(a,b)$ prior with $a,b>0$, and an ordered Bernoulli vector $y=(y_1,\ldots,y_n)$ with sum $s$. Relative to counting measure on $\{0,1\}^n$, its likelihood is $p^s(1-p)^{n-s}$. The normalized prior is $p^{a-1}(1-p)^{b-1}/B(a,b)$, so integrating gives
$$
P(Y=y)=\frac{B(a+s,b+n-s)}{B(a,b)}.
$$
This is the probability of one particular sequence.

If the observed object is instead $S=\sum_iY_i$, there are $\binom ns$ sequences with that count, each having the same probability. Relative to counting measure on $\{0,\ldots,n\}$,
$$
P(S=s)=\binom ns\,\frac{B(a+s,b+n-s)}{B(a,b)}.
$$
The extra factor is not an alternative posterior normalizer for the same observed event. It is the multiplicity of a different event. Both likelihoods are proportional as functions of $p$, so their posterior density is the same Beta$(a+s,b+n-s)$, but their evidence values are different probabilities.

The count probabilities sum to one. Indeed, multiplying by $B(a,b)$ and summing over $s$ puts the binomial theorem inside the beta integral:
$$
\sum_{s=0}^n\binom ns B(a+s,b+n-s)
=\int_0^1p^{a-1}(1-p)^{b-1}[p+(1-p)]^n\,dp=B(a,b).
$$
This checks normalization without relying on the name of a distribution.

For the public benchmark, $a=2,b=5,s=7,n=20$. The posterior has $A=9,B=18$ and normalizing constant $1/B(9,18)=26!/(8!\,17!)$. Since $B(2,5)=1/30$, the ordered-sequence evidence is $30\,8!\,17!/26!$; the count evidence multiplies this by $\binom{20}{7}$. These are exact finite expressions. Forming enormous factorials in floating point is unnecessary; log-gamma evaluations provide a stable numerical version.

A Bayes factor must compare models for the same observed object under a common reference measure. A common multiplicity factor cancels if both models use the count event with the same fixed $n$; using a count formula for one model and a sequence formula for the other creates a spurious factor. The same principle applies to aggregated multinomial counts and to invertible changes of continuous data units.

Thus “constant in the parameter” has two consequences that must be kept separate. It cancels from a within-model posterior, while its presence still determines the normalized sampling probability. Keeping it during a derivation makes the exact benchmark stronger: it checks the observation convention as well as the posterior shape.

## Beta moments and future batches provide separate exact targets

Let the posterior be Beta$(A,B)$ with $A,B>0$, and write $C=A+B$. Its moments follow directly from the normalizer:
$$
E[p^r]=\frac{B(A+r,B)}{B(A,B)},\qquad r>-A.
$$
For integer $r\ge0$, repeated use of $\Gamma(x+1)=x\Gamma(x)$ turns the ratio into $\prod_{j=0}^{r-1}(A+j)/(C+j)$. In particular, $E[p]=A/C$, $E[p^2]=A(A+1)/(C(C+1))$, and subtraction gives $\operatorname{Var}(p)=AB/[C^2(C+1)]$.

For $(A,B)=(9,18)$, the mean is $1/3$ and variance $1/126$. A sample can have an accurate mean but an incorrect spread or tails, so these are distinct estimands. The CDF is another target. With positive integer $A,B$,
$$
F(x)=\sum_{j=A}^{A+B-1}\binom{A+B-1}{j}x^j(1-x)^{A+B-1-j}.
$$
Differentiating the finite sum telescopes to the Beta density, and its endpoint values are zero and one. This proves the CDF identity. For the benchmark it is a degree-26 polynomial tail, giving an independent reference alongside a special-function implementation.

The equal-tail quantile $q_u$ is the unique interior root $F(q_u)=u$ for $0<u<1$, since the density is positive inside $(0,1)$. Bisection therefore supplies a controlled numerical reference without inventing an exact decimal expansion. The public code checks its bisection result against the pinned inverse-beta routine and reports both deterministic reference errors. These checks concern reference computation, separately from Monte Carlo errors in empirical quantiles.

A future batch is not a batch of independent Bernoulli variables after $p$ has been integrated out. If $K$ counts successes among $m$ new conditionally independent trials, then
$$
P(K=k\mid y)=\binom mk\frac{B(A+k,B+m-k)}{B(A,B)},
\qquad k=0,\ldots,m.
$$
Its mean is $mA/C$ and variance $mAB(C+m)/[C^2(C+1)]$. The same posterior draw of $p$ is shared by every trial in that future batch.

For $m=5$ under Beta$(9,18)$, the predictive mean is $5/3$ and variance $80/63$. One can check the variance another way: five individual Bernoulli variances contribute $5(2/9)$, and the twenty ordered covariance terms contribute $20(1/126)$. Their sum is $80/63$. Drawing a fresh independent $p$ for every new trial would remove those covariances and simulate a different predictive experiment.

Raw-probability modes need separate domain qualifications. The familiar interior formula $(A-1)/(C-2)$ applies when $A,B>1$; proper shapes below one can produce boundary concentration or a U shape. On the logit scale the Jacobian gives the strictly concave log density derived in Chapter 1. Posterior shape, coordinate choice and the specific summary being tested should all be named in a benchmark.

## Gamma-Poisson benchmarks include exposure and real predictive shape

Let observation $i$ have known exposure $t_i>0$ and conditional law $Y_i\mid\lambda\sim\operatorname{Poisson}(t_i\lambda)$, independently given $\lambda>0$. Use Gamma$(a,b)$ with shape $a>0$ and rate $b>0$. With $S=\sum_i y_i$ and $T=\sum_i t_i$, the full likelihood is
$$
L(\lambda)=
\left[\prod_i\frac{t_i^{y_i}}{y_i!}\right]\lambda^S e^{-T\lambda}.
$$
The bracket is constant in $\lambda$ but belongs to the sampling density and hence to the evidence.

Multiplication by the normalized prior gives posterior Gamma$(A,B)$ with $A=a+S$, $B=b+T$. Its evidence is
$$
P(y)=
\left[\prod_i\frac{t_i^{y_i}}{y_i!}\right]
\frac{b^a\Gamma(A)}{\Gamma(a)B^A}.
$$
When every $t_i=1$, this reduces to the original model. A rate prior's parameter $b$ has exposure units, which explains why exposure adds to it. Changing the unit without changing the prior rate would alter the model.

For a future positive exposure $t$, integration gives
$$
P(\widetilde Y=k\mid y)=
\frac{\Gamma(A+k)}{\Gamma(A)k!}
\left(\frac B{B+t}\right)^A
\left(\frac t{B+t}\right)^k,\qquad k\ge0.
$$
This is a generalized negative-binomial law with positive real shape $A$ and success-probability parameter $B/(B+t)$. Shape need not be an integer. The literal waiting-time story involving $A$ successes applies only when $A$ is an integer; the normalized Gamma-Poisson integral defines the law for every $A>0$.

Its mean is $tA/B$ and variance $tA/B+t^2A/B^2$. The first term is conditional Poisson variation and the second is posterior uncertainty in the rate. This decomposition is preferable to memorizing a software parameter called “dispersion,” whose meaning can differ across interfaces.

For the earlier proper example $a=3,b=1$, observations $(3,5,2,4)$ and unit exposures give $A=17,B=5$. The posterior mean $17/5$ and variance $17/25$ were already checked. A two-unit future exposure has predictive mean $34/5$ and variance $34/5+68/25=238/25$. The larger exposure changes both pieces, with uncertainty in the shared rate entering quadratically.

The log normalizer is $A\log B-\log\Gamma(A)$. Differentiating the gamma integral or using a gamma-ratio moment identity yields the same mean and variance, offering independent symbolic checks. For a numerical implementation, passing a scale argument where a rate was intended changes all these references. The public prior-predictive companion uses the same shape-rate declaration, and records the actual reciprocal scale supplied to its random generator.

Exact predictive probabilities also support model criticism. They tell us what this model would predict; they do not guarantee that its Poisson conditional variance or shared-rate dependence matches an application. A correct conjugate computation can faithfully reveal a poor sampling model.

## Completing the Gaussian square also checks its normalizer

For known observation variance $\sigma^2>0$, prior $\mu\sim N(\mu_0,\tau_0^2)$ with $\tau_0^2>0$, and independent $Y_i\mid\mu\sim N(\mu,\sigma^2)$, put
$$
A=\tau_0^{-2}+n\sigma^{-2},\quad
D=\mu_0\tau_0^{-2}+\sigma^{-2}\sum_i y_i,\quad
C=\mu_0^2\tau_0^{-2}+\sigma^{-2}\sum_i y_i^2.
$$
The product of likelihood and prior has exponential part $\exp[-(A\mu^2-2D\mu+C)/2]$. Completing the square gives
$$
A\mu^2-2D\mu+C=A(\mu-D/A)^2+C-D^2/A.
$$
Since $A>0$, the posterior is $N(m,v)$ with $v=1/A$, $m=D/A$.

Retain the constants to integrate the joint density:
$$
p(y)=(2\pi\sigma^2)^{-n/2}
\sqrt{\frac v{\tau_0^2}}\,
\exp\!\left[-\frac12\left(C-\frac{D^2}{A}\right)\right].
$$
The factor $\sqrt{v/\tau_0^2}$ comes from integrating the completed Gaussian kernel against the normalized prior. Dropping it would leave the posterior shape correct while giving the wrong evidence.

The same marginal law is $N_n(\mu_0\mathbf1,\sigma^2I+\tau_0^2\mathbf1\mathbf1^\mathsf T)$, because a shared random mean contributes covariance $\tau_0^2$ between different observations. This is another way to see why the evidence is not the product of independent marginal one-observation normals. The matrix is positive definite since $\sigma^2>0$.

For the retained example $y=(5,7,6)$, $\mu_0=0$, $\tau_0^2=9$, $\sigma^2=4$, the exact posterior parameters are $m=162/31$, $v=36/31$. The equal-tail interval is exactly $m+\sqrt v\,\Phi^{-1}(0.025)$ to $m+\sqrt v\,\Phi^{-1}(0.975)$. The earlier $1.96$ expression is a rounded numerical approximation to this formula. A benchmark should keep the exact parameters and quantile definition as the reference rather than repeatedly round intermediate calculations.

The future-observation law follows from $\widetilde Y=\mu+\varepsilon$, with independent $\varepsilon\sim N(0,\sigma^2)$ after conditioning on the data. Its mean is $m$ and variance $v+\sigma^2$. A posterior interval for $\mu$ and a predictive interval for $\widetilde Y$ answer different questions and therefore have different widths.

This derivation also makes the prior's role quantitative: precisions add, and the posterior mean is their weighted average. Sending $\tau_0^2$ to infinity can yield a useful limiting posterior in this model, but the normalized prior evidence has no ordinary proper-prior limit that licenses arbitrary Bayes-factor constants. Exact posterior limits and evidence calculations require separate arguments.

## Dirichlet normalizers encode dependence between categories

For $K\ge2$, let $p_k>0$ and $\sum_kp_k=1$. Use the first $K-1$ coordinates as the reference volume, with $p_K=1-\sum_{k<K}p_k$. The Dirichlet density is
$$
\frac{\Gamma(\alpha_0)}{\prod_k\Gamma(\alpha_k)}
\prod_kp_k^{\alpha_k-1},\qquad
\alpha_k>0,\quad\alpha_0=\sum_k\alpha_k.
$$
Declaring these coordinates avoids confusing a density on a $(K-1)$-dimensional simplex with an ordinary density on all of $\mathbb R^K$.

For ordered categorical data with category counts $c_k$, multiplication gives updated parameters $A_k=\alpha_k+c_k$ and $A_0=\alpha_0+n$. The ordered-data evidence is the ratio of the multivariate beta normalizers. For an observed count vector, multiply it by $n!/\prod_kc_k!$. This is the categorical version of the earlier count-versus-sequence distinction.

Moments again come from ratios of normalizers. Increasing $\alpha_k$ by one gives $E[p_k]=\alpha_k/\alpha_0$; increasing it by two gives $E[p_k^2]=\alpha_k(\alpha_k+1)/[\alpha_0(\alpha_0+1)]$. Increasing two distinct coordinates gives $E[p_ip_j]=\alpha_i\alpha_j/[\alpha_0(\alpha_0+1)]$. Subtracting products of means yields
$$
\operatorname{Var}(p_k)=
\frac{\alpha_k(\alpha_0-\alpha_k)}{\alpha_0^2(\alpha_0+1)},\qquad
\operatorname{Cov}(p_i,p_j)=
-\frac{\alpha_i\alpha_j}{\alpha_0^2(\alpha_0+1)}\quad(i\ne j).
$$
The negative covariance reflects the fixed sum, not a failure of the model.

For example, prior parameters $(1,2,3)$ and counts $(2,1,1)$ give posterior $(3,3,4)$ and mean vector $(0.3,0.3,0.4)$. The variance of the first coordinate is $21/1100$ and its covariance with the second is $-9/1100$. Treating the three posterior probabilities as independent Beta variables would miss these covariances and could produce vectors whose components do not sum to one.

A future categorical observation has probabilities $A_k/A_0$. A future count vector of size $m$ has the Dirichlet-multinomial predictive law, obtained by integrating the multinomial likelihood under the same posterior. Shared uncertainty in $\mathbf p$ creates predictive dependence across trials, just as a Beta posterior does for Bernoulli trials.

These formulas give several independent checks for a multivariate sampler: means, marginal variances, cross-covariances, support and the exact simplex sum. Matching only one coordinate mean would be a very weak test. They also prepare the latent-allocation mixture calculation below, where category counts become unobserved and conditional conjugacy remains useful even though the marginal posterior is a mixture.

## The normal-inverse-gamma prior is a joint construction

Write $v=\sigma^2>0$ and define the inverse-gamma density by
$$
f(v\mid\alpha,\beta)=\frac{\beta^\alpha}{\Gamma(\alpha)}
v^{-\alpha-1}e^{-\beta/v},\qquad\alpha,\beta>0.
$$
The parameter $\beta$ is the scale in this inverse-gamma convention; equivalently $1/v$ is Gamma with shape $\alpha$ and rate $\beta$. The conjugate joint prior is
$$
v\sim\operatorname{IG}(\alpha_0,\beta_0),\qquad
\mu\mid v\sim N(\mu_0,v/\kappa_0),\qquad\kappa_0>0.
$$
The dependence of the prior variance of $\mu$ on $v$ is part of the model.

Its joint density relative to $d\mu\,dv$ is
$$
\frac{\beta_0^{\alpha_0}\sqrt{\kappa_0}}
{\Gamma(\alpha_0)\sqrt{2\pi}}\,
v^{-\alpha_0-3/2}
\exp\!\left[-\frac{\beta_0+\kappa_0(\mu-\mu_0)^2/2}{v}\right].
$$
This is proper because the conditional normal integrates to one for each $v$ and the marginal inverse-gamma is proper. A normal prior on $\mu$ independent of $v$, as in a different earlier generative example, is not this joint prior merely because both priors have familiar names.

For independent $Y_i\mid\mu,v\sim N(\mu,v)$, use
$$
\sum_i(y_i-\mu)^2
=\sum_i(y_i-\bar y)^2+n(\mu-\bar y)^2.
$$
Completing the remaining quadratic with the prior gives
$$
\begin{aligned}
\kappa_n&=\kappa_0+n,&
\mu_n&=\frac{\kappa_0\mu_0+n\bar y}{\kappa_n},\\
\alpha_n&=\alpha_0+n/2,&
\beta_n&=\beta_0+\frac12\sum_i(y_i-\bar y)^2
+\frac{\kappa_0n}{2\kappa_n}(\bar y-\mu_0)^2.
\end{aligned}
$$
The posterior is the same joint family with these parameters. Every term added to $\beta_0$ is nonnegative, so the proper positive-scale condition is preserved.

The normalized evidence follows by taking the ratio of prior and posterior joint normalizers:
$$
p(y)=(2\pi)^{-n/2}
\sqrt{\frac{\kappa_0}{\kappa_n}}\,
\frac{\beta_0^{\alpha_0}\Gamma(\alpha_n)}
{\Gamma(\alpha_0)\beta_n^{\alpha_n}}.
$$
It is a density for the ordered real data vector under the stated Lebesgue measure. The square-root factor and gamma ratio are necessary even though neither changes the posterior kernel.

For the complete public companion, choose $y=(5,7,6)$, $\mu_0=0,\kappa_0=1,\alpha_0=3,\beta_0=2$. The data mean is $6$ and the centered sum of squares is $2$. The updated parameters are $\kappa_n=4,\mu_n=9/2,\alpha_n=9/2,\beta_n=33/2$. The between-prior-and-data term is $27/2$, so the posterior variance is affected by disagreement with the prior mean, not only by the small within-sample sum of squares. This is a different joint model from the known-variance normal example, whose original exercise remains unchanged.

## Integrating the NIG law gives moments and Student predictives

Under posterior NIG$(m,\kappa,\alpha,\beta)$, the marginal variance parameter is IG$(\alpha,\beta)$ and $\mu\mid v\sim N(m,v/\kappa)$. Substituting $u=\beta/v$ in its moment integral gives
$$
E[v^r]=\beta^r\frac{\Gamma(\alpha-r)}{\Gamma(\alpha)},
\qquad r<\alpha.
$$
Consequently $E[v]=\beta/(\alpha-1)$ when $\alpha>1$, and
$$
\operatorname{Var}(v)=
\frac{\beta^2}{(\alpha-1)^2(\alpha-2)}
$$
when $\alpha>2$. These existence conditions belong to the benchmark. A finite numerical estimate cannot establish a moment that the target does not possess.

Integrating $v$ from the joint density of $(\mu,v)$ yields
$$
f(\mu\mid y)=
\frac{\Gamma(\alpha+1/2)}{\Gamma(\alpha)}
\sqrt{\frac{\kappa}{2\pi\beta}}
\left[1+\frac{\kappa(\mu-m)^2}{2\beta}\right]^{-\alpha-1/2}.
$$
This is a Student law with degrees of freedom $\nu=2\alpha$, location $m$ and scale squared $\beta/(\alpha\kappa)$. The scale is not its variance. When $\alpha>1$, the marginal variance is $\beta/[\kappa(\alpha-1)]$; the mean requires the weaker condition $\alpha>1/2$.

For a new observation, conditional integration first gives $\widetilde Y\mid v,y\sim N(m,v(1+1/\kappa))$. Integrating $v$ again produces a Student law with the same degrees of freedom and location, but scale squared $\beta(\kappa+1)/(\alpha\kappa)$. When its variance exists,
$$
\operatorname{Var}(\widetilde Y\mid y)
=\frac{\beta}{\alpha-1}+
\frac{\beta}{\kappa(\alpha-1)}.
$$
The terms are expected observation variance and posterior mean uncertainty.

For the chosen companion, the exact references are
$$
E[v]=33/7,\quad \operatorname{Var}(v)=2178/245,\quad
E[\mu]=9/2,\quad\operatorname{Var}(\mu)=33/28.
$$
The marginal mean parameter is Student $t_9$ with scale squared $11/12$. The predictive is Student $t_9$ with scale squared $55/12$ and variance $165/28$. These values arise from the rational hyperparameters, not from a simulated chain.

Quantiles are defined by the corresponding continuous CDFs; the public listing checks numerical CDF/inverse consistency and the analytic inverse-gamma moments. The reference distribution's positive density at a quantile is also needed when a quantile MCSE is obtained from an indicator MCSE by a delta method.

Finally, the moment being monitored determines its integrability requirement. Estimating the mean of $v$ with an ordinary variance-based MCSE needs at least a finite second moment of $v$, with further conditions for a Markov-chain CLT. Monitoring $v^2$ needs a fourth moment. Here $\alpha=9/2>4$, deliberately providing that marginal moment room. This does not prove stationarity or a CLT by itself, but it avoids choosing a diagnostic whose required marginal variance is infinite.

## Full Gibbs conditionals differ from marginal posterior laws

The NIG representation immediately gives
$$
\mu\mid v,y\sim N(\mu_n,v/\kappa_n).
$$
For the other update, keep $\mu$ fixed in the joint posterior rather than integrate it out. Its density in $v$ has power $v^{-\alpha_n-3/2}$, so
$$
v\mid\mu,y\sim
\operatorname{IG}\!\left(\alpha_n+\frac12,\,
\beta_n+\frac{\kappa_n}{2}(\mu-\mu_n)^2\right).
$$
The extra half in the shape comes from the conditional normal density's factor $v^{-1/2}$. Using the marginal IG$(\alpha_n,\beta_n)$ as though it were this full conditional gives a different update.

In prior-and-data notation the same shape is $\alpha_0+(n+1)/2$ and the scale is $\beta_0+\tfrac12\sum_i(y_i-\mu)^2+\tfrac12\kappa_0(\mu-\mu_0)^2$. Completing the square proves equality with the posterior-parameter expression. For the fixed dataset, the full conditional has shape $5$ and scale $33/2+2(\mu-9/2)^2$, while the marginal posterior of $v$ has shape $9/2$ and scale $33/2$.

The invariance argument is short and separate from convergence. Starting with the joint posterior, replacing $\mu$ by a draw from its exact conditional gives
$$
\pi_v(v)\,\pi(\mu'\mid v,y),
$$
which is the same joint law in the updated coordinates. Updating $v$ conditionally next also preserves it. Therefore their fixed-order composition leaves the posterior invariant. The composition need not be reversible, and an arbitrary starting state need not already have that invariant law.

A complete sampler specification must give the update order, starting values, random generator, number of warmup and retained transitions, and the estimands used to assess error. Warmup is a declared computation budget, not a proof that dependence on initialization has disappeared. The public companion fixes four starts and seeds and checks means, second moments and quantiles against the exact references.

This model also permits independent posterior simulation: draw $v$ from its marginal IG law, then draw $\mu$ from the conditional normal. The resulting pair is an exact joint draw under ideal random sampling, without a Gibbs transition. Its existence is a useful conceptual oracle, although finite random-library outputs still have numerical and Monte Carlo error.

Some diagnostics can look unusually favorable here. The conditional expectation $E[\mu\mid v,y]=\mu_n$ is constant, so a simple mean summary does not test every aspect of the dependence between $\mu$ and $v$. Variance, tail and predictive summaries add distinct information. None of those finite successes establishes performance on a hierarchical funnel with an unknown population scale. The next chapters introduce such targets and their separate computational duties, rather than treating this conjugate case as a replacement.


## Worked applications

### Worked example 1: a beta update

Beta(2,5) followed by seven successes in twenty trials gives beta(9,18). Its mean is one-third and variance $1/126$. These exact moments describe the posterior, not the error of an arbitrary numerical approximation.

### Worked example 2: a normal mean

With prior mean zero and variance four, one observation two with known variance four gives posterior mean one and variance two. Equal precisions make the mean a half-weighted average.

### Worked example 3: exposure in a gamma update

Gamma(2,1) with three events over exposure four gives gamma(5,5), with mean one and variance one-fifth. The count adds to shape; exposure adds to rate.

## Further exercises

### Exercise 101
<a id="conjugate-posterior-benchmarks-ex-101"></a>

Update beta(1,1) with no successes in three trials.

<details>
<summary>Hint 1</summary>

Add failures to the second shape.

</details>
<details>
<summary>Hint 2</summary>

The prior is proper.

</details>
<details>
<summary>Solution</summary>

The posterior is beta(1,4), with mean one-fifth. Observing zero successes does not make the posterior a point mass at zero.

</details>

### Exercise 102
<a id="conjugate-posterior-benchmarks-ex-102"></a>

Find beta(a,b) predictive probability of one success.

<details>
<summary>Hint 1</summary>

Integrate the Bernoulli probability.

</details>
<details>
<summary>Hint 2</summary>

Use the posterior mean.

</details>
<details>
<summary>Solution</summary>

It is $a/(a+b)$. This one-trial predictive uses the full beta law through its first moment; several future trials additionally reflect parameter uncertainty.

</details>

### Exercise 103
<a id="conjugate-posterior-benchmarks-ex-103"></a>

Derive gamma shape-rate posterior for count s and exposure t.

<details>
<summary>Hint 1</summary>

Multiply powers and exponentials.

</details>
<details>
<summary>Hint 2</summary>

Add exposure to rate.

</details>
<details>
<summary>Solution</summary>

Gamma(a,b) times the Poisson kernel gives gamma(a+s,b+t), provided positive shapes/rates and the stated observation model.

</details>

### Exercise 104
<a id="conjugate-posterior-benchmarks-ex-104"></a>

Why does the likelihood factorial matter for evidence?

<details>
<summary>Hint 1</summary>

It is constant only in the parameter.

</details>
<details>
<summary>Hint 2</summary>

Evidence compares data probabilities.

</details>
<details>
<summary>Solution</summary>

It cancels from posterior shape but remains in the marginal probability of that recorded count. Omitting it gives the wrong evidence scale.

</details>

### Exercise 105
<a id="conjugate-posterior-benchmarks-ex-105"></a>

Combine normal prior precision two with data precision three.

<details>
<summary>Hint 1</summary>

Add independent Gaussian precision terms.

</details>
<details>
<summary>Hint 2</summary>

Weight means by their precisions.

</details>
<details>
<summary>Solution</summary>

Posterior precision is five; posterior mean is the precision-weighted sum of prior and data means divided by five. Posterior variance is one-fifth.

</details>

### Exercise 106
<a id="conjugate-posterior-benchmarks-ex-106"></a>

Does matching posterior means establish equality of posterior laws?

<details>
<summary>Hint 1</summary>

Different distributions share moments.

</details>
<details>
<summary>Hint 2</summary>

Compare uncertainty and support.

</details>
<details>
<summary>Solution</summary>

No. Means are only one functional. Variances, quantiles, tails or joint dependence can differ while the means agree.

</details>

### Exercise 107
<a id="conjugate-posterior-benchmarks-ex-107"></a>

Why is a Gibbs full conditional not a marginal posterior?

<details>
<summary>Hint 1</summary>

Different variables are conditioned on.

</details>
<details>
<summary>Hint 2</summary>

Integration and fixing differ.

</details>
<details>
<summary>Solution</summary>

A full conditional fixes other unknowns; a marginal integrates them out. Substituting a convenient value for them does not perform that integration.

</details>

### Exercise 108
<a id="conjugate-posterior-benchmarks-ex-108"></a>

State a useful purpose of an exact conjugate calculation.

<details>
<summary>Hint 1</summary>

Choose a declared target.

</details>
<details>
<summary>Hint 2</summary>

Separate calculation and model adequacy.

</details>
<details>
<summary>Solution</summary>

It provides an analytical reference for the same posterior functional or predictive quantity. Agreement supports that bounded comparison but does not prove general computation or model correctness.

</details>

### Exercise 109
<a id="conjugate-posterior-benchmarks-ex-109"></a>

Why can a conjugate posterior be skewed?

<details>
<summary>Hint 1</summary>

Positive beta shapes need not match.

</details>
<details>
<summary>Hint 2</summary>

Conjugacy is closure, not symmetry.

</details>
<details>
<summary>Solution</summary>

Unequal shapes produce asymmetric beta laws; gamma laws can also be highly skewed. Conjugate updating does not imply a Gaussian posterior.

</details>

### Exercise 110
<a id="conjugate-posterior-benchmarks-ex-110"></a>

When is a Gaussian conditional formula singular?

<details>
<summary>Hint 1</summary>

Inspect the conditioning covariance.

</details>
<details>
<summary>Hint 2</summary>

An inverse needs positive rank.

</details>
<details>
<summary>Solution</summary>

The usual inverse form requires nonsingular conditioning covariance. A singular Gaussian law needs a supported conditional construction or appropriate generalised formulation, not an arbitrary ordinary inverse.

</details>

## Summary

Conjugate Posterior Benchmarks develops the declared probability model, target and mathematical comparisons in the sections above. Keep support, observation mechanisms, conditional information and numerical approximation distinct. The original complete source remains available as a companion, with all original questions and computational listings preserved.
