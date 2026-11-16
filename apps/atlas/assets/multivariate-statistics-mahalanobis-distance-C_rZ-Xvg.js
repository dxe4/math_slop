var e=`---
id: deep-dive-multivariate-statistics-mahalanobis-distance
title: "Mahalanobis distance"
license: CC BY-SA 4.0
---

# Mahalanobis distance

Euclidean distance treats one unit in each coordinate as comparable. Covariance geometry supplies a different scale: a displacement along a naturally variable direction is less surprising than the same raw displacement along a tightly concentrated direction. This L3 reading defines squared Mahalanobis distance, proves its invariance under invertible re-expression, and separates its geometric value from a distributional p-value. Preparation is [mean vectors and covariance](multivariate-statistics-mean-vectors-covariance.md) and [spectral geometry](../books/linear-algebra-structure-proofs/finite-dimensional-spectral-theorems.md).

## Whitening a displacement

For a positive-definite covariance Sigma and center mu, define D²(x,mu)=(x-mu)^T Sigma^{-1}(x-mu). Positive definiteness ensures the inverse exists and D² is nonnegative, zero only at x=mu. If Sigma=Q diag(lambda_1,...,lambda_d)Q^T with orthonormal eigenvectors and positive eigenvalues, then D² is the sum of squared coordinates of Q^T(x-mu) divided by their corresponding lambda_j. Equivalently, a whitening map Sigma^{-1/2} transforms the displacement to a vector whose ordinary squared Euclidean length is D².

This calculation explains why covariance off-diagonals matter. If two coordinates move together, a displacement along their common direction can be comparatively ordinary, while a displacement that breaks their usual relation can be unusual. Dividing each coordinate by its own standard deviation but ignoring correlation fails to capture that distinction. The formula also has coherent units: Sigma^{-1} cancels the coordinate-unit products, yielding a dimensionless squared distance when the covariance and x are expressed in matching units.

**Proposition.** Under an invertible affine change y=Ax+b, transform center to A mu+b and covariance to A Sigma A^T. Then the squared Mahalanobis distance of y from its transformed center equals D²(x,mu).

*Proof.* The transformed displacement is A(x-mu). Since A is invertible, (A Sigma A^T)^{-1}=A^{-T}Sigma^{-1}A^{-1}. Substitution gives (x-mu)^T A^T A^{-T}Sigma^{-1}A^{-1}A(x-mu)=(x-mu)^TSigma^{-1}(x-mu). ∎

The invariance allows a change from meters to centimeters or a rotation of axes without changing the distance, provided covariance is transformed consistently. Changing the data but leaving the old Sigma in place is a different calculation. A noninvertible map discards directions, so equality is not expected in general; it can only measure what survives the projection.

## Worked example: unequal coordinate scales

Take mu=(0,0), Sigma=diag(4,1), and x=(2,1). The first coordinate displacement is two units with variance four, contributing 2²/4=1. The second displacement is one unit with variance one, also contributing one. Thus D²=2 and D=sqrt(2). Raw Euclidean squared distance would be 2²+1²=5. Now rescale the first coordinate by three: y=(6,1) and covariance becomes diag(36,1). Its Mahalanobis calculation is 6²/36+1²/1=2, unchanged, while its Euclidean squared distance jumps to 37. The difference is precisely why a covariance-aware metric is useful when coordinate units differ.

If X is multivariate normal N_d(mu,Sigma) with known positive-definite Sigma, whitening makes Sigma^{-1/2}(X-mu) a vector of independent standard normals. Its squared length D²(X,mu) therefore has a chi-squared distribution with d degrees of freedom. That reference law uses the **population** mu and Sigma and joint Gaussianity. Replacing them with estimates from the same sample changes the distribution; assigning a chi-squared p-value without adjustment can be wrong, especially at high dimension. The [advanced inference Gaussian chapter](../books/advanced-statistical-inference-reference/multivariate-normal-geometry.md) develops the full context.

## Correlation changes the direction of surprise

Take Sigma=[[1,0.8],[0.8,1]] and center zero. Its eigenvectors point along (1,1) and (1,-1), with eigenvalues 1.8 and 0.2 respectively. The displacement x=(1,1) has squared Euclidean length two, but squared Mahalanobis distance 2/1.8=10/9. The displacement y=(1,-1) has the same Euclidean length two and squared Mahalanobis distance 2/0.2=10. Moving together is ordinary under positive correlation; moving in opposite directions is much less compatible with the covariance ellipse. Dividing each coordinate only by its marginal standard deviation would assign both points squared distance two and miss the contrast. This is why off-diagonal covariance is central rather than decorative.

The example assumes a known population Sigma. If it was estimated from four observations, a very small eigenvalue might be sample instability rather than a reliable population constraint. Interpret the geometric calculation and the evidence for its covariance separately.

## Singularity and regularization

When Sigma is singular, some linear combination has zero variance. The ordinary inverse does not exist. A Moore–Penrose pseudoinverse can measure distance within the supported covariance subspace, but it assigns zero penalty to a displacement in a zero-eigenvalue direction unless support membership is checked separately. Under an exact singular Gaussian law, a point outside the affine support is impossible rather than “distance zero” in that direction. A sample covariance is automatically singular when dimension is at least sample size, even if the population covariance is nonsingular, so empirical singularity need not be a scientific constraint.

Adding a positive multiple of the identity before inversion creates a regularized metric. That may be useful, but it changes the distance and breaks the exact affine invariance under arbitrary rescalings unless the regularizer is transformed appropriately. State the regularization and the purpose of the distance—description, anomaly ranking, or a formal test. A distance is a geometric summary; its threshold needs a probabilistic model and a declared false-alarm interpretation.

## Exercises

### Exercise 1 {#multivariate-statistics-mahalanobis-distance-ex-diagonal}

For mu=(0,0), Sigma=diag(9,4), and x=(3,4), compute D².
<details><summary>Hint 1</summary>Each diagonal covariance entry divides the corresponding squared displacement.</details>
<details><summary>Hint 2</summary>Compute 3²/9 and 4²/4.</details>
<details><summary>Solution</summary>D²=9/9+16/4=1+4=5, so D=sqrt(5). The second coordinate contributes more despite only one extra raw unit of displacement.</details>

### Exercise 2 {#multivariate-statistics-mahalanobis-distance-ex-rescale}

Rescale the first coordinate of Exercise 1 by two. Find the new x, covariance and D².
<details><summary>Hint 1</summary>Use A=diag(2,1).</details>
<details><summary>Hint 2</summary>The first variance multiplies by four.</details>
<details><summary>Solution</summary>The new point is (6,4) and covariance is diag(36,4). The distance is 6²/36+4²/4=1+4=5, unchanged because the same invertible transformation was applied to point and covariance.</details>

## Sources

Original Euler proof, invented coordinate example and exercises under CC BY-SA 4.0. Linked primary chapters supply covariance and Gaussian context. Updated 2026-11-14.
`;export{e as default};