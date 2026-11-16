# Apply an explicitly stated percentile rank

*Easy · [Statistics and probability](index.md)*

For sorted values $2,5,7,11,20$, use nearest-rank: the percentile with fraction p is at rank ceiling(pn). Find the 60th percentile using $p=0.60$.

| Given information | Value |
| --- | --- |
| observations | \[2,5,7,11,20\] |
| p | 3/5 |

```answer
{"answer":{"kind":"rational","expected":{"numerator":7,"denominator":1},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

Use $p=60/100$ and $n=5$.

</details>

<details>
<summary>Hint 2</summary>

Number sorted positions starting at one.

</details>

<details>
<summary>Worked solution</summary>

A quantile algorithm must be applied as specified.

1. The rank is ceiling($(3/5)\times 5$)=$3$.
2. The third sorted value is $7$.

</details>
