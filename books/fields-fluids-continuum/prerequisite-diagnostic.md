
# Prerequisite Diagnostic

This book assumes multivariable calculus and vector analysis, linear algebra and matrix manipulation, ordinary differential equations, and familiarity with basic mechanics language such as force, momentum, work, and energy. The tensor opening introduces the notation used later; familiarity with basic PDE models remains helpful. The diagnostic below separates the main mathematical skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Multivariable calculus and vector analysis.** Partial derivatives, the chain rule, the gradient, divergence, curl, and the divergence theorem. You should be comfortable computing $\nabla \cdot v$ for a vector field $v(x, y, z)$, evaluating line and surface integrals, and changing variables in multiple integrals using the Jacobian determinant.
2. **Linear algebra and matrices.** Matrix multiplication, determinants, eigenvalues and eigenvectors, symmetric matrices, and the spectral theorem. You should be able to diagonalise a $2 \times 2$ symmetric matrix and interpret orthogonal transformations as rigid rotations.
3. **Ordinary differential equations.** First-order linear ODEs, separation of variables, and basic existence and uniqueness. You should be able to solve $\dot{x} = a x$ with $x(0) = x_{0}$ and recognise when an ODE is linear or separable.

## Self-diagnostic questions with answers

### Multivariable calculus and vector analysis

**Question 1.** Compute the divergence and curl of the vector field $v(x, y, z) = (x^{2} y, -x y^{2}, z)$.

> **Answer.** The divergence is $\nabla \cdot v = \partial_{x}(x^{2} y) + \partial_{y}(-x y^{2}) + \partial_{z}(z) = 2xy - 2xy + 1 = 1$. The curl is $\nabla \times v = (0 - 0, 0 - 0, -y^{2} - x^{2}) = (0, 0, -(x^{2} + y^{2}))$.

**Question 2.** Let $f(x, t)$ be a scalar field and let $x = \chi(X, t)$ be a motion with velocity $v = \partial_{t} \chi$. Use the chain rule to express the time derivative of $f$ following a material particle in terms of partial derivatives at fixed $x$.

> **Answer.** Let $\hat{f}(X, t) = f(\chi(X, t), t)$. Then $\partial_{t} \hat{f} = \partial_{t} f + (\partial f / \partial x_{i})(\partial x_{i} / \partial t) = \partial_{t} f + v \cdot \nabla f$. This is the material derivative $Df / Dt$.

**Question 3.** State the divergence theorem for a vector field $F$ on a bounded region $\Omega$ with outward unit normal $n$.

> **Answer.** $\int_{\Omega} \nabla \cdot F \, \mathrm{d}v = \int_{\partial \Omega} F \cdot n \, \mathrm{d}a$. The theorem converts a volume integral of a divergence into a surface integral of the flux.

### Linear algebra and matrices

**Question 4.** Find the eigenvalues and eigenvectors of the symmetric matrix $A = \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$.

> **Answer.** The characteristic polynomial is $(3 - \lambda)^{2} - 1 = \lambda^{2} - 6\lambda + 8 = (\lambda - 2)(\lambda - 4)$. Eigenvalues are $\lambda_{1} = 4$ and $\lambda_{2} = 2$. Corresponding normalised eigenvectors are $(1, 1)/\sqrt{2}$ and $(1, -1)/\sqrt{2}$. The eigenvectors are orthogonal, as guaranteed by the spectral theorem.

**Question 5.** Show that if $Q$ is an orthogonal matrix ($Q^{T} Q = I$), then $\det Q = \pm 1$.

> **Answer.** From $Q^{T} Q = I$, take determinants: $\det(Q^{T}) \det(Q) = \det(I) = 1$. Since $\det(Q^{T}) = \det(Q)$, we obtain $(\det Q)^{2} = 1$, so $\det Q = \pm 1$.

**Question 6.** Let $A$ be a $3 \times 3$ matrix with $\det A = 5$. What is $\det(2A)$?

> **Answer.** For an $n \times n$ matrix, $\det(cA) = c^{n} \det A$. Here $n = 3$ and $c = 2$, so $\det(2A) = 2^{3} \cdot 5 = 40$.

### Ordinary differential equations

**Question 7.** Solve the initial-value problem $\dot{x} = -2x$ with $x(0) = 3$.

> **Answer.** Separation of variables gives $\mathrm{d}x / x = -2 \, \mathrm{d}t$, so $\ln|x| = -2t + C$. With $x(0) = 3$, we get $C = \ln 3$. Hence $x(t) = 3 e^{-2t}$.

**Question 8.** A second-order linear ODE $y'' + p(x) y' + q(x) y = 0$ has solutions $y_{1}(x) = e^{x}$ and $y_{2}(x) = e^{-x}$. Write the general solution and verify that $y_{1}$ and $y_{2}$ are linearly independent.

> **Answer.** The general solution is $y(x) = C_{1} e^{x} + C_{2} e^{-x}$. The Wronskian is $W = y_{1} y_{2}' - y_{1}' y_{2} = e^{x}(-e^{-x}) - e^{x} e^{-x} = -1 - 1 = -2 \neq 0$, so the solutions are linearly independent.

## Scoring your diagnostic

- If you answered 7--8 questions confidently and correctly, you have the background for the continuous route.
- If you answered 5--6 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 5 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Multivariable calculus and vector analysis

- *Math Atlas: Calculus and Analysis* --- vector fields, line and surface integrals, and the classical theorems of vector calculus.
- [ODEs: A First Course](#/books/ode-first-course) and [classical PDEs](#/books/partial-differential-equations) introduce the corresponding equation models.

### Linear algebra and matrices

- *Math Atlas: Linear Algebra: Structure and Proof* --- vector spaces, linear maps, eigenvalues, and the spectral theorem.
- *Math Atlas: Finite-Dimensional Linear Algebra: Structure and Proof* --- a proof-focused development of linear algebra that assumes basic matrix manipulation.

### Ordinary differential equations

- [ODEs: A First Course](#/books/ode-first-course) --- first-order equations, linear systems and existence theory.
- *Math Atlas: Calculus and Analysis* --- if the differentiation and integration techniques in the diagnostic felt unfamiliar.

## What this book does not assume

- Tensor analysis on manifolds: the text uses Cartesian tensors and index notation in Euclidean space.
- Functional analysis: no prior course is required, but the proof route uses explicitly linked [Sobolev and weak-PDE theory](#/books/pde-weak-theory-waves-patterns) for general trace, compactness and evolution inputs.
- Thermodynamics: the entropy inequality and free energy are introduced from first principles in "Energy and Thermodynamic Restrictions".
- Electromagnetism: Maxwell's equations are reviewed in "Electromagnetic Field Balance" with no prior physics required beyond vector calculus.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into object-type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
