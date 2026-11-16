var e=`---
parent_id: book-structured-probabilistic-learning
matter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

This book assumes three kinds of background: multivariate probability and Bayesian conditioning, linear algebra and matrix calculus, and basic optimization and numerical linear algebra. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Multivariate probability and Bayesian conditioning.** Joint, marginal, and conditional distributions; Bayes' theorem; the multivariate Gaussian distribution and its density; conditional independence. You should be comfortable reading $p(y \\mid x, \\theta)$ as "the conditional distribution of $y$ given $x$ and $\\theta$," and you should be able to write the posterior $p(\\theta \\mid \\mathcal{D})$ in terms of prior and likelihood.
2. **Linear algebra and matrix calculus.** Matrix multiplication, transpose, inverse, positive-semidefinite matrices, eigenvalues, and the Cholesky factorization. You should be able to state what it means for a symmetric matrix $A$ to be positive semidefinite ($x^{T}Ax \\ge 0$ for all $x$), and you should be able to solve a small linear system by hand.
3. **Basic optimization and numerical linear algebra.** Gradient descent, least-squares regression, the idea of a regularized objective, and the distinction between $O(n^{2})$ and $O(n^{3})$ algorithms. You should be able to write the normal equations for ordinary least squares and explain why matrix inversion is avoided in practice.

## Self-diagnostic questions with answers

### Multivariate probability and Bayesian conditioning

**Question 1.** Let $X \\sim \\mathcal{N}(\\mu, \\Sigma)$ in $\\mathbb{R}^{2}$ with $\\mu = (0, 0)^{T}$ and $\\Sigma = \\begin{bmatrix} 1 & \\rho \\\\ \\rho & 1 \\end{bmatrix}$. For $\\rho = 0.5$, compute the conditional distribution of $X_{1}$ given $X_{2} = 1$.

> **Answer.** For a bivariate Gaussian, $X_{1} \\mid X_{2} = x_{2} \\sim \\mathcal{N}(\\mu_{1} + \\rho(x_{2} - \\mu_{2}), 1 - \\rho^{2})$. Substituting $\\rho = 0.5$ and $x_{2} = 1$ gives mean $0.5$ and variance $1 - 0.25 = 0.75$. Hence $X_{1} \\mid X_{2} = 1 \\sim \\mathcal{N}(0.5, 0.75)$.

**Question 2.** State Bayes' theorem for a continuous parameter $\\theta$ and data $\\mathcal{D}$. Identify the prior, likelihood, and posterior.

> **Answer.** $p(\\theta \\mid \\mathcal{D}) = \\frac{p(\\mathcal{D} \\mid \\theta)\\,p(\\theta)}{\\int p(\\mathcal{D} \\mid \\theta')\\,p(\\theta')\\,d\\theta'}$. The prior is $p(\\theta)$, the likelihood is $p(\\mathcal{D} \\mid \\theta)$, and the posterior is $p(\\theta \\mid \\mathcal{D})$. The denominator is the marginal likelihood or evidence.

**Question 3.** Explain why $p(x, y \\mid z) = p(x \\mid y, z)\\,p(y \\mid z)$ does not imply $X \\perp\\!\\!\\perp Y \\mid Z$.

> **Answer.** The factorization $p(x, y \\mid z) = p(x \\mid y, z)\\,p(y \\mid z)$ is always true by the chain rule. Conditional independence $X \\perp\\!\\!\\perp Y \\mid Z$ requires $p(x \\mid y, z) = p(x \\mid z)$, so that the conditional of $x$ does not depend on $y$. The chain rule holds universally; conditional independence is an additional structural assumption.

### Linear algebra and matrix calculus

**Question 4.** Let $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}$. Show that $A$ is positive definite and compute its Cholesky factor $L$.

> **Answer.** For any $x = (x_{1}, x_{2})^{T}$, $x^{T}Ax = 2x_{1}^{2} + 2x_{1}x_{2} + 2x_{2}^{2} = x_{1}^{2} + x_{2}^{2} + (x_{1} + x_{2})^{2} > 0$ for $x \\neq 0$. The Cholesky factor satisfies $L_{11} = \\sqrt{2}$, $L_{21} = 1/\\sqrt{2}$, and $L_{22} = \\sqrt{2 - 1/2} = \\sqrt{3/2}$. Hence $L = \\begin{bmatrix} \\sqrt{2} & 0 \\\\ 1/\\sqrt{2} & \\sqrt{3/2} \\end{bmatrix}$.

**Question 5.** Let $X$ be an $n \\times d$ matrix with $n > d$ and full column rank. Write the ordinary least-squares estimator $\\hat{w}$ that minimizes $\\|y - Xw\\|^{2}$. Explain why $X^{T}X$ is invertible.

> **Answer.** $\\hat{w} = (X^{T}X)^{-1}X^{T}y$. Since $X$ has full column rank, $Xv \\neq 0$ for any $v \\neq 0$. Then $v^{T}X^{T}Xv = \\|Xv\\|^{2} > 0$, so $X^{T}X$ is positive definite and therefore invertible.

**Question 6.** Let $K$ be a symmetric positive-semidefinite matrix and let $\\sigma^{2} > 0$. Show that $K + \\sigma^{2}I$ is positive definite.

> **Answer.** For any nonzero vector $v$, $v^{T}(K + \\sigma^{2}I)v = v^{T}Kv + \\sigma^{2}v^{T}v \\ge 0 + \\sigma^{2}\\|v\\|^{2} > 0$. Hence $K + \\sigma^{2}I$ is positive definite.

### Optimization and numerical linear algebra

**Question 7.** Consider the ridge-regression objective $\\min_{w} \\|y - Xw\\|^{2} + \\lambda\\|w\\|^{2}$ with $\\lambda > 0$. Derive the closed-form solution and explain why it exists even when $X^{T}X$ is singular.

> **Answer.** Setting the gradient to zero yields $-2X^{T}(y - Xw) + 2\\lambda w = 0$, so $(X^{T}X + \\lambda I)w = X^{T}y$. The matrix $X^{T}X + \\lambda I$ is positive definite because $v^{T}(X^{T}X + \\lambda I)v = \\|Xv\\|^{2} + \\lambda\\|v\\|^{2} > 0$ for $v \\neq 0$. Hence it is invertible and the solution is $w = (X^{T}X + \\lambda I)^{-1}X^{T}y$.

**Question 8.** Explain why computing the explicit inverse $A^{-1}$ of a positive-definite matrix $A$ and then multiplying by a vector $y$ is generally discouraged in favor of a Cholesky factorization followed by triangular solves.

> **Answer.** Both routes have cubic leading cost from scratch, but forming $A^{-1}$ requires solving for $n$ inverse columns after factorization and can worsen numerical error. Cholesky costs about $n^{3}/3$ flops and produces $A=LL^T$. Counting multiplication and addition separately, the two triangular solves for one $y$ cost about $2n^{2}$ more flops. Direct factor-and-solve therefore avoids the extra cubic inverse construction and storage, and generally has better numerical error behavior.

## Scoring your diagnostic

- If you answered 7--8 questions confidently and correctly, you have the background for the continuous route.
- If you answered 5--6 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 5 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Multivariate probability and Bayesian conditioning

- *Math Atlas: Probability: Models and Proofs* --- axioms, conditioning, Bayes' theorem, and the multivariate Gaussian.
- *Math Atlas: Principles of Statistical Inference* --- likelihood, estimation, and Bayesian computation.

### Linear algebra and matrix calculus

- *Math Atlas: Linear Algebra: Structure and Proofs* --- positive-definite matrices, factorizations, and spectral theory.
- *Math Atlas: Matrix Computation and Applications* --- numerical linear algebra, conditioning, and stable algorithms.

### Optimization and numerical linear algebra

- *Math Atlas: Numerical Mathematics: Error and Algorithms* --- floating-point arithmetic, linear solvers, and complexity.
- *Math Atlas: Optimization and Backpropagation from Scratch* --- gradients, regularization, and convex objectives.

## What this book does not assume

- Measure-theoretic probability: the text uses densities and expectations without requiring measure theory.
- Graph theory: basic definitions appear in Chapters 7--10, but no prior exposure is required.
- Programming: algorithms are described in prose and formulas; code is optional.
- Prior exposure to Gaussian processes or graphical models: these are introduced from first principles in Chapters 2--4 and Chapters 7--8.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed formulas into object-type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
`;export{e as default};