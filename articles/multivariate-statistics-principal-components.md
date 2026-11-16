
# Principal components via the spectral theorem

Principal component analysis chooses directions of large observed variance. It is a geometry of a covariance matrix, not a method for finding causes or predicting a labeled outcome. This L3 article proves the first-direction rule from the spectral theorem, calculates a small point cloud, and explains what changes under rescaling. Preparation is [mean vectors and covariance](multivariate-statistics-mean-vectors-covariance.md) and the [finite-dimensional spectral theorem](../books/linear-algebra-structure-proofs/finite-dimensional-spectral-theorems.md).

## The variance maximization problem

Center observed vectors x_i at their sample mean and form sample covariance S. For a unit direction v, the projected data are v^T(x_i-xbar), and their sample variance is v^T S v. Because S is symmetric positive semidefinite, the spectral theorem gives orthonormal eigenvectors q_j and nonnegative eigenvalues lambda_1≥...≥lambda_d. Write v as sum_j c_j q_j with sum c_j²=1. Then v^T S v=sum_j lambda_j c_j²≤lambda_1. Equality holds at any unit eigenvector of the largest eigenvalue. If the leading eigenvalue is repeated, there is a whole leading eigenspace, so “the” first direction is not unique.

The first principal-component **score** of observation i is q_1^T(x_i-xbar). Its loading vector is q_1, defined up to sign: replacing q_1 by -q_1 reverses every score but changes no fit or variance. The second direction maximizes variance subject to being orthogonal to the first, giving q_2, and so on. The total variance is tr(S)=sum_j lambda_j. A reported fraction of variance explained by the first k components is sum_{j≤k}lambda_j/tr(S) when tr(S)>0. It describes this sample covariance; it does not certify a stable population dimension.

**Worked example: a rectangular cloud.** Take four source-owned points (2,1),(-2,-1),(2,-1),(-2,1). Their mean is zero. The first coordinate squared values sum to sixteen, the second coordinate squared values sum to four, and cross-products 2,2,-2,-2 sum to zero. With sample denominator three, S=diag(16/3,4/3). Its leading eigenvector is (1,0) and leading eigenvalue 16/3. The first scores are 2,-2,2,-2; the second scores are 1,-1,-1,1. The total variance is 20/3, so the first component explains (16/3)/(20/3)=4/5 of the empirical variance. The data were chosen for exact arithmetic, not sampled from a latent-factor model.

## Reconstruction and scale

With k leading orthonormal directions in matrix Q_k, the rank-k reconstruction of a centered vector z is Q_k Q_k^T z. Orthogonal projection minimizes squared Euclidean reconstruction error among points in that chosen subspace. Summing the sample residual squared lengths gives (n-1)sum_{j>k}lambda_j. This follows by expanding each z in the full eigenbasis and retaining the first k coordinates; the omitted squared coordinates sum to the omitted eigenvalues times n-1. The statement uses Euclidean error in the original coordinate units.

If the first coordinate is changed from meters to centimeters while the second stays in its old unit, the covariance transforms and the leading direction can change dramatically. PCA on standardized coordinates instead uses a correlation matrix and answers a different question: variation measured in each variable's own standard-deviation units. Neither choice is automatically correct. State whether analysis used covariance or correlation, how missing values were handled, and whether centering and scaling parameters were learned only from training data when PCA feeds a predictive model.

The worked cloud shows the scale issue exactly. If its second coordinate is multiplied by three while the first stays fixed, the covariance becomes diag(16/3,12), so the leading component switches to the second axis. Nothing about the four underlying point identities changed; only a coordinate unit changed. Standardizing both coordinates to unit sample variance would instead give correlation matrix I, whose two eigenvalues tie. In that standardized analysis no unique first direction exists. These calculations show why a reported loading vector without its preprocessing rule is incomplete information.

PCA reconstruction also has an information boundary. A projection fitted from all observations, including later held-out outcomes, can leak distributional information into a predictive evaluation even if no labels were used. Fit centering, scaling and eigenvectors within each training window. For a time series, ordinary rowwise PCA ignores lag ordering; a high contemporaneous variance direction may be useless for forecasting. The [multivariate Time Series chapter](../books/time-series/multivariate-series-cointegration.md) develops lagged covariance and vector prediction separately.

PCA also ignores group labels. A low-variance direction can be highly predictive of a class even if PCA discards it; a high-variance direction can be irrelevant for classification. Later [linear discriminant analysis](multivariate-statistics-linear-discriminant-analysis.md) explicitly uses class information. For Gaussian inference, the [Advanced Statistical Inference geometry chapter](../books/advanced-statistical-inference-reference/multivariate-normal-geometry.md) develops more than this covariance maximization, while [Time Series multivariate covariance](../books/time-series/multivariate-series-cointegration.md) distinguishes time-lag structure that ordinary PCA of rows ignores.

## Exercises

### Exercise 1 {#multivariate-statistics-principal-components-ex-fraction}

For covariance eigenvalues 9,3,0, what fraction of total variance does the first component explain?
<details><summary>Hint 1</summary>Add all three eigenvalues for the trace.</details>
<details><summary>Hint 2</summary>Divide the largest eigenvalue by the total.</details>
<details><summary>Solution</summary>The total variance is 9+3+0=12. The first component explains 9/12=3/4 of it. The zero eigenvalue marks an exact zero-variance sample direction.</details>

### Exercise 2 {#multivariate-statistics-principal-components-ex-reconstruction}

For the worked cloud and k=1, reconstruct centered point (2,1) and find its squared Euclidean residual.
<details><summary>Hint 1</summary>The leading direction is the first coordinate axis.</details>
<details><summary>Hint 2</summary>Projection removes the second coordinate.</details>
<details><summary>Solution</summary>Projection onto span(1,0) gives (2,0). The residual is (0,1), whose squared Euclidean length is one. This is a geometric reconstruction error, not a classification error.</details>

## Sources

Original Euler spectral argument, invented cloud and exercises under CC BY-SA 4.0. The linked linear-algebra chapter supplies the spectral theorem, and the linked primary inference chapter gives broader Gaussian geometry. Updated 2026-11-14.
