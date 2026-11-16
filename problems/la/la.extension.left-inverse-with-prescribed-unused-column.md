# Construct a left inverse with a normalization

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. For $A=\begin{pmatrix}1&0\\1&1\\0&1\end{pmatrix}$ find the $2\times3$ matrix $L$ satisfying $LA=I_2$ whose third column is zero.

```answer
{"answer":{"kind":"matrix","expected":[["1","0","0"],["-1","1","0"]],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded.","rows":2,"columns":3}}
```

<details>
<summary>Hint 1</summary>

The zero-column condition means $L$ uses only the first two output coordinates.

</details>

<details>
<summary>Hint 2</summary>

Invert the square map given by the first two rows of $A$.

</details>

<details>
<summary>Worked solution</summary>

A normalization selects one left inverse from a larger affine family.

1. Write $L=[M\mid0]$ with $M$ two-by-two. Then $LA=M\begin{pmatrix}1&0\\1&1\end{pmatrix}$.
2. The selected square block is invertible, with inverse $\begin{pmatrix}1&0\\-1&1\end{pmatrix}$.
3. This forces $M$ to be that inverse and gives the displayed $L$, which verifies both requirements.

</details>
