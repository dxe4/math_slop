# Separate full sets from parts actually used

*Hard · [Foundations bridge](index.md)*

You have $200$ tiles and keep $18$ aside. Use the rest to make as many complete sets of $16$ as possible. In each complete set, $3$ tiles are spares and the other tiles enter a display. How many tiles enter displays?

```answer
{"answer":{"kind":"integer","expected":"143","checker_scope":"Exact requested bounded result only. The worked reasoning is not automatically certified, and this draft adds no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Tiles kept aside and leftovers from incomplete sets do not enter any complete set.

</details>

<details>
<summary>Hint 2</summary>

Count complete sets first; then distinguish the tiles used from the spare tiles within each set.

</details>

<details>
<summary>Worked solution</summary>

Three different quantities must remain separate: available tiles, complete sets and displayed tiles per set.

1. After keeping eighteen aside, $200-18=182$ tiles are available.
2. The equation $182=11\cdot16+6$ gives eleven complete sets and six unused leftovers.
3. Each set contributes $16-3=13$ displayed tiles, giving $11\cdot13=143$.

</details>
