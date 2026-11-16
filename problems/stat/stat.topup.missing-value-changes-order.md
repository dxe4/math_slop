# Recover a missing observation before finding the median

*Medium · [Statistics and probability](index.md)*

The five observations $2,5,x,9,14$ have mean $8$. Return missing\_value and median. Do not assume the displayed list is sorted.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"missing_value":"10","median":"9"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Convert the mean into the total of all five values.

</details>

<details>
<summary>Hint 2</summary>

Insert the recovered value into sorted order.

</details>

<details>
<summary>Worked solution</summary>

The mean fixes the missing value, but its rank must still be determined.

1. The total must be $5\cdot8=40$; the four known values sum to thirty.
2. Thus $x=10$. The sorted data are $2,5,9,10,14$.
3. The third observation is nine, giving the median.

</details>
