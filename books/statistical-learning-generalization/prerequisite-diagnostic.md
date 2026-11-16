
# Prerequisite Diagnostic

This book assumes three kinds of background: probability and random variables, linear algebra and matrix calculus, and basic real analysis and optimization. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Probability and random variables.** Probability spaces, random variables, expectation, variance, conditional expectation, independence, and basic concentration inequalities (Markov, Chebyshev). You should be comfortable reading $\mathbb{P}(|X - \mathbb{E}[X]| > t) \le \operatorname{Var}(X)/t^{2}$ and manipulating expectations of sums of independent random variables.
2. **Linear algebra and matrix calculus.** Vector spaces, inner products, norms, matrices, eigenvalues, singular values, and matrix-vector products. You should be able to state the Cauchy--Schwarz inequality, compute gradients of quadratic forms, and understand orthogonal projection.
3. **Real analysis and optimization.** Limits, continuity, convex functions, gradients, and constrained optimization. You should be able to prove that a differentiable convex function lies above its tangents and set up a Lagrangian for a simple constrained problem.

## Self-diagnostic questions with answers

### Probability and random variables

**Question 1.** Let $X_{1}, \dots, X_{n}$ be independent random variables with $\mathbb{E}[X_{i}] = \mu$ and $\operatorname{Var}(X_{i}) = \sigma^{2}$. Compute the expectation and variance of the sample mean $\bar{X} = (1/n)\sum_{i=1}^{n} X_{i}$.

> **Answer.** By linearity of expectation, $\mathbb{E}[\bar{X}] = \mu$. By independence, $\operatorname{Var}(\bar{X}) = (1/n^{2})\sum_{i=1}^{n}\operatorname{Var}(X_{i}) = \sigma^{2}/n$.

**Question 2.** State Markov's inequality and use it to prove Chebyshev's inequality.

> **Answer.** Markov: for a nonnegative random variable $Y$ and $a > 0$, $\mathbb{P}(Y \ge a) \le \mathbb{E}[Y]/a$. Let $Y = (X - \mu)^{2}$ and $a = t^{2}$. Then $\mathbb{P}(|X - \mu| \ge t) = \mathbb{P}((X - \mu)^{2} \ge t^{2}) \le \mathbb{E}[(X - \mu)^{2}]/t^{2} = \operatorname{Var}(X)/t^{2}$.

**Question 3.** Let $Z \sim \mathcal{N}(0, 1)$. Compute $\mathbb{P}(Z > 2)$ to two decimal places.

> **Answer.** $\mathbb{P}(Z > 2) \approx 0.0228$, or about $0.02$.

### Linear algebra and matrix calculus

**Question 4.** Let $A$ be a symmetric $d \times d$ matrix and $b \in \mathbb{R}^{d}$. Compute the gradient with respect to $w \in \mathbb{R}^{d}$ of $f(w) = w^{T}Aw - 2b^{T}w$.

> **Answer.** $\nabla_{w} f(w) = 2(Aw - b)$. If $A$ is positive definite, the unique minimizer is $w^{*} = A^{-1}b$. Invertibility alone is insufficient: for $A=-I$ and $b=0$, the stationary point $w=0$ is a strict maximum and the quadratic has no minimum.

**Question 5.** Prove that $\sup_{\|w\|_{2} \le B} w^{T}v = B\|v\|_{2}$ for any $v \in \mathbb{R}^{d}$.

> **Answer.** By Cauchy--Schwarz, $w^{T}v \le \|w\|_{2}\|v\|_{2} \le B\|v\|_{2}$. Equality is attained at $w = Bv/\|v\|_{2}$ when $v \neq 0$.

**Question 6.** Let $P \in \mathbb{R}^{d \times d}$ be an orthogonal projection matrix. Show that all eigenvalues of $P$ are $0$ or $1$.

> **Answer.** Since $P$ is a projection, $P^{2} = P$. If $Pv = \lambda v$, then $P^{2}v = \lambda^{2}v = \lambda v$, so $\lambda(\lambda - 1) = 0$. Hence $\lambda \in \{0, 1\}$.

### Real analysis and optimization

**Question 7.** Show that $f(x) = x^{2}$ is convex on $\mathbb{R}$.

> **Answer.** For any $x, y$ and $\lambda \in [0, 1]$, $f(\lambda x + (1 - \lambda)y) = (\lambda x + (1 - \lambda)y)^{2} \le \lambda x^{2} + (1 - \lambda)y^{2}$ by expanding and using $(x - y)^{2} \ge 0$. Alternatively, $f''(x) = 2 \ge 0$.

**Question 8.** Consider minimizing $\|y - Xw\|_{2}^{2}$ over $w \in \mathbb{R}^{d}$ where $X \in \mathbb{R}^{n \times d}$ has full column rank. Write the normal equations and explain why the solution is unique.

> **Answer.** The gradient is $-2X^{T}(y - Xw)$. Setting to zero gives $X^{T}Xw = X^{T}y$. Since $X$ has full column rank, $X^{T}X$ is positive definite, hence invertible, so $w^{*} = (X^{T}X)^{-1}X^{T}y$ is unique.

## Scoring your diagnostic

- If you answered 7--8 questions confidently and correctly, you have the background for the continuous route.
- If you answered 5--6 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 5 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Probability and random variables

- *Math Atlas: Probability: Models, Bounds, and Proofs* --- probability spaces, expectation, conditioning, convergence, and concentration inequalities.
- *Math Atlas: Discrete Mathematics: Proof, Counting, and Structure* --- combinatorial foundations and basic counting used in growth-function arguments.

### Linear algebra and matrix calculus

- *Math Atlas: Finite-Dimensional Linear Algebra: Structure and Proof* --- vector spaces, inner products, spectral theory, and orthogonal decomposition.
- *Math Atlas: Optimization and Backpropagation from Scratch* --- matrix calculus, gradients, and shape-safe differentiation.

### Real analysis and optimization

- *Math Atlas: Optimization and Backpropagation from Scratch* --- convexity, descent guarantees, duality, and regularization.
- *Math Atlas: Probability: Models, Bounds, and Proofs* --- expectation as an operator, modes of convergence, and limit theorems.

## What this book does not assume

- Measure theory: the text uses expectation and probability at the level of random variables, not general measure spaces.
- Advanced optimization: convex optimization basics are introduced where needed; nonconvex analysis is discussed at the level of heuristics and open problems.
- Programming: algorithms are described in prose; no prior programming experience is required.
- Prior exposure to learning theory: VC dimension, Rademacher complexity, and stability are introduced from first principles.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into object-type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
