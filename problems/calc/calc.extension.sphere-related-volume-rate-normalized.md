# Differentiate a sphere volume with a changing radius

*Medium · [Calculus](index.md)*

A sphere has radius r(t) in cm and $V=(4\pi/3)r^3$ in cm³. When r=2 cm and dr/dt=3 cm/s, find (dV/dt)/π in cm³/s.

```answer
{"answer":{"kind":"integer","expected":48,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the volume formula with respect to time through r(t).

</details>

<details>
<summary>Hint 2</summary>

Substitute the radius and its rate only after differentiating.

</details>

<details>
<summary>Worked solution</summary>

A geometric rate combines a size derivative with the rate of its changing dimension.

1. The chain rule gives dV/dt=4πr² dr/dt.
2. Substituting gives 4π×4×3=48π cm³/s.
3. Thus the requested normalized rate is 48.

</details>
