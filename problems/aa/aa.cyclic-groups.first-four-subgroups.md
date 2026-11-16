# Find the smallest cyclic group with four subgroups

*Medium · [Abstract algebra problems](index.md)*

What is the smallest order of a finite cyclic group having exactly $4$ subgroups?

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact stated finite group or ring answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The number of subgroups is the number of positive divisors of the order.

</details>

<details>
<summary>Hint 2</summary>

An integer with four divisors has only two possible shapes in its prime factorization.

</details>

<details>
<summary>Worked solution</summary>

Classify four-divisor integers and minimize the corresponding possibilities.

1. If the order has exactly four divisors, it is either $p^3$ for a prime $p$, or $pq$ for two distinct primes.
2. The smallest cube case is $2^3=8$, while the smallest distinct-prime product is $2\cdot3=6$.
3. A cyclic group of order $6$ indeed has subgroups of orders $1,2,3,6$. Thus the smallest order is $6$.

</details>
