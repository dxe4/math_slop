# Construct a cyclic word containing every block once

*Hard · [Original olympiad-style problems](index.md)*

For $k\ge2$, prove there is a cyclic binary word of length $2^k$ in which every binary word of length $k$ occurs exactly once as a cyclic consecutive block. Prove that no shorter cyclic word can contain all such blocks. Give a construction argument rather than a search result.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Use directed vertices equal to binary words of length $k-1$. A word of length $k$ gives an edge from its prefix to its suffix.

</details>

<details>
<summary>Hint 2</summary>

Every vertex has indegree and outdegree two, and any vertex can reach any other by appending its bits. Prove a closed walk using all edges by splicing unused-edge circuits.

</details>

<details>
<summary>Model proof</summary>

An Euler circuit in the overlap graph becomes a shortest universal cycle.

1. The directed overlap graph has $2^{k-1}$ vertices and $2^k$ labeled edges, one for each $k$-word. Every vertex has two outgoing and two incoming edges, allowing loops. From any vertex, successively appending the bits of a target vertex reaches that target after $k-1$ steps, so the graph is strongly connected.
2. Start following unused outgoing edges. Degree balance means one cannot get stuck at a vertex other than the starting vertex: every arrival there consumes one incoming edge and leaves an unused outgoing edge until its arrivals and departures balance. Thus the walk closes. If edges remain, connectivity ensures some vertex on the current circuit has access to unused edges; more explicitly an edge path from a circuit vertex to an unused edge has a first unused edge leaving a visited vertex. Start a new closed unused-edge walk there and splice it into the old circuit. Repetition ends with every edge used exactly once.
3. Read the appended bit of each edge around the resulting circuit. Because successive suffix/prefix words overlap, the cyclic length-$k$ block ending at that bit is precisely the edge label. All $2^k$ labels occur exactly once, producing a cycle of that length.
4. A cyclic word of length $L$ has exactly $L$ starting positions and hence at most $L$ distinct length-$k$ blocks. Containing all $2^k$ possibilities forces $L\ge2^k$, proving optimality.

**Self-assessment rubric**

- Define vertices and edges and verify degrees and strong connectivity.
- Explain why unused-edge walks close and why remaining edges can be spliced.
- Recover the cyclic word and all k-blocks from the edge labels.
- Count cyclic starting positions to prove optimal length.

</details>
