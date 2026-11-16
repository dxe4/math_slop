# Reciprocal root sum quartic

*Medium · [Original Putnam-style training](index.md)*

For the four complex roots $r_i$ of $x^4-2x^3+3x^2-4x+5$, counted with multiplicity, find $\sum_i1/r_i$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":4,"denominator":5},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Nonzero constant term makes every reciprocal defined.

</details>

<details>
<summary>Hint 2</summary>

Use the ratio of the third and fourth elementary symmetric sums.

</details>

<details>
<summary>Worked solution</summary>

Thus $\sum_i1/r_i=4/5$.

1. For a monic quartic, $\prod_i r_i$ is its constant coefficient, here $5$.
2. The sum of triple products is the negative coefficient of $x$, here $4$. Dividing each triple product by the full product gives the reciprocal of the omitted root.
3. Thus $\sum_i1/r_i=4/5$.

</details>
