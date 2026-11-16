# Form the normal-equation Gram matrix

*Easy · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. For $A=\begin{pmatrix}1&0\\1&1\\0&1\end{pmatrix}$ find $A^TA$.

```answer
{"answer":{"kind":"matrix","expected":[["2","1"],["1","2"]],"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

The entries are dot products of data columns.

</details>

<details>
<summary>Hint 2</summary>

Compute the two squared column lengths and their shared inner product.

</details>

<details>
<summary>Worked solution</summary>

Build the coefficient matrix used by normal equations.

1. The first column $(1,1,0)$ and second $(0,1,1)$ each have squared length two.
2. Their dot product is one.
3. The symmetric Gram matrix is $\begin{pmatrix}2&1\\1&2\end{pmatrix}$, whose positive determinant also confirms independent columns.

</details>
