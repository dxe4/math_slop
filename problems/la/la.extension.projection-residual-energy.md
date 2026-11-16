# Read residual energy from orthogonal splitting

*Easy · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. If $P$ is an orthogonal projection and $\|v\|^2=25$, $\|Pv\|^2=9$, find $\|v-Pv\|^2$.

```answer
{"answer":{"kind":"integer","expected":16,"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The projection and its residual are orthogonal.

</details>

<details>
<summary>Hint 2</summary>

Apply the Pythagorean identity to their sum.

</details>

<details>
<summary>Worked solution</summary>

Energy subtraction is valid because the decomposition is orthogonal.

1. One has $v=Pv+(v-Pv)$ with orthogonal terms.
2. Therefore $25=9+\|v-Pv\|^2$.
3. The residual squared norm is sixteen; this subtraction need not hold for an oblique projection.

</details>
