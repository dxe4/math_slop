# Multiply independent spanning-tree choices at a cut vertex

*Easy · [Computational arithmetic problems](index.md)*

A cycle $C_4$ and a cycle $C_5$ share exactly one vertex and no edges, with no other graph edges. A spanning tree restricts to a spanning tree on each block. Find the total count.

```answer
{"answer":{"kind":"integer","expected":"20","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Each cycle must lose one edge.

</details>

<details>
<summary>Hint 2</summary>

The shared cut vertex joins the two resulting trees without another choice.

</details>

<details>
<summary>Worked solution</summary>

A one-vertex gluing makes the two block choices independent.

1. The four-cycle has four ways to delete one edge, and the five-cycle has five.
2. A choice in each block yields a connected acyclic graph on all vertices because the blocks meet only at one vertex.
3. The product is twenty spanning trees.

</details>
