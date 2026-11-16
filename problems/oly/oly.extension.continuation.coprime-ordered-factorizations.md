# Allocate full prime powers between coprime factors

*Medium · [Original olympiad-style problems](index.md)*

How many ordered pairs of positive integers $(a,b)$ satisfy $ab=360$ and $\gcd(a,b)=1$?

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

In a coprime factorization, a prime cannot occur in both factors.

</details>

<details>
<summary>Hint 2</summary>

Each of the three distinct prime-power blocks of $360$ must go wholly to one side.

</details>

<details>
<summary>Worked solution</summary>

Use unique factorization to turn coprimality into binary choices.

1. The prime-power blocks are $2^3,3^2,5$.
2. For each block, coprimality requires assigning the entire block to either $a$ or $b$; splitting one block would create a common prime.
3. Each of the three independent assignments has two choices, giving $2^3=8$ ordered pairs, including pairs with a factor equal to one.

</details>
