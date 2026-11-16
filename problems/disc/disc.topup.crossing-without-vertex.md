# Keep a crossing separate from a vertex

*Medium · [Discrete mathematics](index.md)*

A graph has exactly the labeled vertices $A,B,C,D,E$ and edges AC and BD. The two drawn edges cross without a vertex at their crossing, and E is isolated. List the neighbors of A.

<figure class="geometry"><svg viewBox="0 0 480 300" width="480" role="img" aria-label="Exactly five labeled vertices A,B,C,D,E are present. Edges AC and BD cross with no vertex at the crossing; E is isolated." style="max-width:100%;height:auto"><line x1="100" y1="50" x2="380" y2="230" stroke="currentColor" stroke-width="2"/><line x1="380" y1="50" x2="100" y2="230" stroke="currentColor" stroke-width="2"/><circle cx="100" cy="50" r="3" fill="currentColor"/><text x="107" y="42" fill="currentColor" font-size="16">A</text><circle cx="380" cy="50" r="3" fill="currentColor"/><text x="387" y="42" fill="currentColor" font-size="16">B</text><circle cx="380" cy="230" r="3" fill="currentColor"/><text x="387" y="222" fill="currentColor" font-size="16">C</text><circle cx="100" cy="230" r="3" fill="currentColor"/><text x="107" y="222" fill="currentColor" font-size="16">D</text><circle cx="240" cy="280" r="3" fill="currentColor"/><text x="247" y="272" fill="currentColor" font-size="16">E</text></svg><figcaption>Schematic, not drawn to scale. A crossing without a marked vertex does not create adjacency.</figcaption></figure>

```answer
{"answer":{"kind":"set","expected":"{C}","checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

The declared vertex set and edges determine adjacency.

</details>

<details>
<summary>Hint 2</summary>

An unmarked crossing does not join the two edges.

</details>

<details>
<summary>Worked solution</summary>

Topological incidence is supplied explicitly and is not inferred from a drawing crossing.

1. The only listed edge incident to A is AC.
2. The crossing with BD creates no extra vertex or route, and E has no edges.
3. The neighbor set of A is $\{C\}$.

</details>
