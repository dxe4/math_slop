# Count one choice in two stages

*Medium · [Original Putnam-style training](index.md)*

Find $\sum_{k=0}^{10}\binom{10}{k}^2$.

```answer
{"answer":{"kind":"integer","expected":"184756","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Split a twenty-element set into two ten-element groups.

</details>

<details>
<summary>Hint 2</summary>

Count ten-element selections according to how many come from the first group.

</details>

<details>
<summary>Worked solution</summary>

A single subset count has a disjoint decomposition indexed by k.

1. The total number of ten-element subsets is $\binom{20}{10}$.
2. If k come from the first group, the count is $\binom{10}{k}\binom{10}{10-k}=\binom{10}{k}^2$. These cases partition all selections.
3. Therefore the sum is $\binom{20}{10}=184756$.

</details>
