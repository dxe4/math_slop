# Solve a matrix equation with one resonant entry

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. Let $D=\operatorname{diag}(1,2)$, $E=\operatorname{diag}(-1,3)$ and $C=\begin{pmatrix}0&4\\1&5\end{pmatrix}$. Find the solution of $DX+XE=C$ normalized by $x_{11}=0$.

```answer
{"answer":{"kind":"matrix","expected":[["0","1"],["1","1"]],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Entry $(i,j)$ is multiplied by $D_{ii}+E_{jj}$.

</details>

<details>
<summary>Hint 2</summary>

One such sum is zero; check its right side before using the normalization.

</details>

<details>
<summary>Worked solution</summary>

Separate an entrywise compatibility condition from three determined entries.

1. The four scalar multipliers in row order are zero, four, one and five.
2. The first right-hand entry is zero, so it imposes no contradiction and leaves $x_{11}$ free; the normalization chooses zero.
3. The remaining equations give $x_{12}=1$, $x_{21}=1$, $x_{22}=1$. Thus the normalized solution is unique.

</details>
