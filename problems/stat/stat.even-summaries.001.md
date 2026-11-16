# Find the two middle observations

*Easy · [Statistics and probability](index.md)*

The four observations are $8, 2, 5, 9$. Find their mean and median. For an even number of observations, define the median as the mean of the two middle observations in sorted order. Give exact values.

| Observation number | Value |
| --- | --- |
| 1 | 8 |
| 2 | 2 |
| 3 | 5 |
| 4 | 9 |

```answer
{"answer":{"kind":"record_of_rationals","expected":{"mean":"6","median":"13/2"},"checker_scope":"Exact numeric fields for the stated data. This check does not assess a written justification or a population inference."}}
```

<details>
<summary>Hint 1</summary>

Sort all four values before deciding which observations are in the middle.

</details>

<details>
<summary>Hint 2</summary>

The two middle sorted values have positions two and three; average those two values.

</details>

<details>
<summary>Worked solution</summary>

With an even count, the specified median convention averages the two central positions.

1. The sum is 8 + 2 + 5 + 9 = 24, so the mean is $24/4 = 6$.
2. The sorted list is $2, 5, 8, 9$. The median is $(5 + 8)/2 = 13/2$.

</details>
