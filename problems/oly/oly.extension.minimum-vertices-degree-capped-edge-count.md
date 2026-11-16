# Prove a vertex lower bound and realize it with a simple graph

*Medium · [Original olympiad-style problems](index.md)*

Find the smallest number of vertices in a simple graph with $14$ edges and every degree at most three.

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact requested finite count or sharp bound only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Use the handshake identity for a necessary lower bound.

</details>

<details>
<summary>Hint 2</summary>

For sharpness, begin with a cycle and add a matching of noncycle chords.

</details>

<details>
<summary>Worked solution</summary>

A degree bound supplies a lower count, while a concrete construction certifies attainability.

1. The degree sum is twenty-eight and is at most three times the vertex count, so at least ten vertices are needed.
2. On a ten-cycle labeled 1 through 10, add chords 1-6,2-7,3-8,4-9. These four chords form a matching and are not cycle edges.
3. The resulting simple graph has fourteen edges and maximum degree three on ten vertices, attaining the bound.

</details>
