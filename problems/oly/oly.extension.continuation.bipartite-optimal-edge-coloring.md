# Color all edges with the degree lower bound

*Hard · [Original olympiad-style problems](index.md)*

Prove every finite bipartite graph of maximum degree $\Delta$ has a proper edge coloring with $\Delta$ colors. Include the empty-edge case and justify the matching input used in your proof.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Pad both classes and add temporary edges, allowing parallel temporary edges, to make a Delta-regular balanced bipartite graph.

</details>

<details>
<summary>Hint 2</summary>

Regularity verifies Hall by edge counting; remove perfect matchings repeatedly.

</details>

<details>
<summary>Model proof</summary>

Regularize the graph and decompose it into exact matching layers.

1. If Delta is zero, no colors are needed. Otherwise pad with isolated vertices until both classes have the same size. The total degree deficits to Delta are equal on both sides; pair deficient vertices across classes and add temporary edges until every degree is Delta, permitting temporary parallels.
2. For any left subset S, its Delta times size edges enter its neighbor set, whose total incident capacity is Delta times neighbor size. Thus Hall holds.
3. For completeness, Hall follows from a maximum-matching alternating-path argument: if a left vertex is unmatched and no augmenting path exists, the reachable left set has fewer matched reachable right vertices than its own size, contradicting Hall. Hence there is a perfect matching.
4. Remove that matching; the graph is now regular of one lower degree. Repeat until every edge belongs to one of Delta disjoint perfect matchings.
5. Color each layer differently and restrict to the original edges. Each layer is a matching, so incident original edges have different colors. A maximum-degree vertex needs Delta colors, proving optimality.

**Self-assessment rubric**

- Balance deficits without changing any original edge.
- Verify and justify the perfect-matching criterion.
- Decompose every regular degree level.
- Return to the original graph and prove the lower bound, including Delta zero.

</details>
