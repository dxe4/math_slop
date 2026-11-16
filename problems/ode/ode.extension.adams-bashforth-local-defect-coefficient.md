# Keep exact starting values in a multistep defect

*Medium · [Differential equations problems](index.md)*

For y'=y, use exact starting values Y\_0=1 and Y\_1=exp(h). The two-step Adams-Bashforth update is $Y_2=Y_1+(h/2)(3Y_1-Y_0)$. Find the limit of (exp(2h)-Y\_2)/h^3 as h decreases to zero.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":12},"checker_scope":"Exact requested finite numerical-method quantity only; a numerical iterate is not treated as an exact ODE solution."}}
```

<details>
<summary>Hint 1</summary>

Expand the actual two-step formula, retaining the factor multiplying exp(h).

</details>

<details>
<summary>Hint 2</summary>

This is a local defect with exact starts, not an accumulated-error claim.

</details>

<details>
<summary>Worked solution</summary>

Exact starting data isolate the leading multistep truncation term.

1. The update is Y\_2=(1+3h/2)\*exp(h)-h/2.
2. Its expansion is 1+2h+2h^2+(11/12)h^3+O(h^4), while exp(2h)=1+2h+2h^2+(4/3)h^3+O(h^4).
3. Subtracting gives leading coefficient 4/3-11/12=5/12.

</details>
