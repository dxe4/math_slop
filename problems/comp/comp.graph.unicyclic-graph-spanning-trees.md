# Force bridges and delete one cycle edge

*Easy · [Computational arithmetic problems](index.md)*

A connected simple graph has exactly one cycle, of length $7$, with arbitrary trees attached to its cycle vertices. A spanning tree must retain every bridge and delete exactly one cycle edge. Find its number of spanning trees.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Attached tree edges cannot be removed without disconnecting a vertex.

</details>

<details>
<summary>Hint 2</summary>

The only choice occurs among the cycle edges.

</details>

<details>
<summary>Worked solution</summary>

A unique cycle is broken in exactly one place while all attached branches remain.

1. Every edge outside the unique cycle is a bridge and is forced into a spanning tree.
2. Deleting any one of the seven cycle edges connects all vertices without a cycle.
3. Different deleted cycle edges give different spanning trees, so the count is seven.

</details>
