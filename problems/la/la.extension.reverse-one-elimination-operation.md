# Undo a row addition

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. An elimination matrix performs $R_2\leftarrow R_2-3R_1$ on a two-row matrix. Give its inverse as a $2\times2$ matrix.

```answer
{"answer":{"kind":"matrix","expected":[["1","0"],["3","1"]],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

The inverse must restore the old second row without changing the first.

</details>

<details>
<summary>Hint 2</summary>

Add the same multiple that the original operation subtracted.

</details>

<details>
<summary>Worked solution</summary>

Reverse the elementary operation itself.

1. The original multiplier is $E=\begin{pmatrix}1&0\\-3&1\end{pmatrix}$.
2. To undo it, keep row one and add three times row one to row two.
3. The inverse is $\begin{pmatrix}1&0\\3&1\end{pmatrix}$; direct multiplication in either order gives the identity.

</details>
