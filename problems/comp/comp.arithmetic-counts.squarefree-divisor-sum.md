# Sum squarefree divisors without enumeration

*Medium · [Computational arithmetic problems](index.md)*

Find the sum of all positive squarefree divisors of $2^{10}\cdot3^6\cdot5^4\cdot7^2\cdot11$.

```answer
{"answer":{"kind":"integer","expected":"6912","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

A squarefree divisor chooses exponent zero or one at each prime.

</details>

<details>
<summary>Hint 2</summary>

The large exponents in the given number do not add further allowed exponents.

</details>

<details>
<summary>Worked solution</summary>

Independent binary exponent choices factor the restricted divisor sum.

1. The distinct prime factors are $2,3,5,7,11$.
2. The squarefree-divisor sum is $(1+2)(1+3)(1+5)(1+7)(1+11)$.
3. This equals $3\cdot4\cdot6\cdot8\cdot12=6912$.

</details>
