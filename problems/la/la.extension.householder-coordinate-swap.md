# Apply a reflection with an oblique normal

*Easy · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. Let $u=(1,-1)^T$ and $H=I-2uu^T/(u^Tu)$. Find $H(2,3)^T$.

```answer
{"answer":{"kind":"vector","expected":["3","2"],"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The denominator is two and the scalar $u^T(2,3)^T$ is minus one.

</details>

<details>
<summary>Hint 2</summary>

Subtract twice the normal projection from the original vector.

</details>

<details>
<summary>Worked solution</summary>

Use the Householder formula as a geometric reflection.

1. The normal projection coefficient is $-1/2$.
2. The reflection subtracts $2(-1/2)u=-u$, so the output is $(2,3)+u$.
3. The result is $(3,2)$, as expected for reflection across the line $x=y$.

</details>
