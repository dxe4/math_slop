# Show that two centers do not determine the range

*Hard · [Statistics and probability](index.md)*

Construct two sets of five real observations, allowing repeated values, each with mean $6$ and median $5$, but with different ranges. Verify all claims and explain what this disproves.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The total of each list must be thirty.

</details>

<details>
<summary>Hint 2</summary>

Keep the middle value fixed while changing the extremes and compensating in the other entries.

</details>

<details>
<summary>Model proof</summary>

Different spreads can share the same mean and median.

1. One sorted list is $1,3,5,8,13$; its total is thirty, median five and range twelve.
2. A second sorted list is $0,5,5,5,15$; its total is thirty, median five and range fifteen.
3. Both means are six, but the ranges differ, so knowing the mean and median does not determine the range.

**Self-assessment rubric**

- Verify that each list has five values and total thirty.
- Identify the middle observation in each sorted list.
- Compute distinct ranges and state the resulting nonuniqueness.

</details>
