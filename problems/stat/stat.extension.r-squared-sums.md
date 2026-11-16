# R squared sums

*Easy · [Statistics and probability](index.md)*

A regression with an intercept has total sum of squares $\mathrm{SST}=20$ and residual sum of squares $\mathrm{SSE}=5$. What is $R^2=1-\mathrm{SSE}/\mathrm{SST}$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

First compute the fraction of the total variation left in the residuals.

</details>

<details>
<summary>Hint 2</summary>

The requested statistic is the complement of that fraction.

</details>

<details>
<summary>Worked solution</summary>

Apply the stated fraction-of-variation formula.

1. The residual fraction is $\mathrm{SSE}/\mathrm{SST}=5/20=1/4$.
2. Consequently $R^2=1-1/4=3/4$.
3. This is an in-sample sum-of-squares measure. It alone gives neither a causal interpretation nor an out-of-sample prediction guarantee.

</details>
