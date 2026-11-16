# Handle a repeated characteristic root

*Medium · [Differential equations problems](index.md)*

For $y^{\prime\prime}-2y^{\prime}+y=0$, $y(0)=0$, $y^{\prime}(0)=1$, report $y(1)$ with absolute error at most $10^{-6}$.

```answer
{"answer":{"kind":"numeric_tolerance","expected":"2.718281828459","absolute_tolerance":"1/1000000","checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A repeated characteristic root needs a time factor in its second independent solution.

</details>

<details>
<summary>Hint 2</summary>

Impose both initial data after writing the full repeated-root family.

</details>

<details>
<summary>Worked solution</summary>

The repeated root produces a linear polynomial multiplying an exponential.

1. The characteristic polynomial is $(r-1)^2$, so $y=(A+Bt)e^t$. The data give $A=0$, $B=1$.
2. For $y=te^t$, $y^{\prime}=(1+t)e^t$ and $y^{\prime\prime}=(2+t)e^t$, whose substitution makes the equation vanish.
3. Therefore $y(1)=e\approx2.718281828459$.

</details>
