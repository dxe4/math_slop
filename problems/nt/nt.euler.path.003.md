# Euler's theorem: exponent reduction and residual power

*Medium · [Number theory](index.md)*

Given $\varphi (15)=8$ and $\gcd (7,15)=1$, find the canonical residue of $7^100$ modulo $15$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Euler gives $7^8$ ≡ $1$ modulo $15$.

</details>

<details>
<summary>Hint 2</summary>

Reduce $100$ modulo $8$, then evaluate the remaining power carefully.

</details>

<details>
<summary>Worked solution</summary>

Exponent reduction still leaves a residue calculation to complete.

1. 100 = 12 × 8 + 4, so $7^100$ ≡ $7^{4}$ mod $15$.
2. Since $7^{2}$ ≡ $49$ ≡ 4, we have $7^{4}$ ≡ $4^{2}$ ≡ $16$ ≡ $1$ mod $15$.

</details>
