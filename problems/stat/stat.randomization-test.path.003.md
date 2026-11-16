# Read an exact null frequency table

*Easy · [Statistics and probability](index.md)*

A complete exact null enumeration has eight equally likely assignments. Statistic values $0,1$ and $2$ occur $4,3$ and $1$ times respectively. The observed value is $1$ and the prespecified upper tail includes values at least $1$. Find the exact p-value.

| Given information | Value |
| --- | --- |
| frequencies | {"0":4,"1":3,"2":1} |
| observed | 1 |
| tail | value &gt;= observed |
| equally likely assignments | true |

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

Include assignments equal to the observed statistic.

</details>

<details>
<summary>Hint 2</summary>

Add the frequencies at values $1$ and $2$, then divide by eight.

</details>

<details>
<summary>Worked solution</summary>

An exact tail probability sums all assignments meeting the tail condition, including ties.

1. The upper tail contains $3+1=4$ assignments.
2. Its null probability is $4/8=1/2$.

</details>
