# Characterize reachable binary boards using rectangle parity

*Hard · [Foundations bridge](index.md)*

A $3\times3$ board starts with all entries 0. A move toggles every bit in one complete row or one complete column. Prove a target board is reachable exactly when every rectangle formed by two distinct rows and two distinct columns has an even sum of its four corner bits. Use addition modulo 2, where toggling adds 1. Deduce a board with exactly one 1 is unreachable.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

A row or column move changes either zero or two corners of each rectangle.

</details>

<details>
<summary>Hint 2</summary>

For the converse, use the first row and column to choose row and column toggles and apply the rectangle condition to each remaining entry.

</details>

<details>
<summary>Model proof</summary>

A local parity invariant is sufficient here because it reconstructs the entire board from one row and one column.

1. Each move changes zero or two corners of any fixed rectangle, so its corner sum modulo 2 stays zero from the initial board. Thus the condition is necessary.
2. Let target bits be b\_ij. Set row-toggle parity r\_i=b\_i1 and column-toggle parity c\_j=b\_1j+b\_11 modulo 2. The resulting board has entries r\_i+c\_j=b\_i1+b\_1j+b\_11.
3. This equals b\_ij when i=1 or j=1 directly. For i,j both different from 1, the rectangle using rows 1,i and columns 1,j has even corner sum, so b\_ij=b\_i1+b\_1j+b\_11. Hence the proposed toggles produce the entire target, proving sufficiency.
4. A single 1 belongs to a rectangle whose other three corners are zero: choose any different row and column. Its corner sum is odd, violating the necessary condition, so such a board is unreachable.

**Self-assessment rubric**

- Proves each row or column move preserves the parity of every four-corner rectangle.
- Defines explicit row and column parities from the target’s first row and column.
- Checks all entries using the rectangle identity, including first-row and first-column cases.
- Exhibits an odd rectangle to rule out exactly one nonzero bit.

</details>
