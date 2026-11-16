# Find a common commutant without assuming either matrix is diagonalizable

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. For $3\times3$ real matrix units, find the dimension of $\{X:XE_{12}=E_{12}X,\ XE_{23}=E_{23}X\}$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

For each commutation equation, compare its nonzero row and column positions.

</details>

<details>
<summary>Hint 2</summary>

Combine the restrictions before counting free entries; satisfying only the sum of the two equations is insufficient.

</details>

<details>
<summary>Worked solution</summary>

Intersect two separate centralizer constraints entry by entry.

1. Commutation with $E_{12}$ forces $x_{21}=x_{31}=x_{23}=0$ and $x_{22}=x_{11}$.
2. Commutation with $E_{23}$ additionally forces $x_{12}=x_{32}=0$ and $x_{33}=x_{22}$, with the existing $x_{31}=0$ consistent.
3. The remaining matrices are exactly $aI+bE_{13}$. Both displayed generators commute with both units, so the space has dimension two.

</details>
