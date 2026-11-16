# Justify the polar formula across its chart exclusions

*Hard · [Calculus](index.md)*

For continuous F on the closed radius-R disk, R&gt;0, justify $\iint_DF\,dA=\int_0^{2\pi}\int_0^RF(r\cos\theta,r\sin\theta)r\,dr\,d\theta$ using change of variables only on injective charts with nonzero Jacobian. Account for the origin and angle seam by explicit error bounds.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use ε≤r≤R and δ≤θ≤2π−δ as a chart region.

</details>

<details>
<summary>Hint 2</summary>

Bound the missed disk and angular wedge by the supremum of \|F\| times their areas.

</details>

<details>
<summary>Model proof</summary>

A coordinate singularity or seam can be removed and then restored by a vanishing-measure estimate.

1. Let M=max\_D\|F\|. For 0&lt;ε&lt;R and 0&lt;δ&lt;π, the polar map is one-to-one on the interior of the truncated annular sector and has determinant r&gt;0 there. The ordinary change-of-variables theorem gives equality of the two integrals on that region.
2. The omitted target lies in the radius-ε disk together with an angular wedge of total angle 2δ. Its area is at most πε²+δR², so the absolute target-integral error is at most M(πε²+δR²).
3. The omitted part of the parameter integral has the same bound by direct integration of Mr: the radial part contributes Mπε² and the two angular strips at most MδR².
4. Let ε,δ tend to zero. Both errors vanish, yielding the full formula. The origin and coincident angle edges were never falsely treated as an injective nonsingular chart; boundary curves themselves have zero area.

**Self-assessment rubric**

- Chooses a genuinely injective chart region with nonzero Jacobian.
- Bounds the excluded disk and seam wedge by their explicit areas.
- Independently bounds the omitted parameter integral using Mr.
- Restores the full formula by letting both cutoffs vanish without ignoring chart hypotheses.

</details>
