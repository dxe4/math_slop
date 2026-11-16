# Read a two-term principal part

*Medium · [Complex analysis problems](index.md)*

For $0<|z|<1$, find the coefficients of $z^{-2}$ and $z^{-1}$ in $1/(z^2(1-z))$. Enter them in that order as a vector.

```answer
{"answer":{"kind":"vector","expected":[1,1],"checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Expand the analytic geometric factor first.

</details>

<details>
<summary>Hint 2</summary>

Shift every exponent by the denominator power outside it.

</details>

<details>
<summary>Worked solution</summary>

A geometric Taylor series becomes a Laurent series after an exponent shift.

1. For $|z|<1$, $1/(1-z)=1+z+z^2+\cdots$.
2. Division by $z^2$ gives $z^{-2}+z^{-1}+1+z+\cdots$.
3. The requested coefficient vector is $[1,1]$.

</details>
