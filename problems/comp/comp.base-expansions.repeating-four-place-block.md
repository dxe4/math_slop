# Convert a repeating block exactly

*Medium · [Computational arithmetic problems](index.md)*

Write the decimal $0.\overline{0037}$ as a reduced exact rational.

```answer
{"answer":{"kind":"rational","expected":{"numerator":37,"denominator":9999},"checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

The repeated block has four positions, including its leading zeros.

</details>

<details>
<summary>Hint 2</summary>

Multiply by the corresponding power of ten and subtract the original value.

</details>

<details>
<summary>Worked solution</summary>

A positional shift cancels the infinite repeating tail.

1. If $x=0.\overline{0037}$, then $10000x=37.\overline{0037}$.
2. Subtraction gives $9999x=37$, hence $x=37/9999$.
3. The denominator factors as $3^2\cdot11\cdot101$, none divisible by $37$, so the fraction is reduced.

</details>
