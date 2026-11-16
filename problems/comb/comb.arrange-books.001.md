# Order every distinct book

*Easy · [Combinatorics](index.md)*

Three distinct books labeled A, B, C must be placed in a row. Every book appears exactly once. How many different left-to-right orders are possible?

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

Choose the leftmost book, then the middle book.

</details>

<details>
<summary>Hint 2</summary>

The final position has only the remaining book.

</details>

<details>
<summary>Worked solution</summary>

A complete ordering of distinct objects is counted by a descending product.

1. There are $3$ choices for the first position, then $2$, then $1$.
2. The total is $3 \times  2 \times  1 = 6$ orders, also written $3$!.

</details>
