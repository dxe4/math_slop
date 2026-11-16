# Prove the point-source flux law without crossing its singularity

*Hard · [Calculus](index.md)*

Let Ω be a bounded region with piecewise-C¹ boundary, and a not on its boundary. For $F(x)=(x-a)/|x-a|^3$, prove its outward boundary flux is 4π if a∈Ω and 0 if a lies outside the closure of Ω. Apply the divergence theorem only where F is C¹.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Away from a, compute div F=0.

</details>

<details>
<summary>Hint 2</summary>

If a lies inside, excise a small ball and include its inward-pointing normal as a boundary of the remaining region.

</details>

<details>
<summary>Model proof</summary>

A singularity contributes through an excluded boundary term, not an invalid zero-divergence computation through the source.

1. Writing r=\|x−a\|, the radial divergence is 3r⁻³+r(−3r⁻⁴)=0 for r&gt;0. If a is outside the closure, F is C¹ near Ω and ordinary divergence directly gives flux zero.
2. If a∈Ω, choose a closed radius-ε ball centered at a lying inside Ω. The punctured region has outer boundary ∂Ω and inner sphere whose outward normal for the punctured region points toward a.
3. On that inner sphere F has magnitude ε⁻² in the opposite direction to the punctured-region normal. Its flux is −ε⁻²·4πε²=−4π.
4. The divergence theorem on the punctured region gives 0=outer flux−4π. Hence the original outward flux is 4π. No theorem was applied across the undefined point, and the source-on-boundary case was not included in the hypotheses.

**Self-assessment rubric**

- Computes zero divergence only where the field is defined.
- Checks smoothness on the closure before applying ordinary divergence.
- Chooses the interior excision and its inward radial boundary normal correctly.
- Evaluates the small-sphere contribution and derives 4π on the outer boundary.

</details>
