
# Links, Hazards, and Event Data

**Before reading.** Read [Likelihood, Score, and Evidence Inside a Model](../books/principles-statistical-inference/likelihood-score-and-evidence.md), [Conditional Probability and Bayes](../books/introduction-to-probability/conditional-probability-bayes.md) and [Lines for Description and Prediction](../books/statistics-with-r/simple-linear-models.md). These are preparation for the ideas used below.

Generalized linear models and survival models both relate a response mechanism to predictors through a transformed mean or rate. Their similarity is useful, but their denominators differ. A binary GLM conditions on a row. A rate model needs exposure. A hazard model conditions on being event-free and under observation just before time. Losing that risk-set denominator changes the scientific quantity.

This deep dive assumes likelihood inference and conditional probability. Use it after the [standard advanced-statistics course](#/courses/atlas-advanced-statistics-design-dependence), with proofs in the [reference book](#/books/advanced-statistical-inference-reference).

## 1. GLM anatomy

A GLM has three declared components:

1. conditional response family, often an exponential-dispersion family;
2. linear predictor $\eta_{i}=x_{i}^{T}\beta$, including interactions, offsets, and basis terms;
3. link $g(\mu_{i})=\eta_{i}$ for conditional mean $\mu_{i}$.

The model is conditional on observed design rows. Random covariates can be handled conditionally, but measurement error, selection, and unrecorded confounding are separate layers.

The inverse link must map every real linear predictor into the mean domain. Logit maps to $(0,1)$, log maps to $(0,\infty)$, and identity maps to the real line. A canonical link can simplify likelihood geometry, yet interpretability and mechanism may favor another link.

The variance function is not a nuisance afterthought. Bernoulli has $\operatorname{Var}(Y|x)=p(1-p)$. Poisson has variance equal to its mean. Gamma GLMs commonly have variance proportional to $\mu^{2}$. Residual plots should be on scales appropriate to that variance.

## 2. Worked logistic likelihood and interpretation

**Worked example.**

For independent Bernoulli outcomes,

$$p_{i}=\operatorname{expit}(x_{i}^{T}\beta)$$

$$\ell(\beta)=\sum[y_{i}x_{i}^{T}\beta-\log(1+\exp(x_{i}^{T}\beta))]$$

The stable computation uses `log1p` or equivalent log-sum-exp arithmetic; directly exponentiating a huge predictor can overflow. The score $X^{T}(y-p)$ equates observed and fitted covariate-weighted totals at an interior optimum.

Suppose the linear predictor contains treatment $A$, age $z$, and their
interaction:

$$
\eta(A,z)=\beta_{0}+\beta_{A}A+\beta_{z}z
  +\beta_{A:z}Az.
$$

At a fixed age $z$, the treatment log-odds contrast is

$$
\eta(1,z)-\eta(0,z)=\beta_{A}+z\beta_{A:z}.
$$

The second term uses the **interaction coefficient**, not the main age
coefficient $\beta_z$. Centering age changes the reference value represented by
$\beta_A$ but does not change fitted probabilities or the contrast evaluated
at a stated physical age. Reporting $\exp(\beta_A)$ without that reference age
is incomplete.

Odds ratios are non-collapsible. Even when a covariate is not a confounder, conditional and marginal odds ratios can differ. To report marginal risks, standardize:

$$\widehat{p}(a)=\sum_{i} q_{i} \operatorname{expit}(x_{i}(a)^{T}\beta)$$

where $q_{i}\ge0$, $\sum_iq_i=1$, weights a declared target covariate
distribution. For survey data, normalized population weights may supply the
$q_i$. Standardization is a model-based calculation and needs support at each
treatment level.

## 3. Separation, rare outcomes, and calibration

If some hyperplane perfectly separates all 1s from 0s, the unpenalized logistic likelihood may approach its supremum as $\lVert \beta\rVert\to \infty$. A very large standard error is a symptom; the finite MLE does not exist. Options include collecting overlapping data, simplifying unsupported interactions, bias-reduced likelihood, or a declared proper prior. Each changes finite-sample behavior.

Rare outcomes do not by themselves invalidate logistic regression, but few events limit effective information. Ten thousand controls do not create information about a complex event mechanism comparable to ten thousand events. Penalization and validation should be driven by event support, not only row count.

Calibration asks whether predicted probabilities match observed frequencies at useful resolutions. A calibration intercept and slope can diagnose systematic shift and extremity on new data, but binning curves are noisy. Discrimination asks ranking, commonly through AUC. A model can discriminate well and be badly calibrated after a prevalence shift.

## 4. Counts, exposure, and Poisson likelihood

For independent counts observed over exposures $e_{i}$,

$Y_{i}\sim Poisson(e_{i} r_{i})$, $\log r_{i}=x_{i}^{T}\beta$.

Equivalently $\log \mu_{i}=\log e_{i}+x_{i}^{T}\beta$, with coefficient 1 fixed on $\log e_{i}$. An estimated exposure coefficient answers a different model. Exposure must use consistent units; changing person-months to person-years shifts the intercept, not rate ratios.

**Worked likelihood.** Two groups have $(y,e)=(4,100)$ and $(9,150)$. With a group indicator and no sharing, fitted rates are 0.04 and 0.06, so the rate ratio is 1.5. Raw count ratio $9/4=2.25$ confounds rate with exposure.

Overdispersion can reflect latent rate variation, clustering, or a poor mean. A negative-binomial gamma–Poisson mixture gives one particular quadratic mean–variance relation. It is not a universal synonym for overdispersed counts. If zeros arise because some units are not at risk, a hurdle or structural-zero model may be sensible, but its two components must be identifiable and externally interpretable.

## 5. Time-to-event quantities

For event time $T\ge 0$, define

$S(t)=P(T>t)$, $F(t)=P(T\le t)$,

and, if absolutely continuous,

$\lambda(t)=f(t)/S(t)$, $\Lambda(t)=\int_{0}^{t}\lambda(u)du$, $S(t)=e^{-\Lambda(t)}$.

Hazard is conditional rate per unit time. For constant hazard 0.2 per year, one-year survival is $e^{-0.2}\approx0.819$, not 0.8 by definition; the difference grows with interval length. Discrete-time hazards are conditional probabilities and remain within $[0,1]$.

Right censoring observes $Y=\min(T,C)$ and $\delta=1\{T\le C\}$. Left truncation means someone is observable only after entry time $L$ and belongs to risk sets only when $L<t\le Y$. Confusing delayed entry with a baseline covariate creates immortal-time bias.

Interval censoring says an event lies in $(L,R]$; replacing it by a midpoint invents precision. Recurrent events require a counting-process or gap-time target. Terminal events can alter recurrence observation. Define whether the estimand is first event, total event rate, gap distribution, or state occupancy.

## 6. Product-limit estimation

At distinct event time $t_{j}$, let $n_{j}$ be at risk immediately before and $d_{j}$ events. Kaplan–Meier is

$$\widehat{S}(t)=\prod_{t_{j}\le t}(1-d_{j}/n_{j})$$

Censoring times do not create factors. They remove individuals from later $n_{j}$. With tied event and censoring marks, a common convention counts all as at risk just before the time and processes events before censoring; software conventions must be documented for discrete recording.

**Worked curve.** Eight begin follow-up. At time 1, two events give factor $6/8=3/4$. One is censored before time 3, so five are at risk just before two events at time 3, giving factor $3/5$. Survival becomes $(3/4)(3/5)=9/20=0.45$; median survival is time 3 because the estimate first reaches at most one half.

The restricted mean survival time through $\tau$ is $\int_{0}^\tau S(t)dt$. Its estimate is area under the step curve. Choose $\tau$ within reliable follow-up and preferably before seeing group differences. Unlike a median, it remains meaningful when the curve does not reach one half, but heavy late censoring can still create uncertainty.

Open the [risk-set laboratory](../apps/atlas/index.html#/labs?lab=visual-lab-kaplan-meier) to reproduce exact fractions and Greenwood log-log intervals.

## 7. Censoring assumptions

Unconditional independence $T ⟂ C$ is sufficient for ordinary Kaplan–Meier but stronger than necessary. More generally, censoring can be independent of the event process conditional on recorded covariates or history. A marginal curve that ignores those covariates may then be biased even though adjusted methods are valid.

Administrative censoring at a common study end can be plausible if entry and study timing are not outcome-informative after adjustment. Loss to follow-up because of worsening unrecorded health is informative. Censoring models cannot be fully checked with observed data because post-censoring events are unseen.

Useful sensitivity analyses vary hazards after dropout, use inverse-probability-of-censoring weights under alternative propensity models, or report bounds under monotone assumptions. Weighting needs estimated censoring survival bounded away from zero; unstable weights reveal unsupported follow-up regions.

## 8. Proportional hazards

The Cox model writes

$$\lambda(t|x)=\lambda_{0}(t)\exp(x^{T}\beta)$$

For a fixed covariate difference $\Delta x$, the hazard ratio is $\exp(\Delta x^{T}\beta)$ at every time under proportional hazards. Baseline hazard remains unspecified for partial-likelihood estimation of β. Survival predictions still require estimating cumulative baseline hazard.

Risk sets are the denominators. At a distinct event time for subject $i$, the partial-likelihood contribution is

$$\exp(x_{i}^{T}\beta)/\sum_{j\in R_{i}} \exp(x_{j}^{T}\beta)$$

This resembles a conditional multinomial choice among those currently at risk. It is not the probability that subject $i$ ever experiences the event.

Check proportionality using time interactions, residual-based diagnostics, and scientific knowledge. Failing to reject a diagnostic test does not prove proportionality, especially with few events. If effects vary over time, report a time-varying coefficient, standardized survival curves, or restricted-mean contrast rather than averaging an uninterpretable ratio.

A hazard ratio is not collapsible and does not translate to a fixed risk ratio without baseline hazard and follow-up. Selection into later risk sets can make causal hazard ratios difficult to interpret: surviving groups need not remain exchangeable even after baseline randomization.

## 9. Discrete-time hazards as GLMs

Partition follow-up into intervals. Create one person-period row for each interval in which a subject is at risk, with binary outcome indicating event in that interval. A complementary log-log link

$$\log[-\log(1-p_{ij})]=\alpha_{j}+x_{i}^{T}\beta$$

corresponds to a proportional continuous-time hazard that is constant within intervals. A logit link instead models discrete conditional odds. With short intervals and rare events the two can be close, but they are not identical.

Rows from the same person are not independent in the ordinary sense; the likelihood can still factor through conditional hazards for a single terminal event under the model. Recurrent events require explicit within-person dependence and risk resetting. Standard errors must match the event process.

## 10. Piecewise exponential Poisson representation

Split each subject’s at-risk time across intervals with constant baseline hazards. In interval $j$, let $d_{ij}$ be event count (0 or 1) and $e_{ij}$ exposure time. A Poisson likelihood with

$$\log E(d_{ij})=\log e_{ij}+\alpha_{j}+x_{i}^{T}\beta$$

has the same β likelihood form as a piecewise exponential survival model, up to terms not depending on parameters. This is a computational equivalence under the interval-constant hazard assumption. It does not turn repeated split rows into independent people for arbitrary robust variance calculations.

Time-varying covariates must use values known just before each interval. Updating an exposure from information recorded after an event introduces future leakage.

## 11. Competing risks and multistate outcomes

If death from cause 2 prevents cause 1, cause-specific hazard $\lambda_{1}(t)$ conditions on being free of every event just before $t$. Cumulative incidence

$$F_{1}(t)=P(T\le t,J=1)=\int_{0}^{t} S(u-)\lambda_{1}(u)du$$

depends on hazards of all causes through overall survival $S$. Reducing a competing-cause hazard can increase time available for cause 1, even without changing $\lambda_{1}$.

Treating competing events as censoring and applying $1-KM$ estimates a net risk in a hypothetical world where competitors are removed under independence conditions. It overstates observed cumulative incidence when competitors are common. Cause-specific Cox and subdistribution-hazard models answer different questions; coefficient comparison across them is not direct.

Multistate models describe transitions such as healthy → ill → death. State occupancy depends on all transition intensities. Markov assumptions say future transition intensity depends on current state and covariates, not full past, whereas semi-Markov models can depend on time since entry.

## 12. Prediction, validation, and causal boundaries

A survival prediction model needs a horizon, target population, time origin, and handling of competing risks. Discrimination among comparable pairs, calibration at time $t$, Brier score with censoring adjustment, and decision value answer different questions. Validate on later or external cohorts when transport across time is the use case.

For causal treatment effects, baseline exchangeability is not enough when censoring depends on post-treatment variables. G-methods, censoring weights, or structural models require stronger longitudinal assumptions. Conditioning on a post-treatment collider can bias a GLM or Cox model.

Report:

- event definition, adjudication, time scale, origin, delayed entry, and competing events;
- link or hazard scale and every offset;
- number at risk and events over time, not only total $n$;
- censoring model and sensitivity;
- tie method and variance estimator;
- calibration and validation design;
- whether coefficients are predictive associations, standardized contrasts, or identified causal effects.

## Practice with solutions

<a id="deep-dive-glm-survival-event-data-ex-1"></a>

**Exercise 1.**

**0. Interaction contrast.** For
$\eta(A,z)=-3+0.4A+0.05z-0.02Az$, compute the treatment odds ratio at
$z=10$ and $z=30$. Explain why $\exp(0.4)$ is not a universal treatment odds
ratio.
<details>
<summary>Hint 1</summary>

Compare the linear predictor at treatment one with treatment zero while holding age fixed.
</details>
<details>
<summary>Hint 2</summary>

The interaction changes that log-odds contrast with age; exponentiate the contrast separately at the two ages.
</details>
<details>
<summary>Solution</summary>

The log-odds contrast at age $z$ is
$0.4-0.02z$. It is $0.2$ at $z=10$ and $-0.2$ at $z=30$, so the conditional
odds ratios are $\exp(0.2)\approx1.22$ and
$\exp(-0.2)\approx0.82$. The value $\exp(0.4)$ is the contrast only at the
reference value $z=0$; recentering age changes that coefficient while leaving
the two fitted contrasts unchanged.

</details>

<a id="deep-dive-glm-survival-event-data-ex-2"></a>

**Exercise 2.**

**A. Logistic contrast.** Model $logit p=-2+0.5x$. Find $p$ at $x=0$ and $x=2$, odds ratio per two units, and risk difference.
<details>
<summary>Hint 1</summary>

Evaluate the two linear predictors before converting either to a probability.
</details>
<details>
<summary>Hint 2</summary>

Apply the logistic inverse to each predictor, then exponentiate their difference for the two-unit odds ratio.
</details>
<details>
<summary>Solution</summary>

At 0, $p=\operatorname{expit}(-2)\approx0.1192$. At 2, $p=\operatorname{expit}(-1)\approx0.2689$. Odds ratio is $\exp(1)\approx2.718$; risk difference is about $0.1497$. Neither is causal without identification.

</details>

### Further practice

**B. Product limit.** Ten are initially at risk. Two events occur at time 1. One censor occurs at time 2. At time 3, two of the remaining seven have events. Find survival just after time 3.

**Solution.** First factor is $8/10=4/5$. Censoring does not change survival but leaves seven at risk. Second factor is $5/7$. Product is $(4/5)(5/7)=4/7\approx0.5714$.

**C. Competing event.** Explain why censoring deaths when estimating dementia incidence is generally wrong for observed-world risk.

**Solution.** Death prevents later dementia and changes the population still capable of the event. Ordinary censoring treats the removed person as representative of those who remain and targets a hypothetical net risk. Observed cumulative incidence must combine the dementia cause-specific hazard with survival from every cause.
