# Read a percentile interval from supplied bootstrap output

*Medium · [Statistics and probability](index.md)*

Ten sorted bootstrap statistics are $1,1,2,3,5,8,13,21,34,55$. Define an equal-tail nominal 80% percentile interval using ranks ceiling(10p) for p=0.1 and 0.9. Return lower and upper. The supplied list alone gives no coverage guarantee.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"lower":"1","upper":"34"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Use the stated ranks without interpolating.

</details>

<details>
<summary>Hint 2</summary>

Read positions one and nine in the supplied sorted list.

</details>

<details>
<summary>Worked solution</summary>

The endpoint calculation is separate from the statistical justification of coverage.

1. The lower rank is ceiling of one, and the upper rank is ceiling of nine.
2. The observations at those ranks are one and thirty-four.
3. Thus the requested nominal percentile interval is $[1,34]$, without any automatic population coverage conclusion.

</details>
