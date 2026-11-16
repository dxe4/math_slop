var e=`---
parent_id: book-statistical-learning-generalization
chapter_id: pac-bayes
title: "PAC-Bayes: Data-Dependent Mixtures and Fixed Priors"
level: graduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# PAC-Bayes: Data-Dependent Mixtures and Fixed Priors

PAC-Bayes controls the risk of a data-dependent distribution over predictors. A prior supplies a fixed probability allocation, while a posterior may use the full training sample. The theorem is simultaneous over posteriors; it is not a guarantee obtained by treating the selected posterior as independent of training. This chapter proves an exponential bound and a binary-relative-entropy bound from elementary changes of measure.

Assume a countable fixed hypothesis class, a fixed prior pi assigning positive probability to every member, iid observations and losses between zero and one. A pointwise-separable extension can be developed separately; no uncountable posterior integration theorem is hidden here. Logs are natural and zero-probability terms use their usual continuous or infinite conventions.

## Gibbs risk and posterior randomness

For a posterior distribution rho, define Gibbs population risk as the rho-average of the individual risks and Gibbs empirical risk as the same average of empirical risks. This corresponds to drawing a predictor according to rho and then using it on a fresh observation. Drawing once for an entire deployment or drawing anew for each prediction has the same expected one-observation risk, although the dependence between several predictions differs.

The theorem below controls that averaged risk on a high-probability training event. It does not say every member in posterior support has small risk. A deterministic majority vote or a posterior mean is another prediction rule, requiring an additional relation to the Gibbs loss.

The posterior complexity is relative entropy
$$\\operatorname{KL}(\\rho\\|\\pi)=
\\sum_h\\rho_h\\log(\\rho_h/\\pi_h).$$
It can be infinite, in which case the resulting bound is trivial. Positive prior support avoids an undeclared zero-probability destination, and fixes which posterior comparisons are admissible.

## A complete change-of-measure inequality

Let f be a bounded real function on the countable class and let Z be the prior expectation of exp f. It is positive and finite. Define a tilted distribution proportional to pi times exp f. Expanding its relative entropy from rho gives
$$\\operatorname{KL}(\\rho\\|\\pi_f)
=\\operatorname{KL}(\\rho\\|\\pi)-E_\\rho f+\\log Z.$$
Nonnegativity of relative entropy therefore proves
$$E_\\rho f\\le\\operatorname{KL}(\\rho\\|\\pi)+\\log E_\\pi e^f.$$
For infinite posterior entropy the inequality is interpreted as a trivial upper bound. For finite entropy, boundedness of f makes every rearrangement legitimate. Nonnegativity itself follows from the logarithm inequality applied to the density ratio, or the countable log-sum inequality.

This statement is deterministic and holds for every posterior at once for a given f. That simultaneity is what permits the posterior to depend on data after f has been formed from those data.

## A fixed-temperature exponential PAC-Bayes theorem

For any fixed classifier, the bounded-variable moment-generating-function proof gives
$$E_S e^{\\lambda(R(h)-\\widehat R(h))}
\\le e^{\\lambda^2/(8n)},\\qquad\\lambda>0.$$
Average over the fixed prior and use Tonelli. Markov's inequality implies that, with probability at least one minus delta, the prior exponential average is at most exp of lambda squared over eight n divided by delta. On that single event apply the change-of-measure inequality to lambda times the risk gap. Every posterior then satisfies
$$R(\\rho)\\le\\widehat R(\\rho)+
\\frac{\\operatorname{KL}(\\rho\\|\\pi)+\\log(1/\\delta)}{\\lambda}
+\\frac{\\lambda}{8n}.$$
Lambda was fixed independently of this sample. The posterior may be selected afterward because the event controls the prior average, not a separately selected classifier.

A finite predetermined temperature grid can allocate delta across its members and union bound the corresponding events. One may then minimize their displayed certificates after observing data, retaining the grid allocation in the confidence term. Simply optimizing lambda using a random posterior entropy while keeping the original fixed-lambda confidence term would skip that simultaneous step.

If the algorithm is constrained in advance to posterior entropy at most a deterministic K, choose $\\lambda=\\sqrt{8n\\{K+\\log(1/\\delta)\\}}$. The bound becomes empirical Gibbs risk plus $\\sqrt{\\{K+\\log(1/\\delta)\\}/(2n)}$. This optimization is legitimate because K, n and delta were fixed before the sample.

## A finite moment bound for binary relative entropy

For numbers a and b in the unit interval, let kl of a relative to b be binary relative entropy. First consider iid Bernoulli losses with mean r strictly between zero and one. Their empirical mean equals k divided by n with binomial probability. Multiplying that probability by exp of n times kl of k over n relative to r cancels the r factors, leaving
$$\\binom nk(k/n)^k(1-k/n)^{n-k}\\le1.$$
This is a binomial probability at its own success parameter. Sum over k from zero to n to get
$$E e^{n\\,\\mathrm{kl}(\\widehat R\\|R)}\\le n+1.$$
At r zero or one the loss is constant almost surely and the expectation is one, so the same bound holds.

For general independent losses in the unit interval with common mean r, the same upper bound follows by convex comparison. With all other losses fixed, the exponential of n times kl of their average relative to r is convex in the remaining loss: binary entropy divergence is convex in its first argument, and the increasing exponential preserves convexity. A convex function at a value between zero and one is at most the linear interpolation of its endpoint values. Taking expectation replaces that loss by a Bernoulli variable of mean r. Repeat for all coordinates, using independence, to reduce to the binomial calculation. This proves the moment bound for the bounded losses used in the theorem, rather than silently restricting them to binary observations.

## The simultaneous PAC-Bayes-kl inequality

Average that moment bound over pi and apply Markov. With probability at least one minus delta, the prior exponential average is at most n plus one divided by delta. Apply change of measure to n times the individual binary divergences. Joint convexity of binary relative entropy gives
$$\\mathrm{kl}(\\widehat R(\\rho)\\|R(\\rho))
\\le E_\\rho\\mathrm{kl}(\\widehat R(h)\\|R(h)).$$
For a finite posterior this is the log-sum inequality applied separately to the success and failure probabilities. For a countable posterior, apply the same inequality to finite partitions with a remaining aggregate cell and pass to the limit; the nonnegative divergence sum has its usual monotone partition limit. Equivalently the countable log-sum inequality gives the two terms directly.

Combining proves, simultaneously for every posterior,
$$\\mathrm{kl}(\\widehat R(\\rho)\\|R(\\rho))
\\le\\frac{\\operatorname{KL}(\\rho\\|\\pi)+\\log((n+1)/\\delta)}n.$$
No temperature was optimized here, so there is no omitted temperature-selection event. The n plus one constant is elementary and can be conservative; sharper moment constants are not claimed.

For an additive form, binary divergence is at least twice the squared difference of its arguments. With the second argument interior, differentiate twice in the first: the second derivative is one divided by a times one minus a, at least four. Its value and first derivative vanish when the arguments agree, so integrating twice proves the inequality. Endpoints follow by limits. Thus Gibbs risk is at most empirical Gibbs risk plus the square root of the displayed right side divided by two.

### Worked example: one selected member of a finite class

For a uniform prior on M predictors and a posterior concentrated on one selected member, posterior entropy is log M. The additive kl certificate therefore uses log M plus log n plus one over delta, divided by twice n under a square root. The member can be chosen from training because all posteriors were covered on the same event. This is a valid finite-class certificate with an additional logarithmic term from the chosen moment proof; it does not claim to improve the simpler direct finite-class union bound in every case.

## The Gibbs optimizer follows from the same identity

For a fixed positive temperature lambda, minimize posterior empirical risk plus posterior entropy divided by lambda. Define rho lambda proportional to pi times exp of minus lambda times empirical risk. Since losses are bounded, the normalizer lies between exp of minus lambda and one. Expanding entropy relative to this Gibbs distribution gives
$$\\widehat R(\\rho)+\\lambda^{-1}\\operatorname{KL}(\\rho\\|\\pi)
=\\lambda^{-1}\\operatorname{KL}(\\rho\\|\\rho_\\lambda)
-\\lambda^{-1}\\log Z_\\lambda.$$
Nonnegativity proves that rho lambda is the unique minimizing posterior on the prior support. Its data dependence is explicit and legitimate in the proved PAC-Bayes event.

This posterior is a learning-theoretic exponential weighting of a declared loss. It coincides with a Bayesian posterior only when that loss and temperature genuinely correspond to an assumed likelihood and prior model. The notation prior and posterior does not itself provide a generative probability model or prove Bayesian calibration.

### Worked example: mixing risk and complexity

Take two equally weighted prior predictors with empirical risks one tenth and three tenths. A posterior assigning three quarters to the first and one quarter to the second has empirical Gibbs risk three twentieths. Its relative entropy is three quarters log three halves plus one quarter log one half, smaller than the log two complexity of concentrating on the first rule.

The Gibbs posterior has those three-to-one odds when lambda is five log three, since the empirical-risk difference is one fifth. This is an exact algebraic calculation. Whether its larger empirical risk but smaller complexity produces a better population certificate depends on the sample size, temperature and confidence term, not on a blanket preference for mixing.

## Zero empirical Gibbs risk and vote conversion

If empirical Gibbs risk is zero, nonnegativity of losses implies the posterior assigns mass only to members with zero empirical risk. The kl inequality reduces to minus log one minus population Gibbs risk bounded by its complexity allowance B. Therefore risk is at most one minus exp of minus B, and hence at most B. This is a fast consistency-style bound under a posterior whose empirical loss is exactly zero.

### Worked example: a supported consistent posterior

For any posterior over training-consistent binary classifiers, let B be posterior entropy plus log n plus one over delta, divided by n. The theorem gives Gibbs risk at most one minus exp of minus B. If B is small this is at most B, while the generic additive square-root form would be weaker. The posterior may spread across several consistent rules; the entropy term determines the price of that spread under the fixed prior.

For binary predictions, a wrong majority vote implies at least half of the posterior mass predicts wrongly on that observation. Its error indicator is therefore at most twice the posterior error probability. Integrating gives majority-vote risk at most twice Gibbs risk, capped at one. This conversion is a separate inequality; a Gibbs certificate cannot simply be relabelled as the same bound for a deterministic vote.

## Why the prior must be independent of these data

An independent preliminary sample can construct the prior: condition on it, apply the theorem to the new iid sample, then average the conditional failure probability. A prior chosen using the same assessment labels needs another theorem accounting for that choice.

Otherwise one could choose a prior concentrated on an arbitrary training memorizer, use it again as posterior and declare posterior entropy zero. On a large finite input domain with independent fair labels, interpolation can have zero training error while every predictor has population error one half. The purported small zero-entropy certificate would be false because the prior-exponential expectation step used a prior fixed independently of those observations. Independence is the mathematical source of the allocation, not a cosmetic distinction between two probability-vector names.

## Extending change of measure to the nonnegative divergence function

The kl theorem uses a function of hypotheses that need not be bounded over a countable class. The required extension is elementary. If f is nonnegative and its prior exponential average is finite, truncate it at a positive height K. The bounded change-of-measure inequality applies to each truncation, and its exponential normalizer is no larger than the full one.

For finite posterior entropy, monotone convergence lets the posterior expectation of the truncations increase to that of f, while the same finite upper bound holds throughout. This proves the inequality for f itself. Infinite posterior entropy remains a trivial case. The high-probability prior event in the kl proof supplies exactly the finite normalizer needed for this step, so unbounded individual binary divergences have not been inserted into a bounded-function theorem without justification.

## A single posterior draw needs a second probability statement

Suppose a training event of probability at least one minus delta certifies Gibbs risk at most epsilon. Conditional on any sample in that event, Markov's inequality under the posterior bounds its mass on predictors with risk greater than a positive threshold a by epsilon divided by a. Draw one predictor using an independent posterior-sampling seed. The joint probability over training and this draw that its risk exceeds a is at most delta plus epsilon divided by a, capped at one.

This is a valid conversion from averaged risk to a statement about one sampled predictor. It is weaker than saying every supported predictor meets the Gibbs certificate. It also makes the two randomness layers explicit: first the training event, then the selected member. A deterministic choice such as the posterior's most likely member needs a different comparison and cannot be substituted for that independent draw without proof. The fixed prior, simultaneous posterior bound and Gibbs-to-vote comparisons distinguish allocation, learning and prediction. The next chapter, Online Learning, replaces iid population-risk analysis with sequential regret against a stated comparator.

## Exercises

<a id="pac-bayes-ex-1"></a>

### Exercise 1

Prove the entropy change-of-measure inequality.

<details><summary>Hint 1</summary>

Tilt the prior by exp f.

</details>

<details><summary>Hint 2</summary>

Expand posterior entropy relative to that tilted law.

</details>

<details><summary>Full solution</summary>

For $\\pi_f=\\pi e^f/Z$, nonnegative $\\operatorname{KL}(\\rho\\|\\pi_f)$ equals $\\operatorname{KL}(\\rho\\|\\pi)-E_\\rho f+\\log Z$. Rearranging gives the result. Bounded f and finite entropy justify the algebra; infinite entropy yields a trivial bound.

</details>

<a id="pac-bayes-ex-2"></a>

### Exercise 2

Why may the posterior depend on the same sample while the prior may not in the basic theorem?

<details><summary>Hint 1</summary>

The high-probability event controls one fixed prior average.

</details>

<details><summary>Hint 2</summary>

The deterministic entropy inequality then holds for all posterior choices.

</details>

<details><summary>Full solution</summary>

The expectation and Markov step average over a prior independent of the sample. On the resulting event, change of measure is simultaneous over every posterior, including a sample-selected one. A data-selected prior changes the random quantity whose expectation was bounded and needs additional analysis.

</details>

<a id="pac-bayes-ex-3"></a>

### Exercise 3

Explain why post-data temperature minimization is not licensed by a single fixed-temperature event.

<details><summary>Hint 1</summary>

Different temperatures define different exponential events.

</details>

<details><summary>Hint 2</summary>

A grid allocation can cover all permitted choices.

</details>

<details><summary>Full solution</summary>

The theorem controls one lambda fixed before the sample. A random minimizing lambda may select a failing event. Prespecify a finite or countable grid, allocate failure probabilities and union bound before selecting, or use a genuinely temperature-uniform theorem.

</details>

<a id="pac-bayes-ex-4"></a>

### Exercise 4

Derive the n plus one binary moment bound.

<details><summary>Hint 1</summary>

Expand over the n plus one possible success counts.

</details>

<details><summary>Hint 2</summary>

The r factors cancel after multiplication by the exponential divergence.

</details>

<details><summary>Full solution</summary>

Each term becomes $\\binom nk(k/n)^k(1-k/n)^{n-k}$, at most one. There are n plus one terms. Boundary success parameters give a constant sample and expectation one.

</details>

<a id="pac-bayes-ex-5"></a>

### Exercise 5

How does convex comparison extend that moment bound to unit-range losses?

<details><summary>Hint 1</summary>

Hold all but one loss fixed.

</details>

<details><summary>Hint 2</summary>

Bound a convex function on the unit interval by its endpoint chord.

</details>

<details><summary>Full solution</summary>

The exponential divergence of the average is convex in each coordinate. Expected value is at most its endpoint mixture with weights one minus r and r. Independence permits repeating this replacement for all coordinates, leaving the Bernoulli moment already bounded by n plus one.

</details>

<a id="pac-bayes-ex-6"></a>

### Exercise 6

Prove the additive binary-divergence inequality used here.

<details><summary>Hint 1</summary>

Differentiate in its first argument with the second fixed.

</details>

<details><summary>Hint 2</summary>

Its second derivative is at least four.

</details>

<details><summary>Full solution</summary>

Binary divergence and its first derivative vanish at equality, while its second derivative is $1/[a(1-a)]\\ge4$. Integrating the curvature bound on either side gives divergence at least twice squared difference. Endpoint cases follow by continuity or infinite-divergence conventions.

</details>

<a id="pac-bayes-ex-7"></a>

### Exercise 7

Find the Gibbs minimizer of empirical risk plus entropy over lambda.

<details><summary>Hint 1</summary>

Normalize pi times exp minus lambda empirical risk.

</details>

<details><summary>Hint 2</summary>

Use nonnegative entropy relative to the resulting posterior.

</details>

<details><summary>Full solution</summary>

The objective equals entropy relative to that Gibbs distribution divided by lambda minus log normalizer divided by lambda. Its unique minimum occurs when the two posterior distributions agree, since relative entropy vanishes only at equality on the support.

</details>

<a id="pac-bayes-ex-8"></a>

### Exercise 8

Convert the kl certificate when empirical Gibbs risk is zero.

<details><summary>Hint 1</summary>

Binary kl from zero equals minus log one minus risk.

</details>

<details><summary>Hint 2</summary>

Invert the increasing function and use one minus exp minus B at most B.

</details>

<details><summary>Full solution</summary>

If $\\mathrm{kl}(0\\|R)\\le B$, then $-\\log(1-R)\\le B$, so $R\\le1-e^{-B}\\le B$. This uses exactly zero empirical Gibbs risk; an approximately zero value requires the corresponding binary-kl inversion.

</details>

<a id="pac-bayes-ex-9"></a>

### Exercise 9

Prove the majority-vote factor-two conversion.

<details><summary>Hint 1</summary>

At a wrong vote at least half the posterior mass is wrong.

</details>

<details><summary>Hint 2</summary>

Integrate the pointwise comparison.

</details>

<details><summary>Full solution</summary>

The vote error indicator is at most twice Gibbs error probability at each observation, including a wrong tie under the declared tie rule. Taking the population expectation gives the factor two. The Gibbs theorem itself does not give an unchanged deterministic-vote risk bound.

</details>

<a id="pac-bayes-ex-10"></a>

### Exercise 10

Does a bound on Gibbs risk guarantee every posterior-supported predictor is good?

<details><summary>Hint 1</summary>

Averages can hide a small mass of poor predictors.

</details>

<details><summary>Hint 2</summary>

Use a two-member posterior with unequal risks.

</details>

<details><summary>Full solution</summary>

No. A posterior can assign small positive mass to a high-risk rule while maintaining low average risk. Markov’s inequality can bound posterior mass above a chosen risk threshold from the mean, but it does not remove every bad member from support. The theorem concerns the randomized averaged predictor unless another conversion is proved.

</details>
`;export{e as default};