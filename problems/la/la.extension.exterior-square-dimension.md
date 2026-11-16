# Count independent coordinate wedges

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$ unless a scalar extension is explicitly stated; all coordinates are dimensionless. Find the real dimension of $\Lambda^2(\mathbb R^5)$.

```answer
{"answer":{"kind":"integer","expected":10,"checker_scope":"Only the requested bounded exact value or coordinate object is checked; proof correctness is not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

A basis uses pairs of distinct coordinate indices in increasing order.

</details>

<details>
<summary>Hint 2</summary>

Reversed pairs do not add independent directions.

</details>

<details>
<summary>Worked solution</summary>

Alternation reduces ordered pairs to unordered index pairs.

1. The coordinate wedges are $e_i\wedge e_j$ for $i<j$.
2. There are $\binom52$ such pairs.
3. The dimension is ten, with the wedges giving the standard exterior-square basis.

</details>
