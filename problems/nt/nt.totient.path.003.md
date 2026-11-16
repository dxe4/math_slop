# Euler's totient: identify unit residue set

*Easy · [Number theory](index.md)*

List all r in $\{0,1,...,8\}$ having $\gcd (r,9)=1$. This is the unit set modulo $9$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,2,4,5,7,8],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

The only prime factor of $9$ is $3$.

</details>

<details>
<summary>Hint 2</summary>

Zero has $\gcd (0,9)=9$ and is excluded.

</details>

<details>
<summary>Worked solution</summary>

Unit enumeration must include every coprime residue class.

1. The representatives divisible by $3$ are $0,3,6$.
2. Removing them leaves $\{1,2,4,5,7,8\}$, with six units.

</details>
