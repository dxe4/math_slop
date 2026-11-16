# Calculate the ball potential inside and outside its support

*Hard · [Calculus](index.md)*

For a radius-R ball B centered at zero define $U(a)=\iiint_B|x-a|^{-1}\,dV$, with R&gt;0 and r=\|a\|. Prove finiteness and derive U as an explicit function of r for 0≤r≤R and r≥R, including r=0 and r=R.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Align the spherical polar axis with a.

</details>

<details>
<summary>Hint 2</summary>

At shell radius ρ, the complete angular integral is 4π/max(ρ,r); derive it by a cosine substitution.

</details>

<details>
<summary>Model proof</summary>

Angular averaging reduces a displaced singular kernel to different inside-shell and outside-shell expressions.

1. If a lies in or on B, the local singularity is integrable: its integral over a radius-ε ball centered at a is 4π∫₀^εs ds=2πε². Outside that ball the kernel is bounded on a finite region. Thus U is finite; it is plainly finite when a is strictly outside B.
2. For r&gt;0 and ρ&gt;0, the angular integral is 2π∫₀^πsinφ/\[ρ²+r²−2ρr cosφ\]^{1/2}dφ=2π\[(ρ+r)−\|ρ−r\|\]/(ρr)=4π/max(ρ,r). The formula also covers ρ=r by its integrable endpoint limit.
3. Therefore U=4π∫₀^Rρ²/max(ρ,r)dρ. If r≥R this is 4πR³/(3r). If 0&lt;r≤R it is 4π\[r²/3+(R²−r²)/2\]=2π(R²−r²/3).
4. At r=0 direct centered integration gives 4π∫₀^Rρdρ=2πR², agreeing with the inside formula. At r=R both formulas give 4πR²/3. All singular and transition cases are therefore included.

**Self-assessment rubric**

- Controls the displaced singularity by a finite radial small-ball integral.
- Derives the absolute-difference angular formula and its max simplification.
- Splits the radial integral correctly for inside and outside points.
- Treats the center and verifies agreement at the boundary radius.

</details>
