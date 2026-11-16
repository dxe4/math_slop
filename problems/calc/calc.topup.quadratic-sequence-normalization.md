# Compute a sequence quotient limit by dividing by index powers

*Medium · [Calculus](index.md)*

Find the limit of $a_n=(5n^2-n+2)/(2n^2+7)$ as n tends to infinity.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":2},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Divide every term by n squared.

</details>

<details>
<summary>Hint 2</summary>

The normalized denominator tends to a positive constant.

</details>

<details>
<summary>Worked solution</summary>

The sequence limit follows from reciprocal-index decay and quotient laws.

1. Normalization gives (5-1/n+2/n^2)/(2+7/n^2).
2. The numerator tends to five and denominator to two.
3. Therefore the sequence tends to five halves.

</details>
