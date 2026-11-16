# Count observations at or below a tied percentile

*Medium · [Statistics and probability](index.md)*

Use nearest-rank percentiles: rank=ceiling(np). For sorted data $1,1,1,4,4,4,4,10$, return percentile\_75 and fraction\_at\_or\_below that percentile.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"percentile_75":"4","fraction_at_or_below":"7/8"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Locate the sixth observation.

</details>

<details>
<summary>Hint 2</summary>

Count every observation equal to the percentile, not just those preceding its rank.

</details>

<details>
<summary>Worked solution</summary>

Ties make the fraction at or below a percentile exceed its nominal rank fraction.

1. The rank is ceiling of six, and the sixth value is four.
2. Seven observations are at most four.
3. Thus the percentile is four and the fraction at or below it is seven eighths, rather than exactly three quarters.

</details>
