# Prove an optimal trail decomposition by augmentation

*Medium · [Original olympiad-style problems](index.md)*

A connected graph has $2n$ vertices and every degree is odd. Add one auxiliary vertex adjacent to every original vertex, and use an Euler circuit to prove its edges can be partitioned into exactly n nonempty trails. Prove fewer trails are impossible.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

All degrees of the augmented graph are even, including the new vertex.

</details>

<details>
<summary>Hint 2</summary>

Remove the auxiliary edges from its Euler circuit and inspect the pieces between consecutive visits.

</details>

<details>
<summary>Model proof</summary>

Use the supplied augmentation and endpoint parity.

1. The augmented connected graph has all degrees even, so an Euler circuit exists; it can be built by following unused edges and splicing closed unused tours until all edges are used.
2. Removing its $2n$ auxiliary edges splits that circuit into n trails of original edges between pairs of auxiliary visits. Each piece is nonempty because each original vertex has only one auxiliary edge, so arrival there must next use an original edge.
3. Every original edge appears exactly once. Conversely, each odd-degree vertex must be an endpoint of an odd number of trails in any edge partition, while a trail has at most two endpoints.
4. There are $2n$ such vertices, so at least n trails are necessary. The construction attains the lower bound.

**Self-assessment rubric**

- Check every augmented degree and connectedness.
- Obtain exactly n nonempty trails covering each original edge once.
- Use odd endpoint requirements to prove optimality.

</details>
