# Use a singular integrating factor on its domain

*Medium · [Differential equations problems](index.md)*

On $t>0$, let $y^{\prime}+y/t=1/t^2$ and $y(1)=0$. Report $y(e)$ numerically, with absolute error at most $10^{-6}$.

```answer
{"answer":{"kind":"numeric_tolerance","expected":"0.367879441171","absolute_tolerance":"1/1000000","checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Multiplication by the time variable produces a product derivative.

</details>

<details>
<summary>Hint 2</summary>

Use the initial value to normalize the logarithm on the positive domain.

</details>

<details>
<summary>Worked solution</summary>

The integrating factor is the positive time coordinate.

1. Multiplication by $t$ gives $(ty)^{\prime}=1/t$, hence $ty=\log t+C$. The initial value gives $C=0$.
2. Thus $y=(\log t)/t$. Its derivative plus $y/t$ equals $(1-\log t)/t^2+(\log t)/t^2=1/t^2$.
3. At $t=e$, the value is $1/e\approx0.367879441171$.

</details>
