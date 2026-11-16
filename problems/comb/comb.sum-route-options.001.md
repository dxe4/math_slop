# Combine disjoint route lists

*Easy · [Combinatorics](index.md)*

A trip uses exactly one complete route. The available walking routes are W1, W2, W3, W4, and the available cycling routes are B1, B2, B3. These seven labels name different complete routes. How many route choices are there?

```answer
{"answer":{"kind":"integer","expected":7,"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

A walking route and a cycling route are alternatives for this trip.

</details>

<details>
<summary>Hint 2</summary>

No complete route occurs in both lists.

</details>

<details>
<summary>Worked solution</summary>

Disjoint lists can be joined by adding their sizes.

1. There are four walking alternatives and three cycling alternatives.
2. The lists are disjoint, so there are $4 + 3 = 7$ choices.

</details>
