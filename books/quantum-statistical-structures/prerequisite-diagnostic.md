
# Prerequisite Diagnostic

This book assumes three kinds of background: linear algebra on finite-dimensional complex vector spaces, multivariable calculus and basic real analysis, and elementary probability theory. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Linear algebra.** Vector spaces, inner products, orthonormal bases, linear operators, eigenvalues and eigenvectors, adjoints, and the spectral theorem for finite-dimensional Hermitian matrices. You should be comfortable computing the eigenvalues of a 2x2 matrix and stating the Cauchy-Schwarz inequality.
2. **Multivariable calculus and analysis.** Partial derivatives, multiple integrals, sequences and series, and the basic language of limits and continuity. You should be able to evaluate $\int_{-\infty}^{\infty} e^{-x^{2}}\,dx$ and understand what it means for a sequence of functions to converge uniformly.
3. **Probability theory.** Probability spaces, random variables, expectation, variance, and the normal distribution. You should be able to compute the mean and variance of a discrete distribution and state the law of large numbers informally.

## Self-diagnostic questions with answers

### Linear algebra

**Question 1.** Let $A = \begin{pmatrix}3&1\\1&3\end{pmatrix}$. Find its eigenvalues and an orthonormal basis of eigenvectors.

> **Answer.** The characteristic polynomial is $\det(A - \lambda I) = (3-\lambda)^{2} - 1 = \lambda^{2} - 6\lambda + 8 = (\lambda - 2)(\lambda - 4)$. The eigenvalues are $2$ and $4$. For $\lambda = 2$, an eigenvector is $(1, -1)$; for $\lambda = 4$, an eigenvector is $(1, 1)$. Normalized, the basis is $\{|+\rangle = (|0\rangle + |1\rangle)/\sqrt{2}, |-\rangle = (|0\rangle - |1\rangle)/\sqrt{2}\}$.

**Question 2.** Show that for any unit vectors $|\psi\rangle$ and $|\phi\rangle$ in a complex Hilbert space, $|\langle\phi|\psi\rangle|^{2} \leq 1$.

> **Answer.** This is the Cauchy-Schwarz inequality: $|\langle\phi|\psi\rangle| \leq ||\phi\rangle|\,||\psi\rangle| = 1$. Squaring both sides gives the claim. Equality holds if and only if the vectors are linearly dependent.

**Question 3.** Explain why the trace of a product of two matrices satisfies $\operatorname{Tr}(AB) = \operatorname{Tr}(BA)$, and use this to show that similar matrices have the same trace.

> **Answer.** $\operatorname{Tr}(AB) = \sum_{i}(AB)_{ii} = \sum_{i}\sum_{j}A_{ij}B_{ji} = \sum_{j}\sum_{i}B_{ji}A_{ij} = \operatorname{Tr}(BA)$. If $B = S^{-1}AS$, then $\operatorname{Tr}(B) = \operatorname{Tr}(S^{-1}AS) = \operatorname{Tr}(ASS^{-1}) = \operatorname{Tr}(A)$.

### Calculus and analysis

**Question 4.** Evaluate $\int_{-\infty}^{\infty} e^{-x^{2}}\,dx$.

> **Answer.** Let $I = \int_{-\infty}^{\infty} e^{-x^{2}}\,dx$. Then $I^{2} = \int_{-\infty}^{\infty}\int_{-\infty}^{\infty} e^{-(x^{2}+y^{2})}\,dx\,dy = \int_{0}^{2\pi}\int_{0}^{\infty} e^{-r^{2}}r\,dr\,d\theta = \pi$. Hence $I = \sqrt{\pi}$.

**Question 5.** Show that the sequence $f_{n}(x) = x^{n}$ on $[0,1]$ converges pointwise but not uniformly to its limit.

> **Answer.** For each fixed $x \in [0,1)$, $x^{n} \to 0$. For $x = 1$, $1^{n} = 1$. The pointwise limit is $f(x) = 0$ for $x \in [0,1)$ and $f(1) = 1$. The limit function is discontinuous, while each $f_{n}$ is continuous. Uniform convergence preserves continuity, so the convergence cannot be uniform.

**Question 6.** State the ratio test and use it to show that $\sum_{n=0}^{\infty} z^{n}/n!$ converges for all $z \in \mathbb{C}$.

> **Answer.** The ratio test says that if $\lim_{n\to\infty}|a_{n+1}/a_{n}| = L$, then the series converges absolutely when $L < 1$ and diverges when $L > 1$. Here $a_{n} = z^{n}/n!$, so $|a_{n+1}/a_{n}| = |z|/(n+1) \to 0$ for all $z$. Hence $L = 0 < 1$ and the series converges everywhere.

### Probability theory

**Question 7.** A fair coin is tossed twice. Let $X$ be the number of heads. Compute $\mathbb{E}[X]$ and $\operatorname{Var}(X)$.

> **Answer.** The possible outcomes are $\{TT, TH, HT, HH\}$, each with probability $1/4$. The values of $X$ are $0, 1, 1, 2$. Thus $\mathbb{E}[X] = (0 + 1 + 1 + 2)/4 = 1$. $\mathbb{E}[X^{2}] = (0 + 1 + 1 + 4)/4 = 6/4 = 3/2$. Hence $\operatorname{Var}(X) = 3/2 - 1 = 1/2$.

**Question 8.** Explain why the variance of a random variable is always nonnegative, and give an example where the variance is zero.

> **Answer.** $\operatorname{Var}(X) = \mathbb{E}[(X - \mu)^{2}]$ is the expectation of a nonnegative quantity, hence nonnegative. If $X$ is almost surely constant, say $X = c$, then $\operatorname{Var}(X) = 0$. Conversely, if $\operatorname{Var}(X) = 0$, then $X = \mu$ almost surely.

## Scoring your diagnostic

- If you answered 7--8 questions confidently and correctly, you have the background for the continuous route.
- If you answered 5--6 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 5 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Linear algebra

- *Math Atlas: Linear Algebra: Structure and Proofs* --- vector spaces, inner products, spectral theory, and canonical forms.
- *Math Atlas: Mathematical Toolkit* --- a self-contained review of matrices, eigenvalues, and orthogonal diagonalization.

### Calculus and analysis

- *Math Atlas: Proof-Safe Real Analysis* --- limits, continuity, sequences and series, and the basic topology of $\mathbb{R}^{n}$.
- *Math Atlas: Differential Equations: Verified Dynamics* --- if the manipulation of differential equations and integrals feels unfamiliar.

### Probability theory

- *Math Atlas: Probability: Models and Proofs* --- probability spaces, random variables, expectation, and limit theorems.
- *Math Atlas: Statistical Learning and Generalization* --- if the statistical-mechanics chapters feel unfamiliar.

## What this book does not assume

- Advanced functional analysis: the spectral theorem for unbounded operators is stated and used, but the full proof is not required.
- Thermodynamics: the concepts of temperature, entropy, and free energy are introduced from first principles in the statistical-mechanics chapters.
- Quantum field theory: the final chapter sketches the boundary, but no prior exposure is required.
- Programming: computations are described in prose; no prior programming experience is required.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into object-type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
