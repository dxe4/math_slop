# Find and prove the first forced monochromatic triangle size

*Hard · [Original olympiad-style problems](index.md)*

What is the least n such that every red-blue coloring of all edges of $K_n$ contains a monochromatic triangle? Give both a forcing argument and a smaller avoiding construction.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested finite count or sharp bound only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

At a chosen vertex, many incident edges must share a color.

</details>

<details>
<summary>Hint 2</summary>

For a lower construction, let each color class be a five-cycle.

</details>

<details>
<summary>Worked solution</summary>

A local same-color neighborhood forces a triangle once the smaller avoiding coloring is excluded.

1. In K6, one vertex has at least three incident edges of the same color, say red, leading to vertices a,b,c. If any edge among them is red, it closes a red triangle with the first vertex; otherwise all three form a blue triangle.
2. On five vertices, color the edges of a five-cycle red and all other edges blue. The blue graph is also a five-cycle, so neither color has a triangle.
3. Thus six is sufficient and five is not, giving the least n=6.

</details>
