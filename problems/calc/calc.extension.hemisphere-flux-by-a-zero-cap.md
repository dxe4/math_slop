# Close an open hemisphere with a cap that contributes zero

*Medium · [Calculus](index.md)*

For $F=(0,0,z)$, find the outward flux through the upper unit hemisphere divided by π. Include the equatorial disk only as an auxiliary cap.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The field vanishes on z=0, so the added cap has zero flux.

</details>

<details>
<summary>Hint 2</summary>

The divergence is one on the enclosed upper half-ball.

</details>

<details>
<summary>Worked solution</summary>

A suitable cap converts an open-surface flux into a volume integral.

1. The closed upper half-ball boundary consists of the outward hemisphere and a downward disk at z=0. That disk contributes zero because F=0 there.
2. Since div F=1, the full outward flux equals the half-ball volume 2π/3.
3. Thus the hemisphere flux divided by π is 2/3.

</details>
