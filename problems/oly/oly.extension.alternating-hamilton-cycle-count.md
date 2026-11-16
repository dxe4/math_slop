# Count Hamilton cycles with alternating bipartition classes

*Medium · [Original olympiad-style problems](index.md)*

Find the number of Hamilton cycles of $K_{3,3}$ on fixed labeled vertices. Cycles differing only by starting vertex or reversal are identified.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested finite count or sharp bound only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Every Hamilton cycle alternates the two three-vertex parts.

</details>

<details>
<summary>Hint 2</summary>

Fix one vertex as a start before accounting for reversal.

</details>

<details>
<summary>Worked solution</summary>

Alternation and the cycle-equivalence convention reduce the count to two factorial choices.

1. Fix a designated vertex in the first part as the start, leaving two orders for the other two first-part vertices.
2. The second-part vertices can occupy the alternating positions in six orders, giving twelve directed traversals from that fixed start.
3. Each unoriented cycle appears in both traversal directions, so the required count is six.

</details>
