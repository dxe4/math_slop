# Count ordered compositions by their number of two-parts

*Medium · [Original olympiad-style problems](index.md)*

How many ordered compositions of $10$ use only parts 1,2,3 and contain exactly one part equal to three?

```answer
{"answer":{"kind":"integer","expected":"130","checker_scope":"Exact requested finite count, sharp bound or declared move vector only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

After reserving the single three, the other parts sum to seven.

</details>

<details>
<summary>Hint 2</summary>

Fix the number of twos, then place those twos and the one distinguished three among the resulting part positions.

</details>

<details>
<summary>Worked solution</summary>

A short case split retains order while enforcing an exact part multiplicity.

1. If k twos occur, there are 7-2k ones and one three, so k ranges from zero through three and the total number of parts is 8-k.
2. Place the three in one of 8-k positions, then choose k of the remaining 7-k positions for twos. The four counts are 8,42,60,20.
3. Their disjoint sum is 130 ordered compositions.

</details>
