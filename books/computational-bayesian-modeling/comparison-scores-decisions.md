
# Comparison, Scores and Decisions

Preparation is the primary [Bayesian Inference course](#/books/bayesian/course-syllabus), probability with conditional expectation, and the preceding modeling chapter when one is listed. Computational algorithms continue in [MCMC Volume 1](#/books/mcmc/01-probability-computation).


Having fit and diagnosed a model, we often face a harder question: is this the right model, and what action should we take? This chapter covers predictive criteria for model comparison, the role of marginal likelihoods, and the decision-theoretic framework for choosing actions under posterior uncertainty.

## Predictive criteria and cross-validation

Models are compared with respect to a specific predictive task. Leave-one-out cross-validation (LOO-CV) estimates the expected log predictive density for a new observation:

$$\mathrm{elpd}_{\mathrm{loo}} = \sum_{i=1}^{n} \log p(y_{i} \mid y_{-i}),$$

where $p(y_{i} \mid y_{-i})$ is the posterior predictive density for observation $i$ given all other observations. For the stated predictive task, larger elpd is better. Report a paired difference with its standard error or interval and assess consequences at the task's scale. A difference smaller than one standard error is uncertain, not automatically meaningless.

Widely applicable information criterion (WAIC) is an asymptotic approximation to LOO-CV that requires less computation. For well-specified models with adequate posterior samples, WAIC and LOO-CV usually agree. For models with influential observations or poor mixing, LOO-CV is more reliable.

**Numerical example.** Two models evaluated on the same observations have $\mathrm{elpd}_{\mathrm{loo}}$ estimates of $-120$ and $-115$ with marginal standard errors $5$ and $6$. The estimated difference favoring the second model is $5$, but its standard error cannot be recovered from these two marginal standard errors alone: the estimates are paired. Let $d_i$ be the second model's pointwise log predictive density minus the first model's, using the same held-out observation in each pair. The usual estimate for the standard error of their sum is $\sqrt{n\,s_d^2}$, where $s_d^2$ is the sample variance of the $d_i$. Its adequacy depends on the data and validation design; dependent data need appropriate units and covariance treatment. See the [official loo model-comparison documentation](https://mc-stan.org/loo/reference/loo_compare.html). Without the paired information, these summaries alone do not establish how uncertain the predictive difference is.

## Marginal likelihoods and Bayes factors

The marginal likelihood $p(y \mid M)$ is the normalizing constant of the posterior. The Bayes factor for model $M_{1}$ against model $M_{0}$ is

$$\mathrm{BF}_{10} = \frac{p(y \mid M_{1})}{p(y \mid M_{0})}.$$

Bayes factors are sensitive to prior specification throughout weakly identified and model-specific parameter directions, not only near the posterior. A truly likelihood-irrelevant parameter with a proper normalized conditional prior integrates out to a factor of one, so it cannot by itself change the marginal likelihood. Sensitivity arises when the likelihood depends weakly on that parameter, its prior is improper, or competing models assign different likelihood-relevant structures. This is one reason to compare Bayes-factor conclusions across justified priors and against predictive validation.

When Bayes factors are used, the prior must be carefully justified. A default prior chosen for computational convenience may produce misleading Bayes factors. Sensitivity analysis---comparing Bayes factors under alternative priors---is essential.

## Decision theory

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

## Sensitivity and robustness

Report how the chosen action changes under alternative priors, likelihoods, and loss values. If the optimal decision is stable across plausible variations, the analysis is robust. If small changes in prior or loss flip the decision, report that sensitivity and distinguish uncertainty that further data could reduce from uncertainty about costs or preferences.

**Example.** An elpd difference of $2$ with paired standard error $1.5$ leaves the predictive ranking uncertain at this scale; these summaries alone do not determine the action. Compare each model's posterior expected loss, retain the declared validation unit, and report prior/loss sensitivity before deciding whether more data are worth their cost.


## Bayesian model averaging

When multiple models predict similarly well, Bayesian model averaging (BMA) combines their predictions using posterior model probabilities:

$$p(y_{\mathrm{new}} \mid y) = \sum_{m=1}^{M} p(y_{\mathrm{new}} \mid y, M_{m}) \, p(M_{m} \mid y).$$

The posterior model probability $p(M_{m} \mid y)$ is proportional to the marginal likelihood $p(y \mid M_{m})$ times the prior model probability. BMA propagates model uncertainty under the declared model list and priors; it does not guarantee better predictions than selection, especially when the list is misspecified or marginal likelihoods are prior-sensitive. Predictive performance must be validated for the target task.

In practice, computing marginal likelihoods is difficult. Predictive stacking instead combines fitted Bayesian posterior predictive distributions using cross-validated performance and does not require marginal likelihoods. It is especially motivated when the candidate list is M-open or misspecified and different models make complementary predictions.

## Stacking and pseudo-BMA

Model stacking finds weights $w_{1}, \dots, w_{M}$ that maximize the cross-validated log predictive density of the weighted prediction:

$$\hat{w} = \arg\max_{w} \sum_{i=1}^{n} \log \sum_{m=1}^{M} w_{m} \, p(y_{i} \mid y_{-i}, M_{m}).$$

The weights are constrained to be non-negative and sum to one. When one model is clearly predictively dominant, both stacking and BMA can concentrate on it, subject to their different objectives and priors. Stacking's potential advantage is chiefly in combining complementary predictive strengths under misspecification, and it remains an empirical claim to check by appropriate validation.

Pseudo-BMA weights use exponentiated LOO-CV differences:

$$w_{m} = \frac{\exp(\mathrm{elpd}_{\mathrm{loo}, m})}{\sum_{m'} \exp(\mathrm{elpd}_{\mathrm{loo}, m'})}.$$

These weights are similar to BMA weights but use cross-validation instead of marginal likelihoods. They are sensitive to the scale of elpd and can be unstable when models have similar performance.

## Information criteria

The deviance information criterion (DIC) and widely applicable information criterion (WAIC) provide single-number summaries of predictive performance. WAIC is preferred because it is fully Bayesian and does not depend on a point estimate. For a model with posterior samples $\theta^{(s)}$,

$$\mathrm{WAIC} = -2 \sum_{i=1}^{n} \log \mathbb{E}[p(y_{i} \mid \theta) \mid y] + 2 \, p_{\mathrm{WAIC}},$$

where $p_{\mathrm{WAIC}}$ is an effective parameter count. WAIC approximates LOO-CV for well-specified models but can be unreliable for models with influential observations or poor mixing.


## Expected utility and optimal design

The decision-theoretic framework extends to experimental design. The expected utility of a design $\xi$ is

$$U(\xi) = \mathbb{E}_{\theta}\left[\mathbb{E}_{y \mid \theta, \xi}\left[U(\theta, \delta^{*}(y))\right]\right],$$

where $\delta^{*}(y)$ is the optimal decision after observing data $y$ from design $\xi$. Bayesian optimal design maximizes $U(\xi)$ over the space of possible designs.

Common utility functions include:

- **Information gain:** $U = \mathrm{KL}(\pi(\theta \mid y) \,\|\, \pi(\theta))$, the Kullback-Leibler divergence between posterior and prior.
- **Precision:** $U = -\det(\operatorname{Cov}(\theta \mid y))$, the negative determinant of the posterior covariance.
- **Decision accuracy:** $U = -L(\theta, \delta^{*}(y))$, the negative loss of the optimal decision.

Bayesian optimal design is computationally demanding because it requires integrating over both parameters and future data. Approximations such as expected improvement and mutual information are widely used.

## Sequential decisions

In sequential settings, decisions are made adaptively as data accumulate. The optimal policy maximizes the expected total utility over the horizon:

$$V_{t}(h_{t}) = \max_{a_{t}} \mathbb{E}\left[R_{t} + V_{t+1}(h_{t+1}) \mid h_{t}, a_{t}\right],$$

where $h_{t}$ is the history up to time $t$, $a_{t}$ is the action, and $R_{t}$ is the immediate reward. This Bellman equation is solved backward in time. For finite horizons, dynamic programming is exact. For infinite horizons, approximations such as policy iteration and value iteration are used.

In Bayesian sequential analysis, the posterior at each stage serves as the prior for the next stage. The posterior updates recursively, making the framework naturally compatible with Bayesian inference.

## Earlier worked questions

The original question identities, statements and complete answers remain in [the original complete exercise companion](retained-source-model-comparison-and-decision.md). The further exercises below supply the present chapter’s staged practice.

## Robust Bayesian analysis

Robust Bayesian analysis studies how posterior inferences change when the prior, likelihood, or loss function varies within a specified class. A $\Gamma$-minimax analysis finds the decision that minimizes the maximum posterior expected loss over a class of priors $\Gamma$:

$$\delta^{*} = \arg\min_{\delta} \sup_{\pi \in \Gamma} \mathbb{E}^{\pi}[L(\theta, \delta) \mid y].$$

If the minimax decision is stable across a wide class of priors, the analysis is robust. If the minimax decision changes when the declared prior class or loss changes, report that dependence on modeling choices; it does not alone establish that additional data would resolve the sensitivity.

**Example.** In a clinical trial, the class $\Gamma$ might include all priors for the treatment effect that are symmetric about zero with variance at most $4$. The $\Gamma$-minimax decision is the one that performs best under the worst-case prior in this class. If even the worst-case prior supports proceeding to Phase III, the decision is robust.

## Connection to frequentist methods

Bayesian model comparison and decision theory have frequentist counterparts:

- **Cross-validation** corresponds to out-of-sample prediction assessment.
- **Information criteria** correspond to penalized likelihood methods (AIC, BIC).
- **Bayes factors** correspond to likelihood ratio tests, though with different interpretations.
- **Posterior expected loss** corresponds to risk minimization.

The Bayesian framework provides a coherent probabilistic interpretation but does not guarantee better performance. In large samples, Bayesian and frequentist methods often agree. In small samples, the Bayesian approach can incorporate prior information that improves performance, but only if the prior is well-calibrated.


## Reference models and projection

In high-dimensional settings, model comparison is complicated by the large number of candidate models. A reference model approach fits a complex, flexible model (the reference) and then projects the posterior onto simpler submodels. The projection finds the submodel parameters that best approximate the reference model's predictions.

**Procedure:**
1. Fit a reference model with all candidate predictors.
2. For each submodel, find the parameters that minimize the expected KL divergence to the reference model's predictive distribution.
3. Compare submodels along a declared size or cost-constrained path, validate the selection procedure, and choose a size under a stated predictive-accuracy versus complexity criterion.

Projection borrows predictive information from the reference model; sparse selection additionally needs a declared model-size or cost criterion and an evaluation that accounts for the search. It is particularly useful in variable selection, where the number of candidate models grows exponentially with the number of predictors.

## Decision-making under model uncertainty

When multiple models are plausible, decision-making should account for model uncertainty. The expected utility under model uncertainty is

$$\mathbb{E}[U] = \sum_{m=1}^{M} p(M_{m} \mid y) \, \mathbb{E}[U \mid y, M_{m}].$$

This formula averages the expected utility under each model, weighted by the posterior model probability. If one model dominates, the average is close to that model's expected utility. If several models are competitive, the average reflects the uncertainty.

Model averaging can propagate uncertainty that hard selection discards, but robustness and predictive improvement are not automatic. Posterior-probability averaging requires marginal likelihoods and justified model priors; cross-validation weights and stacking optimize a different predictive objective. Compare them on the declared task.

## Common errors

- **Comparing models without a common predictive task.** A model with high elpd for short-term forecasts may be worse for long-term forecasts. Specify the task before comparing.
- **Ignoring prior sensitivity in Bayes factors.** Bayes factors can be arbitrarily manipulated by prior choice. Report sensitivity or use cross-validation.
- **Using symmetric loss by default.** Real decisions are rarely symmetric. Document the loss function and justify its shape.
- **Treating averaging as an automatic improvement.** BMA, stacking, and selection answer different questions and can rank differently under misspecification or prior sensitivity. Validate the resulting predictive distribution and decision consequences.


## Connections

This chapter completed the Bayesian workflow cycle: generative modeling, computation, diagnostics, predictive criticism, and decision. The preceding chapters developed each stage in detail: *Begin with the Generative Story* established modeling principles; *Conjugacy as an Exact Computational Benchmark* provided validation targets; *Hierarchical Models and Partial Pooling* extended models to grouped data; *Monte Carlo Estimates and Their Error* quantified simulation uncertainty; *Metropolis–Hastings from an Invariant Kernel* and *Gradient-Based Sampling* provided algorithms; *Diagnostics Are Necessary, Never Sufficient* checked sampler health; and *Predictive Criticism* evaluated model fit. Together they form a coherent workflow for computational Bayesian modeling.
## From an observed log score to a predictive claim

A predictive comparison starts with a random object and a prediction made before that object is revealed. If the object is a person's next measurement, the training information may include earlier measurements from that person. If the object is a new person, that information is unavailable. Those are different conditional distributions, even if the same spreadsheet is used. State the prediction time, available covariates, population, measurement units and training procedure before interpreting a score.

A log score is the logarithm of a probability mass or density evaluated at the observed outcome. Densities require a reference measure. If a continuous response is transformed by a common invertible map $z=h(y)$, its density gains the Jacobian factor $|dy/dz|$. Each model's log score changes by the same term, so the paired difference is unchanged when every model uses the same transformation. Absolute scores across incompatible response measures are not comparable. Omitting a normalizing constant that differs between models changes the question rather than merely saving computation.

The [conjugate posterior chapter](conjugate-posterior-benchmarks.md) makes the analogous distinction for a binomial count and an ordered Bernoulli sequence. The binomial coefficient is constant in the parameter and cancels from a posterior for that parameter. It is nevertheless part of the probability of the count event. Model evidence and predictive scores must describe the same observed event in every candidate, with the appropriate constant retained.

For an exchangeable scalar-response model, exact leave-one-out prediction fits on $y_{-i}$ and evaluates the density of $y_i$. The reported sum estimates performance of a procedure trained on one fewer observation. It is not the log density of the entire dataset under one independently trained predictor, and it does not automatically target forecasting. In a time series, leaving a middle value out while conditioning on its future can be an interpolation exercise. A rolling-origin forecast instead conditions only on information available at the forecast date.

In grouped data, observation-level LOO often predicts another observation in a known group. Its random effect may be informed by the remaining observations in that group. Leave-one-group-out predicts a new group and must integrate its latent effect from the group distribution. Keeping an estimated group effect from the held-out group leaks information. Preprocessing, imputation, feature selection and hyperparameter tuning must also be refitted inside each training split when they use the outcomes or held-out predictors.

For a fixed fitted predictive density $q$, the population target is $E_{P_*}\log q(Y)$ under a declared future distribution $P_*$. When the relevant expectations exist, maximizing this is equivalent to minimizing $\mathrm{KL}(P_*\|q)$, because the term involving the true density is common to candidates. This proper-score identity explains the objective; it supplies neither the unknown distribution nor an automatic finite-data guarantee. If a candidate assigns zero probability to an outcome that can occur, its log score is minus infinity, an important support failure rather than a missing numerical value to discard.

An evaluation report therefore identifies more than the winning number. It records the validation unit, training size, prediction conditioning, support and scoring measure, together with computational diagnostics and the intended deployment distribution. A model can win a short-horizon score while giving inappropriate decisions for another horizon, population or loss.

## Paired comparisons have two different uncertainties

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

## Exact refitting, importance ratios and WAIC

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

## Proper evidence uses the entire prior and a common observation

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

## Evidence integration is a computational problem of its own

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

## Averaging and predictive weighting optimize different objects

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


## Worked applications

### Worked example 1: proper binary scoring

A binary log score has expected value $p\log q+(1-p)\log(1-q)$. Its derivative vanishes at $q=p$, and its second derivative is negative for interior probabilities. The true probability maximises expected score.

### Worked example 2: a Bayes action

Posterior state probability $p$ with false-positive loss one and false-negative loss two makes action one preferable when $1-p<2p$, or $p>1/3$. The threshold follows from the loss, not from a generic half-probability rule.

### Worked example 3: paired predictive scores

If each of ten held-out units supplies both model scores, compare their differences on those same units. Treating the two score lists as unrelated discards the covariance of their shared data.

## Further exercises

### Exercise 101
<a id="comparison-scores-decisions-ex-101"></a>

Why is a Bayes factor prior-dependent?

<details>
<summary>Hint 1</summary>

Evidence averages likelihood over the prior.

</details>
<details>
<summary>Hint 2</summary>

A bare model set is insufficient.

</details>
<details>
<summary>Solution</summary>

The marginal likelihood is an integral under the model's proper parameter prior. Changing that predictive specification can change evidence even when the likelihood family is unchanged.

</details>

### Exercise 102
<a id="comparison-scores-decisions-ex-102"></a>

Show the posterior mean minimises finite squared loss.

<details>
<summary>Hint 1</summary>

Expand around the mean.

</details>
<details>
<summary>Hint 2</summary>

The cross term vanishes.

</details>
<details>
<summary>Solution</summary>

Posterior risk is $(a-E\theta)^2+\operatorname{Var}(\theta)$ when the second moment is finite. The first term is uniquely minimised at the mean.

</details>

### Exercise 103
<a id="comparison-scores-decisions-ex-103"></a>

What action minimises expected absolute loss?

<details>
<summary>Hint 1</summary>

Use the posterior distribution function.

</details>
<details>
<summary>Hint 2</summary>

A median balances the sides.

</details>
<details>
<summary>Solution</summary>

Any posterior median minimises expected absolute deviation when the first absolute moment is finite. Nonuniqueness can occur, so a unique action is not guaranteed.

</details>

### Exercise 104
<a id="comparison-scores-decisions-ex-104"></a>

Does a model with highest posterior probability minimise every decision loss?

<details>
<summary>Hint 1</summary>

Actions and model labels can differ.

</details>
<details>
<summary>Hint 2</summary>

Integrate the stated loss.

</details>
<details>
<summary>Solution</summary>

No. A Bayes action minimises posterior expected loss, potentially averaged across models. The most probable model need not induce the best action for that loss.

</details>

### Exercise 105
<a id="comparison-scores-decisions-ex-105"></a>

Why must compared log scores share a data unit?

<details>
<summary>Hint 1</summary>

Scores depend on the predictive event.

</details>
<details>
<summary>Hint 2</summary>

Different aggregation changes the target.

</details>
<details>
<summary>Solution</summary>

Predicting one observation, one cluster and an entire sequence are different distributions. Align the unit and information set before comparing their predictive scores.

</details>

### Exercise 106
<a id="comparison-scores-decisions-ex-106"></a>

Distinguish Bayesian model averaging from stacking.

<details>
<summary>Hint 1</summary>

They optimise different objects.

</details>
<details>
<summary>Hint 2</summary>

One uses posterior model probabilities.

</details>
<details>
<summary>Solution</summary>

Model averaging uses evidence-based posterior model weights under specified priors. Stacking chooses weights for a predictive criterion, generally from held-out performance; its weights are not posterior model probabilities.

</details>

### Exercise 107
<a id="comparison-scores-decisions-ex-107"></a>

Why can improper priors invalidate evidence comparisons?

<details>
<summary>Hint 1</summary>

Their arbitrary constants remain in integrals.

</details>
<details>
<summary>Hint 2</summary>

Posterior cancellation is within a model.

</details>
<details>
<summary>Solution</summary>

A model evidence changes under arbitrary rescaling of an improper prior. A proper posterior alone does not fix that scale, so the corresponding Bayes factor is not generally defined.

</details>

### Exercise 108
<a id="comparison-scores-decisions-ex-108"></a>

What information is lost by comparing only expected score difference?

<details>
<summary>Hint 1</summary>

Its sampling variability matters.

</details>
<details>
<summary>Hint 2</summary>

Pair the same units.

</details>
<details>
<summary>Solution</summary>

A mean difference does not show uncertainty from finite evaluation units or numerical approximation. The paired differences and their dependence structure determine an appropriate uncertainty calculation.

</details>

### Exercise 109
<a id="comparison-scores-decisions-ex-109"></a>

Can LOO score estimate any future target?

<details>
<summary>Hint 1</summary>

The omitted unit defines the prediction.

</details>
<details>
<summary>Hint 2</summary>

Time and groups constrain information.

</details>
<details>
<summary>Solution</summary>

No. Ordinary leave-one-row-out estimates a particular conditional prediction problem. New-group or future-time targets can require grouped or chronological omission.

</details>

### Exercise 110
<a id="comparison-scores-decisions-ex-110"></a>

Why must an optimal-design calculation state its utility?

<details>
<summary>Hint 1</summary>

Information gain is one possible objective.

</details>
<details>
<summary>Hint 2</summary>

Different actions value different outcomes.

</details>
<details>
<summary>Solution</summary>

The chosen design maximises the specified expected utility under its model. It need not optimize another decision loss, fairness requirement or operational constraint not included in that utility.

</details>

## Summary

Comparison, Scores and Decisions develops the declared probability model, target and mathematical comparisons in the sections above. Keep support, observation mechanisms, conditional information and numerical approximation distinct. The original complete source remains available as a companion, with all original questions and computational listings preserved.
