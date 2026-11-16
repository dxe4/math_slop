# Recover an observation from its mean

*Easy · [Statistics and probability](index.md)*

Three observations have mean $5$. Two observations are $2$ and $6$. Find the third observation.

| Given information | Value |
| --- | --- |
| count | 3 |
| mean | 5 |
| known | \[2,6\] |

```answer
{"answer":{"kind":"rational","expected":{"numerator":7,"denominator":1},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

Multiply the mean by the number of observations to get the required total.

</details>

<details>
<summary>Hint 2</summary>

Subtract the sum of the known observations from that total.

</details>

<details>
<summary>Worked solution</summary>

The mean-count relation can be used in reverse.

1. The required total is $3\times 5=15$.
2. The known total is $2+6=8$, leaving $15-8=7$.

</details>
