# Track a Laurent index after removing lower Taylor terms

*Medium · [Complex analysis problems](index.md)*

Find the coefficient of $z^{-2}$ in the Laurent expansion at zero of (e^z-1-z)/z^5.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Exact requested coefficient or bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Undo the shift caused by division by z^5.

</details>

<details>
<summary>Hint 2</summary>

Check that the removed Taylor terms do not include the required numerator degree.

</details>

<details>
<summary>Worked solution</summary>

A Laurent index becomes a Taylor index after the known power shift.

1. A numerator term of degree k becomes a Laurent term of degree k-5.
2. To obtain degree negative two, choose k=3.
3. The numerator's cubic coefficient is 1/3!=1/6.

</details>
