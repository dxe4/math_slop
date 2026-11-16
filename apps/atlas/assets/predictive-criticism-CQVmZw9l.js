var e=`---
parent_id: book-computational-bayesian-modeling
chapter_id: predictive-criticism
title: "Predictive Criticism"
level: graduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Predictive Criticism {#section-1-predictive-criticism}

A model that fits the data well may still fail to generate plausible future data. Predictive criticism compares the observed data to data simulated from the fitted model, revealing discrepancies that parameter estimates alone cannot detect. This chapter covers posterior predictive checks, prior predictive checks, and the distinction between diagnosis and generalization.

<a id="section-3-posterior-predictive-checks"></a>
## Posterior predictive checks {#section-5-posterior-predictive-checks}

For each posterior draw $\\theta^{(s)}$, simulate replicated data $y_{\\mathrm{rep}}^{(s)} \\sim p(y \\mid \\theta^{(s)})$. The collection $\\{y_{\\mathrm{rep}}^{(s)}\\}_{s=1}^{S}$ forms the posterior predictive distribution. Compare features of the observed data $y$ to the same features computed from the replications.

A test statistic $T(y)$ summarizes a feature of interest: the maximum observation, the proportion of zeros, the variance across groups, the autocorrelation at lag 1, or the calibration of probabilistic predictions. The posterior predictive p-value is

$$p_{\\mathrm{post}} = \\Pr\\bigl(T(y_{\\mathrm{rep}}) \\geq T(y) \\mid y\\bigr),$$

estimated by the fraction of replications for which $T(y_{\\mathrm{rep}}^{(s)}) \\geq T(y)$.

**Important caution.** Posterior predictive checks reuse the data used to fit the model. Their tail areas are not automatically calibrated frequentist p-values. A small $p_{\\mathrm{post}}$ indicates a discrepancy between model and data, but its sampling distribution under the model need not be uniform. Use posterior predictive checks for diagnosis, not for formal hypothesis testing.

<a id="section-15-prior-predictive-checks"></a>
## Prior predictive checks {#section-17-prior-predictive-checks}

Before seeing data, simulate $y_{\\mathrm{rep}} \\sim p(y \\mid \\theta)$ for $\\theta \\sim \\pi(\\theta)$. If the prior predictive distribution places negligible mass on realistic data values, the joint prior-predictive model conflicts with that background constraint; diagnose the prior, likelihood/link, design and units before choosing a change. Prior predictive checks often reveal absurd scales sooner than posterior checks, because they are not masked by data-driven adaptation.

**Example.** A researcher places $\\operatorname{Normal}(0, 100^{2})$ priors on all regression coefficients. The prior predictive distribution for the outcome may span implausibly large ranges, depending on the link, units and predictor design. Diagnose which model component drives the implausible predictions; tightening a coefficient prior can help when its scale is the cause.

<a id="section-21-held-out-evaluation"></a>
## Held-out evaluation {#section-23-held-out-evaluation}

When the goal is generalization, evaluate predictions on genuinely held-out or future data. The full data pipeline must be accounted for: if preprocessing used all outcomes, the holdout is contaminated. Cross-validation provides a systematic way to estimate predictive performance, though it is computationally expensive for complex hierarchical models.

Leave-one-out cross-validation (LOO-CV) estimates the expected log predictive density for each observation given all others. For conjugate models, LOO-CV can be computed analytically. For non-conjugate models, approximations such as Pareto-smoothed importance sampling are available.

<a id="section-27-worked-example-checking-a-poisson-model"></a>
## Worked example: checking a Poisson model {#section-29-worked-example-checking-a-poisson-model}

Suppose we fit a Poisson model to count data and observe a sample variance twice the sample mean, indicating overdispersion. If replicated variances under the fitted model are usually smaller than the observed variance, then for the upper-tail convention defined above,

$$p_{\\mathrm{post}}=\\Pr\\{T(y_{\\mathrm{rep}})\\geq T(y)\\mid y\\},$$

the posterior predictive p-value will be near $0$, flagging the discrepancy. Reversing the inequality would produce a lower-tail value near $1$; the direction must travel with the reported number.

A discrepancy can motivate a separately fitted overdispersed model, such as a negative binomial or a hierarchical Poisson model with gamma-distributed rates. First inspect the observations, replications, prior sensitivity and data pipeline; one finite check does not establish a structural defect or identify a unique repair.


<a id="section-38-cross-validation-for-bayesian-models"></a>
## Cross-validation for Bayesian models {#section-40-cross-validation-for-bayesian-models}

Leave-one-out cross-validation (LOO-CV) estimates the expected log predictive density for each observation:

$$\\mathrm{elpd}_{\\mathrm{loo}} = \\sum_{i=1}^{n} \\log p(y_{i} \\mid y_{-i}).$$

For many non-conjugate models, $p(y_{i} \\mid y_{-i})$ is not available in closed form. Pareto-smoothed importance sampling (PSIS-LOO) approximates LOO-CV using importance weights from the full posterior. Its fitted Pareto shape $k$ diagnoses the upper tail of the raw importance ratios: asymptotically, $k\\geq 1/2$ corresponds to infinite raw-weight variance and $k\\geq1$ to an infinite raw-weight mean. Practical warning thresholds also depend on the effective sample size, so a large estimated $k$ is evidence to inspect or refit, not an exact label attached to every finite set of weights.

When PSIS-LOO fails for some observations, direct LOO-CV can be computed by refitting the model $n$ times, each time leaving out one observation. This targets the LOO quantity without the PSIS approximation, although numerical integration or Monte Carlo error in each fit remains. For hierarchical models, leave-one-group-out cross-validation may be more appropriate than leave-one-observation-out.

<a id="section-48-calibration-and-probability-integral-transform"></a>
## Calibration and probability integral transform {#section-50-calibration-and-probability-integral-transform}

A calibrated forecasting procedure produces predictive distributions that match future observations relative to the information available when each forecast is issued. Let $F_i$ be the CDF fitted without $y_i$—for example, a held-out, leave-one-out, or leave-future-out predictive CDF. If the conditional predictive law is continuous and correctly specified, then $F_i(y_i)$ is uniform on $[0,1]$ under repeated use of that forecasting protocol. Using the ordinary in-sample posterior predictive CDF reuses $y_i$ and does not inherit this uniformity claim.

For discrete data, let $V_i\\sim\\operatorname{Uniform}(0,1)$ independently and use the randomized PIT

$$U_i=F_i(y_i^-)+V_i\\{F_i(y_i)-F_i(y_i^-)\\}.$$

Under the same conditional calibration claim, $U_i$ is uniform. A U-shaped PIT histogram typically indicates **underdispersed** predictive distributions, because observations fall in predictive tails too often; an inverted-U shape typically indicates **overdispersed** predictions. Skew points to location bias. These shapes are diagnostics rather than proofs, especially when forecast cases are dependent.

![PIT rank interpretation: calibrated forecasts fill the unit interval uniformly, underdispersed forecasts put too many observations near zero and one, and overdispersed forecasts put too many near one half](figures/pit-calibration-shapes.svg)

The figure encodes ranks, not density estimates from a particular dataset: endpoints mean the observation fell in a predictive tail, while values near one half mean it fell near the predictive center.

<a id="section-62-posterior-predictive-checks-for-hierarchical-models"></a>
## Posterior predictive checks for hierarchical models {#section-64-posterior-predictive-checks-for-hierarchical-models}

In hierarchical models, predictive checks should be performed at multiple levels. Group-level checks compare observed group means or variances to their posterior predictive distributions. Observation-level checks compare individual residuals to predictive residuals. A model may pass observation-level checks while failing group-level checks; investigate the population layer, observation model and group design, since finite checks do not identify a unique cause.

**Example.** A hierarchical model for student test scores may reproduce individual scores well but fail to predict the variance of school-level means. This suggests that the prior for school effects is too restrictive or that an important school-level predictor is omitted.


<a id="section-69-graphical-posterior-predictive-checks"></a>
## Graphical posterior predictive checks {#section-71-graphical-posterior-predictive-checks}

Visual comparisons between observed and replicated data often reveal discrepancies that numerical summaries miss:

- **Histograms:** Compare the distribution of $y$ to the distribution of $y_{\\mathrm{rep}}^{(s)}$ for several $s$. Systematic differences in shape, spread, or skewness indicate model misspecification.
- **Distribution and quantile plots:** Compare ordered observed values with
  ordered replicated values, or compare replicated summaries with the observed
  summary and its predictive interval. Raw pairs \\((y_i,y_{\\mathrm{rep},i})\\)
  are conditionally independent replications in many models and need not lie
  near the identity line. Reserve an identity-line check for a declared paired
  prediction target for which equality is actually expected.
- **Residual plots:** Plot residuals $y_{i} - \\mathbb{E}[y_{i} \\mid \\theta^{(s)}]$ against predictors. Patterns in the residuals suggest omitted structure.

Graphical checks are subjective but powerful. They should be used alongside numerical summaries, not as replacements.

<a id="section-84-sensitivity-of-predictive-checks-to-prior"></a>
## Sensitivity of predictive checks to prior {#section-86-sensitivity-of-predictive-checks-to-prior}

Posterior predictive checks depend on the posterior, which depends on the prior. A diffuse prior can produce a posterior predictive distribution that is too wide, masking discrepancies. An informative prior can produce a posterior predictive distribution that is too narrow, flagging discrepancies that are due to prior misspecification rather than likelihood misspecification.

The appropriate response is to perform predictive checks under multiple priors. If a discrepancy persists across priors, it is likely a genuine feature of the data that the likelihood fails to capture. If the discrepancy disappears under a different prior, the issue is prior sensitivity.

<a id="section-90-extended-exercise-discussion"></a>
## Prior predictive simulation {#section-101-prior-predictive-simulation}

Prior predictive simulation generates data from the prior predictive distribution before seeing any observations. It is a powerful tool for checking whether the model can produce plausible data.

**Procedure:**
1. Draw $\\theta^{(s)} \\sim \\pi(\\theta)$ for $s = 1, \\dots, S$.
2. Draw $y^{(s)} \\sim p(y \\mid \\theta^{(s)})$ for each $s$.
3. Compare the distribution of $y^{(s)}$ to domain knowledge.

If the prior predictive distribution places consequential mass on values that
violate a declared plausibility constraint, the joint prior-predictive model is
incompatible with that constraint. Diagnose the prior, likelihood/link, fixed
predictor design, and scale conventions before deciding which component to
change. For example, a regression model with $\\operatorname{Normal}(0,100^2)$
coefficient priors can generate extreme predictions under some predictor
scales, but the diagnosis depends on the link, units, and design as well as the
coefficient prior.

<a id="section-117-choosing-discrepancy-measures"></a>
## Choosing discrepancy measures {#section-119-choosing-discrepancy-measures}

The choice of discrepancy measure $T(y)$ should be guided by the scientific question:

- **For count data:** Check the proportion of zeros, the maximum count, and the variance-to-mean ratio.
- **For continuous data:** Check skewness, kurtosis, and tail behavior.
- **For regression:** Check residual patterns, heteroscedasticity, and influential points.
- **For time series:** Check autocorrelation, spectral density, and run lengths.
- **For spatial data:** Check variograms, cluster sizes, and boundary effects.

A good discrepancy measure is one that the model is expected to reproduce but might fail on. Measures that are trivially reproduced (e.g., the sample mean under a model with a location parameter) provide little diagnostic power.


<a id="section-130-bayesian-p-values-and-their-calibration"></a>
## Bayesian p-values and their calibration {#section-132-bayesian-p-values-and-their-calibration}

The posterior predictive p-value $p_{\\mathrm{post}}$ is the posterior probability that a replicated test statistic is at least as large as the observed statistic, following the declared upper-tail convention. These tail areas need not be uniformly distributed under the model; a frequentist uniform-p-value calibration cannot be assumed. Their distribution depends on the choice of test statistic, model and prior.

Posterior predictive p-values are generally conservative because the observed data help form both the posterior and the reference distribution. Large samples do not by themselves make them uniform. Extreme values can expose a discrepancy, but their magnitude should be interpreted through the observed and replicated statistics rather than through a frequentist uniform-p-value calibration.

<a id="section-136-sensitivity-to-test-statistic-choice"></a>
## Sensitivity to test statistic choice {#section-138-sensitivity-to-test-statistic-choice}

Different test statistics reveal different aspects of model fit. A model may pass checks for the mean and variance but fail checks for skewness or tail behavior. The choice of test statistics should be guided by the scientific question and by known limitations of the model.

**Example.** In a simple Poisson model, fitting the rate strongly constrains the replicated mean toward the observed mean, so the sample mean is often a weak posterior predictive diagnostic; it is not reproduced identically in every replication. The variance-to-mean ratio, proportion of zeros, or maximum count can expose failures hidden by that fitted location statistic.

<a id="section-142-iterative-model-improvement"></a>
## Iterative model improvement {#section-144-iterative-model-improvement}

Predictive criticism is not a one-time check but part of an iterative workflow:

1. Propose a model based on theory and domain knowledge.
2. Fit the model and check diagnostics.
3. Perform posterior predictive checks.
4. Identify discrepancies and propose model extensions.
5. Refit the extended model and repeat.

Each iteration should be documented, including the discrepancies found, the model changes made, and the checks performed. This documentation is essential for reproducibility and for communicating the modeling process to others.


<a id="section-155-posterior-predictive-p-values-in-practice"></a>
## Posterior predictive p-values in practice {#section-157-posterior-predictive-p-values-in-practice}

The posterior predictive p-value is computed as follows:

1. Choose a test statistic $T(y)$ relevant to the scientific question.
2. For each posterior draw $\\theta^{(s)}$, simulate $y_{\\mathrm{rep}}^{(s)} \\sim p(y \\mid \\theta^{(s)})$.
3. Compute $T(y_{\\mathrm{rep}}^{(s)})$ for each $s$.
4. Estimate $p_{\\mathrm{post}} = (1/S) \\sum_{s=1}^{S} \\mathbf{1}(T(y_{\\mathrm{rep}}^{(s)}) \\geq T(y))$.

A p-value near $0.5$ does not indicate a good model; it merely means the observed statistic is near the center of the predictive distribution. Extreme p-values (near $0$ or $1$) indicate discrepancies. The magnitude of the discrepancy is assessed by comparing $T(y)$ to the distribution of $T(y_{\\mathrm{rep}})$.

**Example: zero-inflated data.** Suppose we observe $30\\%$ zeros in count data. Under a fixed Poisson mean of $2$, the expected proportion of zeros is $e^{-2}\\approx0.135$. That expectation alone does not determine the upper-tail predictive probability: it also depends on the sample size, replication design, and, in a posterior predictive calculation, parameter uncertainty. For example, with ten independent fixed-rate counts and three zeros, the replicated zero count is $\\operatorname{Binomial}(10,e^{-2})$ and $\\Pr(Z\\ge3)\\approx0.143$, not near zero. Holding the observed proportion near $30\\%$ while increasing the independent sample size makes the fixed-rate upper tail small. Report the actual replicated design and simulated or exact tail probability before using the discrepancy to motivate a zero-inflated or hurdle model.

<a id="section-168-combining-multiple-discrepancy-measures"></a>
## Combining multiple discrepancy measures {#section-170-combining-multiple-discrepancy-measures}

No single discrepancy measure captures all aspects of model fit. A comprehensive predictive check uses multiple measures:

- Central tendency: mean, median.
- Spread: variance, interquartile range.
- Shape: skewness, kurtosis.
- Tails: maximum, minimum, proportion above threshold.
- Structure: autocorrelation, spatial correlation, group differences.

A model that passes some checks but fails others may miss features measured by the failed checks. A finite diagnostic result does not establish that the model is false; inspect the observations and replications before choosing an extension. For example, failing the variance check but passing the mean check suggests overdispersion; failing the autocorrelation check suggests omitted temporal structure.

<a id="section-180-common-errors"></a>
## Common errors {#section-182-common-errors}

- **Treating posterior predictive p-values as calibrated significance tests.** They quantify the declared posterior predictive tail event, but that numerical probability does not by itself have a frequentist significance-test calibration. Interpret it with the observed and replicated statistics and their model assumptions.
- **Checking only the mean.** A model can match the mean perfectly while failing on higher moments, tail behavior, or correlation structure. Choose test statistics that matter for the scientific question.
- **Ignoring the data pipeline.** If feature selection, standardization, or outlier removal used the full dataset, holdout evaluation is invalid. Document and account for every preprocessing step.
- **Using the same data for model checking and selection.** Data used to criticize a model should not be reused to select among models without proper cross-validation.

<a id="section-187-practice-exercises"></a>
## Specify the probability experiment before simulating {#section-212-specify-the-probability-experiment-before-simulating}

A predictive distribution is conditional on an information set. For fixed design x and observed data y, a proper prior and likelihood give
\\[
p(\\theta\\mid y,x)=
\\frac{p(y\\mid\\theta,x)\\pi(\\theta)}{\\int p(y\\mid\\vartheta,x)\\pi(\\vartheta)\\,d\\vartheta},
\\]
when the denominator is finite and positive. The prior predictive law integrates with pi; the posterior predictive law integrates with this fitted posterior. They answer questions before and after the same observations have been used.

For a future or replicated outcome Ynew, the model must also specify its relation to the observations given theta. Conditional independence is a modeling assumption, not a property of the word “replicate.” A time series may need an initial state and future covariates; a hierarchy may need either an existing group effect or a new group effect.

Under conditional independence and a declared design xnew,
\\[
p(y_{\\rm new}\\mid y,x,x_{\\rm new})
=\\int p(y_{\\rm new}\\mid\\theta,x_{\\rm new})p(\\theta\\mid y,x)\\,d\\theta.
\\]
A replicate of an entire dataset preserves its sample size, exposures, covariates, missingness protocol and dependence structure unless the predictive question explicitly changes them. Reproducing only the same number of scalar entries does not reproduce a clustered design.

Prior prediction is not “posterior prediction with a large variance.” Its mixing measure is different and it has not conditioned on the observed outcomes. Conversely, simulation at a fitted point estimate is a third experiment: it replaces the posterior measure by a point mass. That replacement can be useful for a declared approximation, but it must not be called posterior integration.

The validation unit travels with the distribution. Predicting another measurement from a known school differs from predicting an effect in a new school; predicting one future count differs from predicting a whole future vector sharing one unknown rate. A check can be correct for its declared unit and irrelevant to the proposed deployment.

A useful model card therefore states what is conditioned on, what is held fixed, what is newly drawn, and which part of the original data pipeline is repeated. These choices belong to the probability experiment before a tail area or graph is calculated.

<a id="section-234-posterior-integration-changes-both-variation-and-depend"></a>
## Posterior integration changes both variation and dependence {#section-236-posterior-integration-changes-both-variation-and-depend}

The law of total variance gives
\\[
\\operatorname{Var}(Y_{\\rm new}\\mid y)
=E[\\operatorname{Var}(Y_{\\rm new}\\mid\\theta,y)\\mid y]
+\\operatorname{Var}(E[Y_{\\rm new}\\mid\\theta,y]\\mid y).
\\]
The second term records parameter uncertainty. A plug-in predictive law usually omits it, although nonlinear changes in the first term can matter too. Matching a posterior mean does not generally match the predictive distribution.

For a whole replicated dataset, draw one theta from its posterior and then draw the dataset conditionally on that theta. Redrawing theta separately for each observation changes their joint law. It can preserve each marginal predictive distribution while destroying the dependence induced by a common uncertain parameter.

For example suppose a unit-exposure Poisson rate has posterior Gamma(shape2,rate1). Such a posterior arises from a proper Gamma(1,1/2) prior after one count observed over exposure one half. Its rate mean is two and rate variance is two. Each new count has predictive mean two and variance four.

For two future counts sharing that one rate, their predictive covariance is two. Their average therefore has variance three. If a different independent posterior rate were drawn for each count, the average variance would be two; at the plug-in rate two it would be one. These are three distinct experiments with the same marginal mean.

The covariance follows from conditional independence:
Cov(Y1,Y2|y)=Cov(E[Y1|lambda],E[Y2|lambda]|y)=Var(lambda|y).
The within-rate conditional covariance is zero, but integrating over an unknown common rate creates dependence. This is precisely the information lost by drawing a separate posterior rate for each entry of a supposedly common-rate replicate.

The same distinction appears in hierarchical predictions. Existing-group replications reuse that group's posterior effect. New-group replications draw a new effect conditional on the population parameters. Reusing an old effect in a new-group forecast can underestimate population variation, whereas redrawing it for repeated measurements of the same existing group changes the question.

For a nonlinear discrepancy T, E[T(Yrep)|y] is not generally T(E[Yrep|y]). A variance, maximum or proportion of zeroes depends on more than the predictive mean. Simulate the actual replicated object before calculating its discrepancy, or derive the distribution of that discrepancy explicitly.

<a id="section-258-define-discrepancies-and-tail-directions-without-losing"></a>
## Define discrepancies and tail directions without losing ties {#section-260-define-discrepancies-and-tail-directions-without-losing}

For a statistic T(y), this chapter uses the upper-tail event T(Yrep)≥T(y). A large observed discrepancy tends to give a small upper-tail probability. A probability near one instead means that most replications have discrepancies at least as large as the observed value; the observation can be unusually small for that feature.

Discrete statistics have ties. P(Trep≥Tobs) and P(Trep≤Tobs) add to one plus the probability of equality, not necessarily one. The strict lower-tail probability P(Trep<Tobs) is the complement of the inclusive upper tail. State which event was counted before describing one reported number as the opposite of another.

A parameter-dependent discrepancy D(y,theta) is also legitimate. For each posterior draw theta_s, compare D(Yrep_s,theta_s) with D(y,theta_s), using that same theta_s on both sides. Replacing the observed side by a discrepancy at a posterior point estimate defines a different tail event.

For example, a standardized residual sum can use the sampled latent group effects and known observation variances. Its observed value changes across posterior draws because those effects are uncertain. The resulting indicator still has a well-defined posterior-integrated expectation; it is not the tail probability for a single fixed observed number.

Choose discrepancies that can expose the failure relevant to the application. A fitted location parameter can make a mean check weak, while a maximum, zero proportion, residual pattern or between-group spread reveals something else. Weak does not mean that every replicate reproduces the observed mean exactly.

Statistical conventions also matter. Sample variance with divisor n−1 differs from the divisor-n second central moment. A variance-to-mean ratio is undefined when the replicated mean is zero. The count-data dossier therefore uses sample variance as a primary discrepancy and reports zero proportion and maximum separately, with every convention fixed.

Multiple discrepancies are a structured examination, not independent significance tests. They can be strongly correlated, and choosing one after looking at the data changes the interpretation. Report why each feature was chosen and inspect its magnitude and replicated distribution, rather than selecting only the most dramatic tail probability.

<a id="section-274-derive-a-conjugate-predictive-law-and-its-joint-counter"></a>
## Derive a conjugate predictive law and its joint counterpart {#section-276-derive-a-conjugate-predictive-law-and-its-joint-counter}

Take n unit-exposure counts conditionally independent Poisson(lambda), with proper Gamma(shape a0,rate b0) prior, a0,b0>0. The posterior parameters are a=a0+sum(y_i) and b=b0+n. Both rate and exposure units must be consistent with that rate parameterization; a software Gamma scale is 1/b, not b.

Integrating one future Poisson probability against the Gamma density gives
\\[
P(Y_{\\rm new}=k\\mid y)
=\\frac{\\Gamma(a+k)}{\\Gamma(a)k!}
\\left(\\frac b{b+1}\\right)^a
\\left(\\frac1{b+1}\\right)^k,\\qquad k=0,1,\\ldots.
\\]
The Gamma integral supplies the numerator and denominator powers directly. Normalization also follows because it is a mixture of proper Poisson laws. The predictive mean is a/b and its variance is a/b+a/b².

For a replicated vector k_1,...,k_m with total K, the same calculation gives
\\[
p(k_1,\\ldots,k_m\\mid y)=
\\frac{\\Gamma(a+K)}{\\Gamma(a)\\prod_i k_i!}
\\frac{b^a}{(b+m)^{a+K}}.
\\]
The denominator uses b+m because all m conditional likelihood factors share one rate. Summing over vectors of a fixed total gives a Negative-Binomial total with shape a and success probability b/(b+m).

The replicated average has variance a/(bm)+a/b². Plugging in lambda=a/b removes the second term. Drawing independent posterior rates for all m observations would instead give (a/b+a/b²)/m. The joint predictive model, not just its one-dimensional marginal, determines which formula applies.

There is a subtle difference between a single new count's variance and a replicated sample variance. For an integer $m\\ge2$, conditional on lambda the ordinary divisor-(m−1) sample variance is unbiased for lambda. Its posterior-predictive expectation is therefore a/b, rather than a/b+a/b². The extra uncertainty in a common rate moves the whole replicated dataset together and cancels out of its within-replicate centering.

This explains why one must not compare an observed within-sample variance directly with the marginal predictive variance and call that a complete check. The distribution of the actual sample-variance statistic, obtained under the full replication design, is the relevant reference.

The public forty-count example uses posterior-integrated draws of this shared rate. Its reported tail indicator is based on the entire replicated forty-vector and the same sample-variance definition as the observation. A numerical result at a fitted fixed rate, even if close, would be an unrecorded change of experiment.

<a id="section-303-prior-checks-diagnose-a-joint-model-in-stated-units"></a>
## Prior checks diagnose a joint model in stated units {#section-305-prior-checks-diagnose-a-joint-model-in-stated-units}

A prior predictive distribution depends on the prior, likelihood, link and fixed design. A surprising simulated outcome can be caused by any combination of those choices. Diagnosing the prior alone without checking the rest of the generative story is an attribution error.

For a regression coefficient beta with Normal(0,s²) prior, the linear predictor x beta has variance x²s² when x is fixed. Multiplying a predictor's units by one hundred while leaving the coefficient prior unchanged multiplies that contribution to variance by ten thousand. A prior that looked moderate in one design can become extreme in another without changing its printed numerical scale.

The link also changes what “extreme” means. In Gaussian regression a broad linear predictor can generate very large real outcomes. With a logistic link the probabilities stay in [0,1], but the same broad predictor can put most mass near zero or one. With a Poisson log link, Normal predictor variance v gives a prior mean rate exp(v/2) when its mean is zero. Calling all three situations simply “diffuse coefficients” hides different predictive consequences.

Declare a plausibility constraint before using its violation as evidence. A bound on a count, a population proportion, a school effect in score units and a measured response range are not interchangeable. A threshold selected after seeing simulations can still guide exploration, but its origin must be documented.

Proper priors ensure that the generative mixing distribution exists; they do not ensure finite moments or realistic predictions. A proper mixture can have an infinite predictive mean. Conversely a prior that gives low probability to one observed unusual value need not be incompatible with all relevant background information.

Before changing a component, trace the simulated outlier backward through the generative graph. Was it driven by a population-scale draw, one group effect, an observation-noise draw, an exposure or a transformation? Conditional summaries can localize the mechanism more effectively than replacing every broad prior at once.

Posterior fitting can hide prior-predictive conflicts because observations concentrate the posterior into a smaller region. That is one reason to examine prior predictions before outcomes and posterior replications after fitting. These checks complement each other; neither is a substitute for a genuinely held-out performance estimate.

<a id="section-319-sensitivity-and-a-fitted-overdispersed-alternative-are-"></a>
## Sensitivity and a fitted overdispersed alternative are separate changes {#section-321-sensitivity-and-a-fitted-overdispersed-alternative-are-}

A proper-prior sensitivity run keeps the likelihood fixed and changes the prior under an explicitly stated rationale. The posterior and every predictive reference are then recomputed. Copying an old posterior draw array while relabeling the prior is not a sensitivity analysis.

Changing both the prior mean and concentration should be described as two changes, not as a pure test of prior strength. In the count dossier, a Gamma(20,10) alternative expresses a hypothetical more concentrated rate belief centered at two, compared with the Gamma(1,1) primary prior. It is a transparent sensitivity scenario, not a claim that background knowledge uniquely selects that prior.

An overdispersed likelihood is another model. One tractable option fixes r>0 and uses
\\[
p(y_i\\mid p,r)=\\frac{\\Gamma(y_i+r)}{\\Gamma(r)y_i!}
p^r(1-p)^{y_i},\\quad y_i\\ge0,\\quad0<p<1.
\\]
Its conditional mean is r(1−p)/p and its variance is r(1−p)/p², larger than the mean. For integer r this is the Negative-Binomial waiting-time convention counting failures before r successes; the Gamma-function mass also defines positive real shapes.

With a proper Beta(a0,b0) prior on p and fixed r, the posterior is Beta(a0+nr,b0+sum y_i). The normalizing combinatorial factors do not depend on p. Posterior predictive simulation draws one p per replicated dataset, then all conditional counts with that p. It remains a fitted Bayesian model with its own likelihood, prior, support and replication design.

For r=2 and prior Beta(3,3), the prior-predictive mean count is three, not two: E[(1−p)/p]=b0/(a0−1). A function of a prior mean is not generally the prior mean of that function. The prior is proper and has finite first and second predictive moments here; choosing a different Beta shape can lose those moments despite retaining a proper distribution.

The Negative-Binomial model also has a latent-rate interpretation: conditional on p, draw independent Gamma(shape r,rate p/(1−p)) rates for the observations, then Poisson counts. This creates extra observation-to-observation rate variation, unlike the primary common-rate Poisson model. It is a structural change in the data-generating story.

A new fitted model is not accepted merely because one PPC tail area becomes less extreme. Inspect its other discrepancies, prior predictions, scientific interpretation and held-out behavior. Changing the model to optimize a tail area toward one half is not a calibrated model-selection procedure. The public alternative remains an explicitly fitted reference to criticize, rather than an already demonstrated remedy.

<a id="section-340-prove-the-conditional-pit-claim-before-using-a-histogra"></a>
## Prove the conditional PIT claim before using a histogram {#section-342-prove-the-conditional-pit-claim-before-using-a-histogra}

Let H denote the information genuinely available when a forecast is issued, and let F_H be its conditional CDF. The calibration assumption is Y|H distributed according to F_H. For a continuous CDF, the probability-integral transform U=F_H(Y) is conditionally Uniform(0,1). A quantile argument proves the claim: continuity lets the probability below the u-quantile equal u, including CDFs with flat intervals carrying no probability.

Conditioning is essential. A fitted distribution that used the evaluated outcome is not automatically the conditional law of a newly generated copy of that outcome. “The likelihood family is correct” is also weaker than the assertion that the entire fitted forecast is the correct finite-sample conditional law.

For a count distribution write p_k=P(Y=k|H), a_k=F_H(k−1) and b_k=F_H(k). With V independent Uniform(0,1), set U=a_Y+V p_Y. Conditional on Y=k, U is uniform on that outcome's CDF interval. Its conditional density there is 1/p_k; multiplying by the outcome probability p_k gives density one. The intervals tile [0,1] up to endpoints, proving a uniform mixture.

Zero-mass outcomes are never generated and add nothing to that calculation. Strict versus inclusive CDF endpoints and the independent randomizer must still be implemented consistently. For Poisson counts the left endpoint is F(k−1), with F(−1)=0 at k=0.

Uniform marginal PIT values do not imply independence. A pair U2=U1 can have two uniform marginals and perfect dependence. In a sequence, independent-uniform behavior follows under the stronger protocol that each conditional predictive law is correct given an information set containing the relevant past, with independent new randomizers. Iterated conditioning then gives the product-uniform joint law.

Shared latent effects, serial correlation or overlapping fitting folds can make forecast cases dependent. An iid Kolmogorov-Smirnov reference distribution does not become appropriate merely because the PIT formula was randomized. Account for the dependence or use a suitably defined forecast-evaluation protocol.

The public known-rate control generates 30,000 independent Poisson(2) observations and independent randomizers. In that experiment the CDF is known before observing each count, and no parameter is fitted. It is intentionally separate from the forty observed counts used to fit a posterior, and separate from the fitted hierarchy. Passing this synthetic control verifies a finite implementation against a declared calibration experiment, not the calibration of those fitted analyses.

<a id="section-356-a-correct-fitted-model-can-have-nonuniform-in-sample-pi"></a>
## A correct fitted model can have nonuniform in-sample PIT {#section-358-a-correct-fitted-model-can-have-nonuniform-in-sample-pi}

Consider the completely specified Bayesian joint experiment
theta~Normal(0,9), Y|theta~Normal(theta,1).
The posterior after one observation y is Normal(0.9y,0.9). A future independent measurement given theta has posterior predictive distribution Normal(0.9y,1.9).

For a genuinely new measurement from that joint model, applying its conditional predictive CDF gives a uniform PIT conditional on y. Now instead evaluate the fitted CDF at the same y used for fitting:
\\[
U_{\\rm in}(Y)=\\Phi\\left(\\frac{0.1Y}{\\sqrt{1.9}}\\right).
\\]
Under the prior-predictive experiment Y~Normal(0,10), the argument of Phi is Normal with variance 1/19, not one. Thus this in-sample PIT is concentrated near one half even though the prior and likelihood exactly generated the data.

This is an exact counterexample to importing a forecasting-uniformity theorem into an in-sample check. It uses a proper prior; the result is not caused by an improper flat-prior limit. The observation helped locate the fitted reference distribution before it was compared with itself.

A fixed-parameter frequentist repetition is yet another experiment. If theta is held at a particular unknown constant rather than drawn from the declared prior, the finite-sample Bayesian predictive law need not equal that experiment's conditional sampling law. State the probability model under which a calibration claim is made.

The familiar PIT shapes can also be derived rather than memorized. If Y is standard Normal but a forecast uses Normal(mu,sigma²), then
\\[
P(U\\le u)=\\Phi\\{\\mu+\\sigma\\Phi^{-1}(u)\\}.
\\]
With mu=0, its density on the unit interval is
$\\sigma\\exp\\{(1-\\sigma^2)(\\Phi^{-1}(u))^2/2\\}$.
A predictive scale sigma<1 puts excess mass near the endpoints; sigma>1 concentrates the PIT near the center. A location shift makes the two sides asymmetric.

These formulas assume the stated Normal data-generating law and fixed forecast. Other mixtures of errors can produce similar histograms, and finite histograms fluctuate. A U-shape is a diagnostic clue about dispersion under a declared protocol, not a uniquely identified cause or a proof of model falsity.

<a id="section-382-data-reuse-changes-the-reference-distribution"></a>
## Data reuse changes the reference distribution {#section-384-data-reuse-changes-the-reference-distribution}

For a statistic T(y), the posterior predictive tail area is a function of the observed data:
\\[
p_{\\rm post}(y)=\\int
P_\\theta\\{T(Y_{\\rm rep})\\ge T(y)\\}\\,p(\\theta\\mid y)\\,d\\theta.
\\]
The same y sets the threshold and helps select the mixing distribution. There is no general reason for this random function of Y to be uniform under repetitions.

In the preceding one-observation Normal example, the upper-tail area for T(y)=y is one minus the in-sample PIT. Its distribution is therefore concentrated near one half. A correct model can produce systematically central posterior predictive tail areas. Large samples alone do not turn every such discrepancy into a calibrated frequentist p-value.

For a discrete statistic, atoms create another obstacle to uniformity even without parameter fitting. An inclusive upper-tail probability is generally superuniform in appropriate exact-test settings, not exactly uniform. Randomizing within a probability mass can create a uniform transform under the declared model, but a randomized test and a posterior-integrated fitted check still have different conditioning.

A value near one half consequently gives little global evidence of fit. It describes one statistic's location relative to one fitted replication distribution. Conversely an extreme finite value asks for inspection of that discrepancy and the data-generating assumptions; it does not logically force a unique new likelihood.

Model revision using training data is a normal part of exploratory analysis. The boundary is what is claimed afterward. Documenting a changed model and its in-sample checks is different from asserting untouched predictive performance. A final validation protocol should account for every preprocessing, feature-selection and model-selection step that used outcomes.

A model can be useful despite a known discrepancy for one purpose, and inadequate for another. Decide whether the missed feature affects the intended inference or decision. Tail behavior irrelevant to an average-cost calculation may be decisive for an extreme-risk decision. Predictive criticism becomes more informative when its discrepancy is connected to a use rather than to a universal pass/fail label.

<a id="section-401-choose-existing-group-and-new-group-replications-explic"></a>
## Choose existing-group and new-group replications explicitly {#section-403-choose-existing-group-and-new-group-replications-explic}

The shared eight-schools fixture models reported effect estimates:
\\[
y_j\\mid\\theta_j\\sim N(\\theta_j,\\sigma_j^2),\\quad
\\theta_j\\mid\\mu,\\tau\\sim N(\\mu,\\tau^2),
\\]
with the exact eight y_j and known standard errors declared in Chapter 3, mu~Normal(0,20²), and tau~HalfNormal(scale10). It contains one reported estimate per school. These are not individual pupil scores.

The upstream public sampler obtains independent collapsed-posterior (mu,tau) draws by a prior-envelope rejection scheme, then draws all eight theta_j from their exact conditional Normal distributions. The public predictive consumer is defined to take that producer's output under the exact declared protocol, with its provenance bound by the root execution record; it neither substitutes a different hierarchy nor labels the independent draws as a fitted NUTS run.

For another measurement of the same eight underlying effects, retain each posterior theta_j and simulate $y^{\\rm rep}_j=\\theta_j+\\sigma_j\\epsilon_j$. A parameter-dependent observation-level discrepancy is
$D(y,\\theta)=\\sum_j((y_j-\\theta_j)/\\sigma_j)^2$.
Use the same posterior theta vector on the observed and replicated sides.

Conditional on theta, the replicated standardized residuals are eight independent standard Normals, so Drep has a chi-squared distribution with eight degrees of freedom. Its mean is exactly eight. This supplies an analytic check of the replication code and a conditional tail probability chi2_8.sf(Dobs), which can be averaged to obtain a Rao-Blackwellized posterior tail estimate.

For eight new exchangeable schools measured with the same declared standard-error design, draw new effects theta_new,j=mu+tau z_j, then new reported estimates with those effects and the fixed sigma_j. This evaluates the population layer instead of reusing the fitted effects. The posterior uncertainty in mu and tau still travels jointly into every replicated vector.

Take the between-school statistic to be the divisor-seven sample variance of the eight reported estimates. Conditional on mu,tau its expectation is tau² plus the average sigma_j². In this fixture sum(sigma_j²)=1328, so that expectation is tau²+166. Heterogeneous measurement noise contributes to observed spread; the statistic is not a direct estimate of population tau² alone.

For the literal observed estimates, sum(y_j)=70 and sum(y_j²)=1376, giving sample variance 1527/14. These are hand-derived references, not a simulated tail area. The actual consumer reports the posterior-integrated upper-tail frequency and the replication-mean check against tau²+166 after execution.

An individual-pupil residual workflow needs additional information: actual within-school observations, their likelihood and design, within-school noise scales and any treatment/control structure. The eight standard errors do not recover that information. The original individual-level part of CBM-CLAIM-036 therefore remains an explicit sourced template, alongside the supplied reported-estimate and new-group checks. Summary-level replication does not silently discharge a pupil-level obligation.

<a id="section-426-quantify-simulation-uncertainty-even-when-no-replicatio"></a>
## Quantify simulation uncertainty even when no replication exceeds {#section-428-quantify-simulation-uncertainty-even-when-no-replicatio}

For fixed observed data and independent posterior draws, each complete posterior-predictive replication produces an independent Bernoulli indicator of the declared tail event. If K of S indicators equal one, K~Binomial(S,p_post). This reasoning requires independent replications from the intended posterior experiment, not merely S stored rows.

A nonzero estimate K/S has a familiar plug-in standard error sqrt(phat(1−phat)/S), but that approximation can misbehave near the boundary. Exact binomial inversion gives a more informative interval for rare events. It quantifies numerical uncertainty about a fixed model's tail probability; it is not a posterior credible interval for a scientific parameter.

With zero exceedances, the probability of that event at a proposed p is (1−p)^S. A one-sided 95-percent upper confidence limit therefore solves (1−p)^S=0.05:
\\[
p_{\\rm upper}=1-0.05^{1/S}.
\\]
For S=30,000 it is approximately one in ten thousand, not zero. Reporting “zero of 30,000” retains the actual numerical evidence; reporting “the probability is zero” adds a conclusion the simulation did not establish.

Zero observed events also make the plug-in standard error zero. That is a failure of the local approximation, not exact knowledge. Report the event count, replication count, confidence construction and tail direction together. A parameter-dependent discrepancy still produces a Bernoulli event after the posterior draw and both discrepancy evaluations are specified.

Correlated posterior draws change the error calculation. Fresh independent Yrep noise at every MCMC draw does not remove correlation transmitted through theta. If q(theta)=P(Trep≥Tobs|theta), conditional independence of replicate noise makes correlations between different indicators depend on correlations of q(theta_t). The relevant long-run error belongs to this tail estimator, not automatically to a raw parameter's ESS.

More replications per posterior draw reduce conditional simulation noise, while leaving the posterior chain's low-frequency error. Under suitable stationary conditions, averaging R conditional replicates per theta changes the innovation contribution from E[q(1−q)] to E[q(1−q)]/R; the long-run covariance of q remains. When q is available analytically, averaging q itself removes that conditional noise.

The hierarchy residual check provides such a conditional reference through the chi-squared tail. Its independent accepted posterior draws permit ordinary Monte Carlo comparisons of the indicator and conditional-probability averages. Agreement within a declared Monte Carlo tolerance checks the implementation of the experiment; it does not make a central fitted PPC into a calibration certificate.

<a id="section-446-make-criticism-feed-a-documented-modeling-decision"></a>
## Make criticism feed a documented modeling decision {#section-448-make-criticism-feed-a-documented-modeling-decision}

A useful discrepancy record contains the observed statistic, the predictive replication design, the actual replicated distribution or summaries, the tail event, numerical uncertainty and a scientific interpretation. The model name and one tail probability are not enough to reproduce it.

For the count dossier, inspect the observed zero count, variance and maximum against each fitted model's replications. Compare the two proper Poisson priors to see how parameter uncertainty changes the result; compare the separately fitted Negative-Binomial model to see what an explicit observation-level dispersion mechanism changes. Do not attribute either comparison to an unexecuted generic replacement.

For the hierarchy, separate repeated measurements of known effects from new schools and individual-pupil predictions. A model could reproduce measurement-level residuals yet miss population spread, or do the reverse. Its adequacy should be described for each declared target and design.

If a discrepancy disappears under a prior change, examine which posterior feature moved and why that prior is plausible. If it persists across sensible priors, the likelihood or design may warrant attention. Persistence is useful diagnostic evidence, not a theorem that only one component can be responsible.

A sensitivity analysis chosen after seeing the result remains informative if labeled exploratory. Reusing the same data repeatedly while calling each new comparison an untouched external validation would be misleading. Where predictive performance is the goal, carry the entire modeling pipeline into the held-out or cross-validation procedure discussed next.

The workflow closes with an explicit claim boundary: describe what was learned about the declared data, model and replication target; record what has actually been computed; retain missing inputs or imported methods as such. A reproducible simulation improves the evidence available for criticism. It does not turn a finite check into a proof that a model will generalize to every future setting.

<a id="section-460-solutions-forty-count-predictive-dossier"></a>
## Hierarchical predictive scope and evidence contract {#section-914-hierarchical-predictive-scope-and-evidence-contract}

The exact original CBM-CLAIM-036 locator is predictive-criticism.md:73. The following source dispositions preserve its interpretation.

| Part of the workflow | Supplied source reference | Evidence boundary |
| --- | --- | --- |
| Reported-estimate observation level | Existing-effect measurement replicates with standardized residual discrepancy and analytic chi-squared reference | Requires actual upstream posterior and consumer runs |
| Population/new-group level | New effects and new reported estimates with the same known-SE design; variance reference tau²+166 | A fitted posterior PPC, not held-out calibration |
| Individual-pupil/raw-score level | Explicit template below | Missing raw data/design are not inferred from eight summaries |
| Production hierarchy HMC diagnostics | Chapter7 production diagnostic template | Rejection draws supply no NUTS tree/divergence record |

To instantiate an individual-level template, provide actual within-school observations, group membership, the measurement or treatment/control likelihood, predictors/design, within-group scales and complete proper priors. Fit that declared model; simulate replicated individual outcomes conditional on existing group effects, and new group effects when that is the target; compare residual and group discrepancies under the actual observation units. None of these missing inputs is reconstructed from a reported effect and its standard error.

Thus the supplied measurement/new-group consumer remains a real implementation obligation, while the unavailable raw-score part is explicitly template_scope. Neither is silently substituted for the other, and no current execution or whole-book readiness follows from this table alone.

<a id="section-927-exercises-predictive-experiment-extensions"></a>

## Summary

<a id="section-209-looking-backward-and-forward"></a>
This chapter used predictive checks to evaluate model fit beyond parameter estimation. The next chapter, *Model Comparison and Decision Boundaries*, shows how to compare multiple models and how to choose actions that minimize posterior expected loss.
<a id="section-210-specify-the-probability-experiment-before-simulating"></a>

## Exercises {#section-189-practice-exercises}

<a id="section-189-exercise-1"></a>
### Exercise 1 {#section-191-exercise-1}

A linear regression model with normal errors shows a posterior predictive p-value of $0.02$ for the maximum absolute residual. What does this imply, and what is the appropriate response?

**Solution.** The observed maximum residual lies unusually far in the upper tail of this fitted posterior predictive distribution. That suggests possible tail underestimation or omitted structure, but one finite tail event does not establish that the model is false, and a posterior predictive tail area is a diagnostic rather than a calibrated hypothesis-test p-value. Inspect the replications and high-residual observations, check data quality, and compare declared alternatives such as heavy-tailed errors or relevant omitted predictors. Do not simply remove observations without investigation.

<a id="section-195-exercise-2"></a>
### Exercise 2 {#section-197-exercise-2}

Explain why a model with a posterior predictive p-value of $0.5$ for every test statistic is not necessarily a good model.

**Solution.** A p-value of $0.5$ means the observed statistic is near the median of the predictive distribution. This could happen because the model is well-specified, but it could also happen because the model is so flexible that it overfits, reproducing every feature of the data including noise. Predictive checks must be supplemented with held-out evaluation and sensitivity analysis.

<a id="section-201-exercise-3"></a>
### Exercise 3 {#section-203-exercise-3}

A researcher standardizes all predictors using the full dataset mean and variance, then performs 10-fold cross-validation on the standardized data. What is wrong with this procedure?

**Solution.** The standardization used information from the holdout folds, contaminating the validation. The correct procedure is to compute means and variances within each training fold and apply them to the corresponding validation fold. For nested cross-validation, standardization parameters must be re-estimated within each inner loop.

<a id="section-207-looking-backward-and-forward"></a>

<a id="section-92-extended-exercise-discussion"></a>
<a id="section-92-exercise-4-discussion"></a>
### Exercise 4 (Discussion) {#section-94-exercise-4-discussion}

A researcher fits a normal linear model and observes that the posterior predictive p-value for the maximum observation is $0.99$. They conclude that the model is excellent because it predicts extreme values well. What is wrong with this reasoning?

**Solution.** Under the chapter's upper-tail convention, a value of $0.99$ means $99\\%$ of replicated maxima are at least as large as the observed maximum. The observed maximum is unusually small relative to the replications, so the fitted predictive distribution may be too heavy-tailed or too dispersed for this statistic. A value near $0.01$ would diagnose an unusually large observed maximum and possible tail underestimation. In either direction, inspect the replicated distribution before choosing a model repair.


<a id="section-99-prior-predictive-simulation"></a>

<a id="section-929-exercises-predictive-experiment-extensions"></a>
### Exercise 5 — CBM-08-E5. One posterior rate or five posterior rates {#section-933-cbm-08-e5-one-posterior-rate-or-five-posterior-rates}

Suppose a proper analysis gives lambda|y~Gamma(shape3,rate2). For five future unit-exposure Poisson counts, compute the variance of their average when they share one posterior rate. Compare independent posterior-rate redraws for every count and the fixed-rate plug-in at the posterior mean. Explain why matching the predictive mean does not make the three experiments equivalent.

<a id="section-935-cbm-08-e6-which-replication-count-supports-binomial-err"></a>
### Exercise 6 — CBM-08-E6. Which replication count supports binomial error? {#section-937-cbm-08-e6-which-replication-count-supports-binomial-err}

Compare two algorithms for a posterior tail event with conditional probability q(theta). AlgorithmA draws an independent posterior theta for every replicate. AlgorithmB draws theta once and reuses it for all S conditionally independent replicates. Derive the variance of AlgorithmB's average and explain whether a zero-exceedance binomial upper bound targets the posterior-integrated tail probability there.

<a id="section-939-solutions-predictive-experiment-extensions"></a>

## Solutions: Forty-count predictive dossier {#section-462-solutions-forty-count-predictive-dossier}

This is the public COMM06-CASE-03 reference. It instantiates the original Poisson-check objective with forty fixed unit-exposure observations. The literal data are printed in the executable listing; their frequency certificate is:

| count | 0 | 1 | 2 | 3 | 4 | 8 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| frequency | 12 | 8 | 6 | 5 | 4 | 3 | 2 |

There are forty entries, sum 99 and sum of squares 621. The observed mean is 99/40, the divisor39 sample variance is 5013/520, the zero count is 12 and the maximum is 12. This concrete data has variance-to-mean ratio 557/143; it is a specified case, not an assertion that the original illustrative “twice the mean” description printed this same dataset.

The primary model is conditionally iid Poisson(lambda), lambda>0, with proper Gamma(shape1,rate1) prior. Its posterior is Gamma(100,41). Each of 30,000 independent replications first draws one posterior rate and then forty conditionally independent counts sharing that rate.

The primary discrepancy is the inclusive upper tail of sample variance. To preserve ties exactly, the implementation compares the integer quantity 40 sum(yrep_i²)−sum(yrep_i)² with 15039. Both variance denominators are 40 times 39. It also reports upper tails for zero count at least 12 and maximum at least12; these are separate features, not independent tests.

The proper-prior sensitivity model keeps the same likelihood but uses Gamma(20,10), giving posterior Gamma(119,50). This hypothetical prior is both more concentrated and centered differently; the report does not label it a pure concentration change or a uniquely justified domain prior. It receives its own independent 30,000-replication stream.

The separately fitted alternative is Negative-Binomial with fixed r=2 and success parameter p, proper Beta(3,3) prior and posterior Beta(83,102). It also receives 30,000 complete posterior-integrated replications. Its likelihood convention, support and posterior are derived above. No generic Negative-Binomial replacement is credited with a result before this actual program is run, and r=2 is a declared reference choice rather than a fitted optimal dispersion.

All three models use the same observed sample-variance, zero-count and maximum definitions. For every event the output includes exceedance count, replication count, estimate and binomial simulation-error bounds. If no replication exceeds, the one-sided 95-percent upper limit is 1−0.05^(1/30000); neither a zero probability nor a zero-error claim is made.

The known-rate Poisson(2) randomized-PIT experiment is separate. It generates 30,000 new observations and randomizers from its stated seed, with no posterior fit. Its uniform moment references and finite KS regression tolerances check that synthetic forecasting protocol, not the calibration of the fitted forty-count posterior.

<a id="section-482-descriptive-count-case-rubric"></a>
### Descriptive count-case rubric {#section-484-descriptive-count-case-rubric}

Preserve all forty observations, unit exposures, rate-versus-scale conventions, priors, posterior parameters, support and the shared-parameter replication design. Compare the integer discrepancy before converting it to a displayed variance. Report every actual event count, including zeroes, and identify the independent-replication assumption behind its numerical uncertainty.

Check analytic predictive means, expected within-replicate variances and zero fractions against Monte Carlo estimates with their reported independent-draw MCSEs. A difference of several MCSEs asks for investigation; the reporting rule is not a theorem that a random finite run must pass. Keep prior sensitivity separate from the fitted likelihood alternative.

Inspect residual discrepancies in the alternative too. Do not rank models by closeness of a PPC tail area to one half, claim an improvement was observed before execution, or turn the known-rate PIT control into fitted-model calibration. Any claim about external predictive performance needs its own validation protocol.

<a id="section-490-solutions-posterior-predictive-count-listing"></a>

## Solutions: Posterior predictive count listing {#section-492-solutions-posterior-predictive-count-listing}

This no-input program uses the exact pinned existing Python/NumPy/SciPy environment and prints one bounded canonical JSON report. The primary and known-rate seeds preserve the declared historical design, but no historical output is reused as current execution evidence. The prior and likelihood alternatives have independent declared streams. Array shapes are fixed; an integer-safety violation aborts rather than clipping a generated count.

\`\`\`python
import hashlib
import json
import math
import platform
import numpy as np
import scipy
from scipy import stats

DEPENDENCIES = {"python": "3.14.7", "numpy": "2.5.2", "scipy": "1.18.1"}
DATA = [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,
        2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,8,8,8,12,12]
REPLICATIONS = 30_000
PRIMARY_SEED = 20260966
PIT_SEED = 20260967
PRIOR_ALTERNATIVE_SEED = 2026110483
NB_ALTERNATIVE_SEED = 2026110484


def require(ok: bool, message: str) -> None:
    if not ok:
        raise ValueError(message)


def dependencies() -> dict[str, str]:
    return {"python": platform.python_version(),
            "numpy": np.__version__, "scipy": scipy.__version__}


def canonical_hash(value: object) -> str:
    raw = json.dumps(value, ensure_ascii=False, sort_keys=True,
                     separators=(",", ":"), allow_nan=False).encode()
    return hashlib.sha256(raw).hexdigest()


def bernoulli_report(successes: int, total: int) -> dict[str, object]:
    require(type(successes) is int and type(total) is int and 0 <= successes <= total
            and total > 0, "invalid independent-replication counts")
    estimate = successes / total
    lower = 0.0 if successes == 0 else float(stats.beta.ppf(
        .025, successes, total - successes + 1))
    upper = 1.0 if successes == total else float(stats.beta.ppf(
        .975, successes + 1, total - successes))
    one_sided = 1.0 if successes == total else float(stats.beta.ppf(
        .95, successes + 1, total - successes))
    if successes == 0:
        upper = -math.expm1(math.log(.025) / total)
        one_sided = -math.expm1(math.log(.05) / total)
    return {"exceedances": successes, "replications": total, "estimate": estimate,
            "independent_binomial_95_interval": [lower, upper],
            "one_sided_95_upper": one_sided,
            "plugin_MCSE": None if successes in (0, total) else math.sqrt(
                estimate * (1 - estimate) / total),
            "boundary_note": "Zero observed events is not zero probability; intervals concern simulation error."}


def mean_reference(values: np.ndarray, reference: float) -> dict[str, object]:
    estimate = float(np.mean(values))
    mcse = float(np.std(values, ddof=1) / math.sqrt(values.size))
    return {"estimate": estimate, "reference": reference, "IID_MCSE": mcse,
            "standardized_error": None if mcse <= 0 else (estimate - reference) / mcse}


def summarize_replicates(name: str, replicated: np.ndarray,
                         expected_mean: float, expected_within_variance: float,
                         expected_zero_fraction: float) -> dict[str, object]:
    require(replicated.shape == (REPLICATIONS, 40)
            and np.issubdtype(replicated.dtype, np.integer)
            and np.all(replicated >= 0) and np.max(replicated) <= 1_000_000,
            "replicated counts exceed declared shape/integer-safety range; do not clip")
    replicated = replicated.astype(np.int64, copy=False)
    sums = np.sum(replicated, axis=1, dtype=np.int64)
    squares = np.sum(replicated * replicated, axis=1, dtype=np.int64)
    variance_numerator = 40 * squares - sums * sums
    variances = variance_numerator / (40 * 39)
    zero_counts = np.sum(replicated == 0, axis=1)
    maxima = np.max(replicated, axis=1)
    events = {
        "sample_variance_upper_inclusive": variance_numerator >= 15039,
        "zero_count_upper_inclusive": zero_counts >= 12,
        "maximum_upper_inclusive": maxima >= 12,
    }
    return {"model": name,
            "tail_events": {key: bernoulli_report(int(np.sum(event)), REPLICATIONS)
                            for key, event in events.items()},
            "replicated_mean": mean_reference(sums / 40, expected_mean),
            "replicated_sample_variance": mean_reference(variances, expected_within_variance),
            "replicated_zero_fraction": mean_reference(zero_counts / 40, expected_zero_fraction),
            "observed_references": {"n": 40, "sum": 99, "sum_squares": 621,
                                    "sample_variance": 5013/520, "variance_numerator": 15039,
                                    "zero_count": 12, "maximum": 12},
            "replication_unit": "one whole40-vector with one posterior parameter draw shared by its40 entries"}


def poisson_fit(prior_shape: float, prior_rate: float, seed: int) -> dict[str, object]:
    shape = prior_shape + 99
    rate = prior_rate + 40
    rng = np.random.Generator(np.random.PCG64(seed))
    latent = rng.gamma(shape, 1 / rate, size=REPLICATIONS)
    require(np.isfinite(latent).all() and np.all(latent > 0), "invalid Gamma rate draw")
    replicated = rng.poisson(latent[:, None], size=(REPLICATIONS, 40))
    name = f"Poisson_Gamma_shape{prior_shape:g}_rate{prior_rate:g}"
    result = summarize_replicates(
        name, replicated, shape/rate, shape/rate, (rate/(rate+1))**shape)
    result.update({
        "prior": {"family": "Gamma", "shape": prior_shape, "rate": prior_rate},
        "posterior": {"family": "Gamma", "shape": shape, "rate": rate},
        "seed": seed, "posterior_rate_mean": mean_reference(latent, shape/rate),
        "posterior_rate_variance_reference": shape/rate**2,
        "no_MCMC_warmup": True,
    })
    return result


def negative_binomial_fit() -> dict[str, object]:
    r, prior_a, prior_b = 2, 3, 3
    a, b = prior_a + 40*r, prior_b + 99
    rng = np.random.Generator(np.random.PCG64(NB_ALTERNATIVE_SEED))
    probability = rng.beta(a, b, size=REPLICATIONS)
    require(np.isfinite(probability).all() and np.all((probability > 0) & (probability < 1)),
            "invalid Beta probability draw")
    replicated = rng.negative_binomial(r, probability[:, None],
                                       size=(REPLICATIONS, 40))
    inverse_p = (a+b-1)/(a-1)
    inverse_p_squared = (a+b-1)*(a+b-2)/((a-1)*(a-2))
    expected_mean = r*b/(a-1)
    expected_conditional_variance = r*(inverse_p_squared-inverse_p)
    expected_zero = a*(a+1)/((a+b)*(a+b+1))
    result = summarize_replicates(
        "NegativeBinomial_r2_p_Beta3_3", replicated, expected_mean,
        expected_conditional_variance, expected_zero)
    result.update({
        "likelihood": "failures before2successes; mass(y)=Gamma(y+2)/(Gamma(2)y!)*p^2*(1-p)^y",
        "prior": {"family": "Beta", "a": prior_a, "b": prior_b},
        "posterior": {"family": "Beta", "a": a, "b": b},
        "seed": NB_ALTERNATIVE_SEED, "fixed_r": r, "no_MCMC_warmup": True,
    })
    return result


def known_rate_pit() -> dict[str, object]:
    rng = np.random.Generator(np.random.PCG64(PIT_SEED))
    observations = rng.poisson(2.0, size=REPLICATIONS)
    randomizers = rng.random(REPLICATIONS)
    left = stats.poisson.cdf(observations-1, 2.0)
    mass = stats.poisson.pmf(observations, 2.0)
    randomized = left + randomizers*mass
    result = stats.kstest(randomized, "uniform")
    return {"experiment": "separate IID known-rate Poisson2; no posterior fit",
            "seed": PIT_SEED, "n": REPLICATIONS,
            "mean": float(np.mean(randomized)), "variance_ddof0": float(np.var(randomized)),
            "uniform_mean_reference": .5, "uniform_variance_reference": 1/12,
            "KS_statistic": float(result.statistic), "iid_KS_pvalue": float(result.pvalue),
            "declared_stochastic_regression": {
                "KS_below_0_012": bool(result.statistic < .012),
                "mean_error_below_0_008": bool(abs(np.mean(randomized)-.5) < .008),
                "variance_error_below_0_004": bool(abs(np.var(randomized)-1/12) < .004),
            },
            "scope": "A finite synthetic PIT control is not the fitted forty-count or hierarchy calibration."}


def build_report() -> dict[str, object]:
    require(dependencies() == DEPENDENCIES, "dependency/version mismatch")
    observed = np.asarray(DATA, dtype=np.int64)
    require(observed.size == 40 and int(np.sum(observed)) == 99
            and int(np.sum(observed*observed)) == 621
            and int(np.sum(observed == 0)) == 12 and int(np.max(observed)) == 12,
            "literal observed-data certificate")
    require(40*621-99*99 == 15039
            and math.isclose(15039/(40*39), 5013/520, abs_tol=1e-14, rel_tol=0),
            "manual observed-variance certificate")
    zero = bernoulli_report(0, REPLICATIONS)
    require(math.isclose(zero["one_sided_95_upper"],
                         -math.expm1(math.log(.05)/REPLICATIONS), rel_tol=1e-14)
            and zero["plugin_MCSE"] is None, "zero-event uncertainty fixture")
    primary = poisson_fit(1, 1, PRIMARY_SEED)
    prior_sensitivity = poisson_fit(20, 10, PRIOR_ALTERNATIVE_SEED)
    alternative = negative_binomial_fit()
    return {"schema_version": "1.0.0", "case_id": "COMM06-CASE-03",
            "program_id": "COMM06-PROGRAM-03-PPC", "dependencies": dependencies(),
            "literal_data": DATA, "data_sha256": canonical_hash(DATA),
            "settings": {"replications_per_model": REPLICATIONS, "warmup": 0,
                         "rng": "NumPy Generator(PCG64)",
                         "primary_seed": PRIMARY_SEED, "PIT_seed": PIT_SEED,
                         "proper_prior_alternative_seed": PRIOR_ALTERNATIVE_SEED,
                         "NegativeBinomial_seed": NB_ALTERNATIVE_SEED},
            "primary": primary, "proper_prior_sensitivity": prior_sensitivity,
            "separately_fitted_NegativeBinomial": alternative,
            "known_rate_PIT_control": known_rate_pit(),
            "zero_event_reference_only": zero,
            "limits": "All fits/replications are explicit; finite diagnostic tails and simulation error do not prove model truth or held-out performance."}


if __name__ == "__main__":
    rendered = json.dumps(build_report(), ensure_ascii=False, sort_keys=True,
                          separators=(",", ":"), allow_nan=False)
    require(len((rendered + "\\n").encode("utf-8")) <= 1024 * 1024, "report exceeds 1 MiB")
    print(rendered)
\`\`\`


<a id="section-695-solutions-shared-hierarchy-predictive-dossier"></a>

## Solutions: Shared hierarchy predictive dossier {#section-697-solutions-shared-hierarchy-predictive-dossier}

The local case COMM06-HIERARCHY-PPC consumes the public primary output of COMM06-HIERARCHY-03, fixture CBM-HIERARCHY-EIGHT-SCHOOLS-HN10-MU20-v1. It does not redeclare the producer case or replace its posterior. The exact data are y=(28,8,−3,7,−1,1,18,12), sigma=(15,10,16,11,9,11,10,18), with known standard errors in reported-effect units.

The producer uses proper mu~Normal(0,20²), tau~HalfNormal(scale10) and theta_j|mu,tau~Normal(mu,tau²), with y_j|theta_j~Normal(theta_j,sigma_j²). Its collapsed-prior-envelope rejection sampler returns 4,000 accepted posterior draws, no adaptive warmup, then exact conditional Normal effect draws. The primary hyperparameter and conditional-effect seeds are 2,026,110,403 and 2,026,110,404. A separate changed-prior output may be present, but this consumer explicitly uses the primary HN10 posterior only.

The input contract includes the fixture/data/prior fields, full sampling settings, actual proposal counts, dependency versions and producer-reported program-body hash. The root execution manifest must bind the real input artifact to the actual frozen upstream source, passport and execution receipt after it has been produced. A correctly shaped array or a copied header alone is not authenticated provenance.

The observation-level check here means another reported estimate of each existing latent school effect. For every supplied theta vector, independently simulate eight measurement errors using the known sigma_j. Compare the same standardized residual-sum discrepancy on y and its replicate, with the same theta vector on both sides. Its conditional chi-squared-eight tail supplies a Rao-Blackwell reference in addition to the direct simulated event count.

The new-school check draws eight new effects from Normal(mu,tau²) at each posterior draw, then new reported estimates under the same fixed standard-error design. The upper-tail discrepancy is their divisor-seven sample variance, compared with the observed 1527/14. Its conditional mean is tau²+166, an analytic replication check. This is a population-layer predictive question about new reported effects, not an individual-pupil prediction.

The consumer also standardizes the supplied posterior theta values by their exact conditional Normal means and variances. Their zero/one moment references check the conditional-generation part of the upstream record. They do not replace the producer's independent quadrature validation of the collapsed hyperparameter posterior.

<a id="section-709-descriptive-hierarchy-case-rubric"></a>
### Descriptive hierarchy-case rubric {#section-711-descriptive-hierarchy-case-rubric}

Keep all eight observations, all standard errors, proper priors and the actual posterior sampler/settings intact. Verify that the input is the primary target, not its tau-prior sensitivity case, and retain the upstream root artifact/receipt bindings. Chronological MCMC chains are not fabricated from these independent accepted draws.

Report both direct and conditional-probability residual tails with independent-draw Monte Carlo uncertainty, the paired difference between them, and the chi-squared mean check. For new groups, report the observed and replicated spread and its paired conditional-mean check. Do not infer model adequacy from a central tail area or infer a unique cause from an extreme one.

Label the observation unit as a reported school-effect estimate. Do not claim pupil-level residual checks, within-school raw observations, a fitted NUTS run or hierarchical held-out calibration. Those are distinct data and algorithm requirements. Record every observed reproduction failure rather than replacing its output with an analytic reference.

<a id="section-717-solutions-shared-hierarchy-predictive-listing"></a>

## Solutions: Shared hierarchy predictive listing {#section-719-solutions-shared-hierarchy-predictive-listing}

This consumer reads at most 8 MiB of the actual primary producer JSON on stdin and prints at most 1 MiB of canonical JSON. It validates the exact model/design/sampling interface and records the actual input-byte hash. The root manifest additionally verifies the upstream source/passport/body/artifact/receipt chain; no unobserved input hash is predicted in this source.

\`\`\`python
import hashlib
import json
import math
import platform
import sys
import numpy as np
import scipy
from scipy import stats

DEPENDENCIES = {"python": "3.14.7", "numpy": "2.5.2", "scipy": "1.18.1"}
FIXTURE = "CBM-HIERARCHY-EIGHT-SCHOOLS-HN10-MU20-v1"
Y = [28, 8, -3, 7, -1, 1, 18, 12]
SIGMA = [15, 10, 16, 11, 9, 11, 10, 18]
DRAWS = 4000
OBSERVATION_SEED = 2026110481
NEW_GROUP_SEED = 2026110482
INPUT_LIMIT = 8 * 1024 * 1024


def require(ok: bool, message: str) -> None:
    if not ok:
        raise ValueError(message)


def dependencies() -> dict[str, str]:
    return {"python": platform.python_version(),
            "numpy": np.__version__, "scipy": scipy.__version__}


def binomial_tail(event: np.ndarray) -> dict[str, object]:
    total = int(event.size)
    count = int(np.sum(event))
    p = count / total
    lower = 0.0 if count == 0 else float(stats.beta.ppf(.025, count, total-count+1))
    upper = 1.0 if count == total else float(stats.beta.ppf(.975, count+1, total-count))
    one_upper = 1.0 if count == total else float(stats.beta.ppf(.95, count+1, total-count))
    if count == 0:
        upper = -math.expm1(math.log(.025)/total)
        one_upper = -math.expm1(math.log(.05)/total)
    return {"exceedances": count, "independent_replications": total,
            "estimate": p, "binomial_95_interval": [lower, upper],
            "one_sided_95_upper": one_upper,
            "plugin_MCSE": None if count in (0, total) else math.sqrt(p*(1-p)/total),
            "scope": "Independent posterior draws plus independent conditional replication; not a calibration p-value."}


def paired_reference(values: np.ndarray, expected: object) -> dict[str, object]:
    reference = np.broadcast_to(np.asarray(expected, dtype=float), values.shape)
    error = values-reference
    mean_error = float(np.mean(error))
    se = float(np.std(error, ddof=1)/math.sqrt(error.size))
    return {"estimate_mean": float(np.mean(values)),
            "conditional_reference_mean": float(np.mean(reference)),
            "paired_error_mean": mean_error, "paired_error_IID_MCSE": se,
            "standardized_error": None if se <= 0 else mean_error/se}


def posterior_input(record: dict[str, object]) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    require(record["schema_version"] == "1.0.0"
            and record["case_id"] == "COMM06-HIERARCHY-03"
            and record["program_id"] == "COMM06-HIERARCHY-03-PY"
            and record["fixture_id"] == FIXTURE, "wrong upstream hierarchy identity")
    require(record["dependencies"] == DEPENDENCIES, "wrong upstream dependency versions")
    require(record["data"] == {"J": 8, "y": Y, "sigma": SIGMA}, "wrong hierarchy data/design")
    require(record["priors"] == {"mu_mean": 0, "mu_sd": 20, "tau_halfnormal_scale": 10},
            "wrong primary hierarchy prior")
    body_hash = record["program_body_sha256"]
    require(isinstance(body_hash, str) and len(body_hash) == 64
            and all(c in "0123456789abcdef" for c in body_hash), "invalid upstream body-hash field")
    settings = record["sampling"]
    require(settings["accepted_retained"] == DRAWS and settings["warmup"] == 0
            and settings["proposal_cap_per_prior"] == 4_000_000
            and settings["batch_size"] == 8192
            and settings["seed_hyperparameters"] == 2026110403
            and settings["seed_conditional_effects"] == 2026110404
            and settings["rng"] == "PCG64"
            and settings["algorithm"] == "collapsed-prior-envelope-rejection+conditional-normal-v1",
            "wrong primary posterior-draw protocol")
    require(type(settings["proposed"]) is int
            and type(settings["accepted_generated"]) is int
            and DRAWS <= settings["accepted_generated"] <= settings["proposed"] <= 4_000_000,
            "invalid rejection-sampling counts")
    posterior = record["posterior"]
    mu = np.asarray(posterior["mu"], dtype=float)
    tau = np.asarray(posterior["tau"], dtype=float)
    theta = np.asarray(posterior["theta"], dtype=float)
    require(mu.shape == (DRAWS,) and tau.shape == (DRAWS,) and theta.shape == (DRAWS, 8),
            "wrong posterior-array shape")
    require(np.isfinite(mu).all() and np.isfinite(tau).all()
            and np.isfinite(theta).all() and np.all(tau > 0), "invalid primary posterior values")
    require(np.isfinite(tau*tau).all(), "posterior scale square overflow")
    return mu, tau, theta


def build_report(record: dict[str, object], input_hash: str) -> dict[str, object]:
    require(dependencies() == DEPENDENCIES, "dependency/version mismatch")
    mu, tau, theta = posterior_input(record)
    y = np.asarray(Y, dtype=float)
    sigma = np.asarray(SIGMA, dtype=float)
    require(float(np.sum(y)) == 70 and float(np.sum(y*y)) == 1376
            and float(np.sum(sigma*sigma)) == 1328, "manual data certificate")
    observed_between = float(np.var(y, ddof=1))
    require(math.isclose(observed_between, 1527/14, abs_tol=1e-12, rel_tol=0),
            "manual between-school samplevariance")
    tau2 = tau[:, None]**2
    sigma2 = sigma[None, :]**2
    conditional_mean = (sigma2*mu[:, None] + tau2*y[None, :])/(sigma2+tau2)
    conditional_variance = tau2*sigma2/(sigma2+tau2)
    require(np.isfinite(conditional_mean).all() and np.isfinite(conditional_variance).all()
            and np.all(conditional_variance > 0), "conditional-Normal arithmetic failed")
    standardized_effects = (theta-conditional_mean)/np.sqrt(conditional_variance)

    obs_rng = np.random.Generator(np.random.PCG64(OBSERVATION_SEED))
    observation_replicates = theta + sigma[None, :]*obs_rng.normal(size=(DRAWS, 8))
    observed_residual = np.sum(((y[None, :]-theta)/sigma[None, :])**2, axis=1)
    replicated_residual = np.sum(((observation_replicates-theta)/sigma[None, :])**2, axis=1)
    conditional_tail = stats.chi2.sf(observed_residual, df=8)
    residual_event = replicated_residual >= observed_residual

    group_rng = np.random.Generator(np.random.PCG64(NEW_GROUP_SEED))
    new_effects = mu[:, None] + tau[:, None]*group_rng.normal(size=(DRAWS, 8))
    new_reported_estimates = new_effects + sigma[None, :]*group_rng.normal(size=(DRAWS, 8))
    replicated_between = np.var(new_reported_estimates, axis=1, ddof=1)
    require(all(np.isfinite(a).all() for a in (
        standardized_effects, observation_replicates, observed_residual,
        replicated_residual, conditional_tail, new_reported_estimates, replicated_between
    )), "nonfinite predictive arithmetic; no clipping or replacement")
    require(np.all((conditional_tail >= 0) & (conditional_tail <= 1)), "invalid conditional tail")
    residual_difference = residual_event.astype(float)-conditional_tail
    rb_mean = float(np.mean(conditional_tail))
    rb_mcse = float(np.std(conditional_tail, ddof=1)/math.sqrt(DRAWS))
    flat_effects = standardized_effects.ravel()
    return {
        "schema_version": "1.0.0", "case_id": "COMM06-HIERARCHY-PPC",
        "program_id": "COMM06-PROGRAM-HIERARCHY-PPC", "fixture_id": FIXTURE,
        "dependencies": dependencies(), "upstream_input_sha256": input_hash,
        "upstream_case_id": record["case_id"], "upstream_program_id": record["program_id"],
        "upstream_reported_program_body_sha256": record["program_body_sha256"],
        "upstream_sampling": record["sampling"],
        "data": record["data"], "priors": record["priors"],
        "settings": {"posterior_draws": DRAWS, "consumer_warmup": 0,
                     "observation_seed": OBSERVATION_SEED,
                     "new_group_seed": NEW_GROUP_SEED,
                     "rng": "NumPy Generator(PCG64)", "changed_prior_used": False},
        "posterior_conditional_effect_check": {
            "points": int(flat_effects.size),
            "standardized_mean": paired_reference(flat_effects, 0),
            "standardized_second_moment": paired_reference(flat_effects*flat_effects, 1),
            "scope": "Checks conditional generation; upstream collapsed-posterior quadrature checks remain separate.",
        },
        "existing_effect_measurement_check": {
            "unit": "another reported estimate of each existing latent school effect",
            "discrepancy": "sum8 standardized squared residuals; same theta on both sides",
            "upper_tail": binomial_tail(residual_event),
            "Rao_Blackwell_tail": {"estimate": rb_mean, "IID_MCSE": rb_mcse,
                                  "reference": "average chi2_8.sf(observed discrepancy at posterior theta)"},
            "indicator_minus_conditional_tail": paired_reference(residual_difference, 0),
            "replicated_chi2_mean": paired_reference(replicated_residual, 8),
            "chi2_mean_analytic_MCSE": math.sqrt(16/DRAWS),
        },
        "new_school_check": {
            "unit": "eight new exchangeable effects measured with the same declared standard-error design",
            "discrepancy": "samplevariance of eight reported estimates, divisor7",
            "observed_discrepancy": observed_between,
            "observed_exact_reference": "1527/14",
            "upper_tail": binomial_tail(replicated_between >= observed_between),
            "conditional_replication_mean": paired_reference(replicated_between, tau*tau+166),
            "reference": "E[samplevariance | mu,tau]=tau²+mean(sigma²)=tau²+166",
        },
        "scope_limits": {
            "pupil_data": "No individual pupil observations, within-pupil likelihood or treatment/control design are supplied.",
            "CBM_CLAIM_036": "Original individual-level workflow remains an explicit sourced template; reported-estimate/new-group checks are supplied.",
            "sampler": "Exact collapsed rejection plus conditional draws under ideal RNG; no fitted NUTS record.",
            "calibration": "Posterior-fitted PPCs reuse observed data and are not held-out calibration evidence.",
        },
    }


if __name__ == "__main__":
    payload = sys.stdin.buffer.read(INPUT_LIMIT+1)
    require(len(payload) <= INPUT_LIMIT, "hierarchy JSON exceeds 8 MiB")
    incoming = json.loads(payload)
    output = build_report(incoming, hashlib.sha256(payload).hexdigest())
    rendered = json.dumps(output, ensure_ascii=False, sort_keys=True,
                          separators=(",", ":"), allow_nan=False) + "\\n"
    require(len(rendered.encode("utf-8")) <= 1024*1024, "summary exceeds 1 MiB")
    sys.stdout.write(rendered)
\`\`\`


<a id="section-912-hierarchical-predictive-scope-and-evidence-contract"></a>

## Solutions: Predictive experiment extensions {#section-941-solutions-predictive-experiment-extensions}

<a id="section-941-cbm-08-e5-one-posterior-rate-or-five-posterior-rates-so"></a>
### CBM-08-E5. One posterior rate or five posterior rates — solution {#section-943-cbm-08-e5-one-posterior-rate-or-five-posterior-rates-so}

The posterior rate has mean 3/2 and variance 3/4. A new count's marginal variance is 9/4, and two counts sharing the rate have covariance 3/4. The average variance is therefore (3/2)/5+3/4=21/20. Independent rate redraws remove the covariance and give (9/4)/5=9/20. The plug-in Poisson rate 3/2 gives (3/2)/5=3/10. All averages have mean 3/2, but their dependence and parameter-uncertainty terms differ.

<a id="section-945-cbm-08-e6-which-replication-count-supports-binomial-err"></a>
### CBM-08-E6. Which replication count supports binomial error? — solution {#section-947-cbm-08-e6-which-replication-count-supports-binomial-err}

Conditional on its one theta, AlgorithmB has average variance q(theta)(1−q(theta))/S and conditional mean q(theta). Total variance gives E[q(1−q)]/S+Var(q), so the posterior-parameter component does not vanish as S grows. Its event count is conditionally Binomial(S,q(theta)), while unconditionally it is a mixture, generally not Binomial(S,E q). The usual zero-count bound would concern that conditional q, not the full posterior-integrated probability. AlgorithmA instead has independent Bernoulli events of probability E q and supports the stated binomial Monte Carlo construction.

<a id="section-949-references-predictive-experiments-and-case-boundaries"></a>

## Sources: Predictive experiments and case boundaries {#section-951-references-predictive-experiments-and-case-boundaries}

The conditional PIT proofs, fitted Normal counterexample, conjugate predictive formulas, covariance/variance calculations and simulation-error derivations are supplied here. Posterior-integrated discrepancy definitions and their model-building use are checked against [Gelman, Meng and Stern, 1996](https://www3.stat.sinica.edu.tw/statistica/j6n4/j6n41/j6n41.htm). The shared hierarchy is the exact proper-prior fixture and posterior protocol in Chapter3, not a flat-prior historical fit or a new toy. Chapter7 supplies the estimand-specific MCMC error boundary when posterior draws are correlated; Chapter9 keeps genuinely held-out prediction and model-comparison targets separate. Actual source-bound execution receipts remain distinct from all mathematical expected values.
`;export{e as default};