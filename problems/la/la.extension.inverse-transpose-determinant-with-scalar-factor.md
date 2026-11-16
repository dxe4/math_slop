# Combine inverse, transpose and uniform scaling

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. A real $3\times3$ matrix has determinant two. Find $\det(2A^{-T})$, where $A^{-T}=(A^{-1})^T$.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Uniform scaling of a three-by-three matrix contributes the cube of the scalar.

</details>

<details>
<summary>Hint 2</summary>

Inversion reciprocates the determinant, while transposition leaves it unchanged.

</details>

<details>
<summary>Worked solution</summary>

Apply three determinant operations with their correct exponents.

1. The inverse transpose has determinant one half.
2. Scaling all three columns by two contributes a factor of $2^3=8$.
3. The final determinant is $8/2=4$.

</details>
