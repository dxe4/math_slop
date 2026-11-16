# Classify permitted permutation cycle types before counting

*Hard · [Original olympiad-style problems](index.md)*

How many permutations of $9$ fixed labels have no fixed points and have every cycle of odd length?

```answer
{"answer":{"kind":"integer","expected":"42560","checker_scope":"Exact requested finite count, sharp bound or declared move vector only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Every cycle length is an odd integer at least three.

</details>

<details>
<summary>Hint 2</summary>

List the allowed partitions of nine before using cycle-count formulas.

</details>

<details>
<summary>Worked solution</summary>

Cycle-type restrictions are exhaustive only after both the parity and no-fixed-point conditions are used.

1. The only allowed cycle types are one nine-cycle or three three-cycles. A five- or seven-cycle would leave a forbidden even remainder or a fixed point.
2. There are 8!=40320 nine-cycles. There are 9! divided by (3^3 times 3!)=2240 permutations with three three-cycles, accounting for cycle rotations and interchange of equal-length cycles.
3. Adding the disjoint types gives 42560 permutations.

</details>
