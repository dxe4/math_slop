# Compute an adjugate even when inversion fails

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. Find $\operatorname{adj}A$ for $A=\operatorname{diag}(2,3,0)$, where adj denotes the transpose of the cofactor matrix.

```answer
{"answer":{"kind":"matrix","expected":[["0","0","0"],["0","0","0"],["0","0","6"]],"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed.","rows":3,"columns":3}}
```

<details>
<summary>Hint 1</summary>

An adjugate exists for a singular matrix even though the inverse formula cannot be divided by its determinant.

</details>

<details>
<summary>Hint 2</summary>

The nonzero cofactor must delete the zero diagonal position.

</details>

<details>
<summary>Worked solution</summary>

Cofactors retain information at rank one below full rank.

1. The first two diagonal cofactors each include the zero diagonal factor and vanish.
2. The last diagonal cofactor is $2\cdot3=6$; all off-diagonal cofactors vanish.
3. The adjugate is the displayed rank-one matrix, and $A\operatorname{adj}A=0=(\det A)I$.

</details>
