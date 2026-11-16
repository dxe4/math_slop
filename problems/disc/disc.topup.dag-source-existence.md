# Prove a finite DAG has a source

*Medium · [Discrete mathematics](index.md)*

Prove that every nonempty finite directed graph with no directed cycle has a vertex of indegree $0$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Assume every vertex has an incoming arrow.

</details>

<details>
<summary>Hint 2</summary>

Follow predecessors repeatedly and use finiteness to find a repeated vertex.

</details>

<details>
<summary>Model proof</summary>

An endless predecessor chain in a finite graph forces a directed cycle.

1. Suppose every vertex has positive indegree and start at any vertex v\_0.
2. Choose predecessors with arrows $v_{j+1}\to v_j$ forever. Since the graph has finitely many vertices, a vertex repeats.
3. The arrows between a first repeated pair give a directed cycle, contrary to the hypothesis. Hence some vertex has indegree zero.

**Self-assessment rubric**

- Assume positive indegree at every vertex under the contradictory hypothesis.
- Construct the predecessor chain and use finiteness.
- Check the arrow direction yields the forbidden directed cycle.

</details>
