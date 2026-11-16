# Integrate cylindrical cross-sections of a cone

*Medium · [Calculus](index.md)*

Let C={0≤r≤1,0≤z≤1−r,0≤θ&lt;2π} in cylindrical coordinates. Find $\operatorname{vol}(C)/\pi$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The height above each planar radius is 1−r.

</details>

<details>
<summary>Hint 2</summary>

Include the cylindrical Jacobian r.

</details>

<details>
<summary>Worked solution</summary>

The vertical bound and radial area element are independent factors.

1. The volume is ∫₀^{2π}∫₀¹∫₀^{1−r}r dz dr dθ.
2. This equals 2π∫₀¹r(1−r)dr=2π(1/2−1/3).
3. Thus V/π=1/3.

</details>
