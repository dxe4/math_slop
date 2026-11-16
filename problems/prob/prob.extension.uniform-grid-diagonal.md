# Agreeing coordinates on a finite grid

*Easy · [Probability problems](index.md)*

Select an ordered pair uniformly from $\{1,2,3\}\times\{1,2,3\}$. Find the probability that its two coordinates agree.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Checks the exact probability for the uniform ordered-pair model only."}}
```

<details>
<summary>Hint 1</summary>

Outcomes are ordered pairs, not individual coordinate labels.

</details>

<details>
<summary>Hint 2</summary>

List the pairs with equal entries and compare their count with the full Cartesian-product count.

</details>

<details>
<summary>Worked solution</summary>

The desired event is the diagonal of the equally likely grid.

1. The Cartesian product has $3\cdot3=9$ equally likely ordered pairs.
2. The favourable pairs are $(1,1),(2,2),(3,3)$, giving three outcomes.
3. Their probability is $3/9=1/3$.

The diagonal contains $(1,1),(2,2),(3,3)$ among nine equally likely pairs, giving $1/3$.

</details>
