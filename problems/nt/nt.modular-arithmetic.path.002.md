# Residue arithmetic: inverse addition in residues

*Medium · [Number theory](index.md)*

Find x in $\{0,1,...,10\}$ such that $x + 9$ ≡ $4$ (mod 11).

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Subtract the known addend modulo $11$.

</details>

<details>
<summary>Hint 2</summary>

Reduce the resulting negative integer to its canonical residue.

</details>

<details>
<summary>Worked solution</summary>

Addition can be undone within the same residue system.

1. x ≡ $4 - 9 = -5$ ≡ $6$ mod $11$.
2. The unique representative in the specified range is $6$; $6 + 9 = 15$ ≡ $4$.

</details>
