
# Poisson and Count Models

Preparation is [exponential dispersion families](exponential-dispersion-families.md), [likelihood inference](../principles-statistical-inference/likelihood-score-and-evidence.md), gamma integrals and conditional variance. The R formulation is supplied analytically without execution.

Counts record how often an event occurred during a stated opportunity or exposure. Two observations with different observation times do not describe the same mean count even when their event rates agree. A count model must therefore specify both its support and what one row's exposure represents.

The basic model assumes conditionally independent Poisson responses. It does not infer independence merely because the response is an integer. Repeated events within one unit, shared environments, truncation and selective reporting can all change the conditional law.

## Poisson likelihood with a log mean

For $Y_i\sim\operatorname{Poisson}(\mu_i)$ independently, let $\eta_i=\log\mu_i=x_i^\mathsf T\beta$. The log likelihood is
$$
\ell(\beta)=\sum_i\{y_ix_i^\mathsf T\beta-e^{x_i^\mathsf T\beta}-\log(y_i!)\}.
$$
The mean and variance both equal $\mu_i$. Their equality is a model implication, not a necessary property of every count distribution.

**Theorem 11.1 (score and curvature).** The score is $X^\mathsf T(y-\mu)$ and the Hessian is $-X^\mathsf TWX$ with $W=\operatorname{diag}(\mu_i)$.

**Proof.** Differentiate each log-likelihood term. The derivative of the exponential mean is $\mu_i x_i$, so the first derivative is $\sum_i x_i(y_i-\mu_i)$. A second derivative gives $-\sum_i\mu_i x_ix_i^\mathsf T$. With finite coefficients, all means are positive. Full column rank therefore makes the Hessian negative definite. ∎

Thus a finite stationary point is the unique maximum. Existence is separate. An intercept-only all-zero sample has log likelihood decreasing in the mean and its supremum at mean zero, corresponding to an intercept tending to minus infinity. A finite printed coefficient does not prove the mathematical maximum exists.

## Exposure is an offset, not a freely estimated effect

For exposure $t_i>0$, model rate $r_i=e^{x_i^\mathsf T\beta}$ and mean count $\mu_i=t_ir_i$. Then
$$
\log\mu_i=\log t_i+x_i^\mathsf T\beta.
$$
The offset $\log t_i$ has fixed coefficient one. It expresses the assumption that multiplying exposure multiplies expected count proportionally at the same rate. Estimating a coefficient on log exposure instead asks another scientific question.

For an intercept-only common rate, differentiating gives $\hat r=\sum_i y_i/\sum_i t_i$ when the total count is positive. This is a ratio of totals, not the unweighted mean of individual rates. The latter weights a short noisy exposure as heavily as a long precise one.

A row with zero exposure and zero count gives no rate information under this model. A positive count at zero exposure is impossible and requires investigation of units, recording or model definition. Silently replacing zero exposure by a small positive number changes the likelihood.

Changing the time unit changes the rate intercept and exposure values consistently. If hours become minutes, exposure numbers multiply by sixty and rate per minute divides by sixty; expected counts remain unchanged.

## Rate ratios and probability contrasts

For two design rows differing by one in predictor $j$ with other terms fixed, the rate ratio is $e^{\beta_j}$. It is a mean-rate comparison, not necessarily a risk ratio for at least one event. The latter probability is $1-e^{-\mu}$ and depends on exposure.

The same rate ratio can therefore correspond to different changes in event probability. A low-exposure row with mean $0.1$ and a doubled rate has at-least-one probabilities $1-e^{-0.1}$ and $1-e^{-0.2}$. For mean two, doubling gives $1-e^{-2}$ and $1-e^{-4}$. The nonlinear probability map does not preserve a constant difference or ratio.

Interactions likewise operate on the log-rate scale. A category-by-predictor interaction changes the rate ratio across categories. Interpreting it on the count or probability scale requires evaluating the full design and exposure.

## Conditioning on the total count

Let independent Poisson means be $\mu_1,\ldots,\mu_n$ with total $\mu_+>0$. Their sum is Poisson with mean $\mu_+$. For nonnegative counts summing to $m$, dividing the joint mass by the total mass gives
$$
P(Y_1=y_1,\ldots,Y_n=y_n\mid Y_+=m)
=\frac{m!}{\prod_i y_i!}\prod_i
\left(\frac{\mu_i}{\mu_+}\right)^{y_i}.
$$
Thus the conditional law is multinomial. Independence of the original counts is needed for the product; conditional counts are not independent because their total is fixed.

When $\mu_i=t_i e^{\alpha+x_i^\mathsf T\beta}$, the common intercept cancels from the conditional probabilities. They are proportional to $t_i e^{x_i^\mathsf T\beta}$. Conditioning can therefore remove a nuisance total-rate parameter while preserving information about relative rates.

This connection also explains why a table with a fixed total can admit a multinomial analysis and a related Poisson log-linear representation. The sampling protocols still differ; one must state whether the total was random or fixed and which inference conditions on it.

## Deviance is a likelihood comparison

The saturated count mean is $\tilde\mu_i=y_i$, including a boundary value at a zero count. Twice the log-likelihood difference from a fitted positive mean is
$$
D=2\sum_i\left[y_i\log\frac{y_i}{\hat\mu_i}-(y_i-\hat\mu_i)\right],
$$
with $0\log0$ interpreted by its limiting value. Each term is nonnegative. For positive $y$, convexity of $u\log u-u+1$ after scaling gives this; for $y=0$, the term is simply the fitted mean before multiplication by two.

A small deviance is not proof of correct independent sampling. Its approximate chi-square use requires an appropriate regular asymptotic regime, often sufficiently informative grouped counts. Merely increasing the number of sparse independent rows does not make every saturated-model comparison a standard fixed-dimensional likelihood-ratio theorem.

A signed deviance residual retains the sign of $y_i-\hat\mu_i$ and square root of its contribution. It is a diagnostic summary, not an independently standard-normal observation. Its components share fitted parameters and may be asymmetric at small means.

## Overdispersion and random intensity

Suppose a latent intensity $\Lambda$ has mean $\mu$, and conditional on it $Y$ is Poisson. Total expectation and variance give
$$
EY=\mu,\qquad
\operatorname{Var}(Y)=E\Lambda+\operatorname{Var}(\Lambda).
$$
Random intensity therefore creates overdispersion without changing the unconditional mean.

For gamma intensity of shape $k>0$ and rate $k/\mu$, integration of the Poisson mass yields
$$
P(Y=y)=\frac{\Gamma(y+k)}{\Gamma(k)y!}
\left(\frac{k}{k+\mu}\right)^k
\left(\frac{\mu}{k+\mu}\right)^y.
$$
The gamma integral supplies the normalising power. This negative-binomial law has variance $\mu+\mu^2/k$. The extra parameter describes heterogeneity under a full mixture model, not just an arbitrary multiplier on a Poisson standard error.

Zero inflation is another full probability model: with probability $\pi$ generate a structural zero, otherwise generate a Poisson count. Its zero probability is $\pi+(1-\pi)e^{-\lambda}$ and mean $(1-\pi)\lambda$. A surplus of observed zeros alone does not identify this mechanism; heterogeneous ordinary rates, dependence or missing exposure can also produce them.

## Supplied R formulation and its assumptions

The base-R formula for the declared log-rate model is glm(count ~ predictors + offset(log(exposure)), family = poisson, data = rows). It represents a complete likelihood only with nonnegative integer counts, positive exposures and the stated conditional independence. It neither installs a dataset nor asserts that such a model has been executed here.

Estimated inverse information is an asymptotic covariance under regular correctly specified likelihood conditions. The next chapter distinguishes quasi-likelihood, where mean and variance assumptions support an estimating equation without claiming a Poisson mass function. Comparing those approaches requires preserving the target rate and the actual collection unit.

Out-of-sample evaluation must respect time, clustering and exposure. Comparing raw count prediction errors across very different exposures can weight the scientific question unintentionally. State whether the target is total events, rate, event probability or a loss-weighted decision before ranking models.

## Exact inference for a single common rate

Under independent Poisson counts with fixed known exposures, the total $S=\sum_iY_i$ has Poisson mean $rT$, where $T=\sum_it_i$. The joint likelihood factors into a term depending on $r$ through $S\log r-rT$ and factors not involving $r$. Thus the total count contains the rate information under this common-rate model.

The estimate $\hat r=S/T$ is exactly unbiased and has variance $r/T$. Its logarithm behaves differently: the event $S=0$ has positive probability for every finite $rT$, and the unpenalised log-rate estimate is then minus infinity. Consequently a finite expectation of that log estimate cannot be assumed. A delta-method approximation describes an appropriate large-information regime, not every finite count.

An exact confidence set can be obtained by inverting Poisson tail tests for the total mean and dividing its endpoints by $T$. The gamma-Poisson identity expresses these endpoints through chi-square quantiles. For observed $s>0$, the usual equal-tailed interval is
$$
\left[
\frac{\chi^2_{2s,\alpha/2}}{2T},
\frac{\chi^2_{2(s+1),1-\alpha/2}}{2T}
\right].
$$
For $s=0$, its lower endpoint is zero and upper endpoint is $-\log(\alpha/2)/T$. The upper endpoint solves the no-event probability equation $e^{-rT}=\alpha/2$.

The identity follows from integrating the integer-shape gamma density by parts: its survival function is a finite Poisson sum. Inverting the monotone count-tail probabilities then gives the displayed endpoint equations. Discreteness generally makes coverage at least the nominal level rather than exactly equal to it at every rate.

**Worked example: no observed events.** Suppose independent exposure totals ten time units and the observed count is zero. The MLE rate is zero, but a positive rate is not logically ruled out. The equal-tailed $1-\alpha$ upper endpoint is $-\log(\alpha/2)/10$. A symmetric normal interval centred at zero would not express this one-sided support and discreteness correctly.

## Aggregation and loss of covariate information

Counts with the same rate model and known exposure can be aggregated: their total remains Poisson with mean equal to rate times total exposure. But aggregating rows with different predictors can lose information about regression effects. One cannot replace a varying log-linear mean by a rate at an averaged predictor and expect the same likelihood, because exponentiation is nonlinear.

Aggregation also changes what model criticism is possible. The total may fit well while counts across subperiods reveal time variation, clustering or exposure errors. Sufficiency for a parameter inside one model does not imply that the reduced total retains every diagnostic of that model's inadequacy.

For a reporting target about events per calendar period, exposure may itself be random or informative. Conditioning on a measured exposure is appropriate only when that conditional sampling argument is justified. If high-risk units stop observation earlier, simply inserting their observed time as an offset can omit an informative observation process.

## A supplied count-model formulation

The complete hypothetical two-group count table and base-R offset fit are supplied in [Case Studies](case-studies.md). That code uses only declared source values and does not access learner records or install packages. Its algebraic group rates are derived there. The source is an illustration of the mathematical model, not a claim of executed numerical evidence.

When using an actual open dataset, retain its licence, row unit, count definition and exposure construction. An event rate per person-time and an event probability per person answer different questions when repeat events are possible. The correct denominator follows from the collection protocol rather than from which column makes a regression fit look most convenient.

## Worked example 11.1: a pooled rate

Two independent observation periods last one and nine hours and record two and nine events. The common-rate likelihood estimate is $11/10=1.1$ per hour. The unweighted average of the two individual rates is $(2+1)/2=1.5$, answering a different weighting question. Under the common-rate model the fitted counts are $1.1$ and $9.9$, which sum to the observed total because the intercept score is zero.

## Worked example 11.2: conditional allocation of events

With equal rates and exposures one and three, independent counts conditional on total eight allocate events with probabilities one-quarter and three-quarters. Thus the first count is binomial with parameters eight and one-quarter, with mean two and variance $3/2$. Its covariance with the second count is minus that variance because their sum is fixed. The original unconditioned Poisson counts had covariance zero.

## Worked example 11.3: the same mean with different variances

A Poisson count of mean two has variance two. A gamma-mixed Poisson count with the same mean and shape four has variance $2+4/4=3$. Both can fit the same conditional-mean curve, but their likelihoods, tail probabilities and standard-error calculations differ. Equality of fitted means does not make the two statistical models equivalent.

## Aggregation is justified only for a common rate model

Suppose independent counts have a common log rate and known exposures. Their joint log likelihood depends on that rate through only the total count and total exposure; the remaining factorial and exposure terms are constant with respect to the rate. Summing the counts therefore preserves all likelihood information about that shared parameter.

The aggregated count is Poisson with mean equal to the summed means. One proof multiplies their probability-generating functions: independent Poisson factors combine by adding their mean parameters. Both independence and the common parameter structure matter.

If covariates differ across records, a single aggregate rate can discard the regression information carried by their allocation. If counts share an unobserved random rate, they can be independent conditional on that rate while becoming dependent after it is integrated out. Their marginal distribution is then generally a mixture rather than the same simple Poisson model.

Thus aggregation is a theorem about a declared likelihood, not a rule that all count rows may be pooled without changing the estimation target.

## Exercises

### Exercise 11.1
<a id="poisson-count-models-ex-1"></a>

Derive the common Poisson rate MLE for positive exposures.

<details>
<summary>Hint 1</summary>

Differentiate with respect to the log rate.

</details>
<details>
<summary>Hint 2</summary>

The intercept score sets total fitted count equal to total observed count.

</details>
<details>
<summary>Solution</summary>

With rate $r=e^\alpha$, the score is $\sum_i y_i-r\sum_i t_i$. A positive total count gives $\hat r=\sum_i y_i/\sum_i t_i$. Strict concavity in the finite log rate gives uniqueness. If all counts are zero, the optimum is the boundary rate zero and no finite intercept attains it.

</details>

### Exercise 11.2
<a id="poisson-count-models-ex-2"></a>

Why is log exposure an offset with coefficient one?

<details>
<summary>Hint 1</summary>

The model assumes proportional mean count.

</details>
<details>
<summary>Hint 2</summary>

Taking logarithms fixes its coefficient.

</details>
<details>
<summary>Solution</summary>

From $\mu_i=t_i e^{x_i^\mathsf T\beta}$ one obtains $\log\mu_i=\log t_i+x_i^\mathsf T\beta$. The multiplier on log exposure is one by this assumption. Estimating another multiplier tests or models a different exposure relation rather than implementing the same rate model.

</details>

### Exercise 11.3
<a id="poisson-count-models-ex-3"></a>

Show that a zero count contributes 2 times its fitted mean to deviance.

<details>
<summary>Hint 1</summary>

Use the limiting convention.

</details>
<details>
<summary>Hint 2</summary>

The logarithmic term vanishes.

</details>
<details>
<summary>Solution</summary>

At $y_i=0$, the bracket is $0-(0-\hat\mu_i)=\hat\mu_i$. Thus the contribution is $2\hat\mu_i$. Replacing the zero by one or deleting the row would change the likelihood and could conceal a poor prediction of no events.

</details>

### Exercise 11.4
<a id="poisson-count-models-ex-4"></a>

Derive the conditional multinomial probabilities.

<details>
<summary>Hint 1</summary>

Divide joint independent Poisson mass by the total-count mass.

</details>
<details>
<summary>Hint 2</summary>

Cancel the common exponential.

</details>
<details>
<summary>Solution</summary>

For counts summing to $m$, cancellation gives $m!/\prod y_i!$ times $\prod(\mu_i/\mu_+)^{y_i}$. These are exactly multinomial probabilities. Conditioning imposes dependence through the fixed sum even though the original counts were independent.

</details>

### Exercise 11.5
<a id="poisson-count-models-ex-5"></a>

What does a coefficient log(2) mean in a log-rate model?

<details>
<summary>Hint 1</summary>

Exponentiate the linear-predictor difference.

</details>
<details>
<summary>Hint 2</summary>

Keep other covariates and exposure definitions fixed.

</details>
<details>
<summary>Solution</summary>

It represents a rate ratio two for the specified unit predictor change at the same other terms. It does not generally double the probability of at least one event, which is $1-e^{-\mu}$. An interaction can also make the comparison depend on another covariate.

</details>

### Exercise 11.6
<a id="poisson-count-models-ex-6"></a>

Explain the all-zero finite-MLE failure.

<details>
<summary>Hint 1</summary>

The likelihood prefers ever smaller means.

</details>
<details>
<summary>Hint 2</summary>

A finite log mean cannot equal minus infinity.

</details>
<details>
<summary>Solution</summary>

Every term has the form $-e^{\eta_i}$ when counts are zero. In an intercept-containing model, decreasing the intercept sends means toward zero and increases the likelihood toward its supremum. A finite coefficient does not attain the boundary, despite negative-definite curvature at finite full-rank points.

</details>

### Exercise 11.7
<a id="poisson-count-models-ex-7"></a>

Derive the mixed-Poisson variance identity.

<details>
<summary>Hint 1</summary>

Use conditional expectation and conditional variance.

</details>
<details>
<summary>Hint 2</summary>

The conditional mean and variance both equal Lambda.

</details>
<details>
<summary>Solution</summary>

Total expectation gives $EY=E\Lambda$. Total variance gives $E[\operatorname{Var}(Y\mid\Lambda)]+\operatorname{Var}(E[Y\mid\Lambda])=E\Lambda+\operatorname{Var}(\Lambda)$. Thus latent heterogeneity adds variance beyond the Poisson mean.

</details>

### Exercise 11.8
<a id="poisson-count-models-ex-8"></a>

For mean three and gamma shape two find negative-binomial variance.

<details>
<summary>Hint 1</summary>

Use mean plus mean squared over shape.

</details>
<details>
<summary>Hint 2</summary>

The mixture has positive intensity variance.

</details>
<details>
<summary>Solution</summary>

The variance is $3+9/2=15/2$. A Poisson model with the same mean would give variance three. The discrepancy affects uncertainty and tails, not merely the interpretation of a printed dispersion label.

</details>

### Exercise 11.9
<a id="poisson-count-models-ex-9"></a>

Why does many sparse rows not automatically justify a chi-square deviance reference?

<details>
<summary>Hint 1</summary>

The saturated comparison dimension grows.

</details>
<details>
<summary>Hint 2</summary>

Sparse-cell contributions need an appropriate limiting argument.

</details>
<details>
<summary>Solution</summary>

The classical fixed-dimensional likelihood-ratio theorem does not directly apply when the saturated parameter dimension increases with the number of observations. Small means can retain non-Gaussian, asymmetric contributions. A reference requires a justified regime or another calibrated procedure, rather than sample size alone.

</details>

### Exercise 11.10
<a id="poisson-count-models-ex-10"></a>

Which model assumptions fail if counts from one shared site have a common unobserved intensity?

<details>
<summary>Hint 1</summary>

Conditionally independent counts can be dependent after mixing.

</details>
<details>
<summary>Hint 2</summary>

The site is a shared information source.

</details>
<details>
<summary>Solution</summary>

Even if counts are independent given the site intensity, marginal covariance can be positive through that shared latent variable. Treating all rows as independent Poisson observations then gives an incorrect joint likelihood. A hierarchical, clustered or explicitly dependent analysis must retain the site's role.

</details>

## Summary

Count likelihoods retain exposure, support and conditional independence. The log link gives rate ratios and a concave score equation, but finite maxima can fail. Conditioning totals yields multinomial structure. Deviance, mixture overdispersion and zero inflation describe different claims that cannot be selected from a mean curve alone.
