# Prove the finite DAG order criterion

*Hard · [Discrete mathematics](index.md)*

Prove that a finite directed graph $G$ has a vertex order with every arrow pointing forward if and only if it has no directed cycle.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A directed cycle cannot strictly advance in a finite linear order and return.

</details>

<details>
<summary>Hint 2</summary>

For the converse remove an indegree-zero vertex and use induction on the number of vertices.

</details>

<details>
<summary>Model proof</summary>

Order monotonicity proves one direction, and a source-removal induction constructs the other.

1. If an order exists, following a directed cycle would strictly increase positions and return to the same position, impossible.
2. For the converse, the empty graph has its empty order. A nonempty finite acyclic graph has an indegree-zero vertex: otherwise repeatedly following predecessors would repeat a vertex and make a cycle.
3. Remove such a vertex. The remaining graph is acyclic, so by induction it has a forward order. Prepending the removed vertex preserves all arrow directions because no arrow enters it.
4. This constructs the required order and proves both directions.

**Self-assessment rubric**

- Explain why a directed cycle contradicts strictly increasing positions.
- Supply the empty base case and justify an indegree-zero vertex.
- Remove a source, order the smaller graph and check the prepending step.

</details>
