# Compute a weighted tetrahedral centroid through sum coordinates

*Medium · [Calculus](index.md)*

On T={x,y,z≥0,x+y+z≤1}, density is ρ=x+y+z. Find the centroid’s x-coordinate $\bar x=(\iiint_Tx\rho)/(\iiint_T\rho)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":4,"denominator":15},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Use s=x+y+z with z=s−x−y and absolute Jacobian one.

</details>

<details>
<summary>Hint 2</summary>

At fixed s the xy triangle has area s²/2 and x first moment s³/6.

</details>

<details>
<summary>Worked solution</summary>

A varying density changes both total mass and the first-moment weighting.

1. In (s,x,y) coordinates, 0≤s≤1 and x,y≥0,x+y≤s. The mass is ∫₀¹s(s²/2)ds=1/8.
2. The numerator is ∫₀¹s(s³/6)ds=1/30, since ∫₀ˢ∫₀^{s−x}x dy dx=s³/6.
3. Thus x̄=(1/30)/(1/8)=4/15.

</details>
