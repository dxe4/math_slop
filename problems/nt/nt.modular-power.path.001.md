# Efficient modular powers: reduce exponent by verified cycle

*Medium · [Number theory](index.md)*

The residues of $3^1$ through $3^6$ modulo $7$ are $3,2,6,4,5,1$; multiplication by $3$ repeats this cycle. Find the canonical residue of $3^20$ modulo $7$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Reduce the exponent by the supplied cycle length.

</details>

<details>
<summary>Hint 2</summary>

Use the cycle position corresponding to the remaining exponent.

</details>

<details>
<summary>Worked solution</summary>

A verified multiplicative cycle supports exponent reduction.

1. $20 = 3 \times  6 + 2$, and $3^6$ ≡ $1$ mod $7$.
2. Thus $3^20$ ≡ $3^{2}$ ≡ $2$ mod $7$.

</details>
