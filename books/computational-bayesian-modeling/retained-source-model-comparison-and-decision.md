
# Model Comparison and Decision Boundaries {#section-1-model-comparison-and-decision-boundaries}

Having fit and diagnosed a model, we often face a harder question: is this the right model, and what action should we take? This chapter covers predictive criteria for model comparison, the role of marginal likelihoods, and the decision-theoretic framework for choosing actions under posterior uncertainty.

<a id="section-3-predictive-criteria-and-cross-validation"></a>
## Predictive criteria and cross-validation {#section-5-predictive-criteria-and-cross-validation}

Models are compared with respect to a specific predictive task. Leave-one-out cross-validation (LOO-CV) estimates the expected log predictive density for a new observation:

$$\mathrm{elpd}_{\mathrm{loo}} = \sum_{i=1}^{n} \log p(y_{i} \mid y_{-i}),$$

where $p(y_{i} \mid y_{-i})$ is the posterior predictive density for observation $i$ given all other observations. For the stated predictive task, larger elpd is better. Report a paired difference with its standard error or interval and assess consequences at the task's scale. A difference smaller than one standard error is uncertain, not automatically meaningless.

Widely applicable information criterion (WAIC) is an asymptotic approximation to LOO-CV that requires less computation. For well-specified models with adequate posterior samples, WAIC and LOO-CV usually agree. For models with influential observations or poor mixing, LOO-CV is more reliable.

**Numerical example.** Two models evaluated on the same observations have $\mathrm{elpd}_{\mathrm{loo}}$ estimates of $-120$ and $-115$ with marginal standard errors $5$ and $6$. The estimated difference favoring the second model is $5$, but its standard error cannot be recovered from these two marginal standard errors alone: the estimates are paired. Let $d_i$ be the second model's pointwise log predictive density minus the first model's, using the same held-out observation in each pair. The usual estimate for the standard error of their sum is $\sqrt{n\,s_d^2}$, where $s_d^2$ is the sample variance of the $d_i$. Its adequacy depends on the data and validation design; dependent data need appropriate units and covariance treatment. See the [official loo model-comparison documentation](https://mc-stan.org/loo/reference/loo_compare.html). Without the paired information, these summaries alone do not establish how uncertain the predictive difference is.

<a id="section-15-marginal-likelihoods-and-bayes-factors"></a>
## Marginal likelihoods and Bayes factors {#section-17-marginal-likelihoods-and-bayes-factors}

The marginal likelihood $p(y \mid M)$ is the normalizing constant of the posterior. The Bayes factor for model $M_{1}$ against model $M_{0}$ is

$$\mathrm{BF}_{10} = \frac{p(y \mid M_{1})}{p(y \mid M_{0})}.$$

Bayes factors are sensitive to prior specification throughout weakly identified and model-specific parameter directions, not only near the posterior. A truly likelihood-irrelevant parameter with a proper normalized conditional prior integrates out to a factor of one, so it cannot by itself change the marginal likelihood. Sensitivity arises when the likelihood depends weakly on that parameter, its prior is improper, or competing models assign different likelihood-relevant structures. This is one reason to compare Bayes-factor conclusions across justified priors and against predictive validation.

When Bayes factors are used, the prior must be carefully justified. A default prior chosen for computational convenience may produce misleading Bayes factors. Sensitivity analysis---comparing Bayes factors under alternative priors---is essential.

<a id="section-25-decision-theory"></a>
## Decision theory {#section-27-decision-theory}

A decision $\delta$ incurs loss $L(\theta, \delta)$. The Bayes optimal decision minimizes posterior expected loss:

$$\delta^{*} = \arg\min_{\delta} \mathbb{E}[L(\theta, \delta) \mid y].$$

For squared-error loss $L(\theta, \delta) = (\theta - \delta)^{2}$, the optimal decision is the posterior mean. For absolute-error loss, it is the posterior median. For zero-one loss in classification, it is the posterior mode.

Asymmetric losses are common in practice. A medical screening test with high false-negative cost and low false-positive cost should use a decision boundary shifted toward sensitivity. The cost of collecting new data should also be included where relevant.

**Example.** For an effect-size estimate $\delta$, specify tilted absolute loss

$$L(\theta,\delta)=c_{\mathrm{under}}(\theta-\delta)_{+}+c_{\mathrm{over}}(\delta-\theta)_{+}.$$

Its Bayes estimate is a posterior quantile at level
$c_{\mathrm{under}}/(c_{\mathrm{under}}+c_{\mathrm{over}})$, so a larger
underestimation cost selects a higher quantile. A binary proceed/abandon action
has a different loss table and must be optimized directly; it is not determined
by relabeling an effect-size estimate.

<a id="section-45-sensitivity-and-robustness"></a>
## Sensitivity and robustness {#section-47-sensitivity-and-robustness}

Report how the chosen action changes under alternative priors, likelihoods, and loss values. If the optimal decision is stable across plausible variations, the analysis is robust. If small changes in prior or loss flip the decision, report that sensitivity and distinguish uncertainty that further data could reduce from uncertainty about costs or preferences.

**Example.** An elpd difference of $2$ with paired standard error $1.5$ leaves the predictive ranking uncertain at this scale; these summaries alone do not determine the action. Compare each model's posterior expected loss, retain the declared validation unit, and report prior/loss sensitivity before deciding whether more data are worth their cost.


<a id="section-52-bayesian-model-averaging"></a>
## Bayesian model averaging {#section-54-bayesian-model-averaging}

When multiple models predict similarly well, Bayesian model averaging (BMA) combines their predictions using posterior model probabilities:

$$p(y_{\mathrm{new}} \mid y) = \sum_{m=1}^{M} p(y_{\mathrm{new}} \mid y, M_{m}) \, p(M_{m} \mid y).$$

The posterior model probability $p(M_{m} \mid y)$ is proportional to the marginal likelihood $p(y \mid M_{m})$ times the prior model probability. BMA propagates model uncertainty under the declared model list and priors; it does not guarantee better predictions than selection, especially when the list is misspecified or marginal likelihoods are prior-sensitive. Predictive performance must be validated for the target task.

In practice, computing marginal likelihoods is difficult. Predictive stacking instead combines fitted Bayesian posterior predictive distributions using cross-validated performance and does not require marginal likelihoods. It is especially motivated when the candidate list is M-open or misspecified and different models make complementary predictions.

<a id="section-62-stacking-and-pseudo-bma"></a>
## Stacking and pseudo-BMA {#section-64-stacking-and-pseudo-bma}

Model stacking finds weights $w_{1}, \dots, w_{M}$ that maximize the cross-validated log predictive density of the weighted prediction:

$$\hat{w} = \arg\max_{w} \sum_{i=1}^{n} \log \sum_{m=1}^{M} w_{m} \, p(y_{i} \mid y_{-i}, M_{m}).$$

The weights are constrained to be non-negative and sum to one. When one model is clearly predictively dominant, both stacking and BMA can concentrate on it, subject to their different objectives and priors. Stacking's potential advantage is chiefly in combining complementary predictive strengths under misspecification, and it remains an empirical claim to check by appropriate validation.

Pseudo-BMA weights use exponentiated LOO-CV differences:

$$w_{m} = \frac{\exp(\mathrm{elpd}_{\mathrm{loo}, m})}{\sum_{m'} \exp(\mathrm{elpd}_{\mathrm{loo}, m'})}.$$

These weights are similar to BMA weights but use cross-validation instead of marginal likelihoods. They are sensitive to the scale of elpd and can be unstable when models have similar performance.

<a id="section-76-information-criteria"></a>
## Information criteria {#section-78-information-criteria}

The deviance information criterion (DIC) and widely applicable information criterion (WAIC) provide single-number summaries of predictive performance. WAIC is preferred because it is fully Bayesian and does not depend on a point estimate. For a model with posterior samples $\theta^{(s)}$,

$$\mathrm{WAIC} = -2 \sum_{i=1}^{n} \log \mathbb{E}[p(y_{i} \mid \theta) \mid y] + 2 \, p_{\mathrm{WAIC}},$$

where $p_{\mathrm{WAIC}}$ is an effective parameter count. WAIC approximates LOO-CV for well-specified models but can be unreliable for models with influential observations or poor mixing.


<a id="section-85-expected-utility-and-optimal-design"></a>
## Expected utility and optimal design {#section-87-expected-utility-and-optimal-design}

The decision-theoretic framework extends to experimental design. The expected utility of a design $\xi$ is

$$U(\xi) = \mathbb{E}_{\theta}\left[\mathbb{E}_{y \mid \theta, \xi}\left[U(\theta, \delta^{*}(y))\right]\right],$$

where $\delta^{*}(y)$ is the optimal decision after observing data $y$ from design $\xi$. Bayesian optimal design maximizes $U(\xi)$ over the space of possible designs.

Common utility functions include:

- **Information gain:** $U = \mathrm{KL}(\pi(\theta \mid y) \,\|\, \pi(\theta))$, the Kullback-Leibler divergence between posterior and prior.
- **Precision:** $U = -\det(\operatorname{Cov}(\theta \mid y))$, the negative determinant of the posterior covariance.
- **Decision accuracy:** $U = -L(\theta, \delta^{*}(y))$, the negative loss of the optimal decision.

Bayesian optimal design is computationally demanding because it requires integrating over both parameters and future data. Approximations such as expected improvement and mutual information are widely used.

<a id="section-101-sequential-decisions"></a>
## Sequential decisions {#section-103-sequential-decisions}

In sequential settings, decisions are made adaptively as data accumulate. The optimal policy maximizes the expected total utility over the horizon:

$$V_{t}(h_{t}) = \max_{a_{t}} \mathbb{E}\left[R_{t} + V_{t+1}(h_{t+1}) \mid h_{t}, a_{t}\right],$$

where $h_{t}$ is the history up to time $t$, $a_{t}$ is the action, and $R_{t}$ is the immediate reward. This Bellman equation is solved backward in time. For finite horizons, dynamic programming is exact. For infinite horizons, approximations such as policy iteration and value iteration are used.

In Bayesian sequential analysis, the posterior at each stage serves as the prior for the next stage. The posterior updates recursively, making the framework naturally compatible with Bayesian inference.

<a id="section-111-extended-exercise-discussion"></a>
## Robust Bayesian analysis {#section-126-robust-bayesian-analysis}

Robust Bayesian analysis studies how posterior inferences change when the prior, likelihood, or loss function varies within a specified class. A $\Gamma$-minimax analysis finds the decision that minimizes the maximum posterior expected loss over a class of priors $\Gamma$:

$$\delta^{*} = \arg\min_{\delta} \sup_{\pi \in \Gamma} \mathbb{E}^{\pi}[L(\theta, \delta) \mid y].$$

If the minimax decision is stable across a wide class of priors, the analysis is robust. If the minimax decision changes when the declared prior class or loss changes, report that dependence on modelling choices; it does not alone establish that additional data would resolve the sensitivity.

**Example.** In a clinical trial, the class $\Gamma$ might include all priors for the treatment effect that are symmetric about zero with variance at most $4$. The $\Gamma$-minimax decision is the one that performs best under the worst-case prior in this class. If even the worst-case prior supports proceeding to Phase III, the decision is robust.

<a id="section-134-connection-to-frequentist-methods"></a>
## Connection to frequentist methods {#section-136-connection-to-frequentist-methods}

Bayesian model comparison and decision theory have frequentist counterparts:

- **Cross-validation** corresponds to out-of-sample prediction assessment.
- **Information criteria** correspond to penalized likelihood methods (AIC, BIC).
- **Bayes factors** correspond to likelihood ratio tests, though with different interpretations.
- **Posterior expected loss** corresponds to risk minimization.

The Bayesian framework provides a coherent probabilistic interpretation but does not guarantee better performance. In large samples, Bayesian and frequentist methods often agree. In small samples, the Bayesian approach can incorporate prior information that improves performance, but only if the prior is well-calibrated.


<a id="section-146-reference-models-and-projection"></a>
## Reference models and projection {#section-148-reference-models-and-projection}

In high-dimensional settings, model comparison is complicated by the large number of candidate models. A reference model approach fits a complex, flexible model (the reference) and then projects the posterior onto simpler submodels. The projection finds the submodel parameters that best approximate the reference model's predictions.

**Procedure:**
1. Fit a reference model with all candidate predictors.
2. For each submodel, find the parameters that minimize the expected KL divergence to the reference model's predictive distribution.
3. Compare submodels along a declared size or cost-constrained path, validate the selection procedure, and choose a size under a stated predictive-accuracy versus complexity criterion.

Projection borrows predictive information from the reference model; sparse selection additionally needs a declared model-size or cost criterion and an evaluation that accounts for the search. It is particularly useful in variable selection, where the number of candidate models grows exponentially with the number of predictors.

<a id="section-157-decision-making-under-model-uncertainty"></a>
## Decision-making under model uncertainty {#section-159-decision-making-under-model-uncertainty}

When multiple models are plausible, decision-making should account for model uncertainty. The expected utility under model uncertainty is

$$\mathbb{E}[U] = \sum_{m=1}^{M} p(M_{m} \mid y) \, \mathbb{E}[U \mid y, M_{m}].$$

This formula averages the expected utility under each model, weighted by the posterior model probability. If one model dominates, the average is close to that model's expected utility. If several models are competitive, the average reflects the uncertainty.

Model averaging can propagate uncertainty that hard selection discards, but robustness and predictive improvement are not automatic. Posterior-probability averaging requires marginal likelihoods and justified model priors; cross-validation weights and stacking optimize a different predictive objective. Compare them on the declared task.

<a id="section-167-common-errors"></a>
## Common errors {#section-169-common-errors}

- **Comparing models without a common predictive task.** A model with high elpd for short-term forecasts may be worse for long-term forecasts. Specify the task before comparing.
- **Ignoring prior sensitivity in Bayes factors.** Bayes factors can be arbitrarily manipulated by prior choice. Report sensitivity or use cross-validation.
- **Using symmetric loss by default.** Real decisions are rarely symmetric. Document the loss function and justify its shape.
- **Treating averaging as an automatic improvement.** BMA, stacking, and selection answer different questions and can rank differently under misspecification or prior sensitivity. Validate the resulting predictive distribution and decision consequences.

<a id="section-174-practice-exercises"></a>
## From an observed log score to a predictive claim {#section-208-from-an-observed-log-score-to-a-predictive-claim}

A predictive comparison starts with a random object and a prediction made before that object is revealed. If the object is a person's next measurement, the training information may include earlier measurements from that person. If the object is a new person, that information is unavailable. Those are different conditional distributions, even if the same spreadsheet is used. State the prediction time, available covariates, population, measurement units and training procedure before interpreting a score.

A log score is the logarithm of a probability mass or density evaluated at the observed outcome. Densities require a reference measure. If a continuous response is transformed by a common invertible map $z=h(y)$, its density gains the Jacobian factor $|dy/dz|$. Each model's log score changes by the same term, so the paired difference is unchanged when every model uses the same transformation. Absolute scores across incompatible response measures are not comparable. Omitting a normalizing constant that differs between models changes the question rather than merely saving computation.

Chapter 2's “The observation space determines the evidence constant” makes the analogous distinction for a binomial count and an ordered Bernoulli sequence. The binomial coefficient is constant in the parameter and cancels from a posterior for that parameter. It is nevertheless part of the probability of the count event. Model evidence and predictive scores must describe the same observed event in every candidate, with the appropriate constant retained.

For an exchangeable scalar-response model, exact leave-one-out prediction fits on $y_{-i}$ and evaluates the density of $y_i$. The reported sum estimates performance of a procedure trained on one fewer observation. It is not the log density of the entire dataset under one independently trained predictor, and it does not automatically target forecasting. In a time series, leaving a middle value out while conditioning on its future can be an interpolation exercise. A rolling-origin forecast instead conditions only on information available at the forecast date.

In grouped data, observation-level LOO often predicts another observation in a known group. Its random effect may be informed by the remaining observations in that group. Leave-one-group-out predicts a new group and must integrate its latent effect from the group distribution. Keeping an estimated group effect from the held-out group leaks information. Preprocessing, imputation, feature selection and hyperparameter tuning must also be refitted inside each training split when they use the outcomes or held-out predictors.

For a fixed fitted predictive density $q$, the population target is $E_{P_*}\log q(Y)$ under a declared future distribution $P_*$. When the relevant expectations exist, maximizing this is equivalent to minimizing $\mathrm{KL}(P_*\|q)$, because the term involving the true density is common to candidates. This proper-score identity explains the objective; it supplies neither the unknown distribution nor an automatic finite-data guarantee. If a candidate assigns zero probability to an outcome that can occur, its log score is minus infinity, an important support failure rather than a missing numerical value to discard.

An evaluation report therefore identifies more than the winning number. It records the validation unit, training size, prediction conditioning, support and scoring measure, together with computational diagnostics and the intended deployment distribution. A model can win a short-horizon score while giving inappropriate decisions for another horizon, population or loss.

<a id="section-222-paired-comparisons-have-two-different-uncertainties"></a>
## Paired comparisons have two different uncertainties {#section-224-paired-comparisons-have-two-different-uncertainties}

Let $\ell_{mi}$ be the held-out log score for model $m$ on unit $i$, and put $d_i=\ell_{2i}-\ell_{1i}$. The estimated total advantage is $D=\sum_i d_i$. Pairing matters because a difficult unit usually depresses both models' scores. For random totals $A,B$,
$$\operatorname{Var}(B-A)=\operatorname{Var}(B)+\operatorname{Var}(A)
-2\operatorname{Cov}(A,B).$$
The marginal standard errors alone omit the covariance. Treating them as independent without justification can either exaggerate or understate uncertainty.

If the $d_i$ were independent observations from a common distribution with finite variance, then $\operatorname{Var}(D)=n\operatorname{Var}(d_i)$. Replacing that variance by its sample estimate gives $\widehat{\mathrm{se}}(D)=\sqrt{n s_d^2}$. For the average advantage $D/n$, the corresponding estimate is $s_d/\sqrt n$. A standard error for a total and one for an average differ by a factor of $n$; switching between them changes an interpretation dramatically.

LOO scores share overlapping training sets, so the independent-unit argument is an approximation to their sampling variability. It can work usefully in ordinary settings but is not an exact theorem for every model or dataset. Very small samples, influential units, dependence and model search deserve additional assessment. A standard error also does not choose a practically important difference: specify what score change or downstream loss matters for the task.

For clusters, start by defining the target contrast per cluster. If whole groups are the independent sampled units, sum the relevant within-group score differences to obtain a group contribution and estimate variation across groups. Treating every measurement as independent would multiply the apparent information. Whether to average equally over groups or weight by their population sizes depends on the deployment estimand. Time dependence needs a compatible forecast split and a justified covariance or resampling calculation.

There is also simulation error. Each $\ell_{mi}$ may itself be approximated with posterior samples or numerical integration. More posterior draws can reduce that computational component without creating more independent validation units. Conversely more held-out people cannot rescue badly computed predictive integrals. Report a simulation diagnostic alongside the across-unit comparison, keeping the two sources of uncertainty separate.

Selection introduces a third use of the same data. If many model choices or stacking weights are optimized on one validation set, the resulting maximum is a fitted quantity. Assess the whole selection or weighting procedure on separate outer validation units, or state that only the training objective has been optimized. A bootstrap of already selected scores does not automatically reproduce all the earlier search. The concern depends on what was searched, not simply on the number twenty appearing in an exercise.

A useful small-data warning appears in the proper-model fixture below. Its two paired score differences are identical, so their empirical sample variance is zero. That arithmetic does not establish a zero sampling uncertainty for the prediction procedure. It reflects the symmetry of two particular observations. Showing the actual $d_i$, rather than only a total and a standard error, makes such a failure visible.

<a id="section-241-exact-refitting-importance-ratios-and-waic"></a>
## Exact refitting, importance ratios and WAIC {#section-243-exact-refitting-importance-ratios-and-waic}

For a factorized likelihood and a proper full posterior,
$$p(\theta\mid y_{-i})\propto
\frac{p(\theta\mid y)}{p(y_i\mid\theta)}.$$
This identity assumes that removing unit $i$ produces a proper posterior and that the same unit likelihood and support are used. If its integrals are finite, normalizing the right side gives the familiar inverse-likelihood importance weights. The resulting predictive calculation is a ratio of integrals, not an instruction to average arbitrary unnormalized densities.

Writing $r_i(\theta)=1/p(y_i\mid\theta)$ gives
$$p(y_i\mid y_{-i})=\frac{1}{E_{\theta\mid y}r_i(\theta)}.$$
The integrand can have a very heavy upper tail when the full posterior has moved far from the leave-out posterior. Self-normalized weighted averaging of $p(y_i\mid\theta)$ is algebraically the same identity before smoothing. Good mixing of the full posterior does not guarantee overlap with the leave-out target.

PSIS fits and smooths an upper tail of the importance ratios and supplies a fitted Pareto-shape diagnostic. The shape concerns those ratios under the proposal distribution, not whether the original observations have a Pareto sampling model. Large estimated shape suggests unreliable reweighting. Practical thresholds depend on sample size and effective simulation size; a fitted shape is uncertain, and a threshold is a diagnostic rule rather than a theorem certifying one finite run.

The public companion uses a deliberately transparent GPD maximum-likelihood smoothing variant with explicit tail size and truncation. It is a bounded PSIS-style implementation, not a claim to reproduce the official loo package's fitting method or every production diagnostic. Its exact conjugate refits are the primary numerical reference. A tail-fit failure, invalid weights or warning sends the affected prediction to that reference. In a nonconjugate application, the corresponding fallback is an actual leave-out fit with its own convergence and integration-error checks.

For posterior draws $\theta^{(s)}$, define
$$\mathrm{lppd}=\sum_i\log\left\{S^{-1}\sum_s p(y_i\mid\theta^{(s)})\right\},
\quad
p_{\mathrm{WAIC}}=\sum_i\operatorname{Var}_{s}
\{\log p(y_i\mid\theta^{(s)})\}.$$
Then the estimated log-score scale is $\mathrm{lppd}-p_{\mathrm{WAIC}}$, and deviance-scale WAIC is minus twice that value. State which scale is being compared. The variance is over posterior draws for a fixed unit, not across data points.

One way to understand the approximation is to set $F_i(t)=\log E_{\theta\mid y}\exp\{t\log p(y_i\mid\theta)\}$. Lppd uses $F_i(1)$; exact LOO uses $-F_i(-1)$. When the relevant cumulants and expansion are valid, subtracting $F_i''(0)$ aligns the leading corrections, while higher cumulants explain disagreement. This is a local analytic explanation, not a finite-sample identity. Influence and unstable moments can make the omitted terms important.

WAIC's asymptotic equivalence to Bayesian cross-validation has conditions and can extend beyond correctly specified regular models; it is not restricted to the textbook case of one well-behaved likelihood maximum. Neither a good WAIC number nor PSIS can repair poor posterior sampling. Exact refitting removes the importance approximation, while retaining whatever model, validation-design and numerical limitations remain.

<a id="section-267-proper-evidence-uses-the-entire-prior-and-a-common-obse"></a>
## Proper evidence uses the entire prior and a common observation {#section-269-proper-evidence-uses-the-entire-prior-and-a-common-obse}

For a model $M$, the evidence is
$$p(y\mid M)=\int p(y\mid\theta,M)\pi(\theta\mid M)\,d\theta.$$
The prior must be a probability distribution on the specified support, and the likelihood must be a density or mass for the declared observed event. If an improper prior can be multiplied by an arbitrary constant, its formal evidence inherits that constant. A posterior that happens to be proper does not remove this model-comparison ambiguity.

In a conjugate Normal location model with known variance one, ordered data $y_1,\ldots,y_n$ and prior $\mu\sim N(0,\tau^2)$, let $T=\sum y_i$, $Q=\sum y_i^2$ and $A=n+\tau^{-2}$. Completing the square gives posterior variance $A^{-1}$ and mean $T/A$. Integrating the normalized prior and likelihood gives
$$p(y\mid\tau)=(2\pi)^{-n/2}(1+n\tau^2)^{-1/2}
 \exp\left\{-\frac Q2+\frac{\tau^2T^2}{2(1+n\tau^2)}\right\}.$$
The determinant term is essential. Keeping only the fitted exponential would miss the integration over prior volume.

For ordered data $[-1,1]$, $T=0,Q=2$. Compare $M_0$, which puts a proper point mass on $\mu=0$, with $M_1$, which uses $N(0,\tau^2)$. Both use the same independent Normal likelihood of variance one and the same Lebesgue measure on the two observations. Then
$$p(y\mid M_0)=(2\pi)^{-1}e^{-1},\quad
\mathrm{BF}_{10}=(1+2\tau^2)^{-1/2}.$$
The point-mass model is an actual proper probabilistic model, not an omitted normalizing constant masquerading as a prior.

The alternatives $\tau=1$ and $\tau=3$ give Bayes factors $1/\sqrt3$ and $1/\sqrt{19}$. The posterior mean remains zero, but the evidence changes because different prior predictive distributions assign different density to the observation. This is a concrete proper-prior sensitivity calculation. It does not mean that the data have selected a universally correct prior width.

A genuinely irrelevant parameter is different. If the likelihood does not depend on $\eta$ and $\pi(\eta\mid\theta,M)$ is proper and normalized for each $\theta$, integrating it gives one. Merely adding that parameter cannot penalize the evidence. A weakly identified but relevant parameter need not integrate out this way. Distinguishing those cases prevents a vague “unused parameters are always penalized” account of Bayes factors.

With prior model probabilities $q_m$, posterior model probabilities are proportional to $q_mp(y\mid M_m)$. The denominator sums this product over the complete declared list. Selecting a largest Bayes factor without reporting its reference, prior odds and model list suppresses part of the calculation. Twenty identical candidate predictive laws provide a simple counterexample to an automatic inflation claim: all their Bayes factors against an identical reference equal one.

<a id="section-289-evidence-integration-is-a-computational-problem-of-its-"></a>
## Evidence integration is a computational problem of its own {#section-291-evidence-integration-is-a-computational-problem-of-its-}

An evidence is a number conditional on the observed data and fixed model specification. Numerical uncertainty in estimating it differs from the variation that would arise under repeated datasets. A posterior model probability already represents uncertainty among the declared models; it is not a standard error attached to a numerical integration routine.

Prior Monte Carlo uses $Z=E_{\pi}L(\theta)$ for the likelihood $L$. This identity is correct under the normalized proper prior, but may be inefficient when appreciable likelihood lies in a tiny part of prior space. Most prior draws can then contribute almost nothing. A small empirical variance among those nearly zero contributions is not evidence that the important region was explored.

A posterior average of likelihood is a different quantity:
$$E_{\theta\mid y}L(\theta)=
\frac{\int L(\theta)^2\pi(\theta)\,d\theta}{Z}.$$
It is generally not $Z$. Averaging a familiar likelihood over a convenient set of posterior draws therefore does not automatically estimate evidence. The harmonic identity $E_{\theta\mid y}\{1/L(\theta)\}=1/Z$ needs the corresponding support and integrability conditions and can have enormous or infinite variance. Its algebraic correctness is not a recommendation to use an unstable estimator.

For another explicit identity, define $Z_t=\int L(\theta)^t\pi(\theta)\,d\theta$ for $0\le t\le1$. Assume these normalizers are finite and positive and that differentiation can be interchanged with integration with integrable log likelihood along the path. Then
$$\frac{d}{dt}\log Z_t=E_t\log L(\theta),
\qquad
\log Z_1-\log Z_0=\int_0^1 E_t\log L(\theta)\,dt.$$
With a normalized proper prior, $Z_0=1$. The derivation follows by differentiating $L^t$ and dividing its integral by $Z_t$. An unnormalized prior would leave the starting constant unknown.

An implementation of this path identity must specify temperatures, targets, samplers, integration accuracy and error assessment. Poor overlap or abrupt changes near the prior end can be important. The identity alone supplies none of those settings, and this chapter does not claim to execute a general path-sampling algorithm. The proper Normal fixture instead has an exact normalizer, giving a genuine reference against which a proposed numerical evidence method could be tested.

For finite model lists, calculate posterior model probabilities on the log scale. Add $\log q_m$ to each log evidence and normalize with a log-sum-exp. A zero prior model probability is an intentional exclusion, not a small floating-point number. Common density constants can cancel in a Bayes factor only after confirming that they really are common under the same observation measure. Different selected data subsets or omitted nuisance normalizers can destroy that cancellation.

<a id="section-310-averaging-and-predictive-weighting-optimize-different-o"></a>
## Averaging and predictive weighting optimize different objects {#section-312-averaging-and-predictive-weighting-optimize-different-o}

BMA integrates posterior model uncertainty under the stated model list and proper priors. It combines each model's full-data posterior predictive distribution with its posterior model probability. In the two-model fixture with equal prior model probabilities, the posterior weight of $M_1$ is
$$w_1^{\mathrm{BMA}}=\frac1{1+\sqrt{1+2\tau^2}}.$$
The prediction is a mixture of $N(0,1)$ from $M_0$ and $N(0,1+v)$ from $M_1$, with $v=(2+\tau^{-2})^{-1}$. It is not obtained by replacing the two variances by one weighted average and assuming a Normal result.

For predictive stacking, first compute actual held-out fitted predictive densities $q_{mi}=p(y_i\mid y_{-i},M_m)$. The objective is the log density of the mixture,
$$J(w)=\sum_i\log\left(\sum_m w_mq_{mi}\right),\quad w_m\ge0,\quad\sum_mw_m=1.$$
It is not the weighted average of model log scores. The logarithm is outside the mixture because future predictions are made with the mixture distribution.

For two models, put $a_i=q_{1i}$ and $b_i=q_{2i}$. On the interval where the mixture is positive,
$$J'(w)=\sum_i\frac{a_i-b_i}{wa_i+(1-w)b_i},\quad
J''(w)=-\sum_i\frac{(a_i-b_i)^2}{\{wa_i+(1-w)b_i\}^2}\le0.$$
Thus the optimization is concave. Check endpoint derivatives as well as an interior zero; a valid optimum can be a boundary weight. Identical predictions make weights nonidentifiable even though the predictive mixture is well defined.

The proper fixture gives an exact worked boundary case. Let $a=\tau^2/(1+\tau^2)$. On leaving either observation out under $M_1$, the posterior mean is the opposite observation times $a$, and the predictive variance is $1+a$. Each score difference relative to $M_0$ is
$$d=-\tfrac12\log(1+a)-\tfrac a2<0.$$
Both held-out densities therefore favor $M_0$, so stacking puts all mass on $M_0$. This conclusion follows from two genuinely specified model fits, not a table of arbitrary fixed forecasts.

Plain pseudo-BMA instead gives $M_1$ weight $\exp(2d)/\{1+\exp(2d)\}$, using the total held-out score. Subtract the maximum log score before exponentiating to avoid overflow. The formula remains sensitive to the number and weighting of validation units. Bootstrap variants target another uncertainty calculation and should be named separately from this unmodified formula.

BMA, stacking and pseudo-BMA therefore need not agree even in this exactly calculable example. No method's training objective guarantees improved future predictions under misspecification. If stacking weights, model sizes or candidate priors were searched using the same held-out scores, validate that entire adaptive procedure on outer units before making a performance claim.

<a id="section-333-why-the-normal-companion-has-an-exact-tail-warning"></a>
## Why the Normal companion has an exact tail warning {#section-335-why-the-normal-companion-has-an-exact-tail-warning}

With known observation variance one and prior $\mu\sim N(0,9)$, the full posterior has
$$v_n=(n+1/9)^{-1},\qquad m_n=v_n\sum_j y_j.$$
Deleting observation $i$ gives $v_{-i}=(n-1+1/9)^{-1}$ and $m_{-i}=v_{-i}\sum_{j\ne i}y_j$. Integrating one future Normal observation gives
$$\log p(y_i\mid y_{-i})=
-\tfrac12\log\{2\pi(1+v_{-i})\}
-\frac{(y_i-m_{-i})^2}{2(1+v_{-i})}.$$
These are actual refitted posteriors. The formula also covers $n=1$: the empty training set returns the original proper prior.

There is an analytic diagnostic beyond a fitted Pareto shape. Under the full posterior, $r_i(\mu)$ is proportional to $\exp\{(\mu-y_i)^2/2\}$. Its $q$th moment integrates a quadratic exponential with coefficient $-\tfrac12(v_n^{-1}-q)$ on $\mu^2$. The integral is finite exactly when $qv_n<1$. At equality, a nondecaying constant or linear exponential still has an infinite integral over the real line.

Transforming the Gaussian tail by this quadratic exponential gives a regularly varying weight tail with Pareto shape $k=v_n$. The Gaussian survival probability has leading power $r^{-1/v_n}$, with the mean-dependent factors slowly varying on that scale. This tail calculation concerns the unsmoothed ratios, independently of a finite-sample GPD fit.

For thirty observations, $v_n=9/271$, so the first and second raw-weight moments exist. For the adverse dataset $[8]$, the full posterior is $N(7.2,0.9)$, giving $k=0.9$. The raw mean is finite but the variance is infinite. An ordinary independent-sample variance formula for the raw importance mean is therefore not justified, even though the posterior draws themselves are independent and Normal.

Leaving the sole observation out gives predictive $N(0,10)$ and exact log density
$$-\tfrac12\log(20\pi)-3.2.$$
This is the reference and fallback prediction. It is not the Normal density centered at the full-data posterior mean. Keeping the observation in the training posterior would answer a different, easier prediction question.

The public experiment preserves the original seeds and draw counts, reports exact and approximate predictions separately, and reports whether the fitted diagnostic crosses its stated warning threshold. When a warning triggers, the delivered score uses the analytic refit; the report still retains the attempted approximation and its error. A successful fallback must never be presented as evidence that the original importance approximation succeeded.

<a id="section-355-a-loss-function-specifies-an-action-space"></a>
## A loss function specifies an action space {#section-357-a-loss-function-specifies-an-action-space}

A posterior distribution is an input to a decision, not the decision itself. For squared loss over real-valued estimates, expanding $E(\theta-a)^2$ around the posterior mean proves the minimizer is $E\theta$, provided the required moment exists. For absolute loss, the sign of the risk's one-sided derivative gives the median condition. Neither calculation defines a binary action such as proceeding with a trial.

For tilted absolute loss, the derivative away from atoms is
$$c_{\mathrm{over}}F(a)-c_{\mathrm{under}}\{1-F(a)\}.$$
Setting it to zero gives the quantile level $c_{\mathrm{under}}/(c_{\mathrm{under}}+c_{\mathrm{over}})$. At an atom use the corresponding subgradient inequalities. Positive costs are required for this usual interior quantile interpretation; zero costs can leave a one-sided or nonunique problem. The loss and permitted actions must be stated before the theorem is applied.

For a concrete binary model let the unknown state be $H\in\{0,1\}$ with posterior probability $q$ of state one. Action $A_0$ incurs loss two when $H=1$ and zero otherwise. Action $A_1$ incurs loss one when $H=0$ and zero otherwise. Their risks are $2q$ and $1-q$. Thus choose $A_1$ for $q>1/3$, choose $A_0$ for $q<1/3$, and declare a tie at equality.

If randomization is allowed, mixing the two actions gives a convex combination of these risks. It cannot improve on the smaller risk at a fixed posterior, although randomization may matter in other minimax problems. The action space in this fixture is the two deterministic actions unless randomization is explicitly introduced. A Normal posterior mean is not being relabeled as a binary classification rule.

The original pharmaceutical example uses a different, explicitly monetary utility: proceed yields $500$ million if the effect exceeds $0.2$, minus the $100$ million cost, while abandon yields zero. Its threshold is a posterior efficacy probability of $0.2$. That differs from both the effect-estimation quantile and the binary fixture's probability threshold of $1/3$. The difference is produced by different loss tables, not an inconsistency in Bayesian updating.

Sensitivity to loss is not necessarily uncertainty that more outcome data can remove. Even if the state were known, changing the relative costs of two actions can change which is optimal. Report uncertainty about the state separately from disagreement about costs or preferences. The value of more data depends on how it could change the chosen action under a specified loss.

<a id="section-371-model-averaged-decisions-need-a-shared-action"></a>
## Model-averaged decisions need a shared action {#section-373-model-averaged-decisions-need-a-shared-action}

Expected utility under posterior model uncertainty averages each model's utility for the same available action. It does not give permission to choose one action when one model is true and another when another model is true, unless the decision maker will actually learn that model label before acting. That distinction separates an achievable decision from an oracle comparison.

Using the binary loss table, suppose two models have posterior state probabilities $q_1=1/5$ and $q_2=4/5$, with posterior model weights one half each. Model one prefers $A_0$, at risk $2/5$; model two prefers $A_1$, at risk $1/5$. Averaging those two minimized risks gives $3/10$, but it assumes knowledge of which model governs the state before selecting the action.

Without that knowledge, model averaging gives state probability $1/2$. The available risks are one for $A_0$ and one half for $A_1$, so the actual Bayes action is $A_1$ at risk one half. This is worse than the model-informed oracle risk, as expected. Randomly choosing the two action labels with equal probabilities would have risk $3/4$, and is not the solution either.

More generally, for common actions,
$$\min_a\sum_m w_mR_m(a)\ \ge\
\sum_mw_m\min_aR_m(a).$$
For every fixed action, each component risk exceeds that component's minimum; averaging and then minimizing proves the inequality. It is a useful upper bound on the value of learning the model label, under the declared model probabilities and losses. It is not a guarantee that an experiment can reveal that label.

For squared-error estimation in a common parameter space, a model-averaged posterior mean can happen to be the weighted average of model-specific means. That special linear identity does not extend automatically to medians, thresholds, constrained actions or nonlinear utilities. Different parameter definitions across models also need a common scientifically meaningful target before their summaries can be averaged.

Stacking weights are fitted predictive-combination weights, not posterior probabilities of model truth. One can compute expected loss under the resulting predictive mixture for a declared outcome-based decision. One should not silently reinterpret those weights as posterior model probabilities for latent states or causal effects absent from the predictive task. The exact comparison and decision fixtures expose these different roles rather than promising that one set of weights solves every problem.

<a id="section-388-complete-a-small-experimental-design-calculation"></a>
## Complete a small experimental-design calculation {#section-390-complete-a-small-experimental-design-calculation}

Return to the binary state and losses above, now with current probability $q=1/2$. There are two designs: act immediately, or purchase one binary signal $X$. The signal law is
$$P(X=1\mid H=1)=3/4,\qquad P(X=1\mid H=0)=1/4.$$
Conditional on the fixed state, repeated signals, if purchased in a sequential extension, are independent with this same law. This supplies the missing observation model rather than simply naming “information gain.”

For one signal, $P(X=1)=1/2$. Bayes' rule gives posterior probabilities $3/4$ after a positive signal and $1/4$ after a negative one. The optimal actions are respectively $A_1$ and $A_0$, with risks $1/4$ and $1/2$. The expected terminal risk is therefore $3/8$. Acting immediately has risk $1/2$, so the expected value of that information, measured as loss reduction before paying, is $1/8$.

If the signal costs $1/16$ in the same loss units, purchasing it gives expected total loss $7/16$, smaller than $1/2$. If its cost exceeded $1/8$, immediate action would be preferable; equality gives indifference. The optimal design depends on its observation law and cost, not merely on the label “more informative.”

This calculation averages over possible data that have not yet been seen. Choosing the best design separately for each realized future signal and then averaging would use information unavailable when choosing the design. The order is: select the experiment now, update after its result, and then choose the terminal action. Nested computation in larger design problems must preserve that order.

Other utilities define other design objectives. Expected information gain targets a distributional change in the posterior, while a precision criterion targets an uncertainty summary in stated coordinates. Neither is automatically equivalent to reduction in the terminal loss relevant to a stakeholder. An information gain can be positive while no possible posterior changes the optimal action, yielding zero decision value before cost.

<a id="section-402-a-finite-belief-state-recursion-with-an-explicit-horizo"></a>
## A finite belief-state recursion with an explicit horizon {#section-404-a-finite-belief-state-recursion-with-an-explicit-horizo}

For the same signal law, posterior probability $q$ is a sufficient state because it summarizes the history for predicting the next signal and the terminal loss. Define $V_h(q)$ as the smallest expected remaining loss when at most $h$ signals can still be purchased, each costing $c$. The terminal value is
$$V_0(q)=\min(2q,1-q).$$
The next positive-signal probability is $s(q)=(1+2q)/4$, and Bayes updates give
$$q_+(q)=\frac{3q}{1+2q},\qquad
q_-(q)=\frac{q}{3-2q}.$$
Both denominators are positive for $0\le q\le1$, so boundary beliefs zero and one are included.

The available actions are stop and take whichever terminal action minimizes current risk, or sample once and continue. For $h\ge1$,
$$V_h(q)=\min\left[
V_0(q),\ c+s(q)V_{h-1}\{q_+(q)\}
+\{1-s(q)\}V_{h-1}\{q_-(q)\}\right].$$
This is an exact finite-horizon recursion for the fully specified fixture. It does not claim that an arbitrary continuous-state control problem has been solved numerically.

With $q=1/2,c=1/16,h=1$, it recovers $V_1(1/2)=7/16$. To allow two signals, calculate the next stage as well. At $q=3/4$, another signal costs $1/16$ and leads to terminal expected risk $1/4$, so stopping at risk $1/4$ is better. At $q=1/4$, the next positive probability is $3/8$, and its updated beliefs are $1/2$ and $1/10$. Sampling has loss
$$1/16+(3/8)(1/2)+(5/8)(1/5)=3/8,$$
which improves on the current risk $1/2$.

Thus
$$V_2(1/2)=1/16+\tfrac12(1/4)+\tfrac12(3/8)=3/8.$$
The optimal policy purchases the first signal, stops after a positive result, and purchases a second after a negative result. These exact branches specify both the state update and the action rule. Two signals are an opportunity, not a requirement to sample on every path.

In a general problem, a posterior is a sufficient control state only when it contains the information needed for future transitions and rewards; unknown dynamics, resource constraints or path-dependent costs may require additional state variables. Infinite-horizon value iteration also needs convergence and optimality conditions. A finite demonstration cannot certify every sequential workflow named in the original chapter.

<a id="section-427-robust-prior-classes-and-sparse-projections-need-declar"></a>
## Robust prior classes and sparse projections need declared choices {#section-429-robust-prior-classes-and-sparse-projections-need-declar}

A robust Bayesian calculation must define its class and action space. Use $\Gamma=\{\operatorname{Bernoulli}(q):q\in[1/4,3/4]\}$ for the binary state, with the same signal likelihood and loss. After one observed positive signal, the posterior probability is $3q/(1+2q)$, a strictly increasing function. Its range is the entire interval $[1/2,9/10]$, not a guessed set of Normal perturbations.

For action $A_0$, the worst posterior risk over this class is $2(9/10)=9/5$; for $A_1$, it is $1-1/2=1/2$. The deterministic $\Gamma$-minimax action is therefore $A_1$. Every individual posterior in this updated class also chooses $A_1$, since its probability exceeds $1/3$. The robust conclusion is conditional on this specified class, likelihood and loss; expanding the class can change it.

A finite grid of priors would approximate an interval class only with additional justification. Here monotonicity makes the endpoint maximizations exact for the whole interval. If randomized actions were admitted, their worst risk would have to be optimized over that larger action space; do not silently switch between deterministic and randomized minimax rules. Nor does a single minimax action validate every member of its prior class as a plausible scientific model.

Projection requires another explicit target. Consider independent Normal responses of variance one, design rows $(1,-1),(1,0),(1,1)$, observed responses $(-1,0,1)$ and proper prior $\beta\sim N_2(0,I)$. The reference model is $y\mid\beta\sim N_3(X\beta,I)$. Its actual conjugate posterior has
$$V=(I+X^\mathsf TX)^{-1}=\operatorname{diag}(1/4,1/3),
\qquad m=VX^\mathsf Ty=(0,2/3).$$
This supplies a reference fit, not a list of fixed forecast means without a likelihood.

Project each reference posterior draw onto an intercept-only submodel with the same known variance. At the three declared design points, minimize the average KL between the conditional Normal likelihoods. Its loss is
$$\frac1{2\cdot3}\sum_i(\beta_0+\beta_1x_i-a)^2.$$
Since the design values sum to zero, the minimizing intercept is $a=\beta_0$. The draw-wise projection error is $\beta_1^2/3$ and its posterior expectation is
$$(m_1^2+V_{11})/3=(4/9+1/3)/3=7/27.$$
Here $m_1$ and $V_{11}$ denote the slope coordinate and its variance. The projected intercept distribution is $N(0,1/4)$.

The full reference model has projection error zero. Minimizing approximation error alone therefore chooses it, supplying no sparse-model rule. Charge a cost $\lambda$ for retaining the slope: the intercept-only objective is $7/27$ and the full-model objective is $\lambda$. A cost $1/4$ selects the full model, while $1/3$ selects the intercept-only model; equality at $7/27$ is a tie.

This is a fixed two-model cost path and an exact draw-wise conditional-likelihood projection. It is not KL between the marginal posterior predictive mixtures, and it does not estimate performance after a variable-selection search. A data-chosen path or size needs outer validation of the entire selection procedure. General projection-predictive searches and their cross-validation are explicit imports from projpred, rather than an implementation claimed by this finite algebraic fixture.

<a id="section-450-solutions-declared-model-comparison-and-decision-fixtur"></a>

## Summary

<a id="section-205-looking-backward-and-forward"></a>
This chapter completed the Bayesian workflow cycle: generative modeling, computation, diagnostics, predictive criticism, and decision. The preceding chapters developed each stage in detail: *Begin with the Generative Story* established modeling principles; *Conjugacy as an Exact Computational Benchmark* provided validation targets; *Hierarchical Models and Partial Pooling* extended models to grouped data; *Monte Carlo Estimates and Their Error* quantified simulation uncertainty; *Metropolis–Hastings from an Invariant Kernel* and *Gradient-Based Sampling* provided algorithms; *Diagnostics Are Necessary, Never Sufficient* checked sampler health; and *Predictive Criticism* evaluated model fit. Together they form a coherent workflow for computational Bayesian modeling.
<a id="section-206-from-an-observed-log-score-to-a-predictive-claim"></a>

## Exercises {#section-176-practice-exercises}

<a id="section-176-exercise-1"></a>
### Exercise 1 {#section-178-exercise-1}

Two models evaluated on the same observations have $\mathrm{elpd}_{\mathrm{loo}}$ estimates of $-120$ and $-115$ with marginal standard errors $5$ and $6$. What can you conclude about the predictive difference, and what additional information is needed to estimate its standard error?

**Solution.** The second model has the larger estimated ELPD by $5$. The marginal standard errors do not determine the standard error of that difference, because both models use the same observations. Obtain the paired pointwise differences and, for the usual observation-level approximation, compute $\sqrt{n\,s_d^2}$. Also inspect the validation design and predictive diagnostics before judging whether the difference matters for the intended task.

<a id="section-182-exercise-2"></a>
### Exercise 2 {#section-184-exercise-2}

A drug trial replaces squared-error loss for an effect estimate by tilted absolute loss with underestimation cost $c_{\mathrm{under}}$ and overestimation cost $c_{\mathrm{over}}$. Which posterior summary minimizes this loss? Why must a separate proceed/abandon decision use its own action loss table?

**Solution.** For
$L(\theta,\delta)=c_{\mathrm{under}}(\theta-\delta)_+
+c_{\mathrm{over}}(\delta-\theta)_+$, posterior risk is minimized by a
posterior quantile at level
$c_{\mathrm{under}}/(c_{\mathrm{under}}+c_{\mathrm{over}})$ (with the usual
interval of minimizers if the distribution has a flat or atomic quantile).
When underestimation costs more, this level exceeds one half. A proceed/abandon
action compares posterior expected losses for those two actions; its threshold
depends on the declared costs and clinical states and need not equal this
effect-estimation quantile.

<a id="section-197-exercise-3"></a>
### Exercise 3 {#section-199-exercise-3}

A researcher computes Bayes factors for $20$ candidate models and reports the one with the highest value. What is the risk?

**Solution.** Selecting the largest of data-dependent Bayes factors can exaggerate apparent support, but the number $20$ alone implies no automatic inflation: identical proper candidate and reference predictive laws give every Bayes factor equal to one. State the common reference, proper priors, prior model probabilities and selection protocol; posterior model odds multiply Bayes factors by prior odds, while posterior model probabilities normalize prior-weighted evidences over the declared list. If models or predictive weights were tuned on validation data, assess that entire procedure on independent appropriate validation units or with nested cross-validation. Model averaging and regularization are not automatic cures, and held-out prediction answers a different question from posterior model support.

<a id="section-203-looking-backward-and-forward"></a>

<a id="section-113-extended-exercise-discussion"></a>
<a id="section-113-exercise-4-discussion"></a>
### Exercise 4 (Discussion) {#section-115-exercise-4-discussion}

A pharmaceutical company must decide whether to proceed to Phase III trials. The posterior for the drug effect is $\mathcal{N}(0.3, 0.1^{2})$. The cost of Phase III is $\$100$ million. If the drug is effective (effect $> 0.2$), the expected revenue is $\$500$ million. If ineffective, revenue is $\$0$. What is the optimal decision under squared-error loss? Under the true utility?

**Solution.** Under squared-error loss, the optimal estimate of the effect is the posterior mean $0.3$. This estimation rule alone does not specify a proceed-or-abandon decision. For the stated monetary utility, assume abandoning has value zero and proceeding incurs the cost regardless of efficacy. Expected net value, in millions, is

$$\mathbb{E}[U] = \Pr(\theta > 0.2) \times 500 - 100.$$

With $\theta \sim \mathcal{N}(0.3, 0.1^{2})$, $\Pr(\theta > 0.2)=\Phi(1)\approx 0.8413$, giving expected net value about $320.7$ million. Proceeding maximizes this specified utility. If the posterior were $\mathcal{N}(0.25, 0.15^{2})$, the probability would be $\Phi(1/3)\approx 0.6306$ and expected net value about $215.3$ million. The decision threshold is $\Pr(\theta>0.2)>100/500=0.2$, with indifference at equality. This is a simplified utility calculation under the given assumptions; the posterior mean alone does not determine its answer.


<a id="section-124-robust-bayesian-analysis"></a>

<a id="section-512-exercises-optional-tail-and-action-space-extensions"></a>
### Exercise 5 — CBM-09-E5. A threshold is not a raw-moment theorem {#section-516-cbm-09-e5-a-threshold-is-not-a-raw-moment-theorem}

Change the one-observation Normal case to prior $N(0,1)$, retaining data $[8]$ and known observation variance one. Derive the full posterior, exact LOO predictive and raw importance-tail shape. Which first and second raw-weight moments exist, and what does a warning threshold of $0.7$ fail to guarantee?

<a id="section-518-cbm-09-e6-randomization-changes-a-robust-action-space"></a>
### Exercise 6 — CBM-09-E6. Randomization changes a robust action space {#section-520-cbm-09-e6-randomization-changes-a-robust-action-space}

Before any signal, use the binary state, prior interval $q\in[1/4,3/4]$ and losses $2H$ for $A_0$ and $1-H$ for $A_1$. Find the deterministic minimax action and risk. Then permit a randomized action choosing $A_1$ with probability $w$. Find its minimax $w$ and risk, stating why the deterministic result was not wrong.

<a id="section-522-solutions-optional-tail-and-action-space-extensions"></a>

## Solutions: declared model comparison and decision fixtures {#section-452-solutions-declared-model-comparison-and-decision-fixtur}

This is the completed bounded mathematical reference for CBM-CLAIM-042, originally located at content/books/computational-bayesian-modeling/model-comparison-and-decision.md:26. The fixtures supply the previously missing model, prior, design, action and projection inputs. They are exact source calculations, not reported software fits or evidence that every general workflow has been implemented.

<a id="section-454-proper-competing-models-and-actual-leave-out-fits"></a>
### Proper competing models and actual leave-out fits {#section-456-proper-competing-models-and-actual-leave-out-fits}

The observation is the ordered vector $y=(-1,1)$ in $\mathbb R^2$ with Lebesgue density. Conditional observations are independent $N(\mu,1)$. Model $M_0$ uses the proper point prior $\mu=0$; $M_1$ uses the proper prior $N(0,\tau^2)$, for the two separate sensitivity specifications $\tau=1$ and $\tau=3$. Prior model probabilities are $(1/2,1/2)$. These priors, including the point mass, are normalized probability distributions.

For each specification, the exact full posterior under $M_1$ is $N(0,(2+\tau^{-2})^{-1})$; under $M_0$ it remains a point mass at zero. The evidences are $(2\pi)^{-1}e^{-1}$ and that value divided by $\sqrt{1+2\tau^2}$. Thus the Bayes factor is $1/\sqrt{1+2\tau^2}$ and the posterior probability of $M_1$ is $1/\{1+\sqrt{1+2\tau^2}\}$. The full-data BMA prediction is the explicit two-Normal mixture in the exposition.

The validation unit is one observation, predicting another exchangeable observation after training on one observation. Holding out $1$ leaves training value $-1$ and posterior mean $-a$; holding out $-1$ gives mean $a$, with $a=\tau^2/(1+\tau^2)$. Each predictive variance is $1+a$. Both actual pointwise differences are $d=-\log(1+a)/2-a/2$. Their sum is $2d$ and their empirical paired standard error is zero. That zero is a warning about the two-point symmetric dataset, not a trustworthy general uncertainty certificate.

Both held-out densities favor $M_0$, so stacking's optimal $M_0$ weight is one. Plain pseudo-BMA's $M_1$ weight is $\exp(2d)/\{1+\exp(2d)\}$; it is positive, unlike the stacking weight. These results compare posterior model weighting with predictive weighting for actual specified fits. They make no external-validation claim about a searched candidate list. Numerical evidence estimators, larger searches and bootstrap weighting remain separate algorithms, not fictional outputs of this calculation.

<a id="section-464-fully-specified-design-and-sequential-model"></a>
### Fully specified design and sequential model {#section-466-fully-specified-design-and-sequential-model}

The state is $H\in\{0,1\}$, initially Bernoulli with probability one half. The two terminal deterministic actions have losses $L(H,A_0)=2H$ and $L(H,A_1)=1-H$. A purchased signal has positive probability $3/4$ in state one and $1/4$ in state zero; signals are conditionally independent. The price is $1/16$ per signal, and the horizon is at most two signals.

The posterior update and stopping recursion in the exposition give immediate risk $1/2$, one-signal risk $7/16$ and two-signal optimal risk $3/8$. The full policy samples first, stops with $A_1$ after a positive signal, and samples again after a negative signal. At the last stage choose the lower-risk terminal action using its updated probability. These values include acquisition costs. They do not assume that every path uses the entire budget.

For model-uncertain decisions the separate fixture uses model weights $(1/2,1/2)$ and state probabilities $(1/5,4/5)$ with the same terminal loss. The model-averaged action is $A_1$ with risk $1/2$; the model-informed oracle risk is $3/10$. Those are different information states, not two competing calculations of the same Bayes risk.

<a id="section-472-a-complete-robust-class-and-a-complete-reference-projec"></a>
### A complete robust class and a complete reference projection {#section-474-a-complete-robust-class-and-a-complete-reference-projec}

For robustness use the entire prior interval $\Gamma=\{\operatorname{Bernoulli}(q):q\in[1/4,3/4]\}$, the declared signal law and one observed positive signal. Posterior probabilities range over $[1/2,9/10]$ by the explicit monotone update. Worst deterministic risks are $9/5$ for $A_0$ and $1/2$ for $A_1$, so $A_1$ is the class-minimax action and agrees with every individual posterior's optimal action. This covers the entire interval, not a finite grid promoted to a continuum result.

For projection use the three declared design rows $(1,-1),(1,0),(1,1)$, responses $(-1,0,1)$, known variance one and reference prior $N_2(0,I)$. The reference posterior mean is $(0,2/3)$ and covariance $\operatorname{diag}(1/4,1/3)$. Each draw projects to the intercept equal to its reference intercept. Average conditional-likelihood KL over these three design points is $\beta_1^2/3$, giving posterior mean error $7/27$; the full reference error is zero.

The candidate path is fixed: retain the intercept only or retain both coefficients. Cost is $\lambda$ for a retained slope, so the objectives are $7/27$ and $\lambda$. Costs $1/4$ and $1/3$ select different sizes, with equality at $7/27$ giving a tie. This is an explicitly cost-defined source calculation, not a search validated on new data. General projection-predictive variable searches and search-aware validation remain precise external imports/templates.

<a id="section-480-scope-disposition-and-comparison-rubric"></a>
### Scope disposition and comparison rubric {#section-482-scope-disposition-and-comparison-rubric}

CBM-CLAIM-042 is completed at the level of these fully specified finite mathematical fixtures: evidence sensitivity, BMA, plain pseudo-BMA, stacking, design, sequential action, interval-prior robustness and draw-wise projection all have actual inputs and derived reference answers. Broader workflows remain named templates or imports where no implementation is supplied; there is no new requirement to execute every optional general algorithm.

A complete comparison preserves the common observation event and its normalizing constants, computes the actual training refits, names model priors and distinguishes posterior model probabilities from predictive weights. It states the validation unit, scope of the two-point standard-error calculation and absence of outer evaluation. For decisions it names the state, loss, costs, available information and horizon. For projection it states the reference posterior, KL target and size rule. None of these checks is discharged by the separate Normal LOO companion or by maximizing simulated fixed scores.

<a id="section-486-solutions-normal-exact-loo-and-tail-warning-companion"></a>

## Solutions: Normal exact LOO and tail-warning companion {#section-488-solutions-normal-exact-loo-and-tail-warning-companion}

COMM06-CASE-03-LOO-COMPANION is additional to the book's minimum three public cases. Its original scope locator is content/books/computational-bayesian-modeling/model-comparison-and-decision.md:14, the predictive-comparison interface. The bounded internal workflows at lines 1225–1291 and their helper were reference inputs for this public package; historical internal passes are not its current execution evidence.

<a id="section-490-data-target-and-algorithm-passport-in-prose"></a>
### Data, target and algorithm passport in prose {#section-492-data-target-and-algorithm-passport-in-prose}

The primary data generator is NumPy's explicit Generator(PCG64(20260906+63)), taking thirty Normal observations with mean $0.4$ and SD one. The model has independent Normal likelihood with known SD one, prior $\mu\sim N(0,3^2)$ and support $\mathbb R$. Draw thirty thousand independent exact full-posterior means with Generator(PCG64(20260906+64)); there is no warmup, thinning, chain adaptation or MCMC mixing claim.

The changed case is the literal one-observation dataset $[8]$, with fifty thousand independent full-posterior draws and seed $20260906+65$. Every held-out unit is an observation and all posterior refits are analytic. This is an exact comparison of predictive integrals under one model, not two fitted-model selection or a Bayes-factor pipeline.

The published algorithm is GPD-MLE PSIS-style-v1. Tail size is $\min(\lfloor S/5\rfloor,\lfloor3\sqrt S\rfloor)$, fitted excess location is fixed at zero, replacement quantiles use $(j-1/2)/M$, smoothing is capped at the largest raw weight, and a final cap is $S^{3/4}$ times mean smoothed weight. It is deliberately not described as the official loo implementation. Normalized smoothed weights are multiplied by likelihood values in the predictive calculation.

Exact Normal refits and independent one-dimensional quadrature provide the numerical references. The adverse analytic reference is $-\log(20\pi)/2-3.2$, with raw tail shape $0.9$ and infinite raw-weight variance. Warning or tail-fit failure invokes the analytic refit; the attempted PSIS-style output remains separately labeled. A valid fallback does not overwrite a failed approximation's diagnostic.

<a id="section-500-declared-tolerances-errors-and-reproduction-boundary"></a>
### Declared tolerances, errors and reproduction boundary {#section-502-declared-tolerances-errors-and-reproduction-boundary}

Deterministic numerical checks require analytic-versus-quadrature log-density differences below $10^{-8}$; the adverse analytic and delivered fallback values must agree with the explicit prior-predictive formula within $10^{-12}$. The variance reference $0.9$ uses tolerance $10^{-14}$. These are floating-point regression tolerances against exact formulas, not proofs of a general integration routine.

The preserved seeded primary criteria are maximum PSIS-style pointwise error below $0.04$, total ELPD error below $0.12$, fitted maximum shape below $0.7$, and WAIC log-score difference from exact LOO below $0.5$. The adverse fitted shape criterion is greater than $0.7$, with the exact fallback checked separately. These are stochastic regression criteria for the fixed generators, versions, seeds and sample sizes. A realized failure must be reported, not cured by silently changing the seed or widening a tolerance.

The usual sample-size diagnostic threshold is $\min(0.7,1-1/\log_{10}S)$, equal to $0.7$ for both supplied draw counts. The code also retains the analytic raw-tail warning. Its normalized importance-weight ESS is descriptive and is not an ordinary finite-variance MCSE guarantee. The exact IID posterior-mean MCSE is reported separately as $\sqrt{v/S}$. Neither quantity is the across-validation-unit sampling uncertainty of an ELPD comparison.

The single public listing requires CPython 3.14.7, NumPy 2.5.2 and SciPy 1.18.1, matching the declared root environment metadata. It returns all generated data, exact refit rows, approximate and delivered scores, fitted and analytic tail diagnostics, quadrature checks and settings. Its executable entrypoint emits one canonical compact JSON report; exit zero requires every declared check to pass. The author and primary source reviewer have not run it. Only a future root receipt bound to the exact whole source, fence, body and complete passports can record its observed results.

<a id="section-510-exercises-optional-tail-and-action-space-extensions"></a>

## Solutions: optional tail and action-space extensions {#section-524-solutions-optional-tail-and-action-space-extensions}

<a id="section-524-cbm-09-e5-a-threshold-is-not-a-raw-moment-theorem-solut"></a>
### CBM-09-E5. A threshold is not a raw-moment theorem — solution {#section-526-cbm-09-e5-a-threshold-is-not-a-raw-moment-theorem-solut}

Posterior variance is $(1+1)^{-1}=1/2$ and mean is four. Deleting the only observation returns prior $N(0,1)$, so the predictive is $N(0,2)$ and its log density at eight is $-\log(4\pi)/2-16$. Raw tail shape is $k=1/2$. The moment criterion $qk<1$ gives a finite first moment and an infinite second moment; equality at two is divergent. A shape below $0.7$ therefore does not imply finite raw-weight variance or justify a raw-weight central-limit MCSE. Fitted shape uncertainty and smoothing diagnostics are separate from this analytic moment calculation.

<a id="section-528-cbm-09-e6-randomization-changes-a-robust-action-space-s"></a>
### CBM-09-E6. Randomization changes a robust action space — solution {#section-530-cbm-09-e6-randomization-changes-a-robust-action-space-s}

Worst risks of deterministic $A_0,A_1$ are respectively $3/2$ and $3/4$, so $A_1$ is minimax among those actions. A randomized rule has risk $w+q(2-3w)$. For $w\le2/3$, the supremum is at $q=3/4$ and equals $3/2-5w/4$. For $w\ge2/3$, it is at $q=1/4$ and equals $1/2+w/4$. These pieces meet at $w=2/3$, where the worst risk is $2/3$, and they decrease then increase. Thus the randomized minimax rule improves on deterministic risk $3/4$. The feasible action set changed; the earlier deterministic minimax statement remains correct within its declared set.

<a id="section-532-solutions-executable-normal-loo-companion"></a>

## Solutions: executable Normal LOO companion {#section-534-solutions-executable-normal-loo-companion}

This listing implements only the declared single-model Normal companion. It is unexecuted by its authors and requires the exact dependency passport. Root must preserve its data generator, seeds, draw counts, complete output and all ten check results.

```python
import json
import math
import platform
import sys

import numpy as np
import scipy
from scipy import integrate, special, stats

DEPENDENCIES = {"python": "3.14.7", "numpy": "2.5.2", "scipy": "1.18.1"}
BASE_SEED = 20260906


def posterior_parameters(y):
    y = np.asarray(y, dtype=float)
    if y.ndim != 1 or not np.all(np.isfinite(y)):
        raise ValueError("data must be a finite one-dimensional sequence")
    variance = 1.0 / (len(y) + 1.0 / 9.0)
    return variance * float(np.sum(y)), variance


def exact_refits(y):
    y = np.asarray(y, dtype=float)
    if y.ndim != 1 or len(y) == 0 or not np.all(np.isfinite(y)):
        raise ValueError("LOO needs nonempty finite one-dimensional data")
    rows = []
    for i, observation in enumerate(y):
        mean, variance = posterior_parameters(np.delete(y, i))
        score = float(stats.norm.logpdf(observation, mean, math.sqrt(1.0 + variance)))
        density, error = integrate.quad(
            lambda mu: stats.norm.pdf(observation, mu, 1.0)
            * stats.norm.pdf(mu, mean, math.sqrt(variance)),
            -math.inf, math.inf, epsabs=1e-12, epsrel=1e-10,
        )
        if not density > 0 or not math.isfinite(density):
            raise ArithmeticError("quadrature did not return a positive finite density")
        rows.append({
            "index": i, "held_out": float(observation),
            "training_n": len(y) - 1, "mean": mean, "variance": variance,
            "predictive_variance": 1.0 + variance, "exact_log_predictive": score,
            "quadrature_log_predictive": math.log(density),
            "quadrature_error_estimate": error,
        })
    return rows


def smooth_gpd_mle_v1(log_ratios):
    # Bounded PSIS-style teaching variant, not the official loo tail fit.
    values = np.asarray(log_ratios, dtype=float)
    if values.ndim != 1 or len(values) < 100 or not np.all(np.isfinite(values)):
        raise ValueError("tail smoothing needs at least100 finite log ratios")
    shift = float(np.max(values))
    weights = np.exp(values - shift)
    size = len(values)
    tail_size = min(size // 5, int(3.0 * math.sqrt(size)))
    order = np.argsort(weights, kind="stable")
    sorted_weights = weights[order]
    threshold = float(sorted_weights[-tail_size - 1])
    excess = sorted_weights[-tail_size:] - threshold
    shape, _, scale = stats.genpareto.fit(excess, floc=0.0)
    if not math.isfinite(shape) or not math.isfinite(scale) or scale <= 0:
        raise ArithmeticError("invalid GPD fit")
    probabilities = (np.arange(1, tail_size + 1) - 0.5) / tail_size
    replacement = threshold + stats.genpareto.ppf(
        probabilities, shape, loc=0.0, scale=scale,
    )
    replacement = np.minimum(replacement, sorted_weights[-1])
    smoothed = weights.copy()
    smoothed[order[-tail_size:]] = replacement
    smoothed = np.minimum(smoothed, size ** 0.75 * float(np.mean(smoothed)))
    if np.any(smoothed <= 0) or not np.all(np.isfinite(smoothed)):
        raise ArithmeticError("invalid smoothed weights")
    log_weights = np.log(smoothed) + shift
    log_weights -= special.logsumexp(log_weights)
    return log_weights, float(shape), tail_size


def compare_approximations(y, draw_count, seed):
    y = np.asarray(y, dtype=float)
    refits = exact_refits(y)
    if not isinstance(draw_count, int) or draw_count < 100:
        raise ValueError("draw_count must be an integer at least100")
    mean, variance = posterior_parameters(y)
    rng = np.random.Generator(np.random.PCG64(seed))
    draws = rng.normal(mean, math.sqrt(variance), size=draw_count)
    log_lik = stats.norm.logpdf(y[:, None], draws[None, :], 1.0)
    threshold = min(0.7, 1.0 - 1.0 / math.log10(draw_count))
    points = []
    for i, reference in enumerate(refits):
        fit_error = None
        try:
            log_weights, khat, tail_size = smooth_gpd_mle_v1(-log_lik[i])
            approximate = float(special.logsumexp(log_weights + log_lik[i]))
            weight_ess = float(math.exp(-special.logsumexp(2.0 * log_weights)))
        except (ValueError, ArithmeticError, RuntimeError, FloatingPointError) as error:
            approximate, khat, tail_size, weight_ess = None, None, None, None
            fit_error = str(error)
        warning = khat is None or khat >= threshold or variance >= threshold
        delivered = reference["exact_log_predictive"] if warning else approximate
        points.append({
            **reference, "psis_style_log_predictive": approximate,
            "fitted_pareto_k": khat, "analytic_raw_tail_k": variance,
            "tail_size": tail_size, "normalized_weight_ess": weight_ess,
            "fit_error": fit_error, "warning": warning,
            "exact_refit_fallback_used": warning,
            "delivered_log_predictive": delivered,
        })
    estimates = [point["psis_style_log_predictive"] for point in points]
    fitted_k = [point["fitted_pareto_k"] for point in points]
    all_fits = all(value is not None for value in estimates)
    exact = np.array([point["exact_log_predictive"] for point in points])
    lppd = float(np.sum(special.logsumexp(log_lik, axis=1) - math.log(draw_count)))
    penalty = float(np.sum(np.var(log_lik, axis=1, ddof=1)))
    return {
        "data": y.tolist(), "n": len(y), "posterior_mean": mean,
        "posterior_variance": variance, "draw_count": draw_count, "seed": seed,
        "warmup": 0, "draw_method": "iid analytic posterior",
        "posterior_mean_iid_mcse": math.sqrt(variance / draw_count),
        "posterior_draw_mean": float(np.mean(draws)),
        "warning_threshold": threshold, "pointwise": points,
        "exact_elpd": float(np.sum(exact)),
        "psis_style_elpd": float(sum(estimates)) if all_fits else None,
        "maximum_fitted_k": max(fitted_k) if all_fits else None,
        "maximum_pointwise_error": float(np.max(np.abs(np.array(estimates) - exact))) if all_fits else None,
        "elpd_error": abs(float(sum(estimates)) - float(np.sum(exact))) if all_fits else None,
        "waic_elpd": lppd - penalty, "p_waic": penalty,
        "waic_vs_exact_error": abs(lppd - penalty - float(np.sum(exact))),
        "maximum_quadrature_log_error": max(
            abs(p["quadrature_log_predictive"] - p["exact_log_predictive"])
            for p in points
        ),
    }


def run_companion():
    actual = {
        "python": platform.python_version(),
        "numpy": np.__version__, "scipy": scipy.__version__,
    }
    if platform.python_implementation() != "CPython" or actual != DEPENDENCIES:
        raise RuntimeError("runtime dependency versions differ from the passport")
    generator = np.random.Generator(np.random.PCG64(BASE_SEED + 63))
    benign_data = generator.normal(0.4, 1.0, size=30)
    benign = compare_approximations(benign_data, 30000, BASE_SEED + 64)
    adverse = compare_approximations(np.array([8.0]), 50000, BASE_SEED + 65)
    adverse_point = adverse["pointwise"][0]
    prior_reference = -0.5 * math.log(20.0 * math.pi) - 3.2
    checks = {
        "benign_exact_refit_quadrature": benign["maximum_quadrature_log_error"] < 1e-8,
        "adverse_exact_refit_quadrature": adverse["maximum_quadrature_log_error"] < 1e-8,
        "benign_pointwise_psis_style": benign["maximum_pointwise_error"] is not None
            and benign["maximum_pointwise_error"] < 0.04,
        "benign_total_psis_style": benign["elpd_error"] is not None and benign["elpd_error"] < 0.12,
        "benign_fitted_tail": benign["maximum_fitted_k"] is not None and benign["maximum_fitted_k"] < 0.7,
        "benign_waic_reference": benign["waic_vs_exact_error"] < 0.5,
        "adverse_fitted_tail_warning": adverse_point["fitted_pareto_k"] is not None
            and adverse_point["fitted_pareto_k"] > 0.7,
        "adverse_analytic_tail": abs(adverse["posterior_variance"] - 0.9) < 1e-14,
        "adverse_exact_prior_predictive": abs(adverse_point["exact_log_predictive"] - prior_reference) < 1e-12,
        "adverse_fallback": adverse_point["exact_refit_fallback_used"]
            and abs(adverse_point["delivered_log_predictive"] - prior_reference) < 1e-12,
    }
    return {
        "case_id": "COMM06-CASE-03-LOO-COMPANION",
        "algorithm": "GPD-MLE PSIS-style-v1; analytic Normal refit reference",
        "dependencies": actual, "base_seed": BASE_SEED,
        "data_generator_seed": BASE_SEED + 63,
        "benign": benign, "adverse": adverse, "checks": checks,
        "regression_pass": all(checks.values()),
        "limits": "Seeded regression only; no generic fitted-model or evidence pipeline, universal calibration, or reliable raw-weight MCSE in the adverse case.",
    }


if __name__ == "__main__":
    report = run_companion()
    print(json.dumps(report, ensure_ascii=False, sort_keys=True, separators=(",", ":"), allow_nan=False))
    sys.exit(0 if report["regression_pass"] else 1)
```

<a id="section-716-references-predictive-comparison-and-declared-imports"></a>

## Sources: predictive comparison and declared imports {#section-718-references-predictive-comparison-and-declared-imports}

The [official loo comparison documentation](https://mc-stan.org/loo/reference/loo_compare.html) explains paired pointwise comparisons and their data-unit assumptions. The [official Pareto-shape diagnostics](https://mc-stan.org/loo/reference/pareto-k-diagnostic.html) state the sample-size-dependent diagnostic rule. Vehtari, Simpson, Gelman, Yao and Gabry's [Pareto Smoothed Importance Sampling](https://www.jmlr.org/papers/v25/19-556.html), JMLR 25(72), 2024, is the primary methodological reference. The GPD-MLE teaching variant here is explicitly different; the conjugate targets and moment calculations are derived locally.

Yao, Vehtari, Simpson and Gelman's [Using stacking to average Bayesian predictive distributions](https://sites.stat.columbia.edu/gelman/research/published/stacking.pdf), Bayesian Analysis 13, 2018, distinguishes stacking, BMA and pseudo-BMA. The mixture objective and finite fitted-model example above are worked explicitly.

The [projpred cross-validation interface](https://mc-stan.org/projpred/reference/cv_varsel.html) is the precise external workflow for search and performance evaluation. The supplied regression projection is a fixed, analytically solved two-model path; no package run, general variable-selection guarantee or fresh validation result is imported by name. General continuous design, infinite-horizon control, broader robust prior classes and numerical evidence methods remain explicitly scoped templates beyond the finite fixtures.

