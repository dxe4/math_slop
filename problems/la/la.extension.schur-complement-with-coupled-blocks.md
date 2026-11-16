# Eliminate an invertible block before computing a determinant

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. Let $B=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, $C=\begin{pmatrix}1&0\\1&1\end{pmatrix}$ and $D=\operatorname{diag}(3,4)$. Find $\det\begin{pmatrix}I_2&B\\C&D\end{pmatrix}$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Subtract C times the first block row from the second block row.

</details>

<details>
<summary>Hint 2</summary>

The remaining lower diagonal block is $D-CB$, with that multiplication order.

</details>

<details>
<summary>Worked solution</summary>

A block row operation exposes the Schur complement.

1. The determinant is unchanged by that block row subtraction and becomes $\det(I_2)\det(D-CB)$.
2. The product $CB=\begin{pmatrix}1&1\\1&2\end{pmatrix}$, so the Schur complement is $\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$.
3. Its determinant is three, which is the determinant of the full four-by-four matrix.

</details>
