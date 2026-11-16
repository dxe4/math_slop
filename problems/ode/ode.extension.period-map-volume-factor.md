# Read volume evolution from specified period multipliers

*Easy · [Differential equations problems](index.md)*

A two-dimensional periodic linear system has period-map matrix $M=\operatorname{diag}(1/2,1/4)$. Find the area factor det M after one period.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":8},"checker_scope":"Exact requested period quantity only; no broad stability or proof verdict is inferred."}}
```

<details>
<summary>Hint 1</summary>

Multiply the two coordinate multipliers.

</details>

<details>
<summary>Hint 2</summary>

Do not add the multiplier contractions.

</details>

<details>
<summary>Worked solution</summary>

A period map acts on area through its determinant.

1. The period map scales one coordinate by one half and the other by one quarter.
2. Its determinant is their product.
3. The area factor is 1/8.

</details>
