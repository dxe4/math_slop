# Initial data can eliminate a transient

*Medium · [Differential equations problems](index.md)*

Solve $y^{\prime}+y=2t+1$, $y(0)=-1$. Enter the solution polynomial $p(x)$ with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"2*x-1","domain":{"variable":"x","excluded":[]},"checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Try a linear particular solution and retain the possible homogeneous term.

</details>

<details>
<summary>Hint 2</summary>

The initial condition can make the homogeneous coefficient vanish.

</details>

<details>
<summary>Worked solution</summary>

The chosen initial value selects exactly the polynomial particular solution.

1. A linear particular solution is $2t-1$, because its derivative plus itself is $2+(2t-1)=2t+1$.
2. The general solution is $2t-1+Ce^{-t}$. At zero, the prescribed value forces $C=0$.
3. Thus $p(x)=2x-1$, which satisfies both the equation and initial condition.

</details>
