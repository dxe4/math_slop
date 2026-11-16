# Variance of an indicator

*Easy · [Probability problems](index.md)*

An indicator $X$ equals $1$ with probability $2/5$. Find $\operatorname{Var}(X)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":6,"denominator":25},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

For a zero-one variable, squaring does not change its value.

</details>

<details>
<summary>Hint 2</summary>

Use the second-moment formula for variance.

</details>

<details>
<summary>Worked solution</summary>

The first and second moments of an indicator are equal.

1. $E[X]=2/5$ and $E[X^2]=2/5$.
2. Variance is $E[X^2]-(E[X])^2=2/5-4/25$.
3. Thus $\operatorname{Var}(X)=6/25$.

</details>
