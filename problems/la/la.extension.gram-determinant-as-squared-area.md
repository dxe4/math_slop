# Compute a parallelogram area without a square-root answer

*Medium · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. For $u=(1,1,0)$ and $v=(0,1,1)$, find the square of the Euclidean area of their parallelogram.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The squared area is $\|u\|^2\|v\|^2-\langle u,v\rangle^2$.

</details>

<details>
<summary>Hint 2</summary>

This is also the determinant of their two-vector Gram matrix.

</details>

<details>
<summary>Worked solution</summary>

Combine length and angle into a Gram determinant.

1. Each squared length is two and the inner product is one.
2. The squared area is therefore $2\cdot2-1^2=3$.
3. The positive answer certifies independence; the area itself would be $\sqrt3$, but the requested invariant is its square.

</details>
