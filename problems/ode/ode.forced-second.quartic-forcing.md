# Integrate polynomial forcing with nonzero initial slope

*Easy · [Differential equations problems](index.md)*

Solve $y^{\prime\prime}=12t^2$, $y(0)=1$, $y^{\prime}(0)=2$. Enter the solution polynomial with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"x^4+2*x+1","domain":{"variable":"x","excluded":[]},"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Integrate the forcing twice and retain both constants.

</details>

<details>
<summary>Hint 2</summary>

Assign the derivative constant using the initial slope.

</details>

<details>
<summary>Worked solution</summary>

The two constants represent initial slope and initial position.

1. Integration gives $y^{\prime}=4t^3+C_1$, so $C_1=2$.
2. A second integration gives $y=t^4+2t+C_2$, so $C_2=1$.
3. The polynomial is $x^4+2x+1$; differentiating twice and evaluating the initial data verifies all requirements.

</details>
