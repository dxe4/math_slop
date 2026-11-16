# Recognize a product derivative

*Medium · [Differential equations problems](index.md)*

On the domain $t>0$, solve $ty^{\prime}+y=3t^2$ with $y(1)=1$. Report the polynomial $p(x)$ giving $y(t)=p(t)$ on that domain; the polynomial itself has no excluded inputs.

```answer
{"answer":{"kind":"expression","expected":"x^2","domain":{"variable":"x","excluded":[]},"checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The left side is the derivative of a product.

</details>

<details>
<summary>Hint 2</summary>

After integration, use the initial point before dividing by the time variable.

</details>

<details>
<summary>Worked solution</summary>

Integrating the product derivative respects the nonzero equation domain.

1. The equation is $(ty)^{\prime}=3t^2$, so $ty=t^3+C$.
2. At $t=1$, the initial value gives $C=0$, hence $y=t^2$ for $t>0$.
3. Substitution gives $t(2t)+t^2=3t^2$. The representing polynomial is $p(x)=x^2$; the ODE domain remains $t>0$.

</details>
