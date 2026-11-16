# Prove the Baire property for compact Hausdorff spaces

*Hard · [Topology problems](index.md)*

Let X be a nonempty compact Hausdorff space, with no metrizability assumption. Prove that for every sequence $G_1,G_2,\ldots$ of dense open subsets, their intersection is dense. You may use regularity of compact Hausdorff spaces and the finite-intersection characterization of compactness.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Start inside an arbitrary nonempty open U\_0 and repeatedly shrink a nonempty open subset of U\_{n−1}∩G\_n so its closure stays inside.

</details>

<details>
<summary>Hint 2</summary>

The nested nonempty compact closures have a common point. Check that this point belongs to every G\_n and to the original U\_0.

</details>

<details>
<summary>Model proof</summary>

Compact nested closures replace the shrinking-diameter argument used in complete metric spaces.

1. Fix any nonempty open U\_0. Since G\_1 is dense and open, U\_0∩G\_1 is nonempty open. By regularity choose a nonempty open U\_1 with closure(U\_1)⊂U\_0∩G\_1.
2. Inductively, U\_{n−1}∩G\_n is nonempty open, and regularity gives nonempty open U\_n whose closure is contained in that intersection. The sets K\_n=closure(U\_n) are nonempty compact and satisfy K\_{n+1}⊂K\_n.
3. Any finite collection of the K\_n intersects in the member with largest index. Compactness of X and the finite-intersection property yield x∈∩K\_n.
4. Because K\_1⊂U\_0 and K\_n⊂G\_n for every n, this point lies in U\_0∩∩G\_n. Every nonempty open U\_0 therefore meets the intersection, proving density without a metric or countable base.

**Self-assessment rubric**

- Constructs nonempty open U\_n with closure inside U\_{n−1}∩G\_n using regularity.
- Uses the finite-intersection property of nested nonempty compact closures.
- Checks membership in the starting open set and every G\_n, then concludes density.

</details>
