# Choose a decaying exponential branch

*Medium · [Differential equations problems](index.md)*

For $y^{\prime\prime}-y=0$, $y(0)=1$, $y^{\prime}(0)=-1$, report $y(1)$ with absolute error at most $10^{-6}$.

```answer
{"answer":{"kind":"numeric_tolerance","expected":"0.367879441171","absolute_tolerance":"1/1000000","checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the two exponential fundamental solutions.

</details>

<details>
<summary>Hint 2</summary>

The position and slope conditions can eliminate the growing branch.

</details>

<details>
<summary>Worked solution</summary>

The initial slope cancels the unstable fundamental solution.

1. Write $y=Ae^t+Be^{-t}$. The data give $A+B=1$ and $A-B=-1$, hence $A=0$, $B=1$.
2. The resulting $y=e^{-t}$ has $y^{\prime\prime}=y$ and the required initial data.
3. Thus $y(1)=1/e\approx0.367879441171$.

</details>
