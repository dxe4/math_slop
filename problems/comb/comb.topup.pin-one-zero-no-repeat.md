# Count a restricted ordered selection with a permitted leading zero

*Medium · [Combinatorics](index.md)*

A length-four PIN uses distinct digits from $\{0,1,2,3,4\}$ and must contain zero. Leading zero is allowed. How many PINs are there?

```answer
{"answer":{"kind":"integer","expected":"96","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Choose the position occupied by zero first.

</details>

<details>
<summary>Hint 2</summary>

Fill the other positions from the four nonzero digits without repetition.

</details>

<details>
<summary>Worked solution</summary>

The forced digit and ordered remaining positions require separate choices.

1. Zero can occupy any of four positions, including the first.
2. The remaining three positions are filled by an ordered selection of three of the four nonzero digits, with $4\cdot3\cdot2=24$ choices.
3. The total is $4\cdot24=96$.

</details>
