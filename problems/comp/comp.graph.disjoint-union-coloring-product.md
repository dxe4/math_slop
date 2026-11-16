# Multiply colorings of disconnected components

*Easy · [Computational arithmetic problems](index.md)*

At three named colors the cycle C4 has $18$ proper colorings and C3 has 6. Find the number for their disjoint union.

```answer
{"answer":{"kind":"integer","expected":"108","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The two components have no edges between them.

</details>

<details>
<summary>Hint 2</summary>

The same named color may be reused independently on both components.

</details>

<details>
<summary>Worked solution</summary>

Disconnected components permit independent color assignments.

1. Each coloring of C4 can be paired with any coloring of C3.
2. The product count is eighteen times six.
3. Thus their disjoint union has 108 proper colorings.

</details>
