# Prime, composite or neither: composite factor witness

*Easy · [Number theory](index.md)*

What is the smallest positive divisor of $77$ that is greater than $1$?

```answer
{"answer":{"kind":"integer","expected":7,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Test divisors in increasing order.

</details>

<details>
<summary>Hint 2</summary>

Check $2$ through $6$ before testing $7$.

</details>

<details>
<summary>Worked solution</summary>

A nontrivial divisor witnesses compositeness; minimality requires checking smaller candidates.

1. $77$ is not divisible by $2,3,4,5$ or $6$.
2. Since $77 = 7 \times  11$, the smallest divisor greater than $1$ is $7$, proving compositeness.

</details>
