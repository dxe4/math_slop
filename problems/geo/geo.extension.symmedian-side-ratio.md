# Prove the symmedian ratio

*Hard · [Geometry and trigonometry problems](index.md)*

Let $M$ be the midpoint of side $BC$ of a nondegenerate triangle $ABC$. Reflect ray $AM$ in the internal bisector of angle $A$; it meets $BC$ at $K$. Prove $BK/KC=(AB/AC)^2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

For an internal cevian $AX$, compare areas to obtain $BX/XC=AB\sin\angle BAX/(AC\sin\angle XAC)$.

</details>

<details>
<summary>Hint 2</summary>

The reflected rays swap their angles with the sides; first apply the formula at the midpoint.

</details>

<details>
<summary>Model proof</summary>

Compare sine ratios of reflected cevians.

1. Triangles $ABX,ACX$ share altitude to $BC$. Their area ratio is $BX/XC$, while the sine area formulas give $(AB/AC)\sin\angle BAX/\sin\angle XAC$.
2. At $X=M$ the ratio is one, so $\sin\angle MAC/\sin\angle BAM=AB/AC$.
3. The reflected internal ray remains inside angle $A$, hence meets the segment internally. Its angles satisfy $\angle BAK=\angle MAC$ and $\angle KAC=\angle BAM$.
4. Applying the area ratio at $K$ gives $BK/KC=(AB/AC)^2$. Every sine denominator is positive for these internal rays in a nondegenerate triangle.

**Self-assessment rubric**

- Derive the cevian ratio from base and sine area formulas.
- Use BM=MC to find the median sine ratio.
- Justify the internal intersection and swapped angles.
- Conclude the squared ratio with valid divisions.

</details>
