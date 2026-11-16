var e=`---
parent_id: book-structured-probabilistic-learning
chapter_id: gaussian-processes-through-finite-distributions
title: "Gaussian Processes through Finite Distributions"
level: graduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Gaussian Processes through Finite Distributions

## Purpose and prerequisites

This chapter defines Gaussian processes as consistent families of finite-dimensional multivariate Gaussian distributions. A Gaussian process is not a distribution over functions in the sense of computer programs; it is a specification that every finite collection of function values has a joint Gaussian distribution with mean and covariance determined by a mean function and a kernel. The chapter assumes multivariate Gaussian distributions and positive-semidefinite kernels (Chapter 2). It states the measure-theoretic extension result rather than requiring the reader to prove it.

## Definition

**Definition (Gaussian process).** Let $\\mathcal{X}$ be an index set, $m: \\mathcal{X} \\to \\mathbb{R}$ a mean function, and $k: \\mathcal{X} \\times \\mathcal{X} \\to \\mathbb{R}$ a positive-semidefinite kernel. A Gaussian process (GP) with mean $m$ and covariance $k$ is a collection of random variables $\\{f(x)\\}_{x \\in \\mathcal{X}}$ such that, for every finite set of points $x_{1}, \\dots, x_{n} \\in \\mathcal{X}$, the vector

$$(f(x_{1}), \\dots, f(x_{n}))^{T}$$

has a multivariate Gaussian distribution with mean vector $\\mu \\in \\mathbb{R}^{n}$ and covariance matrix $K \\in \\mathbb{R}^{n \\times n}$ given by

$$\\mu_{i} = m(x_{i}), \\quad K_{ij} = k(x_{i}, x_{j}).$$

We write $f \\sim \\mathcal{GP}(m, k)$.

The definition requires $k$ to be positive semidefinite so that $K$ is a valid covariance matrix for every finite set of points. The Kolmogorov extension theorem guarantees that a consistent family of finite-dimensional distributions extends to a probability measure on the product space $\\mathbb{R}^{\\mathcal{X}}$, provided the mean and covariance structures are consistent. For Gaussian distributions, consistency is automatic because marginals of a Gaussian are Gaussian with the appropriate subvector mean and submatrix covariance.

## What a Gaussian process is not

A common misconception is that a Gaussian process asserts that the realized functions are Gaussian-shaped, or that the process is a distribution over analytic formulas. Neither is true. The GP specifies the joint distribution of function values at any finite set of inputs. The shape of individual sample paths depends on the kernel:

- RBF kernels produce very smooth paths;
- Matérn kernels with small $\\nu$ produce rough paths;
- the periodic kernel below enforces period $T$ in its finite-dimensional distributions.

The process says nothing about the function between evaluated points except through the covariance structure encoded in the kernel.

## Prior samples and finite approximations

To visualize a GP prior, one typically evaluates it on a dense grid. Let $x_{1}, \\dots, x_{n}$ be grid points and let $K$ be the corresponding covariance matrix. A sample from the prior is obtained by drawing

$$f \\sim \\mathcal{N}(m, K),$$

where $m$ is the vector of mean function values and $f = (f(x_{1}), \\dots, f(x_{n}))^{T}$. If $K$ is positive definite, one may compute $K=LL^T$ by Cholesky and set $f=m+Lz$ with $z\\sim\\mathcal N(0,I_n)$. A merely positive-semidefinite $K$ may have zero pivots; an eigendecomposition or another symmetric square root samples the resulting degenerate Gaussian exactly. Adding jitter makes Cholesky possible by changing the covariance model.

**Example (Prior sample from RBF kernel).** Consider $\\mathcal{X} = [0, 1]$ with $m(x) = 0$ and the RBF kernel $k(x, z) = \\exp(-(x-z)^{2}/(2h^{2}))$ with $h = 0.1$. On a grid of $n = 200$ points, the covariance matrix $K$ has entries $K_{ij} = \\exp(-(x_{i}-x_{j})^{2}/0.02)$. The Cholesky factor $L$ is lower triangular with $L_{ii} > 0$. Drawing $z_{i} \\sim \\mathcal{N}(0, 1)$ independently and forming $f = Lz$ gives a sample path. Because $h$ is small, the path varies rapidly; because the kernel is infinitely differentiable, the path is visually smooth.

## Common kernels and their sample-path properties

The choice of kernel determines the qualitative behavior of GP sample paths. The following table summarizes the standard options:

| Kernel | Formula (simplified) | Differentiability |
|--------|----------------------|-------------------|
| Linear | $k(x, z) = x^{T}z$ | Random linear functions |
| RBF | $\\tau^{2}\\exp(-\\|x-z\\|^{2}/(2h^{2}))$ | Infinitely differentiable |
| Matérn-$1/2$ | $\\tau^{2}\\exp(-\\|x-z\\|/h)$ | No first mean-square derivative |
| Matérn-$3/2$ | $\\tau^{2}(1 + \\sqrt{3}r/h)\\exp(-\\sqrt{3}r/h)$ | One mean-square derivative |
| Matérn-$5/2$ | $\\tau^{2}(1 + \\sqrt{5}r/h + 5r^{2}/(3h^{2}))\\exp(-\\sqrt{5}r/h)$ | Two mean-square derivatives |
| Periodic | $\\tau^{2}\\exp(-2\\sin^{2}(\\pi(x-z)/T)/h^{2})$ | Smooth and exactly $T$-periodic |

Sums of kernels can represent superposition of effects. For example, $k = k_{\\text{RBF}} + k_{\\text{per}}$ yields sample paths that are smooth and contain a periodic component. Products of kernels can make one component's effect vary with another; for example, $k(x, z) = k_{1}(x_{1}, z_{1}) \\cdot k_{2}(x_{2}, z_{2})$ on $\\mathcal{X} = \\mathcal{X}_{1} \\times \\mathcal{X}_{2}$ encodes an interaction structure.

## Worked example: drawing from a two-point prior

Consider $\\mathcal{X} = \\mathbb{R}$ with $m(x) = 0$ and $k(x, z) = \\exp(-(x-z)^{2}/2)$. Evaluate at $x_{1} = 0$ and $x_{2} = 1$. The covariance matrix is

$$K = \\begin{bmatrix} k(0, 0) & k(0, 1) \\\\ k(1, 0) & k(1, 1) \\end{bmatrix} = \\begin{bmatrix} 1 & e^{-1/2} \\\\ e^{-1/2} & 1 \\end{bmatrix} \\approx \\begin{bmatrix} 1 & 0.6065 \\\\ 0.6065 & 1 \\end{bmatrix}.$$

The Cholesky factor is $L$ with $L_{11}=1$, $L_{21}=e^{-1/2}$, and $L_{22}=\\sqrt{1-e^{-1}}\\approx\\sqrt{0.6321}\\approx0.7951$. A sample is $f=Lz$ where $z=(z_1,z_2)^T$ has independent standard-normal entries. The marginal variance at each point is $1$, and the correlation is $e^{-1/2}\\approx0.6065$.

## Common errors

- **Confusing the process with its finite approximation.** A GP is defined for all $x \\in \\mathcal{X}$, not just a grid. The grid is a computational convenience.
- **Assuming RBF smoothness implies truth.** The RBF kernel encodes a prior belief in smoothness. If the true function is not smooth, the model will be misspecified regardless of how well it fits training data.
- **Ignoring kernel choice in uncertainty quantification.** The width of the posterior predictive interval depends on the kernel. A model with a kernel that is too long-scale will produce overconfident predictions; one that is too short-scale will produce noisy, underconfident predictions.
- **Forgetting that the prior matters.** With little data, the posterior resembles the prior. A zero-mean prior will pull predictions toward zero in regions without observations.

## Practice exercises

**Exercise 3.1 (Marginal variance).** Let $f \\sim \\mathcal{GP}(0, k)$ with $k(x, z) = \\min(x, z)$ on $\\mathcal{X} = [0, \\infty)$. For any $x > 0$, what is the marginal variance $\\operatorname{Var}(f(x))$? What is the correlation between $f(x)$ and $f(z)$ for $x < z$?

**Solution.** The marginal variance is $\\operatorname{Var}(f(x)) = k(x, x) = \\min(x, x) = x$. The correlation is

$$\\operatorname{Corr}(f(x), f(z)) = \\frac{k(x, z)}{\\sqrt{k(x, x)k(z, z)}} = \\frac{x}{\\sqrt{xz}} = \\sqrt{\\frac{x}{z}}.$$

As $z \\to \\infty$ with $x$ fixed, the correlation tends to $0$. This kernel is the covariance of standard Brownian motion.

**Exercise 3.2 (Sum of independent GPs).** Let $f_{1} \\sim \\mathcal{GP}(m_{1}, k_{1})$ and $f_{2} \\sim \\mathcal{GP}(m_{2}, k_{2})$ be independent. Show that $f = f_{1} + f_{2}$ is a Gaussian process, and identify its mean and covariance functions.

**Solution.** For any finite set of points, $(f_{1}(x_{1}), \\dots, f_{1}(x_{n}))$ and $(f_{2}(x_{1}), \\dots, f_{2}(x_{n}))$ are independent multivariate Gaussian vectors. Their sum is multivariate Gaussian with mean $m_{1} + m_{2}$ and covariance $k_{1} + k_{2}$. Thus $f \\sim \\mathcal{GP}(m_{1} + m_{2}, k_{1} + k_{2})$.

**Exercise 3.3 (Cholesky sampling).** For the two-point example in the text with $K = \\begin{bmatrix} 1 & r \\\\ r & 1 \\end{bmatrix}$ and $r = 0.6$, compute the Cholesky factor $L$ explicitly. If $z = (1, -1)^{T}$, what is the sample $f = Lz$?

**Solution.** $L_{11} = 1$, $L_{21} = r = 0.6$, $L_{22} = \\sqrt{1 - r^{2}} = \\sqrt{0.64} = 0.8$. Then

$$f = Lz = \\begin{bmatrix} 1 & 0 \\\\ 0.6 & 0.8 \\end{bmatrix}\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 0.6 - 0.8 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ -0.2 \\end{bmatrix}.$$

**Exercise 3.4 (Kernel misspecification).** Suppose the true function is $f(x) = |x|$ on $[-1, 1]$, but we place a zero-mean GP prior with an RBF kernel. Describe qualitatively what will happen to the posterior mean and variance near $x = 0$ as more data are observed uniformly across the interval.

**Solution.** The RBF prior restricts the posterior mean to smooth behavior, so at finite sampling density it tends to round the cusp. For fixed inputs and fixed hyperparameters, posterior variance depends on the input locations and kernel, not on the observed $y$ values; the cusp therefore cannot itself force a large variance. Dense observations may drive the variance down near zero even while the mean remains systematically oversmoothed. That discrepancy is model misspecification not represented by the conditional posterior variance.

## Summary and forward pointers

This chapter defined Gaussian processes through their finite-dimensional distributions, emphasized that a GP is a specification of joint distributions rather than a distribution over formulas, and illustrated how kernel choice determines sample-path properties. The Kolmogorov extension theorem provides the theoretical foundation; the Cholesky factor provides the practical tool for sampling.

The next chapter, "Conditioning a Gaussian Process," derives the posterior update formulas that turn a prior over functions into a posterior given observed data. Chapter 4 builds directly on the finite-dimensional characterization developed here, using the standard Gaussian conditioning formulas that apply to any multivariate normal vector.
`;export{e as default};