# Isolate an exceptional prime by a small modulus

*Medium · [Original olympiad-style problems](index.md)*

Find all primes $p$ for which $p^2+2$ is prime. Enter the finite set of primes.

```answer
{"answer":{"kind":"set","expected":["3"],"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Treat primes dividing $6$ separately.

</details>

<details>
<summary>Hint 2</summary>

Every other prime has square congruent to one modulo three.

</details>

<details>
<summary>Worked solution</summary>

Use a modular obstruction with explicit exceptional cases.

1. For $p=2$, the expression is $6$, not prime. For $p=3$, it is $11$, which is prime.
2. For any prime $p>3$, its nonzero residue modulo three has square one, so $p^2+2$ is divisible by three.
3. That expression exceeds three, hence is composite. Therefore only $p=3$ works.

</details>
