# Find the convergence threshold for Cauchy series

*Hard · [Probability problems](index.md)*

Let $C_n$ be independent standard Cauchy variables, with characteristic function $e^{-|t|}$, and let $(a_n)$ be deterministic real numbers. Prove that $\sum_na_nC_n$ converges almost surely if and only if $\sum_n|a_n|<\infty$. Show in particular why square-summability of the coefficients is insufficient. You may use the three-series theorem, but derive bounds for its tails and truncated variances from the Cauchy density.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Finite partial sums have a scale parameter that can be read directly from their characteristic functions.

</details>

<details>
<summary>Hint 2</summary>

For a small coefficient, split the Cauchy density at the reciprocal of its magnitude when estimating truncated moments.

</details>

<details>
<summary>Model proof</summary>

The Cauchy scale accumulates in absolute first power, not in variance power.

1. The partial sum $S_N$ has characteristic function $\exp(-|t|A_N)$, where $A_N=\sum_{n\le N}|a_n|$. If this sum diverges, $S_N$ has Cauchy scale tending to infinity, so for every fixed $R$, $P(|S_N|\le R)=(2/\pi)\arctan(R/A_N)\to0$. The partial-sum laws are not tight and cannot converge almost surely to a finite limit.
2. If $\sum|a_n|<\infty$, all but finitely many coefficients have magnitude $b\le1$. From the density $1/[\pi(1+x^2)]$, $P(|bC|>1)\le2b/\pi$ by integrating $x^{-2}$ above $1/b$. Thus the large-jump probability sum is finite.
3. Symmetry makes every truncated mean zero. Moreover $E[(bC)^2\mathbf1_{|bC|\le1}]=(2b^2/\pi)\int_0^{1/b}x^2/(1+x^2)\,dx\le2b/\pi$. The truncated variance sum is therefore finite. Zero coefficients contribute zero and cause no division issue.
4. The three-series theorem at cutoff one gives almost-sure convergence. Coefficients $a_n=1/n$ have summable squares but nonsummable absolute values, so their Cauchy series fails by the necessity argument, despite the familiar Gaussian or finite-variance coefficient criterion.

**Self-assessment rubric**

- Derive the Cauchy scale of each partial sum and use non-tightness for necessity.
- Bound the large-jump probabilities with the correct coefficient power.
- Verify all three-series conditions without invoking nonexistent Cauchy moments.
- Identify an explicit square-summable coefficient sequence outside the correct threshold.

</details>
