var e=`---
id: deep-dive-multivariate-statistics-multivariate-normal
title: "The multivariate normal"
license: CC BY-SA 4.0
---

# The multivariate normal

A vector can be Gaussian even when its coordinates are correlated. The defining property is that **every** linear combination is univariate normal, including degenerate normal variables of variance zero. This L3 article uses that definition to calculate transformed means and covariances, clarify the singular case, and show the exact assumption behind the familiar “uncorrelated implies independent” rule. Read [mean vectors and covariance](multivariate-statistics-mean-vectors-covariance.md) and the [Probability Gaussian-vector chapter](../books/probability-models-proofs/gaussian-vectors-and-multivariate-normal.md). The primary [Advanced Statistical Inference chapter](../books/advanced-statistical-inference-reference/multivariate-normal-geometry.md) proves the fuller geometry and inference route.

## A definition that survives singular covariance

Write X~N_d(mu,Sigma) when every a^T X is normal with mean a^Tmu and variance a^TSigma a. Sigma must be symmetric positive semidefinite. If Sigma is positive definite, X has the familiar density proportional to exp[-(x-mu)^TSigma^{-1}(x-mu)/2], with determinant normalization. If Sigma is singular, that inverse and ordinary d-dimensional density do not exist. The distribution instead lives on an affine subspace determined by zero-variance directions. The linear-combination definition covers both cases without pretending a singular matrix is invertible.

One way to construct a Gaussian vector is X=mu+AZ for independent standard normal coordinates Z, giving Sigma=AA^T. Every linear combination is a scalar normal because it is a linear combination of independent normal variables. Conversely every positive-semidefinite Sigma admits such a factorization, for instance through its spectral decomposition. A zero eigenvalue means a direction with no random spread, not a probability mass missing from the model.

For a fixed matrix B and vector c, Y=BX+c is multivariate normal with mean Bmu+c and covariance B Sigma B^T. This follows immediately because every linear combination u^T Y equals a constant plus (B^T u)^T X. No independence assumption between X's coordinates is needed. In particular, a subset of coordinates is Gaussian, and a sum or difference of coordinates remains Gaussian.

## Worked example: decorrelation by sums and differences

Let Z and W be independent N(0,1), and set X_1=Z+W, X_2=Z-W. Each has variance two. Their covariance is Cov(Z+W,Z-W)=Var(Z)-Var(W)=0; cross terms vanish by independence. The vector (X_1,X_2) is jointly Gaussian because it is a linear transform of (Z,W). Its covariance is diag(2,2), so X_1 and X_2 are independent N(0,2). The last implication is special to joint Gaussianity: merely checking separate normal marginals would not establish it if their joint construction were unknown.

To see the boundary, let Z be standard normal and let S be an independent random sign, equally likely plus or minus one. Put U=Z and V=SZ. Both marginals are N(0,1), and E[UV]=E[SZ²]=E[S]E[Z²]=0. Yet |U|=|V| almost surely, so they are dependent. Their joint law lies on two crossing lines and is not jointly Gaussian. Separate Gaussian marginals plus zero covariance therefore do not meet the joint-Gaussian theorem's hypothesis.

## Conditioning and geometry

For a jointly Gaussian pair with nonsingular covariance block for the conditioned coordinates, the conditional mean is affine and conditional covariance is the Schur complement. In the scalar case, if Var(X)=v_X>0 and Cov(X,Y)=c, then E[Y|X]=mu_Y+(c/v_X)(X-mu_X), while Var(Y|X)=v_Y-c²/v_X. The formula is the linear projection from covariance geometry; joint Gaussianity makes it the full conditional expectation rather than merely the best linear predictor. Positive semidefiniteness ensures the Schur-complement variance is nonnegative.

In the worked independent pair, c=0, so observing X_1 leaves the conditional law of X_2 at N(0,2). If instead both coordinates equal Z, the covariance matrix is singular and observing one determines the other exactly; its conditional variance is zero. A formula requiring an inverse of a singular block must be replaced by a statement on the supported subspace, not forced through numerical regularization without changing the model.

Gaussian geometry is useful because linear transformations and conditioning stay within one family. It is also restrictive: tails, changing covariance over time and nonlinear dependence may be poorly described by that family. The [Time Series state-space chapter](../books/time-series/state-space-kalman-filter.md) uses Gaussian conditioning for an exact recursive filter and states what remains only a best linear update without Gaussianity.

## A singular Gaussian example

Let Z be standard normal and set X=(Z,2Z). Every linear combination aX_1+bX_2=(a+2b)Z is normal, so X is jointly Gaussian. Its covariance is [[1,2],[2,4]], with determinant zero. Every observed point lies on the line x_2=2x_1, and the direction (-2,1) has variance zero. There is no two-dimensional Lebesgue density with an inverse-covariance quadratic form, although X_1 itself has an ordinary one-dimensional normal density. Conditioning on X_1 reveals X_2 exactly, with conditional mean 2X_1 and variance zero. This example shows why the linear-combination definition, rather than a positive-definite density formula, is the correct starting point for Gaussian vectors.

If a numerical routine adds a small diagonal term to this covariance, it produces a different full-dimensional Gaussian model with positive variance perpendicular to the line. That can be useful as a measurement-error assumption, but the added variance should be stated rather than hidden as an “inverse fix.”

## Exercises

### Exercise 1 {#multivariate-statistics-multivariate-normal-ex-transform}

If Z and W are independent N(0,1), find the mean and variance of 2Z-W.
<details><summary>Hint 1</summary>Linearity gives the mean.</details>
<details><summary>Hint 2</summary>Independence removes the covariance cross term.</details>
<details><summary>Solution</summary>The mean is zero. Its variance is 2²Var(Z)+(-1)²Var(W)=4+1=5, so 2Z-W is N(0,5) by closure of jointly Gaussian linear combinations.</details>

### Exercise 2 {#multivariate-statistics-multivariate-normal-ex-uncorrelated}

Why does the pair U=Z,V=SZ in the article fail the joint-Gaussian independence conclusion?
<details><summary>Hint 1</summary>Check whether |U| and |V| can vary independently.</details>
<details><summary>Hint 2</summary>Use the almost-sure identity |U|=|V|.</details>
<details><summary>Solution</summary>The marginals are normal and covariance is zero, but their magnitudes agree almost surely, making them dependent. Hence the pair is not jointly Gaussian; the theorem “zero covariance implies independence” requires a jointly Gaussian vector, not only normal marginals.</details>

## Sources

Original Euler exposition, Gaussian constructions and exercises under CC BY-SA 4.0. Full geometry is linked to actual Euler primary chapters. Updated 2026-11-14.
`;export{e as default};