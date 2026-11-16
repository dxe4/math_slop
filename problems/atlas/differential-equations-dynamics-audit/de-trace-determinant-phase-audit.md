# Classify a planar flow exactly

*Difficulty 3 of 5 · [Differential equations, control, and long-time dynamics audit studio](index.md) · exercise 4 of 14*

For $z'=Az$ with $A=\begin{bmatrix}1&2\\2&1\end{bmatrix}$, compute trace, determinant, discriminant, eigenvalues and invariant eigendirections. Classify the origin and explain why one attracting line does not make it stable.

<details>
<summary>Hint 1</summary>

Vectors (1,1) and (1,-1) are eigenvectors

</details>

<details>
<summary>Hint 2</summary>

A negative determinant means opposite-sign real eigenvalues

</details>

<details>
<summary>Hint 3</summary>

Stability must control every sufficiently small perturbation

</details>

<details>
<summary>Worked solution</summary>

Trace is 2, determinant is $1-4=-3$, and discriminant is $2^2-4(-3)=16$. The eigenvalues are $(2\pm4)/2$, namely 3 and -1. Vector $(1,1)$ has eigenvalue 3 and spans the unstable line; vector $(1,-1)$ has eigenvalue -1 and spans the stable line. The origin is a saddle and unstable. Initial states exactly on the stable line approach it, but arbitrarily small components in the unstable direction grow like $\exp(3t)$, so the all-directions quantifier in Lyapunov stability fails.

**Answer.** Trace 2, determinant -3, discriminant 16, eigenvalues 3 and -1; the origin is an unstable saddle with unstable line span(1,1) and stable line span(1,-1).

</details>

*Tags: dynamical systems, phase plane, eigenvalues, saddle*
