# Separate a rotation from stretching

*Medium · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. For $A=\begin{pmatrix}0&-3\\2&0\end{pmatrix}$, find the orthogonal factor $Q$ in the polar decomposition $A=QS$ with $S$ symmetric positive definite.

```answer
{"answer":{"kind":"matrix","expected":[["0","-1"],["1","0"]],"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

The positive factor is the positive square root of $A^TA$.

</details>

<details>
<summary>Hint 2</summary>

Multiply by its inverse on the right.

</details>

<details>
<summary>Worked solution</summary>

Polar decomposition places the positive stretching on the input side.

1. $A^TA=\operatorname{diag}(4,9)$, so $S=\operatorname{diag}(2,3)$.
2. Then $Q=AS^{-1}=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.
3. This matrix has orthonormal columns and $QS=A$, verifying both the decomposition and its factor order.

</details>
