# An unordered hand of distinct cards

*Easy · [Combinatorics](index.md)*

Choose a hand of two cards from four distinct physical cards, without replacement. Only which cards are in the hand is recorded, not draw order. Enter order\_matters and repetition\_allowed, using $1$ for yes and $0$ for no.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"order_matters":0,"repetition_allowed":0},"checker_scope":"Exact finite structured answer for identify-order-and-repetition; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

The hand records a collection, not a draw sequence.

</details>

<details>
<summary>Hint 2</summary>

A card kept out cannot be selected again.

</details>

<details>
<summary>Worked solution</summary>

A collection without replacement is unordered and has no repeated physical card.

1. Swapping draw order leaves the same hand, so order\_matters=$0$.
2. Without replacement a card cannot repeat, so repetition\_allowed=$0$.

</details>
