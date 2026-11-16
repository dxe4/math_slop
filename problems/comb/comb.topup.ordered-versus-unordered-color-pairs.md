# Distinguish ordered draws from unordered records with repetition

*Medium · [Combinatorics](index.md)*

Two colors are drawn from $\{R,G,B\}$, with replacement. Return ordered\_pairs and unordered\_color\_pairs, counting distinct records rather than probabilities.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"ordered_pairs":"9","unordered_color_pairs":"6"},"checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

An unordered record may contain two equal colors.

</details>

<details>
<summary>Hint 2</summary>

Separate the three double-color records from the distinct-color records.

</details>

<details>
<summary>Worked solution</summary>

Order and repetition are independent choices in specifying a counting model.

1. There are nine ordered color pairs.
2. Unordered records consist of RR,GG,BB and RG,RB,GB, for six records.
3. The comparison retains repetition in both models and forgets only draw order.

</details>
