var e=`---
id: deep-dive-bayesian-models-prediction-criticism
title: "From a Bayesian model to a prediction"
license: CC BY-SA 4.0
---

# From a Bayesian model to a prediction

A posterior distribution answers a question inside a probability model. The model
also specifies what could have been observed, how observations depend on unknown
quantities, and which observations are recorded. A useful Bayesian analysis
therefore begins before a posterior calculation and continues after it. This
article follows one small example through specification, updating, prediction and
criticism. It is an **L3** orientation; integration and conditional probability are
assumed. The [Bayesian inference course](/courses/bayesian-inference/) supplies the
main learning sequence. The [Bayesian Modelling and Criticism book](/books/library-book-computational-bayesian-modeling/)
develops the longer modelling arguments.

## Specify an observable experiment

Suppose ten trials are planned and each produces a recorded success or failure.
Write $Y_i=1$ for success. Our model assumes that, conditional on a common unknown
probability $\\theta$, the ten variables are independent Bernoulli variables. It
also assumes that every planned trial is recorded and that the success criterion
is the same throughout. These are mathematical assumptions about the observation
process. They would need reconsideration if failed trials went missing or if
conditions changed halfway through.

Give $\\theta$ the uniform density on $(0,1)$, also called a Beta$(1,1)$ prior.
For an ordered observation with $k$ successes in $n$ trials the likelihood is
$\\theta^k(1-\\theta)^{n-k}$. If only the success count is recorded, the likelihood
has an additional binomial coefficient. That coefficient does not depend on
$\\theta$, so these two data records give the same posterior for this model.
They retain different information for checking other models: the ordered record
can reveal clustering that the count alone cannot describe.

The prior predictive distribution describes possible observations before seeing
the ten outcomes. It integrates the binomial sampling distribution over the prior.
This offers a concrete way to inspect a prior: consider the counts or patterns it
predicts, with the actual units and recording rules of the experiment. A prior
that looks diffuse on a parameter scale can still have strong observable effects.

## Worked example: eight successes and two failures

For $n=10$ and $k=8$, Bayes' rule gives a posterior density proportional to
$\\theta^8(1-\\theta)^2$. It is Beta$(9,3)$. For positive $a,b$, define

$$B(a,b)=\\int_0^1 t^{a-1}(1-t)^{b-1}\\,dt.$$

Its elementary recurrence gives
$B(a+1,b)/B(a,b)=a/(a+b)$. Applying the recurrence twice shows that a
Beta$(a,b)$ variable has first moment $a/(a+b)$ and second moment
$a(a+1)/((a+b)(a+b+1))$. Thus our posterior mean is $3/4$, while its variance is
$3/208$. Uncertainty about the common probability remains after the update.

Let $Z_1,Z_2$ describe two additional trials under the same conditions. Conditional
on $\\theta$ they are independent. After integrating out $\\theta$, however,

$$\\Pr(Z_1=Z_2=1\\mid Y)=E(\\theta^2\\mid Y)=\\frac{9\\cdot10}{12\\cdot13}
=\\frac{15}{26}.$$

Multiplying two posterior predictive success probabilities would instead give
$9/16$. Those numbers differ because both future observations share the same
uncertain probability. The predictive covariance is exactly
$E(\\theta^2\\mid Y)-E(\\theta\\mid Y)^2=\\operatorname{Var}(\\theta\\mid Y)$.
Conditional independence has not become marginal independence.

For four additional trials let $K=Z_1+\\cdots+Z_4$. Its predictive mean is three.
The law of total variance gives

$$\\operatorname{Var}(K\\mid Y)=E[4\\theta(1-\\theta)\\mid Y]
+\\operatorname{Var}(4\\theta\\mid Y)=\\frac{12}{13}.$$

A binomial distribution with probability fixed at $3/4$ has variance $3/4$.
Replacing a posterior by its mean therefore changes the prediction even when it
preserves the predictive mean. The additional variation has a specified source:
uncertainty shared across the future trials.

## Criticise an observable implication

A posterior predictive comparison generates replicated observations from the
fitted model and compares an explicitly chosen feature with the observed one.
Here a feature might be the success count, the longest run, or the difference
between the first and second halves. These answer different questions. A total
count cannot expose an ordering pattern that it discards.

Such a comparison is conditional on the observation mechanism and the model.
An unusual feature can suggest a missing dependence, changing conditions or a
recording problem; it does not identify one explanation uniquely. Conversely,
agreement for one selected feature does not establish every model assumption.
Because the observed data helped form the posterior, posterior predictive tail
areas should not automatically be treated as uniformly distributed classical
significance values. Calibration requires a separately stated experiment.

Computation adds another distinction. A reliable numerical approximation to the
wrong likelihood remains an approximation to that likelihood. Simulation
diagnostics address computation; observation-law criticism addresses the model.
The primary book separates these questions in its chapters on
[generative observation laws](/books/computational-bayesian-modeling/generative-stories-observation-laws/),
[conjugate prediction](/books/computational-bayesian-modeling/conjugate-predictive-calibration/)
and [predictive discrepancies](/books/computational-bayesian-modeling/predictive-experiments-discrepancies/).

## Exercises

### Exercise 1
<a id="deep-dive-bayesian-models-prediction-criticism-ex-1"></a>
Start with a Beta$(2,2)$ prior and observe three successes in four completely
recorded trials. Find the posterior and the probabilities of one future success
and of two future successes. Explain why the latter is not the square of the former.

<details><summary>Hint 1</summary>
Multiply the prior density by the likelihood and collect the powers of the
probability and its complement.
</details>
<details><summary>Hint 2</summary>
Use the first and second Beta moments. Future conditional independence asks you
to integrate the square of the parameter.
</details>
<details><summary>Full solution</summary>
The prior contributes powers one and one; the likelihood contributes three and
one. Their product has powers four and two, so the posterior is Beta$(5,3)$.
One future success has probability $5/8$. Two future successes have probability
$5\\cdot6/(8\\cdot9)=5/12$. The square of $5/8$ is $25/64$; the difference is
$5/192$, the positive posterior variance of the common success probability.
</details>

### Exercise 2
<a id="deep-dive-bayesian-models-prediction-criticism-ex-2"></a>
Compare the eight-outcome sequences SSSSFFFF and SFSFSFSF under the uniform-prior
model. Show that they give the same posterior. Let $T$ count adjacent equal
pairs in a future eight-outcome sequence. Find its posterior predictive mean
and explain what the two observed values of $T$ can contribute to criticism.

<details><summary>Hint 1</summary>
Both sequences have four successes. For any adjacent future pair, condition on
the common probability before asking whether both outcomes agree.
</details>
<details><summary>Hint 2</summary>
There are seven adjacent pairs. Their individual agreement probability is the
posterior expectation of $\\theta^2+(1-\\theta)^2$. Linearity of expectation does
not require the seven indicators to be independent.
</details>
<details><summary>Full solution</summary>
Each likelihood is $\\theta^4(1-\\theta)^4$, giving Beta$(5,5)$. Symmetry and the
second moment give an agreement probability of $2(5\\cdot6/(10\\cdot11))=6/11$.
Therefore $E(T\\mid Y)=42/11$. The observed values are six and zero respectively.
These different patterns suggest different comparisons despite an identical
posterior for the common probability. A predictive distribution or another
specified reference experiment is still needed to quantify unusualness; a
distance from the mean alone is not a tail probability or a model diagnosis.
</details>

## Continue

Record the experiment, posterior target, future quantity and checking feature as
four separate choices. Continue with the primary Bayesian course, or use the
longer modelling book for hierarchical observations, sensitivity and decisions.
`;export{e as default};