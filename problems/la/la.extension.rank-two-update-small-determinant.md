# Reduce a rank-two update to its small core

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. Let $U,V$ be real $5\times2$ matrices with $V^TU=\begin{pmatrix}1&2\\3&4\end{pmatrix}$. Find $\det(I_5+UV^T)$.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Compare the two Schur complements of $\begin{pmatrix}I_5&U\\-V^T&I_2\end{pmatrix}$.

</details>

<details>
<summary>Hint 2</summary>

This reduces the determinant to that of $I_2+V^TU$.

</details>

<details>
<summary>Worked solution</summary>

Use a block determinant identity rather than assume the update has rank one.

1. Eliminating either identity block in the displayed block matrix gives $\det(I_5+UV^T)=\det(I_2+V^TU)$.
2. The smaller matrix is $\begin{pmatrix}2&2\\3&5\end{pmatrix}$.
3. Its determinant is $10-6=4$, giving the answer without the individual five-dimensional columns.

</details>
