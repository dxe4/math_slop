# A signed rectangle sum with width 1/2

*Easy · [Calculus](index.md)*

Three adjacent rectangles each have width $1/2$. Their sampled heights, from left to right, are $4, 2, -2$. Compute their signed rectangle sum: add width × height for each rectangle. Negative heights contribute negatively. This is the supplied rectangle approximation, not a claim about an exact integral.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":1},"checker_scope":"Checks the stated exact numerical calculation only; does not certify an explanation or an independently written proof."}}
```

<details>
<summary>Hint 1</summary>

Each rectangle contributes its width multiplied by its signed height.

</details>

<details>
<summary>Hint 2</summary>

Because all widths are equal, you may add the signed heights first and then multiply by the common width.

</details>

<details>
<summary>Worked solution</summary>

Signed accumulation combines positive and negative contributions; it differs from adding the absolute areas.

1. The individual signed contributions are $2, 1, -1$.
2. Their sum is $2 + 1 + -1 = 2$.

</details>
