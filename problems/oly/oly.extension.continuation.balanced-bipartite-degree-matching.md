# Use Hall at a half-degree threshold

*Medium · [Original olympiad-style problems](index.md)*

A bipartite graph has n vertices in each class and every degree at least $\lceil n/2\rceil$. Using Hall’s criterion, prove it has a perfect matching.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

For a subset of the left class no larger than the degree threshold, one vertex already supplies enough neighbors.

</details>

<details>
<summary>Hint 2</summary>

For a larger subset failing Hall, any right vertex outside its neighborhood would have too few possible neighbors.

</details>

<details>
<summary>Model proof</summary>

Check small and large Hall subsets separately.

1. Let $d=\lceil n/2\rceil$. A nonempty left subset S with size at most d has at least d neighbors, by any member’s degree.
2. If S has size greater than d and had fewer neighbors than its size, some right vertex would lie outside its neighborhood. Its possible neighbors would all be among the $n-|S|$ remaining left vertices.
3. That number is less than d, contradicting its minimum degree. Thus every left subset satisfies Hall, including the empty one.
4. Hall gives a matching covering the full left class, and equal class sizes make it perfect.

**Self-assessment rubric**

- Verify Hall in the small-size case.
- Use an excluded right vertex to contradict the degree bound.
- Apply the supplied criterion with equal finite class sizes.

</details>
