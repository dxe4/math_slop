# Count free choices after subset restrictions

*Medium · [Set theory](index.md)*

A finite set A has $6$ elements, including three distinct elements a,b,c. How many subsets of A contain a and b but do not contain c?

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Three membership decisions are already fixed.

</details>

<details>
<summary>Hint 2</summary>

Each remaining element can independently be included or excluded.

</details>

<details>
<summary>Worked solution</summary>

Power-set counting applies to the still-free elements.

1. The inclusion of a and b and exclusion of c are forced.
2. Three other elements remain, each with two independent choices.
3. The count is $2^3=8$.

</details>
