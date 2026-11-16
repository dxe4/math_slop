# Canonical quotient and remainder: equality and bounds

*Easy · [Number theory](index.md)*

For division of $34$ by $7$, return every numbered canonical pair: $1$: $(q,r)=(5,-1)$. $2$: $(q,r)=(4,6)$. $3$: $(q,r)=(3,13)$. Require $34 = 7q + r$ and $0 \leq  r < 7$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[2],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

All conditions must hold together.

</details>

<details>
<summary>Hint 2</summary>

An equality alone does not make a remainder canonical.

</details>

<details>
<summary>Worked solution</summary>

The bounds matter as much as the division equality.

1. All three pairs satisfy the equality.
2. Only pair $2$ has a remainder in \[0,7), so the valid set is $\{2\}$.

</details>
