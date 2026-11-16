var e=`---
parent_id: book-advanced-statistical-inference-reference
chapter_id: multivariate-normal-geometry
title: "Multivariate Normal Geometry"
level: graduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Multivariate Normal Geometry

This chapter reviews the geometry of the multivariate normal distribution and its consequences for estimation, testing, and dimension reduction. Many of these properties are special to the normal distribution and fail for other families; recognising when normality is assumed versus when a result is distribution-free is essential.

## The multivariate normal distribution

A random vector $X\\in\\mathbb{R}^{p}$ has the multivariate normal distribution $\\mathcal{N}_{p}(\\mu,\\Sigma)$ if every linear combination $a^{T}X$ is univariate normal. The density exists when $\\Sigma$ is positive definite:

$$f(x)=(2\\pi)^{-p/2}|\\Sigma|^{-1/2}\\exp\\Bigl\\{-\\frac{1}{2}(x-\\mu)^{T}\\Sigma^{-1}(x-\\mu)\\Bigr\\}.$$

### Affine transformations

If $X\\sim\\mathcal{N}_{p}(\\mu,\\Sigma)$ and $Y=AX+b$ for a $q\\times p$ matrix $A$ and vector $b\\in\\mathbb{R}^{q}$, then $Y\\sim\\mathcal{N}_{q}(A\\mu+b,A\\Sigma A^{T})$. In particular, marginal distributions are normal, and conditional distributions are normal.

### Quadratic forms

If $X\\sim\\mathcal{N}_{p}(\\mu,\\Sigma)$ with $\\Sigma$ positive definite, then

$$(X-\\mu)^{T}\\Sigma^{-1}(X-\\mu)\\sim\\chi^{2}_{p}.$$

The level sets $\\{x:(x-\\mu)^{T}\\Sigma^{-1}(x-\\mu)=c\\}$ are ellipsoids with principal axes along the eigenvectors of $\\Sigma$.

## Sampling distributions

For an iid sample $X_{1},\\dots,X_{n}\\sim\\mathcal{N}_{p}(\\mu,\\Sigma)$ with $\\Sigma$ positive definite and $n>p$, define

$$\\bar{X}=\\frac{1}{n}\\sum_{i=1}^{n}X_{i},\\qquad S=\\frac{1}{n-1}\\sum_{i=1}^{n}(X_{i}-\\bar{X})(X_{i}-\\bar{X})^{T}.$$

### Theorem 7.1 — Independence and Wishart distribution

Under the above assumptions:

1. $\\bar{X}\\sim\\mathcal{N}_{p}(\\mu,\\Sigma/n)$.
2. $(n-1)S\\sim\\text{Wishart}_{p}(n-1,\\Sigma)$.
3. $\\bar{X}$ and $S$ are independent.

**Proof sketch.** Whiten first: $Z_i=\\Sigma^{-1/2}(X_i-\\mu)$ are iid $\\mathcal N_p(0,I)$. Choose an $n\\times n$ orthogonal matrix $H$ whose first row is $n^{-1/2}(1,\\ldots,1)$ and put $U_k=\\sum_iH_{ki}Z_i$. The stacked vector remains standard multivariate normal, so $U_1,\\ldots,U_n$ are independent $\\mathcal N_p(0,I)$. Here $U_1=\\sqrt n\\,\\bar Z$, while orthogonal projection onto the remaining rows gives

$$\\sum_{i=1}^n(Z_i-\\bar Z)(Z_i-\\bar Z)^T=\\sum_{k=2}^nU_kU_k^T.$$

The right side is $\\operatorname{Wishart}_p(n-1,I)$ and is independent of $U_1$. Transforming back by $\\Sigma^{1/2}$ proves all three statements. ∎

These properties are *special to normal sampling*. For non-normal data, $\\bar{X}$ and $S$ are generally dependent, and $S$ does not have a Wishart distribution.

## Hotelling's $T^{2}$ test

To test $H_{0}:\\mu=\\mu_{0}$, the Hotelling statistic is

$$T^{2}=n(\\bar{X}-\\mu_{0})^{T}S^{-1}(\\bar{X}-\\mu_{0}).$$

### Theorem 7.2 — Hotelling distribution

Under $H_{0}$ and the normal sampling model with $n>p$,

$$\\frac{n-p}{p(n-1)}T^{2}\\sim F_{p,n-p}.$$

**Proof using an imported quadratic-form theorem.** We use the following
standard normal--Wishart result with all parameters visible: if
$Z\\sim\\mathcal N_p(0,I)$, $W\\sim\\operatorname{Wishart}_p(\\nu,I)$ are
independent, and $\\nu\\ge p$, then

$$\\frac{\\nu-p+1}{p}Z^TW^{-1}Z\\sim F_{p,\\nu-p+1}.$$

This inverse-Wishart quadratic-form theorem is the nontrivial bridge; it does
not follow merely from the univariate definition of an $F$ ratio. Under
$H_0$, whiten to
$Z=\\Sigma^{-1/2}\\sqrt n(\\bar X-\\mu_0)\\sim\\mathcal N_p(0,I)$ and
$W=\\Sigma^{-1/2}(n-1)S\\Sigma^{-1/2}\\sim
\\operatorname{Wishart}_p(n-1,I)$. Theorem 7.1 gives independence, while
$T^2=(n-1)Z^TW^{-1}Z$. Substituting $\\nu=n-1$ into the imported result yields

$$\\frac{n-p}{p(n-1)}T^2\\sim F_{p,n-p}.$$

∎

If $p\\ge n$, then $S$ is singular with probability $1$ and $T^{2}$ is undefined. High-dimensional testing requires different methods, such as ridge-regularized Hotelling tests or random projections.

## Principal component analysis

For a symmetric positive semidefinite matrix $S$ with eigenvalues $\\lambda_{1}\\ge\\lambda_{2}\\ge\\dots\\ge\\lambda_{p}\\ge 0$, the Rayleigh quotient satisfies

$$\\max_{\\|v\\|=1}v^{T}Sv=\\lambda_{1}.$$

### Theorem 7.3 — Variational characterization

The maximum of $v^{T}Sv$ over unit vectors is $\\lambda_{1}$, achieved by any eigenvector corresponding to $\\lambda_{1}$. More generally,

$$\\max_{\\substack{V^{T}V=I_{k}}}\\operatorname{tr}(V^{T}SV)=\\sum_{j=1}^{k}\\lambda_{j},$$

where the maximum is over $p\\times k$ matrices with orthonormal columns.

**Proof.** Write $S=Q\\Lambda Q^{T}$ with $Q$ orthogonal and $\\Lambda=\\operatorname{diag}(\\lambda_{1},\\dots,\\lambda_{p})$. For any unit vector $v$, let $u=Q^{T}v$. Then $v^{T}Sv=u^{T}\\Lambda u=\\sum_{j}\\lambda_{j}u_{j}^{2}$, a convex combination of eigenvalues because $\\sum_{j}u_{j}^{2}=1$. The maximum is $\\lambda_{1}$, achieved when $u=e_{1}$.

For the $k$-dimensional statement, put $U=Q^TV$ and let $a_j$ be the
squared norm of row $j$ of $U$. From $U^TU=I_k$, we have
$0\\le a_j\\le1$ and $\\sum_j a_j=k$. Moreover,

$$\\operatorname{tr}(V^TSV)=\\sum_{j=1}^p\\lambda_j a_j.$$

Because $\\lambda_j\\le\\lambda_k$ for $j>k$ and
$\\sum_{j>k}a_j=\\sum_{j\\le k}(1-a_j)$,

$$\\sum_j\\lambda_j a_j
\\le\\sum_{j\\le k}\\bigl[\\lambda_j a_j+\\lambda_k(1-a_j)\\bigr]
\\le\\sum_{j=1}^k\\lambda_j.$$

Taking the columns of $V$ to be $k$ orthonormal eigenvectors for the largest
eigenvalues attains equality. ∎

If $\\lambda_{1}=\\lambda_{2}$, the leading eigenvector is not unique; any vector in the span of the first two eigenvectors achieves the maximum. Near ties make estimated eigenvectors unstable even when the subspace is stable.

### Selection bias in PCA

Selecting the number of components after inspecting downstream outcomes biases validation. PCA must be recomputed inside each training fold to avoid leakage. The components selected on the full data may not be the most predictive on new data.

## Worked example: Hotelling test

For $p=2$, $n=20$, $\\mu_{0}=(0,0)^{T}$, suppose $\\bar{X}=(0.5,0.3)^{T}$ and $S=\\begin{pmatrix}1&0.4\\\\0.4&1\\end{pmatrix}$.

**Step 1: Compute $T^{2}$.**

$$S^{-1}=\\frac{1}{0.84}\\begin{pmatrix}1&-0.4\\\\-0.4&1\\end{pmatrix},$$

$$T^{2}=20\\cdot(0.5,0.3)\\cdot S^{-1}\\cdot\\begin{pmatrix}0.5\\\\0.3\\end{pmatrix}=\\frac{20}{0.84}\\cdot(0.5-0.12, -0.2+0.3)\\cdot\\begin{pmatrix}0.5\\\\0.3\\end{pmatrix}=\\frac{20}{0.84}\\cdot(0.38\\cdot 0.5+0.1\\cdot 0.3)=\\frac{20}{0.84}\\cdot 0.22\\approx 5.24.$$

**Step 2: $F$ statistic.**

$$F=\\frac{20-2}{2(20-1)}\\cdot 5.24=\\frac{18}{38}\\cdot 5.24\\approx 2.48.$$

**Step 3: Critical value.** $F_{2,18,0.95}\\approx 3.55$. Since $2.48<3.55$, we do not reject $H_{0}$ at level $0.05$.

## Common errors and misconceptions

- **Assuming Wishart sampling for non-normal data.** The Wishart distribution and the independence of $\\bar{X}$ and $S$ are special to normal sampling. Using Hotelling's $T^{2}$ with heavily non-normal data can give invalid p-values.

- **Testing when $p\\ge n$.** Hotelling's $T^{2}$ requires $S^{-1}$. When $p\\ge n$, $S$ is singular. Regularized tests or dimension reduction are needed.

- **Interpreting PCA as causal.** PCA finds directions of maximum variance. These need not correspond to meaningful latent variables or causal factors.

- **Selecting components on the full data.** Using the same data to choose components and evaluate their predictive performance gives optimistic estimates. Cross-validation with internal PCA recomputation is required.

## Constructing Wishart sampling by a row rotation

Write the sample as a matrix with independent centred Gaussian rows after subtracting the population mean. Apply an orthogonal transformation to its observation index, choosing the first transformed row to be the normalised sum.

The transformed rows are jointly Gaussian and have zero cross-covariances, because orthogonality cancels their row inner products. They are therefore independent, each with the original covariance matrix. The first row is square root of sample size times the sample-mean error.

The residual sum of squares and cross-products is the sum of outer products of the remaining transformed rows. This proves independence from the mean and defines its Wishart law as a sum of independent Gaussian outer products.

The construction does not depend on a formal covariance-density formula. It also shows the rank limitation directly: a sum of that many outer products has rank at most the number of residual rows. With positive-definite covariance, an independent Gaussian row matrix has full possible rank almost surely, because a nonzero maximal minor is a polynomial that vanishes on a Lebesgue-null set.

Thus sample covariance is invertible exactly in the nondegenerate regime with at least as many residual rows as dimensions. The chapter’s strict inequality between sample size and dimension expresses that condition.

## A Laplace transform identifies the matrix law

For a positive-semidefinite test matrix, the Laplace transform of one Gaussian outer product is the expectation of an exponential negative quadratic form. Whiten the Gaussian vector and diagonalise the symmetric transformed test matrix.

The expectation factors into one-dimensional Gaussian integrals, each equal to the reciprocal square root of one plus twice its nonnegative eigenvalue. Their product is the corresponding determinant to power minus one-half.

Independent outer products multiply the transforms. For Wishart degrees of freedom $\\nu$, the result is
$$
E\\exp[-\\operatorname{tr}(TW)]
=\\det(I+2\\Sigma^{1/2}T\\Sigma^{1/2})^{-\\nu/2}.
$$
This derivation states the covariance convention and degrees of freedom, avoiding confusion between a covariance estimate and its unnormalised scatter matrix.

## A complete Hotelling-to-F derivation

Whiten the sample mean error to a standard normal vector $Z$, and whiten the independent residual scatter to $W$ with identity covariance and $\\nu=n-1$ degrees of freedom. Then the statistic is $\\nu Z^TW^{-1}Z$.

Separate $Z$ into its length and unit direction. Its squared length is chi-square with $p$ degrees of freedom and is independent of both direction and $W$. Orthogonal invariance of the Wishart law makes its inverse quadratic form along any fixed unit direction have the same law as its first diagonal inverse entry.

Represent $W$ as the Gram matrix of a $\\nu$ by $p$ independent standard Gaussian matrix. Partition its first column from the remaining columns. The block inverse formula makes the reciprocal first inverse entry equal the squared length of that first column after projection off the other columns.

Conditional on those other columns, that projection has rank $\\nu-p+1$. The first column is independent standard Gaussian, so the projected squared length is chi-square with that many degrees of freedom. The squared length of $Z$ remains independent of this whole denominator.

The resulting ratio is therefore
$$
\\frac{n-p}{p(n-1)}T^2\\sim F_{p,n-p}.
$$
Every degree count has a role: one observation-index direction estimates the mean, and another $p-1$ directions are removed in the Gram-matrix Schur complement. This proves the reference distribution rather than treating it as an unexplained table entry.

## Confidence ellipsoids cover all linear contrasts

Let the ellipsoid use the Hotelling critical value at the declared confidence level. On its coverage event, the unknown mean differs from the observed mean by a vector whose sample-covariance norm is bounded.

For any contrast vector, Cauchy–Schwarz in the whitened coordinates bounds its mean error by the square root of the critical value times that contrast’s estimated variance divided by sample size. Maximising over the ellipsoid shows this bound is attained at the appropriate covariance-weighted direction.

Thus one ellipsoid gives simultaneous intervals for every linear contrast, not merely the original coordinate axes. Choosing a contrast after seeing the data does not break that mathematical coverage event because the event already asserts all directions at once.

The price is a larger simultaneous critical value than an ordinary single-contrast t interval. A marginal interval selected after examining many directions does not acquire that protection simply because its standard error uses the same sample covariance.

The contrast’s scientific target still needs interpretation if its direction was chosen adaptively. Simultaneous coverage is a probability statement about the selected linear functional; it does not make the selected direction causal or uniquely scientifically meaningful.

## Eigenvector perturbation is a deterministic geometry theorem

Suppose a symmetric matrix has a unique leading eigenvalue separated from the rest by a positive gap, and a perturbation has operator norm smaller than half that gap. The perturbed largest eigenvalue differs from the original by at most the perturbation norm, as follows by comparing their Rayleigh maxima.

Project the perturbed leading eigenvector onto the original orthogonal complement. Its eigen-equation expresses that projection through the inverse of the perturbed eigenvalue minus the original complementary matrix, applied to the projected perturbation.

The inverse norm is at most the reciprocal of gap minus perturbation size. Hence the sine of the angle is at most perturbation size divided by that remaining gap. This proves a precise leading-vector stability bound.

For a leading subspace, the same argument is a Sylvester equation. Its original complementary eigenvalues lie below all selected perturbed eigenvalues by the relevant remaining gap. An integral of the two matrix exponential semigroups solves the equation and bounds its norm by perturbation norm divided by that gap.

This is the separated-spectrum Davis–Kahan-type comparison used by the earlier exercise. It is deterministic. To turn it into a sampling claim one still needs a probabilistic bound on covariance estimation error and a meaningful population eigengap.

## Worked example: one dimension recovers Student’s t

At dimension one, the Hotelling quadratic is the square of the ordinary studentised sample mean. Its F multiplier becomes one and its denominator degrees of freedom are sample size minus one.

The matrix theorem therefore reduces exactly to the statement that a squared Student t statistic has an F law with one numerator degree of freedom. This is a consistency of the underlying Gaussian mean-scatter geometry, rather than a separate normal approximation.

## Worked example: a singular Gaussian lives in fewer dimensions

Let a centred vector equal $(Z,Z)$ for standard normal $Z$. Its covariance matrix has every entry one and rank one, so no two-dimensional Lebesgue density or ordinary covariance inverse exists.

Its covariance pseudoinverse has every entry one-quarter. The resulting quadratic form is $Z^2$, chi-square with one degree of freedom, not two. The observed vector lies on a known line and carries one Gaussian coordinate.

A sample covariance from such vectors remains singular regardless of how many observations are collected. More observations estimate variation along that line; they do not create variation in the missing perpendicular direction. An intrinsic-coordinate analysis can be valid, but the nonsingular Hotelling theorem cannot be applied with the ambient dimension unchanged.

## Conditional Gaussian laws follow from an independent residual

Partition a jointly Gaussian vector into X and Y, and assume the covariance matrix of Y is positive definite. Subtract from X its mean and its linear regression on the centred Y vector. Direct covariance multiplication shows that the resulting residual has zero covariance with Y. It remains jointly Gaussian with Y because it is an affine transformation of the original vector. Their joint Gaussian characteristic function therefore factorizes, proving independence.

The conditional mean of X given Y is its original mean plus the cross-covariance times inverse covariance of Y times the centred observed Y. The conditional covariance is its marginal covariance minus the cross-covariance quadratic term. The latter is positive semidefinite because it is the covariance of the residual just constructed. This proof also permits a singular residual covariance, in which case the conditional distribution is supported on an affine subspace rather than having a full-dimensional density. Without joint Gaussianity, the same residual calculation establishes linear orthogonality only; it does not justify independence or a constant conditional variance. The distinction underlies both Gaussian prediction and the Wishart independence arguments above.

## Practice exercises

### Exercise 7.1
<a id="multivariate-normal-geometry-legacy-7-1"></a>

For $X\\sim\\mathcal{N}_{p}(0,I_{p})$, show that $\\|X\\|^{2}\\sim\\chi^{2}_{p}$ and compute $\\mathbb{E}[\\|X\\|^{2}]$ and $\\operatorname{Var}(\\|X\\|^{2})$.

<details><summary>Hint 1</summary>

A standard normal vector has independent standard normal coordinates.

</details>
<details><summary>Hint 2</summary>

Sum their independent squared contributions.

</details>
<details><summary>Solution</summary>

$\\|X\\|^{2}=\\sum_{j=1}^{p}X_{j}^{2}$, and each $X_{j}^{2}\\sim\\chi^{2}_{1}$, independent. The sum is $\\chi^{2}_{p}$. Then $\\mathbb{E}[\\|X\\|^{2}]=p$ and $\\operatorname{Var}(\\|X\\|^{2})=2p$. ∎

</details>

### Exercise 7.2
<a id="multivariate-normal-geometry-legacy-7-2"></a>

Let $S$ be the sample covariance of $n$ iid $\\mathcal{N}_{p}(\\mu,\\Sigma)$ observations. Show that $\\mathbb{E}[S]=\\Sigma$.

<details><summary>Hint 1</summary>

Compute the covariance of each observation minus the sample mean.

</details>
<details><summary>Hint 2</summary>

Each such covariance is the population covariance times one minus reciprocal sample size.

</details>
<details><summary>Solution</summary>

$\\mathbb{E}[S]=(n-1)^{-1}\\sum_{i}\\mathbb{E}[(X_{i}-\\bar{X})(X_{i}-\\bar{X})^{T}]$. Using $\\mathbb{E}[(X_{i}-\\mu)(X_{i}-\\mu)^{T}]=\\Sigma$ and $\\operatorname{Var}(\\bar{X})=\\Sigma/n$, we have $\\mathbb{E}[(X_{i}-\\bar{X})(X_{i}-\\bar{X})^{T}]=\\Sigma-\\Sigma/n=(1-1/n)\\Sigma$. Summing over $n$ observations and dividing by $n-1$ gives $\\Sigma$. ∎

</details>

### Exercise 7.3
<a id="multivariate-normal-geometry-legacy-7-3"></a>

For $p=3$ with eigenvalues $\\lambda=(10,9,1)$, compare the perturbation stability of the leading eigenvector with that of the leading two-dimensional subspace.

<details><summary>Hint 1</summary>

Distinguish the internal top-eigenvalue gap from the gap to the discarded subspace.

</details>
<details><summary>Hint 2</summary>

The perturbation comparison divides by the relevant separated-spectrum gap.

</details>
<details><summary>Solution</summary>

Davis--Kahan type bounds scale angular error by the perturbation norm divided by the relevant eigengap. The top eigenvector has gap $10-9=1$, whereas the leading two-dimensional subspace is separated from its complement by $9-1=8$. Thus an estimation error of a fixed size produces a bound about eight times smaller for the subspace. The eigenvalues alone do not prove actual sampling instability: perturbations much smaller than $1$ cannot rotate the leading eigenvector arbitrarily. They show only that errors comparable with the unit gap can move the leading vector materially while the two-dimensional subspace remains much better identified. ∎

</details>


## Further exercises on Gaussian sampling geometry

### Exercise 1.4
<a id="multivariate-normal-geometry-ex-4"></a>

Why does the orthogonal row rotation produce independence only with an additional distributional hypothesis?

<details><summary>Hint 1</summary>

Orthogonality gives zero covariance.

</details>
<details><summary>Hint 2</summary>

Gaussianity turns that into independence.

</details>
<details><summary>Solution</summary>

The transformed rows have block-diagonal covariance. For a jointly Gaussian array this implies independence by factorisation of its characteristic function. Non-Gaussian uncorrelated blocks need not be independent, so the same covariance calculation alone would not prove the sampling decomposition.

</details>

### Exercise 1.5
<a id="multivariate-normal-geometry-ex-5"></a>

Give an iid non-Gaussian sample whose mean and sample variance are dependent.

<details><summary>Hint 1</summary>

Use two independent fair signs.

</details>
<details><summary>Hint 2</summary>

Compare equal and opposite observations.

</details>
<details><summary>Solution</summary>

For two fair signs, equal observations give mean plus or minus one and sample variance zero. Opposite observations give mean zero and sample variance two. Knowing the variance determines whether the mean is zero, proving dependence despite iid sampling.

</details>

### Exercise 1.6
<a id="multivariate-normal-geometry-ex-6"></a>

Why is sample covariance singular when dimension reaches sample size?

<details><summary>Hint 1</summary>

Centred residual rows sum to zero.

</details>
<details><summary>Hint 2</summary>

Their span has at most sample size minus one dimensions.

</details>
<details><summary>Solution</summary>

The residual matrix has rank at most $n-1$. Its Gram scatter and sample covariance share that rank bound. If $p\\ge n$, they cannot have rank $p$, so the ordinary inverse and nonsingular Hotelling pivot are undefined.

</details>

### Exercise 1.7
<a id="multivariate-normal-geometry-ex-7"></a>

Identify the denominator degrees of freedom in the inverse-Wishart entry argument.

<details><summary>Hint 1</summary>

Project one Gaussian column off the other $p-1$.

</details>
<details><summary>Hint 2</summary>

Begin with $
u$ observation dimensions.

</details>
<details><summary>Solution</summary>

The remaining orthogonal complement has dimension $\\nu-(p-1)=\\nu-p+1=n-p$. Its Gaussian squared projection is chi-square with those degrees of freedom. This is the F denominator in the exact pivot.

</details>

### Exercise 1.8
<a id="multivariate-normal-geometry-ex-8"></a>

Prove the all-contrast ellipsoid bound.

<details><summary>Hint 1</summary>

Whiten the mean displacement using sample covariance.

</details>
<details><summary>Hint 2</summary>

Apply Cauchy–Schwarz to the chosen linear functional.

</details>
<details><summary>Solution</summary>

The ellipsoid bounds the norm of $S^{-1/2}(\\mu-\\bar X)$. The contrast equals $(S^{1/2}a)^TS^{-1/2}(\\mu-\\bar X)$, whose absolute value is at most the product of norms. This gives the square root of critical value times $a^TSa/n$, simultaneously for every vector.

</details>

### Exercise 1.9
<a id="multivariate-normal-geometry-ex-9"></a>

Why can a near eigenvalue tie give unstable vectors but a stable larger subspace?

<details><summary>Hint 1</summary>

Different targets use different spectral gaps.

</details>
<details><summary>Hint 2</summary>

A gap inside the selected block does not affect separation from its complement.

</details>
<details><summary>Solution</summary>

A leading vector depends on the top internal gap. A larger leading subspace depends on the gap below that whole block. Perturbations comparable to the smaller gap can rotate vectors inside a well-separated block without moving the block much as a subspace. An actual sampling instability still needs a perturbation-size statement.

</details>

### Exercise 1.10
<a id="multivariate-normal-geometry-ex-10"></a>

Does a covariance pseudoinverse automatically preserve the ambient chi-square degrees of freedom?

<details><summary>Hint 1</summary>

A singular Gaussian has lower intrinsic rank.

</details>
<details><summary>Hint 2</summary>

Use the $(Z,Z)$ example.

</details>
<details><summary>Solution</summary>

No. That rank-one vector has pseudoinverse quadratic $Z^2$ and one degree of freedom. A singular-support theorem must use the relevant rank and declared support. Replacing an inverse numerically does not justify keeping the old nonsingular reference law.

</details>

## Forward and backward connections

This chapter reviewed the special properties of multivariate normal sampling that underpin classical multivariate analysis. In *Dependent Central Limits*, we relax the independence assumption and study what happens when observations are correlated. The [high-dimensional chapter](high-dimensional-inference.md) states separate sparse-design and normal-means regimes rather than extending a fixed-dimensional approximation without its hypotheses.

## Summary

Gaussian row rotations prove mean-scatter independence and Wishart sampling. A Schur-complement projection gives the exact Hotelling F law and its dimension conditions. Confidence ellipsoids protect all contrasts simultaneously, while spectral gaps control deterministic eigenvector and subspace perturbation. Singular support and high-dimensional regimes require explicitly changed targets and reference distributions.
`;export{e as default};