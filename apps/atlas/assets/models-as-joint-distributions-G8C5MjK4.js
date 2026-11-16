var e=`---
parent_id: book-probabilistic-graphical-models
chapter_id: models-as-joint-distributions
title: "Models as Joint Distributions"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Models as Joint Distributions

## The object being modelled

**Definition 1.1 (Graphical model).** A graphical model specifies a joint probability law for a collection of variables. An inference algorithm computes something about that law. A learning procedure estimates its unknown quantities from observations. These are distinct mathematical objects, even when one software routine implements all three. A graph can reduce the description and computation of a joint law, but it cannot replace a normalising probability or determine missing numerical parameters.

This opening chapter rewrites the modelling distinction in [the earlier Structured text](../structured-probabilistic-learning/a-probability-model-is-more-than-a-fitted-curve.md) for joint distributions. The earlier chapter's Gaussian regression derivation remains there for the separately commissioned kernel course. Preparation here is elementary joint and conditional probability, expectation, likelihood and Bayesian updating. Most arguments use finite state spaces so that every conditioning qualification can be inspected directly; later chapters state additional density and Gaussian assumptions explicitly.

Let a random vector have coordinates indexed by a finite vertex set. Its joint mass function p is nonnegative and sums to one over all configurations. A marginal is obtained by summing out unwanted coordinates. For an observed configuration e with positive marginal probability, the conditional law of a remaining configuration z is
$$
p(z\\mid e)=\\frac{p(z,e)}{\\sum_{z'}p(z',e)}.
$$
The denominator is the evidence probability. It must be positive. If it is zero, the elementary conditional formula is undefined, rather than a licence to replace the denominator by a small number and claim an exact posterior. A softened likelihood is a different model, which may be useful but must be described as such.

For continuous observations, probabilities of individual values are usually zero. Conditional densities and regular conditional kernels replace this elementary ratio. A density ratio can define a version where the marginal density is positive, while values on marginal-null sets remain version choices. A numerical posterior at a reported measurement relies on a specified observation model, including its resolution and noise, rather than on the positive probability of that exact real number.

## Chain rules and graphical restrictions

For an ordered collection of finite variables, repeated conditioning gives
$$
p(x_1,\\ldots,x_d)=p(x_1)\\prod_{j=2}^dp(x_j\\mid x_1,\\ldots,x_{j-1}).
$$
When a past configuration has probability zero, choose its conditional row arbitrarily as a normalised probability. The displayed identity still holds: a zero-probability prefix makes the product zero before that row is reached. Thus the chain rule can be represented with normalised kernels even for distributions containing zeros.

The rule alone places no restriction on the joint law. A directed graph imposes a restriction when it replaces the full past in some conditional factor by only its selected parents. This reduction needs conditional independence or a substantive modelling assumption. Drawing an arrow does not make that reduction empirically true. Chapter 3 will prove the relationship between these local kernels and the resulting joint law.

An undirected representation instead multiplies nonnegative factors and divides by a partition function. Factors need not individually sum to one. A finite table of nonnegative factors gives a probability only when their total product sum is strictly positive. In continuous models the corresponding integral must also be finite. Changing a factor changes the normalizer and often every marginal, even if its scope involves only a few coordinates.

A graph and a parameter vector therefore describe a family of possible joint laws. Parameters can be fixed, estimated, or assigned a prior. Conditioning on observed variables within one law is a different operation from conditioning a parameter prior on a dataset. Writing each variable's role prevents a latent state, a shared parameter and an observed predictor from being inadvertently treated as interchangeable.

## Likelihood, prior and predictive law

Suppose observations have conditional joint law $p_\\theta(x)$ and a parameter has prior probability $\\pi(\\theta)$. For a finite parameter set, the hierarchical joint law is their product. Marginalizing the parameter gives a mixture law for observations. Conditioning on data D gives the posterior
$$
\\pi(\\theta\\mid D)=\\frac{p_\\theta(D)\\pi(\\theta)}{\\sum_{\\vartheta}p_{\\vartheta}(D)\\pi(\\vartheta)}.
$$
The posterior predictive law for a fresh observation is the posterior mixture of its conditional law, under the assumption that the fresh observation and the observed dataset are conditionally independent given the shared parameter. That conditional-independence assumption is part of the model, not a consequence of the word fresh.

The likelihood is a function of the parameter with the observed data fixed. It need not sum to one over parameters. A posterior is a probability over parameters after multiplying by a prior and normalising. The evidence is a probability of the data under the prior model. Confusing these roles obscures both inference and model comparison, particularly when two models have different latent spaces.

Integrating out a shared parameter generally creates dependence among observations. Conditional independence given the parameter does not imply marginal independence. Conversely, conditioning on part of the observations changes the mixing distribution and hence the predictive dependence. Later latent-variable and state-space models use precisely these two operations, so their order must be kept explicit.

## Worked example 1: a shared latent operating condition

**Example 1.2 (a shared latent operating condition).** Choose a hidden state H with probability one half for each of two values. Conditional on H, two binary alarms are independent and each has success probability one quarter in the low state and three quarters in the high state. Each alarm has marginal success probability one half. Their simultaneous-success probability is
$$
\\frac12\\left(\\frac14\\right)^2+\\frac12\\left(\\frac34\\right)^2=\\frac5{16}.
$$
This exceeds the product of marginal probabilities by one sixteenth. The observed alarms are positively correlated even though they are independent conditional on the hidden operating condition. Observing the first success changes the posterior high-state probability to three quarters, so the predictive success probability for the second becomes five eighths.

This model has a simple latent fork graph. It does not say that making the first alarm sound would change the operating condition or force the second alarm to sound. The displayed update concerns information from observing an alarm. An intervention requires an additional model of how that intervention changes a generating mechanism. The causal chapter will formalize this distinction rather than read it from a posterior ratio.

## Prediction depends on a decision and a loss

A probability prediction is a distribution. A point action extracted from it depends on the loss. Under squared error the conditional mean minimizes expected loss, because expanding around the conditional mean decomposes risk into conditional variance plus squared displacement. Under absolute error, a median is optimal. For a binary action with false-positive cost c and false-negative cost d, conditional comparison of the two losses chooses the positive action exactly when its conditional success probability is at least $c/(c+d)$, with either action allowed at equality.

A graph does not determine those costs. Nor does a maximum-probability latent configuration necessarily give the best componentwise decisions. The most probable joint configuration and the list of marginal modes are different optimisation problems. We will see this again in HMM smoothing and most-probable-path decoding, where each is useful for a different question.

**Proposition 1.3 (Log-score divergence).** A proper scoring rule assesses the probability prediction itself. For log loss, when a true finite distribution r is predicted by q with positive mass wherever r is positive, expected excess loss relative to predicting r equals
$$
\\sum_xr(x)\\log\\frac{r(x)}{q(x)}=D(r\\|q)\\ge0.
$$
To prove nonnegativity, apply the concavity of log to the likelihood ratio q over r on r's support, whose r-expectation is at most one. Equality requires the ratio to be one there and no missing total mass elsewhere. If q is zero at a positive-r point, expected loss is infinite and the comparison remains valid in the extended sense. A sharp but wrong distribution can therefore be heavily penalized; sharpness alone is not accuracy.

## Worked example 2: one estimate cannot answer every prediction question

**Example 1.4 (one estimate cannot answer every prediction question).** Suppose a binary conditional success probability is three fifths. Squared-error prediction returns three fifths. Under equal-cost binary classification the optimal action is success, because its error probability is two fifths. If a false-positive action costs four and a false-negative action costs one, the threshold is four fifths, so the optimal action is failure. The underlying conditional law has not changed; the task has.

For a two-bit joint law giving masses .40, .25, .01 and .34 to configurations 00, 01, 10 and 11, the most probable configuration is 00. The second bit has marginal probability .59 of being one, whereas the first has probability .35. Thus the componentwise marginal-mode vector is 01, which is not the most probable joint configuration. Under a loss that counts wrong bits separately it is optimal; under a loss that penalizes any joint mismatch equally, 00 is optimal. An inference result must identify which decision it supports.

## Conditional uncertainty and model uncertainty

**Proposition 1.5 (Conditional total variance).** If a latent parameter and a future variable are square-integrable under the posterior predictive law, the total-variance identity gives
$$
\\operatorname{Var}(Y\\mid D)=E[\\operatorname{Var}(Y\\mid\\Theta,D)\\mid D]
+\\operatorname{Var}(E[Y\\mid\\Theta,D]\\mid D).
$$
The first term is within-component variation and the second variation of component means. To prove the identity, subtract the predictive mean, add and subtract the component mean, expand the square, and condition on the parameter. The cross term vanishes because the remaining within-component residual has conditional mean zero.

The two terms are conditional on the chosen joint model. Neither automatically measures the possibility that all the component likelihoods are wrong, that a confounder was excluded, or that the observation process changes after deployment. Adding a latent variable can expand the family, but does not eliminate this issue by notation alone. Sensitivity analysis compares explicitly different choices; it is not represented by claiming a posterior already includes every possible source of uncertainty.

Similarly, a posterior obtained after fitting a hyperparameter to the same dataset is a plug-in posterior unless that fit has itself been included in a coherent joint model. Treating the fitted value as fixed can be a useful approximation, but does not integrate over its uncertainty. The distinction matters for graph selection, mixture size selection and empirical-Bayes estimates in later chapters.

## Worked example 3: nonidentifiability survives an infinite sample

**Example 1.6 (nonidentifiability survives an infinite sample).** Let a latent two-component Bernoulli model choose its first component with probability w and use success probabilities u and v in the two components. A single binary observation has success probability $wu+(1-w)v$. Many triples give the same value: for example equal mixing of probabilities one quarter and three quarters gives the same observed law as two identical components each having probability one half.

No number of iid single-observation replicates distinguishes those parameter triples if the latent component is independently redrawn for each replicate. Their observed likelihoods are identical for every dataset. By contrast, if one component is shared by several observations within a group, the grouped joint law contains additional information through dependence, as in the first example. What is observed together is therefore part of identifiability.

Even in an identifiable mixture family, exchanging the names of component labels preserves the observed law. Parameters may be identified only up to label permutations. A posterior can retain symmetric label modes, and a numerical algorithm selecting one mode does not establish a scientific distinction between component names. The EM chapter will return to this symmetry and to local rather than global optimisation.

## Replication and the unit of independence

A dataset represented by a product of identical observation laws asserts iid replicates conditional on its parameters. A time series, a household sample, or repeated readings of one latent object generally has another joint law. Replacing that law by an iid product can change both fitted parameters and uncertainty. Merely using a graphical model does not prevent such misspecification; the edges must encode the actual proposed dependence structure.

For instance, repeating one recorded bit n times does not provide n independent observations of an unknown success probability. Under the duplicate-reading model their joint likelihood is the likelihood of one bit, supported only on all-zero or all-one configurations. The iid likelihood instead raises a Bernoulli probability to power n, producing unjustified certainty. The observed table looks larger, but the probability model decides how much information it contains.

Missing values also require distinguishing a missing coordinate from the mechanism that hides it. Summing out a latent coordinate is legitimate for the specified joint law. Ignoring an informative observation indicator can change that law. A model for which values are seen may be needed before a posterior based on the observed entries answers the intended question. Graphical notation can express this mechanism explicitly, but does not make missingness assumptions automatic.

In the chapters ahead, start each inference derivation by writing the joint distribution and the observed event or density. Check normalisation and support before performing elimination, optimisation or simulation. This habit identifies the target against which approximation error, parameter estimation and causal claims must later be assessed.

## Exercises

<a id="models-as-joint-distributions-ex-1"></a>

### Exercise 1

For the latent-alarm example, compute the covariance between the two alarms.

<details><summary>Hint 1</summary>

Use the simultaneous-success probability.

</details>

<details><summary>Hint 2</summary>

Subtract the product of the two marginal means.

</details>

<details><summary>Full solution</summary>

Each mean is one half and the joint success probability is five sixteenths. The covariance is therefore five sixteenths minus one quarter, equal to one sixteenth. Equivalently it is the variance of the conditional success probability, since the alarms have zero conditional covariance given the hidden state. Both calculations rely on the stated shared-state model.

</details>

<a id="models-as-joint-distributions-ex-2"></a>

### Exercise 2

In the same example, compute the probability of the high hidden state after both alarms succeed.

<details><summary>Hint 1</summary>

Use the two conditional likelihoods.

</details>

<details><summary>Hint 2</summary>

The prior weights are equal.

</details>

<details><summary>Full solution</summary>

The high-state likelihood is nine sixteenths and the low-state likelihood one sixteenth. Equal prior weights make the posterior high-state probability nine tenths. This differs from three quarters after only one success. It is an update about the shared hidden state, not a claim that one alarm causally changes the other.

</details>

<a id="models-as-joint-distributions-ex-3"></a>

### Exercise 3

Prove that any table of normalised sequential conditional kernels defines a finite joint probability.

<details><summary>Hint 1</summary>

Sum in reverse order.

</details>

<details><summary>Hint 2</summary>

Each last-coordinate row sums to one.

</details>

<details><summary>Full solution</summary>

The product is nonnegative. Summing the last coordinate removes its normalised conditional factor while holding its predecessors fixed. Repeat backward until only the first probability remains, whose sum is one. Thus the product normalizes without requiring strictly positive entries. Acyclic graphical factorizations use a topological order to apply this same argument.

</details>

<a id="models-as-joint-distributions-ex-4"></a>

### Exercise 4

What is wrong with calling a likelihood a probability distribution over parameters?

<details><summary>Hint 1</summary>

Hold the observed dataset fixed.

</details>

<details><summary>Hint 2</summary>

Check which variable is normalised by the sampling model.

</details>

<details><summary>Full solution</summary>

The sampling law normalizes over possible data at a fixed parameter. With the data fixed, its values across parameters need not sum or integrate to one. A parameter probability requires a prior and posterior normalisation or another explicitly specified law. Even a normalised likelihood can depend on the chosen parameterization and does not automatically become a Bayesian posterior.

</details>

<a id="models-as-joint-distributions-ex-5"></a>

### Exercise 5

Derive the binary action threshold with false-positive cost c and false-negative cost d.

<details><summary>Hint 1</summary>

Write the two conditional expected costs.

</details>

<details><summary>Hint 2</summary>

Solve their inequality.

</details>

<details><summary>Full solution</summary>

If the success probability is p, the positive action has expected cost $c(1-p)$ and the negative action cost $dp$. The positive action is weakly preferable precisely when $c(1-p)\\le dp$, equivalent to $p\\ge c/(c+d)$ for positive total cost. At equality both actions minimize. The threshold depends on the loss, not merely on which outcome is more probable.

</details>

<a id="models-as-joint-distributions-ex-6"></a>

### Exercise 6

Why can componentwise marginal modes differ from a joint mode?

<details><summary>Hint 1</summary>

Look at the two-bit worked example.

</details>

<details><summary>Hint 2</summary>

The losses optimise different functions of a configuration.

</details>

<details><summary>Full solution</summary>

A joint mode maximizes one configuration probability. Componentwise modes maximize each coordinate probability after summing over the others. These sums can collect their largest contributions from different configurations. In the example the joint mode is 00 with probability .40, while the marginal modes give 01. Additive bitwise error and whole-vector error consequently have different optimal actions.

</details>

<a id="models-as-joint-distributions-ex-7"></a>

### Exercise 7

Show that squared-error conditional risk is minimized at the conditional mean.

<details><summary>Hint 1</summary>

Add and subtract that mean in the residual.

</details>

<details><summary>Hint 2</summary>

The centred cross term has conditional expectation zero.

</details>

<details><summary>Full solution</summary>

For a proposed action a, expand the squared residual around the conditional mean m. Its conditional expectation is the conditional variance plus $(a-m)^2$, since the residual about m has conditional mean zero. The variance term does not depend on the action, so the minimum is at m. Square integrability makes the expansion and expectations legitimate.

</details>

<a id="models-as-joint-distributions-ex-8"></a>

### Exercise 8

Explain why a symmetric two-component mixture has label nonidentifiability.

<details><summary>Hint 1</summary>

Exchange both component parameters and their mixing weights.

</details>

<details><summary>Hint 2</summary>

The observed mixture sum is unchanged.

</details>

<details><summary>Full solution</summary>

After exchanging labels, each term in the mixture sum simply occupies the position of the other. Every observed probability is unchanged, so the likelihood cannot distinguish the names. A symmetric prior also preserves this posterior symmetry. Imposing a label ordering is a representation convention unless a separate substantive meaning distinguishes the components.

</details>

<a id="models-as-joint-distributions-ex-9"></a>

### Exercise 9

Give the correct likelihood for n exact duplicate readings of a single Bernoulli bit.

<details><summary>Hint 1</summary>

The readings are deterministic copies after the bit is generated.

</details>

<details><summary>Hint 2</summary>

Only two observed vectors are possible.

</details>

<details><summary>Full solution</summary>

The all-one vector has probability p and the all-zero vector probability one minus p. Every mixed vector has probability zero. The likelihood of the all-one record is p, not p to power n. There is one random bit despite n entries. An iid product would describe n independently generated bits and therefore another observation model.

</details>

<a id="models-as-joint-distributions-ex-10"></a>

### Exercise 10

Can a narrow model-conditional posterior by itself establish that the model family describes the actual observation process?

<details><summary>Hint 1</summary>

Identify what probability is being conditioned.

</details>

<details><summary>Hint 2</summary>

An excluded possibility has no posterior mass to redistribute.

</details>

<details><summary>Full solution</summary>

The posterior is computed within a chosen joint family, so its width measures uncertainty among possibilities that family contains. It cannot assign mass to an excluded mechanism or assess every form of misspecification. A concentrated posterior may arise under a restrictive incorrect likelihood. Assessing the family requires separate model comparisons, observations or sensitivity arguments, with their own assumptions and targets.

</details>
`;export{e as default};