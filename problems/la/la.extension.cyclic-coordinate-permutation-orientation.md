# Find the sign of a coordinate cycle

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. The map on $\mathbb R^4$ sends $(x_1,x_2,x_3,x_4)$ to $(x_2,x_3,x_4,x_1)$. Find its determinant.

```answer
{"answer":{"kind":"integer","expected":-1,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The coordinate permutation is a single cycle of length four.

</details>

<details>
<summary>Hint 2</summary>

Such a cycle can be implemented by three transpositions.

</details>

<details>
<summary>Worked solution</summary>

Permutation parity determines orientation.

1. A four-cycle has sign $(-1)^{4-1}$.
2. Each of its three transpositions contributes a factor minus one to the determinant.
3. The resulting determinant is minus one, although the map preserves Euclidean lengths.

</details>
