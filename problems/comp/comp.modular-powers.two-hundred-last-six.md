# Recover six terminal digits by squaring

*Medium · [Computational arithmetic problems](index.md)*

Find the integer between $0$ and $999999$ equal to $2^{100}$ modulo $1000000$.

```answer
{"answer":{"kind":"integer","expected":"205376","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Use repeated squaring and retain only residues at each stage.

</details>

<details>
<summary>Hint 2</summary>

Split the exponent into eighty plus twenty.

</details>

<details>
<summary>Worked solution</summary>

Repeated squaring keeps all intermediate arithmetic within a fixed modulus.

1. Modulo $1000000$, $2^{20}\equiv48576$, $2^{40}\equiv627776$ and $2^{80}\equiv706176$. Each later residue is the square of the previous one.
2. Thus $2^{100}\equiv706176\cdot48576\pmod{1000000}$.
3. The product is $34303205376$, whose residue is $205376$.

</details>
