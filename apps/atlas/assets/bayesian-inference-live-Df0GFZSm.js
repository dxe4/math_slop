var e=`---
id: visual-lab-bayesian-inference
title: "Bayesian Inference Laboratory: Updating and Prediction"
level: undergraduate
estimated_minutes: 100
license: CC BY-SA 4.0
---

# Bayesian Inference Laboratory: Updating and Prediction

Bayesian inference turns a probability model and observed data into an updated distribution over unknown quantities. This laboratory makes the algebra visible in three conjugate models: Beta–Binomial, Gamma–Poisson, and Normal–Normal. It also keeps prediction, uncertainty, and model checking separate from parameter updating.

[Open the runnable laboratory](#/labs?lab=visual-lab-bayesian-inference)

All controls have labels and keyboard operation. The SVG is accompanied by tables containing prior, likelihood, posterior, interval, predictive, and checking quantities. Invalid parameters produce a readable error rather than a plausible-looking graph. Motion is unnecessary and reduced-motion preferences are respected.

## Bayes' rule as a density calculation

For parameter $\\theta$ and data $y$,

$p(\\theta |y) = p(y|\\theta )p(\\theta ) / p(y)$.

The denominator $p(y)=\\int p(y|\\theta )p(\\theta )d\\theta$ normalizes the posterior. In proportional notation,

$posterior ∝ likelihood \\times prior$.

The likelihood is a function of $\\theta$ after the observed data are fixed; it is not itself a probability distribution over $\\theta$ until combined with a prior and normalized.

## Three conjugate updates

If $\\theta ~Beta(\\alpha ,\\beta )$ and $x$ successes occur in $n$ Bernoulli trials, then

$\\theta |x ~ Beta(\\alpha +x, \\beta +n-x)$.

If a Poisson rate has Gamma prior $\\lambda ~Gamma(a,b)$ in rate parametrization and counts total $s$ over exposure $t$, then

$\\lambda |y ~ Gamma(a+s,b+t)$.

If $\\mu ~Normal(m_{0},s_{0}^{2})$ and observations are Normal with known variance $\\sigma ^{2}$, posterior precision is the sum of prior and data precision. The lab states the chosen parametrization explicitly because Gamma scale/rate and Normal precision/variance confusions are common sources of silent error.

Sequential updating agrees with batch updating when the same conditional-independence model is used: yesterday's posterior can serve as today's prior. Changing the model between batches changes the claim.

## Credible intervals and predictive checks

A 95% posterior credible interval contains 95% posterior probability under the stated model and prior. It is not the same object as a 95% frequentist confidence interval, whose coverage statement concerns repetitions of a data-generating procedure.

The posterior predictive distribution averages future-data probabilities over posterior uncertainty:

$p(y_new|y)=\\int p(y_new|\\theta )p(\\theta |y)d\\theta$.

A predictive check compares observed summaries with replicated summaries from that distribution. A discrepancy can reveal model tension; a comfortable check does not prove the model true.

## Gamma–Poisson tails and finite displayed mass

The Gamma–Poisson predictive count law has infinite support. A finite table or finite tail sum therefore does not contain its entire probability mass. The prior and posterior aggregate-count checks choose separate count horizons from their own distributions; a diffuse prior is not truncated merely at a narrow posterior's horizon.

For each check, let $K$ be its displayed summation limit, let $m_K$ be the total predictive mass on counts zero through $K$, and let $a_K$ be the mass of retained counts satisfying the stated discrepancy event. The full event probability lies in
$$
[a_K,\\ \\min(1,a_K+1-m_K)].
$$
The lower endpoint counts the enumerated extreme outcomes. The upper endpoint allows all omitted counts to be extreme. Neither endpoint is silently substituted for the complete infinite-support probability.

The interface shows the retained and omitted mass separately for the prior and posterior check. Its displayed intervals are numerical truncation ranges, using approximate special-function and floating-point calculations; they do not certify a bound on those numerical approximation errors. A summation-work limit can leave a wide range, which is reported rather than hidden.

The future-count table displays at most its first 41 rows and reports their separate prior and posterior masses. Its exposure can differ from the aggregate-data exposure used by the checks. Neither that finite table nor the check range is a posterior credible interval for the parameter. These changes concern count-tail accounting; the Gamma shape-rate posterior update and the discrepancy event remain the same.

## Exercises with solutions

### 1. Beta–Binomial update

Start with $\\operatorname{Beta}(2,2)$ and observe 7 successes in 10 trials. Find the posterior.

**Solution.** Add successes to the first shape and failures to the second: $Beta(2+7,2+3)=Beta(9,5)$.

### 2. Sequential agreement

Using the same prior, first observe 3 successes in 4 trials and later 4 successes in 6. Show the final posterior.

**Solution.** The first posterior is $\\operatorname{Beta}(5,3)$. Updating with four successes and two failures gives $\\operatorname{Beta}(9,5)$, the same result as the batch calculation.

### 3. Gamma rate convention

Let $\\lambda ~Gamma(3,2)$ with the second parameter a rate. Observe a total count 8 over exposure 5. Find the posterior.

**Solution.** The shape becomes $3+8=11$ and the rate becomes $2+5=7$, so $\\lambda |y~Gamma(11,7)$. Under a scale convention the formula would differ, which is why the convention must be stated.

### 4. Interval language

Why is “there is 95% probability that this fixed frequentist confidence interval contains the fixed parameter” generally not the confidence-interval guarantee?

**Solution.** After the data are observed, the usual frequentist parameter and interval endpoints are fixed. The 95% statement describes the long-run proportion of intervals from repeated samples that cover the parameter. A Bayesian posterior interval supports a conditional probability statement only under its prior and likelihood model.

## Audit checklist

- State the sampling model and independence assumptions.
- State every prior and parametrization.
- Distinguish parameter uncertainty from future-data uncertainty.
- Check sensitivity to defensible alternative priors.
- Report predictive discrepancies without treating checks as model proofs.
- Keep mathematical posterior claims separate from scientific, causal, or decision claims.
`;export{e as default};