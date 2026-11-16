
# Hierarchical Models and Partial Pooling {#section-1-hierarchical-models-and-partial-pooling}

When data are organized into groups---schools, hospitals, experimental batches, or geographic regions---we face a tension. Estimating each group separately wastes shared information; pooling all groups together ignores genuine differences. Hierarchical models resolve this tension by introducing a population distribution that links group-level parameters. The result is partial pooling: each group borrows strength from the others, with the degree of borrowing determined by the data.

<a id="section-3-the-partial-pooling-idea"></a>
## The partial-pooling idea {#section-5-the-partial-pooling-idea}

Suppose we observe successes $y_{j}$ out of $n_{j}$ trials in groups $j = 1, \dots, J$. The separate estimate $\hat{p}_{j} = y_{j}/n_{j}$ is noisy for small groups. Complete pooling assumes a single probability $p$ for all groups, which is wrong if the groups genuinely differ. A hierarchical model allows related but distinct probabilities:

$$y_{j} \mid p_{j} \sim \operatorname{Binomial}(n_{j}, p_{j}),$$

$$\operatorname{logit}(p_{j}) = \alpha + u_{j},$$

$$u_{j} \mid \tau \sim \mathcal{N}(0, \tau^{2}).$$

The population-level parameters $\alpha$ and $\tau$ are given defensible priors. The standard deviation $\tau$ controls the conditional spread and hence one component of pooling. When $\tau\approx0$, the group probabilities are pulled close together. A larger $\tau$ permits greater between-group variation and can reduce shrinkage toward $\alpha$, but near-separate estimation also requires informative group data. Conditional on fixed hyperparameters the group effects are independent for every $\tau$; marginalizing the shared hyperparameters induces dependence, so $\tau$ does not change the graphical conditional-independence structure.

The key insight is that shrinkage is automatic. A small group with noisy data is pulled more strongly toward the population mean than a large group with precise data. This happens because the posterior for each $p_{j}$ depends on both its own data and the population distribution inferred from all groups.

<a id="section-17-gaussian-analogue-exact-shrinkage"></a>
## Gaussian analogue: exact shrinkage {#section-19-gaussian-analogue-exact-shrinkage}

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

<a id="section-39-estimating-the-population-variance"></a>
## Estimating the population variance {#section-41-estimating-the-population-variance}

In practice, $\tau$ is unknown and must be estimated from the data. With few groups, the posterior for $\tau$ may be sensitive to its prior. A common choice is a half-Cauchy prior on $\tau$, which allows large values but penalizes them gently. If the data are consistent with $\tau = 0$, the posterior concentrates near zero and the model approaches complete pooling. If the data show strong between-group differences, the posterior for $\tau$ shifts right.

Sensitivity analysis is essential. Re-run the analysis with alternative priors on $\tau$---for example, a half-normal with different scale or an exponential---and check whether posterior inferences for group means change materially. If they do, those inferences are sensitive to the tested priors; assess prior plausibility and likelihood concentration before attributing the sensitivity to weak information in the data.

<a id="section-45-exchangeability-and-its-limits"></a>
## Exchangeability and its limits {#section-47-exchangeability-and-its-limits}

The hierarchical model assumes that the group parameters $\theta_{1}, \dots, \theta_{J}$ are exchangeable: their joint distribution is invariant to permutation of indices. Exchangeability does not mean the groups are identical; it means we have no information that distinguishes one group from another before seeing the data.

Hierarchies do not excuse omitted structure. If group measurements use different instruments, or if selection into the sample depends on outcomes, exchangeability may be implausible. In such cases, add measured covariates or narrow the inferential claim. A model that ignores known group differences is not rescued by adding a random effect.


<a id="section-52-empirical-bayes-and-full-bayes"></a>
## Empirical Bayes and full Bayes {#section-54-empirical-bayes-and-full-bayes}

An empirical Bayes approach estimates hyperparameters such as $\mu$ and $\tau$ and then plugs those estimates into the group-level posteriors. Treating these estimates as fixed omits their uncertainty and can understate uncertainty about the group effects. A full Bayesian approach integrates over the joint posterior of the hyperparameters. When the moments exist, the law of total variance gives

$$\operatorname{Var}(\theta_j \mid y)
= \mathbb{E}\!\left[\operatorname{Var}(\theta_j \mid y,\mu,\tau)\mid y\right]
+ \operatorname{Var}\!\left(\mathbb{E}[\theta_j \mid y,\mu,\tau]\mid y\right).$$

The second term is nonnegative, but the first term is an average of conditional variances, not necessarily the variance at an empirical Bayes estimate. Thus full Bayesian credible intervals need not always be wider than plug-in intervals. Their width and calibration depend on the model, priors, data, and interval construction.

The difference matters most when $J$ is small. With $J = 3$, the empirical Bayes estimate of $\tau$ may be zero (complete pooling) even when the data suggest some variation. Depending on the model, priors and data, the full Bayesian posterior for $\tau$ can retain uncertainty near zero and at larger values; its mixture of shrinkage profiles is not universally more conservative than a plug-in analysis.

<a id="section-64-priors-for-the-population-scale"></a>
## Priors for the population scale {#section-66-priors-for-the-population-scale}

The choice of prior for $\tau$ is consequential. Common options include:

- **Half-Cauchy$(0, \gamma)$:** Heavy tails allow large $\tau$. The scale $\gamma$ is also the median, so $\Pr(\tau\le\gamma)=1/2$; it is not an upper bound. Calibrate it through a stated predictive scale or quantile probability, and check any scientifically plausible upper-tail constraint separately.
- **Half-normal$(0, \sigma_{\tau})$:** Lighter tails; more informative.
- **Exponential$(\lambda)$:** A simple, proper alternative.

The half-Cauchy is popular because it is proper yet allows large values. However, with few groups, even the half-Cauchy can be influential. A prior predictive check---simulating group means from the prior---reveals whether the prior allows implausibly large between-group differences.

<a id="section-74-full-worked-example-eight-schools"></a>
## Full worked example: eight schools {#section-76-full-worked-example-eight-schools}

The classic "eight schools" example involves coaching programs in $J = 8$ schools. Let $y_{j}$ be the estimated coaching effect and $\sigma_{j}$ its standard error in school $j$. The model is:

$$y_{j} \mid \theta_{j} \sim \mathcal{N}(\theta_{j}, \sigma_{j}^{2}),$$

$$\theta_{j} \mid \mu, \tau \sim \mathcal{N}(\mu, \tau^{2}).$$

With $\sigma_{j}$ known and conditional on $\mu$ and $\tau>0$, the posterior for $\theta_{j}$ is normal with mean $w_{j} y_{j} + (1-w_{j})\mu$ and variance $(1/\sigma_{j}^{2} + 1/\tau^{2})^{-1}$, where $w_j=\tau^2/(\tau^2+\sigma_j^2)$. The marginal posterior $p(\theta_j\mid y)$ integrates these conditional distributions against $p(\mu,\tau\mid y)$ and is generally a mixture of normals, not a single normal distribution. At fixed $\mu$ and $\tau$, schools with large standard errors are shrunk more strongly toward $\mu$. See [Gelman's discussion of conditional conjugacy](https://sites.stat.columbia.edu/gelman/bayescomputation/Gelman2006.pdf), Section 2.1, for this distinction.

For the fully declared reference below, posterior mass near zero and in the right tail must be calculated under its specified proper priors rather than inferred from the sampling standard errors alone. Conditional shrinkage profiles change with $\tau$, so report its distribution and marginal school summaries instead of substituting only a point estimate.


<a id="section-87-multilevel-regression"></a>
## Multilevel regression {#section-89-multilevel-regression}

Hierarchical models extend naturally to regression settings. In a multilevel regression, coefficients vary by group:

$$y_{ij} = \beta_{0j} + \beta_{1j} x_{ij} + \epsilon_{ij},$$

where $i$ indexes observations and $j$ indexes groups. The group-level coefficients have their own distribution:

$$\beta_{kj} \sim \mathcal{N}(\mu_{k}, \tau_{k}^{2}) \quad \text{for } k = 0, 1.$$

The key question is which coefficients vary and which are fixed. Varying too many coefficients leads to overfitting; varying too few ignores genuine group differences. The decision should be guided by theory, by predictive performance, and by the amount of data per group.

<a id="section-99-crossed-random-effects"></a>
## Crossed random effects {#section-101-crossed-random-effects}

In many applications, observations are classified by multiple factors that are not nested. For example, students are nested in schools but also classified by neighborhood. A crossed random effects model includes random effects for both factors:

$$y_{ijk} = \mu + u_{j} + v_{k} + \epsilon_{ijk},$$

where $u_{j} \sim \mathcal{N}(0, \tau_{u}^{2})$ is the school effect and $v_{k} \sim \mathcal{N}(0, \tau_{v}^{2})$ is the neighborhood effect. The crossed structure complicates computation because the design matrix is not block-diagonal. Efficient computation requires sparse matrix techniques or specialized sampling algorithms.

<a id="section-107-extended-exercise-discussion"></a>
## Visualizing partial pooling {#section-126-visualizing-partial-pooling}

A shrinkage plot displays group estimates under three regimes: no pooling (separate estimates), complete pooling (single estimate), and partial pooling (hierarchical model). The partial-pooling estimates typically lie between the other two, with small groups pulled more strongly toward the center.

**Example.** In the eight schools data, the separate estimates range from $-3$ to $28$. The complete-pooling estimate is near $8$. At fixed $\mu$ and $\tau$, the school with $\sigma_j=18$ has the largest population-pooling weight $1-w_j$; absolute shifts also depend on the observed estimate's distance from $\mu$. The shrinkage plot makes this pattern immediately visible.

<a id="section-130-when-does-partial-pooling-fail"></a>
## When does partial pooling fail? {#section-132-when-does-partial-pooling-fail}

Partial pooling assumes that groups are exchangeable and that the population distribution is correctly specified. It fails when:

- **Groups are not exchangeable.** If groups differ systematically in ways not captured by the model, shrinkage toward a common mean is inappropriate.
- **The population distribution is misspecified.** If the true group effects are heavy-tailed or multimodal, a normal population distribution produces incorrect shrinkage.
- **Outliers are present.** A single outlying group can inflate the estimate of $\tau$, reducing shrinkage for all groups and making the model behave like separate estimation.

In these cases, alternatives such as heavy-tailed population distributions (Student-$t$), finite mixtures, or covariate-dependent random effects may be more appropriate.


<a id="section-141-prior-predictive-checks-for-hierarchical-models"></a>
## Prior predictive checks for hierarchical models {#section-143-prior-predictive-checks-for-hierarchical-models}

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

<a id="section-159-sensitivity-to-group-size-and-number"></a>
## Sensitivity to group size and number {#section-161-sensitivity-to-group-size-and-number}

Conditional on fixed $\mu$ and $\tau$, the direct shrinkage of group $j$ depends on its observation uncertainty: in the normal model above, $w_j=\tau^2/(\tau^2+\sigma_j^2)$. The number of groups $J$ affects how well the population parameters $\mu$ and $\tau$ can be learned, but increasing $J$ does not by itself make each group's weight approach $1$. Many precise groups can have little shrinkage when $\sigma_j\ll\tau$; many individually noisy groups can still be strongly shrunk.

**Rule of thumb:** Inspect group-level uncertainties relative to the inferred between-group scale, together with sensitivity of $\mu$ and $\tau$ to their priors. With very few groups, inference about $\tau$ can be especially prior-sensitive. Even with many groups, separate estimation need not approximate partial pooling when individual groups remain noisy; for example, fixed $\tau=1$ and $\sigma_j=10$ give $w_j=1/101$ whether $J=5$ or $J=1000$.

<a id="section-165-common-errors"></a>
## Common errors {#section-167-common-errors}

- **Confusing partial pooling with manual averaging.** Partial pooling arises from joint posterior inference, not from post-hoc averaging of group estimates. The weights $w_{j}$ are determined by the posterior for $\tau$ and the observation variances, not chosen by the analyst.
- **Ignoring the prior on $\tau$ when groups are few.** With $J < 5$, the data may contain almost no information about the population variance. The prior then dominates, and different choices can produce meaningfully different shrinkage profiles.
- **Failing to check sensitivity.** A single run with one prior is insufficient. Report how group estimates change under plausible prior variations.
- **Assuming exchangeability without justification.** If groups differ in known ways that affect the outcome, the exchangeability assumption is violated and the model is misspecified.

<a id="section-172-practice-exercises"></a>
## Completing the square separates data precision from population precision {#section-197-completing-the-square-separates-data-precision-from-pop}

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

<a id="section-218-integrating-a-shared-mean-creates-covariance-between-gr"></a>
## Integrating a shared mean creates covariance between groups {#section-220-integrating-a-shared-mean-creates-covariance-between-gr}

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

<a id="section-245-a-proper-hyperposterior-follows-from-a-bounded-likeliho"></a>
## A proper hyperposterior follows from a bounded likelihood {#section-247-a-proper-hyperposterior-follows-from-a-bounded-likeliho}

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

<a id="section-268-collapsing-the-hierarchy-reduces-a-reference-calculatio"></a>
## Collapsing the hierarchy reduces a reference calculation to one dimension {#section-270-collapsing-the-hierarchy-reduces-a-reference-calculatio}

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

<a id="section-297-centered-gibbs-conditionals-are-different-from-collapse"></a>
## Centered Gibbs conditionals are different from collapsed conditionals {#section-299-centered-gibbs-conditionals-are-different-from-collapse}

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

<a id="section-322-hyperprior-tails-can-change-which-posterior-moments-exi"></a>
## Hyperprior tails can change which posterior moments exist {#section-324-hyperprior-tails-can-change-which-posterior-moments-exi}

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

<a id="section-342-total-variance-does-not-order-arbitrary-plug-in-interva"></a>
## Total variance does not order arbitrary plug-in intervals {#section-344-total-variance-does-not-order-arbitrary-plug-in-interva}

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

<a id="section-370-coordinate-changes-preserve-the-target-only-with-the-ri"></a>
## Coordinate changes preserve the target only with the right Jacobian {#section-372-coordinate-changes-preserve-the-target-only-with-the-ri}

A centered normal hierarchy uses $(\mu,\tau,\theta_1,\ldots,\theta_J)$ as coordinates. Its population density contains $\tau^{-J}\exp[-\sum_j(\theta_j-\mu)^2/(2\tau^2)]$. Introduce standardized effects $z_j=(\theta_j-\mu)/\tau$. For fixed $\mu,\tau$, the map from $z$ to $\theta$ has diagonal derivative $\tau I_J$ and determinant $\tau^J$. In the full transformation retaining $\mu,\tau$, the derivative is block triangular, so the extra derivatives of $\theta$ with respect to those retained variables do not change this determinant.

Multiplying the centered density by $\tau^J$ cancels its population normalizing factor. The noncentered population density becomes $\prod_jN(z_j\mid0,1)$, with likelihood evaluated at $\theta_j=\mu+\tau z_j$. The posterior distribution of the original effects is unchanged if the change of variables is implemented correctly. A better-looking trace after omitting a Jacobian would describe a different posterior.

If a sampler also uses $\eta=\log\tau$, the support $\tau>0$ becomes $\eta\in\mathbb R$ and $d\tau/d\eta=e^\eta$. The noncentered log target is therefore
\[
-\frac{(\mu-m_0)^2}{2V_0}-\frac{e^{2\eta}}{2a^2}
-\frac12\sum_jz_j^2
-\frac12\sum_j\frac{(y_j-\mu-e^\eta z_j)^2}{\sigma_j^2}
+\eta+\text{constant}.
\]
The final $+\eta$ is still needed after the $\tau^J$ cancellation. The half-normal density is a density with respect to $d\tau$, not $d\eta$.

In centered coordinates with $\eta$ instead of $\tau$, the corresponding terms include
\[
-(J-1)\eta-\frac12e^{-2\eta}\sum_j(\theta_j-\mu)^2
-\frac{e^{2\eta}}{2a^2}.
\]
The coefficient $-(J-1)$ combines $-J\eta$ from the population normal densities with $+\eta$ from transforming the scale. Applying another $\tau^J$ correction while already assigning standard normal priors to $z$ would double-count the transformation.

The distinction can be checked by a small dimensional example. With two effects, the centered normal population density has factor $\tau^{-2}$. The map $\theta=\mu+\tau z$ contributes $\tau^2$, leaving no scale factor in the standardized normal population law. Changing from $\tau$ to its logarithm then contributes one additional factor $\tau$, regardless of the number of effects.

These are coordinate identities. They do not prove that a particular HMC or NUTS implementation preserves the transformed posterior; momentum refreshment, integration, trajectory selection and Metropolis correction have their own conditions in the sampler chapter. Parameterization can change computational geometry without changing the intended probability model, which is precisely why an independent density and Jacobian derivation is a useful implementation check.

<a id="section-396-funnel-geometry-depends-on-how-much-each-group-is-obser"></a>
## Funnel geometry depends on how much each group is observed {#section-398-funnel-geometry-depends-on-how-much-each-group-is-obser}

The centered prior constrains $\theta_j-\mu$ to scale $\tau$. When $\tau$ is small, a change in an effect of fixed absolute size can make the log density change sharply. At fixed hyperparameters, the negative second derivative of the effect log posterior is $\sigma_j^{-2}+\tau^{-2}$. Its curvature grows without bound as $\tau$ approaches zero. A step size suitable for a broad region can therefore be unstable or inaccurate in a narrow region.

For a scalar quadratic potential with curvature $\lambda>0$ and unit mass, leapfrog's stability threshold is $\epsilon\sqrt\lambda<2$. This local quadratic fact explains the scale issue, rather than establishing a universal step-size rule for a nonlinear hierarchy. In the centered conditional direction the small-$\tau$ scale is of order $\tau$, so one global integrator step may be constrained by the neck. A small stable step remains permissible in the wide region; it may simply require more steps to traverse a useful distance. Large steps in the mouth are not a mathematical necessity.

The noncentered coordinates have a standard normal prior for $z_j$. Their conditional likelihood contribution has curvature $\tau^2/\sigma_j^2$ in that direction, so the total conditional curvature is $1+\tau^2/\sigma_j^2$. For weak observations, $\sigma_j$ is large relative to relevant $\tau$, and the posterior can remain close to the independent standardized prior in those coordinates. The data then perturb a relatively regular reference geometry.

With strong observations, the likelihood instead constrains $\mu+\tau z_j$ to be close to $y_j$. Varying $\tau$ requires coordinated movement of $z_j$ to preserve that fitted value. Centered effects can be preferable because the data directly constrain $\theta_j$. Thus neither parameterization dominates for every dataset. Mixed information across groups can motivate a carefully derived partial noncentering rather than a universal switch.

The shrinkage weight gives a numerical diagnostic of these regimes without becoming a convergence test. If $\tau=2$ and $\sigma_j=10$, then $w_j=1/26$: the group datum contributes little conditional precision and standardization is often helpful. If $\sigma_j=1/5$ at the same scale, then $w_j=100/101$: the likelihood is highly informative about the effect and centered coordinates may be easier. These calculations describe curvature and information balance at selected hyperparameters; they are not measured ESS or wall-clock improvements.

An implementation comparison must use the same data, proper priors, estimands and cost accounting. Comparing a centered model with one prior to a noncentered model with another would confound geometry with a changed posterior. Likewise, divergences and numerical warnings must be defined by the actual sampler implementation. The independent hierarchical reference later in this chapter supplies the target and moments; it does not manufacture NUTS trajectories or divergence observations.

<a id="section-410-likelihood-identification-differs-from-finite-informati"></a>
## Likelihood identification differs from finite information and prior regularization {#section-412-likelihood-identification-differs-from-finite-informati}

Identification asks whether different parameter values imply different distributions for observable data. Precision asks how much a finite dataset distinguishes those distributions. A proper posterior asks whether a prior-likelihood product is integrable. These questions are related but none is a synonym for the others.

In the normal hierarchy with known observation variances and $\tau\ge0$, the marginal observation distribution at fixed hyperparameters has mean $\mu\mathbf1$ and covariance $\operatorname{diag}(\sigma_j^2)+\tau^2I$. Different values of $\mu$ or $\tau^2$ give different distributions. The model is identifiable at that level even though a small number of groups may estimate the population scale poorly. Restricting $\tau$ to nonnegative values is important: an unrestricted signed scale would give the same distribution at $\tau$ and $-\tau$.

For a more quantitative view, at fixed $\tau$ the likelihood precision for $\mu$ is $R=\sum_jD_j^{-1}$. For the scale parameter, the expected Fisher information is $2\tau^2\sum_jD_j^{-2}$. To derive it, differentiate each normal variance $D_j$ with respect to $\tau$ and use the normal identity that variance information is one half of the squared relative derivative. The resulting information in the $\tau$ coordinate tends to zero at the boundary. In the variance coordinate $u=\tau^2$, it is instead $\tfrac12\sum_jD_j^{-2}$ at $u=0$. Boundary geometry and coordinate sensitivity matter; zero derivative in one coordinate is not proof of a globally unidentified distribution.

Prior sensitivity has a similarly limited implication. Consider a likelihood proportional to $\exp[-(\mu-y)^2/(2s^2)]$ and a prior $N(m_0,v_0)$. The posterior mean is $(v_0y+s^2m_0)/(v_0+s^2)$. Even if $s^2$ is small, an even smaller $v_0$ can make a strongly conflicting prior dominate. Changing that prior can materially move the posterior despite a sharply concentrated likelihood. Observed sensitivity establishes sensitivity to the tested choices; assessing information also requires likelihood scale, prior plausibility and the functional being reported.

Crossed effects provide an exact nonidentification example. If every school is paired with exactly one neighborhood and there are no crossing observations, independent school and neighborhood random effects can contribute only their summed variance to each marginal observation. With identical incidence matrices the covariance involves $\tau_u^2+\tau_v^2$, not the two components separately. Proper priors can allocate that sum between the components and produce a proper posterior, but they cannot create a likelihood distinction the design lacks.

These distinctions help decide what to report. A narrow posterior need not mean the data identified every component; it may reflect strong prior regularization. A broad posterior need not mean a parameter is structurally unidentified; finite information may simply be weak. Report the design, observation uncertainties, prior scales and the specific contrasts supported by them before drawing a conclusion from interval width alone.

<a id="section-424-exchangeability-is-conditional-on-the-information-decla"></a>
## Exchangeability is conditional on the information declared relevant {#section-426-exchangeability-is-conditional-on-the-information-decla}

The latent effects can be exchangeable before observing data even when the observations have different known standard errors. Conditional on shared hyperparameters, the prior density $\prod_jN(\theta_j\mid\mu,\tau^2)$ is invariant to permuting effect labels. Integrating the same hyperprior retains that invariance. The observation distribution need not be exchangeable if the fixed $\sigma_j$ differ. Exchangeability of effects is a modeling statement about what the prior treats alike, not a claim that every recorded measurement has the same precision.

Measured predictors refine that statement. For $\theta_j=x_j^\top\beta+u_j$ with $u_j\mid\tau\sim N(0,\tau^2)$, the residual effects can be exchangeable conditional on predictors while the overall means differ systematically. Pooling residuals toward zero then corresponds to pooling effects toward their predictor-dependent mean, not toward one common number. Omitting a known predictor and compensating with a larger random-effect variance describes a different population assumption.

A matrix calculation shows the connection with regression. For $y\mid b\sim N(Xb,\Sigma)$ and a proper Gaussian prior $b\sim N(m,V)$, the posterior precision is $X^\top\Sigma^{-1}X+V^{-1}$. Completing the vector quadratic gives posterior covariance equal to the inverse of that matrix and mean equal to this covariance times $X^\top\Sigma^{-1}y+V^{-1}m$. Positive definiteness of $\Sigma$ and $V$ makes the precision positive definite even when the design is rank deficient. That is a propriety and regularization result, not a proof that the likelihood alone identifies every coefficient.

For varying intercepts and slopes, the random-effect covariance may also contain correlations. Declaring independent slope and intercept priors is an assumption; it does not follow from fitting a multilevel regression. Predictor centering changes the interpretation of an intercept and its covariance with a slope. A careful generative description states the predictor origin, scales and which population quantities are shared.

Selection requires another declared part of the joint law. If inclusion depends on an unobserved effect, observed groups are not automatically a representative sample from the original population distribution. A hierarchy fitted only to selected observations cannot justify population extrapolation merely by having a random effect. One must describe the selection or conditioning protocol and decide whether its factor is ignorable for the intended posterior. This is the same distinction between observation mechanism and convenient likelihood used in the opening chapter.

A useful countercheck is to imagine relabeling two groups together with their predictors, uncertainties and selection information. If that relabeling changes the probability model for reasons not encoded in those variables, some substantive structure is missing. This check does not validate exchangeability empirically, but it makes the intended conditional symmetry explicit enough to criticize.

<a id="section-438-a-small-crossed-design-exposes-variance-components-and-"></a>
## A small crossed design exposes variance components and confounding {#section-440-a-small-crossed-design-exposes-variance-components-and-}

A covariance matrix makes the distinction between a design and its prior visible. Write a Gaussian crossed-effects observation model as $Y=\mu\mathbf1+Z_u u+Z_v v+\varepsilon$, with independent zero-mean effects having covariance matrices $D_u,D_v$ and measurement errors having positive-definite covariance $R$. Integrating the effects at fixed hyperparameters gives
\[
V=Z_uD_uZ_u^\top+Z_vD_vZ_v^\top+R.
\]
Each incidence matrix records which observations share an effect. Correlation is created by shared columns, not by a generic statement that all hierarchical observations are dependent.

Take three observations: school one in neighborhood one, school one in neighborhood two, and school two in neighborhood two. With two school and two neighborhood effects,
\[
Z_u=\begin{pmatrix}1&0\\1&0\\0&1\end{pmatrix},
\qquad
Z_v=\begin{pmatrix}1&0\\0&1\\0&1\end{pmatrix}.
\]
For $D_u=aI_2$, $D_v=bI_2$ and $R=rI_3$, $a,b\ge0$, $r>0$, multiplication yields
\[
V=\begin{pmatrix}
a+b+r&a&0\\
a&a+b+r&b\\
0&b&a+b+r
\end{pmatrix}.
\]
The first two observations share a school and have covariance $a$; the last two share a neighborhood and have covariance $b$. The first and third share neither and have zero conditional covariance. The fixed common mean does not itself add covariance.

At the distribution level these different off-diagonal entries distinguish $a$ from $b$ when $r$ is known. That is identification, not a claim that three observed values estimate two covariance entries accurately. Repeating an appropriate crossed design adds information; a single noisy realization still leaves substantial uncertainty. Positive definiteness follows from the variance decomposition and $R\succ0$, without requiring every variance component to be strictly positive.

Contrast two observations whose school and neighborhood labels coincide one-to-one. Both incidence matrices are then $I_2$, and $V=(a+b+r)I_2$. Pairs $(a,b)=(1,4)$ and $(2,3)$ give exactly the same observation distribution at fixed $\mu,r$. No amount of computation can extract a likelihood preference between those pairs from that design. Proper priors can make a posterior integrable and regularize its allocation along the constant-sum ridge, but that allocation is not newly identified by the likelihood.

If the common mean is random with prior variance $V_0$, integrating it adds $V_0\mathbf1\mathbf1^\top$ to a prior-predictive covariance. This is a separate layer from the random school and neighborhood effects. Likewise, integrating variance-component uncertainty requires total covariance and its moment hypotheses; the fixed-hyperparameter matrix is not automatically the final posterior covariance.

The shared eight-schools hierarchy is the single-factor version. With $\mu$ variance $400$ and a half-normal scale of ten, $E\tau^2=100$, so prior effect variances are $500$ and cross-school covariances are $400$. Replacing that scale by five changes the variances to $425$ while retaining covariance $400$. The observed estimate's variance adds its own $\sigma_j^2$. These are analytic prior-predictive identities, not measured posterior shrinkage or fitted correlation values.

A half-Cauchy scale prior lacks a finite second moment. Its proper prior need not have finite effect variances or covariances, so the same covariance calculation cannot simply be reused with an unspecified infinite term. Conditional formulas still exist, and posterior moments may become finite after observing data, but moment existence must be established for the particular distribution being summarized. This keeps the prior-predictive bridge and the posterior total-covariance statement mathematically distinct.

<a id="section-472-prior-prediction-separates-population-spread-from-measu"></a>
## Prior prediction separates population spread from measurement noise {#section-474-prior-prediction-separates-population-spread-from-measu}

A hierarchical prior predicts both latent group effects and future observations, and those are different levels of variation. Suppose $\mu\sim N(m_0,V_0)$ and $\tau\sim\operatorname{HalfNormal}(a)$ independently. Let $z_j$ be independent standard normals, independent of the hyperparameters, and write $\theta_j=\mu+\tau z_j$. Symmetry gives $E z_j=0$, while $E\tau^2=a^2$. Therefore
\[
E\theta_j=m_0,\qquad
\operatorname{Var}(\theta_j)=V_0+a^2,\qquad
\operatorname{Cov}(\theta_i,\theta_j)=V_0\quad(i\ne j).
\]
The scale contribution uses $E\tau^2$, not $\operatorname{Var}(\tau)$. Since the random coefficient multiplies a zero-mean variable, substituting the half-normal variance would be an algebraic error.

If a future observation is $Y_j=\theta_j+\sigma_j\varepsilon_j$ with independent standard normal measurement errors, then its variance is $V_0+a^2+\sigma_j^2$ and its cross-group covariance is still $V_0$. A prior-predictive spread that looks excessive can come from the population location prior, the population scale prior or the measurement model. Checking only one scale parameter does not identify the defective component.

Contrasts reveal another useful separation. For different groups,
\[
\operatorname{Var}(\theta_i-\theta_j)=2a^2,\qquad
\operatorname{Var}(Y_i-Y_j)=2a^2+\sigma_i^2+\sigma_j^2.
\]
The shared location cancels. If the scientific question concerns differences, increasing $V_0$ does not change this prior contrast variance, although it increases each absolute-effect variance. A plausibility check should therefore target a declared functional, not just inspect a generic collection of draws.

There are exact higher-moment checks too. For $m_0=0$, independence and the normal fourth moment give
\[
E\theta_j^4=3V_0^2+6V_0a^2+9a^4.
\]
The last term is $E\tau^4\,Ez_j^4=(3a^4)(3)$. Thus the marginal effect is generally not normal with variance $V_0+a^2$; a normal of that variance would have fourth moment $3(V_0+a^2)^2$, missing $6a^4$. Random population scale produces heavier fourth-moment behavior even with a half-normal scale prior.

These identities give independently checkable numerical simulation targets. For example, $V_0=9$ and $a=2$ imply effect variance thirteen, cross-group covariance nine and latent contrast variance eight. If observation standard errors are one and three, the observed contrast variance is eighteen. Such finite reference calculations test particular generated quantities; agreement does not establish the correctness of every sampler operation.

Prior prediction does not condition on the observed effect estimates. Reusing a fitted posterior for the hyperparameters turns it into posterior prediction and changes the question. Keeping the two levels and the two conditioning regimes explicit prevents a good-looking fitted replication from being misreported as evidence that the original prior was scientifically plausible.

<a id="section-501-predicting-an-existing-group-differs-from-predicting-a-"></a>
## Predicting an existing group differs from predicting a new group {#section-503-predicting-an-existing-group-differs-from-predicting-a-}

For an existing group, a replicated estimate with the same known measurement standard error is generated by first drawing its fitted effect $\theta_j$ from the joint posterior and then drawing $Y_j^{\mathrm{rep}}\mid\theta_j\sim N(\theta_j,\sigma_j^2)$. Its posterior-predictive mean is $E(\theta_j\mid y)$ and its variance is $\operatorname{Var}(\theta_j\mid y)+\sigma_j^2$. The additional variance is measurement uncertainty in a future replication, not uncertainty about the already observed number.

For a new exchangeable group, no fitted group effect is available. Draw $\mu,\tau$ from their posterior, then $\theta_{\mathrm{new}}\mid\mu,\tau\sim N(\mu,\tau^2)$, and finally an observation with its declared new standard error. Provided the moments exist,
\[
E(\theta_{\mathrm{new}}\mid y)=E(\mu\mid y),\qquad
\operatorname{Var}(\theta_{\mathrm{new}}\mid y)
=E(\tau^2\mid y)+\operatorname{Var}(\mu\mid y).
\]
Add the new measurement variance only when predicting an observation. Substituting an existing group's shrunken effect for a new population draw would underrepresent between-group variation.

For two new groups, conditional independence given the hyperparameters makes their cross-covariance $\operatorname{Var}(\mu\mid y)$. Their difference removes this shared location uncertainty and has variance $2E(\tau^2\mid y)$. These are predictive statements under exchangeability, not guarantees that a future selected school belongs to the same population.

This distinction determines a criticism procedure. Replicating observations within existing groups can reveal a mismatch between their measurement model and the fitted data. Replicating new groups probes the population distribution and the declared extrapolation. A diagnostic discrepancy should state which replication is used and whether its validation unit is a group, an individual observation or a contrast. Treating all repeated measurements as independent validation units can create apparent precision unsupported by the design.

The proper shared eight-schools reference below is supplied so later chapters can use one actual likelihood and prior rather than an unspecified hierarchy. Its independent reference draws support conditional-moment and predictive checks on that target. They do not contain momentum energies, NUTS trees, divergent transitions or an HMC warmup history. Those quantities require an actual fitted sampler and its declared instrumentation.

A complete computational report therefore keeps three records: the probability model and its interpretation, the algorithm and finite computational uncertainty, and the diagnostic or predictive question answered by the output. Changing one record does not silently change the other two. In particular, good Monte Carlo precision for a posterior expectation cannot make a population assumption scientifically valid, while a scientifically meaningful hierarchy still needs a numerically reliable implementation.

<a id="section-521-exercises-joint-uncertainty-and-scale-propriety"></a>
## Observation units determine which hierarchical checks are meaningful {#section-533-observation-units-determine-which-hierarchical-checks-a}

The eight supplied observations are estimated school effects with reported standard errors. Treating those standard errors as fixed is part of the reference model. It does not turn the eight numbers into individual student outcomes, nor does it include uncertainty in estimating each standard error. A different observation model would be needed to analyze those additional sources of variation.

A sampling model for individual outcomes can sometimes lead to a normal model for a group average. For example, if $n_j$ independent observations have known individual variance $s_j^2$, their average has variance $s_j^2/n_j$. But a reported standard error alone does not determine either $n_j$ or $s_j^2$: many pairs yield the same ratio. It certainly does not reconstruct the original observations. Inventing within-school data from that ratio would add unsupported information.

A group-level prior check in this reference concerns the latent vector $\theta$, while an observation-level check concerns replicated noisy effect estimates $Y$ with the declared standard errors. These checks can be fully reproduced without a student-level dataset because that is the specified experiment. A claim about within-school residual shape, individual outliers or a pupil-level likelihood would remain a template until the corresponding observations and likelihood are supplied.

Likewise, predicting an additional school requires declaring the new estimate's standard error or a model for that design quantity. Reusing the eight fixed standard-error values as an eight-school future design is a possible explicit choice; treating them as randomly sampled future standard errors without a distribution is not.

This distinction limits scientific conclusions as well as code. An internally correct normal-summary calculation does not prove exchangeability, causal interpretation of coaching effects, or absence of selection bias. It supplies a transparent conditional analysis of the declared summaries. Keeping the observation unit explicit lets later predictive and model-comparison chapters ask useful questions without silently changing the data or pretending an unavailable experiment has been reproduced.

<a id="section-543-solutions-joint-uncertainty-and-scale-propriety"></a>

## Summary

<a id="section-194-looking-backward-and-forward"></a>
This chapter extended the conjugate ideas of *Conjugacy as an Exact Computational Benchmark* to hierarchical settings where exact closed forms are unavailable. The next chapter, *Monte Carlo Estimates and Their Error*, shows how to approximate posterior expectations using simulation and how to measure the uncertainty introduced by finite computation.
<a id="section-195-completing-the-square-separates-data-precision-from-pop"></a>

## Exercises {#section-174-practice-exercises}

<a id="section-174-exercise-1"></a>
### Exercise 1 {#section-176-exercise-1}

In the Gaussian hierarchy with known hyperparameters, suppose $x_{j} = 20$, $s_{j} = 10$, $\mu = 10$, and $\tau = 5$. Compute the posterior mean and variance of $\theta_{j}$.

**Solution.** $v_{j} = (1/100 + 1/25)^{-1} = (0.01 + 0.04)^{-1} = 20$. $w_{j} = 25/(25+100) = 0.2$. $m_{j} = 0.2(20) + 0.8(10) = 12$. The posterior is $\mathcal{N}(12, 20)$.

<a id="section-180-exercise-2"></a>
### Exercise 2 {#section-182-exercise-2}

Explain why a noncentered parameterization $u_{j} = \tau z_{j}$ with $z_{j} \sim \mathcal{N}(0,1)$ can improve sampling for hierarchical models when group data are weak.

**Solution.** In the centered parameterization, the conditional distribution of $u_{j}$ given $\tau$ has scale $\tau$. When $\tau$ is near zero and the data are weak, the posterior has a funnel shape: $u_{j}$ is constrained near zero when $\tau$ is small but can vary widely when $\tau$ is large. A step size that is stable in the narrow neck may give short physical trajectories in the wide region at fixed leapfrog count; increasing trajectory length can compensate, so a large step size in the wide region is not a mathematical requirement. The noncentered parameterization makes $z_j$ independent of $\tau$ in the prior and often weakens posterior dependence when group data are weak; the likelihood can still couple them, and informative groups may favor centering.

<a id="section-186-exercise-3"></a>
### Exercise 3 {#section-188-exercise-3}

A researcher fits a hierarchical model to data from $J = 3$ groups and reports that the posterior for $\tau$ is nearly identical under half-Cauchy$(0, 5)$ and half-normal$(0, 10)$ priors. Is this evidence that the prior on $\tau$ is unimportant?

**Solution.** Agreement is evidence of robustness to these two tested priors, but it does not establish that the prior on $\tau$ is generally unimportant. Sensitivity analysis should include scientifically plausible alternatives on the model's declared group-effect scale, with their predictive implications stated; imposing an arbitrarily stronger prior is not by itself a scientifically meaningful robustness check.

<a id="section-192-looking-backward-and-forward"></a>

<a id="section-109-extended-exercise-discussion"></a>
<a id="section-109-exercise-4-discussion"></a>
### Exercise 4 (Discussion) {#section-111-exercise-4-discussion}

A researcher fits a hierarchical model with $J = 50$ groups and reports that the posterior for $\tau$ is concentrated near $0.5$ with a tight credible interval. They conclude that partial pooling is unnecessary and fit a separate model to each group. Is this justified?

**Solution.** No. A posterior for $\tau$ concentrated away from zero says there
is between-group variation; it does not remove the shared population model or
make its shrinkage weights vanish. Fitting separate models discards that
model-based sharing and can increase uncertainty, especially for small groups.
Report the hierarchical posterior estimates and their sensitivity to the
exchangeability and population-distribution assumptions. If the reported
estimate is the posterior mean, it minimizes posterior expected squared-error
loss under the stated hierarchical model; “optimal” without that model and
loss would be too broad.


<a id="section-124-visualizing-partial-pooling"></a>

<a id="section-523-exercises-joint-uncertainty-and-scale-propriety"></a>
### Exercise 5 — CBM-03-E5 — Recover a joint posterior instead of independent error bars {#section-525-cbm-03-e5-recover-a-joint-posterior-instead-of-independ}

Two effects have observations $y=(1,4)$ with variances $(1,9)$, fixed $\tau^2=4$, and independent hyperprior $\mu\sim N(0,9)$. Derive the posterior mean vector and covariance matrix of the effects after integrating $\mu$. What error results from treating the effects as independent when computing their difference's variance?

<a id="section-527-cbm-03-e6-an-improper-scale-cannot-be-repaired-by-chang"></a>
### Exercise 6 — CBM-03-E6 — An improper scale cannot be repaired by changing coordinates {#section-529-cbm-03-e6-an-improper-scale-cannot-be-repaired-by-chang}

Keep positive observation standard errors and a proper normal prior for $\mu$. Replace the half-normal scale prior by the improper kernel $1/\tau$ on $0<\tau<1$. Prove that its posterior is improper and express the same failure after $\eta=\log\tau$. State how a proper half-normal changes the log-scale Jacobian factor.

<a id="section-531-observation-units-determine-which-hierarchical-checks-a"></a>

## Solutions: joint uncertainty and scale propriety {#section-545-solutions-joint-uncertainty-and-scale-propriety}

<a id="section-545-cbm-03-e5-recover-a-joint-posterior-instead-of-independ"></a>
### CBM-03-E5 — Recover a joint posterior instead of independent error bars — solution {#section-547-cbm-03-e5-recover-a-joint-posterior-instead-of-independ}

The collapsed observation variances are five and thirteen. Thus $A=1/9+1/5+1/13=227/585$, $B=1/5+4/13=33/65$, $m_\mu=297/227$ and $V_\mu=585/227$. The data weights are $4/5$ and $4/13$, and the population weights are $1/5$ and $9/13$. Substitution gives effect means $(241,485)/227$ and covariance
\[
\frac1{227}\begin{pmatrix}205&81\\81&909\end{pmatrix}.
\]
For the difference, variance is $(205+909-2\cdot81)/227=952/227$. Ignoring covariance would give $1114/227$, overstating this contrast's variance by $162/227$. The positive shared covariance is not a license to ignore the sign in a contrast.

<a id="section-553-cbm-03-e6-an-improper-scale-cannot-be-repaired-by-chang"></a>
### CBM-03-E6 — An improper scale cannot be repaired by changing coordinates — solution {#section-555-cbm-03-e6-an-improper-scale-cannot-be-repaired-by-chang}

The collapsed likelihood tends to a positive finite value at $\tau=0$, so it is bounded below by a positive constant on some interval $(0,\varepsilon)$. Its product with $1/\tau$ has divergent integral there. Under $\eta=\log\tau$, the factor $1/\tau$ cancels the Jacobian $d\tau/d\eta=\tau$, leaving a likelihood approaching a positive constant as $\eta\to-\infty$; integrating that constant over an infinite interval also diverges. A proper half-normal has finite positive density at zero, so its log-coordinate density includes the additional $+\eta$ term and decays like $e^\eta$ near that boundary. Coordinate changes preserve propriety when their Jacobians are correct.

<a id="section-557-solutions-the-shared-proper-eight-schools-hierarchy-ref"></a>

## Solutions: the shared proper eight-schools hierarchy reference {#section-559-solutions-the-shared-proper-eight-schools-hierarchy-ref}

The public case identifier is COMM06-HIERARCHY-03 and its primary fixture identifier is CBM-HIERARCHY-EIGHT-SCHOOLS-HN10-MU20-v1. This supplies the missing data and priors for the original eight-schools discussion and the group/observation prior-predictive procedure. It is a full eight-effect hierarchy, not the Gaussian integrator example from the sampler chapter.

Use $y=(28,8,-3,7,-1,1,18,12)$ and known standard errors $\sigma=(15,10,16,11,9,11,10,18)$ in the same effect units. The data values are the classic eight-schools estimates documented by the Stan project. The proper priors chosen here are explicitly different from a default flat-prior example: independently, $\mu\sim N(0,20^2)$ and $\tau\sim\operatorname{HalfNormal}(10)$, with $\theta_j\mid\mu,\tau\sim N(\mu,\tau^2)$ and $y_j\mid\theta_j\sim N(\theta_j,\sigma_j^2)$. The target support is $\mu\in\mathbb R$, $\tau>0$ and $\theta\in\mathbb R^8$. The unit of inference is a school effect and its joint population distribution, with the eight reported standard errors treated as fixed.

<a id="section-563-independent-posterior-and-predictive-references"></a>
### Independent posterior and predictive references {#section-565-independent-posterior-and-predictive-references}

The preceding collapsed formulas give the exact conditional distributions and one-dimensional integral identities for posterior means and second moments. The program evaluates these scalar integrals with adaptive quadrature and compares them with independent accepted full-hierarchy draws. It reports the quadrature error estimates as numerical estimates, not certified enclosures. It also reports posterior probabilities below scale one and above scales ten and twenty; their numerical values remain unobserved until the program actually runs. Neither “substantial mass near zero” nor “long tail” is supplied as an unexplained observed result.

The posterior sampler proposes $\mu,\tau$ independently from their proper hyperprior and accepts with probability
\[
a(\mu,\tau)=\prod_{j=1}^8\frac{\sigma_j}{\sqrt{\sigma_j^2+\tau^2}}
\exp\left[-\frac12\sum_{j=1}^8
\frac{(y_j-\mu)^2}{\sigma_j^2+\tau^2}\right]\le1.
\]
Accepted hyperparameters have the collapsed posterior law under ideal independent random inputs. Conditional normals then supply all eight effects. There is no Markov-chain warmup or autocorrelation correction in this reference. The executed program uses PCG64 pseudorandom streams; reproducibility of that implementation is distinct from the mathematical ideal-random-input theorem.

For prior prediction, the primary prior gives effect second moments $500$, cross-school product expectation $400$, and first-school observation second moment $725$. The corresponding exact fourth-moment formulas determine the standard errors of the supplied moment checks. Group-level latent effects and observation-level noisy estimates are generated separately. The illustrative criticism threshold is $\max_j|\theta_j|>100$ or $\max_j|Y_j|>100$ effect units. It is a declared numerical question, not an asserted scientifically validated plausibility boundary.

<a id="section-577-a-finite-budget-with-an-explicit-failure-branch"></a>
### A finite budget with an explicit failure branch {#section-579-a-finite-budget-with-an-explicit-failure-branch}

Retain exactly $4000$ posterior draws per prior, using proposal batches of $8192$ and a maximum of $4{,}000{,}000$ proposals per prior. The final batch is shortened to the remaining budget. If fewer than $4000$ are obtained, the program fails with proposed/generated/retained counts; it does not reduce the requested sample, change priors or substitute a grid approximation.

The proposal budget has a conservative analytic check. On $0<\tau<8$, the product of variance factors exceeds $1/5$. Component lower bounds are $15/17,39/50,89/100,4/5,37/50,4/5,39/50,91/100$; their product is $109388981520/531250000000>1/5$. Put $R=\sum_j(\sigma_j^2+\tau^2)^{-1}$. Direct rational bounds give $R<0.063$, so integrating the normal mean prior contributes $(1+400R)^{-1/2}>5/26$. The minimized quadratic is at most its value at $\mu=8,\tau=0$, namely
\[
4/25+16/9+121/256+50/121+2+4/81<5.
\]
Therefore its exponential factor exceeds $1/13$: for example $e<11/4$ and $\sqrt e<5/3$ give $e^{5/2}<605/48<13$.

The half-normal scale-ten prior assigns probability greater than one half to $\tau<8$. A lower-rectangle integral on standardized intervals $[0,0.4]$ and $[0.4,0.8]$, using $\sqrt{2/\pi}>0.79$ and $e^{-x}>1-x$, gives a lower bound $0.79(0.4)(0.92+0.68)=0.5056$. Combining these bounds makes overall acceptance probability greater than $1/676$. For four million ideal iid proposals, a binomial lower-tail Chernoff bound makes the probability of fewer than four thousand acceptances less than $e^{-300}$, since
\[
\frac{(4000000-4000\cdot676)^2}{2\cdot4000000\cdot676}>300.
\]
This is a probability statement for the ideal proposal construction, not a guarantee about a deterministic pseudorandom seed, wall-clock cost or a flawed implementation.

<a id="section-593-changed-prior-and-a-deliberate-density-error"></a>
### Changed prior and a deliberate density error {#section-595-changed-prior-and-a-deliberate-density-error}

The changed model keeps the data, likelihood and mean prior fixed and replaces the scale prior by $\operatorname{HalfNormal}(5)$. It also retains exactly $4000$ draws with its own four-million proposal cap. The same acceptance lower bound applies because the probability of $\tau<8$ is larger. Thus the aggregate maximum is eight million proposals for the two targets, never a silent budget extension. Distinct streams use hyperparameter seeds $2026110403$ and $2026110405$, with effect seeds one greater. Prior-predictive seeds are $2026110413$ and $2026110414$, each with fifty thousand replications.

The program also checks a centered/noncentered log-density identity at $\mu=1$, $\tau=2$ and a declared eight-vector of standardized effects. The correct transformation adds $9\log\tau$ to the centered density when both effects and log scale are transformed. Omitting the $\tau^8$ effect Jacobian creates the exact error $-8\log2$, which the negative fixture must detect. This failure example does not run a mislabeled alternative sampler or call its output posterior draws.

Mean checks compare ten posterior components with independent quadrature references using six reference standard errors plus a fixed numerical allowance. Those are declared finite stochastic regression criteria, not a mathematical proof of implementation correctness. Prior-predictive moment checks use their exact iid variance formulas. Exceedance frequencies carry binomial Monte Carlo uncertainty; a zero count is accompanied by the one-sided $95\%$ upper bound $1-0.05^{1/50000}$ rather than a claim of zero probability.

<a id="section-601-public-output-and-descriptive-rubric"></a>
### Public output and descriptive rubric {#section-603-public-output-and-descriptive-rubric}

The only optional command-line argument is an output path for a new JSON file, created exclusively rather than overwriting an existing file. Its primary fields include the exact fixture/data/priors, arrays of $4000$ values for $\mu$ and $\tau$ and a $4000$ by eight effect array, sampling settings, actual proposed and generated-acceptance counts, and the actual executed program-body hash. A separately labeled changed-prior record contains its own arrays and counts. Standard output reports bounded summaries and checks. The stopped ratio of generated acceptances to proposals is descriptive output, not asserted to be an unbiased acceptance-probability estimator.

A complete response preserves the two proper models, data units, exact conditional and collapsed references, proposal envelope and no-fallback cap. It distinguishes ideal iid laws from actual pseudorandom observations and records seeds, dependency versions, retained counts, tolerances and generated quantities. It interprets sensitivity only over the declared prior choices. The primary arrays can be used by later predictive chapters after their source/body pins and literal model fields are verified. They contain no fitted NUTS tree, momentum energy or divergence metadata; Gaussian-integrator checks, production diagnostics and other original workflows retain their separate obligations.

<a id="section-607-solutions-executable-shared-hierarchy-reference"></a>

## Solutions: executable shared hierarchy reference {#section-609-solutions-executable-shared-hierarchy-reference}

This program implements the declared full hierarchy and proper-prior change. Save the exact Python fence body to a local file and run it in the pinned environment. An optional --output path creates a new JSON draw artifact for the later predictive chapters. The source authors have not run this listing; successful output is not presumed.

```python
"""COMM06 full eight-schools reference; root execution remains unobserved here."""
from __future__ import annotations

import argparse
import hashlib
import json
import math
from pathlib import Path
import platform
import sys
import warnings

import numpy as np
import scipy
from scipy.integrate import IntegrationWarning, quad

FIXTURE = "CBM-HIERARCHY-EIGHT-SCHOOLS-HN10-MU20-v1"
DEPENDENCIES = {"python": "3.14.7", "numpy": "2.5.2", "scipy": "1.18.1"}
Y = np.array([28., 8., -3., 7., -1., 1., 18., 12.])
SIGMA = np.array([15., 10., 16., 11., 9., 11., 10., 18.])
SIGMA2 = SIGMA * SIGMA
N = 4000
BATCH = 8192
CAP_PER_PRIOR = 4_000_000
PRIOR_N = 50_000
QUAD_EPS = 1e-10


def require(condition: bool, message: str) -> None:
    if not condition:
        raise RuntimeError(message)


def encode(value: object) -> bytes:
    return json.dumps(value, ensure_ascii=False, sort_keys=True,
                      separators=(",", ":"), allow_nan=False).encode("utf-8")


def rng(seed: int) -> np.random.Generator:
    return np.random.Generator(np.random.PCG64(seed))


def conditional(tau: float) -> tuple[np.ndarray, float, float, np.ndarray, np.ndarray]:
    d = SIGMA2 + tau * tau
    a = 1. / 400. + float(np.sum(1. / d))
    b = float(np.sum(Y / d))
    w = tau * tau / d
    v = tau * tau * SIGMA2 / d
    return d, b / a, 1. / a, w, v


def log_tau_kernel(tau: float, scale: float) -> float:
    d, mean_mu, var_mu, _, _ = conditional(tau)
    a = 1. / var_mu
    b = mean_mu * a
    c = float(np.sum(Y * Y / d))
    return (-.5 * (tau / scale) ** 2 - .5 * float(np.log(d).sum())
            - .5 * math.log(a) - .5 * (c - b * b / a))


def reference(scale: float) -> dict[str, object]:
    anchor = log_tau_kernel(0., scale)
    maximum_error = 0.

    def weight(tau: float) -> float:
        value = log_tau_kernel(tau, scale) - anchor
        require(math.isfinite(value), "Nonfinite quadrature log weight")
        return math.exp(value)

    def integrate(function, lower: float = 0.) -> float:
        nonlocal maximum_error
        with warnings.catch_warnings():
            warnings.simplefilter("error", IntegrationWarning)
            value, error = quad(lambda t: weight(t) * function(t),
                                lower, np.inf, epsabs=QUAD_EPS,
                                epsrel=QUAD_EPS, limit=250)
        require(math.isfinite(value) and math.isfinite(error) and
                error <= 1e-7 * (1. + abs(value)),
                "Quadrature error estimate exceeds declared tolerance")
        maximum_error = max(maximum_error, error)
        return float(value)

    z = integrate(lambda t: 1.)
    require(z > 0., "Positive quadrature normalizer required")
    means = []
    seconds = []
    for component in range(10):
        def moment(tau: float, second: bool = False) -> float:
            if component == 1:
                return tau * tau if second else tau
            _, m, v_mu, w, v = conditional(tau)
            if component == 0:
                return v_mu + m * m if second else m
            j = component - 2
            m_j = float(w[j] * Y[j] + (1. - w[j]) * m)
            v_j = float(v[j] + (1. - w[j]) ** 2 * v_mu)
            return v_j + m_j * m_j if second else m_j
        means.append(integrate(lambda t: moment(t)) / z)
        seconds.append(integrate(lambda t: moment(t, True)) / z)
    mean = np.array(means)
    variance = np.array(seconds) - mean * mean
    require(np.all(np.isfinite(variance)) and np.all(variance > 0.),
            "Positive finite posterior reference variances required")
    p_tau_lt1 = (z - integrate(lambda t: 1., 1.)) / z
    p_tau_gt10 = integrate(lambda t: 1., 10.) / z
    p_tau_gt20 = integrate(lambda t: 1., 20.) / z
    require(0. <= p_tau_lt1 <= 1. and
            0. <= p_tau_gt20 <= p_tau_gt10 <= 1.,
            "Quadrature tail probabilities outside range")
    return {"means": mean.tolist(), "variances": variance.tolist(),
            "normalizer_relative_to_tau0": z,
            "maximum_reported_quad_error": maximum_error,
            "p_tau_lt1": p_tau_lt1, "p_tau_gt10": p_tau_gt10,
            "p_tau_gt20": p_tau_gt20,
            "reference_kind": "one-dimensional adaptive quadrature; error estimate, not rigorous enclosure"}


def draw_posterior(scale: float, seed: int) -> tuple[dict[str, np.ndarray], dict[str, object]]:
    proposal_rng = rng(seed)
    accepted_mu = []
    accepted_tau = []
    proposed = generated = retained = 0
    while retained < N and proposed < CAP_PER_PRIOR:
        size = min(BATCH, CAP_PER_PRIOR - proposed)
        mu = proposal_rng.normal(0., 20., size)
        tau = np.abs(proposal_rng.normal(0., scale, size))
        d = SIGMA2[None, :] + tau[:, None] ** 2
        log_accept = (.5 * np.log(SIGMA2[None, :] / d).sum(axis=1)
                      - .5 * (((Y[None, :] - mu[:, None]) ** 2) / d).sum(axis=1))
        require(np.all(np.isfinite(log_accept)) and np.max(log_accept) <= 1e-12,
                "Rejection envelope violation")
        mask = (tau > 0.) & (proposal_rng.random(size) < np.exp(np.minimum(log_accept, 0.)))
        count = int(np.count_nonzero(mask))
        generated += count
        take = min(count, N - retained)
        accepted_mu.append(mu[mask][:take])
        accepted_tau.append(tau[mask][:take])
        retained += take
        proposed += size
    require(retained == N,
            f"Proposal budget failed: retained={retained}, generated={generated}, proposed={proposed}; no partial sample or fallback")
    mu = np.concatenate(accepted_mu)
    tau = np.concatenate(accepted_tau)
    d = SIGMA2[None, :] + tau[:, None] ** 2
    w = tau[:, None] ** 2 / d
    variance = tau[:, None] ** 2 * SIGMA2[None, :] / d
    mean = w * Y[None, :] + (1. - w) * mu[:, None]
    theta = mean + np.sqrt(variance) * rng(seed + 1).normal(size=(N, 8))
    require(mu.shape == tau.shape == (N,) and theta.shape == (N, 8) and
            np.all(tau > 0.) and np.all(np.isfinite(theta)),
            "Invalid full hierarchy draw shape/support")
    residual = (theta - mean) / np.sqrt(variance)
    require(abs(float(residual.mean())) < 6. / math.sqrt(N * 8) and
            abs(float((residual * residual).mean()) - 1.) <
            6. * math.sqrt(2. / (N * 8)),
            "Conditional normal residual check failed")
    return {"mu": mu, "tau": tau, "theta": theta}, {
        "accepted_retained": retained, "accepted_generated": generated,
        "proposed": proposed, "proposal_cap_per_prior": CAP_PER_PRIOR,
        "batch_size": BATCH, "warmup": 0, "seed_hyperparameters": seed,
        "seed_conditional_effects": seed + 1,
        "rng": "PCG64", "algorithm": "collapsed-prior-envelope-rejection+conditional-normal-v1"}


def compare_reference(draws: dict[str, np.ndarray], ref: dict[str, object]) -> dict[str, object]:
    values = np.column_stack([draws["mu"], draws["tau"], draws["theta"]])
    means = np.array(ref["means"])
    variances = np.array(ref["variances"])
    estimate = values.mean(axis=0)
    reference_mcse = np.sqrt(variances / N)
    tolerance = 6. * reference_mcse + 1e-7
    difference = estimate - means
    require(np.all(np.abs(difference) <= tolerance),
            "Posterior mean differs from independent quadrature reference beyond six-SE check")
    return {"estimand_order": ["mu", "tau"] + [f"theta{j}" for j in range(1, 9)],
            "sample_means": estimate.tolist(), "reference_means": means.tolist(),
            "reference_mean_mcse": reference_mcse.tolist(),
            "difference": difference.tolist(), "absolute_tolerance": tolerance.tolist(),
            "interpretation": "declared finite stochastic regression check, not a proof of implementation correctness"}


def prior_predictive(scale: float, seed: int) -> dict[str, object]:
    generator = rng(seed)
    mu = generator.normal(0., 20., PRIOR_N)
    tau = np.abs(generator.normal(0., scale, PRIOR_N))
    theta = mu[:, None] + tau[:, None] * generator.normal(size=(PRIOR_N, 8))
    observed = theta + SIGMA[None, :] * generator.normal(size=(PRIOR_N, 8))
    variance_mu = 400.
    scale2 = scale * scale
    theta_second = variance_mu + scale2
    theta_fourth = 3. * variance_mu ** 2 + 6. * variance_mu * scale2 + 9. * scale2 ** 2
    theta_cross_second = 3. * variance_mu ** 2 + 2. * variance_mu * scale2 + 3. * scale2 ** 2
    expected = np.array([theta_second, variance_mu, theta_second + SIGMA2[0]])
    variance = np.array([
        theta_fourth - theta_second ** 2,
        theta_cross_second - variance_mu ** 2,
        theta_fourth + 6. * theta_second * SIGMA2[0] + 3. * SIGMA2[0] ** 2
        - (theta_second + SIGMA2[0]) ** 2])
    values = np.column_stack([theta[:, 0] ** 2, theta[:, 0] * theta[:, 1],
                              observed[:, 0] ** 2])
    estimates = values.mean(axis=0)
    tolerance = 6. * np.sqrt(variance / PRIOR_N) + 1e-7
    require(np.all(np.abs(estimates - expected) <= tolerance),
            "Prior-predictive analytic moment check failed")
    group_count = int(np.count_nonzero(np.max(np.abs(theta), axis=1) > 100.))
    observation_count = int(np.count_nonzero(np.max(np.abs(observed), axis=1) > 100.))
    return {"replications": PRIOR_N, "seed": seed,
            "estimands": ["theta1 squared", "theta1 times theta2", "future y1 squared"],
            "analytic_expectations": expected.tolist(), "estimates": estimates.tolist(),
            "absolute_tolerance": tolerance.tolist(),
            "illustrative_threshold_effect_units": 100.,
            "group_level_exceedances": group_count,
            "observation_level_exceedances": observation_count,
            "binomial_se_group_frequency": math.sqrt((group_count / PRIOR_N) * (1. - group_count / PRIOR_N) / PRIOR_N),
            "binomial_se_observation_frequency": math.sqrt((observation_count / PRIOR_N) * (1. - observation_count / PRIOR_N) / PRIOR_N),
            "zero_exceedance_one_sided_95_upper": -math.expm1(math.log(.05) / PRIOR_N),
            "threshold_status": "illustrative prior criticism question, not a validated scientific bound"}


def jacobian_check() -> dict[str, object]:
    mu, tau = 1., 2.
    eta = math.log(tau)
    z = np.linspace(-1., 1., 8)
    theta = mu + tau * z
    shared = -mu * mu / 800. - tau * tau / 200.
    likelihood = -.5 * float(np.sum((Y - theta) ** 2 / SIGMA2))
    centered = shared - 8. * eta - .5 * float(np.sum((theta - mu) ** 2 / (tau * tau))) + likelihood
    noncentered_eta = shared - .5 * float(np.sum(z * z)) + likelihood + eta
    transformed = centered + 9. * eta
    wrong_without_tau_power = centered + eta
    require(abs(transformed - noncentered_eta) < 1e-10,
            "Full centered-to-noncentered log-Jacobian identity failed")
    require(abs(wrong_without_tau_power - noncentered_eta) > 1.,
            "Deliberate missing tau^8 Jacobian was not detected")
    return {"correct_log_density_difference": transformed - noncentered_eta,
            "deliberate_wrong_log_density_difference": wrong_without_tau_power - noncentered_eta,
            "analytic_wrong_difference": -8. * eta,
            "negative_fixture_detected": True}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path,
                        help="Create one new JSON draw artifact exclusively; never overwrite")
    args = parser.parse_args()
    observed_dependencies = {"python": platform.python_version(),
                             "numpy": np.__version__, "scipy": scipy.__version__}
    require(platform.python_implementation() == "CPython" and observed_dependencies == DEPENDENCIES,
            "Runtime differs from pinned public reference passport")
    body_sha = hashlib.sha256(Path(__file__).read_bytes()).hexdigest()
    primary_ref = reference(10.)
    primary, primary_counts = draw_posterior(10., 2026110403)
    primary_check = compare_reference(primary, primary_ref)
    changed_ref = reference(5.)
    changed, changed_counts = draw_posterior(5., 2026110405)
    changed_check = compare_reference(changed, changed_ref)
    prior_primary = prior_predictive(10., 2026110413)
    prior_changed = prior_predictive(5., 2026110414)
    summary = {"fixture_id": FIXTURE, "program_body_sha256": body_sha,
               "dependencies": observed_dependencies, "platform": platform.platform(),
               "primary_tau_prior_scale": 10., "changed_tau_prior_scale": 5.,
               "primary_counts": primary_counts, "changed_counts": changed_counts,
               "primary_reference": primary_ref, "changed_reference": changed_ref,
               "primary_check": primary_check, "changed_check": changed_check,
               "prior_predictive_primary": prior_primary,
               "prior_predictive_changed": prior_changed,
               "jacobian": jacobian_check(),
               "sampling_law": "iid accepted values under ideal independent random inputs; actual PCG64 execution is reproducible numerical evidence",
               "interpretation_limit": "No fitted HMC/NUTS, divergence, warmup or scientific-validity claim"}
    artifact = {"schema_version": "1.0.0", "case_id": "COMM06-HIERARCHY-03",
                "program_id": "COMM06-HIERARCHY-03-PY",
                "fixture_id": FIXTURE, "program_body_sha256": body_sha,
                "dependencies": observed_dependencies,
                "data": {"J": 8, "y": Y.tolist(), "sigma": SIGMA.tolist()},
                "priors": {"mu_mean": 0., "mu_sd": 20., "tau_halfnormal_scale": 10.},
                "posterior": {name: value.tolist() for name, value in primary.items()},
                "sampling": primary_counts,
                "changed_prior": {"tau_halfnormal_scale": 5.,
                                  "posterior": {name: value.tolist() for name, value in changed.items()},
                                  "sampling": changed_counts},
                "summary": summary}
    if args.output is not None:
        raw = encode(artifact) + b"\n"
        with args.output.open("xb") as handle:
            handle.write(raw)
        summary["output"] = {"path": str(args.output), "bytes": len(raw),
                             "sha256": hashlib.sha256(raw).hexdigest()}
    print(json.dumps(summary, ensure_ascii=False, sort_keys=True, allow_nan=False))
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (RuntimeError, ValueError, OSError, IntegrationWarning) as error:
        print(json.dumps({"status": "FAIL", "error": str(error)}), file=sys.stderr)
        raise SystemExit(1)
```

The complete entrypoint always retains four thousand draws for each of the two priors or fails explicitly. It reports actual generated acceptances separately from retained draws and proposals. The actual program-body hash in its output must match the frozen fence-body hash before downstream use.

<a id="section-913-references-hierarchical-assumptions-and-shared-data"></a>

## Sources: hierarchical assumptions and shared data {#section-915-references-hierarchical-assumptions-and-shared-data}

The classic data values are documented by the [Stan Development Team's RStan eight-schools example](https://mc-stan.org/rstan/articles/rstan.html). That reference is used for the data and sampling hierarchy; the proper $N(0,20^2)$ and half-normal priors in this chapter's case are declared here, rather than attributed to a flat-prior example.

Andrew Gelman, “Prior distributions for variance parameters in hierarchical models,” Bayesian Analysis 1 (2006), 515–534, [author paper](https://sites.stat.columbia.edu/gelman/bayescomputation/Gelman2006.pdf), especially the conditional normal hierarchy in Section 2.1. Conditional conjugacy is kept separate from integrating hyperparameter uncertainty.

The [NumPy PCG64 documentation](https://numpy.org/doc/stable/reference/random/bit_generators/pcg64.html) identifies the named bit generator. The [SciPy quadrature documentation](https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.quad.html) describes an estimated absolute integration error. The public program pins the supplied local CPython/NumPy/SciPy versions and reports its actual environment when run. No source author has executed it, and neither a future successful check nor these derivations establishes learner efficacy or a calibrated expanded workload.

