
# Prerequisite Diagnostic

This book assumes three kinds of background: multivariable calculus and vector analysis, ordinary differential equations, and linear algebra at the matrix-computation level. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Multivariable calculus and vector analysis.** Partial derivatives, gradients, divergence, curl, line and surface integrals, and the chain rule in several variables. You should be comfortable computing $\partial f/\partial x$ for $f(x, y, z)$, evaluating $\nabla \cdot \mathbf{F}$ and $\nabla \times \mathbf{F}$, and understanding the statement of Green's, Stokes's, and the divergence theorems.
2. **Ordinary differential equations.** First-order equations (separable, linear), second-order linear equations with constant coefficients, and the concept of initial-value problems. You should be able to solve $\ddot{x} + 2\gamma\dot{x} + \omega_{0}^{2}x = 0$ and interpret underdamped, critically damped, and overdamped regimes.
3. **Linear algebra.** Matrix multiplication, determinants, eigenvalues and eigenvectors, inner products, and the spectral theorem for real symmetric matrices. You should be able to diagonalize a $2 \times 2$ real symmetric matrix and interpret the result geometrically.

## Self-diagnostic questions with answers

### Multivariable calculus and vector analysis

**Question 1.** Compute the gradient of $f(x, y, z) = x^{2}y + yz^{3}$ and evaluate it at $(1, 2, -1)$.

> **Answer.** $\nabla f = (2xy, x^{2} + z^{3}, 3yz^{2})$. At $(1, 2, -1)$: $\nabla f = (4, 0, 6)$.

**Question 2.** Let $\mathbf{F}(x, y, z) = (yz, xz, xy)$. Compute $\nabla \cdot \mathbf{F}$ and $\nabla \times \mathbf{F}$.

> **Answer.** $\nabla \cdot \mathbf{F} = \partial(yz)/\partial x + \partial(xz)/\partial y + \partial(xy)/\partial z = 0 + 0 + 0 = 0$. $\nabla \times \mathbf{F} = (x - x, y - y, z - z) = \mathbf{0}$. (This field is conservative: $\mathbf{F} = \nabla(xyz)$.)

**Question 3.** Parameterize the circle $x^{2} + y^{2} = R^{2}$ in the plane and compute the line integral $\oint_{C} x\,dy$ around it counterclockwise.

> **Answer.** Use $x = R\cos\theta$, $y = R\sin\theta$ with $\theta \in [0, 2\pi]$. Then $dy = R\cos\theta\,d\theta$ and $\oint x\,dy = \int_{0}^{2\pi} R^{2}\cos^{2}\theta\,d\theta = \pi R^{2}$. By Green's theorem, this equals the area enclosed.

### Ordinary differential equations

**Question 4.** Solve $\ddot{x} + 4\dot{x} + 3x = 0$ with $x(0) = 1$ and $\dot{x}(0) = 0$.

> **Answer.** The characteristic equation is $r^{2} + 4r + 3 = 0$, so $r = -1, -3$. The general solution is $x(t) = Ae^{-t} + Be^{-3t}$. From $x(0) = 1$: $A + B = 1$. From $\dot{x}(0) = 0$: $-A - 3B = 0$, so $A = -3B$. Thus $-3B + B = 1$, giving $B = -1/2$ and $A = 3/2$. The solution is $x(t) = \frac{3}{2}e^{-t} - \frac{1}{2}e^{-3t}$.

**Question 5.** For the harmonic oscillator $\ddot{q} + \omega_{0}^{2}q = 0$, write the general real solution in amplitude--phase form and identify the period.

> **Answer.** $q(t) = A\cos(\omega_{0}t + \phi)$, where $A \geq 0$ and $\phi \in [0, 2\pi)$ are determined by initial conditions. The period is $T = 2\pi/\omega_{0}$.

**Question 6.** A particle moves under $m\ddot{x} = -kx - c\dot{x}$. Under what condition on $c$, $k$, and $m$ is the motion underdamped? Critically damped?

> **Answer.** The discriminant of the characteristic equation $mr^{2} + cr + k = 0$ is $c^{2} - 4mk$. Underdamped when $c^{2} < 4mk$ (complex roots, oscillatory decay). Critically damped when $c^{2} = 4mk$ (repeated real root, fastest non-oscillatory return to equilibrium).

### Linear algebra

**Question 7.** Find the eigenvalues and normalized eigenvectors of $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.

> **Answer.** The characteristic polynomial is $(2 - \lambda)^{2} - 1 = \lambda^{2} - 4\lambda + 3 = 0$, so $\lambda = 1, 3$. For $\lambda = 1$: eigenvector $(1, -1)$, normalized to $\frac{1}{\sqrt{2}}(1, -1)$. For $\lambda = 3$: eigenvector $(1, 1)$, normalized to $\frac{1}{\sqrt{2}}(1, 1)$.

**Question 8.** Show that if $A$ is a real antisymmetric matrix ($A^{T} = -A$), then $e^{A}$ is orthogonal.

> **Answer.** $(e^{A})^{T} = e^{A^{T}} = e^{-A} = (e^{A})^{-1}$. Thus $(e^{A})^{T}e^{A} = I$, so $e^{A}$ is orthogonal.

**Question 9.** Let $M$ be a real symmetric $n \times n$ matrix. State the spectral theorem and explain why the eigenvectors can be chosen orthonormal.

> **Answer.** The spectral theorem asserts that $M$ has $n$ real eigenvalues (counting multiplicities) and that eigenvectors corresponding to distinct eigenvalues are orthogonal. By applying Gram--Schmidt within each eigenspace, one obtains an orthonormal basis of eigenvectors. Hence $M = Q\Lambda Q^{T}$ with $Q$ orthogonal and $\Lambda$ diagonal.

## Scoring your diagnostic

- If you answered 7--9 questions confidently and correctly, you have the background for the continuous route.
- If you answered 5--6 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 5 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Multivariable calculus and vector analysis

- *Math Atlas: Calculus and Analysis* --- partial derivatives, multiple integrals, and the classical vector calculus theorems.
- *Math Atlas: Differential Geometry* --- differential forms, manifolds, and the generalized Stokes theorem (for readers who want the geometric perspective early).

### Ordinary differential equations

- *Math Atlas: Differential Equations* --- first- and second-order equations, series solutions, and phase-plane methods.
- *Math Atlas: Dynamical Systems* --- qualitative behavior, stability, and bifurcation theory.

### Linear algebra

- *Math Atlas: Linear Algebra* --- vector spaces, linear transformations, eigenvalues, and diagonalization.
- *Math Atlas: Algebra: Patterns and Structure* --- a proof-focused development for readers who want deeper foundations.

## What this book does not assume

- **Differential geometry:** Chapter 11 gives a compact review of manifolds, tangent vectors, and differential forms but assumes prior familiarity for its coordinate-free arguments. Readers without that background can follow the Darboux-coordinate calculations first and should use the differential-geometry repair route before relying on the global proofs.
- **Group theory:** Chapter 12 defines the Lie-group, Lie-algebra, and group-action structures it uses, but it assumes familiarity with the elementary group axioms and homomorphisms. No prior representation-theory course is required; the few representation matrices used later are introduced in context.
- **Functional analysis:** the action functional is treated formally; Hilbert-space methods are not used.
- **Programming:** code appears in plain text for readability. No prior programming experience is required, though numerical exercises invite implementation.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into object-type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
