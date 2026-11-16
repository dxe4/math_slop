# A smoothing process with a forced terminal multiset

*Medium · [Original olympiad-style problems](index.md)*

Nine boxes contain nonnegative integer numbers of counters totaling $100$. A move transfers one counter from a box to another box containing at least two fewer counters. Prove that every maximal move sequence terminates at the same multiset of occupancies, and find the sum of their squares.

```answer
{"answer":{"kind":"integer","expected":"1112","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

If the source and destination contain $a\ge b+2$, calculate the change of $a^2+b^2$.

</details>

<details>
<summary>Hint 2</summary>

At termination every pair differs by at most one; combine this with the total and the number of boxes.

</details>

<details>
<summary>Worked solution</summary>

Squared occupancies decrease strictly and the mean fixes the balanced integer endpoint.

1. The change in the squared sum is $(a-1)^2+(b+1)^2-a^2-b^2=-2(a-b-1)\le-2$. Occupancies remain nonnegative, so this nonnegative integer potential cannot decrease forever.
2. At a terminal state no two occupancies differ by two or more. The average is $100/9=11+1/9$, so the only possible occupancies are $11$ and $12$. Exactly one is $12$ and eight are $11$.
3. The sum of squares is therefore $8\cdot121+144=1112$. The argument proves that every maximal sequence attains this multiset; the label of the box with twelve counters may depend on the moves.

</details>
