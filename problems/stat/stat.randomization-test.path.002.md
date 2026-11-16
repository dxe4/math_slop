# Apply a prespecified absolute-value tail

*Medium · [Statistics and probability](index.md)*

Four labeled units have outcomes $0,0,1,1$ under a sharp no-effect null. Assign two units to treatment uniformly over the six labeled pairs. Use treatment mean minus control mean. The observed treated units are the two with outcome $1$. The prespecified two-sided rule is \|T\|≥\|T\_observed\|. Find the exact p-value.

| Given information | Value |
| --- | --- |
| outcomes | \[0,0,1,1\] |
| treated count | 2 |
| observed treated indices | \[2,3\] |
| sharp null | true |
| tail | abs(T) &gt;= abs(observed T) |

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

Equal outcome values do not make labeled-unit assignments identical.

</details>

<details>
<summary>Hint 2</summary>

Count both equally extreme signs under the stated absolute-value rule.

</details>

<details>
<summary>Worked solution</summary>

Two-sidedness is determined by the explicit extremeness rule, with labeled assignments counted correctly.

1. The six assignments give differences−$1,0,0,0,0,1$.
2. The observed difference is $1$. Two assignments have absolute difference at least 1, so $p=2/6=1/3$.

</details>
