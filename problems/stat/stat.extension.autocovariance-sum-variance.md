# Autocovariance sum variance

*Medium · [Statistics and probability](index.md)*

Let $(X_t)$ be a real weakly stationary process, let $n\ge1$, and write $\gamma(h)=\operatorname{Cov}(X_t,X_{t+h})$. Prove that for $\overline X_n=n^{-1}\sum_{t=1}^nX_t$, $\operatorname{Var}(\overline X_n)=n^{-2}[n\gamma(0)+2\sum_{h=1}^{n-1}(n-h)\gamma(h)]$. Interpret the sum as empty when $n=1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Start with a double covariance sum, without assuming independence.

</details>

<details>
<summary>Hint 2</summary>

Separate diagonal pairs from pairs a fixed positive lag apart. Count both possible orders of each off-diagonal pair.

</details>

<details>
<summary>Model proof</summary>

Group the exact covariance expansion by the distance between observation indices.

1. Finite second moments and bilinearity give $\operatorname{Var}(\overline X_n)=n^{-2}\sum_{s=1}^n\sum_{t=1}^n\operatorname{Cov}(X_s,X_t)$.
2. The $n$ diagonal terms each equal $\gamma(0)$. For $1\le h\le n-1$, there are $n-h$ pairs $(s,s+h)$, with $s=1,\ldots,n-h$.
3. Each such pair has covariance $\gamma(h)$ by stationarity. Reversing its order gives a second term with the same value because scalar covariance is symmetric. Thus the off-diagonal contribution at that lag is $2(n-h)\gamma(h)$.
4. Collecting these groups and retaining $n^{-2}$ proves the formula. For $n=1$ it gives $\gamma(0)$ as required. For uncorrelated observations all positive-lag terms vanish, giving $\gamma(0)/n$; otherwise the extra terms may not vanish.

**Self-assessment rubric**

- Expand the variance with the correct averaging scale and no independence assumption.
- Count both orders of the pairs at each positive lag.
- Collect the terms and include the single-observation case.

</details>
