# Prove the converse edge-count characterization

*Hard · [Discrete mathematics](index.md)*

Prove that a connected finite simple graph on n vertices with exactly $n-1$ edges is a tree.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

One can build a connected spanning subgraph by adjoining one new vertex and one joining edge at each stage.

</details>

<details>
<summary>Hint 2</summary>

That construction already needs n-1 edges; compare it with the edge count of the whole graph.

</details>

<details>
<summary>Model proof</summary>

A spanning-tree construction exhausts all available edges.

1. For n=1, connectedness and zero edges give the one-vertex tree.
2. For n&gt;1, start at one vertex. Until every vertex has been included, connectedness supplies an edge from the included set to an excluded vertex. Add that vertex and that one edge.
3. This constructs a connected acyclic spanning subgraph with n-1 edges: each new edge attaches a new vertex and cannot create a cycle.
4. The whole graph also has only n-1 edges, so it has no additional edges. It is this tree.

**Self-assessment rubric**

- Construct a spanning connected acyclic subgraph using connectedness.
- Count exactly one edge for each newly included vertex.
- Use the total edge count to rule out extra cycle edges.

</details>
