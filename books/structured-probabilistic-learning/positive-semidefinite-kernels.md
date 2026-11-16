
# Positive-Semidefinite Kernels

## Purpose and prerequisites

This chapter defines positive-semidefinite kernels, proves their closure properties, and constructs the standard examples used in Gaussian process modeling. A kernel is the building block that encodes similarity and smoothness assumptions in a nonparametric prior over functions. The chapter assumes familiarity with inner-product spaces, positive-semidefinite matrices, and basic multivariate calculus. Chapter 1 introduced the distinction between probabilistic and point-prediction frameworks; here we develop the covariance structures that make the probabilistic framework concrete.

## Definition and equivalence

**Definition (Positive-semidefinite kernel).** Let $\mathcal{X}$ be a nonempty set. A symmetric function $k: \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ is a positive-semidefinite kernel if, for every positive integer $n$, every choice of points $x_{1}, \dots, x_{n} \in \mathcal{X}$, and every coefficient vector $c \in \mathbb{R}^{n}$,

$$\sum_{i=1}^{n}\sum_{j=1}^{n} c_{i} c_{j} k(x_{i}, x_{j}) \ge 0.$$

The sum can be written compactly as $c^{T} K c \ge 0$ where $K$ is the $n \times n$ Gram matrix with entries $K_{ij} = k(x_{i}, x_{j})$. Symmetry of $k$ guarantees that $K$ is symmetric; the defining inequality guarantees that $K$ is positive semidefinite for every finite set of points.

**Definition (Gram matrix).** For a symmetric function $k$ and points $x_{1}, \dots, x_{n}$, the Gram matrix $K \in \mathbb{R}^{n \times n}$ has entries $K_{ij} = k(x_{i}, x_{j})$.

The definition does not require $\mathcal{X}$ to be a vector space, a metric space, or anything more than a set. This generality is one reason kernels are powerful: they can be defined on strings, graphs, sets, and other structured objects.

## Feature-map construction

**Theorem (Feature-map sufficiency).** Let $\mathcal{H}$ be a real inner-product space and let $\varphi: \mathcal{X} \to \mathcal{H}$ be an arbitrary map. Then the function

$$k(x, z) = \langle \varphi(x), \varphi(z) \rangle_{\mathcal{H}}$$

is a positive-semidefinite kernel on $\mathcal{X}$.

**Proof.** For any $n$, any $x_{1}, \dots, x_{n} \in \mathcal{X}$, and any $c \in \mathbb{R}^{n}$,

$$\sum_{i,j} c_{i} c_{j} k(x_{i}, x_{j}) = \sum_{i,j} c_{i} c_{j} \langle \varphi(x_{i}), \varphi(x_{j}) \rangle = \left\langle \sum_{i} c_{i}\varphi(x_{i}), \sum_{j} c_{j}\varphi(x_{j}) \right\rangle = \left\| \sum_{i} c_{i}\varphi(x_{i}) \right\|^{2} \ge 0.$$

The inner product is bilinear and symmetric, so the cross-terms combine into a single norm squared. Nonnegativity of the norm completes the proof.

The converse is also true: every positive-semidefinite kernel admits such a representation, possibly in an infinite-dimensional space. This is the content of the Moore-Aronszajn theorem, which constructs a unique reproducing-kernel Hilbert space (RKHS) for any kernel. We do not develop RKHS theory in detail here; the construction is treated in the companion volume on functional analysis.

## Closure properties

**Theorem (Closure under addition and scaling).** Let $k_{1}$ and $k_{2}$ be positive-semidefinite kernels on $\mathcal{X}$, and let $a \ge 0$ be a scalar. Then $k_{1} + k_{2}$ and $a k_{1}$ are positive-semidefinite kernels.

**Proof.** For any finite set of points and coefficients $c$,

$$\sum_{i,j} c_{i} c_{j} (k_{1} + k_{2})(x_{i}, x_{j}) = \sum_{i,j} c_{i} c_{j} k_{1}(x_{i}, x_{j}) + \sum_{i,j} c_{i} c_{j} k_{2}(x_{i}, x_{j}) \ge 0 + 0 = 0.$$

Similarly, $a \sum_{i,j} c_{i} c_{j} k_{1}(x_{i}, x_{j}) \ge 0$ because $a \ge 0$ and the sum is nonnegative.

**Theorem (Closure under product).** Let $k_{1}$ and $k_{2}$ be positive-semidefinite kernels on $\mathcal{X}$. Then their pointwise product $k(x, z) = k_{1}(x, z) k_{2}(x, z)$ is a positive-semidefinite kernel.

**Proof sketch.** The product of two Gram matrices that are positive semidefinite is not necessarily positive semidefinite in the matrix-product sense, but the Schur product (entrywise product) of two positive-semidefinite matrices is positive semidefinite. This is Schur's product theorem. Since the Gram matrix of the product kernel is the Schur product of the two individual Gram matrices, the result follows.

These closure properties are practical tools. If a domain expert believes a function contains a linear trend plus periodic seasonal variation plus unstructured noise, the kernel can be built as a sum of a linear kernel, a periodic kernel, and a white-noise kernel.

## Standard kernel examples

### Linear kernel

For $\mathcal{X} = \mathbb{R}^{d}$, the linear kernel is

$$k(x, z) = x^{T} z.$$

The feature map is $\varphi(x) = x$ and the RKHS is the space of linear functions. The Gram matrix on $n$ points is $X X^{T}$ where $X$ is the $n \times d$ data matrix; this is always positive semidefinite.

### Polynomial kernel

For $a \ge 0$ and a positive integer $p$, the polynomial kernel is

$$k(x, z) = (a + x^{T} z)^{p}.$$

When $p = 1$ and $a = 0$, this reduces to the linear kernel. When $p = 2$, expanding $(a + x^{T}z)^{2}$ shows that the feature map contains all pairwise products of coordinates, plus linear and constant terms. The parameter $a$ controls the relative weight of lower-order terms.

### Radial basis function (RBF) kernel

The RBF kernel, also called the squared-exponential or Gaussian kernel, is

$$k(x, z) = \tau^{2} \exp\!\left(-\frac{\|x - z\|^{2}}{2h^{2}}\right),$$

where $\tau^{2} > 0$ is the output-scale (marginal variance) and $h > 0$ is the length scale. The RBF kernel is infinitely differentiable in each argument, which implies that Gaussian processes with this kernel have mean-square derivatives of all orders. In practice, this can be too smooth for modeling functions with sharp transitions.

**Proof that the RBF kernel is positive semidefinite.** Write

$$\|x - z\|^{2} = \|x\|^{2} + \|z\|^{2} - 2 x^{T} z.$$

Then

$$k(x, z) = \tau^{2} \exp\!\left(-\frac{\|x\|^{2}}{2h^{2}}\right) \exp\!\left(\frac{x^{T} z}{h^{2}}\right) \exp\!\left(-\frac{\|z\|^{2}}{2h^{2}}\right).$$

The middle factor $\exp(x^{T}z / h^{2})$ is the exponential of an inner product. Expanding the exponential as a power series and using the closure properties shows that this factor is a kernel. The outer factors have the form $f(x)f(z)$, which is a valid kernel with one-dimensional feature map $f$. The product of kernels is a kernel, so the RBF kernel is positive semidefinite.

### Matérn kernel

The Matérn kernel family interpolates between the roughness of the Ornstein-Uhlenbeck process and the smoothness of the RBF kernel. With smoothness parameter $\nu > 0$ and length scale $h > 0$, it is

$$k_{\nu}(x, z) = \tau^{2} \frac{2^{1-\nu}}{\Gamma(\nu)} \left(\frac{\sqrt{2\nu}\,\|x-z\|}{h}\right)^{\nu} K_{\nu}\!\left(\frac{\sqrt{2\nu}\,\|x-z\|}{h}\right),$$

where $K_{\nu}$ is the modified Bessel function of the second kind. Under the usual stationary Euclidean construction, the process has an $m$th mean-square derivative for every integer $m<\nu$; almost-sure sample-path regularity is a separate statement. The common cases $\nu = 1/2$, $\nu = 3/2$, and $\nu = 5/2$ simplify to:

- $\nu = 1/2$: $k(x, z) = \tau^{2} \exp(-\|x-z\|/h)$ (exponential, continuous but nondifferentiable);
- $\nu = 3/2$: $k(x, z) = \tau^{2}(1 + \sqrt{3}\,\|x-z\|/h) \exp(-\sqrt{3}\,\|x-z\|/h)$;
- $\nu = 5/2$: $k(x, z) = \tau^{2}(1 + \sqrt{5}\,\|x-z\|/h + 5\|x-z\|^{2}/(3h^{2})) \exp(-\sqrt{5}\,\|x-z\|/h)$.

### Periodic kernel

For inputs on the real line, a periodic kernel with period $T$ is

$$k(x, z) = \tau^{2} \exp\!\left(-\frac{2\sin^{2}(\pi(x-z)/T)}{h^{2}}\right).$$

This maps the one-dimensional input to the unit circle via $(\cos(2\pi x/T), \sin(2\pi x/T))$ and applies an RBF kernel in that two-dimensional space. It is useful for modeling seasonal or daily cycles.

## Worked example: constructing a composite kernel

Suppose we model daily temperature as a smooth long-term trend plus a yearly periodic component plus observation noise. A reasonable kernel is

$$k(x, z) = k_{\text{RBF}}(x, z; h_{\text{trend}}) + k_{\text{per}}(x, z; T = 365, h_{\text{season}}) + \sigma_{n}^{2}\delta_{xz},$$

where $\delta_{xz}=1$ if $x=z$ and $0$ otherwise. On distinct inputs this white-noise kernel contributes $\sigma_n^2I$. Repeated identical inputs instead have covariance $\sigma_n^2$ under this input-indexed process. Independent measurement errors attached to observation records belong in the likelihood and contribute $\sigma_n^2I$ even when input values repeat.

To verify that this composite kernel is valid, we check each term:

1. The RBF kernel is positive semidefinite by the proof above.
2. The periodic kernel is positive semidefinite because it is an RBF kernel composed with a valid feature map to the circle.
3. The white-noise kernel is positive semidefinite: after grouping repeated inputs, each block is a nonnegative multiple of an all-ones matrix. For distinct inputs the blocks are one-dimensional and the Gram matrix is diagonal.
4. Sums of positive-semidefinite kernels are positive semidefinite.

Therefore the composite kernel is valid.

## Common errors

- **Treating any symmetric similarity as a kernel.** A symmetric function $s(x, z)$ need not be positive semidefinite. The Gram matrices must be checked, or a valid construction (feature map, sum, or product of known kernels) must be exhibited.
- **Confusing length scale with relevance.** A large length scale does not mean the input is irrelevant; it means the function is expected to vary slowly. A small length scale permits rapid variation but does not force it.
- **Ignoring trade-offs between kernel parameters and noise.** On a finite data set, several combinations of output scale, length scale, and noise variance can have similar likelihoods, producing weak identification. Jointly rescaling signal and noise does not generally leave the likelihood unchanged; inspect the likelihood surface or use justified priors.
- **Using RBF kernels for discontinuous functions.** The RBF kernel implies infinite smoothness. If the true function has jumps or kinks, the model will smooth them out and may produce overconfident predictions near discontinuities.

## Practice exercises

**Exercise 2.1 (Kernel construction).** Prove that $k(x, z) = 1 + xz$ is a positive-semidefinite kernel on $\mathbb{R}$.

**Solution.** Define the feature map $\varphi(x) = (1, x) \in \mathbb{R}^{2}$. Then $\langle \varphi(x), \varphi(z) \rangle = 1 \cdot 1 + x \cdot z = 1 + xz = k(x, z)$. Since $k$ is an inner product in a Hilbert space, it is positive semidefinite by the feature-map theorem.

**Exercise 2.2 (Invalid correlation).** Show that the matrix

$$\begin{bmatrix} 1 & 1.2 \\ 1.2 & 1 \end{bmatrix}$$

is not a valid Gram matrix for any kernel.

**Solution.** A Gram matrix must be positive semidefinite. The eigenvalues of this matrix are $1 + 1.2 = 2.2$ and $1 - 1.2 = -0.2$. Since one eigenvalue is negative, the matrix is not positive semidefinite. Equivalently, the determinant is $1 - 1.44 = -0.44 < 0$, which is impossible for a positive-semidefinite $2 \times 2$ matrix with positive diagonal entries.

**Exercise 2.3 (Sum and product closure).** Let $k_{1}(x, z) = x^{T}z$ and $k_{2}(x, z) = (1 + x^{T}z)^{2}$ on $\mathcal{X} = \mathbb{R}^{2}$. For points $x_{1} = (1, 0)$, $x_{2} = (0, 1)$, $x_{3} = (1, 1)$, compute the Gram matrix of $k = k_{1} + k_{2}$ and verify that it is positive semidefinite by checking its eigenvalues.

**Solution.** First compute $k_{1}$ values: $k_{1}(x_{1}, x_{1}) = 1$, $k_{1}(x_{1}, x_{2}) = 0$, $k_{1}(x_{1}, x_{3}) = 1$, $k_{1}(x_{2}, x_{2}) = 1$, $k_{1}(x_{2}, x_{3}) = 1$, $k_{1}(x_{3}, x_{3}) = 2$.

For $k_{2}$, note $x_{i}^{T}x_{j}$ equals $1, 0, 1, 1, 1, 2$ for the same pairs. Then $k_{2} = (1 + x^{T}z)^{2}$ gives $4, 1, 4, 4, 4, 9$.

Adding: $K = \begin{bmatrix} 5 & 1 & 5 \\ 1 & 5 & 5 \\ 5 & 5 & 11 \end{bmatrix}$. Its eigenvalues are $16$, $4$, and $1$, all positive. Thus $K$ is positive definite.

**Exercise 2.4 (Length-scale intuition).** Consider the RBF kernel on $\mathbb R$ with $\tau^2=1$, fixed points $x_1=0$, $x_2=d$ with $d>0$, and length scale $h$. What is their correlation? What happens as $h\to0$ and $h\to\infty$?

**Solution.** The correlation is $k(0,d)=\exp(-d^2/(2h^2))$. For fixed $d>0$, it tends to $0$ as $h\to0$ and to $1$ as $h\to\infty$. Thus a short length scale makes distinct points weakly coupled, while a long length scale makes the prior vary slowly across the fixed separation.

## Summary and forward pointers

This chapter defined positive-semidefinite kernels, proved their closure under addition and multiplication, and constructed the standard examples used in practice. The feature-map perspective connects kernels to inner-product spaces; the Gram-matrix perspective connects them to positive-semidefinite matrices.

The next chapter, "Gaussian Processes through Finite Distributions," assembles kernels into full stochastic processes. Chapter 4, "Conditioning a Gaussian Process," shows how to update beliefs about function values given data, and Chapter 5, "Kernel Ridge and GP Means: Same Algebra, Different Claims," clarifies the relationship between the optimization and probabilistic viewpoints.
