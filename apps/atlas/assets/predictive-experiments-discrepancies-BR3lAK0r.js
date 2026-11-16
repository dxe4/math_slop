var e=`---
parent_id: book-computational-bayesian-modeling
chapter_id: predictive-experiments-discrepancies
title: "Predictive Experiments and Discrepancies"
level: graduate
license: CC BY-SA 4.0
---

# Predictive Experiments and Discrepancies

Preparation is the primary [Bayesian Inference course](/bayesian/site/course/syllabus.html), probability with conditional expectation, and the preceding modeling chapter when one is listed. Computational algorithms continue in [MCMC Volume 1](/books/mcmc:book:monte-carlo-markov-chain-computation/).


A model that fits the data well may still fail to generate plausible future data. Predictive criticism compares the observed data to data simulated from the fitted model, revealing discrepancies that parameter estimates alone cannot detect. This chapter covers posterior predictive checks, prior predictive checks, and the distinction between diagnosis and generalization.

## Posterior predictive checks

For each posterior draw $\\theta^{(s)}$, simulate replicated data $y_{\\mathrm{rep}}^{(s)} \\sim p(y \\mid \\theta^{(s)})$. The collection $\\{y_{\\mathrm{rep}}^{(s)}\\}_{s=1}^{S}$ forms the posterior predictive distribution. Compare features of the observed data $y$ to the same features computed from the replications.

A test statistic $T(y)$ summarizes a feature of interest: the maximum observation, the proportion of zeros, the variance across groups, the autocorrelation at lag 1, or the calibration of probabilistic predictions. The posterior predictive p-value is

$$p_{\\mathrm{post}} = \\Pr\\bigl(T(y_{\\mathrm{rep}}) \\geq T(y) \\mid y\\bigr),$$

estimated by the fraction of replications for which $T(y_{\\mathrm{rep}}^{(s)}) \\geq T(y)$.

**Important caution.** Posterior predictive checks reuse the data used to fit the model. Their tail areas are not automatically calibrated frequentist p-values. A small $p_{\\mathrm{post}}$ indicates a discrepancy between model and data, but its sampling distribution under the model need not be uniform. Use posterior predictive checks for diagnosis, not for formal hypothesis testing.

## Prior predictive checks

Before seeing data, simulate $y_{\\mathrm{rep}} \\sim p(y \\mid \\theta)$ for $\\theta \\sim \\pi(\\theta)$. If the prior predictive distribution places negligible mass on realistic data values, the joint prior-predictive model conflicts with that background constraint; diagnose the prior, likelihood/link, design and units before choosing a change. Prior predictive checks often reveal absurd scales sooner than posterior checks, because they are not masked by data-driven adaptation.

**Example.** A researcher places $\\operatorname{Normal}(0, 100^{2})$ priors on all regression coefficients. The prior predictive distribution for the outcome may span implausibly large ranges, depending on the link, units and predictor design. Diagnose which model component drives the implausible predictions; tightening a coefficient prior can help when its scale is the cause.

## Held-out evaluation

When the goal is generalization, evaluate predictions on genuinely held-out or future data. The full data pipeline must be accounted for: if preprocessing used all outcomes, the holdout is contaminated. Cross-validation provides a systematic way to estimate predictive performance, though it is computationally expensive for complex hierarchical models.

Leave-one-out cross-validation (LOO-CV) estimates the expected log predictive density for each observation given all others. For conjugate models, LOO-CV can be computed analytically. For non-conjugate models, approximations such as Pareto-smoothed importance sampling are available.

## Worked example: checking a Poisson model

Suppose we fit a Poisson model to count data and observe a sample variance twice the sample mean, indicating overdispersion. If replicated variances under the fitted model are usually smaller than the observed variance, then for the upper-tail convention defined above,

$$p_{\\mathrm{post}}=\\Pr\\{T(y_{\\mathrm{rep}})\\geq T(y)\\mid y\\},$$

the posterior predictive p-value will be near $0$, flagging the discrepancy. Reversing the inequality would produce a lower-tail value near $1$; the direction must travel with the reported number.

A discrepancy can motivate a separately fitted overdispersed model, such as a negative binomial or a hierarchical Poisson model with gamma-distributed rates. First inspect the observations, replications, prior sensitivity and data pipeline; one finite check does not establish a structural defect or identify a unique repair.


## Cross-validation for Bayesian models

Leave-one-out cross-validation (LOO-CV) estimates the expected log predictive density for each observation:

$$\\mathrm{elpd}_{\\mathrm{loo}} = \\sum_{i=1}^{n} \\log p(y_{i} \\mid y_{-i}).$$

For many non-conjugate models, $p(y_{i} \\mid y_{-i})$ is not available in closed form. Pareto-smoothed importance sampling (PSIS-LOO) approximates LOO-CV using importance weights from the full posterior. Its fitted Pareto shape $k$ diagnoses the upper tail of the raw importance ratios: asymptotically, $k\\geq 1/2$ corresponds to infinite raw-weight variance and $k\\geq1$ to an infinite raw-weight mean. Practical warning thresholds also depend on the effective sample size, so a large estimated $k$ is evidence to inspect or refit, not an exact label attached to every finite set of weights.

When PSIS-LOO fails for some observations, direct LOO-CV can be computed by refitting the model $n$ times, each time leaving out one observation. This targets the LOO quantity without the PSIS approximation, although numerical integration or Monte Carlo error in each fit remains. For hierarchical models, leave-one-group-out cross-validation may be more appropriate than leave-one-observation-out.

## Calibration and probability integral transform

A calibrated forecasting procedure produces predictive distributions that match future observations relative to the information available when each forecast is issued. Let $F_i$ be the CDF fitted without $y_i$—for example, a held-out, leave-one-out, or leave-future-out predictive CDF. If the conditional predictive law is continuous and correctly specified, then $F_i(y_i)$ is uniform on $[0,1]$ under repeated use of that forecasting protocol. Using the ordinary in-sample posterior predictive CDF reuses $y_i$ and does not inherit this uniformity claim.

For discrete data, let $V_i\\sim\\operatorname{Uniform}(0,1)$ independently and use the randomized PIT

$$U_i=F_i(y_i^-)+V_i\\{F_i(y_i)-F_i(y_i^-)\\}.$$

Under the same conditional calibration claim, $U_i$ is uniform. A U-shaped PIT histogram typically indicates **underdispersed** predictive distributions, because observations fall in predictive tails too often; an inverted-U shape typically indicates **overdispersed** predictions. Skew points to location bias. These shapes are diagnostics rather than proofs, especially when forecast cases are dependent.

![PIT rank interpretation: calibrated forecasts fill the unit interval uniformly, underdispersed forecasts put too many observations near zero and one, and overdispersed forecasts put too many near one half](figures/pit-calibration-shapes.svg)

The figure encodes ranks, not density estimates from a particular dataset: endpoints mean the observation fell in a predictive tail, while values near one half mean it fell near the predictive center.

## Posterior predictive checks for hierarchical models

In hierarchical models, predictive checks should be performed at multiple levels. Group-level checks compare observed group means or variances to their posterior predictive distributions. Observation-level checks compare individual residuals to predictive residuals. A model may pass observation-level checks while failing group-level checks; investigate the population layer, observation model and group design, since finite checks do not identify a unique cause.

**Example.** A hierarchical model for student test scores may reproduce individual scores well but fail to predict the variance of school-level means. This suggests that the prior for school effects is too restrictive or that an important school-level predictor is omitted.


## Graphical posterior predictive checks

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

## Sensitivity of predictive checks to prior

Posterior predictive checks depend on the posterior, which depends on the prior. A diffuse prior can produce a posterior predictive distribution that is too wide, masking discrepancies. An informative prior can produce a posterior predictive distribution that is too narrow, flagging discrepancies that are due to prior misspecification rather than likelihood misspecification.

The appropriate response is to perform predictive checks under multiple priors. If a discrepancy persists across priors, it is likely a genuine feature of the data that the likelihood fails to capture. If the discrepancy disappears under a different prior, the issue is prior sensitivity.

## Earlier worked questions

The original question identities, statements and complete answers remain in [the original complete exercise companion](#/item/book-computational-bayesian-modeling?section=back:retained-source-predictive-criticism). The further exercises below supply the present chapter’s staged practice.

## Prior predictive simulation

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

## Choosing discrepancy measures

The choice of discrepancy measure $T(y)$ should be guided by the scientific question:

- **For count data:** Check the proportion of zeros, the maximum count, and the variance-to-mean ratio.
- **For continuous data:** Check skewness, kurtosis, and tail behavior.
- **For regression:** Check residual patterns, heteroscedasticity, and influential points.
- **For time series:** Check autocorrelation, spectral density, and run lengths.
- **For spatial data:** Check variograms, cluster sizes, and boundary effects.

A good discrepancy measure is one that the model is expected to reproduce but might fail on. Measures that are trivially reproduced (e.g., the sample mean under a model with a location parameter) provide little diagnostic power.


## Bayesian p-values and their calibration

The posterior predictive p-value $p_{\\mathrm{post}}$ is the posterior probability that a replicated test statistic is at least as large as the observed statistic, following the declared upper-tail convention. These tail areas need not be uniformly distributed under the model; a frequentist uniform-p-value calibration cannot be assumed. Their distribution depends on the choice of test statistic, model and prior.

Posterior predictive p-values are generally conservative because the observed data help form both the posterior and the reference distribution. Large samples do not by themselves make them uniform. Extreme values can expose a discrepancy, but their magnitude should be interpreted through the observed and replicated statistics rather than through a frequentist uniform-p-value calibration.

## Sensitivity to test statistic choice

Different test statistics reveal different aspects of model fit. A model may pass checks for the mean and variance but fail checks for skewness or tail behavior. The choice of test statistics should be guided by the scientific question and by known limitations of the model.

**Example.** In a simple Poisson model, fitting the rate strongly constrains the replicated mean toward the observed mean, so the sample mean is often a weak posterior predictive diagnostic; it is not reproduced identically in every replication. The variance-to-mean ratio, proportion of zeros, or maximum count can expose failures hidden by that fitted location statistic.

## Iterative model improvement

Predictive criticism is not a one-time check but part of an iterative workflow:

1. Propose a model based on theory and domain knowledge.
2. Fit the model and check diagnostics.
3. Perform posterior predictive checks.
4. Identify discrepancies and propose model extensions.
5. Refit the extended model and repeat.

Each iteration should be documented, including the discrepancies found, the model changes made, and the checks performed. This documentation is essential for reproducibility and for communicating the modeling process to others.


## Posterior predictive p-values in practice

The posterior predictive p-value is computed as follows:

1. Choose a test statistic $T(y)$ relevant to the scientific question.
2. For each posterior draw $\\theta^{(s)}$, simulate $y_{\\mathrm{rep}}^{(s)} \\sim p(y \\mid \\theta^{(s)})$.
3. Compute $T(y_{\\mathrm{rep}}^{(s)})$ for each $s$.
4. Estimate $p_{\\mathrm{post}} = (1/S) \\sum_{s=1}^{S} \\mathbf{1}(T(y_{\\mathrm{rep}}^{(s)}) \\geq T(y))$.

A p-value near $0.5$ does not indicate a good model; it merely means the observed statistic is near the center of the predictive distribution. Extreme p-values (near $0$ or $1$) indicate discrepancies. The magnitude of the discrepancy is assessed by comparing $T(y)$ to the distribution of $T(y_{\\mathrm{rep}})$.

**Example: zero-inflated data.** Suppose we observe $30\\%$ zeros in count data. Under a fixed Poisson mean of $2$, the expected proportion of zeros is $e^{-2}\\approx0.135$. That expectation alone does not determine the upper-tail predictive probability: it also depends on the sample size, replication design, and, in a posterior predictive calculation, parameter uncertainty. For example, with ten independent fixed-rate counts and three zeros, the replicated zero count is $\\operatorname{Binomial}(10,e^{-2})$ and $\\Pr(Z\\ge3)\\approx0.143$, not near zero. Holding the observed proportion near $30\\%$ while increasing the independent sample size makes the fixed-rate upper tail small. Report the actual replicated design and simulated or exact tail probability before using the discrepancy to motivate a zero-inflated or hurdle model.

## Combining multiple discrepancy measures

No single discrepancy measure captures all aspects of model fit. A comprehensive predictive check uses multiple measures:

- Central tendency: mean, median.
- Spread: variance, interquartile range.
- Shape: skewness, kurtosis.
- Tails: maximum, minimum, proportion above threshold.
- Structure: autocorrelation, spatial correlation, group differences.

A model that passes some checks but fails others may miss features measured by the failed checks. A finite diagnostic result does not establish that the model is false; inspect the observations and replications before choosing an extension. For example, failing the variance check but passing the mean check suggests overdispersion; failing the autocorrelation check suggests omitted temporal structure.

## Common errors

- **Treating posterior predictive p-values as calibrated significance tests.** They quantify the declared posterior predictive tail event, but that numerical probability does not by itself have a frequentist significance-test calibration. Interpret it with the observed and replicated statistics and their model assumptions.
- **Checking only the mean.** A model can match the mean perfectly while failing on higher moments, tail behavior, or correlation structure. Choose test statistics that matter for the scientific question.
- **Ignoring the data pipeline.** If feature selection, standardization, or outlier removal used the full dataset, holdout evaluation is invalid. Document and account for every preprocessing step.
- **Using the same data for model checking and selection.** Data used to criticize a model should not be reused to select among models without proper cross-validation.


## Connections

This chapter used predictive checks to evaluate model fit beyond parameter estimation. Continue to [Predictive Calibration and Case Studies](predictive-calibration-case-studies.md), followed by the comparison and decision chapters.
## Specify the probability experiment before simulating

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

## Posterior integration changes both variation and dependence

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

## Define discrepancies and tail directions without losing ties

For a statistic T(y), this chapter uses the upper-tail event T(Yrep)≥T(y). A large observed discrepancy tends to give a small upper-tail probability. A probability near one instead means that most replications have discrepancies at least as large as the observed value; the observation can be unusually small for that feature.

Discrete statistics have ties. P(Trep≥Tobs) and P(Trep≤Tobs) add to one plus the probability of equality, not necessarily one. The strict lower-tail probability P(Trep<Tobs) is the complement of the inclusive upper tail. State which event was counted before describing one reported number as the opposite of another.

A parameter-dependent discrepancy D(y,theta) is also legitimate. For each posterior draw theta_s, compare D(Yrep_s,theta_s) with D(y,theta_s), using that same theta_s on both sides. Replacing the observed side by a discrepancy at a posterior point estimate defines a different tail event.

For example, a standardized residual sum can use the sampled latent group effects and known observation variances. Its observed value changes across posterior draws because those effects are uncertain. The resulting indicator still has a well-defined posterior-integrated expectation; it is not the tail probability for a single fixed observed number.

Choose discrepancies that can expose the failure relevant to the application. A fitted location parameter can make a mean check weak, while a maximum, zero proportion, residual pattern or between-group spread reveals something else. Weak does not mean that every replicate reproduces the observed mean exactly.

Statistical conventions also matter. Sample variance with divisor n−1 differs from the divisor-n second central moment. A variance-to-mean ratio is undefined when the replicated mean is zero. The count-data dossier therefore uses sample variance as a primary discrepancy and reports zero proportion and maximum separately, with every convention fixed.

Multiple discrepancies are a structured examination, not independent significance tests. They can be strongly correlated, and choosing one after looking at the data changes the interpretation. Report why each feature was chosen and inspect its magnitude and replicated distribution, rather than selecting only the most dramatic tail probability.

## Derive a conjugate predictive law and its joint counterpart

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

## Prior checks diagnose a joint model in stated units

A prior predictive distribution depends on the prior, likelihood, link and fixed design. A surprising simulated outcome can be caused by any combination of those choices. Diagnosing the prior alone without checking the rest of the generative story is an attribution error.

For a regression coefficient beta with Normal(0,s²) prior, the linear predictor x beta has variance x²s² when x is fixed. Multiplying a predictor's units by one hundred while leaving the coefficient prior unchanged multiplies that contribution to variance by ten thousand. A prior that looked moderate in one design can become extreme in another without changing its printed numerical scale.

The link also changes what “extreme” means. In Gaussian regression a broad linear predictor can generate very large real outcomes. With a logistic link the probabilities stay in [0,1], but the same broad predictor can put most mass near zero or one. With a Poisson log link, Normal predictor variance v gives a prior mean rate exp(v/2) when its mean is zero. Calling all three situations simply “diffuse coefficients” hides different predictive consequences.

Declare a plausibility constraint before using its violation as evidence. A bound on a count, a population proportion, a school effect in score units and a measured response range are not interchangeable. A threshold selected after seeing simulations can still guide exploration, but its origin must be documented.

Proper priors ensure that the generative mixing distribution exists; they do not ensure finite moments or realistic predictions. A proper mixture can have an infinite predictive mean. Conversely a prior that gives low probability to one observed unusual value need not be incompatible with all relevant background information.

Before changing a component, trace the simulated outlier backward through the generative graph. Was it driven by a population-scale draw, one group effect, an observation-noise draw, an exposure or a transformation? Conditional summaries can localize the mechanism more effectively than replacing every broad prior at once.

Posterior fitting can hide prior-predictive conflicts because observations concentrate the posterior into a smaller region. That is one reason to examine prior predictions before outcomes and posterior replications after fitting. These checks complement each other; neither is a substitute for a genuinely held-out performance estimate.

## Sensitivity and a fitted overdispersed alternative are separate changes

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

## Prove the conditional PIT claim before using a histogram

Let H denote the information genuinely available when a forecast is issued, and let F_H be its conditional CDF. The calibration assumption is Y|H distributed according to F_H. For a continuous CDF, the probability-integral transform U=F_H(Y) is conditionally Uniform(0,1). A quantile argument proves the claim: continuity lets the probability below the u-quantile equal u, including CDFs with flat intervals carrying no probability.

Conditioning is essential. A fitted distribution that used the evaluated outcome is not automatically the conditional law of a newly generated copy of that outcome. “The likelihood family is correct” is also weaker than the assertion that the entire fitted forecast is the correct finite-sample conditional law.

For a count distribution write p_k=P(Y=k|H), a_k=F_H(k−1) and b_k=F_H(k). With V independent Uniform(0,1), set U=a_Y+V p_Y. Conditional on Y=k, U is uniform on that outcome's CDF interval. Its conditional density there is 1/p_k; multiplying by the outcome probability p_k gives density one. The intervals tile [0,1] up to endpoints, proving a uniform mixture.

Zero-mass outcomes are never generated and add nothing to that calculation. Strict versus inclusive CDF endpoints and the independent randomizer must still be implemented consistently. For Poisson counts the left endpoint is F(k−1), with F(−1)=0 at k=0.

Uniform marginal PIT values do not imply independence. A pair U2=U1 can have two uniform marginals and perfect dependence. In a sequence, independent-uniform behavior follows under the stronger protocol that each conditional predictive law is correct given an information set containing the relevant past, with independent new randomizers. Iterated conditioning then gives the product-uniform joint law.

Shared latent effects, serial correlation or overlapping fitting folds can make forecast cases dependent. An iid Kolmogorov-Smirnov reference distribution does not become appropriate merely because the PIT formula was randomized. Account for the dependence or use a suitably defined forecast-evaluation protocol.

The public known-rate control generates 30,000 independent Poisson(2) observations and independent randomizers. In that experiment the CDF is known before observing each count, and no parameter is fitted. It is intentionally separate from the forty observed counts used to fit a posterior, and separate from the fitted hierarchy. Passing this synthetic control verifies a finite implementation against a declared calibration experiment, not the calibration of those fitted analyses.


## Worked applications

### Worked example 1: an exact replicated-count variance

For posterior gamma rate of mean two and variance one at exposure three, replicated count mean is six and variance fifteen. A plug-in Poisson has variance six and is not the same predictive experiment.

### Worked example 2: a two-sided discrepancy

An absolute residual discrepancy counts both signs. Comparing it with a one-sided replicated count tail changes the event. Define the same statistic on observed and replicated data before comparing probabilities.

### Worked example 3: a targeted failure

A Poisson model can match total counts while failing to reproduce the number of zeros across subperiods. Those summaries test different implications of the same joint model; agreement of one does not establish the other.

## Further exercises

### Exercise 101
<a id="predictive-experiments-discrepancies-ex-101"></a>

Define a posterior predictive tail probability for discrepancy T.

<details>
<summary>Hint 1</summary>

Replicate from the fitted joint law.

</details>
<details>
<summary>Hint 2</summary>

Use the same statistic on both datasets.

</details>
<details>
<summary>Solution</summary>

It is $P(T(Y^{rep})\\ge T(y)\\mid y)$ under the declared replicated-data kernel. If the statistic depends on parameters, that dependence must be replicated consistently.

</details>

### Exercise 102
<a id="predictive-experiments-discrepancies-ex-102"></a>

Why is a posterior predictive p-value not generally uniform?

<details>
<summary>Hint 1</summary>

Observed data fit the reference distribution.

</details>
<details>
<summary>Hint 2</summary>

There is double use of information.

</details>
<details>
<summary>Solution</summary>

The posterior used for replication is itself conditioned on the observed data. The repeated-sampling calibration of an ordinary fixed-null test therefore does not follow automatically.

</details>

### Exercise 103
<a id="predictive-experiments-discrepancies-ex-103"></a>

What does a prior predictive check compare?

<details>
<summary>Hint 1</summary>

Draw parameters before the current data.

</details>
<details>
<summary>Hint 2</summary>

Then draw a whole dataset.

</details>
<details>
<summary>Solution</summary>

It examines observable implications of the prior-sampling joint model. It can reveal implausible scales or dependence before conditioning, without proving the model true.

</details>

### Exercise 104
<a id="predictive-experiments-discrepancies-ex-104"></a>

How can mean and dispersion checks disagree?

<details>
<summary>Hint 1</summary>

Different summaries target different features.

</details>
<details>
<summary>Hint 2</summary>

Use a count model.

</details>
<details>
<summary>Solution</summary>

A model can reproduce total or average count while underrepresenting zeros or spread. Matching the first moment does not establish the full count distribution or independence.

</details>

### Exercise 105
<a id="predictive-experiments-discrepancies-ex-105"></a>

Why must replicated group structure match the target?

<details>
<summary>Hint 1</summary>

Existing and new groups share different latent effects.

</details>
<details>
<summary>Hint 2</summary>

Replicate the intended experiment.

</details>
<details>
<summary>Solution</summary>

Reusing learned group effects and drawing new population effects answer different questions. The predictive kernel must state which groups and observations are fresh.

</details>

### Exercise 106
<a id="predictive-experiments-discrepancies-ex-106"></a>

Does a large tail probability always mean a good fit?

<details>
<summary>Hint 1</summary>

Extreme values can signal another mismatch.

</details>
<details>
<summary>Hint 2</summary>

Consider both the discrepancy and its direction.

</details>
<details>
<summary>Solution</summary>

No. A statistic can be unusually small as well as large, and an irrelevant statistic can miss important structure. Interpret the declared event rather than a generic good/bad threshold.

</details>

### Exercise 107
<a id="predictive-experiments-discrepancies-ex-107"></a>

What does a zero exceedance count imply about its probability?

<details>
<summary>Hint 1</summary>

A finite simulation can miss rare events.

</details>
<details>
<summary>Hint 2</summary>

It is not a proof of zero.

</details>
<details>
<summary>Solution</summary>

It supplies finite-sample information conditional on the simulation scheme. A binomial uncertainty bound may quantify it for independent replications; the underlying probability need not be zero.

</details>

### Exercise 108
<a id="predictive-experiments-discrepancies-ex-108"></a>

Why are many discrepancies a selection issue?

<details>
<summary>Hint 1</summary>

One can search for the most striking result.

</details>
<details>
<summary>Hint 2</summary>

The reported event includes the search.

</details>
<details>
<summary>Solution</summary>

Choosing a discrepancy after inspecting many comparisons changes its inferential interpretation. Record the exploratory search or use a procedure accounting for the collection.

</details>

### Exercise 109
<a id="predictive-experiments-discrepancies-ex-109"></a>

Can a posterior check identify the source of failure?

<details>
<summary>Hint 1</summary>

Several assumptions affect one observable pattern.

</details>
<details>
<summary>Hint 2</summary>

A discrepancy is diagnostic evidence.

</details>
<details>
<summary>Solution</summary>

Not uniquely. A mismatch can come from mean, dependence, scale, observation or prior structure. Follow it with specific alternative mechanisms and their observable consequences.

</details>

### Exercise 110
<a id="predictive-experiments-discrepancies-ex-110"></a>

Distinguish observed-data and latent-data predictive checks.

<details>
<summary>Hint 1</summary>

Some latent values were never recorded.

</details>
<details>
<summary>Hint 2</summary>

The observation operator matters.

</details>
<details>
<summary>Solution</summary>

A check of recorded data must replicate measurement, censoring and selection. A latent discrepancy answers a different model question and may be more assumption-dependent.

</details>

## Summary

Predictive Experiments and Discrepancies develops the declared probability model, target and mathematical comparisons in the sections above. Keep support, observation mechanisms, conditional information and numerical approximation distinct. The original complete source remains available as a companion, with all original questions and computational listings preserved.
`;export{e as default};