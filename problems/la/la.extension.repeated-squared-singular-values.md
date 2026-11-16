# Find repeated singular magnitudes without choosing singular vectors

*Medium · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. For $A=\begin{pmatrix}1&1\\1&-1\\0&0\end{pmatrix}$, return the two squared singular values in nonincreasing order.

```answer
{"answer":{"kind":"vector","expected":["2","2"],"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Squared singular values are eigenvalues of the column Gram matrix.

</details>

<details>
<summary>Hint 2</summary>

The two columns are orthogonal and have the same length.

</details>

<details>
<summary>Worked solution</summary>

A repeated singular value does not require a unique singular basis.

1. The column Gram matrix is $A^TA=2I_2$.
2. Its two eigenvalues are both two, which are the squared singular values.
3. The ordered answer is $[2,2]$. Individual singular vectors within the repeated eigenspace can be chosen in more than one orthonormal way.

</details>
