# Show uniform convergence does not justify endpoint differentiation

*Hard · [Calculus](index.md)*

Define $F(x)=\sum_{n=1}^\infty x^n/n^2$ on \[0,1\]. Prove F is continuous there by uniform convergence, but \[F(1)−F(x)\]/(1−x)→+∞ as x→1⁻. Explain why the interior differentiation theorem is not contradicted.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The uniform absolute tail is bounded by a p-series tail.

</details>

<details>
<summary>Hint 2</summary>

For the endpoint slope keep any finite number of positive terms, then let x approach one before increasing that finite cutoff.

</details>

<details>
<summary>Model proof</summary>

A continuous uniformly convergent sum may have an unbounded one-sided derivative at its convergence boundary.

1. For x∈\[0,1\], \|xⁿ/n²\|≤1/n². The convergent p-series bounds every uniform tail, so the series converges uniformly and its continuous polynomial partial sums give a continuous F on \[0,1\].
2. For 0≤x&lt;1, \[F(1)−F(x)\]/(1−x)=Σ\_{n≥1}(1−xⁿ)/\[n²(1−x)\]. Every term is nonnegative, and (1−xⁿ)/(1−x)=1+x+⋯+x^{n−1}.
3. For any fixed N the quotient is at least its first N terms. As x→1⁻ these approach Σ\_{n=1}^N1/n. Given any target M, choose N with that harmonic partial sum greater than M+1, then choose x sufficiently close to one so the finite lower bound exceeds M. This proves divergence to +∞.
4. Termwise differentiation is valid strictly inside the power-series radius, not automatically at an endpoint. The uniformly convergent function series alone does not provide uniform convergence of its derivative series there.

**Self-assessment rubric**

- Bounds uniform tails and correctly passes continuity from partial sums.
- Writes the endpoint quotient as a nonnegative series of finite geometric factors.
- Chooses a finite harmonic cutoff before moving x to prove an arbitrarily large lower bound.
- Explains precisely why the interior derivative theorem cannot be extended by uniform function convergence alone.

</details>
