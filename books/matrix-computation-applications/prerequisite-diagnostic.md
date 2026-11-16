
# Prerequisite Diagnostic

This book assumes four kinds of background: basic linear algebra, multivariable calculus and analysis, some exposure to programming or algorithmic thinking, and elementary probability for the randomized chapter. The diagnostic below separates the central skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Linear algebra.** Vectors, matrices, matrix multiplication, transpose, inverse, rank, determinant, eigenvalues and eigenvectors, orthogonality, and the spectral theorem for symmetric matrices. You should be comfortable computing the inverse of a $2 \times 2$ matrix, finding eigenvalues of a diagonal matrix, and stating the definition of a vector space.
2. **Calculus and analysis.** Limits, continuity, derivatives, integrals, sequences, series, and basic norms on $\mathbb{R}^{n}$. You should be able to state what it means for a sequence to converge and to bound the error in a Taylor approximation.
3. **Algorithmic thinking.** Familiarity with pseudocode, loop invariants, and asymptotic notation ($O$, $\Theta$, $\Omega$). You should be able to count the number of floating-point operations in a matrix-vector product and understand what "backward stable" means at an intuitive level.
4. **Probability for randomization.** Random vectors, Gaussian variables, events and failure probabilities, and the meaning of a high-probability bound. The randomized chapter states the matrix algorithms and their guarantees but does not derive concentration inequalities from first principles.

## Self-diagnostic questions with answers

### Linear algebra

**Question 1.** Let $A = \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$. Find its eigenvalues and an orthonormal basis of eigenvectors.

> **Answer.** The characteristic polynomial is $(3 - \lambda)^{2} - 1 = \lambda^{2} - 6\lambda + 8 = (\lambda - 2)(\lambda - 4)$. The eigenvalues are $2$ and $4$. Corresponding unit eigenvectors are $\frac{1}{\sqrt{2}}(1, -1)^{T}$ and $\frac{1}{\sqrt{2}}(1, 1)^{T}$. Because $A$ is symmetric, eigenvectors for distinct eigenvalues are automatically orthogonal.

**Question 2.** Prove that if $A \in \mathbb{R}^{n \times n}$ is symmetric positive definite, then all its eigenvalues are positive.

> **Answer.** Let $\lambda$ be an eigenvalue with eigenvector $v \neq 0$. Then $v^{T}Av = v^{T}(\lambda v) = \lambda v^{T}v = \lambda \lVert v \rVert_{2}^{2}$. Since $A$ is positive definite, $v^{T}Av > 0$, and $\lVert v \rVert_{2}^{2} > 0$, so $\lambda > 0$.

**Question 3.** Compute the matrix-vector product $Av$ for $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $v = (5, 6)^{T}$. How many scalar multiplications are required for a general $n \times n$ matrix-vector product?

> **Answer.** $Av = (1 \cdot 5 + 2 \cdot 6,\; 3 \cdot 5 + 4 \cdot 6)^{T} = (17, 39)^{T}$. A general $n \times n$ matrix-vector product requires $n^{2}$ scalar multiplications and $n(n - 1)$ additions.

### Calculus and analysis

**Question 4.** Let $f(x) = e^{-x^{2}}$. Compute $f'(x)$ and find the value of $x$ where $f$ attains its maximum on $\mathbb{R}$.

> **Answer.** $f'(x) = -2x e^{-x^{2}}$. Setting $f'(x) = 0$ gives $x = 0$. Since $f(x) \to 0$ as $|x| \to \infty$ and $f(0) = 1$, the maximum is at $x = 0$.

**Question 5.** State the definition of $\lVert x \rVert_{2}$ for $x \in \mathbb{R}^{n}$ and prove the Cauchy--Schwarz inequality $|x^{T}y| \le \lVert x \rVert_{2} \lVert y \rVert_{2}$.

> **Answer.** $\lVert x \rVert_{2} = \sqrt{\sum_{i=1}^{n} x_{i}^{2}}$. If $y=0$, the inequality is immediate. If $y\ne0$, consider $\lVert x-ty\rVert_2^2\ge0$ for all $t\in\mathbb R$. Minimizing at $t=x^Ty/\lVert y\rVert_2^2$ and substituting yields $\lVert x\rVert_2^2\lVert y\rVert_2^2-(x^Ty)^2\ge0$.

**Question 6.** Explain why the geometric series $\sum_{k=0}^{\infty} r^{k}$ converges to $1/(1 - r)$ when $|r| < 1$ and diverges otherwise.

> **Answer.** The partial sum is $S_{n} = (1 - r^{n+1})/(1 - r)$. If $|r| < 1$, then $r^{n+1} \to 0$, so $S_{n} \to 1/(1 - r)$. If $|r| \ge 1$, the terms do not tend to zero, so the series diverges.

### Algorithmic thinking

**Question 7.** Count the floating-point operations required to multiply two $n \times n$ matrices by the standard algorithm.

> **Answer.** Each entry of the product is a dot product of length $n$, requiring $n$ multiplications and $n - 1$ additions. There are $n^{2}$ entries, so the total is $2n^{3} - n^{2} = O(n^{3})$ operations.

**Question 8.** What is the difference between a problem being "ill conditioned" and an algorithm being "unstable"? Give a one-sentence example of each.

> **Answer.** Ill conditioning is a property of the problem: small changes in input cause large changes in output. Instability is a property of the algorithm: it introduces large errors that are not explained by the problem's conditioning. Example: solving $Ax = b$ with $\kappa(A) = 10^{16}$ is ill conditioned; computing $x$ by Cramer's rule for $n = 100$ is unstable.

## Scoring your diagnostic

- If you answered 7--8 questions confidently and correctly, you have the background for the continuous route.
- If you answered 5--6 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 5 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Linear algebra

- *Math Atlas: Linear Algebra* --- vectors, matrices, linear systems, eigenvalues, and orthogonality at the first-course level.
- *Math Atlas: Algebra: Patterns and Structure* --- a proof-focused development of algebraic structures that assumes the set-theoretic basics.

### Calculus and analysis

- *Math Atlas: Calculus and Analysis* --- limits, derivatives, integrals, sequences, series, and basic normed spaces.
- *Math Atlas: Mathematical Modeling* --- if the connection between continuous mathematics and discrete computation feels unfamiliar.

### Algorithmic thinking

- *Math Atlas: Discrete Mathematics and Proof* --- induction, recursion, and asymptotic analysis.
- *Math Atlas: Mathematics for Computer Science* --- algorithms, complexity, and data structures.

## What this book does not assume

- Advanced numerical analysis: floating-point models, stability proofs, and convergence theory are introduced from first principles in "Floating-Point and Factorization" and "Conditioning and Stability".
- Parallel computing: task and data parallelism are discussed in "Advanced Factorizations and Block Algorithms", but no prior exposure to MPI or OpenMP is required.
- Tensor analysis: tensor decompositions are introduced in "Tensor Decompositions" with all necessary notation.
- Prior exposure to randomized matrix algorithms: "Randomized Numerical Linear Algebra" introduces the algorithms from the QR and SVD chapters, but assumes elementary probability and quotes rather than proves concentration bounds.

### Probability

- *Math Atlas: Probability* --- random variables, Gaussian distributions, events, tail probabilities, and expectation. Review these before relying on the randomized chapter's high-probability guarantees.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into problem type, representation, algorithm, and error analysis before concluding that the mathematics is inaccessible.
