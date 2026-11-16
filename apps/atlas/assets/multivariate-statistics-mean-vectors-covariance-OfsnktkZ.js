var e=`---
id: deep-dive-multivariate-statistics-mean-vectors-covariance
title: "Mean vectors and covariance"
license: CC BY-SA 4.0
---

# Mean vectors and covariance

One number rarely describes a multivariate observation. A mean vector describes its center coordinate by coordinate; a covariance matrix describes spread and linear co-movement. This L3 reading builds the matrix from scalar covariance, proves why it must be positive semidefinite, and explains what a zero off-diagonal entry does and does not say. Preparation is [joint laws and dependence](../books/probability-models-proofs/joint-laws-conditioning-and-dependence.md) and [inner products](../books/linear-algebra-structure-proofs/inner-products-orthogonal-decomposition.md). The full [multivariate-normal geometry chapter](../books/advanced-statistical-inference-reference/multivariate-normal-geometry.md) develops the Gaussian specialization at greater depth.

## The covariance matrix is a quadratic rule

Let X be a random column vector in R^d with finite second moments. Its mean is mu=E[X], and its covariance matrix is Sigma=E[(X-mu)(X-mu)^T]. Entry (i,j) is Cov(X_i,X_j). Matrix symmetry follows from the symmetry of scalar covariance. For any fixed vector a, a^T Sigma a=E[(a^T(X-mu))²]=Var(a^T X)≥0. Thus Sigma is positive semidefinite. This is stronger than requiring every diagonal entry to be nonnegative. An arbitrary symmetric table of numbers with positive diagonal may still give a negative variance for some linear combination and so cannot be a covariance matrix.

For example, the proposed two-by-two matrix with diagonal entries one and off-diagonal entries two is invalid: the variance of X_1-X_2 would be (1,-1)Sigma(1,-1)^T=1+1-4=-2. The failure is visible without eigenvalue software. A valid covariance matrix may be singular. If X_2=2X_1 almost surely, then X_2-2X_1 has zero variance and the vector (-2,1) lies in a zero-variance direction. Singularity therefore records an exact linear relation under the population law, though an empirical matrix can also be singular merely because there are too few observations.

If Y=AX+b for a fixed matrix A and vector b, then E[Y]=A mu+b and Cov(Y)=A Sigma A^T. The first formula follows by linearity of expectation; in the second, subtract the transformed mean and expand the outer product. The transpose and matrix order matter. Translating data changes the mean but not covariance. Scaling one variable multiplies its variance by the square of the scale and its covariance with another variable by one copy of the scale.

## Worked example: a four-point cloud

Take four source-owned illustrative points (1,1),(-1,-1),(1,-1),(-1,1). Their empirical mean is (0,0). With the usual sample denominator n-1=3, the sum of each coordinate's squared deviations is four, while the cross-products are 1,1,-1,-1 and sum to zero. The sample covariance is therefore diag(4/3,4/3). For direction a=(1,1), the variance of the projected coordinates a^T x is a^T S a=8/3 under the sample convention. Directly, the projected values are 2,-2,0,0, whose squared sum is eight; dividing by three agrees.

This sample has zero empirical cross-covariance, but that alone does not establish independence of the coordinates in a population. A sharper population counterexample takes X equally likely to be -1,0,1 and Y=X². Then E[X]=0 and E[XY]=E[X³]=0, so Cov(X,Y)=0; nevertheless Y is determined by X. Covariance captures linear association, not every dependence pattern. Under a **joint Gaussian** law, zero cross-covariance does imply independence, which is a special theorem about that law rather than the definition of covariance.

## Estimation and interpretation

For observed vectors x_1,...,x_n, the sample covariance S=(n-1)^{-1}sum_i(x_i-xbar)(x_i-xbar)^T is positive semidefinite because a^T S a is a sum of squares divided by a positive number. Its rank is at most n-1: the centered sample vectors sum to zero, so no more than n-1 can be linearly independent. When dimension d≥n, S is necessarily singular. The denominator n-1 is unbiased entrywise for independent identically distributed observations with a common finite covariance, but time dependence or unequal sampling weights change that statement. The [multivariate Time Series chapter](../books/time-series/multivariate-series-cointegration.md) develops lagged cross-covariance where the independence shortcut is unavailable.

Covariance has product units: if one coordinate is measured in meters and another in seconds, their covariance has meter-second units. Correlation rescales by marginal standard deviations when both are positive, making a dimensionless comparison, but it can hide important scale. A covariance matrix is a model of second moments, not a causal diagram. Its geometry supports the Mahalanobis and principal-component articles that follow.

For two coordinates with positive variances v_1 and v_2 and covariance c, positive semidefiniteness requires c²≤v_1v_2. This is the squared Cauchy–Schwarz bound. It means a proposed correlation c/sqrt(v_1v_2) must lie between minus one and one. Equality has a sharper interpretation: one centered coordinate is an exact scalar multiple of the other almost surely, provided neither variance is zero. Thus a correlation of exactly one in a population model signals a zero-variance direction and a singular covariance matrix. An empirical correlation near one may instead reflect a short sample or rounding, so the population and sample claims should be kept distinct.

## Exercises

### Exercise 1 {#multivariate-statistics-mean-vectors-covariance-ex-transform}

If X has covariance diag(4,1) and Y=(2X_1,X_2+7), find Cov(Y).
<details><summary>Hint 1</summary>Translation by seven does not affect covariance.</details>
<details><summary>Hint 2</summary>Use A=diag(2,1) in A Sigma A^T.</details>
<details><summary>Solution</summary>A Sigma A^T=diag(2,1)diag(4,1)diag(2,1)=diag(16,1). The first variance is multiplied by 2²; the second remains one.</details>

### Exercise 2 {#multivariate-statistics-mean-vectors-covariance-ex-rank}

Why is the ordinary sample covariance of five observations in R^7 singular?
<details><summary>Hint 1</summary>The five centered observation vectors sum to zero.</details>
<details><summary>Hint 2</summary>Bound the rank of their outer-product sum.</details>
<details><summary>Solution</summary>The centered vectors span a space of dimension at most four, so the sum of their outer products and its scaled covariance matrix have rank at most four. A 7-by-7 matrix of rank at most four is singular.</details>

## Sources

Original Euler exposition, invented four-point cloud and exercises under CC BY-SA 4.0. Related full derivations are in the linked Euler probability, linear-algebra and advanced-inference chapters. Updated 2026-11-14.
`;export{e as default};