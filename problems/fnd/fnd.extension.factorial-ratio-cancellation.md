# Cancel a factorial ratio before multiplying

*Medium · [Foundations bridge](index.md)*

For positive integer n define n!=1·2·…·n. Evaluate $8!/(6!\,2!)$ exactly.

```answer
{"answer":{"kind":"integer","expected":28,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Expand only far enough to expose the common 6! factor.

</details>

<details>
<summary>Hint 2</summary>

Keep the remaining 2! factor in the denominator.

</details>

<details>
<summary>Worked solution</summary>

A quotient of factorial products can collapse to a short calculation.

1. Write 8!=8×7×6! and 2!=2.
2. Cancel the nonzero factor 6! to get (8×7)/2.
3. The exact value is 28.

</details>
