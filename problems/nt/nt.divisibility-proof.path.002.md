# Divisibility arguments: identify integer witness expression

*Medium · [Number theory](index.md)*

For arbitrary integers u,v, let $a = 5u$ and $b = 5v$. Which numbered expression is an integer witness k satisfying $a - 2b = 5k$ for every u,v? $1$: $u - v$. $2$: $u - 2v$. $3$: $5u - 2v$. Return all valid expression numbers.

```answer
{"answer":{"kind":"finite_integer_set","expected":[2],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Substitute a and b before collecting their common factor.

</details>

<details>
<summary>Hint 2</summary>

The multiplier outside the parentheses is $5$.

</details>

<details>
<summary>Worked solution</summary>

Factoring the common divisor exhibits the required integer witness.

1. $a - 2b = 5u - 10v = 5$($u - 2v$).
2. Since u,v are arbitrary integers, $u - 2v$ is an integer witness. The other expressions do not agree for every u,v.

</details>
