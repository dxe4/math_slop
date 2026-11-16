
# Missing Data, Identification, and Sensitivity {#section-1-missing-data-identification-and-sensitivity}

<a id="section-1-level-and-prerequisites"></a>
## Level and prerequisites {#section-3-level-and-prerequisites}

This is a chapter of the L3 inference route. Preparation is [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs), especially its [Gaussian-vector chapter](../probability-models-proofs/gaussian-vectors-and-multivariate-normal.md), and [Lucent linear algebra](#/books/lucent-linear-algebra). The L3 core uses conditional expectation, integrability and finite observed-law constructions. Fitted-nuisance asymptotics, proper multiple imputation and general longitudinal dropout theory need the stronger conditions explicitly named locally. They are optional advanced needs, not consequences of the elementary MAR identity alone.


Missing data are not blank cells waiting for a software default. They arise through a response, observation, censoring, or linkage mechanism that determines which components of a full-data law are visible. Without restrictions on that mechanism, many full-data distributions can produce exactly the same observed-data distribution while disagreeing about the estimand.

This chapter proves that nonidentification, derives identification under missing-at-random and positivity assumptions, develops inverse-probability, outcome-regression, and augmented estimators, and builds bounds and sensitivity models when missingness may depend on unseen outcomes. It then treats multiple imputation, attrition after randomization, survey nonresponse, and diagnostics with their claim boundaries intact.

<a id="section-10-1-full-data-and-observed-data-are-different-random-obje"></a>
## 1. Full data and observed data are different random objects {#section-12-1-full-data-and-observed-data-are-different-random-obje}

Let $Y$ be an outcome that would be recorded under complete observation, $X$ a vector observed for every unit, and

$R=1$ if $Y$ is observed, $R=0$ otherwise.

The observed record is

$O=(X,R,RY)$.

The target might be the full-data mean

$\mu =E[Y]$.

The observed-data law identifies the distribution of $X$, the response probability $P(R=1|X)$, and the respondent outcome law $P(Y|X,R=1)$. It does not directly reveal $P(Y|X,R=0)$.

Deleting incomplete rows changes the experiment from the full target population to the selected respondent population. A large number of complete cases can estimate the wrong mean very precisely.

<a id="section-28-2-a-simple-nonidentification-proof"></a>
## 2. A simple nonidentification proof {#section-30-2-a-simple-nonidentification-proof}

<a id="section-30-worked-example-1-identical-observed-records-with-differ"></a>
### Worked example 1: identical observed records with different full means {#section-32-worked-example-1-identical-observed-records-with-differ}

Suppose $P(R=1)=1/2$ and every observed respondent has binary outcome $Y=1$. Consider two full-data states:

- State A: every nonrespondent has $Y=0$;
- State B: every nonrespondent has $Y=1$.

Both states produce the same observed distribution: half the units respond, and every recorded outcome is one. Yet

$E_A[Y]=1/2$, $E_B[Y]=1$.

No estimator based only on observed data can consistently estimate the full mean in both states. Its sampling law is identical under A and B, while the targets differ. Identification requires a restriction, design information, or partial-identification report.

This is the observation-equivalence theorem from Chapter 2 applied to a missingness map.

<a id="section-45-3-mcar-mar-and-mnar-are-conditional-statements"></a>
## 3. MCAR, MAR, and MNAR are conditional statements {#section-47-3-mcar-mar-and-mnar-are-conditional-statements}

Three common conditions are:

- **missing completely at random (MCAR):** $R$ is independent of $(X,Y)$;
- **missing at random (MAR) given recorded covariates:** $R$ is conditionally independent of $Y$ given $X$, equivalently $P(R=1|X,Y)=P(R=1|X)$;
- **missing not at random (MNAR):** response can depend on $Y$ even after conditioning on the chosen recorded covariates.

MAR is relative to the information in $X$. Adding a predictive, fully observed covariate can make an assumption more plausible; conditioning on an error-prone proxy need not.

MCAR makes respondents representative without adjustment for the marginal outcome distribution. Under MAR, respondents can differ systematically in $X$, so complete-case means need not target $E[Y]$, but adjustment using $X$ can identify it.

These labels describe mathematical restrictions, not diagnostic verdicts. MAR and MNAR mechanisms can be observationally equivalent, so observed data alone cannot generally test which holds.

<a id="section-59-4-positivity-is-required-for-adjustment"></a>
## 4. Positivity is required for adjustment {#section-61-4-positivity-is-required-for-adjustment}

Define response propensity

$e(X)=P(R=1|X)$.

The positivity condition requires $e(X)>0$ almost surely on the target covariate population, often strengthened to $e(X)\ge \varepsilon >0$ for stable estimation.

If a covariate stratum never responds, its outcome law is absent. MAR cannot identify that stratum's mean because there are no respondent outcomes to transfer. Very small propensities produce large weights and weak practical information even though formal positivity holds.

Plots or tables of estimated propensities can diagnose near-violations, but they cannot prove outcomes of never-observed units resemble those of observed units.

<a id="section-71-5-inverse-probability-weighting-under-mar"></a>
## 5. Inverse-probability weighting under MAR {#section-73-5-inverse-probability-weighting-under-mar}

**Theorem 17.1.** If MAR holds, $e(X)>0$, and expectations exist, then

$E[RY/e(X)]=E[Y]$.

**Proof.** Condition on $(X,Y)$:

\[E[RY/e(X)|X,Y]\]

$=Y E[R|X,Y]/e(X)$.

MAR makes $E[R|X,Y]=e(X)$, so the conditional expectation is $Y$. Taking expectation proves the result. ∎

For iid data, a Horvitz–Thompson-style estimator is

$\hat{\mu }_{\mathrm{IPW}}=n^{-1}\sum _i R_iY_i/\hat{e}(X_i)$.

A normalised Hájek version divides the weighted observed total by $\sum _iR_i/\hat{e}(X_i)$. It can be more stable but is not exactly unbiased. Estimated propensities add fitting error; valid uncertainty must account for their estimation and any sample design.

<a id="section-91-6-outcome-regression-uses-conditional-mean-transport"></a>
## 6. Outcome regression uses conditional mean transport {#section-93-6-outcome-regression-uses-conditional-mean-transport}

Let

$m_1(x)=E[Y|X=x,R=1]$.

Under MAR,

$m_1(x)=E[Y|X=x]$ wherever positivity holds. Therefore

$\mu =E[m_1(X)]$.

An outcome-regression estimator fits $\hat{m}_1$ among respondents and averages predictions over the covariates of all target units:

$\hat{\mu }_{\mathrm{OR}}=n^{-1}\sum _i \hat{m}_1(X_i)$.

This method avoids extreme inverse weights when the mean model is accurate, but extrapolates its fitted response surface into covariate regions with sparse respondents. Model diagnostics among respondents cannot validate extrapolation to response-empty regions.

<a id="section-109-7-augmentation-combines-both-routes"></a>
## 7. Augmentation combines both routes {#section-111-7-augmentation-combines-both-routes}

The augmented estimating function is

$\phi (O;m,e)=m(X)+R[e(X)]^{-1}[Y-m(X)]$.

Under MAR, positivity, $E|Y|<\infty$, and integrability of $\phi (O;m,e)$, its expectation equals $\mu $ if either of two nuisance components is correct.

<a id="section-117-correct-propensity"></a>
### Correct propensity {#section-119-correct-propensity}

If $e(X)$ is the true response propensity, then conditioning on $(X,Y)$ gives

$E[R(Y-m(X))/e(X)|X,Y]=Y-m(X)$.

Adding $m(X)$ and averaging yields $E[Y]$, regardless of the chosen integrable $m$.

<a id="section-125-correct-outcome-mean"></a>
### Correct outcome mean {#section-127-correct-outcome-mean}

If $m(X)=E[Y|X]$, MAR gives $E[Y-m(X)|X,R=1]=0$. For any positive working propensity $e^*(X)$,

$E[R(Y-m(X))/e^*(X)|X]=0$.

Thus expectation again equals $E[m(X)]=\mu $.

This property is called **double robustness**. It does not mean protection when both models are wrong, when MAR fails, or when flexible nuisance fitting overfits without cross-fitting or empirical-process control. Near-zero estimated propensities can still dominate variance.

<a id="section-135-8-bounded-outcomes-give-assumption-light-bounds"></a>
## 8. Bounded outcomes give assumption-light bounds {#section-137-8-bounded-outcomes-give-assumption-light-bounds}

Suppose $a\le Y\le b$. Without MAR,

$\mu =P(R=1)E[Y|R=1]+P(R=0)E[Y|R=0]$.

Because the missing mean lies in $[a,b]$,

\[P(R=1)E[Y|R=1]+P(R=0)a\]

\[\le \mu \le \]

$P(R=1)E[Y|R=1]+P(R=0)b$.

These worst-case bounds are wide when missingness is common, but they are identified under only the outcome range and observed law.

For a binary outcome with response rate $0.6$ and respondent mean $0.7$, the bounds are

\[0.6(0.7)+0.4(0)=0.42\]

to

$0.6(0.7)+0.4(1)=0.82$.

Auxiliary information, monotonicity, or bounded differences between respondent and nonrespondent means can narrow the interval, but each restriction must be visible.

<a id="section-161-9-pattern-mixture-sensitivity-shifts-unseen-means"></a>
## 9. Pattern-mixture sensitivity shifts unseen means {#section-163-9-pattern-mixture-sensitivity-shifts-unseen-means}

A transparent sensitivity model specifies

$E[Y|X,R=0]=m_1(X)+\delta (X)$.

The function $\delta $ is not identified from observed outcomes. It represents how the nonrespondent mean differs from the respondent mean after matching on $X$.

Since

$E[Y|X]=e(X)m_1(X)+[1-e(X)][m_1(X)+\delta (X)]$,

the sensitivity estimand is

$\mu (\delta )=E[m_1(X)+[1-e(X)]\delta (X)]$.

MAR is the special case $\delta =0$. A sensitivity analysis evaluates a scientifically justified range of $\delta $, reports how estimates and decisions change, and identifies a tipping value rather than choosing the value that preserves a desired conclusion.

For constant $\delta $, the mean shifts from the MAR estimate by $P(R=0)\delta $. Thus a 30% missing fraction and plausible mean difference $\delta \in [-2,1]$ shifts the estimate by $[-0.6,0.3]$.

<a id="section-181-10-selection-models-parameterise-response-instead"></a>
## 10. Selection models parameterise response instead {#section-183-10-selection-models-parameterise-response-instead}

Another approach specifies how response odds vary with the unseen outcome, for example

$\operatorname{logit} P(R=1|X,Y)=\alpha (X)+\gamma Y$.

The sensitivity parameter $\gamma $ encodes residual outcome-dependent selection. At $\gamma =0$, the model is MAR. Nonzero values require fitting a full-data outcome model jointly with response.

Pattern-mixture and selection models can encode equivalent full-data laws in different coordinates. Sensitivity values must be calibrated in understandable units—mean shifts, odds ratios, benchmark covariate effects, or external validation data—not treated as arbitrary tuning constants.

<a id="section-191-11-multiple-imputation-propagates-model-uncertainty"></a>
## 11. Multiple imputation propagates model uncertainty {#section-193-11-multiple-imputation-propagates-model-uncertainty}

For the combining formulas below, let $M\ge2$ be an integer. Multiple imputation draws $M$ completed datasets from a predictive distribution for missing values that includes uncertainty in fitted parameters. Analyse each dataset to obtain estimate $Q_m$ and complete-data variance estimate $U_m$.

Define

$\bar{Q}=M^{-1}\sum _mQ_m$,

$\bar{U}=M^{-1}\sum _mU_m$,

$B=(M-1)^{-1}\sum _m(Q_m-\bar{Q})^{2}$.

Rubin's combining variance is

$T=\bar{U}+(1+1/M)B$.

The within-imputation term measures ordinary complete-data uncertainty; the between-imputation term reflects missing-data and Monte Carlo uncertainty under the imputation model.

Single mean imputation treats filled values as known, distorts relationships and distributions, and usually understates uncertainty. Multiple imputation is not automatically valid: imputation and analysis models must be congenial enough for the target, design variables and weights must be represented, and MNAR sensitivity remains necessary when MAR is doubtful.

<a id="section-211-12-attrition-after-randomization"></a>
## 12. Attrition after randomization {#section-213-12-attrition-after-randomization}

Random assignment balances potential outcomes at baseline, but observed outcome comparison can become selected if $R$ differs by assignment and potential outcome. The intention-to-treat effect on the full assigned population is not generally identified from complete cases alone.

Analyses can report treatment-specific response rates, worst-case bounded-outcome intervals, inverse-probability adjustment under conditional MAR, and sensitivity shifts by treatment arm. A sharp no-treatment-effect null does not automatically make post-treatment response patterns ignorable.

If treatment affects whether an outcome is defined—survival before quality-of-life measurement, for example—the estimand itself needs revision. Assigning arbitrary values to undefined outcomes combines causal and missing-data questions without declaring the value judgement.

<a id="section-219-13-survey-nonresponse-composes-probabilities"></a>
## 13. Survey nonresponse composes probabilities {#section-221-13-survey-nonresponse-composes-probabilities}

For sampled unit inclusion probability $\pi _i$ and conditional response probability $r_i$, the observed inclusion probability is $\pi _ir_i$ under the factorisation. Inverse weighting uses $1/(\pi _ir_i)$ when the response model and positivity are credible.

Calibration can reduce bias by matching respondent weights to known population totals, but it cannot guarantee equality of missing and observed outcomes within calibration cells. Variance must include sampling, response adjustment, nuisance estimation, and any weight trimming.

Trimming extreme weights trades variance for bias. The threshold and target population should be included in a sensitivity ledger rather than hidden as data cleaning.

<a id="section-227-14-missing-covariates-and-dropout-require-a-joint-recor"></a>
## 14. Missing covariates and dropout require a joint record {#section-229-14-missing-covariates-and-dropout-require-a-joint-recor}

When covariates are missing, complete-case regression can change both outcome and design distributions. Imputing covariates without outcomes can discard associations needed by the analysis; using outcomes in imputation is often appropriate for prediction of missing covariates even though the final regression conditions on them.

Longitudinal dropout creates monotone patterns and dependence across time. Inverse-probability-of-censoring weights require sequential conditional exchangeability and positivity at every visit. Joint models, mixed models, and imputation make different restrictions about post-dropout outcomes. None is a default truth.

<a id="section-233-15-diagnostics-and-sensitivity-audit"></a>
## 15. Diagnostics and sensitivity audit {#section-235-15-diagnostics-and-sensitivity-audit}

Record:

1. full-data estimand and observed-data map;
2. missingness unit, timing, reason codes, and treatment relation;
3. observed variables included in the MAR claim;
4. positivity and overlap diagnostics;
5. propensity, outcome, or imputation model and fitting uncertainty;
6. sample-design and clustering integration;
7. worst-case or scientifically constrained bounds;
8. sensitivity parameter scale, range, and tipping conclusions;
9. failed imputations, extreme weights, and undefined outcomes.

<a id="section-247-earlier-weighting-and-nonresponse-treatment"></a>
## Earlier weighting and nonresponse treatment {#section-249-earlier-weighting-and-nonresponse-treatment}

The following retained development links the earlier advanced orientation to this primary identification route. Its fitted-nuisance limit claims require the locally stated stronger assumptions; a full tangent and cross-fitted expansion is in [Semiparametric Efficiency](../advanced-statistical-inference-reference/semiparametric-efficiency-and-influence-functions.md).

This chapter studies identification and estimation when some outcomes are missing. The key insight is that missingness is a problem of *identification*: without assumptions, the distribution of missing values is not recoverable from observed data. Rubin's taxonomy and inverse-probability weighting provide a framework for honest inference under declared assumptions.

<a id="section-253-rubin-s-taxonomy"></a>
### Rubin's taxonomy {#section-255-rubin-s-taxonomy}

Let $R$ indicate whether outcome $Y$ is observed ($R=1$) or missing ($R=0$). Let $X$ be fully observed covariates.

- **Missing completely at random (MCAR):** $R$ is independent of $(Y,X)$. This is usually too strong.
- **Missing at random (MAR):** $R$ is independent of $Y$ given $X$. Formally, $\mathbb{P}(R=1\mid Y,X)=\mathbb{P}(R=1\mid X)$.
- **Missing not at random (MNAR):** $R$ depends on $Y$ even after conditioning on $X$.

MAR is an *identification* condition. Under MAR and positivity ($\mathbb{P}(R=1\mid X)>0$ on the target support), the joint distribution of $(Y,X)$ is identified from the observed data.

<a id="section-263-inverse-probability-weighting"></a>
### Inverse-probability weighting {#section-265-inverse-probability-weighting}

If the response probability $\pi(X)=\mathbb{P}(R=1\mid X)$ is known,

$$\mathbb{E}\Bigl[\frac{RY}{\pi(X)}\Bigr]=\mathbb{E}\Bigl[\mathbb{E}\Bigl(\frac{RY}{\pi(X)}\Bigm|X,Y\Bigr)\Bigr]=\mathbb{E}\Bigl[\frac{Y\pi(X)}{\pi(X)}\Bigr]=\mathbb{E}[Y],$$

where the first equality uses the law of iterated expectations and the second uses MAR ($\mathbb{P}(R=1\mid X,Y)=\mathbb{P}(R=1\mid X)=\pi(X)$).

<a id="section-271-estimated-weights"></a>
#### Estimated weights {#section-273-estimated-weights}

In practice, $\pi(X)$ is estimated by a model $\hat{\pi}(X)$. The inverse-probability-weighted (IPW) estimator is

$$\hat{\mu}_{IPW}=\frac{1}{n}\sum_{i=1}^{n}\frac{R_{i}Y_{i}}{\hat{\pi}(X_{i})}.$$

Estimated weights can be unstable when $\hat{\pi}(X)$ is near zero. Weight truncation changes bias and variance. The response model cannot be validated against missing $Y$; sensitivity parameters are necessary for departures from MAR.

<a id="section-279-doubly-robust-estimation"></a>
### Doubly robust estimation {#section-281-doubly-robust-estimation}

An *augmented* estimator combines outcome regression with weighting:

$$\hat{\mu}_{DR}=\frac{1}{n}\sum_{i=1}^{n}\Bigl[\hat{m}(X_{i})+\frac{R_{i}(Y_{i}-\hat{m}(X_{i}))}{\hat{\pi}(X_{i})}\Bigr],$$

where $\hat{m}(X)$ is an estimator of $\mathbb{E}[Y\mid X]$.

<a id="section-287-theorem-14-1-double-robustness"></a>
#### Theorem 14.1 — Double robustness {#section-289-theorem-14-1-double-robustness}

Assume iid sampling, MAR, $\mathbb E[Y^2]<\infty$, and positivity bounded away from zero. Use sample splitting or cross-fitting so each observation is evaluated with nuisance fits trained off its fold. Suppose the fitted response probabilities are uniformly bounded away from zero, the nuisance fits converge in $L_2(P)$ to limits $(m_*,\pi_*)$, and their empirical terms obey a law of large numbers. If either $m_*(X)=\mathbb E[Y\mid X]$ or $\pi_*(X)=\mathbb P(R=1\mid X)$ almost surely, then $\hat\mu_{DR}\to_p\mathbb E[Y]$. For root-$n$ asymptotic linearity when both nuisances are estimated, a standard sufficient remainder condition is

$$\|\hat m-m\|_{2}\,\|\hat\pi-\pi\|_{2}=o_p(n^{-1/2}),$$

together with the corresponding empirical-process or cross-fitting conditions.

**Proof sketch.** For fixed limits $(m_*,\pi_*)$, iterated expectation shows that the population augmented functional equals $\mathbb E[Y]$ when either limit is correct. The cross-fitted law of large numbers replaces the fitted empirical average by that functional. Expanding around the true nuisances leaves a second-order bias proportional to the product of their errors; the displayed product-rate condition makes this remainder $o_p(n^{-1/2})$ for asymptotic linearity. ∎

Double robustness does *not* protect against:
- Both models being wrong
- Severe positivity failure ($\pi(X)$ near zero)
- Measurement error in $X$
- A target population absent from the data

<a id="section-303-survey-nonresponse"></a>
### Survey nonresponse {#section-305-survey-nonresponse}

Survey nonresponse adds a missingness layer after design selection. The full weight combines inverse inclusion and response probabilities:

$$w_{i}=\frac{1}{\pi_{i}\cdot\pi_{i}^{(r)}},$$

where $\pi_{i}$ is the design inclusion probability and $\pi_{i}^{(r)}$ is the response probability. The variance reflects both sampling stages and the estimation of response probabilities.

<a id="section-311-worked-example-ipw-and-doubly-robust-estimation"></a>
### Worked example: IPW and doubly robust estimation {#section-313-worked-example-ipw-and-doubly-robust-estimation}

Consider a population with binary $X\in\{0,1\}$, where $\mathbb{P}(X=1)=0.5$, $\mathbb{E}[Y\mid X=0]=2$, $\mathbb{E}[Y\mid X=1]=5$, and $\pi(0)=0.8$, $\pi(1)=0.6$. The true mean is $\mathbb{E}[Y]=0.5\cdot 2+0.5\cdot 5=3.5$.

**IPW with known weights:**

$$\mathbb{E}\Bigl[\frac{RY}{\pi(X)}\Bigr]=0.5\cdot\frac{0.8\cdot 2}{0.8}+0.5\cdot\frac{0.6\cdot 5}{0.6}=0.5\cdot 2+0.5\cdot 5=3.5.$$

**Population augmented functional:** If $m(X)$ is correct ($m(0)=2$, $m(1)=5$) but the response-probability limit is misspecified as $0.7$ for both groups, its expectation is

$$\mu_{DR}(m,\pi_*)=0.5\cdot 2+0.5\cdot 5+0.5\cdot\frac{0.8(2-2)}{0.7}+0.5\cdot\frac{0.6(5-5)}{0.7}=3.5.$$

The augmentation term vanishes because $m$ is correct. If $m$ is misspecified as $m(X)=3$ for both groups but $\pi$ is correct,

$$\mu_{DR}(m_*,\pi)=3+0.5\cdot\frac{0.8(2-3)}{0.8}+0.5\cdot\frac{0.6(5-3)}{0.6}=3-0.5+1=3.5.$$

The weighting corrects the misspecified regression.

<a id="section-329-common-errors-and-misconceptions"></a>
### Common errors and misconceptions {#section-331-common-errors-and-misconceptions}

- **Assuming MAR holds without justification.** MAR is an untestable assumption. Sensitivity analysis should always accompany MAR-based inference.

- **Using IPW without checking positivity.** If some units have near-zero response probabilities, their weights dominate the estimator. Weight distributions should be inspected.

- **Confusing double robustness with double correctness.** Double robustness means consistency if *either* model is correct, not that both can be wrong. If both are wrong, the estimator is generally inconsistent.

- **Ignoring weight estimation in the variance calculation.** Treating fitted
  weights as fixed can misstate variance in either direction; the sign depends
  on the estimator, response model, and covariance between estimating stages.
  A joint sandwich calculation or a bootstrap that refits the response model
  must incorporate the estimation stage.

The earlier complete source, including its original exercises, remains [Missingness and Weighting as Identification](../advanced-statistical-inference-reference/missingness-and-weighting-as-identification.md).

<a id="section-345-16-exercises-with-complete-solutions"></a>
## 18. Development: follow one observed law through the alternatives {#section-895-18-development-follow-one-observed-law-through-the-alte}

<a id="section-895-worked-example-2-compare-mar-bounds-and-a-tipping-shift"></a>
### Worked example 2: compare MAR, bounds and a tipping shift {#section-897-worked-example-2-compare-mar-bounds-and-a-tipping-shift}

A single table can expose the distinction between an observed-data calculation and an identifying assumption. Let $X$ be a fully observed binary covariate with probabilities one-half each. The outcome $Y$ is binary, and $R$ indicates whether it is observed. Specify the following entire observed-data law. A missing-outcome row reports only its probability, not a value of $Y$.

| $X$ | $R$ | Recorded outcome | Observed-record probability |
| --- | --- | --- | --- |
| $0$ | $1$ | $Y=1$ | $1/10$ |
| $0$ | $1$ | $Y=0$ | $2/5$ |
| $1$ | $1$ | $Y=1$ | $1/5$ |
| $1$ | $1$ | $Y=0$ | $1/20$ |
| $1$ | $0$ | unobserved | $1/4$ |

These probabilities sum to one. They identify $e(0)=1$, $e(1)=1/2$, and respondent means $m_1(0)=1/5$, $m_1(1)=4/5$. The overall response probability is $3/4$, and $E[RY]=3/10$. Thus the complete-case population mean is $(3/10)/(3/4)=2/5$. This is the mean among respondents, an identified feature of the observed law. It is not automatically the full-data mean.

Under MAR given $X$, the full-data conditional means equal the respondent means. The target is then
$$\mu=\frac12\frac15+\frac12\frac45=\frac12.$$
There is no missingness in the first covariate cell; the MAR restriction matters in the second. Respondents overrepresent the lower-mean first cell, which explains the downward difference between complete-case and adjusted means. This is a synthetic probability model, not a collected dataset or a simulation result.

The oracle IPW identity evaluates to
$$E[RY/e(X)]=\frac{1/10}{1}+\frac{1/5}{1/2}=\frac12.$$
The weighted response count has expectation $(1/2)/1+(1/4)/(1/2)=1$, so the ratio of these population expectations also equals one-half. A realized normalised estimator is a random ratio and need not be exactly unbiased. Outcome regression instead predicts $1/5$ for every target unit in cell zero and $4/5$ in cell one; averaging across the target covariate probabilities again gives one-half.

Augmentation shows the two routes separately. Choose the deliberately wrong working regression $m^*(0)=m^*(1)=2/5$ but retain the correct response probabilities. Its prediction mean is $2/5$. The weighted-residual expectation in cell zero is $(1/2)(1/5-2/5)=-1/10$; in cell one it is $(1/2)(4/5-2/5)=1/5$. Adding them to $2/5$ gives $1/2$. The prediction error is corrected by residuals averaged under the full target distribution.

Conversely, use the correct conditional mean and the wrong working propensity $e^*(0)=e^*(1)=1$. Within each respondent cell, the residual has mean zero, so augmentation still yields one-half. If both working components are wrong, using $m^*=2/5$ and $e^*=1$, the residual expectation is $E[RY]-(2/5)E[R]=3/10-3/10=0$. The result is then $2/5$, not one-half. Double robustness does not create a third correct model when both supplied routes fail.

Without MAR, let $q=P(Y=1\mid X=1,R=0)$ be any value in $[0,1]$. The observed table is unchanged as $q$ varies, but
$$\mu(q)=\frac3{10}+\frac14q.$$
The sharp observed-law bounds are therefore $[3/10,11/20]$. Every value is attainable by assigning the unobserved binary outcome that success probability in the final row. The narrower MAR answer corresponds to the restriction $q=4/5$. More observations from this same observed law can estimate its cell probabilities more accurately but cannot identify $q$ without an additional assumption.

For a pattern-mixture sensitivity scale, write $q=4/5+\delta_1$. The binary range requires $-4/5\le\delta_1\le1/5$, and
$$\mu(\delta_1)=\frac12+\frac14\delta_1.$$
Suppose the predeclared decision threshold is a full mean of $9/20$. The tipping value solves $1/2+\delta_1/4=9/20$, giving $\delta_1=-1/5$, or missing-cell mean $q=3/5$. The observed law cannot tell whether that sensitivity value is plausible. Its role is to show exactly what unobserved difference changes the conclusion.

The same tipping state can be expressed as outcome-dependent response. Within $X=1$, observed probabilities for respondent successes and failures are $1/5$ and $1/20$ in the whole population; at $q=3/5$, the missing success and failure probabilities are $3/20$ and $1/10$. Response odds are then $(1/5)/(3/20)=4/3$ for successes and $(1/20)/(1/10)=1/2$ for failures. Their ratio is $8/3$, so a binary selection-model coefficient would be $\gamma=\log(8/3)$ in this cell. This translates a mean-shift sensitivity state into an odds scale; it does not estimate that state from respondents.

<a id="section-931-19-development-population-robustness-integrability-and-"></a>
## 19. Development: population robustness, integrability and fitted nuisances {#section-933-19-development-population-robustness-integrability-and-}

Write $e_0(X)$ for the true response probability and $m_0(X)=E[Y\mid X]$ under MAR. For fixed working functions $e^*>0$ and $m^*$, assume the expectations below exist as finite quantities. A sufficient condition is integrability of $Y$, $m^*(X)$ and $R\{Y-m^*(X)\}/e^*(X)$. Conditioning on $X$ gives
$$E[\phi(O;m^*,e^*)\mid X]
 =m^*(X)+\frac{e_0(X)}{e^*(X)}\{m_0(X)-m^*(X)\}.$$
Subtract $m_0(X)$ and average to obtain the exact bias identity
$$E[\phi]-\mu
 =E\!\left[\frac{e^*(X)-e_0(X)}{e^*(X)}
                 \{m^*(X)-m_0(X)\}\right].$$
Either factor being zero almost surely removes this population bias. With both wrong, their product and its sign determine the remaining error. This is more informative than merely labelling a method robust.

The integrability requirement cannot be replaced by pointwise positivity. Take $X$ uniform on $(0,1)$, independent $Y$ equal to $-1$ or $1$ with equal probability, and independent response probability one-half. MAR holds, $m_0=0$, and the working propensity $e^*(X)=X$ is strictly positive. Nevertheless the augmented score with correct $m_0$ is $RY/X$. Its absolute expectation is $(1/2)\int_0^1dx/x=\infty$; its positive and negative parts each have infinite expectation. Its ordinary signed expectation is undefined. Formally canceling the signs at every $x$ does not justify an unconditional tower calculation for this nonintegrable variable.

A lower bound $e^*\ge\epsilon>0$, together with integrable $Y$ and $m^*$, is one convenient sufficient protection. It is a mathematical stability assumption, not proof of a realistic response model. Truncating fitted probabilities to such a bound changes the fitted procedure and can introduce bias if the true probabilities lie below it. Report the threshold and inspect its effect. Small weights and a smooth output are not substitutes for identifying assumptions.

The oracle identities use fixed functions in a population expectation. In a finite iid sample with the true propensity supplied and an integrable fixed working regression, the unnormalized average of augmented scores is exactly unbiased under the stated model. Replace that propensity by an estimate from the same observations, and the argument no longer treats the weight as fixed when taking expectations. A fitted regression can also respond to the very outcome used in its residual. Population algebra is not by itself a finite-sample theorem for arbitrary fitted nuisance methods.

Sample splitting makes one part of this distinction transparent. Fit the working functions using a training sample independent of an evaluation sample. Conditional on training, they are fixed functions for the evaluation observations, and the displayed bias identity applies whenever its conditional integrability conditions hold. Cross-fitting repeats that idea across held-out folds so that each observation is evaluated with functions fitted without it. It helps separate fitting from evaluation; it does not turn an incorrect response mechanism into MAR or establish all conditions for a central limit theorem.

There is also a useful quantitative bound. If $e^*\ge\epsilon>0$ and the two nuisance errors have finite squared means, Cauchy–Schwarz gives
$$|E[\phi]-\mu|
 \le\epsilon^{-1}\|e^*-e_0\|_2\,\|m^*-m_0\|_2.$$
For fitted functions independent of evaluation, interpret this bound conditional on their training data. A product of error norms that is small compared with $n^{-1/2}$ controls this bias component on a root-$n$ scale. It does not alone prove asymptotic normality: evaluation-sample variation, convergence of the score, variance estimation and the sampling design still need their own arguments. No universal convergence rate for a named learning method follows from double robustness.

In the finite table, all working probabilities used in the comparisons are bounded away from zero, so these population expectations pose no integrability difficulty. Estimating a cell propensity by a response fraction in a small sample can still yield zero respondents in a cell, even when its true response probability is positive. Then a fitted inverse weight is undefined. Fitted-cell repairs, smoothing or model extrapolation must be declared and assessed as part of the estimator. They are not invisible implementations of the oracle identity.

The distinction between identification and uncertainty remains essential. A correct formula for the standard error of an estimator aimed at the complete-case mean does not make that mean equal the full-data target. Conversely, a MAR identification theorem does not supply a confidence interval until an estimation law has been justified. Bounds describe uncertainty left by missing information; sampling uncertainty in their estimated endpoints is a further layer. Keep both layers in the report instead of attaching an ordinary symmetric standard error to an unidentified point.

<a id="section-959-20-development-two-visits-and-the-boundary-of-imputatio"></a>
## 20. Development: two visits and the boundary of imputation formulas {#section-961-20-development-two-visits-and-the-boundary-of-imputatio}

<a id="section-961-worked-example-3-compose-two-retention-probabilities"></a>
### Worked example 3: compose two retention probabilities {#section-963-worked-example-3-compose-two-retention-probabilities}

For monotone dropout, specify the full and observed histories before multiplying probabilities. Let $X$ be recorded at baseline, and let $Y_1,Y_2$ be well-defined outcomes at visits one and two. Let $R_1$ indicate observation at visit one and $R_2\le R_1$ indicate retention through visit two. Assume
$$P(R_1=1\mid X,Y_1,Y_2)=r_1(X)>0,$$
and, among units with $R_1=1$,
$$P(R_2=1\mid R_1=1,X,Y_1,Y_2)=r_2(X,Y_1)>0.$$
These are sequential response restrictions. The second may depend on the observed first outcome; it cannot additionally depend on the still-unseen second outcome under this particular model.

The product rule gives
$$E[R_2\mid X,Y_1,Y_2]=r_1(X)r_2(X,Y_1).$$
For integrable $Y_2$, inverse weighting by this full product yields
$$E\!\left[\frac{R_2Y_2}{r_1(X)r_2(X,Y_1)}\right]=E[Y_2].$$
One can justify integrability directly with absolute values: conditional expectation of $R_2|Y_2|/(r_1r_2)$ is $|Y_2|$. The observed contribution is defined as zero when $R_2=0$; it does not require evaluating an unobserved $Y_1$ on a dropped-out record. On retained records the required history is available.

A small model shows why both stages matter. Take $Y_1=Y_2$ binary with success probability one-half, first-visit response probability $4/5$ independent of outcomes, and second retention probability one for $Y_1=0$ but one-half for $Y_1=1$. Then retained zeros have population probability $2/5$ and retained ones probability $1/5$. The final response rate is $3/5$, and the complete-case mean is $1/3$ rather than the target one-half. Full weights are $5/4$ for retained zeros and $5/2$ for retained ones. Their expected weighted counts are one-half each, restoring the target.

Using only the second-stage probability in an unnormalized full-population mean gives $E[R_2Y_2/r_2]=2/5$, because first-stage losses remain. In this special model a normalised last-stage ratio happens to cancel the constant first-response fraction; that accidental cancellation is not a general justification when first response depends on covariates related to the outcome. Sampling weights, if present before baseline, add a further recorded stage. Multiplying known probabilities is straightforward; defending each conditional independence and estimating each probability are separate tasks.

The dropout model also marks a scientific boundary. If $Y_2$ is undefined after death rather than merely unrecorded, treating every death as missing a well-defined $Y_2$ asserts an unintroduced counterfactual outcome. Choose the estimand first: a composite outcome, a survivor target or another scientifically defended quantity requires its own interpretation. A weighting identity cannot decide that choice.

Multiple imputation addresses a different part of the same record. It supplies draws of missing values under a declared predictive model and passes completed records to an analysis procedure. For a common joint Bayesian model, the law of total variance decomposes posterior uncertainty into the average complete-data conditional variance and the variation of the complete-data conditional mean over missing values. This probability identity explains why replacing every missing outcome by one fitted number omits a component of uncertainty.

Finite Monte Carlo averaging adds another component. Conditional on observed data, suppose independently generated completed-data estimates have variance $B_\infty$. Their average over $M$ draws has Monte Carlo variance $B_\infty/M$. The sample between-imputation variance estimates $B_\infty$ under that simulation model. These identities motivate the extra $B/M$ term in the combining expression, but they are not a proof that every imputation-and-analysis pair yields a calibrated frequentist interval.

The imported Rubin rule in §11 therefore has a qualification boundary. Rubin's 1996 treatment states the combining equations and evaluates properness relative to the complete-data estimate and variance procedure. Its normal-approximation and response-model framework cannot be replaced by the mere fact that $M$ completed files exist. A valid complete-data analysis, an appropriate imputation model and its relation to the analysis matter; finite-$M$ reference distributions require their own adjustment. We do not assert universal exact coverage for the displayed variance formula.

A practical imputation ledger records the estimand, predictors and design variables, how parameter uncertainty is drawn, which missingness restriction is imposed, the complete-data analysis and the combining method. It also records failed fits and sensitivity alternatives. Generating more imputations reduces Monte Carlo variability; it does not identify an unseen mean under MNAR or cure a model that excludes an important interaction. In the observed-cell table, changing $q$ while preserving the observed law remains possible regardless of how many completed datasets a computer generates.


<a id="section-990-why-the-missing-cell-law-disappears-from-the-likelihood"></a>
### Why the missing-cell law disappears from the likelihood {#section-992-why-the-missing-cell-law-disappears-from-the-likelihood}

The invisible degree of freedom can be seen without invoking a missingness label. Write a full joint law by first specifying $f_X(x)$, then $e(x)$, and then two conditional outcome laws $f_1(y\mid x)$ and $f_0(y\mid x)$ for respondents and nonrespondents. For a respondent record the observed likelihood contribution is $f_X(x)e(x)f_1(y\mid x)$. For a nonrespondent it is $f_X(x)\{1-e(x)\}$, because summing or integrating $f_0(y\mid x)$ over the unseen outcome gives one.

Thus the observed likelihood contains no factor that distinguishes the possible nonrespondent outcome laws when those other components remain fixed. In the binary table this is exactly the free parameter $q$. MAR chooses the additional restriction $f_0=f_1$ in cells with both patterns, rather than extracting that equality from an observed likelihood comparison. Adding more fully observed predictors changes which conditional equality is asserted; it does not convert the equality into an observed fact.

External information can change the situation. A probability follow-up sample that successfully measures some formerly missing outcomes supplies a new observation mechanism and information about their distribution. A scientifically defended outcome range supplies the sharp bounds already calculated. A model may deliberately transfer information across cells. Each route adds information or a restriction. Fitting increasingly flexible respondent regressions alone does not supply the unobserved conditional law that vanished from the likelihood.

The confidence consequences are inherited from the identification argument, not avoided by a larger sample. Consider the two admissible full-data laws with $q=0$ and $q=1$. Their full means are $3/10$ and $11/20$, but they generate identical observed records for every iid sample size. Any confidence procedure that covers each full mean with probability at least $1-\alpha$ must, under their common observed law, include both with probability at least $1-2\alpha$ by the union bound. For a measurable-diameter procedure, diameter is therefore at least $1/4$ with probability at least $1-2\alpha$. At $\alpha=1/20$, this lower bound is $9/10$.

The statement is about uniform protection across the unrestricted model. It does not say a MAR interval must have that width after MAR has explicitly removed one of those full-data states. It shows why an interval cannot claim both unrestricted protection and arbitrary precision by treating a selected missingness model as a fact. Report the scope of the interval next to the scope of the sensitivity analysis.

<a id="section-1002-integrability-still-leaves-a-variance-question"></a>
### Integrability still leaves a variance question {#section-1004-integrability-still-leaves-a-variance-question}

Even correct oracle nuisance functions and an existing mean need not give a finite-variance score under weak positivity. Let $X$ be uniform on $(0,1)$, let $Y$ be an independent Bernoulli one-half variable, and let $R$ conditional on $(X,Y)$ be Bernoulli with probability $X$. Then MAR holds and the true functions are $e_0(X)=X$ and $m_0(X)=1/2$. The augmented score is
$$\frac12+\frac{R(Y-1/2)}X.$$
Its residual has finite absolute expectation one-half and mean zero, so the oracle identity is valid. But its second moment around the mean is
$$E\!\left[\frac{R(Y-1/2)^2}{X^2}\right]
 =\frac14\int_0^1\frac{dx}{x}=\infty.$$
Consequently the usual finite-variance iid central limit theorem does not apply to this score. Correctness of both nuisance functions has not supplied a finite asymptotic variance.

Compare this with the earlier signed-mean counterexample. There the expectation itself failed; here the expectation exists and equals the target, but a common route to a normal standard error fails. Uniform lower bounds or other moment controls address a different condition from MAR, and none should be hidden inside the phrase “double robust.” In the finite observed-cell table the oracle propensities are bounded, so it avoids these specific moment pathologies. That convenience belongs to the teaching model, not to every dataset with missing outcomes.

<a id="section-1013-21-optional-practice-extensions"></a>
## 23. Source boundary for multiple imputation {#section-1083-23-source-boundary-for-multiple-imputation}

Donald B. Rubin, [Multiple Imputation After 18+ Years](https://doi.org/10.1080/01621459.1996.10476908), JASA 91 (1996), 473–489, §2.2 equations 2.1–2.4 and §§2.4–2.5, supplies the combining-rule and properness reference used here. The original article was inspected; its formula is not treated as an unconditional finite-sample coverage theorem. The elementary total-variance and independent-average calculations above motivate components of the formula without replacing those imported qualifications.


<a id="section-1086-24-elaboration-of-original-solution-11-consistency-cond"></a>
## 24. Elaboration of original solution 11: consistency conditions {#section-1088-24-elaboration-of-original-solution-11-consistency-cond}

<a id="section-1088-original-exercise-11-population-identity-and-consistenc"></a>
### Original exercise 11 — population identity and consistency {#section-1090-original-exercise-11-population-identity-and-consistenc}

The corrected key keeps the primary answer: simultaneous nuisance misspecification leaves no guarantee of the full mean. The earlier key overstated a consistency guarantee; its direct qualification now distinguishes the population identity from the conditions for estimator consistency, as developed in §19. For fixed oracle functions with an integrable score, the population identity is an expectation statement; iid sample-average consistency then follows from the law of large numbers. For fitted functions, sampling conditions and appropriate nuisance convergence or equivalent error control are also required. Double robustness alone supplies neither. Thus the key should not be read as promising consistency for every fitted algorithm merely because one model family contains the truth. None of these qualifications restores a guarantee when both working limits are wrong.

<a id="section-1092-sources"></a>

<a id="section-516-summary"></a>
## Summary {#section-518-summary}

<a id="section-890-17-summary-and-forward-route"></a>
Observed data do not identify unseen outcome distributions without restrictions. MAR plus positivity supports inverse weighting and outcome regression; the augmented population identity holds under the stated moment conditions if either nuisance route is correct, while estimator consistency also requires appropriate sampling and nuisance-convergence conditions. Bounded outcomes yield honest worst-case intervals, while pattern-mixture and selection models parameterise departures from MAR. Multiple imputation propagates a declared predictive model, not certainty. Randomized experiments and probability samples retain their design logic only after attrition and nonresponse are incorporated into the observation law.


<a id="section-893-18-development-follow-one-observed-law-through-the-alte"></a>

<a id="section-1098-summary"></a>
Missingness separates the full-data target from the recorded-data law. MAR and positivity can identify weighting and regression formulas, but their assumptions are not observed-data facts. Augmentation protects a population identity under a correct nuisance route, not arbitrary fitted models or MNAR. Bounds, tipping shifts, sequential retention and properly qualified imputation expose which conclusions depend on unseen outcomes.

The main route continues to [Bayesian Decision and Inference Bridge](bayesian-decision-and-inference-bridge.md).

## Exercises {#section-347-16-exercises-with-complete-solutions}

<a id="section-347-1-observed-record"></a>
### 1. Observed record {#section-349-1-observed-record}

**Exercise 17.1**

What is recorded when $R=0$ in $O=(X,R,RY)$?

<details>
<summary>Hint 1</summary>

Separate the recorded product from the unobserved outcome.

</details>

<details>
<summary>Hint 2</summary>

When response is zero, the product zero is a placeholder regardless of the unseen value.

</details>

<details>
<summary>Solution</summary>

**Solution.** $X$ and the indicator zero are recorded; $RY=0$ is only a placeholder and does not reveal that the missing outcome itself equals zero.

</details>

<a id="section-374-2-nonidentification-example"></a>
### 2. Nonidentification example {#section-376-2-nonidentification-example}

**Exercise 17.2**

Compute the two full means in the half-response example.

<details>
<summary>Hint 1</summary>

Compute means under the two full-data laws rather than their shared recorded law.

</details>

<details>
<summary>Hint 2</summary>

One population has half zeros and half ones; the other has only ones.

</details>

<details>
<summary>Solution</summary>

**Solution.** State A has half ones and half zeros, so mean $0.5$. State B has all ones, so mean $1$. Their observed records are identical.

</details>

<a id="section-401-3-mcar-versus-mar"></a>
### 3. MCAR versus MAR {#section-403-3-mcar-versus-mar}

**Exercise 17.3**

If response depends on age $X$ but, within age, not on $Y$, which condition may hold?

<details>
<summary>Hint 1</summary>

Compare dependence on observed covariates with dependence on the outcome.

</details>

<details>
<summary>Hint 2</summary>

Age-dependent response can satisfy conditional MAR while violating unconditional MCAR.

</details>

<details>
<summary>Solution</summary>

**Solution.** MAR given age may hold. MCAR fails because response depends on $X$.

</details>

<a id="section-428-4-mnar-mechanism"></a>
### 4. MNAR mechanism {#section-430-4-mnar-mechanism}

**Exercise 17.4**

If people with larger unreported incomes respond less often even after conditioning on recorded age and occupation, classify the mechanism.

<details>
<summary>Hint 1</summary>

Condition on all covariates named in the mechanism.

</details>

<details>
<summary>Hint 2</summary>

Remaining dependence on unreported income is dependence on unseen outcome information.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is MNAR relative to those covariates because response still depends on unseen $Y$.

</details>

<a id="section-455-5-positivity-failure"></a>
### 5. Positivity failure {#section-457-5-positivity-failure}

**Exercise 17.5**

Why can MAR not identify the outcome mean in a covariate stratum with $e(X)=0$?

<details>
<summary>Hint 1</summary>

Inspect which outcomes are observed in the zero-response-probability stratum.

</details>

<details>
<summary>Hint 2</summary>

Conditional independence cannot manufacture any measured outcomes in that stratum.

</details>

<details>
<summary>Solution</summary>

**Solution.** No outcomes are observed there, so $E[Y|X]$ cannot be learned by transferring respondent outcomes within the stratum.

</details>

<a id="section-482-6-ipw-identity"></a>
### 6. IPW identity {#section-484-6-ipw-identity}

**Exercise 17.6**

Under MAR, evaluate $E[R/e(X)|X,Y]$.

<details>
<summary>Hint 1</summary>

Under MAR, the response mean given $X,Y$ is $e(X)$.

</details>

<details>
<summary>Hint 2</summary>

Divide that mean by the strictly positive $e(X)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** $E[R|X,Y]=e(X)$, so the conditional expectation is one. Multiplying by $Y$ gives the IPW theorem.

</details>

<a id="section-509-7-one-ipw-contribution"></a>
### 7. One IPW contribution {#section-511-7-one-ipw-contribution}

**Exercise 17.7**

If $R=1$, $Y=12$, and $e(X)=0.25$, find $RY/e(X)$.

<details>
<summary>Hint 1</summary>

Use the declared inverse-response contribution.

</details>

<details>
<summary>Hint 2</summary>

Divide twelve by one quarter; this is a contribution, not an observed outcome.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is $12/0.25=48$. The large contribution illustrates variance from small propensities.

</details>

<a id="section-536-8-outcome-regression-target"></a>
### 8. Outcome regression target {#section-538-8-outcome-regression-target}

**Exercise 17.8**

Why is averaging respondent predictions only over respondents generally insufficient under MAR?

<details>
<summary>Hint 1</summary>

The target averages over all baseline covariate values.

</details>

<details>
<summary>Hint 2</summary>

Averaging only over respondents uses their selected covariate distribution instead.

</details>

<details>
<summary>Solution</summary>

**Solution.** Respondents can have a different covariate distribution. Predictions must be averaged over the target population's $X$ distribution, including nonrespondents.

</details>

<a id="section-563-9-augmentation-with-correct-propensity"></a>
### 9. Augmentation with correct propensity {#section-565-9-augmentation-with-correct-propensity}

**Exercise 17.9**

Show $E[\phi (O;m,e)|X,Y]=Y$ when $e$ is correct.

<details>
<summary>Hint 1</summary>

Condition the weighted residual on $X,Y$.

</details>

<details>
<summary>Hint 2</summary>

The expected response indicator cancels the correct propensity, leaving $Y-m(X)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Conditional expectation of the residual term is $Y-m(X)$. Adding $m(X)$ gives $Y$.

</details>

<a id="section-590-10-augmentation-with-correct-outcome-mean"></a>
### 10. Augmentation with correct outcome mean {#section-592-10-augmentation-with-correct-outcome-mean}

**Exercise 17.10**

Why does the weighted residual term have conditional mean zero when $m(X)=E[Y|X]$ under MAR?

<details>
<summary>Hint 1</summary>

Use respondent outcome-mean transport under MAR.

</details>

<details>
<summary>Hint 2</summary>

When the outcome regression is correct, its residual has conditional mean zero among respondents.

</details>

<details>
<summary>Solution</summary>

**Solution.** MAR gives the same conditional mean among respondents, so $E[Y-m(X)|X,R=1]=0$. Multiplication by the response probability and any positive working weight preserves zero.

</details>

<a id="section-617-11-double-robust-limitation"></a>
### 11. Double-robust limitation {#section-619-11-double-robust-limitation}

**Exercise 17.11**

What if both nuisance models are wrong?

<details>
<summary>Hint 1</summary>

The protected identity requires at least one correct nuisance route and the other stated assumptions.

</details>

<details>
<summary>Hint 2</summary>

Neither simultaneous misspecification nor MNAR is covered; fitted-estimator consistency needs additional convergence conditions.

</details>

<details>
<summary>Solution</summary>

**Solution.** The expectation need not equal $\mu $. Under MAR, positivity and the stated integrability conditions, either correct nuisance route gives the augmented population expectation identity. Estimator consistency also requires suitable sampling and nuisance-fitting conditions. Neither claim protects against arbitrary simultaneous misspecification or MNAR.

</details>

<a id="section-644-12-binary-worst-case-bounds"></a>
### 12. Binary worst-case bounds {#section-646-12-binary-worst-case-bounds}

**Exercise 17.12**

Verify the bounds with response rate $0.6$ and respondent mean $0.7$.

<details>
<summary>Hint 1</summary>

Split the full mean into observed and missing contributions.

</details>

<details>
<summary>Hint 2</summary>

The unobserved binary mean can range from zero to one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Observed contribution is $0.6\cdot 0.7=0.42$. Missing binary mean lies in $[0,1]$, adding between zero and $0.4$, so bounds are $[0.42,0.82]$.

</details>

<a id="section-671-13-no-missingness"></a>
### 13. No missingness {#section-673-13-no-missingness}

**Exercise 17.13**

What happens to the bounded-outcome interval when $P(R=0)=0$?

<details>
<summary>Hint 1</summary>

The coefficient of every unobserved outcome contribution is the missing fraction.

</details>

<details>
<summary>Hint 2</summary>

At zero missing fraction both bound endpoints reduce to the observed full mean.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both endpoints equal the fully observed mean; the identification interval collapses.

</details>

<a id="section-698-14-constant-delta-shift"></a>
### 14. Constant delta shift {#section-700-14-constant-delta-shift}

**Exercise 17.14**

If the MAR estimate is $10$, missing fraction is $0.25$, and $\delta =-4$, find the sensitivity mean.

<details>
<summary>Hint 1</summary>

Multiply the declared mean shift by the missing fraction.

</details>

<details>
<summary>Hint 2</summary>

Add $0.25(-4)$ to the MAR baseline ten.

</details>

<details>
<summary>Solution</summary>

**Solution.** The shift is $0.25(-4)=-1$, so the sensitivity mean is $9$.

</details>

<a id="section-725-15-tipping-delta"></a>
### 15. Tipping delta {#section-727-15-tipping-delta}

**Exercise 17.15**

An estimate is $2$ under MAR with missing fraction $0.4$. What constant $\delta $ makes the sensitivity mean zero?

<details>
<summary>Hint 1</summary>

Set the shifted sensitivity mean equal to zero.

</details>

<details>
<summary>Hint 2</summary>

Solve $2+0.4\delta=0$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Solve $2+0.4\delta =0$, giving $\delta =-5$.

</details>

<a id="section-752-16-selection-model-mar-point"></a>
### 16. Selection-model MAR point {#section-754-16-selection-model-mar-point}

**Exercise 17.16**

In $\operatorname{logit} P(R=1|X,Y)=\alpha (X)+\gamma Y$, which value represents MAR?

<details>
<summary>Hint 1</summary>

MAR means no residual outcome dependence after conditioning on $X$.

</details>

<details>
<summary>Hint 2</summary>

Set the coefficient of $Y$ in the response log-odds to zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** $\gamma =0$, because response odds then no longer depend on $Y$ after conditioning on $X$.

</details>

<a id="section-779-17-multiple-imputation-point-estimate"></a>
### 17. Multiple-imputation point estimate {#section-781-17-multiple-imputation-point-estimate}

**Exercise 17.17**

For estimates $(4,5,6)$, find $\bar{Q}$.

<details>
<summary>Hint 1</summary>

The multiple-imputation point estimate averages the completed-data estimates.

</details>

<details>
<summary>Hint 2</summary>

Add four, five and six and divide by three.

</details>

<details>
<summary>Solution</summary>

**Solution.** The average is $(4+5+6)/3=5$.

</details>

<a id="section-806-18-rubin-variance"></a>
### 18. Rubin variance {#section-808-18-rubin-variance}

**Exercise 17.18**

If $\bar{U}=2$, $B=3$, and $M=5$, find $T$.

<details>
<summary>Hint 1</summary>

Use total variance formula $\bar U+(1+1/M)B$.

</details>

<details>
<summary>Hint 2</summary>

Insert two, three and five in their distinct roles.

</details>

<details>
<summary>Solution</summary>

**Solution.** $T=2+(1+1/5)3=2+3.6=5.6$.

</details>

<a id="section-833-19-single-imputation-uncertainty"></a>
### 19. Single-imputation uncertainty {#section-835-19-single-imputation-uncertainty}

**Exercise 17.19**

Why does replacing every missing outcome by one fitted value understate uncertainty?

<details>
<summary>Hint 1</summary>

A fitted imputed value is not an observed random outcome.

</details>

<details>
<summary>Hint 2</summary>

Single deterministic filling omits residual and parameter uncertainty.

</details>

<details>
<summary>Solution</summary>

**Solution.** It treats uncertain predictions as observed constants, omitting both residual variation in missing values and parameter uncertainty in the imputation model.

</details>

<a id="section-860-20-randomization-and-attrition"></a>
### 20. Randomization and attrition {#section-862-20-randomization-and-attrition}

**Exercise 17.20**

Does baseline randomization ensure complete-case outcomes remain randomized after outcome-dependent attrition?

<details>
<summary>Hint 1</summary>

Attrition is a post-assignment selection event.

</details>

<details>
<summary>Hint 2</summary>

Conditioning on it can break the assigned-population comparison even when initial assignment was random.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. Conditioning on post-assignment response can select different potential-outcome mixtures by arm. The full assigned-population effect needs missingness assumptions, bounds, or sensitivity analysis.

</details>


<a id="section-888-17-summary-and-forward-route"></a>

<a id="section-1015-21-optional-practice-extensions"></a>
### 21. SI-20-E21. One table, four claims {#section-1019-si-20-e21-one-table-four-claims}

**Exercise 17.21**

Using §18, compute the complete-case mean, the MAR full mean and the sharp binary-outcome bounds. For decision threshold $9/20$, find the missing-cell mean and pattern-mixture shift at the tipping point. Then evaluate augmentation with $m^*=2/5$ and $e^*=1$ and explain why it is not protected here.


<details>
<summary>Hint 1</summary>

Track response mass, observed success mass and each missing-cell alternative separately.

</details>

<details>
<summary>Hint 2</summary>

Use the target covariate weights for MAR, then solve the missing-cell mean equation at the declared decision threshold.

</details>


<a id="section-1040-si-20-e22-retention-through-two-visits"></a>
### 22. SI-20-E22. Retention through two visits {#section-1042-si-20-e22-retention-through-two-visits}

**Exercise 17.22**

Use the two-visit synthetic model in §20. Derive the final response probability, complete-case mean and the two full inverse-retention weights. Verify the weighted full-population mean and show why weighting only by the second-stage probability fails for the unnormalized mean. State the sequential assumptions that made the derivation possible.


<details>
<summary>Hint 1</summary>

Multiply the two stage-specific retention probabilities.

</details>

<details>
<summary>Hint 2</summary>

The full inverse weight must correct both stages; a second-stage-only weight misses the first-stage loss.

</details>


<a id="section-1063-22-solutions-to-practice-extensions"></a>

<a id="section-1144-solutions"></a>
## Solutions {#section-1146-solutions}

<a id="section-1065-22-solutions-to-practice-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-1068-si-20-e21-one-table-four-claims-solution"></a>
### SI-20-E21. One table, four claims — solution {#section-1070-si-20-e21-one-table-four-claims-solution}

Response probability is $3/4$ and observed success probability is $3/10$, so the complete-case mean is $2/5$. Under MAR the target covariate mean is $(1/2)(1/5)+(1/2)(4/5)=1/2$. Without MAR, missing success probability $q\in[0,1]$ gives mean $3/10+q/4$, yielding sharp bounds $[3/10,11/20]$. At threshold $9/20$, solve $3/10+q/4=9/20$ to obtain $q=3/5$, hence $\delta_1=q-4/5=-1/5$. With both working functions wrong, augmentation has expectation $2/5+E[RY]-(2/5)E[R]=2/5+3/10-3/10=2/5$. Neither the propensity nor conditional outcome mean is correct in the second covariate cell, so the population double-robust identity does not force the full mean. No observed cell distinguishes MAR from the other admissible missing-cell means.

</details>
<details>
<summary>Solution</summary>

<a id="section-1076-si-20-e22-retention-through-two-visits-solution"></a>
### SI-20-E22. Retention through two visits — solution {#section-1078-si-20-e22-retention-through-two-visits-solution}

Retained zero and one probabilities are $(1/2)(4/5)(1)=2/5$ and $(1/2)(4/5)(1/2)=1/5$. Their sum is $3/5$, so the retained mean is $(1/5)/(3/5)=1/3$. Full inverse-retention weights are $1/(4/5)=5/4$ for zeros and $1/\{(4/5)(1/2)\}=5/2$ for ones. The expected weighted success contribution is $(1/5)(5/2)=1/2$, the target full-population mean; expected total weight is $(2/5)(5/4)+(1/5)(5/2)=1$. With only second-stage weights the unnormalized success expectation is $(1/5)2=2/5$, missing the first-stage correction. The model assumes first response independent of both outcomes given baseline information, second retention independent of the second outcome given baseline and observed first outcome among first respondents, and positive stage probabilities. Here $Y_2=Y_1$ is a declared full-data model, not an observed-data deduction.

</details>
<a id="section-1081-23-source-boundary-for-multiple-imputation"></a>

## Sources {#section-1094-sources}

All earlier references, exact theorem locators, probability-model qualifications and source notes in this chapter remain part of the exposition. The book [reference guide](references-and-attribution-guide.md) records the primary source map.

<a id="section-1096-summary"></a>
