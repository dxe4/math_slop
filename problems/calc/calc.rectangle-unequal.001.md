# Match each sampled height to its own width

*Easy · [Calculus](index.md)*

From left to right, three sampled rectangles have widths $1, 2, 1/2$ and corresponding heights $3, -2, 8$. Compute the signed rectangle approximation Σ(width × height). Every width must be paired with the height in the same position. Do not replace the widths by a common width.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":1},"checker_scope":"Checks the stated exact numerical calculation only; does not certify an explanation or an independently written proof."}}
```

<details>
<summary>Hint 1</summary>

Make three products, pairing each width with its corresponding height.

</details>

<details>
<summary>Hint 2</summary>

Keep the sign of each height when adding the contributions.

</details>

<details>
<summary>Worked solution</summary>

Unequal-width rectangle sums require separate weighted contributions; adding heights alone loses the widths.

1. The paired products are $1 \times  (3) = 3$; $2 \times  (-2) = -4$; $1/2 \times  (8) = 4$.
2. Add the signed products: $3 + -4 + 4 = 3$.

</details>
