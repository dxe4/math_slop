# Coprime Chinese remainder theorem: canonical simultaneous solution

*Medium · [Number theory](index.md)*

Find x with $0 \leq  x < 15$ such that x ≡ $2$ (mod 3) and x ≡ $1$ (mod 5). The positive moduli $3$ and $5$ are coprime.

```answer
{"answer":{"kind":"integer","expected":11,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

List representatives of one congruence in the required range.

</details>

<details>
<summary>Hint 2</summary>

Among $1,6,11$, test the remainder modulo $3$.

</details>

<details>
<summary>Worked solution</summary>

Coprime CRT combines compatible residue conditions into one class modulo the product.

1. The candidates satisfying the second congruence are $1,6,11$. Only $11$ has remainder $2$ modulo $3$.
2. Thus $x=11$; coprimality ensures one solution class modulo $15$.

</details>
