# Traverse a four-cycle once

*Medium · [Discrete mathematics](index.md)*

An undirected simple graph has vertices $1,2,3,4$ and edges $\{1,2\},\{2,3\},\{3,4\},\{4,1\}$. Give a vertex sequence starting and ending at $1$ that uses every edge exactly once.

```answer
{"answer":{"kind":"euler_trail","expected_constraints":{"edges":[["1","2"],["2","3"],["3","4"],["4","1"]],"start":"1","end":"1","directed":false},"checker_scope":"Checks only this authored construct-euler-circuit task. Does not certify unrestricted proof validity, general construction ability or full mastery of euler trails and circuits."}}
```

<details>
<summary>Hint 1</summary>

Four edges require five entries in the sequence.

</details>

<details>
<summary>Hint 2</summary>

Follow the cycle back to $1$.

</details>

<details>
<summary>Worked solution</summary>

Euler trails use each edge once and may revisit vertices. Explicit graph conventions and connectedness of the edge-containing part matter.

1. One route is $1,2,3,4,1$.
2. Its consecutive edges are exactly the four supplied edges, once each; the reverse also works.

</details>
