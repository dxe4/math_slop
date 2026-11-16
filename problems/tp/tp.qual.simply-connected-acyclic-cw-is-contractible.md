# Prove a simply connected acyclic CW complex is contractible

*Hard · [Topology problems](index.md)*

Let X be a connected simply connected CW complex with $\widetilde H_k(X;\mathbb Z)=0$ for every k. Prove X is contractible. You may use Hurewicz for the first nonzero homotopy group and Whitehead’s theorem. Explain why the CW and simple-connectedness hypotheses cannot just be dropped from the argument.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

If any homotopy group is nonzero, take the least positive degree in which this happens.

</details>

<details>
<summary>Hint 2</summary>

Hurewicz contradicts acyclicity; then compare X with a point using Whitehead.

</details>

<details>
<summary>Model proof</summary>

Acyclicity only forces contraction after homotopy obstructions are ruled out and weak equivalence is upgraded in the CW category.

1. By hypothesis π₁(X)=0. If there is a nonzero higher homotopy group, let n≥2 be its least degree. Then X is (n−1)-connected. Hurewicz identifies π\_n(X) with H\_n(X;Z), which is zero, a contradiction.
2. Therefore every positive homotopy group of X is zero. The map X→point induces an isomorphism on π₀ and every based homotopy group, so it is a weak homotopy equivalence.
3. Whitehead’s theorem applies because both spaces are CW complexes and upgrades this map to a homotopy equivalence. A homotopy inverse chooses a point of X, and the resulting identity-to-constant homotopy is a contraction.
4. The simple-connectedness assumption prevents a nontrivial perfect fundamental group from escaping the first-nonzero-group Hurewicz argument. The CW assumption is used in Whitehead’s theorem; a weakly contractible arbitrary space need not be contractible. Neither step follows from homology alone.

**Self-assessment rubric**

- Uses a least nonzero higher homotopy degree and the corresponding Hurewicz connectivity hypothesis.
- Concludes vanishing of all homotopy groups and obtains a weak equivalence with a point.
- Applies Whitehead in the CW category and translates homotopy equivalence into a contraction.
- Identifies the distinct roles of simple connectedness and the CW hypothesis.

</details>
