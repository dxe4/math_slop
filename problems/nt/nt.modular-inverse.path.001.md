# Modular inverses: check coprimality

*Easy · [Number theory](index.md)*

List all a in $\{1,2,...,9\}$ that have a multiplicative inverse modulo $10$. An inverse exists exactly when $\gcd (a,10)=1$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,3,7,9],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Exclude inputs with a common prime factor with $10$.

</details>

<details>
<summary>Hint 2</summary>

The prime factors of $10$ are $2$ and $5$.

</details>

<details>
<summary>Worked solution</summary>

Modular inversion requires coprimality.

1. The candidates not divisible by $2$ or $5$ are $1,3,7,9$.
2. They are exactly the candidates coprime to 10, so all and only these have inverses.

</details>
