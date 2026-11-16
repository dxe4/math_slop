# Combine a polynomial particular solution and a transient

*Medium · [Differential equations problems](index.md)*

For $y^{\prime}-y=t-1$, $y(0)=1$, report $y(1)$ numerically with absolute error at most $10^{-6}$.

```answer
{"answer":{"kind":"numeric_tolerance","expected":"1.718281828459","absolute_tolerance":"1/1000000","checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A linear particular solution can match the linear forcing.

</details>

<details>
<summary>Hint 2</summary>

Add the homogeneous exponential and then use the initial value.

</details>

<details>
<summary>Worked solution</summary>

A polynomial particular solution leaves one exponential constant to determine.

1. The function $-t$ is a particular solution, since its derivative minus itself is $t-1$.
2. Thus $y=Ce^t-t$, with $C=1$ from the initial value. Its substitution gives $y^{\prime}-y=t-1$.
3. Therefore $y(1)=e-1\approx1.718281828459$.

</details>
