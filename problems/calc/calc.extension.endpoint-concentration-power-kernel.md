# Prove a normalized power-kernel limit for continuous functions

*Hard · [Calculus](index.md)*

For continuous real f on \[0,1\], prove $(n+1)\int_0^1x^n f(x)\,dx\to f(1)$. Supply a near-endpoint and far-endpoint estimate instead of exchanging a limit with an integrand that grows at x=1.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The kernel (n+1)xⁿ has total integral one.

</details>

<details>
<summary>Hint 2</summary>

Use continuity near one and geometric decay of its total mass outside that neighborhood.

</details>

<details>
<summary>Model proof</summary>

The kernel concentrates its unit mass at the endpoint rather than converging to an ordinary integrable function.

1. Since ∫₀¹(n+1)xⁿdx=1, the error is ∫₀¹(n+1)xⁿ\[f(x)−f(1)\]dx. Let M bound \|f\| on the compact interval.
2. Given ε&gt;0, continuity at 1 gives δ&gt;0 with \|f(x)−f(1)\|&lt;ε for 1−δ&lt;x≤1. The integral of the absolute error on that near part is at most ε times the kernel mass, hence at most ε.
3. On \[0,1−δ\], the error is at most 2M(n+1)∫₀^{1−δ}xⁿdx=2M(1−δ)^{n+1}, which tends to zero.
4. Thus the limit superior of the total absolute error is at most ε for every ε&gt;0, proving the claim. Pointwise kernel limits alone would miss the concentrated endpoint mass.

**Self-assessment rubric**

- Uses the exact unit kernel mass to express the error relative to f(1).
- Chooses the endpoint neighborhood by continuity and bounds its contribution by ε.
- Computes the geometrically decaying far mass with the normalization factor canceled.
- Fixes the neighborhood before taking n large and completes the epsilon argument.

</details>
