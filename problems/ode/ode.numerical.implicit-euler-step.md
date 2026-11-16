# Solve an implicit numerical update

*Medium · [Differential equations problems](index.md)*

Apply one implicit Euler step of size $h=1$ to $y^{\prime}=-2y$ from $Y_0=1$. Find the step approximation $Y_1$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Implicit Euler evaluates the slope at the unknown new state.

</details>

<details>
<summary>Hint 2</summary>

Solve the resulting algebraic equation rather than inserting the old state into the slope.

</details>

<details>
<summary>Worked solution</summary>

The new approximation occurs on both sides of the update equation.

1. The implicit update is $Y_1=1-2Y_1$.
2. Rearranging gives $3Y_1=1$.
3. Thus the numerical step value is $1/3$.

</details>
