# Use the three perfect matchings to obtain a quotient action

*Medium · [Abstract algebra problems](index.md)*

S4 acts on the three partitions of {1,2,3,4} into two unordered pairs: {12\|34},{13\|24},{14\|23}. Find the order of the kernel $K$ of this action.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact requested finite action quantity only; no general action proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Double transpositions preserve every partition.

</details>

<details>
<summary>Hint 2</summary>

Show the induced permutation action contains both a transposition and a three-cycle.

</details>

<details>
<summary>Worked solution</summary>

A geometric-looking action reveals the normal four-group quotient.

1. The identity and three double transpositions each fix all three matchings, so the four-group V lies in the kernel.
2. The permutation (12) exchanges the last two matchings and fixes the first; (123) cyclically permutes all three. Thus the induced image is all of S3.
3. The kernel therefore has order \|S4\|/\|S3\|=24/6=4 and equals V.

</details>
