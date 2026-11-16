# Read the integer degree threshold from fractional growth

*Easy · [Complex analysis problems](index.md)*

An entire function satisfies $|f(z)|\le C(1+|z|^{7/2})$ for some fixed C. Cauchy's estimates imply f is a polynomial. What is the largest degree allowed by this estimate?

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested consequence or bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Compare an integer coefficient index with the real growth exponent.

</details>

<details>
<summary>Hint 2</summary>

A coefficient must vanish if its Cauchy bound tends to zero on expanding circles.

</details>

<details>
<summary>Worked solution</summary>

The integer degree cannot exceed the growth exponent.

1. For n&gt;=4, Cauchy's estimate on radius R gives \|a\_n\|&lt;=C\*(1+R^(7/2))/R^n.
2. This tends to zero as R tends to infinity, so every coefficient of index at least four vanishes.
3. Degree three is allowed, as shown by f(z)=z^3 with a suitable C.

</details>
