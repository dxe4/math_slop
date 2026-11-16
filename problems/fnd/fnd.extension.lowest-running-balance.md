# Track an intermediate minimum rather than only the final value

*Medium · [Foundations bridge](index.md)*

A balance begins at 4 units and then changes by $-9,+2,-6,+8$ units in that order. Negative balances are allowed. What is the lowest balance reached, including the start?

```answer
{"answer":{"kind":"integer","expected":-9,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Compute every running balance.

</details>

<details>
<summary>Hint 2</summary>

Compare the whole list, not just the net change.

</details>

<details>
<summary>Worked solution</summary>

The minimum can occur before a later recovery.

1. The running balances are 4,−5,−3,−9,−1.
2. The lowest point occurs after the −6 change.
3. That minimum balance is −9 units.

</details>
