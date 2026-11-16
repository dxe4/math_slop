# Match two exponent lattices in a product series

*Medium · [Complex analysis problems](index.md)*

Find the coefficient of $z^8$ in the Taylor expansion at zero of e^(z^2)/(1-z^3).

```answer
{"answer":{"kind":"rational","expected":{"numerator":25,"denominator":24},"checker_scope":"Exact requested coefficient or bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Expand each factor with its own exponent spacing.

</details>

<details>
<summary>Hint 2</summary>

Solve 2a+3b=8 with nonnegative integers a,b.

</details>

<details>
<summary>Worked solution</summary>

Only finitely many exponent pairs contribute to a fixed coefficient.

1. The product is sum over a,b&gt;=0 of z^(2a+3b)/a!.
2. For exponent eight, the only pairs are (a,b)=(4,0) and (1,2).
3. The coefficient is 1/4!+1/1!=25/24.

</details>
