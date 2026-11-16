# Predict outcomes when group size carries information

A study recruits a member by first choosing a group and then using a ticket rule. Its first accepted member belongs to a large group. What have we learned about the population? What should we predict for a person selected by choosing a group uniformly? What if we instead choose uniformly among all members? These questions use the same population but different probability experiments.

We will derive the recruitment likelihood, update a two-population prior, and calculate both predictions exactly. The final distinction concerns the order of normalization and Bayesian averaging: a ratio of posterior expected totals can describe a coherent experiment while answering a different question from prediction in one persistent population.

Preparation: finite Bayes calculations, conditional expectation, covariance and a geometric series. The existing [hierarchical chapter](../../books/bayesian/09_hierarchical.md) explains that group size can be informative and distinguishes equally likely groups from randomly selected visitors. This investigation develops those points in a finite model, with no fitted hierarchy or MCMC. Allow about 120–150 minutes including [practice](./informative_size_v1-practice.md); this is an unpiloted study estimate.

> Predict first: does accepting a large-group member make a population with many large groups more plausible? Will averaging success risks over groups give the same answer as averaging them over members? Can an unknown number of rejected attempts simply be omitted from a likelihood?

## Keep one fixed population throughout recruitment

There are exactly four groups. A small group has one member; a large group has three. Let $r$ be the fraction of the four groups that are large. The two possible compositions have the following proper prior:

$$\Pr(r=1/4)=\Pr(r=3/4)=1/2.$$

The composition is drawn once and stays fixed through all attempts and the subsequent prediction. Under $r=1/4$ there is exactly one large group and three small groups; under $r=3/4$ there are exactly three large groups and one small group. We are not generating four independent Bernoulli group types: that would be a different prior with additional possible compositions. Group labels carry no further information in the recorded data.

Every member of a small group has known future success probability $\mu_S=1/4$. Every member of a large group has known future success probability $\mu_L=3/4$. For a selected member of type $T$, a future binary outcome has distribution $Y\mid T\sim\operatorname{Bernoulli}(\mu_T)$. These probabilities are **future-event means**, not realized fractions of successful members. In particular, a one-member group can have success probability one quarter. We do not assign it a realized quarter of a success.

The only recruitment observation is a type, large or small. No success outcome is observed. Conditional on a member's type, the future success trial is independent of the recruitment tickets. A prediction below is for one future trial; it is not the probability that at least one person in a group succeeds.

## Derive the observation mechanism before updating

Each recruitment attempt uses the same persistent population:

1. Choose one of its four groups uniformly, **with replacement** across attempts.
2. Independently choose a ticket uniformly from $\{1,2,3\}$.
3. Accept if the ticket is no greater than the chosen group's size. Otherwise reject and start a new attempt.

An accepted ticket names the corresponding member within its group. Thus a large group accepts every ticket, while a small group accepts only ticket one. Sampling with replacement and fresh independent tickets make attempts independent conditional on $r$, even if the same group is chosen again.

Write $R$ for a rejected attempt, $L$ for an acceptance from a large group and $S$ for an acceptance from a small group. On **one attempt**,

$$\Pr(R\mid r)=\rho(r)=\frac{2(1-r)}3,\qquad
\Pr(L\mid r)=r,\qquad
\Pr(S\mid r)=\frac{1-r}{3}.$$

These three probabilities sum to one. Acceptance has probability

$$a(r)=1-\rho(r)=\frac{1+2r}{3}>0.$$

The recorded observation is the type of the **first accepted** member. The number $K$ of earlier rejections is unrecorded. We must sum over it:

$$\begin{aligned}
\Pr(\text{first accepted type }L\mid r)
&=\sum_{k=0}^{\infty}\rho(r)^k r
=\frac{r}{1-\rho(r)}
=\frac{3r}{1+2r},\\
\Pr(\text{first accepted type }S\mid r)
&=\frac{(1-r)/3}{1-\rho(r)}
=\frac{1-r}{1+2r}.
\end{aligned}$$

The probabilities sum to one, and acceptance eventually occurs with probability one. Marginalizing an unobserved rejection count is not the same operation as claiming there were zero rejections. That latter event would use the raw one-attempt probabilities.

The selection rule favors large groups because they contribute more members. At fixed $r$, the first accepted member is uniform among all members of the population: each particular member can be proposed and accepted with probability $1/12$ per attempt, so each receives the same normalized probability after summing rejections.

## Update after a large group is observed

The first accepted member belongs to a large group. The likelihood and Bayes update are

| Composition | Prior mass | Likelihood of first accepted $L$ | Posterior mass |
| --- | ---: | ---: | ---: |
| $r=1/4$ | $1/2$ | $1/2$ | $5/14$ |
| $r=3/4$ | $1/2$ | $9/10$ | $9/14$ |

The prior-predictive probability of the observation is $(1/2)(1/2)+(1/2)(9/10)=7/10$. Dividing the two prior-times-likelihood weights by this number gives the displayed posterior. Seeing a large-group member favors the high-large-group composition, but does not determine it.

The selection mechanism supplies part of the likelihood. Treating the accepted member's group as an unfiltered uniform group would use likelihood $r$ and give a different posterior. The issue is not a numerical approximation: the observation protocol would have been changed.

<!-- EXPLORER -->

The explorer changes only the recorded first-accepted type, between $L$ and $S$. Switching replaces the one recorded observation; it does not add a second observation or reuse the displayed posterior as a new prior. Predict how the posterior and both future-selection targets should move before switching it. The prior, four-group composition, sizes, success probabilities, ticket rule and hidden rejection count remain fixed. The later tasks that log rejections or change group size require a new likelihood; they are outside these controls.

## Name the future selection target

For a fixed population, let $E_G$ denote expectation when a group is chosen uniformly from the four. For that group, write $N$ for its size and $\mu$ for its members' known future success probability.

**Uniform group then uniform member.** Choose a group with probability one quarter and then choose one of its members uniformly. Its success probability is

$$\mu_G(r)=E_G(\mu)
=(1-r)\frac14+r\frac34
=\frac14+\frac r2.$$

Each group has equal influence. An individual member of a small group is consequently more likely to be chosen than an individual member of a large group.

**Uniform member from the entire population.** Choose each of the population's members with equal probability. A group then has probability proportional to its size, so

$$\mu_I(r)=\frac{\sum_{g=1}^4N_g\mu_g}{\sum_{g=1}^4N_g}
=\frac{E_G(N\mu)}{E_G(N)}
=\frac{1/4+2r}{1+2r}.$$

The numerator is an expected number of future successes, not a count of successes already realized. Both the numerator and denominator concern the **same fixed population**.

| Composition | Total members | $\mu_G(r)$ | $\mu_I(r)$ |
| --- | ---: | ---: | ---: |
| $r=1/4$ | $6$ | $3/8$ | $1/2$ |
| $r=3/4$ | $10$ | $5/8$ | $7/10$ |

For prediction in our one persistent unknown population, first condition on its composition, calculate the intended target, and then average over its posterior. After observing $L$,

$$\Pr(Y_{\text{group target}}=1\mid L)
=\frac5{14}\frac38+\frac9{14}\frac58
=\boxed{\frac{15}{28}},$$

$$\Pr(Y_{\text{member target}}=1\mid L)
=\frac5{14}\frac12+\frac9{14}\frac7{10}
=\boxed{\frac{22}{35}}.$$

Both are posterior-predictive probabilities for a binary future event under their specified selection rules. Neither is the posterior probability of the high-large-group composition. Neither is an observed sample success proportion.

## Derive how size and risk move the target

For any fixed finite population of positive-size groups with group mean risks $\mu_g$, the two targets obey

$$\begin{aligned}
\mu_I-\mu_G
&=\frac{E_G(N\mu)}{E_G(N)}-E_G(\mu)\\
&=\frac{E_G(N\mu)-E_G(N)E_G(\mu)}{E_G(N)}
=\boxed{\frac{\operatorname{Cov}_G(N,\mu)}{E_G(N)}}.
\end{aligned}$$

This is a covariance over uniformly chosen **groups in that fixed population**. It explains the sign of the difference. Equal group sizes force it to vanish. Zero covariance also suffices even when sizes vary; positive association makes the uniform-member risk larger. A different association can reverse that ordering.

Here, for a uniformly chosen group, write $Z=1$ for large. Then $Z\sim\operatorname{Bernoulli}(r)$, $N=1+2Z$, $\mu=1/4+Z/2$, and

$$\operatorname{Cov}_G(N,\mu)=r(1-r),\qquad
\mu_I(r)-\mu_G(r)=\frac{r(1-r)}{1+2r}.$$

This Bernoulli description is of one **uniformly selected group conditional on a fixed composition**. It does not replace the fixed four-group population with independent Bernoulli group types. Averaging the conditional differences over the posterior after $L$ gives $22/35-15/28=13/140$.

This distinction belongs to the framework of informative group size. [Nevalainen, Datta and Oja, sections 2 and 3.1](https://arxiv.org/pdf/1803.01175), formulate joint group-size/outcome models and distinguish a typical-group member's mean from statistics that give larger groups more influence. Their random-cluster framework is broader and different from this exact four-group Bayesian construction. We derive the present sampling and posterior calculations directly.

## Keep normalization inside its intended experiment

Let $E_\pi$ mean expectation over the posterior after observing $L$. A tempting replacement for the member prediction is

$$Q=\frac{E_\pi[E_G(N\mu)]}{E_\pi[E_G(N)]}.$$

Since $E_\pi(r)=4/7$, the two expectations are $39/28$ and $15/7$, giving

$$Q=\frac{13}{20}\ne\frac{22}{35}
=E_\pi\!\left[\frac{E_G(N\mu)}{E_G(N)}\right].$$

In this linear two-type model, $Q=\mu_I(E_\pi r)$ as well. That numerical equality follows from the displayed formulas; it is not a general permission to substitute posterior means into nonlinear predictions. A ratio of expected **population totals** gives the same $Q$ here because all populations contain exactly four groups, and the factors of four cancel.

$Q$ does have an exact interpretation under a **different protocol**. For every proposal attempt, independently redraw a composition from the posterior weights $5/14,9/14$, select a uniform group in that newly drawn population and apply the same three-ticket rule. Discard the entire draw after a rejection and redraw it on the next attempt. Stop at the first acceptance and generate the selected member's future outcome.

In this experiment the composition is not persistent. Its average per-attempt acceptance probability is $E_\pi[E_G(N)]/3$, and its per-attempt accepted-success probability is $E_\pi[E_G(N\mu)]/3$. Summing the geometric rejection series gives their ratio, exactly $Q$.

Equivalently, the accepted composition weights are proportional to its posterior proposal weight times its acceptance probability. They become

$$\frac{(5/14)(1/2)}{5/7}=\frac14,\qquad
\frac{(9/14)(5/6)}{5/7}=\frac34.$$

Those acceptance-weighted populations give success $(1/4)(1/2)+(3/4)(7/10)=13/20$. In the intended persistent-population protocol, every possible composition eventually accepts with probability one, so its posterior weight remains $5/14$ or $9/14$ when averaging the conditional member prediction. Redrawing a composition after each rejected proposal changes the experiment and its answer.

## Record enough of the sampling story

The likelihood above applies when the rejected-attempt count was not recorded. If a record additionally states how many rejections occurred before the first acceptance, it supplies new data. Its probability must be derived from the full attempt sequence. Conversely, simply learning an accepted type does not authorize inserting a particular hidden sequence into its likelihood.

Neither group weighting nor member weighting is universally correct. A question about a typical group and one about a typical member ask for different distributions. The data-collection process determines the likelihood; the future selection rule determines the prediction target; the prior states uncertainty about the persistent population. Keep all three visible before normalizing or averaging. Use [practice](./informative_size_v1-practice.md), then [hints](./informative_size_v1-hints.md) if needed, before consulting the separate [worked answers](./informative_size_v1-answers.md).

---

Printable copy: [study edition (PDF)](../../pdfs/bayesian/study-editions/informative_size_v1.pdf), the lesson and practice without worked answers.
