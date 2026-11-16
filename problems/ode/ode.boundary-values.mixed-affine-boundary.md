# Combine a derivative and a position condition

*Easy · [Differential equations problems](index.md)*

On $[0,1]$, solve $y^{\prime\prime}=0$ with $y^{\prime}(0)=1$ and $y(1)=0$. Enter the representing polynomial with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"x-1","domain":{"variable":"x","excluded":[]},"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A vanishing second derivative makes the first derivative constant.

</details>

<details>
<summary>Hint 2</summary>

Use the derivative condition for the slope before imposing the endpoint position.

</details>

<details>
<summary>Worked solution</summary>

Mixed boundary data still determine the affine family uniquely.

1. Write $y=at+b$. The derivative condition gives $a=1$.
2. The endpoint condition gives $1+b=0$, hence $b=-1$.
3. The polynomial $x-1$ has zero second derivative, derivative one at zero and value zero at one.

</details>
