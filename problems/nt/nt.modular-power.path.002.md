# Efficient modular powers: track squared residues

*Medium · [Number theory](index.md)*

Find canonical residues modulo $13$ of $2^{2}, 2^{4}$ and $2^{8}$. Return square, fourth, eighth.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"square":4,"fourth":3,"eighth":9},"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Each requested power is the square of the previous one.

</details>

<details>
<summary>Hint 2</summary>

Reduce after each square so the intermediate numbers stay small.

</details>

<details>
<summary>Worked solution</summary>

Repeated squaring reuses reduced intermediate values.

1. $2^{2}$ ≡ $4$ and $2^{4}$ ≡ $4^{2} = 16$ ≡ $3$ mod $13$.
2. Then $2^{8}$ ≡ $3^{2} = 9$ mod $13$, giving $4,3,9$.

</details>
