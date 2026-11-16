# Compare two separate additions to a dataset

*Medium · [Statistics and probability](index.md)*

Begin with $10,12,13,19$. In one separate experiment append 14; in another append 7 to the original list. Return original\_range, inside\_range and outside\_range.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"original_range":"9","inside_range":"9","outside_range":"12"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Range uses only the minimum and maximum.

</details>

<details>
<summary>Hint 2</summary>

The two additions are alternatives, not successive changes.

</details>

<details>
<summary>Worked solution</summary>

Interior additions preserve the extremes, while an exterior addition can change one.

1. The original range is $19-10=9$.
2. Fourteen lies between the original extremes, so the first new range is also nine.
3. Appending seven instead makes the minimum seven, giving range $19-7=12$.

</details>
