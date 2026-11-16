# Add mutually exclusive options

*Easy · [Combinatorics](index.md)*

Choose exactly one dessert item. There are three distinct cake slices C1, C2, C3 and two distinct fruit cups F1, F2. Cake and fruit items are different options, and you choose one item total. How many choices are there?

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

Decide whether a choice is a pair or a single item.

</details>

<details>
<summary>Hint 2</summary>

The cake choices and fruit choices do not overlap.

</details>

<details>
<summary>Worked solution</summary>

Add disjoint alternatives when exactly one alternative is selected.

1. The three cake choices and two fruit choices are disjoint.
2. Choosing one item gives $3 + 2 = 5$ choices. Multiplication would count a different task: choosing both types.

</details>
