# Distinguish two valid roles of a singleton

*Medium · [Set theory](index.md)*

Treat numerals as atomic labels. For $T=\{2,\{2\},\varnothing\}$, which description of {2} is correct? Choices: It is a member of T but not a subset of T.; It is a subset of T but not a member of T.; It is both a member and a subset of T.; It is neither a member nor a subset of T.

**Options**

1. It is a member of T but not a subset of T.
2. It is a subset of T but not a member of T.
3. It is both a member and a subset of T.
4. It is neither a member nor a subset of T.

```answer
{"answer":{"kind":"multiple_choice","expected":"both","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."},"options":["member_only","subset_only","both","neither"]}
```

<details>
<summary>Hint 1</summary>

Membership asks whether the whole singleton is one listed object.

</details>

<details>
<summary>Hint 2</summary>

Subsethood asks whether the singleton element, the numeral two, belongs to T.

</details>

<details>
<summary>Worked solution</summary>

The same singleton can be both an element and a subset for different reasons.

1. The object {2} is explicitly listed in T, so it is a member.
2. The only element of {2} is the label two, which is also listed in T, so it is a subset.
3. Thus both statements hold; membership and subsethood are not the same test.

</details>
