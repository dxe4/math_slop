# Pair a main dish with a drink

*Easy · [Combinatorics](index.md)*

A lunch consists of exactly one main dish from pasta, soup, rice, and exactly one drink from water, tea. Every main dish can be paired with either drink. How many different lunches are possible?

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

Organize lunches by main dish.

</details>

<details>
<summary>Hint 2</summary>

Each of the three main dishes has the same two drink choices.

</details>

<details>
<summary>Worked solution</summary>

Uniform sequential choices multiply.

1. There are two lunches for each main dish.
2. The three disjoint branches give $2 + 2 + 2 = 3 \times  2 = 6$ lunches.

</details>
