var e=`---
parent_id: book-kernels-and-gaussian-processes
chapter_id: kernel-mean-embeddings
title: "Kernel Mean Embeddings"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Kernel Mean Embeddings

## Representing a probability law by its expectations

A kernel mean embedding represents a distribution by one element of the kernel's function space. Its inner product with a function records that function's expectation. This gives a geometry for comparing laws, but whether the geometry distinguishes every law depends on the kernel. A finite set of feature means can lose distributional information even when every expectation is computed exactly.

**Definition 13.1 (Kernel mean element).** Assume kernel sections are measurable, and let P be a probability such that the expectation of square root k at the diagonal is finite. Every H function is measurable as a pointwise limit of finite section combinations, and its expectation is bounded in absolute value by its H norm times that diagonal moment. Thus expectation is a bounded linear functional on H. Hilbert Riesz representation gives a unique element $\\mu_P$ satisfying
$$
\\langle f,\\mu_P\\rangle_H=E_P f(X).
$$
This constructs the mean element without assuming an undefined vector integral exists. Its norm is at most the expected square root diagonal. A bounded kernel diagonal makes the condition automatic; a linear kernel instead requires an appropriate feature first moment.

The reproducing identity gives $\\mu_P(x)=E_Pk(x,X)$. For two laws satisfying the same diagonal condition, the two-point kernel bound and Fubini justify
$$
\\langle\\mu_P,\\mu_Q\\rangle_H=E_{X\\sim P,Y\\sim Q}k(X,Y),
$$
where the pair is independent. Using one shared variable in place of two independent draws gives a diagonal expectation and generally another quantity.

## The maximum mean discrepancy is an exact function-class supremum

**Definition 13.2 (Maximum mean discrepancy).** Define MMD between P and Q as the H norm of their mean difference. For every unit-H-norm function, its expectation difference is the inner product with that mean difference and is at most the norm by Cauchy-Schwarz. If the difference is nonzero, its normalised direction attains equality. Therefore
$$
\\operatorname{MMD}_k(P,Q)=\\sup_{\\|f\\|_H\\le1}|E_Pf-E_Qf|.
$$
Expanding the squared norm gives the familiar three-expectation formula, with independent copies within each law. This is a proved integral probability metric on the stated function class, but can be only a pseudometric on probability laws if different distributions share one mean element.

A characteristic kernel is one for which equality of mean elements implies equality of probability laws in the specified domain class. That is an identification property beyond positive semidefiniteness. Changing the domain, moment restrictions or kernel can change it. Calling every finite feature mean a complete distribution representation would discard that distinction.

## Worked example 1: a linear kernel sees a mean and misses a distribution

**Example 13.3 (a linear kernel sees a mean and misses a distribution).** For the linear kernel on the real line, H contains functions $f(x)=ax$ with norm absolute a. The mean embedding is determined by the ordinary mean, and MMD is the absolute difference of the two means. A fair law on minus one and plus one and a point mass at zero both have embedding zero, although their variances and supports differ.

The kernel is valid and its mean is well defined under their finite moments. Its failure to distinguish these laws is therefore neither an approximation error nor a failure to evaluate expectations. It is a function-class limitation. Polynomial kernels similarly record finitely many moment combinations and need not identify arbitrary laws merely because their feature dimension is larger.

## A full characteristic-kernel proof for the Gaussian kernel

**Theorem 13.4 (Characteristic Gaussian kernel).** The Gaussian kernel distinguishes all Borel probability laws on Euclidean space through their mean elements. For the unit Gaussian kernel on Euclidean space, its spectral representation gives
$$
\\operatorname{MMD}_k^2(P,Q)=E_\\Omega|\\varphi_P(\\Omega)-\\varphi_Q(\\Omega)|^2,
$$
where the spectral frequency is a nonsingular centred Gaussian and phi denotes a distribution characteristic function. To derive it, expand the squared complex difference and use independent copies to identify each kernel expectation. All characteristic functions are bounded by one, so Fubini is legitimate without moments of the observed variables.

If MMD is zero, the continuous nonnegative characteristic-function discrepancy vanishes almost everywhere under a frequency density positive on every open ball. It must therefore vanish everywhere: a positive value would persist on a neighborhood of positive frequency probability. Characteristic-function uniqueness then gives P equal to Q. The reverse implication is immediate. This proves that the Gaussian kernel is characteristic on all Borel probabilities in Euclidean space, with the characteristic-function uniqueness theorem as its explicit probability input.

This proof uses full frequency support, not a finite collection of sampled frequencies. A random-feature embedding can agree at those finitely many Fourier coordinates for distinct laws. Approximation of the kernel can be useful while losing exact law identification at a fixed finite feature count.

## Worked example 2: distinct point masses and a weaker convergence notion

**Example 13.5 (distinct point masses and a weaker convergence notion).** For point masses at a and b, Gaussian MMD squared is two times one minus the Gaussian covariance between them. It is strictly positive when the points differ, confirming the identification theorem in a transparent case. As b approaches a it tends to zero continuously.

In particular the point masses at one over n converge in Gaussian MMD to the point mass at zero. Their total-variation distance is one for every n, since the singleton support event separates them completely. Thus a characteristic metric need not dominate total variation or give the same notion of quantitative closeness. Which distributional discrepancy matters depends on the functions and events in the intended task.

## Empirical embeddings and their mean squared error

For iid observations, the empirical mean element is the average of their kernel sections. Its squared expected error is
$$
E\\|\\widehat\\mu_P-\\mu_P\\|_H^2=
\\frac1n\\{E k(X,X)-\\|\\mu_P\\|_H^2\\}.
$$
Expand the double sum: diagonal terms use one observation, while distinct-index terms factor by independence into the mean-element squared norm. The cross inner product with the population mean has expectation that same squared norm. Combining the three contributions gives the identity.

If the diagonal is at most kappa squared, this error is at most kappa squared over n. Jensen bounds the expected norm by kappa over square root n. Replacing one observation changes the norm error by at most twice kappa over n, using the triangle inequality on the two replaced sections. McDiarmid therefore gives
$$
P\\left\\{\\|\\widehat\\mu_P-\\mu_P\\|_H>
\\frac\\kappa{\\sqrt n}+\\kappa\\sqrt{\\frac{2\\log(1/\\delta)}n}\\right\\}\\le\\delta.
$$
This is a sufficient finite-sample embedding bound for iid observations and bounded diagonal. It does not require a finite-dimensional H. Dependence or an unbounded diagonal needs another argument rather than the same bounded-replacement proof.

## Biased and unbiased squared discrepancy estimates

The norm difference between two empirical means is nonnegative and expands to a three-term V statistic with diagonal kernel values included. Its expected squared value equals population MMD squared plus one diagonal-variance correction from each sample. Those corrections are nonnegative by the empirical-error identity. Thus it is upward biased as an estimator of the squared population discrepancy.

Deleting within-sample diagonals and dividing by n times n minus one gives an unbiased U statistic when each sample has at least two iid observations and the samples are independent. Cross pairs use all n times m entries. Its expectation is exactly the three independent-copy kernel expectations. It need not be nonnegative because unbiasedness does not make it a squared norm for every realized dataset.

## Worked example 3: a negative unbiased estimate

**Example 13.6 (a negative unbiased estimate).** Take two samples each containing the same two distinct points minus a and plus a, using a Gaussian kernel. Let r be the cross-kernel value between those points, strictly below one. Their empirical embeddings agree exactly, so the squared empirical-norm discrepancy is zero.

Each off-diagonal within-sample average is r, while the cross average is one half times one plus r. The unbiased squared-discrepancy estimate is therefore $2r-(1+r)=r-1$, negative. There is no negative population squared norm. The U statistic is a random unbiased estimator of that nonnegative target, not itself a distance. Clipping it to zero changes its expectation and should be described as another estimator.

The example also clarifies why diagonal handling is not a small notation choice. A recorded sample can give zero empirical distance and a negative unbiased squared estimate at once because they are different finite-sample objects.

## Deterministic integration and Bayesian quadrature geometry

For fixed quadrature points and real weights, the error on a unit-H-norm function satisfies
$$
\\left|E_Pf-\\sum_iw_if(x_i)\\right|
\\le\\left\\|\\mu_P-\\sum_iw_i k_{x_i}\\right\\|_H,
$$
with equality in the mean-residual direction when nonzero. This is again exactly the norm of a bounded linear functional. It gives a deterministic worst-case integration error under an explicit function-ball assumption.

If the Gram matrix is positive definite and the kernel mean evaluations z i equal $E_Pk(x_i,X)$ are known, minimizing that squared residual over unrestricted real weights gives $Kw=z$. The minimum is $\\|\\mu_P\\|^2-z^TK^{-1}z$, by completing the quadratic. Requiring positive weights or weights summing to one imposes another constrained problem; unconstrained optimal weights need not themselves define a probability measure.

Under a zero-mean GP prior, the same expression is the conditional variance of the function integral after noiseless point evaluations, with its prior cross covariances given by z. This is the earlier Gaussian-functional formula, not a statement that GP sample paths lie in the RKHS unit ball. Deterministic worst-case error and Bayesian posterior variance coincide algebraically here under different interpretations.

## Bandwidth and comparison scale

A Gaussian kernel with any fixed finite positive bandwidth is characteristic. Yet letting the bandwidth tend to infinity makes all bounded kernel values tend to one, and dominated convergence makes MMD between any fixed two probabilities tend to zero. The metric's numerical scale can therefore vanish even while its fixed-bandwidth identification property holds.

At the other extreme, for nonatomic distributions, shrinking bandwidth to zero makes independent within-law and cross-law equalities occur with probability zero. The corresponding kernel expectations tend to zero by dominated convergence, so their MMD can also vanish in that limit. A changing-bandwidth statistic needs its own scale and statistical analysis; identification at each fixed bandwidth does not supply a uniform separation magnitude.

Selecting a bandwidth after inspecting the same samples changes the comparison procedure. A fixed-kernel error or calibration statement does not automatically describe that data-dependent choice. Independent model selection, a uniform-over-kernels argument or another declared inferential approach can address it, but the choice should not be hidden behind the word kernel.

## Sample error, feature error and identification

A finite dataset approximates a population mean element. Random features approximate the kernel geometry used for that element. Those are two different errors. If an approximate kernel differs uniformly by at most epsilon on every pair relevant to the two laws, their squared MMD expressions differ by at most four epsilon, by the triangle inequality on the two within-law and doubled cross expectations. A bound only on recorded pairs controls only the empirical expression, not the population expectations outside those points.

For empirical samples, the MMD norm difference from its population value is at most the sum of the two mean-embedding errors, by the reverse triangle inequality. Combining the preceding concentration events yields a finite-sample certificate under the stated iid and bounded-kernel conditions. This is a quantitative discrepancy bound, not an automatic decision rule or proof of causal equality between data-generating mechanisms.

Conditional embeddings, dependence measures and kernel-based randomisation procedures extend this framework but introduce further operators, regularisation or null-distribution assumptions. The capstone chapter uses only the mean and discrepancy results proved here. It asks which probability law is represented, which functions matter, and whether finite observations or finite features have lost information needed for the intended conclusion.

## A constant kernel component does not cure every identification failure

Adding a constant one to a kernel leaves MMD between probability laws unchanged. In its three-expectation formula the added within-law terms are each one and the doubled cross term is two, so they cancel. Thus adding an intercept feature to a linear kernel still cannot distinguish the two equal-mean laws of the first example.

For quadrature weights not constrained to sum to one, the same added component contributes $(1-\\sum_iw_i)^2$ to squared integration error. Probability comparison and an arbitrary weighted quadrature rule therefore use that constant direction differently. Exact integration of constants is an extra weight constraint when desired, not something implied by kernel validity alone.

## Exercises

<a id="kernel-mean-embeddings-ex-1"></a>

### Exercise 1

Why does the diagonal moment condition define a bounded expectation functional?

<details><summary>Hint 1</summary>

Use the RKHS evaluation bound.

</details>

<details><summary>Hint 2</summary>

Integrate its absolute value.

</details>

<details><summary>Full solution</summary>

Every function value is bounded in magnitude by its H norm times the square root diagonal. The assumed finite expectation of that diagonal factor bounds the absolute expected function value by a constant times its norm. Hilbert Riesz representation then gives the unique mean element. No informal vector expectation is needed before existence is established.

</details>

<a id="kernel-mean-embeddings-ex-2"></a>

### Exercise 2

Derive the inner product of two mean embeddings.

<details><summary>Hint 1</summary>

Apply their defining expectation identity twice.

</details>

<details><summary>Hint 2</summary>

Use the two-point kernel bound for Fubini.

</details>

<details><summary>Full solution</summary>

Pairing one mean with the other integrates the latter function under the first law. Its value at an input is the kernel expectation under the second law. The absolute double integral is bounded by the product of the two finite diagonal-root moments, so Fubini applies. This gives the independent-pair kernel expectation, not the diagonal expectation of one shared draw.

</details>

<a id="kernel-mean-embeddings-ex-3"></a>

### Exercise 3

Why is MMD the supremum over the unit RKHS ball?

<details><summary>Hint 1</summary>

Write expectation difference as an inner product.

</details>

<details><summary>Hint 2</summary>

Normalize the mean difference when it is nonzero.

</details>

<details><summary>Full solution</summary>

Cauchy-Schwarz bounds every unit-function expectation difference by the mean-difference norm. Choosing that normalised mean difference as the function attains the bound. If it is zero, every difference is zero and the supremum is zero. This identifies the discrepancy exactly with a declared function class rather than an unspecified distance between probabilities.

</details>

<a id="kernel-mean-embeddings-ex-4"></a>

### Exercise 4

Give two distinct distributions with zero linear-kernel MMD.

<details><summary>Hint 1</summary>

The linear mean records only the ordinary first moment.

</details>

<details><summary>Hint 2</summary>

Compare a symmetric two-point law and a point mass.

</details>

<details><summary>Full solution</summary>

A fair law on minus one and plus one and the point mass at zero both have mean zero. Their linear-kernel embeddings and MMD are therefore zero, while the laws have different supports and variances. The kernel is valid but not characteristic on this probability class. More accurate computation of the same mean cannot recover the lost information.

</details>

<a id="kernel-mean-embeddings-ex-5"></a>

### Exercise 5

Why does the Gaussian-kernel characteristic proof need frequency support everywhere?

<details><summary>Hint 1</summary>

MMD zero gives almost-everywhere equality under that spectral law.

</details>

<details><summary>Hint 2</summary>

Characteristic functions are continuous.

</details>

<details><summary>Full solution</summary>

Positive spectral mass in every open neighborhood makes any nonzero continuous discrepancy contribute a positive expectation. Thus zero spectral discrepancy forces equality at every frequency, and characteristic-function uniqueness identifies the laws. A finite frequency support could miss discrepancies elsewhere, so the same proof would not identify arbitrary laws.

</details>

<a id="kernel-mean-embeddings-ex-6"></a>

### Exercise 6

Compute Gaussian MMD squared between two point masses.

<details><summary>Hint 1</summary>

Both self-kernel values are one.

</details>

<details><summary>Hint 2</summary>

The cross term appears twice.

</details>

<details><summary>Full solution</summary>

The value is two minus twice the Gaussian covariance between their locations. It is positive for distinct locations and tends to zero as their separation vanishes. Total variation between distinct point masses remains one, so this metric closeness has another meaning than total-variation closeness even though the kernel is characteristic.

</details>

<a id="kernel-mean-embeddings-ex-7"></a>

### Exercise 7

Where does the empirical embedding error rate come from?

<details><summary>Hint 1</summary>

Split the double sum into equal and unequal indices.

</details>

<details><summary>Hint 2</summary>

Independence factors only the unequal-index terms.

</details>

<details><summary>Full solution</summary>

The diagonal contributes expected k of one variable with itself, while each distinct pair contributes the squared population mean norm. Subtracting the population terms leaves one over n times their difference. A bounded diagonal then gives the squared-error rate and Jensen its norm rate. Dependent observations would alter the off-diagonal expectations and need another analysis.

</details>

<a id="kernel-mean-embeddings-ex-8"></a>

### Exercise 8

Why can the unbiased squared MMD estimator be negative?

<details><summary>Hint 1</summary>

Deleting diagonals removes its exact squared-norm form.

</details>

<details><summary>Hint 2</summary>

Use the identical two-point sample example.

</details>

<details><summary>Full solution</summary>

With the same two distinct points in each sample, the empirical means coincide. The diagonal-free within averages are r, while the cross average is one half of one plus r. Their combination is r minus one, negative. Unbiasedness concerns its expectation over samples, not nonnegativity at every sample. Clipping changes the estimator and its bias.

</details>

<a id="kernel-mean-embeddings-ex-9"></a>

### Exercise 9

What is the unrestricted optimal quadrature weight equation?

<details><summary>Hint 1</summary>

Expand the mean-residual squared norm.

</details>

<details><summary>Hint 2</summary>

Differentiate the positive-definite quadratic in weights.

</details>

<details><summary>Full solution</summary>

The squared error is mean norm squared minus twice weights transpose z plus weights transpose K times weights. Its unique minimiser solves K w equal z, and the minimum subtracts z transpose K inverse z. Extra positivity or unit-sum constraints define another problem and need not preserve these unconstrained weights.

</details>

<a id="kernel-mean-embeddings-ex-10"></a>

### Exercise 10

Does characteristicness guarantee a bandwidth-independent discrepancy magnitude?

<details><summary>Hint 1</summary>

Keep the two laws fixed and let bandwidth grow.

</details>

<details><summary>Hint 2</summary>

The Gaussian kernel tends pointwise to one.

</details>

<details><summary>Full solution</summary>

No. Dominated convergence makes both within expectations and the cross expectation tend to one, so MMD tends to zero as bandwidth grows even for distinct laws. Characteristicness says zero discrepancy at each fixed positive finite bandwidth implies equal laws. It supplies no uniform positive separation across changing bandwidths or data-dependent kernel choices.

</details>
`;export{e as default};