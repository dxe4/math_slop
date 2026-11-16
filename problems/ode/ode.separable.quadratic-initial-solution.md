# Integrate a prescribed slope

*Easy · [Differential equations problems](index.md)*

Solve $y^{\prime}(t)=2t$, $y(0)=1$. Enter the solution polynomial $p(x)$ with $y(t)=p(t)$ and no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"x^2+1","domain":{"variable":"x","excluded":[]},"checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Integrate the derivative before imposing the initial value.

</details>

<details>
<summary>Hint 2</summary>

The integration constant is fixed by evaluation at the initial point.

</details>

<details>
<summary>Worked solution</summary>

One integration and the initial condition determine the solution.

1. Integration gives $y(t)=t^2+C$.
2. The initial condition gives $C=1$, so $p(x)=x^2+1$.
3. Differentiating yields $y^{\prime}(t)=2t$, and evaluation at zero yields one, verifying both requirements.

</details>
