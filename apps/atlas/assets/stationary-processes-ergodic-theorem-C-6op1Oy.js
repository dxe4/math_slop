var e=`---
parent_id: book-probability-theory-measure-martingales
chapter_id: stationary-processes-ergodic-theorem
title: "Stationary Processes and the Ergodic Theorem"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Stationary Processes and the Ergodic Theorem

Stationarity says that shifting time preserves the joint law. Ergodicity says that invariant information is trivial. The distinction determines whether a long time average converges to an ordinary expectation or to a random conditional expectation. This chapter proves Birkhoff's L one ergodic theorem using a maximal inequality, a Hilbert-space density argument and uniform integrability.

Preparation is conditional expectation, L two orthogonality, the UI convex-hull theorem and elementary measure-preserving maps. The Hilbert orthogonal-projection theorem is the functional-analytic input; no pointwise ergodic theorem is assumed. Independence is not required for the averages.

## A measure-preserving dynamical model

Let T be a measurable map of a probability space into itself such that the probability of each inverse-image event equals the original probability. The composition operator U sends f to f after T. It preserves every L p norm and every integrable expectation by the pushforward identity.

For integrable f, write A n f as the average of f, f after T, through f after T to the n minus one. The invariant sigma-algebra I consists of measurable events whose indicators are unchanged after T almost surely. It is a sigma-algebra because complements and countable unions preserve the property outside a countable null union.

An integrable invariant function is I-measurable: its threshold events are invariant. Conversely an I-measurable function is invariant almost surely by simple approximation and countably many defining events. Null-version qualifications remain part of both statements.

## The finite maximal ergodic lemma

For a real integrable f, let S k be its first k orbit sum and let M N be the maximum of zero and the sums through N. Let E N be the event that this maximum is positive. Directly from the definitions,
$$M_N=\\max\\{0,f+M_{N-1}\\circ T\\}.$$
On E N the positive branch is selected. Outside E N, M N is zero while the shifted maximum is nonnegative. Therefore
$$f{\\bf1}_{E_N}\\ge M_N-M_{N-1}\\circ T.$$
Both maxima are integrable, bounded by a finite sum of absolute orbit values. Integrate and use measure preservation. Since M N dominates M N minus one pointwise, the right integral is nonnegative. Thus the integral of f over E N is nonnegative.

The events E N increase. Dominated convergence of their f integrals gives the same conclusion on the event where some partial sum is positive. Apply it to f minus a positive lambda. On the event that some average of f exceeds lambda, it gives lambda times event probability at most the integral of f over that event, hence at most the positive-part norm.

For two-sided control, use absolute average at most average absolute f. We obtain
$$P\\{\\sup_n|A_nf|>\\lambda\\}\\le\\|f\\|_1/\\lambda.$$
This maximal inequality is the tool allowing a dense class of well-behaved functions to control every L one function. It uses measure preservation, not independent summands.

## A dense class with convergent averages

On L two the operator U is an isometry. The orthogonal complement of the range of I minus U consists exactly of invariant functions. To prove one direction, orthogonality tested against the function itself gives its inner product with U of itself equal to its squared norm. Isometry then makes its squared difference from its image zero. Conversely if h is invariant, isometry preserves inner products and gives its orthogonality to every g minus U g.

The Hilbert projection theorem therefore decomposes L two into invariant functions and the closure of these differences, called coboundaries. Averages of an invariant function equal that function almost surely. For a coboundary g minus U g, telescoping gives
$$A_n(g-Ug)=(g-g\\circ T^n)/n.$$
Its L two norm tends to zero by isometry.

It also tends to zero almost surely. An L two function is L one on a probability space. Tail-integral comparison makes the probabilities that absolute g after T to the n exceeds epsilon n summable, since all orbit values have the same marginal law. First Borel-Cantelli gives the required divided-value limit, without independence. This establishes pointwise convergence on invariant L two functions plus L two coboundaries.

That set is dense in L two by the decomposition, hence dense in L one: bounded truncations approximate any L one function and lie in L two, while L two closeness implies L one closeness on a probability space. The density conclusion is functional-analytic, not an assumption that every integrable function is itself a single coboundary.

## Maximal control extends pointwise convergence

Approximate any L one f by good functions f m from that dense class. On their common full-probability convergence event, the oscillation between the lower and upper average limits of f is at most twice the supremum of absolute averages of f minus f m. The maximal inequality bounds the probability that this exceeds twice epsilon by the L one approximation error divided by epsilon.

Let m increase. For every positive epsilon the oscillation exceeds twice epsilon only on a null event. The same maximal inequality, with lambda tending to infinity, also says the supremum of absolute averages is finite almost surely. Thus the lower and upper limits are finite and equal. We have proved almost-sure convergence for every L one f.

Fatou bounds the absolute expectation of its limit by the norm of f. This step alone would not guarantee L one convergence, but the averaging family has a further property that arbitrary first-moment-bounded sequences lack.

## Uniform integrability gives the norm limit

All orbit values of f have the same law, so they form a UI family: every tail integral equals the tail integral of the one integrable f. Their finite convex averages remain UI by the convex-hull characterization proved earlier. Thus A n f is UI.

The almost-sure limit and Vitali give L one convergence. This proof explains why expectation is preserved for measure-preserving averages even though it can be lost by a general nonnegative martingale. It is not a consequence of a mere bound on their first moments; it uses their common-law orbit and convex structure.

In L two, the earlier contraction and coboundary argument also give norm convergence directly to the Hilbert invariant projection. The L one proof reaches a broader class and additionally supplies a pointwise conclusion.

## Identifying the invariant conditional expectation

The average after T differs from the original average by f after T to the n minus f, divided by n. The tail-integral Borel-Cantelli argument above makes that difference tend to zero almost surely. Its limit F is therefore invariant and I-measurable.

For any invariant event A, the integral of f after T to the j over A equals the integral of f over A: replace its indicator by its shifted version almost surely and use measure preservation on the product. Thus every average has the same integral over A. Pass to the L one limit to get the defining tests
$$F=E[f\\mid I],\\qquad
A_nf\\longrightarrow E[f\\mid I]\\quad\\hbox{a.s. and in }L^1.$$
This is Birkhoff's ergodic theorem on a probability space in the stated form. The proof includes maximal control, existence of the pathwise limit, L one convergence and its conditional identification.

A system is ergodic when every invariant event has probability zero or one. Then every integrable invariant function is constant almost surely, since otherwise some threshold event would have intermediate probability. The limit is consequently expected f. Conversely, if all indicator averages converge to their ordinary probabilities, an invariant indicator already equals every one of its averages and must be constant. This proves the equivalence.

## Stationary sequences as shift systems

A strictly stationary sequence has the same finite-dimensional laws after each time shift. Its law on the coordinate product space is preserved by the left shift: finite-cylinder probabilities agree, and pi-lambda uniqueness extends this to the product sigma-algebra. The coordinate-at-zero function is integrable exactly when the common absolute first moment is finite.

Birkhoff then gives a time-average limit equal to the conditional mean given shift-invariant information. It equals the unconditional mean only under ergodicity. The law may be represented on a path space for this argument even if the original observations were defined on another space; the almost-sure average assertion transfers because it concerns a measurable sequence event.

### Worked example: a shared latent bit is stationary but not ergodic

Choose one fair bit Theta and let every observation equal it. The joint law is stationary. The invariant sigma-algebra contains Theta itself, so the time average is Theta at every sample size, not its mean one half.

There is no contradiction with Birkhoff: conditional expectation of the coordinate given invariant information is Theta. A stationarity assumption alone cannot promise that one realization averages away a persistent latent component.

### Worked example: the iid shift is ergodic

For an iid sequence, an invariant event agrees almost surely with its inverse shift by any n, which depends only on coordinates after the first n. It is therefore independent of the first n coordinates. Generator extension makes it independent of the whole sequence sigma-algebra, and hence of itself, giving probability zero or one.

Thus the iid shift is ergodic, and Birkhoff recovers the integrable iid strong law. Etemadi's pairwise-independent theorem used a different route and does not assume the entire sequence law is stationary; the two results should not be conflated.

### Worked example: ergodic does not mean mixing

Take a two-point space with equal probabilities and let T exchange the points. Its only invariant events are empty and full, so it is ergodic. Let f take values plus one and minus one. Orbit values alternate deterministically and their average tends to zero, the ordinary mean.

Yet the probability of one point intersected with its nth inverse image alternates between one half and zero rather than approaching one quarter. It is not mixing, where those two-event probabilities would approach the product. Periodicity can coexist with a valid ergodic average theorem; additional mixing or central-limit assumptions must be stated separately.

## What ergodicity does not quantify

The theorem gives no universal finite-time convergence rate, confidence interval or central limit distribution. Long dependence can make averages settle slowly even when the almost-sure limit is the mean. A bounded trajectory plot or a finite collection of empirical correlations cannot establish ergodicity of an unknown data-generating law.

For nonstationary sequences, a common marginal distribution alone does not make the shift preserve the joint law. For Markov chains, invariant distributions and irreducibility require precise state-space and recurrence hypotheses before they yield an ergodic process. The next chapter develops a scoped general-state route rather than treating those words as automatic synonyms.

## Products, invariant information and what one trajectory learns

Ergodicity of two systems separately does not imply ergodicity of their product. Take two copies of the equally weighted two-point flip and evolve both coordinates simultaneously. Each individual system is ergodic, as the worked example showed. In the product, however, the event that the two coordinates agree is invariant: simultaneous flipping preserves agreement. Under the product probability it has probability one half. Therefore the product is not ergodic, although its two initial coordinates were chosen independently.

Let f be the agreement indicator on that product. Every time average is its initial value, so Birkhoff returns that invariant bit. Its ordinary expectation is one half. This is a useful warning when constructing several stationary components: independence between components at a fixed initialization does not by itself eliminate invariant relative phases. A mixing assumption is stronger and can remove such periodic obstructions, but that is a different theorem.

There is also a positive consequence of the conditional form. Suppose a stationary observation is the sum of an integrable invariant component H and an integrable component Z with zero conditional mean given the invariant sigma-algebra. Conditional expectation of the sum given that algebra is H. Its time average therefore converges almost surely and in first mean to H. The fluctuating component averages away while the persistent component remains. No independence between H and Z is required; the stated conditional mean and invariant measurability are the exact assumptions.

Finally, averages over all times and averages along a subsequence need not have the same theorem. For the two-point flip, the full average of a sign converges to zero, whereas its even-time average equals its initial sign forever. The even shift is the identity map, whose invariant sigma-algebra is the whole space. Applying Birkhoff to that shift correctly gives the initial sign. Subsampling can therefore change the invariant information even in a bounded finite system. This distinction is relevant to periodic observations and to simulation output recorded every fixed number of updates.

## Exercises

<a id="stationary-processes-ergodic-theorem-ex-1"></a>

### Exercise 1

Derive the maximal ergodic lemma’s pathwise inequality.

<details><summary>Hint 1</summary>

Use the recursion for the maximum of partial sums.

</details>

<details><summary>Hint 2</summary>

Compare its positive and zero branches.

</details>

<details><summary>Full solution</summary>

On the positive-maximum event, f equals the new maximum minus the shifted earlier maximum. Outside it the right side is nonpositive. This proves the indicator inequality; measure preservation and monotonicity of maxima make its integral nonnegative.

</details>

<a id="stationary-processes-ergodic-theorem-ex-2"></a>

### Exercise 2

Why does the maximal inequality extend a dense convergence class?

<details><summary>Hint 1</summary>

Bound the average error by the maximal average of the approximation difference.

</details>

<details><summary>Hint 2</summary>

Its probability is controlled by the L one approximation norm.

</details>

<details><summary>Full solution</summary>

On a common event where good approximants converge, f’s average oscillation is at most twice their maximal error. The maximal inequality makes positive oscillation probabilities vanish as the approximation improves. A separate same inequality bounds the total average supremum, excluding infinite limits.

</details>

<a id="stationary-processes-ergodic-theorem-ex-3"></a>

### Exercise 3

Prove the coboundary average telescopes.

<details><summary>Hint 1</summary>

Expand the finite sum of g minus its shift.

</details>

<details><summary>Hint 2</summary>

All middle orbit terms cancel.

</details>

<details><summary>Full solution</summary>

$A_n(g-g\\circ T)=(g-g\\circ T^n)/n$. L one tail summability makes the final orbit term divided by n tend to zero almost surely, and an L two norm bound gives norm convergence for square-integrable g.

</details>

<a id="stationary-processes-ergodic-theorem-ex-4"></a>

### Exercise 4

Why are orbit averages UI?

<details><summary>Hint 1</summary>

The orbit has one common integrable distribution.

</details>

<details><summary>Hint 2</summary>

Finite deterministic convex combinations preserve UI.

</details>

<details><summary>Full solution</summary>

Every orbit tail integral equals that of f, so the orbit family is UI. The convex-hull theorem passes UI to its averages. Vitali then upgrades the pointwise limit to L one convergence. A mere bound on expected absolute averages would not establish this step.

</details>

<a id="stationary-processes-ergodic-theorem-ex-5"></a>

### Exercise 5

Identify the invariant limit by conditional tests.

<details><summary>Hint 1</summary>

Integrate each shifted value over an invariant event.

</details>

<details><summary>Hint 2</summary>

Pass the L one average limit.

</details>

<details><summary>Full solution</summary>

Measure preservation and the invariant indicator give the same integral as f at every time. The limiting function is invariant and measurable with respect to I, and its integrals over all I events agree with f. Conditional-expectation uniqueness gives the identification.

</details>

<a id="stationary-processes-ergodic-theorem-ex-6"></a>

### Exercise 6

Why does stationarity of the constant-bit sequence not imply an ordinary-mean average limit?

<details><summary>Hint 1</summary>

The shared bit remains invariant information.

</details>

<details><summary>Hint 2</summary>

Its time average never changes.

</details>

<details><summary>Full solution</summary>

The average equals Theta, while its ordinary mean is one half. Birkhoff returns expected coordinate given invariant information, also Theta. Ergodicity is the additional condition that removes that nontrivial information.

</details>

<a id="stationary-processes-ergodic-theorem-ex-7"></a>

### Exercise 7

Prove the iid shift’s invariant events have probability zero or one.

<details><summary>Hint 1</summary>

Shift invariance makes the event equivalent to a future-only event for every finite start.

</details>

<details><summary>Hint 2</summary>

Use independence and generator extension.

</details>

<details><summary>Full solution</summary>

It is independent of every finite initial sigma-algebra and therefore of the whole sequence sigma-algebra. Since it belongs there itself, its probability equals its square. This proves ergodicity under the full iid product law.

</details>

<a id="stationary-processes-ergodic-theorem-ex-8"></a>

### Exercise 8

Show the two-point exchange is ergodic but not mixing.

<details><summary>Hint 1</summary>

List its invariant subsets.

</details>

<details><summary>Hint 2</summary>

Compare one point with its even and odd inverse images.

</details>

<details><summary>Full solution</summary>

Only empty and full are invariant, giving ergodicity. The one-point intersection probabilities alternate between one half and zero, failing convergence to the product one quarter. The average theorem still holds despite periodicity.

</details>

<a id="stationary-processes-ergodic-theorem-ex-9"></a>

### Exercise 9

Does Birkhoff supply a square-root sample-size confidence bound?

<details><summary>Hint 1</summary>

Its conclusion is pointwise and L one convergence.

</details>

<details><summary>Hint 2</summary>

No fluctuation or mixing rate was assumed.

</details>

<details><summary>Full solution</summary>

No. A central-limit theorem or finite-time concentration result needs additional dependence, moment and variance hypotheses. Ergodic convergence alone does not identify an asymptotic standard error or a finite-time rate.

</details>

<a id="stationary-processes-ergodic-theorem-ex-10"></a>

### Exercise 10

Why does a common one-coordinate law not establish stationarity?

<details><summary>Hint 1</summary>

Stationarity concerns every finite joint distribution.

</details>

<details><summary>Hint 2</summary>

Dependence can change with time while each marginal stays fixed.

</details>

<details><summary>Full solution</summary>

Identical marginals specify only individual observations. Shift preservation needs equality of all finite shifted joint laws. The product-space construction and pi-lambda argument use that stronger condition, so common marginals alone cannot invoke the ergodic theorem.

</details>
`;export{e as default};