# Recover a Gram determinant through all maximal minors

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. For $A=\begin{pmatrix}1&1&0\\0&1&2\end{pmatrix}$, find $\det(AA^T)$ using the squared two-column minors.

```answer
{"answer":{"kind":"integer","expected":9,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

List all three choices of two columns.

</details>

<details>
<summary>Hint 2</summary>

Cauchy-Binet makes the Gram determinant the sum of their squared determinants.

</details>

<details>
<summary>Worked solution</summary>

Separate the contribution of each coordinate area.

1. The minors in column orders $(1,2),(1,3),(2,3)$ are one, two and two.
2. The corresponding minors of the transpose are the same, so Cauchy-Binet gives $1^2+2^2+2^2$.
3. The result is nine. Directly $AA^T=\begin{pmatrix}2&1\\1&5\end{pmatrix}$ has that same determinant.

</details>
