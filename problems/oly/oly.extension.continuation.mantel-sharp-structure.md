# Prove the sharp triangle-free edge bound and structure

*Hard · [Original olympiad-style problems](index.md)*

Prove a triangle-free simple graph on n vertices has at most $\lfloor n^2/4\rfloor$ edges. For $n\ge2$, prove equality holds exactly for a complete bipartite graph with class sizes differing by at most one.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Choose a vertex of maximum degree Delta; its neighbors form an independent set A.

</details>

<details>
<summary>Hint 2</summary>

Count edges using degree sum of the complementary vertex set B, subtracting its internal edges.

</details>

<details>
<summary>Model proof</summary>

Use maximum degree to obtain both the bound and its equality structure.

1. Let A be the neighborhood of a maximum-degree vertex, with size Delta. Triangle-freeness makes A independent. Write B for its complement, of size n minus Delta.
2. If m is the total edge count and e(B) the internal B count, then $m=\sum_{v\in B}d(v)-e(B)\le\Delta(n-\Delta)$.
3. The integer quadratic product is at most the floor of n squared divided by four, giving the bound.
4. Equality requires e(B) zero and every B vertex degree Delta. Because A is independent, this means all possible A-B edges occur and no others. Equality in the product also requires the two sizes differ by at most one.
5. Conversely that balanced complete bipartite graph is triangle-free and has exactly the bound. The edgeless small cases obey the inequality, and n at least two makes the equality description nonempty.

**Self-assessment rubric**

- Use triangle-freeness to obtain an independent neighborhood.
- Derive the exact degree-sum-minus-internal-edges bound.
- Obtain the floor and its balancing condition.
- Prove both necessity and sufficiency of the complete bipartite equality graphs.

</details>
