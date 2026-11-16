var e=`---
id: deep-dive-multivariate-statistics-wishart-distribution
title: "The Wishart distribution"
license: CC BY-SA 4.0
---

# The Wishart distribution

The Wishart distribution is the matrix analogue of a sum of independent squared normals. It appears naturally when estimating a multivariate-normal covariance and supplies the reference result behind Hotelling's T-squared. This L4 article builds its definition from Gaussian outer products, proves its mean and rank facts, and distinguishes those elementary derivations from the deeper density and independence theorems. Preparation is [the multivariate normal](multivariate-statistics-multivariate-normal.md), [sample covariance](multivariate-statistics-mean-vectors-covariance.md), and [Hotelling's T-squared](multivariate-statistics-hotellings-t-squared.md).

## Outer products as random matrices

Let Z_1,...,Z_m be independent N_d(0,Sigma) vectors with Sigma positive definite. Define W=sum_{i=1}^m Z_i Z_i^T. This is a Wishart random matrix with scale Sigma and degrees of freedom m, written W_d(Sigma,m). Each outer product is positive semidefinite: for any a, a^T Z_iZ_i^T a=(a^T Z_i)²≥0. Therefore W is positive semidefinite. Taking expectations entrywise gives E[W]=sum_i E[Z_iZ_i^T]=m Sigma. This is a full proof of the mean identity and does not need a matrix density formula.

The rank of W cannot exceed min(d,m), because each outer product has rank at most one and all its columns lie in the span of Z_1,...,Z_m. With positive-definite Sigma, independent Gaussian vectors span a space of dimension min(d,m) almost surely, a general-position fact; hence W is positive definite almost surely when m≥d. If m<d it is singular for every realization. A parameter named “degrees of freedom” thus also controls whether an inverse exists.

The general-position statement can be understood without a density formula for W. Write Z_i=A U_i with invertible A and independent standard-normal-coordinate vectors U_i. Multiplication by invertible A preserves the span dimension. Condition on the first k<d vectors; their span is a proper linear subspace. A new standard Gaussian vector has a continuous density on R^d and therefore lands in that fixed lower-dimensional subspace with probability zero. Repeating until k=min(d,m) proves the claimed rank almost surely. The proof depends on nonsingular Sigma: if Sigma itself is singular, every Z_i lies in its lower-dimensional support and the rank cannot reach d.

The mean identity also checks the sample-covariance normalization. From the Gaussian sample theorem, (n-1)S has Wishart degrees of freedom n-1, so E[(n-1)S]=(n-1)Sigma and hence E[S]=Sigma. The elementary unbiasedness result actually holds for any independent identically distributed vectors with finite second moments, not only Gaussian ones; Gaussianity is needed for the full Wishart law and independence of sample mean and S. Distinguishing the expectation identity from the distributional theorem prevents a common overclaim.

**Worked example: two observed vectors.** Take illustrative vectors z_1=(1,0) and z_2=(0,2). Their outer products are diag(1,0) and diag(0,4), so W=diag(1,4). It is positive definite with determinant four. If the second vector were instead (2,0), both outer products would lie on the first axis and W would be diag(5,0), singular. These are fixed invented vectors used to show the matrix sum; they are not asserted to have been sampled from a Gaussian law.

In one dimension, W is simply sum_i Z_i². With variance sigma², each Z_i/sigma is standard normal, so W/sigma² has a chi-squared distribution with m degrees of freedom. This one-dimensional reduction makes the Wishart notation less mysterious. In higher dimensions, diagonal entries are sums of squares, but off-diagonal entries are cross-products and are generally dependent on the diagonals. Treating each entry as an independent chi-squared variable would destroy the covariance-matrix structure.

For a fixed vector a, a^T W a=sum_i(a^T Z_i)². Since each a^T Z_i is an independent normal with variance a^T Sigma a, the ratio a^T W a/(a^T Sigma a) has a chi-squared law with m degrees of freedom whenever a^T Sigma a>0. This one-direction statement follows directly from the definition and scalar normal theory. It does **not** imply that such quadratic forms for several directions are independent: their underlying projections of the same Z_i may be correlated. The matrix distribution records those relationships.

If B is a fixed d-by-d invertible matrix and Y_i=BZ_i, then the outer-product sum becomes B W B^T and the new Gaussian scale is B Sigma B^T. Thus a Wishart law transforms naturally with coordinate changes. For the worked fixed vectors, scaling the second coordinate by three changes W=diag(1,4) to diag(1,36); that arithmetic mirrors the random-matrix transformation but does not turn the fixed pair into a random draw. The same congruence rule governs ordinary covariance matrices.

## Why sample covariance has a Wishart law

For independent X_1,...,X_n from N_d(mu,Sigma), let Xbar be the sample mean and S=(n-1)^{-1}sum_i(X_i-Xbar)(X_i-Xbar)^T. The classical Gaussian theorem says (n-1)S~W_d(Sigma,n-1) and Xbar is independent of S. Its proof orthogonally rotates the n observation-index directions: one direction carries the mean, while n-1 orthogonal contrasts carry independent Gaussian residual vectors. The distributional independence requires joint Gaussianity; uncorrelated mean and residual contrasts alone would not suffice for arbitrary distributions.

The factor n-1 is explained geometrically: centering imposes sum_i(X_i-Xbar)=0, leaving at most n-1 independent contrast directions. The elementary rank bound already shows S is singular when d≥n. Under the Gaussian theorem and n>d, S is positive definite almost surely, licensing the inverse in ordinary Hotelling T². The [Advanced Statistical Inference Gaussian chapter](../books/advanced-statistical-inference-reference/multivariate-normal-geometry.md) develops this matrix geometry; the full Wishart density and determinant moments are beyond this short reading.

For an application, check whether the stated covariance is a population Sigma, a sample S, or a sum of products W. Their expected values differ by the degrees-of-freedom factor. An inverse-Wishart or Wishart prior introduces further parameter conventions and posterior assumptions; the outer-product definition alone does not provide a prior recommendation. Likewise a visibly asymmetric empirical matrix usually signals a computational or transcription mistake, because every outer-product sum is symmetric exactly before rounding.

The distribution depends on a convention: some authors parameterize by an inverse scale or use different normalization in the density. The outer-product definition fixes our meaning unambiguously. If observations are time-correlated or have unequal covariances, the centered sum generally does not have the same Wishart law. Estimating covariance from time series therefore requires their own dependence model; [multivariate Time Series](../books/time-series/multivariate-series-cointegration.md) treats lagged vector covariance explicitly.

## One diagonal entry as an exact scalar check

For coordinate j with Sigma_jj>0, W_jj=sum_i Z_{ij}². Dividing each coordinate by sqrt(Sigma_jj) gives m independent standard normals, so W_jj/Sigma_jj has a chi-squared distribution with m degrees of freedom. Its expectation is m and variance 2m, hence E[W_jj]=m Sigma_jj and Var(W_jj)=2m Sigma_jj². This recovers the diagonal part of the matrix mean and quantifies its random spread. It does not make the W_jj independent across j: correlated coordinates of the same Z_i lead to dependent diagonal sums. Even when Sigma is diagonal, a general claim about all matrix entries must account for shared observations in off-diagonal products.

For the sample covariance, the corresponding diagonal ratio (n-1)S_jj/Sigma_jj has chi-squared degrees of freedom n-1 under independent Gaussian sampling. That scalar fact is useful for checking a reported matrix convention, but it is not enough by itself to derive the joint law of the whole covariance matrix or Hotelling's inverse-covariance statistic.

## Exercises

### Exercise 1 {#multivariate-statistics-wishart-distribution-ex-mean}

For W_2(diag(2,3),5), find E[W].
<details><summary>Hint 1</summary>Each Gaussian outer product has expectation Sigma.</details>
<details><summary>Hint 2</summary>Add five identical expectation matrices.</details>
<details><summary>Solution</summary>E[W]=5 diag(2,3)=diag(10,15). This is an expectation of a random matrix, not the value of every realization.</details>

### Exercise 2 {#multivariate-statistics-wishart-distribution-ex-rank}

Can W_5(Sigma,3) be invertible for positive-definite Sigma? Explain.
<details><summary>Hint 1</summary>W is a sum of three rank-at-most-one outer products.</details>
<details><summary>Hint 2</summary>Compare its maximum rank with dimension five.</details>
<details><summary>Solution</summary>No. Its rank is at most three, strictly below five, for every realization. The positive-definite scale does not overcome having fewer Gaussian vectors than matrix dimension.</details>

## Sources

Original Euler mean/rank derivations, invented outer-product example and exercises under CC BY-SA 4.0. The Gaussian sample-covariance Wishart and mean-independence results are named imports with their hypotheses; linked Euler primary material gives their proof context. Updated 2026-11-14.
`;export{e as default};