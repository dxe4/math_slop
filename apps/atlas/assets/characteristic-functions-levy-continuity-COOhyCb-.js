var e=`---
parent_id: book-probability-theory-measure-martingales
chapter_id: characteristic-functions-levy-continuity
title: "Characteristic Functions and Levy Continuity"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Characteristic Functions and Levy Continuity

Characteristic functions encode probability laws using bounded complex exponentials. Their usefulness in limit theory comes from a continuity theorem, not merely from the convenience of multiplying transforms. This chapter proves uniqueness and Levy continuity on the real line, including the tightness and subsequence steps needed for the converse.

The L3 [characteristic-function chapter](../probability-models-proofs/generating-transforms-and-characteristic-functions.md) remains an earlier route. Preparation here is product integration, distribution-function uniqueness, dominated convergence and elementary real compactness. Finite Borel probability regularity was proved in the extension chapter. Weak convergence means convergence of integrals of every bounded continuous real function; complex functions are handled by their two parts.

## Basic transform operations

Define phi of t as expected exp of i t X. The integrand has modulus one, so every real-valued random variable has a characteristic function without moment assumptions. Its value at zero is one, its modulus is at most one and its value at negative t is the conjugate of its value at t.

Dominated convergence proves continuity at every real t. A shift by b multiplies the function by exp of i t b, and multiplication of X by a replaces t with a t. Independent sums have product transforms by the independent integrable-product theorem. Independence is the joint-law input; separate marginal descriptions alone do not license that product.

If a finite kth absolute moment exists, repeated differentiation under the integral gives derivatives through order k as expectations of the corresponding powers of i X times the exponential. A difference quotient is dominated by absolute X at the first step, and higher steps use the higher moments. The transform itself exists when none of those derivatives is justified.

## Gaussian smoothing gives a density with a Fourier formula

The standard normal characteristic function is exp of minus t squared divided by two. One direct proof differentiates its absolutely convergent integral and integrates the derivative of the Gaussian density by parts. The resulting differential equation is phi prime equal to minus t phi, with value one at zero; boundary terms vanish because the Gaussian density decays faster than the linear factor.

Using the same Gaussian integral after rescaling gives its kernel representation. Consequently, if Z is an independent standard normal and sigma is positive, X plus sigma Z has density
$$p_\\sigma(y)=\\frac1{2\\pi}\\int_{\\mathbb R}
e^{-ity}\\varphi_X(t)e^{-\\sigma^2t^2/2}\\,dt.$$
To prove this, first condition through the product law to express the density as the average Gaussian kernel centred at X. Substitute the Gaussian kernel integral and use Fubini; its absolute integrability follows from the integrable Gaussian frequency factor and the unit modulus of the remaining exponentials.

This derivation proves the formula used here rather than appealing to a general Fourier inversion theorem for arbitrary densities. Smoothing supplies the missing frequency integrability, so no ordinary density of X was assumed.

## A characteristic function determines its law

If two variables have equal transforms, their smoothed densities above agree for every positive sigma. Couple each with an independent standard normal. As sigma decreases to zero, the perturbed variable tends almost surely to the original variable on that product space.

For any bounded continuous g, dominated convergence makes its smoothed expectation tend to the original expectation. Equal smoothed laws therefore imply equal bounded-continuous expectations for the two original laws. To recover half-line probabilities, approximate the indicator of a closed lower half-line by continuous functions equal to one below its endpoint and decreasing linearly to zero over an interval of width one over m. Dominated convergence gives equality of all half-line probabilities. The first chapter's uniqueness theorem identifies the full laws.

This proof does not require finite variance, a density or an existing transform derivative. Equal moments, when they exist, are not being substituted for equal characteristic functions.

## A transform bound controls escape of probability mass

For a positive a, integrate the real transform over the interval from minus a to a. Bounded Fubini gives
$$\\frac1{2a}\\int_{-a}^a\\{1-\\operatorname{Re}\\varphi_X(t)\\}\\,dt
=E\\left[1-\\frac{\\sin(aX)}{aX}\\right],$$
using value one for the ratio at zero. If absolute a X exceeds two, the ratio is at most one half in absolute value, so the bracket is at least one half. Therefore
$$P(|X|>2/a)\\le\\frac1a\\int_{-a}^a
\\{1-\\operatorname{Re}\\varphi_X(t)\\}\\,dt.$$
The estimate is one reason continuity near transform zero is decisive.

Suppose characteristic functions converge pointwise to phi, with phi continuous at zero. Their common value one at zero gives phi zero equal to one. Dominated convergence passes the integral bound to a limiting upper bound over the sequence. By continuity, that upper bound tends to zero as a decreases. Every finite collection of initial laws is tight individually by probability continuity on expanding bounded intervals. Together these facts prove tightness of the full sequence: for each positive epsilon one bounded interval contains all but epsilon probability under every law.

## A real-line tightness subsequence lemma

For a tight sequence of laws, enumerate rational numbers and successively choose subsequences on which each distribution-function value converges. A diagonal subsequence has limits g on all rationals, still nondecreasing. Define F at a real x as the infimum of g of rational q strictly above x.

This function is nondecreasing and right-continuous. For right continuity, if x m decreases to x, any fixed rational q above x eventually lies above x m, bounding the limiting values by g of q; take the infimum. Tightness gives its limits zero and one at the two infinities, by rational endpoints of common high-mass intervals.

At a continuity point x of F, rational points below and above x squeeze the selected distribution functions to F of x. More explicitly, the supremum of g at rationals below x equals the left limit of F; its infimum above x is F itself. Their equality at continuity forces the squeeze. The Lebesgue-Stieltjes probability construction from measure theory supplies the law with distribution function F.

Such distribution-function convergence implies bounded-continuous expectation convergence. Choose a large interval with continuity endpoints and small limiting outside mass. The selected laws eventually have comparably small tails. Uniform continuity of a bounded continuous function on that interval permits a finite step approximation with continuity endpoints. Cell probabilities converge by distribution-function differences, while the tail error is bounded by the function bound times the small mass. Let the step approximation and tail errors decrease. This proves the weakly convergent subsequence lemma on the real line.

The proof uses tightness to preserve total mass. A diagonal limit without tightness can have the wrong tail limits and fail to be a probability distribution.

## Levy's continuity theorem with both directions

If laws converge weakly to a probability law, their characteristic functions converge pointwise because sine and cosine are bounded continuous. The limiting characteristic function is continuous at zero by the basic dominated-convergence argument.

Conversely, suppose transforms converge pointwise to a function continuous at zero. The transform estimate proves tightness. The real-line subsequence lemma gives a weakly convergent further subsequence from any subsequence. Its transform must equal the given pointwise limit. Uniqueness of characteristic functions makes every such limiting law the same probability law.

The whole sequence then converges weakly to that law. Otherwise some bounded continuous function would have an expectation discrepancy bounded away from zero along a subsequence; its weakly convergent further subsequence would contradict that discrepancy. This proves both existence of a law with the limiting transform and convergence to it. Neither fact was assumed in the converse.

The theorem is an observation-law statement. It does not construct an almost-sure coupling of the original variables or identify their dependence on a common probability space. A separate representation theorem would be needed for that stronger conclusion.

### Worked example: normalized fair signs

For independent fair signs, the transform of their sum divided by square root n is cosine of t over square root n raised to the n. At each fixed t, Taylor expansion near zero gives log cosine u equal to minus u squared over two plus a remainder of order u to the fourth. The transform therefore tends to exp of minus t squared over two.

That limit is continuous at zero and is the standard normal transform, so Levy gives the fair-sign central limit theorem. The expansion is used only for sufficiently large n at a fixed t, where cosine is positive. No logarithm of a negative cosine is introduced. The later triangular-array chapter extends this method to a general Lindeberg condition.

### Worked example: rare Bernoulli sums

For n at least lambda, sum n independent Bernoulli variables with success probability lambda over n, where lambda is fixed nonnegative. Their transform is one plus lambda over n times exp of i t minus one, raised to n. It tends to exp of lambda times exp of i t minus one.

Expanding the Poisson probability series identifies this as the transform of a Poisson law of mean lambda, continuous at zero. Levy proves the distributional limit. At lambda zero every variable is zero, which is included without an interior-parameter approximation.

### Worked example: a discontinuous limit signals lost tightness

A uniform variable on the interval from minus n to n has transform sine of n t divided by n t, with value one at zero. Pointwise, it tends to zero at every nonzero t and remains one at zero. The limiting function is discontinuous at zero.

The laws have no weak probability limit: every fixed bounded interval receives probability tending to zero, so they are not tight. This is why merely finding a pointwise transform limit is insufficient. The continuity hypothesis excludes exactly this escape-of-mass obstruction in the theorem.

## Multivariate use and the scope of linear projections

For a real vector, define its transform at t by the expectation of exp of i times its inner product with t. Gaussian smoothing and the same compactness ideas give a multivariate version. This chapter's full compactness proof was on the real line; a general finite-dimensional weak-compactness theorem is developed in the next chapter.

A scalar linear projection has transform equal to the vector transform along its corresponding line. Thus linear projections connect multivariate laws to scalar transform calculations, but marginal coordinates alone are not enough: they inspect only the coordinate axes, not every linear combination. A joint Gaussian assertion or an independence assertion remains a separate hypothesis.

The distinction will matter in multivariate central limits, Gaussian vectors and Brownian finite-dimensional laws. Transform algebra is powerful because it records the actual joint law, not because it replaces the need to specify one.

## Fixed Gaussian smoothing upgrades the law comparison to total variation

Suppose the laws converge under Levy's theorem and fix a positive smoothing scale sigma. The Fourier density formula has an integrable Gaussian majorant independent of n. Pointwise transform convergence and dominated convergence therefore give pointwise convergence of the smoothed densities at every spatial point.

Each smoothed density integrates to one, as does the limiting smoothed density. Scheffe's lemma from the preceding convergence chapter makes the density convergence L one, and hence makes the smoothed laws converge in total variation. This is a stronger conclusion for this fixed smoothing operation than weak convergence of the unsmoothed laws.

It is not uniform over scales shrinking with n. Take point masses at one over n converging weakly to the point mass at zero, and smooth each by normal noise of standard deviation one over n squared. The event of exceeding one over two n has probability tending to one under the first smoothed law and zero under the second. In standardized normal units the two thresholds are minus n over two and plus n over two, whose tail probabilities tend to zero by a second-moment bound. Their total variation therefore tends to one.

Thus weak convergence, fixed smoothing and a joint shrinking-scale limit are distinct statements. The proved Fourier domination used a single integrable frequency Gaussian; a changing scale removes that common majorant. This example identifies precisely the missing uniformity rather than declaring every smoothed comparison automatically close.

## Exercises

<a id="characteristic-functions-levy-continuity-ex-1"></a>

### Exercise 1

Prove continuity of a characteristic function without moment assumptions.

<details><summary>Hint 1</summary>

Its exponential integrands converge pointwise as t varies.

</details>

<details><summary>Hint 2</summary>

Their absolute values are uniformly one.

</details>

<details><summary>Full solution</summary>

Dominated convergence applies separately to real and imaginary parts, giving continuity at every t. No factor of absolute X is needed until differentiating, which is a stronger operation.

</details>

<a id="characteristic-functions-levy-continuity-ex-2"></a>

### Exercise 2

Why does the independent-sum transform factorization require a joint-law condition?

<details><summary>Hint 1</summary>

Its integrand is a product of two bounded functions.

</details>

<details><summary>Hint 2</summary>

Use independence to factor its expectation.

</details>

<details><summary>Full solution</summary>

The product exponential expectation factors under a product joint law. Marginal laws alone do not determine that joint expectation; identical marginals can be coupled independently or as equal copies, producing different sum transforms.

</details>

<a id="characteristic-functions-levy-continuity-ex-3"></a>

### Exercise 3

Give the decisive integrability check in Gaussian smoothing.

<details><summary>Hint 1</summary>

The frequency Gaussian factor has finite integral.

</details>

<details><summary>Hint 2</summary>

All other exponential factors have unit modulus.

</details>

<details><summary>Full solution</summary>

Their absolute product is bounded by the integrable frequency Gaussian, uniformly in the random centering variable. Fubini is therefore valid after averaging over its probability law. No unsmoothed density or integrable original transform is assumed.

</details>

<a id="characteristic-functions-levy-continuity-ex-4"></a>

### Exercise 4

Explain how equal smoothed laws determine the original law.

<details><summary>Hint 1</summary>

Let the independent Gaussian perturbation vanish.

</details>

<details><summary>Hint 2</summary>

Approximate half-line indicators after bounded-continuous expectation equality.

</details>

<details><summary>Full solution</summary>

Dominated convergence recovers every original bounded-continuous expectation. Continuous approximations decreasing to half-line indicators recover their probabilities, and the pi-system uniqueness theorem identifies the Borel laws.

</details>

<a id="characteristic-functions-levy-continuity-ex-5"></a>

### Exercise 5

Derive the tail-probability transform bound.

<details><summary>Hint 1</summary>

Average one minus cosine over the symmetric frequency interval.

</details>

<details><summary>Hint 2</summary>

For absolute a X above two, sinc is at most one half.

</details>

<details><summary>Full solution</summary>

The averaged integral equals expectation of one minus sinc. Its integrand is at least one half on that tail, yielding the displayed probability bound after multiplying the integral average by two. This uses bounded Fubini, not a moment hypothesis.

</details>

<a id="characteristic-functions-levy-continuity-ex-6"></a>

### Exercise 6

Where is tightness used in the distribution-function subsequence lemma?

<details><summary>Hint 1</summary>

Diagonal selection alone gives only monotone rational limits.

</details>

<details><summary>Hint 2</summary>

The limiting CDF must still have total mass one.

</details>

<details><summary>Full solution</summary>

A common high-mass bounded interval bounds the rational tail limits uniformly and ensures the constructed F tends to zero and one at infinities. Without it, mass can escape and the diagonal limit may fail to define a probability law.

</details>

<a id="characteristic-functions-levy-continuity-ex-7"></a>

### Exercise 7

Why does Levy’s converse give convergence of the whole sequence rather than only one subsequence?

<details><summary>Hint 1</summary>

Every subsequence has a weakly convergent further one.

</details>

<details><summary>Hint 2</summary>

Transform uniqueness identifies every possible further limit.

</details>

<details><summary>Full solution</summary>

If convergence failed for a bounded continuous test function, a subsequence would retain a fixed discrepancy. Tightness supplies a weakly convergent further subsequence, whose law must have the unique limiting transform, contradicting that discrepancy.

</details>

<a id="characteristic-functions-levy-continuity-ex-8"></a>

### Exercise 8

Compute the limiting transform of the rare Bernoulli sum.

<details><summary>Hint 1</summary>

Use the independent product formula.

</details>

<details><summary>Hint 2</summary>

Apply the elementary exponential limit. 

</details>

<details><summary>Full solution</summary>

The product is $(1+\\lambda(e^{it}-1)/n)^n$, tending to $\\exp\\{\\lambda(e^{it}-1)\\}$. The Poisson series has the same transform, so continuity and uniqueness identify the limit.

</details>

<a id="characteristic-functions-levy-continuity-ex-9"></a>

### Exercise 9

Why can standard normal marginals and zero covariance fail to imply joint independence?

<details><summary>Hint 1</summary>

Multiply one normal variable by an independent fair sign.

</details>

<details><summary>Hint 2</summary>

Their magnitudes then agree.

</details>

<details><summary>Full solution</summary>

Let X be standard normal and Y equal an independent fair sign times X. Both marginals are standard normal and covariance is zero by sign centering, but their absolute values agree almost surely. Independent continuous normal magnitudes would not agree with positive probability. Joint normality was not supplied.

</details>

<a id="characteristic-functions-levy-continuity-ex-10"></a>

### Exercise 10

Does a weak-limit theorem identify almost-sure convergence of the original variables?

<details><summary>Hint 1</summary>

It determines probability laws and their bounded-continuous expectations.

</details>

<details><summary>Hint 2</summary>

The coupling can vary while keeping each law fixed.

</details>

<details><summary>Full solution</summary>

No. Variables with the same marginal laws can be coupled in many different ways. Levy continuity proves weak convergence of laws, not a pathwise relation among the particular original variables. An additional coupling or representation argument is needed.

</details>
`;export{e as default};