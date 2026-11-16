# Count records at three observation resolutions

*Medium · [Combinatorics](index.md)*

Two labeled six-sided dice show values in $\{1,2,3,4,5,6\}$. Return ordered\_records, unordered\_records and sum\_records: the numbers of distinct ordered pairs, unordered pairs allowing equal values, and possible sums. Count records, not their probabilities.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"ordered_records":"36","unordered_records":"21","sum_records":"11"},"checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

For unordered pairs, separate equal and unequal values.

</details>

<details>
<summary>Hint 2</summary>

Sums range from the smallest possible total to the largest.

</details>

<details>
<summary>Worked solution</summary>

Forgetting information changes the number and multiplicities of observation records.

1. Ordered pairs number thirty-six. Unordered records comprise six equal-value pairs and fifteen distinct-value pairs, giving twenty-one.
2. Possible sums are every integer from two through twelve, giving eleven records.
3. These record counts do not make the unordered pairs or sums equally probable; different records can have different numbers of ordered preimages.

</details>
