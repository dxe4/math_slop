# Combine sample means with unequal counts

*Medium · [Statistics and probability](index.md)*

Group A has $3$ observations with mean $4$; disjoint group B has $5$ observations with mean $12$. Find the mean of all eight observations.

```answer
{"answer":{"kind":"rational","expected":{"numerator":9,"denominator":1},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Recover each group total.

</details>

<details>
<summary>Hint 2</summary>

Divide the combined total by the combined count.

</details>

<details>
<summary>Worked solution</summary>

Group means must be weighted by the number of observations.

1. The group totals are $3\cdot4=12$ and $5\cdot12=60$.
2. The combined total is seventy-two for eight observations.
3. The mean is $72/8=9$; averaging four and twelve without weights would give the wrong result.

</details>
