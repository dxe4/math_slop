# The exact cost of adjacent sorting

*Medium · [Original olympiad-style problems](index.md)*

What is the minimum number of swaps of neighboring entries needed to sort $[4,1,6,2,5,3]$ increasingly?

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Count pairs out of order rather than trying many sorting sequences.

</details>

<details>
<summary>Hint 2</summary>

A swap of neighboring unequal entries changes the inversion count by exactly one. Repeatedly swapping an inverted neighboring pair attains the bound.

</details>

<details>
<summary>Worked solution</summary>

The same quantity supplies a lower bound and a terminating optimal algorithm.

1. The entry $4$ forms inversions with $1,2,3$; $6$ forms inversions with $2,5,3$; and $5$ forms one with $3$. There are $3+3+1=7$ inversions in total.
2. A neighboring swap changes only the relative order of the swapped pair, so the inversion number changes by exactly one in absolute value. Reaching the sorted list, whose inversion number is zero, therefore requires at least seven swaps.
3. If a list is not increasing, it has an inverted neighboring pair. Swap such a pair; its inversion number drops by one. Repeating reaches zero after exactly seven swaps, attaining the bound.

</details>
