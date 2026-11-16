# Check nested objects before counting proper subsets

*Hard · [Set theory](index.md)*

Treat numerals as atomic labels. Let $T=\{\{1\},\{2\},3\}$. Of the five candidates $\{1\}$, $\{\{1\}\}$, $\varnothing$, $\{\{1\},\{2\}\}$ and $\{3,\{2\}\}$, how many are proper subsets of T?

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

For each candidate inspect its elements one brace level down.

</details>

<details>
<summary>Hint 2</summary>

After verifying containment, check that the candidate is not the whole three-element set T.

</details>

<details>
<summary>Worked solution</summary>

Proper subset tests combine element-level containment with inequality of the sets.

1. The candidate {1} fails because the atomic label one is not an element of T.
2. The other four candidates use only the listed objects {1},{2},3, so each is a subset.
3. Each has fewer than three members and therefore differs from T. Exactly $4$ candidates are proper subsets.

</details>
