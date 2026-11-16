# Two connected spaces have a connected product

*Hard · [Topology problems](index.md)*

Let $X,Y$ be nonempty connected topological spaces. Prove that $X\times Y$, with the product topology, is connected.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Fix a horizontal slice, then attach vertical slices meeting it.

</details>

<details>
<summary>Hint 2</summary>

A union of connected sets that all meet one connected set cannot be separated; justify this fact as part of your argument.

</details>

<details>
<summary>Model proof</summary>

Connected slices attach every product point to a common connected core.

1. Choose $y_0\in Y$. The horizontal slice $H=X\times\{y_0\}$ is homeomorphic to $X$ and hence connected.
2. For each $x\in X$, the vertical slice $V_x=\{x\}\times Y$ is homeomorphic to $Y$, hence connected, and meets $H$ at $(x,y_0)$.
3. To justify the union principle, suppose a union of connected sets has a separation. Each connected subset must lie entirely on one side, since restricting the separation would otherwise separate it.
4. The connected core lies on one side; every attached set meets the core and must lie on that same side. Thus the other side is empty, contrary to a separation.
5. Applying this principle to $H$ and all the $V_x$ proves that their union, which is $X\times Y$, is connected.

**Self-assessment rubric**

- Identify connected horizontal and vertical slices using their homeomorphisms.
- Show each vertical slice intersects the chosen horizontal core.
- Justify why a putative separation cannot split that union.
- Establish that the slices cover every product point.

</details>
