# Find the unlisted response count

*Easy · [Statistics and probability](index.md)*

A survey asks $25$ people whether they read a newspaper yesterday. Everyone answers exactly yes or no. Seven people answer no. What proportion answer yes? Give an exact fraction.

| Response information | Count |
| --- | --- |
| All responses | 25 |
| No | 7 |

```answer
{"answer":{"kind":"rational","expected":{"numerator":18,"denominator":25},"checker_scope":"Exact arithmetic for the stated finite data or explicitly specified probability model. This check does not assess a written justification or a population inference."}}
```

<details>
<summary>Hint 1</summary>

Because the two response categories are exhaustive, their counts add to $25$.

</details>

<details>
<summary>Hint 2</summary>

Subtract the no count from the total before forming the yes proportion.

</details>

<details>
<summary>Worked solution</summary>

Recover the count of a complementary category from the total, then divide by that same total.

1. The yes count is $25 - 7 = 18$.
2. The yes proportion among all respondents is $18/25$.

</details>
