var e=`---
parent_id: book-kernels-and-gaussian-processes
chapter_id: positive-semidefinite-kernels
title: "Positive-Semidefinite Kernels"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Positive-Semidefinite Kernels

## A finite-configuration definition

**Definition 2.1 (Positive-semidefinite kernel).** A real kernel on an arbitrary nonempty set is a symmetric function k whose every finite Gram matrix is positive semidefinite. Thus for every list of inputs, including repetitions, and every real coefficient vector,
$$
\\sum_{i,j}c_ic_jk(x_i,x_j)\\ge0.
$$
The input set need not be a vector space or carry a topology. The defining condition concerns every finite configuration, not just one recorded training matrix. A symmetric similarity table that happens to work on a particular dataset need not extend to a valid kernel on its claimed domain.

This expands the retained [Positive-Semidefinite Kernels](../structured-probabilistic-learning/positive-semidefinite-kernels.md) source. Its polynomial Gram example, composite covariance and repeated-input noise distinction remain intact. Here the closure and example proofs are complete finite constructions, and the following chapter builds the associated function space.

Positive semidefinite allows zero quadratic forms for nonzero coefficients. Strict positive definiteness usually means positivity for nonzero coefficients at pairwise distinct inputs; repeated inputs necessarily create a null contrast. State the convention when using strictness. An invertible noisy observation covariance is not a proof that the latent kernel itself is strictly positive definite.

## Feature maps and two-point consequences

If phi maps inputs into a real inner-product space, then $k(x,z)=\\langle\\phi(x),\\phi(z)\\rangle$ is a kernel: its finite quadratic form is the squared norm of the feature sum weighted by c. A finite or infinite-dimensional feature representation therefore supplies a constructive proof. Completing the span of abstract kernel sections will give the converse in Chapter 3.

Every diagonal value is nonnegative by a one-point test. The determinant condition on a two-point Gram matrix gives
$$
|k(x,z)|^2\\le k(x,x)k(z,z).
$$
One can also obtain it by minimizing the quadratic form in one scalar coefficient. If a diagonal value is zero, the kernel pairs that input with every other input as zero. Covariance functions can have negative cross-values, but not values violating this inequality. A positive-looking similarity is not necessarily a valid covariance.

If all diagonal values are positive, normalisation by their square roots gives a correlation kernel. This is a weighted feature rescaling, so positive semidefiniteness survives. A zero diagonal requires a declared convention or restriction to the positive-diagonal subset; division by zero is not repaired by the general closure theorem.

## Closure rules with proofs

**Theorem 2.2 (Kernel closure rules).** The constructions in this section preserve positive semidefiniteness under their stated sign, convergence and integrability conditions. Nonnegative multiples and sums preserve each Gram quadratic form by linearity. Pullback along any map preserves validity because evaluating the new kernel simply evaluates the old one on a mapped list of inputs. Multiplication by $g(x)g(z)$ preserves validity by replacing each coefficient with c i times g at its input. The weighting function can change sign; the resulting diagonal still has its squared sign-free scale.

Pointwise products also preserve validity. For a fixed finite list, factor the two positive-semidefinite Gram matrices as $UU^T$ and $VV^T$. Their entrywise product is the Gram matrix of features with coordinates $U_{ip}V_{iq}$ indexed by pairs p and q. Its quadratic form is a sum of squares. This proves the Schur product property without confusing entrywise multiplication with ordinary matrix multiplication, whose product need not even be symmetric.

A pointwise finite limit of kernels is a kernel because each finite quadratic form converges to a limit of nonnegative real numbers. In particular a convergent sum with nonnegative coefficients is valid when its entries have finite limits. Similarly an integral mixture of measurable kernels is valid whenever the entries are integrable and the weighting measure is nonnegative: finite sums move through the integral and integrate a nonnegative quadratic form. A signed mixture has no such general guarantee.

These rules establish a covariance family. Whether the induced functions are smooth, the family is appropriate for a scientific variable, or its parameters are identifiable from a finite design are separate questions. Validity is necessary for a Gaussian covariance, not evidence that the proposed stochastic model describes the observations.

## Linear, polynomial and Gaussian kernels

The linear kernel on Euclidean vectors is their inner product. Its Gram matrix has rank at most the feature dimension, so more distinct inputs can still produce a singular covariance. Adding a nonnegative constant adds an intercept feature. A positive-integer power of that shifted inner product is valid by product closure, yielding the polynomial kernel. Noninteger powers or negative offsets need a new proof and cannot be justified by the same argument.

For the Gaussian kernel with positive length scale h, expand
$$
\\exp\\{-\\|x-z\\|^2/(2h^2)\\}
=e^{-\\|x\\|^2/(2h^2)}e^{-\\|z\\|^2/(2h^2)}
\\sum_{m=0}^{\\infty}\\frac{(x^Tz)^m}{m!h^{2m}}.
$$
Every polynomial term is a kernel, its coefficient is nonnegative, and the series converges at every pair. The closure and weighting results therefore prove positive semidefiniteness. Multiplying by a nonnegative output variance preserves it. This proof concerns Euclidean squared distance, not every abstract metric distance.

For two fixed distinct inputs, their normalised Gaussian correlation tends to zero as h decreases to zero and to one as h increases without bound. The input set and its separations are held fixed in those limits. If the design spacing changes together with h, the limiting Gram behavior can differ. The numerical-conditioning chapter revisits precisely that distinction.

## One-dimensional rougher covariances from explicit features

For positive a, define a feature in square-integrable functions of t on the real line by $\\phi_x(t)=\\sqrt{2a}e^{-a(x-t)}1_{\\{t\\le x\\}}$. Integrating the feature product up to the smaller input gives $e^{-a|x-z|}$. This proves validity of the exponential covariance directly. It is the one-dimensional Matern one-half example; process differentiability is another statement proved or scoped later.

Using a causal linear feature $(x-t)e^{-a(x-t)}1_{\\{t\\le x\\}}$ with squared normalisation four a cubed gives $(1+a|x-z|)e^{-a|x-z|}$. For x at least z, substitute s equal to z minus t: the inner product becomes the exponential of minus a times their distance multiplied by the integral of $(r+s)s e^{-2as}$. Elementary Gamma integrals give the claimed coefficients.

A causal quadratic feature with squared normalisation $4a^5/3$ similarly gives $(1+ar+a^2r^2/3)e^{-ar}$. Its product integral contains $(r+s)^2s^2$, whose three monomial integrals yield that polynomial. These are the one-dimensional Matern three-halves and five-halves shapes after the usual length-scale rescaling. Higher-dimensional radial Matern validity uses a different spectral or mixture construction; it is not proved by simply reusing a one-dimensional feature without explanation.

## Worked example 1: the retained polynomial Gram matrix

**Example 2.3 (the retained polynomial Gram matrix).** At inputs $(1,0)$, $(0,1)$ and $(1,1)$, combine the linear kernel and squared shifted-linear kernel. The resulting matrix is
$$
K=\\begin{pmatrix}5&1&5\\\\1&5&5\\\\5&5&11\\end{pmatrix}.
$$
The vector $(1,-1,0)$ has eigenvalue four. On the remaining invariant subspace with first two coordinates equal, the induced two-coordinate matrix has trace seventeen and determinant sixteen, so its eigenvalues are sixteen and one. All are positive, verifying this particular Gram matrix exactly. The closure proof supplies the stronger statement that the kernel is valid for every input list, which one numerical eigensystem alone could not establish.

The example also distinguishes a finite certificate from a general construction. Finding one negative Gram direction disproves validity on the claimed domain. Finding one positive matrix cannot prove it. A feature representation or closure argument covers all finite lists at once.

## Worked example 2: repeated locations and observation noise

**Example 2.4 (repeated locations and observation noise).** Take two records at the same input x and a latent kernel with $k(x,x)=\\tau^2$. Their latent covariance matrix is tau squared times the all-ones matrix. Its contrast direction has eigenvalue zero because there is only one underlying function value. Independent record noise of variance sigma squared adds sigma squared times the identity, giving eigenvalues $2\\tau^2+\\sigma^2$ and sigma squared.

An input-indexed delta kernel instead adds its variance to every entry of that repeated-input block. It changes the shared latent value but leaves the contrast eigenvalue zero. Thus it cannot stand in for independent measurement noise at repeated locations. The distinction affects both invertibility and the information content of repeated readings.

## Worked example 3: a periodic and varying-amplitude construction

**Example 2.5 (a periodic and varying-amplitude construction).** Map a real input to its unit-circle coordinates at period T, then apply a Euclidean Gaussian kernel. The squared circle distance is four times the sine squared of pi times input difference divided by T. This yields
$$
k(x,z)=\\tau^2\\exp\\{-2\\sin^2(\\pi(x-z)/T)/h^2\\}.
$$
Pullback proves validity and exact covariance periodicity. Multiplying by $g(x)g(z)$ for a declared amplitude function remains valid, but an arbitrary nonperiodic g destroys exact period T. A product can therefore preserve positive semidefiniteness while changing a substantive modelling property. A sum of this periodic covariance and a linear trend covariance models an additive combination, not a purely periodic whole function.

## A metric-distance counterexample

Consider four points on a cycle, with adjacent shortest-path distance one and opposite distance two. Use the apparently Gaussian rule $k(x,z)=\\exp\\{-c d(x,z)^2\\}$ with c equal to log four thirds. Its adjacent value is three quarters and its opposite value eighty-one over two hundred fifty-six. The alternating coefficient vector $(1,-1,1,-1)$ is an eigenvector of the circulant Gram matrix with eigenvalue
$$
1-2(3/4)+(3/4)^4=-47/256.
$$
This is negative, so the proposed metric kernel is invalid. Symmetry, nonnegative entries and a familiar radial formula are insufficient. A valid Euclidean embedding or another general kernel theorem is needed before replacing Euclidean distance by a new domain's metric.

## Validity, smoothness and learning remain distinct

A kernel can be valid yet finite rank, discontinuous, poorly conditioned, or inappropriate for a desired extrapolation. Smoothness of a covariance can imply mean-square derivatives under the relevant differentiability conditions, while sample-path regularity needs a separate argument. A covariance function alone does not allow every descriptive regularity claim one might attach to its name.

The next chapter constructs the reproducing-kernel Hilbert space from the finite quadratic condition. That deterministic function space supports norm-based learning. Later the same covariance builds Gaussian finite laws, and conditioning supplies model-based uncertainty. Keeping those constructions separate prevents validity, optimisation and probabilistic interpretation from being treated as a single assertion.

## Strict Gaussian positivity at distinct Euclidean inputs

**Theorem 2.6 (Strict Gaussian positivity).** The Gaussian kernel has a stronger finite property than the nonnegative construction proved earlier. Its Gram matrix is strictly positive definite for every finite list of distinct Euclidean inputs. Use the Gaussian characteristic function to write it as the expectation of $\\exp(i\\Omega^T(x-z))$, with a centred normal frequency of covariance $h^{-2}I$. The real quadratic form is therefore
$$
E\\left|\\sum_jc_j e^{i\\Omega^Tx_j}\\right|^2.
$$
If it is zero, the continuous nonnegative integrand vanishes everywhere: the frequency distribution has a strictly positive density on every open ball, so any positive integrand value would give a positive expectation. Choose a vector v whose inner products with the finitely many distinct inputs are all different. Such a vector exists because the excluded choices lie in a finite union of proper hyperplanes, which cannot cover Euclidean space.

Restrict the now-zero exponential sum to frequencies t times v. Its first n derivatives at zero give the equations $\\sum_jc_j(v^Tx_j)^m=0$ for m from zero through n minus one. The Vandermonde matrix at these distinct scalar projections is invertible, forcing every coefficient to be zero. Thus no nonzero quadratic direction vanishes. Repeated inputs invalidate the distinct-projection step, as they must, because their kernel sections agree.

This strictness theorem does not promise good conditioning. Two distinct inputs can approach one another so closely that a contrast eigenvalue becomes arbitrarily small while remaining mathematically positive. A long length scale can have the same effect. Exact invertibility, finite-precision sensitivity and the presence of observation noise are therefore separate properties.

More generally, derivative observations can create valid covariance matrices by applying finite-difference functionals to kernel evaluations and then taking their limits when the required mixed derivatives exist. Each finite-difference covariance is positive semidefinite because it is a linear transformation of a Gram matrix. Entrywise convergence preserves that property. Existence of the covariance derivatives supports this validity argument; it does not by itself justify every almost-sure derivative claim about sample paths.

## Exercises

<a id="positive-semidefinite-kernels-ex-1"></a>

### Exercise 1

Prove $|k(x,z)|^2\\le k(x,x)k(z,z)$.

<details><summary>Hint 1</summary>

Use a two-point Gram quadratic form.

</details>

<details><summary>Hint 2</summary>

Its discriminant cannot be positive in a direction giving a negative minimum.

</details>

<details><summary>Full solution</summary>

The two-by-two Gram matrix is positive semidefinite, so its determinant is nonnegative. This gives the squared cross-entry bound. If a diagonal is zero, varying the other coefficient directly forces its cross-entry to be zero. Thus the inequality also handles degenerate kernel sections without dividing by a zero diagonal.

</details>

<a id="positive-semidefinite-kernels-ex-2"></a>

### Exercise 2

Why does pointwise multiplication preserve kernels but ordinary Gram-matrix multiplication need not?

<details><summary>Hint 1</summary>

Use pair-indexed product features.

</details>

<details><summary>Hint 2</summary>

The relevant matrix is the entrywise product.

</details>

<details><summary>Full solution</summary>

Factor the two finite Gram matrices into feature row inner products. Pairwise products of feature coordinates give an inner-product representation of their entrywise product. Ordinary matrix multiplication is another operation and may produce a nonsymmetric matrix, so this proof and the kernel closure claim do not apply to it.

</details>

<a id="positive-semidefinite-kernels-ex-3"></a>

### Exercise 3

Prove that pullback by an arbitrary map preserves a kernel.

<details><summary>Hint 1</summary>

Evaluate any finite list after applying the map.

</details>

<details><summary>Hint 2</summary>

Use the original kernel quadratic condition on that mapped list.

</details>

<details><summary>Full solution</summary>

The new Gram quadratic form is exactly the original kernel form evaluated at the mapped inputs, with the same real coefficients. It is nonnegative even if different original inputs map to the same point, because repetitions are permitted by the definition. No injectivity, continuity or linearity of the map is needed for validity.

</details>

<a id="positive-semidefinite-kernels-ex-4"></a>

### Exercise 4

Is a negative cross-covariance forbidden by positive semidefiniteness?

<details><summary>Hint 1</summary>

Consider a one-dimensional feature that changes sign.

</details>

<details><summary>Hint 2</summary>

Its diagonal remains nonnegative.

</details>

<details><summary>Full solution</summary>

No. The kernel $k(x,z)=xz$ on real inputs has a negative cross-value when the inputs have opposite signs. Its Gram matrices remain positive semidefinite because they are outer products of the input vector. The diagonal and two-point inequality constrain cross-values but do not require all entries to be positive.

</details>

<a id="positive-semidefinite-kernels-ex-5"></a>

### Exercise 5

Check the invalid two-point correlation table with cross-value 1.2 and unit diagonals.

<details><summary>Hint 1</summary>

Use the alternating coefficient vector.

</details>

<details><summary>Hint 2</summary>

Or compute its two eigenvalues.

</details>

<details><summary>Full solution</summary>

The eigenvalues are 2.2 and minus .2. The alternating direction therefore gives a negative quadratic form, violating positive semidefiniteness. Equivalently the determinant is minus .44. One such finite configuration disproves the proposed covariance kernel on any domain containing those two points.

</details>

<a id="positive-semidefinite-kernels-ex-6"></a>

### Exercise 6

Why does the Gaussian-kernel series proof require nonnegative coefficients?

<details><summary>Hint 1</summary>

Each component Gram form is nonnegative.

</details>

<details><summary>Hint 2</summary>

A signed linear combination can reverse that inequality.

</details>

<details><summary>Full solution</summary>

Nonnegative coefficients preserve nonnegativity of every finite partial-sum quadratic form. Taking finite entrywise limits preserves it again. A negative coefficient could subtract a large positive form and create a negative direction, so no general closure statement follows for arbitrary signed series. A signed construction needs another proof.

</details>

<a id="positive-semidefinite-kernels-ex-7"></a>

### Exercise 7

For two repeated inputs, compare latent contrast variance with independent-noise contrast variance.

<details><summary>Hint 1</summary>

The two latent values are identical random variables.

</details>

<details><summary>Hint 2</summary>

Two independent record noises have additive contrast variance.

</details>

<details><summary>Full solution</summary>

The latent difference is exactly zero, so its variance is zero and the latent repeated-input Gram matrix is singular. With two independent errors of variance sigma squared, their difference has variance twice sigma squared. The covariance matrix eigenvalue in the normalised contrast direction is sigma squared. An input-indexed shared-noise kernel does not supply that independent contrast variation.

</details>

<a id="positive-semidefinite-kernels-ex-8"></a>

### Exercise 8

Why does the cycle-distance Gaussian rule fail?

<details><summary>Hint 1</summary>

Use its alternating eigenvector.

</details>

<details><summary>Hint 2</summary>

The displayed eigenvalue is negative.

</details>

<details><summary>Full solution</summary>

Each row has diagonal one, two adjacent values three quarters and one opposite value eighty-one over two hundred fifty-six. Acting on the alternating vector gives eigenvalue one minus twice three quarters plus the opposite value, equal to minus forty-seven over two hundred fifty-six. The negative direction violates the kernel condition despite the metric being valid and every table entry nonnegative.

</details>

<a id="positive-semidefinite-kernels-ex-9"></a>

### Exercise 9

Does multiplying a periodic kernel by $g(x)g(z)$ preserve exact periodicity?

<details><summary>Hint 1</summary>

Validity and periodicity are different properties.

</details>

<details><summary>Hint 2</summary>

Compare g at inputs separated by one period.

</details>

<details><summary>Full solution</summary>

Positive semidefiniteness survives any real weighting function by coefficient rescaling. Exact periodicity survives only under appropriate periodicity of g or another specific invariance. An arbitrary varying amplitude changes the covariance after a period shift and can destroy periodic sample-function constraints. Closure of the kernel cone is not preservation of every modelling property.

</details>

<a id="positive-semidefinite-kernels-ex-10"></a>

### Exercise 10

What can a positive Gram matrix on one dataset establish about a proposed kernel?

<details><summary>Hint 1</summary>

The definition quantifies over all finite input lists.

</details>

<details><summary>Hint 2</summary>

A single negative case and a single positive case have different logical force.

</details>

<details><summary>Full solution</summary>

A positive matrix confirms compatibility on that particular list only. Another list may have a negative Gram direction, so global validity needs a construction or theorem covering all lists. Conversely a single negative direction is enough to refute validity on the full claimed domain. Numerical positivity on sampled inputs is not a general kernel proof.

</details>
`;export{e as default};