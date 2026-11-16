# Use a positive complex norm rather than a bilinear square

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb C$ with dimensionless column coordinates. The inner product is linear in its first argument: $\langle u,v\rangle=\sum_j u_j\overline{v_j}$. Use $\langle u,v\rangle_G=2u_1\overline{v_1}+3u_2\overline{v_2}$. Find the squared norm of $(1,i)$.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A complex norm uses a number times its conjugate.

</details>

<details>
<summary>Hint 2</summary>

The imaginary coordinate has absolute square one, not minus one.

</details>

<details>
<summary>Worked solution</summary>

Positive Hermitian weights apply to absolute squares.

1. The first coordinate contributes $2\cdot1\cdot1=2$.
2. The second contributes $3i(-i)=3$.
3. The squared norm is five, positive for this nonzero vector.

</details>
