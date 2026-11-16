# Use a segmented sieve with exact endpoint exclusions

*Medium · [Computational arithmetic problems](index.md)*

Find the sum of all primes in the closed interval $[91,120]$.

```answer
{"answer":{"kind":"integer","expected":"630","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Only primes at most $\sqrt{120}$ are needed as sieve divisors.

</details>

<details>
<summary>Hint 2</summary>

After removing multiples of $2,3,5$, check the remaining candidates against the final necessary sieve prime.

</details>

<details>
<summary>Worked solution</summary>

A short segmented sieve proves primality without trial division by every smaller integer.

1. Every composite in the interval has a prime divisor at most $\sqrt{120}<11$, so only $2,3,5,7$ are needed.
2. Removing multiples of $2,3,5$ leaves $91,97,101,103,107,109,113,119$.
3. The candidates $91=7\cdot13$ and $119=7\cdot17$ are removed by the last sieve prime; the other six have no possible prime divisor below their square roots.
4. The prime sum is $97+101+103+107+109+113=630$.

</details>
