var e=`---
parent_id: book-regression-and-generalised-linear-models
chapter_id: case-studies
title: "Case Studies"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Case Studies

Preparation is the preceding linear, logistic, count and quasi-likelihood chapters. All numerical values in the three hand cases are original hypothetical examples; licensed real-data investigations remain in the earlier applied chapters.

A completed analysis is a chain from a recorded unit to a bounded conclusion. The three cases here use small original hand datasets so every mathematical claim can be derived without a numerical execution. They are illustrative observations, not evidence about a clinic, school, species or instrument population. The licensed penguin and banknote investigations in the earlier chapters provide separate real-data code and provenance.

Each case specifies the response support, design, independence assumptions, target, calculation and sensitivity. A fit is complete only after its interpretation and limitations are stated. Changing the response family while keeping the same printed formula does not preserve the statistical question.

## Case one: a replicated line and a lack-of-fit comparison

Take fixed settings $x=(-1,-1,0,0,1,1)$ and responses $y=(0,2,1,3,3,5)$. One row is one hypothetical measurement at a declared setting. The replicate pairs allow pure-error variation to be separated from the restriction that the three setting means lie on a line.

The mean setting is zero and mean response is $7/3$. Predictor squared length is four and the cross-product with response is six. Least squares therefore gives intercept $7/3$ and slope $3/2$. Fitted means at settings minus one, zero and one are $5/6$, $7/3$ and $23/6$.

The squared residual sum is $19/3$. With a Gaussian independent common-variance linear model, the residual scale estimate is $(19/3)/4=19/12$, using four residual degrees. These uncertainty claims add the normal sampling model; the fit itself required only the finite table.

The unrestricted three-setting model has group means one, two and four, with pure-error residual sum six and three residual degrees. Its fitted space contains the line space, adding one curvature direction. The lack-of-fit reduction is $19/3-6=1/3$, giving F ratio $(1/3)/(6/3)=1/6$ with one and three degrees under the linear null and Gaussian assumptions.

A small lack-of-fit ratio does not prove a universal linear law. It asks only whether these three fixed settings show a detectable departure relative to their within-setting scale under the stated model. It says nothing directly about extrapolation beyond them.

## Mean prediction and a new observation

At setting zero the line predicts $7/3$. Its design leverage for mean estimation is $1/6$, since the centred predictor is zero. The estimated mean standard error is $\\sqrt{19/72}$. A new independent reading at zero has predictive standard error $\\sqrt{133/72}$, because its variance includes a fresh error.

The difference matters even when every fitted coefficient is precise. A report about the average reading at a setting and a report about the next reading should not share one uncertainty interval. If readings share a batch effect, independence of that next error fails and the mixed or GLS prediction calculation becomes relevant.

## Case two: two binary groups

Record three successes among ten independent trials in group zero and eight among ten in group one. A two-parameter logistic model has one intercept and one group coefficient. Its fitted group probabilities are the two observed proportions, provided both are strictly between zero and one.

The fitted intercept is $\\log(3/7)$ and the group coefficient is
$$
\\log(8/2)-\\log(3/7)=\\log(28/3).
$$
The odds ratio is $28/3$, the success risk ratio is $8/3$, and the probability difference is one-half. These three effects describe the same two fitted probabilities through different functions; they are not interchangeable scales.

The observed information for each group's own log odds gives approximate variance $1/y_j+1/(n_j-y_j)$. Thus the coefficient difference has estimated variance $1/3+1/7+1/8+1/2=185/168$. This is a likelihood curvature calculation, not an exact small-sample Gaussian theorem. The numbers of successes and failures in the cells matter for the approximation.

If one group had no failures, its fitted log odds would diverge. The reported probability would approach one at the boundary, but a finite logistic coefficient MLE would not exist. Penalisation or a proper prior can produce a finite estimate while changing the estimator and its assumptions.

## Sampling and causal interpretation of the binary contrast

If group membership was randomly assigned and the no-interference and observation assumptions are credible, an average treatment contrast can have a design-based causal interpretation. If these are observational groups, their conditional probability difference is an association under the chosen adjustment model.

Even with random assignment, changing from an intention-to-treat group to a selected subgroup defined by post-assignment behaviour can break the original comparison. A logistic likelihood does not repair that selection. Likewise, selecting a threshold after viewing every outcome changes predictive evaluation.

The real banknote source in the logistic chapter addresses a classification target with image-derived features and recorded numeric classes. Its assembled class balance is not a population prevalence. Reporting a fitted group probability from that sample as a deployment probability would require a sampling and calibration argument.

## Case three: independent counts with exposure

Create two hypothetical observation groups. Group A has exposures $(1,2,3)$ and counts $(0,1,2)$; group B has exposures $(1,2,4)$ and counts $(1,2,5)$. All exposures are positive and expressed in one common time unit. Assume independent Poisson counts with a common rate within each group.

Rate estimates are totals divided by exposures: $\\hat r_A=3/6=1/2$ and $\\hat r_B=8/7$. Their ratio B to A is $16/7$. In an intercept-plus-group log-rate fit, the intercept is $\\log(1/2)$ and group coefficient is $\\log(16/7)$. The offset is log exposure with coefficient one.

Under the common-rate null, condition on the total count eleven. The group-B total has binomial law with parameters eleven and $7/13$, because its exposure is seven of the total thirteen. An exact conditional binomial procedure can assess this predeclared comparison without invoking a normal approximation to the log-rate coefficient.

The conditional test and the fitted rate ratio are related but distinct quantities. A two-sided p-value needs a declared ordering of possible binomial outcomes; different defensible orderings can produce different exact two-sided values. No numerical p-value is claimed here.

## Supplied code for the count case

The following base-R source implements the stated hypothetical table and fits exactly the declared offset model. Its source values are fully listed, carry no missing codes or exclusions, and concern no real people or events. It is supplied for later study rather than presented as executed evidence.

~~~r
count_case <- data.frame(
  group = factor(c("A", "A", "A", "B", "B", "B"),
                 levels = c("A", "B")),
  exposure = c(1, 2, 3, 1, 2, 4),
  count = c(0L, 1L, 2L, 1L, 2L, 5L)
)
count_fit <- glm(
  count ~ group + offset(log(exposure)),
  family = poisson(link = "log"),
  data = count_case
)
coef(count_fit)
exp(coef(count_fit))
binom.test(8L, 11L, p = 7 / 13)
~~~

The exponentiated intercept is a rate, while the exponentiated group coefficient is a rate ratio. They have different units. The conditional binomial interval describes an allocation probability; converting it to a rate ratio requires the known exposure ratio, rather than simply relabelling its endpoints.

## What remains after a successful calculation

A sensitivity analysis can change the error covariance, mean form, admissible predictors or family. Each change should retain a declared target. Comparing a Poisson rate estimate with a quasi-Poisson version asks about uncertainty under a different variance structure; it does not create a different mean root when the scale change is common.

For a real dataset, record which rows were included, why they were included, the unit represented by each row, the source licence and any transformations. The earlier penguin chapter retains its original source-row indices and missingness rule. Those indices are traceability labels, not invented collector identifiers.

A final report should distinguish observed descriptive fit, model-based uncertainty, design-based causal support and future predictive evaluation. A study checkmark records personal progress and provides no graded evidence for these claims. Complete solutions help inspect the reasoning but do not certify that an independent investigation has been performed.

## A full analysis record for each target

For the replicated line, a concise record contains the six settings and readings, the fixed design, the independent Gaussian common-scale assumption if exact intervals are reported, and the distinction between line mean, lack of fit and a new reading. The unrestricted setting means provide a declared nested alternative. Choosing that alternative after observing a more complicated residual pattern would require describing the search rather than pretending only one predeclared comparison occurred.

For the binary groups, record both denominators and both event counts, the event definition, whether group membership was assigned, and whether trials are genuinely independent. The fitted probability difference, odds ratio and risk ratio should be labelled by their scales. If group assignment was observational, an adjusted coefficient would still need its conditioning set and a separate causal argument.

For the exposed counts, retain the time unit, whether repeat events are allowed, the row-level exposures and the assumption of a constant group rate. The common-rate conditional test uses the known exposure allocation after conditioning on the observed total. Informative stopping or unrecorded opportunities can invalidate that interpretation even when the count file contains only nonnegative integers.

These records can be short because they identify concrete quantities. They should not replace an assumption with the phrase “the software model”: the required mean, variance and independence claims must be named.

## Sensitivity comparisons that preserve the question

A useful first sensitivity in the line case keeps the same six rows and prediction target but compares a straight mean with separate setting means. This changes mean flexibility while holding the error model fixed. Another sensitivity changes within-pair correlation under a covariance model, keeping the mean comparison explicit. Combining both changes at once can be appropriate, but their separate effects are then harder to interpret.

In the binary case, a penalty or prior can address finite estimates under separation. Its result answers a changed estimation procedure. It is informative to report which part of the finite estimate comes from likelihood information and which from the added regularisation, especially with very small cells.

In the count case, a common quasi-Poisson dispersion changes the model-based coefficient covariance while leaving the score root unchanged. A negative-binomial variance model can instead change relative weights and the fitted rate contrast. A site random effect introduces a joint dependence structure, not merely a scalar scale correction.

No single sensitivity is a certificate that every plausible model has been considered. Its value is in showing how a named conclusion moves under a named assumption change. If the conclusion is stable, state the explored scope. If it moves, identify whether the scientific target changed or the same target became less certain.

## Source code, output and mathematical evidence

The supplied R source expresses models and permits later reproduction. An output table obtained elsewhere would still need its exact source values, software assumptions and selection history. Conversely, the hand calculations here are algebraic evidence for the stated finite identities and do not require an asserted execution log.

Keep analytical facts distinct from unobserved numerical results. The exact fitted hand-case rates and group probabilities are derived from totals. No fitted penguin coefficient, banknote accuracy or computed p-value is invented to fill a results table. A real-data report must obtain those values through its declared analysis and preserve the data lineage that makes them interpretable.

## Worked example 14.1: the line's orthogonal curvature component

The three setting means in Case one are one, two and four. A quadratic through them is $2+(3/2)x+(1/2)x^2$. The line restriction removes its curvature term after the appropriate projection onto the constant and linear directions. The unrestricted fit has residual sum six, while the line has $19/3$, an extra $1/3$. The comparison uses the same six rows and a nested mean space; changing rows between fits would invalidate that reduction argument.

## Worked example 14.2: three effect scales for one binary comparison

At fitted probabilities $0.3$ and $0.8$, failure probabilities are $0.7$ and $0.2$. Odds are $3/7$ and four, giving odds ratio $28/3$. The risk ratio is $0.8/0.3=8/3$, while the difference is $0.5$. An odds ratio above nine does not mean the probability increased ninefold. These calculations are exact functions of the fitted probabilities, independently of whether an asymptotic interval is adequate.

## Worked example 14.3: convert a conditional allocation to a rate ratio

Let $p$ denote the conditional probability that an event in the two-group count case belongs to B. Then $p=r_Bt_B/(r_At_A+r_Bt_B)$. Solving gives $r_B/r_A=\\{p/(1-p)\\}(t_A/t_B)$. With observed allocation $p=8/11$, exposures six and seven give $(8/3)(6/7)=16/7$, agreeing with the independent Poisson rate MLE. The exposure factor is essential.

## Aggregating exposure changes the estimand only under declared assumptions

In the independent count case, suppose counts have Poisson means equal to a common rate times their known exposures. The sum of the counts is Poisson with mean equal to that rate times total exposure, by multiplication of their probability-generating functions. The likelihood for the common rate therefore depends on observations through total count and total exposure. Its maximizer is their ratio when total exposure is positive.

This aggregation does not generally preserve information about covariate effects or heterogeneity. If units have distinct unknown rates, total count only identifies their exposure-weighted sum, not each rate. If counts share an unmodelled latent intensity, their sum need not have the independent Poisson variance. Thus a convenient rate summary is justified by the common-rate likelihood, while residual comparisons at the original observation scale can still reveal departures from it. Recording exposure units also matters: changing from hours to minutes rescales the numerical rate without changing predicted expected counts.

## Exercises

### Exercise 14.1
<a id="case-studies-ex-1"></a>

Recalculate the line slope in Case one.

<details>
<summary>Hint 1</summary>

The predictor is centred.

</details>
<details>
<summary>Hint 2</summary>

Use its cross-product six and squared length four.

</details>
<details>
<summary>Solution</summary>

The slope is $6/4=3/2$. The intercept is the response mean $7/3$ because mean predictor is zero. This is an exact least-squares calculation on the stated table and does not yet assume a sampling distribution.

</details>

### Exercise 14.2
<a id="case-studies-ex-2"></a>

Find the Gaussian residual scale for the line.

<details>
<summary>Hint 1</summary>

There are six rows and two coefficients.

</details>
<details>
<summary>Hint 2</summary>

Divide RSS by four.

</details>
<details>
<summary>Solution</summary>

The scale estimate is $(19/3)/4=19/12$. Under a correct independent Gaussian common-variance linear mean, the corresponding residual sum divided by the true variance is chi-square with four degrees. That exact law is an additional model statement.

</details>

### Exercise 14.3
<a id="case-studies-ex-3"></a>

Derive the lack-of-fit F ratio.

<details>
<summary>Hint 1</summary>

Compare line and separate setting means on the same rows.

</details>
<details>
<summary>Hint 2</summary>

Use one added direction and three pure-error degrees.

</details>
<details>
<summary>Solution</summary>

The reduction is $1/3$, the full residual mean square is $6/3=2$, so the ratio is $1/6$. Under the linear Gaussian null it has $F_{1,3}$ law. A small ratio does not establish linearity beyond the inspected settings.

</details>

### Exercise 14.4
<a id="case-studies-ex-4"></a>

Why is prediction for a new reading wider than a mean interval?

<details>
<summary>Hint 1</summary>

A fresh error enters the future response.

</details>
<details>
<summary>Hint 2</summary>

Add one to the mean leverage.

</details>
<details>
<summary>Solution</summary>

The mean leverage is $1/6$. A new independent response has variance factor $1+1/6=7/6$, rather than $1/6$. Multiplying by the same scale estimate gives standard errors $\\sqrt{133/72}$ and $\\sqrt{19/72}$. Shared future error would need another covariance argument.

</details>

### Exercise 14.5
<a id="case-studies-ex-5"></a>

Compute the logistic group coefficient for the binary case.

<details>
<summary>Hint 1</summary>

Take the difference of log odds.

</details>
<details>
<summary>Hint 2</summary>

Odds are four and three-sevenths.

</details>
<details>
<summary>Solution</summary>

The coefficient is $\\log4-\\log(3/7)=\\log(28/3)$. It is a conditional log-odds contrast under the declared two-group model. Its exponential is neither the probability ratio nor the probability difference.

</details>

### Exercise 14.6
<a id="case-studies-ex-6"></a>

Explain the finite-MLE issue if group B has ten successes out of ten.

<details>
<summary>Hint 1</summary>

Its fitted probability is at the boundary.

</details>
<details>
<summary>Hint 2</summary>

A finite logit is always strictly below one.

</details>
<details>
<summary>Solution</summary>

The group-B log odds tends to positive infinity. The likelihood approaches its supremum without a finite coefficient attaining it. A finite penalised or Bayesian estimate is possible under a changed procedure, but it should not be reported as the same unpenalised MLE.

</details>

### Exercise 14.7
<a id="case-studies-ex-7"></a>

Derive both group rates in the count case.

<details>
<summary>Hint 1</summary>

Pool counts and exposures within each group.

</details>
<details>
<summary>Hint 2</summary>

Use a ratio of totals.

</details>
<details>
<summary>Solution</summary>

Group A has three events in six units, giving one-half per unit. Group B has eight in seven units, giving $8/7$. Their ratio is $16/7$. Averaging row-wise rates instead would use another weighting rule and not the common-rate likelihood estimate.

</details>

### Exercise 14.8
<a id="case-studies-ex-8"></a>

Why does the common-rate null imply conditional B allocation probability 7/13?

<details>
<summary>Hint 1</summary>

Condition independent Poisson totals on their sum.

</details>
<details>
<summary>Hint 2</summary>

Under the null means are proportional to exposures.

</details>
<details>
<summary>Solution</summary>

The common rate cancels from the ratio of group mean to total mean, leaving $7/(6+7)$. Given eleven events, the B count is binomial with that probability. The conditional counts are dependent through their fixed total, despite independent unconditioned Poisson observations.

</details>

### Exercise 14.9
<a id="case-studies-ex-9"></a>

How should a conditional allocation interval be transformed to a B-to-A rate-ratio interval?

<details>
<summary>Hint 1</summary>

Solve the allocation formula for the rate ratio.

</details>
<details>
<summary>Hint 2</summary>

Keep the known exposure factor.

</details>
<details>
<summary>Solution</summary>

Apply the increasing map $p\\mapsto[p/(1-p)](6/7)$ to the allocation endpoints, with appropriate infinite endpoint conventions. Relabelling the raw probability interval would omit exposure and use the wrong parameter scale.

</details>

### Exercise 14.10
<a id="case-studies-ex-10"></a>

Which conclusions from these cases are evidence about a real population?

<details>
<summary>Hint 1</summary>

The datasets are explicitly hypothetical hand examples.

</details>
<details>
<summary>Hint 2</summary>

Mathematical calculations and empirical evidence are different.

</details>
<details>
<summary>Solution</summary>

None of the supplied values establishes an empirical claim about a real population. They demonstrate exact algebra and conditional model reasoning. A real investigation needs sourced observations, a collection and inclusion protocol, and an argument connecting its model to the scientific target.

</details>

## Summary

A completed regression analysis links its unit, response support, design, target and model assumptions. Replicated Gaussian lines, binary groups and exposed counts use different uncertainty arguments. Exact hand calculations and supplied code clarify those distinctions without pretending to be executed empirical evidence.
`;export{e as default};