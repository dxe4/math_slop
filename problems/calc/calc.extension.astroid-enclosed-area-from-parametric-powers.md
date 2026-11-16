# Find an astroid area with a finite trigonometric reduction

*Medium · [Calculus](index.md)*

For the closed astroid $x=\cos^3t$, $y=\sin^3t$, 0≤t≤2π, let A be its geometric enclosed area. Find A/π. You may use ∫₀^{π/2}cos⁴t dt=3π/16 and ∫₀^{π/2}cos⁶t dt=5π/32.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":8},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Use fourfold symmetry and the positive first-quadrant boundary integral ∫x dy.

</details>

<details>
<summary>Hint 2</summary>

Its integrand is 3sin²t cos⁴t; replace sin² by 1−cos².

</details>

<details>
<summary>Worked solution</summary>

Parametric area and symmetry reduce the curved boundary to two known even-power integrals.

1. The first-quadrant arc goes from (1,0) to (0,1), with dy=3sin²t cos tdt. Thus its enclosed quadrant area is ∫₀^{π/2}3sin²t cos⁴t dt.
2. Using sin²=1−cos² gives quadrant area 3(3π/16−5π/32)=3π/32.
3. The full area is four times this, 3π/8, so A/π=3/8.

</details>
