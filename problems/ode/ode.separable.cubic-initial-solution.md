# Retain the integration constant

*Easy · [Differential equations problems](index.md)*

Solve $y^{\prime}(t)=3t^2$, $y(0)=-1$. Enter its polynomial $p(x)$ with no excluded inputs.

```answer
{"answer":{"kind":"expression","expected":"x^3-1","domain":{"variable":"x","excluded":[]},"checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the power antiderivative rule.

</details>

<details>
<summary>Hint 2</summary>

The negative initial value determines the constant term.

</details>

<details>
<summary>Worked solution</summary>

The initial value fixes the otherwise free additive constant.

1. An antiderivative is $t^3+C$.
2. At zero, this equals $C=-1$, giving $p(x)=x^3-1$.
3. The derivative is $3t^2$ and the initial value is $-1$, as required.

</details>
