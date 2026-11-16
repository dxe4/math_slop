var e=`---
parent_id: book-conics-solids-projections
matter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

This book assumes four kinds of background: Euclidean geometry and basic trigonometry, algebra through quadratic equations and functions, vectors and matrices, and elementary single-variable calculus with the idea of a partial derivative. The diagnostic below separates these skills and gives repair routes. It is not an exam; it is a self-check to guide efficient reading.

## What background is assumed

1. **Euclidean geometry and trigonometry.** Properties of triangles, circles, parallel lines, similar and congruent figures, the Pythagorean theorem, and the definitions of sine, cosine, and tangent. You should be comfortable finding the distance between two points in the plane, the angle between two lines, and the equation of a circle centered at the origin.

2. **Algebra through quadratics and functions.** Solving linear and quadratic equations, completing the square, manipulating algebraic fractions, and understanding function notation $f(x)$. You should be able to find the vertex of a parabola $y=ax^{2}+bx+c$ by completing the square and to solve a system of two linear equations in two unknowns.

3. **Vectors and basic matrices.** Representing points in the plane and in space by coordinates, adding vectors, scalar multiplication, the dot product, and the idea of a matrix as a rectangular array of numbers. You should be able to multiply a $2\\times 2$ matrix by a column vector and to compute the determinant of a $2\\times 2$ matrix.

4. **Elementary calculus.** Differentiating elementary functions, evaluating a basic definite integral, and interpreting a two-variable Jacobian. [Cylinders and Surfaces of Revolution](../cylinders-and-surfaces-of-revolution.md), [Stereographic Projection](../stereographic-projection.md), [Map Projections](../map-projections.md), and [Project: Build a Model](../project-build-a-model.md) use these tools for surface area, volume, metrics, and map distortion; the text supplies the specific formulas but does not reteach calculus from the beginning.

## Self-diagnostic questions with answers

### Euclidean geometry and trigonometry

**Question 1.** A right triangle has legs of length $3$ and $4$. Find the hypotenuse and the sine, cosine, and tangent of the angle opposite the side of length $3$.

> **Answer.** By the Pythagorean theorem, the hypotenuse is $\\sqrt{3^{2}+4^{2}}=5$. The angle opposite the side of length $3$ satisfies $\\sin\\theta=3/5$, $\\cos\\theta=4/5$, and $\\tan\\theta=3/4$.

**Question 2.** Find the center and radius of the circle $x^{2}+y^{2}-6x+4y-12=0$.

> **Answer.** Complete the square: $(x^{2}-6x)+(y^{2}+4y)=12$, so $(x-3)^{2}-9+(y+2)^{2}-4=12$, giving $(x-3)^{2}+(y+2)^{2}=25$. The center is $(3,-2)$ and the radius is $5$.

**Question 3.** Two lines have slopes $m_{1}=2$ and $m_{2}=-1/2$. Show that they are perpendicular.

> **Answer.** Two lines are perpendicular when the product of their slopes is $-1$. Here $m_{1}m_{2}=2\\cdot(-1/2)=-1$, so the lines are perpendicular.

### Algebra and functions

**Question 4.** Solve $x^{2}-5x+6=0$ by factoring and by the quadratic formula.

> **Answer.** Factoring: $(x-2)(x-3)=0$, so $x=2$ or $x=3$. By the quadratic formula: $x=(5\\pm\\sqrt{25-24})/2=(5\\pm 1)/2$, giving the same solutions.

**Question 5.** Complete the square for $2x^{2}+8x+3$ and find the vertex of the parabola $y=2x^{2}+8x+3$.

> **Answer.** $2x^{2}+8x+3=2(x^{2}+4x)+3=2((x+2)^{2}-4)+3=2(x+2)^{2}-5$. The vertex is $(-2,-5)$.

**Question 6.** Find the point of intersection of the lines $2x+3y=7$ and $x-y=1$.

> **Answer.** From the second equation, $x=y+1$. Substituting into the first: $2(y+1)+3y=7$, so $5y=5$ and $y=1$. Then $x=2$. The intersection is $(2,1)$.

### Vectors and matrices

**Question 7.** Let $\\mathbf{u}=(1,2)$ and $\\mathbf{v}=(3,-1)$. Compute $\\mathbf{u}+\\mathbf{v}$, $2\\mathbf{u}$, and $\\mathbf{u}\\cdot\\mathbf{v}$.

> **Answer.** $\\mathbf{u}+\\mathbf{v}=(4,1)$, $2\\mathbf{u}=(2,4)$, and $\\mathbf{u}\\cdot\\mathbf{v}=1\\cdot 3+2\\cdot(-1)=1$.

**Question 8.** Compute the product $\\begin{pmatrix}2&1\\\\1&3\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}$ and find the determinant of the matrix.

> **Answer.** The product is $\\begin{pmatrix}2x+y\\\\x+3y\\end{pmatrix}$. The determinant is $2\\cdot 3-1\\cdot 1=5$.

## Scoring your diagnostic

- If you answered 7--8 questions confidently and correctly, you have the background for the continuous route.
- If you answered 5--6 correctly, read the relevant repair sections below, then proceed.
- If you answered fewer than 5 correctly, work through the repair routes before the main chapters. The text will still be accessible, but the pace will be more comfortable with the gaps filled.

## Repair routes

### Euclidean geometry and trigonometry

- *Math Atlas: Geometry by Definition and Proof: A Reference with Countermodels* --- axiomatic Euclidean geometry, triangle properties, circle theorems, and proof strategies.
- *Math Atlas: Analytic and Computational Geometry: Predicates Before Pictures* --- coordinate methods, distance formulas, and computational geometric reasoning.

### Algebra and functions

- *Math Atlas: Algebra from Stories: Unknowns, Rules, and Function Machines* --- algebraic expressions, equations, and function concepts.
- *Math Atlas: Functions and Equations: A Proof-Building Book* --- functions, transformations, and proof-oriented algebraic reasoning.

### Vectors and matrices

- *Math Atlas: Finite-Dimensional Linear Algebra: Structure and Proof* --- vectors, matrices, linear systems, and eigenvalues.
- *Math Atlas: Matrix Computation in Practice: Structure, Error, and Scale* --- matrix operations, factorizations, and geometric interpretations.

## What this book does not assume

- Differential geometry machinery is not assumed: curvature values and surface metrics are introduced directly, without a prior course on manifolds or tensors.
- Advanced linear algebra: eigenvalues appear in the coordinate chapters, but the spectral theorem is stated rather than proved from first principles.
- Programming: algorithms are described in prose; no prior programming experience is required.
- Prior exposure to non-Euclidean geometry: spherical and hyperbolic geometry are introduced from first principles.

## Access and reading support

- Use the notation guide for repeated reference; it is designed for lookup, not one-time reading.
- Work the exercises before reading solutions; the solutions show reasoning, not only answers.
- If a chapter feels syntactically dense, expand the compressed sentences into object-type, operation, quantifier, and convention before concluding that the mathematics is inaccessible.
`;export{e as default};