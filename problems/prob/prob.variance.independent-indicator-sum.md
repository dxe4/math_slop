# Add independent indicator variances

*Medium · [Probability problems](index.md)*

Let $X$ count the heads in three independent fair coin tosses. Find $\operatorname{Var}(X)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Represent the count as a sum of three indicators.

</details>

<details>
<summary>Hint 2</summary>

Independence makes the cross-covariances vanish.

</details>

<details>
<summary>Worked solution</summary>

Variances add for independent summands.

1. Each head indicator has variance $(1/2)(1-1/2)=1/4$.
2. The three indicators are independent, so the variance of their sum is the sum of their variances.
3. Thus $\operatorname{Var}(X)=3/4$.

</details>
