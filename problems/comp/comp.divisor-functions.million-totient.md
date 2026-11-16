# Count units in a decimal prime-power modulus

*Medium · [Computational arithmetic problems](index.md)*

How many integers $k$ with $1\leq k\leq1000000$ are coprime to $1000000$?

```answer
{"answer":{"kind":"integer","expected":"400000","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Only the primes dividing the bound can prevent coprimality.

</details>

<details>
<summary>Hint 2</summary>

Use the totient product or inclusion-exclusion for those two primes.

</details>

<details>
<summary>Worked solution</summary>

Coprimality excludes multiples of two and five.

1. The bound factors as $10^6=2^6\cdot5^6$.
2. The totient is $10^6(1-1/2)(1-1/5)$.
3. This equals $400000$, counting exactly the requested integers.

</details>
