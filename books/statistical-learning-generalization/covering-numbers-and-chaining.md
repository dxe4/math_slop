
# Covering Numbers and Chaining

An infinite family can be approximated at several resolutions rather than counted once. Chaining decomposes each function into progressively smaller increments and controls the random signed sum of those increments. This chapter proves a concrete empirical entropy bound with explicit constants. Its purpose is to show where the integral comes from, when it is finite and what the bound actually measures.

Preparation is the Rademacher chapter, finite-dimensional norm geometry and elementary integration. Throughout, the original function class is fixed before the iid observation sample. On a fixed sample assume its evaluation vectors are bounded. When a population theorem is invoked, retain the measurable-supremum and bounded-loss conditions already stated for Rademacher generalization.

## A sample metric and finite covers

For evaluation vectors v and w on n observations, define their empirical distance by
$$d_n(v,w)=\left\{\frac1n\sum_i(v_i-w_i)^2\right\}^{1/2}.$$
A radius-epsilon cover consists of finitely many evaluation vectors from the class such that every class vector is within epsilon of at least one of them. Let N of epsilon be the smallest possible number of such centers. On a bounded subset of finite-dimensional space, finite covers exist for every positive epsilon; one can place a finite grid over a bounding box. The logarithm of N is called metric entropy. Here it concerns empirical prediction distance, not Shannon entropy of a probability law.

The empirical distance can be zero for different functions that agree on the sample. Passing to their evaluation vectors identifies this harmless equivalence. It does not identify their population behavior. Covers in this metric can depend on the sample, because we are bounding the empirical complexity of the same fixed function class for each realized sample. This is different from using the data to redefine which functions belong to the class.

A packing has all distinct members more than epsilon apart. Any cover by epsilon-balls contains at most one member of a packing separated by more than twice epsilon. Conversely, a maximal epsilon-separated packing covers at radius epsilon: a point outside every ball could be added, contradicting maximality. Therefore packing and covering numbers satisfy the corresponding two-radius comparison. Bounded finite-dimensional sets give finite maximal packings by a volume or grid argument.

## A maximal inequality for signed increments

For a finite collection of vectors a with empirical norm at most r, define their normalized signed sums by one over n times their inner product with independent fair signs. Each has mean zero and moment-generating function bounded by the exponential of lambda squared r squared divided by twice n. This follows by multiplying the sign moment-generating functions and using the hyperbolic-cosine inequality.

For at most K vectors, the exponential of the maximum absolute signed sum is bounded by the sum of exponentials for the vectors and their negatives. Jensen then bounds its expectation by log twice K divided by lambda plus lambda r squared divided by twice n. Optimizing gives
$$E_\sigma\max_{a}|n^{-1}\sigma^\top a|
\le r\sqrt{\frac{2\log(2K)}n}.$$
This inequality is conditional on the actual vectors. It needs no probability law for how their centers were chosen from the fixed sample. It will be applied to the links between two adjacent covers, not to the original uncountable class directly.

## A complete dyadic chain

Let D be the diameter of the evaluation set. If D is zero, all vectors agree and empirical Rademacher complexity is zero, since their common signed sum has expectation zero. Assume D positive. Fix a base vector f zero and let epsilon j equal D times two to the minus j. At level zero use only the base vector, which covers the class at radius D. At every positive level choose a cover of size N of epsilon j and assign each function one center pi j within that radius.

For every positive integer J, telescope:
$$f=f_0+\sum_{j=1}^J(\pi_jf-\pi_{j-1}f)+(f-\pi_Jf).$$
The final residual contributes at most epsilon J to the normalized signed sum in absolute value by Cauchy–Schwarz, because the empirical norm of the sign vector is one. The base contributes zero after averaging signs. Each link has empirical norm at most epsilon j plus epsilon j minus one, equal to three epsilon j. The number of links is at most the product of the two adjacent cover sizes, regardless of whether every pair actually occurs.

A supremum of the sum is at most the sum of link suprema. Apply the maximal inequality at each level, and use monotonicity of covering numbers as radii decrease. With N j denoting N of epsilon j, we obtain the finite-chain bound
$$\widehat{\mathfrak R}_S(F)
\le\varepsilon_J+\frac6{\sqrt n}
\sum_{j=1}^J\varepsilon_j\sqrt{\log(2N_j)}.$$
The constant follows from bounding log of twice the product of adjacent cover sizes by twice log twice N j. The proof does not assume that links at different levels are independent; each expectation bound is added separately.

## Turning the sum into an entropy integral

Metric entropy grows as the radius shrinks. On the interval from epsilon j divided by two to epsilon j, the square root of log twice N of u is at least its value at epsilon j. The interval length is epsilon j divided by two. Thus each summand epsilon j times that value is at most twice the integral over this interval. The intervals across levels have disjoint interiors, giving
$$\widehat{\mathfrak R}_S(F)
\le\varepsilon_J+\frac{12}{\sqrt n}
\int_{\varepsilon_J/2}^{D}\sqrt{\log(2N(u))}\,du.$$
If the integral from zero to D is finite, let J increase without bound. The residual vanishes and monotone convergence of the nonnegative integrals yields the entropy integral bound with constant twelve.

A divergent integral does not mean infinite empirical complexity: bounded evaluation vectors already give a finite trivial bound. Keep a finite resolution instead. For any alpha strictly between zero and D, choose J with alpha divided by two less than epsilon J at most alpha. The proved inequality implies
$$\widehat{\mathfrak R}_S(F)
\le\alpha+\frac{12}{\sqrt n}
\int_{\alpha/4}^{D}\sqrt{\log(2N(u))}\,du.$$
This is the particular truncated chaining inequality established here. Its lower cutoff and constants come from the dyadic construction; quoting a different cutoff without adjustment would skip a comparison. Choosing alpha is a mathematical upper-bound optimization, not training on a new function class.

## Finite-dimensional balls have a geometric cover

Consider a Euclidean parameter ball of radius B in dimension d. A set of parameters separated by more than epsilon has disjoint open balls of radius epsilon divided by two around its members, all contained in the ball of radius B plus epsilon divided by two. Comparing Lebesgue volumes bounds the packing size by one plus twice B over epsilon to the power d. A maximal packing is an epsilon-cover. This proves
$$N(\varepsilon,B_2(B),\|\cdot\|_2)\le(1+2B/\varepsilon)^d.$$
Open boundaries have no volume effect. A maximal finite packing exists by the same cardinality bound and a greedy construction; no compactness assumption is being used to hide infinite cardinalities.

For linear scores with every input norm at most C, empirical score distance is at most C times parameter distance by Cauchy–Schwarz. Mapping the parameter cover through the score evaluation map yields a cover with radius multiplied by C. Thus the empirical covering number is at most one plus twice B C over epsilon to the power d. The metric used in the bound must be stated: a cover in coefficient distance is not automatically a cover in prediction distance without this operator inequality.

### Worked example: a finite dictionary

For M fixed bounded evaluation vectors, every positive-radius cover has size at most M. The integral bound is therefore at most twelve D times the square root of log twice M divided by n. This can be weaker than the direct finite-dictionary maximal inequality. Chaining is a general tool, not a promise to improve every previous constant. If many vectors cluster together, their covering count at coarse scales can be much smaller than M and the integral can exploit that geometry.

### Worked example: a parameter-ball estimate can be loose

For the linear score ball, diameter is at most twice B C and the covering logarithm grows at most like d times log one plus twice B C over radius. Its integral is finite: substituting radius equal to D times exp of minus t turns the small-radius endpoint into an exponentially weighted integral of a square root growing only like square root t. Jensen bounds that integral by a constant depending on d through its square root.

The resulting parameter-cover estimate has a square-root-d factor. The direct Hilbert dual-norm argument in the preceding chapter gives B C divided by square root n without that factor. There is no contradiction: both are upper bounds, and the coordinate-volume cover can be less sharp than the geometry of the signed linear supremum. A larger proof bound does not establish larger actual complexity.

### Worked example: an entropy exponent changes the rate

Suppose the empirical cover satisfies log twice N of u at most A times u to the minus p on the relevant range, with fixed positive A and p. For p below two, integrating u to the minus p over two has a finite zero endpoint, giving a bound of order inverse square root n. For p equal to two, the truncated integral is logarithmic; choosing alpha of order inverse square root n gives an upper order log n divided by square root n.

For p above two, the lower endpoint contributes a constant times alpha to the power one minus p over two. Choosing alpha of order n to the minus one over p balances that term with the residual, producing an upper order n to the minus one over p. These are consequences of the assumed entropy bound, not universal minimax rates. The constants include the diameter and entropy constants, and the chosen cutoff must lie below D for the displayed asymptotic choices.

## Returning to population generalization

Each chaining bound above is deterministic given the observed sample and the original class. It can therefore be substituted as an upper bound for empirical complexity in the proved empirical-complexity theorem, retaining its concentration term, range and failure probability. The sample-dependent nets do not consume another failure budget because their inequality held for every fixed sample under the stated geometric bounds.

A random empirical cover does not prove an unqualified population approximation theorem. Population distance requires the target law, and replacing it by empirical distance is itself a learning question. Nor does an upper cover count establish a matching lower bound or efficient construction of the optimal cover. The argument separates a geometric certificate for complexity from a computational implementation and from a minimax optimality claim.

## The empirical rank can replace ambient parameter dimension

A linear score cover can also be formed directly in the image of the design map. Its evaluation vectors lie in the column space of the observed design matrix, whose rank r may be smaller than the displayed coefficient dimension. With coefficient norm at most B and each input norm at most C, every evaluation vector has empirical norm at most B C. On that r-dimensional image subspace, the same separated-ball volume argument gives a cover count at most one plus twice B C over epsilon to the power r.

The centers may be chosen from the actual evaluation set by taking a maximal separated subset, so no parameter outside the original class is introduced. This is an empirical geometric improvement: the subspace and its rank are determined by the observed design, but the inequality holds for every design and the same fixed coefficient ball. If r is zero, all evaluation vectors vanish and empirical complexity is zero.

It would be incorrect to infer that population inputs lie in this observed subspace or that all future risks are zero. The population generalization theorem still includes its bounded-range concentration term and sampling assumptions. A rank-deficient realized design can omit directions that have positive population probability. Empirical geometry can tighten a valid certificate without identifying an unknown population support from finitely many rows. Covering and chaining turn multiscale empirical geometry into complexity bounds, with empirical rank sometimes reducing the geometric cost. The next chapter, Margins and Linear Classes, combines norm and input bounds with a positive margin to obtain prediction and shattering guarantees.

## Exercises

<a id="covering-numbers-and-chaining-ex-1"></a>

### Exercise 1

Prove the two-radius packing-to-cover comparison.

<details><summary>Hint 1</summary>

Two points in one epsilon-ball are at distance at most twice epsilon.

</details>

<details><summary>Hint 2</summary>

A more-than-two-epsilon packing cannot share a ball.

</details>

<details><summary>Full solution</summary>

Every cover ball contains at most one member of such a packing, so its cardinality cannot exceed the cover size. Conversely a maximal more-than-epsilon-separated packing covers at radius epsilon, because any uncovered point could be added. These statements use the specified strict separation convention.

</details>

<a id="covering-numbers-and-chaining-ex-2"></a>

### Exercise 2

Why can two functions have zero empirical distance but different population risk?

<details><summary>Hint 1</summary>

They may agree at every sampled input.

</details>

<details><summary>Hint 2</summary>

The target law can place mass elsewhere.

</details>

<details><summary>Full solution</summary>

Empirical distance uses only finitely many evaluations. Two functions equal there but different on an unsampled positive-probability region have zero empirical distance and may have different risks. A population theorem needs the complexity and sampling arguments, not this empirical equality alone.

</details>

<a id="covering-numbers-and-chaining-ex-3"></a>

### Exercise 3

Bound the norm of a dyadic link.

<details><summary>Hint 1</summary>

Both adjacent centers approximate the same function.

</details>

<details><summary>Hint 2</summary>

Add their two approximation distances.

</details>

<details><summary>Full solution</summary>

$d_n(\pi_j f,\pi_{j-1}f)\le\varepsilon_j+\varepsilon_{j-1}=3\varepsilon_j$. At level zero the chosen base has radius D, so the same relation holds for the first link.

</details>

<a id="covering-numbers-and-chaining-ex-4"></a>

### Exercise 4

Why does dependence among links at different resolutions not invalidate the proof?

<details><summary>Hint 1</summary>

The expected supremum was bounded by a sum of expected maxima.

</details>

<details><summary>Hint 2</summary>

Linearity of expectation does not need independence.

</details>

<details><summary>Full solution</summary>

Each link maximum is bounded for the same sign vector, but the sum-of-suprema inequality and expectation linearity remain valid regardless of dependence across levels. Independence of the signs within one signed sum is used in the maximal inequality; independence between levels is not assumed.

</details>

<a id="covering-numbers-and-chaining-ex-5"></a>

### Exercise 5

Derive the integral comparison for one dyadic summand.

<details><summary>Hint 1</summary>

Cover counts increase as radius decreases.

</details>

<details><summary>Hint 2</summary>

Use an interval of length epsilon j divided by two.

</details>

<details><summary>Full solution</summary>

For $u\in[\varepsilon_j/2,\varepsilon_j]$, $\sqrt{\log(2N(u))}\ge\sqrt{\log(2N(\varepsilon_j))}$. Multiplying by the interval length shows the integral is at least half the corresponding dyadic summand. Summing disjoint intervals gives the factor two.

</details>

<a id="covering-numbers-and-chaining-ex-6"></a>

### Exercise 6

Explain the alpha over four lower endpoint in the truncated inequality.

<details><summary>Hint 1</summary>

Choose a dyadic radius between alpha over two and alpha.

</details>

<details><summary>Hint 2</summary>

The integral begins at half that dyadic radius.

</details>

<details><summary>Full solution</summary>

The finite-chain formula begins at $\varepsilon_J/2$, which exceeds $\alpha/4$ for the chosen J. Enlarging the integration interval downward to alpha over four only increases its nonnegative integral, and the residual is at most alpha. This proves the stated truncation without changing constants silently.

</details>

<a id="covering-numbers-and-chaining-ex-7"></a>

### Exercise 7

Prove the Euclidean ball cover count by volumes.

<details><summary>Hint 1</summary>

Place disjoint epsilon over two balls around separated centers.

</details>

<details><summary>Hint 2</summary>

They lie in the ball with radius B plus epsilon over two.

</details>

<details><summary>Full solution</summary>

Volume scales as radius to the d. If K centers are more than epsilon apart, $K(\varepsilon/2)^d\le(B+\varepsilon/2)^d$, so $K\le(1+2B/\varepsilon)^d$. A maximal such packing is an epsilon-cover, giving the covering bound.

</details>

<a id="covering-numbers-and-chaining-ex-8"></a>

### Exercise 8

What does a divergent zero-cutoff entropy integral prove about empirical complexity?

<details><summary>Hint 1</summary>

The proved truncated bound still has a finite residual.

</details>

<details><summary>Hint 2</summary>

Bounded evaluation vectors already give a finite signed supremum.

</details>

<details><summary>Full solution</summary>

It proves only that this particular untruncated integral certificate is unavailable. It does not prove infinite complexity or impossibility of learning. Keeping a positive cutoff can yield a finite useful rate, and another geometric argument may improve the bound.

</details>

<a id="covering-numbers-and-chaining-ex-9"></a>

### Exercise 9

Derive the order for an entropy exponent p greater than two.

<details><summary>Hint 1</summary>

Integrate u to the minus p over two from a positive cutoff.

</details>

<details><summary>Hint 2</summary>

Balance the cutoff with its resulting lower-endpoint term.

</details>

<details><summary>Full solution</summary>

The integral is bounded in order by $\alpha^{1-p/2}$ plus a diameter-dependent constant. Multiplication by $n^{-1/2}$ and choice $\alpha\asymp n^{-1/p}$ make both residual and leading integral contribution of order $n^{-1/p}$. This is an upper bound under the assumed entropy inequality, not a lower or optimality theorem.

</details>

<a id="covering-numbers-and-chaining-ex-10"></a>

### Exercise 10

Why are sample-dependent covers allowed while arbitrary sample-dependent function classes need another theorem?

<details><summary>Hint 1</summary>

The geometric bound is conditional and deterministic for each sample.

</details>

<details><summary>Hint 2</summary>

The population theorem still concerns the original fixed class.

</details>

<details><summary>Full solution</summary>

A cover approximates the evaluations of the same fixed class and gives a valid empirical-complexity upper bound for every sample. Redefining the class after inspecting labels changes the supremum to which the population theorem applied. The former is a proof device inside a fixed-class theorem; the latter changes its statistical object.

</details>
