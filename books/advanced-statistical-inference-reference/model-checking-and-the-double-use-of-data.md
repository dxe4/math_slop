
# Scores, Model Checking and the Double Use of Data

A fitted model makes claims about distributions of observables, residuals, or replicated statistics. This chapter develops diagnostics that target specific assumptions and discusses the inferential hazards of using the same data to discover and test features.

## Discrepancy statistics

A *discrepancy* $T(y,\theta)$ measures the distance between data and model predictions. Useful discrepancies target assumptions that matter:

- **Link shape:** Is the relationship linear in the link scale?
- **Conditional variance:** Is the variance correctly specified?
- **Tail behavior:** Do extreme residuals occur more often than predicted?
- **Autocorrelation:** Are residuals independent?
- **Proportional hazards:** Do hazard ratios change over time?
- **Spatial residual pattern:** Is there unmodeled spatial structure?

## Residuals in GLMs

### Raw residuals

The raw residual $r_{i}=y_{i}-\hat{\mu}_{i}$ has variance depending on the mean in a GLM. Plotting raw residuals against fitted values can show heteroskedasticity even when the model is correct.

### Pearson residuals

$$r_{P,i}=\frac{y_{i}-\hat{\mu}_{i}}{\sqrt{V(\hat{\mu}_{i})}}.$$

These standardize by the modelled variance. For a correctly specified model, $\sum_{i}r_{P,i}^{2}$ is the Pearson statistic, which has a chi-square approximation only in an explicitly justified grouped-count or related asymptotic experiment. With sparse individual binary observations, a growing number of observations alone does not justify substituting $n-p$ degrees of freedom.

### Deviance residuals

$$r_{D,i}=\operatorname{sign}(y_{i}-\hat{\mu}_{i})\sqrt{d_{i}},$$

where $d_{i}$ is the contribution of observation $i$ to the deviance. Deviance residuals apportion likelihood deviance with a sign.

### Randomized quantile residuals

For discrete distributions, randomized quantile residuals add controlled randomization within probability jumps to map discrete fitted distributions onto a continuous uniform reference; $F(y_i^-;\hat\theta)$ denotes the CDF left limit:

$$r_{Q,i}=\Phi^{-1}(u_{i}),\quad u_{i}\sim\text{Uniform}(F(y_{i}^{-};\hat{\theta}),F(y_{i};\hat{\theta})).$$

None of these residuals becomes iid standard normal merely by its name. Parameter fitting, leverage, and dependence alter the reference distribution.

## Residual plots and their interpretation

### Residuals versus predictors

Plotting residuals against a predictor used to fit the model can reveal systematic shape but has built-in dependence: the model was fit to minimize residuals in that direction. A smooth residual trend should be compared with uncertainty that repeats fitting.

### Time series residuals

In time series, inspect residual autocorrelation and forecast errors by origin. The Ljung-Box statistic tests whether autocorrelations up to lag $k$ are jointly zero:

$$Q=n(n+2)\sum_{j=1}^{k}\frac{\hat{\rho}_{j}^{2}}{n-j}.$$

For a fixed lag count and iid noise with the moments needed for the sample-autocorrelation limit, this has the usual asymptotic chi-square reference before parameter fitting. Uncorrelated observations alone are not enough, and fitting a time-series model changes the covariance and degrees-of-freedom calculation. The spectral chapter proves a separate Gaussian long-run-variance route.

### Survival residuals

- **Martingale residuals:** $M_{i}=\delta_{i}-\hat{\Lambda}(\widetilde{T}_{i})$ diagnose functional form imperfectly.
- **Scaled Schoenfeld residuals:** Target proportional hazards violations. A nonzero trend over time indicates nonproportionality.

### Spatial residuals

In spatial models, map residuals and compute held-out variograms rather than declaring a covariance fitted because its training variogram looks close. Cross-validation at realistic spatial gaps is essential.

## The double-use problem

Using the same data to discover and test a feature makes a nominal p-value optimistic. Several honest targets exist:

- **Exploratory checks:** Clearly labeled and followed by new confirmation on independent data.
- **Posterior predictive checks:** Assess model-data discrepancy but do not yield ordinary uniform p-values because data inform the posterior.
- **Parametric-bootstrap checks:** Simulate and refit under a fitted null. Calibration needs a theorem for the fitted-null bootstrap that repeats the complete fitting and discrepancy procedure; conditioning on an estimated parameter alone does not make it an exact finite-sample p-value.
- **Split-sample checks:** Reserve data for a frozen diagnostic.
- **Simultaneous checks:** Predeclare a discrepancy family and use simultaneous inference.

A model can pass low-power checks and still be wrong. The aim is not to certify truth but to find consequential incompatibilities and quantify sensitivity.

## Worked example: checking logistic regression fit

Fit a logistic model with predicted probabilities $\hat{p}_{i}$. Group observations into deciles by $\hat{p}_{i}$.

**Step 1: Compute observed and expected events in each decile.** Let $O_g=\sum_{i\in g}y_i$ and $E_g=\sum_{i\in g}\hat p_i$.

| Decile | $n_{g}$ | Observed | Expected | HL contribution |
|--------|---------|----------|----------|---------|
| 1 | 100 | 5 | 8 | $(5-8)^2/[8(1-8/100)]\approx1.223$ |
| 2 | 100 | 12 | 15 | $(12-15)^2/[15(1-15/100)]\approx0.706$ |
| ... | ... | ... | ... | ... |
| 10 | 100 | 85 | 80 | $(85-80)^2/[80(1-80/100)]=1.5625$ |

**Step 2: Hosmer–Lemeshow statistic.** For binary observations the grouped statistic is

$$\chi^2_{HL}=\sum_g\frac{(O_g-E_g)^2}{E_g(1-E_g/n_g)},$$

which includes the non-event contribution through the factor $1-E_g/n_g$. Because the intervening seven rows are not supplied above, no numerical total or p-value can be inferred from this partial table. Even with all groups supplied, the usual degrees-of-freedom reference is an approximation affected by grouping and model fitting; it should not be the only diagnostic.

**Step 3: Check for separation.** Test whether a hyperplane separates the
$y=1$ and $y=0$ covariate points, or use a fitting routine that reports a
verified nonexistence/separation diagnostic. Diverging coefficient norms while
the unpenalized log-likelihood approaches a finite supremum are optimisation
evidence for separation. Every finite logistic predictor gives a probability
strictly between $0$ and $1$; printed endpoints can be floating-point
saturation, and separated data need not print exact endpoints.

## Common errors and misconceptions

- **Treating residuals as iid standard normal.** Residuals inherit correlation from fitting. Standard normal reference quantiles are approximate at best.

- **Using the same data for discovery and confirmation.** This is the most common source of false positives in applied statistics. Split the data or use preregistered analyses.

- **Relying on a single diagnostic.** No single plot or test can validate a model. Use multiple diagnostics targeting different assumptions.

- **Confusing model fit with model truth.** A well-fitting model can still be wrong. Diagnostics find incompatibilities; they do not prove correctness.

## Decision targets and proper scoring

This chapter separates the problem of estimating a parameter from the problem of selecting a decision. A point forecast minimizes expected loss under the predictive distribution; the choice of loss determines the optimal forecast. Scoring rules evaluate probabilistic forecasts, and proper scores encourage honest reporting.

### Decision-theoretic targets

A *decision* $d$ is chosen from a set $\mathcal{D}$ to minimize expected loss $\mathbb{E}[L(d,Y)]$ where $Y$ is the outcome and $L$ is a loss function.

#### Common loss functions and their optima

The following finite-risk statements require $\mathbb E[Y^2]<\infty$ for squared error and $\mathbb E|Y|<\infty$ for the absolute and quantile losses. Without these conditions every candidate can have infinite risk, so a formal difference-of-risks convention or another restricted decision problem is needed.

- **Squared error:** $L(d,y)=(d-y)^{2}$. The optimal forecast is $d^{*}=\mathbb{E}[Y]$.
- **Absolute error:** $L(d,y)=|d-y|$. The optimal forecast is $d^{*}=\operatorname{median}(Y)$.
- **Quantile loss:** $L_{\tau}(d,y)=(y-d)(\tau-\mathbf{1}_{\{y\le d\}})$. The optimal forecast is the $\tau$th quantile of $Y$.
- **Asymmetric absolute loss:** $L(d,y)=\alpha|d-y|\mathbf{1}_{\{y\le d\}}+\beta|d-y|\mathbf{1}_{\{y>d\}}$. The optimal forecast is a weighted quantile.

A classifier threshold depends on relative costs and prevalence, not AUC alone. A model with high AUC may still produce poor decisions if the cost structure is ignored.

### Proper scoring rules

A *scoring rule* $S(Q,y)$ evaluates a probabilistic forecast $Q$ against an observed outcome $y$. It is *proper* if, for every true law $P$,

$$\mathbb{E}_{P}[S(P,Y)]\le\mathbb{E}_{P}[S(Q,Y)]\quad\text{for all }Q.$$

It is *strictly proper* if equality implies $Q=P$ (in distribution).

#### Examples

- **Negative log score:** $S(Q,y)=-\log q(y)$, where $q$ is the density of $Q$. This is strictly proper. It heavily penalizes assigning tiny probability to realized outcomes.
- **Brier score (quadratic):** For binary $Y\in\{0,1\}$ and forecast probability $p$, $S(p,y)=(y-p)^{2}$. This is proper.
- **Spherical loss:** $S(Q,y)=-q(y)/\|q\|_{2}$ for square-integrable densities
  (or finite probability vectors). The minus sign matches this chapter's
  lower-is-better convention. Cauchy--Schwarz proves propriety; on probability
  vectors, and on densities identified up to almost-everywhere equality, the
  minimizer is uniquely $Q=P$ when the relevant $L^2$ norms are finite.

#### Decomposition

For the Brier score, the expected score decomposes as

$$\mathbb{E}[(Y-p)^{2}]=\mathbb{E}[(Y-\bar{Y})^{2}]+(\bar{Y}-p)^{2},$$

where $\bar{Y}=\mathbb{E}[Y]$. This shows that calibration (matching the true probability) and sharpness (concentration of the forecast) together determine the score. Marginal calibration alone is not sufficient for an honest predictive distribution.

### Survey weights and evaluation

Survey weights may be needed to evaluate a target population rather than the observed sample. The weighted score

$$S_{w}(Q,y)=w\cdot S(Q,y)$$

targets the population represented by the weights. Time and spatial predictions require evaluation over the intended horizon and geometry.

### Censored-outcome scores

For censored survival data, standard scores require modification. One approach uses inverse-probability-of-censoring weighting:

$$S_{IPCW}(Q,y,\delta)=\frac{\delta}{\hat{G}_{C}(y-)}S(Q,y),$$

where $G_C(y-)=\mathbb P(C\ge y\mid\text{declared history or covariates})$ is the left-limit censoring survival probability under the convention that an event at $y$ is observed when $T\le C$. This inherits the assumptions of the censoring model, including conditional independent censoring and positivity. Other tie conventions require the matching survival endpoint.

### Worked example: proper score comparison

Consider a binary outcome with true probability $p=0.7$. Two forecasters report $Q_{1}$ with $p_{1}=0.7$ and $Q_{2}$ with $p_{2}=0.9$.

**Brier score expectations:**

$$\mathbb{E}[S(Q_{1},Y)]=0.7(1-0.7)^{2}+0.3(0-0.7)^{2}=0.7\cdot 0.09+0.3\cdot 0.49=0.063+0.147=0.21.$$

$$\mathbb{E}[S(Q_{2},Y)]=0.7(1-0.9)^{2}+0.3(0-0.9)^{2}=0.7\cdot 0.01+0.3\cdot 0.81=0.007+0.243=0.25.$$

The calibrated forecaster $Q_{1}$ has lower expected loss. The overconfident forecaster $Q_{2}$ is penalized for assigning high probability to the less likely outcome.

**Log score expectations:**

$$\mathbb{E}[S(Q_{1},Y)]=-0.7\log(0.7)-0.3\log(0.3)\approx 0.611.$$

$$\mathbb{E}[S(Q_{2},Y)]=-0.7\log(0.9)-0.3\log(0.1)\approx 0.765.$$

Again, $Q_{1}$ is preferred. Forecast $Q_2$ overstates the probability of the more likely event and assigns only $0.1$ to its complement; the log score penalizes that understated complement sharply whenever it occurs.

### Common errors and misconceptions

- **Evaluating point forecasts with improper scoring rules.** The mean squared error is proper for the mean, but using it to evaluate a median forecast is misleading. Match the score to the decision target.

- **Ignoring survey weights in evaluation.** An unweighted score evaluates performance in the observed sample. If the target is a population, weights are necessary.

- **Using a single scalar score.** A scalar score does not reveal subgroup or tail failures. A well-calibrated forecast on average may be poorly calibrated for high-risk subgroups.

- **Confusing properness with usefulness.** A proper score encourages honest forecasts, but it does not guarantee that the forecast is useful for the decision at hand. The choice of score should reflect the decision problem.

The complete earlier reading and its original exercises remain available as [Decision targets and proper scoring](decision-targets-and-proper-scores.md).

## Small-sample and boundary inference

Asymptotic approximations become fragile when effective information is small. This chapter catalogs the warning signs, proposes diagnostics, and discusses exact and conditional methods that can rescue inference when regularity fails.

### Symptoms of fragile asymptotics

The following situations commonly produce unreliable large-sample approximations:

- **Few survey PSUs:** Even with many people per PSU, the asymptotic count is the number of PSUs.
- **Few outcome events:** In binary or survival models with rare outcomes, the normal approximation to the MLE is poor.
- **Few independent regimes:** In time series or spatial data, few clusters or regimes mean the long-run variance is poorly estimated.
- **Near separation:** In logistic regression, near-complete separation produces infinite or near-infinite MLEs.
- **Near-singular covariance:** In multivariate analysis, eigenvalues near zero or tied eigenvalues make estimators unstable.
- **Boundary parameters:** Nuisance parameters on a boundary (variance components at zero) change the asymptotic distribution.
- **Extreme weights:** Inverse probability weights near infinity dominate the estimator.
- **Endpoint bandwidths:** Smoothing bandwidths selected at boundaries produce biased estimates.

### Diagnostics

#### Information unit

Identify the effective sample size for the asymptotic approximation. For clustered data, it is the number of clusters. For time series, it is related to the effective sample size $n_{\text{eff}}=n/[1+2\sum_{h}\rho(h)]$.

#### Condition number

For a symmetric positive-definite covariance or Gram matrix, the spectral condition number is $\kappa=\lambda_{\max}/\lambda_{\min}$. For a rectangular or general matrix, use the ratio of largest to smallest nonzero singular value (and regard rank deficiency as infinite condition number). A large value signals sensitivity, but a universal cutoff such as $10^6$ is not scale-, precision-, or task-independent; report the value and assess its effect on the calculation.

#### Leverage and influence

In regression, the leverage $h_{ii}=x_{i}^{T}(X^{T}X)^{-1}x_{i}$ measures how far $x_{i}$ is from the centroid. Points with $h_{ii}>2p/n$ warrant inspection. Influence statistics like Cook's distance combine leverage with residual magnitude.

#### Profile likelihood

For a parameter of interest $\psi$ with nuisance $\lambda$, the profile likelihood is $L_{p}(\psi)=\max_{\lambda}L(\psi,\lambda)$. Plotting $L_{p}(\psi)$ reveals nonquadraticity, boundaries, and multiple modes. A flat profile indicates weak identification.

### Exact and conditional methods

When asymptotics fail, exact methods can help:

- **Exact logistic regression:** Conditions on the sufficient statistics of the nuisance parameters, eliminating them from the inference. Computationally intensive but exact under the model.
- **Permutation tests:** Exact under the sharp null of exchangeability, regardless of sample size.
- **Firth's bias-reduced logistic regression:** Adds a Jeffreys prior penalty to remove the first-order bias and prevent infinite estimates under separation.
- **Parametric bootstrap:** Simulates from a fitted boundary model. Valid only if the fitted model is credible.

### Penalization and changed distributions

Penalization stabilizes an estimator but changes its sampling distribution. A ridge regression estimator has bias toward zero and reduced variance. Confidence intervals must account for the penalty, either through Bayesian posterior credible intervals or through adjusted frequentist methods.

### Honest reporting

When diagnostics indicate fragile asymptotics, honest reporting includes:

- Wide confidence intervals that reflect genuine uncertainty
- Sensitivity analyses showing how conclusions change under alternative assumptions
- Clear statements about which regularity conditions are violated
- Consideration of whether the scientific question can be answered with available data

Sometimes the correct conclusion is that the data are insufficient for the intended inference.

### Worked example: near-separation in logistic regression

Consider $n=20$ observations with a single binary covariate: $10$ controls ($x=0$) with $2$ events, and $10$ treated ($x=1$) with $9$ events.

**MLE:** $\hat{\beta}_{1}=\log(9/1)-\log(2/8)=\log(9)-\log(0.25)\approx 2.197-(-1.386)=3.583$.

**Wald interval:** For this two-group $2\times2$ table, the large-sample variance of the log odds ratio is the sum of the four inverse cell counts:

$$\widehat{\operatorname{Var}}(\hat\beta_1)=\frac19+\frac11+\frac12+\frac18=\frac{125}{72},$$

so the standard error is about $1.318$. The $95\%$ Wald interval is therefore $3.583\pm1.96(1.318)\approx(1.00,6.17)$. The earlier intercept-only information formula cannot be used for this slope contrast.

**Exact interval:** An exact conditional interval conditions on the margins and inverts the noncentral-hypergeometric test. Its endpoints depend on the chosen exact-tail convention and should be computed with a documented implementation; the small cell count makes comparison with the Wald interval essential. We do not quote unverified numerical endpoints here.

### Common errors and misconceptions

- **Ignoring separation warnings.** Statistical software often reports large coefficients and standard errors near separation. These are signs of model failure, not large effects.

- **Using asymptotic p-values with few clusters.** The $t$-distribution with $J-1$ degrees of freedom is a better approximation than the normal when $J<30$.

- **Treating penalized estimates as MLEs.** Ridge, LASSO, and Firth estimates are not MLEs. Their standard errors require specialized methods.

- **Assuming the parametric bootstrap fixes everything.** The parametric bootstrap simulates from a fitted model. If the model is wrong, the bootstrap distribution is wrong.

The complete earlier reading and its original exercises remain available as [Small-sample and boundary inference](small-sample-and-boundary-diagnostics.md).

## Conditional calibration gives an exact Brier decomposition

Let a binary outcome be predicted by a random forecast probability, and let the conditional event probability given that forecast be its calibration function. Conditional expectation expands Brier risk into conditional outcome variance plus squared discrepancy between calibration function and forecast.

Apply total variance to the binary outcome. Its marginal variance equals average conditional variance plus the variance of that calibration function. Combining the identities yields
$$
E(Y-P)^2=\operatorname{Var}(Y)
-\operatorname{Var}(E[Y\mid P])
+E(E[Y\mid P]-P)^2.
$$
The first term is outcome uncertainty, the second is resolution and the last is calibration error. All terms are finite because outcome and forecast lie in the unit interval.

Matching only the overall mean forecast to overall event prevalence does not remove the last term. Calibration is a conditional statement across forecast values, not merely equality of two marginal means.

For example, let outcome be fair binary and let an independent forecast choose zero or one with equal probabilities. Its marginal mean is correct, but conditional event probability remains one-half at either forecast. Its Brier risk is one-half, compared with one-quarter for the constant one-half forecast. Unsupported sharpness has worsened risk rather than improved information.

This identity is a population statement. Estimating the calibration function from a small held-out sample introduces another smoothing or grouping problem. Choosing groups after looking for an attractive plot changes the diagnostic procedure.

## A randomised quantile transform needs the actual conditional law

For a discrete outcome with known mass function, take its cumulative probability just below the observed value and add an independent uniform fraction of the mass at that value. Conditional on each outcome, this new variable is uniform over the corresponding probability interval.

Those intervals partition the unit interval, and each has length equal to the probability of its outcome. Mixing their uniform densities therefore gives density one over the whole interval. This proves an exact uniform transform for the stated known law.

Applying the inverse standard-normal distribution function then produces a standard normal variable. Repeated transforms are independent only if the outcome experiment and auxiliary uniforms supply that independence. A name such as quantile residual does not create it.

When parameters are estimated from the same outcomes, the fitted intervals depend on those outcomes and this partition-mixture proof does not apply. Even fitting on independent training data is insufficient for exactness unless the fitted conditional law equals the true held-out law. Splitting removes reuse, not model error.

## A boundary likelihood ratio with an exact mixture law

Observe iid Gaussian values with unit variance and a mean constrained to be nonnegative. Test mean zero against that constrained alternative. The constrained maximum likelihood estimate is the positive part of the sample mean.

Completing the quadratic log likelihood gives twice the log likelihood ratio equal to sample size times the square of that positive part. Under the null, square root of sample size times the mean is a standard normal variable. Thus the statistic is the squared positive part of a standard normal.

It is zero with probability one-half. On the positive half, its square has the same positive tail as half a chi-square law with one degree of freedom. The null distribution is therefore a one-half point mass at zero plus a one-half chi-square component.

This is exact for the declared known-variance model, not a universal formula for every boundary. Other constraints, unidentified nuisance parameters and variance-component geometries can produce different mixtures or more complicated limits.

At an observed positive statistic, its upper tail is one minus the standard normal cumulative probability at its square root. At an observed zero, the inclusive upper-tail probability is one because the atom is included. Dropping the atom or using an ordinary interior chi-square reference changes the test.

## What a fitted bootstrap must establish

With a completely known null law, an observed statistic and independently replicated statistics can be exchangeable. Their inclusive finite ranks support a valid Monte Carlo test when the replication and tie convention are specified.

Replacing the known parameter by its estimate breaks that exact argument: conditional on the fitted value, the original observation is not generally an independent draw from the same conditional distribution as the new replicates. Repeating the fit in each replicate is necessary for many intended procedures, but is not a universal proof of bootstrap validity.

One sufficient asymptotic statement is uniform convergence in probability of the bootstrap conditional distribution function to the relevant statistic’s true limiting distribution, together with continuity and an appropriate quantile condition at the desired level. Then bootstrap quantiles converge to the correct critical value and the original statistic’s distributional limit gives the intended limiting rejection probability.

That convergence is a theorem to prove under the chosen model. Nonregular maxima, data-selected boundaries and unstable tuning can defeat it. The exact boundary example above shows why declaring every fitted diagnostic chi-square or every refitted bootstrap calibrated suppresses the central inferential question.

## Practice exercises

### Exercise 17.1
<a id="model-checking-and-the-double-use-of-data-legacy-17-1"></a>

Show that for OLS regression **with an intercept**, the raw residuals satisfy $\sum_{i}r_{i}=0$ and $\sum_{i}x_{ij}r_{i}=0$ for each predictor $j$.

<details><summary>Hint 1</summary>

Write the least-squares normal equations.

</details>
<details><summary>Hint 2</summary>

The intercept is a design column of ones.

</details>
<details><summary>Solution</summary>

The normal equations are $X^{T}(y-X\hat{\beta})=0$, which is exactly $\sum_{i}x_{ij}(y_{i}-\hat{y}_{i})=0$. For the intercept, $x_{i1}=1$, so $\sum_{i}r_{i}=0$. For a nonsaturated fit with nondegenerate errors, these nontrivial constraints prevent mutual independence of all residuals. A saturated zero-residual vector is a degenerate exception. ∎

</details>

### Exercise 17.2
<a id="model-checking-and-the-double-use-of-data-legacy-17-2"></a>

Explain why posterior predictive p-values are not generally uniformly distributed under the null, and give a simple exact illustration.

<details><summary>Hint 1</summary>

Separate the conditional replicate law from the repeated-data law of the observed statistic.

</details>
<details><summary>Hint 2</summary>

In the Gaussian flat-prior example, the posterior predictive replicate mean is centred exactly at the observed mean.

</details>
<details><summary>Solution</summary>

Conditional on the observed data, $y^{\mathrm{rep}}$ is generated from the fitted posterior predictive law, but the already observed $y$ is not a fresh draw from that conditional law. Because $y$ also formed the posterior, the usual probability-integral-transform argument for a uniform tail area does not generally apply. For an exact illustration, take $Y_i\mid\theta\sim\mathcal N(\theta,\sigma^2)$ with known $\sigma^2$ and a flat prior. Then $\theta\mid y\sim\mathcal N(\bar y,\sigma^2/n)$ and

$$\bar Y^{\mathrm{rep}}\mid y\sim\mathcal N(\bar y,2\sigma^2/n).$$

Therefore $\mathbb P(\bar Y^{\mathrm{rep}}\ge\bar y\mid y)=1/2$ for every dataset, a point mass at $1/2$ rather than a uniform distribution across repeated data. Other discrepancies and models can behave differently, and known-parameter or pivotal cases can be uniform; the claim is “not generally uniform,” not “never uniform.” ∎

</details>

### Exercise 17.3
<a id="model-checking-and-the-double-use-of-data-legacy-17-3"></a>

For a time series model, explain why the Ljung-Box test with $k=20$ lags may have low power against long-memory alternatives.

<details><summary>Hint 1</summary>

A fixed finite set of lags is a restricted discrepancy.

</details>
<details><summary>Hint 2</summary>

Power depends on sample size and the strength of dependence captured by those selected lags.

</details>
<details><summary>Solution</summary>

Long-memory processes have slowly decaying autocorrelations. The Ljung-Box test with $k=20$ captures only the first $20$ lags. If autocorrelations are significant at lags $21$-$100$, the test misses them. A test with larger $k$ or a specific long-memory diagnostic (e.g., Hurst exponent) is needed. ∎


This is a possible low-power mechanism, not a claim that long-memory alternatives have exactly zero initial autocorrelations. Their finite-lag signal, sample size and reference covariance determine actual power.

</details>


## Further exercises on scores and checking

The three earlier exercise labels remain unchanged; these extensions complete the merged chapter’s supported problem set.

### Exercise 17.4
<a id="model-checking-and-the-double-use-of-data-ex-4"></a>

Prove that matching mean forecast to event prevalence need not imply calibration.

<details><summary>Hint 1</summary>

Use an independent random zero-or-one forecast for a fair outcome.

</details>
<details><summary>Hint 2</summary>

Condition on either forecast value.

</details>
<details><summary>Solution</summary>

The forecast mean and prevalence are both one-half, but the event probability conditional on forecast zero or one is still one-half. Neither reported extreme is calibrated. Squared forecast error has expectation one-half, while the constant calibrated half forecast has risk one-quarter.

</details>

### Exercise 17.5
<a id="model-checking-and-the-double-use-of-data-ex-5"></a>

Derive the Brier decomposition through conditional expectation.

<details><summary>Hint 1</summary>

Expand around the conditional mean of the outcome given the forecast.

</details>
<details><summary>Hint 2</summary>

Use total variance.

</details>
<details><summary>Solution</summary>

Conditional squared error equals conditional outcome variance plus squared calibration discrepancy. Average and replace average conditional variance by marginal outcome variance minus the variance of the conditional mean. This gives the displayed uncertainty-minus-resolution-plus-calibration-error identity.

</details>

### Exercise 17.6
<a id="model-checking-and-the-double-use-of-data-ex-6"></a>

Why does the known-law randomised discrete transform have a uniform distribution?

<details><summary>Hint 1</summary>

Its outcome-specific intervals have lengths equal to outcome masses.

</details>
<details><summary>Hint 2</summary>

Mix the conditional uniform densities.

</details>
<details><summary>Solution</summary>

On each probability interval, its outcome is chosen with probability equal to interval length and the conditional density is its reciprocal. Their product is one. The intervals partition the unit interval up to endpoints, so the mixture density is uniform.

</details>

### Exercise 17.7
<a id="model-checking-and-the-double-use-of-data-ex-7"></a>

Does independent training make fitted quantile residuals exactly normal?

<details><summary>Hint 1</summary>

Independence removes reuse but not predictive misspecification.

</details>
<details><summary>Hint 2</summary>

The transform proof requires the actual held-out conditional law.

</details>
<details><summary>Solution</summary>

No. Conditional on training, a fitted distribution can still differ from the true law of a future outcome. Its intervals then have lengths not matching actual outcome probabilities, so the density-one calculation fails. Exactness requires correct conditional probabilities in addition to independence.

</details>

### Exercise 17.8
<a id="model-checking-and-the-double-use-of-data-ex-8"></a>

Find the null mass at zero in the constrained Gaussian likelihood-ratio example.

<details><summary>Hint 1</summary>

The sample mean is symmetric about zero.

</details>
<details><summary>Hint 2</summary>

The constrained estimate truncates negative means to zero.

</details>
<details><summary>Solution</summary>

Under the null, a standard normal scaled mean is nonpositive with probability one-half. Every such value gives statistic zero. Positive values produce the half chi-square tail. The null atom is therefore exactly one-half.

</details>

### Exercise 17.9
<a id="model-checking-and-the-double-use-of-data-ex-9"></a>

Why is the inclusive upper-tail probability one at a zero boundary statistic?

<details><summary>Hint 1</summary>

All possible statistics are nonnegative.

</details>
<details><summary>Hint 2</summary>

Include ties at the atom.

</details>
<details><summary>Solution</summary>

The event of a null statistic at least zero is the whole sample space. Its probability is one. A half-tail or mid-p convention would be a different procedure and would need its own calibration statement.

</details>

### Exercise 17.10
<a id="model-checking-and-the-double-use-of-data-ex-10"></a>

Why is refitting inside bootstrap replicates not a universal validity proof?

<details><summary>Hint 1</summary>

The conditional bootstrap law must approximate the actual repeated-procedure law.

</details>
<details><summary>Hint 2</summary>

Nonregular functionals can break that approximation.

</details>
<details><summary>Solution</summary>

Refitting preserves a necessary part of the intended algorithm but does not establish distributional consistency. A theorem must control the conditional law and relevant quantiles under the model. Boundary, maximum or adaptive-selection examples can fail even when every replicate repeats the fit.

</details>

## Forward and backward connections

This chapter examined how to check models without overclaiming. In *Survey-Weighted Models and Targets*, we extend these ideas to survey data, where design weights complicate residual interpretation. In *Reproducible Numerical Inference*, we discuss how to ensure that model-checking computations are reproducible and verifiable.

## Summary

Loss defines a decision target, proper scoring assesses a predictive law and discrepancy checks target declared assumptions. Calibration and residual transforms require the actual conditional experiment. Fitting, selection and parameter boundaries can change reference distributions; the displayed Gaussian boundary example and conditional bootstrap criteria make those changes explicit. Numerical reproducibility preserves a calculation, while inferential validity still needs its mathematical model.
