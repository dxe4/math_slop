# Compare exact distances between fractions

*Hard · [Foundations bridge](index.md)*

Among $7/12$, $5/8$ and $2/3$, take the fraction closest to $3/5$. What is its distance from $3/5$? Give the exact nonnegative distance.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":60},"checker_scope":"Exact requested bounded result only. The worked reasoning is not automatically certified, and this draft adds no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Compare absolute differences, not the fractions themselves.

</details>

<details>
<summary>Hint 2</summary>

A shared denominator can display all three distances in the same-sized units.

</details>

<details>
<summary>Worked solution</summary>

Exact distance comparison avoids decimal rounding near the target.

1. The three distances are $|7/12-3/5|=1/60$, $|5/8-3/5|=1/40$ and $|2/3-3/5|=1/15$.
2. With denominator 120 these distances are $2/120$, $3/120$ and $8/120$.
3. The smallest distance is $1/60$, coming from $7/12$.

</details>
