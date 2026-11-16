# Track stock before making full boxes

*Medium · [Foundations bridge](index.md)*

A shelf unit has $5$ shelves with $24$ books on each. Then $17$ books are lent and $9$ returned. The books now present are packed into boxes holding exactly $7$ each. How many full boxes can be packed?

```answer
{"answer":{"kind":"integer","expected":"16","checker_scope":"Exact requested bounded result only. The worked reasoning is not automatically certified, and this draft adds no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Find the total actually present after both stock changes.

</details>

<details>
<summary>Hint 2</summary>

Only then divide by the box capacity to count full boxes.

</details>

<details>
<summary>Worked solution</summary>

The equal-group count uses the updated stock, not the initial stock.

1. The initial stock is $5\cdot24=120$ books.
2. After the changes, $120-17+9=112$ books are present.
3. Since $112=7\cdot16$, exactly $16$ full boxes can be packed.

</details>
