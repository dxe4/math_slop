# Count alternatives with different record formats

*Medium · [Combinatorics](index.md)*

A code is either three distinct letters from $\{A,B,C,D\}$ in order, or two distinct digits from {0,1,2,3,4} in order. Leading zero is allowed in the digit format. How many codes exist?

```answer
{"answer":{"kind":"integer","expected":"44","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Count each format with its own ordered selection product.

</details>

<details>
<summary>Hint 2</summary>

The letter and digit formats cannot produce the same record.

</details>

<details>
<summary>Worked solution</summary>

Different disjoint formats contribute by addition rather than a common product.

1. The letter format has $4\cdot3\cdot2=24$ codes.
2. The digit format has $5\cdot4=20$ codes, since zero is allowed in either position.
3. The formats are disjoint, giving $24+20=44$.

</details>
