# Keep the last included exponent in a finite geometric sum

*Medium · [Calculus](index.md)*

Find the finite sum $\sum_{k=0}^{5}(-1/2)^k$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":21,"denominator":32},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

There are six terms because the first index is zero.

</details>

<details>
<summary>Hint 2</summary>

The finite formula contains the first omitted power, exponent six.

</details>

<details>
<summary>Worked solution</summary>

Finite geometric evaluation uses the endpoint count rather than an infinite limit.

1. The finite formula gives \[1-(-1/2)^6\]/\[1-(-1/2)\].
2. This is (1-1/64)/(3/2).
3. The result is 21/32.

</details>
