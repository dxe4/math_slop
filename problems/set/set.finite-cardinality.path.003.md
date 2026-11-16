# The labels can change without the size changing

*Easy · [Set theory](index.md)*

Let $A=\{1,3,5,7,9,11\}$. Suppose there is a bijection from A onto a set B. How many members does B have?

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

Count the distinct members of A.

</details>

<details>
<summary>Hint 2</summary>

A bijection gives exactly one different member of B for each member of A, and reaches all of B.

</details>

<details>
<summary>Worked solution</summary>

A bijection preserves cardinality regardless of the objects’ names.

1. The set A has six distinct members.
2. Injectivity gives six distinct partners in B, and surjectivity leaves no extra members. Thus $|B|=6$.

</details>
