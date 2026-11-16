var e=`---
parent_id: book-structured-probabilistic-learning
chapter_id: kernel-ridge-and-gp-means
title: "Kernel Ridge and GP Means: Same Algebra, Different Claims"
level: graduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Kernel Ridge and GP Means: Same Algebra, Different Claims

## Purpose and prerequisites

This chapter clarifies the relationship between kernel ridge regression and the posterior mean of a Gaussian process. The two methods produce identical point predictions under corresponding parameter choices, but their interpretations, uncertainty quantifications, and diagnostic requirements differ fundamentally. The chapter assumes familiarity with Gaussian process conditioning (Chapter 4), positive-semidefinite kernels (Chapter 2), and basic optimization theory.

## Kernel ridge regression

Given training data $(x_{i}, y_{i})_{i=1}^{n}$ and a positive-semidefinite kernel $k$, kernel ridge regression (KRR) solves

$$\\min_{f \\in \\mathcal{H}} \\sum_{i=1}^{n}(y_{i} - f(x_{i}))^{2} + \\lambda\\|f\\|_{\\mathcal{H}}^{2},$$

where $\\mathcal{H}$ is the reproducing-kernel Hilbert space (RKHS) associated with $k$, $\\|\\cdot\\|_{\\mathcal{H}}$ is the RKHS norm, and $\\lambda > 0$ is a regularization parameter. By the representer theorem, the minimizer has the form

$$\\hat{f}(x) = \\sum_{i=1}^{n} \\alpha_{i} k(x, x_{i}),$$

where the coefficients $\\alpha \\in \\mathbb{R}^{n}$ satisfy

$$(K + \\lambda I)\\alpha = y,$$

with $K_{ij} = k(x_{i}, x_{j})$ and $y = (y_{1}, \\dots, y_{n})^{T}$. The prediction at a test point $x_{*}$ is

$$\\hat{f}(x_{*}) = k_{*}^{T}\\alpha = k_{*}^{T}(K + \\lambda I)^{-1}y,$$

where $k_{*} = (k(x_{*}, x_{1}), \\dots, k(x_{*}, x_{n}))^{T}$.

## GP posterior mean

From Chapter 4, the posterior mean of a zero-mean GP with kernel $k$ and observation noise variance $\\sigma^{2}$ is

$$\\mathbb{E}[f_{*} \\mid y] = k_{*}^{T}(K + \\sigma^{2}I)^{-1}y.$$

## The algebraic equivalence

**Theorem (Matching means).** Kernel ridge regression with regularization parameter $\\lambda$ and Gaussian process regression with observation noise variance $\\sigma^{2} = \\lambda$ produce identical posterior mean functions, provided the kernel and data are the same.

**Proof.** The KRR prediction is $k_{*}^{T}(K + \\lambda I)^{-1}y$. The GP posterior mean is $k_{*}^{T}(K + \\sigma^{2}I)^{-1}y$. Setting $\\lambda = \\sigma^{2}$ makes the two expressions identical.

The equivalence is purely algebraic. It does not imply that the two frameworks are interchangeable for all purposes.

## Where the interpretations diverge

**Uncertainty quantification.** KRR is an optimization procedure. It returns a point predictor $\\hat{f}(x_{*})$ but does not, without additional assumptions, provide a predictive distribution or credible intervals. The GP framework returns a full posterior distribution $f_{*} \\mid y \\sim \\mathcal{N}(\\mu_{*}, \\sigma_{*}^{2})$, from which intervals, probabilities, and expected losses can be computed.

**Prior assumptions.** The KRR objective penalizes the RKHS norm $\\|f\\|_{\\mathcal H}^2$. For a positive-definite training Gram matrix, the posterior mode of the finite latent vector $f_X\\sim\\mathcal N(0,K)$ under Gaussian noise agrees with the KRR fitted vector, and the representer theorem selects its minimum-RKHS-norm extension. An infinite-dimensional GP generally has no density with respect to a flat function-space measure, so a global “MAP function” needs additional definitions. The KRR practitioner need not adopt a Bayesian interpretation.

**Hyperparameter treatment.** In KRR, $\\lambda$ is often chosen by cross-validation. In GP regression, $\\sigma^{2}$ may be estimated, integrated out, or given a hyperprior. The GP marginal likelihood is a model-based comparison criterion under the stated prior and likelihood; cross-validation evaluates a different predictive target.

**Model checking.** A GP model can be checked by examining the posterior predictive distribution: are residuals Gaussian? Is the coverage of credible intervals calibrated? KRR lacks this structure unless an explicit probabilistic model is layered on top.

## Worked example: a simple comparison

Consider three training points $x = (-1, 0, 1)$ with outputs $y = (0, 1, 0)$. Use the RBF kernel with length scale $h = 1$ and output scale $\\tau^{2} = 1$. The Gram matrix is

$$K = \\begin{bmatrix} 1 & e^{-1/2} & e^{-2} \\\\ e^{-1/2} & 1 & e^{-1/2} \\\\ e^{-2} & e^{-1/2} & 1 \\end{bmatrix} \\approx \\begin{bmatrix} 1.0000 & 0.6065 & 0.1353 \\\\ 0.6065 & 1.0000 & 0.6065 \\\\ 0.1353 & 0.6065 & 1.0000 \\end{bmatrix}.$$

Set $\\lambda = \\sigma^{2} = 0.1$. The KRR coefficients are $\\alpha = (K + 0.1I)^{-1}y$. Computing numerically:

$$K + 0.1I \\approx \\begin{bmatrix} 1.1000 & 0.6065 & 0.1353 \\\\ 0.6065 & 1.1000 & 0.6065 \\\\ 0.1353 & 0.6065 & 1.1000 \\end{bmatrix}.$$

The inverse times $y=(0,1,0)^T$ extracts the middle column of the inverse. Numerically,

$$\\alpha\\approx(-0.973393,\\ 1.982532,\\ -0.973393)^T.$$

At $x_*=0.5$,

$$k_*=(e^{-1.125},e^{-0.125},e^{-0.125})^T\\approx(0.324652,0.882497,0.882497)^T,$$

so

$$\\hat f(0.5)=k_*^T\\alpha\\approx0.574548.$$

The GP posterior mean at $x_{*} = 0.5$ with $\\sigma^{2} = 0.1$ is identical. The GP additionally reports the posterior variance:

$$\\sigma_{*}^{2} = 1 - k_{*}^{T}(K + 0.1I)^{-1}k_{*} \\approx 0.082395.$$

KRR provides the point estimate $0.574548$ but does not supply the latent variance $0.082395$ without additional probabilistic structure.

## Common errors

- **Treating KRR as Bayesian.** Matching posterior means do not make KRR Bayesian. The absence of a posterior covariance means there is no intrinsic uncertainty quantification.
- **Treating GP variance as arbitrary.** The GP posterior variance is a consequence of the prior and likelihood. It is not a tuning parameter to be adjusted for better-looking intervals.
- **Confusing regularization with noise.** In KRR, $\\lambda$ penalizes complexity. In GP regression, $\\sigma^{2}$ models observation noise. Their algebraic equivalence holds only for the mean prediction; their roles in model selection and interpretation differ.
- **Ignoring the RKHS norm interpretation.** The KRR solution minimizes a trade-off between data fit and function smoothness. A small $\\lambda$ prioritizes fit and may overfit; a large $\\lambda$ prioritizes smoothness and may underfit.

## Practice exercises

**Exercise 5.1 (Finite-vector MAP equivalence).** Assume the training Gram matrix $K$ is positive definite. Show that the posterior mode of $f_X\\sim\\mathcal N(0,K)$ under $y\\mid f_X\\sim\\mathcal N(f_X,\\sigma^2I)$ agrees with the KRR fitted values when $\\lambda=\\sigma^2$. Explain the role of the representer theorem away from the training inputs.

**Solution.** The log posterior is, up to constants,

$$\\log p(f \\mid y) = \\log p(y \\mid f) + \\log p(f) = -\\frac{1}{2\\sigma^{2}}\\|y - f_{X}\\|^{2} - \\frac{1}{2}f_{X}^{T}K^{-1}f_{X} + \\text{const}.$$

Write $f_X=K\\alpha$. Since $K$ is positive definite, this parametrization is unique and $f_X^TK^{-1}f_X=\\alpha^TK\\alpha$. The log posterior becomes

$$-\\frac{1}{2\\sigma^{2}}\\|y - K\\alpha\\|^{2} - \\frac{1}{2}\\alpha^{T}K\\alpha.$$

Maximizing this is equivalent to minimizing $\\|y-K\\alpha\\|^2+\\sigma^2\\alpha^TK\\alpha$. Differentiating and using invertibility of $K$ gives $(K+\\sigma^2I)\\alpha=y$. Thus the mode $K\\alpha$ equals the KRR fitted vector. The representer theorem supplies the minimum-norm RKHS function with those coefficients for predictions away from $X$; the argument does not assert a density or mode over the entire GP path space.

**Exercise 5.2 (Leave-one-out cross-validation).** In KRR, the leave-one-out prediction error can be computed without refitting $n$ times. Let $H = K(K + \\lambda I)^{-1}$ be the "hat matrix." Show that the leave-one-out error for point $i$ is $(y_{i} - \\hat{f}_{-i}(x_{i})) = (y_{i} - \\hat{f}(x_{i}))/(1 - H_{ii})$.

**Solution.** Let $C=(K+\\lambda I)^{-1}$ and $\\alpha=Cy$. Because $I-H=\\lambda C$, the full-data residual is $y_i-\\hat y_i=\\lambda\\alpha_i$ and $1-H_{ii}=\\lambda C_{ii}$. A block-inverse (Schur-complement) calculation after deleting row and column $i$ gives $y_i-\\hat f_{-i}(x_i)=\\alpha_i/C_{ii}$. Combining the identities yields $(y_i-\\hat y_i)/(1-H_{ii})$.

**Exercise 5.3 (No probabilistic interpretation of KRR intervals).** A practitioner fits KRR, then constructs intervals $\\hat{f}(x_{*}) \\pm 2\\sqrt{\\lambda}$. Why is this not a valid $95\\%$ credible interval under the corresponding GP model?

**Solution.** The GP posterior variance at $x_{*}$ is $\\sigma_{*}^{2} = k_{**} - k_{*}^{T}(K + \\sigma^{2}I)^{-1}k_{*}$, which depends on $x_{*}$ through $k_{*}$ and $k_{**}$. The constant $\\lambda = \\sigma^{2}$ ignores this dependence. Therefore the proposed band is not the corresponding GP's posterior credible interval; any frequentist coverage claim would require a separate calibration study.

**Exercise 5.4 (Marginal likelihood).** Write the log marginal likelihood of the GP model with noise variance $\\sigma^{2}$ and kernel $k$. Explain why this quantity has no direct analogue in KRR.

**Solution.** The log marginal likelihood is

$$\\log p(y \\mid \\theta) = -\\frac{1}{2}y^{T}K_{y}^{-1}y - \\frac{1}{2}\\log\\det K_{y} - \\frac{n}{2}\\log(2\\pi),$$

where $K_y=K+\\sigma^2I$ and $\\theta$ denotes the kernel hyperparameters and $\\sigma^2$. This is the data density under the stated GP model after integrating out the latent vector. Bare KRR has no data-generating model, so it has no marginal likelihood. Cross-validation instead estimates predictive performance under a specified resampling design; neither criterion is assumption-free.

## Summary and forward pointers

Kernel ridge regression and Gaussian process regression share the same algebraic core: a linear system involving the kernel matrix and a regularization or noise term. The GP framework adds a posterior distribution, a marginal likelihood, and uncertainty statements conditional on its model and hyperparameters. The KRR framework provides a clean optimization problem with well-understood computational properties.

The next chapter, "Numerical Conditioning Is Part of Inference," addresses the practical challenges of solving the linear systems that appear in both frameworks. Chapter 9, "Exact and Approximate Inference," places these methods in the broader landscape of inference algorithms for probabilistic models.
`;export{e as default};