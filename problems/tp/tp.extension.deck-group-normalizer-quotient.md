# Derive the normalizer description of an intermediate deck group

*Hard · [Topology problems](index.md)*

Let X be connected, locally path connected and semilocally simply connected, and let its universal cover have left deck group G. For a subgroup H≤G form $E=H\backslash\widetilde X$. Prove $\operatorname{Deck}(E/X)\cong N_G(H)/H$. State the left-action convention and explain why a deck map of E lifts to the universal cover.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

A normalizing element acts on H-orbits by \[x\]↦\[gx\].

</details>

<details>
<summary>Hint 2</summary>

Lift a deck map composed with the universal projection; compare conjugation of the H-action and use the inverse lift to get equality of subgroups.

</details>

<details>
<summary>Model proof</summary>

Automorphisms downstairs are precisely universal-cover transformations that preserve the intermediate orbit relation.

1. Use the given left action, so transformations multiply by composition: g followed after h is gh. For g∈N\_G(H), the rule T\_g(\[x\])=\[gx\] is well defined because g h x=(g h g⁻¹)g x with g h g⁻¹∈H. It is a homeomorphism over X and T\_gT\_k=T\_{gk}.
2. Its kernel is H. Certainly H acts trivially on H-orbits. Conversely if T\_g is the identity, then for one x, gx=hx for some h∈H. A universal deck transformation fixing a point is the identity by path-lift uniqueness, so g=h.
3. Let T be any deck transformation of E. If r: X̃→E is the intermediate covering, the map T∘r lifts through r because X̃ is simply connected. Call the lift g. It lies over X; lifting T⁻¹ and adjusting its starting point produces an inverse, so g is a universal deck transformation.
4. For h∈H, r∘g∘h=T∘r∘h=T∘r=r∘g. Therefore ghg⁻¹ is a deck transformation of r and belongs to H. Applying the same argument to the inverse gives gHg⁻¹=H. Thus g normalizes H and T=T\_g, proving surjectivity and the quotient formula.

**Self-assessment rubric**

- Checks the left-action formula is well defined and multiplicative.
- Uses freeness of the universal deck action to identify the kernel exactly as H.
- Explains existence and invertibility of a universal lift of an intermediate deck map.
- Proves normalization in both directions and surjectivity of the resulting homomorphism.

</details>
