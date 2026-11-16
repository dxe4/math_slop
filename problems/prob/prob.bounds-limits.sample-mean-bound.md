# Control an average of independent indicators

*Medium · [Probability problems](index.md)*

Let $\overline X$ be the mean of $100$ independent fair zero-one indicators. Find the Chebyshev upper bound for $P(|\overline X-1/2|\ge1/10)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Compute the variance of the sum, then apply the scaling needed for the average.

</details>

<details>
<summary>Hint 2</summary>

Only after finding the average variance should you insert the deviation threshold.

</details>

<details>
<summary>Worked solution</summary>

Independence reduces the variance of the average before the tail inequality is applied.

1. Each indicator has variance $1/4$. The sum has variance $100/4=25$.
2. The average has variance $25/100^2=1/400$ and mean $1/2$.
3. Chebyshev gives $(1/400)/(1/10)^2=1/4$.

</details>
