# Differentiate a logarithmic root expression on its valid domain

*Medium · [Calculus](index.md)*

For $f(x)=\ln\sqrt{1+x^2}$, find fprime(1).

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The logarithm argument is positive for every real input.

</details>

<details>
<summary>Hint 2</summary>

Rewrite the logarithm as one half times ln(1+x squared).

</details>

<details>
<summary>Worked solution</summary>

A positive inner expression supports the logarithm identity without branch changes.

1. Since 1+x^2 is positive, f(x)=(1/2)ln(1+x^2) on the full real line.
2. Differentiation gives x/(1+x^2).
3. At one the derivative is one half.

</details>
