# A scaled exponential coefficient

*Easy · [Complex analysis problems](index.md)*

Find the coefficient of $z^3$ in the Taylor expansion of $e^{2z}$ about zero.

```answer
{"answer":{"kind":"rational","expected":{"numerator":4,"denominator":3},"checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Substitute the scaled variable into the exponential series.

</details>

<details>
<summary>Hint 2</summary>

The scaling contributes a power to the numerator while the series factorial remains.

</details>

<details>
<summary>Worked solution</summary>

Each Taylor coefficient gains the corresponding power of the inner scale.

1. $e^{2z}=\sum_{n\ge0}2^nz^n/n!$.
2. The third-power coefficient is $2^3/3!$.
3. This equals $8/6=4/3$.

</details>
