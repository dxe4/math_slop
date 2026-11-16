# Count two-colorings of all components

*Hard · [Discrete mathematics](index.md)*

Prove that a finite bipartite graph with c connected components has exactly $2^c$ proper colorings with two named colors, counting isolated vertices as components.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Within a connected component, fixing one vertex color forces all the others.

</details>

<details>
<summary>Hint 2</summary>

A known bipartition guarantees both choices extend, and components can be colored independently.

</details>

<details>
<summary>Model proof</summary>

Each component contributes one independent binary choice.

1. For the empty graph c=0 and there is exactly one empty coloring, agreeing with 2^0.
2. In any nonempty connected bipartite component, take one proper coloring. Flipping all colors gives another. Any proper coloring agreeing at one vertex must agree along every path, hence everywhere in that component.
3. Thus each component has exactly two choices, including an isolated vertex. Independent choices across c components give $2^c$.

**Self-assessment rubric**

- Show one vertex color determines its connected component.
- Use bipartiteness to obtain both complementary colorings.
- Handle isolated/empty cases and multiply independent choices.

</details>
