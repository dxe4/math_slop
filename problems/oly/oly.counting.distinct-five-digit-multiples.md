# Count a divisible numeral with distinct digits

*Medium · [Original olympiad-style problems](index.md)*

How many five-digit decimal integers have all digits distinct and are divisible by $5$?

```answer
{"answer":{"kind":"integer","expected":"5712","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

The last digit must be zero or five, giving disjoint cases.

</details>

<details>
<summary>Hint 2</summary>

The leading digit restriction differs between those two cases.

</details>

<details>
<summary>Worked solution</summary>

The terminal digit controls the available nonzero leading choices.

1. If the last digit is zero, the first digit has 9 choices and the next three have 8,7,6 choices, for 3024 numbers.
2. If the last digit is five, the first digit has 8 choices, excluding zero and five. The next positions have 8,7,6 choices, for 2688 numbers.
3. The disjoint total is $3024+2688=5712$.

</details>
