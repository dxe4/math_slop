# Five different books in a row

*Easy · [Combinatorics](index.md)*

Five distinct books are placed in a row, each exactly once. How many left-to-right orders exist?

```answer
{"answer":{"kind":"integer","expected":120,"checker_scope":"Exact finite structured answer for evaluate-descending-product; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Choose books for the positions one at a time.

</details>

<details>
<summary>Hint 2</summary>

The available counts shrink after each choice.

</details>

<details>
<summary>Worked solution</summary>

A complete order of distinct objects is a factorial.

1. The choices number $5,4,3,2,1$.
2. Their product $5!=120$ counts the complete orders.

</details>
