# Separate even degrees from connectedness

*Hard · [Discrete mathematics](index.md)*

Two disjoint triangles have vertices $A,B,C$ and $D,E,F$. Explain why the graph has no Euler circuit despite every degree being even. Then add two parallel AD edges and give an Euler circuit for the repaired multigraph.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A single route cannot jump between edge-containing components.

</details>

<details>
<summary>Hint 2</summary>

The added parallel edges allow travel from one triangle to the other and back without repeating an edge occurrence.

</details>

<details>
<summary>Model proof</summary>

Connectedness is a separate Euler requirement, and two new incidences preserve even degrees.

1. The original triangles are different nonempty components. No route can traverse edges in both, so there is no Euler circuit.
2. Adding two distinct AD edges joins the components and raises the degrees of A and D from two to four; all other degrees remain two.
3. An explicit repaired circuit is A,B,C,A,D,E,F,D,A. Its last and fourth transitions use the two different AD occurrences, and each triangle edge occurs once.

**Self-assessment rubric**

- Explain why even degrees alone do not join disconnected edge sets.
- Track both new edge occurrences and the changed degrees.
- Give and check one closed route using every repaired edge occurrence once.

</details>
