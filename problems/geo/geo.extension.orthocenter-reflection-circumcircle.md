# Reflect an orthocenter across a side

*Hard · [Geometry and trigonometry problems](index.md)*

Let $ABC$ be an acute triangle with orthocenter $H$. Reflect $H$ across line $BC$ to $K$. Prove that $A,B,C,K$ are concyclic, with all side-position and angle conditions justified.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Use the two perpendicularities to compute $\angle BHC$.

</details>

<details>
<summary>Hint 2</summary>

Reflection puts $K$ opposite $A$ across $BC$ and preserves the subtended angle.

</details>

<details>
<summary>Model proof</summary>

Apply the converse cyclic-angle criterion after reflection.

1. Acuteness puts $H$ inside the triangle, so $A,H$ are on the same side of $BC$ and $K$ is on the other side.
2. In triangle $BHC$, the angles at $B,C$ are $90^\circ-C$ and $90^\circ-B$ because the respective altitude lines are perpendicular to $AC,AB$. Thus $\angle BHC=B+C=180^\circ-A$.
3. Reflection fixes $B,C$ and preserves angles, giving $\angle BKC=180^\circ-A$.
4. The points $A,K$ lie on opposite sides of $BC$ and their ordinary subtended angles add to $180^\circ$. The converse inscribed-angle criterion shows that $K$ lies on the circumcircle of $ABC$.

**Self-assessment rubric**

- Derive the correct angle using the altitude perpendicularities.
- Use acuteness to justify the opposite-side placement after reflection.
- Apply the converse subtended-angle criterion with ordinary, not reflex, angles.

</details>
