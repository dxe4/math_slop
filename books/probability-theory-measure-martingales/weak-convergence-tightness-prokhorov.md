
# Weak Convergence, Tightness and Prokhorov Compactness

Weak convergence compares probability laws through bounded continuous observations. Tightness prevents mass from escaping the compact regions where finite approximations work. This chapter proves Portmanteau and the sequential form of Prokhorov's theorem on a Polish space, with the compact-space Riesz representation theorem as an explicit measure-theory input.

The retained Euler source “Weak Convergence of Probability Measures” at modules/textbooks/real_analysis/chapters/36-weak-probability.qmd supplies earlier examples and remains unchanged with its original exercises. This new treatment develops the general metric-space proof. Required preparation is [Measure and Integration](#/books/measure-and-integration), especially its Riesz–Radon representation theorem, and the previous real-line transform chapter.

## Weak convergence and continuity sets

For Borel probability measures on a metric space S, weak convergence means convergence of the integral of every bounded continuous real function. The definition does not require variables with these laws to live on the same probability space. In contrast, almost-sure and probability convergence concern a specified joint coupling.

If laws converge weakly, every closed set F has limiting upper probability at most its limit-law probability. Approximate its indicator from above by the continuous functions equal to the positive part of one minus m times distance to F. For each fixed m, weak convergence passes their integrals. Then monotone or dominated convergence lets m increase, proving the closed-set inequality.

Complements give the corresponding lower inequality for open sets. If a Borel set has boundary of limit probability zero, its interior and closure have the same limit probability. Squeezing between them gives convergence of its probabilities. Such sets are continuity sets; an arbitrary Borel set need not satisfy the conclusion.

Conversely suppose the open-set lower inequalities hold. For a continuous function valued in the unit interval, the tail-integral formula and Fatou give a lower bound on its limiting expected value using the open superlevel sets. Apply the same argument to one minus that function to get the upper bound. Affine rescaling handles every bounded continuous function. This proves Portmanteau's equivalence, not only its necessary half.

### Worked example: a moving point mass

The point mass at one over n converges weakly to the point mass at zero, since every bounded continuous function converges at those points. The probability of the singleton zero remains zero under all approximating laws but is one under the limit.

There is no contradiction with Portmanteau: that singleton's boundary carries the full limiting mass. Closed-set upper bounds and continuity-set equality have different strengths. In particular, weak convergence need not be setwise convergence on all Borel sets.

## Tightness on a complete separable metric space

A family is tight if, for every positive epsilon, one compact set captures probability at least one minus epsilon uniformly over the family. A Polish space is separable and admits a complete metric generating its topology. We fix that metric.

Every single Borel probability on such a space is tight. For each scale one over k, use a countable dense set of centres to cover the space by open balls. Choose a finite union at that scale with omitted probability at most epsilon times two to the minus k. Intersect the closures of these finite unions over k. A union bound gives probability at least one minus epsilon.

That intersection is closed and totally bounded: at every small scale it lies in finitely many balls of that scale, up to an arbitrarily small enlargement for their closures. Completeness makes a closed totally bounded subset compact, by the standard Cauchy-subsequence criterion. This proves the claim without supposing that closed bounded balls are compact.

A moment bound can supply tightness in Euclidean space because its closed bounded balls are compact. In a general infinite-dimensional space that last implication fails, even though the single-measure tightness theorem still holds.

### Worked example: bounded norms need not mean a tight family

In the Hilbert space of square-summable sequences, let each law be a point mass at a different coordinate unit vector. All norms and all norm moments equal one. Yet no compact set contains infinitely many of those vectors, whose pairwise distances are square root two; compact sets are totally bounded.

For every compact set, some law therefore places mass one outside it. The family is not tight. A norm bound is not a compactness bound in this space, so the Euclidean moment argument cannot be transferred unchanged.

## A compact metric probability lemma

On a compact metric space K, continuous functions have a countable uniformly dense family. One construction uses finite covers at each reciprocal-integer scale and continuous distance-based partition weights. Approximate any continuous function by its values at those finitely many centres, then approximate those values by rationals. Uniform continuity makes the approximation uniform, and the rational coefficient choices across countably many scales form a countable family.

For any sequence of probabilities on K, choose a diagonal subsequence along which the integrals of all these functions converge. Uniform approximation extends the limits to every continuous function, defining a positive bounded linear functional L with L of one equal to one.

The [Riesz–Radon theorem](../measure-and-integration/riesz-radon-representation.md) represents that functional by a Borel probability on K. This is the explicit imported analytic theorem. Its defining integral relation proves weak convergence of the chosen subsequence. Thus every probability sequence on compact metric K has a weakly convergent subsequence.

## Embedding a separable metric space in a compact cube

Replace the complete metric by its minimum with one, preserving completeness and topology, and choose dense points x j. Map x to the sequence of its distances to those points. This map T takes values in the countable unit cube, equipped with a metric formed from summably weighted coordinate distances. The cube is compact by diagonal subsequence extraction.

The map is continuous and injective. If two points had identical distances to every dense point, approximating one of them by dense points would force their mutual distance to zero. Its inverse on its image is continuous: when distance coordinates converge to those of x, first choose a dense centre near x and use convergence of that one coordinate to put the original points near x by the triangle inequality.

Thus T is a topological embedding. Its full image need not be closed in the cube, and we will not presume it is. Tightness will locate the limiting mass inside a countable union of compact pieces of that image.

## Tightness gives a weakly convergent subsequence

Push a tight sequence of laws through T into the compact cube. The compact-space lemma gives a weakly convergent subsequence there, with limit nu. Choose increasing compact subsets C r of S that capture mass at least one minus two to the minus r uniformly. Finite unions can make an initially chosen sequence increasing.

Their images are compact and closed in the cube. Portmanteau gives nu of each image at least one minus two to the minus r. Hence the Borel union B of these images has nu probability one. It lies inside T of S.

Define a probability mu back on S by the inverse map on B. This is measurable without assuming the full image is Borel: for a Borel A in S, its image intersected with B is the countable union of its images intersected with each compact C r. The embedding restricted to each compact is a homeomorphism onto a closed cube subset, so those images are Borel. This makes the pulled-back law well-defined.

We must still verify weak convergence for bounded continuous functions on S, which need not extend continuously to the entire cube. On one compact image, a bounded continuous function can be approximated uniformly by a globally defined bounded Lipschitz function. Explicitly, take the infimum of its compact-set values plus L times cube distance, and clip to the original bound. For large L, uniform continuity gives uniform agreement within any chosen error on that compact: nearby points have close values, while a sufficiently large distance penalty excludes far lower values. The infimum is L-Lipschitz by the triangle inequality.

Outside the compact, both the original and extended functions contribute at most twice their bound times the small tail probability. Inside, their integrals differ by the chosen uniform approximation error. The extended cube-function integrals converge by the compact weak limit. Let the compact tail and approximation errors decrease. This proves the required weak convergence on S.

Every step of tightness-to-subsequence compactness is now accounted for: compact embedding, a Riesz-represented cube limit, support recovery and approximation of the actual test functions. No pathwise coupling theorem was used.

## The converse sequential compactness argument

Assume every sequence from a family has a weakly convergent subsequence. For each radius r positive and mass allowance eta positive, some finite union of r-balls centred in a fixed dense set must capture at least one minus eta under every family member.

Otherwise choose the mth law to put more than eta outside the first m such balls. A weakly convergent subsequence has a limit law whose mass in some fixed finite union exceeds one minus eta over two, because the countable balls cover S. The open-set Portmanteau inequality makes late subsequence laws give that same fixed union mass above one minus eta. But it is contained in their longer mth union, contradicting the way those laws were chosen.

Apply this uniform finite-ball property at radii tending to zero and summable omitted-mass allowances. The intersection of the corresponding closures is closed, totally bounded and hence compact by completeness, and captures at least one minus epsilon uniformly. The family is tight.

We have proved the sequential Prokhorov theorem: on a Polish space, tightness is equivalent to every sequence having a weakly convergent subsequence. This is the compactness form used in this text. General non-Polish spaces require their own hypotheses; completeness and separability were used constructively above.

## Mapping and Slutsky with the required joint argument

For a measurable map g continuous except on a limit-null set, take a closed target set. The closure of its inverse image lies in that inverse image together with the discontinuity set: continuity at any other limit point forces its mapped value into the closed target. Portmanteau therefore gives the target closed-set inequality for the pushed laws, proving the continuous mapping theorem.

If real X n converges weakly and Y n converges in probability to a constant c on a common space, their joint pair converges to the law of X paired with c. To prove it, use tightness of X n to restrict to a compact interval and use continuity of a bounded continuous two-variable test function uniformly near that compact interval times c. The chance of leaving the interval or having Y n far from c controls the remaining bounded error. Then apply weak convergence to the test function evaluated at second coordinate c.

Continuous addition and multiplication give Slutsky's sum and product conclusions. Independence of X n and Y n was not needed; the constant second-coordinate limit removed the otherwise unknown coupling. If both coordinates have nonconstant weak limits, marginal convergence alone cannot determine their joint limit.

## Finite-dimensional projection convergence

For vector laws in Euclidean space, convergence of every fixed linear projection to the corresponding projection of a specified vector law implies joint weak convergence. Coordinate projections first imply coordinate tightness, and a union bound gives joint tightness inside compact boxes. Prokhorov supplies subsequential limits.

Every linear projection of a subsequential limit has the specified law by continuous mapping. Their vector characteristic functions therefore agree at every argument. The Gaussian-smoothing uniqueness proof extends componentwise in finite dimension: use a product Gaussian frequency factor, Fubini and a vanishing independent Gaussian vector. Equal vector transforms determine the joint law. Thus all subsequential limits coincide and the whole sequence converges.

This proves the Cramer-Wold device used in multivariate central limits. Checking only coordinate projections would not suffice, because dependence lives in the other linear combinations.

## Weak convergence and unbounded moments

For real laws converging weakly, truncated moments given by minimum of absolute x to the p and K converge, because they are bounded continuous. If the pth-moment tails are uniformly integrable, they can be removed uniformly at large K.

The limit also has the needed finite moment and tail control. Apply weak convergence to bounded truncations of the continuous positive part of absolute x to the p minus K, then increase the truncation. Its limit expectation is at most the limiting lower expectation of the untruncated sequence term, bounded by the uniform tail allowance. The triangle inequality with the clipped moments proves moment convergence.

A common bound on pth moments alone does not give UI of those pth powers. A bound on a strictly higher moment does, by the tail comparison proved earlier. Tightness, finite moments and convergence of moments are different statements.

### Worked example: weak convergence with divergent first moments

Let the nth law assign probability one minus one over n to zero and one over n to n squared. Every bounded continuous integral tends to its value at zero, so the laws converge weakly to the point mass there. Their first absolute moments equal n and diverge.

The family is still tight: late members have arbitrarily small escaping probability, and finitely many early supports fit inside one bounded interval. Tightness controls mass, while UI controls its contribution to unbounded observables. Neither condition should be substituted for the other.

## A real-line coupling consequence with explicit scope

For real weakly convergent laws, their generalized inverses applied to one uniform variable converge almost surely. At a continuity point u of the limiting inverse, choose nearby spatial bounds with CDF values strictly below and above u. Distribution-function convergence at suitable continuity endpoints eventually traps the approximating inverse between those bounds. Let them approach the limiting quantile.

A monotone inverse has at most countably many discontinuities, so a uniform variable avoids them almost surely. This constructs new variables with the assigned laws and an almost-sure limit on one common space. It is a real-line representation proof, not an assertion that the original variables already converge almost surely. A general Polish-space Skorokhod representation theorem is a separate continuation and was not used to prove Prokhorov here.

## Exercises

<a id="weak-convergence-tightness-prokhorov-ex-1"></a>

### Exercise 1

Derive the closed-set Portmanteau inequality.

<details><summary>Hint 1</summary>

Approximate its indicator by continuous functions of distance.

</details>

<details><summary>Hint 2</summary>

Pass the law limit first and the approximation limit second.

</details>

<details><summary>Full solution</summary>

The functions given by the positive part of one minus m times distance dominate the closed-set indicator and decrease to it. Weak convergence handles fixed m; dominated convergence under the limit law handles m increasing, giving the upper inequality.

</details>

<a id="weak-convergence-tightness-prokhorov-ex-2"></a>

### Exercise 2

Why do continuity sets have convergent probabilities?

<details><summary>Hint 1</summary>

Place the set between its interior and closure.

</details>

<details><summary>Hint 2</summary>

Its boundary has zero limit mass.

</details>

<details><summary>Full solution</summary>

The open lower bound and closed upper bound squeeze its probabilities between the same limit number because closure minus interior lies in the null boundary. Without that condition the point-mass example shows failure.

</details>

<a id="weak-convergence-tightness-prokhorov-ex-3"></a>

### Exercise 3

Explain how completeness turns the finite-ball construction into a compact set.

<details><summary>Hint 1</summary>

The intersection is closed and totally bounded.

</details>

<details><summary>Hint 2</summary>

Every sequence then has a Cauchy subsequence with its limit in the set.

</details>

<details><summary>Full solution</summary>

Finite covers at arbitrarily small radii give total boundedness. Completeness of the ambient metric makes a Cauchy subsequence converge, and closedness retains its limit. Thus the intersection is compact. A mere boundedness condition would not supply the finite covers.

</details>

<a id="weak-convergence-tightness-prokhorov-ex-4"></a>

### Exercise 4

What analytic theorem is imported in the compact probability subsequence lemma?

<details><summary>Hint 1</summary>

Diagonal integrals define a positive functional on continuous functions.

</details>

<details><summary>Hint 2</summary>

That functional must correspond to a measure.

</details>

<details><summary>Full solution</summary>

Riesz–Radon representation on the compact metric space produces a Borel probability with those integrals. Countable uniform density and diagonal selection alone would give only a functional until that representation is applied.

</details>

<a id="weak-convergence-tightness-prokhorov-ex-5"></a>

### Exercise 5

Why does the compact-cube proof recover support in S?

<details><summary>Hint 1</summary>

Tight compact subsets have closed images in the cube.

</details>

<details><summary>Hint 2</summary>

Use their increasing countable union.

</details>

<details><summary>Full solution</summary>

Portmanteau gives each compact image high limit mass, and their union has mass one and lies in the embedded space. The inverse can be defined measurably on that Borel union, avoiding an assumption that the whole embedded image is closed.

</details>

<a id="weak-convergence-tightness-prokhorov-ex-6"></a>

### Exercise 6

How is a continuous test on one compact image approximated without assuming a global continuous extension?

<details><summary>Hint 1</summary>

Use an infimum of compact values plus a large multiple of distance.

</details>

<details><summary>Hint 2</summary>

Clip to its original bound.

</details>

<details><summary>Full solution</summary>

The infimum is Lipschitz by the triangle inequality. Uniform continuity controls nearby candidates and a large distance penalty excludes far candidates, making it uniformly close on the compact. Its bounded global form then works in the cube weak-convergence statement.

</details>

<a id="weak-convergence-tightness-prokhorov-ex-7"></a>

### Exercise 7

Why do bounded norm moments fail to prove tightness for coordinate unit-vector point masses in square-summable space?

<details><summary>Hint 1</summary>

Their pairwise distances stay separated.

</details>

<details><summary>Hint 2</summary>

A compact set cannot contain infinitely many of them.

</details>

<details><summary>Full solution</summary>

Total boundedness forbids infinitely many points with mutual distance square root two. Hence some point-mass law always lies outside every compact, although all norms equal one. The Euclidean compact-ball step is unavailable.

</details>

<a id="weak-convergence-tightness-prokhorov-ex-8"></a>

### Exercise 8

State the additional relation needed for Slutsky beyond two arbitrary marginal weak limits.

<details><summary>Hint 1</summary>

One coordinate must collapse to a constant in probability.

</details>

<details><summary>Hint 2</summary>

Otherwise the joint coupling can vary.

</details>

<details><summary>Full solution</summary>

The theorem uses convergence in probability of Y n to fixed c. It proves joint convergence to X paired with c without independence. Two nonconstant marginal weak limits alone do not determine sum or product laws.

</details>

<a id="weak-convergence-tightness-prokhorov-ex-9"></a>

### Exercise 9

Why does Cramer-Wold inspect every linear projection rather than just each coordinate?

<details><summary>Hint 1</summary>

Coordinate laws do not encode dependence.

</details>

<details><summary>Hint 2</summary>

A vector transform is specified at all arguments by all linear projections.

</details>

<details><summary>Full solution</summary>

All projections determine the joint characteristic function, which Gaussian smoothing identifies uniquely. Coordinates only give its values on the axes, permitting different dependence structures with the same marginals.

</details>

<a id="weak-convergence-tightness-prokhorov-ex-10"></a>

### Exercise 10

Does a Skorokhod-style coupling prove almost-sure convergence of the original variables?

<details><summary>Hint 1</summary>

The construction chooses a new shared uniform variable and inverse maps.

</details>

<details><summary>Hint 2</summary>

Marginal laws do not identify the original joint coupling.

</details>

<details><summary>Full solution</summary>

No. It supplies new variables with the same laws and a favorable almost-sure relation. Original variables can retain another coupling, such as independent identical nondegenerate marginals, that fails convergence in probability. The representation changes the common-space construction.

</details>
