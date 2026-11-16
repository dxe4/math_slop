# Find a valid reason that an odd number is composite

*Easy · [Number theory](index.md)*

Which numbered statements correctly justify that $49$ is composite? Return the set of statement numbers. $1$: Every odd integer greater than $2$ is prime. $2$: $49 = 7 \times  7$, with both factors strictly between $1$ and $49$. $3$: $49$ is odd, so checking the divisor $2$ alone establishes compositeness.

```answer
{"answer":{"kind":"finite_integer_set","expected":[2],"checker_scope":"Checks the entire requested finite set, ignoring order and duplicates; does not certify a written proof."}}
```

<details>
<summary>Hint 1</summary>

A nontrivial factor pair is enough to establish compositeness.

</details>

<details>
<summary>Hint 2</summary>

Oddness only rules out divisibility by $2$; it does not rule out other divisors.

</details>

<details>
<summary>Worked solution</summary>

Odd composite numbers exist; a concrete nontrivial divisor settles compositeness.

1. Statement $2$ displays the factorization $49 = 7 \times  7$ with nontrivial positive factors.
2. Statement $1$ is false, and statement $3$ gives no composite factor witness.
3. Only statement $2$ correctly justifies compositeness, giving $\{2\}$.

</details>
