# Recover an entire function from growth and a short jet

*Medium · [Complex analysis problems](index.md)*

An entire function satisfies $|f(z)|\le10(1+|z|^2)$, f(0)=0, f'(0)=2 and f''(0)=6. Find f(3).

```answer
{"answer":{"kind":"integer","expected":33,"checker_scope":"Exact requested consequence or bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Use expanding Cauchy circles to eliminate every term of degree above two.

</details>

<details>
<summary>Hint 2</summary>

Convert the second derivative into its Taylor coefficient.

</details>

<details>
<summary>Worked solution</summary>

Growth closes the otherwise incomplete Taylor data.

1. For every n&gt;=3, the coefficient estimate \|a\_n\|&lt;=10\*(1+R^2)/R^n tends to zero as R tends to infinity.
2. Hence f is a polynomial of degree at most two, and its supplied jet gives f(z)=2z+3z^2.
3. Therefore f(3)=6+27=33.

</details>
