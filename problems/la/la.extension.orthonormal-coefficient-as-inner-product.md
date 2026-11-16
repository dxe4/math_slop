# Extract one coefficient in an orthonormal basis

*Easy · [Linear algebra problems](index.md)*

All data are dimensionless. Work over $\mathbb R$ with column vectors and the Euclidean inner product unless another one is specified. For orthonormal $u_1,u_2,u_3$ and $v=2u_1-u_2+3u_3$, find $\langle v,u_2\rangle$.

```answer
{"answer":{"kind":"integer","expected":-1,"checker_scope":"Only the requested exact scalar or structured answer is checked; an optional mathematical argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Expand the inner product by linearity.

</details>

<details>
<summary>Hint 2</summary>

All terms involving a different basis vector vanish.

</details>

<details>
<summary>Worked solution</summary>

Orthonormality turns coordinates into inner products.

1. The expansion gives $2\langle u_1,u_2\rangle-\langle u_2,u_2\rangle+3\langle u_3,u_2\rangle$.
2. The cross terms are zero and the middle norm square is one.
3. The result is minus one, the second coordinate of the vector.

</details>
