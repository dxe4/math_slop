# Efficient modular powers: cycle index with offset

*Medium · [Number theory](index.md)*

The positive-power residues of $3$ modulo $10$ repeat as $3,9,7,1$ with period $4$. Find the canonical residue of $3^37$ modulo $10$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Write $37$ as a multiple of $4$ plus a remainder.

</details>

<details>
<summary>Hint 2</summary>

The cycle starts at exponent $1$, not exponent $0$.

</details>

<details>
<summary>Worked solution</summary>

Use the verified cycle with the correct exponent index.

1. $37 = 9 \times  4 + 1$, and $3^{4}$ ≡ $1$ mod $10$.
2. The remaining power is 3¹, so the residue is $3$.

</details>
