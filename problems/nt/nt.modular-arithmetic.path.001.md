# Residue arithmetic: sum difference product

*Medium · [Number theory](index.md)*

Using canonical residues from $0$ through $6$, calculate $8 + 11, 8 - 11$ and $8 \times  11$ modulo $7$. Return sum, difference, product.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"sum":5,"difference":4,"product":4},"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Compute each integer operation and reduce its result.

</details>

<details>
<summary>Hint 2</summary>

A negative difference still needs a nonnegative canonical residue.

</details>

<details>
<summary>Worked solution</summary>

Residue arithmetic retains the modulus through each operation.

1. $19 = 2 \times  7 + 5, -3 = -1 \times  7 + 4$, and $88 = 12 \times  7 + 4$.
2. The entries are sum = $5$, difference = $4$, product = $4$.

</details>
