var e=`---
parent_id: book-probability-theory-measure-martingales
chapter_id: expectation-as-an-integral
title: "Expectation as an Integral"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Expectation as an Integral

Expectation is integration against a probability measure. Its basic rules come from measure theory, while probability adds pushforward laws, independence and moment comparisons on a space of total mass one. This chapter develops those connections with the hypotheses that make signed operations legitimate.

The [L3 expectation chapter](../probability-models-proofs/expectation-integration-and-moments.md) remains the first treatment. Here the Lebesgue integral, monotone convergence, Fatou and Tonelli are inputs from Measure and Integration, and all additional probability deductions are proved. The retained real-analysis product-measure chapter supplies another earlier route; its source and original exercise identities are unchanged.

## Positive, extended and integrable expectations

For a nonnegative measurable variable, expectation is its Lebesgue integral and can be infinite. For a signed variable, separate positive and negative parts. A finite expectation requires both parts to have finite integral, equivalently finite expectation of absolute value. An extended signed expectation can be defined if only one part is infinite; infinity minus infinity remains undefined.

Finite expectation is therefore a mathematical condition, not an assumption that a random variable takes only finite pointwise values. A real-valued variable can be finite everywhere yet have infinite mean. Conversely, a function that is infinite only on a measurable null set has the same nonnegative integral as its finite almost-everywhere version.

When random variables are identified almost surely, integrable variables form the space L one with norm expected absolute value. The expectation map is linear and has absolute value at most that norm by the integral triangle inequality. Its operator norm is exactly one because a constant-one variable attains the bound. It is not an isometry: a fair sign has norm one but expectation zero.

## The transfer theorem is a pushforward identity

Let X be a random variable into a measurable space, with law mu. For an indicator of a measurable set, its expectation after composition with X equals mu of that set by definition of pushforward. Linearity proves the same formula for nonnegative simple functions. Approximate a nonnegative measurable function increasingly by simple ones and apply monotone convergence on both spaces. This proves
$$E g(X)=\\int g\\,d\\mu$$
for nonnegative g, allowing infinity. Apply it to absolute value and then positive and negative parts for integrable signed g.

Thus a density formula and a discrete weighted sum are two representations of the same measure integral. No density is presumed for an arbitrary law. A variable with atoms and a continuous component needs both parts of its law, rather than inserting a nonexistent ordinary density into the formula.

The proof also shows that equal laws give equal expectations of every bounded measurable test function. Conversely, equality for all indicator tests determines the law. Testing only a few moments is much weaker; many distributions share a mean and variance while differing in tails and support.

## Independent products and the absolute-integrability check

Let X and Y be independent, and let g of X and h of Y be individually integrable. Their joint law is the product of their marginal laws. Tonelli applied to the nonnegative product of their absolute values gives its expectation equal to the product of their finite absolute expectations. Thus the signed product is integrable. Fubini can now factor its expectation:
$$E[g(X)h(Y)]=Eg(X)\\,Eh(Y).$$
The absolute-value step is what licenses the signed formula. Independent variables with undefined means cannot be inserted into it simply because their algebraic product looks convenient.

For a finite mutually independent family the same argument iterates. Pairwise independence suffices for the pairwise products that enter a variance-of-a-sum expansion, but not for arbitrary products of three or more variables. The exclusive-or example in the previous chapter shows why higher joint factorization is a distinct condition.

Without independence, even individually integrable variables can have a nonintegrable product. Let both equal the same positive variable with finite first moment and infinite second moment, as the Pareto example below allows. Their product then has infinite mean. Independence is doing integrability work as well as factorization work.

## Tail integrals expose moment requirements

For a nonnegative real number x and positive p, integrate p times t to the p minus one from zero to x to obtain x to the p. Substitute absolute X and use Tonelli on the indicator that t is less than absolute X:
$$E|X|^p=\\int_0^\\infty p t^{p-1}P(|X|>t)\\,dt.$$
Both sides can be infinite. For a nonnegative variable truncated at K, the same argument with p one gives expected minimum of X and K as the tail integral from zero to K.

These identities turn tail decay into exact integrability statements. Markov bounds work in the other direction: any finite pth moment gives a tail upper bound by that moment divided by t to the p. A tail upper bound at one threshold alone does not determine a moment, because the integral uses the entire tail range.

### Worked example: Pareto moments have a sharp threshold

Let X have tail one for t below one and t to the minus alpha above one, with alpha positive. Its pth moment equals one plus the integral of p times t to the p minus alpha minus one over t at least one. For p below alpha this evaluates to alpha divided by alpha minus p. At p equal to alpha the integral is harmonic in scale and diverges; for larger p it diverges faster.

Choosing alpha between one and two gives a finite mean and infinite second moment. Two independent copies still have an integrable product by the factorization proof, while squaring one copy is not integrable. Equal marginal laws therefore do not settle product moments without the coupling.

## Holder and moment monotonicity

For conjugate exponents p and q above one, Young's inequality says a b is at most a to the p divided by p plus b to the q divided by q for nonnegative a and b. One proof minimizes the convex function a to the p divided by p minus a b over a; its minimizer gives the negative of b to the q divided by q.

Normalize absolute X and Y by their finite positive L p and L q norms, apply Young pointwise and integrate. The normalised powers each have expectation one, proving
$$E|XY|\\le\\|X\\|_p\\|Y\\|_q.$$
Zero norms mean an almost-surely zero variable and are handled directly. Infinite norms give a trivial extended bound. At p and q equal to two this is Cauchy–Schwarz.

Because probability has total mass one, applying Holder to absolute X to the r and the constant one shows that L p norm bounds L r norm when zero less than r less than p. The normalisation by unit total mass is material; the same unqualified monotonicity fails on an arbitrary infinite-measure space.

For an event A, Holder also gives expected absolute X on A at most its L p norm times probability A to the one minus one over p. Uniformly bounded pth moments with p above one therefore control integrals over small-probability sets. The uniform-integrability chapter develops exactly why this strengthens a mere bound on first moments.

## Jensen from a supporting line

Let X be integrable, with values in an open interval and expectation inside that interval. Let phi be finite and convex there. At the expectation m, convexity of secant slopes gives a supporting slope a: choose a value between the left and right slope limits. Then phi of x is at least phi of m plus a times x minus m for every x in the interval.

The affine lower bound has integrable absolute value, so the negative part of phi of X is integrable; its expectation is well-defined even if the positive part is infinite. Integrating the support inequality yields phi of the expectation at most expectation of phi. If phi is strictly convex and the latter expectation finite, equality requires X constant almost surely: the nonnegative support gap is positive at every other point, so positive mass away from m gives a strictly positive integral.

This proof names the domain and interior condition supporting a finite slope. Endpoint cases can often be handled separately or by limits, but are not obtained by assuming a nonexistent derivative. Differentiability of the convex function was not required.

## Mean-square projection onto constants

For a square-integrable variable, expand squared error around its expectation. The cross term vanishes because the centred variable has mean zero:
$$E(X-a)^2=\\operatorname{Var}(X)+(EX-a)^2.$$
Thus the expectation uniquely minimizes squared error among constant predictions, and variance is the corresponding minimum. This is an L two projection statement, distinct from an assertion that the expectation is a possible realized value.

### Worked example: shared latent variation creates covariance

Let a latent real variable M have finite second moment, and let two independent mean-zero errors of variance v be independent of M. Define two readings as M plus each error. Their means equal expected M. Expanding the centred product and factoring the independent cross terms shows their covariance is variance of M.

Each reading has variance variance of M plus v. Averaging the readings halves the independent-error variance but retains the entire latent variance. A pair of similar marginal summaries therefore does not make repeated readings independent; their joint construction determines whether averaging removes a source of variation.

## Nonnegative sums and almost-sure finiteness

Tonelli gives expectation of a countable nonnegative sum as the sum of expectations, including infinity. If that sum is finite, the random sum is finite almost surely: a nonnegative variable infinite on a positive-probability set has infinite integral.

The converse is false. A finite almost-sure value need not be integrable, and a divergent sum of nonnegative expectations does not alone prove that the random sum is infinite almost surely. Independence can support additional conclusions, but is absent from this general integral identity.

### Worked example: a finite count with infinite expectation

Let U be uniform on the open unit interval and sum the indicators of U at most one over n over all positive n. For every U positive, only finitely many terms are one; the count is the integer part of one over U. Its expectation is nevertheless the harmonic sum of one over n, which diverges by Tonelli.

All the indicators are dependent functions of one shared variable. This explains why a later independent-event Borel–Cantelli theorem can give a stronger conclusion under a divergent probability sum without contradicting the example. The integral identity itself never supplied independence.

## L one completeness is a probability convergence tool

Take an L one Cauchy sequence. Choose a subsequence whose successive L one distances have a summable geometric bound. Tonelli makes the sum of absolute successive differences finite almost surely and integrable. The subsequence therefore converges almost surely to a finite limit after fixing one initial integrable representative.

Its remaining-tail absolute difference has expectation bounded by the corresponding geometric tail sum, by Fatou or the pointwise summation bound. Thus the subsequence converges in L one. The original Cauchy property extends convergence to the full sequence by the triangle inequality. This proves completeness of L one on any probability space.

The construction uses only countably many representatives and null exceptions, so they can be combined on one full-probability set. It is not an uncountable version-selection theorem. Later martingale and conditional-expectation arguments use this complete normed space to pass from integral estimates to an actual limiting random variable.

## A nonnegative zero integral identifies an almost-sure equality

If a nonnegative measurable variable Z has expectation zero, then for every positive integer k its event of being at least one over k has probability at most k times that expectation. Each such event is null. Their countable union is the event Z positive, so Z vanishes almost surely. The converse follows directly by null-set invariance of integration.

Consequently two integrable variables with expected absolute difference zero represent the same L one element. More generally, if X is at most Y almost surely and their finite expectations agree, apply the result to Y minus X to prove equality almost surely. The order hypothesis is essential: equal means of two unrelated signed variables do not force their difference to be zero.

This argument explains a recurring proof pattern. A convexity, projection or measure-density calculation produces a nonnegative gap; showing its integral is zero then identifies the equality case outside a measurable null set. It proves an almost-sure relation, not pointwise equality on every representative. Keeping that distinction avoids turning a norm identity into an assertion about arbitrary values assigned on exceptional outcomes.

## Exercises

<a id="expectation-as-an-integral-ex-1"></a>

### Exercise 1

Prove the transfer theorem for a nonnegative measurable g.

<details><summary>Hint 1</summary>

Start with an indicator and its pushforward definition.

</details>

<details><summary>Hint 2</summary>

Use simple approximation and monotone convergence.

</details>

<details><summary>Full solution</summary>

Indicators give the law definition, finite nonnegative combinations give simple functions and increasing simple approximations give all nonnegative g by monotone convergence on both spaces. Integrable signed g follows by positive and negative parts after checking absolute integrability.

</details>

<a id="expectation-as-an-integral-ex-2"></a>

### Exercise 2

Why are individual absolute moments checked before factoring an independent signed product?

<details><summary>Hint 1</summary>

Tonelli can first handle the nonnegative absolute product.

</details>

<details><summary>Hint 2</summary>

Fubini then permits signs.

</details>

<details><summary>Full solution</summary>

Their absolute product expectation equals the product of two finite absolute expectations, so it is integrable. Signed Fubini now gives factorization. Skipping that step risks an undefined subtraction of infinite positive and negative parts.

</details>

<a id="expectation-as-an-integral-ex-3"></a>

### Exercise 3

Use the Pareto example to distinguish an independent product from a square.

<details><summary>Hint 1</summary>

Choose alpha strictly between one and two.

</details>

<details><summary>Hint 2</summary>

The first moment is finite and the second infinite.

</details>

<details><summary>Full solution</summary>

Two independent copies have finite product expectation equal to the square of their finite mean. The square of one copy has infinite expectation. Both pairs have the same individual marginal laws, so the distinction is entirely in their dependence.

</details>

<a id="expectation-as-an-integral-ex-4"></a>

### Exercise 4

Derive the tail integral for a positive pth moment.

<details><summary>Hint 1</summary>

Express a scalar power as an integral of indicators.

</details>

<details><summary>Hint 2</summary>

Apply Tonelli before assuming finiteness.

</details>

<details><summary>Full solution</summary>

$|X|^p=\\int_0^\\infty pt^{p-1}{\\bf1}_{\\{|X|>t\\}}dt$ pointwise. Tonelli exchanges nonnegative expectation and integration, producing the displayed formula with possible infinite value.

</details>

<a id="expectation-as-an-integral-ex-5"></a>

### Exercise 5

Prove the event form of Holder.

<details><summary>Hint 1</summary>

Use the second variable equal to an event indicator.

</details>

<details><summary>Hint 2</summary>

Its L q norm is probability to the one over q.

</details>

<details><summary>Full solution</summary>

Holder gives $E[|X|{\\bf1}_A]\\le\\|X\\|_p\\|{\\bf1}_A\\|_q=\\|X\\|_pP(A)^{1-1/p}$. The p above one hypothesis provides a positive power controlling small event probabilities.

</details>

<a id="expectation-as-an-integral-ex-6"></a>

### Exercise 6

Explain the strict-convex equality condition in Jensen.

<details><summary>Hint 1</summary>

Subtract a supporting affine function at the mean.

</details>

<details><summary>Hint 2</summary>

A nonnegative nonzero gap has positive integral.

</details>

<details><summary>Full solution</summary>

For strict convexity the support line touches only at the mean. Equality of expectations forces the nonnegative support gap to vanish almost surely, hence X equals its mean almost surely. Finite expectation of the convex function is included in this equality argument.

</details>

<a id="expectation-as-an-integral-ex-7"></a>

### Exercise 7

Show that finite expectation of a nonnegative series implies almost-sure finiteness.

<details><summary>Hint 1</summary>

Its sum is a nonnegative extended random variable.

</details>

<details><summary>Hint 2</summary>

Positive probability of infinity forces infinite integral.

</details>

<details><summary>Full solution</summary>

If the sum were infinite on an event of positive probability, every finite lower truncation would have expectation at least its truncation height times that probability. Letting the height grow contradicts finite expectation.

</details>

<a id="expectation-as-an-integral-ex-8"></a>

### Exercise 8

Why does the uniform-variable indicator example not satisfy an independent divergent-event theorem?

<details><summary>Hint 1</summary>

Every event is determined by the same U.

</details>

<details><summary>Hint 2</summary>

The events are nested and strongly dependent.

</details>

<details><summary>Full solution</summary>

The event U at most one over n decreases with n, so later occurrences impose earlier ones. For positive U only finitely many occur, even though their probabilities sum harmonically. Independence is missing; Tonelli remains valid and gives infinite expected finite count.

</details>

<a id="expectation-as-an-integral-ex-9"></a>

### Exercise 9

Prove variance is the minimum mean-square error among constants.

<details><summary>Hint 1</summary>

Expand about EX.

</details>

<details><summary>Hint 2</summary>

The centred cross term has expectation zero.

</details>

<details><summary>Full solution</summary>

$E(X-a)^2=E(X-EX)^2+(EX-a)^2$. The second term is minimized uniquely at a equal to EX, proving the variance identity and the constant-prediction interpretation under square integrability.

</details>

<a id="expectation-as-an-integral-ex-10"></a>

### Exercise 10

Give the decisive step in L one completeness.

<details><summary>Hint 1</summary>

Choose a subsequence with summable expected successive differences.

</details>

<details><summary>Hint 2</summary>

Use Tonelli to obtain a finite pointwise total variation almost surely.

</details>

<details><summary>Full solution</summary>

The sum of successive absolute differences is integrable, so finite almost surely. This makes the subsequence Cauchy pointwise and supplies an integrable tail bound for L one convergence. The original norm-Cauchy property then transfers the limit to the full sequence.

</details>
`;export{e as default};