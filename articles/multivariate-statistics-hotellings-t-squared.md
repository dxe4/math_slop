
# Hotelling's T-squared

A scalar t statistic compares a sample mean with a target after scaling by estimated uncertainty. Hotelling's T-squared extends that geometry to a vector mean using the **sample covariance inverse**. This L4 article derives the statistic's coordinate invariance, calculates a hypothetical two-coordinate summary, and states the finite-sample Gaussian reference law with its degrees of freedom. It is an inference tool under assumptions, not a universal distance threshold. Preparation is [Mahalanobis distance](multivariate-statistics-mahalanobis-distance.md), [the multivariate normal](multivariate-statistics-multivariate-normal.md), and [sample inference](../books/statistics-with-r/confidence-tests-power.md).

## A mean difference has covariance S/n

Let X_1,...,X_n be independent identically distributed d-vectors with population mean mu and covariance Sigma. Their sample mean Xbar has covariance Sigma/n because cross-covariances among distinct observations vanish. Let S be the ordinary sample covariance with denominator n-1. For a proposed mean mu_0 and invertible S, define T²=n(Xbar-mu_0)^T S^{-1}(Xbar-mu_0). The factor n appears because the uncertainty is about the **mean**, not one new observation. Omitting it would calculate a Mahalanobis distance on the wrong scale.

Under an invertible affine coordinate change Y_i=AX_i+b, transform mu_0 to A mu_0+b. The mean difference becomes A(Xbar-mu_0) and S becomes A S A^T. The inverse identity from the Mahalanobis article makes T² unchanged. The statistic is therefore independent of a reversible choice of coordinate units or basis, provided the hypothesis and sample covariance are transformed together. If S is singular, the ordinary T² is undefined; a pseudoinverse changes the test and does not inherit the standard reference law automatically.

**Worked example: a hypothetical summary.** Suppose n=5, d=2, Xbar=(1,1), proposed mu_0=(0,0), and sample covariance S=diag(1,4). The quadratic form is 1²/1+1²/4=5/4. Multiplying by n gives T²=25/4. The second coordinate has larger raw variance and so contributes only one quarter to the unscaled quadratic form. These are invented summary values for arithmetic; no five observations or fitted test result is claimed. If the first coordinate were rescaled by two, its mean difference would become two and its sample variance four, leaving the contribution one and T² unchanged.

## The finite-sample reference law

If the X_i are independent N_d(mu_0,Sigma), Sigma is positive definite, and n>d, then under the null the statistic satisfies [(n-d)/(d(n-1))]T²~F_{d,n-d}. The exact result uses independence of the Gaussian sample mean and sample covariance and the Wishart distribution of (n-1)S. Those facts are developed in the [Wishart article](multivariate-statistics-wishart-distribution.md) and the [Advanced Statistical Inference primary](../books/advanced-statistical-inference-reference/multivariate-normal-geometry.md); this short article states the reference theorem rather than reproducing its full matrix-density proof.

For the invented n=5,d=2 summary, the transformed statistic is (3/(2·4))(25/4)=75/32. That number can be compared with an F distribution only if the hypothetical summary came from a sample satisfying the null and model assumptions. We do not assign it a p-value as though the data were observed. For d=1, the formula becomes T²~F_{1,n-1}, the square of the ordinary one-sample t statistic, showing consistency with the scalar case.

The condition n>d matters. The centered n observations span at most n-1 dimensions, so when d≥n the sample covariance is singular. Even with n just above d, its inverse can be unstable. Heavy tails, time dependence, selection of coordinates after seeing the data, and unequal sampling designs can invalidate the exact F law. A coordinate-invariant statistic is still tied to a particular sampling model.

## A confidence region uses the same geometry

Under the same independent Gaussian assumptions, invertible S and n>d, the set of candidate means mu_0 whose transformed T² does not exceed a chosen F quantile is a confidence ellipsoid for the population mean. Its axes follow eigenvectors of S; a direction with larger estimated variance receives a wider radius. The center is Xbar, and the factor n makes the ellipsoid contract as sample size grows under fixed dimension and stable covariance. This is an inversion of a family of tests, not a new distance formula.

If dimension grows with n, the exact finite-sample threshold changes and the ellipsoid can become extremely wide or undefined as S approaches singularity. Selecting a favorable pair of coordinates after viewing Xbar also changes the claimed coverage of a displayed two-dimensional slice. A plotted ellipse is meaningful only with the sample design, dimension, and selection rule that produced it.

## What a rejection would mean

Under the stated null model, a large T² indicates a mean vector departure relative to estimated covariance. It does not reveal which coordinate is the sole cause: correlations can make a combination of moderate coordinate changes decisive. Inspecting individual coordinates after a global rejection is a separate multiple-comparison problem if inferential claims are made. Likewise a nonsignificant result does not prove the mean equals mu_0; small n or a noisy direction can leave low power. Report the target vector, dimension, sample size, covariance convention and assumptions before interpreting the statistic.

## Exercises

### Exercise 1 {#multivariate-statistics-hotellings-t-squared-ex-compute}

For n=6, Xbar-mu_0=(2,1) and S=diag(4,1), calculate T².
<details><summary>Hint 1</summary>The inverse covariance is diag(1/4,1).</details>
<details><summary>Hint 2</summary>Compute the quadratic form before multiplying by n.</details>
<details><summary>Solution</summary>The form is 2²/4+1²/1=2. Multiplying by n=6 gives T²=12. The calculation presumes S is invertible, as it is here.</details>

### Exercise 2 {#multivariate-statistics-hotellings-t-squared-ex-dimension}

Why is the ordinary T² unavailable for n=5 observations in d=7 dimensions?
<details><summary>Hint 1</summary>Centered sample vectors sum to zero.</details>
<details><summary>Hint 2</summary>Bound the rank of S by n-1.</details>
<details><summary>Solution</summary>S has rank at most four because five centered vectors span at most a four-dimensional space. A 7-by-7 covariance estimate of rank at most four is singular, so S^{-1} and the ordinary T² formula are undefined.</details>

## Sources

Original Euler geometric derivation, hypothetical summary and exercises under CC BY-SA 4.0. The exact Gaussian F reference is a named theorem imported from multivariate normal and Wishart theory, with its assumptions stated; linked Euler primary chapters provide the broader proof context. Updated 2026-11-14.
