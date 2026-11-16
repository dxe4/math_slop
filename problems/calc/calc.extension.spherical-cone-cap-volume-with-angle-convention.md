# Find a cone-trimmed unit-ball volume

*Medium · [Calculus](index.md)*

Find the volume inside $x^2+y^2+z^2\le1$ and above the cone z=√(x²+y²), using polar angle φ from +z. Give an exact formula and full personal argument.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The cone condition is φ≤π/4, not φ≥π/4.

</details>

<details>
<summary>Hint 2</summary>

Integrate ρ²sinφ over the radial, polar and azimuthal intervals.

</details>

<details>
<summary>Model proof</summary>

The cone clips angular directions while the sphere clips radius.

1. The spherical bounds are 0≤ρ≤1,0≤φ≤π/4 and 0≤θ&lt;2π. The radial Jacobian is ρ²sinφ.
2. Thus V=(∫₀¹ρ²dρ)(∫₀^{π/4}sinφdφ)(∫₀^{2π}dθ)=(1/3)(1−1/√2)(2π).
3. This simplifies to V=π(2−√2)/3. Boundary sets do not change the volume and the specified polar convention fixes the cone side.

**Self-assessment rubric**

- Derives the radial and polar bounds from both geometric inequalities.
- Uses the spherical factor ρ²sinφ with the stated polar-angle convention.
- Evaluates all three factors and obtains π(2−√2)/3.

</details>
