# Normalize a quotient by its leading degree

*Medium · [Calculus](index.md)*

Find the limit as $x\to+\infty$ of (4x^3-x)/(2x^3+7x^2).

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Divide numerator and denominator by the same highest power.

</details>

<details>
<summary>Hint 2</summary>

Verify the normalized denominator has a nonzero limit.

</details>

<details>
<summary>Worked solution</summary>

Equal leading degrees leave a ratio of leading coefficients.

1. After division by x cubed the quotient is (4-1/x^2)/(2+7/x).
2. The numerator tends to four and the denominator to two.
3. The limit is two.

</details>
