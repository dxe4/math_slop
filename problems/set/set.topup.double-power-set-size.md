# Count subsets of a power set as a new finite set

*Hard · [Set theory](index.md)*

A finite set A satisfies $|\mathcal P(A)|=32$. Find $|\mathcal P(\mathcal P(A))|$.

```answer
{"answer":{"kind":"integer","expected":"4294967296","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The outer power set has P(A) as its base set.

</details>

<details>
<summary>Hint 2</summary>

Use the number of elements in that base set, not the number originally in A.

</details>

<details>
<summary>Worked solution</summary>

Each power-set operation applies to the entire current set of objects.

1. The set P(A) has exactly thirty-two elements by hypothesis.
2. The power set of any thirty-two-element set has $2^{32}$ elements.
3. Thus the answer is $4294967296$.

</details>
