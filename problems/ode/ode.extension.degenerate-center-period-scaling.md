# Prove amplitude-dependent periods at a nonhyperbolic center

*Hard · [Differential equations problems](index.md)*

For the quartic oscillator $x''=-x^3$, prove every energy level E=(x')^2/2+x^4/4&gt;0 is a periodic orbit and its period is T(E)=C\*E^(-1/4), where C=4\*integral from 0 to 1 of (1-s^4)^(-1/2) ds. Explain why the period tends to infinity as E decreases to zero.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The positive energy curve is a compact regular oval with no equilibrium on it.

</details>

<details>
<summary>Hint 2</summary>

Integrate one quarter of the orbit and scale the turning amplitude.

</details>

<details>
<summary>Model proof</summary>

A degenerate potential produces a period scale different from a harmonic center.

1. Energy is conserved by differentiation. For E&gt;0 its level curve is the compact oval v^2=2E-x^4/2, with turning points x=plus or minus (4E)^(1/4). The vector field (v,-x^3) never vanishes on this regular level, so the motion traverses the oval periodically; the travel-time integral below is finite.
2. A quarter-period runs from x=0 to a=(4E)^(1/4) with positive velocity. Thus T(E)=4\*integral\_0^a dx/sqrt(2E-x^4/2). Put x=a\*s. The prefactor becomes 4\*E^(-1/4), giving exactly the stated C.
3. The integral defining C is positive and finite, since its integrand has only an inverse-square-root singularity at s=1. Therefore T(E) grows like E^(-1/4) and tends to infinity as E decreases to zero, unlike the constant period of a linear harmonic oscillator.

**Self-assessment rubric**

- Establish a compact regular energy oval with nonvanishing flow.
- Derive the time integral and its exact energy scaling.
- Check endpoint integrability and the small-energy divergence.

</details>
