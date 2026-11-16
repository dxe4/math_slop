# Compute squared distance to an affine constraint

*Easy · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. Find the squared Euclidean distance from $(1,1,1)$ to the affine plane $x+y+z=1$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":4,"denominator":3},"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The normal vector is $(1,1,1)$.

</details>

<details>
<summary>Hint 2</summary>

The distance is the absolute constraint error divided by the normal length.

</details>

<details>
<summary>Worked solution</summary>

Separate a shifted affine plane from the parallel linear subspace.

1. The constraint error at the point is $3-1=2$.
2. The normal squared length is three, so the squared distance is $2^2/3$.
3. Thus the answer is $4/3$; projection onto the plane through zero would answer a different question.

</details>
