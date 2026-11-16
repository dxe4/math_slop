# Determine the next asymmetric Ramsey threshold

*Hard · [Original olympiad-style problems](index.md)*

Find and prove the least $n$ such that every red-blue coloring of the edges of a complete $n$-vertex graph contains a red triangle or a blue four-vertex complete graph. Give an explicit coloring just below the threshold.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

At nine vertices, a red degree at least four immediately gives a target; otherwise parity yields a vertex of red degree at most two.

</details>

<details>
<summary>Hint 2</summary>

For an eight-vertex lower example, color red the cycle edges and opposite pairs of a labeled eight-cycle.

</details>

<details>
<summary>Model proof</summary>

Combine degree parity with a six-vertex lemma and an explicit obstruction.

1. The answer is nine. First recall that any coloring on six vertices has a monochromatic triangle: one vertex has three incident edges of one color; among their endpoints either an edge has that color or all three opposite-color edges form a triangle.
2. Now consider nine vertices with no red triangle. If some red degree is at least four, its four red neighbors have all their connecting edges blue, a blue four-clique.
3. Otherwise every red degree is at most three. They cannot all be three because the degree sum on nine vertices would be odd, so choose a vertex with red degree at most two.
4. At least six other vertices are blue-adjacent to it. The six-vertex lemma gives either a forbidden red triangle or a blue triangle, which together with the chosen vertex is a blue four-clique.
5. For eight labels modulo eight, make red edges join differences one, seven and four; all other edges are blue. There is no red triangle: a cycle edge and one opposite matching edge cannot complete one, and two matching edges cannot share a triangle.
6. A blue four-clique would be a red-independent four-set. In the eight-cycle alone, the only independent four-sets alternate parity, and each contains an opposite red pair. Thus no blue four-clique exists. This proves both bounds and the exact threshold.

**Self-assessment rubric**

- Prove the smaller monochromatic-triangle input.
- Handle high degree and parity-forced low degree correctly.
- Specify every edge color of the eight-vertex model.
- Exclude both target subgraphs in that model.

</details>
