# Read a coefficient bound at the correct radius

*Easy · [Complex analysis problems](index.md)*

A function f is holomorphic on a neighborhood of $|z|\le2$, with \|f(z)\|&lt;=6 on \|z\|=2. What upper bound does Cauchy's coefficient estimate give for the absolute value of the coefficient of z^3 at zero?

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":4},"checker_scope":"Exact requested coefficient or bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Use the coefficient estimate rather than the derivative estimate.

</details>

<details>
<summary>Hint 2</summary>

Divide the boundary bound by the radius raised to the coefficient index.

</details>

<details>
<summary>Worked solution</summary>

Cauchy's integral formula controls the normalized coefficient directly.

1. Write f(z)=sum a\_n z^n near zero.
2. Cauchy's coefficient formula gives \|a\_3\|&lt;=6/2^3.
3. The requested bound is 3/4.

</details>
