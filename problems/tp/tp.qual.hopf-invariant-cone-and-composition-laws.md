# Derive the Hopf invariant and its two composition laws

*Hard · [Topology problems](index.md)*

For f:S³→S² define its integral Hopf invariant by $x^2=H(f)y$ in the mapping cone, with x∈H² and y∈H⁴ fixed by sphere and cell orientations. Prove the standard Hopf map η:S³→CP¹=S² has H(η)=1 in compatible complex orientations. Then prove H(k∘f)=deg(k)²H(f) for k:S²→S² and H(f∘d)=deg(d)H(f) for d:S³→S³, using maps of mapping cones.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Identify CP² with CP¹ plus a four-cell whose boundary map is the Hopf quotient.

</details>

<details>
<summary>Hint 2</summary>

For postcomposition the cone map multiplies H² but fixes the top cell; for precomposition it fixes H² but multiplies the top cell.

</details>

<details>
<summary>Model proof</summary>

Naturality distinguishes the squared target-degree effect from the linear attaching-sphere-degree effect.

1. On the unit ball in C² the map (z₁,z₂)↦\[z₁:z₂:√(1−\|z₁\|²−\|z₂\|²)\] maps its interior homeomorphically to the affine cell of CP². On the boundary it is the Hopf map to the projective line at infinity. Hence CP² is the mapping cone of η. In its integral ring h² is the positively oriented top generator, so H(η)=1.
2. For postcomposition k of degree r, the diagram with identity on S³ and k on S² induces a map C\_f→C\_{k∘f}. It pulls the degree-two generator back to r x and the top generator back to y. Pulling back x\_target²=H(k∘f)y\_target gives r²H(f)y=H(k∘f)y.
3. For precomposition d of degree s, the diagram with d on attaching S³ and identity on S² induces C\_{f∘d}→C\_f. It fixes the degree-two generator under pullback and multiplies the degree-four generator by s, as seen on the relative top cell or its boundary sphere. Thus x\_source²=sH(f)y\_source, giving H(f∘d)=sH(f).
4. The formulas include negative and zero degrees because the cone maps act by signed integers on the oriented groups. Confusing these two diagrams would incorrectly square both composition effects.

**Self-assessment rubric**

- Identifies the Hopf attachment of the four-cell in CP² and obtains invariant 1 with orientations.
- Builds the correct cone map and derives the squared target-degree law.
- Builds the opposite cone map and derives the linear attaching-sphere-degree law.
- Keeps generator and orientation choices consistent for negative and zero degrees.

</details>
