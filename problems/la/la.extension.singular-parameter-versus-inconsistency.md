# Distinguish a singular parameter from an inconsistent one

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. For real $t$, solve the consistency question for $\begin{pmatrix}1&1&0\\0&t&1\\0&0&t-1\end{pmatrix}x=(0,1,0)^T$. Return the complete set of parameters for which no solution exists.

```answer
{"answer":{"kind":"set","expected":["0"],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Outside the two zero diagonal cases the matrix is invertible.

</details>

<details>
<summary>Hint 2</summary>

Inspect the last two equations separately at each exceptional parameter.

</details>

<details>
<summary>Worked solution</summary>

Check right-hand-side compatibility at every rank-changing parameter.

1. If $t\ne0,1$, the triangular determinant is $t(t-1)\ne0$, so a unique solution exists.
2. At $t=0$, the second equation gives $x_3=1$ while the third gives $x_3=0$, a contradiction.
3. At $t=1$, choose any $x_2$ and then set $x_3=1-x_2$, $x_1=-x_2$; hence this singular case is consistent. Only zero is excluded.

</details>
