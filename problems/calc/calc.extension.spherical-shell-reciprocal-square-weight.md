# Cancel a spatial radial weight against its Jacobian

*Medium · [Calculus](index.md)*

On S={1≤√(x²+y²+z²)≤2}, let $I=\iiint_S1/(x^2+y^2+z^2)\,dV$. Find I/π.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The spherical Jacobian contributes ρ²sinφ.

</details>

<details>
<summary>Hint 2</summary>

The ρ² factor cancels the reciprocal-square weight, leaving a constant radial integral.

</details>

<details>
<summary>Worked solution</summary>

Three-dimensional radial measure changes the effective singularity compared with planar area.

1. The complete angular integral is ∫₀^{2π}∫₀^πsinφdφdθ=4π.
2. The remaining radial integral is ∫₁²1dρ=1.
3. Thus I=4π and I/π=4.

</details>
