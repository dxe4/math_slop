# Find a cycloid arch length including its zero-velocity endpoints

*Hard · [Calculus](index.md)*

Find the arc length of r(t)=(t−sin t,1−cos t) for $0\le t\le2\pi$, in the coordinate length unit. The zero endpoint velocities do not invalidate the C¹ arc-length integral.

```answer
{"answer":{"kind":"integer","expected":8,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Compute the speed before integrating coordinates separately.

</details>

<details>
<summary>Hint 2</summary>

Use 2−2cos t=4sin²(t/2) and determine the sign of sin(t/2) on the whole interval.

</details>

<details>
<summary>Worked solution</summary>

A half-angle identity simplifies the square-root speed while preserving its absolute value.

1. The velocity is (1−cos t,sin t), so its squared norm is (1−cos t)²+sin²t=2−2cos t.
2. Thus the speed is 2\|sin(t/2)\|. On 0≤t≤2π, sin(t/2)≥0, so the speed is 2sin(t/2).
3. The length is ∫₀^{2π}2sin(t/2)dt=\[−4cos(t/2)\]₀^{2π}=8.
4. The velocity vanishes only at the endpoints, where the continuous nonnegative speed is zero; the length integral remains valid and gives 8.

</details>
