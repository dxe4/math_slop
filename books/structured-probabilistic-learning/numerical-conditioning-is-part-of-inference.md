
# Numerical Conditioning Is Part of Inference

## Purpose and prerequisites

This chapter addresses the computational realities of Gaussian process regression and kernel methods. The exact formulas derived in Chapters 4 and 5 involve linear systems with kernel matrices that can be ill-conditioned. Naive computation leads to failed factorizations, negative variances from roundoff, and unstable marginal likelihoods. The chapter assumes familiarity with Gaussian process conditioning (Chapter 4), kernel ridge regression (Chapter 5), and basic numerical linear algebra.

## The Cholesky approach

For a positive-definite matrix $A$, the Cholesky factorization is $A = LL^{T}$ where $L$ is lower triangular with positive diagonal entries. To solve $A\alpha = y$:

1. Compute $L$ such that $LL^{T} = A$.
2. Solve $Lz = y$ for $z$ by forward substitution.
3. Solve $L^{T}\alpha = z$ for $\alpha$ by back substitution.

For GP regression, $A = K + \sigma^{2}I$. The posterior mean at $x_{*}$ is $k_{*}^{T}\alpha$. The posterior variance uses the identity

$$k_{*}^{T}A^{-1}k_{*} = \|L^{-1}k_{*}\|^{2},$$

which is computed by solving $Lv = k_{*}$ and then computing $v^{T}v$.

**Theorem (Cholesky stability).** If $A$ is symmetric positive definite, and the floating-point factorization completes without a nonpositive pivot, overflow, or underflow, its computed factor satisfies $\hat{L}\hat{L}^{T} = A + E$ with $\|E\|_{2} \le c_{n}\epsilon_{\text{mach}}\|A\|_{2}$ to first order, where $c_{n}$ depends on the dimension and $\epsilon_{\text{mach}}$ is machine epsilon.

This is a backward-error statement: the computed factor is exact for a nearby matrix, with a small normwise perturbation under the theorem's assumptions. Ill-conditioning instead amplifies that perturbation in the forward error of a solve or posterior quantity, potentially losing many digits even when the factorization is backward stable.

## Sources of ill-conditioning

**Near-duplicate inputs.** If two training inputs $x_{i}$ and $x_{j}$ are very close, the corresponding rows of $K$ are nearly identical. The kernel matrix becomes nearly singular.

**Long length scales.** When the length scale $h$ is large relative to the input range, $k(x_{i}, x_{j}) \approx \tau^{2}$ for all pairs. The kernel matrix approaches a rank-one matrix plus noise.

**Tiny noise variance.** If $\sigma^{2}$ is very small, $K_{y} = K + \sigma^{2}I$ inherits the ill-conditioning of $K$. This is especially problematic when observations are noiseless or nearly so.

**High-dimensional inputs.** In high dimensions, the RBF kernel decouples: $k(x_{i}, x_{j}) \approx 0$ for most pairs, and $K$ approaches a multiple of the identity. While this is well-conditioned, it also means the model has little structure to exploit.

## Jitter and numerical stabilization

A common remedy is to add a small **jitter** term $jI$ to the kernel matrix:

$$K_{y} = K + \sigma^{2}I + jI.$$

Jitter increases the smallest eigenvalue and improves conditioning. However, it changes the modeled covariance. A jitter of $10^{-6}$ may be numerically harmless but should still be reported. A jitter of $10^{-2}$ is a modeling decision, not merely a numerical fix.

**Guideline.** Start with the smallest jitter that allows the Cholesky factorization to succeed. Report the value. If the required jitter is large relative to the kernel scale, investigate whether the inputs are duplicated, the length scale is misspecified, or the noise variance is underestimated.

## Marginal likelihood computation

The log marginal likelihood is

$$\log p(y \mid \theta) = -\frac{1}{2}y^{T}K_{y}^{-1}y - \frac{1}{2}\log\det K_{y} - \frac{n}{2}\log(2\pi).$$

Using the Cholesky factorization $K_{y} = LL^{T}$:

- The quadratic form is $y^{T}K_{y}^{-1}y = z^{T}z$ where $Lz = y$.
- The log determinant is $\log\det K_{y} = 2\sum_{i=1}^{n}\log L_{ii}$.

Both computations are stable when $K_{y}$ is well-conditioned. When $K_{y}$ is ill-conditioned, the log determinant can be dominated by the smallest eigenvalue, and the quadratic form can be inaccurate.

## Computational complexity

Exact dense GP computation requires:

- $O(n^{2})$ memory to store $K$;
- $O(n^{3})$ time to compute the Cholesky factorization;
- $O(n^{2})$ time per test point for posterior variance (or $O(mn^{2})$ for $m$ test points).

The feasible $n$ depends on hardware, precision, memory, number of hyperparameter iterations, and latency constraints; a fixed cutoff quickly becomes obsolete. Sparse approximations, inducing-point methods, and structured kernels reduce the cost but introduce approximation or structural assumptions that must be audited.

## Worked example: diagnosing ill-conditioning

Consider $n = 5$ points $x = (0, 0.001, 1, 2, 3)$ with an RBF kernel ($h = 1$, $\tau^{2} = 1$) and noise variance $\sigma^{2} = 10^{-6}$. The first two points are nearly identical. The kernel matrix is

$$K \approx \begin{bmatrix} 1 & 0.9999995 & 0.6065307 & 0.1353353 & 0.0111090 \\ 0.9999995 & 1 & 0.6071372 & 0.1356062 & 0.0111424 \\ 0.6065307 & 0.6071372 & 1 & 0.6065307 & 0.1353353 \\ 0.1353353 & 0.1356062 & 0.6065307 & 1 & 0.6065307 \\ 0.0111090 & 0.0111424 & 0.1353353 & 0.6065307 & 1 \end{bmatrix}.$$

The 2-norm condition number of $K_y=K+10^{-6}I$ is approximately $2.3406\times10^6$. Adding jitter $j=10^{-4}$ reduces it to approximately $2.6499\times10^4$. This improves the forward sensitivity substantially while changing the modeled covariance.

## Common errors

- **Hiding jitter.** A jitter term changes the model. It must be reported, not silently adjusted until a result appears.
- **Forming explicit inverses.** Computing $A^{-1}$ explicitly and then multiplying is less stable and more expensive than triangular solves.
- **Treating Cholesky failure as an exact definiteness test.** A factorization can fail in finite precision even when the mathematical matrix is positive definite, especially after asymmetric rounding or severe ill-conditioning. Check symmetry, scaling, kernel construction, and noise parameters before deciding whether the model or the arithmetic is at fault.
- **Assuming scalability without approximation audit.** Sparse and approximate methods trade accuracy for speed. The approximation error must be quantified, not assumed negligible.

## Practice exercises

**Exercise 6.1 (Condition number scaling).** For the RBF kernel on $[0, 1]$ with $n$ equally spaced points and $h = 1/n$, estimate how the condition number of $K$ scales with $n$. Verify numerically for $n = 10, 20, 40$.

**Solution.** Use endpoint-inclusive points $x_i=i/(n-1)$, $i=0,\ldots,n-1$. Then

$$K_{ij}=\exp\!\left[-\frac{n^2(i-j)^2}{2(n-1)^2}\right].$$

The adjacent correlation approaches $e^{-1/2}$, while correlations decay rapidly with index separation. Direct eigensystem computation gives $\kappa_2(K)\approx21.010$, $39.207$, and $53.052$ for $n=10,20,40$. These values do not support the claimed exponential growth; with the length scale tied to the mesh, the dense matrix's entries decay rapidly away from the diagonal in index coordinates. A larger length scale would increase correlations and generally worsen, rather than cure, this source of conditioning.

**Exercise 6.2 (Jitter effect on posterior variance).** Consider a single observation at $x = 0$ with $k(0, 0) = 1$, noise variance $\sigma^{2} = 0.01$, and jitter $j$. Write the posterior variance at $x_{*} = 0$ as a function of $j$ and show that it increases with $j$.

**Solution.** With one observation, $K_{y} = 1 + \sigma^{2} + j$. The posterior variance at $x_{*} = 0$ is

$$\sigma_{*}^{2} = 1 - \frac{1}{1 + \sigma^{2} + j} = \frac{\sigma^{2} + j}{1 + \sigma^{2} + j}.$$

The derivative with respect to $j$ is $(1 + \sigma^{2} + j)^{-2} > 0$. Thus larger jitter inflates the posterior variance, treating some signal variation as noise.

**Exercise 6.3 (Log determinant from Cholesky).** Let $K_{y} = LL^{T}$. Prove that $\log\det K_{y} = 2\sum_{i}\log L_{ii}$.

**Solution.** Since $\det K_{y} = \det(L) \det(L^{T}) = (\det L)^{2}$ and $L$ is triangular with diagonal entries $L_{ii}$, we have $\det L = \prod_{i} L_{ii}$. Therefore $\det K_{y} = (\prod_{i} L_{ii})^{2}$ and $\log\det K_{y} = 2\sum_{i}\log L_{ii}$.

**Exercise 6.4 (Triangular solve vs. explicit inverse).** For a $1000 \times 1000$ positive-definite matrix $A$, compare the operation count of computing $A^{-1}y$ via an explicit inverse versus solving $A\alpha = y$ by Cholesky factorization followed by triangular solves.

**Solution.** Under the convention that a multiplication and an addition count as separate floating-point operations, Cholesky factorization costs about $n^{3}/3$ flops and each triangular solve costs about $n^{2}$, for a one-right-hand-side total of $n^{3}/3+2n^{2}$. Forming an explicit inverse also has cubic leading cost: after factorization it must solve for $n$ inverse columns, rather than the two triangular systems needed for one $y$, and then spend another $O(n^{2})$ flops multiplying the stored inverse by $y$. Thus both routes are $O(n^{3})$ from scratch, but the direct factor-and-solve route avoids the extra cubic inverse construction, uses less storage, and generally has better numerical error behavior.

## Summary and forward pointers

This chapter covered the numerical linear algebra underlying Gaussian process computation. Cholesky factorization is the method of choice for well-conditioned problems; jitter stabilizes ill-conditioned ones at a modeling cost. The cubic complexity of exact dense GPs motivates the approximate methods treated in Chapter 9, "Exact and Approximate Inference."

The next chapter, "Directed Graphical Models," shifts from function-space priors to discrete and mixed variable models represented by directed graphs. Chapter 8, "Undirected Models and Factors," treats the undirected case, and Chapter 9 places both in the context of inference algorithms.
