var e=`---
parent_id: book-probability-theory-measure-martingales
chapter_id: large-deviations-first-look
title: "Large Deviations: Exponential Tilting and Rate Functions"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Large Deviations: Exponential Tilting and Rate Functions

## A different question from the central limit theorem

A central limit theorem describes fluctuations on a shrinking scale around a mean. Large deviations ask for the logarithmic probability of a fixed discrepancy as sample size increases. The event is far outside the central window, so a Gaussian central approximation need not have the right exponential rate. This chapter proves the full large-deviation principle for bounded iid real observations and for empirical distributions on a finite alphabet. It also computes the Gaussian case directly. General unbounded Cramer theory and sample-path large deviations require additional arguments and are not being silently imported.

Preparation is independence, exponential moments, the weak law, and the relative-entropy tools of [Information Theory](../information-theory/relative-entropy-mutual-information.md). All logarithms in rates here are natural. Changing to base two multiplies information quantities by the appropriate conversion factor. Probability exponents and entropy formulas must use the same convention.

A sequence of real laws obeys a large-deviation principle with speed n and rate I if I is lower semicontinuous, takes values in the nonnegative extended reals, and satisfies
$$
-\\inf_{x\\in G}I(x)\\le\\liminf_n\\frac1n\\log P(Y_n\\in G)
$$
for every open G, together with
$$
\\limsup_n\\frac1n\\log P(Y_n\\in F)\\le-\\inf_{x\\in F}I(x)
$$
for every closed F. Use log zero equal to minus infinity and the infimum of an empty set equal to infinity. A good rate has compact sublevel sets. These are bounds for sets, not an assertion that every point has positive probability. Continuous distributions assign zero to points even when the rate there is finite.

For a set whose interior and closure have the same rate infimum, the two bounds give an exact logarithmic limit. Without that regularity the bounds can differ. An event supported on an impossible lattice slice illustrates why replacing open and closed sets by arbitrary sets without qualification is wrong. Multiplicative polynomial factors disappear after division by n; fixed exponential factors do not.

## Logarithmic moments and their convex dual

Let X be bounded and nonconstant, with essential infimum a and essential supremum b. Define
$$
\\Lambda(\\theta)=\\log E e^{\\theta X},\\qquad
I(x)=\\sup_{\\theta\\in\\mathbb R}\\{\\theta x-\\Lambda(\\theta)\\}.
$$
Boundedness permits differentiation under the integral for every real theta, uniformly on each compact theta interval. Introduce the tilted probability with density $e^{\\theta X-\\Lambda(\\theta)}$ relative to the original law. Then the first derivative of Lambda is the tilted mean and its second derivative is the tilted variance. The variance is positive because tilting has strictly positive density and the original variable is nonconstant. Consequently Lambda is strictly convex and its first derivative is continuous and strictly increasing.

Its derivative ranges over the whole interval from a to b. To prove the upper endpoint claim, fix a positive distance from b. The original law gives positive mass to an interval closer to b. Under a large positive tilt, the likelihood ratio between points below the more distant cutoff and points in that upper interval is exponentially small. Thus the tilted probability of the lower region tends to zero. Boundedness makes the tilted mean tend to b. Negative tilts give the lower endpoint by the same argument. Therefore each interior x is the tilted mean for a unique finite theta, and differentiation of the concave dual objective identifies
$$
I(x)=\\theta_x x-\\Lambda(\\theta_x),\\qquad \\Lambda'(\\theta_x)=x.
$$
As a supremum of continuous affine functions, I is convex and lower semicontinuous. The choice theta zero gives nonnegativity. Jensen shows that at the ordinary mean the dual objective is never positive, so the rate is zero there. Outside the essential support interval, sending theta to the appropriate infinity makes I infinite. Its sublevel sets are closed and contained in the compact interval, hence compact. Endpoint rates are allowed to be infinite.

At an endpoint the rate equals the limit from the interior. Lower semicontinuity gives one inequality. If the endpoint rate is finite, convexity bounds the rate at each point between it and a fixed interior point by the corresponding chord, giving the other inequality on taking the limit. If the endpoint rate is infinite, lower semicontinuity forces every approaching interior sequence to have rate tending to infinity. This elementary observation will prevent an endpoint gap in the lower bound.

## The upper bound: local exponential tests and a finite cover

For any theta, exponential Markov inequality gives a convenient local bound. On a neighborhood U where $\\theta y-\\Lambda(\\theta)>r$,
$$
P(\\overline X_n\\in U)\\le e^{-nr}E\\exp\\{n\\theta\\overline X_n-n\\Lambda(\\theta)\\}=e^{-nr}.
$$
Independence makes the last expectation one. This formula applies to either sign of theta because the neighborhood was defined through the affine expression itself.

Fix a closed F and a real r below the infimum of I on F. Only the intersection with the compact support interval matters. At each point in that intersection, the supremum defining I supplies a finite theta whose affine value is greater than r. Continuity supplies a neighborhood with the same strict inequality. Compactness gives a finite subcover. A union bound then bounds the event probability by a fixed finite number times the displayed exponential. Division of its logarithm by n gives an upper limit at most minus r. Let r increase to the infimum. If that infimum is infinite, take r arbitrarily large. If the intersection is empty, the probability is identically zero. This proves the closed-set upper bound completely.

This argument explains the role of exponential tightness in unbounded variants: local estimates alone give compact-set bounds, and a separate exponentially small tail is needed to reduce closed sets to compacts. Here bounded observations make that reduction automatic. Tightness without an exponential rate would not suffice, because division by n can erase its tail bound.

## The lower bound: make the rare average typical

Take an interior support point x and its tilt theta. Give the independent sample the product tilted law. Under that law the observations remain iid, have mean x, and have finite variance. Chebyshev proves that their average falls within any fixed positive distance delta of x with probability tending to one. The likelihood ratio returning to the original law is
$$
\\exp\\{-n\\theta\\overline X_n+n\\Lambda(\\theta)\\}.
$$
On that event it is at least $\\exp\\{-n(I(x)+|\\theta|\\delta)\\}$. Therefore the logarithmic lower probability for the original event is at least minus I(x) minus the small delta correction: the tilted event probability tends to one, so its logarithm divided by n tends to zero.

If an open G contains x, choose delta small enough that this interval lies inside G and then let delta decrease to zero. Taking the best interior x gives the open-set bound. If G contains a support endpoint, openness also contains interior points approaching it, whose rates approach its rate by the endpoint argument above. Thus no finite endpoint minimum is missed. If G misses the entire support, its rate infimum is infinite and the required lower bound is vacuous. The constant-variable case, excluded during strict convexity, is immediate: its rate is zero at that constant and infinite elsewhere, exactly describing its deterministic sample mean. We have now proved the bounded iid theorem for all open and closed sets.

Tilting is a change of probability used in a proof, not an unlicensed assertion that the original rare event happens frequently. Under the new law it does become typical; the likelihood ratio pays precisely its exponential cost. This method also suggests importance-sampling proposals, but a proposal inspired by the rate is not automatically a finite-variance or efficient numerical estimator. Such claims need their own analysis.

## Worked example 1: Bernoulli averages and boundary events

For a Bernoulli variable with success probability p strictly between zero and one,
$$
\\Lambda(\\theta)=\\log(1-p+pe^\\theta),\\qquad
I(x)=x\\log\\frac{x}{p}+(1-x)\\log\\frac{1-x}{1-p}
$$
for x in the unit interval, with the zero-times-log convention; the rate is infinite outside. Solve the tilted mean equation to obtain the odds ratio $e^\\theta=x(1-p)/(p(1-x))$, then substitute. At zero and one, take the endpoint limits. In particular the all-success probability is exactly $p^n$ and its exponent agrees with I at one.

For a threshold strictly above p and below one, the rate is increasing beyond p. The open and closed threshold sets therefore have the same infimum, giving the logarithmic upper-tail limit minus I at that threshold. A normal approximation would instead insert a quadratic rate everywhere. The true rate has that quadratic expansion only near p, where Taylor differentiation gives second derivative $1/[p(1-p)]$. A fixed distant threshold needs the full entropy expression.

A singleton irrational average has probability zero for every n, although its rate is finite when the point is inside the unit interval. This does not violate the theorem: the singleton is closed, so only an upper bound is prescribed. Its interior is empty. Even rational singleton events may be possible only at selected sample sizes. The open-neighborhood formulation is essential, not an editorial technicality.

## Worked example 2: Gaussian averages beyond bounded support

For iid normal observations with mean m and positive variance v, the average is normal with mean m and variance v divided by n. Its dual rate is $(x-m)^2/(2v)$. Exponential Markov gives both one-sided tails, hence an exponentially small bound outside any large compact interval with rate tending to infinity as the interval grows.

For an interior neighborhood of any real x, tilt by theta equal to $(x-m)/v$. Completing the square in the normal density shows that the tilted observation is normal with mean x and unchanged variance. The same Chebyshev and likelihood-ratio proof gives the local lower bound. For the upper bound, use the finite-cover argument on the closed set intersected with a compact interval, then add the exponentially small outside tail. Its logarithmic upper limit is at most the larger of the two exponents; send the interval radius to infinity. This proves the full Gaussian large-deviation principle directly, without pretending it follows from the bounded theorem.

This special proof works because its moment-generating function is finite everywhere, the tilted means reach every real value, and Gaussian tails give exponential tightness. In a general unbounded model each of these ingredients must be checked. A heavy-tailed variable can have a finite mean and variance but no positive exponential moment; a single very large observation can then govern an upper-tail event on a different scale.

## Finite alphabets: the method of types

Let an iid observation take one of k symbols with positive probabilities $p_i$. Its empirical vector q records the fraction of each symbol. At sample size n there are at most $(n+1)^k$ possible vectors, called types. For a possible type define $D(q\\|p)=\\sum_iq_i\\log(q_i/p_i)$. Every sequence with that type has likelihood ratio $e^{-nD(q\\|p)}$ under p relative to the product distribution with probabilities q. Coordinates with zero q never appear and cause no problem.

Under its own product law, the type q has probability between $(n+1)^{-k}$ and one. To prove the lower inequality without Stirling approximations, its count vector is a mode of the multinomial count law. Starting at those integer counts, move units from coordinates that must decrease to coordinates that must increase to reach any other count vector. Each step has probability ratio
$$
\\frac{m_j}{m_i+1}\\frac{q_i}{q_j}\\le1,
$$
because the decreasing coordinate never exceeds its original count and the increasing one never falls below its original count. If a proposed vector uses a zero-q coordinate, its probability is zero. Thus our count vector has maximal probability. There are at most the displayed number of types, whose probabilities sum to one, proving the modal lower bound. Multiplying the likelihood ratio gives
$$
(n+1)^{-k}e^{-nD(q\\|p)}\\le P_p(\\widehat p_n=q)\\le e^{-nD(q\\|p)}.
$$

For any closed set of probability vectors, sum the upper bound over types. The polynomial number of terms disappears logarithmically, yielding the upper bound with rate D. For an open set and any vector q in it, choose possible type vectors tending to q by rounding counts and allocating the remainder. Eventually they remain in the open set. Relative entropy is continuous on the compact simplex when all p coordinates are positive, including zero coordinates of q by continuity of t log t at zero. The one-type lower bound therefore yields minus D at q. Optimize over q. This proves the finite-alphabet empirical-distribution principle, usually called the finite form of Sanov theorem.

If some p coordinates vanish, restrict to its support first. Empirical vectors outside that face are impossible and have infinite rate. Failing to make this restriction would ask for likelihood ratios with a zero denominator. The proof also shows how finite-dimensional constraints turn into entropy minimization rather than an arbitrary choice of distance between histograms.

## Worked example 3: an atypical three-symbol composition

Suppose three symbols are equally likely and a reported empirical distribution is near $(1/2,1/4,1/4)$. Its rate is
$$
\\frac12\\log\\frac32+\\frac12\\log\\frac34.
$$
Both terms must be retained: the second is negative but their sum is nonnegative. The upper bound on a particular feasible type is the exponential of minus n times this rate, and the lower bound differs by at most a polynomial factor. A fixed small open neighborhood has an exponent governed by the smallest divergence inside it, which may lie closer to the uniform vector than its centre. Only after shrinking the neighborhood toward the specified vector does its exponent approach that displayed rate. Replacing a neighborhood rate by the centre rate without this limiting step can overstate rarity.

## Continuous images and the contraction argument

Suppose variables supported on a compact space obey a large-deviation principle with a good rate I, and let h be continuous into a metric space. Then their images have rate $J(y)=\\inf_{h(x)=y}I(x)$. For an open image event the preimage is open, so the lower bound transfers directly. For a closed image event the preimage is closed, so the upper bound does too. The relevant infima are identical by taking fibers. Goodness follows because a finite-rate minimizing sequence in a fiber has a convergent subsequence inside a compact rate sublevel, and continuity preserves the fiber; sublevel sets of J are thus continuous images of compact sublevels of I.

This applies immediately to the mean of a finite-alphabet empirical vector, recovering a constrained entropy formula for its rate. It also applies to continuous summaries such as its squared distance from a fixed probability vector. It does not apply automatically to a discontinuous statistic, an estimated parameter with a singular denominator, or an unbounded function on a noncompact space. At those boundaries, write the open and closed preimages and inspect the required assumptions before quoting a rate.

## Exercises

<a id="large-deviations-first-look-ex-1"></a>

### Exercise 1

Prove nonnegativity of the Bernoulli rate and identify its zero.

<details><summary>Hint 1</summary>

Differentiate twice in the interior.

</details>

<details><summary>Hint 2</summary>

Locate the stationary point and use endpoint continuity.

</details>

<details><summary>Full solution</summary>

The first derivative is the log of the empirical odds divided by the true odds. It vanishes only at p. The second derivative is $1/x+1/(1-x)$, which is positive. Thus p is the unique minimum in the interior, where the rate is zero. Continuity at the two endpoints and the strict decrease then increase show that neither endpoint is another minimum. This agrees with nonnegativity of relative entropy.

</details>

<a id="large-deviations-first-look-ex-2"></a>

### Exercise 2

For a Bernoulli success probability p, compute the exact large-deviation exponent of the all-failure event.

<details><summary>Hint 1</summary>

The event has an elementary exact probability.

</details>

<details><summary>Hint 2</summary>

Compare with the endpoint rate.

</details>

<details><summary>Full solution</summary>

The probability is $(1-p)^n$, so its logarithm divided by n equals $\\log(1-p)$ for every sample size. The endpoint rate at zero is $-\\log(1-p)$. This confirms the predicted negative rate exactly; no asymptotic approximation or rounding argument is needed.

</details>

<a id="large-deviations-first-look-ex-3"></a>

### Exercise 3

Why does finite variance alone not justify the exponential-tilting proof for a positive upper-tail discrepancy?

<details><summary>Hint 1</summary>

Inspect the normalisation of the tilted law.

</details>

<details><summary>Hint 2</summary>

A positive exponential moment may be infinite.

</details>

<details><summary>Full solution</summary>

The tilted density must have finite normalising constant. A variable can have finite variance yet an infinite moment-generating function at every positive argument. Then no positive tilt of the stated form is a probability. Chebyshev still controls a typical sample mean, but it does not replace the missing exponential change of measure or produce an exponential tail rate. Large observations may determine a different asymptotic scale.

</details>

<a id="large-deviations-first-look-ex-4"></a>

### Exercise 4

Show that the bounded-variable dual rate is infinite outside its essential support interval.

<details><summary>Hint 1</summary>

Bound the logarithmic moment by an endpoint times theta.

</details>

<details><summary>Hint 2</summary>

Send theta in the correct direction.

</details>

<details><summary>Full solution</summary>

For positive theta, boundedness above gives $\\Lambda(\\theta)\\le\\theta b$. If x exceeds b, the dual objective is at least $\\theta(x-b)$, tending to infinity. For negative theta, boundedness below gives $\\Lambda(\\theta)\\le\\theta a$, and an x below a gives the same conclusion as theta tends to minus infinity. Thus the rate excludes all impossible averages outside the support interval.

</details>

<a id="large-deviations-first-look-ex-5"></a>

### Exercise 5

Explain why an irrational singleton average does not contradict the Bernoulli large-deviation principle.

<details><summary>Hint 1</summary>

Check its interior and closure.

</details>

<details><summary>Hint 2</summary>

A closed-set bound is only an upper bound.

</details>

<details><summary>Full solution</summary>

The singleton is closed and its interior is empty. Its actual probability is zero at every sample size, giving logarithmic value minus infinity. This satisfies any finite closed-set upper bound. The open-set lower bound gives no finite requirement for the singleton because it is not open; using the empty interior gives the vacuous lower bound minus infinity. The principle controls neighborhoods rather than assigning mass to each finite-rate point.

</details>

<a id="large-deviations-first-look-ex-6"></a>

### Exercise 6

For a finite alphabet with all positive true probabilities, show why rounding a target vector yields possible types converging to it.

<details><summary>Hint 1</summary>

Round all but one coordinate down.

</details>

<details><summary>Hint 2</summary>

Distribute the remaining count units.

</details>

<details><summary>Full solution</summary>

Take integer lower counts for all coordinates and allocate the at-most-k remaining units among coordinates to make the total n. Every coordinate differs from its target count by a bounded number independent of n. Dividing by n therefore gives convergence to the target vector. Nonnegativity and the exact total are preserved. An open neighborhood contains all sufficiently late approximations, enabling the lower bound from their single-type probabilities.

</details>

<a id="large-deviations-first-look-ex-7"></a>

### Exercise 7

Use the type bounds to derive an upper bound for the probability that empirical relative entropy exceeds r.

<details><summary>Hint 1</summary>

Every allowed type has divergence at least r.

</details>

<details><summary>Hint 2</summary>

Count the possible types.

</details>

<details><summary>Full solution</summary>

Each such type has probability at most $e^{-nr}$. There are at most $(n+1)^k$ possible types. Summing yields the bound $(n+1)^k e^{-nr}$, also bounded by one if necessary. After logarithmic division by n, the polynomial correction vanishes. This is a direct finite-sample inequality, though it can be loose for small n or a large alphabet.

</details>

<a id="large-deviations-first-look-ex-8"></a>

### Exercise 8

Find the rate of the square of a centred normal sample mean with variance v.

<details><summary>Hint 1</summary>

Use the continuous map $h(x)=x^2$.

</details>

<details><summary>Hint 2</summary>

Minimize the Gaussian rate over its two preimages.

</details>

<details><summary>Full solution</summary>

The Gaussian mean rate is $x^2/(2v)$. For positive y both preimages have squared value y, so the image rate is $y/(2v)$. At zero the only preimage is zero and the rate is zero. Negative y has no preimage and rate infinity. The Gaussian proof supplies a good rate on the real line, and the same compact-sublevel contraction proof applies even though the original space itself is not compact.

</details>

<a id="large-deviations-first-look-ex-9"></a>

### Exercise 9

Why is the tilted probability of a fixed neighborhood of its mean asymptotically irrelevant on the logarithmic scale?

<details><summary>Hint 1</summary>

Use the weak law under the tilted distribution.

</details>

<details><summary>Hint 2</summary>

Take the logarithm only after noting convergence to one.

</details>

<details><summary>Full solution</summary>

The tilted observations are iid with finite variance in the bounded setting, so their mean lies in the fixed neighborhood with probability tending to one. The logarithm of this probability therefore tends to zero. Dividing by n still gives zero. The likelihood ratio supplies the exponential cost, while this typical-event probability contributes no additional rate.

</details>

<a id="large-deviations-first-look-ex-10"></a>

### Exercise 10

Contrast exponential tightness with ordinary tightness in a closed-set large-deviation proof.

<details><summary>Hint 1</summary>

Consider the term from outside a compact set.

</details>

<details><summary>Hint 2</summary>

Its logarithmic size must be controlled after division by n.

</details>

<details><summary>Full solution</summary>

Ordinary tightness only makes the outside probability uniformly small by a fixed amount. Its logarithm divided by n can then approach zero, overwhelming a desired strictly negative exponent. Exponential tightness makes that outside probability decay with an arbitrarily large exponential rate as the compact set expands. It allows the compact finite-cover upper bound to extend to all closed sets without losing the desired exponent.

</details>
`;export{e as default};