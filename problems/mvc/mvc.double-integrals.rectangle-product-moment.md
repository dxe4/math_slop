# Separate a rectangular product integral

*Easy · [Multivariable calculus problems](index.md)*

For $D=[0,1]\times[0,2]$, compute $\iint_D xy\,dA$.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

The domain is a product and the integrand factors.

</details>

<details>
<summary>Hint 2</summary>

Alternatively integrate in $y$ first while treating $x$ as constant.

</details>

<details>
<summary>Worked solution</summary>

Continuous product integrands separate over rectangular domains.

1. The inner integral is $\int_0^2xy\,dy=2x$.
2. Integrating this from $x=0$ to $x=1$ gives $[x^2]_0^1$.
3. The required value is $1$.

</details>
