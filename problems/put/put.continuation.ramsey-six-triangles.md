# Ramsey six triangles

*Hard · [Original Putnam-style training](index.md)*

Prove every red/blue coloring of the edges of $K_6$ contains a monochromatic triangle, and give a coloring of $K_5$ with none.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

At one vertex of $K_6$, at least three incident edges share a color.

</details>

<details>
<summary>Hint 2</summary>

For $K_5$, color a five-cycle one color and its complement the other.

</details>

<details>
<summary>Model proof</summary>

For $K_5$, color the edges of a cycle $C_5$ red and all remaining edges blue. Both the cycle and its complement are triangle-free five-cycles, so no monochromatic triangle appears.

1. At a chosen vertex of $K_6$, pigeonhole gives three neighbors connected to it by edges of one color, say red.
2. If any edge among those three neighbors is red, it forms a red triangle with the chosen vertex. If none is red, all three mutual edges are blue and form a blue triangle.
3. For $K_5$, color the edges of a cycle $C_5$ red and all remaining edges blue. Both the cycle and its complement are triangle-free five-cycles, so no monochromatic triangle appears.

**Self-assessment rubric**

- Use degree-five pigeonhole at one vertex.
- Handle edge color among the three neighbors to force a triangle.
- Give the five-cycle/complement coloring and show both colors triangle-free.

</details>
