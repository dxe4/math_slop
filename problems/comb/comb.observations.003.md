# Count card identities and the symbols you see

*Easy · [Combinatorics](index.md)*

Five physical cards have distinct labels P, Q, R, S, T. P, Q, and R show a star; S and T show a circle. Draw one card. Count the possible card-label records and the possible shape-only records. Enter label\_outcomes and shape\_outcomes.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"label_outcomes":5,"shape_outcomes":2},"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

Cards can be different objects even when their printed shapes match.

</details>

<details>
<summary>Hint 2</summary>

A shape-only record forgets which card was drawn.

</details>

<details>
<summary>Worked solution</summary>

Objects and the properties recorded from them need not have the same number of outcomes.

1. The label records are P, Q, R, S, T, giving five outcomes.
2. The shape-only records are star and circle, giving two outcomes.

</details>
