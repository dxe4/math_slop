# Integrate a reciprocal-square weight away from its singularity

*Medium · [Calculus](index.md)*

On A={1≤√(x²+y²)≤e}, let $I=\iint_A1/(x^2+y^2)\,dA$. Find I/π.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The annulus excludes the origin, so the weight is continuous on the region.

</details>

<details>
<summary>Hint 2</summary>

Combine r⁻² with the polar area factor r.

</details>

<details>
<summary>Worked solution</summary>

A planar radial measure lowers the effective reciprocal power by one.

1. In polar coordinates I=2π∫₁ᵉr⁻¹dr.
2. The radial integral is log e−log1=1.
3. Thus I/π=2.

</details>
