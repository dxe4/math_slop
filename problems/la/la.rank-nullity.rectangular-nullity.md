# Use rank-nullity

*Easy · [Linear algebra problems](index.md)*

A real $5\times7$ matrix $A$ has rank $4$. Find $\dim\ker A$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The domain dimension is the number of columns.

</details>

<details>
<summary>Hint 2</summary>

Rank and nullity add to the domain dimension.

</details>

<details>
<summary>Worked solution</summary>

Apply rank-nullity to the map from the column-coordinate space.

1. The matrix defines a linear map $\mathbb R^7\to\mathbb R^5$.
2. Rank-nullity states $7=\operatorname{rank}A+\dim\ker A$.
3. Substituting rank $4$ gives nullity $7-4=3$.

</details>
