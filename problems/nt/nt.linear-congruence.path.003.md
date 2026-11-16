# All solutions of a linear congruence: divide coefficients and modulus

*Medium · [Number theory](index.md)*

For arbitrary integer x, which numbered congruence is equivalent to $12x$ ≡ $18$ (mod 30)? $1$: $2x$ ≡ $3$ (mod 5). $2$: $2x$ ≡ $3$ (mod 30). $3$: $2x$ ≡ $3$ (mod 6). Return all equivalent option numbers.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Write the original condition as $30$ divides $12x-18$.

</details>

<details>
<summary>Hint 2</summary>

All three numbers share factor $6$; remove it consistently.

</details>

<details>
<summary>Worked solution</summary>

A common factor must be removed from the modulus as well as both coefficients.

1. $30$ divides $6$($2x-3$) exactly when $5$ divides $2x-3$, proving option $1$ equivalent.
2. Option $2$ and option $3$ have no solutions, whereas $x=4$ solves the original. Only option $1$ works.

</details>
