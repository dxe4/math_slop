# Distinguish range from population variance

*Medium · [Statistics and probability](index.md)*

Lists A=$0,5,5,10$ and B=$0,0,10,10$ both have mean 5. Use population variance, dividing squared deviations by 4. Return common\_range, variance\_A and variance\_B.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"common_range":"10","variance_A":"25/2","variance_B":"25"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Both lists have the same extreme values.

</details>

<details>
<summary>Hint 2</summary>

Variance uses every squared deviation, not only the extremes.

</details>

<details>
<summary>Worked solution</summary>

The distribution inside a fixed range affects its variance.

1. Each list has minimum zero and maximum ten, so both ranges are ten.
2. For A the squared deviations sum to $25+0+0+25=50$, giving variance $50/4=25/2$.
3. For B all four squared deviations are twenty-five, giving variance twenty-five; equal ranges need not give equal variances.

</details>
