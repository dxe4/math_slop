# Restrict divisor exponents to even values

*Medium · [Computational arithmetic problems](index.md)*

How many positive divisors of $2^{12}\cdot3^8\cdot5^6$ are perfect squares?

```answer
{"answer":{"kind":"integer","expected":"140","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

A square divisor has an even exponent at each prime.

</details>

<details>
<summary>Hint 2</summary>

Count the allowed exponents separately and multiply.

</details>

<details>
<summary>Worked solution</summary>

Prime factorization makes the square restriction coordinatewise.

1. The exponent of two can be any of $0,2,\ldots,12$, giving seven choices.
2. The exponents of three and five have respectively five and four choices.
3. The total number of square divisors is $7\cdot5\cdot4=140$.

</details>
