# Conjugate a scalar in the adjoint

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb C$ with dimensionless column coordinates. The inner product is linear in its first argument: $\langle u,v\rangle=\sum_j u_j\overline{v_j}$. On the one-dimensional standard complex inner-product space, $Tz=(2+i)z$. Find the scalar $c$ for which $T^*z=cz$.

```answer
{"answer":{"kind":"complex","expected":"2-i","checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use $\langle Tz,w\rangle=\langle z,T^*w\rangle$.

</details>

<details>
<summary>Hint 2</summary>

The scalar in the second argument is conjugated.

</details>

<details>
<summary>Worked solution</summary>

Match the adjoint identity under the fixed inner-product convention.

1. The left side is $(2+i)z\overline w$.
2. The right side for a scalar $c$ is $z\overline{cw}=\overline c\,z\overline w$.
3. Thus $\overline c=2+i$ and $c=2-i$.

</details>
