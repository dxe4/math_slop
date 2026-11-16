var e=`---
parent_id: book-computational-bayesian-modeling
chapter_id: begin-with-the-generative-story
title: "Begin with the Generative Story"
level: graduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Begin with the Generative Story

Bayesian inference is often introduced as a formula: posterior proportional to likelihood times prior. That formula is correct, but it is not a modeling strategy. Before any computation, we need a generative story---an explicit description of how the data could have been produced. This chapter establishes the notation, the basic structure of Bayesian models, and the habit of writing simulators before writing estimators.

## The posterior as a conditional density

Let observed data be $y$, unknown parameters be $\\theta$, and fixed modeling choices be $M$. Specify the support and reference measures for the prior and likelihood. With a proper prior and a finite positive marginal likelihood, $0<p(y\\mid M)<\\infty$, Bayes' theorem gives the posterior density

$$\\pi(\\theta \\mid y, M) = \\frac{p(y \\mid \\theta, M) \\, \\pi(\\theta \\mid M)}{p(y \\mid M)},$$

where the marginal likelihood

$$p(y \\mid M) = \\int p(y \\mid \\theta, M) \\, \\pi(\\theta \\mid M) \\, d\\theta$$

normalizes the density so that it integrates to one over the parameter space. For inference within a single model, algorithms often need only the unnormalized target

$$\\pi(\\theta \\mid y) \\propto p(y \\mid \\theta) \\, \\pi(\\theta).$$

The normalizing constant $p(y \\mid M)$ becomes important only when comparing models or when the posterior itself is required as a proper density for downstream calculations such as Bayesian model averaging.

The posterior is a conditional probability distribution. It updates our beliefs about $\\theta$ after observing $y$. The prior $\\pi(\\theta)$ encodes what we knew before seeing data; the likelihood $p(y \\mid \\theta)$ encodes how probable the observed data would be under different parameter values. The marginal likelihood $p(y \\mid M)$ averages the likelihood over the prior, measuring how well the model predicted the data before it was observed.

## Writing the generative story

A generative story answers concrete questions before any density is written:

- Which variables are observed and which are latent?
- What conditional independences are claimed?
- What scale does each parameter inhabit?
- What missingness or selection mechanisms led to the observed $y$?

A directed acyclic graph can help visualize these relationships, but an equivalent text specification must list every distribution and every conditioning relation. If the graph and the text disagree, the text is authoritative until the discrepancy is resolved.

Consider a simple example. We observe $n\\ge1$ counts $y_{1}, \\dots, y_{n}$ in $\\{0,1,2,\\dots\\}$ and model them as conditionally independent Poisson counts with rate $\\lambda>0$. Fix finite hyperparameters $a>0$ and $b>0$. The generative story is:

1. Draw $\\lambda \\sim \\operatorname{Gamma}(a, b)$ using rate parameter $b$.
2. For $i = 1, \\dots, n$, independently draw $y_{i} \\sim \\operatorname{Poisson}(\\lambda)$.

This story makes explicit that the $y_{i}$ are conditionally independent given $\\lambda$, that $\\lambda$ is positive, and that the prior is chosen from the gamma family. A different story---for example, one in which the counts are overdispersed relative to Poisson---would require a different likelihood or a hierarchical expansion.

The generative story also forces us to think about the sampling mechanism. Were the $n$ observations fixed in advance, or did we stop collecting data when a budget ran out? Different sampling plans can give proportional likelihoods for the same observed successes and failures, and hence the same posterior under a common prior. Selection or stopping mechanisms that contribute parameter-dependent factors must be included; a different sampling distribution alone does not establish a different posterior.

## Working on the log scale

In practice, we almost always work with the log posterior:

$$\\log \\pi(\\theta \\mid y) = \\log p(y \\mid \\theta) + \\log \\pi(\\theta) + \\text{constant}.$$

Products of small densities underflow in floating-point arithmetic. A likelihood of $10^{-300}$ for each of $100$ observations would underflow to zero in standard double precision, even though the product is perfectly representable in log space. Adding log densities avoids product underflow, but individual evaluations and summation still require numerical-stability checks. For a model with $n$ conditionally independent observations, the log likelihood is a sum:

$$\\log p(y \\mid \\theta) = \\sum_{i=1}^{n} \\log p(y_{i} \\mid \\theta).$$

This additive structure is exploited by automatic differentiation libraries and by gradient-based samplers such as Hamiltonian Monte Carlo. The gradient of the log posterior decomposes into a sum of per-observation gradients plus the prior gradient, making parallel computation straightforward.

## Changes of variables and Jacobians

Constraints require care. Suppose a standard deviation $\\sigma$ is originally modeled with a density with respect to $d\\sigma$. If we reparameterize to $\\eta = \\log \\sigma$, the density with respect to $d\\eta$ includes the Jacobian:

$$\\pi_{\\eta}(\\eta) = \\pi_{\\sigma}(\\exp(\\eta)) \\cdot \\left\\lvert \\frac{d\\sigma}{d\\eta} \\right\\rvert = \\pi_{\\sigma}(\\exp(\\eta)) \\cdot \\exp(\\eta).$$

No extra Jacobian should be added when the prior was specified directly on $\\eta$. Some probabilistic programming systems insert the required term automatically; others require the user to supply it. The safe practice is to write the generative story on the scale where the prior is defined, then verify that any transformation used for computation carries the correct Jacobian.

**Example: a scale prior.** Start with the improper prior kernel $\\pi(\\sigma) \\propto \\sigma^{-1}$ on $\\sigma>0$, with respect to $d\\sigma$. On the log scale, $\\eta = \\log \\sigma$ has kernel $\\pi_{\\eta}(\\eta) \\propto \\exp(-\\eta) \\cdot \\exp(\\eta) = 1$, with respect to $d\\eta$. This is an improper uniform kernel on $\\mathbb{R}$, not a probability density that integrates to one. In any model using this prior, the likelihood-times-prior integral must be finite and positive before it defines a posterior.

## Worked example: Poisson-Gamma conjugacy

Let $n\\ge1$ be an integer and let the observed $y_i$ be nonnegative integers. Conditional on $\\lambda>0$, take the $y_i$ to be independent $\\operatorname{Poisson}(\\lambda)$ observations for $i=1,\\dots,n$. Use the proper prior $\\lambda\\sim\\operatorname{Gamma}(a,b)$ with finite shape $a>0$ and rate $b>0$. The likelihood kernel is

$$p(y \\mid \\lambda) \\propto \\lambda^{\\sum_{i=1}^{n} y_{i}} \\exp(-n\\lambda).$$

The prior kernel is

$$\\pi(\\lambda) \\propto \\lambda^{a-1} \\exp(-b\\lambda).$$

Multiplying and collecting terms,

$$\\pi(\\lambda \\mid y) \\propto \\lambda^{a + \\sum y_{i} - 1} \\exp\\bigl(-(b + n)\\lambda\\bigr),$$

which is the kernel of $\\operatorname{Gamma}\\bigl(a + \\sum y_{i}, \\, b + n\\bigr)$. The posterior mean is

$$\\mathbb{E}[\\lambda \\mid y] = \\frac{a + \\sum y_{i}}{b + n}.$$

This can be read as a weighted average between the prior mean $a/b$ and the sample mean $\\bar{y} = (\\sum y_{i})/n$, with weights $b$ and $n$ respectively. As $n \\to \\infty$, the posterior concentrates at the sample mean; for small $n$, the prior exerts noticeable pull.

**Exact normalization check.** With $a = 3$, $b = 1$, and observations $y = (3, 5, 2, 4)$, we have $\\sum y_{i} = 14$ and $n = 4$. The posterior is $\\operatorname{Gamma}(17, 5)$ with mean $17/5=3.4$ and variance $17/5^2=0.68$. Under the rate convention, its kernel is $\\lambda^{16}e^{-5\\lambda}$ and

$$\\int_0^\\infty \\lambda^{16}e^{-5\\lambda}\\,d\\lambda
=\\frac{\\Gamma(17)}{5^{17}}.$$

Therefore the exact normalizing constant is $5^{17}/\\Gamma(17)$. This identity is a reproducible benchmark; any numerical quadrature can be compared against it with its algorithm, precision, and error criterion reported.


## Extended example: a hierarchical generative story

Consider a clinical trial with $J = 10$ hospitals. In each hospital $j$, we observe the number of successful recoveries $y_{j}$ out of $n_{j}$ patients. A complete generative story might be:

1. Draw the population log-odds $\\alpha \\sim \\mathcal{N}(0, 2^{2})$.
2. Draw the population standard deviation $\\tau \\sim \\operatorname{Half-Cauchy}(0, 5)$.
3. For each hospital $j = 1, \\dots, J$:
   a. Draw the hospital-specific deviation $u_{j} \\sim \\mathcal{N}(0, \\tau^{2})$.
   b. Set $p_{j} = \\operatorname{logit}^{-1}(\\alpha + u_{j})$.
   c. Draw $y_{j} \\sim \\operatorname{Binomial}(n_{j}, p_{j})$.

This story makes explicit that the $y_{j}$ are conditionally independent given $(\\alpha, \\tau, u_{j})$, that the $u_{j}$ are exchangeable, and that the $p_{j}$ are constrained to $(0, 1)$ via the logit link. It also reveals that the prior on $\\tau$ allows substantial between-hospital variation but penalizes extreme values gently.

## Stopping rules and the likelihood principle

The likelihood principle says that proportional likelihood functions carry the same evidence about $\\theta$. With the same prior, multiplying a likelihood by a positive constant independent of $\\theta$ leaves the posterior unchanged. We must still model relevant selection and stopping mechanisms; the point is to check whether they contribute a parameter-dependent factor.

For independent Bernoulli trials with success probability $p$, compare a fixed sample size $n$ yielding $r$ successes with stopping at the $r$th success on trial $n$, where $1\\le r\\le n$. The respective likelihoods for these recorded counts are

$$L_{\\mathrm{fixed}}(p)=\\binom{n}{r}p^r(1-p)^{n-r},
\\qquad L_{\\mathrm{stop}}(p)=\\binom{n-1}{r-1}p^r(1-p)^{n-r}.$$

Their ratio is $n/r$, independent of $p$. Thus a common $\\operatorname{Beta}(a,b)$ prior gives the same $\\operatorname{Beta}(a+r,b+n-r)$ posterior in both experiments. Their repeated-sampling properties can still differ. This calculation concerns the stated stopping protocol and observed data; it does not justify ignoring unobserved selection or a parameter-dependent reporting mechanism.

## The role of simulation

Before fitting any model, simulate data from the generative story with plausible parameter values. Inspect the simulated data: are the scales reasonable? Are the correlations plausible? Does the model generate the kinds of patterns we expect to see in real data? Simulation reveals misspecification before any computation begins.

**Example.** To make a prior-predictive audit reproducible, suppose a hypothetical weekly counting domain requires $P(\\lambda>100)\\le10^{-4}$ and $P(Y=0)\\le0.2$. Under the shape-rate $\\operatorname{Gamma}(0.01,0.01)$ prior, the exact rate-tail probability exceeds $e^{-2}/202>10^{-4}$ and the predictive zero probability is $101^{-0.01}>0.95$; the prior fails these declared criteria. The proper alternative $\\operatorname{Gamma}(3,1)$ has rate-tail probability $5101e^{-100}$ and predictive zero probability $1/8$, satisfying both criteria. The appended public companion specifies an independent simulation comparison; no run outcome or universal domain judgment is asserted here.


## Prior elicitation

Choosing a prior is not arbitrary guesswork. Prior elicitation is the process of translating background knowledge into a probability distribution. Common methods include:

- **Direct quantile elicitation:** Ask experts for quantiles of the parameter distribution and fit a parametric family.
- **Predictive elicitation:** Ask experts for predictions of observable quantities and infer the implied prior on parameters.
- **Empirical Bayes:** Use the data to estimate hyperparameters, though this ignores uncertainty in the hyperparameters.
- **Reference priors:** Choose priors that maximize some measure of information gain, producing objective but often improper distributions.

**Example: elicitation for a Poisson rate.** Distinguish uncertainty about the latent weekly rate from variation in a future count. A desired prior rate mean $5$ and rate standard deviation $2$ imply the shape-rate prior $\\operatorname{Gamma}(25/4,5/4)$, whose one-week predictive count has mean $5$ and standard deviation $3$. A $\\operatorname{Gamma}(6,1.2)$ rate prior instead has rate variance $25/6$ and predictive count variance $55/6$. A mixed-Poisson predictive count with mean $5$ cannot have standard deviation $2$, since its variance is at least its mean.

## Sensitivity analysis

A Bayesian analysis is incomplete without sensitivity analysis. Report how posterior inferences change under alternative priors. A common approach is to vary the prior hyperparameters over a plausible range and report the range of posterior quantities.

For a hierarchical model, sensitivity analysis should include:
- Alternative priors on the population scale $\\tau$.
- Alternative priors on the population mean $\\mu$.
- Different numbers of groups or different group definitions.

Stability supports robustness only over the alternatives actually tested. It does not by itself show that the likelihood is informative: several similar priors can produce similar prior-driven posteriors when data are weak. Material changes do establish sensitivity over that tested set. Report the likelihood information, prior-to-posterior change, and sensitivity range separately rather than inferring one from the other.

## Common errors

- **Forgetting the normalizing constant in model comparison.** The unnormalized posterior suffices for inference within one model, but Bayes factors and posterior model probabilities require $p(y \\mid M)$.
- **Confusing rate and scale parameterizations.** The gamma distribution is parameterized by shape and rate in some software and by shape and scale in others. Scale is the reciprocal of rate. Always state the convention explicitly.
- **Ignoring the Jacobian after reparameterization.** A log-transform of a positive parameter changes the measure. Omitting the Jacobian leads to a different posterior.
- **Writing the likelihood before the generative story.** The story determines which variables are random, which are fixed, and what independences hold. Starting with a formula risks encoding unstated assumptions.
- **Treating the prior as a nuisance.** The prior is part of the model. Different priors can lead to different conclusions, especially with small samples. Always report the prior and perform sensitivity analysis.

## Practice exercises

### Exercise 1

Let $n\\ge1$ be an integer. Given $p$, take $y_1,\\dots,y_n$ to be conditionally independent $\\operatorname{Bernoulli}(p)$ observations, with proper prior $p\\sim\\operatorname{Beta}(a,b)$ for $a,b>0$. Derive the posterior distribution of $p$ given $s=\\sum_{i=1}^n y_i$.

**Solution.** The likelihood is $p^{s}(1-p)^{n-s}$. The prior is proportional to $p^{a-1}(1-p)^{b-1}$. Their product is proportional to $p^{a+s-1}(1-p)^{b+n-s-1}$, which is the kernel of $\\operatorname{Beta}(a+s, b+n-s)$.

### Exercise 2

Suppose $\\sigma$ has prior density $\\pi(\\sigma) \\propto \\sigma^{-1}$ on $\\sigma > 0$. Find the induced prior on $\\eta = \\log \\sigma$ and verify that it is uniform on $\\mathbb{R}$.

**Solution.** By the change-of-variables formula, $\\pi_{\\eta}(\\eta) = \\pi_{\\sigma}(\\exp(\\eta)) \\cdot \\exp(\\eta) \\propto \\exp(-\\eta) \\cdot \\exp(\\eta) = 1$. Thus $\\eta$ has an improper uniform prior on the real line.

### Exercise 3

A researcher models reaction times $t_{i}$ as log-normal: $\\log t_{i} \\mid \\mu, \\sigma^{2} \\sim \\mathcal{N}(\\mu, \\sigma^{2})$. They place a normal prior on $\\mu$ and an inverse-gamma prior on $\\sigma^{2}$. State the generative story in order and identify which Jacobians, if any, must be supplied manually.

**Solution.** The generative story is: (1) draw $\\mu \\sim \\mathcal{N}(\\mu_{0}, \\tau_{0}^{2})$; (2) draw $\\sigma^{2} \\sim \\operatorname{Inv\\text{-}Gamma}(\\alpha, \\beta)$; (3) for each $i$, draw $\\log t_{i} \\sim \\mathcal{N}(\\mu, \\sigma^{2})$ and set $t_{i} = \\exp(\\log t_{i})$. The model is defined on $(\\mu, \\sigma^{2}, \\log t_{i})$. Because the prior on $\\sigma^{2}$ is specified directly on that scale, no Jacobian is needed for the variance. The transformation from $\\log t_{i}$ to $t_{i}$ is part of the likelihood specification; the likelihood density is with respect to $dt_{i}$, so the Jacobian $\\lvert d\\log t_{i} / dt_{i} \\rvert = 1/t_{i}$ is already implicit in the log-normal density formula.


## Constructing the likelihood from the generative story

Given a generative story, the likelihood is the joint distribution of the observed data given the parameters. For conditionally independent observations, the likelihood factors:

$$p(y \\mid \\theta) = \\prod_{i=1}^{n} p(y_{i} \\mid \\theta).$$

This factorization is not automatic; it depends on the conditional independences claimed in the generative story. If observations are correlated---for example, time series data or spatial data---the likelihood does not factor, and the correlation structure must be modeled explicitly.

**Example: correlated errors.** Suppose $y_{i} = f(x_{i}; \\theta) + \\epsilon_{i}$ where $\\epsilon_{i}$ are not independent but follow an autoregressive process $\\epsilon_{i} = \\rho \\epsilon_{i-1} + \\eta_{i}$ with $\\eta_{i} \\sim \\mathcal{N}(0, \\sigma^{2})$. The likelihood is multivariate normal with a covariance matrix that depends on $\\rho$ and $\\sigma^{2}$. Ignoring the correlation and using a product of univariate normals produces a misspecified likelihood and invalid inferences.

## Missing data mechanisms

The generative story must also specify how missing data arose. Rubin's taxonomy distinguishes three mechanisms:

- **Missing completely at random (MCAR):** The missingness is independent of both observed and missing data.
- **Missing at random (MAR):** The missingness depends on observed data but not on missing data.
- **Missing not at random (MNAR):** The missingness depends on the missing data themselves.

MAR alone does not make a missingness mechanism ignorable. Let $\\theta$ index
the data model and $\\psi$ index the missingness model. Likelihood inference
may omit the missingness factor when the mechanism is MAR for the realized
missingness pattern **and** the parameter spaces for $\\theta$ and $\\psi$ are
distinct (variation independent), provided the likelihood for $\\theta$ is the
correct observed-data likelihood obtained by integrating over missing values.
MCAR is a stronger special case, not an independent shortcut around these
requirements. For Bayesian posterior inference about $\\theta$, the usual
ignorability result additionally requires a prior factorization such as
$\\pi(\\theta,\\psi)=\\pi(\\theta)\\pi(\\psi)$. Under MNAR, or when these distinctness
conditions fail, the missingness mechanism generally must be modeled jointly
with the data. The generative story makes each assumption explicit.

**Example.** In a survey of income, high-income respondents may be less likely to respond. If income is the missing variable and non-response depends on income itself, the mechanism is MNAR. A model that ignores this selection will underestimate the income distribution's upper tail.

## Extended exercise discussion

### Exercise 4 (Discussion)

A researcher observes $n = 50$ Bernoulli trials with $s = 12$ successes. They specify a $\\operatorname{Beta}(1, 1)$ prior and report a $95\\%$ equal-tail credible interval of $[0.12, 0.42]$. A critic argues that the prior is too influential because this interval differs from a frequentist confidence interval. Audit the calculation and the critic's reasoning.

**Solution.** The posterior is $\\operatorname{Beta}(13,39)$, whose equal-tail $95\\%$ interval is approximately $[0.1433,0.3749]$; the reported interval is therefore not the stated posterior interval. The posterior mean is $13/52=0.25$, compared with the sample proportion $12/50=0.24$, so this prior moves that center only slightly in this dataset. Interval width cannot be explained solely by saying that Bayesian probability and frequentist coverage have different interpretations: the endpoints also depend on the prior, the chosen Bayesian summary, and the particular frequentist construction used for comparison. The researcher should correct the computation, name both interval procedures, and report a sensitivity analysis under substantively plausible alternative priors.

## Looking backward and forward

This chapter introduced the foundational structure of Bayesian models: the generative story, the log-scale computation, and the Jacobian under reparameterization. In the next chapter, *Conjugacy as an Exact Computational Benchmark*, we use simple conjugate models to build intuition and to create exact reference distributions against which approximate algorithms can be tested.
## A joint law specifies more than a likelihood kernel

A generative story becomes a probability model when every random object has a domain and a conditional law. For a parameter $\\theta\\in\\Theta$ and an observation $Y\\in\\mathcal Y$, write a prior probability measure $\\Pi(d\\theta)$ and a conditional sampling kernel $P_\\theta(dy)$. The joint law is $\\Pi(d\\theta)P_\\theta(dy)$. Drawing from that joint law means drawing the parameter first and then drawing the observation conditionally; it does not mean that parameters and observations are independent.

When densities exist, choose their sigma-finite reference measures before multiplying them. With a prior density $\\pi$ relative to a measure $\\nu$ on $\\Theta$ and a likelihood density $f_\\theta$ relative to a common measure $\\mu$ on $\\mathcal Y$, the joint density relative to $\\nu(d\\theta)\\mu(dy)$ is $\\pi(\\theta)f_\\theta(y)$. For counts, $\\mu$ is counting measure and probabilities are point masses. For a real observation, $\\mu$ may be Lebesgue measure and a density value is not a probability. Mixed data require an appropriate combination of measures, not a fictional continuous density for a discrete indicator.

For example, suppose a machine is inactive with probability $w$ and otherwise produces a Poisson count with rate $\\lambda$. Draw $Z\\sim\\operatorname{Bernoulli}(1-w)$, then set $Y=0$ if $Z=0$ and draw $Y\\sim\\operatorname{Poisson}(\\lambda)$ if $Z=1$. The observed-data probabilities are
$$
P(Y=0\\mid w,\\lambda)=w+(1-w)e^{-\\lambda},\\qquad
P(Y=k\\mid w,\\lambda)=(1-w)e^{-\\lambda}\\lambda^k/k!\\quad(k\\ge1).
$$
A zero can arise through either path. Replacing its probability by $w$ alone would throw away a valid path in the generative story. Conditioning on the unobserved $Z$ gives a simpler law, but that is not the likelihood of the actually observed count.

Support is part of the same specification. A Beta prior lives on $0<p<1$; an inverse-gamma variance lives on $v>0$; Poisson observations are nonnegative integers. A formula evaluated outside its support represents zero probability or an invalid input, depending on the computational interface. Taking a logarithm before checking support can turn a meaningful zero likelihood into an unexplained numerical error.

Conditional independence is also a model assertion. In the Poisson example, several counts can be independent given one shared $\\lambda$ but dependent after it is integrated out. Drawing a separate rate for every observation is a different joint law, even if each individual count has the same marginal distribution. A simulator and a likelihood must use the same version of that choice.

This gives a useful sequence of questions before computation: what is random, what is observed, what is conditioned on, what measure defines each density, and which latent paths must be summed or integrated? The answers identify the likelihood. An algebraically attractive kernel cannot answer them afterward. Later hierarchical and mixture models reuse exactly this distinction, with more latent objects rather than a different meaning of probability.

## Proper priors and almost-everywhere posterior normalization

With the dominated joint model above, define $m(y)=\\int f_\\theta(y)\\pi(\\theta)\\,\\nu(d\\theta)$. At an observation satisfying $0<m(y)<\\infty$, dividing the joint density by $m(y)$ produces a nonnegative posterior density that integrates to one. Both inequalities matter. If $m(y)=0$, the ratio is undefined; if $m(y)=\\infty$, no finite constant normalizes that kernel.

A proper prior does imply a useful almost-everywhere fact. Nonnegativity permits Tonelli's theorem:
$$
\\int m(y)\\,\\mu(dy)
=\\int\\pi(\\theta)\\left[\\int f_\\theta(y)\\,\\mu(dy)\\right]\\nu(d\\theta)=1.
$$
Thus $m(y)$ is finite for $\\mu$-almost every $y$. This does not promise finiteness at every arbitrarily chosen point, and it does not make a zero predictive-density observation have a uniquely specified density-ratio posterior. Conditional distributions are defined up to predictive-null sets. A version can be assigned there, but the ratio alone does not determine it.

An exact example makes the boundary visible. Let $\\theta$ have the uniform prior on $(0,1)$ and let $Y\\mid\\theta$ be uniform on $(0,\\theta)$. Relative to $d\\theta\\,dy$, the joint density is $\\theta^{-1}\\mathbf1\\{0<y<\\theta<1\\}$. For $0<y<1$,
$$
m(y)=\\int_y^1\\frac{d\\theta}{\\theta}=-\\log y,\\qquad
\\pi(\\theta\\mid y)=\\frac{\\mathbf1\\{y<\\theta<1\\}}{\\theta(-\\log y)}.
$$
Integrating the latter over $\\theta$ gives one. At $y=1$, the displayed predictive density is zero. Replacing $0<y$ by $0\\le y$ changes no conditional probability law, but that equally valid density version has a divergent marginal integral at the boundary $y=0$. Both observations belong to null sets under the continuous predictive law. This is compatible with the proper joint distribution, not a contradiction to Bayes' theorem.

The same example gives a checkable posterior quantity:
$$
E[\\theta\\mid y]=\\frac{1-y}{-\\log y}\\qquad(0<y<1).
$$
The denominator arose from normalization and cannot be discarded when computing this expectation. Near $y=1$ the expression has a removable limiting behavior, but a numerical implementation should evaluate it with stable logarithmic functions rather than divide two inaccurately rounded small numbers.

Improper prior kernels require a separate analysis. An unspecified multiplicative constant may cancel in one proper posterior, yet it prevents an ordinary marginal probability of the data from being assigned without further conventions. Moreover, the likelihood-times-kernel integral can diverge. The earlier scale-prior example therefore needs a posterior-propriety argument for its actual likelihood; the phrase “flat on the log scale” is not that argument.

Finally, not every generative story has a common likelihood density of the assumed type. If $Y=\\theta$ deterministically with a continuous prior, the conditional law is a point mass at $\\theta$, not an ordinary Lebesgue density in $y$. One can still use the joint probability law and conditional distributions. What fails is an unjustified density representation, not probabilistic conditioning itself. This distinction prevents an algorithm from treating a symbolic Dirac mass as an ordinary function to be multiplied and integrated numerically.

## Observed-data likelihoods integrate latent and reporting paths

If the generative model contains an unobserved variable $Z$, the observed likelihood is $f_\\theta(y)=\\int f_\\theta(y,z)\\,dz$, with a sum replacing the integral for discrete labels. Conditioning on a convenient value of $Z$ changes the information being used. The zero-inflated count example above is a finite illustration: its observed zero probability is a sum over both labels, while its complete-data likelihood uses the actual label as well.

Reporting mechanisms can change that calculation. Suppose $Y\\mid\\lambda\\sim\\operatorname{Poisson}(\\lambda)$ but a sampling design records only positive counts. If the recorded dataset is explicitly conditional on inclusion, then for $y\\ge1$
$$
P(Y=y\\mid Y>0,\\lambda)
=\\frac{e^{-\\lambda}\\lambda^y/y!}{1-e^{-\\lambda}}
=\\frac{\\lambda^y}{y!(e^\\lambda-1)}.
$$
The denominator depends on $\\lambda$, so dropping it changes the posterior. If instead a fixed roster includes observed zero indicators for unreported units, the data contain additional information about the reporting events. That is a different observed-data likelihood; one must not exchange the two designs merely because the positive count values look identical.

A Bernoulli reporting example separates selection from a missing-value integral. Let $Y\\sim\\operatorname{Bernoulli}(p)$ with $0<p<1$, and let $P(R=1\\mid Y=1)=q_1$, $P(R=1\\mid Y=0)=q_0$, with positive known reporting probabilities. Among recorded observations,
$$
P(Y=1\\mid R=1,p)=\\frac{pq_1}{pq_1+(1-p)q_0}.
$$
This equals $p$ only when $q_1=q_0$. If a fixed original roster and its reporting indicators are known, a reported success contributes $pq_1$, a reported failure contributes $(1-p)q_0$, and an unreported record contributes $p(1-q_1)+(1-p)(1-q_0)$. The likelihood must describe whichever information was actually retained.

For ordinary missing data, the integral over the missing coordinates is indispensable even under an ignorability theorem. The chapter's earlier MAR statement also requires distinct parameter spaces and the relevant prior factorization. Those hypotheses permit a factor to be omitted in a specified posterior calculation; they do not permit missing coordinates to be replaced by zeros, or a complete-data product to be used as though every value had been seen.

Stopping rules provide another contrast. The earlier fixed-size and stop-at-the-$r$th-success likelihoods differ by a positive constant independent of $p$, so a common prior gives the same posterior. Their predictive event probabilities and repeated-sampling designs remain different. A parameter-dependent selection denominator, such as the one above, is not a harmless constant of that kind.

These examples show why a generative specification should include what is recorded, not just what occurs. Data aggregation, censoring, selection, latent labels and a stopping rule each define a map from a larger experiment to the observation. The correct likelihood is the distribution of that map. Checking whether the discarded paths contribute a parameter-dependent factor is a concrete calculation, rather than a blanket instruction always to ignore or always to model every mechanism in the same way.

## Stable log arithmetic still needs a numerical argument

Replacing a product by a sum of logarithms avoids one specific failure: many individually representable positive factors can have an unrepresentably small product. For $100$ factors each equal to $10^{-300}$, the log product is exactly $-30\\,000\\log10$ in real arithmetic. The factors need not first be multiplied to obtain it. Nevertheless, taking the logarithm of a factor that has already underflowed to zero loses the information before the transformation helps.

A stable implementation therefore evaluates a log density directly when possible. For a Poisson count, use $y\\log\\lambda-\\lambda-\\log\\Gamma(y+1)$ rather than forming $\\lambda^y e^{-\\lambda}/y!$ and then logging. State the support: $y$ is a nonnegative integer and $\\lambda>0$. The expression $0\\log0$ at a limiting case needs an explicitly defined probability law, not a silent propagation of a floating-point NaN.

Mixtures require another operation because their probabilities add before logging. For finite real numbers $\\ell_1,\\ldots,\\ell_K$, let $c=\\max\\ell_k$. Then
$$
\\log\\!\\left(\\sum_{k=1}^Ke^{\\ell_k}\\right)
=c+\\log\\!\\left(\\sum_{k=1}^Ke^{\\ell_k-c}\\right).
$$
Every exponent on the right is nonpositive, and at least one equals zero. Thus the sum is between $1$ and $K$, avoiding overflow of individual exponentials. If every component has log probability $-\\infty$, the total is $-\\infty$ and should be handled separately; subtracting $-\\infty$ from itself is not the formula's finite-input case.

For instance, two component log probabilities $-1000,-1001$ give $-1000+\\log(1+e^{-1})$. Directly exponentiating both can produce zeros, while the shifted expression preserves their relative contribution. The normalized component weights are $e^{\\ell_k-c}/\\sum_j e^{\\ell_j-c}$. Differentiating the log sum gives a weighted average of component score vectors whenever the component functions are differentiable. This is the gradient of a mixture log likelihood, not the sum of the component log gradients.

Subtraction near one has a related issue. When $p$ is close to zero, an accurate value of $\\log(1-p)$ should use an implementation intended for that operation, such as log1p applied to $-p$, rather than first rounding $1-p$ to one. For logit computations it is even better to evaluate both log probabilities from the unconstrained coordinate, as derived next, without first obtaining a rounded probability equal to zero or one.

Summing many log terms can still accumulate rounding error or suffer cancellation. Pairwise or compensated summation can help, and rescaling units can improve conditioning, but no transformation makes all numerical problems disappear. An exact symbolic identity, a stable evaluation strategy and a declared precision/error check are three different pieces of a computational argument. The public benchmarks retain analytic identities precisely so that numerical values can be checked without treating a plausible decimal as its own reference.

## A Jacobian converts a probability measure between coordinates

Let $\\theta=T(z)$ be a one-to-one differentiable transformation between open subsets of $\\mathbb R^d$, with differentiable inverse and nonzero determinant. For a density $\\pi_\\theta$ relative to $d\\theta$, substitution in an integral gives
$$
P(Z\\in A)=\\int_{T(A)}\\pi_\\theta(\\theta)\\,d\\theta
=\\int_A\\pi_\\theta(T(z))\\,|\\det DT(z)|\\,dz.
$$
The transformed density is therefore the integrand on the right. The absolute value accounts for orientation; a negative determinant does not produce negative probability. The image of the support must be transformed as well.

For a scalar probability $p=\\operatorname{logit}^{-1}(z)$, $dp/dz=p(1-p)>0$. If $p\\sim\\operatorname{Beta}(A,B)$ with $A,B>0$, then
$$
\\pi_z(z)=\\frac{p(z)^A(1-p(z))^B}{B(A,B)},\\qquad z\\in\\mathbb R.
$$
The added powers are the Jacobian. The stable log kernel is
$$
-A\\log(1+e^{-z})-B\\log(1+e^z),
$$
evaluated through stable log-add-exp operations rather than through unsafe exponentials. Its derivative is $A-(A+B)p(z)$ and its second derivative is $-(A+B)p(z)(1-p(z))<0$. Hence every proper Beta law has a strictly log-concave density on the logit scale. It is symmetric there only when $A=B$; unimodality is not a promise of near symmetry.

Density modes depend on coordinates. The logit density's mode maps to $p=A/(A+B)$, whereas an interior raw-probability mode, when $A,B>1$, is $(A-1)/(A+B-2)$. There is no contradiction: density is probability per unit reference volume, and a nonlinear coordinate change changes that volume. Probability assigned to a transformed interval remains the same.

The positive-rate transformation gives an equally concrete target check. If $\\lambda\\sim\\operatorname{Gamma}(A,B)$ under the rate convention and $\\eta=\\log\\lambda$, the log-density kernel is $A\\eta-Be^\\eta$. Omitting the factor $e^\\eta$ instead uses $(A-1)\\eta-Be^\\eta$. Transforming that incorrect kernel back to $\\lambda$ yields $\\lambda^{A-2}e^{-B\\lambda}$, which is a Gamma$(A-1,B)$ law only when $A>1$ and is not integrable near zero when $A\\le1$. A Jacobian mistake can therefore change moments or destroy propriety while leaving a smooth-looking function.

If the prior is specified directly on $z$ or $\\eta$, that is already its reference scale. Adding another Jacobian without a coordinate conversion changes the model a second time. Conversely, changing coordinates for computation does not authorize changing the prior family to one with the same printed parameter values. The generative model fixes the probability measure; the coordinate transformation tells the implementation how to represent that same measure.

## Parameter transformations and data transformations have different roles

A parameter Jacobian enters because the integration variable in the posterior changes. A data Jacobian enters because the observation density is represented relative to a different measure. For log-normal reaction times, $X=\\log T$ is normal and $dX/dT=1/T$, so
$$
f_T(t\\mid\\mu,v)=
\\frac1{t\\sqrt{2\\pi v}}
\\exp\\!\\left[-\\frac{(\\log t-\\mu)^2}{2v}\\right],\\qquad t>0.
$$
This factor is part of the likelihood of the observed time. It is already present when a genuine log-normal density routine is used.

For a fixed observed $t$, the factor $1/t$ is independent of $\\mu,v$. It can be dropped from a within-model posterior kernel in those parameters. It cannot be dropped when claiming the normalized density of $T$, and evidence values for different models must use the same observed-data reference measure. If every model undergoes the same invertible data transformation, the common Jacobian cancels in a Bayes factor, which explains exactly when the cancellation is legitimate.

A simple unit conversion makes this less abstract. If a positive observation is expressed as $U=cT$ with known $c>0$, then $f_U(u\\mid\\theta)=f_T(u/c\\mid\\theta)/c$. The density value changes with the unit, but
$$
P(a<T<b\\mid\\theta)=P(ca<U<cb\\mid\\theta)
$$
does not. Reporting a density as if it were the probability of the observed real number would obscure this invariance. In a continuous model an exact point has probability zero; densities describe local probability per unit length.

Multivariate transformations need the full determinant. For a hierarchical normal component $u=\\tau z$ with $\\tau>0$, holding $\\tau$ fixed gives $du=\\tau\\,dz$. In the joint map $(z,\\tau)\\mapsto(u,\\tau)$ the Jacobian matrix is triangular and its determinant is $\\tau$. With several independent components the determinant is $\\tau^J$. This is why a density originally written for $u$ cannot simply be evaluated at $\\tau z$ and declared a density for $z$ without examining the measure.

A noncentered generative specification can instead draw $z_j\\sim N(0,1)$ and define $u_j=\\tau z_j$ deterministically. Its density in the sampled coordinates already uses $dz\\,d\\tau$. One should not add a second factor solely because $u$ appears in the likelihood. The prior construction and the transformed-density construction give the same model when each is implemented on its declared scale. The map degenerates at $\\tau=0$; an atom there would require a separate mixture component rather than a diffeomorphism argument.

These distinctions give three practical checks: identify the random variable whose density is being evaluated, identify the measure defining that density, and identify the variable being integrated or sampled. The same algebraic expression can be a correct likelihood kernel and an incorrect normalized density if those roles are silently exchanged.

## Integrating a shared rate creates predictive dependence

Under the Gamma shape-rate convention,
$$
\\pi(\\lambda)=\\frac{b^a}{\\Gamma(a)}\\lambda^{a-1}e^{-b\\lambda},
\\qquad \\lambda>0,\\quad a,b>0.
$$
For one future Poisson count $Y$, integrate the entire density, not just its kernel:
$$
P(Y=k)=\\frac{b^a}{\\Gamma(a)k!}
\\int_0^\\infty\\lambda^{a+k-1}e^{-(b+1)\\lambda}\\,d\\lambda
=\\frac{\\Gamma(a+k)}{\\Gamma(a)k!}
\\left(\\frac b{b+1}\\right)^a
\\left(\\frac1{b+1}\\right)^k.
$$
The gamma integral supplies both normalization and the negative-binomial predictive form. Here $k$ counts events and $b/(b+1)$ is the stated success-probability parameter; software conventions using failures or a mean/dispersion pair must be translated.

Conditional expectation and variance yield
$$
E[Y]=a/b,\\qquad
\\operatorname{Var}(Y)=E[\\lambda]+\\operatorname{Var}(\\lambda)
=a/b+a/b^2.
$$
The extra term is uncertainty in the shared rate. For two conditionally independent future counts using that same rate, the conditional covariance is zero but
$$
\\operatorname{Cov}(Y_1,Y_2)
=E[\\operatorname{Cov}(Y_1,Y_2\\mid\\lambda)]
+\\operatorname{Cov}(E[Y_1\\mid\\lambda],E[Y_2\\mid\\lambda])
=a/b^2.
$$
Their predictive correlation is $1/(b+1)$.

For $a=3,b=1$, each predictive count has mean $3$ and variance $6$, while the covariance between two counts is $3$ and their correlation is $1/2$. A model that draws separate independent Gamma$(3,1)$ rates for the two counts has the same one-count predictive law but covariance zero. Thus matching a histogram of individual outcomes does not verify the joint generative structure.

For a whole ordered vector $y_1,\\ldots,y_n$, the shared-rate predictive probability is
$$
P(y)=
\\frac{b^a\\Gamma(a+S)}
{\\Gamma(a)(b+n)^{a+S}\\prod_i y_i!},
\\qquad S=\\sum_i y_i.
$$
The product of individual marginal negative-binomial probabilities is generally different. The distinction matters for estimating uncertainty in a sample average: covariance terms can remain even when every conditional data draw was independent.

This calculation also explains the difference between simulating one dataset and many independent datasets. Within one dataset, draw the shared rate once and then draw all its counts conditionally. To obtain independent prior-predictive datasets, redraw the rate for each dataset. Redrawing it before every observation simulates the separate-rate model instead. A computational benchmark must specify which objects share a latent draw.

The same total-expectation and total-variance identities apply after updating the prior, with posterior shape and rate substituted. They connect exact conjugate inference to predictive checks, but they do not establish that the Poisson sampling model fits the observed dispersion, dependence or tails. Those are questions about the adequacy of the generative story, not about whether the integral was evaluated correctly.

## Elicitation distinguishes a rate from its future counts

Suppose background knowledge concerns a latent weekly rate $\\lambda$, with desired mean $m>0$ and standard deviation $s>0$. Under a Gamma shape-rate prior, $a/b=m$ and $a/b^2=s^2$. Solving gives $a=m^2/s^2$, $b=m/s^2$. Thus a rate mean of five and rate standard deviation two correspond to $a=25/4,b=5/4$.

Future Poisson counts have another source of uncertainty. With this prior, their mean is five and their variance is $5+4=9$, giving predictive standard deviation three. A statement about “five plus or minus two events” must say whether it concerns the latent rate or a future realized count. The earlier Gamma$(6,1.2)$ example has rate mean five and rate variance $25/6$, hence predictive variance $55/6$. It is an approximate rate-uncertainty description, not a count standard deviation of two.

In fact, predictive mean five and variance four cannot hold for any Poisson mixture with finite rate variance, because $\\operatorname{Var}(Y)=E[\\lambda]+\\operatorname{Var}(\\lambda)\\ge E[Y]$. An elicitation that insists on those count moments asks for a sampling model outside this family. The correct response is to examine the observation process or the meaning of the stated uncertainty, rather than force impossible hyperparameters into a Gamma distribution.

A different hypothetical domain can be elicited through tail and zero-count probabilities. Suppose a site regards rates above $100$ events per week as requiring prior probability at most $10^{-4}$, and expects a zero-count week with prior probability at most $0.2$. These are explicit illustrative constraints fixed before any benchmark run; they are not claimed observations from a real site.

For Gamma$(0.01,0.01)$, the predictive zero probability is $101^{-0.01}>0.95$, already violating the second constraint. Its rate mean is only one, but its variance is $100$. Its tail above $100$ is $Q(0.01,1)$, the upper regularized gamma integral. To see that this is not below $10^{-4}$, bound $\\Gamma(0.01)<101$ and restrict its upper-tail integral to $1\\le t\\le2$, where $t^{-0.99}e^{-t}>e^{-2}/2$. The tail is therefore greater than $e^{-2}/202>10^{-4}$. The problem is not an undefined notion of a “substantial” probability; it is failure of declared probability constraints.

Gamma$(3,1)$ instead has predictive zero probability $1/8$ and rate-tail probability $5101e^{-100}$, satisfying both illustrative constraints. This calculation supports that alternative for this stated elicitation, not for every application. The public companion supplies the exact reference functions and a prospective simulation design; no simulation result is asserted in the exposition.

Units must also move with the prior. If $\\lambda$ is events per week, the daily rate $\\lambda/7$ has Gamma shape $a$ and rate $7b$. A seven-day exposure then uses a Poisson mean seven times that daily rate. Keeping the same printed rate parameter while changing the time unit would change the prior predictive law, despite superficially similar notation.

## A proper posterior can coexist with nonidentification

Identification asks whether different parameter values imply different distributions for the observations. It is a property of the sampling model, not of how narrow a posterior looks after adding a prior. A proper prior can make a nonidentified posterior proper without creating new information in the likelihood.

For a complete example, let
$$
Y_i\\mid\\theta_1,\\theta_2\\sim N(\\theta_1+\\theta_2,\\sigma^2),
\\qquad i=1,\\ldots,n,
$$
conditionally independently, with known $\\sigma^2>0$. Every pair with the same sum has the same likelihood. Set $u=\\theta_1+\\theta_2$, $v=\\theta_1-\\theta_2$. Then $\\theta_1=(u+v)/2$, $\\theta_2=(u-v)/2$, and the absolute Jacobian determinant of this inverse map is $1/2$.

Take independent proper priors $\\theta_j\\sim N(0,\\tau^2)$ with $\\tau^2>0$. Since $\\theta_1^2+\\theta_2^2=(u^2+v^2)/2$, the transformed prior factors into independent $N(0,2\\tau^2)$ densities for $u,v$, including the Jacobian. The likelihood depends only on $u$, so the posterior is
$$
u\\mid y\\sim N(m_u,V_u),\\qquad v\\mid y\\sim N(0,2\\tau^2),
$$
independently, where
$$
V_u=\\left(\\frac1{2\\tau^2}+\\frac n{\\sigma^2}\\right)^{-1},
\\qquad
m_u=V_u\\frac{n\\bar y}{\\sigma^2}.
$$
The contrast $v$ remains exactly at its prior distribution for every dataset.

The individual posterior variances are $(V_u+2\\tau^2)/4$, and their covariance is $(V_u-2\\tau^2)/4$. As information about the sum grows, $V_u$ shrinks but the individual variances retain the limit $\\tau^2/2$. The data determine the sum increasingly well while leaving the allocation between the two components prior-dependent. A change in the prior mean or variance of $v$ would change that allocation even when predictions for the sum barely move.

A sampler can explore this proper Gaussian posterior accurately. Good Monte Carlo diagnostics would support computation of its stated posterior, but would not establish that the two components are separately identified by the experiment. Conversely, strong posterior correlation is a computational warning without being proof of a coding error: here it follows directly from a likelihood ridge.

This example distinguishes three questions that should be reported separately. Does the likelihood identify the requested quantity? Does the chosen prior produce a finite positive posterior normalizer? Can the algorithm adequately explore and summarize that posterior? A positive answer to one does not logically supply the others. Predictive checks concern a further question: whether this observation law is adequate for the data-generating process.

The same reasoning applies to a latent mixture label, a weakly estimated population scale or a regression with collinear predictors. A prior can regularize a choice among poorly distinguished explanations. Its role should remain visible through the generative specification and sensitivity analysis, rather than be hidden by calling every sharply reported posterior a discovery made by the data alone.

## Proper-prior sensitivity has an exact reference calculation

A sensitivity analysis fixes the observed data and varies a declared part of the model. For a Beta prior with parameters $a,b$ and observed Bernoulli success count $s$ out of $n$, the posterior mean is $(a+s)/(a+b+n)$. Parameterizing the prior by its mean $m_0=a/(a+b)$ and concentration $c=a+b$ gives
$$
E[p\\mid y]=\\frac{s+cm_0}{n+c}.
$$
At fixed $c$, the derivative with respect to $m_0$ is $c/(n+c)$. At fixed $m_0$, the derivative with respect to $c$ is $(nm_0-s)/(n+c)^2$. These derivatives identify precisely which changes are being tested.

For the public benchmark's prior Beta$(2,5)$ and $s=7,n=20$, the mean is $1/3$. Replacing the prior by proper Beta$(1,1)$ gives Beta$(8,14)$ and mean $4/11$, a shift of $1/33$. This is an exact sensitivity difference, not Monte Carlo noise. Whether that prior alternative is substantively plausible requires an elicitation argument; it is not decided by the convenience of the algebra.

The Poisson-Gamma model gives equally useful reference derivatives. With $S=\\sum y_i$, the posterior mean $(a+S)/(b+n)$ increases with $a$ at rate $1/(b+n)$ and decreases with $b$ at rate $-(a+S)/(b+n)^2$. If a later dataset has $n=40,S=99$, Gamma$(1,1)$ updates to Gamma$(100,41)$, whereas Gamma$(3,1)$ updates to Gamma$(102,41)$. The mean shift is exactly $2/41$. The posterior predictive mean and variance follow by the formulas already derived, so a proper-prior predictive comparison can separate genuine model sensitivity from simulation error.

Another proper alternative, Gamma$(2,2)$, gives mean $101/42$, differing from $100/41$ by $-59/1722$. These examples specify mathematical alternatives for the later predictive dossier; they are not additional claims that a model was fitted or that a discrepancy was reproduced. A small change of posterior mean also does not prove that the likelihood is informative: several nearby priors could all dominate a weakly identified direction.

Assume the alternative proper prior is absolutely continuous with respect to the proper reference prior: in the common density representation, $\\pi_1=0$ almost everywhere on $\\{\\pi_0=0\\}$. Define $w(\\theta)=\\pi_1(\\theta)/\\pi_0(\\theta)$ where $\\pi_0>0$, and set it to zero on the reference-prior null complement. Posterior reweighting then has an exact identity. Provided the denominator is finite and positive and the numerator is absolutely integrable,
$$
E_1[h(\\theta)\\mid y]
=\\frac{E_0[h(\\theta)w(\\theta)\\mid y]}
       {E_0[w(\\theta)\\mid y]}.
$$
It follows by inserting the two normalized posteriors and cancelling the shared likelihood. The identity does not by itself guarantee a stable Monte Carlo importance estimator.

For example, changing Beta hyperparameters produces weights proportional to $p^{\\Delta a}(1-p)^{\\Delta b}$. Under a Beta$(A,B)$ reference posterior, their second moment is finite only when $A+2\\Delta a>0$ and $B+2\\Delta b>0$. A proper alternative posterior can exist while an importance-weight variance is infinite. Later model-comparison and predictive chapters examine related weight diagnostics; the present identity supplies the measure and integrability conditions those computations need.

A useful final sensitivity report therefore names the prior alternatives, the quantity being compared, the exact or numerical reference, the Monte Carlo uncertainty and the remaining model assumptions. Stability is a statement about that tested set of alternatives. It cannot stand in for identification, predictive adequacy or an unrestricted robustness guarantee.

## A censoring mechanism changes the observed-data factor

Suppose an instrument reports a waiting time exactly when it is below a fixed recording limit $c>0$, and otherwise reports the symbol “at least $c$.” Take independent $T_i\\mid\\lambda\\sim\\operatorname{Exponential}(\\lambda)$, with rate $\\lambda>0$. Record $O_i=(\\delta_i,t_i)$, where $\\delta_i=1$ denotes an exact time $0<t_i<c$, and $\\delta_i=0$ denotes the censored symbol. An exact time contributes density $\\lambda e^{-\\lambda t_i}$ with respect to Lebesgue measure on $(0,c)$; the censored symbol contributes probability $e^{-\\lambda c}$ with respect to a point mass. The observation space is a disjoint union. It is not correct to assign a Lebesgue density to the censored symbol.

Write $d=\\sum_i\\delta_i$ and $E=\\sum_i\\{\\delta_it_i+(1-\\delta_i)c\\}$. Multiplying the observed factors gives likelihood $\\lambda^d e^{-\\lambda E}$. A proper shape-rate $\\operatorname{Gamma}(a,b)$ prior therefore gives $\\operatorname{Gamma}(a+d,b+E)$ posterior. This result includes the case $d=0$: observing only censored units still supplies exposure information and shifts the rate through $b+nc$, although there are no observed event times. Dropping those units would erase evidence that their waiting times exceeded the limit.

For example, use $c=2$, exact reports $0.5$ and $1$, and one censored report. Then $d=2$ and $E=3.5$. With prior $\\operatorname{Gamma}(2,1)$, the posterior is $\\operatorname{Gamma}(4,4.5)$ with mean $8/9$. Treating the censored report as an exact time equal to $2$ would wrongly add a third event and give shape $5$. Discarding it would wrongly reduce total exposure to $1.5$. These two errors move different parts of the conjugate update, so agreement on one posterior mean would not validate the full likelihood.

Now change the protocol: retain only units whose waiting times are below $c$, and do not record the number screened out. A retained exact time has conditional density
$$
\\frac{\\lambda e^{-\\lambda t}}{1-e^{-\\lambda c}},\\qquad 0<t<c.
$$
For $n$ retained times the denominator is raised to the power $n$. It depends on $\\lambda$, so the Gamma update above no longer applies. This is truncation rather than censoring. If the number and outcomes of all screened units are available, use that fuller observation law instead of conditioning away information without explanation.

There are three distinct “zeros” in this example. An event time equal to zero is outside the continuous support as defined; zero observed events is an informative dataset; and zero recording probability at an incompatible report makes its likelihood factor zero. Listing these possibilities before manipulating a kernel prevents an algebraically attractive update from answering the wrong experiment. The same audit will matter for missing group outcomes, survival models and models that select observations by a threshold.

## Posterior prediction averages over uncertainty once per replicated dataset

For a proper posterior $\\Pi(d\\theta\\mid y)$ and a future-data kernel $Q_\\theta$, the predictive law is
$$
Q(B\\mid y)=\\int Q_\\theta(B)\\,\\Pi(d\\theta\\mid y).
$$
It is a probability measure because $Q_\\theta$ is one for every relevant $\\theta$, and nonnegative integration gives $Q(\\mathcal Y\\mid y)=1$. This is a normalization argument, independent of whether the integral has a familiar density. If future observations share a latent parameter, draw that parameter once and then generate the whole future dataset conditionally. Redrawing it separately for each observation defines another joint law.

The law of total variance makes the uncertainty accounting visible. If the predictive law has finite second moment, then
$$
\\operatorname{Var}(\\tilde Y\\mid y)
=E\\{\\operatorname{Var}(\\tilde Y\\mid\\theta)\\mid y\\}
+\\operatorname{Var}\\{E(\\tilde Y\\mid\\theta)\\mid y\\}.
$$
Replacing $\\theta$ by its posterior mean usually drops the second term, and can also change the first term in a nonlinear model. For a future Poisson count the two terms are $E(\\lambda\\mid y)$ and $\\operatorname{Var}(\\lambda\\mid y)$. For a Bernoulli observation the final marginal variance is instead $\\bar p(1-\\bar p)$: the two pieces recombine because $Y$ has only two values. For a future batch, its members' shared uncertainty remains visible through their covariance.

Prediction can be well determined even when individual parameters are not identified. In the preceding two-mean example, the distribution of a future observation depends on $u=\\theta_1+\\theta_2$, not on the unconstrained contrast $v$. That supports a prediction claim for this observation design. It does not identify a counterfactual experiment that observes one component alone. State the future-data kernel before deciding which remaining uncertainty matters.

## Exercises: observation laws and transformed targets

### CBM-01-E5 — Censoring is not truncation

A waiting time has exponential rate $\\lambda>0$. A fixed roster has two exact reports $0.5,1$ and one report “at least $2$.” With a shape-rate $\\operatorname{Gamma}(2,1)$ prior, derive the posterior and its mean. Then explain why recording only the two retained times conditional on being below $2$, without the roster size, has another likelihood.

### CBM-01-E6 — Sensitivity along an unidentified direction

For known $\\sigma>0$, let $Y_i\\mid\\theta_1,\\theta_2$ be independent $\\mathcal N(\\theta_1+\\theta_2,\\sigma^2)$, with independent $\\theta_j\\sim\\mathcal N(0,\\tau^2)$ and $\\tau>0$. Identify one learned and one unlearned linear combination. Give the posterior covariance of $\\theta_1,\\theta_2$ and explain which future-data design the learned combination supports.

## Solutions: observation laws and transformed targets

### CBM-01-E5 — Censoring is not truncation — solution

There are two events and total exposure $0.5+1+2=3.5$. The observed likelihood is $\\lambda^2e^{-3.5\\lambda}$; multiplying the prior gives $\\operatorname{Gamma}(4,4.5)$, with mean $4/4.5=8/9$. The censored unit supplies exposure but no event factor. In the retained-only protocol, each observed density is $\\lambda e^{-\\lambda t}/(1-e^{-2\\lambda})$ for $0<t<2$. For two retained units the likelihood has the extra factor $(1-e^{-2\\lambda})^{-2}$, which depends on $\\lambda$. It cannot be discarded, so the displayed Gamma update does not apply to that protocol.

### CBM-01-E6 — Sensitivity along an unidentified direction — solution

Set $u=\\theta_1+\\theta_2$ and $v=\\theta_1-\\theta_2$. The prior gives independent $u,v\\sim\\mathcal N(0,2\\tau^2)$, while the likelihood depends only on $u$. Thus $u\\mid y\\sim\\mathcal N(m,V)$ with $V=(1/(2\\tau^2)+n/\\sigma^2)^{-1}$ and $m=Vn\\bar y/\\sigma^2$, and $v$ retains its prior independently. Since $\\theta_1=(u+v)/2$ and $\\theta_2=(u-v)/2$, each posterior variance is $(V+2\\tau^2)/4$ and their covariance is $(V-2\\tau^2)/4$. Future observations of the same sum use the learned $u$; observing $\\theta_1$ alone requires the still prior-sensitive contrast. A proper posterior does not remove that design dependence.

## Solutions: a complete prior-predictive rate audit

This public companion, **COMM06-CASE-01-PRIOR-COMPANION**, supplies the missing setup at original Chapter 1 line 126, duty CBM-CLAIM-004. It is a hypothetical weekly counting domain, not a report of an expert interview: require $P(\\lambda>100)\\le10^{-4}$ and $P(Y=0)\\le0.2$ for one week's count. Compare shape-rate priors $\\operatorname{Gamma}(0.01,0.01)$ and $\\operatorname{Gamma}(3,1)$ under $Y\\mid\\lambda\\sim\\operatorname{Poisson}(\\lambda)$. These are two explicit domain criteria, not universal definitions of plausibility.

The exact references are $P(\\lambda>100)=Q(a,100b)$, where $Q$ is the regularized upper incomplete gamma function, and $P(Y=0)=(b/(b+1))^a$. The small-shape prior has predictive zero probability $101^{-0.01}>0.95$ and rate-tail probability exceeding $e^{-2}/202>10^{-4}$, as proved above. The alternative has zero probability $1/8$ and tail $5101e^{-100}$. It satisfies both chosen criteria; this comparison alone does not validate it for a real application.

The callable below draws 100,000 independent one-week datasets per prior, with distinct PCG64 seeds 20260976 and 20260977. Each replicate draws its own rate and then its count. The reference estimands are the rate-tail indicator and zero-count indicator; exact means and variances are also returned as references, without imposing an unstable sample-moment criterion on the highly skewed small-shape distribution. For an indicator with exact probability $r$, use independent-simulation MCSE $\\sqrt{r(1-r)/100000}$. The declared finite regression width is six such MCSE plus $1/100000$. Rare events can be absent in a finite run; zero observed events never proves their probability zero.

To preserve tiny rates, the program samples $G\\sim\\operatorname{Gamma}(a+1,1)$ and $U\\sim\\operatorname{Uniform}(0,1)$, then stores $\\log\\lambda=\\log G+\\log U/a-\\log b$. This construction is exact in real arithmetic: conditional on $G=g$, $X=gU^{1/a}$ has density $a x^{a-1}/g^a$ for $0<x<g$; integrating against $g^ae^{-g}/\\Gamma(a+1)$ gives $x^{a-1}e^{-x}/\\Gamma(a)$. The rate tail is evaluated on the log scale. Exponentiating can underflow to a floating zero; its count is explicitly reported. Those floating zeros represent tiny positive rates, not an atom in the Gamma prior.

Reproduction requires the declared existing CPython, NumPy and SciPy versions. Save the one following fence as cbm_prior_predictive.py and call run_prior_predictive_companion() in an isolated root-owned process. The function has no file, network, stdin or stdout I/O and returns a bounded dictionary. It supplies 200,000 boosted-Gamma, uniform and Poisson draws each; no model fitting occurs. All code here is unexecuted by the authors. The original duty is completed as a source model pending actual root execution, and this additional companion is not a substitute for any of the three principal cases or a hierarchical prior-predictive study.

An audit rubric asks whether the observation unit is a full one-week dataset, each rate is drawn once per replicate, both analytic domain tests are retained, underflow is disclosed, seeds and cost are recorded, and simulation error is separated from domain adequacy. A changed domain requires changing the criteria and rerunning; it cannot inherit the present plausibility conclusion.

## Solutions: executable prior-predictive companion

The literal Python listing below is unexecuted by the authors. Its callable returns the declared bounded result and performs no external I/O.

\`\`\`python
import math
import platform
import numpy as np
import scipy
from scipy import special

DEPENDENCIES = {"CPython": "3.14.7", "NumPy": "2.5.2", "SciPy": "1.18.1"}

def _require(condition, message):
    if not condition:
        raise ValueError(message)

def _environment():
    actual = {"CPython": platform.python_version(),
              "NumPy": np.__version__, "SciPy": scipy.__version__}
    _require(actual == DEPENDENCIES, "use the pinned existing environment")
    return actual

def run_prior_predictive_companion():
    environment = _environment()
    size = 100000
    rows = []
    for name, a, b, seed in [
        ("small_shape", 0.01, 0.01, 20260976),
        ("proper_alternative", 3.0, 1.0, 20260977),
    ]:
        rng = np.random.Generator(np.random.PCG64(seed))
        # Shape augmentation: G*U**(1/a) is Gamma(a,1).
        g = rng.gamma(a + 1.0, 1.0, size=size)
        _require(bool(np.all(np.isfinite(g) & (g > 0))), "invalid gamma variate")
        u = 1.0 - rng.random(size)
        log_rate = np.log(g) + np.log(u) / a - math.log(b)
        _require(bool(np.all(np.isfinite(log_rate))), "nonfinite log rate")
        with np.errstate(under="ignore"):
            rates = np.exp(log_rate)
        _require(bool(np.all(np.isfinite(rates) & (rates >= 0))), "invalid rate")
        counts = rng.poisson(rates)
        tail_reference = float(special.gammaincc(a, b * 100.0))
        zero_reference = math.exp(a * (math.log(b) - math.log(b + 1.0)))
        tail_estimate = float(np.mean(log_rate > math.log(100.0)))
        zero_estimate = float(np.mean(counts == 0))
        tail_se = math.sqrt(tail_reference * (1.0 - tail_reference) / size)
        zero_se = math.sqrt(zero_reference * (1.0 - zero_reference) / size)
        rows.append({
            "name": name, "shape": a, "rate": b, "seed": seed,
            "rng": "Generator(PCG64)", "independent_datasets": size,
            "rate_mean_reference": a / b,
            "rate_variance_reference": a / (b * b),
            "count_mean_reference": a / b,
            "count_variance_reference": a / b + a / (b * b),
            "tail_reference": tail_reference, "tail_estimate": tail_estimate,
            "tail_iid_mcse_reference": tail_se,
            "zero_reference": zero_reference, "zero_estimate": zero_estimate,
            "zero_iid_mcse_reference": zero_se,
            "finite_precision_zero_rates": int(np.sum(rates == 0.0)),
            "domain_criteria": {"rate_tail_at_most_1e-4": tail_reference <= 1e-4,
                                "zero_count_probability_at_most_point2": zero_reference <= 0.2},
            "finite_regression_checks": {
                "tail": abs(tail_estimate - tail_reference) <= 6.0 * tail_se + 1.0 / size,
                "zero_count": abs(zero_estimate - zero_reference) <= 6.0 * zero_se + 1.0 / size,
            },
            "cost": {"boosted_gamma_draws": size, "uniform_draws": size,
                     "poisson_draws": size},
        })
    exact_alternative_tail = 5101.0 * math.exp(-100.0)
    _require(abs(rows[1]["tail_reference"] / exact_alternative_tail - 1.0) < 1e-10,
             "gamma tail reference mismatch")
    _require(rows[0]["tail_reference"] > math.exp(-2.0) / 202.0,
             "small-shape tail lower bound failed")
    _require(abs(rows[1]["zero_reference"] - 0.125) < 1e-14,
             "predictive zero reference mismatch")
    return {
        "case_id": "COMM06-CASE-01-PRIOR-COMPANION", "environment": environment,
        "settings": {"size_per_prior": size, "rate_unit": "events per week",
                     "one_week_exposure": 1.0,
                     "hypothetical_prior_tail_limit": 1e-4,
                     "hypothetical_predictive_zero_limit": 0.2},
        "rows": rows,
        "interpretation": "iid simulation estimates with analytic references; finite criteria are not universal guarantees",
        "precision_boundary": "log rates preserve the Gamma draw; zero floating rates are underflow representations, not a prior atom",
    }
\`\`\`

## References: measures, reproducible generators and prior prediction

The change-of-variables, Tonelli and conditional-probability arguments used in the exposition have their hypotheses stated where applied. The public numerical companion uses the official [NumPy PCG64 documentation](https://numpy.org/doc/stable/reference/random/bit_generators/pcg64.html) for the named bit generator; complete library versions are pinned because distribution-generating transformations are part of reproduction. All algebraic references and the Gamma augmentation argument are supplied locally. No source-level review or prospective execution protocol is a human learning study.

`;export{e as default};