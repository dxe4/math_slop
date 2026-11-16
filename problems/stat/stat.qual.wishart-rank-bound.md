# Bound a centered scatter rank without probabilistic assumptions

*Easy · [Statistics and probability](index.md)*

For arbitrary vectors $x_1,\ldots,x_n\in\mathbf R^p$ with $n\ge1$, put $W=\sum_i(x_i-\bar x)(x_i-\bar x)^{\mathsf T}$. Prove $\operatorname{rank}W\le\min(p,n-1)$. When $n\ge p+1$, exhibit a sample attaining rank $p$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Arrange the centered vectors as columns of a matrix.

</details>

<details>
<summary>Hint 2</summary>

For attainment, use the origin and the coordinate unit vectors, adding origins if necessary.

</details>

<details>
<summary>Model proof</summary>

Centering supplies a column relation, and the scatter matrix has the same rank as the residual matrix.

1. Let $R$ have columns $x_i-\bar x$. Their sum is zero, so $\operatorname{rank}R\le\min(p,n-1)$.
2. Since $W=RR^{\mathsf T}$ and $z^{\mathsf T}Wz=\|R^{\mathsf T}z\|^2$, the kernels of $W$ and $R^{\mathsf T}$ agree. Thus $\operatorname{rank}W=\operatorname{rank}R$.
3. Choose observations $0,e_1,\ldots,e_p$ and, if needed, further zeros. A vector orthogonal to every residual column has equal inner products with all the observations. The zero observation makes that common value zero, and the $e_j$ force every coordinate to vanish. Hence the residuals span $\mathbf R^p$.

**Self-assessment rubric**

- Use the zero column sum to obtain the dimension bound.
- Justify rank equality through the quadratic form or kernels.
- Provide a sample and prove its residuals span the full space.

</details>
