# Integrate a scalar weight with arc length

*Medium · [Calculus](index.md)*

On the upper unit semicircle C, evaluate $\int_Cy\,ds$. Orientation is irrelevant.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Use r(t)=(cos t,sin t) for 0≤t≤π.

</details>

<details>
<summary>Hint 2</summary>

The speed is one, while the scalar weight is sin t.

</details>

<details>
<summary>Worked solution</summary>

The scalar integral uses the nonnegative speed rather than a signed coordinate differential.

1. For this parametrization y=sin t and \|\|r′\|\|=1.
2. Thus the integral is ∫₀^πsin tdt.
3. Its value is \[−cos t\]₀^π=2.

</details>
