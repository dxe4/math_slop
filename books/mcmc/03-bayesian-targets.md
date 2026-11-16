# 03. Bayesian modelling and targets

## What the sampler is supposed to sample

**Learning goals.** By the end of this chapter, you should be able to turn a generative model into a posterior target, check its support and normalizing integral, distinguish likelihood identifiability from a proper posterior, change coordinates correctly, and calculate a posterior predictive distribution. The prerequisites are the ideas of density, conditioning, and change of variables from [Chapter 02](02-probability.md), and the distinction between an expectation and an optimizer from [Chapter 01](01-probability-computation.md).

An MCMC algorithm begins with a mathematical target. If that target is wrong, a perfect algorithm faithfully explores the wrong distribution. If its integral is infinite, there is no posterior probability distribution to explore. Even a valid posterior can answer a question that is scientifically unhelpful because its observation model omits an important feature. We will therefore specify the target before discussing how to sample it.

Our two running examples have deliberately different problems. Repeated binary outcomes yield an exact posterior that can calibrate later samplers. Two Gaussian intercepts reveal a direction the data cannot identify. Together they show why a target is more than a formula proportional to a likelihood times a prior.

## 1. Begin with the observation process

Let $y$ denote observed data, $\theta$ unknown parameters, and $x$ fixed design information such as known exposure times or predictor values. A generative model says how hypothetical data would arise at a specified $\theta$: it gives $p(y\mid\theta,x)$. After observing $y$, we regard the same expression as a function of $\theta$ and call it the *likelihood*, $L(\theta;y,x)$. A likelihood need not integrate to one over $\theta$. It is a density or probability mass in $y$ for each admissible parameter value.

For independent observations *conditional on* $\theta$ and $x$, the likelihood factors:

$$
p(y_1,\ldots,y_n\mid\theta,x)=\prod_{i=1}^{n}p(y_i\mid\theta,x_i).
$$

The conditional-independence assumption is doing real work here. Repeated readings from one instrument may share an offset; observations in time may depend on earlier states. Copying a recorded row twice is not two independent pieces of evidence. Selection, censoring, and missingness can also alter the distribution of what is observed. A model can introduce latent variables $z$ to describe some of these features, but that choice must be motivated by the observation process rather than by what happens to be easy for a sampler.

For a concrete model, suppose each of ten trials has a common success probability $p$, with conditionally independent Bernoulli outcomes. If we retain only the success count $S=s$, then $S\mid p\sim\operatorname{Binomial}(n,p)$. If we instead retain the ordered zero-one sequence, its probability lacks the binomial coefficient $\binom ns$. The two representations assign different probabilities to their respective data objects, but the factor $\binom ns$ is independent of $p$, so they give the same posterior for $p$ under the same prior. The distinction matters again when calculating the probability of the observed data itself.

## 2. Bayes' rule constructs a target

Choose a reference measure $\mu$ on the parameter space: Lebesgue measure for continuous parameters, counting measure for discrete ones, or a product for mixed spaces. Let $p(\theta)$ be a prior density relative to that measure. Write

$$
q(\theta)=p(y\mid\theta,x)p(\theta),\qquad
Z(y)=\int q(\theta)\,d\mu(\theta).
$$

If $q$ is measurable and nonnegative and $0<Z(y)<\infty$, the posterior density exists for this observed $y$:

$$
\pi(\theta\mid y,x)=\frac{q(\theta)}{Z(y)}.
$$

The prior and likelihood supports intersect: where either factor is zero, the posterior is zero. In continuous models an MCMC program usually evaluates $\log q(\theta)$ and may omit a *positive finite* factor independent of $\theta$. It may not discard factors that vary with a sampled parameter. For instance, if $y_i\mid\mu,\sigma\sim N(\mu,\sigma^2)$ independently and both parameters are unknown, then

$$
\log p(y\mid\mu,\sigma)
=-\frac n2\log(2\pi)-n\log\sigma
-\frac{1}{2\sigma^2}\sum_i(y_i-\mu)^2,
\qquad \sigma>0.
$$

The $-n\log\sigma$ term is essential. Likewise, if observed values are sampled from a distribution *truncated* to a region, its probability of falling in that region generally depends on $\theta$ and belongs in the likelihood. Constants omitted for within-model posterior sampling have to be restored when computing $Z(y)$ for model comparison; [Chapter 26](26-normalizers.md) treats that harder problem. Numerical evaluation of log densities is developed in [Chapter 04](04-numerics.md).

The equation $\pi\propto q$ is a useful shorthand only after the measure, support, and finite nonzero integral are understood. Otherwise a smooth-looking unnormalized curve can conceal an infinite total mass.

### 2.1 Worked example: a recording threshold changes the target

Suppose durations are conditionally independent given an unknown rate $\lambda>0$, each with exponential density $f(t\mid\lambda)=\lambda e^{-\lambda t}$ for $t>0$. A recording system retains only durations exceeding a known threshold $c\geq0$. We analyze a fixed number $n$ of retained durations, with no count of rejected events. Conditional on retention, the density of each recorded duration is

$$
f(t\mid\lambda,T>c)
=\frac{\lambda e^{-\lambda t}}{P(T>c\mid\lambda)}
=\lambda e^{-\lambda(t-c)},\qquad t>c,
$$

because $P(T>c\mid\lambda)=e^{-\lambda c}$. Integrating from $c$ to infinity gives one. The denominator depends on $\lambda$ even though the threshold is fixed. This is an instance of the conditional sampling law used for [truncated data](https://mc-stan.org/docs/stan-users-guide/truncation-censoring.html).

Take $c=2$ and recorded durations $(3,4,5)$, in a common time unit. Give $\lambda$ a $\operatorname{Gamma}(2,1)$ prior. Here $\operatorname{Gamma}(a,b)$ uses **shape and rate**, so its density is $b^a\lambda^{a-1}e^{-b\lambda}/\Gamma(a)$ and its mean is $a/b$; for positive integer $a$, $\Gamma(a)=(a-1)!$. The likelihood contributes $\lambda^3e^{-6\lambda}$ because $\sum_i(t_i-c)=6$. Thus, relative to $d\lambda$,

$$
q(\lambda)=\lambda^4e^{-7\lambda},\qquad
Z=\int_0^\infty q(\lambda)\,d\lambda=\frac{4!}{7^5},
\qquad \lambda\mid t,\text{retention}\sim\operatorname{Gamma}(5,7).
$$

The posterior mean is $5/7\approx0.7143$. Dropping the three retention denominators instead gives a $\operatorname{Gamma}(5,13)$ posterior with mean $5/13\approx0.3846$. Both distributions are proper and easy to sample. The second answers a different observation model, treating the systematically long recorded durations as an unselected sample. More simulation cannot correct that modeling error. The companion example checks both means by numerical integration as well as conjugate algebra.

The design statement matters. If a fixed cohort also records how many durations fell below $c$, those counts carry information about $\lambda$. This is censoring: an event is known to exist but its exact duration is hidden. Its contribution is a probability of the censored region. Exercise 7 constructs that likelihood explicitly. The [Stan censoring discussion](https://mc-stan.org/docs/stan-users-guide/truncation-censoring.html#censored-data) explains the corresponding integration over hidden values.

## 3. Priors encode predictions before data

A prior is part of the probability model, not a patch added after the likelihood. For a success probability, $p\sim\operatorname{Beta}(a,b)$ with $a,b>0$ has density proportional to $p^{a-1}(1-p)^{b-1}$ on $(0,1)$ and mean $a/(a+b)$. Before seeing data, the probability that the next Bernoulli trial succeeds is therefore $a/(a+b)$. More informative than a vague label such as “weak prior” is a question on the observation scale: what success rates and sequences would this prior make plausible?

The sum $a+b$ controls concentration when the mean is held fixed. In a conjugate binomial calculation, $a$ and $b$ are sometimes described as pseudo-counts. That analogy is specific to this model and can mislead at boundaries or when the prior is interpreted as literal historical trials. A $\operatorname{Beta}(2,2)$ prior centers at one half and gives little density near zero and one; it does not assert that two successes and two failures actually occurred.

Prior prediction is a practical way to examine the consequences. Under this prior, the chance of success on the first trial is one half. Yet outcomes from two future trials are dependent *after integrating out* the shared $p$: seeing the first success raises the probability of success on the second to $\mathbb E[p\mid\text{first success}]=3/5$. This is compatible with conditional independence given $p$. The dependence arises because both trials inform the same unknown rate. It is one reason a model's prior implications are easier to understand in the units of observable outcomes than in the shape parameters alone.

Prior scale is meaningful only with parameter units. A normal prior of standard deviation 10 on a regression slope is extremely broad if predictors are measured in millimeters and the response in fractions; it may be narrow after rescaling. A proper prior integrates to one, but can still put mass on scientifically implausible values. Conversely, an improper prior may yield a valid posterior for some observations, yet demands a separate proof. Sensitivity analysis means recomputing the quantity of interest under defensible alternative priors and examining how conclusions change. It is especially valuable when data are weak along some directions. [Bayesian Workflow](https://arxiv.org/abs/2011.01808) places such model criticism and sensitivity within the larger process of building and checking an analysis.

## 4. Worked example: ten binary trials

Suppose $s=7$ successes occur in $n=10$ conditionally independent trials and $p\sim\operatorname{Beta}(2,2)$. For the count, the likelihood is $\binom{10}{7}p^7(1-p)^3$. Multiplying by the prior kernel $p(1-p)$ gives

$$
q(p)\propto p^8(1-p)^4,\qquad 0<p<1.
$$

Since the beta density with shapes $A,B$ has powers $A-1,B-1$, we obtain $p\mid s\sim\operatorname{Beta}(9,5)$. Its mean, variance, and interior mode are

$$
\mathbb E[p\mid s]=\frac{9}{14}\approx0.643,\qquad
\operatorname{Var}(p\mid s)=\frac{9\cdot5}{14^2\cdot15}=\frac{3}{196}\approx0.0153,
$$

$$
\operatorname{mode}(p\mid s)=\frac{9-1}{9+5-2}=\frac{2}{3}.
$$

The posterior mean can be written as a weighted average of the observed success fraction and the prior mean:

$$
\frac{a+s}{a+b+n}
=\frac{n}{a+b+n}\frac{s}{n}
+\frac{a+b}{a+b+n}\frac{a}{a+b}
=\frac{10}{14}\frac{7}{10}+\frac4{14}\frac12=\frac9{14}.
$$

This derivation makes the weights visible: ten trial units from the likelihood and four beta shape units from this conjugate prior. Posterior spread describes uncertainty about $p$ *under the model*, not numerical error in a simulation estimate of its mean. The analytic $\operatorname{Beta}(9,5)$ law will be a useful known target when [Metropolis–Hastings](09-metropolis-hastings.md) is introduced.

The [chapter figure](figures/03.svg) uses a separate count of eight successes and two failures. Under the same $\operatorname{Beta}(2,2)$ prior, its posterior is $\operatorname{Beta}(10,4)$. Its likelihood curve is scaled to unit peak, while the prior and posterior curves are normalized densities. The figure illustrates the same update rule with a different data value from the seven-success example above.

## 5. Propriety comes before computation

For the beta-binomial family, a general kernel after $s$ successes in $n$ trials is

$$
q(p)=p^{a+s-1}(1-p)^{b+n-s-1},\qquad 0<p<1.
$$

Near zero, $(1-p)^{b+n-s-1}$ stays bounded above and below by positive constants, so integrability is equivalent to that of $p^{a+s-1}$. The integral $\int_0^\varepsilon p^{c-1}\,dp$ is finite exactly when $c>0$. The corresponding argument near one gives a second condition. There is no singularity in the interior. Thus

$$
0<\int_0^1q(p)\,dp<\infty
\quad\Longleftrightarrow\quad a+s>0\ \text{and}\ b+n-s>0.
$$

The Haldane expression $p^{-1}(1-p)^{-1}$ is not a probability prior. With $0<s<n$ it produces a proper $\operatorname{Beta}(s,n-s)$ posterior. With all successes, the integral diverges at $p=1$; with all failures, it diverges at $p=0$. The data do not automatically rescue an improper prior.

Even when this posterior is proper, an improper prior does not supply a uniquely normalized marginal likelihood. Multiplying that prior measure by any positive constant leaves the posterior unchanged but multiplies $Z(y)$ by that constant. There is no missing probability normalization to restore; ordinary evidence comparisons need additional justification, as discussed in [Chapter 26](26-normalizers.md).

A useful sufficient condition is a proper prior together with a likelihood bounded as a function of $\theta$, provided its prior integral is strictly positive: then $0<Z(y)<\infty$. Boundedness is sufficient, not necessary. More generally, a well-defined joint probability model has a conditional posterior for almost every observation under its data distribution; this does not license a blanket claim about every exceptional observation. An unbounded *density* can still have finite integral, just as a beta density with a shape below one can spike at an endpoint. See the [Stan guide on problematic posteriors](https://mc-stan.org/docs/stan-users-guide/problematic-posteriors.html) for further examples.

Propriety does not guarantee that every requested expectation exists. A standard Cauchy density is proper, but $\int |\theta|\pi(\theta)\,d\theta=\infty$ and its mean is undefined. Before estimating $\mathbb E[h(\theta)\mid y]$, ask whether $\int |h(\theta)|\pi(\theta\mid y)\,d\mu(\theta)$ is finite. A sampler can output a stream of numbers even when that mathematical expectation does not exist.

## 6. Worked example: a ridge hidden by a proper prior

Let $y_i\mid\alpha,\beta$ be conditionally independent $N(\alpha+\beta,1)$ observations. Take $n=4$ and sample mean $\bar y=2$. The likelihood depends only on $u=\alpha+\beta$:

$$
L(\alpha,\beta;y)\propto
\exp\left[-\frac{4}{2}(u-2)^2\right].
$$

The equality is up to a factor independent of $\alpha,\beta$, obtained by decomposing the sum of squared residuals around $\bar y$. Define $v=\alpha-\beta$. The inverse transformation is $\alpha=(u+v)/2$, $\beta=(u-v)/2$, with absolute Jacobian determinant $1/2$. Under a flat prior on the whole $(\alpha,\beta)$ plane, the posterior integral includes

$$
\frac12\int_{-\infty}^{\infty}
\int_{-\infty}^{\infty}
\exp[-2(u-2)^2]\,du\,dv=\infty.
$$

No amount of data from this same observation equation identifies $v$. Structural likelihood identifiability means distinct parameter values induce distinct distributions of possible observations. Here $(\alpha,\beta)$ and $(\alpha+c,\beta-c)$ induce exactly the same distribution for every $c$. This is stronger than ordinary uncertainty from having only four observations.

Now assign independent $N(0,1)$ priors to $\alpha$ and $\beta$. They induce independent $u,v\sim N(0,2)$. Combining the $u$ prior precision $1/2$ with the data precision $n=4$ gives

$$
u\mid y\sim N\left(\frac{4\cdot2}{4+1/2},\frac1{4+1/2}\right)
=N\left(\frac{16}{9},\frac29\right),\qquad
v\mid y\sim N(0,2),
$$

independently. Transforming back,

$$
\mathbb E[\alpha\mid y]=\mathbb E[\beta\mid y]=\frac89,
\quad \operatorname{Var}(\alpha\mid y)=\operatorname{Var}(\beta\mid y)=\frac59,
\quad \operatorname{Cov}(\alpha,\beta\mid y)=-\frac49.
$$

The negative covariance is the ridge's signature: increasing one intercept can be offset by decreasing the other. The proper prior makes the posterior proper, but the posterior distribution of $v$ is exactly its prior. It has regularized a nonidentified direction, not made that direction data identified. The sum $u$ is learned and can give a useful prediction. With an independent future observation having variance one, $y_{\mathrm{new}}\mid y\sim N(16/9,11/9)$. A histogram of $\alpha$ alone would hide much of this structure. The [Stan discussion of redundant intercepts](https://mc-stan.org/docs/stan-users-guide/problematic-posteriors.html) gives a broader account; [Chapter 16](16-geometry.md) returns to the resulting geometry. Mixture labels create a different symmetry, considered in [Chapter 38](38-mixtures.md).

Contrast this exact redundancy with an identifiable one-intercept model $y_i\sim N(u,1)$. Two distinct values of $u$ yield distinct sampling distributions, even if a small data set cannot locate $u$ precisely. As more independent observations arrive, the likelihood precision in $u$ grows with $n$. For the two-intercept model the same growth occurs only for $u$; the likelihood remains constant along $v$ for every $n$. This distinction matters when deciding whether collecting more of the same kind of data can resolve uncertainty. To learn $v$ from data, the observation process must distinguish the intercepts, perhaps through a second measurement that depends on them differently.

The geometry lab shows a separate funnel prior: independent $v\sim N(0,s^2)$ and $z\sim N(0,1)$ are transformed to $x=e^{v/2}z$. Increase **Scale of v** and compare the spread in centered $(v,x)$ and noncentered $(v,z)$ coordinates. The vertical plotting scales differ. These are direct independent draws from a prior, so this experiment illustrates coordinate geometry; it does not implement the two-intercept posterior or establish identifiability, propriety, or sampler performance.

<div class="mcmc-lab" data-lab="geometry"></div>

## 7. Joint targets and nuisance variables

Many models introduce an unobserved $z$ as well as the principal parameter $\theta$. With a specified conditional data model, latent model, and prior, the joint target is

$$
\pi(\theta,z\mid y)\propto p(y\mid\theta,z)p(z\mid\theta)p(\theta).
$$

The marginal distribution relevant to a question about $\theta$ is $\pi(\theta\mid y)=\int\pi(\theta,z\mid y)\,dz$, or a sum if $z$ is discrete. Marginalizing $z$ and conditioning on a chosen $z$ answer different questions. Replacing $z$ by its most likely value generally changes the target: it drops the uncertainty and, in effect, replaces a sum by one selected term.

For a small example, let $z\in\{0,1\}$ with $P(z=1\mid\theta)=w(\theta)$, and suppose $y\mid z,\theta$ has density $f_z(y\mid\theta)$. Then

$$
p(y\mid\theta)=[1-w(\theta)]f_0(y\mid\theta)+w(\theta)f_1(y\mid\theta).
$$

One may work with this mixture likelihood or with the joint target in $(\theta,z)$; integrating the joint target recovers the same marginal posterior for $\theta$. Using $\max\{f_0,f_1\}$ in place of the weighted sum changes the target and need not even define a normalized sampling density in $y$. To turn that maximum into a sampling density requires its own integral over $y$, which may depend on $\theta$. [Chapter 10](10-gibbs.md) will use joint targets to derive conditional updates. The arrows in a generative diagram indicate probabilistic dependence; by themselves they do not establish a causal interpretation.

## 8. One posterior, different coordinates

Suppose we want to represent the beta posterior of Section 4 on the whole real line. Set $\eta=\log[p/(1-p)]$ and $p(\eta)=1/(1+e^{-\eta})$. Since $dp/d\eta=p(1-p)$, the density relative to Lebesgue measure in $\eta$ is

$$
\pi_\eta(\eta\mid y)
=\pi_p(p(\eta)\mid y)p(\eta)[1-p(\eta)].
$$

For $p\mid y\sim\operatorname{Beta}(A,B)$, its logit-coordinate kernel is $p(\eta)^A[1-p(\eta)]^B$. The powers increased from $A-1,B-1$ because density depends on the chosen coordinate and measure, even while probabilities of corresponding events remain the same. For the $\operatorname{Beta}(9,5)$ example, omitting the Jacobian and normalizing $p(\eta)^8[1-p(\eta)]^4$ as an $\eta$ density would induce a $\operatorname{Beta}(8,4)$ distribution on $p$: the wrong target. The [Stan change-of-variables guide](https://mc-stan.org/docs/stan-users-guide/reparameterization.html) discusses this distinction in computational models.

If we have already drawn $p$ from its posterior, converting each draw to $\eta$ needs no weights. The Jacobian enters when expressing or evaluating a *density* in new coordinates. Also, assigning a fresh normal prior to $\eta$ is generally a new prior for $p$, not a coordinate rewrite of the beta prior. The distinction matters when comparing parameterizations or writing software that silently transforms constrained variables.

There is a useful consistency check: an interval $I$ on the logit scale must have the same posterior probability as its corresponding interval $p(I)$ on the probability scale. If a transformed density gives different probabilities, either the Jacobian direction or the support has been mishandled. Densities at individual points need not be equal across coordinates, because the width represented by one unit of $\eta$ varies with $p$. Near zero or one, a short interval in $p$ can correspond to a wide interval in $\eta$. This explains why comparing density heights across parameterizations can be misleading even when both formulas represent the same posterior law.

## 9. Predictive distributions integrate uncertainty

For a future observation $y_{\mathrm{new}}$ conditionally independent of the observed data given $\theta$, under the same sampling design,

$$
p(y_{\mathrm{new}}\mid y)
=\int p(y_{\mathrm{new}}\mid\theta)\pi(\theta\mid y)\,d\theta.
$$

If old and new observations remain coupled through a latent state or history even after conditioning on $\theta$, replace the inner factor by $p(y_{\mathrm{new}}\mid\theta,y)$ and integrate any relevant latent state as well. The simulation version is simple: draw $\theta$ from its posterior, then draw a new observation conditionally on that draw. The [Stan posterior prediction guide](https://mc-stan.org/docs/stan-users-guide/posterior-prediction.html) describes the same two-stage construction.

Return to $p\mid y\sim\operatorname{Beta}(9,5)$ and ask how many successes $K$ will occur in $m=5$ new conditionally independent trials. Integrating the binomial mass against the beta posterior gives the beta-binomial law

$$
P(K=k\mid y)=\binom5k\frac{B(9+k,5+5-k)}{B(9,5)},
\qquad k=0,\ldots,5,
$$

where $B(A,B)=\int_0^1p^{A-1}(1-p)^{B-1}\,dp$. Its mean is $5(9/14)=45/14\approx3.214$. By total variance,

$$
\operatorname{Var}(K\mid y)
=\mathbb E[5p(1-p)\mid y]+\operatorname{Var}(5p\mid y)
=\frac{5\cdot9\cdot5(14+5)}{14^2(14+1)}
=\frac{4275}{2940}\approx1.454.
$$

Substituting the posterior mean into a single $\operatorname{Binomial}(5,9/14)$ distribution preserves the mean but yields variance $5(9/14)(5/14)=225/196\approx1.148$. The mixture is more dispersed because $p$ can differ across possible futures. This gap is parameter uncertainty, not Monte Carlo error. A future-data prediction differs from a replicated-data check of model fit; [Chapter 17](17-workflow.md) develops the latter.

The five future trials are independent conditional on a drawn $p$, but positively associated in the predictive distribution because they share that draw. If one simulated a fresh posterior $p$ separately for every trial in the same batch, the batch would instead have the plug-in binomial law and lose the excess variation. The simulation must therefore draw one $p$ *per batch*, then generate all five outcomes given that value. This small implementation detail is a direct consequence of the model's conditional-independence structure, and is a useful check on any predictive program.

The companion [Python example](examples/ch03.py) prints the exact probabilities and illustrates the two-stage simulation. Its finite simulation differences are illustrative only; [Chapter 05](05-monte-carlo.md) develops sampling error calculations.

## 10. A target audit before choosing an algorithm

Write down the following for any proposed posterior: the observed data object and design; each conditional independence assumption; parameter and latent-variable support; reference measure; log likelihood and log prior with their parameter-dependent normalizers; and the coordinate system in which these expressions are densities. Then give a propriety argument or state which part still needs one. Finally name the actual estimand, such as $P(p>0.7\mid y)$, $\mathbb E[p\mid y]$, or a predictive tail probability, and check that its expectation exists when relevant.

For the binary example, such a specification is concrete: the observation is seven successes in ten conditionally independent trials; the parameter is $0<p<1$ with reference measure $dp$; and the log likelihood and log prior kernels are $7\log p+3\log(1-p)$ and $\log p+\log(1-p)$. Both posterior shapes are positive, so the normalizing integral is finite and nonzero. If software samples $\eta=\operatorname{logit}(p)$ instead, its support is $\mathbb R$, its measure is $d\eta$, and its log target becomes $9\log p(\eta)+5\log[1-p(\eta)]$. The estimand $\mathbb E[p\mid y]$ uses the bounded function $p(\eta)$ on these draws, and its exact answer $9/14$ supplies a calibration check. This specification fixes the target before any transition rule is chosen.

These entries locate three different failures. A model may make unrealistic assumptions about the observation process. A numerical method may approximate a valid intended posterior poorly. A finite run may estimate a posterior quantity imprecisely even if its algorithm is exact in the invariant-distribution sense. A smooth histogram, an optimizer result, or a passing diagnostic proves none of the assumptions and cannot establish $Z(y)<\infty$. Later chapters will address computational reliability; the scientific model still requires scrutiny of its own.

**Key takeaways.** A posterior is a normalized density relative to a specified measure, with an explicit support and finite positive normalizer. Priors affect both propriety and inference, particularly in directions the likelihood does not identify. Coordinate changes require a Jacobian in density calculations. Predictions average over posterior uncertainty, and a useful target specification includes the question being estimated as well as the distribution being sampled.

## Exercises

<div class="exercise" id="mcmc-03-bayesian-targets-ex-1">

1. **Likelihood bookkeeping.** Derive the log likelihood for independent $N(\mu,\sigma^2)$ observations when both $\mu$ and $\sigma>0$ are unknown. Which terms can be dropped from a posterior kernel?

<details>
<summary>Solution</summary>

The product of normal densities gives $-\frac n2\log(2\pi)-n\log\sigma-\frac{1}{2\sigma^2}\sum_i(y_i-\mu)^2$. Only $-\frac n2\log(2\pi)$ is independent of both unknown parameters. It can be dropped for within-model sampling, provided the full constant is restored for a marginal-likelihood calculation.

</details>

</div>

<div class="exercise" id="mcmc-03-bayesian-targets-ex-2">

2. **Endpoint propriety.** Under the Haldane prior $q_0(p)\propto[p(1-p)]^{-1}$, classify the posterior after $s=0$, $0<s<n$, and $s=n$ successes, for $n>0$.

<details>
<summary>Solution</summary>

The posterior kernel is $p^{s-1}(1-p)^{n-s-1}$. It is integrable exactly when both $s>0$ and $n-s>0$, yielding $\operatorname{Beta}(s,n-s)$ for interior counts. At $s=0$ it diverges logarithmically near zero; at $s=n$ it diverges logarithmically near one.

</details>

</div>

<div class="exercise" id="mcmc-03-bayesian-targets-ex-3">

3. **Logit target.** Transform a $\operatorname{Beta}(9,5)$ density on $p$ to $\eta=\log[p/(1-p)]$. What distribution on $p$ results if one uses the original beta kernel as a density in $\eta$ and normalizes it there?

<details>
<summary>Solution</summary>

Because $dp/d\eta=p(1-p)$, the correct $\eta$ kernel is $p^9(1-p)^5$. Omitting this factor uses $p^8(1-p)^4$ in $\eta$; transforming it back divides by $p(1-p)$, giving $p^7(1-p)^3$, the $\operatorname{Beta}(8,4)$ density.

</details>

</div>

<div class="exercise" id="mcmc-03-bayesian-targets-ex-4">

4. **Prediction versus substitution.** Calculate the mean and variance of the five-trial beta-binomial prediction in Section 9 and compare it with $\operatorname{Binomial}(5,9/14)$. Explain the difference by conditional variance.

<details>
<summary>Solution</summary>

Both means are $45/14$. The beta-binomial variance is $4275/2940=285/196\approx1.454$, whereas the plug-in variance is $225/196\approx1.148$. The difference is $60/196=15/49$. Indeed $\operatorname{Var}(K)=\mathbb E[\operatorname{Var}(K\mid p)]+\operatorname{Var}(\mathbb E[K\mid p])$; the second term $25\operatorname{Var}(p)=75/196$ is partly offset by $\mathbb E[p(1-p)]<\mathbb E[p](1-\mathbb E[p])$, leaving an excess $m(m-1)\operatorname{Var}(p)=20(3/196)=60/196$.

</details>

</div>

<div class="exercise" id="mcmc-03-bayesian-targets-ex-5">

5. **What did the data identify?** In Section 6 replace each $N(0,1)$ intercept prior by $N(0,\tau^2)$, with fixed finite $\tau>0$. Find the posterior variance of $v=\alpha-\beta$ and the posterior precision of $u=\alpha+\beta$ for $n$ observations of known unit variance.

<details>
<summary>Solution</summary>

The independent priors induce $u,v\sim N(0,2\tau^2)$. The likelihood depends only on $u$, so $v\mid y\sim N(0,2\tau^2)$ and its variance does not shrink with $n$. The posterior precision of $u$ is $n+1/(2\tau^2)$, with mean $n\bar y/[n+1/(2\tau^2)]$. Finite $\tau$ ensures a proper posterior, while the unchanged $v$ law shows the likelihood remains nonidentifiable.

</details>

</div>

<div class="exercise" id="mcmc-03-bayesian-targets-ex-6">

6. **A valid law with an invalid mean.** A parameter $\gamma$ is absent from the likelihood and has a standard Cauchy prior independent of all other parameters. Assume the posterior for those other parameters is proper. What is its posterior? Does $\mathbb E[\gamma\mid y]$ exist?

<details>
<summary>Solution</summary>

The likelihood is constant in $\gamma$, so its proper posterior is its standard Cauchy prior (assuming no other prior dependence on $\gamma$). Its median is zero and its density is symmetric, but $\int |\gamma|/[\pi(1+\gamma^2)]\,d\gamma=\infty$. Thus the ordinary posterior mean is undefined; symmetry does not make the divergent positive and negative parts cancel into an expectation.

</details>

</div>

<div class="exercise" id="mcmc-03-bayesian-targets-ex-7">

7. **Known missing counts.** Consider a fixed cohort of five independent exponential durations with rate $\lambda$. Three exact durations are $(3,4,5)$; for the other two, only $T\leq2$ is recorded. With the $\operatorname{Gamma}(2,1)$ prior from Section 2.1, derive the posterior kernel. Explain why the truncated likelihood from that section is insufficient and show that the new posterior is proper.

<details>
<summary>Solution</summary>

Each exact duration contributes $\lambda e^{-\lambda t_i}$, and each censored duration contributes $P(T\leq2\mid\lambda)=1-e^{-2\lambda}$. Thus the likelihood is proportional to $\lambda^3e^{-12\lambda}(1-e^{-2\lambda})^2$ and the posterior kernel is $\lambda^4e^{-13\lambda}(1-e^{-2\lambda})^2$ on $\lambda>0$. If only the count of censored subjects is retained, a combinatorial factor may also appear; it is independent of $\lambda$. Equivalently, multiply the three truncated densities by the retention-pattern probability $e^{-6\lambda}(1-e^{-2\lambda})^2$ to recover this likelihood. The fixed cohort reveals that two events were below threshold, whereas Section 2.1 conditions on having obtained three retained values. The kernel is positive and bounded above by $\lambda^4e^{-13\lambda}$, whose integral is $4!/13^5$, so the posterior is proper. It is not a gamma density because of the additional factor.

</details>

</div>

## Sources and further reading

- [Stan User’s Guide: Problematic Posteriors](https://mc-stan.org/docs/stan-users-guide/problematic-posteriors.html), for redundant parameters, ridges, and the distinction between proper posteriors and difficult inference.
- [Stan User’s Guide: Reparameterization and Change of Variables](https://mc-stan.org/docs/stan-users-guide/reparameterization.html), for densities under transformations.
- [Stan User’s Guide: Posterior Predictive Sampling](https://mc-stan.org/docs/stan-users-guide/posterior-prediction.html), for predictive integration and simulation.
- [Stan User’s Guide: Truncated or Censored Data](https://mc-stan.org/docs/stan-users-guide/truncation-censoring.html), for conditional observation laws and likelihood contributions from censored events.
- [Gelman et al., Bayesian Workflow](https://arxiv.org/abs/2011.01808), for the broader model-building and checking perspective.
