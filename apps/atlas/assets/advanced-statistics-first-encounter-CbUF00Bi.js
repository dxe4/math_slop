var e=`---
id: deep-dive-advanced-statistics-first-encounter
title: "Advanced Statistics Before the Machinery"
license: CC BY-SA 4.0
---

# Advanced Statistics Before the Machinery

Advanced statistics begins when the rows of a data table stop behaving like interchangeable, completely observed measurements. A household may have been selected with an unequal survey probability. A response may be a count rather than a measurement on the whole number line. Today’s temperature resembles yesterday’s. Several biomarkers move together. A patient may leave a study before an event. Nearby locations resemble one another. A single extreme observation can dominate a mean.

The extra mathematics is not decoration. It records how data were produced, what was only partly observed, and which comparisons remain legitimate. This encounter uses small stories and arithmetic. It is a doorway to the [standard advanced-statistics course](#/item/course-advanced-statistics-design-dependence), not a substitute for its probability prerequisites.

## 1. Seven structures, seven questions

Before choosing a method, name the structure.

| structure | first question | typical object |
|---|---|---|
| survey sample | who could be selected, and with what chance? | inclusion probability and weight |
| binary or count response | which conditional distribution fits the support? | generalized linear model |
| ordered observations | what depends on the past? | time series |
| several measurements per unit | which directions vary together? | covariance matrix |
| uncertain distributional shape | which weaker assumptions suffice? | ranks, empirical distributions, smoothers |
| partially observed event time | who was still at risk just before each event? | survival curve and hazard |
| location-indexed observations | how does dependence change with separation? | covariance or variogram |

These structures can coexist. A national health survey may have unequal weights, repeated visits, censored event times, and geographic clustering. No single label automatically determines an analysis.

## 2. Worked example: a weighted population total

**Worked example.**

Suppose a tiny population has four shops. A sampling design selects shop A with probability $1/2$ and shops B, C, and D with probability $1/4$ each. Imagine the realized sample contains A and C, whose weekly sales are 10 and 20 units. The inverse-probability weights are 2 and 4. The Horvitz–Thompson estimate of the population total is

$$10/(1/2)+20/(1/4)=20+80=100$$

Why not simply double the sample sum to get 60? Because the two sampled shops did not have equal chances to represent the population. The weighted total is design-unbiased when each unit’s first-order inclusion probability is known and positive. That statement averages over repetitions of the declared sampling design while holding the finite population values fixed.

Weights do not magically repair a missing sampling frame, fabricated measurements, or nonresponse related to unobserved values. A nonresponse adjustment is a model or conditional-exchangeability claim layered on the design. The [survey-sampling deep dive](#/item/deep-dive-survey-sampling-design-weights) keeps those layers separate.

## 3. Why a straight line can predict impossible values

Let $Y$ record whether an event occurred, so $Y$ is either 0 or 1. A straight-line mean model $E(Y|x)=a+bx$ can fall below 0 or above 1. Logistic regression instead models the log odds:

$\\log(p/(1-p))=a+bx$, so $p=1/(1+\\exp(-(a+bx)))$.

If $b=\\log 2$, increasing $x$ by one multiplies the conditional odds by 2 because

$$odds(x+1)/odds(x)=\\exp(b)=2$$

That is not the same as doubling probability. If probability begins at $1/2$, its odds are 1; doubled odds are 2 and the new probability is $2/3$, not 1. The interpretation is conditional on the covariates in the fitted model. It is not automatically causal, and logistic odds ratios can change when covariates are added even without confounding because odds ratios are non-collapsible.

Counts invite a different model. A Poisson generalized linear model often writes

$$\\log E(Y|x)=a+bx+\\log(exposure)$$

The final term is an offset: ten accidents over ten road-years should not be compared to ten accidents over one road-year as if their opportunities were equal. The model also implies a mean–variance relation that must be criticized against data.

## 4. Order changes what counts as evidence

Consider values $1,2,1,2,1,2$. Their mean and histogram match those of the reordered sequence $1,1,1,2,2,2$, but their temporal patterns differ. In the alternating sequence, a high value predicts a low next value. In the blocked sequence, nearby values tend to agree.

An autocovariance at lag $h$ compares $X_{t}$ with $X_{t+h}$. Under weak stationarity, the mean is constant and this covariance depends on $h$, not on calendar time $t$. Stationarity is an assumption about a stochastic process, not a visual synonym for “flat-looking.” A trend, changing variance, intervention, or evolving measurement process can break it.

Forecast evaluation must preserve order. Training on future values and testing on the past leaks information. A rolling-origin evaluation trains only on observations available at each forecast date. A narrow forecast interval describes uncertainty under a fitted model; it does not protect against a structural break absent from that model.

## 5. A cloud has directions, not just separate spreads

Suppose two centered measurements have covariance matrix

$$\\Sigma=\\begin{pmatrix}4&3\\\\3&4\\end{pmatrix}$$

The direction $(1,1)/\\sqrt{2}$ has variance 7, while $(1,-1)/\\sqrt{2}$ has variance 1. Principal component analysis finds these eigenvector directions. Most variation lies along the “move together” direction.

PCA does not discover causes or universally important variables. It depends on units: measuring one variable in metres rather than centimetres changes its numerical variance by a factor of 10,000. Standardizing changes the target from covariance geometry to correlation geometry. The choice must follow the scientific meaning, not a ritual.

Looking at many outcomes also changes error accounting. If twenty unrelated null hypotheses are each tested at level 0.05, the expected number of false rejections is one, and the probability of at least one false rejection can be much larger than 0.05. Familywise-error and false-discovery-rate procedures answer different multiplicity questions.

## 6. “Nonparametric” does not mean “assumption free”

The empirical distribution function assigns mass $1/n$ to each observed value. It makes no normal-distribution assumption, but its usual interpretation still treats observations as identically distributed and often independent.

A rank test replaces magnitudes by order information. This can resist a few huge values, yet the null being tested depends on the procedure. A permutation test needs exchangeability under the null. With paired data, time dependence, clusters, or unequal survey weights, arbitrary row permutations are generally invalid.

Kernel smoothing estimates a curve by averaging nearby observations. A bandwidth decides what “nearby” means. A very small bandwidth follows noise; a very large one erases structure. Data-driven bandwidth selection adds variability, and boundaries can create bias. Flexible is not automatic truth.

Robust statistics asks how conclusions change under contamination. In the sample $2,3,3,4,100$, the mean is 22.4 while the median is 3. Replacing 100 by one million sends the mean upward but leaves the median at 3. The median pays for stability with lower efficiency than the mean under a perfectly Gaussian model. Robustness is a designed tradeoff, not a universal ranking.

## 7. A missing event time is not an ordinary missing value

Let $T$ be an event time and $C$ a censoring time. Under right censoring we observe

$Y=\\min(T,C)$ and $\\delta=1\\{T\\le C\\}$.

If $\\delta=0$, we know the event occurred after $Y$; this partial order information matters. At an event time $t_{i}$, let $n_{i}$ be the number still under observation and event-free just before that time, and let $d_{i}$ be the number of events. The Kaplan–Meier estimate is

$$\\widehat{S}(t)=\\prod_{t_{i}\\le t}(1-d_{i}/n_{i})$$

With five at risk and one event, survival multiplies by $4/5$. If one participant is then censored, the curve does not drop; that participant simply leaves later risk sets. Open the [Kaplan–Meier laboratory](#/labs?lab=visual-lab-kaplan-meier) to audit every factor.

Independent or conditionally independent censoring is essential: after conditioning on stated information, leaving follow-up should not reveal extra information about the event time. If the sickest participants systematically disappear for unrecorded reasons, the ordinary curve can be biased. “Median not reached” means the estimate never fell to one half within supported follow-up; it does not mean immortal participants.

Hazard is an instantaneous event rate conditional on surviving to time $t$; it is not a probability and can exceed 1 when time has units. Competing events need cumulative incidence. Treating competing events as ordinary independent censoring estimates a different, often hypothetical quantity.

## 8. Nearby values share information—and errors

Let $Z(s)$ be a random field indexed by location $s$. A stationary covariance model may depend on separation $h=s'-s$, and an isotropic one depends only on distance $\\lVert h\\rVert$. A semivariogram is

$$\\gamma(h)=1/2 \\operatorname{Var}(Z(s+h)-Z(s))$$

Small semivariance at short distances means nearby differences tend to be small. A “nugget” can represent microscale variation or measurement error; a range describes the distance over which modeled dependence fades.

Kriging predicts at a new location with weights derived from a covariance model and geometry. Its uncertainty is conditional on that model and estimated parameters. Randomly splitting nearby observations between training and test sets can make prediction look unrealistically easy. Spatial blocking asks whether a method extrapolates across the separations that matter.

Maps can also mislead. Population counts tend to be larger in larger or more populous areas, so rates and exposure often matter. Administrative boundaries create areal aggregation and the modifiable areal unit problem. Spatial association alone does not identify a causal environmental effect.

## 9. One claim ladder

Every analysis should climb only as high as its design supports:

1. **Description:** what happened in these observed records?
2. **Design-based generalization:** what finite population is represented by the known selection mechanism?
3. **Model-based generalization:** under an explicit stochastic model, what distribution or future observations are predicted?
4. **Causal conclusion:** under randomization or stated identification assumptions, what intervention contrast is identified?

A logistic coefficient, smooth curve, spatial map, or survival difference does not jump directly to step 4. Uncertainty intervals quantify selected sources of variation; they do not validate the sampling frame, censoring mechanism, link function, stationarity, covariance model, or causal graph.

## 10. A first audit

For any structured dataset, write one sentence for each item:

- target population, units, and estimand;
- selection, assignment, and measurement mechanisms;
- support of each outcome and whether it is complete;
- dependence across people, time, variables, or location;
- assumptions that justify the estimator and its uncertainty;
- validation split that imitates intended use;
- sensitivity analysis for the least testable assumption;
- strongest conclusion licensed by the design.

Then continue through the [advanced course](#/item/course-advanced-statistics-design-dependence), consult the [proof and reference book](#/item/book-advanced-statistical-inference-reference), and use the [robust nonparametric workflow](#/item/recipe-robust-nonparametric-workflow) when a single fitted model is too fragile.

## Practice with solutions

<a id="deep-dive-advanced-statistics-first-encounter-ex-1"></a>

**Exercise 1.**

**1. Unequal chances.** Two sampled units have values 6 and 10 and inclusion probabilities $1/2$ and $1/4$. Estimate the finite-population total by inverse-probability weighting.
<details>
<summary>Hint 1</summary>

Use each sampled unit’s stated inclusion chance, rather than treating the two rows as equally representative.
</details>
<details>
<summary>Hint 2</summary>

For a population total, divide each observed value by its own inclusion probability and then add.
</details>
<details>
<summary>Solution</summary>

$6/(1/2)+10/(1/4)=12+40=52$. This is a design-based estimate only if those probabilities belong to the actual sampling design and are positive.

</details>

<a id="deep-dive-advanced-statistics-first-encounter-ex-2"></a>

**Exercise 2.**

**2. Odds are not risks.** A fitted logistic model changes odds from $1/3$ to $2/3$. Find both probabilities and the probability difference.
<details>
<summary>Hint 1</summary>

Translate each stated odds value into a probability; odds and probability have different denominators.
</details>
<details>
<summary>Hint 2</summary>

Use probability equals odds divided by one plus odds, then subtract the two probabilities.
</details>
<details>
<summary>Solution</summary>

Odds $o$ correspond to probability $o/(1+o)$. The probabilities are $1/4$ and $2/5$; the difference is $3/20=0.15$. The odds doubled, while the probability did not.

</details>

### Further practice

**3. A censored tie.** Just before time 4, four people are at risk. One event and one censoring occur at time 4. What factor enters Kaplan–Meier, and how many enter the next risk set if nobody else leaves?

**Solution.** All four are at risk just before 4, so the factor is $(4-1)/4=3/4$. Both the event and censored person leave afterward, so two enter the next risk set.
`;export{e as default};