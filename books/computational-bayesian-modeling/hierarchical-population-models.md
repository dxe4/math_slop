
# Hierarchical Population Models

Preparation is the primary [Bayesian Inference course](#/books/bayesian/course-syllabus), probability with conditional expectation, and the preceding modeling chapter when one is listed. Computational algorithms continue in [MCMC Volume 1](#/books/mcmc/01-probability-computation).


When data are organized into groups---schools, hospitals, experimental batches, or geographic regions---we face a tension. Estimating each group separately wastes shared information; pooling all groups together ignores genuine differences. Hierarchical models resolve this tension by introducing a population distribution that links group-level parameters. The result is partial pooling: each group borrows strength from the others, with the degree of borrowing determined by the data.

## The partial-pooling idea

Suppose we observe successes $y_{j}$ out of $n_{j}$ trials in groups $j = 1, \dots, J$. The separate estimate $\hat{p}_{j} = y_{j}/n_{j}$ is noisy for small groups. Complete pooling assumes a single probability $p$ for all groups, which is wrong if the groups genuinely differ. A hierarchical model allows related but distinct probabilities:

$$y_{j} \mid p_{j} \sim \operatorname{Binomial}(n_{j}, p_{j}),$$

$$\operatorname{logit}(p_{j}) = \alpha + u_{j},$$

$$u_{j} \mid \tau \sim \mathcal{N}(0, \tau^{2}).$$

The population-level parameters $\alpha$ and $\tau$ are given defensible priors. The standard deviation $\tau$ controls the conditional spread and hence one component of pooling. When $\tau\approx0$, the group probabilities are pulled close together. A larger $\tau$ permits greater between-group variation and can reduce shrinkage toward $\alpha$, but near-separate estimation also requires informative group data. Conditional on fixed hyperparameters the group effects are independent for every $\tau$; marginalizing the shared hyperparameters induces dependence, so $\tau$ does not change the graphical conditional-independence structure.

The key insight is that shrinkage is automatic. A small group with noisy data is pulled more strongly toward the population mean than a large group with precise data. This happens because the posterior for each $p_{j}$ depends on both its own data and the population distribution inferred from all groups.

## Gaussian analogue: exact shrinkage

A transparent special case uses normal distributions at every level. Let group estimate $x_{j} \mid \theta_{j} \sim \mathcal{N}(\theta_{j}, s_{j}^{2})$ and $\theta_{j} \sim \mathcal{N}(\mu, \tau^{2})$, with $\mu$ and $\tau$ treated as known for the moment. Completing the square gives

$$\theta_{j} \mid x_{j} \sim \mathcal{N}(m_{j}, v_{j}),$$

where

$$v_{j} = \left(\frac{1}{s_{j}^{2}} + \frac{1}{\tau^{2}}\right)^{-1}$$

and

$$m_{j} = v_{j}\left(\frac{x_{j}}{s_{j}^{2}} + \frac{\mu}{\tau^{2}}\right).$$

The posterior mean can be written as

$$m_{j} = w_{j} x_{j} + (1 - w_{j}) \mu, \qquad w_{j} = \frac{\tau^{2}}{\tau^{2} + s_{j}^{2}}.$$

Large observation uncertainty $s_{j}^{2}$ causes more shrinkage toward $\mu$; large between-group variation $\tau^{2}$ causes less. A group with precise data (small $s_{j}^{2}$) is pulled only slightly toward the population mean. A group with noisy data (large $s_{j}^{2}$) is pulled strongly toward the center.

**Numerical example.** Let $x_{j} = 12$, $s_{j} = 4$, $\mu = 8$, and $\tau = 2$. Then $w_{j} = 4/(4+16) = 0.2$ and $m_{j} = 0.2(12) + 0.8(8) = 8.8$. The uncertain group estimate is strongly pooled toward the population mean. If instead $s_{j} = 1$, then $w_{j} = 4/5 = 0.8$ and $m_{j} = 0.8(12) + 0.2(8) = 11.2$, showing much less shrinkage.

## Estimating the population variance

In practice, $\tau$ is unknown and must be estimated from the data. With few groups, the posterior for $\tau$ may be sensitive to its prior. A common choice is a half-Cauchy prior on $\tau$, which allows large values but penalizes them gently. If the data are consistent with $\tau = 0$, the posterior concentrates near zero and the model approaches complete pooling. If the data show strong between-group differences, the posterior for $\tau$ shifts right.

Sensitivity analysis is essential. Re-run the analysis with alternative priors on $\tau$---for example, a half-normal with different scale or an exponential---and check whether posterior inferences for group means change materially. If they do, those inferences are sensitive to the tested priors; assess prior plausibility and likelihood concentration before attributing the sensitivity to weak information in the data.

## Exchangeability and its limits

The hierarchical model assumes that the group parameters $\theta_{1}, \dots, \theta_{J}$ are exchangeable: their joint distribution is invariant to permutation of indices. Exchangeability does not mean the groups are identical; it means we have no information that distinguishes one group from another before seeing the data.

Hierarchies do not excuse omitted structure. If group measurements use different instruments, or if selection into the sample depends on outcomes, exchangeability may be implausible. In such cases, add measured covariates or narrow the inferential claim. A model that ignores known group differences is not rescued by adding a random effect.


## Empirical Bayes and full Bayes

An empirical Bayes approach estimates hyperparameters such as $\mu$ and $\tau$ and then plugs those estimates into the group-level posteriors. Treating these estimates as fixed omits their uncertainty and can understate uncertainty about the group effects. A full Bayesian approach integrates over the joint posterior of the hyperparameters. When the moments exist, the law of total variance gives

$$\operatorname{Var}(\theta_j \mid y)
= \mathbb{E}\!\left[\operatorname{Var}(\theta_j \mid y,\mu,\tau)\mid y\right]
+ \operatorname{Var}\!\left(\mathbb{E}[\theta_j \mid y,\mu,\tau]\mid y\right).$$

The second term is nonnegative, but the first term is an average of conditional variances, not necessarily the variance at an empirical Bayes estimate. Thus full Bayesian credible intervals need not always be wider than plug-in intervals. Their width and calibration depend on the model, priors, data, and interval construction.

The difference matters most when $J$ is small. With $J = 3$, the empirical Bayes estimate of $\tau$ may be zero (complete pooling) even when the data suggest some variation. Depending on the model, priors and data, the full Bayesian posterior for $\tau$ can retain uncertainty near zero and at larger values; its mixture of shrinkage profiles is not universally more conservative than a plug-in analysis.

## Priors for the population scale

The choice of prior for $\tau$ is consequential. Common options include:

- **Half-Cauchy$(0, \gamma)$:** Heavy tails allow large $\tau$. The scale $\gamma$ is also the median, so $\Pr(\tau\le\gamma)=1/2$; it is not an upper bound. Calibrate it through a stated predictive scale or quantile probability, and check any scientifically plausible upper-tail constraint separately.
- **Half-normal$(0, \sigma_{\tau})$:** Lighter tails; more informative.
- **Exponential$(\lambda)$:** A simple, proper alternative.

The half-Cauchy is popular because it is proper yet allows large values. However, with few groups, even the half-Cauchy can be influential. A prior predictive check---simulating group means from the prior---reveals whether the prior allows implausibly large between-group differences.

## Full worked example: eight schools

The classic "eight schools" example involves coaching programs in $J = 8$ schools. Let $y_{j}$ be the estimated coaching effect and $\sigma_{j}$ its standard error in school $j$. The model is:

$$y_{j} \mid \theta_{j} \sim \mathcal{N}(\theta_{j}, \sigma_{j}^{2}),$$

$$\theta_{j} \mid \mu, \tau \sim \mathcal{N}(\mu, \tau^{2}).$$

With $\sigma_{j}$ known and conditional on $\mu$ and $\tau>0$, the posterior for $\theta_{j}$ is normal with mean $w_{j} y_{j} + (1-w_{j})\mu$ and variance $(1/\sigma_{j}^{2} + 1/\tau^{2})^{-1}$, where $w_j=\tau^2/(\tau^2+\sigma_j^2)$. The marginal posterior $p(\theta_j\mid y)$ integrates these conditional distributions against $p(\mu,\tau\mid y)$ and is generally a mixture of normals, not a single normal distribution. At fixed $\mu$ and $\tau$, schools with large standard errors are shrunk more strongly toward $\mu$. See [Gelman's discussion of conditional conjugacy](https://sites.stat.columbia.edu/gelman/bayescomputation/Gelman2006.pdf), Section 2.1, for this distinction.

For the fully declared reference below, posterior mass near zero and in the right tail must be calculated under its specified proper priors rather than inferred from the sampling standard errors alone. Conditional shrinkage profiles change with $\tau$, so report its distribution and marginal school summaries instead of substituting only a point estimate.


## Multilevel regression

Hierarchical models extend naturally to regression settings. In a multilevel regression, coefficients vary by group:

$$y_{ij} = \beta_{0j} + \beta_{1j} x_{ij} + \epsilon_{ij},$$

where $i$ indexes observations and $j$ indexes groups. The group-level coefficients have their own distribution:

$$\beta_{kj} \sim \mathcal{N}(\mu_{k}, \tau_{k}^{2}) \quad \text{for } k = 0, 1.$$

The key question is which coefficients vary and which are fixed. Varying too many coefficients leads to overfitting; varying too few ignores genuine group differences. The decision should be guided by theory, by predictive performance, and by the amount of data per group.

## Crossed random effects

In many applications, observations are classified by multiple factors that are not nested. For example, students are nested in schools but also classified by neighborhood. A crossed random effects model includes random effects for both factors:

$$y_{ijk} = \mu + u_{j} + v_{k} + \epsilon_{ijk},$$

where $u_{j} \sim \mathcal{N}(0, \tau_{u}^{2})$ is the school effect and $v_{k} \sim \mathcal{N}(0, \tau_{v}^{2})$ is the neighborhood effect. The crossed structure complicates computation because the design matrix is not block-diagonal. Efficient computation requires sparse matrix techniques or specialized sampling algorithms.

## Earlier worked questions

The original question identities, statements and complete answers remain in [the original complete exercise companion](retained-source-hierarchical-models-and-partial-pooling.md). The further exercises below supply the present chapter’s staged practice.

## Visualizing partial pooling

A shrinkage plot displays group estimates under three regimes: no pooling (separate estimates), complete pooling (single estimate), and partial pooling (hierarchical model). The partial-pooling estimates typically lie between the other two, with small groups pulled more strongly toward the center.

**Example.** In the eight schools data, the separate estimates range from $-3$ to $28$. The complete-pooling estimate is near $8$. At fixed $\mu$ and $\tau$, the school with $\sigma_j=18$ has the largest population-pooling weight $1-w_j$; absolute shifts also depend on the observed estimate's distance from $\mu$. The shrinkage plot makes this pattern immediately visible.

## When does partial pooling fail?

Partial pooling assumes that groups are exchangeable and that the population distribution is correctly specified. It fails when:

- **Groups are not exchangeable.** If groups differ systematically in ways not captured by the model, shrinkage toward a common mean is inappropriate.
- **The population distribution is misspecified.** If the true group effects are heavy-tailed or multimodal, a normal population distribution produces incorrect shrinkage.
- **Outliers are present.** A single outlying group can inflate the estimate of $\tau$, reducing shrinkage for all groups and making the model behave like separate estimation.

In these cases, alternatives such as heavy-tailed population distributions (Student-$t$), finite mixtures, or covariate-dependent random effects may be more appropriate.


## Prior predictive checks for hierarchical models

Before fitting a hierarchical model, simulate data from the prior predictive distribution. Inspect the simulated group means and variances: are they plausible? If the prior on $\tau$ is too diffuse, the simulated group means may span an implausibly wide range.

**Procedure:**
1. Draw $\mu \sim \pi(\mu)$ and $\tau \sim \pi(\tau)$.
2. For $j = 1, \dots, J$, draw $\theta_{j} \sim \mathcal{N}(\mu, \tau^{2})$.
3. For each $j$, draw $y_{j} \sim p(y_{j} \mid \theta_{j})$.
4. Compare the distribution of $(y_{1}, \dots, y_{J})$ to domain knowledge.

If the simulated data are unrealistic, locate the source before changing a
prior: the conflict may come from the priors on $\mu$ and $\tau$, the
observation model $p(y_j\mid\theta_j)$, fixed predictors or link functions, or
the declared plausibility constraint itself. A prior predictive check that
passes does not guarantee a good model. A failed check establishes that the
**joint prior-predictive model** is incompatible with the declared constraint;
it does not by itself identify the prior as the defective component.

## Sensitivity to group size and number

Conditional on fixed $\mu$ and $\tau$, the direct shrinkage of group $j$ depends on its observation uncertainty: in the normal model above, $w_j=\tau^2/(\tau^2+\sigma_j^2)$. The number of groups $J$ affects how well the population parameters $\mu$ and $\tau$ can be learned, but increasing $J$ does not by itself make each group's weight approach $1$. Many precise groups can have little shrinkage when $\sigma_j\ll\tau$; many individually noisy groups can still be strongly shrunk.

**Rule of thumb:** Inspect group-level uncertainties relative to the inferred between-group scale, together with sensitivity of $\mu$ and $\tau$ to their priors. With very few groups, inference about $\tau$ can be especially prior-sensitive. Even with many groups, separate estimation need not approximate partial pooling when individual groups remain noisy; for example, fixed $\tau=1$ and $\sigma_j=10$ give $w_j=1/101$ whether $J=5$ or $J=1000$.

## Common errors

- **Confusing partial pooling with manual averaging.** Partial pooling arises from joint posterior inference, not from post-hoc averaging of group estimates. The weights $w_{j}$ are determined by the posterior for $\tau$ and the observation variances, not chosen by the analyst.
- **Ignoring the prior on $\tau$ when groups are few.** With $J < 5$, the data may contain almost no information about the population variance. The prior then dominates, and different choices can produce meaningfully different shrinkage profiles.
- **Failing to check sensitivity.** A single run with one prior is insufficient. Report how group estimates change under plausible prior variations.
- **Assuming exchangeability without justification.** If groups differ in known ways that affect the outcome, the exchangeability assumption is violated and the model is misspecified.


## Connections

This chapter extended the conjugate ideas of *Conjugacy as an Exact Computational Benchmark* to hierarchical settings where exact closed forms are unavailable. Continue to [Hierarchical Uncertainty and Prediction](hierarchical-uncertainty-prediction.md). Simulation error and algorithms continue separately in [MCMC Volume 1](#/books/mcmc/01-probability-computation).
## Completing the square separates data precision from population precision

The normal hierarchy is useful because its algebra exposes the source of pooling. Work first with one observation $y_j$ of a group effect, with known standard error $\sigma_j>0$, and a conditional population distribution $\theta_j\mid\mu,\tau\sim N(\mu,\tau^2)$ for $\tau>0$. Conditional independence of observations and group effects is part of this specification. It is not a consequence of the word “hierarchical.” Suppress constants that do not depend on $\theta_j$ and write the posterior kernel as
\[
\exp\left\{-\frac12\left[
 \frac{(y_j-\theta_j)^2}{\sigma_j^2}
 +\frac{(\theta_j-\mu)^2}{\tau^2}\right]\right\}.
\]
Expanding the two squares gives coefficient $P_j=\sigma_j^{-2}+\tau^{-2}$ on $\theta_j^2$ and coefficient $-2b_j$ on $\theta_j$, where $b_j=y_j/\sigma_j^2+\mu/\tau^2$. The identity $P_j\theta_j^2-2b_j\theta_j=P_j(\theta_j-b_j/P_j)^2-b_j^2/P_j$ identifies a normal distribution with mean $m_j=b_j/P_j$ and variance $v_j=P_j^{-1}$.

Multiplying numerator and denominator by $\sigma_j^2\tau^2$ yields $v_j=\sigma_j^2\tau^2/(\sigma_j^2+\tau^2)$ and
\[
m_j=w_jy_j+(1-w_j)\mu,\qquad
w_j=\frac{\tau^2}{\sigma_j^2+\tau^2}.
\]
The two weights add to one and lie strictly between zero and one. A precise observation has small $\sigma_j^2$, which makes its data weight large. A tightly concentrated population has small $\tau^2$, which makes its population weight large. There is no instruction to average every school by the same amount.

For a numerical contrast, take $y_j=14$, $\mu=10$, and $\tau^2=9$. If $\sigma_j^2=3$, then $w_j=3/4$, $m_j=13$, and $v_j=9/4$. If instead $\sigma_j^2=27$, then $w_j=1/4$, $m_j=11$, and $v_j=27/4$. More pooling of the noisy observation does not make its conditional variance as small as the precise observation's variance. Pooling and precision are related but distinct quantities.

At fixed $\mu,\tau$, the posterior variance is less than each of $\sigma_j^2$ and $\tau^2$. This comparison is conditional. It does not prove that an unknown-hyperparameter credible interval is always narrower than an interval from another model or a plug-in calculation. Integrating uncertainty about $\mu$ and $\tau$ changes the distribution being compared.

The limits also have a precise interpretation. As $\tau$ decreases to zero, $m_j$ approaches $\mu$ and $v_j$ approaches zero: the conditional population collapses to a common effect. As $\tau$ grows without bound, $m_j$ approaches $y_j$ and $v_j$ approaches $\sigma_j^2$. These are limits with the observation precision and hyperparameters otherwise held fixed. They do not describe changing the number of groups, and they do not say an improper infinite-scale prior is a valid replacement for a proper hierarchy.

## Integrating a shared mean creates covariance between groups

Now let the population mean be unknown, with a proper prior $\mu\sim N(m_0,V_0)$, $V_0>0$, while $\tau>0$ remains fixed. Integrating each $\theta_j$ first gives $y_j\mid\mu,\tau\sim N(\mu,D_j)$, where $D_j=\sigma_j^2+\tau^2$. The sum of independent normal observation noise and normal group variation adds variances. It does not add standard deviations. Completing the square in $\mu$ gives
\[
A=V_0^{-1}+\sum_jD_j^{-1},\quad
B=m_0/V_0+\sum_jy_j/D_j,\quad
\mu\mid\tau,y\sim N(B/A,A^{-1}).
\]
Call this mean $m_\mu$ and variance $V_\mu$. The formula uses every group, including the group whose effect will subsequently be estimated; there is no leave-one-out assumption.

Set $a_j=1-w_j$. Given $\mu,\tau,y$, the effects are independent normals with means $w_jy_j+a_j\mu$ and variances $v_j$. Integrating $\mu$ preserves normality here because these means are affine in a normal variable and the conditional variances do not depend on it. Thus
\[
E(\theta_j\mid\tau,y)=w_jy_j+a_jm_\mu,
\qquad
\operatorname{Cov}(\theta\mid\tau,y)
=\operatorname{diag}(v_1,\ldots,v_J)+V_\mu aa^\top.
\]
For different groups, the covariance is $a_ia_jV_\mu$. Conditional independence given the hyperparameters and marginal dependence after integrating them are compatible assertions.

Consider two groups with observations $2$ and $8$, both observation variances four, fixed population variance four, and $\mu\sim N(0,4)$. Here $D_1=D_2=8$, $A=1/2$, $B=5/4$, so $m_\mu=5/2$ and $V_\mu=2$. Both data weights equal $1/2$ and both conditional effect variances equal two. After integrating $\mu$, the effect means are $9/4$ and $21/4$, each variance is $5/2$, and their covariance is $1/2$. These are exact fractions from a fully specified hierarchy.

The posterior difference has mean three and variance $5/2+5/2-2(1/2)=4$. Treating the effects as independent would instead give five. Their average has variance $(5/2+5/2+2(1/2))/4=3/2$; ignoring covariance would give $5/4$. The same omitted dependence can overstate uncertainty for a contrast and understate it for an average. One cannot decide the direction by repeating “dependence increases uncertainty.”

This calculation also distinguishes the fixed common mean from an estimated common mean. Plugging $m_\mu$ into each conditional effect formula recovers these effect means at fixed $\tau$, but it omits the rank-one covariance contribution $V_\mu aa^\top$. A plug-in estimate may therefore match a mean while losing uncertainty relevant to a joint decision. When $\tau$ is subsequently integrated, a further mixture is required; the multivariate normal expression above is no longer the final general posterior.

In particular, as $\tau$ approaches zero while the mean remains unknown, every effect approaches the same random $\mu$. The integrated effect variance approaches $V_\mu(0)$ and their cross-covariances approach that same value; only their differences collapse to zero. Near complete pooling does not eliminate uncertainty about the common level.

## A proper hyperposterior follows from a bounded likelihood

Unknown population variation requires an actual prior rather than an unspecified appeal to “weak information.” Keep $\mu\sim N(m_0,V_0)$ and choose $\tau\sim\operatorname{HalfNormal}(a)$ with $a>0$, independently. Its density is $\sqrt{2/\pi}\,a^{-1}\exp[-\tau^2/(2a^2)]$ for $\tau>0$. Each latent effect then has the normal conditional distribution already defined. This is a proper joint prior: integrating each conditional normal gives one, and the two hyperpriors also integrate to one.

For any fixed finite data vector and strictly positive observation standard errors, the likelihood satisfies
\[
0<L(y\mid\theta)\le
M=\prod_j\frac{1}{\sqrt{2\pi}\sigma_j}<\infty.
\]
The upper bound follows because each normal exponential is at most one. Integrating against a probability prior therefore makes the marginal likelihood at most $M$. It is also positive because the integrand is positive everywhere on the prior support. Consequently the posterior normalizing constant is finite and positive. This proves existence of the posterior before a sampler is proposed.

The argument is stronger than checking that a log density is finite at one point. A finite value at one point says nothing about integrability over an unbounded parameter space. Here integrability comes from a proper prior and a globally bounded likelihood. For models with unbounded likelihoods, such as some unknown-variance models at degenerate data, this particular bound is unavailable and propriety needs a different proof.

The same inequality controls moments. For any nonnegative function $g$ with finite prior expectation,
\[
E(g\mid y)=\frac{\int gL\,d\Pi}{Z}\le\frac{M}{Z}E_\Pi(g).
\]
Under the normal and half-normal hyperpriors, polynomial moments of $\mu,\tau$ and the effects are finite; one may expand their normal conditional moments and integrate the finite half-normal moments. Thus the posterior moments used in the variance calculations exist. This does not establish exponential moments of every function or justify every possible importance weight.

Contrast the proper scale prior with the kernel $\pi(\tau)\propto1/\tau$. After integrating the effects and the proper mean prior, the likelihood as a function of $\tau$ tends to a finite strictly positive value at zero, because all $D_j$ tend to positive $\sigma_j^2$. Continuity therefore bounds that collapsed likelihood below by some positive constant near zero. Multiplication by $1/\tau$ creates the divergent integral $\int_0^\varepsilon d\tau/\tau$. A finite-looking posterior trace cannot repair that impropriety.

A continuous half-normal posterior assigns probability zero to the exact event $\tau=0$, even if much of its density is near zero. A model that assigns positive posterior probability to exact equality of all effects needs a prior with an atom or a different model indicator. “Near complete pooling” and “positive probability of exactly complete pooling” are distinct statements.

## Collapsing the hierarchy reduces a reference calculation to one dimension

For the zero-centered mean prior, write $R(\tau)=\sum_jD_j^{-1}$, $A(\tau)=V_0^{-1}+R(\tau)$, $B(\tau)=\sum_jy_j/D_j$, and $C(\tau)=\sum_jy_j^2/D_j$. The quadratic in the mean is
\[
Q(\mu,\tau)=\mu^2/V_0+\sum_j(y_j-\mu)^2/D_j
=A(\mu-B/A)^2+C-B^2/A.
\]
Integrating the normalized mean prior and the normal observation kernels yields
\[
p(y\mid\tau)
=(2\pi)^{-J/2}\left(\prod_jD_j^{-1/2}\right)
(1+V_0R)^{-1/2}
\exp[-(C-B^2/A)/2].
\]
The factor is $(1+V_0R)^{-1/2}$, equivalently $(V_0A)^{-1/2}$. Confusing data precision $R$ with posterior precision $A$ loses the prior contribution.

The posterior density of $\tau$ is proportional to this expression times its half-normal prior density. Every other marginal expectation can now be expressed as a one-dimensional integral over $\tau$. For instance,
\[
E(\mu\mid y)=E_\tau[B/A],\qquad
E(\mu^2\mid y)=E_\tau[A^{-1}+(B/A)^2].
\]
For school $j$, let $M_j(\tau)=w_jy_j+(1-w_j)B/A$ and $K_j(\tau)=v_j+(1-w_j)^2/A$. Then $E(\theta_j\mid y)=E_\tau M_j$ and $E(\theta_j^2\mid y)=E_\tau(K_j+M_j^2)$. Subtracting the squared mean gives the marginal variance. Integrating only $v_j$ would omit uncertainty about both shared hyperparameters.

These expressions are reference identities, not numerical results. Deterministic quadrature can evaluate their scalar integrals and compare them with simulation. Its reported error estimate and stability under tighter numerical settings are useful evidence, while the preceding propriety proof supplies the mathematical existence argument. An adaptive quadrature error estimate is not automatically a rigorous interval bound for every integrand.

The collapsed density also supplies an exact rejection construction under ideal independent randomness. Propose $\mu,\tau$ from their proper hyperprior. Integrating the effects makes the likelihood $\prod_jN(y_j\mid\mu,D_j)$, bounded above by the same $M$ because $D_j\ge\sigma_j^2$. Accept the proposal with this likelihood divided by $M$. Bayes' formula shows that accepted hyperparameters have their collapsed posterior law: multiplying proposal density by acceptance probability gives the desired posterior kernel divided by a constant.

After acceptance, draw each effect from its exact conditional normal distribution. The resulting joint draw has the full hierarchical posterior, not only the marginal hyperposterior. Repeating independent proposals produces independent accepted draws in the mathematical construction. A finite proposal cap can report failure honestly; it must not silently replace the target, return too few draws, or turn a grid approximation into an exact-sampling claim. The later public reference fixes all these choices explicitly.

## Centered Gibbs conditionals are different from collapsed conditionals

A conditional distribution must name everything held fixed. After integrating the effects, the preceding mean conditional uses the observation variances $D_j=\sigma_j^2+\tau^2$. A centered Gibbs update instead conditions on current effect values $\theta_1,\ldots,\theta_J$. In that update the observations add no further information about $\mu$ once the effects are fixed: the likelihood depends on $\theta$, not directly on $\mu$.

Expanding the population normal densities and the $N(m_0,V_0)$ mean prior gives
\[
A_c=V_0^{-1}+J/\tau^2,\quad
B_c=m_0/V_0+\sum_j\theta_j/\tau^2,\quad
\mu\mid\theta,\tau,y\sim N(B_c/A_c,A_c^{-1}).
\]
Substituting the collapsed precision $V_0^{-1}+\sum_jD_j^{-1}$ here would define a different transition. Both formulas are normal conjugacy calculations, but they condition on different variables.

For the half-normal population scale, write $T=\sum_j(\theta_j-\mu)^2$. Its centered conditional kernel is
\[
p(\tau\mid\theta,\mu,y)\propto
\tau^{-J}\exp[-T/(2\tau^2)-\tau^2/(2a^2)],\qquad \tau>0.
\]
This is not an inverse-gamma density for the variance. Setting $u=\tau^2$ contributes $d\tau/du=1/(2\sqrt u)$ and yields the kernel $u^{-(J+1)/2}\exp[-T/(2u)-u/(2a^2)]$. An inverse-gamma formula with only an inverse-$u$ exponential would correspond to another prior. Conditional conjugacy for the effects does not imply conjugacy for every chosen hyperprior.

When $T>0$, the factor $\exp[-T/(2\tau^2)]$ controls the origin and the half-normal factor controls infinity, making this conditional integrable. At the exact configuration $\theta_1=\cdots=\theta_J=\mu$, the formal kernel has $T=0$ and is not integrable near zero for $J\ge1$. That does not contradict the proper joint posterior: this configuration has posterior probability zero, and conditional densities need only be defined almost everywhere. It does warn against initializing an implementation at a singular configuration and assuming every algebraic conditional expression is valid there.

A mathematically valid Markov kernel can define behavior on that null set explicitly, but it must not silently substitute an invalid density formula. Initializing away from the common-effect surface or using the independent collapsed reference avoids this particular difficulty. Numerical underflow that accidentally creates an exact zero residual sum deserves a separate implementation check.

The distinction also explains a computational tradeoff. Collapsing removes latent coordinates and can improve a transition's information flow, but changes which conditional law is required. A partially collapsed sampler must order and justify its updates carefully; arbitrary mixtures of centered and collapsed formulas need not preserve the joint posterior. The reference construction here sidesteps that algorithmic question by drawing the collapsed hyperposterior independently and then drawing effects from the exact conditionals.

## Hyperprior tails can change which posterior moments exist

Properness establishes that a posterior is a probability distribution, not that every moment is finite. The distinction can be seen directly for the scale in this normal hierarchy. Keep the mean prior proper and all observation standard errors positive. For each fixed $\mu$,
\[
\tau^J\prod_jN(y_j\mid\mu,\sigma_j^2+\tau^2)
\longrightarrow(2\pi)^{-J/2}
\quad\text{as }\tau\to\infty.
\]
The scaled normal prefactors are at most one after removing $(2\pi)^{-J/2}$, and the exponential factors are at most one. Dominated convergence under the probability prior for $\mu$ therefore gives the same limit after integrating $\mu$. Thus the collapsed likelihood has tail proportional to $\tau^{-J}$.

A half-Cauchy scale prior has tail proportional to $\tau^{-2}$. Its posterior scale density consequently has tail proportional to $\tau^{-J-2}$. For a nonnegative power $r$, the upper-tail contribution to $E(\tau^r\mid y)$ is comparable to $\int^\infty\tau^{r-J-2}\,d\tau$, which converges exactly when $r<J+1$. Near zero the proper half-Cauchy density and collapsed likelihood are finite, so no additional positive-moment problem occurs there.

With one group, this proper posterior has a finite first scale moment but infinite second scale moment. With three groups, scale moments below order four exist while the fourth diverges logarithmically. These are mathematical tail consequences, not statements that a particular run has detected the tail reliably. A finite sample always has finite empirical moments, including when its target moment is infinite.

A half-normal prior instead multiplies the polynomial likelihood tail by a Gaussian tail, so every nonnegative scale moment exists. An exponential scale prior also supplies finite polynomial moments. This is one reason priors that look similar over a plotted central region can still imply different tail summaries. Comparing two bulk posterior plots does not establish agreement of all unbounded functionals.

Effects and scales need not share the same moment behavior. With a proper normal mean prior, the posterior has finite moments of $\mu$ by the bounded-likelihood argument. The conditional effect variance is bounded by $\sigma_j^2$, and its mean satisfies $|m_j|\le|y_j|+|\mu|$. Hence the effect second moment remains finite even in an example where the scale second moment diverges. An interval or Monte Carlo analysis must name its actual functional before applying a variance theorem.

The number of groups enters this tail calculation through the likelihood factor $\tau^{-J}$. It does not imply that adding groups makes every existing group's direct shrinkage weight approach one. Population-scale learning and each group's observation precision remain separate mechanisms, as the earlier conditional formulas show.

## Total variance does not order arbitrary plug-in intervals

Let $H=(\mu,\tau)$ denote the shared hyperparameters. For an effect with finite posterior second moment,
\[
\operatorname{Var}(\theta_j\mid y)
=E[\operatorname{Var}(\theta_j\mid H,y)\mid y]
+\operatorname{Var}(E[\theta_j\mid H,y]\mid y).
\]
The second term is nonnegative. But the first term is an average over $H$, not the conditional variance evaluated at an empirical Bayes estimate. There is no general inequality comparing that average with $v_j(\widehat\tau)$. Nor does a variance inequality by itself order equal-tail credible interval widths for arbitrary nonnormal mixtures.

A concrete mixture shows what is added. Suppose the hyperposterior gives equal mass to two states whose conditional effect distributions are $N(0,1)$ and $N(4,1)$. The marginal mean is two, the average conditional variance is one, and the variance of the conditional means is four. The total variance is five. Substituting a single state would miss separation between the two possible conditional centers. Conversely, an arbitrarily chosen plug-in state with a large conditional variance need not be narrower than this mixture. The averaging identity compares its own terms, not all possible plug-in rules.

Covariance needs equal care:
\[
\operatorname{Cov}(\theta_i,\theta_j\mid y)
=E[\operatorname{Cov}(\theta_i,\theta_j\mid H,y)\mid y]
+\operatorname{Cov}(m_i(H),m_j(H)\mid y).
\]
In a hierarchy with effects conditionally independent given $H$, the first term is zero. The second need not be positive. Shared uncertainty does not automatically make every pair move in the same direction.

For example, take a known population mean zero, equal observation variances one, observations $a$ and $-a$ with $a\ne0$, and a proper prior assigning positive mass to each of two distinct positive values of $\tau$. The posterior retains positive mass at both scale values because their likelihoods are positive. Let $w(\tau)=\tau^2/(1+\tau^2)$. The conditional effect means are $aw(\tau)$ and $-aw(\tau)$. Their marginal covariance is $-a^2\operatorname{Var}(w\mid y)<0$. The conditional cross-covariance is zero at each fixed scale.

There is no contradiction with the earlier positive covariance after integrating $\mu$ at fixed $\tau$. That calculation integrated a shared location, which moved both means together. This example integrates a shared scale, which moves opposite-signed observations outward or inward in opposite directions. With both hyperparameters unknown, both mechanisms contribute and their sum must be calculated.

For teaching and reporting, name the distribution used in every uncertainty statement: conditional on fixed hyperparameters, integrated over the mean only, or integrated over the complete hyperposterior. A shrinkage plot at one selected scale can explain the conditional mechanism, but its points and bars are not automatically the marginal posterior means and intervals.

The squared-error decision statement in the original discussion also has an exact scope. If the posterior second moment of an effect exists, then $E[(\theta_j-d)^2\mid y]=\operatorname{Var}(\theta_j\mid y)+(d-E[\theta_j\mid y])^2$. The posterior mean minimizes this expected loss over real actions. The result is conditional on the specified model and squared-error loss; an absolute-error decision instead uses a posterior median, and a cost-sensitive decision may use another action altogether.


## Worked applications

### Worked example 1: partial pooling at known scale

With population variance four and group-mean error variance one, the conditional group-effect weight is $4/5$. An observed deviation two becomes $8/5$. This is Gaussian conditioning under the known hierarchy, not a general adjustment for biased group selection.

### Worked example 2: a shared uncertain mean

If group effects are conditionally independent around a common mean whose posterior variance is three, integrating that mean can give cross-group covariance three. Conditional independence does not survive marginalisation automatically.

### Worked example 3: a scale-coordinate density

For two normal group effects, their centered population density contributes $\tau^{-2}$. Mapping effects to $\mu+\tau z$ has Jacobian $\tau^2$, cancelling that factor. Moving next to log scale adds one further $\tau$, not another factor per group.

## Further exercises

### Exercise 101
<a id="hierarchical-population-models-ex-101"></a>

Derive the normal group-mean shrinkage weight.

<details>
<summary>Hint 1</summary>

Add prior and data precisions.

</details>
<details>
<summary>Hint 2</summary>

Convert the weighted mean.

</details>
<details>
<summary>Solution</summary>

For population variance $\tau^2$ and mean-error variance $v$, the conditional weight on the observed deviation is $\tau^2/(\tau^2+v)$. Completing the Gaussian square gives both this mean and variance $\tau^2v/(\tau^2+v)$.

</details>

### Exercise 102
<a id="hierarchical-population-models-ex-102"></a>

Why can a new group have wider prediction than an existing group?

<details>
<summary>Hint 1</summary>

Existing data inform its latent effect.

</details>
<details>
<summary>Hint 2</summary>

A new effect retains population variation.

</details>
<details>
<summary>Solution</summary>

A new group's effect is drawn from its population law. Existing-group data reduce conditional uncertainty about its effect. Both also retain future observation noise.

</details>

### Exercise 103
<a id="hierarchical-population-models-ex-103"></a>

What happens as a group's measurement variance tends to zero?

<details>
<summary>Hint 1</summary>

Its data precision diverges.

</details>
<details>
<summary>Hint 2</summary>

Hold positive population variance fixed.

</details>
<details>
<summary>Solution</summary>

The conditional weight tends to one and conditional effect variance tends to zero. This does not eliminate uncertainty in shared hyperparameters when those are unknown.

</details>

### Exercise 104
<a id="hierarchical-population-models-ex-104"></a>

Does conditional independence imply marginal independence of groups?

<details>
<summary>Hint 1</summary>

Apply total covariance.

</details>
<details>
<summary>Hint 2</summary>

The shared mean can vary.

</details>
<details>
<summary>Solution</summary>

No. Cross-group conditional means can share uncertain parameters, adding covariance after integration even when conditional covariance is zero.

</details>

### Exercise 105
<a id="hierarchical-population-models-ex-105"></a>

Why must a scale prior be proper in a simple bounded-likelihood propriety argument?

<details>
<summary>Hint 1</summary>

A likelihood bound multiplies prior mass.

</details>
<details>
<summary>Hint 2</summary>

An infinite prior integral remains uncontrolled.

</details>
<details>
<summary>Solution</summary>

A bounded likelihood and proper prior give a finite evidence upper bound. The same argument cannot bound an improper prior's integral; a separate posterior-propriety proof is required.

</details>

### Exercise 106
<a id="hierarchical-population-models-ex-106"></a>

Distinguish centred and noncentred parameter laws.

<details>
<summary>Hint 1</summary>

Use theta=mu+tau z.

</details>
<details>
<summary>Hint 2</summary>

Include the transformation determinant.

</details>
<details>
<summary>Solution</summary>

They can represent the same probability model when standard normal $z$ and the correct coordinate density are used. Omitting or double-counting the Jacobian changes the target.

</details>

### Exercise 107
<a id="hierarchical-population-models-ex-107"></a>

Why can hyperprior tails affect posterior moments?

<details>
<summary>Hint 1</summary>

Normalisation and moment integrability differ.

</details>
<details>
<summary>Hint 2</summary>

Multiply by the target's growth.

</details>
<details>
<summary>Solution</summary>

A posterior may integrate to one while its variance-weighted or scale-weighted integral diverges. Tail assumptions must be checked for each requested moment.

</details>

### Exercise 108
<a id="hierarchical-population-models-ex-108"></a>

Can a plug-in hyperparameter interval equal full uncertainty by default?

<details>
<summary>Hint 1</summary>

Integrating and fixing are different.

</details>
<details>
<summary>Hint 2</summary>

Use total variance.

</details>
<details>
<summary>Solution</summary>

No. Full variance includes conditional variance plus variability of conditional means. An arbitrary plug-in choice need not equal either term or preserve interval coverage.

</details>

### Exercise 109
<a id="hierarchical-population-models-ex-109"></a>

What does zero random-effect variance mean?

<details>
<summary>Hint 1</summary>

Groups have no population spread in that component.

</details>
<details>
<summary>Hint 2</summary>

Inverse-scale formulas can become singular.

</details>
<details>
<summary>Solution</summary>

The model reduces that component to a common effect. Boundary handling needs an appropriate reduced or limiting model, rather than substituting zero into every inverse covariance formula.

</details>

### Exercise 110
<a id="hierarchical-population-models-ex-110"></a>

Does partial pooling establish exchangeability?

<details>
<summary>Hint 1</summary>

It uses exchangeability as an assumption.

</details>
<details>
<summary>Hint 2</summary>

The collection protocol supplies evidence.

</details>
<details>
<summary>Solution</summary>

No. Pooling follows from the declared hierarchical law. Systematic group differences, selection or covariate-dependent effects can require a different conditional population model.

</details>

## Summary

Hierarchical Population Models develops the declared probability model, target and mathematical comparisons in the sections above. Keep support, observation mechanisms, conditional information and numerical approximation distinct. The original complete source remains available as a companion, with all original questions and computational listings preserved.
