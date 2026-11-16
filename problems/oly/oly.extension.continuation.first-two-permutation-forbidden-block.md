# Choose a constrained prefix before the remaining permutation

*Medium · [Original olympiad-style problems](index.md)*

How many permutations of $1,\ldots,6$ have neither label one nor label two in either of their first two positions?

```answer
{"answer":{"kind":"integer","expected":"288","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Choose the first two entries from the four other labels, in order.

</details>

<details>
<summary>Hint 2</summary>

Once those are fixed the remaining four labels are unrestricted.

</details>

<details>
<summary>Worked solution</summary>

Separate a constrained ordered prefix from a free suffix.

1. The first position has four options and the second three.
2. The remaining four distinct labels occupy their four positions in $4!=24$ ways.
3. The total is $4\cdot3\cdot24=288$, with no further restriction on where one and two occur.

</details>
