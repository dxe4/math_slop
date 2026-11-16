# Divisibility and witnesses: direction and witness

*Easy · [Number theory](index.md)*

Return the numbers of all true statements. $1$: $6$ divides $54$ because $54 = 6 \times  9$. $2$: $54$ divides $6$ because $6 = 54 \times  (1/9)$. $3$: $-9$ divides $54$ because $54 = (-9) (-6)$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,3],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

A quotient must be an integer to witness divisibility.

</details>

<details>
<summary>Hint 2</summary>

The dividend and divisor have different roles.

</details>

<details>
<summary>Worked solution</summary>

Divisibility has a direction and an integer-witness condition.

1. Statements $1$ and $3$ give true equalities with integer witnesses.
2. Statement $2$ has a noninteger multiplier, so it does not establish divisibility. The answer is $\{1,3\}$.

</details>
