# Mantel's theorem with both bounds

*Difficulty 4 of 5 · [Discrete mathematics: structure, counting, extremal reasoning, and matroids](index.md) · exercise 11 of 15*

Prove that a triangle-free simple graph on n vertices has at most floor(n^2/4) edges using degree sums and Cauchy's inequality, and give a construction meeting the bound.

<details>
<summary>Hint 1</summary>

For every edge uv, triangle-freeness gives deg(u)+deg(v)≤n

</details>

<details>
<summary>Hint 2</summary>

Sum over edges, then compare Σdeg(v)^2 with (Σdeg(v))^2/n

</details>

<details>
<summary>Worked solution</summary>

Let m be the edge count. For an edge uv, u and v have no common neighbor, so deg(u)+deg(v)≤n. Summing over edges counts deg(v) once for each incident edge, giving Σ_vdeg(v)^2≤nm. Cauchy gives Σ_vdeg(v)^2≥(Σ_vdeg(v))^2/n=(2m)^2/n. For m>0, combine to obtain 4m^2/n≤nm and hence m≤n^2/4; integrality gives floor(n^2/4). The case m=0 is immediate. The complete bipartite graph with parts floor(n/2),ceil(n/2) is triangle-free and has their product floor(n^2/4), proving sharpness.

**Answer.** m≤floor(n^2/4), attained by the balanced complete bipartite graph.

</details>

*Tags: extremal-combinatorics, mantel, proof*
