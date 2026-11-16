
# Generative Stories and Observation Laws

Preparation is the primary [Bayesian Inference course](#/books/bayesian/course-syllabus), probability with conditional expectation, and the preceding modeling chapter when one is listed. Computational algorithms continue in [MCMC Volume 1](#/books/mcmc/01-probability-computation).


Bayesian inference is often introduced as a formula: posterior proportional to likelihood times prior. That formula is correct, but it is not a modeling strategy. Before any computation, we need a generative story---an explicit description of how the data could have been produced. This chapter establishes the notation, the basic structure of Bayesian models, and the habit of writing simulators before writing estimators.

## The posterior as a conditional density

Let observed data be $y$, unknown parameters be $\theta$, and fixed modeling choices be $M$. Specify the support and reference measures for the prior and likelihood. With a proper prior and a finite positive marginal likelihood, $0<p(y\mid M)<\infty$, Bayes' theorem gives the posterior density

$$\pi(\theta \mid y, M) = \frac{p(y \mid \theta, M) \, \pi(\theta \mid M)}{p(y \mid M)},$$

where the marginal likelihood

$$p(y \mid M) = \int p(y \mid \theta, M) \, \pi(\theta \mid M) \, d\theta$$

normalizes the density so that it integrates to one over the parameter space. For inference within a single model, algorithms often need only the unnormalized target

$$\pi(\theta \mid y) \propto p(y \mid \theta) \, \pi(\theta).$$

The normalizing constant $p(y \mid M)$ becomes important only when comparing models or when the posterior itself is required as a proper density for downstream calculations such as Bayesian model averaging.

The posterior is a conditional probability distribution. It updates our beliefs about $\theta$ after observing $y$. The prior $\pi(\theta)$ encodes what we knew before seeing data; the likelihood $p(y \mid \theta)$ encodes how probable the observed data would be under different parameter values. The marginal likelihood $p(y \mid M)$ averages the likelihood over the prior, measuring how well the model predicted the data before it was observed.

## Writing the generative story

A generative story answers concrete questions before any density is written:

- Which variables are observed and which are latent?
- What conditional independences are claimed?
- What scale does each parameter inhabit?
- What missingness or selection mechanisms led to the observed $y$?

A directed acyclic graph can help visualize these relationships, but an equivalent text specification must list every distribution and every conditioning relation. If the graph and the text disagree, the text is authoritative until the discrepancy is resolved.

Consider a simple example. We observe $n\ge1$ counts $y_{1}, \dots, y_{n}$ in $\{0,1,2,\dots\}$ and model them as conditionally independent Poisson counts with rate $\lambda>0$. Fix finite hyperparameters $a>0$ and $b>0$. The generative story is:

1. Draw $\lambda \sim \operatorname{Gamma}(a, b)$ using rate parameter $b$.
2. For $i = 1, \dots, n$, independently draw $y_{i} \sim \operatorname{Poisson}(\lambda)$.

This story makes explicit that the $y_{i}$ are conditionally independent given $\lambda$, that $\lambda$ is positive, and that the prior is chosen from the gamma family. A different story---for example, one in which the counts are overdispersed relative to Poisson---would require a different likelihood or a hierarchical expansion.

The generative story also forces us to think about the sampling mechanism. Were the $n$ observations fixed in advance, or did we stop collecting data when a budget ran out? Different sampling plans can give proportional likelihoods for the same observed successes and failures, and hence the same posterior under a common prior. Selection or stopping mechanisms that contribute parameter-dependent factors must be included; a different sampling distribution alone does not establish a different posterior.

## Working on the log scale

In practice, we almost always work with the log posterior:

$$\log \pi(\theta \mid y) = \log p(y \mid \theta) + \log \pi(\theta) + \text{constant}.$$

Products of small densities underflow in floating-point arithmetic. A likelihood of $10^{-300}$ for each of $100$ observations would underflow to zero in standard double precision, even though the product is perfectly representable in log space. Adding log densities avoids product underflow, but individual evaluations and summation still require numerical-stability checks. For a model with $n$ conditionally independent observations, the log likelihood is a sum:

$$\log p(y \mid \theta) = \sum_{i=1}^{n} \log p(y_{i} \mid \theta).$$

This additive structure is exploited by automatic differentiation libraries and by gradient-based samplers such as Hamiltonian Monte Carlo. The gradient of the log posterior decomposes into a sum of per-observation gradients plus the prior gradient, making parallel computation straightforward.

## Changes of variables and Jacobians

Constraints require care. Suppose a standard deviation $\sigma$ is originally modeled with a density with respect to $d\sigma$. If we reparameterize to $\eta = \log \sigma$, the density with respect to $d\eta$ includes the Jacobian:

$$\pi_{\eta}(\eta) = \pi_{\sigma}(\exp(\eta)) \cdot \left\lvert \frac{d\sigma}{d\eta} \right\rvert = \pi_{\sigma}(\exp(\eta)) \cdot \exp(\eta).$$

No extra Jacobian should be added when the prior was specified directly on $\eta$. Some probabilistic programming systems insert the required term automatically; others require the user to supply it. The safe practice is to write the generative story on the scale where the prior is defined, then verify that any transformation used for computation carries the correct Jacobian.

**Example: a scale prior.** Start with the improper prior kernel $\pi(\sigma) \propto \sigma^{-1}$ on $\sigma>0$, with respect to $d\sigma$. On the log scale, $\eta = \log \sigma$ has kernel $\pi_{\eta}(\eta) \propto \exp(-\eta) \cdot \exp(\eta) = 1$, with respect to $d\eta$. This is an improper uniform kernel on $\mathbb{R}$, not a probability density that integrates to one. In any model using this prior, the likelihood-times-prior integral must be finite and positive before it defines a posterior.

## Worked example: Poisson-Gamma conjugacy

Let $n\ge1$ be an integer and let the observed $y_i$ be nonnegative integers. Conditional on $\lambda>0$, take the $y_i$ to be independent $\operatorname{Poisson}(\lambda)$ observations for $i=1,\dots,n$. Use the proper prior $\lambda\sim\operatorname{Gamma}(a,b)$ with finite shape $a>0$ and rate $b>0$. The likelihood kernel is

$$p(y \mid \lambda) \propto \lambda^{\sum_{i=1}^{n} y_{i}} \exp(-n\lambda).$$

The prior kernel is

$$\pi(\lambda) \propto \lambda^{a-1} \exp(-b\lambda).$$

Multiplying and collecting terms,

$$\pi(\lambda \mid y) \propto \lambda^{a + \sum y_{i} - 1} \exp\bigl(-(b + n)\lambda\bigr),$$

which is the kernel of $\operatorname{Gamma}\bigl(a + \sum y_{i}, \, b + n\bigr)$. The posterior mean is

$$\mathbb{E}[\lambda \mid y] = \frac{a + \sum y_{i}}{b + n}.$$

This can be read as a weighted average between the prior mean $a/b$ and the sample mean $\bar{y} = (\sum y_{i})/n$, with weights $b$ and $n$ respectively. As $n \to \infty$, the posterior concentrates at the sample mean; for small $n$, the prior exerts noticeable pull.

**Exact normalization check.** With $a = 3$, $b = 1$, and observations $y = (3, 5, 2, 4)$, we have $\sum y_{i} = 14$ and $n = 4$. The posterior is $\operatorname{Gamma}(17, 5)$ with mean $17/5=3.4$ and variance $17/5^2=0.68$. Under the rate convention, its kernel is $\lambda^{16}e^{-5\lambda}$ and

$$\int_0^\infty \lambda^{16}e^{-5\lambda}\,d\lambda
=\frac{\Gamma(17)}{5^{17}}.$$

Therefore the exact normalizing constant is $5^{17}/\Gamma(17)$. This identity is a reproducible benchmark; any numerical quadrature can be compared against it with its algorithm, precision, and error criterion reported.


## Extended example: a hierarchical generative story

Consider a clinical trial with $J = 10$ hospitals. In each hospital $j$, we observe the number of successful recoveries $y_{j}$ out of $n_{j}$ patients. A complete generative story might be:

1. Draw the population log-odds $\alpha \sim \mathcal{N}(0, 2^{2})$.
2. Draw the population standard deviation $\tau \sim \operatorname{Half-Cauchy}(0, 5)$.
3. For each hospital $j = 1, \dots, J$:
   a. Draw the hospital-specific deviation $u_{j} \sim \mathcal{N}(0, \tau^{2})$.
   b. Set $p_{j} = \operatorname{logit}^{-1}(\alpha + u_{j})$.
   c. Draw $y_{j} \sim \operatorname{Binomial}(n_{j}, p_{j})$.

This story makes explicit that the $y_{j}$ are conditionally independent given $(\alpha, \tau, u_{j})$, that the $u_{j}$ are exchangeable, and that the $p_{j}$ are constrained to $(0, 1)$ via the logit link. It also reveals that the prior on $\tau$ allows substantial between-hospital variation but penalizes extreme values gently.

## Stopping rules and the likelihood principle

The likelihood principle says that proportional likelihood functions carry the same evidence about $\theta$. With the same prior, multiplying a likelihood by a positive constant independent of $\theta$ leaves the posterior unchanged. We must still model relevant selection and stopping mechanisms; the point is to check whether they contribute a parameter-dependent factor.

For independent Bernoulli trials with success probability $p$, compare a fixed sample size $n$ yielding $r$ successes with stopping at the $r$th success on trial $n$, where $1\le r\le n$. The respective likelihoods for these recorded counts are

$$L_{\mathrm{fixed}}(p)=\binom{n}{r}p^r(1-p)^{n-r},
\qquad L_{\mathrm{stop}}(p)=\binom{n-1}{r-1}p^r(1-p)^{n-r}.$$

Their ratio is $n/r$, independent of $p$. Thus a common $\operatorname{Beta}(a,b)$ prior gives the same $\operatorname{Beta}(a+r,b+n-r)$ posterior in both experiments. Their repeated-sampling properties can still differ. This calculation concerns the stated stopping protocol and observed data; it does not justify ignoring unobserved selection or a parameter-dependent reporting mechanism.

## The role of simulation

Before fitting any model, simulate data from the generative story with plausible parameter values. Inspect the simulated data: are the scales reasonable? Are the correlations plausible? Does the model generate the kinds of patterns we expect to see in real data? Simulation reveals misspecification before any computation begins.

**Example.** To make a prior-predictive audit reproducible, suppose a hypothetical weekly counting domain requires $P(\lambda>100)\le10^{-4}$ and $P(Y=0)\le0.2$. Under the shape-rate $\operatorname{Gamma}(0.01,0.01)$ prior, the exact rate-tail probability exceeds $e^{-2}/202>10^{-4}$ and the predictive zero probability is $101^{-0.01}>0.95$; the prior fails these declared criteria. The proper alternative $\operatorname{Gamma}(3,1)$ has rate-tail probability $5101e^{-100}$ and predictive zero probability $1/8$, satisfying both criteria. The appended public companion specifies an independent simulation comparison; no run outcome or universal domain judgment is asserted here.


## Prior elicitation

Choosing a prior is not arbitrary guesswork. Prior elicitation is the process of translating background knowledge into a probability distribution. Common methods include:

- **Direct quantile elicitation:** Ask experts for quantiles of the parameter distribution and fit a parametric family.
- **Predictive elicitation:** Ask experts for predictions of observable quantities and infer the implied prior on parameters.
- **Empirical Bayes:** Use the data to estimate hyperparameters, though this ignores uncertainty in the hyperparameters.
- **Reference priors:** Choose priors that maximize some measure of information gain, producing objective but often improper distributions.

**Example: elicitation for a Poisson rate.** Distinguish uncertainty about the latent weekly rate from variation in a future count. A desired prior rate mean $5$ and rate standard deviation $2$ imply the shape-rate prior $\operatorname{Gamma}(25/4,5/4)$, whose one-week predictive count has mean $5$ and standard deviation $3$. A $\operatorname{Gamma}(6,1.2)$ rate prior instead has rate variance $25/6$ and predictive count variance $55/6$. A mixed-Poisson predictive count with mean $5$ cannot have standard deviation $2$, since its variance is at least its mean.

## Sensitivity analysis

A Bayesian analysis is incomplete without sensitivity analysis. Report how posterior inferences change under alternative priors. A common approach is to vary the prior hyperparameters over a plausible range and report the range of posterior quantities.

For a hierarchical model, sensitivity analysis should include:
- Alternative priors on the population scale $\tau$.
- Alternative priors on the population mean $\mu$.
- Different numbers of groups or different group definitions.

Stability supports robustness only over the alternatives actually tested. It does not by itself show that the likelihood is informative: several similar priors can produce similar prior-driven posteriors when data are weak. Material changes do establish sensitivity over that tested set. Report the likelihood information, prior-to-posterior change, and sensitivity range separately rather than inferring one from the other.

## Common errors

- **Forgetting the normalizing constant in model comparison.** The unnormalized posterior suffices for inference within one model, but Bayes factors and posterior model probabilities require $p(y \mid M)$.
- **Confusing rate and scale parameterizations.** The gamma distribution is parameterized by shape and rate in some software and by shape and scale in others. Scale is the reciprocal of rate. Always state the convention explicitly.
- **Ignoring the Jacobian after reparameterization.** A log-transform of a positive parameter changes the measure. Omitting the Jacobian leads to a different posterior.
- **Writing the likelihood before the generative story.** The story determines which variables are random, which are fixed, and what independences hold. Starting with a formula risks encoding unstated assumptions.
- **Treating the prior as a nuisance.** The prior is part of the model. Different priors can lead to different conclusions, especially with small samples. Always report the prior and perform sensitivity analysis.

## Earlier worked questions

The original question identities, statements and complete answers remain in [the original complete exercise companion](retained-source-begin-with-the-generative-story.md). The further exercises below supply the present chapter’s staged practice.

## Constructing the likelihood from the generative story

Given a generative story, the likelihood is the joint distribution of the observed data given the parameters. For conditionally independent observations, the likelihood factors:

$$p(y \mid \theta) = \prod_{i=1}^{n} p(y_{i} \mid \theta).$$

This factorization is not automatic; it depends on the conditional independences claimed in the generative story. If observations are correlated---for example, time series data or spatial data---the likelihood does not factor, and the correlation structure must be modeled explicitly.

**Example: correlated errors.** Suppose $y_{i} = f(x_{i}; \theta) + \epsilon_{i}$ where $\epsilon_{i}$ are not independent but follow an autoregressive process $\epsilon_{i} = \rho \epsilon_{i-1} + \eta_{i}$ with $\eta_{i} \sim \mathcal{N}(0, \sigma^{2})$. The likelihood is multivariate normal with a covariance matrix that depends on $\rho$ and $\sigma^{2}$. Ignoring the correlation and using a product of univariate normals produces a misspecified likelihood and invalid inferences.

## Missing data mechanisms

The generative story must also specify how missing data arose. Rubin's taxonomy distinguishes three mechanisms:

- **Missing completely at random (MCAR):** The missingness is independent of both observed and missing data.
- **Missing at random (MAR):** The missingness depends on observed data but not on missing data.
- **Missing not at random (MNAR):** The missingness depends on the missing data themselves.

MAR alone does not make a missingness mechanism ignorable. Let $\theta$ index
the data model and $\psi$ index the missingness model. Likelihood inference
may omit the missingness factor when the mechanism is MAR for the realized
missingness pattern **and** the parameter spaces for $\theta$ and $\psi$ are
distinct (variation independent), provided the likelihood for $\theta$ is the
correct observed-data likelihood obtained by integrating over missing values.
MCAR is a stronger special case, not an independent shortcut around these
requirements. For Bayesian posterior inference about $\theta$, the usual
ignorability result additionally requires a prior factorization such as
$\pi(\theta,\psi)=\pi(\theta)\pi(\psi)$. Under MNAR, or when these distinctness
conditions fail, the missingness mechanism generally must be modeled jointly
with the data. The generative story makes each assumption explicit.

**Example.** In a survey of income, high-income respondents may be less likely to respond. If income is the missing variable and non-response depends on income itself, the mechanism is MNAR. A model that ignores this selection will underestimate the income distribution's upper tail.


## Connections

This chapter introduced the foundational structure of Bayesian models: the generative story, the log-scale computation, and the Jacobian under reparameterization. Continue to [Prior-predictive Audits and Observation Mechanisms](generative-prior-predictive-audits.md), then the exact conjugate chapters.
## A joint law specifies more than a likelihood kernel

A generative story becomes a probability model when every random object has a domain and a conditional law. For a parameter $\theta\in\Theta$ and an observation $Y\in\mathcal Y$, write a prior probability measure $\Pi(d\theta)$ and a conditional sampling kernel $P_\theta(dy)$. The joint law is $\Pi(d\theta)P_\theta(dy)$. Drawing from that joint law means drawing the parameter first and then drawing the observation conditionally; it does not mean that parameters and observations are independent.

When densities exist, choose their sigma-finite reference measures before multiplying them. With a prior density $\pi$ relative to a measure $\nu$ on $\Theta$ and a likelihood density $f_\theta$ relative to a common measure $\mu$ on $\mathcal Y$, the joint density relative to $\nu(d\theta)\mu(dy)$ is $\pi(\theta)f_\theta(y)$. For counts, $\mu$ is counting measure and probabilities are point masses. For a real observation, $\mu$ may be Lebesgue measure and a density value is not a probability. Mixed data require an appropriate combination of measures, not a fictional continuous density for a discrete indicator.

For example, suppose a machine is inactive with probability $w$ and otherwise produces a Poisson count with rate $\lambda$. Draw $Z\sim\operatorname{Bernoulli}(1-w)$, then set $Y=0$ if $Z=0$ and draw $Y\sim\operatorname{Poisson}(\lambda)$ if $Z=1$. The observed-data probabilities are
$$
P(Y=0\mid w,\lambda)=w+(1-w)e^{-\lambda},\qquad
P(Y=k\mid w,\lambda)=(1-w)e^{-\lambda}\lambda^k/k!\quad(k\ge1).
$$
A zero can arise through either path. Replacing its probability by $w$ alone would throw away a valid path in the generative story. Conditioning on the unobserved $Z$ gives a simpler law, but that is not the likelihood of the actually observed count.

Support is part of the same specification. A Beta prior lives on $0<p<1$; an inverse-gamma variance lives on $v>0$; Poisson observations are nonnegative integers. A formula evaluated outside its support represents zero probability or an invalid input, depending on the computational interface. Taking a logarithm before checking support can turn a meaningful zero likelihood into an unexplained numerical error.

Conditional independence is also a model assertion. In the Poisson example, several counts can be independent given one shared $\lambda$ but dependent after it is integrated out. Drawing a separate rate for every observation is a different joint law, even if each individual count has the same marginal distribution. A simulator and a likelihood must use the same version of that choice.

This gives a useful sequence of questions before computation: what is random, what is observed, what is conditioned on, what measure defines each density, and which latent paths must be summed or integrated? The answers identify the likelihood. An algebraically attractive kernel cannot answer them afterward. Later hierarchical and mixture models reuse exactly this distinction, with more latent objects rather than a different meaning of probability.

## Proper priors and almost-everywhere posterior normalization

With the dominated joint model above, define $m(y)=\int f_\theta(y)\pi(\theta)\,\nu(d\theta)$. At an observation satisfying $0<m(y)<\infty$, dividing the joint density by $m(y)$ produces a nonnegative posterior density that integrates to one. Both inequalities matter. If $m(y)=0$, the ratio is undefined; if $m(y)=\infty$, no finite constant normalizes that kernel.

A proper prior does imply a useful almost-everywhere fact. Nonnegativity permits Tonelli's theorem:
$$
\int m(y)\,\mu(dy)
=\int\pi(\theta)\left[\int f_\theta(y)\,\mu(dy)\right]\nu(d\theta)=1.
$$
Thus $m(y)$ is finite for $\mu$-almost every $y$. This does not promise finiteness at every arbitrarily chosen point, and it does not make a zero predictive-density observation have a uniquely specified density-ratio posterior. Conditional distributions are defined up to predictive-null sets. A version can be assigned there, but the ratio alone does not determine it.

An exact example makes the boundary visible. Let $\theta$ have the uniform prior on $(0,1)$ and let $Y\mid\theta$ be uniform on $(0,\theta)$. Relative to $d\theta\,dy$, the joint density is $\theta^{-1}\mathbf1\{0<y<\theta<1\}$. For $0<y<1$,
$$
m(y)=\int_y^1\frac{d\theta}{\theta}=-\log y,\qquad
\pi(\theta\mid y)=\frac{\mathbf1\{y<\theta<1\}}{\theta(-\log y)}.
$$
Integrating the latter over $\theta$ gives one. At $y=1$, the displayed predictive density is zero. Replacing $0<y$ by $0\le y$ changes no conditional probability law, but that equally valid density version has a divergent marginal integral at the boundary $y=0$. Both observations belong to null sets under the continuous predictive law. This is compatible with the proper joint distribution, not a contradiction to Bayes' theorem.

The same example gives a checkable posterior quantity:
$$
E[\theta\mid y]=\frac{1-y}{-\log y}\qquad(0<y<1).
$$
The denominator arose from normalization and cannot be discarded when computing this expectation. Near $y=1$ the expression has a removable limiting behavior, but a numerical implementation should evaluate it with stable logarithmic functions rather than divide two inaccurately rounded small numbers.

Improper prior kernels require a separate analysis. An unspecified multiplicative constant may cancel in one proper posterior, yet it prevents an ordinary marginal probability of the data from being assigned without further conventions. Moreover, the likelihood-times-kernel integral can diverge. The earlier scale-prior example therefore needs a posterior-propriety argument for its actual likelihood; the phrase “flat on the log scale” is not that argument.

Finally, not every generative story has a common likelihood density of the assumed type. If $Y=\theta$ deterministically with a continuous prior, the conditional law is a point mass at $\theta$, not an ordinary Lebesgue density in $y$. One can still use the joint probability law and conditional distributions. What fails is an unjustified density representation, not probabilistic conditioning itself. This distinction prevents an algorithm from treating a symbolic Dirac mass as an ordinary function to be multiplied and integrated numerically.

## Observed-data likelihoods integrate latent and reporting paths

If the generative model contains an unobserved variable $Z$, the observed likelihood is $f_\theta(y)=\int f_\theta(y,z)\,dz$, with a sum replacing the integral for discrete labels. Conditioning on a convenient value of $Z$ changes the information being used. The zero-inflated count example above is a finite illustration: its observed zero probability is a sum over both labels, while its complete-data likelihood uses the actual label as well.

Reporting mechanisms can change that calculation. Suppose $Y\mid\lambda\sim\operatorname{Poisson}(\lambda)$ but a sampling design records only positive counts. If the recorded dataset is explicitly conditional on inclusion, then for $y\ge1$
$$
P(Y=y\mid Y>0,\lambda)
=\frac{e^{-\lambda}\lambda^y/y!}{1-e^{-\lambda}}
=\frac{\lambda^y}{y!(e^\lambda-1)}.
$$
The denominator depends on $\lambda$, so dropping it changes the posterior. If instead a fixed roster includes observed zero indicators for unreported units, the data contain additional information about the reporting events. That is a different observed-data likelihood; one must not exchange the two designs merely because the positive count values look identical.

A Bernoulli reporting example separates selection from a missing-value integral. Let $Y\sim\operatorname{Bernoulli}(p)$ with $0<p<1$, and let $P(R=1\mid Y=1)=q_1$, $P(R=1\mid Y=0)=q_0$, with positive known reporting probabilities. Among recorded observations,
$$
P(Y=1\mid R=1,p)=\frac{pq_1}{pq_1+(1-p)q_0}.
$$
This equals $p$ only when $q_1=q_0$. If a fixed original roster and its reporting indicators are known, a reported success contributes $pq_1$, a reported failure contributes $(1-p)q_0$, and an unreported record contributes $p(1-q_1)+(1-p)(1-q_0)$. The likelihood must describe whichever information was actually retained.

For ordinary missing data, the integral over the missing coordinates is indispensable even under an ignorability theorem. The chapter's earlier MAR statement also requires distinct parameter spaces and the relevant prior factorization. Those hypotheses permit a factor to be omitted in a specified posterior calculation; they do not permit missing coordinates to be replaced by zeros, or a complete-data product to be used as though every value had been seen.

Stopping rules provide another contrast. The earlier fixed-size and stop-at-the-$r$th-success likelihoods differ by a positive constant independent of $p$, so a common prior gives the same posterior. Their predictive event probabilities and repeated-sampling designs remain different. A parameter-dependent selection denominator, such as the one above, is not a harmless constant of that kind.

These examples show why a generative specification should include what is recorded, not just what occurs. Data aggregation, censoring, selection, latent labels and a stopping rule each define a map from a larger experiment to the observation. The correct likelihood is the distribution of that map. Checking whether the discarded paths contribute a parameter-dependent factor is a concrete calculation, rather than a blanket instruction always to ignore or always to model every mechanism in the same way.

## Stable log arithmetic still needs a numerical argument

Replacing a product by a sum of logarithms avoids one specific failure: many individually representable positive factors can have an unrepresentably small product. For $100$ factors each equal to $10^{-300}$, the log product is exactly $-30\,000\log10$ in real arithmetic. The factors need not first be multiplied to obtain it. Nevertheless, taking the logarithm of a factor that has already underflowed to zero loses the information before the transformation helps.

A stable implementation therefore evaluates a log density directly when possible. For a Poisson count, use $y\log\lambda-\lambda-\log\Gamma(y+1)$ rather than forming $\lambda^y e^{-\lambda}/y!$ and then logging. State the support: $y$ is a nonnegative integer and $\lambda>0$. The expression $0\log0$ at a limiting case needs an explicitly defined probability law, not a silent propagation of a floating-point NaN.

Mixtures require another operation because their probabilities add before logging. For finite real numbers $\ell_1,\ldots,\ell_K$, let $c=\max\ell_k$. Then
$$
\log\!\left(\sum_{k=1}^Ke^{\ell_k}\right)
=c+\log\!\left(\sum_{k=1}^Ke^{\ell_k-c}\right).
$$
Every exponent on the right is nonpositive, and at least one equals zero. Thus the sum is between $1$ and $K$, avoiding overflow of individual exponentials. If every component has log probability $-\infty$, the total is $-\infty$ and should be handled separately; subtracting $-\infty$ from itself is not the formula's finite-input case.

For instance, two component log probabilities $-1000,-1001$ give $-1000+\log(1+e^{-1})$. Directly exponentiating both can produce zeros, while the shifted expression preserves their relative contribution. The normalized component weights are $e^{\ell_k-c}/\sum_j e^{\ell_j-c}$. Differentiating the log sum gives a weighted average of component score vectors whenever the component functions are differentiable. This is the gradient of a mixture log likelihood, not the sum of the component log gradients.

Subtraction near one has a related issue. When $p$ is close to zero, an accurate value of $\log(1-p)$ should use an implementation intended for that operation, such as log1p applied to $-p$, rather than first rounding $1-p$ to one. For logit computations it is even better to evaluate both log probabilities from the unconstrained coordinate, as derived next, without first obtaining a rounded probability equal to zero or one.

Summing many log terms can still accumulate rounding error or suffer cancellation. Pairwise or compensated summation can help, and rescaling units can improve conditioning, but no transformation makes all numerical problems disappear. An exact symbolic identity, a stable evaluation strategy and a declared precision/error check are three different pieces of a computational argument. The public benchmarks retain analytic identities precisely so that numerical values can be checked without treating a plausible decimal as its own reference.


## Worked applications

### Worked example 1: a finite posterior

Prior probabilities of two states are $1/3,2/3$ and their observed-data probabilities are $1/2,1/4$. Both joint masses are $1/6$, so posterior masses are one-half each. The predictive normaliser is $1/3$; omitting it would leave joint masses rather than conditional probabilities.

### Worked example 2: a support conflict

A prior confined to positive rates gives zero posterior probability to negative rates under every valid likelihood. Data cannot create posterior mass outside prior support. This is a model restriction, not evidence that a forbidden physical state has been empirically disproved.

### Worked example 3: a recorded threshold

A known exponential waiting time reported only as exceeding three contributes $e^{-3\lambda}$. Its density at three, $\lambda e^{-3\lambda}$, describes an exact value instead and would add a spurious event-count factor.

## Further exercises

### Exercise 101
<a id="generative-stories-observation-laws-ex-101"></a>

Update prior odds two using likelihood ratio three.

<details>
<summary>Hint 1</summary>

Use odds form of Bayes.

</details>
<details>
<summary>Hint 2</summary>

Multiply independent model factors.

</details>
<details>
<summary>Solution</summary>

Posterior odds are six. Normalising gives probability $6/7$ for the favoured state. The ratio must compare likelihoods for the same recorded observation and protocol.

</details>

### Exercise 102
<a id="generative-stories-observation-laws-ex-102"></a>

Why must a posterior normaliser be finite and positive?

<details>
<summary>Hint 1</summary>

It defines a probability density.

</details>
<details>
<summary>Hint 2</summary>

Consider zero and infinite integrals.

</details>
<details>
<summary>Solution</summary>

A zero integral gives no conditional law through the displayed density formula; an infinite one cannot be normalized. Proportionality alone is insufficient to establish a posterior probability.

</details>

### Exercise 103
<a id="generative-stories-observation-laws-ex-103"></a>

With beta(2,3) prior and two successes in four trials, find the posterior.

<details>
<summary>Hint 1</summary>

Collect success and failure powers.

</details>
<details>
<summary>Hint 2</summary>

Add both counts to shapes.

</details>
<details>
<summary>Solution</summary>

The posterior is $\operatorname{Beta}(4,5)$ with mean $4/9$. Conditional independence and the fixed-trial observation law supplied the binomial kernel.

</details>

### Exercise 104
<a id="generative-stories-observation-laws-ex-104"></a>

Change a rate from per hour to per minute.

<details>
<summary>Hint 1</summary>

Preserve the expected count.

</details>
<details>
<summary>Hint 2</summary>

Exposure multiplies by sixty.

</details>
<details>
<summary>Solution</summary>

The numeric rate divides by sixty. Its log coordinate shifts down by $\log60$, and its transformed prior must shift as well to preserve the same physical model.

</details>

### Exercise 105
<a id="generative-stories-observation-laws-ex-105"></a>

Explain why conditioning on selection can change a likelihood.

<details>
<summary>Hint 1</summary>

The recorded sample is restricted.

</details>
<details>
<summary>Hint 2</summary>

Include its selection probability.

</details>
<details>
<summary>Solution</summary>

A truncated observation has its density divided by the probability of entering the sample. Omitting this parameter-dependent normaliser generally changes inference.

</details>

### Exercise 106
<a id="generative-stories-observation-laws-ex-106"></a>

Does a proper prior guarantee every pointwise posterior density formula works?

<details>
<summary>Hint 1</summary>

Use the prior predictive law.

</details>
<details>
<summary>Hint 2</summary>

Null data can be exceptional.

</details>
<details>
<summary>Solution</summary>

Proper joint probabilities give conditional laws almost everywhere, but a displayed density ratio still needs a positive finite normaliser at the observed point. Exceptional null observations need separate treatment.

</details>

### Exercise 107
<a id="generative-stories-observation-laws-ex-107"></a>

Distinguish parameter and data Jacobians.

<details>
<summary>Hint 1</summary>

Identify the transformed measure.

</details>
<details>
<summary>Hint 2</summary>

Ask what is held fixed.

</details>
<details>
<summary>Solution</summary>

A parameter transformation changes the posterior density's reference coordinates. A data transformation changes the observation density; its parameter-independent factor may cancel within a posterior but matters for a correctly specified observation law.

</details>

### Exercise 108
<a id="generative-stories-observation-laws-ex-108"></a>

Why is one latent draw per whole replicated dataset important?

<details>
<summary>Hint 1</summary>

Rows can share a parameter.

</details>
<details>
<summary>Hint 2</summary>

Marginalising creates dependence.

</details>
<details>
<summary>Solution</summary>

Drawing a new parameter independently for each row removes the shared uncertainty and changes the model. The whole dataset should retain its declared latent sharing structure.

</details>

### Exercise 109
<a id="generative-stories-observation-laws-ex-109"></a>

Can model fit alone establish a causal effect?

<details>
<summary>Hint 1</summary>

Separate observation and intervention laws.

</details>
<details>
<summary>Hint 2</summary>

Assignment assumptions are additional.

</details>
<details>
<summary>Solution</summary>

No. A generative observation model can describe association while leaving intervention outcomes unidentified. A causal target requires a design or explicit structural identification assumptions.

</details>

### Exercise 110
<a id="generative-stories-observation-laws-ex-110"></a>

What does an exactly calculated posterior establish?

<details>
<summary>Hint 1</summary>

Keep model and world separate.

</details>
<details>
<summary>Hint 2</summary>

The calculation is conditional.

</details>
<details>
<summary>Solution</summary>

It establishes the conditional distribution under the stated prior, likelihood and observation mechanism. It does not establish those assumptions as true or automatically justify a different scientific target.

</details>

## Summary

Generative Stories and Observation Laws develops the declared probability model, target and mathematical comparisons in the sections above. Keep support, observation mechanisms, conditional information and numerical approximation distinct. The original complete source remains available as a companion, with all original questions and computational listings preserved.
