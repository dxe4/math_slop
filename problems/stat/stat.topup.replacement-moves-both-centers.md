# Track mean and median after a replacement

*Medium · [Statistics and probability](index.md)*

The data are $2,4,9,13$. Replace 13 by 1. Return mean\_before, median\_before, mean\_after and median\_after, using the average of two middle observations for an even count.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"mean_before":"7","median_before":"13/2","mean_after":"4","median_after":"3"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Calculate the original total and middle pair.

</details>

<details>
<summary>Hint 2</summary>

Re-sort after replacing the observation; its rank can change.

</details>

<details>
<summary>Worked solution</summary>

A replacement changes both the total and the ordered middle positions.

1. Originally the total is twenty-eight, giving mean seven, and the middle pair four and nine gives median $13/2$.
2. The new sorted list is $1,2,4,9$, with total sixteen and mean four.
3. Its middle pair is two and four, so its median is three.

</details>
