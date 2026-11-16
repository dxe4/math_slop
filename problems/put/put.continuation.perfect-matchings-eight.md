# Perfect matchings eight

*Medium · [Original Putnam-style training](index.md)*

How many perfect matchings are there on $8$ labelled vertices of a complete graph?

```answer
{"answer":{"kind":"integer","expected":"105","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Pair the smallest remaining label, then recurse.

</details>

<details>
<summary>Hint 2</summary>

The partner choices are odd numbers descending.

</details>

<details>
<summary>Worked solution</summary>

The count is $7\cdot5\cdot3\cdot1=105$.

1. Vertex one has seven possible partners. Removing that pair leaves six vertices, whose smallest label has five choices, then three, then one.
2. These choices form a unique unordered matching because the smallest available label is fixed at each stage.
3. The count is $7\cdot5\cdot3\cdot1=105$.

</details>
