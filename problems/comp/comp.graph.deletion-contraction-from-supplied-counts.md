# Apply deletion-contraction without confusing the two graph operations

*Easy · [Computational arithmetic problems](index.md)*

Let e be an edge of a simple graph G. Use $P_G(q)=P_{G-e}(q)-P_{G/e}(q)$. If the two supplied values at q=3 are 48 and 12 respectively, find P\_G(3).

```answer
{"answer":{"kind":"integer","expected":"36","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The deletion count includes colorings giving the endpoints the same color.

</details>

<details>
<summary>Hint 2</summary>

The contraction count removes exactly that forbidden family.

</details>

<details>
<summary>Worked solution</summary>

Deletion-contraction partitions the deleted-edge colorings by endpoint equality.

1. The deleted-edge graph has forty-eight supplied colorings.
2. The contracted graph accounts for twelve assignments that fail the original edge condition.
3. Subtracting gives thirty-six proper colorings of G.

</details>
