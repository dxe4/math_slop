# Bezout coefficients: verify bezout witnesses

*Medium · [Number theory](index.md)*

Which numbered integer pairs (x,y) satisfy $15x + 28y = 1$? Return all valid pair numbers. $1$: $(15,-8)$. $2$: $(-13,7)$. $3$: $(2,-1)$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,2],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Substitute each pair into the integer linear combination.

</details>

<details>
<summary>Hint 2</summary>

More than one pair can be valid.

</details>

<details>
<summary>Worked solution</summary>

Bezout coefficients are generally not unique.

1. Pairs $1$ and $2$ give $225 - 224 = 1$ and $-195 + 196 = 1$.
2. Pair $3$ gives 30 − 28 = 2, so the valid set is $\{1,2\}$.

</details>
