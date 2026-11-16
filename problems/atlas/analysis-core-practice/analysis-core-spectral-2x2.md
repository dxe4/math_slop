# Eigenvalues and a spectral decomposition

*Difficulty 4 of 5 · [Analysis and linear algebra core practice](index.md) · exercise 9 of 12*

Let $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. Find its eigenvalues and a corresponding orthonormal basis of eigenvectors, and use them to compute $A^{10} \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ exactly.

<details>
<summary>Hint 1</summary>

The characteristic polynomial is $(2 - t)^2 - 1$.

</details>

<details>
<summary>Hint 2</summary>

Expand $(1, 0)^T$ in the eigenbasis before applying $A^{10}$; eigenvectors are rescaled by their eigenvalues at each step.

</details>

<details>
<summary>Worked solution</summary>

The characteristic polynomial is $\det(A - tI) = (2 - t)^2 - 1 = t^2 - 4t + 3 = (t - 1)(t - 3)$, so the eigenvalues are $1$ and $3$. Solving $(A - I)v = 0$ gives $v = (1, -1)$, and $(A - 3I)v = 0$ gives $v = (1, 1)$; normalized, $u_1 = \tfrac{1}{\sqrt{2}}(1, -1)$ and $u_3 = \tfrac{1}{\sqrt{2}}(1, 1)$, which are orthonormal. Write $(1, 0)^T = \tfrac{1}{2}(1, -1)^T + \tfrac{1}{2}(1, 1)^T$ (the coefficients are the dot products with the eigenbasis, halved because the unnormalized vectors have squared norm $2$... precisely: $(1,0) = c_1 (1,-1) + c_3 (1,1)$ forces $c_1 + c_3 = 1$ and $-c_1 + c_3 = 0$, so $c_1 = c_3 = 1/2$). Then $A^{10} (1,0)^T = \tfrac{1}{2} \cdot 1^{10} (1, -1)^T + \tfrac{1}{2} \cdot 3^{10} (1, 1)^T = \tfrac{1}{2} (1 + 59049,\; -1 + 59049)^T = (29525,\; 29524)^T$. The spectral point of view replaces nine matrix multiplications with two scalar exponentiations.

**Answer.** Eigenvalues $1$ and $3$ with orthonormal eigenvectors $\frac{1}{\sqrt{2}}(1, -1)$, $\frac{1}{\sqrt{2}}(1, 1)$; $A^{10} (1,0)^T = (29525, 29524)^T$.

</details>

*Tags: spectral-theory, eigenvalues, matrices*
