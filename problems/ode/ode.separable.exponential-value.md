# Evaluate an exponential initial-value solution

*Medium · [Differential equations problems](index.md)*

Solve $y^{\prime}=y$, $y(0)=1$, and report $y(1)$ numerically. Absolute error at most $10^{-6}$ is accepted.

```answer
{"answer":{"kind":"numeric_tolerance","expected":"2.718281828459","absolute_tolerance":"1/1000000","checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A nonzero solution has constant logarithmic derivative.

</details>

<details>
<summary>Hint 2</summary>

Use the initial value to choose the exponential scale before evaluation.

</details>

<details>
<summary>Worked solution</summary>

The logarithmic derivative determines the exponential solution.

1. Separation gives $y(t)=Ce^t$; the initial value makes $C=1$.
2. This function has derivative equal to itself and value one at zero.
3. Thus $y(1)=e\approx2.718281828459$, or $2.718282$ to six decimal places.

</details>
