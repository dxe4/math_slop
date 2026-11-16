# Evaluate an improper integral through finite truncations

*Medium · [Calculus](index.md)*

Find $\int_1^{\infty}x^{-3}\,dx$ using the limit of finite upper-bound integrals.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Integrate on \[1,R\] before taking any limit.

</details>

<details>
<summary>Hint 2</summary>

The remaining inverse-square endpoint term vanishes.

</details>

<details>
<summary>Worked solution</summary>

An improper integral is a limit of ordinary finite-interval evaluations.

1. An antiderivative is -1/(2x^2).
2. The truncated integral is 1/2-1/(2R^2) for R&gt;1.
3. As R tends to infinity the second term vanishes, giving integral one half.

</details>
