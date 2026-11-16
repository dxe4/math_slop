# Evaluate a quotient-rule derivative at one point

*Medium · [Calculus](index.md)*

For $f(x)=(2x+1)/(x^2+1)$, find fprime(1).

```answer
{"answer":{"kind":"rational","expected":{"numerator":-1,"denominator":2},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Keep numerator derivative, denominator derivative and the denominator square distinct.

</details>

<details>
<summary>Hint 2</summary>

Substitute only after forming the quotient-rule numerator.

</details>

<details>
<summary>Worked solution</summary>

A point evaluation avoids treating a rational derivative as an unrestricted polynomial.

1. The derivative is \[2(x^2+1)-(2x+1)2x\]/(x^2+1)^2.
2. At one the numerator is four minus six, or negative two, and the denominator is four.
3. The derivative value is negative one half.

</details>
