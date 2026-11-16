# Represent one row swap by a matrix

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. Find the $3\times3$ matrix $E$ such that left multiplication $EA$ swaps rows one and three of every real matrix $A$ having three rows.

```answer
{"answer":{"kind":"matrix","expected":[["0","0","1"],["0","1","0"],["1","0","0"]],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded.","rows":3,"columns":3}}
```

<details>
<summary>Hint 1</summary>

Apply the row operation to the identity matrix.

</details>

<details>
<summary>Hint 2</summary>

Each row of the multiplier selects the old row needed in that position.

</details>

<details>
<summary>Worked solution</summary>

Encode a row operation independently of the matrix being transformed.

1. The first new row must select the old third row, so it is $(0,0,1)$.
2. The second row stays in place, giving $(0,1,0)$.
3. The third new row selects the old first row, giving $(1,0,0)$. These rows form $E$.

</details>
