# Find when a projection is orthogonal

*Medium · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. For $P_t=\begin{pmatrix}1&t\\0&0\end{pmatrix}$, return all real $t$ for which $P_t$ is an orthogonal projection in the Euclidean inner product.

```answer
{"answer":{"kind":"set","expected":["0"],"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Every displayed matrix is idempotent.

</details>

<details>
<summary>Hint 2</summary>

Orthogonality additionally requires self-adjointness in this metric.

</details>

<details>
<summary>Worked solution</summary>

Distinguish the algebraic projection condition from the metric one.

1. Direct multiplication gives $P_t^2=P_t$ for every real parameter.
2. A Euclidean orthogonal projection must also satisfy $P_t^T=P_t$, forcing the upper-right entry to equal the zero lower-left entry.
3. Thus $t=0$ is necessary and sufficient; then the matrix is projection onto the first coordinate axis.

</details>
