var e=`---
parent_id: book-probability-theory-measure-martingales
chapter_id: strong-laws-etemadi
title: "Strong Laws Beyond Mutual Independence"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Strong Laws Beyond Mutual Independence

A strong law requires a pathwise average limit, but full mutual independence and a finite variance are not the only route. This chapter proves Etemadi's strong law for pairwise independent identically distributed integrable variables, then gives an independent nonidentical variance criterion. Their assumptions differ and should not be combined into an unproved hybrid.

Use the preceding three-series and maximal-inequality results, tail-integral formulas and elementary summation by parts. Pairwise independence means every pair has a product law; it does not imply product structure for arbitrary finite collections. Identical distribution means a common one-coordinate law, even when the joint family is not mutually independent.

## Etemadi's strong law

Let X n be pairwise independent and identically distributed real variables with finite expected absolute value. Then
$$\\frac1n\\sum_{j=1}^nX_j\\longrightarrow EX_1\\qquad\\hbox{almost surely}.$$
We prove it without a maximal inequality requiring independence of an entire past block from an entire future block. Pairwise independence will supply variance addition after truncation; nonnegative partial sums will handle the gaps between selected indices.

First assume all variables are nonnegative. Define Y n as X n truncated to zero above n. Tail-integral comparison gives a finite sum of probabilities that X n exceeds n, because all marginal laws agree and the common mean is finite. First Borel-Cantelli makes X n and Y n differ only finitely often almost surely. Their average difference therefore tends to zero.

Write T n as the sum of Y j through n. Truncated variables remain pairwise independent, so their covariances vanish and
$$\\operatorname{Var}(T_n)
\\le\\sum_{j\\le n}E[X_1^2{\\bf1}_{\\{X_1\\le j\\}}]
\\le n E[X_1^2{\\bf1}_{\\{X_1\\le n\\}}].$$
Each truncated second moment is finite even if the untruncated second moment is infinite. This is why the proof can use Chebyshev without adding a hidden finite-variance assumption.

## Summable errors on a geometric subsequence

Fix alpha strictly above one and choose n k as the ceiling of alpha to the k. The preceding variance bound gives
$$\\sum_k\\frac{\\operatorname{Var}(T_{n_k})}{n_k^2}
\\le E\\left[X_1^2\\sum_{k:n_k\\ge X_1}\\frac1{n_k}\\right].$$
The expectation interchange is Tonelli. For a scalar x at least two, the eligible k have alpha to the k at least x minus one. Summing the geometric reciprocal series bounds their reciprocals by a constant depending only on alpha divided by x. For x below two, the full reciprocal sum is finite and x squared is at most twice x. Thus the integrand is bounded by another alpha-dependent constant times X one, with finite expectation.

Chebyshev and first Borel-Cantelli now give
$$(T_{n_k}-ET_{n_k})/n_k\\longrightarrow0
\\quad\\hbox{almost surely}.$$
The means E Y j increase to E X one by monotone convergence of the common marginal truncations. Their Cesaro averages tend to that same mean, so T n k divided by n k tends to it almost surely.

The geometric reciprocal estimate, rather than merely a bound on each variance separately, is the summability step. Replacing it by an unsupported claim that inverse sample sizes sum over every integer would lose the proof.

## Squeezing fills the gaps

Because the Y variables are nonnegative, T n is increasing. Between successive geometric indices,
$$\\frac{T_{n_k}}{n_{k+1}}\\le\\frac{T_n}{n}
\\le\\frac{T_{n_{k+1}}}{n_k}.$$
Their ratio tends to alpha. The lower and upper limits of the full average therefore lie between the common mean divided by alpha and alpha times that mean.

Repeat this argument for a countable sequence of alpha values decreasing to one, and intersect their full-probability events. The squeeze gives the full T n over n limit equal to the common mean. Finite truncation differences transfer it to the original X average.

For a signed integrable variable, apply the nonnegative argument separately to its positive and negative parts. Each transformed family is still pairwise independent and identically distributed, and both means are finite. Subtract on the intersection of two full-probability events. This finishes the full Etemadi proof.

### Worked example: infinitely many pairwise independent bits

Construct independent fair bits indexed by positive integers. For every finite nonempty index subset A, form their exclusive-or over A and enumerate these countably many resulting bits in any fixed order. Any two distinct nonzero subset-indicator vectors are linearly independent over the two-element field, so the corresponding two outputs are uniform over four pairs. The enumerated variables are pairwise independent and identically fair.

They are not mutually independent: the bit for the symmetric difference of two distinct subsets is the exclusive-or of their two bits. Yet Etemadi's theorem applies and their arithmetic average tends almost surely to one half. The example shows a genuine gain over an iid theorem requiring full mutual independence, without pretending that arbitrary dependent averages obey the same law.

## Kronecker's lemma by summation by parts

Suppose b n is positive, increasing and tends to infinity, and the numerical series of a n divided by b n converges. Let s n denote its partial sums. Summation by parts gives
$$\\frac1{b_n}\\sum_{j=1}^na_j
=s_n-\\frac1{b_n}\\sum_{j=1}^{n-1}(b_{j+1}-b_j)s_j.$$
The weighted average on the right tends to the limit of s n: its nonnegative weights have total approaching one, every fixed initial portion has weight tending to zero and the remaining s values are uniformly close to their limit. Hence the displayed difference tends to zero. This proves Kronecker's lemma.

No probability is involved in the lemma. Applied separately on each convergent sample path, it converts almost-sure convergence of a weighted random series into an average limit. The monotone unbounded denominator is a real hypothesis ensuring the weight argument; arbitrary oscillating denominators are not covered.

## An independent nonidentical strong law

Let independent real X n have finite variances and suppose
$$\\sum_n\\frac{\\operatorname{Var}(X_n)}{n^2}<\\infty.$$
The centred variables divided by n have summable variances, so their series converges almost surely by the preceding chapter's independent convergence criterion. Kronecker with b n equal to n gives
$$\\frac1n\\sum_{j=1}^n(X_j-EX_j)\\longrightarrow0
\\quad\\hbox{almost surely}.$$
If the numerical means have a Cesaro limit mu, the uncentred average tends to mu. Without that additional drift limit, the theorem states only the centred conclusion.

Here mutual independence is used by the series convergence criterion. The earlier Etemadi theorem weakened it to pairwise independence by using identical marginals and a different truncation argument. The present proof does not establish the same variance-series theorem for every pairwise independent nonidentical family.

### Worked example: changing Bernoulli probabilities

Let independent Bernoulli variables have probabilities p n with an average converging to p. Each variance is at most one quarter, so the variance series divided by n squared converges. Their observed success average therefore tends almost surely to p.

For alternating probabilities one fifth and four fifths, the limit is one half. The observations are independent but not identically distributed. If instead their deterministic probability averages had no limit, centring would still give the proved zero limit, but no common uncentred average limit would follow. The drift condition is separate from control of random fluctuations.

## Integrability is necessary for a finite common-law strong limit

For pairwise independent events whose probability sum diverges, infinitely many occur almost surely. A direct proof uses their count in a finite tail block: its variance is at most its diverging mean by pairwise covariance cancellation. Chebyshev bounds the probability that the count is zero by the reciprocal mean. Let the ending index grow, then take a countable union over starting indices. No occurrence after any fixed start has probability zero.

Now suppose pairwise independent identically distributed variables have an arithmetic average converging almost surely to a finite constant. The individual term divided by n is the difference between the current average and the previous average multiplied by n minus one over n, so it tends to zero almost surely. Therefore absolute X n exceeds n only finitely often almost surely.

Pairwise Borel-Cantelli forces the sum of those probabilities to be finite. Identical distributions turn it into the sum of common-tail probabilities above n. Tail integration then implies a finite absolute first moment. Thus in this common-law setting integrability is not merely a convenient sufficient condition for a finite strong limit; it is necessary.

The argument needs almost-sure, not merely probability convergence of X n over n. Many nonintegrable laws have one-coordinate scaled values tending to zero in probability, so that weaker conclusion would not force the summability step.

### Worked example: finite mean without finite variance

Take independent identically distributed positive Pareto variables with exponent between one and two. Their mean is finite and variance infinite. Etemadi gives convergence of their average to the finite mean. The nonidentical finite-variance criterion cannot be invoked because its variance terms are not finite.

This does not prove a square-root-n normal approximation or a conventional variance-based standard error. A strong law describes convergence of averages; it supplies no rate by itself. The later central-limit chapter states its own variance and tail conditions.

## Nonnegative infinite mean gives an extended strong limit

Let nonnegative pairwise independent identically distributed variables have infinite mean. For each positive integer K, clip them above at K rather than zeroing the tail. The clipped family is bounded, pairwise independent and identically distributed, so its average converges almost surely to its finite clipped mean.

Intersect the full-probability events over integer K. The original average is at least every clipped average, so its lower limit is at least every clipped mean. Those means increase to infinity by monotone convergence. Thus the original average tends to infinity almost surely. This is an extended-limit result for nonnegative variables, not a prescription for cancelling two infinite signed means.

Together the proofs identify three different routes: pairwise common-law integrability, independent nonidentical summable scaled variance and a nonnegative infinite-mean extension. Their hypotheses determine what kind of average limit exists and which further limit theorems may reasonably be attempted.

## Consequences for random indices and retained fractions

An almost-sure average limit remains true along random indices tending to infinity almost surely, even if the indices depend on the observations. On the intersection of the event where the full numerical average converges and the event where the indices diverge, evaluating that convergent path along any such indices preserves its limit. No independence between index and observations is needed for this pathwise consequence.

This does not prove unbiasedness at a finite random stopping time, an expected-error rate or a confidence interval. Those are different assertions involving distributions or integrals of the selected average. The strong law supplies only the limiting path statement under index divergence. A stopping rule with a positive probability of staying finite does not meet that condition.

There is also a useful deterministic trimming result. If the full average converges to mu and the number m n of discarded initial terms has ratio tending to theta strictly below one, the retained average converges to mu. Write it as
$$\\frac{S_n-S_{m_n}}{n-m_n}
=\\frac n{n-m_n}\\frac{S_n}{n}
-\\frac{m_n}{n-m_n}\\frac{S_{m_n}}{m_n}.$$
When m n tends to infinity, both average factors converge and the coefficient limits cancel to give mu. If m n remains bounded along a subsequence, its discarded sum divided by n tends to zero, giving the same result there. Splitting these cases proves the conclusion without dividing by a zero discarded count.

Retaining a vanishing fraction is not covered by those bounded coefficients. Keeping only the last observation from an iid nondegenerate Bernoulli sequence gives a window average whose distribution never concentrates at its mean. The full sample average still obeys the strong law. Thus a large final time and a large number of genuinely averaged observations are different resources.

These consequences are often useful in simulation interpretation, but they do not establish stationarity or independence for a dependent chain. A chain must first satisfy its own ergodic average theorem. The algebra then applies to that proved pathwise limit, rather than making a dependent sequence iid by discarding an initial segment.

## Exercises

<a id="strong-laws-etemadi-ex-1"></a>

### Exercise 1

Why does the nonnegative truncation affect only finitely many variables almost surely?

<details><summary>Hint 1</summary>

Use the common tail and finite mean.

</details>

<details><summary>Hint 2</summary>

Compare the tail-probability sum with its integral.

</details>

<details><summary>Full solution</summary>

Finite mean makes the sum of probabilities X n exceeding n finite. First Borel-Cantelli then gives only finitely many differences from the truncated variables. Their finite total difference divided by n tends to zero.

</details>

<a id="strong-laws-etemadi-ex-2"></a>

### Exercise 2

Where does pairwise independence suffice in Etemadi’s proof?

<details><summary>Hint 1</summary>

Inspect the variance of a truncated sum.

</details>

<details><summary>Hint 2</summary>

Covariances are pairwise quantities.

</details>

<details><summary>Full solution</summary>

It makes distinct truncated variables uncorrelated, so variances add. The rest of the proof uses Chebyshev, first Borel-Cantelli and monotonic nonnegative sums, avoiding the full-block independence needed by the earlier maximal inequality.

</details>

<a id="strong-laws-etemadi-ex-3"></a>

### Exercise 3

Explain why the geometric reciprocal sum is integrable after multiplication by X squared.

<details><summary>Hint 1</summary>

For large x its reciprocal tail is at most a constant over x.

</details>

<details><summary>Hint 2</summary>

Small x uses a finite full geometric sum.

</details>

<details><summary>Full solution</summary>

Multiplying the large-x bound by x squared leaves a constant times x. Below a fixed threshold, x squared is also bounded by a constant times x. The common finite first moment therefore bounds the expectation, even when the untruncated second moment is infinite.

</details>

<a id="strong-laws-etemadi-ex-4"></a>

### Exercise 4

Why is a countable sequence of alpha values used in the squeeze?

<details><summary>Hint 1</summary>

Each alpha gives its own full-probability event.

</details>

<details><summary>Hint 2</summary>

Countable intersections preserve probability one.

</details>

<details><summary>Full solution</summary>

Choose alpha values tending down to one, impose all their subsequence limits on one event and let alpha approach one in the lower and upper bounds. An uncountable intersection is unnecessary and would not follow from the same null-set argument.

</details>

<a id="strong-laws-etemadi-ex-5"></a>

### Exercise 5

Prove Kronecker’s weighted-average limit from the displayed identity.

<details><summary>Hint 1</summary>

Separate a fixed initial segment from the tail.

</details>

<details><summary>Hint 2</summary>

The remaining s values are uniformly close to their limit.

</details>

<details><summary>Full solution</summary>

Initial weights divided by b n tend to zero. Tail deviations from the limit are bounded by any prescribed epsilon times a total weight at most one. The sum of weights tends to one, so the weighted average tends to the s limit and cancels s n.

</details>

<a id="strong-laws-etemadi-ex-6"></a>

### Exercise 6

Apply the nonidentical variance criterion when all variances are uniformly bounded.

<details><summary>Hint 1</summary>

Compare with the sum of one over n squared.

</details>

<details><summary>Hint 2</summary>

State the remaining mean condition.

</details>

<details><summary>Full solution</summary>

A common variance bound makes the scaled variance sum finite. The centred averages converge to zero almost surely. Uncentred convergence additionally requires convergence of the Cesaro means of the expectations; bounded variances do not establish that deterministic limit.

</details>

<a id="strong-laws-etemadi-ex-7"></a>

### Exercise 7

Why does the exclusive-or family retain pairwise independence but not mutual independence?

<details><summary>Hint 1</summary>

Distinct nonzero binary linear forms have rank two.

</details>

<details><summary>Hint 2</summary>

Three related forms can have rank two rather than three.

</details>

<details><summary>Full solution</summary>

Every pair has uniform output pairs under the independent fair source bits. The form for a symmetric difference equals the exclusive-or of the two original forms, so that triple has a deterministic relation and is not mutually independent. Etemadi uses precisely the pairwise property that remains.

</details>

<a id="strong-laws-etemadi-ex-8"></a>

### Exercise 8

Explain the necessity of finite absolute mean under a finite almost-sure common-law average limit.

<details><summary>Hint 1</summary>

Individual terms divided by n then tend to zero almost surely.

</details>

<details><summary>Hint 2</summary>

Use pairwise Borel-Cantelli on their large-term events.

</details>

<details><summary>Full solution</summary>

Those events can occur only finitely often. Divergent common-tail probability sum would force infinitely many, so the sum is finite. The tail-integral comparison then gives finite expected absolute value.

</details>

<a id="strong-laws-etemadi-ex-9"></a>

### Exercise 9

Show that nonnegative infinite-mean common-law averages diverge almost surely.

<details><summary>Hint 1</summary>

Apply the bounded strong law to each fixed upper clipping.

</details>

<details><summary>Hint 2</summary>

Let the integer clipping level increase on one full-probability event.

</details>

<details><summary>Full solution</summary>

Every clipped average has its clipped-mean limit, while the original average dominates it. The clipped means increase to infinity, forcing the lower limit of the original averages to infinity. Signed variables with two infinite parts are not covered by this argument.

</details>

<a id="strong-laws-etemadi-ex-10"></a>

### Exercise 10

Does the Pareto strong law justify a finite-variance normal standard error?

<details><summary>Hint 1</summary>

The theorem used only a first moment.

</details>

<details><summary>Hint 2</summary>

The displayed Pareto variance is infinite.

</details>

<details><summary>Full solution</summary>

No. Almost-sure convergence of the mean supplies neither a square-root-n normal limit nor a finite variance to estimate. Such an approximation needs an additional central-limit theorem with its own tail, variance and normalisation hypotheses.

</details>
`;export{e as default};