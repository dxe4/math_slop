# Retain the nilpotent contribution to a power

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$; vectors are columns and all data are dimensionless. Compute $J^4$ for $J=\begin{pmatrix}2&1\\0&2\end{pmatrix}$.

```answer
{"answer":{"kind":"matrix","expected":[["16","32"],["0","16"]],"checker_scope":"Only the requested bounded exact result is checked; no unrestricted proof is automatically assessed.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Write the matrix as a scalar multiple of the identity plus a square-zero matrix.

</details>

<details>
<summary>Hint 2</summary>

Only the constant and linear nilpotent terms survive the binomial expansion.

</details>

<details>
<summary>Worked solution</summary>

A repeated eigenvalue does not make a matrix scalar.

1. Write $J=2I+N$, with $N^2=0$ and $N=E_{12}$.
2. The commuting binomial formula gives $J^4=2^4I+4\cdot2^3N$.
3. The result is $\begin{pmatrix}16&32\\0&16\end{pmatrix}$; omitting the superdiagonal term would discard the defect.

</details>
