# Count the plants with flowers

*Easy · [Statistics and probability](index.md)*

Fourteen plants are inspected on one day. Five have no flowers; every remaining plant has at least one flower. What proportion of the inspected plants have at least one flower? Give an exact fraction.

| Inspection information | Plant count |
| --- | --- |
| All inspected plants | 14 |
| No flowers | 5 |

```answer
{"answer":{"kind":"rational","expected":{"numerator":9,"denominator":14},"checker_scope":"Exact arithmetic for the stated finite data or explicitly specified probability model. This check does not assess a written justification or a population inference."}}
```

<details>
<summary>Hint 1</summary>

A plant either has at least one flower or has no flowers on this inspection day.

</details>

<details>
<summary>Hint 2</summary>

Find the number in the requested category by subtracting from fourteen.

</details>

<details>
<summary>Worked solution</summary>

A complementary count uses an explicit exhaustive split of the cases.

1. There are $14 - 5 = 9$ plants with at least one flower.
2. Their proportion among the fourteen inspected plants is $9/14$.

</details>
