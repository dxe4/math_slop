# Invert a coupled coordinate map

*Medium · [Linear algebra problems](index.md)*

Find the inverse of $\begin{pmatrix}2&1\\1&1\end{pmatrix}$.

```answer
{"answer":{"kind":"matrix","expected":[[1,-1],[-1,2]],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

First decide whether the determinant permits an inverse.

</details>

<details>
<summary>Hint 2</summary>

For a two-by-two matrix, interchange the diagonal entries and negate the off-diagonal entries before dividing by the determinant.

</details>

<details>
<summary>Worked solution</summary>

The two-dimensional adjugate formula gives an exact inverse.

1. The determinant is $2\cdot1-1\cdot1=1$, so the matrix is invertible.
2. Its adjugate is $\begin{pmatrix}1&-1\\-1&2\end{pmatrix}$. Dividing by the determinant leaves this matrix unchanged.
3. Multiplying by the original gives $\begin{pmatrix}2-1&-2+2\\1-1&-1+2\end{pmatrix}=I$, confirming the inverse.

</details>
