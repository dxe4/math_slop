# Apply a matrix to a coordinate vector with a zero column

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. Let $A=\begin{pmatrix}2&0&-1&4\\3&0&2&1\end{pmatrix}$. Compute $Ae_2$, where $e_2=(0,1,0,0)^T$.

```answer
{"answer":{"kind":"vector","expected":["0","0"],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Multiplication by a standard coordinate vector selects a column.

</details>

<details>
<summary>Hint 2</summary>

Use the second column, not the second row.

</details>

<details>
<summary>Worked solution</summary>

Use the column meaning of matrix multiplication.

1. The input has only its second coordinate nonzero.
2. Therefore $Ae_2$ is the second column of the two-by-four matrix.
3. That column is zero, so the output is $(0,0)^T$ and $e_2$ lies in the kernel.

</details>
