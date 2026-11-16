# A coefficient after polynomial cancellation

*Medium · [Differential equations problems](index.md)*

For $y^{\prime}=y+t^2$, $y(0)=0$, find the Taylor coefficient of $t^4$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":12},"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A quadratic particular solution can be combined with the homogeneous exponential.

</details>

<details>
<summary>Hint 2</summary>

After the initial condition is imposed, inspect which terms can contribute at the requested degree.

</details>

<details>
<summary>Worked solution</summary>

The polynomial part affects only the first few terms of the exact solution.

1. A particular solution is $-t^2-2t-2$, so the initial condition gives $y=2e^t-t^2-2t-2$.
2. Its derivative minus itself is $t^2$, and it vanishes initially, verifying the equation and data.
3. The fourth-power coefficient comes only from $2e^t$, giving $2/4!=1/12$.

</details>
