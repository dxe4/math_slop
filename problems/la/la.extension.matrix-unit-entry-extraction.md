# Extract one entry by matrix units

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. Let $A=\begin{pmatrix}2&7\\3&5\end{pmatrix}$ and let $E_{ij}$ have its sole one in position $(i,j)$. Compute $E_{11}AE_{22}$.

```answer
{"answer":{"kind":"matrix","expected":[["0","7"],["0","0"]],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Left multiplication by $E_{11}$ keeps only the first row.

</details>

<details>
<summary>Hint 2</summary>

Right multiplication by $E_{22}$ keeps only the second column.

</details>

<details>
<summary>Worked solution</summary>

Separate row selection from column selection.

1. $E_{11}A=\begin{pmatrix}2&7\\0&0\end{pmatrix}$.
2. Right multiplication by $E_{22}$ sets its first column to zero and retains the second.
3. The result has only the entry seven in position $(1,2)$.

</details>
