# Two planar bounds and a hypothesis

*Difficulty 3 of 5 · [Discrete mathematics: structure, counting, extremal reasoning, and matroids](index.md) · exercise 8 of 15*

A simple connected planar graph has 10 vertices. Give the general planar edge bound and the stronger bound if it is triangle-free. Explain why neither inequality alone proves that a graph attaining the numerical bound is planar.

<details>
<summary>Hint 1</summary>

Use m≤3n-6 and, with face length at least four, m≤2n-4

</details>

<details>
<summary>Hint 2</summary>

The inequalities are necessary conditions

</details>

<details>
<summary>Worked solution</summary>

For n=10, every simple connected planar graph satisfies m≤3(10)-6=24. If triangle-free, every face boundary has length at least four, yielding m≤2(10)-4=16. These are necessary consequences of a planar embedding and Euler's formula. A nonplanar graph may still have 24 or fewer edges, so satisfying either bound does not construct an embedding or eliminate other nonplanarity obstructions.

**Answer.** General bound 24; triangle-free bound 16; both are necessary, not sufficient.

</details>

*Tags: planarity, hypotheses, graph-theory*
