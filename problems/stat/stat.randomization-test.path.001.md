# Enumerate every treatment assignment

*Medium · [Statistics and probability](index.md)*

Four units have fixed outcomes $0,1,2,3$ under a sharp no-effect null. Exactly two units are assigned treatment, uniformly over all six two-unit subsets. Use treatment mean minus control mean and the prespecified upper-tail rule T≥T\_observed. The observed treated outcomes are $2$ and $3$. Find the exact p-value using all assignments.

| Given information | Value |
| --- | --- |
| outcomes | \[0,1,2,3\] |
| treated count | 2 |
| observed treated indices | \[2,3\] |
| sharp null | true |
| tail | T &gt;= observed T |

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

List the six treated outcome pairs and compute each mean difference.

</details>

<details>
<summary>Hint 2</summary>

The observed difference is the largest possible; include equal statistics in the upper tail.

</details>

<details>
<summary>Worked solution</summary>

The actual randomized assignment space supplies the exact denominator.

1. The treated pairs{$0,1$},$\{0,2\},\{0,3\},\{1,2\},\{1,3\}$,{$2,3$}give differences−$2,-1,0,0,1,2$.
2. The observed difference is $2$ and only one of six equally likely assignments reaches at least $2$, giving $p=1/6$.

</details>
