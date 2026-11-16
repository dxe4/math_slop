# Coprime Chinese remainder theorem: multiple period representatives

*Medium · [Number theory](index.md)*

Find all x in $\{0,1,...,55\}$ such that x ≡ $1$ (mod 4) and x ≡ $2$ (mod 7). The moduli are coprime.

```answer
{"answer":{"kind":"finite_integer_set","expected":[9,37],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Solve first in a range of length $28$.

</details>

<details>
<summary>Hint 2</summary>

Then add the product $4 \times  7$ as long as the value stays allowed.

</details>

<details>
<summary>Worked solution</summary>

A unique class can have several representatives in a longer interval.

1. $9$ satisfies both congruences, so coprime CRT gives precisely x ≡ $9$ mod $28$.
2. In the range $0$ through $55$ the representatives are $9$ and $37$.

</details>
