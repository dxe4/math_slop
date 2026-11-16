# Extract a local coefficient from a first-order equation

*Medium · [Differential equations problems](index.md)*

For $y^{\prime}+y=t$, $y(0)=0$, find the coefficient of $t^3$ in its Taylor expansion at zero.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-1,"denominator":6},"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the integrating-factor solution or match powers directly.

</details>

<details>
<summary>Hint 2</summary>

Keep the low-degree cancellations caused by the initial value.

</details>

<details>
<summary>Worked solution</summary>

An exact local solution exposes the first nonzero Taylor coefficients.

1. A solution is $y=t-1+e^{-t}$. Its derivative plus itself is $t$, and its initial value is zero.
2. Expansion gives $y=t-1+(1-t+t^2/2-t^3/6+\cdots)$.
3. The coefficient of $t^3$ is $-1/6$.

</details>
