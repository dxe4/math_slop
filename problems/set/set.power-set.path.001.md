# Three include-or-exclude decisions

*Easy · [Set theory](index.md)*

Let $A=\{p,q,r\}$, with three distinct objects. How many members does P(A), the power set of A, have?

```answer
{"answer":{"kind":"integer","expected":8,"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

Each original object can independently be included or excluded from a subset.

</details>

<details>
<summary>Hint 2</summary>

There are two choices for each of the three objects; include both the empty subset and the whole set.

</details>

<details>
<summary>Worked solution</summary>

Power-set members are subsets, rather than the original objects.

1. Each subset is specified by three yes/no decisions.
2. There are $2\times 2\times 2=8$ such decisions, so P(A) has $8$ members.

</details>
