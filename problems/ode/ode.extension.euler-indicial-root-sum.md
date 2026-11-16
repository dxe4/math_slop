# Read the indicial quadratic with the derivative shift

*Easy · [Differential equations problems](index.md)*

For $t^2y''+3ty'-4y=0$ on t&gt;0, substitute y=t^r. Find the sum of the two indicial roots.

```answer
{"answer":{"kind":"integer","expected":-2,"checker_scope":"Exact requested indicial or series coefficient only; formal and analytic justification are not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The second derivative contributes r\*(r-1).

</details>

<details>
<summary>Hint 2</summary>

Use the coefficient of r in the resulting monic quadratic.

</details>

<details>
<summary>Worked solution</summary>

Euler powers retain the first-derivative shift in the indicial equation.

1. Substitution gives r\*(r-1)+3r-4=0.
2. Thus the indicial polynomial is r^2+2r-4.
3. By the sum-of-roots relation, the roots sum to -2.

</details>
