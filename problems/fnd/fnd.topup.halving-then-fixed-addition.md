# Separate repeated scaling from a later addition

*Medium · [Foundations bridge](index.md)*

A quantity starts at $80$ units and is halved three times. Then $10$ units are added once. Find the final quantity.

```answer
{"answer":{"kind":"integer","expected":"20","checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

The halving is repeated, but the addition occurs only after all three halvings.

</details>

<details>
<summary>Hint 2</summary>

Use a power of one-half for the repeated operation.

</details>

<details>
<summary>Worked solution</summary>

The order distinguishes repeated proportional changes from a single fixed change.

1. Three halvings multiply the starting value by $(1/2)^3=1/8$.
2. The quantity after halving is $80/8=10$.
3. Adding ten once gives $20$ units.

</details>
