# A quantile Z-estimator with an empirical-process remainder

*Medium · [Statistics and probability](index.md)*

Let $F(q)=\tau\in(0,1)$ with a continuous density $f$ positive at $q$, and let $F_n$ be the iid empirical distribution function. A quantile estimator satisfies $\widehat q_n\to q$ in probability, $F_n(\widehat q_n)-\tau=o_P(n^{-1/2})$, and $\sqrt n[(F_n-F)(\widehat q_n)-(F_n-F)(q)]=o_P(1)$. Use Z-estimation linearization to derive its influence expansion and limiting variance, justifying the root-$n$ rate rather than assuming it.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Graduate derivation and personal task-specific rubric reflection only; no automatic proof verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Insert and subtract the empirical-process value at the true quantile.

</details>

<details>
<summary>Hint 2</summary>

Use the positive derivative of the population distribution to solve the estimating equation, first for the rate and then for the linear term.

</details>

<details>
<summary>Model proof</summary>

Stochastic equicontinuity transports the empirical equation back to the true quantile.

1. The supplied equation and equicontinuity give $0=F_n(q)-\tau+f(q)(\widehat q_n-q)+o_P(|\widehat q_n-q|)+o_P(n^{-1/2})$. The population remainder follows from differentiability and consistency.
2. The Bernoulli central limit theorem makes $F_n(q)-\tau=O_P(n^{-1/2})$. Because $f(q)>0$, the coefficient of $\widehat q_n-q$ is bounded away from zero with probability tending to one. The displayed equation first yields $\widehat q_n-q=O_P(n^{-1/2})$.
3. Substituting this rate back gives $\sqrt n(\widehat q_n-q)=n^{-1/2}\sum_{i=1}^n[\tau-1_{\{X_i\le q\}}]/f(q)+o_P(1)$.
4. The limit is centered normal with variance $\tau(1-\tau)/f(q)^2$. This expansion required local empirical-process control; applying a smooth sample-mean delta method directly to the discontinuous empirical indicator would not justify it.

**Self-assessment rubric**

- Use the stated stochastic equicontinuity in the empirical equation.
- Justify the rate with the positive population derivative.
- Derive the influence representation and limiting variance.

</details>
