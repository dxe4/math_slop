# A label and a color describe different outcomes

*Easy · [Combinatorics](index.md)*

A bag contains physical tokens A (red), B (red), C (blue), and D (green). Draw one token. If you record its letter, how many possible recorded outcomes are there? If you record only its color, how many are there? Enter letter\_outcomes and color\_outcomes.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"letter_outcomes":4,"color_outcomes":3},"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

Decide what information the record retains.

</details>

<details>
<summary>Hint 2</summary>

The two red tokens have different letters but the same recorded color.

</details>

<details>
<summary>Worked solution</summary>

Define the observed outcome before counting.

1. Recording letters gives A, B, C, D: four outcomes.
2. Recording colors gives red, blue, green: three outcomes.
3. An outcome is defined by the recorded observation, so changing the record can change the outcome set.

</details>
