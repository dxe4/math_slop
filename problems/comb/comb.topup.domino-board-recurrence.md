# Model a small tiling count using its first column

*Medium · [Combinatorics](index.md)*

How many tilings of a $2$ by $5$ rectangle use only 2 by 1 dominoes, with no overlaps or gaps? Dominoes may be vertical or horizontal.

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The first column is covered either by one vertical domino or by two horizontal dominoes.

</details>

<details>
<summary>Hint 2</summary>

Include one tiling of the empty rectangle when setting initial values.

</details>

<details>
<summary>Worked solution</summary>

The left boundary gives two disjoint reductions in board width.

1. Let t\_n count tilings of width n, with t\_0=1 and t\_1=1.
2. A vertical left domino leaves width n-1; a pair of horizontal left dominoes leaves width n-2. Hence t\_n=t\_(n-1)+t\_(n-2).
3. The values through width five are 1,1,2,3,5,8, so the answer is eight.

</details>
