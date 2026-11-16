# Count symmetric matrix degrees of freedom

*Easy · [Linear algebra problems](index.md)*

Find the dimension over $\mathbb R$ of the space of symmetric $2\times2$ real matrices.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Symmetry ties the two off-diagonal entries together.

</details>

<details>
<summary>Hint 2</summary>

Choose the diagonal entries and one off-diagonal entry freely.

</details>

<details>
<summary>Worked solution</summary>

Count independent scalar coefficients in a general member of the space.

1. A symmetric matrix has the form $\begin{pmatrix}a&b\\b&c\end{pmatrix}$.
2. It is uniquely $a\begin{pmatrix}1&0\\0&0\end{pmatrix}+b\begin{pmatrix}0&1\\1&0\end{pmatrix}+c\begin{pmatrix}0&0\\0&1\end{pmatrix}$.
3. The three coefficient matrices are independent, so the dimension is $3$.

</details>
