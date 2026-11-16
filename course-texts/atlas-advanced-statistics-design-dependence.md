
# Advanced Statistics: Design, Dependence, and Incomplete Outcomes

<!-- euler-course-route -->

## Current course route

Use the [course page](#/courses/atlas-advanced-statistics-design-dependence) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

This is a standard upper-division course for data that are weighted, non-Gaussian, multivariate, ordered, censored, or spatially dependent. It assumes probability distributions, expectation and variance, statistical inference, linear regression, calculus, and linear algebra. Time-series units use stochastic-process language; spatial units benefit from multivariable calculus. Proof details and regularity conditions continue in the [advanced reference book](#/books/advanced-statistical-inference-reference).

The course has one recurring rule: define the estimand and data-generating structure before optimizing a criterion. An excellent optimizer can fit the wrong likelihood, and a tiny standard error can quantify the wrong repeated experiment.

## Entry diagnostic and 35-hour route

Try these without software. The point is to choose an honest starting place, not
to earn a score.

1. If \(E(X)=3\) and \(E(Y)=5\), find \(E(2X-Y)\). Must \(X\) and \(Y\) be independent?
2. A treatment is randomized within 12 schools. Name the independent assignment
   unit and explain why 600 student rows do not create 600 assignments.
3. Differentiate
   \(\ell(\beta)=y\beta-\log(1+e^\beta)\) twice and identify its curvature.
4. For \(A=\begin{pmatrix}2&1\\1&2\end{pmatrix}\), find the two eigenvalues.
5. Explain why censoring someone at their event time would change a survival
   risk set.
6. State one difference between a confidence interval and a prediction interval.

**Diagnostic answers and repairs.** The answers are \(1\), with no independence
needed; school, because treatment labels were assigned to schools;
\(\ell'(\beta)=y-p\) and \(\ell''(\beta)=-p(1-p)\le0\), where
\(p=(1+e^{-\beta})^{-1}\); eigenvalues \(3\) and \(1\); an event contributes to
the event count while censoring removes an observation without an event; and a
confidence interval targets an unknown population feature whereas a prediction
interval targets a future observation. If Questions 1 or 3 are difficult, repair
expectation and calculus before Units 3–5. If Question 2 is difficult, start with
design randomization. If Question 4 is difficult, review covariance geometry
before Unit 6. If Questions 5 or 6 are difficult, expect to spend extra time on
Units 10–13.

Use this route as five seven-hour stages:

| Stage | Course work | Reference and evidence |
| --- | --- | --- |
| 1. Design and targets | Units 1–2; reproduce the stratified estimate and write two different estimands for one dataset | [Design randomization](../books/advanced-statistical-inference-reference/design-randomization-as-a-probability-space.md) and [calibration estimators](../books/advanced-statistical-inference-reference/ratio-and-calibration-estimators.md); submit an estimand-and-design memo |
| 2. Likelihood and geometry | Units 3–6; derive one score and audit one covariance matrix | [Generalized linear likelihood](../books/advanced-statistical-inference-reference/generalized-linear-likelihood.md) and [multivariate normal geometry](../books/advanced-statistical-inference-reference/multivariate-normal-geometry.md); submit derivations plus numerical checks |
| 3. Robust and dependent data | Units 7–10; compare a classical and robust estimate, then run rolling-origin validation | [Robust functionals](../books/advanced-statistical-inference-reference/robust-functionals.md) and [dependent central limits](../books/advanced-statistical-inference-reference/dependent-central-limits.md); submit a sensitivity table |
| 4. Events and space | Units 11–12; construct risk sets and a three-location kriging system | [Counting-process survival](../books/advanced-statistical-inference-reference/counting-process-survival-theory.md) and [spatial covariance](../books/advanced-statistical-inference-reference/spatial-covariance-and-kriging.md); submit assumptions beside every result |
| 5. Selection and synthesis | Units 13–14 and the cumulative assessment | [Multiplicity and selection](../books/advanced-statistical-inference-reference/multiplicity-and-post-selection-scope.md) and [model checking](../books/advanced-statistical-inference-reference/model-checking-and-the-double-use-of-data.md); complete the capstone audit |

At the end of each stage, record the estimand, repeated experiment, independent
unit, assumptions used for identification, and one result that would change
under a plausible alternative model. Do not advance with only a software output.

## Unit 1 — From records to an estimand

Describe an observed record as $(Y_i,X_i,D_i,R_i,L_i)$: response, covariates, design information, observation indicator, and location or order. Not every problem uses every component. The estimand might be a finite-population mean, conditional mean function, forecast distribution, survival probability, spatial average, or causal contrast.

Separate three mechanisms:

1. **selection:** which units entered the dataset;
2. **assignment or exposure:** what treatment or condition each unit received;
3. **measurement and observation:** which variables and event times became visible.

Probability sampling can justify population generalization without identifying a causal effect. Random treatment assignment can identify a causal contrast in the experimental population without making that population representative. Measurement error can defeat both.

**Claim ladder.** Description concerns observed records. Design inference averages over a sampling or randomization mechanism. Model inference averages over a posited stochastic law. Causal inference also requires an intervention estimand and identification. State which rung each interval occupies.

## Unit 2 — Survey designs and weights

For a finite population with fixed values $y_i$, let inclusion indicator $I_i$ have known probability $\pi _i>0$. The Horvitz–Thompson total

$\hat{Y}=\sum _i I_i y_i/\pi _i$

is design-unbiased because $E_d(I_i)=\pi _i$. Pairwise inclusion probabilities determine variance; independence is not assumed. Under SRSWOR, the sample-mean variance is $(1-n/N)S^{2}/n$.

Stratification draws separately inside exhaustive, nonoverlapping groups and combines stratum estimates with population shares. It can improve precision when within-stratum variation is small. Cluster sampling selects groups and usually increases variance when members resemble one another. Multistage weights multiply conditional selection probabilities.

Nonresponse adjustment and calibration add assumptions. A base weight $1/\pi _i$ corrects unequal random selection, not an unobserved response mechanism. Replicate or Taylor standard errors must reproduce strata, primary sampling units, finite-population corrections, and weight adjustments. The [survey deep dive](../articles/survey-sampling-design-weights.md) derives these pieces.

**Worked design.** A population has strata of sizes 80 and 20. Samples of 8 and 5 have means 4 and 10. The stratified mean is $0.8(4)+0.2(10)=5.2$, not the unweighted average 7. If sample variances are 4 and 9, the estimated variance is

$0.8^{2}(1-8/80)4/8+0.2^{2}(1-5/20)9/5=0.288+0.054=0.342$.

## Unit 3 — Generalized linear models

An exponential-dispersion family has density or mass, relative to a stated measure,

$$
f(y;\theta,\varphi)
=\exp\left\{\frac{y\theta-b(\theta)}{a(\varphi)}+c(y,\varphi)\right\}.
$$

Then $E(Y)=b'(\theta )$ and $\operatorname{Var}(Y)=a(\varphi )b''(\theta )$ under regularity permitting differentiation. A generalized linear model specifies independent responses conditional on a design matrix, a systematic component $\eta _i=x_i^T\beta$, and a monotone differentiable link $g(\mu _i)=\eta _i$, where $\mu _i=E(Y_i|x_i)$.

The link is not the distribution. A Poisson response can use a noncanonical link, and a log link can be used with non-Poisson positive outcomes. The canonical link equates $\eta$ with natural parameter $\theta$, simplifying score equations but not automatically fitting the science.

Maximum likelihood estimates β. Iteratively reweighted least squares is Newton or Fisher scoring in weighted working coordinates. Numerical convergence is not model adequacy. Check support, mean–variance relation, residual patterns, influential points, separation, link shape, and dependence.

The deviance compares the fitted likelihood with a saturated model. Its reference distribution is often asymptotic and can fail with sparse cells, boundary parameters, dispersion misspecification, or data-dependent model search.

## Unit 4 — Binary regression

For $Y_i\in \{0,1\}$, logistic regression uses

$$
p_i=P(Y_i=1\mid x_i),\qquad
\log\frac{p_i}{1-p_i}=x_i^{T}\beta.
$$

The log-likelihood is

$$
\ell(\beta)=\sum_i
\left[y_i\log p_i+(1-y_i)\log(1-p_i)\right].
$$

Its score is $X^T(y-p)$ and Hessian is $-X^T W X$, with diagonal $W_i=p_i(1-p_i)$. If $X$ has full column rank and fitted probabilities remain inside $(0,1)$, the Hessian is negative definite on identifiable directions. Complete separation can send an estimate toward infinity; a warning is not solved by reporting the last finite iterate.

For coefficient $\beta _j$, $\exp(\beta _j)$ is a conditional odds ratio for a one-unit change holding other included predictors fixed. It is not a risk ratio. Marginal effects depend on covariate values. Standardization can average predicted risks over a target covariate distribution.

Association is not causation. A causal interpretation requires a defined intervention, consistency, exchangeability or randomization, positivity, and correct handling of time ordering. Predictive calibration and discrimination answer still different questions.

**Worked probability.** With $\eta =-1+0.7x$, at $x=2$, $\eta =0.4$ and $p=1/(1+e^{-0.4})\approx 0.599$. Increasing $x$ one unit multiplies conditional odds by $e^{0.7}\approx 2.014$; it does not add 0.7 to probability.

## Unit 5 — Counts, rates, and dispersion

For a Poisson GLM,

$Y_i\mid x_i\sim\operatorname{Poisson}(\mu _i)$, $\log \mu _i=x_i^T\beta +\log e_i$,

where exposure $e_i>0$ enters as a fixed offset. Then $\exp(\beta _j)$ is a conditional rate ratio. The Poisson model imposes $\operatorname{Var}(Y_i|x_i)=\mu _i$. Extra-Poisson variance may arise from omitted heterogeneity, dependence, excess zeros, or a different count mechanism.

A quasi-Poisson analysis retains the mean model and estimates $\operatorname{Var}(Y|x)=\varphi \mu$, supporting sandwich-like scale adjustment but not a full likelihood for AIC comparisons. Negative-binomial models specify a different mean–variance relation through latent heterogeneity. Zero-inflated and hurdle models answer different generative stories and need enough data to identify their components.

Robust sandwich covariance can protect large-sample standard errors against selected variance misspecification when independent clusters and regularity hold. It does not repair a wrong conditional mean, extreme leverage, few clusters, selection bias, or causal confounding.

## Unit 6 — Multivariate geometry

For random vector $X\in\mathbb R^p$, covariance matrix
$\Sigma=\mathbb E[(X-\mu)(X-\mu)^T]$ is symmetric positive semidefinite
because $a^T\Sigma a=\operatorname{Var}(a^TX)\ge0$. Its eigenvectors give
orthogonal directions and eigenvalues give variance along them.

Sample covariance

$$
S=\frac{1}{n-1}\sum_i(x_i-\bar x)(x_i-\bar x)^T
$$

has rank at most $\min(p,n-1)$. When $p\ge n$, it is singular; inverting it
without regularization is impossible. Mahalanobis squared distance
$(x-\mu)^T\Sigma^{-1}(x-\mu)$ requires a positive-definite covariance and is
sensitive to covariance estimation.

PCA solves $\max_{\lVert v\rVert=1} v^T S v$, so the first loading is a leading eigenvector. Subsequent directions are orthogonal. Scores are projections, loadings define directions, and explained-variance proportions are eigenvalues divided by trace. Centering is essential; scaling decides whether units or standardized correlations govern geometry. PCA is unsupervised and need not preserve directions relevant to an outcome or minority subgroup.

For a multivariate normal sample with fixed $p<n$, Hotelling’s $T^{2}$ gives joint mean inference under its assumptions. Performing separate unadjusted intervals does not provide the same joint coverage. In high dimensions, asymptotics and regularization must change.

## Unit 7 — Ranks, empirical distributions, and smoothers

The empirical CDF is $F_n(x)=n^{-1}\sum _i 1\{X_i\le x\}$. For iid observations, it converges uniformly to the population CDF. Pointwise binomial uncertainty is not automatically a simultaneous band.

Rank procedures can be distribution-free under continuity and exchangeability. The Wilcoxon rank-sum test compares distributions; interpreting it purely as a median test needs shape or shift assumptions. Paired signs or signed ranks respect pairs. A permutation distribution is exact only for transformations that leave the joint null law invariant.

A kernel density estimate is

$\hat f_h(x)=(1/(nh))\sum _i K((x-X_i)/h)$.

Bandwidth $h$ controls bias and variance. For sufficiently smooth densities and second-order kernels, interior bias is commonly order $h^{2}$ and variance order $1/(nh)$, motivating $h$ of order $n^{-1/5}$ for integrated squared error. Constants and rates change with dimension, smoothness, dependence, and boundaries. A density estimate can be nonnegative and integrate to one when the kernel does, yet still fit poorly.

For regression, local averaging estimates $E(Y|X=x)$. Cross-validation must reproduce clusters, time order, or spatial separation; ordinary random folds assume row exchangeability.

## Unit 8 — Robustness and sensitivity

The contamination neighborhood $(1-\varepsilon )F+\varepsilon G$ asks how an estimator responds when a small fraction comes from arbitrary $G$. An influence function describes infinitesimal contamination; finite-sample breakdown asks how many replacements can drive an estimator arbitrarily far.

The mean has unbounded influence and breakdown near zero. The median has bounded influence under a positive density near its center and finite-sample breakdown near one half. A Huber location M-estimator solves

$\sum _i \psi _c((x_i-\theta )/s)=0$,

where $\psi _c(u)=u$ inside $[-c,c]$ and clips outside. The scale $s$ and tuning constant must be specified. High-leverage regression points require robust design-space diagnostics; clipping only response residuals may not protect against leverage.

Use the [robust nonparametric workflow](../articles/recipe-robust-nonparametric-workflow.md) to pair a primary estimator with contamination, bandwidth, and dependence sensitivities.

## Unit 9 — Stationary time series

A weakly stationary process has constant mean $\mu$ and autocovariance $\gamma (h)=\operatorname{Cov}(X_t,X_{t+h})$ depending only on lag. Autocorrelation is $\rho (h)=\gamma (h)/\gamma (0)$. Sample autocorrelations at many lags are dependent estimates; a forest of spikes invites multiplicity errors.

For AR(1),

$X_t=c+\varphi X_{t-1}+\varepsilon _t$, with iid innovations of mean 0 and variance $\sigma ^{2}$.

When $|\varphi |<1$, the causal stationary solution is

$X_t=\mu +\sum _{j=0}^\infty \varphi ^j \varepsilon _{t-j}$, $\mu =c/(1-\varphi )$,

with variance $\sigma ^{2}/(1-\varphi ^{2})$ and autocorrelation $\varphi ^{|h|}$. If $|\varphi |\ge 1$, those stationary formulas do not apply. A unit-root process can produce spurious regressions and requires a different asymptotic regime.

The one-step forecast is $c+\varphi X_t$; the $h$-step forecast is $\mu +\varphi ^h(X_t-\mu )$. Conditional forecast-error variance is $\sigma ^{2}\sum _{j=0}^{h-1}\varphi ^{2j}$ when parameters are known. Estimated parameters add uncertainty.

Residual whiteness is necessary but not sufficient. Check variance, tails, regime change, calendar effects, missing intervals, and whether the deployment horizon matches validation.

## Unit 10 — State space, spectra, and forecasting

A linear Gaussian state-space model distinguishes latent state and measurement:

$\alpha _t=F\alpha _{t-1}+G\eta _t$,

$Y_t=H\alpha _t+\varepsilon _t$.

The Kalman filter recursively propagates conditional means and covariances under Gaussian linear assumptions; in non-Gaussian settings it remains a best-linear or approximate tool depending on formulation. Initial-state distribution and noise covariance are part of the model, not software defaults.

The spectral density redistributes variance across frequency. Under a convention where $\gamma (h)=\int _{-\pi }^{\pi }e^{i\omega h}f(\omega )d\omega$, AR(1) has

$f(\omega )=\sigma ^{2}/[2\pi |1-\varphi e^{-i\omega }|^{2}]$.

Periodograms are noisy and smoothing trades resolution for variance. Peaks can reflect deterministic seasonality, stochastic cycles, aliases, or leakage. Sampling cadence limits identifiable frequencies.

Forecast scoring should use proper rules such as log score or continuous ranked probability score for distributions, and absolute or squared error for appropriate point targets. Choose the score before comparing models. Rolling-origin evaluation prevents future leakage; retraining and hyperparameter selection must occur inside each training window.

## Unit 11 — Survival and event histories

For nonnegative event time $T$, survival is $S(t)=P(T>t)$, distribution is $F(t)=1-S(t)$, density is $f$ when it exists, and hazard is

$$
\lambda(t)=\lim_{\Delta\downarrow0}
\frac{P(t\le T<t+\Delta\mid T\ge t)}{\Delta}.
$$

For an absolutely continuous law, cumulative hazard
$\Lambda(t)=\int_0^t\lambda(u)\,du$ and
$S(t)=\exp[-\Lambda(t)]$. Hazard has units inverse time.

With right censoring $C$, observe $Y=\min(T,C)$ and event indicator $\delta =1\{T\le C\}$. Kaplan–Meier multiplies $(1-d_i/n_i)$ at event times. Its standard identification uses independent censoring, possibly conditional on covariates. Greenwood variance and log-log intervals are large-sample pointwise approximations. The [live laboratory](../apps/atlas/index.html#/labs?lab=visual-lab-kaplan-meier) exposes every risk set.

The Cox proportional-hazards model is

$\lambda (t|x)=\lambda _0(t)\exp(x^T\beta )$.

Partial likelihood compares covariates of an event case with the risk set at that time, avoiding direct parametrization of baseline hazard. Ties need a declared approximation or exact treatment. Proportional hazards is an assumption: a constant hazard ratio over time. A hazard ratio is not a survival-probability ratio and is generally non-collapsible.

Competing risks distinguish cause-specific hazards from cumulative incidence. Treating a competing event as independent censoring estimates a hypothetical world where that event is removed, not the observed probability of the event type. Delayed entry requires left-truncated risk sets; immortal-time bias appears when eligibility or exposure timing is mishandled.

## Unit 12 — Spatial random fields

For a second-order stationary field $Z(s)$, mean is constant and covariance $C(h)=Cov[Z(s),Z(s+h)]$. The semivariogram is

$\gamma (h)=\tfrac12\operatorname{Var}[Z(s+h)-Z(s)]=C(0)-C(h)$

under stationarity. Not every visually plausible variogram is conditionally negative definite, and not every distance works with every covariance kernel.

Ordinary kriging predicts $Z(s_0)$ by $\sum _i w_i Z(s_i)$ with weights summing to one and chosen to minimize model-based prediction variance. Solve the covariance linear system with a Lagrange multiplier. The kriging variance reflects sampling geometry and the fitted covariance model, not uncertainty about model selection unless added.

Anisotropy means dependence changes with direction. Nonstationarity means it changes with location. A nugget can reflect measurement error or variation below sampling resolution. Prefer blocked or leave-location-out validation to random splits when deployment requires prediction into separated areas.

Point-process data describe random locations; geostatistical data observe values at locations; areal data aggregate over regions. Their likelihoods and biases differ. Preferential sampling occurs when observation locations depend on the latent process.

## Unit 13 — Multiplicity, selection, and honest uncertainty

If $m$ null hypotheses each have valid p-value $p_j$, Bonferroni rejects when $p_j\le \alpha /m$, controlling familywise error without independence. Holm’s step-down method is at least as powerful while retaining strong familywise control. Benjamini–Hochberg targets false discovery rate under independence and certain positive dependence; arbitrary dependence needs modified guarantees.

Confidence intervals after choosing variables, transformations, breakpoints, bandwidths, outcomes, or subgroups using the same data generally do not retain naive coverage. Pre-specification, sample splitting, selective inference, or full-pipeline resampling can address different selection structures. “We corrected the final p-values” may not cover the exploration that generated them.

Asymptotic standard errors require a sequence of problems: iid sample size, number of independent clusters, time horizon under mixing, spatial domain or infill regime, or number of events in survival analysis. A nominally huge row count can contain few independent clusters or events. State what grows.

## Unit 14 — Integrated audit and capstone

For a real dataset, produce:

1. target, frame, unit, time origin, spatial support, and estimand;
2. directed description of selection, assignment, censoring or missingness, and dependence;
3. one primary estimator with its estimating equation or likelihood;
4. an uncertainty argument naming the repeated experiment and asymptotic regime;
5. diagnostics for link, variance, outliers, stationarity, proportional hazards, or covariance as relevant;
6. validation that preserves survey clusters, order, event timing, or spatial separation;
7. multiplicity and model-selection accounting;
8. sensitivity analysis for nonresponse, censoring, contamination, unmeasured confounding, or nonstationarity;
9. an accessible numerical table plus a graphic;
10. a claim ladder that stops before unsupported causality.

## Cumulative assessment with solved course problems

**1. Poisson offset.** One region records 12 cases over 3,000 person-years and another 10 over 1,000. With only a group indicator and log-exposure offset, what is the fitted rate ratio of the second to the first?

**Solution.** Saturated group rates are $12/3000=0.004$ and $10/1000=0.010$ per person-year. Their ratio is $2.5$; the log-group coefficient is $\log 2.5$. Comparing raw counts would reverse the exposure-aware impression.

**2. AR(1).** Let $X_t=2+0.5X_{t-1}+\varepsilon _t$, with innovation variance 3. Find the stationary mean, variance, lag-two correlation, and two-step forecast from $X_t=6$.

**Solution.** Mean is $2/(1-0.5)=4$; variance is $3/(1-0.25)=4$; lag-two correlation is $0.5^{2}=0.25$; forecast is $4+0.5^{2}(6-4)=4.5$. These use $|\varphi |<1$ and known parameters.

**3. PCA.** For covariance $\begin{pmatrix}5 & 4 \\ 4 & 5\end{pmatrix}$, find eigenvalues and principal directions.

**Solution.** Directions $(1,1)/\sqrt2$ and $(1,-1)/\sqrt2$ have eigenvalues
9 and 1. Ninety percent of total variance lies along the first. This
conclusion is tied to the variables’ current units.

**4. Survival.** Six are at risk just before time 2, with two events. Four are at risk just before time 5, with one event. Find estimated survival just after time 5.

**Solution.** Multiply conditional survival factors: $(6-2)/6 \times (4-1)/4=(4/6)(3/4)=1/2$. Any censoring between the times is already reflected in the second risk-set count.

**5. Multiplicity.** Ten hypotheses have smallest p-values 0.003, 0.008, and 0.017. Which pass Bonferroni familywise level 0.05?

**Solution.** Threshold is $0.05/10=0.005$, so only 0.003 passes. This does not say the other null hypotheses are true or the retained effect is practically important.

### Feedback map

- If an answer changes when rows are duplicated, revisit the independent unit
  and repeated experiment in Units 1–2.
- If a coefficient interpretation omits the link scale or conditioning set,
  revisit Units 3–5 and translate the fitted value into the response scale.
- If a standard error is reported without a dependence structure, identify
  clusters, order, censoring, or spatial support before recomputing it.
- If diagnostics are used to select a model and the same nominal interval is
  then reported, revisit Unit 13 and account for that selection.
- If the capstone conclusion sounds causal, mark the exact assignment or
  identification step. Without one, lower the claim to association or
  prediction.
