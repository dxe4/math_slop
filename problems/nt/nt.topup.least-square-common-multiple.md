# Find the smallest square satisfying two divisibility demands

*Hard · [Number theory](index.md)*

Find the least positive perfect square divisible by both $8$ and $15$.

```answer
{"answer":{"kind":"integer","expected":"3600","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

First find the compulsory prime powers from the least common multiple.

</details>

<details>
<summary>Hint 2</summary>

Raise each odd exponent only to the next even exponent.

</details>

<details>
<summary>Worked solution</summary>

The minimal square common multiple extends each compulsory exponent minimally.

1. The least common multiple is $120=2^3\cdot3\cdot5$.
2. A square divisible by this number needs exponents at least four, two and two for the primes two, three and five.
3. The smallest possibility is $2^4 3^2 5^2=3600$, which indeed is $60^2$.

</details>
