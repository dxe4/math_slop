
# Prerequisite Diagnostic

This book assumes three kinds of background: basic linear algebra and coordinate geometry, comfort with real numbers and functions, and some exposure to vectors and matrices. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Linear algebra and coordinate geometry.** Vectors in $\mathbb{R}^{2}$ and $\mathbb{R}^{3}$, dot product, matrix multiplication, determinants of $2 \times 2$ and $3 \times 3$ matrices, and the geometric interpretation of these operations. You should be comfortable reading $A x = b$ as a system of linear equations and computing the distance from a point to a line.
2. **Real numbers and functions.** The real number line, absolute value, inequalities, quadratic equations, and basic properties of square roots and trigonometric functions. You should be able to complete the square in a quadratic expression and solve $ax^{2} + bx + c = 0$.
3. **Vectors and matrices.** Matrix--vector multiplication, the transpose, the identity matrix, and the notion of an eigenvalue (at least as a scalar $\lambda$ with $A v = \lambda v$). You should be able to multiply a $2 \times 2$ matrix by a vector and verify that a given vector is an eigenvector.

## Self-diagnostic questions with answers

### Linear algebra and coordinate geometry

**Question 1.** Let $A = (1,2)$ and $B = (4,6)$. Find the vector $B - A$, its length, and the implicit equation $n \cdot X = c$ of the line through $A$ and $B$.

> **Answer.** $B - A = (3,4)$. Its length is $\sqrt{3^{2} + 4^{2}} = 5$. A normal is $n = (4,-3)$. Then $c = n \cdot A = 4 \cdot 1 + (-3) \cdot 2 = -2$. The line is $4x - 3y = -2$.

**Question 2.** Compute the determinant of $\begin{pmatrix} 2 & 5 \\ 1 & 3 \end{pmatrix}$ and explain its geometric meaning.

> **Answer.** $\det = 2 \cdot 3 - 5 \cdot 1 = 1$. The absolute value is the area of the parallelogram spanned by the columns. The positive sign means the columns form a counterclockwise pair.

**Question 3.** Find the projection of the vector $u = (3,4)$ onto $v = (1,0)$.

> **Answer.** The projection scalar is $(u \cdot v) / (v \cdot v) = 3 / 1 = 3$. The projected vector is $3 v = (3,0)$.

### Real numbers and functions

**Question 4.** Complete the square for $x^{2} + 6x + 5$ and use the result to find the roots.

> **Answer.** $x^{2} + 6x + 5 = (x + 3)^{2} - 9 + 5 = (x + 3)^{2} - 4$. Setting to zero gives $(x + 3)^{2} = 4$, so $x + 3 = \pm 2$ and $x = -1$ or $x = -5$.

**Question 5.** Suppose $(a,b)\ne(0,0)$. Show by orthogonal projection that the distance from $(x_{0}, y_{0})$ to the line $ax + by + c = 0$ is $|a x_{0} + b y_{0} + c| / \sqrt{a^{2} + b^{2}}$.

> **Answer.** The nonzero normal is $n=(a,b)$. If $Y$ is the orthogonal projection of $X=(x_0,y_0)$ onto the line, then $X-Y=\lambda n$. Substitution into $n\cdot Y=-c$ gives $\lambda=(n\cdot X+c)/\lVert n\rVert^2$. Hence $\lVert X-Y\rVert=|\lambda|\lVert n\rVert=|ax_0+by_0+c|/\sqrt{a^2+b^2}$.

**Question 6.** For what values of $x$ is $\sqrt{x^{2} - 1}$ defined in the reals?

> **Answer.** The expression under the square root must be nonnegative: $x^{2} - 1 \geq 0$, so $x \leq -1$ or $x \geq 1$.

### Vectors and matrices

**Question 7.** Multiply $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ by $\begin{pmatrix} 5 \\ 6 \end{pmatrix}$.

> **Answer.** $\begin{pmatrix} 1 \cdot 5 + 2 \cdot 6 \\ 3 \cdot 5 + 4 \cdot 6 \end{pmatrix} = \begin{pmatrix} 17 \\ 39 \end{pmatrix}$.

**Question 8.** Verify that $v = (1,1)$ is an eigenvector of $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ and find the eigenvalue.

> **Answer.** $A v = (2 \cdot 1 + 1 \cdot 1, 1 \cdot 1 + 2 \cdot 1) = (3,3) = 3 v$. The eigenvalue is $3$.

## Choose a repair route

Use each question to identify a specific missing operation or justification. If line equations or projection are unclear, revisit vectors and inner products; if completing the square is unclear, revisit algebra; if determinants or eigenvectors are unfamiliar, revisit the corresponding linear-algebra chapters. A total score does not establish readiness for the later proofs.

The algorithm chapters additionally use comparison sorting, tree height, graph paths, balanced search trees and priority queues. The metric and curvature chapters use derivatives, definite integrals and elementary compactness. Read those prerequisites before their first use rather than treating the eight diagnostic computations as evidence that they have already been mastered.

## Repair routes

### Linear algebra and coordinate geometry

- *Math Atlas: Linear Algebra: Structure and Proofs* --- vectors, matrices, linear systems, determinants, eigenvalues, and orthogonal diagonalization.
- *Math Atlas: Geometry: Proof Reference* --- coordinate geometry, transformations, and conic sections from a synthetic and analytic perspective.

### Real numbers and functions

- *Math Atlas: Algebra: Patterns and Structure* --- quadratic equations, inequalities, and function properties.
- *Math Atlas: Functions and Equations: Proof* --- functions, compositions, inverses, and transformations.

### Vectors and matrices

- *Math Atlas: Linear Algebra: Structure and Proofs* --- matrix algebra, vector spaces, and eigenvalue computations.
- *Math Atlas: Discrete Mathematics and Proof* --- if the algebraic manipulations in the diagnostic felt unfamiliar.

## What this book does not assume

- Advanced calculus: derivatives and integrals support the distance and curvature proofs, while no manifold theory or general surface theory is assumed.
- Programming: algorithms are described in prose and formulas; no prior programming experience is required, though the property-based test catalogue will be more vivid if you have written code.
- Differential geometry: curved metrics are introduced from first principles in "Curved Metric Computation".
- Computational geometry algorithms beyond what is developed in the chapters: every algorithm is built from the predicates introduced in the text.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed formulas into object-type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
