# Count involutive bijections through partners

*Hard · [Set theory](index.md)*

How many functions f from $\{1,2,3,4\}$ to itself satisfy f(f(x))=x for every x and have no fixed point?

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted mapping proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The double-application condition makes f its own inverse.

</details>

<details>
<summary>Hint 2</summary>

Without fixed points, each element must be paired with a different partner.

</details>

<details>
<summary>Worked solution</summary>

The inverse condition forces disjoint two-element exchanges.

1. From f(f(x))=x, f is both injective and surjective. Every element lies in a cycle of length one or two.
2. Fixed points are forbidden, so the four elements split into two exchanged pairs.
3. The partner of one can be chosen in three ways; after that the other pair is forced. Exactly $3$ functions qualify.

</details>
