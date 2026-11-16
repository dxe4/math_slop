# Residue arithmetic: check canonical results

*Medium · [Number theory](index.md)*

For $a = 5, b = 8$ modulo $9$, return every correct numbered canonical result. $1$: $a + b$ has residue $4$. $2$: ab has residue $5$. $3$: $a - b$ has residue $6$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,3],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Reduce $13,40$ and $-3$ modulo $9$.

</details>

<details>
<summary>Hint 2</summary>

A canonical residue must lie from $0$ through $8$.

</details>

<details>
<summary>Worked solution</summary>

Checking an arithmetic claim requires the operation and the residue convention.

1. $13$ has residue $4, 40$ has residue $4$, and $-3$ has residue $6$.
2. Statements $1$ and $3$ are correct; statement $2$ gives the wrong product residue.

</details>
