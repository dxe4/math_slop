# Count shortest cube paths through a prescribed vertex

*Medium · [Original olympiad-style problems](index.md)*

In the five-dimensional cube $Q_5$, vertices are five-bit words and an edge flips one bit. How many shortest paths from 00000 to 11111 pass through 11000?

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Exact requested finite count or sharp bound only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

A shortest path flips every bit exactly once.

</details>

<details>
<summary>Hint 2</summary>

Visiting the specified intermediate word fixes which flips must occur before the others.

</details>

<details>
<summary>Worked solution</summary>

A mandatory intermediate vertex splits a shortest cube path into two independent flip orders.

1. Every shortest path has five edges, with one flip of each coordinate. To pass through 11000, its first two flips must be the first two coordinates in some order.
2. Those two flips have two orders, and the remaining three flips have six orders.
3. The product is twelve paths, with no longer paths or repeated flips counted.

</details>
