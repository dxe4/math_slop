# Count cube Hamilton cycles by complementary perfect matchings

*Hard · [Original olympiad-style problems](index.md)*

How many Hamilton cycles does the ordinary three-dimensional cube $Q_3$ have? Count edge sets, so rotation of the starting position and reversal do not create new cycles.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested finite count or sharp bound only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The complement of a Hamilton cycle in the cubic graph is a perfect matching.

</details>

<details>
<summary>Hint 2</summary>

Not every perfect-matching complement is connected; classify the disconnected two-factors.

</details>

<details>
<summary>Worked solution</summary>

A matching complement bijection reduces cycle counting to a small derangement count and a connectivity correction.

1. The cube bipartition has four vertices in each part, and its cross edges form K\_(4,4) with one perfect matching removed. Its perfect matchings therefore correspond to derangements of four objects, numbering 24-24+12-4+1=9.
2. The complement of each matching is a spanning two-factor. With eight vertices and no odd cycles, it is either one eight-cycle or two four-cycles. Every cube four-cycle is a face, and two disjoint faces must be opposite; there are three such face pairs.
3. Exactly three matching complements are therefore disconnected. The remaining 9-3=6 complements are Hamilton cycle edge sets.

</details>
