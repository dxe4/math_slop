# Prove the compact Hausdorff closed-relation quotient theorem and its limitation

*Hard · [Topology problems](index.md)*

For compact Hausdorff $X$ and an equivalence relation $R\subset X\times X$ closed in the product, prove $X/R$ is Hausdorff. Then show compactness cannot simply be omitted: use the real K-topology with basis ordinary open intervals and their differences with $K=\{1/n:n\ge1\}$, collapsing K to one point. Verify the relation is closed but the quotient is not Hausdorff.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For compact X, show the quotient map is closed by projecting a compact subset of X×X.

</details>

<details>
<summary>Hint 2</summary>

In the K-topology, K is closed but cannot be separated from 0 by disjoint open neighborhoods.

</details>

<details>
<summary>Model proof</summary>

Compactness controls saturation of closed sets; a closed relation alone need not do so.

1. Let q:X→Y be the quotient. For closed F⊂X, the set R∩(X×F) is compact, and its projection to the first factor is q⁻¹(q(F)). This projection is compact and therefore closed in Hausdorff X. By the quotient definition, q(F) is closed in Y. Every equivalence class is closed and compact as a section of R.
2. Distinct fibers A and B are disjoint compact closed subsets of compact Hausdorff X, which is normal. Choose disjoint open U,V with A⊂U and B⊂V. The sets Y∖q(X∖U) and Y∖q(X∖V) are open by closedness of q, contain the respective classes, and have preimages contained in U,V. They are disjoint. Thus Y is Hausdorff.
3. For the proposed noncompact X, its topology is finer than the usual real topology, so it is Hausdorff. K is closed: its complement is a union of the allowed interval-difference basic sets. Hence Δ\_X and K×K are closed, and the collapse relation Δ\_X∪(K×K) is closed.
4. Any neighborhood of 0 contains (−ε,ε)∖K. Any open set containing K contains an ordinary interval about a sufficiently small 1/n, since a basic set of the deleted-K form cannot contain that point. That interval contains a non-K point in (−ε,ε). Thus no disjoint open neighborhoods separate 0 from K. Disjoint neighborhoods of their quotient points would pull back to such neighborhoods, so the quotient is not Hausdorff.

**Self-assessment rubric**

- Uses compact projection and the quotient definition to prove q is closed.
- Constructs quotient neighborhoods by removing images of closed complements.
- Verifies both Hausdorffness of the K-topology and closedness of the collapse relation.
- Proves 0 and K have no disjoint open neighborhoods and transfers the obstruction to the quotient.

</details>
