
# Conditional Expectation via Radon-Nikodym

Conditioning on an event of positive probability is a ratio. Conditioning on a sigma-algebra is an integral identity, which remains meaningful when individual observation values have probability zero. This chapter constructs conditional expectation through Radon-Nikodym and proves its algebra, contraction and projection properties.

Required preparation is the [signed-measure Radon–Nikodym theorem](../measure-and-integration/signed-measures-radon-nikodym.md), integrable variables and sigma-algebras. The density theorem is the explicit measure-theory input. No quotient by the probability of a null observation event is used in the construction.

## The defining testing property

Let X be integrable and G a sub-sigma-algebra. A conditional expectation of X given G is a G-measurable integrable Y satisfying
$$\int_A Y\,dP=\int_A X\,dP\qquad(A\in G).$$
It is unique almost surely. If Y and Z both satisfy it, integrate their difference over the G-measurable set where Y exceeds Z. The positive gap must have zero expectation and therefore vanish almost surely; reverse their roles for equality.

The definition gives a version class, not a unique value at every point. On a null G event, a version may be changed whenever the modified function stays G-measurable. A formula comparing several conditional expectations should therefore be read almost surely, with a common full-probability set obtained for countably many comparisons.

The test on all G events also extends to bounded G-measurable multipliers by indicator linearity, simple approximation and dominated convergence. Conversely, those bounded tests include the indicator tests, so they give the same definition.

## Existence from a signed density

On G define the signed measure nu of A as expected X times its indicator. Countable additivity follows from integrability and dominated convergence over disjoint partial unions. Its total variation is finite, bounded by expected absolute X, and it is absolutely continuous with respect to the probability measure restricted to G.

Radon–Nikodym therefore gives an integrable G-measurable density Y with exactly the defining integrals. The previous uniqueness argument identifies it as conditional expectation. This proof works for every sub-sigma-algebra without requiring its atoms to have positive probability or a regular conditional density to be supplied.

For nonnegative integrable X, the density is nonnegative almost surely. Otherwise integrating over its negative-value set would give a negative result while the X integral is nonnegative. This order property will supply the basic inequalities.

## Linearity, order and contraction

Linearity follows by testing a linear combination of proposed densities on G events and using uniqueness. Positivity then implies order preservation. Applying it to minus absolute X at most X at most absolute X gives
$$|E[X\mid G]|\le E[|X|\mid G].$$
Integrate using the full-space test to obtain L one contraction. In particular, taking a conditional expectation cannot increase expected absolute value, though it can change the value on individual outcomes.

A G-measurable integrable X is already its own conditional expectation. Conditioning on the trivial sigma-algebra gives its constant expectation, whereas conditioning on the full sigma-algebra preserves it. These extremes explain conditioning as retaining a specified information class, rather than as an operation that must strictly change every variable.

For integrable X and an independent G, bounded G-event tests factor into expected X times event probability, so conditional expectation is the constant mean. The converse for all bounded functions of X characterizes independence by indicator tests. A constant conditional first moment alone is weaker, as a later example shows.

## The tower property with nested information

If G is contained in H, then conditioning the H-conditional expectation again on G returns the G-conditional expectation. Its candidate is G-measurable, and for every G event its integral equals the H-conditioned integral, which equals the X integral because that event also lies in H. Uniqueness proves
$$E[E[X\mid H]\mid G]=E[X\mid G].$$
Conditioning the G-measurable conditional expectation on the larger H leaves it unchanged too. The nesting is part of the statement. For two unrelated sigma-algebras, repeated conditional expectations need not commute or equal conditioning on their intersection.

Taking G trivial gives the law of total expectation. No new independence assumption is needed for this identity; it follows from the nested testing property.

## Pulling out measurable factors, including an unbounded one

For a bounded G-measurable factor Z, multiply the indicator tests by its simple approximations. Testing shows that Z times conditional expectation of X is conditional expectation of Z X. All products are integrable because Z is bounded.

Now suppose Z is real G-measurable and Z X is integrable, without assuming Z bounded. Truncate Z to zero outside absolute value at most n. The truncated products converge in L one to Z X by dominated convergence. L one contraction makes their conditional expectations converge in norm to conditional expectation of Z X. Their right sides converge almost surely to Z times conditional expectation of X.

Fatou bounds this product's absolute expectation by expected absolute Z X, so it is integrable. The norm and almost-sure limits must agree in probability, giving the unbounded pull-out formula under exactly the stated product-integrability condition. The argument does not assume integrability of the desired product before proving it.

## Conditional Jensen with a countable support-line proof

Let phi be a finite convex function on the real line and assume phi of X is integrable. At every rational point choose a supporting line, using the one-sided convex slope construction from the expectation chapter. Their supremum equals phi everywhere. Indeed, rational points approaching a fixed point have supporting slopes bounded on a compact neighborhood, and continuity of phi makes their support values approach phi at that point.

For each fixed support line, positivity and linearity of conditional expectation bound conditional phi of X below by that line evaluated at conditional X. Impose all countably many inequalities on one full-probability set and take the supremum. This proves
$$\phi(E[X\mid G])\le E[\phi(X)\mid G].$$
A supporting affine lower bound also controls the negative part of the left side, while the integrable upper bound controls its positive part. Thus its integrability is justified.

For p at least one, apply this to the pth absolute power when X lies in L p. Integrating gives L p contraction. For essentially bounded X, order gives the corresponding essential-supremum contraction directly. These statements concern norm control; conditional expectation is not generally a pointwise reduction of absolute value relative to the original realized X.

## Orthogonal projection in L two

For square-integrable X, conditional expectation Y belongs to L two by contraction. The residual X minus Y has zero integral against every bounded G-measurable multiplier by the testing property. Truncate any L two G-measurable multiplier and use Cauchy–Schwarz to pass to it. Hence the residual is orthogonal to all L two G-measurable variables.

For any such Z, expand the squared difference using Y and remove the zero cross term:
$$E(X-Z)^2=E(X-Y)^2+E(Y-Z)^2.$$
Thus conditional expectation is the unique almost-sure L two closest approximation using only G information. This projection proof does not require Gaussianity. Gaussian assumptions are needed only for particular explicit linear conditional formulas, not for the abstract projection property.

Taking Z equal to the constant expected X gives total variance decomposition. Conditional variance, defined as the conditional second moment minus the squared conditional mean, namely $E[X^2\mid G]-Y^2$, is nonnegative by Jensen. Its expectation is the residual mean square, and variance of Y supplies the remaining term.

### Worked example: a finite information partition

On four equally likely outcomes let X take values zero, two, four and ten, and let G reveal only whether the outcome belongs to the first pair or the last pair. Conditional expectation is one on the first atom and seven on the second, since the defining integral requires each atom's average.

The overall mean is four. Residual mean square is five, the conditional-mean variance is nine and original variance is fourteen. The two terms sum exactly. Values on any null partition atom could be assigned arbitrarily without changing the conditional expectation class; positive-probability atoms determine their averages.

## Factoring a real conditional expectation through an observation

If G is generated by an observation W, any real G-measurable variable can be represented as a measurable function of W. For a bounded nonnegative variable, approximate it increasingly by finite simple functions whose level sets lie in G. Each such level event is an inverse image of an observation event by definition of the generated sigma-algebra.

Choose representing simple functions on the observation space, disjointifying their sets if necessary; on the actual observation image they have the required values. Their pointwise limit where it exists, with a default value elsewhere, is measurable and gives the desired representation. Truncation and signed parts extend to real variables. This is the measurable-factorization or Doob–Dynkin lemma in the form needed here.

The function is not uniquely identified at observation values outside its probability support or on observation-null sets. Writing expected X given W equal to w is therefore a version statement, not a pointwise ratio valid at every w. Regular conditional probability kernels on standard Borel spaces are a further disintegration theorem; their existence is not required for the present RN construction of one conditional expectation.

### Worked example: a Gaussian noisy observation

Let X and noise Z be independent centred normals of positive variances a and b, and observe W equal to X plus Z. Set Y equal to a over a plus b times W. The residual X minus Y has covariance zero with W. Because the pair is jointly Gaussian, their transform factorizes and the residual is independent of W.

The residual is centred, so the defining G-event tests show expected X given W equals Y. Its residual variance is a b divided by a plus b. The linear formula uses the joint Gaussian law; merely knowing these covariances would prove linear least-squares optimality, not the full conditional expectation formula for an arbitrary non-Gaussian pair.

### Worked example: a constant conditional mean without independence

Let X be uniform on the interval from minus one to one and let G be generated by X squared. For every bounded measurable h, the integral of X times h of X squared is zero by symmetry. These bounded tests identify conditional expectation of X given G as zero.

Nevertheless X and X squared are dependent. The event X squared at most one quarter belongs to both generated sigma-algebras and has probability one half; independence would force it independent of itself, which is impossible for that probability. Constant conditional first moment does not replace full conditional-distribution factorization.

## Conditional expectations of one integrable variable form a UI family

Fix X in L one and allow G to range over any collection of sub-sigma-algebras. Write Y G for its conditional expectations. L one contraction bounds all their norms by expected absolute X. On the G event where absolute Y G exceeds K, Markov bounds probability by that norm over K.

Conditional absolute-value domination and the event testing property give expected absolute Y G on this event at most expected absolute X on that same event. The integral of a single L one variable is uniformly small on events of sufficiently small probability, by splitting its tail as in the UI chapter. Thus the bound tends to zero uniformly over G.

This proves uniform integrability of the whole conditional-expectation family. The result is stronger than bounded means and will provide the closed-martingale direction of the L one convergence theorem. It depends on all variables being conditional expectations of one fixed integrable terminal variable; arbitrary martingales with bounded first moments need not have that representation.

## Conditional dominated convergence has an almost-sure proof

Suppose X n converges almost surely to X and every absolute X n is bounded by one integrable Y. Fix the conditioning sigma-algebra G. Define Z n as the supremum of absolute X k minus X over k at least n. These measurable variables decrease to zero almost surely and are bounded by twice Y.

Their conditional expectations can be chosen decreasing, by positivity and a countable common exceptional set. Their limit has expectation zero: the ordinary dominated theorem makes expected Z n tend to zero, and monotone limit integration for the dominated conditional variables identifies the same limit expectation. Being nonnegative, that limit is zero almost surely.

For every k at least n, absolute conditional expectation of X k minus X is at most conditional Z n. The decreasing envelope therefore proves almost-sure convergence of the conditional expectations. Ordinary dominated convergence and L one contraction give norm convergence too. The common domination and fixed conditioning sigma-algebra are essential to this argument; convergence in probability alone supplies neither envelope nor conclusion.

## Exercises

<a id="conditional-expectation-radon-nikodym-ex-1"></a>

### Exercise 1

Prove uniqueness from the defining integral tests.

<details><summary>Hint 1</summary>

Use the event where one candidate exceeds the other.

</details>

<details><summary>Hint 2</summary>

A positive gap with zero integral vanishes almost surely.

</details>

<details><summary>Full solution</summary>

Both candidates are G-measurable, so that comparison event belongs to G. Their integrals there agree, forcing the positive difference to have zero integral. Reverse the comparison to obtain almost-sure equality.

</details>

<a id="conditional-expectation-radon-nikodym-ex-2"></a>

### Exercise 2

Identify the signed measure used in the existence proof.

<details><summary>Hint 1</summary>

Integrate X over G events.

</details>

<details><summary>Hint 2</summary>

Use absolute integrability for countable additivity and finite variation.

</details>

<details><summary>Full solution</summary>

Set $\nu(A)=E[X{\bf1}_A]$ for A in G. Its variation is bounded by expected absolute X and it vanishes on probability-null events. Radon–Nikodym with respect to restricted P gives the integrable G density satisfying all conditional-expectation tests.

</details>

<a id="conditional-expectation-radon-nikodym-ex-3"></a>

### Exercise 3

Why does the tower property require nested sigma-algebras?

<details><summary>Hint 1</summary>

A G test must also be an H test.

</details>

<details><summary>Hint 2</summary>

That is the step using inclusion.

</details>

<details><summary>Full solution</summary>

For G contained in H, every G-event integral of the H-conditioned variable equals its X integral. Conditioning again on G therefore has the correct tests. Without inclusion, that identification is not supplied, and the repeated operators need not commute.

</details>

<a id="conditional-expectation-radon-nikodym-ex-4"></a>

### Exercise 4

Prove L one contraction.

<details><summary>Hint 1</summary>

Use order on X between plus and minus absolute X.

</details>

<details><summary>Hint 2</summary>

Integrate the conditional absolute bound.

</details>

<details><summary>Full solution</summary>

Positivity gives absolute conditional X at most conditional absolute X. The full-space test preserves the latter’s expectation, so the norm is no larger than expected absolute X. This also controls conditional expectations of L one approximation errors.

</details>

<a id="conditional-expectation-radon-nikodym-ex-5"></a>

### Exercise 5

State sufficient hypotheses for an unbounded measurable factor to be pulled out.

<details><summary>Hint 1</summary>

The factor must be G-measurable and finite almost surely.

</details>

<details><summary>Hint 2</summary>

The product with X must be integrable.

</details>

<details><summary>Full solution</summary>

For X integrable, real G-measurable Z and integrable Z X, truncation plus L one contraction proves conditional Z X equals Z times conditional X. The proof also establishes integrability of that latter product, rather than assuming it silently.

</details>

<a id="conditional-expectation-radon-nikodym-ex-6"></a>

### Exercise 6

Why is a countable family of support lines useful in conditional Jensen?

<details><summary>Hint 1</summary>

Each affine comparison holds outside its own null set.

</details>

<details><summary>Hint 2</summary>

A countable union gives one common exceptional set.

</details>

<details><summary>Full solution</summary>

The rational-contact support lines recover the convex function through a countable supremum. Their conditional inequalities can all be imposed simultaneously almost surely. An arbitrary uncountable collection of null exceptions could not be united by the same argument.

</details>

<a id="conditional-expectation-radon-nikodym-ex-7"></a>

### Exercise 7

Derive the L two Pythagorean identity.

<details><summary>Hint 1</summary>

The residual is orthogonal to G-measurable square-integrable variables.

</details>

<details><summary>Hint 2</summary>

Expand around the conditional mean.

</details>

<details><summary>Full solution</summary>

The cross term between X minus Y and Y minus Z has expectation zero. The two remaining squares give the stated decomposition, proving closest approximation and uniqueness in L two.

</details>

<a id="conditional-expectation-radon-nikodym-ex-8"></a>

### Exercise 8

Why does the Gaussian noisy-observation formula use more than zero covariance?

<details><summary>Hint 1</summary>

The residual must be independent of the observed sigma-algebra to be conditionally centred.

</details>

<details><summary>Hint 2</summary>

Joint Gaussianity turns zero covariance into that independence.

</details>

<details><summary>Full solution</summary>

For a general pair, orthogonality proves only the best linear predictor. Joint Gaussian transforms factor when the covariance vanishes, giving independence and hence zero conditional residual mean. That extra law condition proves the full conditional expectation formula.

</details>

<a id="conditional-expectation-radon-nikodym-ex-9"></a>

### Exercise 9

Give a dependent pair with a constant conditional first moment.

<details><summary>Hint 1</summary>

Use a symmetric variable and its square.

</details>

<details><summary>Hint 2</summary>

Odd integrands vanish against every bounded function of the square.

</details>

<details><summary>Full solution</summary>

For uniform X on minus one to one, expected X given X squared is zero by symmetry. But X squared is a nonconstant function of X and their common event of squared magnitude at most one quarter has probability one half, excluding independence.

</details>

<a id="conditional-expectation-radon-nikodym-ex-10"></a>

### Exercise 10

Explain why conditional expectations of one fixed L one variable are uniformly integrable.

<details><summary>Hint 1</summary>

A large conditional-value event has uniformly small probability.

</details>

<details><summary>Hint 2</summary>

Its conditional absolute integral is bounded by the original variable’s integral on that event.

</details>

<details><summary>Full solution</summary>

Markov and contraction bound the event probability by expected absolute X over K. The defining tests and absolute domination bound its tail integral by that of X over the same event. Small-event continuity of the single integrable X makes this uniform bound vanish.

</details>
