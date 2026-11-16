var e=`---
parent_id: book-computational-bayesian-modeling
chapter_id: measurement-error-missing-data
title: "Measurement Error and Missing Data"
level: graduate
license: CC BY-SA 4.0
---

# Measurement Error and Missing Data

An observation model describes how a scientific quantity becomes a recorded value. Measurement error changes that value; missingness determines which values are seen. A Bayesian model can represent both mechanisms explicitly, but integrating a latent variable or obtaining a proper posterior does not itself identify a scientific effect.

This L4 chapter assumes Gaussian conditioning, likelihood marginalisation and the preceding generative-model chapters. We distinguish classical and Berkson measurement, derive observed-data missingness factors, and give an exact nonidentification example. Sensitivity assumptions are labeled as assumptions rather than information supplied by the observed records.

## A classical measurement-error model

Let a latent predictor $T$ have mean $\\mu_T$ and variance $\\tau^2>0$. Record $W=T+U$ and outcome $Y=\\alpha+\\beta T+\\varepsilon$, where $U,\\varepsilon,T$ are mutually independent, the errors have mean zero and finite variances $\\sigma_U^2,\\sigma_\\varepsilon^2$.

The population slope of the linear projection of $Y$ on $W$ is
$$
\\frac{\\operatorname{Cov}(W,Y)}{\\operatorname{Var}(W)}
=\\beta\\frac{\\tau^2}{\\tau^2+\\sigma_U^2}.
$$
This follows by expanding covariance and using independence to remove cross terms. It is the classical attenuation identity. The ratio is below one when measurement variance is positive, but the result depends on its hypotheses. Correlated errors or differential measurement can bias slopes in other directions.

If $T,U$ are Gaussian, conditioning gives
$$
E[T\\mid W=w]=\\mu_T+\\kappa(w-\\mu_T),
\\qquad
\\kappa=\\frac{\\tau^2}{\\tau^2+\\sigma_U^2}.
$$
With the stated outcome model, the conditional mean of $Y$ given $W$ has slope $\\beta\\kappa$. The observed conditional association and the latent structural slope are therefore different targets even when the observed linear fit is exactly correct.

## What the joint normal law identifies

Under joint Gaussian assumptions the observed pair has covariance
$$
\\begin{pmatrix}
\\beta^2\\tau^2+\\sigma_\\varepsilon^2&\\beta\\tau^2\\\\
\\beta\\tau^2&\\tau^2+\\sigma_U^2
\\end{pmatrix}
$$
in the order $(Y,W)$. Its three distinct covariance entries do not generally identify the four unknown quantities $\\beta,\\tau^2,\\sigma_\\varepsilon^2,\\sigma_U^2$.

For any admissible choice of $\\tau^2$ below the observed predictor variance, the covariance fixes $\\beta=\\operatorname{Cov}(Y,W)/\\tau^2$, and residual variances can be adjusted if they remain nonnegative. Different latent models can then yield the same observed Gaussian law. A prior can distribute posterior mass along that observationally equivalent set, but cannot turn the observed covariance into a fourth independent equation.

Known measurement variance from an external calibration, validation measurements of $T$, or repeated independent measurements can supply extra information. Their provenance and independence assumptions must be stated. A reported standard deviation from an unrelated instrument or population is not automatically the required calibration quantity.

## Replicate measurements and Berkson errors

Suppose $W_1=T+U_1$, $W_2=T+U_2$ with independent centered measurement errors also independent of $T,\\varepsilon$. Then $\\operatorname{Cov}(W_1,W_2)=\\tau^2$ and $\\operatorname{Cov}(Y,W_1)=\\beta\\tau^2$. Their ratio identifies $\\beta$ when $\\tau^2>0$. Shared instrument bias would add covariance and invalidate that argument.

In a Berkson model, the assigned or recorded setting is $W$, but true exposure is $T=W+U$ with $U$ independent of $W$. Substituting gives
$$
Y=\\alpha+\\beta W+(\\beta U+\\varepsilon).
$$
The conditional mean slope remains $\\beta$ under the stated independence and zero means. The extra error contributes $\\beta^2\\sigma_U^2$ to conditional variance. Thus “measurement error always attenuates” is false: the direction of the measurement mechanism matters.

## Missingness is part of the observed-data law

Let $R=1$ indicate that outcome $Y$ is observed, and suppose covariates $X$ are observed for every roster member. Write response model $p_\\theta(y\\mid x)$ and observation probability $\\pi_\\psi(y,x)=P(R=1\\mid Y=y,X=x)$. A respondent contributes
$$
p_\\theta(y\\mid x)\\pi_\\psi(y,x),
$$
while a nonrespondent contributes
$$
\\int p_\\theta(y\\mid x)\\{1-\\pi_\\psi(y,x)\\}\\,dy.
$$
The integral is a probability of the recorded missingness event. Replacing the missing outcome by its mean is not this likelihood marginalisation.

The observed data must include the roster and missingness indicators. Analysing only a file of respondents can discard information about response probabilities and change the target population. A missing value is not the same as a known zero, a censored threshold report or a row absent from the sampling frame.

## Ignorability has several conditions

For this fully observed-covariate setting, missing at random means $\\pi_\\psi(y,x)=\\pi_\\psi(x)$. Then the full observed likelihood factors into the response-model likelihood over observed outcomes and a separate missingness factor depending on $\\psi$ and the roster covariates.

If parameter spaces are distinct and the prior factorises independently between $\\theta$ and $\\psi$, the missingness factor cancels from the posterior for $\\theta$. This proves the stated Bayesian ignorability conclusion. If the prior couples the parameters or the mechanisms share restrictions, the cancellation need not hold.

Missing at random is not generally verifiable from the observed outcomes, because dependence on unseen outcomes is precisely what is unobserved. Correct modeling of $Y\\mid X$ and positivity of response probabilities over the target covariate support also matter for population prediction. A zero-response stratum has no direct observed outcome information and requires extrapolation or additional evidence.

## An exact binary nonidentification example

Suppose a fraction $r$ of a fixed target population responds, and the success probability among respondents is $p_{\\rm obs}$. Let the unknown success probability among nonrespondents be $q\\in[0,1]$. The population success probability is
$$
p=r p_{\\rm obs}+(1-r)q.
$$
Every value of $q$ produces the same observed respondent outcomes and response fraction. Therefore observed data identify only
$$
r p_{\\rm obs}\\le p\\le r p_{\\rm obs}+1-r.
$$
Increasing sample size can estimate $r,p_{\\rm obs}$ accurately while leaving the interval's missingness width essentially unchanged.

A Bayesian prior on $q$ can produce a posterior for $p$, but without an identifying link its posterior for $q$ remains prior-driven. Calling that interval narrow because the chosen prior on $q$ is narrow would conceal where the information came from.

A pattern-mixture sensitivity can set $q=\\operatorname{logit}^{-1}\\{\\operatorname{logit}(p_{\\rm obs})+\\delta\\}$ for an asserted sensitivity shift $\\delta$. It translates a meaningful range of missing-group odds into population probabilities. The observed data alone do not estimate $\\delta$ in this simple example.

## Data augmentation is a calculation, not new evidence

A posterior algorithm may alternate between drawing missing outcomes from their conditional law and updating parameters. Such draws integrate over uncertainty under the specified model. They are not additional independent observed measurements and do not justify increasing the observed sample size.

Multiple imputation similarly combines within-imputation uncertainty with variation across imputed datasets under its assumptions. Treating one completed dataset as wholly observed omits uncertainty and can make conclusions spuriously precise. A coherent Bayesian posterior predictive calculation can represent both levels directly.

If missingness depends on the unseen outcome, augmenting under a missing-at-random model still imposes that identifying assumption. More accurate computation cannot reveal which unobserved mechanism actually generated the missing values.

## Reporting the observation model

Name the latent scientific quantity, recorded surrogate, calibration source, roster, missingness indicator and future target. State which independence assumptions identify a correction. Separate uncertainty about an identified parameter from sensitivity along nonidentified directions.

For a measurement model, compare plausible error variances and shared-bias structures. For missingness, report both the observed-data fit and the dependence on sensitivity assumptions. Predictive checks of observed records can expose incompatibility, but cannot alone establish that an unobserved mechanism is correct.

The complete model should also distinguish censoring from truncation. A known threshold report contributes a tail probability for a known roster member; conditioning on entering a truncated sample contributes a selection normaliser. Neither is equivalent to discarding the record or imputing an arbitrary numerical endpoint.

## A sensitivity posterior with no identifying information

In the binary missingness example, suppose the response fraction $r$ and respondent probability $p_{\\rm obs}$ are treated as known reference quantities. Give the missing-group success probability $q$ a beta prior with positive shapes $a,b$. The observed-data law contains no $q$ term, so its posterior is the same beta law.

The population probability is an affine transformation of $q$. Its posterior mean and variance are
$$
E[p\\mid\\text{observed}]
=r p_{\\rm obs}+(1-r)\\frac a{a+b},
\\qquad
\\operatorname{Var}(p\\mid\\text{observed})
=(1-r)^2\\frac{ab}{(a+b)^2(a+b+1)}.
$$
This is a coherent posterior calculation, but all uncertainty about the missing group's success comes from its prior. More precise estimation of the observed reference quantities does not shrink that particular component. If $r,p_{\\rm obs}$ are themselves estimated, their uncertainty must also be integrated rather than frozen without explanation.

**Worked example: two prior strengths.** Let $r=4/5$ and $p_{\\rm obs}=1/4$. Both a uniform prior and a $\\operatorname{Beta}(100,100)$ prior on $q$ have mean one-half, so both give population posterior mean three-tenths. The second yields a far narrower posterior solely because it asserts much more concentration about the unseen outcomes. Agreement of posterior centers conceals this difference in supplied information.

For a log-odds sensitivity shift, $q(\\delta)=\\operatorname{logit}^{-1}(\\operatorname{logit}(p_{\\rm obs})+\\delta)$, differentiation gives
$$
\\frac{dp}{d\\delta}=(1-r)q(\\delta)\\{1-q(\\delta)\\}
\\le\\frac{1-r}{4}.
$$
This bounds local sensitivity of the population probability along that specific path. Its maximum shrinks when the missing fraction shrinks. It does not establish that the chosen log-odds family includes every plausible missingness mechanism.

## Calibration information and its population

An external validation sample measuring both $T$ and $W$ can identify measurement error under a shared instrument model. Its transfer requires the same error law, or a model for how that law changes with population, exposure and recording conditions. A high-precision calibration from one range may not describe an instrument used far outside that range.

Replicate measurements need their own protocol. Repeating the same biased procedure can preserve a common systematic error; averaging reduces independent noise but not that shared bias. The covariance of replicates then contains both latent variation and common error, so the simple identification ratio earlier no longer applies.

These issues are not solved by calling all unobserved quantities latent. A joint model makes assumptions explicit and allows their consequences to be computed. Evidence for those assumptions still comes from collection design, validation information, scientific constraints and comparisons that can actually distinguish the competing observation laws.

## Construct two observationally equivalent selection laws

The binary mixture bound can be strengthened into an explicit construction. Fix an observed response fraction $r\\in(0,1)$ and respondent success probability $p_{\\rm obs}\\in(0,1)$. For any asserted missing-group probability $q\\in[0,1]$, set population probability $p=r p_{\\rm obs}+(1-r)q$.

The joint masses are $P(R=1,Y=1)=r p_{\\rm obs}$, $P(R=1,Y=0)=r(1-p_{\\rm obs})$, $P(R=0,Y=1)=(1-r)q$, and $P(R=0,Y=0)=(1-r)(1-q)$. They are nonnegative and sum to one, giving a valid complete-data law.

Whenever the denominators are positive, its outcome-dependent response probabilities are
$$
P(R=1\\mid Y=1)=\\frac{r p_{\\rm obs}}p,\\qquad
P(R=1\\mid Y=0)=\\frac{r(1-p_{\\rm obs})}{1-p}.
$$
Both lie between zero and one because the numerators are joint masses contained in the corresponding marginal events. The recorded response fraction and recorded success distribution are exactly the same for every $q$. This proves nonidentification by exhibiting whole competing laws, not merely by counting unknown parameters.

At $q=p_{\\rm obs}$ the response mechanism is independent of the binary outcome. Other values generally create outcome-dependent response while leaving the observed record unchanged. Thus the missing-at-random assumption selects one unobserved completion from many compatible laws; its observational fit cannot by itself distinguish that selection.

## Worked example 1: calibration changes a slope target

Suppose $\\operatorname{Var}(W)=4$ and $\\operatorname{Cov}(Y,W)=6$. A known classical measurement variance one gives latent variance three and slope two. Measurement variance zero gives slope $3/2$. Both corrections use the same observed covariance; their difference comes from external information, not from a different least-squares computation.

## Worked example 2: a population mean under nonresponse

With response fraction four-fifths and observed success probability one-quarter, population success lies between one-fifth and two-fifths. Assuming equal respondent and nonrespondent success picks one-quarter inside that interval. A prior concentrated near that assumption makes a narrow posterior possible but does not make the assumption observed.

## Worked example 3: one censoring report is not a sampled truncation

For exponential waiting with rate $\\lambda$, a known roster member reported only as waiting at least two contributes $e^{-2\\lambda}$. If the sample includes only individuals whose waiting exceeded two, an exact later waiting value has its density divided by that same survival probability. One likelihood multiplies by a tail factor; the other conditions on selection and divides by it.

## Replication does not identify a shared measurement bias

Independent replicate errors are a substantive assumption. Consider instead two measurements formed from the true quantity, an additional shared random bias and two independent replicate-specific errors. Suppose all components are centered and mutually independent.

The replicate difference removes both the true quantity and the shared bias, so its variance identifies only the replicate-specific noise variance. The covariance between the two replicates contains the sum of true-quantity variance and shared-bias variance. Those contributions cannot be separated from the two replicate measurements alone.

Taking many replicates removes the independent noise from their average, but the average still approaches the true quantity plus the shared bias. A stable replicate average is therefore not automatically an accurate measurement of the intended latent variable.

If an outcome depends linearly on the true quantity, its covariance with either replicate contains the slope times true-quantity variance, whereas replicate covariance contains an extra bias component. Applying the independent-error attenuation correction without that distinction can overstate what the calibration data identify.

An external reference measurement, a justified model for shared bias, or an additional experimental design can provide information that ordinary repeated readings do not. The posterior may still be proper without it, but separation of these variance components can then come from prior assumptions. Reporting that dependence is part of the observation model rather than a defect to conceal by showing a tight fitted curve.

## Repeated measurements identify contrasts before shared location

With two readings of the same latent quantity, write each as latent value plus a common systematic bias plus its own independent mean-zero error. Subtraction removes both the latent value and the shared bias. If the two error variances are equal, the variance of the reading difference is twice that error variance. If the error variances differ, only their sum is identified by this contrast without further information.

The covariance of the readings contains the variation of the latent quantity plus any variation of the shared bias, including their covariance if they are associated. Thus agreement between repeated readings can estimate repeatability while leaving a common calibration error entirely unresolved. A population of perfectly repeatable instruments could all share the same offset. External calibration or a separately justified bias model is needed to locate the latent scale. This calculation sharpens the distinction between random measurement precision and accuracy relative to the scientific quantity; a narrower conditional posterior under a fixed calibration assumption does not identify that assumption from repeats.

## Exercises

### Exercise 1
<a id="measurement-error-missing-data-ex-1"></a>

Derive attenuation when beta=2, latent variance three and measurement variance one.

<details>
<summary>Hint 1</summary>

Use the covariance-to-variance ratio.

</details>
<details>
<summary>Hint 2</summary>

The reliability factor is three-quarters.

</details>
<details>
<summary>Solution</summary>

The observed linear-projection slope is $2(3/4)=3/2$. It targets association with the recorded surrogate under the independent classical-error model, not the latent structural slope two.

</details>

### Exercise 2
<a id="measurement-error-missing-data-ex-2"></a>

Does an exactly linear observed conditional mean prove the latent slope equals its observed slope?

<details>
<summary>Hint 1</summary>

Gaussian measurement error preserves a linear conditional mean.

</details>
<details>
<summary>Hint 2</summary>

The reliability factor remains.

</details>
<details>
<summary>Solution</summary>

No. Under the Gaussian classical-error model the observed mean is linear with slope $\\beta\\kappa$. Exact linearity therefore does not remove attenuation or identify $\\kappa$. Calibration or additional observations are needed.

</details>

### Exercise 3
<a id="measurement-error-missing-data-ex-3"></a>

How do two independent replicate measurements identify latent variance?

<details>
<summary>Hint 1</summary>

Their measurement errors do not share covariance.

</details>
<details>
<summary>Hint 2</summary>

Only the common true predictor remains.

</details>
<details>
<summary>Solution</summary>

Expanding $\\operatorname{Cov}(W_1,W_2)$ leaves $\\operatorname{Var}(T)=\\tau^2$. Combined with $\\operatorname{Cov}(Y,W_1)=\\beta\\tau^2$, it identifies the slope when positive. Shared measurement bias invalidates this cancellation.

</details>

### Exercise 4
<a id="measurement-error-missing-data-ex-4"></a>

Why does Berkson error not attenuate the linear mean slope under its stated assumptions?

<details>
<summary>Hint 1</summary>

Substitute T=W+U into the outcome equation.

</details>
<details>
<summary>Hint 2</summary>

The new residual has conditional mean zero.

</details>
<details>
<summary>Solution</summary>

The conditional mean is $\\alpha+\\beta W$ because $E(U\\mid W)=0$ and outcome noise is centered. Measurement variation instead adds to residual variance. This differs from conditioning a noisy surrogate on an unknown true predictor.

</details>

### Exercise 5
<a id="measurement-error-missing-data-ex-5"></a>

Write the likelihood contribution of a missing outcome in the selection model.

<details>
<summary>Hint 1</summary>

Integrate the joint response and nonresponse factor.

</details>
<details>
<summary>Hint 2</summary>

The missingness event is observed.

</details>
<details>
<summary>Solution</summary>

The contribution is $\\int p_\\theta(y\\mid x)\\{1-\\pi_\\psi(y,x)\\}\\,dy$. It is not a density evaluated at an imputed mean. Its parameter dependence can carry information about the observation mechanism.

</details>

### Exercise 6
<a id="measurement-error-missing-data-ex-6"></a>

List the conditions used for the chapter's posterior ignorability cancellation.

<details>
<summary>Hint 1</summary>

MAR alone is not the whole argument.

</details>
<details>
<summary>Hint 2</summary>

Keep parameter and prior separation explicit.

</details>
<details>
<summary>Solution</summary>

The mechanism depends only on fully observed covariates, the parameter spaces are distinct, and the prior factorises between response and mechanism parameters. These conditions make the observed likelihood and posterior separate for inference on the response parameters.

</details>

### Exercise 7
<a id="measurement-error-missing-data-ex-7"></a>

With response fraction 0.8 and respondent success probability 0.25 find the identification interval.

<details>
<summary>Hint 1</summary>

Let missing-group success range over zero to one.

</details>
<details>
<summary>Hint 2</summary>

Use the population mixture identity.

</details>
<details>
<summary>Solution</summary>

The population probability ranges from $0.8(0.25)=0.2$ to $0.2+0.2=0.4$. Sampling precision for the observed quantities does not eliminate this missingness range without further assumptions.

</details>

### Exercise 8
<a id="measurement-error-missing-data-ex-8"></a>

Can posterior imputed outcomes be counted as new independent evidence?

<details>
<summary>Hint 1</summary>

They were generated from the fitted model.

</details>
<details>
<summary>Hint 2</summary>

They represent uncertainty rather than observations.

</details>
<details>
<summary>Solution</summary>

No. They are conditional draws used to integrate the model's missing variables. Counting them as new measured data would reuse model-generated information and omit the uncertainty they are intended to represent.

</details>

### Exercise 9
<a id="measurement-error-missing-data-ex-9"></a>

Why is MAR generally untestable from observed outcomes alone?

<details>
<summary>Hint 1</summary>

Its disputed dependence is on unseen values.

</details>
<details>
<summary>Hint 2</summary>

Different unseen distributions can share the observed law.

</details>
<details>
<summary>Solution</summary>

The binary example permits every missing-group success probability while preserving the same observed respondents and response rate. Data therefore cannot distinguish those mechanisms without additional restrictions or validation information.

</details>

### Exercise 10
<a id="measurement-error-missing-data-ex-10"></a>

Distinguish censoring from truncation.

<details>
<summary>Hint 1</summary>

A censored roster member is known to exist.

</details>
<details>
<summary>Hint 2</summary>

Truncation conditions on selection into the observed sample.

</details>
<details>
<summary>Solution</summary>

A censoring report contributes a tail probability for that member. Truncation requires a selection normaliser because the sampling law is conditional on inclusion. Discarding either mechanism or replacing it by a missing numeric value changes the likelihood.

</details>

## Summary

Observation laws distinguish true quantities, surrogates, rosters and missingness. Classical attenuation, replicate identification and Berkson variation follow different mechanisms. Missing-data likelihoods integrate the unobserved outcome; ignorability needs mechanism and parameter conditions. Sensitivity and identification limits remain even with exact posterior computation.
`;export{e as default};