
# Conjugacy as an Exact Computational Benchmark {#section-1-conjugacy-as-an-exact-computational-benchmark}

Conjugate models are not merely convenient curiosities. They provide exact posterior distributions against which approximate algorithms---Markov chain Monte Carlo, variational inference, and others---can be validated. Before trusting a sampler on a model with no closed form, test it on a conjugate case where every posterior quantity is known analytically. This chapter develops the standard conjugate families and shows how to use them as computational benchmarks.

<a id="section-3-definition-and-motivation"></a>
## Definition and motivation {#section-5-definition-and-motivation}

A prior distribution $\pi(\theta)$ is conjugate for a likelihood $p(y \mid \theta)$ if the posterior $\pi(\theta \mid y)$ belongs to the same parametric family as the prior. Conjugacy is a property of a likelihood-prior pair, not of either distribution in isolation.

The practical value of conjugacy includes enabling exact verification. When an MCMC sampler is applied to a conjugate model, its output can be compared against analytic posterior means, variances, quantiles, and predictive distributions. Persistent discrepancies that are large relative to a reliable Monte Carlo standard error warrant investigation of the target density, initialization, mixing, and implementation. A finite-run discrepancy alone does not prove a software bug.

Conjugate models also build intuition. The closed-form posterior shows exactly how prior information and data combine. This intuition guides the interpretation of more complex models where no closed form exists.

<a id="section-11-beta-binomial-conjugacy"></a>
## Beta-Binomial conjugacy {#section-13-beta-binomial-conjugacy}

Suppose $y_{i} \mid p \sim \operatorname{Bernoulli}(p)$ independently for $i = 1, \dots, n$, and $p \sim \operatorname{Beta}(a, b)$. Let $s = \sum_{i=1}^{n} y_{i}$. The posterior density satisfies

$$\pi(p \mid y) \propto p^{s}(1-p)^{n-s} \cdot p^{a-1}(1-p)^{b-1} = p^{a+s-1}(1-p)^{b+n-s-1},$$

so $p \mid y \sim \operatorname{Beta}(a+s, b+n-s)$.

The posterior mean is

$$\mathbb{E}[p \mid y] = \frac{a+s}{a+b+n}.$$

This can be rewritten as a weighted compromise:

$$\mathbb{E}[p \mid y] = w \cdot \frac{s}{n} + (1-w) \cdot \frac{a}{a+b}, \qquad w = \frac{n}{a+b+n}.$$

The prior contributes effective weight $a+b$ and the data contribute weight $n$. For large $n$, the sample proportion dominates; for small $n$, the prior mean exerts stronger pull.

**Important caution.** The interpretation of $a+b$ as a "prior sample size" is specific to the Beta-Binomial model. Do not transfer this interpretation automatically to arbitrary priors. A half-Cauchy prior on a standard deviation, for example, has no natural equivalent sample size.

<a id="section-31-normal-normal-conjugacy"></a>
## Normal-Normal conjugacy {#section-33-normal-normal-conjugacy}

Suppose $y_{i} \mid \mu \sim \mathcal{N}(\mu, \sigma^{2})$ with known variance $\sigma^{2}$, and $\mu \sim \mathcal{N}(\mu_{0}, \tau_{0}^{2})$. The posterior is

$$\mu \mid y \sim \mathcal{N}(m, v),$$

where

$$v = \left(\frac{1}{\tau_{0}^{2}} + \frac{n}{\sigma^{2}}\right)^{-1}, \qquad m = v \left(\frac{\mu_{0}}{\tau_{0}^{2}} + \frac{n\bar{y}}{\sigma^{2}}\right).$$

The posterior precision $1/v$ is the sum of the prior precision and the data precision. The posterior mean is a precision-weighted average of the prior mean and the sample mean.

**Numerical example.** With $\sigma^{2} = 4$, $\tau_{0}^{2} = 9$, $\mu_{0} = 0$, and observations $y = (5, 7, 6)$, we have $n = 3$ and $\bar{y} = 6$. The posterior precision is $1/v = 1/9 + 3/4 = 31/36$, so $v = 36/31 \approx 1.161$. The posterior mean is $m = v(0/9 + 18/4) = 162/31 \approx 5.226$. The 95% credible interval is $5.226 \pm 1.96\sqrt{1.161} \approx [3.11, 7.34]$.

<a id="section-45-gamma-poisson-conjugacy"></a>
## Gamma-Poisson conjugacy {#section-47-gamma-poisson-conjugacy}

As derived in the previous chapter, if $y_{i} \mid \lambda \sim \operatorname{Poisson}(\lambda)$ and $\lambda \sim \operatorname{Gamma}(a, b)$ with rate $b$, then

$$\lambda \mid y \sim \operatorname{Gamma}\left(a + \sum_{i=1}^{n} y_{i}, \; b + n\right).$$

The posterior mean $(a + \sum y_{i})/(b + n)$ is again a weighted compromise between prior mean $a/b$ and sample mean $\bar{y}$.

<a id="section-53-using-conjugacy-for-sampler-validation"></a>
## Using conjugacy for sampler validation {#section-55-using-conjugacy-for-sampler-validation}

Consider validating a random-walk Metropolis sampler on the Beta-Binomial posterior. The exact posterior mean, variance, and 95% credible interval are known. After running the sampler, we compute:

1. The empirical mean of the Monte Carlo sample.
2. The Monte Carlo standard error (MCSE) using effective sample size.
3. The standardized discrepancy: $\lvert \text{empirical mean} - \text{exact mean} \rvert / \text{MCSE}$.

Under a suitable Markov-chain central limit theorem, an accurate reference and a reliable MCSE, a standardized discrepancy of several units is a useful diagnostic. Persistent large discrepancies warrant investigating target evaluation, initialization, exploration, acceptance logic and the error estimate; a finite discrepancy, including one above 10 MCSE, does not by itself prove a software bug.

**Worked numerical example.** With prior $\operatorname{Beta}(2, 5)$ and data $s = 7$, $n = 20$, the exact posterior is $\operatorname{Beta}(9, 18)$ with mean $1/3$ and variance $(9 \cdot 18)/(27^{2} \cdot 28) = 1/126 \approx 0.00794$. These are exact targets for a simulation check. For a random-walk Metropolis sampler on the logit scale, record the proposal scale, random seed, warmup, retained draws, acceptance rate, and estimated MCSE; none of these settings guarantees a particular realized error. The transformed log density must include the logit transformation's Jacobian.

<a id="section-65-posterior-predictive-distributions"></a>
## Posterior predictive distributions {#section-67-posterior-predictive-distributions}

Conjugate models also yield exact posterior predictive distributions. For the Beta-Binomial model, the probability that a new observation is a success is

$$p(y_{n+1} = 1 \mid y) = \int_{0}^{1} p \cdot \pi(p \mid y) \, dp = \mathbb{E}[p \mid y] = \frac{a+s}{a+b+n}.$$

For the Normal-Normal model, the posterior predictive distribution for a new observation is normal with mean $m$ and variance $v + \sigma^{2}$.


<a id="section-74-dirichlet-multinomial-conjugacy"></a>
## Dirichlet-Multinomial conjugacy {#section-76-dirichlet-multinomial-conjugacy}

The Beta-Binomial model extends naturally to categorical data. Suppose $y_{i} \mid \mathbf{p} \sim \operatorname{Categorical}(\mathbf{p})$ for $i = 1, \dots, n$, where $\mathbf{p} = (p_{1}, \dots, p_{K})$ lies on the $K$-simplex. With prior $\mathbf{p} \sim \operatorname{Dirichlet}(\alpha_{1}, \dots, \alpha_{K})$, the posterior is

$$\mathbf{p} \mid y \sim \operatorname{Dirichlet}\left(\alpha_{1} + c_{1}, \dots, \alpha_{K} + c_{K}\right),$$

where $c_{k} = \sum_{i=1}^{n} \mathbf{1}(y_{i} = k)$. The posterior mean of $p_{k}$ is

$$\mathbb{E}[p_{k} \mid y] = \frac{\alpha_{k} + c_{k}}{\alpha_{0} + n},$$

where $\alpha_{0} = \sum_{k=1}^{K} \alpha_{k}$. This generalizes the Beta-Binomial weighted compromise to multiple categories.

<a id="section-86-normal-inverse-gamma-conjugacy"></a>
## Normal-Inverse-Gamma conjugacy {#section-88-normal-inverse-gamma-conjugacy}

For normal data with unknown mean and variance, the conjugate prior is the normal-inverse-gamma distribution. If $y_{i} \mid \mu, \sigma^{2} \sim \mathcal{N}(\mu, \sigma^{2})$ and $(\mu, \sigma^{2}) \sim \operatorname{NIG}(\mu_{0}, \lambda, \alpha, \beta)$, then the posterior is also NIG with updated parameters. The posterior for $\sigma^{2}$ is inverse-gamma, and the conditional posterior for $\mu$ given $\sigma^{2}$ is normal.

This conjugate pair is useful for validating Gibbs samplers, where we alternate sampling from the conditional posteriors of $\mu$ and $\sigma^{2}$.

<a id="section-92-validation-protocols"></a>
## Validation protocols {#section-94-validation-protocols}

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


<a id="section-109-posterior-predictive-distributions-in-detail"></a>
## Posterior predictive distributions in detail {#section-111-posterior-predictive-distributions-in-detail}

The posterior predictive distribution for a new observation $\tilde{y}$ is

$$p(\tilde{y} \mid y) = \int p(\tilde{y} \mid \theta) \, \pi(\theta \mid y) \, d\theta.$$

For conjugate models, this integral is available in closed form. For the Poisson-Gamma model, the posterior predictive is negative binomial:

$$\tilde{y} \mid y \sim \operatorname{NegBin}\left(a + \sum y_{i}, \frac{b+n}{b+n+1}\right),$$

where the positive real shape is $r=a+\sum y_i>0$ and the probability parameter is $p=(b+n)/(b+n+1)$. On counts $k\ge0$, the PMF is $\Gamma(r+k)p^r(1-p)^k/(\Gamma(r)k!)$; the literal waiting-time interpretation as failures before $r$ successes applies only when $r$ is an integer. The predictive variance exceeds the predictive mean, reflecting posterior uncertainty in $\lambda$.

<a id="section-121-conjugate-mixtures"></a>
## Conjugate mixtures {#section-123-conjugate-mixtures}

Marginalizing unknown mixture labels generally destroys a single-product conjugate posterior, although finite mixtures of conjugate components can retain an exact finite expansion. For example, a mixture of two Poisson distributions with rates $\lambda_{1}$ and $\lambda_{2}$ and mixing proportion $\pi$ has likelihood

$$p(y_{i} \mid \lambda_{1}, \lambda_{2}, \pi) = \pi \frac{\lambda_{1}^{y_{i}} e^{-\lambda_{1}}}{y_{i}!} + (1-\pi) \frac{\lambda_{2}^{y_{i}} e^{-\lambda_{2}}}{y_{i}!}.$$

With proper gamma priors on $\lambda_{1},\lambda_{2}$ and a proper beta prior on $\pi$, summing over the $2^n$ label allocations gives an exact finite mixture posterior, although its size is usually prohibitive for large $n$. However, the complete-data posterior (conditioning on component labels) is conjugate. This observation underlies the expectation-maximization (EM) algorithm and Gibbs sampling for mixture models.

<a id="section-129-computational-verification-with-conjugate-benchmarks"></a>
## Computational verification with conjugate benchmarks {#section-131-computational-verification-with-conjugate-benchmarks}

A rigorous verification protocol for new MCMC software should include:

1. **Analytic moment matching:** Compare sample mean, variance, and quantiles to exact values.
2. **Empirical-CDF discrepancy:** Compare the empirical CDF to the exact CDF descriptively. Correlated MCMC draws do not justify ordinary iid Kolmogorov–Smirnov critical values; an inferential test requires a separately justified dependence calibration.
3. **Predictive calibration:** Generate data from the prior predictive, fit the model, and check that posterior intervals have correct coverage.
4. **Stress tests:** Apply the sampler to deliberately difficult conjugate cases (e.g., extreme parameter values, near-improper priors).

Each test should be automated and run as part of the software's continuous integration pipeline.


<a id="section-141-a-catalog-of-conjugate-families"></a>
## A catalog of conjugate families {#section-143-a-catalog-of-conjugate-families}

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

<a id="section-159-limitations-of-conjugacy"></a>
## Limitations of conjugacy {#section-161-limitations-of-conjugacy}

Conjugate priors are convenient but restrictive. They may not capture genuine prior beliefs, and they often have limited flexibility. For example, a single Beta density can have an interior mode, a boundary mode, a U shape, or be uniform depending on its two shape parameters, but it cannot encode two separated finite peaks. A bimodal prior belief---for example, that a coin is either fair or heavily biased---therefore requires a richer family such as a mixture.

Conjugacy depends on the complete likelihood-prior pair. Standard logistic-regression and neural-network models generally lack a simple conjugate posterior. A Gaussian process with fixed covariance and Gaussian observation noise instead has an exact Gaussian posterior, as derived below; non-Gaussian observations or unknown covariance hyperparameters require a separate analysis and may need numerical inference.


<a id="section-166-computational-verification-with-conjugate-benchmarks"></a>
## Computational verification with conjugate benchmarks {#section-168-computational-verification-with-conjugate-benchmarks}

When implementing a new sampler, the first test should always be a conjugate benchmark. The protocol is:

1. Choose a likelihood-prior pair with known posterior.
2. Implement the log-posterior evaluation.
3. Run the sampler for many iterations.
4. Compare sample moments to exact moments.
5. Check that discrepancies are within Monte Carlo error.

For the Beta-Binomial model with $\operatorname{Beta}(2, 5)$ prior and $s = 7$, $n = 20$, the exact posterior mean is $1/3 \approx 0.3333$. For independent posterior draws, the standard error of their mean would be $\sqrt{(1/126)/N}$. For MCMC output, autocorrelation changes that error; estimate an effective sample size for the mean and use an appropriate MCSE estimator. Under a suitable Markov chain central limit theorem, a discrepancy of several MCSE units is a useful diagnostic, not a deterministic failure threshold. Investigate persistent discrepancies across independently initialized runs and check mixing before concluding that the implementation is wrong. The [Stan reference manual on posterior analysis](https://mc-stan.org/docs/reference-manual/analysis.html) explains the distinction between posterior uncertainty and Monte Carlo error.

<a id="section-178-normalizing-constants-and-their-computation"></a>
## Normalizing constants and their computation {#section-180-normalizing-constants-and-their-computation}

The marginal likelihood $p(y \mid M) = \int p(y \mid \theta) \pi(\theta) d\theta$ is the normalizing constant of the posterior under the declared observation measure. For conjugate models, it is available in closed form. For the recorded Binomial count $S=s$ from $n$ trials in the Beta-Binomial model,

$$p(S=s \mid M) = \binom{n}{s} \frac{B(a+s, b+n-s)}{B(a, b)},$$

where $B(\cdot, \cdot)$ is the beta function. This formula is useful for Bayes factors and model averaging.

For non-conjugate models, the marginal likelihood is generally unavailable in closed form and is computed with numerical estimators. Common methods include:
- **Harmonic mean estimator:** Unstable and often biased.
- **Bridge sampling:** More stable but requires a good proposal.
- **Thermodynamic integration:** Based on an exact path identity under its regularity conditions, but a numerical implementation has temperature-grid quadrature error and Monte Carlo error.
- **Nested sampling:** Efficient for low-dimensional models.

Each method has strengths and weaknesses, and none is universally reliable. For model comparison, cross-validation is often preferred.

<a id="section-194-common-errors"></a>
## Common errors {#section-196-common-errors}

- **Treating conjugacy as a modeling goal.** Conjugacy should not drive model choice. If the data are overdispersed, a Beta-Binomial likelihood is more appropriate than forcing a Binomial likelihood with a Beta prior.
- **Using conjugate results from mismatched parameterizations.** A $\operatorname{Gamma}(a, b)$ prior using rate $b$ produces a different posterior hyperparameter than a $\operatorname{Gamma}(a, b)$ prior using scale $b$. Verify the convention in your software.
- **Validating on too easy a target.** Agreement on a univariate Beta posterior does not guarantee that a sampler handles multivariate posteriors, strong correlations, or funnels correctly. Conjugacy is a necessary but not sufficient validation step.
- **Ignoring predictive checks.** Even when the posterior is exact, the model may fail to predict future data well. Posterior predictive checks are essential regardless of whether the posterior is available in closed form.

<a id="section-201-practice-exercises"></a>
## Practice exercises {#section-203-practice-exercises}

<a id="section-203-exercise-1"></a>
### Exercise 1 {#section-205-exercise-1}

Derive the posterior predictive distribution for a new observation $y_{n+1}$ in the Beta-Binomial model.

**Solution.** The posterior predictive is
$$p(y_{n+1} = 1 \mid y) = \int_{0}^{1} p \cdot \pi(p \mid y) \, dp = \mathbb{E}[p \mid y] = \frac{a+s}{a+b+n}.$$
For a general Beta posterior, the predictive probability of success is exactly the posterior mean of $p$.

<a id="section-211-exercise-2"></a>
### Exercise 2 {#section-213-exercise-2}

In the Normal-Normal model with $\sigma^{2} = 4$, $\tau_{0}^{2} = 9$, $\mu_{0} = 0$, and observations $y = (5, 7, 6)$, compute the exact posterior mean and 95% credible interval for $\mu$.

**Solution.** Here $n = 3$ and $\bar{y} = 6$. The posterior precision is $1/v = 1/9 + 3/4 = 31/36$, so $v = 36/31 \approx 1.161$. The posterior mean is $m = v(0/9 + 18/4) = 162/31 \approx 5.226$. The posterior is $\mathcal{N}(5.226, 1.161)$, so the 95% credible interval is $5.226 \pm 1.96\sqrt{1.161} \approx [3.11, 7.34]$.

<a id="section-217-exercise-3"></a>
### Exercise 3 {#section-219-exercise-3}

Explain why a sampler that passes a Beta-Binomial validation test might still fail on a hierarchical model with the same Bernoulli likelihood at the bottom level.

**Solution.** For proper Beta shapes the one-dimensional logit density is strictly log-concave and unimodal, but it need not be nearly symmetric. A hierarchical model introduces additional parameters (group means, variance components) and often produces posterior geometries with strong correlations, funnels, or multimodality. A sampler tuned for the univariate case may have insufficient exploration in the multivariate case. Passing a finite benchmark supplies limited evidence for its declared target, implementation and estimands; it does not prove target evaluation or acceptance logic generally correct or establish exploration of a hierarchical posterior.

<a id="section-223-looking-backward-and-forward"></a>
## Looking backward and forward {#section-225-looking-backward-and-forward}

This chapter used conjugate models to establish exact benchmarks for computational validation. The next chapter, *Hierarchical Models and Partial Pooling*, extends these ideas to settings where groups share information through latent population distributions, breaking simple conjugacy but retaining the same inferential principles.
<a id="section-226-the-observation-space-determines-the-evidence-constant"></a>
## The observation space determines the evidence constant {#section-228-the-observation-space-determines-the-evidence-constant}

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

<a id="section-253-beta-moments-and-future-batches-provide-separate-exact-"></a>
## Beta moments and future batches provide separate exact targets {#section-255-beta-moments-and-future-batches-provide-separate-exact-}

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

<a id="section-280-gamma-poisson-benchmarks-include-exposure-and-real-pred"></a>
## Gamma-Poisson benchmarks include exposure and real predictive shape {#section-282-gamma-poisson-benchmarks-include-exposure-and-real-pred}

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

<a id="section-314-completing-the-gaussian-square-also-checks-its-normaliz"></a>
## Completing the Gaussian square also checks its normalizer {#section-316-completing-the-gaussian-square-also-checks-its-normaliz}

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

<a id="section-344-dirichlet-normalizers-encode-dependence-between-categor"></a>
## Dirichlet normalizers encode dependence between categories {#section-346-dirichlet-normalizers-encode-dependence-between-categor}

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

<a id="section-371-the-normal-inverse-gamma-prior-is-a-joint-construction"></a>
## The normal-inverse-gamma prior is a joint construction {#section-373-the-normal-inverse-gamma-prior-is-a-joint-construction}

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

<a id="section-422-integrating-the-nig-law-gives-moments-and-student-predi"></a>
## Integrating the NIG law gives moments and Student predictives {#section-424-integrating-the-nig-law-gives-moments-and-student-predi}

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

<a id="section-464-full-gibbs-conditionals-differ-from-marginal-posterior-"></a>
## Full Gibbs conditionals differ from marginal posterior laws {#section-466-full-gibbs-conditionals-differ-from-marginal-posterior-}

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

<a id="section-492-fixed-kernel-gaussian-process-regression-is-exactly-gau"></a>
## Fixed-kernel Gaussian-process regression is exactly Gaussian {#section-494-fixed-kernel-gaussian-process-regression-is-exactly-gau}

A Gaussian-process prior implies a joint Gaussian law for any finite collection of function values. With fixed mean and kernel hyperparameters, let the training vector be $f\sim N(m,K)$ and observations satisfy $y\mid f\sim N(f,\sigma^2I)$ with known $\sigma^2>0$. For the density-completion argument, take $K$ positive definite. Multiplying these two Gaussian densities gives
$$
\Sigma_f=(K^{-1}+\sigma^{-2}I)^{-1},\qquad
m_f=\Sigma_f(K^{-1}m+\sigma^{-2}y).
$$
Thus $f\mid y$ is exactly Gaussian. This is a conjugate case, directly refuting a blanket claim that Gaussian processes require approximate inference.

Equivalent forms are
$$
m_f=m+K(K+\sigma^2I)^{-1}(y-m),\qquad
\Sigma_f=K-K(K+\sigma^2I)^{-1}K.
$$
The matrix $K+\sigma^2I$ is positive definite. These formulas also describe conditioning of a Gaussian measure when $K$ is only positive semidefinite; the posterior may then be supported on a lower-dimensional subspace rather than possess an ordinary full-dimensional density. That is the reference-measure distinction from Chapter 1.

For test values with prior covariance $K_{**}$ and training-to-test covariance $K_*$, the conditional mean and covariance are
$$
m_*+K_*^\mathsf T(K+\sigma^2I)^{-1}(y-m),\qquad
K_{**}-K_*^\mathsf T(K+\sigma^2I)^{-1}K_*.
$$
A noisy future observation adds its observation-noise variance to the latter. Function uncertainty and future observation uncertainty should therefore be named separately, as in the scalar normal benchmark.

The same joint calculation gives exact marginal likelihood $y\sim N(m,K+\sigma^2I)$. It involves a quadratic solve and a log determinant. A numerical implementation should solve the positive-definite system, for example through a Cholesky factorization, rather than explicitly form an inverse merely because the mathematical formula uses one. Dense factorization has cubic arithmetic cost in the training size and quadratic storage; exact conditioning does not mean constant-cost computation.

The conditioning formulas and their fixed-hyperparameter domain are documented in [Rasmussen–Williams, §2.2, equations 2.22–2.24](https://gaussianprocess.org/gpml/chapters/RW2.pdf). The derivation above establishes the conjugate finite-dimensional density case; the process interpretation imports the usual Gaussian conditioning construction.

A non-Gaussian observation likelihood generally breaks this simple Gaussian update. Integrating over uncertain kernel or noise hyperparameters also requires separate analysis: conditional Gaussian formulas can remain available while the marginal posterior is a nontrivial mixture. Some extended models retain special analytic structure, so there is no universal rule that every departure must use a particular approximate algorithm. The complete likelihood-prior pair and the quantity being integrated determine the computational problem.

<a id="section-521-finite-allocation-mixtures-retain-an-exact-but-expensiv"></a>
## Finite allocation mixtures retain an exact but expensive expansion {#section-523-finite-allocation-mixtures-retain-an-exact-but-expensiv}

For two Poisson components, introduce labels $Z_i\in\{1,2\}$ with $P(Z_i=1\mid w)=w$, and let $Y_i\mid Z_i=k,\lambda_k\sim\operatorname{Poisson}(\lambda_k)$. Give independent proper priors $w\sim\operatorname{Beta}(c,d)$ and $\lambda_k\sim\operatorname{Gamma}(a_k,b_k)$, with all hyperparameters positive.

For a fixed allocation vector $z$, let $n_k$ be its component sizes and $S_k$ the assigned count sums. The conditional posterior factors into Beta$(c+n_1,d+n_2)$ and independent Gamma$(a_k+S_k,b_k+n_k)$ laws. The integrated weight for that allocation is proportional to
$$
W_z=
\frac{B(c+n_1,d+n_2)}{B(c,d)}
\prod_{k=1}^2
\frac{b_k^{a_k}\Gamma(a_k+S_k)}
{\Gamma(a_k)(b_k+n_k)^{a_k+S_k}}.
$$
The common factor $\prod_i1/y_i!$ cancels when these weights are normalized, but must be restored for the observed-data evidence.

Summing over all $2^n$ allocation vectors gives the exact marginal posterior as a finite mixture of those conditional conjugate posteriors, with weights $W_z/\sum_{z'}W_{z'}$. The model therefore loses a single simple product-conjugate form, not every closed finite expression. Exhaustive enumeration can be computationally prohibitive even though the algebra is exact.

The label full conditional follows from the two competing joint paths:
$$
P(Z_i=1\mid y_i,w,\lambda_1,\lambda_2)
=\frac{w e^{-\lambda_1}\lambda_1^{y_i}}
{w e^{-\lambda_1}\lambda_1^{y_i}
 +(1-w)e^{-\lambda_2}\lambda_2^{y_i}}.
$$
The factorial cancels, and stable log-sum-exp evaluation avoids underflow. Alternating these label draws with the conjugate parameter updates gives a Gibbs construction. Its invariant target is justified by the same conditional-update argument, while its mixing requires separate assessment.

When component priors are identical, interchanging the two labels can leave the observed model unchanged. The resulting symmetric posterior modes are a model-identification issue, not automatically a coding bug. A component-specific posterior mean can be hard to interpret if the sampler mixes labels or remains near only one labeling. Predictive quantities invariant under relabeling answer a different question.

The mixture example gives a useful boundary for the word “exact.” The finite sum is exact symbolically, the enumeration cost grows exponentially with $n$, and a numerical implementation still needs stable summation. Conditional conjugacy is exact locally, but it does not establish global exploration. Approximate algorithms become useful because of those computational costs, not because a finite allocation identity has ceased to exist.

<a id="section-550-a-four-allocation-ledger-makes-mixture-inference-concre"></a>
## A four-allocation ledger makes mixture inference concrete {#section-552-a-four-allocation-ledger-makes-mixture-inference-concre}

Apply the preceding finite-sum formula to the ordered observations $y=(0,1)$. Use $w\sim\operatorname{Beta}(1,1)$ and independent rates $\lambda_1,\lambda_2\sim\operatorname{Gamma}(1,1)$, with shape-rate parameters. Conditional on these parameters, each observation independently selects component 1 with probability $w$ and then draws its Poisson count. All priors are proper. The observations have counting measure on ordered nonnegative-integer pairs; the four allocation vectors are latent possibilities, not four additional datasets.

There are only two observations, so write every allocation rather than hiding an enumeration behind notation. For $z=(z_1,z_2)$, let $n_k$ count observations assigned to component $k$ and $S_k$ sum their observed counts. Integrating $w$ gives
$$
\int_0^1w^{n_1}(1-w)^{n_2}\,dw
=B(n_1+1,n_2+1).
$$
Integrating a rate gives
$$
\int_0^\infty \lambda_k^{S_k}e^{-(n_k+1)\lambda_k}\,d\lambda_k
=\frac{\Gamma(S_k+1)}{(n_k+1)^{S_k+1}}.
$$
The prior exponential rate contributes the extra one in $n_k+1$. The data factorials are $0!1!=1$, so no additional factor changes these particular values.

The resulting unnormalized allocation weight is the product of those three integrals. If both observations use component 1, then $(n_1,S_1)=(2,1)$ and $(n_2,S_2)=(0,0)$. The beta integral is $B(3,1)=1/3$, the first rate integral is $\Gamma(2)/3^2=1/9$, and the second is one. Thus $W_{11}=1/27$. Interchanging the component labels gives $W_{22}=1/27$.

For $z=(1,2)$, the first component receives the zero and the second receives the one. Here $B(2,2)=1/6$, while the rate integrals are $1/2$ and $1/4$. Hence $W_{12}=1/48$. For $z=(2,1)$ those two rate integrals exchange places, so $W_{21}=1/48$. A zero count still contributes an exposure factor $e^{-\lambda_k}$; it must not be treated as though the observation were absent.

Summing the four weights gives the ordered-data evidence:
$$
p(0,1)=\frac2{27}+\frac2{48}
=\frac{25}{216}.
$$
Divide each weight by this positive total to obtain the complete posterior ledger. Within each row, the displayed three parameter laws are independent conditional on that allocation and the data.

| Allocation $z$ | Posterior weight | Law of $w$ | Law of $\lambda_1$ | Law of $\lambda_2$ |
|---|---:|---|---|---|
| $(1,1)$ | $8/25$ | $\operatorname{Beta}(3,1)$ | $\operatorname{Gamma}(2,3)$ | $\operatorname{Gamma}(1,1)$ |
| $(1,2)$ | $9/50$ | $\operatorname{Beta}(2,2)$ | $\operatorname{Gamma}(1,2)$ | $\operatorname{Gamma}(2,2)$ |
| $(2,1)$ | $9/50$ | $\operatorname{Beta}(2,2)$ | $\operatorname{Gamma}(2,2)$ | $\operatorname{Gamma}(1,2)$ |
| $(2,2)$ | $8/25$ | $\operatorname{Beta}(1,3)$ | $\operatorname{Gamma}(1,1)$ | $\operatorname{Gamma}(2,3)$ |

The weights sum to one. A component with no allocated observations retains its original rate prior, as the first and last rows show. This is a conditional statement: in the overall posterior neither named component is certainly unused. Its marginal rate law is a mixture across rows. Nor should an empty component be removed from the predictive distribution: a future observation can still select it with the posterior mixing weight.

The ledger gives exact marginal quantities without sampling. For example,
$$
E(\lambda_1\mid y)
=\frac8{25}\frac23+\frac9{50}\frac12+
\frac9{50}\cdot1+\frac8{25}\cdot1
=\frac{241}{300}.
$$
The same mean holds for $\lambda_2$ by label symmetry, and $E(w\mid y)=1/2$. Neither fact proves that the two component rates are equal in individual posterior draws. The label-specific marginals are identical because renaming components preserves the joint prior and likelihood.

A future count has conditional mean $w\lambda_1+(1-w)\lambda_2$. Compute its posterior expectation within each row before averaging. In the first row it is $(3/4)(2/3)+(1/4)(1)=3/4$. In the second it is $(1/2)(1/2)+(1/2)(1)=3/4$; the remaining rows give the same result. Thus
$$
E(\tilde Y\mid y)=3/4.
$$
Multiplying marginal means instead would give $241/300$, which differs from $3/4$. The parameter laws factor within each allocation row, but not after the allocation is integrated out. This small example shows exactly where posterior dependence enters a predictive calculation.

The predictive zero probability is another independent check. For a shape-rate Gamma$(A,B)$ rate, $E(e^{-\lambda})=(B/(B+1))^A$. The first and last rows therefore give $(3/4)(3/4)^2+(1/4)(1/2)=35/64$. The two split-allocation rows give $(1/2)(2/3)+(1/2)(2/3)^2=5/9$. Averaging with their total weights yields
$$
P(\tilde Y=0\mid y)
=\frac{16}{25}\frac{35}{64}+\frac9{25}\frac59
=\frac{11}{20}.
$$
These are exact integrated predictions, not outcomes of a simulated fit. The probability that the original observations share a component is $16/25$; this event is also invariant under renaming the labels. Such quantities remain meaningful when component names are arbitrary.

Finally, changing what was recorded changes the evidence. If the observation is the unordered histogram containing one zero and one one, it comprises the disjoint ordered events $(0,1)$ and $(1,0)$. Exchangeability gives histogram probability $2p(0,1)=25/108$. This extra factor counts observation orders; it is distinct from the Poisson factorials and from the four latent allocation paths. It cancels from the parameter posterior for this same model and event, but individual evidence values must retain the declared observation convention. The worked ledger therefore connects conjugacy, latent-path integration, label symmetry and prediction without relying on an undefined numerical experiment.

<a id="section-611-a-benchmark-audits-a-declared-target-transition-and-ret"></a>
## A benchmark audits a declared target, transition and retained trace {#section-613-a-benchmark-audits-a-declared-target-transition-and-ret}

The public Beta case fixes the posterior measure and uses a symmetric Gaussian random walk in the logit coordinate. Its target includes the Jacobian, so the acceptance ratio is the difference of the two logit log densities. Rejected proposals leave the state unchanged, and that repeated state must still appear in the retained chain. Storing only accepted moves changes the object being summarized.

Let $a(z)$ be the probability of accepting a move from state $z$, and let the accepted-move transition be the original off-diagonal kernel divided by $a(z)$. Detailed balance implies that its invariant density is proportional to $\pi_z(z)a(z)$ when the normalizing integral is positive. Indeed, integrating $\pi_z(z)a(z)$ against that jump transition gives the reverse accepted flux $\pi_z(w)a(w)$. Unless acceptance probability is constant, the accepted-only subsequence does not have target $\pi_z$.

This explains the deliberate failure case without relying on a plot. The full trace and accepted-only subsequence use the same proposals and uniforms; the omission removes holding times rather than changing the acceptance rule. A different mean, variance or empirical CDF then reflects a changed sampling law, not simply a shorter correct sample.

Monte Carlo uncertainty must be estimand-specific. For a mean, batch means estimate the standard error of the average under an appropriate chain CLT and a reliable long-run variance estimate. For a quantile $q_u$, the corresponding indicator is $\mathbf1\{p\le q_u\}$, and a suitable quantile CLT gives approximate MCSE equal to that indicator-average MCSE divided by the positive density at $q_u$. Posterior standard deviation and a generic ESS cannot substitute for this density factor and the relevant dependence.

The public protocol compares several finite batch sizes and reports the declared primary one. This is a finite diagnostic, not proof that an asymptotic consistency regime has been reached. [Jones–Haran–Caffo–Neath](https://arxiv.org/abs/math/0601446) give sufficient assumptions for batch-means output analysis; those assumptions should not be inferred from a favorable acceptance rate. Persistent large standardized discrepancies warrant investigation of reference calculations, target, stationarity, exploration and MCSE.

An empirical CDF distance is also reported, but ordinary iid Kolmogorov–Smirnov critical values are not applied to correlated draws. The distance describes the retained sample's discrepancy; a valid stochastic test would need its own dependence calibration. Likewise, prior-predictive interval coverage is a joint prior-averaged calibration statement, not a promise of the same coverage at every fixed parameter.

The resulting validation evidence is deliberately scoped. Exact density identities and deterministic reference checks can detect specific implementation errors; repeated finite simulations compare named estimands under fixed settings. Passing them supports that matched case and procedure. It does not prove every target evaluation, acceptance branch or hierarchical exploration problem correct. The original exercise's useful conclusion is this limitation, while the full public cases make the limitation testable rather than rhetorical.

<a id="section-627-three-additional-conjugate-pairs-reveal-what-the-data-c"></a>
## Three additional conjugate pairs reveal what the data count {#section-629-three-additional-conjugate-pairs-reveal-what-the-data-c}

The catalog is useful only if its parameters and recorded observations are specified. For independent exponential waiting times $t_i>0$ with rate $\lambda$, the likelihood is $\lambda^n\exp(-\lambda\sum t_i)$. A shape-rate $\operatorname{Gamma}(a,b)$ prior gives shape $a+n$ and rate $b+\sum t_i$. Here the number of observed events changes the shape, while elapsed time changes the rate. This differs from a Poisson sample of unit-exposure counts, where total counts change the shape and number of exposures changes the rate. The censored waiting-time calculation in Chapter 1 combines the two ideas: only observed events contribute powers of $\lambda$, but every unit contributes its recorded exposure.

For a geometric model, explicitly count failures before the first success:
$$
P(T=t\mid p)=p(1-p)^t,\qquad t=0,1,2,\ldots.
$$
For $n$ independent completed waits, $F=\sum t_i$ gives likelihood $p^n(1-p)^F$. A $\operatorname{Beta}(a,b)$ prior becomes $\operatorname{Beta}(a+n,b+F)$. If the recorded variable counts total trials, its support starts at one and $F=\sum t_i-n$. Substituting total trials for failures without that subtraction gives the wrong posterior. If a waiting sequence stops before a success, its censored contribution contains failures but no success factor; it cannot be treated as another completed wait.

For normal observations with known mean $\mu_\star$ and unknown variance $v>0$, use an inverse-gamma prior with density
$$
\frac{\beta^\alpha}{\Gamma(\alpha)}v^{-\alpha-1}e^{-\beta/v}.
$$
The likelihood contributes $v^{-n/2}\exp\{-\sum_i(y_i-\mu_\star)^2/(2v)\}$, so the posterior is $\operatorname{IG}(\alpha+n/2,\beta+\sum_i(y_i-\mu_\star)^2/2)$. The specified mean is essential. Replacing it by the observed sample mean and claiming this is the same model omits uncertainty about a mean that was estimated. A joint proper NIG prior handles an unknown mean by retaining its conditional-normal factor and the associated extra half power in the full variance conditional.

These updates also give immediate boundary diagnostics. A zero exposure in an exponential model cannot be treated as a positive duration, and a Poisson count with exposure zero must be zero almost surely. Gamma and inverse-gamma normalizers require positive updated shape and rate or scale. Proper positive hyperparameters make these updates proper for the specified finite data, but informal zero-hyperparameter limits require a new integrability check. A kernel that resembles a named family is not a substitute for its domain conditions.

<a id="section-645-credible-coverage-and-fixed-state-coverage-answer-diffe"></a>
## Credible coverage and fixed-state coverage answer different questions {#section-647-credible-coverage-and-fixed-state-coverage-answer-diffe}

A posterior interval $C(Y)$ with posterior probability $1-\alpha$ has an exact joint prior-predictive coverage identity under the specified proper model:
$$
P\{\theta\in C(Y)\}
=E_Y\{\Pi(\theta\in C(Y)\mid Y)\}=1-\alpha.
$$
The outer probability draws both $\theta$ from its prior and $Y$ from its likelihood. For discrete parameters or an interval rule that only reaches probability at least $1-\alpha$, the corresponding inequality replaces equality. This is a useful calibration experiment, but its averaging distribution is part of the claim. It does not promise $1-\alpha$ frequentist coverage at each fixed parameter value.

The known-variance normal benchmark makes the distinction explicit. Set $\mu_0=0$, let $w=n\tau_0^2/(\sigma^2+n\tau_0^2)$, and suppose $n\ge1$. Then $m=w\bar Y$ and $v=w\sigma^2/n$. At a fixed true value $\mu_\star$, $m-\mu_\star$ is normal with mean $-(1-w)\mu_\star$ and standard deviation $w\sigma/\sqrt n$. An equal-tail posterior interval is $m\pm z\sqrt v$, where $z=\Phi^{-1}(1-\alpha/2)$. Its fixed-state coverage is therefore
$$
\Phi\!\left(\frac{z\sqrt v+(1-w)\mu_\star}{w\sigma/\sqrt n}\right)
-\Phi\!\left(\frac{-z\sqrt v+(1-w)\mu_\star}{w\sigma/\sqrt n}\right).
$$
Strong shrinkage can produce poor coverage at a far-away fixed state while the joint prior-predictive identity remains valid. The formula follows by solving the two interval inequalities for the normal error, so it is a separate exact reference rather than a simulation assertion.

The fixed-state mean-square error is equally informative:
$$
E_{\mu_\star}(m-\mu_\star)^2
=(1-w)^2\mu_\star^2+w^2\sigma^2/n.
$$
The first term is squared shrinkage bias; the second is sampling variance. A favorable posterior standard deviation does not by itself report either of these fixed-state quantities. When benchmarking software, decide whether the experiment checks a conditional posterior distribution, prior-averaged interval calibration, fixed-state repeated-sampling behavior, or a decision risk. They require different replications and references.

<a id="section-668-normalizer-calculations-need-both-algebraic-and-numeric"></a>
## Normalizer calculations need both algebraic and numerical checks {#section-670-normalizer-calculations-need-both-algebraic-and-numeric}

A numerical library's CDF and inverse CDF can check mutual consistency without being independent proofs of a distributional formula. The Beta benchmark supplies a finite polynomial CDF as a second route. Its bisection starts from the proven bracket $[0,1]$ and uses monotonicity of the positive density. After $k$ ideal bisections the bracket width is $2^{-k}$; floating-point stagnation stops further refinement. The reported reference is an approximation to the uniquely defined root, with a deterministic cross-check against the special-function implementation. It is not a mathematically exact decimal quantile.

The Gaussian and NIG normalizers give another complementary audit: integrate a kernel symbolically, then evaluate its parameters using a separately specified density convention. For large arguments, evaluate gamma and beta ratios through log-gamma or log-beta rather than forming factorials and subtracting overflowing products. A stable log normalizer can still lose precision if two large nearly equal log evidences are subtracted. Compare the actual difference against a directly simplified expression when available.

For example, two proper Beta priors on the same recorded count share the same binomial coefficient, so that coefficient cancels algebraically in their Bayes factor. Removing it from each model's reported evidence before stating the observation convention would still be misleading: each individual evidence is then the probability of an ordered sequence rather than the count probability. Computational simplification should follow a declared measure and quantity.

A useful discrepancy report separates deterministic reference disagreement from Monte Carlo disagreement. A failed polynomial-versus-library check precedes any sampler diagnosis. A correct analytic reference followed by an uncertain MCSE estimate calls for investigation of the error estimate and exploration. Only after those distinctions does a repeated finite regression failure direct attention toward a transition or target defect. This order keeps an exact benchmark informative instead of turning a convenient threshold into an unsupported correctness theorem.

<a id="section-678-exercises-evidence-conventions-and-full-conditionals"></a>
## Exercises: evidence conventions and full conditionals {#section-680-exercises-evidence-conventions-and-full-conditionals}

<a id="section-680-cbm-02-e4-same-posterior-different-evidence"></a>
### CBM-02-E4 — Same posterior, different evidence {#section-682-cbm-02-e4-same-posterior-different-evidence}

Under $\operatorname{Beta}(2,5)$ and $n=20$, compare observing a specified ordered Bernoulli sequence containing seven successes with observing only $S=7$. Give each evidence, explain why the posterior agrees, and state when the binomial coefficient cancels in a Bayes factor.

<a id="section-684-cbm-02-e5-a-marginal-inverse-gamma-is-not-a-full-condit"></a>
### CBM-02-E5 — A marginal inverse-gamma is not a full conditional {#section-686-cbm-02-e5-a-marginal-inverse-gamma-is-not-a-full-condit}

For data $(5,7,6)$, use $\mu\mid v\sim\mathcal N(0,v)$ and $v\sim\operatorname{IG}(3,2)$ with the density convention in this chapter. Derive the posterior NIG parameters and the full conditional for $v$ given $\mu,y$. Explain why substituting the marginal posterior law for that conditional changes the Gibbs kernel.

<a id="section-688-solutions-evidence-conventions-and-full-conditionals"></a>
## Solutions: evidence conventions and full conditionals {#section-690-solutions-evidence-conventions-and-full-conditionals}

<a id="section-690-cbm-02-e4-same-posterior-different-evidence-solution"></a>
### CBM-02-E4 — Same posterior, different evidence — solution {#section-692-cbm-02-e4-same-posterior-different-evidence-solution}

The ordered-sequence evidence is $B(9,18)/B(2,5)=30B(9,18)$. The count evidence is $\binom{20}{7}30B(9,18)$, because that many disjoint sequences have the same success count and likelihood. The factor is positive and independent of $p$, so both posteriors are $\operatorname{Beta}(9,18)$. For two models on the same recorded count with the same $n,s$, the common factor cancels in their Bayes factor. It does not make a count probability interchangeable with a sequence probability when reporting individual evidences or comparing distinct observation protocols.

<a id="section-694-cbm-02-e5-a-marginal-inverse-gamma-is-not-a-full-condit"></a>
### CBM-02-E5 — A marginal inverse-gamma is not a full conditional — solution {#section-696-cbm-02-e5-a-marginal-inverse-gamma-is-not-a-full-condit}

Here $\bar y=6$ and $\sum(y_i-\bar y)^2=2$, so $\kappa_n=4$, $\mu_n=18/4=9/2$, $\alpha_n=3+3/2=9/2$ and $\beta_n=2+1+(3/8)36=33/2$. The posterior joint density in $(\mu,v)$ is proportional to $v^{-\alpha_n-3/2}\exp\{-[\beta_n+\kappa_n(\mu-\mu_n)^2/2]/v\}$. Holding $\mu$ fixed gives $\operatorname{IG}(5,33/2+2(\mu-9/2)^2)$. Integrating $\mu$ instead gives the marginal $\operatorname{IG}(9/2,33/2)$. Drawing this marginal independently after a conditional-normal update generally breaks the dependence between the saved $\mu$ and $v$. A correct direct iid construction first draws marginal $v$ and then draws $\mu\mid v$; its ordering and joint construction are different from the incorrectly substituted Gibbs step.

<a id="section-698-solutions-the-public-beta-target-and-rejection-state-au"></a>
## Solutions: the public Beta target and rejection-state audit {#section-700-solutions-the-public-beta-target-and-rejection-state-au}

**COMM06-CASE-01** completes the Beta benchmark at original Chapter 2 line 74. Retain the prior $\operatorname{Beta}(2,5)$, count $s=7$ out of $n=20$, and posterior $\operatorname{Beta}(9,18)$. The reference measure for $p$ is Lebesgue measure on $(0,1)$; for $z=\log(p/(1-p))$ it is Lebesgue measure on $\mathbb R$. The logit target, up to a constant, is $9\log p+18\log(1-p)$. The polynomial CDF and unique quantile roots derived earlier provide the exact mathematical references; reported decimal roots are numerical approximations.

The seven independent logit random-walk runs use Gaussian proposal standard deviations, starting probabilities and seeds as follows:

| Proposal SD | Initial probability | PCG64 seed |
|---:|---:|---:|
| 0.2 | 0.01 | 20260916 |
| 0.2 | 0.99 | 20260917 |
| 0.8 | 0.01 | 20260918 |
| 0.8 | 0.50 | 20260919 |
| 0.8 | 0.99 | 20260920 |
| 2.5 | 0.01 | 20260921 |
| 2.5 | 0.99 | 20260922 |

Each run discards 5,000 transitions and retains 60,000 subsequent states, including repetitions after rejection. There is no adaptation. A proposal consumes one Gaussian draw, one uniform draw and one target evaluation, even when acceptance is certain. Initialization adds one target evaluation: 65,001 target evaluations per run. Warmup and retained acceptance counts are reported separately. These settings specify a reproducible experiment; 5,000 discarded states are not a proof of stationarity.

The estimands are $E(p)=1/3$, $\operatorname{Var}(p)=1/126$, the central second moment about the exact mean, CDF values at the exact .025, .5 and .975 quantiles, and those three quantiles. Nonoverlapping batch sizes 150, 300 and 600 give a sensitivity table for the mean, squared deviation and indicator MCSEs. Size 300 is the declared primary regression estimate. The quantile delta MCSE divides the indicator MCSE at the reference quantile by the reference density there. Its interpretation requires a suitable Markov-chain CLT and adequate batch behavior. Sample variance is reported separately from the central second moment about the known mean.

The historical finite regression criteria are mean error below five primary batch MCSE and maximum quantile absolute error below .012. They are explicit scoped checks, not universal correctness or convergence theorems. Descriptive empirical-CDF distance is returned without iid Kolmogorov-Smirnov critical values. Before sampling, the code checks the polynomial against the special-function CDF within $10^{-12}$ on a declared grid, and bisection roots against its inverse within $10^{-11}$. A deterministic reference disagreement is investigated before interpreting any chain discrepancy.

The deliberate changed case uses proposal SD 2.5, start $p=.5$, seed 20260927, 5,000 discarded transitions and 120,000 retained transitions. It saves the full trace and, from the very same proposals and uniforms, an incorrect accepted-only subsequence. The jump-law derivation above explains why the latter targets a distribution proportional to $\pi(z)a(z)$. The finite expected comparisons are accepted-only CDF distance above 1.5 times the full-trace distance and variance farther from $1/126$. Their truth for these exact seeds is a pending root observation, not asserted here. Failure of a comparison calls for inspecting finite variation and the declared contrast, rather than asserting the jump law equals the target.

Save the following fence as cbm_beta_benchmark.py and call run_beta_benchmark(). It performs 580,000 transitions in total, returns bounded summaries rather than full traces, and performs no external I/O. Authors have not executed it. The separate original matched raw/logit $\operatorname{Beta}(3,7)$ task is COMM06-CASE-01-MH-MATCHED in Chapter 5; it has its own proposal-normalization audit and settings. Agreement here does not discharge hierarchical, NUTS or model-comparison workflows.

The audit rubric requires correct target and Jacobian, explicit rejection repetitions, exact input and dependency settings, the seven-run table, estimand-specific MCSEs, deterministic reference checks, and a separately labeled wrong-trace contrast. It also asks the reader to distinguish an exact invariant-law calculation from a finite run and from an assertion about exploration.

<a id="section-726-solutions-executable-beta-target-benchmark"></a>
## Solutions: executable Beta target benchmark {#section-728-solutions-executable-beta-target-benchmark}

The literal Python listing below is unexecuted by the authors. Its callable returns the declared bounded result and performs no external I/O.

```python
import math
import platform
import numpy as np
import scipy
from scipy import special

DEPENDENCIES = {"CPython": "3.14.7", "NumPy": "2.5.2", "SciPy": "1.18.1"}
LEVELS = (0.025, 0.5, 0.975)

def _require(condition, message):
    if not condition:
        raise ValueError(message)

def _environment():
    actual = {"CPython": platform.python_version(),
              "NumPy": np.__version__, "SciPy": scipy.__version__}
    _require(actual == DEPENDENCIES, "use the pinned existing environment")
    return actual

def beta_cdf_polynomial(p):
    _require(0.0 <= p <= 1.0, "probability outside support")
    if p == 0.0:
        return 0.0
    if p == 1.0:
        return 1.0
    return math.fsum(math.comb(26, j) * p**j * (1.0 - p)**(26 - j)
                     for j in range(9, 27))

def beta_quantile_reference(probability):
    _require(0.0 < probability < 1.0, "interior probability required")
    lower, upper = 0.0, 1.0
    for unused in range(80):
        middle = (lower + upper) / 2.0
        if middle == lower or middle == upper:
            break
        if beta_cdf_polynomial(middle) < probability:
            lower = middle
        else:
            upper = middle
    return (lower + upper) / 2.0

def _log_target(z):
    return -9.0 * float(np.logaddexp(0.0, -z)) - 18.0 * float(np.logaddexp(0.0, z))

def _run_chain(scale, initial_p, seed, warmup, retained, keep_jump_chain=False):
    _require(scale > 0 and 0.0 < initial_p < 1.0, "invalid chain settings")
    rng = np.random.Generator(np.random.PCG64(seed))
    z = math.log(initial_p) - math.log1p(-initial_p)
    current = _log_target(z)
    full = np.empty(retained)
    jump = []
    accepted_warmup = accepted_retained = 0
    total = warmup + retained
    for iteration in range(total):
        proposal = z + float(rng.normal(0.0, scale))
        proposed = _log_target(proposal)
        log_u = math.log(1.0 - float(rng.random()))
        accepted = log_u < min(0.0, proposed - current)
        if accepted:
            z, current = proposal, proposed
        _require(math.isfinite(current), "nonfinite retained target")
        if iteration < warmup:
            accepted_warmup += int(accepted)
        else:
            value = float(special.expit(z))
            full[iteration - warmup] = value
            accepted_retained += int(accepted)
            if keep_jump_chain and accepted:
                jump.append(value)
    return full, np.asarray(jump), {
        "proposal_sd": scale, "initial_p": initial_p, "seed": seed,
        "rng": "Generator(PCG64)", "warmup": warmup, "retained": retained,
        "accepted_warmup": accepted_warmup,
        "accepted_retained": accepted_retained,
        "acceptance_rate_retained": accepted_retained / retained,
        "cost": {"target_evaluations": total + 1, "normal_draws": total,
                 "uniform_draws": total, "transitions": total},
    }

def _batch_mcse(values, batch_size):
    _require(values.ndim == 1 and values.size % batch_size == 0,
             "complete equal batches required")
    batches = values.reshape(-1, batch_size).mean(axis=1)
    _require(batches.size >= 2, "at least two batches required")
    return float(batches.std(ddof=1) / math.sqrt(batches.size))

def _ks_distance(values):
    ordered = np.sort(values)
    n = ordered.size
    _require(n > 0, "empty trace")
    cdf = special.betainc(9.0, 18.0, ordered)
    return float(max(np.max(np.arange(1, n + 1) / n - cdf),
                     np.max(cdf - np.arange(n) / n)))

def _summary(values, quantile_references):
    _require(bool(np.all(np.isfinite(values) & (values > 0) & (values < 1))),
             "trace must stay in target support")
    mean = float(values.mean())
    central = (values - 1.0 / 3.0)**2
    quantiles = np.quantile(values, LEVELS, method="linear")
    batches = {}
    for size in (150, 300, 600):
        mcse = _batch_mcse(values, size)
        indicator_mcse = [_batch_mcse((values <= q).astype(float), size)
                          for q in quantile_references]
        densities = [math.exp(8.0 * math.log(q) + 17.0 * math.log1p(-q)
                              - float(special.betaln(9.0, 18.0)))
                     for q in quantile_references]
        batches[str(size)] = {
            "batch_count": int(values.size // size), "mean_mcse": mcse,
            "central_second_moment_mcse": _batch_mcse(central, size),
            "cdf_at_reference_mcse": indicator_mcse,
            "quantile_mcse_delta": [s / f for s, f in zip(indicator_mcse, densities)],
        }
    mean_mcse = batches["300"]["mean_mcse"]
    _require(mean_mcse > 0, "zero MCSE is not a validation success")
    return {
        "draws": int(values.size), "mean": mean,
        "sample_variance": float(values.var(ddof=1)),
        "central_second_moment_about_exact_mean": float(central.mean()),
        "mean_reference": 1.0 / 3.0, "variance_reference": 1.0 / 126.0,
        "levels": list(LEVELS), "quantiles": quantiles.tolist(),
        "quantile_references": quantile_references,
        "batches": batches, "descriptive_ks_distance": _ks_distance(values),
        "finite_regression_checks": {
            "mean_below_5_batch_mcse": abs(mean - 1.0 / 3.0) < 5.0 * mean_mcse,
            "max_quantile_absolute_error_below_point012":
                float(np.max(np.abs(quantiles - quantile_references))) < 0.012,
        },
    }

def run_beta_benchmark():
    environment = _environment()
    quantile_references = [beta_quantile_reference(q) for q in LEVELS]
    polynomial_errors = [abs(beta_cdf_polynomial(p) - float(special.betainc(9.0, 18.0, p)))
                         for p in (0.0, 0.01, 0.1, 0.3, 0.5, 0.9, 0.99, 1.0)]
    inverse_errors = [abs(q - float(special.betaincinv(9.0, 18.0, level)))
                      for q, level in zip(quantile_references, LEVELS)]
    _require(max(polynomial_errors) < 1e-12 and max(inverse_errors) < 1e-11,
             "independent deterministic beta references disagree")
    runs = []
    for scale, initial_p, offset in [
        (0.2, 0.01, 10), (0.2, 0.99, 11),
        (0.8, 0.01, 12), (0.8, 0.50, 13), (0.8, 0.99, 14),
        (2.5, 0.01, 15), (2.5, 0.99, 16),
    ]:
        draws, unused_jump, settings = _run_chain(
            scale, initial_p, 20260906 + offset, 5000, 60000)
        runs.append({"settings": settings, "summary": _summary(draws, quantile_references)})
    full, accepted_only, contrast_settings = _run_chain(
        2.5, 0.5, 20260927, 5000, 120000, keep_jump_chain=True)
    _require(accepted_only.size >= 2, "too few jumps for the declared contrast")
    correct = _summary(full, quantile_references)
    wrong_variance = float(accepted_only.var(ddof=1))
    wrong_ks = _ks_distance(accepted_only)
    contrast = {
        "settings": contrast_settings, "same_proposals_and_acceptance_stream": True,
        "correct_full_trace": correct,
        "incorrect_accepted_only": {
            "draws": int(accepted_only.size), "mean": float(accepted_only.mean()),
            "sample_variance": wrong_variance, "descriptive_ks_distance": wrong_ks,
            "mcse_target_warning": "this subsequence targets the jump law, not Beta(9,18)",
        },
        "declared_finite_comparison": {
            "wrong_ks_above_1point5_times_correct":
                wrong_ks > 1.5 * correct["descriptive_ks_distance"],
            "wrong_variance_farther_from_exact":
                abs(wrong_variance - 1.0 / 126.0) >
                abs(correct["sample_variance"] - 1.0 / 126.0),
        },
    }
    return {
        "case_id": "COMM06-CASE-01", "environment": environment,
        "data": {"successes": 7, "trials": 20},
        "prior": {"a": 2, "b": 5}, "posterior": {"a": 9, "b": 18},
        "exact_references": {"mean": "1/3", "variance": "1/126",
                             "cdf": "sum(j=9..26) choose(26,j)*p^j*(1-p)^(26-j)",
                             "quantiles": quantile_references,
                             "polynomial_max_error": max(polynomial_errors),
                             "inverse_max_error": max(inverse_errors)},
        "runs": runs, "rejection_omission_contrast": contrast,
        "scope": "finite seeded regression criteria, not a universal CLT or convergence proof",
    }
```

<a id="section-916-solutions-a-complete-nig-gibbs-and-predictive-benchmark"></a>
## Solutions: a complete NIG Gibbs and predictive benchmark {#section-918-solutions-a-complete-nig-gibbs-and-predictive-benchmark}

**COMM06-CASE-01-NIG-COMPANION** supplies the missing dataset and settings for original Chapter 2 line 97, duty CBM-CLAIM-009. Use $y=(5,7,6)$ and the proper joint prior $v\sim\operatorname{IG}(3,2)$, $\mu\mid v\sim\mathcal N(0,v)$ on $\mathbb R\times(0,\infty)$ with respect to $d\mu\,dv$. The inverse-gamma scale convention is the density displayed above. The exact posterior parameters are $(\kappa_n,\mu_n,\alpha_n,\beta_n)=(4,9/2,9/2,33/2)$.

Update $\mu\mid v,y\sim\mathcal N(9/2,v/4)$, then $v\mid\mu,y\sim\operatorname{IG}(5,33/2+2(\mu-9/2)^2)$. Draw the inverse-gamma as its scale divided by an independent unit-scale Gamma of shape 5. Retain the pair after both updates. This defines the actual Gibbs scan; the initial $\mu$ is overwritten by the first normal update, while the initial variance affects that update.

Run four chains with initial pairs $(-5,1),(0,5),(10,25),(15,100)$ and PCG64 seeds 20260986 through 20260989 respectively. Each has 5,000 discarded and 60,000 retained scans. After each chain, a distinct PCG64 generator with seed 100 larger supplies one posterior-predictive normal draw per retained pair. The literal seed offsets prevent predictive draws from altering the Gibbs stream. A chain consumes 65,000 conditional-normal and 65,000 conditional-Gamma draws, plus 60,000 predictive-normal draws, and no Metropolis target evaluations.

The exact variance mean and variance are $33/7$ and $2178/245$. The marginal mean law is Student $t_9$ with location $9/2$ and scale squared $11/12$, hence variance $33/28$. The future-observation law is Student $t_9$ with location $9/2$ and scale squared $55/12$, hence variance $165/28$. Quantiles at .025, .5 and .975 are defined by the corresponding analytic CDFs. SciPy evaluates these numerical references with CDF/quantile consistency tolerance $10^{-10}$; inverse-gamma mean and variance checks have tolerances $10^{-12}$ and $10^{-11}$. Such checks do not turn library evaluations into independent symbolic proofs.

For each chain and each of $\mu,v,\tilde Y$, return the mean, variance, central second moment about the exact mean, quantiles and batch MCSEs at sizes 150, 300 and 600. The declared primary size is 300; the finite regression criterion is error below six estimated MCSE for the mean, central second moment and quantiles using indicator/density delta MCSE. The chosen $\alpha_n=4.5$ gives the fourth moment of $v$, so the squared-variance estimand has finite variance. This moment fact alone is not a proof that a finite batch estimate is adequate or that warmup removed initialization bias.

A changed implementation that incorrectly uses marginal shape $4.5$ instead of full-conditional shape 5 targets another transition; the exact full-conditional formula, not a noisy comparison alone, identifies its defect. Another diagnostic is the predictive variance: comparing predictions to the marginal law of $\mu$ omits observation noise. The supplied code returns the correct analytic references and actual run summaries; it does not fabricate outputs for either deliberately described defect.

Save the following fence as cbm_nig_benchmark.py and call run_nig_companion() using the pinned dependencies. The bounded pure callable performs 260,000 Gibbs scans and returns summaries with no filesystem, network or stream I/O. It remains unexecuted by the authors. The duty is source-completed pending root reproduction. This companion adds an unknown-variance benchmark; it is not a substitute for fitting a hierarchical population model or for the three principal public cases.

A complete report preserves the joint-prior convention, distinguishes full and marginal conditionals, records all four starts and both seed streams, identifies which moments are mathematically finite, and reports finite failures without relabeling them proof of a software bug or proof of successful exploration.

<a id="section-934-solutions-executable-nig-gibbs-companion"></a>
## Solutions: executable NIG Gibbs companion {#section-936-solutions-executable-nig-gibbs-companion}

The literal Python listing below is unexecuted by the authors. Its callable returns the declared bounded result and performs no external I/O.

```python
import math
import platform
import numpy as np
import scipy
from scipy import stats

DEPENDENCIES = {"CPython": "3.14.7", "NumPy": "2.5.2", "SciPy": "1.18.1"}
LEVELS = (0.025, 0.5, 0.975)

def _require(condition, message):
    if not condition:
        raise ValueError(message)

def _batch_mcse(values, batch_size):
    _require(values.size % batch_size == 0, "complete equal batches required")
    means = values.reshape(-1, batch_size).mean(axis=1)
    _require(means.size >= 2, "too few batches")
    return float(means.std(ddof=1) / math.sqrt(means.size))

def _summarize(values, reference_mean, reference_variance, reference_distribution):
    _require(bool(np.all(np.isfinite(values))), "nonfinite draws")
    quantile_reference = np.asarray(reference_distribution.ppf(LEVELS), dtype=float)
    quantiles = np.quantile(values, LEVELS, method="linear")
    center_square = (values - reference_mean)**2
    batches = {}
    for size in (150, 300, 600):
        indicator_mcse = [_batch_mcse((values <= q).astype(float), size)
                          for q in quantile_reference]
        density = np.asarray(reference_distribution.pdf(quantile_reference), dtype=float)
        _require(bool(np.all(np.isfinite(density) & (density > 0))), "invalid density reference")
        batches[str(size)] = {
            "batch_count": int(values.size // size),
            "mean_mcse": _batch_mcse(values, size),
            "central_second_moment_mcse": _batch_mcse(center_square, size),
            "quantile_mcse_delta": [s / float(f) for s, f in zip(indicator_mcse, density)],
        }
    mean = float(values.mean())
    central_second = float(center_square.mean())
    mean_se = batches["300"]["mean_mcse"]
    variance_se = batches["300"]["central_second_moment_mcse"]
    _require(mean_se > 0 and variance_se > 0, "zero MCSE is not success")
    qse = np.asarray(batches["300"]["quantile_mcse_delta"])
    return {
        "draws": int(values.size), "mean": mean,
        "reference_mean": reference_mean,
        "sample_variance": float(values.var(ddof=1)),
        "central_second_moment_about_exact_mean": central_second,
        "reference_variance": reference_variance,
        "levels": list(LEVELS), "quantiles": quantiles.tolist(),
        "quantile_references": quantile_reference.tolist(), "batches": batches,
        "finite_regression_checks": {
            "mean_below_6_mcse": abs(mean - reference_mean) < 6.0 * mean_se,
            "central_second_moment_below_6_mcse":
                abs(central_second - reference_variance) < 6.0 * variance_se,
            "quantiles_below_6_delta_mcse":
                bool(np.all(np.abs(quantiles - quantile_reference) < 6.0 * qse)),
        },
    }

def run_nig_companion():
    environment = {"CPython": platform.python_version(),
                   "NumPy": np.__version__, "SciPy": scipy.__version__}
    _require(environment == DEPENDENCIES, "use the pinned existing environment")
    data = np.asarray([5.0, 7.0, 6.0])
    mu0, kappa0, alpha0, beta0 = 0.0, 1.0, 3.0, 2.0
    n, ybar = data.size, float(data.mean())
    sse = float(np.sum((data - ybar)**2))
    kappa = kappa0 + n
    location = (kappa0 * mu0 + n * ybar) / kappa
    alpha = alpha0 + n / 2.0
    beta = beta0 + sse / 2.0 + kappa0 * n * (ybar - mu0)**2 / (2.0 * kappa)
    _require((kappa, location, alpha, beta) == (4.0, 4.5, 4.5, 16.5),
             "NIG update mismatch")
    mu_reference = stats.t(df=9.0, loc=4.5, scale=math.sqrt(11.0 / 12.0))
    variance_reference = stats.invgamma(a=4.5, scale=16.5)
    predictive_reference = stats.t(df=9.0, loc=4.5, scale=math.sqrt(55.0 / 12.0))
    for distribution in (mu_reference, variance_reference, predictive_reference):
        q = distribution.ppf(LEVELS)
        _require(float(np.max(np.abs(distribution.cdf(q) - LEVELS))) < 1e-10,
                 "CDF/quantile reference mismatch")
    _require(abs(float(variance_reference.mean()) - 33.0 / 7.0) < 1e-12,
             "inverse-gamma mean reference mismatch")
    _require(abs(float(variance_reference.var()) - 2178.0 / 245.0) < 1e-11,
             "inverse-gamma variance reference mismatch")
    warmup, retained = 5000, 60000
    runs = []
    for index, (initial_mu, initial_variance) in enumerate(
            [(-5.0, 1.0), (0.0, 5.0), (10.0, 25.0), (15.0, 100.0)]):
        seed = 20260986 + index
        predictive_seed = seed + 100
        rng = np.random.Generator(np.random.PCG64(seed))
        predictive_rng = np.random.Generator(np.random.PCG64(predictive_seed))
        mu, variance = initial_mu, initial_variance
        mu_draws = np.empty(retained)
        variance_draws = np.empty(retained)
        for iteration in range(warmup + retained):
            mu = float(rng.normal(location, math.sqrt(variance / kappa)))
            conditional_scale = beta + kappa * (mu - location)**2 / 2.0
            gamma_draw = float(rng.gamma(alpha + 0.5, 1.0))
            _require(gamma_draw > 0 and math.isfinite(gamma_draw), "invalid precision draw")
            variance = conditional_scale / gamma_draw
            _require(variance > 0 and math.isfinite(variance) and math.isfinite(mu),
                     "nonfinite Gibbs state")
            if iteration >= warmup:
                mu_draws[iteration - warmup] = mu
                variance_draws[iteration - warmup] = variance
        predictive_draws = predictive_rng.normal(mu_draws, np.sqrt(variance_draws))
        runs.append({
            "initial_mu": initial_mu, "initial_variance": initial_variance,
            "seed": seed, "predictive_seed": predictive_seed, "rng": "Generator(PCG64)",
            "warmup": warmup, "retained": retained,
            "cost": {"conditional_normal_draws": warmup + retained,
                     "conditional_gamma_draws": warmup + retained,
                     "posterior_predictive_normal_draws": retained,
                     "MH_target_evaluations": 0},
            "mu": _summarize(mu_draws, 4.5, 33.0 / 28.0, mu_reference),
            "variance": _summarize(variance_draws, 33.0 / 7.0,
                                   2178.0 / 245.0, variance_reference),
            "predictive": _summarize(predictive_draws, 4.5,
                                     165.0 / 28.0, predictive_reference),
        })
    return {
        "case_id": "COMM06-CASE-01-NIG-COMPANION", "environment": environment,
        "data": [5, 7, 6], "prior": {"mu0": 0, "kappa0": 1, "alpha0": 3, "beta0": 2},
        "posterior": {"mu": "9/2", "kappa": 4, "alpha": "9/2", "beta": "33/2"},
        "full_variance_conditional_shape": 5,
        "full_variance_conditional_scale": "33/2+2*(mu-9/2)^2",
        "reference_moments": {"variance_mean": "33/7", "variance_variance": "2178/245",
                              "mu_mean": "9/2", "mu_variance": "33/28",
                              "predictive_mean": "9/2", "predictive_variance": "165/28"},
        "runs": runs,
        "interpretation": "exact conditional kernels and analytic references; finite MCSE diagnostics do not prove exploration or stationarity",
    }
```

<a id="section-1074-references-exact-gaussian-inference-and-monte-carlo-unc"></a>
## References: exact Gaussian inference and Monte Carlo uncertainty {#section-1076-references-exact-gaussian-inference-and-monte-carlo-unc}

The fixed-kernel Gaussian-process formulas import the Gaussian conditioning result in Rasmussen and Williams, [Gaussian Processes for Machine Learning, Chapter 2](https://gaussianprocess.org/gpml/chapters/RW2.pdf), equations 2.22–2.24, under the covariance/noise hypotheses stated above. They do not import an approximation claim for all Gaussian processes. For conditions supporting Markov-chain CLTs and batch-means error estimation, see Jones, Haran, Caffo and Neath, [Fixed-Width Output Analysis for Markov Chain Monte Carlo](https://arxiv.org/abs/math/0601446). No such asymptotic result makes a finite MCSE automatically reliable.

The [Stan posterior-analysis manual](https://mc-stan.org/docs/reference-manual/analysis.html) distinguishes posterior uncertainty and Monte Carlo error. The public listings use [NumPy quantile](https://numpy.org/doc/stable/reference/generated/numpy.quantile.html) with method linear, SciPy [inverse incomplete beta](https://docs.scipy.org/doc/scipy/reference/generated/scipy.special.betaincinv.html), and [inverse-gamma](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.invgamma.html) CDF/quantile conventions. Their exact installed versions, algorithm inputs and deterministic tolerances are declared in each passport. All supplied programs remain unexecuted by their authors; actual root receipts must bind the complete frozen chapter source.

