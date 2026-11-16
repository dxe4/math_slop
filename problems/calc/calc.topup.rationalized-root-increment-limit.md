# Rationalize a square-root increment before taking a limit

*Medium · [Calculus](index.md)*

Find the limit as $x\to0$ of (sqrt(9+x)-3)/x, on its real punctured domain.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Multiply numerator and denominator by the conjugate.

</details>

<details>
<summary>Hint 2</summary>

After cancellation, the remaining denominator has a positive limit.

</details>

<details>
<summary>Worked solution</summary>

Conjugate multiplication removes the indeterminate increment.

1. For nonzero x near zero, rationalization gives 1/(sqrt(9+x)+3).
2. The real square root is defined throughout a neighborhood of zero and tends to three.
3. The new denominator tends to six, so the limit is one sixth.

</details>
