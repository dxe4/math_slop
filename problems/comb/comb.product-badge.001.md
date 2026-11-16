# Count two-position badges

*Easy · [Combinatorics](index.md)*

A badge has a first position chosen from letters M, N, P, Q, and a second position chosen from digits $2, 5, 8$. Any listed digit can follow any listed letter. How many badges can be made?

```answer
{"answer":{"kind":"integer","expected":12,"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

Count possible second positions for a fixed first letter.

</details>

<details>
<summary>Hint 2</summary>

The four first letters create disjoint branches.

</details>

<details>
<summary>Worked solution</summary>

Multiply the number of extensions in each uniform stage.

1. For each of the four letters there are three digits.
2. There are $4 \times  3 = 12$ badges. The alphabet differs between positions, and each position is recorded.

</details>
