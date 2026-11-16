# Calculate endpoints from a supplied interval rule

*Easy · [Statistics and probability](index.md)*

A stated interval procedure uses estimate±2×SE. With estimate $10$ and SE2, find lower and upper. Assume the rule’s modeling conditions are satisfied; only its endpoints are requested.

| Given information | Value |
| --- | --- |
| estimate | 10 |
| standard error | 2 |
| critical | 2 |
| model conditions assumed | true |

```answer
{"answer":{"kind":"record_of_rationals","expected":{"lower":"6","upper":"14"},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

First multiply the standard error by the supplied critical value.

</details>

<details>
<summary>Hint 2</summary>

Subtract and add the same margin.

</details>

<details>
<summary>Worked solution</summary>

The critical multiplier and standard error together determine the margin.

1. The margin is $2\times 2=4$.
2. The endpoints are $10-4=6$ and $10+4=14$.

</details>
