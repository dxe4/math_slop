var e=`---
parent_id: book-kernels-and-gaussian-processes
chapter_id: gaussian-processes-through-finite-distributions
title: "Gaussian Processes through Finite Distributions"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Gaussian Processes through Finite Distributions

## A probability law specified by consistent Gaussian vectors

**Definition 6.1 (Gaussian process).** A Gaussian process is a collection of real random variables indexed by an input set such that every finite vector is jointly Gaussian. Its mean function and positive-semidefinite covariance kernel determine those finite laws. A random function need not look like a Gaussian density; Gaussian describes the joint distribution of evaluations, not the shape of its graph.

This expands the retained [Gaussian Processes through Finite Distributions](../structured-probabilistic-learning/gaussian-processes-through-finite-distributions.md) source, including its finite sampling and regularity distinctions. Required preparation is Gaussian vectors and Chapter 2's kernel constructions. The existence proof uses the Kolmogorov extension theorem proved in [Probability Theory](../probability-theory-measure-martingales/random-variables-independence-extension.md). Its Brownian chapter also supplies the dyadic continuity criterion used below. These are separately named probability inputs, not consequences of a finite matrix factorization.

**Theorem 6.2 (Gaussian coordinate construction).** Any real mean function and positive-semidefinite kernel specify consistent Gaussian finite laws and hence a coordinate process by the stated extension theorem. For every finite list of inputs, evaluate the proposed mean and kernel to obtain a mean vector and a positive-semidefinite covariance matrix. A symmetric matrix square root applied to independent standard normals constructs the corresponding Gaussian vector, allowing singular covariance. Its characteristic function uniquely determines the law. Marginalizing or permuting coordinates changes the mean and covariance by the corresponding deletion or permutation, so these finite laws are consistent.

Kolmogorov extension gives a probability on the real coordinate product space with precisely those laws. The coordinate process is the desired Gaussian process in the finite-dimensional sense. Cylinder uniqueness identifies its law on that product sigma-algebra. This proves existence for any input set and valid finite kernel, but does not automatically construct continuous, bounded or time-measurable sample paths on a larger path sigma-algebra.

## Degenerate covariances are legitimate Gaussian laws

A positive-semidefinite Gram matrix can have rank smaller than the number of evaluations. Its Gaussian vector is then supported on an affine subspace. If a coefficient vector lies in the covariance null space, its centred linear evaluation combination has variance zero and is therefore zero almost surely. Singular covariance represents an exact relation rather than a failure to define a probability distribution.

Repeated inputs provide the simplest case: two evaluations at one input are the same random variable, so their difference has zero variance. A finite feature kernel can also be singular at distinct inputs when their feature vectors are dependent. Sampling by an ordinary Cholesky factor with strictly positive diagonal presupposes positive definiteness; an eigenvalue square root or another valid singular square root handles the general case without altering the model.

Adding diagonal jitter makes a finite covariance nonsingular but changes its Gaussian law. If the intention is independent record noise, include that noise in the likelihood and keep its distinction from the latent process. If the intention is a new latent delta-kernel component, repeated-input covariance follows that input indexing instead. A numerical convenience does not decide which of those probability models is intended.

## Worked example 1: exact two-point sampling

**Example 6.3 (exact two-point sampling).** For two centred unit-variance coordinates with correlation .6, a lower-triangular square root has first row $(1,0)$ and second row $(.6,.8)$. Multiplying the illustrative standard-normal coordinate vector $(1,-1)$ gives $(1,-.2)$. This is an algebraic sample transformation, not a claim that one displayed outcome describes the whole prior or that a numerical simulation has been run.

At correlation one, both coordinates equal the same standard normal and the second square-root direction vanishes. At correlation minus one, the second equals the negative of the first. These singular laws remain jointly Gaussian. Ordinary two-dimensional density formulas with a determinant denominator do not apply at those endpoints, although the square-root construction does.

For a grid of many inputs, sampling a finite Gaussian vector gives exactly the prior values on that grid. Joining those values by straight segments defines an additional interpolation rule. Unless its between-grid covariance is shown to match the process, that polygon is not an exact full-path draw. A plotting convention can be useful while remaining a finite approximation.

## Linear transformations, independent sums and covariance scope

Applying deterministic linear functionals to a finite Gaussian vector gives another Gaussian vector. Thus a finite-feature random linear function is a Gaussian process, and finite linear combinations of its evaluations have covariance obtained by the corresponding quadratic form. An independent sum of two Gaussian processes is Gaussian with summed means and kernels, because their finite characteristic functions multiply. Independence is required for the simple covariance sum; correlated components add cross-covariances.

A product of two independent Gaussian processes is generally not Gaussian, even though the product of their covariance kernels is positive semidefinite. For example the product of two independent centred unit normals has fourth moment nine, while a centred unit normal has fourth moment three. The product kernel can define a different Gaussian process with that covariance, but it does not turn the original pointwise product into a Gaussian law.

This distinction is useful when composing kernels. A sum can represent independent additive latent components. A product is a valid covariance construction and can encode interactions, but its stochastic interpretation must be specified rather than guessed from the same arithmetic operation on sample functions.

## Mean-square continuity and derivatives

For a centred process, the second moment of an evaluation difference is the diagonal sum minus twice the cross-kernel value. A continuous kernel therefore makes that difference tend to zero as inputs approach each other: mean-square continuity. A continuous mean gives the corresponding conclusion for a noncentered process. This is a statement about convergence in an L2 probability norm at each approaching input.

It is not yet a common-null-set statement that every path is continuous. Such a modification needs additional estimates. On a bounded real interval, suppose increment variances are at most a constant times the square of input distance. Gaussian even moments are fixed constants times powers of that variance. For every positive integer m, the moment of order twice m is therefore bounded by a constant times distance to power twice m. The dyadic continuity criterion yields a modification locally Holder of every order below one, taking m arbitrarily large. This proves a scoped continuous-version statement for kernels such as the one-dimensional Gaussian kernel; it does not by itself prove differentiability.

Mean-square derivatives can be constructed by showing difference quotients are Cauchy in L2. Their covariances are kernel finite differences divided by the corresponding input steps. If the required mixed derivatives are continuous, those covariance differences converge, giving an L2 limit with derivative covariance obtained by differentiating the kernel. Joint Gaussianity survives these finite linear-combination limits by characteristic functions. Almost-sure derivatives and a common smooth modification require further regularity arguments; a covariance derivative is not automatically a pathwise derivative.

## Worked example 2: Brownian covariance and RKHS paths

**Example 6.4 (Brownian covariance and RKHS paths).** The kernel minimum of its two nonnegative time arguments is positive semidefinite through the indicator feature map in Chapter 3. Its centred Gaussian process has independent stationary normal increments. Gaussian fourth and higher moments supply a continuous modification whose paths are locally Holder of every order below one half, by the full [Brownian construction](../probability-theory-measure-martingales/brownian-motion-construction.md).

That source also proves a positive dyadic quadratic-variation limit, which rules out finite total variation almost surely on a positive interval. Every function in the associated RKHS is absolutely continuous with square-integrable derivative and therefore has finite total variation by Cauchy-Schwarz. Brownian paths consequently lie outside that RKHS with probability one.

Thus the covariance kernel and RKHS do not mean the Gaussian prior samples functions according to a density proportional to exponential minus RKHS norm squared. Typical paths can have infinite such norm. The RKHS remains important for regularised estimates and perturbation geometry, while the probability law has its own path behavior. In finite-rank cases typical paths do belong to the finite-dimensional RKHS, so the distinction should be explained with its dimension and assumptions rather than asserted universally in either direction.

## Worked example 3: valid white noise with no continuous version

**Example 6.5 (valid white noise with no continuous version).** On the unit interval let k be one at equal inputs and zero otherwise, with zero mean. It is a valid kernel and its Gaussian coordinates at distinct inputs are independent standard normals. On any countably infinite list of distinct rational inputs, those variables are almost surely unbounded: for any finite M, the probability that the first n absolute values stay below M is a constant strictly below one raised to n, tending to zero.

A countable union over integer M makes boundedness on that rational list have probability zero. A continuous function on the compact interval would be bounded there. Any continuous modification would agree with the original process simultaneously on all rational inputs by a countable intersection, contradicting that unboundedness. Therefore no continuous modification exists, despite every finite covariance being valid.

This example locates the missing theorem in a finite-grid picture. Sampling finitely many independent normals and drawing a line through them creates a continuous polygon, but those polygons are not evidence of a continuous white-noise version as the grid is refined. Their visual continuity comes from interpolation, not from the coordinate law.

## Periodicity, stationarity and probability-one quantifiers

If mean and covariance have exact period T in the appropriate input arguments, the difference between f at t plus T and at t has zero variance and zero mean at each fixed t. Thus those two values agree almost surely for each prescribed t. If a continuous version exists, intersect the equality events over rational t and extend by continuity to get exact periodicity of the whole path on one common event. Without regularity, do not silently move an uncountable quantifier inside the probability-one statement.

A constant mean and a kernel depending only on input difference give stationary finite-dimensional Gaussian laws. They do not guarantee ergodicity. The constant random process is stationary but its time average remains its random value rather than the ordinary mean. The [stationary-process chapter](../probability-theory-measure-martingales/stationary-processes-ergodic-theorem.md) states the invariant-information limit and proves the stronger condition needed for deterministic averages.

For Gaussian processes, covariance specifies all finite dependence, but changing the input domain or observation process can change the relevant target. A stationary prior on a full real line may yield a nonstationary posterior after observations, because those observations privilege particular locations. Prior stationarity is not a constraint that every conditional covariance must keep depending only on distance.

## Kernel parameters and finite-design identification

A length scale, output variance and noise variance describe the chosen covariance and likelihood family. Several parameter combinations can produce similar finite-design matrices, especially when all observed separations occupy a narrow range. A sharply optimised finite likelihood need not identify each parameter in a broader asymptotic or mechanistic sense.

For one observation with zero mean, the marginal variance is the sum of latent output variance and independent measurement variance. Its data density cannot separate those two components. Repeated independent measurements at the same input supply contrast information about measurement noise, whereas observations at several separated inputs can inform covariance decay. The design and replication model determine which parameter distinctions are visible.

A prior over hyperparameters creates a mixture of Gaussian-process laws. Conditional on a hyperparameter value the evaluations are Gaussian, but after integrating it they need not be jointly Gaussian. Conditioning and prediction then require another integration rather than treating the mixture as one Gaussian with an averaged kernel. The hyperparameter chapter develops this difference and its total-variance consequences.

## Preparation for conditioning

The next chapter computes conditional function values from finite Gaussian blocks. A positive observation-noise variance makes the observed covariance invertible even if the latent kernel is singular. The resulting finite posterior laws are consistent and define a conditional Gaussian process at fixed hyperparameters. Path regularity can then be examined under its posterior mean and covariance, rather than assumed solely from a plotting grid.

The important sequence is construction, observation, conditioning and interpretation. Kernel validity constructs finite covariances; extension supplies coordinate laws; a regularity theorem supplies a path version; a likelihood specifies what was observed. Keeping those steps visible makes both exact posterior algebra and later scalable approximations precise.

## Exercises

<a id="gaussian-processes-through-finite-distributions-ex-1"></a>

### Exercise 1

Why are Gaussian finite laws consistent when built from one mean function and kernel?

<details><summary>Hint 1</summary>

Marginals use subvector means and covariance submatrices.

</details>

<details><summary>Hint 2</summary>

Gaussian characteristic functions determine their laws.

</details>

<details><summary>Full solution</summary>

Deleting or permuting evaluations performs the same deletion or permutation on the specified mean and kernel matrix. The corresponding Gaussian marginal therefore agrees with the independently specified law for that smaller list. Characteristic-function uniqueness makes this exact. Kolmogorov extension then supplies the coordinate process, while path regularity remains a separate question.

</details>

<a id="gaussian-processes-through-finite-distributions-ex-2"></a>

### Exercise 2

How can a singular Gram matrix still define a Gaussian vector?

<details><summary>Hint 1</summary>

Use a positive-semidefinite square root.

</details>

<details><summary>Hint 2</summary>

Some transformed independent-normal directions can vanish.

</details>

<details><summary>Full solution</summary>

Factor the covariance through a symmetric square root and apply it to independent standard normals. Zero eigenvalues simply remove directions and constrain the vector to an affine subspace. Its characteristic function remains well defined and Gaussian. A full-dimensional density and strictly positive Cholesky pivots are not necessary for existence of the probability law.

</details>

<a id="gaussian-processes-through-finite-distributions-ex-3"></a>

### Exercise 3

For the two-point square root, compute the value at standard coordinates $(1,-1)$.

<details><summary>Hint 1</summary>

The second row is $(.6,.8)$.

</details>

<details><summary>Hint 2</summary>

Multiply directly.

</details>

<details><summary>Full solution</summary>

The first output is one and the second is .6 minus .8, equal to minus .2. This is one illustrative value of the exact linear transformation. The full prior law comes from random independent standard-normal inputs, not from treating the displayed coordinate pair as a repeated deterministic simulation outcome.

</details>

<a id="gaussian-processes-through-finite-distributions-ex-4"></a>

### Exercise 4

Why is a finite-grid polygon not automatically an exact Gaussian-process path?

<details><summary>Hint 1</summary>

Interpolation imposes additional between-grid values.

</details>

<details><summary>Hint 2</summary>

Compare their covariance with the original kernel.

</details>

<details><summary>Full solution</summary>

The grid vector has the exact specified Gaussian law. Linear interpolation makes other values linear combinations of that finite vector and therefore gives a particular finite-rank covariance between grid points. Unless it matches the intended kernel, that continuous polygon has another path law. A visual convention cannot establish the original process regularity or between-grid distribution.

</details>

<a id="gaussian-processes-through-finite-distributions-ex-5"></a>

### Exercise 5

Show that a product of two independent unit normal variables is not unit normal.

<details><summary>Hint 1</summary>

Compute its second and fourth moments.

</details>

<details><summary>Hint 2</summary>

Independence factors the moments.

</details>

<details><summary>Full solution</summary>

The product has second moment one, but fourth moment equal to three times three, or nine. A centred unit normal has fourth moment three. Thus their laws differ. Product closure of covariance kernels constructs a valid covariance for another Gaussian process; it does not make pointwise products of Gaussian processes Gaussian.

</details>

<a id="gaussian-processes-through-finite-distributions-ex-6"></a>

### Exercise 6

Why do Brownian paths lie outside their RKHS almost surely?

<details><summary>Hint 1</summary>

The RKHS has square-integrable derivatives.

</details>

<details><summary>Hint 2</summary>

Brownian dyadic quadratic variation rules out finite total variation.

</details>

<details><summary>Full solution</summary>

Every RKHS function is absolutely continuous and its derivative absolute integral is finite by Cauchy-Schwarz, so its total variation is finite. Brownian paths have positive dyadic quadratic variation and therefore infinite total variation almost surely. They cannot belong to that RKHS. The argument distinguishes deterministic regularisation geometry from the support behavior of typical process paths.

</details>

<a id="gaussian-processes-through-finite-distributions-ex-7"></a>

### Exercise 7

Prove unboundedness of white-noise coordinates on a countable distinct list.

<details><summary>Hint 1</summary>

Bound the first n coordinates by a fixed M.

</details>

<details><summary>Hint 2</summary>

Use independence and then a countable union over M.

</details>

<details><summary>Full solution</summary>

Each absolute standard normal is at most M with probability strictly less than one. The probability that all first n coordinates satisfy that bound is its nth power, tending to zero. Thus the whole list is not bounded by M almost surely. Union over positive integers M shows it is unbounded almost surely, contradicting any continuous modification on a compact interval.

</details>

<a id="gaussian-processes-through-finite-distributions-ex-8"></a>

### Exercise 8

When does each-time periodic equality become simultaneous path periodicity?

<details><summary>Hint 1</summary>

Use a countable dense set.

</details>

<details><summary>Hint 2</summary>

Continuity extends equality from it.

</details>

<details><summary>Full solution</summary>

For a continuous version, intersect the equality events for rational inputs to obtain one probability-one event. On it, each pair of shifted path values agrees on a dense set. Continuity makes them agree everywhere on the relevant domain. Without regularity, pointwise almost-sure equalities do not justify an uncountable intersection or simultaneous periodicity.

</details>

<a id="gaussian-processes-through-finite-distributions-ex-9"></a>

### Exercise 9

Why can one observation not separate output variance from independent noise variance?

<details><summary>Hint 1</summary>

Write its marginal Gaussian variance.

</details>

<details><summary>Hint 2</summary>

Only their sum enters that density.

</details>

<details><summary>Full solution</summary>

At one input with a zero-mean stationary-output-scale model, the observed variance is latent variance plus noise variance. Parameter pairs with the same sum give exactly the same one-observation law. Independent repeated records or informative input separations can add distinctions, but this one density cannot identify both components separately.

</details>

<a id="gaussian-processes-through-finite-distributions-ex-10"></a>

### Exercise 10

Does integrating hyperparameters preserve Gaussianity?

<details><summary>Hint 1</summary>

It creates a mixture of Gaussian finite laws.

</details>

<details><summary>Hint 2</summary>

Different covariances can yield non-Gaussian tails.

</details>

<details><summary>Full solution</summary>

Not generally. Conditional on fixed hyperparameters, each evaluation vector is Gaussian. Mixing different means or covariances can produce a non-Gaussian distribution, even though its first two moments can be calculated. Replacing the mixture by one Gaussian with averaged covariance is an approximation unless a special closure result applies. Its prediction and uncertainty require the declared integration model.

</details>
`;export{e as default};