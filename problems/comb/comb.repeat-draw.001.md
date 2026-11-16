# Replacement changes the available second draw

*Easy · [Combinatorics](index.md)*

Two distinct labeled tokens, K and L, are drawn one at a time, and the draw order is recorded. If the first token is replaced before the second draw, how many records are possible? If it is kept out, how many are possible? Enter replaced and kept\_out.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"replaced":4,"kept_out":2},"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

Count records, not their probabilities.

</details>

<details>
<summary>Hint 2</summary>

With replacement, KK and LL are possible; without replacement, they are not.

</details>

<details>
<summary>Worked solution</summary>

Replacement allows the same physical token to appear again in a recorded sequence.

1. With replacement, KK, KL, LK, LL are possible: four.
2. Without replacement, only KL and LK remain: two.

</details>
