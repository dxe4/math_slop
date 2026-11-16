# Correct a nonlinear Euler predictor

*Medium · [Differential equations problems](index.md)*

Use one Heun explicit trapezoidal step with $h=1/2$ for $y^{\prime}=y^2$ from $Y_0=1$ at $t=0$. Find the corrected approximation $Y_1$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":29,"denominator":16},"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

First compute the forward Euler endpoint predictor.

</details>

<details>
<summary>Hint 2</summary>

Average the initial slope and the slope at that predicted endpoint.

</details>

<details>
<summary>Worked solution</summary>

Heun uses the average of two explicitly available slopes.

1. The initial slope is $1$, so the predictor is $1+(1/2)1=3/2$.
2. The endpoint-predictor slope is $(3/2)^2=9/4$.
3. The corrected value is $1+(1/4)(1+9/4)=1+13/16=29/16$.

</details>
