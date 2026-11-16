# Characterize compact sets across disjoint open components

*Medium · [Topology problems](index.md)*

For a topological disjoint sum $X=\coprod_{i\in I}X_i$, prove $K\subset X$ is compact iff it meets only finitely many summands and each $K\cap X_i$ is compact in $X_i$. No Hausdorff assumption is allowed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The summands form an open cover and are also closed.

</details>

<details>
<summary>Hint 2</summary>

For the converse reduce to a finite union of compact subsets after passing each cover to a summand.

</details>

<details>
<summary>Model proof</summary>

Both finite support and compact pieces are necessary.

1. If K is compact, its cover by open summands has a finite subcover, so only finitely many intersections can be nonempty.
2. Every summand is closed as well as open. Thus $K\cap X_i$ is closed in K and compact, without any Hausdorff assumption. Its subspace topology is the same as the one inherited from $X_i$.
3. Conversely finitely many nonempty compact intersections each admit a finite subcover from any open cover of K. Combining those finitely many finite choices covers K, proving compactness.

**Self-assessment rubric**

- Use the summand open cover to force finite support.
- Use closedness of each summand and match subspace topologies without adding separation.
- Construct a finite subcover from the finitely many compact pieces.

</details>
