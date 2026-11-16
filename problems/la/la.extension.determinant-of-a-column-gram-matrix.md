# Find a Gram determinant from a square determinant

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. A real square matrix has $\det A=-3$. Find $\det(A^TA)$.

```answer
{"answer":{"kind":"integer","expected":9,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Determinants multiply across square matrix products.

</details>

<details>
<summary>Hint 2</summary>

The transpose has the same determinant as the original matrix.

</details>

<details>
<summary>Worked solution</summary>

The Gram determinant forgets the orientation sign.

1. $\det(A^TA)=\det(A^T)\det A$.
2. The two determinants on the right are both minus three.
3. The result is nine, consistent with positive definiteness of this nonsingular Gram matrix.

</details>
