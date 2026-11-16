# Multiply local divisor sums

*Medium · [Computational arithmetic problems](index.md)*

Find the sum of all positive divisors of $360$.

```answer
{"answer":{"kind":"integer","expected":"1170","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Factor the number into prime powers.

</details>

<details>
<summary>Hint 2</summary>

Each divisor chooses one exponent independently for each prime.

</details>

<details>
<summary>Worked solution</summary>

Independent prime-exponent choices factor the divisor sum.

1. The factorization is $360=2^3\cdot3^2\cdot5$.
2. The divisor sum is $(1+2+4+8)(1+3+9)(1+5)=15\cdot13\cdot6$.
3. The result is $1170$.

</details>
