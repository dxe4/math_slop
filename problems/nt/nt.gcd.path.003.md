# Greatest common divisor: coprime versus prime

*Easy · [Number theory](index.md)*

Return all numbered coprime pairs, meaning gcd = $1$. $1$: $(9,16)$. $2$: $(10,25)$. $3$: $(14,15)$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,3],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Neither member needs to be prime.

</details>

<details>
<summary>Hint 2</summary>

Compare the positive common divisors of each pair.

</details>

<details>
<summary>Worked solution</summary>

Coprimality concerns the shared divisors of two inputs.

1. Pairs $1$ and $3$ have only $1$ as a positive common divisor.
2. Pair $2$ has gcd 5, so the coprime pair numbers are $\{1,3\}$.

</details>
