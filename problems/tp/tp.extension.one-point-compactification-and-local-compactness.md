# Prove the one-point compactification theorem and its converse

*Hard · [Topology problems](index.md)*

Let X be noncompact, locally compact and Hausdorff. Define $X^*=X\cup\{\infty\}$ by keeping the open subsets of X and taking neighborhoods of infinity to include complements of compact closed subsets of X. Prove this is a compact Hausdorff space with X open dense. Conversely, prove that if a noncompact Hausdorff X is an open dense subspace of a compact Hausdorff space with exactly one extra point, then X is locally compact.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Check intersections of neighborhoods at infinity by taking finite unions of compact sets.

</details>

<details>
<summary>Hint 2</summary>

Separate a point from infinity by a neighborhood having compact closure; for the converse shrink a neighborhood in the compact Hausdorff ambient space.

</details>

<details>
<summary>Model proof</summary>

The neighborhoods of the added point encode precisely the compact sets that may be left behind.

1. Define the opens containing infinity to be X\*∖K with K compact closed in X, together with unions with ordinary opens of X; equivalently an infinity-containing set is open exactly when its complement is compact closed in X. Finite intersections correspond to finite unions of such compact sets. Arbitrary unions containing one infinity-neighborhood have complements closed in X and contained in its compact complement, hence compact. Intersections with opens of X are open because compact subsets are closed in Hausdorff X. Thus these sets define a topology.
2. Given an open cover of X\*, one member containing infinity leaves a compact subset K⊂X. Finitely many other members cover K, so X\* is compact. Two old points separate in Hausdorff X. For x∈X, local compactness and Hausdorffness give an open U containing x with compact closure K; then U and X\*∖K separate x and infinity. Thus X\* is Hausdorff.
3. X is open by definition. Any neighborhood of infinity misses only a compact subset of X; it cannot miss all X because X is noncompact. Therefore every infinity-neighborhood meets X, so X is dense.
4. Conversely, call the ambient compact Hausdorff space Y and its extra point infinity. Compact Hausdorff spaces are regular. For x∈X=Y∖{infinity}, choose an open neighborhood U in Y with x∈U and closure\_Y(U)⊂X. Its closure is compact in Y and hence compact in X. This is a relatively compact neighborhood of x and proves local compactness.

**Self-assessment rubric**

- Checks unions and intersections, using closed subsets of a compact set where needed.
- Obtains a finite subcover and separates an old point from infinity using compact closure.
- Uses noncompactness to show infinity is adherent to X.
- Uses regularity of the compact Hausdorff ambient space to build compact neighborhoods in X.

</details>
