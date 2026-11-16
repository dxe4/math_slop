# Determine an affine boundary solution

*Easy · [Differential equations problems](index.md)*

On $[0,2]$, solve $y^{\prime\prime}=0$ with $y(0)=1$, $y(2)=5$. Enter the representing polynomial $p(x)$, with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"2*x+1","domain":{"variable":"x","excluded":[]},"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A vanishing second derivative gives an affine function.

</details>

<details>
<summary>Hint 2</summary>

Use the two endpoint values to fix its slope and intercept.

</details>

<details>
<summary>Worked solution</summary>

The boundary data determine both constants of the affine family.

1. The general form is $y=at+b$.
2. The first condition gives $b=1$, and the second gives $2a+1=5$, so $a=2$.
3. The polynomial is $2x+1$, with zero second derivative and both prescribed endpoint values.

</details>
