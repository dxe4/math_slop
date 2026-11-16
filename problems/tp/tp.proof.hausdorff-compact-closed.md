# A compact subset of a Hausdorff space is closed

*Hard · [Topology problems](index.md)*

If $X$ is Hausdorff and $K\subseteq X$ is compact in its subspace topology, prove that $K$ is closed in $X$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

For a point outside the compact set, separate it from each point of the set.

</details>

<details>
<summary>Hint 2</summary>

Use a finite cover of the compact set to turn the many neighborhoods of the outside point into one open intersection.

</details>

<details>
<summary>Model proof</summary>

Compactness turns pointwise Hausdorff separation into separation from the whole set.

1. If $K=\varnothing$, it is closed. Otherwise fix $x\in X\setminus K$.
2. For each $k\in K$, the Hausdorff property gives disjoint open neighborhoods $U_k$ of $k$ and $V_k$ of $x$.
3. The sets $U_k$ cover $K$. Select a finite subcover $U_{k_1},\ldots,U_{k_m}$ using compactness.
4. The finite intersection $V=\bigcap_{j=1}^m V_{k_j}$ is an open neighborhood of $x$ and misses each $U_{k_j}$, so it misses $K$.
5. Every point outside $K$ has an open neighborhood outside $K$. Thus its complement is open and $K$ is closed.

**Self-assessment rubric**

- Fix an arbitrary point outside the set and handle the empty-set case.
- Use Hausdorff separation at each compact-set point.
- Choose finitely many neighborhoods covering the compact set.
- Form the finite intersection and prove it avoids the entire compact set.

</details>
