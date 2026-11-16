# Recover a base point from a quadratic derivative

*Medium · [Calculus](index.md)*

For $f(t)=2t^2+3t$, the derivative defined by its difference quotient at t=a is 11. Find a.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Expand f(a+h)-f(a) before dividing by h.

</details>

<details>
<summary>Hint 2</summary>

Set the limiting constant part equal to the given slope.

</details>

<details>
<summary>Worked solution</summary>

The derivative definition can determine an unknown base point.

1. For nonzero h, the difference quotient simplifies to 4a+2h+3.
2. Its limit is 4a+3, so the supplied slope gives 4a+3=11.
3. Solving yields a=2.

</details>
