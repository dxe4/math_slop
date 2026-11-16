var e=`---
parent_id: book-probability-theory-measure-martingales
chapter_id: concentration-mcdiarmid-efron-stein
title: "Concentration Beyond Sub-Gaussians: McDiarmid and Efron-Stein"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Concentration Beyond Sub-Gaussians: McDiarmid and Efron-Stein

A statistic can be a complicated function of independent observations even when it is not an average. Coordinate sensitivity yields an exponential bound; square-integrable replacement effects yield a variance bound. This chapter proves McDiarmid and Efron-Stein through the conditional-expectation martingale and keeps their different hypotheses separate.

Preparation is conditional expectation, product integration and finite martingale sums. The inputs are independent, not necessarily identically distributed, and the statistic is a measurable function on their product space. Every expectation below refers to that stated product law. Data duplication, clustered dependence or adaptively generated observations need another theorem.

## The Doob decomposition exposes the contribution of each coordinate

For a square-integrable statistic f, reveal the coordinates one at a time and set M i to its conditional expectation after the first i are known. This is a martingale from expected f to f. Its differences D i have zero conditional mean and are orthogonal in L two: for an earlier difference, condition the later one on its past.

Expanding the finite sum of differences therefore gives
$$\\operatorname{Var}(f)=\\sum_i ED_i^2.$$
The identity is exact and depends only on the martingale decomposition. Independence will enter when we compare those increments with actual coordinate replacements or bound their conditional ranges.

For a fixed revealed past, M i can be written as the integral of f over all unrevealed coordinates, using the product law and Fubini. This representation is valid almost everywhere and supplies the conditional comparisons below without assuming an unrelated regular conditional density.

## Bounded differences control each conditional range

Suppose replacing coordinate i while fixing every other coordinate changes f by at most a deterministic c i. Integrating the same future coordinates preserves this bound, so as the current coordinate varies, the corresponding conditional expectation has range width at most c i. Subtracting its conditional mean gives the same width for D i.

This statement needs a bound on the statistic over its permitted input configurations. Observing a small empirical perturbation on a few recorded points does not establish the global bounded-difference hypothesis. Coordinates can have unbounded support while the function is boundedly sensitive to them, or bounded support while the function has large sensitivity.

A mean of variables in the unit interval has c i equal to one over n. A maximum has c i equal to one for every coordinate. Both are bounded functions, but their generic sensitivity certificates differ greatly.

## A conditional exponential lemma and McDiarmid's theorem

A centred variable supported on an interval of width c has moment-generating function at most exp of lambda squared c squared divided by eight. To prove it, differentiate its log moment-generating function. The second derivative is its variance under an exponential tilt, still supported on that interval and therefore at most c squared divided by four. The centred value and first derivative vanish at zero; integrate the curvature bound twice.

Apply this lemma to each D i conditional on its past. Iterating conditional expectations bounds the exponential moment of their sum by exp of lambda squared times the sum of c i squared divided by eight. Exponential Markov and optimisation in positive lambda give
$$P(f-Ef\\ge t)\\le
\\exp\\left\\{-\\frac{2t^2}{\\sum_i c_i^2}\\right\\}.$$
The negative tail follows in the same way; adding gives the two-sided bound with factor two. This proves McDiarmid's inequality. If every c i is zero, f is constant on the product input space and the centred probability is zero; the formula is not evaluated by division by zero.

The same argument applies to any martingale with conditionally bounded increment ranges. If only absolute increment bounds b i are supplied, the interval widths can be twice b i, producing the familiar exponent minus t squared divided by twice the sum of b i squared. Width and absolute-radius conventions must not be interchanged.

## A sharper variance consequence of bounded ranges

The conditional variance of a variable in an interval of width c is at most c squared divided by four: subtract the interval midpoint and bound its second moment, which dominates variance. Apply this to the Doob differences and sum their orthogonal variances. Thus
$$\\operatorname{Var}(f)\\le\\frac14\\sum_i c_i^2.$$
This is a variance statement consistent with the exponential moment proof. The less sharp replacement estimate obtained by bounding every squared replacement difference by c i squared would give a different constant.

Neither result says the actual variance equals its certificate. A statistic can be insensitive under most observed configurations while its worst possible coordinate change is large. The range theorem uses that worst-case change to obtain a distribution-free product-law guarantee.

## Efron-Stein from an independent coordinate replacement

Let f i prime be the statistic after replacing input i by an independent copy with the same marginal law, sharing all the other inputs. For a fixed earlier-coordinate past, write g i of the current input as the future-integrated f. Its conditional variance equals half the expectation of the squared difference between two independent current-coordinate copies of g i.

That difference of g values is the future expectation of the difference between f and its i-replacement, using the same future coordinates in both. Jensen bounds its square by the future expectation of the squared statistic difference. Integrate the past and the two current copies to obtain
$$ED_i^2\\le\\frac12E(f-f_i')^2.$$
Summing the exact Doob variance identity proves
$$\\operatorname{Var}(f)\\le\\frac12\\sum_iE(f-f_i')^2.$$
This is Efron-Stein with its factor one half fully accounted for. A cruder direct Jensen comparison of D i with f minus its replacement would lose that factor; the conditional variance identity is the sharpening step.

Equivalently, each half replacement square is the expected variance of f conditional on all coordinates except i. The conditional product law makes the two i-copies independent given the other coordinates. Thus Efron-Stein is also variance tensorization: the sum of conditional coordinate variances bounds the full variance.

Only square integrability is assumed for this theorem. Without bounded differences or another tail condition, it gives a variance and a Chebyshev tail bound, not an automatic Gaussian exponential tail.

### Worked example: a mean attains Efron-Stein exactly

For independent observations with finite individual variances, take f as their mean. Replacing coordinate i changes f by that observation-minus-copy divided by n. Its expected squared difference is twice that individual variance divided by n squared. The Efron-Stein right side is therefore the sum of variances divided by n squared, exactly the actual mean variance.

If the observations are Bernoulli with success probability one half, the bounded-difference variance bound one over four n is also exact. For other success probabilities it is conservative, while the replacement variance remains exact for the additive statistic.

## Two-factor interactions explain strictness

For two independent inputs and square-integrable f, subtract its mean and its two single-coordinate conditional means to write f as a constant plus g one of the first input, g two of the second and a remainder h. The definitions are $g_1=E[f\\mid X_1]-Ef$, $g_2=E[f\\mid X_2]-Ef$, and $h=f-Ef-g_1-g_2$. The g terms are centred. Independence and the defining conditional tests give conditional mean of h equal to zero given either input.

All three terms are pairwise orthogonal in L two, so the actual variance is the sum of their three squared norms. Conditional coordinate variances sum to the two g squared norms plus twice the h squared norm. Hence the Efron-Stein slack in this two-input decomposition is exactly the interaction's squared norm.

### Worked example: a product has interaction slack

For independent fair signs, let f be their product. Its mean is zero and variance one. Each single-coordinate conditional mean is zero, so the entire statistic is the interaction h. Replacing either sign gives a squared difference expectation two. Efron-Stein therefore bounds variance by two rather than one, and the slack equals the interaction variance just proved.

Independence of the inputs did not make f additive. A variance certificate can count the same interaction through more than one coordinate. This is why its bound need not be tight for every nonlinear statistic.

## A maximum illustrates worst-case versus typical sensitivity

### Worked example: independent uniform maxima

Let f be the maximum of n independent uniform unit-interval variables. Its distribution function on that interval is t to the n. Tail integration gives mean n over n plus one and second moment n over n plus two. Subtracting the squared mean gives variance
$$\\frac{n}{(n+1)^2(n+2)},$$
of order inverse n squared.

Yet its global coordinate sensitivity is one, so the generic bounded-difference variance bound is n divided by four. It is valid but extremely loose. The exact order-statistic calculation uses a special distribution and statistic; the global theorem deliberately covers all product laws satisfying the same sensitivity budget. One should not present the larger certificate as an estimate of the actual variance.

The difference suggests using replacement expectations, sharper distributional arguments or another concentration theorem when warranted. It does not justify substituting a small sensitivity observed on one sample for the worst-case hypothesis of McDiarmid.

## Conditional averaging removes variance under its own model

If a square-integrable estimator depends on independent auxiliary randomness, replacing it by its conditional expectation given the retained observations preserves its mean and cannot increase variance. The total-variance identity proves this exactly. For independent fair signs, an estimator equal to the first sign plus their product has variance two; averaging out the second sign leaves only the first sign, with variance one.

This is a Rao-Blackwell comparison under the declared joint model. It concerns a mathematical conditional expectation, not a promise that approximate numerical marginalization has no error or that a different observation model is correct. Efron-Stein can help quantify replacement sensitivity, while the projection theorem identifies what exact averaging removes.

## What a variance bound cannot supply

A single heavy-tailed variable can have finite second moment while its upper tail decays polynomially. Such a variable satisfies the one-coordinate Efron-Stein identity but cannot satisfy a nontrivial global Gaussian-tail bound with a fixed quadratic exponent. For example, a Pareto law of exponent above two has finite variance but a polynomial tail eventually larger than every fixed positive-constant Gaussian exponential bound.

The inference is not that Efron-Stein is weaker or stronger in every application. It uses weaker moment hypotheses and returns a different object. McDiarmid needs deterministic coordinate ranges and returns exponential concentration. Both depend on the observation structure, and neither validates an application merely because a program can recompute its statistic.

## A distribution-sensitive replacement calculation for the maximum

The uniform-maximum example also lets us compute the Efron-Stein certificate instead of replacing every perturbation by its global upper bound. Condition on the maximum m of the other n minus one observations. Given that value, the statistic is the larger of m and one fresh uniform observation. Direct integration gives
$$
E[\\max(m,U)]=\\frac{1+m^2}{2},\\qquad
E[\\max(m,U)^2]=\\frac{1+2m^3}{3}.
$$
Subtracting the squared conditional mean shows that its conditional variance is $(1-m)^3(1+3m)/12$. This polynomial is small when the other coordinates already provide a high maximum: most replacements then change nothing or only a small amount.

For n at least two, the conditioning maximum has density $(n-1)m^{n-2}$ on the unit interval. Integrating the displayed polynomial, or expanding it into four monomials, gives
$$
E\\operatorname{Var}(f\\mid X_{-i})=\\frac{2}{(n+1)(n+2)(n+3)}.
$$
For a single observation there are no other coordinates; set their maximum to zero and obtain the same value directly. Summing the n conditional variances therefore bounds the maximum variance by $2n/[(n+1)(n+2)(n+3)]$. The ratio of this certificate to the exact variance computed above is $2(n+1)/(n+3)$. It equals one for one coordinate and approaches two for a large sample. Thus the replacement theorem captures the correct inverse-square order while the worst-case range certificate does not.

This calculation illustrates a practical mathematical choice. A global sensitivity bound ignores how rarely a coordinate can be decisive under the stated distribution. The conditional replacement integral retains that distributional information without requiring a full formula for the statistic's law. In another model its integrals may be difficult, but the theorem still identifies precisely what must be bounded. None of these calculations allows one to change the independence assumption.

For example, if every one of n apparent inputs equals the same fair bit, their mean has variance one quarter. Treating them as independent coordinates would incorrectly predict variance at most one over four n. The underlying statistic on unrestricted configurations has the usual small coordinate sensitivities, but the actual law is concentrated on a dependent diagonal. The product-law conditional representation used in both proofs is then false. Declaring the duplicated bit to be one input restores a valid sensitivity calculation, with one coordinate of width one rather than n independent coordinates of width one over n.

## Exercises

<a id="concentration-mcdiarmid-efron-stein-ex-1"></a>

### Exercise 1

Prove the orthogonality of different Doob increments.

<details><summary>Hint 1</summary>

Condition the later increment on its past.

</details>

<details><summary>Hint 2</summary>

The earlier increment is measurable there.

</details>

<details><summary>Full solution</summary>

The later conditional mean is zero and the earlier difference is already measurable, so their product expectation is zero by conditional pull-out. Expanding the finite sum gives variance as the sum of increment second moments.

</details>

<a id="concentration-mcdiarmid-efron-stein-ex-2"></a>

### Exercise 2

Why does global coordinate sensitivity bound the Doob increment’s conditional range?

<details><summary>Hint 1</summary>

Integrate the same future coordinates for two current-coordinate values.

</details>

<details><summary>Hint 2</summary>

Averaging preserves their pointwise difference bound.

</details>

<details><summary>Full solution</summary>

The future-integrated function changes by at most c i as its current input varies. Centering it by its conditional mean leaves range width unchanged. Independence supplies the common future distribution in that comparison.

</details>

<a id="concentration-mcdiarmid-efron-stein-ex-3"></a>

### Exercise 3

Explain the distinction between interval width c and an absolute bound b.

<details><summary>Hint 1</summary>

An interval from minus b to b has width twice b.

</details>

<details><summary>Hint 2</summary>

Substitute the correct width into the exponential lemma.

</details>

<details><summary>Full solution</summary>

An absolute increment bound b permits conditional range width two b. The exponent then uses the sum of b squared with the corresponding factor one half, rather than treating b itself as a range width. Confusing the conventions gives an incorrect constant.

</details>

<a id="concentration-mcdiarmid-efron-stein-ex-4"></a>

### Exercise 4

Where does the factor one half in Efron-Stein come from?

<details><summary>Hint 1</summary>

Use variance as half a two-copy squared difference.

</details>

<details><summary>Hint 2</summary>

Apply Jensen only after that identity.

</details>

<details><summary>Full solution</summary>

Conditional variance of the future-integrated function is half the squared difference of two independent current-coordinate copies. Jensen bounds that difference by the same-future f replacement difference. Keeping the half before summing produces the stated theorem.

</details>

<a id="concentration-mcdiarmid-efron-stein-ex-5"></a>

### Exercise 5

Compute Efron-Stein for an independent sample mean.

<details><summary>Hint 1</summary>

Only one divided observation changes under each replacement.

</details>

<details><summary>Hint 2</summary>

A variable-minus-independent-copy has twice its variance.

</details>

<details><summary>Full solution</summary>

Each contribution is individual variance divided by n squared after multiplying by one half. Summing yields the exact variance of the independent mean. No equal-distribution assumption is needed.

</details>

<a id="concentration-mcdiarmid-efron-stein-ex-6"></a>

### Exercise 6

Why is the product-of-signs bound strict?

<details><summary>Hint 1</summary>

The statistic has only an interaction component.

</details>

<details><summary>Hint 2</summary>

Each replacement counts that component.

</details>

<details><summary>Full solution</summary>

Actual variance is one, while both coordinate conditional variances equal one. Their sum is two. The two-input orthogonal decomposition identifies the slack as the interaction variance, also one.

</details>

<a id="concentration-mcdiarmid-efron-stein-ex-7"></a>

### Exercise 7

Does finite variance imply the McDiarmid tail conclusion?

<details><summary>Hint 1</summary>

The hypotheses differ.

</details>

<details><summary>Hint 2</summary>

A Pareto tail can have a finite second moment.

</details>

<details><summary>Full solution</summary>

No. A finite-variance polynomial tail eventually exceeds any fixed Gaussian exponential tail bound. Efron-Stein may still give a variance certificate, but bounded differences or another exponential-moment condition is required for such concentration.

</details>

<a id="concentration-mcdiarmid-efron-stein-ex-8"></a>

### Exercise 8

Verify the uniform-maximum variance formula.

<details><summary>Hint 1</summary>

Integrate its CDF to obtain the first two moments.

</details>

<details><summary>Hint 2</summary>

Subtract their squared-mean combination.

</details>

<details><summary>Full solution</summary>

The moments are $n/(n+1)$ and $n/(n+2)$. Their difference after squaring the first simplifies to $n/[(n+1)^2(n+2)]$. This special-law calculation is much sharper than the global sensitivity bound.

</details>

<a id="concentration-mcdiarmid-efron-stein-ex-9"></a>

### Exercise 9

Why do duplicated observations not satisfy the independent-input theorem merely because they occupy separate columns?

<details><summary>Hint 1</summary>

Their joint law is supported on equality constraints.

</details>

<details><summary>Hint 2</summary>

Replacing one while keeping its identical copy fixed changes the observation model.

</details>

<details><summary>Full solution</summary>

The product-law proof integrates independent coordinates and independent replacements. Copies of one random quantity are dependent and do not have that product law. Reformatting them as separate inputs does not create independent information or justify the martingale range comparison used here.

</details>

<a id="concentration-mcdiarmid-efron-stein-ex-10"></a>

### Exercise 10

Prove exact conditional averaging cannot increase variance.

<details><summary>Hint 1</summary>

Use the L two projection or total-variance identity.

</details>

<details><summary>Hint 2</summary>

The residual variance is nonnegative.

</details>

<details><summary>Full solution</summary>

Variance of the original estimator equals variance of its conditional mean plus expected conditional variance. Dropping the latter gives the bound and conditional expectation preserves the mean. Approximate averaging needs its own error control and is not covered automatically.

</details>
`;export{e as default};