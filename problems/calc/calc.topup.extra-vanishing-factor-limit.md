# Track the remaining zero after one factor cancellation

*Medium · [Calculus](index.md)*

Find the limit as $x\to1$ of (x-1)^2/(x^2-1).

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Factor the denominator and cancel only one copy of x-1.

</details>

<details>
<summary>Hint 2</summary>

The remaining denominator is nonzero near the limiting point.

</details>

<details>
<summary>Worked solution</summary>

The order of vanishing determines what remains after cancellation.

1. For x not equal to one or negative one, the quotient equals (x-1)/(x+1).
2. As x tends to one, its numerator tends to zero and denominator to two.
3. The limit is zero; the original missing input is not silently filled.

</details>
