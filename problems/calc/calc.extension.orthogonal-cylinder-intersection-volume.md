# Find a two-cylinder intersection by square cross-sections

*Hard · [Calculus](index.md)*

Find the volume of $K=\{x^2+z^2\le1,\ y^2+z^2\le1\}$, the intersection of two perpendicular unit-radius cylinders. Derive the cross-section shape instead of quoting a solid-volume formula.

```answer
{"answer":{"kind":"rational","expected":{"numerator":16,"denominator":3},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Fix the shared coordinate z.

</details>

<details>
<summary>Hint 2</summary>

The two cylinder inequalities independently bound x and y by the same square root.

</details>

<details>
<summary>Worked solution</summary>

A curved three-dimensional intersection can have elementary planar slices.

1. The common coordinate must satisfy −1≤z≤1. At fixed z, each of x and y lies between −√(1−z²) and √(1−z²).
2. Thus the slice is a square of side 2√(1−z²), with area 4(1−z²).
3. The volume is ∫₋₁¹4(1−z²)dz=4\[ z−z³/3 \]₋₁¹=16/3.
4. All slices are bounded, and the solid is compact with a piecewise smooth boundary, so this ordinary slicing integral represents its volume.

</details>
