# Construct a two-coloring by removing a leaf

*Medium · [Discrete mathematics](index.md)*

Prove that every finite tree $T$ admits a red-blue vertex coloring in which every edge joins different colors.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use a leaf and reduce the number of vertices.

</details>

<details>
<summary>Hint 2</summary>

When returning the removed leaf, only its one neighbor constrains its color.

</details>

<details>
<summary>Model proof</summary>

A leaf-extension induction constructs the coloring.

1. A one-vertex tree can be colored red. A finite tree with more than one vertex has a leaf, for example an endpoint of a longest simple path.
2. Remove that leaf; the remaining graph is still a tree. By induction it has a proper two-coloring.
3. Restore the leaf with the color opposite its unique neighbor. Its only edge is now properly colored, and no old edge changes.

**Self-assessment rubric**

- Give a base case and justify a leaf exists.
- Explain why removing the leaf permits the induction hypothesis.
- Choose the new color and check every affected edge.

</details>
