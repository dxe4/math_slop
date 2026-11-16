# Find a sharp tail index after subtracting the limit

*Medium · [Real analysis](index.md)*

For $a_n=(2n+1)/(n+3)$, find the least positive N such that \|a\_n-2\|&lt;1/20 for every n&gt;=N.

```answer
{"answer":{"kind":"integer","expected":"98","checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Simplify the error before solving the inequality.

</details>

<details>
<summary>Hint 2</summary>

The boundary index with equality does not belong to a strict tail.

</details>

<details>
<summary>Worked solution</summary>

A rational error simplifies to a decreasing reciprocal.

1. Subtracting two gives a\_n-2=-5/(n+3), so the error is 5/(n+3).
2. It is below one twentieth exactly when n+3&gt;100, or n&gt;97.
3. Thus N=98 is the least valid index; n=97 has error exactly one twentieth.

</details>
