# Use the first omitted magnitude for a stated partial sum

*Medium · [Calculus](index.md)*

For the convergent series $\sum_{n=1}^{\infty}(-1)^{n+1}/n^3$, use the standard alternating-series estimate to give the error bound after the first three terms. Return the bound, not the partial sum.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":64},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The estimate uses the next term, not the last included one.

</details>

<details>
<summary>Hint 2</summary>

The positive magnitudes decrease to zero.

</details>

<details>
<summary>Worked solution</summary>

The remainder bound has a different index from the partial-sum endpoint.

1. The magnitudes 1/n^3 decrease to zero, so the alternating remainder estimate applies.
2. After three terms, the first omitted magnitude is 1/4^3.
3. Thus the absolute error is at most 1/64. This bound is not the value of the partial sum or the actual error.

</details>
