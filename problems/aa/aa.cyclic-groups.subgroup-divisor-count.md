# Count cyclic subgroups through divisors

*Easy · [Abstract algebra problems](index.md)*

How many subgroups does a cyclic group of order $72$ have?

```answer
{"answer":{"kind":"integer","expected":12,"checker_scope":"Exact stated finite group or ring answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

A cyclic group has exactly one subgroup of each order dividing its order.

</details>

<details>
<summary>Hint 2</summary>

Factor the group order and count independent choices of prime exponents in a divisor.

</details>

<details>
<summary>Worked solution</summary>

Subgroups of a finite cyclic group correspond one-to-one with positive divisors.

1. The factorization is $72=2^3\cdot3^2$.
2. A divisor chooses an exponent from $0$ to $3$ for the first prime and from $0$ to $2$ for the second.
3. Thus there are $(3+1)(2+1)=12$ subgroups.

</details>
