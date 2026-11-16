# Transpose the coordinate map in the correct dual bases

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. Let $T$ have standard matrix $\begin{pmatrix}1&2\\0&1\end{pmatrix}$. Use input basis $B=(e_1,e_1+e_2)$ and output basis $C=(e_1+e_2,e_2)$. Find the matrix of $T^*$ from $C^*$ coordinates to $B^*$ coordinates.

```answer
{"answer":{"kind":"matrix","expected":[["1","-1"],["3","-2"]],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

First compute the matrix of $T$ from $B$ to $C$.

</details>

<details>
<summary>Hint 2</summary>

The dual matrix is the transpose of that coordinate matrix, not necessarily the transpose of the standard matrix.

</details>

<details>
<summary>Worked solution</summary>

Coordinate changes and duality must refer to matching basis pairs.

1. The two basis matrices are $P_B=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ and $P_C=\begin{pmatrix}1&0\\1&1\end{pmatrix}$.
2. The coordinate matrix is $P_C^{-1}TP_B=\begin{pmatrix}1&3\\-1&-2\end{pmatrix}$.
3. Dual evaluation transposes this matrix, giving $\begin{pmatrix}1&-1\\3&-2\end{pmatrix}$ between the stated dual bases.

</details>
