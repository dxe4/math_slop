# Transform both integrand and limits in a substitution

*Medium · [Calculus](index.md)*

Find $\int_0^1 2x(x^2+2)^3\,dx$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":65,"denominator":4},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Use u=x squared plus two, whose differential matches the outer factor.

</details>

<details>
<summary>Hint 2</summary>

Convert the endpoints before integrating in u.

</details>

<details>
<summary>Worked solution</summary>

A matched inner derivative gives a direct power integral on transformed bounds.

1. Put u=x^2+2, so du=2x dx and the bounds become two and three.
2. The integral becomes the integral of u^3 from two to three.
3. Its value is (3^4-2^4)/4=(81-16)/4=65/4.

</details>
