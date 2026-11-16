# Sieve a short interval and sum prime squares

*Medium · [Computational arithmetic problems](index.md)*

Find the sum of the squares of all primes not exceeding $30$.

```answer
{"answer":{"kind":"integer","expected":"2397","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

A composite number in this range has a prime factor at most the square root of thirty.

</details>

<details>
<summary>Hint 2</summary>

After sieving by the necessary small primes, square the survivors and add.

</details>

<details>
<summary>Worked solution</summary>

A bounded smallest-prime-factor argument makes the finite prime list complete.

1. Sieve the integers from two through thirty by $2,3,5$. The primes left are $2,3,5,7,11,13,17,19,23,29$.
2. Their squares are $4,9,25,49,121,169,289,361,529,841$.
3. The sum is $2397$.

</details>
