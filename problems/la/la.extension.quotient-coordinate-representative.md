# Choose a representative in a coordinate quotient

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. In $\mathbb R^3/\operatorname{span}(e_1)$, two vectors represent the same coset when their difference is a multiple of $e_1$. Find the representative of the coset of $(3,4,5)$ whose first coordinate is zero.

```answer
{"answer":{"kind":"vector","expected":["0","4","5"],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Only the first coordinate can change within this coset.

</details>

<details>
<summary>Hint 2</summary>

Subtract the appropriate multiple of the first coordinate vector.

</details>

<details>
<summary>Worked solution</summary>

Use the equivalence relation defining the quotient.

1. Subtracting $3e_1$ from the given vector yields $(0,4,5)$.
2. The difference lies in the subspace being quotiented out, so the coset is unchanged.
3. Any representative with first coordinate zero must retain the other two coordinates, proving uniqueness.

</details>
