
# Uniform Convergence for a Finite Class

The previous chapter showed that estimation error is controlled by the uniform deviation

$$\sup_{h \in H} |R(h) - \hat{R}_{S}(h)|.$$

This chapter develops the first concrete bound on this quantity for the simplest case: a finite hypothesis class with bounded loss. The proof uses only Hoeffding's inequality and the union bound, yet it illustrates the core pattern of statistical learning theory: pointwise concentration plus a complexity penalty.

## Hoeffding's inequality

Let $Z_{1}, \dots, Z_{n}$ be IID from $P$, and let $\ell(h, Z_{i}) \in [0, 1]$ for a fixed $h$. The empirical risk $\hat{R}_{S}(h)$ is the average of $n$ bounded variables with the common mean $R(h)$. Hoeffding's inequality states that for any $\varepsilon > 0$,

$$\mathbb{P}\bigl(|\hat{R}_{S}(h) - R(h)| > \varepsilon\bigr) \le 2\exp(-2n\varepsilon^{2}).$$

This is a pointwise bound: it holds for one fixed $h$, not for a data-dependent choice. If the algorithm selects $h$ after seeing $S$, Hoeffding does not apply directly.

## The union bound

Suppose $H$ is a finite class with $|H| = M$, fixed independently of the sample used in this bound. We want a bound that holds simultaneously for all $h \in H$. By the union bound,

$$\mathbb{P}\Bigl(\sup_{h \in H} |\hat{R}_{S}(h) - R(h)| > \varepsilon\Bigr) \le \sum_{h \in H} \mathbb{P}\bigl(|\hat{R}_{S}(h) - R(h)| > \varepsilon\bigr) \le 2M \exp(-2n\varepsilon^{2}).$$

Setting the right side to $\delta$ and solving for $\varepsilon$ gives: with probability at least $1 - \delta$,

$$\sup_{h \in H} |\hat{R}_{S}(h) - R(h)| \le \sqrt{\frac{\log(2M/\delta)}{2n}}.$$

This is a **uniform** bound: the event is simultaneous, so it covers the empirical minimizer $\hat{h}$ selected from $H$. The price of simultaneity is the $\log M$ term: each additional hypothesis adds to the complexity penalty.

## Sample calculation

With $M = 500$, $n = 2000$, and $\delta = 0.05$, the deviation bound is

$$\sqrt{\frac{\log(2 \cdot 500 / 0.05)}{2 \cdot 2000}} = \sqrt{\frac{\log(20000)}{4000}} \approx \sqrt{\frac{9.9035}{4000}} \approx 0.0498.$$

This is a worst-case certificate for bounded loss, not an estimate of the actual gap. The actual uniform deviation may be much smaller, but the bound holds for any data distribution and any finite class of size $500$.

## Finite-class sample complexity

To guarantee that the uniform deviation is at most $\varepsilon$ with confidence $1 - \delta$, we require

$$\sqrt{\frac{\log(2M/\delta)}{2n}} \le \varepsilon.$$

Solving for $n$ gives

$$n \ge \frac{\log(2M/\delta)}{2\varepsilon^{2}}.$$

Round up to an integer. This is the **sample complexity**: the number of examples sufficient to achieve a given accuracy and confidence. The dependence on $M$ is logarithmic, which is favorable: doubling the class size adds only $\log 2/(2\varepsilon^2)$ to this sufficient sample-size bound.

## What the bound does not cover

The bound does not cover a class redesigned after inspecting the same assessment data. A union bound with $M$ applies when the $M$ candidates are fixed independently of that assessment sample, even if another training sample produced them. For adaptive validation queries, merely counting the candidates finally reported is insufficient; the full prespecified search must be covered or the adaptive reuse controlled by a valid assessment protocol.

The bound also requires bounded loss. For unbounded losses such as squared error without tail control, Hoeffding does not apply. Alternative tools such as Bernstein's inequality or sub-Gaussian assumptions are needed.

## Common errors

- **Applying a fixed-hypothesis bound after model selection.** Hoeffding applies to one $h$. After selecting the best $h$ from $M$ candidates, the uniform bound is required.
- **Ignoring the effective class size.** A grid search over $10^{4}$ hyperparameter combinations has effective $M = 10^{4}$ for the purpose of the union bound.
- **Using bounded-loss results for unbounded loss.** Squared error on unbounded data requires additional assumptions.

## Worked example: discrete threshold rules

Let $X = [0, 1]$ and $Y = \{0, 1\}$. Consider the class of threshold rules $H = \{h_{a} : a \in \mathcal{A}\}$ where $h_{a}(x) = \mathbf{1}[x \ge a]$ and $\mathcal{A} = \{0.1, 0.2, \dots, 0.9\}$. Here $M = 9$. With $n = 100$ and $\delta = 0.05$,

$$\varepsilon = \sqrt{\frac{\log(2 \cdot 9 / 0.05)}{200}} = \sqrt{\frac{\log(360)}{200}} \approx \sqrt{\frac{5.886}{200}} \approx 0.171.$$

With $n = 1000$,

$$\varepsilon = \sqrt{\frac{5.886}{2000}} \approx 0.054.$$

The bound tightens as $1/\sqrt{n}$, and the small $M$ keeps the complexity penalty modest.

## Deriving the bounded-variable exponential inequality

We prove the concentration input rather than quoting it without a derivation. Let V be any random variable between zero and one, and define the logarithm of its moment-generating function. Boundedness permits differentiating under expectation for every finite real tilt. The second derivative of the log moment-generating function is the variance of V under the exponentially tilted probability law. Every such law still has support in the unit interval. Subtracting the midpoint gives variance at most one quarter, since variance is no larger than the mean square about any chosen constant.

For the centered variable, the log moment-generating function and its first derivative vanish at zero. Integrate the second-derivative bound twice to obtain
$$E e^{\lambda(V-EV)}\le e^{\lambda^2/8}.$$
For independent bounded variables, the moment-generating function of their sum factors. Exponential Markov inequality therefore bounds the upper-tail probability of the empirical mean by the exponential of minus lambda times n epsilon plus n lambda squared divided by eight. Minimizing over positive lambda gives lambda equal to four epsilon and the upper bound exp of minus twice n epsilon squared. Applying the same proof to the negatives gives the lower tail. Adding the two probabilities proves the two-sided inequality used above. Identical distributions enter only to identify the average expectation with one common population risk; independence and boundedness supply the exponential calculation.

For a finite fixed class, no independence between the different predictors' losses is required. Apply the one-predictor bound separately and add event probabilities. Shared observations can make those events strongly dependent, but the union bound holds for arbitrary events. This observation is useful when candidates are nearly identical: dependence does not invalidate the certificate, although the crude count may overstate their effective complexity.

## The selected predictor and an approximate optimizer

On the uniform event, the comparison is deterministic. If the selected empirical risk is within eta of the smallest empirical risk, compare it with any candidate h. Replace selected population risk by its empirical risk plus epsilon, use the approximate-minimum property, and replace the comparator empirical risk by its population risk plus epsilon. Thus
$$R(\widehat h)\le\min_{h\in H}R(h)+2\varepsilon+\eta.$$
A finite nonempty class always has an empirical and a population minimizer; ties are resolved by a fixed enumeration. Eta records an actual objective guarantee, not merely the fact that the algorithm stopped. Nonnegative eta can be random if its bound is valid for the realized optimization output on the event being considered.

This proof explains why doubling the deviation is necessary in the general comparison argument. One fluctuation concerns the chosen predictor and the other concerns its population comparator. A single fixed candidate's confidence radius does not automatically bound the selected candidate's excess risk by that same radius. The result concerns risk relative to the best member of the supplied class, not relative to an unrestricted Bayes decision rule.

### Worked example: selection on an independent assessment sample

Suppose training produces thirty candidate classifiers before any independent assessment labels are inspected. Conditional on training, the list is fixed. With one thousand independent assessment observations and failure budget one twentieth, the common risk radius is the square root of log twelve hundred divided by two thousand. It is about six hundredths. Selecting the candidate with the lowest assessment error gives conditional population excess over the best of the thirty bounded by twice that radius.

The statement remains true after averaging over training because its conditional failure probability is bounded for every trained list. It does not justify designing a thirty-first candidate after observing which assessment examples were difficult and counting only the final thirty-one. The conditioning argument requires the candidate list to be independent of the sample to which the concentration bound is applied.

## Countable classes with a declared complexity allocation

A finite count is not the only way to allocate a failure budget. Let H be countable and choose positive deterministic weights pi h whose sum is at most one. Allocate failure probability delta times pi h to candidate h. The one-predictor inequality and a countable union bound give, simultaneously,
$$|R(h)-\widehat R(h)|
\le\sqrt{\frac{\log(2/(\delta\pi_h))}{2n}}
\quad\hbox{for every }h.$$
Countability makes the union and all comparisons measurable. The allocation must be fixed independently of the data used in the bound, or be produced by an independent training sample and conditioned on as above.

This result suggests a penalized rule: minimize empirical risk plus its candidate-specific radius, or get within eta of that infimum. The upper bound for its selected population risk is then at most the infimum over candidates of population risk plus twice their own radius, plus eta. To verify it, use the simultaneous upper bound for the chosen rule, its approximate penalized minimization, and the simultaneous lower bound for each comparator's empirical risk. Existence of an exact minimum in a countable class is not automatic; an approximate choice avoids claiming it. This is a weighted union-bound argument, distinct from the posterior-distribution PAC-Bayes theorem commissioned later in the book.

## Fixed budgets and a valid all-time alternative

The fixed-n theorem does not on its own justify inspecting assessment results repeatedly and stopping at the first favorable interval. A simple conservative repair allocates a separate failure probability to every positive sample size: delta divided by n times n plus one. These probabilities sum to delta by telescoping. Apply the finite-class theorem at each n to the first n observations, then union bound over n. Independence between the events at different times is unnecessary.

The resulting radius is
$$\varepsilon_n=\sqrt{\frac{\log\{2M n(n+1)/\delta\}}{2n}}.$$
With probability at least one minus delta, it bounds every candidate's deviation at every positive time. Consequently it remains valid at any data-dependent finite stopping time for that same fixed candidate class and iid stream. The price is an additional logarithmic time allowance. This construction proves one legitimate sequential statement; it does not assert that the fixed-time radius can be reused unchanged. A class redesigned during the stream would require yet another simultaneous specification.

## Bounded distribution weights change the concentration scale

Suppose observations come iid from Q while the target risk is under P, and a known density ratio w of P relative to Q exists with values between zero and a finite W. For a loss between zero and one, the weighted loss lies between zero and W and its Q expectation equals the P risk by change of measure. Rescaling the bounded-variable proof therefore gives a uniform radius W times the original finite-class radius. An empirical minimizer of this weighted risk has the corresponding twice-radius comparison.

This theorem requires a ratio for the actual joint observation law and target support contained in the observed support. A covariate-only ratio needs additional conditional-law assumptions before it represents that joint change of measure. Estimating weights from the same data, clipping them, or self-normalizing by their empirical sum changes the calculation and needs an additional error argument. Large but bounded weights make the stated worst-case certificate weaker, reflecting that rare observed regions can matter greatly to the target.

### Worked example: interpolation under a rich fixed class

Take a finite input set of K equally likely values and let the label be an independent fair bit. Let H contain every binary labeling of those K inputs. Every fixed or trained classifier has population error one half, since a fresh label is independent of its input and of training. If the n training inputs are distinct, however, one class member can match all their labels and achieve zero empirical error. A collision union bound gives probability of any duplicate at most n times n minus one divided by twice K.

When K is much larger than n squared, interpolation therefore occurs with high probability despite population error one half. There is no contradiction with the finite-class certificate: this class has size two to the power K, so its complexity term can make the bound vacuous. The example shows exactly why a pointwise law of large numbers for every fixed classifier does not cover arbitrary selected interpolators uniformly over a rapidly growing family.

## Practice exercises

<a id="uniform-convergence-finite-class-legacy-1"></a>

### Exercise 1

Solve the finite-class bound for $n$ sufficient to make the deviation at most $\varepsilon = 0.1$ with confidence $1 - \delta = 0.95$, given $M = 100$.

<details><summary>Hint 1</summary>

Isolate n after squaring the deviation threshold.

</details>

<details><summary>Hint 2</summary>

Use the natural logarithm and round upward.

</details>

<details><summary>Full solution</summary>

We need $n \ge \log(2M/\delta) / (2\varepsilon^{2}) = \log(200/0.05) / (2 \cdot 0.01) = \log(4000) / 0.02 \approx 8.294 / 0.02 \approx 415$. So $n = 415$ suffices.

</details>

<a id="uniform-convergence-finite-class-legacy-2"></a>

### Exercise 2

A researcher evaluates $M = 50$ classifiers, fixed independently of an IID assessment set, and reports the best assessment accuracy. Explain why a pointwise confidence interval for the selected classifier is invalid, and give a simultaneous bound.

<details><summary>Hint 1</summary>

The winning index depends on the assessment outcomes.

</details>

<details><summary>Hint 2</summary>

Cover all fifty fixed candidates in one event.

</details>

<details><summary>Full solution</summary>

A pointwise interval covers one classifier fixed before seeing the assessment outcomes. Selecting the best of $50$ uses those outcomes and creates a multiple-comparisons problem. Because the candidate list was fixed independently, the finite-class union bound applies: with probability at least $1-\delta$, every classifier's assessment accuracy is within $\sqrt{\log(2M/\delta)/(2n)}$ of its population accuracy. This statement would need a different argument if the candidates themselves were adaptively redesigned from the assessment set.

</details>

<a id="uniform-convergence-finite-class-legacy-3"></a>

### Exercise 3

Show that for $M = 2$, the uniform bound is at most a factor of $\sqrt{\log(4/\delta) / \log(2/\delta)}$ worse than the pointwise Hoeffding bound for one hypothesis.

<details><summary>Hint 1</summary>

Divide the two displayed deviation radii.

</details>

<details><summary>Hint 2</summary>

The common factor one over square root of twice n cancels.

</details>

<details><summary>Full solution</summary>

The pointwise bound is $\sqrt{\log(2/\delta)/(2n)}$. The uniform bound is $\sqrt{\log(4/\delta)/(2n)}$. The ratio is

$$\sqrt{\frac{\log(4/\delta)}{\log(2/\delta)}} = \sqrt{1 + \frac{\log 2}{\log(2/\delta)}}.$$

For $\delta = 0.05$, $\log(2/\delta)=\log 40\approx3.689$, so the ratio is $\sqrt{1 + 0.693/3.689}\approx1.090$. The price of covering two hypotheses is small.

</details>

<a id="uniform-convergence-finite-class-ex-4"></a>

### Exercise 4

Derive the finite-class excess-risk certificate for an empirical optimizer with objective gap at most eta.

<details><summary>Hint 1</summary>

Use the same uniform event for the output and comparator.

</details>

<details><summary>Hint 2</summary>

Two risk-to-empirical replacements contribute two radii.

</details>

<details><summary>Full solution</summary>

With $\varepsilon=\sqrt{\log(2M/\delta)/(2n)}$, the simultaneous event gives $R(\widehat h)\le\widehat R(\widehat h)+\varepsilon\le\widehat R(h^*)+\eta+\varepsilon\le R(h^*)+\eta+2\varepsilon$. Thus the excess bound is twice the deviation radius plus eta, with probability at least one minus delta.

</details>

<a id="uniform-convergence-finite-class-ex-5"></a>

### Exercise 5

Can correlation between the losses of two candidate classifiers invalidate the union bound?

<details><summary>Hint 1</summary>

The concentration theorem concerns observations for each fixed classifier.

</details>

<details><summary>Hint 2</summary>

The union bound never assumes independence between events.

</details>

<details><summary>Full solution</summary>

No. Each candidate must satisfy its own bounded iid-loss concentration statement. The probability that any of these deviation events occurs is at most the sum of their probabilities, regardless of their mutual dependence. Identical candidates merely make the count conservative; dependence between observations within a candidate is a different issue and can invalidate the Hoeffding input.

</details>

<a id="uniform-convergence-finite-class-ex-6"></a>

### Exercise 6

Prove the weighted countable-class simultaneous bound.

<details><summary>Hint 1</summary>

Allocate delta times pi h to each candidate.

</details>

<details><summary>Hint 2</summary>

Add the countably many failure probabilities.

</details>

<details><summary>Full solution</summary>

For candidate h, setting its radius to $\sqrt{\log(2/(\delta\pi_h))/(2n)}$ makes its two-sided failure probability at most $\delta\pi_h$. Countable subadditivity makes the probability of at least one failure at most $\delta\sum_h\pi_h\le\delta$. Measurability and a prespecified allocation are part of the argument.

</details>

<a id="uniform-convergence-finite-class-ex-7"></a>

### Exercise 7

A loss takes value one thousand with probability one thousandth and zero otherwise. Why can the unit-range Hoeffding expression be false for it?

<details><summary>Hint 1</summary>

Its expectation is one but its range is not one.

</details>

<details><summary>Hint 2</summary>

With one hundred draws, no rare value appears with large probability.

</details>

<details><summary>Full solution</summary>

The probability that all one hundred losses are zero is $(999/1000)^{100}$, exceeding nine tenths by Bernoulli’s inequality. On that event the empirical-to-population gap is one. A unit-range bound for a gap exceeding one half would give $2e^{-50}$, incompatible with that probability. The loss is bounded by one thousand, so a correctly rescaled bound has a very different scale.

</details>

<a id="uniform-convergence-finite-class-ex-8"></a>

### Exercise 8

Prove that the all-time radius remains valid after any finite data-dependent stopping time.

<details><summary>Hint 1</summary>

First construct one event covering all deterministic positive times.

</details>

<details><summary>Hint 2</summary>

A random time selects a member of that already covered set.

</details>

<details><summary>Full solution</summary>

The failure budget $\delta/[n(n+1)]$ sums to delta, so a union bound gives simultaneous validity over all candidates and times. On that single event, substituting any finite random time preserves every inequality. This proof does not apply to the smaller fixed-time radius because no all-time event was established for it.

</details>

<a id="uniform-convergence-finite-class-ex-9"></a>

### Exercise 9

If candidates come from an independent training sample and their count is random but finite, can the radius use their realized count?

<details><summary>Hint 1</summary>

Condition on the training sample.

</details>

<details><summary>Hint 2</summary>

Conditional on it, the list and its count are fixed.

</details>

<details><summary>Full solution</summary>

Yes, provided the assessment sample is independent and the list is measurably defined and nonempty. Conditional on training, apply the finite-class theorem with its realized count and the same delta. The conditional failure bound is delta for every list, and integration gives the unconditional bound. It fails if assessment outcomes helped create the list without an additional argument.

</details>

<a id="uniform-convergence-finite-class-ex-10"></a>

### Exercise 10

Explain why truncating a vacuous risk bound to one is valid but does not create a useful comparison.

<details><summary>Hint 1</summary>

Bounded losses force every risk into the unit interval.

</details>

<details><summary>Hint 2</summary>

An upper bound already as large as the full possible range excludes nothing.

</details>

<details><summary>Full solution</summary>

For loss between zero and one, within-class excess risk is at most one, so taking the minimum of one and the derived upper bound preserves validity. If the result equals one, every possible excess remains allowed. The theorem is still correct, but it supplies no nontrivial performance guarantee for that class and sample size.

</details>

## Looking backward and forward

This chapter gave the first concrete bound on estimation error, building on the decomposition from "Approximation, Estimation, and Optimization." The next chapter, "VC Dimension," extends the uniform convergence idea to infinite classes by replacing the literal count $M$ with a data-dependent complexity measure: the number of label patterns the class can realize.
