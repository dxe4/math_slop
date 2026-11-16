# Multiply in the stated order

*Easy · [Linear algebra problems](index.md)*

Let $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ and $B=\begin{pmatrix}1&0\\1&1\end{pmatrix}$. Compute $AB$.

```answer
{"answer":{"kind":"matrix","expected":[[2,1],[1,1]],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

The left factor supplies rows; the right factor supplies columns.

</details>

<details>
<summary>Hint 2</summary>

Calculate each entry separately instead of assuming the factors commute.

</details>

<details>
<summary>Worked solution</summary>

The order of the factors specifies which rows meet which columns.

1. The first row of $AB$ is $(1\cdot1+1\cdot1,\;1\cdot0+1\cdot1)=(2,1)$.
2. The second row is $(0\cdot1+1\cdot1,\;0\cdot0+1\cdot1)=(1,1)$.
3. Thus $AB=\begin{pmatrix}2&1\\1&1\end{pmatrix}$.

</details>
