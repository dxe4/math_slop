# Initial data select a constant particular solution

*Easy · [Differential equations problems](index.md)*

Solve $y^{\prime\prime}-y=2$, $y(0)=-2$, $y^{\prime}(0)=0$. Enter the solution polynomial with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"-2","domain":{"variable":"x","excluded":[]},"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Test a constant particular solution for the constant forcing.

</details>

<details>
<summary>Hint 2</summary>

The given initial conditions may already match that particular solution.

</details>

<details>
<summary>Worked solution</summary>

The constant solution matches both forcing and initial data.

1. The constant $y=-2$ has $y^{\prime\prime}-y=0-(-2)=2$.
2. Its initial position and derivative are $-2$ and $0$. The homogeneous additions $Ae^t+Be^{-t}$ must have both zero initial data, forcing $A=B=0$.
3. The requested polynomial is $p(x)=-2$.

</details>
