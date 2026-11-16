# Factor a cubic before evaluating a removable limit

*Medium · [Calculus](index.md)*

Find the limit as $x\to-2$ of (x^3+8)/(x+2).

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Use the sum-of-cubes factorization.

</details>

<details>
<summary>Hint 2</summary>

Cancel only away from the excluded central input.

</details>

<details>
<summary>Worked solution</summary>

The punctured quotient agrees with a polynomial near the limiting point.

1. The numerator factors as (x+2)(x^2-2x+4).
2. For x different from negative two the quotient is x^2-2x+4.
3. Its value at negative two is twelve, which is the original punctured limit.

</details>
