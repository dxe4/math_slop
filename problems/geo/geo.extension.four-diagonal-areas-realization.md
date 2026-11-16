# Characterize four diagonal triangle areas

*Hard · [Geometry and trigonometry problems](index.md)*

The diagonals of a strictly convex quadrilateral $ABCD$ meet at $O$. Set $\alpha=[AOB]$, $\beta=[BOC]$, $\gamma=[COD]$, $\delta=[DOA]$. Prove $\alpha\gamma=\beta\delta$. Conversely, construct a strictly convex quadrilateral for every positive quadruple satisfying that relation.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

All four areas involve the same absolute sine of the angle between the diagonals.

</details>

<details>
<summary>Hint 2</summary>

For the converse choose perpendicular diagonals with $A=(1,0)$ and solve the other three positive axis distances.

</details>

<details>
<summary>Model proof</summary>

Prove the multiplicative constraint and explicitly realize it.

1. Let $OA=u$, $OC=v$, $OB=w$, $OD=t$, and let $k>0$ be half the sine of the diagonal angle. Then $\alpha=kuw$, $\beta=kvw$, $\gamma=kvt$, $\delta=kut$.
2. Multiplication gives $\alpha\gamma=k^2uvwt=\beta\delta$. Strict convexity ensures all four distances and $k$ are positive.
3. Conversely suppose the four given numbers are positive with $\alpha\gamma=\beta\delta$. Set $O=(0,0)$, $A=(1,0)$, $B=(0,2\alpha)$, $C=(-\beta/\alpha,0)$ and $D=(0,-2\delta)$.
4. The four signed axis distances are positive in their indicated directions, so the boundary order $A,B,C,D$ is strictly convex and its diagonals cross at $O$.
5. The first, second and fourth areas are $\alpha,\beta,\delta$ by the base-height formula. The third is $\beta\delta/\alpha=\gamma$ by the assumed relation. This proves sufficiency with an explicit construction.

**Self-assessment rubric**

- Represent all four areas with one common angle factor.
- Derive the multiplicative relation with positive quantities.
- Give coordinates realizing any admissible positive quadruple.
- Verify strict convexity and every requested area in the construction.

</details>
