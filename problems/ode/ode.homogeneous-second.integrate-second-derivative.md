# Use two initial conditions after two integrations

*Easy · [Differential equations problems](index.md)*

Solve $y^{\prime\prime}(t)=6t$, $y(0)=1$, $y^{\prime}(0)=0$. Enter the solution polynomial with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"x^3+1","domain":{"variable":"x","excluded":[]},"checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Integrate twice, retaining a new constant at each step.

</details>

<details>
<summary>Hint 2</summary>

Use the derivative condition before the position condition.

</details>

<details>
<summary>Worked solution</summary>

Two integrations need two independent initial conditions.

1. Integration gives $y^{\prime}=3t^2+C_1$, so the derivative condition makes $C_1=0$.
2. Then $y=t^3+C_2$, with $C_2=1$ from the position condition.
3. The polynomial is $x^3+1$; its second derivative is $6t$, and both initial values match.

</details>
