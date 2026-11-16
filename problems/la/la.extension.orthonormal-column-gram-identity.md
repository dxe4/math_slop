# Find the Gram matrix of orthonormal columns

*Easy · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. A real $3\times2$ matrix $Q$ has orthonormal columns. Find $Q^TQ$.

```answer
{"answer":{"kind":"matrix","expected":[["1","0"],["0","1"]],"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Entry $(i,j)$ of the product is the dot product of columns $i,j$.

</details>

<details>
<summary>Hint 2</summary>

Orthonormality specifies both the diagonal and off-diagonal entries.

</details>

<details>
<summary>Worked solution</summary>

A rectangular isometry has an identity column Gram matrix.

1. Each column has squared length one, giving diagonal entries one.
2. Distinct columns are orthogonal, giving the two off-diagonal entries zero.
3. Thus $Q^TQ=I_2$. This does not imply $QQ^T=I_3$.

</details>
