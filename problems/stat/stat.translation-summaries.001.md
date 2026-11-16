# Shift every observation by the same amount

*Easy · [Statistics and probability](index.md)*

The original observations are $2, 4, 4, 10$. Add $3$ to every observation to form a new list. Find the mean and median before and after the change. For an even count, the median is the mean of the two middle sorted observations.

| Given quantity | Value |
| --- | --- |
| Original observations | 2, 4, 4, 10 |
| Amount added to every observation | 3 |

```answer
{"answer":{"kind":"record_of_rationals","expected":{"mean_before":"5","median_before":"4","mean_after":"8","median_after":"7"},"checker_scope":"Exact numeric fields for the stated data. This check does not assess a written justification or a population inference."}}
```

<details>
<summary>Hint 1</summary>

Adding $3$ to each of four observations increases their total by $4 \times  3$.

</details>

<details>
<summary>Hint 2</summary>

Adding the same number to every observation keeps their order, so both middle observations move by that number.

</details>

<details>
<summary>Worked solution</summary>

Translating a whole dataset shifts its location summaries by the same amount.

1. The original total is $20$, giving mean $20/4 = 5$, and the two middle values are both $4$, giving median $4$.
2. The new list is $5, 7, 7, 13$. Its total is $32$ and its mean is $8$; its two middle values give median $7$.
3. Both summaries increase by exactly $3$ when every observation increases by $3$.

</details>
