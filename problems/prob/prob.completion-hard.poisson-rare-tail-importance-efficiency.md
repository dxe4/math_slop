# Measure the cost of a rare-tail Poisson tilt

*Hard · [Probability problems](index.md)*

Fix $\lambda>0$ and let $p_m=P(\operatorname{Poisson}(\lambda)\ge m)$ as integers $m\to\infty$. Under a proposal $N\sim\operatorname{Poisson}(m)$, use $Z_m=e^{m-\lambda}(\lambda/m)^N\mathbf1_{N\ge m}$ to estimate $p_m$. Prove unbiasedness and derive the asymptotic relative variance $\operatorname{Var}(Z_m)/p_m^2$. Compare its growth with the relative variance of the naive event-indicator estimator. You may use Stirling’s formula, but justify domination of both tail sums.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Compare consecutive probabilities in the original tail and consecutive summands in the proposal second moment.

</details>

<details>
<summary>Hint 2</summary>

The first second-moment summand is the square of the original boundary probability divided by the proposal boundary probability.

</details>

<details>
<summary>Model proof</summary>

The proposal puts only a square-root fraction of its mass on the boundary that dominates this extremely rare tail.

1. The displayed weight is exactly the ratio of the original Poisson mass to the proposal mass. Thus $E_m Z_m=p_m$. Let $a_m=e^{-\lambda}\lambda^m/m!$ and $b_m=e^{-m}m^m/m!$. In the original tail, each consecutive ratio is at most $\lambda/(m+1)$, so $a_m\le p_m\le a_m/[1-\lambda/(m+1)]$ for large $m$. Hence $p_m/a_m\to1$.
2. Write the second moment as a sum over $k\ge m$ of $u_k=P_m(N=k)[e^{m-\lambda}(\lambda/m)^k]^2$. Its first summand is $u_m=a_m^2/b_m$. The ratio $u_{k+1}/u_k=\lambda^2/[m(k+1)]$ is at most $\lambda^2/[m(m+1)]$, tending to zero.
3. The same geometric comparison gives $E_mZ_m^2\sim a_m^2/b_m$. Stirling yields $b_m\sim(2\pi m)^{-1/2}$. Therefore $E_mZ_m^2/p_m^2\sim\sqrt{2\pi m}$ and $\operatorname{Var}_m(Z_m)/p_m^2\sim\sqrt{2\pi m}$; the exact relative-variance expression subtracts one.
4. The naive indicator has relative variance $(1-p_m)/p_m\sim1/p_m$, much larger. Indeed Stirling gives $p_m\sim e^{-\lambda}(e\lambda/m)^m/\sqrt{2\pi m}$, so its reciprocal grows faster than any fixed polynomial. The tilt is a major improvement but does not yield bounded relative variance.

**Self-assessment rubric**

- Verify the exact mass ratio and expectation.
- Control both tails with their different consecutive-term ratios.
- Derive the square-root relative-variance asymptotic including the subtraction convention.
- Quantify the contrasting naive growth without claiming bounded relative variance.

</details>
