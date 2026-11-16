# Count the square divisors of a fixed integer

*Medium · [Original olympiad-style problems](index.md)*

How many positive divisors of $3600$ are perfect squares?

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Factor $3600$ into prime powers.

</details>

<details>
<summary>Hint 2</summary>

A square divisor chooses an even exponent independently for each prime.

</details>

<details>
<summary>Worked solution</summary>

Count constrained exponent choices.

1. The factorization is $3600=2^4 3^2 5^2$.
2. A square divisor uses exponent $0,2,4$ for $2$, exponent $0,2$ for $3$, and exponent $0,2$ for $5$.
3. Unique factorization makes these choices independent and distinct, giving $3\cdot2\cdot2=12$.

</details>
