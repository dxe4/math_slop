var e=`---
parent_id: book-probability-theory-measure-martingales
chapter_id: convergence-in-measure-uniform-integrability
title: "Convergence in Probability and Uniform Integrability"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Convergence in Probability and Uniform Integrability

Convergence of observations and convergence of their expectations are different statements. Uniform integrability is the missing control that prevents a small exceptional set from carrying a persistent amount of expected mass. This chapter proves Vitali's L one criterion and the de la Vallee Poussin characterization, then applies them to density convergence and convex averages.

The [L3 convergence chapter](../probability-models-proofs/modes-of-convergence-and-uniform-integrability.md) remains a first route. Here all variables are measurable on a probability space, equality is interpreted almost surely where appropriate, and the integral convergence theorems come from Measure and Integration. The results do not require independence between the sequence members.

## Probability convergence and subsequences

Convergence in probability means that for every positive epsilon, the probability of absolute discrepancy exceeding epsilon tends to zero. On a probability space this is convergence in measure. Almost-sure convergence implies it by dominated convergence applied to the bounded discrepancy indicators, or by continuity of the eventual-tail events.

From probability convergence choose a subsequence whose kth discrepancy exceeds two to the minus k with probability at most two to the minus k. The probability of any such failure after index K is at most the geometric tail sum. It follows that only finitely many fail almost surely, proving almost-sure convergence of that subsequence.

In fact probability convergence is equivalent to every subsequence having an almost-surely convergent further subsequence with the same limit. One direction repeats the selection just given. For the converse, if probability convergence failed, a positive discrepancy threshold and a positive lower probability would persist along a subsequence. An almost-surely convergent further subsequence would force those probabilities to zero, a contradiction.

This principle concerns existence of further subsequences, not almost-sure convergence of the original full sequence. It will let Fatou's lemma extract integral information without falsely upgrading every probability limit to a pathwise limit.

## Uniform integrability controls the tail integral uniformly

A family is uniformly integrable when
$$\\lim_{K\\to\\infty}\\sup_{X\\in\\mathcal H}
E[|X|{\\bf1}_{\\{|X|>K\\}}]=0.$$
It follows that all its members are integrable and their L one norms are uniformly bounded: choose a threshold with a finite uniform tail bound and add K for the bounded portion.

Uniform integrability is equivalent to bounded L one norms together with uniform small-event continuity: for every positive epsilon there is a positive delta such that every event of probability at most delta has expected absolute contribution below epsilon for every family member. For the forward direction, split at a large K; the bounded portion contributes at most K times the event probability and the uniform tail is small.

For the reverse direction, the uniform first-moment bound and Markov give probability of the event absolute X exceeding K at most a common constant divided by K. Apply the small-event property to that event. This proves the uniform tail condition. The proof makes clear why a first-moment bound alone supplies only a small probability, not necessarily a small integral on that probability.

### Worked example: rare spikes lose an entire unit of mean

Let U be uniform on the open unit interval and set X n equal to n when U is at most one over n and zero otherwise. For every U positive, the sequence is eventually zero, so it converges almost surely to zero. Its expected absolute value is nevertheless one for every n.

For any tail threshold K, choosing n above K makes the tail integral one. The sequence is not uniformly integrable and cannot converge in L one. Thus neither almost-sure convergence nor bounded first moments suffices to exchange limit and expectation.

## Vitali: probability convergence plus UI is exactly L one convergence

Assume X n converges in probability to X and the sequence is uniformly integrable. Extract an almost-sure subsequence and apply Fatou to see that X is integrable with first moment bounded by the uniform family bound.

For positive K let T K clip a real value to the interval from minus K to K. Its error is the positive part of absolute value minus K. Fatou along the almost-sure subsequence bounds the limit's clipping-error expectation by the supremum of the sequence clipping errors, which is at most the uniform tail integral above K.

Clipping is Lipschitz, so the clipped sequence still converges in probability. Its discrepancy from the clipped limit is bounded by twice K. For any positive a, its expected discrepancy is at most a plus twice K times the probability that discrepancy exceeds a. Let n tend to infinity, then a decrease to zero. Thus the clipped variables converge in L one.

Finally split the original L one discrepancy into the two clipping errors and the clipped discrepancy. The clipping errors are uniformly small at large K, and for that fixed K the middle term tends to zero. This proves L one convergence. In particular, signed expectations converge because their difference is bounded by expected absolute discrepancy.

Conversely, L one convergence implies convergence in probability by Markov. To prove UI, for large n use
$$|X_n|{\\bf1}_{\\{|X_n|>K\\}}
\\le2|X_n-X|+2|X|{\\bf1}_{\\{|X|>K/2\\}}.$$
If absolute X is at most K over two on the left event, the discrepancy exceeds half absolute X n and pays the bound; elsewhere the other term pays the required part. The first expectation is uniformly small for sufficiently large n, and the second tends to zero because X is integrable. Finitely many initial variables have vanishing tails individually. First choose the index cutoff, then the tail threshold, proving UI of the full sequence.

This establishes the equivalence with all directions explicit. Convergence of signed means alone is weaker because positive and negative mass can cancel; L one convergence controls absolute discrepancy.

## A superlinear convex criterion with a constructive proof

A family is UI if and only if there is a nonnegative nondecreasing finite convex function Phi on the nonnegative line, whose ratio to its argument tends to infinity, with uniformly bounded expectation of Phi of absolute X.

For sufficiency, let c K be the infimum of that ratio above K. It tends to infinity. The tail integral of absolute X above K is at most expected Phi of absolute X divided by c K. The common numerator bound proves UI.

For necessity, choose increasing thresholds a j tending to infinity, at least j, so the uniform tail integral above a j is at most two to the minus j. Define
$$\\Phi(t)=\\sum_{j=1}^{\\infty}(t-a_j)_+.$$
For each finite t only finitely many summands are nonzero, so Phi is finite, convex and nondecreasing. Tonelli bounds its expected value by the sum of the uniform tail allowances, at most one. For any fixed J, its ratio to t is eventually at least the sum through J of one minus a j over t. The lower limit is at least J. Since J is arbitrary, the ratio tends to infinity. This proves the de la Vallee Poussin characterization without assuming a power-moment bound.

The function adapts to the tail family. There need not be one p above one with bounded pth moments. Uniform integrability captures precisely a superlinear integral control, not necessarily a polynomial one.

### Worked example: a power bound gives UI but not convergence in that power

Set X n equal to n on the event U at most one over n squared and zero otherwise. Its second moment equals one and its first absolute moment equals one over n. Bounded second moments imply UI because the first-moment tail above K is at most the second moment divided by K.

The sequence converges in L one to zero, as the explicit first moment confirms. It does not converge in L two because its squared norm stays one. A theorem for one integral scale cannot be upgraded to a stronger scale merely because a uniform bound exists there.

### Worked example: UI need not provide any larger power moment

Consider a positive law with tail one below e and tail $1/[t(\\log t)^2]$ for t at least e. The downward jump at e is an atom, so this is a valid decreasing right-continuous survival function. Its mean is e plus one, by the tail integral.

For any p above one, substituting u equal to log t in the pth-moment tail gives an integral proportional to exp of p minus one times u divided by u squared, which diverges. The single-variable family is UI because its member is integrable, but no larger power moment is finite. The convex characterization supplies a suitable slower superlinear function without promising a power.

## Scheffe's density lemma and its mass hypothesis

Let nonnegative densities f n converge almost everywhere to f under a common measure, and suppose their integrals converge to the finite integral of f. The pointwise minimum of f n and f is dominated by f and converges to f. Dominated convergence and the identity
$$|f_n-f|=f_n+f-2\\min(f_n,f)$$
therefore prove L one convergence of the densities.

When each density and its limit integrate to one, this gives convergence of the associated probability laws in total variation, equal to half the density L one distance. The integral condition matters. Densities n times the indicator of the interval from zero to one over n converge almost everywhere to zero while retaining mass one. Their pointwise limit is not a probability density and their L one distance from it is one. Almost-everywhere density convergence alone can lose mass.

Scheffe's proof is valid under any common measure with these finite integrals; it does not require that underlying measure itself be a probability measure. This differs from the equivalence between convergence in measure and probability, which used a finite probability setting.

## Convex combinations retain UI without independence

Take a UI family and its convex superlinear function from the characterization. For a finite convex combination, the absolute value is at most the same convex combination of absolute values. Monotonicity and convexity of Phi bound its transformed value by the convex combination of the transformed absolute values. Expectations therefore keep the same common bound.

All finite convex combinations consequently form a UI family, regardless of dependence between the variables. L one limits of such combinations also retain this bound: choose an almost-sure subsequence of an L one convergent sequence and apply Fatou to the nonnegative continuous Phi. Thus the L one closure of the convex hull remains UI.

This property is useful when averaging approximations or conditional quantities. It is a statement about the family of random variables and their integral tails, not about independence of the averaging weights or a statistical generalization theorem. Random weights that correlate with the variables require another argument; deterministic convexity does not automatically cover arbitrary data-dependent amplification.

## Reading convergence assumptions in later probability arguments

A bounded family is UI, and a uniform higher power moment is a convenient sufficient condition. A bounded first moment alone is not. Convergence in probability provides a limit in distributional location on the common space, while UI controls integral mass in exceptional regions. Both are used in Vitali.

Later conditional-expectation and martingale chapters use this distinction to separate almost-sure convergence from L one convergence. A nonnegative martingale can have bounded means and still fail UI; its almost-sure limit can lose expected mass. The current theorem supplies the exact additional condition for recovering L one convergence once the probability or almost-sure limit has been established, rather than treating equality of means as automatic.

## A norm-convergence variant of Scheffe

There is another useful characterization. If X n converges in probability to integrable X and their absolute expectations converge to expected absolute X, then X n converges in L one. To prove it, start with any subsequence and take a further almost-surely convergent one. The quantity
$$|X_n|+|X|-|X_n-X|$$
is nonnegative, bounded above by twice absolute X and converges almost surely to twice absolute X. Dominated convergence applies. Rearranging its expectation, using the assumed absolute-moment convergence, gives L one convergence along that further subsequence.

If the full sequence did not converge in L one, some subsequence of its norm discrepancies would remain above a positive constant. The further-subsequence argument just proved would contradict that. Thus the full sequence converges in norm. The converse follows from the integral triangle inequality and probability convergence by Markov.

This criterion uses convergence of absolute first moments, not just signed means. The opposite-sign spikes in the exercises have convergent signed means but persistent absolute mass, so they do not meet it. It also illustrates why an almost-sure subsequence can prove convergence of a deterministic sequence of integral values without establishing almost-sure convergence of every original random variable.

## Exercises

<a id="convergence-in-measure-uniform-integrability-ex-1"></a>

### Exercise 1

Show UI implies a uniform L one bound.

<details><summary>Hint 1</summary>

Choose one threshold with uniformly bounded tail integral.

</details>

<details><summary>Hint 2</summary>

The bounded part is at most that threshold.

</details>

<details><summary>Full solution</summary>

For a sufficiently large K, every absolute expectation is at most K plus the common tail bound. Thus all members are integrable and their norms have a finite common upper bound. UI gives more than this consequence, as the rare-spike example shows.

</details>

<a id="convergence-in-measure-uniform-integrability-ex-2"></a>

### Exercise 2

Why does the first rare-spike sequence converge almost surely but not in L one?

<details><summary>Hint 1</summary>

For positive U, only finitely many n satisfy U at most one over n.

</details>

<details><summary>Hint 2</summary>

Compute its expected absolute value.

</details>

<details><summary>Full solution</summary>

Its pointwise values eventually vanish, but the expectation n times one over n stays one. The tail integral is also one whenever n exceeds the selected tail threshold, so UI fails and Vitali does not apply.

</details>

<a id="convergence-in-measure-uniform-integrability-ex-3"></a>

### Exercise 3

Prove bounded pth moments for p above one imply UI.

<details><summary>Hint 1</summary>

On the tail compare absolute value with its pth power.

</details>

<details><summary>Hint 2</summary>

The factor K to the one minus p tends to zero.

</details>

<details><summary>Full solution</summary>

On $|X|>K$, $|X|\\le|X|^p/K^{p-1}$. A common pth-moment bound makes the tail expectation at most that bound divided by $K^{p-1}$, tending to zero.

</details>

<a id="convergence-in-measure-uniform-integrability-ex-4"></a>

### Exercise 4

What role does probability convergence play after clipping in the Vitali proof?

<details><summary>Hint 1</summary>

Clipped discrepancies are uniformly bounded.

</details>

<details><summary>Hint 2</summary>

Split their expectation at a positive discrepancy threshold.

</details>

<details><summary>Full solution</summary>

Their expectation is at most a plus twice K times the chance of exceeding a. Probability convergence sends the second term to zero, and then a can decrease to zero. This gives L one convergence of the clipped variables without presuming almost-sure convergence of the full sequence.

</details>

<a id="convergence-in-measure-uniform-integrability-ex-5"></a>

### Exercise 5

Prove the superlinear ratio for the constructed Phi.

<details><summary>Hint 1</summary>

Keep only its first J positive-part terms.

</details>

<details><summary>Hint 2</summary>

Let t grow before letting J grow.

</details>

<details><summary>Full solution</summary>

For fixed J and large t, $\\Phi(t)/t\\ge\\sum_{j=1}^J(1-a_j/t)$, whose limit is J. Since this holds for every J, the ratio tends to infinity. Local finiteness follows from $a_j\\ge j$.

</details>

<a id="convergence-in-measure-uniform-integrability-ex-6"></a>

### Exercise 6

Why is an integrable singleton family always UI?

<details><summary>Hint 1</summary>

Its tail contribution decreases pointwise to zero.

</details>

<details><summary>Hint 2</summary>

It is dominated by its own integrable absolute value.

</details>

<details><summary>Full solution</summary>

Dominated convergence gives vanishing tail expectation. The heavy-tail worked example is therefore UI despite lacking every larger power moment; the characterization is more flexible than a fixed L p assumption.

</details>

<a id="convergence-in-measure-uniform-integrability-ex-7"></a>

### Exercise 7

State precisely the missing hypothesis in the shrinking-density example.

<details><summary>Hint 1</summary>

The pointwise limit integrates to zero.

</details>

<details><summary>Hint 2</summary>

The density integrals stay one.

</details>

<details><summary>Full solution</summary>

The integrals do not converge to the integral of the limit, which is required by Scheffe. Thus its conclusion is unavailable. The example does not refute the lemma; it shows why preservation of total mass is part of the statement.

</details>

<a id="convergence-in-measure-uniform-integrability-ex-8"></a>

### Exercise 8

Why do deterministic convex combinations of a UI family remain UI?

<details><summary>Hint 1</summary>

Use its common convex superlinear function.

</details>

<details><summary>Hint 2</summary>

Apply monotonicity and Jensen before expectation.

</details>

<details><summary>Full solution</summary>

The Phi of the combination’s absolute value is bounded by the convex combination of Phi of each absolute value. Its expectation has the same uniform bound. The characterization then yields UI without independence assumptions.

</details>

<a id="convergence-in-measure-uniform-integrability-ex-9"></a>

### Exercise 9

Does convergence of signed expectations and probability convergence suffice for L one convergence? Give a counterexample.

<details><summary>Hint 1</summary>

Make rare positive and negative spikes cancel in expectation.

</details>

<details><summary>Hint 2</summary>

Their absolute expectation need not vanish.

</details>

<details><summary>Full solution</summary>

On a uniform U, assign value n on the first interval of length one over two n and minus n on the next such interval, zero elsewhere. The means are zero and the variables converge almost surely to zero, but absolute expectation is one. Thus signed cancellation does not replace UI.

</details>

<a id="convergence-in-measure-uniform-integrability-ex-10"></a>

### Exercise 10

How does the subsequence principle let Fatou apply to a probability-convergent sequence?

<details><summary>Hint 1</summary>

Choose a further sequence with summable discrepancy probabilities.

</details>

<details><summary>Hint 2</summary>

That sequence converges almost surely on one full-probability set.

</details>

<details><summary>Full solution</summary>

Along the selected almost-sure subsequence, Fatou bounds the limit’s absolute expectation or clipping tails by the lower limit of the corresponding sequence expectations. This supplies integral information about the probability limit without asserting almost-sure convergence of every original term.

</details>
`;export{e as default};