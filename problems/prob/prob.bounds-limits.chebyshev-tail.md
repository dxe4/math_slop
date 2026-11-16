# A variance-based tail bound

*Easy · [Probability problems](index.md)*

A random variable has mean $0$ and variance $4$. What upper bound does Chebyshev inequality give for $P(|X|\ge5)$?

```answer
{"answer":{"kind":"rational","expected":{"numerator":4,"denominator":25},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the squared deviation threshold in the denominator.

</details>

<details>
<summary>Hint 2</summary>

The given mean identifies the absolute value as deviation from the mean.

</details>

<details>
<summary>Worked solution</summary>

Chebyshev controls deviations using the second centered moment.

1. Chebyshev states $P(|X-E[X]|\ge a)\le\operatorname{Var}(X)/a^2$.
2. With mean zero and $a=5$, the requested event is exactly of this form.
3. The bound is $4/25$.

</details>
