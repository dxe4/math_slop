
# Canonical correlation

When two groups of variables are measured together, a single cross-correlation can miss a relationship spread across several coordinates. Canonical correlation chooses one linear combination from each group to maximize their correlation. This L4 article derives the covariance-normalized optimization, works a diagonal example, and explains why a large sample canonical correlation can be unstable. Preparation is [mean vectors and covariance](multivariate-statistics-mean-vectors-covariance.md), [principal components](multivariate-statistics-principal-components.md), and [the spectral theorem](../books/linear-algebra-structure-proofs/finite-dimensional-spectral-theorems.md).

## The paired projection problem

Let centered random vectors X in R^p and Y in R^q have block covariance matrices Sigma_XX, Sigma_YY and Sigma_XY=Cov(X,Y). Assume the within-set covariance matrices are positive definite. For nonzero a,b, the correlation of a^T X and b^T Y is a^T Sigma_XY b divided by sqrt[(a^T Sigma_XX a)(b^T Sigma_YY b)]. Scaling a or b does not change its magnitude, so impose both projected variances equal to one. The first canonical correlation is the maximum nonnegative value after allowing a sign choice.

Whiten each block: u=Sigma_XX^{1/2}a and v=Sigma_YY^{1/2}b. The objective becomes u^T C v for unit u,v, where C=Sigma_XX^{-1/2}Sigma_XY Sigma_YY^{-1/2}. The largest singular value of C is the maximum by the singular-value variational principle. Squared canonical correlations are nonzero eigenvalues of C C^T, equivalently of Sigma_XX^{-1}Sigma_XY Sigma_YY^{-1}Sigma_YX after the appropriate similarity transformation. They lie between zero and one because the full block covariance is positive semidefinite. This is a covariance geometry result, not a statement that one set causes the other.

**Worked example: one perfect and one noisy channel.** Let independent standard normals U,V,N define X=(U,V) and Y=(U+sqrt(3)N,V). Then Sigma_XX=I_2, Sigma_YY=diag(4,1), and Sigma_XY=I_2. Whitening gives C=diag(1/2,1). Its singular values are one and one half. The first pair can choose X_2=V and Y_2=V, giving correlation one. The second uses U and U+sqrt(3)N, whose covariance is one and variances one and four, giving correlation 1/2. The first perfect relation is built into the example; it does not predict that real measurement channels will match exactly.

Successive canonical pairs are chosen with within-set orthogonality constraints relative to previous pairs. Their directions can be nonunique when singular values repeat. Changing units within a set by an invertible linear transformation changes coefficient vectors but leaves population canonical correlations invariant when the covariance matrices are transformed consistently. If a within-set covariance is singular, the ordinary whitening inverse is unavailable; reducing to a supported subspace or regularizing changes the analysis and should be stated.

The worked Gaussian channels also expose the meaning of a zero cross-covariance direction. Replace Y_2=V with an independent new standard normal W. Then the whitened cross-covariance becomes diag(1/2,0), so the canonical correlations are one half and zero. The zero second value means no **linear** cross-set correlation remains in that direction under this model. If X and Y were not jointly Gaussian, a zero canonical correlation would not rule out nonlinear dependence. In the original example, the exact shared V coordinate creates a canonical correlation of one and a singular residual relation, which may be implausible with measurement noise.

For sample CCA, empirical within-set covariance matrices are singular when the number of centered observations is too small for their dimensions. Even when they are invertible, a tiny eigenvalue makes whitening unstable. Regularizing the covariance blocks can produce a usable score, but the resulting correlations depend on the regularizer and lose the exact unregularized interpretation. A complete analysis states the target, dimension and training rule rather than reporting only the maximum sample correlation.

## What a sample result can support

Sample canonical correlation can be large even when population cross-covariance is zero if p or q is large relative to n. Many coefficient directions are searched to maximize one number, creating selection optimism. In the extreme case of enough dimensions, a sample may admit an almost perfectly matching linear combination by fitting noise. A useful empirical report shows dimension, sample size, preprocessing, stability under resampling and performance of the learned pair on held-out observations. A significance test needs its null model and adjustment for the maximization; the geometric formula alone supplies neither.

Canonical correlation differs from PCA: PCA chooses variance directions within one variable set, while CCA chooses cross-set association after normalizing both within-set variances. A low-variance coordinate can dominate CCA if it is highly predictable from the other set. This makes CCA useful for paired measurements but also sensitive to covariance estimation and weak eigenvalues. In time series, contemporaneous CCA ignores lag; the [multivariate Time Series chapter](../books/time-series/multivariate-series-cointegration.md) gives the lag-covariance language needed before interpreting lead and lag.

## Exercises

### Exercise 1 {#multivariate-statistics-canonical-correlation-ex-noisy}

In the worked case, compute Corr(U,U+sqrt(3)N).
<details><summary>Hint 1</summary>The covariance is Var(U)=1.</details>
<details><summary>Hint 2</summary>The second variance is 1+3=4.</details>
<details><summary>Solution</summary>The correlation is 1/sqrt(1·4)=1/2. Independence of U and N removes the cross term in the variance calculation.</details>

### Exercise 2 {#multivariate-statistics-canonical-correlation-ex-scale}

Why does replacing a by 3a leave the magnitude of its canonical-pair correlation unchanged?
<details><summary>Hint 1</summary>The covariance numerator scales by three.</details>
<details><summary>Hint 2</summary>The variance of (3a)^T X scales by nine.</details>
<details><summary>Solution</summary>The numerator gains factor three, while its standard-deviation factor gains sqrt(9)=3. They cancel for positive scaling, so the correlation is unchanged. A negative scale reverses the sign but not its magnitude.</details>

## Sources

Original Euler covariance optimization, invented Gaussian channels and exercises under CC BY-SA 4.0. The linked spectral and covariance primaries supply the matrix foundations. Updated 2026-11-14.
