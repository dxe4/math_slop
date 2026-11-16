# Compute outward planar flux directly from unit geometry

*Medium · [Calculus](index.md)*

On the unit circle C, take F(x,y)=(x,y) and outward planar normal. Find $\pi^{-1}\int_CF\cdot n\,ds$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

On this circle the field equals the outward unit normal.

</details>

<details>
<summary>Hint 2</summary>

The dot product is one and the circumference is 2π.

</details>

<details>
<summary>Worked solution</summary>

Flux pairs the field with normal rather than tangent direction.

1. Parametrize by (cos t,sin t), 0≤t≤2π. Then F=n=(cos t,sin t) and ds=dt.
2. The flux is ∫₀^{2π}1dt=2π.
3. The requested normalized value is 2.

</details>
