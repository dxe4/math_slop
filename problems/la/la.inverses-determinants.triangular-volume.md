# Read a triangular determinant

*Easy · [Linear algebra problems](index.md)*

Find $\det\begin{pmatrix}2&1&4\\0&-3&2\\0&0&5\end{pmatrix}$.

```answer
{"answer":{"kind":"integer","expected":-30,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The matrix is triangular, so the diagonal determines its determinant.

</details>

<details>
<summary>Hint 2</summary>

Keep the sign of the negative diagonal entry.

</details>

<details>
<summary>Worked solution</summary>

The determinant of a triangular matrix is its diagonal product.

1. All entries below the main diagonal vanish.
2. The diagonal entries are $2,-3,5$.
3. The determinant is $2\cdot(-3)\cdot5=-30$.

</details>
