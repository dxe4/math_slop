# Check a rational limit on the negative infinite direction

*Medium · [Calculus](index.md)*

Find the limit as $x\to-\infty$ of (3x^2+1)/(x^4+2).

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Normalize by the fourth power rather than the second.

</details>

<details>
<summary>Hint 2</summary>

Reciprocal even powers vanish on either infinite direction.

</details>

<details>
<summary>Worked solution</summary>

The larger denominator degree forces a vanishing quotient.

1. Divide by x^4 to obtain (3/x^2+1/x^4)/(1+2/x^4).
2. Both numerator terms tend to zero, while the denominator tends to one.
3. Thus the limit is zero, also on the specified negative infinite direction.

</details>
