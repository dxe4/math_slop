# Use the bipartite planar bound rather than the triangular one

*Easy · [Computational arithmetic problems](index.md)*

A simple bipartite planar graph has $20$ vertices. Use the sharp bound E&lt;=2V-4 to give its maximum possible edge count.

```answer
{"answer":{"kind":"integer","expected":"36","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The absence of odd cycles strengthens the general planar edge bound.

</details>

<details>
<summary>Hint 2</summary>

The question asks for the sharp allowed maximum, not the unknown edge count of an arbitrary graph.

</details>

<details>
<summary>Worked solution</summary>

The bipartite hypothesis selects the appropriate planar inequality.

1. The supplied bound gives E&lt;=2 times 20 minus four, or thirty-six.
2. It is attainable by the planar complete bipartite graph K\_(2,18), which has twenty vertices and thirty-six edges.
3. Thus the maximum possible count is thirty-six.

</details>
