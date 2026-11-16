# Derive the multiplicity factor for a power map of the disk

*Hard · [Calculus](index.md)*

For integer m≥1 let T\_m identify u+iv with (u+iv)ᵐ on the unit disk D. Prove $\iint_Dg(T_m(u,v))|\det DT_m|\,du\,dv=m\iint_Dg(x,y)\,dx\,dy$ for continuous g. Derive the Jacobian and explain the multiplicity rather than claiming global injectivity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

In polar coordinates the map sends (r,θ) to (rᵐ,mθ).

</details>

<details>
<summary>Hint 2</summary>

Substitute the new radius and split the angular range into m complete turns.

</details>

<details>
<summary>Model proof</summary>

The absolute determinant counts every regular target point once for each of its m preimages.

1. For r&gt;0, compare the target polar area factor with the source one. The radial-angular determinant gives \|det DT\_m\|=m²r^{2m−2}. The origin, when singular, is a single zero-area point.
2. The source integral becomes ∫₀^{2π}∫₀¹g(rᵐcos mθ,rᵐsin mθ)m²r^{2m−1}drdθ. Put ρ=rᵐ, turning the radial factor into mρdρ.
3. For each ρ, substituting φ=mθ gives (1/m)∫₀^{2πm}g(ρcosφ,ρsinφ)dφ. Periodicity splits this into m equal turns, leaving exactly one full-turn integral in θ. The remaining external factor m proves the identity.
4. Every nonzero target with radius ρ and angle φ has source radius ρ^{1/m} and the m distinct angles (φ+2πk)/m modulo 2π. Thus the multiplicity is exactly m. Using the one-to-one formula over the entire source disk would miss this factor.

**Self-assessment rubric**

- Derives the factor m²r^{2m−2} with the polar source factor accounted for.
- Transforms the radial measure to mρdρ.
- Tracks all m turns and obtains the exact multiplicity formula.
- Identifies the m regular preimages and handles the origin without a false injectivity claim.

</details>
