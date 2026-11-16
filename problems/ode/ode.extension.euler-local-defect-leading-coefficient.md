# Separate a local truncation defect from a global error

*Medium · [Differential equations problems](index.md)*

For $y'=t+y$, y(0)=0, take one forward Euler step of size h, obtaining Y\_1. Find the limit as h decreases to zero of (y(h)-Y\_1)/h^2.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested finite numerical-method quantity only; a numerical iterate is not treated as an exact ODE solution."}}
```

<details>
<summary>Hint 1</summary>

The first numerical slope is zero.

</details>

<details>
<summary>Hint 2</summary>

Determine the exact solution or its quadratic Taylor coefficient.

</details>

<details>
<summary>Worked solution</summary>

A one-step defect begins one order above the method's global order.

1. The exact solution is y(t)=exp(t)-t-1, verified by substitution and the initial value.
2. Forward Euler gives Y\_1=0+h\*(0+0)=0.
3. The expansion y(h)=h^2/2+O(h^3) yields the requested limit 1/2.

</details>
