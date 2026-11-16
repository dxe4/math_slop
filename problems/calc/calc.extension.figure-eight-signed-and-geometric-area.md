# Separate algebraic area from two-lobe geometric area

*Hard · [Calculus](index.md)*

For C parametrized by (sin t,sin2t), 0≤t≤2π, calculate $\tfrac12\oint_C(x\,dy-y\,dx)$ and the total unsigned area of its two lobes. Explain why the first quantity can vanish for a curve enclosing nonzero geometric area.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Split the traversal at t=π into its two simple lobes.

</details>

<details>
<summary>Hint 2</summary>

The area integrand simplifies to −sin³t, with opposite signs on the two halves.

</details>

<details>
<summary>Model proof</summary>

A self-crossing traversal carries oriented multiplicity, not one unsigned enclosed region.

1. With dx=cos tdt and dy=2cos2t dt, half the area form is \[sin t cos2t−sin t cos²t\]dt=−sin³t dt.
2. On 0≤t≤π the curve traces the right lobe clockwise, giving signed area −∫₀^πsin³t dt=−4/3. On π≤t≤2π it traces the left lobe counterclockwise, giving +4/3. Each half is simple apart from its common initial/final origin.
3. The full signed integral is therefore zero. The two geometric lobe areas are the absolute values 4/3 and 4/3, totaling 8/3.
4. Green’s area formula applies separately with each simple lobe’s orientation, or globally with signed winding multiplicity. Replacing this by the unsigned area of a single Jordan interior would disregard the crossing and cancellation.

**Self-assessment rubric**

- Computes the signed area form exactly as −sin³t.
- Splits at the crossing and identifies both orientations and 4/3 magnitudes.
- Obtains signed zero versus geometric 8/3 and explains their different scopes.

</details>
