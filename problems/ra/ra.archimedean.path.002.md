# Choose an interior numerator on a rational grid

*Easy · [Real analysis](index.md)*

Find the integer k for which $2/5<k/20<1/2$. There is exactly one such integer. Return k as an exact value.

```answer
{"answer":{"kind":"rational","expected":{"numerator":9,"denominator":1},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

Multiply all three parts by the positive denominator $20$.

</details>

<details>
<summary>Hint 2</summary>

Find the integer strictly between the resulting endpoints.

</details>

<details>
<summary>Worked solution</summary>

A fine rational grid turns an interval problem into an integer problem.

1. Multiplying by $20$ gives $8<k<10$.
2. The only integer in this strict interval is $k=9$, and $9/20$ lies between $2/5$ and $1/2$.

</details>
