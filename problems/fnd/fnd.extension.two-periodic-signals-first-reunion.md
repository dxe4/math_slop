# Find the first simultaneous repeat

*Medium · [Foundations bridge](index.md)*

Two signals sound together at time zero and then repeat every $12$ and $18$ minutes respectively. At what positive time in minutes do they first sound together again?

```answer
{"answer":{"kind":"integer","expected":36,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

A reunion time must be a multiple of both periods.

</details>

<details>
<summary>Hint 2</summary>

Find the least positive common multiple.

</details>

<details>
<summary>Worked solution</summary>

The first common repeat is controlled by shared multiples rather than the sum of the periods.

1. The prime factorizations are 12=2²×3 and 18=2×3².
2. The least common multiple is 2²×3²=36.
3. Both signals sound at 36 minutes, and no smaller positive common multiple exists.

</details>
