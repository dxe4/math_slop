# Split an absolute-value integral at its sign change

*Medium · [Calculus](index.md)*

Find $\int_{-2}^{1}|x|\,dx$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":2},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The absolute-value formula changes at zero.

</details>

<details>
<summary>Hint 2</summary>

Use the positive area of each triangular part.

</details>

<details>
<summary>Worked solution</summary>

A sign split makes both contributions to absolute area nonnegative.

1. On \[-2,0\] the integrand is -x, with integral two.
2. On \[0,1\] it is x, with integral one half.
3. The total absolute area is five halves.

</details>
