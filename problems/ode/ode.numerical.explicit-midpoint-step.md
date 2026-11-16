# Use a midpoint predictor

*Medium · [Differential equations problems](index.md)*

Apply one explicit midpoint step of size $h=1$ to $y^{\prime}=y$ from $Y_0=1$ at $t=0$. Find $Y_1$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":2},"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Predict the midpoint using half a step of the initial slope.

</details>

<details>
<summary>Hint 2</summary>

The full update uses the slope evaluated at that predicted midpoint.

</details>

<details>
<summary>Worked solution</summary>

Explicit midpoint evaluates one corrected slope before the full update.

1. The first slope is $k_1=1$. The predicted midpoint state is $1+(1/2)k_1=3/2$.
2. The midpoint slope is $k_2=3/2$.
3. The full-step approximation is $Y_1=1+1\cdot(3/2)=5/2$.

</details>
