# Compute a union and intersection of one indexed family

*Medium · [Set theory](index.md)*

For i in $\{1,2,3\}$ let $A_i=\{i,i+1,i+2\}$. Enter the indexed union and indexed intersection as the fields union and intersection.

```answer
{"answer":{"kind":"record_of_finite_sets","expected":{"union":[1,2,3,4,5],"intersection":[3]},"checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Write all three member sets before combining them.

</details>

<details>
<summary>Hint 2</summary>

The union needs membership somewhere; the intersection needs membership in every member set.

</details>

<details>
<summary>Worked solution</summary>

The same finite family uses two different quantifiers for its two combinations.

1. The family members are {1,2,3}, {2,3,4} and {3,4,5}.
2. The values appearing somewhere are one through five.
3. Only three appears everywhere, so the union is {1,2,3,4,5} and the intersection is {3}.

</details>
