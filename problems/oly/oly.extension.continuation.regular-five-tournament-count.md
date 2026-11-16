# Enumerate a regular tournament through forced cross edges

*Hard · [Original olympiad-style problems](index.md)*

How many tournaments on $5$ labeled vertices have outdegree $2$ at every vertex?

```answer
{"answer":{"kind":"integer","expected":"24","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Fix one vertex and choose its two outneighbors A; the other two vertices form B.

</details>

<details>
<summary>Hint 2</summary>

Choose the orientations within A and within B, then use the required degrees to force all four cross edges.

</details>

<details>
<summary>Worked solution</summary>

Use a local orientation choice whose degree constraints determine the rest.

1. The chosen vertex has $\binom42=6$ possible outneighbor pairs. There are two choices for the edge inside each of A and B.
2. Write the A edge as $a_1\to a_2$ and B edge as $b_1\to b_2$. Both A vertices lose to the chosen vertex; both B vertices beat it.
3. Vertex $a_2$ must beat both B vertices to reach degree two. Vertex $b_1$ already has its two wins, so loses to both A vertices. This forces $a_1\to b_1$ and $b_2\to a_1$.
4. All required degrees are now satisfied, and every cross edge is determined uniquely. The total is $6\cdot2\cdot2=24$.

</details>
