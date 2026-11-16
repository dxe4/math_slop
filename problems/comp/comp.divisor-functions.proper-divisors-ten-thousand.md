# Remove the number from its divisor sum

*Medium · [Computational arithmetic problems](index.md)*

Find the sum of the positive proper divisors of $10000$, meaning all positive divisors strictly smaller than $10000$.

```answer
{"answer":{"kind":"integer","expected":"14211","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

First compute the sum including the number itself.

</details>

<details>
<summary>Hint 2</summary>

The prime factorization has two prime-power factors of equal exponent.

</details>

<details>
<summary>Worked solution</summary>

A multiplicative divisor sum followed by one subtraction gives the proper-divisor sum.

1. Since $10000=2^4\cdot5^4$, its divisor sum is $(1+2+4+8+16)(1+5+25+125+625)$.
2. This is $31\cdot781=24211$.
3. Removing $10000$ itself gives $14211$.

</details>
