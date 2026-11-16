# Separate roster repetition from strict inclusion

*Medium · [Set theory](index.md)*

Let $A=\{1,2\}$, $B=\{1,2,2\}$ and $C=\{1\}$. Which relationship is correct? Choices: A equals B, and C is a proper subset of A.; A is a proper subset of B.; B is a proper subset of A.; C equals A.

**Options**

1. A equals B, and C is a proper subset of A.
2. A is a proper subset of B.
3. B is a proper subset of A.
4. C equals A.

```answer
{"answer":{"kind":"multiple_choice","expected":"equal_then_proper","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."},"options":["equal_then_proper","a_proper_b","b_proper_a","c_equals_a"]}
```

<details>
<summary>Hint 1</summary>

A repeated roster entry does not enlarge a set.

</details>

<details>
<summary>Hint 2</summary>

A proper subset must omit at least one element of the larger set.

</details>

<details>
<summary>Worked solution</summary>

Inclusive equality and proper inclusion use different strictness requirements.

1. A and B have the same two distinct members, so A=B.
2. C is contained in A but lacks the element two, so it is a proper subset.
3. The correct relationship is equality of A,B and proper containment of C in A.

</details>
