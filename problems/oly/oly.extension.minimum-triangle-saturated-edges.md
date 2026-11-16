# Use saturation to force connectivity and then construct the optimum

*Hard · [Original olympiad-style problems](index.md)*

A simple graph on $8$ vertices contains no triangle, but adding any missing edge creates a triangle. What is the minimum possible number of its edges?

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Exact requested finite count or sharp bound only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

A missing edge between different components cannot acquire a common-neighbor triangle.

</details>

<details>
<summary>Hint 2</summary>

Check whether a star satisfies both the forbidden-subgraph and saturation conditions.

</details>

<details>
<summary>Worked solution</summary>

Saturation forces a connectivity lower bound attained by a very sparse graph.

1. Such a graph must be connected: otherwise adding an edge between two components creates no triangle, since its endpoints have no common neighbor.
2. A connected eight-vertex graph has at least seven edges.
3. The star K\_(1,7) has seven edges and no triangle, while every missing leaf-to-leaf edge creates a triangle with its center. Thus seven is attainable and minimal.

</details>
