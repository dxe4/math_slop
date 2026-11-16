# Euler circuit even degrees

*Hard · [Original Putnam-style training](index.md)*

Prove a finite connected undirected graph with at least $1$ edge has an Euler circuit iff every vertex has even degree.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Necessity counts entries and exits at each vertex.

</details>

<details>
<summary>Hint 2</summary>

For sufficiency, construct a closed unused-edge trail and splice further cycles until no edge remains.

</details>

<details>
<summary>Model proof</summary>

If unused edges remain, connectedness gives a vertex on the current closed trail incident to an unused edge. Starting there yields another closed trail, which can be spliced into the first. Repeating finitely many times uses every edge.

1. An Euler circuit enters and leaves each vertex equally often, so every degree is even (the starting vertex also has paired departure and return).
2. Conversely, begin following unused edges at any vertex. Even degree prevents the trail from getting stuck at a different vertex: at every intermediate vertex, unused edges occur in paired entry/exit parity. A finite maximal trail therefore closes into a cycle.
3. If unused edges remain, connectedness gives a vertex on the current closed trail incident to an unused edge. Starting there yields another closed trail, which can be spliced into the first. Repeating finitely many times uses every edge.

**Self-assessment rubric**

- Pair every circuit entry with an exit at each vertex.
- Use even degrees to construct a closed unused-edge trail.
- Use connectedness to splice further closed trails until all edges are used.

</details>
